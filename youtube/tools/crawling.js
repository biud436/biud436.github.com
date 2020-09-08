const axios = require("axios").default;
const cheerio = require("cheerio");
const fs = require("fs");

class App {

    /**
     * 크롬에서 접속한 것처럼 속이기 위해 User Agent 와 referer 설정
     */
    async downloadHTML() {
        return await axios.get("https://www.youtube.com/", {
            headers: {
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36",
                "referer": "https://www.youtube.com/",
            }
        });
    }

    start() {
        console.log("유튜브 데이터 다운로드를 시작합니다.");

        this.downloadHTML().then(res => {
            const $ = cheerio.load(res.data);
            const list = $("script");
            let retData = "";

            for(let i = 0; i < list.length; i++) {
                const child = list[i].firstChild;
                const type = list[i].type;

                // ytInitialData 변수를 찾는다.
                if(child && type === "script") {
                    const percent = Math.round((i / (list.length || 1)) * 100, 2);
                    console.log(`유튜브 데이터를 찾았습니다 (${percent}%)`);
                    if(child.data.indexOf(`window["ytInitialData"] = {`) >= 0) {
                        retData = child.data;
                    }
                }
            }

            const endIndex = retData.indexOf("};");
            retData = retData.substring(0, endIndex + 1);

            retData = retData + `;\nconst ytCrawlingDate = \"${new Date().toISOString()}\";`;

            fs.writeFileSync("js/data.js", JSON.parse(JSON.stringify(retData, null, "\t")), "utf8");

            console.log("유튜브 데이터 다운로드 완료 (100%)");
            
        }).catch(err => {
            console.warn(err);
        });
    }    
}

const app = new App();
app.start();