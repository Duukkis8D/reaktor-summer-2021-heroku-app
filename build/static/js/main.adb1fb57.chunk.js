(this["webpackJsonpreaktor-summer-2021-pre-assignment"]=this["webpackJsonpreaktor-summer-2021-pre-assignment"]||[]).push([[0],{42:function(e,t,r){},43:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r(16),c=r.n(a),i=r(18),o=r(4),s=r(0),l=function(e){var t=e.productType,r=e.handleProductTypeChange;return Object(s.jsxs)("div",{id:"filterProductsContainer",children:[Object(s.jsx)("h2",{children:"Shows products by category type"}),Object(s.jsx)("label",{htmlFor:"products",children:"Please select a category. It takes some time for the selection to take effect."}),Object(s.jsx)("br",{}),Object(s.jsxs)("select",{name:"products",onChange:r,value:t,children:[Object(s.jsx)("option",{defaultValue:!0,disabled:!0,hidden:!0,style:{display:"none"},value:""}),Object(s.jsx)("option",{value:"gloves",children:"gloves"}),Object(s.jsx)("option",{value:"facemasks",children:"facemasks"}),Object(s.jsx)("option",{value:"beanies",children:"beanies"})]})]})},u=function(e){var t=e.productsAndAvailabilities,r=e.productType,n=function(){return"gloves"===r?(console.log("productsAndAvailabilities[0] in renderProducts function:",t[0]),t[0]):"facemasks"===r?(console.log("productsAndAvailabilities[1] in renderProducts function:",t[1]),t[1]):"beanies"===r?(console.log("productsAndAvailabilities[2] in renderProducts function:",t[2]),t[2]):Object(s.jsx)("tr",{children:Object(s.jsx)("td",{children:"Loading product data. Please wait."})})};return Object(s.jsx)("div",{id:"productListContainer",children:""!==r?Object(s.jsxs)("table",{children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"id"}),Object(s.jsx)("th",{children:"type"}),Object(s.jsx)("th",{children:"product name"}),Object(s.jsx)("th",{children:"color"}),Object(s.jsx)("th",{children:"manufacturer"}),Object(s.jsx)("th",{children:"price"}),Object(s.jsx)("th",{children:"availability"})]})}),Object(s.jsx)("tbody",{children:n()})]}):void 0})},d=r(17),p=r(3),j=r.n(p);j.a.interceptors.response.use((function(e){return console.log("axios response interceptor:"),console.log("response in server response:",e),console.log("response.data.length in server response:",e.data.length),e.config.params.manufacturer&&e.data.length<=2?(console.error("invalid server response detected with parameter:",e.config.params.manufacturer,"response.data.length:",e.data.length,"requesting data again..."),j.a.get("/api",{params:{manufacturer:e.config.params.manufacturer}})):e}),(function(e){return Promise.reject("error occurred during API request:",e)}));var b=function(e){return Promise.all([j.a.get(e,{params:{category:"gloves"}}),j.a.get(e,{params:{category:"facemasks"}}),j.a.get(e,{params:{category:"beanies"}})]).then((function(e){return e.map((function(e){return e.data}))}))},f=function(e){var t,r=[],n=Object(d.a)(e);try{for(n.s();!(t=n.n()).done;){var a=t.value;-1===r.indexOf(a)&&r.push(a)}}catch(c){n.e(c)}finally{n.f()}return r},h=function(e,t){var r=e.map((function(e){return function(e){return j.a.get(t,{params:{manufacturer:e}})}(e)}));return console.log("1. getProductAvailabilityData(...), productAvailabilityPromises:",r),Promise.all(r).then((function(e){return console.log("return Promise.all( productAvailabilityPromises ).then( serverResponses => {","\n","serverResponses:",e),e.map((function(e){return e.data}))}))},O=function(e,t){for(var r=new Map,n=0;n<e.length;n++)r.set(e[n],t[n]);return"undefined"!==typeof t&&t.length>0?(console.log("2. buildProductAvailabilityMap(...), productAvailabilityData:",t),console.log("2. buildProductAvailabilityMap(...), productAvailabilityMap:",r),r):(console.log("2. buildProductAvailabilityMap(...), returning empty Map"),new Map)},g=function(e,t){var r=function(e){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:e.id},e.id),Object(s.jsx)("td",{children:e.type},e.type),Object(s.jsx)("td",{children:e.name},e.name),Object(s.jsx)("td",{children:e.color.map((function(e){return"".concat(e," ")}))},e.color),Object(s.jsx)("td",{children:e.manufacturer},e.manufacturer),Object(s.jsx)("td",{children:e.price},e.price),Object(s.jsx)("td",{children:t.get(e.manufacturer).filter((function(t){return t.id===e.id.toUpperCase()})).map((function(e){return e.DATAPAYLOAD.substring(e.DATAPAYLOAD.search("<INSTOCKVALUE>")+14,e.DATAPAYLOAD.search("</INSTOCKVALUE>"))}))[0].toLowerCase()},e.availability)]},e.id)};return"undefined"!==typeof t&&t.size>0?(console.log("3. buildCompleteProductList(...), productAvailabilities:",t),e.map((function(e){return e.map(r)}))):(console.log("3. buildCompleteProductList(...), returning Loading product data. Please wait. info text"),Object(s.jsx)("tr",{children:Object(s.jsx)("td",{children:"Loading product data. Please wait."})}))},v=(r(42),function(){var e="/api",t=Object(n.useState)([]),r=Object(o.a)(t,2),a=r[0],c=r[1],d=Object(n.useState)(""),p=Object(o.a)(d,2),j=p[0],v=p[1],m=Object(n.useState)([]),x=Object(o.a)(m,2),y=x[0],A=x[1];Object(n.useEffect)((function(){b(e).then((function(e){var t;c(e),A(f((t=[]).concat.apply(t,Object(i.a)(e)).map((function(e){return e.manufacturer}))))}))}),[]);var P=Object(n.useState)([]),L=Object(o.a)(P,2),w=L[0],C=L[1];Object(n.useEffect)((function(){h(y,e).then((function(e){C(e)})).catch((function(e){console.error("Error occurred while fetching product availability data.",e)})),console.log("product availability data useEffect, productAvailabilityData:",w)}),[y]);var T=Object(n.useState)(new Map),k=Object(o.a)(T,2),D=k[0],E=k[1];Object(n.useEffect)((function(){E(O(y,w))}),[w]);var S=Object(n.useState)([]),M=Object(o.a)(S,2),I=M[0],U=M[1];Object(n.useEffect)((function(){U(g(a,D))}),[D]);var V=function(e){v(e.target.value)};return Object(s.jsxs)("div",{id:"appContainer",children:[Object(s.jsx)("h1",{children:"Product list"}),"undefined"!==typeof I&&I.length>0?Object(s.jsxs)("div",{id:"filterProductsAndProductListContainer",children:[Object(s.jsx)(l,{productType:j,handleProductTypeChange:V}),Object(s.jsx)(u,{productsAndAvailabilities:I,productType:j})]}):Object(s.jsx)("p",{children:"Loading product data. Please wait."})]})});c.a.render(Object(s.jsx)(v,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.adb1fb57.chunk.js.map