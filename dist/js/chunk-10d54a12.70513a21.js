(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10d54a12"],{"7f7f":function(t,a,e){var n=e("86cc").f,i=Function.prototype,s=/^\s*function ([^ (]*)/,c="name";c in i||e("9e1e")&&n(i,c,{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(t){return""}}})},c994:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination justify-content-center"},[t.ary?e("li",{staticClass:"page-item",class:{disabled:1===t.nowpage}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(a){return a.preventDefault(),t.pagedata(t.nowpage-1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]):t._e(),t._l(t.limitPage,function(a){return e("li",{key:a,staticClass:"page-item",class:{active:t.nowpage===a}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.pagedata(a)}}},[t._v(t._s(a))])])}),t.ary?e("li",{staticClass:"page-item",class:{disabled:t.nowpage===t.TotalPage}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(a){return a.preventDefault(),t.pagedata(t.nowpage+1)}}},[e("span",{attrs:{"aria-hidden":"\n             true"}},[t._v("»")])])]):t._e()],2)])])},i=[],s={props:["ary","backone","gamelimit"],data:function(){return{nowpage:1,limit:25,TotalLength:0,totalpage:0}},created:function(){this.Datadefault()},watch:{backone:function(){this.nowpage=1}},computed:{TotalPage:function(){return Math.ceil(this.ary/(this.gamelimit||this.limit))},limitPage:function(){var t=[],a=Math.ceil(this.ary/(this.gamelimit||this.limit));if(a<=0)return!1;if(this.nowpage<=3){var e=5;a<=5&&(e=a);for(var n=1;n<=e;n+=1)t.push(n)}else if(this.nowpage>=3&&this.nowpage<a-2)for(var i=this.nowpage-2;i<=this.nowpage+2;i+=1)t.push(i);else if(this.nowpage>=a-2)for(var s=this.nowpage-2;s<=a;s+=1)t.push(s);return t}},methods:{Datadefault:function(){return 0!==this.ary&&(this.TotalLength=this.ary,this.totalpage=Math.ceil(this.ary/(this.gamelimit||this.limit)),this.pagedata(1),null)},pagedata:function(t){this.nowpage=t;var a=(t-1)*(this.gamelimit||this.limit);this.$emit("getdata",a)}}},c=s,l=e("2877"),o=Object(l["a"])(c,n,i,!1,null,null,null);a["a"]=o.exports},dfa3:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"container"},[e("h1",{staticClass:"text-center"},[t._v(t._s(this.$route.query.name))]),e("div",{staticClass:"btn-group btn-group-toggle mb-4",attrs:{"data-toggle":"buttons"}},[e("label",{staticClass:"btn btn-outline-secondary a active",on:{click:function(a){a.preventDefault(),t.lange=""}}},[e("input",{attrs:{type:"radio",name:"options",id:"option1"}}),t._v("全部頻道\n        ")]),e("label",{staticClass:"btn btn-outline-secondary a",on:{click:function(a){a.preventDefault(),t.lange="zh-TW"}}},[e("input",{attrs:{type:"radio",name:"options",id:"option2"}}),t._v("中文頻道\n        ")]),e("label",{staticClass:"btn btn-outline-secondary a",on:{click:function(a){a.preventDefault(),t.lange="en"}}},[e("input",{attrs:{type:"radio",name:"options",id:"option3"}}),t._v("英文頻道\n        ")])]),e("div",{staticClass:"row"},t._l(t.gamedata,function(a){return e("div",{key:a._id,staticClass:"col-3 mb-3"},[e("div",{staticClass:"card"},[e("img",{staticClass:"card-img-top",attrs:{src:a.preview.medium,alt:""}}),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title text-over"},[t._v(t._s(a.channel.status))]),a.channel.display_name?e("p",{staticClass:"card-text"},[t._v("觀看人數: "+t._s(a.viewers)+"．"+t._s(a.channel.display_name)+"("+t._s(a.channel.name)+")")]):e("p",{staticClass:"card-text"},[t._v("觀看人數: "+t._s(a.viewers)+"．"+t._s(a.channel.name))]),e("a",{staticClass:"go-channel",attrs:{href:a.channel.url,title:a.channel.status}})])])])}),0),e("pages",{attrs:{ary:t.total,backone:t.backone},on:{getdata:t.getdata}})],1)])},i=[],s=(e("7f7f"),e("c994")),c={components:{pages:s["a"]},data:function(){return{gamedata:[],lange:"",backone:!1,total:0}},created:function(){this.getdata()},watch:{lange:function(){this.getdata(),this.backone=!this.backone}},methods:{getdata:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.$store.dispatch("Loading",!0);var e="".concat("https://api.twitch.tv","/kraken/streams/?client_id=").concat("2c5yw88re9asj4r5lk2m050emzoa86","&language=").concat(this.lange,"&game=").concat(this.$route.query.name,"&offset=").concat(a);this.$http.get(e).then(function(a){t.total=a.data._total,t.gamedata=a.data.streams,t.$store.dispatch("Loading",!1)})}}},l=c,o=e("2877"),r=Object(o["a"])(l,n,i,!1,null,null,null);a["default"]=r.exports}}]);
//# sourceMappingURL=chunk-10d54a12.70513a21.js.map