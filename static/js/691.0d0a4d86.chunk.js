"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[691],{459:function(e,t,n){n.d(t,{Ku:function(){return s},OQ:function(){return v},Pg:function(){return h},W_:function(){return d},XT:function(){return i}});var r=n(861),a=n(757),c=n.n(a),u=n(44),i=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("https://api.themoviedb.org/3/trending/all/day?api_key=6eb99de4e2c3a3cd0d9a0ef8005c8dec");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=6eb99de4e2c3a3cd0d9a0ef8005c8dec&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(e,t,n){try{o(e).then((function(e){t(e.data)}))}catch(r){n(r)}},p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=6eb99de4e2c3a3cd0d9a0ef8005c8dec&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e,t,n){try{p(e).then((function(e){t(e.data)}))}catch(r){n(r)}},f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=6eb99de4e2c3a3cd0d9a0ef8005c8dec&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e,t,n){try{f(e).then((function(e){t(e.data)}))}catch(r){n(r)}},l=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&api_key=6eb99de4e2c3a3cd0d9a0ef8005c8dec&language=en-US&page=1&include_adult=false"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(e,t,n){try{l(e).then((function(e){t(e),console.log(e)}))}catch(r){n(r.message)}}},691:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r,a,c,u,i,o=n(885),s=n(791),p=n(459),d=n(731),f=n(168),h=n(393),l=h.Z.div(r||(r=(0,f.Z)(["\n  padding: 20px;\n"]))),v=h.Z.input(a||(a=(0,f.Z)(["\n  width: 300px;\n  margin-right: 10px;\n"]))),g=h.Z.button(c||(c=(0,f.Z)(["\n  width: 60px;\n"]))),m=h.Z.ul(u||(u=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 20px 0;\n  margin: 0;\n  list-style: none;\n"]))),x=h.Z.li(i||(i=(0,f.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 10px;\n  }\n"]))),Z=n(184);function b(){var e=(0,s.useState)(""),t=(0,o.Z)(e,2),n=t[0],r=t[1],a=(0,s.useState)(),c=(0,o.Z)(a,2),u=c[0],i=c[1],f=(0,s.useState)(),h=(0,o.Z)(f,2),b=h[0],y=h[1],w=(0,d.lr)(),k=(0,o.Z)(w,2),_=k[0],S=k[1],j=_.get("movie");return(0,s.useEffect)((function(){null!==j&&(0,p.OQ)(j,i,y)}),[j]),(0,Z.jsxs)(l,{children:[(0,Z.jsxs)("form",{onSubmit:function(e){e.preventDefault(),S({movie:n}),r("")},children:[(0,Z.jsx)(v,{type:"text",value:n,onChange:function(e){r(e.target.value)}}),(0,Z.jsx)(g,{type:"submit",children:"Search"})]}),b&&(0,Z.jsx)("h2",{children:"Sorry, try it again"}),u&&(0,Z.jsx)(m,{children:u.data.results.map((function(e){var t=e.id,n=e.title,r=e.name;return(0,Z.jsx)(x,{children:(0,Z.jsx)(d.rU,{to:"/goit-react-hw-05-movies/movies/".concat(t),children:n||r})},t)}))})]})}}}]);
//# sourceMappingURL=691.0d0a4d86.chunk.js.map