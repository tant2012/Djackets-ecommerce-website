(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75e76e66"],{1148:function(e,t,n){"use strict";var c=n("da84"),r=n("5926"),o=n("577e"),l=n("1d80"),a=c.RangeError;e.exports=function(e){var t=o(l(this)),n="",c=r(e);if(c<0||c==1/0)throw a("Wrong number of repetitions");for(;c>0;(c>>>=1)&&(t+=t))1&c&&(n+=t);return n}},"408a":function(e,t,n){var c=n("e330");e.exports=c(1..valueOf)},b680:function(e,t,n){"use strict";var c=n("23e7"),r=n("da84"),o=n("e330"),l=n("5926"),a=n("408a"),i=n("1148"),u=n("d039"),s=r.RangeError,d=r.String,b=Math.floor,m=o(i),f=o("".slice),O=o(1..toFixed),j=function(e,t,n){return 0===t?n:t%2===1?j(e,t-1,n*e):j(e*e,t/2,n)},p=function(e){var t=0,n=e;while(n>=4096)t+=12,n/=4096;while(n>=2)t+=1,n/=2;return t},h=function(e,t,n){var c=-1,r=n;while(++c<6)r+=t*e[c],e[c]=r%1e7,r=b(r/1e7)},v=function(e,t){var n=6,c=0;while(--n>=0)c+=e[n],e[n]=b(c/t),c=c%t*1e7},E=function(e){var t=6,n="";while(--t>=0)if(""!==n||0===t||0!==e[t]){var c=d(e[t]);n=""===n?c:n+m("0",7-c.length)+c}return n},g=u((function(){return"0.000"!==O(8e-5,3)||"1"!==O(.9,0)||"1.25"!==O(1.255,2)||"1000000000000000128"!==O(0xde0b6b3a7640080,0)}))||!u((function(){O({})}));c({target:"Number",proto:!0,forced:g},{toFixed:function(e){var t,n,c,r,o=a(this),i=l(e),u=[0,0,0,0,0,0],b="",O="0";if(i<0||i>20)throw s("Incorrect fraction digits");if(o!=o)return"NaN";if(o<=-1e21||o>=1e21)return d(o);if(o<0&&(b="-",o=-o),o>1e-21)if(t=p(o*j(2,69,1))-69,n=t<0?o*j(2,-t,1):o/j(2,t,1),n*=4503599627370496,t=52-t,t>0){h(u,0,n),c=i;while(c>=7)h(u,1e7,0),c-=7;h(u,j(10,c,1),0),c=t-1;while(c>=23)v(u,1<<23),c-=23;v(u,1<<c),h(u,1,1),v(u,2),O=E(u)}else h(u,0,n),h(u,1<<-t,0),O=E(u)+m("0",i);return i>0?(r=O.length,O=b+(r<=i?"0."+m("0",i-r)+O:f(O,0,r-i)+"."+f(O,r-i))):O=b+O,O}})},fc1b:function(e,t,n){"use strict";n.r(t);var c=n("1da1"),r=(n("96cf"),n("7a23")),o=n("751a"),l=n("4360"),a=n("a18c"),i=(n("d3b7"),n("b0c0"),n("b680"),{class:"box mb-4"}),u={class:"is-size-4 mb-6"},s=Object(r["createElementVNode"])("h4",{class:"is-size-5"},"Products",-1),d={class:"table is-fullwidth"},b=Object(r["createElementVNode"])("thead",null,[Object(r["createElementVNode"])("tr",null,[Object(r["createElementVNode"])("th",null,"Product"),Object(r["createElementVNode"])("th",null,"Price"),Object(r["createElementVNode"])("th",null,"Quantity"),Object(r["createElementVNode"])("th",null,"Total")])],-1),m={props:{order:{type:Object}},setup:function(e){var t=function(e){return e.quantity*e.product.price};return function(n,c){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",i,[Object(r["createElementVNode"])("h3",u,"Order #"+Object(r["toDisplayString"])(e.order.id),1),s,Object(r["createElementVNode"])("table",d,[b,Object(r["createElementVNode"])("tbody",null,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(e.order.items,(function(e){return Object(r["openBlock"])(),Object(r["createElementBlock"])("tr",{key:e.product.id},[Object(r["createElementVNode"])("td",null,Object(r["toDisplayString"])(e.product.name),1),Object(r["createElementVNode"])("td",null,"$"+Object(r["toDisplayString"])(e.product.price),1),Object(r["createElementVNode"])("td",null,Object(r["toDisplayString"])(e.quantity),1),Object(r["createElementVNode"])("td",null,"$"+Object(r["toDisplayString"])(t(e).toFixed(2)),1)])})),128))])])])}}};const f=m;var O=f,j={class:"page-my-account"},p={class:"columns is-multiline"},h=Object(r["createElementVNode"])("div",{class:"column is-12"},[Object(r["createElementVNode"])("h1",{class:"title"},"My Account")],-1),v={class:"column is-12"},E=Object(r["createElementVNode"])("h2",{class:"subtitle"},"My orders",-1),g={setup:function(e){var t=Object(r["ref"])([]),n=Object(l["a"])(),i=function(){o["a"].defaults.headers.common["Authorization"]="",localStorage.removeItem("token"),localStorage.removeItem("username"),localStorage.removeItem("userid"),n.removeToken(),a["a"].push("/")},u=function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n.setIsLoading(!0),e.next=3,o["a"].get("/v1/orders/").then((function(e){t.value=e.data})).catch((function(e){console.log(e)}));case 3:n.setIsLoading(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r["onMounted"])((function(){document.title="My account | TGHomie",u()})),function(e,n){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",j,[Object(r["createElementVNode"])("div",p,[h,Object(r["createElementVNode"])("div",{class:"column is-12"},[Object(r["createElementVNode"])("button",{onClick:i,class:"button is-danger"},"Log out")]),Object(r["createElementVNode"])("div",v,[E,(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(t.value,(function(e){return Object(r["openBlock"])(),Object(r["createBlock"])(Object(r["unref"])(O),{key:e.id,order:e},null,8,["order"])})),128))])])])}}};const N=g;t["default"]=N}}]);
//# sourceMappingURL=chunk-75e76e66.c550fe01.js.map