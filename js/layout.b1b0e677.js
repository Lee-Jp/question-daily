(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["layout"],{"159b":function(e,t,o){var c=o("da84"),n=o("fdbc"),r=o("17c2"),a=o("9112");for(var i in n){var u=c[i],l=u&&u.prototype;if(l&&l.forEach!==r)try{a(l,"forEach",r)}catch(f){l.forEach=r}}},"17c2":function(e,t,o){"use strict";var c=o("b727").forEach,n=o("a640"),r=o("ae40"),a=n("forEach"),i=r("forEach");e.exports=a&&i?[].forEach:function(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}},"404a":function(e,t,o){},4160:function(e,t,o){"use strict";var c=o("23e7"),n=o("17c2");c({target:"Array",proto:!0,forced:[].forEach!=n},{forEach:n})},"4de4":function(e,t,o){"use strict";var c=o("23e7"),n=o("b727").filter,r=o("1dde"),a=o("ae40"),i=r("filter"),u=a("filter");c({target:"Array",proto:!0,forced:!i||!u},{filter:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},5530:function(e,t,o){"use strict";o.d(t,"a",(function(){return r}));o("a4d3"),o("4de4"),o("4160"),o("e439"),o("dbb4"),o("b64b"),o("159b");function c(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,c)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){c(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}},"7baa":function(e,t,o){"use strict";o("404a")},"856d":function(e,t,o){"use strict";o("cc99")},a640:function(e,t,o){"use strict";var c=o("d039");e.exports=function(e,t){var o=[][e];return!!o&&c((function(){o.call(null,t||function(){throw 1},1)}))}},b2fb:function(e,t,o){"use strict";o.r(t);var c=o("7a23"),n={class:"basic-layout"},r={class:"top"},a={class:"main"};function i(e,t,o,i,u,l){var f=Object(c["resolveComponent"])("the-header"),s=Object(c["resolveComponent"])("router-view");return Object(c["openBlock"])(),Object(c["createBlock"])("div",n,[Object(c["createVNode"])("div",r,[Object(c["createVNode"])(f)]),Object(c["createVNode"])("div",a,[Object(c["createVNode"])(s)])])}var u=Object(c["withScopeId"])("data-v-1af2ef60");Object(c["pushScopeId"])("data-v-1af2ef60");var l={class:"header"},f={class:"left"},s=Object(c["createVNode"])("div",{class:"logo"},"每日一题logo",-1),d={class:"right"},b=Object(c["createTextVNode"])("发布题目 "),p=Object(c["createTextVNode"])("登录");Object(c["popScopeId"])();var O=u((function(e,t,o,n,r,a){var i=Object(c["resolveComponent"])("el-menu-item"),O=Object(c["resolveComponent"])("el-menu"),j=Object(c["resolveComponent"])("el-button");return Object(c["openBlock"])(),Object(c["createBlock"])("div",l,[Object(c["createVNode"])("div",f,[s,Object(c["createVNode"])("div",null,[Object(c["createVNode"])(O,{"default-active":e.activeIndex,mode:"horizontal",onSelect:e.changeMenu,router:""},{default:u((function(){return[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(e.menuList,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])(i,{key:e.path,index:e.path},{default:u((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.meta.title),1)]})),_:2},1032,["index"])})),128))]})),_:1},8,["default-active","onSelect"])])]),Object(c["createVNode"])("div",d,[e.isLogin?(Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],{key:0},[Object(c["createVNode"])(j,{type:"primary",onClick:e.goSetQuestion},{default:u((function(){return[b]})),_:1},8,["onClick"]),Object(c["createVNode"])("span",{class:"logout",onClick:t[1]||(t[1]=function(){return e.logout&&e.logout.apply(e,arguments)})},"退出登录"),Object(c["createVNode"])("span",null,Object(c["toDisplayString"])(e.userName),1)],64)):Object(c["createCommentVNode"])("",!0),e.isLogin?Object(c["createCommentVNode"])("",!0):(Object(c["openBlock"])(),Object(c["createBlock"])(j,{key:1,type:"primary",plain:"",onClick:e.goLogin},{default:u((function(){return[p]})),_:1},8,["onClick"]))])])})),j=o("5530"),g=o("a2ef"),v=o("6c02"),h=o("bc3a"),m=o.n(h),y=Object(c["defineComponent"])({setup:function(){var e=Object(v["c"])(),t=Object(v["d"])(),o=Object(c["reactive"])({menuList:g["a"][0].children,activeIndex:e.path,isLogin:!0,userName:localStorage.getItem("userName")}),n=Object(c["toRefs"])(o);m.a.get("/api/cooperation/wap/is_user_login/").then((function(e){e.data.login?(console.log("已登录"),o.isLogin=!0,m.a.get("/api/files/upload_token/").then((function(e){e.data.success&&localStorage.setItem("uploadToken",e.data.token)}))):(o.isLogin=!1,console.log("未登录"))}));var r=function(e){console.log(e)},a=function(){t.push("/setQuestion")},i=function(){t.push("/login")},u=function(){m.a.get("/api/cy_wechat_bot/wxadmin/logout/").then((function(e){e.data.success&&(localStorage.clear(),window.location.reload())}))};return Object(j["a"])(Object(j["a"])({},n),{},{changeMenu:r,goSetQuestion:a,goLogin:i,logout:u})}});o("856d");y.render=O,y.__scopeId="data-v-1af2ef60";var k=y,w=Object(c["defineComponent"])({components:{TheHeader:k},setup:function(){var e=function(){var e,t=((null===(e=document.querySelector(".top"))||void 0===e?void 0:e.clientHeight)||100)+20,o=document.querySelector(".main");o.style.paddingTop="".concat(t,"px")};return Object(c["onMounted"])((function(){e(),window.addEventListener("resize",(function(){e()}))})),{}}});o("7baa");w.render=i;t["default"]=w},b64b:function(e,t,o){var c=o("23e7"),n=o("7b0b"),r=o("df75"),a=o("d039"),i=a((function(){r(1)}));c({target:"Object",stat:!0,forced:i},{keys:function(e){return r(n(e))}})},cc99:function(e,t,o){},dbb4:function(e,t,o){var c=o("23e7"),n=o("83ab"),r=o("56ef"),a=o("fc6a"),i=o("06cf"),u=o("8418");c({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(e){var t,o,c=a(e),n=i.f,l=r(c),f={},s=0;while(l.length>s)o=n(c,t=l[s++]),void 0!==o&&u(f,t,o);return f}})},e439:function(e,t,o){var c=o("23e7"),n=o("d039"),r=o("fc6a"),a=o("06cf").f,i=o("83ab"),u=n((function(){a(1)})),l=!i||u;c({target:"Object",stat:!0,forced:l,sham:!i},{getOwnPropertyDescriptor:function(e,t){return a(r(e),t)}})}}]);