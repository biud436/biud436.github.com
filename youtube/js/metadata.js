"use strict";

/**
 * 인터넷에 연결되지 않았을 경우, 다음 데이터로 처리한다.
 */
const thumbnailData = ["https://i.ytimg.com/vi/i2nGKDW9ffU/hq720.jpg?sqp=-…IhCGAFwAQ==&rs=AOn4CLC7_fcjDEoC7gNh-TE_kr3UYjUq4Q", "https://i.ytimg.com/vi/5mZk_ItZLSw/hqdefault.jpg?s…IhCGAFwAQ==&rs=AOn4CLBI_PYaRX4eVvPNbVnMe18g9nyqWg", "https://i.ytimg.com/vi/ctv0Vn6FuG4/hq720.jpg?sqp=-…IhCGAFwAQ==&rs=AOn4CLDEt0CAz01LkORSDKfixBZ-EkA1ug", "https://i.ytimg.com/vi/JkE-2D-j6ps/hq720.jpg?sqp=-…IhCGAFwAQ==&rs=AOn4CLBFucw_O-V-_lK28TEAOpAYQfeVtA", "https://i.ytimg.com/vi/gdZLi9oWNZg/hq720.jpg?sqp=-…IhCGAFwAQ==&rs=AOn4CLD_Azszdgp8EDlUD_2_ZV_AAVQ8tA", "https://i.ytimg.com/vi/TMwDPyWO6M8/hq720.jpg?sqp=-…IhCGAFwAQ==&rs=AOn4CLB3uF0blYDEqw9ZLMb-sUrlEAUc7A", "https://i.ytimg.com/vi/Tfh0ytz8S0k/hqdefault.jpg?s…IhCGAFwAQ==&rs=AOn4CLDAvR78QnBdJ6eIdrq6a7Gi60Q9jQ", "https://i.ytimg.com/vi/XRR5pBH4Zck/hq720_live.jpg?…IhCGAFwAQ==&rs=AOn4CLDEZlQ-fBs57CFY6X0K6bVVXb8dxQ", "https://i.ytimg.com/vi/cslSP59FrMw/hq720.jpg?sqp=-…IhCGAFwAQ==&rs=AOn4CLBZ6AT4k70BaefGZD-4n5taDiEtQg", "https://i.ytimg.com/vi/_8HgNmy2hJU/hq720.jpg?sqp=-…IhCGAFwAQ==&rs=AOn4CLBFFpBcdlZ7zrkyQhJOlaEyv9gn1Q", "https://i.ytimg.com/vi/uD4izuDMUQA/hq720.jpg?sqp=-…IhCGAFwAQ==&rs=AOn4CLBtFDmnGE1q7uayAJQ5ZFm0yEiJZw", "https://i.ytimg.com/vi/dmbM9H0OOUQ/hq720.jpg?sqp=-…IhCGAFwAQ==&rs=AOn4CLABClrko8z1diXODsCbk5TFGUJzSw", "https://i.ytimg.com/vi/5_i2mhbZkIo/hq720.jpg?sqp=-…IhCGAFwAQ==&rs=AOn4CLAouGb1cK_zFKF1riVPR-SONpxJcw", "https://i.ytimg.com/vi/hp2Ek1cA1LE/hq720.jpg?sqp=-…IhCGAFwAQ==&rs=AOn4CLBD_XUjp3lhZjxM414u72TYmlYc1g", "https://i.ytimg.com/vi/OYP9hvy4MHQ/hq720.jpg?sqp=-…IhCGAFwAQ==&rs=AOn4CLCgzW4Oy4HklT9hcZQ0FdQVtoMoIg", "https://i.ytimg.com/vi/ueWQYxUKtIM/hq720.jpg?sqp=-…IhCGAFwAQ==&rs=AOn4CLBJ5cAinBJcdMkW9IqvNk3qM3YGsg", "", "", "", "", "", "", "", "", ""];
const linkData = ["https://www.youtube.com/watch?v=i2nGKDW9ffU", "https://www.youtube.com/watch?v=5mZk_ItZLSw", "https://www.youtube.com/watch?v=ctv0Vn6FuG4", "https://www.youtube.com/watch?v=JkE-2D-j6ps", "https://www.youtube.com/watch?v=gdZLi9oWNZg", "https://www.youtube.com/watch?v=TMwDPyWO6M8", "https://www.youtube.com/watch?v=Tfh0ytz8S0k", "https://www.youtube.com/watch?v=XRR5pBH4Zck", "https://www.youtube.com/watch?v=cslSP59FrMw", "https://www.youtube.com/watch?v=_8HgNmy2hJU", "https://www.youtube.com/watch?v=uD4izuDMUQA", "https://www.youtube.com/watch?v=dmbM9H0OOUQ", "https://www.youtube.com/watch?v=5_i2mhbZkIo", "https://www.youtube.com/watch?v=hp2Ek1cA1LE", "https://www.youtube.com/watch?v=OYP9hvy4MHQ", "https://www.youtube.com/watch?v=ueWQYxUKtIM", "https://www.youtube.com/watch?v=4sHNzkYiISw", "https://www.youtube.com/watch?v=bAWvR2ulCJ4", "https://www.youtube.com/watch?v=nSfUj5IQcsg", "https://www.youtube.com/watch?v=cRdrFKHLgss", "https://www.youtube.com/watch?v=iOYD_8btldA", "https://www.youtube.com/watch?v=WY08wWyLLNY", "https://www.youtube.com/watch?v=R1SncZOJOWo", "https://www.youtube.com/watch?v=Oew7c8-cgQc", ""];
const avatarData = ["https://yt3.ggpht.com/a-/AOh14GiQrOX7Mzotu7l59i_RngMReNNwjuOwBHC0FQ=s68-c-k-c0x00ffffff-no-rj-mo", "https://yt3.ggpht.com/a-/AOh14Gi2QsF7qa1BSz05M5eIfwEY_0NYWI_ABkJqBw=s68-c-k-c0x00ffffff-no-rj-mo", "https://yt3.ggpht.com/a-/AOh14GjEHca4ZeqYZTtt1AMDd2Dza99LKYkCUc_QxQ=s68-c-k-c0x00ffffff-no-rj-mo", "https://yt3.ggpht.com/a-/AOh14Gi8IdweZnn86Zg2BPUwRv8O3Axa05fpTXUL7g=s68-c-k-c0x00ffffff-no-rj-mo", "https://yt3.ggpht.com/a-/AOh14GgQafIVB9HWRujHXB2cKYiBNyig51As_VInrQ=s68-c-k-c0x00ffffff-no-rj-mo", "https://yt3.ggpht.com/a-/AOh14GhT5kTESVR7r09Q6chQC-ef4bRhWW-xgoBzOQ=s68-c-k-c0x00ffffff-no-rj-mo", "https://yt3.ggpht.com/a-/AOh14Gg4a_g_YjOvWLLWTmYurfFZTS3CkZoBoEjreg=s68-c-k-c0x00ffffff-no-rj-mo", "https://yt3.ggpht.com/a-/AOh14GjDa0wvOKxRQYIqCXXygbB5dUVDpU6suwqpHw=s68-c-k-c0x00ffffff-no-rj-mo", "https://yt3.ggpht.com/a-/AOh14GiuWgz6D8M9QtG_L5huwZ1kfTRLJkpCsHhSTQ=s68-c-k-c0x00ffffff-no-rj-mo", "https://yt3.ggpht.com/a-/AOh14GgLog3594cBFY2oQzXerMQVXlNxnKyOubd4qg=s68-c-k-c0x00ffffff-no-rj-mo", "https://yt3.ggpht.com/a-/AOh14GieZHILbVUXTh676THKOR-TKFxIuiFvgq_xUA=s68-c-k-c0x00ffffff-no-rj-mo", "https://yt3.ggpht.com/a-/AOh14Gitwq2tA_O-hnFvQMyMbotL-owTD93Qx1qDRA=s68-c-k-c0x00ffffff-no-rj-mo", "", "", "", "", "", "", "", "", "", "", "", ""];
const metaData = [{
    "title": "구라철 | 김구라 2차 저격? 매니저, 스타일리스트, 피디까지! 터질게 터졌다!? | 구라로그📹 EP.8",
    "channelName": "구라철",
    "viewCount": "조회수 2.7만회\n4시간 전"
}, {
    "title": "[Big Mac Chant] 실제 매장에서 빅맥송으로 주문하기ㅋㅋㅋㅋㅋㅋ!!!!!!!!",
    "channelName": "Big Mac Song",
    "viewCount": "조회수 257만회\n8년 전"
}, {
    "title": "심플! 미니멀! 유튜브 인트로 템플릿 무료 공유! // 존코바 // 애프터이펙트 // 무료템플릿 // 모션엘리먼츠",
    "channelName": "JohnKOBA Design",
    "viewCount": "조회수 7.1천회\n1일 전"
}, {
    "title": "(뉴스 모음) 불타는 주식시장, 거래대금 30조 돌파 / 미국 증시 역대 최고가 행진 중",
    "channelName": "슈카월드",
    "viewCount": "조회수 13만회\n1일 전"
}, {
    "title": "BTS (방탄소년단) 'Dynamite' Official MV",
    "channelName": "Big Hit Labels",
    "viewCount": "조회수 2.9억회\n2주 전"
}, {
    "title": "몇백억대 자산가들도 요플레뚜껑을 핥아먹을까?",
    "channelName": "진용진",
    "viewCount": "조회수 235만회\n5개월 전"
}, {
    "title": "\"구식\" 기기에서 그래픽을 표시하는 방법 파트 1 - 코모도어와 닌텐도",
    "channelName": "The 8-Bit Guy",
    "viewCount": "조회수 502만회\n5년 전"
}, {
    "title": "[LIVE] Active Cases - Coronavirus Pandemic : Real Time Counter, World Map, News",
    "channelName": "Roylab Stats",
    "viewCount": "324명 시청 중"
}, {
    "title": "웬만하면 이 영상 보지마세요...진짜 미친듯이 개선된 삼성 갤럭시 Z 폴드2 핸즈온!! 1세대와 차이점은 무엇?",
    "channelName": "ITSub잇섭",
    "viewCount": "조회수 70만회\n1일 전"
}, {
    "title": "[sub] 🥔EP.5-2 ‘이식당 2.0’ 업그레이드 컴플리트  | 나홀로 이식당 풀버전",
    "channelName": "채널 십오야",
    "viewCount": "조회수 119만회\n6일 전"
}, {
    "title": "TIMELAPSE OF THE FUTURE: A Journey to the End of Time (4K)",
    "channelName": "melodysheep",
    "viewCount": "조회수 4234만회\n1년 전"
}, {
    "title": "갈비왕 만나서 네고해왔습니다 [네고왕] Ep.4",
    "channelName": "달라스튜디오",
    "viewCount": "조회수 22만회\n3시간 전"
}, {
    "title": "문 (V.O.S) - 임한별",
    "channelName": "임한별",
    "viewCount": "조회수 42만회\n2년 전"
}, {
    "title": "How Do We Know What Stars Are Made Of?",
    "channelName": "PBS Space Time",
    "viewCount": "조회수 14만회\n2일 전"
}, {
    "title": "#114: Google CTF",
    "channelName": "GynvaelEN",
    "viewCount": "조회수 3.1천회\n스트리밍 시간: 1일 전"
}, {
    "title": "[판다로그] 생후 40일 된 아기판다의 귀여운 하루 | 에버랜드 판다월드 (Baby Panda)",
    "channelName": "에버랜드 - EVERLAND",
    "viewCount": "조회수 6.7만회\n6시간 전"
}, {
    "title": "워렌 버핏이 일본 주식시장에 7조원을 투자한 이유",
    "channelName": "ぱく家(박가네)",
    "viewCount": "조회수 7.3만회\n1일 전"
}, {
    "title": "전세계 관객들이 뽑은 인생영화 1위",
    "channelName": "빨강도깨비",
    "viewCount": "조회수 111만회\n11개월 전"
}, {
    "title": "고양이의 ‘이 행동’ 질투한다는 의미였다?!",
    "channelName": "비마이펫",
    "viewCount": "조회수 6.7천회\n57분 전"
}, {
    "title": "[#김비서가왜그럴까] 편집자 하드 다 털었습니다.. 1~6화 40분 만에 몰아보기 l #Diggle",
    "channelName": "tvN D ENT",
    "viewCount": "조회수 162만회\n3개월 전"
}, {
    "title": "우주과학소식 - 우리은하에 최소한 36개의 외계문명 존재 /우리은하에 지구형 외계행성 약 60억 개 추산",
    "channelName": "지식 N 상식",
    "viewCount": "조회수 2.6만회\n1일 전"
}, {
    "title": "[ENG] 본격 1:1 진검승부! ⚡️신들의 전쟁 제 2경기⚡️ 이수근 VS 신동엽",
    "channelName": "이수근 채널",
    "viewCount": "조회수 118만회\n1주 전"
}, {
    "title": "괴물같은 인간들을 섬기는 안드로이드들의 끔찍한 선택 / 디트로이트 비컴 휴먼 스토리 - Part. 1",
    "channelName": "GCL 지씨엘",
    "viewCount": "조회수 34만회\n3주 전"
}, {
    "title": "법의 통제가 사라진 12시간. 퍼지데이 (더 퍼지:거리의반란)",
    "channelName": "영일남CINEMA",
    "viewCount": "조회수 53만회\n5개월 전"
}]

String.prototype.toArray = function() {
    return this.split("");
  };

String.prototype.reverse = function() {
    return this.toArray().reverse().join("");
};

String.prototype.toCommaAlpha = function(){
    return this.reverse().match(/.{1,4}/g).join(",").reverse();
};       