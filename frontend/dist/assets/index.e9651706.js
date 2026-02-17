function ld(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function id(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var C={exports:{}},T={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sr=Symbol.for("react.element"),ad=Symbol.for("react.portal"),ud=Symbol.for("react.fragment"),sd=Symbol.for("react.strict_mode"),cd=Symbol.for("react.profiler"),dd=Symbol.for("react.provider"),pd=Symbol.for("react.context"),fd=Symbol.for("react.forward_ref"),hd=Symbol.for("react.suspense"),md=Symbol.for("react.memo"),gd=Symbol.for("react.lazy"),da=Symbol.iterator;function vd(e){return e===null||typeof e!="object"?null:(e=da&&e[da]||e["@@iterator"],typeof e=="function"?e:null)}var Bu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ju=Object.assign,Lu={};function yn(e,t,n){this.props=e,this.context=t,this.refs=Lu,this.updater=n||Bu}yn.prototype.isReactComponent={};yn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};yn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Tu(){}Tu.prototype=yn.prototype;function hi(e,t,n){this.props=e,this.context=t,this.refs=Lu,this.updater=n||Bu}var mi=hi.prototype=new Tu;mi.constructor=hi;ju(mi,yn.prototype);mi.isPureReactComponent=!0;var pa=Array.isArray,Iu=Object.prototype.hasOwnProperty,gi={current:null},Ru={key:!0,ref:!0,__self:!0,__source:!0};function Mu(e,t,n){var r,o={},l=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)Iu.call(t,r)&&!Ru.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+2];o.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:sr,type:e,key:l,ref:i,props:o,_owner:gi.current}}function yd(e,t){return{$$typeof:sr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function vi(e){return typeof e=="object"&&e!==null&&e.$$typeof===sr}function xd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var fa=/\/+/g;function Wo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?xd(""+e.key):t.toString(36)}function jr(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case sr:case ad:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+Wo(i,0):r,pa(o)?(n="",e!=null&&(n=e.replace(fa,"$&/")+"/"),jr(o,t,n,"",function(s){return s})):o!=null&&(vi(o)&&(o=yd(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(fa,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",pa(e))for(var a=0;a<e.length;a++){l=e[a];var u=r+Wo(l,a);i+=jr(l,t,n,u,o)}else if(u=vd(e),typeof u=="function")for(e=u.call(e),a=0;!(l=e.next()).done;)l=l.value,u=r+Wo(l,a++),i+=jr(l,t,n,u,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function gr(e,t,n){if(e==null)return e;var r=[],o=0;return jr(e,r,"","",function(l){return t.call(n,l,o++)}),r}function wd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var me={current:null},Lr={transition:null},kd={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:Lr,ReactCurrentOwner:gi};function Ou(){throw Error("act(...) is not supported in production builds of React.")}T.Children={map:gr,forEach:function(e,t,n){gr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return gr(e,function(){t++}),t},toArray:function(e){return gr(e,function(t){return t})||[]},only:function(e){if(!vi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};T.Component=yn;T.Fragment=ud;T.Profiler=cd;T.PureComponent=hi;T.StrictMode=sd;T.Suspense=hd;T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kd;T.act=Ou;T.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ju({},e.props),o=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=gi.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)Iu.call(t,u)&&!Ru.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var s=0;s<u;s++)a[s]=arguments[s+2];r.children=a}return{$$typeof:sr,type:e.type,key:o,ref:l,props:r,_owner:i}};T.createContext=function(e){return e={$$typeof:pd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:dd,_context:e},e.Consumer=e};T.createElement=Mu;T.createFactory=function(e){var t=Mu.bind(null,e);return t.type=e,t};T.createRef=function(){return{current:null}};T.forwardRef=function(e){return{$$typeof:fd,render:e}};T.isValidElement=vi;T.lazy=function(e){return{$$typeof:gd,_payload:{_status:-1,_result:e},_init:wd}};T.memo=function(e,t){return{$$typeof:md,type:e,compare:t===void 0?null:t}};T.startTransition=function(e){var t=Lr.transition;Lr.transition={};try{e()}finally{Lr.transition=t}};T.unstable_act=Ou;T.useCallback=function(e,t){return me.current.useCallback(e,t)};T.useContext=function(e){return me.current.useContext(e)};T.useDebugValue=function(){};T.useDeferredValue=function(e){return me.current.useDeferredValue(e)};T.useEffect=function(e,t){return me.current.useEffect(e,t)};T.useId=function(){return me.current.useId()};T.useImperativeHandle=function(e,t,n){return me.current.useImperativeHandle(e,t,n)};T.useInsertionEffect=function(e,t){return me.current.useInsertionEffect(e,t)};T.useLayoutEffect=function(e,t){return me.current.useLayoutEffect(e,t)};T.useMemo=function(e,t){return me.current.useMemo(e,t)};T.useReducer=function(e,t,n){return me.current.useReducer(e,t,n)};T.useRef=function(e){return me.current.useRef(e)};T.useState=function(e){return me.current.useState(e)};T.useSyncExternalStore=function(e,t,n){return me.current.useSyncExternalStore(e,t,n)};T.useTransition=function(){return me.current.useTransition()};T.version="18.3.1";(function(e){e.exports=T})(C);const bu=id(C.exports),yl=ld({__proto__:null,default:bu},[C.exports]);var Uu={exports:{}},Pe={},$u={exports:{}},Vu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(D,B){var j=D.length;D.push(B);e:for(;0<j;){var H=j-1>>>1,X=D[H];if(0<o(X,B))D[H]=B,D[j]=X,j=H;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var B=D[0],j=D.pop();if(j!==B){D[0]=j;e:for(var H=0,X=D.length,zt=X>>>1;H<zt;){var F=2*(H+1)-1,I=D[F],q=F+1,Te=D[q];if(0>o(I,j))q<X&&0>o(Te,I)?(D[H]=Te,D[q]=j,H=q):(D[H]=I,D[F]=j,H=F);else if(q<X&&0>o(Te,j))D[H]=Te,D[q]=j,H=q;else break e}}return B}function o(D,B){var j=D.sortIndex-B.sortIndex;return j!==0?j:D.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var u=[],s=[],g=1,m=null,h=3,y=!1,k=!1,E=!1,_=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(D){for(var B=n(s);B!==null;){if(B.callback===null)r(s);else if(B.startTime<=D)r(s),B.sortIndex=B.expirationTime,t(u,B);else break;B=n(s)}}function w(D){if(E=!1,f(D),!k)if(n(u)!==null)k=!0,Wt(x);else{var B=n(s);B!==null&&En(w,B.startTime-D)}}function x(D,B){k=!1,E&&(E=!1,d(z),z=-1),y=!0;var j=h;try{for(f(B),m=n(u);m!==null&&(!(m.expirationTime>B)||D&&!ve());){var H=m.callback;if(typeof H=="function"){m.callback=null,h=m.priorityLevel;var X=H(m.expirationTime<=B);B=e.unstable_now(),typeof X=="function"?m.callback=X:m===n(u)&&r(u),f(B)}else r(u);m=n(u)}if(m!==null)var zt=!0;else{var F=n(s);F!==null&&En(w,F.startTime-B),zt=!1}return zt}finally{m=null,h=j,y=!1}}var N=!1,P=null,z=-1,O=5,L=-1;function ve(){return!(e.unstable_now()-L<O)}function Pt(){if(P!==null){var D=e.unstable_now();L=D;var B=!0;try{B=P(!0,D)}finally{B?ot():(N=!1,P=null)}}else N=!1}var ot;if(typeof c=="function")ot=function(){c(Pt)};else if(typeof MessageChannel<"u"){var $o=new MessageChannel,Vo=$o.port2;$o.port1.onmessage=Pt,ot=function(){Vo.postMessage(null)}}else ot=function(){_(Pt,0)};function Wt(D){P=D,N||(N=!0,ot())}function En(D,B){z=_(function(){D(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(D){D.callback=null},e.unstable_continueExecution=function(){k||y||(k=!0,Wt(x))},e.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<D?Math.floor(1e3/D):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(D){switch(h){case 1:case 2:case 3:var B=3;break;default:B=h}var j=h;h=B;try{return D()}finally{h=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(D,B){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var j=h;h=D;try{return B()}finally{h=j}},e.unstable_scheduleCallback=function(D,B,j){var H=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?H+j:H):j=H,D){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=j+X,D={id:g++,callback:B,priorityLevel:D,startTime:j,expirationTime:X,sortIndex:-1},j>H?(D.sortIndex=j,t(s,D),n(u)===null&&D===n(s)&&(E?(d(z),z=-1):E=!0,En(w,j-H))):(D.sortIndex=X,t(u,D),k||y||(k=!0,Wt(x))),D},e.unstable_shouldYield=ve,e.unstable_wrapCallback=function(D){var B=h;return function(){var j=h;h=B;try{return D.apply(this,arguments)}finally{h=j}}}})(Vu);(function(e){e.exports=Vu})($u);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ed=C.exports,Ne=$u.exports;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wu=new Set,Wn={};function Ut(e,t){dn(e,t),dn(e+"Capture",t)}function dn(e,t){for(Wn[e]=t,e=0;e<t.length;e++)Wu.add(t[e])}var qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xl=Object.prototype.hasOwnProperty,Sd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ha={},ma={};function Cd(e){return xl.call(ma,e)?!0:xl.call(ha,e)?!1:Sd.test(e)?ma[e]=!0:(ha[e]=!0,!1)}function Fd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Nd(e,t,n,r){if(t===null||typeof t>"u"||Fd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ge(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ue[e]=new ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ue[t]=new ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ue[e]=new ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ue[e]=new ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ue[e]=new ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ue[e]=new ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ue[e]=new ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ue[e]=new ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ue[e]=new ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var yi=/[\-:]([a-z])/g;function xi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(yi,xi);ue[t]=new ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(yi,xi);ue[t]=new ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(yi,xi);ue[t]=new ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ue[e]=new ge(e,1,!1,e.toLowerCase(),null,!1,!1)});ue.xlinkHref=new ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ue[e]=new ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function wi(e,t,n,r){var o=ue.hasOwnProperty(t)?ue[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Nd(t,n,o,r)&&(n=null),r||o===null?Cd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var rt=Ed.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vr=Symbol.for("react.element"),Qt=Symbol.for("react.portal"),Kt=Symbol.for("react.fragment"),ki=Symbol.for("react.strict_mode"),wl=Symbol.for("react.profiler"),Hu=Symbol.for("react.provider"),Qu=Symbol.for("react.context"),Ei=Symbol.for("react.forward_ref"),kl=Symbol.for("react.suspense"),El=Symbol.for("react.suspense_list"),Si=Symbol.for("react.memo"),it=Symbol.for("react.lazy"),Ku=Symbol.for("react.offscreen"),ga=Symbol.iterator;function Sn(e){return e===null||typeof e!="object"?null:(e=ga&&e[ga]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,Ho;function _n(e){if(Ho===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ho=t&&t[1]||""}return`
`+Ho+e}var Qo=!1;function Ko(e,t){if(!e||Qo)return"";Qo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(s){var r=s}Reflect.construct(e,[],t)}else{try{t.call()}catch(s){r=s}e.call(t.prototype)}else{try{throw Error()}catch(s){r=s}e()}}catch(s){if(s&&r&&typeof s.stack=="string"){for(var o=s.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,a=l.length-1;1<=i&&0<=a&&o[i]!==l[a];)a--;for(;1<=i&&0<=a;i--,a--)if(o[i]!==l[a]){if(i!==1||a!==1)do if(i--,a--,0>a||o[i]!==l[a]){var u=`
`+o[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=a);break}}}finally{Qo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?_n(e):""}function Pd(e){switch(e.tag){case 5:return _n(e.type);case 16:return _n("Lazy");case 13:return _n("Suspense");case 19:return _n("SuspenseList");case 0:case 2:case 15:return e=Ko(e.type,!1),e;case 11:return e=Ko(e.type.render,!1),e;case 1:return e=Ko(e.type,!0),e;default:return""}}function Sl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kt:return"Fragment";case Qt:return"Portal";case wl:return"Profiler";case ki:return"StrictMode";case kl:return"Suspense";case El:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Qu:return(e.displayName||"Context")+".Consumer";case Hu:return(e._context.displayName||"Context")+".Provider";case Ei:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Si:return t=e.displayName||null,t!==null?t:Sl(e.type)||"Memo";case it:t=e._payload,e=e._init;try{return Sl(e(t))}catch{}}return null}function zd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Sl(t);case 8:return t===ki?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Et(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Gu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Dd(e){var t=Gu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function yr(e){e._valueTracker||(e._valueTracker=Dd(e))}function Yu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Gu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Qr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Cl(e,t){var n=t.checked;return G({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function va(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Et(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Xu(e,t){t=t.checked,t!=null&&wi(e,"checked",t,!1)}function Fl(e,t){Xu(e,t);var n=Et(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Nl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Nl(e,t.type,Et(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ya(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Nl(e,t,n){(t!=="number"||Qr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Bn=Array.isArray;function on(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Et(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Pl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return G({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function xa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(Bn(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Et(n)}}function Zu(e,t){var n=Et(t.value),r=Et(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function wa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ju(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ju(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xr,qu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(xr=xr||document.createElement("div"),xr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=xr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Hn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Tn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ad=["Webkit","ms","Moz","O"];Object.keys(Tn).forEach(function(e){Ad.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Tn[t]=Tn[e]})});function es(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Tn.hasOwnProperty(e)&&Tn[e]?(""+t).trim():t+"px"}function ts(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=es(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var _d=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Dl(e,t){if(t){if(_d[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function Al(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _l=null;function Ci(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bl=null,ln=null,an=null;function ka(e){if(e=pr(e)){if(typeof Bl!="function")throw Error(S(280));var t=e.stateNode;t&&(t=Co(t),Bl(e.stateNode,e.type,t))}}function ns(e){ln?an?an.push(e):an=[e]:ln=e}function rs(){if(ln){var e=ln,t=an;if(an=ln=null,ka(e),t)for(e=0;e<t.length;e++)ka(t[e])}}function os(e,t){return e(t)}function ls(){}var Go=!1;function is(e,t,n){if(Go)return e(t,n);Go=!0;try{return os(e,t,n)}finally{Go=!1,(ln!==null||an!==null)&&(ls(),rs())}}function Qn(e,t){var n=e.stateNode;if(n===null)return null;var r=Co(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var jl=!1;if(qe)try{var Cn={};Object.defineProperty(Cn,"passive",{get:function(){jl=!0}}),window.addEventListener("test",Cn,Cn),window.removeEventListener("test",Cn,Cn)}catch{jl=!1}function Bd(e,t,n,r,o,l,i,a,u){var s=Array.prototype.slice.call(arguments,3);try{t.apply(n,s)}catch(g){this.onError(g)}}var In=!1,Kr=null,Gr=!1,Ll=null,jd={onError:function(e){In=!0,Kr=e}};function Ld(e,t,n,r,o,l,i,a,u){In=!1,Kr=null,Bd.apply(jd,arguments)}function Td(e,t,n,r,o,l,i,a,u){if(Ld.apply(this,arguments),In){if(In){var s=Kr;In=!1,Kr=null}else throw Error(S(198));Gr||(Gr=!0,Ll=s)}}function $t(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function as(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ea(e){if($t(e)!==e)throw Error(S(188))}function Id(e){var t=e.alternate;if(!t){if(t=$t(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return Ea(o),e;if(l===r)return Ea(o),t;l=l.sibling}throw Error(S(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,a=o.child;a;){if(a===n){i=!0,n=o,r=l;break}if(a===r){i=!0,r=o,n=l;break}a=a.sibling}if(!i){for(a=l.child;a;){if(a===n){i=!0,n=l,r=o;break}if(a===r){i=!0,r=l,n=o;break}a=a.sibling}if(!i)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function us(e){return e=Id(e),e!==null?ss(e):null}function ss(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ss(e);if(t!==null)return t;e=e.sibling}return null}var cs=Ne.unstable_scheduleCallback,Sa=Ne.unstable_cancelCallback,Rd=Ne.unstable_shouldYield,Md=Ne.unstable_requestPaint,Z=Ne.unstable_now,Od=Ne.unstable_getCurrentPriorityLevel,Fi=Ne.unstable_ImmediatePriority,ds=Ne.unstable_UserBlockingPriority,Yr=Ne.unstable_NormalPriority,bd=Ne.unstable_LowPriority,ps=Ne.unstable_IdlePriority,wo=null,Qe=null;function Ud(e){if(Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(wo,e,void 0,(e.current.flags&128)===128)}catch{}}var be=Math.clz32?Math.clz32:Wd,$d=Math.log,Vd=Math.LN2;function Wd(e){return e>>>=0,e===0?32:31-($d(e)/Vd|0)|0}var wr=64,kr=4194304;function jn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Xr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~o;a!==0?r=jn(a):(l&=i,l!==0&&(r=jn(l)))}else i=n&~o,i!==0?r=jn(i):l!==0&&(r=jn(l));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-be(t),o=1<<n,r|=e[n],t&=~o;return r}function Hd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-be(l),a=1<<i,u=o[i];u===-1?((a&n)===0||(a&r)!==0)&&(o[i]=Hd(a,t)):u<=t&&(e.expiredLanes|=a),l&=~a}}function Tl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function fs(){var e=wr;return wr<<=1,(wr&4194240)===0&&(wr=64),e}function Yo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function cr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-be(t),e[t]=n}function Kd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-be(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function Ni(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-be(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var M=0;function hs(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ms,Pi,gs,vs,ys,Il=!1,Er=[],ft=null,ht=null,mt=null,Kn=new Map,Gn=new Map,ut=[],Gd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ca(e,t){switch(e){case"focusin":case"focusout":ft=null;break;case"dragenter":case"dragleave":ht=null;break;case"mouseover":case"mouseout":mt=null;break;case"pointerover":case"pointerout":Kn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gn.delete(t.pointerId)}}function Fn(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=pr(t),t!==null&&Pi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Yd(e,t,n,r,o){switch(t){case"focusin":return ft=Fn(ft,e,t,n,r,o),!0;case"dragenter":return ht=Fn(ht,e,t,n,r,o),!0;case"mouseover":return mt=Fn(mt,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return Kn.set(l,Fn(Kn.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,Gn.set(l,Fn(Gn.get(l)||null,e,t,n,r,o)),!0}return!1}function xs(e){var t=_t(e.target);if(t!==null){var n=$t(t);if(n!==null){if(t=n.tag,t===13){if(t=as(n),t!==null){e.blockedOn=t,ys(e.priority,function(){gs(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Tr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Rl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);_l=r,n.target.dispatchEvent(r),_l=null}else return t=pr(n),t!==null&&Pi(t),e.blockedOn=n,!1;t.shift()}return!0}function Fa(e,t,n){Tr(e)&&n.delete(t)}function Xd(){Il=!1,ft!==null&&Tr(ft)&&(ft=null),ht!==null&&Tr(ht)&&(ht=null),mt!==null&&Tr(mt)&&(mt=null),Kn.forEach(Fa),Gn.forEach(Fa)}function Nn(e,t){e.blockedOn===t&&(e.blockedOn=null,Il||(Il=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,Xd)))}function Yn(e){function t(o){return Nn(o,e)}if(0<Er.length){Nn(Er[0],e);for(var n=1;n<Er.length;n++){var r=Er[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ft!==null&&Nn(ft,e),ht!==null&&Nn(ht,e),mt!==null&&Nn(mt,e),Kn.forEach(t),Gn.forEach(t),n=0;n<ut.length;n++)r=ut[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ut.length&&(n=ut[0],n.blockedOn===null);)xs(n),n.blockedOn===null&&ut.shift()}var un=rt.ReactCurrentBatchConfig,Zr=!0;function Zd(e,t,n,r){var o=M,l=un.transition;un.transition=null;try{M=1,zi(e,t,n,r)}finally{M=o,un.transition=l}}function Jd(e,t,n,r){var o=M,l=un.transition;un.transition=null;try{M=4,zi(e,t,n,r)}finally{M=o,un.transition=l}}function zi(e,t,n,r){if(Zr){var o=Rl(e,t,n,r);if(o===null)ll(e,t,r,Jr,n),Ca(e,r);else if(Yd(o,e,t,n,r))r.stopPropagation();else if(Ca(e,r),t&4&&-1<Gd.indexOf(e)){for(;o!==null;){var l=pr(o);if(l!==null&&ms(l),l=Rl(e,t,n,r),l===null&&ll(e,t,r,Jr,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else ll(e,t,r,null,n)}}var Jr=null;function Rl(e,t,n,r){if(Jr=null,e=Ci(r),e=_t(e),e!==null)if(t=$t(e),t===null)e=null;else if(n=t.tag,n===13){if(e=as(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Jr=e,null}function ws(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Od()){case Fi:return 1;case ds:return 4;case Yr:case bd:return 16;case ps:return 536870912;default:return 16}default:return 16}}var ct=null,Di=null,Ir=null;function ks(){if(Ir)return Ir;var e,t=Di,n=t.length,r,o="value"in ct?ct.value:ct.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return Ir=o.slice(e,1<r?1-r:void 0)}function Rr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Sr(){return!0}function Na(){return!1}function ze(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Sr:Na,this.isPropagationStopped=Na,this}return G(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Sr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Sr)},persist:function(){},isPersistent:Sr}),t}var xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ai=ze(xn),dr=G({},xn,{view:0,detail:0}),qd=ze(dr),Xo,Zo,Pn,ko=G({},dr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_i,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pn&&(Pn&&e.type==="mousemove"?(Xo=e.screenX-Pn.screenX,Zo=e.screenY-Pn.screenY):Zo=Xo=0,Pn=e),Xo)},movementY:function(e){return"movementY"in e?e.movementY:Zo}}),Pa=ze(ko),ep=G({},ko,{dataTransfer:0}),tp=ze(ep),np=G({},dr,{relatedTarget:0}),Jo=ze(np),rp=G({},xn,{animationName:0,elapsedTime:0,pseudoElement:0}),op=ze(rp),lp=G({},xn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ip=ze(lp),ap=G({},xn,{data:0}),za=ze(ap),up={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=cp[e])?!!t[e]:!1}function _i(){return dp}var pp=G({},dr,{key:function(e){if(e.key){var t=up[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Rr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_i,charCode:function(e){return e.type==="keypress"?Rr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Rr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),fp=ze(pp),hp=G({},ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Da=ze(hp),mp=G({},dr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_i}),gp=ze(mp),vp=G({},xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),yp=ze(vp),xp=G({},ko,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wp=ze(xp),kp=[9,13,27,32],Bi=qe&&"CompositionEvent"in window,Rn=null;qe&&"documentMode"in document&&(Rn=document.documentMode);var Ep=qe&&"TextEvent"in window&&!Rn,Es=qe&&(!Bi||Rn&&8<Rn&&11>=Rn),Aa=String.fromCharCode(32),_a=!1;function Ss(e,t){switch(e){case"keyup":return kp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gt=!1;function Sp(e,t){switch(e){case"compositionend":return Cs(t);case"keypress":return t.which!==32?null:(_a=!0,Aa);case"textInput":return e=t.data,e===Aa&&_a?null:e;default:return null}}function Cp(e,t){if(Gt)return e==="compositionend"||!Bi&&Ss(e,t)?(e=ks(),Ir=Di=ct=null,Gt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Es&&t.locale!=="ko"?null:t.data;default:return null}}var Fp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ba(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Fp[e.type]:t==="textarea"}function Fs(e,t,n,r){ns(r),t=qr(t,"onChange"),0<t.length&&(n=new Ai("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Mn=null,Xn=null;function Np(e){Is(e,0)}function Eo(e){var t=Zt(e);if(Yu(t))return e}function Pp(e,t){if(e==="change")return t}var Ns=!1;if(qe){var qo;if(qe){var el="oninput"in document;if(!el){var ja=document.createElement("div");ja.setAttribute("oninput","return;"),el=typeof ja.oninput=="function"}qo=el}else qo=!1;Ns=qo&&(!document.documentMode||9<document.documentMode)}function La(){Mn&&(Mn.detachEvent("onpropertychange",Ps),Xn=Mn=null)}function Ps(e){if(e.propertyName==="value"&&Eo(Xn)){var t=[];Fs(t,Xn,e,Ci(e)),is(Np,t)}}function zp(e,t,n){e==="focusin"?(La(),Mn=t,Xn=n,Mn.attachEvent("onpropertychange",Ps)):e==="focusout"&&La()}function Dp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Eo(Xn)}function Ap(e,t){if(e==="click")return Eo(t)}function _p(e,t){if(e==="input"||e==="change")return Eo(t)}function Bp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var $e=typeof Object.is=="function"?Object.is:Bp;function Zn(e,t){if($e(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!xl.call(t,o)||!$e(e[o],t[o]))return!1}return!0}function Ta(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ia(e,t){var n=Ta(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ta(n)}}function zs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?zs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ds(){for(var e=window,t=Qr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Qr(e.document)}return t}function ji(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function jp(e){var t=Ds(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&zs(n.ownerDocument.documentElement,n)){if(r!==null&&ji(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=Ia(n,l);var i=Ia(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Lp=qe&&"documentMode"in document&&11>=document.documentMode,Yt=null,Ml=null,On=null,Ol=!1;function Ra(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ol||Yt==null||Yt!==Qr(r)||(r=Yt,"selectionStart"in r&&ji(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),On&&Zn(On,r)||(On=r,r=qr(Ml,"onSelect"),0<r.length&&(t=new Ai("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Yt)))}function Cr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Xt={animationend:Cr("Animation","AnimationEnd"),animationiteration:Cr("Animation","AnimationIteration"),animationstart:Cr("Animation","AnimationStart"),transitionend:Cr("Transition","TransitionEnd")},tl={},As={};qe&&(As=document.createElement("div").style,"AnimationEvent"in window||(delete Xt.animationend.animation,delete Xt.animationiteration.animation,delete Xt.animationstart.animation),"TransitionEvent"in window||delete Xt.transitionend.transition);function So(e){if(tl[e])return tl[e];if(!Xt[e])return e;var t=Xt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in As)return tl[e]=t[n];return e}var _s=So("animationend"),Bs=So("animationiteration"),js=So("animationstart"),Ls=So("transitionend"),Ts=new Map,Ma="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ct(e,t){Ts.set(e,t),Ut(t,[e])}for(var nl=0;nl<Ma.length;nl++){var rl=Ma[nl],Tp=rl.toLowerCase(),Ip=rl[0].toUpperCase()+rl.slice(1);Ct(Tp,"on"+Ip)}Ct(_s,"onAnimationEnd");Ct(Bs,"onAnimationIteration");Ct(js,"onAnimationStart");Ct("dblclick","onDoubleClick");Ct("focusin","onFocus");Ct("focusout","onBlur");Ct(Ls,"onTransitionEnd");dn("onMouseEnter",["mouseout","mouseover"]);dn("onMouseLeave",["mouseout","mouseover"]);dn("onPointerEnter",["pointerout","pointerover"]);dn("onPointerLeave",["pointerout","pointerover"]);Ut("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ut("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ut("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ut("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ut("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ut("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ln="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ln));function Oa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Td(r,t,void 0,e),e.currentTarget=null}function Is(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var a=r[i],u=a.instance,s=a.currentTarget;if(a=a.listener,u!==l&&o.isPropagationStopped())break e;Oa(o,a,s),l=u}else for(i=0;i<r.length;i++){if(a=r[i],u=a.instance,s=a.currentTarget,a=a.listener,u!==l&&o.isPropagationStopped())break e;Oa(o,a,s),l=u}}}if(Gr)throw e=Ll,Gr=!1,Ll=null,e}function $(e,t){var n=t[Wl];n===void 0&&(n=t[Wl]=new Set);var r=e+"__bubble";n.has(r)||(Rs(t,e,2,!1),n.add(r))}function ol(e,t,n){var r=0;t&&(r|=4),Rs(n,e,r,t)}var Fr="_reactListening"+Math.random().toString(36).slice(2);function Jn(e){if(!e[Fr]){e[Fr]=!0,Wu.forEach(function(n){n!=="selectionchange"&&(Rp.has(n)||ol(n,!1,e),ol(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Fr]||(t[Fr]=!0,ol("selectionchange",!1,t))}}function Rs(e,t,n,r){switch(ws(t)){case 1:var o=Zd;break;case 4:o=Jd;break;default:o=zi}n=o.bind(null,t,n,e),o=void 0,!jl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function ll(e,t,n,r,o){var l=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var u=i.tag;if((u===3||u===4)&&(u=i.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;i=i.return}for(;a!==null;){if(i=_t(a),i===null)return;if(u=i.tag,u===5||u===6){r=l=i;continue e}a=a.parentNode}}r=r.return}is(function(){var s=l,g=Ci(n),m=[];e:{var h=Ts.get(e);if(h!==void 0){var y=Ai,k=e;switch(e){case"keypress":if(Rr(n)===0)break e;case"keydown":case"keyup":y=fp;break;case"focusin":k="focus",y=Jo;break;case"focusout":k="blur",y=Jo;break;case"beforeblur":case"afterblur":y=Jo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Pa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=tp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=gp;break;case _s:case Bs:case js:y=op;break;case Ls:y=yp;break;case"scroll":y=qd;break;case"wheel":y=wp;break;case"copy":case"cut":case"paste":y=ip;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Da}var E=(t&4)!==0,_=!E&&e==="scroll",d=E?h!==null?h+"Capture":null:h;E=[];for(var c=s,f;c!==null;){f=c;var w=f.stateNode;if(f.tag===5&&w!==null&&(f=w,d!==null&&(w=Qn(c,d),w!=null&&E.push(qn(c,w,f)))),_)break;c=c.return}0<E.length&&(h=new y(h,k,null,n,g),m.push({event:h,listeners:E}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&n!==_l&&(k=n.relatedTarget||n.fromElement)&&(_t(k)||k[et]))break e;if((y||h)&&(h=g.window===g?g:(h=g.ownerDocument)?h.defaultView||h.parentWindow:window,y?(k=n.relatedTarget||n.toElement,y=s,k=k?_t(k):null,k!==null&&(_=$t(k),k!==_||k.tag!==5&&k.tag!==6)&&(k=null)):(y=null,k=s),y!==k)){if(E=Pa,w="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(E=Da,w="onPointerLeave",d="onPointerEnter",c="pointer"),_=y==null?h:Zt(y),f=k==null?h:Zt(k),h=new E(w,c+"leave",y,n,g),h.target=_,h.relatedTarget=f,w=null,_t(g)===s&&(E=new E(d,c+"enter",k,n,g),E.target=f,E.relatedTarget=_,w=E),_=w,y&&k)t:{for(E=y,d=k,c=0,f=E;f;f=Ht(f))c++;for(f=0,w=d;w;w=Ht(w))f++;for(;0<c-f;)E=Ht(E),c--;for(;0<f-c;)d=Ht(d),f--;for(;c--;){if(E===d||d!==null&&E===d.alternate)break t;E=Ht(E),d=Ht(d)}E=null}else E=null;y!==null&&ba(m,h,y,E,!1),k!==null&&_!==null&&ba(m,_,k,E,!0)}}e:{if(h=s?Zt(s):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var x=Pp;else if(Ba(h))if(Ns)x=_p;else{x=Dp;var N=zp}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(x=Ap);if(x&&(x=x(e,s))){Fs(m,x,n,g);break e}N&&N(e,h,s),e==="focusout"&&(N=h._wrapperState)&&N.controlled&&h.type==="number"&&Nl(h,"number",h.value)}switch(N=s?Zt(s):window,e){case"focusin":(Ba(N)||N.contentEditable==="true")&&(Yt=N,Ml=s,On=null);break;case"focusout":On=Ml=Yt=null;break;case"mousedown":Ol=!0;break;case"contextmenu":case"mouseup":case"dragend":Ol=!1,Ra(m,n,g);break;case"selectionchange":if(Lp)break;case"keydown":case"keyup":Ra(m,n,g)}var P;if(Bi)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Gt?Ss(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(Es&&n.locale!=="ko"&&(Gt||z!=="onCompositionStart"?z==="onCompositionEnd"&&Gt&&(P=ks()):(ct=g,Di="value"in ct?ct.value:ct.textContent,Gt=!0)),N=qr(s,z),0<N.length&&(z=new za(z,e,null,n,g),m.push({event:z,listeners:N}),P?z.data=P:(P=Cs(n),P!==null&&(z.data=P)))),(P=Ep?Sp(e,n):Cp(e,n))&&(s=qr(s,"onBeforeInput"),0<s.length&&(g=new za("onBeforeInput","beforeinput",null,n,g),m.push({event:g,listeners:s}),g.data=P))}Is(m,t)})}function qn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qr(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=Qn(e,n),l!=null&&r.unshift(qn(e,l,o)),l=Qn(e,t),l!=null&&r.push(qn(e,l,o))),e=e.return}return r}function Ht(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ba(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var a=n,u=a.alternate,s=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&s!==null&&(a=s,o?(u=Qn(n,l),u!=null&&i.unshift(qn(n,u,a))):o||(u=Qn(n,l),u!=null&&i.push(qn(n,u,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Mp=/\r\n?/g,Op=/\u0000|\uFFFD/g;function Ua(e){return(typeof e=="string"?e:""+e).replace(Mp,`
`).replace(Op,"")}function Nr(e,t,n){if(t=Ua(t),Ua(e)!==t&&n)throw Error(S(425))}function eo(){}var bl=null,Ul=null;function $l(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Vl=typeof setTimeout=="function"?setTimeout:void 0,bp=typeof clearTimeout=="function"?clearTimeout:void 0,$a=typeof Promise=="function"?Promise:void 0,Up=typeof queueMicrotask=="function"?queueMicrotask:typeof $a<"u"?function(e){return $a.resolve(null).then(e).catch($p)}:Vl;function $p(e){setTimeout(function(){throw e})}function il(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Yn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Yn(t)}function gt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Va(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var wn=Math.random().toString(36).slice(2),He="__reactFiber$"+wn,er="__reactProps$"+wn,et="__reactContainer$"+wn,Wl="__reactEvents$"+wn,Vp="__reactListeners$"+wn,Wp="__reactHandles$"+wn;function _t(e){var t=e[He];if(t)return t;for(var n=e.parentNode;n;){if(t=n[et]||n[He]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Va(e);e!==null;){if(n=e[He])return n;e=Va(e)}return t}e=n,n=e.parentNode}return null}function pr(e){return e=e[He]||e[et],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Co(e){return e[er]||null}var Hl=[],Jt=-1;function Ft(e){return{current:e}}function V(e){0>Jt||(e.current=Hl[Jt],Hl[Jt]=null,Jt--)}function U(e,t){Jt++,Hl[Jt]=e.current,e.current=t}var St={},pe=Ft(St),we=Ft(!1),It=St;function pn(e,t){var n=e.type.contextTypes;if(!n)return St;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function ke(e){return e=e.childContextTypes,e!=null}function to(){V(we),V(pe)}function Wa(e,t,n){if(pe.current!==St)throw Error(S(168));U(pe,t),U(we,n)}function Ms(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(S(108,zd(e)||"Unknown",o));return G({},n,r)}function no(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||St,It=pe.current,U(pe,e),U(we,we.current),!0}function Ha(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Ms(e,t,It),r.__reactInternalMemoizedMergedChildContext=e,V(we),V(pe),U(pe,e)):V(we),U(we,n)}var Ye=null,Fo=!1,al=!1;function Os(e){Ye===null?Ye=[e]:Ye.push(e)}function Hp(e){Fo=!0,Os(e)}function Nt(){if(!al&&Ye!==null){al=!0;var e=0,t=M;try{var n=Ye;for(M=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ye=null,Fo=!1}catch(o){throw Ye!==null&&(Ye=Ye.slice(e+1)),cs(Fi,Nt),o}finally{M=t,al=!1}}return null}var qt=[],en=0,ro=null,oo=0,De=[],Ae=0,Rt=null,Xe=1,Ze="";function Dt(e,t){qt[en++]=oo,qt[en++]=ro,ro=e,oo=t}function bs(e,t,n){De[Ae++]=Xe,De[Ae++]=Ze,De[Ae++]=Rt,Rt=e;var r=Xe;e=Ze;var o=32-be(r)-1;r&=~(1<<o),n+=1;var l=32-be(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,Xe=1<<32-be(t)+o|n<<o|r,Ze=l+e}else Xe=1<<l|n<<o|r,Ze=e}function Li(e){e.return!==null&&(Dt(e,1),bs(e,1,0))}function Ti(e){for(;e===ro;)ro=qt[--en],qt[en]=null,oo=qt[--en],qt[en]=null;for(;e===Rt;)Rt=De[--Ae],De[Ae]=null,Ze=De[--Ae],De[Ae]=null,Xe=De[--Ae],De[Ae]=null}var Fe=null,Ce=null,W=!1,Oe=null;function Us(e,t){var n=_e(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Qa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Fe=e,Ce=gt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Fe=e,Ce=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Rt!==null?{id:Xe,overflow:Ze}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=_e(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Fe=e,Ce=null,!0):!1;default:return!1}}function Ql(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Kl(e){if(W){var t=Ce;if(t){var n=t;if(!Qa(e,t)){if(Ql(e))throw Error(S(418));t=gt(n.nextSibling);var r=Fe;t&&Qa(e,t)?Us(r,n):(e.flags=e.flags&-4097|2,W=!1,Fe=e)}}else{if(Ql(e))throw Error(S(418));e.flags=e.flags&-4097|2,W=!1,Fe=e}}}function Ka(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Fe=e}function Pr(e){if(e!==Fe)return!1;if(!W)return Ka(e),W=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!$l(e.type,e.memoizedProps)),t&&(t=Ce)){if(Ql(e))throw $s(),Error(S(418));for(;t;)Us(e,t),t=gt(t.nextSibling)}if(Ka(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ce=gt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ce=null}}else Ce=Fe?gt(e.stateNode.nextSibling):null;return!0}function $s(){for(var e=Ce;e;)e=gt(e.nextSibling)}function fn(){Ce=Fe=null,W=!1}function Ii(e){Oe===null?Oe=[e]:Oe.push(e)}var Qp=rt.ReactCurrentBatchConfig;function zn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var a=o.refs;i===null?delete a[l]:a[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function zr(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ga(e){var t=e._init;return t(e._payload)}function Vs(e){function t(d,c){if(e){var f=d.deletions;f===null?(d.deletions=[c],d.flags|=16):f.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function o(d,c){return d=wt(d,c),d.index=0,d.sibling=null,d}function l(d,c,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<c?(d.flags|=2,c):f):(d.flags|=2,c)):(d.flags|=1048576,c)}function i(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,c,f,w){return c===null||c.tag!==6?(c=hl(f,d.mode,w),c.return=d,c):(c=o(c,f),c.return=d,c)}function u(d,c,f,w){var x=f.type;return x===Kt?g(d,c,f.props.children,w,f.key):c!==null&&(c.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===it&&Ga(x)===c.type)?(w=o(c,f.props),w.ref=zn(d,c,f),w.return=d,w):(w=Wr(f.type,f.key,f.props,null,d.mode,w),w.ref=zn(d,c,f),w.return=d,w)}function s(d,c,f,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=ml(f,d.mode,w),c.return=d,c):(c=o(c,f.children||[]),c.return=d,c)}function g(d,c,f,w,x){return c===null||c.tag!==7?(c=Tt(f,d.mode,w,x),c.return=d,c):(c=o(c,f),c.return=d,c)}function m(d,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=hl(""+c,d.mode,f),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case vr:return f=Wr(c.type,c.key,c.props,null,d.mode,f),f.ref=zn(d,null,c),f.return=d,f;case Qt:return c=ml(c,d.mode,f),c.return=d,c;case it:var w=c._init;return m(d,w(c._payload),f)}if(Bn(c)||Sn(c))return c=Tt(c,d.mode,f,null),c.return=d,c;zr(d,c)}return null}function h(d,c,f,w){var x=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return x!==null?null:a(d,c,""+f,w);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case vr:return f.key===x?u(d,c,f,w):null;case Qt:return f.key===x?s(d,c,f,w):null;case it:return x=f._init,h(d,c,x(f._payload),w)}if(Bn(f)||Sn(f))return x!==null?null:g(d,c,f,w,null);zr(d,f)}return null}function y(d,c,f,w,x){if(typeof w=="string"&&w!==""||typeof w=="number")return d=d.get(f)||null,a(c,d,""+w,x);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case vr:return d=d.get(w.key===null?f:w.key)||null,u(c,d,w,x);case Qt:return d=d.get(w.key===null?f:w.key)||null,s(c,d,w,x);case it:var N=w._init;return y(d,c,f,N(w._payload),x)}if(Bn(w)||Sn(w))return d=d.get(f)||null,g(c,d,w,x,null);zr(c,w)}return null}function k(d,c,f,w){for(var x=null,N=null,P=c,z=c=0,O=null;P!==null&&z<f.length;z++){P.index>z?(O=P,P=null):O=P.sibling;var L=h(d,P,f[z],w);if(L===null){P===null&&(P=O);break}e&&P&&L.alternate===null&&t(d,P),c=l(L,c,z),N===null?x=L:N.sibling=L,N=L,P=O}if(z===f.length)return n(d,P),W&&Dt(d,z),x;if(P===null){for(;z<f.length;z++)P=m(d,f[z],w),P!==null&&(c=l(P,c,z),N===null?x=P:N.sibling=P,N=P);return W&&Dt(d,z),x}for(P=r(d,P);z<f.length;z++)O=y(P,d,z,f[z],w),O!==null&&(e&&O.alternate!==null&&P.delete(O.key===null?z:O.key),c=l(O,c,z),N===null?x=O:N.sibling=O,N=O);return e&&P.forEach(function(ve){return t(d,ve)}),W&&Dt(d,z),x}function E(d,c,f,w){var x=Sn(f);if(typeof x!="function")throw Error(S(150));if(f=x.call(f),f==null)throw Error(S(151));for(var N=x=null,P=c,z=c=0,O=null,L=f.next();P!==null&&!L.done;z++,L=f.next()){P.index>z?(O=P,P=null):O=P.sibling;var ve=h(d,P,L.value,w);if(ve===null){P===null&&(P=O);break}e&&P&&ve.alternate===null&&t(d,P),c=l(ve,c,z),N===null?x=ve:N.sibling=ve,N=ve,P=O}if(L.done)return n(d,P),W&&Dt(d,z),x;if(P===null){for(;!L.done;z++,L=f.next())L=m(d,L.value,w),L!==null&&(c=l(L,c,z),N===null?x=L:N.sibling=L,N=L);return W&&Dt(d,z),x}for(P=r(d,P);!L.done;z++,L=f.next())L=y(P,d,z,L.value,w),L!==null&&(e&&L.alternate!==null&&P.delete(L.key===null?z:L.key),c=l(L,c,z),N===null?x=L:N.sibling=L,N=L);return e&&P.forEach(function(Pt){return t(d,Pt)}),W&&Dt(d,z),x}function _(d,c,f,w){if(typeof f=="object"&&f!==null&&f.type===Kt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case vr:e:{for(var x=f.key,N=c;N!==null;){if(N.key===x){if(x=f.type,x===Kt){if(N.tag===7){n(d,N.sibling),c=o(N,f.props.children),c.return=d,d=c;break e}}else if(N.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===it&&Ga(x)===N.type){n(d,N.sibling),c=o(N,f.props),c.ref=zn(d,N,f),c.return=d,d=c;break e}n(d,N);break}else t(d,N);N=N.sibling}f.type===Kt?(c=Tt(f.props.children,d.mode,w,f.key),c.return=d,d=c):(w=Wr(f.type,f.key,f.props,null,d.mode,w),w.ref=zn(d,c,f),w.return=d,d=w)}return i(d);case Qt:e:{for(N=f.key;c!==null;){if(c.key===N)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(d,c.sibling),c=o(c,f.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=ml(f,d.mode,w),c.return=d,d=c}return i(d);case it:return N=f._init,_(d,c,N(f._payload),w)}if(Bn(f))return k(d,c,f,w);if(Sn(f))return E(d,c,f,w);zr(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(d,c.sibling),c=o(c,f),c.return=d,d=c):(n(d,c),c=hl(f,d.mode,w),c.return=d,d=c),i(d)):n(d,c)}return _}var hn=Vs(!0),Ws=Vs(!1),lo=Ft(null),io=null,tn=null,Ri=null;function Mi(){Ri=tn=io=null}function Oi(e){var t=lo.current;V(lo),e._currentValue=t}function Gl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function sn(e,t){io=e,Ri=tn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(xe=!0),e.firstContext=null)}function je(e){var t=e._currentValue;if(Ri!==e)if(e={context:e,memoizedValue:t,next:null},tn===null){if(io===null)throw Error(S(308));tn=e,io.dependencies={lanes:0,firstContext:e}}else tn=tn.next=e;return t}var Bt=null;function bi(e){Bt===null?Bt=[e]:Bt.push(e)}function Hs(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,bi(t)):(n.next=o.next,o.next=n),t.interleaved=n,tt(e,r)}function tt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var at=!1;function Ui(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Je(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function vt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(R&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,tt(e,n)}return o=r.interleaved,o===null?(t.next=t,bi(r)):(t.next=o.next,o.next=t),r.interleaved=t,tt(e,n)}function Mr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ni(e,n)}}function Ya(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ao(e,t,n,r){var o=e.updateQueue;at=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var u=a,s=u.next;u.next=null,i===null?l=s:i.next=s,i=u;var g=e.alternate;g!==null&&(g=g.updateQueue,a=g.lastBaseUpdate,a!==i&&(a===null?g.firstBaseUpdate=s:a.next=s,g.lastBaseUpdate=u))}if(l!==null){var m=o.baseState;i=0,g=s=u=null,a=l;do{var h=a.lane,y=a.eventTime;if((r&h)===h){g!==null&&(g=g.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var k=e,E=a;switch(h=t,y=n,E.tag){case 1:if(k=E.payload,typeof k=="function"){m=k.call(y,m,h);break e}m=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=E.payload,h=typeof k=="function"?k.call(y,m,h):k,h==null)break e;m=G({},m,h);break e;case 2:at=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[a]:h.push(a))}else y={eventTime:y,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},g===null?(s=g=y,u=m):g=g.next=y,i|=h;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;h=a,a=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(1);if(g===null&&(u=m),o.baseState=u,o.firstBaseUpdate=s,o.lastBaseUpdate=g,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);Ot|=i,e.lanes=i,e.memoizedState=m}}function Xa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(S(191,o));o.call(r)}}}var fr={},Ke=Ft(fr),tr=Ft(fr),nr=Ft(fr);function jt(e){if(e===fr)throw Error(S(174));return e}function $i(e,t){switch(U(nr,t),U(tr,e),U(Ke,fr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:zl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=zl(t,e)}V(Ke),U(Ke,t)}function mn(){V(Ke),V(tr),V(nr)}function Ks(e){jt(nr.current);var t=jt(Ke.current),n=zl(t,e.type);t!==n&&(U(tr,e),U(Ke,n))}function Vi(e){tr.current===e&&(V(Ke),V(tr))}var Q=Ft(0);function uo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ul=[];function Wi(){for(var e=0;e<ul.length;e++)ul[e]._workInProgressVersionPrimary=null;ul.length=0}var Or=rt.ReactCurrentDispatcher,sl=rt.ReactCurrentBatchConfig,Mt=0,K=null,ee=null,re=null,so=!1,bn=!1,rr=0,Kp=0;function se(){throw Error(S(321))}function Hi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!$e(e[n],t[n]))return!1;return!0}function Qi(e,t,n,r,o,l){if(Mt=l,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Or.current=e===null||e.memoizedState===null?Zp:Jp,e=n(r,o),bn){l=0;do{if(bn=!1,rr=0,25<=l)throw Error(S(301));l+=1,re=ee=null,t.updateQueue=null,Or.current=qp,e=n(r,o)}while(bn)}if(Or.current=co,t=ee!==null&&ee.next!==null,Mt=0,re=ee=K=null,so=!1,t)throw Error(S(300));return e}function Ki(){var e=rr!==0;return rr=0,e}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?K.memoizedState=re=e:re=re.next=e,re}function Le(){if(ee===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var t=re===null?K.memoizedState:re.next;if(t!==null)re=t,ee=e;else{if(e===null)throw Error(S(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},re===null?K.memoizedState=re=e:re=re.next=e}return re}function or(e,t){return typeof t=="function"?t(e):t}function cl(e){var t=Le(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=ee,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var a=i=null,u=null,s=l;do{var g=s.lane;if((Mt&g)===g)u!==null&&(u=u.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),r=s.hasEagerState?s.eagerState:e(r,s.action);else{var m={lane:g,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};u===null?(a=u=m,i=r):u=u.next=m,K.lanes|=g,Ot|=g}s=s.next}while(s!==null&&s!==l);u===null?i=r:u.next=a,$e(r,t.memoizedState)||(xe=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,K.lanes|=l,Ot|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function dl(e){var t=Le(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);$e(l,t.memoizedState)||(xe=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Gs(){}function Ys(e,t){var n=K,r=Le(),o=t(),l=!$e(r.memoizedState,o);if(l&&(r.memoizedState=o,xe=!0),r=r.queue,Gi(Js.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||re!==null&&re.memoizedState.tag&1){if(n.flags|=2048,lr(9,Zs.bind(null,n,r,o,t),void 0,null),oe===null)throw Error(S(349));(Mt&30)!==0||Xs(n,t,o)}return o}function Xs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Zs(e,t,n,r){t.value=n,t.getSnapshot=r,qs(t)&&ec(e)}function Js(e,t,n){return n(function(){qs(t)&&ec(e)})}function qs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!$e(e,n)}catch{return!0}}function ec(e){var t=tt(e,1);t!==null&&Ue(t,e,1,-1)}function Za(e){var t=We();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:or,lastRenderedState:e},t.queue=e,e=e.dispatch=Xp.bind(null,K,e),[t.memoizedState,e]}function lr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function tc(){return Le().memoizedState}function br(e,t,n,r){var o=We();K.flags|=e,o.memoizedState=lr(1|t,n,void 0,r===void 0?null:r)}function No(e,t,n,r){var o=Le();r=r===void 0?null:r;var l=void 0;if(ee!==null){var i=ee.memoizedState;if(l=i.destroy,r!==null&&Hi(r,i.deps)){o.memoizedState=lr(t,n,l,r);return}}K.flags|=e,o.memoizedState=lr(1|t,n,l,r)}function Ja(e,t){return br(8390656,8,e,t)}function Gi(e,t){return No(2048,8,e,t)}function nc(e,t){return No(4,2,e,t)}function rc(e,t){return No(4,4,e,t)}function oc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function lc(e,t,n){return n=n!=null?n.concat([e]):null,No(4,4,oc.bind(null,t,e),n)}function Yi(){}function ic(e,t){var n=Le();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Hi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ac(e,t){var n=Le();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Hi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function uc(e,t,n){return(Mt&21)===0?(e.baseState&&(e.baseState=!1,xe=!0),e.memoizedState=n):($e(n,t)||(n=fs(),K.lanes|=n,Ot|=n,e.baseState=!0),t)}function Gp(e,t){var n=M;M=n!==0&&4>n?n:4,e(!0);var r=sl.transition;sl.transition={};try{e(!1),t()}finally{M=n,sl.transition=r}}function sc(){return Le().memoizedState}function Yp(e,t,n){var r=xt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},cc(e))dc(t,n);else if(n=Hs(e,t,n,r),n!==null){var o=he();Ue(n,e,r,o),pc(n,t,r)}}function Xp(e,t,n){var r=xt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(cc(e))dc(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,a=l(i,n);if(o.hasEagerState=!0,o.eagerState=a,$e(a,i)){var u=t.interleaved;u===null?(o.next=o,bi(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=Hs(e,t,o,r),n!==null&&(o=he(),Ue(n,e,r,o),pc(n,t,r))}}function cc(e){var t=e.alternate;return e===K||t!==null&&t===K}function dc(e,t){bn=so=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function pc(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ni(e,n)}}var co={readContext:je,useCallback:se,useContext:se,useEffect:se,useImperativeHandle:se,useInsertionEffect:se,useLayoutEffect:se,useMemo:se,useReducer:se,useRef:se,useState:se,useDebugValue:se,useDeferredValue:se,useTransition:se,useMutableSource:se,useSyncExternalStore:se,useId:se,unstable_isNewReconciler:!1},Zp={readContext:je,useCallback:function(e,t){return We().memoizedState=[e,t===void 0?null:t],e},useContext:je,useEffect:Ja,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,br(4194308,4,oc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return br(4194308,4,e,t)},useInsertionEffect:function(e,t){return br(4,2,e,t)},useMemo:function(e,t){var n=We();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=We();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Yp.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var t=We();return e={current:e},t.memoizedState=e},useState:Za,useDebugValue:Yi,useDeferredValue:function(e){return We().memoizedState=e},useTransition:function(){var e=Za(!1),t=e[0];return e=Gp.bind(null,e[1]),We().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=K,o=We();if(W){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),oe===null)throw Error(S(349));(Mt&30)!==0||Xs(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,Ja(Js.bind(null,r,l,e),[e]),r.flags|=2048,lr(9,Zs.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=We(),t=oe.identifierPrefix;if(W){var n=Ze,r=Xe;n=(r&~(1<<32-be(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=rr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Kp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Jp={readContext:je,useCallback:ic,useContext:je,useEffect:Gi,useImperativeHandle:lc,useInsertionEffect:nc,useLayoutEffect:rc,useMemo:ac,useReducer:cl,useRef:tc,useState:function(){return cl(or)},useDebugValue:Yi,useDeferredValue:function(e){var t=Le();return uc(t,ee.memoizedState,e)},useTransition:function(){var e=cl(or)[0],t=Le().memoizedState;return[e,t]},useMutableSource:Gs,useSyncExternalStore:Ys,useId:sc,unstable_isNewReconciler:!1},qp={readContext:je,useCallback:ic,useContext:je,useEffect:Gi,useImperativeHandle:lc,useInsertionEffect:nc,useLayoutEffect:rc,useMemo:ac,useReducer:dl,useRef:tc,useState:function(){return dl(or)},useDebugValue:Yi,useDeferredValue:function(e){var t=Le();return ee===null?t.memoizedState=e:uc(t,ee.memoizedState,e)},useTransition:function(){var e=dl(or)[0],t=Le().memoizedState;return[e,t]},useMutableSource:Gs,useSyncExternalStore:Ys,useId:sc,unstable_isNewReconciler:!1};function Re(e,t){if(e&&e.defaultProps){t=G({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Yl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:G({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Po={isMounted:function(e){return(e=e._reactInternals)?$t(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=he(),o=xt(e),l=Je(r,o);l.payload=t,n!=null&&(l.callback=n),t=vt(e,l,o),t!==null&&(Ue(t,e,o,r),Mr(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=he(),o=xt(e),l=Je(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=vt(e,l,o),t!==null&&(Ue(t,e,o,r),Mr(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=he(),r=xt(e),o=Je(n,r);o.tag=2,t!=null&&(o.callback=t),t=vt(e,o,r),t!==null&&(Ue(t,e,r,n),Mr(t,e,r))}};function qa(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!Zn(n,r)||!Zn(o,l):!0}function fc(e,t,n){var r=!1,o=St,l=t.contextType;return typeof l=="object"&&l!==null?l=je(l):(o=ke(t)?It:pe.current,r=t.contextTypes,l=(r=r!=null)?pn(e,o):St),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Po,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function eu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Po.enqueueReplaceState(t,t.state,null)}function Xl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Ui(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=je(l):(l=ke(t)?It:pe.current,o.context=pn(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Yl(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Po.enqueueReplaceState(o,o.state,null),ao(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function gn(e,t){try{var n="",r=t;do n+=Pd(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function pl(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function Zl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ef=typeof WeakMap=="function"?WeakMap:Map;function hc(e,t,n){n=Je(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){fo||(fo=!0,ai=r),Zl(e,t)},n}function mc(e,t,n){n=Je(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Zl(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Zl(e,t),typeof r!="function"&&(yt===null?yt=new Set([this]):yt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function tu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ef;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=mf.bind(null,e,t,n),t.then(e,e))}function nu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ru(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Je(-1,1),t.tag=2,vt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var tf=rt.ReactCurrentOwner,xe=!1;function fe(e,t,n,r){t.child=e===null?Ws(t,null,n,r):hn(t,e.child,n,r)}function ou(e,t,n,r,o){n=n.render;var l=t.ref;return sn(t,o),r=Qi(e,t,n,r,l,o),n=Ki(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,nt(e,t,o)):(W&&n&&Li(t),t.flags|=1,fe(e,t,r,o),t.child)}function lu(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!ra(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,gc(e,t,l,r,o)):(e=Wr(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,(e.lanes&o)===0){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:Zn,n(i,r)&&e.ref===t.ref)return nt(e,t,o)}return t.flags|=1,e=wt(l,r),e.ref=t.ref,e.return=t,t.child=e}function gc(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(Zn(l,r)&&e.ref===t.ref)if(xe=!1,t.pendingProps=r=l,(e.lanes&o)!==0)(e.flags&131072)!==0&&(xe=!0);else return t.lanes=e.lanes,nt(e,t,o)}return Jl(e,t,n,r,o)}function vc(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(rn,Se),Se|=n;else{if((n&1073741824)===0)return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(rn,Se),Se|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,U(rn,Se),Se|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,U(rn,Se),Se|=r;return fe(e,t,o,n),t.child}function yc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Jl(e,t,n,r,o){var l=ke(n)?It:pe.current;return l=pn(t,l),sn(t,o),n=Qi(e,t,n,r,l,o),r=Ki(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,nt(e,t,o)):(W&&r&&Li(t),t.flags|=1,fe(e,t,n,o),t.child)}function iu(e,t,n,r,o){if(ke(n)){var l=!0;no(t)}else l=!1;if(sn(t,o),t.stateNode===null)Ur(e,t),fc(t,n,r),Xl(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var u=i.context,s=n.contextType;typeof s=="object"&&s!==null?s=je(s):(s=ke(n)?It:pe.current,s=pn(t,s));var g=n.getDerivedStateFromProps,m=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function";m||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||u!==s)&&eu(t,i,r,s),at=!1;var h=t.memoizedState;i.state=h,ao(t,r,i,o),u=t.memoizedState,a!==r||h!==u||we.current||at?(typeof g=="function"&&(Yl(t,n,g,r),u=t.memoizedState),(a=at||qa(t,n,a,r,h,u,s))?(m||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),i.props=r,i.state=u,i.context=s,r=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Qs(e,t),a=t.memoizedProps,s=t.type===t.elementType?a:Re(t.type,a),i.props=s,m=t.pendingProps,h=i.context,u=n.contextType,typeof u=="object"&&u!==null?u=je(u):(u=ke(n)?It:pe.current,u=pn(t,u));var y=n.getDerivedStateFromProps;(g=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==m||h!==u)&&eu(t,i,r,u),at=!1,h=t.memoizedState,i.state=h,ao(t,r,i,o);var k=t.memoizedState;a!==m||h!==k||we.current||at?(typeof y=="function"&&(Yl(t,n,y,r),k=t.memoizedState),(s=at||qa(t,n,s,r,h,k,u)||!1)?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,k,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,k,u)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),i.props=r,i.state=k,i.context=u,r=s):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return ql(e,t,n,r,l,o)}function ql(e,t,n,r,o,l){yc(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&Ha(t,n,!1),nt(e,t,l);r=t.stateNode,tf.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=hn(t,e.child,null,l),t.child=hn(t,null,a,l)):fe(e,t,a,l),t.memoizedState=r.state,o&&Ha(t,n,!0),t.child}function xc(e){var t=e.stateNode;t.pendingContext?Wa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Wa(e,t.context,!1),$i(e,t.containerInfo)}function au(e,t,n,r,o){return fn(),Ii(o),t.flags|=256,fe(e,t,n,r),t.child}var ei={dehydrated:null,treeContext:null,retryLane:0};function ti(e){return{baseLanes:e,cachePool:null,transitions:null}}function wc(e,t,n){var r=t.pendingProps,o=Q.current,l=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),U(Q,o&1),e===null)return Kl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},(r&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=i):l=Ao(i,r,0,null),e=Tt(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=ti(n),t.memoizedState=ei,e):Xi(t,i));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return nf(e,t,i,r,a,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,a=o.sibling;var u={mode:"hidden",children:r.children};return(i&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=wt(o,u),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?l=wt(a,l):(l=Tt(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?ti(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=ei,r}return l=e.child,e=l.sibling,r=wt(l,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Xi(e,t){return t=Ao({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Dr(e,t,n,r){return r!==null&&Ii(r),hn(t,e.child,null,n),e=Xi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function nf(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=pl(Error(S(422))),Dr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=Ao({mode:"visible",children:r.children},o,0,null),l=Tt(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,(t.mode&1)!==0&&hn(t,e.child,null,i),t.child.memoizedState=ti(i),t.memoizedState=ei,l);if((t.mode&1)===0)return Dr(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(S(419)),r=pl(l,r,void 0),Dr(e,t,i,r)}if(a=(i&e.childLanes)!==0,xe||a){if(r=oe,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|i))!==0?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,tt(e,o),Ue(r,e,o,-1))}return na(),r=pl(Error(S(421))),Dr(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=gf.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,Ce=gt(o.nextSibling),Fe=t,W=!0,Oe=null,e!==null&&(De[Ae++]=Xe,De[Ae++]=Ze,De[Ae++]=Rt,Xe=e.id,Ze=e.overflow,Rt=t),t=Xi(t,r.children),t.flags|=4096,t)}function uu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Gl(e.return,t,n)}function fl(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function kc(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(fe(e,t,r.children,n),r=Q.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&uu(e,n,t);else if(e.tag===19)uu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(Q,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&uo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),fl(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&uo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}fl(t,!0,n,null,l);break;case"together":fl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ur(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function nt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ot|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=wt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=wt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function rf(e,t,n){switch(t.tag){case 3:xc(t),fn();break;case 5:Ks(t);break;case 1:ke(t.type)&&no(t);break;case 4:$i(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;U(lo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(Q,Q.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?wc(e,t,n):(U(Q,Q.current&1),e=nt(e,t,n),e!==null?e.sibling:null);U(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return kc(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),U(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,vc(e,t,n)}return nt(e,t,n)}var Ec,ni,Sc,Cc;Ec=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ni=function(){};Sc=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,jt(Ke.current);var l=null;switch(n){case"input":o=Cl(e,o),r=Cl(e,r),l=[];break;case"select":o=G({},o,{value:void 0}),r=G({},r,{value:void 0}),l=[];break;case"textarea":o=Pl(e,o),r=Pl(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=eo)}Dl(n,r);var i;n=null;for(s in o)if(!r.hasOwnProperty(s)&&o.hasOwnProperty(s)&&o[s]!=null)if(s==="style"){var a=o[s];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Wn.hasOwnProperty(s)?l||(l=[]):(l=l||[]).push(s,null));for(s in r){var u=r[s];if(a=o!=null?o[s]:void 0,r.hasOwnProperty(s)&&u!==a&&(u!=null||a!=null))if(s==="style")if(a){for(i in a)!a.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in u)u.hasOwnProperty(i)&&a[i]!==u[i]&&(n||(n={}),n[i]=u[i])}else n||(l||(l=[]),l.push(s,n)),n=u;else s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(l=l||[]).push(s,u)):s==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(s,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(Wn.hasOwnProperty(s)?(u!=null&&s==="onScroll"&&$("scroll",e),l||a===u||(l=[])):(l=l||[]).push(s,u))}n&&(l=l||[]).push("style",n);var s=l;(t.updateQueue=s)&&(t.flags|=4)}};Cc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Dn(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function of(e,t,n){var r=t.pendingProps;switch(Ti(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(t),null;case 1:return ke(t.type)&&to(),ce(t),null;case 3:return r=t.stateNode,mn(),V(we),V(pe),Wi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Pr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Oe!==null&&(ci(Oe),Oe=null))),ni(e,t),ce(t),null;case 5:Vi(t);var o=jt(nr.current);if(n=t.type,e!==null&&t.stateNode!=null)Sc(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return ce(t),null}if(e=jt(Ke.current),Pr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[He]=t,r[er]=l,e=(t.mode&1)!==0,n){case"dialog":$("cancel",r),$("close",r);break;case"iframe":case"object":case"embed":$("load",r);break;case"video":case"audio":for(o=0;o<Ln.length;o++)$(Ln[o],r);break;case"source":$("error",r);break;case"img":case"image":case"link":$("error",r),$("load",r);break;case"details":$("toggle",r);break;case"input":va(r,l),$("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},$("invalid",r);break;case"textarea":xa(r,l),$("invalid",r)}Dl(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&Nr(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&Nr(r.textContent,a,e),o=["children",""+a]):Wn.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&$("scroll",r)}switch(n){case"input":yr(r),ya(r,l,!0);break;case"textarea":yr(r),wa(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=eo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ju(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[He]=t,e[er]=r,Ec(e,t,!1,!1),t.stateNode=e;e:{switch(i=Al(n,r),n){case"dialog":$("cancel",e),$("close",e),o=r;break;case"iframe":case"object":case"embed":$("load",e),o=r;break;case"video":case"audio":for(o=0;o<Ln.length;o++)$(Ln[o],e);o=r;break;case"source":$("error",e),o=r;break;case"img":case"image":case"link":$("error",e),$("load",e),o=r;break;case"details":$("toggle",e),o=r;break;case"input":va(e,r),o=Cl(e,r),$("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=G({},r,{value:void 0}),$("invalid",e);break;case"textarea":xa(e,r),o=Pl(e,r),$("invalid",e);break;default:o=r}Dl(n,o),a=o;for(l in a)if(a.hasOwnProperty(l)){var u=a[l];l==="style"?ts(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&qu(e,u)):l==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Hn(e,u):typeof u=="number"&&Hn(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Wn.hasOwnProperty(l)?u!=null&&l==="onScroll"&&$("scroll",e):u!=null&&wi(e,l,u,i))}switch(n){case"input":yr(e),ya(e,r,!1);break;case"textarea":yr(e),wa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Et(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?on(e,!!r.multiple,l,!1):r.defaultValue!=null&&on(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=eo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ce(t),null;case 6:if(e&&t.stateNode!=null)Cc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=jt(nr.current),jt(Ke.current),Pr(t)){if(r=t.stateNode,n=t.memoizedProps,r[He]=t,(l=r.nodeValue!==n)&&(e=Fe,e!==null))switch(e.tag){case 3:Nr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Nr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[He]=t,t.stateNode=r}return ce(t),null;case 13:if(V(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&Ce!==null&&(t.mode&1)!==0&&(t.flags&128)===0)$s(),fn(),t.flags|=98560,l=!1;else if(l=Pr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(S(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(S(317));l[He]=t}else fn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ce(t),l=!1}else Oe!==null&&(ci(Oe),Oe=null),l=!0;if(!l)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Q.current&1)!==0?te===0&&(te=3):na())),t.updateQueue!==null&&(t.flags|=4),ce(t),null);case 4:return mn(),ni(e,t),e===null&&Jn(t.stateNode.containerInfo),ce(t),null;case 10:return Oi(t.type._context),ce(t),null;case 17:return ke(t.type)&&to(),ce(t),null;case 19:if(V(Q),l=t.memoizedState,l===null)return ce(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)Dn(l,!1);else{if(te!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=uo(e),i!==null){for(t.flags|=128,Dn(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(Q,Q.current&1|2),t.child}e=e.sibling}l.tail!==null&&Z()>vn&&(t.flags|=128,r=!0,Dn(l,!1),t.lanes=4194304)}else{if(!r)if(e=uo(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Dn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!W)return ce(t),null}else 2*Z()-l.renderingStartTime>vn&&n!==1073741824&&(t.flags|=128,r=!0,Dn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Z(),t.sibling=null,n=Q.current,U(Q,r?n&1|2:n&1),t):(ce(t),null);case 22:case 23:return ta(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Se&1073741824)!==0&&(ce(t),t.subtreeFlags&6&&(t.flags|=8192)):ce(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function lf(e,t){switch(Ti(t),t.tag){case 1:return ke(t.type)&&to(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return mn(),V(we),V(pe),Wi(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Vi(t),null;case 13:if(V(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));fn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(Q),null;case 4:return mn(),null;case 10:return Oi(t.type._context),null;case 22:case 23:return ta(),null;case 24:return null;default:return null}}var Ar=!1,de=!1,af=typeof WeakSet=="function"?WeakSet:Set,A=null;function nn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Y(e,t,r)}else n.current=null}function ri(e,t,n){try{n()}catch(r){Y(e,t,r)}}var su=!1;function uf(e,t){if(bl=Zr,e=Ds(),ji(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,a=-1,u=-1,s=0,g=0,m=e,h=null;t:for(;;){for(var y;m!==n||o!==0&&m.nodeType!==3||(a=i+o),m!==l||r!==0&&m.nodeType!==3||(u=i+r),m.nodeType===3&&(i+=m.nodeValue.length),(y=m.firstChild)!==null;)h=m,m=y;for(;;){if(m===e)break t;if(h===n&&++s===o&&(a=i),h===l&&++g===r&&(u=i),(y=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=y}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ul={focusedElem:e,selectionRange:n},Zr=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var k=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var E=k.memoizedProps,_=k.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?E:Re(t.type,E),_);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){Y(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return k=su,su=!1,k}function Un(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&ri(t,n,l)}o=o.next}while(o!==r)}}function zo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function oi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Fc(e){var t=e.alternate;t!==null&&(e.alternate=null,Fc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[He],delete t[er],delete t[Wl],delete t[Vp],delete t[Wp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Nc(e){return e.tag===5||e.tag===3||e.tag===4}function cu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Nc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function li(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=eo));else if(r!==4&&(e=e.child,e!==null))for(li(e,t,n),e=e.sibling;e!==null;)li(e,t,n),e=e.sibling}function ii(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ii(e,t,n),e=e.sibling;e!==null;)ii(e,t,n),e=e.sibling}var le=null,Me=!1;function lt(e,t,n){for(n=n.child;n!==null;)Pc(e,t,n),n=n.sibling}function Pc(e,t,n){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(wo,n)}catch{}switch(n.tag){case 5:de||nn(n,t);case 6:var r=le,o=Me;le=null,lt(e,t,n),le=r,Me=o,le!==null&&(Me?(e=le,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):le.removeChild(n.stateNode));break;case 18:le!==null&&(Me?(e=le,n=n.stateNode,e.nodeType===8?il(e.parentNode,n):e.nodeType===1&&il(e,n),Yn(e)):il(le,n.stateNode));break;case 4:r=le,o=Me,le=n.stateNode.containerInfo,Me=!0,lt(e,t,n),le=r,Me=o;break;case 0:case 11:case 14:case 15:if(!de&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&((l&2)!==0||(l&4)!==0)&&ri(n,t,i),o=o.next}while(o!==r)}lt(e,t,n);break;case 1:if(!de&&(nn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Y(n,t,a)}lt(e,t,n);break;case 21:lt(e,t,n);break;case 22:n.mode&1?(de=(r=de)||n.memoizedState!==null,lt(e,t,n),de=r):lt(e,t,n);break;default:lt(e,t,n)}}function du(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new af),t.forEach(function(r){var o=vf.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ie(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:le=a.stateNode,Me=!1;break e;case 3:le=a.stateNode.containerInfo,Me=!0;break e;case 4:le=a.stateNode.containerInfo,Me=!0;break e}a=a.return}if(le===null)throw Error(S(160));Pc(l,i,o),le=null,Me=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(s){Y(o,t,s)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)zc(t,e),t=t.sibling}function zc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ie(t,e),Ve(e),r&4){try{Un(3,e,e.return),zo(3,e)}catch(E){Y(e,e.return,E)}try{Un(5,e,e.return)}catch(E){Y(e,e.return,E)}}break;case 1:Ie(t,e),Ve(e),r&512&&n!==null&&nn(n,n.return);break;case 5:if(Ie(t,e),Ve(e),r&512&&n!==null&&nn(n,n.return),e.flags&32){var o=e.stateNode;try{Hn(o,"")}catch(E){Y(e,e.return,E)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&Xu(o,l),Al(a,i);var s=Al(a,l);for(i=0;i<u.length;i+=2){var g=u[i],m=u[i+1];g==="style"?ts(o,m):g==="dangerouslySetInnerHTML"?qu(o,m):g==="children"?Hn(o,m):wi(o,g,m,s)}switch(a){case"input":Fl(o,l);break;case"textarea":Zu(o,l);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var y=l.value;y!=null?on(o,!!l.multiple,y,!1):h!==!!l.multiple&&(l.defaultValue!=null?on(o,!!l.multiple,l.defaultValue,!0):on(o,!!l.multiple,l.multiple?[]:"",!1))}o[er]=l}catch(E){Y(e,e.return,E)}}break;case 6:if(Ie(t,e),Ve(e),r&4){if(e.stateNode===null)throw Error(S(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(E){Y(e,e.return,E)}}break;case 3:if(Ie(t,e),Ve(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yn(t.containerInfo)}catch(E){Y(e,e.return,E)}break;case 4:Ie(t,e),Ve(e);break;case 13:Ie(t,e),Ve(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(qi=Z())),r&4&&du(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(de=(s=de)||g,Ie(t,e),de=s):Ie(t,e),Ve(e),r&8192){if(s=e.memoizedState!==null,(e.stateNode.isHidden=s)&&!g&&(e.mode&1)!==0)for(A=e,g=e.child;g!==null;){for(m=A=g;A!==null;){switch(h=A,y=h.child,h.tag){case 0:case 11:case 14:case 15:Un(4,h,h.return);break;case 1:nn(h,h.return);var k=h.stateNode;if(typeof k.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(E){Y(r,n,E)}}break;case 5:nn(h,h.return);break;case 22:if(h.memoizedState!==null){fu(m);continue}}y!==null?(y.return=h,A=y):fu(m)}g=g.sibling}e:for(g=null,m=e;;){if(m.tag===5){if(g===null){g=m;try{o=m.stateNode,s?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=m.stateNode,u=m.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=es("display",i))}catch(E){Y(e,e.return,E)}}}else if(m.tag===6){if(g===null)try{m.stateNode.nodeValue=s?"":m.memoizedProps}catch(E){Y(e,e.return,E)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;g===m&&(g=null),m=m.return}g===m&&(g=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ie(t,e),Ve(e),r&4&&du(e);break;case 21:break;default:Ie(t,e),Ve(e)}}function Ve(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Nc(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Hn(o,""),r.flags&=-33);var l=cu(e);ii(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,a=cu(e);li(e,a,i);break;default:throw Error(S(161))}}catch(u){Y(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function sf(e,t,n){A=e,Dc(e)}function Dc(e,t,n){for(var r=(e.mode&1)!==0;A!==null;){var o=A,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Ar;if(!i){var a=o.alternate,u=a!==null&&a.memoizedState!==null||de;a=Ar;var s=de;if(Ar=i,(de=u)&&!s)for(A=o;A!==null;)i=A,u=i.child,i.tag===22&&i.memoizedState!==null?hu(o):u!==null?(u.return=i,A=u):hu(o);for(;l!==null;)A=l,Dc(l),l=l.sibling;A=o,Ar=a,de=s}pu(e)}else(o.subtreeFlags&8772)!==0&&l!==null?(l.return=o,A=l):pu(e)}}function pu(e){for(;A!==null;){var t=A;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:de||zo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!de)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Re(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Xa(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Xa(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var s=t.alternate;if(s!==null){var g=s.memoizedState;if(g!==null){var m=g.dehydrated;m!==null&&Yn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}de||t.flags&512&&oi(t)}catch(h){Y(t,t.return,h)}}if(t===e){A=null;break}if(n=t.sibling,n!==null){n.return=t.return,A=n;break}A=t.return}}function fu(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var n=t.sibling;if(n!==null){n.return=t.return,A=n;break}A=t.return}}function hu(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{zo(4,t)}catch(u){Y(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){Y(t,o,u)}}var l=t.return;try{oi(t)}catch(u){Y(t,l,u)}break;case 5:var i=t.return;try{oi(t)}catch(u){Y(t,i,u)}}}catch(u){Y(t,t.return,u)}if(t===e){A=null;break}var a=t.sibling;if(a!==null){a.return=t.return,A=a;break}A=t.return}}var cf=Math.ceil,po=rt.ReactCurrentDispatcher,Zi=rt.ReactCurrentOwner,Be=rt.ReactCurrentBatchConfig,R=0,oe=null,J=null,ae=0,Se=0,rn=Ft(0),te=0,ir=null,Ot=0,Do=0,Ji=0,$n=null,ye=null,qi=0,vn=1/0,Ge=null,fo=!1,ai=null,yt=null,_r=!1,dt=null,ho=0,Vn=0,ui=null,$r=-1,Vr=0;function he(){return(R&6)!==0?Z():$r!==-1?$r:$r=Z()}function xt(e){return(e.mode&1)===0?1:(R&2)!==0&&ae!==0?ae&-ae:Qp.transition!==null?(Vr===0&&(Vr=fs()),Vr):(e=M,e!==0||(e=window.event,e=e===void 0?16:ws(e.type)),e)}function Ue(e,t,n,r){if(50<Vn)throw Vn=0,ui=null,Error(S(185));cr(e,n,r),((R&2)===0||e!==oe)&&(e===oe&&((R&2)===0&&(Do|=n),te===4&&st(e,ae)),Ee(e,r),n===1&&R===0&&(t.mode&1)===0&&(vn=Z()+500,Fo&&Nt()))}function Ee(e,t){var n=e.callbackNode;Qd(e,t);var r=Xr(e,e===oe?ae:0);if(r===0)n!==null&&Sa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Sa(n),t===1)e.tag===0?Hp(mu.bind(null,e)):Os(mu.bind(null,e)),Up(function(){(R&6)===0&&Nt()}),n=null;else{switch(hs(r)){case 1:n=Fi;break;case 4:n=ds;break;case 16:n=Yr;break;case 536870912:n=ps;break;default:n=Yr}n=Rc(n,Ac.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ac(e,t){if($r=-1,Vr=0,(R&6)!==0)throw Error(S(327));var n=e.callbackNode;if(cn()&&e.callbackNode!==n)return null;var r=Xr(e,e===oe?ae:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=mo(e,r);else{t=r;var o=R;R|=2;var l=Bc();(oe!==e||ae!==t)&&(Ge=null,vn=Z()+500,Lt(e,t));do try{ff();break}catch(a){_c(e,a)}while(1);Mi(),po.current=l,R=o,J!==null?t=0:(oe=null,ae=0,t=te)}if(t!==0){if(t===2&&(o=Tl(e),o!==0&&(r=o,t=si(e,o))),t===1)throw n=ir,Lt(e,0),st(e,r),Ee(e,Z()),n;if(t===6)st(e,r);else{if(o=e.current.alternate,(r&30)===0&&!df(o)&&(t=mo(e,r),t===2&&(l=Tl(e),l!==0&&(r=l,t=si(e,l))),t===1))throw n=ir,Lt(e,0),st(e,r),Ee(e,Z()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:At(e,ye,Ge);break;case 3:if(st(e,r),(r&130023424)===r&&(t=qi+500-Z(),10<t)){if(Xr(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){he(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Vl(At.bind(null,e,ye,Ge),t);break}At(e,ye,Ge);break;case 4:if(st(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-be(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*cf(r/1960))-r,10<r){e.timeoutHandle=Vl(At.bind(null,e,ye,Ge),r);break}At(e,ye,Ge);break;case 5:At(e,ye,Ge);break;default:throw Error(S(329))}}}return Ee(e,Z()),e.callbackNode===n?Ac.bind(null,e):null}function si(e,t){var n=$n;return e.current.memoizedState.isDehydrated&&(Lt(e,t).flags|=256),e=mo(e,t),e!==2&&(t=ye,ye=n,t!==null&&ci(t)),e}function ci(e){ye===null?ye=e:ye.push.apply(ye,e)}function df(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!$e(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function st(e,t){for(t&=~Ji,t&=~Do,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-be(t),r=1<<n;e[n]=-1,t&=~r}}function mu(e){if((R&6)!==0)throw Error(S(327));cn();var t=Xr(e,0);if((t&1)===0)return Ee(e,Z()),null;var n=mo(e,t);if(e.tag!==0&&n===2){var r=Tl(e);r!==0&&(t=r,n=si(e,r))}if(n===1)throw n=ir,Lt(e,0),st(e,t),Ee(e,Z()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,At(e,ye,Ge),Ee(e,Z()),null}function ea(e,t){var n=R;R|=1;try{return e(t)}finally{R=n,R===0&&(vn=Z()+500,Fo&&Nt())}}function bt(e){dt!==null&&dt.tag===0&&(R&6)===0&&cn();var t=R;R|=1;var n=Be.transition,r=M;try{if(Be.transition=null,M=1,e)return e()}finally{M=r,Be.transition=n,R=t,(R&6)===0&&Nt()}}function ta(){Se=rn.current,V(rn)}function Lt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,bp(n)),J!==null)for(n=J.return;n!==null;){var r=n;switch(Ti(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&to();break;case 3:mn(),V(we),V(pe),Wi();break;case 5:Vi(r);break;case 4:mn();break;case 13:V(Q);break;case 19:V(Q);break;case 10:Oi(r.type._context);break;case 22:case 23:ta()}n=n.return}if(oe=e,J=e=wt(e.current,null),ae=Se=t,te=0,ir=null,Ji=Do=Ot=0,ye=$n=null,Bt!==null){for(t=0;t<Bt.length;t++)if(n=Bt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}Bt=null}return e}function _c(e,t){do{var n=J;try{if(Mi(),Or.current=co,so){for(var r=K.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}so=!1}if(Mt=0,re=ee=K=null,bn=!1,rr=0,Zi.current=null,n===null||n.return===null){te=1,ir=t,J=null;break}e:{var l=e,i=n.return,a=n,u=t;if(t=ae,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var s=u,g=a,m=g.tag;if((g.mode&1)===0&&(m===0||m===11||m===15)){var h=g.alternate;h?(g.updateQueue=h.updateQueue,g.memoizedState=h.memoizedState,g.lanes=h.lanes):(g.updateQueue=null,g.memoizedState=null)}var y=nu(i);if(y!==null){y.flags&=-257,ru(y,i,a,l,t),y.mode&1&&tu(l,s,t),t=y,u=s;var k=t.updateQueue;if(k===null){var E=new Set;E.add(u),t.updateQueue=E}else k.add(u);break e}else{if((t&1)===0){tu(l,s,t),na();break e}u=Error(S(426))}}else if(W&&a.mode&1){var _=nu(i);if(_!==null){(_.flags&65536)===0&&(_.flags|=256),ru(_,i,a,l,t),Ii(gn(u,a));break e}}l=u=gn(u,a),te!==4&&(te=2),$n===null?$n=[l]:$n.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var d=hc(l,u,t);Ya(l,d);break e;case 1:a=u;var c=l.type,f=l.stateNode;if((l.flags&128)===0&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(yt===null||!yt.has(f)))){l.flags|=65536,t&=-t,l.lanes|=t;var w=mc(l,a,t);Ya(l,w);break e}}l=l.return}while(l!==null)}Lc(n)}catch(x){t=x,J===n&&n!==null&&(J=n=n.return);continue}break}while(1)}function Bc(){var e=po.current;return po.current=co,e===null?co:e}function na(){(te===0||te===3||te===2)&&(te=4),oe===null||(Ot&268435455)===0&&(Do&268435455)===0||st(oe,ae)}function mo(e,t){var n=R;R|=2;var r=Bc();(oe!==e||ae!==t)&&(Ge=null,Lt(e,t));do try{pf();break}catch(o){_c(e,o)}while(1);if(Mi(),R=n,po.current=r,J!==null)throw Error(S(261));return oe=null,ae=0,te}function pf(){for(;J!==null;)jc(J)}function ff(){for(;J!==null&&!Rd();)jc(J)}function jc(e){var t=Ic(e.alternate,e,Se);e.memoizedProps=e.pendingProps,t===null?Lc(e):J=t,Zi.current=null}function Lc(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=of(n,t,Se),n!==null){J=n;return}}else{if(n=lf(n,t),n!==null){n.flags&=32767,J=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,J=null;return}}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);te===0&&(te=5)}function At(e,t,n){var r=M,o=Be.transition;try{Be.transition=null,M=1,hf(e,t,n,r)}finally{Be.transition=o,M=r}return null}function hf(e,t,n,r){do cn();while(dt!==null);if((R&6)!==0)throw Error(S(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Kd(e,l),e===oe&&(J=oe=null,ae=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||_r||(_r=!0,Rc(Yr,function(){return cn(),null})),l=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||l){l=Be.transition,Be.transition=null;var i=M;M=1;var a=R;R|=4,Zi.current=null,uf(e,n),zc(n,e),jp(Ul),Zr=!!bl,Ul=bl=null,e.current=n,sf(n),Md(),R=a,M=i,Be.transition=l}else e.current=n;if(_r&&(_r=!1,dt=e,ho=o),l=e.pendingLanes,l===0&&(yt=null),Ud(n.stateNode),Ee(e,Z()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(fo)throw fo=!1,e=ai,ai=null,e;return(ho&1)!==0&&e.tag!==0&&cn(),l=e.pendingLanes,(l&1)!==0?e===ui?Vn++:(Vn=0,ui=e):Vn=0,Nt(),null}function cn(){if(dt!==null){var e=hs(ho),t=Be.transition,n=M;try{if(Be.transition=null,M=16>e?16:e,dt===null)var r=!1;else{if(e=dt,dt=null,ho=0,(R&6)!==0)throw Error(S(331));var o=R;for(R|=4,A=e.current;A!==null;){var l=A,i=l.child;if((A.flags&16)!==0){var a=l.deletions;if(a!==null){for(var u=0;u<a.length;u++){var s=a[u];for(A=s;A!==null;){var g=A;switch(g.tag){case 0:case 11:case 15:Un(8,g,l)}var m=g.child;if(m!==null)m.return=g,A=m;else for(;A!==null;){g=A;var h=g.sibling,y=g.return;if(Fc(g),g===s){A=null;break}if(h!==null){h.return=y,A=h;break}A=y}}}var k=l.alternate;if(k!==null){var E=k.child;if(E!==null){k.child=null;do{var _=E.sibling;E.sibling=null,E=_}while(E!==null)}}A=l}}if((l.subtreeFlags&2064)!==0&&i!==null)i.return=l,A=i;else e:for(;A!==null;){if(l=A,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:Un(9,l,l.return)}var d=l.sibling;if(d!==null){d.return=l.return,A=d;break e}A=l.return}}var c=e.current;for(A=c;A!==null;){i=A;var f=i.child;if((i.subtreeFlags&2064)!==0&&f!==null)f.return=i,A=f;else e:for(i=c;A!==null;){if(a=A,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:zo(9,a)}}catch(x){Y(a,a.return,x)}if(a===i){A=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,A=w;break e}A=a.return}}if(R=o,Nt(),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(wo,e)}catch{}r=!0}return r}finally{M=n,Be.transition=t}}return!1}function gu(e,t,n){t=gn(n,t),t=hc(e,t,1),e=vt(e,t,1),t=he(),e!==null&&(cr(e,1,t),Ee(e,t))}function Y(e,t,n){if(e.tag===3)gu(e,e,n);else for(;t!==null;){if(t.tag===3){gu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yt===null||!yt.has(r))){e=gn(n,e),e=mc(t,e,1),t=vt(t,e,1),e=he(),t!==null&&(cr(t,1,e),Ee(t,e));break}}t=t.return}}function mf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=he(),e.pingedLanes|=e.suspendedLanes&n,oe===e&&(ae&n)===n&&(te===4||te===3&&(ae&130023424)===ae&&500>Z()-qi?Lt(e,0):Ji|=n),Ee(e,t)}function Tc(e,t){t===0&&((e.mode&1)===0?t=1:(t=kr,kr<<=1,(kr&130023424)===0&&(kr=4194304)));var n=he();e=tt(e,t),e!==null&&(cr(e,t,n),Ee(e,n))}function gf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Tc(e,n)}function vf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),Tc(e,n)}var Ic;Ic=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||we.current)xe=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return xe=!1,rf(e,t,n);xe=(e.flags&131072)!==0}else xe=!1,W&&(t.flags&1048576)!==0&&bs(t,oo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ur(e,t),e=t.pendingProps;var o=pn(t,pe.current);sn(t,n),o=Qi(null,t,r,e,o,n);var l=Ki();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ke(r)?(l=!0,no(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ui(t),o.updater=Po,t.stateNode=o,o._reactInternals=t,Xl(t,r,e,n),t=ql(null,t,r,!0,l,n)):(t.tag=0,W&&l&&Li(t),fe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ur(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=xf(r),e=Re(r,e),o){case 0:t=Jl(null,t,r,e,n);break e;case 1:t=iu(null,t,r,e,n);break e;case 11:t=ou(null,t,r,e,n);break e;case 14:t=lu(null,t,r,Re(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Re(r,o),Jl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Re(r,o),iu(e,t,r,o,n);case 3:e:{if(xc(t),e===null)throw Error(S(387));r=t.pendingProps,l=t.memoizedState,o=l.element,Qs(e,t),ao(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=gn(Error(S(423)),t),t=au(e,t,r,n,o);break e}else if(r!==o){o=gn(Error(S(424)),t),t=au(e,t,r,n,o);break e}else for(Ce=gt(t.stateNode.containerInfo.firstChild),Fe=t,W=!0,Oe=null,n=Ws(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fn(),r===o){t=nt(e,t,n);break e}fe(e,t,r,n)}t=t.child}return t;case 5:return Ks(t),e===null&&Kl(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,$l(r,o)?i=null:l!==null&&$l(r,l)&&(t.flags|=32),yc(e,t),fe(e,t,i,n),t.child;case 6:return e===null&&Kl(t),null;case 13:return wc(e,t,n);case 4:return $i(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=hn(t,null,r,n):fe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Re(r,o),ou(e,t,r,o,n);case 7:return fe(e,t,t.pendingProps,n),t.child;case 8:return fe(e,t,t.pendingProps.children,n),t.child;case 12:return fe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,U(lo,r._currentValue),r._currentValue=i,l!==null)if($e(l.value,i)){if(l.children===o.children&&!we.current){t=nt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){i=l.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(l.tag===1){u=Je(-1,n&-n),u.tag=2;var s=l.updateQueue;if(s!==null){s=s.shared;var g=s.pending;g===null?u.next=u:(u.next=g.next,g.next=u),s.pending=u}}l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),Gl(l.return,n,t),a.lanes|=n;break}u=u.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(S(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Gl(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}fe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,sn(t,n),o=je(o),r=r(o),t.flags|=1,fe(e,t,r,n),t.child;case 14:return r=t.type,o=Re(r,t.pendingProps),o=Re(r.type,o),lu(e,t,r,o,n);case 15:return gc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Re(r,o),Ur(e,t),t.tag=1,ke(r)?(e=!0,no(t)):e=!1,sn(t,n),fc(t,r,o),Xl(t,r,o,n),ql(null,t,r,!0,e,n);case 19:return kc(e,t,n);case 22:return vc(e,t,n)}throw Error(S(156,t.tag))};function Rc(e,t){return cs(e,t)}function yf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _e(e,t,n,r){return new yf(e,t,n,r)}function ra(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xf(e){if(typeof e=="function")return ra(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ei)return 11;if(e===Si)return 14}return 2}function wt(e,t){var n=e.alternate;return n===null?(n=_e(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Wr(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")ra(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Kt:return Tt(n.children,o,l,t);case ki:i=8,o|=8;break;case wl:return e=_e(12,n,t,o|2),e.elementType=wl,e.lanes=l,e;case kl:return e=_e(13,n,t,o),e.elementType=kl,e.lanes=l,e;case El:return e=_e(19,n,t,o),e.elementType=El,e.lanes=l,e;case Ku:return Ao(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Hu:i=10;break e;case Qu:i=9;break e;case Ei:i=11;break e;case Si:i=14;break e;case it:i=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=_e(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function Tt(e,t,n,r){return e=_e(7,e,r,t),e.lanes=n,e}function Ao(e,t,n,r){return e=_e(22,e,r,t),e.elementType=Ku,e.lanes=n,e.stateNode={isHidden:!1},e}function hl(e,t,n){return e=_e(6,e,null,t),e.lanes=n,e}function ml(e,t,n){return t=_e(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function wf(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yo(0),this.expirationTimes=Yo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yo(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function oa(e,t,n,r,o,l,i,a,u){return e=new wf(e,t,n,a,u),t===1?(t=1,l===!0&&(t|=8)):t=0,l=_e(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ui(l),e}function kf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Mc(e){if(!e)return St;e=e._reactInternals;e:{if($t(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(ke(n))return Ms(e,n,t)}return t}function Oc(e,t,n,r,o,l,i,a,u){return e=oa(n,r,!0,e,o,l,i,a,u),e.context=Mc(null),n=e.current,r=he(),o=xt(n),l=Je(r,o),l.callback=t!=null?t:null,vt(n,l,o),e.current.lanes=o,cr(e,o,r),Ee(e,r),e}function _o(e,t,n,r){var o=t.current,l=he(),i=xt(o);return n=Mc(n),t.context===null?t.context=n:t.pendingContext=n,t=Je(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=vt(o,t,i),e!==null&&(Ue(e,o,i,l),Mr(e,o,i)),i}function go(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function vu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function la(e,t){vu(e,t),(e=e.alternate)&&vu(e,t)}function Ef(){return null}var bc=typeof reportError=="function"?reportError:function(e){console.error(e)};function ia(e){this._internalRoot=e}Bo.prototype.render=ia.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));_o(e,t,null,null)};Bo.prototype.unmount=ia.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;bt(function(){_o(null,e,null,null)}),t[et]=null}};function Bo(e){this._internalRoot=e}Bo.prototype.unstable_scheduleHydration=function(e){if(e){var t=vs();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ut.length&&t!==0&&t<ut[n].priority;n++);ut.splice(n,0,e),n===0&&xs(e)}};function aa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function jo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function yu(){}function Sf(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var s=go(i);l.call(s)}}var i=Oc(t,r,e,0,null,!1,!1,"",yu);return e._reactRootContainer=i,e[et]=i.current,Jn(e.nodeType===8?e.parentNode:e),bt(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var s=go(u);a.call(s)}}var u=oa(e,0,!1,null,null,!1,!1,"",yu);return e._reactRootContainer=u,e[et]=u.current,Jn(e.nodeType===8?e.parentNode:e),bt(function(){_o(t,u,n,r)}),u}function Lo(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var a=o;o=function(){var u=go(i);a.call(u)}}_o(t,i,e,o)}else i=Sf(n,t,e,o,r);return go(i)}ms=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=jn(t.pendingLanes);n!==0&&(Ni(t,n|1),Ee(t,Z()),(R&6)===0&&(vn=Z()+500,Nt()))}break;case 13:bt(function(){var r=tt(e,1);if(r!==null){var o=he();Ue(r,e,1,o)}}),la(e,1)}};Pi=function(e){if(e.tag===13){var t=tt(e,134217728);if(t!==null){var n=he();Ue(t,e,134217728,n)}la(e,134217728)}};gs=function(e){if(e.tag===13){var t=xt(e),n=tt(e,t);if(n!==null){var r=he();Ue(n,e,t,r)}la(e,t)}};vs=function(){return M};ys=function(e,t){var n=M;try{return M=e,t()}finally{M=n}};Bl=function(e,t,n){switch(t){case"input":if(Fl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Co(r);if(!o)throw Error(S(90));Yu(r),Fl(r,o)}}}break;case"textarea":Zu(e,n);break;case"select":t=n.value,t!=null&&on(e,!!n.multiple,t,!1)}};os=ea;ls=bt;var Cf={usingClientEntryPoint:!1,Events:[pr,Zt,Co,ns,rs,ea]},An={findFiberByHostInstance:_t,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ff={bundleType:An.bundleType,version:An.version,rendererPackageName:An.rendererPackageName,rendererConfig:An.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=us(e),e===null?null:e.stateNode},findFiberByHostInstance:An.findFiberByHostInstance||Ef,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Br=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Br.isDisabled&&Br.supportsFiber)try{wo=Br.inject(Ff),Qe=Br}catch{}}Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cf;Pe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!aa(t))throw Error(S(200));return kf(e,t,null,n)};Pe.createRoot=function(e,t){if(!aa(e))throw Error(S(299));var n=!1,r="",o=bc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=oa(e,1,!1,null,null,n,!1,r,o),e[et]=t.current,Jn(e.nodeType===8?e.parentNode:e),new ia(t)};Pe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=us(t),e=e===null?null:e.stateNode,e};Pe.flushSync=function(e){return bt(e)};Pe.hydrate=function(e,t,n){if(!jo(t))throw Error(S(200));return Lo(null,e,t,!0,n)};Pe.hydrateRoot=function(e,t,n){if(!aa(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=bc;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Oc(t,null,e,1,n!=null?n:null,o,!1,l,i),e[et]=t.current,Jn(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Bo(t)};Pe.render=function(e,t,n){if(!jo(t))throw Error(S(200));return Lo(null,e,t,!1,n)};Pe.unmountComponentAtNode=function(e){if(!jo(e))throw Error(S(40));return e._reactRootContainer?(bt(function(){Lo(null,null,e,!1,function(){e._reactRootContainer=null,e[et]=null})}),!0):!1};Pe.unstable_batchedUpdates=ea;Pe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!jo(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Lo(e,t,n,!1,r)};Pe.version="18.3.1-next-f1338f8080-20240426";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Pe})(Uu);var Uc,xu=Uu.exports;Uc=xu.createRoot,xu.hydrateRoot;/**
 * @remix-run/router v1.3.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ar(){return ar=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ar.apply(this,arguments)}var pt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(pt||(pt={}));const wu="popstate";function Nf(e){e===void 0&&(e={});function t(r,o){let{pathname:l,search:i,hash:a}=r.location;return di("",{pathname:l,search:i,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:ur(o)}return zf(t,n,null,e)}function ne(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Pf(){return Math.random().toString(36).substr(2,8)}function ku(e,t){return{usr:e.state,key:e.key,idx:t}}function di(e,t,n,r){return n===void 0&&(n=null),ar({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?kn(t):t,{state:n,key:t&&t.key||r||Pf()})}function ur(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function kn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function zf(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:l=!1}=r,i=o.history,a=pt.Pop,u=null,s=g();s==null&&(s=0,i.replaceState(ar({},i.state,{idx:s}),""));function g(){return(i.state||{idx:null}).idx}function m(){a=pt.Pop;let _=g(),d=_==null?null:_-s;s=_,u&&u({action:a,location:E.location,delta:d})}function h(_,d){a=pt.Push;let c=di(E.location,_,d);n&&n(c,_),s=g()+1;let f=ku(c,s),w=E.createHref(c);try{i.pushState(f,"",w)}catch{o.location.assign(w)}l&&u&&u({action:a,location:E.location,delta:1})}function y(_,d){a=pt.Replace;let c=di(E.location,_,d);n&&n(c,_),s=g();let f=ku(c,s),w=E.createHref(c);i.replaceState(f,"",w),l&&u&&u({action:a,location:E.location,delta:0})}function k(_){let d=o.location.origin!=="null"?o.location.origin:o.location.href,c=typeof _=="string"?_:ur(_);return ne(d,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,d)}let E={get action(){return a},get location(){return e(o,i)},listen(_){if(u)throw new Error("A history only accepts one active listener");return o.addEventListener(wu,m),u=_,()=>{o.removeEventListener(wu,m),u=null}},createHref(_){return t(o,_)},createURL:k,encodeLocation(_){let d=k(_);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:h,replace:y,go(_){return i.go(_)}};return E}var Eu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Eu||(Eu={}));function Df(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?kn(t):t,o=Wc(r.pathname||"/",n);if(o==null)return null;let l=$c(e);Af(l);let i=null;for(let a=0;i==null&&a<l.length;++a)i=Of(l[a],$f(o));return i}function $c(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(l,i,a)=>{let u={relativePath:a===void 0?l.path||"":a,caseSensitive:l.caseSensitive===!0,childrenIndex:i,route:l};u.relativePath.startsWith("/")&&(ne(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let s=kt([r,u.relativePath]),g=n.concat(u);l.children&&l.children.length>0&&(ne(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+s+'".')),$c(l.children,t,g,s)),!(l.path==null&&!l.index)&&t.push({path:s,score:Rf(s,l.index),routesMeta:g})};return e.forEach((l,i)=>{var a;if(l.path===""||!((a=l.path)!=null&&a.includes("?")))o(l,i);else for(let u of Vc(l.path))o(l,i,u)}),t}function Vc(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return o?[l,""]:[l];let i=Vc(r.join("/")),a=[];return a.push(...i.map(u=>u===""?l:[l,u].join("/"))),o&&a.push(...i),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function Af(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Mf(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const _f=/^:\w+$/,Bf=3,jf=2,Lf=1,Tf=10,If=-2,Su=e=>e==="*";function Rf(e,t){let n=e.split("/"),r=n.length;return n.some(Su)&&(r+=If),t&&(r+=jf),n.filter(o=>!Su(o)).reduce((o,l)=>o+(_f.test(l)?Bf:l===""?Lf:Tf),r)}function Mf(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function Of(e,t){let{routesMeta:n}=e,r={},o="/",l=[];for(let i=0;i<n.length;++i){let a=n[i],u=i===n.length-1,s=o==="/"?t:t.slice(o.length)||"/",g=bf({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},s);if(!g)return null;Object.assign(r,g.params);let m=a.route;l.push({params:r,pathname:kt([o,g.pathname]),pathnameBase:Qf(kt([o,g.pathnameBase])),route:m}),g.pathnameBase!=="/"&&(o=kt([o,g.pathnameBase]))}return l}function bf(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Uf(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let l=o[0],i=l.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((s,g,m)=>{if(g==="*"){let h=a[m]||"";i=l.slice(0,l.length-h.length).replace(/(.)\/+$/,"$1")}return s[g]=Vf(a[m]||"",g),s},{}),pathname:l,pathnameBase:i,pattern:e}}function Uf(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ua(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(i,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function $f(e){try{return decodeURI(e)}catch(t){return ua(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Vf(e,t){try{return decodeURIComponent(e)}catch(n){return ua(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Wc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function ua(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Wf(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?kn(e):e;return{pathname:n?n.startsWith("/")?n:Hf(n,t):t,search:Kf(r),hash:Gf(o)}}function Hf(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function gl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Hc(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Qc(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=kn(e):(o=ar({},e),ne(!o.pathname||!o.pathname.includes("?"),gl("?","pathname","search",o)),ne(!o.pathname||!o.pathname.includes("#"),gl("#","pathname","hash",o)),ne(!o.search||!o.search.includes("#"),gl("#","search","hash",o)));let l=e===""||o.pathname==="",i=l?"/":o.pathname,a;if(r||i==null)a=n;else{let m=t.length-1;if(i.startsWith("..")){let h=i.split("/");for(;h[0]==="..";)h.shift(),m-=1;o.pathname=h.join("/")}a=m>=0?t[m]:"/"}let u=Wf(o,a),s=i&&i!=="/"&&i.endsWith("/"),g=(l||i===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(s||g)&&(u.pathname+="/"),u}const kt=e=>e.join("/").replace(/\/\/+/g,"/"),Qf=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Kf=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Gf=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Yf(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Xf=["post","put","patch","delete"];[...Xf];var To={exports:{}},Io={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zf=C.exports,Jf=Symbol.for("react.element"),qf=Symbol.for("react.fragment"),e0=Object.prototype.hasOwnProperty,t0=Zf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n0={key:!0,ref:!0,__self:!0,__source:!0};function Kc(e,t,n){var r,o={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)e0.call(t,r)&&!n0.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Jf,type:e,key:l,ref:i,props:o,_owner:t0.current}}Io.Fragment=qf;Io.jsx=Kc;Io.jsxs=Kc;(function(e){e.exports=Io})(To);const Gc=To.exports.Fragment,p=To.exports.jsx,v=To.exports.jsxs;/**
 * React Router v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pi(){return pi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pi.apply(this,arguments)}function r0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const o0=typeof Object.is=="function"?Object.is:r0,{useState:l0,useEffect:i0,useLayoutEffect:a0,useDebugValue:u0}=yl;function s0(e,t,n){const r=t(),[{inst:o},l]=l0({inst:{value:r,getSnapshot:t}});return a0(()=>{o.value=r,o.getSnapshot=t,vl(o)&&l({inst:o})},[e,r,t]),i0(()=>(vl(o)&&l({inst:o}),e(()=>{vl(o)&&l({inst:o})})),[e]),u0(r),r}function vl(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!o0(n,r)}catch{return!0}}function c0(e,t,n){return t()}const d0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",p0=!d0,f0=p0?c0:s0;"useSyncExternalStore"in yl&&(e=>e.useSyncExternalStore)(yl);const Yc=C.exports.createContext(null),Xc=C.exports.createContext(null),Ro=C.exports.createContext(null),Mo=C.exports.createContext(null),Vt=C.exports.createContext({outlet:null,matches:[]}),Zc=C.exports.createContext(null);function h0(e,t){let{relative:n}=t===void 0?{}:t;hr()||ne(!1);let{basename:r,navigator:o}=C.exports.useContext(Ro),{hash:l,pathname:i,search:a}=qc(e,{relative:n}),u=i;return r!=="/"&&(u=i==="/"?r:kt([r,i])),o.createHref({pathname:u,search:a,hash:l})}function hr(){return C.exports.useContext(Mo)!=null}function Oo(){return hr()||ne(!1),C.exports.useContext(Mo).location}function mr(){hr()||ne(!1);let{basename:e,navigator:t}=C.exports.useContext(Ro),{matches:n}=C.exports.useContext(Vt),{pathname:r}=Oo(),o=JSON.stringify(Hc(n).map(a=>a.pathnameBase)),l=C.exports.useRef(!1);return C.exports.useEffect(()=>{l.current=!0}),C.exports.useCallback(function(a,u){if(u===void 0&&(u={}),!l.current)return;if(typeof a=="number"){t.go(a);return}let s=Qc(a,JSON.parse(o),r,u.relative==="path");e!=="/"&&(s.pathname=s.pathname==="/"?e:kt([e,s.pathname])),(u.replace?t.replace:t.push)(s,u.state,u)},[e,t,o,r])}function Jc(){let{matches:e}=C.exports.useContext(Vt),t=e[e.length-1];return t?t.params:{}}function qc(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=C.exports.useContext(Vt),{pathname:o}=Oo(),l=JSON.stringify(Hc(r).map(i=>i.pathnameBase));return C.exports.useMemo(()=>Qc(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function m0(e,t){hr()||ne(!1);let{navigator:n}=C.exports.useContext(Ro),r=C.exports.useContext(Xc),{matches:o}=C.exports.useContext(Vt),l=o[o.length-1],i=l?l.params:{};l&&l.pathname;let a=l?l.pathnameBase:"/";l&&l.route;let u=Oo(),s;if(t){var g;let E=typeof t=="string"?kn(t):t;a==="/"||((g=E.pathname)==null?void 0:g.startsWith(a))||ne(!1),s=E}else s=u;let m=s.pathname||"/",h=a==="/"?m:m.slice(a.length)||"/",y=Df(e,{pathname:h}),k=x0(y&&y.map(E=>Object.assign({},E,{params:Object.assign({},i,E.params),pathname:kt([a,n.encodeLocation?n.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?a:kt([a,n.encodeLocation?n.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),o,r||void 0);return t&&k?p(Mo.Provider,{value:{location:pi({pathname:"/",search:"",hash:"",state:null,key:"default"},s),navigationType:pt.Pop},children:k}):k}function g0(){let e=S0(),t=Yf(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null;return v(Gc,{children:[p("h2",{children:"Unexpected Application Error!"}),p("h3",{style:{fontStyle:"italic"},children:t}),n?p("pre",{style:{padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},children:n}):null,null]})}class v0 extends C.exports.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?p(Vt.Provider,{value:this.props.routeContext,children:p(Zc.Provider,{value:this.state.error,children:this.props.component})}):this.props.children}}function y0(e){let{routeContext:t,match:n,children:r}=e,o=C.exports.useContext(Yc);return o&&o.static&&o.staticContext&&n.route.errorElement&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),p(Vt.Provider,{value:t,children:r})}function x0(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,o=n==null?void 0:n.errors;if(o!=null){let l=r.findIndex(i=>i.route.id&&(o==null?void 0:o[i.route.id]));l>=0||ne(!1),r=r.slice(0,Math.min(r.length,l+1))}return r.reduceRight((l,i,a)=>{let u=i.route.id?o==null?void 0:o[i.route.id]:null,s=n?i.route.errorElement||p(g0,{}):null,g=t.concat(r.slice(0,a+1)),m=()=>p(y0,{match:i,routeContext:{outlet:l,matches:g},children:u?s:i.route.element!==void 0?i.route.element:l});return n&&(i.route.errorElement||a===0)?p(v0,{location:n.location,component:s,error:u,children:m(),routeContext:{outlet:null,matches:g}}):m()},null)}var Cu;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(Cu||(Cu={}));var vo;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(vo||(vo={}));function w0(e){let t=C.exports.useContext(Xc);return t||ne(!1),t}function k0(e){let t=C.exports.useContext(Vt);return t||ne(!1),t}function E0(e){let t=k0(),n=t.matches[t.matches.length-1];return n.route.id||ne(!1),n.route.id}function S0(){var e;let t=C.exports.useContext(Zc),n=w0(vo.UseRouteError),r=E0(vo.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Hr(e){ne(!1)}function C0(e){let{basename:t="/",children:n=null,location:r,navigationType:o=pt.Pop,navigator:l,static:i=!1}=e;hr()&&ne(!1);let a=t.replace(/^\/*/,"/"),u=C.exports.useMemo(()=>({basename:a,navigator:l,static:i}),[a,l,i]);typeof r=="string"&&(r=kn(r));let{pathname:s="/",search:g="",hash:m="",state:h=null,key:y="default"}=r,k=C.exports.useMemo(()=>{let E=Wc(s,a);return E==null?null:{pathname:E,search:g,hash:m,state:h,key:y}},[a,s,g,m,h,y]);return k==null?null:p(Ro.Provider,{value:u,children:p(Mo.Provider,{children:n,value:{location:k,navigationType:o}})})}function F0(e){let{children:t,location:n}=e,r=C.exports.useContext(Yc),o=r&&!t?r.router.routes:fi(t);return m0(o,n)}var Fu;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Fu||(Fu={}));new Promise(()=>{});function fi(e,t){t===void 0&&(t=[]);let n=[];return C.exports.Children.forEach(e,(r,o)=>{if(!C.exports.isValidElement(r))return;if(r.type===C.exports.Fragment){n.push.apply(n,fi(r.props.children,t));return}r.type!==Hr&&ne(!1),!r.props.index||!r.props.children||ne(!1);let l=[...t,o],i={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(i.children=fi(r.props.children,l)),n.push(i)}),n}/**
 * React Router DOM v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function N0(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function P0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function z0(e,t){return e.button===0&&(!t||t==="_self")&&!P0(e)}const D0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function A0(e){let{basename:t,children:n,window:r}=e,o=C.exports.useRef();o.current==null&&(o.current=Nf({window:r,v5Compat:!0}));let l=o.current,[i,a]=C.exports.useState({action:l.action,location:l.location});return C.exports.useLayoutEffect(()=>l.listen(a),[l]),p(C0,{basename:t,children:n,location:i.location,navigationType:i.action,navigator:l})}const _0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",yo=C.exports.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:l,replace:i,state:a,target:u,to:s,preventScrollReset:g}=t,m=N0(t,D0),h=typeof s=="string"?s:ur(s),y=/^[a-z+]+:\/\//i.test(h)||h.startsWith("//"),k=h,E=!1;if(_0&&y){let f=new URL(window.location.href),w=h.startsWith("//")?new URL(f.protocol+h):new URL(h);w.origin===f.origin?k=w.pathname+w.search+w.hash:E=!0}let _=h0(k,{relative:o}),d=B0(k,{replace:i,state:a,target:u,preventScrollReset:g,relative:o});function c(f){r&&r(f),f.defaultPrevented||d(f)}return p("a",{...m,href:y?h:_,onClick:E||l?r:c,ref:n,target:u})});var Nu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Nu||(Nu={}));var Pu;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Pu||(Pu={}));function B0(e,t){let{target:n,replace:r,state:o,preventScrollReset:l,relative:i}=t===void 0?{}:t,a=mr(),u=Oo(),s=qc(e,{relative:i});return C.exports.useCallback(g=>{if(z0(g,n)){g.preventDefault();let m=r!==void 0?r:ur(u)===ur(s);a(e,{replace:m,state:o,preventScrollReset:l,relative:i})}},[u,a,s,r,o,n,e,l,i])}/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var j0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),b=(e,t)=>{const n=C.exports.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:l=2,absoluteStrokeWidth:i,className:a="",children:u,...s},g)=>C.exports.createElement("svg",{ref:g,...j0,width:o,height:o,stroke:r,strokeWidth:i?Number(l)*24/Number(o):l,className:["lucide",`lucide-${L0(e)}`,a].join(" "),...s},[...t.map(([m,h])=>C.exports.createElement(m,h)),...Array.isArray(u)?u:[u]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xo=b("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zu=b("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=b("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=b("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=b("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ed=b("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=b("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=b("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=b("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=b("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=b("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=b("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td=b("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=b("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=b("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sa=b("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=b("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ca=b("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nd=b("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=b("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rd=b("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bo=b("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=b("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=b("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=b("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uo=b("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au=b("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function Y0(e,t,n){return window.go.main.App.CreateChapter(e,t,n)}function X0(e,t,n,r){return window.go.main.App.CreateCharacter(e,t,n,r)}function Z0(e,t){return window.go.main.App.CreateProject(e,t)}function J0(e){return window.go.main.App.DeleteChapter(e)}function q0(e){return window.go.main.App.DeleteCharacter(e)}function eh(e){return window.go.main.App.DeleteProject(e)}function th(e){return window.go.main.App.GetChapter(e)}function nh(e){return window.go.main.App.GetChapters(e)}function rh(e){return window.go.main.App.GetCharacter(e)}function oh(e){return window.go.main.App.GetCharacters(e)}function lh(e){return window.go.main.App.GetProject(e)}function ih(){return window.go.main.App.GetProjects()}function ah(e){return window.go.main.App.GetVoice(e)}function uh(){return window.go.main.App.GetVoices()}function sh(e,t){return window.go.main.App.ReorderChapters(e,t)}function ch(e,t,n){return window.go.main.App.UpdateChapter(e,t,n)}function dh(e,t,n,r){return window.go.main.App.UpdateCharacter(e,t,n,r)}function ph(e,t,n){return window.go.main.App.UpdateProject(e,t,n)}const ie={createProject:async(e,t)=>{try{return await Z0(e,t)}catch(n){throw console.error("Failed to create project:",n),n}},getProjects:async()=>{try{return await ih()||[]}catch(e){throw console.error("Failed to get projects:",e),e}},getProject:async e=>{try{return await lh(e)}catch(t){throw console.error("Failed to get project:",t),t}},updateProject:async(e,t,n)=>{try{await ph(e,t,n)}catch(r){throw console.error("Failed to update project:",r),r}},deleteProject:async e=>{try{await eh(e)}catch(t){throw console.error("Failed to delete project:",t),t}},createChapter:async(e,t,n)=>{try{return await Y0(e,t,n)}catch(r){throw console.error("Failed to create chapter:",r),r}},getChapters:async e=>{try{return await nh(e)||[]}catch(t){throw console.error("Failed to get chapters:",t),t}},getChapter:async e=>{try{return await th(e)}catch(t){throw console.error("Failed to get chapter:",t),t}},updateChapter:async(e,t,n)=>{try{await ch(e,t,n)}catch(r){throw console.error("Failed to update chapter:",r),r}},deleteChapter:async e=>{try{await J0(e)}catch(t){throw console.error("Failed to delete chapter:",t),t}},reorderChapters:async(e,t)=>{try{await sh(e,t)}catch(n){throw console.error("Failed to reorder chapters:",n),n}},createParagraph:async(e,t,n,r,o,l)=>{throw new Error("Not implemented")},getParagraphs:async e=>{throw new Error("Not implemented")},getParagraph:async e=>{throw new Error("Not implemented")},updateParagraph:async(e,t,n,r,o,l)=>{throw new Error("Not implemented")},deleteParagraph:async e=>{throw new Error("Not implemented")},createCharacter:async(e,t,n,r)=>{try{return await X0(e,t,n,r)}catch(o){throw console.error("Failed to create character:",o),o}},getCharacters:async e=>{try{return await oh(e)||[]}catch(t){throw console.error("Failed to get characters:",t),t}},getCharacter:async e=>{try{return await rh(e)}catch(t){throw console.error("Failed to get character:",t),t}},updateCharacter:async(e,t,n,r)=>{try{await dh(e,t,n,r)}catch(o){throw console.error("Failed to update character:",o),o}},deleteCharacter:async e=>{try{await q0(e)}catch(t){throw console.error("Failed to delete character:",t),t}},getVoices:async()=>{try{return await uh()||[]}catch(e){throw console.error("Failed to get voices:",e),e}},getVoice:async e=>{try{return await ah(e)}catch(t){throw console.error("Failed to get voice:",t),t}},analyzeText:async e=>{throw new Error("Not implemented")},generateAudio:async(e,t,n,r)=>{throw new Error("Not implemented")},generateBatchAudio:async e=>{throw new Error("Not implemented")}},fh=()=>{const e=mr(),[t,n]=C.exports.useState([]),[r,o]=C.exports.useState(!1),[l,i]=C.exports.useState(!1),[a,u]=C.exports.useState({name:"",description:""}),s=async()=>{o(!0);try{const y=await ie.getProjects();n(y)}catch(y){console.error("Failed to load projects:",y)}o(!1)};C.exports.useEffect(()=>{s()},[]);const g=async y=>{if(y.preventDefault(),!!a.name.trim()){o(!0);try{await ie.createProject(a.name,a.description),u({name:"",description:""}),i(!1),s()}catch(k){console.error("Failed to create project:",k)}o(!1)}},m=async y=>{if(!!window.confirm("\u786E\u5B9A\u8981\u5220\u9664\u6B64\u5DE5\u7A0B\u5417\uFF1F")){o(!0);try{await ie.deleteProject(y),s()}catch(k){console.error("Failed to delete project:",k)}o(!1)}},h=y=>{e(`/project/${y}`)};return v("div",{className:"home-page",children:[v("div",{className:"page-header",children:[p("h1",{children:"\u542C\u58A8\u8BED - \u6709\u58F0\u5C0F\u8BF4\u5236\u4F5C"}),p("p",{children:"\u521B\u5EFA\u3001\u7F16\u8F91\u548C\u7BA1\u7406\u60A8\u7684\u6709\u58F0\u5C0F\u8BF4\u5DE5\u7A0B"})]}),v("div",{className:"projects-container",children:[p("div",{className:"create-project-section",children:v("button",{className:"create-project-btn",onClick:()=>i(!0),disabled:r,children:[p(ca,{size:20}),"\u521B\u5EFA\u65B0\u5DE5\u7A0B"]})}),p("div",{className:"projects-list",children:r&&t.length===0?v("div",{className:"loading",children:[p("div",{className:"spinner"}),p("p",{children:"\u52A0\u8F7D\u4E2D..."})]}):t.length===0?v("div",{className:"empty-state",children:[p(b0,{size:64}),p("h2",{children:"\u6682\u65E0\u5DE5\u7A0B"}),p("p",{children:"\u70B9\u51FB\u4E0A\u65B9\u6309\u94AE\u521B\u5EFA\u60A8\u7684\u7B2C\u4E00\u4E2A\u6709\u58F0\u5C0F\u8BF4\u5DE5\u7A0B"})]}):t.map(y=>v("div",{className:"project-card",onClick:()=>h(y.id),children:[v("div",{className:"project-info",children:[p("h3",{children:y.name}),p("p",{className:"project-description",children:y.description}),v("div",{className:"project-meta",children:[v("span",{className:"created-at",children:["\u521B\u5EFA\u4E8E: ",new Date(y.createdAt).toLocaleDateString()]}),v("span",{className:"updated-at",children:["\u66F4\u65B0\u4E8E: ",new Date(y.updatedAt).toLocaleDateString()]})]})]}),v("div",{className:"project-actions",children:[v("button",{className:"btn-primary",onClick:k=>{k.stopPropagation(),console.log("Edit project:",y.id)},disabled:r,children:[p(sa,{size:16}),"\u7F16\u8F91"]}),v("button",{className:"btn-danger",onClick:k=>{k.stopPropagation(),m(y.id)},disabled:r,children:[p(bo,{size:16}),"\u5220\u9664"]})]}),p(R0,{size:24,className:"arrow-right"})]},y.id))})]}),l&&p("div",{className:"modal",children:v("div",{className:"modal-content",children:[v("div",{className:"modal-header",children:[p("h2",{children:"\u521B\u5EFA\u65B0\u5DE5\u7A0B"}),p("button",{className:"modal-close",onClick:()=>i(!1),children:"\xD7"})]}),v("form",{onSubmit:g,children:[v("div",{className:"form-group",children:[p("label",{htmlFor:"project-name",children:"\u5DE5\u7A0B\u540D\u79F0"}),p("input",{type:"text",id:"project-name",value:a.name,onChange:y=>u({...a,name:y.target.value}),placeholder:"\u8BF7\u8F93\u5165\u5DE5\u7A0B\u540D\u79F0",required:!0})]}),v("div",{className:"form-group",children:[p("label",{htmlFor:"project-description",children:"\u5DE5\u7A0B\u63CF\u8FF0"}),p("textarea",{id:"project-description",value:a.description,onChange:y=>u({...a,description:y.target.value}),placeholder:"\u8BF7\u8F93\u5165\u5DE5\u7A0B\u63CF\u8FF0",rows:3})]}),v("div",{className:"modal-footer",children:[p("button",{type:"button",className:"btn-secondary",onClick:()=>i(!1),disabled:r,children:"\u53D6\u6D88"}),p("button",{type:"submit",className:"btn-primary",disabled:r,children:"\u786E\u5B9A"})]})]})]})}),p("style",{children:`
        .home-page {
          min-height: 100vh;
          background-color: #1b2636;
          color: #ffffff;
          padding: 20px;
        }

        .page-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .page-header h1 {
          font-size: 2.5rem;
          margin-bottom: 10px;
          color: #00a8ff;
        }

        .page-header p {
          color: #b0bec5;
          font-size: 1.1rem;
        }

        .projects-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .create-project-section {
          margin-bottom: 30px;
          text-align: center;
        }

        .create-project-btn {
          background-color: #00a8ff;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 6px;
          font-size: 1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 0 auto;
          transition: background-color 0.3s;
        }

        .create-project-btn:hover:not(:disabled) {
          background-color: #0088cc;
        }

        .create-project-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .projects-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }

        .project-card {
          background-color: #2c3e50;
          border-radius: 8px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 15px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s, box-shadow 0.3s;
          cursor: pointer;
          position: relative;
        }

        .project-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        }

        .arrow-right {
          position: absolute;
          top: 20px;
          right: 20px;
          color: #7f8c8d;
          transition: color 0.3s;
        }

        .project-card:hover .arrow-right {
          color: #00a8ff;
        }

        .project-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        }

        .project-info h3 {
          margin: 0;
          color: #00a8ff;
          font-size: 1.2rem;
        }

        .project-description {
          color: #b0bec5;
          margin: 8px 0;
          line-height: 1.4;
        }

        .project-meta {
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-size: 0.85rem;
          color: #78909c;
        }

        .project-actions {
          display: flex;
          gap: 10px;
          margin-top: auto;
        }

        .btn-primary,
        .btn-secondary,
        .btn-danger {
          padding: 8px 16px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.9rem;
          transition: background-color 0.3s;
        }

        .btn-primary {
          background-color: #00a8ff;
          color: white;
        }

        .btn-primary:hover:not(:disabled) {
          background-color: #0088cc;
        }

        .btn-secondary {
          background-color: #546e7a;
          color: white;
        }

        .btn-secondary:hover:not(:disabled) {
          background-color: #455a64;
        }

        .btn-danger {
          background-color: #ff6b6b;
          color: white;
        }

        .btn-danger:hover:not(:disabled) {
          background-color: #ee5253;
        }

        .btn-primary:disabled,
        .btn-secondary:disabled,
        .btn-danger:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .loading {
          text-align: center;
          padding: 40px;
        }

        .spinner {
          width: 40px;
          height: 40px;
          border: 4px solid #f3f3f3;
          border-top: 4px solid #00a8ff;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto 20px;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .empty-state {
          text-align: center;
          padding: 60px 20px;
          color: #b0bec5;
        }

        .empty-state h2 {
          color: #ffffff;
          margin: 20px 0 10px;
        }

        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .modal-content {
          background-color: #2c3e50;
          border-radius: 8px;
          width: 90%;
          max-width: 500px;
          max-height: 80vh;
          overflow-y: auto;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          border-bottom: 1px solid #34495e;
        }

        .modal-header h2 {
          margin: 0;
          color: #00a8ff;
        }

        .modal-close {
          background: none;
          border: none;
          color: #b0bec5;
          font-size: 24px;
          cursor: pointer;
          padding: 0;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          transition: background-color 0.3s;
        }

        .modal-close:hover {
          background-color: #34495e;
          color: #ffffff;
        }

        .modal-content form {
          padding: 20px;
        }

        .form-group {
          margin-bottom: 15px;
        }

        .form-group label {
          display: block;
          margin-bottom: 5px;
          color: #b0bec5;
          font-weight: 500;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 10px;
          border: 1px solid #34495e;
          border-radius: 4px;
          background-color: #1e272e;
          color: #ffffff;
          font-size: 1rem;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #00a8ff;
          box-shadow: 0 0 0 3px rgba(0, 168, 255, 0.1);
        }

        .modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
          padding: 15px 20px;
          border-top: 1px solid #34495e;
        }
      `})]})},hh=({projectId:e,onChapterSelect:t})=>{const n=mr(),[r,o]=C.exports.useState([]),[l,i]=C.exports.useState(!1),[a,u]=C.exports.useState(!1),[s,g]=C.exports.useState({title:"",content:""}),m=async()=>{i(!0);try{const d=await ie.getChapters(e);o(d)}catch(d){console.error("Failed to load chapters:",d)}i(!1)};C.exports.useEffect(()=>{m()},[e]);const h=async d=>{if(d.preventDefault(),!!s.title.trim()){i(!0);try{await ie.createChapter(e,s.title,s.content),g({title:"",content:""}),u(!1),m()}catch(c){console.error("Failed to create chapter:",c)}i(!1)}},y=async d=>{if(!!window.confirm("\u786E\u5B9A\u8981\u5220\u9664\u6B64\u7AE0\u8282\u5417\uFF1F")){i(!0);try{await ie.deleteChapter(d),m()}catch(c){console.error("Failed to delete chapter:",c)}i(!1)}},k=(d,c)=>{d.dataTransfer.setData("text/plain",c.toString())},E=d=>{d.preventDefault()},_=async(d,c)=>{d.preventDefault();const f=parseInt(d.dataTransfer.getData("text/plain"));if(f!==c){const w=[...r],[x]=w.splice(f,1);w.splice(c,0,x);const N=w.map(P=>P.id);try{await ie.reorderChapters(e,N),o(w)}catch(P){console.error("Failed to reorder chapters:",P)}}};return v("div",{className:"chapter-manager",children:[v("div",{className:"chapter-manager-header",children:[v("div",{className:"header-left",children:[p(O0,{size:20}),p("h2",{children:"\u7AE0\u8282\u7BA1\u7406"})]}),v("button",{className:"btn-primary",onClick:()=>u(!0),disabled:l,children:[p(ca,{size:16}),"\u65B0\u5EFA\u7AE0\u8282"]})]}),p("div",{className:"chapter-list",children:l&&r.length===0?v("div",{className:"loading-state",children:[p("div",{className:"spinner"}),p("p",{children:"\u52A0\u8F7D\u4E2D..."})]}):r.length===0?v("div",{className:"empty-state",children:[p(V0,{size:48}),p("h3",{children:"\u6682\u65E0\u7AE0\u8282"}),p("p",{children:"\u70B9\u51FB\u4E0A\u65B9\u6309\u94AE\u521B\u5EFA\u60A8\u7684\u7B2C\u4E00\u4E2A\u7AE0\u8282"})]}):r.map((d,c)=>v("div",{className:"chapter-item",draggable:!0,onDragStart:f=>k(f,c),onDragOver:E,onDrop:f=>_(f,c),children:[v("div",{className:"chapter-info",onClick:()=>n(`/project/${e}/chapter/${d.id}`),children:[p("div",{className:"chapter-index",children:c+1}),v("div",{className:"chapter-content",children:[p("h4",{children:d.title}),v("p",{className:"chapter-preview",children:[d.content.slice(0,50),d.content.length>50?"...":""]}),v("div",{className:"chapter-meta",children:[v("span",{children:["\u521B\u5EFA\u65F6\u95F4: ",new Date(d.createdAt).toLocaleDateString()]}),v("span",{children:["\u66F4\u65B0\u65F6\u95F4: ",new Date(d.updatedAt).toLocaleDateString()]})]})]})]}),v("div",{className:"chapter-actions",children:[p(U0,{size:20,className:"drag-handle"}),v("button",{className:"btn-primary",onClick:f=>{f.stopPropagation(),n(`/project/${e}/chapter/${d.id}`)},disabled:l,title:"\u6253\u5F00\u7AE0\u8282\u7F16\u8F91\u5668",children:[p(M0,{size:16}),"\u6253\u5F00"]}),v("button",{className:"btn-danger",onClick:f=>{f.stopPropagation(),y(d.id)},disabled:l,children:[p(bo,{size:16}),"\u5220\u9664"]})]})]},d.id))}),a&&p("div",{className:"modal",children:v("div",{className:"modal-content",children:[v("div",{className:"modal-header",children:[p("h2",{children:"\u521B\u5EFA\u65B0\u7AE0\u8282"}),p("button",{className:"modal-close",onClick:()=>u(!1),disabled:l,children:p(Uo,{size:24})})]}),v("form",{onSubmit:h,children:[v("div",{className:"form-group",children:[p("label",{htmlFor:"chapter-title",children:"\u7AE0\u8282\u6807\u9898"}),p("input",{type:"text",id:"chapter-title",value:s.title,onChange:d=>g({...s,title:d.target.value}),placeholder:"\u8BF7\u8F93\u5165\u7AE0\u8282\u6807\u9898",required:!0})]}),v("div",{className:"form-group",children:[p("label",{htmlFor:"chapter-content",children:"\u7AE0\u8282\u5185\u5BB9"}),p("textarea",{id:"chapter-content",value:s.content,onChange:d=>g({...s,content:d.target.value}),placeholder:"\u8BF7\u8F93\u5165\u7AE0\u8282\u5185\u5BB9",rows:6})]}),v("div",{className:"modal-footer",children:[p("button",{type:"button",className:"btn-secondary",onClick:()=>u(!1),disabled:l,children:"\u53D6\u6D88"}),p("button",{type:"submit",className:"btn-primary",disabled:l,children:"\u786E\u5B9A"})]})]})]})}),p("style",{children:`
        .chapter-manager {
          background-color: transparent;
          border-radius: 0;
          overflow: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .chapter-manager-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 20px;
          background: linear-gradient(135deg, #1E2A3A 0%, #1A2432 100%);
          border-bottom: 1px solid #2D3E54;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #CBD5E1;
        }

        .header-left h2 {
          margin: 0;
          font-size: 1rem;
          font-weight: 600;
        }

        .chapter-list {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
          background-color: #151E2B;
        }

        .loading-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 48px;
          color: #64748B;
        }

        .spinner {
          width: 28px;
          height: 28px;
          border: 3px solid #334155;
          border-top: 3px solid #00A8FF;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 12px;
        }

        .empty-state {
          text-align: center;
          padding: 48px;
          color: #64748B;
        }

        .empty-state h3 {
          margin: 16px 0 8px;
          color: #E2E8F0;
          font-size: 1.05rem;
        }

        .chapter-item {
          background: linear-gradient(145deg, #1E2A3A 0%, #1A2432 100%);
          border-radius: 10px;
          padding: 16px 18px;
          margin-bottom: 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          cursor: pointer;
          transition: all 0.2s ease;
          border: 1px solid #2D3E54;
        }

        .chapter-item:hover {
          background: linear-gradient(145deg, #253345 0%, #1E2A3A 100%);
          border-color: #00A8FF;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
        }

        .chapter-item.dragging {
          opacity: 0.5;
        }

        .chapter-info {
          flex: 1;
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }

        .chapter-index {
          min-width: 28px;
          height: 28px;
          background: linear-gradient(135deg, #00A8FF 0%, #0088CC 100%);
          color: white;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 0.85rem;
          box-shadow: 0 2px 8px rgba(0, 168, 255, 0.25);
        }

        .chapter-content {
          flex: 1;
          min-width: 0;
        }

        .chapter-content h4 {
          margin: 0 0 6px 0;
          color: #F1F5F9;
          font-size: 1rem;
          font-weight: 600;
        }

        .chapter-preview {
          margin: 0 0 8px 0;
          color: #94A3B8;
          font-size: 0.88rem;
          line-height: 1.5;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        .chapter-meta {
          display: flex;
          gap: 16px;
          font-size: 0.78rem;
          color: #64748B;
        }

        .chapter-actions {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .drag-handle {
          color: #475569;
          cursor: grab;
          padding: 4px;
          transition: color 0.2s;
        }

        .drag-handle:hover {
          color: #94A3B8;
        }

        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          backdrop-filter: blur(4px);
        }

        .modal-content {
          background: linear-gradient(145deg, #1E2A3A 0%, #1A2432 100%);
          border-radius: 14px;
          width: 90%;
          max-width: 520px;
          max-height: 85vh;
          overflow-y: auto;
          border: 1px solid #2D3E54;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 22px;
          border-bottom: 1px solid #2D3E54;
        }

        .modal-header h2 {
          margin: 0;
          color: #E2E8F0;
          font-size: 1.2rem;
          font-weight: 600;
        }

        .modal-close {
          background: none;
          border: none;
          color: #94A3B8;
          cursor: pointer;
          padding: 0;
          width: 32px;
          height: 32px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }

        .modal-close:hover {
          background-color: #334155;
          color: #E2E8F0;
        }

        .modal-content form {
          padding: 22px;
        }

        .form-group {
          margin-bottom: 18px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          color: #94A3B8;
          font-weight: 500;
          font-size: 0.9rem;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 11px 14px;
          background-color: #151E2B;
          border: 1px solid #334155;
          border-radius: 8px;
          color: #E2E8F0;
          font-size: 0.95rem;
          transition: all 0.2s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #00A8FF;
          box-shadow: 0 0 0 3px rgba(0, 168, 255, 0.1);
        }

        .form-group textarea {
          min-height: 140px;
          resize: vertical;
          font-family: inherit;
        }

        .modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
          padding: 16px 22px;
          border-top: 1px solid #2D3E54;
        }

        .btn-primary,
        .btn-secondary,
        .btn-danger {
          padding: 9px 16px;
          border: none;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s ease;
        }

        .btn-primary {
          background: linear-gradient(135deg, #00A8FF 0%, #0088CC 100%);
          color: white;
          box-shadow: 0 2px 8px rgba(0, 168, 255, 0.25);
        }

        .btn-primary:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 168, 255, 0.35);
        }

        .btn-secondary {
          background: #334155;
          color: #E2E8F0;
          border: 1px solid #475569;
        }

        .btn-secondary:hover:not(:disabled) {
          background: #475569;
          border-color: #64748B;
        }

        .btn-danger {
          background: linear-gradient(135deg, #EF4444 0%, #DC2626 100%);
          color: white;
          box-shadow: 0 2px 8px rgba(239, 68, 68, 0.25);
        }

        .btn-danger:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(239, 68, 68, 0.35);
        }

        .btn-primary:disabled,
        .btn-secondary:disabled,
        .btn-danger:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `})]})},mh=({projectId:e})=>{const[t,n]=C.exports.useState([]),[r,o]=C.exports.useState([]),[l,i]=C.exports.useState(!1),[a,u]=C.exports.useState(!1),[s,g]=C.exports.useState(null),[m,h]=C.exports.useState({name:"",description:"",voiceId:""});C.exports.useEffect(()=>{e&&(y(),k())},[e]);const y=async()=>{i(!0);try{const x=await ie.getCharacters(e);n(x)}catch(x){console.error("Failed to load characters:",x)}i(!1)},k=async()=>{try{const x=await ie.getVoices();o(x)}catch(x){console.error("Failed to load voices:",x)}},E=async x=>{if(x.preventDefault(),!!m.name.trim()){i(!0);try{await ie.createCharacter(e,m.name,m.description,m.voiceId),f(),u(!1),y()}catch(N){console.error("Failed to create character:",N)}i(!1)}},_=async x=>{if(x.preventDefault(),!(!s||!m.name.trim())){i(!0);try{await ie.updateCharacter(s.id,m.name,m.description,m.voiceId),f(),g(null),y()}catch(N){console.error("Failed to update character:",N)}i(!1)}},d=async x=>{if(!!window.confirm("\u786E\u5B9A\u8981\u5220\u9664\u6B64\u89D2\u8272\u5417\uFF1F")){i(!0);try{await ie.deleteCharacter(x),y()}catch(N){console.error("Failed to delete character:",N)}i(!1)}},c=x=>{g(x),h({name:x.name,description:x.description||"",voiceId:x.voiceId||""})},f=()=>{h({name:"",description:"",voiceId:""})},w=x=>{const N=r.find(P=>P.id===x);return N?N.name:"\u672A\u8BBE\u7F6E\u97F3\u8272"};return v("div",{className:"role-manager",children:[v("div",{className:"role-manager-header",children:[v("div",{className:"header-left",children:[p(Du,{size:20}),p("h2",{children:"\u89D2\u8272\u7BA1\u7406"})]}),v("button",{className:"btn-primary",onClick:()=>{f(),g(null),u(!0)},disabled:l,children:[p(ca,{size:16}),"\u6DFB\u52A0\u89D2\u8272"]})]}),p("div",{className:"role-list",children:l&&t.length===0?v("div",{className:"loading-state",children:[p("div",{className:"spinner"}),p("p",{children:"\u52A0\u8F7D\u4E2D..."})]}):t.length===0?v("div",{className:"empty-state",children:[p(rd,{size:48}),p("h3",{children:"\u6682\u65E0\u89D2\u8272"}),p("p",{children:"\u70B9\u51FB\u4E0A\u65B9\u6309\u94AE\u6DFB\u52A0\u5C0F\u8BF4\u89D2\u8272"})]}):p("div",{className:"role-grid",children:t.map(x=>v("div",{className:"role-card",children:[p("div",{className:"role-avatar",children:p(Du,{size:28})}),v("div",{className:"role-info",children:[p("h4",{children:x.name}),x.description&&p("p",{className:"role-description",children:x.description}),v("div",{className:"voice-badge",children:[p(td,{size:14}),p("span",{children:w(x.voiceId)})]})]}),v("div",{className:"role-actions",children:[p("button",{className:"btn-icon",onClick:()=>c(x),disabled:l,title:"\u7F16\u8F91",children:p(sa,{size:16})}),p("button",{className:"btn-icon btn-danger",onClick:()=>d(x.id),disabled:l,title:"\u5220\u9664",children:p(bo,{size:16})})]})]},x.id))})}),(a||s)&&p("div",{className:"modal",children:v("div",{className:"modal-content",children:[v("div",{className:"modal-header",children:[p("h2",{children:s?"\u7F16\u8F91\u89D2\u8272":"\u6DFB\u52A0\u65B0\u89D2\u8272"}),p("button",{className:"modal-close",onClick:()=>{u(!1),g(null),f()},disabled:l,children:p(Uo,{size:24})})]}),v("form",{onSubmit:s?_:E,children:[v("div",{className:"form-group",children:[p("label",{htmlFor:"character-name",children:"\u89D2\u8272\u540D\u79F0 *"}),p("input",{id:"character-name",type:"text",value:m.name,onChange:x=>h({...m,name:x.target.value}),placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0",required:!0,disabled:l})]}),v("div",{className:"form-group",children:[p("label",{htmlFor:"character-description",children:"\u89D2\u8272\u7B80\u4ECB"}),p("textarea",{id:"character-description",value:m.description,onChange:x=>h({...m,description:x.target.value}),placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u7B80\u4ECB\uFF08\u53EF\u9009\uFF09",rows:3,disabled:l})]}),v("div",{className:"form-group",children:[p("label",{htmlFor:"character-voice",children:"\u9009\u62E9\u97F3\u8272"}),p("div",{className:"voice-selector",children:r.length===0?v("div",{className:"no-voices",children:[p($0,{size:16}),p("span",{children:"\u52A0\u8F7D\u97F3\u8272\u4E2D..."})]}):p("div",{className:"voice-grid",children:r.map(x=>v("div",{className:`voice-option ${m.voiceId===x.id?"selected":""}`,onClick:()=>h({...m,voiceId:x.id}),children:[v("div",{className:"voice-option-header",children:[p(od,{size:16}),p("span",{className:"voice-name",children:x.name})]}),p("p",{className:"voice-desc",children:x.description}),x.supportedTones&&x.supportedTones.length>0&&v("div",{className:"voice-tones",children:[x.supportedTones.slice(0,3).map((N,P)=>p("span",{className:"tone-tag",children:N},P)),x.supportedTones.length>3&&v("span",{className:"tone-tag",children:["+",x.supportedTones.length-3]})]})]},x.id))})})]}),v("div",{className:"modal-footer",children:[p("button",{type:"button",className:"btn-secondary",onClick:()=>{u(!1),g(null),f()},disabled:l,children:"\u53D6\u6D88"}),v("button",{type:"submit",className:"btn-primary",disabled:l,children:[p(nd,{size:16}),s?"\u4FDD\u5B58\u4FEE\u6539":"\u521B\u5EFA\u89D2\u8272"]})]})]})]})}),p("style",{children:`
        .role-manager {
          background-color: transparent;
          border-radius: 0;
          overflow: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .role-manager-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 20px;
          background: linear-gradient(135deg, #1E2A3A 0%, #1A2432 100%);
          border-bottom: 1px solid #2D3E54;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #CBD5E1;
        }

        .header-left h2 {
          margin: 0;
          font-size: 1rem;
          font-weight: 600;
        }

        .role-list {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
          background-color: #151E2B;
        }

        .loading-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 48px;
          color: #64748B;
        }

        .spinner {
          width: 28px;
          height: 28px;
          border: 3px solid #334155;
          border-top: 3px solid #00A8FF;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 12px;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .empty-state {
          text-align: center;
          padding: 48px;
          color: #64748B;
        }

        .empty-state h3 {
          margin: 16px 0 8px;
          color: #E2E8F0;
          font-size: 1.05rem;
        }

        .role-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 12px;
        }

        .role-card {
          background: linear-gradient(145deg, #1E2A3A 0%, #1A2432 100%);
          border: 1px solid #2D3E54;
          border-radius: 12px;
          padding: 16px;
          display: flex;
          gap: 14px;
          transition: all 0.2s ease;
        }

        .role-card:hover {
          background: linear-gradient(145deg, #253345 0%, #1E2A3A 100%);
          border-color: #00A8FF;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
        }

        .role-avatar {
          width: 52px;
          height: 52px;
          background: linear-gradient(135deg, #00A8FF 0%, #0088CC 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(0, 168, 255, 0.25);
        }

        .role-info {
          flex: 1;
          min-width: 0;
        }

        .role-info h4 {
          margin: 0 0 6px;
          color: #F1F5F9;
          font-size: 1rem;
          font-weight: 600;
        }

        .role-description {
          margin: 0 0 8px;
          color: #94A3B8;
          font-size: 0.85rem;
          line-height: 1.4;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        .voice-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          background-color: rgba(0, 168, 255, 0.12);
          color: #00A8FF;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .role-actions {
          display: flex;
          gap: 4px;
          flex-direction: column;
        }

        .btn-icon {
          width: 32px;
          height: 32px;
          padding: 0;
          border: none;
          border-radius: 8px;
          background: transparent;
          color: #64748B;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .btn-icon:hover:not(:disabled) {
          background: rgba(255, 255, 255, 0.08);
          color: #E2E8F0;
        }

        .btn-icon.btn-danger:hover:not(:disabled) {
          background: rgba(239, 68, 68, 0.15);
          color: #EF4444;
        }

        .btn-icon:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* \u6A21\u6001\u6846\u6837\u5F0F */
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          backdrop-filter: blur(4px);
        }

        .modal-content {
          background: linear-gradient(145deg, #1E2A3A 0%, #1A2432 100%);
          border-radius: 14px;
          width: 90%;
          max-width: 560px;
          max-height: 85vh;
          overflow-y: auto;
          border: 1px solid #2D3E54;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 22px;
          border-bottom: 1px solid #2D3E54;
        }

        .modal-header h2 {
          margin: 0;
          color: #E2E8F0;
          font-size: 1.2rem;
          font-weight: 600;
        }

        .modal-close {
          background: none;
          border: none;
          color: #94A3B8;
          cursor: pointer;
          padding: 0;
          width: 32px;
          height: 32px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }

        .modal-close:hover {
          background-color: #334155;
          color: #E2E8F0;
        }

        .modal-content form {
          padding: 22px;
        }

        .form-group {
          margin-bottom: 18px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          color: #94A3B8;
          font-weight: 500;
          font-size: 0.9rem;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 11px 14px;
          background-color: #151E2B;
          border: 1px solid #334155;
          border-radius: 8px;
          color: #E2E8F0;
          font-size: 0.95rem;
          transition: all 0.2s ease;
          box-sizing: border-box;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #00A8FF;
          box-shadow: 0 0 0 3px rgba(0, 168, 255, 0.1);
        }

        .form-group textarea {
          min-height: 80px;
          resize: vertical;
          font-family: inherit;
        }

        /* \u97F3\u8272\u9009\u62E9\u5668 */
        .voice-selector {
          margin-top: 4px;
        }

        .no-voices {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 16px;
          background-color: #151E2B;
          border: 1px solid #334155;
          border-radius: 8px;
          color: #64748B;
        }

        .voice-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 10px;
        }

        .voice-option {
          padding: 14px;
          background-color: #151E2B;
          border: 2px solid #334155;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .voice-option:hover {
          border-color: #475569;
          background-color: #1A2533;
        }

        .voice-option.selected {
          border-color: #00A8FF;
          background-color: rgba(0, 168, 255, 0.08);
          box-shadow: 0 0 0 2px rgba(0, 168, 255, 0.15);
        }

        .voice-option-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 6px;
        }

        .voice-option-header svg {
          color: #00A8FF;
        }

        .voice-name {
          color: #E2E8F0;
          font-weight: 600;
          font-size: 0.95rem;
        }

        .voice-desc {
          margin: 0;
          color: #64748B;
          font-size: 0.82rem;
          line-height: 1.4;
        }

        .voice-tones {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
          margin-top: 8px;
        }

        .tone-tag {
          padding: 2px 8px;
          background-color: rgba(148, 163, 184, 0.15);
          color: #94A3B8;
          border-radius: 4px;
          font-size: 0.72rem;
        }

        .modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
          padding-top: 6px;
        }

        /* \u6309\u94AE\u6837\u5F0F */
        .btn-primary,
        .btn-secondary {
          padding: 9px 16px;
          border: none;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .btn-primary {
          background: linear-gradient(135deg, #00A8FF 0%, #0088CC 100%);
          color: white;
          box-shadow: 0 2px 8px rgba(0, 168, 255, 0.25);
        }

        .btn-primary:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 168, 255, 0.35);
        }

        .btn-secondary {
          background: #334155;
          color: #E2E8F0;
          border: 1px solid #475569;
        }

        .btn-secondary:hover:not(:disabled) {
          background: #475569;
          border-color: #64748B;
        }

        .btn-primary:disabled,
        .btn-secondary:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }
      `})]})},gh=()=>{const{id:e}=Jc(),t=mr(),[n,r]=C.exports.useState(null),[o,l]=C.exports.useState(!1),[i,a]=C.exports.useState(!1),[u,s]=C.exports.useState({name:"",description:""});C.exports.useEffect(()=>{e&&g(parseInt(e))},[e]);const g=async h=>{l(!0);try{const y=await ie.getProject(h);r(y),y&&s({name:y.name,description:y.description})}catch(y){console.error("Failed to load project:",y)}l(!1)},m=async()=>{if(!!e){l(!0);try{await ie.updateProject(parseInt(e),u.name,u.description),a(!1),g(parseInt(e))}catch(h){console.error("Failed to update project:",h)}l(!1)}};return o&&!n?p("div",{className:"project-details-page",children:v("div",{className:"loading-container",children:[p("div",{className:"spinner"}),p("p",{children:"\u52A0\u8F7D\u4E2D..."})]})}):n?v("div",{className:"project-details-page",children:[p("header",{className:"page-header",children:v("div",{className:"header-inner",children:[v("div",{className:"header-left",children:[v(yo,{to:"/",className:"back-button",children:[p(xo,{size:18}),p("span",{children:"\u8FD4\u56DE"})]}),p("div",{className:"divider"}),v("div",{className:"project-title",children:[p(zu,{size:20,className:"title-icon"}),v("div",{children:[p("h1",{children:n.name}),p("p",{className:"subtitle",children:"\u6709\u58F0\u5C0F\u8BF4\u5236\u4F5C\u5DE5\u7A0B"})]})]})]}),p("div",{className:"header-right",children:p("button",{className:"btn-secondary",onClick:()=>t("/"),children:"\u8FD4\u56DE\u9996\u9875"})})]})}),p("main",{className:"main-content",children:v("div",{className:"content-wrapper",children:[v("section",{className:"project-info-section",children:[v("div",{className:"section-header",children:[v("h2",{children:[p(rd,{size:18}),"\u9879\u76EE\u6982\u89C8"]}),!i&&p("button",{className:"btn-ghost",onClick:()=>a(!0),disabled:o,children:"\u7F16\u8F91\u4FE1\u606F"})]}),p("div",{className:"project-info-card",children:i?v("div",{className:"project-info-edit",children:[v("div",{className:"form-grid",children:[v("div",{className:"form-group full-width",children:[p("label",{htmlFor:"project-name",children:"\u9879\u76EE\u540D\u79F0"}),p("input",{id:"project-name",type:"text",value:u.name,onChange:h=>s({...u,name:h.target.value}),placeholder:"\u8BF7\u8F93\u5165\u9879\u76EE\u540D\u79F0",disabled:o})]}),v("div",{className:"form-group full-width",children:[p("label",{htmlFor:"project-description",children:"\u9879\u76EE\u63CF\u8FF0"}),p("textarea",{id:"project-description",value:u.description,onChange:h=>s({...u,description:h.target.value}),placeholder:"\u8BF7\u8F93\u5165\u9879\u76EE\u63CF\u8FF0",rows:3,disabled:o})]})]}),v("div",{className:"form-actions",children:[v("button",{className:"btn-secondary",onClick:()=>{a(!1),s({name:n.name,description:n.description})},disabled:o,children:[p(Uo,{size:16}),"\u53D6\u6D88"]}),v("button",{className:"btn-primary",onClick:m,disabled:o,children:[p(nd,{size:16}),"\u4FDD\u5B58\u66F4\u6539"]})]})]}):v("div",{className:"project-info-content",children:[v("div",{className:"info-grid",children:[v("div",{className:"info-item",children:[p("div",{className:"info-label",children:"\u9879\u76EE\u540D\u79F0"}),p("div",{className:"info-value",children:n.name})]}),v("div",{className:"info-item",children:[p("div",{className:"info-label",children:"\u9879\u76EE\u63CF\u8FF0"}),p("div",{className:"info-value",children:n.description||"\u6682\u65E0\u63CF\u8FF0"})]})]}),v("div",{className:"meta-row",children:[v("div",{className:"meta-item",children:[p(T0,{size:14}),v("span",{children:["\u521B\u5EFA\u4E8E ",new Date(n.createdAt).toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric"})]})]}),v("div",{className:"meta-item",children:[p(ed,{size:14}),v("span",{children:["\u66F4\u65B0\u4E8E ",new Date(n.updatedAt).toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric"})]})]})]})]})})]}),v("section",{className:"character-section",children:[p("div",{className:"section-header",children:v("h2",{children:[p(G0,{size:18}),"\u89D2\u8272\u7BA1\u7406"]})}),p("div",{className:"role-manager-wrapper",children:p(mh,{projectId:parseInt(e||"0")})})]}),v("section",{className:"chapter-section",children:[p("div",{className:"section-header",children:v("h2",{children:[p(zu,{size:18}),"\u7AE0\u8282\u7BA1\u7406"]})}),p("div",{className:"chapter-manager-wrapper",children:p(hh,{projectId:parseInt(e||"0")})})]})]})}),p("style",{children:`
        .project-details-page {
          background-color: #151E2B;
          color: #ECF0F1;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        /* \u56FA\u5B9A\u9876\u90E8\u5BFC\u822A\u680F */
        .page-header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: linear-gradient(135deg, #1E2A3A 0%, #253548 100%);
          border-bottom: 1px solid #2D3E54;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
          backdrop-filter: blur(10px);
        }

        .header-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 14px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 16px;
          min-width: 0;
        }

        .back-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          color: #94A3B8;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          border-radius: 8px;
          transition: all 0.2s ease;
          background: transparent;
          border: none;
          cursor: pointer;
          flex-shrink: 0;
        }

        .back-button:hover {
          color: #ECF0F1;
          background: rgba(255, 255, 255, 0.06);
        }

        .divider {
          width: 1px;
          height: 32px;
          background: linear-gradient(to bottom, transparent, #334155, transparent);
        }

        .project-title {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 0;
        }

        .title-icon {
          color: #00A8FF;
          flex-shrink: 0;
        }

        .project-title h1 {
          margin: 0;
          font-size: 1.15rem;
          font-weight: 600;
          color: #F1F5F9;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .subtitle {
          margin: 2px 0 0;
          font-size: 0.8rem;
          color: #64748B;
        }

        .header-right {
          display: flex;
          gap: 10px;
        }

        /* \u4E3B\u5185\u5BB9\u533A\u57DF */
        .main-content {
          flex: 1;
          overflow-y: auto;
        }

        .content-wrapper {
          max-width: 1400px;
          margin: 0 auto;
          padding: 28px 24px 40px;
        }

        /* \u533A\u5757\u901A\u7528\u6837\u5F0F */
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .section-header h2 {
          margin: 0;
          font-size: 1rem;
          font-weight: 600;
          color: #CBD5E1;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .project-info-section,
        .character-section,
        .chapter-section {
          margin-bottom: 28px;
        }

        /* \u89D2\u8272\u7BA1\u7406\u5BB9\u5668 */
        .role-manager-wrapper {
          background: #1E2A3A;
          border: 1px solid #2D3E54;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
        }

        /* \u9879\u76EE\u4FE1\u606F\u5361\u7247 */
        .project-info-card {
          background: linear-gradient(145deg, #1E2A3A 0%, #1A2432 100%);
          border: 1px solid #2D3E54;
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
        }

        .project-info-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }

        .info-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .info-label {
          font-size: 0.8rem;
          font-weight: 500;
          color: #64748B;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .info-value {
          font-size: 1rem;
          color: #E2E8F0;
          line-height: 1.5;
        }

        .meta-row {
          display: flex;
          gap: 24px;
          padding-top: 16px;
          border-top: 1px solid #2D3E54;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          color: #64748B;
        }

        .meta-item svg {
          color: #475569;
        }

        /* \u7F16\u8F91\u8868\u5355 */
        .project-info-edit {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group.full-width {
          grid-column: 1 / -1;
        }

        .form-group label {
          color: #94A3B8;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .form-group input,
        .form-group textarea {
          padding: 10px 14px;
          background-color: #151E2B;
          border: 1px solid #334155;
          border-radius: 8px;
          color: #E2E8F0;
          font-size: 0.95rem;
          transition: all 0.2s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #00A8FF;
          box-shadow: 0 0 0 3px rgba(0, 168, 255, 0.1);
        }

        .form-group textarea {
          min-height: 80px;
          resize: vertical;
        }

        .form-actions {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
          padding-top: 8px;
        }

        /* \u7AE0\u8282\u7BA1\u7406\u5BB9\u5668 */
        .chapter-manager-wrapper {
          background: #1E2A3A;
          border: 1px solid #2D3E54;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
        }

        /* \u6309\u94AE\u6837\u5F0F */
        .btn-primary,
        .btn-secondary,
        .btn-ghost {
          padding: 9px 16px;
          border: none;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .btn-primary {
          background: linear-gradient(135deg, #00A8FF 0%, #0088CC 100%);
          color: white;
          box-shadow: 0 2px 8px rgba(0, 168, 255, 0.25);
        }

        .btn-primary:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 168, 255, 0.35);
        }

        .btn-secondary {
          background: #334155;
          color: #E2E8F0;
          border: 1px solid #475569;
        }

        .btn-secondary:hover:not(:disabled) {
          background: #475569;
          border-color: #64748B;
        }

        .btn-ghost {
          background: transparent;
          color: #94A3B8;
          border: 1px solid transparent;
        }

        .btn-ghost:hover:not(:disabled) {
          background: rgba(255, 255, 255, 0.06);
          color: #E2E8F0;
        }

        .btn-primary:disabled,
        .btn-secondary:disabled,
        .btn-ghost:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
        }

        /* \u52A0\u8F7D\u548C\u9519\u8BEF\u72B6\u6001 */
        .loading-container,
        .error-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          color: #CBD5E1;
        }

        .spinner {
          width: 32px;
          height: 32px;
          border: 3px solid #334155;
          border-top: 3px solid #00A8FF;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 16px;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .error-container h2 {
          margin: 0 0 20px;
        }
      `})]}):p("div",{className:"project-details-page",children:v("div",{className:"error-container",children:[p("h2",{children:"\u9879\u76EE\u4E0D\u5B58\u5728"}),v(yo,{to:"/",className:"btn-primary",children:[p(xo,{size:16}),"\u8FD4\u56DE\u9996\u9875"]})]})})},vh="neutral",yh="happy",xh="sad",wh="angry",kh="excited",Eh="fearful",Sh="surprised",Ch="disgusted",Fh=[{value:vh,label:"\u4E2D\u6027"},{value:yh,label:"\u5F00\u5FC3"},{value:xh,label:"\u60B2\u4F24"},{value:wh,label:"\u6124\u6012"},{value:kh,label:"\u5174\u594B"},{value:Eh,label:"\u6050\u60E7"},{value:Sh,label:"\u60CA\u8BB6"},{value:Ch,label:"\u538C\u6076"}],_u=1,Nh=()=>{const{projectId:e,chapterId:t}=Jc();mr();const[n,r]=C.exports.useState(null),[o,l]=C.exports.useState([]),[i,a]=C.exports.useState([]),[u,s]=C.exports.useState([]),[g,m]=C.exports.useState(!0),[h,y]=C.exports.useState(null),[k,E]=C.exports.useState(!1),[_,d]=C.exports.useState(0),[c,f]=C.exports.useState(0),[w,x]=C.exports.useState(!1),[N,P]=C.exports.useState(null),[z,O]=C.exports.useState({content:"",speaker:"",tone:"neutral",voiceId:"",speed:_u}),L=C.exports.useRef(null),ve=[{id:1,chapterId:parseInt(t||"0"),content:"\u8FD9\u662F\u4E00\u4E2A\u5B81\u9759\u7684\u591C\u665A\uFF0C\u6708\u5149\u900F\u8FC7\u7A97\u6237\u6D12\u8FDB\u623F\u95F4\u3002",speaker:"\u65C1\u767D",tone:"neutral",voiceId:"BV001",speed:1,audioPath:"",duration:3.5,orderIndex:0,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},{id:2,chapterId:parseInt(t||"0"),content:'"\u4F60\u6765\u4E86\u3002"\u5979\u8F7B\u58F0\u8BF4\u9053\uFF0C\u58F0\u97F3\u4E2D\u5E26\u7740\u4E00\u4E1D\u98A4\u6296\u3002',speaker:"\u5973\u4E3B\u89D2",tone:"sad",voiceId:"BV002",speed:.9,audioPath:"",duration:2.8,orderIndex:1,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},{id:3,chapterId:parseInt(t||"0"),content:'"\u662F\u7684\uFF0C\u6211\u6765\u4E86\u3002"\u4ED6\u7AD9\u5728\u95E8\u53E3\uFF0C\u8EAB\u5F71\u88AB\u6708\u5149\u62C9\u5F97\u5F88\u957F\u3002',speaker:"\u7537\u4E3B\u89D2",tone:"neutral",voiceId:"BV001",speed:1,audioPath:"",duration:3.2,orderIndex:2,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},{id:4,chapterId:parseInt(t||"0"),content:'"\u4E3A\u4EC0\u4E48\u9009\u62E9\u73B0\u5728\u56DE\u6765\uFF1F"\u5979\u8F6C\u8FC7\u8EAB\uFF0C\u773C\u4E2D\u95EA\u70C1\u7740\u6CEA\u5149\u3002',speaker:"\u5973\u4E3B\u89D2",tone:"sad",voiceId:"BV002",speed:.85,audioPath:"",duration:3,orderIndex:3,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},{id:5,chapterId:parseInt(t||"0"),content:'"\u56E0\u4E3A\u6211\u77E5\u9053\uFF0C\u8FD9\u91CC\u624D\u662F\u6211\u7684\u5F52\u5BBF\u3002"\u4ED6\u7F13\u7F13\u8D70\u8FDB\u623F\u95F4\uFF0C\u6BCF\u4E00\u6B65\u90FD\u50CF\u662F\u8E29\u5728\u5979\u7684\u5FC3\u4E0A\u3002',speaker:"\u7537\u4E3B\u89D2",tone:"sad",voiceId:"BV003",speed:.95,audioPath:"",duration:4.2,orderIndex:4,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()}];C.exports.useEffect(()=>{t&&Pt()},[t,e]);const Pt=async()=>{m(!0);try{const F=await ie.getChapter(parseInt(t||"0"));if(r(F),e){const q=await ie.getCharacters(parseInt(e));a(q)}const I=await ie.getVoices();s(I),l(ve),ot(ve)}catch(F){console.error("Failed to load data:",F)}m(!1)},ot=F=>{const I=F.reduce((q,Te)=>q+(Te.duration||0),0);f(I)},Vo=(()=>{let F=0;return o.map(I=>{const q=F,Te=F+(I.duration||2);return F=Te,{id:I.id,start:q,end:Te,paragraph:I}})})(),Wt=F=>{y(F);const I=o.find(q=>q.id===F);I&&(P(I),O({content:I.content,speaker:I.speaker||"",tone:I.tone||"neutral",voiceId:I.voiceId||"",speed:I.speed||_u}),x(!0))},En=()=>{if(!N)return;const F=o.map(I=>I.id===N.id?{...I,...z}:I);l(F),x(!1),P(null)},D=F=>{if(!window.confirm("\u786E\u5B9A\u8981\u5220\u9664\u6B64\u6BB5\u843D\u5417\uFF1F"))return;const I=o.filter(q=>q.id!==F);l(I),ot(I),h===F&&(y(null),x(!1))},B=async F=>{console.log("Generating audio for paragraph:",F)},j=async()=>{console.log("Generating all audio")},H=()=>{E(!k)},X=F=>{const I=Math.floor(F/60),q=Math.floor(F%60),Te=Math.floor(F%1*100);return`${I.toString().padStart(2,"0")}:${q.toString().padStart(2,"0")}:${Te.toString().padStart(2,"0")}`},zt=F=>({\u65C1\u767D:"#00A8FF",\u7537\u4E3B\u89D2:"#FF6B6B",\u5973\u4E3B\u89D2:"#FF8EC7"})[F]||"#95A5A6";return g?p("div",{className:"chapter-editor",children:v("div",{className:"loading-container",children:[p("div",{className:"spinner"}),p("p",{children:"\u52A0\u8F7D\u4E2D..."})]})}):n?v("div",{className:"chapter-editor",children:[v("header",{className:"editor-header",children:[v("div",{className:"header-left",children:[v(yo,{to:`/project/${e}`,className:"back-button",children:[p(xo,{size:18}),p("span",{children:"\u8FD4\u56DE"})]}),p("div",{className:"divider"}),v("div",{className:"chapter-title",children:[p("h1",{children:n.title}),p("p",{className:"subtitle",children:"\u7AE0\u8282\u7F16\u8F91 \xB7 \u65F6\u95F4\u8F74\u89C6\u56FE"})]})]}),v("div",{className:"header-right",children:[v("button",{className:"btn-secondary",onClick:()=>console.log("Import text"),children:[p(sa,{size:16}),"\u7F16\u8F91\u6587\u672C"]}),v("button",{className:"btn-primary",onClick:j,children:[p(Au,{size:16}),"\u6279\u91CF\u751F\u6210"]})]})]}),v("div",{className:"editor-main",children:[v("div",{className:"text-panel",children:[p("div",{className:"panel-header",children:p("h2",{children:"\u6587\u672C\u5185\u5BB9"})}),p("div",{className:"text-content",children:o.map((F,I)=>v("div",{className:`text-paragraph ${h===F.id?"selected":""}`,onClick:()=>Wt(F.id),children:[p("div",{className:"speaker-badge",style:{backgroundColor:zt(F.speaker)},children:F.speaker||"\u65C1\u767D"}),p("p",{className:"paragraph-text",children:F.content}),v("div",{className:"paragraph-meta",children:[F.audioPath?v("span",{className:"has-audio",children:[p(od,{size:12}),"\u5DF2\u751F\u6210"]}):p("span",{className:"no-audio",children:"\u672A\u751F\u6210"}),v("span",{className:"duration",children:[p(ed,{size:12}),(F.duration||0).toFixed(1),"s"]})]})]},F.id))})]}),v("div",{className:"timeline-panel",children:[p("div",{className:"panel-header",children:v("div",{className:"transport-controls",children:[p("button",{className:`play-btn ${k?"playing":""}`,onClick:H,children:k?p(H0,{size:20}):p(Q0,{size:20})}),v("div",{className:"time-display",children:[X(_)," / ",X(c)]})]})}),v("div",{className:"timeline-container",ref:L,children:[p("div",{className:"timeline-ruler",children:Array.from({length:Math.ceil(c)+1}).map((F,I)=>p("div",{className:"ruler-mark",style:{left:`${I/c*100}%`},children:v("span",{className:"ruler-label",children:[I,"s"]})},I))}),p("div",{className:"timeline-track",children:Vo.map(F=>v("div",{className:`timeline-clip ${h===F.id?"selected":""}`,style:{left:`${F.start/c*100}%`,width:`${(F.end-F.start)/c*100}%`,backgroundColor:zt(F.paragraph.speaker)},onClick:()=>Wt(F.id),children:[v("div",{className:"clip-content",children:[v("div",{className:"clip-speaker",children:[p(td,{size:14}),F.paragraph.speaker||"\u65C1\u767D"]}),v("div",{className:"clip-text",children:[F.paragraph.content.slice(0,40),F.paragraph.content.length>40?"...":""]})]}),F.paragraph.audioPath&&p("div",{className:"clip-indicator",children:p(W0,{size:12})})]},F.id))}),p("div",{className:"playhead",style:{left:`${_/c*100}%`}})]})]}),p("div",{className:`properties-panel ${w?"open":""}`,children:w&&N?v(Gc,{children:[v("div",{className:"panel-header",children:[p("h2",{children:"\u6BB5\u843D\u5C5E\u6027"}),p("button",{className:"close-btn",onClick:()=>x(!1),children:p(Uo,{size:18})})]}),v("div",{className:"panel-content",children:[v("div",{className:"form-group",children:[p("label",{children:"\u6587\u672C\u5185\u5BB9"}),p("textarea",{value:z.content,onChange:F=>O({...z,content:F.target.value}),rows:4})]}),v("div",{className:"form-group",children:[p("label",{children:"\u8BF4\u8BDD\u89D2\u8272"}),v("select",{value:z.speaker,onChange:F=>O({...z,speaker:F.target.value}),children:[p("option",{value:"",children:"\u65C1\u767D"}),i.map(F=>p("option",{value:F.name,children:F.name},F.id))]})]}),v("div",{className:"form-group",children:[p("label",{children:"\u97F3\u8272"}),v("select",{value:z.voiceId,onChange:F=>O({...z,voiceId:F.target.value}),children:[p("option",{value:"",children:"\u8BF7\u9009\u62E9\u97F3\u8272"}),u.map(F=>p("option",{value:F.id,children:F.name},F.id))]})]}),v("div",{className:"form-group",children:[p("label",{children:"\u60C5\u611F"}),p("select",{value:z.tone,onChange:F=>O({...z,tone:F.target.value}),children:Fh.map(F=>p("option",{value:F.value,children:F.label},F.value))})]}),v("div",{className:"form-group",children:[v("div",{className:"label-row",children:[p("label",{children:"\u8BED\u901F"}),p("span",{className:"value-badge",children:z.speed.toFixed(2)})]}),p("input",{type:"range",min:"0.5",max:"2.0",step:"0.05",value:z.speed,onChange:F=>O({...z,speed:parseFloat(F.target.value)})}),v("div",{className:"range-labels",children:[p("span",{children:"0.5x"}),p("span",{children:"1.0x"}),p("span",{children:"2.0x"})]})]}),v("div",{className:"action-buttons",children:[v("button",{className:"btn-generate",onClick:()=>B(N.id),children:[p(Au,{size:16}),"\u751F\u6210\u97F3\u9891"]}),v("button",{className:"btn-delete",onClick:()=>D(N.id),children:[p(bo,{size:16}),"\u5220\u9664"]})]}),v("div",{className:"save-bar",children:[p("button",{className:"btn-secondary",onClick:()=>x(!1),children:"\u53D6\u6D88"}),v("button",{className:"btn-primary",onClick:En,children:[p(I0,{size:16}),"\u4FDD\u5B58"]})]})]})]}):v("div",{className:"empty-properties",children:[p(K0,{size:40}),p("p",{children:"\u9009\u62E9\u4E00\u4E2A\u6BB5\u843D\u6765\u7F16\u8F91\u5C5E\u6027"})]})})]}),p("style",{children:`
        .chapter-editor {
          background-color: #0F1419;
          color: #ECF0F1;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        /* \u9876\u90E8\u5BFC\u822A\u680F */
        .editor-header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: linear-gradient(135deg, #1A1F26 0%, #141920 100%);
          border-bottom: 1px solid #2A3442;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        .editor-header .header-left {
          display: flex;
          align-items: center;
          gap: 16px;
          min-width: 0;
        }

        .editor-header .back-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          color: #94A3B8;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          border-radius: 8px;
          transition: all 0.2s ease;
          background: transparent;
          border: none;
          cursor: pointer;
          flex-shrink: 0;
        }

        .editor-header .back-button:hover {
          color: #ECF0F1;
          background: rgba(255, 255, 255, 0.06);
        }

        .editor-header .divider {
          width: 1px;
          height: 32px;
          background: linear-gradient(to bottom, transparent, #2A3442, transparent);
        }

        .editor-header .chapter-title h1 {
          margin: 0;
          font-size: 1.15rem;
          font-weight: 600;
          color: #F1F5F9;
        }

        .editor-header .subtitle {
          margin: 2px 0 0;
          font-size: 0.8rem;
          color: #64748B;
        }

        .editor-header .header-right {
          display: flex;
          gap: 10px;
        }

        .editor-header {
          max-width: none;
          margin: 0;
          padding: 14px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        /* \u4E3B\u7F16\u8F91\u533A\u57DF */
        .editor-main {
          flex: 1;
          display: flex;
          height: calc(100vh - 64px);
          overflow: hidden;
        }

        /* \u9762\u677F\u901A\u7528 */
        .panel-header {
          padding: 14px 16px;
          background: linear-gradient(135deg, #1A1F26 0%, #141920 100%);
          border-bottom: 1px solid #2A3442;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .panel-header h2 {
          margin: 0;
          font-size: 0.95rem;
          font-weight: 600;
          color: #CBD5E1;
        }

        /* \u5DE6\u4FA7\u6587\u672C\u9762\u677F */
        .text-panel {
          width: 380px;
          background-color: #141920;
          border-right: 1px solid #2A3442;
          display: flex;
          flex-direction: column;
        }

        .text-content {
          flex: 1;
          overflow-y: auto;
          padding: 12px;
        }

        .text-paragraph {
          background: linear-gradient(145deg, #1E2530 0%, #1A212B 100%);
          border: 1px solid #2A3442;
          border-radius: 10px;
          padding: 12px;
          margin-bottom: 10px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .text-paragraph:hover {
          border-color: #3A4A5C;
          transform: translateY(-1px);
        }

        .text-paragraph.selected {
          border-color: #00A8FF;
          box-shadow: 0 0 0 2px rgba(0, 168, 255, 0.2);
        }

        .speaker-badge {
          display: inline-flex;
          align-items: center;
          padding: 3px 10px;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 600;
          color: white;
          margin-bottom: 8px;
        }

        .paragraph-text {
          margin: 0 0 8px;
          color: #E2E8F0;
          font-size: 0.92rem;
          line-height: 1.6;
        }

        .paragraph-meta {
          display: flex;
          gap: 12px;
          font-size: 0.78rem;
          color: #64748B;
        }

        .has-audio {
          color: #4ECDC4;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .duration {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        /* \u4E2D\u95F4\u65F6\u95F4\u8F74\u9762\u677F */
        .timeline-panel {
          flex: 1;
          display: flex;
          flex-direction: column;
          background-color: #0F1419;
        }

        .transport-controls {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .play-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #00A8FF 0%, #0088CC 100%);
          border: none;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(0, 168, 255, 0.3);
        }

        .play-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 16px rgba(0, 168, 255, 0.4);
        }

        .play-btn.playing {
          background: linear-gradient(135deg, #FF6B6B 0%, #EE5253 100%);
          box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3);
        }

        .time-display {
          font-family: 'SF Mono', 'Monaco', 'Consolas', monospace;
          font-size: 0.95rem;
          color: #00A8FF;
          background-color: rgba(0, 168, 255, 0.1);
          padding: 4px 10px;
          border-radius: 6px;
        }

        .timeline-container {
          flex: 1;
          position: relative;
          overflow-x: auto;
          overflow-y: hidden;
          padding: 20px;
        }

        .timeline-ruler {
          position: relative;
          height: 28px;
          margin-bottom: 8px;
          border-bottom: 1px solid #2A3442;
        }

        .ruler-mark {
          position: absolute;
          top: 0;
          height: 100%;
          border-left: 1px solid #2A3442;
          padding-left: 4px;
        }

        .ruler-label {
          font-size: 0.72rem;
          color: #64748B;
        }

        .timeline-track {
          position: relative;
          height: 200px;
          background: linear-gradient(180deg, #141920 0%, #11161C 100%);
          border-radius: 10px;
          border: 1px solid #2A3442;
          overflow: hidden;
        }

        .timeline-clip {
          position: absolute;
          top: 20px;
          height: calc(100% - 40px);
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 8px 12px;
          box-sizing: border-box;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
          opacity: 0.9;
        }

        .timeline-clip:hover {
          opacity: 1;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        }

        .timeline-clip.selected {
          outline: 2px solid white;
          outline-offset: 2px;
          opacity: 1;
        }

        .clip-content {
          overflow: hidden;
        }

        .clip-speaker {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.75rem;
          font-weight: 600;
          color: white;
          margin-bottom: 4px;
        }

        .clip-text {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.95);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .clip-indicator {
          position: absolute;
          top: 6px;
          right: 6px;
          color: white;
        }

        .playhead {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 2px;
          background-color: #FF3B30;
          z-index: 50;
          pointer-events: none;
        }

        .playhead::before {
          content: '';
          position: absolute;
          top: -6px;
          left: -5px;
          width: 12px;
          height: 12px;
          background-color: #FF3B30;
          border-radius: 50%;
        }

        /* \u53F3\u4FA7\u5C5E\u6027\u9762\u677F */
        .properties-panel {
          width: 320px;
          background-color: #141920;
          border-left: 1px solid #2A3442;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease;
        }

        .properties-panel:not(.open) {
          width: 0;
          border-left: none;
          overflow: hidden;
        }

        .properties-panel .close-btn {
          background: none;
          border: none;
          color: #94A3B8;
          cursor: pointer;
          padding: 4px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }

        .properties-panel .close-btn:hover {
          background: rgba(255, 255, 255, 0.08);
          color: #E2E8F0;
        }

        .panel-content {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
        }

        .empty-properties {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #64748B;
          gap: 12px;
        }

        .empty-properties p {
          margin: 0;
        }

        .form-group {
          margin-bottom: 18px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          color: #94A3B8;
          font-weight: 500;
          font-size: 0.85rem;
        }

        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 10px 12px;
          background-color: #0F1419;
          border: 1px solid #2A3442;
          border-radius: 8px;
          color: #E2E8F0;
          font-size: 0.9rem;
          transition: all 0.2s ease;
          box-sizing: border-box;
        }

        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
          outline: none;
          border-color: #00A8FF;
          box-shadow: 0 0 0 3px rgba(0, 168, 255, 0.1);
        }

        .form-group textarea {
          min-height: 80px;
          resize: vertical;
          font-family: inherit;
        }

        .label-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .value-badge {
          padding: 2px 8px;
          background-color: rgba(0, 168, 255, 0.15);
          color: #00A8FF;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .form-group input[type="range"] {
          width: 100%;
          padding: 0;
          background: transparent;
          border: none;
          cursor: pointer;
        }

        .form-group input[type="range"]::-webkit-slider-track {
          height: 6px;
          background: #2A3442;
          border-radius: 3px;
        }

        .form-group input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 18px;
          height: 18px;
          background: linear-gradient(135deg, #00A8FF 0%, #0088CC 100%);
          border-radius: 50%;
          cursor: pointer;
          margin-top: -6px;
          box-shadow: 0 2px 8px rgba(0, 168, 255, 0.3);
        }

        .range-labels {
          display: flex;
          justify-content: space-between;
          font-size: 0.78rem;
          color: #64748B;
          margin-top: 4px;
        }

        .action-buttons {
          display: flex;
          gap: 10px;
          margin-bottom: 16px;
          padding-top: 8px;
          border-top: 1px solid #2A3442;
        }

        .btn-generate {
          flex: 1;
          padding: 10px 16px;
          background: linear-gradient(135deg, #10B981 0%, #059669 100%);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          transition: all 0.2s ease;
        }

        .btn-generate:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.35);
        }

        .btn-delete {
          padding: 10px 14px;
          background: rgba(239, 68, 68, 0.15);
          color: #EF4444;
          border: 1px solid rgba(239, 68, 68, 0.3);
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s ease;
        }

        .btn-delete:hover {
          background: rgba(239, 68, 68, 0.25);
        }

        .save-bar {
          display: flex;
          gap: 10px;
          padding-top: 16px;
          border-top: 1px solid #2A3442;
        }

        .save-bar .btn-primary,
        .save-bar .btn-secondary {
          flex: 1;
        }

        /* \u6309\u94AE\u6837\u5F0F */
        .btn-primary,
        .btn-secondary {
          padding: 9px 16px;
          border: none;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .btn-primary {
          background: linear-gradient(135deg, #00A8FF 0%, #0088CC 100%);
          color: white;
          box-shadow: 0 2px 8px rgba(0, 168, 255, 0.25);
        }

        .btn-primary:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 168, 255, 0.35);
        }

        .btn-secondary {
          background: #2A3442;
          color: #E2E8F0;
          border: 1px solid #3A4A5C;
        }

        .btn-secondary:hover:not(:disabled) {
          background: #3A4A5C;
          border-color: #4A5A6C;
        }

        /* \u52A0\u8F7D\u548C\u9519\u8BEF\u72B6\u6001 */
        .loading-container,
        .error-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          color: #CBD5E1;
        }

        .spinner {
          width: 32px;
          height: 32px;
          border: 3px solid #2A3442;
          border-top: 3px solid #00A8FF;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 16px;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .error-container h2 {
          margin: 0 0 20px;
        }
      `})]}):p("div",{className:"chapter-editor",children:v("div",{className:"error-container",children:[p("h2",{children:"\u7AE0\u8282\u4E0D\u5B58\u5728"}),v(yo,{to:`/project/${e}`,className:"btn-primary",children:[p(xo,{size:16}),"\u8FD4\u56DE\u9879\u76EE"]})]})})};function Ph(){return p(A0,{children:p("div",{className:"app",children:v(F0,{children:[p(Hr,{path:"/",element:p(fh,{})}),p(Hr,{path:"/project/:id",element:p(gh,{})}),p(Hr,{path:"/project/:projectId/chapter/:chapterId",element:p(Nh,{})})]})})})}const zh=document.getElementById("root"),Dh=Uc(zh);Dh.render(p(bu.StrictMode,{children:p(Ph,{})}));
