(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b0b72c16"],{"132d":function(t,e,i){"use strict";var s,a=i("5530"),n=(i("c96a"),i("caad"),i("2532"),i("a9e3"),i("498a"),i("7db0"),i("fb6a"),i("4804"),i("7e2b")),o=i("a9ad"),r=i("af2b"),c=i("7560"),l=i("80d2"),d=i("2b0e"),u=i("58df");function h(t){return["fas","far","fal","fab","fad","fak"].some((function(e){return t.includes(e)}))}function g(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(s||(s={}));var p=Object(u["a"])(n["a"],o["a"],r["a"],c["a"]).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(l["v"])(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(l["s"])(t).find((function(e){return t[e]}));return e&&s[e]||Object(l["f"])(this.size)},getDefaultData:function(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:Object(a["a"])({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$}},getSvgWrapperData:function(){var t=this.getSize(),e=Object(a["a"])(Object(a["a"])({},this.getDefaultData()),{},{style:t?{fontSize:t,height:t,width:t}:void 0});return this.applyColors(e),e},applyColors:function(t){t.class=Object(a["a"])(Object(a["a"])({},t.class),this.themeClasses),this.setTextColor(this.color,t)},renderFontIcon:function(t,e){var i=[],s=this.getDefaultData(),a="material-icons",n=t.indexOf("-"),o=n<=-1;o?i.push(t):(a=t.slice(0,n),h(a)&&(a="")),s.class[a]=!0,s.class[t]=!o;var r=this.getSize();return r&&(s.style={fontSize:r}),this.applyColors(s),e(this.hasClickListener?"button":this.tag,s,i)},renderSvgIcon:function(t,e){var i={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},s=this.getSize();return s&&(i.style={fontSize:s,height:s,width:s}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",i,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var i={class:{"v-icon__component":!0}},s=this.getSize();s&&(i.style={fontSize:s,height:s,width:s}),this.applyColors(i);var a=t.component;return i.props=t.props,i.nativeOn=i.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(a,i)])}},render:function(t){var e=this.getIcon();return"string"===typeof e?g(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e["a"]=d["a"].extend({name:"v-icon",$_wrapperFor:p,functional:!0,render:function(t,e){var i=e.data,s=e.children,a="";return i.domProps&&(a=i.domProps.textContent||i.domProps.innerHTML||a,delete i.domProps.textContent,delete i.domProps.innerHTML),t(p,i,a?[a]:s)}})},"1bac":function(t,e,i){"use strict";i("6d56")},4804:function(t,e,i){},"6d56":function(t,e,i){},b5a3:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"noticias__container"},[i("div",{staticClass:"noticias"},[i("div",{staticClass:"content"},[i("div",{staticClass:"title"},[i("h1",{staticClass:"text-justify"},[t._v("Noticias Terapia")]),i("p",{staticClass:"text-justify text--secondary",staticStyle:{padding:"0px 13px 0px 13px"}},[t._v(" Infórmate de todas nuestras últimas noticias, para que estés al tanto de todos nuestros objetivos")]),i("v-btn",{attrs:{color:"success text-capitalize",to:"/noticias"}},[t._v("Ver todas")])],1),i("div",{staticClass:"elements"},t._l(t.getNoticiasPaginadas,(function(t,e){return i("card-noticias",{key:e,staticClass:"card_not",attrs:{value:{Titulo:t.Titulo,Texto:t.Texto,Imagen:t.Imagen}}})})),1)])]),i("div",{staticClass:"buttons"},[i("v-btn",{attrs:{disabled:t.isDisabledBack,color:"success"},on:{click:function(e){t.page--}}},[i("v-icon",[t._v("mdi-chevron-left")])],1),i("v-btn",{attrs:{disabled:t.isDisabledForward,color:"success"},on:{click:function(e){t.page++}}},[i("v-icon",[t._v("mdi-chevron-right")])],1)],1)])},a=[],n=i("5530"),o=(i("d3b7"),i("3ca3"),i("ddb0"),i("fb6a"),i("2f62")),r={name:"Noticias",components:{CardNoticias:function(){return i.e("chunk-32218a43").then(i.bind(null,"7871"))}},data:function(){return{page:1,itemsPerPage:3,backBtnStatus:!1,forwardBtnStatus:!1}},computed:Object(n["a"])(Object(n["a"])({},Object(o["d"])(["noticias"])),{},{isDisabledBack:function(){return 1===this.page},isDisabledForward:function(){return this.page===this.getTotalPaginas},getTotalPaginas:function(){return Math.ceil(this.noticias.length/this.itemsPerPage)},getNoticiasPaginadas:function(){var t=(this.page-1)*this.itemsPerPage,e=this.page*this.itemsPerPage;return this.noticias.slice(t,e)}}),methods:{printStatus:function(){console.log(this.forwardBtnStatus),console.log(this.page),console.log(this.getTotalPaginas),console.log(this.getNoticiasPaginadas),console.log(this.noticias)}}},c=r,l=(i("1bac"),i("2877")),d=i("6544"),u=i.n(d),h=i("8336"),g=i("a523"),p=i("132d"),f=Object(l["a"])(c,s,a,!1,null,null,null);e["default"]=f.exports;u()(f,{VBtn:h["a"],VContainer:g["a"],VIcon:p["a"]})}}]);
//# sourceMappingURL=chunk-b0b72c16.6f5ba1ae.js.map