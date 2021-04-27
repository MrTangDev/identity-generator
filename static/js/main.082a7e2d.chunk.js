(this["webpackJsonpidentity-generator"]=this["webpackJsonpidentity-generator"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),c=n(4),r=n.n(c),i=(n(14),n(0));var j=function(){return Object(i.jsx)("div",{children:Object(i.jsxs)("header",{children:[Object(i.jsx)("h1",{children:"Identity Generator"}),Object(i.jsx)("p",{children:"A new you."})]})})},d=n(5),l=n(6),h=n(7),b=n(2),O=n(9),o=n(8),m=function(e){Object(O.a)(n,e);var t=Object(o.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={gender:"male",firstName:"",lastName:"",birth:"",username:"",password:"",email:"",nat:"US",city:"",address:"",picture:""},e.handleChange=e.handleChange.bind(Object(b.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(b.a)(e)),e}return Object(h.a)(n,[{key:"handleChange",value:function(e){var t=e.target,n=t.name,s=t.value;this.setState(Object(d.a)({},n,s))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var n="https://randomuser.me/api/1.3/?nat="+this.state.nat+"&gender="+this.state.gender;fetch(n).then((function(e){return e.json()})).then((function(e){return e.results[0]})).then((function(e){t.setState({firstName:e.name.first,lastName:e.name.last,birth:e.dob.date.split("T")[0],username:e.login.username,password:e.login.password,email:e.email,city:e.location.city,address:e.location.street.name+" "+e.location.street.number+", "+e.location.postcode,picture:e.picture.large})}))}},{key:"render",value:function(){return Object(i.jsx)("div",{children:Object(i.jsxs)("main",{children:[Object(i.jsx)("br",{}),Object(i.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(i.jsx)("b",{children:"Gender"}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{name:"gender",type:"radio",value:"male",id:"male",onChange:this.handleChange}),Object(i.jsx)("label",{for:"male",children:"Male"})," ",Object(i.jsx)("br",{}),Object(i.jsx)("input",{name:"gender",type:"radio",value:"female",id:"female",onChange:this.handleChange}),Object(i.jsx)("label",{for:"female",children:"Female"})," ",Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("b",{children:"Nationality"}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{name:"nat",type:"radio",value:"US",id:"US",onChange:this.handleChange}),Object(i.jsx)("label",{for:"US",children:"American"})," ",Object(i.jsx)("br",{}),Object(i.jsx)("input",{name:"nat",type:"radio",value:"NO",id:"NO",onChange:this.handleChange}),Object(i.jsx)("label",{for:"NO",children:"Norwegian"})," ",Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("button",{children:"Generate identity!"})]}),Object(i.jsx)("table",{children:Object(i.jsxs)("tbody",{children:[Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{className:"muted",children:"First name"}),Object(i.jsx)("td",{children:this.state.firstName})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{className:"muted",children:"Last name"}),Object(i.jsx)("td",{children:this.state.lastName})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{className:"muted",children:"Date of birth"}),Object(i.jsx)("td",{children:this.state.birth})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{className:"muted",children:"Username"}),Object(i.jsx)("td",{children:this.state.username})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{className:"muted",children:"Password"}),Object(i.jsx)("td",{children:this.state.password})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{className:"muted",children:"E-mail"}),Object(i.jsx)("td",{children:this.state.email})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{className:"muted",children:"City"}),Object(i.jsx)("td",{children:this.state.city})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{className:"muted",children:"Address"}),Object(i.jsx)("td",{children:this.state.address})]})]})}),Object(i.jsx)("h3",{children:"Picture"}),Object(i.jsx)("img",{src:this.state.picture,alt:"User avatar here!"})]})})}}]),n}(s.Component);var u=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("footer",{children:Object(i.jsxs)("p",{children:["Identity Generator created by ",Object(i.jsx)("a",{href:"https://github.com/mrtangdev",children:"me"})," using ",Object(i.jsx)("a",{href:"https://github.com/RandomAPI",children:"RandomAPI"})," and ",Object(i.jsx)("a",{href:"https://simplecss.org/",children:"SimpleCSS"}),"."]})})})};var x=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(j,{}),Object(i.jsx)(m,{}),Object(i.jsx)(u,{})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),c(e),r(e)}))};r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(x,{})}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.082a7e2d.chunk.js.map