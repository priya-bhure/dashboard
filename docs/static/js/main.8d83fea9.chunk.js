(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var s=n(26),c=n.n(s),r=n(0),a=n(12),o=n(9),i=n(7),u=n(2),j=(n(32),n(33),n(1)),l=function(e){var t=e.type,n=void 0===t?"":t,s=e.placeholder,c=void 0===s?"":s,a=e.autoSelect,o=void 0!==a&&a,u=e.saveInput,l=e.setAuthErr,d=Object(r.useState)(""),b=Object(i.a)(d,2),p=(b[0],b[1]),O=Object(r.useRef)(null);return Object(j.jsx)("div",{className:"input-container",children:Object(j.jsxs)("div",{className:"label-container",children:[Object(j.jsx)("span",{ref:O,className:"input-placeholder",children:c}),Object(j.jsx)("input",{onChange:function(e){return function(e){l({exists:!1,error:""}),p(e.target.value),u(e.target.value)}(e)},className:"input-field",type:n,autoFocus:o})]})})},d=(n(35),function(e){var t=e.value,n=void 0===t?"":t,s=e.onClick;return Object(j.jsx)("div",{className:"button-container",children:Object(j.jsx)("button",{onClick:s,children:n.toUpperCase()})})}),b=(n(36),function(e){var t=Object(r.useState)(""),n=Object(i.a)(t,2),s=n[0],c=n[1],a=Object(r.useState)(""),o=Object(i.a)(a,2),u=o[0],b=o[1],p=Object(r.useState)({error:"",exists:!1}),O=Object(i.a)(p,2),h=O[0],f=O[1];Object(r.useEffect)((function(){var t=sessionStorage.getItem("username");t&&""!==t&&e.history.push("/categories")}),[]);return console.log("rerender"),Object(j.jsxs)("div",{className:"signin-container",children:[Object(j.jsxs)("div",{className:"input",children:[Object(j.jsx)(l,{type:"username",placeholder:"Username*",autoSelect:!0,saveInput:c,setAuthErr:f}),Object(j.jsx)(l,{type:"password",placeholder:"Password*",saveInput:b,setAuthErr:f})]}),h.exists?Object(j.jsxs)("div",{style:{color:"red"},children:[" ",h.error]}):null,Object(j.jsx)(d,{onClick:function(){s&&u?"john doe"===s.toLowerCase()&&"john doe"===u?(sessionStorage.setItem("username",s),e.setUserType("admin"),e.history.push("/categories")):"foo"===s.toLowerCase()&&"foo"===u?(sessionStorage.setItem("username",s),e.setUserType("user"),e.history.push("/categories")):f({exists:!0,error:"Invalid username and password"}):f(s&&!u?{exists:!0,error:"Please provide a password"}:!s&&u?{exists:!0,error:"Please provide a username"}:{exists:!0,error:"Please provide username and password"})},value:"Sign In"})]})}),p=n(13),O=n.n(p),h=(n(55),function(e){var t=e.key,n=e.data,s=e.onClick,c=e.pointer,r=void 0===c?"":c;return Object(j.jsx)("div",{onClick:s,className:"card-container ".concat(r),children:n.map((function(e){var t=e.label,n=e.value;return Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{style:{color:"#4A4A4A",fontWeight:"bolder",letterSpacing:"2px"},children:""!==t?t.toUpperCase()+": ":""}),Object(j.jsx)("span",{style:{color:"white"},children:n})]})}))},t)}),f=(n(56),function(e){var t=Object(r.useState)([]),n=Object(i.a)(t,2),s=n[0],c=n[1];return Object(r.useEffect)((function(){var t="https://run.mocky.io/v3/602ccde9-9cf9-4d5d-a05e-54c262286ccc";"admin"==e.userType&&(t="https://run.mocky.io/v3/8934747c-34c5-4624-a36b-8c927b56a49e"),O.a.get(t).then((function(e){c(e.data.categories)}))}),[]),Object(j.jsx)("div",{className:"categories-container",style:{color:"white"},children:s.map((function(t){return Object(j.jsx)(h,{onClick:function(){return n=t,void e.history.push("/categories/".concat(n.toLowerCase()));var n},pointer:"pointer",data:[{label:"",value:t}]})}))})}),v=(n(57),function(e){var t=Object(r.useState)([]),n=Object(i.a)(t,2),s=n[0],c=n[1];return Object(r.useEffect)((function(){var t=e.match.params.id;O.a.get("https://api.spacexdata.com/v3/".concat(t)).then((function(e){c(e.data)}))}),[]),Object(j.jsx)("div",{className:"category-container",children:s.map((function(e,t){return Object(j.jsx)(h,{onClick:function(){},data:Object.keys(e).map((function(t){return"string"===typeof e[t]?{label:t,value:e[t]}:{}})).filter((function(e){return!!e.label}))},t)}))})}),x=function(e){var t=(e.isLoggedIn||sessionStorage.getItem("username"))&&""!==sessionStorage.getItem("username");return Object(j.jsx)(r.Fragment,{children:t?e.children:Object(j.jsx)(u.a,{to:"/login"})})},m=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),n=t[0],s=t[1];return Object(j.jsx)("div",{className:"app",children:Object(j.jsxs)(u.d,{children:[Object(j.jsx)(u.a,{exact:!0,from:"/",to:"/login"}),Object(j.jsx)(u.b,{path:"/login",render:function(e){return Object(j.jsx)(b,Object(o.a)(Object(o.a)({},e),{},{setUserType:s}))}}),Object(j.jsx)(u.b,{exact:!0,path:"/categories",render:function(e){return Object(j.jsx)(x,Object(o.a)(Object(o.a)({},e),{},{isLoggedIn:""!==n,children:Object(j.jsx)(f,Object(o.a)(Object(o.a)({},e),{},{userType:n}))}))}}),Object(j.jsx)(u.b,{path:"/categories/:id",render:function(e){return Object(j.jsx)(x,Object(o.a)(Object(o.a)({},e),{},{setUserType:s,isLoggedIn:""!==n,children:Object(j.jsx)(v,Object(o.a)({},e))}))}})]})})};c.a.render(Object(j.jsx)(a.a,{basename:"/dashboard",children:Object(j.jsx)(m,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.8d83fea9.chunk.js.map