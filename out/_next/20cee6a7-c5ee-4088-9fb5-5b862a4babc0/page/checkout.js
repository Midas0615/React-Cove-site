
          window.__NEXT_REGISTER_PAGE('/checkout', function() {
            var comp = module.exports=webpackJsonp([4],{23:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(67),c=l(n),r=a(0),d=l(r),s=a(68),o=l(s),u=function(e){var t=(0,o.default)();return d.default.createElement("div",{className:"jsx-89290948"},d.default.createElement("input",{type:"checkbox",id:t,checked:e.checked,onClick:e.clickHandler,className:"jsx-89290948"}),d.default.createElement("label",{htmlFor:t,className:"jsx-89290948"},e.label),d.default.createElement(c.default,{styleId:"89290948",css:['[type="checkbox"].jsx-89290948{display:none;}','[type="checkbox"]:not(:checked).jsx-89290948,[type="checkbox"]:checked.jsx-89290948{position:absolute;left:-9999px;}','[type="checkbox"]:not(:checked).jsx-89290948+label.jsx-89290948,[type="checkbox"]:checked.jsx-89290948+label.jsx-89290948{position:relative;padding-left:32px;cursor:pointer;margin-bottom:4px;display:inline-block;font-size:16px;}','[type="checkbox"]:not(:checked).jsx-89290948+label.jsx-89290948:before,[type="checkbox"]:checked.jsx-89290948+label.jsx-89290948:before{content:\'\';position:absolute;left:0px;top:0px;width:24px;height:24px;border:2px solid #cccccc;background:#ffffff;border-radius:4px;box-shadow:inset 0 1px 3px rgba(0,0,0,.1);}','[type="checkbox"]:not(:checked).jsx-89290948+label.jsx-89290948:after,[type="checkbox"]:checked.jsx-89290948+label.jsx-89290948:after{content:\'✔\';position:absolute;top:0px;left:6px;font-size:20px;line-height:1.2;color:#09ad7e;-webkit-transition:all .2s;transition:all .2s;}','[type="checkbox"]:not(:checked).jsx-89290948+label.jsx-89290948:after{opacity:0;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}','[type="checkbox"]:checked.jsx-89290948+label.jsx-89290948:after{opacity:1;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}','[type="checkbox"]:disabled:not(:checked).jsx-89290948+label.jsx-89290948:before,[type="checkbox"]:disabled:checked.jsx-89290948+label.jsx-89290948:before{box-shadow:none;border-color:#999999;background-color:#dddddd;}','[type="checkbox"]:disabled:checked.jsx-89290948+label.jsx-89290948:after{color:#999999;}','[type="checkbox"]:disabled.jsx-89290948+label.jsx-89290948{color:#aaaaaa;}','[type="checkbox"]:checked:focus.jsx-89290948+label.jsx-89290948:before,[type="checkbox"]:not(:checked).jsx-89290948:focus+label.jsx-89290948:before{border:2px dotted #0000ff;}',"label.jsx-89290948:hover.jsx-89290948:before{border:2px solid #4778d9!important;background:#ffffff;}"]}))};t.default=u},257:function(e,t,a){e.exports=a(258)},258:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(29),c=l(n),r=a(34),d=l(r),s=a(4),o=l(s),u=a(1),i=l(u),f=a(2),m=l(f),p=a(5),E=l(p),h=a(6),_=l(h),g=a(0),b=l(g),x=a(3),C=a(14),k=l(C),v=a(11),y=a(47),N=l(y),w=a(22),S=a(38),R=l(S),I=a(27),j=l(I),P=a(10),M=(l(P),a(49)),A=l(M),T=a(50),D=l(T),F=a(51),L=l(F),O=a(52),q=l(O),B={checkoutSidebar:"checkout__checkoutSidebar___iuLWh",flexCol:"checkout__flexCol___2fDTZ",stageLabel:"checkout__stageLabel___1RvAJ",activeStage:"checkout__activeStage___qtrXI",shoppingCartBtnContainer:"checkout__shoppingCartBtnContainer___1RwMD",shoppingCartBtn:"checkout__shoppingCartBtn___192K-",spacer:"checkout__spacer___1sRer",checkoutStageRow:"checkout__checkoutStageRow___3tRo-",stageIndicator:"checkout__stageIndicator___34_mo",footerControls:"checkout__footerControls___EZr8o",returnLink:"checkout__returnLink___2Yl4Y",actionBtn:"checkout__actionBtn___1kd79",tab:"checkout__tab___3a8Vn",activePage:"checkout__activePage___2bsuR",returnToShop:"checkout__returnToShop___14eoS"},W=function(e){function t(){return(0,i.default)(this,t),(0,E.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,_.default)(t,e),(0,m.default)(t,[{key:"render",value:function(){console.log("stage",this.props.stage);var e=this.props.stage?this.props.stage:"customer",t="payment"===e?"Complete Purchase":"Continue Shopping",a="/shipping";return"shipping"===e&&(a="/payment"),b.default.createElement(j.default,null,b.default.createElement(x.Container,null,b.default.createElement(R.default,{color:"secondary"}),b.default.createElement("div",{className:B.spacer}),b.default.createElement(x.Row,null,b.default.createElement(x.Col,{xs:12,sm:12,md:8},b.default.createElement("div",{className:B.checkoutStageRow},b.default.createElement(x.Row,null,b.default.createElement("div",{className:B.flexCol+" "+("customer"===e?B.activeStage:"")},b.default.createElement(k.default,{href:{pathname:"/checkout",query:{step:1}}},b.default.createElement("div",{className:B.checkoutStageOne+" "+B.link},"1 ",b.default.createElement("span",{className:B.stageLabel},"Customer Info"),b.default.createElement("div",{className:B.stageIndicator})))),b.default.createElement("div",{className:B.flexCol+" "+("shipping"===e?B.activeStage:"")},b.default.createElement("div",{className:B.checkoutStageTwo+" "+B.link},"2 ",b.default.createElement("span",{className:B.stageLabel},"Shipping Info"),b.default.createElement("div",{className:B.stageIndicator}))),b.default.createElement("div",{className:B.flexCol+" "+("payment"===e?B.activeStage:"")},b.default.createElement("div",{className:B.checkoutStageThree+" "+B.link},"3 ",b.default.createElement("span",{className:B.stageLabel},"Payment Information"),b.default.createElement("div",{className:B.stageIndicator}))))),b.default.createElement("div",{className:B.shoppingCartBtnContainer},b.default.createElement(x.Row,null,b.default.createElement(x.Col,{xs:12},b.default.createElement("div",{className:B.shoppingCartBtn},b.default.createElement(k.default,{href:"/cart"},b.default.createElement(x.Row,null,b.default.createElement(x.Col,{xs:10},"View Shopping Cart"),b.default.createElement(x.Col,{xs:2},b.default.createElement("img",{src:"/static/images/arrowFullRight.png"})))))))),b.default.createElement("div",{className:B.tab+" "+("customer"===e?B.activePage:"")},b.default.createElement(D.default,null)),b.default.createElement("div",{className:B.tab+" "+("shipping"===e?B.activePage:"")},b.default.createElement(L.default,null)),b.default.createElement("div",{className:B.tab+" "+("payment"===e?B.activePage:"")},b.default.createElement(q.default,null)),b.default.createElement("div",{className:B.footerControls},b.default.createElement(x.Row,null,b.default.createElement(x.Col,{xs:12,sm:12,md:8},b.default.createElement(k.default,{href:"/products"},b.default.createElement("ul",{className:"list-inline "+B.returnToShop},b.default.createElement("li",{className:"list-inline-item align-top"},b.default.createElement("img",{src:"/static/images/arrowFullLeft.png",alt:"arrow left"})),b.default.createElement("li",{className:"list-inline-item "+B.returnLink},"Return to Shop")))),b.default.createElement(x.Col,{xs:12,sm:12,md:4},b.default.createElement(k.default,{href:""+a},b.default.createElement("div",{className:B.actionBtn},t)))))),b.default.createElement(x.Col,{className:"justify-content-end",md:4},b.default.createElement("div",{className:B.checkoutSidebar},b.default.createElement(A.default,null))))))}}],[{key:"getInitialProps",value:function(){function e(e){return t.apply(this,arguments)}var t=(0,d.default)(c.default.mark(function e(t){var a=t.query;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{stage:a.stage});case 1:case"end":return e.stop()}},e,this)}));return e}()}]),t}(g.Component),H=function(e){return{cart:e.cart,products:e.products}},z=function(e){return{loadProducts:(0,v.bindActionCreators)(w.loadProducts,e)}};t.default=(0,N.default)({createStore:w.initStore,mapStateToProps:H,mapDispatchToProps:z,storeKey:"rootRedux"})(W)},49:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(4),c=l(n),r=a(1),d=l(r),s=a(2),o=l(s),u=a(5),i=l(u),f=a(6),m=l(f),p=a(0),E=l(p),h=a(14),_=(l(h),a(11),a(28)),g=a(3),b=a(10),x=l(b),C=a(20),k=l(C),v={sidebarContainer:"checkoutSidebar__sidebarContainer___3FD4-",cartProductList:"checkoutSidebar__cartProductList___2pWWt",equipmentPackage:"checkoutSidebar__equipmentPackage___ZxTXg",monthlyService:"checkoutSidebar__monthlyService___1aFrh",coupon:"checkoutSidebar__coupon___iE-Xj",cartPricing:"checkoutSidebar__cartPricing___GykyS",row:"checkoutSidebar__row___3HAW2",totalLabel:"checkoutSidebar__totalLabel___teqRz",totalPrice:"checkoutSidebar__totalPrice___eoaUO",bold:"checkoutSidebar__bold___Cnqw9"},y=function(e){function t(e){(0,d.default)(this,t);var a=(0,i.default)(this,(t.__proto__||(0,c.default)(t)).call(this,e));return a.state={collapse:!1,finance:!1},a.toggleCoupon=a.toggleCoupon.bind(a),a.toggleFinance=a.toggleFinance.bind(a),a}return(0,m.default)(t,e),(0,o.default)(t,[{key:"toggleCoupon",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"toggleFinance",value:function(e){this.setState({finance:e})}},{key:"render",value:function(){var e=this,t=this.state.collapse?"arrowUp.png":"arrowDown.png",a=this.props,l=a.cart,n=a.products,c=(a.payment,l.cartItemIds.map(function(e){return E.default.createElement("li",null,l.quantityById[e]," ",n[e].name)}));return E.default.createElement("div",{className:v.sidebarContainer},E.default.createElement("div",{className:v.equipmentPackage},E.default.createElement(g.Row,null,E.default.createElement(g.Col,{xs:12},E.default.createElement("h3",null,"Shopping Cart"),E.default.createElement("p",{className:v.bold},"Equipment Package"),E.default.createElement("h4",null,"$499.99 or $8.33/mo"))),E.default.createElement(g.Row,null,E.default.createElement(g.Col,{xs:4},E.default.createElement("img",{src:"/static/images/placeholderThumbSquare.png"})),E.default.createElement(g.Col,{xs:8},E.default.createElement("ul",{className:v.cartProductList},E.default.createElement("li",null,'17" Touchscreen Control Panel'),c)))),E.default.createElement("div",{className:v.monthlyService},E.default.createElement(g.Row,null,E.default.createElement(g.Col,{xs:12},E.default.createElement("p",{className:v.bold},"Monthly Monitoring Service"),E.default.createElement("h4",null,"$19.99"))),E.default.createElement(g.Row,null,E.default.createElement(g.Col,{xs:4},E.default.createElement("img",{src:"/static/images/placeholderThumbSquare.png"})))),E.default.createElement(g.Row,null,E.default.createElement(g.Col,{xs:12},E.default.createElement("div",{className:v.coupon},E.default.createElement(g.Row,null,E.default.createElement(g.Col,{xs:10},E.default.createElement("p",{className:v.bold},"Have a Coupon")),E.default.createElement(g.Col,{xs:2,onClick:this.toggleCoupon},E.default.createElement("img",{src:"/static/images/"+t}))),E.default.createElement(g.Collapse,{isOpen:this.state.collapse},E.default.createElement(g.Row,null,E.default.createElement(g.Col,{xs:12},E.default.createElement(x.default,{label:"Coupon Code"}))))))),E.default.createElement(g.Row,null,E.default.createElement(g.Col,{xs:12},E.default.createElement("div",{onClick:function(){return e.toggleFinance(!1)}},E.default.createElement(k.default,{label:[E.default.createElement("span",{className:v.bold},"Pay In Full")],checked:!this.state.finance})))),E.default.createElement(g.Row,null,E.default.createElement(g.Col,{xs:12},E.default.createElement("div",{onClick:function(){return e.toggleFinance(!0)}},E.default.createElement(k.default,{label:[E.default.createElement("span",{className:v.bold},"Finance 0% APR")],checked:this.state.finance})))),E.default.createElement("div",{className:v.cartPricing},E.default.createElement(g.Row,null,E.default.createElement(g.Col,{xs:9},"5 year Prime Subscription"),E.default.createElement(g.Col,{xs:3},E.default.createElement("span",{className:v.bold},"$99.99"))),E.default.createElement(g.Row,null,E.default.createElement(g.Col,{xs:9},"Monthly Monitoring"),E.default.createElement(g.Col,{xs:3},E.default.createElement("span",{className:v.bold},"$19.99"))),E.default.createElement(g.Row,null,E.default.createElement(g.Col,{xs:9},"Equipment Payment"),E.default.createElement(g.Col,{xs:3},E.default.createElement("span",{className:v.bold},"$8.33"))),E.default.createElement(g.Row,null,E.default.createElement(g.Col,{xs:9},"Subtotal"),E.default.createElement(g.Col,{xs:3},E.default.createElement("span",{className:v.bold},"$128.31"))),E.default.createElement(g.Row,null,E.default.createElement(g.Col,{xs:9},"Shipping"),E.default.createElement(g.Col,{xs:3},E.default.createElement("span",{className:v.bold},"Free")))),E.default.createElement(g.Row,null,E.default.createElement(g.Col,{xs:{size:3,offset:5}},E.default.createElement("span",{className:v.totalLabel},"Total")),E.default.createElement(g.Col,{xs:4},E.default.createElement("span",{className:v.totalPrice},"$128.31"))))}}]),t}(p.Component),N=function(e){return{cart:e.cart,products:e.products,payment:e.payment}},w=function(e){return{}};t.default=(0,_.connect)(N,w)(y)},50:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),c=l(n),r=a(3),d=a(10),s=l(d),o={customerInfo:"customerInfo__customerInfo___3tWcg"},u=function(){return c.default.createElement("div",null,c.default.createElement("div",{className:o.customerInfo},c.default.createElement("h3",null,"Customer Information"),c.default.createElement(r.Row,null,c.default.createElement(r.Col,{xs:12,sm:12,md:6},c.default.createElement(s.default,{label:"First Name"})),c.default.createElement(r.Col,{xs:12,sm:12,md:6},c.default.createElement(s.default,{label:"Last Name"}))),c.default.createElement(r.Row,null,c.default.createElement(r.Col,{xs:12,sm:12,md:6},c.default.createElement(s.default,{label:"Email Address"})),c.default.createElement(r.Col,{xs:12,sm:12,md:6},c.default.createElement(s.default,{label:"Phone"})))),c.default.createElement("div",{className:o.customerInfo},c.default.createElement("h3",null,"Monitoring Information"),c.default.createElement(r.Row,null,c.default.createElement(r.Col,{xs:12,sm:12,md:8},c.default.createElement(s.default,{label:"Monitoring Address"})),c.default.createElement(r.Col,{md:4},c.default.createElement(s.default,{label:"Apt # or Unit #"})),c.default.createElement(r.Col,{md:4},c.default.createElement(s.default,{label:"Postal Code"}))),c.default.createElement(r.Row,null,c.default.createElement(r.Col,{xs:12,sm:12,md:6},c.default.createElement(s.default,{label:"Emergency Contact"})),c.default.createElement(r.Col,{xs:12,sm:12,md:6},c.default.createElement(s.default,{label:"Phone"}))),c.default.createElement(r.Row,null,c.default.createElement(r.Col,{xs:12,sm:12,md:6},c.default.createElement(s.default,{label:"Verbal Password"})),c.default.createElement(r.Col,{xs:12,sm:12,md:6},c.default.createElement(s.default,{label:"Mastercode"})))))};t.default=u},51:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(4),c=l(n),r=a(1),d=l(r),s=a(2),o=l(s),u=a(5),i=l(u),f=a(6),m=l(f),p=a(0),E=l(p),h=a(3),_=a(10),g=l(_),b=a(23),x=l(b),C=a(20),k=l(C),v={customerInfo:"shippingInfo__customerInfo___vrrNM",shippingInfo:"shippingInfo__shippingInfo___eRThU","col-sm-12":"shippingInfo__col-sm-12___3RgM1",shippingMap:"shippingInfo__shippingMap___2Knxy",mapAddress:"shippingInfo__mapAddress___MsIWP",shipOptionBox:"shippingInfo__shipOptionBox___3n_rX",shipOptionHeader:"shippingInfo__shipOptionHeader___2425t",shipMethodDetails:"shippingInfo__shipMethodDetails___29fxV",warrantyControls:"shippingInfo__warrantyControls___3FZR4"},y=function(e){function t(e){(0,d.default)(this,t);var a=(0,i.default)(this,(t.__proto__||(0,c.default)(t)).call(this,e));return a.state={differentAddress:!1,standardDelivery:!0,warranty:null},a.toggleShippingAddress=a.toggleShippingAddress.bind(a),a.toggleShippMethod=a.toggleShipMethod.bind(a),a}return(0,m.default)(t,e),(0,o.default)(t,[{key:"toggleShippingAddress",value:function(){this.setState({differentAddress:!this.state.differentAddress})}},{key:"toggleShipMethod",value:function(e){this.setState({standardDelivery:e})}},{key:"toggleWarranty",value:function(e){this.setState({warranty:e})}},{key:"render",value:function(){var e=this;return E.default.createElement("div",null,E.default.createElement("div",{className:v.customerInfo},E.default.createElement("h3",null,"Shipping Information"),E.default.createElement("div",null,E.default.createElement(x.default,{clickHandler:this.toggleShippingAddress,checked:this.state.differentAddress,label:"Shipping info is different than Monitored Address."})),E.default.createElement(h.Collapse,{isOpen:this.state.differentAddress},E.default.createElement(h.Row,null,E.default.createElement(h.Col,{xs:12,sm:12,md:6},E.default.createElement(g.default,{label:"First Name"})),E.default.createElement(h.Col,{xs:12,sm:12,md:6},E.default.createElement(g.default,{label:"Last Name"}))),E.default.createElement(h.Row,null,E.default.createElement(h.Col,{xs:12,sm:12,md:6},E.default.createElement(g.default,{label:"Email Address"})),E.default.createElement(h.Col,{xs:12,sm:12,md:6},E.default.createElement(g.default,{label:"Phone"}))),E.default.createElement(h.Row,null,E.default.createElement(h.Col,{xs:12,sm:12,md:8},E.default.createElement(g.default,{label:"Ship To Address"})),E.default.createElement(h.Col,{xs:6,sm:6,md:4},E.default.createElement(g.default,{label:"Apt # or Unit #"}))),E.default.createElement(h.Row,null,E.default.createElement(h.Col,{xs:6,sm:6,md:4},E.default.createElement(g.default,{label:"Postal Code"})))),E.default.createElement(h.Collapse,{isOpen:!this.state.differentAddress},E.default.createElement("div",{className:v.shippingMap},E.default.createElement(h.Row,null,E.default.createElement(h.Col,{xs:12,sm:12,md:6},E.default.createElement("div",{className:v.mapAddress},E.default.createElement("p",{className:v.bold},"Jenny Williams"),E.default.createElement("p",null,"10332 S Kestrel Rise Rd."),E.default.createElement("p",null,"South Jordan, UT 84009"),E.default.createElement("p",null,E.default.createElement("span",{className:v.bold},"Tel.")," 801 745.1342"))),E.default.createElement(h.Col,{xs:12,sm:12,md:6,style:{paddingLeft:"0px",paddingRight:"0px"}},E.default.createElement("img",{className:"img-fluid",src:"/static/images/placeholderMap.png"})))))),E.default.createElement("div",{className:v.shippingInfo},E.default.createElement("h3",null,"Shipping Method"),E.default.createElement(h.Row,null,E.default.createElement(h.Col,{xs:12,sm:12,md:6},E.default.createElement("div",{className:v.shipOptionBox},E.default.createElement(h.Row,null,E.default.createElement(h.Col,{xs:{size:11,offset:1}},E.default.createElement("div",{className:v.shipOptionHeader},E.default.createElement(k.default,{label:[E.default.createElement("span",{className:v.bold},"Standard Delivery")],checked:this.state.standardDelivery}))),E.default.createElement(h.Col,{xs:{size:10,offset:2}},E.default.createElement("h4",null,"Free with Prime")),E.default.createElement(h.Col,{xs:{size:10,offset:1}},E.default.createElement("div",{className:v.shipMethodDetails},"Estimated 14-20 Day Shipping (Duties and taxes may be due upon delivery)"))))),E.default.createElement(h.Col,{xs:12,sm:12,md:6},E.default.createElement("div",{className:v.shipOptionBox},E.default.createElement(h.Row,null,E.default.createElement(h.Col,{xs:{size:11,offset:1}},E.default.createElement("div",{className:v.shipOptionHeader},E.default.createElement(k.default,{clickHandler:function(){return e.toggleShipMethod(!1)},label:[E.default.createElement("span",{className:v.bold},"Fast Delivery")],checked:!this.state.standardDelivery}))),E.default.createElement(h.Col,{xs:{size:10,offset:2}},E.default.createElement("h4",null,"$8.00")),E.default.createElement(h.Col,{xs:{size:10,offset:1}},E.default.createElement("div",{className:v.shipMethodDetails},"Estimated 2-5 Day Shipping (Duties and taxes may be due upon delivery)"))))))),E.default.createElement("div",{className:v.customerInfo},E.default.createElement("h3",null,"Extended Warranty - $3/mo"),E.default.createElement("p",null,"Extended Warranty provides free replacement of equipment and shipping no matter what the cause of the equipment to malfunction or break."),E.default.createElement("ul",{className:"list-inline "+v.warrantyControls},E.default.createElement("li",{className:"list-inline-item"},E.default.createElement(k.default,{clickHandler:function(){return e.toggleWarranty("accept")},label:[E.default.createElement("span",{className:v.bold},"Accept")],checked:"accept"===this.state.warranty})),E.default.createElement("li",{className:"list-inline-item"},E.default.createElement(k.default,{clickHandler:function(){return e.toggleWarranty("decline")},label:[E.default.createElement("span",{className:v.bold},"Decline")],defaultChecked:!1,checked:"decline"===this.state.warranty})))))}}]),t}(p.Component);t.default=y},52:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),c=l(n),r=a(3),d=a(10),s=l(d),o=a(23),u=l(o),i={customerInfo:"paymentInfo__customerInfo___3XQeK",linkTertiary:"paymentInfo__linkTertiary___MggSy",financeAgreement:"paymentInfo__financeAgreement___1J4EF",acceptance:"paymentInfo__acceptance___2Aj3h"},f=function(){return c.default.createElement("div",null,c.default.createElement("div",{className:i.customerInfo},c.default.createElement("h3",null,"Payment Selection"),c.default.createElement(r.Row,{className:"justify-content-between"},c.default.createElement(r.Col,{xs:"3"},c.default.createElement("h4",null,"Credit Card")),c.default.createElement(r.Col,{xs:"2"},c.default.createElement("img",{src:"/static/images/creditcards.png",alt:"credit card icon"}))),c.default.createElement(r.Row,null,c.default.createElement(r.Col,{xs:12},c.default.createElement(s.default,{label:"Credit Card",placeholder:"0000 - 0000 - 000 - 0000"}))),c.default.createElement(r.Row,null,c.default.createElement(r.Col,{xs:6},c.default.createElement(s.default,{label:"Name on Card"})),c.default.createElement(r.Col,{xs:3},c.default.createElement(s.default,{label:"Expiration Date"})),c.default.createElement(r.Col,{xs:3},c.default.createElement(s.default,{label:"CVV Code"}))),c.default.createElement(r.Row,null,c.default.createElement(r.Col,{xs:1},c.default.createElement("div",{className:i.termsCheckbox},c.default.createElement(u.default,null))),c.default.createElement(r.Col,{xs:11},c.default.createElement(s.default,{label:"Full Name"})),c.default.createElement(r.Col,{xs:12},c.default.createElement("div",{className:i.financeAgreement},"To accept terms of",c.default.createElement("span",{className:i.linkTertiary},"Financing Agreement "),"please type full name below and click accept")),c.default.createElement(r.Col,{xs:1},c.default.createElement("div",{className:i.termsCheckbox},c.default.createElement(u.default,null))),c.default.createElement(r.Col,{xs:11},c.default.createElement("div",{className:i.acceptance},"I accept the ",c.default.createElement("span",{className:i.linkTertiary}," Terms and Conditons"))))))};t.default=f}},[257]);
            return { page: comp.default }
          })
        