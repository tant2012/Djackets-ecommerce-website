(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7edd22b8"],{"057f":function(t,e,n){var i=n("c6b6"),o=n("fc6a"),r=n("241c").f,a=n("4dae"),s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return r(t)}catch(e){return a(s)}};t.exports.f=function(t){return s&&"Window"==i(t)?c(t):r(o(t))}},"428f":function(t,e,n){var i=n("da84");t.exports=i},"4b44":function(t,e,n){
/*!
 * bulma-toast 2.4.1 
 * (c) 2018-present @rfoel <rafaelfr@outlook.com> 
 * Released under the MIT License.
 */
(function(t,n){n(e)})(0,(function(t){"use strict";function e(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function n(t){for(var n,i=1;i<arguments.length;i++)n=null==arguments[i]?{}:arguments[i],i%2?e(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}));return t}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n,i=0;i<e.length;i++)n=e[i],n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}function r(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(){var t;return null!==(t=p)&&void 0!==t?t:document}function c(t,e,n,i,o,r){if(m.position)return m.position;var a=s().createElement("div");return a.setAttribute("style","width:100%;z-index:99999;position:fixed;pointer-events:none;display:flex;flex-direction:column;padding:15px;"+b(e,n,i,o,r)),t.appendChild(a),m.position=a,a}function f(t){for(var e in m)m[e].remove();m={},p=t}function u(t){if(!t.message)throw new Error("message is required");var e=n(n({},d),t),i=new h(e),o=c(e.appendTo||s().body,e.position||d.position,e.offsetTop||d.offsetTop,e.offsetBottom||d.offsetBottom,e.offsetLeft||d.offsetLeft,e.offsetRight||d.offsetRight);if(e.single)for(var r=o.lastElementChild;r;)o.removeChild(r),r=o.lastElementChild;o.appendChild(i.element)}var l={duration:2e3,position:"top-right",closeOnClick:!0,opacity:1,single:!1,offsetTop:0,offsetBottom:0,offsetLeft:0,offsetRight:0,extraClasses:""},d=n({},l),m={},p=null,b=function(t,e,n,i,o){return"top-left"===t?"left:".concat(i,";top:").concat(e,";text-align:left;align-items:flex-start;"):"top-right"===t?"right:".concat(o,";top:").concat(e,";text-align:right;align-items:flex-end;"):"top-center"===t?"top:".concat(e,";left:0;right:0;text-align:center;align-items:center;"):"bottom-left"===t?"left:".concat(i,";bottom:").concat(n,";text-align:left;align-items:flex-start;"):"bottom-right"===t?"right:".concat(o,";bottom:").concat(n,";text-align:right;align-items:flex-end;"):"bottom-center"===t?"bottom:".concat(n,";left:0;right:0;text-align:center;align-items:center;"):"center"===t?"top:0;left:0;right:0;bottom:0;flex-flow:column;justify-content:center;align-items:center;":void 0},h=function(){function t(e){var n=this;i(this,t),this.element=s().createElement("div"),this.opacity=e.opacity,this.type=e.type,this.animate=e.animate,this.dismissible=e.dismissible,this.closeOnClick=e.closeOnClick,this.message=e.message,this.duration=e.duration,this.pauseOnHover=e.pauseOnHover,this.offsetTop=e.offsetTop,this.offsetBottom=e.offsetBottom,this.offsetLeft=e.offsetLeft,this.offsetRight=e.offsetRight,this.extraClasses=e.extraClasses;var o="width:auto;pointer-events:auto;display:inline-flex;white-space:pre-wrap;opacity:".concat(this.opacity,";"),r=["notification",this.extraClasses];if(this.type&&r.push(this.type),this.animate&&this.animate["in"]){var a="animate__".concat(this.animate["in"]),c=this.animate.speed?"animate__".concat(this.animate.speed):"animate__faster";r.push("animate__animated ".concat(a," ").concat(c)),this.onAnimationEnd((function(){return n.element.classList.remove(a)}))}if(this.element.className=r.join(" "),this.dismissible){var f=s().createElement("button");f.className="delete",f.addEventListener("click",(function(){n.destroy()})),this.element.insertAdjacentElement("afterbegin",f)}else o+="padding: 1.25rem 1.5rem";this.closeOnClick&&this.element.addEventListener("click",(function(){n.destroy()})),this.element.setAttribute("style",o),"string"==typeof this.message?this.element.insertAdjacentHTML("beforeend",this.message):this.element.appendChild(this.message);var u=new v((function(){n.destroy()}),this.duration);this.pauseOnHover&&(this.element.addEventListener("mouseover",(function(){u.pause()})),this.element.addEventListener("mouseout",(function(){u.resume()})))}return r(t,[{key:"destroy",value:function(){var t=this;this.animate&&this.animate.out?(this.element.classList.add("animate__".concat(this.animate.out)),this.onAnimationEnd((function(){t.removeParent(t.element.parentNode),t.element.remove(),delete m.position}))):(this.removeParent(this.element.parentNode),this.element.remove(),delete m.position)}},{key:"removeParent",value:function(t){t&&1>=t.children.length&&t.remove()}},{key:"onAnimationEnd",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:function(){},e={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"mozAnimationEnd",WebkitAnimation:"webkitAnimationEnd"};for(var n in e)if(void 0!==this.element.style[n]){this.element.addEventListener(e[n],(function(){return t()}));break}}}]),t}(),v=function(){function t(e,n){i(this,t),this.timer,this.start,this.remaining=n,this.callback=e,this.resume()}return r(t,[{key:"pause",value:function(){"undefined"==typeof document||(window.clearTimeout(this.timer),this.remaining-=new Date-this.start)}},{key:"resume",value:function(){"undefined"==typeof document||(this.start=new Date,window.clearTimeout(this.timer),this.timer=window.setTimeout(this.callback,this.remaining))}}]),t}();t.resetDefaults=function(){d=n({},l)},t.setDefaults=function(t){d=n(n({},l),t)},t.setDoc=f,t.toast=u,Object.defineProperty(t,"__esModule",{value:!0})}))},"4dae":function(t,e,n){var i=n("da84"),o=n("23cb"),r=n("07fa"),a=n("8418"),s=i.Array,c=Math.max;t.exports=function(t,e,n){for(var i=r(t),f=o(e,i),u=o(void 0===n?i:n,i),l=s(c(u-f,0)),d=0;f<u;f++,d++)a(l,d,t[f]);return l.length=d,l}},"746f":function(t,e,n){var i=n("428f"),o=n("1a2d"),r=n("e538"),a=n("9bf2").f;t.exports=function(t){var e=i.Symbol||(i.Symbol={});o(e,t)||a(e,t,{value:r.f(t)})}},8418:function(t,e,n){"use strict";var i=n("a04b"),o=n("9bf2"),r=n("5c6c");t.exports=function(t,e,n){var a=i(e);a in t?o.f(t,a,r(0,n)):t[a]=n}},"99af":function(t,e,n){"use strict";var i=n("23e7"),o=n("da84"),r=n("d039"),a=n("e8b5"),s=n("861d"),c=n("7b0b"),f=n("07fa"),u=n("8418"),l=n("65f0"),d=n("1dde"),m=n("b622"),p=n("2d00"),b=m("isConcatSpreadable"),h=9007199254740991,v="Maximum allowed index exceeded",g=o.TypeError,y=p>=51||!r((function(){var t=[];return t[b]=!1,t.concat()[0]!==t})),O=d("concat"),j=function(t){if(!s(t))return!1;var e=t[b];return void 0!==e?!!e:a(t)},w=!y||!O;i({target:"Array",proto:!0,forced:w},{concat:function(t){var e,n,i,o,r,a=c(this),s=l(a,0),d=0;for(e=-1,i=arguments.length;e<i;e++)if(r=-1===e?a:arguments[e],j(r)){if(o=f(r),d+o>h)throw g(v);for(n=0;n<o;n++,d++)n in r&&u(s,d,r[n])}else{if(d>=h)throw g(v);u(s,d++,r)}return s.length=d,s}})},a4d3:function(t,e,n){"use strict";var i=n("23e7"),o=n("da84"),r=n("d066"),a=n("2ba4"),s=n("c65b"),c=n("e330"),f=n("c430"),u=n("83ab"),l=n("4930"),d=n("d039"),m=n("1a2d"),p=n("e8b5"),b=n("1626"),h=n("861d"),v=n("3a9b"),g=n("d9b5"),y=n("825a"),O=n("7b0b"),j=n("fc6a"),w=n("a04b"),E=n("577e"),x=n("5c6c"),k=n("7c73"),N=n("df75"),S=n("241c"),P=n("057f"),C=n("7418"),T=n("06cf"),V=n("9bf2"),A=n("37e8"),L=n("d1e7"),_=n("f36a"),D=n("6eeb"),R=n("5692"),B=n("f772"),M=n("d012"),H=n("90e3"),I=n("b622"),J=n("e538"),z=n("746f"),q=n("d44e"),F=n("69f3"),W=n("b727").forEach,$=B("hidden"),G="Symbol",Q="prototype",U=I("toPrimitive"),K=F.set,X=F.getterFor(G),Y=Object[Q],Z=o.Symbol,tt=Z&&Z[Q],et=o.TypeError,nt=o.QObject,it=r("JSON","stringify"),ot=T.f,rt=V.f,at=P.f,st=L.f,ct=c([].push),ft=R("symbols"),ut=R("op-symbols"),lt=R("string-to-symbol-registry"),dt=R("symbol-to-string-registry"),mt=R("wks"),pt=!nt||!nt[Q]||!nt[Q].findChild,bt=u&&d((function(){return 7!=k(rt({},"a",{get:function(){return rt(this,"a",{value:7}).a}})).a}))?function(t,e,n){var i=ot(Y,e);i&&delete Y[e],rt(t,e,n),i&&t!==Y&&rt(Y,e,i)}:rt,ht=function(t,e){var n=ft[t]=k(tt);return K(n,{type:G,tag:t,description:e}),u||(n.description=e),n},vt=function(t,e,n){t===Y&&vt(ut,e,n),y(t);var i=w(e);return y(n),m(ft,i)?(n.enumerable?(m(t,$)&&t[$][i]&&(t[$][i]=!1),n=k(n,{enumerable:x(0,!1)})):(m(t,$)||rt(t,$,x(1,{})),t[$][i]=!0),bt(t,i,n)):rt(t,i,n)},gt=function(t,e){y(t);var n=j(e),i=N(n).concat(Et(n));return W(i,(function(e){u&&!s(Ot,n,e)||vt(t,e,n[e])})),t},yt=function(t,e){return void 0===e?k(t):gt(k(t),e)},Ot=function(t){var e=w(t),n=s(st,this,e);return!(this===Y&&m(ft,e)&&!m(ut,e))&&(!(n||!m(this,e)||!m(ft,e)||m(this,$)&&this[$][e])||n)},jt=function(t,e){var n=j(t),i=w(e);if(n!==Y||!m(ft,i)||m(ut,i)){var o=ot(n,i);return!o||!m(ft,i)||m(n,$)&&n[$][i]||(o.enumerable=!0),o}},wt=function(t){var e=at(j(t)),n=[];return W(e,(function(t){m(ft,t)||m(M,t)||ct(n,t)})),n},Et=function(t){var e=t===Y,n=at(e?ut:j(t)),i=[];return W(n,(function(t){!m(ft,t)||e&&!m(Y,t)||ct(i,ft[t])})),i};if(l||(Z=function(){if(v(tt,this))throw et("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?E(arguments[0]):void 0,e=H(t),n=function(t){this===Y&&s(n,ut,t),m(this,$)&&m(this[$],e)&&(this[$][e]=!1),bt(this,e,x(1,t))};return u&&pt&&bt(Y,e,{configurable:!0,set:n}),ht(e,t)},tt=Z[Q],D(tt,"toString",(function(){return X(this).tag})),D(Z,"withoutSetter",(function(t){return ht(H(t),t)})),L.f=Ot,V.f=vt,A.f=gt,T.f=jt,S.f=P.f=wt,C.f=Et,J.f=function(t){return ht(I(t),t)},u&&(rt(tt,"description",{configurable:!0,get:function(){return X(this).description}}),f||D(Y,"propertyIsEnumerable",Ot,{unsafe:!0}))),i({global:!0,wrap:!0,forced:!l,sham:!l},{Symbol:Z}),W(N(mt),(function(t){z(t)})),i({target:G,stat:!0,forced:!l},{for:function(t){var e=E(t);if(m(lt,e))return lt[e];var n=Z(e);return lt[e]=n,dt[n]=e,n},keyFor:function(t){if(!g(t))throw et(t+" is not a symbol");if(m(dt,t))return dt[t]},useSetter:function(){pt=!0},useSimple:function(){pt=!1}}),i({target:"Object",stat:!0,forced:!l,sham:!u},{create:yt,defineProperty:vt,defineProperties:gt,getOwnPropertyDescriptor:jt}),i({target:"Object",stat:!0,forced:!l},{getOwnPropertyNames:wt,getOwnPropertySymbols:Et}),i({target:"Object",stat:!0,forced:d((function(){C.f(1)}))},{getOwnPropertySymbols:function(t){return C.f(O(t))}}),it){var xt=!l||d((function(){var t=Z();return"[null]"!=it([t])||"{}"!=it({a:t})||"{}"!=it(Object(t))}));i({target:"JSON",stat:!0,forced:xt},{stringify:function(t,e,n){var i=_(arguments),o=e;if((h(e)||void 0!==t)&&!g(t))return p(e)||(e=function(t,e){if(b(o)&&(e=s(o,this,t,e)),!g(e))return e}),i[1]=e,a(it,null,i)}})}if(!tt[U]){var kt=tt.valueOf;D(tt,U,(function(t){return s(kt,this)}))}q(Z,G),M[$]=!0},d2f1:function(t,e,n){"use strict";n.r(e);var i=n("1da1"),o=(n("96cf"),n("99af"),n("b0c0"),n("a4d3"),n("e01a"),n("7a23")),r=n("751a"),a=n("a18c"),s=n("4360"),c=n("4b44"),f={class:"page-product"},u={class:"columns is-multiline"},l={class:"column is-9"},d={class:"image mb-6"},m=["src"],p={class:"title"},b={class:"column is-3"},h=Object(o["createElementVNode"])("h2",{class:"subtitle"},"Information",-1),v=Object(o["createElementVNode"])("strong",null,"Price:",-1),g={class:"field has-addons mt-6"},y={class:"control"},O={setup:function(t){var e=Object(s["a"])(),n=Object(o["ref"])(1),O=Object(o["ref"])({}),j=function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.setIsLoading(!0),n=a["a"].currentRoute.value.params.category_slug,i=a["a"].currentRoute.value.params.product_slug,t.next=5,r["a"].get("/v1/products/".concat(n,"/").concat(i)).then((function(t){O.value=t.data,document.title=O.value.name+" | TGHomie"})).catch((function(t){console.log(t)}));case 5:e.setIsLoading(!1);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),w=function(){(isNaN(n.value)||n.value<1)&&(n.value=1);var t={product:O.value,quantity:n.value};e.addToCart(t),Object(c["toast"])({message:"The product was added to the cart",type:"is-success",dismissible:!0,pauseOnHover:!0,duration:2e3,position:"bottom-right"})};return Object(o["onMounted"])((function(){j()})),function(t,e){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",f,[Object(o["createElementVNode"])("div",u,[Object(o["createElementVNode"])("div",l,[Object(o["createElementVNode"])("figure",d,[Object(o["createElementVNode"])("img",{src:Object(o["unref"])(O).get_image},null,8,m)]),Object(o["createElementVNode"])("h1",p,Object(o["toDisplayString"])(Object(o["unref"])(O).name),1),Object(o["createElementVNode"])("p",null,Object(o["toDisplayString"])(Object(o["unref"])(O).description),1)]),Object(o["createElementVNode"])("div",b,[h,Object(o["createElementVNode"])("p",null,[v,Object(o["createTextVNode"])(Object(o["toDisplayString"])(Object(o["unref"])(O).price),1)]),Object(o["createElementVNode"])("div",g,[Object(o["createElementVNode"])("div",y,[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"number",class:"input",min:"1","onUpdate:modelValue":e[0]||(e[0]=function(t){return Object(o["isRef"])(n)?n.value=t:n=t})},null,512),[[o["vModelText"],Object(o["unref"])(n)]])]),Object(o["createElementVNode"])("div",{class:"control"},[Object(o["createElementVNode"])("a",{class:"button is-dark",onClick:w},"Add to cart")])])])])])}}};const j=O;e["default"]=j},e01a:function(t,e,n){"use strict";var i=n("23e7"),o=n("83ab"),r=n("da84"),a=n("e330"),s=n("1a2d"),c=n("1626"),f=n("3a9b"),u=n("577e"),l=n("9bf2").f,d=n("e893"),m=r.Symbol,p=m&&m.prototype;if(o&&c(m)&&(!("description"in p)||void 0!==m().description)){var b={},h=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:u(arguments[0]),e=f(p,this)?new m(t):void 0===t?m():m(t);return""===t&&(b[e]=!0),e};d(h,m),h.prototype=p,p.constructor=h;var v="Symbol(test)"==String(m("test")),g=a(p.toString),y=a(p.valueOf),O=/^Symbol\((.*)\)[^)]+$/,j=a("".replace),w=a("".slice);l(p,"description",{configurable:!0,get:function(){var t=y(this),e=g(t);if(s(b,t))return"";var n=v?w(e,7,-1):j(e,O,"$1");return""===n?void 0:n}}),i({global:!0,forced:!0},{Symbol:h})}},e538:function(t,e,n){var i=n("b622");e.f=i}}]);
//# sourceMappingURL=chunk-7edd22b8.11cadb1c.js.map