(this["webpackJsonpinstagram-clone"]=this["webpackJsonpinstagram-clone"]||[]).push([[0],{58:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){"use strict";c.r(t);var n=c(7),a=c.n(n),s=c(49),r=c.n(s),i=c(11),j=(c(58),c(36)),u=c(15),o=c(0),b=c.n(o),l=c(1),d=c(50),O=c(30),m=c(25),f=c(33),x=Object(d.a)({apiKey:"AIzaSyAeOf0p5ca3RVhEGRMEswK-jnjoc5Pu_x8",authDomain:"instagram-clone-nomad.firebaseapp.com",projectId:"instagram-clone-nomad",storageBucket:"instagram-clone-nomad.appspot.com",messagingSenderId:"82841265220",appId:"1:82841265220:web:b406cff4dc67cb8e894811"}),p=Object(O.d)(x),h=Object(m.g)(),v=Object(f.c)(x),g=c(5),_=function(e){var t=e.refreshUser,c=Object(n.useState)(""),a=Object(i.a)(c,2),s=a[0],r=a[1],j=Object(n.useState)(""),u=Object(i.a)(j,2),o=u[0],d=u[1],m=Object(n.useState)(!0),f=Object(i.a)(m,2),x=f[0],h=f[1],v=Object(n.useState)(""),_=Object(i.a)(v,2),w=_[0],N=_[1],k=Object(n.useState)(""),y=Object(i.a)(k,2),S=y[0],I=y[1],C=function(e){var t=e.target,c=t.name,n=t.value;"email"===c?r(n):"password"===c?d(n):"username"===c&&N(n)},U=function(){var e=Object(l.a)(b.a.mark((function e(c){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),e.prev=1,!x){e.next=11;break}return e.next=5,Object(O.c)(p,s,o);case 5:return n=e.sent,e.next=8,Object(O.g)(n.user,{displayName:w});case 8:t(),e.next=13;break;case 11:return e.next=13,Object(O.e)(p,s,o);case 13:e.next=19;break;case 15:e.prev=15,e.t0=e.catch(1),a=e.t0.message.replace("Firebase: ",""),I(a);case 19:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{className:"authform",children:[Object(g.jsxs)("form",{onSubmit:U,children:[x&&Object(g.jsx)("input",{name:"username",type:"text",placeholder:"User name",required:!0,value:w,onChange:C}),Object(g.jsx)("input",{name:"email",type:"text",placeholder:"Email",required:!0,value:s,onChange:C}),Object(g.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:o,onChange:C}),Object(g.jsx)("input",{type:"submit",value:x?"Sign Up":"Log In"}),Object(g.jsx)("div",{className:"authform__error",children:S})]}),Object(g.jsx)("button",{onClick:function(e){e.preventDefault(),h((function(e){return!e}))},className:"authform__togglebtn",children:x?"Log In":"Create Account"})]})},w=c(16),N=c(45),k=function(e){var t=e.refreshUser,c=function(){var e=Object(l.a)(b.a.mark((function e(t){var c,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(c=t.currentTarget.name)?n=new O.b:"github"===c&&(n=new O.a).addScope("repo"),e.prev=2,e.next=5,Object(O.f)(p,n);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),alert(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsx)("div",{className:"auth",children:Object(g.jsxs)("div",{className:"auth__inner",children:[Object(g.jsx)(_,{refreshUser:t}),Object(g.jsx)("div",{className:"auth__sociallogin",children:Object(g.jsxs)("div",{className:"auth__sociallogin-box",children:[Object(g.jsxs)("button",{onClick:c,name:"google",children:[Object(g.jsx)("span",{children:"Continue with Google"})," ",Object(g.jsx)(w.a,{icon:N.b})]}),Object(g.jsxs)("button",{onClick:c,name:"github",children:[Object(g.jsx)("span",{children:"Continue with Github"})," ",Object(g.jsx)(w.a,{icon:N.a})]})]})})]})})},y=c(37),S=c(20),I=function(e){var t=e.commentObj,c=Object(n.useState)({}),a=Object(i.a)(c,2),s=a[0],r=a[1];return Object(n.useEffect)((function(){Object(l.a)(b.a.mark((function e(){var c,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.e)(Object(m.d)(h,"users",t.creatorId));case 2:(c=e.sent).exists()&&(n=c.data(),r({userName:n.userName,userImage:n.userImage}));case 4:case"end":return e.stop()}}),e)})))()})),Object(g.jsxs)("div",{className:"comment",children:[Object(g.jsxs)("div",{className:"comment__thumbnail",children:[Object(g.jsx)("div",{className:"comment__img",children:s.userImage?Object(g.jsx)("img",{src:s.userImage,alt:""}):Object(g.jsx)(w.a,{icon:S.g,color:"#000"})}),Object(g.jsxs)("div",{className:"comment__user",children:[s.userName," : "]})]}),Object(g.jsx)("div",{className:"comment__text",children:t.text})]})},C=function(e){var t=e.nweetDbPath,c=e.userId,a=Object(n.useState)(""),s=Object(i.a)(a,2),r=s[0],j=s[1],u=function(){var e=Object(l.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),""===r){e.next=5;break}return e.next=4,Object(m.a)(Object(m.b)(h,"".concat(t,"/comments")),{text:r,creatorId:c,createdAt:Date.now()});case 4:j("");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsx)("div",{className:"comment-maker",children:Object(g.jsxs)("form",{onSubmit:u,children:[Object(g.jsx)("input",{onChange:function(e){var t=e.target.value;j(t)},value:r,type:"text"}),Object(g.jsx)("button",{children:"Add Comment"})]})})},U=function(e){var t=e.nweetObj,c=e.userId,a=Object(n.useState)(!1),s=Object(i.a)(a,2),r=s[0],j=s[1],u=Object(n.useState)(t.text),o=Object(i.a)(u,2),d=o[0],O=o[1],x=Object(n.useState)({userName:"",userImage:""}),p=Object(i.a)(x,2),_=p[0],N=p[1],k=Object(n.useState)(!1),U=Object(i.a)(k,2),E=U[0],L=U[1],D=Object(n.useState)(0),A=Object(i.a)(D,2),R=A[0],P=A[1],F=Object(n.useState)(!1),B=Object(i.a)(F,2),q=B[0],G=B[1],z=Object(n.useState)([]),M=Object(i.a)(z,2),T=M[0],H=M[1],J=Object(n.useState)(0),K=Object(i.a)(J,2),V=K[0],W=K[1],Q=Object(n.useState)(!1),X=Object(i.a)(Q,2),Y=X[0],Z=X[1],$=Object(n.useState)(!1),ee=Object(i.a)($,2),te=ee[0],ce=ee[1];Object(n.useEffect)((function(){t.creatorId===c&&L(!0);var e=Object(m.j)(Object(m.b)(h,"nweets/".concat(t.id,"/comments")),Object(m.i)("createdAt","desc")),n=Object(m.h)(e,(function(e){var t=[],c=0;e.forEach((function(e){var n=Object(y.a)(Object(y.a)({},e.data()),{},{id:e.id});t.push(n),c++})),H(t),W(c)}));return Object(l.a)(b.a.mark((function e(){var c,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.e)(Object(m.d)(h,"users",t.creatorId));case 2:(c=e.sent).exists()&&(n=c.data(),N({userName:n.userName,userImage:n.userImage}));case 4:case"end":return e.stop()}}),e)})))(),Object(l.a)(b.a.mark((function e(){var n,a,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(m.j)(Object(m.b)(h,"nweets/".concat(t.id,"/likes"))),e.next=3,Object(m.f)(n);case 3:a=e.sent,s=0,a.empty||a.forEach((function(e){e.id===c&&G(!0),s++})),P(s);case 7:case"end":return e.stop()}}),e)})))(),function(){n()}}),[]);var ne=function(){return j((function(e){return!e}))},ae=function(){var e=Object(l.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!q){e.next=7;break}return e.next=3,Object(m.c)(Object(m.d)(h,"nweets/".concat(t.id,"/likes"),c));case 3:G(!1),P((function(e){return e-1})),e.next=11;break;case 7:return e.next=9,Object(m.k)(Object(m.d)(h,"nweets/".concat(t.id,"/likes"),c),{});case 9:G(!0),P((function(e){return e+1}));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),se=function(){var e=Object(l.a)(b.a.mark((function e(c){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.next=3,Object(m.l)(Object(m.d)(h,"nweets",t.id),{text:d});case 3:j(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsx)("div",{className:"nweet",children:r?Object(g.jsxs)("form",{onSubmit:se,className:"nweet__edit",children:[Object(g.jsx)("input",{type:"text",placeholder:"Edit your nweet",value:d,onChange:function(e){var t=e.target.value;O(t)},required:!0}),Object(g.jsx)("input",{type:"submit",value:"Update",className:"nweet__edit-update"}),Object(g.jsx)("button",{onClick:ne,className:"nweet__edit-cancel",children:"Cancel"})]}):Object(g.jsxs)("div",{className:"nweet__item",children:[Object(g.jsxs)("div",{className:"nweet__item-box",children:[Object(g.jsxs)("div",{className:"nweet__item-profile",children:[Object(g.jsx)("div",{className:"nweet__item-profile-img",children:Boolean(_.userImage)?Object(g.jsx)("img",{src:_.userImage,alt:""}):Object(g.jsx)(w.a,{icon:S.g,color:"#000"})}),Object(g.jsx)("p",{className:"nweet__item-profile-name",children:_.userName}),Object(g.jsx)("p",{className:"nweet__item-profile-date",children:new Date(t.createdAt).toLocaleString()})]}),Object(g.jsxs)("div",{className:"nweet__item-content",children:[Object(g.jsx)("p",{className:"nweet__item-text",children:t.text}),t.attachmentUrl&&Object(g.jsx)("img",{src:t.attachmentUrl,className:"nweet__item-img",alt:""})]}),Object(g.jsxs)("div",{className:"nweet__item-menu",children:[Object(g.jsxs)("button",{className:"nweet__item-menu-comments"+(Y?" is-active":""),onClick:function(){te||ce(!0),Z(!Y)},children:[Object(g.jsx)(w.a,{icon:S.a}),V,Object(g.jsx)("span",{className:"blind",children:"Comments"})]}),Object(g.jsxs)("button",{className:"nweet__item-menu-likes"+(q?" is-active":""),onClick:ae,children:[Object(g.jsx)(w.a,{icon:S.d}),R,Object(g.jsx)("span",{className:"blind",children:"Likes"})]})]}),E&&Object(g.jsxs)("div",{className:"nweet__item-btns",children:[Object(g.jsxs)("button",{onClick:ne,children:[Object(g.jsx)(w.a,{icon:S.b}),Object(g.jsx)("span",{className:"blind",children:"Edit"})]}),Object(g.jsxs)("button",{onClick:function(){window.confirm("Are you sure you want to delete this nweet?")&&(Object(m.c)(Object(m.d)(h,"nweets",t.id)),""!==t.attachmentUrl&&Object(f.a)(Object(f.d)(v,t.attachmentUrl)))},children:[Object(g.jsx)(w.a,{icon:S.f}),Object(g.jsx)("span",{className:"blind",children:"Delete"})]})]})]}),Object(g.jsxs)("div",{className:"nweet__item-comments"+(Y?" is-open":""),children:[Object(g.jsx)(C,{nweetDbPath:"nweets/".concat(t.id),userId:c}),te&&T.map((function(e){return Object(g.jsx)(I,{commentObj:e},e.id)}))]})]})})},E=c(74),L=function(e){var t=e.userObj,c=Object(n.useState)(""),a=Object(i.a)(c,2),s=a[0],r=a[1],j=Object(n.useState)(""),u=Object(i.a)(j,2),o=u[0],d=u[1],O=function(){var e=Object(l.a)(b.a.mark((function e(c){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),n="",""===o){e.next=9;break}return a=Object(f.d)(v,"".concat(t.uid,"/").concat(Object(E.a)())),e.next=6,Object(f.e)(a,o,"data_url");case 6:return e.next=8,Object(f.b)(a);case 8:n=e.sent;case 9:return e.next=11,Object(m.a)(Object(m.b)(h,"nweets"),{text:s,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:n});case 11:return e.next=13,Object(m.e)(Object(m.d)(h,"users",t.uid));case 13:if(e.sent.exists()){e.next=17;break}return e.next=17,Object(m.k)(Object(m.d)(h,"users",t.uid),{userName:t.displayName,userImage:t.user.photoURL});case 17:r(""),d("");case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("form",{onSubmit:O,className:"nweet-maker",children:[Object(g.jsxs)("div",{className:"nweet-maker__area",children:[Object(g.jsx)("div",{className:"nweet-maker__content",children:Object(g.jsx)("input",{onChange:function(e){var t=e.target.value;r(t)},value:s,type:"text",placeholder:"What's on your mind?",maxLength:120})}),Object(g.jsxs)("div",{className:"nweet-maker__btns",children:[Object(g.jsx)("label",{htmlFor:"nweet-maker__inp-imgupload",children:o?"Change Image":"Upload Image"}),Object(g.jsx)("input",{onChange:function(e){var t=e.target.files[0],c=new FileReader;t&&(c.addEventListener("loadend",(function e(t){var n=t.currentTarget.result;d(n),c.removeEventListener("loadend",e)})),c.readAsDataURL(t))},id:"nweet-maker__inp-imgupload",type:"file",accept:"image/*",className:"blind"}),Object(g.jsx)("button",{type:"submit",children:"Nweet"})]})]}),o&&Object(g.jsxs)("div",{className:"nweet-maker__imgs",children:[Object(g.jsx)("p",{children:"Image Attachment : "}),Object(g.jsxs)("div",{className:"nweet-maker__img",children:[Object(g.jsx)("img",{src:o,alt:""}),Object(g.jsxs)("button",{onClick:function(e){e.preventDefault(),d(null)},children:[Object(g.jsx)(w.a,{icon:S.e,color:"#fff",size:"lg"})," ",Object(g.jsx)("span",{className:"blind",children:"Cancel Upload"})]})]})]})]})},D=function(e){var t=e.userObj,c=Object(n.useState)([]),a=Object(i.a)(c,2),s=a[0],r=a[1];return Object(n.useEffect)((function(){var e=Object(m.j)(Object(m.b)(h,"nweets"),Object(m.i)("createdAt","desc")),t=Object(m.h)(e,(function(e){var t=[];e.forEach((function(e){var c=Object(y.a)(Object(y.a)({},e.data()),{},{id:e.id});t.push(c)})),r(t)}));return function(){t()}}),[]),Object(g.jsxs)("div",{children:[Object(g.jsx)(L,{userObj:t}),Object(g.jsx)("div",{children:s.map((function(e){return Object(g.jsx)(U,{nweetObj:e,userId:t.uid},e.id)}))})]})},A=function(e){var t=e.userObj,c=e.refreshUser,a=Object(u.f)(),s=Object(n.useState)(!1),r=Object(i.a)(s,2),j=r[0],o=r[1],d=Object(n.useState)(t.displayName||""),x=Object(i.a)(d,2),_=x[0],N=x[1],k=Object(n.useState)(null),y=Object(i.a)(k,2),I=y[0],C=y[1],U=Object(n.useState)(null),L=Object(i.a)(U,2),D=L[0],A=L[1],R=Object(n.useRef)();Object(n.useEffect)((function(){Object(l.a)(b.a.mark((function e(){var c,n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.e)(Object(m.d)(h,"users",t.uid));case 2:(c=e.sent).exists()&&(n=c.data(),a=n.userImage,C(a),A(a));case 4:case"end":return e.stop()}}),e)})))()}),[]),Object(n.useEffect)((function(){j&&R.current.focus()}),[j]);var P=function(){var e=Object(l.a)(b.a.mark((function e(n){var a,s,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a={},D===I){e.next=16;break}if(""!==D){e.next=7;break}a.photoURL="",e.next=14;break;case 7:return s=Object(f.d)(v,"".concat(t.uid,"/profile/").concat(Object(E.a)())),e.next=10,Object(f.e)(s,D,"data_url");case 10:return e.next=12,Object(f.b)(s);case 12:r=e.sent,a.photoURL=r;case 14:Boolean(I)&&Object(f.a)(Object(f.d)(v,I)),C(a.photoURL);case 16:if(t.displayName!==_&&(a.displayName=_),D===I&&t.displayName===_){e.next=21;break}return e.next=20,Object(O.g)(t.user,a);case 20:c();case 21:o(!1);case 22:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{className:"profile",children:[Object(g.jsxs)("div",{className:"profile__info",children:[Object(g.jsxs)("div",{className:"profile__img",children:[Object(g.jsx)("div",{className:"profile__img-display",children:Boolean(D)?Object(g.jsx)("img",{src:D,alt:"profile"}):Object(g.jsx)(w.a,{icon:S.g,color:"#000"})}),j&&Object(g.jsxs)("div",{className:"profile__img-edit",children:[Object(g.jsx)("label",{htmlFor:"profile__inp-imgupload",children:Object(g.jsx)("span",{className:"blind",children:"Edit Profile Image"})}),Object(g.jsx)("input",{onChange:function(e){var t=e.target.files[0],c=new FileReader;c.addEventListener("loadend",(function e(t){var n=t.currentTarget.result;A(n),c.removeEventListener("loadend",e)})),t&&c.readAsDataURL(t)},type:"file",accept:"image/*",id:"profile__inp-imgupload",className:"blind"}),D&&Object(g.jsxs)("button",{onClick:function(){""!==D&&A("")},children:[Object(g.jsx)(w.a,{icon:S.f}),Object(g.jsx)("span",{className:"blind",children:"Remove Image"})]})]})]}),j?Object(g.jsx)("input",{onChange:function(e){var t=e.target.value;N(t)},ref:R,className:"profile__input-name",type:"text",placeholder:"Display name",value:_}):Object(g.jsxs)("h2",{children:[t.displayName,"'s Profile"]})]}),Object(g.jsx)("div",{className:"profile__control",children:j?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("button",{onClick:P,children:"Done"}),Object(g.jsx)("button",{onClick:function(){A(I),o(!1)},type:"button",children:"Cancel"})]}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("button",{onClick:function(){return o(!0)},type:"button",children:"Edit Profile"}),Object(g.jsx)("button",{onClick:function(){p.signOut(),a.push("/")},type:"button",children:"Log Out"})]})})]})},R=function(e){var t=e.userObj;return Object(g.jsx)("nav",{className:"header",children:Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:Object(g.jsxs)(j.b,{to:"/",title:"Go to Home",children:[Object(g.jsx)(w.a,{icon:S.c,color:"#fff"})," ",Object(g.jsx)("span",{className:"blind",children:"Home"})]})}),Object(g.jsx)("li",{children:Object(g.jsxs)(j.b,{to:"/profile",title:"Go to My Profile",children:[Object(g.jsx)(w.a,{icon:S.g,color:"#fff"}),Object(g.jsxs)("span",{className:"blind",children:[t.displayName," Profile"]})]})})]})})},P=function(e){var t=e.isLoggedIn,c=e.userObj,n=e.refreshUser;return Object(g.jsxs)(j.a,{children:[t&&Object(g.jsx)(R,{userObj:c}),Object(g.jsx)("div",{className:"approuter",children:Object(g.jsx)(u.c,{children:t?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(u.a,{exact:!0,path:"/",children:Object(g.jsx)(D,{userObj:c})}),Object(g.jsx)(u.a,{exact:!0,path:"/profile",children:Object(g.jsx)(A,{userObj:c,refreshUser:n})})]}):Object(g.jsx)(u.a,{exact:!0,path:"/",children:Object(g.jsx)(k,{refreshUser:n})})})})]})},F=document.documentElement,B=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)({}),r=Object(i.a)(s,2),j=r[0],u=r[1];Object(n.useEffect)((function(){p.onAuthStateChanged((function(e){u(e?{displayName:e.displayName,uid:e.uid,user:e}:null),a(!0)}))}),[]),Object(n.useEffect)((function(){F.classList.toggle("is-loggedin",Boolean(j))}),[j]);return Object(g.jsx)("div",{className:"app",children:c?Object(g.jsx)(P,{userObj:j,isLoggedIn:Boolean(j),refreshUser:function(){var e=p.currentUser;u({displayName:e.displayName,uid:e.uid,user:e});var t=Object(m.d)(h,"users",e.uid);Object(m.k)(t,{userName:e.displayName,userImage:e.photoURL},{merge:!0})}}):"initializing"})};c(70),c(71),c(72);r.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(B,{})}),document.querySelector("#root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.6502599d.chunk.js.map