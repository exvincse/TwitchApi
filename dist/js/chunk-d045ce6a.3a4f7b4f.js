(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d045ce6a"],{"0b3c":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"container text-white"},[e("div",{staticClass:"h3 text-center"},[t._v('已搜尋"'+t._s(this.$route.query.name)+'"')]),t.masterdata.length?e("div",[e("div",{staticClass:"row"},t._l(t.masterdata,function(a){return e("div",{key:a._id,staticClass:"col-lg-3 col-6 mb-3"},[e("div",{staticClass:"card border-l-gray"},[e("img",{staticClass:"card-img-top",attrs:{src:a.logo,alt:""}}),e("div",{staticClass:"card-body bg-l-gray"},[a.display_name?e("h5",[t._v(t._s(a.display_name)+"("+t._s(a.name)+")")]):e("h5",[t._v(t._s(a.name))]),e("a",{staticClass:"go-channel",attrs:{href:a.url,title:a.status}})])])])}),0),e("pages",{attrs:{ary:t.total,backone:t.backone},on:{getdata:t.livemaster}})],1):e("div",{staticClass:"h3 text-center vh-100 mb-0"},[t._v("沒有搜尋到任何人")])])])},s=[],n=(e("7f7f"),e("c994")),r={components:{pages:n["a"]},data:function(){return{masterdata:[],total:0,backone:!1}},created:function(){this.livemaster()},watch:{$route:function(t,a){this.livemaster(),this.backone=!this.backone}},methods:{livemaster:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(""===this.$route.query.name)return!1;this.$store.dispatch("Loading",!0);var e="".concat("https://api.twitch.tv","/kraken/search/channels?query=").concat(this.$route.query.name,"&offset=").concat(a);this.$http.get(e,{headers:{Accept:"application/vnd.twitchtv.v5+json","Client-ID":"".concat("2c5yw88re9asj4r5lk2m050emzoa86")}}).then(function(a){t.total=a.data._total,t.masterdata=a.data.channels,t.$store.dispatch("Loading",!1)})}}},c=r,l=e("2877"),o=Object(l["a"])(c,i,s,!1,null,null,null);a["default"]=o.exports},"7f7f":function(t,a,e){var i=e("86cc").f,s=Function.prototype,n=/^\s*function ([^ (]*)/,r="name";r in s||e("9e1e")&&i(s,r,{configurable:!0,get:function(){try{return(""+this).match(n)[1]}catch(t){return""}}})},c994:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{staticClass:"mt-5"},[e("ul",{staticClass:"pagination justify-content-center mb-0"},[t.ary?e("li",{staticClass:"page-item",class:{disabled:1===t.nowpage}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(a){return a.preventDefault(),t.pagedata(t.nowpage-1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]):t._e(),t._l(t.limitPage,function(a){return e("li",{key:a,staticClass:"page-item",class:{active:t.nowpage===a}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.pagedata(a)}}},[t._v(t._s(a))])])}),t.ary?e("li",{staticClass:"page-item",class:{disabled:t.nowpage===t.TotalPage}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(a){return a.preventDefault(),t.pagedata(t.nowpage+1)}}},[e("span",{attrs:{"aria-hidden":"\n             true"}},[t._v("»")])])]):t._e()],2)])])},s=[],n={props:["ary","backone","gamelimit"],data:function(){return{nowpage:1,limit:25,TotalLength:0,totalpage:0}},created:function(){this.Datadefault()},watch:{backone:function(){this.nowpage=1}},computed:{TotalPage:function(){return Math.ceil(this.ary/(this.gamelimit||this.limit))},limitPage:function(){var t=[],a=Math.ceil(this.ary/(this.gamelimit||this.limit));if(a<=0)return!1;if(this.nowpage<=3){var e=5;a<=5&&(e=a);for(var i=1;i<=e;i+=1)t.push(i)}else if(this.nowpage>=3&&this.nowpage<a-2)for(var s=this.nowpage-2;s<=this.nowpage+2;s+=1)t.push(s);else if(this.nowpage>=a-2)for(var n=this.nowpage-2;n<=a;n+=1)t.push(n);return t}},methods:{Datadefault:function(){return 0!==this.ary&&(this.TotalLength=this.ary,this.totalpage=Math.ceil(this.ary/(this.gamelimit||this.limit)),this.pagedata(1),null)},pagedata:function(t){this.nowpage=t;var a=(t-1)*(this.gamelimit||this.limit);this.$emit("getdata",a)}}},r=n,c=e("2877"),l=Object(c["a"])(r,i,s,!1,null,null,null);a["a"]=l.exports}}]);
//# sourceMappingURL=chunk-d045ce6a.3a4f7b4f.js.map