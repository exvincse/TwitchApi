(function(t){function e(e){for(var r,a,i=e[0],u=e[1],f=e[2],s=0,l=[];s<i.length;s++)a=i[s],o[a]&&l.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);d&&d(e);while(l.length)l.shift()();return c.push.apply(c,f||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},o={app:0},c=[];function i(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-1dcff4ec":"25c87df6","chunk-3b075a8a":"b042c867","chunk-6756b078":"ee079885","chunk-79f3428f":"36fede1a","chunk-f5045e5c":"b37351e9"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-f5045e5c":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise(function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-1dcff4ec":"31d6cfe0","chunk-3b075a8a":"31d6cfe0","chunk-6756b078":"31d6cfe0","chunk-79f3428f":"31d6cfe0","chunk-f5045e5c":"e4db8cb0"}[t]+".css",o=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var f=c[i],s=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(s===r||s===o))return e()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){f=l[i],s=f.getAttribute("data-href");if(s===r||s===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||o,c=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[t],d.parentNode.removeChild(d),n(c)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){a[t]=0}));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var c=new Promise(function(e,n){r=o[t]=[e,n]});e.push(r[2]=c);var f,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(t),f=function(e){s.onerror=s.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,c=new Error("Loading chunk "+t+" failed.\n("+r+": "+a+")");c.type=r,c.request=a,n[1](c)}o[t]=void 0}};var l=setTimeout(function(){f({type:"timeout",target:s})},12e4);s.onerror=s.onload=f,document.head.appendChild(s)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],s=f.push.bind(f);f.push=e,f=f.slice();for(var l=0;l<f.length;l++)e(f[l]);var d=s;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=n("bc3a"),o=n.n(a),c=n("a7fe"),i=n.n(c),u=n("2f62"),f=n("9062"),s=n.n(f),l=(n("7f7f"),{namespaced:!0,state:{total:0,channel:[]},actions:{getdata:function(t,e){var n=e.lange,r=e.name,a=e.startdata,c=void 0===a?0:a;return t.dispatch("Loading",!0,{root:!0}),new Promise(function(e){var a="".concat("https://api.twitch.tv","/kraken/streams/?language=").concat(n,"&game=").concat(r,"&offset=").concat(c);o.a.get(a,{headers:{Accept:"application/vnd.twitchtv.v5+json","Client-ID":"".concat("dli7xduyvo36blj9mjz628qsl22ckn")}}).then(function(n){t.commit("CHANNEL",n),t.dispatch("Loading",!1,{root:!0}),e()})})}},mutations:{CHANNEL:function(t,e){t.total=e.data._total,t.channel=e.data.streams}},getters:{channeldata:function(t){return t.channel}}}),d=(n("a481"),n("ac6a"),{namespaced:!0,state:{total:0,totalgame:[]},actions:{getdata:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return t.dispatch("Loading",!0,{root:!0}),new Promise(function(n){var r="".concat("https://api.twitch.tv","/kraken/games/top?offset=").concat(e);o.a.get(r,{headers:{Accept:"application/vnd.twitchtv.v5+json","Client-ID":"".concat("dli7xduyvo36blj9mjz628qsl22ckn")}}).then(function(e){t.commit("GAME",e),n(),t.dispatch("Loading",!1,{root:!0})})})}},mutations:{GAME:function(t,e){var n=e.data.top;n.forEach(function(t){t.game.box.template=t.game.box.template.replace("{width}","200").replace("{height}","250")}),t.totalgame=n,t.total=e.data._total}},getters:{ganmedata:function(t){return t.totalgame}}});r["a"].use(u["a"]);var p=new u["a"].Store({strict:!0,state:{isLoading:!1},actions:{Loading:function(t,e){t.commit("LOADING",e)}},mutations:{LOADING:function(t,e){t.isLoading=e}},getters:{isLoading:function(t){return t.isLoading}},modules:{Mchannel:l,Mgame:d}}),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("loading",{staticStyle:{"z-index":"9999","overflow-y":"hidden"},attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),n("router-view")],1)},g=[],m=(n("8e6e"),n("456d"),n("bd86"));function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(n,!0).forEach(function(e){Object(m["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var y={computed:v({},Object(u["c"])(["isLoading"]))},w=y,k=(n("5c0b"),n("2877")),O=Object(k["a"])(w,h,g,!1,null,null,null),j=O.exports,L=n("8c4f");r["a"].use(L["a"]);var P=new L["a"]({routes:[{path:"/",component:function(){return n.e("chunk-f5045e5c").then(n.bind(null,"cb08"))},children:[{path:"",component:function(){return n.e("chunk-79f3428f").then(n.bind(null,"bb51"))}},{path:"/master",component:function(){return n.e("chunk-6756b078").then(n.bind(null,"0b3c"))}},{path:"/game",component:function(){return n.e("chunk-3b075a8a").then(n.bind(null,"8eaf"))}},{path:"/game/selectgame",component:function(){return n.e("chunk-1dcff4ec").then(n.bind(null,"dfa3"))}}]}]});n("4989"),n("e40d"),n("15f5");r["a"].use(i.a,o.a),r["a"].use(u["a"]),r["a"].component("Loading",s.a),r["a"].config.productionTip=!1,new r["a"]({router:P,store:p,render:function(t){return t(j)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("5e27"),a=n.n(r);a.a},"5e27":function(t,e,n){}});
//# sourceMappingURL=app.d30b9071.js.map