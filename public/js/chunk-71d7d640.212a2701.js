(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71d7d640"],{"0390":function(t,i,a){t.exports=a.p+"img/tarjetas.89d4a323.png"},"36a7":function(t,i,a){},5158:function(t,i,a){"use strict";a.r(i);var e=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("v-card",{staticClass:"mt-n12 mx-auto middle_card",attrs:{elevation:"0",height:"250","max-width":"900","min-width":"340",color:"#bfe2f5"}},[e("div",{staticClass:"middle_menu"},[e("div",{staticClass:"middle_menu_up"},[e("div",{staticClass:"middle_terapeutas"},[e("v-btn",{attrs:{outlined:"",color:"accent"},on:{click:function(i){return i.stopPropagation(),t.cargarLanzar(1)}}},[t._v("Terapeutas")])],1),e("div",{staticClass:"middle_aranceles"},[e("v-btn",{attrs:{outlined:"",color:"accent"},on:{click:function(i){return i.stopPropagation(),t.cargarLanzar(2)}}},[t._v("Aranceles")])],1),e("div",{staticClass:"middle_formaspago"},[e("v-btn",{attrs:{outlined:"",color:"accent"},on:{click:function(i){return i.stopPropagation(),t.cargarLanzar(3)}}},[t._v("Formas de Pago")])],1)]),e("div",{staticClass:"middle_menu_bottom"},[e("div",[e("v-img",{staticClass:"img-tarjetas",attrs:{height:"100",width:"300","max-height":"100","max-width":"300",src:a("0390")}}),e("showDialog",{model:{value:t.dialogData,callback:function(i){t.dialogData=i},expression:"dialogData"}})],1)])])])],1)},s=[],n=(a("d3b7"),a("3ca3"),a("ddb0"),{name:"MiddleMenu",data:function(){return{dialogData:{titulo:"",texto:"",preformatted:!1,active:!1}}},methods:{cargarLanzar:function(t){switch(t){case 1:this.dialogData.titulo="Terapeutas",this.dialogData.texto="Esta es la información de los terapeutas",this.dialogData.active=!0;break;case 2:this.dialogData.titulo="Aranceles",this.dialogData.texto="Esta es la información de los Aranceles",this.dialogData.active=!0;break;case 3:this.dialogData.titulo="Formas de pago",this.dialogData.texto="Efectivo \n Cheque al día \n Tarjetas de crédito y débito \n \n Tarjetas de casas comerciales \n y Cajas de Compensación \n a través de I-Med",this.dialogData.active=!0;break}}},components:{showDialog:function(){return a.e("chunk-30474f1a").then(a.bind(null,"17d9"))}}}),r=n,o=(a("6082"),a("2877")),c=a("6544"),d=a.n(c),l=a("8336"),h=a("b0af"),u=a("adda"),g=Object(o["a"])(r,e,s,!1,null,null,null);i["default"]=g.exports;d()(g,{VBtn:l["a"],VCard:h["a"],VImg:u["a"]})},6082:function(t,i,a){"use strict";a("f5fb")},"8a79":function(t,i,a){"use strict";var e=a("23e7"),s=a("06cf").f,n=a("50c4"),r=a("5a34"),o=a("1d80"),c=a("ab13"),d=a("c430"),l="".endsWith,h=Math.min,u=c("endsWith"),g=!d&&!u&&!!function(){var t=s(String.prototype,"endsWith");return t&&!t.writable}();e({target:"String",proto:!0,forced:!g&&!u},{endsWith:function(t){var i=String(o(this));r(t);var a=arguments.length>1?arguments[1]:void 0,e=n(i.length),s=void 0===a?e:h(n(a),e),c=String(t);return l?l.call(i,c,s):i.slice(s-c.length,s)===c}})},"8efc":function(t,i,a){},adda:function(t,i,a){"use strict";var e=a("53ca"),s=(a("a9e3"),a("a15b"),a("8a79"),a("2ca0"),a("8efc"),a("90a2")),n=(a("36a7"),a("24b2")),r=a("58df"),o=Object(r["a"])(n["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),c=o,d=a("7560"),l=a("d9f7"),h=a("d9bd"),u="undefined"!==typeof window&&"IntersectionObserver"in window;i["a"]=Object(r["a"])(c,d["a"]).extend({name:"v-img",directives:{intersect:s["a"]},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===Object(e["a"])(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],i=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),i&&t.push('url("'.concat(i,'")'));var a=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[a]):a}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,i,a){if(!u||a||this.eager){if(this.normalisedSrc.lazySrc){var e=new Image;e.src=this.normalisedSrc.lazySrc,this.pollForSize(e,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,i=new Image;this.image=i,i.onload=function(){i.decode?i.decode().catch((function(i){Object(h["c"])("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(i.message?"\nOriginal error: ".concat(i.message):""),t)})).then(t.onLoad):t.onLoad()},i.onerror=this.onError,this.hasError=!1,this.sizes&&(i.sizes=this.sizes),this.normalisedSrc.srcset&&(i.srcset=this.normalisedSrc.srcset),i.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(i),this.getSrc()},pollForSize:function(t){var i=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,e=function e(){var s=t.naturalHeight,n=t.naturalWidth;s||n?(i.naturalWidth=n,i.calculatedAspectRatio=n/s):t.complete||!i.isLoading||i.hasError||null==a||setTimeout(e,a)};e()},genContent:function(){var t=c.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),t},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var i=c.options.render.call(this,t),a=Object(l["a"])(i.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:u?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return i.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(i.tag,a,i.children)}})},f5fb:function(t,i,a){}}]);
//# sourceMappingURL=chunk-71d7d640.212a2701.js.map