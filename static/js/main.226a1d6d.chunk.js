(this["webpackJsonpusmfum-stats"]=this["webpackJsonpusmfum-stats"]||[]).push([[0],{71:function(e,t,n){},73:function(e,t){},88:function(e,t,n){"use strict";n.r(t);var r=n(7),c=n(8),u=n(35),a=n.n(u),i=n(36),s=n(3),o=n(4),l=n(6),d=n(5),f=(n(71),n(1)),j=n.n(f),b=n(15),p=n(16),O={name:"usm",abi:["function mint(address to, uint minUsmOut) external payable returns (uint)","function burn(address from, address payable to, uint usmToBurn, uint minEthOut) external returns (uint)","function fund(address to, uint minFumOut) external payable returns (uint)","function defund(address from, address payable to, uint fumToBurn, uint minEthOut) external returns (uint)","function defundFromFUM(address from, address payable to, uint fumToBurn, uint minEthOut) external returns (uint)","function ethPool() public view returns (uint pool)","function minFumBuyPrice() public view returns (uint mfbp)","function buySellAdjustment() public view returns (uint adjustment)","function ethBuffer(uint8 upOrDown) external view returns (int buffer)","function ethToUsm(uint ethAmount, uint8 upOrDown) external view returns (uint usmOut)","function usmToEth(uint usmAmount, uint8 upOrDown) external view returns (uint ethOut)","function debtRatio() external view returns (uint ratio)","function usmPrice(uint8 side) external view returns (uint price)","function fumPrice(uint8 side) external view returns (uint price)","function latestChainlinkPrice() public view returns (uint price)","function latestCompoundPrice() public view returns (uint price)","function latestUniswapTWAPPrice() public view returns (uint price)","function latestPrice() public virtual view returns (uint price)","event MinFumBuyPriceChanged(uint previous, uint latest)","event BuySellAdjustmentChanged(uint previous, uint latest)","function totalSupply() external view returns (uint256)","function balanceOf(address account) external view returns (uint256)","function transfer(address recipient, uint256 amount) external returns (bool)","function allowance(address owner, address spender) external view returns (uint256)","function approve(address spender, uint256 amount) external returns (bool)","function transferFrom(address sender, address recipient, uint256 amount) external returns (bool)","event Transfer(address indexed from, address indexed to, uint256 value)"],address:{1:"0x03eb7Ce2907e202bB70BAE3D7B0C588573d3cECC"}},h={name:"fum",abi:["function totalSupply() external view returns (uint256)","event Transfer(address indexed from, address indexed to, uint256 value)"],address:{1:"0xf04a5D82ff8a801f7d45e9C14CDcf73defF1a394"}},m="chainlink",x="compound",v="uniswap";function y(e){return{type:"NETWORK_LOADED",provider:e}}function w(e){return{type:"USM_LOADED",usm:e}}function P(e){return{type:"FUM_LOADED",fum:e}}function E(e,t){switch(e){case m:return{type:"ORACLE_PRICE_CHAINLINK",price:t};case x:return{type:"ORACLE_PRICE_COMPOUND",price:t};case v:return{type:"ORACLE_PRICE_UNISWAP",price:t}}}function S(e){return{type:"USM_COLLATERAL",collateral:e}}function _(e){return{type:"USM_ETH_BUFFER",ethBuffer:e}}function T(e,t){return{type:"USM_PRICE",buyPrice:e,sellPrice:t}}function C(e,t){return{type:"FUM_PRICE",buyPrice:e,sellPrice:t}}function M(e,t){switch(e){case O.name:return{type:"USM_TOTAL_SUPPLY",supply:t};case h.name:return{type:"FUM_TOTAL_SUPPLY",supply:t}}}function U(e,t){switch(e){case O.name:return{type:"USM_MINTS",mints:t};case h.name:return{type:"FUM_MINTS",mints:t}}}function B(e,t){switch(e){case O.name:return{type:"USM_BURNS",burns:t};case h.name:return{type:"FUM_BURNS",burns:t}}}var g=function(){var e=Object(b.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k(t,n),R(t,n),A(t,n),L(t,n),N(t,n);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),k=function(){var e=Object(b.a)(j.a.mark((function e(t,n){var r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.ethPool();case 2:r=e.sent,c=p.a.utils.formatEther(r),t(S(c));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),R=function(){var e=Object(b.a)(j.a.mark((function e(t,n){var r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.debtRatio();case 2:r=e.sent,c=p.a.utils.formatEther(r),t({type:"USM_DEBT_RATIO",debtRatio:c});case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),A=function(){var e=Object(b.a)(j.a.mark((function e(t,n){var r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.ethBuffer(0);case 2:r=e.sent,c=p.a.utils.formatEther(r),t(_(c));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),L=function(){var e=Object(b.a)(j.a.mark((function e(t,n){var r,c,u,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.usmPrice(0);case 2:return r=e.sent,c=p.a.utils.formatEther(r),e.next=6,n.usmPrice(1);case 6:u=e.sent,a=p.a.utils.formatEther(u),t(T(c,a));case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),N=function(){var e=Object(b.a)(j.a.mark((function e(t,n){var r,c,u,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.fumPrice(0);case 2:return r=e.sent,c=p.a.utils.formatEther(r),e.next=6,n.fumPrice(1);case 6:u=e.sent,a=p.a.utils.formatEther(u),t(C(c,a));case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),D=function(){var e=Object(b.a)(j.a.mark((function e(t,n,r){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:F(t,n,r),I(t,n,r),H(t,n,r);case 3:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),F=function(){var e=Object(b.a)(j.a.mark((function e(t,n,r){var c,u;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.totalSupply();case 2:c=e.sent,u=p.a.utils.formatEther(c),t(M(n.name,u));case 5:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),I=function(){var e=Object(b.a)(j.a.mark((function e(t,n,r){var c,u;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=r.filters.Transfer(p.a.constants.AddressZero,null),e.next=3,r.queryFilter(c,0);case 3:u=e.sent,t(U(n.name,u.length));case 5:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),H=function(){var e=Object(b.a)(j.a.mark((function e(t,n,r){var c,u;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=r.filters.Transfer(null,p.a.constants.AddressZero),e.next=3,r.queryFilter(c,0);case 3:u=e.sent,t(B(n.name,u.length));case 5:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),W=function(){var e=Object(b.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:K(t,n),Y(t,n),z(t,n);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),K=function(){var e=Object(b.a)(j.a.mark((function e(t,n){var r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.latestChainlinkPrice();case 2:r=e.sent,c=p.a.utils.formatEther(r),t(E(m,c));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Y=function(){var e=Object(b.a)(j.a.mark((function e(t,n){var r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.latestCompoundPrice();case 2:r=e.sent,c=p.a.utils.formatEther(r),t(E(x,c));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),z=function(){var e=Object(b.a)(j.a.mark((function e(t,n){var r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.latestUniswapTWAPPrice();case 2:r=e.sent,c=p.a.utils.formatEther(r),t(E(v,c));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),J=function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=new p.a.providers.JsonRpcProvider("https://mainnet.infura.io/v3/1be1f8b7b85a47e4949bc1057660a81d"),t(y(n)),q(t,n),X(t,n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(b.a)(j.a.mark((function e(t,n){var r,c,u,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getNetwork();case 2:r=e.sent,c=O.abi,u=O.address[r.chainId],a=new p.a.Contract(u,c,n),t(w(a)),D(t,O,a),g(t,a),W(t,a);case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),X=function(){var e=Object(b.a)(j.a.mark((function e(t,n){var r,c,u,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getNetwork();case 2:r=e.sent,c=h.abi,u=h.address[r.chainId],a=new p.a.Contract(u,c,n),t(P(a)),console.log(c,u,a),D(t,h,a);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Z=n(17),V=n(18),$=Object(V.a)((function(e){return Object(Z.get)(e,"app.provider",null)}),(function(e){return e})),G=(Object(V.a)((function(e){return Object(Z.get)(e,"app.usm",null)}),(function(e){return e})),Object(V.a)((function(e){return Object(Z.get)(e,"usm.supply",0)}),(function(e){return e}))),Q=Object(V.a)((function(e){return Object(Z.get)(e,"usm.mints",0)}),(function(e){return e})),ee=Object(V.a)((function(e){return Object(Z.get)(e,"usm.burns",0)}),(function(e){return e})),te=Object(V.a)((function(e){return Object(Z.get)(e,"usm.collateral",0)}),(function(e){return e})),ne=Object(V.a)((function(e){return Object(Z.get)(e,"usm.debtRatio",0)}),(function(e){return e})),re=Object(V.a)((function(e){return Object(Z.get)(e,"usm.ethBuffer",0)}),(function(e){return e})),ce=Object(V.a)((function(e){return Object(Z.get)(e,"usm.buyPrice",0)}),(function(e){return e})),ue=Object(V.a)((function(e){return Object(Z.get)(e,"usm.sellPrice",0)}),(function(e){return e})),ae=Object(V.a)((function(e){return Object(Z.get)(e,"fum.supply",0)}),(function(e){return e})),ie=Object(V.a)((function(e){return Object(Z.get)(e,"fum.mints",0)}),(function(e){return e})),se=Object(V.a)((function(e){return Object(Z.get)(e,"fum.burns",0)}),(function(e){return e})),oe=Object(V.a)((function(e){return Object(Z.get)(e,"fum.buyPrice",0)}),(function(e){return e})),le=Object(V.a)((function(e){return Object(Z.get)(e,"fum.sellPrice",0)}),(function(e){return e})),de=Object(V.a)((function(e){return Object(Z.get)(e,"oracle.chainlinkPrice",0)}),(function(e){return e})),fe=Object(V.a)((function(e){return Object(Z.get)(e,"oracle.compoundPrice",0)}),(function(e){return e})),je=Object(V.a)((function(e){return Object(Z.get)(e,"oracle.uniswapPrice",0)}),(function(e){return e})),be=n(91),pe=n(92),Oe=n(93),he=n(95),me=n(94),xe=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Number.parseFloat(e).toFixed(t)},t=this.props,n=t.dispatch,c=t.networkProvider,u=t.usmSupply,a=t.usmMints,i=t.usmBurns,s=t.usmMarketCap,o=t.usmCollateral,l=t.usmDebtRatio,d=t.usmEthBuffer,f=t.usmBuyPrice,j=t.usmSellPrice,b=t.fumMarketCap,p=t.fumSupply,O=t.fumMints,h=t.fumBurns,m=t.fumBuyPrice,x=t.fumSellPrice,v=t.chainlinkPrice,y=t.compoundPrice,w=t.uniswapPrice;return c||J(n),Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)(be.a,{children:[Object(r.jsx)(pe.a,{className:"justify-content-md-center",children:Object(r.jsx)(Oe.a,{sm:6,children:Object(r.jsx)(he.a,{children:Object(r.jsxs)(he.a.Body,{children:[Object(r.jsx)(he.a.Title,{children:"Protocol Health"}),Object(r.jsx)(me.a,{children:Object(r.jsxs)("tbody",{children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Total Collateral"}),Object(r.jsxs)("td",{children:[e(o)," ETH"]})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Buffer"}),Object(r.jsxs)("td",{children:[e(d)," ETH"]})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Debt Ratio"}),Object(r.jsxs)("td",{children:[function(t){var n=100*Number.parseFloat(t);return e(n.toString())}(l)," %"]})]})]})})]})})})}),Object(r.jsxs)(pe.a,{children:[Object(r.jsx)(Oe.a,{children:Object(r.jsx)(he.a,{children:Object(r.jsxs)(he.a.Body,{children:[Object(r.jsx)(he.a.Title,{children:"USM Stats"}),Object(r.jsx)(me.a,{size:"sm",children:Object(r.jsxs)("tbody",{children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Market Cap (ETH)"}),Object(r.jsx)("td",{children:e(s)})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Total Supply"}),Object(r.jsx)("td",{children:e(u)})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Buy Price (ETH)"}),Object(r.jsx)("td",{children:e(f,5)})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Sell Price (ETH)"}),Object(r.jsx)("td",{children:e(j,5)})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"No. of Mints"}),Object(r.jsx)("td",{children:a})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"No. of Burns"}),Object(r.jsx)("td",{children:i})]})]})})]})})}),Object(r.jsx)(Oe.a,{children:Object(r.jsx)(he.a,{children:Object(r.jsxs)(he.a.Body,{children:[Object(r.jsx)(he.a.Title,{children:"FUM Stats"}),Object(r.jsx)(me.a,{size:"sm",children:Object(r.jsxs)("tbody",{children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Market Cap (ETH)"}),Object(r.jsx)("td",{children:e(b)})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Total Supply"}),Object(r.jsx)("td",{children:e(p)})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Buy Price (ETH)"}),Object(r.jsx)("td",{children:e(m,5)})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Sell Price (ETH)"}),Object(r.jsx)("td",{children:e(x,5)})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"No. of Mints"}),Object(r.jsx)("td",{children:O})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"No. of Burns"}),Object(r.jsx)("td",{children:h})]})]})})]})})}),Object(r.jsx)(Oe.a,{children:Object(r.jsx)(he.a,{children:Object(r.jsxs)(he.a.Body,{children:[Object(r.jsx)(he.a.Title,{children:"Oracle Stats"}),Object(r.jsx)(me.a,{size:"sm",children:Object(r.jsxs)("tbody",{children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"ETH Price - Chainlink"}),Object(r.jsx)("td",{children:e(v)})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"ETH Price - Compound"}),Object(r.jsx)("td",{children:e(y)})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"ETH Price - Uniswap TWAP"}),Object(r.jsx)("td",{children:e(w)})]})]})})]})})})]})]})})}}]),n}(c.Component);var ve=Object(i.b)((function(e){var t=G(e),n=ce(e),r=t*n,c=ae(e),u=oe(e),a=c*u;return{networkProvider:$(e),usmMarketCap:r,usmSupply:t,usmMints:Q(e),usmBurns:ee(e),usmCollateral:te(e),usmDebtRatio:ne(e),usmEthBuffer:re(e),usmBuyPrice:n,usmSellPrice:ue(e),fumMarketCap:a,fumSupply:c,fumMints:ie(e),fumBurns:se(e),fumBuyPrice:u,fumSellPrice:le(e),chainlinkPrice:de(e),compoundPrice:fe(e),uniswapPrice:je(e)}}))(xe),ye=n(29),we=n(58),Pe=n(11);var Ee=new ye.c({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NETWORK_LOADED":return Object(Pe.a)(Object(Pe.a)({},e),{},{provider:t.provider});case"USM_LOADED":return Object(Pe.a)(Object(Pe.a)({},e),{},{usm:t.usm});case"FUM_LOADED":return Object(Pe.a)(Object(Pe.a)({},e),{},{fum:t.fum});default:return e}},usm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USM_TOTAL_SUPPLY":return Object(Pe.a)(Object(Pe.a)({},e),{},{supply:t.supply});case"USM_MINTS":return Object(Pe.a)(Object(Pe.a)({},e),{},{mints:t.mints});case"USM_BURNS":return Object(Pe.a)(Object(Pe.a)({},e),{},{burns:t.burns});case"USM_COLLATERAL":return Object(Pe.a)(Object(Pe.a)({},e),{},{collateral:t.collateral});case"USM_DEBT_RATIO":return Object(Pe.a)(Object(Pe.a)({},e),{},{debtRatio:t.debtRatio});case"USM_ETH_BUFFER":return Object(Pe.a)(Object(Pe.a)({},e),{},{ethBuffer:t.ethBuffer});case"USM_PRICE":return Object(Pe.a)(Object(Pe.a)({},e),{},{buyPrice:t.buyPrice,sellPrice:t.sellPrice});default:return e}},fum:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FUM_TOTAL_SUPPLY":return Object(Pe.a)(Object(Pe.a)({},e),{},{supply:t.supply});case"FUM_MINTS":return Object(Pe.a)(Object(Pe.a)({},e),{},{mints:t.mints});case"FUM_BURNS":return Object(Pe.a)(Object(Pe.a)({},e),{},{burns:t.burns});case"FUM_PRICE":return Object(Pe.a)(Object(Pe.a)({},e),{},{buyPrice:t.buyPrice,sellPrice:t.sellPrice});default:return e}},oracle:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ORACLE_PRICE_CHAINLINK":return Object(Pe.a)(Object(Pe.a)({},e),{},{chainlinkPrice:t.price});case"ORACLE_PRICE_COMPOUND":return Object(Pe.a)(Object(Pe.a)({},e),{},{compoundPrice:t.price});case"ORACLE_PRICE_UNISWAP":return Object(Pe.a)(Object(Pe.a)({},e),{},{uniswapPrice:t.price});default:return e}}}),Se=Object(we.createLogger)(),_e=[],Te=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ye.d;var Ce;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(r.jsx)(i.a,{store:Object(ye.e)(Ee,Ce,Te(ye.a.apply(void 0,_e.concat([Se])))),children:Object(r.jsx)(ve,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[88,1,2]]]);
//# sourceMappingURL=main.226a1d6d.chunk.js.map