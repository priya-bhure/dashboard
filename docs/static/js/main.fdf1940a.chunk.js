(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{32:function(e,t,s){},33:function(e,t,s){},35:function(e,t,s){},36:function(e,t,s){},55:function(e,t,s){},56:function(e,t,s){},57:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){"use strict";s.r(t);var n=s(26),a=s.n(n),c=s(0),r=s(12),o=s(9),i=s(4),u=s(2),j=(s(32),s(33),s(1)),l=function(e){var t=e.type,s=void 0===t?"":t,n=e.placeholder,a=void 0===n?"":n,r=e.autoSelect,o=void 0!==r&&r,u=e.saveInput,l=e.setAuthErr,d=Object(c.useState)(""),b=Object(i.a)(d,2),p=(b[0],b[1]),O=Object(c.useRef)(null);return Object(j.jsx)("div",{className:"input-container",children:Object(j.jsxs)("div",{className:"label-container",children:[Object(j.jsx)("span",{ref:O,className:"input-placeholder",children:a}),Object(j.jsx)("input",{onChange:function(e){return function(e){l({exists:!1,error:""}),p(e.target.value),u(e.target.value)}(e)},className:"input-field",type:s,autoFocus:o})]})})},d=(s(35),function(e){var t=e.value,s=void 0===t?"":t,n=e.onClick;return Object(j.jsx)("div",{className:"button-container",children:Object(j.jsx)("button",{onClick:n,children:s.toUpperCase()})})}),b=(s(36),function(e){var t=Object(c.useState)(""),s=Object(i.a)(t,2),n=s[0],a=s[1],r=Object(c.useState)(""),o=Object(i.a)(r,2),u=o[0],b=o[1],p=Object(c.useState)({error:"",exists:!1}),O=Object(i.a)(p,2),h=O[0],m=O[1];return Object(j.jsxs)("div",{className:"signin-container",children:[Object(j.jsxs)("div",{className:"input",children:[Object(j.jsx)(l,{type:"username",placeholder:"Username*",autoSelect:!0,saveInput:a,setAuthErr:m}),Object(j.jsx)(l,{type:"password",placeholder:"Password*",saveInput:b,setAuthErr:m})]}),h.exists?Object(j.jsxs)("div",{style:{color:"red"},children:[" ",h.error]}):null,Object(j.jsx)(d,{onClick:function(){n&&u?"john doe"===n.toLowerCase()&&"john doe"===u?(sessionStorage.setItem("username",n),sessionStorage.setItem("type","admin"),e.setUserType("admin"),e.setUsername(n),e.isLoggedIn(!0),e.history.push("/categories")):"foo"===n.toLowerCase()&&"foo"===u?(sessionStorage.setItem("username",n),sessionStorage.setItem("type","user"),e.setUserType("user"),e.setUsername(n),e.isLoggedIn(!0),e.history.push("/categories")):m({exists:!0,error:"Invalid username and password"}):m(n&&!u?{exists:!0,error:"Please provide a password"}:!n&&u?{exists:!0,error:"Please provide a username"}:{exists:!0,error:"Please provide username and password"})},value:"Sign In"})]})}),p=s(13),O=s.n(p),h=(s(55),function(e){var t=e.key,s=e.data,n=e.onClick,a=e.pointer,c=void 0===a?"":a;return Object(j.jsx)("div",{onClick:n,className:"card-container ".concat(c),children:s.map((function(e){var t=e.label,s=e.value;return Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{style:{color:"#4A4A4A",fontWeight:"bolder",letterSpacing:"2px"},children:""!==t?t.toUpperCase()+": ":""}),Object(j.jsx)("span",{style:{color:"white"},children:s})]})}))},t)}),m=(s(56),function(e){var t=Object(c.useState)([]),s=Object(i.a)(t,2),n=s[0],a=s[1];return Object(c.useEffect)((function(){var t="https://run.mocky.io/v3/602ccde9-9cf9-4d5d-a05e-54c262286ccc";"admin"===e.userType&&(t="https://run.mocky.io/v3/8934747c-34c5-4624-a36b-8c927b56a49e"),O.a.get(t).then((function(e){a(e.data.categories)}))}),[]),Object(j.jsx)("div",{className:"categories-container",style:{color:"white"},children:n.map((function(t){return Object(j.jsx)(h,{onClick:function(){return s=t,void e.history.push("/categories/".concat(s.toLowerCase()));var s},pointer:"pointer",data:[{label:"",value:t}]})}))})}),f=(s(57),function(e){var t=Object(c.useState)([]),s=Object(i.a)(t,2),n=s[0],a=s[1];return Object(c.useEffect)((function(){var t=e.match.params.id;O.a.get("https://api.spacexdata.com/v3/".concat(t)).then((function(e){a(e.data)}))}),[]),Object(j.jsx)("div",{className:"category-container",children:n.map((function(e,t){return Object(j.jsx)(h,{onClick:function(){},data:Object.keys(e).map((function(t){return"string"===typeof e[t]?{label:t,value:e[t]}:{}})).filter((function(e){return!!e.label}))},t)}))})}),x=function(e){var t=e.isLoggedIn||sessionStorage.getItem("username")&&""!==sessionStorage.getItem("username");return Object(j.jsx)(c.Fragment,{children:t?e.children:Object(j.jsx)(u.a,{to:"/login"})})},v=(s(66),{color:"white",fontSize:"20px"}),g=function(e){var t=e.username,s=e.type;return Object(j.jsxs)("div",{className:"header",children:[Object(j.jsxs)("div",{className:"login-style",children:["Logged In as: ",Object(j.jsx)("span",{style:v,children:t.toUpperCase()})]}),Object(j.jsxs)("div",{className:"role-style",children:["Role : ",Object(j.jsx)("span",{style:v,children:s.toUpperCase()})]})]})},y=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),s=t[0],n=t[1],a=Object(c.useState)(""),r=Object(i.a)(a,2),l=r[0],d=r[1],p=Object(c.useState)(!1),O=Object(i.a)(p,2),h=O[0],v=O[1];return Object(c.useEffect)((function(){var e=sessionStorage.getItem("type"),t=sessionStorage.getItem("username");t&&e&&""!==t&&""!==e&&(n(e),d(t),v(!0))}),[]),Object(j.jsxs)("div",{className:"app",children:[h?Object(j.jsx)(g,{username:l,type:s}):null,Object(j.jsxs)(u.d,{children:[Object(j.jsx)(u.a,{exact:!0,from:"/",to:"/login"}),Object(j.jsx)(u.b,{path:"/login",render:function(e){return Object(j.jsx)(b,Object(o.a)(Object(o.a)({},e),{},{setUserType:n,setUsername:d,isLoggedIn:v}))}}),Object(j.jsx)(u.b,{exact:!0,path:"/categories",render:function(e){return Object(j.jsx)(x,Object(o.a)(Object(o.a)({},e),{},{isLoggedIn:""!==s,children:Object(j.jsx)(m,Object(o.a)(Object(o.a)({},e),{},{userType:s}))}))}}),Object(j.jsx)(u.b,{path:"/categories/:id",render:function(e){return Object(j.jsx)(x,Object(o.a)(Object(o.a)({},e),{},{setUserType:n,isLoggedIn:""!==s,children:Object(j.jsx)(f,Object(o.a)({},e))}))}})]})]})};a.a.render(Object(j.jsx)(r.a,{basename:"/dashboard",children:Object(j.jsx)(y,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.fdf1940a.chunk.js.map