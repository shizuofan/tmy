function jd(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function _d(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var S={exports:{}},T={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wr=Symbol.for("react.element"),Ld=Symbol.for("react.portal"),bd=Symbol.for("react.fragment"),Td=Symbol.for("react.strict_mode"),Rd=Symbol.for("react.profiler"),Md=Symbol.for("react.provider"),Id=Symbol.for("react.context"),Od=Symbol.for("react.forward_ref"),Ud=Symbol.for("react.suspense"),$d=Symbol.for("react.memo"),Vd=Symbol.for("react.lazy"),Da=Symbol.iterator;function Wd(e){return e===null||typeof e!="object"?null:(e=Da&&e[Da]||e["@@iterator"],typeof e=="function"?e:null)}var Xu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zu=Object.assign,Ju={};function Fn(e,t,n){this.props=e,this.context=t,this.refs=Ju,this.updater=n||Xu}Fn.prototype.isReactComponent={};Fn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Fn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function qu(){}qu.prototype=Fn.prototype;function _i(e,t,n){this.props=e,this.context=t,this.refs=Ju,this.updater=n||Xu}var Li=_i.prototype=new qu;Li.constructor=_i;Zu(Li,Fn.prototype);Li.isPureReactComponent=!0;var Ba=Array.isArray,es=Object.prototype.hasOwnProperty,bi={current:null},ts={key:!0,ref:!0,__self:!0,__source:!0};function ns(e,t,n){var r,o={},l=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)es.call(t,r)&&!ts.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+2];o.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:wr,type:e,key:l,ref:i,props:o,_owner:bi.current}}function Kd(e,t){return{$$typeof:wr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ti(e){return typeof e=="object"&&e!==null&&e.$$typeof===wr}function Hd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ja=/\/+/g;function ol(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Hd(""+e.key):t.toString(36)}function Kr(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case wr:case Ld:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+ol(i,0):r,Ba(o)?(n="",e!=null&&(n=e.replace(ja,"$&/")+"/"),Kr(o,t,n,"",function(s){return s})):o!=null&&(Ti(o)&&(o=Kd(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(ja,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",Ba(e))for(var a=0;a<e.length;a++){l=e[a];var u=r+ol(l,a);i+=Kr(l,t,n,u,o)}else if(u=Wd(e),typeof u=="function")for(e=u.call(e),a=0;!(l=e.next()).done;)l=l.value,u=r+ol(l,a++),i+=Kr(l,t,n,u,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Ar(e,t,n){if(e==null)return e;var r=[],o=0;return Kr(e,r,"","",function(l){return t.call(n,l,o++)}),r}function Qd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ye={current:null},Hr={transition:null},Gd={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:Hr,ReactCurrentOwner:bi};function rs(){throw Error("act(...) is not supported in production builds of React.")}T.Children={map:Ar,forEach:function(e,t,n){Ar(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ar(e,function(){t++}),t},toArray:function(e){return Ar(e,function(t){return t})||[]},only:function(e){if(!Ti(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};T.Component=Fn;T.Fragment=bd;T.Profiler=Rd;T.PureComponent=_i;T.StrictMode=Td;T.Suspense=Ud;T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gd;T.act=rs;T.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Zu({},e.props),o=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=bi.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)es.call(t,u)&&!ts.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var s=0;s<u;s++)a[s]=arguments[s+2];r.children=a}return{$$typeof:wr,type:e.type,key:o,ref:l,props:r,_owner:i}};T.createContext=function(e){return e={$$typeof:Id,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Md,_context:e},e.Consumer=e};T.createElement=ns;T.createFactory=function(e){var t=ns.bind(null,e);return t.type=e,t};T.createRef=function(){return{current:null}};T.forwardRef=function(e){return{$$typeof:Od,render:e}};T.isValidElement=Ti;T.lazy=function(e){return{$$typeof:Vd,_payload:{_status:-1,_result:e},_init:Qd}};T.memo=function(e,t){return{$$typeof:$d,type:e,compare:t===void 0?null:t}};T.startTransition=function(e){var t=Hr.transition;Hr.transition={};try{e()}finally{Hr.transition=t}};T.unstable_act=rs;T.useCallback=function(e,t){return ye.current.useCallback(e,t)};T.useContext=function(e){return ye.current.useContext(e)};T.useDebugValue=function(){};T.useDeferredValue=function(e){return ye.current.useDeferredValue(e)};T.useEffect=function(e,t){return ye.current.useEffect(e,t)};T.useId=function(){return ye.current.useId()};T.useImperativeHandle=function(e,t,n){return ye.current.useImperativeHandle(e,t,n)};T.useInsertionEffect=function(e,t){return ye.current.useInsertionEffect(e,t)};T.useLayoutEffect=function(e,t){return ye.current.useLayoutEffect(e,t)};T.useMemo=function(e,t){return ye.current.useMemo(e,t)};T.useReducer=function(e,t,n){return ye.current.useReducer(e,t,n)};T.useRef=function(e){return ye.current.useRef(e)};T.useState=function(e){return ye.current.useState(e)};T.useSyncExternalStore=function(e,t,n){return ye.current.useSyncExternalStore(e,t,n)};T.useTransition=function(){return ye.current.useTransition()};T.version="18.3.1";(function(e){e.exports=T})(S);const os=_d(S.exports),bl=jd({__proto__:null,default:os},[S.exports]);var ls={exports:{}},Ae={},is={exports:{}},as={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,_){var L=P.length;P.push(_);e:for(;0<L;){var I=L-1>>>1,X=P[I];if(0<o(X,_))P[I]=_,P[L]=X,L=I;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var _=P[0],L=P.pop();if(L!==_){P[0]=L;e:for(var I=0,X=P.length,Bt=X>>>1;I<Bt;){var Te=2*(I+1)-1,zn=P[Te],Xe=Te+1,Xt=P[Xe];if(0>o(zn,L))Xe<X&&0>o(Xt,zn)?(P[I]=Xt,P[Xe]=L,I=Xe):(P[I]=zn,P[Te]=L,I=Te);else if(Xe<X&&0>o(Xt,L))P[I]=Xt,P[Xe]=L,I=Xe;else break e}}return _}function o(P,_){var L=P.sortIndex-_.sortIndex;return L!==0?L:P.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var u=[],s=[],m=1,g=null,h=3,x=!1,E=!1,k=!1,B=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(P){for(var _=n(s);_!==null;){if(_.callback===null)r(s);else if(_.startTime<=P)r(s),_.sortIndex=_.expirationTime,t(u,_);else break;_=n(s)}}function v(P){if(k=!1,f(P),!E)if(n(u)!==null)E=!0,at(F);else{var _=n(s);_!==null&&Yt(v,_.startTime-P)}}function F(P,_){E=!1,k&&(k=!1,p(j),j=-1),x=!0;var L=h;try{for(f(_),g=n(u);g!==null&&(!(g.expirationTime>_)||P&&!oe());){var I=g.callback;if(typeof I=="function"){g.callback=null,h=g.priorityLevel;var X=I(g.expirationTime<=_);_=e.unstable_now(),typeof X=="function"?g.callback=X:g===n(u)&&r(u),f(_)}else r(u);g=n(u)}if(g!==null)var Bt=!0;else{var Te=n(s);Te!==null&&Yt(v,Te.startTime-_),Bt=!1}return Bt}finally{g=null,h=L,x=!1}}var N=!1,A=null,j=-1,W=5,b=-1;function oe(){return!(e.unstable_now()-b<W)}function Dt(){if(A!==null){var P=e.unstable_now();b=P;var _=!0;try{_=A(!0,P)}finally{_?We():(N=!1,A=null)}}else N=!1}var We;if(typeof d=="function")We=function(){d(Dt)};else if(typeof MessageChannel<"u"){var Qt=new MessageChannel,Gt=Qt.port2;Qt.port1.onmessage=Dt,We=function(){Gt.postMessage(null)}}else We=function(){B(Dt,0)};function at(P){A=P,N||(N=!0,We())}function Yt(P,_){j=B(function(){P(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){E||x||(E=!0,at(F))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(P){switch(h){case 1:case 2:case 3:var _=3;break;default:_=h}var L=h;h=_;try{return P()}finally{h=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,_){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var L=h;h=P;try{return _()}finally{h=L}},e.unstable_scheduleCallback=function(P,_,L){var I=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?I+L:I):L=I,P){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=L+X,P={id:m++,callback:_,priorityLevel:P,startTime:L,expirationTime:X,sortIndex:-1},L>I?(P.sortIndex=L,t(s,P),n(u)===null&&P===n(s)&&(k?(p(j),j=-1):k=!0,Yt(v,L-I))):(P.sortIndex=X,t(u,P),E||x||(E=!0,at(F))),P},e.unstable_shouldYield=oe,e.unstable_wrapCallback=function(P){var _=h;return function(){var L=h;h=_;try{return P.apply(this,arguments)}finally{h=L}}}})(as);(function(e){e.exports=as})(is);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yd=S.exports,Pe=is.exports;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var us=new Set,tr={};function Wt(e,t){vn(e,t),vn(e+"Capture",t)}function vn(e,t){for(tr[e]=t,e=0;e<t.length;e++)us.add(t[e])}var nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tl=Object.prototype.hasOwnProperty,Xd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_a={},La={};function Zd(e){return Tl.call(La,e)?!0:Tl.call(_a,e)?!1:Xd.test(e)?La[e]=!0:(_a[e]=!0,!1)}function Jd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function qd(e,t,n,r){if(t===null||typeof t>"u"||Jd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ve(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){se[e]=new ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];se[t]=new ve(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){se[e]=new ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){se[e]=new ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){se[e]=new ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){se[e]=new ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){se[e]=new ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){se[e]=new ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){se[e]=new ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ri=/[\-:]([a-z])/g;function Mi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ri,Mi);se[t]=new ve(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ri,Mi);se[t]=new ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ri,Mi);se[t]=new ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){se[e]=new ve(e,1,!1,e.toLowerCase(),null,!1,!1)});se.xlinkHref=new ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){se[e]=new ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ii(e,t,n,r){var o=se.hasOwnProperty(t)?se[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(qd(t,n,o,r)&&(n=null),r||o===null?Zd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var it=Yd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,zr=Symbol.for("react.element"),qt=Symbol.for("react.portal"),en=Symbol.for("react.fragment"),Oi=Symbol.for("react.strict_mode"),Rl=Symbol.for("react.profiler"),ss=Symbol.for("react.provider"),cs=Symbol.for("react.context"),Ui=Symbol.for("react.forward_ref"),Ml=Symbol.for("react.suspense"),Il=Symbol.for("react.suspense_list"),$i=Symbol.for("react.memo"),st=Symbol.for("react.lazy"),ds=Symbol.for("react.offscreen"),ba=Symbol.iterator;function _n(e){return e===null||typeof e!="object"?null:(e=ba&&e[ba]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,ll;function $n(e){if(ll===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ll=t&&t[1]||""}return`
`+ll+e}var il=!1;function al(e,t){if(!e||il)return"";il=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(s){var r=s}Reflect.construct(e,[],t)}else{try{t.call()}catch(s){r=s}e.call(t.prototype)}else{try{throw Error()}catch(s){r=s}e()}}catch(s){if(s&&r&&typeof s.stack=="string"){for(var o=s.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,a=l.length-1;1<=i&&0<=a&&o[i]!==l[a];)a--;for(;1<=i&&0<=a;i--,a--)if(o[i]!==l[a]){if(i!==1||a!==1)do if(i--,a--,0>a||o[i]!==l[a]){var u=`
`+o[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=a);break}}}finally{il=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?$n(e):""}function ep(e){switch(e.tag){case 5:return $n(e.type);case 16:return $n("Lazy");case 13:return $n("Suspense");case 19:return $n("SuspenseList");case 0:case 2:case 15:return e=al(e.type,!1),e;case 11:return e=al(e.type.render,!1),e;case 1:return e=al(e.type,!0),e;default:return""}}function Ol(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case en:return"Fragment";case qt:return"Portal";case Rl:return"Profiler";case Oi:return"StrictMode";case Ml:return"Suspense";case Il:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case cs:return(e.displayName||"Context")+".Consumer";case ss:return(e._context.displayName||"Context")+".Provider";case Ui:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $i:return t=e.displayName||null,t!==null?t:Ol(e.type)||"Memo";case st:t=e._payload,e=e._init;try{return Ol(e(t))}catch{}}return null}function tp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ol(t);case 8:return t===Oi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ft(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ps(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function np(e){var t=ps(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Dr(e){e._valueTracker||(e._valueTracker=np(e))}function fs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ps(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function oo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ul(e,t){var n=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function Ta(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ft(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function hs(e,t){t=t.checked,t!=null&&Ii(e,"checked",t,!1)}function $l(e,t){hs(e,t);var n=Ft(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Vl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Vl(e,t.type,Ft(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ra(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Vl(e,t,n){(t!=="number"||oo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Vn=Array.isArray;function pn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ft(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Wl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ma(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(Vn(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ft(n)}}function ms(e,t){var n=Ft(t.value),r=Ft(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ia(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function gs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Kl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?gs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Br,ys=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Br=Br||document.createElement("div"),Br.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Br.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function nr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Hn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rp=["Webkit","ms","Moz","O"];Object.keys(Hn).forEach(function(e){rp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Hn[t]=Hn[e]})});function vs(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Hn.hasOwnProperty(e)&&Hn[e]?(""+t).trim():t+"px"}function xs(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=vs(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var op=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hl(e,t){if(t){if(op[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function Ql(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gl=null;function Vi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Yl=null,fn=null,hn=null;function Oa(e){if(e=Cr(e)){if(typeof Yl!="function")throw Error(C(280));var t=e.stateNode;t&&(t=Mo(t),Yl(e.stateNode,e.type,t))}}function ws(e){fn?hn?hn.push(e):hn=[e]:fn=e}function ks(){if(fn){var e=fn,t=hn;if(hn=fn=null,Oa(e),t)for(e=0;e<t.length;e++)Oa(t[e])}}function Es(e,t){return e(t)}function Cs(){}var ul=!1;function Ss(e,t,n){if(ul)return e(t,n);ul=!0;try{return Es(e,t,n)}finally{ul=!1,(fn!==null||hn!==null)&&(Cs(),ks())}}function rr(e,t){var n=e.stateNode;if(n===null)return null;var r=Mo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var Xl=!1;if(nt)try{var Ln={};Object.defineProperty(Ln,"passive",{get:function(){Xl=!0}}),window.addEventListener("test",Ln,Ln),window.removeEventListener("test",Ln,Ln)}catch{Xl=!1}function lp(e,t,n,r,o,l,i,a,u){var s=Array.prototype.slice.call(arguments,3);try{t.apply(n,s)}catch(m){this.onError(m)}}var Qn=!1,lo=null,io=!1,Zl=null,ip={onError:function(e){Qn=!0,lo=e}};function ap(e,t,n,r,o,l,i,a,u){Qn=!1,lo=null,lp.apply(ip,arguments)}function up(e,t,n,r,o,l,i,a,u){if(ap.apply(this,arguments),Qn){if(Qn){var s=lo;Qn=!1,lo=null}else throw Error(C(198));io||(io=!0,Zl=s)}}function Kt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Fs(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ua(e){if(Kt(e)!==e)throw Error(C(188))}function sp(e){var t=e.alternate;if(!t){if(t=Kt(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return Ua(o),e;if(l===r)return Ua(o),t;l=l.sibling}throw Error(C(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,a=o.child;a;){if(a===n){i=!0,n=o,r=l;break}if(a===r){i=!0,r=o,n=l;break}a=a.sibling}if(!i){for(a=l.child;a;){if(a===n){i=!0,n=l,r=o;break}if(a===r){i=!0,r=l,n=o;break}a=a.sibling}if(!i)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function Ns(e){return e=sp(e),e!==null?Ps(e):null}function Ps(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ps(e);if(t!==null)return t;e=e.sibling}return null}var As=Pe.unstable_scheduleCallback,$a=Pe.unstable_cancelCallback,cp=Pe.unstable_shouldYield,dp=Pe.unstable_requestPaint,J=Pe.unstable_now,pp=Pe.unstable_getCurrentPriorityLevel,Wi=Pe.unstable_ImmediatePriority,zs=Pe.unstable_UserBlockingPriority,ao=Pe.unstable_NormalPriority,fp=Pe.unstable_LowPriority,Ds=Pe.unstable_IdlePriority,Lo=null,Ge=null;function hp(e){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(Lo,e,void 0,(e.current.flags&128)===128)}catch{}}var Ue=Math.clz32?Math.clz32:yp,mp=Math.log,gp=Math.LN2;function yp(e){return e>>>=0,e===0?32:31-(mp(e)/gp|0)|0}var jr=64,_r=4194304;function Wn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function uo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~o;a!==0?r=Wn(a):(l&=i,l!==0&&(r=Wn(l)))}else i=n&~o,i!==0?r=Wn(i):l!==0&&(r=Wn(l));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ue(t),o=1<<n,r|=e[n],t&=~o;return r}function vp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-Ue(l),a=1<<i,u=o[i];u===-1?((a&n)===0||(a&r)!==0)&&(o[i]=vp(a,t)):u<=t&&(e.expiredLanes|=a),l&=~a}}function Jl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Bs(){var e=jr;return jr<<=1,(jr&4194240)===0&&(jr=64),e}function sl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function kr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ue(t),e[t]=n}function wp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Ue(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function Ki(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ue(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var M=0;function js(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var _s,Hi,Ls,bs,Ts,ql=!1,Lr=[],gt=null,yt=null,vt=null,or=new Map,lr=new Map,dt=[],kp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Va(e,t){switch(e){case"focusin":case"focusout":gt=null;break;case"dragenter":case"dragleave":yt=null;break;case"mouseover":case"mouseout":vt=null;break;case"pointerover":case"pointerout":or.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":lr.delete(t.pointerId)}}function bn(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=Cr(t),t!==null&&Hi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Ep(e,t,n,r,o){switch(t){case"focusin":return gt=bn(gt,e,t,n,r,o),!0;case"dragenter":return yt=bn(yt,e,t,n,r,o),!0;case"mouseover":return vt=bn(vt,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return or.set(l,bn(or.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,lr.set(l,bn(lr.get(l)||null,e,t,n,r,o)),!0}return!1}function Rs(e){var t=Lt(e.target);if(t!==null){var n=Kt(t);if(n!==null){if(t=n.tag,t===13){if(t=Fs(n),t!==null){e.blockedOn=t,Ts(e.priority,function(){Ls(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ei(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Gl=r,n.target.dispatchEvent(r),Gl=null}else return t=Cr(n),t!==null&&Hi(t),e.blockedOn=n,!1;t.shift()}return!0}function Wa(e,t,n){Qr(e)&&n.delete(t)}function Cp(){ql=!1,gt!==null&&Qr(gt)&&(gt=null),yt!==null&&Qr(yt)&&(yt=null),vt!==null&&Qr(vt)&&(vt=null),or.forEach(Wa),lr.forEach(Wa)}function Tn(e,t){e.blockedOn===t&&(e.blockedOn=null,ql||(ql=!0,Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority,Cp)))}function ir(e){function t(o){return Tn(o,e)}if(0<Lr.length){Tn(Lr[0],e);for(var n=1;n<Lr.length;n++){var r=Lr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(gt!==null&&Tn(gt,e),yt!==null&&Tn(yt,e),vt!==null&&Tn(vt,e),or.forEach(t),lr.forEach(t),n=0;n<dt.length;n++)r=dt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<dt.length&&(n=dt[0],n.blockedOn===null);)Rs(n),n.blockedOn===null&&dt.shift()}var mn=it.ReactCurrentBatchConfig,so=!0;function Sp(e,t,n,r){var o=M,l=mn.transition;mn.transition=null;try{M=1,Qi(e,t,n,r)}finally{M=o,mn.transition=l}}function Fp(e,t,n,r){var o=M,l=mn.transition;mn.transition=null;try{M=4,Qi(e,t,n,r)}finally{M=o,mn.transition=l}}function Qi(e,t,n,r){if(so){var o=ei(e,t,n,r);if(o===null)xl(e,t,r,co,n),Va(e,r);else if(Ep(o,e,t,n,r))r.stopPropagation();else if(Va(e,r),t&4&&-1<kp.indexOf(e)){for(;o!==null;){var l=Cr(o);if(l!==null&&_s(l),l=ei(e,t,n,r),l===null&&xl(e,t,r,co,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else xl(e,t,r,null,n)}}var co=null;function ei(e,t,n,r){if(co=null,e=Vi(r),e=Lt(e),e!==null)if(t=Kt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Fs(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return co=e,null}function Ms(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pp()){case Wi:return 1;case zs:return 4;case ao:case fp:return 16;case Ds:return 536870912;default:return 16}default:return 16}}var ft=null,Gi=null,Gr=null;function Is(){if(Gr)return Gr;var e,t=Gi,n=t.length,r,o="value"in ft?ft.value:ft.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return Gr=o.slice(e,1<r?1-r:void 0)}function Yr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function br(){return!0}function Ka(){return!1}function ze(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?br:Ka,this.isPropagationStopped=Ka,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=br)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=br)},persist:function(){},isPersistent:br}),t}var Nn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yi=ze(Nn),Er=Y({},Nn,{view:0,detail:0}),Np=ze(Er),cl,dl,Rn,bo=Y({},Er,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Rn&&(Rn&&e.type==="mousemove"?(cl=e.screenX-Rn.screenX,dl=e.screenY-Rn.screenY):dl=cl=0,Rn=e),cl)},movementY:function(e){return"movementY"in e?e.movementY:dl}}),Ha=ze(bo),Pp=Y({},bo,{dataTransfer:0}),Ap=ze(Pp),zp=Y({},Er,{relatedTarget:0}),pl=ze(zp),Dp=Y({},Nn,{animationName:0,elapsedTime:0,pseudoElement:0}),Bp=ze(Dp),jp=Y({},Nn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_p=ze(jp),Lp=Y({},Nn,{data:0}),Qa=ze(Lp),bp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Rp[e])?!!t[e]:!1}function Xi(){return Mp}var Ip=Y({},Er,{key:function(e){if(e.key){var t=bp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Yr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Tp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xi,charCode:function(e){return e.type==="keypress"?Yr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Op=ze(Ip),Up=Y({},bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ga=ze(Up),$p=Y({},Er,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xi}),Vp=ze($p),Wp=Y({},Nn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kp=ze(Wp),Hp=Y({},bo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Qp=ze(Hp),Gp=[9,13,27,32],Zi=nt&&"CompositionEvent"in window,Gn=null;nt&&"documentMode"in document&&(Gn=document.documentMode);var Yp=nt&&"TextEvent"in window&&!Gn,Os=nt&&(!Zi||Gn&&8<Gn&&11>=Gn),Ya=String.fromCharCode(32),Xa=!1;function Us(e,t){switch(e){case"keyup":return Gp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $s(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var tn=!1;function Xp(e,t){switch(e){case"compositionend":return $s(t);case"keypress":return t.which!==32?null:(Xa=!0,Ya);case"textInput":return e=t.data,e===Ya&&Xa?null:e;default:return null}}function Zp(e,t){if(tn)return e==="compositionend"||!Zi&&Us(e,t)?(e=Is(),Gr=Gi=ft=null,tn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Os&&t.locale!=="ko"?null:t.data;default:return null}}var Jp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Za(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Jp[e.type]:t==="textarea"}function Vs(e,t,n,r){ws(r),t=po(t,"onChange"),0<t.length&&(n=new Yi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Yn=null,ar=null;function qp(e){ec(e,0)}function To(e){var t=on(e);if(fs(t))return e}function ef(e,t){if(e==="change")return t}var Ws=!1;if(nt){var fl;if(nt){var hl="oninput"in document;if(!hl){var Ja=document.createElement("div");Ja.setAttribute("oninput","return;"),hl=typeof Ja.oninput=="function"}fl=hl}else fl=!1;Ws=fl&&(!document.documentMode||9<document.documentMode)}function qa(){Yn&&(Yn.detachEvent("onpropertychange",Ks),ar=Yn=null)}function Ks(e){if(e.propertyName==="value"&&To(ar)){var t=[];Vs(t,ar,e,Vi(e)),Ss(qp,t)}}function tf(e,t,n){e==="focusin"?(qa(),Yn=t,ar=n,Yn.attachEvent("onpropertychange",Ks)):e==="focusout"&&qa()}function nf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return To(ar)}function rf(e,t){if(e==="click")return To(t)}function of(e,t){if(e==="input"||e==="change")return To(t)}function lf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ve=typeof Object.is=="function"?Object.is:lf;function ur(e,t){if(Ve(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Tl.call(t,o)||!Ve(e[o],t[o]))return!1}return!0}function eu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function tu(e,t){var n=eu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=eu(n)}}function Hs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Qs(){for(var e=window,t=oo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=oo(e.document)}return t}function Ji(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function af(e){var t=Qs(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Hs(n.ownerDocument.documentElement,n)){if(r!==null&&Ji(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=tu(n,l);var i=tu(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var uf=nt&&"documentMode"in document&&11>=document.documentMode,nn=null,ti=null,Xn=null,ni=!1;function nu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ni||nn==null||nn!==oo(r)||(r=nn,"selectionStart"in r&&Ji(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xn&&ur(Xn,r)||(Xn=r,r=po(ti,"onSelect"),0<r.length&&(t=new Yi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=nn)))}function Tr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var rn={animationend:Tr("Animation","AnimationEnd"),animationiteration:Tr("Animation","AnimationIteration"),animationstart:Tr("Animation","AnimationStart"),transitionend:Tr("Transition","TransitionEnd")},ml={},Gs={};nt&&(Gs=document.createElement("div").style,"AnimationEvent"in window||(delete rn.animationend.animation,delete rn.animationiteration.animation,delete rn.animationstart.animation),"TransitionEvent"in window||delete rn.transitionend.transition);function Ro(e){if(ml[e])return ml[e];if(!rn[e])return e;var t=rn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gs)return ml[e]=t[n];return e}var Ys=Ro("animationend"),Xs=Ro("animationiteration"),Zs=Ro("animationstart"),Js=Ro("transitionend"),qs=new Map,ru="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pt(e,t){qs.set(e,t),Wt(t,[e])}for(var gl=0;gl<ru.length;gl++){var yl=ru[gl],sf=yl.toLowerCase(),cf=yl[0].toUpperCase()+yl.slice(1);Pt(sf,"on"+cf)}Pt(Ys,"onAnimationEnd");Pt(Xs,"onAnimationIteration");Pt(Zs,"onAnimationStart");Pt("dblclick","onDoubleClick");Pt("focusin","onFocus");Pt("focusout","onBlur");Pt(Js,"onTransitionEnd");vn("onMouseEnter",["mouseout","mouseover"]);vn("onMouseLeave",["mouseout","mouseover"]);vn("onPointerEnter",["pointerout","pointerover"]);vn("onPointerLeave",["pointerout","pointerover"]);Wt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Kn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),df=new Set("cancel close invalid load scroll toggle".split(" ").concat(Kn));function ou(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,up(r,t,void 0,e),e.currentTarget=null}function ec(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var a=r[i],u=a.instance,s=a.currentTarget;if(a=a.listener,u!==l&&o.isPropagationStopped())break e;ou(o,a,s),l=u}else for(i=0;i<r.length;i++){if(a=r[i],u=a.instance,s=a.currentTarget,a=a.listener,u!==l&&o.isPropagationStopped())break e;ou(o,a,s),l=u}}}if(io)throw e=Zl,io=!1,Zl=null,e}function $(e,t){var n=t[ai];n===void 0&&(n=t[ai]=new Set);var r=e+"__bubble";n.has(r)||(tc(t,e,2,!1),n.add(r))}function vl(e,t,n){var r=0;t&&(r|=4),tc(n,e,r,t)}var Rr="_reactListening"+Math.random().toString(36).slice(2);function sr(e){if(!e[Rr]){e[Rr]=!0,us.forEach(function(n){n!=="selectionchange"&&(df.has(n)||vl(n,!1,e),vl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Rr]||(t[Rr]=!0,vl("selectionchange",!1,t))}}function tc(e,t,n,r){switch(Ms(t)){case 1:var o=Sp;break;case 4:o=Fp;break;default:o=Qi}n=o.bind(null,t,n,e),o=void 0,!Xl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function xl(e,t,n,r,o){var l=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var u=i.tag;if((u===3||u===4)&&(u=i.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;i=i.return}for(;a!==null;){if(i=Lt(a),i===null)return;if(u=i.tag,u===5||u===6){r=l=i;continue e}a=a.parentNode}}r=r.return}Ss(function(){var s=l,m=Vi(n),g=[];e:{var h=qs.get(e);if(h!==void 0){var x=Yi,E=e;switch(e){case"keypress":if(Yr(n)===0)break e;case"keydown":case"keyup":x=Op;break;case"focusin":E="focus",x=pl;break;case"focusout":E="blur",x=pl;break;case"beforeblur":case"afterblur":x=pl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Ha;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Ap;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Vp;break;case Ys:case Xs:case Zs:x=Bp;break;case Js:x=Kp;break;case"scroll":x=Np;break;case"wheel":x=Qp;break;case"copy":case"cut":case"paste":x=_p;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Ga}var k=(t&4)!==0,B=!k&&e==="scroll",p=k?h!==null?h+"Capture":null:h;k=[];for(var d=s,f;d!==null;){f=d;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,p!==null&&(v=rr(d,p),v!=null&&k.push(cr(d,v,f)))),B)break;d=d.return}0<k.length&&(h=new x(h,E,null,n,m),g.push({event:h,listeners:k}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",h&&n!==Gl&&(E=n.relatedTarget||n.fromElement)&&(Lt(E)||E[rt]))break e;if((x||h)&&(h=m.window===m?m:(h=m.ownerDocument)?h.defaultView||h.parentWindow:window,x?(E=n.relatedTarget||n.toElement,x=s,E=E?Lt(E):null,E!==null&&(B=Kt(E),E!==B||E.tag!==5&&E.tag!==6)&&(E=null)):(x=null,E=s),x!==E)){if(k=Ha,v="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(k=Ga,v="onPointerLeave",p="onPointerEnter",d="pointer"),B=x==null?h:on(x),f=E==null?h:on(E),h=new k(v,d+"leave",x,n,m),h.target=B,h.relatedTarget=f,v=null,Lt(m)===s&&(k=new k(p,d+"enter",E,n,m),k.target=f,k.relatedTarget=B,v=k),B=v,x&&E)t:{for(k=x,p=E,d=0,f=k;f;f=Zt(f))d++;for(f=0,v=p;v;v=Zt(v))f++;for(;0<d-f;)k=Zt(k),d--;for(;0<f-d;)p=Zt(p),f--;for(;d--;){if(k===p||p!==null&&k===p.alternate)break t;k=Zt(k),p=Zt(p)}k=null}else k=null;x!==null&&lu(g,h,x,k,!1),E!==null&&B!==null&&lu(g,B,E,k,!0)}}e:{if(h=s?on(s):window,x=h.nodeName&&h.nodeName.toLowerCase(),x==="select"||x==="input"&&h.type==="file")var F=ef;else if(Za(h))if(Ws)F=of;else{F=nf;var N=tf}else(x=h.nodeName)&&x.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(F=rf);if(F&&(F=F(e,s))){Vs(g,F,n,m);break e}N&&N(e,h,s),e==="focusout"&&(N=h._wrapperState)&&N.controlled&&h.type==="number"&&Vl(h,"number",h.value)}switch(N=s?on(s):window,e){case"focusin":(Za(N)||N.contentEditable==="true")&&(nn=N,ti=s,Xn=null);break;case"focusout":Xn=ti=nn=null;break;case"mousedown":ni=!0;break;case"contextmenu":case"mouseup":case"dragend":ni=!1,nu(g,n,m);break;case"selectionchange":if(uf)break;case"keydown":case"keyup":nu(g,n,m)}var A;if(Zi)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else tn?Us(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(Os&&n.locale!=="ko"&&(tn||j!=="onCompositionStart"?j==="onCompositionEnd"&&tn&&(A=Is()):(ft=m,Gi="value"in ft?ft.value:ft.textContent,tn=!0)),N=po(s,j),0<N.length&&(j=new Qa(j,e,null,n,m),g.push({event:j,listeners:N}),A?j.data=A:(A=$s(n),A!==null&&(j.data=A)))),(A=Yp?Xp(e,n):Zp(e,n))&&(s=po(s,"onBeforeInput"),0<s.length&&(m=new Qa("onBeforeInput","beforeinput",null,n,m),g.push({event:m,listeners:s}),m.data=A))}ec(g,t)})}function cr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function po(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=rr(e,n),l!=null&&r.unshift(cr(e,l,o)),l=rr(e,t),l!=null&&r.push(cr(e,l,o))),e=e.return}return r}function Zt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function lu(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var a=n,u=a.alternate,s=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&s!==null&&(a=s,o?(u=rr(n,l),u!=null&&i.unshift(cr(n,u,a))):o||(u=rr(n,l),u!=null&&i.push(cr(n,u,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var pf=/\r\n?/g,ff=/\u0000|\uFFFD/g;function iu(e){return(typeof e=="string"?e:""+e).replace(pf,`
`).replace(ff,"")}function Mr(e,t,n){if(t=iu(t),iu(e)!==t&&n)throw Error(C(425))}function fo(){}var ri=null,oi=null;function li(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ii=typeof setTimeout=="function"?setTimeout:void 0,hf=typeof clearTimeout=="function"?clearTimeout:void 0,au=typeof Promise=="function"?Promise:void 0,mf=typeof queueMicrotask=="function"?queueMicrotask:typeof au<"u"?function(e){return au.resolve(null).then(e).catch(gf)}:ii;function gf(e){setTimeout(function(){throw e})}function wl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),ir(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);ir(t)}function xt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function uu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Pn=Math.random().toString(36).slice(2),Qe="__reactFiber$"+Pn,dr="__reactProps$"+Pn,rt="__reactContainer$"+Pn,ai="__reactEvents$"+Pn,yf="__reactListeners$"+Pn,vf="__reactHandles$"+Pn;function Lt(e){var t=e[Qe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[rt]||n[Qe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=uu(e);e!==null;){if(n=e[Qe])return n;e=uu(e)}return t}e=n,n=e.parentNode}return null}function Cr(e){return e=e[Qe]||e[rt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function on(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Mo(e){return e[dr]||null}var ui=[],ln=-1;function At(e){return{current:e}}function V(e){0>ln||(e.current=ui[ln],ui[ln]=null,ln--)}function O(e,t){ln++,ui[ln]=e.current,e.current=t}var Nt={},he=At(Nt),ke=At(!1),It=Nt;function xn(e,t){var n=e.type.contextTypes;if(!n)return Nt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ee(e){return e=e.childContextTypes,e!=null}function ho(){V(ke),V(he)}function su(e,t,n){if(he.current!==Nt)throw Error(C(168));O(he,t),O(ke,n)}function nc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(C(108,tp(e)||"Unknown",o));return Y({},n,r)}function mo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Nt,It=he.current,O(he,e),O(ke,ke.current),!0}function cu(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=nc(e,t,It),r.__reactInternalMemoizedMergedChildContext=e,V(ke),V(he),O(he,e)):V(ke),O(ke,n)}var Je=null,Io=!1,kl=!1;function rc(e){Je===null?Je=[e]:Je.push(e)}function xf(e){Io=!0,rc(e)}function zt(){if(!kl&&Je!==null){kl=!0;var e=0,t=M;try{var n=Je;for(M=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Je=null,Io=!1}catch(o){throw Je!==null&&(Je=Je.slice(e+1)),As(Wi,zt),o}finally{M=t,kl=!1}}return null}var an=[],un=0,go=null,yo=0,De=[],Be=0,Ot=null,qe=1,et="";function jt(e,t){an[un++]=yo,an[un++]=go,go=e,yo=t}function oc(e,t,n){De[Be++]=qe,De[Be++]=et,De[Be++]=Ot,Ot=e;var r=qe;e=et;var o=32-Ue(r)-1;r&=~(1<<o),n+=1;var l=32-Ue(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,qe=1<<32-Ue(t)+o|n<<o|r,et=l+e}else qe=1<<l|n<<o|r,et=e}function qi(e){e.return!==null&&(jt(e,1),oc(e,1,0))}function ea(e){for(;e===go;)go=an[--un],an[un]=null,yo=an[--un],an[un]=null;for(;e===Ot;)Ot=De[--Be],De[Be]=null,et=De[--Be],De[Be]=null,qe=De[--Be],De[Be]=null}var Ne=null,Fe=null,H=!1,Oe=null;function lc(e,t){var n=je(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function du(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ne=e,Fe=xt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ne=e,Fe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ot!==null?{id:qe,overflow:et}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=je(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ne=e,Fe=null,!0):!1;default:return!1}}function si(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ci(e){if(H){var t=Fe;if(t){var n=t;if(!du(e,t)){if(si(e))throw Error(C(418));t=xt(n.nextSibling);var r=Ne;t&&du(e,t)?lc(r,n):(e.flags=e.flags&-4097|2,H=!1,Ne=e)}}else{if(si(e))throw Error(C(418));e.flags=e.flags&-4097|2,H=!1,Ne=e}}}function pu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ne=e}function Ir(e){if(e!==Ne)return!1;if(!H)return pu(e),H=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!li(e.type,e.memoizedProps)),t&&(t=Fe)){if(si(e))throw ic(),Error(C(418));for(;t;)lc(e,t),t=xt(t.nextSibling)}if(pu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Fe=xt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Fe=null}}else Fe=Ne?xt(e.stateNode.nextSibling):null;return!0}function ic(){for(var e=Fe;e;)e=xt(e.nextSibling)}function wn(){Fe=Ne=null,H=!1}function ta(e){Oe===null?Oe=[e]:Oe.push(e)}var wf=it.ReactCurrentBatchConfig;function Mn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var a=o.refs;i===null?delete a[l]:a[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function Or(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function fu(e){var t=e._init;return t(e._payload)}function ac(e){function t(p,d){if(e){var f=p.deletions;f===null?(p.deletions=[d],p.flags|=16):f.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function o(p,d){return p=Ct(p,d),p.index=0,p.sibling=null,p}function l(p,d,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<d?(p.flags|=2,d):f):(p.flags|=2,d)):(p.flags|=1048576,d)}function i(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,d,f,v){return d===null||d.tag!==6?(d=Al(f,p.mode,v),d.return=p,d):(d=o(d,f),d.return=p,d)}function u(p,d,f,v){var F=f.type;return F===en?m(p,d,f.props.children,v,f.key):d!==null&&(d.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===st&&fu(F)===d.type)?(v=o(d,f.props),v.ref=Mn(p,d,f),v.return=p,v):(v=no(f.type,f.key,f.props,null,p.mode,v),v.ref=Mn(p,d,f),v.return=p,v)}function s(p,d,f,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==f.containerInfo||d.stateNode.implementation!==f.implementation?(d=zl(f,p.mode,v),d.return=p,d):(d=o(d,f.children||[]),d.return=p,d)}function m(p,d,f,v,F){return d===null||d.tag!==7?(d=Mt(f,p.mode,v,F),d.return=p,d):(d=o(d,f),d.return=p,d)}function g(p,d,f){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Al(""+d,p.mode,f),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case zr:return f=no(d.type,d.key,d.props,null,p.mode,f),f.ref=Mn(p,null,d),f.return=p,f;case qt:return d=zl(d,p.mode,f),d.return=p,d;case st:var v=d._init;return g(p,v(d._payload),f)}if(Vn(d)||_n(d))return d=Mt(d,p.mode,f,null),d.return=p,d;Or(p,d)}return null}function h(p,d,f,v){var F=d!==null?d.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return F!==null?null:a(p,d,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case zr:return f.key===F?u(p,d,f,v):null;case qt:return f.key===F?s(p,d,f,v):null;case st:return F=f._init,h(p,d,F(f._payload),v)}if(Vn(f)||_n(f))return F!==null?null:m(p,d,f,v,null);Or(p,f)}return null}function x(p,d,f,v,F){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(f)||null,a(d,p,""+v,F);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case zr:return p=p.get(v.key===null?f:v.key)||null,u(d,p,v,F);case qt:return p=p.get(v.key===null?f:v.key)||null,s(d,p,v,F);case st:var N=v._init;return x(p,d,f,N(v._payload),F)}if(Vn(v)||_n(v))return p=p.get(f)||null,m(d,p,v,F,null);Or(d,v)}return null}function E(p,d,f,v){for(var F=null,N=null,A=d,j=d=0,W=null;A!==null&&j<f.length;j++){A.index>j?(W=A,A=null):W=A.sibling;var b=h(p,A,f[j],v);if(b===null){A===null&&(A=W);break}e&&A&&b.alternate===null&&t(p,A),d=l(b,d,j),N===null?F=b:N.sibling=b,N=b,A=W}if(j===f.length)return n(p,A),H&&jt(p,j),F;if(A===null){for(;j<f.length;j++)A=g(p,f[j],v),A!==null&&(d=l(A,d,j),N===null?F=A:N.sibling=A,N=A);return H&&jt(p,j),F}for(A=r(p,A);j<f.length;j++)W=x(A,p,j,f[j],v),W!==null&&(e&&W.alternate!==null&&A.delete(W.key===null?j:W.key),d=l(W,d,j),N===null?F=W:N.sibling=W,N=W);return e&&A.forEach(function(oe){return t(p,oe)}),H&&jt(p,j),F}function k(p,d,f,v){var F=_n(f);if(typeof F!="function")throw Error(C(150));if(f=F.call(f),f==null)throw Error(C(151));for(var N=F=null,A=d,j=d=0,W=null,b=f.next();A!==null&&!b.done;j++,b=f.next()){A.index>j?(W=A,A=null):W=A.sibling;var oe=h(p,A,b.value,v);if(oe===null){A===null&&(A=W);break}e&&A&&oe.alternate===null&&t(p,A),d=l(oe,d,j),N===null?F=oe:N.sibling=oe,N=oe,A=W}if(b.done)return n(p,A),H&&jt(p,j),F;if(A===null){for(;!b.done;j++,b=f.next())b=g(p,b.value,v),b!==null&&(d=l(b,d,j),N===null?F=b:N.sibling=b,N=b);return H&&jt(p,j),F}for(A=r(p,A);!b.done;j++,b=f.next())b=x(A,p,j,b.value,v),b!==null&&(e&&b.alternate!==null&&A.delete(b.key===null?j:b.key),d=l(b,d,j),N===null?F=b:N.sibling=b,N=b);return e&&A.forEach(function(Dt){return t(p,Dt)}),H&&jt(p,j),F}function B(p,d,f,v){if(typeof f=="object"&&f!==null&&f.type===en&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case zr:e:{for(var F=f.key,N=d;N!==null;){if(N.key===F){if(F=f.type,F===en){if(N.tag===7){n(p,N.sibling),d=o(N,f.props.children),d.return=p,p=d;break e}}else if(N.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===st&&fu(F)===N.type){n(p,N.sibling),d=o(N,f.props),d.ref=Mn(p,N,f),d.return=p,p=d;break e}n(p,N);break}else t(p,N);N=N.sibling}f.type===en?(d=Mt(f.props.children,p.mode,v,f.key),d.return=p,p=d):(v=no(f.type,f.key,f.props,null,p.mode,v),v.ref=Mn(p,d,f),v.return=p,p=v)}return i(p);case qt:e:{for(N=f.key;d!==null;){if(d.key===N)if(d.tag===4&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){n(p,d.sibling),d=o(d,f.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=zl(f,p.mode,v),d.return=p,p=d}return i(p);case st:return N=f._init,B(p,d,N(f._payload),v)}if(Vn(f))return E(p,d,f,v);if(_n(f))return k(p,d,f,v);Or(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,d!==null&&d.tag===6?(n(p,d.sibling),d=o(d,f),d.return=p,p=d):(n(p,d),d=Al(f,p.mode,v),d.return=p,p=d),i(p)):n(p,d)}return B}var kn=ac(!0),uc=ac(!1),vo=At(null),xo=null,sn=null,na=null;function ra(){na=sn=xo=null}function oa(e){var t=vo.current;V(vo),e._currentValue=t}function di(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function gn(e,t){xo=e,na=sn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(we=!0),e.firstContext=null)}function Le(e){var t=e._currentValue;if(na!==e)if(e={context:e,memoizedValue:t,next:null},sn===null){if(xo===null)throw Error(C(308));sn=e,xo.dependencies={lanes:0,firstContext:e}}else sn=sn.next=e;return t}var bt=null;function la(e){bt===null?bt=[e]:bt.push(e)}function sc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,la(t)):(n.next=o.next,o.next=n),t.interleaved=n,ot(e,r)}function ot(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ct=!1;function ia(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function tt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function wt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(R&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,ot(e,n)}return o=r.interleaved,o===null?(t.next=t,la(r)):(t.next=o.next,o.next=t),r.interleaved=t,ot(e,n)}function Xr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ki(e,n)}}function hu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function wo(e,t,n,r){var o=e.updateQueue;ct=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var u=a,s=u.next;u.next=null,i===null?l=s:i.next=s,i=u;var m=e.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==i&&(a===null?m.firstBaseUpdate=s:a.next=s,m.lastBaseUpdate=u))}if(l!==null){var g=o.baseState;i=0,m=s=u=null,a=l;do{var h=a.lane,x=a.eventTime;if((r&h)===h){m!==null&&(m=m.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var E=e,k=a;switch(h=t,x=n,k.tag){case 1:if(E=k.payload,typeof E=="function"){g=E.call(x,g,h);break e}g=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=k.payload,h=typeof E=="function"?E.call(x,g,h):E,h==null)break e;g=Y({},g,h);break e;case 2:ct=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[a]:h.push(a))}else x={eventTime:x,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(s=m=x,u=g):m=m.next=x,i|=h;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;h=a,a=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(1);if(m===null&&(u=g),o.baseState=u,o.firstBaseUpdate=s,o.lastBaseUpdate=m,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);$t|=i,e.lanes=i,e.memoizedState=g}}function mu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(C(191,o));o.call(r)}}}var Sr={},Ye=At(Sr),pr=At(Sr),fr=At(Sr);function Tt(e){if(e===Sr)throw Error(C(174));return e}function aa(e,t){switch(O(fr,t),O(pr,e),O(Ye,Sr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Kl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Kl(t,e)}V(Ye),O(Ye,t)}function En(){V(Ye),V(pr),V(fr)}function dc(e){Tt(fr.current);var t=Tt(Ye.current),n=Kl(t,e.type);t!==n&&(O(pr,e),O(Ye,n))}function ua(e){pr.current===e&&(V(Ye),V(pr))}var Q=At(0);function ko(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var El=[];function sa(){for(var e=0;e<El.length;e++)El[e]._workInProgressVersionPrimary=null;El.length=0}var Zr=it.ReactCurrentDispatcher,Cl=it.ReactCurrentBatchConfig,Ut=0,G=null,te=null,le=null,Eo=!1,Zn=!1,hr=0,kf=0;function de(){throw Error(C(321))}function ca(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ve(e[n],t[n]))return!1;return!0}function da(e,t,n,r,o,l){if(Ut=l,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Zr.current=e===null||e.memoizedState===null?Ff:Nf,e=n(r,o),Zn){l=0;do{if(Zn=!1,hr=0,25<=l)throw Error(C(301));l+=1,le=te=null,t.updateQueue=null,Zr.current=Pf,e=n(r,o)}while(Zn)}if(Zr.current=Co,t=te!==null&&te.next!==null,Ut=0,le=te=G=null,Eo=!1,t)throw Error(C(300));return e}function pa(){var e=hr!==0;return hr=0,e}function He(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?G.memoizedState=le=e:le=le.next=e,le}function be(){if(te===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var t=le===null?G.memoizedState:le.next;if(t!==null)le=t,te=e;else{if(e===null)throw Error(C(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},le===null?G.memoizedState=le=e:le=le.next=e}return le}function mr(e,t){return typeof t=="function"?t(e):t}function Sl(e){var t=be(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=te,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var a=i=null,u=null,s=l;do{var m=s.lane;if((Ut&m)===m)u!==null&&(u=u.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),r=s.hasEagerState?s.eagerState:e(r,s.action);else{var g={lane:m,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};u===null?(a=u=g,i=r):u=u.next=g,G.lanes|=m,$t|=m}s=s.next}while(s!==null&&s!==l);u===null?i=r:u.next=a,Ve(r,t.memoizedState)||(we=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,G.lanes|=l,$t|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Fl(e){var t=be(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);Ve(l,t.memoizedState)||(we=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function pc(){}function fc(e,t){var n=G,r=be(),o=t(),l=!Ve(r.memoizedState,o);if(l&&(r.memoizedState=o,we=!0),r=r.queue,fa(gc.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,gr(9,mc.bind(null,n,r,o,t),void 0,null),ie===null)throw Error(C(349));(Ut&30)!==0||hc(n,t,o)}return o}function hc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function mc(e,t,n,r){t.value=n,t.getSnapshot=r,yc(t)&&vc(e)}function gc(e,t,n){return n(function(){yc(t)&&vc(e)})}function yc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ve(e,n)}catch{return!0}}function vc(e){var t=ot(e,1);t!==null&&$e(t,e,1,-1)}function gu(e){var t=He();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mr,lastRenderedState:e},t.queue=e,e=e.dispatch=Sf.bind(null,G,e),[t.memoizedState,e]}function gr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function xc(){return be().memoizedState}function Jr(e,t,n,r){var o=He();G.flags|=e,o.memoizedState=gr(1|t,n,void 0,r===void 0?null:r)}function Oo(e,t,n,r){var o=be();r=r===void 0?null:r;var l=void 0;if(te!==null){var i=te.memoizedState;if(l=i.destroy,r!==null&&ca(r,i.deps)){o.memoizedState=gr(t,n,l,r);return}}G.flags|=e,o.memoizedState=gr(1|t,n,l,r)}function yu(e,t){return Jr(8390656,8,e,t)}function fa(e,t){return Oo(2048,8,e,t)}function wc(e,t){return Oo(4,2,e,t)}function kc(e,t){return Oo(4,4,e,t)}function Ec(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cc(e,t,n){return n=n!=null?n.concat([e]):null,Oo(4,4,Ec.bind(null,t,e),n)}function ha(){}function Sc(e,t){var n=be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ca(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Fc(e,t){var n=be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ca(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Nc(e,t,n){return(Ut&21)===0?(e.baseState&&(e.baseState=!1,we=!0),e.memoizedState=n):(Ve(n,t)||(n=Bs(),G.lanes|=n,$t|=n,e.baseState=!0),t)}function Ef(e,t){var n=M;M=n!==0&&4>n?n:4,e(!0);var r=Cl.transition;Cl.transition={};try{e(!1),t()}finally{M=n,Cl.transition=r}}function Pc(){return be().memoizedState}function Cf(e,t,n){var r=Et(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ac(e))zc(t,n);else if(n=sc(e,t,n,r),n!==null){var o=ge();$e(n,e,r,o),Dc(n,t,r)}}function Sf(e,t,n){var r=Et(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ac(e))zc(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,a=l(i,n);if(o.hasEagerState=!0,o.eagerState=a,Ve(a,i)){var u=t.interleaved;u===null?(o.next=o,la(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=sc(e,t,o,r),n!==null&&(o=ge(),$e(n,e,r,o),Dc(n,t,r))}}function Ac(e){var t=e.alternate;return e===G||t!==null&&t===G}function zc(e,t){Zn=Eo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Dc(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ki(e,n)}}var Co={readContext:Le,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,useId:de,unstable_isNewReconciler:!1},Ff={readContext:Le,useCallback:function(e,t){return He().memoizedState=[e,t===void 0?null:t],e},useContext:Le,useEffect:yu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Jr(4194308,4,Ec.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Jr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Jr(4,2,e,t)},useMemo:function(e,t){var n=He();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=He();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Cf.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var t=He();return e={current:e},t.memoizedState=e},useState:gu,useDebugValue:ha,useDeferredValue:function(e){return He().memoizedState=e},useTransition:function(){var e=gu(!1),t=e[0];return e=Ef.bind(null,e[1]),He().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=G,o=He();if(H){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),ie===null)throw Error(C(349));(Ut&30)!==0||hc(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,yu(gc.bind(null,r,l,e),[e]),r.flags|=2048,gr(9,mc.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=He(),t=ie.identifierPrefix;if(H){var n=et,r=qe;n=(r&~(1<<32-Ue(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=hr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=kf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Nf={readContext:Le,useCallback:Sc,useContext:Le,useEffect:fa,useImperativeHandle:Cc,useInsertionEffect:wc,useLayoutEffect:kc,useMemo:Fc,useReducer:Sl,useRef:xc,useState:function(){return Sl(mr)},useDebugValue:ha,useDeferredValue:function(e){var t=be();return Nc(t,te.memoizedState,e)},useTransition:function(){var e=Sl(mr)[0],t=be().memoizedState;return[e,t]},useMutableSource:pc,useSyncExternalStore:fc,useId:Pc,unstable_isNewReconciler:!1},Pf={readContext:Le,useCallback:Sc,useContext:Le,useEffect:fa,useImperativeHandle:Cc,useInsertionEffect:wc,useLayoutEffect:kc,useMemo:Fc,useReducer:Fl,useRef:xc,useState:function(){return Fl(mr)},useDebugValue:ha,useDeferredValue:function(e){var t=be();return te===null?t.memoizedState=e:Nc(t,te.memoizedState,e)},useTransition:function(){var e=Fl(mr)[0],t=be().memoizedState;return[e,t]},useMutableSource:pc,useSyncExternalStore:fc,useId:Pc,unstable_isNewReconciler:!1};function Me(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function pi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Uo={isMounted:function(e){return(e=e._reactInternals)?Kt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ge(),o=Et(e),l=tt(r,o);l.payload=t,n!=null&&(l.callback=n),t=wt(e,l,o),t!==null&&($e(t,e,o,r),Xr(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ge(),o=Et(e),l=tt(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=wt(e,l,o),t!==null&&($e(t,e,o,r),Xr(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ge(),r=Et(e),o=tt(n,r);o.tag=2,t!=null&&(o.callback=t),t=wt(e,o,r),t!==null&&($e(t,e,r,n),Xr(t,e,r))}};function vu(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!ur(n,r)||!ur(o,l):!0}function Bc(e,t,n){var r=!1,o=Nt,l=t.contextType;return typeof l=="object"&&l!==null?l=Le(l):(o=Ee(t)?It:he.current,r=t.contextTypes,l=(r=r!=null)?xn(e,o):Nt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Uo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function xu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Uo.enqueueReplaceState(t,t.state,null)}function fi(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},ia(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=Le(l):(l=Ee(t)?It:he.current,o.context=xn(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(pi(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Uo.enqueueReplaceState(o,o.state,null),wo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Cn(e,t){try{var n="",r=t;do n+=ep(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function Nl(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function hi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Af=typeof WeakMap=="function"?WeakMap:Map;function jc(e,t,n){n=tt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Fo||(Fo=!0,Si=r),hi(e,t)},n}function _c(e,t,n){n=tt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){hi(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){hi(e,t),typeof r!="function"&&(kt===null?kt=new Set([this]):kt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function wu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Af;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=$f.bind(null,e,t,n),t.then(e,e))}function ku(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Eu(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=tt(-1,1),t.tag=2,wt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var zf=it.ReactCurrentOwner,we=!1;function me(e,t,n,r){t.child=e===null?uc(t,null,n,r):kn(t,e.child,n,r)}function Cu(e,t,n,r,o){n=n.render;var l=t.ref;return gn(t,o),r=da(e,t,n,r,l,o),n=pa(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,lt(e,t,o)):(H&&n&&qi(t),t.flags|=1,me(e,t,r,o),t.child)}function Su(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!Ea(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Lc(e,t,l,r,o)):(e=no(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,(e.lanes&o)===0){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:ur,n(i,r)&&e.ref===t.ref)return lt(e,t,o)}return t.flags|=1,e=Ct(l,r),e.ref=t.ref,e.return=t,t.child=e}function Lc(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(ur(l,r)&&e.ref===t.ref)if(we=!1,t.pendingProps=r=l,(e.lanes&o)!==0)(e.flags&131072)!==0&&(we=!0);else return t.lanes=e.lanes,lt(e,t,o)}return mi(e,t,n,r,o)}function bc(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(dn,Se),Se|=n;else{if((n&1073741824)===0)return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,O(dn,Se),Se|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,O(dn,Se),Se|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,O(dn,Se),Se|=r;return me(e,t,o,n),t.child}function Tc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function mi(e,t,n,r,o){var l=Ee(n)?It:he.current;return l=xn(t,l),gn(t,o),n=da(e,t,n,r,l,o),r=pa(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,lt(e,t,o)):(H&&r&&qi(t),t.flags|=1,me(e,t,n,o),t.child)}function Fu(e,t,n,r,o){if(Ee(n)){var l=!0;mo(t)}else l=!1;if(gn(t,o),t.stateNode===null)qr(e,t),Bc(t,n,r),fi(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var u=i.context,s=n.contextType;typeof s=="object"&&s!==null?s=Le(s):(s=Ee(n)?It:he.current,s=xn(t,s));var m=n.getDerivedStateFromProps,g=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function";g||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||u!==s)&&xu(t,i,r,s),ct=!1;var h=t.memoizedState;i.state=h,wo(t,r,i,o),u=t.memoizedState,a!==r||h!==u||ke.current||ct?(typeof m=="function"&&(pi(t,n,m,r),u=t.memoizedState),(a=ct||vu(t,n,a,r,h,u,s))?(g||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),i.props=r,i.state=u,i.context=s,r=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,cc(e,t),a=t.memoizedProps,s=t.type===t.elementType?a:Me(t.type,a),i.props=s,g=t.pendingProps,h=i.context,u=n.contextType,typeof u=="object"&&u!==null?u=Le(u):(u=Ee(n)?It:he.current,u=xn(t,u));var x=n.getDerivedStateFromProps;(m=typeof x=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==g||h!==u)&&xu(t,i,r,u),ct=!1,h=t.memoizedState,i.state=h,wo(t,r,i,o);var E=t.memoizedState;a!==g||h!==E||ke.current||ct?(typeof x=="function"&&(pi(t,n,x,r),E=t.memoizedState),(s=ct||vu(t,n,s,r,h,E,u)||!1)?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,E,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,E,u)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=E),i.props=r,i.state=E,i.context=u,r=s):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return gi(e,t,n,r,l,o)}function gi(e,t,n,r,o,l){Tc(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&cu(t,n,!1),lt(e,t,l);r=t.stateNode,zf.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=kn(t,e.child,null,l),t.child=kn(t,null,a,l)):me(e,t,a,l),t.memoizedState=r.state,o&&cu(t,n,!0),t.child}function Rc(e){var t=e.stateNode;t.pendingContext?su(e,t.pendingContext,t.pendingContext!==t.context):t.context&&su(e,t.context,!1),aa(e,t.containerInfo)}function Nu(e,t,n,r,o){return wn(),ta(o),t.flags|=256,me(e,t,n,r),t.child}var yi={dehydrated:null,treeContext:null,retryLane:0};function vi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Mc(e,t,n){var r=t.pendingProps,o=Q.current,l=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),O(Q,o&1),e===null)return ci(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},(r&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=i):l=Wo(i,r,0,null),e=Mt(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=vi(n),t.memoizedState=yi,e):ma(t,i));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Df(e,t,i,r,a,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,a=o.sibling;var u={mode:"hidden",children:r.children};return(i&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Ct(o,u),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?l=Ct(a,l):(l=Mt(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?vi(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=yi,r}return l=e.child,e=l.sibling,r=Ct(l,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ma(e,t){return t=Wo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ur(e,t,n,r){return r!==null&&ta(r),kn(t,e.child,null,n),e=ma(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Df(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=Nl(Error(C(422))),Ur(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=Wo({mode:"visible",children:r.children},o,0,null),l=Mt(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,(t.mode&1)!==0&&kn(t,e.child,null,i),t.child.memoizedState=vi(i),t.memoizedState=yi,l);if((t.mode&1)===0)return Ur(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(C(419)),r=Nl(l,r,void 0),Ur(e,t,i,r)}if(a=(i&e.childLanes)!==0,we||a){if(r=ie,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|i))!==0?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,ot(e,o),$e(r,e,o,-1))}return ka(),r=Nl(Error(C(421))),Ur(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Vf.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,Fe=xt(o.nextSibling),Ne=t,H=!0,Oe=null,e!==null&&(De[Be++]=qe,De[Be++]=et,De[Be++]=Ot,qe=e.id,et=e.overflow,Ot=t),t=ma(t,r.children),t.flags|=4096,t)}function Pu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),di(e.return,t,n)}function Pl(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function Ic(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(me(e,t,r.children,n),r=Q.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pu(e,n,t);else if(e.tag===19)Pu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(O(Q,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ko(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Pl(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ko(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Pl(t,!0,n,null,l);break;case"together":Pl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function qr(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function lt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),$t|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=Ct(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ct(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Bf(e,t,n){switch(t.tag){case 3:Rc(t),wn();break;case 5:dc(t);break;case 1:Ee(t.type)&&mo(t);break;case 4:aa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;O(vo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(O(Q,Q.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Mc(e,t,n):(O(Q,Q.current&1),e=lt(e,t,n),e!==null?e.sibling:null);O(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Ic(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),O(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,bc(e,t,n)}return lt(e,t,n)}var Oc,xi,Uc,$c;Oc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xi=function(){};Uc=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Tt(Ye.current);var l=null;switch(n){case"input":o=Ul(e,o),r=Ul(e,r),l=[];break;case"select":o=Y({},o,{value:void 0}),r=Y({},r,{value:void 0}),l=[];break;case"textarea":o=Wl(e,o),r=Wl(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=fo)}Hl(n,r);var i;n=null;for(s in o)if(!r.hasOwnProperty(s)&&o.hasOwnProperty(s)&&o[s]!=null)if(s==="style"){var a=o[s];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(tr.hasOwnProperty(s)?l||(l=[]):(l=l||[]).push(s,null));for(s in r){var u=r[s];if(a=o!=null?o[s]:void 0,r.hasOwnProperty(s)&&u!==a&&(u!=null||a!=null))if(s==="style")if(a){for(i in a)!a.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in u)u.hasOwnProperty(i)&&a[i]!==u[i]&&(n||(n={}),n[i]=u[i])}else n||(l||(l=[]),l.push(s,n)),n=u;else s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(l=l||[]).push(s,u)):s==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(s,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(tr.hasOwnProperty(s)?(u!=null&&s==="onScroll"&&$("scroll",e),l||a===u||(l=[])):(l=l||[]).push(s,u))}n&&(l=l||[]).push("style",n);var s=l;(t.updateQueue=s)&&(t.flags|=4)}};$c=function(e,t,n,r){n!==r&&(t.flags|=4)};function In(e,t){if(!H)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function jf(e,t,n){var r=t.pendingProps;switch(ea(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(t),null;case 1:return Ee(t.type)&&ho(),pe(t),null;case 3:return r=t.stateNode,En(),V(ke),V(he),sa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ir(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Oe!==null&&(Pi(Oe),Oe=null))),xi(e,t),pe(t),null;case 5:ua(t);var o=Tt(fr.current);if(n=t.type,e!==null&&t.stateNode!=null)Uc(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return pe(t),null}if(e=Tt(Ye.current),Ir(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Qe]=t,r[dr]=l,e=(t.mode&1)!==0,n){case"dialog":$("cancel",r),$("close",r);break;case"iframe":case"object":case"embed":$("load",r);break;case"video":case"audio":for(o=0;o<Kn.length;o++)$(Kn[o],r);break;case"source":$("error",r);break;case"img":case"image":case"link":$("error",r),$("load",r);break;case"details":$("toggle",r);break;case"input":Ta(r,l),$("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},$("invalid",r);break;case"textarea":Ma(r,l),$("invalid",r)}Hl(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&Mr(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&Mr(r.textContent,a,e),o=["children",""+a]):tr.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&$("scroll",r)}switch(n){case"input":Dr(r),Ra(r,l,!0);break;case"textarea":Dr(r),Ia(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=fo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=gs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Qe]=t,e[dr]=r,Oc(e,t,!1,!1),t.stateNode=e;e:{switch(i=Ql(n,r),n){case"dialog":$("cancel",e),$("close",e),o=r;break;case"iframe":case"object":case"embed":$("load",e),o=r;break;case"video":case"audio":for(o=0;o<Kn.length;o++)$(Kn[o],e);o=r;break;case"source":$("error",e),o=r;break;case"img":case"image":case"link":$("error",e),$("load",e),o=r;break;case"details":$("toggle",e),o=r;break;case"input":Ta(e,r),o=Ul(e,r),$("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Y({},r,{value:void 0}),$("invalid",e);break;case"textarea":Ma(e,r),o=Wl(e,r),$("invalid",e);break;default:o=r}Hl(n,o),a=o;for(l in a)if(a.hasOwnProperty(l)){var u=a[l];l==="style"?xs(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&ys(e,u)):l==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&nr(e,u):typeof u=="number"&&nr(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(tr.hasOwnProperty(l)?u!=null&&l==="onScroll"&&$("scroll",e):u!=null&&Ii(e,l,u,i))}switch(n){case"input":Dr(e),Ra(e,r,!1);break;case"textarea":Dr(e),Ia(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ft(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?pn(e,!!r.multiple,l,!1):r.defaultValue!=null&&pn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=fo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pe(t),null;case 6:if(e&&t.stateNode!=null)$c(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=Tt(fr.current),Tt(Ye.current),Ir(t)){if(r=t.stateNode,n=t.memoizedProps,r[Qe]=t,(l=r.nodeValue!==n)&&(e=Ne,e!==null))switch(e.tag){case 3:Mr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Mr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Qe]=t,t.stateNode=r}return pe(t),null;case 13:if(V(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(H&&Fe!==null&&(t.mode&1)!==0&&(t.flags&128)===0)ic(),wn(),t.flags|=98560,l=!1;else if(l=Ir(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(C(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(C(317));l[Qe]=t}else wn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;pe(t),l=!1}else Oe!==null&&(Pi(Oe),Oe=null),l=!0;if(!l)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Q.current&1)!==0?ne===0&&(ne=3):ka())),t.updateQueue!==null&&(t.flags|=4),pe(t),null);case 4:return En(),xi(e,t),e===null&&sr(t.stateNode.containerInfo),pe(t),null;case 10:return oa(t.type._context),pe(t),null;case 17:return Ee(t.type)&&ho(),pe(t),null;case 19:if(V(Q),l=t.memoizedState,l===null)return pe(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)In(l,!1);else{if(ne!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=ko(e),i!==null){for(t.flags|=128,In(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return O(Q,Q.current&1|2),t.child}e=e.sibling}l.tail!==null&&J()>Sn&&(t.flags|=128,r=!0,In(l,!1),t.lanes=4194304)}else{if(!r)if(e=ko(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),In(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!H)return pe(t),null}else 2*J()-l.renderingStartTime>Sn&&n!==1073741824&&(t.flags|=128,r=!0,In(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=J(),t.sibling=null,n=Q.current,O(Q,r?n&1|2:n&1),t):(pe(t),null);case 22:case 23:return wa(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Se&1073741824)!==0&&(pe(t),t.subtreeFlags&6&&(t.flags|=8192)):pe(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function _f(e,t){switch(ea(t),t.tag){case 1:return Ee(t.type)&&ho(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return En(),V(ke),V(he),sa(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return ua(t),null;case 13:if(V(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));wn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(Q),null;case 4:return En(),null;case 10:return oa(t.type._context),null;case 22:case 23:return wa(),null;case 24:return null;default:return null}}var $r=!1,fe=!1,Lf=typeof WeakSet=="function"?WeakSet:Set,z=null;function cn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Z(e,t,r)}else n.current=null}function wi(e,t,n){try{n()}catch(r){Z(e,t,r)}}var Au=!1;function bf(e,t){if(ri=so,e=Qs(),Ji(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,a=-1,u=-1,s=0,m=0,g=e,h=null;t:for(;;){for(var x;g!==n||o!==0&&g.nodeType!==3||(a=i+o),g!==l||r!==0&&g.nodeType!==3||(u=i+r),g.nodeType===3&&(i+=g.nodeValue.length),(x=g.firstChild)!==null;)h=g,g=x;for(;;){if(g===e)break t;if(h===n&&++s===o&&(a=i),h===l&&++m===r&&(u=i),(x=g.nextSibling)!==null)break;g=h,h=g.parentNode}g=x}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(oi={focusedElem:e,selectionRange:n},so=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var E=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var k=E.memoizedProps,B=E.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?k:Me(t.type,k),B);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(v){Z(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return E=Au,Au=!1,E}function Jn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&wi(t,n,l)}o=o.next}while(o!==r)}}function $o(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ki(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Vc(e){var t=e.alternate;t!==null&&(e.alternate=null,Vc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Qe],delete t[dr],delete t[ai],delete t[yf],delete t[vf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Wc(e){return e.tag===5||e.tag===3||e.tag===4}function zu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ei(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=fo));else if(r!==4&&(e=e.child,e!==null))for(Ei(e,t,n),e=e.sibling;e!==null;)Ei(e,t,n),e=e.sibling}function Ci(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ci(e,t,n),e=e.sibling;e!==null;)Ci(e,t,n),e=e.sibling}var ae=null,Ie=!1;function ut(e,t,n){for(n=n.child;n!==null;)Kc(e,t,n),n=n.sibling}function Kc(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(Lo,n)}catch{}switch(n.tag){case 5:fe||cn(n,t);case 6:var r=ae,o=Ie;ae=null,ut(e,t,n),ae=r,Ie=o,ae!==null&&(Ie?(e=ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ae.removeChild(n.stateNode));break;case 18:ae!==null&&(Ie?(e=ae,n=n.stateNode,e.nodeType===8?wl(e.parentNode,n):e.nodeType===1&&wl(e,n),ir(e)):wl(ae,n.stateNode));break;case 4:r=ae,o=Ie,ae=n.stateNode.containerInfo,Ie=!0,ut(e,t,n),ae=r,Ie=o;break;case 0:case 11:case 14:case 15:if(!fe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&((l&2)!==0||(l&4)!==0)&&wi(n,t,i),o=o.next}while(o!==r)}ut(e,t,n);break;case 1:if(!fe&&(cn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Z(n,t,a)}ut(e,t,n);break;case 21:ut(e,t,n);break;case 22:n.mode&1?(fe=(r=fe)||n.memoizedState!==null,ut(e,t,n),fe=r):ut(e,t,n);break;default:ut(e,t,n)}}function Du(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Lf),t.forEach(function(r){var o=Wf.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Re(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:ae=a.stateNode,Ie=!1;break e;case 3:ae=a.stateNode.containerInfo,Ie=!0;break e;case 4:ae=a.stateNode.containerInfo,Ie=!0;break e}a=a.return}if(ae===null)throw Error(C(160));Kc(l,i,o),ae=null,Ie=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(s){Z(o,t,s)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Hc(t,e),t=t.sibling}function Hc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Re(t,e),Ke(e),r&4){try{Jn(3,e,e.return),$o(3,e)}catch(k){Z(e,e.return,k)}try{Jn(5,e,e.return)}catch(k){Z(e,e.return,k)}}break;case 1:Re(t,e),Ke(e),r&512&&n!==null&&cn(n,n.return);break;case 5:if(Re(t,e),Ke(e),r&512&&n!==null&&cn(n,n.return),e.flags&32){var o=e.stateNode;try{nr(o,"")}catch(k){Z(e,e.return,k)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&hs(o,l),Ql(a,i);var s=Ql(a,l);for(i=0;i<u.length;i+=2){var m=u[i],g=u[i+1];m==="style"?xs(o,g):m==="dangerouslySetInnerHTML"?ys(o,g):m==="children"?nr(o,g):Ii(o,m,g,s)}switch(a){case"input":$l(o,l);break;case"textarea":ms(o,l);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var x=l.value;x!=null?pn(o,!!l.multiple,x,!1):h!==!!l.multiple&&(l.defaultValue!=null?pn(o,!!l.multiple,l.defaultValue,!0):pn(o,!!l.multiple,l.multiple?[]:"",!1))}o[dr]=l}catch(k){Z(e,e.return,k)}}break;case 6:if(Re(t,e),Ke(e),r&4){if(e.stateNode===null)throw Error(C(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(k){Z(e,e.return,k)}}break;case 3:if(Re(t,e),Ke(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ir(t.containerInfo)}catch(k){Z(e,e.return,k)}break;case 4:Re(t,e),Ke(e);break;case 13:Re(t,e),Ke(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(va=J())),r&4&&Du(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(fe=(s=fe)||m,Re(t,e),fe=s):Re(t,e),Ke(e),r&8192){if(s=e.memoizedState!==null,(e.stateNode.isHidden=s)&&!m&&(e.mode&1)!==0)for(z=e,m=e.child;m!==null;){for(g=z=m;z!==null;){switch(h=z,x=h.child,h.tag){case 0:case 11:case 14:case 15:Jn(4,h,h.return);break;case 1:cn(h,h.return);var E=h.stateNode;if(typeof E.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,E.props=t.memoizedProps,E.state=t.memoizedState,E.componentWillUnmount()}catch(k){Z(r,n,k)}}break;case 5:cn(h,h.return);break;case 22:if(h.memoizedState!==null){ju(g);continue}}x!==null?(x.return=h,z=x):ju(g)}m=m.sibling}e:for(m=null,g=e;;){if(g.tag===5){if(m===null){m=g;try{o=g.stateNode,s?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=g.stateNode,u=g.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=vs("display",i))}catch(k){Z(e,e.return,k)}}}else if(g.tag===6){if(m===null)try{g.stateNode.nodeValue=s?"":g.memoizedProps}catch(k){Z(e,e.return,k)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;m===g&&(m=null),g=g.return}m===g&&(m=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Re(t,e),Ke(e),r&4&&Du(e);break;case 21:break;default:Re(t,e),Ke(e)}}function Ke(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Wc(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(nr(o,""),r.flags&=-33);var l=zu(e);Ci(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,a=zu(e);Ei(e,a,i);break;default:throw Error(C(161))}}catch(u){Z(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Tf(e,t,n){z=e,Qc(e)}function Qc(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var o=z,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||$r;if(!i){var a=o.alternate,u=a!==null&&a.memoizedState!==null||fe;a=$r;var s=fe;if($r=i,(fe=u)&&!s)for(z=o;z!==null;)i=z,u=i.child,i.tag===22&&i.memoizedState!==null?_u(o):u!==null?(u.return=i,z=u):_u(o);for(;l!==null;)z=l,Qc(l),l=l.sibling;z=o,$r=a,fe=s}Bu(e)}else(o.subtreeFlags&8772)!==0&&l!==null?(l.return=o,z=l):Bu(e)}}function Bu(e){for(;z!==null;){var t=z;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:fe||$o(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!fe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Me(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&mu(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}mu(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var s=t.alternate;if(s!==null){var m=s.memoizedState;if(m!==null){var g=m.dehydrated;g!==null&&ir(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}fe||t.flags&512&&ki(t)}catch(h){Z(t,t.return,h)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function ju(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function _u(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{$o(4,t)}catch(u){Z(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){Z(t,o,u)}}var l=t.return;try{ki(t)}catch(u){Z(t,l,u)}break;case 5:var i=t.return;try{ki(t)}catch(u){Z(t,i,u)}}}catch(u){Z(t,t.return,u)}if(t===e){z=null;break}var a=t.sibling;if(a!==null){a.return=t.return,z=a;break}z=t.return}}var Rf=Math.ceil,So=it.ReactCurrentDispatcher,ga=it.ReactCurrentOwner,_e=it.ReactCurrentBatchConfig,R=0,ie=null,ee=null,ue=0,Se=0,dn=At(0),ne=0,yr=null,$t=0,Vo=0,ya=0,qn=null,xe=null,va=0,Sn=1/0,Ze=null,Fo=!1,Si=null,kt=null,Vr=!1,ht=null,No=0,er=0,Fi=null,eo=-1,to=0;function ge(){return(R&6)!==0?J():eo!==-1?eo:eo=J()}function Et(e){return(e.mode&1)===0?1:(R&2)!==0&&ue!==0?ue&-ue:wf.transition!==null?(to===0&&(to=Bs()),to):(e=M,e!==0||(e=window.event,e=e===void 0?16:Ms(e.type)),e)}function $e(e,t,n,r){if(50<er)throw er=0,Fi=null,Error(C(185));kr(e,n,r),((R&2)===0||e!==ie)&&(e===ie&&((R&2)===0&&(Vo|=n),ne===4&&pt(e,ue)),Ce(e,r),n===1&&R===0&&(t.mode&1)===0&&(Sn=J()+500,Io&&zt()))}function Ce(e,t){var n=e.callbackNode;xp(e,t);var r=uo(e,e===ie?ue:0);if(r===0)n!==null&&$a(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&$a(n),t===1)e.tag===0?xf(Lu.bind(null,e)):rc(Lu.bind(null,e)),mf(function(){(R&6)===0&&zt()}),n=null;else{switch(js(r)){case 1:n=Wi;break;case 4:n=zs;break;case 16:n=ao;break;case 536870912:n=Ds;break;default:n=ao}n=td(n,Gc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Gc(e,t){if(eo=-1,to=0,(R&6)!==0)throw Error(C(327));var n=e.callbackNode;if(yn()&&e.callbackNode!==n)return null;var r=uo(e,e===ie?ue:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Po(e,r);else{t=r;var o=R;R|=2;var l=Xc();(ie!==e||ue!==t)&&(Ze=null,Sn=J()+500,Rt(e,t));do try{Of();break}catch(a){Yc(e,a)}while(1);ra(),So.current=l,R=o,ee!==null?t=0:(ie=null,ue=0,t=ne)}if(t!==0){if(t===2&&(o=Jl(e),o!==0&&(r=o,t=Ni(e,o))),t===1)throw n=yr,Rt(e,0),pt(e,r),Ce(e,J()),n;if(t===6)pt(e,r);else{if(o=e.current.alternate,(r&30)===0&&!Mf(o)&&(t=Po(e,r),t===2&&(l=Jl(e),l!==0&&(r=l,t=Ni(e,l))),t===1))throw n=yr,Rt(e,0),pt(e,r),Ce(e,J()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:_t(e,xe,Ze);break;case 3:if(pt(e,r),(r&130023424)===r&&(t=va+500-J(),10<t)){if(uo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ge(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ii(_t.bind(null,e,xe,Ze),t);break}_t(e,xe,Ze);break;case 4:if(pt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-Ue(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Rf(r/1960))-r,10<r){e.timeoutHandle=ii(_t.bind(null,e,xe,Ze),r);break}_t(e,xe,Ze);break;case 5:_t(e,xe,Ze);break;default:throw Error(C(329))}}}return Ce(e,J()),e.callbackNode===n?Gc.bind(null,e):null}function Ni(e,t){var n=qn;return e.current.memoizedState.isDehydrated&&(Rt(e,t).flags|=256),e=Po(e,t),e!==2&&(t=xe,xe=n,t!==null&&Pi(t)),e}function Pi(e){xe===null?xe=e:xe.push.apply(xe,e)}function Mf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!Ve(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pt(e,t){for(t&=~ya,t&=~Vo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ue(t),r=1<<n;e[n]=-1,t&=~r}}function Lu(e){if((R&6)!==0)throw Error(C(327));yn();var t=uo(e,0);if((t&1)===0)return Ce(e,J()),null;var n=Po(e,t);if(e.tag!==0&&n===2){var r=Jl(e);r!==0&&(t=r,n=Ni(e,r))}if(n===1)throw n=yr,Rt(e,0),pt(e,t),Ce(e,J()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_t(e,xe,Ze),Ce(e,J()),null}function xa(e,t){var n=R;R|=1;try{return e(t)}finally{R=n,R===0&&(Sn=J()+500,Io&&zt())}}function Vt(e){ht!==null&&ht.tag===0&&(R&6)===0&&yn();var t=R;R|=1;var n=_e.transition,r=M;try{if(_e.transition=null,M=1,e)return e()}finally{M=r,_e.transition=n,R=t,(R&6)===0&&zt()}}function wa(){Se=dn.current,V(dn)}function Rt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,hf(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(ea(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ho();break;case 3:En(),V(ke),V(he),sa();break;case 5:ua(r);break;case 4:En();break;case 13:V(Q);break;case 19:V(Q);break;case 10:oa(r.type._context);break;case 22:case 23:wa()}n=n.return}if(ie=e,ee=e=Ct(e.current,null),ue=Se=t,ne=0,yr=null,ya=Vo=$t=0,xe=qn=null,bt!==null){for(t=0;t<bt.length;t++)if(n=bt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}bt=null}return e}function Yc(e,t){do{var n=ee;try{if(ra(),Zr.current=Co,Eo){for(var r=G.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Eo=!1}if(Ut=0,le=te=G=null,Zn=!1,hr=0,ga.current=null,n===null||n.return===null){ne=1,yr=t,ee=null;break}e:{var l=e,i=n.return,a=n,u=t;if(t=ue,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var s=u,m=a,g=m.tag;if((m.mode&1)===0&&(g===0||g===11||g===15)){var h=m.alternate;h?(m.updateQueue=h.updateQueue,m.memoizedState=h.memoizedState,m.lanes=h.lanes):(m.updateQueue=null,m.memoizedState=null)}var x=ku(i);if(x!==null){x.flags&=-257,Eu(x,i,a,l,t),x.mode&1&&wu(l,s,t),t=x,u=s;var E=t.updateQueue;if(E===null){var k=new Set;k.add(u),t.updateQueue=k}else E.add(u);break e}else{if((t&1)===0){wu(l,s,t),ka();break e}u=Error(C(426))}}else if(H&&a.mode&1){var B=ku(i);if(B!==null){(B.flags&65536)===0&&(B.flags|=256),Eu(B,i,a,l,t),ta(Cn(u,a));break e}}l=u=Cn(u,a),ne!==4&&(ne=2),qn===null?qn=[l]:qn.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var p=jc(l,u,t);hu(l,p);break e;case 1:a=u;var d=l.type,f=l.stateNode;if((l.flags&128)===0&&(typeof d.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(kt===null||!kt.has(f)))){l.flags|=65536,t&=-t,l.lanes|=t;var v=_c(l,a,t);hu(l,v);break e}}l=l.return}while(l!==null)}Jc(n)}catch(F){t=F,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(1)}function Xc(){var e=So.current;return So.current=Co,e===null?Co:e}function ka(){(ne===0||ne===3||ne===2)&&(ne=4),ie===null||($t&268435455)===0&&(Vo&268435455)===0||pt(ie,ue)}function Po(e,t){var n=R;R|=2;var r=Xc();(ie!==e||ue!==t)&&(Ze=null,Rt(e,t));do try{If();break}catch(o){Yc(e,o)}while(1);if(ra(),R=n,So.current=r,ee!==null)throw Error(C(261));return ie=null,ue=0,ne}function If(){for(;ee!==null;)Zc(ee)}function Of(){for(;ee!==null&&!cp();)Zc(ee)}function Zc(e){var t=ed(e.alternate,e,Se);e.memoizedProps=e.pendingProps,t===null?Jc(e):ee=t,ga.current=null}function Jc(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=jf(n,t,Se),n!==null){ee=n;return}}else{if(n=_f(n,t),n!==null){n.flags&=32767,ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,ee=null;return}}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);ne===0&&(ne=5)}function _t(e,t,n){var r=M,o=_e.transition;try{_e.transition=null,M=1,Uf(e,t,n,r)}finally{_e.transition=o,M=r}return null}function Uf(e,t,n,r){do yn();while(ht!==null);if((R&6)!==0)throw Error(C(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(wp(e,l),e===ie&&(ee=ie=null,ue=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Vr||(Vr=!0,td(ao,function(){return yn(),null})),l=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||l){l=_e.transition,_e.transition=null;var i=M;M=1;var a=R;R|=4,ga.current=null,bf(e,n),Hc(n,e),af(oi),so=!!ri,oi=ri=null,e.current=n,Tf(n),dp(),R=a,M=i,_e.transition=l}else e.current=n;if(Vr&&(Vr=!1,ht=e,No=o),l=e.pendingLanes,l===0&&(kt=null),hp(n.stateNode),Ce(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Fo)throw Fo=!1,e=Si,Si=null,e;return(No&1)!==0&&e.tag!==0&&yn(),l=e.pendingLanes,(l&1)!==0?e===Fi?er++:(er=0,Fi=e):er=0,zt(),null}function yn(){if(ht!==null){var e=js(No),t=_e.transition,n=M;try{if(_e.transition=null,M=16>e?16:e,ht===null)var r=!1;else{if(e=ht,ht=null,No=0,(R&6)!==0)throw Error(C(331));var o=R;for(R|=4,z=e.current;z!==null;){var l=z,i=l.child;if((z.flags&16)!==0){var a=l.deletions;if(a!==null){for(var u=0;u<a.length;u++){var s=a[u];for(z=s;z!==null;){var m=z;switch(m.tag){case 0:case 11:case 15:Jn(8,m,l)}var g=m.child;if(g!==null)g.return=m,z=g;else for(;z!==null;){m=z;var h=m.sibling,x=m.return;if(Vc(m),m===s){z=null;break}if(h!==null){h.return=x,z=h;break}z=x}}}var E=l.alternate;if(E!==null){var k=E.child;if(k!==null){E.child=null;do{var B=k.sibling;k.sibling=null,k=B}while(k!==null)}}z=l}}if((l.subtreeFlags&2064)!==0&&i!==null)i.return=l,z=i;else e:for(;z!==null;){if(l=z,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:Jn(9,l,l.return)}var p=l.sibling;if(p!==null){p.return=l.return,z=p;break e}z=l.return}}var d=e.current;for(z=d;z!==null;){i=z;var f=i.child;if((i.subtreeFlags&2064)!==0&&f!==null)f.return=i,z=f;else e:for(i=d;z!==null;){if(a=z,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:$o(9,a)}}catch(F){Z(a,a.return,F)}if(a===i){z=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,z=v;break e}z=a.return}}if(R=o,zt(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(Lo,e)}catch{}r=!0}return r}finally{M=n,_e.transition=t}}return!1}function bu(e,t,n){t=Cn(n,t),t=jc(e,t,1),e=wt(e,t,1),t=ge(),e!==null&&(kr(e,1,t),Ce(e,t))}function Z(e,t,n){if(e.tag===3)bu(e,e,n);else for(;t!==null;){if(t.tag===3){bu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(kt===null||!kt.has(r))){e=Cn(n,e),e=_c(t,e,1),t=wt(t,e,1),e=ge(),t!==null&&(kr(t,1,e),Ce(t,e));break}}t=t.return}}function $f(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ge(),e.pingedLanes|=e.suspendedLanes&n,ie===e&&(ue&n)===n&&(ne===4||ne===3&&(ue&130023424)===ue&&500>J()-va?Rt(e,0):ya|=n),Ce(e,t)}function qc(e,t){t===0&&((e.mode&1)===0?t=1:(t=_r,_r<<=1,(_r&130023424)===0&&(_r=4194304)));var n=ge();e=ot(e,t),e!==null&&(kr(e,t,n),Ce(e,n))}function Vf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qc(e,n)}function Wf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),qc(e,n)}var ed;ed=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ke.current)we=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return we=!1,Bf(e,t,n);we=(e.flags&131072)!==0}else we=!1,H&&(t.flags&1048576)!==0&&oc(t,yo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;qr(e,t),e=t.pendingProps;var o=xn(t,he.current);gn(t,n),o=da(null,t,r,e,o,n);var l=pa();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ee(r)?(l=!0,mo(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ia(t),o.updater=Uo,t.stateNode=o,o._reactInternals=t,fi(t,r,e,n),t=gi(null,t,r,!0,l,n)):(t.tag=0,H&&l&&qi(t),me(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(qr(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Hf(r),e=Me(r,e),o){case 0:t=mi(null,t,r,e,n);break e;case 1:t=Fu(null,t,r,e,n);break e;case 11:t=Cu(null,t,r,e,n);break e;case 14:t=Su(null,t,r,Me(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Me(r,o),mi(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Me(r,o),Fu(e,t,r,o,n);case 3:e:{if(Rc(t),e===null)throw Error(C(387));r=t.pendingProps,l=t.memoizedState,o=l.element,cc(e,t),wo(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=Cn(Error(C(423)),t),t=Nu(e,t,r,n,o);break e}else if(r!==o){o=Cn(Error(C(424)),t),t=Nu(e,t,r,n,o);break e}else for(Fe=xt(t.stateNode.containerInfo.firstChild),Ne=t,H=!0,Oe=null,n=uc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(wn(),r===o){t=lt(e,t,n);break e}me(e,t,r,n)}t=t.child}return t;case 5:return dc(t),e===null&&ci(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,li(r,o)?i=null:l!==null&&li(r,l)&&(t.flags|=32),Tc(e,t),me(e,t,i,n),t.child;case 6:return e===null&&ci(t),null;case 13:return Mc(e,t,n);case 4:return aa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=kn(t,null,r,n):me(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Me(r,o),Cu(e,t,r,o,n);case 7:return me(e,t,t.pendingProps,n),t.child;case 8:return me(e,t,t.pendingProps.children,n),t.child;case 12:return me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,O(vo,r._currentValue),r._currentValue=i,l!==null)if(Ve(l.value,i)){if(l.children===o.children&&!ke.current){t=lt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){i=l.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(l.tag===1){u=tt(-1,n&-n),u.tag=2;var s=l.updateQueue;if(s!==null){s=s.shared;var m=s.pending;m===null?u.next=u:(u.next=m.next,m.next=u),s.pending=u}}l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),di(l.return,n,t),a.lanes|=n;break}u=u.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(C(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),di(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}me(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,gn(t,n),o=Le(o),r=r(o),t.flags|=1,me(e,t,r,n),t.child;case 14:return r=t.type,o=Me(r,t.pendingProps),o=Me(r.type,o),Su(e,t,r,o,n);case 15:return Lc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Me(r,o),qr(e,t),t.tag=1,Ee(r)?(e=!0,mo(t)):e=!1,gn(t,n),Bc(t,r,o),fi(t,r,o,n),gi(null,t,r,!0,e,n);case 19:return Ic(e,t,n);case 22:return bc(e,t,n)}throw Error(C(156,t.tag))};function td(e,t){return As(e,t)}function Kf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function je(e,t,n,r){return new Kf(e,t,n,r)}function Ea(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hf(e){if(typeof e=="function")return Ea(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ui)return 11;if(e===$i)return 14}return 2}function Ct(e,t){var n=e.alternate;return n===null?(n=je(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function no(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")Ea(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case en:return Mt(n.children,o,l,t);case Oi:i=8,o|=8;break;case Rl:return e=je(12,n,t,o|2),e.elementType=Rl,e.lanes=l,e;case Ml:return e=je(13,n,t,o),e.elementType=Ml,e.lanes=l,e;case Il:return e=je(19,n,t,o),e.elementType=Il,e.lanes=l,e;case ds:return Wo(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ss:i=10;break e;case cs:i=9;break e;case Ui:i=11;break e;case $i:i=14;break e;case st:i=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=je(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function Mt(e,t,n,r){return e=je(7,e,r,t),e.lanes=n,e}function Wo(e,t,n,r){return e=je(22,e,r,t),e.elementType=ds,e.lanes=n,e.stateNode={isHidden:!1},e}function Al(e,t,n){return e=je(6,e,null,t),e.lanes=n,e}function zl(e,t,n){return t=je(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Qf(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sl(0),this.expirationTimes=sl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ca(e,t,n,r,o,l,i,a,u){return e=new Qf(e,t,n,a,u),t===1?(t=1,l===!0&&(t|=8)):t=0,l=je(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ia(l),e}function Gf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function nd(e){if(!e)return Nt;e=e._reactInternals;e:{if(Kt(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ee(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(Ee(n))return nc(e,n,t)}return t}function rd(e,t,n,r,o,l,i,a,u){return e=Ca(n,r,!0,e,o,l,i,a,u),e.context=nd(null),n=e.current,r=ge(),o=Et(n),l=tt(r,o),l.callback=t!=null?t:null,wt(n,l,o),e.current.lanes=o,kr(e,o,r),Ce(e,r),e}function Ko(e,t,n,r){var o=t.current,l=ge(),i=Et(o);return n=nd(n),t.context===null?t.context=n:t.pendingContext=n,t=tt(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=wt(o,t,i),e!==null&&($e(e,o,i,l),Xr(e,o,i)),i}function Ao(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Tu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Sa(e,t){Tu(e,t),(e=e.alternate)&&Tu(e,t)}function Yf(){return null}var od=typeof reportError=="function"?reportError:function(e){console.error(e)};function Fa(e){this._internalRoot=e}Ho.prototype.render=Fa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));Ko(e,t,null,null)};Ho.prototype.unmount=Fa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vt(function(){Ko(null,e,null,null)}),t[rt]=null}};function Ho(e){this._internalRoot=e}Ho.prototype.unstable_scheduleHydration=function(e){if(e){var t=bs();e={blockedOn:null,target:e,priority:t};for(var n=0;n<dt.length&&t!==0&&t<dt[n].priority;n++);dt.splice(n,0,e),n===0&&Rs(e)}};function Na(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Qo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ru(){}function Xf(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var s=Ao(i);l.call(s)}}var i=rd(t,r,e,0,null,!1,!1,"",Ru);return e._reactRootContainer=i,e[rt]=i.current,sr(e.nodeType===8?e.parentNode:e),Vt(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var s=Ao(u);a.call(s)}}var u=Ca(e,0,!1,null,null,!1,!1,"",Ru);return e._reactRootContainer=u,e[rt]=u.current,sr(e.nodeType===8?e.parentNode:e),Vt(function(){Ko(t,u,n,r)}),u}function Go(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var a=o;o=function(){var u=Ao(i);a.call(u)}}Ko(t,i,e,o)}else i=Xf(n,t,e,o,r);return Ao(i)}_s=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Wn(t.pendingLanes);n!==0&&(Ki(t,n|1),Ce(t,J()),(R&6)===0&&(Sn=J()+500,zt()))}break;case 13:Vt(function(){var r=ot(e,1);if(r!==null){var o=ge();$e(r,e,1,o)}}),Sa(e,1)}};Hi=function(e){if(e.tag===13){var t=ot(e,134217728);if(t!==null){var n=ge();$e(t,e,134217728,n)}Sa(e,134217728)}};Ls=function(e){if(e.tag===13){var t=Et(e),n=ot(e,t);if(n!==null){var r=ge();$e(n,e,t,r)}Sa(e,t)}};bs=function(){return M};Ts=function(e,t){var n=M;try{return M=e,t()}finally{M=n}};Yl=function(e,t,n){switch(t){case"input":if($l(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Mo(r);if(!o)throw Error(C(90));fs(r),$l(r,o)}}}break;case"textarea":ms(e,n);break;case"select":t=n.value,t!=null&&pn(e,!!n.multiple,t,!1)}};Es=xa;Cs=Vt;var Zf={usingClientEntryPoint:!1,Events:[Cr,on,Mo,ws,ks,xa]},On={findFiberByHostInstance:Lt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Jf={bundleType:On.bundleType,version:On.version,rendererPackageName:On.rendererPackageName,rendererConfig:On.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:it.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ns(e),e===null?null:e.stateNode},findFiberByHostInstance:On.findFiberByHostInstance||Yf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wr.isDisabled&&Wr.supportsFiber)try{Lo=Wr.inject(Jf),Ge=Wr}catch{}}Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zf;Ae.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Na(t))throw Error(C(200));return Gf(e,t,null,n)};Ae.createRoot=function(e,t){if(!Na(e))throw Error(C(299));var n=!1,r="",o=od;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ca(e,1,!1,null,null,n,!1,r,o),e[rt]=t.current,sr(e.nodeType===8?e.parentNode:e),new Fa(t)};Ae.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=Ns(t),e=e===null?null:e.stateNode,e};Ae.flushSync=function(e){return Vt(e)};Ae.hydrate=function(e,t,n){if(!Qo(t))throw Error(C(200));return Go(null,e,t,!0,n)};Ae.hydrateRoot=function(e,t,n){if(!Na(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=od;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=rd(t,null,e,1,n!=null?n:null,o,!1,l,i),e[rt]=t.current,sr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Ho(t)};Ae.render=function(e,t,n){if(!Qo(t))throw Error(C(200));return Go(null,e,t,!1,n)};Ae.unmountComponentAtNode=function(e){if(!Qo(e))throw Error(C(40));return e._reactRootContainer?(Vt(function(){Go(null,null,e,!1,function(){e._reactRootContainer=null,e[rt]=null})}),!0):!1};Ae.unstable_batchedUpdates=xa;Ae.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Qo(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Go(e,t,n,!1,r)};Ae.version="18.3.1-next-f1338f8080-20240426";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Ae})(ls);var ld,Mu=ls.exports;ld=Mu.createRoot,Mu.hydrateRoot;/**
 * @remix-run/router v1.3.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vr(){return vr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},vr.apply(this,arguments)}var mt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(mt||(mt={}));const Iu="popstate";function qf(e){e===void 0&&(e={});function t(r,o){let{pathname:l,search:i,hash:a}=r.location;return Ai("",{pathname:l,search:i,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:xr(o)}return th(t,n,null,e)}function re(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function eh(){return Math.random().toString(36).substr(2,8)}function Ou(e,t){return{usr:e.state,key:e.key,idx:t}}function Ai(e,t,n,r){return n===void 0&&(n=null),vr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?An(t):t,{state:n,key:t&&t.key||r||eh()})}function xr(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function An(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function th(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:l=!1}=r,i=o.history,a=mt.Pop,u=null,s=m();s==null&&(s=0,i.replaceState(vr({},i.state,{idx:s}),""));function m(){return(i.state||{idx:null}).idx}function g(){a=mt.Pop;let B=m(),p=B==null?null:B-s;s=B,u&&u({action:a,location:k.location,delta:p})}function h(B,p){a=mt.Push;let d=Ai(k.location,B,p);n&&n(d,B),s=m()+1;let f=Ou(d,s),v=k.createHref(d);try{i.pushState(f,"",v)}catch{o.location.assign(v)}l&&u&&u({action:a,location:k.location,delta:1})}function x(B,p){a=mt.Replace;let d=Ai(k.location,B,p);n&&n(d,B),s=m();let f=Ou(d,s),v=k.createHref(d);i.replaceState(f,"",v),l&&u&&u({action:a,location:k.location,delta:0})}function E(B){let p=o.location.origin!=="null"?o.location.origin:o.location.href,d=typeof B=="string"?B:xr(B);return re(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let k={get action(){return a},get location(){return e(o,i)},listen(B){if(u)throw new Error("A history only accepts one active listener");return o.addEventListener(Iu,g),u=B,()=>{o.removeEventListener(Iu,g),u=null}},createHref(B){return t(o,B)},createURL:E,encodeLocation(B){let p=E(B);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:x,go(B){return i.go(B)}};return k}var Uu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Uu||(Uu={}));function nh(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?An(t):t,o=ud(r.pathname||"/",n);if(o==null)return null;let l=id(e);rh(l);let i=null;for(let a=0;i==null&&a<l.length;++a)i=ph(l[a],mh(o));return i}function id(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(l,i,a)=>{let u={relativePath:a===void 0?l.path||"":a,caseSensitive:l.caseSensitive===!0,childrenIndex:i,route:l};u.relativePath.startsWith("/")&&(re(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let s=St([r,u.relativePath]),m=n.concat(u);l.children&&l.children.length>0&&(re(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+s+'".')),id(l.children,t,m,s)),!(l.path==null&&!l.index)&&t.push({path:s,score:ch(s,l.index),routesMeta:m})};return e.forEach((l,i)=>{var a;if(l.path===""||!((a=l.path)!=null&&a.includes("?")))o(l,i);else for(let u of ad(l.path))o(l,i,u)}),t}function ad(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return o?[l,""]:[l];let i=ad(r.join("/")),a=[];return a.push(...i.map(u=>u===""?l:[l,u].join("/"))),o&&a.push(...i),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function rh(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:dh(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const oh=/^:\w+$/,lh=3,ih=2,ah=1,uh=10,sh=-2,$u=e=>e==="*";function ch(e,t){let n=e.split("/"),r=n.length;return n.some($u)&&(r+=sh),t&&(r+=ih),n.filter(o=>!$u(o)).reduce((o,l)=>o+(oh.test(l)?lh:l===""?ah:uh),r)}function dh(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function ph(e,t){let{routesMeta:n}=e,r={},o="/",l=[];for(let i=0;i<n.length;++i){let a=n[i],u=i===n.length-1,s=o==="/"?t:t.slice(o.length)||"/",m=fh({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},s);if(!m)return null;Object.assign(r,m.params);let g=a.route;l.push({params:r,pathname:St([o,m.pathname]),pathnameBase:xh(St([o,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(o=St([o,m.pathnameBase]))}return l}function fh(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=hh(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let l=o[0],i=l.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((s,m,g)=>{if(m==="*"){let h=a[g]||"";i=l.slice(0,l.length-h.length).replace(/(.)\/+$/,"$1")}return s[m]=gh(a[g]||"",m),s},{}),pathname:l,pathnameBase:i,pattern:e}}function hh(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Pa(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(i,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function mh(e){try{return decodeURI(e)}catch(t){return Pa(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function gh(e,t){try{return decodeURIComponent(e)}catch(n){return Pa(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function ud(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Pa(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function yh(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?An(e):e;return{pathname:n?n.startsWith("/")?n:vh(n,t):t,search:wh(r),hash:kh(o)}}function vh(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Dl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function sd(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function cd(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=An(e):(o=vr({},e),re(!o.pathname||!o.pathname.includes("?"),Dl("?","pathname","search",o)),re(!o.pathname||!o.pathname.includes("#"),Dl("#","pathname","hash",o)),re(!o.search||!o.search.includes("#"),Dl("#","search","hash",o)));let l=e===""||o.pathname==="",i=l?"/":o.pathname,a;if(r||i==null)a=n;else{let g=t.length-1;if(i.startsWith("..")){let h=i.split("/");for(;h[0]==="..";)h.shift(),g-=1;o.pathname=h.join("/")}a=g>=0?t[g]:"/"}let u=yh(o,a),s=i&&i!=="/"&&i.endsWith("/"),m=(l||i===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(s||m)&&(u.pathname+="/"),u}const St=e=>e.join("/").replace(/\/\/+/g,"/"),xh=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),wh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,kh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Eh(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Ch=["post","put","patch","delete"];[...Ch];var Yo={exports:{}},Xo={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sh=S.exports,Fh=Symbol.for("react.element"),Nh=Symbol.for("react.fragment"),Ph=Object.prototype.hasOwnProperty,Ah=Sh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zh={key:!0,ref:!0,__self:!0,__source:!0};function dd(e,t,n){var r,o={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Ph.call(t,r)&&!zh.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Fh,type:e,key:l,ref:i,props:o,_owner:Ah.current}}Xo.Fragment=Nh;Xo.jsx=dd;Xo.jsxs=dd;(function(e){e.exports=Xo})(Yo);const Dh=Yo.exports.Fragment,c=Yo.exports.jsx,y=Yo.exports.jsxs;/**
 * React Router v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zi(){return zi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zi.apply(this,arguments)}function Bh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const jh=typeof Object.is=="function"?Object.is:Bh,{useState:_h,useEffect:Lh,useLayoutEffect:bh,useDebugValue:Th}=bl;function Rh(e,t,n){const r=t(),[{inst:o},l]=_h({inst:{value:r,getSnapshot:t}});return bh(()=>{o.value=r,o.getSnapshot=t,Bl(o)&&l({inst:o})},[e,r,t]),Lh(()=>(Bl(o)&&l({inst:o}),e(()=>{Bl(o)&&l({inst:o})})),[e]),Th(r),r}function Bl(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!jh(n,r)}catch{return!0}}function Mh(e,t,n){return t()}const Ih=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Oh=!Ih,Uh=Oh?Mh:Rh;"useSyncExternalStore"in bl&&(e=>e.useSyncExternalStore)(bl);const pd=S.exports.createContext(null),fd=S.exports.createContext(null),Zo=S.exports.createContext(null),Jo=S.exports.createContext(null),Ht=S.exports.createContext({outlet:null,matches:[]}),hd=S.exports.createContext(null);function $h(e,t){let{relative:n}=t===void 0?{}:t;Fr()||re(!1);let{basename:r,navigator:o}=S.exports.useContext(Zo),{hash:l,pathname:i,search:a}=gd(e,{relative:n}),u=i;return r!=="/"&&(u=i==="/"?r:St([r,i])),o.createHref({pathname:u,search:a,hash:l})}function Fr(){return S.exports.useContext(Jo)!=null}function qo(){return Fr()||re(!1),S.exports.useContext(Jo).location}function Nr(){Fr()||re(!1);let{basename:e,navigator:t}=S.exports.useContext(Zo),{matches:n}=S.exports.useContext(Ht),{pathname:r}=qo(),o=JSON.stringify(sd(n).map(a=>a.pathnameBase)),l=S.exports.useRef(!1);return S.exports.useEffect(()=>{l.current=!0}),S.exports.useCallback(function(a,u){if(u===void 0&&(u={}),!l.current)return;if(typeof a=="number"){t.go(a);return}let s=cd(a,JSON.parse(o),r,u.relative==="path");e!=="/"&&(s.pathname=s.pathname==="/"?e:St([e,s.pathname])),(u.replace?t.replace:t.push)(s,u.state,u)},[e,t,o,r])}function md(){let{matches:e}=S.exports.useContext(Ht),t=e[e.length-1];return t?t.params:{}}function gd(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=S.exports.useContext(Ht),{pathname:o}=qo(),l=JSON.stringify(sd(r).map(i=>i.pathnameBase));return S.exports.useMemo(()=>cd(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function Vh(e,t){Fr()||re(!1);let{navigator:n}=S.exports.useContext(Zo),r=S.exports.useContext(fd),{matches:o}=S.exports.useContext(Ht),l=o[o.length-1],i=l?l.params:{};l&&l.pathname;let a=l?l.pathnameBase:"/";l&&l.route;let u=qo(),s;if(t){var m;let k=typeof t=="string"?An(t):t;a==="/"||((m=k.pathname)==null?void 0:m.startsWith(a))||re(!1),s=k}else s=u;let g=s.pathname||"/",h=a==="/"?g:g.slice(a.length)||"/",x=nh(e,{pathname:h}),E=Qh(x&&x.map(k=>Object.assign({},k,{params:Object.assign({},i,k.params),pathname:St([a,n.encodeLocation?n.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?a:St([a,n.encodeLocation?n.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),o,r||void 0);return t&&E?c(Jo.Provider,{value:{location:zi({pathname:"/",search:"",hash:"",state:null,key:"default"},s),navigationType:mt.Pop},children:E}):E}function Wh(){let e=Zh(),t=Eh(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null;return y(Dh,{children:[c("h2",{children:"Unexpected Application Error!"}),c("h3",{style:{fontStyle:"italic"},children:t}),n?c("pre",{style:{padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},children:n}):null,null]})}class Kh extends S.exports.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?c(Ht.Provider,{value:this.props.routeContext,children:c(hd.Provider,{value:this.state.error,children:this.props.component})}):this.props.children}}function Hh(e){let{routeContext:t,match:n,children:r}=e,o=S.exports.useContext(pd);return o&&o.static&&o.staticContext&&n.route.errorElement&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),c(Ht.Provider,{value:t,children:r})}function Qh(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,o=n==null?void 0:n.errors;if(o!=null){let l=r.findIndex(i=>i.route.id&&(o==null?void 0:o[i.route.id]));l>=0||re(!1),r=r.slice(0,Math.min(r.length,l+1))}return r.reduceRight((l,i,a)=>{let u=i.route.id?o==null?void 0:o[i.route.id]:null,s=n?i.route.errorElement||c(Wh,{}):null,m=t.concat(r.slice(0,a+1)),g=()=>c(Hh,{match:i,routeContext:{outlet:l,matches:m},children:u?s:i.route.element!==void 0?i.route.element:l});return n&&(i.route.errorElement||a===0)?c(Kh,{location:n.location,component:s,error:u,children:g(),routeContext:{outlet:null,matches:m}}):g()},null)}var Vu;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(Vu||(Vu={}));var zo;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(zo||(zo={}));function Gh(e){let t=S.exports.useContext(fd);return t||re(!1),t}function Yh(e){let t=S.exports.useContext(Ht);return t||re(!1),t}function Xh(e){let t=Yh(),n=t.matches[t.matches.length-1];return n.route.id||re(!1),n.route.id}function Zh(){var e;let t=S.exports.useContext(hd),n=Gh(zo.UseRouteError),r=Xh(zo.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function ro(e){re(!1)}function Jh(e){let{basename:t="/",children:n=null,location:r,navigationType:o=mt.Pop,navigator:l,static:i=!1}=e;Fr()&&re(!1);let a=t.replace(/^\/*/,"/"),u=S.exports.useMemo(()=>({basename:a,navigator:l,static:i}),[a,l,i]);typeof r=="string"&&(r=An(r));let{pathname:s="/",search:m="",hash:g="",state:h=null,key:x="default"}=r,E=S.exports.useMemo(()=>{let k=ud(s,a);return k==null?null:{pathname:k,search:m,hash:g,state:h,key:x}},[a,s,m,g,h,x]);return E==null?null:c(Zo.Provider,{value:u,children:c(Jo.Provider,{children:n,value:{location:E,navigationType:o}})})}function qh(e){let{children:t,location:n}=e,r=S.exports.useContext(pd),o=r&&!t?r.router.routes:Di(t);return Vh(o,n)}var Wu;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Wu||(Wu={}));new Promise(()=>{});function Di(e,t){t===void 0&&(t=[]);let n=[];return S.exports.Children.forEach(e,(r,o)=>{if(!S.exports.isValidElement(r))return;if(r.type===S.exports.Fragment){n.push.apply(n,Di(r.props.children,t));return}r.type!==ro&&re(!1),!r.props.index||!r.props.children||re(!1);let l=[...t,o],i={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(i.children=Di(r.props.children,l)),n.push(i)}),n}/**
 * React Router DOM v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function e0(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function t0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function n0(e,t){return e.button===0&&(!t||t==="_self")&&!t0(e)}const r0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function o0(e){let{basename:t,children:n,window:r}=e,o=S.exports.useRef();o.current==null&&(o.current=qf({window:r,v5Compat:!0}));let l=o.current,[i,a]=S.exports.useState({action:l.action,location:l.location});return S.exports.useLayoutEffect(()=>l.listen(a),[l]),c(Jh,{basename:t,children:n,location:i.location,navigationType:i.action,navigator:l})}const l0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Do=S.exports.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:l,replace:i,state:a,target:u,to:s,preventScrollReset:m}=t,g=e0(t,r0),h=typeof s=="string"?s:xr(s),x=/^[a-z+]+:\/\//i.test(h)||h.startsWith("//"),E=h,k=!1;if(l0&&x){let f=new URL(window.location.href),v=h.startsWith("//")?new URL(f.protocol+h):new URL(h);v.origin===f.origin?E=v.pathname+v.search+v.hash:k=!0}let B=$h(E,{relative:o}),p=i0(E,{replace:i,state:a,target:u,preventScrollReset:m,relative:o});function d(f){r&&r(f),f.defaultPrevented||p(f)}return c("a",{...g,href:x?h:B,onClick:k||l?r:d,ref:n,target:u})});var Ku;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Ku||(Ku={}));var Hu;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Hu||(Hu={}));function i0(e,t){let{target:n,replace:r,state:o,preventScrollReset:l,relative:i}=t===void 0?{}:t,a=Nr(),u=qo(),s=gd(e,{relative:i});return S.exports.useCallback(m=>{if(n0(m,n)){m.preventDefault();let g=r!==void 0?r:xr(u)===xr(s);a(e,{replace:g,state:o,preventScrollReset:l,relative:i})}},[u,a,s,r,o,n,e,l,i])}/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var a0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),U=(e,t)=>{const n=S.exports.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:l=2,absoluteStrokeWidth:i,className:a="",children:u,...s},m)=>S.exports.createElement("svg",{ref:m,...a0,width:o,height:o,stroke:r,strokeWidth:i?Number(l)*24/Number(o):l,className:["lucide",`lucide-${u0(e)}`,a].join(" "),...s},[...t.map(([g,h])=>S.exports.createElement(g,h)),...Array.isArray(u)?u:[u]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jl=U("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bo=U("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bi=U("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _l=U("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=U("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qu=U("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yd=U("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vd=U("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ji=U("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=U("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=U("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gu=U("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=U("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=U("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=U("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=U("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=U("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=U("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jo=U("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=U("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aa=U("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const el=U("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=U("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=U("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _o=U("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=U("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function w0(e,t,n){return window.go.main.App.CreateChapter(e,t,n)}function k0(e,t,n,r){return window.go.main.App.CreateCharacter(e,t,n,r)}function E0(e,t,n,r,o,l){return window.go.main.App.CreateParagraph(e,t,n,r,o,l)}function C0(e,t){return window.go.main.App.CreateProject(e,t)}function S0(e){return window.go.main.App.DeleteChapter(e)}function F0(e){return window.go.main.App.DeleteCharacter(e)}function N0(e){return window.go.main.App.DeleteParagraph(e)}function P0(e){return window.go.main.App.DeleteProject(e)}function A0(e,t){return window.go.main.App.DeleteProjectKnownCharacter(e,t)}function z0(e){return window.go.main.App.GetChapter(e)}function D0(e){return window.go.main.App.GetChapters(e)}function B0(e){return window.go.main.App.GetCharacter(e)}function j0(e){return window.go.main.App.GetCharacters(e)}function _0(e){return window.go.main.App.GetParagraph(e)}function L0(e){return window.go.main.App.GetParagraphs(e)}function b0(e){return window.go.main.App.GetProject(e)}function T0(e){return window.go.main.App.GetProjectKnownCharacters(e)}function R0(e){return window.go.main.App.GetProjectLLMApiKey(e)}function M0(){return window.go.main.App.GetProjects()}function I0(e){return window.go.main.App.GetVoice(e)}function O0(){return window.go.main.App.GetVoices()}function U0(e,t,n){return window.go.main.App.Log(e,t,n)}function $0(e,t){return window.go.main.App.ReorderChapters(e,t)}function V0(e,t){return window.go.main.App.SetProjectLLMApiKey(e,t)}function W0(e){return window.go.main.App.SplitParagraph(e)}function K0(e,t,n){return window.go.main.App.UpdateChapter(e,t,n)}function H0(e,t,n,r){return window.go.main.App.UpdateCharacter(e,t,n,r)}function Q0(e,t,n,r,o,l,i,a,u){return window.go.main.App.UpdateParagraph(e,t,n,r,o,l,i,a,u)}function G0(e,t,n){return window.go.main.App.UpdateProject(e,t,n)}function Y0(e,t){return window.go.main.App.UpdateProjectKnownCharacters(e,t)}const K={createProject:async(e,t)=>{try{return await C0(e,t)}catch(n){throw console.error("Failed to create project:",n),n}},getProjects:async()=>{try{return await M0()||[]}catch(e){throw console.error("Failed to get projects:",e),e}},getProject:async e=>{try{return await b0(e)}catch(t){throw console.error("Failed to get project:",t),t}},updateProject:async(e,t,n)=>{try{await G0(e,t,n)}catch(r){throw console.error("Failed to update project:",r),r}},deleteProject:async e=>{try{await P0(e)}catch(t){throw console.error("Failed to delete project:",t),t}},setProjectLLMApiKey:async(e,t)=>{try{await V0(e,t)}catch(n){throw console.error("Failed to set project LLM API key:",n),n}},getProjectLLMApiKey:async e=>{try{return await R0(e)||""}catch(t){throw console.error("Failed to get project LLM API key:",t),t}},getProjectKnownCharacters:async e=>{try{return await T0(e)||[]}catch(t){throw console.error("Failed to get project known characters:",t),t}},updateProjectKnownCharacters:async(e,t)=>{try{await Y0(e,t)}catch(n){throw console.error("Failed to update project known characters:",n),n}},deleteProjectKnownCharacter:async(e,t)=>{try{await A0(e,t)}catch(n){throw console.error("Failed to delete project known character:",n),n}},setKnownCharacterVoice:async(e,t,n)=>{try{const o=(await K.getProjectKnownCharacters(e)).map(l=>l.name===t?{...l,voiceId:n}:l);await K.updateProjectKnownCharacters(e,o)}catch(r){throw console.error("Failed to set known character voice:",r),r}},createChapter:async(e,t,n)=>{try{return await w0(e,t,n)}catch(r){throw console.error("Failed to create chapter:",r),r}},getChapters:async e=>{try{return await D0(e)||[]}catch(t){throw console.error("Failed to get chapters:",t),t}},getChapter:async e=>{try{return await z0(e)}catch(t){throw console.error("Failed to get chapter:",t),t}},updateChapter:async(e,t,n)=>{try{await K0(e,t,n)}catch(r){throw console.error("Failed to update chapter:",r),r}},deleteChapter:async e=>{try{await S0(e)}catch(t){throw console.error("Failed to delete chapter:",t),t}},reorderChapters:async(e,t)=>{try{await $0(e,t)}catch(n){throw console.error("Failed to reorder chapters:",n),n}},createParagraph:async(e,t,n,r,o,l)=>{try{return await E0(e,t,n,r,o,l)}catch(i){throw console.error("Failed to create paragraph:",i),i}},getParagraphs:async e=>{try{return await L0(e)||[]}catch(t){throw console.error("Failed to get paragraphs:",t),t}},getParagraph:async e=>{try{return await _0(e)}catch(t){throw console.error("Failed to get paragraph:",t),t}},updateParagraph:async(e,t,n,r,o,l,i="",a=0,u=0)=>{try{await Q0(e,t,n,r,o,l,i,a,u)}catch(s){throw console.error("Failed to update paragraph:",s),s}},deleteParagraph:async e=>{try{await N0(e)}catch(t){throw console.error("Failed to delete paragraph:",t),t}},splitParagraph:async e=>{try{return await W0(e)||[]}catch(t){throw console.error("Failed to split paragraph:",t),t}},createCharacter:async(e,t,n,r)=>{try{return await k0(e,t,n,r)}catch(o){throw console.error("Failed to create character:",o),o}},getCharacters:async e=>{try{return await j0(e)||[]}catch(t){throw console.error("Failed to get characters:",t),t}},getCharacter:async e=>{try{return await B0(e)}catch(t){throw console.error("Failed to get character:",t),t}},updateCharacter:async(e,t,n,r)=>{try{await H0(e,t,n,r)}catch(o){throw console.error("Failed to update character:",o),o}},deleteCharacter:async e=>{try{await F0(e)}catch(t){throw console.error("Failed to delete character:",t),t}},getVoices:async()=>{try{return await O0()||[]}catch(e){throw console.error("Failed to get voices:",e),e}},getVoice:async e=>{try{return await I0(e)}catch(t){throw console.error("Failed to get voice:",t),t}},analyzeText:async e=>{throw new Error("Not implemented")},generateAudio:async(e,t,n,r)=>{throw new Error("Not implemented")},generateBatchAudio:async e=>{throw new Error("Not implemented")},log:async(e,t,n)=>{try{await U0(e,t,n)}catch(r){console.error("Failed to send log to backend:",r)}}},X0=()=>{const e=Nr(),[t,n]=S.exports.useState([]),[r,o]=S.exports.useState(!1),[l,i]=S.exports.useState(!1),[a,u]=S.exports.useState({name:"",description:""}),s=async()=>{o(!0);try{const x=await K.getProjects();n(x)}catch(x){console.error("Failed to load projects:",x)}o(!1)};S.exports.useEffect(()=>{s()},[]);const m=async x=>{if(x.preventDefault(),!!a.name.trim()){o(!0);try{await K.createProject(a.name,a.description),u({name:"",description:""}),i(!1),s()}catch(E){console.error("Failed to create project:",E)}o(!1)}},g=async x=>{if(!!window.confirm("\u786E\u5B9A\u8981\u5220\u9664\u6B64\u5DE5\u7A0B\u5417\uFF1F")){o(!0);try{await K.deleteProject(x),s()}catch(E){console.error("Failed to delete project:",E)}o(!1)}},h=x=>{e(`/project/${x}`)};return y("div",{className:"home-page",children:[y("div",{className:"page-header",children:[y("div",{className:"header-content",children:[c(Bi,{size:28,className:"header-icon"}),y("div",{children:[c("h1",{children:"\u542C\u58A8\u8BED - \u6709\u58F0\u5C0F\u8BF4\u5236\u4F5C"}),c("p",{children:"\u521B\u5EFA\u3001\u7F16\u8F91\u548C\u7BA1\u7406\u60A8\u7684\u6709\u58F0\u5C0F\u8BF4\u5DE5\u7A0B"})]})]}),y("button",{className:"create-project-btn",onClick:()=>i(!0),disabled:r,children:[c(xd,{size:20}),"\u521B\u5EFA\u65B0\u5DE5\u7A0B"]})]}),c("div",{className:"projects-container",children:c("div",{className:"projects-list",children:r&&t.length===0?y("div",{className:"loading",children:[c("div",{className:"spinner"}),c("p",{children:"\u52A0\u8F7D\u4E2D..."})]}):t.length===0?y("div",{className:"empty-state",children:[c(c0,{size:64}),c("h2",{children:"\u6682\u65E0\u5DE5\u7A0B"}),c("p",{children:"\u70B9\u51FB\u4E0A\u65B9\u6309\u94AE\u521B\u5EFA\u60A8\u7684\u7B2C\u4E00\u4E2A\u6709\u58F0\u5C0F\u8BF4\u5DE5\u7A0B"})]}):t.map((x,E)=>y("div",{className:"project-item",children:[y("div",{className:"project-info",onClick:()=>h(x.id),children:[c("div",{className:"project-index",children:E+1}),y("div",{className:"project-content",children:[c("h3",{children:x.name}),c("p",{className:"project-description",children:x.description||"\u6682\u65E0\u63CF\u8FF0"}),y("div",{className:"project-meta",children:[y("span",{children:["\u521B\u5EFA\u65F6\u95F4: ",new Date(x.createdAt).toLocaleDateString()]}),y("span",{children:["\u66F4\u65B0\u65F6\u95F4: ",new Date(x.updatedAt).toLocaleDateString()]})]})]})]}),y("div",{className:"project-actions",children:[y("button",{className:"btn-primary",onClick:k=>{k.stopPropagation(),h(x.id)},disabled:r,title:"\u6253\u5F00\u9879\u76EE",children:[c(vd,{size:16}),"\u6253\u5F00"]}),y("button",{className:"btn-danger",onClick:k=>{k.stopPropagation(),g(x.id)},disabled:r,children:[c(el,{size:16}),"\u5220\u9664"]})]})]},x.id))})}),l&&c("div",{className:"modal",children:y("div",{className:"modal-content",children:[y("div",{className:"modal-header",children:[c("h2",{children:"\u521B\u5EFA\u65B0\u5DE5\u7A0B"}),c("button",{className:"modal-close",onClick:()=>i(!1),children:"\xD7"})]}),y("form",{onSubmit:m,children:[y("div",{className:"form-group",children:[c("label",{htmlFor:"project-name",children:"\u5DE5\u7A0B\u540D\u79F0"}),c("input",{type:"text",id:"project-name",value:a.name,onChange:x=>u({...a,name:x.target.value}),placeholder:"\u8BF7\u8F93\u5165\u5DE5\u7A0B\u540D\u79F0",required:!0})]}),y("div",{className:"form-group",children:[c("label",{htmlFor:"project-description",children:"\u5DE5\u7A0B\u63CF\u8FF0"}),c("textarea",{id:"project-description",value:a.description,onChange:x=>u({...a,description:x.target.value}),placeholder:"\u8BF7\u8F93\u5165\u5DE5\u7A0B\u63CF\u8FF0",rows:3})]}),y("div",{className:"modal-footer",children:[c("button",{type:"button",className:"btn-secondary",onClick:()=>i(!1),disabled:r,children:"\u53D6\u6D88"}),c("button",{type:"submit",className:"btn-primary",disabled:r,children:"\u786E\u5B9A"})]})]})]})}),c("style",{children:`
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
      `})]})},Z0=({projectId:e,onChapterSelect:t})=>{const n=Nr(),[r,o]=S.exports.useState([]),[l,i]=S.exports.useState(!1),[a,u]=S.exports.useState(!1),[s,m]=S.exports.useState({title:"",content:""}),g=async()=>{i(!0);try{const p=await K.getChapters(e);o(p)}catch(p){console.error("Failed to load chapters:",p)}i(!1)};S.exports.useEffect(()=>{g()},[e]);const h=async p=>{if(p.preventDefault(),!!s.title.trim()){i(!0);try{await K.createChapter(e,s.title,s.content),m({title:"",content:""}),u(!1),g()}catch(d){console.error("Failed to create chapter:",d)}i(!1)}},x=async p=>{if(!!window.confirm("\u786E\u5B9A\u8981\u5220\u9664\u6B64\u7AE0\u8282\u5417\uFF1F")){i(!0);try{await K.deleteChapter(p),g()}catch(d){console.error("Failed to delete chapter:",d)}i(!1)}},E=(p,d)=>{p.dataTransfer.setData("text/plain",d.toString())},k=p=>{p.preventDefault()},B=async(p,d)=>{p.preventDefault();const f=parseInt(p.dataTransfer.getData("text/plain"));if(f!==d){const v=[...r],[F]=v.splice(f,1);v.splice(d,0,F);const N=v.map(A=>A.id);try{await K.reorderChapters(e,N),o(v)}catch(A){console.error("Failed to reorder chapters:",A)}}};return y("div",{className:"chapter-manager",children:[y("div",{className:"chapter-manager-header",children:[y("div",{className:"header-left",children:[c(ji,{size:20}),c("h2",{children:"\u7AE0\u8282\u7BA1\u7406"})]}),y("button",{className:"btn-primary",onClick:()=>u(!0),disabled:l,children:[c(xd,{size:16}),"\u65B0\u5EFA\u7AE0\u8282"]})]}),c("div",{className:"chapter-list",children:l&&r.length===0?y("div",{className:"loading-state",children:[c("div",{className:"spinner"}),c("p",{children:"\u52A0\u8F7D\u4E2D..."})]}):r.length===0?y("div",{className:"empty-state",children:[c(p0,{size:48}),c("h3",{children:"\u6682\u65E0\u7AE0\u8282"}),c("p",{children:"\u70B9\u51FB\u4E0A\u65B9\u6309\u94AE\u521B\u5EFA\u60A8\u7684\u7B2C\u4E00\u4E2A\u7AE0\u8282"})]}):r.map((p,d)=>y("div",{className:"chapter-item",draggable:!0,onDragStart:f=>E(f,d),onDragOver:k,onDrop:f=>B(f,d),children:[y("div",{className:"chapter-info",onClick:()=>n(`/project/${e}/chapter/${p.id}`),children:[c("div",{className:"chapter-index",children:d+1}),y("div",{className:"chapter-content",children:[c("h4",{children:p.title}),y("p",{className:"chapter-preview",children:[p.content.slice(0,50),p.content.length>50?"...":""]}),y("div",{className:"chapter-meta",children:[y("span",{children:["\u521B\u5EFA\u65F6\u95F4: ",new Date(p.createdAt).toLocaleDateString()]}),y("span",{children:["\u66F4\u65B0\u65F6\u95F4: ",new Date(p.updatedAt).toLocaleDateString()]})]})]})]}),y("div",{className:"chapter-actions",children:[c(d0,{size:20,className:"drag-handle"}),y("button",{className:"btn-primary",onClick:f=>{f.stopPropagation(),n(`/project/${e}/chapter/${p.id}`)},disabled:l,title:"\u6253\u5F00\u7AE0\u8282\u7F16\u8F91\u5668",children:[c(vd,{size:16}),"\u6253\u5F00"]}),y("button",{className:"btn-danger",onClick:f=>{f.stopPropagation(),x(p.id)},disabled:l,children:[c(el,{size:16}),"\u5220\u9664"]})]})]},p.id))}),a&&c("div",{className:"modal",children:y("div",{className:"modal-content",children:[y("div",{className:"modal-header",children:[c("h2",{children:"\u521B\u5EFA\u65B0\u7AE0\u8282"}),c("button",{className:"modal-close",onClick:()=>u(!1),disabled:l,children:c(_o,{size:24})})]}),y("form",{onSubmit:h,children:[y("div",{className:"form-group",children:[c("label",{htmlFor:"chapter-title",children:"\u7AE0\u8282\u6807\u9898"}),c("input",{type:"text",id:"chapter-title",value:s.title,onChange:p=>m({...s,title:p.target.value}),placeholder:"\u8BF7\u8F93\u5165\u7AE0\u8282\u6807\u9898",required:!0})]}),y("div",{className:"form-group",children:[c("label",{htmlFor:"chapter-content",children:"\u7AE0\u8282\u5185\u5BB9"}),c("textarea",{id:"chapter-content",value:s.content,onChange:p=>m({...s,content:p.target.value}),placeholder:"\u8BF7\u8F93\u5165\u7AE0\u8282\u5185\u5BB9",rows:6})]}),y("div",{className:"modal-footer",children:[c("button",{type:"button",className:"btn-secondary",onClick:()=>u(!1),disabled:l,children:"\u53D6\u6D88"}),c("button",{type:"submit",className:"btn-primary",disabled:l,children:"\u786E\u5B9A"})]})]})]})}),c("style",{children:`
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
      `})]})},J0=({projectId:e})=>{const[t,n]=S.exports.useState([]),[r,o]=S.exports.useState([]),[l,i]=S.exports.useState(!1);S.exports.useEffect(()=>{e&&a()},[e]);const a=async()=>{i(!0);try{const[m,g]=await Promise.all([K.getProjectKnownCharacters(e),K.getVoices()]);n(m),o(g)}catch(m){console.error("Failed to load data:",m)}i(!1)},u=async m=>{if(!!window.confirm(`\u786E\u5B9A\u8981\u5220\u9664\u89D2\u8272 "${m}" \u5417\uFF1F`)){i(!0);try{await K.deleteProjectKnownCharacter(e,m),a()}catch(g){console.error("Failed to delete known character:",g)}i(!1)}},s=async(m,g)=>{try{n(h=>h.map(x=>x.name===m?{...x,voiceId:g}:x)),await K.setKnownCharacterVoice(e,m,g)}catch(h){console.error("Failed to set character voice:",h),a()}};return y("div",{className:"role-manager",children:[c("div",{className:"role-manager-header",children:y("div",{className:"header-left",children:[c(_l,{size:20}),c("h2",{children:"\u5DF2\u77E5\u89D2\u8272"}),t.length>0&&c("span",{className:"count-badge",children:t.length})]})}),c("div",{className:"role-list",children:l&&t.length===0?y("div",{className:"loading-state",children:[c("div",{className:"spinner"}),c("p",{children:"\u52A0\u8F7D\u4E2D..."})]}):t.length===0?y("div",{className:"empty-state",children:[c(_l,{size:48}),c("h3",{children:"\u6682\u672A\u77E5\u89D2\u8272"}),c("p",{children:"\u4F7F\u7528 LLM \u89E3\u6790\u6587\u672C\u540E\uFF0C\u8BC6\u522B\u5230\u7684\u89D2\u8272\u4F1A\u663E\u793A\u5728\u8FD9\u91CC"})]}):c("div",{className:"role-grid",children:t.map((m,g)=>y("div",{className:"role-card known-character-card",children:[c("div",{className:"role-avatar known-avatar",children:c(_l,{size:28})}),y("div",{className:"role-info",children:[c("h4",{children:m.name}),m.description&&c("p",{className:"role-description",children:m.description}),y("div",{className:"voice-select-row",children:[c(wd,{size:14}),y("select",{className:"voice-select",value:m.voiceId||"",onChange:h=>s(m.name,h.target.value),disabled:l,children:[c("option",{value:"",children:"\u9009\u62E9\u97F3\u8272"}),r.map(h=>c("option",{value:h.id,children:h.name},h.id))]})]}),y("div",{className:"known-badge",children:[c(Aa,{size:12}),c("span",{children:"AI \u8BC6\u522B"})]})]}),c("div",{className:"role-actions",children:c("button",{className:"btn-icon btn-danger",onClick:()=>u(m.name),disabled:l,title:"\u5220\u9664",children:c(el,{size:16})})})]},`${m.name}-${g}`))})}),c("style",{children:`
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

        .count-badge {
          margin-left: 8px;
          padding: 2px 10px;
          background: #10B981;
          color: white;
          border-radius: 12px;
          font-size: 0.8rem;
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

        .role-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 12px;
        }

        .role-card {
          background: linear-gradient(145deg, #1A2A35 0%, #16232D 100%);
          border: 1px solid #2D4A3E;
          border-radius: 12px;
          padding: 16px;
          display: flex;
          gap: 14px;
          transition: all 0.2s ease;
        }

        .role-card:hover {
          background: linear-gradient(145deg, #1E303A 0%, #1A2832 100%);
          border-color: #10B981;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(16, 185, 129, 0.15);
        }

        .role-avatar {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.25);
        }

        .role-avatar.known-avatar {
          background: linear-gradient(135deg, #10B981 0%, #059669 100%);
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

        .voice-select-row {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 8px;
        }

        .voice-select-row svg {
          color: #00A8FF;
          flex-shrink: 0;
        }

        .voice-select {
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

        .voice-select:hover {
          border-color: #00A8FF;
        }

        .voice-select:focus {
          outline: none;
          border-color: #00A8FF;
          box-shadow: 0 0 0 2px rgba(0, 168, 255, 0.2);
        }

        .known-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          background-color: rgba(16, 185, 129, 0.12);
          color: #10B981;
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
      `})]})},q0=()=>{const{id:e}=md(),t=Nr(),[n,r]=S.exports.useState(null),[o,l]=S.exports.useState(!1),[i,a]=S.exports.useState(!1),[u,s]=S.exports.useState(!1),[m,g]=S.exports.useState({name:"",description:""}),[h,x]=S.exports.useState(""),[E,k]=S.exports.useState(!1);S.exports.useEffect(()=>{e&&B(parseInt(e))},[e]);const B=async v=>{l(!0);try{const F=await K.getProject(v);r(F),F&&(g({name:F.name,description:F.description}),x(F.llmApiKey||""))}catch(F){console.error("Failed to load project:",F)}l(!1)},p=async()=>{if(!!e){l(!0);try{await K.updateProject(parseInt(e),m.name,m.description),a(!1),B(parseInt(e))}catch(v){console.error("Failed to update project:",v)}l(!1)}},d=async()=>{if(!!e){k(!0);try{await K.setProjectLLMApiKey(parseInt(e),h),s(!1),B(parseInt(e))}catch(v){console.error("Failed to save API key:",v)}k(!1)}},f=v=>v?v.length<=8?v:v.slice(0,4)+"..."+v.slice(-4):"\u672A\u8BBE\u7F6E";return o&&!n?c("div",{className:"project-details-page",children:y("div",{className:"loading-container",children:[c("div",{className:"spinner"}),c("p",{children:"\u52A0\u8F7D\u4E2D..."})]})}):n?y("div",{className:"project-details-page",children:[c("header",{className:"page-header",children:y("div",{className:"header-inner",children:[y("div",{className:"header-left",children:[y(Do,{to:"/",className:"back-button",children:[c(Bo,{size:18}),c("span",{children:"\u8FD4\u56DE"})]}),c("div",{className:"divider"}),y("div",{className:"project-title",children:[c(Bi,{size:20,className:"title-icon"}),y("div",{children:[c("h1",{children:n.name}),c("p",{className:"subtitle",children:"\u6709\u58F0\u5C0F\u8BF4\u5236\u4F5C\u5DE5\u7A0B"})]})]})]}),c("div",{className:"header-right",children:c("button",{className:"btn-secondary",onClick:()=>t("/"),children:"\u8FD4\u56DE\u9996\u9875"})})]})}),c("main",{className:"main-content",children:y("div",{className:"content-wrapper",children:[y("section",{className:"project-info-section",children:[y("div",{className:"section-header",children:[y("h2",{children:[c(Aa,{size:18}),"\u9879\u76EE\u6982\u89C8"]}),!i&&c("button",{className:"btn-ghost",onClick:()=>a(!0),disabled:o,children:"\u7F16\u8F91\u4FE1\u606F"})]}),c("div",{className:"project-info-card",children:i?y("div",{className:"project-info-edit",children:[y("div",{className:"form-grid",children:[y("div",{className:"form-group full-width",children:[c("label",{htmlFor:"project-name",children:"\u9879\u76EE\u540D\u79F0"}),c("input",{id:"project-name",type:"text",value:m.name,onChange:v=>g({...m,name:v.target.value}),placeholder:"\u8BF7\u8F93\u5165\u9879\u76EE\u540D\u79F0",disabled:o})]}),y("div",{className:"form-group full-width",children:[c("label",{htmlFor:"project-description",children:"\u9879\u76EE\u63CF\u8FF0"}),c("textarea",{id:"project-description",value:m.description,onChange:v=>g({...m,description:v.target.value}),placeholder:"\u8BF7\u8F93\u5165\u9879\u76EE\u63CF\u8FF0",rows:3,disabled:o})]})]}),y("div",{className:"form-actions",children:[y("button",{className:"btn-secondary",onClick:()=>{a(!1),g({name:n.name,description:n.description})},disabled:o,children:[c(_o,{size:16}),"\u53D6\u6D88"]}),y("button",{className:"btn-primary",onClick:p,disabled:o,children:[c(jo,{size:16}),"\u4FDD\u5B58\u66F4\u6539"]})]})]}):y("div",{className:"project-info-content",children:[y("div",{className:"info-grid",children:[y("div",{className:"info-item",children:[c("div",{className:"info-label",children:"\u9879\u76EE\u540D\u79F0"}),c("div",{className:"info-value",children:n.name})]}),y("div",{className:"info-item",children:[c("div",{className:"info-label",children:"\u9879\u76EE\u63CF\u8FF0"}),c("div",{className:"info-value",children:n.description||"\u6682\u65E0\u63CF\u8FF0"})]}),y("div",{className:"info-item",children:[c("div",{className:"info-label",children:"API Key"}),y("div",{className:"info-value api-key-display",children:[c(Gu,{size:14}),c("span",{children:f(n.llmApiKey)})]})]})]}),y("div",{className:"meta-row",children:[y("div",{className:"meta-item",children:[c(s0,{size:14}),y("span",{children:["\u521B\u5EFA\u4E8E ",new Date(n.createdAt).toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric"})]})]}),y("div",{className:"meta-item",children:[c(yd,{size:14}),y("span",{children:["\u66F4\u65B0\u4E8E ",new Date(n.updatedAt).toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric"})]})]})]})]})})]}),y("section",{className:"api-key-section",children:[y("div",{className:"section-header",children:[y("h2",{children:[c(Gu,{size:18}),"\u6587\u672C\u5927\u6A21\u578B API Key"]}),!u&&c("button",{className:"btn-ghost",onClick:()=>s(!0),disabled:o,children:"\u914D\u7F6E"})]}),c("div",{className:"api-key-card",children:u?y("div",{className:"api-key-edit",children:[y("div",{className:"form-group",children:[c("label",{htmlFor:"llm-api-key",children:"API Key"}),c("input",{id:"llm-api-key",type:"password",value:h,onChange:v=>x(v.target.value),placeholder:"\u8BF7\u8F93\u5165\u6587\u672C\u5927\u6A21\u578B API Key",disabled:E}),c("p",{className:"help-text",children:"\u8F93\u5165\u706B\u5C71\u5F15\u64CE\u6587\u672C\u5927\u6A21\u578B API Key"})]}),y("div",{className:"form-actions",children:[y("button",{className:"btn-secondary",onClick:()=>{s(!1),x(n.llmApiKey||"")},disabled:E,children:[c(_o,{size:16}),"\u53D6\u6D88"]}),y("button",{className:"btn-primary",onClick:d,disabled:E,children:[c(jo,{size:16}),E?"\u4FDD\u5B58\u4E2D...":"\u4FDD\u5B58"]})]})]}):y("div",{className:"api-key-content",children:[c("div",{className:"api-key-description",children:c("p",{children:"\u5728\u6B64\u9879\u76EE\u4E2D\u4F7F\u7528\u81EA\u5B9A\u4E49\u7684 API Key \u6765\u8C03\u7528\u6587\u672C\u5927\u6A21\u578B\u670D\u52A1\u3002\u5982\u679C\u672A\u8BBE\u7F6E\uFF0C\u5C06\u4F7F\u7528\u7CFB\u7EDF\u9ED8\u8BA4\u914D\u7F6E\u3002"})}),y("div",{className:"api-key-status",children:[c("div",{className:`status-indicator ${n.llmApiKey?"active":"inactive"}`,children:n.llmApiKey?"\u5DF2\u914D\u7F6E":"\u672A\u914D\u7F6E"}),n.llmApiKey&&c("span",{className:"api-key-masked",children:f(n.llmApiKey)})]})]})})]}),y("section",{className:"character-section",children:[c("div",{className:"section-header",children:y("h2",{children:[c(v0,{size:18}),"\u89D2\u8272\u7BA1\u7406"]})}),c("div",{className:"role-manager-wrapper",children:c(J0,{projectId:parseInt(e||"0")})})]}),y("section",{className:"chapter-section",children:[c("div",{className:"section-header",children:y("h2",{children:[c(Bi,{size:18}),"\u7AE0\u8282\u7BA1\u7406"]})}),c("div",{className:"chapter-manager-wrapper",children:c(Z0,{projectId:parseInt(e||"0")})})]})]})}),c("style",{children:`
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
      `})]}):c("div",{className:"project-details-page",children:y("div",{className:"error-container",children:[c("h2",{children:"\u9879\u76EE\u4E0D\u5B58\u5728"}),y(Do,{to:"/",className:"btn-primary",children:[c(Bo,{size:16}),"\u8FD4\u56DE\u9996\u9875"]})]})})},em="neutral",tm="happy",nm="sad",rm="angry",om="excited",lm="fearful",im="surprised",am="disgusted",um=[{value:em,label:"\u4E2D\u6027"},{value:tm,label:"\u5F00\u5FC3"},{value:nm,label:"\u60B2\u4F24"},{value:rm,label:"\u6124\u6012"},{value:om,label:"\u5174\u594B"},{value:lm,label:"\u6050\u60E7"},{value:im,label:"\u60CA\u8BB6"},{value:am,label:"\u538C\u6076"}],Ll=1,sm=()=>{const{projectId:e,chapterId:t}=md();Nr();const[n,r]=S.exports.useState(null),[o,l]=S.exports.useState([]),[i,a]=S.exports.useState([]),[u,s]=S.exports.useState([]),[m,g]=S.exports.useState(!0),[h,x]=S.exports.useState(null),[E,k]=S.exports.useState(!1),[B,p]=S.exports.useState(0),[d,f]=S.exports.useState(0),[v,F]=S.exports.useState({content:"",speaker:"",tone:"neutral",speed:Ll}),[N,A]=S.exports.useState(new Set),[j,W]=S.exports.useState(!1),[b,oe]=S.exports.useState(!1),[Dt,We]=S.exports.useState(!1),[Qt,Gt]=S.exports.useState(""),[at,Yt]=S.exports.useState(!1),[P,_]=S.exports.useState(!1),[L,I]=S.exports.useState(!1),[X,Bt]=S.exports.useState(""),Te=S.exports.useRef(null),zn=S.exports.useRef(null);S.exports.useEffect(()=>{t&&Xe()},[t,e]),S.exports.useEffect(()=>{const w=D=>{Te.current&&!Te.current.contains(D.target)&&I(!1)};return document.addEventListener("mousedown",w),()=>document.removeEventListener("mousedown",w)},[]),S.exports.useEffect(()=>{if(h&&o.length>0){const w=o.find(D=>D.id===h);w&&F({content:w.content,speaker:w.speaker||"",tone:w.tone||"neutral",speed:w.speed||Ll})}},[h,o]);const Xe=async()=>{g(!0);try{const w=await K.getChapter(parseInt(t||"0"));if(r(w),Gt(w.content||""),e){const rl=await K.getProjectKnownCharacters(parseInt(e));a(rl)}const D=await K.getVoices();s(D);const ce=[...await K.getParagraphs(parseInt(t||"0"))].sort((rl,Bd)=>rl.orderIndex-Bd.orderIndex);l(ce),tl(ce),ce.length>0&&Bn(ce[0].id)}catch(w){console.error("Failed to load data:",w)}g(!1)},Xt=()=>{n&&Gt(n.content||""),We(!0)},kd=async()=>{if(!!n){Yt(!0);try{await K.updateChapter(n.id,n.title,Qt),r(w=>w?{...w,content:Qt}:null),We(!1),oe(!0),setTimeout(()=>oe(!1),2e3)}catch(w){console.error("Failed to save chapter:",w)}Yt(!1)}},tl=w=>{const D=w.reduce((q,ce)=>q+(ce.duration||0),0);f(D)},Ed=(()=>{let w=0;return o.map(D=>{const q=w,ce=w+(D.duration||2);return w=ce,{id:D.id,start:q,end:ce,paragraph:D}})})(),Dn=w=>N.has(w),Bn=w=>{x(w);const D=o.find(q=>q.id===w);D&&F({content:D.content,speaker:D.speaker||"",tone:D.tone||"neutral",speed:D.speed||Ll})},jn=(w,D)=>{F({...v,[w]:D}),h&&A(q=>new Set(q).add(h))},Cd=()=>{if(!h)return;const w=o.map(D=>D.id===h?{...D,...v,voiceId:D.voiceId}:D);l(w)},Sd=async()=>{if(N.size!==0){W(!0);try{for(const w of N){const D=o.find(q=>q.id===w);D&&await K.updateParagraph(D.id,D.content,D.speaker,D.tone,D.voiceId,D.speed,D.audioPath,D.duration,D.orderIndex)}A(new Set),oe(!0),setTimeout(()=>oe(!1),2e3)}catch(w){console.error("Failed to save paragraphs:",w)}W(!1)}},Fd=w=>{if(!window.confirm("\u786E\u5B9A\u8981\u5220\u9664\u6B64\u6BB5\u843D\u5417\uFF1F"))return;const D=o.filter(q=>q.id!==w);l(D),tl(D),A(q=>{const ce=new Set(q);return ce.delete(w),ce}),h===w&&(D.length>0?Bn(D[0].id):x(null))},Nd=async w=>{console.log("Generating audio for paragraph:",w)},Pd=async()=>{if(!!t&&!(o.length>0&&!window.confirm("\u5DF2\u5B58\u5728\u6BB5\u843D\uFF0C\u786E\u5B9A\u8981\u91CD\u65B0\u751F\u6210\u5417\uFF1F\u8FD9\u5C06\u8986\u76D6\u73B0\u6709\u6BB5\u843D\u3002"))){_(!0);try{const D=[...await K.splitParagraph(parseInt(t))].sort((q,ce)=>q.orderIndex-ce.orderIndex);l(D),tl(D),A(new Set),D.length>0?Bn(D[0].id):x(null),oe(!0),setTimeout(()=>oe(!1),2e3)}catch(w){console.error("Failed to generate script:",w),alert("\u751F\u6210\u811A\u672C\u5931\u8D25\uFF1A"+w.message)}_(!1)}},Ad=()=>{k(!E)},za=w=>{const D=Math.floor(w/60),q=Math.floor(w%60),ce=Math.floor(w%1*100);return`${D.toString().padStart(2,"0")}:${q.toString().padStart(2,"0")}:${ce.toString().padStart(2,"0")}`},nl=w=>({\u65C1\u767D:"#00A8FF",\u7537\u4E3B\u89D2:"#FF6B6B",\u5973\u4E3B\u89D2:"#FF8EC7"})[w]||"#95A5A6",zd=()=>{const w=new Set;return i.forEach(D=>{D.name&&w.add(D.name)}),o.forEach(D=>{D.speaker&&w.add(D.speaker)}),Array.from(w).sort()},Dd=()=>{const w=zd();if(!X.trim())return w;const D=X.toLowerCase();return w.filter(q=>q.toLowerCase().includes(D))},Pr=h?o.find(w=>w.id===h):null;return m?c("div",{className:"chapter-editor",children:y("div",{className:"loading-container",children:[c("div",{className:"spinner"}),c("p",{children:"\u52A0\u8F7D\u4E2D..."})]})}):n?y("div",{className:"chapter-editor",children:[y("header",{className:"editor-header",children:[y("div",{className:"header-left",children:[y(Do,{to:`/project/${e}`,className:"back-button",children:[c(Bo,{size:18}),c("span",{children:"\u8FD4\u56DE"})]}),c("div",{className:"divider"}),y("div",{className:"chapter-title",children:[c("h1",{children:n.title}),c("p",{className:"subtitle",children:"\u7AE0\u8282\u7F16\u8F91 \xB7 \u65F6\u95F4\u8F74\u89C6\u56FE"})]}),N.size>0&&y("div",{className:"dirty-indicator",children:[c(jl,{size:14}),y("span",{children:[N.size," \u4E2A\u672A\u4FDD\u5B58\u4FEE\u6539"]})]}),b&&y("div",{className:"save-success",children:[c(Qu,{size:14}),c("span",{children:"\u5DF2\u4FDD\u5B58"})]})]}),y("div",{className:"header-right",children:[y("button",{className:"btn-secondary",onClick:Xt,children:[c(ji,{size:16}),"\u7F16\u8F91\u6587\u672C"]}),y("button",{className:`btn-save ${N.size>0?"dirty":""}`,onClick:Sd,disabled:N.size===0||j,children:[c(jo,{size:16}),j?"\u4FDD\u5B58\u4E2D...":"\u4FDD\u5B58"]}),y("button",{className:"btn-primary",onClick:Pd,disabled:P,children:[c(Aa,{size:16}),P?"\u751F\u6210\u4E2D...":o.length>0?"\u91CD\u65B0\u751F\u6210\u811A\u672C":"\u751F\u6210\u811A\u672C"]})]})]}),y("div",{className:"editor-main",children:[y("div",{className:"upper-section",children:[y("div",{className:"paragraph-list-panel",children:[y("div",{className:"panel-header",children:[c("h2",{children:"\u6BB5\u843D\u5217\u8868"}),y("span",{className:"paragraph-count",children:[o.length," \u4E2A\u6BB5\u843D"]})]}),c("div",{className:"paragraph-list-content",children:o.map((w,D)=>y("div",{className:`paragraph-item ${h===w.id?"selected":""}`,onClick:()=>Bn(w.id),children:[y("div",{className:"paragraph-item-left",children:[c("div",{className:"paragraph-index",children:D+1}),c("div",{className:"speaker-dot",style:{backgroundColor:nl(w.speaker)}})]}),y("div",{className:"paragraph-item-content",children:[y("div",{className:"paragraph-item-header",children:[c("span",{className:"speaker-label",style:{color:nl(w.speaker)},children:w.speaker||"\u65C1\u767D"}),y("span",{className:"paragraph-duration",children:[c(yd,{size:10}),(w.duration||0).toFixed(1),"s"]}),Dn(w.id)&&c("span",{className:"dirty-dot",title:"\u6709\u672A\u4FDD\u5B58\u7684\u4FEE\u6539"})]}),c("p",{className:"paragraph-item-text",children:w.content})]}),c("div",{className:"paragraph-item-right",children:w.audioPath?c("span",{className:"has-audio-icon",children:c(wd,{size:14})}):null})]},w.id))})]}),y("div",{className:"paragraph-detail-panel",children:[y("div",{className:"panel-header",children:[c("h2",{children:"\u6BB5\u843D\u8BE6\u60C5"}),h&&Dn(h)&&y("span",{className:"dirty-badge",children:[c(jl,{size:12}),"\u672A\u4FDD\u5B58"]})]}),Pr?y("div",{className:"panel-content",children:[y("div",{className:"form-group",children:[c("label",{children:"\u6587\u672C\u5185\u5BB9"}),c("textarea",{value:v.content,onChange:w=>jn("content",w.target.value),rows:5})]}),c("div",{className:"form-row",children:y("div",{className:"form-group full-width",children:[c("label",{children:"\u8BF4\u8BDD\u89D2\u8272"}),y("div",{className:"speaker-select-wrapper",ref:Te,children:[y("div",{className:"speaker-select-input",onClick:()=>{I(!L),Bt("")},children:[c("span",{className:v.speaker?"":"placeholder",children:v.speaker||"\u65C1\u767D"}),c("span",{className:"dropdown-arrow",children:"\u25BC"})]}),L&&y("div",{className:"speaker-dropdown",children:[c("input",{type:"text",className:"speaker-search-input",placeholder:"\u641C\u7D22\u89D2\u8272...",value:X,onChange:w=>Bt(w.target.value),autoFocus:!0}),y("div",{className:"speaker-options",children:[c("div",{className:`speaker-option ${v.speaker?"":"selected"}`,onClick:()=>{jn("speaker",""),I(!1)},children:"\u65C1\u767D"}),Dd().map(w=>c("div",{className:`speaker-option ${v.speaker===w?"selected":""}`,onClick:()=>{jn("speaker",w),I(!1)},children:w},w))]})]})]})]})}),y("div",{className:"form-row",children:[y("div",{className:"form-group",children:[c("label",{children:"\u60C5\u611F"}),c("select",{value:v.tone,onChange:w=>jn("tone",w.target.value),children:um.map(w=>c("option",{value:w.value,children:w.label},w.value))})]}),y("div",{className:"form-group",children:[y("div",{className:"label-row",children:[c("label",{children:"\u8BED\u901F"}),c("span",{className:"value-badge",children:v.speed.toFixed(2)})]}),c("input",{type:"range",min:"0.5",max:"2.0",step:"0.05",value:v.speed,onChange:w=>jn("speed",parseFloat(w.target.value))}),y("div",{className:"range-labels",children:[c("span",{children:"0.5x"}),c("span",{children:"1.0x"}),c("span",{children:"2.0x"})]})]})]}),y("div",{className:"action-buttons",children:[y("button",{className:"btn-generate",onClick:()=>Nd(Pr.id),children:[c(x0,{size:16}),"\u751F\u6210\u97F3\u9891"]}),y("button",{className:"btn-delete",onClick:()=>Fd(Pr.id),children:[c(el,{size:16}),"\u5220\u9664"]})]}),c("div",{className:"save-bar",children:y("button",{className:"btn-secondary",onClick:Cd,disabled:!Dn(Pr.id),children:[c(Qu,{size:16}),"\u5E94\u7528\u4FEE\u6539"]})})]}):y("div",{className:"empty-properties",children:[c(y0,{size:40}),c("p",{children:"\u9009\u62E9\u4E00\u4E2A\u6BB5\u843D\u6765\u7F16\u8F91\u5C5E\u6027"})]})]})]}),c("div",{className:"lower-section",children:y("div",{className:"timeline-panel",children:[c("div",{className:"panel-header",children:y("div",{className:"transport-controls",children:[c("button",{className:`play-btn ${E?"playing":""}`,onClick:Ad,children:E?c(m0,{size:20}):c(g0,{size:20})}),y("div",{className:"time-display",children:[za(B)," / ",za(d)]})]})}),y("div",{className:"timeline-container",ref:zn,children:[c("div",{className:"timeline-ruler",children:Array.from({length:Math.ceil(d)+1}).map((w,D)=>c("div",{className:"ruler-mark",style:{left:`${D/d*100}%`},children:y("span",{className:"ruler-label",children:[D,"s"]})},D))}),c("div",{className:"timeline-track",children:Ed.map(w=>y("div",{className:`timeline-clip ${h===w.id?"selected":""} ${Dn(w.id)?"dirty":""}`,style:{left:`${w.start/d*100}%`,width:`${(w.end-w.start)/d*100}%`,backgroundColor:nl(w.paragraph.speaker)},onClick:()=>Bn(w.id),children:[y("div",{className:"clip-content",children:[y("div",{className:"clip-speaker",children:[c(f0,{size:14}),w.paragraph.speaker||"\u65C1\u767D"]}),y("div",{className:"clip-text",children:[w.paragraph.content.slice(0,40),w.paragraph.content.length>40?"...":""]})]}),Dn(w.id)&&c("div",{className:"clip-dirty-indicator",children:c(jl,{size:10})}),w.paragraph.audioPath&&c("div",{className:"clip-indicator",children:c(h0,{size:12})})]},w.id))}),c("div",{className:"playhead",style:{left:`${B/d*100}%`}})]})]})})]}),Dt&&c("div",{className:"text-editor-modal",children:y("div",{className:"text-editor-content",children:[y("div",{className:"text-editor-header",children:[y("div",{className:"text-editor-title",children:[c(ji,{size:20}),c("h2",{children:"\u7F16\u8F91\u7AE0\u8282\u6587\u672C"})]}),c("button",{className:"modal-close",onClick:()=>We(!1),disabled:at,children:c(_o,{size:24})})]}),c("div",{className:"text-editor-body",children:c("textarea",{value:Qt,onChange:w=>Gt(w.target.value),placeholder:"\u8BF7\u8F93\u5165\u7AE0\u8282\u5185\u5BB9...",className:"chapter-textarea"})}),y("div",{className:"text-editor-footer",children:[c("button",{className:"btn-secondary",onClick:()=>{We(!1),n&&Gt(n.content||"")},disabled:at,children:"\u53D6\u6D88"}),y("button",{className:"btn-primary",onClick:kd,disabled:at,children:[c(jo,{size:16}),at?"\u4FDD\u5B58\u4E2D...":"\u4FDD\u5B58"]})]})]})}),c("style",{children:`
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
      `})]}):c("div",{className:"chapter-editor",children:y("div",{className:"error-container",children:[c("h2",{children:"\u7AE0\u8282\u4E0D\u5B58\u5728"}),y(Do,{to:`/project/${e}`,className:"btn-primary",children:[c(Bo,{size:16}),"\u8FD4\u56DE\u9879\u76EE"]})]})})};function cm(){return c(o0,{children:c("div",{className:"app",children:y(qh,{children:[c(ro,{path:"/",element:c(X0,{})}),c(ro,{path:"/project/:id",element:c(q0,{})}),c(ro,{path:"/project/:projectId/chapter/:chapterId",element:c(sm,{})})]})})})}const dm="Frontend",Jt={debug:console.debug.bind(console),info:console.info.bind(console),warn:console.warn.bind(console),error:console.error.bind(console),log:console.log.bind(console)};let Yu=!1;const pm=()=>typeof window.go<"u",Un=(e,...t)=>{if(!!pm())try{const n=t.map(r=>{if(typeof r=="object")try{return JSON.stringify(r)}catch{return String(r)}return String(r)}).join(" ");K.log(e,n,dm)}catch(n){Jt.debug("Failed to send log to backend:",n)}},fm=()=>{Yu||(Yu=!0,console.debug=(...e)=>{Jt.debug(...e),Un("debug",...e)},console.info=(...e)=>{Jt.info(...e),Un("info",...e)},console.warn=(...e)=>{Jt.warn(...e),Un("warn",...e)},console.error=(...e)=>{Jt.error(...e),Un("error",...e)},console.log=(...e)=>{Jt.log(...e),Un("info",...e)},window.addEventListener("unhandledrejection",e=>{console.error("Unhandled Promise rejection:",e.reason)}),window.addEventListener("error",e=>{console.error("Uncaught error:",e.message,"at",e.filename,":",e.lineno,":",e.colno)}),console.info("\u65E5\u5FD7\u7CFB\u7EDF\u521D\u59CB\u5316\u5B8C\u6210"))};fm();const hm=document.getElementById("root"),mm=ld(hm);mm.render(c(os.StrictMode,{children:c(cm,{})}));
