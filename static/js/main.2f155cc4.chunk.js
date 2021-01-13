(this["webpackJsonpreact-todo-app-firebase"]=this["webpackJsonpreact-todo-app-firebase"]||[]).push([[0],{23:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){},54:function(e,t,s){},57:function(e,t,s){},58:function(e,t,s){"use strict";s.r(t);var c=s(3),n=s(4),a=s.n(n),r=s(35),i=s.n(r),o=(s(45),s(46),s(16)),l=s.n(o),d=s(18),u=s(10),j=(s(23),s(9)),_=s(13),b=s(36),p=(s(48),s(49),b.a.initializeApp({apiKey:"AIzaSyAqIYBRmektWn1n-_HyEBcND0QjiidyB1A",authDomain:"react-todo-dev-d8f50.firebaseapp.com",projectId:"react-todo-dev-d8f50",storageBucket:"react-todo-dev-d8f50.appspot.com",messagingSenderId:"778345300194",appId:"1:778345300194:web:cd75d84460e0a9b50d1ebb"})),O=p.auth(),m=p.firestore(),h=a.a.createContext();function f(){return Object(n.useContext)(h)}function x(e){var t=e.children,s=Object(n.useState)(),a=Object(u.a)(s,2),r=a[0],i=a[1],o=Object(n.useState)(!0),l=Object(u.a)(o,2),d=l[0],j=l[1];Object(n.useEffect)((function(){return O.onAuthStateChanged((function(e){i(e),j(!1)}))}),[]);var _={currentUser:r,login:function(e,t){return O.signInWithEmailAndPassword(e,t)},signup:function(e,t){return O.createUserWithEmailAndPassword(e,t)},logout:function(){return O.signOut()},resetPassword:function(e){return O.sendPasswordResetEmail(e)},updateEmail:function(e){return r.updateEmail(e)},updatePassword:function(e){return r.updatePassword(e)}};return Object(c.jsx)(h.Provider,{value:_,children:!d&&t})}var v=function(){var e=Object(n.useRef)(),t=Object(n.useRef)(),s=Object(n.useRef)(),a=Object(n.useRef)(),r=f().signup,i=Object(n.useState)(""),o=Object(u.a)(i,2),b=o[0],p=o[1],h=Object(n.useState)(!1),x=Object(u.a)(h,2),v=x[0],g=x[1],N=Object(j.g)();function w(e){return y.apply(this,arguments)}function y(){return(y=Object(d.a)(l.a.mark((function c(n){var i;return l.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(n.preventDefault(),t.current.value===a.current.value){c.next=3;break}return c.abrupt("return",p("password don't match"));case 3:return c.prev=3,p(""),g(!0),c.next=8,r(e.current.value,t.current.value);case 8:i=O.currentUser,m.collection("users").doc(i.uid).set({email:i.email,ID:i.uid}),m.collection("users").doc(i.uid).collection("usersInfo").add({userName:s.current.value}),N.push("/"),c.next=17;break;case 14:c.prev=14,c.t0=c.catch(3),p("Failed to create account");case 17:g(!1);case 18:case"end":return c.stop()}}),c,null,[[3,14]])})))).apply(this,arguments)}return Object(c.jsxs)("div",{className:"main__container",children:[Object(c.jsx)("div",{className:"circle__one"}),Object(c.jsx)("div",{className:"circle__two"}),Object(c.jsxs)("div",{className:"sign__up__container",children:[Object(c.jsx)("h2",{className:"sign__up__title",children:"Sign Up"}),b&&Object(c.jsx)("h3",{className:"error__message",children:b}),Object(c.jsxs)("form",{className:"sign__up__form",onSubmit:w,children:[Object(c.jsx)("div",{className:"sign__up__field",children:Object(c.jsx)("input",{placeholder:"email",ref:e,className:"sign__up__inp",type:"email",required:!0})}),Object(c.jsx)("div",{children:Object(c.jsx)("input",{placeholder:"username",ref:s,className:"sign__up__inp",type:"text",required:!0})}),Object(c.jsx)("div",{className:"sign__up__field",children:Object(c.jsx)("input",{placeholder:"password",ref:t,className:"sign__up__inp",type:"password",required:!0})}),Object(c.jsx)("div",{className:"sign__up__field",children:Object(c.jsx)("input",{placeholder:"password confirmation",ref:a,className:"sign__up__inp",type:"password",required:!0})}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{className:"sign__up__btn",type:"submit",disabled:v,onClick:w,children:"Sign Up"})}),Object(c.jsxs)("div",{className:"password__secondary__links",children:[Object(c.jsx)("h3",{className:"question__secondary",children:"Alredy have an acount?"}),Object(c.jsx)(_.b,{to:"/login",children:Object(c.jsx)("button",{className:"secondary__btn",children:"Login"})})]})]})]})]})};var g=function(){var e=Object(n.useRef)(),t=Object(n.useRef)(),s=f().login,a=Object(n.useState)(""),r=Object(u.a)(a,2),i=r[0],o=r[1],b=Object(n.useState)(!1),p=Object(u.a)(b,2),O=p[0],m=p[1],h=Object(j.g)();function x(e){return v.apply(this,arguments)}function v(){return(v=Object(d.a)(l.a.mark((function c(n){return l.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return n.preventDefault(),c.prev=1,o(""),m(!0),c.next=6,s(e.current.value,t.current.value);case 6:h.push("/"),c.next=12;break;case 9:c.prev=9,c.t0=c.catch(1),o("Failed to log in");case 12:m(!1);case 13:case"end":return c.stop()}}),c,null,[[1,9]])})))).apply(this,arguments)}return Object(c.jsxs)("div",{className:"main__container",children:[Object(c.jsx)("div",{className:"circle__one"}),Object(c.jsx)("div",{className:"circle__two"}),Object(c.jsxs)("div",{className:"sign__up__container",children:[Object(c.jsx)("h2",{className:"sign__up__title",children:"Login"}),i&&Object(c.jsx)("h3",{className:"error__message",children:i}),Object(c.jsxs)("form",{className:"sign__up__form",onSubmit:x,children:[Object(c.jsx)("div",{className:"sign__up__field",children:Object(c.jsx)("input",{placeholder:"email",ref:e,className:"sign__up__inp",type:"email",required:!0})}),Object(c.jsx)("div",{className:"sign__up__field",children:Object(c.jsx)("input",{placeholder:"password",ref:t,className:"sign__up__inp",type:"password",required:!0})}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{className:"sign__up__btn",type:"submit",disabled:O,onClick:x,children:"Login"})}),Object(c.jsx)(_.b,{className:"link__style",to:"/forgot-password",children:"Forgot Password?"}),Object(c.jsxs)("div",{className:"password__secondary__links",children:[Object(c.jsx)("h3",{className:"question__secondary",children:"Need an account? "}),Object(c.jsx)(_.b,{to:"/signup",children:Object(c.jsx)("button",{className:"secondary__btn",children:"Sign Up"})})]})]})]})]})},N=(s(54),s(38)),w=(s(57),s(25)),y=s(22);var S=function(e){var t=e.todo,s=e.id,n=e.inprogress,a=f().currentUser;return Object(c.jsxs)("div",{className:"todo__list__task",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{className:"todo__paragraph",children:t}),n?Object(c.jsx)("p",{className:"inprogress",children:"In Progress"}):Object(c.jsx)("p",{className:"inprogress done",children:"Complited"})]}),Object(c.jsxs)("div",{className:"todo__icons",children:[Object(c.jsx)("div",{className:"todo__icon",onClick:function(){m.collection("users").doc(a.uid).collection("todos").doc(s).update({inprogress:!n})},children:n?Object(c.jsx)(y.a,{}):Object(c.jsx)(y.b,{})}),Object(c.jsx)("div",{className:"todo__icon",children:Object(c.jsx)(w.b,{onClick:function(){m.collection("users").doc(a.uid).collection("todos").doc(s).delete().catch((function(e){console.error(e)}))}})})]})]})};var k=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),s=t[0],a=t[1],r=f(),i=r.currentUser,o=r.logout,b=Object(n.useState)(""),p=Object(u.a)(b,2),O=p[0],h=p[1],x=Object(n.useState)([]),v=Object(u.a)(x,2),g=v[0],k=v[1],P=Object(n.useState)([]),R=Object(u.a)(P,2),C=R[0],U=R[1],q=Object(j.g)();function I(){return(I=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(""),e.prev=1,e.next=4,o();case 4:q.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),a("Failed to log out!");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}Object(n.useEffect)((function(){E(),A()}),[]);var E=function(){m.collection("users").doc(i.uid).collection("todos").onSnapshot((function(e){k(e.docs.map((function(e){return{id:e.id,todo:e.data().todo,inprogress:e.data().inprogress}})))}))},A=function(){m.collection("users").doc(i.uid).collection("usersInfo").onSnapshot((function(e){U(e.docs.map((function(e){return{id:e.id,userName:e.data().userName}})))}))};return Object(c.jsxs)("div",{className:"home__container",children:[Object(c.jsx)("div",{className:"circle__one__home"}),Object(c.jsx)("div",{className:"circle__two__home"}),Object(c.jsxs)("div",{className:"todo__app",children:[s&&Object(c.jsx)("h2",{children:s}),Object(c.jsxs)("div",{className:"todo__title",children:[" ",C.map((function(e){return Object(c.jsxs)("h3",{children:[e.userName,"'s todo list "]},e.id)})),Object(c.jsxs)("div",{className:"todo__title__icons",children:[Object(c.jsx)(_.b,{to:"/update-profile",children:Object(c.jsx)(y.c,{className:"todo__title__icon"})}),Object(c.jsx)(w.a,{onClick:function(){return I.apply(this,arguments)},className:"todo__title__icon"})]})]}),Object(c.jsx)("form",{className:"todo__form",onSubmit:function(e){e.preventDefault(),m.collection("users").doc(i.uid).collection("todos").add({inprogress:!0,timestamp:N.a.firestore.FieldValue.serverTimestamp(),todo:O}),h("")},children:Object(c.jsx)("input",{className:"todo__input",type:"text",placeholder:"add new todo",onChange:function(e){h(e.target.value)},value:O})}),Object(c.jsx)("div",{className:"todos__list",children:g.map((function(e){return Object(c.jsx)(S,{todo:e.todo,inprogress:e.inprogress,id:e.id},e.id)}))})]})]})},P=s(26),R=s(39);var C=function(e){var t=e.component,s=Object(R.a)(e,["component"]),n=f().currentUser;return Object(c.jsx)(j.b,Object(P.a)(Object(P.a)({},s),{},{render:function(e){return n?Object(c.jsx)(t,Object(P.a)({},e)):Object(c.jsx)(j.a,{to:"/login"})}}))};var U=function(){var e=Object(n.useRef)(),t=f().resetPassword,s=Object(n.useState)(""),a=Object(u.a)(s,2),r=a[0],i=a[1],o=Object(n.useState)(!1),j=Object(u.a)(o,2),b=j[0],p=j[1],O=Object(n.useState)(""),m=Object(u.a)(O,2),h=m[0],x=m[1];function v(e){return g.apply(this,arguments)}function g(){return(g=Object(d.a)(l.a.mark((function s(c){return l.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return c.preventDefault(),s.prev=1,x(""),i(""),p(!0),s.next=7,t(e.current.value);case 7:x("Check your inbox for further instructiones"),s.next=13;break;case 10:s.prev=10,s.t0=s.catch(1),i("Failed to Reset Password!");case 13:p(!1);case 14:case"end":return s.stop()}}),s,null,[[1,10]])})))).apply(this,arguments)}return Object(c.jsxs)("div",{className:"main__container",children:[Object(c.jsx)("div",{className:"circle__one"}),Object(c.jsx)("div",{className:"circle__two"}),Object(c.jsxs)("div",{className:"sign__up__container",children:[Object(c.jsx)("h2",{className:"sign__up__title",children:"Password Reset"}),r&&Object(c.jsx)("h3",{className:"error__message",children:r}),h&&Object(c.jsx)("h3",{className:"confirmation__message",children:h}),Object(c.jsxs)("form",{className:"sign__up__form",onSubmit:v,children:[Object(c.jsx)("div",{className:"sign__up__field",children:Object(c.jsx)("input",{placeholder:"email",ref:e,className:"sign__up__inp",type:"email",required:!0})}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{className:"sign__up__btn",type:"submit",disabled:b,onClick:v,children:"Reset Password"})}),Object(c.jsxs)("div",{className:"password__secondary__links",children:[Object(c.jsx)(_.b,{to:"/login",children:Object(c.jsx)("button",{className:"secondary__btn",children:"Login"})}),Object(c.jsx)(_.b,{to:"/signup",children:Object(c.jsx)("button",{className:"secondary__btn",children:"Sign Up"})})]})]})]})]})};var q=function(){var e=Object(n.useRef)(),t=Object(n.useRef)(),s=(Object(n.useRef)(),Object(n.useRef)()),a=f(),r=a.currentUser,i=a.updateEmail,o=a.updatePassword,l=Object(n.useState)(""),d=Object(u.a)(l,2),b=d[0],p=d[1],O=Object(n.useState)(!1),m=Object(u.a)(O,2),h=m[0],x=m[1],v=Object(j.g)();function g(c){if(c.preventDefault(),t.current.value!==s.current.value)return p("password do not match");var n=[];x(!0),p(""),e.current.value!==r.email&&n.push(i(e.current.value)),t.current.value&&n.push(o(t.current.value)),Promise.all(n).then((function(){v.push("/")})).catch((function(){p("Failed to update account")})).finally((function(){x(!1)}))}return Object(c.jsxs)("div",{className:"main__container",children:[Object(c.jsx)("div",{className:"circle__one"}),Object(c.jsx)("div",{className:"circle__two"}),Object(c.jsxs)("div",{className:"sign__up__container",children:[Object(c.jsx)("h2",{className:"sign__up__title",children:"Update Profile"}),b&&Object(c.jsx)("h3",{className:"error__message",children:b}),Object(c.jsxs)("form",{className:"sign__up__form",onSubmit:g,children:[Object(c.jsx)("div",{className:"sign__in__label",children:Object(c.jsx)("input",{ref:e,className:"sign__up__inp",type:"email",required:!0,defaultValue:r.email})}),Object(c.jsx)("div",{className:"sign__in__label",children:Object(c.jsx)("input",{ref:t,className:"sign__up__inp",type:"password",placeholder:"create new password"})}),Object(c.jsx)("div",{className:"sign__in__label",children:Object(c.jsx)("input",{label:"password confirmation",ref:s,className:"sign__up__inp",type:"password",required:!0,placeholder:"confirm new password"})}),Object(c.jsxs)("div",{className:"btns__update__profile",children:[Object(c.jsx)("div",{children:Object(c.jsx)("button",{className:"sign__up__btn",type:"submit",disabled:h,onClick:g,children:"Update"})}),Object(c.jsx)("div",{children:Object(c.jsx)(_.b,{to:"/",children:Object(c.jsx)("button",{className:"sign__up__btn",children:"Cancel"})})})]})]})]})]})};var I=function(){return Object(c.jsx)(_.a,{children:Object(c.jsx)(x,{children:Object(c.jsxs)(j.d,{children:[Object(c.jsx)(C,{exact:!0,path:"/",component:k}),Object(c.jsx)(C,{path:"/update-profile",component:q}),Object(c.jsx)(j.b,{path:"/signup",component:v}),Object(c.jsx)(j.b,{path:"/login",component:g}),Object(c.jsx)(j.b,{path:"/forgot-password",component:U})]})})})};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(I,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.2f155cc4.chunk.js.map