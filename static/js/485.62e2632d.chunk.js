"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[485],{459:function(n,e,t){t.d(e,{Ku:function(){return s},OQ:function(){return v},Pg:function(){return h},W_:function(){return f},XT:function(){return i}});var r=t(861),a=t(757),c=t.n(a),u=t(44),i=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("https://api.themoviedb.org/3/trending/all/day?api_key=6eb99de4e2c3a3cd0d9a0ef8005c8dec");case 3:return e=n.sent,n.abrupt("return",e.data);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=6eb99de4e2c3a3cd0d9a0ef8005c8dec&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(n,e,t){try{o(n).then((function(n){e(n.data)}))}catch(r){t(r)}},p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=6eb99de4e2c3a3cd0d9a0ef8005c8dec&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(n,e,t){try{p(n).then((function(n){e(n.data)}))}catch(r){t(r)}},d=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=6eb99de4e2c3a3cd0d9a0ef8005c8dec&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(n,e,t){try{d(n).then((function(n){e(n.data)}))}catch(r){t(r)}},l=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&api_key=6eb99de4e2c3a3cd0d9a0ef8005c8dec&language=en-US&page=1&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(n,e,t){try{l(n).then((function(n){e(n),console.log(n)}))}catch(r){t(r.message)}}},485:function(n,e,t){t.r(e),t.d(e,{default:function(){return g}});var r,a,c,u=t(885),i=t(791),o=t(731),s=t(459),p=t(168),f=t(393),d=f.Z.h1(r||(r=(0,p.Z)(["\n  margin: 0 0 20px 0;\n  padding-top: 10px;\n  padding-left: 10px;\n"]))),h=f.Z.ul(a||(a=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n  list-style: none;\n"]))),l=f.Z.li(c||(c=(0,p.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 10px;\n  }\n"]))),v=t(184);function g(){var n=(0,i.useState)([]),e=(0,u.Z)(n,2),t=e[0],r=e[1];return(0,i.useEffect)((function(){(0,s.XT)().then((function(n){r(n.results)}))}),[]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(d,{children:"Trending today"}),(0,v.jsx)(h,{children:t.map((function(n){var e=n.title,t=n.id,r=n.name;return(0,v.jsx)(l,{children:(0,v.jsx)(o.rU,{to:"/movies/".concat(t),children:e||r})},t)}))})]})}}}]);
//# sourceMappingURL=485.62e2632d.chunk.js.map