(this["webpackJsonpreaktor-summer-2021-pre-assignment"]=this["webpackJsonpreaktor-summer-2021-pre-assignment"]||[]).push([[0],{40:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c(2),a=c(14),i=c.n(a),s=c(15),j=c(5),d=c(16),u=c.n(d),o=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)([]),d=Object(j.a)(i,2),o=d[0],h=d[1];Object(n.useEffect)((function(){u.a.get("https://reaktor-2021-duukkis8d.herokuapp.com").then((function(e){var t=b(e.data.map((function(e){return e.manufacturer})));a(e.data),h(t),console.log(o)}))}),[]);var b=function(e){var t,c=[],r=Object(s.a)(e);try{for(r.s();!(t=r.n()).done;){var n=t.value;-1===c.indexOf(n)&&c.push(n)}}catch(a){r.e(a)}finally{r.f()}return c};return Object(r.jsxs)("table",{children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"id"}),Object(r.jsx)("th",{children:"product name"}),Object(r.jsx)("th",{children:"color"}),Object(r.jsx)("th",{children:"manufacturer"}),Object(r.jsx)("th",{children:"price"}),Object(r.jsx)("th",{children:"availability"})]})}),Object(r.jsx)("tbody",{children:c.map((function(e){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:e.id},e.id),Object(r.jsx)("td",{children:e.name},e.name),Object(r.jsx)("td",{children:e.color.map((function(e){return"".concat(e," ")}))},e.color),Object(r.jsx)("td",{children:e.manufacturer},e.manufacturer),Object(r.jsx)("td",{children:e.price},e.price)]},e.id)}))})]})};i.a.render(Object(r.jsx)(o,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.5450f2d4.chunk.js.map