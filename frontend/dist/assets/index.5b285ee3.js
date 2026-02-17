function ld(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function id(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var F={exports:{}},T={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ar=Symbol.for("react.element"),ad=Symbol.for("react.portal"),ud=Symbol.for("react.fragment"),sd=Symbol.for("react.strict_mode"),cd=Symbol.for("react.profiler"),dd=Symbol.for("react.provider"),pd=Symbol.for("react.context"),fd=Symbol.for("react.forward_ref"),hd=Symbol.for("react.suspense"),md=Symbol.for("react.memo"),gd=Symbol.for("react.lazy"),da=Symbol.iterator;function vd(e){return e===null||typeof e!="object"?null:(e=da&&e[da]||e["@@iterator"],typeof e=="function"?e:null)}var Bu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_u=Object.assign,ju={};function mn(e,t,n){this.props=e,this.context=t,this.refs=ju,this.updater=n||Bu}mn.prototype.isReactComponent={};mn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};mn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Lu(){}Lu.prototype=mn.prototype;function hi(e,t,n){this.props=e,this.context=t,this.refs=ju,this.updater=n||Bu}var mi=hi.prototype=new Lu;mi.constructor=hi;_u(mi,mn.prototype);mi.isPureReactComponent=!0;var pa=Array.isArray,Tu=Object.prototype.hasOwnProperty,gi={current:null},Iu={key:!0,ref:!0,__self:!0,__source:!0};function Ru(e,t,n){var r,o={},l=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)Tu.call(t,r)&&!Iu.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+2];o.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:ar,type:e,key:l,ref:i,props:o,_owner:gi.current}}function yd(e,t){return{$$typeof:ar,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function vi(e){return typeof e=="object"&&e!==null&&e.$$typeof===ar}function xd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var fa=/\/+/g;function Vo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?xd(""+e.key):t.toString(36)}function jr(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case ar:case ad:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+Vo(i,0):r,pa(o)?(n="",e!=null&&(n=e.replace(fa,"$&/")+"/"),jr(o,t,n,"",function(s){return s})):o!=null&&(vi(o)&&(o=yd(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(fa,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",pa(e))for(var a=0;a<e.length;a++){l=e[a];var u=r+Vo(l,a);i+=jr(l,t,n,u,o)}else if(u=vd(e),typeof u=="function")for(e=u.call(e),a=0;!(l=e.next()).done;)l=l.value,u=r+Vo(l,a++),i+=jr(l,t,n,u,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function gr(e,t,n){if(e==null)return e;var r=[],o=0;return jr(e,r,"","",function(l){return t.call(n,l,o++)}),r}function wd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var fe={current:null},Lr={transition:null},kd={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:Lr,ReactCurrentOwner:gi};function Mu(){throw Error("act(...) is not supported in production builds of React.")}T.Children={map:gr,forEach:function(e,t,n){gr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return gr(e,function(){t++}),t},toArray:function(e){return gr(e,function(t){return t})||[]},only:function(e){if(!vi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};T.Component=mn;T.Fragment=ud;T.Profiler=cd;T.PureComponent=hi;T.StrictMode=sd;T.Suspense=hd;T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kd;T.act=Mu;T.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=_u({},e.props),o=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=gi.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)Tu.call(t,u)&&!Iu.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var s=0;s<u;s++)a[s]=arguments[s+2];r.children=a}return{$$typeof:ar,type:e.type,key:o,ref:l,props:r,_owner:i}};T.createContext=function(e){return e={$$typeof:pd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:dd,_context:e},e.Consumer=e};T.createElement=Ru;T.createFactory=function(e){var t=Ru.bind(null,e);return t.type=e,t};T.createRef=function(){return{current:null}};T.forwardRef=function(e){return{$$typeof:fd,render:e}};T.isValidElement=vi;T.lazy=function(e){return{$$typeof:gd,_payload:{_status:-1,_result:e},_init:wd}};T.memo=function(e,t){return{$$typeof:md,type:e,compare:t===void 0?null:t}};T.startTransition=function(e){var t=Lr.transition;Lr.transition={};try{e()}finally{Lr.transition=t}};T.unstable_act=Mu;T.useCallback=function(e,t){return fe.current.useCallback(e,t)};T.useContext=function(e){return fe.current.useContext(e)};T.useDebugValue=function(){};T.useDeferredValue=function(e){return fe.current.useDeferredValue(e)};T.useEffect=function(e,t){return fe.current.useEffect(e,t)};T.useId=function(){return fe.current.useId()};T.useImperativeHandle=function(e,t,n){return fe.current.useImperativeHandle(e,t,n)};T.useInsertionEffect=function(e,t){return fe.current.useInsertionEffect(e,t)};T.useLayoutEffect=function(e,t){return fe.current.useLayoutEffect(e,t)};T.useMemo=function(e,t){return fe.current.useMemo(e,t)};T.useReducer=function(e,t,n){return fe.current.useReducer(e,t,n)};T.useRef=function(e){return fe.current.useRef(e)};T.useState=function(e){return fe.current.useState(e)};T.useSyncExternalStore=function(e,t,n){return fe.current.useSyncExternalStore(e,t,n)};T.useTransition=function(){return fe.current.useTransition()};T.version="18.3.1";(function(e){e.exports=T})(F);const bu=id(F.exports),vl=ld({__proto__:null,default:bu},[F.exports]);var Ou={exports:{}},Ne={},Uu={exports:{}},$u={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,j){var L=z.length;z.push(j);e:for(;0<L;){var S=L-1>>>1,_=z[S];if(0<o(_,j))z[S]=j,z[L]=_,L=S;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var j=z[0],L=z.pop();if(L!==j){z[0]=L;e:for(var S=0,_=z.length,ie=_>>>1;S<ie;){var me=2*(S+1)-1,$o=z[me],Nt=me+1,mr=z[Nt];if(0>o($o,L))Nt<_&&0>o(mr,$o)?(z[S]=mr,z[Nt]=L,S=Nt):(z[S]=$o,z[me]=L,S=me);else if(Nt<_&&0>o(mr,L))z[S]=mr,z[Nt]=L,S=Nt;else break e}}return j}function o(z,j){var L=z.sortIndex-j.sortIndex;return L!==0?L:z.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var u=[],s=[],g=1,m=null,h=3,y=!1,E=!1,k=!1,A=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(z){for(var j=n(s);j!==null;){if(j.callback===null)r(s);else if(j.startTime<=z)r(s),j.sortIndex=j.expirationTime,t(u,j);else break;j=n(s)}}function x(z){if(k=!1,f(z),!E)if(n(u)!==null)E=!0,xn(w);else{var j=n(s);j!==null&&wn(x,j.startTime-z)}}function w(z,j){E=!1,k&&(k=!1,p(B),B=-1),y=!0;var L=h;try{for(f(j),m=n(u);m!==null&&(!(m.expirationTime>j)||z&&!ke());){var S=m.callback;if(typeof S=="function"){m.callback=null,h=m.priorityLevel;var _=S(m.expirationTime<=j);j=e.unstable_now(),typeof _=="function"?m.callback=_:m===n(u)&&r(u),f(j)}else r(u);m=n(u)}if(m!==null)var ie=!0;else{var me=n(s);me!==null&&wn(x,me.startTime-j),ie=!1}return ie}finally{m=null,h=L,y=!1}}var N=!1,P=null,B=-1,V=5,I=-1;function ke(){return!(e.unstable_now()-I<V)}function Ue(){if(P!==null){var z=e.unstable_now();I=z;var j=!0;try{j=P(!0,z)}finally{j?Ft():(N=!1,P=null)}}else N=!1}var Ft;if(typeof c=="function")Ft=function(){c(Ue)};else if(typeof MessageChannel<"u"){var hr=new MessageChannel,Uo=hr.port2;hr.port1.onmessage=Ue,Ft=function(){Uo.postMessage(null)}}else Ft=function(){A(Ue,0)};function xn(z){P=z,N||(N=!0,Ft())}function wn(z,j){B=A(function(){z(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){E||y||(E=!0,xn(w))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(z){switch(h){case 1:case 2:case 3:var j=3;break;default:j=h}var L=h;h=j;try{return z()}finally{h=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,j){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var L=h;h=z;try{return j()}finally{h=L}},e.unstable_scheduleCallback=function(z,j,L){var S=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?S+L:S):L=S,z){case 1:var _=-1;break;case 2:_=250;break;case 5:_=1073741823;break;case 4:_=1e4;break;default:_=5e3}return _=L+_,z={id:g++,callback:j,priorityLevel:z,startTime:L,expirationTime:_,sortIndex:-1},L>S?(z.sortIndex=L,t(s,z),n(u)===null&&z===n(s)&&(k?(p(B),B=-1):k=!0,wn(x,L-S))):(z.sortIndex=_,t(u,z),E||y||(E=!0,xn(w))),z},e.unstable_shouldYield=ke,e.unstable_wrapCallback=function(z){var j=h;return function(){var L=h;h=j;try{return z.apply(this,arguments)}finally{h=L}}}})($u);(function(e){e.exports=$u})(Uu);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ed=F.exports,Fe=Uu.exports;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vu=new Set,$n={};function bt(e,t){un(e,t),un(e+"Capture",t)}function un(e,t){for($n[e]=t,e=0;e<t.length;e++)Vu.add(t[e])}var Je=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yl=Object.prototype.hasOwnProperty,Sd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ha={},ma={};function Cd(e){return yl.call(ma,e)?!0:yl.call(ha,e)?!1:Sd.test(e)?ma[e]=!0:(ha[e]=!0,!1)}function Fd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Nd(e,t,n,r){if(t===null||typeof t>"u"||Fd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function he(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new he(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];le[t]=new he(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new he(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new he(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new he(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new he(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new he(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new he(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new he(e,5,!1,e.toLowerCase(),null,!1,!1)});var yi=/[\-:]([a-z])/g;function xi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(yi,xi);le[t]=new he(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(yi,xi);le[t]=new he(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(yi,xi);le[t]=new he(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new he(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new he(e,1,!1,e.toLowerCase(),null,!0,!0)});function wi(e,t,n,r){var o=le.hasOwnProperty(t)?le[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Nd(t,n,o,r)&&(n=null),r||o===null?Cd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var nt=Ed.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vr=Symbol.for("react.element"),Vt=Symbol.for("react.portal"),Wt=Symbol.for("react.fragment"),ki=Symbol.for("react.strict_mode"),xl=Symbol.for("react.profiler"),Wu=Symbol.for("react.provider"),Hu=Symbol.for("react.context"),Ei=Symbol.for("react.forward_ref"),wl=Symbol.for("react.suspense"),kl=Symbol.for("react.suspense_list"),Si=Symbol.for("react.memo"),ot=Symbol.for("react.lazy"),Qu=Symbol.for("react.offscreen"),ga=Symbol.iterator;function kn(e){return e===null||typeof e!="object"?null:(e=ga&&e[ga]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,Wo;function Dn(e){if(Wo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Wo=t&&t[1]||""}return`
`+Wo+e}var Ho=!1;function Qo(e,t){if(!e||Ho)return"";Ho=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(s){var r=s}Reflect.construct(e,[],t)}else{try{t.call()}catch(s){r=s}e.call(t.prototype)}else{try{throw Error()}catch(s){r=s}e()}}catch(s){if(s&&r&&typeof s.stack=="string"){for(var o=s.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,a=l.length-1;1<=i&&0<=a&&o[i]!==l[a];)a--;for(;1<=i&&0<=a;i--,a--)if(o[i]!==l[a]){if(i!==1||a!==1)do if(i--,a--,0>a||o[i]!==l[a]){var u=`
`+o[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=a);break}}}finally{Ho=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Dn(e):""}function Pd(e){switch(e.tag){case 5:return Dn(e.type);case 16:return Dn("Lazy");case 13:return Dn("Suspense");case 19:return Dn("SuspenseList");case 0:case 2:case 15:return e=Qo(e.type,!1),e;case 11:return e=Qo(e.type.render,!1),e;case 1:return e=Qo(e.type,!0),e;default:return""}}function El(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wt:return"Fragment";case Vt:return"Portal";case xl:return"Profiler";case ki:return"StrictMode";case wl:return"Suspense";case kl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Hu:return(e.displayName||"Context")+".Consumer";case Wu:return(e._context.displayName||"Context")+".Provider";case Ei:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Si:return t=e.displayName||null,t!==null?t:El(e.type)||"Memo";case ot:t=e._payload,e=e._init;try{return El(e(t))}catch{}}return null}function zd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return El(t);case 8:return t===ki?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function wt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ku(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Dd(e){var t=Ku(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function yr(e){e._valueTracker||(e._valueTracker=Dd(e))}function Gu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ku(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Qr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Sl(e,t){var n=t.checked;return K({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function va(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=wt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Yu(e,t){t=t.checked,t!=null&&wi(e,"checked",t,!1)}function Cl(e,t){Yu(e,t);var n=wt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Fl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Fl(e,t.type,wt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ya(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Fl(e,t,n){(t!=="number"||Qr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var An=Array.isArray;function tn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+wt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Nl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return K({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function xa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(An(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:wt(n)}}function Xu(e,t){var n=wt(t.value),r=wt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function wa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Zu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Zu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xr,Ju=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(xr=xr||document.createElement("div"),xr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=xr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Vn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var jn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ad=["Webkit","ms","Moz","O"];Object.keys(jn).forEach(function(e){Ad.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),jn[t]=jn[e]})});function qu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||jn.hasOwnProperty(e)&&jn[e]?(""+t).trim():t+"px"}function es(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=qu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Bd=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zl(e,t){if(t){if(Bd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function Dl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Al=null;function Ci(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bl=null,nn=null,rn=null;function ka(e){if(e=cr(e)){if(typeof Bl!="function")throw Error(C(280));var t=e.stateNode;t&&(t=Co(t),Bl(e.stateNode,e.type,t))}}function ts(e){nn?rn?rn.push(e):rn=[e]:nn=e}function ns(){if(nn){var e=nn,t=rn;if(rn=nn=null,ka(e),t)for(e=0;e<t.length;e++)ka(t[e])}}function rs(e,t){return e(t)}function os(){}var Ko=!1;function ls(e,t,n){if(Ko)return e(t,n);Ko=!0;try{return rs(e,t,n)}finally{Ko=!1,(nn!==null||rn!==null)&&(os(),ns())}}function Wn(e,t){var n=e.stateNode;if(n===null)return null;var r=Co(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var _l=!1;if(Je)try{var En={};Object.defineProperty(En,"passive",{get:function(){_l=!0}}),window.addEventListener("test",En,En),window.removeEventListener("test",En,En)}catch{_l=!1}function _d(e,t,n,r,o,l,i,a,u){var s=Array.prototype.slice.call(arguments,3);try{t.apply(n,s)}catch(g){this.onError(g)}}var Ln=!1,Kr=null,Gr=!1,jl=null,jd={onError:function(e){Ln=!0,Kr=e}};function Ld(e,t,n,r,o,l,i,a,u){Ln=!1,Kr=null,_d.apply(jd,arguments)}function Td(e,t,n,r,o,l,i,a,u){if(Ld.apply(this,arguments),Ln){if(Ln){var s=Kr;Ln=!1,Kr=null}else throw Error(C(198));Gr||(Gr=!0,jl=s)}}function Ot(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function is(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ea(e){if(Ot(e)!==e)throw Error(C(188))}function Id(e){var t=e.alternate;if(!t){if(t=Ot(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return Ea(o),e;if(l===r)return Ea(o),t;l=l.sibling}throw Error(C(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,a=o.child;a;){if(a===n){i=!0,n=o,r=l;break}if(a===r){i=!0,r=o,n=l;break}a=a.sibling}if(!i){for(a=l.child;a;){if(a===n){i=!0,n=l,r=o;break}if(a===r){i=!0,r=l,n=o;break}a=a.sibling}if(!i)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function as(e){return e=Id(e),e!==null?us(e):null}function us(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=us(e);if(t!==null)return t;e=e.sibling}return null}var ss=Fe.unstable_scheduleCallback,Sa=Fe.unstable_cancelCallback,Rd=Fe.unstable_shouldYield,Md=Fe.unstable_requestPaint,Y=Fe.unstable_now,bd=Fe.unstable_getCurrentPriorityLevel,Fi=Fe.unstable_ImmediatePriority,cs=Fe.unstable_UserBlockingPriority,Yr=Fe.unstable_NormalPriority,Od=Fe.unstable_LowPriority,ds=Fe.unstable_IdlePriority,wo=null,He=null;function Ud(e){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(wo,e,void 0,(e.current.flags&128)===128)}catch{}}var Me=Math.clz32?Math.clz32:Wd,$d=Math.log,Vd=Math.LN2;function Wd(e){return e>>>=0,e===0?32:31-($d(e)/Vd|0)|0}var wr=64,kr=4194304;function Bn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Xr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~o;a!==0?r=Bn(a):(l&=i,l!==0&&(r=Bn(l)))}else i=n&~o,i!==0?r=Bn(i):l!==0&&(r=Bn(l));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Me(t),o=1<<n,r|=e[n],t&=~o;return r}function Hd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-Me(l),a=1<<i,u=o[i];u===-1?((a&n)===0||(a&r)!==0)&&(o[i]=Hd(a,t)):u<=t&&(e.expiredLanes|=a),l&=~a}}function Ll(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ps(){var e=wr;return wr<<=1,(wr&4194240)===0&&(wr=64),e}function Go(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ur(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Me(t),e[t]=n}function Kd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Me(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function Ni(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Me(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var M=0;function fs(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var hs,Pi,ms,gs,vs,Tl=!1,Er=[],dt=null,pt=null,ft=null,Hn=new Map,Qn=new Map,it=[],Gd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ca(e,t){switch(e){case"focusin":case"focusout":dt=null;break;case"dragenter":case"dragleave":pt=null;break;case"mouseover":case"mouseout":ft=null;break;case"pointerover":case"pointerout":Hn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qn.delete(t.pointerId)}}function Sn(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=cr(t),t!==null&&Pi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Yd(e,t,n,r,o){switch(t){case"focusin":return dt=Sn(dt,e,t,n,r,o),!0;case"dragenter":return pt=Sn(pt,e,t,n,r,o),!0;case"mouseover":return ft=Sn(ft,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return Hn.set(l,Sn(Hn.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,Qn.set(l,Sn(Qn.get(l)||null,e,t,n,r,o)),!0}return!1}function ys(e){var t=Dt(e.target);if(t!==null){var n=Ot(t);if(n!==null){if(t=n.tag,t===13){if(t=is(n),t!==null){e.blockedOn=t,vs(e.priority,function(){ms(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Tr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Il(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Al=r,n.target.dispatchEvent(r),Al=null}else return t=cr(n),t!==null&&Pi(t),e.blockedOn=n,!1;t.shift()}return!0}function Fa(e,t,n){Tr(e)&&n.delete(t)}function Xd(){Tl=!1,dt!==null&&Tr(dt)&&(dt=null),pt!==null&&Tr(pt)&&(pt=null),ft!==null&&Tr(ft)&&(ft=null),Hn.forEach(Fa),Qn.forEach(Fa)}function Cn(e,t){e.blockedOn===t&&(e.blockedOn=null,Tl||(Tl=!0,Fe.unstable_scheduleCallback(Fe.unstable_NormalPriority,Xd)))}function Kn(e){function t(o){return Cn(o,e)}if(0<Er.length){Cn(Er[0],e);for(var n=1;n<Er.length;n++){var r=Er[n];r.blockedOn===e&&(r.blockedOn=null)}}for(dt!==null&&Cn(dt,e),pt!==null&&Cn(pt,e),ft!==null&&Cn(ft,e),Hn.forEach(t),Qn.forEach(t),n=0;n<it.length;n++)r=it[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<it.length&&(n=it[0],n.blockedOn===null);)ys(n),n.blockedOn===null&&it.shift()}var on=nt.ReactCurrentBatchConfig,Zr=!0;function Zd(e,t,n,r){var o=M,l=on.transition;on.transition=null;try{M=1,zi(e,t,n,r)}finally{M=o,on.transition=l}}function Jd(e,t,n,r){var o=M,l=on.transition;on.transition=null;try{M=4,zi(e,t,n,r)}finally{M=o,on.transition=l}}function zi(e,t,n,r){if(Zr){var o=Il(e,t,n,r);if(o===null)ol(e,t,r,Jr,n),Ca(e,r);else if(Yd(o,e,t,n,r))r.stopPropagation();else if(Ca(e,r),t&4&&-1<Gd.indexOf(e)){for(;o!==null;){var l=cr(o);if(l!==null&&hs(l),l=Il(e,t,n,r),l===null&&ol(e,t,r,Jr,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else ol(e,t,r,null,n)}}var Jr=null;function Il(e,t,n,r){if(Jr=null,e=Ci(r),e=Dt(e),e!==null)if(t=Ot(e),t===null)e=null;else if(n=t.tag,n===13){if(e=is(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Jr=e,null}function xs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bd()){case Fi:return 1;case cs:return 4;case Yr:case Od:return 16;case ds:return 536870912;default:return 16}default:return 16}}var ut=null,Di=null,Ir=null;function ws(){if(Ir)return Ir;var e,t=Di,n=t.length,r,o="value"in ut?ut.value:ut.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return Ir=o.slice(e,1<r?1-r:void 0)}function Rr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Sr(){return!0}function Na(){return!1}function Pe(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Sr:Na,this.isPropagationStopped=Na,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Sr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Sr)},persist:function(){},isPersistent:Sr}),t}var gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ai=Pe(gn),sr=K({},gn,{view:0,detail:0}),qd=Pe(sr),Yo,Xo,Fn,ko=K({},sr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fn&&(Fn&&e.type==="mousemove"?(Yo=e.screenX-Fn.screenX,Xo=e.screenY-Fn.screenY):Xo=Yo=0,Fn=e),Yo)},movementY:function(e){return"movementY"in e?e.movementY:Xo}}),Pa=Pe(ko),ep=K({},ko,{dataTransfer:0}),tp=Pe(ep),np=K({},sr,{relatedTarget:0}),Zo=Pe(np),rp=K({},gn,{animationName:0,elapsedTime:0,pseudoElement:0}),op=Pe(rp),lp=K({},gn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ip=Pe(lp),ap=K({},gn,{data:0}),za=Pe(ap),up={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=cp[e])?!!t[e]:!1}function Bi(){return dp}var pp=K({},sr,{key:function(e){if(e.key){var t=up[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Rr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bi,charCode:function(e){return e.type==="keypress"?Rr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Rr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),fp=Pe(pp),hp=K({},ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Da=Pe(hp),mp=K({},sr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bi}),gp=Pe(mp),vp=K({},gn,{propertyName:0,elapsedTime:0,pseudoElement:0}),yp=Pe(vp),xp=K({},ko,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wp=Pe(xp),kp=[9,13,27,32],_i=Je&&"CompositionEvent"in window,Tn=null;Je&&"documentMode"in document&&(Tn=document.documentMode);var Ep=Je&&"TextEvent"in window&&!Tn,ks=Je&&(!_i||Tn&&8<Tn&&11>=Tn),Aa=String.fromCharCode(32),Ba=!1;function Es(e,t){switch(e){case"keyup":return kp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ss(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ht=!1;function Sp(e,t){switch(e){case"compositionend":return Ss(t);case"keypress":return t.which!==32?null:(Ba=!0,Aa);case"textInput":return e=t.data,e===Aa&&Ba?null:e;default:return null}}function Cp(e,t){if(Ht)return e==="compositionend"||!_i&&Es(e,t)?(e=ws(),Ir=Di=ut=null,Ht=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ks&&t.locale!=="ko"?null:t.data;default:return null}}var Fp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _a(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Fp[e.type]:t==="textarea"}function Cs(e,t,n,r){ts(r),t=qr(t,"onChange"),0<t.length&&(n=new Ai("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var In=null,Gn=null;function Np(e){Ts(e,0)}function Eo(e){var t=Gt(e);if(Gu(t))return e}function Pp(e,t){if(e==="change")return t}var Fs=!1;if(Je){var Jo;if(Je){var qo="oninput"in document;if(!qo){var ja=document.createElement("div");ja.setAttribute("oninput","return;"),qo=typeof ja.oninput=="function"}Jo=qo}else Jo=!1;Fs=Jo&&(!document.documentMode||9<document.documentMode)}function La(){In&&(In.detachEvent("onpropertychange",Ns),Gn=In=null)}function Ns(e){if(e.propertyName==="value"&&Eo(Gn)){var t=[];Cs(t,Gn,e,Ci(e)),ls(Np,t)}}function zp(e,t,n){e==="focusin"?(La(),In=t,Gn=n,In.attachEvent("onpropertychange",Ns)):e==="focusout"&&La()}function Dp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Eo(Gn)}function Ap(e,t){if(e==="click")return Eo(t)}function Bp(e,t){if(e==="input"||e==="change")return Eo(t)}function _p(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Oe=typeof Object.is=="function"?Object.is:_p;function Yn(e,t){if(Oe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!yl.call(t,o)||!Oe(e[o],t[o]))return!1}return!0}function Ta(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ia(e,t){var n=Ta(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ta(n)}}function Ps(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ps(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zs(){for(var e=window,t=Qr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Qr(e.document)}return t}function ji(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function jp(e){var t=zs(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ps(n.ownerDocument.documentElement,n)){if(r!==null&&ji(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=Ia(n,l);var i=Ia(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Lp=Je&&"documentMode"in document&&11>=document.documentMode,Qt=null,Rl=null,Rn=null,Ml=!1;function Ra(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ml||Qt==null||Qt!==Qr(r)||(r=Qt,"selectionStart"in r&&ji(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Rn&&Yn(Rn,r)||(Rn=r,r=qr(Rl,"onSelect"),0<r.length&&(t=new Ai("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Qt)))}function Cr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Kt={animationend:Cr("Animation","AnimationEnd"),animationiteration:Cr("Animation","AnimationIteration"),animationstart:Cr("Animation","AnimationStart"),transitionend:Cr("Transition","TransitionEnd")},el={},Ds={};Je&&(Ds=document.createElement("div").style,"AnimationEvent"in window||(delete Kt.animationend.animation,delete Kt.animationiteration.animation,delete Kt.animationstart.animation),"TransitionEvent"in window||delete Kt.transitionend.transition);function So(e){if(el[e])return el[e];if(!Kt[e])return e;var t=Kt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ds)return el[e]=t[n];return e}var As=So("animationend"),Bs=So("animationiteration"),_s=So("animationstart"),js=So("transitionend"),Ls=new Map,Ma="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Et(e,t){Ls.set(e,t),bt(t,[e])}for(var tl=0;tl<Ma.length;tl++){var nl=Ma[tl],Tp=nl.toLowerCase(),Ip=nl[0].toUpperCase()+nl.slice(1);Et(Tp,"on"+Ip)}Et(As,"onAnimationEnd");Et(Bs,"onAnimationIteration");Et(_s,"onAnimationStart");Et("dblclick","onDoubleClick");Et("focusin","onFocus");Et("focusout","onBlur");Et(js,"onTransitionEnd");un("onMouseEnter",["mouseout","mouseover"]);un("onMouseLeave",["mouseout","mouseover"]);un("onPointerEnter",["pointerout","pointerover"]);un("onPointerLeave",["pointerout","pointerover"]);bt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bt("onBeforeInput",["compositionend","keypress","textInput","paste"]);bt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _n="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rp=new Set("cancel close invalid load scroll toggle".split(" ").concat(_n));function ba(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Td(r,t,void 0,e),e.currentTarget=null}function Ts(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var a=r[i],u=a.instance,s=a.currentTarget;if(a=a.listener,u!==l&&o.isPropagationStopped())break e;ba(o,a,s),l=u}else for(i=0;i<r.length;i++){if(a=r[i],u=a.instance,s=a.currentTarget,a=a.listener,u!==l&&o.isPropagationStopped())break e;ba(o,a,s),l=u}}}if(Gr)throw e=jl,Gr=!1,jl=null,e}function U(e,t){var n=t[Vl];n===void 0&&(n=t[Vl]=new Set);var r=e+"__bubble";n.has(r)||(Is(t,e,2,!1),n.add(r))}function rl(e,t,n){var r=0;t&&(r|=4),Is(n,e,r,t)}var Fr="_reactListening"+Math.random().toString(36).slice(2);function Xn(e){if(!e[Fr]){e[Fr]=!0,Vu.forEach(function(n){n!=="selectionchange"&&(Rp.has(n)||rl(n,!1,e),rl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Fr]||(t[Fr]=!0,rl("selectionchange",!1,t))}}function Is(e,t,n,r){switch(xs(t)){case 1:var o=Zd;break;case 4:o=Jd;break;default:o=zi}n=o.bind(null,t,n,e),o=void 0,!_l||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function ol(e,t,n,r,o){var l=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var u=i.tag;if((u===3||u===4)&&(u=i.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;i=i.return}for(;a!==null;){if(i=Dt(a),i===null)return;if(u=i.tag,u===5||u===6){r=l=i;continue e}a=a.parentNode}}r=r.return}ls(function(){var s=l,g=Ci(n),m=[];e:{var h=Ls.get(e);if(h!==void 0){var y=Ai,E=e;switch(e){case"keypress":if(Rr(n)===0)break e;case"keydown":case"keyup":y=fp;break;case"focusin":E="focus",y=Zo;break;case"focusout":E="blur",y=Zo;break;case"beforeblur":case"afterblur":y=Zo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Pa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=tp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=gp;break;case As:case Bs:case _s:y=op;break;case js:y=yp;break;case"scroll":y=qd;break;case"wheel":y=wp;break;case"copy":case"cut":case"paste":y=ip;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Da}var k=(t&4)!==0,A=!k&&e==="scroll",p=k?h!==null?h+"Capture":null:h;k=[];for(var c=s,f;c!==null;){f=c;var x=f.stateNode;if(f.tag===5&&x!==null&&(f=x,p!==null&&(x=Wn(c,p),x!=null&&k.push(Zn(c,x,f)))),A)break;c=c.return}0<k.length&&(h=new y(h,E,null,n,g),m.push({event:h,listeners:k}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&n!==Al&&(E=n.relatedTarget||n.fromElement)&&(Dt(E)||E[qe]))break e;if((y||h)&&(h=g.window===g?g:(h=g.ownerDocument)?h.defaultView||h.parentWindow:window,y?(E=n.relatedTarget||n.toElement,y=s,E=E?Dt(E):null,E!==null&&(A=Ot(E),E!==A||E.tag!==5&&E.tag!==6)&&(E=null)):(y=null,E=s),y!==E)){if(k=Pa,x="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(k=Da,x="onPointerLeave",p="onPointerEnter",c="pointer"),A=y==null?h:Gt(y),f=E==null?h:Gt(E),h=new k(x,c+"leave",y,n,g),h.target=A,h.relatedTarget=f,x=null,Dt(g)===s&&(k=new k(p,c+"enter",E,n,g),k.target=f,k.relatedTarget=A,x=k),A=x,y&&E)t:{for(k=y,p=E,c=0,f=k;f;f=$t(f))c++;for(f=0,x=p;x;x=$t(x))f++;for(;0<c-f;)k=$t(k),c--;for(;0<f-c;)p=$t(p),f--;for(;c--;){if(k===p||p!==null&&k===p.alternate)break t;k=$t(k),p=$t(p)}k=null}else k=null;y!==null&&Oa(m,h,y,k,!1),E!==null&&A!==null&&Oa(m,A,E,k,!0)}}e:{if(h=s?Gt(s):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var w=Pp;else if(_a(h))if(Fs)w=Bp;else{w=Dp;var N=zp}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(w=Ap);if(w&&(w=w(e,s))){Cs(m,w,n,g);break e}N&&N(e,h,s),e==="focusout"&&(N=h._wrapperState)&&N.controlled&&h.type==="number"&&Fl(h,"number",h.value)}switch(N=s?Gt(s):window,e){case"focusin":(_a(N)||N.contentEditable==="true")&&(Qt=N,Rl=s,Rn=null);break;case"focusout":Rn=Rl=Qt=null;break;case"mousedown":Ml=!0;break;case"contextmenu":case"mouseup":case"dragend":Ml=!1,Ra(m,n,g);break;case"selectionchange":if(Lp)break;case"keydown":case"keyup":Ra(m,n,g)}var P;if(_i)e:{switch(e){case"compositionstart":var B="onCompositionStart";break e;case"compositionend":B="onCompositionEnd";break e;case"compositionupdate":B="onCompositionUpdate";break e}B=void 0}else Ht?Es(e,n)&&(B="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(B="onCompositionStart");B&&(ks&&n.locale!=="ko"&&(Ht||B!=="onCompositionStart"?B==="onCompositionEnd"&&Ht&&(P=ws()):(ut=g,Di="value"in ut?ut.value:ut.textContent,Ht=!0)),N=qr(s,B),0<N.length&&(B=new za(B,e,null,n,g),m.push({event:B,listeners:N}),P?B.data=P:(P=Ss(n),P!==null&&(B.data=P)))),(P=Ep?Sp(e,n):Cp(e,n))&&(s=qr(s,"onBeforeInput"),0<s.length&&(g=new za("onBeforeInput","beforeinput",null,n,g),m.push({event:g,listeners:s}),g.data=P))}Ts(m,t)})}function Zn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qr(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=Wn(e,n),l!=null&&r.unshift(Zn(e,l,o)),l=Wn(e,t),l!=null&&r.push(Zn(e,l,o))),e=e.return}return r}function $t(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Oa(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var a=n,u=a.alternate,s=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&s!==null&&(a=s,o?(u=Wn(n,l),u!=null&&i.unshift(Zn(n,u,a))):o||(u=Wn(n,l),u!=null&&i.push(Zn(n,u,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Mp=/\r\n?/g,bp=/\u0000|\uFFFD/g;function Ua(e){return(typeof e=="string"?e:""+e).replace(Mp,`
`).replace(bp,"")}function Nr(e,t,n){if(t=Ua(t),Ua(e)!==t&&n)throw Error(C(425))}function eo(){}var bl=null,Ol=null;function Ul(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $l=typeof setTimeout=="function"?setTimeout:void 0,Op=typeof clearTimeout=="function"?clearTimeout:void 0,$a=typeof Promise=="function"?Promise:void 0,Up=typeof queueMicrotask=="function"?queueMicrotask:typeof $a<"u"?function(e){return $a.resolve(null).then(e).catch($p)}:$l;function $p(e){setTimeout(function(){throw e})}function ll(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Kn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Kn(t)}function ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Va(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var vn=Math.random().toString(36).slice(2),We="__reactFiber$"+vn,Jn="__reactProps$"+vn,qe="__reactContainer$"+vn,Vl="__reactEvents$"+vn,Vp="__reactListeners$"+vn,Wp="__reactHandles$"+vn;function Dt(e){var t=e[We];if(t)return t;for(var n=e.parentNode;n;){if(t=n[qe]||n[We]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Va(e);e!==null;){if(n=e[We])return n;e=Va(e)}return t}e=n,n=e.parentNode}return null}function cr(e){return e=e[We]||e[qe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Co(e){return e[Jn]||null}var Wl=[],Yt=-1;function St(e){return{current:e}}function $(e){0>Yt||(e.current=Wl[Yt],Wl[Yt]=null,Yt--)}function b(e,t){Yt++,Wl[Yt]=e.current,e.current=t}var kt={},ce=St(kt),ye=St(!1),Lt=kt;function sn(e,t){var n=e.type.contextTypes;if(!n)return kt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function xe(e){return e=e.childContextTypes,e!=null}function to(){$(ye),$(ce)}function Wa(e,t,n){if(ce.current!==kt)throw Error(C(168));b(ce,t),b(ye,n)}function Rs(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(C(108,zd(e)||"Unknown",o));return K({},n,r)}function no(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kt,Lt=ce.current,b(ce,e),b(ye,ye.current),!0}function Ha(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=Rs(e,t,Lt),r.__reactInternalMemoizedMergedChildContext=e,$(ye),$(ce),b(ce,e)):$(ye),b(ye,n)}var Ge=null,Fo=!1,il=!1;function Ms(e){Ge===null?Ge=[e]:Ge.push(e)}function Hp(e){Fo=!0,Ms(e)}function Ct(){if(!il&&Ge!==null){il=!0;var e=0,t=M;try{var n=Ge;for(M=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ge=null,Fo=!1}catch(o){throw Ge!==null&&(Ge=Ge.slice(e+1)),ss(Fi,Ct),o}finally{M=t,il=!1}}return null}var Xt=[],Zt=0,ro=null,oo=0,ze=[],De=0,Tt=null,Ye=1,Xe="";function Pt(e,t){Xt[Zt++]=oo,Xt[Zt++]=ro,ro=e,oo=t}function bs(e,t,n){ze[De++]=Ye,ze[De++]=Xe,ze[De++]=Tt,Tt=e;var r=Ye;e=Xe;var o=32-Me(r)-1;r&=~(1<<o),n+=1;var l=32-Me(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,Ye=1<<32-Me(t)+o|n<<o|r,Xe=l+e}else Ye=1<<l|n<<o|r,Xe=e}function Li(e){e.return!==null&&(Pt(e,1),bs(e,1,0))}function Ti(e){for(;e===ro;)ro=Xt[--Zt],Xt[Zt]=null,oo=Xt[--Zt],Xt[Zt]=null;for(;e===Tt;)Tt=ze[--De],ze[De]=null,Xe=ze[--De],ze[De]=null,Ye=ze[--De],ze[De]=null}var Ce=null,Se=null,W=!1,Re=null;function Os(e,t){var n=Ae(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Qa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ce=e,Se=ht(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ce=e,Se=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Tt!==null?{id:Ye,overflow:Xe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ae(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ce=e,Se=null,!0):!1;default:return!1}}function Hl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ql(e){if(W){var t=Se;if(t){var n=t;if(!Qa(e,t)){if(Hl(e))throw Error(C(418));t=ht(n.nextSibling);var r=Ce;t&&Qa(e,t)?Os(r,n):(e.flags=e.flags&-4097|2,W=!1,Ce=e)}}else{if(Hl(e))throw Error(C(418));e.flags=e.flags&-4097|2,W=!1,Ce=e}}}function Ka(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ce=e}function Pr(e){if(e!==Ce)return!1;if(!W)return Ka(e),W=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ul(e.type,e.memoizedProps)),t&&(t=Se)){if(Hl(e))throw Us(),Error(C(418));for(;t;)Os(e,t),t=ht(t.nextSibling)}if(Ka(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Se=ht(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Se=null}}else Se=Ce?ht(e.stateNode.nextSibling):null;return!0}function Us(){for(var e=Se;e;)e=ht(e.nextSibling)}function cn(){Se=Ce=null,W=!1}function Ii(e){Re===null?Re=[e]:Re.push(e)}var Qp=nt.ReactCurrentBatchConfig;function Nn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var a=o.refs;i===null?delete a[l]:a[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function zr(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ga(e){var t=e._init;return t(e._payload)}function $s(e){function t(p,c){if(e){var f=p.deletions;f===null?(p.deletions=[c],p.flags|=16):f.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function o(p,c){return p=yt(p,c),p.index=0,p.sibling=null,p}function l(p,c,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<c?(p.flags|=2,c):f):(p.flags|=2,c)):(p.flags|=1048576,c)}function i(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,c,f,x){return c===null||c.tag!==6?(c=fl(f,p.mode,x),c.return=p,c):(c=o(c,f),c.return=p,c)}function u(p,c,f,x){var w=f.type;return w===Wt?g(p,c,f.props.children,x,f.key):c!==null&&(c.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===ot&&Ga(w)===c.type)?(x=o(c,f.props),x.ref=Nn(p,c,f),x.return=p,x):(x=Wr(f.type,f.key,f.props,null,p.mode,x),x.ref=Nn(p,c,f),x.return=p,x)}function s(p,c,f,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=hl(f,p.mode,x),c.return=p,c):(c=o(c,f.children||[]),c.return=p,c)}function g(p,c,f,x,w){return c===null||c.tag!==7?(c=jt(f,p.mode,x,w),c.return=p,c):(c=o(c,f),c.return=p,c)}function m(p,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=fl(""+c,p.mode,f),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case vr:return f=Wr(c.type,c.key,c.props,null,p.mode,f),f.ref=Nn(p,null,c),f.return=p,f;case Vt:return c=hl(c,p.mode,f),c.return=p,c;case ot:var x=c._init;return m(p,x(c._payload),f)}if(An(c)||kn(c))return c=jt(c,p.mode,f,null),c.return=p,c;zr(p,c)}return null}function h(p,c,f,x){var w=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return w!==null?null:a(p,c,""+f,x);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case vr:return f.key===w?u(p,c,f,x):null;case Vt:return f.key===w?s(p,c,f,x):null;case ot:return w=f._init,h(p,c,w(f._payload),x)}if(An(f)||kn(f))return w!==null?null:g(p,c,f,x,null);zr(p,f)}return null}function y(p,c,f,x,w){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(f)||null,a(c,p,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case vr:return p=p.get(x.key===null?f:x.key)||null,u(c,p,x,w);case Vt:return p=p.get(x.key===null?f:x.key)||null,s(c,p,x,w);case ot:var N=x._init;return y(p,c,f,N(x._payload),w)}if(An(x)||kn(x))return p=p.get(f)||null,g(c,p,x,w,null);zr(c,x)}return null}function E(p,c,f,x){for(var w=null,N=null,P=c,B=c=0,V=null;P!==null&&B<f.length;B++){P.index>B?(V=P,P=null):V=P.sibling;var I=h(p,P,f[B],x);if(I===null){P===null&&(P=V);break}e&&P&&I.alternate===null&&t(p,P),c=l(I,c,B),N===null?w=I:N.sibling=I,N=I,P=V}if(B===f.length)return n(p,P),W&&Pt(p,B),w;if(P===null){for(;B<f.length;B++)P=m(p,f[B],x),P!==null&&(c=l(P,c,B),N===null?w=P:N.sibling=P,N=P);return W&&Pt(p,B),w}for(P=r(p,P);B<f.length;B++)V=y(P,p,B,f[B],x),V!==null&&(e&&V.alternate!==null&&P.delete(V.key===null?B:V.key),c=l(V,c,B),N===null?w=V:N.sibling=V,N=V);return e&&P.forEach(function(ke){return t(p,ke)}),W&&Pt(p,B),w}function k(p,c,f,x){var w=kn(f);if(typeof w!="function")throw Error(C(150));if(f=w.call(f),f==null)throw Error(C(151));for(var N=w=null,P=c,B=c=0,V=null,I=f.next();P!==null&&!I.done;B++,I=f.next()){P.index>B?(V=P,P=null):V=P.sibling;var ke=h(p,P,I.value,x);if(ke===null){P===null&&(P=V);break}e&&P&&ke.alternate===null&&t(p,P),c=l(ke,c,B),N===null?w=ke:N.sibling=ke,N=ke,P=V}if(I.done)return n(p,P),W&&Pt(p,B),w;if(P===null){for(;!I.done;B++,I=f.next())I=m(p,I.value,x),I!==null&&(c=l(I,c,B),N===null?w=I:N.sibling=I,N=I);return W&&Pt(p,B),w}for(P=r(p,P);!I.done;B++,I=f.next())I=y(P,p,B,I.value,x),I!==null&&(e&&I.alternate!==null&&P.delete(I.key===null?B:I.key),c=l(I,c,B),N===null?w=I:N.sibling=I,N=I);return e&&P.forEach(function(Ue){return t(p,Ue)}),W&&Pt(p,B),w}function A(p,c,f,x){if(typeof f=="object"&&f!==null&&f.type===Wt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case vr:e:{for(var w=f.key,N=c;N!==null;){if(N.key===w){if(w=f.type,w===Wt){if(N.tag===7){n(p,N.sibling),c=o(N,f.props.children),c.return=p,p=c;break e}}else if(N.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===ot&&Ga(w)===N.type){n(p,N.sibling),c=o(N,f.props),c.ref=Nn(p,N,f),c.return=p,p=c;break e}n(p,N);break}else t(p,N);N=N.sibling}f.type===Wt?(c=jt(f.props.children,p.mode,x,f.key),c.return=p,p=c):(x=Wr(f.type,f.key,f.props,null,p.mode,x),x.ref=Nn(p,c,f),x.return=p,p=x)}return i(p);case Vt:e:{for(N=f.key;c!==null;){if(c.key===N)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(p,c.sibling),c=o(c,f.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=hl(f,p.mode,x),c.return=p,p=c}return i(p);case ot:return N=f._init,A(p,c,N(f._payload),x)}if(An(f))return E(p,c,f,x);if(kn(f))return k(p,c,f,x);zr(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(p,c.sibling),c=o(c,f),c.return=p,p=c):(n(p,c),c=fl(f,p.mode,x),c.return=p,p=c),i(p)):n(p,c)}return A}var dn=$s(!0),Vs=$s(!1),lo=St(null),io=null,Jt=null,Ri=null;function Mi(){Ri=Jt=io=null}function bi(e){var t=lo.current;$(lo),e._currentValue=t}function Kl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ln(e,t){io=e,Ri=Jt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ve=!0),e.firstContext=null)}function _e(e){var t=e._currentValue;if(Ri!==e)if(e={context:e,memoizedValue:t,next:null},Jt===null){if(io===null)throw Error(C(308));Jt=e,io.dependencies={lanes:0,firstContext:e}}else Jt=Jt.next=e;return t}var At=null;function Oi(e){At===null?At=[e]:At.push(e)}function Ws(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Oi(t)):(n.next=o.next,o.next=n),t.interleaved=n,et(e,r)}function et(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var lt=!1;function Ui(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ze(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function mt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(R&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,et(e,n)}return o=r.interleaved,o===null?(t.next=t,Oi(r)):(t.next=o.next,o.next=t),r.interleaved=t,et(e,n)}function Mr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ni(e,n)}}function Ya(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ao(e,t,n,r){var o=e.updateQueue;lt=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var u=a,s=u.next;u.next=null,i===null?l=s:i.next=s,i=u;var g=e.alternate;g!==null&&(g=g.updateQueue,a=g.lastBaseUpdate,a!==i&&(a===null?g.firstBaseUpdate=s:a.next=s,g.lastBaseUpdate=u))}if(l!==null){var m=o.baseState;i=0,g=s=u=null,a=l;do{var h=a.lane,y=a.eventTime;if((r&h)===h){g!==null&&(g=g.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var E=e,k=a;switch(h=t,y=n,k.tag){case 1:if(E=k.payload,typeof E=="function"){m=E.call(y,m,h);break e}m=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=k.payload,h=typeof E=="function"?E.call(y,m,h):E,h==null)break e;m=K({},m,h);break e;case 2:lt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[a]:h.push(a))}else y={eventTime:y,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},g===null?(s=g=y,u=m):g=g.next=y,i|=h;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;h=a,a=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(1);if(g===null&&(u=m),o.baseState=u,o.firstBaseUpdate=s,o.lastBaseUpdate=g,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);Rt|=i,e.lanes=i,e.memoizedState=m}}function Xa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(C(191,o));o.call(r)}}}var dr={},Qe=St(dr),qn=St(dr),er=St(dr);function Bt(e){if(e===dr)throw Error(C(174));return e}function $i(e,t){switch(b(er,t),b(qn,e),b(Qe,dr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Pl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Pl(t,e)}$(Qe),b(Qe,t)}function pn(){$(Qe),$(qn),$(er)}function Qs(e){Bt(er.current);var t=Bt(Qe.current),n=Pl(t,e.type);t!==n&&(b(qn,e),b(Qe,n))}function Vi(e){qn.current===e&&($(Qe),$(qn))}var H=St(0);function uo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var al=[];function Wi(){for(var e=0;e<al.length;e++)al[e]._workInProgressVersionPrimary=null;al.length=0}var br=nt.ReactCurrentDispatcher,ul=nt.ReactCurrentBatchConfig,It=0,Q=null,Z=null,ee=null,so=!1,Mn=!1,tr=0,Kp=0;function ae(){throw Error(C(321))}function Hi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Oe(e[n],t[n]))return!1;return!0}function Qi(e,t,n,r,o,l){if(It=l,Q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,br.current=e===null||e.memoizedState===null?Zp:Jp,e=n(r,o),Mn){l=0;do{if(Mn=!1,tr=0,25<=l)throw Error(C(301));l+=1,ee=Z=null,t.updateQueue=null,br.current=qp,e=n(r,o)}while(Mn)}if(br.current=co,t=Z!==null&&Z.next!==null,It=0,ee=Z=Q=null,so=!1,t)throw Error(C(300));return e}function Ki(){var e=tr!==0;return tr=0,e}function Ve(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?Q.memoizedState=ee=e:ee=ee.next=e,ee}function je(){if(Z===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=Z.next;var t=ee===null?Q.memoizedState:ee.next;if(t!==null)ee=t,Z=e;else{if(e===null)throw Error(C(310));Z=e,e={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},ee===null?Q.memoizedState=ee=e:ee=ee.next=e}return ee}function nr(e,t){return typeof t=="function"?t(e):t}function sl(e){var t=je(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=Z,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var a=i=null,u=null,s=l;do{var g=s.lane;if((It&g)===g)u!==null&&(u=u.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),r=s.hasEagerState?s.eagerState:e(r,s.action);else{var m={lane:g,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};u===null?(a=u=m,i=r):u=u.next=m,Q.lanes|=g,Rt|=g}s=s.next}while(s!==null&&s!==l);u===null?i=r:u.next=a,Oe(r,t.memoizedState)||(ve=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,Q.lanes|=l,Rt|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function cl(e){var t=je(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);Oe(l,t.memoizedState)||(ve=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Ks(){}function Gs(e,t){var n=Q,r=je(),o=t(),l=!Oe(r.memoizedState,o);if(l&&(r.memoizedState=o,ve=!0),r=r.queue,Gi(Zs.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,rr(9,Xs.bind(null,n,r,o,t),void 0,null),te===null)throw Error(C(349));(It&30)!==0||Ys(n,t,o)}return o}function Ys(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Xs(e,t,n,r){t.value=n,t.getSnapshot=r,Js(t)&&qs(e)}function Zs(e,t,n){return n(function(){Js(t)&&qs(e)})}function Js(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Oe(e,n)}catch{return!0}}function qs(e){var t=et(e,1);t!==null&&be(t,e,1,-1)}function Za(e){var t=Ve();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:nr,lastRenderedState:e},t.queue=e,e=e.dispatch=Xp.bind(null,Q,e),[t.memoizedState,e]}function rr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ec(){return je().memoizedState}function Or(e,t,n,r){var o=Ve();Q.flags|=e,o.memoizedState=rr(1|t,n,void 0,r===void 0?null:r)}function No(e,t,n,r){var o=je();r=r===void 0?null:r;var l=void 0;if(Z!==null){var i=Z.memoizedState;if(l=i.destroy,r!==null&&Hi(r,i.deps)){o.memoizedState=rr(t,n,l,r);return}}Q.flags|=e,o.memoizedState=rr(1|t,n,l,r)}function Ja(e,t){return Or(8390656,8,e,t)}function Gi(e,t){return No(2048,8,e,t)}function tc(e,t){return No(4,2,e,t)}function nc(e,t){return No(4,4,e,t)}function rc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function oc(e,t,n){return n=n!=null?n.concat([e]):null,No(4,4,rc.bind(null,t,e),n)}function Yi(){}function lc(e,t){var n=je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Hi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ic(e,t){var n=je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Hi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ac(e,t,n){return(It&21)===0?(e.baseState&&(e.baseState=!1,ve=!0),e.memoizedState=n):(Oe(n,t)||(n=ps(),Q.lanes|=n,Rt|=n,e.baseState=!0),t)}function Gp(e,t){var n=M;M=n!==0&&4>n?n:4,e(!0);var r=ul.transition;ul.transition={};try{e(!1),t()}finally{M=n,ul.transition=r}}function uc(){return je().memoizedState}function Yp(e,t,n){var r=vt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},sc(e))cc(t,n);else if(n=Ws(e,t,n,r),n!==null){var o=pe();be(n,e,r,o),dc(n,t,r)}}function Xp(e,t,n){var r=vt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(sc(e))cc(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,a=l(i,n);if(o.hasEagerState=!0,o.eagerState=a,Oe(a,i)){var u=t.interleaved;u===null?(o.next=o,Oi(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=Ws(e,t,o,r),n!==null&&(o=pe(),be(n,e,r,o),dc(n,t,r))}}function sc(e){var t=e.alternate;return e===Q||t!==null&&t===Q}function cc(e,t){Mn=so=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function dc(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ni(e,n)}}var co={readContext:_e,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},Zp={readContext:_e,useCallback:function(e,t){return Ve().memoizedState=[e,t===void 0?null:t],e},useContext:_e,useEffect:Ja,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Or(4194308,4,rc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Or(4194308,4,e,t)},useInsertionEffect:function(e,t){return Or(4,2,e,t)},useMemo:function(e,t){var n=Ve();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ve();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Yp.bind(null,Q,e),[r.memoizedState,e]},useRef:function(e){var t=Ve();return e={current:e},t.memoizedState=e},useState:Za,useDebugValue:Yi,useDeferredValue:function(e){return Ve().memoizedState=e},useTransition:function(){var e=Za(!1),t=e[0];return e=Gp.bind(null,e[1]),Ve().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Q,o=Ve();if(W){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),te===null)throw Error(C(349));(It&30)!==0||Ys(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,Ja(Zs.bind(null,r,l,e),[e]),r.flags|=2048,rr(9,Xs.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Ve(),t=te.identifierPrefix;if(W){var n=Xe,r=Ye;n=(r&~(1<<32-Me(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=tr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Kp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Jp={readContext:_e,useCallback:lc,useContext:_e,useEffect:Gi,useImperativeHandle:oc,useInsertionEffect:tc,useLayoutEffect:nc,useMemo:ic,useReducer:sl,useRef:ec,useState:function(){return sl(nr)},useDebugValue:Yi,useDeferredValue:function(e){var t=je();return ac(t,Z.memoizedState,e)},useTransition:function(){var e=sl(nr)[0],t=je().memoizedState;return[e,t]},useMutableSource:Ks,useSyncExternalStore:Gs,useId:uc,unstable_isNewReconciler:!1},qp={readContext:_e,useCallback:lc,useContext:_e,useEffect:Gi,useImperativeHandle:oc,useInsertionEffect:tc,useLayoutEffect:nc,useMemo:ic,useReducer:cl,useRef:ec,useState:function(){return cl(nr)},useDebugValue:Yi,useDeferredValue:function(e){var t=je();return Z===null?t.memoizedState=e:ac(t,Z.memoizedState,e)},useTransition:function(){var e=cl(nr)[0],t=je().memoizedState;return[e,t]},useMutableSource:Ks,useSyncExternalStore:Gs,useId:uc,unstable_isNewReconciler:!1};function Te(e,t){if(e&&e.defaultProps){t=K({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Gl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:K({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Po={isMounted:function(e){return(e=e._reactInternals)?Ot(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pe(),o=vt(e),l=Ze(r,o);l.payload=t,n!=null&&(l.callback=n),t=mt(e,l,o),t!==null&&(be(t,e,o,r),Mr(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pe(),o=vt(e),l=Ze(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=mt(e,l,o),t!==null&&(be(t,e,o,r),Mr(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pe(),r=vt(e),o=Ze(n,r);o.tag=2,t!=null&&(o.callback=t),t=mt(e,o,r),t!==null&&(be(t,e,r,n),Mr(t,e,r))}};function qa(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!Yn(n,r)||!Yn(o,l):!0}function pc(e,t,n){var r=!1,o=kt,l=t.contextType;return typeof l=="object"&&l!==null?l=_e(l):(o=xe(t)?Lt:ce.current,r=t.contextTypes,l=(r=r!=null)?sn(e,o):kt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Po,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function eu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Po.enqueueReplaceState(t,t.state,null)}function Yl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Ui(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=_e(l):(l=xe(t)?Lt:ce.current,o.context=sn(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Gl(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Po.enqueueReplaceState(o,o.state,null),ao(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function fn(e,t){try{var n="",r=t;do n+=Pd(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function dl(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function Xl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ef=typeof WeakMap=="function"?WeakMap:Map;function fc(e,t,n){n=Ze(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){fo||(fo=!0,ii=r),Xl(e,t)},n}function hc(e,t,n){n=Ze(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Xl(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Xl(e,t),typeof r!="function"&&(gt===null?gt=new Set([this]):gt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function tu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ef;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=mf.bind(null,e,t,n),t.then(e,e))}function nu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ru(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ze(-1,1),t.tag=2,mt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var tf=nt.ReactCurrentOwner,ve=!1;function de(e,t,n,r){t.child=e===null?Vs(t,null,n,r):dn(t,e.child,n,r)}function ou(e,t,n,r,o){n=n.render;var l=t.ref;return ln(t,o),r=Qi(e,t,n,r,l,o),n=Ki(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,tt(e,t,o)):(W&&n&&Li(t),t.flags|=1,de(e,t,r,o),t.child)}function lu(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!ra(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,mc(e,t,l,r,o)):(e=Wr(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,(e.lanes&o)===0){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:Yn,n(i,r)&&e.ref===t.ref)return tt(e,t,o)}return t.flags|=1,e=yt(l,r),e.ref=t.ref,e.return=t,t.child=e}function mc(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(Yn(l,r)&&e.ref===t.ref)if(ve=!1,t.pendingProps=r=l,(e.lanes&o)!==0)(e.flags&131072)!==0&&(ve=!0);else return t.lanes=e.lanes,tt(e,t,o)}return Zl(e,t,n,r,o)}function gc(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},b(en,Ee),Ee|=n;else{if((n&1073741824)===0)return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,b(en,Ee),Ee|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,b(en,Ee),Ee|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,b(en,Ee),Ee|=r;return de(e,t,o,n),t.child}function vc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Zl(e,t,n,r,o){var l=xe(n)?Lt:ce.current;return l=sn(t,l),ln(t,o),n=Qi(e,t,n,r,l,o),r=Ki(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,tt(e,t,o)):(W&&r&&Li(t),t.flags|=1,de(e,t,n,o),t.child)}function iu(e,t,n,r,o){if(xe(n)){var l=!0;no(t)}else l=!1;if(ln(t,o),t.stateNode===null)Ur(e,t),pc(t,n,r),Yl(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var u=i.context,s=n.contextType;typeof s=="object"&&s!==null?s=_e(s):(s=xe(n)?Lt:ce.current,s=sn(t,s));var g=n.getDerivedStateFromProps,m=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function";m||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||u!==s)&&eu(t,i,r,s),lt=!1;var h=t.memoizedState;i.state=h,ao(t,r,i,o),u=t.memoizedState,a!==r||h!==u||ye.current||lt?(typeof g=="function"&&(Gl(t,n,g,r),u=t.memoizedState),(a=lt||qa(t,n,a,r,h,u,s))?(m||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),i.props=r,i.state=u,i.context=s,r=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Hs(e,t),a=t.memoizedProps,s=t.type===t.elementType?a:Te(t.type,a),i.props=s,m=t.pendingProps,h=i.context,u=n.contextType,typeof u=="object"&&u!==null?u=_e(u):(u=xe(n)?Lt:ce.current,u=sn(t,u));var y=n.getDerivedStateFromProps;(g=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==m||h!==u)&&eu(t,i,r,u),lt=!1,h=t.memoizedState,i.state=h,ao(t,r,i,o);var E=t.memoizedState;a!==m||h!==E||ye.current||lt?(typeof y=="function"&&(Gl(t,n,y,r),E=t.memoizedState),(s=lt||qa(t,n,s,r,h,E,u)||!1)?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,E,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,E,u)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=E),i.props=r,i.state=E,i.context=u,r=s):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Jl(e,t,n,r,l,o)}function Jl(e,t,n,r,o,l){vc(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&Ha(t,n,!1),tt(e,t,l);r=t.stateNode,tf.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=dn(t,e.child,null,l),t.child=dn(t,null,a,l)):de(e,t,a,l),t.memoizedState=r.state,o&&Ha(t,n,!0),t.child}function yc(e){var t=e.stateNode;t.pendingContext?Wa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Wa(e,t.context,!1),$i(e,t.containerInfo)}function au(e,t,n,r,o){return cn(),Ii(o),t.flags|=256,de(e,t,n,r),t.child}var ql={dehydrated:null,treeContext:null,retryLane:0};function ei(e){return{baseLanes:e,cachePool:null,transitions:null}}function xc(e,t,n){var r=t.pendingProps,o=H.current,l=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),b(H,o&1),e===null)return Ql(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},(r&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=i):l=Ao(i,r,0,null),e=jt(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=ei(n),t.memoizedState=ql,e):Xi(t,i));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return nf(e,t,i,r,a,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,a=o.sibling;var u={mode:"hidden",children:r.children};return(i&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=yt(o,u),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?l=yt(a,l):(l=jt(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?ei(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=ql,r}return l=e.child,e=l.sibling,r=yt(l,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Xi(e,t){return t=Ao({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Dr(e,t,n,r){return r!==null&&Ii(r),dn(t,e.child,null,n),e=Xi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function nf(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=dl(Error(C(422))),Dr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=Ao({mode:"visible",children:r.children},o,0,null),l=jt(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,(t.mode&1)!==0&&dn(t,e.child,null,i),t.child.memoizedState=ei(i),t.memoizedState=ql,l);if((t.mode&1)===0)return Dr(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(C(419)),r=dl(l,r,void 0),Dr(e,t,i,r)}if(a=(i&e.childLanes)!==0,ve||a){if(r=te,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|i))!==0?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,et(e,o),be(r,e,o,-1))}return na(),r=dl(Error(C(421))),Dr(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=gf.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,Se=ht(o.nextSibling),Ce=t,W=!0,Re=null,e!==null&&(ze[De++]=Ye,ze[De++]=Xe,ze[De++]=Tt,Ye=e.id,Xe=e.overflow,Tt=t),t=Xi(t,r.children),t.flags|=4096,t)}function uu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Kl(e.return,t,n)}function pl(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function wc(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(de(e,t,r.children,n),r=H.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&uu(e,n,t);else if(e.tag===19)uu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(b(H,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&uo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),pl(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&uo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}pl(t,!0,n,null,l);break;case"together":pl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ur(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function tt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Rt|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=yt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=yt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function rf(e,t,n){switch(t.tag){case 3:yc(t),cn();break;case 5:Qs(t);break;case 1:xe(t.type)&&no(t);break;case 4:$i(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;b(lo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(b(H,H.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?xc(e,t,n):(b(H,H.current&1),e=tt(e,t,n),e!==null?e.sibling:null);b(H,H.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return wc(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),b(H,H.current),r)break;return null;case 22:case 23:return t.lanes=0,gc(e,t,n)}return tt(e,t,n)}var kc,ti,Ec,Sc;kc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ti=function(){};Ec=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Bt(Qe.current);var l=null;switch(n){case"input":o=Sl(e,o),r=Sl(e,r),l=[];break;case"select":o=K({},o,{value:void 0}),r=K({},r,{value:void 0}),l=[];break;case"textarea":o=Nl(e,o),r=Nl(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=eo)}zl(n,r);var i;n=null;for(s in o)if(!r.hasOwnProperty(s)&&o.hasOwnProperty(s)&&o[s]!=null)if(s==="style"){var a=o[s];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&($n.hasOwnProperty(s)?l||(l=[]):(l=l||[]).push(s,null));for(s in r){var u=r[s];if(a=o!=null?o[s]:void 0,r.hasOwnProperty(s)&&u!==a&&(u!=null||a!=null))if(s==="style")if(a){for(i in a)!a.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in u)u.hasOwnProperty(i)&&a[i]!==u[i]&&(n||(n={}),n[i]=u[i])}else n||(l||(l=[]),l.push(s,n)),n=u;else s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(l=l||[]).push(s,u)):s==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(s,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&($n.hasOwnProperty(s)?(u!=null&&s==="onScroll"&&U("scroll",e),l||a===u||(l=[])):(l=l||[]).push(s,u))}n&&(l=l||[]).push("style",n);var s=l;(t.updateQueue=s)&&(t.flags|=4)}};Sc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Pn(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function of(e,t,n){var r=t.pendingProps;switch(Ti(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ue(t),null;case 1:return xe(t.type)&&to(),ue(t),null;case 3:return r=t.stateNode,pn(),$(ye),$(ce),Wi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Pr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Re!==null&&(si(Re),Re=null))),ti(e,t),ue(t),null;case 5:Vi(t);var o=Bt(er.current);if(n=t.type,e!==null&&t.stateNode!=null)Ec(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return ue(t),null}if(e=Bt(Qe.current),Pr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[We]=t,r[Jn]=l,e=(t.mode&1)!==0,n){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(o=0;o<_n.length;o++)U(_n[o],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":va(r,l),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},U("invalid",r);break;case"textarea":xa(r,l),U("invalid",r)}zl(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&Nr(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&Nr(r.textContent,a,e),o=["children",""+a]):$n.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&U("scroll",r)}switch(n){case"input":yr(r),ya(r,l,!0);break;case"textarea":yr(r),wa(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=eo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Zu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[We]=t,e[Jn]=r,kc(e,t,!1,!1),t.stateNode=e;e:{switch(i=Dl(n,r),n){case"dialog":U("cancel",e),U("close",e),o=r;break;case"iframe":case"object":case"embed":U("load",e),o=r;break;case"video":case"audio":for(o=0;o<_n.length;o++)U(_n[o],e);o=r;break;case"source":U("error",e),o=r;break;case"img":case"image":case"link":U("error",e),U("load",e),o=r;break;case"details":U("toggle",e),o=r;break;case"input":va(e,r),o=Sl(e,r),U("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=K({},r,{value:void 0}),U("invalid",e);break;case"textarea":xa(e,r),o=Nl(e,r),U("invalid",e);break;default:o=r}zl(n,o),a=o;for(l in a)if(a.hasOwnProperty(l)){var u=a[l];l==="style"?es(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ju(e,u)):l==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Vn(e,u):typeof u=="number"&&Vn(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&($n.hasOwnProperty(l)?u!=null&&l==="onScroll"&&U("scroll",e):u!=null&&wi(e,l,u,i))}switch(n){case"input":yr(e),ya(e,r,!1);break;case"textarea":yr(e),wa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+wt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?tn(e,!!r.multiple,l,!1):r.defaultValue!=null&&tn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=eo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ue(t),null;case 6:if(e&&t.stateNode!=null)Sc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=Bt(er.current),Bt(Qe.current),Pr(t)){if(r=t.stateNode,n=t.memoizedProps,r[We]=t,(l=r.nodeValue!==n)&&(e=Ce,e!==null))switch(e.tag){case 3:Nr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Nr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[We]=t,t.stateNode=r}return ue(t),null;case 13:if($(H),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&Se!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Us(),cn(),t.flags|=98560,l=!1;else if(l=Pr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(C(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(C(317));l[We]=t}else cn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ue(t),l=!1}else Re!==null&&(si(Re),Re=null),l=!0;if(!l)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(H.current&1)!==0?J===0&&(J=3):na())),t.updateQueue!==null&&(t.flags|=4),ue(t),null);case 4:return pn(),ti(e,t),e===null&&Xn(t.stateNode.containerInfo),ue(t),null;case 10:return bi(t.type._context),ue(t),null;case 17:return xe(t.type)&&to(),ue(t),null;case 19:if($(H),l=t.memoizedState,l===null)return ue(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)Pn(l,!1);else{if(J!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=uo(e),i!==null){for(t.flags|=128,Pn(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return b(H,H.current&1|2),t.child}e=e.sibling}l.tail!==null&&Y()>hn&&(t.flags|=128,r=!0,Pn(l,!1),t.lanes=4194304)}else{if(!r)if(e=uo(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Pn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!W)return ue(t),null}else 2*Y()-l.renderingStartTime>hn&&n!==1073741824&&(t.flags|=128,r=!0,Pn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Y(),t.sibling=null,n=H.current,b(H,r?n&1|2:n&1),t):(ue(t),null);case 22:case 23:return ta(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Ee&1073741824)!==0&&(ue(t),t.subtreeFlags&6&&(t.flags|=8192)):ue(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function lf(e,t){switch(Ti(t),t.tag){case 1:return xe(t.type)&&to(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pn(),$(ye),$(ce),Wi(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Vi(t),null;case 13:if($(H),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));cn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $(H),null;case 4:return pn(),null;case 10:return bi(t.type._context),null;case 22:case 23:return ta(),null;case 24:return null;default:return null}}var Ar=!1,se=!1,af=typeof WeakSet=="function"?WeakSet:Set,D=null;function qt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){G(e,t,r)}else n.current=null}function ni(e,t,n){try{n()}catch(r){G(e,t,r)}}var su=!1;function uf(e,t){if(bl=Zr,e=zs(),ji(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,a=-1,u=-1,s=0,g=0,m=e,h=null;t:for(;;){for(var y;m!==n||o!==0&&m.nodeType!==3||(a=i+o),m!==l||r!==0&&m.nodeType!==3||(u=i+r),m.nodeType===3&&(i+=m.nodeValue.length),(y=m.firstChild)!==null;)h=m,m=y;for(;;){if(m===e)break t;if(h===n&&++s===o&&(a=i),h===l&&++g===r&&(u=i),(y=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=y}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ol={focusedElem:e,selectionRange:n},Zr=!1,D=t;D!==null;)if(t=D,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,D=e;else for(;D!==null;){t=D;try{var E=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var k=E.memoizedProps,A=E.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?k:Te(t.type,k),A);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(x){G(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,D=e;break}D=t.return}return E=su,su=!1,E}function bn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&ni(t,n,l)}o=o.next}while(o!==r)}}function zo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ri(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Cc(e){var t=e.alternate;t!==null&&(e.alternate=null,Cc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[We],delete t[Jn],delete t[Vl],delete t[Vp],delete t[Wp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Fc(e){return e.tag===5||e.tag===3||e.tag===4}function cu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function oi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=eo));else if(r!==4&&(e=e.child,e!==null))for(oi(e,t,n),e=e.sibling;e!==null;)oi(e,t,n),e=e.sibling}function li(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(li(e,t,n),e=e.sibling;e!==null;)li(e,t,n),e=e.sibling}var ne=null,Ie=!1;function rt(e,t,n){for(n=n.child;n!==null;)Nc(e,t,n),n=n.sibling}function Nc(e,t,n){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(wo,n)}catch{}switch(n.tag){case 5:se||qt(n,t);case 6:var r=ne,o=Ie;ne=null,rt(e,t,n),ne=r,Ie=o,ne!==null&&(Ie?(e=ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(Ie?(e=ne,n=n.stateNode,e.nodeType===8?ll(e.parentNode,n):e.nodeType===1&&ll(e,n),Kn(e)):ll(ne,n.stateNode));break;case 4:r=ne,o=Ie,ne=n.stateNode.containerInfo,Ie=!0,rt(e,t,n),ne=r,Ie=o;break;case 0:case 11:case 14:case 15:if(!se&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&((l&2)!==0||(l&4)!==0)&&ni(n,t,i),o=o.next}while(o!==r)}rt(e,t,n);break;case 1:if(!se&&(qt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){G(n,t,a)}rt(e,t,n);break;case 21:rt(e,t,n);break;case 22:n.mode&1?(se=(r=se)||n.memoizedState!==null,rt(e,t,n),se=r):rt(e,t,n);break;default:rt(e,t,n)}}function du(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new af),t.forEach(function(r){var o=vf.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Le(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:ne=a.stateNode,Ie=!1;break e;case 3:ne=a.stateNode.containerInfo,Ie=!0;break e;case 4:ne=a.stateNode.containerInfo,Ie=!0;break e}a=a.return}if(ne===null)throw Error(C(160));Nc(l,i,o),ne=null,Ie=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(s){G(o,t,s)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Pc(t,e),t=t.sibling}function Pc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Le(t,e),$e(e),r&4){try{bn(3,e,e.return),zo(3,e)}catch(k){G(e,e.return,k)}try{bn(5,e,e.return)}catch(k){G(e,e.return,k)}}break;case 1:Le(t,e),$e(e),r&512&&n!==null&&qt(n,n.return);break;case 5:if(Le(t,e),$e(e),r&512&&n!==null&&qt(n,n.return),e.flags&32){var o=e.stateNode;try{Vn(o,"")}catch(k){G(e,e.return,k)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&Yu(o,l),Dl(a,i);var s=Dl(a,l);for(i=0;i<u.length;i+=2){var g=u[i],m=u[i+1];g==="style"?es(o,m):g==="dangerouslySetInnerHTML"?Ju(o,m):g==="children"?Vn(o,m):wi(o,g,m,s)}switch(a){case"input":Cl(o,l);break;case"textarea":Xu(o,l);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var y=l.value;y!=null?tn(o,!!l.multiple,y,!1):h!==!!l.multiple&&(l.defaultValue!=null?tn(o,!!l.multiple,l.defaultValue,!0):tn(o,!!l.multiple,l.multiple?[]:"",!1))}o[Jn]=l}catch(k){G(e,e.return,k)}}break;case 6:if(Le(t,e),$e(e),r&4){if(e.stateNode===null)throw Error(C(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(k){G(e,e.return,k)}}break;case 3:if(Le(t,e),$e(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Kn(t.containerInfo)}catch(k){G(e,e.return,k)}break;case 4:Le(t,e),$e(e);break;case 13:Le(t,e),$e(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(qi=Y())),r&4&&du(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(se=(s=se)||g,Le(t,e),se=s):Le(t,e),$e(e),r&8192){if(s=e.memoizedState!==null,(e.stateNode.isHidden=s)&&!g&&(e.mode&1)!==0)for(D=e,g=e.child;g!==null;){for(m=D=g;D!==null;){switch(h=D,y=h.child,h.tag){case 0:case 11:case 14:case 15:bn(4,h,h.return);break;case 1:qt(h,h.return);var E=h.stateNode;if(typeof E.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,E.props=t.memoizedProps,E.state=t.memoizedState,E.componentWillUnmount()}catch(k){G(r,n,k)}}break;case 5:qt(h,h.return);break;case 22:if(h.memoizedState!==null){fu(m);continue}}y!==null?(y.return=h,D=y):fu(m)}g=g.sibling}e:for(g=null,m=e;;){if(m.tag===5){if(g===null){g=m;try{o=m.stateNode,s?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=m.stateNode,u=m.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=qu("display",i))}catch(k){G(e,e.return,k)}}}else if(m.tag===6){if(g===null)try{m.stateNode.nodeValue=s?"":m.memoizedProps}catch(k){G(e,e.return,k)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;g===m&&(g=null),m=m.return}g===m&&(g=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Le(t,e),$e(e),r&4&&du(e);break;case 21:break;default:Le(t,e),$e(e)}}function $e(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Fc(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Vn(o,""),r.flags&=-33);var l=cu(e);li(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,a=cu(e);oi(e,a,i);break;default:throw Error(C(161))}}catch(u){G(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function sf(e,t,n){D=e,zc(e)}function zc(e,t,n){for(var r=(e.mode&1)!==0;D!==null;){var o=D,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Ar;if(!i){var a=o.alternate,u=a!==null&&a.memoizedState!==null||se;a=Ar;var s=se;if(Ar=i,(se=u)&&!s)for(D=o;D!==null;)i=D,u=i.child,i.tag===22&&i.memoizedState!==null?hu(o):u!==null?(u.return=i,D=u):hu(o);for(;l!==null;)D=l,zc(l),l=l.sibling;D=o,Ar=a,se=s}pu(e)}else(o.subtreeFlags&8772)!==0&&l!==null?(l.return=o,D=l):pu(e)}}function pu(e){for(;D!==null;){var t=D;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:se||zo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!se)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Te(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Xa(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Xa(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var s=t.alternate;if(s!==null){var g=s.memoizedState;if(g!==null){var m=g.dehydrated;m!==null&&Kn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}se||t.flags&512&&ri(t)}catch(h){G(t,t.return,h)}}if(t===e){D=null;break}if(n=t.sibling,n!==null){n.return=t.return,D=n;break}D=t.return}}function fu(e){for(;D!==null;){var t=D;if(t===e){D=null;break}var n=t.sibling;if(n!==null){n.return=t.return,D=n;break}D=t.return}}function hu(e){for(;D!==null;){var t=D;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{zo(4,t)}catch(u){G(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){G(t,o,u)}}var l=t.return;try{ri(t)}catch(u){G(t,l,u)}break;case 5:var i=t.return;try{ri(t)}catch(u){G(t,i,u)}}}catch(u){G(t,t.return,u)}if(t===e){D=null;break}var a=t.sibling;if(a!==null){a.return=t.return,D=a;break}D=t.return}}var cf=Math.ceil,po=nt.ReactCurrentDispatcher,Zi=nt.ReactCurrentOwner,Be=nt.ReactCurrentBatchConfig,R=0,te=null,X=null,oe=0,Ee=0,en=St(0),J=0,or=null,Rt=0,Do=0,Ji=0,On=null,ge=null,qi=0,hn=1/0,Ke=null,fo=!1,ii=null,gt=null,Br=!1,st=null,ho=0,Un=0,ai=null,$r=-1,Vr=0;function pe(){return(R&6)!==0?Y():$r!==-1?$r:$r=Y()}function vt(e){return(e.mode&1)===0?1:(R&2)!==0&&oe!==0?oe&-oe:Qp.transition!==null?(Vr===0&&(Vr=ps()),Vr):(e=M,e!==0||(e=window.event,e=e===void 0?16:xs(e.type)),e)}function be(e,t,n,r){if(50<Un)throw Un=0,ai=null,Error(C(185));ur(e,n,r),((R&2)===0||e!==te)&&(e===te&&((R&2)===0&&(Do|=n),J===4&&at(e,oe)),we(e,r),n===1&&R===0&&(t.mode&1)===0&&(hn=Y()+500,Fo&&Ct()))}function we(e,t){var n=e.callbackNode;Qd(e,t);var r=Xr(e,e===te?oe:0);if(r===0)n!==null&&Sa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Sa(n),t===1)e.tag===0?Hp(mu.bind(null,e)):Ms(mu.bind(null,e)),Up(function(){(R&6)===0&&Ct()}),n=null;else{switch(fs(r)){case 1:n=Fi;break;case 4:n=cs;break;case 16:n=Yr;break;case 536870912:n=ds;break;default:n=Yr}n=Ic(n,Dc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Dc(e,t){if($r=-1,Vr=0,(R&6)!==0)throw Error(C(327));var n=e.callbackNode;if(an()&&e.callbackNode!==n)return null;var r=Xr(e,e===te?oe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=mo(e,r);else{t=r;var o=R;R|=2;var l=Bc();(te!==e||oe!==t)&&(Ke=null,hn=Y()+500,_t(e,t));do try{ff();break}catch(a){Ac(e,a)}while(1);Mi(),po.current=l,R=o,X!==null?t=0:(te=null,oe=0,t=J)}if(t!==0){if(t===2&&(o=Ll(e),o!==0&&(r=o,t=ui(e,o))),t===1)throw n=or,_t(e,0),at(e,r),we(e,Y()),n;if(t===6)at(e,r);else{if(o=e.current.alternate,(r&30)===0&&!df(o)&&(t=mo(e,r),t===2&&(l=Ll(e),l!==0&&(r=l,t=ui(e,l))),t===1))throw n=or,_t(e,0),at(e,r),we(e,Y()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:zt(e,ge,Ke);break;case 3:if(at(e,r),(r&130023424)===r&&(t=qi+500-Y(),10<t)){if(Xr(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){pe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=$l(zt.bind(null,e,ge,Ke),t);break}zt(e,ge,Ke);break;case 4:if(at(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-Me(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*cf(r/1960))-r,10<r){e.timeoutHandle=$l(zt.bind(null,e,ge,Ke),r);break}zt(e,ge,Ke);break;case 5:zt(e,ge,Ke);break;default:throw Error(C(329))}}}return we(e,Y()),e.callbackNode===n?Dc.bind(null,e):null}function ui(e,t){var n=On;return e.current.memoizedState.isDehydrated&&(_t(e,t).flags|=256),e=mo(e,t),e!==2&&(t=ge,ge=n,t!==null&&si(t)),e}function si(e){ge===null?ge=e:ge.push.apply(ge,e)}function df(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!Oe(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function at(e,t){for(t&=~Ji,t&=~Do,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Me(t),r=1<<n;e[n]=-1,t&=~r}}function mu(e){if((R&6)!==0)throw Error(C(327));an();var t=Xr(e,0);if((t&1)===0)return we(e,Y()),null;var n=mo(e,t);if(e.tag!==0&&n===2){var r=Ll(e);r!==0&&(t=r,n=ui(e,r))}if(n===1)throw n=or,_t(e,0),at(e,t),we(e,Y()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,zt(e,ge,Ke),we(e,Y()),null}function ea(e,t){var n=R;R|=1;try{return e(t)}finally{R=n,R===0&&(hn=Y()+500,Fo&&Ct())}}function Mt(e){st!==null&&st.tag===0&&(R&6)===0&&an();var t=R;R|=1;var n=Be.transition,r=M;try{if(Be.transition=null,M=1,e)return e()}finally{M=r,Be.transition=n,R=t,(R&6)===0&&Ct()}}function ta(){Ee=en.current,$(en)}function _t(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Op(n)),X!==null)for(n=X.return;n!==null;){var r=n;switch(Ti(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&to();break;case 3:pn(),$(ye),$(ce),Wi();break;case 5:Vi(r);break;case 4:pn();break;case 13:$(H);break;case 19:$(H);break;case 10:bi(r.type._context);break;case 22:case 23:ta()}n=n.return}if(te=e,X=e=yt(e.current,null),oe=Ee=t,J=0,or=null,Ji=Do=Rt=0,ge=On=null,At!==null){for(t=0;t<At.length;t++)if(n=At[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}At=null}return e}function Ac(e,t){do{var n=X;try{if(Mi(),br.current=co,so){for(var r=Q.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}so=!1}if(It=0,ee=Z=Q=null,Mn=!1,tr=0,Zi.current=null,n===null||n.return===null){J=1,or=t,X=null;break}e:{var l=e,i=n.return,a=n,u=t;if(t=oe,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var s=u,g=a,m=g.tag;if((g.mode&1)===0&&(m===0||m===11||m===15)){var h=g.alternate;h?(g.updateQueue=h.updateQueue,g.memoizedState=h.memoizedState,g.lanes=h.lanes):(g.updateQueue=null,g.memoizedState=null)}var y=nu(i);if(y!==null){y.flags&=-257,ru(y,i,a,l,t),y.mode&1&&tu(l,s,t),t=y,u=s;var E=t.updateQueue;if(E===null){var k=new Set;k.add(u),t.updateQueue=k}else E.add(u);break e}else{if((t&1)===0){tu(l,s,t),na();break e}u=Error(C(426))}}else if(W&&a.mode&1){var A=nu(i);if(A!==null){(A.flags&65536)===0&&(A.flags|=256),ru(A,i,a,l,t),Ii(fn(u,a));break e}}l=u=fn(u,a),J!==4&&(J=2),On===null?On=[l]:On.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var p=fc(l,u,t);Ya(l,p);break e;case 1:a=u;var c=l.type,f=l.stateNode;if((l.flags&128)===0&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(gt===null||!gt.has(f)))){l.flags|=65536,t&=-t,l.lanes|=t;var x=hc(l,a,t);Ya(l,x);break e}}l=l.return}while(l!==null)}jc(n)}catch(w){t=w,X===n&&n!==null&&(X=n=n.return);continue}break}while(1)}function Bc(){var e=po.current;return po.current=co,e===null?co:e}function na(){(J===0||J===3||J===2)&&(J=4),te===null||(Rt&268435455)===0&&(Do&268435455)===0||at(te,oe)}function mo(e,t){var n=R;R|=2;var r=Bc();(te!==e||oe!==t)&&(Ke=null,_t(e,t));do try{pf();break}catch(o){Ac(e,o)}while(1);if(Mi(),R=n,po.current=r,X!==null)throw Error(C(261));return te=null,oe=0,J}function pf(){for(;X!==null;)_c(X)}function ff(){for(;X!==null&&!Rd();)_c(X)}function _c(e){var t=Tc(e.alternate,e,Ee);e.memoizedProps=e.pendingProps,t===null?jc(e):X=t,Zi.current=null}function jc(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=of(n,t,Ee),n!==null){X=n;return}}else{if(n=lf(n,t),n!==null){n.flags&=32767,X=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,X=null;return}}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);J===0&&(J=5)}function zt(e,t,n){var r=M,o=Be.transition;try{Be.transition=null,M=1,hf(e,t,n,r)}finally{Be.transition=o,M=r}return null}function hf(e,t,n,r){do an();while(st!==null);if((R&6)!==0)throw Error(C(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Kd(e,l),e===te&&(X=te=null,oe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Br||(Br=!0,Ic(Yr,function(){return an(),null})),l=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||l){l=Be.transition,Be.transition=null;var i=M;M=1;var a=R;R|=4,Zi.current=null,uf(e,n),Pc(n,e),jp(Ol),Zr=!!bl,Ol=bl=null,e.current=n,sf(n),Md(),R=a,M=i,Be.transition=l}else e.current=n;if(Br&&(Br=!1,st=e,ho=o),l=e.pendingLanes,l===0&&(gt=null),Ud(n.stateNode),we(e,Y()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(fo)throw fo=!1,e=ii,ii=null,e;return(ho&1)!==0&&e.tag!==0&&an(),l=e.pendingLanes,(l&1)!==0?e===ai?Un++:(Un=0,ai=e):Un=0,Ct(),null}function an(){if(st!==null){var e=fs(ho),t=Be.transition,n=M;try{if(Be.transition=null,M=16>e?16:e,st===null)var r=!1;else{if(e=st,st=null,ho=0,(R&6)!==0)throw Error(C(331));var o=R;for(R|=4,D=e.current;D!==null;){var l=D,i=l.child;if((D.flags&16)!==0){var a=l.deletions;if(a!==null){for(var u=0;u<a.length;u++){var s=a[u];for(D=s;D!==null;){var g=D;switch(g.tag){case 0:case 11:case 15:bn(8,g,l)}var m=g.child;if(m!==null)m.return=g,D=m;else for(;D!==null;){g=D;var h=g.sibling,y=g.return;if(Cc(g),g===s){D=null;break}if(h!==null){h.return=y,D=h;break}D=y}}}var E=l.alternate;if(E!==null){var k=E.child;if(k!==null){E.child=null;do{var A=k.sibling;k.sibling=null,k=A}while(k!==null)}}D=l}}if((l.subtreeFlags&2064)!==0&&i!==null)i.return=l,D=i;else e:for(;D!==null;){if(l=D,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:bn(9,l,l.return)}var p=l.sibling;if(p!==null){p.return=l.return,D=p;break e}D=l.return}}var c=e.current;for(D=c;D!==null;){i=D;var f=i.child;if((i.subtreeFlags&2064)!==0&&f!==null)f.return=i,D=f;else e:for(i=c;D!==null;){if(a=D,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:zo(9,a)}}catch(w){G(a,a.return,w)}if(a===i){D=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,D=x;break e}D=a.return}}if(R=o,Ct(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(wo,e)}catch{}r=!0}return r}finally{M=n,Be.transition=t}}return!1}function gu(e,t,n){t=fn(n,t),t=fc(e,t,1),e=mt(e,t,1),t=pe(),e!==null&&(ur(e,1,t),we(e,t))}function G(e,t,n){if(e.tag===3)gu(e,e,n);else for(;t!==null;){if(t.tag===3){gu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gt===null||!gt.has(r))){e=fn(n,e),e=hc(t,e,1),t=mt(t,e,1),e=pe(),t!==null&&(ur(t,1,e),we(t,e));break}}t=t.return}}function mf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=pe(),e.pingedLanes|=e.suspendedLanes&n,te===e&&(oe&n)===n&&(J===4||J===3&&(oe&130023424)===oe&&500>Y()-qi?_t(e,0):Ji|=n),we(e,t)}function Lc(e,t){t===0&&((e.mode&1)===0?t=1:(t=kr,kr<<=1,(kr&130023424)===0&&(kr=4194304)));var n=pe();e=et(e,t),e!==null&&(ur(e,t,n),we(e,n))}function gf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Lc(e,n)}function vf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),Lc(e,n)}var Tc;Tc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ye.current)ve=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return ve=!1,rf(e,t,n);ve=(e.flags&131072)!==0}else ve=!1,W&&(t.flags&1048576)!==0&&bs(t,oo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ur(e,t),e=t.pendingProps;var o=sn(t,ce.current);ln(t,n),o=Qi(null,t,r,e,o,n);var l=Ki();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,xe(r)?(l=!0,no(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ui(t),o.updater=Po,t.stateNode=o,o._reactInternals=t,Yl(t,r,e,n),t=Jl(null,t,r,!0,l,n)):(t.tag=0,W&&l&&Li(t),de(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ur(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=xf(r),e=Te(r,e),o){case 0:t=Zl(null,t,r,e,n);break e;case 1:t=iu(null,t,r,e,n);break e;case 11:t=ou(null,t,r,e,n);break e;case 14:t=lu(null,t,r,Te(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Te(r,o),Zl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Te(r,o),iu(e,t,r,o,n);case 3:e:{if(yc(t),e===null)throw Error(C(387));r=t.pendingProps,l=t.memoizedState,o=l.element,Hs(e,t),ao(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=fn(Error(C(423)),t),t=au(e,t,r,n,o);break e}else if(r!==o){o=fn(Error(C(424)),t),t=au(e,t,r,n,o);break e}else for(Se=ht(t.stateNode.containerInfo.firstChild),Ce=t,W=!0,Re=null,n=Vs(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(cn(),r===o){t=tt(e,t,n);break e}de(e,t,r,n)}t=t.child}return t;case 5:return Qs(t),e===null&&Ql(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,Ul(r,o)?i=null:l!==null&&Ul(r,l)&&(t.flags|=32),vc(e,t),de(e,t,i,n),t.child;case 6:return e===null&&Ql(t),null;case 13:return xc(e,t,n);case 4:return $i(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=dn(t,null,r,n):de(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Te(r,o),ou(e,t,r,o,n);case 7:return de(e,t,t.pendingProps,n),t.child;case 8:return de(e,t,t.pendingProps.children,n),t.child;case 12:return de(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,b(lo,r._currentValue),r._currentValue=i,l!==null)if(Oe(l.value,i)){if(l.children===o.children&&!ye.current){t=tt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){i=l.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(l.tag===1){u=Ze(-1,n&-n),u.tag=2;var s=l.updateQueue;if(s!==null){s=s.shared;var g=s.pending;g===null?u.next=u:(u.next=g.next,g.next=u),s.pending=u}}l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),Kl(l.return,n,t),a.lanes|=n;break}u=u.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(C(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Kl(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}de(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,ln(t,n),o=_e(o),r=r(o),t.flags|=1,de(e,t,r,n),t.child;case 14:return r=t.type,o=Te(r,t.pendingProps),o=Te(r.type,o),lu(e,t,r,o,n);case 15:return mc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Te(r,o),Ur(e,t),t.tag=1,xe(r)?(e=!0,no(t)):e=!1,ln(t,n),pc(t,r,o),Yl(t,r,o,n),Jl(null,t,r,!0,e,n);case 19:return wc(e,t,n);case 22:return gc(e,t,n)}throw Error(C(156,t.tag))};function Ic(e,t){return ss(e,t)}function yf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ae(e,t,n,r){return new yf(e,t,n,r)}function ra(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xf(e){if(typeof e=="function")return ra(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ei)return 11;if(e===Si)return 14}return 2}function yt(e,t){var n=e.alternate;return n===null?(n=Ae(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Wr(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")ra(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Wt:return jt(n.children,o,l,t);case ki:i=8,o|=8;break;case xl:return e=Ae(12,n,t,o|2),e.elementType=xl,e.lanes=l,e;case wl:return e=Ae(13,n,t,o),e.elementType=wl,e.lanes=l,e;case kl:return e=Ae(19,n,t,o),e.elementType=kl,e.lanes=l,e;case Qu:return Ao(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Wu:i=10;break e;case Hu:i=9;break e;case Ei:i=11;break e;case Si:i=14;break e;case ot:i=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=Ae(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function jt(e,t,n,r){return e=Ae(7,e,r,t),e.lanes=n,e}function Ao(e,t,n,r){return e=Ae(22,e,r,t),e.elementType=Qu,e.lanes=n,e.stateNode={isHidden:!1},e}function fl(e,t,n){return e=Ae(6,e,null,t),e.lanes=n,e}function hl(e,t,n){return t=Ae(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function wf(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Go(0),this.expirationTimes=Go(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Go(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function oa(e,t,n,r,o,l,i,a,u){return e=new wf(e,t,n,a,u),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Ae(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ui(l),e}function kf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Rc(e){if(!e)return kt;e=e._reactInternals;e:{if(Ot(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(xe(n))return Rs(e,n,t)}return t}function Mc(e,t,n,r,o,l,i,a,u){return e=oa(n,r,!0,e,o,l,i,a,u),e.context=Rc(null),n=e.current,r=pe(),o=vt(n),l=Ze(r,o),l.callback=t!=null?t:null,mt(n,l,o),e.current.lanes=o,ur(e,o,r),we(e,r),e}function Bo(e,t,n,r){var o=t.current,l=pe(),i=vt(o);return n=Rc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ze(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=mt(o,t,i),e!==null&&(be(e,o,i,l),Mr(e,o,i)),i}function go(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function vu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function la(e,t){vu(e,t),(e=e.alternate)&&vu(e,t)}function Ef(){return null}var bc=typeof reportError=="function"?reportError:function(e){console.error(e)};function ia(e){this._internalRoot=e}_o.prototype.render=ia.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));Bo(e,t,null,null)};_o.prototype.unmount=ia.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Mt(function(){Bo(null,e,null,null)}),t[qe]=null}};function _o(e){this._internalRoot=e}_o.prototype.unstable_scheduleHydration=function(e){if(e){var t=gs();e={blockedOn:null,target:e,priority:t};for(var n=0;n<it.length&&t!==0&&t<it[n].priority;n++);it.splice(n,0,e),n===0&&ys(e)}};function aa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function jo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function yu(){}function Sf(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var s=go(i);l.call(s)}}var i=Mc(t,r,e,0,null,!1,!1,"",yu);return e._reactRootContainer=i,e[qe]=i.current,Xn(e.nodeType===8?e.parentNode:e),Mt(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var s=go(u);a.call(s)}}var u=oa(e,0,!1,null,null,!1,!1,"",yu);return e._reactRootContainer=u,e[qe]=u.current,Xn(e.nodeType===8?e.parentNode:e),Mt(function(){Bo(t,u,n,r)}),u}function Lo(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var a=o;o=function(){var u=go(i);a.call(u)}}Bo(t,i,e,o)}else i=Sf(n,t,e,o,r);return go(i)}hs=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Bn(t.pendingLanes);n!==0&&(Ni(t,n|1),we(t,Y()),(R&6)===0&&(hn=Y()+500,Ct()))}break;case 13:Mt(function(){var r=et(e,1);if(r!==null){var o=pe();be(r,e,1,o)}}),la(e,1)}};Pi=function(e){if(e.tag===13){var t=et(e,134217728);if(t!==null){var n=pe();be(t,e,134217728,n)}la(e,134217728)}};ms=function(e){if(e.tag===13){var t=vt(e),n=et(e,t);if(n!==null){var r=pe();be(n,e,t,r)}la(e,t)}};gs=function(){return M};vs=function(e,t){var n=M;try{return M=e,t()}finally{M=n}};Bl=function(e,t,n){switch(t){case"input":if(Cl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Co(r);if(!o)throw Error(C(90));Gu(r),Cl(r,o)}}}break;case"textarea":Xu(e,n);break;case"select":t=n.value,t!=null&&tn(e,!!n.multiple,t,!1)}};rs=ea;os=Mt;var Cf={usingClientEntryPoint:!1,Events:[cr,Gt,Co,ts,ns,ea]},zn={findFiberByHostInstance:Dt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ff={bundleType:zn.bundleType,version:zn.version,rendererPackageName:zn.rendererPackageName,rendererConfig:zn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=as(e),e===null?null:e.stateNode},findFiberByHostInstance:zn.findFiberByHostInstance||Ef,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _r=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_r.isDisabled&&_r.supportsFiber)try{wo=_r.inject(Ff),He=_r}catch{}}Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cf;Ne.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!aa(t))throw Error(C(200));return kf(e,t,null,n)};Ne.createRoot=function(e,t){if(!aa(e))throw Error(C(299));var n=!1,r="",o=bc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=oa(e,1,!1,null,null,n,!1,r,o),e[qe]=t.current,Xn(e.nodeType===8?e.parentNode:e),new ia(t)};Ne.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=as(t),e=e===null?null:e.stateNode,e};Ne.flushSync=function(e){return Mt(e)};Ne.hydrate=function(e,t,n){if(!jo(t))throw Error(C(200));return Lo(null,e,t,!0,n)};Ne.hydrateRoot=function(e,t,n){if(!aa(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=bc;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Mc(t,null,e,1,n!=null?n:null,o,!1,l,i),e[qe]=t.current,Xn(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new _o(t)};Ne.render=function(e,t,n){if(!jo(t))throw Error(C(200));return Lo(null,e,t,!1,n)};Ne.unmountComponentAtNode=function(e){if(!jo(e))throw Error(C(40));return e._reactRootContainer?(Mt(function(){Lo(null,null,e,!1,function(){e._reactRootContainer=null,e[qe]=null})}),!0):!1};Ne.unstable_batchedUpdates=ea;Ne.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!jo(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Lo(e,t,n,!1,r)};Ne.version="18.3.1-next-f1338f8080-20240426";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Ne})(Ou);var Oc,xu=Ou.exports;Oc=xu.createRoot,xu.hydrateRoot;/**
 * @remix-run/router v1.3.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lr(){return lr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},lr.apply(this,arguments)}var ct;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ct||(ct={}));const wu="popstate";function Nf(e){e===void 0&&(e={});function t(r,o){let{pathname:l,search:i,hash:a}=r.location;return ci("",{pathname:l,search:i,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:ir(o)}return zf(t,n,null,e)}function q(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Pf(){return Math.random().toString(36).substr(2,8)}function ku(e,t){return{usr:e.state,key:e.key,idx:t}}function ci(e,t,n,r){return n===void 0&&(n=null),lr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?yn(t):t,{state:n,key:t&&t.key||r||Pf()})}function ir(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function yn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function zf(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:l=!1}=r,i=o.history,a=ct.Pop,u=null,s=g();s==null&&(s=0,i.replaceState(lr({},i.state,{idx:s}),""));function g(){return(i.state||{idx:null}).idx}function m(){a=ct.Pop;let A=g(),p=A==null?null:A-s;s=A,u&&u({action:a,location:k.location,delta:p})}function h(A,p){a=ct.Push;let c=ci(k.location,A,p);n&&n(c,A),s=g()+1;let f=ku(c,s),x=k.createHref(c);try{i.pushState(f,"",x)}catch{o.location.assign(x)}l&&u&&u({action:a,location:k.location,delta:1})}function y(A,p){a=ct.Replace;let c=ci(k.location,A,p);n&&n(c,A),s=g();let f=ku(c,s),x=k.createHref(c);i.replaceState(f,"",x),l&&u&&u({action:a,location:k.location,delta:0})}function E(A){let p=o.location.origin!=="null"?o.location.origin:o.location.href,c=typeof A=="string"?A:ir(A);return q(p,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,p)}let k={get action(){return a},get location(){return e(o,i)},listen(A){if(u)throw new Error("A history only accepts one active listener");return o.addEventListener(wu,m),u=A,()=>{o.removeEventListener(wu,m),u=null}},createHref(A){return t(o,A)},createURL:E,encodeLocation(A){let p=E(A);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:y,go(A){return i.go(A)}};return k}var Eu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Eu||(Eu={}));function Df(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?yn(t):t,o=Vc(r.pathname||"/",n);if(o==null)return null;let l=Uc(e);Af(l);let i=null;for(let a=0;i==null&&a<l.length;++a)i=bf(l[a],$f(o));return i}function Uc(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(l,i,a)=>{let u={relativePath:a===void 0?l.path||"":a,caseSensitive:l.caseSensitive===!0,childrenIndex:i,route:l};u.relativePath.startsWith("/")&&(q(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let s=xt([r,u.relativePath]),g=n.concat(u);l.children&&l.children.length>0&&(q(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+s+'".')),Uc(l.children,t,g,s)),!(l.path==null&&!l.index)&&t.push({path:s,score:Rf(s,l.index),routesMeta:g})};return e.forEach((l,i)=>{var a;if(l.path===""||!((a=l.path)!=null&&a.includes("?")))o(l,i);else for(let u of $c(l.path))o(l,i,u)}),t}function $c(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return o?[l,""]:[l];let i=$c(r.join("/")),a=[];return a.push(...i.map(u=>u===""?l:[l,u].join("/"))),o&&a.push(...i),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function Af(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Mf(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Bf=/^:\w+$/,_f=3,jf=2,Lf=1,Tf=10,If=-2,Su=e=>e==="*";function Rf(e,t){let n=e.split("/"),r=n.length;return n.some(Su)&&(r+=If),t&&(r+=jf),n.filter(o=>!Su(o)).reduce((o,l)=>o+(Bf.test(l)?_f:l===""?Lf:Tf),r)}function Mf(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function bf(e,t){let{routesMeta:n}=e,r={},o="/",l=[];for(let i=0;i<n.length;++i){let a=n[i],u=i===n.length-1,s=o==="/"?t:t.slice(o.length)||"/",g=Of({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},s);if(!g)return null;Object.assign(r,g.params);let m=a.route;l.push({params:r,pathname:xt([o,g.pathname]),pathnameBase:Qf(xt([o,g.pathnameBase])),route:m}),g.pathnameBase!=="/"&&(o=xt([o,g.pathnameBase]))}return l}function Of(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Uf(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let l=o[0],i=l.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((s,g,m)=>{if(g==="*"){let h=a[m]||"";i=l.slice(0,l.length-h.length).replace(/(.)\/+$/,"$1")}return s[g]=Vf(a[m]||"",g),s},{}),pathname:l,pathnameBase:i,pattern:e}}function Uf(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ua(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(i,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function $f(e){try{return decodeURI(e)}catch(t){return ua(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Vf(e,t){try{return decodeURIComponent(e)}catch(n){return ua(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Vc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function ua(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Wf(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?yn(e):e;return{pathname:n?n.startsWith("/")?n:Hf(n,t):t,search:Kf(r),hash:Gf(o)}}function Hf(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function ml(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Wc(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Hc(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=yn(e):(o=lr({},e),q(!o.pathname||!o.pathname.includes("?"),ml("?","pathname","search",o)),q(!o.pathname||!o.pathname.includes("#"),ml("#","pathname","hash",o)),q(!o.search||!o.search.includes("#"),ml("#","search","hash",o)));let l=e===""||o.pathname==="",i=l?"/":o.pathname,a;if(r||i==null)a=n;else{let m=t.length-1;if(i.startsWith("..")){let h=i.split("/");for(;h[0]==="..";)h.shift(),m-=1;o.pathname=h.join("/")}a=m>=0?t[m]:"/"}let u=Wf(o,a),s=i&&i!=="/"&&i.endsWith("/"),g=(l||i===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(s||g)&&(u.pathname+="/"),u}const xt=e=>e.join("/").replace(/\/\/+/g,"/"),Qf=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Kf=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Gf=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Yf(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Xf=["post","put","patch","delete"];[...Xf];var To={exports:{}},Io={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zf=F.exports,Jf=Symbol.for("react.element"),qf=Symbol.for("react.fragment"),e0=Object.prototype.hasOwnProperty,t0=Zf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n0={key:!0,ref:!0,__self:!0,__source:!0};function Qc(e,t,n){var r,o={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)e0.call(t,r)&&!n0.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Jf,type:e,key:l,ref:i,props:o,_owner:t0.current}}Io.Fragment=qf;Io.jsx=Qc;Io.jsxs=Qc;(function(e){e.exports=Io})(To);const r0=To.exports.Fragment,d=To.exports.jsx,v=To.exports.jsxs;/**
 * React Router v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function di(){return di=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},di.apply(this,arguments)}function o0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const l0=typeof Object.is=="function"?Object.is:o0,{useState:i0,useEffect:a0,useLayoutEffect:u0,useDebugValue:s0}=vl;function c0(e,t,n){const r=t(),[{inst:o},l]=i0({inst:{value:r,getSnapshot:t}});return u0(()=>{o.value=r,o.getSnapshot=t,gl(o)&&l({inst:o})},[e,r,t]),a0(()=>(gl(o)&&l({inst:o}),e(()=>{gl(o)&&l({inst:o})})),[e]),s0(r),r}function gl(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!l0(n,r)}catch{return!0}}function d0(e,t,n){return t()}const p0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",f0=!p0,h0=f0?d0:c0;"useSyncExternalStore"in vl&&(e=>e.useSyncExternalStore)(vl);const Kc=F.exports.createContext(null),Gc=F.exports.createContext(null),Ro=F.exports.createContext(null),Mo=F.exports.createContext(null),Ut=F.exports.createContext({outlet:null,matches:[]}),Yc=F.exports.createContext(null);function m0(e,t){let{relative:n}=t===void 0?{}:t;pr()||q(!1);let{basename:r,navigator:o}=F.exports.useContext(Ro),{hash:l,pathname:i,search:a}=Zc(e,{relative:n}),u=i;return r!=="/"&&(u=i==="/"?r:xt([r,i])),o.createHref({pathname:u,search:a,hash:l})}function pr(){return F.exports.useContext(Mo)!=null}function bo(){return pr()||q(!1),F.exports.useContext(Mo).location}function fr(){pr()||q(!1);let{basename:e,navigator:t}=F.exports.useContext(Ro),{matches:n}=F.exports.useContext(Ut),{pathname:r}=bo(),o=JSON.stringify(Wc(n).map(a=>a.pathnameBase)),l=F.exports.useRef(!1);return F.exports.useEffect(()=>{l.current=!0}),F.exports.useCallback(function(a,u){if(u===void 0&&(u={}),!l.current)return;if(typeof a=="number"){t.go(a);return}let s=Hc(a,JSON.parse(o),r,u.relative==="path");e!=="/"&&(s.pathname=s.pathname==="/"?e:xt([e,s.pathname])),(u.replace?t.replace:t.push)(s,u.state,u)},[e,t,o,r])}function Xc(){let{matches:e}=F.exports.useContext(Ut),t=e[e.length-1];return t?t.params:{}}function Zc(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=F.exports.useContext(Ut),{pathname:o}=bo(),l=JSON.stringify(Wc(r).map(i=>i.pathnameBase));return F.exports.useMemo(()=>Hc(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function g0(e,t){pr()||q(!1);let{navigator:n}=F.exports.useContext(Ro),r=F.exports.useContext(Gc),{matches:o}=F.exports.useContext(Ut),l=o[o.length-1],i=l?l.params:{};l&&l.pathname;let a=l?l.pathnameBase:"/";l&&l.route;let u=bo(),s;if(t){var g;let k=typeof t=="string"?yn(t):t;a==="/"||((g=k.pathname)==null?void 0:g.startsWith(a))||q(!1),s=k}else s=u;let m=s.pathname||"/",h=a==="/"?m:m.slice(a.length)||"/",y=Df(e,{pathname:h}),E=w0(y&&y.map(k=>Object.assign({},k,{params:Object.assign({},i,k.params),pathname:xt([a,n.encodeLocation?n.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?a:xt([a,n.encodeLocation?n.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),o,r||void 0);return t&&E?d(Mo.Provider,{value:{location:di({pathname:"/",search:"",hash:"",state:null,key:"default"},s),navigationType:ct.Pop},children:E}):E}function v0(){let e=C0(),t=Yf(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null;return v(r0,{children:[d("h2",{children:"Unexpected Application Error!"}),d("h3",{style:{fontStyle:"italic"},children:t}),n?d("pre",{style:{padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},children:n}):null,null]})}class y0 extends F.exports.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?d(Ut.Provider,{value:this.props.routeContext,children:d(Yc.Provider,{value:this.state.error,children:this.props.component})}):this.props.children}}function x0(e){let{routeContext:t,match:n,children:r}=e,o=F.exports.useContext(Kc);return o&&o.static&&o.staticContext&&n.route.errorElement&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),d(Ut.Provider,{value:t,children:r})}function w0(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,o=n==null?void 0:n.errors;if(o!=null){let l=r.findIndex(i=>i.route.id&&(o==null?void 0:o[i.route.id]));l>=0||q(!1),r=r.slice(0,Math.min(r.length,l+1))}return r.reduceRight((l,i,a)=>{let u=i.route.id?o==null?void 0:o[i.route.id]:null,s=n?i.route.errorElement||d(v0,{}):null,g=t.concat(r.slice(0,a+1)),m=()=>d(x0,{match:i,routeContext:{outlet:l,matches:g},children:u?s:i.route.element!==void 0?i.route.element:l});return n&&(i.route.errorElement||a===0)?d(y0,{location:n.location,component:s,error:u,children:m(),routeContext:{outlet:null,matches:g}}):m()},null)}var Cu;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(Cu||(Cu={}));var vo;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(vo||(vo={}));function k0(e){let t=F.exports.useContext(Gc);return t||q(!1),t}function E0(e){let t=F.exports.useContext(Ut);return t||q(!1),t}function S0(e){let t=E0(),n=t.matches[t.matches.length-1];return n.route.id||q(!1),n.route.id}function C0(){var e;let t=F.exports.useContext(Yc),n=k0(vo.UseRouteError),r=S0(vo.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Hr(e){q(!1)}function F0(e){let{basename:t="/",children:n=null,location:r,navigationType:o=ct.Pop,navigator:l,static:i=!1}=e;pr()&&q(!1);let a=t.replace(/^\/*/,"/"),u=F.exports.useMemo(()=>({basename:a,navigator:l,static:i}),[a,l,i]);typeof r=="string"&&(r=yn(r));let{pathname:s="/",search:g="",hash:m="",state:h=null,key:y="default"}=r,E=F.exports.useMemo(()=>{let k=Vc(s,a);return k==null?null:{pathname:k,search:g,hash:m,state:h,key:y}},[a,s,g,m,h,y]);return E==null?null:d(Ro.Provider,{value:u,children:d(Mo.Provider,{children:n,value:{location:E,navigationType:o}})})}function N0(e){let{children:t,location:n}=e,r=F.exports.useContext(Kc),o=r&&!t?r.router.routes:pi(t);return g0(o,n)}var Fu;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Fu||(Fu={}));new Promise(()=>{});function pi(e,t){t===void 0&&(t=[]);let n=[];return F.exports.Children.forEach(e,(r,o)=>{if(!F.exports.isValidElement(r))return;if(r.type===F.exports.Fragment){n.push.apply(n,pi(r.props.children,t));return}r.type!==Hr&&q(!1),!r.props.index||!r.props.children||q(!1);let l=[...t,o],i={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(i.children=pi(r.props.children,l)),n.push(i)}),n}/**
 * React Router DOM v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function P0(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function z0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function D0(e,t){return e.button===0&&(!t||t==="_self")&&!z0(e)}const A0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function B0(e){let{basename:t,children:n,window:r}=e,o=F.exports.useRef();o.current==null&&(o.current=Nf({window:r,v5Compat:!0}));let l=o.current,[i,a]=F.exports.useState({action:l.action,location:l.location});return F.exports.useLayoutEffect(()=>l.listen(a),[l]),d(F0,{basename:t,children:n,location:i.location,navigationType:i.action,navigator:l})}const _0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",yo=F.exports.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:l,replace:i,state:a,target:u,to:s,preventScrollReset:g}=t,m=P0(t,A0),h=typeof s=="string"?s:ir(s),y=/^[a-z+]+:\/\//i.test(h)||h.startsWith("//"),E=h,k=!1;if(_0&&y){let f=new URL(window.location.href),x=h.startsWith("//")?new URL(f.protocol+h):new URL(h);x.origin===f.origin?E=x.pathname+x.search+x.hash:k=!0}let A=m0(E,{relative:o}),p=j0(E,{replace:i,state:a,target:u,preventScrollReset:g,relative:o});function c(f){r&&r(f),f.defaultPrevented||p(f)}return d("a",{...m,href:y?h:A,onClick:k||l?r:c,ref:n,target:u})});var Nu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Nu||(Nu={}));var Pu;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Pu||(Pu={}));function j0(e,t){let{target:n,replace:r,state:o,preventScrollReset:l,relative:i}=t===void 0?{}:t,a=fr(),u=bo(),s=Zc(e,{relative:i});return F.exports.useCallback(g=>{if(D0(g,n)){g.preventDefault();let m=r!==void 0?r:ir(u)===ir(s);a(e,{replace:m,state:o,preventScrollReset:l,relative:i})}},[u,a,s,r,o,n,e,l,i])}/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var L0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),O=(e,t)=>{const n=F.exports.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:l=2,absoluteStrokeWidth:i,className:a="",children:u,...s},g)=>F.exports.createElement("svg",{ref:g,...L0,width:o,height:o,stroke:r,strokeWidth:i?Number(l)*24/Number(o):l,className:["lucide",`lucide-${T0(e)}`,a].join(" "),...s},[...t.map(([m,h])=>F.exports.createElement(m,h)),...Array.isArray(u)?u:[u]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xo=O("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fi=O("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=O("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=O("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jc=O("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qc=O("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=O("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=O("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=O("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=O("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=O("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ed=O("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=O("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=O("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td=O("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=O("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sa=O("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nd=O("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=O("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rd=O("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oo=O("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zu=O("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=O("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=O("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ca=O("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=O("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function G0(e,t,n){return window.go.main.App.CreateChapter(e,t,n)}function Y0(e,t,n,r){return window.go.main.App.CreateCharacter(e,t,n,r)}function X0(e,t){return window.go.main.App.CreateProject(e,t)}function Z0(e){return window.go.main.App.DeleteChapter(e)}function J0(e){return window.go.main.App.DeleteCharacter(e)}function q0(e){return window.go.main.App.DeleteProject(e)}function eh(e){return window.go.main.App.GetChapter(e)}function th(e){return window.go.main.App.GetChapters(e)}function nh(e){return window.go.main.App.GetCharacter(e)}function rh(e){return window.go.main.App.GetCharacters(e)}function oh(e){return window.go.main.App.GetProject(e)}function lh(){return window.go.main.App.GetProjects()}function ih(e){return window.go.main.App.GetVoice(e)}function ah(){return window.go.main.App.GetVoices()}function uh(e,t){return window.go.main.App.ReorderChapters(e,t)}function sh(e,t,n){return window.go.main.App.UpdateChapter(e,t,n)}function ch(e,t,n,r){return window.go.main.App.UpdateCharacter(e,t,n,r)}function dh(e,t,n){return window.go.main.App.UpdateProject(e,t,n)}const re={createProject:async(e,t)=>{try{return await X0(e,t)}catch(n){throw console.error("Failed to create project:",n),n}},getProjects:async()=>{try{return await lh()||[]}catch(e){throw console.error("Failed to get projects:",e),e}},getProject:async e=>{try{return await oh(e)}catch(t){throw console.error("Failed to get project:",t),t}},updateProject:async(e,t,n)=>{try{await dh(e,t,n)}catch(r){throw console.error("Failed to update project:",r),r}},deleteProject:async e=>{try{await q0(e)}catch(t){throw console.error("Failed to delete project:",t),t}},createChapter:async(e,t,n)=>{try{return await G0(e,t,n)}catch(r){throw console.error("Failed to create chapter:",r),r}},getChapters:async e=>{try{return await th(e)||[]}catch(t){throw console.error("Failed to get chapters:",t),t}},getChapter:async e=>{try{return await eh(e)}catch(t){throw console.error("Failed to get chapter:",t),t}},updateChapter:async(e,t,n)=>{try{await sh(e,t,n)}catch(r){throw console.error("Failed to update chapter:",r),r}},deleteChapter:async e=>{try{await Z0(e)}catch(t){throw console.error("Failed to delete chapter:",t),t}},reorderChapters:async(e,t)=>{try{await uh(e,t)}catch(n){throw console.error("Failed to reorder chapters:",n),n}},createParagraph:async(e,t,n,r,o,l)=>{throw new Error("Not implemented")},getParagraphs:async e=>{throw new Error("Not implemented")},getParagraph:async e=>{throw new Error("Not implemented")},updateParagraph:async(e,t,n,r,o,l)=>{throw new Error("Not implemented")},deleteParagraph:async e=>{throw new Error("Not implemented")},createCharacter:async(e,t,n,r)=>{try{return await Y0(e,t,n,r)}catch(o){throw console.error("Failed to create character:",o),o}},getCharacters:async e=>{try{return await rh(e)||[]}catch(t){throw console.error("Failed to get characters:",t),t}},getCharacter:async e=>{try{return await nh(e)}catch(t){throw console.error("Failed to get character:",t),t}},updateCharacter:async(e,t,n,r)=>{try{await ch(e,t,n,r)}catch(o){throw console.error("Failed to update character:",o),o}},deleteCharacter:async e=>{try{await J0(e)}catch(t){throw console.error("Failed to delete character:",t),t}},getVoices:async()=>{try{return await ah()||[]}catch(e){throw console.error("Failed to get voices:",e),e}},getVoice:async e=>{try{return await ih(e)}catch(t){throw console.error("Failed to get voice:",t),t}},analyzeText:async e=>{throw new Error("Not implemented")},generateAudio:async(e,t,n,r)=>{throw new Error("Not implemented")},generateBatchAudio:async e=>{throw new Error("Not implemented")}},ph=()=>{const e=fr(),[t,n]=F.exports.useState([]),[r,o]=F.exports.useState(!1),[l,i]=F.exports.useState(!1),[a,u]=F.exports.useState({name:"",description:""}),s=async()=>{o(!0);try{const y=await re.getProjects();n(y)}catch(y){console.error("Failed to load projects:",y)}o(!1)};F.exports.useEffect(()=>{s()},[]);const g=async y=>{if(y.preventDefault(),!!a.name.trim()){o(!0);try{await re.createProject(a.name,a.description),u({name:"",description:""}),i(!1),s()}catch(E){console.error("Failed to create project:",E)}o(!1)}},m=async y=>{if(!!window.confirm("\u786E\u5B9A\u8981\u5220\u9664\u6B64\u5DE5\u7A0B\u5417\uFF1F")){o(!0);try{await re.deleteProject(y),s()}catch(E){console.error("Failed to delete project:",E)}o(!1)}},h=y=>{e(`/project/${y}`)};return v("div",{className:"home-page",children:[v("div",{className:"page-header",children:[v("div",{className:"header-content",children:[d(fi,{size:28,className:"header-icon"}),v("div",{children:[d("h1",{children:"\u542C\u58A8\u8BED - \u6709\u58F0\u5C0F\u8BF4\u5236\u4F5C"}),d("p",{children:"\u521B\u5EFA\u3001\u7F16\u8F91\u548C\u7BA1\u7406\u60A8\u7684\u6709\u58F0\u5C0F\u8BF4\u5DE5\u7A0B"})]})]}),v("button",{className:"create-project-btn",onClick:()=>i(!0),disabled:r,children:[d(sa,{size:20}),"\u521B\u5EFA\u65B0\u5DE5\u7A0B"]})]}),d("div",{className:"projects-container",children:d("div",{className:"projects-list",children:r&&t.length===0?v("div",{className:"loading",children:[d("div",{className:"spinner"}),d("p",{children:"\u52A0\u8F7D\u4E2D..."})]}):t.length===0?v("div",{className:"empty-state",children:[d(b0,{size:64}),d("h2",{children:"\u6682\u65E0\u5DE5\u7A0B"}),d("p",{children:"\u70B9\u51FB\u4E0A\u65B9\u6309\u94AE\u521B\u5EFA\u60A8\u7684\u7B2C\u4E00\u4E2A\u6709\u58F0\u5C0F\u8BF4\u5DE5\u7A0B"})]}):t.map((y,E)=>v("div",{className:"project-item",children:[v("div",{className:"project-info",onClick:()=>h(y.id),children:[d("div",{className:"project-index",children:E+1}),v("div",{className:"project-content",children:[d("h3",{children:y.name}),d("p",{className:"project-description",children:y.description||"\u6682\u65E0\u63CF\u8FF0"}),v("div",{className:"project-meta",children:[v("span",{children:["\u521B\u5EFA\u65F6\u95F4: ",new Date(y.createdAt).toLocaleDateString()]}),v("span",{children:["\u66F4\u65B0\u65F6\u95F4: ",new Date(y.updatedAt).toLocaleDateString()]})]})]})]}),v("div",{className:"project-actions",children:[v("button",{className:"btn-primary",onClick:k=>{k.stopPropagation(),h(y.id)},disabled:r,title:"\u6253\u5F00\u9879\u76EE",children:[d(qc,{size:16}),"\u6253\u5F00"]}),v("button",{className:"btn-danger",onClick:k=>{k.stopPropagation(),m(y.id)},disabled:r,children:[d(Oo,{size:16}),"\u5220\u9664"]})]})]},y.id))})}),l&&d("div",{className:"modal",children:v("div",{className:"modal-content",children:[v("div",{className:"modal-header",children:[d("h2",{children:"\u521B\u5EFA\u65B0\u5DE5\u7A0B"}),d("button",{className:"modal-close",onClick:()=>i(!1),children:"\xD7"})]}),v("form",{onSubmit:g,children:[v("div",{className:"form-group",children:[d("label",{htmlFor:"project-name",children:"\u5DE5\u7A0B\u540D\u79F0"}),d("input",{type:"text",id:"project-name",value:a.name,onChange:y=>u({...a,name:y.target.value}),placeholder:"\u8BF7\u8F93\u5165\u5DE5\u7A0B\u540D\u79F0",required:!0})]}),v("div",{className:"form-group",children:[d("label",{htmlFor:"project-description",children:"\u5DE5\u7A0B\u63CF\u8FF0"}),d("textarea",{id:"project-description",value:a.description,onChange:y=>u({...a,description:y.target.value}),placeholder:"\u8BF7\u8F93\u5165\u5DE5\u7A0B\u63CF\u8FF0",rows:3})]}),v("div",{className:"modal-footer",children:[d("button",{type:"button",className:"btn-secondary",onClick:()=>i(!1),disabled:r,children:"\u53D6\u6D88"}),d("button",{type:"submit",className:"btn-primary",disabled:r,children:"\u786E\u5B9A"})]})]})]})}),d("style",{children:`
        .home-page {
          min-height: 100vh;
          background-color: #151E2B;
          color: #ECF0F1;
          padding: 0;
          display: flex;
          flex-direction: column;
        }

        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
          background: linear-gradient(135deg, #1E2A3A 0%, #1A2432 100%);
          border-bottom: 1px solid #2D3E54;
        }

        .header-content {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .header-icon {
          color: #00A8FF;
          flex-shrink: 0;
        }

        .page-header h1 {
          margin: 0 0 4px 0;
          font-size: 1.4rem;
          color: #F1F5F9;
          font-weight: 700;
        }

        .page-header p {
          margin: 0;
          color: #94A3B8;
          font-size: 0.9rem;
        }

        .projects-container {
          flex: 1;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          padding: 20px 24px;
        }

        .create-project-btn {
          background: linear-gradient(135deg, #00A8FF 0%, #0088CC 100%);
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 10px;
          font-size: 0.95rem;
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
          transform: translateY(-2px);
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

        .project-item:hover {
          background: linear-gradient(145deg, #253345 0%, #1E2A3A 100%);
          border-color: #00A8FF;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
        }

        .project-info {
          flex: 1;
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }

        .project-index {
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
          flex-shrink: 0;
        }

        .project-content {
          flex: 1;
          min-width: 0;
        }

        .project-content h3 {
          margin: 0 0 6px 0;
          color: #F1F5F9;
          font-size: 1rem;
          font-weight: 600;
        }

        .project-description {
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

        .project-meta {
          display: flex;
          gap: 16px;
          font-size: 0.78rem;
          color: #64748B;
        }

        .project-actions {
          display: flex;
          gap: 8px;
          align-items: center;
          flex-shrink: 0;
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
          padding: 60px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #64748B;
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
          padding: 60px 20px;
          color: #64748B;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .empty-state h2 {
          color: #E2E8F0;
          margin: 20px 0 8px;
          font-size: 1.1rem;
        }

        .empty-state p {
          margin: 0;
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
          font-size: 28px;
          line-height: 1;
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
          min-height: 100px;
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
      `})]})},fh=({projectId:e,onChapterSelect:t})=>{const n=fr(),[r,o]=F.exports.useState([]),[l,i]=F.exports.useState(!1),[a,u]=F.exports.useState(!1),[s,g]=F.exports.useState({title:"",content:""}),m=async()=>{i(!0);try{const p=await re.getChapters(e);o(p)}catch(p){console.error("Failed to load chapters:",p)}i(!1)};F.exports.useEffect(()=>{m()},[e]);const h=async p=>{if(p.preventDefault(),!!s.title.trim()){i(!0);try{await re.createChapter(e,s.title,s.content),g({title:"",content:""}),u(!1),m()}catch(c){console.error("Failed to create chapter:",c)}i(!1)}},y=async p=>{if(!!window.confirm("\u786E\u5B9A\u8981\u5220\u9664\u6B64\u7AE0\u8282\u5417\uFF1F")){i(!0);try{await re.deleteChapter(p),m()}catch(c){console.error("Failed to delete chapter:",c)}i(!1)}},E=(p,c)=>{p.dataTransfer.setData("text/plain",c.toString())},k=p=>{p.preventDefault()},A=async(p,c)=>{p.preventDefault();const f=parseInt(p.dataTransfer.getData("text/plain"));if(f!==c){const x=[...r],[w]=x.splice(f,1);x.splice(c,0,w);const N=x.map(P=>P.id);try{await re.reorderChapters(e,N),o(x)}catch(P){console.error("Failed to reorder chapters:",P)}}};return v("div",{className:"chapter-manager",children:[v("div",{className:"chapter-manager-header",children:[v("div",{className:"header-left",children:[d(M0,{size:20}),d("h2",{children:"\u7AE0\u8282\u7BA1\u7406"})]}),v("button",{className:"btn-primary",onClick:()=>u(!0),disabled:l,children:[d(sa,{size:16}),"\u65B0\u5EFA\u7AE0\u8282"]})]}),d("div",{className:"chapter-list",children:l&&r.length===0?v("div",{className:"loading-state",children:[d("div",{className:"spinner"}),d("p",{children:"\u52A0\u8F7D\u4E2D..."})]}):r.length===0?v("div",{className:"empty-state",children:[d($0,{size:48}),d("h3",{children:"\u6682\u65E0\u7AE0\u8282"}),d("p",{children:"\u70B9\u51FB\u4E0A\u65B9\u6309\u94AE\u521B\u5EFA\u60A8\u7684\u7B2C\u4E00\u4E2A\u7AE0\u8282"})]}):r.map((p,c)=>v("div",{className:"chapter-item",draggable:!0,onDragStart:f=>E(f,c),onDragOver:k,onDrop:f=>A(f,c),children:[v("div",{className:"chapter-info",onClick:()=>n(`/project/${e}/chapter/${p.id}`),children:[d("div",{className:"chapter-index",children:c+1}),v("div",{className:"chapter-content",children:[d("h4",{children:p.title}),v("p",{className:"chapter-preview",children:[p.content.slice(0,50),p.content.length>50?"...":""]}),v("div",{className:"chapter-meta",children:[v("span",{children:["\u521B\u5EFA\u65F6\u95F4: ",new Date(p.createdAt).toLocaleDateString()]}),v("span",{children:["\u66F4\u65B0\u65F6\u95F4: ",new Date(p.updatedAt).toLocaleDateString()]})]})]})]}),v("div",{className:"chapter-actions",children:[d(O0,{size:20,className:"drag-handle"}),v("button",{className:"btn-primary",onClick:f=>{f.stopPropagation(),n(`/project/${e}/chapter/${p.id}`)},disabled:l,title:"\u6253\u5F00\u7AE0\u8282\u7F16\u8F91\u5668",children:[d(qc,{size:16}),"\u6253\u5F00"]}),v("button",{className:"btn-danger",onClick:f=>{f.stopPropagation(),y(p.id)},disabled:l,children:[d(Oo,{size:16}),"\u5220\u9664"]})]})]},p.id))}),a&&d("div",{className:"modal",children:v("div",{className:"modal-content",children:[v("div",{className:"modal-header",children:[d("h2",{children:"\u521B\u5EFA\u65B0\u7AE0\u8282"}),d("button",{className:"modal-close",onClick:()=>u(!1),disabled:l,children:d(ca,{size:24})})]}),v("form",{onSubmit:h,children:[v("div",{className:"form-group",children:[d("label",{htmlFor:"chapter-title",children:"\u7AE0\u8282\u6807\u9898"}),d("input",{type:"text",id:"chapter-title",value:s.title,onChange:p=>g({...s,title:p.target.value}),placeholder:"\u8BF7\u8F93\u5165\u7AE0\u8282\u6807\u9898",required:!0})]}),v("div",{className:"form-group",children:[d("label",{htmlFor:"chapter-content",children:"\u7AE0\u8282\u5185\u5BB9"}),d("textarea",{id:"chapter-content",value:s.content,onChange:p=>g({...s,content:p.target.value}),placeholder:"\u8BF7\u8F93\u5165\u7AE0\u8282\u5185\u5BB9",rows:6})]}),v("div",{className:"modal-footer",children:[d("button",{type:"button",className:"btn-secondary",onClick:()=>u(!1),disabled:l,children:"\u53D6\u6D88"}),d("button",{type:"submit",className:"btn-primary",disabled:l,children:"\u786E\u5B9A"})]})]})]})}),d("style",{children:`
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
      `})]})},hh=({projectId:e})=>{const[t,n]=F.exports.useState([]),[r,o]=F.exports.useState([]),[l,i]=F.exports.useState(!1),[a,u]=F.exports.useState(!1),[s,g]=F.exports.useState(null),[m,h]=F.exports.useState({name:"",description:"",voiceId:""});F.exports.useEffect(()=>{e&&(y(),E())},[e]);const y=async()=>{i(!0);try{const w=await re.getCharacters(e);n(w)}catch(w){console.error("Failed to load characters:",w)}i(!1)},E=async()=>{try{const w=await re.getVoices();o(w)}catch(w){console.error("Failed to load voices:",w)}},k=async w=>{if(w.preventDefault(),!!m.name.trim()){i(!0);try{await re.createCharacter(e,m.name,m.description,m.voiceId),f(),u(!1),y()}catch(N){console.error("Failed to create character:",N)}i(!1)}},A=async w=>{if(w.preventDefault(),!(!s||!m.name.trim())){i(!0);try{await re.updateCharacter(s.id,m.name,m.description,m.voiceId),f(),g(null),y()}catch(N){console.error("Failed to update character:",N)}i(!1)}},p=async w=>{if(!!window.confirm("\u786E\u5B9A\u8981\u5220\u9664\u6B64\u89D2\u8272\u5417\uFF1F")){i(!0);try{await re.deleteCharacter(w),y()}catch(N){console.error("Failed to delete character:",N)}i(!1)}},c=w=>{g(w),h({name:w.name,description:w.description||"",voiceId:w.voiceId||""})},f=()=>{h({name:"",description:"",voiceId:""})},x=w=>{const N=r.find(P=>P.id===w);return N?N.name:"\u672A\u8BBE\u7F6E\u97F3\u8272"};return v("div",{className:"role-manager",children:[v("div",{className:"role-manager-header",children:[v("div",{className:"header-left",children:[d(zu,{size:20}),d("h2",{children:"\u89D2\u8272\u7BA1\u7406"})]}),v("button",{className:"btn-primary",onClick:()=>{f(),g(null),u(!0)},disabled:l,children:[d(sa,{size:16}),"\u6DFB\u52A0\u89D2\u8272"]})]}),d("div",{className:"role-list",children:l&&t.length===0?v("div",{className:"loading-state",children:[d("div",{className:"spinner"}),d("p",{children:"\u52A0\u8F7D\u4E2D..."})]}):t.length===0?v("div",{className:"empty-state",children:[d(rd,{size:48}),d("h3",{children:"\u6682\u65E0\u89D2\u8272"}),d("p",{children:"\u70B9\u51FB\u4E0A\u65B9\u6309\u94AE\u6DFB\u52A0\u5C0F\u8BF4\u89D2\u8272"})]}):d("div",{className:"role-grid",children:t.map(w=>v("div",{className:"role-card",children:[d("div",{className:"role-avatar",children:d(zu,{size:28})}),v("div",{className:"role-info",children:[d("h4",{children:w.name}),w.description&&d("p",{className:"role-description",children:w.description}),v("div",{className:"voice-badge",children:[d(ed,{size:14}),d("span",{children:x(w.voiceId)})]})]}),v("div",{className:"role-actions",children:[d("button",{className:"btn-icon",onClick:()=>c(w),disabled:l,title:"\u7F16\u8F91",children:d(td,{size:16})}),d("button",{className:"btn-icon btn-danger",onClick:()=>p(w.id),disabled:l,title:"\u5220\u9664",children:d(Oo,{size:16})})]})]},w.id))})}),(a||s)&&d("div",{className:"modal",children:v("div",{className:"modal-content",children:[v("div",{className:"modal-header",children:[d("h2",{children:s?"\u7F16\u8F91\u89D2\u8272":"\u6DFB\u52A0\u65B0\u89D2\u8272"}),d("button",{className:"modal-close",onClick:()=>{u(!1),g(null),f()},disabled:l,children:d(ca,{size:24})})]}),v("form",{onSubmit:s?A:k,children:[v("div",{className:"form-group",children:[d("label",{htmlFor:"character-name",children:"\u89D2\u8272\u540D\u79F0 *"}),d("input",{id:"character-name",type:"text",value:m.name,onChange:w=>h({...m,name:w.target.value}),placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0",required:!0,disabled:l})]}),v("div",{className:"form-group",children:[d("label",{htmlFor:"character-description",children:"\u89D2\u8272\u7B80\u4ECB"}),d("textarea",{id:"character-description",value:m.description,onChange:w=>h({...m,description:w.target.value}),placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u7B80\u4ECB\uFF08\u53EF\u9009\uFF09",rows:3,disabled:l})]}),v("div",{className:"form-group",children:[d("label",{htmlFor:"character-voice",children:"\u9009\u62E9\u97F3\u8272"}),d("div",{className:"voice-selector",children:r.length===0?v("div",{className:"no-voices",children:[d(U0,{size:16}),d("span",{children:"\u52A0\u8F7D\u97F3\u8272\u4E2D..."})]}):d("div",{className:"voice-grid",children:r.map(w=>v("div",{className:`voice-option ${m.voiceId===w.id?"selected":""}`,onClick:()=>h({...m,voiceId:w.id}),children:[v("div",{className:"voice-option-header",children:[d(od,{size:16}),d("span",{className:"voice-name",children:w.name})]}),d("p",{className:"voice-desc",children:w.description}),w.supportedTones&&w.supportedTones.length>0&&v("div",{className:"voice-tones",children:[w.supportedTones.slice(0,3).map((N,P)=>d("span",{className:"tone-tag",children:N},P)),w.supportedTones.length>3&&v("span",{className:"tone-tag",children:["+",w.supportedTones.length-3]})]})]},w.id))})})]}),v("div",{className:"modal-footer",children:[d("button",{type:"button",className:"btn-secondary",onClick:()=>{u(!1),g(null),f()},disabled:l,children:"\u53D6\u6D88"}),v("button",{type:"submit",className:"btn-primary",disabled:l,children:[d(nd,{size:16}),s?"\u4FDD\u5B58\u4FEE\u6539":"\u521B\u5EFA\u89D2\u8272"]})]})]})]})}),d("style",{children:`
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
      `})]})},mh=()=>{const{id:e}=Xc(),t=fr(),[n,r]=F.exports.useState(null),[o,l]=F.exports.useState(!1),[i,a]=F.exports.useState(!1),[u,s]=F.exports.useState({name:"",description:""});F.exports.useEffect(()=>{e&&g(parseInt(e))},[e]);const g=async h=>{l(!0);try{const y=await re.getProject(h);r(y),y&&s({name:y.name,description:y.description})}catch(y){console.error("Failed to load project:",y)}l(!1)},m=async()=>{if(!!e){l(!0);try{await re.updateProject(parseInt(e),u.name,u.description),a(!1),g(parseInt(e))}catch(h){console.error("Failed to update project:",h)}l(!1)}};return o&&!n?d("div",{className:"project-details-page",children:v("div",{className:"loading-container",children:[d("div",{className:"spinner"}),d("p",{children:"\u52A0\u8F7D\u4E2D..."})]})}):n?v("div",{className:"project-details-page",children:[d("header",{className:"page-header",children:v("div",{className:"header-inner",children:[v("div",{className:"header-left",children:[v(yo,{to:"/",className:"back-button",children:[d(xo,{size:18}),d("span",{children:"\u8FD4\u56DE"})]}),d("div",{className:"divider"}),v("div",{className:"project-title",children:[d(fi,{size:20,className:"title-icon"}),v("div",{children:[d("h1",{children:n.name}),d("p",{className:"subtitle",children:"\u6709\u58F0\u5C0F\u8BF4\u5236\u4F5C\u5DE5\u7A0B"})]})]})]}),d("div",{className:"header-right",children:d("button",{className:"btn-secondary",onClick:()=>t("/"),children:"\u8FD4\u56DE\u9996\u9875"})})]})}),d("main",{className:"main-content",children:v("div",{className:"content-wrapper",children:[v("section",{className:"project-info-section",children:[v("div",{className:"section-header",children:[v("h2",{children:[d(rd,{size:18}),"\u9879\u76EE\u6982\u89C8"]}),!i&&d("button",{className:"btn-ghost",onClick:()=>a(!0),disabled:o,children:"\u7F16\u8F91\u4FE1\u606F"})]}),d("div",{className:"project-info-card",children:i?v("div",{className:"project-info-edit",children:[v("div",{className:"form-grid",children:[v("div",{className:"form-group full-width",children:[d("label",{htmlFor:"project-name",children:"\u9879\u76EE\u540D\u79F0"}),d("input",{id:"project-name",type:"text",value:u.name,onChange:h=>s({...u,name:h.target.value}),placeholder:"\u8BF7\u8F93\u5165\u9879\u76EE\u540D\u79F0",disabled:o})]}),v("div",{className:"form-group full-width",children:[d("label",{htmlFor:"project-description",children:"\u9879\u76EE\u63CF\u8FF0"}),d("textarea",{id:"project-description",value:u.description,onChange:h=>s({...u,description:h.target.value}),placeholder:"\u8BF7\u8F93\u5165\u9879\u76EE\u63CF\u8FF0",rows:3,disabled:o})]})]}),v("div",{className:"form-actions",children:[v("button",{className:"btn-secondary",onClick:()=>{a(!1),s({name:n.name,description:n.description})},disabled:o,children:[d(ca,{size:16}),"\u53D6\u6D88"]}),v("button",{className:"btn-primary",onClick:m,disabled:o,children:[d(nd,{size:16}),"\u4FDD\u5B58\u66F4\u6539"]})]})]}):v("div",{className:"project-info-content",children:[v("div",{className:"info-grid",children:[v("div",{className:"info-item",children:[d("div",{className:"info-label",children:"\u9879\u76EE\u540D\u79F0"}),d("div",{className:"info-value",children:n.name})]}),v("div",{className:"info-item",children:[d("div",{className:"info-label",children:"\u9879\u76EE\u63CF\u8FF0"}),d("div",{className:"info-value",children:n.description||"\u6682\u65E0\u63CF\u8FF0"})]})]}),v("div",{className:"meta-row",children:[v("div",{className:"meta-item",children:[d(I0,{size:14}),v("span",{children:["\u521B\u5EFA\u4E8E ",new Date(n.createdAt).toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric"})]})]}),v("div",{className:"meta-item",children:[d(Jc,{size:14}),v("span",{children:["\u66F4\u65B0\u4E8E ",new Date(n.updatedAt).toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric"})]})]})]})]})})]}),v("section",{className:"character-section",children:[d("div",{className:"section-header",children:v("h2",{children:[d(K0,{size:18}),"\u89D2\u8272\u7BA1\u7406"]})}),d("div",{className:"role-manager-wrapper",children:d(hh,{projectId:parseInt(e||"0")})})]}),v("section",{className:"chapter-section",children:[d("div",{className:"section-header",children:v("h2",{children:[d(fi,{size:18}),"\u7AE0\u8282\u7BA1\u7406"]})}),d("div",{className:"chapter-manager-wrapper",children:d(fh,{projectId:parseInt(e||"0")})})]})]})}),d("style",{children:`
        .project-details-page {
          background-color: #151E2B;
          color: #ECF0F1;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          padding-top: 73px;
        }

        /* \u56FA\u5B9A\u9876\u90E8\u5BFC\u822A\u680F */
        .page-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
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
      `})]}):d("div",{className:"project-details-page",children:v("div",{className:"error-container",children:[d("h2",{children:"\u9879\u76EE\u4E0D\u5B58\u5728"}),v(yo,{to:"/",className:"btn-primary",children:[d(xo,{size:16}),"\u8FD4\u56DE\u9996\u9875"]})]})})},gh="neutral",vh="happy",yh="sad",xh="angry",wh="excited",kh="fearful",Eh="surprised",Sh="disgusted",Ch=[{value:gh,label:"\u4E2D\u6027"},{value:vh,label:"\u5F00\u5FC3"},{value:yh,label:"\u60B2\u4F24"},{value:xh,label:"\u6124\u6012"},{value:wh,label:"\u5174\u594B"},{value:kh,label:"\u6050\u60E7"},{value:Eh,label:"\u60CA\u8BB6"},{value:Sh,label:"\u538C\u6076"}],Au=1,Fh=()=>{const{projectId:e,chapterId:t}=Xc();fr();const[n,r]=F.exports.useState(null),[o,l]=F.exports.useState([]),[i,a]=F.exports.useState([]),[u,s]=F.exports.useState([]),[g,m]=F.exports.useState(!0),[h,y]=F.exports.useState(null),[E,k]=F.exports.useState(!1),[A,p]=F.exports.useState(0),[c,f]=F.exports.useState(0),[x,w]=F.exports.useState({content:"",speaker:"",tone:"neutral",voiceId:"",speed:Au}),N=F.exports.useRef(null),P=[{id:1,chapterId:parseInt(t||"0"),content:"\u8FD9\u662F\u4E00\u4E2A\u5B81\u9759\u7684\u591C\u665A\uFF0C\u6708\u5149\u900F\u8FC7\u7A97\u6237\u6D12\u8FDB\u623F\u95F4\u3002",speaker:"\u65C1\u767D",tone:"neutral",voiceId:"BV001",speed:1,audioPath:"",duration:3.5,orderIndex:0,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},{id:2,chapterId:parseInt(t||"0"),content:'"\u4F60\u6765\u4E86\u3002"\u5979\u8F7B\u58F0\u8BF4\u9053\uFF0C\u58F0\u97F3\u4E2D\u5E26\u7740\u4E00\u4E1D\u98A4\u6296\u3002',speaker:"\u5973\u4E3B\u89D2",tone:"sad",voiceId:"BV002",speed:.9,audioPath:"",duration:2.8,orderIndex:1,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},{id:3,chapterId:parseInt(t||"0"),content:'"\u662F\u7684\uFF0C\u6211\u6765\u4E86\u3002"\u4ED6\u7AD9\u5728\u95E8\u53E3\uFF0C\u8EAB\u5F71\u88AB\u6708\u5149\u62C9\u5F97\u5F88\u957F\u3002',speaker:"\u7537\u4E3B\u89D2",tone:"neutral",voiceId:"BV001",speed:1,audioPath:"",duration:3.2,orderIndex:2,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},{id:4,chapterId:parseInt(t||"0"),content:'"\u4E3A\u4EC0\u4E48\u9009\u62E9\u73B0\u5728\u56DE\u6765\uFF1F"\u5979\u8F6C\u8FC7\u8EAB\uFF0C\u773C\u4E2D\u95EA\u70C1\u7740\u6CEA\u5149\u3002',speaker:"\u5973\u4E3B\u89D2",tone:"sad",voiceId:"BV002",speed:.85,audioPath:"",duration:3,orderIndex:3,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},{id:5,chapterId:parseInt(t||"0"),content:'"\u56E0\u4E3A\u6211\u77E5\u9053\uFF0C\u8FD9\u91CC\u624D\u662F\u6211\u7684\u5F52\u5BBF\u3002"\u4ED6\u7F13\u7F13\u8D70\u8FDB\u623F\u95F4\uFF0C\u6BCF\u4E00\u6B65\u90FD\u50CF\u662F\u8E29\u5728\u5979\u7684\u5FC3\u4E0A\u3002',speaker:"\u7537\u4E3B\u89D2",tone:"sad",voiceId:"BV003",speed:.95,audioPath:"",duration:4.2,orderIndex:4,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()}];F.exports.useEffect(()=>{t&&B()},[t,e]);const B=async()=>{m(!0);try{const S=await re.getChapter(parseInt(t||"0"));if(r(S),e){const ie=await re.getCharacters(parseInt(e));a(ie)}const _=await re.getVoices();s(_),l(P),V(P),P.length>0&&Ue(P[0].id)}catch(S){console.error("Failed to load data:",S)}m(!1)},V=S=>{const _=S.reduce((ie,me)=>ie+(me.duration||0),0);f(_)},ke=(()=>{let S=0;return o.map(_=>{const ie=S,me=S+(_.duration||2);return S=me,{id:_.id,start:ie,end:me,paragraph:_}})})(),Ue=S=>{y(S);const _=o.find(ie=>ie.id===S);_&&w({content:_.content,speaker:_.speaker||"",tone:_.tone||"neutral",voiceId:_.voiceId||"",speed:_.speed||Au})},Ft=()=>{if(!h)return;const S=o.map(_=>_.id===h?{..._,...x}:_);l(S)},hr=S=>{if(!window.confirm("\u786E\u5B9A\u8981\u5220\u9664\u6B64\u6BB5\u843D\u5417\uFF1F"))return;const _=o.filter(ie=>ie.id!==S);l(_),V(_),h===S&&(_.length>0?Ue(_[0].id):y(null))},Uo=async S=>{console.log("Generating audio for paragraph:",S)},xn=async()=>{console.log("Generating all audio")},wn=()=>{k(!E)},z=S=>{const _=Math.floor(S/60),ie=Math.floor(S%60),me=Math.floor(S%1*100);return`${_.toString().padStart(2,"0")}:${ie.toString().padStart(2,"0")}:${me.toString().padStart(2,"0")}`},j=S=>({\u65C1\u767D:"#00A8FF",\u7537\u4E3B\u89D2:"#FF6B6B",\u5973\u4E3B\u89D2:"#FF8EC7"})[S]||"#95A5A6",L=h?o.find(S=>S.id===h):null;return g?d("div",{className:"chapter-editor",children:v("div",{className:"loading-container",children:[d("div",{className:"spinner"}),d("p",{children:"\u52A0\u8F7D\u4E2D..."})]})}):n?v("div",{className:"chapter-editor",children:[v("header",{className:"editor-header",children:[v("div",{className:"header-left",children:[v(yo,{to:`/project/${e}`,className:"back-button",children:[d(xo,{size:18}),d("span",{children:"\u8FD4\u56DE"})]}),d("div",{className:"divider"}),v("div",{className:"chapter-title",children:[d("h1",{children:n.title}),d("p",{className:"subtitle",children:"\u7AE0\u8282\u7F16\u8F91 \xB7 \u65F6\u95F4\u8F74\u89C6\u56FE"})]})]}),v("div",{className:"header-right",children:[v("button",{className:"btn-secondary",onClick:()=>console.log("Import text"),children:[d(td,{size:16}),"\u7F16\u8F91\u6587\u672C"]}),v("button",{className:"btn-primary",onClick:xn,children:[d(Du,{size:16}),"\u6279\u91CF\u751F\u6210"]})]})]}),v("div",{className:"editor-main",children:[v("div",{className:"upper-section",children:[v("div",{className:"paragraph-list-panel",children:[v("div",{className:"panel-header",children:[d("h2",{children:"\u6BB5\u843D\u5217\u8868"}),v("span",{className:"paragraph-count",children:[o.length," \u4E2A\u6BB5\u843D"]})]}),d("div",{className:"paragraph-list-content",children:o.map((S,_)=>v("div",{className:`paragraph-item ${h===S.id?"selected":""}`,onClick:()=>Ue(S.id),children:[v("div",{className:"paragraph-item-left",children:[d("div",{className:"paragraph-index",children:_+1}),d("div",{className:"speaker-dot",style:{backgroundColor:j(S.speaker)}})]}),v("div",{className:"paragraph-item-content",children:[v("div",{className:"paragraph-item-header",children:[d("span",{className:"speaker-label",style:{color:j(S.speaker)},children:S.speaker||"\u65C1\u767D"}),v("span",{className:"paragraph-duration",children:[d(Jc,{size:10}),(S.duration||0).toFixed(1),"s"]})]}),d("p",{className:"paragraph-item-text",children:S.content})]}),d("div",{className:"paragraph-item-right",children:S.audioPath?d("span",{className:"has-audio-icon",children:d(od,{size:14})}):null})]},S.id))})]}),v("div",{className:"paragraph-detail-panel",children:[d("div",{className:"panel-header",children:d("h2",{children:"\u6BB5\u843D\u8BE6\u60C5"})}),L?v("div",{className:"panel-content",children:[v("div",{className:"form-group",children:[d("label",{children:"\u6587\u672C\u5185\u5BB9"}),d("textarea",{value:x.content,onChange:S=>w({...x,content:S.target.value}),rows:5})]}),v("div",{className:"form-row",children:[v("div",{className:"form-group",children:[d("label",{children:"\u8BF4\u8BDD\u89D2\u8272"}),v("select",{value:x.speaker,onChange:S=>w({...x,speaker:S.target.value}),children:[d("option",{value:"",children:"\u65C1\u767D"}),i.map(S=>d("option",{value:S.name,children:S.name},S.id))]})]}),v("div",{className:"form-group",children:[d("label",{children:"\u97F3\u8272"}),v("select",{value:x.voiceId,onChange:S=>w({...x,voiceId:S.target.value}),children:[d("option",{value:"",children:"\u8BF7\u9009\u62E9\u97F3\u8272"}),u.map(S=>d("option",{value:S.id,children:S.name},S.id))]})]})]}),v("div",{className:"form-row",children:[v("div",{className:"form-group",children:[d("label",{children:"\u60C5\u611F"}),d("select",{value:x.tone,onChange:S=>w({...x,tone:S.target.value}),children:Ch.map(S=>d("option",{value:S.value,children:S.label},S.value))})]}),v("div",{className:"form-group",children:[v("div",{className:"label-row",children:[d("label",{children:"\u8BED\u901F"}),d("span",{className:"value-badge",children:x.speed.toFixed(2)})]}),d("input",{type:"range",min:"0.5",max:"2.0",step:"0.05",value:x.speed,onChange:S=>w({...x,speed:parseFloat(S.target.value)})}),v("div",{className:"range-labels",children:[d("span",{children:"0.5x"}),d("span",{children:"1.0x"}),d("span",{children:"2.0x"})]})]})]}),v("div",{className:"action-buttons",children:[v("button",{className:"btn-generate",onClick:()=>Uo(L.id),children:[d(Du,{size:16}),"\u751F\u6210\u97F3\u9891"]}),v("button",{className:"btn-delete",onClick:()=>hr(L.id),children:[d(Oo,{size:16}),"\u5220\u9664"]})]}),d("div",{className:"save-bar",children:v("button",{className:"btn-primary",onClick:Ft,children:[d(R0,{size:16}),"\u4FDD\u5B58\u4FEE\u6539"]})})]}):v("div",{className:"empty-properties",children:[d(Q0,{size:40}),d("p",{children:"\u9009\u62E9\u4E00\u4E2A\u6BB5\u843D\u6765\u7F16\u8F91\u5C5E\u6027"})]})]})]}),d("div",{className:"lower-section",children:v("div",{className:"timeline-panel",children:[d("div",{className:"panel-header",children:v("div",{className:"transport-controls",children:[d("button",{className:`play-btn ${E?"playing":""}`,onClick:wn,children:E?d(W0,{size:20}):d(H0,{size:20})}),v("div",{className:"time-display",children:[z(A)," / ",z(c)]})]})}),v("div",{className:"timeline-container",ref:N,children:[d("div",{className:"timeline-ruler",children:Array.from({length:Math.ceil(c)+1}).map((S,_)=>d("div",{className:"ruler-mark",style:{left:`${_/c*100}%`},children:v("span",{className:"ruler-label",children:[_,"s"]})},_))}),d("div",{className:"timeline-track",children:ke.map(S=>v("div",{className:`timeline-clip ${h===S.id?"selected":""}`,style:{left:`${S.start/c*100}%`,width:`${(S.end-S.start)/c*100}%`,backgroundColor:j(S.paragraph.speaker)},onClick:()=>Ue(S.id),children:[v("div",{className:"clip-content",children:[v("div",{className:"clip-speaker",children:[d(ed,{size:14}),S.paragraph.speaker||"\u65C1\u767D"]}),v("div",{className:"clip-text",children:[S.paragraph.content.slice(0,40),S.paragraph.content.length>40?"...":""]})]}),S.paragraph.audioPath&&d("div",{className:"clip-indicator",children:d(V0,{size:12})})]},S.id))}),d("div",{className:"playhead",style:{left:`${A/c*100}%`}})]})]})})]}),d("style",{children:`
        .chapter-editor {
          background-color: #0F1419;
          color: #ECF0F1;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          padding-top: 73px;
        }

        /* \u9876\u90E8\u5BFC\u822A\u680F */
        .editor-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
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

        /* \u4E3B\u7F16\u8F91\u533A\u57DF - \u4E0A\u4E0B\u5E03\u5C40 */
        .editor-main {
          flex: 1;
          display: flex;
          flex-direction: column;
          height: 100vh;
          overflow: hidden;
        }

        /* \u4E0A\u534A\u90E8\u5206 */
        .upper-section {
          flex: 1;
          display: flex;
          min-height: 0;
          border-bottom: 1px solid #2A3442;
        }

        /* \u4E0B\u534A\u90E8\u5206 */
        .lower-section {
          height: 280px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
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

        .save-bar {
          display: flex;
          gap: 10px;
          padding-top: 14px;
          border-top: 1px solid #2A3442;
        }

        .save-bar .btn-primary {
          flex: 1;
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
      `})]}):d("div",{className:"chapter-editor",children:v("div",{className:"error-container",children:[d("h2",{children:"\u7AE0\u8282\u4E0D\u5B58\u5728"}),v(yo,{to:`/project/${e}`,className:"btn-primary",children:[d(xo,{size:16}),"\u8FD4\u56DE\u9879\u76EE"]})]})})};function Nh(){return d(B0,{children:d("div",{className:"app",children:v(N0,{children:[d(Hr,{path:"/",element:d(ph,{})}),d(Hr,{path:"/project/:id",element:d(mh,{})}),d(Hr,{path:"/project/:projectId/chapter/:chapterId",element:d(Fh,{})})]})})})}const Ph=document.getElementById("root"),zh=Oc(Ph);zh.render(d(bu.StrictMode,{children:d(Nh,{})}));
