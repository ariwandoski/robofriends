(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(7),s=n.n(c),o=(n(12),n(2)),a=n(3),i=n(5),h=n(4),l=(n(13),n(0)),u=function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(a.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(l.jsx)("h1",{children:"Ooooops. This is not good"}):this.props.children}}]),n}(r.Component),j=function(e){var t=e.id,n=e.name,r=e.username,c=e.email;return Object(l.jsxs)("div",{className:"bg-light-green dib br3 pas ma2 grow bw2 shadow-5",children:[Object(l.jsx)("img",{alt:"robot",src:"https://robohash.org/".concat(t,"?200x200")}),Object(l.jsxs)("div",{className:"tc",children:[Object(l.jsx)("h2",{children:n}),Object(l.jsx)("p",{children:r}),Object(l.jsx)("p",{children:c})]})]})},b=function(e){var t=e.robots;return Object(l.jsx)("div",{children:t.map((function(e,n){return Object(l.jsx)(j,{id:t[n].id,name:t[n].name,username:t[n].username,email:t[n].email},n)}))})},d=function(e){e.searchField;var t=e.searchChange;return Object(l.jsx)("input",{className:"ma2 pa2 light-green tc",type:"search",placeholder:"Search your robot",onChange:t})},O=function(e){return Object(l.jsx)("div",{style:{overflowY:"scroll",border:"2px solid blue",height:"490px"},children:e.children})},f=function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchField,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(l.jsxs)("div",{className:"tc",children:[Object(l.jsx)("h1",{className:"f1",children:"ROBOFRIENDS"}),Object(l.jsx)(d,{searchChange:this.onSearchChange}),Object(l.jsx)(O,{children:Object(l.jsx)(u,{children:Object(l.jsx)(b,{robots:r})})})]}):Object(l.jsx)("h1",{children:"LOADING..."})}}]),n}(r.Component),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),s(e),o(e)}))};n(15);s.a.render(Object(l.jsx)(f,{}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.e12f5fe2.chunk.js.map