(this.webpackJsonpproyecto=this.webpackJsonpproyecto||[]).push([[0],{100:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),r=c(38),s=c.n(r),i=(c(82),c(83),c(18)),j=c(20),l=c(22),o=c(76),d=c(61),b=c(75),O=c(2);function m(e){return Object(O.jsxs)("picture",{children:[Object(O.jsx)("source",{media:"(min-width:650px)",srcSet:e.logoDsk}),Object(O.jsx)("img",{alt:"Musiclave - Tu musica est\xe1 por nacer",src:e.logoMbl,className:"logo"})]})}var u=c(8),h=c(40),x=c(26),p=c(1),f=c.n(p),v=c(5),g=c(17),N=c(28),y=c(73),C=Object(y.a)({apiKey:"AIzaSyCBK0HMerE9D9QytMB3ODg8AZsiipsv0Cc",authDomain:"musiclave-6b3d6.firebaseapp.com",projectId:"musiclave-6b3d6",storageBucket:"musiclave-6b3d6.appspot.com",messagingSenderId:"851969229083",appId:"1:851969229083:web:46adecefb97638370a53be"}),k=function(){return Object(N.e)(C)},I=Object(a.createContext)(),z=function(e){var t=e.children,c=Object(a.useState)([]),n=Object(g.a)(c,2),r=n[0],s=n[1],i=Object(a.useState)(0),j=Object(g.a)(i,2),l=j[0],o=j[1],d=Object(a.useState)(0),b=Object(g.a)(d,2),m=b[0],p=b[1],y=Object(a.useState)({nombre:"",apellido:"",email:"",tel:""}),C=Object(g.a)(y,2),z=C[0],P=C[1],S=Object(a.useState)(""),w=Object(g.a)(S,2),D=w[0],T=w[1],B=Object(a.useState)(!1),E=Object(g.a)(B,2),A=E[0],F=E[1],q=function(){var e=Object(v.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F(!0),e.prev=1,e.next=4,Object(N.b)(Object(N.c)(k(),"orders"),{buyer:z,items:r,date:N.a.fromDate(new Date),total:m});case 4:t=e.sent,T(t.id),$(),F(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.error("Error adding document: ",e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}(),M=function(e){return r.filter((function(t){return t.id===e})).length>0},$=function(){s([])};return Object(a.useEffect)((function(){var e,t=0,c=Object(u.a)(r);try{for(c.s();!(e=c.n()).done;){t+=e.value.quantity}}catch(i){c.e(i)}finally{c.f()}o(t);var a,n=0,s=Object(u.a)(r);try{for(s.s();!(a=s.n()).done;){n+=a.value.price}}catch(i){s.e(i)}finally{s.f()}p(n)}),[r]),Object(O.jsx)(I.Provider,{value:{myCart:r,setMyCart:s,addItem:function(e,t){var c=r,a=Object(x.a)({},e).price*t,n={id:e.id,name:e.name,img:e.img,price:a,quantity:t};if(M(Object(x.a)({},e).id)){var i=c.findIndex((function(t){return t.id===Object(x.a)({},e).id}));(c=c.filter((function(t){return t.id!==Object(x.a)({},e).id}))).splice(i,0,n),s(c)}else c=[].concat(Object(h.a)(c),[n]),s(c)},isInCart:M,itemsInCart:l,setItemsInCart:o,removeItem:function(e){var t=r.filter((function(t){return t.id!==e}));s(t)},vaciarCarrito:$,totalPrice:m,setTotalPrice:p,finalizarCompra:q,formatPrice:function(e){return new Intl.NumberFormat("es-AR").format(e)},user:z,setUser:P,purchaseId:D,loading:A},children:t})};function P(e){var t=Object(a.useContext)(I).itemsInCart;return Object(O.jsxs)(i.b,{to:"/Cart",className:"cartIco",role:"button",children:[Object(O.jsx)("i",{className:"fas fa-shopping-cart"}),0===t?"":Object(O.jsx)("span",{children:t})]})}c(91);function S(){return Object(O.jsx)(d.a,{collapseOnSelect:!0,expand:"lg",children:Object(O.jsxs)(l.a,{children:[Object(O.jsx)(i.b,{to:"/",className:"navbar-brand",children:Object(O.jsx)(m,{logoDsk:"./media/logo-musiclave-70.png",logoMbl:"./media/logo-musiclave-40.png"})}),Object(O.jsx)(d.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(O.jsx)(d.a.Collapse,{id:"responsive-navbar-nav",children:Object(O.jsxs)(o.a,{className:"navItems",children:[Object(O.jsx)(i.b,{to:"/",className:"nav-link",children:"Home"}),Object(O.jsxs)(b.a,{title:"Categor\xedas",id:"basic-nav-dropdown",children:[Object(O.jsx)(i.b,{to:"/category/guitarras",className:"dropdown-item",role:"button",children:"Guitarras"}),Object(O.jsx)(i.b,{to:"/category/bajos",className:"dropdown-item",role:"button",children:"Bajos"}),Object(O.jsx)(i.b,{to:"/category/amplificadores",className:"dropdown-item",role:"button",children:"Amplificadores"})]})]})}),Object(O.jsx)(P,{})]})})}c(65),c(94);var w=c(19),D=c(42);function T(e){var t=Object(a.useContext)(I).formatPrice;return Object(O.jsx)("div",{className:"col-lg-3 col-md-6",children:Object(O.jsx)(i.b,{to:"/item/".concat(e.id),children:Object(O.jsxs)(D.a,{children:[Object(O.jsx)(D.a.Img,{variant:"top",src:e.img}),Object(O.jsxs)(D.a.Body,{children:[Object(O.jsxs)(D.a.Title,{className:"cardPrice",children:["$ ",t(e.price)]}),Object(O.jsx)(D.a.Title,{children:e.name}),Object(O.jsx)(D.a.Text,{className:"cardDesc",children:e.description}),Object(O.jsx)(D.a.Text,{className:"cardGo",children:"ver detalle"})]})]})})})}function B(e){var t=e.products;return Object(O.jsx)(l.a,{className:"productList",children:Object(O.jsx)(w.a,{children:t.map((function(e){return Object(a.createElement)(T,Object(x.a)(Object(x.a)({},e),{},{key:e.id}))}))})})}var E=c(16),A=c(21);function F(){return Object(O.jsx)(l.a,{children:Object(O.jsxs)(w.a,{children:[Object(O.jsx)(E.a,{md:12,className:"centered",children:Object(O.jsx)("h2",{children:"Oh oh! Parece que no hay nada por aqu\xed..."})}),Object(O.jsx)(E.a,{md:12,className:"centered",children:Object(O.jsx)(i.b,{to:"/",children:Object(O.jsx)(A.a,{variant:"primary",size:"lg",children:"\xa1Empez\xe1 a comprar y dej\xe1 tu m\xfasica fluir!"})})})]})})}function q(){var e=Object(a.useState)([]),t=Object(g.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(!1),s=Object(g.a)(r,2),i=s[0],l=s[1],o=Object(a.useState)(!1),d=Object(g.a)(o,2),b=d[0],m=d[1],u=Object(j.f)().category;return Object(a.useEffect)((function(){l(!0);var e=function(){var e=Object(v.a)(f.a.mark((function e(){var t,c,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(N.c)(k(),"productos"),e.next=3,Object(N.d)(t);case 3:c=e.sent,a=c.docs.map((function(e){return Object(x.a)({id:e.id},e.data())})),l(!1),n(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();void 0!==u?function(){var e=Object(v.a)(f.a.mark((function e(){var t,c,a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(N.c)(k(),"productos"),c=Object(N.f)(t,Object(N.g)("category","==","".concat(u))),e.prev=2,e.next=5,Object(N.d)(c);case 5:a=e.sent,r=a.docs.map((function(e){return Object(x.a)({id:e.id},e.data())})),l(!1),n(r),0===r.length&&m(!0),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}()():e()}),[u]),i?Object(O.jsxs)("div",{className:"lds-ripple",children:[Object(O.jsx)("div",{}),Object(O.jsx)("div",{})]}):b?Object(O.jsx)(F,{}):Object(O.jsx)(B,{products:c})}c(95),c(96);function M(e){var t=e.stock,c=e.initial,n=e.onAdd,r=Object(a.useState)(parseInt(c)),s=Object(g.a)(r,2),i=s[0],j=s[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"counter",children:[Object(O.jsx)(A.a,{variant:"secondary",size:"lg",text:"-",onClick:function(){i>0&&j(i-1)},children:"-"}),Object(O.jsx)("p",{style:{margin:"0"},children:i}),Object(O.jsx)(A.a,{variant:"secondary",size:"lg",text:"+",onClick:function(){i<t&&j(i+1)},children:"+"})]}),i>0&&Object(O.jsx)(A.a,{className:"addButton",variant:"primary",size:"lg",onClick:function(){return n(i)},children:"Agregar al carrito"})]})}function $(e){var t=Object(a.useContext)(I),c=t.myCart,n=t.addItem,r=t.formatPrice,s=Object(a.useState)(!1),j=Object(g.a)(s,2),o=j[0],d=j[1],b=Object(a.useState)(e.initial),m=Object(g.a)(b,2),u=m[0],h=m[1];Object(a.useEffect)((function(){var t=c.findIndex((function(t){return t.id===e.id}));if(t>=0){var a=c[t].quantity;h(a),console.log("myCart al cargar con initial: ".concat(a," es"),c)}}),[c,e.id,e.initial,e.stock]);return Object(O.jsxs)(l.a,{children:[Object(O.jsxs)(w.a,{className:"mainDetail",children:[Object(O.jsx)(E.a,{lg:6,children:Object(O.jsx)("div",{className:"detailImageContainer",children:Object(O.jsx)("img",{className:"detailImage",src:e.img,alt:e.name})})}),Object(O.jsxs)(E.a,{lg:6,className:"colDetail",children:[Object(O.jsx)("h1",{className:"detailName",children:e.name}),Object(O.jsxs)("h2",{className:"price",children:["Precio: $ ",r(e.price)]}),0===e.stock?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(A.a,{className:"endButton",variant:"primary",size:"lg",disabled:!0,children:"Sin stock"}),Object(O.jsx)(i.b,{to:"/",children:Object(O.jsx)("p",{className:"price",children:"Seguir comprando!"})})]}):o?Object(O.jsx)(i.b,{to:"/Cart",children:Object(O.jsx)(A.a,{className:"endButton",variant:"primary",size:"lg",children:"Finalizar compra"})}):Object(O.jsx)(M,{initial:u,stock:e.stock,onAdd:function(t){return c=t,d(!o),void n(e,c);var c}})]})]}),Object(O.jsx)(w.a,{className:"description",children:Object(O.jsxs)(E.a,{children:[Object(O.jsx)("h4",{children:"Descripci\xf3n:"}),Object(O.jsx)("p",{children:e.description})]})})]})}function V(){var e=Object(a.useState)([]),t=Object(g.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(!1),s=Object(g.a)(r,2),i=s[0],o=s[1],d=Object(a.useState)(!1),b=Object(g.a)(d,2),m=b[0],u=b[1],h=Object(j.f)().id;return Object(a.useEffect)((function(){o(!0),function(){var e=Object(v.a)(f.a.mark((function e(){var t,c,a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(N.c)(k(),"productos"),e.next=3,Object(N.d)(t);case 3:c=e.sent,a=c.docs.map((function(e){return Object(x.a)({id:e.id},e.data())})),r=a.filter((function(e){return e.id===h})),o(!1),n(r),0===r.length&&u(!0);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[h]),i?Object(O.jsxs)("div",{className:"lds-ripple",children:[Object(O.jsx)("div",{}),Object(O.jsx)("div",{})]}):m?Object(O.jsx)(F,{}):Object(O.jsx)(l.a,{children:c.map((function(e){return Object(O.jsx)($,{id:e.id,name:e.name,img:e.img,price:e.price,description:e.description,stock:e.stock,initial:e.initial},e.id)}))})}c(97);function H(){var e=Object(a.useContext)(I),t=e.myCart,c=e.removeItem,n=e.itemsInCart,r=e.vaciarCarrito,s=e.totalPrice,j=e.formatPrice;return n<=0?Object(O.jsxs)(l.a,{children:[Object(O.jsx)(w.a,{children:Object(O.jsx)("h1",{children:"Carrito"})}),Object(O.jsxs)(w.a,{children:[Object(O.jsx)(E.a,{md:12,className:"centered",children:Object(O.jsx)("h2",{children:"Oh oh! Parece que no hay nada por aqu\xed..."})}),Object(O.jsx)(E.a,{md:12,className:"centered",children:Object(O.jsx)(i.b,{to:"/",children:Object(O.jsx)(A.a,{variant:"primary",size:"lg",children:"\xa1Empez\xe1 a comprar y dej\xe1 tu m\xfasica fluir!"})})})]})]}):Object(O.jsxs)(l.a,{children:[Object(O.jsx)(w.a,{children:Object(O.jsx)("h1",{children:"Carrito"})}),Object(O.jsxs)(w.a,{className:"th",children:[Object(O.jsx)(E.a,{md:8,children:"Productos"}),Object(O.jsx)(E.a,{md:1,className:"centered",children:"Cantidad"}),Object(O.jsx)(E.a,{md:2,className:"centered",children:"Precio"}),Object(O.jsx)(E.a,{md:1,className:"centered",children:"Acciones"})]}),t.map((function(e){return Object(O.jsxs)(w.a,{className:"td",children:[Object(O.jsx)(E.a,{md:1,className:"imgProducto",children:Object(O.jsx)("img",{src:e.img,alt:e.name})}),Object(O.jsx)(E.a,{md:7,className:"nombreProducto",children:e.name}),Object(O.jsx)(E.a,{md:1,className:"centered",children:e.quantity}),Object(O.jsxs)(E.a,{md:2,className:"centered",children:["$ ",j(e.price)]}),Object(O.jsxs)(E.a,{md:1,className:"action",children:[Object(O.jsx)(i.b,{to:"/item/".concat(e.id),children:Object(O.jsx)(A.a,{variant:"primary",size:"sm",alt:"Editar",children:Object(O.jsx)("i",{className:"fas fa-pencil"})})}),Object(O.jsx)(A.a,{variant:"danger",size:"sm",alt:"Eliminar",onClick:function(){return c(e.id)},children:Object(O.jsx)("i",{className:"far fa-trash"})})]})]},e.id)})),Object(O.jsxs)(w.a,{className:"endControls",children:[Object(O.jsxs)("h3",{children:["Total: $ ",j(s)]}),Object(O.jsx)(i.b,{to:"/checkout",children:Object(O.jsxs)(A.a,{variant:"primary",size:"sm",alt:"Finalizar Compra",className:"emptyButton",children:[Object(O.jsx)("i",{className:"far fa-check"})," Finalizar Compra"]})}),Object(O.jsxs)(A.a,{variant:"danger",size:"sm",alt:"Vaciar carrito",onClick:function(){return r()},className:"emptyButton",children:[Object(O.jsx)("i",{className:"far fa-trash"})," Vaciar"]})]})]})}var J=c(14),L=c(69),R=(c(72),function(e){var t=e.item,c=e.onValueChange;return Object(O.jsx)(E.a,{className:"mb-3",md:6,children:Object(O.jsx)(L.a.Control,{type:t.type,placeholder:t.title,onChange:function(e){return c(e.target.value,t.key)}})})});function G(){var e=Object(a.useContext)(I),t=e.myCart,c=e.totalPrice,n=e.finalizarCompra,r=e.formatPrice,s=e.user,j=e.setUser,o=function(e,t){j(Object(x.a)(Object(x.a)({},s),{},Object(J.a)({},t,e)))},d=""===s.nombre||""===s.apellido||""===s.email||""===s.tel;return Object(O.jsxs)(l.a,{children:[Object(O.jsx)(w.a,{children:Object(O.jsx)("h1",{children:"Ya casi es tuyo!"})}),Object(O.jsx)(w.a,{children:Object(O.jsx)("h2",{className:"checkoutDetalle",children:"Detalle de tu compra:"})}),Object(O.jsxs)(w.a,{className:"th",children:[Object(O.jsx)(E.a,{md:9,children:"Productos"}),Object(O.jsx)(E.a,{md:1,className:"centered",children:"Cantidad"}),Object(O.jsx)(E.a,{md:2,className:"centered",children:"Precio"})]}),t.map((function(e){return Object(O.jsxs)(w.a,{className:"td",children:[Object(O.jsx)(E.a,{md:1,className:"imgProducto",children:Object(O.jsx)("img",{src:e.img,alt:e.name})}),Object(O.jsx)(E.a,{md:8,className:"nombreProducto",children:e.name}),Object(O.jsx)(E.a,{md:1,className:"centered",children:e.quantity}),Object(O.jsxs)(E.a,{md:2,className:"centered",children:["$ ",r(e.price)]})]},e.id)})),Object(O.jsx)(w.a,{className:"checkOutTotal",children:Object(O.jsxs)("h3",{children:["Total: $ ",r(c)]})}),Object(O.jsx)(w.a,{children:Object(O.jsxs)(E.a,{md:{span:6,offset:3},children:[Object(O.jsx)("p",{children:"Por favor complet\xe1 los siguientes datos para finalizar la compra:"}),Object(O.jsx)(L.a,{children:Object(O.jsxs)(w.a,{children:[[{title:"Nombre",key:"nombre",type:"text"},{title:"Apellido",key:"apellido",type:"text"},{title:"E-mail",key:"email",type:"email"},{title:"Tel\xe9fono",key:"tel",type:"number"}].map((function(e){return Object(O.jsx)(R,{item:e,onValueChange:o},e.title)})),Object(O.jsx)(E.a,{className:"mb-3",lg:{span:6,offset:3},children:Object(O.jsx)(i.b,{to:"/Checkout-ok",children:Object(O.jsxs)(A.a,{disabled:d,variant:"primary",size:"lg",alt:"Vaciar carrito",onClick:function(){return n()},className:"sendButton",children:[Object(O.jsx)("i",{className:"far fa-check"})," Confirmar Compra"]})})}),Object(O.jsx)(E.a,{className:"mb-3",lg:3,children:Object(O.jsx)(i.b,{to:"/Cart",children:Object(O.jsxs)(A.a,{variant:"danger",size:"lg",alt:"volver",className:"sendButton",children:[Object(O.jsx)("i",{className:"far fa-arrow-left"})," volver"]})})})]})})]})})]})}function K(){var e=Object(a.useContext)(I),t=e.purchaseId;return e.loading?Object(O.jsxs)("div",{className:"lds-ripple",children:[Object(O.jsx)("div",{}),Object(O.jsx)("div",{})]}):Object(O.jsxs)(l.a,{children:[Object(O.jsx)(w.a,{children:Object(O.jsx)("h1",{children:"Felicitaciones!"})}),Object(O.jsx)(w.a,{children:Object(O.jsx)("h3",{className:"checkoutDetalle",children:"Tu compra se realiz\xf3 con exito!"})}),Object(O.jsx)(w.a,{children:Object(O.jsxs)("h2",{className:"checkoutDetalle",children:["Tu n\xfamero de seguimiento es: ",t]})})]})}c(98);function U(){return Object(O.jsxs)(l.a,{children:[Object(O.jsx)(i.b,{to:"/",className:"footer-brand",children:Object(O.jsx)(m,{logoDsk:"./media/logo-musiclave-70.png",logoMbl:"./media/logo-musiclave-40.png"})}),Object(O.jsxs)("p",{children:["\xa9Ruso87 de Andr\xe9s Hern\xe1ndez. ",Object(O.jsx)("a",{href:"https://github.com/ruso87",children:Object(O.jsx)("i",{className:"fab fa-github"})})]}),Object(O.jsx)("p",{children:"Musiclave es una empresa inventada por Andr\xe9s Hern\xe1ndez como entrega final del curso de React JS."})]})}var Q=function(){return Object(O.jsx)(z,{children:Object(O.jsxs)(i.a,{basename:"/",children:[Object(O.jsx)("header",{children:Object(O.jsx)(S,{})}),Object(O.jsxs)(j.c,{children:[Object(O.jsx)(j.a,{exact:!0,path:"/",children:Object(O.jsx)("section",{className:"mainContent",children:Object(O.jsx)(q,{})})}),Object(O.jsx)(j.a,{exact:!0,path:"/category/:category",children:Object(O.jsx)("section",{className:"mainContent",children:Object(O.jsx)(q,{})})}),Object(O.jsx)(j.a,{exact:!0,path:"/item/:id",children:Object(O.jsx)("section",{className:"mainContent",children:Object(O.jsx)(V,{})})}),Object(O.jsx)(j.a,{exact:!0,path:"/cart",children:Object(O.jsx)("section",{className:"mainContent",children:Object(O.jsx)(H,{})})}),Object(O.jsx)(j.a,{exact:!0,path:"/checkout",children:Object(O.jsx)("section",{className:"mainContent",children:Object(O.jsx)(G,{})})}),Object(O.jsx)(j.a,{exact:!0,path:"/checkout-ok",children:Object(O.jsx)("section",{className:"mainContent",children:Object(O.jsx)(K,{})})}),Object(O.jsx)(j.a,{path:"*",children:Object(O.jsx)("section",{className:"mainContent",children:Object(O.jsx)(F,{})})})]}),Object(O.jsx)("footer",{children:Object(O.jsx)(U,{})})]})})},Y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,105)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))};c(99);s.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(Q,{})}),document.getElementById("root")),Y()},65:function(e,t,c){},72:function(e,t,c){},82:function(e,t,c){},83:function(e,t,c){},91:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){},98:function(e,t,c){}},[[100,1,2]]]);
//# sourceMappingURL=main.f32e01f1.chunk.js.map