(this["webpackJsonpreaktor-summer-2021-pre-assignment"]=this["webpackJsonpreaktor-summer-2021-pre-assignment"]||[]).push([[0],{71:function(e,t,r){},72:function(e,t,r){"use strict";r.r(t);var a=r(2),n=r(13),c=r.n(n),i=r(34),o=r(15),u=r(5),s=function(e){var t=e.productType,r=e.handleProductTypeChange;return Object(u.jsxs)("div",{id:"filterProductsContainer",children:[Object(u.jsx)("h2",{children:"Shows products by category type"}),Object(u.jsx)("label",{htmlFor:"products",children:"Please select a category."}),Object(u.jsx)("br",{}),Object(u.jsxs)("select",{name:"products",onChange:r,value:t,children:[Object(u.jsx)("option",{defaultValue:!0,disabled:!0,hidden:!0,style:{display:"none"},value:""}),Object(u.jsx)("option",{value:"gloves",children:"gloves"}),Object(u.jsx)("option",{value:"facemasks",children:"facemasks"}),Object(u.jsx)("option",{value:"beanies",children:"beanies"})]})]})},d=r(12),l=(r(52),function(e){var t=e.productsAndAvailabilities,r=e.productType,a=function(){return"gloves"===r?t[0]:"facemasks"===r?t[1]:"beanies"===r?t[2]:["Unexpected error occurred. Please refresh page."]};return Object(u.jsx)("div",{id:"productListContainer",children:""!==r?Object(u.jsxs)(d.b,{width:1100,height:500,headerHeight:20,rowHeight:30,rowCount:a().length,rowGetter:function(e){var t=e.index;return a()[t]},children:[Object(u.jsx)(d.a,{label:"id",dataKey:"id",width:220,flexGrow:1}),Object(u.jsx)(d.a,{label:"type",dataKey:"type",width:80,flexGrow:1,flexShrink:2}),Object(u.jsx)(d.a,{label:"name",dataKey:"name",width:200,flexGrow:1}),Object(u.jsx)(d.a,{label:"color",dataKey:"color",width:100,flexGrow:1}),Object(u.jsx)(d.a,{label:"price",dataKey:"price",width:60,flexGrow:1,flexShrink:2}),Object(u.jsx)(d.a,{label:"manufacturer",dataKey:"manufacturer",width:140,flexGrow:1}),Object(u.jsx)(d.a,{label:"availability",dataKey:"availability",width:140,flexGrow:1})]}):void 0})}),f=r(32),p=r(33),b=function(e,t){e.interceptors.response.use((function(r){return r.data.length>2?(console.log("valid server response detected with parameter:",r.config.params),r):r.config.params.manufacturer&&r.data.length<=2?(console.error("invalid server response detected with product manufacturer parameter:",r.config.params.manufacturer,"response.data.length:",r.data.length,"requesting data again..."),e.get(t,{params:{manufacturer:r.config.params.manufacturer}})):void 0}),(function(e){return Promise.reject("error occurred during API request:",e)}))},j=r.n(p).a.create(),h="https://reaktor-2021-duukkis8d.herokuapp.com/api";b(j,h);var m=function(){return Promise.all([j.get(h,{params:{category:"gloves"}}),j.get(h,{params:{category:"facemasks"}}),j.get(h,{params:{category:"beanies"}})]).then((function(e){return e.map((function(e){return e.data}))}))},O=function(e){var t,r=[],a=Object(f.a)(e);try{for(a.s();!(t=a.n()).done;){var n=t.value;-1===r.indexOf(n)&&r.push(n)}}catch(c){a.e(c)}finally{a.f()}return r},g=function(e){var t=e.map((function(e){return function(e){return j.get(h,{params:{manufacturer:e}})}(e)}));return Promise.all(t).then((function(e){return e.map((function(e){return e.data}))}))},v=function(e,t){for(var r=new Map,a=0;a<e.length;a++)r.set(e[a],t[a]);return r},x=function(e,t){var r=function(e){return{id:e.id,type:e.type,name:e.name.toLowerCase(),color:e.color.map((function(e){return"".concat(e)})),price:e.price,manufacturer:e.manufacturer,availability:t.get(e.manufacturer).filter((function(t){return t.id===e.id.toUpperCase()})).map((function(e){return e.DATAPAYLOAD.substring(e.DATAPAYLOAD.search("<INSTOCKVALUE>")+14,e.DATAPAYLOAD.search("</INSTOCKVALUE>"))}))[0].toLowerCase()}};return e.map((function(e){return e.map(r)}))},y=(r(71),function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),r=t[0],n=t[1],c=Object(a.useState)(""),d=Object(o.a)(c,2),f=d[0],p=d[1],b=Object(a.useState)([]),j=Object(o.a)(b,2),h=j[0],y=j[1];Object(a.useEffect)((function(){m().then((function(e){var t;n(e),y(O((t=[]).concat.apply(t,Object(i.a)(e)).map((function(e){return e.manufacturer}))))}))}),[]);var w=Object(a.useState)([]),A=Object(o.a)(w,2),P=A[0],k=A[1];Object(a.useEffect)((function(){g(h).then((function(e){k(e)})).catch((function(e){console.error("Error occurred while fetching product availability data.",e)}))}),[h]);var C=Object(a.useState)(new Map),T=Object(o.a)(C,2),S=T[0],L=T[1];Object(a.useEffect)((function(){L(v(h,P))}),[P]);var K=Object(a.useState)([]),E=Object(o.a)(K,2),G=E[0],D=E[1];Object(a.useEffect)((function(){D(x(r,S))}),[S]);var I=function(e){p(e.target.value)};return Object(u.jsxs)("div",{id:"appContainer",children:[Object(u.jsx)("h1",{children:"Product list"}),"undefined"!==typeof G&&G.length>0?Object(u.jsxs)("div",{id:"filterProductsAndProductListContainer",children:[Object(u.jsx)(s,{productType:f,handleProductTypeChange:I}),Object(u.jsx)(l,{productsAndAvailabilities:G,productType:f})]}):Object(u.jsx)("p",{children:"Loading product data. Please wait. This might take about 30-60 seconds."})]})});c.a.render(Object(u.jsx)(y,{}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.f456c834.chunk.js.map