(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b075a8a"],{"8eaf":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container text-white mt-4"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"input-group mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.gamename,expression:"gamename"}],staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入遊戲名稱"},domProps:{value:t.gamename},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.selectgame()},input:function(e){e.target.composing||(t.gamename=e.target.value)}}}),a("div",{staticClass:"input-group-append"},[a("a",{staticClass:"btn btn-primary",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.selectgame()}}},[t._v("搜尋")])])])])])]),!t.selectdata.length&&t.selectnull?t._l(t.ganmedata,function(e){return a("div",{key:e._id,staticClass:"col-lg-3 col-6 mb-3"},[a("div",{staticClass:"card game bg-l-gray"},[a("img",{staticClass:"card-img-top",attrs:{src:e.game.box.template,alt:""}}),a("div",{staticClass:"card-body"},[a("h6",{staticClass:"card-title gamename text-over"},[t._v(t._s(e.game.name))])]),a("a",{attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.gotogamne(e.game.name)}}})])])}):t._e(),t.selectdata.length?t._l(t.selectdata,function(e){return a("div",{key:e._id,staticClass:"col-lg-3 col-6 mb-3"},[a("div",{staticClass:"card game bg-l-gray"},[a("img",{staticClass:"card-img-top",attrs:{src:e.box.template,alt:""}}),a("div",{staticClass:"card-body"},[a("h6",{staticClass:"card-title gamename"},[t._v(t._s(e.name))])]),a("a",{attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.gotogamne(e.name)}}})])])}):t._e()],2),t.selectnull?t._e():a("div",{staticClass:"h3 text-center vh-100"},[t._v("找不到符合的遊戲")]),a("pages",{attrs:{ary:t.total,gamelimit:t.gamelimit},on:{getdata:t.getdata}})],1)])},n=[],s=(a("8e6e"),a("456d"),a("a481"),a("ac6a"),a("bd86")),r=a("2f62"),l=a("c994");function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,i)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(a,!0).forEach(function(e){Object(s["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var g={components:{pages:l["a"]},data:function(){return{selectdata:[],gamelimit:10,gamename:"",total:0,selectnull:!0}},created:function(){this.getdata()},computed:o({},Object(r["c"])("Mgame",["ganmedata"])),methods:{getdata:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.$store.dispatch("Mgame/getdata",e).then(function(){t.total=t.$store.state.Mgame.total})},gotogamne:function(t){this.$router.push({path:"game/selectgame",query:{name:t}})},selectgame:function(){var t=this;if(this.gamename=this.gamename.trim(),""===this.gamename)return!1;this.total=0,this.$store.dispatch("Loading",!0);var e="".concat("https://api.twitch.tv","/kraken/search/games?query=").concat(this.gamename);return this.$http.get(e,{headers:{Accept:"application/vnd.twitchtv.v5+json","Client-ID":"".concat("dli7xduyvo36blj9mjz628qsl22ckn")}}).then(function(e){var a=e.data.games;return null===a?(t.selectnull=!1,t.selectdata=[],t.$store.dispatch("Loading",!1),!1):(t.selectnull=!0,a.forEach(function(t){return t.box.template.replace("{width}","200").replace("{height}","250")}),t.selectdata=a,t.$store.dispatch("Loading",!1),!0)}),!0}}},u=g,m=a("2877"),p=Object(m["a"])(u,i,n,!1,null,null,null);e["default"]=p.exports},c994:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"mt-5"},[a("ul",{staticClass:"pagination justify-content-center mb-0"},[t.ary?a("li",{staticClass:"page-item",class:{disabled:1===t.nowpage}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.pagedata(t.nowpage-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]):t._e(),t._l(t.limitPage,function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.nowpage===e}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.pagedata(e)}}},[t._v(t._s(e))])])}),t.ary?a("li",{staticClass:"page-item",class:{disabled:t.nowpage===t.TotalPage}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.pagedata(t.nowpage+1)}}},[a("span",{attrs:{"aria-hidden":"\n             true"}},[t._v("»")])])]):t._e()],2)])])},n=[],s={props:["ary","backone","gamelimit"],data:function(){return{nowpage:1,limit:25,TotalLength:0,totalpage:0}},created:function(){this.Datadefault()},watch:{backone:function(){this.nowpage=1}},computed:{TotalPage:function(){return Math.ceil(this.ary/(this.gamelimit||this.limit))},limitPage:function(){var t=[],e=Math.ceil(this.ary/(this.gamelimit||this.limit));if(e<=0)return!1;if(this.nowpage<=3){var a=5;e<=5&&(a=e);for(var i=1;i<=a;i+=1)t.push(i)}else if(this.nowpage>=3&&this.nowpage<e-2)for(var n=this.nowpage-2;n<=this.nowpage+2;n+=1)t.push(n);else if(this.nowpage>=e-2)for(var s=this.nowpage-2;s<=e;s+=1)t.push(s);return t}},methods:{Datadefault:function(){return 0!==this.ary&&(this.TotalLength=this.ary,this.totalpage=Math.ceil(this.ary/(this.gamelimit||this.limit)),this.pagedata(1),null)},pagedata:function(t){this.nowpage=t;var e=(t-1)*(this.gamelimit||this.limit);this.$emit("getdata",e)}}},r=s,l=a("2877"),c=Object(l["a"])(r,i,n,!1,null,null,null);e["a"]=c.exports}}]);
//# sourceMappingURL=chunk-3b075a8a.5e85a1e3.js.map