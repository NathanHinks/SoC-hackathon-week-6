(this["webpackJsonpclass-conversion"]=this["webpackJsonpclass-conversion"]||[]).push([[0],[,,,,,,,,,,,,,function(n,e,t){},function(n,e,t){},function(n,e,t){},function(n,e,t){},function(n,e,t){"use strict";t.r(e);var c=t(0),r=t(1),a=t.n(r),l=t(6),i=t.n(l),u=(t(13),t(7)),s=t(4);t(14),t(15);var o=function(n){var e=n.item,t=n.fillSquare,r=n.index;return Object(c.jsx)("button",{className:"square",onClick:function(){return t(r)},transitionName:"button-change",children:e})};t(16);var b=function(n){var e=n.fillSquare,t=n.board,r=n.winner,a=n.isPlayerXTurn,l=n.handleReset;return Object(c.jsxs)("div",{className:"board-display-container",children:[" ",Object(c.jsx)("div",{className:"current-player",children:r?"Winner is: ".concat(r):"Next Player: ".concat(a?"X":"O")}),Object(c.jsx)("div",{className:"board",children:t.map((function(n,t){return Object(c.jsx)(o,{index:t,fillSquare:e,item:n},t)}))}),Object(c.jsx)("button",{className:"reset-btn",onClick:l,children:"Reset"})]})},j=[null,null,null,null,null,null,null,null,null];var d=function(){var n=Object(r.useState)(!0),e=Object(s.a)(n,2),t=e[0],a=e[1],l=Object(r.useState)(j),i=Object(s.a)(l,2),o=i[0],d=i[1],f=function(n){var e=null;return[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]].forEach((function(t){var c=Object(s.a)(t,3),r=c[0],a=c[1],l=c[2];null!==n[r]&&n[r]===n[a]&&n[r]===n[l]&&(e=n[r])})),e}(o);return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(b,{fillSquare:function(n){var e=Object(u.a)(o);null===f&&null===e[n]&&(e[n]=t?"X":"O"),d(e),a(!t)},board:o,handleReset:function(){var n=[].concat(j);d(n)},winner:f,isPlayerXTurn:t})})},f=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,18)).then((function(e){var t=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,l=e.getTTFB;t(n),c(n),r(n),a(n),l(n)}))};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(d,{})}),document.getElementById("root")),f()}],[[17,1,2]]]);
//# sourceMappingURL=main.23deec56.chunk.js.map