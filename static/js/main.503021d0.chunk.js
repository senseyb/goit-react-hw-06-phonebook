(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={form:"ContactForm_form__1xzQf",input:"ContactForm_input__3imNa"}},16:function(t,e,n){t.exports={nameText:"ContactList_nameText__2KH0h"}},17:function(t,e,n){t.exports={text:"Filter_text__19GR4"}},30:function(t,e,n){"use strict";n.r(e);var c,r,a=n(0),o=n.n(a),i=n(7),u=n.n(i),s=n(2),l=n(9),j=n(4),b=n(5),d=n(3),O=[{id:"id-1",name:"Rosie Simpson",phone:"459-12-56"},{id:"id-2",name:"Hermione Kline",phone:"443-89-12"},{id:"id-3",name:"Eden Clements",phone:"645-17-79"},{id:"id-4",name:"Annie Copeland",phone:"227-91-26"}],f=n(32),h=Object(j.b)("contacts/delete"),m=Object(j.b)("contacts/changeFilter"),p=Object(j.b)("contacts/add",(function(t,e){return{payload:{id:Object(f.a)(),name:t,phone:e}}})),x=Object(j.c)(null!==(c=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==c?c:O,(r={},Object(b.a)(r,p,(function(t,e){var n=e.payload;return[].concat(Object(l.a)(t),[n])})),Object(b.a)(r,h,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),r)),v=Object(j.c)("",Object(b.a)({},m,(function(t,e){return e.payload}))),g=Object(d.b)({contacts:x,filter:v}),y=n(15),C=n.n(y),F=[].concat(Object(l.a)(Object(j.d)()),[C.a]),_=Object(j.a)({reducer:g,middleware:F,devTools:!1}),w=n(1);function S(t){var e=t.children,n=t.title;return Object(w.jsxs)("section",{children:[n&&Object(w.jsx)("h2",{children:n}),e]})}var N=n(13),k=n(12),J=n.n(k);function T(){var t=Object(a.useState)(""),e=Object(N.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),o=Object(N.a)(r,2),i=o[0],u=o[1],l=Object(s.d)((function(t){return t})).contacts,j=Object(s.c)(),b=function(t){t.preventDefault();if(function(t){return l.map((function(t){return t.name})).includes(t)}(n))return alert("".concat(n," is already in contacts"));!function(t,e){j(p(t,e))}(n,i),c(""),u("")};return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)("form",{className:J.a.form,onSubmit:function(t){return b(t)},children:[Object(w.jsx)("label",{id:"name",htmlFor:"name",children:"Name"}),Object(w.jsx)("input",{type:"text",name:"name",id:"name",value:n,onChange:function(t){return c(t.target.value)}}),Object(w.jsx)("label",{id:"phone",htmlFor:"phone",children:"Phone"}),Object(w.jsx)("input",{className:J.a.input,type:"tel",name:"phone",id:"phone",value:i,onChange:function(t){return u(t.target.value)}}),Object(w.jsx)("button",{type:"submit",disabled:!(n&&i),children:"add contact"})]})})}var E=n(16),I=n.n(E);function L(){var t=Object(s.d)((function(t){return t})),e=t.contacts,n=t.filter,c=Object(s.c)(),r=function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))}(e,n);return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("ul",{children:r.map((function(t){var e=t.id,n=t.name,r=t.phone;return Object(w.jsxs)("li",{children:[Object(w.jsxs)("p",{className:I.a.nameText,children:[n,": ",Object(w.jsx)("span",{children:r})]}),Object(w.jsx)("button",{type:"button",onClick:function(t){return function(t){return c(h(t))}(e)},children:"Delete"})]},e)}))})})}var D=n(17),H=n.n(D);function K(){var t=Object(s.d)((function(t){return t.filter})),e=Object(s.c)();return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("label",{className:H.a.text,name:"filter",htmlFor:"filter",value:t,children:"Find contacts by name"}),Object(w.jsx)("input",{value:t,type:"text",id:"filter",onChange:function(t){return e(m(t.target.value))}})]})}var P=Object(s.b)((function(t){return{contacts:t.contacts}}))((function(t){var e=t.contacts;return Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(e))}),[e]),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(S,{title:"Phonebook",children:Object(w.jsx)(T,{})}),e.length?Object(w.jsxs)(S,{title:"Contacts",children:[Object(w.jsx)(K,{}),Object(w.jsx)(L,{})]}):null]})}));u.a.render(Object(w.jsx)(o.a.StrictMode,{children:Object(w.jsx)(s.a,{store:_,children:Object(w.jsx)(P,{})})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.503021d0.chunk.js.map