function wp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function kp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var k={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _r=Symbol.for("react.element"),Ep=Symbol.for("react.portal"),Cp=Symbol.for("react.fragment"),Sp=Symbol.for("react.strict_mode"),Fp=Symbol.for("react.profiler"),bp=Symbol.for("react.provider"),Np=Symbol.for("react.context"),Ap=Symbol.for("react.forward_ref"),Pp=Symbol.for("react.suspense"),Dp=Symbol.for("react.memo"),Bp=Symbol.for("react.lazy"),cs=Symbol.iterator;function zp(e){return e===null||typeof e!="object"?null:(e=cs&&e[cs]||e["@@iterator"],typeof e=="function"?e:null)}var Bu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zu=Object.assign,Tu={};function Un(e,t,n){this.props=e,this.context=t,this.refs=Tu,this.updater=n||Bu}Un.prototype.isReactComponent={};Un.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Un.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ju(){}ju.prototype=Un.prototype;function ua(e,t,n){this.props=e,this.context=t,this.refs=Tu,this.updater=n||Bu}var ca=ua.prototype=new ju;ca.constructor=ua;zu(ca,Un.prototype);ca.isPureReactComponent=!0;var ds=Array.isArray,Lu=Object.prototype.hasOwnProperty,da={current:null},_u={key:!0,ref:!0,__self:!0,__source:!0};function Mu(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Lu.call(t,r)&&!_u.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:_r,type:e,key:i,ref:l,props:o,_owner:da.current}}function Tp(e,t){return{$$typeof:_r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function pa(e){return typeof e=="object"&&e!==null&&e.$$typeof===_r}function jp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ps=/\/+/g;function Di(e,t){return typeof e=="object"&&e!==null&&e.key!=null?jp(""+e.key):t.toString(36)}function fo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case _r:case Ep:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Di(l,0):r,ds(o)?(n="",e!=null&&(n=e.replace(ps,"$&/")+"/"),fo(o,t,n,"",function(c){return c})):o!=null&&(pa(o)&&(o=Tp(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(ps,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",ds(e))for(var a=0;a<e.length;a++){i=e[a];var u=r+Di(i,a);l+=fo(i,t,n,u,o)}else if(u=zp(e),typeof u=="function")for(e=u.call(e),a=0;!(i=e.next()).done;)i=i.value,u=r+Di(i,a++),l+=fo(i,t,n,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Qr(e,t,n){if(e==null)return e;var r=[],o=0;return fo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Lp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Fe={current:null},ho={transition:null},_p={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:ho,ReactCurrentOwner:da};function Ru(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:Qr,forEach:function(e,t,n){Qr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Qr(e,function(){t++}),t},toArray:function(e){return Qr(e,function(t){return t})||[]},only:function(e){if(!pa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=Un;U.Fragment=Cp;U.Profiler=Fp;U.PureComponent=ua;U.StrictMode=Sp;U.Suspense=Pp;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_p;U.act=Ru;U.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=zu({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=da.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)Lu.call(t,u)&&!_u.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:_r,type:e.type,key:o,ref:i,props:r,_owner:l}};U.createContext=function(e){return e={$$typeof:Np,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:bp,_context:e},e.Consumer=e};U.createElement=Mu;U.createFactory=function(e){var t=Mu.bind(null,e);return t.type=e,t};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:Ap,render:e}};U.isValidElement=pa;U.lazy=function(e){return{$$typeof:Bp,_payload:{_status:-1,_result:e},_init:Lp}};U.memo=function(e,t){return{$$typeof:Dp,type:e,compare:t===void 0?null:t}};U.startTransition=function(e){var t=ho.transition;ho.transition={};try{e()}finally{ho.transition=t}};U.unstable_act=Ru;U.useCallback=function(e,t){return Fe.current.useCallback(e,t)};U.useContext=function(e){return Fe.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return Fe.current.useDeferredValue(e)};U.useEffect=function(e,t){return Fe.current.useEffect(e,t)};U.useId=function(){return Fe.current.useId()};U.useImperativeHandle=function(e,t,n){return Fe.current.useImperativeHandle(e,t,n)};U.useInsertionEffect=function(e,t){return Fe.current.useInsertionEffect(e,t)};U.useLayoutEffect=function(e,t){return Fe.current.useLayoutEffect(e,t)};U.useMemo=function(e,t){return Fe.current.useMemo(e,t)};U.useReducer=function(e,t,n){return Fe.current.useReducer(e,t,n)};U.useRef=function(e){return Fe.current.useRef(e)};U.useState=function(e){return Fe.current.useState(e)};U.useSyncExternalStore=function(e,t,n){return Fe.current.useSyncExternalStore(e,t,n)};U.useTransition=function(){return Fe.current.useTransition()};U.version="18.3.1";(function(e){e.exports=U})(k);const fa=kp(k.exports),ul=wp({__proto__:null,default:fa},[k.exports]);var Iu={exports:{}},Ie={},Ou={exports:{}},Uu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,I){var x=z.length;z.push(I);e:for(;0<x;){var R=x-1>>>1,T=z[R];if(0<o(T,I))z[R]=I,z[x]=T,x=R;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var I=z[0],x=z.pop();if(x!==I){z[0]=x;e:for(var R=0,T=z.length,Y=T>>>1;R<Y;){var pe=2*(R+1)-1,at=z[pe],st=pe+1,Qe=z[st];if(0>o(at,x))st<T&&0>o(Qe,at)?(z[R]=Qe,z[st]=x,R=st):(z[R]=at,z[pe]=x,R=pe);else if(st<T&&0>o(Qe,x))z[R]=Qe,z[st]=x,R=st;else break e}}return I}function o(z,I){var x=z.sortIndex-I.sortIndex;return x!==0?x:z.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var u=[],c=[],m=1,y=null,g=3,S=!1,C=!1,E=!1,_=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(z){for(var I=n(c);I!==null;){if(I.callback===null)r(c);else if(I.startTime<=z)r(c),I.sortIndex=I.expirationTime,t(u,I);else break;I=n(c)}}function w(z){if(E=!1,p(z),!C)if(n(u)!==null)C=!0,de(F);else{var I=n(c);I!==null&&Ge(w,I.startTime-z)}}function F(z,I){C=!1,E&&(E=!1,f(B),B=-1),S=!0;var x=g;try{for(p(I),y=n(u);y!==null&&(!(y.expirationTime>I)||z&&!le());){var R=y.callback;if(typeof R=="function"){y.callback=null,g=y.priorityLevel;var T=R(y.expirationTime<=I);I=e.unstable_now(),typeof T=="function"?y.callback=T:y===n(u)&&r(u),p(I)}else r(u);y=n(u)}if(y!==null)var Y=!0;else{var pe=n(c);pe!==null&&Ge(w,pe.startTime-I),Y=!1}return Y}finally{y=null,g=x,S=!1}}var P=!1,D=null,B=-1,O=5,M=-1;function le(){return!(e.unstable_now()-M<O)}function oe(){if(D!==null){var z=e.unstable_now();M=z;var I=!0;try{I=D(!0,z)}finally{I?Te():(P=!1,D=null)}}else P=!1}var Te;if(typeof d=="function")Te=function(){d(oe)};else if(typeof MessageChannel<"u"){var kt=new MessageChannel,K=kt.port2;kt.port1.onmessage=oe,Te=function(){K.postMessage(null)}}else Te=function(){_(oe,0)};function de(z){D=z,P||(P=!0,Te())}function Ge(z,I){B=_(function(){z(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){C||S||(C=!0,de(F))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(z){switch(g){case 1:case 2:case 3:var I=3;break;default:I=g}var x=g;g=I;try{return z()}finally{g=x}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,I){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var x=g;g=z;try{return I()}finally{g=x}},e.unstable_scheduleCallback=function(z,I,x){var R=e.unstable_now();switch(typeof x=="object"&&x!==null?(x=x.delay,x=typeof x=="number"&&0<x?R+x:R):x=R,z){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=x+T,z={id:m++,callback:I,priorityLevel:z,startTime:x,expirationTime:T,sortIndex:-1},x>R?(z.sortIndex=x,t(c,z),n(u)===null&&z===n(c)&&(E?(f(B),B=-1):E=!0,Ge(w,x-R))):(z.sortIndex=T,t(u,z),C||S||(C=!0,de(F))),z},e.unstable_shouldYield=le,e.unstable_wrapCallback=function(z){var I=g;return function(){var x=g;g=I;try{return z.apply(this,arguments)}finally{g=x}}}})(Uu);(function(e){e.exports=Uu})(Ou);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp=k.exports,Re=Ou.exports;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $u=new Set,yr={};function an(e,t){jn(e,t),jn(e+"Capture",t)}function jn(e,t){for(yr[e]=t,e=0;e<t.length;e++)$u.add(t[e])}var gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cl=Object.prototype.hasOwnProperty,Rp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fs={},hs={};function Ip(e){return cl.call(hs,e)?!0:cl.call(fs,e)?!1:Rp.test(e)?hs[e]=!0:(fs[e]=!0,!1)}function Op(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Up(e,t,n,r){if(t===null||typeof t>"u"||Op(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function be(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ye[e]=new be(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ye[t]=new be(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ye[e]=new be(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ye[e]=new be(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ye[e]=new be(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ye[e]=new be(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ye[e]=new be(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ye[e]=new be(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ye[e]=new be(e,5,!1,e.toLowerCase(),null,!1,!1)});var ha=/[\-:]([a-z])/g;function ma(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ha,ma);ye[t]=new be(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ha,ma);ye[t]=new be(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ha,ma);ye[t]=new be(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ye[e]=new be(e,1,!1,e.toLowerCase(),null,!1,!1)});ye.xlinkHref=new be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ye[e]=new be(e,1,!1,e.toLowerCase(),null,!0,!0)});function ga(e,t,n,r){var o=ye.hasOwnProperty(t)?ye[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Up(t,n,o,r)&&(n=null),r||o===null?Ip(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var wt=Mp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yr=Symbol.for("react.element"),gn=Symbol.for("react.portal"),yn=Symbol.for("react.fragment"),ya=Symbol.for("react.strict_mode"),dl=Symbol.for("react.profiler"),Vu=Symbol.for("react.provider"),Ku=Symbol.for("react.context"),va=Symbol.for("react.forward_ref"),pl=Symbol.for("react.suspense"),fl=Symbol.for("react.suspense_list"),xa=Symbol.for("react.memo"),Ft=Symbol.for("react.lazy"),Wu=Symbol.for("react.offscreen"),ms=Symbol.iterator;function Qn(e){return e===null||typeof e!="object"?null:(e=ms&&e[ms]||e["@@iterator"],typeof e=="function"?e:null)}var ne=Object.assign,Bi;function rr(e){if(Bi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Bi=t&&t[1]||""}return`
`+Bi+e}var zi=!1;function Ti(e,t){if(!e||zi)return"";zi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var u=`
`+o[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=a);break}}}finally{zi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?rr(e):""}function $p(e){switch(e.tag){case 5:return rr(e.type);case 16:return rr("Lazy");case 13:return rr("Suspense");case 19:return rr("SuspenseList");case 0:case 2:case 15:return e=Ti(e.type,!1),e;case 11:return e=Ti(e.type.render,!1),e;case 1:return e=Ti(e.type,!0),e;default:return""}}function hl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case yn:return"Fragment";case gn:return"Portal";case dl:return"Profiler";case ya:return"StrictMode";case pl:return"Suspense";case fl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ku:return(e.displayName||"Context")+".Consumer";case Vu:return(e._context.displayName||"Context")+".Provider";case va:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xa:return t=e.displayName||null,t!==null?t:hl(e.type)||"Memo";case Ft:t=e._payload,e=e._init;try{return hl(e(t))}catch{}}return null}function Vp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hl(t);case 8:return t===ya?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ut(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Hu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Kp(e){var t=Hu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xr(e){e._valueTracker||(e._valueTracker=Kp(e))}function Gu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Hu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function bo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ml(e,t){var n=t.checked;return ne({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function gs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ut(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Qu(e,t){t=t.checked,t!=null&&ga(e,"checked",t,!1)}function gl(e,t){Qu(e,t);var n=Ut(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?yl(e,t.type,n):t.hasOwnProperty("defaultValue")&&yl(e,t.type,Ut(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ys(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function yl(e,t,n){(t!=="number"||bo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var or=Array.isArray;function An(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ut(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function vl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(b(91));return ne({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function vs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(b(92));if(or(n)){if(1<n.length)throw Error(b(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ut(n)}}function Yu(e,t){var n=Ut(t.value),r=Ut(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function xs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Xu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Xu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Zr,Zu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Zr=Zr||document.createElement("div"),Zr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Zr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function vr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ar={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wp=["Webkit","ms","Moz","O"];Object.keys(ar).forEach(function(e){Wp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ar[t]=ar[e]})});function Ju(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ar.hasOwnProperty(e)&&ar[e]?(""+t).trim():t+"px"}function qu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Ju(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Hp=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wl(e,t){if(t){if(Hp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(b(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(b(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(b(61))}if(t.style!=null&&typeof t.style!="object")throw Error(b(62))}}function kl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var El=null;function wa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Cl=null,Pn=null,Dn=null;function ws(e){if(e=Ir(e)){if(typeof Cl!="function")throw Error(b(280));var t=e.stateNode;t&&(t=ni(t),Cl(e.stateNode,e.type,t))}}function ec(e){Pn?Dn?Dn.push(e):Dn=[e]:Pn=e}function tc(){if(Pn){var e=Pn,t=Dn;if(Dn=Pn=null,ws(e),t)for(e=0;e<t.length;e++)ws(t[e])}}function nc(e,t){return e(t)}function rc(){}var ji=!1;function oc(e,t,n){if(ji)return e(t,n);ji=!0;try{return nc(e,t,n)}finally{ji=!1,(Pn!==null||Dn!==null)&&(rc(),tc())}}function xr(e,t){var n=e.stateNode;if(n===null)return null;var r=ni(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(b(231,t,typeof n));return n}var Sl=!1;if(gt)try{var Yn={};Object.defineProperty(Yn,"passive",{get:function(){Sl=!0}}),window.addEventListener("test",Yn,Yn),window.removeEventListener("test",Yn,Yn)}catch{Sl=!1}function Gp(e,t,n,r,o,i,l,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var sr=!1,No=null,Ao=!1,Fl=null,Qp={onError:function(e){sr=!0,No=e}};function Yp(e,t,n,r,o,i,l,a,u){sr=!1,No=null,Gp.apply(Qp,arguments)}function Xp(e,t,n,r,o,i,l,a,u){if(Yp.apply(this,arguments),sr){if(sr){var c=No;sr=!1,No=null}else throw Error(b(198));Ao||(Ao=!0,Fl=c)}}function sn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ic(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ks(e){if(sn(e)!==e)throw Error(b(188))}function Zp(e){var t=e.alternate;if(!t){if(t=sn(e),t===null)throw Error(b(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return ks(o),e;if(i===r)return ks(o),t;i=i.sibling}throw Error(b(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?e:t}function lc(e){return e=Zp(e),e!==null?ac(e):null}function ac(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ac(e);if(t!==null)return t;e=e.sibling}return null}var sc=Re.unstable_scheduleCallback,Es=Re.unstable_cancelCallback,Jp=Re.unstable_shouldYield,qp=Re.unstable_requestPaint,ie=Re.unstable_now,ef=Re.unstable_getCurrentPriorityLevel,ka=Re.unstable_ImmediatePriority,uc=Re.unstable_UserBlockingPriority,Po=Re.unstable_NormalPriority,tf=Re.unstable_LowPriority,cc=Re.unstable_IdlePriority,Jo=null,it=null;function nf(e){if(it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot(Jo,e,void 0,(e.current.flags&128)===128)}catch{}}var qe=Math.clz32?Math.clz32:lf,rf=Math.log,of=Math.LN2;function lf(e){return e>>>=0,e===0?32:31-(rf(e)/of|0)|0}var Jr=64,qr=4194304;function ir(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Do(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=ir(a):(i&=l,i!==0&&(r=ir(i)))}else l=n&~o,l!==0?r=ir(l):i!==0&&(r=ir(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-qe(t),o=1<<n,r|=e[n],t&=~o;return r}function af(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-qe(i),a=1<<l,u=o[l];u===-1?((a&n)===0||(a&r)!==0)&&(o[l]=af(a,t)):u<=t&&(e.expiredLanes|=a),i&=~a}}function bl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function dc(){var e=Jr;return Jr<<=1,(Jr&4194240)===0&&(Jr=64),e}function Li(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Mr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-qe(t),e[t]=n}function uf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-qe(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Ea(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-qe(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var G=0;function pc(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var fc,Ca,hc,mc,gc,Nl=!1,eo=[],zt=null,Tt=null,jt=null,wr=new Map,kr=new Map,Nt=[],cf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cs(e,t){switch(e){case"focusin":case"focusout":zt=null;break;case"dragenter":case"dragleave":Tt=null;break;case"mouseover":case"mouseout":jt=null;break;case"pointerover":case"pointerout":wr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":kr.delete(t.pointerId)}}function Xn(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Ir(t),t!==null&&Ca(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function df(e,t,n,r,o){switch(t){case"focusin":return zt=Xn(zt,e,t,n,r,o),!0;case"dragenter":return Tt=Xn(Tt,e,t,n,r,o),!0;case"mouseover":return jt=Xn(jt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return wr.set(i,Xn(wr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,kr.set(i,Xn(kr.get(i)||null,e,t,n,r,o)),!0}return!1}function yc(e){var t=Xt(e.target);if(t!==null){var n=sn(t);if(n!==null){if(t=n.tag,t===13){if(t=ic(n),t!==null){e.blockedOn=t,gc(e.priority,function(){hc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Al(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);El=r,n.target.dispatchEvent(r),El=null}else return t=Ir(n),t!==null&&Ca(t),e.blockedOn=n,!1;t.shift()}return!0}function Ss(e,t,n){mo(e)&&n.delete(t)}function pf(){Nl=!1,zt!==null&&mo(zt)&&(zt=null),Tt!==null&&mo(Tt)&&(Tt=null),jt!==null&&mo(jt)&&(jt=null),wr.forEach(Ss),kr.forEach(Ss)}function Zn(e,t){e.blockedOn===t&&(e.blockedOn=null,Nl||(Nl=!0,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,pf)))}function Er(e){function t(o){return Zn(o,e)}if(0<eo.length){Zn(eo[0],e);for(var n=1;n<eo.length;n++){var r=eo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(zt!==null&&Zn(zt,e),Tt!==null&&Zn(Tt,e),jt!==null&&Zn(jt,e),wr.forEach(t),kr.forEach(t),n=0;n<Nt.length;n++)r=Nt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Nt.length&&(n=Nt[0],n.blockedOn===null);)yc(n),n.blockedOn===null&&Nt.shift()}var Bn=wt.ReactCurrentBatchConfig,Bo=!0;function ff(e,t,n,r){var o=G,i=Bn.transition;Bn.transition=null;try{G=1,Sa(e,t,n,r)}finally{G=o,Bn.transition=i}}function hf(e,t,n,r){var o=G,i=Bn.transition;Bn.transition=null;try{G=4,Sa(e,t,n,r)}finally{G=o,Bn.transition=i}}function Sa(e,t,n,r){if(Bo){var o=Al(e,t,n,r);if(o===null)Wi(e,t,r,zo,n),Cs(e,r);else if(df(o,e,t,n,r))r.stopPropagation();else if(Cs(e,r),t&4&&-1<cf.indexOf(e)){for(;o!==null;){var i=Ir(o);if(i!==null&&fc(i),i=Al(e,t,n,r),i===null&&Wi(e,t,r,zo,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Wi(e,t,r,null,n)}}var zo=null;function Al(e,t,n,r){if(zo=null,e=wa(r),e=Xt(e),e!==null)if(t=sn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ic(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return zo=e,null}function vc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ef()){case ka:return 1;case uc:return 4;case Po:case tf:return 16;case cc:return 536870912;default:return 16}default:return 16}}var Pt=null,Fa=null,go=null;function xc(){if(go)return go;var e,t=Fa,n=t.length,r,o="value"in Pt?Pt.value:Pt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return go=o.slice(e,1<r?1-r:void 0)}function yo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function to(){return!0}function Fs(){return!1}function Oe(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?to:Fs,this.isPropagationStopped=Fs,this}return ne(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=to)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=to)},persist:function(){},isPersistent:to}),t}var $n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ba=Oe($n),Rr=ne({},$n,{view:0,detail:0}),mf=Oe(Rr),_i,Mi,Jn,qo=ne({},Rr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Na,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jn&&(Jn&&e.type==="mousemove"?(_i=e.screenX-Jn.screenX,Mi=e.screenY-Jn.screenY):Mi=_i=0,Jn=e),_i)},movementY:function(e){return"movementY"in e?e.movementY:Mi}}),bs=Oe(qo),gf=ne({},qo,{dataTransfer:0}),yf=Oe(gf),vf=ne({},Rr,{relatedTarget:0}),Ri=Oe(vf),xf=ne({},$n,{animationName:0,elapsedTime:0,pseudoElement:0}),wf=Oe(xf),kf=ne({},$n,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ef=Oe(kf),Cf=ne({},$n,{data:0}),Ns=Oe(Cf),Sf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ff={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=bf[e])?!!t[e]:!1}function Na(){return Nf}var Af=ne({},Rr,{key:function(e){if(e.key){var t=Sf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=yo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ff[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Na,charCode:function(e){return e.type==="keypress"?yo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Pf=Oe(Af),Df=ne({},qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),As=Oe(Df),Bf=ne({},Rr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Na}),zf=Oe(Bf),Tf=ne({},$n,{propertyName:0,elapsedTime:0,pseudoElement:0}),jf=Oe(Tf),Lf=ne({},qo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_f=Oe(Lf),Mf=[9,13,27,32],Aa=gt&&"CompositionEvent"in window,ur=null;gt&&"documentMode"in document&&(ur=document.documentMode);var Rf=gt&&"TextEvent"in window&&!ur,wc=gt&&(!Aa||ur&&8<ur&&11>=ur),Ps=String.fromCharCode(32),Ds=!1;function kc(e,t){switch(e){case"keyup":return Mf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ec(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var vn=!1;function If(e,t){switch(e){case"compositionend":return Ec(t);case"keypress":return t.which!==32?null:(Ds=!0,Ps);case"textInput":return e=t.data,e===Ps&&Ds?null:e;default:return null}}function Of(e,t){if(vn)return e==="compositionend"||!Aa&&kc(e,t)?(e=xc(),go=Fa=Pt=null,vn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wc&&t.locale!=="ko"?null:t.data;default:return null}}var Uf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Uf[e.type]:t==="textarea"}function Cc(e,t,n,r){ec(r),t=To(t,"onChange"),0<t.length&&(n=new ba("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var cr=null,Cr=null;function $f(e){jc(e,0)}function ei(e){var t=kn(e);if(Gu(t))return e}function Vf(e,t){if(e==="change")return t}var Sc=!1;if(gt){var Ii;if(gt){var Oi="oninput"in document;if(!Oi){var zs=document.createElement("div");zs.setAttribute("oninput","return;"),Oi=typeof zs.oninput=="function"}Ii=Oi}else Ii=!1;Sc=Ii&&(!document.documentMode||9<document.documentMode)}function Ts(){cr&&(cr.detachEvent("onpropertychange",Fc),Cr=cr=null)}function Fc(e){if(e.propertyName==="value"&&ei(Cr)){var t=[];Cc(t,Cr,e,wa(e)),oc($f,t)}}function Kf(e,t,n){e==="focusin"?(Ts(),cr=t,Cr=n,cr.attachEvent("onpropertychange",Fc)):e==="focusout"&&Ts()}function Wf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ei(Cr)}function Hf(e,t){if(e==="click")return ei(t)}function Gf(e,t){if(e==="input"||e==="change")return ei(t)}function Qf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var tt=typeof Object.is=="function"?Object.is:Qf;function Sr(e,t){if(tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!cl.call(t,o)||!tt(e[o],t[o]))return!1}return!0}function js(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ls(e,t){var n=js(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=js(n)}}function bc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?bc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Nc(){for(var e=window,t=bo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=bo(e.document)}return t}function Pa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Yf(e){var t=Nc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&bc(n.ownerDocument.documentElement,n)){if(r!==null&&Pa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Ls(n,i);var l=Ls(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Xf=gt&&"documentMode"in document&&11>=document.documentMode,xn=null,Pl=null,dr=null,Dl=!1;function _s(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Dl||xn==null||xn!==bo(r)||(r=xn,"selectionStart"in r&&Pa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),dr&&Sr(dr,r)||(dr=r,r=To(Pl,"onSelect"),0<r.length&&(t=new ba("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=xn)))}function no(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var wn={animationend:no("Animation","AnimationEnd"),animationiteration:no("Animation","AnimationIteration"),animationstart:no("Animation","AnimationStart"),transitionend:no("Transition","TransitionEnd")},Ui={},Ac={};gt&&(Ac=document.createElement("div").style,"AnimationEvent"in window||(delete wn.animationend.animation,delete wn.animationiteration.animation,delete wn.animationstart.animation),"TransitionEvent"in window||delete wn.transitionend.transition);function ti(e){if(Ui[e])return Ui[e];if(!wn[e])return e;var t=wn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ac)return Ui[e]=t[n];return e}var Pc=ti("animationend"),Dc=ti("animationiteration"),Bc=ti("animationstart"),zc=ti("transitionend"),Tc=new Map,Ms="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kt(e,t){Tc.set(e,t),an(t,[e])}for(var $i=0;$i<Ms.length;$i++){var Vi=Ms[$i],Zf=Vi.toLowerCase(),Jf=Vi[0].toUpperCase()+Vi.slice(1);Kt(Zf,"on"+Jf)}Kt(Pc,"onAnimationEnd");Kt(Dc,"onAnimationIteration");Kt(Bc,"onAnimationStart");Kt("dblclick","onDoubleClick");Kt("focusin","onFocus");Kt("focusout","onBlur");Kt(zc,"onTransitionEnd");jn("onMouseEnter",["mouseout","mouseover"]);jn("onMouseLeave",["mouseout","mouseover"]);jn("onPointerEnter",["pointerout","pointerover"]);jn("onPointerLeave",["pointerout","pointerover"]);an("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));an("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));an("onBeforeInput",["compositionend","keypress","textInput","paste"]);an("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));an("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));an("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qf=new Set("cancel close invalid load scroll toggle".split(" ").concat(lr));function Rs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Xp(r,t,void 0,e),e.currentTarget=null}function jc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==i&&o.isPropagationStopped())break e;Rs(o,a,c),i=u}else for(l=0;l<r.length;l++){if(a=r[l],u=a.instance,c=a.currentTarget,a=a.listener,u!==i&&o.isPropagationStopped())break e;Rs(o,a,c),i=u}}}if(Ao)throw e=Fl,Ao=!1,Fl=null,e}function Z(e,t){var n=t[Ll];n===void 0&&(n=t[Ll]=new Set);var r=e+"__bubble";n.has(r)||(Lc(t,e,2,!1),n.add(r))}function Ki(e,t,n){var r=0;t&&(r|=4),Lc(n,e,r,t)}var ro="_reactListening"+Math.random().toString(36).slice(2);function Fr(e){if(!e[ro]){e[ro]=!0,$u.forEach(function(n){n!=="selectionchange"&&(qf.has(n)||Ki(n,!1,e),Ki(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ro]||(t[ro]=!0,Ki("selectionchange",!1,t))}}function Lc(e,t,n,r){switch(vc(t)){case 1:var o=ff;break;case 4:o=hf;break;default:o=Sa}n=o.bind(null,t,n,e),o=void 0,!Sl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Wi(e,t,n,r,o){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;l=l.return}for(;a!==null;){if(l=Xt(a),l===null)return;if(u=l.tag,u===5||u===6){r=i=l;continue e}a=a.parentNode}}r=r.return}oc(function(){var c=i,m=wa(n),y=[];e:{var g=Tc.get(e);if(g!==void 0){var S=ba,C=e;switch(e){case"keypress":if(yo(n)===0)break e;case"keydown":case"keyup":S=Pf;break;case"focusin":C="focus",S=Ri;break;case"focusout":C="blur",S=Ri;break;case"beforeblur":case"afterblur":S=Ri;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=bs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=yf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=zf;break;case Pc:case Dc:case Bc:S=wf;break;case zc:S=jf;break;case"scroll":S=mf;break;case"wheel":S=_f;break;case"copy":case"cut":case"paste":S=Ef;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=As}var E=(t&4)!==0,_=!E&&e==="scroll",f=E?g!==null?g+"Capture":null:g;E=[];for(var d=c,p;d!==null;){p=d;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,f!==null&&(w=xr(d,f),w!=null&&E.push(br(d,w,p)))),_)break;d=d.return}0<E.length&&(g=new S(g,C,null,n,m),y.push({event:g,listeners:E}))}}if((t&7)===0){e:{if(g=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",g&&n!==El&&(C=n.relatedTarget||n.fromElement)&&(Xt(C)||C[yt]))break e;if((S||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,S?(C=n.relatedTarget||n.toElement,S=c,C=C?Xt(C):null,C!==null&&(_=sn(C),C!==_||C.tag!==5&&C.tag!==6)&&(C=null)):(S=null,C=c),S!==C)){if(E=bs,w="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(E=As,w="onPointerLeave",f="onPointerEnter",d="pointer"),_=S==null?g:kn(S),p=C==null?g:kn(C),g=new E(w,d+"leave",S,n,m),g.target=_,g.relatedTarget=p,w=null,Xt(m)===c&&(E=new E(f,d+"enter",C,n,m),E.target=p,E.relatedTarget=_,w=E),_=w,S&&C)t:{for(E=S,f=C,d=0,p=E;p;p=hn(p))d++;for(p=0,w=f;w;w=hn(w))p++;for(;0<d-p;)E=hn(E),d--;for(;0<p-d;)f=hn(f),p--;for(;d--;){if(E===f||f!==null&&E===f.alternate)break t;E=hn(E),f=hn(f)}E=null}else E=null;S!==null&&Is(y,g,S,E,!1),C!==null&&_!==null&&Is(y,_,C,E,!0)}}e:{if(g=c?kn(c):window,S=g.nodeName&&g.nodeName.toLowerCase(),S==="select"||S==="input"&&g.type==="file")var F=Vf;else if(Bs(g))if(Sc)F=Gf;else{F=Wf;var P=Kf}else(S=g.nodeName)&&S.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(F=Hf);if(F&&(F=F(e,c))){Cc(y,F,n,m);break e}P&&P(e,g,c),e==="focusout"&&(P=g._wrapperState)&&P.controlled&&g.type==="number"&&yl(g,"number",g.value)}switch(P=c?kn(c):window,e){case"focusin":(Bs(P)||P.contentEditable==="true")&&(xn=P,Pl=c,dr=null);break;case"focusout":dr=Pl=xn=null;break;case"mousedown":Dl=!0;break;case"contextmenu":case"mouseup":case"dragend":Dl=!1,_s(y,n,m);break;case"selectionchange":if(Xf)break;case"keydown":case"keyup":_s(y,n,m)}var D;if(Aa)e:{switch(e){case"compositionstart":var B="onCompositionStart";break e;case"compositionend":B="onCompositionEnd";break e;case"compositionupdate":B="onCompositionUpdate";break e}B=void 0}else vn?kc(e,n)&&(B="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(B="onCompositionStart");B&&(wc&&n.locale!=="ko"&&(vn||B!=="onCompositionStart"?B==="onCompositionEnd"&&vn&&(D=xc()):(Pt=m,Fa="value"in Pt?Pt.value:Pt.textContent,vn=!0)),P=To(c,B),0<P.length&&(B=new Ns(B,e,null,n,m),y.push({event:B,listeners:P}),D?B.data=D:(D=Ec(n),D!==null&&(B.data=D)))),(D=Rf?If(e,n):Of(e,n))&&(c=To(c,"onBeforeInput"),0<c.length&&(m=new Ns("onBeforeInput","beforeinput",null,n,m),y.push({event:m,listeners:c}),m.data=D))}jc(y,t)})}function br(e,t,n){return{instance:e,listener:t,currentTarget:n}}function To(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=xr(e,n),i!=null&&r.unshift(br(e,i,o)),i=xr(e,t),i!=null&&r.push(br(e,i,o))),e=e.return}return r}function hn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Is(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,o?(u=xr(n,i),u!=null&&l.unshift(br(n,u,a))):o||(u=xr(n,i),u!=null&&l.push(br(n,u,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var e0=/\r\n?/g,t0=/\u0000|\uFFFD/g;function Os(e){return(typeof e=="string"?e:""+e).replace(e0,`
`).replace(t0,"")}function oo(e,t,n){if(t=Os(t),Os(e)!==t&&n)throw Error(b(425))}function jo(){}var Bl=null,zl=null;function Tl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var jl=typeof setTimeout=="function"?setTimeout:void 0,n0=typeof clearTimeout=="function"?clearTimeout:void 0,Us=typeof Promise=="function"?Promise:void 0,r0=typeof queueMicrotask=="function"?queueMicrotask:typeof Us<"u"?function(e){return Us.resolve(null).then(e).catch(o0)}:jl;function o0(e){setTimeout(function(){throw e})}function Hi(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Er(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Er(t)}function Lt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function $s(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Vn=Math.random().toString(36).slice(2),ot="__reactFiber$"+Vn,Nr="__reactProps$"+Vn,yt="__reactContainer$"+Vn,Ll="__reactEvents$"+Vn,i0="__reactListeners$"+Vn,l0="__reactHandles$"+Vn;function Xt(e){var t=e[ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[yt]||n[ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=$s(e);e!==null;){if(n=e[ot])return n;e=$s(e)}return t}e=n,n=e.parentNode}return null}function Ir(e){return e=e[ot]||e[yt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function kn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(b(33))}function ni(e){return e[Nr]||null}var _l=[],En=-1;function Wt(e){return{current:e}}function J(e){0>En||(e.current=_l[En],_l[En]=null,En--)}function X(e,t){En++,_l[En]=e.current,e.current=t}var $t={},ke=Wt($t),De=Wt(!1),tn=$t;function Ln(e,t){var n=e.type.contextTypes;if(!n)return $t;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Be(e){return e=e.childContextTypes,e!=null}function Lo(){J(De),J(ke)}function Vs(e,t,n){if(ke.current!==$t)throw Error(b(168));X(ke,t),X(De,n)}function _c(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(b(108,Vp(e)||"Unknown",o));return ne({},n,r)}function _o(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$t,tn=ke.current,X(ke,e),X(De,De.current),!0}function Ks(e,t,n){var r=e.stateNode;if(!r)throw Error(b(169));n?(e=_c(e,t,tn),r.__reactInternalMemoizedMergedChildContext=e,J(De),J(ke),X(ke,e)):J(De),X(De,n)}var pt=null,ri=!1,Gi=!1;function Mc(e){pt===null?pt=[e]:pt.push(e)}function a0(e){ri=!0,Mc(e)}function Ht(){if(!Gi&&pt!==null){Gi=!0;var e=0,t=G;try{var n=pt;for(G=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}pt=null,ri=!1}catch(o){throw pt!==null&&(pt=pt.slice(e+1)),sc(ka,Ht),o}finally{G=t,Gi=!1}}return null}var Cn=[],Sn=0,Mo=null,Ro=0,Ue=[],$e=0,nn=null,ft=1,ht="";function Qt(e,t){Cn[Sn++]=Ro,Cn[Sn++]=Mo,Mo=e,Ro=t}function Rc(e,t,n){Ue[$e++]=ft,Ue[$e++]=ht,Ue[$e++]=nn,nn=e;var r=ft;e=ht;var o=32-qe(r)-1;r&=~(1<<o),n+=1;var i=32-qe(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,ft=1<<32-qe(t)+o|n<<o|r,ht=i+e}else ft=1<<i|n<<o|r,ht=e}function Da(e){e.return!==null&&(Qt(e,1),Rc(e,1,0))}function Ba(e){for(;e===Mo;)Mo=Cn[--Sn],Cn[Sn]=null,Ro=Cn[--Sn],Cn[Sn]=null;for(;e===nn;)nn=Ue[--$e],Ue[$e]=null,ht=Ue[--$e],Ue[$e]=null,ft=Ue[--$e],Ue[$e]=null}var Me=null,_e=null,q=!1,Je=null;function Ic(e,t){var n=Ve(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ws(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Me=e,_e=Lt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Me=e,_e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=nn!==null?{id:ft,overflow:ht}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ve(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Me=e,_e=null,!0):!1;default:return!1}}function Ml(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Rl(e){if(q){var t=_e;if(t){var n=t;if(!Ws(e,t)){if(Ml(e))throw Error(b(418));t=Lt(n.nextSibling);var r=Me;t&&Ws(e,t)?Ic(r,n):(e.flags=e.flags&-4097|2,q=!1,Me=e)}}else{if(Ml(e))throw Error(b(418));e.flags=e.flags&-4097|2,q=!1,Me=e}}}function Hs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Me=e}function io(e){if(e!==Me)return!1;if(!q)return Hs(e),q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Tl(e.type,e.memoizedProps)),t&&(t=_e)){if(Ml(e))throw Oc(),Error(b(418));for(;t;)Ic(e,t),t=Lt(t.nextSibling)}if(Hs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(b(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){_e=Lt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}_e=null}}else _e=Me?Lt(e.stateNode.nextSibling):null;return!0}function Oc(){for(var e=_e;e;)e=Lt(e.nextSibling)}function _n(){_e=Me=null,q=!1}function za(e){Je===null?Je=[e]:Je.push(e)}var s0=wt.ReactCurrentBatchConfig;function qn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,e))}return e}function lo(e,t){throw e=Object.prototype.toString.call(t),Error(b(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Gs(e){var t=e._init;return t(e._payload)}function Uc(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function o(f,d){return f=It(f,d),f.index=0,f.sibling=null,f}function i(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,d,p,w){return d===null||d.tag!==6?(d=el(p,f.mode,w),d.return=f,d):(d=o(d,p),d.return=f,d)}function u(f,d,p,w){var F=p.type;return F===yn?m(f,d,p.props.children,w,p.key):d!==null&&(d.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Ft&&Gs(F)===d.type)?(w=o(d,p.props),w.ref=qn(f,d,p),w.return=f,w):(w=So(p.type,p.key,p.props,null,f.mode,w),w.ref=qn(f,d,p),w.return=f,w)}function c(f,d,p,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=tl(p,f.mode,w),d.return=f,d):(d=o(d,p.children||[]),d.return=f,d)}function m(f,d,p,w,F){return d===null||d.tag!==7?(d=en(p,f.mode,w,F),d.return=f,d):(d=o(d,p),d.return=f,d)}function y(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=el(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Yr:return p=So(d.type,d.key,d.props,null,f.mode,p),p.ref=qn(f,null,d),p.return=f,p;case gn:return d=tl(d,f.mode,p),d.return=f,d;case Ft:var w=d._init;return y(f,w(d._payload),p)}if(or(d)||Qn(d))return d=en(d,f.mode,p,null),d.return=f,d;lo(f,d)}return null}function g(f,d,p,w){var F=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return F!==null?null:a(f,d,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Yr:return p.key===F?u(f,d,p,w):null;case gn:return p.key===F?c(f,d,p,w):null;case Ft:return F=p._init,g(f,d,F(p._payload),w)}if(or(p)||Qn(p))return F!==null?null:m(f,d,p,w,null);lo(f,p)}return null}function S(f,d,p,w,F){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(p)||null,a(d,f,""+w,F);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Yr:return f=f.get(w.key===null?p:w.key)||null,u(d,f,w,F);case gn:return f=f.get(w.key===null?p:w.key)||null,c(d,f,w,F);case Ft:var P=w._init;return S(f,d,p,P(w._payload),F)}if(or(w)||Qn(w))return f=f.get(p)||null,m(d,f,w,F,null);lo(d,w)}return null}function C(f,d,p,w){for(var F=null,P=null,D=d,B=d=0,O=null;D!==null&&B<p.length;B++){D.index>B?(O=D,D=null):O=D.sibling;var M=g(f,D,p[B],w);if(M===null){D===null&&(D=O);break}e&&D&&M.alternate===null&&t(f,D),d=i(M,d,B),P===null?F=M:P.sibling=M,P=M,D=O}if(B===p.length)return n(f,D),q&&Qt(f,B),F;if(D===null){for(;B<p.length;B++)D=y(f,p[B],w),D!==null&&(d=i(D,d,B),P===null?F=D:P.sibling=D,P=D);return q&&Qt(f,B),F}for(D=r(f,D);B<p.length;B++)O=S(D,f,B,p[B],w),O!==null&&(e&&O.alternate!==null&&D.delete(O.key===null?B:O.key),d=i(O,d,B),P===null?F=O:P.sibling=O,P=O);return e&&D.forEach(function(le){return t(f,le)}),q&&Qt(f,B),F}function E(f,d,p,w){var F=Qn(p);if(typeof F!="function")throw Error(b(150));if(p=F.call(p),p==null)throw Error(b(151));for(var P=F=null,D=d,B=d=0,O=null,M=p.next();D!==null&&!M.done;B++,M=p.next()){D.index>B?(O=D,D=null):O=D.sibling;var le=g(f,D,M.value,w);if(le===null){D===null&&(D=O);break}e&&D&&le.alternate===null&&t(f,D),d=i(le,d,B),P===null?F=le:P.sibling=le,P=le,D=O}if(M.done)return n(f,D),q&&Qt(f,B),F;if(D===null){for(;!M.done;B++,M=p.next())M=y(f,M.value,w),M!==null&&(d=i(M,d,B),P===null?F=M:P.sibling=M,P=M);return q&&Qt(f,B),F}for(D=r(f,D);!M.done;B++,M=p.next())M=S(D,f,B,M.value,w),M!==null&&(e&&M.alternate!==null&&D.delete(M.key===null?B:M.key),d=i(M,d,B),P===null?F=M:P.sibling=M,P=M);return e&&D.forEach(function(oe){return t(f,oe)}),q&&Qt(f,B),F}function _(f,d,p,w){if(typeof p=="object"&&p!==null&&p.type===yn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Yr:e:{for(var F=p.key,P=d;P!==null;){if(P.key===F){if(F=p.type,F===yn){if(P.tag===7){n(f,P.sibling),d=o(P,p.props.children),d.return=f,f=d;break e}}else if(P.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Ft&&Gs(F)===P.type){n(f,P.sibling),d=o(P,p.props),d.ref=qn(f,P,p),d.return=f,f=d;break e}n(f,P);break}else t(f,P);P=P.sibling}p.type===yn?(d=en(p.props.children,f.mode,w,p.key),d.return=f,f=d):(w=So(p.type,p.key,p.props,null,f.mode,w),w.ref=qn(f,d,p),w.return=f,f=w)}return l(f);case gn:e:{for(P=p.key;d!==null;){if(d.key===P)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(f,d.sibling),d=o(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=tl(p,f.mode,w),d.return=f,f=d}return l(f);case Ft:return P=p._init,_(f,d,P(p._payload),w)}if(or(p))return C(f,d,p,w);if(Qn(p))return E(f,d,p,w);lo(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(f,d.sibling),d=o(d,p),d.return=f,f=d):(n(f,d),d=el(p,f.mode,w),d.return=f,f=d),l(f)):n(f,d)}return _}var Mn=Uc(!0),$c=Uc(!1),Io=Wt(null),Oo=null,Fn=null,Ta=null;function ja(){Ta=Fn=Oo=null}function La(e){var t=Io.current;J(Io),e._currentValue=t}function Il(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function zn(e,t){Oo=e,Ta=Fn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Pe=!0),e.firstContext=null)}function We(e){var t=e._currentValue;if(Ta!==e)if(e={context:e,memoizedValue:t,next:null},Fn===null){if(Oo===null)throw Error(b(308));Fn=e,Oo.dependencies={lanes:0,firstContext:e}}else Fn=Fn.next=e;return t}var Zt=null;function _a(e){Zt===null?Zt=[e]:Zt.push(e)}function Vc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,_a(t)):(n.next=o.next,o.next=n),t.interleaved=n,vt(e,r)}function vt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var bt=!1;function Ma(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function _t(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(V&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,vt(e,n)}return o=r.interleaved,o===null?(t.next=t,_a(r)):(t.next=o.next,o.next=t),r.interleaved=t,vt(e,n)}function vo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ea(e,n)}}function Qs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Uo(e,t,n,r){var o=e.updateQueue;bt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var u=a,c=u.next;u.next=null,l===null?i=c:l.next=c,l=u;var m=e.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==l&&(a===null?m.firstBaseUpdate=c:a.next=c,m.lastBaseUpdate=u))}if(i!==null){var y=o.baseState;l=0,m=c=u=null,a=i;do{var g=a.lane,S=a.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:S,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var C=e,E=a;switch(g=t,S=n,E.tag){case 1:if(C=E.payload,typeof C=="function"){y=C.call(S,y,g);break e}y=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=E.payload,g=typeof C=="function"?C.call(S,y,g):C,g==null)break e;y=ne({},y,g);break e;case 2:bt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[a]:g.push(a))}else S={eventTime:S,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(c=m=S,u=y):m=m.next=S,l|=g;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;g=a,a=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(1);if(m===null&&(u=y),o.baseState=u,o.firstBaseUpdate=c,o.lastBaseUpdate=m,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);on|=l,e.lanes=l,e.memoizedState=y}}function Ys(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(b(191,o));o.call(r)}}}var Or={},lt=Wt(Or),Ar=Wt(Or),Pr=Wt(Or);function Jt(e){if(e===Or)throw Error(b(174));return e}function Ra(e,t){switch(X(Pr,t),X(Ar,e),X(lt,Or),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:xl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=xl(t,e)}J(lt),X(lt,t)}function Rn(){J(lt),J(Ar),J(Pr)}function Wc(e){Jt(Pr.current);var t=Jt(lt.current),n=xl(t,e.type);t!==n&&(X(Ar,e),X(lt,n))}function Ia(e){Ar.current===e&&(J(lt),J(Ar))}var ee=Wt(0);function $o(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Qi=[];function Oa(){for(var e=0;e<Qi.length;e++)Qi[e]._workInProgressVersionPrimary=null;Qi.length=0}var xo=wt.ReactCurrentDispatcher,Yi=wt.ReactCurrentBatchConfig,rn=0,te=null,se=null,fe=null,Vo=!1,pr=!1,Dr=0,u0=0;function ve(){throw Error(b(321))}function Ua(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!tt(e[n],t[n]))return!1;return!0}function $a(e,t,n,r,o,i){if(rn=i,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,xo.current=e===null||e.memoizedState===null?f0:h0,e=n(r,o),pr){i=0;do{if(pr=!1,Dr=0,25<=i)throw Error(b(301));i+=1,fe=se=null,t.updateQueue=null,xo.current=m0,e=n(r,o)}while(pr)}if(xo.current=Ko,t=se!==null&&se.next!==null,rn=0,fe=se=te=null,Vo=!1,t)throw Error(b(300));return e}function Va(){var e=Dr!==0;return Dr=0,e}function rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fe===null?te.memoizedState=fe=e:fe=fe.next=e,fe}function He(){if(se===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=se.next;var t=fe===null?te.memoizedState:fe.next;if(t!==null)fe=t,se=e;else{if(e===null)throw Error(b(310));se=e,e={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},fe===null?te.memoizedState=fe=e:fe=fe.next=e}return fe}function Br(e,t){return typeof t=="function"?t(e):t}function Xi(e){var t=He(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=se,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,u=null,c=i;do{var m=c.lane;if((rn&m)===m)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var y={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=y,l=r):u=u.next=y,te.lanes|=m,on|=m}c=c.next}while(c!==null&&c!==i);u===null?l=r:u.next=a,tt(r,t.memoizedState)||(Pe=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,te.lanes|=i,on|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Zi(e){var t=He(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);tt(i,t.memoizedState)||(Pe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Hc(){}function Gc(e,t){var n=te,r=He(),o=t(),i=!tt(r.memoizedState,o);if(i&&(r.memoizedState=o,Pe=!0),r=r.queue,Ka(Xc.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||fe!==null&&fe.memoizedState.tag&1){if(n.flags|=2048,zr(9,Yc.bind(null,n,r,o,t),void 0,null),he===null)throw Error(b(349));(rn&30)!==0||Qc(n,t,o)}return o}function Qc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=te.updateQueue,t===null?(t={lastEffect:null,stores:null},te.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Yc(e,t,n,r){t.value=n,t.getSnapshot=r,Zc(t)&&Jc(e)}function Xc(e,t,n){return n(function(){Zc(t)&&Jc(e)})}function Zc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!tt(e,n)}catch{return!0}}function Jc(e){var t=vt(e,1);t!==null&&et(t,e,1,-1)}function Xs(e){var t=rt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Br,lastRenderedState:e},t.queue=e,e=e.dispatch=p0.bind(null,te,e),[t.memoizedState,e]}function zr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=te.updateQueue,t===null?(t={lastEffect:null,stores:null},te.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function qc(){return He().memoizedState}function wo(e,t,n,r){var o=rt();te.flags|=e,o.memoizedState=zr(1|t,n,void 0,r===void 0?null:r)}function oi(e,t,n,r){var o=He();r=r===void 0?null:r;var i=void 0;if(se!==null){var l=se.memoizedState;if(i=l.destroy,r!==null&&Ua(r,l.deps)){o.memoizedState=zr(t,n,i,r);return}}te.flags|=e,o.memoizedState=zr(1|t,n,i,r)}function Zs(e,t){return wo(8390656,8,e,t)}function Ka(e,t){return oi(2048,8,e,t)}function ed(e,t){return oi(4,2,e,t)}function td(e,t){return oi(4,4,e,t)}function nd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function rd(e,t,n){return n=n!=null?n.concat([e]):null,oi(4,4,nd.bind(null,t,e),n)}function Wa(){}function od(e,t){var n=He();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ua(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function id(e,t){var n=He();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ua(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ld(e,t,n){return(rn&21)===0?(e.baseState&&(e.baseState=!1,Pe=!0),e.memoizedState=n):(tt(n,t)||(n=dc(),te.lanes|=n,on|=n,e.baseState=!0),t)}function c0(e,t){var n=G;G=n!==0&&4>n?n:4,e(!0);var r=Yi.transition;Yi.transition={};try{e(!1),t()}finally{G=n,Yi.transition=r}}function ad(){return He().memoizedState}function d0(e,t,n){var r=Rt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},sd(e))ud(t,n);else if(n=Vc(e,t,n,r),n!==null){var o=Se();et(n,e,r,o),cd(n,t,r)}}function p0(e,t,n){var r=Rt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(sd(e))ud(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,tt(a,l)){var u=t.interleaved;u===null?(o.next=o,_a(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=Vc(e,t,o,r),n!==null&&(o=Se(),et(n,e,r,o),cd(n,t,r))}}function sd(e){var t=e.alternate;return e===te||t!==null&&t===te}function ud(e,t){pr=Vo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function cd(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ea(e,n)}}var Ko={readContext:We,useCallback:ve,useContext:ve,useEffect:ve,useImperativeHandle:ve,useInsertionEffect:ve,useLayoutEffect:ve,useMemo:ve,useReducer:ve,useRef:ve,useState:ve,useDebugValue:ve,useDeferredValue:ve,useTransition:ve,useMutableSource:ve,useSyncExternalStore:ve,useId:ve,unstable_isNewReconciler:!1},f0={readContext:We,useCallback:function(e,t){return rt().memoizedState=[e,t===void 0?null:t],e},useContext:We,useEffect:Zs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,wo(4194308,4,nd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return wo(4194308,4,e,t)},useInsertionEffect:function(e,t){return wo(4,2,e,t)},useMemo:function(e,t){var n=rt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=rt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=d0.bind(null,te,e),[r.memoizedState,e]},useRef:function(e){var t=rt();return e={current:e},t.memoizedState=e},useState:Xs,useDebugValue:Wa,useDeferredValue:function(e){return rt().memoizedState=e},useTransition:function(){var e=Xs(!1),t=e[0];return e=c0.bind(null,e[1]),rt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=te,o=rt();if(q){if(n===void 0)throw Error(b(407));n=n()}else{if(n=t(),he===null)throw Error(b(349));(rn&30)!==0||Qc(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Zs(Xc.bind(null,r,i,e),[e]),r.flags|=2048,zr(9,Yc.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=rt(),t=he.identifierPrefix;if(q){var n=ht,r=ft;n=(r&~(1<<32-qe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Dr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=u0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},h0={readContext:We,useCallback:od,useContext:We,useEffect:Ka,useImperativeHandle:rd,useInsertionEffect:ed,useLayoutEffect:td,useMemo:id,useReducer:Xi,useRef:qc,useState:function(){return Xi(Br)},useDebugValue:Wa,useDeferredValue:function(e){var t=He();return ld(t,se.memoizedState,e)},useTransition:function(){var e=Xi(Br)[0],t=He().memoizedState;return[e,t]},useMutableSource:Hc,useSyncExternalStore:Gc,useId:ad,unstable_isNewReconciler:!1},m0={readContext:We,useCallback:od,useContext:We,useEffect:Ka,useImperativeHandle:rd,useInsertionEffect:ed,useLayoutEffect:td,useMemo:id,useReducer:Zi,useRef:qc,useState:function(){return Zi(Br)},useDebugValue:Wa,useDeferredValue:function(e){var t=He();return se===null?t.memoizedState=e:ld(t,se.memoizedState,e)},useTransition:function(){var e=Zi(Br)[0],t=He().memoizedState;return[e,t]},useMutableSource:Hc,useSyncExternalStore:Gc,useId:ad,unstable_isNewReconciler:!1};function Xe(e,t){if(e&&e.defaultProps){t=ne({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ol(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ne({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ii={isMounted:function(e){return(e=e._reactInternals)?sn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Se(),o=Rt(e),i=mt(r,o);i.payload=t,n!=null&&(i.callback=n),t=_t(e,i,o),t!==null&&(et(t,e,o,r),vo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Se(),o=Rt(e),i=mt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=_t(e,i,o),t!==null&&(et(t,e,o,r),vo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Se(),r=Rt(e),o=mt(n,r);o.tag=2,t!=null&&(o.callback=t),t=_t(e,o,r),t!==null&&(et(t,e,r,n),vo(t,e,r))}};function Js(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Sr(n,r)||!Sr(o,i):!0}function dd(e,t,n){var r=!1,o=$t,i=t.contextType;return typeof i=="object"&&i!==null?i=We(i):(o=Be(t)?tn:ke.current,r=t.contextTypes,i=(r=r!=null)?Ln(e,o):$t),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ii,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function qs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ii.enqueueReplaceState(t,t.state,null)}function Ul(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Ma(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=We(i):(i=Be(t)?tn:ke.current,o.context=Ln(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ol(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ii.enqueueReplaceState(o,o.state,null),Uo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function In(e,t){try{var n="",r=t;do n+=$p(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Ji(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function $l(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var g0=typeof WeakMap=="function"?WeakMap:Map;function pd(e,t,n){n=mt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ho||(Ho=!0,Jl=r),$l(e,t)},n}function fd(e,t,n){n=mt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){$l(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){$l(e,t),typeof r!="function"&&(Mt===null?Mt=new Set([this]):Mt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function eu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new g0;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=D0.bind(null,e,t,n),t.then(e,e))}function tu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function nu(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=mt(-1,1),t.tag=2,_t(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var y0=wt.ReactCurrentOwner,Pe=!1;function Ce(e,t,n,r){t.child=e===null?$c(t,null,n,r):Mn(t,e.child,n,r)}function ru(e,t,n,r,o){n=n.render;var i=t.ref;return zn(t,o),r=$a(e,t,n,r,i,o),n=Va(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,xt(e,t,o)):(q&&n&&Da(t),t.flags|=1,Ce(e,t,r,o),t.child)}function ou(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!qa(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,hd(e,t,i,r,o)):(e=So(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&o)===0){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Sr,n(l,r)&&e.ref===t.ref)return xt(e,t,o)}return t.flags|=1,e=It(i,r),e.ref=t.ref,e.return=t,t.child=e}function hd(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Sr(i,r)&&e.ref===t.ref)if(Pe=!1,t.pendingProps=r=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Pe=!0);else return t.lanes=e.lanes,xt(e,t,o)}return Vl(e,t,n,r,o)}function md(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(Nn,Le),Le|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,X(Nn,Le),Le|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,X(Nn,Le),Le|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,X(Nn,Le),Le|=r;return Ce(e,t,o,n),t.child}function gd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Vl(e,t,n,r,o){var i=Be(n)?tn:ke.current;return i=Ln(t,i),zn(t,o),n=$a(e,t,n,r,i,o),r=Va(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,xt(e,t,o)):(q&&r&&Da(t),t.flags|=1,Ce(e,t,n,o),t.child)}function iu(e,t,n,r,o){if(Be(n)){var i=!0;_o(t)}else i=!1;if(zn(t,o),t.stateNode===null)ko(e,t),dd(t,n,r),Ul(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=We(c):(c=Be(n)?tn:ke.current,c=Ln(t,c));var m=n.getDerivedStateFromProps,y=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";y||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||u!==c)&&qs(t,l,r,c),bt=!1;var g=t.memoizedState;l.state=g,Uo(t,r,l,o),u=t.memoizedState,a!==r||g!==u||De.current||bt?(typeof m=="function"&&(Ol(t,n,m,r),u=t.memoizedState),(a=bt||Js(t,n,a,r,g,u,c))?(y||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Kc(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Xe(t.type,a),l.props=c,y=t.pendingProps,g=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=We(u):(u=Be(n)?tn:ke.current,u=Ln(t,u));var S=n.getDerivedStateFromProps;(m=typeof S=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==y||g!==u)&&qs(t,l,r,u),bt=!1,g=t.memoizedState,l.state=g,Uo(t,r,l,o);var C=t.memoizedState;a!==y||g!==C||De.current||bt?(typeof S=="function"&&(Ol(t,n,S,r),C=t.memoizedState),(c=bt||Js(t,n,c,r,g,C,u)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,C,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,C,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=C),l.props=r,l.state=C,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Kl(e,t,n,r,i,o)}function Kl(e,t,n,r,o,i){gd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Ks(t,n,!1),xt(e,t,i);r=t.stateNode,y0.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Mn(t,e.child,null,i),t.child=Mn(t,null,a,i)):Ce(e,t,a,i),t.memoizedState=r.state,o&&Ks(t,n,!0),t.child}function yd(e){var t=e.stateNode;t.pendingContext?Vs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Vs(e,t.context,!1),Ra(e,t.containerInfo)}function lu(e,t,n,r,o){return _n(),za(o),t.flags|=256,Ce(e,t,n,r),t.child}var Wl={dehydrated:null,treeContext:null,retryLane:0};function Hl(e){return{baseLanes:e,cachePool:null,transitions:null}}function vd(e,t,n){var r=t.pendingProps,o=ee.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),X(ee,o&1),e===null)return Rl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=l):i=si(l,r,0,null),e=en(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Hl(n),t.memoizedState=Wl,e):Ha(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return v0(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var u={mode:"hidden",children:r.children};return(l&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=It(o,u),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=It(a,i):(i=en(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Hl(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Wl,r}return i=e.child,e=i.sibling,r=It(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ha(e,t){return t=si({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ao(e,t,n,r){return r!==null&&za(r),Mn(t,e.child,null,n),e=Ha(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function v0(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Ji(Error(b(422))),ao(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=si({mode:"visible",children:r.children},o,0,null),i=en(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&Mn(t,e.child,null,l),t.child.memoizedState=Hl(l),t.memoizedState=Wl,i);if((t.mode&1)===0)return ao(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(b(419)),r=Ji(i,r,void 0),ao(e,t,l,r)}if(a=(l&e.childLanes)!==0,Pe||a){if(r=he,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|l))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,vt(e,o),et(r,e,o,-1))}return Ja(),r=Ji(Error(b(421))),ao(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=B0.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,_e=Lt(o.nextSibling),Me=t,q=!0,Je=null,e!==null&&(Ue[$e++]=ft,Ue[$e++]=ht,Ue[$e++]=nn,ft=e.id,ht=e.overflow,nn=t),t=Ha(t,r.children),t.flags|=4096,t)}function au(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Il(e.return,t,n)}function qi(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function xd(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ce(e,t,r.children,n),r=ee.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&au(e,n,t);else if(e.tag===19)au(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(X(ee,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&$o(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),qi(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&$o(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}qi(t,!0,n,null,i);break;case"together":qi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ko(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function xt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),on|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(b(153));if(t.child!==null){for(e=t.child,n=It(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=It(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function x0(e,t,n){switch(t.tag){case 3:yd(t),_n();break;case 5:Wc(t);break;case 1:Be(t.type)&&_o(t);break;case 4:Ra(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;X(Io,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(X(ee,ee.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?vd(e,t,n):(X(ee,ee.current&1),e=xt(e,t,n),e!==null?e.sibling:null);X(ee,ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return xd(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),X(ee,ee.current),r)break;return null;case 22:case 23:return t.lanes=0,md(e,t,n)}return xt(e,t,n)}var wd,Gl,kd,Ed;wd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Gl=function(){};kd=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Jt(lt.current);var i=null;switch(n){case"input":o=ml(e,o),r=ml(e,r),i=[];break;case"select":o=ne({},o,{value:void 0}),r=ne({},r,{value:void 0}),i=[];break;case"textarea":o=vl(e,o),r=vl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=jo)}wl(n,r);var l;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(yr.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(a=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&a[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(yr.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Z("scroll",e),i||a===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Ed=function(e,t,n,r){n!==r&&(t.flags|=4)};function er(e,t){if(!q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function w0(e,t,n){var r=t.pendingProps;switch(Ba(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xe(t),null;case 1:return Be(t.type)&&Lo(),xe(t),null;case 3:return r=t.stateNode,Rn(),J(De),J(ke),Oa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(io(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Je!==null&&(ta(Je),Je=null))),Gl(e,t),xe(t),null;case 5:Ia(t);var o=Jt(Pr.current);if(n=t.type,e!==null&&t.stateNode!=null)kd(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(b(166));return xe(t),null}if(e=Jt(lt.current),io(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[ot]=t,r[Nr]=i,e=(t.mode&1)!==0,n){case"dialog":Z("cancel",r),Z("close",r);break;case"iframe":case"object":case"embed":Z("load",r);break;case"video":case"audio":for(o=0;o<lr.length;o++)Z(lr[o],r);break;case"source":Z("error",r);break;case"img":case"image":case"link":Z("error",r),Z("load",r);break;case"details":Z("toggle",r);break;case"input":gs(r,i),Z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Z("invalid",r);break;case"textarea":vs(r,i),Z("invalid",r)}wl(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&oo(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&oo(r.textContent,a,e),o=["children",""+a]):yr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&Z("scroll",r)}switch(n){case"input":Xr(r),ys(r,i,!0);break;case"textarea":Xr(r),xs(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=jo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Xu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[ot]=t,e[Nr]=r,wd(e,t,!1,!1),t.stateNode=e;e:{switch(l=kl(n,r),n){case"dialog":Z("cancel",e),Z("close",e),o=r;break;case"iframe":case"object":case"embed":Z("load",e),o=r;break;case"video":case"audio":for(o=0;o<lr.length;o++)Z(lr[o],e);o=r;break;case"source":Z("error",e),o=r;break;case"img":case"image":case"link":Z("error",e),Z("load",e),o=r;break;case"details":Z("toggle",e),o=r;break;case"input":gs(e,r),o=ml(e,r),Z("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ne({},r,{value:void 0}),Z("invalid",e);break;case"textarea":vs(e,r),o=vl(e,r),Z("invalid",e);break;default:o=r}wl(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?qu(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Zu(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&vr(e,u):typeof u=="number"&&vr(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(yr.hasOwnProperty(i)?u!=null&&i==="onScroll"&&Z("scroll",e):u!=null&&ga(e,i,u,l))}switch(n){case"input":Xr(e),ys(e,r,!1);break;case"textarea":Xr(e),xs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ut(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?An(e,!!r.multiple,i,!1):r.defaultValue!=null&&An(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=jo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return xe(t),null;case 6:if(e&&t.stateNode!=null)Ed(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(b(166));if(n=Jt(Pr.current),Jt(lt.current),io(t)){if(r=t.stateNode,n=t.memoizedProps,r[ot]=t,(i=r.nodeValue!==n)&&(e=Me,e!==null))switch(e.tag){case 3:oo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&oo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ot]=t,t.stateNode=r}return xe(t),null;case 13:if(J(ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(q&&_e!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Oc(),_n(),t.flags|=98560,i=!1;else if(i=io(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(b(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(b(317));i[ot]=t}else _n(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;xe(t),i=!1}else Je!==null&&(ta(Je),Je=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ee.current&1)!==0?ue===0&&(ue=3):Ja())),t.updateQueue!==null&&(t.flags|=4),xe(t),null);case 4:return Rn(),Gl(e,t),e===null&&Fr(t.stateNode.containerInfo),xe(t),null;case 10:return La(t.type._context),xe(t),null;case 17:return Be(t.type)&&Lo(),xe(t),null;case 19:if(J(ee),i=t.memoizedState,i===null)return xe(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)er(i,!1);else{if(ue!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=$o(e),l!==null){for(t.flags|=128,er(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return X(ee,ee.current&1|2),t.child}e=e.sibling}i.tail!==null&&ie()>On&&(t.flags|=128,r=!0,er(i,!1),t.lanes=4194304)}else{if(!r)if(e=$o(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),er(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!q)return xe(t),null}else 2*ie()-i.renderingStartTime>On&&n!==1073741824&&(t.flags|=128,r=!0,er(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ie(),t.sibling=null,n=ee.current,X(ee,r?n&1|2:n&1),t):(xe(t),null);case 22:case 23:return Za(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Le&1073741824)!==0&&(xe(t),t.subtreeFlags&6&&(t.flags|=8192)):xe(t),null;case 24:return null;case 25:return null}throw Error(b(156,t.tag))}function k0(e,t){switch(Ba(t),t.tag){case 1:return Be(t.type)&&Lo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Rn(),J(De),J(ke),Oa(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ia(t),null;case 13:if(J(ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(b(340));_n()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return J(ee),null;case 4:return Rn(),null;case 10:return La(t.type._context),null;case 22:case 23:return Za(),null;case 24:return null;default:return null}}var so=!1,we=!1,E0=typeof WeakSet=="function"?WeakSet:Set,L=null;function bn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){re(e,t,r)}else n.current=null}function Ql(e,t,n){try{n()}catch(r){re(e,t,r)}}var su=!1;function C0(e,t){if(Bl=Bo,e=Nc(),Pa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,u=-1,c=0,m=0,y=e,g=null;t:for(;;){for(var S;y!==n||o!==0&&y.nodeType!==3||(a=l+o),y!==i||r!==0&&y.nodeType!==3||(u=l+r),y.nodeType===3&&(l+=y.nodeValue.length),(S=y.firstChild)!==null;)g=y,y=S;for(;;){if(y===e)break t;if(g===n&&++c===o&&(a=l),g===i&&++m===r&&(u=l),(S=y.nextSibling)!==null)break;y=g,g=y.parentNode}y=S}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(zl={focusedElem:e,selectionRange:n},Bo=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var C=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var E=C.memoizedProps,_=C.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?E:Xe(t.type,E),_);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(w){re(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return C=su,su=!1,C}function fr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Ql(t,n,i)}o=o.next}while(o!==r)}}function li(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Yl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Cd(e){var t=e.alternate;t!==null&&(e.alternate=null,Cd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ot],delete t[Nr],delete t[Ll],delete t[i0],delete t[l0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Sd(e){return e.tag===5||e.tag===3||e.tag===4}function uu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Sd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=jo));else if(r!==4&&(e=e.child,e!==null))for(Xl(e,t,n),e=e.sibling;e!==null;)Xl(e,t,n),e=e.sibling}function Zl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Zl(e,t,n),e=e.sibling;e!==null;)Zl(e,t,n),e=e.sibling}var me=null,Ze=!1;function St(e,t,n){for(n=n.child;n!==null;)Fd(e,t,n),n=n.sibling}function Fd(e,t,n){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount(Jo,n)}catch{}switch(n.tag){case 5:we||bn(n,t);case 6:var r=me,o=Ze;me=null,St(e,t,n),me=r,Ze=o,me!==null&&(Ze?(e=me,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):me.removeChild(n.stateNode));break;case 18:me!==null&&(Ze?(e=me,n=n.stateNode,e.nodeType===8?Hi(e.parentNode,n):e.nodeType===1&&Hi(e,n),Er(e)):Hi(me,n.stateNode));break;case 4:r=me,o=Ze,me=n.stateNode.containerInfo,Ze=!0,St(e,t,n),me=r,Ze=o;break;case 0:case 11:case 14:case 15:if(!we&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&((i&2)!==0||(i&4)!==0)&&Ql(n,t,l),o=o.next}while(o!==r)}St(e,t,n);break;case 1:if(!we&&(bn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){re(n,t,a)}St(e,t,n);break;case 21:St(e,t,n);break;case 22:n.mode&1?(we=(r=we)||n.memoizedState!==null,St(e,t,n),we=r):St(e,t,n);break;default:St(e,t,n)}}function cu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new E0),t.forEach(function(r){var o=z0.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ye(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:me=a.stateNode,Ze=!1;break e;case 3:me=a.stateNode.containerInfo,Ze=!0;break e;case 4:me=a.stateNode.containerInfo,Ze=!0;break e}a=a.return}if(me===null)throw Error(b(160));Fd(i,l,o),me=null,Ze=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(c){re(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)bd(t,e),t=t.sibling}function bd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ye(t,e),nt(e),r&4){try{fr(3,e,e.return),li(3,e)}catch(E){re(e,e.return,E)}try{fr(5,e,e.return)}catch(E){re(e,e.return,E)}}break;case 1:Ye(t,e),nt(e),r&512&&n!==null&&bn(n,n.return);break;case 5:if(Ye(t,e),nt(e),r&512&&n!==null&&bn(n,n.return),e.flags&32){var o=e.stateNode;try{vr(o,"")}catch(E){re(e,e.return,E)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Qu(o,i),kl(a,l);var c=kl(a,i);for(l=0;l<u.length;l+=2){var m=u[l],y=u[l+1];m==="style"?qu(o,y):m==="dangerouslySetInnerHTML"?Zu(o,y):m==="children"?vr(o,y):ga(o,m,y,c)}switch(a){case"input":gl(o,i);break;case"textarea":Yu(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var S=i.value;S!=null?An(o,!!i.multiple,S,!1):g!==!!i.multiple&&(i.defaultValue!=null?An(o,!!i.multiple,i.defaultValue,!0):An(o,!!i.multiple,i.multiple?[]:"",!1))}o[Nr]=i}catch(E){re(e,e.return,E)}}break;case 6:if(Ye(t,e),nt(e),r&4){if(e.stateNode===null)throw Error(b(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(E){re(e,e.return,E)}}break;case 3:if(Ye(t,e),nt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Er(t.containerInfo)}catch(E){re(e,e.return,E)}break;case 4:Ye(t,e),nt(e);break;case 13:Ye(t,e),nt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ya=ie())),r&4&&cu(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(we=(c=we)||m,Ye(t,e),we=c):Ye(t,e),nt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&(e.mode&1)!==0)for(L=e,m=e.child;m!==null;){for(y=L=m;L!==null;){switch(g=L,S=g.child,g.tag){case 0:case 11:case 14:case 15:fr(4,g,g.return);break;case 1:bn(g,g.return);var C=g.stateNode;if(typeof C.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,C.props=t.memoizedProps,C.state=t.memoizedState,C.componentWillUnmount()}catch(E){re(r,n,E)}}break;case 5:bn(g,g.return);break;case 22:if(g.memoizedState!==null){pu(y);continue}}S!==null?(S.return=g,L=S):pu(y)}m=m.sibling}e:for(m=null,y=e;;){if(y.tag===5){if(m===null){m=y;try{o=y.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=y.stateNode,u=y.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Ju("display",l))}catch(E){re(e,e.return,E)}}}else if(y.tag===6){if(m===null)try{y.stateNode.nodeValue=c?"":y.memoizedProps}catch(E){re(e,e.return,E)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===e)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break e;for(;y.sibling===null;){if(y.return===null||y.return===e)break e;m===y&&(m=null),y=y.return}m===y&&(m=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:Ye(t,e),nt(e),r&4&&cu(e);break;case 21:break;default:Ye(t,e),nt(e)}}function nt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Sd(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(vr(o,""),r.flags&=-33);var i=uu(e);Zl(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=uu(e);Xl(e,a,l);break;default:throw Error(b(161))}}catch(u){re(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function S0(e,t,n){L=e,Nd(e)}function Nd(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var o=L,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||so;if(!l){var a=o.alternate,u=a!==null&&a.memoizedState!==null||we;a=so;var c=we;if(so=l,(we=u)&&!c)for(L=o;L!==null;)l=L,u=l.child,l.tag===22&&l.memoizedState!==null?fu(o):u!==null?(u.return=l,L=u):fu(o);for(;i!==null;)L=i,Nd(i),i=i.sibling;L=o,so=a,we=c}du(e)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,L=i):du(e)}}function du(e){for(;L!==null;){var t=L;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:we||li(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!we)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Xe(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ys(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ys(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var y=m.dehydrated;y!==null&&Er(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}we||t.flags&512&&Yl(t)}catch(g){re(t,t.return,g)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function pu(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function fu(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{li(4,t)}catch(u){re(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){re(t,o,u)}}var i=t.return;try{Yl(t)}catch(u){re(t,i,u)}break;case 5:var l=t.return;try{Yl(t)}catch(u){re(t,l,u)}}}catch(u){re(t,t.return,u)}if(t===e){L=null;break}var a=t.sibling;if(a!==null){a.return=t.return,L=a;break}L=t.return}}var F0=Math.ceil,Wo=wt.ReactCurrentDispatcher,Ga=wt.ReactCurrentOwner,Ke=wt.ReactCurrentBatchConfig,V=0,he=null,ae=null,ge=0,Le=0,Nn=Wt(0),ue=0,Tr=null,on=0,ai=0,Qa=0,hr=null,Ae=null,Ya=0,On=1/0,dt=null,Ho=!1,Jl=null,Mt=null,uo=!1,Dt=null,Go=0,mr=0,ql=null,Eo=-1,Co=0;function Se(){return(V&6)!==0?ie():Eo!==-1?Eo:Eo=ie()}function Rt(e){return(e.mode&1)===0?1:(V&2)!==0&&ge!==0?ge&-ge:s0.transition!==null?(Co===0&&(Co=dc()),Co):(e=G,e!==0||(e=window.event,e=e===void 0?16:vc(e.type)),e)}function et(e,t,n,r){if(50<mr)throw mr=0,ql=null,Error(b(185));Mr(e,n,r),((V&2)===0||e!==he)&&(e===he&&((V&2)===0&&(ai|=n),ue===4&&At(e,ge)),ze(e,r),n===1&&V===0&&(t.mode&1)===0&&(On=ie()+500,ri&&Ht()))}function ze(e,t){var n=e.callbackNode;sf(e,t);var r=Do(e,e===he?ge:0);if(r===0)n!==null&&Es(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Es(n),t===1)e.tag===0?a0(hu.bind(null,e)):Mc(hu.bind(null,e)),r0(function(){(V&6)===0&&Ht()}),n=null;else{switch(pc(r)){case 1:n=ka;break;case 4:n=uc;break;case 16:n=Po;break;case 536870912:n=cc;break;default:n=Po}n=Ld(n,Ad.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ad(e,t){if(Eo=-1,Co=0,(V&6)!==0)throw Error(b(327));var n=e.callbackNode;if(Tn()&&e.callbackNode!==n)return null;var r=Do(e,e===he?ge:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Qo(e,r);else{t=r;var o=V;V|=2;var i=Dd();(he!==e||ge!==t)&&(dt=null,On=ie()+500,qt(e,t));do try{A0();break}catch(a){Pd(e,a)}while(1);ja(),Wo.current=i,V=o,ae!==null?t=0:(he=null,ge=0,t=ue)}if(t!==0){if(t===2&&(o=bl(e),o!==0&&(r=o,t=ea(e,o))),t===1)throw n=Tr,qt(e,0),At(e,r),ze(e,ie()),n;if(t===6)At(e,r);else{if(o=e.current.alternate,(r&30)===0&&!b0(o)&&(t=Qo(e,r),t===2&&(i=bl(e),i!==0&&(r=i,t=ea(e,i))),t===1))throw n=Tr,qt(e,0),At(e,r),ze(e,ie()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(b(345));case 2:Yt(e,Ae,dt);break;case 3:if(At(e,r),(r&130023424)===r&&(t=Ya+500-ie(),10<t)){if(Do(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Se(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=jl(Yt.bind(null,e,Ae,dt),t);break}Yt(e,Ae,dt);break;case 4:if(At(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-qe(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*F0(r/1960))-r,10<r){e.timeoutHandle=jl(Yt.bind(null,e,Ae,dt),r);break}Yt(e,Ae,dt);break;case 5:Yt(e,Ae,dt);break;default:throw Error(b(329))}}}return ze(e,ie()),e.callbackNode===n?Ad.bind(null,e):null}function ea(e,t){var n=hr;return e.current.memoizedState.isDehydrated&&(qt(e,t).flags|=256),e=Qo(e,t),e!==2&&(t=Ae,Ae=n,t!==null&&ta(t)),e}function ta(e){Ae===null?Ae=e:Ae.push.apply(Ae,e)}function b0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!tt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function At(e,t){for(t&=~Qa,t&=~ai,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-qe(t),r=1<<n;e[n]=-1,t&=~r}}function hu(e){if((V&6)!==0)throw Error(b(327));Tn();var t=Do(e,0);if((t&1)===0)return ze(e,ie()),null;var n=Qo(e,t);if(e.tag!==0&&n===2){var r=bl(e);r!==0&&(t=r,n=ea(e,r))}if(n===1)throw n=Tr,qt(e,0),At(e,t),ze(e,ie()),n;if(n===6)throw Error(b(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Yt(e,Ae,dt),ze(e,ie()),null}function Xa(e,t){var n=V;V|=1;try{return e(t)}finally{V=n,V===0&&(On=ie()+500,ri&&Ht())}}function ln(e){Dt!==null&&Dt.tag===0&&(V&6)===0&&Tn();var t=V;V|=1;var n=Ke.transition,r=G;try{if(Ke.transition=null,G=1,e)return e()}finally{G=r,Ke.transition=n,V=t,(V&6)===0&&Ht()}}function Za(){Le=Nn.current,J(Nn)}function qt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,n0(n)),ae!==null)for(n=ae.return;n!==null;){var r=n;switch(Ba(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Lo();break;case 3:Rn(),J(De),J(ke),Oa();break;case 5:Ia(r);break;case 4:Rn();break;case 13:J(ee);break;case 19:J(ee);break;case 10:La(r.type._context);break;case 22:case 23:Za()}n=n.return}if(he=e,ae=e=It(e.current,null),ge=Le=t,ue=0,Tr=null,Qa=ai=on=0,Ae=hr=null,Zt!==null){for(t=0;t<Zt.length;t++)if(n=Zt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}Zt=null}return e}function Pd(e,t){do{var n=ae;try{if(ja(),xo.current=Ko,Vo){for(var r=te.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Vo=!1}if(rn=0,fe=se=te=null,pr=!1,Dr=0,Ga.current=null,n===null||n.return===null){ue=1,Tr=t,ae=null;break}e:{var i=e,l=n.return,a=n,u=t;if(t=ge,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,m=a,y=m.tag;if((m.mode&1)===0&&(y===0||y===11||y===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var S=tu(l);if(S!==null){S.flags&=-257,nu(S,l,a,i,t),S.mode&1&&eu(i,c,t),t=S,u=c;var C=t.updateQueue;if(C===null){var E=new Set;E.add(u),t.updateQueue=E}else C.add(u);break e}else{if((t&1)===0){eu(i,c,t),Ja();break e}u=Error(b(426))}}else if(q&&a.mode&1){var _=tu(l);if(_!==null){(_.flags&65536)===0&&(_.flags|=256),nu(_,l,a,i,t),za(In(u,a));break e}}i=u=In(u,a),ue!==4&&(ue=2),hr===null?hr=[i]:hr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=pd(i,u,t);Qs(i,f);break e;case 1:a=u;var d=i.type,p=i.stateNode;if((i.flags&128)===0&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Mt===null||!Mt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=fd(i,a,t);Qs(i,w);break e}}i=i.return}while(i!==null)}zd(n)}catch(F){t=F,ae===n&&n!==null&&(ae=n=n.return);continue}break}while(1)}function Dd(){var e=Wo.current;return Wo.current=Ko,e===null?Ko:e}function Ja(){(ue===0||ue===3||ue===2)&&(ue=4),he===null||(on&268435455)===0&&(ai&268435455)===0||At(he,ge)}function Qo(e,t){var n=V;V|=2;var r=Dd();(he!==e||ge!==t)&&(dt=null,qt(e,t));do try{N0();break}catch(o){Pd(e,o)}while(1);if(ja(),V=n,Wo.current=r,ae!==null)throw Error(b(261));return he=null,ge=0,ue}function N0(){for(;ae!==null;)Bd(ae)}function A0(){for(;ae!==null&&!Jp();)Bd(ae)}function Bd(e){var t=jd(e.alternate,e,Le);e.memoizedProps=e.pendingProps,t===null?zd(e):ae=t,Ga.current=null}function zd(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=w0(n,t,Le),n!==null){ae=n;return}}else{if(n=k0(n,t),n!==null){n.flags&=32767,ae=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ue=6,ae=null;return}}if(t=t.sibling,t!==null){ae=t;return}ae=t=e}while(t!==null);ue===0&&(ue=5)}function Yt(e,t,n){var r=G,o=Ke.transition;try{Ke.transition=null,G=1,P0(e,t,n,r)}finally{Ke.transition=o,G=r}return null}function P0(e,t,n,r){do Tn();while(Dt!==null);if((V&6)!==0)throw Error(b(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(b(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(uf(e,i),e===he&&(ae=he=null,ge=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||uo||(uo=!0,Ld(Po,function(){return Tn(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=Ke.transition,Ke.transition=null;var l=G;G=1;var a=V;V|=4,Ga.current=null,C0(e,n),bd(n,e),Yf(zl),Bo=!!Bl,zl=Bl=null,e.current=n,S0(n),qp(),V=a,G=l,Ke.transition=i}else e.current=n;if(uo&&(uo=!1,Dt=e,Go=o),i=e.pendingLanes,i===0&&(Mt=null),nf(n.stateNode),ze(e,ie()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ho)throw Ho=!1,e=Jl,Jl=null,e;return(Go&1)!==0&&e.tag!==0&&Tn(),i=e.pendingLanes,(i&1)!==0?e===ql?mr++:(mr=0,ql=e):mr=0,Ht(),null}function Tn(){if(Dt!==null){var e=pc(Go),t=Ke.transition,n=G;try{if(Ke.transition=null,G=16>e?16:e,Dt===null)var r=!1;else{if(e=Dt,Dt=null,Go=0,(V&6)!==0)throw Error(b(331));var o=V;for(V|=4,L=e.current;L!==null;){var i=L,l=i.child;if((L.flags&16)!==0){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(L=c;L!==null;){var m=L;switch(m.tag){case 0:case 11:case 15:fr(8,m,i)}var y=m.child;if(y!==null)y.return=m,L=y;else for(;L!==null;){m=L;var g=m.sibling,S=m.return;if(Cd(m),m===c){L=null;break}if(g!==null){g.return=S,L=g;break}L=S}}}var C=i.alternate;if(C!==null){var E=C.child;if(E!==null){C.child=null;do{var _=E.sibling;E.sibling=null,E=_}while(E!==null)}}L=i}}if((i.subtreeFlags&2064)!==0&&l!==null)l.return=i,L=l;else e:for(;L!==null;){if(i=L,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:fr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,L=f;break e}L=i.return}}var d=e.current;for(L=d;L!==null;){l=L;var p=l.child;if((l.subtreeFlags&2064)!==0&&p!==null)p.return=l,L=p;else e:for(l=d;L!==null;){if(a=L,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:li(9,a)}}catch(F){re(a,a.return,F)}if(a===l){L=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,L=w;break e}L=a.return}}if(V=o,Ht(),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot(Jo,e)}catch{}r=!0}return r}finally{G=n,Ke.transition=t}}return!1}function mu(e,t,n){t=In(n,t),t=pd(e,t,1),e=_t(e,t,1),t=Se(),e!==null&&(Mr(e,1,t),ze(e,t))}function re(e,t,n){if(e.tag===3)mu(e,e,n);else for(;t!==null;){if(t.tag===3){mu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Mt===null||!Mt.has(r))){e=In(n,e),e=fd(t,e,1),t=_t(t,e,1),e=Se(),t!==null&&(Mr(t,1,e),ze(t,e));break}}t=t.return}}function D0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Se(),e.pingedLanes|=e.suspendedLanes&n,he===e&&(ge&n)===n&&(ue===4||ue===3&&(ge&130023424)===ge&&500>ie()-Ya?qt(e,0):Qa|=n),ze(e,t)}function Td(e,t){t===0&&((e.mode&1)===0?t=1:(t=qr,qr<<=1,(qr&130023424)===0&&(qr=4194304)));var n=Se();e=vt(e,t),e!==null&&(Mr(e,t,n),ze(e,n))}function B0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Td(e,n)}function z0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(t),Td(e,n)}var jd;jd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||De.current)Pe=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Pe=!1,x0(e,t,n);Pe=(e.flags&131072)!==0}else Pe=!1,q&&(t.flags&1048576)!==0&&Rc(t,Ro,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ko(e,t),e=t.pendingProps;var o=Ln(t,ke.current);zn(t,n),o=$a(null,t,r,e,o,n);var i=Va();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Be(r)?(i=!0,_o(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ma(t),o.updater=ii,t.stateNode=o,o._reactInternals=t,Ul(t,r,e,n),t=Kl(null,t,r,!0,i,n)):(t.tag=0,q&&i&&Da(t),Ce(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ko(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=j0(r),e=Xe(r,e),o){case 0:t=Vl(null,t,r,e,n);break e;case 1:t=iu(null,t,r,e,n);break e;case 11:t=ru(null,t,r,e,n);break e;case 14:t=ou(null,t,r,Xe(r.type,e),n);break e}throw Error(b(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Xe(r,o),Vl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Xe(r,o),iu(e,t,r,o,n);case 3:e:{if(yd(t),e===null)throw Error(b(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Kc(e,t),Uo(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=In(Error(b(423)),t),t=lu(e,t,r,n,o);break e}else if(r!==o){o=In(Error(b(424)),t),t=lu(e,t,r,n,o);break e}else for(_e=Lt(t.stateNode.containerInfo.firstChild),Me=t,q=!0,Je=null,n=$c(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_n(),r===o){t=xt(e,t,n);break e}Ce(e,t,r,n)}t=t.child}return t;case 5:return Wc(t),e===null&&Rl(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Tl(r,o)?l=null:i!==null&&Tl(r,i)&&(t.flags|=32),gd(e,t),Ce(e,t,l,n),t.child;case 6:return e===null&&Rl(t),null;case 13:return vd(e,t,n);case 4:return Ra(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Mn(t,null,r,n):Ce(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Xe(r,o),ru(e,t,r,o,n);case 7:return Ce(e,t,t.pendingProps,n),t.child;case 8:return Ce(e,t,t.pendingProps.children,n),t.child;case 12:return Ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,X(Io,r._currentValue),r._currentValue=l,i!==null)if(tt(i.value,l)){if(i.children===o.children&&!De.current){t=xt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=mt(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?u.next=u:(u.next=m.next,m.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Il(i.return,n,t),a.lanes|=n;break}u=u.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(b(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Il(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Ce(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,zn(t,n),o=We(o),r=r(o),t.flags|=1,Ce(e,t,r,n),t.child;case 14:return r=t.type,o=Xe(r,t.pendingProps),o=Xe(r.type,o),ou(e,t,r,o,n);case 15:return hd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Xe(r,o),ko(e,t),t.tag=1,Be(r)?(e=!0,_o(t)):e=!1,zn(t,n),dd(t,r,o),Ul(t,r,o,n),Kl(null,t,r,!0,e,n);case 19:return xd(e,t,n);case 22:return md(e,t,n)}throw Error(b(156,t.tag))};function Ld(e,t){return sc(e,t)}function T0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ve(e,t,n,r){return new T0(e,t,n,r)}function qa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function j0(e){if(typeof e=="function")return qa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===va)return 11;if(e===xa)return 14}return 2}function It(e,t){var n=e.alternate;return n===null?(n=Ve(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function So(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")qa(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case yn:return en(n.children,o,i,t);case ya:l=8,o|=8;break;case dl:return e=Ve(12,n,t,o|2),e.elementType=dl,e.lanes=i,e;case pl:return e=Ve(13,n,t,o),e.elementType=pl,e.lanes=i,e;case fl:return e=Ve(19,n,t,o),e.elementType=fl,e.lanes=i,e;case Wu:return si(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Vu:l=10;break e;case Ku:l=9;break e;case va:l=11;break e;case xa:l=14;break e;case Ft:l=16,r=null;break e}throw Error(b(130,e==null?e:typeof e,""))}return t=Ve(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function en(e,t,n,r){return e=Ve(7,e,r,t),e.lanes=n,e}function si(e,t,n,r){return e=Ve(22,e,r,t),e.elementType=Wu,e.lanes=n,e.stateNode={isHidden:!1},e}function el(e,t,n){return e=Ve(6,e,null,t),e.lanes=n,e}function tl(e,t,n){return t=Ve(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function L0(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Li(0),this.expirationTimes=Li(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Li(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function es(e,t,n,r,o,i,l,a,u){return e=new L0(e,t,n,a,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ve(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ma(i),e}function _0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function _d(e){if(!e)return $t;e=e._reactInternals;e:{if(sn(e)!==e||e.tag!==1)throw Error(b(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Be(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(b(171))}if(e.tag===1){var n=e.type;if(Be(n))return _c(e,n,t)}return t}function Md(e,t,n,r,o,i,l,a,u){return e=es(n,r,!0,e,o,i,l,a,u),e.context=_d(null),n=e.current,r=Se(),o=Rt(n),i=mt(r,o),i.callback=t!=null?t:null,_t(n,i,o),e.current.lanes=o,Mr(e,o,r),ze(e,r),e}function ui(e,t,n,r){var o=t.current,i=Se(),l=Rt(o);return n=_d(n),t.context===null?t.context=n:t.pendingContext=n,t=mt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=_t(o,t,l),e!==null&&(et(e,o,l,i),vo(e,o,l)),l}function Yo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function gu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ts(e,t){gu(e,t),(e=e.alternate)&&gu(e,t)}function M0(){return null}var Rd=typeof reportError=="function"?reportError:function(e){console.error(e)};function ns(e){this._internalRoot=e}ci.prototype.render=ns.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(b(409));ui(e,t,null,null)};ci.prototype.unmount=ns.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ln(function(){ui(null,e,null,null)}),t[yt]=null}};function ci(e){this._internalRoot=e}ci.prototype.unstable_scheduleHydration=function(e){if(e){var t=mc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Nt.length&&t!==0&&t<Nt[n].priority;n++);Nt.splice(n,0,e),n===0&&yc(e)}};function rs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function di(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function yu(){}function R0(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=Yo(l);i.call(c)}}var l=Md(t,r,e,0,null,!1,!1,"",yu);return e._reactRootContainer=l,e[yt]=l.current,Fr(e.nodeType===8?e.parentNode:e),ln(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var c=Yo(u);a.call(c)}}var u=es(e,0,!1,null,null,!1,!1,"",yu);return e._reactRootContainer=u,e[yt]=u.current,Fr(e.nodeType===8?e.parentNode:e),ln(function(){ui(t,u,n,r)}),u}function pi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var u=Yo(l);a.call(u)}}ui(t,l,e,o)}else l=R0(n,t,e,o,r);return Yo(l)}fc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ir(t.pendingLanes);n!==0&&(Ea(t,n|1),ze(t,ie()),(V&6)===0&&(On=ie()+500,Ht()))}break;case 13:ln(function(){var r=vt(e,1);if(r!==null){var o=Se();et(r,e,1,o)}}),ts(e,1)}};Ca=function(e){if(e.tag===13){var t=vt(e,134217728);if(t!==null){var n=Se();et(t,e,134217728,n)}ts(e,134217728)}};hc=function(e){if(e.tag===13){var t=Rt(e),n=vt(e,t);if(n!==null){var r=Se();et(n,e,t,r)}ts(e,t)}};mc=function(){return G};gc=function(e,t){var n=G;try{return G=e,t()}finally{G=n}};Cl=function(e,t,n){switch(t){case"input":if(gl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ni(r);if(!o)throw Error(b(90));Gu(r),gl(r,o)}}}break;case"textarea":Yu(e,n);break;case"select":t=n.value,t!=null&&An(e,!!n.multiple,t,!1)}};nc=Xa;rc=ln;var I0={usingClientEntryPoint:!1,Events:[Ir,kn,ni,ec,tc,Xa]},tr={findFiberByHostInstance:Xt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},O0={bundleType:tr.bundleType,version:tr.version,rendererPackageName:tr.rendererPackageName,rendererConfig:tr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=lc(e),e===null?null:e.stateNode},findFiberByHostInstance:tr.findFiberByHostInstance||M0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var co=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!co.isDisabled&&co.supportsFiber)try{Jo=co.inject(O0),it=co}catch{}}Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I0;Ie.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rs(t))throw Error(b(200));return _0(e,t,null,n)};Ie.createRoot=function(e,t){if(!rs(e))throw Error(b(299));var n=!1,r="",o=Rd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=es(e,1,!1,null,null,n,!1,r,o),e[yt]=t.current,Fr(e.nodeType===8?e.parentNode:e),new ns(t)};Ie.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(b(188)):(e=Object.keys(e).join(","),Error(b(268,e)));return e=lc(t),e=e===null?null:e.stateNode,e};Ie.flushSync=function(e){return ln(e)};Ie.hydrate=function(e,t,n){if(!di(t))throw Error(b(200));return pi(null,e,t,!0,n)};Ie.hydrateRoot=function(e,t,n){if(!rs(e))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Rd;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Md(t,null,e,1,n!=null?n:null,o,!1,i,l),e[yt]=t.current,Fr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new ci(t)};Ie.render=function(e,t,n){if(!di(t))throw Error(b(200));return pi(null,e,t,!1,n)};Ie.unmountComponentAtNode=function(e){if(!di(e))throw Error(b(40));return e._reactRootContainer?(ln(function(){pi(null,null,e,!1,function(){e._reactRootContainer=null,e[yt]=null})}),!0):!1};Ie.unstable_batchedUpdates=Xa;Ie.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!di(n))throw Error(b(200));if(e==null||e._reactInternals===void 0)throw Error(b(38));return pi(e,t,n,!1,r)};Ie.version="18.3.1-next-f1338f8080-20240426";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Ie})(Iu);var Id,vu=Iu.exports;Id=vu.createRoot,vu.hydrateRoot;/**
 * @remix-run/router v1.3.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function jr(){return jr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},jr.apply(this,arguments)}var Bt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Bt||(Bt={}));const xu="popstate";function U0(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:l,hash:a}=r.location;return na("",{pathname:i,search:l,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Lr(o)}return V0(t,n,null,e)}function ce(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function $0(){return Math.random().toString(36).substr(2,8)}function wu(e,t){return{usr:e.state,key:e.key,idx:t}}function na(e,t,n,r){return n===void 0&&(n=null),jr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Kn(t):t,{state:n,key:t&&t.key||r||$0()})}function Lr(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Kn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function V0(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,l=o.history,a=Bt.Pop,u=null,c=m();c==null&&(c=0,l.replaceState(jr({},l.state,{idx:c}),""));function m(){return(l.state||{idx:null}).idx}function y(){a=Bt.Pop;let _=m(),f=_==null?null:_-c;c=_,u&&u({action:a,location:E.location,delta:f})}function g(_,f){a=Bt.Push;let d=na(E.location,_,f);n&&n(d,_),c=m()+1;let p=wu(d,c),w=E.createHref(d);try{l.pushState(p,"",w)}catch{o.location.assign(w)}i&&u&&u({action:a,location:E.location,delta:1})}function S(_,f){a=Bt.Replace;let d=na(E.location,_,f);n&&n(d,_),c=m();let p=wu(d,c),w=E.createHref(d);l.replaceState(p,"",w),i&&u&&u({action:a,location:E.location,delta:0})}function C(_){let f=o.location.origin!=="null"?o.location.origin:o.location.href,d=typeof _=="string"?_:Lr(_);return ce(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let E={get action(){return a},get location(){return e(o,l)},listen(_){if(u)throw new Error("A history only accepts one active listener");return o.addEventListener(xu,y),u=_,()=>{o.removeEventListener(xu,y),u=null}},createHref(_){return t(o,_)},createURL:C,encodeLocation(_){let f=C(_);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:S,go(_){return l.go(_)}};return E}var ku;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ku||(ku={}));function K0(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Kn(t):t,o=$d(r.pathname||"/",n);if(o==null)return null;let i=Od(e);W0(i);let l=null;for(let a=0;l==null&&a<i.length;++a)l=eh(i[a],rh(o));return l}function Od(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,l,a)=>{let u={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};u.relativePath.startsWith("/")&&(ce(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Ot([r,u.relativePath]),m=n.concat(u);i.children&&i.children.length>0&&(ce(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Od(i.children,t,m,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:J0(c,i.index),routesMeta:m})};return e.forEach((i,l)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,l);else for(let u of Ud(i.path))o(i,l,u)}),t}function Ud(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let l=Ud(r.join("/")),a=[];return a.push(...l.map(u=>u===""?i:[i,u].join("/"))),o&&a.push(...l),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function W0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:q0(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const H0=/^:\w+$/,G0=3,Q0=2,Y0=1,X0=10,Z0=-2,Eu=e=>e==="*";function J0(e,t){let n=e.split("/"),r=n.length;return n.some(Eu)&&(r+=Z0),t&&(r+=Q0),n.filter(o=>!Eu(o)).reduce((o,i)=>o+(H0.test(i)?G0:i===""?Y0:X0),r)}function q0(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function eh(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let l=0;l<n.length;++l){let a=n[l],u=l===n.length-1,c=o==="/"?t:t.slice(o.length)||"/",m=th({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},c);if(!m)return null;Object.assign(r,m.params);let y=a.route;i.push({params:r,pathname:Ot([o,m.pathname]),pathnameBase:ah(Ot([o,m.pathnameBase])),route:y}),m.pathnameBase!=="/"&&(o=Ot([o,m.pathnameBase]))}return i}function th(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=nh(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],l=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((c,m,y)=>{if(m==="*"){let g=a[y]||"";l=i.slice(0,i.length-g.length).replace(/(.)\/+$/,"$1")}return c[m]=oh(a[y]||"",m),c},{}),pathname:i,pathnameBase:l,pattern:e}}function nh(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),os(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(l,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function rh(e){try{return decodeURI(e)}catch(t){return os(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function oh(e,t){try{return decodeURIComponent(e)}catch(n){return os(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function $d(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function os(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ih(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Kn(e):e;return{pathname:n?n.startsWith("/")?n:lh(n,t):t,search:sh(r),hash:uh(o)}}function lh(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function nl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Vd(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Kd(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Kn(e):(o=jr({},e),ce(!o.pathname||!o.pathname.includes("?"),nl("?","pathname","search",o)),ce(!o.pathname||!o.pathname.includes("#"),nl("#","pathname","hash",o)),ce(!o.search||!o.search.includes("#"),nl("#","search","hash",o)));let i=e===""||o.pathname==="",l=i?"/":o.pathname,a;if(r||l==null)a=n;else{let y=t.length-1;if(l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),y-=1;o.pathname=g.join("/")}a=y>=0?t[y]:"/"}let u=ih(o,a),c=l&&l!=="/"&&l.endsWith("/"),m=(i||l===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||m)&&(u.pathname+="/"),u}const Ot=e=>e.join("/").replace(/\/\/+/g,"/"),ah=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),sh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,uh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ch(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const dh=["post","put","patch","delete"];[...dh];var fi={exports:{}},hi={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ph=k.exports,fh=Symbol.for("react.element"),hh=Symbol.for("react.fragment"),mh=Object.prototype.hasOwnProperty,gh=ph.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yh={key:!0,ref:!0,__self:!0,__source:!0};function Wd(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)mh.call(t,r)&&!yh.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:fh,type:e,key:i,ref:l,props:o,_owner:gh.current}}hi.Fragment=hh;hi.jsx=Wd;hi.jsxs=Wd;(function(e){e.exports=hi})(fi);const ra=fi.exports.Fragment,s=fi.exports.jsx,h=fi.exports.jsxs;/**
 * React Router v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oa(){return oa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oa.apply(this,arguments)}function vh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const xh=typeof Object.is=="function"?Object.is:vh,{useState:wh,useEffect:kh,useLayoutEffect:Eh,useDebugValue:Ch}=ul;function Sh(e,t,n){const r=t(),[{inst:o},i]=wh({inst:{value:r,getSnapshot:t}});return Eh(()=>{o.value=r,o.getSnapshot=t,rl(o)&&i({inst:o})},[e,r,t]),kh(()=>(rl(o)&&i({inst:o}),e(()=>{rl(o)&&i({inst:o})})),[e]),Ch(r),r}function rl(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!xh(n,r)}catch{return!0}}function Fh(e,t,n){return t()}const bh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Nh=!bh,Ah=Nh?Fh:Sh;"useSyncExternalStore"in ul&&(e=>e.useSyncExternalStore)(ul);const Hd=k.exports.createContext(null),Gd=k.exports.createContext(null),mi=k.exports.createContext(null),gi=k.exports.createContext(null),un=k.exports.createContext({outlet:null,matches:[]}),Qd=k.exports.createContext(null);function Ph(e,t){let{relative:n}=t===void 0?{}:t;Ur()||ce(!1);let{basename:r,navigator:o}=k.exports.useContext(mi),{hash:i,pathname:l,search:a}=Xd(e,{relative:n}),u=l;return r!=="/"&&(u=l==="/"?r:Ot([r,l])),o.createHref({pathname:u,search:a,hash:i})}function Ur(){return k.exports.useContext(gi)!=null}function yi(){return Ur()||ce(!1),k.exports.useContext(gi).location}function $r(){Ur()||ce(!1);let{basename:e,navigator:t}=k.exports.useContext(mi),{matches:n}=k.exports.useContext(un),{pathname:r}=yi(),o=JSON.stringify(Vd(n).map(a=>a.pathnameBase)),i=k.exports.useRef(!1);return k.exports.useEffect(()=>{i.current=!0}),k.exports.useCallback(function(a,u){if(u===void 0&&(u={}),!i.current)return;if(typeof a=="number"){t.go(a);return}let c=Kd(a,JSON.parse(o),r,u.relative==="path");e!=="/"&&(c.pathname=c.pathname==="/"?e:Ot([e,c.pathname])),(u.replace?t.replace:t.push)(c,u.state,u)},[e,t,o,r])}function Yd(){let{matches:e}=k.exports.useContext(un),t=e[e.length-1];return t?t.params:{}}function Xd(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=k.exports.useContext(un),{pathname:o}=yi(),i=JSON.stringify(Vd(r).map(l=>l.pathnameBase));return k.exports.useMemo(()=>Kd(e,JSON.parse(i),o,n==="path"),[e,i,o,n])}function Dh(e,t){Ur()||ce(!1);let{navigator:n}=k.exports.useContext(mi),r=k.exports.useContext(Gd),{matches:o}=k.exports.useContext(un),i=o[o.length-1],l=i?i.params:{};i&&i.pathname;let a=i?i.pathnameBase:"/";i&&i.route;let u=yi(),c;if(t){var m;let E=typeof t=="string"?Kn(t):t;a==="/"||((m=E.pathname)==null?void 0:m.startsWith(a))||ce(!1),c=E}else c=u;let y=c.pathname||"/",g=a==="/"?y:y.slice(a.length)||"/",S=K0(e,{pathname:g}),C=jh(S&&S.map(E=>Object.assign({},E,{params:Object.assign({},l,E.params),pathname:Ot([a,n.encodeLocation?n.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?a:Ot([a,n.encodeLocation?n.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),o,r||void 0);return t&&C?s(gi.Provider,{value:{location:oa({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Bt.Pop},children:C}):C}function Bh(){let e=Rh(),t=ch(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null;return h(ra,{children:[s("h2",{children:"Unexpected Application Error!"}),s("h3",{style:{fontStyle:"italic"},children:t}),n?s("pre",{style:{padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},children:n}):null,null]})}class zh extends k.exports.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?s(un.Provider,{value:this.props.routeContext,children:s(Qd.Provider,{value:this.state.error,children:this.props.component})}):this.props.children}}function Th(e){let{routeContext:t,match:n,children:r}=e,o=k.exports.useContext(Hd);return o&&o.static&&o.staticContext&&n.route.errorElement&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),s(un.Provider,{value:t,children:r})}function jh(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,o=n==null?void 0:n.errors;if(o!=null){let i=r.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));i>=0||ce(!1),r=r.slice(0,Math.min(r.length,i+1))}return r.reduceRight((i,l,a)=>{let u=l.route.id?o==null?void 0:o[l.route.id]:null,c=n?l.route.errorElement||s(Bh,{}):null,m=t.concat(r.slice(0,a+1)),y=()=>s(Th,{match:l,routeContext:{outlet:i,matches:m},children:u?c:l.route.element!==void 0?l.route.element:i});return n&&(l.route.errorElement||a===0)?s(zh,{location:n.location,component:c,error:u,children:y(),routeContext:{outlet:null,matches:m}}):y()},null)}var Cu;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(Cu||(Cu={}));var Xo;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(Xo||(Xo={}));function Lh(e){let t=k.exports.useContext(Gd);return t||ce(!1),t}function _h(e){let t=k.exports.useContext(un);return t||ce(!1),t}function Mh(e){let t=_h(),n=t.matches[t.matches.length-1];return n.route.id||ce(!1),n.route.id}function Rh(){var e;let t=k.exports.useContext(Qd),n=Lh(Xo.UseRouteError),r=Mh(Xo.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Fo(e){ce(!1)}function Ih(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Bt.Pop,navigator:i,static:l=!1}=e;Ur()&&ce(!1);let a=t.replace(/^\/*/,"/"),u=k.exports.useMemo(()=>({basename:a,navigator:i,static:l}),[a,i,l]);typeof r=="string"&&(r=Kn(r));let{pathname:c="/",search:m="",hash:y="",state:g=null,key:S="default"}=r,C=k.exports.useMemo(()=>{let E=$d(c,a);return E==null?null:{pathname:E,search:m,hash:y,state:g,key:S}},[a,c,m,y,g,S]);return C==null?null:s(mi.Provider,{value:u,children:s(gi.Provider,{children:n,value:{location:C,navigationType:o}})})}function Oh(e){let{children:t,location:n}=e,r=k.exports.useContext(Hd),o=r&&!t?r.router.routes:ia(t);return Dh(o,n)}var Su;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Su||(Su={}));new Promise(()=>{});function ia(e,t){t===void 0&&(t=[]);let n=[];return k.exports.Children.forEach(e,(r,o)=>{if(!k.exports.isValidElement(r))return;if(r.type===k.exports.Fragment){n.push.apply(n,ia(r.props.children,t));return}r.type!==Fo&&ce(!1),!r.props.index||!r.props.children||ce(!1);let i=[...t,o],l={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(l.children=ia(r.props.children,i)),n.push(l)}),n}/**
 * React Router DOM v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Uh(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function $h(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Vh(e,t){return e.button===0&&(!t||t==="_self")&&!$h(e)}const Kh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function Wh(e){let{basename:t,children:n,window:r}=e,o=k.exports.useRef();o.current==null&&(o.current=U0({window:r,v5Compat:!0}));let i=o.current,[l,a]=k.exports.useState({action:i.action,location:i.location});return k.exports.useLayoutEffect(()=>i.listen(a),[i]),s(Ih,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:i})}const Hh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",gr=k.exports.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:l,state:a,target:u,to:c,preventScrollReset:m}=t,y=Uh(t,Kh),g=typeof c=="string"?c:Lr(c),S=/^[a-z+]+:\/\//i.test(g)||g.startsWith("//"),C=g,E=!1;if(Hh&&S){let p=new URL(window.location.href),w=g.startsWith("//")?new URL(p.protocol+g):new URL(g);w.origin===p.origin?C=w.pathname+w.search+w.hash:E=!0}let _=Ph(C,{relative:o}),f=Gh(C,{replace:l,state:a,target:u,preventScrollReset:m,relative:o});function d(p){r&&r(p),p.defaultPrevented||f(p)}return s("a",{...y,href:S?g:_,onClick:E||i?r:d,ref:n,target:u})});var Fu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Fu||(Fu={}));var bu;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(bu||(bu={}));function Gh(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:l}=t===void 0?{}:t,a=$r(),u=yi(),c=Xd(e,{relative:l});return k.exports.useCallback(m=>{if(Vh(m,n)){m.preventDefault();let y=r!==void 0?r:Lr(u)===Lr(c);a(e,{replace:y,state:o,preventScrollReset:i,relative:l})}},[u,a,c,r,o,n,e,i,l])}/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Qh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Q=(e,t)=>{const n=k.exports.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:i=2,absoluteStrokeWidth:l,className:a="",children:u,...c},m)=>k.exports.createElement("svg",{ref:m,...Qh,width:o,height:o,stroke:r,strokeWidth:l?Number(i)*24/Number(o):i,className:["lucide",`lucide-${Yh(e)}`,a].join(" "),...c},[...t.map(([y,g])=>k.exports.createElement(y,g)),...Array.isArray(u)?u:[u]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=Q("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ol=Q("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zo=Q("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const la=Q("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=Q("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=Q("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=Q("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=Q("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=Q("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=Q("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aa=Q("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=Q("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=Q("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=Q("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=Q("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=Q("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=Q("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const il=Q("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nu=Q("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ll=Q("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=Q("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sa=Q("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=Q("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au=Q("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=Q("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vi=Q("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=Q("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=Q("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu=Q("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function um(e,t,n){return window.go.main.App.CreateChapter(e,t,n)}function cm(e,t,n,r){return window.go.main.App.CreateCharacter(e,t,n,r)}function dm(e,t,n,r,o,i,l){return window.go.main.App.CreateParagraph(e,t,n,r,o,i,l)}function pm(e,t){return window.go.main.App.CreateProject(e,t)}function fm(e){return window.go.main.App.DeleteChapter(e)}function hm(e){return window.go.main.App.DeleteCharacter(e)}function mm(e){return window.go.main.App.DeleteParagraph(e)}function gm(e){return window.go.main.App.DeleteProject(e)}function ym(e,t){return window.go.main.App.DeleteProjectKnownCharacter(e,t)}function vm(e){return window.go.main.App.GenerateBatchAudio(e)}function xm(e){return window.go.main.App.GenerateChapterAudio(e)}function wm(e){return window.go.main.App.GenerateParagraphAudio(e)}function km(e){return window.go.main.App.GetChapter(e)}function Em(e){return window.go.main.App.GetChapters(e)}function Cm(e){return window.go.main.App.GetCharacter(e)}function Sm(e){return window.go.main.App.GetCharacters(e)}function Fm(e){return window.go.main.App.GetParagraph(e)}function bm(e){return window.go.main.App.GetParagraphs(e)}function Nm(e){return window.go.main.App.GetProject(e)}function Am(e){return window.go.main.App.GetProjectKnownCharacters(e)}function Pm(e){return window.go.main.App.GetProjectLLMApiKey(e)}function Dm(e){return window.go.main.App.GetProjectTTSApiKey(e)}function Bm(e){return window.go.main.App.GetProjectTTSAppID(e)}function zm(e){return window.go.main.App.GetProjectTTSToken(e)}function Tm(){return window.go.main.App.GetProjects()}function jm(e){return window.go.main.App.GetVoice(e)}function Lm(){return window.go.main.App.GetVoices()}function _m(e,t,n){return window.go.main.App.Log(e,t,n)}function Mm(e,t){return window.go.main.App.ReorderChapters(e,t)}function Rm(e,t,n){return window.go.main.App.SetKnownCharacterVoice(e,t,n)}function Im(e,t){return window.go.main.App.SetProjectLLMApiKey(e,t)}function Om(e,t){return window.go.main.App.SetProjectTTSApiKey(e,t)}function Um(e,t){return window.go.main.App.SetProjectTTSAppID(e,t)}function $m(e,t){return window.go.main.App.SetProjectTTSToken(e,t)}function Vm(e){return window.go.main.App.SplitParagraph(e)}function Km(e){return window.go.main.App.SplitParagraphPreview(e)}function Wm(e,t,n){return window.go.main.App.UpdateChapter(e,t,n)}function Hm(e,t,n,r){return window.go.main.App.UpdateCharacter(e,t,n,r)}function Gm(e,t,n,r,o,i,l){return window.go.main.App.UpdateCharacterWithDetails(e,t,n,r,o,i,l)}function Qm(e,t,n,r,o,i){return window.go.main.App.UpdateKnownCharacter(e,t,n,r,o,i)}function Ym(e,t){return window.go.main.App.UpdateNarratorVoice(e,t)}function Xm(e,t,n,r,o,i,l,a,u,c,m){return window.go.main.App.UpdateParagraph(e,t,n,r,o,i,l,a,u,c,m)}function Zm(e,t,n){return window.go.main.App.UpdateProject(e,t,n)}function Jm(e,t){return window.go.main.App.UpdateProjectKnownCharacters(e,t)}const H={createProject:async(e,t)=>{try{return await pm(e,t)}catch(n){throw console.error("Failed to create project:",n),n}},getProjects:async()=>{try{return await Tm()||[]}catch(e){throw console.error("Failed to get projects:",e),e}},getProject:async e=>{try{return await Nm(e)}catch(t){throw console.error("Failed to get project:",t),t}},updateProject:async(e,t,n)=>{try{await Zm(e,t,n)}catch(r){throw console.error("Failed to update project:",r),r}},deleteProject:async e=>{try{await gm(e)}catch(t){throw console.error("Failed to delete project:",t),t}},setProjectLLMApiKey:async(e,t)=>{try{await Im(e,t)}catch(n){throw console.error("Failed to set project LLM API key:",n),n}},getProjectLLMApiKey:async e=>{try{return await Pm(e)||""}catch(t){throw console.error("Failed to get project LLM API key:",t),t}},setProjectTTSApiKey:async(e,t)=>{try{await Om(e,t)}catch(n){throw console.error("Failed to set project TTS API key:",n),n}},getProjectTTSApiKey:async e=>{try{return await Dm(e)||""}catch(t){throw console.error("Failed to get project TTS API key:",t),t}},setProjectTTSAppID:async(e,t)=>{try{await Um(e,t)}catch(n){throw console.error("Failed to set project TTS App ID:",n),n}},getProjectTTSAppID:async e=>{try{return await Bm(e)||""}catch(t){throw console.error("Failed to get project TTS App ID:",t),t}},setProjectTTSToken:async(e,t)=>{try{await $m(e,t)}catch(n){throw console.error("Failed to set project TTS Token:",n),n}},getProjectTTSToken:async e=>{try{return await zm(e)||""}catch(t){throw console.error("Failed to get project TTS Token:",t),t}},getProjectKnownCharacters:async e=>{try{return await Am(e)||[]}catch(t){throw console.error("Failed to get project known characters:",t),t}},updateProjectKnownCharacters:async(e,t)=>{try{await Jm(e,t)}catch(n){throw console.error("Failed to update project known characters:",n),n}},deleteProjectKnownCharacter:async(e,t)=>{try{await ym(e,t)}catch(n){throw console.error("Failed to delete project known character:",n),n}},setKnownCharacterVoice:async(e,t,n)=>{try{await Rm(e,t,n)}catch(r){throw console.error("Failed to set known character voice:",r),r}},updateKnownCharacter:async(e,t,n,r,o,i)=>{try{await Qm(e,t,n,r,o,i)}catch(l){throw console.error("Failed to update known character:",l),l}},createChapter:async(e,t,n)=>{try{return await um(e,t,n)}catch(r){throw console.error("Failed to create chapter:",r),r}},getChapters:async e=>{try{return await Em(e)||[]}catch(t){throw console.error("Failed to get chapters:",t),t}},getChapter:async e=>{try{return await km(e)}catch(t){throw console.error("Failed to get chapter:",t),t}},updateChapter:async(e,t,n)=>{try{await Wm(e,t,n)}catch(r){throw console.error("Failed to update chapter:",r),r}},deleteChapter:async e=>{try{await fm(e)}catch(t){throw console.error("Failed to delete chapter:",t),t}},reorderChapters:async(e,t)=>{try{await Mm(e,t)}catch(n){throw console.error("Failed to reorder chapters:",n),n}},createParagraph:async(e,t,n,r,o,i,l)=>{try{return await dm(e,t,n,r,o,i,l)}catch(a){throw console.error("Failed to create paragraph:",a),a}},getParagraphs:async e=>{try{return await bm(e)||[]}catch(t){throw console.error("Failed to get paragraphs:",t),t}},getParagraph:async e=>{try{return await Fm(e)}catch(t){throw console.error("Failed to get paragraph:",t),t}},updateParagraph:async(e,t,n,r,o,i,l,a="",u="",c=0,m=0)=>{try{await Xm(e,t,n,r,o,i,l,a,u,c,m)}catch(y){throw console.error("Failed to update paragraph:",y),y}},deleteParagraph:async e=>{try{await mm(e)}catch(t){throw console.error("Failed to delete paragraph:",t),t}},splitParagraph:async e=>{try{return await Vm(e)||[]}catch(t){throw console.error("Failed to split paragraph:",t),t}},splitParagraphPreview:async e=>{try{return await Km(e)||[]}catch(t){throw console.error("Failed to split paragraph preview:",t),t}},generateParagraphAudio:async e=>{try{return await wm(e)}catch(t){throw console.error("Failed to generate paragraph audio:",t),t}},generateBatchAudio:async e=>{try{return await vm(e)||[]}catch(t){throw console.error("Failed to generate batch audio:",t),t}},generateChapterAudio:async e=>{try{return await xm(e)||[]}catch(t){throw console.error("Failed to generate chapter audio:",t),t}},createCharacter:async(e,t,n,r)=>{try{return await cm(e,t,n,r)}catch(o){throw console.error("Failed to create character:",o),o}},getCharacters:async e=>{try{return await Sm(e)||[]}catch(t){throw console.error("Failed to get characters:",t),t}},getCharacter:async e=>{try{return await Cm(e)}catch(t){throw console.error("Failed to get character:",t),t}},updateCharacter:async(e,t,n,r)=>{try{await Hm(e,t,n,r)}catch(o){throw console.error("Failed to update character:",o),o}},updateCharacterWithDetails:async(e,t,n,r,o,i,l)=>{try{await Gm(e,t,n,r,o,i,l)}catch(a){throw console.error("Failed to update character with details:",a),a}},deleteCharacter:async e=>{try{await hm(e)}catch(t){throw console.error("Failed to delete character:",t),t}},updateNarratorVoice:async(e,t)=>{try{await Ym(e,t)}catch(n){throw console.error("Failed to update narrator voice:",n),n}},getVoices:async()=>{try{return await Lm()||[]}catch(e){throw console.error("Failed to get voices:",e),e}},getVoice:async e=>{try{return await jm(e)}catch(t){throw console.error("Failed to get voice:",t),t}},analyzeText:async e=>{throw new Error("Not implemented")},generateAudio:async(e,t,n,r)=>{throw new Error("Not implemented")},log:async(e,t,n)=>{try{await _m(e,t,n)}catch(r){console.error("Failed to send log to backend:",r)}}},qm=()=>{const e=$r(),[t,n]=k.exports.useState([]),[r,o]=k.exports.useState(!1),[i,l]=k.exports.useState(!1),[a,u]=k.exports.useState(!1),[c,m]=k.exports.useState(null),[y,g]=k.exports.useState(null),[S,C]=k.exports.useState({name:"",description:""}),E=async()=>{o(!0);try{const F=await H.getProjects();n(F)}catch(F){console.error("Failed to load projects:",F)}o(!1)};k.exports.useEffect(()=>{E()},[]);const _=async F=>{if(F.preventDefault(),!!S.name.trim()){o(!0);try{await H.createProject(S.name,S.description),C({name:"",description:""}),l(!1),E()}catch(P){console.error("Failed to create project:",P)}o(!1)}},f=F=>{m(F),u(!0)},d=async()=>{if(!!c){o(!0),g(null);try{await H.deleteProject(c.id),u(!1),m(null),E()}catch(F){console.error("Failed to delete project:",F),g("\u5220\u9664\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5")}o(!1)}},p=()=>{u(!1),m(null),g(null)},w=F=>{e(`/project/${F}`)};return h("div",{className:"home-page",children:[h("div",{className:"page-header",children:[h("div",{className:"header-content",children:[s(la,{size:28,className:"header-icon"}),h("div",{children:[s("h1",{children:"\u542C\u58A8\u8BED - \u6709\u58F0\u5C0F\u8BF4\u5236\u4F5C"}),s("p",{children:"\u521B\u5EFA\u3001\u7F16\u8F91\u548C\u7BA1\u7406\u60A8\u7684\u6709\u58F0\u5C0F\u8BF4\u5DE5\u7A0B"})]})]}),h("button",{className:"create-project-btn",onClick:()=>l(!0),disabled:r,children:[s(qd,{size:20}),"\u521B\u5EFA\u65B0\u5DE5\u7A0B"]})]}),s("div",{className:"projects-container",children:s("div",{className:"projects-list",children:r&&t.length===0?h("div",{className:"loading",children:[s("div",{className:"spinner"}),s("p",{children:"\u52A0\u8F7D\u4E2D..."})]}):t.length===0?h("div",{className:"empty-state",children:[s(tm,{size:64}),s("h2",{children:"\u6682\u65E0\u5DE5\u7A0B"}),s("p",{children:"\u70B9\u51FB\u4E0A\u65B9\u6309\u94AE\u521B\u5EFA\u60A8\u7684\u7B2C\u4E00\u4E2A\u6709\u58F0\u5C0F\u8BF4\u5DE5\u7A0B"})]}):t.map((F,P)=>h("div",{className:"project-item",children:[h("div",{className:"project-info",onClick:()=>w(F.id),children:[s("div",{className:"project-index",children:P+1}),h("div",{className:"project-content",children:[s("h3",{children:F.name}),s("p",{className:"project-description",children:F.description||"\u6682\u65E0\u63CF\u8FF0"}),h("div",{className:"project-meta",children:[h("span",{children:["\u521B\u5EFA\u65F6\u95F4: ",new Date(F.createdAt).toLocaleDateString()]}),h("span",{children:["\u66F4\u65B0\u65F6\u95F4: ",new Date(F.updatedAt).toLocaleDateString()]})]})]})]}),h("div",{className:"project-actions",children:[h("button",{className:"btn-primary",onClick:D=>{D.stopPropagation(),w(F.id)},disabled:r,title:"\u6253\u5F00\u9879\u76EE",children:[s(Jd,{size:16}),"\u6253\u5F00"]}),h("button",{className:"btn-danger",onClick:D=>{D.stopPropagation(),f(F)},disabled:r,children:[s(vi,{size:16}),"\u5220\u9664"]})]})]},F.id))})}),i&&s("div",{className:"modal",children:h("div",{className:"modal-content",children:[h("div",{className:"modal-header",children:[s("h2",{children:"\u521B\u5EFA\u65B0\u5DE5\u7A0B"}),s("button",{className:"modal-close",onClick:()=>l(!1),children:"\xD7"})]}),h("form",{onSubmit:_,children:[h("div",{className:"form-group",children:[s("label",{htmlFor:"project-name",children:"\u5DE5\u7A0B\u540D\u79F0"}),s("input",{type:"text",id:"project-name",value:S.name,onChange:F=>C({...S,name:F.target.value}),placeholder:"\u8BF7\u8F93\u5165\u5DE5\u7A0B\u540D\u79F0",required:!0})]}),h("div",{className:"form-group",children:[s("label",{htmlFor:"project-description",children:"\u5DE5\u7A0B\u63CF\u8FF0"}),s("textarea",{id:"project-description",value:S.description,onChange:F=>C({...S,description:F.target.value}),placeholder:"\u8BF7\u8F93\u5165\u5DE5\u7A0B\u63CF\u8FF0",rows:3})]}),h("div",{className:"modal-footer",children:[s("button",{type:"button",className:"btn-secondary",onClick:()=>l(!1),disabled:r,children:"\u53D6\u6D88"}),s("button",{type:"submit",className:"btn-primary",disabled:r,children:"\u786E\u5B9A"})]})]})]})}),a&&c&&s("div",{className:"modal",children:h("div",{className:"modal-content delete-modal",children:[h("div",{className:"modal-header",children:[s("h2",{children:"\u5220\u9664\u5DE5\u7A0B"}),s("button",{className:"modal-close",onClick:p,children:"\xD7"})]}),h("div",{className:"delete-warning",children:[s("div",{className:"warning-icon",children:s("svg",{width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",children:s("path",{d:"M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",stroke:"#EF4444",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),s("h3",{children:"\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u5DE5\u7A0B\u5417\uFF1F"}),s("p",{className:"project-name-highlight",children:c.name}),s("p",{className:"delete-warning-text",children:"\u6B64\u64CD\u4F5C\u65E0\u6CD5\u64A4\u9500\uFF0C\u5DE5\u7A0B\u4E0B\u7684\u6240\u6709\u7AE0\u8282\u3001\u6BB5\u843D\u548C\u89D2\u8272\u6570\u636E\u90FD\u5C06\u88AB\u6C38\u4E45\u5220\u9664\u3002"}),y&&s("p",{className:"delete-error-message",children:y})]}),h("div",{className:"modal-footer",children:[s("button",{type:"button",className:"btn-secondary",onClick:p,disabled:r,children:"\u53D6\u6D88"}),s("button",{type:"button",className:"btn-danger",onClick:d,disabled:r,children:r?"\u5220\u9664\u4E2D...":"\u786E\u8BA4\u5220\u9664"})]})]})}),s("style",{children:`
        * {
          box-sizing: border-box;
        }

        html, body {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .home-page {
          width: 100vw;
          height: 100vh;
          background-color: #151E2B;
          color: #ECF0F1;
          padding: 0;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .page-header {
          flex-shrink: 0;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 20px;
          background: linear-gradient(135deg, #1E2A3A 0%, #1A2432 100%);
          border-bottom: 1px solid #2D3E54;
        }

        .header-content {
          display: flex;
          align-items: center;
          gap: 14px;
          min-width: 0;
        }

        .header-icon {
          color: #00A8FF;
          flex-shrink: 0;
        }

        .page-header h1 {
          margin: 0 0 4px 0;
          font-size: 1.3rem;
          color: #F1F5F9;
          font-weight: 700;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .page-header p {
          margin: 0;
          color: #94A3B8;
          font-size: 0.85rem;
        }

        .projects-container {
          flex: 1;
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
          padding: 20px;
          display: flex;
          flex-direction: column;
          min-height: 0;
        }

        .create-project-btn {
          background: linear-gradient(135deg, #00A8FF 0%, #0088CC 100%);
          color: white;
          border: none;
          padding: 10px 18px;
          border-radius: 10px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(0, 168, 255, 0.3);
          flex-shrink: 0;
        }

        .create-project-btn:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 6px 16px rgba(0, 168, 255, 0.4);
        }

        .create-project-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .projects-list {
          flex: 1;
          overflow-y: auto;
        }

        .project-item {
          background: linear-gradient(145deg, #1E2A3A 0%, #1A2432 100%);
          border-radius: 10px;
          padding: 14px 16px;
          margin-bottom: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
          border: 1px solid #2D3E54;
        }

        .project-item:hover {
          background: linear-gradient(145deg, #253345 0%, #1E2A3A 100%);
          border-color: #00A8FF;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        }

        .project-info {
          flex: 1;
          display: flex;
          gap: 12px;
          align-items: flex-start;
          min-width: 0;
        }

        .project-index {
          min-width: 26px;
          height: 26px;
          background: linear-gradient(135deg, #00A8FF 0%, #0088CC 100%);
          color: white;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 0.8rem;
          box-shadow: 0 2px 8px rgba(0, 168, 255, 0.25);
          flex-shrink: 0;
        }

        .project-content {
          flex: 1;
          min-width: 0;
        }

        .project-content h3 {
          margin: 0 0 4px 0;
          color: #F1F5F9;
          font-size: 0.95rem;
          font-weight: 600;
        }

        .project-description {
          margin: 0 0 6px 0;
          color: #94A3B8;
          font-size: 0.85rem;
          line-height: 1.5;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        .project-meta {
          display: flex;
          gap: 12px;
          font-size: 0.75rem;
          color: #64748B;
        }

        .project-actions {
          display: flex;
          gap: 6px;
          align-items: center;
          flex-shrink: 0;
        }

        .btn-primary,
        .btn-secondary,
        .btn-danger {
          padding: 8px 14px;
          border: none;
          border-radius: 8px;
          font-size: 0.85rem;
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

        .loading {
          text-align: center;
          padding: 40px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #64748B;
          flex: 1;
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

        .empty-state {
          text-align: center;
          padding: 40px 20px;
          color: #64748B;
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
        }

        .empty-state h2 {
          color: #E2E8F0;
          margin: 20px 0 8px;
          font-size: 1.05rem;
        }

        .empty-state p {
          margin: 0;
        }

        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          backdrop-filter: blur(6px);
          padding: 20px;
          box-sizing: border-box;
        }

        .modal-content {
          background: linear-gradient(145deg, #1E2A3A 0%, #1A2432 100%);
          border-radius: 14px;
          width: 100%;
          max-width: 520px;
          max-height: 90vh;
          overflow: hidden;
          border: 1px solid #2D3E54;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
          display: flex;
          flex-direction: column;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 20px;
          border-bottom: 1px solid #2D3E54;
          flex-shrink: 0;
        }

        .modal-header h2 {
          margin: 0;
          color: #E2E8F0;
          font-size: 1.1rem;
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
          font-size: 28px;
          line-height: 1;
          flex-shrink: 0;
        }

        .modal-close:hover {
          background-color: #334155;
          color: #E2E8F0;
        }

        .modal-content form {
          padding: 20px;
          overflow-y: auto;
          flex: 1;
        }

        .form-group {
          margin-bottom: 16px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          color: #94A3B8;
          font-weight: 500;
          font-size: 0.88rem;
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
          min-height: 100px;
          resize: vertical;
          font-family: inherit;
        }

        .modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
          padding: 14px 20px;
          border-top: 1px solid #2D3E54;
          flex-shrink: 0;
        }

        .delete-modal .modal-content {
          max-width: 460px;
        }

        .delete-warning {
          padding: 20px;
          text-align: center;
        }

        .warning-icon {
          margin-bottom: 16px;
          display: flex;
          justify-content: center;
        }

        .warning-icon svg {
          color: #EF4444;
        }

        .delete-warning h3 {
          margin: 0 0 8px 0;
          color: #E2E8F0;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .project-name-highlight {
          margin: 0 0 12px 0;
          color: #00A8FF;
          font-size: 1rem;
          font-weight: 600;
          word-break: break-all;
        }

        .delete-warning-text {
          margin: 0;
          color: #94A3B8;
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .delete-error-message {
          margin: 16px 0 0 0;
          color: #EF4444;
          font-size: 0.85rem;
          background: rgba(239, 68, 68, 0.1);
          padding: 10px 14px;
          border-radius: 8px;
          border: 1px solid rgba(239, 68, 68, 0.3);
        }
      `})]})},tp=({isOpen:e,title:t,message:n,confirmText:r="\u786E\u5B9A",cancelText:o="\u53D6\u6D88",type:i="warning",onConfirm:l,onCancel:a})=>{if(!e)return null;const u=()=>{switch(i){case"danger":return s(ol,{size:28,className:"text-red-500"});case"warning":return s(ol,{size:28,className:"text-yellow-500"});case"info":return s(Jh,{size:28,className:"text-blue-500"});default:return s(ol,{size:28,className:"text-yellow-500"})}},c=()=>{switch(i){case"danger":return"btn-danger";case"warning":return"btn-primary";case"info":return"btn-primary";default:return"btn-primary"}};return s("div",{className:"confirm-modal-overlay",onClick:a,children:h("div",{className:"confirm-modal-content",onClick:m=>m.stopPropagation(),children:[h("div",{className:"confirm-modal-header",children:[h("div",{className:"confirm-modal-title",children:[u(),s("h2",{children:t})]}),s("button",{className:"modal-close",onClick:a,children:s(Vt,{size:24})})]}),s("div",{className:"confirm-modal-body",children:s("p",{className:"confirm-message",children:n})}),h("div",{className:"confirm-modal-footer",children:[s("button",{className:"btn-secondary",onClick:a,children:o}),s("button",{className:c(),onClick:l,children:r})]}),s("style",{children:`
          .confirm-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            backdrop-filter: blur(6px);
            padding: 20px;
            box-sizing: border-box;
          }

          .confirm-modal-content {
            background: linear-gradient(145deg, #1E2A3A 0%, #151E2B 100%);
            border-radius: 16px;
            width: 100%;
            max-width: 480px;
            border: 1px solid #2D3E54;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
            display: flex;
            flex-direction: column;
            overflow: hidden;
          }

          .confirm-modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 24px;
            border-bottom: 1px solid #2D3E54;
            flex-shrink: 0;
          }

          .confirm-modal-title {
            display: flex;
            align-items: center;
            gap: 12px;
            color: #E2E8F0;
          }

          .confirm-modal-title h2 {
            margin: 0;
            font-size: 1.1rem;
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
            flex-shrink: 0;
          }

          .modal-close:hover {
            background-color: #334155;
            color: #E2E8F0;
          }

          .confirm-modal-body {
            padding: 24px;
          }

          .confirm-message {
            margin: 0;
            color: #E2E8F0;
            font-size: 0.95rem;
            line-height: 1.6;
          }

          .confirm-modal-footer {
            display: flex;
            justify-content: flex-end;
            gap: 10px;
            padding: 16px 24px 24px;
            border-top: 1px solid #2D3E54;
            flex-shrink: 0;
          }

          .btn-primary,
          .btn-secondary,
          .btn-danger {
            padding: 9px 18px;
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
            background: #2A3442;
            color: #E2E8F0;
            border: 1px solid #3A4A5C;
          }

          .btn-secondary:hover:not(:disabled) {
            background: #3A4A5C;
            border-color: #4A5A6C;
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
        `})]})})},eg=({projectId:e,onChapterSelect:t})=>{const n=$r(),[r,o]=k.exports.useState([]),[i,l]=k.exports.useState(!1),[a,u]=k.exports.useState(!1),[c,m]=k.exports.useState({title:"",content:""}),[y,g]=k.exports.useState({isOpen:!1,title:"",message:"",type:"warning",onConfirm:()=>{}}),S=async()=>{l(!0);try{const p=await H.getChapters(e);o(p)}catch(p){console.error("Failed to load chapters:",p)}l(!1)};k.exports.useEffect(()=>{S()},[e]);const C=async p=>{if(p.preventDefault(),!!c.title.trim()){l(!0);try{await H.createChapter(e,c.title,c.content),m({title:"",content:""}),u(!1),S()}catch(w){console.error("Failed to create chapter:",w)}l(!1)}},E=p=>{g({isOpen:!0,title:"\u5220\u9664\u7AE0\u8282",message:"\u786E\u5B9A\u8981\u5220\u9664\u6B64\u7AE0\u8282\u5417\uFF1F\u6B64\u64CD\u4F5C\u4E0D\u53EF\u64A4\u9500\u3002",type:"danger",confirmText:"\u5220\u9664",cancelText:"\u53D6\u6D88",onConfirm:async()=>{g(w=>({...w,isOpen:!1})),l(!0);try{await H.deleteChapter(p),S()}catch(w){console.error("Failed to delete chapter:",w)}l(!1)}})},_=(p,w)=>{p.dataTransfer.setData("text/plain",w.toString())},f=p=>{p.preventDefault()},d=async(p,w)=>{p.preventDefault();const F=parseInt(p.dataTransfer.getData("text/plain"));if(F!==w){const P=[...r],[D]=P.splice(F,1);P.splice(w,0,D);const B=P.map(O=>O.id);try{await H.reorderChapters(e,B),o(P)}catch(O){console.error("Failed to reorder chapters:",O)}}};return h("div",{className:"chapter-manager",children:[h("div",{className:"chapter-manager-header",children:[h("div",{className:"header-left",children:[s(aa,{size:20}),s("h2",{children:"\u7AE0\u8282\u7BA1\u7406"})]}),h("button",{className:"btn-primary",onClick:()=>u(!0),disabled:i,children:[s(qd,{size:16}),"\u65B0\u5EFA\u7AE0\u8282"]})]}),s("div",{className:"chapter-list",children:i&&r.length===0?h("div",{className:"loading-state",children:[s("div",{className:"spinner"}),s("p",{children:"\u52A0\u8F7D\u4E2D..."})]}):r.length===0?h("div",{className:"empty-state",children:[s(om,{size:48}),s("h3",{children:"\u6682\u65E0\u7AE0\u8282"}),s("p",{children:"\u70B9\u51FB\u4E0A\u65B9\u6309\u94AE\u521B\u5EFA\u60A8\u7684\u7B2C\u4E00\u4E2A\u7AE0\u8282"})]}):r.map((p,w)=>h("div",{className:"chapter-item",draggable:!0,onDragStart:F=>_(F,w),onDragOver:f,onDrop:F=>d(F,w),children:[h("div",{className:"chapter-info",onClick:()=>n(`/project/${e}/chapter/${p.id}`),children:[s("div",{className:"chapter-index",children:w+1}),h("div",{className:"chapter-content",children:[s("h4",{children:p.title}),h("p",{className:"chapter-preview",children:[p.content.slice(0,50),p.content.length>50?"...":""]}),h("div",{className:"chapter-meta",children:[h("span",{children:["\u521B\u5EFA\u65F6\u95F4: ",new Date(p.createdAt).toLocaleDateString()]}),h("span",{children:["\u66F4\u65B0\u65F6\u95F4: ",new Date(p.updatedAt).toLocaleDateString()]})]})]})]}),h("div",{className:"chapter-actions",children:[s(nm,{size:20,className:"drag-handle"}),h("button",{className:"btn-primary",onClick:F=>{F.stopPropagation(),n(`/project/${e}/chapter/${p.id}`)},disabled:i,title:"\u6253\u5F00\u7AE0\u8282\u7F16\u8F91\u5668",children:[s(Jd,{size:16}),"\u6253\u5F00"]}),h("button",{className:"btn-danger",onClick:F=>{F.stopPropagation(),E(p.id)},disabled:i,children:[s(vi,{size:16}),"\u5220\u9664"]})]})]},p.id))}),a&&s("div",{className:"modal",children:h("div",{className:"modal-content",children:[h("div",{className:"modal-header",children:[s("h2",{children:"\u521B\u5EFA\u65B0\u7AE0\u8282"}),s("button",{className:"modal-close",onClick:()=>u(!1),disabled:i,children:s(Vt,{size:24})})]}),h("form",{onSubmit:C,children:[h("div",{className:"form-group",children:[s("label",{htmlFor:"chapter-title",children:"\u7AE0\u8282\u6807\u9898"}),s("input",{type:"text",id:"chapter-title",value:c.title,onChange:p=>m({...c,title:p.target.value}),placeholder:"\u8BF7\u8F93\u5165\u7AE0\u8282\u6807\u9898",required:!0})]}),h("div",{className:"form-group",children:[s("label",{htmlFor:"chapter-content",children:"\u7AE0\u8282\u5185\u5BB9"}),s("textarea",{id:"chapter-content",value:c.content,onChange:p=>m({...c,content:p.target.value}),placeholder:"\u8BF7\u8F93\u5165\u7AE0\u8282\u5185\u5BB9",rows:6})]}),h("div",{className:"modal-footer",children:[s("button",{type:"button",className:"btn-secondary",onClick:()=>u(!1),disabled:i,children:"\u53D6\u6D88"}),s("button",{type:"submit",className:"btn-primary",disabled:i,children:"\u786E\u5B9A"})]})]})]})}),s(tp,{isOpen:y.isOpen,title:y.title,message:y.message,type:y.type,confirmText:y.confirmText,cancelText:y.cancelText,onConfirm:y.onConfirm,onCancel:()=>g(p=>({...p,isOpen:!1}))}),s("style",{children:`
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
      `})]})},tg="neutral",ng="happy",rg="sad",og="angry",ig="surprised",lg="fear",ag="hate",sg="excited",ug="coldness",cg="depressed",dg="lovey-dovey",pg="shy",fg="comfort",hg="tension",mg="tender",gg="storytelling",yg="radio",vg="magnetic",xg="advertising",wg="vocal-fry",kg="ASMR",Eg="news",Cg="entertainment",Sg="dialect",Fg="chat",bg="warm",Ng="affectionate",Ag="authoritative",Pg=[{value:tg,label:"\u4E2D\u6027"},{value:ng,label:"\u5F00\u5FC3"},{value:rg,label:"\u60B2\u4F24"},{value:og,label:"\u751F\u6C14"},{value:ig,label:"\u60CA\u8BB6"},{value:lg,label:"\u6050\u60E7"},{value:ag,label:"\u538C\u6076"},{value:sg,label:"\u6FC0\u52A8"},{value:ug,label:"\u51B7\u6F20"},{value:cg,label:"\u6CAE\u4E27"},{value:dg,label:"\u6492\u5A07"},{value:pg,label:"\u5BB3\u7F9E"},{value:fg,label:"\u5B89\u6170\u9F13\u52B1"},{value:hg,label:"\u5486\u54EE/\u7126\u6025"},{value:mg,label:"\u6E29\u67D4"},{value:gg,label:"\u8BB2\u6545\u4E8B/\u81EA\u7136\u8BB2\u8FF0"},{value:yg,label:"\u60C5\u611F\u7535\u53F0"},{value:vg,label:"\u78C1\u6027"},{value:xg,label:"\u5E7F\u544A\u8425\u9500"},{value:wg,label:"\u6C14\u6CE1\u97F3"},{value:kg,label:"\u4F4E\u8BED(ASMR)"},{value:Eg,label:"\u65B0\u95FB\u64AD\u62A5"},{value:Cg,label:"\u5A31\u4E50\u516B\u5366"},{value:Sg,label:"\u65B9\u8A00"}],Dg=[...Pg,{value:Fg,label:"\u5BF9\u8BDD/\u95F2\u804A"},{value:bg,label:"\u6E29\u6696"},{value:Ng,label:"\u6DF1\u60C5"},{value:Ag,label:"\u6743\u5A01"}],Bg="male",zg="female",Tg="unknown",jg={male:"\u7537",female:"\u5973",unknown:"\u672A\u77E5"},Lg="child",_g="teen",Mg="adult",Rg="senior",Ig="unknown",Og={child:"\u513F\u7AE5",teen:"\u5C11\u5E74",adult:"\u6210\u4EBA",senior:"\u8001\u5E74",unknown:"\u672A\u77E5"},al=0,po=0;function Ug(e){return e<=0?.5+(e+50)/100*.5:1+e/100*1}function $g(e){return e<=0?.5+(e+50)/100*.5:1+e/100*1}const Vg={general:"\u901A\u7528\u573A\u666F",audiobook:"\u6709\u58F0\u9605\u8BFB",video:"\u89C6\u9891\u914D\u97F3",roleplay:"\u89D2\u8272\u626E\u6F14",customer_service:"\u5BA2\u670D\u573A\u666F",multilingual:"\u591A\u8BED\u79CD"},Kg={male:"\u7537",female:"\u5973"},sl=12,Wg=({projectId:e})=>{const[t,n]=k.exports.useState([]),[r,o]=k.exports.useState([]),[i,l]=k.exports.useState(!1),[a,u]=k.exports.useState(""),[c,m]=k.exports.useState(1),[y,g]=k.exports.useState(null),[S,C]=k.exports.useState(""),[E,_]=k.exports.useState(""),[f,d]=k.exports.useState(""),[p,w]=k.exports.useState(""),F=k.exports.useMemo(()=>{const x={};return r.forEach(R=>{const T=R.category||"other";x[T]||(x[T]=[]),x[T].push(R)}),x},[r]);k.exports.useEffect(()=>{e&&P()},[e]),k.exports.useEffect(()=>{m(1)},[a]);const P=async()=>{l(!0);try{const[x,R]=await Promise.all([H.getCharacters(e),H.getVoices()]);n(x),o(R)}catch(x){console.error("Failed to load data:",x)}l(!1)},D=k.exports.useMemo(()=>{let x=t;if(a.trim()){const R=a.toLowerCase().trim();x=x.filter(T=>!!(T.name.toLowerCase().includes(R)||T.aliases&&T.aliases.some(Y=>Y.toLowerCase().includes(R))||T.description&&T.description.toLowerCase().includes(R)))}return x.sort((R,T)=>{const Y=R.lastSeenAt||0;return(T.lastSeenAt||0)-Y}),x},[t,a]),B=Math.ceil(D.length/sl),O=k.exports.useMemo(()=>{const x=(c-1)*sl,R=x+sl;return D.slice(x,R)},[D,c]),M=async x=>{if(x!==0){l(!0);try{if(x<0){const R=t.find(T=>T.id===x);R&&await H.deleteProjectKnownCharacter(e,R.name)}else await H.deleteCharacter(x);P()}catch(R){console.error("Failed to delete character:",R)}l(!1)}},le=async(x,R)=>{try{if(n(T=>T.map(Y=>Y.id===x?{...Y,voiceId:R}:Y)),x===0)await H.updateNarratorVoice(e,R);else if(x<0){const T=t.find(Y=>Y.id===x);T&&await H.setKnownCharacterVoice(e,T.name,R)}else{const T=t.find(Y=>Y.id===x);T&&await H.updateCharacter(x,T.name,T.description,R)}}catch(T){console.error("Failed to set character voice:",T),P()}},oe=x=>{g(x.id),C((x.aliases||[]).join(", ")),_(x.gender||""),d(x.age||""),w(x.description||"")},Te=async x=>{try{const R=S.split(",").map(T=>T.trim()).filter(T=>T.length>0);n(T=>T.map(Y=>Y.id===x.id?{...Y,description:p,gender:E,age:f,aliases:R}:Y)),x.id<0?await H.updateKnownCharacter(e,x.name,p,E,f,R):await H.updateCharacterWithDetails(x.id,x.name,p,x.voiceId,E,f,R),kt()}catch(R){console.error("Failed to save character:",R),P()}},kt=()=>{g(null),C(""),_(""),d(""),w("")},K=x=>jg[x]||"\u672A\u77E5",de=x=>Og[x]||"\u672A\u77E5",Ge=x=>!x||x.length===0?"-":x.join(", "),z=x=>!x||x.length===0?"-":x.length<=2?x.join(", "):`${x[0]}, ${x[1]}... (${x.length}\u7AE0)`,I=x=>x?new Date(x*1e3).toLocaleString("zh-CN",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}):"-";return h("div",{className:"role-manager",children:[h("div",{className:"role-manager-header",children:[h("div",{className:"header-left",children:[s("h2",{children:"\u89D2\u8272\u7BA1\u7406"}),D.length>0&&s("span",{className:"count-badge",children:D.length})]}),h("div",{className:"search-box",children:[s(am,{size:14}),s("input",{type:"text",placeholder:"\u641C\u7D22\u89D2\u8272...",value:a,onChange:x=>u(x.target.value),className:"search-input"}),a&&s("button",{className:"btn-clear-search",onClick:()=>u(""),children:s(Vt,{size:12})})]})]}),s("div",{className:"role-table-container",children:i&&t.length===0?h("div",{className:"loading-state",children:[s("div",{className:"spinner"}),s("p",{children:"\u52A0\u8F7D\u4E2D..."})]}):D.length===0?h("div",{className:"empty-state",children:[s("h3",{children:"\u6682\u65E0\u89D2\u8272"}),s("p",{children:"\u4F7F\u7528 LLM \u89E3\u6790\u6587\u672C\u540E\uFF0C\u8BC6\u522B\u5230\u7684\u89D2\u8272\u4F1A\u663E\u793A\u5728\u8FD9\u91CC"})]}):h(ra,{children:[s("div",{className:"table-scroll-wrapper",children:h("table",{className:"role-table",children:[s("thead",{children:h("tr",{children:[s("th",{className:"col-name",children:"\u59D3\u540D"}),s("th",{className:"col-chapters",children:"\u51FA\u73B0\u7AE0\u8282"}),s("th",{className:"col-aliases",children:"\u522B\u540D"}),s("th",{className:"col-gender",children:"\u6027\u522B"}),s("th",{className:"col-age",children:"\u5E74\u9F84"}),s("th",{className:"col-voice",children:"\u97F3\u8272"}),s("th",{className:"col-desc",children:"\u7B80\u4ECB"}),s("th",{className:"col-updated",children:"\u6700\u540E\u53D1\u73B0"}),s("th",{className:"col-actions",children:"\u64CD\u4F5C"})]})}),s("tbody",{children:O.map(x=>{var R;return s(fa.Fragment,{children:h("tr",{className:x.id===0?"narrator-row":"character-row",children:[s("td",{className:"col-name",children:h("div",{className:"name-cell",children:[s("span",{className:"character-name",children:x.name}),x.id===0&&s("span",{className:"badge narrator-badge",children:"\u7CFB\u7EDF"}),x.id!==0&&x.id<0&&s("span",{className:"badge ai-badge",children:"AI\u8BC6\u522B"})]})}),s("td",{className:"col-chapters",children:s("span",{className:"chapter-list",title:(R=x.chapterNames)==null?void 0:R.join(", "),children:z(x.chapterNames)})}),s("td",{className:"col-aliases",children:y===x.id?s("input",{type:"text",className:"edit-input-inline",value:S,onChange:T=>C(T.target.value),placeholder:"\u591A\u4E2A\u522B\u540D\u7528\u9017\u53F7\u5206\u9694"}):s("span",{className:"alias-list",title:Ge(x.aliases),children:Ge(x.aliases)})}),s("td",{className:"col-gender",children:y===x.id?h("select",{className:"edit-select-inline",value:E,onChange:T=>_(T.target.value),children:[s("option",{value:"",children:"\u9009\u62E9\u6027\u522B"}),s("option",{value:Bg,children:"\u7537"}),s("option",{value:zg,children:"\u5973"}),s("option",{value:Tg,children:"\u672A\u77E5"})]}):s("span",{className:"gender-badge",children:K(x.gender)})}),s("td",{className:"col-age",children:y===x.id?h("select",{className:"edit-select-inline",value:f,onChange:T=>d(T.target.value),children:[s("option",{value:"",children:"\u9009\u62E9\u5E74\u9F84\u6BB5"}),s("option",{value:Lg,children:"\u513F\u7AE5"}),s("option",{value:_g,children:"\u5C11\u5E74"}),s("option",{value:Mg,children:"\u6210\u4EBA"}),s("option",{value:Rg,children:"\u8001\u5E74"}),s("option",{value:Ig,children:"\u672A\u77E5"})]}):s("span",{className:"age-badge",children:de(x.age)})}),s("td",{className:"col-voice",children:h("select",{className:"voice-select-inline",value:x.voiceId||"",onChange:T=>le(x.id,T.target.value),disabled:i,children:[s("option",{value:"",children:"\u9009\u62E9\u97F3\u8272"}),Object.entries(F).map(([T,Y])=>s("optgroup",{label:Vg[T]||T,children:Y.map(pe=>h("option",{value:pe.id,children:[pe.name," ",pe.gender?`(${Kg[pe.gender]||pe.gender})`:""]},pe.id))},T))]})}),s("td",{className:"col-desc",children:y===x.id?s("input",{type:"text",className:"edit-input-inline",value:p,onChange:T=>w(T.target.value),placeholder:"\u89D2\u8272\u7B80\u4ECB"}):s("span",{className:"description-text",title:x.description,children:x.description||"-"})}),s("td",{className:"col-updated",children:s("span",{className:"last-seen",children:I(x.lastSeenAt)})}),s("td",{className:"col-actions",children:y===x.id?h("div",{className:"edit-actions-inline",children:[s("button",{className:"btn-ghost btn-small",onClick:kt,children:s(Vt,{size:12})}),s("button",{className:"btn-primary btn-small",onClick:()=>Te(x),children:s(Nu,{size:12})})]}):s("div",{className:"actions-cell",children:x.id!==0&&h(ra,{children:[s("button",{className:"btn-icon btn-edit",onClick:()=>oe(x),disabled:i,title:"\u7F16\u8F91",children:s(Nu,{size:14})}),s("button",{className:"btn-icon btn-danger",onClick:()=>M(x.id),disabled:i,title:"\u5220\u9664",children:s(vi,{size:14})})]})})})]})},`${x.id}-${x.name}`)})})]})}),B>1&&h("div",{className:"pagination",children:[s("button",{className:"btn-page",onClick:()=>m(x=>Math.max(1,x-1)),disabled:c===1,children:s(qh,{size:14})}),h("span",{className:"page-info",children:["\u7B2C ",c," / ",B," \u9875"]}),s("button",{className:"btn-page",onClick:()=>m(x=>Math.min(B,x+1)),disabled:c===B,children:s(em,{size:14})})]})]})}),s("style",{children:`
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
          padding: 10px 16px;
          background: linear-gradient(135deg, #1E2A3A 0%, #1A2432 100%);
          border-bottom: 1px solid #2D3E54;
          gap: 12px;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #CBD5E1;
          flex-shrink: 0;
        }

        .header-left h2 {
          margin: 0;
          font-size: 0.95rem;
          font-weight: 600;
        }

        .count-badge {
          padding: 1px 8px;
          background: #10B981;
          color: white;
          border-radius: 10px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .search-box {
          display: flex;
          align-items: center;
          gap: 6px;
          background-color: #151E2B;
          border: 1px solid #2D3E54;
          border-radius: 6px;
          padding: 4px 10px;
          flex: 1;
          max-width: 320px;
          transition: all 0.2s ease;
        }

        .search-box:focus-within {
          border-color: #00A8FF;
          box-shadow: 0 0 0 2px rgba(0, 168, 255, 0.2);
        }

        .search-box svg {
          color: #64748B;
          flex-shrink: 0;
        }

        .search-input {
          flex: 1;
          background: transparent;
          border: none;
          color: #E2E8F0;
          font-size: 0.85rem;
          outline: none;
        }

        .search-input::placeholder {
          color: #64748B;
        }

        .btn-clear-search {
          background: transparent;
          border: none;
          color: #64748B;
          cursor: pointer;
          padding: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          transition: all 0.2s ease;
        }

        .btn-clear-search:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #E2E8F0;
        }

        .role-table-container {
          flex: 1;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          background-color: #151E2B;
        }

        .table-scroll-wrapper {
          flex: 1;
          overflow-x: auto;
          overflow-y: auto;
        }

        .table-scroll-wrapper::-webkit-scrollbar {
          height: 8px;
          width: 8px;
        }

        .table-scroll-wrapper::-webkit-scrollbar-track {
          background: #1A2432;
        }

        .table-scroll-wrapper::-webkit-scrollbar-thumb {
          background: #334155;
          border-radius: 4px;
        }

        .table-scroll-wrapper::-webkit-scrollbar-thumb:hover {
          background: #475569;
        }

        .loading-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 32px;
          color: #64748B;
        }

        .spinner {
          width: 24px;
          height: 24px;
          border: 2px solid #334155;
          border-top: 2px solid #10B981;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 10px;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .empty-state {
          text-align: center;
          padding: 32px;
          color: #64748B;
        }

        .empty-state h3 {
          margin: 12px 0 6px;
          color: #E2E8F0;
          font-size: 1rem;
        }

        .role-table {
          width: 100%;
          border-collapse: collapse;
          flex: 1;
        }

        .role-table thead {
          position: sticky;
          top: 0;
          z-index: 10;
          background: #1A2432;
        }

        .role-table th {
          padding: 8px 12px;
          text-align: left;
          font-size: 0.72rem;
          font-weight: 600;
          color: #94A3B8;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border-bottom: 1px solid #2D3E54;
        }

        .role-table td {
          padding: 8px 12px;
          border-bottom: 1px solid #243447;
          vertical-align: middle;
        }

        .role-table tbody tr {
          transition: background-color 0.15s ease;
        }

        .role-table tbody tr:hover {
          background-color: rgba(255, 255, 255, 0.03);
        }

        .narrator-row {
          background-color: rgba(0, 168, 255, 0.04);
        }

        /* \u5217\u5BBD - \u66F4\u7D27\u51D1 */
        .col-name { width: 120px; min-width: 120px; }
        .col-chapters { width: 90px; min-width: 90px; }
        .col-aliases { width: 100px; min-width: 100px; }
        .col-gender { width: 60px; min-width: 60px; }
        .col-age { width: 60px; min-width: 60px; }
        .col-voice { width: 130px; min-width: 130px; }
        .col-desc { width: 160px; min-width: 160px; }
        .col-updated { width: 80px; min-width: 80px; }
        .col-actions { width: 80px; min-width: 80px; }

        .name-cell {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .character-name {
          color: #F1F5F9;
          font-weight: 500;
          font-size: 0.85rem;
        }

        .badge {
          padding: 1px 6px;
          border-radius: 3px;
          font-size: 0.68rem;
          font-weight: 500;
          flex-shrink: 0;
        }

        .narrator-badge {
          background-color: rgba(0, 168, 255, 0.15);
          color: #00A8FF;
        }

        .ai-badge {
          background-color: rgba(16, 185, 129, 0.15);
          color: #10B981;
        }

        .chapter-list {
          color: #94A3B8;
          font-size: 0.8rem;
        }

        .alias-list {
          color: #94A3B8;
          font-size: 0.8rem;
        }

        .gender-badge,
        .age-badge {
          color: #94A3B8;
          font-size: 0.8rem;
        }

        .voice-select-inline {
          width: 100%;
          padding: 4px 8px;
          background-color: #151E2B;
          border: 1px solid #2D3E54;
          border-radius: 4px;
          color: #E2E8F0;
          font-size: 0.78rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .voice-select-inline:hover {
          border-color: #00A8FF;
        }

        .voice-select-inline:focus {
          outline: none;
          border-color: #00A8FF;
          box-shadow: 0 0 0 2px rgba(0, 168, 255, 0.2);
        }

        .description-text {
          color: #94A3B8;
          font-size: 0.8rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .last-seen {
          color: #64748B;
          font-size: 0.78rem;
        }

        .actions-cell {
          display: flex;
          gap: 4px;
        }

        .edit-actions-inline {
          display: flex;
          gap: 4px;
        }

        .btn-icon {
          width: 24px;
          height: 24px;
          padding: 0;
          border: none;
          border-radius: 4px;
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

        .btn-icon.btn-edit:hover:not(:disabled),
        .btn-icon.btn-danger:hover:not(:disabled) {
          background: rgba(0, 168, 255, 0.15);
          color: #00A8FF;
        }

        .btn-icon:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .btn-ghost {
          padding: 4px 8px;
          border: 1px solid transparent;
          background: transparent;
          color: #94A3B8;
          border-radius: 4px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.78rem;
          transition: all 0.2s ease;
        }

        .btn-ghost:hover {
          background: rgba(255, 255, 255, 0.06);
          color: #E2E8F0;
        }

        .btn-ghost.btn-small {
          padding: 3px 6px;
        }

        .btn-primary {
          padding: 4px 8px;
          border: none;
          background: linear-gradient(135deg, #00A8FF 0%, #0088CC 100%);
          color: white;
          border-radius: 4px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.78rem;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .btn-primary:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 168, 255, 0.35);
        }

        .btn-primary.btn-small {
          padding: 3px 6px;
        }

        .edit-input-inline {
          width: 100%;
          padding: 4px 8px;
          background-color: #151E2B;
          border: 1px solid #2D3E54;
          border-radius: 4px;
          color: #E2E8F0;
          font-size: 0.78rem;
        }

        .edit-input-inline:focus {
          outline: none;
          border-color: #00A8FF;
          box-shadow: 0 0 0 2px rgba(0, 168, 255, 0.2);
        }

        .edit-select-inline {
          width: 100%;
          padding: 4px 8px;
          background-color: #151E2B;
          border: 1px solid #2D3E54;
          border-radius: 4px;
          color: #E2E8F0;
          font-size: 0.78rem;
        }

        .edit-select-inline:focus {
          outline: none;
          border-color: #00A8FF;
          box-shadow: 0 0 0 2px rgba(0, 168, 255, 0.2);
        }

        .pagination {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 10px 16px;
          border-top: 1px solid #243447;
          background: #1A2432;
        }

        .btn-page {
          width: 26px;
          height: 26px;
          padding: 0;
          border: 1px solid #2D3E54;
          background: #151E2B;
          color: #94A3B8;
          border-radius: 4px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .btn-page:hover:not(:disabled) {
          border-color: #00A8FF;
          color: #E2E8F0;
        }

        .btn-page:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .page-info {
          color: #94A3B8;
          font-size: 0.8rem;
        }
      `})]})},Hg=()=>{const{id:e}=Yd(),t=$r(),[n,r]=k.exports.useState(null),[o,i]=k.exports.useState(!1),[l,a]=k.exports.useState(!1),[u,c]=k.exports.useState(!1),[m,y]=k.exports.useState(!1),[g,S]=k.exports.useState({name:"",description:""}),[C,E]=k.exports.useState(""),[_,f]=k.exports.useState(""),[d,p]=k.exports.useState(""),[w,F]=k.exports.useState(""),[P,D]=k.exports.useState(!1),[B,O]=k.exports.useState(!1);k.exports.useEffect(()=>{e&&M(parseInt(e))},[e]);const M=async K=>{i(!0);try{const de=await H.getProject(K);r(de),de&&(S({name:de.name,description:de.description}),E(de.llmApiKey||""),f(de.ttsApiKey||""),p(de.ttsAppId||""),F(de.ttsToken||""))}catch(de){console.error("Failed to load project:",de)}i(!1)},le=async()=>{if(!!e){i(!0);try{await H.updateProject(parseInt(e),g.name,g.description),a(!1),M(parseInt(e))}catch(K){console.error("Failed to update project:",K)}i(!1)}},oe=async()=>{if(!!e){D(!0);try{await H.setProjectLLMApiKey(parseInt(e),C),c(!1),M(parseInt(e))}catch(K){console.error("Failed to save LLM API key:",K)}D(!1)}},Te=async()=>{if(!!e){O(!0);try{await H.setProjectTTSApiKey(parseInt(e),_),await H.setProjectTTSAppID(parseInt(e),d),await H.setProjectTTSToken(parseInt(e),w),y(!1),M(parseInt(e))}catch(K){console.error("Failed to save TTS config:",K)}O(!1)}},kt=K=>K?K.length<=8?K:K.slice(0,4)+"..."+K.slice(-4):"\u672A\u8BBE\u7F6E";return o&&!n?s("div",{className:"project-details-page",children:h("div",{className:"loading-container",children:[s("div",{className:"spinner"}),s("p",{children:"\u52A0\u8F7D\u4E2D..."})]})}):n?h("div",{className:"project-details-page",children:[s("header",{className:"page-header",children:h("div",{className:"header-inner",children:[h("div",{className:"header-left",children:[h(gr,{to:"/",className:"back-button",children:[s(Zo,{size:18}),s("span",{children:"\u8FD4\u56DE"})]}),s("div",{className:"divider"}),h("div",{className:"project-title",children:[s(la,{size:20,className:"title-icon"}),h("div",{children:[s("h1",{children:n.name}),s("p",{className:"subtitle",children:"\u6709\u58F0\u5C0F\u8BF4\u5236\u4F5C\u5DE5\u7A0B"})]})]})]}),s("div",{className:"header-right",children:s("button",{className:"btn-secondary",onClick:()=>t("/"),children:"\u8FD4\u56DE\u9996\u9875"})})]})}),s("main",{className:"main-content",children:h("div",{className:"content-wrapper",children:[h("div",{className:"left-column",children:[h("section",{className:"project-info-section",children:[h("div",{className:"section-header",children:[h("h2",{children:[s(ep,{size:18}),"\u9879\u76EE\u6982\u89C8"]}),!l&&s("button",{className:"btn-ghost",onClick:()=>a(!0),disabled:o,children:"\u7F16\u8F91\u4FE1\u606F"})]}),s("div",{className:"project-info-card",children:l?h("div",{className:"project-info-edit",children:[h("div",{className:"form-grid",children:[h("div",{className:"form-group full-width",children:[s("label",{htmlFor:"project-name",children:"\u9879\u76EE\u540D\u79F0"}),s("input",{id:"project-name",type:"text",value:g.name,onChange:K=>S({...g,name:K.target.value}),placeholder:"\u8BF7\u8F93\u5165\u9879\u76EE\u540D\u79F0",disabled:o})]}),h("div",{className:"form-group full-width",children:[s("label",{htmlFor:"project-description",children:"\u9879\u76EE\u63CF\u8FF0"}),s("textarea",{id:"project-description",value:g.description,onChange:K=>S({...g,description:K.target.value}),placeholder:"\u8BF7\u8F93\u5165\u9879\u76EE\u63CF\u8FF0",rows:2,disabled:o})]})]}),h("div",{className:"form-actions",children:[h("button",{className:"btn-secondary",onClick:()=>{a(!1),S({name:n.name,description:n.description})},disabled:o,children:[s(Vt,{size:16}),"\u53D6\u6D88"]}),h("button",{className:"btn-primary",onClick:le,disabled:o,children:[s(sa,{size:16}),"\u4FDD\u5B58\u66F4\u6539"]})]})]}):h("div",{className:"project-info-content",children:[h("div",{className:"info-grid",children:[h("div",{className:"info-item",children:[s("div",{className:"info-label",children:"\u9879\u76EE\u540D\u79F0"}),s("div",{className:"info-value",children:n.name})]}),h("div",{className:"info-item",children:[s("div",{className:"info-label",children:"\u9879\u76EE\u63CF\u8FF0"}),s("div",{className:"info-value",children:n.description||"\u6682\u65E0\u63CF\u8FF0"})]})]}),h("div",{className:"meta-row",children:[h("div",{className:"meta-item",children:[s(Zh,{size:14}),h("span",{children:["\u521B\u5EFA\u4E8E ",new Date(n.createdAt).toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric"})]})]}),h("div",{className:"meta-item",children:[s(Zd,{size:14}),h("span",{children:["\u66F4\u65B0\u4E8E ",new Date(n.updatedAt).toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric"})]})]})]})]})})]}),h("section",{className:"api-key-section",children:[s("div",{className:"section-header",children:h("h2",{children:[s(rm,{size:18}),"\u57FA\u7840\u914D\u7F6E"]})}),h("div",{className:"api-key-card",children:[h("div",{className:"api-key-item",children:[s("div",{className:"api-key-header",children:s("h3",{children:"\u6587\u672C\u5927\u6A21\u578B"})}),u?s("div",{className:"api-key-edit-row",children:s("div",{className:"form-group",children:s("input",{type:"password",value:C,onChange:K=>E(K.target.value),placeholder:"\u8BF7\u8F93\u5165\u6587\u672C\u5927\u6A21\u578B API Key",disabled:P})})}):h("div",{className:"api-key-status-row",children:[s("div",{className:`status-indicator ${n.llmApiKey?"active":"inactive"}`,children:n.llmApiKey?"\u5DF2\u914D\u7F6E":"\u672A\u914D\u7F6E"}),n.llmApiKey&&s("span",{className:"api-key-masked",children:kt(n.llmApiKey)})]})]}),s("div",{className:"api-key-divider"}),h("div",{className:"api-key-item",children:[s("div",{className:"api-key-header",children:s("h3",{children:"\u8BED\u97F3\u5927\u6A21\u578B"})}),m?h("div",{className:"api-key-edit-full",children:[h("div",{className:"form-group",children:[s("label",{htmlFor:"tts-api-key",children:"API Key"}),s("input",{id:"tts-api-key",type:"password",value:_,onChange:K=>f(K.target.value),placeholder:"\u8BF7\u8F93\u5165\u8BED\u97F3\u5927\u6A21\u578B API Key",disabled:B})]}),h("div",{className:"form-group",children:[s("label",{htmlFor:"tts-app-id",children:"App ID"}),s("input",{id:"tts-app-id",type:"text",value:d,onChange:K=>p(K.target.value),placeholder:"\u8BF7\u8F93\u5165\u8BED\u97F3\u5927\u6A21\u578B App ID",disabled:B})]}),h("div",{className:"form-group",children:[s("label",{htmlFor:"tts-token",children:"Token"}),s("input",{id:"tts-token",type:"password",value:w,onChange:K=>F(K.target.value),placeholder:"\u8BF7\u8F93\u5165\u8BED\u97F3\u5927\u6A21\u578B Token",disabled:B})]})]}):s("div",{className:"api-key-status-row",children:s("div",{className:`status-indicator ${n.ttsApiKey||n.ttsAppId||n.ttsToken?"active":"inactive"}`,children:n.ttsApiKey||n.ttsAppId||n.ttsToken?"\u5DF2\u914D\u7F6E":"\u672A\u914D\u7F6E"})})]}),s("div",{className:"api-key-actions",children:!u&&!m?s("button",{className:"btn-ghost",onClick:()=>{c(!0),y(!0)},disabled:o,children:"\u7F16\u8F91\u914D\u7F6E"}):h("div",{className:"form-actions",children:[h("button",{className:"btn-secondary",onClick:()=>{c(!1),y(!1),E(n.llmApiKey||""),f(n.ttsApiKey||""),p(n.ttsAppId||""),F(n.ttsToken||"")},disabled:P||B,children:[s(Vt,{size:16}),"\u53D6\u6D88"]}),h("button",{className:"btn-primary",onClick:async()=>{u&&await oe(),m&&await Te()},disabled:P||B,children:[s(sa,{size:16}),P||B?"\u4FDD\u5B58\u4E2D...":"\u4FDD\u5B58"]})]})})]})]}),h("section",{className:"character-section",children:[s("div",{className:"section-header",children:h("h2",{children:[s(sm,{size:18}),"\u89D2\u8272\u7BA1\u7406"]})}),s("div",{className:"role-manager-wrapper",children:s(Wg,{projectId:parseInt(e||"0")})})]})]}),s("div",{className:"right-column",children:h("section",{className:"chapter-section",children:[s("div",{className:"section-header",children:h("h2",{children:[s(la,{size:18}),"\u7AE0\u8282\u7BA1\u7406"]})}),s("div",{className:"chapter-manager-wrapper",children:s(eg,{projectId:parseInt(e||"0")})})]})})]})}),s("style",{children:`
        * {
          box-sizing: border-box;
        }

        html, body {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .project-details-page {
          background-color: #151E2B;
          color: #ECF0F1;
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        /* \u9876\u90E8\u5BFC\u822A\u680F */
        .page-header {
          flex-shrink: 0;
          width: 100%;
          background: linear-gradient(135deg, #1E2A3A 0%, #253548 100%);
          border-bottom: 1px solid #2D3E54;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
        }

        .header-inner {
          max-width: none;
          margin: 0;
          padding: 12px 20px;
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
          flex-shrink: 0;
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
          flex-shrink: 0;
        }

        /* \u4E3B\u5185\u5BB9\u533A\u57DF */
        .main-content {
          flex: 1;
          overflow-y: auto;
          overflow-x: hidden;
          min-height: 0;
        }

        .content-wrapper {
          max-width: none;
          margin: 0;
          padding: 20px;
          width: 100%;
          min-height: 100%;
          display: grid;
          grid-template-columns: minmax(320px, 1fr) minmax(480px, 2fr);
          gap: 20px;
          align-items: start;
        }

        /* \u5DE6\u4FA7\u5217 */
        .left-column {
          display: flex;
          flex-direction: column;
          gap: 20px;
          min-width: 0;
        }

        /* \u53F3\u4FA7\u5217 */
        .right-column {
          display: flex;
          flex-direction: column;
          gap: 20px;
          min-width: 0;
          min-height: 600px;
        }

        /* \u4F4EDPI\u517C\u5BB9\u6027 */
        @media (max-width: 1200px) {
          .content-wrapper {
            grid-template-columns: 1fr;
            padding: 16px;
            gap: 16px;
          }

          .right-column {
            min-height: 500px;
          }
        }

        @media (max-width: 768px) {
          .content-wrapper {
            padding: 12px;
            gap: 12px;
          }

          .header-inner {
            padding: 10px 16px;
          }

          .project-title h1 {
            font-size: 1rem;
          }
        }

        /* \u533A\u5757\u901A\u7528\u6837\u5F0F */
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 14px;
        }

        .section-header h2 {
          margin: 0;
          font-size: 0.95rem;
          font-weight: 600;
          color: #CBD5E1;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .project-info-section,
        .api-key-section,
        .character-section,
        .chapter-section {
          margin-bottom: 0;
        }

        .character-section {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-height: 0;
        }

        /* \u89D2\u8272\u7BA1\u7406\u5BB9\u5668 */
        .role-manager-wrapper {
          background: #1E2A3A;
          border: 1px solid #2D3E54;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
          min-height: 400px;
          display: flex;
          flex-direction: column;
        }

        /* \u9879\u76EE\u4FE1\u606F\u5361\u7247 */
        .project-info-card {
          background: linear-gradient(145deg, #1E2A3A 0%, #1A2432 100%);
          border: 1px solid #2D3E54;
          border-radius: 12px;
          padding: 18px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
        }

        .project-info-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .info-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        .info-item {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 12px;
        }

        .info-label {
          font-size: 0.85rem;
          font-weight: 500;
          color: #64748B;
          flex-shrink: 0;
          width: 80px;
        }

        .info-value {
          font-size: 0.9rem;
          color: #E2E8F0;
          line-height: 1.5;
          flex: 1;
          min-width: 0;
        }

        .api-key-display {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .api-key-display svg {
          color: #00A8FF;
        }

        .meta-row {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-top: 12px;
          border-top: 1px solid #2D3E54;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          color: #64748B;
        }

        .meta-item svg {
          color: #475569;
        }

        /* API Key \u914D\u7F6E\u5361\u7247 */
        .api-key-card {
          background: linear-gradient(145deg, #1E2A3A 0%, #1A2432 100%);
          border: 1px solid #2D3E54;
          border-radius: 12px;
          padding: 18px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
        }

        .api-key-item {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .api-key-header {
          display: flex;
          align-items: center;
          margin-bottom: 0;
          gap: 12px;
          flex-shrink: 0;
        }

        .api-key-header h3 {
          margin: 0;
          font-size: 0.85rem;
          font-weight: 500;
          color: #64748B;
          width: 90px;
        }

        .api-key-status-row {
          display: flex;
          align-items: center;
          gap: 12px;
          flex: 1;
          justify-content: flex-end;
        }

        .api-key-edit-row {
          display: flex;
          align-items: center;
          gap: 8px;
          flex: 1;
        }

        .api-key-edit-row .form-group {
          flex: 1;
          flex-direction: row;
          align-items: center;
          gap: 0;
        }

        .api-key-edit-full {
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
          width: 100%;
        }

        .api-key-edit-full .form-group {
          flex-direction: column;
          gap: 6px;
        }

        .api-key-edit-full .form-group label {
          color: #94A3B8;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .api-key-divider {
          height: 1px;
          background: linear-gradient(to right, transparent, #2D3E54, transparent);
          margin: 16px 0;
        }

        .api-key-actions {
          display: flex;
          justify-content: flex-end;
          padding-top: 12px;
          border-top: 1px solid #2D3E54;
          margin-top: 8px;
        }

        .status-indicator {
          padding: 4px 12px;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 500;
          flex-shrink: 0;
        }

        .status-indicator.active {
          background: rgba(16, 185, 129, 0.15);
          color: #10B981;
        }

        .status-indicator.inactive {
          background: rgba(148, 163, 184, 0.15);
          color: #94A3B8;
        }

        .api-key-masked {
          color: #00A8FF;
          font-family: 'SF Mono', 'Monaco', 'Consolas', monospace;
          font-size: 0.85rem;
        }

        .help-text {
          margin: 6px 0 0;
          font-size: 0.8rem;
          color: #64748B;
        }

        /* \u7F16\u8F91\u8868\u5355 */
        .project-info-edit {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .form-grid {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group.full-width {
          grid-column: 1 / -1;
        }

        .form-group label {
          color: #94A3B8;
          font-size: 0.82rem;
          font-weight: 500;
        }

        .form-group input,
        .form-group textarea {
          padding: 9px 12px;
          background-color: #151E2B;
          border: 1px solid #334155;
          border-radius: 8px;
          color: #E2E8F0;
          font-size: 0.9rem;
          transition: all 0.2s ease;
          width: 100%;
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
          padding-top: 6px;
        }

        /* \u7AE0\u8282\u7BA1\u7406\u5BB9\u5668 */
        .chapter-manager-wrapper {
          background: #1E2A3A;
          border: 1px solid #2D3E54;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
          min-height: 600px;
          display: flex;
          flex-direction: column;
        }

        /* \u6EDA\u52A8\u6761\u6837\u5F0F */
        .main-content::-webkit-scrollbar {
          width: 10px;
        }

        .main-content::-webkit-scrollbar-track {
          background: #151E2B;
        }

        .main-content::-webkit-scrollbar-thumb {
          background: #334155;
          border-radius: 5px;
        }

        .main-content::-webkit-scrollbar-thumb:hover {
          background: #475569;
        }

        /* \u6309\u94AE\u6837\u5F0F */
        .btn-primary,
        .btn-secondary,
        .btn-ghost {
          padding: 8px 14px;
          border: none;
          border-radius: 8px;
          font-size: 0.85rem;
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
          box-shadow: none;
        }

        /* \u52A0\u8F7D\u548C\u9519\u8BEF\u72B6\u6001 */
        .loading-container,
        .error-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
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
      `})]}):s("div",{className:"project-details-page",children:h("div",{className:"error-container",children:[s("h2",{children:"\u9879\u76EE\u4E0D\u5B58\u5728"}),h(gr,{to:"/",className:"btn-primary",children:[s(Zo,{size:16}),"\u8FD4\u56DE\u9996\u9875"]})]})})},Gg=()=>{const{projectId:e,chapterId:t}=Yd();$r();const[n,r]=k.exports.useState(null),[o,i]=k.exports.useState([]),[l,a]=k.exports.useState([]),[u,c]=k.exports.useState([]),[m,y]=k.exports.useState([]),[g,S]=k.exports.useState(!0),[C,E]=k.exports.useState(null),[_,f]=k.exports.useState(!1),[d,p]=k.exports.useState(0),[w,F]=k.exports.useState(0),[P,D]=k.exports.useState(null),[B,O]=k.exports.useState(-1),M=k.exports.useRef(null),le=k.exports.useRef(null),[oe,Te]=k.exports.useState({content:"",speaker:"",tone:"neutral",speed:al,volume:po}),[kt,K]=k.exports.useState(!1),[de,Ge]=k.exports.useState(!1),[z,I]=k.exports.useState(""),[x,R]=k.exports.useState(!1),[T,Y]=k.exports.useState(!1),[pe,at]=k.exports.useState(0),[st,Qe]=k.exports.useState(""),[is,Vr]=k.exports.useState(!1),[xi,ls]=k.exports.useState(""),[np,cn]=k.exports.useState(!1),[Gt,wi]=k.exports.useState(""),[rp,ki]=k.exports.useState("\u751F\u6210\u811A\u672C\u5931\u8D25"),[dn,Wn]=k.exports.useState({isOpen:!1,title:"",message:"",type:"warning",onConfirm:null}),[Ei,Ci]=k.exports.useState(!1),[as,Kr]=k.exports.useState(0),[e1,Et]=k.exports.useState(!1),[t1,op]=k.exports.useState(new Set),Si=k.exports.useRef(null),ip=k.exports.useRef(null),Wr=k.exports.useRef(null);k.exports.useEffect(()=>{t&&lp()},[t,e]),k.exports.useEffect(()=>{const v=N=>{Si.current&&!Si.current.contains(N.target)&&Vr(!1)};return document.addEventListener("mousedown",v),()=>document.removeEventListener("mousedown",v)},[]),k.exports.useEffect(()=>{var v,N;if(C&&o.length>0){const A=o.find(j=>j.id===C);A&&Te({content:A.content,speaker:A.speaker||"",tone:A.tone||"neutral",speed:(v=A.speed)!=null?v:al,volume:(N=A.volume)!=null?N:po})}},[C,o]);const lp=async()=>{S(!0);try{const v=await H.getChapter(parseInt(t||"0"));if(r(v),I(v.content||""),e){const $=await H.getProjectKnownCharacters(parseInt(e));c($)}const N=await H.getVoices();y(N);const j=[...await H.getParagraphs(parseInt(t||"0"))].sort(($,W)=>$.orderIndex-W.orderIndex);i(j),a(j),Hn(j),j.length>0&&Gn(j[0].id)}catch(v){console.error("Failed to load data:",v)}S(!1)},ap=()=>{n&&I(n.content||""),Ge(!0)},sp=async()=>{if(!!n){R(!0);try{await H.updateChapter(n.id,n.title,z),r(v=>v?{...v,content:z}:null),Ge(!1),Et(!0),setTimeout(()=>Et(!1),2e3)}catch(v){console.error("Failed to save chapter:",v)}R(!1)}},Hn=v=>{const N=v.reduce((A,j)=>A+(j.duration||0),0);F(N)},Hr=(()=>{let v=0;return o.map(N=>{const A=v,j=Math.max(N.duration||0,.1),$=v+j;return v=$,{id:N.id,start:A,end:$,paragraph:N}})})(),Gn=v=>{var A,j;if(v===C)return;E(v);const N=o.find($=>$.id===v);N&&Te({content:N.content,speaker:N.speaker||"",tone:N.tone||"neutral",speed:(A=N.speed)!=null?A:al,volume:(j=N.volume)!=null?j:po})},up=async v=>{var N;try{return await H.updateParagraph(v.id,v.content,v.speaker,v.tone,v.voiceId,v.speed,(N=v.volume)!=null?N:po,v.audioPath,v.audioData||"",v.duration,v.orderIndex),!0}catch(A){return console.error("Failed to save paragraph:",A),!1}},pn=async(v,N)=>{const A={...oe,[v]:N};if(Te(A),!C)return;const j=o.map(W=>W.id===C?{...W,...A,voiceId:W.voiceId}:W);i(j),a(j);const $=j.find(W=>W.id===C);$&&(K(!0),await up($),K(!1))},cp=v=>{Wn({isOpen:!0,title:"\u5220\u9664\u6BB5\u843D",message:"\u786E\u5B9A\u8981\u5220\u9664\u6B64\u6BB5\u843D\u5417\uFF1F",type:"danger",onConfirm:()=>{const N=o.filter(A=>A.id!==v);i(N),Hn(N),op(A=>{const j=new Set(A);return j.delete(v),j}),C===v&&(N.length>0?Gn(N[0].id):E(null)),Wn(A=>({...A,isOpen:!1}))}})},dp=async v=>{console.log("Generating audio for paragraph:",v);try{const N=await H.generateParagraphAudio(v);i(A=>A.map(j=>j.id===v?N:j)),a(A=>A.map(j=>j.id===v?N:j)),Hn(o.map(A=>A.id===v?N:A)),Et(!0),setTimeout(()=>Et(!1),2e3)}catch(N){let A="\u751F\u6210\u97F3\u9891\u5931\u8D25";typeof N=="string"?A=N:N instanceof Error?A=N.message:N&&typeof N=="object"&&(A=N.message||N.error||String(N)),console.error("\u751F\u6210\u97F3\u9891\u5931\u8D25:",A),ki("\u751F\u6210\u97F3\u9891\u5931\u8D25"),wi(A),cn(!0)}},pp=async()=>{!t||fp(o.map(v=>v.id))},fp=async v=>{if(!!t){Ci(!0),Kr(0);try{const N=await H.generateChapterAudio(parseInt(t)),A=new Map(N.map($=>[$.id,$])),j=o.map($=>A.get($.id)||$);i(j),a(j),Hn(j),Kr(100),Et(!0),setTimeout(()=>{Et(!1),Ci(!1),Kr(0)},1500)}catch(N){Ci(!1),Kr(0);let A="\u751F\u6210\u7AE0\u8282\u97F3\u9891\u5931\u8D25";typeof N=="string"?A=N:N instanceof Error?A=N.message:N&&typeof N=="object"&&(A=N.message||N.error||String(N)),console.error("\u751F\u6210\u7AE0\u8282\u97F3\u9891\u5931\u8D25:",A),ki("\u751F\u6210\u7AE0\u8282\u97F3\u9891\u5931\u8D25"),wi(A),cn(!0)}}},Gr=()=>{Wr.current&&(clearInterval(Wr.current),Wr.current=null)};k.exports.useEffect(()=>()=>{Gr(),Ee(),M.current&&(M.current.pause(),M.current=null)},[]);const ss=async()=>{if(!t)return;Y(!0),at(0),Qe("\u9884\u8BA1 3-5 \u5206\u949F");const v=240;let N=0;Gr(),Wr.current=window.setInterval(()=>{N+=1;const A=Math.min(N/v*100,95),j=Math.max(v-N,0),$=Math.floor(j/60),W=j%60;at(A),j>0?Qe(`\u9884\u8BA1\u5269\u4F59 ${$}\u5206${W}\u79D2`):Qe("\u5373\u5C06\u5B8C\u6210...")},1e3);try{const A=await H.splitParagraph(parseInt(t));at(100),Qe("\u5B8C\u6210\uFF01"),await new Promise($=>setTimeout($,500));const j=[...A].sort(($,W)=>$.orderIndex-W.orderIndex).map($=>({...$,audioPath:"",audioData:"",duration:0}));i(j),a(j),Hn(j),j.length>0?Gn(j[0].id):E(null),Et(!0),setTimeout(()=>Et(!1),2e3),Gr(),Y(!1),setTimeout(()=>{at(0),Qe("")},1e3)}catch(A){console.error("Failed to generate script:",A),Gr(),Y(!1);let j="\u672A\u77E5\u9519\u8BEF";typeof A=="string"?j=A:A instanceof Error?j=A.message:A&&typeof A=="object"&&(j=A.message||A.error||String(A)),console.log("Setting error message:",j),ki("\u751F\u6210\u811A\u672C\u5931\u8D25"),wi(j),cn(!0),setTimeout(()=>{at(0),Qe("")},500)}},hp=async()=>{if(!!t){if(o.length>0){Wn({isOpen:!0,title:"\u91CD\u65B0\u751F\u6210\u811A\u672C",message:"\u5DF2\u5B58\u5728\u6BB5\u843D\uFF0C\u786E\u5B9A\u8981\u91CD\u65B0\u751F\u6210\u5417\uFF1F\u8FD9\u5C06\u8986\u76D6\u73B0\u6709\u6BB5\u843D\u3002",type:"warning",onConfirm:()=>{Wn(v=>({...v,isOpen:!1})),ss()}});return}ss()}},mp=async v=>{if(!v.audioData){console.warn("No audio data for paragraph:",v.id);return}if(P===v.id){fn();return}Ee(),M.current&&(M.current.pause(),M.current.currentTime=0);const N=Hr.find(j=>j.id===v.id),A=N?N.start:0;p(A);try{const j=atob(v.audioData),$=new Uint8Array(j.length);for(let Ne=0;Ne<j.length;Ne++)$[Ne]=j.charCodeAt(Ne);const W=new Blob([$],{type:"audio/mpeg"}),ut=URL.createObjectURL(W),Ct=new Audio(ut);M.current=Ct,D(v.id),f(!0),Fi(A,v.duration||2),Ct.onended=()=>{Ee(),URL.revokeObjectURL(ut),D(null),f(!1),O(-1)},Ct.onerror=Ne=>{console.error("Audio playback error:",Ne),Ee(),D(null),f(!1),O(-1),URL.revokeObjectURL(ut)},await Ct.play()}catch(j){console.error("Failed to play audio:",j),Ee(),D(null),f(!1),O(-1)}},gp=async v=>{if(!v.audioData){console.warn("No audio data for paragraph:",v.id);return}if(P===v.id){fn();return}const A=bi().findIndex(W=>W.id===v.id);A>=0&&O(A),Ee(),M.current&&(M.current.pause(),M.current.currentTime=0);const j=Hr.find(W=>W.id===v.id),$=j?j.start:0;p($);try{const W=atob(v.audioData),ut=new Uint8Array(W.length);for(let je=0;je<W.length;je++)ut[je]=W.charCodeAt(je);const Ct=new Blob([ut],{type:"audio/mpeg"}),Ne=URL.createObjectURL(Ct),ct=new Audio(Ne);M.current=ct,D(v.id),f(!0),Fi($,v.duration||2),ct.onended=()=>{Ee(),URL.revokeObjectURL(Ne),A>=0?Ni(A+1):(D(null),f(!1))},ct.onerror=je=>{console.error("Audio playback error:",je),Ee(),D(null),f(!1),O(-1),URL.revokeObjectURL(Ne)},await ct.play()}catch(W){console.error("Failed to play audio:",W),Ee(),D(null),f(!1),O(-1)}},Fi=(v,N)=>{let A=0;le.current=window.setInterval(()=>{A+=.05,p(v+A),A>=N&&Ee()},50)},Ee=()=>{le.current&&(clearInterval(le.current),le.current=null)},bi=()=>o.filter(v=>v.audioData||v.audioPath),Ni=async v=>{const N=bi();if(v<0||v>=N.length){fn();return}const A=N[v];O(v),Ee(),M.current&&(M.current.pause(),M.current.currentTime=0);const j=Hr.find(W=>W.id===A.id),$=j?j.start:0;p($);try{const W=atob(A.audioData||""),ut=new Uint8Array(W.length);for(let je=0;je<W.length;je++)ut[je]=W.charCodeAt(je);const Ct=new Blob([ut],{type:"audio/mpeg"}),Ne=URL.createObjectURL(Ct),ct=new Audio(Ne);M.current=ct,D(A.id),f(!0),Fi($,A.duration||2),ct.onended=()=>{Ee(),URL.revokeObjectURL(Ne),Ni(v+1)},ct.onerror=je=>{console.error("Audio playback error:",je),Ee(),D(null),f(!1),O(-1),URL.revokeObjectURL(Ne)},await ct.play()}catch(W){console.error("Failed to play audio:",W),Ee(),D(null),f(!1),O(-1)}},fn=()=>{Ee(),M.current&&(M.current.pause(),M.current.currentTime=0),D(null),f(!1),O(-1)},yp=()=>{if(_)fn();else{const v=bi();if(v.length===0){console.warn("No audio to play");return}let N=0;if(B>=0&&B<v.length)N=B;else if(P){const A=v.findIndex(j=>j.id===P);A>=0&&(N=A)}Ni(N)}},us=v=>{const N=Math.floor(v/60),A=Math.floor(v%60),j=Math.floor(v%1*100);return`${N.toString().padStart(2,"0")}:${A.toString().padStart(2,"0")}:${j.toString().padStart(2,"0")}`},Ai=v=>({\u65C1\u767D:"#00A8FF",\u7537\u4E3B\u89D2:"#FF6B6B",\u5973\u4E3B\u89D2:"#FF8EC7"})[v]||"#95A5A6",vp=()=>{const v=new Set;return u.forEach(N=>{N.name&&v.add(N.name)}),o.forEach(N=>{N.speaker&&v.add(N.speaker)}),Array.from(v).sort()},xp=()=>{const v=vp();if(!xi.trim())return v;const N=xi.toLowerCase();return v.filter(A=>A.toLowerCase().includes(N))},Pi=C?o.find(v=>v.id===C):null;return g?s("div",{className:"chapter-editor",children:h("div",{className:"loading-container",children:[s("div",{className:"spinner"}),s("p",{children:"\u52A0\u8F7D\u4E2D..."})]})}):n?h("div",{className:"chapter-editor",children:[h("header",{className:"editor-header",children:[h("div",{className:"header-left",children:[h(gr,{to:`/project/${e}`,className:"back-button",children:[s(Zo,{size:18}),s("span",{children:"\u8FD4\u56DE"})]}),s("div",{className:"divider"}),h("div",{className:"chapter-title",children:[s("h1",{children:n.title}),s("p",{className:"subtitle",children:"\u7AE0\u8282\u7F16\u8F91 \xB7 \u65F6\u95F4\u8F74\u89C6\u56FE"})]})]}),h("div",{className:"header-right",children:[h("button",{className:"btn-secondary",onClick:ap,children:[s(aa,{size:16}),"\u7F16\u8F91\u6587\u672C"]}),h("div",{className:"generate-button-wrapper",children:[h("button",{className:"btn-primary audio-generate-btn",onClick:pp,disabled:Ei||o.length===0,children:[s(Pu,{size:16}),Ei?"\u751F\u6210\u97F3\u9891\u4E2D...":"\u751F\u6210\u7AE0\u8282\u97F3\u9891"]}),Ei&&h("div",{className:"generate-progress-container",children:[s("div",{className:"progress-bar",children:s("div",{className:"progress-bar-fill",style:{width:`${as}%`}})}),s("div",{className:"progress-info",children:h("span",{className:"progress-percent",children:[Math.round(as),"%"]})})]})]}),h("div",{className:"generate-button-wrapper",children:[h("button",{className:"btn-primary",onClick:hp,disabled:T,children:[s(ep,{size:16}),T?"\u751F\u6210\u4E2D...":o.length>0?"\u91CD\u65B0\u751F\u6210\u811A\u672C":"\u751F\u6210\u811A\u672C"]}),T&&h("div",{className:"generate-progress-container",children:[s("div",{className:"progress-bar",children:s("div",{className:"progress-bar-fill",style:{width:`${pe}%`}})}),h("div",{className:"progress-info",children:[h("span",{className:"progress-percent",children:[Math.round(pe),"%"]}),s("span",{className:"progress-time",children:st})]})]})]})]})]}),h("div",{className:"editor-main",children:[h("div",{className:"upper-section",children:[h("div",{className:"paragraph-list-panel",children:[h("div",{className:"panel-header",children:[s("h2",{children:"\u6BB5\u843D\u5217\u8868"}),h("span",{className:"paragraph-count",children:[o.length," \u4E2A\u6BB5\u843D"]})]}),s("div",{className:"paragraph-list-content",children:o.map((v,N)=>h("div",{className:`paragraph-item ${C===v.id?"selected":""}`,onClick:()=>Gn(v.id),children:[h("div",{className:"paragraph-item-left",children:[s("div",{className:"paragraph-index",children:N+1}),s("div",{className:"speaker-dot",style:{backgroundColor:Ai(v.speaker)}})]}),h("div",{className:"paragraph-item-content",children:[h("div",{className:"paragraph-item-header",children:[s("span",{className:"speaker-label",style:{color:Ai(v.speaker)},children:v.speaker||"\u65C1\u767D"}),h("span",{className:"paragraph-duration",children:[s(Zd,{size:10}),(v.duration||0).toFixed(1),"s"]})]}),s("p",{className:"paragraph-item-text",children:v.content})]}),s("div",{className:"paragraph-item-right",children:v.audioData||v.audioPath?s("button",{className:"audio-play-btn",onClick:A=>{A.stopPropagation(),P===v.id?fn():mp(v)},title:P===v.id?"\u505C\u6B62":"\u8BD5\u542C",children:P===v.id?s(il,{size:14}):s(ll,{size:14})}):null})]},v.id))})]}),h("div",{className:"paragraph-detail-panel",children:[s("div",{className:"panel-header",children:s("h2",{children:"\u6BB5\u843D\u8BE6\u60C5"})}),Pi?h("div",{className:"panel-content",children:[h("div",{className:"form-group",children:[s("label",{children:"\u6587\u672C\u5185\u5BB9"}),s("textarea",{value:oe.content,onChange:v=>pn("content",v.target.value),rows:5})]}),s("div",{className:"form-row",children:h("div",{className:"form-group full-width",children:[s("label",{children:"\u8BF4\u8BDD\u89D2\u8272"}),h("div",{className:"speaker-select-wrapper",ref:Si,children:[h("div",{className:"speaker-select-input",onClick:()=>{Vr(!is),ls("")},children:[s("span",{className:oe.speaker?"":"placeholder",children:oe.speaker||"\u65C1\u767D"}),s("span",{className:"dropdown-arrow",children:"\u25BC"})]}),is&&h("div",{className:"speaker-dropdown",children:[s("input",{type:"text",className:"speaker-search-input",placeholder:"\u641C\u7D22\u89D2\u8272...",value:xi,onChange:v=>ls(v.target.value),autoFocus:!0}),h("div",{className:"speaker-options",children:[s("div",{className:`speaker-option ${oe.speaker?"selected":""}`,onClick:()=>{pn("speaker",""),Vr(!1)},children:"\u65C1\u767D"}),xp().map(v=>s("div",{className:`speaker-option ${oe.speaker===v?"selected":""}`,onClick:()=>{pn("speaker",v),Vr(!1)},children:v},v))]})]})]})]})}),h("div",{className:"form-row",children:[h("div",{className:"form-group",children:[s("label",{children:"\u60C5\u611F"}),s("select",{value:oe.tone,onChange:v=>pn("tone",v.target.value),children:Dg.map(v=>s("option",{value:v.value,children:v.label},v.value))})]}),h("div",{className:"form-group",children:[h("div",{className:"label-row",children:[s("label",{children:"\u8BED\u901F"}),h("span",{className:"value-badge",children:[Ug(oe.speed).toFixed(2),"x"]})]}),s("input",{type:"range",min:"-50",max:"100",step:"1",value:oe.speed,onChange:v=>pn("speed",parseInt(v.target.value))}),h("div",{className:"range-labels",children:[s("span",{children:"0.5x"}),s("span",{children:"1.0x"}),s("span",{children:"2.0x"})]})]})]}),s("div",{className:"form-row",children:h("div",{className:"form-group",children:[h("div",{className:"label-row",children:[s("label",{children:"\u97F3\u91CF"}),h("span",{className:"value-badge",children:[$g(oe.volume).toFixed(2),"x"]})]}),s("input",{type:"range",min:"-50",max:"100",step:"1",value:oe.volume,onChange:v=>pn("volume",parseInt(v.target.value))}),h("div",{className:"range-labels",children:[s("span",{children:"0.5x"}),s("span",{children:"1.0x"}),s("span",{children:"2.0x"})]})]})}),h("div",{className:"action-buttons",children:[h("button",{className:"btn-generate",onClick:()=>dp(Pi.id),children:[s(Pu,{size:16}),"\u751F\u6210\u97F3\u9891"]}),h("button",{className:"btn-delete",onClick:()=>cp(Pi.id),children:[s(vi,{size:16}),"\u5220\u9664"]})]})]}):h("div",{className:"empty-properties",children:[s(Au,{size:40}),s("p",{children:"\u9009\u62E9\u4E00\u4E2A\u6BB5\u843D\u6765\u7F16\u8F91\u5C5E\u6027"})]})]})]}),s("div",{className:"lower-section",children:h("div",{className:"timeline-panel",children:[s("div",{className:"panel-header",children:h("div",{className:"transport-controls",children:[s("button",{className:`play-btn ${_?"playing":""}`,onClick:yp,children:_?s(il,{size:20}):s(ll,{size:20})}),h("div",{className:"time-display",children:[us(d)," / ",us(w)]})]})}),h("div",{className:"timeline-container",ref:ip,children:[s("div",{className:"timeline-ruler",children:Array.from({length:Math.max(Math.ceil(w),1)+1}).map((v,N)=>s("div",{className:"ruler-mark",style:{left:`${w>0?N/w*100:0}%`},children:h("span",{className:"ruler-label",children:[N,"s"]})},N))}),s("div",{className:"timeline-track",children:Hr.map(v=>{const N=w>0?w:1,A=v.end-v.start;return h("div",{className:`timeline-clip ${C===v.id?"selected":""} ${P===v.id?"playing":""}`,style:{left:`${v.start/N*100}%`,width:`${Math.max(A/N*100,2)}%`,backgroundColor:Ai(v.paragraph.speaker)},onClick:()=>Gn(v.id),children:[(v.paragraph.audioData||v.paragraph.audioPath)&&s("button",{className:"clip-play-btn",onClick:j=>{j.stopPropagation(),P===v.id?fn():gp(v.paragraph)},title:P===v.id?"\u505C\u6B62":"\u8BD5\u542C",children:P===v.id?s(il,{size:12}):s(ll,{size:12})}),h("div",{className:"clip-content",children:[h("div",{className:"clip-speaker",children:[s(im,{size:14}),v.paragraph.speaker||"\u65C1\u767D"]}),h("div",{className:"clip-text",children:[v.paragraph.content.slice(0,40),v.paragraph.content.length>40?"...":""]})]}),v.paragraph.audioPath&&s("div",{className:"clip-indicator",children:s(lm,{size:12})})]},v.id)})}),s("div",{className:"playhead",style:{left:`${w>0?d/w*100:0}%`}})]})]})})]}),de&&s("div",{className:"text-editor-modal",children:h("div",{className:"text-editor-content",children:[h("div",{className:"text-editor-header",children:[h("div",{className:"text-editor-title",children:[s(aa,{size:20}),s("h2",{children:"\u7F16\u8F91\u7AE0\u8282\u6587\u672C"})]}),s("button",{className:"modal-close",onClick:()=>Ge(!1),disabled:x,children:s(Vt,{size:24})})]}),s("div",{className:"text-editor-body",children:s("textarea",{value:z,onChange:v=>I(v.target.value),placeholder:"\u8BF7\u8F93\u5165\u7AE0\u8282\u5185\u5BB9...",className:"chapter-textarea"})}),h("div",{className:"text-editor-footer",children:[s("button",{className:"btn-secondary",onClick:()=>{Ge(!1),n&&I(n.content||"")},disabled:x,children:"\u53D6\u6D88"}),h("button",{className:"btn-primary",onClick:sp,disabled:x,children:[s(sa,{size:16}),x?"\u4FDD\u5B58\u4E2D...":"\u4FDD\u5B58"]})]})]})}),s(tp,{isOpen:dn.isOpen,title:dn.title,message:dn.message,type:dn.type,onConfirm:()=>{dn.onConfirm&&dn.onConfirm()},onCancel:()=>Wn(v=>({...v,isOpen:!1}))}),np&&s("div",{className:"error-modal",children:h("div",{className:"error-modal-content",children:[h("div",{className:"error-modal-header",children:[h("div",{className:"error-modal-title",children:[s(Xh,{size:24,className:"error-icon"}),s("h2",{children:rp})]}),s("button",{className:"modal-close",onClick:()=>cn(!1),children:s(Vt,{size:24})})]}),h("div",{className:"error-modal-body",children:[s("p",{className:"error-message-text",children:Gt}),(Gt==null?void 0:Gt.includes("API Key"))&&h("div",{className:"error-hint-box",children:[s(Au,{size:16}),s("span",{children:"\u8BF7\u524D\u5F80\u9879\u76EE\u8BE6\u60C5\u9875\u914D\u7F6E API Key"})]})]}),h("div",{className:"error-modal-footer",children:[s("button",{className:"btn-primary",onClick:()=>cn(!1),children:"\u77E5\u9053\u4E86"}),(Gt==null?void 0:Gt.includes("API Key"))&&e&&s(gr,{to:`/project/${e}`,className:"btn-secondary",onClick:()=>cn(!1),children:"\u524D\u5F80\u914D\u7F6E"})]})]})}),s("style",{children:`
        * {
          box-sizing: border-box;
        }

        html, body {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .chapter-editor {
          background-color: #0F1419;
          color: #ECF0F1;
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        /* \u9876\u90E8\u5BFC\u822A\u680F */
        .editor-header {
          flex-shrink: 0;
          width: 100%;
          background: linear-gradient(135deg, #1A1F26 0%, #141920 100%);
          border-bottom: 1px solid #2A3442;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          max-width: none;
          margin: 0;
          padding: 12px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
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
          flex-shrink: 0;
        }

        .editor-header .chapter-title {
          min-width: 0;
        }

        .editor-header .chapter-title h1 {
          margin: 0;
          font-size: 1.15rem;
          font-weight: 600;
          color: #F1F5F9;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .editor-header .subtitle {
          margin: 2px 0 0;
          font-size: 0.8rem;
          color: #64748B;
        }

        .dirty-indicator-wrapper {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }

        .dirty-indicator {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          background: rgba(251, 191, 36, 0.15);
          color: #FBBF24;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 500;
          flex-shrink: 0;
        }

        .undo-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px 10px;
          background: rgba(148, 163, 184, 0.15);
          color: #94A3B8;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid rgba(148, 163, 184, 0.2);
          cursor: pointer;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .undo-btn:hover:not(:disabled) {
          background: rgba(148, 163, 184, 0.25);
          border-color: rgba(148, 163, 184, 0.4);
          color: #E2E8F0;
        }

        .undo-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .save-success {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          background: rgba(16, 185, 129, 0.15);
          color: #10B981;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 500;
          flex-shrink: 0;
        }

        .editor-header .header-right {
          display: flex;
          gap: 10px;
          flex-shrink: 0;
          align-items: flex-start;
        }

        .generate-button-wrapper {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .generate-progress-container {
          width: 240px;
        }

        .progress-bar {
          width: 100%;
          height: 6px;
          background-color: #2A3442;
          border-radius: 3px;
          overflow: hidden;
        }

        .progress-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #00A8FF 0%, #00CC88 100%);
          border-radius: 3px;
          transition: width 0.3s ease;
        }

        .progress-info {
          display: flex;
          justify-content: space-between;
          margin-top: 4px;
        }

        .progress-percent {
          font-size: 0.75rem;
          color: #00A8FF;
          font-weight: 600;
        }

        .progress-time {
          font-size: 0.75rem;
          color: #64748B;
        }

        .btn-save {
          padding: 9px 16px;
          border: none;
          border-radius: 8px;
          font-size: 0.88rem;
          font-weight: 500;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s ease;
          white-space: nowrap;
          background: #2A3442;
          color: #94A3B8;
          border: 1px solid #3A4A5C;
        }

        .btn-save:hover:not(:disabled) {
          background: #3A4A5C;
          border-color: #4A5A6C;
        }

        .btn-save.dirty {
          background: linear-gradient(135deg, #10B981 0%, #059669 100%);
          color: white;
          border: none;
          box-shadow: 0 2px 8px rgba(16, 185, 129, 0.25);
        }

        .btn-save.dirty:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.35);
        }

        .btn-save:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* \u4E3B\u7F16\u8F91\u533A\u57DF - \u4E0A\u4E0B\u5E03\u5C40 */
        .editor-main {
          flex: 1;
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        /* \u4E0A\u534A\u90E8\u5206 */
        .upper-section {
          flex: 1;
          display: flex;
          min-height: 0;
          border-bottom: 1px solid #2A3442;
          width: 100%;
        }

        /* \u4E0B\u534A\u90E8\u5206 */
        .lower-section {
          height: 260px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        /* \u9762\u677F\u901A\u7528 */
        .panel-header {
          padding: 12px 16px;
          background: linear-gradient(135deg, #1A1F26 0%, #141920 100%);
          border-bottom: 1px solid #2A3442;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-shrink: 0;
        }

        .panel-header h2 {
          margin: 0;
          font-size: 0.9rem;
          font-weight: 600;
          color: #CBD5E1;
        }

        .dirty-badge {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 2px 8px;
          background: rgba(251, 191, 36, 0.15);
          color: #FBBF24;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 500;
        }

        /* \u5DE6\u4FA7\u6BB5\u843D\u5217\u8868\u9762\u677F */
        .paragraph-list-panel {
          width: 40%;
          min-width: 320px;
          background-color: #141920;
          border-right: 1px solid #2A3442;
          display: flex;
          flex-direction: column;
        }

        .paragraph-count {
          font-size: 0.8rem;
          color: #64748B;
        }

        .paragraph-list-content {
          flex: 1;
          overflow-y: auto;
          padding: 8px;
        }

        .paragraph-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          background: linear-gradient(145deg, #1E2530 0%, #1A212B 100%);
          border: 1px solid #2A3442;
          border-radius: 10px;
          padding: 10px 12px;
          margin-bottom: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .paragraph-item:hover {
          border-color: #3A4A5C;
          transform: translateY(-1px);
        }

        .paragraph-item.selected {
          border-color: #00A8FF;
          box-shadow: 0 0 0 2px rgba(0, 168, 255, 0.2);
          background: linear-gradient(145deg, #1A2733 0%, #16222C 100%);
        }

        .paragraph-item-left {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          flex-shrink: 0;
          padding-top: 2px;
        }

        .paragraph-index {
          width: 22px;
          height: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #2A3442;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 600;
          color: #94A3B8;
        }

        .speaker-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .paragraph-item-content {
          flex: 1;
          min-width: 0;
        }

        .paragraph-item-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 4px;
        }

        .speaker-label {
          font-size: 0.8rem;
          font-weight: 600;
        }

        .paragraph-duration {
          display: flex;
          align-items: center;
          gap: 3px;
          font-size: 0.75rem;
          color: #64748B;
        }

        .dirty-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #FBBF24;
          animation: pulse 1.5s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .paragraph-item-text {
          margin: 0;
          color: #E2E8F0;
          font-size: 0.88rem;
          line-height: 1.5;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .paragraph-item-right {
          flex-shrink: 0;
          display: flex;
          align-items: center;
        }

        .has-audio-icon {
          color: #4ECDC4;
          display: flex;
          align-items: center;
        }

        .audio-play-btn {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: linear-gradient(135deg, #10B981 0%, #059669 100%);
          border: none;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          padding: 0;
          flex-shrink: 0;
        }

        .audio-play-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 2px 8px rgba(16, 185, 129, 0.4);
        }

        /* \u53F3\u4FA7\u6BB5\u843D\u8BE6\u60C5\u9762\u677F */
        .paragraph-detail-panel {
          flex: 1;
          background-color: #141920;
          display: flex;
          flex-direction: column;
        }

        .panel-content {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
        }

        .form-row {
          display: flex;
          gap: 16px;
        }

        .form-row .form-group {
          flex: 1;
        }

        .form-group.full-width {
          flex: 1 1 100%;
        }

        /* \u8BF4\u8BDD\u89D2\u8272\u641C\u7D22\u9009\u62E9\u5668 */
        .speaker-select-wrapper {
          position: relative;
        }

        .speaker-select-input {
          width: 100%;
          padding: 10px 12px;
          background-color: #0F1419;
          border: 1px solid #2A3442;
          border-radius: 8px;
          color: #E2E8F0;
          font-size: 0.88rem;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.2s ease;
        }

        .speaker-select-input:hover {
          border-color: #3A4A5C;
        }

        .speaker-select-input .placeholder {
          color: #64748B;
        }

        .dropdown-arrow {
          font-size: 0.7rem;
          color: #64748B;
        }

        .speaker-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          margin-top: 4px;
          background: #1A2432;
          border: 1px solid #2D3E54;
          border-radius: 8px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
          z-index: 100;
          overflow: hidden;
        }

        .speaker-search-input {
          width: 100%;
          padding: 10px 12px;
          background-color: #0F1419;
          border: none;
          border-bottom: 1px solid #2D3E54;
          color: #E2E8F0;
          font-size: 0.88rem;
          outline: none;
        }

        .speaker-search-input::placeholder {
          color: #64748B;
        }

        .speaker-options {
          max-height: 240px;
          overflow-y: auto;
        }

        .speaker-option {
          padding: 10px 12px;
          color: #E2E8F0;
          font-size: 0.88rem;
          cursor: pointer;
          transition: background 0.15s ease;
        }

        .speaker-option:hover {
          background: rgba(0, 168, 255, 0.1);
        }

        .speaker-option.selected {
          background: rgba(0, 168, 255, 0.2);
          color: #00A8FF;
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
          margin-bottom: 16px;
        }

        .form-group label {
          display: block;
          margin-bottom: 6px;
          color: #94A3B8;
          font-weight: 500;
          font-size: 0.82rem;
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
          font-size: 0.88rem;
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
          min-height: 100px;
          resize: vertical;
          font-family: inherit;
        }

        .label-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 6px;
        }

        .value-badge {
          padding: 2px 8px;
          background-color: rgba(0, 168, 255, 0.15);
          color: #00A8FF;
          border-radius: 4px;
          font-size: 0.78rem;
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
          width: 16px;
          height: 16px;
          background: linear-gradient(135deg, #00A8FF 0%, #0088CC 100%);
          border-radius: 50%;
          cursor: pointer;
          margin-top: -5px;
          box-shadow: 0 2px 8px rgba(0, 168, 255, 0.3);
        }

        .range-labels {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          color: #64748B;
          margin-top: 4px;
        }

        .action-buttons {
          display: flex;
          gap: 10px;
          margin-bottom: 14px;
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
          font-size: 0.88rem;
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
          font-size: 0.88rem;
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

        /* \u65F6\u95F4\u8F74\u9762\u677F */
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
          width: 36px;
          height: 36px;
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
          font-size: 0.88rem;
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
          padding: 16px 20px;
        }

        .timeline-ruler {
          position: relative;
          height: 24px;
          margin-bottom: 6px;
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
          font-size: 0.7rem;
          color: #64748B;
        }

        .timeline-track {
          position: relative;
          height: 160px;
          background: linear-gradient(180deg, #141920 0%, #11161C 100%);
          border-radius: 10px;
          border: 1px solid #2A3442;
          overflow: hidden;
        }

        .timeline-clip {
          position: absolute;
          top: 16px;
          height: calc(100% - 32px);
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

        .timeline-clip.dirty {
          box-shadow: 0 0 0 2px rgba(251, 191, 36, 0.6), 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        .timeline-clip.playing {
          box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.8), 0 0 20px rgba(16, 185, 129, 0.4);
          animation: playing-pulse 1s ease-in-out infinite;
        }

        @keyframes playing-pulse {
          0%, 100% { box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.8), 0 0 20px rgba(16, 185, 129, 0.4); }
          50% { box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.6), 0 0 30px rgba(16, 185, 129, 0.6); }
        }

        .clip-play-btn {
          position: absolute;
          top: 5px;
          left: 6px;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.5);
          border: none;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          padding: 0;
          z-index: 10;
        }

        .clip-play-btn:hover {
          background: rgba(16, 185, 129, 0.9);
          transform: scale(1.15);
        }

        .timeline-clip.playing .clip-play-btn {
          background: rgba(239, 68, 68, 0.9);
        }

        .clip-content {
          overflow: hidden;
        }

        .clip-speaker {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.73rem;
          font-weight: 600;
          color: white;
          margin-bottom: 3px;
        }

        .clip-text {
          font-size: 0.78rem;
          color: rgba(255, 255, 255, 0.95);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .clip-dirty-indicator {
          position: absolute;
          top: 5px;
          right: 6px;
          color: #FBBF24;
          animation: pulse 1.5s ease-in-out infinite;
        }

        .clip-indicator {
          position: absolute;
          top: 5px;
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

        /* \u6309\u94AE\u6837\u5F0F */
        .btn-primary,
        .btn-secondary {
          padding: 9px 16px;
          border: none;
          border-radius: 8px;
          font-size: 0.88rem;
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

        .btn-primary.audio-generate-btn {
          background: linear-gradient(135deg, #10B981 0%, #059669 100%);
          box-shadow: 0 2px 8px rgba(16, 185, 129, 0.25);
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

        /* \u6587\u672C\u7F16\u8F91\u5668\u6A21\u6001\u6846 */
        .text-editor-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          backdrop-filter: blur(6px);
          padding: 20px;
          box-sizing: border-box;
        }

        .text-editor-content {
          background: linear-gradient(145deg, #1E2A3A 0%, #151E2B 100%);
          border-radius: 14px;
          width: 100%;
          max-width: 1200px;
          height: 100%;
          max-height: 900px;
          border: 1px solid #2D3E54;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
          display: flex;
          flex-direction: column;
        }

        .text-editor-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 20px;
          border-bottom: 1px solid #2D3E54;
          flex-shrink: 0;
        }

        .text-editor-title {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #E2E8F0;
        }

        .text-editor-title h2 {
          margin: 0;
          font-size: 1.1rem;
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
          flex-shrink: 0;
        }

        .modal-close:hover {
          background-color: #334155;
          color: #E2E8F0;
        }

        .text-editor-body {
          flex: 1;
          padding: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .chapter-textarea {
          width: 100%;
          flex: 1;
          padding: 16px;
          background-color: #0F1419;
          border: 1px solid #2A3442;
          border-radius: 10px;
          color: #E2E8F0;
          font-size: 0.95rem;
          line-height: 1.7;
          font-family: inherit;
          resize: none;
          transition: all 0.2s ease;
          box-sizing: border-box;
        }

        .chapter-textarea:focus {
          outline: none;
          border-color: #00A8FF;
          box-shadow: 0 0 0 3px rgba(0, 168, 255, 0.1);
        }

        .text-editor-footer {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
          padding: 14px 20px;
          border-top: 1px solid #2D3E54;
          flex-shrink: 0;
        }

        /* \u52A0\u8F7D\u548C\u9519\u8BEF\u72B6\u6001 */
        .loading-container,
        .error-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          color: #CBD5E1;
        }

        .error-container h2 {
          margin: 0 0 20px;
        }

        /* \u9519\u8BEF\u63D0\u793A\u6A21\u6001\u6846 */
        .error-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          backdrop-filter: blur(6px);
          padding: 20px;
          box-sizing: border-box;
        }

        .error-modal-content {
          background: linear-gradient(145deg, #1E2A3A 0%, #151E2B 100%);
          border-radius: 16px;
          width: 100%;
          max-width: 480px;
          border: 1px solid #2D3E54;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .error-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
          border-bottom: 1px solid #2D3E54;
          flex-shrink: 0;
        }

        .error-modal-title {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #E2E8F0;
        }

        .error-modal-title h2 {
          margin: 0;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .error-icon {
          color: #EF4444;
          flex-shrink: 0;
        }

        .error-modal-body {
          padding: 24px;
        }

        .error-message-text {
          margin: 0 0 16px 0;
          color: #E2E8F0;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .error-hint-box {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          background: rgba(0, 168, 255, 0.1);
          border: 1px solid rgba(0, 168, 255, 0.2);
          border-radius: 10px;
          color: #94A3B8;
          font-size: 0.85rem;
        }

        .error-hint-box svg {
          color: #00A8FF;
          flex-shrink: 0;
        }

        .error-modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
          padding: 16px 24px 24px;
          border-top: 1px solid #2D3E54;
          flex-shrink: 0;
        }
      `})]}):s("div",{className:"chapter-editor",children:h("div",{className:"error-container",children:[s("h2",{children:"\u7AE0\u8282\u4E0D\u5B58\u5728"}),h(gr,{to:`/project/${e}`,className:"btn-primary",children:[s(Zo,{size:16}),"\u8FD4\u56DE\u9879\u76EE"]})]})})};function Qg(){return s(Wh,{children:s("div",{className:"app",children:h(Oh,{children:[s(Fo,{path:"/",element:s(qm,{})}),s(Fo,{path:"/project/:id",element:s(Hg,{})}),s(Fo,{path:"/project/:projectId/chapter/:chapterId",element:s(Gg,{})})]})})})}const Yg="Frontend",mn={debug:console.debug.bind(console),info:console.info.bind(console),warn:console.warn.bind(console),error:console.error.bind(console),log:console.log.bind(console)};let Du=!1;const Xg=()=>typeof window.go<"u",nr=(e,...t)=>{if(!!Xg())try{const n=t.map(r=>{if(typeof r=="object")try{return JSON.stringify(r)}catch{return String(r)}return String(r)}).join(" ");H.log(e,n,Yg)}catch(n){mn.debug("Failed to send log to backend:",n)}},Zg=()=>{Du||(Du=!0,console.debug=(...e)=>{mn.debug(...e),nr("debug",...e)},console.info=(...e)=>{mn.info(...e),nr("info",...e)},console.warn=(...e)=>{mn.warn(...e),nr("warn",...e)},console.error=(...e)=>{mn.error(...e),nr("error",...e)},console.log=(...e)=>{mn.log(...e),nr("info",...e)},window.addEventListener("unhandledrejection",e=>{console.error("Unhandled Promise rejection:",e.reason)}),window.addEventListener("error",e=>{console.error("Uncaught error:",e.message,"at",e.filename,":",e.lineno,":",e.colno)}),console.info("\u65E5\u5FD7\u7CFB\u7EDF\u521D\u59CB\u5316\u5B8C\u6210"))};Zg();const Jg=document.getElementById("root"),qg=Id(Jg);qg.render(s(fa.StrictMode,{children:s(Qg,{})}));
