function Ad(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function Pd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var F={exports:{}},T={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wr=Symbol.for("react.element"),zd=Symbol.for("react.portal"),Dd=Symbol.for("react.fragment"),Bd=Symbol.for("react.strict_mode"),bd=Symbol.for("react.profiler"),_d=Symbol.for("react.provider"),jd=Symbol.for("react.context"),Ld=Symbol.for("react.forward_ref"),Td=Symbol.for("react.suspense"),Rd=Symbol.for("react.memo"),Md=Symbol.for("react.lazy"),Aa=Symbol.iterator;function Id(e){return e===null||typeof e!="object"?null:(e=Aa&&e[Aa]||e["@@iterator"],typeof e=="function"?e:null)}var Yu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xu=Object.assign,Zu={};function Fn(e,t,n){this.props=e,this.context=t,this.refs=Zu,this.updater=n||Yu}Fn.prototype.isReactComponent={};Fn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Fn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ju(){}Ju.prototype=Fn.prototype;function zi(e,t,n){this.props=e,this.context=t,this.refs=Zu,this.updater=n||Yu}var Di=zi.prototype=new Ju;Di.constructor=zi;Xu(Di,Fn.prototype);Di.isPureReactComponent=!0;var Pa=Array.isArray,qu=Object.prototype.hasOwnProperty,Bi={current:null},es={key:!0,ref:!0,__self:!0,__source:!0};function ts(e,t,n){var r,o={},l=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)qu.call(t,r)&&!es.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:wr,type:e,key:l,ref:i,props:o,_owner:Bi.current}}function Od(e,t){return{$$typeof:wr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function bi(e){return typeof e=="object"&&e!==null&&e.$$typeof===wr}function Ud(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var za=/\/+/g;function nl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ud(""+e.key):t.toString(36)}function Kr(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case wr:case zd:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+nl(i,0):r,Pa(o)?(n="",e!=null&&(n=e.replace(za,"$&/")+"/"),Kr(o,t,n,"",function(c){return c})):o!=null&&(bi(o)&&(o=Od(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(za,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",Pa(e))for(var a=0;a<e.length;a++){l=e[a];var u=r+nl(l,a);i+=Kr(l,t,n,u,o)}else if(u=Id(e),typeof u=="function")for(e=u.call(e),a=0;!(l=e.next()).done;)l=l.value,u=r+nl(l,a++),i+=Kr(l,t,n,u,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function zr(e,t,n){if(e==null)return e;var r=[],o=0;return Kr(e,r,"","",function(l){return t.call(n,l,o++)}),r}function $d(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ye={current:null},Qr={transition:null},Vd={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:Qr,ReactCurrentOwner:Bi};function ns(){throw Error("act(...) is not supported in production builds of React.")}T.Children={map:zr,forEach:function(e,t,n){zr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return zr(e,function(){t++}),t},toArray:function(e){return zr(e,function(t){return t})||[]},only:function(e){if(!bi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};T.Component=Fn;T.Fragment=Dd;T.Profiler=bd;T.PureComponent=zi;T.StrictMode=Bd;T.Suspense=Td;T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vd;T.act=ns;T.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Xu({},e.props),o=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=Bi.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)qu.call(t,u)&&!es.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:wr,type:e.type,key:o,ref:l,props:r,_owner:i}};T.createContext=function(e){return e={$$typeof:jd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:_d,_context:e},e.Consumer=e};T.createElement=ts;T.createFactory=function(e){var t=ts.bind(null,e);return t.type=e,t};T.createRef=function(){return{current:null}};T.forwardRef=function(e){return{$$typeof:Ld,render:e}};T.isValidElement=bi;T.lazy=function(e){return{$$typeof:Md,_payload:{_status:-1,_result:e},_init:$d}};T.memo=function(e,t){return{$$typeof:Rd,type:e,compare:t===void 0?null:t}};T.startTransition=function(e){var t=Qr.transition;Qr.transition={};try{e()}finally{Qr.transition=t}};T.unstable_act=ns;T.useCallback=function(e,t){return ye.current.useCallback(e,t)};T.useContext=function(e){return ye.current.useContext(e)};T.useDebugValue=function(){};T.useDeferredValue=function(e){return ye.current.useDeferredValue(e)};T.useEffect=function(e,t){return ye.current.useEffect(e,t)};T.useId=function(){return ye.current.useId()};T.useImperativeHandle=function(e,t,n){return ye.current.useImperativeHandle(e,t,n)};T.useInsertionEffect=function(e,t){return ye.current.useInsertionEffect(e,t)};T.useLayoutEffect=function(e,t){return ye.current.useLayoutEffect(e,t)};T.useMemo=function(e,t){return ye.current.useMemo(e,t)};T.useReducer=function(e,t,n){return ye.current.useReducer(e,t,n)};T.useRef=function(e){return ye.current.useRef(e)};T.useState=function(e){return ye.current.useState(e)};T.useSyncExternalStore=function(e,t,n){return ye.current.useSyncExternalStore(e,t,n)};T.useTransition=function(){return ye.current.useTransition()};T.version="18.3.1";(function(e){e.exports=T})(F);const rs=Pd(F.exports),Bl=Ad({__proto__:null,default:rs},[F.exports]);var os={exports:{}},Pe={},ls={exports:{}},is={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,_){var j=P.length;P.push(_);e:for(;0<j;){var H=j-1>>>1,J=P[H];if(0<o(J,_))P[H]=_,P[j]=J,j=H;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var _=P[0],j=P.pop();if(j!==_){P[0]=j;e:for(var H=0,J=P.length,Xt=J>>>1;H<Xt;){var Te=2*(H+1)-1,Ar=P[Te],Ze=Te+1,He=P[Ze];if(0>o(Ar,j))Ze<J&&0>o(He,Ar)?(P[H]=He,P[Ze]=j,H=Ze):(P[H]=Ar,P[Te]=j,H=Te);else if(Ze<J&&0>o(He,j))P[H]=He,P[Ze]=j,H=Ze;else break e}}return _}function o(P,_){var j=P.sortIndex-_.sortIndex;return j!==0?j:P.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var u=[],c=[],y=1,g=null,m=3,x=!1,E=!1,k=!1,D=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(P){for(var _=n(c);_!==null;){if(_.callback===null)r(c);else if(_.startTime<=P)r(c),_.sortIndex=_.expirationTime,t(u,_);else break;_=n(c)}}function v(P){if(k=!1,f(P),!E)if(n(u)!==null)E=!0,ut(w);else{var _=n(c);_!==null&&Yt(v,_.startTime-P)}}function w(P,_){E=!1,k&&(k=!1,p(B),B=-1),x=!0;var j=m;try{for(f(_),g=n(u);g!==null&&(!(g.expirationTime>_)||P&&!re());){var H=g.callback;if(typeof H=="function"){g.callback=null,m=g.priorityLevel;var J=H(g.expirationTime<=_);_=e.unstable_now(),typeof J=="function"?g.callback=J:g===n(u)&&r(u),f(_)}else r(u);g=n(u)}if(g!==null)var Xt=!0;else{var Te=n(c);Te!==null&&Yt(v,Te.startTime-_),Xt=!1}return Xt}finally{g=null,m=j,x=!1}}var N=!1,A=null,B=-1,V=5,L=-1;function re(){return!(e.unstable_now()-L<V)}function Bt(){if(A!==null){var P=e.unstable_now();L=P;var _=!0;try{_=A(!0,P)}finally{_?We():(N=!1,A=null)}}else N=!1}var We;if(typeof d=="function")We=function(){d(Bt)};else if(typeof MessageChannel<"u"){var Qt=new MessageChannel,Gt=Qt.port2;Qt.port1.onmessage=Bt,We=function(){Gt.postMessage(null)}}else We=function(){D(Bt,0)};function ut(P){A=P,N||(N=!0,We())}function Yt(P,_){B=D(function(){P(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){E||x||(E=!0,ut(w))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(P){switch(m){case 1:case 2:case 3:var _=3;break;default:_=m}var j=m;m=_;try{return P()}finally{m=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,_){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var j=m;m=P;try{return _()}finally{m=j}},e.unstable_scheduleCallback=function(P,_,j){var H=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?H+j:H):j=H,P){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=j+J,P={id:y++,callback:_,priorityLevel:P,startTime:j,expirationTime:J,sortIndex:-1},j>H?(P.sortIndex=j,t(c,P),n(u)===null&&P===n(c)&&(k?(p(B),B=-1):k=!0,Yt(v,j-H))):(P.sortIndex=J,t(u,P),E||x||(E=!0,ut(w))),P},e.unstable_shouldYield=re,e.unstable_wrapCallback=function(P){var _=m;return function(){var j=m;m=_;try{return P.apply(this,arguments)}finally{m=j}}}})(is);(function(e){e.exports=is})(ls);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wd=F.exports,Ae=ls.exports;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var as=new Set,qn={};function Wt(e,t){vn(e,t),vn(e+"Capture",t)}function vn(e,t){for(qn[e]=t,e=0;e<t.length;e++)as.add(t[e])}var rt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bl=Object.prototype.hasOwnProperty,Hd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Da={},Ba={};function Kd(e){return bl.call(Ba,e)?!0:bl.call(Da,e)?!1:Hd.test(e)?Ba[e]=!0:(Da[e]=!0,!1)}function Qd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Gd(e,t,n,r){if(t===null||typeof t>"u"||Qd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ve(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){se[e]=new ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];se[t]=new ve(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){se[e]=new ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){se[e]=new ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){se[e]=new ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){se[e]=new ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){se[e]=new ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){se[e]=new ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){se[e]=new ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var _i=/[\-:]([a-z])/g;function ji(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(_i,ji);se[t]=new ve(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(_i,ji);se[t]=new ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(_i,ji);se[t]=new ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){se[e]=new ve(e,1,!1,e.toLowerCase(),null,!1,!1)});se.xlinkHref=new ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){se[e]=new ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function Li(e,t,n,r){var o=se.hasOwnProperty(t)?se[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Gd(t,n,o,r)&&(n=null),r||o===null?Kd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var at=Wd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Dr=Symbol.for("react.element"),qt=Symbol.for("react.portal"),en=Symbol.for("react.fragment"),Ti=Symbol.for("react.strict_mode"),_l=Symbol.for("react.profiler"),us=Symbol.for("react.provider"),ss=Symbol.for("react.context"),Ri=Symbol.for("react.forward_ref"),jl=Symbol.for("react.suspense"),Ll=Symbol.for("react.suspense_list"),Mi=Symbol.for("react.memo"),ct=Symbol.for("react.lazy"),cs=Symbol.for("react.offscreen"),ba=Symbol.iterator;function Bn(e){return e===null||typeof e!="object"?null:(e=ba&&e[ba]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,rl;function On(e){if(rl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);rl=t&&t[1]||""}return`
`+rl+e}var ol=!1;function ll(e,t){if(!e||ol)return"";ol=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,a=l.length-1;1<=i&&0<=a&&o[i]!==l[a];)a--;for(;1<=i&&0<=a;i--,a--)if(o[i]!==l[a]){if(i!==1||a!==1)do if(i--,a--,0>a||o[i]!==l[a]){var u=`
`+o[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=a);break}}}finally{ol=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?On(e):""}function Yd(e){switch(e.tag){case 5:return On(e.type);case 16:return On("Lazy");case 13:return On("Suspense");case 19:return On("SuspenseList");case 0:case 2:case 15:return e=ll(e.type,!1),e;case 11:return e=ll(e.type.render,!1),e;case 1:return e=ll(e.type,!0),e;default:return""}}function Tl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case en:return"Fragment";case qt:return"Portal";case _l:return"Profiler";case Ti:return"StrictMode";case jl:return"Suspense";case Ll:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ss:return(e.displayName||"Context")+".Consumer";case us:return(e._context.displayName||"Context")+".Provider";case Ri:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Mi:return t=e.displayName||null,t!==null?t:Tl(e.type)||"Memo";case ct:t=e._payload,e=e._init;try{return Tl(e(t))}catch{}}return null}function Xd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Tl(t);case 8:return t===Ti?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Nt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ds(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Zd(e){var t=ds(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Br(e){e._valueTracker||(e._valueTracker=Zd(e))}function ps(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ds(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function lo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Rl(e,t){var n=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function _a(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Nt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function fs(e,t){t=t.checked,t!=null&&Li(e,"checked",t,!1)}function Ml(e,t){fs(e,t);var n=Nt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Il(e,t.type,n):t.hasOwnProperty("defaultValue")&&Il(e,t.type,Nt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ja(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Il(e,t,n){(t!=="number"||lo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Un=Array.isArray;function pn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Nt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ol(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function La(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(Un(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Nt(n)}}function hs(e,t){var n=Nt(t.value),r=Nt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ta(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ms(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ul(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ms(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var br,gs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(br=br||document.createElement("div"),br.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=br.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function er(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Wn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jd=["Webkit","ms","Moz","O"];Object.keys(Wn).forEach(function(e){Jd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Wn[t]=Wn[e]})});function ys(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Wn.hasOwnProperty(e)&&Wn[e]?(""+t).trim():t+"px"}function vs(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=ys(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var qd=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $l(e,t){if(t){if(qd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function Vl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wl=null;function Ii(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hl=null,fn=null,hn=null;function Ra(e){if(e=Cr(e)){if(typeof Hl!="function")throw Error(S(280));var t=e.stateNode;t&&(t=Ro(t),Hl(e.stateNode,e.type,t))}}function xs(e){fn?hn?hn.push(e):hn=[e]:fn=e}function ws(){if(fn){var e=fn,t=hn;if(hn=fn=null,Ra(e),t)for(e=0;e<t.length;e++)Ra(t[e])}}function ks(e,t){return e(t)}function Es(){}var il=!1;function Cs(e,t,n){if(il)return e(t,n);il=!0;try{return ks(e,t,n)}finally{il=!1,(fn!==null||hn!==null)&&(Es(),ws())}}function tr(e,t){var n=e.stateNode;if(n===null)return null;var r=Ro(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var Kl=!1;if(rt)try{var bn={};Object.defineProperty(bn,"passive",{get:function(){Kl=!0}}),window.addEventListener("test",bn,bn),window.removeEventListener("test",bn,bn)}catch{Kl=!1}function ep(e,t,n,r,o,l,i,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(y){this.onError(y)}}var Hn=!1,io=null,ao=!1,Ql=null,tp={onError:function(e){Hn=!0,io=e}};function np(e,t,n,r,o,l,i,a,u){Hn=!1,io=null,ep.apply(tp,arguments)}function rp(e,t,n,r,o,l,i,a,u){if(np.apply(this,arguments),Hn){if(Hn){var c=io;Hn=!1,io=null}else throw Error(S(198));ao||(ao=!0,Ql=c)}}function Ht(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ss(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ma(e){if(Ht(e)!==e)throw Error(S(188))}function op(e){var t=e.alternate;if(!t){if(t=Ht(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return Ma(o),e;if(l===r)return Ma(o),t;l=l.sibling}throw Error(S(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,a=o.child;a;){if(a===n){i=!0,n=o,r=l;break}if(a===r){i=!0,r=o,n=l;break}a=a.sibling}if(!i){for(a=l.child;a;){if(a===n){i=!0,n=l,r=o;break}if(a===r){i=!0,r=l,n=o;break}a=a.sibling}if(!i)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function Fs(e){return e=op(e),e!==null?Ns(e):null}function Ns(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ns(e);if(t!==null)return t;e=e.sibling}return null}var As=Ae.unstable_scheduleCallback,Ia=Ae.unstable_cancelCallback,lp=Ae.unstable_shouldYield,ip=Ae.unstable_requestPaint,Z=Ae.unstable_now,ap=Ae.unstable_getCurrentPriorityLevel,Oi=Ae.unstable_ImmediatePriority,Ps=Ae.unstable_UserBlockingPriority,uo=Ae.unstable_NormalPriority,up=Ae.unstable_LowPriority,zs=Ae.unstable_IdlePriority,_o=null,Ye=null;function sp(e){if(Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(_o,e,void 0,(e.current.flags&128)===128)}catch{}}var Ue=Math.clz32?Math.clz32:pp,cp=Math.log,dp=Math.LN2;function pp(e){return e>>>=0,e===0?32:31-(cp(e)/dp|0)|0}var _r=64,jr=4194304;function $n(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function so(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~o;a!==0?r=$n(a):(l&=i,l!==0&&(r=$n(l)))}else i=n&~o,i!==0?r=$n(i):l!==0&&(r=$n(l));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ue(t),o=1<<n,r|=e[n],t&=~o;return r}function fp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-Ue(l),a=1<<i,u=o[i];u===-1?((a&n)===0||(a&r)!==0)&&(o[i]=fp(a,t)):u<=t&&(e.expiredLanes|=a),l&=~a}}function Gl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ds(){var e=_r;return _r<<=1,(_r&4194240)===0&&(_r=64),e}function al(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function kr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ue(t),e[t]=n}function mp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Ue(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function Ui(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ue(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var M=0;function Bs(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var bs,$i,_s,js,Ls,Yl=!1,Lr=[],yt=null,vt=null,xt=null,nr=new Map,rr=new Map,pt=[],gp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Oa(e,t){switch(e){case"focusin":case"focusout":yt=null;break;case"dragenter":case"dragleave":vt=null;break;case"mouseover":case"mouseout":xt=null;break;case"pointerover":case"pointerout":nr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":rr.delete(t.pointerId)}}function _n(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=Cr(t),t!==null&&$i(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function yp(e,t,n,r,o){switch(t){case"focusin":return yt=_n(yt,e,t,n,r,o),!0;case"dragenter":return vt=_n(vt,e,t,n,r,o),!0;case"mouseover":return xt=_n(xt,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return nr.set(l,_n(nr.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,rr.set(l,_n(rr.get(l)||null,e,t,n,r,o)),!0}return!1}function Ts(e){var t=jt(e.target);if(t!==null){var n=Ht(t);if(n!==null){if(t=n.tag,t===13){if(t=Ss(n),t!==null){e.blockedOn=t,Ls(e.priority,function(){_s(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Xl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Wl=r,n.target.dispatchEvent(r),Wl=null}else return t=Cr(n),t!==null&&$i(t),e.blockedOn=n,!1;t.shift()}return!0}function Ua(e,t,n){Gr(e)&&n.delete(t)}function vp(){Yl=!1,yt!==null&&Gr(yt)&&(yt=null),vt!==null&&Gr(vt)&&(vt=null),xt!==null&&Gr(xt)&&(xt=null),nr.forEach(Ua),rr.forEach(Ua)}function jn(e,t){e.blockedOn===t&&(e.blockedOn=null,Yl||(Yl=!0,Ae.unstable_scheduleCallback(Ae.unstable_NormalPriority,vp)))}function or(e){function t(o){return jn(o,e)}if(0<Lr.length){jn(Lr[0],e);for(var n=1;n<Lr.length;n++){var r=Lr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(yt!==null&&jn(yt,e),vt!==null&&jn(vt,e),xt!==null&&jn(xt,e),nr.forEach(t),rr.forEach(t),n=0;n<pt.length;n++)r=pt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<pt.length&&(n=pt[0],n.blockedOn===null);)Ts(n),n.blockedOn===null&&pt.shift()}var mn=at.ReactCurrentBatchConfig,co=!0;function xp(e,t,n,r){var o=M,l=mn.transition;mn.transition=null;try{M=1,Vi(e,t,n,r)}finally{M=o,mn.transition=l}}function wp(e,t,n,r){var o=M,l=mn.transition;mn.transition=null;try{M=4,Vi(e,t,n,r)}finally{M=o,mn.transition=l}}function Vi(e,t,n,r){if(co){var o=Xl(e,t,n,r);if(o===null)yl(e,t,r,po,n),Oa(e,r);else if(yp(o,e,t,n,r))r.stopPropagation();else if(Oa(e,r),t&4&&-1<gp.indexOf(e)){for(;o!==null;){var l=Cr(o);if(l!==null&&bs(l),l=Xl(e,t,n,r),l===null&&yl(e,t,r,po,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else yl(e,t,r,null,n)}}var po=null;function Xl(e,t,n,r){if(po=null,e=Ii(r),e=jt(e),e!==null)if(t=Ht(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ss(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return po=e,null}function Rs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ap()){case Oi:return 1;case Ps:return 4;case uo:case up:return 16;case zs:return 536870912;default:return 16}default:return 16}}var ht=null,Wi=null,Yr=null;function Ms(){if(Yr)return Yr;var e,t=Wi,n=t.length,r,o="value"in ht?ht.value:ht.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return Yr=o.slice(e,1<r?1-r:void 0)}function Xr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Tr(){return!0}function $a(){return!1}function ze(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Tr:$a,this.isPropagationStopped=$a,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Tr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Tr)},persist:function(){},isPersistent:Tr}),t}var Nn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hi=ze(Nn),Er=Y({},Nn,{view:0,detail:0}),kp=ze(Er),ul,sl,Ln,jo=Y({},Er,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ki,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ln&&(Ln&&e.type==="mousemove"?(ul=e.screenX-Ln.screenX,sl=e.screenY-Ln.screenY):sl=ul=0,Ln=e),ul)},movementY:function(e){return"movementY"in e?e.movementY:sl}}),Va=ze(jo),Ep=Y({},jo,{dataTransfer:0}),Cp=ze(Ep),Sp=Y({},Er,{relatedTarget:0}),cl=ze(Sp),Fp=Y({},Nn,{animationName:0,elapsedTime:0,pseudoElement:0}),Np=ze(Fp),Ap=Y({},Nn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pp=ze(Ap),zp=Y({},Nn,{data:0}),Wa=ze(zp),Dp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _p(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=bp[e])?!!t[e]:!1}function Ki(){return _p}var jp=Y({},Er,{key:function(e){if(e.key){var t=Dp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Xr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Bp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ki,charCode:function(e){return e.type==="keypress"?Xr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Lp=ze(jp),Tp=Y({},jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ha=ze(Tp),Rp=Y({},Er,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ki}),Mp=ze(Rp),Ip=Y({},Nn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Op=ze(Ip),Up=Y({},jo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$p=ze(Up),Vp=[9,13,27,32],Qi=rt&&"CompositionEvent"in window,Kn=null;rt&&"documentMode"in document&&(Kn=document.documentMode);var Wp=rt&&"TextEvent"in window&&!Kn,Is=rt&&(!Qi||Kn&&8<Kn&&11>=Kn),Ka=String.fromCharCode(32),Qa=!1;function Os(e,t){switch(e){case"keyup":return Vp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Us(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var tn=!1;function Hp(e,t){switch(e){case"compositionend":return Us(t);case"keypress":return t.which!==32?null:(Qa=!0,Ka);case"textInput":return e=t.data,e===Ka&&Qa?null:e;default:return null}}function Kp(e,t){if(tn)return e==="compositionend"||!Qi&&Os(e,t)?(e=Ms(),Yr=Wi=ht=null,tn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Is&&t.locale!=="ko"?null:t.data;default:return null}}var Qp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ga(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Qp[e.type]:t==="textarea"}function $s(e,t,n,r){xs(r),t=fo(t,"onChange"),0<t.length&&(n=new Hi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Qn=null,lr=null;function Gp(e){qs(e,0)}function Lo(e){var t=on(e);if(ps(t))return e}function Yp(e,t){if(e==="change")return t}var Vs=!1;if(rt){var dl;if(rt){var pl="oninput"in document;if(!pl){var Ya=document.createElement("div");Ya.setAttribute("oninput","return;"),pl=typeof Ya.oninput=="function"}dl=pl}else dl=!1;Vs=dl&&(!document.documentMode||9<document.documentMode)}function Xa(){Qn&&(Qn.detachEvent("onpropertychange",Ws),lr=Qn=null)}function Ws(e){if(e.propertyName==="value"&&Lo(lr)){var t=[];$s(t,lr,e,Ii(e)),Cs(Gp,t)}}function Xp(e,t,n){e==="focusin"?(Xa(),Qn=t,lr=n,Qn.attachEvent("onpropertychange",Ws)):e==="focusout"&&Xa()}function Zp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Lo(lr)}function Jp(e,t){if(e==="click")return Lo(t)}function qp(e,t){if(e==="input"||e==="change")return Lo(t)}function ef(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ve=typeof Object.is=="function"?Object.is:ef;function ir(e,t){if(Ve(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!bl.call(t,o)||!Ve(e[o],t[o]))return!1}return!0}function Za(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ja(e,t){var n=Za(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Za(n)}}function Hs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ks(){for(var e=window,t=lo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=lo(e.document)}return t}function Gi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function tf(e){var t=Ks(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Hs(n.ownerDocument.documentElement,n)){if(r!==null&&Gi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=Ja(n,l);var i=Ja(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var nf=rt&&"documentMode"in document&&11>=document.documentMode,nn=null,Zl=null,Gn=null,Jl=!1;function qa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Jl||nn==null||nn!==lo(r)||(r=nn,"selectionStart"in r&&Gi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gn&&ir(Gn,r)||(Gn=r,r=fo(Zl,"onSelect"),0<r.length&&(t=new Hi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=nn)))}function Rr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var rn={animationend:Rr("Animation","AnimationEnd"),animationiteration:Rr("Animation","AnimationIteration"),animationstart:Rr("Animation","AnimationStart"),transitionend:Rr("Transition","TransitionEnd")},fl={},Qs={};rt&&(Qs=document.createElement("div").style,"AnimationEvent"in window||(delete rn.animationend.animation,delete rn.animationiteration.animation,delete rn.animationstart.animation),"TransitionEvent"in window||delete rn.transitionend.transition);function To(e){if(fl[e])return fl[e];if(!rn[e])return e;var t=rn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Qs)return fl[e]=t[n];return e}var Gs=To("animationend"),Ys=To("animationiteration"),Xs=To("animationstart"),Zs=To("transitionend"),Js=new Map,eu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pt(e,t){Js.set(e,t),Wt(t,[e])}for(var hl=0;hl<eu.length;hl++){var ml=eu[hl],rf=ml.toLowerCase(),of=ml[0].toUpperCase()+ml.slice(1);Pt(rf,"on"+of)}Pt(Gs,"onAnimationEnd");Pt(Ys,"onAnimationIteration");Pt(Xs,"onAnimationStart");Pt("dblclick","onDoubleClick");Pt("focusin","onFocus");Pt("focusout","onBlur");Pt(Zs,"onTransitionEnd");vn("onMouseEnter",["mouseout","mouseover"]);vn("onMouseLeave",["mouseout","mouseover"]);vn("onPointerEnter",["pointerout","pointerover"]);vn("onPointerLeave",["pointerout","pointerover"]);Wt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vn));function tu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,rp(r,t,void 0,e),e.currentTarget=null}function qs(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var a=r[i],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==l&&o.isPropagationStopped())break e;tu(o,a,c),l=u}else for(i=0;i<r.length;i++){if(a=r[i],u=a.instance,c=a.currentTarget,a=a.listener,u!==l&&o.isPropagationStopped())break e;tu(o,a,c),l=u}}}if(ao)throw e=Ql,ao=!1,Ql=null,e}function U(e,t){var n=t[ri];n===void 0&&(n=t[ri]=new Set);var r=e+"__bubble";n.has(r)||(ec(t,e,2,!1),n.add(r))}function gl(e,t,n){var r=0;t&&(r|=4),ec(n,e,r,t)}var Mr="_reactListening"+Math.random().toString(36).slice(2);function ar(e){if(!e[Mr]){e[Mr]=!0,as.forEach(function(n){n!=="selectionchange"&&(lf.has(n)||gl(n,!1,e),gl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Mr]||(t[Mr]=!0,gl("selectionchange",!1,t))}}function ec(e,t,n,r){switch(Rs(t)){case 1:var o=xp;break;case 4:o=wp;break;default:o=Vi}n=o.bind(null,t,n,e),o=void 0,!Kl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function yl(e,t,n,r,o){var l=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var u=i.tag;if((u===3||u===4)&&(u=i.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;i=i.return}for(;a!==null;){if(i=jt(a),i===null)return;if(u=i.tag,u===5||u===6){r=l=i;continue e}a=a.parentNode}}r=r.return}Cs(function(){var c=l,y=Ii(n),g=[];e:{var m=Js.get(e);if(m!==void 0){var x=Hi,E=e;switch(e){case"keypress":if(Xr(n)===0)break e;case"keydown":case"keyup":x=Lp;break;case"focusin":E="focus",x=cl;break;case"focusout":E="blur",x=cl;break;case"beforeblur":case"afterblur":x=cl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Va;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Cp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Mp;break;case Gs:case Ys:case Xs:x=Np;break;case Zs:x=Op;break;case"scroll":x=kp;break;case"wheel":x=$p;break;case"copy":case"cut":case"paste":x=Pp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Ha}var k=(t&4)!==0,D=!k&&e==="scroll",p=k?m!==null?m+"Capture":null:m;k=[];for(var d=c,f;d!==null;){f=d;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,p!==null&&(v=tr(d,p),v!=null&&k.push(ur(d,v,f)))),D)break;d=d.return}0<k.length&&(m=new x(m,E,null,n,y),g.push({event:m,listeners:k}))}}if((t&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&n!==Wl&&(E=n.relatedTarget||n.fromElement)&&(jt(E)||E[ot]))break e;if((x||m)&&(m=y.window===y?y:(m=y.ownerDocument)?m.defaultView||m.parentWindow:window,x?(E=n.relatedTarget||n.toElement,x=c,E=E?jt(E):null,E!==null&&(D=Ht(E),E!==D||E.tag!==5&&E.tag!==6)&&(E=null)):(x=null,E=c),x!==E)){if(k=Va,v="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(k=Ha,v="onPointerLeave",p="onPointerEnter",d="pointer"),D=x==null?m:on(x),f=E==null?m:on(E),m=new k(v,d+"leave",x,n,y),m.target=D,m.relatedTarget=f,v=null,jt(y)===c&&(k=new k(p,d+"enter",E,n,y),k.target=f,k.relatedTarget=D,v=k),D=v,x&&E)t:{for(k=x,p=E,d=0,f=k;f;f=Zt(f))d++;for(f=0,v=p;v;v=Zt(v))f++;for(;0<d-f;)k=Zt(k),d--;for(;0<f-d;)p=Zt(p),f--;for(;d--;){if(k===p||p!==null&&k===p.alternate)break t;k=Zt(k),p=Zt(p)}k=null}else k=null;x!==null&&nu(g,m,x,k,!1),E!==null&&D!==null&&nu(g,D,E,k,!0)}}e:{if(m=c?on(c):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var w=Yp;else if(Ga(m))if(Vs)w=qp;else{w=Zp;var N=Xp}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(w=Jp);if(w&&(w=w(e,c))){$s(g,w,n,y);break e}N&&N(e,m,c),e==="focusout"&&(N=m._wrapperState)&&N.controlled&&m.type==="number"&&Il(m,"number",m.value)}switch(N=c?on(c):window,e){case"focusin":(Ga(N)||N.contentEditable==="true")&&(nn=N,Zl=c,Gn=null);break;case"focusout":Gn=Zl=nn=null;break;case"mousedown":Jl=!0;break;case"contextmenu":case"mouseup":case"dragend":Jl=!1,qa(g,n,y);break;case"selectionchange":if(nf)break;case"keydown":case"keyup":qa(g,n,y)}var A;if(Qi)e:{switch(e){case"compositionstart":var B="onCompositionStart";break e;case"compositionend":B="onCompositionEnd";break e;case"compositionupdate":B="onCompositionUpdate";break e}B=void 0}else tn?Os(e,n)&&(B="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(B="onCompositionStart");B&&(Is&&n.locale!=="ko"&&(tn||B!=="onCompositionStart"?B==="onCompositionEnd"&&tn&&(A=Ms()):(ht=y,Wi="value"in ht?ht.value:ht.textContent,tn=!0)),N=fo(c,B),0<N.length&&(B=new Wa(B,e,null,n,y),g.push({event:B,listeners:N}),A?B.data=A:(A=Us(n),A!==null&&(B.data=A)))),(A=Wp?Hp(e,n):Kp(e,n))&&(c=fo(c,"onBeforeInput"),0<c.length&&(y=new Wa("onBeforeInput","beforeinput",null,n,y),g.push({event:y,listeners:c}),y.data=A))}qs(g,t)})}function ur(e,t,n){return{instance:e,listener:t,currentTarget:n}}function fo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=tr(e,n),l!=null&&r.unshift(ur(e,l,o)),l=tr(e,t),l!=null&&r.push(ur(e,l,o))),e=e.return}return r}function Zt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function nu(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,o?(u=tr(n,l),u!=null&&i.unshift(ur(n,u,a))):o||(u=tr(n,l),u!=null&&i.push(ur(n,u,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var af=/\r\n?/g,uf=/\u0000|\uFFFD/g;function ru(e){return(typeof e=="string"?e:""+e).replace(af,`
`).replace(uf,"")}function Ir(e,t,n){if(t=ru(t),ru(e)!==t&&n)throw Error(S(425))}function ho(){}var ql=null,ei=null;function ti(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ni=typeof setTimeout=="function"?setTimeout:void 0,sf=typeof clearTimeout=="function"?clearTimeout:void 0,ou=typeof Promise=="function"?Promise:void 0,cf=typeof queueMicrotask=="function"?queueMicrotask:typeof ou<"u"?function(e){return ou.resolve(null).then(e).catch(df)}:ni;function df(e){setTimeout(function(){throw e})}function vl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),or(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);or(t)}function wt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function lu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var An=Math.random().toString(36).slice(2),Ge="__reactFiber$"+An,sr="__reactProps$"+An,ot="__reactContainer$"+An,ri="__reactEvents$"+An,pf="__reactListeners$"+An,ff="__reactHandles$"+An;function jt(e){var t=e[Ge];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ot]||n[Ge]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=lu(e);e!==null;){if(n=e[Ge])return n;e=lu(e)}return t}e=n,n=e.parentNode}return null}function Cr(e){return e=e[Ge]||e[ot],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function on(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Ro(e){return e[sr]||null}var oi=[],ln=-1;function zt(e){return{current:e}}function $(e){0>ln||(e.current=oi[ln],oi[ln]=null,ln--)}function O(e,t){ln++,oi[ln]=e.current,e.current=t}var At={},he=zt(At),ke=zt(!1),It=At;function xn(e,t){var n=e.type.contextTypes;if(!n)return At;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ee(e){return e=e.childContextTypes,e!=null}function mo(){$(ke),$(he)}function iu(e,t,n){if(he.current!==At)throw Error(S(168));O(he,t),O(ke,n)}function tc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(S(108,Xd(e)||"Unknown",o));return Y({},n,r)}function go(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||At,It=he.current,O(he,e),O(ke,ke.current),!0}function au(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=tc(e,t,It),r.__reactInternalMemoizedMergedChildContext=e,$(ke),$(he),O(he,e)):$(ke),O(ke,n)}var qe=null,Mo=!1,xl=!1;function nc(e){qe===null?qe=[e]:qe.push(e)}function hf(e){Mo=!0,nc(e)}function Dt(){if(!xl&&qe!==null){xl=!0;var e=0,t=M;try{var n=qe;for(M=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}qe=null,Mo=!1}catch(o){throw qe!==null&&(qe=qe.slice(e+1)),As(Oi,Dt),o}finally{M=t,xl=!1}}return null}var an=[],un=0,yo=null,vo=0,De=[],Be=0,Ot=null,et=1,tt="";function bt(e,t){an[un++]=vo,an[un++]=yo,yo=e,vo=t}function rc(e,t,n){De[Be++]=et,De[Be++]=tt,De[Be++]=Ot,Ot=e;var r=et;e=tt;var o=32-Ue(r)-1;r&=~(1<<o),n+=1;var l=32-Ue(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,et=1<<32-Ue(t)+o|n<<o|r,tt=l+e}else et=1<<l|n<<o|r,tt=e}function Yi(e){e.return!==null&&(bt(e,1),rc(e,1,0))}function Xi(e){for(;e===yo;)yo=an[--un],an[un]=null,vo=an[--un],an[un]=null;for(;e===Ot;)Ot=De[--Be],De[Be]=null,tt=De[--Be],De[Be]=null,et=De[--Be],De[Be]=null}var Ne=null,Fe=null,W=!1,Oe=null;function oc(e,t){var n=be(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function uu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ne=e,Fe=wt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ne=e,Fe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ot!==null?{id:et,overflow:tt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=be(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ne=e,Fe=null,!0):!1;default:return!1}}function li(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ii(e){if(W){var t=Fe;if(t){var n=t;if(!uu(e,t)){if(li(e))throw Error(S(418));t=wt(n.nextSibling);var r=Ne;t&&uu(e,t)?oc(r,n):(e.flags=e.flags&-4097|2,W=!1,Ne=e)}}else{if(li(e))throw Error(S(418));e.flags=e.flags&-4097|2,W=!1,Ne=e}}}function su(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ne=e}function Or(e){if(e!==Ne)return!1;if(!W)return su(e),W=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ti(e.type,e.memoizedProps)),t&&(t=Fe)){if(li(e))throw lc(),Error(S(418));for(;t;)oc(e,t),t=wt(t.nextSibling)}if(su(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Fe=wt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Fe=null}}else Fe=Ne?wt(e.stateNode.nextSibling):null;return!0}function lc(){for(var e=Fe;e;)e=wt(e.nextSibling)}function wn(){Fe=Ne=null,W=!1}function Zi(e){Oe===null?Oe=[e]:Oe.push(e)}var mf=at.ReactCurrentBatchConfig;function Tn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var a=o.refs;i===null?delete a[l]:a[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function Ur(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function cu(e){var t=e._init;return t(e._payload)}function ic(e){function t(p,d){if(e){var f=p.deletions;f===null?(p.deletions=[d],p.flags|=16):f.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function o(p,d){return p=St(p,d),p.index=0,p.sibling=null,p}function l(p,d,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<d?(p.flags|=2,d):f):(p.flags|=2,d)):(p.flags|=1048576,d)}function i(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,d,f,v){return d===null||d.tag!==6?(d=Nl(f,p.mode,v),d.return=p,d):(d=o(d,f),d.return=p,d)}function u(p,d,f,v){var w=f.type;return w===en?y(p,d,f.props.children,v,f.key):d!==null&&(d.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===ct&&cu(w)===d.type)?(v=o(d,f.props),v.ref=Tn(p,d,f),v.return=p,v):(v=ro(f.type,f.key,f.props,null,p.mode,v),v.ref=Tn(p,d,f),v.return=p,v)}function c(p,d,f,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==f.containerInfo||d.stateNode.implementation!==f.implementation?(d=Al(f,p.mode,v),d.return=p,d):(d=o(d,f.children||[]),d.return=p,d)}function y(p,d,f,v,w){return d===null||d.tag!==7?(d=Mt(f,p.mode,v,w),d.return=p,d):(d=o(d,f),d.return=p,d)}function g(p,d,f){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Nl(""+d,p.mode,f),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Dr:return f=ro(d.type,d.key,d.props,null,p.mode,f),f.ref=Tn(p,null,d),f.return=p,f;case qt:return d=Al(d,p.mode,f),d.return=p,d;case ct:var v=d._init;return g(p,v(d._payload),f)}if(Un(d)||Bn(d))return d=Mt(d,p.mode,f,null),d.return=p,d;Ur(p,d)}return null}function m(p,d,f,v){var w=d!==null?d.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return w!==null?null:a(p,d,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Dr:return f.key===w?u(p,d,f,v):null;case qt:return f.key===w?c(p,d,f,v):null;case ct:return w=f._init,m(p,d,w(f._payload),v)}if(Un(f)||Bn(f))return w!==null?null:y(p,d,f,v,null);Ur(p,f)}return null}function x(p,d,f,v,w){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(f)||null,a(d,p,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Dr:return p=p.get(v.key===null?f:v.key)||null,u(d,p,v,w);case qt:return p=p.get(v.key===null?f:v.key)||null,c(d,p,v,w);case ct:var N=v._init;return x(p,d,f,N(v._payload),w)}if(Un(v)||Bn(v))return p=p.get(f)||null,y(d,p,v,w,null);Ur(d,v)}return null}function E(p,d,f,v){for(var w=null,N=null,A=d,B=d=0,V=null;A!==null&&B<f.length;B++){A.index>B?(V=A,A=null):V=A.sibling;var L=m(p,A,f[B],v);if(L===null){A===null&&(A=V);break}e&&A&&L.alternate===null&&t(p,A),d=l(L,d,B),N===null?w=L:N.sibling=L,N=L,A=V}if(B===f.length)return n(p,A),W&&bt(p,B),w;if(A===null){for(;B<f.length;B++)A=g(p,f[B],v),A!==null&&(d=l(A,d,B),N===null?w=A:N.sibling=A,N=A);return W&&bt(p,B),w}for(A=r(p,A);B<f.length;B++)V=x(A,p,B,f[B],v),V!==null&&(e&&V.alternate!==null&&A.delete(V.key===null?B:V.key),d=l(V,d,B),N===null?w=V:N.sibling=V,N=V);return e&&A.forEach(function(re){return t(p,re)}),W&&bt(p,B),w}function k(p,d,f,v){var w=Bn(f);if(typeof w!="function")throw Error(S(150));if(f=w.call(f),f==null)throw Error(S(151));for(var N=w=null,A=d,B=d=0,V=null,L=f.next();A!==null&&!L.done;B++,L=f.next()){A.index>B?(V=A,A=null):V=A.sibling;var re=m(p,A,L.value,v);if(re===null){A===null&&(A=V);break}e&&A&&re.alternate===null&&t(p,A),d=l(re,d,B),N===null?w=re:N.sibling=re,N=re,A=V}if(L.done)return n(p,A),W&&bt(p,B),w;if(A===null){for(;!L.done;B++,L=f.next())L=g(p,L.value,v),L!==null&&(d=l(L,d,B),N===null?w=L:N.sibling=L,N=L);return W&&bt(p,B),w}for(A=r(p,A);!L.done;B++,L=f.next())L=x(A,p,B,L.value,v),L!==null&&(e&&L.alternate!==null&&A.delete(L.key===null?B:L.key),d=l(L,d,B),N===null?w=L:N.sibling=L,N=L);return e&&A.forEach(function(Bt){return t(p,Bt)}),W&&bt(p,B),w}function D(p,d,f,v){if(typeof f=="object"&&f!==null&&f.type===en&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Dr:e:{for(var w=f.key,N=d;N!==null;){if(N.key===w){if(w=f.type,w===en){if(N.tag===7){n(p,N.sibling),d=o(N,f.props.children),d.return=p,p=d;break e}}else if(N.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===ct&&cu(w)===N.type){n(p,N.sibling),d=o(N,f.props),d.ref=Tn(p,N,f),d.return=p,p=d;break e}n(p,N);break}else t(p,N);N=N.sibling}f.type===en?(d=Mt(f.props.children,p.mode,v,f.key),d.return=p,p=d):(v=ro(f.type,f.key,f.props,null,p.mode,v),v.ref=Tn(p,d,f),v.return=p,p=v)}return i(p);case qt:e:{for(N=f.key;d!==null;){if(d.key===N)if(d.tag===4&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){n(p,d.sibling),d=o(d,f.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=Al(f,p.mode,v),d.return=p,p=d}return i(p);case ct:return N=f._init,D(p,d,N(f._payload),v)}if(Un(f))return E(p,d,f,v);if(Bn(f))return k(p,d,f,v);Ur(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,d!==null&&d.tag===6?(n(p,d.sibling),d=o(d,f),d.return=p,p=d):(n(p,d),d=Nl(f,p.mode,v),d.return=p,p=d),i(p)):n(p,d)}return D}var kn=ic(!0),ac=ic(!1),xo=zt(null),wo=null,sn=null,Ji=null;function qi(){Ji=sn=wo=null}function ea(e){var t=xo.current;$(xo),e._currentValue=t}function ai(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function gn(e,t){wo=e,Ji=sn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(we=!0),e.firstContext=null)}function je(e){var t=e._currentValue;if(Ji!==e)if(e={context:e,memoizedValue:t,next:null},sn===null){if(wo===null)throw Error(S(308));sn=e,wo.dependencies={lanes:0,firstContext:e}}else sn=sn.next=e;return t}var Lt=null;function ta(e){Lt===null?Lt=[e]:Lt.push(e)}function uc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,ta(t)):(n.next=o.next,o.next=n),t.interleaved=n,lt(e,r)}function lt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var dt=!1;function na(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function kt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(R&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,lt(e,n)}return o=r.interleaved,o===null?(t.next=t,ta(r)):(t.next=o.next,o.next=t),r.interleaved=t,lt(e,n)}function Zr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ui(e,n)}}function du(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ko(e,t,n,r){var o=e.updateQueue;dt=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var u=a,c=u.next;u.next=null,i===null?l=c:i.next=c,i=u;var y=e.alternate;y!==null&&(y=y.updateQueue,a=y.lastBaseUpdate,a!==i&&(a===null?y.firstBaseUpdate=c:a.next=c,y.lastBaseUpdate=u))}if(l!==null){var g=o.baseState;i=0,y=c=u=null,a=l;do{var m=a.lane,x=a.eventTime;if((r&m)===m){y!==null&&(y=y.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var E=e,k=a;switch(m=t,x=n,k.tag){case 1:if(E=k.payload,typeof E=="function"){g=E.call(x,g,m);break e}g=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=k.payload,m=typeof E=="function"?E.call(x,g,m):E,m==null)break e;g=Y({},g,m);break e;case 2:dt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[a]:m.push(a))}else x={eventTime:x,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},y===null?(c=y=x,u=g):y=y.next=x,i|=m;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;m=a,a=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(1);if(y===null&&(u=g),o.baseState=u,o.firstBaseUpdate=c,o.lastBaseUpdate=y,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);$t|=i,e.lanes=i,e.memoizedState=g}}function pu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(S(191,o));o.call(r)}}}var Sr={},Xe=zt(Sr),cr=zt(Sr),dr=zt(Sr);function Tt(e){if(e===Sr)throw Error(S(174));return e}function ra(e,t){switch(O(dr,t),O(cr,e),O(Xe,Sr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ul(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ul(t,e)}$(Xe),O(Xe,t)}function En(){$(Xe),$(cr),$(dr)}function cc(e){Tt(dr.current);var t=Tt(Xe.current),n=Ul(t,e.type);t!==n&&(O(cr,e),O(Xe,n))}function oa(e){cr.current===e&&($(Xe),$(cr))}var K=zt(0);function Eo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var wl=[];function la(){for(var e=0;e<wl.length;e++)wl[e]._workInProgressVersionPrimary=null;wl.length=0}var Jr=at.ReactCurrentDispatcher,kl=at.ReactCurrentBatchConfig,Ut=0,G=null,ee=null,le=null,Co=!1,Yn=!1,pr=0,gf=0;function de(){throw Error(S(321))}function ia(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ve(e[n],t[n]))return!1;return!0}function aa(e,t,n,r,o,l){if(Ut=l,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Jr.current=e===null||e.memoizedState===null?wf:kf,e=n(r,o),Yn){l=0;do{if(Yn=!1,pr=0,25<=l)throw Error(S(301));l+=1,le=ee=null,t.updateQueue=null,Jr.current=Ef,e=n(r,o)}while(Yn)}if(Jr.current=So,t=ee!==null&&ee.next!==null,Ut=0,le=ee=G=null,Co=!1,t)throw Error(S(300));return e}function ua(){var e=pr!==0;return pr=0,e}function Qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?G.memoizedState=le=e:le=le.next=e,le}function Le(){if(ee===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var t=le===null?G.memoizedState:le.next;if(t!==null)le=t,ee=e;else{if(e===null)throw Error(S(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},le===null?G.memoizedState=le=e:le=le.next=e}return le}function fr(e,t){return typeof t=="function"?t(e):t}function El(e){var t=Le(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=ee,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var a=i=null,u=null,c=l;do{var y=c.lane;if((Ut&y)===y)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var g={lane:y,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=g,i=r):u=u.next=g,G.lanes|=y,$t|=y}c=c.next}while(c!==null&&c!==l);u===null?i=r:u.next=a,Ve(r,t.memoizedState)||(we=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,G.lanes|=l,$t|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Cl(e){var t=Le(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);Ve(l,t.memoizedState)||(we=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function dc(){}function pc(e,t){var n=G,r=Le(),o=t(),l=!Ve(r.memoizedState,o);if(l&&(r.memoizedState=o,we=!0),r=r.queue,sa(mc.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,hr(9,hc.bind(null,n,r,o,t),void 0,null),ie===null)throw Error(S(349));(Ut&30)!==0||fc(n,t,o)}return o}function fc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function hc(e,t,n,r){t.value=n,t.getSnapshot=r,gc(t)&&yc(e)}function mc(e,t,n){return n(function(){gc(t)&&yc(e)})}function gc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ve(e,n)}catch{return!0}}function yc(e){var t=lt(e,1);t!==null&&$e(t,e,1,-1)}function fu(e){var t=Qe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fr,lastRenderedState:e},t.queue=e,e=e.dispatch=xf.bind(null,G,e),[t.memoizedState,e]}function hr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function vc(){return Le().memoizedState}function qr(e,t,n,r){var o=Qe();G.flags|=e,o.memoizedState=hr(1|t,n,void 0,r===void 0?null:r)}function Io(e,t,n,r){var o=Le();r=r===void 0?null:r;var l=void 0;if(ee!==null){var i=ee.memoizedState;if(l=i.destroy,r!==null&&ia(r,i.deps)){o.memoizedState=hr(t,n,l,r);return}}G.flags|=e,o.memoizedState=hr(1|t,n,l,r)}function hu(e,t){return qr(8390656,8,e,t)}function sa(e,t){return Io(2048,8,e,t)}function xc(e,t){return Io(4,2,e,t)}function wc(e,t){return Io(4,4,e,t)}function kc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ec(e,t,n){return n=n!=null?n.concat([e]):null,Io(4,4,kc.bind(null,t,e),n)}function ca(){}function Cc(e,t){var n=Le();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ia(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Sc(e,t){var n=Le();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ia(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Fc(e,t,n){return(Ut&21)===0?(e.baseState&&(e.baseState=!1,we=!0),e.memoizedState=n):(Ve(n,t)||(n=Ds(),G.lanes|=n,$t|=n,e.baseState=!0),t)}function yf(e,t){var n=M;M=n!==0&&4>n?n:4,e(!0);var r=kl.transition;kl.transition={};try{e(!1),t()}finally{M=n,kl.transition=r}}function Nc(){return Le().memoizedState}function vf(e,t,n){var r=Ct(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ac(e))Pc(t,n);else if(n=uc(e,t,n,r),n!==null){var o=ge();$e(n,e,r,o),zc(n,t,r)}}function xf(e,t,n){var r=Ct(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ac(e))Pc(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,a=l(i,n);if(o.hasEagerState=!0,o.eagerState=a,Ve(a,i)){var u=t.interleaved;u===null?(o.next=o,ta(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=uc(e,t,o,r),n!==null&&(o=ge(),$e(n,e,r,o),zc(n,t,r))}}function Ac(e){var t=e.alternate;return e===G||t!==null&&t===G}function Pc(e,t){Yn=Co=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function zc(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ui(e,n)}}var So={readContext:je,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,useId:de,unstable_isNewReconciler:!1},wf={readContext:je,useCallback:function(e,t){return Qe().memoizedState=[e,t===void 0?null:t],e},useContext:je,useEffect:hu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,qr(4194308,4,kc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return qr(4194308,4,e,t)},useInsertionEffect:function(e,t){return qr(4,2,e,t)},useMemo:function(e,t){var n=Qe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Qe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=vf.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var t=Qe();return e={current:e},t.memoizedState=e},useState:fu,useDebugValue:ca,useDeferredValue:function(e){return Qe().memoizedState=e},useTransition:function(){var e=fu(!1),t=e[0];return e=yf.bind(null,e[1]),Qe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=G,o=Qe();if(W){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),ie===null)throw Error(S(349));(Ut&30)!==0||fc(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,hu(mc.bind(null,r,l,e),[e]),r.flags|=2048,hr(9,hc.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Qe(),t=ie.identifierPrefix;if(W){var n=tt,r=et;n=(r&~(1<<32-Ue(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=pr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=gf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},kf={readContext:je,useCallback:Cc,useContext:je,useEffect:sa,useImperativeHandle:Ec,useInsertionEffect:xc,useLayoutEffect:wc,useMemo:Sc,useReducer:El,useRef:vc,useState:function(){return El(fr)},useDebugValue:ca,useDeferredValue:function(e){var t=Le();return Fc(t,ee.memoizedState,e)},useTransition:function(){var e=El(fr)[0],t=Le().memoizedState;return[e,t]},useMutableSource:dc,useSyncExternalStore:pc,useId:Nc,unstable_isNewReconciler:!1},Ef={readContext:je,useCallback:Cc,useContext:je,useEffect:sa,useImperativeHandle:Ec,useInsertionEffect:xc,useLayoutEffect:wc,useMemo:Sc,useReducer:Cl,useRef:vc,useState:function(){return Cl(fr)},useDebugValue:ca,useDeferredValue:function(e){var t=Le();return ee===null?t.memoizedState=e:Fc(t,ee.memoizedState,e)},useTransition:function(){var e=Cl(fr)[0],t=Le().memoizedState;return[e,t]},useMutableSource:dc,useSyncExternalStore:pc,useId:Nc,unstable_isNewReconciler:!1};function Me(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ui(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Oo={isMounted:function(e){return(e=e._reactInternals)?Ht(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ge(),o=Ct(e),l=nt(r,o);l.payload=t,n!=null&&(l.callback=n),t=kt(e,l,o),t!==null&&($e(t,e,o,r),Zr(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ge(),o=Ct(e),l=nt(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=kt(e,l,o),t!==null&&($e(t,e,o,r),Zr(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ge(),r=Ct(e),o=nt(n,r);o.tag=2,t!=null&&(o.callback=t),t=kt(e,o,r),t!==null&&($e(t,e,r,n),Zr(t,e,r))}};function mu(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!ir(n,r)||!ir(o,l):!0}function Dc(e,t,n){var r=!1,o=At,l=t.contextType;return typeof l=="object"&&l!==null?l=je(l):(o=Ee(t)?It:he.current,r=t.contextTypes,l=(r=r!=null)?xn(e,o):At),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Oo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function gu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Oo.enqueueReplaceState(t,t.state,null)}function si(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},na(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=je(l):(l=Ee(t)?It:he.current,o.context=xn(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(ui(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Oo.enqueueReplaceState(o,o.state,null),ko(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Cn(e,t){try{var n="",r=t;do n+=Yd(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function Sl(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function ci(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Cf=typeof WeakMap=="function"?WeakMap:Map;function Bc(e,t,n){n=nt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){No||(No=!0,wi=r),ci(e,t)},n}function bc(e,t,n){n=nt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ci(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){ci(e,t),typeof r!="function"&&(Et===null?Et=new Set([this]):Et.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function yu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Cf;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Rf.bind(null,e,t,n),t.then(e,e))}function vu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function xu(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=nt(-1,1),t.tag=2,kt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var Sf=at.ReactCurrentOwner,we=!1;function me(e,t,n,r){t.child=e===null?ac(t,null,n,r):kn(t,e.child,n,r)}function wu(e,t,n,r,o){n=n.render;var l=t.ref;return gn(t,o),r=aa(e,t,n,r,l,o),n=ua(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,it(e,t,o)):(W&&n&&Yi(t),t.flags|=1,me(e,t,r,o),t.child)}function ku(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!va(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,_c(e,t,l,r,o)):(e=ro(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,(e.lanes&o)===0){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:ir,n(i,r)&&e.ref===t.ref)return it(e,t,o)}return t.flags|=1,e=St(l,r),e.ref=t.ref,e.return=t,t.child=e}function _c(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(ir(l,r)&&e.ref===t.ref)if(we=!1,t.pendingProps=r=l,(e.lanes&o)!==0)(e.flags&131072)!==0&&(we=!0);else return t.lanes=e.lanes,it(e,t,o)}return di(e,t,n,r,o)}function jc(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(dn,Se),Se|=n;else{if((n&1073741824)===0)return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,O(dn,Se),Se|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,O(dn,Se),Se|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,O(dn,Se),Se|=r;return me(e,t,o,n),t.child}function Lc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function di(e,t,n,r,o){var l=Ee(n)?It:he.current;return l=xn(t,l),gn(t,o),n=aa(e,t,n,r,l,o),r=ua(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,it(e,t,o)):(W&&r&&Yi(t),t.flags|=1,me(e,t,n,o),t.child)}function Eu(e,t,n,r,o){if(Ee(n)){var l=!0;go(t)}else l=!1;if(gn(t,o),t.stateNode===null)eo(e,t),Dc(t,n,r),si(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var u=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=je(c):(c=Ee(n)?It:he.current,c=xn(t,c));var y=n.getDerivedStateFromProps,g=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function";g||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||u!==c)&&gu(t,i,r,c),dt=!1;var m=t.memoizedState;i.state=m,ko(t,r,i,o),u=t.memoizedState,a!==r||m!==u||ke.current||dt?(typeof y=="function"&&(ui(t,n,y,r),u=t.memoizedState),(a=dt||mu(t,n,a,r,m,u,c))?(g||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),i.props=r,i.state=u,i.context=c,r=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,sc(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Me(t.type,a),i.props=c,g=t.pendingProps,m=i.context,u=n.contextType,typeof u=="object"&&u!==null?u=je(u):(u=Ee(n)?It:he.current,u=xn(t,u));var x=n.getDerivedStateFromProps;(y=typeof x=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==g||m!==u)&&gu(t,i,r,u),dt=!1,m=t.memoizedState,i.state=m,ko(t,r,i,o);var E=t.memoizedState;a!==g||m!==E||ke.current||dt?(typeof x=="function"&&(ui(t,n,x,r),E=t.memoizedState),(c=dt||mu(t,n,c,r,m,E,u)||!1)?(y||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,E,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,E,u)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=E),i.props=r,i.state=E,i.context=u,r=c):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return pi(e,t,n,r,l,o)}function pi(e,t,n,r,o,l){Lc(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&au(t,n,!1),it(e,t,l);r=t.stateNode,Sf.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=kn(t,e.child,null,l),t.child=kn(t,null,a,l)):me(e,t,a,l),t.memoizedState=r.state,o&&au(t,n,!0),t.child}function Tc(e){var t=e.stateNode;t.pendingContext?iu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&iu(e,t.context,!1),ra(e,t.containerInfo)}function Cu(e,t,n,r,o){return wn(),Zi(o),t.flags|=256,me(e,t,n,r),t.child}var fi={dehydrated:null,treeContext:null,retryLane:0};function hi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Rc(e,t,n){var r=t.pendingProps,o=K.current,l=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),O(K,o&1),e===null)return ii(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},(r&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=i):l=Vo(i,r,0,null),e=Mt(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=hi(n),t.memoizedState=fi,e):da(t,i));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Ff(e,t,i,r,a,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,a=o.sibling;var u={mode:"hidden",children:r.children};return(i&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=St(o,u),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?l=St(a,l):(l=Mt(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?hi(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=fi,r}return l=e.child,e=l.sibling,r=St(l,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function da(e,t){return t=Vo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function $r(e,t,n,r){return r!==null&&Zi(r),kn(t,e.child,null,n),e=da(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ff(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=Sl(Error(S(422))),$r(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=Vo({mode:"visible",children:r.children},o,0,null),l=Mt(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,(t.mode&1)!==0&&kn(t,e.child,null,i),t.child.memoizedState=hi(i),t.memoizedState=fi,l);if((t.mode&1)===0)return $r(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(S(419)),r=Sl(l,r,void 0),$r(e,t,i,r)}if(a=(i&e.childLanes)!==0,we||a){if(r=ie,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|i))!==0?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,lt(e,o),$e(r,e,o,-1))}return ya(),r=Sl(Error(S(421))),$r(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Mf.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,Fe=wt(o.nextSibling),Ne=t,W=!0,Oe=null,e!==null&&(De[Be++]=et,De[Be++]=tt,De[Be++]=Ot,et=e.id,tt=e.overflow,Ot=t),t=da(t,r.children),t.flags|=4096,t)}function Su(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ai(e.return,t,n)}function Fl(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function Mc(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(me(e,t,r.children,n),r=K.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Su(e,n,t);else if(e.tag===19)Su(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(O(K,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Eo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Fl(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Eo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Fl(t,!0,n,null,l);break;case"together":Fl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function eo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function it(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),$t|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=St(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=St(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Nf(e,t,n){switch(t.tag){case 3:Tc(t),wn();break;case 5:cc(t);break;case 1:Ee(t.type)&&go(t);break;case 4:ra(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;O(xo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(O(K,K.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Rc(e,t,n):(O(K,K.current&1),e=it(e,t,n),e!==null?e.sibling:null);O(K,K.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Mc(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),O(K,K.current),r)break;return null;case 22:case 23:return t.lanes=0,jc(e,t,n)}return it(e,t,n)}var Ic,mi,Oc,Uc;Ic=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};mi=function(){};Oc=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Tt(Xe.current);var l=null;switch(n){case"input":o=Rl(e,o),r=Rl(e,r),l=[];break;case"select":o=Y({},o,{value:void 0}),r=Y({},r,{value:void 0}),l=[];break;case"textarea":o=Ol(e,o),r=Ol(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ho)}$l(n,r);var i;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(qn.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var u=r[c];if(a=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(i in a)!a.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in u)u.hasOwnProperty(i)&&a[i]!==u[i]&&(n||(n={}),n[i]=u[i])}else n||(l||(l=[]),l.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(l=l||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(qn.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&U("scroll",e),l||a===u||(l=[])):(l=l||[]).push(c,u))}n&&(l=l||[]).push("style",n);var c=l;(t.updateQueue=c)&&(t.flags|=4)}};Uc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Rn(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Af(e,t,n){var r=t.pendingProps;switch(Xi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(t),null;case 1:return Ee(t.type)&&mo(),pe(t),null;case 3:return r=t.stateNode,En(),$(ke),$(he),la(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Or(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Oe!==null&&(Ci(Oe),Oe=null))),mi(e,t),pe(t),null;case 5:oa(t);var o=Tt(dr.current);if(n=t.type,e!==null&&t.stateNode!=null)Oc(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return pe(t),null}if(e=Tt(Xe.current),Or(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Ge]=t,r[sr]=l,e=(t.mode&1)!==0,n){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(o=0;o<Vn.length;o++)U(Vn[o],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":_a(r,l),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},U("invalid",r);break;case"textarea":La(r,l),U("invalid",r)}$l(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&Ir(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&Ir(r.textContent,a,e),o=["children",""+a]):qn.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&U("scroll",r)}switch(n){case"input":Br(r),ja(r,l,!0);break;case"textarea":Br(r),Ta(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=ho)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ms(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Ge]=t,e[sr]=r,Ic(e,t,!1,!1),t.stateNode=e;e:{switch(i=Vl(n,r),n){case"dialog":U("cancel",e),U("close",e),o=r;break;case"iframe":case"object":case"embed":U("load",e),o=r;break;case"video":case"audio":for(o=0;o<Vn.length;o++)U(Vn[o],e);o=r;break;case"source":U("error",e),o=r;break;case"img":case"image":case"link":U("error",e),U("load",e),o=r;break;case"details":U("toggle",e),o=r;break;case"input":_a(e,r),o=Rl(e,r),U("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Y({},r,{value:void 0}),U("invalid",e);break;case"textarea":La(e,r),o=Ol(e,r),U("invalid",e);break;default:o=r}$l(n,o),a=o;for(l in a)if(a.hasOwnProperty(l)){var u=a[l];l==="style"?vs(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&gs(e,u)):l==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&er(e,u):typeof u=="number"&&er(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(qn.hasOwnProperty(l)?u!=null&&l==="onScroll"&&U("scroll",e):u!=null&&Li(e,l,u,i))}switch(n){case"input":Br(e),ja(e,r,!1);break;case"textarea":Br(e),Ta(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Nt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?pn(e,!!r.multiple,l,!1):r.defaultValue!=null&&pn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ho)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pe(t),null;case 6:if(e&&t.stateNode!=null)Uc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Tt(dr.current),Tt(Xe.current),Or(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ge]=t,(l=r.nodeValue!==n)&&(e=Ne,e!==null))switch(e.tag){case 3:Ir(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ir(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ge]=t,t.stateNode=r}return pe(t),null;case 13:if($(K),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&Fe!==null&&(t.mode&1)!==0&&(t.flags&128)===0)lc(),wn(),t.flags|=98560,l=!1;else if(l=Or(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(S(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(S(317));l[Ge]=t}else wn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;pe(t),l=!1}else Oe!==null&&(Ci(Oe),Oe=null),l=!0;if(!l)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(K.current&1)!==0?te===0&&(te=3):ya())),t.updateQueue!==null&&(t.flags|=4),pe(t),null);case 4:return En(),mi(e,t),e===null&&ar(t.stateNode.containerInfo),pe(t),null;case 10:return ea(t.type._context),pe(t),null;case 17:return Ee(t.type)&&mo(),pe(t),null;case 19:if($(K),l=t.memoizedState,l===null)return pe(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)Rn(l,!1);else{if(te!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Eo(e),i!==null){for(t.flags|=128,Rn(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return O(K,K.current&1|2),t.child}e=e.sibling}l.tail!==null&&Z()>Sn&&(t.flags|=128,r=!0,Rn(l,!1),t.lanes=4194304)}else{if(!r)if(e=Eo(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Rn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!W)return pe(t),null}else 2*Z()-l.renderingStartTime>Sn&&n!==1073741824&&(t.flags|=128,r=!0,Rn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Z(),t.sibling=null,n=K.current,O(K,r?n&1|2:n&1),t):(pe(t),null);case 22:case 23:return ga(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Se&1073741824)!==0&&(pe(t),t.subtreeFlags&6&&(t.flags|=8192)):pe(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function Pf(e,t){switch(Xi(t),t.tag){case 1:return Ee(t.type)&&mo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return En(),$(ke),$(he),la(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return oa(t),null;case 13:if($(K),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));wn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $(K),null;case 4:return En(),null;case 10:return ea(t.type._context),null;case 22:case 23:return ga(),null;case 24:return null;default:return null}}var Vr=!1,fe=!1,zf=typeof WeakSet=="function"?WeakSet:Set,z=null;function cn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function gi(e,t,n){try{n()}catch(r){X(e,t,r)}}var Fu=!1;function Df(e,t){if(ql=co,e=Ks(),Gi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,a=-1,u=-1,c=0,y=0,g=e,m=null;t:for(;;){for(var x;g!==n||o!==0&&g.nodeType!==3||(a=i+o),g!==l||r!==0&&g.nodeType!==3||(u=i+r),g.nodeType===3&&(i+=g.nodeValue.length),(x=g.firstChild)!==null;)m=g,g=x;for(;;){if(g===e)break t;if(m===n&&++c===o&&(a=i),m===l&&++y===r&&(u=i),(x=g.nextSibling)!==null)break;g=m,m=g.parentNode}g=x}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ei={focusedElem:e,selectionRange:n},co=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var E=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var k=E.memoizedProps,D=E.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?k:Me(t.type,k),D);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(v){X(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return E=Fu,Fu=!1,E}function Xn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&gi(t,n,l)}o=o.next}while(o!==r)}}function Uo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function yi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function $c(e){var t=e.alternate;t!==null&&(e.alternate=null,$c(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ge],delete t[sr],delete t[ri],delete t[pf],delete t[ff])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vc(e){return e.tag===5||e.tag===3||e.tag===4}function Nu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ho));else if(r!==4&&(e=e.child,e!==null))for(vi(e,t,n),e=e.sibling;e!==null;)vi(e,t,n),e=e.sibling}function xi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(xi(e,t,n),e=e.sibling;e!==null;)xi(e,t,n),e=e.sibling}var ae=null,Ie=!1;function st(e,t,n){for(n=n.child;n!==null;)Wc(e,t,n),n=n.sibling}function Wc(e,t,n){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(_o,n)}catch{}switch(n.tag){case 5:fe||cn(n,t);case 6:var r=ae,o=Ie;ae=null,st(e,t,n),ae=r,Ie=o,ae!==null&&(Ie?(e=ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ae.removeChild(n.stateNode));break;case 18:ae!==null&&(Ie?(e=ae,n=n.stateNode,e.nodeType===8?vl(e.parentNode,n):e.nodeType===1&&vl(e,n),or(e)):vl(ae,n.stateNode));break;case 4:r=ae,o=Ie,ae=n.stateNode.containerInfo,Ie=!0,st(e,t,n),ae=r,Ie=o;break;case 0:case 11:case 14:case 15:if(!fe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&((l&2)!==0||(l&4)!==0)&&gi(n,t,i),o=o.next}while(o!==r)}st(e,t,n);break;case 1:if(!fe&&(cn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){X(n,t,a)}st(e,t,n);break;case 21:st(e,t,n);break;case 22:n.mode&1?(fe=(r=fe)||n.memoizedState!==null,st(e,t,n),fe=r):st(e,t,n);break;default:st(e,t,n)}}function Au(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new zf),t.forEach(function(r){var o=If.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Re(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:ae=a.stateNode,Ie=!1;break e;case 3:ae=a.stateNode.containerInfo,Ie=!0;break e;case 4:ae=a.stateNode.containerInfo,Ie=!0;break e}a=a.return}if(ae===null)throw Error(S(160));Wc(l,i,o),ae=null,Ie=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(c){X(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Hc(t,e),t=t.sibling}function Hc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Re(t,e),Ke(e),r&4){try{Xn(3,e,e.return),Uo(3,e)}catch(k){X(e,e.return,k)}try{Xn(5,e,e.return)}catch(k){X(e,e.return,k)}}break;case 1:Re(t,e),Ke(e),r&512&&n!==null&&cn(n,n.return);break;case 5:if(Re(t,e),Ke(e),r&512&&n!==null&&cn(n,n.return),e.flags&32){var o=e.stateNode;try{er(o,"")}catch(k){X(e,e.return,k)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&fs(o,l),Vl(a,i);var c=Vl(a,l);for(i=0;i<u.length;i+=2){var y=u[i],g=u[i+1];y==="style"?vs(o,g):y==="dangerouslySetInnerHTML"?gs(o,g):y==="children"?er(o,g):Li(o,y,g,c)}switch(a){case"input":Ml(o,l);break;case"textarea":hs(o,l);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var x=l.value;x!=null?pn(o,!!l.multiple,x,!1):m!==!!l.multiple&&(l.defaultValue!=null?pn(o,!!l.multiple,l.defaultValue,!0):pn(o,!!l.multiple,l.multiple?[]:"",!1))}o[sr]=l}catch(k){X(e,e.return,k)}}break;case 6:if(Re(t,e),Ke(e),r&4){if(e.stateNode===null)throw Error(S(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(k){X(e,e.return,k)}}break;case 3:if(Re(t,e),Ke(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{or(t.containerInfo)}catch(k){X(e,e.return,k)}break;case 4:Re(t,e),Ke(e);break;case 13:Re(t,e),Ke(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(ha=Z())),r&4&&Au(e);break;case 22:if(y=n!==null&&n.memoizedState!==null,e.mode&1?(fe=(c=fe)||y,Re(t,e),fe=c):Re(t,e),Ke(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!y&&(e.mode&1)!==0)for(z=e,y=e.child;y!==null;){for(g=z=y;z!==null;){switch(m=z,x=m.child,m.tag){case 0:case 11:case 14:case 15:Xn(4,m,m.return);break;case 1:cn(m,m.return);var E=m.stateNode;if(typeof E.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,E.props=t.memoizedProps,E.state=t.memoizedState,E.componentWillUnmount()}catch(k){X(r,n,k)}}break;case 5:cn(m,m.return);break;case 22:if(m.memoizedState!==null){zu(g);continue}}x!==null?(x.return=m,z=x):zu(g)}y=y.sibling}e:for(y=null,g=e;;){if(g.tag===5){if(y===null){y=g;try{o=g.stateNode,c?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=g.stateNode,u=g.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=ys("display",i))}catch(k){X(e,e.return,k)}}}else if(g.tag===6){if(y===null)try{g.stateNode.nodeValue=c?"":g.memoizedProps}catch(k){X(e,e.return,k)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;y===g&&(y=null),g=g.return}y===g&&(y=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Re(t,e),Ke(e),r&4&&Au(e);break;case 21:break;default:Re(t,e),Ke(e)}}function Ke(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Vc(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(er(o,""),r.flags&=-33);var l=Nu(e);xi(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,a=Nu(e);vi(e,a,i);break;default:throw Error(S(161))}}catch(u){X(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Bf(e,t,n){z=e,Kc(e)}function Kc(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var o=z,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Vr;if(!i){var a=o.alternate,u=a!==null&&a.memoizedState!==null||fe;a=Vr;var c=fe;if(Vr=i,(fe=u)&&!c)for(z=o;z!==null;)i=z,u=i.child,i.tag===22&&i.memoizedState!==null?Du(o):u!==null?(u.return=i,z=u):Du(o);for(;l!==null;)z=l,Kc(l),l=l.sibling;z=o,Vr=a,fe=c}Pu(e)}else(o.subtreeFlags&8772)!==0&&l!==null?(l.return=o,z=l):Pu(e)}}function Pu(e){for(;z!==null;){var t=z;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:fe||Uo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!fe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Me(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&pu(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}pu(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var y=c.memoizedState;if(y!==null){var g=y.dehydrated;g!==null&&or(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}fe||t.flags&512&&yi(t)}catch(m){X(t,t.return,m)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function zu(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function Du(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Uo(4,t)}catch(u){X(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){X(t,o,u)}}var l=t.return;try{yi(t)}catch(u){X(t,l,u)}break;case 5:var i=t.return;try{yi(t)}catch(u){X(t,i,u)}}}catch(u){X(t,t.return,u)}if(t===e){z=null;break}var a=t.sibling;if(a!==null){a.return=t.return,z=a;break}z=t.return}}var bf=Math.ceil,Fo=at.ReactCurrentDispatcher,pa=at.ReactCurrentOwner,_e=at.ReactCurrentBatchConfig,R=0,ie=null,q=null,ue=0,Se=0,dn=zt(0),te=0,mr=null,$t=0,$o=0,fa=0,Zn=null,xe=null,ha=0,Sn=1/0,Je=null,No=!1,wi=null,Et=null,Wr=!1,mt=null,Ao=0,Jn=0,ki=null,to=-1,no=0;function ge(){return(R&6)!==0?Z():to!==-1?to:to=Z()}function Ct(e){return(e.mode&1)===0?1:(R&2)!==0&&ue!==0?ue&-ue:mf.transition!==null?(no===0&&(no=Ds()),no):(e=M,e!==0||(e=window.event,e=e===void 0?16:Rs(e.type)),e)}function $e(e,t,n,r){if(50<Jn)throw Jn=0,ki=null,Error(S(185));kr(e,n,r),((R&2)===0||e!==ie)&&(e===ie&&((R&2)===0&&($o|=n),te===4&&ft(e,ue)),Ce(e,r),n===1&&R===0&&(t.mode&1)===0&&(Sn=Z()+500,Mo&&Dt()))}function Ce(e,t){var n=e.callbackNode;hp(e,t);var r=so(e,e===ie?ue:0);if(r===0)n!==null&&Ia(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ia(n),t===1)e.tag===0?hf(Bu.bind(null,e)):nc(Bu.bind(null,e)),cf(function(){(R&6)===0&&Dt()}),n=null;else{switch(Bs(r)){case 1:n=Oi;break;case 4:n=Ps;break;case 16:n=uo;break;case 536870912:n=zs;break;default:n=uo}n=ed(n,Qc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Qc(e,t){if(to=-1,no=0,(R&6)!==0)throw Error(S(327));var n=e.callbackNode;if(yn()&&e.callbackNode!==n)return null;var r=so(e,e===ie?ue:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Po(e,r);else{t=r;var o=R;R|=2;var l=Yc();(ie!==e||ue!==t)&&(Je=null,Sn=Z()+500,Rt(e,t));do try{Lf();break}catch(a){Gc(e,a)}while(1);qi(),Fo.current=l,R=o,q!==null?t=0:(ie=null,ue=0,t=te)}if(t!==0){if(t===2&&(o=Gl(e),o!==0&&(r=o,t=Ei(e,o))),t===1)throw n=mr,Rt(e,0),ft(e,r),Ce(e,Z()),n;if(t===6)ft(e,r);else{if(o=e.current.alternate,(r&30)===0&&!_f(o)&&(t=Po(e,r),t===2&&(l=Gl(e),l!==0&&(r=l,t=Ei(e,l))),t===1))throw n=mr,Rt(e,0),ft(e,r),Ce(e,Z()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:_t(e,xe,Je);break;case 3:if(ft(e,r),(r&130023424)===r&&(t=ha+500-Z(),10<t)){if(so(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ge(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ni(_t.bind(null,e,xe,Je),t);break}_t(e,xe,Je);break;case 4:if(ft(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-Ue(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*bf(r/1960))-r,10<r){e.timeoutHandle=ni(_t.bind(null,e,xe,Je),r);break}_t(e,xe,Je);break;case 5:_t(e,xe,Je);break;default:throw Error(S(329))}}}return Ce(e,Z()),e.callbackNode===n?Qc.bind(null,e):null}function Ei(e,t){var n=Zn;return e.current.memoizedState.isDehydrated&&(Rt(e,t).flags|=256),e=Po(e,t),e!==2&&(t=xe,xe=n,t!==null&&Ci(t)),e}function Ci(e){xe===null?xe=e:xe.push.apply(xe,e)}function _f(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!Ve(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ft(e,t){for(t&=~fa,t&=~$o,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ue(t),r=1<<n;e[n]=-1,t&=~r}}function Bu(e){if((R&6)!==0)throw Error(S(327));yn();var t=so(e,0);if((t&1)===0)return Ce(e,Z()),null;var n=Po(e,t);if(e.tag!==0&&n===2){var r=Gl(e);r!==0&&(t=r,n=Ei(e,r))}if(n===1)throw n=mr,Rt(e,0),ft(e,t),Ce(e,Z()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_t(e,xe,Je),Ce(e,Z()),null}function ma(e,t){var n=R;R|=1;try{return e(t)}finally{R=n,R===0&&(Sn=Z()+500,Mo&&Dt())}}function Vt(e){mt!==null&&mt.tag===0&&(R&6)===0&&yn();var t=R;R|=1;var n=_e.transition,r=M;try{if(_e.transition=null,M=1,e)return e()}finally{M=r,_e.transition=n,R=t,(R&6)===0&&Dt()}}function ga(){Se=dn.current,$(dn)}function Rt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,sf(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(Xi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&mo();break;case 3:En(),$(ke),$(he),la();break;case 5:oa(r);break;case 4:En();break;case 13:$(K);break;case 19:$(K);break;case 10:ea(r.type._context);break;case 22:case 23:ga()}n=n.return}if(ie=e,q=e=St(e.current,null),ue=Se=t,te=0,mr=null,fa=$o=$t=0,xe=Zn=null,Lt!==null){for(t=0;t<Lt.length;t++)if(n=Lt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}Lt=null}return e}function Gc(e,t){do{var n=q;try{if(qi(),Jr.current=So,Co){for(var r=G.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Co=!1}if(Ut=0,le=ee=G=null,Yn=!1,pr=0,pa.current=null,n===null||n.return===null){te=1,mr=t,q=null;break}e:{var l=e,i=n.return,a=n,u=t;if(t=ue,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,y=a,g=y.tag;if((y.mode&1)===0&&(g===0||g===11||g===15)){var m=y.alternate;m?(y.updateQueue=m.updateQueue,y.memoizedState=m.memoizedState,y.lanes=m.lanes):(y.updateQueue=null,y.memoizedState=null)}var x=vu(i);if(x!==null){x.flags&=-257,xu(x,i,a,l,t),x.mode&1&&yu(l,c,t),t=x,u=c;var E=t.updateQueue;if(E===null){var k=new Set;k.add(u),t.updateQueue=k}else E.add(u);break e}else{if((t&1)===0){yu(l,c,t),ya();break e}u=Error(S(426))}}else if(W&&a.mode&1){var D=vu(i);if(D!==null){(D.flags&65536)===0&&(D.flags|=256),xu(D,i,a,l,t),Zi(Cn(u,a));break e}}l=u=Cn(u,a),te!==4&&(te=2),Zn===null?Zn=[l]:Zn.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var p=Bc(l,u,t);du(l,p);break e;case 1:a=u;var d=l.type,f=l.stateNode;if((l.flags&128)===0&&(typeof d.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Et===null||!Et.has(f)))){l.flags|=65536,t&=-t,l.lanes|=t;var v=bc(l,a,t);du(l,v);break e}}l=l.return}while(l!==null)}Zc(n)}catch(w){t=w,q===n&&n!==null&&(q=n=n.return);continue}break}while(1)}function Yc(){var e=Fo.current;return Fo.current=So,e===null?So:e}function ya(){(te===0||te===3||te===2)&&(te=4),ie===null||($t&268435455)===0&&($o&268435455)===0||ft(ie,ue)}function Po(e,t){var n=R;R|=2;var r=Yc();(ie!==e||ue!==t)&&(Je=null,Rt(e,t));do try{jf();break}catch(o){Gc(e,o)}while(1);if(qi(),R=n,Fo.current=r,q!==null)throw Error(S(261));return ie=null,ue=0,te}function jf(){for(;q!==null;)Xc(q)}function Lf(){for(;q!==null&&!lp();)Xc(q)}function Xc(e){var t=qc(e.alternate,e,Se);e.memoizedProps=e.pendingProps,t===null?Zc(e):q=t,pa.current=null}function Zc(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Af(n,t,Se),n!==null){q=n;return}}else{if(n=Pf(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,q=null;return}}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);te===0&&(te=5)}function _t(e,t,n){var r=M,o=_e.transition;try{_e.transition=null,M=1,Tf(e,t,n,r)}finally{_e.transition=o,M=r}return null}function Tf(e,t,n,r){do yn();while(mt!==null);if((R&6)!==0)throw Error(S(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(mp(e,l),e===ie&&(q=ie=null,ue=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Wr||(Wr=!0,ed(uo,function(){return yn(),null})),l=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||l){l=_e.transition,_e.transition=null;var i=M;M=1;var a=R;R|=4,pa.current=null,Df(e,n),Hc(n,e),tf(ei),co=!!ql,ei=ql=null,e.current=n,Bf(n),ip(),R=a,M=i,_e.transition=l}else e.current=n;if(Wr&&(Wr=!1,mt=e,Ao=o),l=e.pendingLanes,l===0&&(Et=null),sp(n.stateNode),Ce(e,Z()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(No)throw No=!1,e=wi,wi=null,e;return(Ao&1)!==0&&e.tag!==0&&yn(),l=e.pendingLanes,(l&1)!==0?e===ki?Jn++:(Jn=0,ki=e):Jn=0,Dt(),null}function yn(){if(mt!==null){var e=Bs(Ao),t=_e.transition,n=M;try{if(_e.transition=null,M=16>e?16:e,mt===null)var r=!1;else{if(e=mt,mt=null,Ao=0,(R&6)!==0)throw Error(S(331));var o=R;for(R|=4,z=e.current;z!==null;){var l=z,i=l.child;if((z.flags&16)!==0){var a=l.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(z=c;z!==null;){var y=z;switch(y.tag){case 0:case 11:case 15:Xn(8,y,l)}var g=y.child;if(g!==null)g.return=y,z=g;else for(;z!==null;){y=z;var m=y.sibling,x=y.return;if($c(y),y===c){z=null;break}if(m!==null){m.return=x,z=m;break}z=x}}}var E=l.alternate;if(E!==null){var k=E.child;if(k!==null){E.child=null;do{var D=k.sibling;k.sibling=null,k=D}while(k!==null)}}z=l}}if((l.subtreeFlags&2064)!==0&&i!==null)i.return=l,z=i;else e:for(;z!==null;){if(l=z,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:Xn(9,l,l.return)}var p=l.sibling;if(p!==null){p.return=l.return,z=p;break e}z=l.return}}var d=e.current;for(z=d;z!==null;){i=z;var f=i.child;if((i.subtreeFlags&2064)!==0&&f!==null)f.return=i,z=f;else e:for(i=d;z!==null;){if(a=z,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Uo(9,a)}}catch(w){X(a,a.return,w)}if(a===i){z=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,z=v;break e}z=a.return}}if(R=o,Dt(),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(_o,e)}catch{}r=!0}return r}finally{M=n,_e.transition=t}}return!1}function bu(e,t,n){t=Cn(n,t),t=Bc(e,t,1),e=kt(e,t,1),t=ge(),e!==null&&(kr(e,1,t),Ce(e,t))}function X(e,t,n){if(e.tag===3)bu(e,e,n);else for(;t!==null;){if(t.tag===3){bu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Et===null||!Et.has(r))){e=Cn(n,e),e=bc(t,e,1),t=kt(t,e,1),e=ge(),t!==null&&(kr(t,1,e),Ce(t,e));break}}t=t.return}}function Rf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ge(),e.pingedLanes|=e.suspendedLanes&n,ie===e&&(ue&n)===n&&(te===4||te===3&&(ue&130023424)===ue&&500>Z()-ha?Rt(e,0):fa|=n),Ce(e,t)}function Jc(e,t){t===0&&((e.mode&1)===0?t=1:(t=jr,jr<<=1,(jr&130023424)===0&&(jr=4194304)));var n=ge();e=lt(e,t),e!==null&&(kr(e,t,n),Ce(e,n))}function Mf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Jc(e,n)}function If(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),Jc(e,n)}var qc;qc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ke.current)we=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return we=!1,Nf(e,t,n);we=(e.flags&131072)!==0}else we=!1,W&&(t.flags&1048576)!==0&&rc(t,vo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;eo(e,t),e=t.pendingProps;var o=xn(t,he.current);gn(t,n),o=aa(null,t,r,e,o,n);var l=ua();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ee(r)?(l=!0,go(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,na(t),o.updater=Oo,t.stateNode=o,o._reactInternals=t,si(t,r,e,n),t=pi(null,t,r,!0,l,n)):(t.tag=0,W&&l&&Yi(t),me(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(eo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Uf(r),e=Me(r,e),o){case 0:t=di(null,t,r,e,n);break e;case 1:t=Eu(null,t,r,e,n);break e;case 11:t=wu(null,t,r,e,n);break e;case 14:t=ku(null,t,r,Me(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Me(r,o),di(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Me(r,o),Eu(e,t,r,o,n);case 3:e:{if(Tc(t),e===null)throw Error(S(387));r=t.pendingProps,l=t.memoizedState,o=l.element,sc(e,t),ko(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=Cn(Error(S(423)),t),t=Cu(e,t,r,n,o);break e}else if(r!==o){o=Cn(Error(S(424)),t),t=Cu(e,t,r,n,o);break e}else for(Fe=wt(t.stateNode.containerInfo.firstChild),Ne=t,W=!0,Oe=null,n=ac(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(wn(),r===o){t=it(e,t,n);break e}me(e,t,r,n)}t=t.child}return t;case 5:return cc(t),e===null&&ii(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,ti(r,o)?i=null:l!==null&&ti(r,l)&&(t.flags|=32),Lc(e,t),me(e,t,i,n),t.child;case 6:return e===null&&ii(t),null;case 13:return Rc(e,t,n);case 4:return ra(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=kn(t,null,r,n):me(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Me(r,o),wu(e,t,r,o,n);case 7:return me(e,t,t.pendingProps,n),t.child;case 8:return me(e,t,t.pendingProps.children,n),t.child;case 12:return me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,O(xo,r._currentValue),r._currentValue=i,l!==null)if(Ve(l.value,i)){if(l.children===o.children&&!ke.current){t=it(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){i=l.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(l.tag===1){u=nt(-1,n&-n),u.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var y=c.pending;y===null?u.next=u:(u.next=y.next,y.next=u),c.pending=u}}l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),ai(l.return,n,t),a.lanes|=n;break}u=u.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(S(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),ai(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}me(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,gn(t,n),o=je(o),r=r(o),t.flags|=1,me(e,t,r,n),t.child;case 14:return r=t.type,o=Me(r,t.pendingProps),o=Me(r.type,o),ku(e,t,r,o,n);case 15:return _c(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Me(r,o),eo(e,t),t.tag=1,Ee(r)?(e=!0,go(t)):e=!1,gn(t,n),Dc(t,r,o),si(t,r,o,n),pi(null,t,r,!0,e,n);case 19:return Mc(e,t,n);case 22:return jc(e,t,n)}throw Error(S(156,t.tag))};function ed(e,t){return As(e,t)}function Of(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function be(e,t,n,r){return new Of(e,t,n,r)}function va(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Uf(e){if(typeof e=="function")return va(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ri)return 11;if(e===Mi)return 14}return 2}function St(e,t){var n=e.alternate;return n===null?(n=be(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ro(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")va(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case en:return Mt(n.children,o,l,t);case Ti:i=8,o|=8;break;case _l:return e=be(12,n,t,o|2),e.elementType=_l,e.lanes=l,e;case jl:return e=be(13,n,t,o),e.elementType=jl,e.lanes=l,e;case Ll:return e=be(19,n,t,o),e.elementType=Ll,e.lanes=l,e;case cs:return Vo(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case us:i=10;break e;case ss:i=9;break e;case Ri:i=11;break e;case Mi:i=14;break e;case ct:i=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=be(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function Mt(e,t,n,r){return e=be(7,e,r,t),e.lanes=n,e}function Vo(e,t,n,r){return e=be(22,e,r,t),e.elementType=cs,e.lanes=n,e.stateNode={isHidden:!1},e}function Nl(e,t,n){return e=be(6,e,null,t),e.lanes=n,e}function Al(e,t,n){return t=be(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function $f(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=al(0),this.expirationTimes=al(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=al(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function xa(e,t,n,r,o,l,i,a,u){return e=new $f(e,t,n,a,u),t===1?(t=1,l===!0&&(t|=8)):t=0,l=be(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},na(l),e}function Vf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function td(e){if(!e)return At;e=e._reactInternals;e:{if(Ht(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ee(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(Ee(n))return tc(e,n,t)}return t}function nd(e,t,n,r,o,l,i,a,u){return e=xa(n,r,!0,e,o,l,i,a,u),e.context=td(null),n=e.current,r=ge(),o=Ct(n),l=nt(r,o),l.callback=t!=null?t:null,kt(n,l,o),e.current.lanes=o,kr(e,o,r),Ce(e,r),e}function Wo(e,t,n,r){var o=t.current,l=ge(),i=Ct(o);return n=td(n),t.context===null?t.context=n:t.pendingContext=n,t=nt(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=kt(o,t,i),e!==null&&($e(e,o,i,l),Zr(e,o,i)),i}function zo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _u(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function wa(e,t){_u(e,t),(e=e.alternate)&&_u(e,t)}function Wf(){return null}var rd=typeof reportError=="function"?reportError:function(e){console.error(e)};function ka(e){this._internalRoot=e}Ho.prototype.render=ka.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Wo(e,t,null,null)};Ho.prototype.unmount=ka.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vt(function(){Wo(null,e,null,null)}),t[ot]=null}};function Ho(e){this._internalRoot=e}Ho.prototype.unstable_scheduleHydration=function(e){if(e){var t=js();e={blockedOn:null,target:e,priority:t};for(var n=0;n<pt.length&&t!==0&&t<pt[n].priority;n++);pt.splice(n,0,e),n===0&&Ts(e)}};function Ea(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ko(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ju(){}function Hf(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var c=zo(i);l.call(c)}}var i=nd(t,r,e,0,null,!1,!1,"",ju);return e._reactRootContainer=i,e[ot]=i.current,ar(e.nodeType===8?e.parentNode:e),Vt(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var c=zo(u);a.call(c)}}var u=xa(e,0,!1,null,null,!1,!1,"",ju);return e._reactRootContainer=u,e[ot]=u.current,ar(e.nodeType===8?e.parentNode:e),Vt(function(){Wo(t,u,n,r)}),u}function Qo(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var a=o;o=function(){var u=zo(i);a.call(u)}}Wo(t,i,e,o)}else i=Hf(n,t,e,o,r);return zo(i)}bs=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=$n(t.pendingLanes);n!==0&&(Ui(t,n|1),Ce(t,Z()),(R&6)===0&&(Sn=Z()+500,Dt()))}break;case 13:Vt(function(){var r=lt(e,1);if(r!==null){var o=ge();$e(r,e,1,o)}}),wa(e,1)}};$i=function(e){if(e.tag===13){var t=lt(e,134217728);if(t!==null){var n=ge();$e(t,e,134217728,n)}wa(e,134217728)}};_s=function(e){if(e.tag===13){var t=Ct(e),n=lt(e,t);if(n!==null){var r=ge();$e(n,e,t,r)}wa(e,t)}};js=function(){return M};Ls=function(e,t){var n=M;try{return M=e,t()}finally{M=n}};Hl=function(e,t,n){switch(t){case"input":if(Ml(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Ro(r);if(!o)throw Error(S(90));ps(r),Ml(r,o)}}}break;case"textarea":hs(e,n);break;case"select":t=n.value,t!=null&&pn(e,!!n.multiple,t,!1)}};ks=ma;Es=Vt;var Kf={usingClientEntryPoint:!1,Events:[Cr,on,Ro,xs,ws,ma]},Mn={findFiberByHostInstance:jt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Qf={bundleType:Mn.bundleType,version:Mn.version,rendererPackageName:Mn.rendererPackageName,rendererConfig:Mn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:at.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Fs(e),e===null?null:e.stateNode},findFiberByHostInstance:Mn.findFiberByHostInstance||Wf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hr.isDisabled&&Hr.supportsFiber)try{_o=Hr.inject(Qf),Ye=Hr}catch{}}Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kf;Pe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ea(t))throw Error(S(200));return Vf(e,t,null,n)};Pe.createRoot=function(e,t){if(!Ea(e))throw Error(S(299));var n=!1,r="",o=rd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=xa(e,1,!1,null,null,n,!1,r,o),e[ot]=t.current,ar(e.nodeType===8?e.parentNode:e),new ka(t)};Pe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Fs(t),e=e===null?null:e.stateNode,e};Pe.flushSync=function(e){return Vt(e)};Pe.hydrate=function(e,t,n){if(!Ko(t))throw Error(S(200));return Qo(null,e,t,!0,n)};Pe.hydrateRoot=function(e,t,n){if(!Ea(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=rd;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=nd(t,null,e,1,n!=null?n:null,o,!1,l,i),e[ot]=t.current,ar(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Ho(t)};Pe.render=function(e,t,n){if(!Ko(t))throw Error(S(200));return Qo(null,e,t,!1,n)};Pe.unmountComponentAtNode=function(e){if(!Ko(e))throw Error(S(40));return e._reactRootContainer?(Vt(function(){Qo(null,null,e,!1,function(){e._reactRootContainer=null,e[ot]=null})}),!0):!1};Pe.unstable_batchedUpdates=ma;Pe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ko(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Qo(e,t,n,!1,r)};Pe.version="18.3.1-next-f1338f8080-20240426";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Pe})(os);var od,Lu=os.exports;od=Lu.createRoot,Lu.hydrateRoot;/**
 * @remix-run/router v1.3.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gr(){return gr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gr.apply(this,arguments)}var gt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(gt||(gt={}));const Tu="popstate";function Gf(e){e===void 0&&(e={});function t(r,o){let{pathname:l,search:i,hash:a}=r.location;return Si("",{pathname:l,search:i,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:yr(o)}return Xf(t,n,null,e)}function ne(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Yf(){return Math.random().toString(36).substr(2,8)}function Ru(e,t){return{usr:e.state,key:e.key,idx:t}}function Si(e,t,n,r){return n===void 0&&(n=null),gr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Pn(t):t,{state:n,key:t&&t.key||r||Yf()})}function yr(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Pn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Xf(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:l=!1}=r,i=o.history,a=gt.Pop,u=null,c=y();c==null&&(c=0,i.replaceState(gr({},i.state,{idx:c}),""));function y(){return(i.state||{idx:null}).idx}function g(){a=gt.Pop;let D=y(),p=D==null?null:D-c;c=D,u&&u({action:a,location:k.location,delta:p})}function m(D,p){a=gt.Push;let d=Si(k.location,D,p);n&&n(d,D),c=y()+1;let f=Ru(d,c),v=k.createHref(d);try{i.pushState(f,"",v)}catch{o.location.assign(v)}l&&u&&u({action:a,location:k.location,delta:1})}function x(D,p){a=gt.Replace;let d=Si(k.location,D,p);n&&n(d,D),c=y();let f=Ru(d,c),v=k.createHref(d);i.replaceState(f,"",v),l&&u&&u({action:a,location:k.location,delta:0})}function E(D){let p=o.location.origin!=="null"?o.location.origin:o.location.href,d=typeof D=="string"?D:yr(D);return ne(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let k={get action(){return a},get location(){return e(o,i)},listen(D){if(u)throw new Error("A history only accepts one active listener");return o.addEventListener(Tu,g),u=D,()=>{o.removeEventListener(Tu,g),u=null}},createHref(D){return t(o,D)},createURL:E,encodeLocation(D){let p=E(D);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:m,replace:x,go(D){return i.go(D)}};return k}var Mu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Mu||(Mu={}));function Zf(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Pn(t):t,o=ad(r.pathname||"/",n);if(o==null)return null;let l=ld(e);Jf(l);let i=null;for(let a=0;i==null&&a<l.length;++a)i=ah(l[a],ch(o));return i}function ld(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(l,i,a)=>{let u={relativePath:a===void 0?l.path||"":a,caseSensitive:l.caseSensitive===!0,childrenIndex:i,route:l};u.relativePath.startsWith("/")&&(ne(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Ft([r,u.relativePath]),y=n.concat(u);l.children&&l.children.length>0&&(ne(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),ld(l.children,t,y,c)),!(l.path==null&&!l.index)&&t.push({path:c,score:lh(c,l.index),routesMeta:y})};return e.forEach((l,i)=>{var a;if(l.path===""||!((a=l.path)!=null&&a.includes("?")))o(l,i);else for(let u of id(l.path))o(l,i,u)}),t}function id(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return o?[l,""]:[l];let i=id(r.join("/")),a=[];return a.push(...i.map(u=>u===""?l:[l,u].join("/"))),o&&a.push(...i),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function Jf(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:ih(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const qf=/^:\w+$/,eh=3,th=2,nh=1,rh=10,oh=-2,Iu=e=>e==="*";function lh(e,t){let n=e.split("/"),r=n.length;return n.some(Iu)&&(r+=oh),t&&(r+=th),n.filter(o=>!Iu(o)).reduce((o,l)=>o+(qf.test(l)?eh:l===""?nh:rh),r)}function ih(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function ah(e,t){let{routesMeta:n}=e,r={},o="/",l=[];for(let i=0;i<n.length;++i){let a=n[i],u=i===n.length-1,c=o==="/"?t:t.slice(o.length)||"/",y=uh({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},c);if(!y)return null;Object.assign(r,y.params);let g=a.route;l.push({params:r,pathname:Ft([o,y.pathname]),pathnameBase:hh(Ft([o,y.pathnameBase])),route:g}),y.pathnameBase!=="/"&&(o=Ft([o,y.pathnameBase]))}return l}function uh(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=sh(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let l=o[0],i=l.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((c,y,g)=>{if(y==="*"){let m=a[g]||"";i=l.slice(0,l.length-m.length).replace(/(.)\/+$/,"$1")}return c[y]=dh(a[g]||"",y),c},{}),pathname:l,pathnameBase:i,pattern:e}}function sh(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ca(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(i,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function ch(e){try{return decodeURI(e)}catch(t){return Ca(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function dh(e,t){try{return decodeURIComponent(e)}catch(n){return Ca(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function ad(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Ca(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ph(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Pn(e):e;return{pathname:n?n.startsWith("/")?n:fh(n,t):t,search:mh(r),hash:gh(o)}}function fh(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Pl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ud(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function sd(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Pn(e):(o=gr({},e),ne(!o.pathname||!o.pathname.includes("?"),Pl("?","pathname","search",o)),ne(!o.pathname||!o.pathname.includes("#"),Pl("#","pathname","hash",o)),ne(!o.search||!o.search.includes("#"),Pl("#","search","hash",o)));let l=e===""||o.pathname==="",i=l?"/":o.pathname,a;if(r||i==null)a=n;else{let g=t.length-1;if(i.startsWith("..")){let m=i.split("/");for(;m[0]==="..";)m.shift(),g-=1;o.pathname=m.join("/")}a=g>=0?t[g]:"/"}let u=ph(o,a),c=i&&i!=="/"&&i.endsWith("/"),y=(l||i===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||y)&&(u.pathname+="/"),u}const Ft=e=>e.join("/").replace(/\/\/+/g,"/"),hh=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),mh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,gh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function yh(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const vh=["post","put","patch","delete"];[...vh];var Go={exports:{}},Yo={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xh=F.exports,wh=Symbol.for("react.element"),kh=Symbol.for("react.fragment"),Eh=Object.prototype.hasOwnProperty,Ch=xh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Sh={key:!0,ref:!0,__self:!0,__source:!0};function cd(e,t,n){var r,o={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Eh.call(t,r)&&!Sh.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:wh,type:e,key:l,ref:i,props:o,_owner:Ch.current}}Yo.Fragment=kh;Yo.jsx=cd;Yo.jsxs=cd;(function(e){e.exports=Yo})(Go);const Fh=Go.exports.Fragment,s=Go.exports.jsx,h=Go.exports.jsxs;/**
 * React Router v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fi(){return Fi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fi.apply(this,arguments)}function Nh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const Ah=typeof Object.is=="function"?Object.is:Nh,{useState:Ph,useEffect:zh,useLayoutEffect:Dh,useDebugValue:Bh}=Bl;function bh(e,t,n){const r=t(),[{inst:o},l]=Ph({inst:{value:r,getSnapshot:t}});return Dh(()=>{o.value=r,o.getSnapshot=t,zl(o)&&l({inst:o})},[e,r,t]),zh(()=>(zl(o)&&l({inst:o}),e(()=>{zl(o)&&l({inst:o})})),[e]),Bh(r),r}function zl(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!Ah(n,r)}catch{return!0}}function _h(e,t,n){return t()}const jh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Lh=!jh,Th=Lh?_h:bh;"useSyncExternalStore"in Bl&&(e=>e.useSyncExternalStore)(Bl);const dd=F.exports.createContext(null),pd=F.exports.createContext(null),Xo=F.exports.createContext(null),Zo=F.exports.createContext(null),Kt=F.exports.createContext({outlet:null,matches:[]}),fd=F.exports.createContext(null);function Rh(e,t){let{relative:n}=t===void 0?{}:t;Fr()||ne(!1);let{basename:r,navigator:o}=F.exports.useContext(Xo),{hash:l,pathname:i,search:a}=md(e,{relative:n}),u=i;return r!=="/"&&(u=i==="/"?r:Ft([r,i])),o.createHref({pathname:u,search:a,hash:l})}function Fr(){return F.exports.useContext(Zo)!=null}function Jo(){return Fr()||ne(!1),F.exports.useContext(Zo).location}function Nr(){Fr()||ne(!1);let{basename:e,navigator:t}=F.exports.useContext(Xo),{matches:n}=F.exports.useContext(Kt),{pathname:r}=Jo(),o=JSON.stringify(ud(n).map(a=>a.pathnameBase)),l=F.exports.useRef(!1);return F.exports.useEffect(()=>{l.current=!0}),F.exports.useCallback(function(a,u){if(u===void 0&&(u={}),!l.current)return;if(typeof a=="number"){t.go(a);return}let c=sd(a,JSON.parse(o),r,u.relative==="path");e!=="/"&&(c.pathname=c.pathname==="/"?e:Ft([e,c.pathname])),(u.replace?t.replace:t.push)(c,u.state,u)},[e,t,o,r])}function hd(){let{matches:e}=F.exports.useContext(Kt),t=e[e.length-1];return t?t.params:{}}function md(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=F.exports.useContext(Kt),{pathname:o}=Jo(),l=JSON.stringify(ud(r).map(i=>i.pathnameBase));return F.exports.useMemo(()=>sd(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function Mh(e,t){Fr()||ne(!1);let{navigator:n}=F.exports.useContext(Xo),r=F.exports.useContext(pd),{matches:o}=F.exports.useContext(Kt),l=o[o.length-1],i=l?l.params:{};l&&l.pathname;let a=l?l.pathnameBase:"/";l&&l.route;let u=Jo(),c;if(t){var y;let k=typeof t=="string"?Pn(t):t;a==="/"||((y=k.pathname)==null?void 0:y.startsWith(a))||ne(!1),c=k}else c=u;let g=c.pathname||"/",m=a==="/"?g:g.slice(a.length)||"/",x=Zf(e,{pathname:m}),E=$h(x&&x.map(k=>Object.assign({},k,{params:Object.assign({},i,k.params),pathname:Ft([a,n.encodeLocation?n.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?a:Ft([a,n.encodeLocation?n.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),o,r||void 0);return t&&E?s(Zo.Provider,{value:{location:Fi({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:gt.Pop},children:E}):E}function Ih(){let e=Kh(),t=yh(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null;return h(Fh,{children:[s("h2",{children:"Unexpected Application Error!"}),s("h3",{style:{fontStyle:"italic"},children:t}),n?s("pre",{style:{padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},children:n}):null,null]})}class Oh extends F.exports.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?s(Kt.Provider,{value:this.props.routeContext,children:s(fd.Provider,{value:this.state.error,children:this.props.component})}):this.props.children}}function Uh(e){let{routeContext:t,match:n,children:r}=e,o=F.exports.useContext(dd);return o&&o.static&&o.staticContext&&n.route.errorElement&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),s(Kt.Provider,{value:t,children:r})}function $h(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,o=n==null?void 0:n.errors;if(o!=null){let l=r.findIndex(i=>i.route.id&&(o==null?void 0:o[i.route.id]));l>=0||ne(!1),r=r.slice(0,Math.min(r.length,l+1))}return r.reduceRight((l,i,a)=>{let u=i.route.id?o==null?void 0:o[i.route.id]:null,c=n?i.route.errorElement||s(Ih,{}):null,y=t.concat(r.slice(0,a+1)),g=()=>s(Uh,{match:i,routeContext:{outlet:l,matches:y},children:u?c:i.route.element!==void 0?i.route.element:l});return n&&(i.route.errorElement||a===0)?s(Oh,{location:n.location,component:c,error:u,children:g(),routeContext:{outlet:null,matches:y}}):g()},null)}var Ou;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(Ou||(Ou={}));var Do;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(Do||(Do={}));function Vh(e){let t=F.exports.useContext(pd);return t||ne(!1),t}function Wh(e){let t=F.exports.useContext(Kt);return t||ne(!1),t}function Hh(e){let t=Wh(),n=t.matches[t.matches.length-1];return n.route.id||ne(!1),n.route.id}function Kh(){var e;let t=F.exports.useContext(fd),n=Vh(Do.UseRouteError),r=Hh(Do.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function oo(e){ne(!1)}function Qh(e){let{basename:t="/",children:n=null,location:r,navigationType:o=gt.Pop,navigator:l,static:i=!1}=e;Fr()&&ne(!1);let a=t.replace(/^\/*/,"/"),u=F.exports.useMemo(()=>({basename:a,navigator:l,static:i}),[a,l,i]);typeof r=="string"&&(r=Pn(r));let{pathname:c="/",search:y="",hash:g="",state:m=null,key:x="default"}=r,E=F.exports.useMemo(()=>{let k=ad(c,a);return k==null?null:{pathname:k,search:y,hash:g,state:m,key:x}},[a,c,y,g,m,x]);return E==null?null:s(Xo.Provider,{value:u,children:s(Zo.Provider,{children:n,value:{location:E,navigationType:o}})})}function Gh(e){let{children:t,location:n}=e,r=F.exports.useContext(dd),o=r&&!t?r.router.routes:Ni(t);return Mh(o,n)}var Uu;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Uu||(Uu={}));new Promise(()=>{});function Ni(e,t){t===void 0&&(t=[]);let n=[];return F.exports.Children.forEach(e,(r,o)=>{if(!F.exports.isValidElement(r))return;if(r.type===F.exports.Fragment){n.push.apply(n,Ni(r.props.children,t));return}r.type!==oo&&ne(!1),!r.props.index||!r.props.children||ne(!1);let l=[...t,o],i={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(i.children=Ni(r.props.children,l)),n.push(i)}),n}/**
 * React Router DOM v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yh(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Xh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Zh(e,t){return e.button===0&&(!t||t==="_self")&&!Xh(e)}const Jh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function qh(e){let{basename:t,children:n,window:r}=e,o=F.exports.useRef();o.current==null&&(o.current=Gf({window:r,v5Compat:!0}));let l=o.current,[i,a]=F.exports.useState({action:l.action,location:l.location});return F.exports.useLayoutEffect(()=>l.listen(a),[l]),s(Qh,{basename:t,children:n,location:i.location,navigationType:i.action,navigator:l})}const e0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Bo=F.exports.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:l,replace:i,state:a,target:u,to:c,preventScrollReset:y}=t,g=Yh(t,Jh),m=typeof c=="string"?c:yr(c),x=/^[a-z+]+:\/\//i.test(m)||m.startsWith("//"),E=m,k=!1;if(e0&&x){let f=new URL(window.location.href),v=m.startsWith("//")?new URL(f.protocol+m):new URL(m);v.origin===f.origin?E=v.pathname+v.search+v.hash:k=!0}let D=Rh(E,{relative:o}),p=t0(E,{replace:i,state:a,target:u,preventScrollReset:y,relative:o});function d(f){r&&r(f),f.defaultPrevented||p(f)}return s("a",{...g,href:x?m:D,onClick:k||l?r:d,ref:n,target:u})});var $u;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})($u||($u={}));var Vu;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Vu||(Vu={}));function t0(e,t){let{target:n,replace:r,state:o,preventScrollReset:l,relative:i}=t===void 0?{}:t,a=Nr(),u=Jo(),c=md(e,{relative:i});return F.exports.useCallback(y=>{if(Zh(y,n)){y.preventDefault();let g=r!==void 0?r:yr(u)===yr(c);a(e,{replace:g,state:o,preventScrollReset:l,relative:i})}},[u,a,c,r,o,n,e,l,i])}/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var n0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),I=(e,t)=>{const n=F.exports.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:l=2,absoluteStrokeWidth:i,className:a="",children:u,...c},y)=>F.exports.createElement("svg",{ref:y,...n0,width:o,height:o,stroke:r,strokeWidth:i?Number(l)*24/Number(o):l,className:["lucide",`lucide-${r0(e)}`,a].join(" "),...c},[...t.map(([g,m])=>F.exports.createElement(g,m)),...Array.isArray(u)?u:[u]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dl=I("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bo=I("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ai=I("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=I("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wu=I("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=I("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yd=I("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pi=I("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=I("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=I("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=I("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hu=I("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=I("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vd=I("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=I("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=I("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=I("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=I("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sa=I("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vr=I("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=I("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fa=I("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qo=I("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ku=I("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=I("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=I("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xr=I("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=I("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function g0(e,t,n){return window.go.main.App.CreateChapter(e,t,n)}function y0(e,t,n,r){return window.go.main.App.CreateCharacter(e,t,n,r)}function v0(e,t,n,r,o,l){return window.go.main.App.CreateParagraph(e,t,n,r,o,l)}function x0(e,t){return window.go.main.App.CreateProject(e,t)}function w0(e){return window.go.main.App.DeleteChapter(e)}function k0(e){return window.go.main.App.DeleteCharacter(e)}function E0(e){return window.go.main.App.DeleteParagraph(e)}function C0(e){return window.go.main.App.DeleteProject(e)}function S0(e){return window.go.main.App.GetChapter(e)}function F0(e){return window.go.main.App.GetChapters(e)}function N0(e){return window.go.main.App.GetCharacter(e)}function A0(e){return window.go.main.App.GetCharacters(e)}function P0(e){return window.go.main.App.GetParagraph(e)}function z0(e){return window.go.main.App.GetParagraphs(e)}function D0(e){return window.go.main.App.GetProject(e)}function B0(e){return window.go.main.App.GetProjectLLMApiKey(e)}function b0(){return window.go.main.App.GetProjects()}function _0(e){return window.go.main.App.GetVoice(e)}function j0(){return window.go.main.App.GetVoices()}function L0(e,t,n){return window.go.main.App.Log(e,t,n)}function T0(e,t){return window.go.main.App.ReorderChapters(e,t)}function R0(e,t){return window.go.main.App.SetProjectLLMApiKey(e,t)}function M0(e){return window.go.main.App.SplitParagraph(e)}function I0(e,t,n){return window.go.main.App.UpdateChapter(e,t,n)}function O0(e,t,n,r){return window.go.main.App.UpdateCharacter(e,t,n,r)}function U0(e,t,n,r,o,l,i,a,u){return window.go.main.App.UpdateParagraph(e,t,n,r,o,l,i,a,u)}function $0(e,t,n){return window.go.main.App.UpdateProject(e,t,n)}const Q={createProject:async(e,t)=>{try{return await x0(e,t)}catch(n){throw console.error("Failed to create project:",n),n}},getProjects:async()=>{try{return await b0()||[]}catch(e){throw console.error("Failed to get projects:",e),e}},getProject:async e=>{try{return await D0(e)}catch(t){throw console.error("Failed to get project:",t),t}},updateProject:async(e,t,n)=>{try{await $0(e,t,n)}catch(r){throw console.error("Failed to update project:",r),r}},deleteProject:async e=>{try{await C0(e)}catch(t){throw console.error("Failed to delete project:",t),t}},setProjectLLMApiKey:async(e,t)=>{try{await R0(e,t)}catch(n){throw console.error("Failed to set project LLM API key:",n),n}},getProjectLLMApiKey:async e=>{try{return await B0(e)||""}catch(t){throw console.error("Failed to get project LLM API key:",t),t}},createChapter:async(e,t,n)=>{try{return await g0(e,t,n)}catch(r){throw console.error("Failed to create chapter:",r),r}},getChapters:async e=>{try{return await F0(e)||[]}catch(t){throw console.error("Failed to get chapters:",t),t}},getChapter:async e=>{try{return await S0(e)}catch(t){throw console.error("Failed to get chapter:",t),t}},updateChapter:async(e,t,n)=>{try{await I0(e,t,n)}catch(r){throw console.error("Failed to update chapter:",r),r}},deleteChapter:async e=>{try{await w0(e)}catch(t){throw console.error("Failed to delete chapter:",t),t}},reorderChapters:async(e,t)=>{try{await T0(e,t)}catch(n){throw console.error("Failed to reorder chapters:",n),n}},createParagraph:async(e,t,n,r,o,l)=>{try{return await v0(e,t,n,r,o,l)}catch(i){throw console.error("Failed to create paragraph:",i),i}},getParagraphs:async e=>{try{return await z0(e)||[]}catch(t){throw console.error("Failed to get paragraphs:",t),t}},getParagraph:async e=>{try{return await P0(e)}catch(t){throw console.error("Failed to get paragraph:",t),t}},updateParagraph:async(e,t,n,r,o,l,i="",a=0,u=0)=>{try{await U0(e,t,n,r,o,l,i,a,u)}catch(c){throw console.error("Failed to update paragraph:",c),c}},deleteParagraph:async e=>{try{await E0(e)}catch(t){throw console.error("Failed to delete paragraph:",t),t}},splitParagraph:async e=>{try{return await M0(e)||[]}catch(t){throw console.error("Failed to split paragraph:",t),t}},createCharacter:async(e,t,n,r)=>{try{return await y0(e,t,n,r)}catch(o){throw console.error("Failed to create character:",o),o}},getCharacters:async e=>{try{return await A0(e)||[]}catch(t){throw console.error("Failed to get characters:",t),t}},getCharacter:async e=>{try{return await N0(e)}catch(t){throw console.error("Failed to get character:",t),t}},updateCharacter:async(e,t,n,r)=>{try{await O0(e,t,n,r)}catch(o){throw console.error("Failed to update character:",o),o}},deleteCharacter:async e=>{try{await k0(e)}catch(t){throw console.error("Failed to delete character:",t),t}},getVoices:async()=>{try{return await j0()||[]}catch(e){throw console.error("Failed to get voices:",e),e}},getVoice:async e=>{try{return await _0(e)}catch(t){throw console.error("Failed to get voice:",t),t}},analyzeText:async e=>{throw new Error("Not implemented")},generateAudio:async(e,t,n,r)=>{throw new Error("Not implemented")},generateBatchAudio:async e=>{throw new Error("Not implemented")},log:async(e,t,n)=>{try{await L0(e,t,n)}catch(r){console.error("Failed to send log to backend:",r)}}},V0=()=>{const e=Nr(),[t,n]=F.exports.useState([]),[r,o]=F.exports.useState(!1),[l,i]=F.exports.useState(!1),[a,u]=F.exports.useState({name:"",description:""}),c=async()=>{o(!0);try{const x=await Q.getProjects();n(x)}catch(x){console.error("Failed to load projects:",x)}o(!1)};F.exports.useEffect(()=>{c()},[]);const y=async x=>{if(x.preventDefault(),!!a.name.trim()){o(!0);try{await Q.createProject(a.name,a.description),u({name:"",description:""}),i(!1),c()}catch(E){console.error("Failed to create project:",E)}o(!1)}},g=async x=>{if(!!window.confirm("\u786E\u5B9A\u8981\u5220\u9664\u6B64\u5DE5\u7A0B\u5417\uFF1F")){o(!0);try{await Q.deleteProject(x),c()}catch(E){console.error("Failed to delete project:",E)}o(!1)}},m=x=>{e(`/project/${x}`)};return h("div",{className:"home-page",children:[h("div",{className:"page-header",children:[h("div",{className:"header-content",children:[s(Ai,{size:28,className:"header-icon"}),h("div",{children:[s("h1",{children:"\u542C\u58A8\u8BED - \u6709\u58F0\u5C0F\u8BF4\u5236\u4F5C"}),s("p",{children:"\u521B\u5EFA\u3001\u7F16\u8F91\u548C\u7BA1\u7406\u60A8\u7684\u6709\u58F0\u5C0F\u8BF4\u5DE5\u7A0B"})]})]}),h("button",{className:"create-project-btn",onClick:()=>i(!0),disabled:r,children:[s(Sa,{size:20}),"\u521B\u5EFA\u65B0\u5DE5\u7A0B"]})]}),s("div",{className:"projects-container",children:s("div",{className:"projects-list",children:r&&t.length===0?h("div",{className:"loading",children:[s("div",{className:"spinner"}),s("p",{children:"\u52A0\u8F7D\u4E2D..."})]}):t.length===0?h("div",{className:"empty-state",children:[s(l0,{size:64}),s("h2",{children:"\u6682\u65E0\u5DE5\u7A0B"}),s("p",{children:"\u70B9\u51FB\u4E0A\u65B9\u6309\u94AE\u521B\u5EFA\u60A8\u7684\u7B2C\u4E00\u4E2A\u6709\u58F0\u5C0F\u8BF4\u5DE5\u7A0B"})]}):t.map((x,E)=>h("div",{className:"project-item",children:[h("div",{className:"project-info",onClick:()=>m(x.id),children:[s("div",{className:"project-index",children:E+1}),h("div",{className:"project-content",children:[s("h3",{children:x.name}),s("p",{className:"project-description",children:x.description||"\u6682\u65E0\u63CF\u8FF0"}),h("div",{className:"project-meta",children:[h("span",{children:["\u521B\u5EFA\u65F6\u95F4: ",new Date(x.createdAt).toLocaleDateString()]}),h("span",{children:["\u66F4\u65B0\u65F6\u95F4: ",new Date(x.updatedAt).toLocaleDateString()]})]})]})]}),h("div",{className:"project-actions",children:[h("button",{className:"btn-primary",onClick:k=>{k.stopPropagation(),m(x.id)},disabled:r,title:"\u6253\u5F00\u9879\u76EE",children:[s(yd,{size:16}),"\u6253\u5F00"]}),h("button",{className:"btn-danger",onClick:k=>{k.stopPropagation(),g(x.id)},disabled:r,children:[s(qo,{size:16}),"\u5220\u9664"]})]})]},x.id))})}),l&&s("div",{className:"modal",children:h("div",{className:"modal-content",children:[h("div",{className:"modal-header",children:[s("h2",{children:"\u521B\u5EFA\u65B0\u5DE5\u7A0B"}),s("button",{className:"modal-close",onClick:()=>i(!1),children:"\xD7"})]}),h("form",{onSubmit:y,children:[h("div",{className:"form-group",children:[s("label",{htmlFor:"project-name",children:"\u5DE5\u7A0B\u540D\u79F0"}),s("input",{type:"text",id:"project-name",value:a.name,onChange:x=>u({...a,name:x.target.value}),placeholder:"\u8BF7\u8F93\u5165\u5DE5\u7A0B\u540D\u79F0",required:!0})]}),h("div",{className:"form-group",children:[s("label",{htmlFor:"project-description",children:"\u5DE5\u7A0B\u63CF\u8FF0"}),s("textarea",{id:"project-description",value:a.description,onChange:x=>u({...a,description:x.target.value}),placeholder:"\u8BF7\u8F93\u5165\u5DE5\u7A0B\u63CF\u8FF0",rows:3})]}),h("div",{className:"modal-footer",children:[s("button",{type:"button",className:"btn-secondary",onClick:()=>i(!1),disabled:r,children:"\u53D6\u6D88"}),s("button",{type:"submit",className:"btn-primary",disabled:r,children:"\u786E\u5B9A"})]})]})]})}),s("style",{children:`
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
          transform: translateY(-1px);
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
      `})]})},W0=({projectId:e,onChapterSelect:t})=>{const n=Nr(),[r,o]=F.exports.useState([]),[l,i]=F.exports.useState(!1),[a,u]=F.exports.useState(!1),[c,y]=F.exports.useState({title:"",content:""}),g=async()=>{i(!0);try{const p=await Q.getChapters(e);o(p)}catch(p){console.error("Failed to load chapters:",p)}i(!1)};F.exports.useEffect(()=>{g()},[e]);const m=async p=>{if(p.preventDefault(),!!c.title.trim()){i(!0);try{await Q.createChapter(e,c.title,c.content),y({title:"",content:""}),u(!1),g()}catch(d){console.error("Failed to create chapter:",d)}i(!1)}},x=async p=>{if(!!window.confirm("\u786E\u5B9A\u8981\u5220\u9664\u6B64\u7AE0\u8282\u5417\uFF1F")){i(!0);try{await Q.deleteChapter(p),g()}catch(d){console.error("Failed to delete chapter:",d)}i(!1)}},E=(p,d)=>{p.dataTransfer.setData("text/plain",d.toString())},k=p=>{p.preventDefault()},D=async(p,d)=>{p.preventDefault();const f=parseInt(p.dataTransfer.getData("text/plain"));if(f!==d){const v=[...r],[w]=v.splice(f,1);v.splice(d,0,w);const N=v.map(A=>A.id);try{await Q.reorderChapters(e,N),o(v)}catch(A){console.error("Failed to reorder chapters:",A)}}};return h("div",{className:"chapter-manager",children:[h("div",{className:"chapter-manager-header",children:[h("div",{className:"header-left",children:[s(Pi,{size:20}),s("h2",{children:"\u7AE0\u8282\u7BA1\u7406"})]}),h("button",{className:"btn-primary",onClick:()=>u(!0),disabled:l,children:[s(Sa,{size:16}),"\u65B0\u5EFA\u7AE0\u8282"]})]}),s("div",{className:"chapter-list",children:l&&r.length===0?h("div",{className:"loading-state",children:[s("div",{className:"spinner"}),s("p",{children:"\u52A0\u8F7D\u4E2D..."})]}):r.length===0?h("div",{className:"empty-state",children:[s(u0,{size:48}),s("h3",{children:"\u6682\u65E0\u7AE0\u8282"}),s("p",{children:"\u70B9\u51FB\u4E0A\u65B9\u6309\u94AE\u521B\u5EFA\u60A8\u7684\u7B2C\u4E00\u4E2A\u7AE0\u8282"})]}):r.map((p,d)=>h("div",{className:"chapter-item",draggable:!0,onDragStart:f=>E(f,d),onDragOver:k,onDrop:f=>D(f,d),children:[h("div",{className:"chapter-info",onClick:()=>n(`/project/${e}/chapter/${p.id}`),children:[s("div",{className:"chapter-index",children:d+1}),h("div",{className:"chapter-content",children:[s("h4",{children:p.title}),h("p",{className:"chapter-preview",children:[p.content.slice(0,50),p.content.length>50?"...":""]}),h("div",{className:"chapter-meta",children:[h("span",{children:["\u521B\u5EFA\u65F6\u95F4: ",new Date(p.createdAt).toLocaleDateString()]}),h("span",{children:["\u66F4\u65B0\u65F6\u95F4: ",new Date(p.updatedAt).toLocaleDateString()]})]})]})]}),h("div",{className:"chapter-actions",children:[s(i0,{size:20,className:"drag-handle"}),h("button",{className:"btn-primary",onClick:f=>{f.stopPropagation(),n(`/project/${e}/chapter/${p.id}`)},disabled:l,title:"\u6253\u5F00\u7AE0\u8282\u7F16\u8F91\u5668",children:[s(yd,{size:16}),"\u6253\u5F00"]}),h("button",{className:"btn-danger",onClick:f=>{f.stopPropagation(),x(p.id)},disabled:l,children:[s(qo,{size:16}),"\u5220\u9664"]})]})]},p.id))}),a&&s("div",{className:"modal",children:h("div",{className:"modal-content",children:[h("div",{className:"modal-header",children:[s("h2",{children:"\u521B\u5EFA\u65B0\u7AE0\u8282"}),s("button",{className:"modal-close",onClick:()=>u(!1),disabled:l,children:s(xr,{size:24})})]}),h("form",{onSubmit:m,children:[h("div",{className:"form-group",children:[s("label",{htmlFor:"chapter-title",children:"\u7AE0\u8282\u6807\u9898"}),s("input",{type:"text",id:"chapter-title",value:c.title,onChange:p=>y({...c,title:p.target.value}),placeholder:"\u8BF7\u8F93\u5165\u7AE0\u8282\u6807\u9898",required:!0})]}),h("div",{className:"form-group",children:[s("label",{htmlFor:"chapter-content",children:"\u7AE0\u8282\u5185\u5BB9"}),s("textarea",{id:"chapter-content",value:c.content,onChange:p=>y({...c,content:p.target.value}),placeholder:"\u8BF7\u8F93\u5165\u7AE0\u8282\u5185\u5BB9",rows:6})]}),h("div",{className:"modal-footer",children:[s("button",{type:"button",className:"btn-secondary",onClick:()=>u(!1),disabled:l,children:"\u53D6\u6D88"}),s("button",{type:"submit",className:"btn-primary",disabled:l,children:"\u786E\u5B9A"})]})]})]})}),s("style",{children:`
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
      `})]})},H0=({projectId:e})=>{const[t,n]=F.exports.useState([]),[r,o]=F.exports.useState([]),[l,i]=F.exports.useState(!1),[a,u]=F.exports.useState(!1),[c,y]=F.exports.useState(null),[g,m]=F.exports.useState({name:"",description:"",voiceId:""});F.exports.useEffect(()=>{e&&(x(),E())},[e]);const x=async()=>{i(!0);try{const w=await Q.getCharacters(e);n(w)}catch(w){console.error("Failed to load characters:",w)}i(!1)},E=async()=>{try{const w=await Q.getVoices();o(w)}catch(w){console.error("Failed to load voices:",w)}},k=async w=>{if(w.preventDefault(),!!g.name.trim()){i(!0);try{await Q.createCharacter(e,g.name,g.description,g.voiceId),f(),u(!1),x()}catch(N){console.error("Failed to create character:",N)}i(!1)}},D=async w=>{if(w.preventDefault(),!(!c||!g.name.trim())){i(!0);try{await Q.updateCharacter(c.id,g.name,g.description,g.voiceId),f(),y(null),x()}catch(N){console.error("Failed to update character:",N)}i(!1)}},p=async w=>{if(!!window.confirm("\u786E\u5B9A\u8981\u5220\u9664\u6B64\u89D2\u8272\u5417\uFF1F")){i(!0);try{await Q.deleteCharacter(w),x()}catch(N){console.error("Failed to delete character:",N)}i(!1)}},d=w=>{y(w),m({name:w.name,description:w.description||"",voiceId:w.voiceId||""})},f=()=>{m({name:"",description:"",voiceId:""})},v=w=>{const N=r.find(A=>A.id===w);return N?N.name:"\u672A\u8BBE\u7F6E\u97F3\u8272"};return h("div",{className:"role-manager",children:[h("div",{className:"role-manager-header",children:[h("div",{className:"header-left",children:[s(Ku,{size:20}),s("h2",{children:"\u89D2\u8272\u7BA1\u7406"})]}),h("button",{className:"btn-primary",onClick:()=>{f(),y(null),u(!0)},disabled:l,children:[s(Sa,{size:16}),"\u6DFB\u52A0\u89D2\u8272"]})]}),s("div",{className:"role-list",children:l&&t.length===0?h("div",{className:"loading-state",children:[s("div",{className:"spinner"}),s("p",{children:"\u52A0\u8F7D\u4E2D..."})]}):t.length===0?h("div",{className:"empty-state",children:[s(Fa,{size:48}),s("h3",{children:"\u6682\u65E0\u89D2\u8272"}),s("p",{children:"\u70B9\u51FB\u4E0A\u65B9\u6309\u94AE\u6DFB\u52A0\u5C0F\u8BF4\u89D2\u8272"})]}):s("div",{className:"role-grid",children:t.map(w=>h("div",{className:"role-card",children:[s("div",{className:"role-avatar",children:s(Ku,{size:28})}),h("div",{className:"role-info",children:[s("h4",{children:w.name}),w.description&&s("p",{className:"role-description",children:w.description}),h("div",{className:"voice-badge",children:[s(vd,{size:14}),s("span",{children:v(w.voiceId)})]})]}),h("div",{className:"role-actions",children:[s("button",{className:"btn-icon",onClick:()=>d(w),disabled:l,title:"\u7F16\u8F91",children:s(d0,{size:16})}),s("button",{className:"btn-icon btn-danger",onClick:()=>p(w.id),disabled:l,title:"\u5220\u9664",children:s(qo,{size:16})})]})]},w.id))})}),(a||c)&&s("div",{className:"modal",children:h("div",{className:"modal-content",children:[h("div",{className:"modal-header",children:[s("h2",{children:c?"\u7F16\u8F91\u89D2\u8272":"\u6DFB\u52A0\u65B0\u89D2\u8272"}),s("button",{className:"modal-close",onClick:()=>{u(!1),y(null),f()},disabled:l,children:s(xr,{size:24})})]}),h("form",{onSubmit:c?D:k,children:[h("div",{className:"form-group",children:[s("label",{htmlFor:"character-name",children:"\u89D2\u8272\u540D\u79F0 *"}),s("input",{id:"character-name",type:"text",value:g.name,onChange:w=>m({...g,name:w.target.value}),placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0",required:!0,disabled:l})]}),h("div",{className:"form-group",children:[s("label",{htmlFor:"character-description",children:"\u89D2\u8272\u7B80\u4ECB"}),s("textarea",{id:"character-description",value:g.description,onChange:w=>m({...g,description:w.target.value}),placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u7B80\u4ECB\uFF08\u53EF\u9009\uFF09",rows:3,disabled:l})]}),h("div",{className:"form-group",children:[s("label",{htmlFor:"character-voice",children:"\u9009\u62E9\u97F3\u8272"}),s("div",{className:"voice-selector",children:r.length===0?h("div",{className:"no-voices",children:[s(a0,{size:16}),s("span",{children:"\u52A0\u8F7D\u97F3\u8272\u4E2D..."})]}):s("div",{className:"voice-grid",children:r.map(w=>h("div",{className:`voice-option ${g.voiceId===w.id?"selected":""}`,onClick:()=>m({...g,voiceId:w.id}),children:[h("div",{className:"voice-option-header",children:[s(xd,{size:16}),s("span",{className:"voice-name",children:w.name})]}),s("p",{className:"voice-desc",children:w.description}),w.supportedTones&&w.supportedTones.length>0&&h("div",{className:"voice-tones",children:[w.supportedTones.slice(0,3).map((N,A)=>s("span",{className:"tone-tag",children:N},A)),w.supportedTones.length>3&&h("span",{className:"tone-tag",children:["+",w.supportedTones.length-3]})]})]},w.id))})})]}),h("div",{className:"modal-footer",children:[s("button",{type:"button",className:"btn-secondary",onClick:()=>{u(!1),y(null),f()},disabled:l,children:"\u53D6\u6D88"}),h("button",{type:"submit",className:"btn-primary",disabled:l,children:[s(vr,{size:16}),c?"\u4FDD\u5B58\u4FEE\u6539":"\u521B\u5EFA\u89D2\u8272"]})]})]})]})}),s("style",{children:`
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
      `})]})},K0=()=>{const{id:e}=hd(),t=Nr(),[n,r]=F.exports.useState(null),[o,l]=F.exports.useState(!1),[i,a]=F.exports.useState(!1),[u,c]=F.exports.useState(!1),[y,g]=F.exports.useState({name:"",description:""}),[m,x]=F.exports.useState(""),[E,k]=F.exports.useState(!1);F.exports.useEffect(()=>{e&&D(parseInt(e))},[e]);const D=async v=>{l(!0);try{const w=await Q.getProject(v);r(w),w&&(g({name:w.name,description:w.description}),x(w.llmApiKey||""))}catch(w){console.error("Failed to load project:",w)}l(!1)},p=async()=>{if(!!e){l(!0);try{await Q.updateProject(parseInt(e),y.name,y.description),a(!1),D(parseInt(e))}catch(v){console.error("Failed to update project:",v)}l(!1)}},d=async()=>{if(!!e){k(!0);try{await Q.setProjectLLMApiKey(parseInt(e),m),c(!1),D(parseInt(e))}catch(v){console.error("Failed to save API key:",v)}k(!1)}},f=v=>v?v.length<=8?v:v.slice(0,4)+"..."+v.slice(-4):"\u672A\u8BBE\u7F6E";return o&&!n?s("div",{className:"project-details-page",children:h("div",{className:"loading-container",children:[s("div",{className:"spinner"}),s("p",{children:"\u52A0\u8F7D\u4E2D..."})]})}):n?h("div",{className:"project-details-page",children:[s("header",{className:"page-header",children:h("div",{className:"header-inner",children:[h("div",{className:"header-left",children:[h(Bo,{to:"/",className:"back-button",children:[s(bo,{size:18}),s("span",{children:"\u8FD4\u56DE"})]}),s("div",{className:"divider"}),h("div",{className:"project-title",children:[s(Ai,{size:20,className:"title-icon"}),h("div",{children:[s("h1",{children:n.name}),s("p",{className:"subtitle",children:"\u6709\u58F0\u5C0F\u8BF4\u5236\u4F5C\u5DE5\u7A0B"})]})]})]}),s("div",{className:"header-right",children:s("button",{className:"btn-secondary",onClick:()=>t("/"),children:"\u8FD4\u56DE\u9996\u9875"})})]})}),s("main",{className:"main-content",children:h("div",{className:"content-wrapper",children:[h("section",{className:"project-info-section",children:[h("div",{className:"section-header",children:[h("h2",{children:[s(Fa,{size:18}),"\u9879\u76EE\u6982\u89C8"]}),!i&&s("button",{className:"btn-ghost",onClick:()=>a(!0),disabled:o,children:"\u7F16\u8F91\u4FE1\u606F"})]}),s("div",{className:"project-info-card",children:i?h("div",{className:"project-info-edit",children:[h("div",{className:"form-grid",children:[h("div",{className:"form-group full-width",children:[s("label",{htmlFor:"project-name",children:"\u9879\u76EE\u540D\u79F0"}),s("input",{id:"project-name",type:"text",value:y.name,onChange:v=>g({...y,name:v.target.value}),placeholder:"\u8BF7\u8F93\u5165\u9879\u76EE\u540D\u79F0",disabled:o})]}),h("div",{className:"form-group full-width",children:[s("label",{htmlFor:"project-description",children:"\u9879\u76EE\u63CF\u8FF0"}),s("textarea",{id:"project-description",value:y.description,onChange:v=>g({...y,description:v.target.value}),placeholder:"\u8BF7\u8F93\u5165\u9879\u76EE\u63CF\u8FF0",rows:3,disabled:o})]})]}),h("div",{className:"form-actions",children:[h("button",{className:"btn-secondary",onClick:()=>{a(!1),g({name:n.name,description:n.description})},disabled:o,children:[s(xr,{size:16}),"\u53D6\u6D88"]}),h("button",{className:"btn-primary",onClick:p,disabled:o,children:[s(vr,{size:16}),"\u4FDD\u5B58\u66F4\u6539"]})]})]}):h("div",{className:"project-info-content",children:[h("div",{className:"info-grid",children:[h("div",{className:"info-item",children:[s("div",{className:"info-label",children:"\u9879\u76EE\u540D\u79F0"}),s("div",{className:"info-value",children:n.name})]}),h("div",{className:"info-item",children:[s("div",{className:"info-label",children:"\u9879\u76EE\u63CF\u8FF0"}),s("div",{className:"info-value",children:n.description||"\u6682\u65E0\u63CF\u8FF0"})]}),h("div",{className:"info-item",children:[s("div",{className:"info-label",children:"API Key"}),h("div",{className:"info-value api-key-display",children:[s(Hu,{size:14}),s("span",{children:f(n.llmApiKey)})]})]})]}),h("div",{className:"meta-row",children:[h("div",{className:"meta-item",children:[s(o0,{size:14}),h("span",{children:["\u521B\u5EFA\u4E8E ",new Date(n.createdAt).toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric"})]})]}),h("div",{className:"meta-item",children:[s(gd,{size:14}),h("span",{children:["\u66F4\u65B0\u4E8E ",new Date(n.updatedAt).toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric"})]})]})]})]})})]}),h("section",{className:"api-key-section",children:[h("div",{className:"section-header",children:[h("h2",{children:[s(Hu,{size:18}),"\u6587\u672C\u5927\u6A21\u578B API Key"]}),!u&&s("button",{className:"btn-ghost",onClick:()=>c(!0),disabled:o,children:"\u914D\u7F6E"})]}),s("div",{className:"api-key-card",children:u?h("div",{className:"api-key-edit",children:[h("div",{className:"form-group",children:[s("label",{htmlFor:"llm-api-key",children:"API Key"}),s("input",{id:"llm-api-key",type:"password",value:m,onChange:v=>x(v.target.value),placeholder:"\u8BF7\u8F93\u5165\u6587\u672C\u5927\u6A21\u578B API Key",disabled:E}),s("p",{className:"help-text",children:"\u8F93\u5165\u706B\u5C71\u5F15\u64CE\u6587\u672C\u5927\u6A21\u578B API Key"})]}),h("div",{className:"form-actions",children:[h("button",{className:"btn-secondary",onClick:()=>{c(!1),x(n.llmApiKey||"")},disabled:E,children:[s(xr,{size:16}),"\u53D6\u6D88"]}),h("button",{className:"btn-primary",onClick:d,disabled:E,children:[s(vr,{size:16}),E?"\u4FDD\u5B58\u4E2D...":"\u4FDD\u5B58"]})]})]}):h("div",{className:"api-key-content",children:[s("div",{className:"api-key-description",children:s("p",{children:"\u5728\u6B64\u9879\u76EE\u4E2D\u4F7F\u7528\u81EA\u5B9A\u4E49\u7684 API Key \u6765\u8C03\u7528\u6587\u672C\u5927\u6A21\u578B\u670D\u52A1\u3002\u5982\u679C\u672A\u8BBE\u7F6E\uFF0C\u5C06\u4F7F\u7528\u7CFB\u7EDF\u9ED8\u8BA4\u914D\u7F6E\u3002"})}),h("div",{className:"api-key-status",children:[s("div",{className:`status-indicator ${n.llmApiKey?"active":"inactive"}`,children:n.llmApiKey?"\u5DF2\u914D\u7F6E":"\u672A\u914D\u7F6E"}),n.llmApiKey&&s("span",{className:"api-key-masked",children:f(n.llmApiKey)})]})]})})]}),h("section",{className:"character-section",children:[s("div",{className:"section-header",children:h("h2",{children:[s(h0,{size:18}),"\u89D2\u8272\u7BA1\u7406"]})}),s("div",{className:"role-manager-wrapper",children:s(H0,{projectId:parseInt(e||"0")})})]}),h("section",{className:"chapter-section",children:[s("div",{className:"section-header",children:h("h2",{children:[s(Ai,{size:18}),"\u7AE0\u8282\u7BA1\u7406"]})}),s("div",{className:"chapter-manager-wrapper",children:s(W0,{projectId:parseInt(e||"0")})})]})]})}),s("style",{children:`
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
          min-height: 0;
        }

        .content-wrapper {
          max-width: 1400px;
          margin: 0 auto;
          padding: 20px;
          width: 100%;
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
          margin-bottom: 20px;
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
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 16px;
        }

        .info-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .info-label {
          font-size: 0.78rem;
          font-weight: 500;
          color: #64748B;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .info-value {
          font-size: 0.95rem;
          color: #E2E8F0;
          line-height: 1.5;
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
          gap: 16px;
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

        .api-key-content {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .api-key-description p {
          margin: 0;
          color: #94A3B8;
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .api-key-status {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .status-indicator {
          padding: 4px 12px;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 500;
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

        .api-key-edit {
          display: flex;
          flex-direction: column;
          gap: 12px;
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
      `})]}):s("div",{className:"project-details-page",children:h("div",{className:"error-container",children:[s("h2",{children:"\u9879\u76EE\u4E0D\u5B58\u5728"}),h(Bo,{to:"/",className:"btn-primary",children:[s(bo,{size:16}),"\u8FD4\u56DE\u9996\u9875"]})]})})},Q0="neutral",G0="happy",Y0="sad",X0="angry",Z0="excited",J0="fearful",q0="surprised",em="disgusted",tm=[{value:Q0,label:"\u4E2D\u6027"},{value:G0,label:"\u5F00\u5FC3"},{value:Y0,label:"\u60B2\u4F24"},{value:X0,label:"\u6124\u6012"},{value:Z0,label:"\u5174\u594B"},{value:J0,label:"\u6050\u60E7"},{value:q0,label:"\u60CA\u8BB6"},{value:em,label:"\u538C\u6076"}],Qu=1,nm=()=>{const{projectId:e,chapterId:t}=hd();Nr();const[n,r]=F.exports.useState(null),[o,l]=F.exports.useState([]),[i,a]=F.exports.useState([]),[u,c]=F.exports.useState([]),[y,g]=F.exports.useState(!0),[m,x]=F.exports.useState(null),[E,k]=F.exports.useState(!1),[D,p]=F.exports.useState(0),[d,f]=F.exports.useState(0),[v,w]=F.exports.useState({content:"",speaker:"",tone:"neutral",voiceId:"",speed:Qu}),[N,A]=F.exports.useState(new Set),[B,V]=F.exports.useState(!1),[L,re]=F.exports.useState(!1),[Bt,We]=F.exports.useState(!1),[Qt,Gt]=F.exports.useState(""),[ut,Yt]=F.exports.useState(!1),[P,_]=F.exports.useState(!1),j=F.exports.useRef(null);F.exports.useEffect(()=>{t&&H()},[t,e]);const H=async()=>{g(!0);try{const C=await Q.getChapter(parseInt(t||"0"));if(r(C),Gt(C.content||""),e){const tl=await Q.getCharacters(parseInt(e));a(tl)}const b=await Q.getVoices();c(b);const ce=[...await Q.getParagraphs(parseInt(t||"0"))].sort((tl,Nd)=>tl.orderIndex-Nd.orderIndex);l(ce),Te(ce),ce.length>0&&zn(ce[0].id)}catch(C){console.error("Failed to load data:",C)}g(!1)},J=()=>{n&&Gt(n.content||""),We(!0)},Xt=async()=>{if(!!n){Yt(!0);try{await Q.updateChapter(n.id,n.title,Qt),r(C=>C?{...C,content:Qt}:null),We(!1),re(!0),setTimeout(()=>re(!1),2e3)}catch(C){console.error("Failed to save chapter:",C)}Yt(!1)}},Te=C=>{const b=C.reduce((oe,ce)=>oe+(ce.duration||0),0);f(b)},Ze=(()=>{let C=0;return o.map(b=>{const oe=C,ce=C+(b.duration||2);return C=ce,{id:b.id,start:oe,end:ce,paragraph:b}})})(),He=C=>N.has(C),zn=C=>{x(C);const b=o.find(oe=>oe.id===C);b&&w({content:b.content,speaker:b.speaker||"",tone:b.tone||"neutral",voiceId:b.voiceId||"",speed:b.speed||Qu})},Dn=(C,b)=>{w({...v,[C]:b}),m&&A(oe=>new Set(oe).add(m))},wd=()=>{if(!m)return;const C=o.map(b=>b.id===m?{...b,...v}:b);l(C)},kd=async()=>{if(N.size!==0){V(!0);try{for(const C of N){const b=o.find(oe=>oe.id===C);b&&await Q.updateParagraph(b.id,b.content,b.speaker,b.tone,b.voiceId,b.speed,b.audioPath,b.duration,b.orderIndex)}A(new Set),re(!0),setTimeout(()=>re(!1),2e3)}catch(C){console.error("Failed to save paragraphs:",C)}V(!1)}},Ed=C=>{if(!window.confirm("\u786E\u5B9A\u8981\u5220\u9664\u6B64\u6BB5\u843D\u5417\uFF1F"))return;const b=o.filter(oe=>oe.id!==C);l(b),Te(b),A(oe=>{const ce=new Set(oe);return ce.delete(C),ce}),m===C&&(b.length>0?zn(b[0].id):x(null))},Cd=async C=>{console.log("Generating audio for paragraph:",C)},Sd=async()=>{if(!!t&&!(o.length>0&&!window.confirm("\u5DF2\u5B58\u5728\u6BB5\u843D\uFF0C\u786E\u5B9A\u8981\u91CD\u65B0\u751F\u6210\u5417\uFF1F\u8FD9\u5C06\u8986\u76D6\u73B0\u6709\u6BB5\u843D\u3002"))){_(!0);try{const b=[...await Q.splitParagraph(parseInt(t))].sort((oe,ce)=>oe.orderIndex-ce.orderIndex);l(b),Te(b),A(new Set),b.length>0?zn(b[0].id):x(null),re(!0),setTimeout(()=>re(!1),2e3)}catch(C){console.error("Failed to generate script:",C),alert("\u751F\u6210\u811A\u672C\u5931\u8D25\uFF1A"+C.message)}_(!1)}},Fd=()=>{k(!E)},Na=C=>{const b=Math.floor(C/60),oe=Math.floor(C%60),ce=Math.floor(C%1*100);return`${b.toString().padStart(2,"0")}:${oe.toString().padStart(2,"0")}:${ce.toString().padStart(2,"0")}`},el=C=>({\u65C1\u767D:"#00A8FF",\u7537\u4E3B\u89D2:"#FF6B6B",\u5973\u4E3B\u89D2:"#FF8EC7"})[C]||"#95A5A6",Pr=m?o.find(C=>C.id===m):null;return y?s("div",{className:"chapter-editor",children:h("div",{className:"loading-container",children:[s("div",{className:"spinner"}),s("p",{children:"\u52A0\u8F7D\u4E2D..."})]})}):n?h("div",{className:"chapter-editor",children:[h("header",{className:"editor-header",children:[h("div",{className:"header-left",children:[h(Bo,{to:`/project/${e}`,className:"back-button",children:[s(bo,{size:18}),s("span",{children:"\u8FD4\u56DE"})]}),s("div",{className:"divider"}),h("div",{className:"chapter-title",children:[s("h1",{children:n.title}),s("p",{className:"subtitle",children:"\u7AE0\u8282\u7F16\u8F91 \xB7 \u65F6\u95F4\u8F74\u89C6\u56FE"})]}),N.size>0&&h("div",{className:"dirty-indicator",children:[s(Dl,{size:14}),h("span",{children:[N.size," \u4E2A\u672A\u4FDD\u5B58\u4FEE\u6539"]})]}),L&&h("div",{className:"save-success",children:[s(Wu,{size:14}),s("span",{children:"\u5DF2\u4FDD\u5B58"})]})]}),h("div",{className:"header-right",children:[h("button",{className:"btn-secondary",onClick:J,children:[s(Pi,{size:16}),"\u7F16\u8F91\u6587\u672C"]}),h("button",{className:`btn-save ${N.size>0?"dirty":""}`,onClick:kd,disabled:N.size===0||B,children:[s(vr,{size:16}),B?"\u4FDD\u5B58\u4E2D...":"\u4FDD\u5B58"]}),h("button",{className:"btn-primary",onClick:Sd,disabled:P,children:[s(Fa,{size:16}),P?"\u751F\u6210\u4E2D...":o.length>0?"\u91CD\u65B0\u751F\u6210\u811A\u672C":"\u751F\u6210\u811A\u672C"]})]})]}),h("div",{className:"editor-main",children:[h("div",{className:"upper-section",children:[h("div",{className:"paragraph-list-panel",children:[h("div",{className:"panel-header",children:[s("h2",{children:"\u6BB5\u843D\u5217\u8868"}),h("span",{className:"paragraph-count",children:[o.length," \u4E2A\u6BB5\u843D"]})]}),s("div",{className:"paragraph-list-content",children:o.map((C,b)=>h("div",{className:`paragraph-item ${m===C.id?"selected":""}`,onClick:()=>zn(C.id),children:[h("div",{className:"paragraph-item-left",children:[s("div",{className:"paragraph-index",children:b+1}),s("div",{className:"speaker-dot",style:{backgroundColor:el(C.speaker)}})]}),h("div",{className:"paragraph-item-content",children:[h("div",{className:"paragraph-item-header",children:[s("span",{className:"speaker-label",style:{color:el(C.speaker)},children:C.speaker||"\u65C1\u767D"}),h("span",{className:"paragraph-duration",children:[s(gd,{size:10}),(C.duration||0).toFixed(1),"s"]}),He(C.id)&&s("span",{className:"dirty-dot",title:"\u6709\u672A\u4FDD\u5B58\u7684\u4FEE\u6539"})]}),s("p",{className:"paragraph-item-text",children:C.content})]}),s("div",{className:"paragraph-item-right",children:C.audioPath?s("span",{className:"has-audio-icon",children:s(xd,{size:14})}):null})]},C.id))})]}),h("div",{className:"paragraph-detail-panel",children:[h("div",{className:"panel-header",children:[s("h2",{children:"\u6BB5\u843D\u8BE6\u60C5"}),m&&He(m)&&h("span",{className:"dirty-badge",children:[s(Dl,{size:12}),"\u672A\u4FDD\u5B58"]})]}),Pr?h("div",{className:"panel-content",children:[h("div",{className:"form-group",children:[s("label",{children:"\u6587\u672C\u5185\u5BB9"}),s("textarea",{value:v.content,onChange:C=>Dn("content",C.target.value),rows:5})]}),h("div",{className:"form-row",children:[h("div",{className:"form-group",children:[s("label",{children:"\u8BF4\u8BDD\u89D2\u8272"}),h("select",{value:v.speaker,onChange:C=>Dn("speaker",C.target.value),children:[s("option",{value:"",children:"\u65C1\u767D"}),i.map(C=>s("option",{value:C.name,children:C.name},C.id))]})]}),h("div",{className:"form-group",children:[s("label",{children:"\u97F3\u8272"}),h("select",{value:v.voiceId,onChange:C=>Dn("voiceId",C.target.value),children:[s("option",{value:"",children:"\u8BF7\u9009\u62E9\u97F3\u8272"}),u.map(C=>s("option",{value:C.id,children:C.name},C.id))]})]})]}),h("div",{className:"form-row",children:[h("div",{className:"form-group",children:[s("label",{children:"\u60C5\u611F"}),s("select",{value:v.tone,onChange:C=>Dn("tone",C.target.value),children:tm.map(C=>s("option",{value:C.value,children:C.label},C.value))})]}),h("div",{className:"form-group",children:[h("div",{className:"label-row",children:[s("label",{children:"\u8BED\u901F"}),s("span",{className:"value-badge",children:v.speed.toFixed(2)})]}),s("input",{type:"range",min:"0.5",max:"2.0",step:"0.05",value:v.speed,onChange:C=>Dn("speed",parseFloat(C.target.value))}),h("div",{className:"range-labels",children:[s("span",{children:"0.5x"}),s("span",{children:"1.0x"}),s("span",{children:"2.0x"})]})]})]}),h("div",{className:"action-buttons",children:[h("button",{className:"btn-generate",onClick:()=>Cd(Pr.id),children:[s(m0,{size:16}),"\u751F\u6210\u97F3\u9891"]}),h("button",{className:"btn-delete",onClick:()=>Ed(Pr.id),children:[s(qo,{size:16}),"\u5220\u9664"]})]}),s("div",{className:"save-bar",children:h("button",{className:"btn-secondary",onClick:wd,disabled:!He(Pr.id),children:[s(Wu,{size:16}),"\u5E94\u7528\u4FEE\u6539"]})})]}):h("div",{className:"empty-properties",children:[s(f0,{size:40}),s("p",{children:"\u9009\u62E9\u4E00\u4E2A\u6BB5\u843D\u6765\u7F16\u8F91\u5C5E\u6027"})]})]})]}),s("div",{className:"lower-section",children:h("div",{className:"timeline-panel",children:[s("div",{className:"panel-header",children:h("div",{className:"transport-controls",children:[s("button",{className:`play-btn ${E?"playing":""}`,onClick:Fd,children:E?s(c0,{size:20}):s(p0,{size:20})}),h("div",{className:"time-display",children:[Na(D)," / ",Na(d)]})]})}),h("div",{className:"timeline-container",ref:j,children:[s("div",{className:"timeline-ruler",children:Array.from({length:Math.ceil(d)+1}).map((C,b)=>s("div",{className:"ruler-mark",style:{left:`${b/d*100}%`},children:h("span",{className:"ruler-label",children:[b,"s"]})},b))}),s("div",{className:"timeline-track",children:Ze.map(C=>h("div",{className:`timeline-clip ${m===C.id?"selected":""} ${He(C.id)?"dirty":""}`,style:{left:`${C.start/d*100}%`,width:`${(C.end-C.start)/d*100}%`,backgroundColor:el(C.paragraph.speaker)},onClick:()=>zn(C.id),children:[h("div",{className:"clip-content",children:[h("div",{className:"clip-speaker",children:[s(vd,{size:14}),C.paragraph.speaker||"\u65C1\u767D"]}),h("div",{className:"clip-text",children:[C.paragraph.content.slice(0,40),C.paragraph.content.length>40?"...":""]})]}),He(C.id)&&s("div",{className:"clip-dirty-indicator",children:s(Dl,{size:10})}),C.paragraph.audioPath&&s("div",{className:"clip-indicator",children:s(s0,{size:12})})]},C.id))}),s("div",{className:"playhead",style:{left:`${D/d*100}%`}})]})]})})]}),Bt&&s("div",{className:"text-editor-modal",children:h("div",{className:"text-editor-content",children:[h("div",{className:"text-editor-header",children:[h("div",{className:"text-editor-title",children:[s(Pi,{size:20}),s("h2",{children:"\u7F16\u8F91\u7AE0\u8282\u6587\u672C"})]}),s("button",{className:"modal-close",onClick:()=>We(!1),disabled:ut,children:s(xr,{size:24})})]}),s("div",{className:"text-editor-body",children:s("textarea",{value:Qt,onChange:C=>Gt(C.target.value),placeholder:"\u8BF7\u8F93\u5165\u7AE0\u8282\u5185\u5BB9...",className:"chapter-textarea"})}),h("div",{className:"text-editor-footer",children:[s("button",{className:"btn-secondary",onClick:()=>{We(!1),n&&Gt(n.content||"")},disabled:ut,children:"\u53D6\u6D88"}),h("button",{className:"btn-primary",onClick:Xt,disabled:ut,children:[s(vr,{size:16}),ut?"\u4FDD\u5B58\u4E2D...":"\u4FDD\u5B58"]})]})]})}),s("style",{children:`
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
        }

        .editor-header {
          max-width: none;
          margin: 0;
          padding: 12px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
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

        .save-bar .btn-secondary {
          flex: 1;
        }

        .save-bar .btn-secondary:disabled {
          opacity: 0.5;
          cursor: not-allowed;
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
      `})]}):s("div",{className:"chapter-editor",children:h("div",{className:"error-container",children:[s("h2",{children:"\u7AE0\u8282\u4E0D\u5B58\u5728"}),h(Bo,{to:`/project/${e}`,className:"btn-primary",children:[s(bo,{size:16}),"\u8FD4\u56DE\u9879\u76EE"]})]})})};function rm(){return s(qh,{children:s("div",{className:"app",children:h(Gh,{children:[s(oo,{path:"/",element:s(V0,{})}),s(oo,{path:"/project/:id",element:s(K0,{})}),s(oo,{path:"/project/:projectId/chapter/:chapterId",element:s(nm,{})})]})})})}const om="Frontend",Jt={debug:console.debug.bind(console),info:console.info.bind(console),warn:console.warn.bind(console),error:console.error.bind(console),log:console.log.bind(console)};let Gu=!1;const lm=()=>typeof window.go<"u",In=(e,...t)=>{if(!!lm())try{const n=t.map(r=>{if(typeof r=="object")try{return JSON.stringify(r)}catch{return String(r)}return String(r)}).join(" ");Q.log(e,n,om)}catch(n){Jt.debug("Failed to send log to backend:",n)}},im=()=>{Gu||(Gu=!0,console.debug=(...e)=>{Jt.debug(...e),In("debug",...e)},console.info=(...e)=>{Jt.info(...e),In("info",...e)},console.warn=(...e)=>{Jt.warn(...e),In("warn",...e)},console.error=(...e)=>{Jt.error(...e),In("error",...e)},console.log=(...e)=>{Jt.log(...e),In("info",...e)},window.addEventListener("unhandledrejection",e=>{console.error("Unhandled Promise rejection:",e.reason)}),window.addEventListener("error",e=>{console.error("Uncaught error:",e.message,"at",e.filename,":",e.lineno,":",e.colno)}),console.info("\u65E5\u5FD7\u7CFB\u7EDF\u521D\u59CB\u5316\u5B8C\u6210"))};im();const am=document.getElementById("root"),um=od(am);um.render(s(rs.StrictMode,{children:s(rm,{})}));
