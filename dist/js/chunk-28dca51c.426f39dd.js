(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28dca51c"],{"6a5b":function(t,a){t.exports="data:image/webp;base64,UklGRvwBAABXRUJQVlA4TPABAAAvR8AREOdgpm2b8Ec6AN69axzQtm0b/X9rutJjFbZtg+T/e8dokG2k+lMewp7gs3D/f9fmhDUKxRqFtooVGmWeohRXVKzoFSsCLNu20zZyOKanJzPMf6BJKt0H/Y/ovwO3kRSpquuwF++m6QlBzmOKcTqCObdEP0ybKc6ZKUOeTyvsIxU57hb+KxNEXpXdjzESzDgeelgTCZlWHf85kgLjLHbfB1LjIPmtz4VJlbycIMr71tk19vojA4NeLmTCBQHbgJEDkRH3MgYrDOW/PZnxKO7ZDnMJ0Q6xFBLIkGseyRLJyLt+yJxHRVUVYGN2SWsKsXjqe3fVD6897MxqulR/DVzcu6b+Gri4R31VNeZ8GuhNRZ6KS7q/5vRAFzcbCXDeDARxCyG5EKVwaOuGh9FJA4+crj2MKaJXXmuLYoRv4AuVABP+Ozx0RdMB/g4Ze+Z0EYmOkKCfM2N1Vp00qG9ZFK/8/lYTbch6rKsc9cRYfKgNRDMYr5oLgJaEONH42ZWtlmr8G8/FVqsVTQyZqliU77qromiV5d/+rz1Vi9yRBPYgOcZ8fYLbQ7sSTKA9dJRU6rdap35zU0/6qW/91Ntu6n8//Yib/shPv+anf3TTz7rpr530+17mD07mIV7mM17mRU7mV17maf9jvudm3hgA"},"7f7f":function(t,a,e){var n=e("86cc").f,i=Function.prototype,s=/^\s*function ([^ (]*)/,l="name";l in i||e("9e1e")&&n(i,l,{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(t){return""}}})},c994:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{staticClass:"mt-5"},[e("ul",{staticClass:"pagination justify-content-center mb-0"},[t.ary?e("li",{staticClass:"page-item",class:{disabled:1===t.nowpage}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(a){return a.preventDefault(),t.pagedata(t.nowpage-1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]):t._e(),t._l(t.limitPage,function(a){return e("li",{key:a,staticClass:"page-item",class:{active:t.nowpage===a}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.pagedata(a)}}},[t._v(t._s(a))])])}),t.ary?e("li",{staticClass:"page-item",class:{disabled:t.nowpage===t.TotalPage}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(a){return a.preventDefault(),t.pagedata(t.nowpage+1)}}},[e("span",{attrs:{"aria-hidden":"\n             true"}},[t._v("»")])])]):t._e()],2)])])},i=[],s={props:["ary","backone","gamelimit"],data:function(){return{nowpage:1,limit:25,TotalLength:0,totalpage:0}},created:function(){this.Datadefault()},watch:{backone:function(){this.nowpage=1}},computed:{TotalPage:function(){return Math.ceil(this.ary/(this.gamelimit||this.limit))},limitPage:function(){var t=[],a=Math.ceil(this.ary/(this.gamelimit||this.limit));if(a<=0)return!1;if(this.nowpage<=3){var e=5;a<=5&&(e=a);for(var n=1;n<=e;n+=1)t.push(n)}else if(this.nowpage>=3&&this.nowpage<a-2)for(var i=this.nowpage-2;i<=this.nowpage+2;i+=1)t.push(i);else if(this.nowpage>=a-2)for(var s=this.nowpage-2;s<=a;s+=1)t.push(s);return t}},methods:{Datadefault:function(){return 0!==this.ary&&(this.TotalLength=this.ary,this.totalpage=Math.ceil(this.ary/(this.gamelimit||this.limit)),this.pagedata(1),null)},pagedata:function(t){this.nowpage=t;var a=(t-1)*(this.gamelimit||this.limit);this.$emit("getdata",a)}}},l=s,r=e("2877"),c=Object(r["a"])(l,n,i,!1,null,null,null);a["a"]=c.exports},dfa3:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("div",{staticClass:"container text-white"},[n("h1",{staticClass:"text-center"},[t._v(t._s(this.$route.query.name))]),n("div",{staticClass:"btn-group btn-group-toggle mb-4",attrs:{"data-toggle":"buttons"}},[n("label",{staticClass:"btn btn-primary pointer active",on:{click:function(a){a.preventDefault(),t.lange=""}}},[n("input",{attrs:{type:"radio",name:"options",id:"option1"}}),t._v("全部頻道\n        ")]),n("label",{staticClass:"btn btn-primary pointer",on:{click:function(a){a.preventDefault(),t.lange="zh-TW"}}},[n("input",{attrs:{type:"radio",name:"options",id:"option2"}}),t._v("中文頻道\n        ")]),n("label",{staticClass:"btn btn-primary pointer",on:{click:function(a){a.preventDefault(),t.lange="en"}}},[n("input",{attrs:{type:"radio",name:"options",id:"option3"}}),t._v("英文頻道\n        ")])]),n("div",{staticClass:"row"},t._l(t.gamedata,function(a){return n("div",{key:a._id,staticClass:"col-lg-3 mb-3"},[n("div",{staticClass:"card border-l-gray"},[n("img",{staticClass:"card-img-top",attrs:{src:a.preview.medium,alt:""}}),n("div",{staticClass:"card-body bg-l-gray"},[n("h6",{staticClass:"card-title text-over"},[t._v(t._s(a.channel.status))]),a.channel.display_name?n("small",{staticClass:"d-block text-over"},[t._v("觀看人數: "+t._s(a.viewers)+"．\n              "),a.channel.partner?n("img",{staticStyle:{"vertical-align":"baseline"},attrs:{src:e("6a5b"),width:"14px",height:"14px",alt:""}}):t._e(),t._v("\n              "+t._s(a.channel.display_name)+"("+t._s(a.channel.name)+")\n            ")]):n("small",{staticClass:"d-block text-over"},[t._v("觀看人數: "+t._s(a.viewers)+"．"+t._s(a.channel.name))]),n("a",{staticClass:"go-channel",attrs:{href:a.channel.url,title:a.channel.status}})])])])}),0),n("pages",{attrs:{ary:t.total,backone:t.backone},on:{getdata:t.getdata}})],1)])},i=[],s=(e("7f7f"),e("c994")),l={components:{pages:s["a"]},data:function(){return{gamedata:[],lange:"",backone:!1,total:0}},created:function(){this.getdata()},watch:{lange:function(){this.getdata(),this.backone=!this.backone}},methods:{getdata:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.$store.dispatch("Loading",!0);var e="".concat("https://api.twitch.tv","/kraken/streams/?client_id=").concat("2c5yw88re9asj4r5lk2m050emzoa86","&language=").concat(this.lange,"&game=").concat(this.$route.query.name,"&offset=").concat(a);this.$http.get(e).then(function(a){t.total=a.data._total,t.gamedata=a.data.streams,t.$store.dispatch("Loading",!1)})}}},r=l,c=e("2877"),o=Object(c["a"])(r,n,i,!1,null,null,null);a["default"]=o.exports}}]);
//# sourceMappingURL=chunk-28dca51c.426f39dd.js.map