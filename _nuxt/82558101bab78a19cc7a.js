(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{216:function(e,t,r){var content=r(244);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(12).default)("16a96b85",content,!0,{sourceMap:!1})},243:function(e,t,r){"use strict";var n=r(216);r.n(n).a},244:function(e,t,r){(e.exports=r(11)(!1)).push([e.i,".page--users .users{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row nowrap;-webkit-box-pack:start;justify-content:flex-start;-webkit-box-align:stretch;align-items:stretch;background:#f5f5f5}@media only screen and (min-width:1024px){.page--users .users{height:100%}}.page--users .users__detail-area,.page--users .users__list-area{-webkit-box-flex:0;flex:0 0 100%}@media only screen and (min-width:1024px){.page--users .users__detail-area,.page--users .users__detail-area>.vb,.page--users .users__list-area,.page--users .users__list-area>.vb{height:100%}}.page--users .users__list-area{z-index:2}@media only screen and (min-width:1024px){.page--users .users__list-area{-webkit-box-flex:0;flex:0 0 100%}}@media only screen and (min-width:1024px){.page--users .users.detail-opened .users__list-area{-webkit-box-flex:0;flex:0 0 50%}}@media only screen and (max-width:1023px){.page--users .users__detail-area{position:fixed;top:0;left:0;width:100%;height:100%;overflow-y:auto;z-index:5;padding:0;background:#fff}}@media only screen and (min-width:1024px){.page--users .users__detail-area{position:absolute;top:0;left:50%;width:50%;z-index:1;background:#e5e5e5;box-shadow:inset 0 0 20px rgba(0,0,0,.05)}}.page--users .users__list-content{padding:20px;background:#f5f5f5}@media only screen and (min-width:1024px){.page--users .users__list-content{width:50%;min-height:100%}}@media only screen and (min-width:1024px){.page--users .users.detail-opened .users__list-content{width:100%}}.page--users .users__detail-content{padding:0}@media only screen and (min-width:1024px){.page--users .users__detail-content{padding:20px;display:-webkit-box;display:flex;min-height:100vh}}.page--users .users__action-btn{position:fixed;z-index:3;right:20px;bottom:20px;box-shadow:0 0 5px rgba(0,0,0,.5)}.page--users .users__action-btn:hover{box-shadow:0 0 10px rgba(0,0,0,.2)}@media only screen and (min-width:768px){.page--users .users__action-btn{right:40px;bottom:40px}}.slide-enter,.slide-leave-to{-webkit-transform:translateX(100%);transform:translateX(100%)}@media only screen and (min-width:1024px){.slide-enter,.slide-leave-to{-webkit-transform:translateX(-100%);transform:translateX(-100%)}}.slide-enter-to,.slide-leave{-webkit-transform:translateX(0);transform:translateX(0)}.slide-enter-active,.slide-leave-active{-webkit-transition:-webkit-transform .5s;transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s}",""])},249:function(e,t,r){"use strict";r.r(t);var n=r(88),d=r(220),o={name:"Users",components:{EmptyPage:n.b,FlipList:n.c,UserAdd:d.a,UserCard:d.b,UserDetail:d.c},computed:{users:function(){return this.$store.state.users.list}},data:function(){return{addingUser:!1,userDetailId:null}},methods:{addUser:function(){this.addingUser=!0},closeUserDetail:function(){var e=this;setTimeout((function(){e.userDetailId=null}))},toggleUserDetail:function(e){this.userDetailId===e?this.userDetailId=null:this.userDetailId=e}}},l=(r(243),r(2)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page page--users"},[e.users.length?r("div",{staticClass:"users",class:{"detail-opened":!!e.userDetailId}},[r("div",{staticClass:"users__list-area"},[r("div",{directives:[{name:"bar",rawName:"v-bar"}]},[r("div",{staticClass:"vb-content"},[r("div",{staticClass:"users__list-content"},[r("flip-list",{attrs:{list:e.users},scopedSlots:e._u([{key:"item",fn:function(t){var n=t.item;return[r("user-card",{attrs:{user:n},on:{click:function(t){return e.toggleUserDetail(n.id)}}})]}}],null,!1,3193476837)})],1)])])]),e._v(" "),r("transition",{attrs:{name:"slide",appear:""}},[e.userDetailId?r("div",{staticClass:"users__detail-area"},[r("div",{directives:[{name:"bar",rawName:"v-bar"}]},[r("div",{staticClass:"vb-content"},[r("div",{staticClass:"users__detail-content"},[r("user-detail",{key:e.userDetailId,attrs:{id:e.userDetailId},on:{close:e.closeUserDetail,deleted:e.closeUserDetail}})],1)])])]):e._e()])],1):r("empty-page",{scopedSlots:e._u([{key:"title",fn:function(){return[r("h2",[e._v("Sorry, there are no users found!")])]},proxy:!0}])},[e._v(" "),r("p",[e._v("Press big blue button to add")])]),e._v(" "),r("base-button",{staticClass:"users__action-btn",attrs:{shape:"circle",size:"big"},on:{click:e.addUser}},[r("svg-icon",{attrs:{name:"add"}})],1),e._v(" "),r("user-add",{attrs:{active:e.addingUser},on:{"update:active":function(t){e.addingUser=t}}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);