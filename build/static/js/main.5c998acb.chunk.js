(this["webpackJsonpclient-side"]=this["webpackJsonpclient-side"]||[]).push([[0],{123:function(e,t,i){},146:function(e,t,i){},149:function(e,t,i){"use strict";i.r(t);var n=i(1),a=i.n(n),c=i(44),s=i.n(c),r=(i(123),i(74),i(0));var o=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{className:"home-heading-1",children:"IETE RECRUITMENT"}),Object(r.jsx)("h1",{className:"home-heading-2",children:" PORTAL  "})]})},l=i(217),d=i(16);var j=function(){return Object(r.jsx)("div",{className:"home-registration",children:Object(r.jsxs)("div",{className:"registration-innerdiv",children:[Object(r.jsx)(d.b,{to:"/signup",style:{textDecoration:"none"},children:Object(r.jsx)(l.a,{className:"register-here",variant:"text",size:"large",children:"REGISTER HERE"})}),Object(r.jsx)("br",{}),Object(r.jsx)("h2",{children:"OR"}),Object(r.jsx)(d.b,{to:"/login",style:{textDecoration:"none"},children:Object(r.jsx)(l.a,{className:"register-button",variant:"outlined",size:"large",children:"Already Registered"})})]})})},u=i(14),b=i(4),m=i(99),h=i.n(m),p=(i(144),i(145),i.p+"static/media/4804443.6b9a3332.jpg"),x=(i(92),i(226)),O=i(219),g=i(227),f=i(229),v=i(204),y=i(228);function S(){return Object(r.jsxs)(x.a,{position:"alternate",className:"Timeline",children:[Object(r.jsxs)(O.a,{children:[Object(r.jsxs)(g.a,{children:[Object(r.jsx)(y.a,{className:"TimelineDot"}),Object(r.jsx)(f.a,{className:"TimelineConnector"})]}),Object(r.jsx)(v.a,{children:"Round 1 "})]}),Object(r.jsxs)(O.a,{children:[Object(r.jsxs)(g.a,{children:[Object(r.jsx)(y.a,{className:"TimelineDot"}),Object(r.jsx)(f.a,{className:"TimelineConnector"})]}),Object(r.jsx)(v.a,{children:"Round 2"})]}),Object(r.jsxs)(O.a,{children:[Object(r.jsx)(g.a,{children:Object(r.jsx)(y.a,{className:"TimelineDot"})}),Object(r.jsx)(v.a,{children:"Round 3"})]})]})}var N=function(){var e,t=(e={dots:!0,infinite:!0,speed:500,slidesToShow:3,slidesToScroll:1,cssEase:"linear",autoplay:!0},Object(b.a)(e,"speed",1e3),Object(b.a)(e,"autoplaySpeed",3e3),Object(b.a)(e,"pauseOnHover",!0),Object(b.a)(e,"responsive",[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:780,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]),e);return Object(r.jsxs)("div",{className:"Carousel-outer-div",children:[Object(r.jsx)("h1",{className:"carousel-heading",children:"Domains"}),Object(r.jsxs)(h.a,Object(u.a)(Object(u.a)({},t),{},{children:[Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("div",{className:"circle-card",children:Object(r.jsx)("img",{src:p,className:"card-img",alt:"tech cse"})}),Object(r.jsx)("h3",{className:"Domain-name",children:"Tech Cse"})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("img",{src:p,className:"card-img",alt:"tech cse"}),Object(r.jsx)("h3",{className:"Domain-name",children:"Tech Cse"})]}),Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("img",{src:p,className:"card-img",alt:"tech cse"}),Object(r.jsx)("h3",{className:"Domain-name",children:"Tech Cse"})]}),Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("img",{src:p,className:"card-img",alt:"tech cse"}),Object(r.jsx)("h3",{className:"Domain-name",children:"Tech Cse"})]}),Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("img",{src:p,className:"card-img",alt:"tech cse"}),Object(r.jsx)("h3",{className:"Domain-name",children:"Tech Cse"})]}),Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("img",{src:p,className:"card-img",alt:"tech cse"}),Object(r.jsx)("h3",{className:"Domain-name",children:"Tech Cse"})]}),Object(r.jsx)("div",{className:"card",children:Object(r.jsx)("img",{src:p,className:"card-img",alt:"tech cse"})}),Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("img",{className:"card-img",src:p,alt:"tech cse"}),Object(r.jsx)("h3",{className:"Domain-name",children:"Tech Cse"})]}),Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("img",{className:"card-img",src:p,alt:"tech cse"}),Object(r.jsx)("h3",{className:"Domain-name",children:"Tech Cse"})]})]})),Object(r.jsx)("h1",{className:"timeline-heading",children:"Timeline"}),Object(r.jsx)(S,{})]})},w=i(15),k=i(101),C=i.n(k),T=function(){return Object(r.jsxs)("div",{className:"loading",style:{width:"10%"},children:[Object(r.jsx)("h1",{style:{color:"white"},children:"Loading"}),Object(r.jsx)(C.a,{type:"bubbles",color:"#009254",height:300,width:100})]})},q=function(){var e="Bearer "+localStorage.getItem("token"),t=fetch("https://recportal-iete.herokuapp.com/auth/user/",{method:"POST",headers:{Authorization:e}}).json();console.log(t)};var A=Object(w.i)((function(){return Object(r.jsxs)("div",{className:"home",children:[Object(r.jsx)(o,{}),localStorage.getItem("token")?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(l.a,{href:"/info",className:"take-test-button",variant:"outlined",size:"large",onClick:q,children:"Take Test"}),Object(r.jsx)(N,{})]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(j,{}),Object(r.jsx)(N,{})]}),Object(r.jsx)("loader",{})]})}));i(146);var E=function(){return Object(r.jsx)("div",{className:"domain-page",children:Object(r.jsxs)("div",{className:"domain-outer-div",children:[Object(r.jsx)("h1",{className:"domain-main-heading",children:" Domains"}),Object(r.jsxs)("div",{className:"domain-card",children:[Object(r.jsx)("div",{className:"circle-card-left",children:Object(r.jsx)("img",{src:p,className:"circle-card-left-image"})}),Object(r.jsxs)("div",{className:"domain-description-right",children:[Object(r.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, laborum ratione, ut illo debitis saepe excepturi et nostrum ducimus distinctio officiis? Deleniti, culpa nobis error quae illo corrupti id porro?"}),Object(r.jsx)(l.a,{className:"Button",variant:"contained",color:"success",onClick:function(){localStorage.getItem("token")&&localStorage.setItem("domain",1)},href:"/ready",children:"Tech CSE"})]})]}),Object(r.jsxs)("div",{className:"domain-card",children:[Object(r.jsxs)("div",{className:"domain-description-right",children:[Object(r.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, laborum ratione, ut illo debitis saepe excepturi et nostrum ducimus distinctio officiis? Deleniti, culpa nobis error quae illo corrupti id porro?"}),Object(r.jsx)(l.a,{className:"Button",variant:"contained",onClick:function(){localStorage.getItem("token")&&localStorage.setItem("domain",2)},href:"/ready",children:"Tech CSE"})]}),Object(r.jsx)("div",{className:"circle-card-left",children:Object(r.jsx)("img",{src:p,className:"circle-card-left-image"})})]}),Object(r.jsxs)("div",{className:"domain-card",children:[Object(r.jsx)("div",{className:"circle-card-left",children:Object(r.jsx)("img",{src:p,className:"circle-card-left-image"})}),Object(r.jsxs)("div",{className:"domain-description-right",children:[Object(r.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, laborum ratione, ut illo debitis saepe excepturi et nostrum ducimus distinctio officiis? Deleniti, culpa nobis error quae illo corrupti id porro?"}),Object(r.jsx)(l.a,{className:"Button",variant:"contained",onClick:function(){localStorage.getItem("token")&&localStorage.setItem("domain",3)},href:"/ready",children:"Tech CSE"})]})]}),Object(r.jsxs)("div",{className:"domain-card",children:[Object(r.jsxs)("div",{className:"domain-description-right",children:[Object(r.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, laborum ratione, ut illo debitis saepe excepturi et nostrum ducimus distinctio officiis? Deleniti, culpa nobis error quae illo corrupti id porro?"}),Object(r.jsx)(l.a,{className:"Button",variant:"contained",onClick:function(){localStorage.getItem("token")&&localStorage.setItem("domain",4)},href:"/ready",children:"Tech CSE"})]}),Object(r.jsx)("div",{className:"circle-card-left",children:Object(r.jsx)("img",{src:p,className:"circle-card-left-image"})})]}),Object(r.jsxs)("div",{className:"domain-card",children:[Object(r.jsx)("div",{className:"circle-card-left",children:Object(r.jsx)("img",{src:p,className:"circle-card-left-image"})}),Object(r.jsxs)("div",{className:"domain-description-right",children:[Object(r.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, laborum ratione, ut illo debitis saepe excepturi et nostrum ducimus distinctio officiis? Deleniti, culpa nobis error quae illo corrupti id porro?"}),Object(r.jsx)(l.a,{className:"Button",variant:"contained",onClick:function(){localStorage.getItem("token")&&localStorage.setItem("domain",5)},href:"/ready",children:"Tech CSE"})]})]}),Object(r.jsxs)("div",{className:"domain-card",children:[Object(r.jsxs)("div",{className:"domain-description-right",children:[Object(r.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, laborum ratione, ut illo debitis saepe excepturi et nostrum ducimus distinctio officiis? Deleniti, culpa nobis error quae illo corrupti id porro?"}),Object(r.jsx)(l.a,{className:"Button",variant:"contained",onClick:function(){localStorage.getItem("token")&&localStorage.setItem("domain",6)},href:"/ready",children:"Tech CSE"})]}),Object(r.jsx)("div",{className:"circle-card-left",children:Object(r.jsx)("img",{src:p,className:"circle-card-left-image"})})]})]})})};var I=function(){return Object(r.jsx)("div",{children:Object(r.jsx)("h1",{className:"quiz-heading",children:"QUIZ INSTRUCTION"})})};var U=function(){return Object(r.jsxs)("div",{id:"quiz-instruction-time",children:[Object(r.jsx)("h2",{className:"quiz-instruction-alignleft",children:"INSTRUCTIONS"}),Object(r.jsx)("h2",{className:"quiz-instruction-alignright",children:"TIME : 45.00 MIN"})]})};var D=function(){return Object(r.jsxs)("div",{children:[Object(r.jsxs)("ul",{className:"quiz-instructions-list",children:[Object(r.jsx)("li",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima autem similique expedita nemo veritatis corporis architecto tenetur, sint molestiae repellat illum rem, totam ducimus aliquid quaerat cupiditate sit ullam in."}),Object(r.jsx)("li",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima autem similique expedita nemo veritatis corporis architecto tenetur, sint molestiae repellat illum rem, totam ducimus aliquid quaerat cupiditate sit ullam in."}),Object(r.jsx)("li",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima autem similique expedita nemo veritatis corporis architecto tenetur, sint molestiae repellat illum rem, totam ducimus aliquid quaerat cupiditate sit ullam in."}),Object(r.jsx)("li",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima autem similique expedita nemo veritatis corporis architecto tenetur, sint molestiae repellat illum rem, totam ducimus aliquid quaerat cupiditate sit ullam in."}),Object(r.jsx)("li",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima autem similique expedita nemo veritatis corporis architecto tenetur, sint molestiae repellat illum rem, totam ducimus aliquid quaerat cupiditate sit ullam in."})]}),Object(r.jsx)(l.a,{className:"start-quiz-button",variant:"contained",size:"large",children:"Start Quiz"})]})};var R=function(){return Object(r.jsxs)("div",{style:{width:"100%"},children:[Object(r.jsx)(I,{}),Object(r.jsx)(U,{}),Object(r.jsx)(D,{})]})},M=i(64),B=i(65),F=i(105),P=i(104),z=function(e){Object(F.a)(i,e);var t=Object(P.a)(i);function i(){return Object(M.a)(this,i),t.apply(this,arguments)}return Object(B.a)(i,[{key:"render",value:function(){return Object(r.jsx)("div",{children:Object(r.jsx)("h1",{children:"Wait Page"})})}}]),i}(n.Component),L=i(25),W=i.n(L),Q=i(38),J=i(8),H=function(e){var t=e.values,i=e.handleChange,n=e.handleSubmit,c=(e.errors,a.a.useState({open:!1,vertical:"top",horizontal:"center"})),s=Object(J.a)(c,2),o=s[0];s[1],o.vertical,o.horizontal,o.open;return Object(r.jsx)("div",{class:"container",children:Object(r.jsx)("div",{class:"col-left",children:Object(r.jsxs)("div",{class:"login-form",children:[Object(r.jsx)("h2",{children:"Register Here"}),Object(r.jsxs)("form",{onSubmit:n,children:[Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{className:"input-label",children:"Name"}),Object(r.jsx)("input",{id:"name",type:"text",placeholder:"name",required:!0,onChange:i,value:t?t.name:"",name:"name"}),Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{className:"input-label",children:"Email"}),Object(r.jsx)("input",{id:"email",name:"email",type:"email",placeholder:"email",required:!0,onChange:i,value:t?t.email:""})]})]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{className:"input-label",children:"Password"}),Object(r.jsx)("input",{id:"password",name:"password",type:"password",placeholder:"Password",required:!0,onChange:i,value:t?t.password:""})]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{className:"input-label",children:"Registration number"}),Object(r.jsx)("input",{id:"reg_no",name:"reg_no",type:"text",placeholder:"Registration number",required:!0,onChange:i,value:t?t.reg_no:""})]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{className:"input-label",children:"Phone Number"}),Object(r.jsx)("input",{id:"phone",name:"phone",type:"text",placeholder:"Number",required:!0,onChange:i,value:t?t.phone:""})]}),Object(r.jsx)("p",{children:Object(r.jsx)("input",{class:"btn",type:"submit",value:"Sign In"})}),Object(r.jsxs)("span",{className:"register-login",children:["Already Registered? ",Object(r.jsx)(d.b,{to:"/login",children:"Login"})]})]})]})})})};i(93);var Y=i(213),Z=i(214),V=function(){var e=Object(n.useState)({name:"",email:"",password:"",reg_no:"",phone:""}),t=Object(J.a)(e,2),i=t[0],c=t[1],s=a.a.useState({open:!1,vertical:"top",horizontal:"center"}),o=Object(J.a)(s,2),l=o[0],d=o[1],j=l.vertical,m=l.horizontal,h=l.open,p=function(){d(Object(u.a)(Object(u.a)({},l),{},{open:!1}))},x=Object(n.useState)(null),O=Object(J.a)(x,2),g=O[0],f=O[1],v=Object(n.useState)(!1),y=Object(J.a)(v,2),S=y[0],N=y[1],k=Object(n.useState)(!1),C=Object(J.a)(k,2),q=C[0],A=C[1],E=function(){var e=Object(Q.a)(W.a.mark((function e(t){var n,a;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),A(!0),d(Object(u.a)(Object(u.a)({},l),{},{open:!0})),e.next=5,fetch("https://recportal-iete.herokuapp.com/auth/register/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});case 5:return n=e.sent,e.next=8,n.json();case 8:a=e.sent,console.log(a),console.log(n),console.log(n.status),404===n.status?(A(!1),f(a.message)):403===n.status?(A(!1),f(a.errors)):200===n.status&&(localStorage.setItem("email",i.email),N(!0));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return S?Object(r.jsx)(w.a,{to:"/otp_login"}):Object(r.jsxs)("div",{className:"wrapper",children:[g&&Object(r.jsx)(Z.a,{anchorOrigin:{vertical:j,horizontal:m},open:h,onClose:p,autoHideDuration:5e3,children:Object(r.jsx)(Y.a,{severity:"error",sx:{width:"100%"},variant:"filled",onClose:p,children:g})},j+m),q?Object(r.jsx)(T,{}):Object(r.jsx)(H,{values:i,handleSubmit:E,handleChange:function(e){var t=e.target,n=t.name,a=t.value;c(Object(u.a)(Object(u.a)({},i),{},Object(b.a)({},n,a)))}})]})},K=i(210),X=i(218),G=i(221),_=i(215),$=i(222),ee=i.p+"static/media/home-green.7438f9c4.svg",te=i.p+"static/media/home-grey.73d22b13.svg",ie=i.p+"static/media/QA-green.6f1d68e4.svg",ne=i.p+"static/media/QA-grey.61799030.svg",ae=(i.p,i.p+"static/media/todo-grey.e56e07eb.svg"),ce=i.p+"static/media/wait-grey.446608e5.svg",se=i.p+"static/media/wait-green.9b490381.svg",re=i.p+"static/media/info-grey.77932f65.svg",oe=i.p+"static/media/info_green.85cc662d.svg",le=Object(K.a)((function(){return{drawer:{width:"150px","&$selected":{backgroundColor:"red","&:hover":{backgroundColor:"yellow"}}},selected:{}}})),de=Object(w.i)((function(e){var t=e.history,i=Object(w.g)().pathname,a=Object(n.useState)(!1),c=Object(J.a)(a,2),s=(c[0],c[1],le()),o=[{text:"Logo",icon:Object(r.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAvCAYAAABzJ5OsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAZRSURBVHgB7Zl5bFVFFMbPY5VFwTWsUhQQQRE3QFEsQqIRiYJbYhSCQgiaoKJGSQQS5A8VkcQYQUQBATVRARU0KhajEqOSuICK4kJFWZSltRaoUp6/jzkvvTza+pbbhCY9yZfzOvfMzLlnZr5z5tasQRrk6JJkMnmF1UfB8V5gFbjE6pPgcAIsB93BHNDK6ovg7FhwGZgHBoHbrQ6kkcUsOFqA6gIuBePBQNDB22OVhMUsOPkw6kfwOTgb7PF5ChOJxGSLUWKNPI5fg9oIOuPot+iW6HfRvcBXPL/KYpTYnMex41EXgmPBHLXh+AJ//BxoC4Zid5zFJHFGfgxYDUpxelf0AX//hdoOPgRjLSaJxXk/jM1BXxx9qTob2legeoJK7M+0GCSuyD8GfgMrcOykVCO/L0izewMUg0kWg+TtPA7eglroY5WASbR18dUoQvd2u76ojhZo9OU4uD8v53GgA0pboAd4DagU2GCBHl+0cHjnKuOiWwNl2sXgPNA1ukq5SF48z+TTUGvcqS8tMEoZGAoWREx1mJcDRf8YsM/1EM7CA5aj5Bx5HB+A2mYh+bxtIaMqopVgepr5E1bldBvwM+gHfsincMvJeSZsjBrnzjzvyUmruAzMAJ3TuigHPMRLfuZzng4W+e+R9G9tOUhO24bJ7kYpg7azwN2KukoCvcwXFg6uVqMCnGAhyieDIeAbC4dWL9QJbAIDeLFZlqU0sSzFWaQFOIcJZ/L39f4ickr7/2awkmdlkT7NvV0UeSPYCkSjWonhYJ8OP322WhaSdeSZ5BELRdf33tTDnT8frMWBzbX07YoaiM0Sp0qx0m7QEoygfZzVlfNMeIOFTCq+nguutkCNpWAv+DMybtKqxo/+7gb+trBt+ls4vDoDKima8AKvWoaS8YH125CiK+6eb2HZt/rkvZn0D7RWRVl0P3jWwp7/F8x2rXbR6TDstc0+AoXgHQvnZ0A2hVs2bDPBJ1GRpeTSFOwEV4JmbiMWUmHWDKgAa2+hwhQDTfR27fNynByJ3mEh4n0s0O6b4C7LUDJy3g+pHDuLyZdaSEJiD0Vddc2WiHkL7Jd67a6tcsDbx3i7+F5nRtyv7fSev8R3Fkrq3dj0twwk08grkx6KjO6mFvatojQVFFigyJTIWWXTjWlj6FC/bmEraWuILqcTDNldZGHbqMTQAb7O4nAeZ8f4oIridtcrwYngfjdLrx4/cNuorAdFOKton+ptE7zyXGjhwCsniIY/pv1Oy8d5BlCmLLDABi9YiMguHHjfQoZMMcitrsUiWgUdxie9rczt7lM7Yxaib/JnYq6ZoNydPs1C0tOqtM2rcKPzVHAtGKwUDmb4J41xySNlcIZj9qum7x2gEbgHDNELguFgZm1jJWqZRIdGNx+lcEVxBPjJwmXiE2+PihLOIFZlQy1jKrJFFiKb3lfPRMciA52Diy0w2y+MWWSZigov8DQY4RcL/d0NtAHzkzVLKZgM2qaNpy0wBZTU0neR257ruh0YDZ5KhkLwCEnU4Py9qHUWPmEsibRrX07zP8XtBy2wS1P/nRpTCUmro/JYFWNvt2/i9qLLCrc9GJn6UebbE5lvtAWWUxKc/b/OJwOnDwMt6PC41SA6CxaWX1lWB2+/a0VdY4g5NlugSH23Eduo8lSBVuwvpPqoknnm1jLPg6h/wLL0uqk652f5JCpt+9BhXg2DyknRnji7kU+giKrIUpRVFh+wqjxQ7LbbGHMv/U8xjz5SUs34omIVatrvYj2VFLfV6DwdFBXVLtpjr4D2dPjaMhCxiIVDrNp+nf/Wltjl88j5QeAZxvw9g/HUR9fE1fxWaaLtc1jhlogYi1MnWiis9HF0t2UvWoFUBZlMDW35i66OYrpCMJUX0Iod5rwKKd1Bd9rRK1rNNTi/2OpSkuH2lKltJ8tB4vzQ2jEZ/qmQukxfnkV3ZdSelqXkcg2cYuEGJYYQC4gBRIe6fOjcpD6qtmJ5R2E/it/6Lv+WhWpU21KXGp2pXy0UaWKqYuzHWxaS9QXcAmvoUGtbrAKb9BUYJ/XRSfSmGr+Lv5xEtXqpOyvm+tRCKaAkthboUrLe+2UluUReW00XkUOsguyIPDsDVaFkwu/u6E3eXmAhiYk6FWXlgsY83+L1jjLxTv4utwZpkAapUf4DJH8WECtXMvQAAAAASUVORK5CYII="}),onClick:function(){return t.push("/")}},Object(u.a)({text:"Home",icon:Object(r.jsx)("img",{src:te}),onClick:function(){t.push("/")}},"/"===i&&{icon:Object(r.jsx)("img",{src:ee})}),Object(u.a)({text:"info",icon:Object(r.jsx)("img",{src:re}),onClick:function(){return t.push("/info")}},"/info"===i&&{icon:Object(r.jsx)("img",{src:oe})}),Object(u.a)({text:"Dashboard",icon:Object(r.jsx)("img",{src:ce}),onClick:function(){return t.push("/dashboard")}},"/dashboard"===i&&{icon:Object(r.jsx)("img",{src:se})}),Object(u.a)({text:"QA",icon:Object(r.jsx)("img",{src:ne}),onClick:function(){return t.push("/QA")}},"/QA"===i&&{icon:Object(r.jsx)("img",{src:ie})}),{text:"logout",icon:Object(r.jsx)("img",{src:ae}),onClick:function(){var e=Object(Q.a)(W.a.mark((function e(i){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.push("/"),localStorage.clear();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}];return Object(r.jsx)(X.a,{variant:"permanent",className:s.drawer,id:"Drawer",PaperProps:{sx:{backgroundColor:"rgba(77, 77, 77, 0.2)"}},children:Object(r.jsx)(G.a,{class:!0,children:o.map((function(e,t){var i=e.text,n=e.icon,a=e.onClick;return Object(r.jsxs)(_.a,{button:!0,onClick:a,children:[0===t?Object(r.jsx)($.a,{style:{margin:"20px 0 100px 0"},children:n}):null,0!==t?Object(r.jsx)($.a,{style:{marginBottom:"25px"},children:n}):null]},i)}))})})})),je=function(e){var t,i=e.values,n=e.handleChange,c=e.handleSubmit,s=(e.errors,a.a.useState({open:!1,vertical:"top",horizontal:"center"})),o=Object(J.a)(s,2),l=o[0],j=o[1];l.vertical,l.horizontal,l.open;return Object(r.jsx)("div",{class:"container",children:Object(r.jsx)("div",{class:"col-left",children:Object(r.jsxs)("div",{class:"login-form",children:[Object(r.jsx)("h2",{children:"Login"}),Object(r.jsxs)("form",{onSubmit:c,children:[Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{className:"input-label",children:"Email"}),Object(r.jsx)("input",{id:"email",name:"email",type:"email",placeholder:"email",required:!0,onChange:n,value:i?i.email:""})]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{className:"input-label",children:"Password"}),Object(r.jsx)("input",{id:"password",name:"password",type:"password",placeholder:"Password",required:!0,onChange:n,value:i?i.password:""})]}),Object(r.jsx)("p",{children:Object(r.jsx)("input",{class:"btn",type:"submit",value:"Login",onClick:(t={vertical:"top",horizontal:"center"},function(){j(Object(u.a)({open:!0},t))})})}),Object(r.jsxs)("span",{className:"register-login",children:["Not Registered? ",Object(r.jsx)(d.b,{to:"/signup",children:"Signup"})]})]})]})})})},ue=function(){var e=Object(n.useState)({email:"",password:""}),t=Object(J.a)(e,2),i=t[0],c=t[1],s=a.a.useState({open:!1,vertical:"top",horizontal:"center"}),o=Object(J.a)(s,2),l=o[0],d=o[1],j=l.vertical,m=l.horizontal,h=l.open,p=function(){d(Object(u.a)(Object(u.a)({},l),{},{open:!1}))},x=Object(n.useState)({}),O=Object(J.a)(x,2),g=O[0],f=(O[1],Object(n.useState)(!1)),v=Object(J.a)(f,2),y=(v[0],v[1]),S=Object(n.useState)(null),N=Object(J.a)(S,2),k=N[0],C=N[1],q=Object(n.useState)(!1),A=Object(J.a)(q,2),E=A[0],I=A[1],U=function(){var e=Object(Q.a)(W.a.mark((function e(t){var n,a;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),I(!0),d(Object(u.a)(Object(u.a)({},l),{},{open:!0})),console.log(i),e.next=6,fetch("https://recportal-iete.herokuapp.com/auth/login/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});case 6:return n=e.sent,e.next=9,n.json();case 9:a=e.sent,console.log(n),console.log(a),200===n.status?localStorage.setItem("token",JSON.stringify(a)):401===n.status&&(I(!1),C(a.detail)),localStorage.getItem("token")?y(!0):y(!1);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return localStorage.getItem("token")?Object(r.jsx)(w.a,{to:"/"}):Object(r.jsxs)("div",{className:"wrapper",children:[k&&Object(r.jsx)(Z.a,{anchorOrigin:{vertical:j,horizontal:m},open:h,onClose:p,autoHideDuration:5e3,TransitionComponent:l.Transition,children:Object(r.jsx)(Y.a,{severity:"error",sx:{width:"100%"},variant:"filled",onClose:p,children:k})}),E?Object(r.jsx)(T,{}):Object(r.jsx)(je,{values:i,handleSubmit:U,handleChange:function(e){var t=e.target,n=t.name,a=t.value;c(Object(u.a)(Object(u.a)({},i),{},Object(b.a)({},n,a)))},errors:g})]})},be=function(e){var t=e.values,i=e.handleChange,n=e.handleSubmit;e.errors;return Object(r.jsx)("div",{class:"container",children:Object(r.jsx)("div",{class:"col-left",children:Object(r.jsxs)("div",{class:"login-form",children:[Object(r.jsx)("h2",{children:"Verify Email-ID"}),Object(r.jsx)("p",{children:"OTP sent to your email-id.Check in spam if you didnt recieve "}),Object(r.jsxs)("form",{onSubmit:n,children:[Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{className:"input-label",children:"Email"}),Object(r.jsx)("input",{id:"email",name:"email",type:"email",placeholder:"email",required:!0,onChange:i,value:t?t.email:""})]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{className:"input-label",children:"OTP"}),Object(r.jsx)("input",{id:"otp",name:"otp",type:"password",placeholder:"OTP",required:!0,onChange:i,value:t?t.otp:""})]}),Object(r.jsx)("p",{children:Object(r.jsx)("input",{class:"btn",type:"submit",value:"Verify"})})]})]})})})},me=function(){var e=Object(n.useState)({email:localStorage.getItem("email"),otp:""}),t=Object(J.a)(e,2),i=t[0],c=t[1],s=Object(n.useState)({}),o=Object(J.a)(s,2),l=o[0],d=(o[1],Object(n.useState)(!1)),j=Object(J.a)(d,2),m=j[0],h=j[1],p=Object(n.useState)(null),x=Object(J.a)(p,2),O=x[0],g=x[1],f=Object(n.useState)(!1),v=Object(J.a)(f,2),y=v[0],S=v[1],N=a.a.useState({open:!1,vertical:"top",horizontal:"center"}),k=Object(J.a)(N,2),C=k[0],q=k[1],A=C.vertical,E=C.horizontal,I=C.open,U=function(){q(Object(u.a)(Object(u.a)({},C),{},{open:!1}))},D=function(){var e=Object(Q.a)(W.a.mark((function e(t){var n,a;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),S(!0),q(Object(u.a)(Object(u.a)({},C),{},{open:!0})),e.next=5,fetch("https://recportal-iete.herokuapp.com/auth/verifyotp/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});case 5:return n=e.sent,e.next=8,n.json();case 8:a=e.sent,console.log(a),403===a.status&&(S(!1),g(a.message)),200===a.status&&h(!0);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return m?Object(r.jsx)(w.a,{to:"/login"}):Object(r.jsxs)("div",{className:"wrapper",children:[O&&Object(r.jsx)(Z.a,{anchorOrigin:{vertical:A,horizontal:E},open:I,onClose:U,autoHideDuration:5e3,TransitionComponent:C.Transition,children:Object(r.jsx)(Y.a,{severity:"error",sx:{width:"100%"},variant:"filled",onClose:U,children:O})}),y?Object(r.jsx)(T,{}):Object(r.jsx)(be,{values:i,handleSubmit:D,handleChange:function(e){var t=e.target,n=t.name,a=t.value;c(Object(u.a)(Object(u.a)({},i),{},Object(b.a)({},n,a)))},errors:l})]})},he=Object(K.a)({container:{display:"flex"}}),pe=function(){var e=he();return Object(r.jsx)("div",{className:e.container,children:Object(r.jsxs)(d.a,{children:[Object(r.jsx)(de,{}),Object(r.jsxs)(w.d,{children:[Object(r.jsx)(w.b,{path:"/",exact:!0,component:A}),Object(r.jsx)(w.b,{path:"/signup",exact:!0,component:V}),Object(r.jsx)(w.b,{path:"/info",component:E}),Object(r.jsx)(w.b,{path:"/todo",component:R}),Object(r.jsx)(w.b,{path:"/wait",component:z}),Object(r.jsx)(w.b,{path:"/login",component:ue}),Object(r.jsx)(w.b,{path:"/otp_login",component:me})]})]})})},xe=i(223),Oe=i(157),ge=i(224),fe=i(225),ve=i(103),ye=i(23),Se=Object(ve.a)({status:{danger:"#e53e3e"},palette:{primary:{main:"#0971f1",darker:"#053e85"},greenUsed:{main:"#009254"},blackOptions:{main:"#4D4D4D"}},fontFamily:["Poppins","Monument Extended"].join(",")}),Ne=function(){return Object(r.jsx)(ye.c,{theme:Se,children:Object(r.jsxs)(xe.a,{maxWidth:"xxl",sx:{background:"black",padding:"5% 3% 2% 3%",width:"100%"},children:[Object(r.jsx)(Oe.a,{variant:"h3",align:"center",gutterBottom:!0,color:"white",sx:{fontFamily:"Monument Extended",margin:"0% 0% 5% 0%"},children:"QUIZ INSTRUCTIONS"}),Object(r.jsxs)(ge.a,{sx:{display:"flex",justifyContent:"space-between",color:"white",margin:"2% 5%"},children:[Object(r.jsx)(Oe.a,{variant:"h6",gutterBottom:!0,sx:{fontFamily:"Monument Extended"},children:"Instructions"}),Object(r.jsx)(Oe.a,{variant:"h6",gutterBottom:!0,sx:{fontFamily:"Monument Extended"},children:"TIME: 45.00 MIN"})]}),Object(r.jsxs)(G.a,{sx:{width:"75%",mx:"12.5%",color:"white",fontSize:20},children:[Object(r.jsx)(fe.a,{sx:{padding:"2%"},children:Object(r.jsx)(Oe.a,{sx:{fontFamily:"Poppins"},children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus provident, temporibus commodi id quam nobis. Sit ab impedit voluptatibus, laboriosam rerum neque et nulla eveniet!"})}),Object(r.jsx)(fe.a,{sx:{padding:"2%"},children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus provident, temporibus commodi id quam nobis. Sit ab impedit voluptatibus, laboriosam rerum neque et nulla eveniet!"}),Object(r.jsx)(fe.a,{sx:{padding:"2%"},children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus provident, temporibus commodi id quam nobis. Sit ab impedit voluptatibus, laboriosam rerum neque et nulla eveniet!"}),Object(r.jsx)(fe.a,{sx:{padding:"2%"},children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus provident, temporibus commodi id quam nobis. Sit ab impedit voluptatibus, laboriosam rerum neque et nulla eveniet!"})]}),Object(r.jsx)(d.b,{to:"/quiz/ques/1",children:Object(r.jsx)(l.a,{variant:"contained",underline:"none",sx:{textDecoration:"none",background:"#009254",padding:"1%",margin:"5% 42% 0% 42%",fontFamily:"Monument Extended"},children:"START QUIZ"})})]})})},we=i(19),ke=i(78),Ce=i(209),Te=Object(ve.a)({status:{danger:"#e53e3e"},palette:{primary:{main:"#0971f1",darker:"#053e85"},greenUsed:{main:"#009254"},blackOptions:{main:"#4D4D4D"},whiteUsed:{main:"#ffffff"}},typography:{fontFamily:["Poppins","Monument Extended"].join(",")}}),qe="";try{qe="Bearer "+JSON.parse(localStorage.getItem("token")).jwt}catch(ze){console.log(ze)}var Ae=function(){var e=Object(w.h)().ques_id,t=[],i=Object(n.useState)(t),a=Object(J.a)(i,2),c=a[0],s=a[1],o=Object(n.useState)(!0),j=Object(J.a)(o,2),u=j[0],b=j[1];Object(n.useEffect)(Object(Q.a)(W.a.mark((function e(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://recportal-iete.herokuapp.com/auth/q/",{method:"POST",headers:{Authorization:qe,"Content-Type":"application/json"},body:JSON.stringify({domain:1})}).then((function(e){return e.json()})).then((function(e){s(Object(we.a)(e.data))}));case 2:case"end":return e.stop()}}),e)}))),[]),Object(n.useEffect)((function(){b(!u)}),[e]);for(var m={},h=0;h<c.length;h++){var p=c[h];p.id==e&&(m=p)}0===m.ques_type?void 0===m.selected&&(m.selected="blank"):void 0===m.answer&&(m.answer="");var x="blackOptions",O=-1;0===m.ques_type&&(m.selected===m.options[0].option?O=0:m.selected===m.options[1].option?O=1:m.selected===m.options[2].option?O=2:m.selected===m.options[3].option&&(O=3));return 0==m.ques_type?Object(r.jsx)(ye.c,{theme:Te,children:Object(r.jsx)(xe.a,{sx:{width:"70%"},children:Object(r.jsxs)("div",{style:{background:"black"},children:[Object(r.jsx)(Oe.a,{fontFamily:"Monument Extended",sx:{color:"white",textAlign:"center",padding:"10% 0% 5% 0%",fontSize:"150%"},children:"TEST YOUR KNOWLEDGE"}),Object(r.jsx)(Oe.a,{variant:"h5",fontFamily:"Monument extended",color:"white",sx:{padding:"0% 2% 5% 2%"},children:" Section 1"}),Object(r.jsxs)(Oe.a,{fontFamily:"Poppins",variant:"h5",color:"#009254",sx:{display:"inline",margin:"5% 2%",padding:"2% 2%"},children:["Question: ",e," \xa0"]}),Object(r.jsx)(Oe.a,{fontFamily:"Poppins",variant:"h5",sx:{display:"inline",margin:"2% 0%",color:"white"},children:m.ques_main}),Object(r.jsxs)(ge.a,{sx:{display:"flex",justifyContent:"space-around",padding:"5% 0%"},children:[x=0===O?"greenUsed":"blackOptions",Object(r.jsx)(l.a,{variant:"contained",color:x,sx:{padding:"1% 4%",margin:"5% 8%",borderRadius:"10px",color:"white",width:"50%",borderColor:"green"},style:{boxShadow:"5px 5px 10px #009254"},onClick:function(){O=0,m.selected=m.options[0].option,b(!u)},children:m.options[0].option}),x=1===O?"greenUsed":"blackOptions",Object(r.jsx)(l.a,{variant:"contained",color:x,sx:{padding:"1% 4%",margin:"5% 8%",borderRadius:"10px",color:"white",width:"50%"},style:{boxShadow:"5px 5px 10px #009254"},onClick:function(){O=1,m.selected=m.options[1].option,b(!u)},children:m.options[1].option})]}),Object(r.jsxs)(ge.a,{sx:{display:"flex",justifyContent:"space-around"},children:[x=2===O?"greenUsed":"blackOptions",Object(r.jsx)(l.a,{variant:"contained",color:x,sx:{padding:"1% 4%",margin:"5% 8%",borderRadius:"10px",color:"white",width:"50%"},style:{boxShadow:"5px 5px 10px #009254"},onClick:function(){O=2,m.selected=m.options[2].option,b(!u)},children:m.options[2].option}),x=3===O?"greenUsed":"blackOptions",Object(r.jsx)(l.a,{variant:"contained",color:x,sx:{padding:"1% 4%",margin:"5% 8%",borderRadius:"10px",color:"white",width:"50%"},style:{boxShadow:"5px 5px 10px #009254"},onClick:function(){O=3,m.selected=m.options[3].option,b(!u)},children:m.options[3].option})]}),Object(r.jsxs)(ge.a,{sx:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",padding:"5% 0%",width:"100%"},children:[1!==m.id&&Object(r.jsx)(d.b,{to:"/quiz/ques/".concat(e-1),children:Object(r.jsx)(l.a,{variant:"text",color:"greenUsed",sx:{color:"white"},children:"PREVIOUS QUESTION"})}),Object(r.jsx)(l.a,{variant:"contained",color:"greenUsed",sx:{color:"white"},onClick:function(){},children:"SUBMIT"}),m.id!==t.length&&Object(r.jsx)(d.b,{to:"/quiz/ques/".concat(parseInt(e)+1),children:Object(r.jsx)(l.a,{variant:"contained",color:"greenUsed",sx:{color:"white"},children:"NEXT QUESTION"})})]})]})})}):1==m.ques_type?Object(r.jsx)(ye.c,{theme:Te,children:Object(r.jsxs)(xe.a,{sx:{width:"70%",background:"black"},children:[Object(r.jsxs)(ge.a,{children:[Object(r.jsx)(Oe.a,{fontFamily:"Monument Extended",sx:{color:"white",textAlign:"center",padding:"10% 5% 5% 5%",fontSize:"150%"},children:"TEST YOUR KNOWLEDGE"}),Object(r.jsx)(Oe.a,{variant:"h5",fontFamily:"Monument extended",color:"white",sx:{padding:"0% 2% 5% 2%"},children:" Section 2"}),Object(r.jsxs)(Oe.a,{fontFamily:"Poppins",variant:"h5",color:"#009254",sx:{display:"inline",margin:"5% 2%",padding:"2% 2%"},children:["Question: ",e," \xa0"]}),Object(r.jsx)(Oe.a,{fontFamily:"Poppins",variant:"h5",sx:{display:"inline",margin:"2% 0%",color:"white"},children:m.ques_main}),Object(r.jsx)(ge.a,{sx:{padding:"4%"},children:Object(r.jsx)(Ce.a,{color:"whiteUsed",variant:"outlined",multiline:!0,rows:10,fullWidth:!0,id:"longAnswer",placeholder:"Enter your answer here",sx:{background:"#212121",borderRadius:"10px",border:"none"},onFocus:function(e){console.log("In Handle Focus"),document.getElementById("longAnswer").value=m.answer},onBlur:function(e){console.log("Handle Change Called!"),m.answer=document.getElementById("longAnswer").value,console.log(m.answer)}})})]}),Object(r.jsxs)(ge.a,{sx:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",padding:"5% 0%"},children:[1!==m.id&&Object(r.jsx)(d.b,{to:"/quiz/ques/".concat(e-1),children:Object(r.jsx)(l.a,{variant:"text",color:"greenUsed",sx:{color:"white"},children:"PREVIOUS QUESTION"})}),Object(r.jsx)(l.a,{variant:"contained",color:"greenUsed",sx:{color:"white"},onClick:function(){},children:"SUBMIT"}),m.id!==t.length&&Object(r.jsx)(d.b,{to:"/quiz/ques/".concat(parseInt(e)+1),children:Object(r.jsx)(l.a,{variant:"contained",color:"greenUsed",sx:{color:"white"},children:"NEXT QUESTION"})})]})]})}):Object(r.jsx)(T,{})},Ee=Object(ve.a)({status:{danger:"#e53e3e"},palette:{primary:{main:"#0971f1",darker:"#053e85"},darkGrey:{main:"#303030"}},typography:{fontFamily:["Monument Extended"].join(",")}});try{"Bearer "+JSON.parse(localStorage.getItem("token")).jwt}catch(ze){console.log(ze)}console.log("QUESTIONS: ",undefined);var Ie=function(){return Object(r.jsx)(ye.c,{theme:Ee,children:Object(r.jsxs)(xe.a,{className:"container",maxWidth:"xl",sx:{height:"100%",background:"black",width:"100%",padding:"2%",margin:"2%"},children:[Object(r.jsx)(ge.a,{className:"heading",sx:{color:"white",padding:"5%"},children:Object(r.jsx)(Oe.a,{children:"QUESTIONS:"})}),Object(r.jsx)(ge.a,{className:"quesContainer",sx:{display:"flex",padding:"2%",flexWrap:"wrap",justifyContent:"space-around"},children:ke.map((function(e){return Object(r.jsx)(d.b,{to:"/quiz/ques/".concat(e.id),style:{margin:"10% 2%"},children:Object(r.jsx)(l.a,{color:"darkGrey",variant:"contained",sx:{width:"10%",height:"180%",borderRadius:"10px"},children:Object(r.jsxs)(Oe.a,{color:"white",children:[" ",e.id," "]})})},e.id)}))})]})})},Ue=function(){var e=a.a.useState(60),t=Object(J.a)(e,2),i=t[0],n=t[1];return a.a.useEffect((function(){i>0?setTimeout((function(){return n(i-1)}),1e3):n("TIME OVER!")})),Object(r.jsx)("div",{children:Object(r.jsx)("h1",{style:{color:"white",background:"#009254",textAlign:"center",margin:"10%",padding:"7%",borderRadius:"20px"},children:i})})},De=Object(K.a)({container:{display:"flex"}}),Re=function(e){De();if(localStorage.getItem("token"))return Object(r.jsx)(w.b,{path:e.path,component:e.component});window.location.replace("/")},Me=function(e){return Object(r.jsx)(xe.a,{maxWidth:"xl",style:{background:"black",height:"100vh",overflow:"auto"},children:Object(r.jsx)(d.a,{children:Object(r.jsxs)("div",{style:{display:"flex"},children:[Object(r.jsxs)("div",{style:{width:"25%",paddingTop:"5%"},children:[Object(r.jsx)(Ue,{}),Object(r.jsx)(Ie,{})]}),Object(r.jsx)(w.b,{path:"/quiz/ques/:ques_id",children:Object(r.jsx)(Ae,{})})]})})})},Be=function(e){return Object(r.jsx)(xe.a,{maxWidth:"xl",style:{background:"black",height:"100vh",overflow:"auto"},children:Object(r.jsx)(d.a,{children:Object(r.jsxs)(w.d,{children:[Object(r.jsx)(Re,{path:"/ready",exact:!0,component:Ne}),Object(r.jsx)(w.b,{path:"/quiz",component:Me})]})})})};var Fe=function(){return Object(r.jsx)(d.a,{children:Object(r.jsxs)(w.d,{children:[Object(r.jsx)(w.b,{path:"/ready",exact:!0,children:Object(r.jsx)(Be,{})}),Object(r.jsx)(w.b,{path:"/",children:Object(r.jsx)(pe,{})})]})})},Pe=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,230)).then((function(t){var i=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;i(e),n(e),a(e),c(e),s(e)}))};s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(Fe,{})}),document.getElementById("root")),Pe()},74:function(e,t,i){},78:function(e){e.exports=JSON.parse('[{"id":1,"ques_main":"Founder of Tesla?","ques_type":0,"options":[{"option":"Elon Musk"},{"option":"Mark Zuckerberg"},{"option":"Sundar Pichai"},{"option":"Bill Gates"}]},{"id":2,"ques_main":"CEO of Google?","ques_type":0,"options":[{"option":"Sundar Pichai"},{"option":"Bill Gates"},{"option":"Elon Mush"},{"option":"Mark Zuckerberg"}]},{"id":3,"ques_main":"RR Stands for?","ques_type":0,"options":[{"option":"Hyundai"},{"option":"Honda"},{"option":"Rolls Royce"},{"option":"BMW"}]},{"id":4,"ques_main":"Enter your full name?","ques_type":1}]')},92:function(e,t,i){},93:function(e,t,i){}},[[149,1,2]]]);
//# sourceMappingURL=main.5c998acb.chunk.js.map