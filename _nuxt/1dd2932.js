(window.webpackJsonp=window.webpackJsonp||[]).push([[10,2,3,4,5,6,7,8,9],{299:function(t,e,l){"use strict";l.r(e);var r=l(1).default.extend({props:["imgsrc","normal","status"],data:function(){var t=this.normal;return{src:this.imgsrc,text:t}},methods:{hover:function(){this.text=this.status},leave:function(){this.text=this.normal}},computed:{getFullText:function(){return this.text}}}),o=l(39),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-sm"},[l("div",{staticClass:"card",on:{mouseenter:t.hover,mouseleave:t.leave}},[l("img",{staticClass:"card-img-top",attrs:{width:"256",height:"256",src:t.src,alt:"Card image cap"}}),t._v(" "),l("div",{staticClass:"card-body"},[l("p",{staticClass:"card-text text-center"},[t._v(t._s(t.getFullText))])])])])}),[],!1,null,null,null);e.default=component.exports},300:function(t,e,l){"use strict";l.r(e);var r=l(1).default.extend({}),o=l(39),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("header",{staticClass:"masthead"},[l("div",{staticClass:"container"},[l("div",{staticClass:"masthead-subheading"},[t._v("Welcome To Our Studio!")]),t._v(" "),l("div",{staticClass:"masthead-heading text-uppercase"},[t._v("백엔드 프로그래머")]),t._v(" "),l("a",{staticClass:"btn btn-primary btn-xl text-uppercase js-scroll-trigger",attrs:{href:"#portfolio"}},[t._v("포트폴리오 목록 확인")])])])}],!1,null,null,null);e.default=component.exports},301:function(t,e,l){"use strict";l.r(e);var r=l(1).default.extend({}),o=l(39),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"page-section bg-white",attrs:{id:"skill-list"}},[l("div",{staticClass:"container"},[t._m(0),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"row col-sm",attrs:{id:"skill-list"}},[l("div",{staticClass:"row"},[l("skill-component",{attrs:{imgsrc:"/assets/img/skills/HTML.png",normal:"HTML",status:"familiar"}}),t._v(" "),l("skill-component",{attrs:{imgsrc:"/assets/img/skills/CSS3.png",normal:"CSS3",status:"familiar"}}),t._v(" "),l("skill-component",{attrs:{imgsrc:"/assets/img/skills/JS.png",normal:"ES5/ES6",status:"familiar"}}),t._v(" "),l("skill-component",{attrs:{imgsrc:"/assets/img/skills/TS.png",normal:"타입스크립트",status:"familiar"}})],1),t._v(" "),l("div",{staticClass:"row mt-2"},[l("skill-component",{attrs:{imgsrc:"/assets/img/skills/JSP.png",normal:"JSP",status:"familiar"}}),t._v(" "),l("skill-component",{attrs:{imgsrc:"/assets/img/skills/SASS.png",normal:"SASS",status:"familiar"}}),t._v(" "),l("skill-component",{attrs:{imgsrc:"/assets/img/skills/AWS.png",normal:"AWS EC2",status:"familiar"}}),t._v(" "),l("skill-component",{attrs:{imgsrc:"/assets/img/skills/MYSQL.png",normal:"MySQL/MariaDB",status:"familiar"}})],1),t._v(" "),l("div",{staticClass:"row mt-2"},[l("skill-component",{attrs:{imgsrc:"/assets/img/skills/WEBPACK.png",normal:"웹팩",status:"familiar"}}),t._v(" "),l("skill-component",{attrs:{imgsrc:"/assets/img/skills/NODEJS.png",normal:"Node.js",status:"familiar"}}),t._v(" "),l("skill-component",{attrs:{imgsrc:"/assets/img/skills/EXPRESS.png",normal:"Express",status:"familiar"}})],1),t._v(" "),l("div",{staticClass:"row mt-2"},[l("skill-component",{attrs:{imgsrc:"/assets/img/skills/SPRING-BOOT.png",normal:"스프링 부트",status:"beginner"}}),t._v(" "),l("skill-component",{attrs:{imgsrc:"/assets/img/skills/DOCKER.png",normal:"도커",status:"familiar"}}),t._v(" "),l("skill-component",{attrs:{imgsrc:"/assets/img/skills/NGINX.png",normal:"Nginx",status:"familiar"}}),t._v(" "),l("skill-component",{attrs:{imgsrc:"/assets/img/skills/NESTJS.png",normal:"Nest.js",status:"familiar"}}),t._v(" "),l("skill-component",{attrs:{imgsrc:"/assets/img/skills/VUEJS.png",normal:"Vue.js",status:"familiar"}})],1)])])])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"text-center"},[l("h2",{staticClass:"section-heading text-uppercase"},[t._v("My Skills")]),t._v(" "),l("h3",{staticClass:"section-subheading text-muted"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{SkillComponent:l(299).default})},302:function(t,e,l){"use strict";l.r(e);l(54);var r=l(19),o=l(1).default.extend({data:function(){return{contents:{shoppingMall:"",weather:"",initial2D:"",androidAppBuilder:"",initialEditor:""}}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.loadPortfolioShoppingMall();case 2:return e.next=4,t.loadPortfolioWeather();case 4:return e.next=6,t.loadPortfolioAndroidAppBuilder();case 6:return e.next=8,t.loadPortfolioInitial2D();case 8:return e.next=10,t.loadPortfolioInitialEditorBuilder();case 10:case"end":return e.stop()}}),e)})))()},methods:{loadPortfolioShoppingMall:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var l,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("https://portfolio.biud436.com/markdown/shoppingMall.md");case 2:(l=e.sent)&&(data=l.data,t.contents.shoppingMall=window.marked(data));case 4:case"end":return e.stop()}}),e)})))()},loadPortfolioWeather:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var l,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("https://portfolio.biud436.com/markdown/weather.md");case 2:(l=e.sent)&&(data=l.data,t.contents.weather=window.marked(data));case 4:case"end":return e.stop()}}),e)})))()},loadPortfolioInitial2D:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var l,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("https://portfolio.biud436.com/markdown/initial2D.md");case 2:(l=e.sent)&&(data=l.data,t.contents.initial2D=window.marked(data));case 4:case"end":return e.stop()}}),e)})))()},loadPortfolioAndroidAppBuilder:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var l,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("https://portfolio.biud436.com/markdown/androidAppBuilder.md");case 2:(l=e.sent)&&(data=l.data,t.contents.androidAppBuilder=window.marked(data));case 4:case"end":return e.stop()}}),e)})))()},loadPortfolioInitialEditorBuilder:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var l,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("https://portfolio.biud436.com/markdown/initialEditor.md");case 2:(l=e.sent)&&(data=l.data,t.contents.initialEditor=window.marked(data));case 4:case"end":return e.stop()}}),e)})))()}}}),n=l(39),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"page-section bg-light",attrs:{id:"portfolio"}},[l("div",{staticClass:"container"},[t._m(0),t._v(" "),l("div",{staticClass:"row"},[l("a",{attrs:{id:"shopping"}}),t._v(" "),l("div",{staticClass:"col-md-12 mb-4"},[l("div",{staticClass:"row no-gutters"},[t._m(1),t._v(" "),l("div",{staticClass:"col-md-8"},[l("div",{staticClass:"card-body"},[l("p",{staticClass:"card-text card-description active",domProps:{innerHTML:t._s(t.contents.shoppingMall)}}),t._v(" "),l("br"),t._v(" "),l("br"),t._v(" "),l("h5",{staticClass:"card-text"},[t._v("기타 :")]),t._v(" "),l("a",{staticClass:"btn btn-secondary",attrs:{href:"https://github.com/biud436/project_one"}},[t._v("깃허브")]),t._v(" "),l("a",{staticClass:"portfolio-link btn btn-success",attrs:{"data-toggle":"modal",href:"#portfolioModal1"}},[t._v("상세 설명")])])])])])]),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-12 mb-4"},[l("div",{staticClass:"row no-gutters"},[t._m(2),t._v(" "),l("div",{staticClass:"col-md-8"},[l("div",{staticClass:"card-body"},[l("p",{staticClass:"card-text card-description active",domProps:{innerHTML:t._s(t.contents.weather)}}),t._v(" "),l("a",{staticClass:"btn btn-danger",attrs:{href:"http://biud436.github.io/weather/"}},[t._v("포트폴리오 보기")]),t._v(" "),l("a",{staticClass:"btn btn-secondary",attrs:{href:"https://github.com/biud436/weather"}},[t._v("깃허브로 이동")]),t._v(" "),l("a",{staticClass:"portfolio-link btn btn-success",attrs:{"data-toggle":"modal",href:"#portfolioModal2"}},[t._v("상세 설명")])])])])])]),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-12 mb-4"},[l("div",{staticClass:"row no-gutters"},[t._m(3),t._v(" "),l("div",{staticClass:"col-md-8"},[l("div",{staticClass:"card-body"},[l("p",{staticClass:"card-text card-description active",domProps:{innerHTML:t._s(t.contents.initialEditor)}}),t._v(" "),l("h5",{staticClass:"card-text"},[t._v("기타 :")]),t._v(" "),l("a",{staticClass:"btn btn-secondary",attrs:{href:"https://github.com/biud436/InitialEditor"}},[t._v("깃허브로 이동")]),t._v(" "),l("a",{staticClass:"portfolio-link btn btn-success",attrs:{"data-toggle":"modal",href:"#portfolioModal3"}},[t._v("상세 설명")])])])])])]),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-12 mb-4"},[l("div",{staticClass:"row no-gutters"},[t._m(4),t._v(" "),l("div",{staticClass:"col-md-8"},[l("div",{staticClass:"card-body"},[l("p",{staticClass:"card-text card-description active",domProps:{innerHTML:t._s(t.contents.androidAppBuilder)}}),t._v(" "),l("h5",{staticClass:"card-text"},[t._v("다운로드 :")]),t._v(" "),l("a",{staticClass:"btn btn-danger",attrs:{href:"https://github.com/biud436/MV-App-Builder/releases"}},[t._v("Releases")]),t._v(" "),l("br"),t._v(" "),l("br"),t._v(" "),l("h5",{staticClass:"card-text"},[t._v("개발 기간 :")]),t._v(" "),l("p",[t._v("3개월")]),t._v(" "),l("br"),t._v(" "),l("h5",{staticClass:"card-text"},[t._v("기타 :")]),t._v(" "),l("a",{staticClass:"btn btn-secondary",attrs:{href:"https://github.com/biud436/MV-App-Builder"}},[t._v("깃허브")]),t._v(" "),l("a",{staticClass:"portfolio-link btn btn-success",attrs:{"data-toggle":"modal",href:"#portfolioModal5"}},[t._v("상세 설명")])])])])])]),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-12 mb-4"},[l("div",{staticClass:"row no-gutters"},[t._m(5),t._v(" "),l("div",{staticClass:"col-md-8"},[l("div",{staticClass:"card-body"},[l("p",{staticClass:"card-text"}),t._v(" "),l("br"),t._v(" "),l("p",{staticClass:"card-text card-description active",domProps:{innerHTML:t._s(t.contents.initial2D)}}),t._v(" "),l("h5",{staticClass:"card-text"},[t._v("기타 :")]),t._v(" "),l("a",{staticClass:"btn btn-secondary",attrs:{href:"https://github.com/biud436/Initial2D"}},[t._v("깃허브")]),t._v(" "),l("a",{staticClass:"portfolio-link btn btn-success",attrs:{"data-toggle":"modal",href:"#portfolioModal6"}},[t._v("상세 설명")])])])])])])])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"text-center"},[l("h2",{staticClass:"section-heading text-uppercase"},[t._v("포트폴리오")]),t._v(" "),l("h3",{staticClass:"section-subheading text-muted"})])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-md-4"},[l("div",{staticClass:"portfolio-item"},[l("a",{staticClass:"portfolio-link",attrs:{"data-toggle":"modal",href:"#portfolioModal1"}},[l("div",{staticClass:"portfolio-hover"},[l("div",{staticClass:"portfolio-hover-content"},[l("i",{staticClass:"fas fa-plus fa-3x"})])]),t._v(" "),l("img",{staticClass:"img-fluid",attrs:{src:"/assets/img/portfolio/portfolio1.png",width:"400",height:"300",alt:""}})]),t._v(" "),l("div",{staticClass:"portfolio-caption"},[l("div",{staticClass:"portfolio-caption-heading"},[t._v("쇼핑몰 프로젝트")]),t._v(" "),l("div",{staticClass:"portfolio-caption-subheading text-muted"},[t._v("\n                  쇼핑몰\n                ")])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-md-4"},[l("div",{staticClass:"portfolio-item"},[l("a",{staticClass:"portfolio-link",attrs:{"data-toggle":"modal",href:"#portfolioModal2"}},[l("div",{staticClass:"portfolio-hover"},[l("div",{staticClass:"portfolio-hover-content"},[l("i",{staticClass:"fas fa-plus fa-3x"})])]),t._v(" "),l("img",{staticClass:"img-fluid",attrs:{src:"/assets/img/portfolio/weather.png",width:"400",height:"300",alt:""}})]),t._v(" "),l("div",{staticClass:"portfolio-caption"},[l("div",{staticClass:"portfolio-caption-heading"},[l("a",{attrs:{name:"weather"}},[t._v("주간 날씨")])]),t._v(" "),l("div",{staticClass:"portfolio-caption-subheading text-muted"},[t._v("\n                  날씨\n                ")])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-md-4"},[l("div",{staticClass:"portfolio-item"},[l("a",{staticClass:"portfolio-link",attrs:{"data-toggle":"modal",href:"#portfolioModal3"}},[l("div",{staticClass:"portfolio-hover"},[l("div",{staticClass:"portfolio-hover-content"},[l("i",{staticClass:"fas fa-plus fa-3x"})])]),t._v(" "),l("img",{staticClass:"img-fluid",attrs:{src:"https://github.com/biud436/Initial2D/raw/master/docs/img/new_editor.png",alt:""}})]),t._v(" "),l("div",{staticClass:"portfolio-caption"},[l("div",{staticClass:"portfolio-caption-heading"},[l("a",{attrs:{name:"map-editor"}},[t._v("맵 에디터")])]),t._v(" "),l("div",{staticClass:"portfolio-caption-subheading text-muted"},[t._v("\n                  Initial Editor\n                ")])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-md-4"},[l("div",{staticClass:"portfolio-item"},[l("a",{staticClass:"portfolio-link",attrs:{"data-toggle":"modal",href:"#portfolioModal5"}},[l("div",{staticClass:"portfolio-hover"},[l("div",{staticClass:"portfolio-hover-content"},[l("i",{staticClass:"fas fa-plus fa-3x"})])]),t._v(" "),l("img",{staticClass:"img-fluid",attrs:{src:"https://github.com/biud436/MV-App-Builder/raw/master/screenshot.png",alt:""}})]),t._v(" "),l("div",{staticClass:"portfolio-caption"},[l("div",{staticClass:"portfolio-caption-heading"},[l("a",{attrs:{name:"short-url"}},[t._v("안드로이드 APK 빌더")])]),t._v(" "),l("div",{staticClass:"portfolio-caption-subheading text-muted"},[t._v("\n                  빌더\n                ")])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-md-4"},[l("div",{staticClass:"portfolio-item"},[l("a",{staticClass:"portfolio-link",attrs:{"data-toggle":"modal",href:"#portfolioModal6"}},[l("div",{staticClass:"portfolio-hover"},[l("div",{staticClass:"portfolio-hover-content"},[l("i",{staticClass:"fas fa-plus fa-3x"})])]),t._v(" "),l("img",{staticClass:"img-fluid",attrs:{src:"/assets/img/portfolio/pp6.png",alt:""}})]),t._v(" "),l("div",{staticClass:"portfolio-caption"},[l("div",{staticClass:"portfolio-caption-heading"},[l("a",{attrs:{name:"short-url"}},[t._v("Initial2D")])]),t._v(" "),l("div",{staticClass:"portfolio-caption-subheading text-muted"},[t._v("\n                  게임 엔진\n                ")])])])])}],!1,null,null,null);e.default=component.exports},303:function(t,e,l){"use strict";l.r(e);var r=l(1).default.extend({}),o=l(39),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"py-5"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"})])])}],!1,null,null,null);e.default=component.exports},304:function(t,e,l){"use strict";l.r(e);var r=l(1).default.extend({}),o=l(39),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"page-section",attrs:{id:"contact"}},[l("div",{staticClass:"container"},[l("div",{staticClass:"text-center"},[l("h2",{staticClass:"section-heading text-uppercase"},[t._v("Contact Us")]),t._v(" "),l("h3",{staticClass:"section-subheading text-muted"})]),t._v(" "),l("form",{attrs:{id:"contactForm",name:"sentMessage",novalidate:"novalidate"}},[l("div",{staticClass:"row align-items-stretch mb-5"},[l("div",{staticClass:"col-md-6"},[l("div",{staticClass:"form-group form-group-textarea mb-md-0"},[l("img",{staticClass:"img-thumbnail rounded-circle img-fluid",attrs:{width:"50%",src:"https://avatars1.githubusercontent.com/u/13586185?s=460&u=d695c01ba6ffbb01eb9230a7d7bb938b6d0c69e0&v=4",alt:""}})])]),t._v(" "),l("div",{staticClass:"col-md-6"},[l("div",{staticClass:"form-group mb-md-0"},[l("p",{staticClass:"help-block text-light"},[l("strong",[t._v("Github : ")]),l("a",{attrs:{href:"https://github.com/biud436/"}},[t._v("https://github.com/biud436/")])])]),t._v(" "),l("div",{staticClass:"form-group"},[l("p",{staticClass:"help-block text-light"},[l("strong",[t._v("Email : ")]),l("a",{attrs:{href:"mailto:biud436@gmail.com"}},[t._v("biud436@gmail.com")])])]),t._v(" "),l("div",{staticClass:"form-group"}),t._v(" "),l("div",{staticClass:"form-group mb-md-0"})])]),t._v(" "),l("div",{staticClass:"text-center"},[l("div",{attrs:{id:"success"}})])])])])}],!1,null,null,null);e.default=component.exports},305:function(t,e,l){"use strict";l.r(e);var r=l(1).default.extend({data:function(){return{}},mounted:function(){}}),o=l(39),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("footer",{staticClass:"footer py-4"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row align-items-center"},[l("div",{staticClass:"col-lg-4 text-lg-left"},[t._v("Copyright © 어진석 2021")]),t._v(" "),l("div",{staticClass:"col-lg-4 my-3 my-lg-0"},[l("a",{staticClass:"btn btn-dark btn-social mx-2",attrs:{href:"#!"}},[l("i",{staticClass:"fab fa-twitter"})]),t._v(" "),l("a",{staticClass:"btn btn-dark btn-social mx-2",attrs:{href:"#!"}},[l("i",{staticClass:"fab fa-facebook-f"})]),t._v(" "),l("a",{staticClass:"btn btn-dark btn-social mx-2",attrs:{href:"#!"}},[l("i",{staticClass:"fab fa-linkedin-in"})])]),t._v(" "),l("div",{staticClass:"col-lg-4 text-lg-right"},[l("a",{staticClass:"mr-3",attrs:{href:"#!"}},[t._v("Privacy Policy")]),t._v(" "),l("a",{attrs:{href:"#!"}},[t._v("Terms of Use")])])])])])}],!1,null,null,null);e.default=component.exports},306:function(t,e,l){"use strict";l.r(e);var r=l(1).default.extend({}),o=l(39),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("div",{staticClass:"portfolio-modal modal fade",attrs:{id:"portfolioModal1",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[l("div",{staticClass:"modal-dialog"},[l("div",{staticClass:"modal-content"},[l("div",{staticClass:"close-modal",attrs:{"data-dismiss":"modal"}},[l("img",{attrs:{src:"assets/img/close-icon.svg",alt:"Close modal"}})]),t._v(" "),l("div",{staticClass:"container"},[l("div",{staticClass:"row justify-content-center"},[l("div",{staticClass:"col-lg-8"},[l("div",{staticClass:"modal-body"},[l("h2",{staticClass:"text-uppercase"},[t._v("쇼핑몰 클론")]),t._v(" "),l("p",{staticClass:"item-intro text-muted"},[t._v("\n                  이 프로젝트는 쇼핑몰 중개 사이트입니다.\n                ")]),t._v(" "),l("img",{staticClass:"img-fluid d-block mx-auto",attrs:{src:"assets/img/portfolio/portfolio1.png",alt:""}}),t._v(" "),l("p",[t._v("\n                  이 프로젝트는 실제 존재하는 사이트의 클론(Clone) 프로젝트로\n                  시작했고 팀 프로젝트입니다.\n                ")]),t._v(" "),l("p"),t._v(" "),l("p",[t._v("\n                  ES6의 import/export 문을 적극 활용하여 여러 명이 협업할 수\n                  있게 모듈화 프로그래밍을 주도하였으며\n                ")]),t._v(" "),l("p",[t._v("\n                  자주 사용되는 기능(로그인, 메뉴, 최근 상품, 카테고리)을\n                  컴포넌트 패턴으로 정리하여 자바 패키지처럼 간단히 로드하여\n                  사용할 수 있게 하였습니다\n                ")]),t._v(" "),l("p"),t._v(" "),l("p",[t._v("\n                  거의 모든 데이터는 AJAX를 통해 동적으로 생성되고 있으며, 이\n                  과정에서 JSON 데이터를 주고 받습니다.\n                ")]),t._v(" "),l("p",[t._v("\n                  이 때문에 스크롤 시 많은 데이터가 로드되는 것을 사전에\n                  차단하기 위해 underscore.js의 쓰로틀링 방지 기능 사용하여\n                  한정된 데이터를 순서대로 받아오게 했습니다.\n                ")]),t._v(" "),l("p"),t._v(" "),l("p",[t._v("\n                  소셜 로그인 OAuth API를 이용하여 네이버, 카카오, 페이스북\n                  아이디로 회원 가입 또는 로그인을 할 수 있습니다.\n                ")]),t._v(" "),l("p",[t._v("또한 페이스북 계정으로 댓글을 남길 수도 있습니다.")]),t._v(" "),l("p"),t._v(" "),l("p",[t._v("문의를 위한 MVC2 패턴으로 디자인된 게시판이 존재합니다.")]),t._v(" "),l("p"),t._v(" "),l("p",[t._v("\n                  회원 가입 시, 비밀번호는 SHA-256을 이용하여 단방향 암호화\n                  처리가 되어 있으며 상품은 관리자 모드를 통해 업로드가\n                  가능합니다.\n                ")]),t._v(" "),l("p",[t._v("\n                  또한 카카오페이를 통해 테스트 주문을 할 수가 있고 실제로\n                  결제가 되었는지 REST API로 검증하는 코드가 들어갔습니다.\n                ")]),t._v(" "),l("p"),t._v(" "),l("p",[t._v("\n                  장바구니 기능은 세션으로 구현되었으며, 비밀번호 찾기는 SMTP\n                  이메일 인증을 거칩니다.\n                ")]),t._v(" "),l("p",[t._v("\n                  이때, 이메일에 JWT가 포함된 인증 링크가 발송되며 링크를\n                  누르면 임시 비밀번호가 발급되는 방식으로 구현하였습니다.\n                ")]),t._v(" "),l("p"),t._v(" "),l("p",[t._v("\n                  현재 오라클 클라우드 리눅스 우분투 서버에 톰캣과 마리아DB\n                  그리고 https 인증서를 설치하여 서버를 24시간 가동하고\n                  있습니다.\n                ")]),t._v(" "),l("ul",{staticClass:"list-inline"},[l("li",[t._v("개발 기간 : 2020.10.01 ~ 2021.01.05")]),t._v(" "),l("li",[t._v("사용한 기술: HTML5, CSS/SCSS, JavaScript, Java/JSP")]),t._v(" "),l("li",[t._v("\n                    사용한 라이브러리: jQuery, 아임포트(카카오페이), 네이버\n                    로그인, 카카오 로그인, 페이스북 로그인, 페이스북 소셜 댓글\n                    플러그인, EmailJS(메일 인증), Java Mail + JWT(비밀번호\n                    찾기)\n                  ")])]),t._v(" "),l("button",{staticClass:"btn btn-primary",attrs:{"data-dismiss":"modal",type:"button"}},[l("i",{staticClass:"fas fa-times mr-1"}),t._v("\n                  Close Project\n                ")])])])])])])])]),t._v(" "),l("div",{staticClass:"portfolio-modal modal fade",attrs:{id:"portfolioModal2",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[l("div",{staticClass:"modal-dialog"},[l("div",{staticClass:"modal-content"},[l("div",{staticClass:"close-modal",attrs:{"data-dismiss":"modal"}},[l("img",{attrs:{src:"assets/img/close-icon.svg",alt:"Close modal"}})]),t._v(" "),l("div",{staticClass:"container"},[l("div",{staticClass:"row justify-content-center"},[l("div",{staticClass:"col-lg-8"},[l("div",{staticClass:"modal-body"},[l("h2",{staticClass:"text-uppercase"},[t._v("날씨")]),t._v(" "),l("p",{staticClass:"item-intro text-muted"},[t._v("\n                  월-금까지의 날씨 데이터를 차트로 보여주는 사이트입니다.\n                ")]),t._v(" "),l("img",{staticClass:"img-fluid d-block mx-auto",attrs:{src:"assets/img/portfolio/weather.png",alt:""}}),t._v(" "),l("p",[t._v("\n                  이 사이트는 월요일부터 금요일까지의 데이터를 차트로 보여주는\n                  사이트입니다.\n                ")]),t._v(" "),l("p",[t._v("\n                  물방울 모양의 아이콘과 풍향과 기온 차트는 HTML 캔버스 API를\n                  이용하여 직접 그렸습니다.\n                ")]),t._v(" "),l("ul",{staticClass:"list-inline"},[l("li",[t._v("Date: 2020.09.15")])]),t._v(" "),l("button",{staticClass:"btn btn-primary",attrs:{"data-dismiss":"modal",type:"button"}},[l("i",{staticClass:"fas fa-times mr-1"}),t._v("\n                  Close Project\n                ")])])])])])])])]),t._v(" "),l("div",{staticClass:"portfolio-modal modal fade",attrs:{id:"portfolioModal3",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[l("div",{staticClass:"modal-dialog"},[l("div",{staticClass:"modal-content"},[l("div",{staticClass:"close-modal",attrs:{"data-dismiss":"modal"}},[l("img",{attrs:{src:"/assets/img/close-icon.svg",alt:"Close modal"}})]),t._v(" "),l("div",{staticClass:"container"},[l("div",{staticClass:"row justify-content-center"},[l("div",{staticClass:"col-lg-8"},[l("div",{staticClass:"modal-body"},[l("h2",{staticClass:"text-uppercase"},[t._v("웹 기반 타일맵 에디터")]),t._v(" "),l("p",{staticClass:"item-intro text-muted"},[t._v("\n                  타일맵을 편집하고 내보낼 수 있는 도구입니다.\n                ")]),t._v(" "),l("div",{staticClass:"embed-responsive embed-responsive-16by9"},[l("iframe",{staticClass:"embed-responsive-item",attrs:{width:"727",height:"409",src:"https://www.youtube.com/embed/q9t3xOL30bI",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),t._v(" "),l("p",[t._v("\n                  요즘은 크로스 플랫폼 구동을 위하여 프로그램이 웹기반으로\n                  개발되기도 합니다.\n                ")]),t._v(" "),l("p",[t._v("\n                  예를 들면, 네이버 워드, 구글 Docs, 한글 웹버전, Visual\n                  Studio Code, Atom 등 많은 프로그램이 이를 입증합니다.\n                ")]),t._v(" "),l("p",[t._v("\n                  Electron과 CSS 등의 웹기술을 활용하면 크로스 플랫폼\n                  프로그램을 보다 더 쉽게 만들 수 있습니다.\n                ")]),t._v(" "),l("p",[t._v("\n                  이 프로젝트는 타입스크립트로 작성되었고, 웹팩으로\n                  번들링되었습니다.\n                ")]),t._v(" "),l("p",[t._v("\n                  또한 펜, 사각형, 원형 툴과 총 4개의 레이어를 지원하며,\n                  채우기 기능은 Flood-Fill 알고리즘을 이용하여 빠른 채우기가\n                  가능합니다.\n                ")]),t._v(" "),l("p",[t._v("\n                  이외에도 Dark 테마와 Light 테마 변경 기능을 제공하고,\n                  Electron의 fs 모듈을 통해 타일맵 데이터를 JSON으로 내보낼 수\n                  있습니다.\n                ")]),t._v(" "),l("ul",{staticClass:"list-inline"},[l("li",[t._v("2020.10.01")])]),t._v(" "),l("button",{staticClass:"btn btn-primary",attrs:{"data-dismiss":"modal",type:"button"}},[l("i",{staticClass:"fas fa-times mr-1"}),t._v("\n                  Close Project\n                ")])])])])])])])]),t._v(" "),l("div",{staticClass:"portfolio-modal modal fade",attrs:{id:"portfolioModal4",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[l("div",{staticClass:"modal-dialog"},[l("div",{staticClass:"modal-content"},[l("div",{staticClass:"close-modal",attrs:{"data-dismiss":"modal"}},[l("img",{attrs:{src:"/assets/img/close-icon.svg",alt:"Close modal"}})]),t._v(" "),l("div",{staticClass:"container"},[l("div",{staticClass:"row justify-content-center"},[l("div",{staticClass:"col-lg-8"},[l("div",{staticClass:"modal-body"},[l("h2",{staticClass:"text-uppercase"},[t._v("Short URL")]),t._v(" "),l("p",{staticClass:"item-intro text-muted"},[t._v("\n                  짧은 주소 변환 서비스입니다.\n                ")]),t._v(" "),l("img",{staticClass:"img-fluid d-block mx-auto",attrs:{src:"/assets/img/portfolio/shorturl.png",alt:""}}),t._v(" "),l("p",[t._v("\n                  짧은 주소 변환 서비스는 Node.js Express와 깃허브 페이지를\n                  이용하였습니다.\n                ")]),t._v(" "),l("p",[t._v("\n                  DB에 원본 주소와 MD5로 변환된 주소가 저장되며 접속 시 DB를\n                  확인하여 리다이렉션하는 서비스입니다.\n                ")]),t._v(" "),l("ul",{staticClass:"list-inline"},[l("li",[t._v("Date: 2021.01.13 ~ 2021.01.14")])]),t._v(" "),l("button",{staticClass:"btn btn-primary",attrs:{"data-dismiss":"modal",type:"button"}},[l("i",{staticClass:"fas fa-times mr-1"}),t._v("\n                  Close Project\n                ")])])])])])])])]),t._v(" "),l("div",{staticClass:"portfolio-modal modal fade",attrs:{id:"portfolioModal5",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[l("div",{staticClass:"modal-dialog"},[l("div",{staticClass:"modal-content"},[l("div",{staticClass:"close-modal",attrs:{"data-dismiss":"modal"}},[l("img",{attrs:{src:"assets/img/close-icon.svg",alt:"Close modal"}})]),t._v(" "),l("div",{staticClass:"container"},[l("div",{staticClass:"row justify-content-center"},[l("div",{staticClass:"col-lg-8"},[l("div",{staticClass:"modal-body"},[l("h2",{staticClass:"text-uppercase"},[t._v("안드로이드 앱 빌더")]),t._v(" "),l("p",{staticClass:"item-intro text-muted"},[t._v("\n                  Cordova와 Android SDK를 이용하여 안드로이드 APK를 자동\n                  생성해줍니다\n                ")]),t._v(" "),l("img",{staticClass:"img-fluid d-block mx-auto",attrs:{src:"https://github.com/biud436/MV-App-Builder/raw/master/screenshot.png",alt:""}}),t._v(" "),l("p",[t._v("\n                  코르도바 CLI과 안드로이드 SDK를 이용하여 안드로이드 앱을\n                  만들어주는 빌더 프로그램입니다(29 레벨까지만 지원)\n                ")]),t._v(" "),l("p",[t._v("\n                  자바 8 버전과 안드로이드 SDK 설치(19, 29, 30) 및 환경 변수\n                  설정, 코르도바를 설치해야 합니다\n                ")]),t._v(" "),l("button",{staticClass:"btn btn-primary",attrs:{"data-dismiss":"modal",type:"button"}},[l("i",{staticClass:"fas fa-times mr-1"}),t._v("\n                  Close Project\n                ")])])])])])])])]),t._v(" "),l("div",{staticClass:"portfolio-modal modal fade",attrs:{id:"portfolioModal6",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[l("div",{staticClass:"modal-dialog"},[l("div",{staticClass:"modal-content"},[l("div",{staticClass:"close-modal",attrs:{"data-dismiss":"modal"}},[l("img",{attrs:{src:"assets/img/close-icon.svg",alt:"Close modal"}})]),t._v(" "),l("div",{staticClass:"container"},[l("div",{staticClass:"row justify-content-center"},[l("div",{staticClass:"col-lg-8"},[l("div",{staticClass:"modal-body"},[l("h2",{staticClass:"text-uppercase"},[t._v("Initial2D")]),t._v(" "),l("p",{staticClass:"item-intro text-muted"},[t._v("C++ 2D 게임 엔진입니다.")]),t._v(" "),l("img",{staticClass:"img-fluid d-block mx-auto",attrs:{src:"/assets/img/portfolio/pp6.png",alt:""}}),t._v(" "),l("table",{staticClass:"table"},[l("thead",[l("tr",[l("th",{attrs:{align:"center"}},[t._v("구분")]),t._v(" "),l("th",{attrs:{align:"center"}},[t._v("내용")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{attrs:{align:"center"}},[t._v("Version")]),t._v(" "),l("td",{attrs:{align:"center"}},[t._v("Beta")])]),t._v(" "),l("tr",[l("td",{attrs:{align:"center"}},[t._v("Platform")]),t._v(" "),l("td",{attrs:{align:"center"}},[t._v("Windows")])]),t._v(" "),l("tr",[l("td",{attrs:{align:"center"}},[t._v("사용된 언어")]),t._v(" "),l("td",{attrs:{align:"center"}},[t._v("C++, Lua")])]),t._v(" "),l("tr",[l("td",{attrs:{align:"center"}},[t._v("Engine Type")]),t._v(" "),l("td",{attrs:{align:"center"}},[t._v("자체 개발 엔진")])]),t._v(" "),l("tr",[l("td",{attrs:{align:"center"}},[t._v("Graphics Device")]),t._v(" "),l("td",{attrs:{align:"center"}},[t._v("Windows GDI 사용")])]),t._v(" "),l("tr",[l("td",{attrs:{align:"center"}},[t._v("이미지 포맷")]),t._v(" "),l("td",{attrs:{align:"center"}},[t._v("*.PNG(libpng), *.BMP 지원")])]),t._v(" "),l("tr",[l("td",{attrs:{align:"center"}},[t._v("오디오 재생")]),t._v(" "),l("td",{attrs:{align:"center"}},[t._v("\n                        *.ogg 포함 대부분 포맷 지원 (SDL Audio 사용)\n                      ")])]),t._v(" "),l("tr",[l("td",{attrs:{align:"center"}},[t._v("동영상 재생")]),t._v(" "),l("td",{attrs:{align:"center"}},[t._v("동영상 재생 불가")])]),t._v(" "),l("tr",[l("td",{attrs:{align:"center"}},[t._v("하드웨어 가속 여부")]),t._v(" "),l("td",{attrs:{align:"center"}},[t._v("false")])]),t._v(" "),l("tr",[l("td",{attrs:{align:"center"}},[t._v("Script Engine")]),t._v(" "),l("td",{attrs:{align:"center"}},[t._v("Lua v5.0.3")])]),t._v(" "),l("tr",[l("td",{attrs:{align:"center"}},[t._v("Map Editor")]),t._v(" "),l("td",{attrs:{align:"center"}},[t._v("개발 중 (일렉트론)")])]),t._v(" "),l("tr",[l("td",{attrs:{align:"center"}},[t._v("Data Type")]),t._v(" "),l("td",{attrs:{align:"center"}},[t._v("\n                        *.json (Game Data), *.sqlite (DB)\n                      ")])]),t._v(" "),l("tr",[l("td",{attrs:{align:"center"}},[t._v("암호화 지원")]),t._v(" "),l("td",{attrs:{align:"center"}},[t._v("false")])]),t._v(" "),l("tr",[l("td",{attrs:{align:"center"}},[t._v("멀티 쓰레딩 지원")]),t._v(" "),l("td",{attrs:{align:"center"}},[t._v("false")])]),t._v(" "),l("tr",[l("td",{attrs:{align:"center"}},[t._v("쓰레드 처리 지원")]),t._v(" "),l("td",{attrs:{align:"center"}},[t._v("Unstable")])]),t._v(" "),l("tr",[l("td",{attrs:{align:"center"}},[t._v("프로세스 실행")]),t._v(" "),l("td",{attrs:{align:"center"}},[t._v("true")])]),t._v(" "),l("tr",[l("td",{attrs:{align:"center"}},[t._v("Bitmap Font 지원")]),t._v(" "),l("td",{attrs:{align:"center"}},[t._v("true")])]),t._v(" "),l("tr",[l("td",{attrs:{align:"center"}},[t._v("\n                        GetGlyphOutline을 이용한 폰트 묘화 지원\n                      ")]),t._v(" "),l("td",{attrs:{align:"center"}},[t._v("true")])]),t._v(" "),l("tr",[l("td",{attrs:{align:"center"}},[t._v("타일맵 지원")]),t._v(" "),l("td",{attrs:{align:"center"}},[t._v("true")])])])]),t._v(" "),l("button",{staticClass:"btn btn-primary",attrs:{"data-dismiss":"modal",type:"button"}},[l("i",{staticClass:"fas fa-times mr-1"}),t._v("\n                  Close Project\n                ")])])])])])])])])])}],!1,null,null,null);e.default=component.exports},316:function(t,e,l){"use strict";l.r(e);var r=l(1),o=l(215),n=l(300),c=l(301),d=l(302),v=l(303),m=l(304),_=l(305),f=l(306),C=r.default.extend({layout:"main",components:{MyNavBar:o.default,MasterHeader:n.default,SkillList:c.default,Portfolio:d.default,Clients:v.default,Contact:m.default,MyFooter:_.default,ProjectList:f.default}}),h=l(39),component=Object(h.a)(C,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("master-header"),t._v(" "),l("skill-list"),t._v(" "),l("portfolio"),t._v(" "),l("clients"),t._v(" "),l("contact"),t._v(" "),l("my-footer"),t._v(" "),l("project-list")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MasterHeader:l(300).default,SkillList:l(301).default,Portfolio:l(302).default,Clients:l(303).default,Contact:l(304).default,MyFooter:l(305).default,ProjectList:l(306).default})}}]);