(function(e){function t(t){for(var a,o,u=t[0],i=t[1],s=t[2],d=0,l=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&l.push(r[o][0]),r[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);f&&f(t);while(l.length)l.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,o=1;o<n.length;o++){var u=n[o];0!==r[u]&&(a=!1)}a&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},o={app:0},r={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+".1630916481821.js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-1b2ec879":1,"chunk-21479e40":1,"chunk-26a8f794":1,"chunk-336dd27c":1,"chunk-847e347e":1,"chunk-352029ef":1,"chunk-45808abe":1,"chunk-4b7a3aaa":1,"chunk-ff3712a0":1,"chunk-5de90f36":1,"chunk-7498fac1":1,"chunk-74d23f55":1,"chunk-76ff88f7":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+".1630916481821.css",r=i.p+a,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===a||d===r))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){s=l[u],d=s.getAttribute("data-href");if(d===a||d===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete o[e],f.parentNode.removeChild(f),n(c)},f.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){o[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=c);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e);var l=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,n[1](l)}r[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue-quasar-manage/",i.oe=function(e){throw e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var f=d;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"017a":function(e,t,n){"use strict";n.r(t);n("c975"),n("d3b7");var a=n("bc3a"),o=n.n(a),r=n("2b0e"),c=n("2a19"),u=n("4328"),i=n.n(u),s=o.a.create({timeout:r["default"].prototype.$timeOut});s.interceptors.request.use((function(e){var t=sessionStorage.getItem("access_token");if(e.headers.Authorization="Bearer "+t,e.type)switch(e.type){case"FORM-DATA":e.transformRequest=[function(e){return"args="+JSON.stringify(e)}];break;case"FORM":e.headers["Content-Type"]="application/x-www-form-urlencoded",e.data=i.a.stringify(e.data);break;default:break}return e}),(function(e){return Promise.reject(e)})),s.interceptors.response.use((function(e){return e}),(function(e){var t={message:"未知错误",icon:"warning",color:"warning",position:"top",timeout:1500};if("ECONNABORTED"===e.code||-1!==e.message.indexOf("timeout")||"Network Error"===e.message)return t.message="网络异常",c["a"].create(t),Promise.reject(e);switch(e.response.status){case 403:t.message="拒绝访问(403)",c["a"].create(t);break;case 404:t.message="资源不存在(404)",c["a"].create(t);break;case 408:t.message="请求超时(408)",c["a"].create(t);break;case 500:t.message="服务器错误(500)",c["a"].create(t);break;case 501:t.message="服务未实现(501)",c["a"].create(t);break;case 502:t.message="网络错误(502)",c["a"].create(t);break;case 503:t.message="服务不可用(503)",c["a"].create(t);break;case 504:t.message="网络超时(504)",c["a"].create(t);break;case 505:t.message="HTTP版本不受支持(505)",c["a"].create(t);break;default:break}return Promise.reject(e)})),t["default"]=s},"034f":function(e,t,n){"use strict";n("b3c3")},"0439":function(e,t,n){"use strict";n.r(t);n("c975"),n("b0c0");var a=n("53ca"),o=n("f8fb"),r=n("e992"),c=n("92af"),u=n("a18c"),i=n("1231"),s={SET_ROLES_AND_ROUTES:function(e,t){e.role=t;var n=Object(c["default"])(o["default"]);n[0].children=Object(r["default"])(n[0].children),e.routes=n},SET_ROLES:function(e,t){e.routes=t},LOGOUT:function(e,t){e.role="",e.routes=[],e.tagView=[],sessionStorage.removeItem("access_token"),sessionStorage.removeItem("user_role"),Object(u["resetRouter"])()},ADD_TAG_VIEW:function(e,t){var n=e.tagView.length;if(n||"/"===t.fullPath){for(var a=[],o=0;o<n;o++)a.push(e.tagView[o].fullPath);-1===a.indexOf(t.fullPath)&&e.tagView.push(t)}else e.tagView.push(t)},SET_TAG_VIEW:function(e,t){e.tagView=t},REMOVE_TAG_VIEW:function(e,t){switch(Object(a["a"])(t)){case"undefined":e.tagView=[],window.sessionStorage.setItem("tagView","[]"),u["default"].push("/");break;case"object":Object(i["removeOneSide"])(e,t);break;default:Object(i["removeATagView"])(e,t)}},SET_BREADCRUMBS:function(e,t){e.breadcrumbs=t},SET_KEEPALIVE_LIST:function(e,t){e.keepAliveList=[];for(var n=0;n<t.length;n++)t[n].keepAlive&&e.keepAliveList.push(t[n].name);return e.keepAliveList}};t["default"]=s},1231:function(e,t,n){"use strict";n.r(t),n.d(t,"addTagView",(function(){return c})),n.d(t,"setTagView",(function(){return u})),n.d(t,"removeATagView",(function(){return i})),n.d(t,"removeOneSide",(function(){return s}));n("c975"),n("fb6a"),n("a434"),n("b0c0");var a=n("4360"),o=n("a18c"),r=n("92af");function c(e){var t={fullPath:e.fullPath,name:e.name,title:e.meta.title,icon:e.meta.icon,keepAlive:e.meta.keepAlive||!1};void 0!==Object(r["getFirst"])(e.query)&&(t.title+="："+Object(r["getFirst"])(e.query)),null!==t.title&&void 0!==t.title&&"/"!==t.fullPath&&-1===t.fullPath.indexOf("#")&&a["default"].commit("ADD_TAG_VIEW",t)}function u(e){a["default"].commit("SET_TAG_VIEW",e)}function i(e,t){var n=e.tagView[t].fullPath;if(e.tagView.splice(t,1),0===e.tagView.length)window.sessionStorage.setItem("tagView","[]"),o["default"].push("/");else{if(t===e.tagView.length&&-1!==window.location.href.indexOf(n))return void o["default"].push(e.tagView[t-1].fullPath);if(0===t&&-1!==window.location.href.indexOf(n))return void o["default"].push(e.tagView[0].fullPath);-1!==window.location.href.indexOf(n)&&o["default"].push(e.tagView[t-1].fullPath)}}function s(e,t){switch(t.side){case"right":e.tagView=e.tagView.slice(0,t.index+1),1===e.tagView.length&&o["default"].push(e.tagView[0].fullPath),e.tagView.length===t.index+1&&o["default"].push(e.tagView[t.index].fullPath);break;case"left":e.tagView=e.tagView.slice(t.index,e.tagView.length),1===e.tagView.length&&o["default"].push(e.tagView[0].fullPath),e.tagView.length<=t.index&&o["default"].push(e.tagView[0].fullPath);break;case"others":e.tagView=e.tagView.splice(t.index,1),o["default"].push(e.tagView[0].fullPath);break;default:break}}},"1a78":function(e,t,n){"use strict";n.r(t);var a=n("2b0e"),o=(n("0ca9"),n("5c7d"),n("7d6e"),n("e54f"),n("a4b7"),n("05bc"),n("0d0e"),n("573e"),n("b05d")),r=n("1b3f"),c=n("436b"),u=n("2a19"),i=n("515f"),s=n("7ea5"),d=n("75c3"),l=n("4e73"),f=n("7f67"),h=n("714f"),m=n("b12a"),p=n("981c");a["default"].use(o["a"],{config:{},components:{QSpinnerGrid:p["a"]},directives:{ClosePopup:f["a"],Ripple:h["a"]},plugins:{LoadingBar:r["a"],Dialog:c["a"],Notify:u["a"],Cookies:i["a"],QAjaxBar:s["a"],TouchPan:d["a"],QMenu:l["a"],AppFullscreen:m["a"]}})},"1ada":function(e,t,n){"use strict";n.r(t);var a=n("2b0e"),o=n("ee2d"),r=n.n(o),c=(n("fefe"),n("02c6")),u=n.n(c);r.a.use(u.a),a["default"].use(r.a)},"1ce3":function(e,t,n){"use strict";n.r(t);var a={};t["default"]=a},2902:function(e,t,n){"use strict";n.r(t);n("d3b7");var a=[{path:"/logon",name:"Logon.vue",meta:{title:"登录"},component:function(){return Promise.all([n.e("chunk-26ed61e0"),n.e("chunk-27bf72a4"),n.e("chunk-847e347e")]).then(n.bind(null,"2a81"))}},{path:"/NoFound404",name:"NoFound404",meta:{title:"404",icon:"sentiment_dissatisfied",isHidden:!0},component:function(){return Promise.all([n.e("chunk-26ed61e0"),n.e("chunk-27bf72a4"),n.e("chunk-336dd27c")]).then(n.bind(null,"2c3e"))}}];t["default"]=a},3530:function(e,t,n){"use strict";n.r(t);n("45fc"),n("a434"),n("b0c0");var a=n("5530"),o=n("2b0e"),r=n("a18c"),c=n("464b"),u=n("4360"),i=n("2902"),s=n("1231"),d=n("c26d");function l(e){if(null!=e.name){document.title=e.meta.title+o["default"].prototype.$title,c["default"].start();for(var t=0;t<i["default"].length;t++)if(i["default"][t].path===e.path)return;var n=[];null===JSON.parse(window.sessionStorage.getItem("tagView"))?window.sessionStorage.setItem("tagView","[]"):n=JSON.parse(window.sessionStorage.getItem("tagView")),0===u["default"].getters.getTagView.length&&0!==n.length?(Object(s["setTagView"])(n),u["default"].commit("SET_KEEPALIVE_LIST",n)):Object(s["addTagView"])(e),Object(d["setBreadcrumbs"])(e.matched,e.query),f(e)}}function f(e){if(e.matched&&e.matched.length>2)for(var t=0;t<e.matched.length;t++){var n=e.matched[t];"Layout"===n.components.default.name&&(e.matched.splice(t,1),f(e))}}r["default"].beforeEach((function(e,t,n){l(e);var o=sessionStorage.getItem("access_token"),c=sessionStorage.getItem("user_role");if(o)if("/login"===e.path&&n({path:"/"}),c&&u["default"].getters.getRoutes.length)n();else{var s=sessionStorage.getItem("user_role");u["default"].commit("SET_ROLES_AND_ROUTES",s),r["default"].addRoutes(u["default"].getters.getRoutes),n(Object(a["a"])(Object(a["a"])({},e),{},{replace:!0}))}else i["default"].some((function(t){return t.path===e.path}))?n():n({path:"/logon"})})),r["default"].afterEach((function(){c["default"].stop(),c["default"].stop()})),t["default"]=r["default"]},"3dfd":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],r={name:"App"},c=r,u=(n("034f"),n("2877")),i=Object(u["a"])(c,a,o,!1,null,null,null);t["default"]=i.exports},4360:function(e,t,n){"use strict";n.r(t);var a=n("2b0e"),o=n("2f62"),r=n("fcc2"),c=n("94d5"),u=n("0439"),i=n("63e0"),s=n("1ce3");a["default"].use(o["a"]),t["default"]=new o["a"].Store({state:r["default"],getters:c["default"],mutations:u["default"],actions:i["default"],modules:s["default"]})},"464b":function(e,t,n){"use strict";n.r(t);var a=n("1b3f");a["a"].setDefaults({color:"my-loadingBar-color",size:"2.3px",position:"top"}),t["default"]=a["a"]},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=n("3dfd"),r=n("4360"),c=(n("1a78"),n("3530")),u=(n("db49"),n("6540"),n("77ed")),i=n.n(u),s=n("1b37"),d=n.n(s);n("1ada"),n("e8e3");a["default"].config.productionTip=!1,a["default"].use(i.a),a["default"].use(d.a),a["default"].prototype.$PUBLIC_PATH="/vue-quasar-manage/";var l=new a["default"]({router:c["default"],store:r["default"],render:function(e){return e(o["default"])}}).$mount("#app");function f(){var e=e||[];window._hmt=e,function(){var e=document.createElement("script");e.src="https://hm.baidu.com/hm.js?a58d33108bfd0357ba78d883f1149708";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()}f(),t["default"]=l},"63e0":function(e,t,n){"use strict";n.r(t);var a={};t["default"]=a},6540:function(e,t,n){"use strict";n.r(t);var a=n("017a"),o=n("2b0e"),r=function(e){return Object(a["default"])({url:e.url,method:e.method||"POST",params:e.params,responseType:e.responseType||"json",auth:e.auth||{username:localStorage.getItem("access_token")},data:e.data||"",type:e.type})};o["default"].prototype.$fetchData=r,t["default"]=o["default"]},"7ad1":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view")},o=[],r={name:"Layout"},c=r,u=n("2877"),i=Object(u["a"])(c,a,o,!1,null,null,null);t["default"]=i.exports},8673:function(e,t,n){var a={"./App":["3dfd",9],"./App.vue":["3dfd",9],"./api/UserApi":["2d80",9,"chunk-2d0bd9e0"],"./api/UserApi.js":["2d80",9,"chunk-2d0bd9e0"],"./assets/css/cimo.css":["b6ca",7,"chunk-76ff88f7"],"./assets/css/main.css":["5aea",7,"chunk-7498fac1"],"./assets/js/echarts-1":["64d4",9,"chunk-2d0cfc84"],"./assets/js/echarts-1.js":["64d4",9,"chunk-2d0cfc84"],"./assets/js/echarts-2":["4d7c",9,"chunk-2d0cc2b2"],"./assets/js/echarts-2.js":["4d7c",9,"chunk-2d0cc2b2"],"./assets/js/echarts-3":["3259",9,"chunk-2d0b9239"],"./assets/js/echarts-3.js":["3259",9,"chunk-2d0b9239"],"./assets/js/echarts-4":["0952",9,"chunk-2d0a4f5c"],"./assets/js/echarts-4.js":["0952",9,"chunk-2d0a4f5c"],"./assets/logo.png":["cf05",7,"chunk-2d22269e"],"./assets/scss/transition.scss":["9cf0",7,"chunk-74d23f55"],"./axios/AxiosConfig":["017a",9],"./axios/AxiosConfig.js":["017a",9],"./axios/FetchData":["6540",9],"./axios/FetchData.js":["6540",9],"./components/404/NoFound404":["2c3e",9,"chunk-26ed61e0","chunk-27bf72a4","chunk-336dd27c"],"./components/404/NoFound404.vue":["2c3e",9,"chunk-26ed61e0","chunk-27bf72a4","chunk-336dd27c"],"./components/BaseContent/BaseContent":["b0dd",9,"chunk-26ed61e0","chunk-06f8cf94"],"./components/BaseContent/BaseContent.vue":["b0dd",9,"chunk-26ed61e0","chunk-06f8cf94"],"./components/BaseContent/ThumbStyle":["ffbe",9,"chunk-2d2389f9"],"./components/BaseContent/ThumbStyle.js":["ffbe",9,"chunk-2d2389f9"],"./components/Breadcrumbs/Breadcrumbs":["a1b8",9,"chunk-26ed61e0","chunk-2d207cfc"],"./components/Breadcrumbs/Breadcrumbs.vue":["a1b8",9,"chunk-26ed61e0","chunk-2d207cfc"],"./components/Breadcrumbs/BreadcrumbsUtils":["c26d",9],"./components/Breadcrumbs/BreadcrumbsUtils.js":["c26d",9],"./components/ECharts/EChartsConfig":["e8e3",9],"./components/ECharts/EChartsConfig.js":["e8e3",9],"./components/Layout/Layout":["7ad1",9],"./components/Layout/Layout.vue":["7ad1",9],"./components/LoadingBar/LoadingBar":["464b",9],"./components/LoadingBar/LoadingBar.js":["464b",9],"./components/LottieWebCimo/LottieWebCimo":["6117",9,"chunk-27bf72a4"],"./components/LottieWebCimo/LottieWebCimo.vue":["6117",9,"chunk-27bf72a4"],"./components/Markdown/Markdown":["1ada",9],"./components/Markdown/Markdown.js":["1ada",9],"./components/Menu/BaseMenu":["1638",9,"chunk-26ed61e0","chunk-352029ef"],"./components/Menu/BaseMenu.vue":["1638",9,"chunk-26ed61e0","chunk-352029ef"],"./components/Menu/BaseMenuItem":["80e7",9,"chunk-26ed61e0","chunk-21479e40"],"./components/Menu/BaseMenuItem.vue":["80e7",9,"chunk-26ed61e0","chunk-21479e40"],"./components/Menu/BottomLink":["3aaa",9,"chunk-5de90f36"],"./components/Menu/BottomLink.vue":["3aaa",9,"chunk-5de90f36"],"./components/Skeleton/SkeletonDemo":["5f22",9,"chunk-26ed61e0","chunk-2d0d3dc7"],"./components/Skeleton/SkeletonDemo.vue":["5f22",9,"chunk-26ed61e0","chunk-2d0d3dc7"],"./components/TagView/TagView":["b95a",9,"chunk-26ed61e0","chunk-4b7a3aaa"],"./components/TagView/TagView.vue":["b95a",9,"chunk-26ed61e0","chunk-4b7a3aaa"],"./components/TagView/TagViewUtils":["1231",9],"./components/TagView/TagViewUtils.js":["1231",9],"./components/Toolbar/ToolbarItemRight":["4523",9,"chunk-26ed61e0","chunk-2d0c1178"],"./components/Toolbar/ToolbarItemRight.vue":["4523",9,"chunk-26ed61e0","chunk-2d0c1178"],"./components/Toolbar/ToolbarTitle":["d2f2",9,"chunk-26ed61e0","chunk-2d21de50"],"./components/Toolbar/ToolbarTitle.vue":["d2f2",9,"chunk-26ed61e0","chunk-2d21de50"],"./config":["db49",9],"./config.js":["db49",9],"./main":["56d7",9],"./main.js":["56d7",9],"./quasar":["1a78",9],"./quasar.js":["1a78",9],"./router":["a18c",9],"./router/":["a18c",9],"./router/asyncRoutes":["f8fb",9],"./router/asyncRoutes.js":["f8fb",9],"./router/constantRoutes":["2902",9],"./router/constantRoutes.js":["2902",9],"./router/index":["a18c",9],"./router/index.js":["a18c",9],"./router/permission":["3530",9],"./router/permission.js":["3530",9],"./router/permissionUtils":["e992",9],"./router/permissionUtils.js":["e992",9],"./router/permissionWithDynamicRouter":["2fc9",9,"chunk-110450a9"],"./router/permissionWithDynamicRouter.js":["2fc9",9,"chunk-110450a9"],"./store":["4360",9],"./store/":["4360",9],"./store/actions":["63e0",9],"./store/actions.js":["63e0",9],"./store/getters":["94d5",9],"./store/getters.js":["94d5",9],"./store/index":["4360",9],"./store/index.js":["4360",9],"./store/modules":["1ce3",9],"./store/modules.js":["1ce3",9],"./store/mutations":["0439",9],"./store/mutations.js":["0439",9],"./store/state":["fcc2",9],"./store/state.js":["fcc2",9],"./utils/CloneUtils":["92af",9],"./utils/CloneUtils.js":["92af",9],"./views/Index":["d504",9,"chunk-26ed61e0","chunk-1b2ec879"],"./views/Index.vue":["d504",9,"chunk-26ed61e0","chunk-1b2ec879"],"./views/axios/Axios":["646f",9,"chunk-26ed61e0","chunk-1e7b2df1"],"./views/axios/Axios.vue":["646f",9,"chunk-26ed61e0","chunk-1e7b2df1"],"./views/components/BreadcrumbsDemo":["fa27",9,"chunk-26ed61e0","chunk-1e91a803"],"./views/components/BreadcrumbsDemo.vue":["fa27",9,"chunk-26ed61e0","chunk-1e91a803"],"./views/components/Cimo":["2881",9,"chunk-26ed61e0","chunk-ff3712a0"],"./views/components/Cimo.vue":["2881",9,"chunk-26ed61e0","chunk-ff3712a0"],"./views/components/Icon":["ea48",9,"chunk-26ed61e0","chunk-26a8f794"],"./views/components/Icon.vue":["ea48",9,"chunk-26ed61e0","chunk-26a8f794"],"./views/components/Json":["6915",9,"chunk-26ed61e0","chunk-5ddc241c"],"./views/components/Json.vue":["6915",9,"chunk-26ed61e0","chunk-5ddc241c"],"./views/components/KeepaliveDoc":["80db",9,"chunk-26ed61e0","chunk-1e7c0d39"],"./views/components/KeepaliveDoc.vue":["80db",9,"chunk-26ed61e0","chunk-1e7c0d39"],"./views/components/LoadingBar":["5966",9,"chunk-26ed61e0","chunk-1e7acc27"],"./views/components/LoadingBar.vue":["5966",9,"chunk-26ed61e0","chunk-1e7acc27"],"./views/components/Markdown":["e318",9,"chunk-2d22500b"],"./views/components/Markdown.vue":["e318",9,"chunk-2d22500b"],"./views/components/Menu-3":["795b",9,"chunk-26ed61e0","chunk-5ddb3a0c"],"./views/components/Menu-3.vue":["795b",9,"chunk-26ed61e0","chunk-5ddb3a0c"],"./views/components/ScrollDemo":["6bab",9,"chunk-26ed61e0","chunk-1e7bdfd0"],"./views/components/ScrollDemo.vue":["6bab",9,"chunk-26ed61e0","chunk-1e7bdfd0"],"./views/components/TagViewDemo":["0e82",9,"chunk-26ed61e0","chunk-1e792bb2"],"./views/components/TagViewDemo.vue":["0e82",9,"chunk-26ed61e0","chunk-1e792bb2"],"./views/home/Home":["b3d7",9,"chunk-26ed61e0","chunk-45808abe"],"./views/home/Home.vue":["b3d7",9,"chunk-26ed61e0","chunk-45808abe"],"./views/home/TableDetail":["c37d",9,"chunk-26ed61e0","chunk-5db365f0"],"./views/home/TableDetail.vue":["c37d",9,"chunk-26ed61e0","chunk-5db365f0"],"./views/logon/Logon":["2a81",9,"chunk-26ed61e0","chunk-27bf72a4","chunk-847e347e"],"./views/logon/Logon.vue":["2a81",9,"chunk-26ed61e0","chunk-27bf72a4","chunk-847e347e"],"./views/lottie/Lottie":["aaf0",9,"chunk-26ed61e0","chunk-27bf72a4","chunk-5db3d316"],"./views/lottie/Lottie.vue":["aaf0",9,"chunk-26ed61e0","chunk-27bf72a4","chunk-5db3d316"],"./views/optimization/RenderOptimization":["d1de",9,"chunk-26ed61e0","chunk-1e901151"],"./views/optimization/RenderOptimization.vue":["d1de",9,"chunk-26ed61e0","chunk-1e901151"],"./views/optimization/VolumeOptimization":["0427",9,"chunk-26ed61e0","chunk-1e78730c"],"./views/optimization/VolumeOptimization.vue":["0427",9,"chunk-26ed61e0","chunk-1e78730c"],"./views/router/AsyncRouter":["0c77",9,"chunk-26ed61e0","chunk-0d1604e7"],"./views/router/AsyncRouter.vue":["0c77",9,"chunk-26ed61e0","chunk-0d1604e7"],"./views/router/AsyncRouterImpl":["e863",9,"chunk-26ed61e0","chunk-1e909a33"],"./views/router/AsyncRouterImpl.vue":["e863",9,"chunk-26ed61e0","chunk-1e909a33"],"./views/router/GettingStarted":["4bff",9,"chunk-26ed61e0","chunk-1e7af7b1"],"./views/router/GettingStarted.vue":["4bff",9,"chunk-26ed61e0","chunk-1e7af7b1"],"./views/router/MyMenu":["0065",9,"chunk-26ed61e0","chunk-1e786482"],"./views/router/MyMenu.vue":["0065",9,"chunk-26ed61e0","chunk-1e786482"],"./views/router/RouterConfig":["5960",9,"chunk-26ed61e0","chunk-1e7acc21"],"./views/router/RouterConfig.vue":["5960",9,"chunk-26ed61e0","chunk-1e7acc21"]};function o(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],o=t[0];return Promise.all(t.slice(2).map(n.e)).then((function(){return n.t(o,t[1])}))}o.keys=function(){return Object.keys(a)},o.id="8673",e.exports=o},"92af":function(e,t,n){"use strict";n.r(t),n.d(t,"getFirst",(function(){return r}));var a=n("53ca");function o(e){if(null!==e){var t=e.push?[]:{};for(var n in e)"object"===Object(a["a"])(e[n])?t[n]=o(e[n]):t[n]=e[n];return t}}function r(e){for(var t in e)return e[t]}t["default"]=o},"94d5":function(e,t,n){"use strict";n.r(t);var a={getRole:function(e){return e.role},getRoutes:function(e){return e.routes},getTagView:function(e){return e.tagView},getBreadcrumbs:function(e){return e.breadcrumbs},getKeepAliveList:function(e){return e.keepAliveList}};t["default"]=a},a18c:function(e,t,n){"use strict";n.r(t),n.d(t,"resetRouter",(function(){return u}));var a=n("2b0e"),o=n("8c4f"),r=n("2902");a["default"].use(o["a"]);var c=o["a"].prototype.push;function u(){var e=i();s.matcher=e.matcher}o["a"].prototype.push=function(e,t,n){return t||n?c.call(this,e,t,n):c.call(this,e).catch((function(e){return e}))};var i=function(){return new o["a"]({base:"/vue-quasar-manage/",routes:r["default"]})},s=i();t["default"]=s},b3c3:function(e,t,n){},c26d:function(e,t,n){"use strict";n.r(t),n.d(t,"setBreadcrumbs",(function(){return r}));n("b64b");var a=n("4360"),o=n("92af");function r(e,t){for(var n=[],r=0;r<e.length;r++)n.push(Object(o["default"])(e[r].meta));var c=n.length-1;Object.keys(t).length&&(n[c].title+="："+Object(o["getFirst"])(t)),a["default"].commit("SET_BREADCRUMBS",n)}},db49:function(e,t,n){"use strict";n.r(t);var a=n("2b0e");a["default"].prototype.$title=" | Vue Quasar",a["default"].prototype.$SildeBar="hHh lpR fFf",a["default"].prototype.$baseURL="",a["default"].prototype.$timeOut=8e3,a["default"].prototype.$Max_KeepAlive=10,a["default"].prototype.$buttonList=[{text:"Quasar",URL:"http://www.quasarchs.com/"},{text:"Github",URL:"https://github.com/972784674t/vue-quasar-manage"},{text:"Gitee",URL:"https://gitee.com/incimo/vue-quasar-manage"},{text:"GreaterWMS",URL:"https://github.com/Singosgu/GreaterWMS"},{text:"关于作者",URL:"/cimo"}],t["default"]=a["default"]},e8e3:function(e,t,n){"use strict";n.r(t);var a=n("2b0e"),o=n("9ca8");n("94b1"),n("007d"),n("ef97"),n("2f73"),n("c037");a["default"].component("v-chart",o["a"])},e992:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u})),n.d(t,"handleJsonRouterToAsyncRouter",(function(){return i})),n.d(t,"handleAsyncRouterToJson",(function(){return d})),n.d(t,"handleAsyncRouterComponentToJson",(function(){return f})),n.d(t,"handleBaseRouterToRolesRouter",(function(){return m}));n("4de4"),n("c975"),n("d81d"),n("45fc"),n("b0c0"),n("d3b7"),n("ac1f"),n("5319"),n("96cf");var a=n("1da1"),o=n("b85c"),r=n("4360"),c=n("7ad1");function u(e,t){t=e.filter((function(e){return!e.meta.roles||0===e.meta.roles.length||-1!==e.meta.roles.indexOf(r["default"].getters.getRole)}));var n,a=Object(o["a"])(t);try{for(a.s();!(n=a.n()).done;){var c=n.value;c.children&&(c.children=u(c.children))}}catch(i){a.e(i)}finally{a.f()}return t}function i(e,t){t=e.map((function(e){return"Layout"===e.component?e.component=c["default"]:e.component=s(e.component),e}));var n,a=Object(o["a"])(t);try{for(a.s();!(n=a.n()).done;){var r=n.value;r.children&&(r.children=i(r.children))}}catch(u){a.e(u)}finally{a.f()}return t}function s(e){return function(){return n("8673")("./"+e)}}function d(e){return l.apply(this,arguments)}function l(){return l=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=Object(o["a"])(t),e.prev=1,n.s();case 3:if((a=n.n()).done){e.next=15;break}if(r=a.value,r.meta.roles=[],!r.children){e.next=9;break}return e.next=9,d(r.children);case 9:if("*"!==r.path){e.next=13;break}return e.next=12,f(t);case 12:return e.abrupt("return",e.sent);case 13:e.next=3;break;case 15:e.next=20;break;case 17:e.prev=17,e.t0=e["catch"](1),n.e(e.t0);case 20:return e.prev=20,n.f(),e.finish(20);case 23:case"end":return e.stop()}}),e,null,[[1,17,20,23]])}))),l.apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return h=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n,a,r,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=Object(o["a"])(t),e.prev=1,n.s();case 3:if((a=n.n()).done){e.next=21;break}if(r=a.value,"function"!==typeof r.component){e.next=12;break}return e.next=8,r.component();case 8:c=e.sent,r.component=c.default.__file.replace(/src\//,""),e.next=13;break;case 12:r.component&&(r.component=r.component.name);case 13:if(!r.children){e.next=16;break}return e.next=16,f(r.children);case 16:if("*"!==r.path){e.next=19;break}return t.pop(),e.abrupt("return",t);case 19:e.next=3;break;case 21:e.next=26;break;case 23:e.prev=23,e.t0=e["catch"](1),n.e(e.t0);case 26:return e.prev=26,n.f(),e.finish(26);case 29:case"end":return e.stop()}}),e,null,[[1,23,26,29]])}))),h.apply(this,arguments)}function m(e,t,n){n=e.filter((function(e){return t.some((function(t){return t===e.name}))}));var a,r=Object(o["a"])(n);try{for(r.s();!(a=r.n()).done;){var c=a.value;c.children&&(c.children=m(c.children,t))}}catch(u){r.e(u)}finally{r.f()}return n}},f8fb:function(e,t,n){"use strict";n.r(t),n.d(t,"asyncRoutesChildren",(function(){return o}));n("d3b7");var a=n("7ad1"),o=[{path:"/",name:"Home",meta:{roles:["admin","editor","test"],title:"主页",icon:"home",keepAlive:!0},component:function(){return Promise.all([n.e("chunk-26ed61e0"),n.e("chunk-45808abe")]).then(n.bind(null,"b3d7"))}},{path:"/start",name:"start",meta:{roles:["admin","editor"],title:"快速起步",icon:"design_services",keepAlive:!0},component:a["default"],children:[{path:"getting-started",name:"GettingStarted",meta:{roles:["admin","editor"],title:"基础配置",icon:"tune",keepAlive:!0},component:function(){return Promise.all([n.e("chunk-26ed61e0"),n.e("chunk-1e7af7b1")]).then(n.bind(null,"4bff"))}},{path:"router-config",name:"RouterConfig",meta:{roles:["admin","editor"],title:"路由配置",icon:"multiple_stop",keepAlive:!0},component:function(){return Promise.all([n.e("chunk-26ed61e0"),n.e("chunk-1e7acc21")]).then(n.bind(null,"5960"))}},{path:"my-menu",name:"MyMenu",meta:{roles:["admin","test"],title:"关于菜单",icon:"menu",keepAlive:!0},component:function(){return Promise.all([n.e("chunk-26ed61e0"),n.e("chunk-1e786482")]).then(n.bind(null,"0065"))}},{path:"async-router",name:"AsyncRouter",meta:{roles:["admin","editor"],title:"动态路由",icon:"all_inclusive",keepAlive:!0},component:function(){return Promise.all([n.e("chunk-26ed61e0"),n.e("chunk-0d1604e7")]).then(n.bind(null,"0c77"))}},{path:"async-router-impl",name:"AsyncRouterImpl",meta:{roles:["admin","editor"],title:"动态路由实现思路",keepAlive:!0},component:function(){return Promise.all([n.e("chunk-26ed61e0"),n.e("chunk-1e909a33")]).then(n.bind(null,"e863"))}}]},{path:"/optimization",name:"optimization",meta:{roles:["admin","test"],title:"性能优化",icon:"memory"},component:a["default"],children:[{path:"volume-optimization",name:"VolumeOptimization",meta:{roles:["admin","editor"],title:"体积优化",icon:"miscellaneous_services",keepAlive:!0},component:function(){return Promise.all([n.e("chunk-26ed61e0"),n.e("chunk-1e78730c")]).then(n.bind(null,"0427"))}},{path:"render-optimization",name:"RenderOptimization",meta:{roles:["admin","editor"],title:"渲染性能优化",icon:"flip",keepAlive:!0},component:function(){return Promise.all([n.e("chunk-26ed61e0"),n.e("chunk-1e901151")]).then(n.bind(null,"d1de"))}}]},{path:"/component",name:"component",component:a["default"],meta:{roles:["admin","test"],title:"组件说明",icon:"apps",isOpen:!0,isHidden:!1},children:[{path:"keep-alive-doc",name:"KeepaliveDoc",meta:{roles:["admin","editor"],title:"keep-alive 缓存",icon:"select_all",keepAlive:!0},component:function(){return Promise.all([n.e("chunk-26ed61e0"),n.e("chunk-1e7c0d39")]).then(n.bind(null,"80db"))}},{path:"scrollDemo",name:"ScrollDemo",meta:{roles:["admin","editor"],title:"滚动区域",icon:"swap_vert",keepAlive:!0},component:function(){return Promise.all([n.e("chunk-26ed61e0"),n.e("chunk-1e7bdfd0")]).then(n.bind(null,"6bab"))}},{path:"tagViewDemo",name:"TagViewDemo",meta:{roles:["admin","editor"],title:"tagView",icon:"exit_to_app",keepAlive:!0},component:function(){return Promise.all([n.e("chunk-26ed61e0"),n.e("chunk-1e792bb2")]).then(n.bind(null,"0e82"))}},{path:"breadcrumbsDemo",name:"BreadcrumbsDemo",meta:{roles:["admin","editor"],title:"面包屑",icon:"clear_all",keepAlive:!0,isHidden:!1},component:function(){return Promise.all([n.e("chunk-26ed61e0"),n.e("chunk-1e91a803")]).then(n.bind(null,"fa27"))}},{path:"icon",name:"Icon",meta:{roles:["admin","editor"],title:"icon 集合",icon:"grain",keepAlive:!0},component:function(){return Promise.all([n.e("chunk-26ed61e0"),n.e("chunk-26a8f794")]).then(n.bind(null,"ea48"))}},{path:"loading-bar",name:"LoadingBar",meta:{roles:["admin","test"],title:"loading-bar",icon:"rotate_right",keepAlive:!0},component:function(){return Promise.all([n.e("chunk-26ed61e0"),n.e("chunk-1e7acc27")]).then(n.bind(null,"5966"))}},{path:"markdown",name:"Markdown",meta:{roles:["admin","test"],title:"markdown",icon:"edit_road",keepAlive:!0},component:function(){return n.e("chunk-2d22500b").then(n.bind(null,"e318"))}},{path:"json",name:"Json",meta:{roles:["admin","test"],title:"json",icon:"settings_ethernet",keepAlive:!0},component:function(){return Promise.all([n.e("chunk-26ed61e0"),n.e("chunk-5ddc241c")]).then(n.bind(null,"6915"))}}]},{path:"/axios",name:"Axios",meta:{roles:["admin","editor"],title:"axios",icon:"http",keepAlive:!0},component:function(){return Promise.all([n.e("chunk-26ed61e0"),n.e("chunk-1e7b2df1")]).then(n.bind(null,"646f"))}},{path:"/menu-1",name:"menu-1",meta:{roles:["admin"],title:"三级菜单",icon:"filter_3",keepAlive:!0},component:a["default"],children:[{path:"menu-2",name:"menu-2",meta:{roles:["admin","test"],title:"菜单 1-1",icon:"filter_2",keepAlive:!0},component:a["default"],children:[{path:"menu-3",name:"Menu-3",meta:{roles:["admin","test"],title:"菜单 1-2",icon:"filter_1",keepAlive:!0},component:function(){return Promise.all([n.e("chunk-26ed61e0"),n.e("chunk-5ddb3a0c")]).then(n.bind(null,"795b"))}}]}]},{path:"http://www.quasarchs.com/vue-components/button",name:"external-link",meta:{roles:["admin","editor"],title:"外部链接/更多组件",icon:"send"}},{path:"/my-lottie",name:"Lottie",meta:{roles:["admin","editor"],title:"lottie 动效",itemLabel:"MY SHARE",icon:"videocam",keepAlive:!0},component:function(){return Promise.all([n.e("chunk-26ed61e0"),n.e("chunk-27bf72a4"),n.e("chunk-5db3d316")]).then(n.bind(null,"aaf0"))}},{path:"/tableDetail",name:"TableDetail",meta:{roles:["admin","editor"],title:"Treats 详情",icon:"blur_linear",isHidden:!0},component:function(){return Promise.all([n.e("chunk-26ed61e0"),n.e("chunk-5db365f0")]).then(n.bind(null,"c37d"))}},{path:"/cimo",name:"Cimo",meta:{title:"关于作者",icon:"fab fa-studiovinari",isHidden:!0},component:function(){return Promise.all([n.e("chunk-26ed61e0"),n.e("chunk-ff3712a0")]).then(n.bind(null,"2881"))}},{path:"*",name:"404",redirect:"/NoFound404",meta:{title:"404",icon:"fab fa-studiovinari",isHidden:!0}}],r=[{path:"/",name:"index",redirect:"/",component:function(){return Promise.all([n.e("chunk-26ed61e0"),n.e("chunk-1b2ec879")]).then(n.bind(null,"d504"))},children:o}];t["default"]=r},fcc2:function(e,t,n){"use strict";n.r(t);var a={role:"",routes:[],tagView:[],breadcrumbs:[],keepAliveList:[]};t["default"]=a}});