(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9c60253c"],{"132d":function(t,e,s){"use strict";var i,a=s("5530"),n=(s("c96a"),s("caad"),s("2532"),s("a9e3"),s("498a"),s("7db0"),s("fb6a"),s("4804"),s("7e2b")),r=s("a9ad"),o=s("af2b"),l=s("7560"),c=s("80d2"),d=s("2b0e"),h=s("58df");function u(t){return["fas","far","fal","fab","fad","fak"].some((function(e){return t.includes(e)}))}function p(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(i||(i={}));var v=Object(h["a"])(n["a"],r["a"],o["a"],l["a"]).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(c["v"])(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(c["s"])(t).find((function(e){return t[e]}));return e&&i[e]||Object(c["f"])(this.size)},getDefaultData:function(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:Object(a["a"])({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$}},getSvgWrapperData:function(){var t=this.getSize(),e=Object(a["a"])(Object(a["a"])({},this.getDefaultData()),{},{style:t?{fontSize:t,height:t,width:t}:void 0});return this.applyColors(e),e},applyColors:function(t){t.class=Object(a["a"])(Object(a["a"])({},t.class),this.themeClasses),this.setTextColor(this.color,t)},renderFontIcon:function(t,e){var s=[],i=this.getDefaultData(),a="material-icons",n=t.indexOf("-"),r=n<=-1;r?s.push(t):(a=t.slice(0,n),u(a)&&(a="")),i.class[a]=!0,i.class[t]=!r;var o=this.getSize();return o&&(i.style={fontSize:o}),this.applyColors(i),e(this.hasClickListener?"button":this.tag,i,s)},renderSvgIcon:function(t,e){var s={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},i=this.getSize();return i&&(s.style={fontSize:i,height:i,width:i}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",s,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var s={class:{"v-icon__component":!0}},i=this.getSize();i&&(s.style={fontSize:i,height:i,width:i}),this.applyColors(s);var a=t.component;return s.props=t.props,s.nativeOn=s.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(a,s)])}},render:function(t){var e=this.getIcon();return"string"===typeof e?p(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e["a"]=d["a"].extend({name:"v-icon",$_wrapperFor:v,functional:!0,render:function(t,e){var s=e.data,i=e.children,a="";return s.domProps&&(a=s.domProps.textContent||s.domProps.innerHTML||a,delete s.domProps.textContent,delete s.domProps.innerHTML),t(v,s,a?[a]:i)}})},"305c":function(t,e,s){},4804:function(t,e,s){},"94aa":function(t,e,s){},"9a4c":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"middletript"},[i("v-container",{staticClass:"middletript__container mt-n12",attrs:{fluid:"","ma-0":"","pa-0":""}},[i("v-parallax",{attrs:{id:"middletript__parallax",src:s("9b26")}}),i("div",{attrs:{id:"middletript__child"}},[i("div",{staticClass:"main"},[i("div",{staticClass:"item"},[i("h4",{staticClass:"txt1"},[t._v("Garantía de satisfacción 100%")]),i("v-icon",{attrs:{"x-large":"",color:"verde"}},[t._v("mdi-emoticon-wink-outline")]),i("p",[t._v(" Si sientes que tu primera sesión no resultó como esperabas, te guiamos para reagendar con un nuevo profesional y su aún así crees que no estás satisfecho/a te devolvemos el dinero. ")]),i("h4",{staticClass:"txt2"},[t._v("Compromiso de servicio al 1000000%")]),i("v-btn",{staticClass:"success text-capitalize"},[t._v("Hay un psicólogo/a para tí")])],1),i("div",{staticStyle:{margin:"60px 0px 60px 0px"}},[i("div",{staticClass:"divider"})]),i("div",{staticClass:"item"},[i("h4",{staticClass:"txt1"},[t._v("Garantía de satisfacción 100%")]),i("v-icon",{attrs:{"x-large":"",color:"verde"}},[t._v("mdi-emoticon-wink-outline")]),i("p",[t._v(" Si sientes que tu primera sesión no resultó como esperabas, te guiamos para reagendar con un nuevo profesional y su aún así crees que no estás satisfecho/a te devolvemos el dinero. ")]),i("h4",{staticClass:"txt2"},[t._v("Compromiso de servicio al 1000000%")]),i("v-btn",{staticClass:"success text-capitalize"},[t._v("Hay un psicólogo/a para tí")])],1),i("div",{staticStyle:{margin:"60px 0px 60px 0px"}},[i("div",{staticClass:"divider"})]),i("div",{staticClass:"item"},[i("h4",{staticClass:"txt1"},[t._v("Garantía de satisfacción 100%")]),i("v-icon",{attrs:{"x-large":"",color:"verde"}},[t._v("mdi-emoticon-wink-outline")]),i("p",[t._v(" Si sientes que tu primera sesión no resultó como esperabas, te guiamos para reagendar con un nuevo profesional y su aún así crees que no estás satisfecho/a te devolvemos el dinero. ")]),i("h4",{staticClass:"txt2"},[t._v("Compromiso de servicio al 1000000%")]),i("v-btn",{staticClass:"success text-capitalize"},[t._v("Hay un psicólogo/a para tí")])],1)])])],1),i("v-container",{staticClass:"middletript__container2",attrs:{fluid:"","ma-0":"","pa-0":""}},[i("v-parallax",{attrs:{id:"middletript__parallax2",src:s("9b26")}}),i("div",{attrs:{id:"middletript__child2"}},[i("div",{staticClass:"main"},[i("div",{staticClass:"item"},[i("h4",{staticClass:"txt1"},[t._v("Garantía de satisfacción 100%")]),i("v-icon",{attrs:{"x-large":"",color:"verde"}},[t._v("mdi-emoticon-wink-outline")]),i("p",[t._v(" Si sientes que tu primera sesión no resultó como esperabas, te guiamos para reagendar con un nuevo profesional y su aún así crees que no estás satisfecho/a te devolvemos el dinero. ")]),i("h4",{staticClass:"txt2"},[t._v("Compromiso de servicio al 1000000%")]),i("v-btn",{staticClass:"success text-capitalize"},[t._v("Hay un psicólogo/a para tí")])],1),i("hr",{staticStyle:{width:"80%"}}),i("div",{staticClass:"item"},[i("h4",{staticClass:"txt1"},[t._v("Garantía de satisfacción 100%")]),i("v-icon",{attrs:{"x-large":"",color:"verde"}},[t._v("mdi-emoticon-wink-outline")]),i("p",[t._v(" Si sientes que tu primera sesión no resultó como esperabas, te guiamos para reagendar con un nuevo profesional y su aún así crees que no estás satisfecho/a te devolvemos el dinero. ")]),i("h4",{staticClass:"txt2"},[t._v("Compromiso de servicio al 1000000%")]),i("v-btn",{staticClass:"success text-capitalize"},[t._v("Hay un psicólogo/a para tí")])],1),i("hr",{staticStyle:{width:"80%"}}),i("div",{staticClass:"item"},[i("h4",{staticClass:"txt1"},[t._v("Garantía de satisfacción 100%")]),i("v-icon",{attrs:{"x-large":"",color:"verde"}},[t._v("mdi-emoticon-wink-outline")]),i("p",[t._v(" Si sientes que tu primera sesión no resultó como esperabas, te guiamos para reagendar con un nuevo profesional y su aún así crees que no estás satisfecho/a te devolvemos el dinero. ")]),i("h4",{staticClass:"txt2"},[t._v("Compromiso de servicio al 1000000%")]),i("v-btn",{staticClass:"success text-capitalize"},[t._v("Hay un psicólogo/a para tí")])],1)])])],1)],1)},a=[],n={name:"MiddleTript"},r=n,o=(s("c848"),s("2877")),l=s("6544"),c=s.n(l),d=s("8336"),h=s("a523"),u=s("132d"),p=(s("a9e3"),s("94aa"),s("2b0e")),v=p["a"].extend({name:"translatable",props:{height:Number},data:function(){return{elOffsetTop:0,parallax:0,parallaxDist:0,percentScrolled:0,scrollTop:0,windowHeight:0,windowBottom:0}},computed:{imgHeight:function(){return this.objHeight()}},beforeDestroy:function(){window.removeEventListener("scroll",this.translate,!1),window.removeEventListener("resize",this.translate,!1)},methods:{calcDimensions:function(){var t=this.$el.getBoundingClientRect();this.scrollTop=window.pageYOffset,this.parallaxDist=this.imgHeight-this.height,this.elOffsetTop=t.top+this.scrollTop,this.windowHeight=window.innerHeight,this.windowBottom=this.scrollTop+this.windowHeight},listeners:function(){window.addEventListener("scroll",this.translate,!1),window.addEventListener("resize",this.translate,!1)},objHeight:function(){throw new Error("Not implemented !")},translate:function(){this.calcDimensions(),this.percentScrolled=(this.windowBottom-this.elOffsetTop)/(parseInt(this.height)+this.windowHeight),this.parallax=Math.round(this.parallaxDist*this.percentScrolled)}}}),m=s("58df"),f=Object(m["a"])(v),g=f.extend().extend({name:"v-parallax",props:{alt:{type:String,default:""},height:{type:[String,Number],default:500},src:String,srcset:String},data:function(){return{isBooted:!1}},computed:{styles:function(){return{display:"block",opacity:this.isBooted?1:0,transform:"translate(-50%, ".concat(this.parallax,"px)")}}},mounted:function(){this.init()},methods:{init:function(){var t=this,e=this.$refs.img;e&&(e.complete?(this.translate(),this.listeners()):e.addEventListener("load",(function(){t.translate(),t.listeners()}),!1),this.isBooted=!0)},objHeight:function(){return this.$refs.img.naturalHeight}},render:function(t){var e={staticClass:"v-parallax__image",style:this.styles,attrs:{src:this.src,srcset:this.srcset,alt:this.alt},ref:"img"},s=t("div",{staticClass:"v-parallax__image-container"},[t("img",e)]),i=t("div",{staticClass:"v-parallax__content"},this.$slots.default);return t("div",{staticClass:"v-parallax",style:{height:"".concat(this.height,"px")},on:this.$listeners},[s,i])}}),x=Object(o["a"])(r,i,a,!1,null,null,null);e["default"]=x.exports;c()(x,{VBtn:d["a"],VContainer:h["a"],VIcon:u["a"],VParallax:g})},"9b26":function(t,e,s){t.exports=s.p+"img/imagreen.fcb7c4e9.jpg"},c848:function(t,e,s){"use strict";s("305c")}}]);
//# sourceMappingURL=chunk-9c60253c.53b01216.js.map