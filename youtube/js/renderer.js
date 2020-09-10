/**
 * @author Eo Jinseok
 * @date 2020.09.09
 * @description
 * This renderer allows you to create YouTube Side Bar dynamically on the left of the screen.
 * But you notice that it doesn't support for mobile devices.
 */
class SideBarRenderer {

    /**
     * @type {App} parent
     */
    constructor(parent) {
        SideBarRenderer.Instance = this;
        this._parent = parent;
        this.initWithCanvas();
        this.hide();
    }

    initWithCanvas() {
        this._element = document.createElement("div");
        this._element.id = "fakeRichParentContainer";
        this._element.style.position = "fixed";
        this._element.style.left = "0";
        this._element.style.top = "64px";
        this._element.style.width = "20%";
        this._element.style.height = "calc(100% - 64px)";  
        this._element.style.zIndex = 1000;

        this._isValid = false;
        
        document.querySelector("body").appendChild(this._element);
        document.querySelector("#menu").addEventListener("click", () => {
            if(this._isValid) {
                this.hide();                
            } else {
                this.show();
            }
        }, false);
    }

    isMobile() {
        const r = /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/i;
        return !!navigator.userAgent.match(r);
    }    

    hide() {
        this._element.style.display = "none";
        const side = document.querySelector(".side-items");
        side.style.paddingRight = "0";
        side.style.visibility = "visible";
        side.style.pointerEvents = "auto";
        this._isValid = false;
    }

    show() {
        this._element.style.display = "block";
        const side = document.querySelector(".side-items");
        side.style.paddingRight = "220px";
        side.style.visibility = "hidden";
        side.style.pointerEvents = "none";
        this._isValid = true;
    }

    render() {
        if(this.isMobile()) {
            console.log("You have executed in the mobile device such as iOS or Android platform");
            console.log("SideBarRenderer doesn't suppport in mobile device.");
            return;
        }

        // This calls a specific callback function after it has loading transparent image from the base64.
        const content = `
        <style>
            .fakeRichParentContainer {
                height: 90vh;
                z-index: 80;
                border: none;
            }

            .fakeRichContainer {
                width: 100%;                
                height: 100%;
                overflow-y: scroll;
                background: rgba(255,255,255,1.0);
            }

            .fakeRichContainer ul li {
                list-style: none;
                padding-left: 1em;
            }

            .fakeRichContainer a {
                text-decoration: none;
                color: #000;
                line-height: 3em;
            }

            .fakeRichContainer li[class*="menuButton"]:hover {
                background: rgba(0,0,0,0.4);
            }

            .fakeRichContainer p {
                line-break: auto;
            }

            .fakeRichContainer .bold {
                font-weight: bold;
                color: var(--description-color);                
            }

            .fakeRichContainer button {
                width: 80px;
                margin: 1em;
                margin-left: 0;
                border: 1px solid #065fd4;
                color: #065fd4;
                padding: 1px;
                border-radius: 2px;
                overflow: hidden;
                background: none;
                line-height: 32px;      
                position: relative;          
                cursor: pointer;             
            }

            .fakeRichContainer button::after {
                background-image: url(./images/header-icon-sheet.png);
                background-position: var(--login-icon-x) 0;
                width: 32px;
                height: 32px;
                content: "";
                display: block;
                float: left;
                clip-path: circle(50% at center center);
                z-index: -1;
                cursor: pointer;                   
            }

            .fakeRichContainer i {
                margin-right: 1em;
            }

            .fakeRichContainer .line-top {
                border-top: 1px solid #ccc;
                padding-top: 10px;
            }

            .fakeRichContainer .line-bottom {
                border-bottom: 1px solid #ccc;
                padding-bottom: 10px;
            }

            .fakeRichContainer button:active button-overlay::after {
                clip-path: content-box;
                animation-name: fill-in;
                width: 80px;
                position: absolute;
                width: 100%;
                height: 32px;
                left: 0;
                top:0;
                content: ":)";
                clip-path: circle(50% at center center);
                background: #ececec;
                opacity: 0.8;
                z-index: 0;
                transform: scale(1.5);
                animation-name: zoom-in;
                animation-duration: 0.2s;
                animation-timing-function: ease-out;
            }            

        </style>
        <div class="fakeRichContainer">
            <ul>
                <li class="menuButton"><a href=""><span><i class="fas fa-home"></i></span>홈</a></li>
                <li class="menuButton"><a href=""><span><i class="fas fa-home"></i></span>인기</a></li>
                <li class="menuButton"><a href=""><span><i class="fas fa-home"></i></span>구독</a></li>
                <li class="menuButton line-top"><a href=""><span><i class="fas fa-home"></i></span>보관함</a></li>
                <li class="menuButton"><a href=""><span><i class="fas fa-home"></i></span>시청 기록</a></li>
                <li class="line-top line-bottom">
                    <p>로그인하면 동영상에 좋아요를 표시하고 댓글을 달거나 구독할 수 있습니다.</p>
                    <button>로그인
                        <button-overlay>
                        </button-overlay>
                    </button>
                </li>
                <li>
                    <p class="bold">인기 YOUTUBE</p>
                </li>
                <li class="menuButton"><a href=""><span><i class="fas fa-home"></i></span>음악</a></li>
                <li class="menuButton"><a href=""><span><i class="fas fa-home"></i></span>스포츠</a></li>
                <li class="menuButton"><a href=""><span><i class="fas fa-home"></i></span>게임</a></li>
                <li class="menuButton"><a href=""><span><i class="fas fa-home"></i></span>영화</a></li>
                <li class="menuButton"><a href=""><span><i class="fas fa-home"></i></span>뉴스</a></li>
                <li class="menuButton"><a href=""><span><i class="fas fa-home"></i></span>실시간</a></li>
                <li class="menuButton"><a href=""><span><i class="fas fa-home"></i></span>학습</a></li>
                <li class="menuButton"><a href=""><span><i class="fas fa-home"></i></span>360°  동영상</a></li>
            </ul>
        </div>
        <img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' onload='SideBarRenderer.onLoad(this);this.parentNode.removeChild(this);'>
        `;

        this._element.innerHTML = content;

    }

    static onHide() {
        document.querySelector("#menu").click();    
    }

    static onLoad() {
        
    }

    /**
     * it is possible to reuse SideBarRenderer throughout our website.
     */
    static GetInstance() {
        if(!SideBarRenderer.Instance) {
            SideBarRenderer.Instance = new SideBarRenderer();
        }
        return SideBarRenderer.Instance;
    }
}

SideBarRenderer.Instance = null;