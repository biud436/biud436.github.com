/**
 * @author Eo Jinseok
 * @date 2020.09.05
 * @description
 * This script allows you to control the HTML Element on our website dynamically.
 * 
 * The video list consists as follows.
 * 
 * Static Crawling Data (20) 
 * YouTube Trending Data(40)
 * 
 * The static crawling data supports the rich thumbnail, but there is available date that is only one day.
 */

"use strict";

const config = {
    maxCount: 40, 
    extraDataCount : 8,
    locale: {
        "ko": {
            DOCUMENT_TITLE: "유튜브 메인",
        },
        "en": {
            DOCUMENT_TITLE: "YouTube Clone",
        }
    },
    apiKey: `AIzaSyBxFnv8nYOIBd5V1ZQ_-FqrlnlruYDeIjw`
}

/**
 * @class DefaultComponent
 * @description
 */
class DefaultComponent {
    constructor() {
        this.initMembers();        
    }

    initMembers() {

    }

    start() {

    }
}

/**
 * @class DocumentComponent
 */
class DocumentComponent extends DefaultComponent {

    initMembers() {
        this._langCode = navigator.language.slice(0, 2); 
    }

    changeTitle() {
       
        const langCode = this._langCode;
        const data = config.locale[langCode];
        const defaultTitle = config.locale["en"].DOCUMENT_TITLE;

        document.title = (data) ? data.DOCUMENT_TITLE : defaultTitle;
    }

    start() {
        this.changeTitle();
    }
}

/**
 * @class SideBarContainer
 */
class SideBarContainer extends DefaultComponent {

    start() {
        const width = (32 * 2.5) / window.innerWidth * 100;
        const per = Math.round(width, 2);

        const elem = document.querySelector(".side-items");

        if(elem) {
            elem.style.width = `${per}%`;
        }
    }
}

/**
 * @class HeaderUIManager
 * @description
 * resize 이벤트가 호출되었을 때, 헤더의 폭에 따라 보여줄 버튼과 감출 버튼을 선택합니다.
 */
class HeaderUIManager extends DefaultComponent {

    start() {
        const lastX = window.innerWidth;
        const items = [];
        const rects = [];

        const fieldSet = document.querySelector(".header div:nth-child(3)");
        const rect = fieldSet.getBoundingClientRect();
        const minX = rect.x;
        const maxX = rect.right;

        items.push(document.querySelector(".header div:nth-child(4)"));
        items.push(document.querySelector(".header div:nth-child(5)"));
        items.push(document.querySelector(".header div:nth-child(6)"));
        items.push(document.querySelector(".header div:nth-child(7)"));
    
        let sum = 0;

        items.forEach(i => {
            const rect = i.getBoundingClientRect();
            sum += rect.width;
            rects.push(rect);
        });

        const wishButtonRect = [64, 64, 64, 64 + 32];
        const wishMarginRight = [64, 64, 64, 64];
        const wishButtonSum = wishButtonRect.reduce((a, b) => a + b, 0)

        // 버튼이 겹친다면 제거한다.
        let deltaWidth = 0;
        items.forEach((e, i, a) => {
            const w = wishButtonRect[i];
            deltaWidth += w;
            e.style.position = "absolute";
            e.style.top = "0.5em";
            e.style.right = (wishButtonSum) - deltaWidth + wishMarginRight[i] + "px";

            const currentRect = e.getBoundingClientRect();

            if(currentRect.x <= maxX) {
                e.style.opacity = "0";
            } else {
                e.style.opacity = "1.0";
            }
        });
    }

}

/**
 * @class App
 */
class App {
    
    initMembers() {
        this._components = [];
        this._components.push(new DocumentComponent());
        this._components.push(new SideBarContainer());
        this._components.push(new HeaderUIManager());

        for(let component of this._components) {
            component.start();
        }                

        this._scrollY = 0;
        this._youTubeData = [];

        App.Instance = this;

        this._timer = performance.now();
        this._redValue = 255;
        this._state = "none";
        this._prevScrollY = 0;
        this._maxItems = 0;
        this._currentNumber = 0;

        this.isNeededCrawling();

        this.downloadExtraData().then(() => {
            if(this._neededCrawling) {
                this.changeVideoGridData();
            }
        });

        this.addButtonController();

        window.addEventListener("resize", () => {
            for(let component of this._components) {
                component.start();
            }                          
        }, false);
    }

    /**
     * This method checks whether the crawling is needed.
     */
    isNeededCrawling() {
        this._ytCrawlingDate = new Date(ytCrawlingDate);
        this._neededCrawling = false;
        if(new Date().getDay() - this._ytCrawlingDate.getDay() >= 1) {
            this._neededCrawling = true;
        }   

        return this._neededCrawling;
    }

    initWithYouTubeLogo() {
        const home = document.getElementById("youtube-logo");
        home.addEventListener("click", () => {
            location.reload();
        });
    }

    initWithSearchButton() {
        const search = document.querySelector("#search-button");
        search.addEventListener("click", this.search.bind(this), false);
    }

    isValidInternetConnection() {
        return new Promise((resolve, reject) => {
            const virtualElem = document.createElement("img");
            virtualElem.src = thumbnailData[0];
            virtualElem.onload = resolve;
            virtualElem.onerror = reject;
        })
    }

    initWithMouseWheel() {
        if(this.isMobile()) {
            window.addEventListener("scroll", ev => {
                this.updateScroll(ev.deltaY);
            }, false);                 
        } else {
            // 마우스 휠을 내리면 1
            // 마우스 휠을 올리면 -1
            window.addEventListener("wheel", ev => {
                this.updateScroll(ev.deltaY);
            }, false);      
        }        
    }

    async initWithThumnailAll() {
        await this.isValidInternetConnection().then((res) => {
            
            if (!window.ytInitialData) {
                // 정적 크롤링 데이터가 없으면 아래 썸네일을 생성
                this.createThumbnail();
            } else {
                // 정적 크롤링 데이터가 있을 경우 아래 썸네일 생성
                this.createThumbnail2();
            }

        }).catch(err => {
            // 인터넷에 접속이 되어있지 않을 경우, 아래 썸네일 생성
            this.createThumbnail();
        });
    }

    initWithFontAwesome() {
        const script = document.createElement('script');
        script.src = "https://kit.fontawesome.com/a99df0f94f.js";
        script.crossOrigin = "anonymous";
        document.getElementsByTagName('head')[0].appendChild(script);        
    }

    /**
     * 사이드바 메뉴를 동적으로 생성합니다.
     */
    initWithSIdeBarRenderer() {
        this._renderer = SideBarRenderer.GetInstance();
        this._renderer.render();
    }

    async start() {
        this.initMembers();
        this.initWithYouTubeLogo();
        this.initWithSearchButton();
        this.isValidInternetConnection();
        this.initWithThumnailAll();
        this.initWithMouseWheel();  
        this.initWithFontAwesome();
        this.initWithSIdeBarRenderer();
    }

    /**
     * 사이드바 버튼을 누르면 SVG 아이콘을 빨간색으로 변경합니다.
     */
    addButtonController() {
        const items = document.querySelectorAll(".side-items li");
        const checked = (elem) => {
            elem.querySelector("a svg").style.fill = "red";
        }        
        const unchecked = (elem) => {
            items.forEach(i => {
                if(i !== elem) {
                    i.querySelector("a svg").style.fill = "";
                }
            })
        };

        items.forEach(elem => {
            elem.addEventListener("click", () => {
                checked(elem);
                unchecked(elem);
            }, false);    
        });

        const item = document.querySelector(".side-items li a svg");
        item.style.fill = "red";

    }

    getData(extraDataCount) {
        return new Promise((resolve, reject) => {
            // 유튜브 API 키
            const xhr = new XMLHttpRequest();
            const maxCount = extraDataCount || config.maxCount;
            const myYouTubeKey = config.apiKey;
            const url = [
                `https://www.googleapis.com/youtube/v3/videos?`,
                `part=snippet&part=contentDetails&part=statistics&`,
                `regionCode=KR&chart=mostPopular&maxResults=${maxCount}&`,
                `key=${myYouTubeKey}`
            ].join("");

            xhr.open("GET", url);

            // CORS 설정
            xhr.setRequestHeader('X-Referer', window.location.href);

            xhr.onload = function() {
                if(xhr.status === 200) {
                    resolve(xhr.responseText);
                } else {
                    reject(xhr.status);
                }
            }

            xhr.onerror = function(err) {
                reject(err);
            }

            xhr.send();
        });  
    }

    isMobile() {
        const r = /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/i;
        return !!navigator.userAgent.match(r);
    }

    /**
     * 한글 자릿수에 천, 만, 억을 붙이는 메소드
     * @param {Number} viewCount 
     */
    getViewCount(viewCount) {
        const digits = [];
        const Formatter = new Intl.NumberFormat('ko-KR',  {style: "decimal", useGrouping:false});
        const numberString = Formatter.format(Math.abs(viewCount)).toCommaAlpha().split(",").reverse();

        for(let i = 0; i < numberString.length; i++) {
            const n = Number(numberString[i]);
            if(n === 0 || !n) continue;
            
            if(i === 0) continue;

            const currentChar = ["천", "만", "억"][i];
            if(currentChar != "") digits.push(n + currentChar);

        }

        return digits.reverse().join("X");
    }

    /**
     * 시간 차이를 계산합니다.
     * @param {Date} currentTime 
     * @param {Date} publishedTime 
     */
    getDayInterval(currentTime, publishedTime) {
        const c = currentTime.getTime();
        const s = publishedTime.getTime();
        const thod = (60 * 60 * 24 * 1000);
        const dayInterval = (c / (thod)) - (s / (thod));

        return dayInterval;
    }

    async downloadExtraData() {
        await this.getData().then(ret => {
            if(typeof(ret) === "string") ret = JSON.parse(ret);
            const items = ret.items;

            for(let i = 0; i < items.length; i++) {
                try {
                    const data = items[i];
                    const snippet = data.snippet;
                    const details = data.contentDetails;
                    const statistics = data.statistics;
                    
                    // 재생 시간을 두 자릿수로 맞춘다.
                    let lengthText = details.duration.replace("PT", "").replace("M", ":").replace("S", "");
                    lengthText = lengthText.split(":").map(t => {
                        return t.padStart(2, "0");
                    }).join(":");
    
                    // 채널명
                    const channelName = snippet.channelTitle;
    
                    // 업로드 시간
                    const publishedTime = new Date(snippet.publishedAt);
                    const currentTime = new Date();     
                    
                    const days = Math.floor(this.getDayInterval(currentTime, publishedTime));
                    let publishedTimeText = "";
    
                    // 심플한 시간을 가져오는 기능이 없어 직접 구현 (계산이 안 맞을 수도 있음)
                    let mark = "";
                    if(days >= 365) {
                        mark = "년 전";
                        publishedTimeText = Math.floor(days / 365.0) + mark;
                    } else if(days >= 31) {
                        mark = "개월 전";
                        publishedTimeText = Math.floor(days / 31) + mark;
                    } else if(days >= 7) {
                        mark = "주 전";
                        publishedTimeText = Math.floor(days / 7) + mark;
                    } else if(days >= 1) {
                        mark = "일 전";
                        publishedTimeText = days + mark;
                    } else {
                        mark = "시간 전";
                        publishedTimeText = (Math.abs(23 - publishedTime.getHours()) + (currentTime.getHours())) % 24 + mark;
                    }
    
                    const viewCount = statistics.viewCount;
                    const shortViewCountText = this.getViewCount(viewCount);
    
                    const thumbnail = snippet.thumbnails.high.url;
                    const title = snippet.title;
                    
                    //  유튜브 데이터 API에는 아바타를 가져오는 기능이 없다.
                    const avatar = snippet.thumbnails.default.url;
    
                    const videoId = `https://www.youtube.com/watch?v=${data.id}`;
    
                    // 유튜브 데이터 API에는 webp 썸네일을 가져오는 기능이 없다.
                    const richThumbnail = null;
    
                    this._youTubeData.push({
                        lengthText,
                        channelName,
                        publishedTimeText,
                        shortViewCountText,
                        viewCount,
                        thumbnail,
                        title,
                        avatar,
                        videoId,
                        richThumbnail
                    });                    
    
                    this._maxItems++;
                } catch(e) {

                }

            }


        }).catch(err => {
            console.warn("구글 메타데이터를 받아오지 못했습니다 : " + e);
        })
    }

    /**
     * 스크롤을 내리면 유튜브 헤더가 화면에 고정되고, 다시 끝까지 올리면 제자리를 찾는 기능.
     * @param {Number}} value 
     */
    updateScroll(value) {
        /**
         * @type {HTMLDivElement}
         */
        let item = document.querySelector(".header");
        this._scrollY += (value > 0) ? 1 : -1;
        this._scrollY = Math.min(Math.max(this._scrollY, -50), 50);

        if (window.scrollY > 1) {
            item.style.position = "fixed";
            item.style.zIndex = "100";

            if(this.isMobile()) {
                item.style.transition = "all .4s";
                setTimeout(() => {
                    if(this._state == "scroll") item.style.transform = "translateY(-100%)";
                }, 400);
            }
            this._state = "scroll";
        } else {
            if (window.scrollY <= 2) {       
                if(this.isMobile()) {
                    item.style.transform = "";
                } else {
                    item.style.transition = "";
                }
                item.style.position = "relative";
                this._scrollY = 0;
                this._state = "none";
            }
        }

        this._prevScrollY = this._scrollY;

    }

    updateLinear(t) {
        if (this._state === "none") return;
        const item = document.querySelector("#youtube-search");

        // 400ms마다 새로운 동영상 탐색
        if (performance.now() - this._timer >= 400) {
            item.value = `${t}`;
            this._redValue = (this._redValue - (16 * t)) % 255;

            this._timer = performance.now();

            if (this._redValue <= 1) {
                this._state = "none";
                this._redValue = 255;
            }

            if (this._scrollY - this._prevScrollY > 0) {
                this._state = "scroll-down";
            }
            this.updateScroll(this._scrollY - this._prevScrollY > 0);

            // 유튜브 API를 이용하여 추가 데이터를 실시간으로 받아온다.
            if(this.isMobile()) {
                if(document.body.scrollTop + document.body.clientHeight == document.body.scrollHeight) {
                    this.appendItems();
    
                    this.getData(config.extraDataCount);                    
                }
            } else {
                const thod = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                if (thod === document.documentElement.scrollTop) {
                    this.appendItems();

                    this.getData(config.extraDataCount);
                }
            }
        

        }

    }

    static update(t) {
        if (App.Instance) {
            App.Instance.updateLinear(t % 1000 / 1000);
        }
        window.requestAnimationFrame(App.update);
    }

    getMetadata() {
        const thumbnailData = [];
        document.querySelectorAll("#thumbnail yt-img-shadow img").forEach(i => {
            thumbnailData.push(i.src);
        });

        const youTubeData = [];
        document.querySelectorAll("#metadata").forEach(i => {
            const root = i.parentElement;
            const title = root.previousElementSibling.querySelector("h3 #video-title-link").title;
            const channelName = i.querySelector("ytd-channel-name #tooltip").textContent.trim();
            const viewCount = document.querySelector("#metadata #metadata-line").innerText;
            youTubeData.push({
                title,
                channelName,
                viewCount
            });
        });

        const avatarData = [];
        document.querySelectorAll("#avatar-link img").forEach(i => {
            avatarData.push(i.src);
        });

        const linkData = [];
        document.querySelectorAll("#thumbnail").forEach(i => {
            linkData.push(i.href);
        });
    }

    /**
     * 유튜브 크롤링 데이터가 있을 때 썸네일을 자동 생성합니다.
     */
    createThumbnail2() {
        if (!window["ytInitialData"]) {
            console.warn("유튜브 데이터가 없습니다");
            return;
        }
        /**
         * @type {Array}
         */
        const contents = ytInitialData.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.richGridRenderer.contents;
        const youtubeData = [];
        const root = document.querySelector(".contents");
        const len = root.childElementCount;

        for (let i = 0; i < contents.length; i++) {
            if (!contents[i].richItemRenderer) {
                continue;
            }
            const myContents = contents[i].richItemRenderer.content;

            if (myContents.videoRenderer) {
                try {
                    const renderer = myContents.videoRenderer;
                    const lengthText = renderer.lengthText.simpleText;
                    const channelName = renderer.ownerText.runs[0].text;
                    const publishedTimeText = renderer.publishedTimeText.simpleText;
                    const shortViewCountText = renderer.shortViewCountText.simpleText;
                    const viewCount = renderer.viewCountText.simpleText;
                    const thumbnail = renderer.thumbnail.thumbnails[0].url;
                    let richThumbnail = null;

                    // webp 썸네일이 있는가? 
                    if (renderer.richThumbnail) {
                        richThumbnail = renderer
                            .richThumbnail
                            .movingThumbnailRenderer
                            .movingThumbnailDetails
                            .thumbnails[0].url;
                    }

                    const title = renderer.title.runs[0].text;
                    const videoId = `https://www.youtube.com/watch?v=${renderer.videoId}`;
                    const avatar = renderer
                        .channelThumbnailSupportedRenderers
                        .channelThumbnailWithLinkRenderer
                        .thumbnail
                        .thumbnails[0]
                        .url;

                    youtubeData.push({
                        lengthText,
                        channelName,
                        publishedTimeText,
                        shortViewCountText,
                        viewCount,
                        thumbnail,
                        title,
                        avatar,
                        videoId,
                        richThumbnail
                    });

                    this._maxItems++;

                } catch (e) {
                    console.warn(e);
                }

            }
        }

        this._youTubeData = youtubeData;
        this._currentNumber = len;

        for (let i = 0; i < len; i++) {
            try {
                const child = root.children[i];
                const imgElem = child.querySelector("img");
                const data = youtubeData[i];
                imgElem.src = data.thumbnail;
                imgElem.title = data.videoId;
                child.querySelector("a").href = data.videoId;

                // 썸네일을 클릭했을 때
                imgElem.onclick = () => {
                    location.href = data.videoId;
                }

                // 썸네일 위에 마우스가 올려졌을 때
                if (data.richThumbnail) {
                    imgElem.onmouseover = () => {
                        imgElem.src = data.richThumbnail;
                    };
                    imgElem.onmouseleave = () => {
                        imgElem.src = data.thumbnail;
                    }
                    imgElem.onerror = () => {
                        imgElem.src = data.thumbnail;
                    }
                }

                // 재생 시간 설정
                child.querySelector("#lengthText").setAttribute("value", data.lengthText);

                // 유튜브 아바타 설정
                child.querySelector("#avatar").src = data.avatar;

                child.querySelector("#video-title").href = data.videoId;
                child.querySelector("#video-title").innerText = data.title;
                child.querySelector("#video-title").title = data.title;
                child.querySelector("#video-subscriber").innerText = data.channelName;
                child.querySelector("#video-view-count").innerText = data.shortViewCountText + " " + data.publishedTimeText;
            } catch (e) {

            }
        }
    }

    search() {
        const search = document.querySelector("#youtube-search");
        const query = search.value.trim();
        let url = `https://www.youtube.com/results?search_query=${query}`;
        location.href = encodeURI(url);
    }

    createGrid(children) {

        for (let i = 0; i < 4; i++) {

            // 첫 번째 요소를 자식까지 복제한다.
            const node = root.firstElementChild.cloneNode(true);
            const data = this._youTubeData[this._currentNumber++];

            const imgElem = node.querySelector("img");
            imgElem.src = data.thumbnail;
            imgElem.title = data.videoId;
            node.querySelector("a").href = data.videoId;

            // 클릭했을 때
            imgElem.onclick = () => {
                location.href = data.videoId;
            }

            // 마우스 올려놓으면 멈춰있던 썸네일이 움직이는 처리
            if (data.richThumbnail) {
                imgElem.onmouseover = () => {
                    imgElem.src = data.richThumbnail;
                };
                imgElem.onmouseleave = () => {
                    imgElem.src = data.thumbnail;
                }
            }

            node.querySelector("#lengthText").setAttribute("value", data.lengthText);
            node.querySelector("#avatar").src = data.avatar;
            node.querySelector("#video-title").href = data.videoId;
            node.querySelector("#video-title").innerText = data.title;
            node.querySelector("#video-title").title = data.title;
            node.querySelector("#video-subscriber").innerText = data.channelName;
            node.querySelector("#video-view-count").innerText = data.shortViewCountText + " " + data.publishedTimeText;
            root.appendChild(node);
        }     
    }

    appendItems() {
        if (!this._youTubeData) return;
        const root = document.querySelector(".contents");

        if(!this.isMobile()) {
            if (this._currentNumber + 4 > this._maxItems) {
                if (this._state !== "none") {
                    const pElem = document.createElement("pre");
                    pElem.style.width = "max-content";
                    pElem.style.height = "max-content";
                    pElem.textContent = [
                        "유튜브 인기 동영상 데이터를 더 이상 받아올 수 없습니다"
                    ].join("\n");
                    pElem.style.background = "#030303";
                    pElem.style.textAlign = "center";
                    pElem.style.color = "#fff";
                    pElem.style.position = "fixed";
                    pElem.style.padding = "1em";
                    pElem.style.borderRadius = "15px";
                    pElem.style.bottom = "15px";
                    pElem.style.right = "0";
                    pElem.style.animation = "fade_out .1s ease-in";
                    pElem.style.animationPlayState = "playing";
    
                    document.body.appendChild(pElem);
    
                    setTimeout(() => {
                        document.body.removeChild(pElem);
                    }, 200);
                }
    
                return;
            }            
        }        

        // 다음 동영상 4개를 가져온다.
        for (let i = 0; i < 4; i++) {

            // 첫 번째 요소를 자식까지 복제한다.
            const node = root.firstElementChild.cloneNode(true);
            const data = this._youTubeData[this._currentNumber++];

            const imgElem = node.querySelector("img");
            imgElem.src = data.thumbnail;
            imgElem.title = data.videoId;
            node.querySelector("a").href = data.videoId;

            // 클릭했을 때
            imgElem.onclick = () => {
                location.href = data.videoId;
            }

            // 마우스 올려놓으면 멈춰있던 썸네일이 움직이는 처리
            if (data.richThumbnail) {
                imgElem.onmouseover = () => {
                    imgElem.src = data.richThumbnail;
                };
                imgElem.onmouseleave = () => {
                    imgElem.src = data.thumbnail;
                }
            }

            node.querySelector("#lengthText").setAttribute("value", data.lengthText);
            node.querySelector("#avatar").src = data.avatar;
            node.querySelector("#video-title").href = data.videoId;
            node.querySelector("#video-title").innerText = data.title;
            node.querySelector("#video-title").title = data.title;
            node.querySelector("#video-subscriber").innerText = data.channelName;
            node.querySelector("#video-view-count").innerText = data.shortViewCountText + " " + data.publishedTimeText;
            root.appendChild(node);
        }
    }

    changeVideoGridData() {
        const root = document.querySelector(".contents");
        const len = root.childElementCount;
        const crawlingCount = 20;
        this._currentNumber = crawlingCount;
        
        for (let i = 0; i < len; i++) {
            const node = root.children[i];
            const data = this._youTubeData[this._currentNumber++];

            const imgElem = node.querySelector("img");
            imgElem.src = data.thumbnail;
            imgElem.title = data.videoId;
            node.querySelector("a").href = data.videoId;

            // 클릭했을 때
            imgElem.onclick = () => {
                location.href = data.videoId;
            }

            // 마우스 올려놓으면 멈춰있던 썸네일이 움직이는 처리
            if (data.richThumbnail) {
                imgElem.onmouseover = () => {
                    imgElem.src = data.richThumbnail;
                };
                imgElem.onmouseleave = () => {
                    imgElem.src = data.thumbnail;
                }
            } else {
                imgElem.onmouseover = () => {
                    imgElem.src = data.thumbnail;
                };   
                imgElem.onmouseleave = () => {
                    imgElem.src = data.thumbnail;
                }                             
            }

            node.querySelector("#lengthText").setAttribute("value", data.lengthText);
            node.querySelector("#avatar").src = data.avatar;
            node.querySelector("#video-title").href = data.videoId;
            node.querySelector("#video-title").innerText = data.title;
            node.querySelector("#video-title").title = data.title;
            node.querySelector("#video-subscriber").innerText = data.channelName;
            node.querySelector("#video-view-count").innerText = data.shortViewCountText + " " + data.publishedTimeText;            
        }
    }

    /**
     * 인터넷이 연결되지 않았거나 유튜브 데이터가 없을 경우 아래 데이터로 표시한다.
     */
    createThumbnail() {
        const root = document.querySelector(".contents");
        const len = root.childElementCount;
        for (let i = 0; i < len; i++) {
            const child = root.children[i];
            const imgElem = child.querySelector("img");
            imgElem.src = thumbnailData[i];
            imgElem.onclick = () => {
                location.href = linkData[i];
            }
            child.querySelector("a").href = linkData[i];
            child.querySelector("#avatar").src = avatarData[i];
            child.querySelector("#video-title").href = linkData[i];
            child.querySelector("#video-title").innerText = metaData[i].title;
            child.querySelector("#video-title").title = metaData[i].title;
            child.querySelector("#video-subscriber").innerText = metaData[i].channelName;
            child.querySelector("#video-view-count").innerText = metaData[i].viewCount.replace("\n", " · ");
        }

    }
}

App.Instance = null;

const app = new App();
window.onload = function () {
    app.start();
    App.update();
};
