(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{24:function(t,e,o){},30:function(t,e,o){"use strict";o.r(e);var n=o(2),c=o(1),a=o(14),i=o.n(a),r=o(18),d=o(12),u=o(4);var s=function(t){var e=Object(c.useState)(""),o=Object(u.a)(e,2),a=o[0],i=o[1];return Object(n.jsxs)("form",{className:"todo-form",onSubmit:function(e){e.preventDefault(),t.onSubmit({id:Math.floor(1e6*Math.random()),text:a}),i("")},children:[Object(n.jsx)("input",{type:"text",placeholder:"Add something to do",value:a,name:"text",className:"todo-input",onChange:function(t){i(t.target.value)}}),Object(n.jsx)("button",{className:"todo-button",children:"Add"})]})};var l=function(t){var e=Object(c.useState)(""),o=Object(u.a)(e,2),a=o[0],i=o[1];return Object(n.jsxs)("form",{className:"todo-form",onSubmit:function(e){e.preventDefault(),t.onSubmit({id:Math.floor(1e5*Math.random()),text:a}),i("")},children:[Object(n.jsx)("input",{type:"text",value:a,placeholder:"Change here",name:"text",className:"todo-input",onChange:function(t){i(t.target.value)}}),Object(n.jsx)("button",{className:"todo-button",children:"Modify"})]})},j=o(15),b=o(16);var m=function(t){var e=t.todos,o=t.completeTodo,a=t.removeTodo,i=t.updateTodo,r=Object(c.useState)({id:null,value:""}),d=Object(u.a)(r,2),s=d[0],m=d[1];return s.id?Object(n.jsx)(l,{edit:s,onSubmit:function(t){i(s.id,t),m({id:null,value:""})}}):e.map((function(t,e){return Object(n.jsxs)("div",{className:t.isComplete?"todo-row complete":"todo-row",children:[Object(n.jsx)("div",{onClick:function(){return o(t.id)},children:Object(n.jsx)("div",{className:"todo-text",children:t.text})},t.id),Object(n.jsxs)("div",{className:"icons",children:[Object(n.jsx)(j.a,{onClick:function(){return a(t.id)},className:"delete-icon"}),Object(n.jsx)(b.a,{onClick:function(){return m({id:t.id,value:t.text})},className:"edit-icon"})]})]},e)}))};var f=function(){var t=Object(c.useState)([]),e=Object(u.a)(t,2),o=e[0],a=e[1];return Object(n.jsxs)("div",{className:"main",children:[Object(n.jsx)("h1",{children:"What do you have to do?"}),Object(n.jsx)(s,{onSubmit:function(t){if(t.text){var e=[t].concat(Object(d.a)(o));a(e)}}}),Object(n.jsx)(m,{todos:o,completeTodo:function(t){var e=o.map((function(e){return e.id===t&&(e.isComplete=!e.isComplete),e}));a(e)},removeTodo:function(t){var e=Object(d.a)(o).filter((function(e){return e.id!==t}));a(e)},updateTodo:function(t,e){e.text&&a((function(o){return o.map((function(o){return o.id===t?e:o}))}))}})]})};var x=function(){return Object(n.jsx)("div",{id:"todo-app",children:Object(n.jsx)(f,{})})};o(24);i.a.render(Object(n.jsx)(r.a,{children:Object(n.jsx)(x,{})}),document.getElementById("app"))}},[[30,1,2]]]);
//# sourceMappingURL=main.2cbc44d0.chunk.js.map