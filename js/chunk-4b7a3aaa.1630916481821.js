(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b7a3aaa"],{1582:function(t,e,i){"use strict";i("2c93")},"2c93":function(t,e,i){},"55b1":function(t,e,i){},b95a:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row",style:{margin:t.$q.screen.gt.sm?"0px 15px 0px 15px":""}},[i("q-tabs",{staticClass:"bg-white col-12",attrs:{align:"left","active-color":"primary",dense:"",swipeable:"","inline-label":"","indicator-color":"transparent","outside-arrows":!!t.$q.platform.is.electron,breakpoint:0}},[i("q-route-tab",{staticClass:"tagView",style:t.isWeChart?" line-height: normal":"",attrs:{to:"/","no-caps":"","content-class":"tagView-q-router-tab"}},[i("template",{slot:"default"},[i("q-icon",{attrs:{size:"1.3rem",name:"home"}}),i("div",{staticClass:"line-limit-length",staticStyle:{margin:"0px 5px 0px 5px"}},[t._v("主页")])],1)],2),t._l(t.tagView,(function(e,s){return[i("q-route-tab",{key:e.fullPath+s,staticClass:"tagView",style:t.isWeChart?" line-height: normal":"",attrs:{to:e.fullPath,"no-caps":"","content-class":"tagView-q-router-tab"}},[i("template",{slot:"default"},[e.icon?i("q-icon",{attrs:{size:"1.3rem",name:e.icon}}):t._e(),i("div",{staticClass:"line-limit-length"},[t._v(t._s(e.title))]),i("q-icon",{staticClass:"tagView-remove-icon",staticStyle:{display:"inline-flex"},attrs:{name:"close"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.removeAtagView(s)}}}),i("q-menu",{attrs:{"touch-position":"","context-menu":""}},[i("q-list",{attrs:{dense:""}},[i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""}},[i("q-item-section",{on:{click:function(e){return t.removeOthersTagView(s)}}},[t._v(" 关闭其他 ")])],1),i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""}},[i("q-item-section",{on:{click:function(e){return t.removeRightTagView(s)}}},[t._v(" 关闭右侧 ")])],1),i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""}},[i("q-item-section",{on:{click:function(e){return t.removeLeftTagView(s)}}},[t._v(" 关闭左侧 ")])],1),i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""}},[i("q-item-section",{on:{click:t.removeAllTagView}},[t._v(" 关闭所有 ")])],1)],1)],1)],1)],2)]}))],2)],1)},o=[],n=(i("c975"),{name:"TagView",data:function(){return{tagView:this.$store.getters.getTagView}},computed:{getTagView:function(){return this.$store.getters.getTagView},isWeChart:function(){return-1!==navigator.userAgent.toLowerCase().indexOf("micromessenger")}},watch:{getTagView:function(t,e){this.tagView=t,this.$store.commit("SET_KEEPALIVE_LIST",this.tagView),window.sessionStorage.setItem("tagView",JSON.stringify(this.tagView))}},methods:{removeAllTagView:function(){this.$store.commit("REMOVE_TAG_VIEW")},removeAtagView:function(t){this.$store.commit("REMOVE_TAG_VIEW",t)},removeLeftTagView:function(t){this.$store.commit("REMOVE_TAG_VIEW",{side:"left",index:t})},removeRightTagView:function(t){this.$store.commit("REMOVE_TAG_VIEW",{side:"right",index:t})},removeOthersTagView:function(t){this.$store.commit("REMOVE_TAG_VIEW",{side:"others",index:t})}}}),a=n,c=(i("1582"),i("e989"),i("2877")),r=i("fe09"),l=Object(c["a"])(a,s,o,!1,null,"2a3d5a5c",null);e["default"]=l.exports;l.options.components=Object.assign(Object.create(l.options.components||null),l.options.components||{},{QTabs:r["K"],QRouteTab:r["z"],QIcon:r["o"],QMenu:r["w"],QList:r["v"],QItem:r["r"],QItemSection:r["t"]}),l.options.directives=Object.assign(Object.create(l.options.directives||null),l.options.directives||{},{ClosePopup:r["a"]})},e989:function(t,e,i){"use strict";i("55b1")}}]);