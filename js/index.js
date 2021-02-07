import {MoreButton} from "./MoreButton.js";
import {CanvasManager} from "./CanvasManager.js";
import {SkillComponent} from "./SkillComponent.js";

/**
 * @author 어진석
 */
class App {
    constructor() {
    }

    create() {

        // 캔버스 생성
        this.createCanvas();

        // 더보기 목록 동적 생성
        this.createMoreTextButton();

        // 동적 스킬 목록 생성
        this.createSkillList();
    }

    createCanvas() {
        try {
            this._canvas = new CanvasManager();
        } catch(e) {
            console.warn(e);
        }
    }

    createMoreTextButton() {

        const items = Array.from(document.querySelectorAll(".card-description"));

        items.forEach(div => {
            const moreButton = new MoreButton(div);
            moreButton.connect();
        })
    }

    /**
     * Creates a skill list in my portfolio using Vue.js
     */
    createSkillList() {
        const skills = new SkillComponent();
        const container = new Vue({
            el: '#skill-list'
        })
    }
}

const app = new App();
app.create();