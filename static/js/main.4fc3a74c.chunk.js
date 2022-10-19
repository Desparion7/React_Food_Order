(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__XHeWz",total:"Cart_total__37V2b",actions:"Cart_actions__1olm4","button--alt":"Cart_button--alt__2VIJ-",button:"Cart_button__3zN0Y"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__13UnU",summary:"CartItem_summary__WeszC",price:"CartItem_price__2Zhu_",amount:"CartItem_amount__nmtmq",actions:"CartItem_actions__Wrbqu"}},,function(e,t,n){e.exports={button:"HeaderCartButton_button__1ErGG",icon:"HeaderCartButton_icon__3T5VQ",badge:"HeaderCartButton_badge__pKyoy",bump:"HeaderCartButton_bump__3vBhe"}},,,function(e,t,n){e.exports={meal:"MealItem_meal__Pt0m1",description:"MealItem_description__2zPo8",price:"MealItem_price__3oxJ9"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__10HbG",modal:"Modal_modal__2gW1k","slide-down":"Modal_slide-down__3m4X3"}},function(e,t,n){e.exports={header:"Header_header__3cATT","main-image":"Header_main-image__2VqzY"}},,,,function(e,t,n){e.exports={summary:"MealsSummary_summary__2AUji"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__-4tab","meals-appear":"AvailableMeals_meals-appear__2-TRt"}},function(e,t,n){e.exports={card:"Card_card__2we78"}},function(e,t,n){e.exports={form:"MealItemForm_form__3Nstd"}},function(e,t,n){e.exports={input:"Input_input__1Dxm-"}},,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(15),c=n.n(a),i=(n(28),n(3)),r=n(1),s=n.n(r),o=n(12),l=n.n(o),m=n.p+"static/media/meals.677018bb.jpg",d=n(7),u=n.n(d),j=n(0),b=function(){return Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(j.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},x=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),O=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useContext)(x),o=s.items,l=s.items.reduce((function(e,t){return e+t.amount}),0),m="".concat(u.a.button," ").concat(a?u.a.bump:"");return Object(r.useEffect)((function(){if(0!==o.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[o]),Object(j.jsxs)("button",{className:m,onClick:e.onClick,children:[Object(j.jsx)("span",{className:u.a.icon,children:Object(j.jsx)(b,{})}),Object(j.jsx)("span",{children:" Your Cart"}),Object(j.jsxs)("span",{className:u.a.badge,children:[" ",l]})]})},h=function(e){return Object(j.jsxs)(s.a.Fragment,{children:[Object(j.jsxs)("header",{className:l.a.header,children:[Object(j.jsx)("h1",{children:"ReactMeals"}),Object(j.jsx)(O,{onClick:e.showCart})]}),Object(j.jsx)("div",{className:l.a["main-image"],children:Object(j.jsx)("img",{src:m,alt:"Meals on tabel"})})]})},p=n(16),_=n.n(p),f=function(){return Object(j.jsxs)("section",{className:_.a.summary,children:[Object(j.jsx)("h2",{children:"Delicious Food, Delivered to You, "}),Object(j.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(j.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(17),C=n.n(v),g=n(18),N=n.n(g),A=function(e){return Object(j.jsx)("div",{className:N.a.card,children:e.children})},y=n(10),I=n.n(y),M=n(19),w=n.n(M),k=n(2),H=n(20),B=n.n(H),F=s.a.forwardRef((function(e,t){return Object(j.jsxs)("div",{className:B.a.input,children:[Object(j.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(j.jsx)("input",Object(k.a)({ref:t,id:e.input.id},e.input))]})})),R=function(e){var t=Object(r.useState)(!0),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useRef)();return Object(j.jsxs)("form",{className:w.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,a=+n;0===n.trim().lenght||a<1||a>5?c(!1):e.onAddToCart(a)},children:[Object(j.jsx)(F,{ref:s,label:"Amount",input:{id:"amount"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(j.jsx)("button",{children:" + Add"}),!a&&Object(j.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},z=function(e){var t="$".concat(e.price.toFixed(2)),n=Object(r.useContext)(x);return Object(j.jsxs)("li",{className:I.a.meal,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:e.name}),Object(j.jsx)("div",{className:I.a.description,children:e.description}),Object(j.jsx)("div",{className:I.a.price,children:t})]}),Object(j.jsx)("div",{children:Object(j.jsx)(R,{onAddToCart:function(t){n.addItem({id:e.id,name:e.name,amount:t,price:e.price})},id:e.id})})]})},T=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}],D=function(){var e=T.map((function(e){return Object(j.jsx)(z,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(j.jsx)("section",{className:C.a.meals,children:Object(j.jsx)(A,{children:Object(j.jsx)("ul",{children:e})})})},E=function(e){return Object(j.jsxs)(s.a.Fragment,{children:[Object(j.jsx)(f,{}),Object(j.jsx)(D,{})]})},S=n(4),V=n.n(S),P=n(8),q=n.n(P),G=n(11),J=n.n(G),W=function(e){return Object(j.jsx)("div",{className:J.a.backdrop,onClick:e.hideCart})},Y=function(e){return Object(j.jsx)("div",{className:J.a.modal,children:Object(j.jsx)("div",{className:J.a.content,children:e.children})})},U=document.getElementById("overlays"),$=function(e){return Object(j.jsxs)(s.a.Fragment,{children:[q.a.createPortal(Object(j.jsx)(W,{hideCart:e.hideCart}),U),q.a.createPortal(Object(j.jsx)(Y,{children:e.children}),U)]})},X=n(5),K=n.n(X),Q=function(e){var t="$".concat(e.price.toFixed(2));return Object(j.jsxs)("li",{className:K.a["cart-item"],children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:e.name}),Object(j.jsxs)("div",{className:K.a.summary,children:[Object(j.jsx)("span",{className:K.a.price,children:t}),Object(j.jsxs)("span",{className:K.a.amount,children:["x ",e.amount]})]})]}),Object(j.jsxs)("div",{className:K.a.actions,children:[Object(j.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(j.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},Z=function(e){var t=Object(r.useContext)(x),n="$".concat(t.totalAmount.toFixed(2)),a=t.items.length>0,c=function(e){t.removeItem(e)},i=function(e){t.addItem(Object(k.a)(Object(k.a)({},e),{},{amount:1}))},s=Object(j.jsx)("ul",{className:V.a["cart-items"],children:t.items.map((function(e){return Object(j.jsx)(Q,{name:e.name,amount:e.amount,price:e.price,onRemove:c.bind(null,e.id),onAdd:i.bind(null,e)},e.id)}))});return Object(j.jsxs)($,{hideCart:e.onClose,children:[s,Object(j.jsxs)("div",{className:V.a.total,children:[Object(j.jsx)("span",{children:" Total Amount"}),Object(j.jsx)("span",{children:n})]}),Object(j.jsxs)("div",{className:V.a.actions,children:[Object(j.jsx)("button",{className:V.a["button--alt"],onClick:e.onClose,children:"Close"}),a&&Object(j.jsx)("button",{className:V.a.button,children:"Order"})]})]})},L=n(13),ee={items:[],totalAmount:0},te=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[c];if(i){var r=Object(k.a)(Object(k.a)({},i),{},{amount:i.amount+t.item.amount});(n=Object(L.a)(e.items))[c]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],m=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var d=Object(k.a)(Object(k.a)({},l),{},{amount:l.amount-1});(s=Object(L.a)(e.items))[o]=d}return{items:s,totalAmount:m}}return ee},ne=function(e){var t=Object(r.useReducer)(te,ee),n=Object(i.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})}};return Object(j.jsx)(x.Provider,{value:s,children:e.children})};var ae=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(j.jsxs)(ne,{children:[n&&Object(j.jsx)(Z,{onClose:function(){a(!1)}}),Object(j.jsx)(h,{showCart:function(){a(!0)}}),Object(j.jsx)("main",{children:Object(j.jsx)(E,{})})]})};c.a.createRoot(document.getElementById("root")).render(Object(j.jsx)(ae,{}))}],[[30,1,2]]]);
//# sourceMappingURL=main.4fc3a74c.chunk.js.map