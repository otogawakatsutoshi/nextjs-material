_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"+Css":function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},"/0+H":function(t,e,n){"use strict";e.__esModule=!0,e.isInAmpMode=i,e.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,a=t.hasQuery,i=void 0!==a&&a;return n||o&&i}},0:function(t,e,n){n("GcxT"),t.exports=n("nOHt")},"1TCz":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return B}));var r=n("vJKn"),o=n.n(r);function a(t,e,n,r,o,a,i){try{var c=t[a](i),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(r,o)}var i=n("cpVT"),c=n("nKUr"),u=n("H+61"),s=n("UlJF"),f=n("7LId"),p=n("VIvw"),l=n("iHvq"),d=n("q1tI"),h=n.n(d),m=n("i8i4"),y=n.n(m),v=n("8Bbg"),b=n.n(v),g=n("g4pe"),O=n.n(g),j=n("20a2"),w=n.n(j),x=n("R/WZ"),P=n("wx14"),k=n("Ff2n"),_=(n("17x9"),n("iuhU")),C=n("H2TA"),S=n("NqtD"),M=44,D=d.forwardRef((function(t,e){var n=t.classes,r=t.className,o=t.color,a=void 0===o?"primary":o,i=t.disableShrink,c=void 0!==i&&i,u=t.size,s=void 0===u?40:u,f=t.style,p=t.thickness,l=void 0===p?3.6:p,h=t.value,m=void 0===h?0:h,y=t.variant,v=void 0===y?"indeterminate":y,b=Object(k.a)(t,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),g={},O={},j={};if("determinate"===v||"static"===v){var w=2*Math.PI*((M-l)/2);g.strokeDasharray=w.toFixed(3),j["aria-valuenow"]=Math.round(m),g.strokeDashoffset="".concat(((100-m)/100*w).toFixed(3),"px"),O.transform="rotate(-90deg)"}return d.createElement("div",Object(P.a)({className:Object(_.a)(n.root,r,"inherit"!==a&&n["color".concat(Object(S.a)(a))],{determinate:n.determinate,indeterminate:n.indeterminate,static:n.static}[v]),style:Object(P.a)({width:s,height:s},O,f),ref:e,role:"progressbar"},j,b),d.createElement("svg",{className:n.svg,viewBox:"".concat(22," ").concat(22," ").concat(M," ").concat(M)},d.createElement("circle",{className:Object(_.a)(n.circle,c&&n.circleDisableShrink,{determinate:n.circleDeterminate,indeterminate:n.circleIndeterminate,static:n.circleStatic}[v]),style:g,cx:M,cy:M,r:(M-l)/2,fill:"none",strokeWidth:l})))})),I=Object(C.a)((function(t){return{root:{display:"inline-block"},static:{transition:t.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},determinate:{transition:t.transitions.create("transform")},colorPrimary:{color:t.palette.primary.main},colorSecondary:{color:t.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:t.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},circleDeterminate:{transition:t.transitions.create("stroke-dashoffset")},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(D),E=n("jyBA");function A(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function T(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?A(Object(n),!0).forEach((function(e){Object(i.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var N=Object(x.a)({progress:{color:E.n,width:"6rem !important",height:"6rem !important"},wrapperDiv:{margin:"100px auto",padding:"0px",maxWidth:"360px",textAlign:"center",position:"relative",zIndex:"9999",top:"0"},iconWrapper:{display:"block"},title:T(T({},E.w),{},{color:"#FFFFFF"})});function R(t){var e=N();return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:e.wrapperDiv,children:[Object(c.jsx)("div",{className:e.iconWrapper,children:Object(c.jsx)(I,{className:e.progress})}),Object(c.jsxs)("h4",{className:e.title,children:["Loading page contents for: ",t.path]})]})})}n("Jm2d");function H(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function q(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?H(Object(n),!0).forEach((function(e){Object(i.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function F(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(p.a)(this,n)}}w.a.events.on("routeChangeStart",(function(t){console.log("Loading: ".concat(t)),document.body.classList.add("body-page-transition"),y.a.render(Object(c.jsx)(R,{path:t}),document.getElementById("page-transition"))})),w.a.events.on("routeChangeComplete",(function(){y.a.unmountComponentAtNode(document.getElementById("page-transition")),document.body.classList.remove("body-page-transition")})),w.a.events.on("routeChangeError",(function(){y.a.unmountComponentAtNode(document.getElementById("page-transition")),document.body.classList.remove("body-page-transition")}));var B=function(t){Object(f.a)(n,t);var e=F(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=document.createComment("\n\n=========================================================\n* NextJS Material Kit v1.2.0 based on Material Kit Free - v2.0.2 (Bootstrap 4.0.0 Final Edition) and Material Kit React v1.8.0\n=========================================================\n\n* Product Page: https://www.creative-tim.com/product/nextjs-material-kit\n* Copyright 2021 Creative Tim (https://www.creative-tim.com)\n* Licensed under MIT (https://github.com/creativetimofficial/nextjs-material-kit/blob/main/LICENSE.md)\n\n* Coded by Creative Tim\n\n=========================================================\n\n* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\n");document.insertBefore(t,document.documentElement)}},{key:"render",value:function(){var t=this.props,e=t.Component,n=t.pageProps;return Object(c.jsxs)(h.a.Fragment,{children:[Object(c.jsxs)(O.a,{children:[Object(c.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),Object(c.jsx)("title",{children:"NextJS Material Kit by Creative Tim"})]}),Object(c.jsx)(e,q({},n))]})}}],[{key:"getInitialProps",value:function(){var t,e=(t=o.a.mark((function t(e){var n,r,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.Component,e.router,r=e.ctx,a={},!n.getInitialProps){t.next=6;break}return t.next=5,n.getInitialProps(r);case 5:a=t.sent;case 6:return t.abrupt("return",{pageProps:a});case 7:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function c(t){a(i,r,o,c,u,"next",t)}function u(t){a(i,r,o,c,u,"throw",t)}c(void 0)}))});return function(t){return e.apply(this,arguments)}}()}]),n}(b.a)},"20a2":function(t,e,n){t.exports=n("nOHt")},"48fX":function(t,e,n){var r=n("qhzo");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},"5fIB":function(t,e,n){var r=n("7eYB");t.exports=function(t){if(Array.isArray(t))return r(t)}},"7LId":function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return o}))},"8Bbg":function(t,e,n){t.exports=n("B5Ud")},"8Kt/":function(t,e,n){"use strict";var r=n("oI91");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}e.__esModule=!0,e.defaultHead=l,e.default=void 0;var a,i=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var e=p();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var a=r?Object.getOwnPropertyDescriptor(t,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=t[o]}n.default=t,e&&e.set(t,n);return n}(n("q1tI")),c=(a=n("Xuae"))&&a.__esModule?a:{default:a},u=n("lwAK"),s=n("FYa8"),f=n("/0+H");function p(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return p=function(){return t},t}function l(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[i.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function d(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===i.default.Fragment?t.concat(i.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var h=["name","httpEquiv","charSet","itemProp"];function m(t,e){return t.reduce((function(t,e){var n=i.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(d,[]).reverse().concat(l(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var c=o.key.slice(o.key.indexOf("$")+1);t.has(c)?a=!1:t.add(c)}switch(o.type){case"title":case"base":e.has(o.type)?a=!1:e.add(o.type);break;case"meta":for(var u=0,s=h.length;u<s;u++){var f=h[u];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?a=!1:n.add(f);else{var p=o.props[f],l=r[f]||new Set;"name"===f&&i||!l.has(p)?(l.add(p),r[f]=l):a=!1}}}return a}}()).reverse().map((function(t,n){var a=t.key||n;if(!e.inAmpMode&&"link"===t.type&&t.props.href&&["https://fonts.googleapis.com/css"].some((function(e){return t.props.href.startsWith(e)}))){var c=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t.props||{});return c["data-href"]=c.href,c.href=void 0,i.default.cloneElement(t,c)}return i.default.cloneElement(t,{key:a})}))}function y(t){var e=t.children,n=(0,i.useContext)(u.AmpStateContext),r=(0,i.useContext)(s.HeadManagerContext);return i.default.createElement(c.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,f.isInAmpMode)(n)},e)}y.rewind=function(){};var v=y;e.default=v},B5Ud:function(t,e,n){"use strict";var r=n("vJKn"),o=n("/GRZ"),a=n("i2R6"),i=n("48fX"),c=n("tCBg"),u=n("T0f4"),s=n("qVT1");function f(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}var p=n("AroE");e.__esModule=!0,e.Container=function(t){0;return t.children},e.createUrl=v,e.default=void 0;var l=p(n("q1tI")),d=n("g/15");function h(t){return m.apply(this,arguments)}function m(){return(m=s(r.mark((function t(e){var n,o,a;return r.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.Component,o=e.ctx,t.next=3,(0,d.loadGetInitialProps)(n,o);case 3:return a=t.sent,t.abrupt("return",{pageProps:a});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e.AppInitialProps=d.AppInitialProps,e.NextWebVitalsMetric=d.NextWebVitalsMetric;var y=function(t){i(n,t);var e=f(n);function n(){return o(this,n),e.apply(this,arguments)}return a(n,[{key:"componentDidCatch",value:function(t,e){throw t}},{key:"render",value:function(){var t=this.props,e=t.router,n=t.Component,r=t.pageProps,o=t.__N_SSG,a=t.__N_SSP;return l.default.createElement(n,Object.assign({},r,o||a?{}:{url:v(e)}))}}]),n}(l.default.Component);function v(t){var e=t.pathname,n=t.asPath,r=t.query;return{get query(){return r},get pathname(){return e},get asPath(){return n},back:function(){t.back()},push:function(e,n){return t.push(e,n)},pushTo:function(e,n){var r=n?e:"",o=n||e;return t.push(r,o)},replace:function(e,n){return t.replace(e,n)},replaceTo:function(e,n){var r=n?e:"",o=n||e;return t.replace(r,o)}}}e.default=y,y.origGetInitialProps=h,y.getInitialProps=h},FYa8:function(t,e,n){"use strict";var r;e.__esModule=!0,e.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.HeadManagerContext=o},GcxT:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},"H+61":function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},Jm2d:function(t,e,n){},T0f4:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},UlJF:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))},VIvw:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return a}));var o=n("+Css");function a(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?Object(o.a)(t):e}},Xuae:function(t,e,n){"use strict";var r=n("mPvQ"),o=n("/GRZ"),a=n("i2R6"),i=(n("qXWd"),n("48fX")),c=n("tCBg"),u=n("T0f4");function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}e.__esModule=!0,e.default=void 0;var f=n("q1tI"),p=function(t){i(n,t);var e=s(n);function n(t){var a;return o(this,n),(a=e.call(this,t))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);e.default=p},g4pe:function(t,e,n){t.exports=n("8Kt/")},iHvq:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},kG2m:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(t,e,n){"use strict";var r;e.__esModule=!0,e.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.AmpStateContext=o},mPvQ:function(t,e,n){var r=n("5fIB"),o=n("rlHP"),a=n("KckH"),i=n("kG2m");t.exports=function(t){return r(t)||o(t)||a(t)||i()}},oI91:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},qXWd:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},rlHP:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},tCBg:function(t,e,n){var r=n("C+bE"),o=n("qXWd");t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?o(t):e}}},[[0,0,2,1,3]]]);