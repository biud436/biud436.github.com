(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{303:function(t,o,r){"use strict";r.r(o);r(54);var e=r(19),n=r(1).default.extend({data:function(){return{contents:{shoppingMall:"",weather:"",initial2D:"",androidAppBuilder:"",initialEditor:""}}},mounted:function(){var t=this;return Object(e.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,t.loadPortfolioShoppingMall();case 2:return o.next=4,t.loadPortfolioWeather();case 4:return o.next=6,t.loadPortfolioAndroidAppBuilder();case 6:return o.next=8,t.loadPortfolioInitial2D();case 8:return o.next=10,t.loadPortfolioInitialEditorBuilder();case 10:case"end":return o.stop()}}),o)})))()},methods:{loadPortfolioShoppingMall:function(){var t=this;return Object(e.a)(regeneratorRuntime.mark((function o(){var r,data;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,t.$axios.get("/markdown/shoppingMall.md");case 2:(r=o.sent)&&(data=r.data,t.contents.shoppingMall=window.marked(data));case 4:case"end":return o.stop()}}),o)})))()},loadPortfolioWeather:function(){var t=this;return Object(e.a)(regeneratorRuntime.mark((function o(){var r,data;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,t.$axios.get("/markdown/weather.md");case 2:(r=o.sent)&&(data=r.data,t.contents.weather=window.marked(data));case 4:case"end":return o.stop()}}),o)})))()},loadPortfolioInitial2D:function(){var t=this;return Object(e.a)(regeneratorRuntime.mark((function o(){var r,data;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,t.$axios.get("/markdown/initial2D.md");case 2:(r=o.sent)&&(data=r.data,t.contents.initial2D=window.marked(data));case 4:case"end":return o.stop()}}),o)})))()},loadPortfolioAndroidAppBuilder:function(){var t=this;return Object(e.a)(regeneratorRuntime.mark((function o(){var r,data;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,t.$axios.get("/markdown/androidAppBuilder.md");case 2:(r=o.sent)&&(data=r.data,t.contents.androidAppBuilder=window.marked(data));case 4:case"end":return o.stop()}}),o)})))()},loadPortfolioInitialEditorBuilder:function(){var t=this;return Object(e.a)(regeneratorRuntime.mark((function o(){var r,data;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,t.$axios.get("/markdown/initialEditor.md");case 2:(r=o.sent)&&(data=r.data,t.contents.initialEditor=window.marked(data));case 4:case"end":return o.stop()}}),o)})))()}}}),l=r(39),component=Object(l.a)(n,(function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("section",{staticClass:"page-section bg-light",attrs:{id:"portfolio"}},[r("div",{staticClass:"container"},[t._m(0),t._v(" "),r("div",{staticClass:"row"},[r("a",{attrs:{id:"shopping"}}),t._v(" "),r("div",{staticClass:"col-md-12 mb-4"},[r("div",{staticClass:"row no-gutters"},[t._m(1),t._v(" "),r("div",{staticClass:"col-md-8"},[r("div",{staticClass:"card-body"},[r("p",{staticClass:"card-text card-description active",domProps:{innerHTML:t._s(t.contents.shoppingMall)}}),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("h5",{staticClass:"card-text"},[t._v("기타 :")]),t._v(" "),r("a",{staticClass:"btn btn-secondary",attrs:{href:"https://github.com/biud436/project_one"}},[t._v("깃허브")]),t._v(" "),r("a",{staticClass:"portfolio-link btn btn-success",attrs:{"data-toggle":"modal",href:"#portfolioModal1"}},[t._v("상세 설명")])])])])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 mb-4"},[r("div",{staticClass:"row no-gutters"},[t._m(2),t._v(" "),r("div",{staticClass:"col-md-8"},[r("div",{staticClass:"card-body"},[r("p",{staticClass:"card-text card-description active",domProps:{innerHTML:t._s(t.contents.weather)}}),t._v(" "),r("a",{staticClass:"btn btn-danger",attrs:{href:"http://biud436.github.io/weather/"}},[t._v("포트폴리오 보기")]),t._v(" "),r("a",{staticClass:"btn btn-secondary",attrs:{href:"https://github.com/biud436/weather"}},[t._v("깃허브로 이동")]),t._v(" "),r("a",{staticClass:"portfolio-link btn btn-success",attrs:{"data-toggle":"modal",href:"#portfolioModal2"}},[t._v("상세 설명")])])])])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 mb-4"},[r("div",{staticClass:"row no-gutters"},[t._m(3),t._v(" "),r("div",{staticClass:"col-md-8"},[r("div",{staticClass:"card-body"},[r("p",{staticClass:"card-text card-description active",domProps:{innerHTML:t._s(t.contents.initialEditor)}}),t._v(" "),r("h5",{staticClass:"card-text"},[t._v("기타 :")]),t._v(" "),r("a",{staticClass:"btn btn-secondary",attrs:{href:"https://github.com/biud436/InitialEditor"}},[t._v("깃허브로 이동")]),t._v(" "),r("a",{staticClass:"portfolio-link btn btn-success",attrs:{"data-toggle":"modal",href:"#portfolioModal3"}},[t._v("상세 설명")])])])])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 mb-4"},[r("div",{staticClass:"row no-gutters"},[t._m(4),t._v(" "),r("div",{staticClass:"col-md-8"},[r("div",{staticClass:"card-body"},[r("p",{staticClass:"card-text card-description active",domProps:{innerHTML:t._s(t.contents.androidAppBuilder)}}),t._v(" "),r("h5",{staticClass:"card-text"},[t._v("다운로드 :")]),t._v(" "),r("a",{staticClass:"btn btn-danger",attrs:{href:"https://github.com/biud436/MV-App-Builder/releases"}},[t._v("Releases")]),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("h5",{staticClass:"card-text"},[t._v("개발 기간 :")]),t._v(" "),r("p",[t._v("3개월")]),t._v(" "),r("br"),t._v(" "),r("h5",{staticClass:"card-text"},[t._v("기타 :")]),t._v(" "),r("a",{staticClass:"btn btn-secondary",attrs:{href:"https://github.com/biud436/MV-App-Builder"}},[t._v("깃허브")]),t._v(" "),r("a",{staticClass:"portfolio-link btn btn-success",attrs:{"data-toggle":"modal",href:"#portfolioModal5"}},[t._v("상세 설명")])])])])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 mb-4"},[r("div",{staticClass:"row no-gutters"},[t._m(5),t._v(" "),r("div",{staticClass:"col-md-8"},[r("div",{staticClass:"card-body"},[r("p",{staticClass:"card-text"}),t._v(" "),r("br"),t._v(" "),r("p",{staticClass:"card-text card-description active",domProps:{innerHTML:t._s(t.contents.initial2D)}}),t._v(" "),r("h5",{staticClass:"card-text"},[t._v("기타 :")]),t._v(" "),r("a",{staticClass:"btn btn-secondary",attrs:{href:"https://github.com/biud436/Initial2D"}},[t._v("깃허브")]),t._v(" "),r("a",{staticClass:"portfolio-link btn btn-success",attrs:{"data-toggle":"modal",href:"#portfolioModal6"}},[t._v("상세 설명")])])])])])])])])}),[function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("div",{staticClass:"text-center"},[r("h2",{staticClass:"section-heading text-uppercase"},[t._v("포트폴리오")]),t._v(" "),r("h3",{staticClass:"section-subheading text-muted"})])},function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"portfolio-item"},[r("a",{staticClass:"portfolio-link",attrs:{"data-toggle":"modal",href:"#portfolioModal1"}},[r("div",{staticClass:"portfolio-hover"},[r("div",{staticClass:"portfolio-hover-content"},[r("i",{staticClass:"fas fa-plus fa-3x"})])]),t._v(" "),r("img",{staticClass:"img-fluid",attrs:{src:"/assets/img/portfolio/portfolio1.png",width:"400",height:"300",alt:""}})]),t._v(" "),r("div",{staticClass:"portfolio-caption"},[r("div",{staticClass:"portfolio-caption-heading"},[t._v("쇼핑몰 프로젝트")]),t._v(" "),r("div",{staticClass:"portfolio-caption-subheading text-muted"},[t._v("\n                  쇼핑몰\n                ")])])])])},function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"portfolio-item"},[r("a",{staticClass:"portfolio-link",attrs:{"data-toggle":"modal",href:"#portfolioModal2"}},[r("div",{staticClass:"portfolio-hover"},[r("div",{staticClass:"portfolio-hover-content"},[r("i",{staticClass:"fas fa-plus fa-3x"})])]),t._v(" "),r("img",{staticClass:"img-fluid",attrs:{src:"/assets/img/portfolio/weather.png",width:"400",height:"300",alt:""}})]),t._v(" "),r("div",{staticClass:"portfolio-caption"},[r("div",{staticClass:"portfolio-caption-heading"},[r("a",{attrs:{name:"weather"}},[t._v("주간 날씨")])]),t._v(" "),r("div",{staticClass:"portfolio-caption-subheading text-muted"},[t._v("\n                  날씨\n                ")])])])])},function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"portfolio-item"},[r("a",{staticClass:"portfolio-link",attrs:{"data-toggle":"modal",href:"#portfolioModal3"}},[r("div",{staticClass:"portfolio-hover"},[r("div",{staticClass:"portfolio-hover-content"},[r("i",{staticClass:"fas fa-plus fa-3x"})])]),t._v(" "),r("img",{staticClass:"img-fluid",attrs:{src:"https://github.com/biud436/Initial2D/raw/master/docs/img/new_editor.png",alt:""}})]),t._v(" "),r("div",{staticClass:"portfolio-caption"},[r("div",{staticClass:"portfolio-caption-heading"},[r("a",{attrs:{name:"map-editor"}},[t._v("맵 에디터")])]),t._v(" "),r("div",{staticClass:"portfolio-caption-subheading text-muted"},[t._v("\n                  Initial Editor\n                ")])])])])},function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"portfolio-item"},[r("a",{staticClass:"portfolio-link",attrs:{"data-toggle":"modal",href:"#portfolioModal5"}},[r("div",{staticClass:"portfolio-hover"},[r("div",{staticClass:"portfolio-hover-content"},[r("i",{staticClass:"fas fa-plus fa-3x"})])]),t._v(" "),r("img",{staticClass:"img-fluid",attrs:{src:"https://github.com/biud436/MV-App-Builder/raw/master/screenshot.png",alt:""}})]),t._v(" "),r("div",{staticClass:"portfolio-caption"},[r("div",{staticClass:"portfolio-caption-heading"},[r("a",{attrs:{name:"short-url"}},[t._v("안드로이드 APK 빌더")])]),t._v(" "),r("div",{staticClass:"portfolio-caption-subheading text-muted"},[t._v("\n                  빌더\n                ")])])])])},function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"portfolio-item"},[r("a",{staticClass:"portfolio-link",attrs:{"data-toggle":"modal",href:"#portfolioModal6"}},[r("div",{staticClass:"portfolio-hover"},[r("div",{staticClass:"portfolio-hover-content"},[r("i",{staticClass:"fas fa-plus fa-3x"})])]),t._v(" "),r("img",{staticClass:"img-fluid",attrs:{src:"/assets/img/portfolio/pp6.png",alt:""}})]),t._v(" "),r("div",{staticClass:"portfolio-caption"},[r("div",{staticClass:"portfolio-caption-heading"},[r("a",{attrs:{name:"short-url"}},[t._v("Initial2D")])]),t._v(" "),r("div",{staticClass:"portfolio-caption-subheading text-muted"},[t._v("\n                  게임 엔진\n                ")])])])])}],!1,null,null,null);o.default=component.exports}}]);