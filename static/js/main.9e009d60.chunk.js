(this["webpackJsonpreact-memory-game"]=this["webpackJsonpreact-memory-game"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(7),s=c.n(i),r=(c(12),c(3)),l=c(2),u=[{id:4,name:"charmander"},{id:7,name:"squirtle"},{id:13,name:"weedle"},{id:25,name:"pikachu"},{id:39,name:"jigglypuff"},{id:95,name:"onix"}],d=function(e){var t=[].concat(u);switch(e){case 4:t.splice(4,2);break;case 5:t.splice(5,1);break;case 6:t.splice(5,0)}var c=[].concat(Object(r.a)(t),Object(r.a)(t));return function(){for(var e=c.length-1;e>0;e--){var t=Math.floor(Math.random()*(e+1)),n=[c[t],c[e]];c[e]=n[0],c[t]=n[1]}return c}()},o=(c(13),c(0));var b=function(e){var t=e.name,c=e.id,n=e.flippedCards,a=e.disabled,i=e.matchCards,s=e.handleClick;return Object(o.jsxs)("div",{className:"card ".concat(n||i?"flip":""),onClick:a?null:s,children:[Object(o.jsx)("img",{className:"front-face",src:"https://pokeres.bastionbot.org/images/pokemon/".concat(c,".png"),alt:"Aurelia"}),Object(o.jsx)("img",{className:"back-face",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNZMJXDGDhurvl3yJFRKcV-my1LChRTxt_cQ&usqp=CAU",alt:t})]})};c(15);var f=function(e){var t=e.cards,c=e.flippedCards,n=e.disabled,a=e.matchCards,i=e.handleClick;return Object(o.jsx)("div",{className:"game-board",children:t.map((function(e,t){return Object(o.jsx)(b,{name:e.name,id:e.id,flippedCards:c.includes(t),disabled:n||a.includes(t)||c.includes(t),matchCards:a.includes(t),handleClick:function(){return i(t)}},t)}))})};c(16);var j=function(e){var t=e.steps;return Object(o.jsx)("div",{className:"result-page-container",children:Object(o.jsxs)("div",{className:"result-page-text",children:["Hurray!!! You've finished the game. You took ",t," steps to finish the game"]})})};c(17);var m=function(e){var t=e.onHandleClick;return Object(o.jsxs)("div",{className:"difficulty-level-container",children:[Object(o.jsx)("h1",{className:"difficulty-level-heading",children:"Hii there!! Choose the difficulty level of memory game"}),Object(o.jsx)("button",{className:"difficulty-level-btn",onClick:function(){return t(4)},children:"Easy"}),Object(o.jsx)("button",{className:"difficulty-level-btn",onClick:function(){return t(5)},children:"Medium"}),Object(o.jsx)("button",{className:"difficulty-level-btn",onClick:function(){return t(6)},children:"Hard"})]})},h=(c(18),function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(0),s=Object(l.a)(i,2),u=s[0],b=s[1],h=Object(n.useState)([]),O=Object(l.a)(h,2),p=O[0],v=O[1],g=Object(n.useState)(!1),x=Object(l.a)(g,2),C=x[0],k=x[1],y=Object(n.useState)([]),N=Object(l.a)(y,2),S=N[0],M=N[1],H=Object(n.useState)(0),w=Object(l.a)(H,2),A=w[0],E=w[1],G=Object(n.useState)(!1),J=Object(l.a)(G,2),T=J[0],q=J[1];Object(n.useEffect)((function(){a(d(u))}),[u]),Object(n.useEffect)((function(){c.length>0&&S.length===2*u&&setTimeout((function(){return q(!0)}),1e3)}),[S]);var R=function(){v([]),k(!1)};return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)("div",{className:"header",children:[Object(o.jsx)("h1",{className:"heading",children:"Memory Game"}),u?Object(o.jsx)("button",{className:"restart-game-btn",onClick:function(){a([]),b(0),v([]),M([]),E(0),k(!1),q(!1)},children:"Restart Game"}):null]}),u?T?Object(o.jsx)(j,{steps:A}):Object(o.jsx)(f,{cards:c,flippedCards:p,disabled:C,matchCards:S,handleClick:function(e){if(E((function(e){return e+1})),k(!0),0===p.length)v([e]),k(!1);else{if(function(e){return p.includes(e)}(e))return void k(!1);v([].concat(Object(r.a)(p),[e])),!function(e){return c[p[0]].name===c[e].name}(e)?setTimeout((function(){return R()}),1500):(M([].concat(Object(r.a)(S),[p[0],e])),R())}}}):Object(o.jsx)(m,{onHandleClick:function(e){b(e)}})]})});s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.9e009d60.chunk.js.map