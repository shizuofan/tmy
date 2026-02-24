function kp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Ep(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var k={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Br=Symbol.for("react.element"),Cp=Symbol.for("react.portal"),Fp=Symbol.for("react.fragment"),Sp=Symbol.for("react.strict_mode"),bp=Symbol.for("react.profiler"),Np=Symbol.for("react.provider"),Ap=Symbol.for("react.context"),Dp=Symbol.for("react.forward_ref"),Pp=Symbol.for("react.suspense"),Bp=Symbol.for("react.memo"),zp=Symbol.for("react.lazy"),cs=Symbol.iterator;function Tp(e){return e===null||typeof e!="object"?null:(e=cs&&e[cs]||e["@@iterator"],typeof e=="function"?e:null)}var Tu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ju=Object.assign,Lu={};function Rn(e,t,n){this.props=e,this.context=t,this.refs=Lu,this.updater=n||Tu}Rn.prototype.isReactComponent={};Rn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Rn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function _u(){}_u.prototype=Rn.prototype;function ra(e,t,n){this.props=e,this.context=t,this.refs=Lu,this.updater=n||Tu}var oa=ra.prototype=new _u;oa.constructor=ra;ju(oa,Rn.prototype);oa.isPureReactComponent=!0;var ds=Array.isArray,Mu=Object.prototype.hasOwnProperty,ia={current:null},Ru={key:!0,ref:!0,__self:!0,__source:!0};function Iu(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Mu.call(t,r)&&!Ru.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Br,type:e,key:i,ref:l,props:o,_owner:ia.current}}function jp(e,t){return{$$typeof:Br,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function la(e){return typeof e=="object"&&e!==null&&e.$$typeof===Br}function Lp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ps=/\/+/g;function Ni(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Lp(""+e.key):t.toString(36)}function uo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Br:case Cp:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Ni(l,0):r,ds(o)?(n="",e!=null&&(n=e.replace(ps,"$&/")+"/"),uo(o,t,n,"",function(c){return c})):o!=null&&(la(o)&&(o=jp(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(ps,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",ds(e))for(var a=0;a<e.length;a++){i=e[a];var u=r+Ni(i,a);l+=uo(i,t,n,u,o)}else if(u=Tp(e),typeof u=="function")for(e=u.call(e),a=0;!(i=e.next()).done;)i=i.value,u=r+Ni(i,a++),l+=uo(i,t,n,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Kr(e,t,n){if(e==null)return e;var r=[],o=0;return uo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function _p(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Se={current:null},co={transition:null},Mp={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:co,ReactCurrentOwner:ia};function Ou(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:Kr,forEach:function(e,t,n){Kr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Kr(e,function(){t++}),t},toArray:function(e){return Kr(e,function(t){return t})||[]},only:function(e){if(!la(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=Rn;O.Fragment=Fp;O.Profiler=bp;O.PureComponent=ra;O.StrictMode=Sp;O.Suspense=Pp;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mp;O.act=Ou;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ju({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=ia.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)Mu.call(t,u)&&!Ru.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Br,type:e.type,key:o,ref:i,props:r,_owner:l}};O.createContext=function(e){return e={$$typeof:Ap,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Np,_context:e},e.Consumer=e};O.createElement=Iu;O.createFactory=function(e){var t=Iu.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:Dp,render:e}};O.isValidElement=la;O.lazy=function(e){return{$$typeof:zp,_payload:{_status:-1,_result:e},_init:_p}};O.memo=function(e,t){return{$$typeof:Bp,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=co.transition;co.transition={};try{e()}finally{co.transition=t}};O.unstable_act=Ou;O.useCallback=function(e,t){return Se.current.useCallback(e,t)};O.useContext=function(e){return Se.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return Se.current.useDeferredValue(e)};O.useEffect=function(e,t){return Se.current.useEffect(e,t)};O.useId=function(){return Se.current.useId()};O.useImperativeHandle=function(e,t,n){return Se.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return Se.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return Se.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return Se.current.useMemo(e,t)};O.useReducer=function(e,t,n){return Se.current.useReducer(e,t,n)};O.useRef=function(e){return Se.current.useRef(e)};O.useState=function(e){return Se.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return Se.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return Se.current.useTransition()};O.version="18.3.1";(function(e){e.exports=O})(k);const aa=Ep(k.exports),il=kp({__proto__:null,default:aa},[k.exports]);var Uu={exports:{}},_e={},$u={exports:{}},Vu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(B,I){var x=B.length;B.push(I);e:for(;0<x;){var _=x-1>>>1,z=B[_];if(0<o(z,I))B[_]=I,B[x]=z,x=_;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var I=B[0],x=B.pop();if(x!==I){B[0]=x;e:for(var _=0,z=B.length,Q=z>>>1;_<Q;){var le=2*(_+1)-1,It=B[le],Je=le+1,qe=B[Je];if(0>o(It,x))Je<z&&0>o(qe,It)?(B[_]=qe,B[Je]=x,_=Je):(B[_]=It,B[le]=x,_=le);else if(Je<z&&0>o(qe,x))B[_]=qe,B[Je]=x,_=Je;else break e}}return I}function o(B,I){var x=B.sortIndex-I.sortIndex;return x!==0?x:B.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var u=[],c=[],g=1,y=null,m=3,F=!1,E=!1,C=!1,L=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(B){for(var I=n(c);I!==null;){if(I.callback===null)r(c);else if(I.startTime<=B)r(c),I.sortIndex=I.expirationTime,t(u,I);else break;I=n(c)}}function w(B){if(C=!1,p(B),!E)if(n(u)!==null)E=!0,ce(S);else{var I=n(c);I!==null&&he(w,I.startTime-B)}}function S(B,I){E=!1,C&&(C=!1,h(P),P=-1),F=!0;var x=m;try{for(p(I),y=n(u);y!==null&&(!(y.expirationTime>I)||B&&!oe());){var _=y.callback;if(typeof _=="function"){y.callback=null,m=y.priorityLevel;var z=_(y.expirationTime<=I);I=e.unstable_now(),typeof z=="function"?y.callback=z:y===n(u)&&r(u),p(I)}else r(u);y=n(u)}if(y!==null)var Q=!0;else{var le=n(c);le!==null&&he(w,le.startTime-I),Q=!1}return Q}finally{y=null,m=x,F=!1}}var A=!1,D=null,P=-1,U=5,M=-1;function oe(){return!(e.unstable_now()-M<U)}function fe(){if(D!==null){var B=e.unstable_now();M=B;var I=!0;try{I=D(!0,B)}finally{I?Ee():(A=!1,D=null)}}else A=!1}var Ee;if(typeof d=="function")Ee=function(){d(fe)};else if(typeof MessageChannel<"u"){var Ke=new MessageChannel,K=Ke.port2;Ke.port1.onmessage=fe,Ee=function(){K.postMessage(null)}}else Ee=function(){L(fe,0)};function ce(B){D=B,A||(A=!0,Ee())}function he(B,I){P=L(function(){B(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(B){B.callback=null},e.unstable_continueExecution=function(){E||F||(E=!0,ce(S))},e.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<B?Math.floor(1e3/B):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(B){switch(m){case 1:case 2:case 3:var I=3;break;default:I=m}var x=m;m=I;try{return B()}finally{m=x}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(B,I){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var x=m;m=B;try{return I()}finally{m=x}},e.unstable_scheduleCallback=function(B,I,x){var _=e.unstable_now();switch(typeof x=="object"&&x!==null?(x=x.delay,x=typeof x=="number"&&0<x?_+x:_):x=_,B){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=x+z,B={id:g++,callback:I,priorityLevel:B,startTime:x,expirationTime:z,sortIndex:-1},x>_?(B.sortIndex=x,t(c,B),n(u)===null&&B===n(c)&&(C?(h(P),P=-1):C=!0,he(w,x-_))):(B.sortIndex=z,t(u,B),E||F||(E=!0,ce(S))),B},e.unstable_shouldYield=oe,e.unstable_wrapCallback=function(B){var I=m;return function(){var x=m;m=I;try{return B.apply(this,arguments)}finally{m=x}}}})(Vu);(function(e){e.exports=Vu})($u);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rp=k.exports,Le=$u.exports;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ku=new Set,pr={};function tn(e,t){Bn(e,t),Bn(e+"Capture",t)}function Bn(e,t){for(pr[e]=t,e=0;e<t.length;e++)Ku.add(t[e])}var pt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ll=Object.prototype.hasOwnProperty,Ip=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fs={},hs={};function Op(e){return ll.call(hs,e)?!0:ll.call(fs,e)?!1:Ip.test(e)?hs[e]=!0:(fs[e]=!0,!1)}function Up(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $p(e,t,n,r){if(t===null||typeof t>"u"||Up(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function be(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ye[e]=new be(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ye[t]=new be(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ye[e]=new be(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ye[e]=new be(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ye[e]=new be(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ye[e]=new be(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ye[e]=new be(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ye[e]=new be(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ye[e]=new be(e,5,!1,e.toLowerCase(),null,!1,!1)});var sa=/[\-:]([a-z])/g;function ua(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(sa,ua);ye[t]=new be(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(sa,ua);ye[t]=new be(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(sa,ua);ye[t]=new be(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ye[e]=new be(e,1,!1,e.toLowerCase(),null,!1,!1)});ye.xlinkHref=new be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ye[e]=new be(e,1,!1,e.toLowerCase(),null,!0,!0)});function ca(e,t,n,r){var o=ye.hasOwnProperty(t)?ye[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&($p(t,n,o,r)&&(n=null),r||o===null?Op(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var gt=Rp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wr=Symbol.for("react.element"),fn=Symbol.for("react.portal"),hn=Symbol.for("react.fragment"),da=Symbol.for("react.strict_mode"),al=Symbol.for("react.profiler"),Wu=Symbol.for("react.provider"),Hu=Symbol.for("react.context"),pa=Symbol.for("react.forward_ref"),sl=Symbol.for("react.suspense"),ul=Symbol.for("react.suspense_list"),fa=Symbol.for("react.memo"),vt=Symbol.for("react.lazy"),Gu=Symbol.for("react.offscreen"),ms=Symbol.iterator;function Vn(e){return e===null||typeof e!="object"?null:(e=ms&&e[ms]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Object.assign,Ai;function Jn(e){if(Ai===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ai=t&&t[1]||""}return`
`+Ai+e}var Di=!1;function Pi(e,t){if(!e||Di)return"";Di=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var u=`
`+o[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=a);break}}}finally{Di=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Jn(e):""}function Vp(e){switch(e.tag){case 5:return Jn(e.type);case 16:return Jn("Lazy");case 13:return Jn("Suspense");case 19:return Jn("SuspenseList");case 0:case 2:case 15:return e=Pi(e.type,!1),e;case 11:return e=Pi(e.type.render,!1),e;case 1:return e=Pi(e.type,!0),e;default:return""}}function cl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case hn:return"Fragment";case fn:return"Portal";case al:return"Profiler";case da:return"StrictMode";case sl:return"Suspense";case ul:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Hu:return(e.displayName||"Context")+".Consumer";case Wu:return(e._context.displayName||"Context")+".Provider";case pa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case fa:return t=e.displayName||null,t!==null?t:cl(e.type)||"Memo";case vt:t=e._payload,e=e._init;try{return cl(e(t))}catch{}}return null}function Kp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return cl(t);case 8:return t===da?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function jt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Wp(e){var t=Qu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Hr(e){e._valueTracker||(e._valueTracker=Wp(e))}function Yu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Qu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Co(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function dl(e,t){var n=t.checked;return ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function gs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=jt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Xu(e,t){t=t.checked,t!=null&&ca(e,"checked",t,!1)}function pl(e,t){Xu(e,t);var n=jt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?fl(e,t.type,n):t.hasOwnProperty("defaultValue")&&fl(e,t.type,jt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ys(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function fl(e,t,n){(t!=="number"||Co(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var qn=Array.isArray;function Sn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+jt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function hl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function vs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(qn(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:jt(n)}}function Zu(e,t){var n=jt(t.value),r=jt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function xs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ju(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ml(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ju(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Gr,qu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Gr=Gr||document.createElement("div"),Gr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Gr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function fr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var nr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hp=["Webkit","ms","Moz","O"];Object.keys(nr).forEach(function(e){Hp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),nr[t]=nr[e]})});function ec(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||nr.hasOwnProperty(e)&&nr[e]?(""+t).trim():t+"px"}function tc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=ec(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Gp=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gl(e,t){if(t){if(Gp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function yl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vl=null;function ha(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xl=null,bn=null,Nn=null;function ws(e){if(e=jr(e)){if(typeof xl!="function")throw Error(N(280));var t=e.stateNode;t&&(t=ti(t),xl(e.stateNode,e.type,t))}}function nc(e){bn?Nn?Nn.push(e):Nn=[e]:bn=e}function rc(){if(bn){var e=bn,t=Nn;if(Nn=bn=null,ws(e),t)for(e=0;e<t.length;e++)ws(t[e])}}function oc(e,t){return e(t)}function ic(){}var Bi=!1;function lc(e,t,n){if(Bi)return e(t,n);Bi=!0;try{return oc(e,t,n)}finally{Bi=!1,(bn!==null||Nn!==null)&&(ic(),rc())}}function hr(e,t){var n=e.stateNode;if(n===null)return null;var r=ti(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var wl=!1;if(pt)try{var Kn={};Object.defineProperty(Kn,"passive",{get:function(){wl=!0}}),window.addEventListener("test",Kn,Kn),window.removeEventListener("test",Kn,Kn)}catch{wl=!1}function Qp(e,t,n,r,o,i,l,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(g){this.onError(g)}}var rr=!1,Fo=null,So=!1,kl=null,Yp={onError:function(e){rr=!0,Fo=e}};function Xp(e,t,n,r,o,i,l,a,u){rr=!1,Fo=null,Qp.apply(Yp,arguments)}function Zp(e,t,n,r,o,i,l,a,u){if(Xp.apply(this,arguments),rr){if(rr){var c=Fo;rr=!1,Fo=null}else throw Error(N(198));So||(So=!0,kl=c)}}function nn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ac(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ks(e){if(nn(e)!==e)throw Error(N(188))}function Jp(e){var t=e.alternate;if(!t){if(t=nn(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return ks(o),e;if(i===r)return ks(o),t;i=i.sibling}throw Error(N(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function sc(e){return e=Jp(e),e!==null?uc(e):null}function uc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=uc(e);if(t!==null)return t;e=e.sibling}return null}var cc=Le.unstable_scheduleCallback,Es=Le.unstable_cancelCallback,qp=Le.unstable_shouldYield,ef=Le.unstable_requestPaint,re=Le.unstable_now,tf=Le.unstable_getCurrentPriorityLevel,ma=Le.unstable_ImmediatePriority,dc=Le.unstable_UserBlockingPriority,bo=Le.unstable_NormalPriority,nf=Le.unstable_LowPriority,pc=Le.unstable_IdlePriority,Zo=null,rt=null;function rf(e){if(rt&&typeof rt.onCommitFiberRoot=="function")try{rt.onCommitFiberRoot(Zo,e,void 0,(e.current.flags&128)===128)}catch{}}var Ye=Math.clz32?Math.clz32:af,of=Math.log,lf=Math.LN2;function af(e){return e>>>=0,e===0?32:31-(of(e)/lf|0)|0}var Qr=64,Yr=4194304;function er(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function No(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=er(a):(i&=l,i!==0&&(r=er(i)))}else l=n&~o,l!==0?r=er(l):i!==0&&(r=er(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ye(t),o=1<<n,r|=e[n],t&=~o;return r}function sf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function uf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Ye(i),a=1<<l,u=o[l];u===-1?((a&n)===0||(a&r)!==0)&&(o[l]=sf(a,t)):u<=t&&(e.expiredLanes|=a),i&=~a}}function El(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function fc(){var e=Qr;return Qr<<=1,(Qr&4194240)===0&&(Qr=64),e}function zi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function zr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ye(t),e[t]=n}function cf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Ye(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function ga(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ye(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var H=0;function hc(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var mc,ya,gc,yc,vc,Cl=!1,Xr=[],St=null,bt=null,Nt=null,mr=new Map,gr=new Map,wt=[],df="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cs(e,t){switch(e){case"focusin":case"focusout":St=null;break;case"dragenter":case"dragleave":bt=null;break;case"mouseover":case"mouseout":Nt=null;break;case"pointerover":case"pointerout":mr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":gr.delete(t.pointerId)}}function Wn(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=jr(t),t!==null&&ya(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function pf(e,t,n,r,o){switch(t){case"focusin":return St=Wn(St,e,t,n,r,o),!0;case"dragenter":return bt=Wn(bt,e,t,n,r,o),!0;case"mouseover":return Nt=Wn(Nt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return mr.set(i,Wn(mr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,gr.set(i,Wn(gr.get(i)||null,e,t,n,r,o)),!0}return!1}function xc(e){var t=Wt(e.target);if(t!==null){var n=nn(t);if(n!==null){if(t=n.tag,t===13){if(t=ac(n),t!==null){e.blockedOn=t,vc(e.priority,function(){gc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function po(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Fl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);vl=r,n.target.dispatchEvent(r),vl=null}else return t=jr(n),t!==null&&ya(t),e.blockedOn=n,!1;t.shift()}return!0}function Fs(e,t,n){po(e)&&n.delete(t)}function ff(){Cl=!1,St!==null&&po(St)&&(St=null),bt!==null&&po(bt)&&(bt=null),Nt!==null&&po(Nt)&&(Nt=null),mr.forEach(Fs),gr.forEach(Fs)}function Hn(e,t){e.blockedOn===t&&(e.blockedOn=null,Cl||(Cl=!0,Le.unstable_scheduleCallback(Le.unstable_NormalPriority,ff)))}function yr(e){function t(o){return Hn(o,e)}if(0<Xr.length){Hn(Xr[0],e);for(var n=1;n<Xr.length;n++){var r=Xr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(St!==null&&Hn(St,e),bt!==null&&Hn(bt,e),Nt!==null&&Hn(Nt,e),mr.forEach(t),gr.forEach(t),n=0;n<wt.length;n++)r=wt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<wt.length&&(n=wt[0],n.blockedOn===null);)xc(n),n.blockedOn===null&&wt.shift()}var An=gt.ReactCurrentBatchConfig,Ao=!0;function hf(e,t,n,r){var o=H,i=An.transition;An.transition=null;try{H=1,va(e,t,n,r)}finally{H=o,An.transition=i}}function mf(e,t,n,r){var o=H,i=An.transition;An.transition=null;try{H=4,va(e,t,n,r)}finally{H=o,An.transition=i}}function va(e,t,n,r){if(Ao){var o=Fl(e,t,n,r);if(o===null)$i(e,t,r,Do,n),Cs(e,r);else if(pf(o,e,t,n,r))r.stopPropagation();else if(Cs(e,r),t&4&&-1<df.indexOf(e)){for(;o!==null;){var i=jr(o);if(i!==null&&mc(i),i=Fl(e,t,n,r),i===null&&$i(e,t,r,Do,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else $i(e,t,r,null,n)}}var Do=null;function Fl(e,t,n,r){if(Do=null,e=ha(r),e=Wt(e),e!==null)if(t=nn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ac(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Do=e,null}function wc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tf()){case ma:return 1;case dc:return 4;case bo:case nf:return 16;case pc:return 536870912;default:return 16}default:return 16}}var Et=null,xa=null,fo=null;function kc(){if(fo)return fo;var e,t=xa,n=t.length,r,o="value"in Et?Et.value:Et.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return fo=o.slice(e,1<r?1-r:void 0)}function ho(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zr(){return!0}function Ss(){return!1}function Me(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Zr:Ss,this.isPropagationStopped=Ss,this}return ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zr)},persist:function(){},isPersistent:Zr}),t}var In={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wa=Me(In),Tr=ee({},In,{view:0,detail:0}),gf=Me(Tr),Ti,ji,Gn,Jo=ee({},Tr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ka,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gn&&(Gn&&e.type==="mousemove"?(Ti=e.screenX-Gn.screenX,ji=e.screenY-Gn.screenY):ji=Ti=0,Gn=e),Ti)},movementY:function(e){return"movementY"in e?e.movementY:ji}}),bs=Me(Jo),yf=ee({},Jo,{dataTransfer:0}),vf=Me(yf),xf=ee({},Tr,{relatedTarget:0}),Li=Me(xf),wf=ee({},In,{animationName:0,elapsedTime:0,pseudoElement:0}),kf=Me(wf),Ef=ee({},In,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cf=Me(Ef),Ff=ee({},In,{data:0}),Ns=Me(Ff),Sf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Af(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Nf[e])?!!t[e]:!1}function ka(){return Af}var Df=ee({},Tr,{key:function(e){if(e.key){var t=Sf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ho(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ka,charCode:function(e){return e.type==="keypress"?ho(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ho(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Pf=Me(Df),Bf=ee({},Jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),As=Me(Bf),zf=ee({},Tr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ka}),Tf=Me(zf),jf=ee({},In,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lf=Me(jf),_f=ee({},Jo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Mf=Me(_f),Rf=[9,13,27,32],Ea=pt&&"CompositionEvent"in window,or=null;pt&&"documentMode"in document&&(or=document.documentMode);var If=pt&&"TextEvent"in window&&!or,Ec=pt&&(!Ea||or&&8<or&&11>=or),Ds=String.fromCharCode(32),Ps=!1;function Cc(e,t){switch(e){case"keyup":return Rf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mn=!1;function Of(e,t){switch(e){case"compositionend":return Fc(t);case"keypress":return t.which!==32?null:(Ps=!0,Ds);case"textInput":return e=t.data,e===Ds&&Ps?null:e;default:return null}}function Uf(e,t){if(mn)return e==="compositionend"||!Ea&&Cc(e,t)?(e=kc(),fo=xa=Et=null,mn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ec&&t.locale!=="ko"?null:t.data;default:return null}}var $f={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!$f[e.type]:t==="textarea"}function Sc(e,t,n,r){nc(r),t=Po(t,"onChange"),0<t.length&&(n=new wa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ir=null,vr=null;function Vf(e){_c(e,0)}function qo(e){var t=vn(e);if(Yu(t))return e}function Kf(e,t){if(e==="change")return t}var bc=!1;if(pt){var _i;if(pt){var Mi="oninput"in document;if(!Mi){var zs=document.createElement("div");zs.setAttribute("oninput","return;"),Mi=typeof zs.oninput=="function"}_i=Mi}else _i=!1;bc=_i&&(!document.documentMode||9<document.documentMode)}function Ts(){ir&&(ir.detachEvent("onpropertychange",Nc),vr=ir=null)}function Nc(e){if(e.propertyName==="value"&&qo(vr)){var t=[];Sc(t,vr,e,ha(e)),lc(Vf,t)}}function Wf(e,t,n){e==="focusin"?(Ts(),ir=t,vr=n,ir.attachEvent("onpropertychange",Nc)):e==="focusout"&&Ts()}function Hf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qo(vr)}function Gf(e,t){if(e==="click")return qo(t)}function Qf(e,t){if(e==="input"||e==="change")return qo(t)}function Yf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ze=typeof Object.is=="function"?Object.is:Yf;function xr(e,t){if(Ze(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ll.call(t,o)||!Ze(e[o],t[o]))return!1}return!0}function js(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ls(e,t){var n=js(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=js(n)}}function Ac(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ac(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Dc(){for(var e=window,t=Co();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Co(e.document)}return t}function Ca(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Xf(e){var t=Dc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ac(n.ownerDocument.documentElement,n)){if(r!==null&&Ca(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Ls(n,i);var l=Ls(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Zf=pt&&"documentMode"in document&&11>=document.documentMode,gn=null,Sl=null,lr=null,bl=!1;function _s(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bl||gn==null||gn!==Co(r)||(r=gn,"selectionStart"in r&&Ca(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),lr&&xr(lr,r)||(lr=r,r=Po(Sl,"onSelect"),0<r.length&&(t=new wa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gn)))}function Jr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var yn={animationend:Jr("Animation","AnimationEnd"),animationiteration:Jr("Animation","AnimationIteration"),animationstart:Jr("Animation","AnimationStart"),transitionend:Jr("Transition","TransitionEnd")},Ri={},Pc={};pt&&(Pc=document.createElement("div").style,"AnimationEvent"in window||(delete yn.animationend.animation,delete yn.animationiteration.animation,delete yn.animationstart.animation),"TransitionEvent"in window||delete yn.transitionend.transition);function ei(e){if(Ri[e])return Ri[e];if(!yn[e])return e;var t=yn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Pc)return Ri[e]=t[n];return e}var Bc=ei("animationend"),zc=ei("animationiteration"),Tc=ei("animationstart"),jc=ei("transitionend"),Lc=new Map,Ms="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _t(e,t){Lc.set(e,t),tn(t,[e])}for(var Ii=0;Ii<Ms.length;Ii++){var Oi=Ms[Ii],Jf=Oi.toLowerCase(),qf=Oi[0].toUpperCase()+Oi.slice(1);_t(Jf,"on"+qf)}_t(Bc,"onAnimationEnd");_t(zc,"onAnimationIteration");_t(Tc,"onAnimationStart");_t("dblclick","onDoubleClick");_t("focusin","onFocus");_t("focusout","onBlur");_t(jc,"onTransitionEnd");Bn("onMouseEnter",["mouseout","mouseover"]);Bn("onMouseLeave",["mouseout","mouseover"]);Bn("onPointerEnter",["pointerout","pointerover"]);Bn("onPointerLeave",["pointerout","pointerover"]);tn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));tn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));tn("onBeforeInput",["compositionend","keypress","textInput","paste"]);tn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));tn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));tn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),e0=new Set("cancel close invalid load scroll toggle".split(" ").concat(tr));function Rs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Zp(r,t,void 0,e),e.currentTarget=null}function _c(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==i&&o.isPropagationStopped())break e;Rs(o,a,c),i=u}else for(l=0;l<r.length;l++){if(a=r[l],u=a.instance,c=a.currentTarget,a=a.listener,u!==i&&o.isPropagationStopped())break e;Rs(o,a,c),i=u}}}if(So)throw e=kl,So=!1,kl=null,e}function Y(e,t){var n=t[Bl];n===void 0&&(n=t[Bl]=new Set);var r=e+"__bubble";n.has(r)||(Mc(t,e,2,!1),n.add(r))}function Ui(e,t,n){var r=0;t&&(r|=4),Mc(n,e,r,t)}var qr="_reactListening"+Math.random().toString(36).slice(2);function wr(e){if(!e[qr]){e[qr]=!0,Ku.forEach(function(n){n!=="selectionchange"&&(e0.has(n)||Ui(n,!1,e),Ui(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[qr]||(t[qr]=!0,Ui("selectionchange",!1,t))}}function Mc(e,t,n,r){switch(wc(t)){case 1:var o=hf;break;case 4:o=mf;break;default:o=va}n=o.bind(null,t,n,e),o=void 0,!wl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function $i(e,t,n,r,o){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;l=l.return}for(;a!==null;){if(l=Wt(a),l===null)return;if(u=l.tag,u===5||u===6){r=i=l;continue e}a=a.parentNode}}r=r.return}lc(function(){var c=i,g=ha(n),y=[];e:{var m=Lc.get(e);if(m!==void 0){var F=wa,E=e;switch(e){case"keypress":if(ho(n)===0)break e;case"keydown":case"keyup":F=Pf;break;case"focusin":E="focus",F=Li;break;case"focusout":E="blur",F=Li;break;case"beforeblur":case"afterblur":F=Li;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=bs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=vf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=Tf;break;case Bc:case zc:case Tc:F=kf;break;case jc:F=Lf;break;case"scroll":F=gf;break;case"wheel":F=Mf;break;case"copy":case"cut":case"paste":F=Cf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=As}var C=(t&4)!==0,L=!C&&e==="scroll",h=C?m!==null?m+"Capture":null:m;C=[];for(var d=c,p;d!==null;){p=d;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,h!==null&&(w=hr(d,h),w!=null&&C.push(kr(d,w,p)))),L)break;d=d.return}0<C.length&&(m=new F(m,E,null,n,g),y.push({event:m,listeners:C}))}}if((t&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",F=e==="mouseout"||e==="pointerout",m&&n!==vl&&(E=n.relatedTarget||n.fromElement)&&(Wt(E)||E[ft]))break e;if((F||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,F?(E=n.relatedTarget||n.toElement,F=c,E=E?Wt(E):null,E!==null&&(L=nn(E),E!==L||E.tag!==5&&E.tag!==6)&&(E=null)):(F=null,E=c),F!==E)){if(C=bs,w="onMouseLeave",h="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(C=As,w="onPointerLeave",h="onPointerEnter",d="pointer"),L=F==null?m:vn(F),p=E==null?m:vn(E),m=new C(w,d+"leave",F,n,g),m.target=L,m.relatedTarget=p,w=null,Wt(g)===c&&(C=new C(h,d+"enter",E,n,g),C.target=p,C.relatedTarget=L,w=C),L=w,F&&E)t:{for(C=F,h=E,d=0,p=C;p;p=dn(p))d++;for(p=0,w=h;w;w=dn(w))p++;for(;0<d-p;)C=dn(C),d--;for(;0<p-d;)h=dn(h),p--;for(;d--;){if(C===h||h!==null&&C===h.alternate)break t;C=dn(C),h=dn(h)}C=null}else C=null;F!==null&&Is(y,m,F,C,!1),E!==null&&L!==null&&Is(y,L,E,C,!0)}}e:{if(m=c?vn(c):window,F=m.nodeName&&m.nodeName.toLowerCase(),F==="select"||F==="input"&&m.type==="file")var S=Kf;else if(Bs(m))if(bc)S=Qf;else{S=Hf;var A=Wf}else(F=m.nodeName)&&F.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=Gf);if(S&&(S=S(e,c))){Sc(y,S,n,g);break e}A&&A(e,m,c),e==="focusout"&&(A=m._wrapperState)&&A.controlled&&m.type==="number"&&fl(m,"number",m.value)}switch(A=c?vn(c):window,e){case"focusin":(Bs(A)||A.contentEditable==="true")&&(gn=A,Sl=c,lr=null);break;case"focusout":lr=Sl=gn=null;break;case"mousedown":bl=!0;break;case"contextmenu":case"mouseup":case"dragend":bl=!1,_s(y,n,g);break;case"selectionchange":if(Zf)break;case"keydown":case"keyup":_s(y,n,g)}var D;if(Ea)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else mn?Cc(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Ec&&n.locale!=="ko"&&(mn||P!=="onCompositionStart"?P==="onCompositionEnd"&&mn&&(D=kc()):(Et=g,xa="value"in Et?Et.value:Et.textContent,mn=!0)),A=Po(c,P),0<A.length&&(P=new Ns(P,e,null,n,g),y.push({event:P,listeners:A}),D?P.data=D:(D=Fc(n),D!==null&&(P.data=D)))),(D=If?Of(e,n):Uf(e,n))&&(c=Po(c,"onBeforeInput"),0<c.length&&(g=new Ns("onBeforeInput","beforeinput",null,n,g),y.push({event:g,listeners:c}),g.data=D))}_c(y,t)})}function kr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Po(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=hr(e,n),i!=null&&r.unshift(kr(e,i,o)),i=hr(e,t),i!=null&&r.push(kr(e,i,o))),e=e.return}return r}function dn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Is(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,o?(u=hr(n,i),u!=null&&l.unshift(kr(n,u,a))):o||(u=hr(n,i),u!=null&&l.push(kr(n,u,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var t0=/\r\n?/g,n0=/\u0000|\uFFFD/g;function Os(e){return(typeof e=="string"?e:""+e).replace(t0,`
`).replace(n0,"")}function eo(e,t,n){if(t=Os(t),Os(e)!==t&&n)throw Error(N(425))}function Bo(){}var Nl=null,Al=null;function Dl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Pl=typeof setTimeout=="function"?setTimeout:void 0,r0=typeof clearTimeout=="function"?clearTimeout:void 0,Us=typeof Promise=="function"?Promise:void 0,o0=typeof queueMicrotask=="function"?queueMicrotask:typeof Us<"u"?function(e){return Us.resolve(null).then(e).catch(i0)}:Pl;function i0(e){setTimeout(function(){throw e})}function Vi(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),yr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);yr(t)}function At(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function $s(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var On=Math.random().toString(36).slice(2),nt="__reactFiber$"+On,Er="__reactProps$"+On,ft="__reactContainer$"+On,Bl="__reactEvents$"+On,l0="__reactListeners$"+On,a0="__reactHandles$"+On;function Wt(e){var t=e[nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ft]||n[nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=$s(e);e!==null;){if(n=e[nt])return n;e=$s(e)}return t}e=n,n=e.parentNode}return null}function jr(e){return e=e[nt]||e[ft],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function vn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function ti(e){return e[Er]||null}var zl=[],xn=-1;function Mt(e){return{current:e}}function X(e){0>xn||(e.current=zl[xn],zl[xn]=null,xn--)}function G(e,t){xn++,zl[xn]=e.current,e.current=t}var Lt={},ke=Mt(Lt),De=Mt(!1),Xt=Lt;function zn(e,t){var n=e.type.contextTypes;if(!n)return Lt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Pe(e){return e=e.childContextTypes,e!=null}function zo(){X(De),X(ke)}function Vs(e,t,n){if(ke.current!==Lt)throw Error(N(168));G(ke,t),G(De,n)}function Rc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(N(108,Kp(e)||"Unknown",o));return ee({},n,r)}function To(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Lt,Xt=ke.current,G(ke,e),G(De,De.current),!0}function Ks(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=Rc(e,t,Xt),r.__reactInternalMemoizedMergedChildContext=e,X(De),X(ke),G(ke,e)):X(De),G(De,n)}var at=null,ni=!1,Ki=!1;function Ic(e){at===null?at=[e]:at.push(e)}function s0(e){ni=!0,Ic(e)}function Rt(){if(!Ki&&at!==null){Ki=!0;var e=0,t=H;try{var n=at;for(H=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}at=null,ni=!1}catch(o){throw at!==null&&(at=at.slice(e+1)),cc(ma,Rt),o}finally{H=t,Ki=!1}}return null}var wn=[],kn=0,jo=null,Lo=0,Re=[],Ie=0,Zt=null,st=1,ut="";function Vt(e,t){wn[kn++]=Lo,wn[kn++]=jo,jo=e,Lo=t}function Oc(e,t,n){Re[Ie++]=st,Re[Ie++]=ut,Re[Ie++]=Zt,Zt=e;var r=st;e=ut;var o=32-Ye(r)-1;r&=~(1<<o),n+=1;var i=32-Ye(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,st=1<<32-Ye(t)+o|n<<o|r,ut=i+e}else st=1<<i|n<<o|r,ut=e}function Fa(e){e.return!==null&&(Vt(e,1),Oc(e,1,0))}function Sa(e){for(;e===jo;)jo=wn[--kn],wn[kn]=null,Lo=wn[--kn],wn[kn]=null;for(;e===Zt;)Zt=Re[--Ie],Re[Ie]=null,ut=Re[--Ie],Re[Ie]=null,st=Re[--Ie],Re[Ie]=null}var je=null,Te=null,Z=!1,Qe=null;function Uc(e,t){var n=Oe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ws(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,je=e,Te=At(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,je=e,Te=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Zt!==null?{id:st,overflow:ut}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Oe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,je=e,Te=null,!0):!1;default:return!1}}function Tl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function jl(e){if(Z){var t=Te;if(t){var n=t;if(!Ws(e,t)){if(Tl(e))throw Error(N(418));t=At(n.nextSibling);var r=je;t&&Ws(e,t)?Uc(r,n):(e.flags=e.flags&-4097|2,Z=!1,je=e)}}else{if(Tl(e))throw Error(N(418));e.flags=e.flags&-4097|2,Z=!1,je=e}}}function Hs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;je=e}function to(e){if(e!==je)return!1;if(!Z)return Hs(e),Z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Dl(e.type,e.memoizedProps)),t&&(t=Te)){if(Tl(e))throw $c(),Error(N(418));for(;t;)Uc(e,t),t=At(t.nextSibling)}if(Hs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Te=At(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Te=null}}else Te=je?At(e.stateNode.nextSibling):null;return!0}function $c(){for(var e=Te;e;)e=At(e.nextSibling)}function Tn(){Te=je=null,Z=!1}function ba(e){Qe===null?Qe=[e]:Qe.push(e)}var u0=gt.ReactCurrentBatchConfig;function Qn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function no(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Gs(e){var t=e._init;return t(e._payload)}function Vc(e){function t(h,d){if(e){var p=h.deletions;p===null?(h.deletions=[d],h.flags|=16):p.push(d)}}function n(h,d){if(!e)return null;for(;d!==null;)t(h,d),d=d.sibling;return null}function r(h,d){for(h=new Map;d!==null;)d.key!==null?h.set(d.key,d):h.set(d.index,d),d=d.sibling;return h}function o(h,d){return h=zt(h,d),h.index=0,h.sibling=null,h}function i(h,d,p){return h.index=p,e?(p=h.alternate,p!==null?(p=p.index,p<d?(h.flags|=2,d):p):(h.flags|=2,d)):(h.flags|=1048576,d)}function l(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,d,p,w){return d===null||d.tag!==6?(d=Zi(p,h.mode,w),d.return=h,d):(d=o(d,p),d.return=h,d)}function u(h,d,p,w){var S=p.type;return S===hn?g(h,d,p.props.children,w,p.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===vt&&Gs(S)===d.type)?(w=o(d,p.props),w.ref=Qn(h,d,p),w.return=h,w):(w=ko(p.type,p.key,p.props,null,h.mode,w),w.ref=Qn(h,d,p),w.return=h,w)}function c(h,d,p,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=Ji(p,h.mode,w),d.return=h,d):(d=o(d,p.children||[]),d.return=h,d)}function g(h,d,p,w,S){return d===null||d.tag!==7?(d=Yt(p,h.mode,w,S),d.return=h,d):(d=o(d,p),d.return=h,d)}function y(h,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Zi(""+d,h.mode,p),d.return=h,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Wr:return p=ko(d.type,d.key,d.props,null,h.mode,p),p.ref=Qn(h,null,d),p.return=h,p;case fn:return d=Ji(d,h.mode,p),d.return=h,d;case vt:var w=d._init;return y(h,w(d._payload),p)}if(qn(d)||Vn(d))return d=Yt(d,h.mode,p,null),d.return=h,d;no(h,d)}return null}function m(h,d,p,w){var S=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:a(h,d,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Wr:return p.key===S?u(h,d,p,w):null;case fn:return p.key===S?c(h,d,p,w):null;case vt:return S=p._init,m(h,d,S(p._payload),w)}if(qn(p)||Vn(p))return S!==null?null:g(h,d,p,w,null);no(h,p)}return null}function F(h,d,p,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return h=h.get(p)||null,a(d,h,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Wr:return h=h.get(w.key===null?p:w.key)||null,u(d,h,w,S);case fn:return h=h.get(w.key===null?p:w.key)||null,c(d,h,w,S);case vt:var A=w._init;return F(h,d,p,A(w._payload),S)}if(qn(w)||Vn(w))return h=h.get(p)||null,g(d,h,w,S,null);no(d,w)}return null}function E(h,d,p,w){for(var S=null,A=null,D=d,P=d=0,U=null;D!==null&&P<p.length;P++){D.index>P?(U=D,D=null):U=D.sibling;var M=m(h,D,p[P],w);if(M===null){D===null&&(D=U);break}e&&D&&M.alternate===null&&t(h,D),d=i(M,d,P),A===null?S=M:A.sibling=M,A=M,D=U}if(P===p.length)return n(h,D),Z&&Vt(h,P),S;if(D===null){for(;P<p.length;P++)D=y(h,p[P],w),D!==null&&(d=i(D,d,P),A===null?S=D:A.sibling=D,A=D);return Z&&Vt(h,P),S}for(D=r(h,D);P<p.length;P++)U=F(D,h,P,p[P],w),U!==null&&(e&&U.alternate!==null&&D.delete(U.key===null?P:U.key),d=i(U,d,P),A===null?S=U:A.sibling=U,A=U);return e&&D.forEach(function(oe){return t(h,oe)}),Z&&Vt(h,P),S}function C(h,d,p,w){var S=Vn(p);if(typeof S!="function")throw Error(N(150));if(p=S.call(p),p==null)throw Error(N(151));for(var A=S=null,D=d,P=d=0,U=null,M=p.next();D!==null&&!M.done;P++,M=p.next()){D.index>P?(U=D,D=null):U=D.sibling;var oe=m(h,D,M.value,w);if(oe===null){D===null&&(D=U);break}e&&D&&oe.alternate===null&&t(h,D),d=i(oe,d,P),A===null?S=oe:A.sibling=oe,A=oe,D=U}if(M.done)return n(h,D),Z&&Vt(h,P),S;if(D===null){for(;!M.done;P++,M=p.next())M=y(h,M.value,w),M!==null&&(d=i(M,d,P),A===null?S=M:A.sibling=M,A=M);return Z&&Vt(h,P),S}for(D=r(h,D);!M.done;P++,M=p.next())M=F(D,h,P,M.value,w),M!==null&&(e&&M.alternate!==null&&D.delete(M.key===null?P:M.key),d=i(M,d,P),A===null?S=M:A.sibling=M,A=M);return e&&D.forEach(function(fe){return t(h,fe)}),Z&&Vt(h,P),S}function L(h,d,p,w){if(typeof p=="object"&&p!==null&&p.type===hn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Wr:e:{for(var S=p.key,A=d;A!==null;){if(A.key===S){if(S=p.type,S===hn){if(A.tag===7){n(h,A.sibling),d=o(A,p.props.children),d.return=h,h=d;break e}}else if(A.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===vt&&Gs(S)===A.type){n(h,A.sibling),d=o(A,p.props),d.ref=Qn(h,A,p),d.return=h,h=d;break e}n(h,A);break}else t(h,A);A=A.sibling}p.type===hn?(d=Yt(p.props.children,h.mode,w,p.key),d.return=h,h=d):(w=ko(p.type,p.key,p.props,null,h.mode,w),w.ref=Qn(h,d,p),w.return=h,h=w)}return l(h);case fn:e:{for(A=p.key;d!==null;){if(d.key===A)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(h,d.sibling),d=o(d,p.children||[]),d.return=h,h=d;break e}else{n(h,d);break}else t(h,d);d=d.sibling}d=Ji(p,h.mode,w),d.return=h,h=d}return l(h);case vt:return A=p._init,L(h,d,A(p._payload),w)}if(qn(p))return E(h,d,p,w);if(Vn(p))return C(h,d,p,w);no(h,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(h,d.sibling),d=o(d,p),d.return=h,h=d):(n(h,d),d=Zi(p,h.mode,w),d.return=h,h=d),l(h)):n(h,d)}return L}var jn=Vc(!0),Kc=Vc(!1),_o=Mt(null),Mo=null,En=null,Na=null;function Aa(){Na=En=Mo=null}function Da(e){var t=_o.current;X(_o),e._currentValue=t}function Ll(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Dn(e,t){Mo=e,Na=En=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ae=!0),e.firstContext=null)}function $e(e){var t=e._currentValue;if(Na!==e)if(e={context:e,memoizedValue:t,next:null},En===null){if(Mo===null)throw Error(N(308));En=e,Mo.dependencies={lanes:0,firstContext:e}}else En=En.next=e;return t}var Ht=null;function Pa(e){Ht===null?Ht=[e]:Ht.push(e)}function Wc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Pa(t)):(n.next=o.next,o.next=n),t.interleaved=n,ht(e,r)}function ht(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var xt=!1;function Ba(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ct(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Dt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,($&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,ht(e,n)}return o=r.interleaved,o===null?(t.next=t,Pa(r)):(t.next=o.next,o.next=t),r.interleaved=t,ht(e,n)}function mo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ga(e,n)}}function Qs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ro(e,t,n,r){var o=e.updateQueue;xt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var u=a,c=u.next;u.next=null,l===null?i=c:l.next=c,l=u;var g=e.alternate;g!==null&&(g=g.updateQueue,a=g.lastBaseUpdate,a!==l&&(a===null?g.firstBaseUpdate=c:a.next=c,g.lastBaseUpdate=u))}if(i!==null){var y=o.baseState;l=0,g=c=u=null,a=i;do{var m=a.lane,F=a.eventTime;if((r&m)===m){g!==null&&(g=g.next={eventTime:F,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var E=e,C=a;switch(m=t,F=n,C.tag){case 1:if(E=C.payload,typeof E=="function"){y=E.call(F,y,m);break e}y=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=C.payload,m=typeof E=="function"?E.call(F,y,m):E,m==null)break e;y=ee({},y,m);break e;case 2:xt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[a]:m.push(a))}else F={eventTime:F,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},g===null?(c=g=F,u=y):g=g.next=F,l|=m;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;m=a,a=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(1);if(g===null&&(u=y),o.baseState=u,o.firstBaseUpdate=c,o.lastBaseUpdate=g,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);qt|=l,e.lanes=l,e.memoizedState=y}}function Ys(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(N(191,o));o.call(r)}}}var Lr={},ot=Mt(Lr),Cr=Mt(Lr),Fr=Mt(Lr);function Gt(e){if(e===Lr)throw Error(N(174));return e}function za(e,t){switch(G(Fr,t),G(Cr,e),G(ot,Lr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ml(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ml(t,e)}X(ot),G(ot,t)}function Ln(){X(ot),X(Cr),X(Fr)}function Gc(e){Gt(Fr.current);var t=Gt(ot.current),n=ml(t,e.type);t!==n&&(G(Cr,e),G(ot,n))}function Ta(e){Cr.current===e&&(X(ot),X(Cr))}var J=Mt(0);function Io(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wi=[];function ja(){for(var e=0;e<Wi.length;e++)Wi[e]._workInProgressVersionPrimary=null;Wi.length=0}var go=gt.ReactCurrentDispatcher,Hi=gt.ReactCurrentBatchConfig,Jt=0,q=null,ae=null,de=null,Oo=!1,ar=!1,Sr=0,c0=0;function ve(){throw Error(N(321))}function La(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ze(e[n],t[n]))return!1;return!0}function _a(e,t,n,r,o,i){if(Jt=i,q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,go.current=e===null||e.memoizedState===null?h0:m0,e=n(r,o),ar){i=0;do{if(ar=!1,Sr=0,25<=i)throw Error(N(301));i+=1,de=ae=null,t.updateQueue=null,go.current=g0,e=n(r,o)}while(ar)}if(go.current=Uo,t=ae!==null&&ae.next!==null,Jt=0,de=ae=q=null,Oo=!1,t)throw Error(N(300));return e}function Ma(){var e=Sr!==0;return Sr=0,e}function tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?q.memoizedState=de=e:de=de.next=e,de}function Ve(){if(ae===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var t=de===null?q.memoizedState:de.next;if(t!==null)de=t,ae=e;else{if(e===null)throw Error(N(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},de===null?q.memoizedState=de=e:de=de.next=e}return de}function br(e,t){return typeof t=="function"?t(e):t}function Gi(e){var t=Ve(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=ae,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,u=null,c=i;do{var g=c.lane;if((Jt&g)===g)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var y={lane:g,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=y,l=r):u=u.next=y,q.lanes|=g,qt|=g}c=c.next}while(c!==null&&c!==i);u===null?l=r:u.next=a,Ze(r,t.memoizedState)||(Ae=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,q.lanes|=i,qt|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Qi(e){var t=Ve(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Ze(i,t.memoizedState)||(Ae=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Qc(){}function Yc(e,t){var n=q,r=Ve(),o=t(),i=!Ze(r.memoizedState,o);if(i&&(r.memoizedState=o,Ae=!0),r=r.queue,Ra(Jc.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||de!==null&&de.memoizedState.tag&1){if(n.flags|=2048,Nr(9,Zc.bind(null,n,r,o,t),void 0,null),pe===null)throw Error(N(349));(Jt&30)!==0||Xc(n,t,o)}return o}function Xc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Zc(e,t,n,r){t.value=n,t.getSnapshot=r,qc(t)&&ed(e)}function Jc(e,t,n){return n(function(){qc(t)&&ed(e)})}function qc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ze(e,n)}catch{return!0}}function ed(e){var t=ht(e,1);t!==null&&Xe(t,e,1,-1)}function Xs(e){var t=tt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:br,lastRenderedState:e},t.queue=e,e=e.dispatch=f0.bind(null,q,e),[t.memoizedState,e]}function Nr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function td(){return Ve().memoizedState}function yo(e,t,n,r){var o=tt();q.flags|=e,o.memoizedState=Nr(1|t,n,void 0,r===void 0?null:r)}function ri(e,t,n,r){var o=Ve();r=r===void 0?null:r;var i=void 0;if(ae!==null){var l=ae.memoizedState;if(i=l.destroy,r!==null&&La(r,l.deps)){o.memoizedState=Nr(t,n,i,r);return}}q.flags|=e,o.memoizedState=Nr(1|t,n,i,r)}function Zs(e,t){return yo(8390656,8,e,t)}function Ra(e,t){return ri(2048,8,e,t)}function nd(e,t){return ri(4,2,e,t)}function rd(e,t){return ri(4,4,e,t)}function od(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function id(e,t,n){return n=n!=null?n.concat([e]):null,ri(4,4,od.bind(null,t,e),n)}function Ia(){}function ld(e,t){var n=Ve();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&La(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ad(e,t){var n=Ve();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&La(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function sd(e,t,n){return(Jt&21)===0?(e.baseState&&(e.baseState=!1,Ae=!0),e.memoizedState=n):(Ze(n,t)||(n=fc(),q.lanes|=n,qt|=n,e.baseState=!0),t)}function d0(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var r=Hi.transition;Hi.transition={};try{e(!1),t()}finally{H=n,Hi.transition=r}}function ud(){return Ve().memoizedState}function p0(e,t,n){var r=Bt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},cd(e))dd(t,n);else if(n=Wc(e,t,n,r),n!==null){var o=Fe();Xe(n,e,r,o),pd(n,t,r)}}function f0(e,t,n){var r=Bt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(cd(e))dd(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,Ze(a,l)){var u=t.interleaved;u===null?(o.next=o,Pa(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=Wc(e,t,o,r),n!==null&&(o=Fe(),Xe(n,e,r,o),pd(n,t,r))}}function cd(e){var t=e.alternate;return e===q||t!==null&&t===q}function dd(e,t){ar=Oo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function pd(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ga(e,n)}}var Uo={readContext:$e,useCallback:ve,useContext:ve,useEffect:ve,useImperativeHandle:ve,useInsertionEffect:ve,useLayoutEffect:ve,useMemo:ve,useReducer:ve,useRef:ve,useState:ve,useDebugValue:ve,useDeferredValue:ve,useTransition:ve,useMutableSource:ve,useSyncExternalStore:ve,useId:ve,unstable_isNewReconciler:!1},h0={readContext:$e,useCallback:function(e,t){return tt().memoizedState=[e,t===void 0?null:t],e},useContext:$e,useEffect:Zs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,yo(4194308,4,od.bind(null,t,e),n)},useLayoutEffect:function(e,t){return yo(4194308,4,e,t)},useInsertionEffect:function(e,t){return yo(4,2,e,t)},useMemo:function(e,t){var n=tt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=tt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=p0.bind(null,q,e),[r.memoizedState,e]},useRef:function(e){var t=tt();return e={current:e},t.memoizedState=e},useState:Xs,useDebugValue:Ia,useDeferredValue:function(e){return tt().memoizedState=e},useTransition:function(){var e=Xs(!1),t=e[0];return e=d0.bind(null,e[1]),tt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=q,o=tt();if(Z){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),pe===null)throw Error(N(349));(Jt&30)!==0||Xc(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Zs(Jc.bind(null,r,i,e),[e]),r.flags|=2048,Nr(9,Zc.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=tt(),t=pe.identifierPrefix;if(Z){var n=ut,r=st;n=(r&~(1<<32-Ye(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Sr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=c0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},m0={readContext:$e,useCallback:ld,useContext:$e,useEffect:Ra,useImperativeHandle:id,useInsertionEffect:nd,useLayoutEffect:rd,useMemo:ad,useReducer:Gi,useRef:td,useState:function(){return Gi(br)},useDebugValue:Ia,useDeferredValue:function(e){var t=Ve();return sd(t,ae.memoizedState,e)},useTransition:function(){var e=Gi(br)[0],t=Ve().memoizedState;return[e,t]},useMutableSource:Qc,useSyncExternalStore:Yc,useId:ud,unstable_isNewReconciler:!1},g0={readContext:$e,useCallback:ld,useContext:$e,useEffect:Ra,useImperativeHandle:id,useInsertionEffect:nd,useLayoutEffect:rd,useMemo:ad,useReducer:Qi,useRef:td,useState:function(){return Qi(br)},useDebugValue:Ia,useDeferredValue:function(e){var t=Ve();return ae===null?t.memoizedState=e:sd(t,ae.memoizedState,e)},useTransition:function(){var e=Qi(br)[0],t=Ve().memoizedState;return[e,t]},useMutableSource:Qc,useSyncExternalStore:Yc,useId:ud,unstable_isNewReconciler:!1};function He(e,t){if(e&&e.defaultProps){t=ee({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function _l(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var oi={isMounted:function(e){return(e=e._reactInternals)?nn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Fe(),o=Bt(e),i=ct(r,o);i.payload=t,n!=null&&(i.callback=n),t=Dt(e,i,o),t!==null&&(Xe(t,e,o,r),mo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Fe(),o=Bt(e),i=ct(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Dt(e,i,o),t!==null&&(Xe(t,e,o,r),mo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Fe(),r=Bt(e),o=ct(n,r);o.tag=2,t!=null&&(o.callback=t),t=Dt(e,o,r),t!==null&&(Xe(t,e,r,n),mo(t,e,r))}};function Js(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!xr(n,r)||!xr(o,i):!0}function fd(e,t,n){var r=!1,o=Lt,i=t.contextType;return typeof i=="object"&&i!==null?i=$e(i):(o=Pe(t)?Xt:ke.current,r=t.contextTypes,i=(r=r!=null)?zn(e,o):Lt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=oi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function qs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&oi.enqueueReplaceState(t,t.state,null)}function Ml(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Ba(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=$e(i):(i=Pe(t)?Xt:ke.current,o.context=zn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(_l(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&oi.enqueueReplaceState(o,o.state,null),Ro(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function _n(e,t){try{var n="",r=t;do n+=Vp(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Yi(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function Rl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var y0=typeof WeakMap=="function"?WeakMap:Map;function hd(e,t,n){n=ct(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Vo||(Vo=!0,Ql=r),Rl(e,t)},n}function md(e,t,n){n=ct(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Rl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Rl(e,t),typeof r!="function"&&(Pt===null?Pt=new Set([this]):Pt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function eu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new y0;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=B0.bind(null,e,t,n),t.then(e,e))}function tu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function nu(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ct(-1,1),t.tag=2,Dt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var v0=gt.ReactCurrentOwner,Ae=!1;function Ce(e,t,n,r){t.child=e===null?Kc(t,null,n,r):jn(t,e.child,n,r)}function ru(e,t,n,r,o){n=n.render;var i=t.ref;return Dn(t,o),r=_a(e,t,n,r,i,o),n=Ma(),e!==null&&!Ae?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,mt(e,t,o)):(Z&&n&&Fa(t),t.flags|=1,Ce(e,t,r,o),t.child)}function ou(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Ga(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,gd(e,t,i,r,o)):(e=ko(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&o)===0){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:xr,n(l,r)&&e.ref===t.ref)return mt(e,t,o)}return t.flags|=1,e=zt(i,r),e.ref=t.ref,e.return=t,t.child=e}function gd(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(xr(i,r)&&e.ref===t.ref)if(Ae=!1,t.pendingProps=r=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Ae=!0);else return t.lanes=e.lanes,mt(e,t,o)}return Il(e,t,n,r,o)}function yd(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(Fn,ze),ze|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,G(Fn,ze),ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,G(Fn,ze),ze|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,G(Fn,ze),ze|=r;return Ce(e,t,o,n),t.child}function vd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Il(e,t,n,r,o){var i=Pe(n)?Xt:ke.current;return i=zn(t,i),Dn(t,o),n=_a(e,t,n,r,i,o),r=Ma(),e!==null&&!Ae?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,mt(e,t,o)):(Z&&r&&Fa(t),t.flags|=1,Ce(e,t,n,o),t.child)}function iu(e,t,n,r,o){if(Pe(n)){var i=!0;To(t)}else i=!1;if(Dn(t,o),t.stateNode===null)vo(e,t),fd(t,n,r),Ml(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=$e(c):(c=Pe(n)?Xt:ke.current,c=zn(t,c));var g=n.getDerivedStateFromProps,y=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function";y||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||u!==c)&&qs(t,l,r,c),xt=!1;var m=t.memoizedState;l.state=m,Ro(t,r,l,o),u=t.memoizedState,a!==r||m!==u||De.current||xt?(typeof g=="function"&&(_l(t,n,g,r),u=t.memoizedState),(a=xt||Js(t,n,a,r,m,u,c))?(y||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Hc(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:He(t.type,a),l.props=c,y=t.pendingProps,m=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=$e(u):(u=Pe(n)?Xt:ke.current,u=zn(t,u));var F=n.getDerivedStateFromProps;(g=typeof F=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==y||m!==u)&&qs(t,l,r,u),xt=!1,m=t.memoizedState,l.state=m,Ro(t,r,l,o);var E=t.memoizedState;a!==y||m!==E||De.current||xt?(typeof F=="function"&&(_l(t,n,F,r),E=t.memoizedState),(c=xt||Js(t,n,c,r,m,E,u)||!1)?(g||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,E,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,E,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=E),l.props=r,l.state=E,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Ol(e,t,n,r,i,o)}function Ol(e,t,n,r,o,i){vd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Ks(t,n,!1),mt(e,t,i);r=t.stateNode,v0.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=jn(t,e.child,null,i),t.child=jn(t,null,a,i)):Ce(e,t,a,i),t.memoizedState=r.state,o&&Ks(t,n,!0),t.child}function xd(e){var t=e.stateNode;t.pendingContext?Vs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Vs(e,t.context,!1),za(e,t.containerInfo)}function lu(e,t,n,r,o){return Tn(),ba(o),t.flags|=256,Ce(e,t,n,r),t.child}var Ul={dehydrated:null,treeContext:null,retryLane:0};function $l(e){return{baseLanes:e,cachePool:null,transitions:null}}function wd(e,t,n){var r=t.pendingProps,o=J.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),G(J,o&1),e===null)return jl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=l):i=ai(l,r,0,null),e=Yt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=$l(n),t.memoizedState=Ul,e):Oa(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return x0(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var u={mode:"hidden",children:r.children};return(l&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=zt(o,u),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=zt(a,i):(i=Yt(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?$l(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Ul,r}return i=e.child,e=i.sibling,r=zt(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Oa(e,t){return t=ai({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ro(e,t,n,r){return r!==null&&ba(r),jn(t,e.child,null,n),e=Oa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function x0(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Yi(Error(N(422))),ro(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=ai({mode:"visible",children:r.children},o,0,null),i=Yt(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&jn(t,e.child,null,l),t.child.memoizedState=$l(l),t.memoizedState=Ul,i);if((t.mode&1)===0)return ro(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(N(419)),r=Yi(i,r,void 0),ro(e,t,l,r)}if(a=(l&e.childLanes)!==0,Ae||a){if(r=pe,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|l))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,ht(e,o),Xe(r,e,o,-1))}return Ha(),r=Yi(Error(N(421))),ro(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=z0.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Te=At(o.nextSibling),je=t,Z=!0,Qe=null,e!==null&&(Re[Ie++]=st,Re[Ie++]=ut,Re[Ie++]=Zt,st=e.id,ut=e.overflow,Zt=t),t=Oa(t,r.children),t.flags|=4096,t)}function au(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ll(e.return,t,n)}function Xi(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function kd(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ce(e,t,r.children,n),r=J.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&au(e,n,t);else if(e.tag===19)au(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(G(J,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Io(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Xi(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Io(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Xi(t,!0,n,null,i);break;case"together":Xi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function vo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function mt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),qt|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=zt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=zt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function w0(e,t,n){switch(t.tag){case 3:xd(t),Tn();break;case 5:Gc(t);break;case 1:Pe(t.type)&&To(t);break;case 4:za(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;G(_o,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(G(J,J.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?wd(e,t,n):(G(J,J.current&1),e=mt(e,t,n),e!==null?e.sibling:null);G(J,J.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return kd(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),G(J,J.current),r)break;return null;case 22:case 23:return t.lanes=0,yd(e,t,n)}return mt(e,t,n)}var Ed,Vl,Cd,Fd;Ed=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vl=function(){};Cd=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Gt(ot.current);var i=null;switch(n){case"input":o=dl(e,o),r=dl(e,r),i=[];break;case"select":o=ee({},o,{value:void 0}),r=ee({},r,{value:void 0}),i=[];break;case"textarea":o=hl(e,o),r=hl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Bo)}gl(n,r);var l;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(pr.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(a=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&a[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(pr.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Y("scroll",e),i||a===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Fd=function(e,t,n,r){n!==r&&(t.flags|=4)};function Yn(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function k0(e,t,n){var r=t.pendingProps;switch(Sa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xe(t),null;case 1:return Pe(t.type)&&zo(),xe(t),null;case 3:return r=t.stateNode,Ln(),X(De),X(ke),ja(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(to(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Qe!==null&&(Zl(Qe),Qe=null))),Vl(e,t),xe(t),null;case 5:Ta(t);var o=Gt(Fr.current);if(n=t.type,e!==null&&t.stateNode!=null)Cd(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return xe(t),null}if(e=Gt(ot.current),to(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[nt]=t,r[Er]=i,e=(t.mode&1)!==0,n){case"dialog":Y("cancel",r),Y("close",r);break;case"iframe":case"object":case"embed":Y("load",r);break;case"video":case"audio":for(o=0;o<tr.length;o++)Y(tr[o],r);break;case"source":Y("error",r);break;case"img":case"image":case"link":Y("error",r),Y("load",r);break;case"details":Y("toggle",r);break;case"input":gs(r,i),Y("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Y("invalid",r);break;case"textarea":vs(r,i),Y("invalid",r)}gl(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&eo(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&eo(r.textContent,a,e),o=["children",""+a]):pr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&Y("scroll",r)}switch(n){case"input":Hr(r),ys(r,i,!0);break;case"textarea":Hr(r),xs(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Bo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ju(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[nt]=t,e[Er]=r,Ed(e,t,!1,!1),t.stateNode=e;e:{switch(l=yl(n,r),n){case"dialog":Y("cancel",e),Y("close",e),o=r;break;case"iframe":case"object":case"embed":Y("load",e),o=r;break;case"video":case"audio":for(o=0;o<tr.length;o++)Y(tr[o],e);o=r;break;case"source":Y("error",e),o=r;break;case"img":case"image":case"link":Y("error",e),Y("load",e),o=r;break;case"details":Y("toggle",e),o=r;break;case"input":gs(e,r),o=dl(e,r),Y("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ee({},r,{value:void 0}),Y("invalid",e);break;case"textarea":vs(e,r),o=hl(e,r),Y("invalid",e);break;default:o=r}gl(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?tc(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&qu(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&fr(e,u):typeof u=="number"&&fr(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(pr.hasOwnProperty(i)?u!=null&&i==="onScroll"&&Y("scroll",e):u!=null&&ca(e,i,u,l))}switch(n){case"input":Hr(e),ys(e,r,!1);break;case"textarea":Hr(e),xs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+jt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Sn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Sn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Bo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return xe(t),null;case 6:if(e&&t.stateNode!=null)Fd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=Gt(Fr.current),Gt(ot.current),to(t)){if(r=t.stateNode,n=t.memoizedProps,r[nt]=t,(i=r.nodeValue!==n)&&(e=je,e!==null))switch(e.tag){case 3:eo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&eo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nt]=t,t.stateNode=r}return xe(t),null;case 13:if(X(J),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&Te!==null&&(t.mode&1)!==0&&(t.flags&128)===0)$c(),Tn(),t.flags|=98560,i=!1;else if(i=to(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(N(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(N(317));i[nt]=t}else Tn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;xe(t),i=!1}else Qe!==null&&(Zl(Qe),Qe=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(J.current&1)!==0?se===0&&(se=3):Ha())),t.updateQueue!==null&&(t.flags|=4),xe(t),null);case 4:return Ln(),Vl(e,t),e===null&&wr(t.stateNode.containerInfo),xe(t),null;case 10:return Da(t.type._context),xe(t),null;case 17:return Pe(t.type)&&zo(),xe(t),null;case 19:if(X(J),i=t.memoizedState,i===null)return xe(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Yn(i,!1);else{if(se!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=Io(e),l!==null){for(t.flags|=128,Yn(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return G(J,J.current&1|2),t.child}e=e.sibling}i.tail!==null&&re()>Mn&&(t.flags|=128,r=!0,Yn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Io(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Yn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!Z)return xe(t),null}else 2*re()-i.renderingStartTime>Mn&&n!==1073741824&&(t.flags|=128,r=!0,Yn(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=re(),t.sibling=null,n=J.current,G(J,r?n&1|2:n&1),t):(xe(t),null);case 22:case 23:return Wa(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(ze&1073741824)!==0&&(xe(t),t.subtreeFlags&6&&(t.flags|=8192)):xe(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function E0(e,t){switch(Sa(t),t.tag){case 1:return Pe(t.type)&&zo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ln(),X(De),X(ke),ja(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ta(t),null;case 13:if(X(J),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));Tn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(J),null;case 4:return Ln(),null;case 10:return Da(t.type._context),null;case 22:case 23:return Wa(),null;case 24:return null;default:return null}}var oo=!1,we=!1,C0=typeof WeakSet=="function"?WeakSet:Set,j=null;function Cn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){te(e,t,r)}else n.current=null}function Kl(e,t,n){try{n()}catch(r){te(e,t,r)}}var su=!1;function F0(e,t){if(Nl=Ao,e=Dc(),Ca(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,u=-1,c=0,g=0,y=e,m=null;t:for(;;){for(var F;y!==n||o!==0&&y.nodeType!==3||(a=l+o),y!==i||r!==0&&y.nodeType!==3||(u=l+r),y.nodeType===3&&(l+=y.nodeValue.length),(F=y.firstChild)!==null;)m=y,y=F;for(;;){if(y===e)break t;if(m===n&&++c===o&&(a=l),m===i&&++g===r&&(u=l),(F=y.nextSibling)!==null)break;y=m,m=y.parentNode}y=F}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Al={focusedElem:e,selectionRange:n},Ao=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var E=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var C=E.memoizedProps,L=E.memoizedState,h=t.stateNode,d=h.getSnapshotBeforeUpdate(t.elementType===t.type?C:He(t.type,C),L);h.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(w){te(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return E=su,su=!1,E}function sr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Kl(t,n,i)}o=o.next}while(o!==r)}}function ii(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Wl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Sd(e){var t=e.alternate;t!==null&&(e.alternate=null,Sd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[nt],delete t[Er],delete t[Bl],delete t[l0],delete t[a0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function bd(e){return e.tag===5||e.tag===3||e.tag===4}function uu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||bd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Bo));else if(r!==4&&(e=e.child,e!==null))for(Hl(e,t,n),e=e.sibling;e!==null;)Hl(e,t,n),e=e.sibling}function Gl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Gl(e,t,n),e=e.sibling;e!==null;)Gl(e,t,n),e=e.sibling}var me=null,Ge=!1;function yt(e,t,n){for(n=n.child;n!==null;)Nd(e,t,n),n=n.sibling}function Nd(e,t,n){if(rt&&typeof rt.onCommitFiberUnmount=="function")try{rt.onCommitFiberUnmount(Zo,n)}catch{}switch(n.tag){case 5:we||Cn(n,t);case 6:var r=me,o=Ge;me=null,yt(e,t,n),me=r,Ge=o,me!==null&&(Ge?(e=me,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):me.removeChild(n.stateNode));break;case 18:me!==null&&(Ge?(e=me,n=n.stateNode,e.nodeType===8?Vi(e.parentNode,n):e.nodeType===1&&Vi(e,n),yr(e)):Vi(me,n.stateNode));break;case 4:r=me,o=Ge,me=n.stateNode.containerInfo,Ge=!0,yt(e,t,n),me=r,Ge=o;break;case 0:case 11:case 14:case 15:if(!we&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&((i&2)!==0||(i&4)!==0)&&Kl(n,t,l),o=o.next}while(o!==r)}yt(e,t,n);break;case 1:if(!we&&(Cn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){te(n,t,a)}yt(e,t,n);break;case 21:yt(e,t,n);break;case 22:n.mode&1?(we=(r=we)||n.memoizedState!==null,yt(e,t,n),we=r):yt(e,t,n);break;default:yt(e,t,n)}}function cu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new C0),t.forEach(function(r){var o=T0.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function We(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:me=a.stateNode,Ge=!1;break e;case 3:me=a.stateNode.containerInfo,Ge=!0;break e;case 4:me=a.stateNode.containerInfo,Ge=!0;break e}a=a.return}if(me===null)throw Error(N(160));Nd(i,l,o),me=null,Ge=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(c){te(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ad(t,e),t=t.sibling}function Ad(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(We(t,e),et(e),r&4){try{sr(3,e,e.return),ii(3,e)}catch(C){te(e,e.return,C)}try{sr(5,e,e.return)}catch(C){te(e,e.return,C)}}break;case 1:We(t,e),et(e),r&512&&n!==null&&Cn(n,n.return);break;case 5:if(We(t,e),et(e),r&512&&n!==null&&Cn(n,n.return),e.flags&32){var o=e.stateNode;try{fr(o,"")}catch(C){te(e,e.return,C)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Xu(o,i),yl(a,l);var c=yl(a,i);for(l=0;l<u.length;l+=2){var g=u[l],y=u[l+1];g==="style"?tc(o,y):g==="dangerouslySetInnerHTML"?qu(o,y):g==="children"?fr(o,y):ca(o,g,y,c)}switch(a){case"input":pl(o,i);break;case"textarea":Zu(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var F=i.value;F!=null?Sn(o,!!i.multiple,F,!1):m!==!!i.multiple&&(i.defaultValue!=null?Sn(o,!!i.multiple,i.defaultValue,!0):Sn(o,!!i.multiple,i.multiple?[]:"",!1))}o[Er]=i}catch(C){te(e,e.return,C)}}break;case 6:if(We(t,e),et(e),r&4){if(e.stateNode===null)throw Error(N(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(C){te(e,e.return,C)}}break;case 3:if(We(t,e),et(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{yr(t.containerInfo)}catch(C){te(e,e.return,C)}break;case 4:We(t,e),et(e);break;case 13:We(t,e),et(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Va=re())),r&4&&cu(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(we=(c=we)||g,We(t,e),we=c):We(t,e),et(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!g&&(e.mode&1)!==0)for(j=e,g=e.child;g!==null;){for(y=j=g;j!==null;){switch(m=j,F=m.child,m.tag){case 0:case 11:case 14:case 15:sr(4,m,m.return);break;case 1:Cn(m,m.return);var E=m.stateNode;if(typeof E.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,E.props=t.memoizedProps,E.state=t.memoizedState,E.componentWillUnmount()}catch(C){te(r,n,C)}}break;case 5:Cn(m,m.return);break;case 22:if(m.memoizedState!==null){pu(y);continue}}F!==null?(F.return=m,j=F):pu(y)}g=g.sibling}e:for(g=null,y=e;;){if(y.tag===5){if(g===null){g=y;try{o=y.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=y.stateNode,u=y.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=ec("display",l))}catch(C){te(e,e.return,C)}}}else if(y.tag===6){if(g===null)try{y.stateNode.nodeValue=c?"":y.memoizedProps}catch(C){te(e,e.return,C)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===e)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break e;for(;y.sibling===null;){if(y.return===null||y.return===e)break e;g===y&&(g=null),y=y.return}g===y&&(g=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:We(t,e),et(e),r&4&&cu(e);break;case 21:break;default:We(t,e),et(e)}}function et(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(bd(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(fr(o,""),r.flags&=-33);var i=uu(e);Gl(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=uu(e);Hl(e,a,l);break;default:throw Error(N(161))}}catch(u){te(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function S0(e,t,n){j=e,Dd(e)}function Dd(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var o=j,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||oo;if(!l){var a=o.alternate,u=a!==null&&a.memoizedState!==null||we;a=oo;var c=we;if(oo=l,(we=u)&&!c)for(j=o;j!==null;)l=j,u=l.child,l.tag===22&&l.memoizedState!==null?fu(o):u!==null?(u.return=l,j=u):fu(o);for(;i!==null;)j=i,Dd(i),i=i.sibling;j=o,oo=a,we=c}du(e)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,j=i):du(e)}}function du(e){for(;j!==null;){var t=j;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:we||ii(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!we)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:He(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ys(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ys(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var g=c.memoizedState;if(g!==null){var y=g.dehydrated;y!==null&&yr(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}we||t.flags&512&&Wl(t)}catch(m){te(t,t.return,m)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function pu(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function fu(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ii(4,t)}catch(u){te(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){te(t,o,u)}}var i=t.return;try{Wl(t)}catch(u){te(t,i,u)}break;case 5:var l=t.return;try{Wl(t)}catch(u){te(t,l,u)}}}catch(u){te(t,t.return,u)}if(t===e){j=null;break}var a=t.sibling;if(a!==null){a.return=t.return,j=a;break}j=t.return}}var b0=Math.ceil,$o=gt.ReactCurrentDispatcher,Ua=gt.ReactCurrentOwner,Ue=gt.ReactCurrentBatchConfig,$=0,pe=null,ie=null,ge=0,ze=0,Fn=Mt(0),se=0,Ar=null,qt=0,li=0,$a=0,ur=null,Ne=null,Va=0,Mn=1/0,lt=null,Vo=!1,Ql=null,Pt=null,io=!1,Ct=null,Ko=0,cr=0,Yl=null,xo=-1,wo=0;function Fe(){return($&6)!==0?re():xo!==-1?xo:xo=re()}function Bt(e){return(e.mode&1)===0?1:($&2)!==0&&ge!==0?ge&-ge:u0.transition!==null?(wo===0&&(wo=fc()),wo):(e=H,e!==0||(e=window.event,e=e===void 0?16:wc(e.type)),e)}function Xe(e,t,n,r){if(50<cr)throw cr=0,Yl=null,Error(N(185));zr(e,n,r),(($&2)===0||e!==pe)&&(e===pe&&(($&2)===0&&(li|=n),se===4&&kt(e,ge)),Be(e,r),n===1&&$===0&&(t.mode&1)===0&&(Mn=re()+500,ni&&Rt()))}function Be(e,t){var n=e.callbackNode;uf(e,t);var r=No(e,e===pe?ge:0);if(r===0)n!==null&&Es(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Es(n),t===1)e.tag===0?s0(hu.bind(null,e)):Ic(hu.bind(null,e)),o0(function(){($&6)===0&&Rt()}),n=null;else{switch(hc(r)){case 1:n=ma;break;case 4:n=dc;break;case 16:n=bo;break;case 536870912:n=pc;break;default:n=bo}n=Md(n,Pd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Pd(e,t){if(xo=-1,wo=0,($&6)!==0)throw Error(N(327));var n=e.callbackNode;if(Pn()&&e.callbackNode!==n)return null;var r=No(e,e===pe?ge:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Wo(e,r);else{t=r;var o=$;$|=2;var i=zd();(pe!==e||ge!==t)&&(lt=null,Mn=re()+500,Qt(e,t));do try{D0();break}catch(a){Bd(e,a)}while(1);Aa(),$o.current=i,$=o,ie!==null?t=0:(pe=null,ge=0,t=se)}if(t!==0){if(t===2&&(o=El(e),o!==0&&(r=o,t=Xl(e,o))),t===1)throw n=Ar,Qt(e,0),kt(e,r),Be(e,re()),n;if(t===6)kt(e,r);else{if(o=e.current.alternate,(r&30)===0&&!N0(o)&&(t=Wo(e,r),t===2&&(i=El(e),i!==0&&(r=i,t=Xl(e,i))),t===1))throw n=Ar,Qt(e,0),kt(e,r),Be(e,re()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:Kt(e,Ne,lt);break;case 3:if(kt(e,r),(r&130023424)===r&&(t=Va+500-re(),10<t)){if(No(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Fe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Pl(Kt.bind(null,e,Ne,lt),t);break}Kt(e,Ne,lt);break;case 4:if(kt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-Ye(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*b0(r/1960))-r,10<r){e.timeoutHandle=Pl(Kt.bind(null,e,Ne,lt),r);break}Kt(e,Ne,lt);break;case 5:Kt(e,Ne,lt);break;default:throw Error(N(329))}}}return Be(e,re()),e.callbackNode===n?Pd.bind(null,e):null}function Xl(e,t){var n=ur;return e.current.memoizedState.isDehydrated&&(Qt(e,t).flags|=256),e=Wo(e,t),e!==2&&(t=Ne,Ne=n,t!==null&&Zl(t)),e}function Zl(e){Ne===null?Ne=e:Ne.push.apply(Ne,e)}function N0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Ze(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function kt(e,t){for(t&=~$a,t&=~li,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ye(t),r=1<<n;e[n]=-1,t&=~r}}function hu(e){if(($&6)!==0)throw Error(N(327));Pn();var t=No(e,0);if((t&1)===0)return Be(e,re()),null;var n=Wo(e,t);if(e.tag!==0&&n===2){var r=El(e);r!==0&&(t=r,n=Xl(e,r))}if(n===1)throw n=Ar,Qt(e,0),kt(e,t),Be(e,re()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Kt(e,Ne,lt),Be(e,re()),null}function Ka(e,t){var n=$;$|=1;try{return e(t)}finally{$=n,$===0&&(Mn=re()+500,ni&&Rt())}}function en(e){Ct!==null&&Ct.tag===0&&($&6)===0&&Pn();var t=$;$|=1;var n=Ue.transition,r=H;try{if(Ue.transition=null,H=1,e)return e()}finally{H=r,Ue.transition=n,$=t,($&6)===0&&Rt()}}function Wa(){ze=Fn.current,X(Fn)}function Qt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,r0(n)),ie!==null)for(n=ie.return;n!==null;){var r=n;switch(Sa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&zo();break;case 3:Ln(),X(De),X(ke),ja();break;case 5:Ta(r);break;case 4:Ln();break;case 13:X(J);break;case 19:X(J);break;case 10:Da(r.type._context);break;case 22:case 23:Wa()}n=n.return}if(pe=e,ie=e=zt(e.current,null),ge=ze=t,se=0,Ar=null,$a=li=qt=0,Ne=ur=null,Ht!==null){for(t=0;t<Ht.length;t++)if(n=Ht[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}Ht=null}return e}function Bd(e,t){do{var n=ie;try{if(Aa(),go.current=Uo,Oo){for(var r=q.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Oo=!1}if(Jt=0,de=ae=q=null,ar=!1,Sr=0,Ua.current=null,n===null||n.return===null){se=1,Ar=t,ie=null;break}e:{var i=e,l=n.return,a=n,u=t;if(t=ge,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,g=a,y=g.tag;if((g.mode&1)===0&&(y===0||y===11||y===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var F=tu(l);if(F!==null){F.flags&=-257,nu(F,l,a,i,t),F.mode&1&&eu(i,c,t),t=F,u=c;var E=t.updateQueue;if(E===null){var C=new Set;C.add(u),t.updateQueue=C}else E.add(u);break e}else{if((t&1)===0){eu(i,c,t),Ha();break e}u=Error(N(426))}}else if(Z&&a.mode&1){var L=tu(l);if(L!==null){(L.flags&65536)===0&&(L.flags|=256),nu(L,l,a,i,t),ba(_n(u,a));break e}}i=u=_n(u,a),se!==4&&(se=2),ur===null?ur=[i]:ur.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=hd(i,u,t);Qs(i,h);break e;case 1:a=u;var d=i.type,p=i.stateNode;if((i.flags&128)===0&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Pt===null||!Pt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=md(i,a,t);Qs(i,w);break e}}i=i.return}while(i!==null)}jd(n)}catch(S){t=S,ie===n&&n!==null&&(ie=n=n.return);continue}break}while(1)}function zd(){var e=$o.current;return $o.current=Uo,e===null?Uo:e}function Ha(){(se===0||se===3||se===2)&&(se=4),pe===null||(qt&268435455)===0&&(li&268435455)===0||kt(pe,ge)}function Wo(e,t){var n=$;$|=2;var r=zd();(pe!==e||ge!==t)&&(lt=null,Qt(e,t));do try{A0();break}catch(o){Bd(e,o)}while(1);if(Aa(),$=n,$o.current=r,ie!==null)throw Error(N(261));return pe=null,ge=0,se}function A0(){for(;ie!==null;)Td(ie)}function D0(){for(;ie!==null&&!qp();)Td(ie)}function Td(e){var t=_d(e.alternate,e,ze);e.memoizedProps=e.pendingProps,t===null?jd(e):ie=t,Ua.current=null}function jd(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=k0(n,t,ze),n!==null){ie=n;return}}else{if(n=E0(n,t),n!==null){n.flags&=32767,ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{se=6,ie=null;return}}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);se===0&&(se=5)}function Kt(e,t,n){var r=H,o=Ue.transition;try{Ue.transition=null,H=1,P0(e,t,n,r)}finally{Ue.transition=o,H=r}return null}function P0(e,t,n,r){do Pn();while(Ct!==null);if(($&6)!==0)throw Error(N(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(cf(e,i),e===pe&&(ie=pe=null,ge=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||io||(io=!0,Md(bo,function(){return Pn(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=Ue.transition,Ue.transition=null;var l=H;H=1;var a=$;$|=4,Ua.current=null,F0(e,n),Ad(n,e),Xf(Al),Ao=!!Nl,Al=Nl=null,e.current=n,S0(n),ef(),$=a,H=l,Ue.transition=i}else e.current=n;if(io&&(io=!1,Ct=e,Ko=o),i=e.pendingLanes,i===0&&(Pt=null),rf(n.stateNode),Be(e,re()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Vo)throw Vo=!1,e=Ql,Ql=null,e;return(Ko&1)!==0&&e.tag!==0&&Pn(),i=e.pendingLanes,(i&1)!==0?e===Yl?cr++:(cr=0,Yl=e):cr=0,Rt(),null}function Pn(){if(Ct!==null){var e=hc(Ko),t=Ue.transition,n=H;try{if(Ue.transition=null,H=16>e?16:e,Ct===null)var r=!1;else{if(e=Ct,Ct=null,Ko=0,($&6)!==0)throw Error(N(331));var o=$;for($|=4,j=e.current;j!==null;){var i=j,l=i.child;if((j.flags&16)!==0){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(j=c;j!==null;){var g=j;switch(g.tag){case 0:case 11:case 15:sr(8,g,i)}var y=g.child;if(y!==null)y.return=g,j=y;else for(;j!==null;){g=j;var m=g.sibling,F=g.return;if(Sd(g),g===c){j=null;break}if(m!==null){m.return=F,j=m;break}j=F}}}var E=i.alternate;if(E!==null){var C=E.child;if(C!==null){E.child=null;do{var L=C.sibling;C.sibling=null,C=L}while(C!==null)}}j=i}}if((i.subtreeFlags&2064)!==0&&l!==null)l.return=i,j=l;else e:for(;j!==null;){if(i=j,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:sr(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,j=h;break e}j=i.return}}var d=e.current;for(j=d;j!==null;){l=j;var p=l.child;if((l.subtreeFlags&2064)!==0&&p!==null)p.return=l,j=p;else e:for(l=d;j!==null;){if(a=j,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:ii(9,a)}}catch(S){te(a,a.return,S)}if(a===l){j=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,j=w;break e}j=a.return}}if($=o,Rt(),rt&&typeof rt.onPostCommitFiberRoot=="function")try{rt.onPostCommitFiberRoot(Zo,e)}catch{}r=!0}return r}finally{H=n,Ue.transition=t}}return!1}function mu(e,t,n){t=_n(n,t),t=hd(e,t,1),e=Dt(e,t,1),t=Fe(),e!==null&&(zr(e,1,t),Be(e,t))}function te(e,t,n){if(e.tag===3)mu(e,e,n);else for(;t!==null;){if(t.tag===3){mu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pt===null||!Pt.has(r))){e=_n(n,e),e=md(t,e,1),t=Dt(t,e,1),e=Fe(),t!==null&&(zr(t,1,e),Be(t,e));break}}t=t.return}}function B0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Fe(),e.pingedLanes|=e.suspendedLanes&n,pe===e&&(ge&n)===n&&(se===4||se===3&&(ge&130023424)===ge&&500>re()-Va?Qt(e,0):$a|=n),Be(e,t)}function Ld(e,t){t===0&&((e.mode&1)===0?t=1:(t=Yr,Yr<<=1,(Yr&130023424)===0&&(Yr=4194304)));var n=Fe();e=ht(e,t),e!==null&&(zr(e,t,n),Be(e,n))}function z0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ld(e,n)}function T0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),Ld(e,n)}var _d;_d=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||De.current)Ae=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Ae=!1,w0(e,t,n);Ae=(e.flags&131072)!==0}else Ae=!1,Z&&(t.flags&1048576)!==0&&Oc(t,Lo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;vo(e,t),e=t.pendingProps;var o=zn(t,ke.current);Dn(t,n),o=_a(null,t,r,e,o,n);var i=Ma();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Pe(r)?(i=!0,To(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ba(t),o.updater=oi,t.stateNode=o,o._reactInternals=t,Ml(t,r,e,n),t=Ol(null,t,r,!0,i,n)):(t.tag=0,Z&&i&&Fa(t),Ce(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(vo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=L0(r),e=He(r,e),o){case 0:t=Il(null,t,r,e,n);break e;case 1:t=iu(null,t,r,e,n);break e;case 11:t=ru(null,t,r,e,n);break e;case 14:t=ou(null,t,r,He(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),Il(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),iu(e,t,r,o,n);case 3:e:{if(xd(t),e===null)throw Error(N(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Hc(e,t),Ro(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=_n(Error(N(423)),t),t=lu(e,t,r,n,o);break e}else if(r!==o){o=_n(Error(N(424)),t),t=lu(e,t,r,n,o);break e}else for(Te=At(t.stateNode.containerInfo.firstChild),je=t,Z=!0,Qe=null,n=Kc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Tn(),r===o){t=mt(e,t,n);break e}Ce(e,t,r,n)}t=t.child}return t;case 5:return Gc(t),e===null&&jl(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Dl(r,o)?l=null:i!==null&&Dl(r,i)&&(t.flags|=32),vd(e,t),Ce(e,t,l,n),t.child;case 6:return e===null&&jl(t),null;case 13:return wd(e,t,n);case 4:return za(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=jn(t,null,r,n):Ce(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),ru(e,t,r,o,n);case 7:return Ce(e,t,t.pendingProps,n),t.child;case 8:return Ce(e,t,t.pendingProps.children,n),t.child;case 12:return Ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,G(_o,r._currentValue),r._currentValue=l,i!==null)if(Ze(i.value,l)){if(i.children===o.children&&!De.current){t=mt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=ct(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var g=c.pending;g===null?u.next=u:(u.next=g.next,g.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Ll(i.return,n,t),a.lanes|=n;break}u=u.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(N(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Ll(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Ce(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Dn(t,n),o=$e(o),r=r(o),t.flags|=1,Ce(e,t,r,n),t.child;case 14:return r=t.type,o=He(r,t.pendingProps),o=He(r.type,o),ou(e,t,r,o,n);case 15:return gd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),vo(e,t),t.tag=1,Pe(r)?(e=!0,To(t)):e=!1,Dn(t,n),fd(t,r,o),Ml(t,r,o,n),Ol(null,t,r,!0,e,n);case 19:return kd(e,t,n);case 22:return yd(e,t,n)}throw Error(N(156,t.tag))};function Md(e,t){return cc(e,t)}function j0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Oe(e,t,n,r){return new j0(e,t,n,r)}function Ga(e){return e=e.prototype,!(!e||!e.isReactComponent)}function L0(e){if(typeof e=="function")return Ga(e)?1:0;if(e!=null){if(e=e.$$typeof,e===pa)return 11;if(e===fa)return 14}return 2}function zt(e,t){var n=e.alternate;return n===null?(n=Oe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ko(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Ga(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case hn:return Yt(n.children,o,i,t);case da:l=8,o|=8;break;case al:return e=Oe(12,n,t,o|2),e.elementType=al,e.lanes=i,e;case sl:return e=Oe(13,n,t,o),e.elementType=sl,e.lanes=i,e;case ul:return e=Oe(19,n,t,o),e.elementType=ul,e.lanes=i,e;case Gu:return ai(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Wu:l=10;break e;case Hu:l=9;break e;case pa:l=11;break e;case fa:l=14;break e;case vt:l=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=Oe(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Yt(e,t,n,r){return e=Oe(7,e,r,t),e.lanes=n,e}function ai(e,t,n,r){return e=Oe(22,e,r,t),e.elementType=Gu,e.lanes=n,e.stateNode={isHidden:!1},e}function Zi(e,t,n){return e=Oe(6,e,null,t),e.lanes=n,e}function Ji(e,t,n){return t=Oe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function _0(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zi(0),this.expirationTimes=zi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zi(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Qa(e,t,n,r,o,i,l,a,u){return e=new _0(e,t,n,a,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Oe(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ba(i),e}function M0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Rd(e){if(!e)return Lt;e=e._reactInternals;e:{if(nn(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(Pe(n))return Rc(e,n,t)}return t}function Id(e,t,n,r,o,i,l,a,u){return e=Qa(n,r,!0,e,o,i,l,a,u),e.context=Rd(null),n=e.current,r=Fe(),o=Bt(n),i=ct(r,o),i.callback=t!=null?t:null,Dt(n,i,o),e.current.lanes=o,zr(e,o,r),Be(e,r),e}function si(e,t,n,r){var o=t.current,i=Fe(),l=Bt(o);return n=Rd(n),t.context===null?t.context=n:t.pendingContext=n,t=ct(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Dt(o,t,l),e!==null&&(Xe(e,o,l,i),mo(e,o,l)),l}function Ho(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function gu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ya(e,t){gu(e,t),(e=e.alternate)&&gu(e,t)}function R0(){return null}var Od=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xa(e){this._internalRoot=e}ui.prototype.render=Xa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));si(e,t,null,null)};ui.prototype.unmount=Xa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;en(function(){si(null,e,null,null)}),t[ft]=null}};function ui(e){this._internalRoot=e}ui.prototype.unstable_scheduleHydration=function(e){if(e){var t=yc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<wt.length&&t!==0&&t<wt[n].priority;n++);wt.splice(n,0,e),n===0&&xc(e)}};function Za(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ci(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function yu(){}function I0(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=Ho(l);i.call(c)}}var l=Id(t,r,e,0,null,!1,!1,"",yu);return e._reactRootContainer=l,e[ft]=l.current,wr(e.nodeType===8?e.parentNode:e),en(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var c=Ho(u);a.call(c)}}var u=Qa(e,0,!1,null,null,!1,!1,"",yu);return e._reactRootContainer=u,e[ft]=u.current,wr(e.nodeType===8?e.parentNode:e),en(function(){si(t,u,n,r)}),u}function di(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var u=Ho(l);a.call(u)}}si(t,l,e,o)}else l=I0(n,t,e,o,r);return Ho(l)}mc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=er(t.pendingLanes);n!==0&&(ga(t,n|1),Be(t,re()),($&6)===0&&(Mn=re()+500,Rt()))}break;case 13:en(function(){var r=ht(e,1);if(r!==null){var o=Fe();Xe(r,e,1,o)}}),Ya(e,1)}};ya=function(e){if(e.tag===13){var t=ht(e,134217728);if(t!==null){var n=Fe();Xe(t,e,134217728,n)}Ya(e,134217728)}};gc=function(e){if(e.tag===13){var t=Bt(e),n=ht(e,t);if(n!==null){var r=Fe();Xe(n,e,t,r)}Ya(e,t)}};yc=function(){return H};vc=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};xl=function(e,t,n){switch(t){case"input":if(pl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ti(r);if(!o)throw Error(N(90));Yu(r),pl(r,o)}}}break;case"textarea":Zu(e,n);break;case"select":t=n.value,t!=null&&Sn(e,!!n.multiple,t,!1)}};oc=Ka;ic=en;var O0={usingClientEntryPoint:!1,Events:[jr,vn,ti,nc,rc,Ka]},Xn={findFiberByHostInstance:Wt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},U0={bundleType:Xn.bundleType,version:Xn.version,rendererPackageName:Xn.rendererPackageName,rendererConfig:Xn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=sc(e),e===null?null:e.stateNode},findFiberByHostInstance:Xn.findFiberByHostInstance||R0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lo.isDisabled&&lo.supportsFiber)try{Zo=lo.inject(U0),rt=lo}catch{}}_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O0;_e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Za(t))throw Error(N(200));return M0(e,t,null,n)};_e.createRoot=function(e,t){if(!Za(e))throw Error(N(299));var n=!1,r="",o=Od;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Qa(e,1,!1,null,null,n,!1,r,o),e[ft]=t.current,wr(e.nodeType===8?e.parentNode:e),new Xa(t)};_e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=sc(t),e=e===null?null:e.stateNode,e};_e.flushSync=function(e){return en(e)};_e.hydrate=function(e,t,n){if(!ci(t))throw Error(N(200));return di(null,e,t,!0,n)};_e.hydrateRoot=function(e,t,n){if(!Za(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Od;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Id(t,null,e,1,n!=null?n:null,o,!1,i,l),e[ft]=t.current,wr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new ui(t)};_e.render=function(e,t,n){if(!ci(t))throw Error(N(200));return di(null,e,t,!1,n)};_e.unmountComponentAtNode=function(e){if(!ci(e))throw Error(N(40));return e._reactRootContainer?(en(function(){di(null,null,e,!1,function(){e._reactRootContainer=null,e[ft]=null})}),!0):!1};_e.unstable_batchedUpdates=Ka;_e.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ci(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return di(e,t,n,!1,r)};_e.version="18.3.1-next-f1338f8080-20240426";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=_e})(Uu);var Ud,vu=Uu.exports;Ud=vu.createRoot,vu.hydrateRoot;/**
 * @remix-run/router v1.3.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dr(){return Dr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Dr.apply(this,arguments)}var Ft;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ft||(Ft={}));const xu="popstate";function $0(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:l,hash:a}=r.location;return Jl("",{pathname:i,search:l,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Pr(o)}return K0(t,n,null,e)}function ue(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function V0(){return Math.random().toString(36).substr(2,8)}function wu(e,t){return{usr:e.state,key:e.key,idx:t}}function Jl(e,t,n,r){return n===void 0&&(n=null),Dr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Un(t):t,{state:n,key:t&&t.key||r||V0()})}function Pr(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Un(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function K0(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,l=o.history,a=Ft.Pop,u=null,c=g();c==null&&(c=0,l.replaceState(Dr({},l.state,{idx:c}),""));function g(){return(l.state||{idx:null}).idx}function y(){a=Ft.Pop;let L=g(),h=L==null?null:L-c;c=L,u&&u({action:a,location:C.location,delta:h})}function m(L,h){a=Ft.Push;let d=Jl(C.location,L,h);n&&n(d,L),c=g()+1;let p=wu(d,c),w=C.createHref(d);try{l.pushState(p,"",w)}catch{o.location.assign(w)}i&&u&&u({action:a,location:C.location,delta:1})}function F(L,h){a=Ft.Replace;let d=Jl(C.location,L,h);n&&n(d,L),c=g();let p=wu(d,c),w=C.createHref(d);l.replaceState(p,"",w),i&&u&&u({action:a,location:C.location,delta:0})}function E(L){let h=o.location.origin!=="null"?o.location.origin:o.location.href,d=typeof L=="string"?L:Pr(L);return ue(h,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,h)}let C={get action(){return a},get location(){return e(o,l)},listen(L){if(u)throw new Error("A history only accepts one active listener");return o.addEventListener(xu,y),u=L,()=>{o.removeEventListener(xu,y),u=null}},createHref(L){return t(o,L)},createURL:E,encodeLocation(L){let h=E(L);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:m,replace:F,go(L){return l.go(L)}};return C}var ku;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ku||(ku={}));function W0(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Un(t):t,o=Kd(r.pathname||"/",n);if(o==null)return null;let i=$d(e);H0(i);let l=null;for(let a=0;l==null&&a<i.length;++a)l=th(i[a],oh(o));return l}function $d(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,l,a)=>{let u={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};u.relativePath.startsWith("/")&&(ue(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Tt([r,u.relativePath]),g=n.concat(u);i.children&&i.children.length>0&&(ue(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),$d(i.children,t,g,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:q0(c,i.index),routesMeta:g})};return e.forEach((i,l)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,l);else for(let u of Vd(i.path))o(i,l,u)}),t}function Vd(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let l=Vd(r.join("/")),a=[];return a.push(...l.map(u=>u===""?i:[i,u].join("/"))),o&&a.push(...l),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function H0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:eh(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const G0=/^:\w+$/,Q0=3,Y0=2,X0=1,Z0=10,J0=-2,Eu=e=>e==="*";function q0(e,t){let n=e.split("/"),r=n.length;return n.some(Eu)&&(r+=J0),t&&(r+=Y0),n.filter(o=>!Eu(o)).reduce((o,i)=>o+(G0.test(i)?Q0:i===""?X0:Z0),r)}function eh(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function th(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let l=0;l<n.length;++l){let a=n[l],u=l===n.length-1,c=o==="/"?t:t.slice(o.length)||"/",g=nh({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},c);if(!g)return null;Object.assign(r,g.params);let y=a.route;i.push({params:r,pathname:Tt([o,g.pathname]),pathnameBase:sh(Tt([o,g.pathnameBase])),route:y}),g.pathnameBase!=="/"&&(o=Tt([o,g.pathnameBase]))}return i}function nh(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=rh(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],l=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((c,g,y)=>{if(g==="*"){let m=a[y]||"";l=i.slice(0,i.length-m.length).replace(/(.)\/+$/,"$1")}return c[g]=ih(a[y]||"",g),c},{}),pathname:i,pathnameBase:l,pattern:e}}function rh(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ja(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(l,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function oh(e){try{return decodeURI(e)}catch(t){return Ja(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ih(e,t){try{return decodeURIComponent(e)}catch(n){return Ja(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Kd(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Ja(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function lh(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Un(e):e;return{pathname:n?n.startsWith("/")?n:ah(n,t):t,search:uh(r),hash:ch(o)}}function ah(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function qi(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Wd(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Hd(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Un(e):(o=Dr({},e),ue(!o.pathname||!o.pathname.includes("?"),qi("?","pathname","search",o)),ue(!o.pathname||!o.pathname.includes("#"),qi("#","pathname","hash",o)),ue(!o.search||!o.search.includes("#"),qi("#","search","hash",o)));let i=e===""||o.pathname==="",l=i?"/":o.pathname,a;if(r||l==null)a=n;else{let y=t.length-1;if(l.startsWith("..")){let m=l.split("/");for(;m[0]==="..";)m.shift(),y-=1;o.pathname=m.join("/")}a=y>=0?t[y]:"/"}let u=lh(o,a),c=l&&l!=="/"&&l.endsWith("/"),g=(i||l===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||g)&&(u.pathname+="/"),u}const Tt=e=>e.join("/").replace(/\/\/+/g,"/"),sh=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),uh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ch=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function dh(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ph=["post","put","patch","delete"];[...ph];var pi={exports:{}},fi={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fh=k.exports,hh=Symbol.for("react.element"),mh=Symbol.for("react.fragment"),gh=Object.prototype.hasOwnProperty,yh=fh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vh={key:!0,ref:!0,__self:!0,__source:!0};function Gd(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)gh.call(t,r)&&!vh.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:hh,type:e,key:i,ref:l,props:o,_owner:yh.current}}fi.Fragment=mh;fi.jsx=Gd;fi.jsxs=Gd;(function(e){e.exports=fi})(pi);const ql=pi.exports.Fragment,s=pi.exports.jsx,f=pi.exports.jsxs;/**
 * React Router v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ea(){return ea=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ea.apply(this,arguments)}function xh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const wh=typeof Object.is=="function"?Object.is:xh,{useState:kh,useEffect:Eh,useLayoutEffect:Ch,useDebugValue:Fh}=il;function Sh(e,t,n){const r=t(),[{inst:o},i]=kh({inst:{value:r,getSnapshot:t}});return Ch(()=>{o.value=r,o.getSnapshot=t,el(o)&&i({inst:o})},[e,r,t]),Eh(()=>(el(o)&&i({inst:o}),e(()=>{el(o)&&i({inst:o})})),[e]),Fh(r),r}function el(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!wh(n,r)}catch{return!0}}function bh(e,t,n){return t()}const Nh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ah=!Nh,Dh=Ah?bh:Sh;"useSyncExternalStore"in il&&(e=>e.useSyncExternalStore)(il);const Qd=k.exports.createContext(null),Yd=k.exports.createContext(null),hi=k.exports.createContext(null),mi=k.exports.createContext(null),rn=k.exports.createContext({outlet:null,matches:[]}),Xd=k.exports.createContext(null);function Ph(e,t){let{relative:n}=t===void 0?{}:t;_r()||ue(!1);let{basename:r,navigator:o}=k.exports.useContext(hi),{hash:i,pathname:l,search:a}=Jd(e,{relative:n}),u=l;return r!=="/"&&(u=l==="/"?r:Tt([r,l])),o.createHref({pathname:u,search:a,hash:i})}function _r(){return k.exports.useContext(mi)!=null}function gi(){return _r()||ue(!1),k.exports.useContext(mi).location}function Mr(){_r()||ue(!1);let{basename:e,navigator:t}=k.exports.useContext(hi),{matches:n}=k.exports.useContext(rn),{pathname:r}=gi(),o=JSON.stringify(Wd(n).map(a=>a.pathnameBase)),i=k.exports.useRef(!1);return k.exports.useEffect(()=>{i.current=!0}),k.exports.useCallback(function(a,u){if(u===void 0&&(u={}),!i.current)return;if(typeof a=="number"){t.go(a);return}let c=Hd(a,JSON.parse(o),r,u.relative==="path");e!=="/"&&(c.pathname=c.pathname==="/"?e:Tt([e,c.pathname])),(u.replace?t.replace:t.push)(c,u.state,u)},[e,t,o,r])}function Zd(){let{matches:e}=k.exports.useContext(rn),t=e[e.length-1];return t?t.params:{}}function Jd(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=k.exports.useContext(rn),{pathname:o}=gi(),i=JSON.stringify(Wd(r).map(l=>l.pathnameBase));return k.exports.useMemo(()=>Hd(e,JSON.parse(i),o,n==="path"),[e,i,o,n])}function Bh(e,t){_r()||ue(!1);let{navigator:n}=k.exports.useContext(hi),r=k.exports.useContext(Yd),{matches:o}=k.exports.useContext(rn),i=o[o.length-1],l=i?i.params:{};i&&i.pathname;let a=i?i.pathnameBase:"/";i&&i.route;let u=gi(),c;if(t){var g;let C=typeof t=="string"?Un(t):t;a==="/"||((g=C.pathname)==null?void 0:g.startsWith(a))||ue(!1),c=C}else c=u;let y=c.pathname||"/",m=a==="/"?y:y.slice(a.length)||"/",F=W0(e,{pathname:m}),E=Lh(F&&F.map(C=>Object.assign({},C,{params:Object.assign({},l,C.params),pathname:Tt([a,n.encodeLocation?n.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?a:Tt([a,n.encodeLocation?n.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),o,r||void 0);return t&&E?s(mi.Provider,{value:{location:ea({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Ft.Pop},children:E}):E}function zh(){let e=Ih(),t=dh(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null;return f(ql,{children:[s("h2",{children:"Unexpected Application Error!"}),s("h3",{style:{fontStyle:"italic"},children:t}),n?s("pre",{style:{padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},children:n}):null,null]})}class Th extends k.exports.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?s(rn.Provider,{value:this.props.routeContext,children:s(Xd.Provider,{value:this.state.error,children:this.props.component})}):this.props.children}}function jh(e){let{routeContext:t,match:n,children:r}=e,o=k.exports.useContext(Qd);return o&&o.static&&o.staticContext&&n.route.errorElement&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),s(rn.Provider,{value:t,children:r})}function Lh(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,o=n==null?void 0:n.errors;if(o!=null){let i=r.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));i>=0||ue(!1),r=r.slice(0,Math.min(r.length,i+1))}return r.reduceRight((i,l,a)=>{let u=l.route.id?o==null?void 0:o[l.route.id]:null,c=n?l.route.errorElement||s(zh,{}):null,g=t.concat(r.slice(0,a+1)),y=()=>s(jh,{match:l,routeContext:{outlet:i,matches:g},children:u?c:l.route.element!==void 0?l.route.element:i});return n&&(l.route.errorElement||a===0)?s(Th,{location:n.location,component:c,error:u,children:y(),routeContext:{outlet:null,matches:g}}):y()},null)}var Cu;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(Cu||(Cu={}));var Go;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(Go||(Go={}));function _h(e){let t=k.exports.useContext(Yd);return t||ue(!1),t}function Mh(e){let t=k.exports.useContext(rn);return t||ue(!1),t}function Rh(e){let t=Mh(),n=t.matches[t.matches.length-1];return n.route.id||ue(!1),n.route.id}function Ih(){var e;let t=k.exports.useContext(Xd),n=_h(Go.UseRouteError),r=Rh(Go.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Eo(e){ue(!1)}function Oh(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Ft.Pop,navigator:i,static:l=!1}=e;_r()&&ue(!1);let a=t.replace(/^\/*/,"/"),u=k.exports.useMemo(()=>({basename:a,navigator:i,static:l}),[a,i,l]);typeof r=="string"&&(r=Un(r));let{pathname:c="/",search:g="",hash:y="",state:m=null,key:F="default"}=r,E=k.exports.useMemo(()=>{let C=Kd(c,a);return C==null?null:{pathname:C,search:g,hash:y,state:m,key:F}},[a,c,g,y,m,F]);return E==null?null:s(hi.Provider,{value:u,children:s(mi.Provider,{children:n,value:{location:E,navigationType:o}})})}function Uh(e){let{children:t,location:n}=e,r=k.exports.useContext(Qd),o=r&&!t?r.router.routes:ta(t);return Bh(o,n)}var Fu;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Fu||(Fu={}));new Promise(()=>{});function ta(e,t){t===void 0&&(t=[]);let n=[];return k.exports.Children.forEach(e,(r,o)=>{if(!k.exports.isValidElement(r))return;if(r.type===k.exports.Fragment){n.push.apply(n,ta(r.props.children,t));return}r.type!==Eo&&ue(!1),!r.props.index||!r.props.children||ue(!1);let i=[...t,o],l={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(l.children=ta(r.props.children,i)),n.push(l)}),n}/**
 * React Router DOM v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $h(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Vh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Kh(e,t){return e.button===0&&(!t||t==="_self")&&!Vh(e)}const Wh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function Hh(e){let{basename:t,children:n,window:r}=e,o=k.exports.useRef();o.current==null&&(o.current=$0({window:r,v5Compat:!0}));let i=o.current,[l,a]=k.exports.useState({action:i.action,location:i.location});return k.exports.useLayoutEffect(()=>i.listen(a),[i]),s(Oh,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:i})}const Gh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",dr=k.exports.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:l,state:a,target:u,to:c,preventScrollReset:g}=t,y=$h(t,Wh),m=typeof c=="string"?c:Pr(c),F=/^[a-z+]+:\/\//i.test(m)||m.startsWith("//"),E=m,C=!1;if(Gh&&F){let p=new URL(window.location.href),w=m.startsWith("//")?new URL(p.protocol+m):new URL(m);w.origin===p.origin?E=w.pathname+w.search+w.hash:C=!0}let L=Ph(E,{relative:o}),h=Qh(E,{replace:l,state:a,target:u,preventScrollReset:g,relative:o});function d(p){r&&r(p),p.defaultPrevented||h(p)}return s("a",{...y,href:F?m:L,onClick:C||i?r:d,ref:n,target:u})});var Su;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Su||(Su={}));var bu;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(bu||(bu={}));function Qh(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:l}=t===void 0?{}:t,a=Mr(),u=gi(),c=Jd(e,{relative:l});return k.exports.useCallback(g=>{if(Kh(g,n)){g.preventDefault();let y=r!==void 0?r:Pr(u)===Pr(c);a(e,{replace:y,state:o,preventScrollReset:i,relative:l})}},[u,a,c,r,o,n,e,i,l])}/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Yh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),V=(e,t)=>{const n=k.exports.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:i=2,absoluteStrokeWidth:l,className:a="",children:u,...c},g)=>k.exports.createElement("svg",{ref:g,...Yh,width:o,height:o,stroke:r,strokeWidth:l?Number(i)*24/Number(o):i,className:["lucide",`lucide-${Xh(e)}`,a].join(" "),...c},[...t.map(([y,m])=>k.exports.createElement(y,m)),...Array.isArray(u)?u:[u]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ao=V("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tl=V("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qo=V("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yo=V("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nu=V("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=V("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=V("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=V("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=V("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=V("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qa=V("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=V("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const na=V("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=V("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=V("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=V("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=V("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=V("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=V("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nl=V("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au=V("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rl=V("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=V("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=V("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=V("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=V("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=V("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yi=V("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu=V("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=V("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=V("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dt=V("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bu=V("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function cm(e,t,n){return window.go.main.App.CreateChapter(e,t,n)}function dm(e,t,n,r){return window.go.main.App.CreateCharacter(e,t,n,r)}function pm(e,t,n,r,o,i){return window.go.main.App.CreateParagraph(e,t,n,r,o,i)}function fm(e,t){return window.go.main.App.CreateProject(e,t)}function hm(e){return window.go.main.App.DeleteChapter(e)}function mm(e){return window.go.main.App.DeleteCharacter(e)}function gm(e){return window.go.main.App.DeleteParagraph(e)}function ym(e){return window.go.main.App.DeleteProject(e)}function vm(e,t){return window.go.main.App.DeleteProjectKnownCharacter(e,t)}function xm(e){return window.go.main.App.GenerateBatchAudio(e)}function wm(e){return window.go.main.App.GenerateChapterAudio(e)}function km(e){return window.go.main.App.GenerateParagraphAudio(e)}function Em(e){return window.go.main.App.GetChapter(e)}function Cm(e){return window.go.main.App.GetChapters(e)}function Fm(e){return window.go.main.App.GetCharacter(e)}function Sm(e){return window.go.main.App.GetCharacters(e)}function bm(e){return window.go.main.App.GetParagraph(e)}function Nm(e){return window.go.main.App.GetParagraphs(e)}function Am(e){return window.go.main.App.GetProject(e)}function Dm(e){return window.go.main.App.GetProjectKnownCharacters(e)}function Pm(e){return window.go.main.App.GetProjectLLMApiKey(e)}function Bm(e){return window.go.main.App.GetProjectTTSApiKey(e)}function zm(e){return window.go.main.App.GetProjectTTSAppID(e)}function Tm(e){return window.go.main.App.GetProjectTTSToken(e)}function jm(){return window.go.main.App.GetProjects()}function Lm(e){return window.go.main.App.GetVoice(e)}function _m(){return window.go.main.App.GetVoices()}function Mm(e,t,n){return window.go.main.App.Log(e,t,n)}function Rm(e,t){return window.go.main.App.ReorderChapters(e,t)}function Im(e,t,n){return window.go.main.App.SetKnownCharacterVoice(e,t,n)}function Om(e,t){return window.go.main.App.SetProjectLLMApiKey(e,t)}function Um(e,t){return window.go.main.App.SetProjectTTSApiKey(e,t)}function $m(e,t){return window.go.main.App.SetProjectTTSAppID(e,t)}function Vm(e,t){return window.go.main.App.SetProjectTTSToken(e,t)}function Km(e){return window.go.main.App.SplitParagraph(e)}function Wm(e){return window.go.main.App.SplitParagraphPreview(e)}function Hm(e,t,n){return window.go.main.App.UpdateChapter(e,t,n)}function Gm(e,t,n,r){return window.go.main.App.UpdateCharacter(e,t,n,r)}function Qm(e,t,n,r,o,i,l){return window.go.main.App.UpdateCharacterWithDetails(e,t,n,r,o,i,l)}function Ym(e,t,n,r,o,i){return window.go.main.App.UpdateKnownCharacter(e,t,n,r,o,i)}function Xm(e,t){return window.go.main.App.UpdateNarratorVoice(e,t)}function Zm(e,t,n,r,o,i,l,a,u,c){return window.go.main.App.UpdateParagraph(e,t,n,r,o,i,l,a,u,c)}function Jm(e,t,n){return window.go.main.App.UpdateProject(e,t,n)}function qm(e,t){return window.go.main.App.UpdateProjectKnownCharacters(e,t)}const W={createProject:async(e,t)=>{try{return await fm(e,t)}catch(n){throw console.error("Failed to create project:",n),n}},getProjects:async()=>{try{return await jm()||[]}catch(e){throw console.error("Failed to get projects:",e),e}},getProject:async e=>{try{return await Am(e)}catch(t){throw console.error("Failed to get project:",t),t}},updateProject:async(e,t,n)=>{try{await Jm(e,t,n)}catch(r){throw console.error("Failed to update project:",r),r}},deleteProject:async e=>{try{await ym(e)}catch(t){throw console.error("Failed to delete project:",t),t}},setProjectLLMApiKey:async(e,t)=>{try{await Om(e,t)}catch(n){throw console.error("Failed to set project LLM API key:",n),n}},getProjectLLMApiKey:async e=>{try{return await Pm(e)||""}catch(t){throw console.error("Failed to get project LLM API key:",t),t}},setProjectTTSApiKey:async(e,t)=>{try{await Um(e,t)}catch(n){throw console.error("Failed to set project TTS API key:",n),n}},getProjectTTSApiKey:async e=>{try{return await Bm(e)||""}catch(t){throw console.error("Failed to get project TTS API key:",t),t}},setProjectTTSAppID:async(e,t)=>{try{await $m(e,t)}catch(n){throw console.error("Failed to set project TTS App ID:",n),n}},getProjectTTSAppID:async e=>{try{return await zm(e)||""}catch(t){throw console.error("Failed to get project TTS App ID:",t),t}},setProjectTTSToken:async(e,t)=>{try{await Vm(e,t)}catch(n){throw console.error("Failed to set project TTS Token:",n),n}},getProjectTTSToken:async e=>{try{return await Tm(e)||""}catch(t){throw console.error("Failed to get project TTS Token:",t),t}},getProjectKnownCharacters:async e=>{try{return await Dm(e)||[]}catch(t){throw console.error("Failed to get project known characters:",t),t}},updateProjectKnownCharacters:async(e,t)=>{try{await qm(e,t)}catch(n){throw console.error("Failed to update project known characters:",n),n}},deleteProjectKnownCharacter:async(e,t)=>{try{await vm(e,t)}catch(n){throw console.error("Failed to delete project known character:",n),n}},setKnownCharacterVoice:async(e,t,n)=>{try{await Im(e,t,n)}catch(r){throw console.error("Failed to set known character voice:",r),r}},updateKnownCharacter:async(e,t,n,r,o,i)=>{try{await Ym(e,t,n,r,o,i)}catch(l){throw console.error("Failed to update known character:",l),l}},createChapter:async(e,t,n)=>{try{return await cm(e,t,n)}catch(r){throw console.error("Failed to create chapter:",r),r}},getChapters:async e=>{try{return await Cm(e)||[]}catch(t){throw console.error("Failed to get chapters:",t),t}},getChapter:async e=>{try{return await Em(e)}catch(t){throw console.error("Failed to get chapter:",t),t}},updateChapter:async(e,t,n)=>{try{await Hm(e,t,n)}catch(r){throw console.error("Failed to update chapter:",r),r}},deleteChapter:async e=>{try{await hm(e)}catch(t){throw console.error("Failed to delete chapter:",t),t}},reorderChapters:async(e,t)=>{try{await Rm(e,t)}catch(n){throw console.error("Failed to reorder chapters:",n),n}},createParagraph:async(e,t,n,r,o,i)=>{try{return await pm(e,t,n,r,o,i)}catch(l){throw console.error("Failed to create paragraph:",l),l}},getParagraphs:async e=>{try{return await Nm(e)||[]}catch(t){throw console.error("Failed to get paragraphs:",t),t}},getParagraph:async e=>{try{return await bm(e)}catch(t){throw console.error("Failed to get paragraph:",t),t}},updateParagraph:async(e,t,n,r,o,i,l="",a="",u=0,c=0)=>{try{await Zm(e,t,n,r,o,i,l,a,u,c)}catch(g){throw console.error("Failed to update paragraph:",g),g}},deleteParagraph:async e=>{try{await gm(e)}catch(t){throw console.error("Failed to delete paragraph:",t),t}},splitParagraph:async e=>{try{return await Km(e)||[]}catch(t){throw console.error("Failed to split paragraph:",t),t}},splitParagraphPreview:async e=>{try{return await Wm(e)||[]}catch(t){throw console.error("Failed to split paragraph preview:",t),t}},generateParagraphAudio:async e=>{try{return await km(e)}catch(t){throw console.error("Failed to generate paragraph audio:",t),t}},generateBatchAudio:async e=>{try{return await xm(e)||[]}catch(t){throw console.error("Failed to generate batch audio:",t),t}},generateChapterAudio:async e=>{try{return await wm(e)||[]}catch(t){throw console.error("Failed to generate chapter audio:",t),t}},createCharacter:async(e,t,n,r)=>{try{return await dm(e,t,n,r)}catch(o){throw console.error("Failed to create character:",o),o}},getCharacters:async e=>{try{return await Sm(e)||[]}catch(t){throw console.error("Failed to get characters:",t),t}},getCharacter:async e=>{try{return await Fm(e)}catch(t){throw console.error("Failed to get character:",t),t}},updateCharacter:async(e,t,n,r)=>{try{await Gm(e,t,n,r)}catch(o){throw console.error("Failed to update character:",o),o}},updateCharacterWithDetails:async(e,t,n,r,o,i,l)=>{try{await Qm(e,t,n,r,o,i,l)}catch(a){throw console.error("Failed to update character with details:",a),a}},deleteCharacter:async e=>{try{await mm(e)}catch(t){throw console.error("Failed to delete character:",t),t}},updateNarratorVoice:async(e,t)=>{try{await Xm(e,t)}catch(n){throw console.error("Failed to update narrator voice:",n),n}},getVoices:async()=>{try{return await _m()||[]}catch(e){throw console.error("Failed to get voices:",e),e}},getVoice:async e=>{try{return await Lm(e)}catch(t){throw console.error("Failed to get voice:",t),t}},analyzeText:async e=>{throw new Error("Not implemented")},generateAudio:async(e,t,n,r)=>{throw new Error("Not implemented")},log:async(e,t,n)=>{try{await Mm(e,t,n)}catch(r){console.error("Failed to send log to backend:",r)}}},e1=()=>{const e=Mr(),[t,n]=k.exports.useState([]),[r,o]=k.exports.useState(!1),[i,l]=k.exports.useState(!1),[a,u]=k.exports.useState(!1),[c,g]=k.exports.useState(null),[y,m]=k.exports.useState(null),[F,E]=k.exports.useState({name:"",description:""}),C=async()=>{o(!0);try{const S=await W.getProjects();n(S)}catch(S){console.error("Failed to load projects:",S)}o(!1)};k.exports.useEffect(()=>{C()},[]);const L=async S=>{if(S.preventDefault(),!!F.name.trim()){o(!0);try{await W.createProject(F.name,F.description),E({name:"",description:""}),l(!1),C()}catch(A){console.error("Failed to create project:",A)}o(!1)}},h=S=>{g(S),u(!0)},d=async()=>{if(!!c){o(!0),m(null);try{await W.deleteProject(c.id),u(!1),g(null),C()}catch(S){console.error("Failed to delete project:",S),m("\u5220\u9664\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5")}o(!1)}},p=()=>{u(!1),g(null),m(null)},w=S=>{e(`/project/${S}`)};return f("div",{className:"home-page",children:[f("div",{className:"page-header",children:[f("div",{className:"header-content",children:[s(Yo,{size:28,className:"header-icon"}),f("div",{children:[s("h1",{children:"\u542C\u58A8\u8BED - \u6709\u58F0\u5C0F\u8BF4\u5236\u4F5C"}),s("p",{children:"\u521B\u5EFA\u3001\u7F16\u8F91\u548C\u7BA1\u7406\u60A8\u7684\u6709\u58F0\u5C0F\u8BF4\u5DE5\u7A0B"})]})]}),f("button",{className:"create-project-btn",onClick:()=>l(!0),disabled:r,children:[s(tp,{size:20}),"\u521B\u5EFA\u65B0\u5DE5\u7A0B"]})]}),s("div",{className:"projects-container",children:s("div",{className:"projects-list",children:r&&t.length===0?f("div",{className:"loading",children:[s("div",{className:"spinner"}),s("p",{children:"\u52A0\u8F7D\u4E2D..."})]}):t.length===0?f("div",{className:"empty-state",children:[s(tm,{size:64}),s("h2",{children:"\u6682\u65E0\u5DE5\u7A0B"}),s("p",{children:"\u70B9\u51FB\u4E0A\u65B9\u6309\u94AE\u521B\u5EFA\u60A8\u7684\u7B2C\u4E00\u4E2A\u6709\u58F0\u5C0F\u8BF4\u5DE5\u7A0B"})]}):t.map((S,A)=>f("div",{className:"project-item",children:[f("div",{className:"project-info",onClick:()=>w(S.id),children:[s("div",{className:"project-index",children:A+1}),f("div",{className:"project-content",children:[s("h3",{children:S.name}),s("p",{className:"project-description",children:S.description||"\u6682\u65E0\u63CF\u8FF0"}),f("div",{className:"project-meta",children:[f("span",{children:["\u521B\u5EFA\u65F6\u95F4: ",new Date(S.createdAt).toLocaleDateString()]}),f("span",{children:["\u66F4\u65B0\u65F6\u95F4: ",new Date(S.updatedAt).toLocaleDateString()]})]})]})]}),f("div",{className:"project-actions",children:[f("button",{className:"btn-primary",onClick:D=>{D.stopPropagation(),w(S.id)},disabled:r,title:"\u6253\u5F00\u9879\u76EE",children:[s(ep,{size:16}),"\u6253\u5F00"]}),f("button",{className:"btn-danger",onClick:D=>{D.stopPropagation(),h(S)},disabled:r,children:[s(yi,{size:16}),"\u5220\u9664"]})]})]},S.id))})}),i&&s("div",{className:"modal",children:f("div",{className:"modal-content",children:[f("div",{className:"modal-header",children:[s("h2",{children:"\u521B\u5EFA\u65B0\u5DE5\u7A0B"}),s("button",{className:"modal-close",onClick:()=>l(!1),children:"\xD7"})]}),f("form",{onSubmit:L,children:[f("div",{className:"form-group",children:[s("label",{htmlFor:"project-name",children:"\u5DE5\u7A0B\u540D\u79F0"}),s("input",{type:"text",id:"project-name",value:F.name,onChange:S=>E({...F,name:S.target.value}),placeholder:"\u8BF7\u8F93\u5165\u5DE5\u7A0B\u540D\u79F0",required:!0})]}),f("div",{className:"form-group",children:[s("label",{htmlFor:"project-description",children:"\u5DE5\u7A0B\u63CF\u8FF0"}),s("textarea",{id:"project-description",value:F.description,onChange:S=>E({...F,description:S.target.value}),placeholder:"\u8BF7\u8F93\u5165\u5DE5\u7A0B\u63CF\u8FF0",rows:3})]}),f("div",{className:"modal-footer",children:[s("button",{type:"button",className:"btn-secondary",onClick:()=>l(!1),disabled:r,children:"\u53D6\u6D88"}),s("button",{type:"submit",className:"btn-primary",disabled:r,children:"\u786E\u5B9A"})]})]})]})}),a&&c&&s("div",{className:"modal",children:f("div",{className:"modal-content delete-modal",children:[f("div",{className:"modal-header",children:[s("h2",{children:"\u5220\u9664\u5DE5\u7A0B"}),s("button",{className:"modal-close",onClick:p,children:"\xD7"})]}),f("div",{className:"delete-warning",children:[s("div",{className:"warning-icon",children:s("svg",{width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",children:s("path",{d:"M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",stroke:"#EF4444",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),s("h3",{children:"\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u5DE5\u7A0B\u5417\uFF1F"}),s("p",{className:"project-name-highlight",children:c.name}),s("p",{className:"delete-warning-text",children:"\u6B64\u64CD\u4F5C\u65E0\u6CD5\u64A4\u9500\uFF0C\u5DE5\u7A0B\u4E0B\u7684\u6240\u6709\u7AE0\u8282\u3001\u6BB5\u843D\u548C\u89D2\u8272\u6570\u636E\u90FD\u5C06\u88AB\u6C38\u4E45\u5220\u9664\u3002"}),y&&s("p",{className:"delete-error-message",children:y})]}),f("div",{className:"modal-footer",children:[s("button",{type:"button",className:"btn-secondary",onClick:p,disabled:r,children:"\u53D6\u6D88"}),s("button",{type:"button",className:"btn-danger",onClick:d,disabled:r,children:r?"\u5220\u9664\u4E2D...":"\u786E\u8BA4\u5220\u9664"})]})]})}),s("style",{children:`
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
      `})]})},rp=({isOpen:e,title:t,message:n,confirmText:r="\u786E\u5B9A",cancelText:o="\u53D6\u6D88",type:i="warning",onConfirm:l,onCancel:a})=>{if(!e)return null;const u=()=>{switch(i){case"danger":return s(tl,{size:28,className:"text-red-500"});case"warning":return s(tl,{size:28,className:"text-yellow-500"});case"info":return s(Zh,{size:28,className:"text-blue-500"});default:return s(tl,{size:28,className:"text-yellow-500"})}},c=()=>{switch(i){case"danger":return"btn-danger";case"warning":return"btn-primary";case"info":return"btn-primary";default:return"btn-primary"}};return s("div",{className:"confirm-modal-overlay",onClick:a,children:f("div",{className:"confirm-modal-content",onClick:g=>g.stopPropagation(),children:[f("div",{className:"confirm-modal-header",children:[f("div",{className:"confirm-modal-title",children:[u(),s("h2",{children:t})]}),s("button",{className:"modal-close",onClick:a,children:s(dt,{size:24})})]}),s("div",{className:"confirm-modal-body",children:s("p",{className:"confirm-message",children:n})}),f("div",{className:"confirm-modal-footer",children:[s("button",{className:"btn-secondary",onClick:a,children:o}),s("button",{className:c(),onClick:l,children:r})]}),s("style",{children:`
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
        `})]})})},t1=({projectId:e,onChapterSelect:t})=>{const n=Mr(),[r,o]=k.exports.useState([]),[i,l]=k.exports.useState(!1),[a,u]=k.exports.useState(!1),[c,g]=k.exports.useState({title:"",content:""}),[y,m]=k.exports.useState({isOpen:!1,title:"",message:"",type:"warning",onConfirm:()=>{}}),F=async()=>{l(!0);try{const p=await W.getChapters(e);o(p)}catch(p){console.error("Failed to load chapters:",p)}l(!1)};k.exports.useEffect(()=>{F()},[e]);const E=async p=>{if(p.preventDefault(),!!c.title.trim()){l(!0);try{await W.createChapter(e,c.title,c.content),g({title:"",content:""}),u(!1),F()}catch(w){console.error("Failed to create chapter:",w)}l(!1)}},C=p=>{m({isOpen:!0,title:"\u5220\u9664\u7AE0\u8282",message:"\u786E\u5B9A\u8981\u5220\u9664\u6B64\u7AE0\u8282\u5417\uFF1F\u6B64\u64CD\u4F5C\u4E0D\u53EF\u64A4\u9500\u3002",type:"danger",confirmText:"\u5220\u9664",cancelText:"\u53D6\u6D88",onConfirm:async()=>{m(w=>({...w,isOpen:!1})),l(!0);try{await W.deleteChapter(p),F()}catch(w){console.error("Failed to delete chapter:",w)}l(!1)}})},L=(p,w)=>{p.dataTransfer.setData("text/plain",w.toString())},h=p=>{p.preventDefault()},d=async(p,w)=>{p.preventDefault();const S=parseInt(p.dataTransfer.getData("text/plain"));if(S!==w){const A=[...r],[D]=A.splice(S,1);A.splice(w,0,D);const P=A.map(U=>U.id);try{await W.reorderChapters(e,P),o(A)}catch(U){console.error("Failed to reorder chapters:",U)}}};return f("div",{className:"chapter-manager",children:[f("div",{className:"chapter-manager-header",children:[f("div",{className:"header-left",children:[s(na,{size:20}),s("h2",{children:"\u7AE0\u8282\u7BA1\u7406"})]}),f("button",{className:"btn-primary",onClick:()=>u(!0),disabled:i,children:[s(tp,{size:16}),"\u65B0\u5EFA\u7AE0\u8282"]})]}),s("div",{className:"chapter-list",children:i&&r.length===0?f("div",{className:"loading-state",children:[s("div",{className:"spinner"}),s("p",{children:"\u52A0\u8F7D\u4E2D..."})]}):r.length===0?f("div",{className:"empty-state",children:[s(om,{size:48}),s("h3",{children:"\u6682\u65E0\u7AE0\u8282"}),s("p",{children:"\u70B9\u51FB\u4E0A\u65B9\u6309\u94AE\u521B\u5EFA\u60A8\u7684\u7B2C\u4E00\u4E2A\u7AE0\u8282"})]}):r.map((p,w)=>f("div",{className:"chapter-item",draggable:!0,onDragStart:S=>L(S,w),onDragOver:h,onDrop:S=>d(S,w),children:[f("div",{className:"chapter-info",onClick:()=>n(`/project/${e}/chapter/${p.id}`),children:[s("div",{className:"chapter-index",children:w+1}),f("div",{className:"chapter-content",children:[s("h4",{children:p.title}),f("p",{className:"chapter-preview",children:[p.content.slice(0,50),p.content.length>50?"...":""]}),f("div",{className:"chapter-meta",children:[f("span",{children:["\u521B\u5EFA\u65F6\u95F4: ",new Date(p.createdAt).toLocaleDateString()]}),f("span",{children:["\u66F4\u65B0\u65F6\u95F4: ",new Date(p.updatedAt).toLocaleDateString()]})]})]})]}),f("div",{className:"chapter-actions",children:[s(nm,{size:20,className:"drag-handle"}),f("button",{className:"btn-primary",onClick:S=>{S.stopPropagation(),n(`/project/${e}/chapter/${p.id}`)},disabled:i,title:"\u6253\u5F00\u7AE0\u8282\u7F16\u8F91\u5668",children:[s(ep,{size:16}),"\u6253\u5F00"]}),f("button",{className:"btn-danger",onClick:S=>{S.stopPropagation(),C(p.id)},disabled:i,children:[s(yi,{size:16}),"\u5220\u9664"]})]})]},p.id))}),a&&s("div",{className:"modal",children:f("div",{className:"modal-content",children:[f("div",{className:"modal-header",children:[s("h2",{children:"\u521B\u5EFA\u65B0\u7AE0\u8282"}),s("button",{className:"modal-close",onClick:()=>u(!1),disabled:i,children:s(dt,{size:24})})]}),f("form",{onSubmit:E,children:[f("div",{className:"form-group",children:[s("label",{htmlFor:"chapter-title",children:"\u7AE0\u8282\u6807\u9898"}),s("input",{type:"text",id:"chapter-title",value:c.title,onChange:p=>g({...c,title:p.target.value}),placeholder:"\u8BF7\u8F93\u5165\u7AE0\u8282\u6807\u9898",required:!0})]}),f("div",{className:"form-group",children:[s("label",{htmlFor:"chapter-content",children:"\u7AE0\u8282\u5185\u5BB9"}),s("textarea",{id:"chapter-content",value:c.content,onChange:p=>g({...c,content:p.target.value}),placeholder:"\u8BF7\u8F93\u5165\u7AE0\u8282\u5185\u5BB9",rows:6})]}),f("div",{className:"modal-footer",children:[s("button",{type:"button",className:"btn-secondary",onClick:()=>u(!1),disabled:i,children:"\u53D6\u6D88"}),s("button",{type:"submit",className:"btn-primary",disabled:i,children:"\u786E\u5B9A"})]})]})]})}),s(rp,{isOpen:y.isOpen,title:y.title,message:y.message,type:y.type,confirmText:y.confirmText,cancelText:y.cancelText,onConfirm:y.onConfirm,onCancel:()=>m(p=>({...p,isOpen:!1}))}),s("style",{children:`
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
      `})]})},n1="neutral",r1="happy",o1="sad",i1="angry",l1="surprised",a1="fear",s1="hate",u1="excited",c1="coldness",d1="depressed",p1="lovey-dovey",f1="shy",h1="comfort",m1="tension",g1="tender",y1="storytelling",v1="radio",x1="magnetic",w1="advertising",k1="vocal-fry",E1="ASMR",C1="news",F1="entertainment",S1="dialect",b1="chat",N1="warm",A1="affectionate",D1="authoritative",P1=[{value:n1,label:"\u4E2D\u6027"},{value:r1,label:"\u5F00\u5FC3"},{value:o1,label:"\u60B2\u4F24"},{value:i1,label:"\u751F\u6C14"},{value:l1,label:"\u60CA\u8BB6"},{value:a1,label:"\u6050\u60E7"},{value:s1,label:"\u538C\u6076"},{value:u1,label:"\u6FC0\u52A8"},{value:c1,label:"\u51B7\u6F20"},{value:d1,label:"\u6CAE\u4E27"},{value:p1,label:"\u6492\u5A07"},{value:f1,label:"\u5BB3\u7F9E"},{value:h1,label:"\u5B89\u6170\u9F13\u52B1"},{value:m1,label:"\u5486\u54EE/\u7126\u6025"},{value:g1,label:"\u6E29\u67D4"},{value:y1,label:"\u8BB2\u6545\u4E8B/\u81EA\u7136\u8BB2\u8FF0"},{value:v1,label:"\u60C5\u611F\u7535\u53F0"},{value:x1,label:"\u78C1\u6027"},{value:w1,label:"\u5E7F\u544A\u8425\u9500"},{value:k1,label:"\u6C14\u6CE1\u97F3"},{value:E1,label:"\u4F4E\u8BED(ASMR)"},{value:C1,label:"\u65B0\u95FB\u64AD\u62A5"},{value:F1,label:"\u5A31\u4E50\u516B\u5366"},{value:S1,label:"\u65B9\u8A00"}],B1=[...P1,{value:b1,label:"\u5BF9\u8BDD/\u95F2\u804A"},{value:N1,label:"\u6E29\u6696"},{value:A1,label:"\u6DF1\u60C5"},{value:D1,label:"\u6743\u5A01"}],z1="male",T1="female",j1="unknown",L1={male:"\u7537",female:"\u5973",unknown:"\u672A\u77E5"},_1="child",M1="teen",R1="adult",I1="senior",O1="unknown",U1={child:"\u513F\u7AE5",teen:"\u5C11\u5E74",adult:"\u6210\u4EBA",senior:"\u8001\u5E74",unknown:"\u672A\u77E5"},so=1,$1={general:"\u901A\u7528\u573A\u666F",audiobook:"\u6709\u58F0\u9605\u8BFB",video:"\u89C6\u9891\u914D\u97F3",roleplay:"\u89D2\u8272\u626E\u6F14",customer_service:"\u5BA2\u670D\u573A\u666F",multilingual:"\u591A\u8BED\u79CD"},V1={male:"\u7537",female:"\u5973"},ol=10,K1=({projectId:e})=>{const[t,n]=k.exports.useState([]),[r,o]=k.exports.useState([]),[i,l]=k.exports.useState(!1),[a,u]=k.exports.useState(""),[c,g]=k.exports.useState(1),[y,m]=k.exports.useState(null),[F,E]=k.exports.useState(""),[C,L]=k.exports.useState(""),[h,d]=k.exports.useState(""),[p,w]=k.exports.useState(""),S=k.exports.useMemo(()=>{const x={};return r.forEach(_=>{const z=_.category||"other";x[z]||(x[z]=[]),x[z].push(_)}),x},[r]);k.exports.useEffect(()=>{e&&A()},[e]),k.exports.useEffect(()=>{g(1)},[a]);const A=async()=>{l(!0);try{const[x,_]=await Promise.all([W.getCharacters(e),W.getVoices()]);n(x),o(_)}catch(x){console.error("Failed to load data:",x)}l(!1)},D=k.exports.useMemo(()=>{let x=t;if(a.trim()){const _=a.toLowerCase().trim();x=x.filter(z=>!!(z.name.toLowerCase().includes(_)||z.aliases&&z.aliases.some(Q=>Q.toLowerCase().includes(_))||z.description&&z.description.toLowerCase().includes(_)))}return x.sort((_,z)=>{const Q=_.lastSeenAt||0;return(z.lastSeenAt||0)-Q}),x},[t,a]),P=Math.ceil(D.length/ol),U=k.exports.useMemo(()=>{const x=(c-1)*ol,_=x+ol;return D.slice(x,_)},[D,c]),M=async x=>{if(x!==0){l(!0);try{if(x<0){const _=t.find(z=>z.id===x);_&&await W.deleteProjectKnownCharacter(e,_.name)}else await W.deleteCharacter(x);A()}catch(_){console.error("Failed to delete character:",_)}l(!1)}},oe=async(x,_)=>{try{if(n(z=>z.map(Q=>Q.id===x?{...Q,voiceId:_}:Q)),x===0)await W.updateNarratorVoice(e,_);else if(x<0){const z=t.find(Q=>Q.id===x);z&&await W.setKnownCharacterVoice(e,z.name,_)}else{const z=t.find(Q=>Q.id===x);z&&await W.updateCharacter(x,z.name,z.description,_)}}catch(z){console.error("Failed to set character voice:",z),A()}},fe=x=>{m(x.id),E((x.aliases||[]).join(", ")),L(x.gender||""),d(x.age||""),w(x.description||"")},Ee=async x=>{try{const _=F.split(",").map(z=>z.trim()).filter(z=>z.length>0);n(z=>z.map(Q=>Q.id===x.id?{...Q,description:p,gender:C,age:h,aliases:_}:Q)),x.id<0?await W.updateKnownCharacter(e,x.name,p,C,h,_):await W.updateCharacterWithDetails(x.id,x.name,p,x.voiceId,C,h,_),Ke()}catch(_){console.error("Failed to save character:",_),A()}},Ke=()=>{m(null),E(""),L(""),d(""),w("")},K=x=>L1[x]||"\u672A\u77E5",ce=x=>U1[x]||"\u672A\u77E5",he=x=>!x||x.length===0?"-":x.join(", "),B=x=>!x||x.length===0?"-":x.length<=2?x.join(", "):`${x[0]}, ${x[1]}... (${x.length}\u7AE0)`,I=x=>x?new Date(x*1e3).toLocaleString("zh-CN",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}):"-";return f("div",{className:"role-manager",children:[f("div",{className:"role-manager-header",children:[f("div",{className:"header-left",children:[s(Nu,{size:20}),s("h2",{children:"\u89D2\u8272\u7BA1\u7406"}),D.length>0&&s("span",{className:"count-badge",children:D.length})]}),f("div",{className:"search-box",children:[s(am,{size:16}),s("input",{type:"text",placeholder:"\u641C\u7D22\u89D2\u8272\u540D\u79F0\u3001\u522B\u540D\u6216\u7B80\u4ECB...",value:a,onChange:x=>u(x.target.value),className:"search-input"}),a&&s("button",{className:"btn-clear-search",onClick:()=>u(""),children:s(dt,{size:14})})]})]}),s("div",{className:"role-table-container",children:i&&t.length===0?f("div",{className:"loading-state",children:[s("div",{className:"spinner"}),s("p",{children:"\u52A0\u8F7D\u4E2D..."})]}):D.length===0?f("div",{className:"empty-state",children:[s(Nu,{size:48}),s("h3",{children:"\u6682\u65E0\u89D2\u8272"}),s("p",{children:"\u4F7F\u7528 LLM \u89E3\u6790\u6587\u672C\u540E\uFF0C\u8BC6\u522B\u5230\u7684\u89D2\u8272\u4F1A\u663E\u793A\u5728\u8FD9\u91CC"})]}):f(ql,{children:[s("div",{className:"table-scroll-wrapper",children:f("table",{className:"role-table",children:[s("thead",{children:f("tr",{children:[s("th",{className:"col-name",children:"\u59D3\u540D"}),s("th",{className:"col-chapters",children:"\u51FA\u73B0\u7AE0\u8282"}),s("th",{className:"col-aliases",children:"\u522B\u540D"}),s("th",{className:"col-gender",children:"\u63A8\u6D4B\u6027\u522B"}),s("th",{className:"col-age",children:"\u63A8\u6D4B\u5E74\u9F84"}),s("th",{className:"col-voice",children:"\u97F3\u8272"}),s("th",{className:"col-desc",children:"\u7B80\u4ECB"}),s("th",{className:"col-updated",children:"\u6700\u540E\u53D1\u73B0"}),s("th",{className:"col-actions",children:"\u64CD\u4F5C"})]})}),s("tbody",{children:U.map(x=>{var _;return s(aa.Fragment,{children:f("tr",{className:x.id===0?"narrator-row":"character-row",children:[s("td",{className:"col-name",children:f("div",{className:"name-cell",children:[s("div",{className:`role-avatar-small ${x.id===0?"narrator-avatar":"known-avatar"}`,children:x.id===0?s(Yo,{size:14}):s(Pu,{size:14})}),s("span",{className:"character-name",children:x.name}),x.id===0&&s("span",{className:"badge narrator-badge",children:"\u7CFB\u7EDF"}),x.id!==0&&x.id<0&&s("span",{className:"badge ai-badge",children:"AI\u8BC6\u522B"})]})}),s("td",{className:"col-chapters",children:s("span",{className:"chapter-list",title:(_=x.chapterNames)==null?void 0:_.join(", "),children:B(x.chapterNames)})}),s("td",{className:"col-aliases",children:y===x.id?s("input",{type:"text",className:"edit-input-inline",value:F,onChange:z=>E(z.target.value),placeholder:"\u591A\u4E2A\u522B\u540D\u7528\u9017\u53F7\u5206\u9694"}):s("span",{className:"alias-list",title:he(x.aliases),children:he(x.aliases)})}),s("td",{className:"col-gender",children:y===x.id?f("select",{className:"edit-select-inline",value:C,onChange:z=>L(z.target.value),children:[s("option",{value:"",children:"\u9009\u62E9\u6027\u522B"}),s("option",{value:z1,children:"\u7537"}),s("option",{value:T1,children:"\u5973"}),s("option",{value:j1,children:"\u672A\u77E5"})]}):f("span",{className:"gender-badge",children:[s(Pu,{size:12}),K(x.gender)]})}),s("td",{className:"col-age",children:y===x.id?f("select",{className:"edit-select-inline",value:h,onChange:z=>d(z.target.value),children:[s("option",{value:"",children:"\u9009\u62E9\u5E74\u9F84\u6BB5"}),s("option",{value:_1,children:"\u513F\u7AE5"}),s("option",{value:M1,children:"\u5C11\u5E74"}),s("option",{value:R1,children:"\u6210\u4EBA"}),s("option",{value:I1,children:"\u8001\u5E74"}),s("option",{value:O1,children:"\u672A\u77E5"})]}):f("span",{className:"age-badge",children:[s(qd,{size:12}),ce(x.age)]})}),s("td",{className:"col-voice",children:f("div",{className:"voice-select-cell",children:[s(um,{size:14}),f("select",{className:"voice-select-inline",value:x.voiceId||"",onChange:z=>oe(x.id,z.target.value),disabled:i,children:[s("option",{value:"",children:"\u9009\u62E9\u97F3\u8272"}),Object.entries(S).map(([z,Q])=>s("optgroup",{label:$1[z]||z,children:Q.map(le=>f("option",{value:le.id,children:[le.name," ",le.gender?`(${V1[le.gender]||le.gender})`:""]},le.id))},z))]})]})}),s("td",{className:"col-desc",children:y===x.id?s("input",{type:"text",className:"edit-input-inline",value:p,onChange:z=>w(z.target.value),placeholder:"\u89D2\u8272\u7B80\u4ECB"}):s("span",{className:"description-text",title:x.description,children:x.description||"-"})}),s("td",{className:"col-updated",children:f("span",{className:"last-seen",children:[s(qa,{size:12}),I(x.lastSeenAt)]})}),s("td",{className:"col-actions",children:y===x.id?f("div",{className:"edit-actions-inline",children:[s("button",{className:"btn-ghost btn-small",onClick:Ke,children:s(dt,{size:12})}),s("button",{className:"btn-primary btn-small",onClick:()=>Ee(x),children:s(Au,{size:12})})]}):s("div",{className:"actions-cell",children:x.id!==0&&f(ql,{children:[s("button",{className:"btn-icon btn-edit",onClick:()=>fe(x),disabled:i,title:"\u7F16\u8F91",children:s(Au,{size:14})}),s("button",{className:"btn-icon btn-danger",onClick:()=>M(x.id),disabled:i,title:"\u5220\u9664",children:s(yi,{size:14})})]})})})]})},`${x.id}-${x.name}`)})})]})}),P>1&&f("div",{className:"pagination",children:[s("button",{className:"btn-page",onClick:()=>g(x=>Math.max(1,x-1)),disabled:c===1,children:s(qh,{size:16})}),f("span",{className:"page-info",children:["\u7B2C ",c," / ",P," \u9875"]}),s("button",{className:"btn-page",onClick:()=>g(x=>Math.min(P,x+1)),disabled:c===P,children:s(em,{size:16})})]})]})}),s("style",{children:`
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
          gap: 16px;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #CBD5E1;
          flex-shrink: 0;
        }

        .header-left h2 {
          margin: 0;
          font-size: 1rem;
          font-weight: 600;
        }

        .count-badge {
          padding: 2px 10px;
          background: #10B981;
          color: white;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .search-box {
          display: flex;
          align-items: center;
          gap: 8px;
          background-color: #151E2B;
          border: 1px solid #2D3E54;
          border-radius: 8px;
          padding: 6px 12px;
          flex: 1;
          max-width: 400px;
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
          font-size: 0.9rem;
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
          height: 10px;
          width: 10px;
        }

        .table-scroll-wrapper::-webkit-scrollbar-track {
          background: #1A2432;
        }

        .table-scroll-wrapper::-webkit-scrollbar-thumb {
          background: #334155;
          border-radius: 5px;
        }

        .table-scroll-wrapper::-webkit-scrollbar-thumb:hover {
          background: #475569;
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
          border-top: 3px solid #10B981;
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
          padding: 12px 16px;
          text-align: left;
          font-size: 0.75rem;
          font-weight: 600;
          color: #94A3B8;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border-bottom: 1px solid #2D3E54;
        }

        .role-table td {
          padding: 12px 16px;
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

        /* \u5217\u5BBD - \u4F18\u5316\u540E\u66F4\u7D27\u51D1 */
        .col-name { width: 150px; min-width: 150px; }
        .col-chapters { width: 100px; min-width: 100px; }
        .col-aliases { width: 110px; min-width: 110px; }
        .col-gender { width: 90px; min-width: 90px; }
        .col-age { width: 90px; min-width: 90px; }
        .col-voice { width: 140px; min-width: 140px; }
        .col-desc { width: 200px; min-width: 200px; }
        .col-updated { width: 95px; min-width: 95px; }
        .col-actions { width: 90px; min-width: 90px; }

        .name-cell {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .role-avatar-small {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }

        .role-avatar-small.known-avatar {
          background: linear-gradient(135deg, #10B981 0%, #059669 100%);
        }

        .role-avatar-small.narrator-avatar {
          background: linear-gradient(135deg, #00A8FF 0%, #0088CC 100%);
        }

        .character-name {
          color: #F1F5F9;
          font-weight: 500;
          font-size: 0.9rem;
        }

        .badge {
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 0.7rem;
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
          font-size: 0.85rem;
        }

        .alias-list {
          color: #94A3B8;
          font-size: 0.85rem;
        }

        .gender-badge,
        .age-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: #94A3B8;
          font-size: 0.85rem;
        }

        .gender-badge svg,
        .age-badge svg {
          color: #64748B;
        }

        .voice-select-cell {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .voice-select-cell svg {
          color: #00A8FF;
          flex-shrink: 0;
        }

        .voice-select-inline {
          flex: 1;
          padding: 4px 8px;
          background-color: #151E2B;
          border: 1px solid #2D3E54;
          border-radius: 6px;
          color: #E2E8F0;
          font-size: 0.8rem;
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
          font-size: 0.85rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .last-seen {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: #64748B;
          font-size: 0.8rem;
        }

        .last-seen svg {
          color: #475569;
        }

        .actions-cell {
          display: flex;
          gap: 4px;
        }

        .edit-actions-inline {
          display: flex;
          gap: 6px;
        }

        .btn-icon {
          width: 28px;
          height: 28px;
          padding: 0;
          border: none;
          border-radius: 6px;
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

        .btn-icon.btn-edit:hover:not(:disabled) {
          background: rgba(0, 168, 255, 0.15);
          color: #00A8FF;
        }

        .btn-icon.btn-danger:hover:not(:disabled) {
          background: rgba(239, 68, 68, 0.15);
          color: #EF4444;
        }

        .btn-icon:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .btn-ghost {
          padding: 6px 12px;
          border: 1px solid transparent;
          background: transparent;
          color: #94A3B8;
          border-radius: 6px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          transition: all 0.2s ease;
        }

        .btn-ghost:hover {
          background: rgba(255, 255, 255, 0.06);
          color: #E2E8F0;
        }

        .btn-ghost.btn-small {
          padding: 4px 8px;
        }

        .btn-primary {
          padding: 6px 12px;
          border: none;
          background: linear-gradient(135deg, #00A8FF 0%, #0088CC 100%);
          color: white;
          border-radius: 6px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .btn-primary:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 168, 255, 0.35);
        }

        .btn-primary.btn-small {
          padding: 4px 8px;
        }

        .edit-input-inline {
          width: 100%;
          padding: 4px 8px;
          background-color: #151E2B;
          border: 1px solid #2D3E54;
          border-radius: 6px;
          color: #E2E8F0;
          font-size: 0.8rem;
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
          border-radius: 6px;
          color: #E2E8F0;
          font-size: 0.8rem;
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
          gap: 16px;
          padding: 16px;
          border-top: 1px solid #243447;
          background: #1A2432;
        }

        .btn-page {
          width: 32px;
          height: 32px;
          padding: 0;
          border: 1px solid #2D3E54;
          background: #151E2B;
          color: #94A3B8;
          border-radius: 6px;
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
          font-size: 0.85rem;
        }
      `})]})},W1=()=>{const{id:e}=Zd(),t=Mr(),[n,r]=k.exports.useState(null),[o,i]=k.exports.useState(!1),[l,a]=k.exports.useState(!1),[u,c]=k.exports.useState(!1),[g,y]=k.exports.useState(!1),[m,F]=k.exports.useState({name:"",description:""}),[E,C]=k.exports.useState(""),[L,h]=k.exports.useState(""),[d,p]=k.exports.useState(""),[w,S]=k.exports.useState(""),[A,D]=k.exports.useState(!1),[P,U]=k.exports.useState(!1);k.exports.useEffect(()=>{e&&M(parseInt(e))},[e]);const M=async K=>{i(!0);try{const ce=await W.getProject(K);r(ce),ce&&(F({name:ce.name,description:ce.description}),C(ce.llmApiKey||""),h(ce.ttsApiKey||""),p(ce.ttsAppId||""),S(ce.ttsToken||""))}catch(ce){console.error("Failed to load project:",ce)}i(!1)},oe=async()=>{if(!!e){i(!0);try{await W.updateProject(parseInt(e),m.name,m.description),a(!1),M(parseInt(e))}catch(K){console.error("Failed to update project:",K)}i(!1)}},fe=async()=>{if(!!e){D(!0);try{await W.setProjectLLMApiKey(parseInt(e),E),c(!1),M(parseInt(e))}catch(K){console.error("Failed to save LLM API key:",K)}D(!1)}},Ee=async()=>{if(!!e){U(!0);try{await W.setProjectTTSApiKey(parseInt(e),L),await W.setProjectTTSAppID(parseInt(e),d),await W.setProjectTTSToken(parseInt(e),w),y(!1),M(parseInt(e))}catch(K){console.error("Failed to save TTS config:",K)}U(!1)}},Ke=K=>K?K.length<=8?K:K.slice(0,4)+"..."+K.slice(-4):"\u672A\u8BBE\u7F6E";return o&&!n?s("div",{className:"project-details-page",children:f("div",{className:"loading-container",children:[s("div",{className:"spinner"}),s("p",{children:"\u52A0\u8F7D\u4E2D..."})]})}):n?f("div",{className:"project-details-page",children:[s("header",{className:"page-header",children:f("div",{className:"header-inner",children:[f("div",{className:"header-left",children:[f(dr,{to:"/",className:"back-button",children:[s(Qo,{size:18}),s("span",{children:"\u8FD4\u56DE"})]}),s("div",{className:"divider"}),f("div",{className:"project-title",children:[s(Yo,{size:20,className:"title-icon"}),f("div",{children:[s("h1",{children:n.name}),s("p",{className:"subtitle",children:"\u6709\u58F0\u5C0F\u8BF4\u5236\u4F5C\u5DE5\u7A0B"})]})]})]}),s("div",{className:"header-right",children:s("button",{className:"btn-secondary",onClick:()=>t("/"),children:"\u8FD4\u56DE\u9996\u9875"})})]})}),s("main",{className:"main-content",children:f("div",{className:"content-wrapper",children:[f("div",{className:"left-column",children:[f("section",{className:"project-info-section",children:[f("div",{className:"section-header",children:[f("h2",{children:[s(np,{size:18}),"\u9879\u76EE\u6982\u89C8"]}),!l&&s("button",{className:"btn-ghost",onClick:()=>a(!0),disabled:o,children:"\u7F16\u8F91\u4FE1\u606F"})]}),s("div",{className:"project-info-card",children:l?f("div",{className:"project-info-edit",children:[f("div",{className:"form-grid",children:[f("div",{className:"form-group full-width",children:[s("label",{htmlFor:"project-name",children:"\u9879\u76EE\u540D\u79F0"}),s("input",{id:"project-name",type:"text",value:m.name,onChange:K=>F({...m,name:K.target.value}),placeholder:"\u8BF7\u8F93\u5165\u9879\u76EE\u540D\u79F0",disabled:o})]}),f("div",{className:"form-group full-width",children:[s("label",{htmlFor:"project-description",children:"\u9879\u76EE\u63CF\u8FF0"}),s("textarea",{id:"project-description",value:m.description,onChange:K=>F({...m,description:K.target.value}),placeholder:"\u8BF7\u8F93\u5165\u9879\u76EE\u63CF\u8FF0",rows:2,disabled:o})]})]}),f("div",{className:"form-actions",children:[f("button",{className:"btn-secondary",onClick:()=>{a(!1),F({name:n.name,description:n.description})},disabled:o,children:[s(dt,{size:16}),"\u53D6\u6D88"]}),f("button",{className:"btn-primary",onClick:oe,disabled:o,children:[s(Xo,{size:16}),"\u4FDD\u5B58\u66F4\u6539"]})]})]}):f("div",{className:"project-info-content",children:[f("div",{className:"info-grid",children:[f("div",{className:"info-item",children:[s("div",{className:"info-label",children:"\u9879\u76EE\u540D\u79F0"}),s("div",{className:"info-value",children:n.name})]}),f("div",{className:"info-item",children:[s("div",{className:"info-label",children:"\u9879\u76EE\u63CF\u8FF0"}),s("div",{className:"info-value",children:n.description||"\u6682\u65E0\u63CF\u8FF0"})]})]}),f("div",{className:"meta-row",children:[f("div",{className:"meta-item",children:[s(qd,{size:14}),f("span",{children:["\u521B\u5EFA\u4E8E ",new Date(n.createdAt).toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric"})]})]}),f("div",{className:"meta-item",children:[s(qa,{size:14}),f("span",{children:["\u66F4\u65B0\u4E8E ",new Date(n.updatedAt).toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric"})]})]})]})]})})]}),f("section",{className:"api-key-section",children:[s("div",{className:"section-header",children:f("h2",{children:[s(rm,{size:18}),"\u57FA\u7840\u914D\u7F6E"]})}),f("div",{className:"api-key-card",children:[f("div",{className:"api-key-item",children:[s("div",{className:"api-key-header",children:s("h3",{children:"\u6587\u672C\u5927\u6A21\u578B"})}),u?s("div",{className:"api-key-edit-row",children:s("div",{className:"form-group",children:s("input",{type:"password",value:E,onChange:K=>C(K.target.value),placeholder:"\u8BF7\u8F93\u5165\u6587\u672C\u5927\u6A21\u578B API Key",disabled:A})})}):f("div",{className:"api-key-status-row",children:[s("div",{className:`status-indicator ${n.llmApiKey?"active":"inactive"}`,children:n.llmApiKey?"\u5DF2\u914D\u7F6E":"\u672A\u914D\u7F6E"}),n.llmApiKey&&s("span",{className:"api-key-masked",children:Ke(n.llmApiKey)})]})]}),s("div",{className:"api-key-divider"}),f("div",{className:"api-key-item",children:[s("div",{className:"api-key-header",children:s("h3",{children:"\u8BED\u97F3\u5927\u6A21\u578B"})}),g?f("div",{className:"api-key-edit-full",children:[f("div",{className:"form-group",children:[s("label",{htmlFor:"tts-api-key",children:"API Key"}),s("input",{id:"tts-api-key",type:"password",value:L,onChange:K=>h(K.target.value),placeholder:"\u8BF7\u8F93\u5165\u8BED\u97F3\u5927\u6A21\u578B API Key",disabled:P})]}),f("div",{className:"form-group",children:[s("label",{htmlFor:"tts-app-id",children:"App ID"}),s("input",{id:"tts-app-id",type:"text",value:d,onChange:K=>p(K.target.value),placeholder:"\u8BF7\u8F93\u5165\u8BED\u97F3\u5927\u6A21\u578B App ID",disabled:P})]}),f("div",{className:"form-group",children:[s("label",{htmlFor:"tts-token",children:"Token"}),s("input",{id:"tts-token",type:"password",value:w,onChange:K=>S(K.target.value),placeholder:"\u8BF7\u8F93\u5165\u8BED\u97F3\u5927\u6A21\u578B Token",disabled:P})]})]}):s("div",{className:"api-key-status-row",children:s("div",{className:`status-indicator ${n.ttsApiKey||n.ttsAppId||n.ttsToken?"active":"inactive"}`,children:n.ttsApiKey||n.ttsAppId||n.ttsToken?"\u5DF2\u914D\u7F6E":"\u672A\u914D\u7F6E"})})]}),s("div",{className:"api-key-actions",children:!u&&!g?s("button",{className:"btn-ghost",onClick:()=>{c(!0),y(!0)},disabled:o,children:"\u7F16\u8F91\u914D\u7F6E"}):f("div",{className:"form-actions",children:[f("button",{className:"btn-secondary",onClick:()=>{c(!1),y(!1),C(n.llmApiKey||""),h(n.ttsApiKey||""),p(n.ttsAppId||""),S(n.ttsToken||"")},disabled:A||P,children:[s(dt,{size:16}),"\u53D6\u6D88"]}),f("button",{className:"btn-primary",onClick:async()=>{u&&await fe(),g&&await Ee()},disabled:A||P,children:[s(Xo,{size:16}),A||P?"\u4FDD\u5B58\u4E2D...":"\u4FDD\u5B58"]})]})})]})]}),f("section",{className:"character-section",children:[s("div",{className:"section-header",children:f("h2",{children:[s(sm,{size:18}),"\u89D2\u8272\u7BA1\u7406"]})}),s("div",{className:"role-manager-wrapper",children:s(K1,{projectId:parseInt(e||"0")})})]})]}),s("div",{className:"right-column",children:f("section",{className:"chapter-section",children:[s("div",{className:"section-header",children:f("h2",{children:[s(Yo,{size:18}),"\u7AE0\u8282\u7BA1\u7406"]})}),s("div",{className:"chapter-manager-wrapper",children:s(t1,{projectId:parseInt(e||"0")})})]})})]})}),s("style",{children:`
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
      `})]}):s("div",{className:"project-details-page",children:f("div",{className:"error-container",children:[s("h2",{children:"\u9879\u76EE\u4E0D\u5B58\u5728"}),f(dr,{to:"/",className:"btn-primary",children:[s(Qo,{size:16}),"\u8FD4\u56DE\u9996\u9875"]})]})})},H1=()=>{const{projectId:e,chapterId:t}=Zd();Mr();const[n,r]=k.exports.useState(null),[o,i]=k.exports.useState([]),[l,a]=k.exports.useState([]),[u,c]=k.exports.useState([]),[g,y]=k.exports.useState([]),[m,F]=k.exports.useState(!0),[E,C]=k.exports.useState(null),[L,h]=k.exports.useState(!1),[d,p]=k.exports.useState(0),[w,S]=k.exports.useState(0),[A,D]=k.exports.useState(null),P=k.exports.useRef(null),U=k.exports.useRef(null),[M,oe]=k.exports.useState({content:"",speaker:"",tone:"neutral",speed:so}),[fe,Ee]=k.exports.useState(new Set),[Ke,K]=k.exports.useState(!1),[ce,he]=k.exports.useState(!1),[B,I]=k.exports.useState(!1),[x,_]=k.exports.useState(""),[z,Q]=k.exports.useState(!1),[le,It]=k.exports.useState(!1),[Je,qe]=k.exports.useState(0),[op,on]=k.exports.useState(""),[es,Rr]=k.exports.useState(!1),[vi,ts]=k.exports.useState(""),[ip,ln]=k.exports.useState(!1),[Ot,xi]=k.exports.useState(""),[lp,wi]=k.exports.useState("\u751F\u6210\u811A\u672C\u5931\u8D25"),[an,it]=k.exports.useState({isOpen:!1,title:"",message:"",type:"warning",onConfirm:null}),[ki,Ei]=k.exports.useState(!1),[ns,Ir]=k.exports.useState(0),Ci=k.exports.useRef(null),ap=k.exports.useRef(null),Or=k.exports.useRef(null);k.exports.useEffect(()=>{t&&sp()},[t,e]),k.exports.useEffect(()=>{const v=b=>{Ci.current&&!Ci.current.contains(b.target)&&Rr(!1)};return document.addEventListener("mousedown",v),()=>document.removeEventListener("mousedown",v)},[]),k.exports.useEffect(()=>{if(E&&o.length>0){const v=o.find(b=>b.id===E);v&&oe({content:v.content,speaker:v.speaker||"",tone:v.tone||"neutral",speed:v.speed||so})}},[E,o]);const sp=async()=>{F(!0);try{const v=await W.getChapter(parseInt(t||"0"));if(r(v),_(v.content||""),e){const ne=await W.getProjectKnownCharacters(parseInt(e));c(ne)}const b=await W.getVoices();y(b);const R=[...await W.getParagraphs(parseInt(t||"0"))].sort((ne,$t)=>ne.orderIndex-$t.orderIndex);i(R),a(R),sn(R),R.length>0&&un(R[0].id)}catch(v){console.error("Failed to load data:",v)}F(!1)},up=()=>{n&&_(n.content||""),I(!0)},cp=async()=>{if(!!n){Q(!0);try{await W.updateChapter(n.id,n.title,x),r(v=>v?{...v,content:x}:null),I(!1),he(!0),setTimeout(()=>he(!1),2e3)}catch(v){console.error("Failed to save chapter:",v)}Q(!1)}},sn=v=>{const b=v.reduce((T,R)=>T+(R.duration||0),0);S(b)},rs=(()=>{let v=0;return o.map(b=>{const T=v,R=Math.max(b.duration||0,.1),ne=v+R;return v=ne,{id:b.id,start:T,end:ne,paragraph:b}})})(),Ur=v=>fe.has(v),un=v=>{if(v===E)return;os(),C(v);const b=o.find(T=>T.id===v);b&&oe({content:b.content,speaker:b.speaker||"",tone:b.tone||"neutral",speed:b.speed||so})},os=()=>{if(E){const v=o.map(b=>b.id===E?{...b,...M,voiceId:b.voiceId}:b);i(v)}},$n=(v,b)=>{oe({...M,[v]:b}),E&&Ee(T=>new Set(T).add(E))},dp=async()=>{if(fe.size!==0){K(!0);try{os();for(const v of fe){const b=o.find(T=>T.id===v);b&&await W.updateParagraph(b.id,b.content,b.speaker,b.tone,b.voiceId,b.speed,b.audioPath,b.audioData||"",b.duration,b.orderIndex)}Ee(new Set),a(o),he(!0),setTimeout(()=>he(!1),2e3)}catch(v){console.error("Failed to save paragraphs:",v)}K(!1)}},pp=()=>{if(i(l),sn(l),Ee(new Set),E){const v=l.find(b=>b.id===E);v?oe({content:v.content,speaker:v.speaker||"",tone:v.tone||"neutral",speed:v.speed||so}):l.length>0?un(l[0].id):C(null)}},fp=v=>{it({isOpen:!0,title:"\u5220\u9664\u6BB5\u843D",message:"\u786E\u5B9A\u8981\u5220\u9664\u6B64\u6BB5\u843D\u5417\uFF1F",type:"danger",onConfirm:()=>{const b=o.filter(T=>T.id!==v);i(b),sn(b),Ee(T=>{const R=new Set(T);return R.delete(v),R}),E===v&&(b.length>0?un(b[0].id):C(null)),it(T=>({...T,isOpen:!1}))}})},hp=async v=>{console.log("Generating audio for paragraph:",v);try{const b=await W.generateParagraphAudio(v);i(T=>T.map(R=>R.id===v?b:R)),a(T=>T.map(R=>R.id===v?b:R)),sn(o.map(T=>T.id===v?b:T)),he(!0),setTimeout(()=>he(!1),2e3)}catch(b){let T="\u751F\u6210\u97F3\u9891\u5931\u8D25";typeof b=="string"?T=b:b instanceof Error?T=b.message:b&&typeof b=="object"&&(T=b.message||b.error||String(b)),console.error("\u751F\u6210\u97F3\u9891\u5931\u8D25:",T),wi("\u751F\u6210\u97F3\u9891\u5931\u8D25"),xi(T),ln(!0)}},mp=async()=>{if(!t)return;const v=o.filter(b=>!b.audioPath);if(v.length===0){it({isOpen:!0,title:"\u91CD\u65B0\u751F\u6210\u97F3\u9891",message:"\u6240\u6709\u6BB5\u843D\u90FD\u5DF2\u6709\u97F3\u9891\uFF0C\u786E\u5B9A\u8981\u91CD\u65B0\u751F\u6210\u5417\uFF1F",type:"warning",onConfirm:()=>{it(b=>({...b,isOpen:!1})),is(o.map(b=>b.id))}});return}it({isOpen:!0,title:"\u751F\u6210\u7AE0\u8282\u97F3\u9891",message:`\u5C06\u4E3A ${v.length} \u4E2A\u6BB5\u843D\u751F\u6210\u97F3\u9891\uFF0C\u786E\u5B9A\u7EE7\u7EED\u5417\uFF1F`,type:"info",onConfirm:()=>{it(b=>({...b,isOpen:!1})),is(v.map(b=>b.id))}})},is=async v=>{if(!!t){Ei(!0),Ir(0);try{const b=await W.generateChapterAudio(parseInt(t)),T=new Map(b.map(ne=>[ne.id,ne])),R=o.map(ne=>T.get(ne.id)||ne);i(R),a(R),sn(R),Ir(100),he(!0),setTimeout(()=>{he(!1),Ei(!1),Ir(0)},1500)}catch(b){Ei(!1),Ir(0);let T="\u751F\u6210\u7AE0\u8282\u97F3\u9891\u5931\u8D25";typeof b=="string"?T=b:b instanceof Error?T=b.message:b&&typeof b=="object"&&(T=b.message||b.error||String(b)),console.error("\u751F\u6210\u7AE0\u8282\u97F3\u9891\u5931\u8D25:",T),wi("\u751F\u6210\u7AE0\u8282\u97F3\u9891\u5931\u8D25"),xi(T),ln(!0)}}},$r=()=>{Or.current&&(clearInterval(Or.current),Or.current=null)};k.exports.useEffect(()=>()=>{$r(),Ut(),P.current&&(P.current.pause(),P.current=null)},[]);const ls=async()=>{if(!t)return;It(!0),qe(0),on("\u9884\u8BA1 3-5 \u5206\u949F");const v=240;let b=0;$r(),Or.current=window.setInterval(()=>{b+=1;const T=Math.min(b/v*100,95),R=Math.max(v-b,0),ne=Math.floor(R/60),$t=R%60;qe(T),R>0?on(`\u9884\u8BA1\u5269\u4F59 ${ne}\u5206${$t}\u79D2`):on("\u5373\u5C06\u5B8C\u6210...")},1e3);try{const T=await W.splitParagraph(parseInt(t));qe(100),on("\u5B8C\u6210\uFF01"),await new Promise(ne=>setTimeout(ne,500));const R=[...T].sort((ne,$t)=>ne.orderIndex-$t.orderIndex);i(R),a(R),sn(R),Ee(new Set),R.length>0?un(R[0].id):C(null),he(!0),setTimeout(()=>he(!1),2e3),$r(),It(!1),setTimeout(()=>{qe(0),on("")},1e3)}catch(T){console.error("Failed to generate script:",T),$r(),It(!1);let R="\u672A\u77E5\u9519\u8BEF";typeof T=="string"?R=T:T instanceof Error?R=T.message:T&&typeof T=="object"&&(R=T.message||T.error||String(T)),console.log("Setting error message:",R),wi("\u751F\u6210\u811A\u672C\u5931\u8D25"),xi(R),ln(!0),setTimeout(()=>{qe(0),on("")},500)}},gp=async()=>{if(!!t){if(o.length>0){it({isOpen:!0,title:"\u91CD\u65B0\u751F\u6210\u811A\u672C",message:"\u5DF2\u5B58\u5728\u6BB5\u843D\uFF0C\u786E\u5B9A\u8981\u91CD\u65B0\u751F\u6210\u5417\uFF1F\u8FD9\u5C06\u8986\u76D6\u73B0\u6709\u6BB5\u843D\u3002",type:"warning",onConfirm:()=>{it(v=>({...v,isOpen:!1})),ls()}});return}ls()}},as=async v=>{if(!v.audioData){console.warn("No audio data for paragraph:",v.id);return}Ut(),P.current&&(P.current.pause(),P.current.currentTime=0);const b=rs.find(R=>R.id===v.id),T=b?b.start:0;p(T);try{const R=atob(v.audioData),ne=new Uint8Array(R.length);for(let cn=0;cn<R.length;cn++)ne[cn]=R.charCodeAt(cn);const $t=new Blob([ne],{type:"audio/mpeg"}),bi=URL.createObjectURL($t),Vr=new Audio(bi);P.current=Vr,D(v.id),yp(T,v.duration||2),Vr.onended=()=>{Ut(),D(null),URL.revokeObjectURL(bi)},Vr.onerror=cn=>{console.error("Audio playback error:",cn),Ut(),D(null),URL.revokeObjectURL(bi)},await Vr.play()}catch(R){console.error("Failed to play audio:",R),Ut(),D(null)}},yp=(v,b)=>{let T=0;U.current=window.setInterval(()=>{T+=.05,p(v+T),T>=b&&Ut()},50)},Ut=()=>{U.current&&(clearInterval(U.current),U.current=null)},ss=()=>{Ut(),P.current&&(P.current.pause(),P.current.currentTime=0),D(null)},vp=()=>{h(!L)},us=v=>{const b=Math.floor(v/60),T=Math.floor(v%60),R=Math.floor(v%1*100);return`${b.toString().padStart(2,"0")}:${T.toString().padStart(2,"0")}:${R.toString().padStart(2,"0")}`},Fi=v=>({\u65C1\u767D:"#00A8FF",\u7537\u4E3B\u89D2:"#FF6B6B",\u5973\u4E3B\u89D2:"#FF8EC7"})[v]||"#95A5A6",xp=()=>{const v=new Set;return u.forEach(b=>{b.name&&v.add(b.name)}),o.forEach(b=>{b.speaker&&v.add(b.speaker)}),Array.from(v).sort()},wp=()=>{const v=xp();if(!vi.trim())return v;const b=vi.toLowerCase();return v.filter(T=>T.toLowerCase().includes(b))},Si=E?o.find(v=>v.id===E):null;return m?s("div",{className:"chapter-editor",children:f("div",{className:"loading-container",children:[s("div",{className:"spinner"}),s("p",{children:"\u52A0\u8F7D\u4E2D..."})]})}):n?f("div",{className:"chapter-editor",children:[f("header",{className:"editor-header",children:[f("div",{className:"header-left",children:[f(dr,{to:`/project/${e}`,className:"back-button",children:[s(Qo,{size:18}),s("span",{children:"\u8FD4\u56DE"})]}),s("div",{className:"divider"}),f("div",{className:"chapter-title",children:[s("h1",{children:n.title}),s("p",{className:"subtitle",children:"\u7AE0\u8282\u7F16\u8F91 \xB7 \u65F6\u95F4\u8F74\u89C6\u56FE"})]}),fe.size>0&&f("div",{className:"dirty-indicator-wrapper",children:[f("div",{className:"dirty-indicator",children:[s(ao,{size:14}),f("span",{children:[fe.size," \u4E2A\u672A\u4FDD\u5B58\u4FEE\u6539"]})]}),f("button",{className:"undo-btn",onClick:pp,disabled:Ke,children:[s(dt,{size:14}),"\u64A4\u9500"]})]}),ce&&f("div",{className:"save-success",children:[s(Jh,{size:14}),s("span",{children:"\u5DF2\u4FDD\u5B58"})]})]}),f("div",{className:"header-right",children:[f("button",{className:"btn-secondary",onClick:up,children:[s(na,{size:16}),"\u7F16\u8F91\u6587\u672C"]}),f("button",{className:`btn-save ${fe.size>0?"dirty":""}`,onClick:dp,disabled:fe.size===0||Ke,children:[s(Xo,{size:16}),Ke?"\u4FDD\u5B58\u4E2D...":"\u4FDD\u5B58"]}),f("div",{className:"generate-button-wrapper",children:[f("button",{className:"btn-primary audio-generate-btn",onClick:mp,disabled:ki||o.length===0,children:[s(Bu,{size:16}),ki?"\u751F\u6210\u97F3\u9891\u4E2D...":"\u751F\u6210\u7AE0\u8282\u97F3\u9891"]}),ki&&f("div",{className:"generate-progress-container",children:[s("div",{className:"progress-bar",children:s("div",{className:"progress-bar-fill",style:{width:`${ns}%`}})}),s("div",{className:"progress-info",children:f("span",{className:"progress-percent",children:[Math.round(ns),"%"]})})]})]}),f("div",{className:"generate-button-wrapper",children:[f("button",{className:"btn-primary",onClick:gp,disabled:le,children:[s(np,{size:16}),le?"\u751F\u6210\u4E2D...":o.length>0?"\u91CD\u65B0\u751F\u6210\u811A\u672C":"\u751F\u6210\u811A\u672C"]}),le&&f("div",{className:"generate-progress-container",children:[s("div",{className:"progress-bar",children:s("div",{className:"progress-bar-fill",style:{width:`${Je}%`}})}),f("div",{className:"progress-info",children:[f("span",{className:"progress-percent",children:[Math.round(Je),"%"]}),s("span",{className:"progress-time",children:op})]})]})]})]})]}),f("div",{className:"editor-main",children:[f("div",{className:"upper-section",children:[f("div",{className:"paragraph-list-panel",children:[f("div",{className:"panel-header",children:[s("h2",{children:"\u6BB5\u843D\u5217\u8868"}),f("span",{className:"paragraph-count",children:[o.length," \u4E2A\u6BB5\u843D"]})]}),s("div",{className:"paragraph-list-content",children:o.map((v,b)=>f("div",{className:`paragraph-item ${E===v.id?"selected":""}`,onClick:()=>un(v.id),children:[f("div",{className:"paragraph-item-left",children:[s("div",{className:"paragraph-index",children:b+1}),s("div",{className:"speaker-dot",style:{backgroundColor:Fi(v.speaker)}})]}),f("div",{className:"paragraph-item-content",children:[f("div",{className:"paragraph-item-header",children:[s("span",{className:"speaker-label",style:{color:Fi(v.speaker)},children:v.speaker||"\u65C1\u767D"}),f("span",{className:"paragraph-duration",children:[s(qa,{size:10}),(v.duration||0).toFixed(1),"s"]}),Ur(v.id)&&s("span",{className:"dirty-dot",title:"\u6709\u672A\u4FDD\u5B58\u7684\u4FEE\u6539"})]}),s("p",{className:"paragraph-item-text",children:v.content})]}),s("div",{className:"paragraph-item-right",children:v.audioData||v.audioPath?s("button",{className:"audio-play-btn",onClick:T=>{T.stopPropagation(),A===v.id?ss():as(v)},title:A===v.id?"\u505C\u6B62":"\u8BD5\u542C",children:A===v.id?s(nl,{size:14}):s(rl,{size:14})}):null})]},v.id))})]}),f("div",{className:"paragraph-detail-panel",children:[f("div",{className:"panel-header",children:[s("h2",{children:"\u6BB5\u843D\u8BE6\u60C5"}),E&&Ur(E)&&f("span",{className:"dirty-badge",children:[s(ao,{size:12}),"\u672A\u4FDD\u5B58"]})]}),Si?f("div",{className:"panel-content",children:[f("div",{className:"form-group",children:[s("label",{children:"\u6587\u672C\u5185\u5BB9"}),s("textarea",{value:M.content,onChange:v=>$n("content",v.target.value),rows:5})]}),s("div",{className:"form-row",children:f("div",{className:"form-group full-width",children:[s("label",{children:"\u8BF4\u8BDD\u89D2\u8272"}),f("div",{className:"speaker-select-wrapper",ref:Ci,children:[f("div",{className:"speaker-select-input",onClick:()=>{Rr(!es),ts("")},children:[s("span",{className:M.speaker?"":"placeholder",children:M.speaker||"\u65C1\u767D"}),s("span",{className:"dropdown-arrow",children:"\u25BC"})]}),es&&f("div",{className:"speaker-dropdown",children:[s("input",{type:"text",className:"speaker-search-input",placeholder:"\u641C\u7D22\u89D2\u8272...",value:vi,onChange:v=>ts(v.target.value),autoFocus:!0}),f("div",{className:"speaker-options",children:[s("div",{className:`speaker-option ${M.speaker?"selected":""}`,onClick:()=>{$n("speaker",""),Rr(!1)},children:"\u65C1\u767D"}),wp().map(v=>s("div",{className:`speaker-option ${M.speaker===v?"selected":""}`,onClick:()=>{$n("speaker",v),Rr(!1)},children:v},v))]})]})]})]})}),f("div",{className:"form-row",children:[f("div",{className:"form-group",children:[s("label",{children:"\u60C5\u611F"}),s("select",{value:M.tone,onChange:v=>$n("tone",v.target.value),children:B1.map(v=>s("option",{value:v.value,children:v.label},v.value))})]}),f("div",{className:"form-group",children:[f("div",{className:"label-row",children:[s("label",{children:"\u8BED\u901F"}),s("span",{className:"value-badge",children:M.speed.toFixed(2)})]}),s("input",{type:"range",min:"0.5",max:"2.0",step:"0.05",value:M.speed,onChange:v=>$n("speed",parseFloat(v.target.value))}),f("div",{className:"range-labels",children:[s("span",{children:"0.5x"}),s("span",{children:"1.0x"}),s("span",{children:"2.0x"})]})]})]}),f("div",{className:"action-buttons",children:[f("button",{className:"btn-generate",onClick:()=>hp(Si.id),children:[s(Bu,{size:16}),"\u751F\u6210\u97F3\u9891"]}),f("button",{className:"btn-delete",onClick:()=>fp(Si.id),children:[s(yi,{size:16}),"\u5220\u9664"]})]})]}):f("div",{className:"empty-properties",children:[s(Du,{size:40}),s("p",{children:"\u9009\u62E9\u4E00\u4E2A\u6BB5\u843D\u6765\u7F16\u8F91\u5C5E\u6027"})]})]})]}),s("div",{className:"lower-section",children:f("div",{className:"timeline-panel",children:[s("div",{className:"panel-header",children:f("div",{className:"transport-controls",children:[s("button",{className:`play-btn ${L?"playing":""}`,onClick:vp,children:L?s(nl,{size:20}):s(rl,{size:20})}),f("div",{className:"time-display",children:[us(d)," / ",us(w)]})]})}),f("div",{className:"timeline-container",ref:ap,children:[s("div",{className:"timeline-ruler",children:Array.from({length:Math.max(Math.ceil(w),1)+1}).map((v,b)=>s("div",{className:"ruler-mark",style:{left:`${w>0?b/w*100:0}%`},children:f("span",{className:"ruler-label",children:[b,"s"]})},b))}),s("div",{className:"timeline-track",children:rs.map(v=>{const b=w>0?w:1,T=v.end-v.start;return f("div",{className:`timeline-clip ${E===v.id?"selected":""} ${Ur(v.id)?"dirty":""} ${A===v.id?"playing":""}`,style:{left:`${v.start/b*100}%`,width:`${Math.max(T/b*100,2)}%`,backgroundColor:Fi(v.paragraph.speaker)},onClick:()=>un(v.id),children:[(v.paragraph.audioData||v.paragraph.audioPath)&&s("button",{className:"clip-play-btn",onClick:R=>{R.stopPropagation(),A===v.id?ss():as(v.paragraph)},title:A===v.id?"\u505C\u6B62":"\u8BD5\u542C",children:A===v.id?s(nl,{size:12}):s(rl,{size:12})}),f("div",{className:"clip-content",children:[f("div",{className:"clip-speaker",children:[s(im,{size:14}),v.paragraph.speaker||"\u65C1\u767D"]}),f("div",{className:"clip-text",children:[v.paragraph.content.slice(0,40),v.paragraph.content.length>40?"...":""]})]}),Ur(v.id)&&s("div",{className:"clip-dirty-indicator",children:s(ao,{size:10})}),v.paragraph.audioPath&&s("div",{className:"clip-indicator",children:s(lm,{size:12})})]},v.id)})}),s("div",{className:"playhead",style:{left:`${w>0?d/w*100:0}%`}})]})]})})]}),B&&s("div",{className:"text-editor-modal",children:f("div",{className:"text-editor-content",children:[f("div",{className:"text-editor-header",children:[f("div",{className:"text-editor-title",children:[s(na,{size:20}),s("h2",{children:"\u7F16\u8F91\u7AE0\u8282\u6587\u672C"})]}),s("button",{className:"modal-close",onClick:()=>I(!1),disabled:z,children:s(dt,{size:24})})]}),s("div",{className:"text-editor-body",children:s("textarea",{value:x,onChange:v=>_(v.target.value),placeholder:"\u8BF7\u8F93\u5165\u7AE0\u8282\u5185\u5BB9...",className:"chapter-textarea"})}),f("div",{className:"text-editor-footer",children:[s("button",{className:"btn-secondary",onClick:()=>{I(!1),n&&_(n.content||"")},disabled:z,children:"\u53D6\u6D88"}),f("button",{className:"btn-primary",onClick:cp,disabled:z,children:[s(Xo,{size:16}),z?"\u4FDD\u5B58\u4E2D...":"\u4FDD\u5B58"]})]})]})}),s(rp,{isOpen:an.isOpen,title:an.title,message:an.message,type:an.type,onConfirm:()=>{an.onConfirm&&an.onConfirm()},onCancel:()=>it(v=>({...v,isOpen:!1}))}),ip&&s("div",{className:"error-modal",children:f("div",{className:"error-modal-content",children:[f("div",{className:"error-modal-header",children:[f("div",{className:"error-modal-title",children:[s(ao,{size:24,className:"error-icon"}),s("h2",{children:lp})]}),s("button",{className:"modal-close",onClick:()=>ln(!1),children:s(dt,{size:24})})]}),f("div",{className:"error-modal-body",children:[s("p",{className:"error-message-text",children:Ot}),(Ot==null?void 0:Ot.includes("API Key"))&&f("div",{className:"error-hint-box",children:[s(Du,{size:16}),s("span",{children:"\u8BF7\u524D\u5F80\u9879\u76EE\u8BE6\u60C5\u9875\u914D\u7F6E API Key"})]})]}),f("div",{className:"error-modal-footer",children:[s("button",{className:"btn-primary",onClick:()=>ln(!1),children:"\u77E5\u9053\u4E86"}),(Ot==null?void 0:Ot.includes("API Key"))&&e&&s(dr,{to:`/project/${e}`,className:"btn-secondary",onClick:()=>ln(!1),children:"\u524D\u5F80\u914D\u7F6E"})]})]})}),s("style",{children:`
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
      `})]}):s("div",{className:"chapter-editor",children:f("div",{className:"error-container",children:[s("h2",{children:"\u7AE0\u8282\u4E0D\u5B58\u5728"}),f(dr,{to:`/project/${e}`,className:"btn-primary",children:[s(Qo,{size:16}),"\u8FD4\u56DE\u9879\u76EE"]})]})})};function G1(){return s(Hh,{children:s("div",{className:"app",children:f(Uh,{children:[s(Eo,{path:"/",element:s(e1,{})}),s(Eo,{path:"/project/:id",element:s(W1,{})}),s(Eo,{path:"/project/:projectId/chapter/:chapterId",element:s(H1,{})})]})})})}const Q1="Frontend",pn={debug:console.debug.bind(console),info:console.info.bind(console),warn:console.warn.bind(console),error:console.error.bind(console),log:console.log.bind(console)};let zu=!1;const Y1=()=>typeof window.go<"u",Zn=(e,...t)=>{if(!!Y1())try{const n=t.map(r=>{if(typeof r=="object")try{return JSON.stringify(r)}catch{return String(r)}return String(r)}).join(" ");W.log(e,n,Q1)}catch(n){pn.debug("Failed to send log to backend:",n)}},X1=()=>{zu||(zu=!0,console.debug=(...e)=>{pn.debug(...e),Zn("debug",...e)},console.info=(...e)=>{pn.info(...e),Zn("info",...e)},console.warn=(...e)=>{pn.warn(...e),Zn("warn",...e)},console.error=(...e)=>{pn.error(...e),Zn("error",...e)},console.log=(...e)=>{pn.log(...e),Zn("info",...e)},window.addEventListener("unhandledrejection",e=>{console.error("Unhandled Promise rejection:",e.reason)}),window.addEventListener("error",e=>{console.error("Uncaught error:",e.message,"at",e.filename,":",e.lineno,":",e.colno)}),console.info("\u65E5\u5FD7\u7CFB\u7EDF\u521D\u59CB\u5316\u5B8C\u6210"))};X1();const Z1=document.getElementById("root"),J1=Ud(Z1);J1.render(s(aa.StrictMode,{children:s(G1,{})}));
