(this["webpackJsonplist-app"]=this["webpackJsonplist-app"]||[]).push([[0],{119:function(e,t,a){},120:function(e,t,a){},147:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(10),r=a.n(o),i=(a(119),a.p,a(120),a(88)),l=a(13),s=a(11),j=a(179),d=a(5),u=a(201),b=a(191),h=a(193),m=a(186),p=a(190),g=a(192),O=a(187),x=a(149),v=a(185),f=a(202),w=a(181),C=a(183),y=a(150),k=a(184),S=a(87),N=a.n(S),F=a(17),W=a.n(F),B=a(2),D=Object(j.a)((function(e){return Object(f.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,textAlign:"center"},logo:{maxWidth:40,marginRight:"10px"}})}));function L(e){var t=D(),a=Object(s.f)(),n=W.a.get("fullname");return Object(B.jsx)("div",{className:t.root,children:Object(B.jsx)(w.a,{position:"static",children:Object(B.jsxs)(C.a,{children:[Object(B.jsx)(k.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu",children:Object(B.jsx)(N.a,{})}),Object(B.jsxs)(y.a,{variant:"h6",className:t.title,children:[null===n||void 0===n?void 0:n.toLowerCase()," Empire!"]}),e.secondButton&&Object(B.jsx)(v.a,{color:"inherit",onClick:function(){a.push({pathname:e.secondButton.path})},children:e.secondButton.value}),Object(B.jsx)(v.a,{color:"inherit",onClick:function(){console.log("hellop"),W.a.remove("token"),W.a.remove("fullname"),a.push({pathname:"/login"})},children:e.val?e.val:"Login"})]})})})}var I=a(30),U=a.n(I),q={baseUrl:"https://havi-backend.herokuapp.com"},E=a(200),P=Object(j.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"70vw"}},table:{},tableContainer:{margin:"auto auto",width:"70vw"},tableHead:{}}})),R=Object(d.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(m.a),T=Object(d.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(O.a);var M=function(e){var t=Object(n.useState)([]),a=Object(l.a)(t,2),c=a[0],o=a[1],r=Object(n.useState)(""),j=Object(l.a)(r,2),d=j[0],m=j[1],f=Object(n.useState)(null),w=Object(l.a)(f,2),C=w[0],y=w[1],k=Object(s.f)();Object(n.useMemo)((function(){W.a.get("token")?U.a.get("".concat(q.baseUrl,"/task"),{headers:{token:W.a.get("token")}}).then((function(e){o(e.data)})).catch((function(e){y("Something went wrong")})):k.push({pathname:"/login"})}),[k]);var S=P();return Object(B.jsxs)("div",{children:[Object(B.jsx)(L,{val:"Logout",secondButton:{value:"User List",path:"/userlist"}}),C&&Object(B.jsx)(E.a,{severity:"error",children:C}),Object(B.jsx)("br",{}),Object(B.jsx)("br",{}),Object(B.jsxs)("div",{className:S.root,noValidate:!0,autoComplete:"off",children:[Object(B.jsx)(u.a,{id:"filled-basic",label:"Enter List Item.. ",variant:"filled",value:d,onChange:function(e){m(e.target.value)}}),Object(B.jsx)("br",{}),Object(B.jsx)(v.a,{variant:"contained",color:"primary",style:{width:"80px",marginRight:"5px"},onClick:function(e){var t={name:d};U.a.post("".concat(q.baseUrl,"/task"),t,{headers:{token:W.a.get("token")}}).then((function(e){o([].concat(Object(i.a)(c),[e.data])),m("")})).catch((function(e){y("Something went wrong")}))},children:"Submit"}),Object(B.jsx)(v.a,{variant:"contained",color:"secondary",style:{width:"80px"},onClick:function(e){m("")},children:"Clear"})]}),Object(B.jsx)("br",{}),Object(B.jsx)("br",{}),Object(B.jsx)("br",{}),Object(B.jsx)(p.a,{component:x.a,className:S.tableContainer,style:{marginBottom:"20px"},children:Object(B.jsxs)(b.a,{className:S.table,"aria-label":"customized table",children:[Object(B.jsx)(g.a,{style:{backgroundColor:"grey",color:"white"},children:Object(B.jsxs)(O.a,{children:[Object(B.jsx)(R,{children:"List Item"}),Object(B.jsx)(R,{align:"right",style:{marginRight:"5px",marginLeft:"auto"}})]})}),Object(B.jsx)(h.a,{children:c.map((function(e){return Object(B.jsxs)(T,{children:[Object(B.jsx)(R,{component:"th",scope:"row",children:e.name}),Object(B.jsx)(R,{align:"right"})]},e.index)}))})]})})]})},Y=Object(j.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"70vw"}},table:{},tableContainer:{margin:"auto auto",width:"70vw"},tableHead:{}}})),z=Object(d.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(m.a),H=Object(d.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(O.a);var V=function(e){var t=Object(n.useState)([]),a=Object(l.a)(t,2),c=a[0],o=a[1],r=Object(s.f)(),i=Object(n.useState)(null),j=Object(l.a)(i,2),d=j[0],u=j[1];Object(n.useMemo)((function(){W.a.get("token")?U.a.get("".concat(q.baseUrl,"/admin/users"),{headers:{token:W.a.get("token")}}).then((function(e){console.log(e),o(e.data)})).catch((function(e){var t,a=null===e||void 0===e||null===(t=e.response)||void 0===t?void 0:t.status;u(401===a?"You are not authorised to view this page":"Something went wrong")})):r.push({pathname:"/login"})}),[]);var m=Y();return Object(B.jsx)(B.Fragment,{children:d?Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(L,{val:"Logout",secondButton:{value:"Home",path:"/listform"}}),Object(B.jsx)(E.a,{severity:"error",children:d})]}):Object(B.jsxs)("div",{children:[Object(B.jsx)(L,{val:"Logout",secondButton:{value:"Home",path:"/listform"}}),Object(B.jsx)("br",{}),Object(B.jsx)(p.a,{component:x.a,className:m.tableContainer,style:{marginBottom:"20px"},children:Object(B.jsxs)(b.a,{className:m.table,"aria-label":"customized table",children:[Object(B.jsx)(g.a,{style:{backgroundColor:"grey",color:"white"},children:Object(B.jsxs)(O.a,{children:[Object(B.jsx)(z,{children:"Name"}),Object(B.jsx)(z,{children:"Email"}),Object(B.jsx)(z,{children:"Gender"}),Object(B.jsx)(z,{children:"D.O.B"}),Object(B.jsx)(z,{align:"right",style:{marginRight:"5px",marginLeft:"auto"}})]})}),Object(B.jsx)(h.a,{children:c.map((function(e){return Object(B.jsxs)(H,{children:[Object(B.jsx)(z,{component:"th",scope:"row",children:(null===e||void 0===e?void 0:e.fullname)||""}),Object(B.jsx)(z,{component:"th",scope:"row",children:(null===e||void 0===e?void 0:e.email)||""}),Object(B.jsx)(z,{component:"th",scope:"row",children:(null===e||void 0===e?void 0:e.gender)||""}),Object(B.jsx)(z,{component:"th",scope:"row",children:null===e||void 0===e?void 0:e.dob}),Object(B.jsx)(z,{align:"right"})]},e.index)}))})]})})]})})},A=a(203),G=a(196),J=a(194),K=a(197),Q=a(199),X=a(63),Z=a.n(X),$=a(195);function _(){return Object(B.jsxs)(y.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(B.jsx)(J.a,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var ee=Object(j.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function te(){var e=ee(),t=Object(s.f)(),a=Object(n.useState)(""),c=Object(l.a)(a,2),o=c[0],r=c[1],i=Object(n.useState)(""),j=Object(l.a)(i,2),d=j[0],b=j[1],h=Object(n.useState)(null),m=Object(l.a)(h,2),p=m[0],g=m[1];return Object(n.useMemo)((function(){W.a.get("token")&&t.push({pathname:"/listform"})}),[]),Object(B.jsxs)("div",{style:{backgroundColor:"#DCDCDC",height:"100vh",marginTop:"0"},children:[Object(B.jsx)(L,{}),Object(B.jsx)("paper",{elevation:10,children:Object(B.jsxs)($.a,{component:"main",maxWidth:"xs",style:{padding:30,margin:"10vh auto",borderRadius:"10px",backgroundColor:"#F2F7F7"},children:[Object(B.jsx)(G.a,{}),Object(B.jsxs)("div",{className:e.paper,children:[p&&Object(B.jsx)(E.a,{severity:"error",children:"Failed to logged in"}),Object(B.jsx)(A.a,{className:e.avatar,children:Object(B.jsx)(Z.a,{})}),Object(B.jsx)(y.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(B.jsxs)("div",{className:e.form,noValidate:!0,children:[Object(B.jsx)(u.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",placeholder:"User Name",name:"email",autoComplete:"email",autoFocus:!0,value:o,onChange:function(e){r(e.target.value)}}),Object(B.jsx)(u.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",placeholder:"Password",type:"password",id:"password",autoComplete:"current-password",value:d,onChange:function(e){b(e.target.value)}}),Object(B.jsx)(v.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:function(){var e={email:o,password:d};U.a.post("".concat(q.baseUrl,"/login"),e).then((function(e){g(null),W.a.set("token",e.data.token),W.a.set("fullname",e.data.name),t.push({pathname:"/listform"})})).catch((function(e){g(e)}))},children:"Sign In"}),Object(B.jsx)(K.a,{item:!0,children:Object(B.jsx)(J.a,{href:"/signup",variant:"body2",children:"Don't have an account? Sign Up"})})]})]}),Object(B.jsx)(Q.a,{mt:8,children:Object(B.jsx)(_,{})})]})})]})}var ae=a(52),ne=a(198),ce=a(204);function oe(){return Object(B.jsxs)(y.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(B.jsx)(J.a,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var re=Object(j.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},select:{border:"1px solid #ced4da",height:"50px"}}}));function ie(){var e=re(),t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],o=a[1],r=Object(n.useState)(""),i=Object(l.a)(r,2),s=i[0],j=i[1],d=Object(n.useState)(""),b=Object(l.a)(d,2),h=b[0],m=b[1],p=Object(n.useState)(""),g=Object(l.a)(p,2),O=g[0],x=g[1],f=Object(n.useState)(""),w=Object(l.a)(f,2),C=w[0],k=w[1],S=Object(n.useState)(""),N=Object(l.a)(S,2),F=N[0],W=N[1],D=Object(n.useState)(null),I=Object(l.a)(D,2),P=I[0],R=I[1],T=Object(n.useState)(""),M=Object(l.a)(T,2),Y=M[0],z=M[1],H=Object(n.useState)("none"),V=Object(l.a)(H,2),X=V[0],_=V[1];return Object(B.jsxs)("div",{style:{backgroundColor:"#DCDCDC",height:"150vh",marginTop:"0"},children:[Object(B.jsx)(L,{}),Object(B.jsx)("paper",{elevation:10,children:Object(B.jsxs)($.a,{component:"main",maxWidth:"xs",style:{padding:30,margin:"10vh auto",borderRadius:"10px",backgroundColor:"#F2F7F7"},children:[Object(B.jsx)(G.a,{}),Object(B.jsxs)("div",{className:e.paper,children:[Object(B.jsx)(A.a,{className:e.avatar,children:Object(B.jsx)(Z.a,{})}),Object(B.jsx)(y.a,{component:"h1",variant:"h5",children:"Sign Up"}),Object(B.jsx)(u.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"name",placeholder:"Enter your Name",name:"name",autoComplete:"name",autoFocus:!0,value:s,onChange:function(e){console.log(e.target.value),j(e.target.value)}}),Object(B.jsxs)("div",{className:e.margin,noValidate:!0,children:[Object(B.jsx)(u.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",placeholder:"Email",name:"email",autoComplete:"email",value:c,autoFocus:!0,onChange:function(e){o(e.target.value)}}),Object(B.jsx)(u.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"phoneNumber",placeholder:"Phone Number",name:"phoneNumber",autoComplete:"phoneNumber",value:F,autoFocus:!0,onChange:function(e){W(e.target.value)}}),Object(B.jsxs)(ne.a,{labelId:"demo-controlled-open-select-label",id:"demo-controlled-open-select",value:X,onChange:function(e){_(e.target.value)},style:{width:"100%"},className:e.select,children:[Object(B.jsx)(ce.a,{value:"none",alignItems:"flex-start",children:"Select the gender"}),Object(B.jsx)(ce.a,{value:"male",children:"Male"}),Object(B.jsx)(ce.a,{value:"female",children:"Female"})]}),Object(B.jsx)(u.a,{id:"date",placeholder:"Birthday",type:"date",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,defaultValue:"1998-09-27",InputLabelProps:{shrink:!0},value:C,onChange:function(e){k(e.target.value)}}),Object(B.jsx)(u.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",placeholder:"Enter Password",type:"password",id:"password",autoComplete:"current-password",value:h,onChange:function(e){m(e.target.value)}}),Object(B.jsx)(u.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password2",placeholder:"Enter Password again",type:"password",id:"password2",autoComplete:"current-password",value:O,onChange:function(e){x(e.target.value)}}),Object(B.jsx)(v.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,disabled:0===c.length||0===s.length||0===h.length||0===O.length||0===C.length||0===F.length||0===X.length,onClick:function(){if(h!==O)R("Password does not match");else{R(null);var e={fullname:s,gender:X,phoneNumber:F,dob:C,email:c,password:h};U.a.post("".concat(q.baseUrl,"/register"),e).then((function(e){z("Registration successful"),j(""),k(""),W(""),o(""),m(""),x(""),_("none")})).catch((function(e){var t,a,n;(console.log(e.response),400===(null===e||void 0===e||null===(t=e.response)||void 0===t?void 0:t.status))?R((null===e||void 0===e||null===(a=e.response)||void 0===a||null===(n=a.data)||void 0===n?void 0:n.error)||"Something went wrong"):R("Something went wrong")}))}},children:"Sign Up"}),P&&Object(B.jsx)(E.a,{severity:"error",children:P}),Y&&Object(B.jsx)(E.a,{severity:"success",children:Y}),Object(B.jsx)(K.a,{container:!0,children:Object(B.jsx)(K.a,{item:!0,children:Object(B.jsx)(J.a,{href:"/login",variant:"body2",children:"Already have an account? Sign In"})})})]})]}),Object(B.jsx)(Q.a,{mt:8,children:Object(B.jsx)(oe,{})})]})})]})}var le=function(){return Object(B.jsx)("div",{className:"App",children:Object(B.jsx)(ae.a,{children:Object(B.jsx)("div",{children:Object(B.jsxs)(s.c,{children:[Object(B.jsx)(s.a,{exact:!0,path:"/",children:Object(B.jsx)(te,{})}),Object(B.jsx)(s.a,{path:"/listform",children:Object(B.jsx)(M,{})}),Object(B.jsx)(s.a,{path:"/userlist",children:Object(B.jsx)(V,{})}),Object(B.jsx)(s.a,{path:"/login",children:Object(B.jsx)(te,{})}),Object(B.jsx)(s.a,{path:"/signup",children:Object(B.jsx)(ie,{})})]})})})})},se=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,207)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),o(e),r(e)}))};r.a.render(Object(B.jsx)(c.a.StrictMode,{children:Object(B.jsx)(le,{})}),document.getElementById("root")),se()}},[[147,1,2]]]);
//# sourceMappingURL=main.1db822b5.chunk.js.map