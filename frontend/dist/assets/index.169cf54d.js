function up(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function cp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var k={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ar=Symbol.for("react.element"),dp=Symbol.for("react.portal"),pp=Symbol.for("react.fragment"),fp=Symbol.for("react.strict_mode"),hp=Symbol.for("react.profiler"),mp=Symbol.for("react.provider"),gp=Symbol.for("react.context"),yp=Symbol.for("react.forward_ref"),vp=Symbol.for("react.suspense"),xp=Symbol.for("react.memo"),wp=Symbol.for("react.lazy"),Ja=Symbol.iterator;function kp(e){return e===null||typeof e!="object"?null:(e=Ja&&e[Ja]||e["@@iterator"],typeof e=="function"?e:null)}var ku={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Eu=Object.assign,Cu={};function Ln(e,t,n){this.props=e,this.context=t,this.refs=Cu,this.updater=n||ku}Ln.prototype.isReactComponent={};Ln.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ln.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Fu(){}Fu.prototype=Ln.prototype;function Yl(e,t,n){this.props=e,this.context=t,this.refs=Cu,this.updater=n||ku}var Xl=Yl.prototype=new Fu;Xl.constructor=Yl;Eu(Xl,Ln.prototype);Xl.isPureReactComponent=!0;var qa=Array.isArray,Su=Object.prototype.hasOwnProperty,Zl={current:null},Nu={key:!0,ref:!0,__self:!0,__source:!0};function bu(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Su.call(t,r)&&!Nu.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Ar,type:e,key:i,ref:l,props:o,_owner:Zl.current}}function Ep(e,t){return{$$typeof:Ar,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Jl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ar}function Cp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var es=/\/+/g;function ki(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Cp(""+e.key):t.toString(36)}function oo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Ar:case dp:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+ki(l,0):r,qa(o)?(n="",e!=null&&(n=e.replace(es,"$&/")+"/"),oo(o,t,n,"",function(c){return c})):o!=null&&(Jl(o)&&(o=Ep(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(es,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",qa(e))for(var a=0;a<e.length;a++){i=e[a];var u=r+ki(i,a);l+=oo(i,t,n,u,o)}else if(u=kp(e),typeof u=="function")for(e=u.call(e),a=0;!(i=e.next()).done;)i=i.value,u=r+ki(i,a++),l+=oo(i,t,n,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Ir(e,t,n){if(e==null)return e;var r=[],o=0;return oo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Fp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var we={current:null},io={transition:null},Sp={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:io,ReactCurrentOwner:Zl};function Au(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:Ir,forEach:function(e,t,n){Ir(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ir(e,function(){t++}),t},toArray:function(e){return Ir(e,function(t){return t})||[]},only:function(e){if(!Jl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=Ln;U.Fragment=pp;U.Profiler=hp;U.PureComponent=Yl;U.StrictMode=fp;U.Suspense=vp;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sp;U.act=Au;U.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Eu({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Zl.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)Su.call(t,u)&&!Nu.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Ar,type:e.type,key:o,ref:i,props:r,_owner:l}};U.createContext=function(e){return e={$$typeof:gp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:mp,_context:e},e.Consumer=e};U.createElement=bu;U.createFactory=function(e){var t=bu.bind(null,e);return t.type=e,t};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:yp,render:e}};U.isValidElement=Jl;U.lazy=function(e){return{$$typeof:wp,_payload:{_status:-1,_result:e},_init:Fp}};U.memo=function(e,t){return{$$typeof:xp,type:e,compare:t===void 0?null:t}};U.startTransition=function(e){var t=io.transition;io.transition={};try{e()}finally{io.transition=t}};U.unstable_act=Au;U.useCallback=function(e,t){return we.current.useCallback(e,t)};U.useContext=function(e){return we.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return we.current.useDeferredValue(e)};U.useEffect=function(e,t){return we.current.useEffect(e,t)};U.useId=function(){return we.current.useId()};U.useImperativeHandle=function(e,t,n){return we.current.useImperativeHandle(e,t,n)};U.useInsertionEffect=function(e,t){return we.current.useInsertionEffect(e,t)};U.useLayoutEffect=function(e,t){return we.current.useLayoutEffect(e,t)};U.useMemo=function(e,t){return we.current.useMemo(e,t)};U.useReducer=function(e,t,n){return we.current.useReducer(e,t,n)};U.useRef=function(e){return we.current.useRef(e)};U.useState=function(e){return we.current.useState(e)};U.useSyncExternalStore=function(e,t,n){return we.current.useSyncExternalStore(e,t,n)};U.useTransition=function(){return we.current.useTransition()};U.version="18.3.1";(function(e){e.exports=U})(k);const ql=cp(k.exports),Zi=up({__proto__:null,default:ql},[k.exports]);var Du={exports:{}},ze={},Pu={exports:{}},zu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,x){var z=P.length;P.push(x);e:for(;0<z;){var j=z-1>>>1,O=P[j];if(0<o(O,x))P[j]=x,P[z]=O,z=j;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var x=P[0],z=P.pop();if(z!==x){P[0]=z;e:for(var j=0,O=P.length,Ie=O>>>1;j<Ie;){var nt=2*(j+1)-1,Ye=P[nt],Xe=nt+1,rt=P[Xe];if(0>o(Ye,z))Xe<O&&0>o(rt,Ye)?(P[j]=rt,P[Xe]=z,j=Xe):(P[j]=Ye,P[nt]=z,j=nt);else if(Xe<O&&0>o(rt,z))P[j]=rt,P[Xe]=z,j=Xe;else break e}}return x}function o(P,x){var z=P.sortIndex-x.sortIndex;return z!==0?z:P.id-x.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var u=[],c=[],g=1,y=null,m=3,S=!1,E=!1,C=!1,T=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(P){for(var x=n(c);x!==null;){if(x.callback===null)r(c);else if(x.startTime<=P)r(c),x.sortIndex=x.expirationTime,t(u,x);else break;x=n(c)}}function v(P){if(C=!1,p(P),!E)if(n(u)!==null)E=!0,Ge(F);else{var x=n(c);x!==null&&Qe(v,x.startTime-P)}}function F(P,x){E=!1,C&&(C=!1,f(B),B=-1),S=!0;var z=m;try{for(p(x),y=n(u);y!==null&&(!(y.expirationTime>x)||P&&!I());){var j=y.callback;if(typeof j=="function"){y.callback=null,m=y.priorityLevel;var O=j(y.expirationTime<=x);x=e.unstable_now(),typeof O=="function"?y.callback=O:y===n(u)&&r(u),p(x)}else r(u);y=n(u)}if(y!==null)var Ie=!0;else{var nt=n(c);nt!==null&&Qe(v,nt.startTime-x),Ie=!1}return Ie}finally{y=null,m=z,S=!1}}var A=!1,D=null,B=-1,$=5,M=-1;function I(){return!(e.unstable_now()-M<$)}function ae(){if(D!==null){var P=e.unstable_now();M=P;var x=!0;try{x=D(!0,P)}finally{x?re():(A=!1,D=null)}}else A=!1}var re;if(typeof d=="function")re=function(){d(ae)};else if(typeof MessageChannel<"u"){var tn=new MessageChannel,gt=tn.port2;tn.port1.onmessage=ae,re=function(){gt.postMessage(null)}}else re=function(){T(ae,0)};function Ge(P){D=P,A||(A=!0,re())}function Qe(P,x){B=T(function(){P(e.unstable_now())},x)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){E||S||(E=!0,Ge(F))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(P){switch(m){case 1:case 2:case 3:var x=3;break;default:x=m}var z=m;m=x;try{return P()}finally{m=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,x){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var z=m;m=P;try{return x()}finally{m=z}},e.unstable_scheduleCallback=function(P,x,z){var j=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?j+z:j):z=j,P){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=z+O,P={id:g++,callback:x,priorityLevel:P,startTime:z,expirationTime:O,sortIndex:-1},z>j?(P.sortIndex=z,t(c,P),n(u)===null&&P===n(c)&&(C?(f(B),B=-1):C=!0,Qe(v,z-j))):(P.sortIndex=O,t(u,P),E||S||(E=!0,Ge(F))),P},e.unstable_shouldYield=I,e.unstable_wrapCallback=function(P){var x=m;return function(){var z=m;m=x;try{return P.apply(this,arguments)}finally{m=z}}}})(zu);(function(e){e.exports=zu})(Pu);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Np=k.exports,Pe=Pu.exports;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Bu=new Set,ur={};function Jt(e,t){bn(e,t),bn(e+"Capture",t)}function bn(e,t){for(ur[e]=t,e=0;e<t.length;e++)Bu.add(t[e])}var dt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ji=Object.prototype.hasOwnProperty,bp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ts={},ns={};function Ap(e){return Ji.call(ns,e)?!0:Ji.call(ts,e)?!1:bp.test(e)?ns[e]=!0:(ts[e]=!0,!1)}function Dp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Pp(e,t,n,r){if(t===null||typeof t>"u"||Dp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ke(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){pe[e]=new ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];pe[t]=new ke(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){pe[e]=new ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){pe[e]=new ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){pe[e]=new ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){pe[e]=new ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){pe[e]=new ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){pe[e]=new ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){pe[e]=new ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var ea=/[\-:]([a-z])/g;function ta(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ea,ta);pe[t]=new ke(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ea,ta);pe[t]=new ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ea,ta);pe[t]=new ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){pe[e]=new ke(e,1,!1,e.toLowerCase(),null,!1,!1)});pe.xlinkHref=new ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){pe[e]=new ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function na(e,t,n,r){var o=pe.hasOwnProperty(t)?pe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Pp(t,n,o,r)&&(n=null),r||o===null?Ap(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var mt=Np.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Or=Symbol.for("react.element"),un=Symbol.for("react.portal"),cn=Symbol.for("react.fragment"),ra=Symbol.for("react.strict_mode"),qi=Symbol.for("react.profiler"),ju=Symbol.for("react.provider"),Lu=Symbol.for("react.context"),oa=Symbol.for("react.forward_ref"),el=Symbol.for("react.suspense"),tl=Symbol.for("react.suspense_list"),ia=Symbol.for("react.memo"),vt=Symbol.for("react.lazy"),Tu=Symbol.for("react.offscreen"),rs=Symbol.iterator;function On(e){return e===null||typeof e!="object"?null:(e=rs&&e[rs]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,Ei;function Yn(e){if(Ei===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ei=t&&t[1]||""}return`
`+Ei+e}var Ci=!1;function Fi(e,t){if(!e||Ci)return"";Ci=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var u=`
`+o[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=a);break}}}finally{Ci=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Yn(e):""}function zp(e){switch(e.tag){case 5:return Yn(e.type);case 16:return Yn("Lazy");case 13:return Yn("Suspense");case 19:return Yn("SuspenseList");case 0:case 2:case 15:return e=Fi(e.type,!1),e;case 11:return e=Fi(e.type.render,!1),e;case 1:return e=Fi(e.type,!0),e;default:return""}}function nl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case cn:return"Fragment";case un:return"Portal";case qi:return"Profiler";case ra:return"StrictMode";case el:return"Suspense";case tl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Lu:return(e.displayName||"Context")+".Consumer";case ju:return(e._context.displayName||"Context")+".Provider";case oa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ia:return t=e.displayName||null,t!==null?t:nl(e.type)||"Memo";case vt:t=e._payload,e=e._init;try{return nl(e(t))}catch{}}return null}function Bp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return nl(t);case 8:return t===ra?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Lt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _u(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function jp(e){var t=_u(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ur(e){e._valueTracker||(e._valueTracker=jp(e))}function Mu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=_u(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function vo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function rl(e,t){var n=t.checked;return q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function os(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Lt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ru(e,t){t=t.checked,t!=null&&na(e,"checked",t,!1)}function ol(e,t){Ru(e,t);var n=Lt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?il(e,t.type,n):t.hasOwnProperty("defaultValue")&&il(e,t.type,Lt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function is(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function il(e,t,n){(t!=="number"||vo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Xn=Array.isArray;function kn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Lt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ll(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(b(91));return q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ls(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(b(92));if(Xn(n)){if(1<n.length)throw Error(b(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Lt(n)}}function Iu(e,t){var n=Lt(t.value),r=Lt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function as(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ou(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function al(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ou(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var $r,Uu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for($r=$r||document.createElement("div"),$r.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=$r.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function cr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var qn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Lp=["Webkit","ms","Moz","O"];Object.keys(qn).forEach(function(e){Lp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),qn[t]=qn[e]})});function $u(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||qn.hasOwnProperty(e)&&qn[e]?(""+t).trim():t+"px"}function Vu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=$u(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Tp=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sl(e,t){if(t){if(Tp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(b(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(b(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(b(61))}if(t.style!=null&&typeof t.style!="object")throw Error(b(62))}}function ul(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cl=null;function la(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dl=null,En=null,Cn=null;function ss(e){if(e=zr(e)){if(typeof dl!="function")throw Error(b(280));var t=e.stateNode;t&&(t=Xo(t),dl(e.stateNode,e.type,t))}}function Ku(e){En?Cn?Cn.push(e):Cn=[e]:En=e}function Wu(){if(En){var e=En,t=Cn;if(Cn=En=null,ss(e),t)for(e=0;e<t.length;e++)ss(t[e])}}function Hu(e,t){return e(t)}function Gu(){}var Si=!1;function Qu(e,t,n){if(Si)return e(t,n);Si=!0;try{return Hu(e,t,n)}finally{Si=!1,(En!==null||Cn!==null)&&(Gu(),Wu())}}function dr(e,t){var n=e.stateNode;if(n===null)return null;var r=Xo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(b(231,t,typeof n));return n}var pl=!1;if(dt)try{var Un={};Object.defineProperty(Un,"passive",{get:function(){pl=!0}}),window.addEventListener("test",Un,Un),window.removeEventListener("test",Un,Un)}catch{pl=!1}function _p(e,t,n,r,o,i,l,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(g){this.onError(g)}}var er=!1,xo=null,wo=!1,fl=null,Mp={onError:function(e){er=!0,xo=e}};function Rp(e,t,n,r,o,i,l,a,u){er=!1,xo=null,_p.apply(Mp,arguments)}function Ip(e,t,n,r,o,i,l,a,u){if(Rp.apply(this,arguments),er){if(er){var c=xo;er=!1,xo=null}else throw Error(b(198));wo||(wo=!0,fl=c)}}function qt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Yu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function us(e){if(qt(e)!==e)throw Error(b(188))}function Op(e){var t=e.alternate;if(!t){if(t=qt(e),t===null)throw Error(b(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return us(o),e;if(i===r)return us(o),t;i=i.sibling}throw Error(b(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?e:t}function Xu(e){return e=Op(e),e!==null?Zu(e):null}function Zu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Zu(e);if(t!==null)return t;e=e.sibling}return null}var Ju=Pe.unstable_scheduleCallback,cs=Pe.unstable_cancelCallback,Up=Pe.unstable_shouldYield,$p=Pe.unstable_requestPaint,te=Pe.unstable_now,Vp=Pe.unstable_getCurrentPriorityLevel,aa=Pe.unstable_ImmediatePriority,qu=Pe.unstable_UserBlockingPriority,ko=Pe.unstable_NormalPriority,Kp=Pe.unstable_LowPriority,ec=Pe.unstable_IdlePriority,Ho=null,et=null;function Wp(e){if(et&&typeof et.onCommitFiberRoot=="function")try{et.onCommitFiberRoot(Ho,e,void 0,(e.current.flags&128)===128)}catch{}}var Ke=Math.clz32?Math.clz32:Qp,Hp=Math.log,Gp=Math.LN2;function Qp(e){return e>>>=0,e===0?32:31-(Hp(e)/Gp|0)|0}var Vr=64,Kr=4194304;function Zn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Eo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=Zn(a):(i&=l,i!==0&&(r=Zn(i)))}else l=n&~o,l!==0?r=Zn(l):i!==0&&(r=Zn(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ke(t),o=1<<n,r|=e[n],t&=~o;return r}function Yp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Ke(i),a=1<<l,u=o[l];u===-1?((a&n)===0||(a&r)!==0)&&(o[l]=Yp(a,t)):u<=t&&(e.expiredLanes|=a),i&=~a}}function hl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function tc(){var e=Vr;return Vr<<=1,(Vr&4194240)===0&&(Vr=64),e}function Ni(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Dr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ke(t),e[t]=n}function Zp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Ke(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function sa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ke(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var H=0;function nc(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var rc,ua,oc,ic,lc,ml=!1,Wr=[],St=null,Nt=null,bt=null,pr=new Map,fr=new Map,wt=[],Jp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ds(e,t){switch(e){case"focusin":case"focusout":St=null;break;case"dragenter":case"dragleave":Nt=null;break;case"mouseover":case"mouseout":bt=null;break;case"pointerover":case"pointerout":pr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":fr.delete(t.pointerId)}}function $n(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=zr(t),t!==null&&ua(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function qp(e,t,n,r,o){switch(t){case"focusin":return St=$n(St,e,t,n,r,o),!0;case"dragenter":return Nt=$n(Nt,e,t,n,r,o),!0;case"mouseover":return bt=$n(bt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return pr.set(i,$n(pr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,fr.set(i,$n(fr.get(i)||null,e,t,n,r,o)),!0}return!1}function ac(e){var t=$t(e.target);if(t!==null){var n=qt(t);if(n!==null){if(t=n.tag,t===13){if(t=Yu(n),t!==null){e.blockedOn=t,lc(e.priority,function(){oc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function lo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=gl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);cl=r,n.target.dispatchEvent(r),cl=null}else return t=zr(n),t!==null&&ua(t),e.blockedOn=n,!1;t.shift()}return!0}function ps(e,t,n){lo(e)&&n.delete(t)}function ef(){ml=!1,St!==null&&lo(St)&&(St=null),Nt!==null&&lo(Nt)&&(Nt=null),bt!==null&&lo(bt)&&(bt=null),pr.forEach(ps),fr.forEach(ps)}function Vn(e,t){e.blockedOn===t&&(e.blockedOn=null,ml||(ml=!0,Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority,ef)))}function hr(e){function t(o){return Vn(o,e)}if(0<Wr.length){Vn(Wr[0],e);for(var n=1;n<Wr.length;n++){var r=Wr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(St!==null&&Vn(St,e),Nt!==null&&Vn(Nt,e),bt!==null&&Vn(bt,e),pr.forEach(t),fr.forEach(t),n=0;n<wt.length;n++)r=wt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<wt.length&&(n=wt[0],n.blockedOn===null);)ac(n),n.blockedOn===null&&wt.shift()}var Fn=mt.ReactCurrentBatchConfig,Co=!0;function tf(e,t,n,r){var o=H,i=Fn.transition;Fn.transition=null;try{H=1,ca(e,t,n,r)}finally{H=o,Fn.transition=i}}function nf(e,t,n,r){var o=H,i=Fn.transition;Fn.transition=null;try{H=4,ca(e,t,n,r)}finally{H=o,Fn.transition=i}}function ca(e,t,n,r){if(Co){var o=gl(e,t,n,r);if(o===null)_i(e,t,r,Fo,n),ds(e,r);else if(qp(o,e,t,n,r))r.stopPropagation();else if(ds(e,r),t&4&&-1<Jp.indexOf(e)){for(;o!==null;){var i=zr(o);if(i!==null&&rc(i),i=gl(e,t,n,r),i===null&&_i(e,t,r,Fo,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else _i(e,t,r,null,n)}}var Fo=null;function gl(e,t,n,r){if(Fo=null,e=la(r),e=$t(e),e!==null)if(t=qt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Yu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Fo=e,null}function sc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vp()){case aa:return 1;case qu:return 4;case ko:case Kp:return 16;case ec:return 536870912;default:return 16}default:return 16}}var Et=null,da=null,ao=null;function uc(){if(ao)return ao;var e,t=da,n=t.length,r,o="value"in Et?Et.value:Et.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return ao=o.slice(e,1<r?1-r:void 0)}function so(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Hr(){return!0}function fs(){return!1}function Be(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Hr:fs,this.isPropagationStopped=fs,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Hr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Hr)},persist:function(){},isPersistent:Hr}),t}var Tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pa=Be(Tn),Pr=q({},Tn,{view:0,detail:0}),rf=Be(Pr),bi,Ai,Kn,Go=q({},Pr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kn&&(Kn&&e.type==="mousemove"?(bi=e.screenX-Kn.screenX,Ai=e.screenY-Kn.screenY):Ai=bi=0,Kn=e),bi)},movementY:function(e){return"movementY"in e?e.movementY:Ai}}),hs=Be(Go),of=q({},Go,{dataTransfer:0}),lf=Be(of),af=q({},Pr,{relatedTarget:0}),Di=Be(af),sf=q({},Tn,{animationName:0,elapsedTime:0,pseudoElement:0}),uf=Be(sf),cf=q({},Tn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),df=Be(cf),pf=q({},Tn,{data:0}),ms=Be(pf),ff={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=mf[e])?!!t[e]:!1}function fa(){return gf}var yf=q({},Pr,{key:function(e){if(e.key){var t=ff[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=so(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fa,charCode:function(e){return e.type==="keypress"?so(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?so(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vf=Be(yf),xf=q({},Go,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gs=Be(xf),wf=q({},Pr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fa}),kf=Be(wf),Ef=q({},Tn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cf=Be(Ef),Ff=q({},Go,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Sf=Be(Ff),Nf=[9,13,27,32],ha=dt&&"CompositionEvent"in window,tr=null;dt&&"documentMode"in document&&(tr=document.documentMode);var bf=dt&&"TextEvent"in window&&!tr,cc=dt&&(!ha||tr&&8<tr&&11>=tr),ys=String.fromCharCode(32),vs=!1;function dc(e,t){switch(e){case"keyup":return Nf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dn=!1;function Af(e,t){switch(e){case"compositionend":return pc(t);case"keypress":return t.which!==32?null:(vs=!0,ys);case"textInput":return e=t.data,e===ys&&vs?null:e;default:return null}}function Df(e,t){if(dn)return e==="compositionend"||!ha&&dc(e,t)?(e=uc(),ao=da=Et=null,dn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return cc&&t.locale!=="ko"?null:t.data;default:return null}}var Pf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Pf[e.type]:t==="textarea"}function fc(e,t,n,r){Ku(r),t=So(t,"onChange"),0<t.length&&(n=new pa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var nr=null,mr=null;function zf(e){Fc(e,0)}function Qo(e){var t=hn(e);if(Mu(t))return e}function Bf(e,t){if(e==="change")return t}var hc=!1;if(dt){var Pi;if(dt){var zi="oninput"in document;if(!zi){var ws=document.createElement("div");ws.setAttribute("oninput","return;"),zi=typeof ws.oninput=="function"}Pi=zi}else Pi=!1;hc=Pi&&(!document.documentMode||9<document.documentMode)}function ks(){nr&&(nr.detachEvent("onpropertychange",mc),mr=nr=null)}function mc(e){if(e.propertyName==="value"&&Qo(mr)){var t=[];fc(t,mr,e,la(e)),Qu(zf,t)}}function jf(e,t,n){e==="focusin"?(ks(),nr=t,mr=n,nr.attachEvent("onpropertychange",mc)):e==="focusout"&&ks()}function Lf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qo(mr)}function Tf(e,t){if(e==="click")return Qo(t)}function _f(e,t){if(e==="input"||e==="change")return Qo(t)}function Mf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var He=typeof Object.is=="function"?Object.is:Mf;function gr(e,t){if(He(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Ji.call(t,o)||!He(e[o],t[o]))return!1}return!0}function Es(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Cs(e,t){var n=Es(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Es(n)}}function gc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?gc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yc(){for(var e=window,t=vo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=vo(e.document)}return t}function ma(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Rf(e){var t=yc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&gc(n.ownerDocument.documentElement,n)){if(r!==null&&ma(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Cs(n,i);var l=Cs(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var If=dt&&"documentMode"in document&&11>=document.documentMode,pn=null,yl=null,rr=null,vl=!1;function Fs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vl||pn==null||pn!==vo(r)||(r=pn,"selectionStart"in r&&ma(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),rr&&gr(rr,r)||(rr=r,r=So(yl,"onSelect"),0<r.length&&(t=new pa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=pn)))}function Gr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var fn={animationend:Gr("Animation","AnimationEnd"),animationiteration:Gr("Animation","AnimationIteration"),animationstart:Gr("Animation","AnimationStart"),transitionend:Gr("Transition","TransitionEnd")},Bi={},vc={};dt&&(vc=document.createElement("div").style,"AnimationEvent"in window||(delete fn.animationend.animation,delete fn.animationiteration.animation,delete fn.animationstart.animation),"TransitionEvent"in window||delete fn.transitionend.transition);function Yo(e){if(Bi[e])return Bi[e];if(!fn[e])return e;var t=fn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in vc)return Bi[e]=t[n];return e}var xc=Yo("animationend"),wc=Yo("animationiteration"),kc=Yo("animationstart"),Ec=Yo("transitionend"),Cc=new Map,Ss="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _t(e,t){Cc.set(e,t),Jt(t,[e])}for(var ji=0;ji<Ss.length;ji++){var Li=Ss[ji],Of=Li.toLowerCase(),Uf=Li[0].toUpperCase()+Li.slice(1);_t(Of,"on"+Uf)}_t(xc,"onAnimationEnd");_t(wc,"onAnimationIteration");_t(kc,"onAnimationStart");_t("dblclick","onDoubleClick");_t("focusin","onFocus");_t("focusout","onBlur");_t(Ec,"onTransitionEnd");bn("onMouseEnter",["mouseout","mouseover"]);bn("onMouseLeave",["mouseout","mouseover"]);bn("onPointerEnter",["pointerout","pointerover"]);bn("onPointerLeave",["pointerout","pointerover"]);Jt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$f=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jn));function Ns(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ip(r,t,void 0,e),e.currentTarget=null}function Fc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==i&&o.isPropagationStopped())break e;Ns(o,a,c),i=u}else for(l=0;l<r.length;l++){if(a=r[l],u=a.instance,c=a.currentTarget,a=a.listener,u!==i&&o.isPropagationStopped())break e;Ns(o,a,c),i=u}}}if(wo)throw e=fl,wo=!1,fl=null,e}function Q(e,t){var n=t[Cl];n===void 0&&(n=t[Cl]=new Set);var r=e+"__bubble";n.has(r)||(Sc(t,e,2,!1),n.add(r))}function Ti(e,t,n){var r=0;t&&(r|=4),Sc(n,e,r,t)}var Qr="_reactListening"+Math.random().toString(36).slice(2);function yr(e){if(!e[Qr]){e[Qr]=!0,Bu.forEach(function(n){n!=="selectionchange"&&($f.has(n)||Ti(n,!1,e),Ti(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Qr]||(t[Qr]=!0,Ti("selectionchange",!1,t))}}function Sc(e,t,n,r){switch(sc(t)){case 1:var o=tf;break;case 4:o=nf;break;default:o=ca}n=o.bind(null,t,n,e),o=void 0,!pl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function _i(e,t,n,r,o){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;l=l.return}for(;a!==null;){if(l=$t(a),l===null)return;if(u=l.tag,u===5||u===6){r=i=l;continue e}a=a.parentNode}}r=r.return}Qu(function(){var c=i,g=la(n),y=[];e:{var m=Cc.get(e);if(m!==void 0){var S=pa,E=e;switch(e){case"keypress":if(so(n)===0)break e;case"keydown":case"keyup":S=vf;break;case"focusin":E="focus",S=Di;break;case"focusout":E="blur",S=Di;break;case"beforeblur":case"afterblur":S=Di;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=hs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=lf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=kf;break;case xc:case wc:case kc:S=uf;break;case Ec:S=Cf;break;case"scroll":S=rf;break;case"wheel":S=Sf;break;case"copy":case"cut":case"paste":S=df;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=gs}var C=(t&4)!==0,T=!C&&e==="scroll",f=C?m!==null?m+"Capture":null:m;C=[];for(var d=c,p;d!==null;){p=d;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,f!==null&&(v=dr(d,f),v!=null&&C.push(vr(d,v,p)))),T)break;d=d.return}0<C.length&&(m=new S(m,E,null,n,g),y.push({event:m,listeners:C}))}}if((t&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",m&&n!==cl&&(E=n.relatedTarget||n.fromElement)&&($t(E)||E[pt]))break e;if((S||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,S?(E=n.relatedTarget||n.toElement,S=c,E=E?$t(E):null,E!==null&&(T=qt(E),E!==T||E.tag!==5&&E.tag!==6)&&(E=null)):(S=null,E=c),S!==E)){if(C=hs,v="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(C=gs,v="onPointerLeave",f="onPointerEnter",d="pointer"),T=S==null?m:hn(S),p=E==null?m:hn(E),m=new C(v,d+"leave",S,n,g),m.target=T,m.relatedTarget=p,v=null,$t(g)===c&&(C=new C(f,d+"enter",E,n,g),C.target=p,C.relatedTarget=T,v=C),T=v,S&&E)t:{for(C=S,f=E,d=0,p=C;p;p=an(p))d++;for(p=0,v=f;v;v=an(v))p++;for(;0<d-p;)C=an(C),d--;for(;0<p-d;)f=an(f),p--;for(;d--;){if(C===f||f!==null&&C===f.alternate)break t;C=an(C),f=an(f)}C=null}else C=null;S!==null&&bs(y,m,S,C,!1),E!==null&&T!==null&&bs(y,T,E,C,!0)}}e:{if(m=c?hn(c):window,S=m.nodeName&&m.nodeName.toLowerCase(),S==="select"||S==="input"&&m.type==="file")var F=Bf;else if(xs(m))if(hc)F=_f;else{F=Lf;var A=jf}else(S=m.nodeName)&&S.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(F=Tf);if(F&&(F=F(e,c))){fc(y,F,n,g);break e}A&&A(e,m,c),e==="focusout"&&(A=m._wrapperState)&&A.controlled&&m.type==="number"&&il(m,"number",m.value)}switch(A=c?hn(c):window,e){case"focusin":(xs(A)||A.contentEditable==="true")&&(pn=A,yl=c,rr=null);break;case"focusout":rr=yl=pn=null;break;case"mousedown":vl=!0;break;case"contextmenu":case"mouseup":case"dragend":vl=!1,Fs(y,n,g);break;case"selectionchange":if(If)break;case"keydown":case"keyup":Fs(y,n,g)}var D;if(ha)e:{switch(e){case"compositionstart":var B="onCompositionStart";break e;case"compositionend":B="onCompositionEnd";break e;case"compositionupdate":B="onCompositionUpdate";break e}B=void 0}else dn?dc(e,n)&&(B="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(B="onCompositionStart");B&&(cc&&n.locale!=="ko"&&(dn||B!=="onCompositionStart"?B==="onCompositionEnd"&&dn&&(D=uc()):(Et=g,da="value"in Et?Et.value:Et.textContent,dn=!0)),A=So(c,B),0<A.length&&(B=new ms(B,e,null,n,g),y.push({event:B,listeners:A}),D?B.data=D:(D=pc(n),D!==null&&(B.data=D)))),(D=bf?Af(e,n):Df(e,n))&&(c=So(c,"onBeforeInput"),0<c.length&&(g=new ms("onBeforeInput","beforeinput",null,n,g),y.push({event:g,listeners:c}),g.data=D))}Fc(y,t)})}function vr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function So(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=dr(e,n),i!=null&&r.unshift(vr(e,i,o)),i=dr(e,t),i!=null&&r.push(vr(e,i,o))),e=e.return}return r}function an(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function bs(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,o?(u=dr(n,i),u!=null&&l.unshift(vr(n,u,a))):o||(u=dr(n,i),u!=null&&l.push(vr(n,u,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Vf=/\r\n?/g,Kf=/\u0000|\uFFFD/g;function As(e){return(typeof e=="string"?e:""+e).replace(Vf,`
`).replace(Kf,"")}function Yr(e,t,n){if(t=As(t),As(e)!==t&&n)throw Error(b(425))}function No(){}var xl=null,wl=null;function kl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var El=typeof setTimeout=="function"?setTimeout:void 0,Wf=typeof clearTimeout=="function"?clearTimeout:void 0,Ds=typeof Promise=="function"?Promise:void 0,Hf=typeof queueMicrotask=="function"?queueMicrotask:typeof Ds<"u"?function(e){return Ds.resolve(null).then(e).catch(Gf)}:El;function Gf(e){setTimeout(function(){throw e})}function Mi(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),hr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);hr(t)}function At(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ps(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var _n=Math.random().toString(36).slice(2),qe="__reactFiber$"+_n,xr="__reactProps$"+_n,pt="__reactContainer$"+_n,Cl="__reactEvents$"+_n,Qf="__reactListeners$"+_n,Yf="__reactHandles$"+_n;function $t(e){var t=e[qe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[pt]||n[qe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ps(e);e!==null;){if(n=e[qe])return n;e=Ps(e)}return t}e=n,n=e.parentNode}return null}function zr(e){return e=e[qe]||e[pt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function hn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(b(33))}function Xo(e){return e[xr]||null}var Fl=[],mn=-1;function Mt(e){return{current:e}}function Y(e){0>mn||(e.current=Fl[mn],Fl[mn]=null,mn--)}function G(e,t){mn++,Fl[mn]=e.current,e.current=t}var Tt={},ge=Mt(Tt),Fe=Mt(!1),Gt=Tt;function An(e,t){var n=e.type.contextTypes;if(!n)return Tt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Se(e){return e=e.childContextTypes,e!=null}function bo(){Y(Fe),Y(ge)}function zs(e,t,n){if(ge.current!==Tt)throw Error(b(168));G(ge,t),G(Fe,n)}function Nc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(b(108,Bp(e)||"Unknown",o));return q({},n,r)}function Ao(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Tt,Gt=ge.current,G(ge,e),G(Fe,Fe.current),!0}function Bs(e,t,n){var r=e.stateNode;if(!r)throw Error(b(169));n?(e=Nc(e,t,Gt),r.__reactInternalMemoizedMergedChildContext=e,Y(Fe),Y(ge),G(ge,e)):Y(Fe),G(Fe,n)}var lt=null,Zo=!1,Ri=!1;function bc(e){lt===null?lt=[e]:lt.push(e)}function Xf(e){Zo=!0,bc(e)}function Rt(){if(!Ri&&lt!==null){Ri=!0;var e=0,t=H;try{var n=lt;for(H=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}lt=null,Zo=!1}catch(o){throw lt!==null&&(lt=lt.slice(e+1)),Ju(aa,Rt),o}finally{H=t,Ri=!1}}return null}var gn=[],yn=0,Do=null,Po=0,je=[],Le=0,Qt=null,at=1,st="";function Ot(e,t){gn[yn++]=Po,gn[yn++]=Do,Do=e,Po=t}function Ac(e,t,n){je[Le++]=at,je[Le++]=st,je[Le++]=Qt,Qt=e;var r=at;e=st;var o=32-Ke(r)-1;r&=~(1<<o),n+=1;var i=32-Ke(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,at=1<<32-Ke(t)+o|n<<o|r,st=i+e}else at=1<<i|n<<o|r,st=e}function ga(e){e.return!==null&&(Ot(e,1),Ac(e,1,0))}function ya(e){for(;e===Do;)Do=gn[--yn],gn[yn]=null,Po=gn[--yn],gn[yn]=null;for(;e===Qt;)Qt=je[--Le],je[Le]=null,st=je[--Le],je[Le]=null,at=je[--Le],je[Le]=null}var De=null,Ae=null,X=!1,Ve=null;function Dc(e,t){var n=Te(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function js(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,De=e,Ae=At(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,De=e,Ae=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Qt!==null?{id:at,overflow:st}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Te(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,De=e,Ae=null,!0):!1;default:return!1}}function Sl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Nl(e){if(X){var t=Ae;if(t){var n=t;if(!js(e,t)){if(Sl(e))throw Error(b(418));t=At(n.nextSibling);var r=De;t&&js(e,t)?Dc(r,n):(e.flags=e.flags&-4097|2,X=!1,De=e)}}else{if(Sl(e))throw Error(b(418));e.flags=e.flags&-4097|2,X=!1,De=e}}}function Ls(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;De=e}function Xr(e){if(e!==De)return!1;if(!X)return Ls(e),X=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!kl(e.type,e.memoizedProps)),t&&(t=Ae)){if(Sl(e))throw Pc(),Error(b(418));for(;t;)Dc(e,t),t=At(t.nextSibling)}if(Ls(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(b(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ae=At(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ae=null}}else Ae=De?At(e.stateNode.nextSibling):null;return!0}function Pc(){for(var e=Ae;e;)e=At(e.nextSibling)}function Dn(){Ae=De=null,X=!1}function va(e){Ve===null?Ve=[e]:Ve.push(e)}var Zf=mt.ReactCurrentBatchConfig;function Wn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,e))}return e}function Zr(e,t){throw e=Object.prototype.toString.call(t),Error(b(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ts(e){var t=e._init;return t(e._payload)}function zc(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function o(f,d){return f=Bt(f,d),f.index=0,f.sibling=null,f}function i(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,d,p,v){return d===null||d.tag!==6?(d=Wi(p,f.mode,v),d.return=f,d):(d=o(d,p),d.return=f,d)}function u(f,d,p,v){var F=p.type;return F===cn?g(f,d,p.props.children,v,p.key):d!==null&&(d.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===vt&&Ts(F)===d.type)?(v=o(d,p.props),v.ref=Wn(f,d,p),v.return=f,v):(v=go(p.type,p.key,p.props,null,f.mode,v),v.ref=Wn(f,d,p),v.return=f,v)}function c(f,d,p,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=Hi(p,f.mode,v),d.return=f,d):(d=o(d,p.children||[]),d.return=f,d)}function g(f,d,p,v,F){return d===null||d.tag!==7?(d=Ht(p,f.mode,v,F),d.return=f,d):(d=o(d,p),d.return=f,d)}function y(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Wi(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Or:return p=go(d.type,d.key,d.props,null,f.mode,p),p.ref=Wn(f,null,d),p.return=f,p;case un:return d=Hi(d,f.mode,p),d.return=f,d;case vt:var v=d._init;return y(f,v(d._payload),p)}if(Xn(d)||On(d))return d=Ht(d,f.mode,p,null),d.return=f,d;Zr(f,d)}return null}function m(f,d,p,v){var F=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return F!==null?null:a(f,d,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Or:return p.key===F?u(f,d,p,v):null;case un:return p.key===F?c(f,d,p,v):null;case vt:return F=p._init,m(f,d,F(p._payload),v)}if(Xn(p)||On(p))return F!==null?null:g(f,d,p,v,null);Zr(f,p)}return null}function S(f,d,p,v,F){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(p)||null,a(d,f,""+v,F);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Or:return f=f.get(v.key===null?p:v.key)||null,u(d,f,v,F);case un:return f=f.get(v.key===null?p:v.key)||null,c(d,f,v,F);case vt:var A=v._init;return S(f,d,p,A(v._payload),F)}if(Xn(v)||On(v))return f=f.get(p)||null,g(d,f,v,F,null);Zr(d,v)}return null}function E(f,d,p,v){for(var F=null,A=null,D=d,B=d=0,$=null;D!==null&&B<p.length;B++){D.index>B?($=D,D=null):$=D.sibling;var M=m(f,D,p[B],v);if(M===null){D===null&&(D=$);break}e&&D&&M.alternate===null&&t(f,D),d=i(M,d,B),A===null?F=M:A.sibling=M,A=M,D=$}if(B===p.length)return n(f,D),X&&Ot(f,B),F;if(D===null){for(;B<p.length;B++)D=y(f,p[B],v),D!==null&&(d=i(D,d,B),A===null?F=D:A.sibling=D,A=D);return X&&Ot(f,B),F}for(D=r(f,D);B<p.length;B++)$=S(D,f,B,p[B],v),$!==null&&(e&&$.alternate!==null&&D.delete($.key===null?B:$.key),d=i($,d,B),A===null?F=$:A.sibling=$,A=$);return e&&D.forEach(function(I){return t(f,I)}),X&&Ot(f,B),F}function C(f,d,p,v){var F=On(p);if(typeof F!="function")throw Error(b(150));if(p=F.call(p),p==null)throw Error(b(151));for(var A=F=null,D=d,B=d=0,$=null,M=p.next();D!==null&&!M.done;B++,M=p.next()){D.index>B?($=D,D=null):$=D.sibling;var I=m(f,D,M.value,v);if(I===null){D===null&&(D=$);break}e&&D&&I.alternate===null&&t(f,D),d=i(I,d,B),A===null?F=I:A.sibling=I,A=I,D=$}if(M.done)return n(f,D),X&&Ot(f,B),F;if(D===null){for(;!M.done;B++,M=p.next())M=y(f,M.value,v),M!==null&&(d=i(M,d,B),A===null?F=M:A.sibling=M,A=M);return X&&Ot(f,B),F}for(D=r(f,D);!M.done;B++,M=p.next())M=S(D,f,B,M.value,v),M!==null&&(e&&M.alternate!==null&&D.delete(M.key===null?B:M.key),d=i(M,d,B),A===null?F=M:A.sibling=M,A=M);return e&&D.forEach(function(ae){return t(f,ae)}),X&&Ot(f,B),F}function T(f,d,p,v){if(typeof p=="object"&&p!==null&&p.type===cn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Or:e:{for(var F=p.key,A=d;A!==null;){if(A.key===F){if(F=p.type,F===cn){if(A.tag===7){n(f,A.sibling),d=o(A,p.props.children),d.return=f,f=d;break e}}else if(A.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===vt&&Ts(F)===A.type){n(f,A.sibling),d=o(A,p.props),d.ref=Wn(f,A,p),d.return=f,f=d;break e}n(f,A);break}else t(f,A);A=A.sibling}p.type===cn?(d=Ht(p.props.children,f.mode,v,p.key),d.return=f,f=d):(v=go(p.type,p.key,p.props,null,f.mode,v),v.ref=Wn(f,d,p),v.return=f,f=v)}return l(f);case un:e:{for(A=p.key;d!==null;){if(d.key===A)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(f,d.sibling),d=o(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=Hi(p,f.mode,v),d.return=f,f=d}return l(f);case vt:return A=p._init,T(f,d,A(p._payload),v)}if(Xn(p))return E(f,d,p,v);if(On(p))return C(f,d,p,v);Zr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(f,d.sibling),d=o(d,p),d.return=f,f=d):(n(f,d),d=Wi(p,f.mode,v),d.return=f,f=d),l(f)):n(f,d)}return T}var Pn=zc(!0),Bc=zc(!1),zo=Mt(null),Bo=null,vn=null,xa=null;function wa(){xa=vn=Bo=null}function ka(e){var t=zo.current;Y(zo),e._currentValue=t}function bl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Sn(e,t){Bo=e,xa=vn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ce=!0),e.firstContext=null)}function Me(e){var t=e._currentValue;if(xa!==e)if(e={context:e,memoizedValue:t,next:null},vn===null){if(Bo===null)throw Error(b(308));vn=e,Bo.dependencies={lanes:0,firstContext:e}}else vn=vn.next=e;return t}var Vt=null;function Ea(e){Vt===null?Vt=[e]:Vt.push(e)}function jc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ea(t)):(n.next=o.next,o.next=n),t.interleaved=n,ft(e,r)}function ft(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var xt=!1;function Ca(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Dt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(V&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,ft(e,n)}return o=r.interleaved,o===null?(t.next=t,Ea(r)):(t.next=o.next,o.next=t),r.interleaved=t,ft(e,n)}function uo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,sa(e,n)}}function _s(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function jo(e,t,n,r){var o=e.updateQueue;xt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var u=a,c=u.next;u.next=null,l===null?i=c:l.next=c,l=u;var g=e.alternate;g!==null&&(g=g.updateQueue,a=g.lastBaseUpdate,a!==l&&(a===null?g.firstBaseUpdate=c:a.next=c,g.lastBaseUpdate=u))}if(i!==null){var y=o.baseState;l=0,g=c=u=null,a=i;do{var m=a.lane,S=a.eventTime;if((r&m)===m){g!==null&&(g=g.next={eventTime:S,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var E=e,C=a;switch(m=t,S=n,C.tag){case 1:if(E=C.payload,typeof E=="function"){y=E.call(S,y,m);break e}y=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=C.payload,m=typeof E=="function"?E.call(S,y,m):E,m==null)break e;y=q({},y,m);break e;case 2:xt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[a]:m.push(a))}else S={eventTime:S,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},g===null?(c=g=S,u=y):g=g.next=S,l|=m;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;m=a,a=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(1);if(g===null&&(u=y),o.baseState=u,o.firstBaseUpdate=c,o.lastBaseUpdate=g,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Xt|=l,e.lanes=l,e.memoizedState=y}}function Ms(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(b(191,o));o.call(r)}}}var Br={},tt=Mt(Br),wr=Mt(Br),kr=Mt(Br);function Kt(e){if(e===Br)throw Error(b(174));return e}function Fa(e,t){switch(G(kr,t),G(wr,e),G(tt,Br),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:al(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=al(t,e)}Y(tt),G(tt,t)}function zn(){Y(tt),Y(wr),Y(kr)}function Tc(e){Kt(kr.current);var t=Kt(tt.current),n=al(t,e.type);t!==n&&(G(wr,e),G(tt,n))}function Sa(e){wr.current===e&&(Y(tt),Y(wr))}var Z=Mt(0);function Lo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ii=[];function Na(){for(var e=0;e<Ii.length;e++)Ii[e]._workInProgressVersionPrimary=null;Ii.length=0}var co=mt.ReactCurrentDispatcher,Oi=mt.ReactCurrentBatchConfig,Yt=0,J=null,oe=null,se=null,To=!1,or=!1,Er=0,Jf=0;function fe(){throw Error(b(321))}function ba(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!He(e[n],t[n]))return!1;return!0}function Aa(e,t,n,r,o,i){if(Yt=i,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,co.current=e===null||e.memoizedState===null?n0:r0,e=n(r,o),or){i=0;do{if(or=!1,Er=0,25<=i)throw Error(b(301));i+=1,se=oe=null,t.updateQueue=null,co.current=o0,e=n(r,o)}while(or)}if(co.current=_o,t=oe!==null&&oe.next!==null,Yt=0,se=oe=J=null,To=!1,t)throw Error(b(300));return e}function Da(){var e=Er!==0;return Er=0,e}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return se===null?J.memoizedState=se=e:se=se.next=e,se}function Re(){if(oe===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=se===null?J.memoizedState:se.next;if(t!==null)se=t,oe=e;else{if(e===null)throw Error(b(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},se===null?J.memoizedState=se=e:se=se.next=e}return se}function Cr(e,t){return typeof t=="function"?t(e):t}function Ui(e){var t=Re(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=oe,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,u=null,c=i;do{var g=c.lane;if((Yt&g)===g)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var y={lane:g,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=y,l=r):u=u.next=y,J.lanes|=g,Xt|=g}c=c.next}while(c!==null&&c!==i);u===null?l=r:u.next=a,He(r,t.memoizedState)||(Ce=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,J.lanes|=i,Xt|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function $i(e){var t=Re(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);He(i,t.memoizedState)||(Ce=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function _c(){}function Mc(e,t){var n=J,r=Re(),o=t(),i=!He(r.memoizedState,o);if(i&&(r.memoizedState=o,Ce=!0),r=r.queue,Pa(Oc.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||se!==null&&se.memoizedState.tag&1){if(n.flags|=2048,Fr(9,Ic.bind(null,n,r,o,t),void 0,null),ue===null)throw Error(b(349));(Yt&30)!==0||Rc(n,t,o)}return o}function Rc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ic(e,t,n,r){t.value=n,t.getSnapshot=r,Uc(t)&&$c(e)}function Oc(e,t,n){return n(function(){Uc(t)&&$c(e)})}function Uc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!He(e,n)}catch{return!0}}function $c(e){var t=ft(e,1);t!==null&&We(t,e,1,-1)}function Rs(e){var t=Je();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Cr,lastRenderedState:e},t.queue=e,e=e.dispatch=t0.bind(null,J,e),[t.memoizedState,e]}function Fr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Vc(){return Re().memoizedState}function po(e,t,n,r){var o=Je();J.flags|=e,o.memoizedState=Fr(1|t,n,void 0,r===void 0?null:r)}function Jo(e,t,n,r){var o=Re();r=r===void 0?null:r;var i=void 0;if(oe!==null){var l=oe.memoizedState;if(i=l.destroy,r!==null&&ba(r,l.deps)){o.memoizedState=Fr(t,n,i,r);return}}J.flags|=e,o.memoizedState=Fr(1|t,n,i,r)}function Is(e,t){return po(8390656,8,e,t)}function Pa(e,t){return Jo(2048,8,e,t)}function Kc(e,t){return Jo(4,2,e,t)}function Wc(e,t){return Jo(4,4,e,t)}function Hc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Gc(e,t,n){return n=n!=null?n.concat([e]):null,Jo(4,4,Hc.bind(null,t,e),n)}function za(){}function Qc(e,t){var n=Re();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ba(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Yc(e,t){var n=Re();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ba(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Xc(e,t,n){return(Yt&21)===0?(e.baseState&&(e.baseState=!1,Ce=!0),e.memoizedState=n):(He(n,t)||(n=tc(),J.lanes|=n,Xt|=n,e.baseState=!0),t)}function qf(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var r=Oi.transition;Oi.transition={};try{e(!1),t()}finally{H=n,Oi.transition=r}}function Zc(){return Re().memoizedState}function e0(e,t,n){var r=zt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Jc(e))qc(t,n);else if(n=jc(e,t,n,r),n!==null){var o=xe();We(n,e,r,o),ed(n,t,r)}}function t0(e,t,n){var r=zt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Jc(e))qc(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,He(a,l)){var u=t.interleaved;u===null?(o.next=o,Ea(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=jc(e,t,o,r),n!==null&&(o=xe(),We(n,e,r,o),ed(n,t,r))}}function Jc(e){var t=e.alternate;return e===J||t!==null&&t===J}function qc(e,t){or=To=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ed(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,sa(e,n)}}var _o={readContext:Me,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},n0={readContext:Me,useCallback:function(e,t){return Je().memoizedState=[e,t===void 0?null:t],e},useContext:Me,useEffect:Is,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,po(4194308,4,Hc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return po(4194308,4,e,t)},useInsertionEffect:function(e,t){return po(4,2,e,t)},useMemo:function(e,t){var n=Je();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Je();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=e0.bind(null,J,e),[r.memoizedState,e]},useRef:function(e){var t=Je();return e={current:e},t.memoizedState=e},useState:Rs,useDebugValue:za,useDeferredValue:function(e){return Je().memoizedState=e},useTransition:function(){var e=Rs(!1),t=e[0];return e=qf.bind(null,e[1]),Je().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=J,o=Je();if(X){if(n===void 0)throw Error(b(407));n=n()}else{if(n=t(),ue===null)throw Error(b(349));(Yt&30)!==0||Rc(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Is(Oc.bind(null,r,i,e),[e]),r.flags|=2048,Fr(9,Ic.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Je(),t=ue.identifierPrefix;if(X){var n=st,r=at;n=(r&~(1<<32-Ke(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Er++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Jf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},r0={readContext:Me,useCallback:Qc,useContext:Me,useEffect:Pa,useImperativeHandle:Gc,useInsertionEffect:Kc,useLayoutEffect:Wc,useMemo:Yc,useReducer:Ui,useRef:Vc,useState:function(){return Ui(Cr)},useDebugValue:za,useDeferredValue:function(e){var t=Re();return Xc(t,oe.memoizedState,e)},useTransition:function(){var e=Ui(Cr)[0],t=Re().memoizedState;return[e,t]},useMutableSource:_c,useSyncExternalStore:Mc,useId:Zc,unstable_isNewReconciler:!1},o0={readContext:Me,useCallback:Qc,useContext:Me,useEffect:Pa,useImperativeHandle:Gc,useInsertionEffect:Kc,useLayoutEffect:Wc,useMemo:Yc,useReducer:$i,useRef:Vc,useState:function(){return $i(Cr)},useDebugValue:za,useDeferredValue:function(e){var t=Re();return oe===null?t.memoizedState=e:Xc(t,oe.memoizedState,e)},useTransition:function(){var e=$i(Cr)[0],t=Re().memoizedState;return[e,t]},useMutableSource:_c,useSyncExternalStore:Mc,useId:Zc,unstable_isNewReconciler:!1};function Ue(e,t){if(e&&e.defaultProps){t=q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Al(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var qo={isMounted:function(e){return(e=e._reactInternals)?qt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=xe(),o=zt(e),i=ut(r,o);i.payload=t,n!=null&&(i.callback=n),t=Dt(e,i,o),t!==null&&(We(t,e,o,r),uo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=xe(),o=zt(e),i=ut(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Dt(e,i,o),t!==null&&(We(t,e,o,r),uo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=xe(),r=zt(e),o=ut(n,r);o.tag=2,t!=null&&(o.callback=t),t=Dt(e,o,r),t!==null&&(We(t,e,r,n),uo(t,e,r))}};function Os(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!gr(n,r)||!gr(o,i):!0}function td(e,t,n){var r=!1,o=Tt,i=t.contextType;return typeof i=="object"&&i!==null?i=Me(i):(o=Se(t)?Gt:ge.current,r=t.contextTypes,i=(r=r!=null)?An(e,o):Tt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=qo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Us(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&qo.enqueueReplaceState(t,t.state,null)}function Dl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Ca(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Me(i):(i=Se(t)?Gt:ge.current,o.context=An(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Al(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&qo.enqueueReplaceState(o,o.state,null),jo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Bn(e,t){try{var n="",r=t;do n+=zp(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Vi(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function Pl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var i0=typeof WeakMap=="function"?WeakMap:Map;function nd(e,t,n){n=ut(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ro||(Ro=!0,Ol=r),Pl(e,t)},n}function rd(e,t,n){n=ut(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Pl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Pl(e,t),typeof r!="function"&&(Pt===null?Pt=new Set([this]):Pt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function $s(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new i0;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=x0.bind(null,e,t,n),t.then(e,e))}function Vs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ks(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ut(-1,1),t.tag=2,Dt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var l0=mt.ReactCurrentOwner,Ce=!1;function ve(e,t,n,r){t.child=e===null?Bc(t,null,n,r):Pn(t,e.child,n,r)}function Ws(e,t,n,r,o){n=n.render;var i=t.ref;return Sn(t,o),r=Aa(e,t,n,r,i,o),n=Da(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ht(e,t,o)):(X&&n&&ga(t),t.flags|=1,ve(e,t,r,o),t.child)}function Hs(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Ia(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,od(e,t,i,r,o)):(e=go(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&o)===0){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:gr,n(l,r)&&e.ref===t.ref)return ht(e,t,o)}return t.flags|=1,e=Bt(i,r),e.ref=t.ref,e.return=t,t.child=e}function od(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(gr(i,r)&&e.ref===t.ref)if(Ce=!1,t.pendingProps=r=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Ce=!0);else return t.lanes=e.lanes,ht(e,t,o)}return zl(e,t,n,r,o)}function id(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(wn,be),be|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,G(wn,be),be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,G(wn,be),be|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,G(wn,be),be|=r;return ve(e,t,o,n),t.child}function ld(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function zl(e,t,n,r,o){var i=Se(n)?Gt:ge.current;return i=An(t,i),Sn(t,o),n=Aa(e,t,n,r,i,o),r=Da(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ht(e,t,o)):(X&&r&&ga(t),t.flags|=1,ve(e,t,n,o),t.child)}function Gs(e,t,n,r,o){if(Se(n)){var i=!0;Ao(t)}else i=!1;if(Sn(t,o),t.stateNode===null)fo(e,t),td(t,n,r),Dl(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=Me(c):(c=Se(n)?Gt:ge.current,c=An(t,c));var g=n.getDerivedStateFromProps,y=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function";y||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Us(t,l,r,c),xt=!1;var m=t.memoizedState;l.state=m,jo(t,r,l,o),u=t.memoizedState,a!==r||m!==u||Fe.current||xt?(typeof g=="function"&&(Al(t,n,g,r),u=t.memoizedState),(a=xt||Os(t,n,a,r,m,u,c))?(y||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Lc(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Ue(t.type,a),l.props=c,y=t.pendingProps,m=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=Me(u):(u=Se(n)?Gt:ge.current,u=An(t,u));var S=n.getDerivedStateFromProps;(g=typeof S=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==y||m!==u)&&Us(t,l,r,u),xt=!1,m=t.memoizedState,l.state=m,jo(t,r,l,o);var E=t.memoizedState;a!==y||m!==E||Fe.current||xt?(typeof S=="function"&&(Al(t,n,S,r),E=t.memoizedState),(c=xt||Os(t,n,c,r,m,E,u)||!1)?(g||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,E,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,E,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=E),l.props=r,l.state=E,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Bl(e,t,n,r,i,o)}function Bl(e,t,n,r,o,i){ld(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Bs(t,n,!1),ht(e,t,i);r=t.stateNode,l0.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Pn(t,e.child,null,i),t.child=Pn(t,null,a,i)):ve(e,t,a,i),t.memoizedState=r.state,o&&Bs(t,n,!0),t.child}function ad(e){var t=e.stateNode;t.pendingContext?zs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&zs(e,t.context,!1),Fa(e,t.containerInfo)}function Qs(e,t,n,r,o){return Dn(),va(o),t.flags|=256,ve(e,t,n,r),t.child}var jl={dehydrated:null,treeContext:null,retryLane:0};function Ll(e){return{baseLanes:e,cachePool:null,transitions:null}}function sd(e,t,n){var r=t.pendingProps,o=Z.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),G(Z,o&1),e===null)return Nl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=l):i=ni(l,r,0,null),e=Ht(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ll(n),t.memoizedState=jl,e):Ba(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return a0(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var u={mode:"hidden",children:r.children};return(l&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Bt(o,u),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Bt(a,i):(i=Ht(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Ll(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=jl,r}return i=e.child,e=i.sibling,r=Bt(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ba(e,t){return t=ni({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Jr(e,t,n,r){return r!==null&&va(r),Pn(t,e.child,null,n),e=Ba(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function a0(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Vi(Error(b(422))),Jr(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=ni({mode:"visible",children:r.children},o,0,null),i=Ht(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&Pn(t,e.child,null,l),t.child.memoizedState=Ll(l),t.memoizedState=jl,i);if((t.mode&1)===0)return Jr(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(b(419)),r=Vi(i,r,void 0),Jr(e,t,l,r)}if(a=(l&e.childLanes)!==0,Ce||a){if(r=ue,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|l))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,ft(e,o),We(r,e,o,-1))}return Ra(),r=Vi(Error(b(421))),Jr(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=w0.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ae=At(o.nextSibling),De=t,X=!0,Ve=null,e!==null&&(je[Le++]=at,je[Le++]=st,je[Le++]=Qt,at=e.id,st=e.overflow,Qt=t),t=Ba(t,r.children),t.flags|=4096,t)}function Ys(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),bl(e.return,t,n)}function Ki(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function ud(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(ve(e,t,r.children,n),r=Z.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ys(e,n,t);else if(e.tag===19)Ys(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(G(Z,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Lo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Ki(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Lo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Ki(t,!0,n,null,i);break;case"together":Ki(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function fo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ht(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Xt|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(b(153));if(t.child!==null){for(e=t.child,n=Bt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Bt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function s0(e,t,n){switch(t.tag){case 3:ad(t),Dn();break;case 5:Tc(t);break;case 1:Se(t.type)&&Ao(t);break;case 4:Fa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;G(zo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(G(Z,Z.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?sd(e,t,n):(G(Z,Z.current&1),e=ht(e,t,n),e!==null?e.sibling:null);G(Z,Z.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return ud(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),G(Z,Z.current),r)break;return null;case 22:case 23:return t.lanes=0,id(e,t,n)}return ht(e,t,n)}var cd,Tl,dd,pd;cd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Tl=function(){};dd=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Kt(tt.current);var i=null;switch(n){case"input":o=rl(e,o),r=rl(e,r),i=[];break;case"select":o=q({},o,{value:void 0}),r=q({},r,{value:void 0}),i=[];break;case"textarea":o=ll(e,o),r=ll(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=No)}sl(n,r);var l;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ur.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(a=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&a[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ur.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Q("scroll",e),i||a===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};pd=function(e,t,n,r){n!==r&&(t.flags|=4)};function Hn(e,t){if(!X)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function he(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function u0(e,t,n){var r=t.pendingProps;switch(ya(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(t),null;case 1:return Se(t.type)&&bo(),he(t),null;case 3:return r=t.stateNode,zn(),Y(Fe),Y(ge),Na(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Xr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ve!==null&&(Vl(Ve),Ve=null))),Tl(e,t),he(t),null;case 5:Sa(t);var o=Kt(kr.current);if(n=t.type,e!==null&&t.stateNode!=null)dd(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(b(166));return he(t),null}if(e=Kt(tt.current),Xr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[qe]=t,r[xr]=i,e=(t.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(o=0;o<Jn.length;o++)Q(Jn[o],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":os(r,i),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Q("invalid",r);break;case"textarea":ls(r,i),Q("invalid",r)}sl(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Yr(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Yr(r.textContent,a,e),o=["children",""+a]):ur.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&Q("scroll",r)}switch(n){case"input":Ur(r),is(r,i,!0);break;case"textarea":Ur(r),as(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=No)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ou(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[qe]=t,e[xr]=r,cd(e,t,!1,!1),t.stateNode=e;e:{switch(l=ul(n,r),n){case"dialog":Q("cancel",e),Q("close",e),o=r;break;case"iframe":case"object":case"embed":Q("load",e),o=r;break;case"video":case"audio":for(o=0;o<Jn.length;o++)Q(Jn[o],e);o=r;break;case"source":Q("error",e),o=r;break;case"img":case"image":case"link":Q("error",e),Q("load",e),o=r;break;case"details":Q("toggle",e),o=r;break;case"input":os(e,r),o=rl(e,r),Q("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=q({},r,{value:void 0}),Q("invalid",e);break;case"textarea":ls(e,r),o=ll(e,r),Q("invalid",e);break;default:o=r}sl(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?Vu(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Uu(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&cr(e,u):typeof u=="number"&&cr(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ur.hasOwnProperty(i)?u!=null&&i==="onScroll"&&Q("scroll",e):u!=null&&na(e,i,u,l))}switch(n){case"input":Ur(e),is(e,r,!1);break;case"textarea":Ur(e),as(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Lt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?kn(e,!!r.multiple,i,!1):r.defaultValue!=null&&kn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=No)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return he(t),null;case 6:if(e&&t.stateNode!=null)pd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(b(166));if(n=Kt(kr.current),Kt(tt.current),Xr(t)){if(r=t.stateNode,n=t.memoizedProps,r[qe]=t,(i=r.nodeValue!==n)&&(e=De,e!==null))switch(e.tag){case 3:Yr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Yr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qe]=t,t.stateNode=r}return he(t),null;case 13:if(Y(Z),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(X&&Ae!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Pc(),Dn(),t.flags|=98560,i=!1;else if(i=Xr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(b(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(b(317));i[qe]=t}else Dn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;he(t),i=!1}else Ve!==null&&(Vl(Ve),Ve=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Z.current&1)!==0?ie===0&&(ie=3):Ra())),t.updateQueue!==null&&(t.flags|=4),he(t),null);case 4:return zn(),Tl(e,t),e===null&&yr(t.stateNode.containerInfo),he(t),null;case 10:return ka(t.type._context),he(t),null;case 17:return Se(t.type)&&bo(),he(t),null;case 19:if(Y(Z),i=t.memoizedState,i===null)return he(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Hn(i,!1);else{if(ie!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=Lo(e),l!==null){for(t.flags|=128,Hn(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return G(Z,Z.current&1|2),t.child}e=e.sibling}i.tail!==null&&te()>jn&&(t.flags|=128,r=!0,Hn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Lo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Hn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!X)return he(t),null}else 2*te()-i.renderingStartTime>jn&&n!==1073741824&&(t.flags|=128,r=!0,Hn(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=te(),t.sibling=null,n=Z.current,G(Z,r?n&1|2:n&1),t):(he(t),null);case 22:case 23:return Ma(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(be&1073741824)!==0&&(he(t),t.subtreeFlags&6&&(t.flags|=8192)):he(t),null;case 24:return null;case 25:return null}throw Error(b(156,t.tag))}function c0(e,t){switch(ya(t),t.tag){case 1:return Se(t.type)&&bo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return zn(),Y(Fe),Y(ge),Na(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Sa(t),null;case 13:if(Y(Z),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(b(340));Dn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(Z),null;case 4:return zn(),null;case 10:return ka(t.type._context),null;case 22:case 23:return Ma(),null;case 24:return null;default:return null}}var qr=!1,me=!1,d0=typeof WeakSet=="function"?WeakSet:Set,L=null;function xn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(e,t,r)}else n.current=null}function _l(e,t,n){try{n()}catch(r){ee(e,t,r)}}var Xs=!1;function p0(e,t){if(xl=Co,e=yc(),ma(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,u=-1,c=0,g=0,y=e,m=null;t:for(;;){for(var S;y!==n||o!==0&&y.nodeType!==3||(a=l+o),y!==i||r!==0&&y.nodeType!==3||(u=l+r),y.nodeType===3&&(l+=y.nodeValue.length),(S=y.firstChild)!==null;)m=y,y=S;for(;;){if(y===e)break t;if(m===n&&++c===o&&(a=l),m===i&&++g===r&&(u=l),(S=y.nextSibling)!==null)break;y=m,m=y.parentNode}y=S}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(wl={focusedElem:e,selectionRange:n},Co=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var E=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var C=E.memoizedProps,T=E.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?C:Ue(t.type,C),T);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(v){ee(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return E=Xs,Xs=!1,E}function ir(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&_l(t,n,i)}o=o.next}while(o!==r)}}function ei(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ml(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function fd(e){var t=e.alternate;t!==null&&(e.alternate=null,fd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[qe],delete t[xr],delete t[Cl],delete t[Qf],delete t[Yf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function hd(e){return e.tag===5||e.tag===3||e.tag===4}function Zs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Rl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=No));else if(r!==4&&(e=e.child,e!==null))for(Rl(e,t,n),e=e.sibling;e!==null;)Rl(e,t,n),e=e.sibling}function Il(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Il(e,t,n),e=e.sibling;e!==null;)Il(e,t,n),e=e.sibling}var ce=null,$e=!1;function yt(e,t,n){for(n=n.child;n!==null;)md(e,t,n),n=n.sibling}function md(e,t,n){if(et&&typeof et.onCommitFiberUnmount=="function")try{et.onCommitFiberUnmount(Ho,n)}catch{}switch(n.tag){case 5:me||xn(n,t);case 6:var r=ce,o=$e;ce=null,yt(e,t,n),ce=r,$e=o,ce!==null&&($e?(e=ce,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ce.removeChild(n.stateNode));break;case 18:ce!==null&&($e?(e=ce,n=n.stateNode,e.nodeType===8?Mi(e.parentNode,n):e.nodeType===1&&Mi(e,n),hr(e)):Mi(ce,n.stateNode));break;case 4:r=ce,o=$e,ce=n.stateNode.containerInfo,$e=!0,yt(e,t,n),ce=r,$e=o;break;case 0:case 11:case 14:case 15:if(!me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&((i&2)!==0||(i&4)!==0)&&_l(n,t,l),o=o.next}while(o!==r)}yt(e,t,n);break;case 1:if(!me&&(xn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ee(n,t,a)}yt(e,t,n);break;case 21:yt(e,t,n);break;case 22:n.mode&1?(me=(r=me)||n.memoizedState!==null,yt(e,t,n),me=r):yt(e,t,n);break;default:yt(e,t,n)}}function Js(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new d0),t.forEach(function(r){var o=k0.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Oe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:ce=a.stateNode,$e=!1;break e;case 3:ce=a.stateNode.containerInfo,$e=!0;break e;case 4:ce=a.stateNode.containerInfo,$e=!0;break e}a=a.return}if(ce===null)throw Error(b(160));md(i,l,o),ce=null,$e=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(c){ee(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)gd(t,e),t=t.sibling}function gd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Oe(t,e),Ze(e),r&4){try{ir(3,e,e.return),ei(3,e)}catch(C){ee(e,e.return,C)}try{ir(5,e,e.return)}catch(C){ee(e,e.return,C)}}break;case 1:Oe(t,e),Ze(e),r&512&&n!==null&&xn(n,n.return);break;case 5:if(Oe(t,e),Ze(e),r&512&&n!==null&&xn(n,n.return),e.flags&32){var o=e.stateNode;try{cr(o,"")}catch(C){ee(e,e.return,C)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Ru(o,i),ul(a,l);var c=ul(a,i);for(l=0;l<u.length;l+=2){var g=u[l],y=u[l+1];g==="style"?Vu(o,y):g==="dangerouslySetInnerHTML"?Uu(o,y):g==="children"?cr(o,y):na(o,g,y,c)}switch(a){case"input":ol(o,i);break;case"textarea":Iu(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var S=i.value;S!=null?kn(o,!!i.multiple,S,!1):m!==!!i.multiple&&(i.defaultValue!=null?kn(o,!!i.multiple,i.defaultValue,!0):kn(o,!!i.multiple,i.multiple?[]:"",!1))}o[xr]=i}catch(C){ee(e,e.return,C)}}break;case 6:if(Oe(t,e),Ze(e),r&4){if(e.stateNode===null)throw Error(b(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(C){ee(e,e.return,C)}}break;case 3:if(Oe(t,e),Ze(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{hr(t.containerInfo)}catch(C){ee(e,e.return,C)}break;case 4:Oe(t,e),Ze(e);break;case 13:Oe(t,e),Ze(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ta=te())),r&4&&Js(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(me=(c=me)||g,Oe(t,e),me=c):Oe(t,e),Ze(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!g&&(e.mode&1)!==0)for(L=e,g=e.child;g!==null;){for(y=L=g;L!==null;){switch(m=L,S=m.child,m.tag){case 0:case 11:case 14:case 15:ir(4,m,m.return);break;case 1:xn(m,m.return);var E=m.stateNode;if(typeof E.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,E.props=t.memoizedProps,E.state=t.memoizedState,E.componentWillUnmount()}catch(C){ee(r,n,C)}}break;case 5:xn(m,m.return);break;case 22:if(m.memoizedState!==null){eu(y);continue}}S!==null?(S.return=m,L=S):eu(y)}g=g.sibling}e:for(g=null,y=e;;){if(y.tag===5){if(g===null){g=y;try{o=y.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=y.stateNode,u=y.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=$u("display",l))}catch(C){ee(e,e.return,C)}}}else if(y.tag===6){if(g===null)try{y.stateNode.nodeValue=c?"":y.memoizedProps}catch(C){ee(e,e.return,C)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===e)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break e;for(;y.sibling===null;){if(y.return===null||y.return===e)break e;g===y&&(g=null),y=y.return}g===y&&(g=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:Oe(t,e),Ze(e),r&4&&Js(e);break;case 21:break;default:Oe(t,e),Ze(e)}}function Ze(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(hd(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(cr(o,""),r.flags&=-33);var i=Zs(e);Il(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Zs(e);Rl(e,a,l);break;default:throw Error(b(161))}}catch(u){ee(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function f0(e,t,n){L=e,yd(e)}function yd(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var o=L,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||qr;if(!l){var a=o.alternate,u=a!==null&&a.memoizedState!==null||me;a=qr;var c=me;if(qr=l,(me=u)&&!c)for(L=o;L!==null;)l=L,u=l.child,l.tag===22&&l.memoizedState!==null?tu(o):u!==null?(u.return=l,L=u):tu(o);for(;i!==null;)L=i,yd(i),i=i.sibling;L=o,qr=a,me=c}qs(e)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,L=i):qs(e)}}function qs(e){for(;L!==null;){var t=L;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:me||ei(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!me)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ue(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ms(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ms(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var g=c.memoizedState;if(g!==null){var y=g.dehydrated;y!==null&&hr(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}me||t.flags&512&&Ml(t)}catch(m){ee(t,t.return,m)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function eu(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function tu(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ei(4,t)}catch(u){ee(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){ee(t,o,u)}}var i=t.return;try{Ml(t)}catch(u){ee(t,i,u)}break;case 5:var l=t.return;try{Ml(t)}catch(u){ee(t,l,u)}}}catch(u){ee(t,t.return,u)}if(t===e){L=null;break}var a=t.sibling;if(a!==null){a.return=t.return,L=a;break}L=t.return}}var h0=Math.ceil,Mo=mt.ReactCurrentDispatcher,ja=mt.ReactCurrentOwner,_e=mt.ReactCurrentBatchConfig,V=0,ue=null,ne=null,de=0,be=0,wn=Mt(0),ie=0,Sr=null,Xt=0,ti=0,La=0,lr=null,Ee=null,Ta=0,jn=1/0,it=null,Ro=!1,Ol=null,Pt=null,eo=!1,Ct=null,Io=0,ar=0,Ul=null,ho=-1,mo=0;function xe(){return(V&6)!==0?te():ho!==-1?ho:ho=te()}function zt(e){return(e.mode&1)===0?1:(V&2)!==0&&de!==0?de&-de:Zf.transition!==null?(mo===0&&(mo=tc()),mo):(e=H,e!==0||(e=window.event,e=e===void 0?16:sc(e.type)),e)}function We(e,t,n,r){if(50<ar)throw ar=0,Ul=null,Error(b(185));Dr(e,n,r),((V&2)===0||e!==ue)&&(e===ue&&((V&2)===0&&(ti|=n),ie===4&&kt(e,de)),Ne(e,r),n===1&&V===0&&(t.mode&1)===0&&(jn=te()+500,Zo&&Rt()))}function Ne(e,t){var n=e.callbackNode;Xp(e,t);var r=Eo(e,e===ue?de:0);if(r===0)n!==null&&cs(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&cs(n),t===1)e.tag===0?Xf(nu.bind(null,e)):bc(nu.bind(null,e)),Hf(function(){(V&6)===0&&Rt()}),n=null;else{switch(nc(r)){case 1:n=aa;break;case 4:n=qu;break;case 16:n=ko;break;case 536870912:n=ec;break;default:n=ko}n=Sd(n,vd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function vd(e,t){if(ho=-1,mo=0,(V&6)!==0)throw Error(b(327));var n=e.callbackNode;if(Nn()&&e.callbackNode!==n)return null;var r=Eo(e,e===ue?de:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Oo(e,r);else{t=r;var o=V;V|=2;var i=wd();(ue!==e||de!==t)&&(it=null,jn=te()+500,Wt(e,t));do try{y0();break}catch(a){xd(e,a)}while(1);wa(),Mo.current=i,V=o,ne!==null?t=0:(ue=null,de=0,t=ie)}if(t!==0){if(t===2&&(o=hl(e),o!==0&&(r=o,t=$l(e,o))),t===1)throw n=Sr,Wt(e,0),kt(e,r),Ne(e,te()),n;if(t===6)kt(e,r);else{if(o=e.current.alternate,(r&30)===0&&!m0(o)&&(t=Oo(e,r),t===2&&(i=hl(e),i!==0&&(r=i,t=$l(e,i))),t===1))throw n=Sr,Wt(e,0),kt(e,r),Ne(e,te()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(b(345));case 2:Ut(e,Ee,it);break;case 3:if(kt(e,r),(r&130023424)===r&&(t=Ta+500-te(),10<t)){if(Eo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){xe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=El(Ut.bind(null,e,Ee,it),t);break}Ut(e,Ee,it);break;case 4:if(kt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-Ke(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*h0(r/1960))-r,10<r){e.timeoutHandle=El(Ut.bind(null,e,Ee,it),r);break}Ut(e,Ee,it);break;case 5:Ut(e,Ee,it);break;default:throw Error(b(329))}}}return Ne(e,te()),e.callbackNode===n?vd.bind(null,e):null}function $l(e,t){var n=lr;return e.current.memoizedState.isDehydrated&&(Wt(e,t).flags|=256),e=Oo(e,t),e!==2&&(t=Ee,Ee=n,t!==null&&Vl(t)),e}function Vl(e){Ee===null?Ee=e:Ee.push.apply(Ee,e)}function m0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!He(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function kt(e,t){for(t&=~La,t&=~ti,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ke(t),r=1<<n;e[n]=-1,t&=~r}}function nu(e){if((V&6)!==0)throw Error(b(327));Nn();var t=Eo(e,0);if((t&1)===0)return Ne(e,te()),null;var n=Oo(e,t);if(e.tag!==0&&n===2){var r=hl(e);r!==0&&(t=r,n=$l(e,r))}if(n===1)throw n=Sr,Wt(e,0),kt(e,t),Ne(e,te()),n;if(n===6)throw Error(b(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ut(e,Ee,it),Ne(e,te()),null}function _a(e,t){var n=V;V|=1;try{return e(t)}finally{V=n,V===0&&(jn=te()+500,Zo&&Rt())}}function Zt(e){Ct!==null&&Ct.tag===0&&(V&6)===0&&Nn();var t=V;V|=1;var n=_e.transition,r=H;try{if(_e.transition=null,H=1,e)return e()}finally{H=r,_e.transition=n,V=t,(V&6)===0&&Rt()}}function Ma(){be=wn.current,Y(wn)}function Wt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Wf(n)),ne!==null)for(n=ne.return;n!==null;){var r=n;switch(ya(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&bo();break;case 3:zn(),Y(Fe),Y(ge),Na();break;case 5:Sa(r);break;case 4:zn();break;case 13:Y(Z);break;case 19:Y(Z);break;case 10:ka(r.type._context);break;case 22:case 23:Ma()}n=n.return}if(ue=e,ne=e=Bt(e.current,null),de=be=t,ie=0,Sr=null,La=ti=Xt=0,Ee=lr=null,Vt!==null){for(t=0;t<Vt.length;t++)if(n=Vt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}Vt=null}return e}function xd(e,t){do{var n=ne;try{if(wa(),co.current=_o,To){for(var r=J.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}To=!1}if(Yt=0,se=oe=J=null,or=!1,Er=0,ja.current=null,n===null||n.return===null){ie=1,Sr=t,ne=null;break}e:{var i=e,l=n.return,a=n,u=t;if(t=de,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,g=a,y=g.tag;if((g.mode&1)===0&&(y===0||y===11||y===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var S=Vs(l);if(S!==null){S.flags&=-257,Ks(S,l,a,i,t),S.mode&1&&$s(i,c,t),t=S,u=c;var E=t.updateQueue;if(E===null){var C=new Set;C.add(u),t.updateQueue=C}else E.add(u);break e}else{if((t&1)===0){$s(i,c,t),Ra();break e}u=Error(b(426))}}else if(X&&a.mode&1){var T=Vs(l);if(T!==null){(T.flags&65536)===0&&(T.flags|=256),Ks(T,l,a,i,t),va(Bn(u,a));break e}}i=u=Bn(u,a),ie!==4&&(ie=2),lr===null?lr=[i]:lr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=nd(i,u,t);_s(i,f);break e;case 1:a=u;var d=i.type,p=i.stateNode;if((i.flags&128)===0&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Pt===null||!Pt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=rd(i,a,t);_s(i,v);break e}}i=i.return}while(i!==null)}Ed(n)}catch(F){t=F,ne===n&&n!==null&&(ne=n=n.return);continue}break}while(1)}function wd(){var e=Mo.current;return Mo.current=_o,e===null?_o:e}function Ra(){(ie===0||ie===3||ie===2)&&(ie=4),ue===null||(Xt&268435455)===0&&(ti&268435455)===0||kt(ue,de)}function Oo(e,t){var n=V;V|=2;var r=wd();(ue!==e||de!==t)&&(it=null,Wt(e,t));do try{g0();break}catch(o){xd(e,o)}while(1);if(wa(),V=n,Mo.current=r,ne!==null)throw Error(b(261));return ue=null,de=0,ie}function g0(){for(;ne!==null;)kd(ne)}function y0(){for(;ne!==null&&!Up();)kd(ne)}function kd(e){var t=Fd(e.alternate,e,be);e.memoizedProps=e.pendingProps,t===null?Ed(e):ne=t,ja.current=null}function Ed(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=u0(n,t,be),n!==null){ne=n;return}}else{if(n=c0(n,t),n!==null){n.flags&=32767,ne=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ie=6,ne=null;return}}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);ie===0&&(ie=5)}function Ut(e,t,n){var r=H,o=_e.transition;try{_e.transition=null,H=1,v0(e,t,n,r)}finally{_e.transition=o,H=r}return null}function v0(e,t,n,r){do Nn();while(Ct!==null);if((V&6)!==0)throw Error(b(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(b(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Zp(e,i),e===ue&&(ne=ue=null,de=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||eo||(eo=!0,Sd(ko,function(){return Nn(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=_e.transition,_e.transition=null;var l=H;H=1;var a=V;V|=4,ja.current=null,p0(e,n),gd(n,e),Rf(wl),Co=!!xl,wl=xl=null,e.current=n,f0(n),$p(),V=a,H=l,_e.transition=i}else e.current=n;if(eo&&(eo=!1,Ct=e,Io=o),i=e.pendingLanes,i===0&&(Pt=null),Wp(n.stateNode),Ne(e,te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ro)throw Ro=!1,e=Ol,Ol=null,e;return(Io&1)!==0&&e.tag!==0&&Nn(),i=e.pendingLanes,(i&1)!==0?e===Ul?ar++:(ar=0,Ul=e):ar=0,Rt(),null}function Nn(){if(Ct!==null){var e=nc(Io),t=_e.transition,n=H;try{if(_e.transition=null,H=16>e?16:e,Ct===null)var r=!1;else{if(e=Ct,Ct=null,Io=0,(V&6)!==0)throw Error(b(331));var o=V;for(V|=4,L=e.current;L!==null;){var i=L,l=i.child;if((L.flags&16)!==0){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(L=c;L!==null;){var g=L;switch(g.tag){case 0:case 11:case 15:ir(8,g,i)}var y=g.child;if(y!==null)y.return=g,L=y;else for(;L!==null;){g=L;var m=g.sibling,S=g.return;if(fd(g),g===c){L=null;break}if(m!==null){m.return=S,L=m;break}L=S}}}var E=i.alternate;if(E!==null){var C=E.child;if(C!==null){E.child=null;do{var T=C.sibling;C.sibling=null,C=T}while(C!==null)}}L=i}}if((i.subtreeFlags&2064)!==0&&l!==null)l.return=i,L=l;else e:for(;L!==null;){if(i=L,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:ir(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,L=f;break e}L=i.return}}var d=e.current;for(L=d;L!==null;){l=L;var p=l.child;if((l.subtreeFlags&2064)!==0&&p!==null)p.return=l,L=p;else e:for(l=d;L!==null;){if(a=L,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:ei(9,a)}}catch(F){ee(a,a.return,F)}if(a===l){L=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,L=v;break e}L=a.return}}if(V=o,Rt(),et&&typeof et.onPostCommitFiberRoot=="function")try{et.onPostCommitFiberRoot(Ho,e)}catch{}r=!0}return r}finally{H=n,_e.transition=t}}return!1}function ru(e,t,n){t=Bn(n,t),t=nd(e,t,1),e=Dt(e,t,1),t=xe(),e!==null&&(Dr(e,1,t),Ne(e,t))}function ee(e,t,n){if(e.tag===3)ru(e,e,n);else for(;t!==null;){if(t.tag===3){ru(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pt===null||!Pt.has(r))){e=Bn(n,e),e=rd(t,e,1),t=Dt(t,e,1),e=xe(),t!==null&&(Dr(t,1,e),Ne(t,e));break}}t=t.return}}function x0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=xe(),e.pingedLanes|=e.suspendedLanes&n,ue===e&&(de&n)===n&&(ie===4||ie===3&&(de&130023424)===de&&500>te()-Ta?Wt(e,0):La|=n),Ne(e,t)}function Cd(e,t){t===0&&((e.mode&1)===0?t=1:(t=Kr,Kr<<=1,(Kr&130023424)===0&&(Kr=4194304)));var n=xe();e=ft(e,t),e!==null&&(Dr(e,t,n),Ne(e,n))}function w0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Cd(e,n)}function k0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(t),Cd(e,n)}var Fd;Fd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Fe.current)Ce=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Ce=!1,s0(e,t,n);Ce=(e.flags&131072)!==0}else Ce=!1,X&&(t.flags&1048576)!==0&&Ac(t,Po,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;fo(e,t),e=t.pendingProps;var o=An(t,ge.current);Sn(t,n),o=Aa(null,t,r,e,o,n);var i=Da();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Se(r)?(i=!0,Ao(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ca(t),o.updater=qo,t.stateNode=o,o._reactInternals=t,Dl(t,r,e,n),t=Bl(null,t,r,!0,i,n)):(t.tag=0,X&&i&&ga(t),ve(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(fo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=C0(r),e=Ue(r,e),o){case 0:t=zl(null,t,r,e,n);break e;case 1:t=Gs(null,t,r,e,n);break e;case 11:t=Ws(null,t,r,e,n);break e;case 14:t=Hs(null,t,r,Ue(r.type,e),n);break e}throw Error(b(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ue(r,o),zl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ue(r,o),Gs(e,t,r,o,n);case 3:e:{if(ad(t),e===null)throw Error(b(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Lc(e,t),jo(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Bn(Error(b(423)),t),t=Qs(e,t,r,n,o);break e}else if(r!==o){o=Bn(Error(b(424)),t),t=Qs(e,t,r,n,o);break e}else for(Ae=At(t.stateNode.containerInfo.firstChild),De=t,X=!0,Ve=null,n=Bc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Dn(),r===o){t=ht(e,t,n);break e}ve(e,t,r,n)}t=t.child}return t;case 5:return Tc(t),e===null&&Nl(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,kl(r,o)?l=null:i!==null&&kl(r,i)&&(t.flags|=32),ld(e,t),ve(e,t,l,n),t.child;case 6:return e===null&&Nl(t),null;case 13:return sd(e,t,n);case 4:return Fa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Pn(t,null,r,n):ve(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ue(r,o),Ws(e,t,r,o,n);case 7:return ve(e,t,t.pendingProps,n),t.child;case 8:return ve(e,t,t.pendingProps.children,n),t.child;case 12:return ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,G(zo,r._currentValue),r._currentValue=l,i!==null)if(He(i.value,l)){if(i.children===o.children&&!Fe.current){t=ht(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=ut(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var g=c.pending;g===null?u.next=u:(u.next=g.next,g.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),bl(i.return,n,t),a.lanes|=n;break}u=u.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(b(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),bl(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}ve(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Sn(t,n),o=Me(o),r=r(o),t.flags|=1,ve(e,t,r,n),t.child;case 14:return r=t.type,o=Ue(r,t.pendingProps),o=Ue(r.type,o),Hs(e,t,r,o,n);case 15:return od(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ue(r,o),fo(e,t),t.tag=1,Se(r)?(e=!0,Ao(t)):e=!1,Sn(t,n),td(t,r,o),Dl(t,r,o,n),Bl(null,t,r,!0,e,n);case 19:return ud(e,t,n);case 22:return id(e,t,n)}throw Error(b(156,t.tag))};function Sd(e,t){return Ju(e,t)}function E0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(e,t,n,r){return new E0(e,t,n,r)}function Ia(e){return e=e.prototype,!(!e||!e.isReactComponent)}function C0(e){if(typeof e=="function")return Ia(e)?1:0;if(e!=null){if(e=e.$$typeof,e===oa)return 11;if(e===ia)return 14}return 2}function Bt(e,t){var n=e.alternate;return n===null?(n=Te(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function go(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Ia(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case cn:return Ht(n.children,o,i,t);case ra:l=8,o|=8;break;case qi:return e=Te(12,n,t,o|2),e.elementType=qi,e.lanes=i,e;case el:return e=Te(13,n,t,o),e.elementType=el,e.lanes=i,e;case tl:return e=Te(19,n,t,o),e.elementType=tl,e.lanes=i,e;case Tu:return ni(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ju:l=10;break e;case Lu:l=9;break e;case oa:l=11;break e;case ia:l=14;break e;case vt:l=16,r=null;break e}throw Error(b(130,e==null?e:typeof e,""))}return t=Te(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Ht(e,t,n,r){return e=Te(7,e,r,t),e.lanes=n,e}function ni(e,t,n,r){return e=Te(22,e,r,t),e.elementType=Tu,e.lanes=n,e.stateNode={isHidden:!1},e}function Wi(e,t,n){return e=Te(6,e,null,t),e.lanes=n,e}function Hi(e,t,n){return t=Te(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function F0(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ni(0),this.expirationTimes=Ni(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ni(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Oa(e,t,n,r,o,i,l,a,u){return e=new F0(e,t,n,a,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Te(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ca(i),e}function S0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:un,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Nd(e){if(!e)return Tt;e=e._reactInternals;e:{if(qt(e)!==e||e.tag!==1)throw Error(b(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Se(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(b(171))}if(e.tag===1){var n=e.type;if(Se(n))return Nc(e,n,t)}return t}function bd(e,t,n,r,o,i,l,a,u){return e=Oa(n,r,!0,e,o,i,l,a,u),e.context=Nd(null),n=e.current,r=xe(),o=zt(n),i=ut(r,o),i.callback=t!=null?t:null,Dt(n,i,o),e.current.lanes=o,Dr(e,o,r),Ne(e,r),e}function ri(e,t,n,r){var o=t.current,i=xe(),l=zt(o);return n=Nd(n),t.context===null?t.context=n:t.pendingContext=n,t=ut(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Dt(o,t,l),e!==null&&(We(e,o,l,i),uo(e,o,l)),l}function Uo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ou(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ua(e,t){ou(e,t),(e=e.alternate)&&ou(e,t)}function N0(){return null}var Ad=typeof reportError=="function"?reportError:function(e){console.error(e)};function $a(e){this._internalRoot=e}oi.prototype.render=$a.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(b(409));ri(e,t,null,null)};oi.prototype.unmount=$a.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Zt(function(){ri(null,e,null,null)}),t[pt]=null}};function oi(e){this._internalRoot=e}oi.prototype.unstable_scheduleHydration=function(e){if(e){var t=ic();e={blockedOn:null,target:e,priority:t};for(var n=0;n<wt.length&&t!==0&&t<wt[n].priority;n++);wt.splice(n,0,e),n===0&&ac(e)}};function Va(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ii(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function iu(){}function b0(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=Uo(l);i.call(c)}}var l=bd(t,r,e,0,null,!1,!1,"",iu);return e._reactRootContainer=l,e[pt]=l.current,yr(e.nodeType===8?e.parentNode:e),Zt(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var c=Uo(u);a.call(c)}}var u=Oa(e,0,!1,null,null,!1,!1,"",iu);return e._reactRootContainer=u,e[pt]=u.current,yr(e.nodeType===8?e.parentNode:e),Zt(function(){ri(t,u,n,r)}),u}function li(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var u=Uo(l);a.call(u)}}ri(t,l,e,o)}else l=b0(n,t,e,o,r);return Uo(l)}rc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Zn(t.pendingLanes);n!==0&&(sa(t,n|1),Ne(t,te()),(V&6)===0&&(jn=te()+500,Rt()))}break;case 13:Zt(function(){var r=ft(e,1);if(r!==null){var o=xe();We(r,e,1,o)}}),Ua(e,1)}};ua=function(e){if(e.tag===13){var t=ft(e,134217728);if(t!==null){var n=xe();We(t,e,134217728,n)}Ua(e,134217728)}};oc=function(e){if(e.tag===13){var t=zt(e),n=ft(e,t);if(n!==null){var r=xe();We(n,e,t,r)}Ua(e,t)}};ic=function(){return H};lc=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};dl=function(e,t,n){switch(t){case"input":if(ol(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Xo(r);if(!o)throw Error(b(90));Mu(r),ol(r,o)}}}break;case"textarea":Iu(e,n);break;case"select":t=n.value,t!=null&&kn(e,!!n.multiple,t,!1)}};Hu=_a;Gu=Zt;var A0={usingClientEntryPoint:!1,Events:[zr,hn,Xo,Ku,Wu,_a]},Gn={findFiberByHostInstance:$t,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},D0={bundleType:Gn.bundleType,version:Gn.version,rendererPackageName:Gn.rendererPackageName,rendererConfig:Gn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Xu(e),e===null?null:e.stateNode},findFiberByHostInstance:Gn.findFiberByHostInstance||N0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var to=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!to.isDisabled&&to.supportsFiber)try{Ho=to.inject(D0),et=to}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A0;ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Va(t))throw Error(b(200));return S0(e,t,null,n)};ze.createRoot=function(e,t){if(!Va(e))throw Error(b(299));var n=!1,r="",o=Ad;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Oa(e,1,!1,null,null,n,!1,r,o),e[pt]=t.current,yr(e.nodeType===8?e.parentNode:e),new $a(t)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(b(188)):(e=Object.keys(e).join(","),Error(b(268,e)));return e=Xu(t),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return Zt(e)};ze.hydrate=function(e,t,n){if(!ii(t))throw Error(b(200));return li(null,e,t,!0,n)};ze.hydrateRoot=function(e,t,n){if(!Va(e))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Ad;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=bd(t,null,e,1,n!=null?n:null,o,!1,i,l),e[pt]=t.current,yr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new oi(t)};ze.render=function(e,t,n){if(!ii(t))throw Error(b(200));return li(null,e,t,!1,n)};ze.unmountComponentAtNode=function(e){if(!ii(e))throw Error(b(40));return e._reactRootContainer?(Zt(function(){li(null,null,e,!1,function(){e._reactRootContainer=null,e[pt]=null})}),!0):!1};ze.unstable_batchedUpdates=_a;ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ii(n))throw Error(b(200));if(e==null||e._reactInternals===void 0)throw Error(b(38));return li(e,t,n,!1,r)};ze.version="18.3.1-next-f1338f8080-20240426";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=ze})(Du);var Dd,lu=Du.exports;Dd=lu.createRoot,lu.hydrateRoot;/**
 * @remix-run/router v1.3.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Nr(){return Nr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Nr.apply(this,arguments)}var Ft;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ft||(Ft={}));const au="popstate";function P0(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:l,hash:a}=r.location;return Kl("",{pathname:i,search:l,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:br(o)}return B0(t,n,null,e)}function le(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function z0(){return Math.random().toString(36).substr(2,8)}function su(e,t){return{usr:e.state,key:e.key,idx:t}}function Kl(e,t,n,r){return n===void 0&&(n=null),Nr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Mn(t):t,{state:n,key:t&&t.key||r||z0()})}function br(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Mn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function B0(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,l=o.history,a=Ft.Pop,u=null,c=g();c==null&&(c=0,l.replaceState(Nr({},l.state,{idx:c}),""));function g(){return(l.state||{idx:null}).idx}function y(){a=Ft.Pop;let T=g(),f=T==null?null:T-c;c=T,u&&u({action:a,location:C.location,delta:f})}function m(T,f){a=Ft.Push;let d=Kl(C.location,T,f);n&&n(d,T),c=g()+1;let p=su(d,c),v=C.createHref(d);try{l.pushState(p,"",v)}catch{o.location.assign(v)}i&&u&&u({action:a,location:C.location,delta:1})}function S(T,f){a=Ft.Replace;let d=Kl(C.location,T,f);n&&n(d,T),c=g();let p=su(d,c),v=C.createHref(d);l.replaceState(p,"",v),i&&u&&u({action:a,location:C.location,delta:0})}function E(T){let f=o.location.origin!=="null"?o.location.origin:o.location.href,d=typeof T=="string"?T:br(T);return le(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let C={get action(){return a},get location(){return e(o,l)},listen(T){if(u)throw new Error("A history only accepts one active listener");return o.addEventListener(au,y),u=T,()=>{o.removeEventListener(au,y),u=null}},createHref(T){return t(o,T)},createURL:E,encodeLocation(T){let f=E(T);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:m,replace:S,go(T){return l.go(T)}};return C}var uu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(uu||(uu={}));function j0(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Mn(t):t,o=Bd(r.pathname||"/",n);if(o==null)return null;let i=Pd(e);L0(i);let l=null;for(let a=0;l==null&&a<i.length;++a)l=V0(i[a],H0(o));return l}function Pd(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,l,a)=>{let u={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};u.relativePath.startsWith("/")&&(le(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=jt([r,u.relativePath]),g=n.concat(u);i.children&&i.children.length>0&&(le(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Pd(i.children,t,g,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:U0(c,i.index),routesMeta:g})};return e.forEach((i,l)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,l);else for(let u of zd(i.path))o(i,l,u)}),t}function zd(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let l=zd(r.join("/")),a=[];return a.push(...l.map(u=>u===""?i:[i,u].join("/"))),o&&a.push(...l),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function L0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:$0(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const T0=/^:\w+$/,_0=3,M0=2,R0=1,I0=10,O0=-2,cu=e=>e==="*";function U0(e,t){let n=e.split("/"),r=n.length;return n.some(cu)&&(r+=O0),t&&(r+=M0),n.filter(o=>!cu(o)).reduce((o,i)=>o+(T0.test(i)?_0:i===""?R0:I0),r)}function $0(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function V0(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let l=0;l<n.length;++l){let a=n[l],u=l===n.length-1,c=o==="/"?t:t.slice(o.length)||"/",g=K0({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},c);if(!g)return null;Object.assign(r,g.params);let y=a.route;i.push({params:r,pathname:jt([o,g.pathname]),pathnameBase:X0(jt([o,g.pathnameBase])),route:y}),g.pathnameBase!=="/"&&(o=jt([o,g.pathnameBase]))}return i}function K0(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=W0(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],l=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((c,g,y)=>{if(g==="*"){let m=a[y]||"";l=i.slice(0,i.length-m.length).replace(/(.)\/+$/,"$1")}return c[g]=G0(a[y]||"",g),c},{}),pathname:i,pathnameBase:l,pattern:e}}function W0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ka(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(l,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function H0(e){try{return decodeURI(e)}catch(t){return Ka(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function G0(e,t){try{return decodeURIComponent(e)}catch(n){return Ka(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Bd(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Ka(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Q0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Mn(e):e;return{pathname:n?n.startsWith("/")?n:Y0(n,t):t,search:Z0(r),hash:J0(o)}}function Y0(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Gi(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function jd(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ld(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Mn(e):(o=Nr({},e),le(!o.pathname||!o.pathname.includes("?"),Gi("?","pathname","search",o)),le(!o.pathname||!o.pathname.includes("#"),Gi("#","pathname","hash",o)),le(!o.search||!o.search.includes("#"),Gi("#","search","hash",o)));let i=e===""||o.pathname==="",l=i?"/":o.pathname,a;if(r||l==null)a=n;else{let y=t.length-1;if(l.startsWith("..")){let m=l.split("/");for(;m[0]==="..";)m.shift(),y-=1;o.pathname=m.join("/")}a=y>=0?t[y]:"/"}let u=Q0(o,a),c=l&&l!=="/"&&l.endsWith("/"),g=(i||l===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||g)&&(u.pathname+="/"),u}const jt=e=>e.join("/").replace(/\/\/+/g,"/"),X0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Z0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,J0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function q0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const eh=["post","put","patch","delete"];[...eh];var ai={exports:{}},si={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var th=k.exports,nh=Symbol.for("react.element"),rh=Symbol.for("react.fragment"),oh=Object.prototype.hasOwnProperty,ih=th.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,lh={key:!0,ref:!0,__self:!0,__source:!0};function Td(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)oh.call(t,r)&&!lh.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:nh,type:e,key:i,ref:l,props:o,_owner:ih.current}}si.Fragment=rh;si.jsx=Td;si.jsxs=Td;(function(e){e.exports=si})(ai);const Wl=ai.exports.Fragment,s=ai.exports.jsx,h=ai.exports.jsxs;/**
 * React Router v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hl(){return Hl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Hl.apply(this,arguments)}function ah(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const sh=typeof Object.is=="function"?Object.is:ah,{useState:uh,useEffect:ch,useLayoutEffect:dh,useDebugValue:ph}=Zi;function fh(e,t,n){const r=t(),[{inst:o},i]=uh({inst:{value:r,getSnapshot:t}});return dh(()=>{o.value=r,o.getSnapshot=t,Qi(o)&&i({inst:o})},[e,r,t]),ch(()=>(Qi(o)&&i({inst:o}),e(()=>{Qi(o)&&i({inst:o})})),[e]),ph(r),r}function Qi(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!sh(n,r)}catch{return!0}}function hh(e,t,n){return t()}const mh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",gh=!mh,yh=gh?hh:fh;"useSyncExternalStore"in Zi&&(e=>e.useSyncExternalStore)(Zi);const _d=k.exports.createContext(null),Md=k.exports.createContext(null),ui=k.exports.createContext(null),ci=k.exports.createContext(null),en=k.exports.createContext({outlet:null,matches:[]}),Rd=k.exports.createContext(null);function vh(e,t){let{relative:n}=t===void 0?{}:t;jr()||le(!1);let{basename:r,navigator:o}=k.exports.useContext(ui),{hash:i,pathname:l,search:a}=Od(e,{relative:n}),u=l;return r!=="/"&&(u=l==="/"?r:jt([r,l])),o.createHref({pathname:u,search:a,hash:i})}function jr(){return k.exports.useContext(ci)!=null}function di(){return jr()||le(!1),k.exports.useContext(ci).location}function Lr(){jr()||le(!1);let{basename:e,navigator:t}=k.exports.useContext(ui),{matches:n}=k.exports.useContext(en),{pathname:r}=di(),o=JSON.stringify(jd(n).map(a=>a.pathnameBase)),i=k.exports.useRef(!1);return k.exports.useEffect(()=>{i.current=!0}),k.exports.useCallback(function(a,u){if(u===void 0&&(u={}),!i.current)return;if(typeof a=="number"){t.go(a);return}let c=Ld(a,JSON.parse(o),r,u.relative==="path");e!=="/"&&(c.pathname=c.pathname==="/"?e:jt([e,c.pathname])),(u.replace?t.replace:t.push)(c,u.state,u)},[e,t,o,r])}function Id(){let{matches:e}=k.exports.useContext(en),t=e[e.length-1];return t?t.params:{}}function Od(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=k.exports.useContext(en),{pathname:o}=di(),i=JSON.stringify(jd(r).map(l=>l.pathnameBase));return k.exports.useMemo(()=>Ld(e,JSON.parse(i),o,n==="path"),[e,i,o,n])}function xh(e,t){jr()||le(!1);let{navigator:n}=k.exports.useContext(ui),r=k.exports.useContext(Md),{matches:o}=k.exports.useContext(en),i=o[o.length-1],l=i?i.params:{};i&&i.pathname;let a=i?i.pathnameBase:"/";i&&i.route;let u=di(),c;if(t){var g;let C=typeof t=="string"?Mn(t):t;a==="/"||((g=C.pathname)==null?void 0:g.startsWith(a))||le(!1),c=C}else c=u;let y=c.pathname||"/",m=a==="/"?y:y.slice(a.length)||"/",S=j0(e,{pathname:m}),E=Ch(S&&S.map(C=>Object.assign({},C,{params:Object.assign({},l,C.params),pathname:jt([a,n.encodeLocation?n.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?a:jt([a,n.encodeLocation?n.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),o,r||void 0);return t&&E?s(ci.Provider,{value:{location:Hl({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Ft.Pop},children:E}):E}function wh(){let e=bh(),t=q0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null;return h(Wl,{children:[s("h2",{children:"Unexpected Application Error!"}),s("h3",{style:{fontStyle:"italic"},children:t}),n?s("pre",{style:{padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},children:n}):null,null]})}class kh extends k.exports.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?s(en.Provider,{value:this.props.routeContext,children:s(Rd.Provider,{value:this.state.error,children:this.props.component})}):this.props.children}}function Eh(e){let{routeContext:t,match:n,children:r}=e,o=k.exports.useContext(_d);return o&&o.static&&o.staticContext&&n.route.errorElement&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),s(en.Provider,{value:t,children:r})}function Ch(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,o=n==null?void 0:n.errors;if(o!=null){let i=r.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));i>=0||le(!1),r=r.slice(0,Math.min(r.length,i+1))}return r.reduceRight((i,l,a)=>{let u=l.route.id?o==null?void 0:o[l.route.id]:null,c=n?l.route.errorElement||s(wh,{}):null,g=t.concat(r.slice(0,a+1)),y=()=>s(Eh,{match:l,routeContext:{outlet:i,matches:g},children:u?c:l.route.element!==void 0?l.route.element:i});return n&&(l.route.errorElement||a===0)?s(kh,{location:n.location,component:c,error:u,children:y(),routeContext:{outlet:null,matches:g}}):y()},null)}var du;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(du||(du={}));var $o;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})($o||($o={}));function Fh(e){let t=k.exports.useContext(Md);return t||le(!1),t}function Sh(e){let t=k.exports.useContext(en);return t||le(!1),t}function Nh(e){let t=Sh(),n=t.matches[t.matches.length-1];return n.route.id||le(!1),n.route.id}function bh(){var e;let t=k.exports.useContext(Rd),n=Fh($o.UseRouteError),r=Nh($o.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function yo(e){le(!1)}function Ah(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Ft.Pop,navigator:i,static:l=!1}=e;jr()&&le(!1);let a=t.replace(/^\/*/,"/"),u=k.exports.useMemo(()=>({basename:a,navigator:i,static:l}),[a,i,l]);typeof r=="string"&&(r=Mn(r));let{pathname:c="/",search:g="",hash:y="",state:m=null,key:S="default"}=r,E=k.exports.useMemo(()=>{let C=Bd(c,a);return C==null?null:{pathname:C,search:g,hash:y,state:m,key:S}},[a,c,g,y,m,S]);return E==null?null:s(ui.Provider,{value:u,children:s(ci.Provider,{children:n,value:{location:E,navigationType:o}})})}function Dh(e){let{children:t,location:n}=e,r=k.exports.useContext(_d),o=r&&!t?r.router.routes:Gl(t);return xh(o,n)}var pu;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(pu||(pu={}));new Promise(()=>{});function Gl(e,t){t===void 0&&(t=[]);let n=[];return k.exports.Children.forEach(e,(r,o)=>{if(!k.exports.isValidElement(r))return;if(r.type===k.exports.Fragment){n.push.apply(n,Gl(r.props.children,t));return}r.type!==yo&&le(!1),!r.props.index||!r.props.children||le(!1);let i=[...t,o],l={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(l.children=Gl(r.props.children,i)),n.push(l)}),n}/**
 * React Router DOM v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ph(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function zh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Bh(e,t){return e.button===0&&(!t||t==="_self")&&!zh(e)}const jh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function Lh(e){let{basename:t,children:n,window:r}=e,o=k.exports.useRef();o.current==null&&(o.current=P0({window:r,v5Compat:!0}));let i=o.current,[l,a]=k.exports.useState({action:i.action,location:i.location});return k.exports.useLayoutEffect(()=>i.listen(a),[i]),s(Ah,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:i})}const Th=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",sr=k.exports.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:l,state:a,target:u,to:c,preventScrollReset:g}=t,y=Ph(t,jh),m=typeof c=="string"?c:br(c),S=/^[a-z+]+:\/\//i.test(m)||m.startsWith("//"),E=m,C=!1;if(Th&&S){let p=new URL(window.location.href),v=m.startsWith("//")?new URL(p.protocol+m):new URL(m);v.origin===p.origin?E=v.pathname+v.search+v.hash:C=!0}let T=vh(E,{relative:o}),f=_h(E,{replace:l,state:a,target:u,preventScrollReset:g,relative:o});function d(p){r&&r(p),p.defaultPrevented||f(p)}return s("a",{...y,href:S?m:T,onClick:C||i?r:d,ref:n,target:u})});var fu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(fu||(fu={}));var hu;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(hu||(hu={}));function _h(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:l}=t===void 0?{}:t,a=Lr(),u=di(),c=Od(e,{relative:l});return k.exports.useCallback(g=>{if(Bh(g,n)){g.preventDefault();let y=r!==void 0?r:br(u)===br(c);a(e,{replace:y,state:o,preventScrollReset:i,relative:l})}},[u,a,c,r,o,n,e,i,l])}/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Mh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),K=(e,t)=>{const n=k.exports.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:i=2,absoluteStrokeWidth:l,className:a="",children:u,...c},g)=>k.exports.createElement("svg",{ref:g,...Mh,width:o,height:o,stroke:r,strokeWidth:l?Number(i)*24/Number(o):i,className:["lucide",`lucide-${Rh(e)}`,a].join(" "),...c},[...t.map(([y,m])=>k.exports.createElement(y,m)),...Array.isArray(u)?u:[u]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const no=K("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yi=K("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vo=K("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ko=K("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mu=K("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=K("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=K("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=K("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=K("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=K("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wa=K("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=K("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ql=K("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=K("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=K("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=K("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=K("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=K("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=K("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=K("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gu=K("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=K("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=K("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wo=K("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=K("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yu=K("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=K("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pi=K("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=K("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=K("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=K("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=K("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu=K("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function qh(e,t,n){return window.go.main.App.CreateChapter(e,t,n)}function em(e,t,n,r){return window.go.main.App.CreateCharacter(e,t,n,r)}function tm(e,t,n,r,o,i){return window.go.main.App.CreateParagraph(e,t,n,r,o,i)}function nm(e,t){return window.go.main.App.CreateProject(e,t)}function rm(e){return window.go.main.App.DeleteChapter(e)}function om(e){return window.go.main.App.DeleteCharacter(e)}function im(e){return window.go.main.App.DeleteParagraph(e)}function lm(e){return window.go.main.App.DeleteProject(e)}function am(e,t){return window.go.main.App.DeleteProjectKnownCharacter(e,t)}function sm(e){return window.go.main.App.GenerateBatchAudio(e)}function um(e){return window.go.main.App.GenerateChapterAudio(e)}function cm(e){return window.go.main.App.GenerateParagraphAudio(e)}function dm(e){return window.go.main.App.GetChapter(e)}function pm(e){return window.go.main.App.GetChapters(e)}function fm(e){return window.go.main.App.GetCharacter(e)}function hm(e){return window.go.main.App.GetCharacters(e)}function mm(e){return window.go.main.App.GetParagraph(e)}function gm(e){return window.go.main.App.GetParagraphs(e)}function ym(e){return window.go.main.App.GetProject(e)}function vm(e){return window.go.main.App.GetProjectKnownCharacters(e)}function xm(e){return window.go.main.App.GetProjectLLMApiKey(e)}function wm(e){return window.go.main.App.GetProjectTTSApiKey(e)}function km(){return window.go.main.App.GetProjects()}function Em(e){return window.go.main.App.GetVoice(e)}function Cm(){return window.go.main.App.GetVoices()}function Fm(e,t,n){return window.go.main.App.Log(e,t,n)}function Sm(e,t){return window.go.main.App.ReorderChapters(e,t)}function Nm(e,t,n){return window.go.main.App.SetKnownCharacterVoice(e,t,n)}function bm(e,t){return window.go.main.App.SetProjectLLMApiKey(e,t)}function Am(e,t){return window.go.main.App.SetProjectTTSApiKey(e,t)}function Dm(e){return window.go.main.App.SplitParagraph(e)}function Pm(e){return window.go.main.App.SplitParagraphPreview(e)}function zm(e,t,n){return window.go.main.App.UpdateChapter(e,t,n)}function Bm(e,t,n,r){return window.go.main.App.UpdateCharacter(e,t,n,r)}function jm(e,t,n,r,o,i){return window.go.main.App.UpdateKnownCharacter(e,t,n,r,o,i)}function Lm(e,t){return window.go.main.App.UpdateNarratorVoice(e,t)}function Tm(e,t,n,r,o,i,l,a,u){return window.go.main.App.UpdateParagraph(e,t,n,r,o,i,l,a,u)}function _m(e,t,n){return window.go.main.App.UpdateProject(e,t,n)}function Mm(e,t){return window.go.main.App.UpdateProjectKnownCharacters(e,t)}const W={createProject:async(e,t)=>{try{return await nm(e,t)}catch(n){throw console.error("Failed to create project:",n),n}},getProjects:async()=>{try{return await km()||[]}catch(e){throw console.error("Failed to get projects:",e),e}},getProject:async e=>{try{return await ym(e)}catch(t){throw console.error("Failed to get project:",t),t}},updateProject:async(e,t,n)=>{try{await _m(e,t,n)}catch(r){throw console.error("Failed to update project:",r),r}},deleteProject:async e=>{try{await lm(e)}catch(t){throw console.error("Failed to delete project:",t),t}},setProjectLLMApiKey:async(e,t)=>{try{await bm(e,t)}catch(n){throw console.error("Failed to set project LLM API key:",n),n}},getProjectLLMApiKey:async e=>{try{return await xm(e)||""}catch(t){throw console.error("Failed to get project LLM API key:",t),t}},setProjectTTSApiKey:async(e,t)=>{try{await Am(e,t)}catch(n){throw console.error("Failed to set project TTS API key:",n),n}},getProjectTTSApiKey:async e=>{try{return await wm(e)||""}catch(t){throw console.error("Failed to get project TTS API key:",t),t}},getProjectKnownCharacters:async e=>{try{return await vm(e)||[]}catch(t){throw console.error("Failed to get project known characters:",t),t}},updateProjectKnownCharacters:async(e,t)=>{try{await Mm(e,t)}catch(n){throw console.error("Failed to update project known characters:",n),n}},deleteProjectKnownCharacter:async(e,t)=>{try{await am(e,t)}catch(n){throw console.error("Failed to delete project known character:",n),n}},setKnownCharacterVoice:async(e,t,n)=>{try{await Nm(e,t,n)}catch(r){throw console.error("Failed to set known character voice:",r),r}},updateKnownCharacter:async(e,t,n,r,o,i)=>{try{await jm(e,t,n,r,o,i)}catch(l){throw console.error("Failed to update known character:",l),l}},createChapter:async(e,t,n)=>{try{return await qh(e,t,n)}catch(r){throw console.error("Failed to create chapter:",r),r}},getChapters:async e=>{try{return await pm(e)||[]}catch(t){throw console.error("Failed to get chapters:",t),t}},getChapter:async e=>{try{return await dm(e)}catch(t){throw console.error("Failed to get chapter:",t),t}},updateChapter:async(e,t,n)=>{try{await zm(e,t,n)}catch(r){throw console.error("Failed to update chapter:",r),r}},deleteChapter:async e=>{try{await rm(e)}catch(t){throw console.error("Failed to delete chapter:",t),t}},reorderChapters:async(e,t)=>{try{await Sm(e,t)}catch(n){throw console.error("Failed to reorder chapters:",n),n}},createParagraph:async(e,t,n,r,o,i)=>{try{return await tm(e,t,n,r,o,i)}catch(l){throw console.error("Failed to create paragraph:",l),l}},getParagraphs:async e=>{try{return await gm(e)||[]}catch(t){throw console.error("Failed to get paragraphs:",t),t}},getParagraph:async e=>{try{return await mm(e)}catch(t){throw console.error("Failed to get paragraph:",t),t}},updateParagraph:async(e,t,n,r,o,i,l="",a=0,u=0)=>{try{await Tm(e,t,n,r,o,i,l,a,u)}catch(c){throw console.error("Failed to update paragraph:",c),c}},deleteParagraph:async e=>{try{await im(e)}catch(t){throw console.error("Failed to delete paragraph:",t),t}},splitParagraph:async e=>{try{return await Dm(e)||[]}catch(t){throw console.error("Failed to split paragraph:",t),t}},splitParagraphPreview:async e=>{try{return await Pm(e)||[]}catch(t){throw console.error("Failed to split paragraph preview:",t),t}},generateParagraphAudio:async e=>{try{return await cm(e)}catch(t){throw console.error("Failed to generate paragraph audio:",t),t}},generateBatchAudio:async e=>{try{return await sm(e)||[]}catch(t){throw console.error("Failed to generate batch audio:",t),t}},generateChapterAudio:async e=>{try{return await um(e)||[]}catch(t){throw console.error("Failed to generate chapter audio:",t),t}},createCharacter:async(e,t,n,r)=>{try{return await em(e,t,n,r)}catch(o){throw console.error("Failed to create character:",o),o}},getCharacters:async e=>{try{return await hm(e)||[]}catch(t){throw console.error("Failed to get characters:",t),t}},getCharacter:async e=>{try{return await fm(e)}catch(t){throw console.error("Failed to get character:",t),t}},updateCharacter:async(e,t,n,r)=>{try{await Bm(e,t,n,r)}catch(o){throw console.error("Failed to update character:",o),o}},deleteCharacter:async e=>{try{await om(e)}catch(t){throw console.error("Failed to delete character:",t),t}},updateNarratorVoice:async(e,t)=>{try{await Lm(e,t)}catch(n){throw console.error("Failed to update narrator voice:",n),n}},getVoices:async()=>{try{return await Cm()||[]}catch(e){throw console.error("Failed to get voices:",e),e}},getVoice:async e=>{try{return await Em(e)}catch(t){throw console.error("Failed to get voice:",t),t}},analyzeText:async e=>{throw new Error("Not implemented")},generateAudio:async(e,t,n,r)=>{throw new Error("Not implemented")},log:async(e,t,n)=>{try{await Fm(e,t,n)}catch(r){console.error("Failed to send log to backend:",r)}}},Rm=()=>{const e=Lr(),[t,n]=k.exports.useState([]),[r,o]=k.exports.useState(!1),[i,l]=k.exports.useState(!1),[a,u]=k.exports.useState(!1),[c,g]=k.exports.useState(null),[y,m]=k.exports.useState(null),[S,E]=k.exports.useState({name:"",description:""}),C=async()=>{o(!0);try{const F=await W.getProjects();n(F)}catch(F){console.error("Failed to load projects:",F)}o(!1)};k.exports.useEffect(()=>{C()},[]);const T=async F=>{if(F.preventDefault(),!!S.name.trim()){o(!0);try{await W.createProject(S.name,S.description),E({name:"",description:""}),l(!1),C()}catch(A){console.error("Failed to create project:",A)}o(!1)}},f=F=>{g(F),u(!0)},d=async()=>{if(!!c){o(!0),m(null);try{await W.deleteProject(c.id),u(!1),g(null),C()}catch(F){console.error("Failed to delete project:",F),m("\u5220\u9664\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5")}o(!1)}},p=()=>{u(!1),g(null),m(null)},v=F=>{e(`/project/${F}`)};return h("div",{className:"home-page",children:[h("div",{className:"page-header",children:[h("div",{className:"header-content",children:[s(Ko,{size:28,className:"header-icon"}),h("div",{children:[s("h1",{children:"\u542C\u58A8\u8BED - \u6709\u58F0\u5C0F\u8BF4\u5236\u4F5C"}),s("p",{children:"\u521B\u5EFA\u3001\u7F16\u8F91\u548C\u7BA1\u7406\u60A8\u7684\u6709\u58F0\u5C0F\u8BF4\u5DE5\u7A0B"})]})]}),h("button",{className:"create-project-btn",onClick:()=>l(!0),disabled:r,children:[s(Vd,{size:20}),"\u521B\u5EFA\u65B0\u5DE5\u7A0B"]})]}),s("div",{className:"projects-container",children:s("div",{className:"projects-list",children:r&&t.length===0?h("div",{className:"loading",children:[s("div",{className:"spinner"}),s("p",{children:"\u52A0\u8F7D\u4E2D..."})]}):t.length===0?h("div",{className:"empty-state",children:[s(Vh,{size:64}),s("h2",{children:"\u6682\u65E0\u5DE5\u7A0B"}),s("p",{children:"\u70B9\u51FB\u4E0A\u65B9\u6309\u94AE\u521B\u5EFA\u60A8\u7684\u7B2C\u4E00\u4E2A\u6709\u58F0\u5C0F\u8BF4\u5DE5\u7A0B"})]}):t.map((F,A)=>h("div",{className:"project-item",children:[h("div",{className:"project-info",onClick:()=>v(F.id),children:[s("div",{className:"project-index",children:A+1}),h("div",{className:"project-content",children:[s("h3",{children:F.name}),s("p",{className:"project-description",children:F.description||"\u6682\u65E0\u63CF\u8FF0"}),h("div",{className:"project-meta",children:[h("span",{children:["\u521B\u5EFA\u65F6\u95F4: ",new Date(F.createdAt).toLocaleDateString()]}),h("span",{children:["\u66F4\u65B0\u65F6\u95F4: ",new Date(F.updatedAt).toLocaleDateString()]})]})]})]}),h("div",{className:"project-actions",children:[h("button",{className:"btn-primary",onClick:D=>{D.stopPropagation(),v(F.id)},disabled:r,title:"\u6253\u5F00\u9879\u76EE",children:[s($d,{size:16}),"\u6253\u5F00"]}),h("button",{className:"btn-danger",onClick:D=>{D.stopPropagation(),f(F)},disabled:r,children:[s(pi,{size:16}),"\u5220\u9664"]})]})]},F.id))})}),i&&s("div",{className:"modal",children:h("div",{className:"modal-content",children:[h("div",{className:"modal-header",children:[s("h2",{children:"\u521B\u5EFA\u65B0\u5DE5\u7A0B"}),s("button",{className:"modal-close",onClick:()=>l(!1),children:"\xD7"})]}),h("form",{onSubmit:T,children:[h("div",{className:"form-group",children:[s("label",{htmlFor:"project-name",children:"\u5DE5\u7A0B\u540D\u79F0"}),s("input",{type:"text",id:"project-name",value:S.name,onChange:F=>E({...S,name:F.target.value}),placeholder:"\u8BF7\u8F93\u5165\u5DE5\u7A0B\u540D\u79F0",required:!0})]}),h("div",{className:"form-group",children:[s("label",{htmlFor:"project-description",children:"\u5DE5\u7A0B\u63CF\u8FF0"}),s("textarea",{id:"project-description",value:S.description,onChange:F=>E({...S,description:F.target.value}),placeholder:"\u8BF7\u8F93\u5165\u5DE5\u7A0B\u63CF\u8FF0",rows:3})]}),h("div",{className:"modal-footer",children:[s("button",{type:"button",className:"btn-secondary",onClick:()=>l(!1),disabled:r,children:"\u53D6\u6D88"}),s("button",{type:"submit",className:"btn-primary",disabled:r,children:"\u786E\u5B9A"})]})]})]})}),a&&c&&s("div",{className:"modal",children:h("div",{className:"modal-content delete-modal",children:[h("div",{className:"modal-header",children:[s("h2",{children:"\u5220\u9664\u5DE5\u7A0B"}),s("button",{className:"modal-close",onClick:p,children:"\xD7"})]}),h("div",{className:"delete-warning",children:[s("div",{className:"warning-icon",children:s("svg",{width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",children:s("path",{d:"M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",stroke:"#EF4444",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),s("h3",{children:"\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u5DE5\u7A0B\u5417\uFF1F"}),s("p",{className:"project-name-highlight",children:c.name}),s("p",{className:"delete-warning-text",children:"\u6B64\u64CD\u4F5C\u65E0\u6CD5\u64A4\u9500\uFF0C\u5DE5\u7A0B\u4E0B\u7684\u6240\u6709\u7AE0\u8282\u3001\u6BB5\u843D\u548C\u89D2\u8272\u6570\u636E\u90FD\u5C06\u88AB\u6C38\u4E45\u5220\u9664\u3002"}),y&&s("p",{className:"delete-error-message",children:y})]}),h("div",{className:"modal-footer",children:[s("button",{type:"button",className:"btn-secondary",onClick:p,disabled:r,children:"\u53D6\u6D88"}),s("button",{type:"button",className:"btn-danger",onClick:d,disabled:r,children:r?"\u5220\u9664\u4E2D...":"\u786E\u8BA4\u5220\u9664"})]})]})}),s("style",{children:`
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
      `})]})},Hd=({isOpen:e,title:t,message:n,confirmText:r="\u786E\u5B9A",cancelText:o="\u53D6\u6D88",type:i="warning",onConfirm:l,onCancel:a})=>{if(!e)return null;const u=()=>{switch(i){case"danger":return s(Yi,{size:28,className:"text-red-500"});case"warning":return s(Yi,{size:28,className:"text-yellow-500"});case"info":return s(Ih,{size:28,className:"text-blue-500"});default:return s(Yi,{size:28,className:"text-yellow-500"})}},c=()=>{switch(i){case"danger":return"btn-danger";case"warning":return"btn-primary";case"info":return"btn-primary";default:return"btn-primary"}};return s("div",{className:"confirm-modal-overlay",onClick:a,children:h("div",{className:"confirm-modal-content",onClick:g=>g.stopPropagation(),children:[h("div",{className:"confirm-modal-header",children:[h("div",{className:"confirm-modal-title",children:[u(),s("h2",{children:t})]}),s("button",{className:"modal-close",onClick:a,children:s(ct,{size:24})})]}),s("div",{className:"confirm-modal-body",children:s("p",{className:"confirm-message",children:n})}),h("div",{className:"confirm-modal-footer",children:[s("button",{className:"btn-secondary",onClick:a,children:o}),s("button",{className:c(),onClick:l,children:r})]}),s("style",{children:`
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
        `})]})})},Im=({projectId:e,onChapterSelect:t})=>{const n=Lr(),[r,o]=k.exports.useState([]),[i,l]=k.exports.useState(!1),[a,u]=k.exports.useState(!1),[c,g]=k.exports.useState({title:"",content:""}),[y,m]=k.exports.useState({isOpen:!1,title:"",message:"",type:"warning",onConfirm:()=>{}}),S=async()=>{l(!0);try{const p=await W.getChapters(e);o(p)}catch(p){console.error("Failed to load chapters:",p)}l(!1)};k.exports.useEffect(()=>{S()},[e]);const E=async p=>{if(p.preventDefault(),!!c.title.trim()){l(!0);try{await W.createChapter(e,c.title,c.content),g({title:"",content:""}),u(!1),S()}catch(v){console.error("Failed to create chapter:",v)}l(!1)}},C=p=>{m({isOpen:!0,title:"\u5220\u9664\u7AE0\u8282",message:"\u786E\u5B9A\u8981\u5220\u9664\u6B64\u7AE0\u8282\u5417\uFF1F\u6B64\u64CD\u4F5C\u4E0D\u53EF\u64A4\u9500\u3002",type:"danger",confirmText:"\u5220\u9664",cancelText:"\u53D6\u6D88",onConfirm:async()=>{m(v=>({...v,isOpen:!1})),l(!0);try{await W.deleteChapter(p),S()}catch(v){console.error("Failed to delete chapter:",v)}l(!1)}})},T=(p,v)=>{p.dataTransfer.setData("text/plain",v.toString())},f=p=>{p.preventDefault()},d=async(p,v)=>{p.preventDefault();const F=parseInt(p.dataTransfer.getData("text/plain"));if(F!==v){const A=[...r],[D]=A.splice(F,1);A.splice(v,0,D);const B=A.map($=>$.id);try{await W.reorderChapters(e,B),o(A)}catch($){console.error("Failed to reorder chapters:",$)}}};return h("div",{className:"chapter-manager",children:[h("div",{className:"chapter-manager-header",children:[h("div",{className:"header-left",children:[s(Ql,{size:20}),s("h2",{children:"\u7AE0\u8282\u7BA1\u7406"})]}),h("button",{className:"btn-primary",onClick:()=>u(!0),disabled:i,children:[s(Vd,{size:16}),"\u65B0\u5EFA\u7AE0\u8282"]})]}),s("div",{className:"chapter-list",children:i&&r.length===0?h("div",{className:"loading-state",children:[s("div",{className:"spinner"}),s("p",{children:"\u52A0\u8F7D\u4E2D..."})]}):r.length===0?h("div",{className:"empty-state",children:[s(Hh,{size:48}),s("h3",{children:"\u6682\u65E0\u7AE0\u8282"}),s("p",{children:"\u70B9\u51FB\u4E0A\u65B9\u6309\u94AE\u521B\u5EFA\u60A8\u7684\u7B2C\u4E00\u4E2A\u7AE0\u8282"})]}):r.map((p,v)=>h("div",{className:"chapter-item",draggable:!0,onDragStart:F=>T(F,v),onDragOver:f,onDrop:F=>d(F,v),children:[h("div",{className:"chapter-info",onClick:()=>n(`/project/${e}/chapter/${p.id}`),children:[s("div",{className:"chapter-index",children:v+1}),h("div",{className:"chapter-content",children:[s("h4",{children:p.title}),h("p",{className:"chapter-preview",children:[p.content.slice(0,50),p.content.length>50?"...":""]}),h("div",{className:"chapter-meta",children:[h("span",{children:["\u521B\u5EFA\u65F6\u95F4: ",new Date(p.createdAt).toLocaleDateString()]}),h("span",{children:["\u66F4\u65B0\u65F6\u95F4: ",new Date(p.updatedAt).toLocaleDateString()]})]})]})]}),h("div",{className:"chapter-actions",children:[s(Kh,{size:20,className:"drag-handle"}),h("button",{className:"btn-primary",onClick:F=>{F.stopPropagation(),n(`/project/${e}/chapter/${p.id}`)},disabled:i,title:"\u6253\u5F00\u7AE0\u8282\u7F16\u8F91\u5668",children:[s($d,{size:16}),"\u6253\u5F00"]}),h("button",{className:"btn-danger",onClick:F=>{F.stopPropagation(),C(p.id)},disabled:i,children:[s(pi,{size:16}),"\u5220\u9664"]})]})]},p.id))}),a&&s("div",{className:"modal",children:h("div",{className:"modal-content",children:[h("div",{className:"modal-header",children:[s("h2",{children:"\u521B\u5EFA\u65B0\u7AE0\u8282"}),s("button",{className:"modal-close",onClick:()=>u(!1),disabled:i,children:s(ct,{size:24})})]}),h("form",{onSubmit:E,children:[h("div",{className:"form-group",children:[s("label",{htmlFor:"chapter-title",children:"\u7AE0\u8282\u6807\u9898"}),s("input",{type:"text",id:"chapter-title",value:c.title,onChange:p=>g({...c,title:p.target.value}),placeholder:"\u8BF7\u8F93\u5165\u7AE0\u8282\u6807\u9898",required:!0})]}),h("div",{className:"form-group",children:[s("label",{htmlFor:"chapter-content",children:"\u7AE0\u8282\u5185\u5BB9"}),s("textarea",{id:"chapter-content",value:c.content,onChange:p=>g({...c,content:p.target.value}),placeholder:"\u8BF7\u8F93\u5165\u7AE0\u8282\u5185\u5BB9",rows:6})]}),h("div",{className:"modal-footer",children:[s("button",{type:"button",className:"btn-secondary",onClick:()=>u(!1),disabled:i,children:"\u53D6\u6D88"}),s("button",{type:"submit",className:"btn-primary",disabled:i,children:"\u786E\u5B9A"})]})]})]})}),s(Hd,{isOpen:y.isOpen,title:y.title,message:y.message,type:y.type,confirmText:y.confirmText,cancelText:y.cancelText,onConfirm:y.onConfirm,onCancel:()=>m(p=>({...p,isOpen:!1}))}),s("style",{children:`
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
      `})]})},Om="neutral",Um="happy",$m="sad",Vm="angry",Km="surprised",Wm="fear",Hm="hate",Gm="excited",Qm="coldness",Ym="depressed",Xm="lovey-dovey",Zm="shy",Jm="comfort",qm="tension",e1="tender",t1="storytelling",n1="radio",r1="magnetic",o1="advertising",i1="vocal-fry",l1="ASMR",a1="news",s1="entertainment",u1="dialect",c1="chat",d1="warm",p1="affectionate",f1="authoritative",h1=[{value:Om,label:"\u4E2D\u6027"},{value:Um,label:"\u5F00\u5FC3"},{value:$m,label:"\u60B2\u4F24"},{value:Vm,label:"\u751F\u6C14"},{value:Km,label:"\u60CA\u8BB6"},{value:Wm,label:"\u6050\u60E7"},{value:Hm,label:"\u538C\u6076"},{value:Gm,label:"\u6FC0\u52A8"},{value:Qm,label:"\u51B7\u6F20"},{value:Ym,label:"\u6CAE\u4E27"},{value:Xm,label:"\u6492\u5A07"},{value:Zm,label:"\u5BB3\u7F9E"},{value:Jm,label:"\u5B89\u6170\u9F13\u52B1"},{value:qm,label:"\u5486\u54EE/\u7126\u6025"},{value:e1,label:"\u6E29\u67D4"},{value:t1,label:"\u8BB2\u6545\u4E8B/\u81EA\u7136\u8BB2\u8FF0"},{value:n1,label:"\u60C5\u611F\u7535\u53F0"},{value:r1,label:"\u78C1\u6027"},{value:o1,label:"\u5E7F\u544A\u8425\u9500"},{value:i1,label:"\u6C14\u6CE1\u97F3"},{value:l1,label:"\u4F4E\u8BED(ASMR)"},{value:a1,label:"\u65B0\u95FB\u64AD\u62A5"},{value:s1,label:"\u5A31\u4E50\u516B\u5366"},{value:u1,label:"\u65B9\u8A00"}],m1=[...h1,{value:c1,label:"\u5BF9\u8BDD/\u95F2\u804A"},{value:d1,label:"\u6E29\u6696"},{value:p1,label:"\u6DF1\u60C5"},{value:f1,label:"\u6743\u5A01"}],g1="male",y1="female",v1="unknown",x1={male:"\u7537",female:"\u5973",unknown:"\u672A\u77E5"},w1="child",k1="teen",E1="adult",C1="senior",F1="unknown",S1={child:"\u513F\u7AE5",teen:"\u5C11\u5E74",adult:"\u6210\u4EBA",senior:"\u8001\u5E74",unknown:"\u672A\u77E5"},ro=1,Xi=10,N1=({projectId:e})=>{const[t,n]=k.exports.useState([]),[r,o]=k.exports.useState([]),[i,l]=k.exports.useState(!1),[a,u]=k.exports.useState(""),[c,g]=k.exports.useState(1),[y,m]=k.exports.useState(null),[S,E]=k.exports.useState(""),[C,T]=k.exports.useState(""),[f,d]=k.exports.useState(""),[p,v]=k.exports.useState("");k.exports.useEffect(()=>{e&&F()},[e]),k.exports.useEffect(()=>{g(1)},[a]);const F=async()=>{l(!0);try{const[x,z]=await Promise.all([W.getCharacters(e),W.getVoices()]);n(x),o(z)}catch(x){console.error("Failed to load data:",x)}l(!1)},A=k.exports.useMemo(()=>{let x=t;if(a.trim()){const z=a.toLowerCase().trim();x=x.filter(j=>!!(j.name.toLowerCase().includes(z)||j.aliases&&j.aliases.some(O=>O.toLowerCase().includes(z))||j.description&&j.description.toLowerCase().includes(z)))}return x.sort((z,j)=>{const O=z.lastSeenAt||0;return(j.lastSeenAt||0)-O}),x},[t,a]),D=Math.ceil(A.length/Xi),B=k.exports.useMemo(()=>{const x=(c-1)*Xi,z=x+Xi;return A.slice(x,z)},[A,c]),$=async x=>{if(x!==0){l(!0);try{if(x<0){const z=t.find(j=>j.id===x);z&&await W.deleteProjectKnownCharacter(e,z.name)}else await W.deleteCharacter(x);F()}catch(z){console.error("Failed to delete character:",z)}l(!1)}},M=async(x,z)=>{try{if(n(j=>j.map(O=>O.id===x?{...O,voiceId:z}:O)),x===0)await W.updateNarratorVoice(e,z);else if(x<0){const j=t.find(O=>O.id===x);j&&await W.setKnownCharacterVoice(e,j.name,z)}else{const j=t.find(O=>O.id===x);j&&await W.updateCharacter(x,j.name,j.description,z)}}catch(j){console.error("Failed to set character voice:",j),F()}},I=x=>{m(x.id),E((x.aliases||[]).join(", ")),T(x.gender||""),d(x.age||""),v(x.description||"")},ae=async x=>{try{const z=S.split(",").map(j=>j.trim()).filter(j=>j.length>0);n(j=>j.map(O=>O.id===x.id?{...O,description:p,gender:C,age:f,aliases:z}:O)),x.id<0?await W.updateKnownCharacter(e,x.name,p,C,f,z):await W.updateCharacter(x.id,x.name,p,x.voiceId),re()}catch(z){console.error("Failed to save character:",z),F()}},re=()=>{m(null),E(""),T(""),d(""),v("")},tn=x=>x1[x]||"\u672A\u77E5",gt=x=>S1[x]||"\u672A\u77E5",Ge=x=>!x||x.length===0?"-":x.join(", "),Qe=x=>!x||x.length===0?"-":x.length<=2?x.join(", "):`${x[0]}, ${x[1]}... (${x.length}\u7AE0)`,P=x=>x?new Date(x*1e3).toLocaleString("zh-CN",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}):"-";return h("div",{className:"role-manager",children:[h("div",{className:"role-manager-header",children:[h("div",{className:"header-left",children:[s(mu,{size:20}),s("h2",{children:"\u89D2\u8272\u7BA1\u7406"}),A.length>0&&s("span",{className:"count-badge",children:A.length})]}),h("div",{className:"search-box",children:[s(Zh,{size:16}),s("input",{type:"text",placeholder:"\u641C\u7D22\u89D2\u8272\u540D\u79F0\u3001\u522B\u540D\u6216\u7B80\u4ECB...",value:a,onChange:x=>u(x.target.value),className:"search-input"}),a&&s("button",{className:"btn-clear-search",onClick:()=>u(""),children:s(ct,{size:14})})]})]}),s("div",{className:"role-table-container",children:i&&t.length===0?h("div",{className:"loading-state",children:[s("div",{className:"spinner"}),s("p",{children:"\u52A0\u8F7D\u4E2D..."})]}):A.length===0?h("div",{className:"empty-state",children:[s(mu,{size:48}),s("h3",{children:"\u6682\u65E0\u89D2\u8272"}),s("p",{children:"\u4F7F\u7528 LLM \u89E3\u6790\u6587\u672C\u540E\uFF0C\u8BC6\u522B\u5230\u7684\u89D2\u8272\u4F1A\u663E\u793A\u5728\u8FD9\u91CC"})]}):h(Wl,{children:[h("table",{className:"role-table",children:[s("thead",{children:h("tr",{children:[s("th",{className:"col-name",children:"\u59D3\u540D"}),s("th",{className:"col-chapters",children:"\u51FA\u73B0\u7AE0\u8282"}),s("th",{className:"col-aliases",children:"\u522B\u540D"}),s("th",{className:"col-gender",children:"\u63A8\u6D4B\u6027\u522B"}),s("th",{className:"col-age",children:"\u63A8\u6D4B\u5E74\u9F84"}),s("th",{className:"col-voice",children:"\u97F3\u8272"}),s("th",{className:"col-desc",children:"\u7B80\u4ECB"}),s("th",{className:"col-updated",children:"\u6700\u540E\u53D1\u73B0"}),s("th",{className:"col-actions",children:"\u64CD\u4F5C"})]})}),s("tbody",{children:B.map(x=>{var z;return s(ql.Fragment,{children:h("tr",{className:x.id===0?"narrator-row":"character-row",children:[s("td",{className:"col-name",children:h("div",{className:"name-cell",children:[s("div",{className:`role-avatar-small ${x.id===0?"narrator-avatar":"known-avatar"}`,children:x.id===0?s(Ko,{size:14}):s(vu,{size:14})}),s("span",{className:"character-name",children:x.name}),x.id===0&&s("span",{className:"badge narrator-badge",children:"\u7CFB\u7EDF"}),x.id!==0&&x.id<0&&s("span",{className:"badge ai-badge",children:"AI\u8BC6\u522B"})]})}),s("td",{className:"col-chapters",children:s("span",{className:"chapter-list",title:(z=x.chapterNames)==null?void 0:z.join(", "),children:Qe(x.chapterNames)})}),s("td",{className:"col-aliases",children:y===x.id?s("input",{type:"text",className:"edit-input-inline",value:S,onChange:j=>E(j.target.value),placeholder:"\u591A\u4E2A\u522B\u540D\u7528\u9017\u53F7\u5206\u9694"}):s("span",{className:"alias-list",title:Ge(x.aliases),children:Ge(x.aliases)})}),s("td",{className:"col-gender",children:y===x.id?h("select",{className:"edit-select-inline",value:C,onChange:j=>T(j.target.value),children:[s("option",{value:"",children:"\u9009\u62E9\u6027\u522B"}),s("option",{value:g1,children:"\u7537"}),s("option",{value:y1,children:"\u5973"}),s("option",{value:v1,children:"\u672A\u77E5"})]}):h("span",{className:"gender-badge",children:[s(vu,{size:12}),tn(x.gender)]})}),s("td",{className:"col-age",children:y===x.id?h("select",{className:"edit-select-inline",value:f,onChange:j=>d(j.target.value),children:[s("option",{value:"",children:"\u9009\u62E9\u5E74\u9F84\u6BB5"}),s("option",{value:w1,children:"\u513F\u7AE5"}),s("option",{value:k1,children:"\u5C11\u5E74"}),s("option",{value:E1,children:"\u6210\u4EBA"}),s("option",{value:C1,children:"\u8001\u5E74"}),s("option",{value:F1,children:"\u672A\u77E5"})]}):h("span",{className:"age-badge",children:[s(Ud,{size:12}),gt(x.age)]})}),s("td",{className:"col-voice",children:h("div",{className:"voice-select-cell",children:[s(Wd,{size:14}),h("select",{className:"voice-select-inline",value:x.voiceId||"",onChange:j=>M(x.id,j.target.value),disabled:i,children:[s("option",{value:"",children:"\u9009\u62E9\u97F3\u8272"}),r.map(j=>s("option",{value:j.id,children:j.name},j.id))]})]})}),s("td",{className:"col-desc",children:y===x.id?s("input",{type:"text",className:"edit-input-inline",value:p,onChange:j=>v(j.target.value),placeholder:"\u89D2\u8272\u7B80\u4ECB"}):s("span",{className:"description-text",title:x.description,children:x.description||"-"})}),s("td",{className:"col-updated",children:h("span",{className:"last-seen",children:[s(Wa,{size:12}),P(x.lastSeenAt)]})}),s("td",{className:"col-actions",children:y===x.id?h("div",{className:"edit-actions-inline",children:[s("button",{className:"btn-ghost btn-small",onClick:re,children:s(ct,{size:12})}),s("button",{className:"btn-primary btn-small",onClick:()=>ae(x),children:s(gu,{size:12})})]}):s("div",{className:"actions-cell",children:x.id!==0&&h(Wl,{children:[s("button",{className:"btn-icon btn-edit",onClick:()=>I(x),disabled:i,title:"\u7F16\u8F91",children:s(gu,{size:14})}),s("button",{className:"btn-icon btn-danger",onClick:()=>$(x.id),disabled:i,title:"\u5220\u9664",children:s(pi,{size:14})})]})})})]})},`${x.id}-${x.name}`)})})]}),D>1&&h("div",{className:"pagination",children:[s("button",{className:"btn-page",onClick:()=>g(x=>Math.max(1,x-1)),disabled:c===1,children:s(Uh,{size:16})}),h("span",{className:"page-info",children:["\u7B2C ",c," / ",D," \u9875"]}),s("button",{className:"btn-page",onClick:()=>g(x=>Math.min(D,x+1)),disabled:c===D,children:s($h,{size:16})})]})]})}),s("style",{children:`
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

        /* \u5217\u5BBD */
        .col-name { width: 160px; min-width: 160px; }
        .col-chapters { width: 140px; min-width: 140px; }
        .col-aliases { width: 140px; min-width: 140px; }
        .col-gender { width: 100px; min-width: 100px; }
        .col-age { width: 100px; min-width: 100px; }
        .col-voice { width: 160px; min-width: 160px; }
        .col-desc { width: auto; min-width: 180px; }
        .col-updated { width: 110px; min-width: 110px; }
        .col-actions { width: 100px; min-width: 100px; }

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
      `})]})},b1=()=>{const{id:e}=Id(),t=Lr(),[n,r]=k.exports.useState(null),[o,i]=k.exports.useState(!1),[l,a]=k.exports.useState(!1),[u,c]=k.exports.useState(!1),[g,y]=k.exports.useState(!1),[m,S]=k.exports.useState({name:"",description:""}),[E,C]=k.exports.useState(""),[T,f]=k.exports.useState(""),[d,p]=k.exports.useState(!1),[v,F]=k.exports.useState(!1);k.exports.useEffect(()=>{e&&A(parseInt(e))},[e]);const A=async I=>{i(!0);try{const ae=await W.getProject(I);r(ae),ae&&(S({name:ae.name,description:ae.description}),C(ae.llmApiKey||""),f(ae.ttsApiKey||""))}catch(ae){console.error("Failed to load project:",ae)}i(!1)},D=async()=>{if(!!e){i(!0);try{await W.updateProject(parseInt(e),m.name,m.description),a(!1),A(parseInt(e))}catch(I){console.error("Failed to update project:",I)}i(!1)}},B=async()=>{if(!!e){p(!0);try{await W.setProjectLLMApiKey(parseInt(e),E),c(!1),A(parseInt(e))}catch(I){console.error("Failed to save LLM API key:",I)}p(!1)}},$=async()=>{if(!!e){F(!0);try{await W.setProjectTTSApiKey(parseInt(e),T),y(!1),A(parseInt(e))}catch(I){console.error("Failed to save TTS API key:",I)}F(!1)}},M=I=>I?I.length<=8?I:I.slice(0,4)+"..."+I.slice(-4):"\u672A\u8BBE\u7F6E";return o&&!n?s("div",{className:"project-details-page",children:h("div",{className:"loading-container",children:[s("div",{className:"spinner"}),s("p",{children:"\u52A0\u8F7D\u4E2D..."})]})}):n?h("div",{className:"project-details-page",children:[s("header",{className:"page-header",children:h("div",{className:"header-inner",children:[h("div",{className:"header-left",children:[h(sr,{to:"/",className:"back-button",children:[s(Vo,{size:18}),s("span",{children:"\u8FD4\u56DE"})]}),s("div",{className:"divider"}),h("div",{className:"project-title",children:[s(Ko,{size:20,className:"title-icon"}),h("div",{children:[s("h1",{children:n.name}),s("p",{className:"subtitle",children:"\u6709\u58F0\u5C0F\u8BF4\u5236\u4F5C\u5DE5\u7A0B"})]})]})]}),s("div",{className:"header-right",children:s("button",{className:"btn-secondary",onClick:()=>t("/"),children:"\u8FD4\u56DE\u9996\u9875"})})]})}),s("main",{className:"main-content",children:h("div",{className:"content-wrapper",children:[h("div",{className:"left-column",children:[h("section",{className:"project-info-section",children:[h("div",{className:"section-header",children:[h("h2",{children:[s(Kd,{size:18}),"\u9879\u76EE\u6982\u89C8"]}),!l&&s("button",{className:"btn-ghost",onClick:()=>a(!0),disabled:o,children:"\u7F16\u8F91\u4FE1\u606F"})]}),s("div",{className:"project-info-card",children:l?h("div",{className:"project-info-edit",children:[h("div",{className:"form-grid",children:[h("div",{className:"form-group full-width",children:[s("label",{htmlFor:"project-name",children:"\u9879\u76EE\u540D\u79F0"}),s("input",{id:"project-name",type:"text",value:m.name,onChange:I=>S({...m,name:I.target.value}),placeholder:"\u8BF7\u8F93\u5165\u9879\u76EE\u540D\u79F0",disabled:o})]}),h("div",{className:"form-group full-width",children:[s("label",{htmlFor:"project-description",children:"\u9879\u76EE\u63CF\u8FF0"}),s("textarea",{id:"project-description",value:m.description,onChange:I=>S({...m,description:I.target.value}),placeholder:"\u8BF7\u8F93\u5165\u9879\u76EE\u63CF\u8FF0",rows:2,disabled:o})]})]}),h("div",{className:"form-actions",children:[h("button",{className:"btn-secondary",onClick:()=>{a(!1),S({name:n.name,description:n.description})},disabled:o,children:[s(ct,{size:16}),"\u53D6\u6D88"]}),h("button",{className:"btn-primary",onClick:D,disabled:o,children:[s(Wo,{size:16}),"\u4FDD\u5B58\u66F4\u6539"]})]})]}):h("div",{className:"project-info-content",children:[h("div",{className:"info-grid",children:[h("div",{className:"info-item",children:[s("div",{className:"info-label",children:"\u9879\u76EE\u540D\u79F0"}),s("div",{className:"info-value",children:n.name})]}),h("div",{className:"info-item",children:[s("div",{className:"info-label",children:"\u9879\u76EE\u63CF\u8FF0"}),s("div",{className:"info-value",children:n.description||"\u6682\u65E0\u63CF\u8FF0"})]})]}),h("div",{className:"meta-row",children:[h("div",{className:"meta-item",children:[s(Ud,{size:14}),h("span",{children:["\u521B\u5EFA\u4E8E ",new Date(n.createdAt).toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric"})]})]}),h("div",{className:"meta-item",children:[s(Wa,{size:14}),h("span",{children:["\u66F4\u65B0\u4E8E ",new Date(n.updatedAt).toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric"})]})]})]})]})})]}),h("section",{className:"api-key-section",children:[s("div",{className:"section-header",children:h("h2",{children:[s(Wh,{size:18}),"\u57FA\u7840\u914D\u7F6E"]})}),h("div",{className:"api-key-card",children:[h("div",{className:"api-key-item",children:[s("div",{className:"api-key-header",children:s("h3",{children:"\u6587\u672C\u5927\u6A21\u578B"})}),u?s("div",{className:"api-key-edit-row",children:s("div",{className:"form-group",children:s("input",{type:"password",value:E,onChange:I=>C(I.target.value),placeholder:"\u8BF7\u8F93\u5165\u6587\u672C\u5927\u6A21\u578B API Key",disabled:d})})}):h("div",{className:"api-key-status-row",children:[s("div",{className:`status-indicator ${n.llmApiKey?"active":"inactive"}`,children:n.llmApiKey?"\u5DF2\u914D\u7F6E":"\u672A\u914D\u7F6E"}),n.llmApiKey&&s("span",{className:"api-key-masked",children:M(n.llmApiKey)})]})]}),s("div",{className:"api-key-divider"}),h("div",{className:"api-key-item",children:[s("div",{className:"api-key-header",children:s("h3",{children:"\u8BED\u97F3\u5927\u6A21\u578B"})}),g?s("div",{className:"api-key-edit-row",children:s("div",{className:"form-group",children:s("input",{type:"password",value:T,onChange:I=>f(I.target.value),placeholder:"\u8BF7\u8F93\u5165\u8BED\u97F3\u5927\u6A21\u578B API Key",disabled:v})})}):h("div",{className:"api-key-status-row",children:[s("div",{className:`status-indicator ${n.ttsApiKey?"active":"inactive"}`,children:n.ttsApiKey?"\u5DF2\u914D\u7F6E":"\u672A\u914D\u7F6E"}),n.ttsApiKey&&s("span",{className:"api-key-masked",children:M(n.ttsApiKey)})]})]}),s("div",{className:"api-key-actions",children:!u&&!g?s("button",{className:"btn-ghost",onClick:()=>{c(!0),y(!0)},disabled:o,children:"\u7F16\u8F91\u914D\u7F6E"}):h("div",{className:"form-actions",children:[h("button",{className:"btn-secondary",onClick:()=>{c(!1),y(!1),C(n.llmApiKey||""),f(n.ttsApiKey||"")},disabled:d||v,children:[s(ct,{size:16}),"\u53D6\u6D88"]}),h("button",{className:"btn-primary",onClick:async()=>{u&&await B(),g&&await $()},disabled:d||v,children:[s(Wo,{size:16}),d||v?"\u4FDD\u5B58\u4E2D...":"\u4FDD\u5B58"]})]})})]})]}),h("section",{className:"character-section",children:[s("div",{className:"section-header",children:h("h2",{children:[s(Jh,{size:18}),"\u89D2\u8272\u7BA1\u7406"]})}),s("div",{className:"role-manager-wrapper",children:s(N1,{projectId:parseInt(e||"0")})})]})]}),s("div",{className:"right-column",children:h("section",{className:"chapter-section",children:[s("div",{className:"section-header",children:h("h2",{children:[s(Ko,{size:18}),"\u7AE0\u8282\u7BA1\u7406"]})}),s("div",{className:"chapter-manager-wrapper",children:s(Im,{projectId:parseInt(e||"0")})})]})})]})}),s("style",{children:`
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
      `})]}):s("div",{className:"project-details-page",children:h("div",{className:"error-container",children:[s("h2",{children:"\u9879\u76EE\u4E0D\u5B58\u5728"}),h(sr,{to:"/",className:"btn-primary",children:[s(Vo,{size:16}),"\u8FD4\u56DE\u9996\u9875"]})]})})},A1=()=>{const{projectId:e,chapterId:t}=Id();Lr();const[n,r]=k.exports.useState(null),[o,i]=k.exports.useState([]),[l,a]=k.exports.useState([]),[u,c]=k.exports.useState([]),[g,y]=k.exports.useState([]),[m,S]=k.exports.useState(!0),[E,C]=k.exports.useState(null),[T,f]=k.exports.useState(!1),[d,p]=k.exports.useState(0),[v,F]=k.exports.useState(0),[A,D]=k.exports.useState({content:"",speaker:"",tone:"neutral",speed:ro}),[B,$]=k.exports.useState(new Set),[M,I]=k.exports.useState(!1),[ae,re]=k.exports.useState(!1),[tn,gt]=k.exports.useState(!1),[Ge,Qe]=k.exports.useState(""),[P,x]=k.exports.useState(!1),[z,j]=k.exports.useState(!1),[O,Ie]=k.exports.useState(0),[nt,Ye]=k.exports.useState(""),[Xe,rt]=k.exports.useState(!1),[fi,Ha]=k.exports.useState(""),[Gd,nn]=k.exports.useState(!1),[It,hi]=k.exports.useState(""),[Qd,mi]=k.exports.useState("\u751F\u6210\u811A\u672C\u5931\u8D25"),[rn,ot]=k.exports.useState({isOpen:!1,title:"",message:"",type:"warning",onConfirm:null}),[gi,yi]=k.exports.useState(!1),[Ga,Tr]=k.exports.useState(0),vi=k.exports.useRef(null),Yd=k.exports.useRef(null),_r=k.exports.useRef(null);k.exports.useEffect(()=>{t&&Xd()},[t,e]),k.exports.useEffect(()=>{const w=N=>{vi.current&&!vi.current.contains(N.target)&&rt(!1)};return document.addEventListener("mousedown",w),()=>document.removeEventListener("mousedown",w)},[]),k.exports.useEffect(()=>{if(E&&o.length>0){const w=o.find(N=>N.id===E);w&&D({content:w.content,speaker:w.speaker||"",tone:w.tone||"neutral",speed:w.speed||ro})}},[E,o]);const Xd=async()=>{S(!0);try{const w=await W.getChapter(parseInt(t||"0"));if(r(w),Qe(w.content||""),e){const ye=await W.getProjectKnownCharacters(parseInt(e));c(ye)}const N=await W.getVoices();y(N);const R=[...await W.getParagraphs(parseInt(t||"0"))].sort((ye,In)=>ye.orderIndex-In.orderIndex);i(R),a(R),on(R),R.length>0&&ln(R[0].id)}catch(w){console.error("Failed to load data:",w)}S(!1)},Zd=()=>{n&&Qe(n.content||""),gt(!0)},Jd=async()=>{if(!!n){x(!0);try{await W.updateChapter(n.id,n.title,Ge),r(w=>w?{...w,content:Ge}:null),gt(!1),re(!0),setTimeout(()=>re(!1),2e3)}catch(w){console.error("Failed to save chapter:",w)}x(!1)}},on=w=>{const N=w.reduce((_,R)=>_+(R.duration||0),0);F(N)},qd=(()=>{let w=0;return o.map(N=>{const _=w,R=w+(N.duration||2);return w=R,{id:N.id,start:_,end:R,paragraph:N}})})(),Mr=w=>B.has(w),ln=w=>{if(w===E)return;Qa(),C(w);const N=o.find(_=>_.id===w);N&&D({content:N.content,speaker:N.speaker||"",tone:N.tone||"neutral",speed:N.speed||ro})},Qa=()=>{if(E){const w=o.map(N=>N.id===E?{...N,...A,voiceId:N.voiceId}:N);i(w)}},Rn=(w,N)=>{D({...A,[w]:N}),E&&$(_=>new Set(_).add(E))},ep=async()=>{if(B.size!==0){I(!0);try{Qa();for(const w of B){const N=o.find(_=>_.id===w);N&&await W.updateParagraph(N.id,N.content,N.speaker,N.tone,N.voiceId,N.speed,N.audioPath,N.duration,N.orderIndex)}$(new Set),a(o),re(!0),setTimeout(()=>re(!1),2e3)}catch(w){console.error("Failed to save paragraphs:",w)}I(!1)}},tp=()=>{if(i(l),on(l),$(new Set),E){const w=l.find(N=>N.id===E);w?D({content:w.content,speaker:w.speaker||"",tone:w.tone||"neutral",speed:w.speed||ro}):l.length>0?ln(l[0].id):C(null)}},np=w=>{ot({isOpen:!0,title:"\u5220\u9664\u6BB5\u843D",message:"\u786E\u5B9A\u8981\u5220\u9664\u6B64\u6BB5\u843D\u5417\uFF1F",type:"danger",onConfirm:()=>{const N=o.filter(_=>_.id!==w);i(N),on(N),$(_=>{const R=new Set(_);return R.delete(w),R}),E===w&&(N.length>0?ln(N[0].id):C(null)),ot(_=>({..._,isOpen:!1}))}})},rp=async w=>{console.log("Generating audio for paragraph:",w);try{const N=await W.generateParagraphAudio(w);i(_=>_.map(R=>R.id===w?N:R)),a(_=>_.map(R=>R.id===w?N:R)),on(o.map(_=>_.id===w?N:_)),re(!0),setTimeout(()=>re(!1),2e3)}catch(N){console.error("Failed to generate audio:",N);let _="\u751F\u6210\u97F3\u9891\u5931\u8D25";typeof N=="string"?_=N:N instanceof Error?_=N.message:N&&typeof N=="object"&&(_=N.message||N.error||String(N)),mi("\u751F\u6210\u97F3\u9891\u5931\u8D25"),hi(_),nn(!0)}},op=async()=>{if(!t)return;const w=o.filter(N=>!N.audioPath);if(w.length===0){ot({isOpen:!0,title:"\u91CD\u65B0\u751F\u6210\u97F3\u9891",message:"\u6240\u6709\u6BB5\u843D\u90FD\u5DF2\u6709\u97F3\u9891\uFF0C\u786E\u5B9A\u8981\u91CD\u65B0\u751F\u6210\u5417\uFF1F",type:"warning",onConfirm:()=>{ot(N=>({...N,isOpen:!1})),Ya(o.map(N=>N.id))}});return}ot({isOpen:!0,title:"\u751F\u6210\u7AE0\u8282\u97F3\u9891",message:`\u5C06\u4E3A ${w.length} \u4E2A\u6BB5\u843D\u751F\u6210\u97F3\u9891\uFF0C\u786E\u5B9A\u7EE7\u7EED\u5417\uFF1F`,type:"info",onConfirm:()=>{ot(N=>({...N,isOpen:!1})),Ya(w.map(N=>N.id))}})},Ya=async w=>{if(!!t){yi(!0),Tr(0);try{const N=await W.generateChapterAudio(parseInt(t)),_=new Map(N.map(ye=>[ye.id,ye])),R=o.map(ye=>_.get(ye.id)||ye);i(R),a(R),on(R),Tr(100),re(!0),setTimeout(()=>{re(!1),yi(!1),Tr(0)},1500)}catch(N){console.error("Failed to generate chapter audio:",N),yi(!1),Tr(0);let _="\u751F\u6210\u7AE0\u8282\u97F3\u9891\u5931\u8D25";typeof N=="string"?_=N:N instanceof Error?_=N.message:N&&typeof N=="object"&&(_=N.message||N.error||String(N)),mi("\u751F\u6210\u7AE0\u8282\u97F3\u9891\u5931\u8D25"),hi(_),nn(!0)}}},Rr=()=>{_r.current&&(clearInterval(_r.current),_r.current=null)};k.exports.useEffect(()=>()=>{Rr()},[]);const Xa=async()=>{if(!t)return;j(!0),Ie(0),Ye("\u9884\u8BA1 3-5 \u5206\u949F");const w=240;let N=0;Rr(),_r.current=window.setInterval(()=>{N+=1;const _=Math.min(N/w*100,95),R=Math.max(w-N,0),ye=Math.floor(R/60),In=R%60;Ie(_),R>0?Ye(`\u9884\u8BA1\u5269\u4F59 ${ye}\u5206${In}\u79D2`):Ye("\u5373\u5C06\u5B8C\u6210...")},1e3);try{const _=await W.splitParagraph(parseInt(t));Ie(100),Ye("\u5B8C\u6210\uFF01"),await new Promise(ye=>setTimeout(ye,500));const R=[..._].sort((ye,In)=>ye.orderIndex-In.orderIndex);i(R),a(R),on(R),$(new Set),R.length>0?ln(R[0].id):C(null),re(!0),setTimeout(()=>re(!1),2e3),Rr(),j(!1),setTimeout(()=>{Ie(0),Ye("")},1e3)}catch(_){console.error("Failed to generate script:",_),Rr(),j(!1);let R="\u672A\u77E5\u9519\u8BEF";typeof _=="string"?R=_:_ instanceof Error?R=_.message:_&&typeof _=="object"&&(R=_.message||_.error||String(_)),console.log("Setting error message:",R),mi("\u751F\u6210\u811A\u672C\u5931\u8D25"),hi(R),nn(!0),setTimeout(()=>{Ie(0),Ye("")},500)}},ip=async()=>{if(!!t){if(o.length>0){ot({isOpen:!0,title:"\u91CD\u65B0\u751F\u6210\u811A\u672C",message:"\u5DF2\u5B58\u5728\u6BB5\u843D\uFF0C\u786E\u5B9A\u8981\u91CD\u65B0\u751F\u6210\u5417\uFF1F\u8FD9\u5C06\u8986\u76D6\u73B0\u6709\u6BB5\u843D\u3002",type:"warning",onConfirm:()=>{ot(w=>({...w,isOpen:!1})),Xa()}});return}Xa()}},lp=()=>{f(!T)},Za=w=>{const N=Math.floor(w/60),_=Math.floor(w%60),R=Math.floor(w%1*100);return`${N.toString().padStart(2,"0")}:${_.toString().padStart(2,"0")}:${R.toString().padStart(2,"0")}`},xi=w=>({\u65C1\u767D:"#00A8FF",\u7537\u4E3B\u89D2:"#FF6B6B",\u5973\u4E3B\u89D2:"#FF8EC7"})[w]||"#95A5A6",ap=()=>{const w=new Set;return u.forEach(N=>{N.name&&w.add(N.name)}),o.forEach(N=>{N.speaker&&w.add(N.speaker)}),Array.from(w).sort()},sp=()=>{const w=ap();if(!fi.trim())return w;const N=fi.toLowerCase();return w.filter(_=>_.toLowerCase().includes(N))},wi=E?o.find(w=>w.id===E):null;return m?s("div",{className:"chapter-editor",children:h("div",{className:"loading-container",children:[s("div",{className:"spinner"}),s("p",{children:"\u52A0\u8F7D\u4E2D..."})]})}):n?h("div",{className:"chapter-editor",children:[h("header",{className:"editor-header",children:[h("div",{className:"header-left",children:[h(sr,{to:`/project/${e}`,className:"back-button",children:[s(Vo,{size:18}),s("span",{children:"\u8FD4\u56DE"})]}),s("div",{className:"divider"}),h("div",{className:"chapter-title",children:[s("h1",{children:n.title}),s("p",{className:"subtitle",children:"\u7AE0\u8282\u7F16\u8F91 \xB7 \u65F6\u95F4\u8F74\u89C6\u56FE"})]}),B.size>0&&h("div",{className:"dirty-indicator-wrapper",children:[h("div",{className:"dirty-indicator",children:[s(no,{size:14}),h("span",{children:[B.size," \u4E2A\u672A\u4FDD\u5B58\u4FEE\u6539"]})]}),h("button",{className:"undo-btn",onClick:tp,disabled:M,children:[s(ct,{size:14}),"\u64A4\u9500"]})]}),ae&&h("div",{className:"save-success",children:[s(Oh,{size:14}),s("span",{children:"\u5DF2\u4FDD\u5B58"})]})]}),h("div",{className:"header-right",children:[h("button",{className:"btn-secondary",onClick:Zd,children:[s(Ql,{size:16}),"\u7F16\u8F91\u6587\u672C"]}),h("button",{className:`btn-save ${B.size>0?"dirty":""}`,onClick:ep,disabled:B.size===0||M,children:[s(Wo,{size:16}),M?"\u4FDD\u5B58\u4E2D...":"\u4FDD\u5B58"]}),h("div",{className:"generate-button-wrapper",children:[h("button",{className:"btn-primary audio-generate-btn",onClick:op,disabled:gi||o.length===0,children:[s(xu,{size:16}),gi?"\u751F\u6210\u97F3\u9891\u4E2D...":"\u751F\u6210\u7AE0\u8282\u97F3\u9891"]}),gi&&h("div",{className:"generate-progress-container",children:[s("div",{className:"progress-bar",children:s("div",{className:"progress-bar-fill",style:{width:`${Ga}%`}})}),s("div",{className:"progress-info",children:h("span",{className:"progress-percent",children:[Math.round(Ga),"%"]})})]})]}),h("div",{className:"generate-button-wrapper",children:[h("button",{className:"btn-primary",onClick:ip,disabled:z,children:[s(Kd,{size:16}),z?"\u751F\u6210\u4E2D...":o.length>0?"\u91CD\u65B0\u751F\u6210\u811A\u672C":"\u751F\u6210\u811A\u672C"]}),z&&h("div",{className:"generate-progress-container",children:[s("div",{className:"progress-bar",children:s("div",{className:"progress-bar-fill",style:{width:`${O}%`}})}),h("div",{className:"progress-info",children:[h("span",{className:"progress-percent",children:[Math.round(O),"%"]}),s("span",{className:"progress-time",children:nt})]})]})]})]})]}),h("div",{className:"editor-main",children:[h("div",{className:"upper-section",children:[h("div",{className:"paragraph-list-panel",children:[h("div",{className:"panel-header",children:[s("h2",{children:"\u6BB5\u843D\u5217\u8868"}),h("span",{className:"paragraph-count",children:[o.length," \u4E2A\u6BB5\u843D"]})]}),s("div",{className:"paragraph-list-content",children:o.map((w,N)=>h("div",{className:`paragraph-item ${E===w.id?"selected":""}`,onClick:()=>ln(w.id),children:[h("div",{className:"paragraph-item-left",children:[s("div",{className:"paragraph-index",children:N+1}),s("div",{className:"speaker-dot",style:{backgroundColor:xi(w.speaker)}})]}),h("div",{className:"paragraph-item-content",children:[h("div",{className:"paragraph-item-header",children:[s("span",{className:"speaker-label",style:{color:xi(w.speaker)},children:w.speaker||"\u65C1\u767D"}),h("span",{className:"paragraph-duration",children:[s(Wa,{size:10}),(w.duration||0).toFixed(1),"s"]}),Mr(w.id)&&s("span",{className:"dirty-dot",title:"\u6709\u672A\u4FDD\u5B58\u7684\u4FEE\u6539"})]}),s("p",{className:"paragraph-item-text",children:w.content})]}),s("div",{className:"paragraph-item-right",children:w.audioPath?s("span",{className:"has-audio-icon",children:s(Wd,{size:14})}):null})]},w.id))})]}),h("div",{className:"paragraph-detail-panel",children:[h("div",{className:"panel-header",children:[s("h2",{children:"\u6BB5\u843D\u8BE6\u60C5"}),E&&Mr(E)&&h("span",{className:"dirty-badge",children:[s(no,{size:12}),"\u672A\u4FDD\u5B58"]})]}),wi?h("div",{className:"panel-content",children:[h("div",{className:"form-group",children:[s("label",{children:"\u6587\u672C\u5185\u5BB9"}),s("textarea",{value:A.content,onChange:w=>Rn("content",w.target.value),rows:5})]}),s("div",{className:"form-row",children:h("div",{className:"form-group full-width",children:[s("label",{children:"\u8BF4\u8BDD\u89D2\u8272"}),h("div",{className:"speaker-select-wrapper",ref:vi,children:[h("div",{className:"speaker-select-input",onClick:()=>{rt(!Xe),Ha("")},children:[s("span",{className:A.speaker?"":"placeholder",children:A.speaker||"\u65C1\u767D"}),s("span",{className:"dropdown-arrow",children:"\u25BC"})]}),Xe&&h("div",{className:"speaker-dropdown",children:[s("input",{type:"text",className:"speaker-search-input",placeholder:"\u641C\u7D22\u89D2\u8272...",value:fi,onChange:w=>Ha(w.target.value),autoFocus:!0}),h("div",{className:"speaker-options",children:[s("div",{className:`speaker-option ${A.speaker?"selected":""}`,onClick:()=>{Rn("speaker",""),rt(!1)},children:"\u65C1\u767D"}),sp().map(w=>s("div",{className:`speaker-option ${A.speaker===w?"selected":""}`,onClick:()=>{Rn("speaker",w),rt(!1)},children:w},w))]})]})]})]})}),h("div",{className:"form-row",children:[h("div",{className:"form-group",children:[s("label",{children:"\u60C5\u611F"}),s("select",{value:A.tone,onChange:w=>Rn("tone",w.target.value),children:m1.map(w=>s("option",{value:w.value,children:w.label},w.value))})]}),h("div",{className:"form-group",children:[h("div",{className:"label-row",children:[s("label",{children:"\u8BED\u901F"}),s("span",{className:"value-badge",children:A.speed.toFixed(2)})]}),s("input",{type:"range",min:"0.5",max:"2.0",step:"0.05",value:A.speed,onChange:w=>Rn("speed",parseFloat(w.target.value))}),h("div",{className:"range-labels",children:[s("span",{children:"0.5x"}),s("span",{children:"1.0x"}),s("span",{children:"2.0x"})]})]})]}),h("div",{className:"action-buttons",children:[h("button",{className:"btn-generate",onClick:()=>rp(wi.id),children:[s(xu,{size:16}),"\u751F\u6210\u97F3\u9891"]}),h("button",{className:"btn-delete",onClick:()=>np(wi.id),children:[s(pi,{size:16}),"\u5220\u9664"]})]})]}):h("div",{className:"empty-properties",children:[s(yu,{size:40}),s("p",{children:"\u9009\u62E9\u4E00\u4E2A\u6BB5\u843D\u6765\u7F16\u8F91\u5C5E\u6027"})]})]})]}),s("div",{className:"lower-section",children:h("div",{className:"timeline-panel",children:[s("div",{className:"panel-header",children:h("div",{className:"transport-controls",children:[s("button",{className:`play-btn ${T?"playing":""}`,onClick:lp,children:T?s(Yh,{size:20}):s(Xh,{size:20})}),h("div",{className:"time-display",children:[Za(d)," / ",Za(v)]})]})}),h("div",{className:"timeline-container",ref:Yd,children:[s("div",{className:"timeline-ruler",children:Array.from({length:Math.ceil(v)+1}).map((w,N)=>s("div",{className:"ruler-mark",style:{left:`${N/v*100}%`},children:h("span",{className:"ruler-label",children:[N,"s"]})},N))}),s("div",{className:"timeline-track",children:qd.map(w=>h("div",{className:`timeline-clip ${E===w.id?"selected":""} ${Mr(w.id)?"dirty":""}`,style:{left:`${w.start/v*100}%`,width:`${(w.end-w.start)/v*100}%`,backgroundColor:xi(w.paragraph.speaker)},onClick:()=>ln(w.id),children:[h("div",{className:"clip-content",children:[h("div",{className:"clip-speaker",children:[s(Gh,{size:14}),w.paragraph.speaker||"\u65C1\u767D"]}),h("div",{className:"clip-text",children:[w.paragraph.content.slice(0,40),w.paragraph.content.length>40?"...":""]})]}),Mr(w.id)&&s("div",{className:"clip-dirty-indicator",children:s(no,{size:10})}),w.paragraph.audioPath&&s("div",{className:"clip-indicator",children:s(Qh,{size:12})})]},w.id))}),s("div",{className:"playhead",style:{left:`${d/v*100}%`}})]})]})})]}),tn&&s("div",{className:"text-editor-modal",children:h("div",{className:"text-editor-content",children:[h("div",{className:"text-editor-header",children:[h("div",{className:"text-editor-title",children:[s(Ql,{size:20}),s("h2",{children:"\u7F16\u8F91\u7AE0\u8282\u6587\u672C"})]}),s("button",{className:"modal-close",onClick:()=>gt(!1),disabled:P,children:s(ct,{size:24})})]}),s("div",{className:"text-editor-body",children:s("textarea",{value:Ge,onChange:w=>Qe(w.target.value),placeholder:"\u8BF7\u8F93\u5165\u7AE0\u8282\u5185\u5BB9...",className:"chapter-textarea"})}),h("div",{className:"text-editor-footer",children:[s("button",{className:"btn-secondary",onClick:()=>{gt(!1),n&&Qe(n.content||"")},disabled:P,children:"\u53D6\u6D88"}),h("button",{className:"btn-primary",onClick:Jd,disabled:P,children:[s(Wo,{size:16}),P?"\u4FDD\u5B58\u4E2D...":"\u4FDD\u5B58"]})]})]})}),s(Hd,{isOpen:rn.isOpen,title:rn.title,message:rn.message,type:rn.type,onConfirm:()=>{rn.onConfirm&&rn.onConfirm()},onCancel:()=>ot(w=>({...w,isOpen:!1}))}),Gd&&s("div",{className:"error-modal",children:h("div",{className:"error-modal-content",children:[h("div",{className:"error-modal-header",children:[h("div",{className:"error-modal-title",children:[s(no,{size:24,className:"error-icon"}),s("h2",{children:Qd})]}),s("button",{className:"modal-close",onClick:()=>nn(!1),children:s(ct,{size:24})})]}),h("div",{className:"error-modal-body",children:[s("p",{className:"error-message-text",children:It}),(It==null?void 0:It.includes("API Key"))&&h("div",{className:"error-hint-box",children:[s(yu,{size:16}),s("span",{children:"\u8BF7\u524D\u5F80\u9879\u76EE\u8BE6\u60C5\u9875\u914D\u7F6E API Key"})]})]}),h("div",{className:"error-modal-footer",children:[s("button",{className:"btn-primary",onClick:()=>nn(!1),children:"\u77E5\u9053\u4E86"}),(It==null?void 0:It.includes("API Key"))&&e&&s(sr,{to:`/project/${e}`,className:"btn-secondary",onClick:()=>nn(!1),children:"\u524D\u5F80\u914D\u7F6E"})]})]})}),s("style",{children:`
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
      `})]}):s("div",{className:"chapter-editor",children:h("div",{className:"error-container",children:[s("h2",{children:"\u7AE0\u8282\u4E0D\u5B58\u5728"}),h(sr,{to:`/project/${e}`,className:"btn-primary",children:[s(Vo,{size:16}),"\u8FD4\u56DE\u9879\u76EE"]})]})})};function D1(){return s(Lh,{children:s("div",{className:"app",children:h(Dh,{children:[s(yo,{path:"/",element:s(Rm,{})}),s(yo,{path:"/project/:id",element:s(b1,{})}),s(yo,{path:"/project/:projectId/chapter/:chapterId",element:s(A1,{})})]})})})}const P1="Frontend",sn={debug:console.debug.bind(console),info:console.info.bind(console),warn:console.warn.bind(console),error:console.error.bind(console),log:console.log.bind(console)};let wu=!1;const z1=()=>typeof window.go<"u",Qn=(e,...t)=>{if(!!z1())try{const n=t.map(r=>{if(typeof r=="object")try{return JSON.stringify(r)}catch{return String(r)}return String(r)}).join(" ");W.log(e,n,P1)}catch(n){sn.debug("Failed to send log to backend:",n)}},B1=()=>{wu||(wu=!0,console.debug=(...e)=>{sn.debug(...e),Qn("debug",...e)},console.info=(...e)=>{sn.info(...e),Qn("info",...e)},console.warn=(...e)=>{sn.warn(...e),Qn("warn",...e)},console.error=(...e)=>{sn.error(...e),Qn("error",...e)},console.log=(...e)=>{sn.log(...e),Qn("info",...e)},window.addEventListener("unhandledrejection",e=>{console.error("Unhandled Promise rejection:",e.reason)}),window.addEventListener("error",e=>{console.error("Uncaught error:",e.message,"at",e.filename,":",e.lineno,":",e.colno)}),console.info("\u65E5\u5FD7\u7CFB\u7EDF\u521D\u59CB\u5316\u5B8C\u6210"))};B1();const j1=document.getElementById("root"),L1=Dd(j1);L1.render(s(ql.StrictMode,{children:s(D1,{})}));
