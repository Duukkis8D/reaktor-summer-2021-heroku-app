(this["webpackJsonpreaktor-summer-2021-pre-assignment"]=this["webpackJsonpreaktor-summer-2021-pre-assignment"]||[]).push([[0],{40:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c(2),a=c(14),s=c.n(a),i=c(15),j=c(5),d=c(16),u=c.n(d),o=function(){var e="".concat("https://reaktor-2021-duukkis8d.herokuapp.com","/products/gloves"),t=Object(n.useState)([]),c=Object(j.a)(t,2),a=c[0],s=c[1],d=Object(n.useState)([]),o=Object(j.a)(d,2),h=o[0],l=o[1];Object(n.useEffect)((function(){u.a.get(e).then((function(e){var t=b(e.data.map((function(e){return e.manufacturer})));s(e.data),l(t),console.log(h)}))}),[]);var b=function(e){var t,c=[],r=Object(i.a)(e);try{for(r.s();!(t=r.n()).done;){var n=t.value;-1===c.indexOf(n)&&c.push(n)}}catch(a){r.e(a)}finally{r.f()}return c};return Object(r.jsxs)("table",{children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"id"}),Object(r.jsx)("th",{children:"product name"}),Object(r.jsx)("th",{children:"color"}),Object(r.jsx)("th",{children:"manufacturer"}),Object(r.jsx)("th",{children:"price"}),Object(r.jsx)("th",{children:"availability"})]})}),Object(r.jsx)("tbody",{children:a.map((function(e){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:e.id},e.id),Object(r.jsx)("td",{children:e.name},e.name),Object(r.jsx)("td",{children:e.color.map((function(e){return"".concat(e," ")}))},e.color),Object(r.jsx)("td",{children:e.manufacturer},e.manufacturer),Object(r.jsx)("td",{children:e.price},e.price)]},e.id)}))})]})};s.a.render(Object(r.jsx)(o,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.a1fc3895.chunk.js.map