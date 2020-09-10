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

    load() {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", `${location.href.slice(0,location.href.lastIndexOf("/"))}/data/sidebar.html`);
            xhr.onload = function() {
                resolve(xhr.responseText);
            }
            xhr.onerror = reject;
            xhr.send();
        });
    }

    async render() {
        if(this.isMobile()) {
            console.log("You have executed in the mobile device such as iOS or Android platform");
            console.log("SideBarRenderer doesn't suppport in mobile device.");
            return;
        }

        // This calls a specific callback function after it has loading transparent image from the base64.
        await this.load().then(result => {
            this._element.innerHTML = result;
        }).catch(err => {
            console.warn(err);
        });

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