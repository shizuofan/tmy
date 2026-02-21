function Yd(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function Xd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var S={exports:{}},_={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nr=Symbol.for("react.element"),Zd=Symbol.for("react.portal"),Jd=Symbol.for("react.fragment"),qd=Symbol.for("react.strict_mode"),ep=Symbol.for("react.profiler"),tp=Symbol.for("react.provider"),np=Symbol.for("react.context"),rp=Symbol.for("react.forward_ref"),op=Symbol.for("react.suspense"),lp=Symbol.for("react.memo"),ip=Symbol.for("react.lazy"),Va=Symbol.iterator;function ap(e){return e===null||typeof e!="object"?null:(e=Va&&e[Va]||e["@@iterator"],typeof e=="function"?e:null)}var su={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},uu=Object.assign,cu={};function Pn(e,t,n){this.props=e,this.context=t,this.refs=cu,this.updater=n||su}Pn.prototype.isReactComponent={};Pn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Pn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function du(){}du.prototype=Pn.prototype;function Vi(e,t,n){this.props=e,this.context=t,this.refs=cu,this.updater=n||su}var Ki=Vi.prototype=new du;Ki.constructor=Vi;uu(Ki,Pn.prototype);Ki.isPureReactComponent=!0;var Ka=Array.isArray,pu=Object.prototype.hasOwnProperty,Wi={current:null},fu={key:!0,ref:!0,__self:!0,__source:!0};function hu(e,t,n){var r,o={},l=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)pu.call(t,r)&&!fu.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Nr,type:e,key:l,ref:i,props:o,_owner:Wi.current}}function sp(e,t){return{$$typeof:Nr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Hi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Nr}function up(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Wa=/\/+/g;function gl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?up(""+e.key):t.toString(36)}function oo(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Nr:case Zd:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+gl(i,0):r,Ka(o)?(n="",e!=null&&(n=e.replace(Wa,"$&/")+"/"),oo(o,t,n,"",function(c){return c})):o!=null&&(Hi(o)&&(o=sp(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(Wa,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",Ka(e))for(var a=0;a<e.length;a++){l=e[a];var s=r+gl(l,a);i+=oo(l,t,n,s,o)}else if(s=ap(e),typeof s=="function")for(e=s.call(e),a=0;!(l=e.next()).done;)l=l.value,s=r+gl(l,a++),i+=oo(l,t,n,s,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Ir(e,t,n){if(e==null)return e;var r=[],o=0;return oo(e,r,"","",function(l){return t.call(n,l,o++)}),r}function cp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ve={current:null},lo={transition:null},dp={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:lo,ReactCurrentOwner:Wi};function mu(){throw Error("act(...) is not supported in production builds of React.")}_.Children={map:Ir,forEach:function(e,t,n){Ir(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ir(e,function(){t++}),t},toArray:function(e){return Ir(e,function(t){return t})||[]},only:function(e){if(!Hi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};_.Component=Pn;_.Fragment=Jd;_.Profiler=ep;_.PureComponent=Vi;_.StrictMode=qd;_.Suspense=op;_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dp;_.act=mu;_.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=uu({},e.props),o=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=Wi.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)pu.call(t,s)&&!fu.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Nr,type:e.type,key:o,ref:l,props:r,_owner:i}};_.createContext=function(e){return e={$$typeof:np,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:tp,_context:e},e.Consumer=e};_.createElement=hu;_.createFactory=function(e){var t=hu.bind(null,e);return t.type=e,t};_.createRef=function(){return{current:null}};_.forwardRef=function(e){return{$$typeof:rp,render:e}};_.isValidElement=Hi;_.lazy=function(e){return{$$typeof:ip,_payload:{_status:-1,_result:e},_init:cp}};_.memo=function(e,t){return{$$typeof:lp,type:e,compare:t===void 0?null:t}};_.startTransition=function(e){var t=lo.transition;lo.transition={};try{e()}finally{lo.transition=t}};_.unstable_act=mu;_.useCallback=function(e,t){return ve.current.useCallback(e,t)};_.useContext=function(e){return ve.current.useContext(e)};_.useDebugValue=function(){};_.useDeferredValue=function(e){return ve.current.useDeferredValue(e)};_.useEffect=function(e,t){return ve.current.useEffect(e,t)};_.useId=function(){return ve.current.useId()};_.useImperativeHandle=function(e,t,n){return ve.current.useImperativeHandle(e,t,n)};_.useInsertionEffect=function(e,t){return ve.current.useInsertionEffect(e,t)};_.useLayoutEffect=function(e,t){return ve.current.useLayoutEffect(e,t)};_.useMemo=function(e,t){return ve.current.useMemo(e,t)};_.useReducer=function(e,t,n){return ve.current.useReducer(e,t,n)};_.useRef=function(e){return ve.current.useRef(e)};_.useState=function(e){return ve.current.useState(e)};_.useSyncExternalStore=function(e,t,n){return ve.current.useSyncExternalStore(e,t,n)};_.useTransition=function(){return ve.current.useTransition()};_.version="18.3.1";(function(e){e.exports=_})(S);const gu=Xd(S.exports),Hl=Yd({__proto__:null,default:gu},[S.exports]);var yu={exports:{}},De={},vu={exports:{}},xu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(b,j){var T=b.length;b.push(j);e:for(;0<T;){var H=T-1>>>1,ee=b[H];if(0<o(ee,j))b[H]=j,b[T]=ee,T=H;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var j=b[0],T=b.pop();if(T!==j){b[0]=T;e:for(var H=0,ee=b.length,We=ee>>>1;H<We;){var qe=2*(H+1)-1,He=b[qe],Qe=qe+1,et=b[Qe];if(0>o(He,T))Qe<ee&&0>o(et,He)?(b[H]=et,b[Qe]=T,H=Qe):(b[H]=He,b[qe]=T,H=qe);else if(Qe<ee&&0>o(et,T))b[H]=et,b[Qe]=T,H=Qe;else break e}}return j}function o(b,j){var T=b.sortIndex-j.sortIndex;return T!==0?T:b.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var s=[],c=[],h=1,y=null,g=3,k=!1,w=!1,E=!1,B=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(b){for(var j=n(c);j!==null;){if(j.callback===null)r(c);else if(j.startTime<=b)r(c),j.sortIndex=j.expirationTime,t(s,j);else break;j=n(c)}}function v(b){if(E=!1,p(b),!w)if(n(s)!==null)w=!0,Tt(C);else{var j=n(c);j!==null&&pt(v,j.startTime-b)}}function C(b,j){w=!1,E&&(E=!1,f(P),P=-1),k=!0;var T=g;try{for(p(j),y=n(s);y!==null&&(!(y.expirationTime>j)||b&&!M());){var H=y.callback;if(typeof H=="function"){y.callback=null,g=y.priorityLevel;var ee=H(y.expirationTime<=j);j=e.unstable_now(),typeof ee=="function"?y.callback=ee:y===n(s)&&r(s),p(j)}else r(s);y=n(s)}if(y!==null)var We=!0;else{var qe=n(c);qe!==null&&pt(v,qe.startTime-j),We=!1}return We}finally{y=null,g=T,k=!1}}var N=!1,A=null,P=-1,I=5,L=-1;function M(){return!(e.unstable_now()-L<I)}function de(){if(A!==null){var b=e.unstable_now();L=b;var j=!0;try{j=A(!0,b)}finally{j?ze():(N=!1,A=null)}}else N=!1}var ze;if(typeof d=="function")ze=function(){d(de)};else if(typeof MessageChannel<"u"){var jr=new MessageChannel,qt=jr.port2;jr.port1.onmessage=de,ze=function(){qt.postMessage(null)}}else ze=function(){B(de,0)};function Tt(b){A=b,N||(N=!0,ze())}function pt(b,j){P=B(function(){b(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){w||k||(w=!0,Tt(C))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(b){switch(g){case 1:case 2:case 3:var j=3;break;default:j=g}var T=g;g=j;try{return b()}finally{g=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,j){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var T=g;g=b;try{return j()}finally{g=T}},e.unstable_scheduleCallback=function(b,j,T){var H=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?H+T:H):T=H,b){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=T+ee,b={id:h++,callback:j,priorityLevel:b,startTime:T,expirationTime:ee,sortIndex:-1},T>H?(b.sortIndex=T,t(c,b),n(s)===null&&b===n(c)&&(E?(f(P),P=-1):E=!0,pt(v,T-H))):(b.sortIndex=ee,t(s,b),w||k||(w=!0,Tt(C))),b},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(b){var j=g;return function(){var T=g;g=j;try{return b.apply(this,arguments)}finally{g=T}}}})(xu);(function(e){e.exports=xu})(vu);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pp=S.exports,be=vu.exports;function F(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var wu=new Set,ir={};function Xt(e,t){Cn(e,t),Cn(e+"Capture",t)}function Cn(e,t){for(ir[e]=t,e=0;e<t.length;e++)wu.add(t[e])}var at=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ql=Object.prototype.hasOwnProperty,fp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ha={},Qa={};function hp(e){return Ql.call(Qa,e)?!0:Ql.call(Ha,e)?!1:fp.test(e)?Qa[e]=!0:(Ha[e]=!0,!1)}function mp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function gp(e,t,n,r){if(t===null||typeof t>"u"||mp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function xe(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ce[t]=new xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Qi=/[\-:]([a-z])/g;function Gi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Qi,Gi);ce[t]=new xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Qi,Gi);ce[t]=new xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Qi,Gi);ce[t]=new xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new xe(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Yi(e,t,n,r){var o=ce.hasOwnProperty(t)?ce[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(gp(t,n,o,r)&&(n=null),r||o===null?hp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var dt=pp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Or=Symbol.for("react.element"),on=Symbol.for("react.portal"),ln=Symbol.for("react.fragment"),Xi=Symbol.for("react.strict_mode"),Gl=Symbol.for("react.profiler"),ku=Symbol.for("react.provider"),Eu=Symbol.for("react.context"),Zi=Symbol.for("react.forward_ref"),Yl=Symbol.for("react.suspense"),Xl=Symbol.for("react.suspense_list"),Ji=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),Cu=Symbol.for("react.offscreen"),Ga=Symbol.iterator;function Mn(e){return e===null||typeof e!="object"?null:(e=Ga&&e[Ga]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,yl;function Hn(e){if(yl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);yl=t&&t[1]||""}return`
`+yl+e}var vl=!1;function xl(e,t){if(!e||vl)return"";vl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,a=l.length-1;1<=i&&0<=a&&o[i]!==l[a];)a--;for(;1<=i&&0<=a;i--,a--)if(o[i]!==l[a]){if(i!==1||a!==1)do if(i--,a--,0>a||o[i]!==l[a]){var s=`
`+o[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=a);break}}}finally{vl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Hn(e):""}function yp(e){switch(e.tag){case 5:return Hn(e.type);case 16:return Hn("Lazy");case 13:return Hn("Suspense");case 19:return Hn("SuspenseList");case 0:case 2:case 15:return e=xl(e.type,!1),e;case 11:return e=xl(e.type.render,!1),e;case 1:return e=xl(e.type,!0),e;default:return""}}function Zl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ln:return"Fragment";case on:return"Portal";case Gl:return"Profiler";case Xi:return"StrictMode";case Yl:return"Suspense";case Xl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Eu:return(e.displayName||"Context")+".Consumer";case ku:return(e._context.displayName||"Context")+".Provider";case Zi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ji:return t=e.displayName||null,t!==null?t:Zl(e.type)||"Memo";case ht:t=e._payload,e=e._init;try{return Zl(e(t))}catch{}}return null}function vp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zl(t);case 8:return t===Xi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Pt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Su(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function xp(e){var t=Su(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ur(e){e._valueTracker||(e._valueTracker=xp(e))}function Fu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Su(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function vo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Jl(e,t){var n=t.checked;return J({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function Ya(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Pt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Nu(e,t){t=t.checked,t!=null&&Yi(e,"checked",t,!1)}function ql(e,t){Nu(e,t);var n=Pt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ei(e,t.type,n):t.hasOwnProperty("defaultValue")&&ei(e,t.type,Pt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Xa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ei(e,t,n){(t!=="number"||vo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Qn=Array.isArray;function yn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Pt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ti(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(F(91));return J({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Za(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(F(92));if(Qn(n)){if(1<n.length)throw Error(F(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Pt(n)}}function Au(e,t){var n=Pt(t.value),r=Pt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ja(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function bu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ni(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?bu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var $r,Du=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for($r=$r||document.createElement("div"),$r.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=$r.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ar(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Xn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wp=["Webkit","ms","Moz","O"];Object.keys(Xn).forEach(function(e){wp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Xn[t]=Xn[e]})});function Pu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Xn.hasOwnProperty(e)&&Xn[e]?(""+t).trim():t+"px"}function zu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Pu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var kp=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ri(e,t){if(t){if(kp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(F(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(F(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(F(61))}if(t.style!=null&&typeof t.style!="object")throw Error(F(62))}}function oi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var li=null;function qi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ii=null,vn=null,xn=null;function qa(e){if(e=Dr(e)){if(typeof ii!="function")throw Error(F(280));var t=e.stateNode;t&&(t=Yo(t),ii(e.stateNode,e.type,t))}}function Bu(e){vn?xn?xn.push(e):xn=[e]:vn=e}function ju(){if(vn){var e=vn,t=xn;if(xn=vn=null,qa(e),t)for(e=0;e<t.length;e++)qa(t[e])}}function Lu(e,t){return e(t)}function Tu(){}var wl=!1;function _u(e,t,n){if(wl)return e(t,n);wl=!0;try{return Lu(e,t,n)}finally{wl=!1,(vn!==null||xn!==null)&&(Tu(),ju())}}function sr(e,t){var n=e.stateNode;if(n===null)return null;var r=Yo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(F(231,t,typeof n));return n}var ai=!1;if(at)try{var Rn={};Object.defineProperty(Rn,"passive",{get:function(){ai=!0}}),window.addEventListener("test",Rn,Rn),window.removeEventListener("test",Rn,Rn)}catch{ai=!1}function Ep(e,t,n,r,o,l,i,a,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var Zn=!1,xo=null,wo=!1,si=null,Cp={onError:function(e){Zn=!0,xo=e}};function Sp(e,t,n,r,o,l,i,a,s){Zn=!1,xo=null,Ep.apply(Cp,arguments)}function Fp(e,t,n,r,o,l,i,a,s){if(Sp.apply(this,arguments),Zn){if(Zn){var c=xo;Zn=!1,xo=null}else throw Error(F(198));wo||(wo=!0,si=c)}}function Zt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Mu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function es(e){if(Zt(e)!==e)throw Error(F(188))}function Np(e){var t=e.alternate;if(!t){if(t=Zt(e),t===null)throw Error(F(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return es(o),e;if(l===r)return es(o),t;l=l.sibling}throw Error(F(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,a=o.child;a;){if(a===n){i=!0,n=o,r=l;break}if(a===r){i=!0,r=o,n=l;break}a=a.sibling}if(!i){for(a=l.child;a;){if(a===n){i=!0,n=l,r=o;break}if(a===r){i=!0,r=l,n=o;break}a=a.sibling}if(!i)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?e:t}function Ru(e){return e=Np(e),e!==null?Iu(e):null}function Iu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Iu(e);if(t!==null)return t;e=e.sibling}return null}var Ou=be.unstable_scheduleCallback,ts=be.unstable_cancelCallback,Ap=be.unstable_shouldYield,bp=be.unstable_requestPaint,te=be.unstable_now,Dp=be.unstable_getCurrentPriorityLevel,ea=be.unstable_ImmediatePriority,Uu=be.unstable_UserBlockingPriority,ko=be.unstable_NormalPriority,Pp=be.unstable_LowPriority,$u=be.unstable_IdlePriority,Wo=null,Ze=null;function zp(e){if(Ze&&typeof Ze.onCommitFiberRoot=="function")try{Ze.onCommitFiberRoot(Wo,e,void 0,(e.current.flags&128)===128)}catch{}}var $e=Math.clz32?Math.clz32:Lp,Bp=Math.log,jp=Math.LN2;function Lp(e){return e>>>=0,e===0?32:31-(Bp(e)/jp|0)|0}var Vr=64,Kr=4194304;function Gn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Eo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~o;a!==0?r=Gn(a):(l&=i,l!==0&&(r=Gn(l)))}else i=n&~o,i!==0?r=Gn(i):l!==0&&(r=Gn(l));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-$e(t),o=1<<n,r|=e[n],t&=~o;return r}function Tp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _p(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-$e(l),a=1<<i,s=o[i];s===-1?((a&n)===0||(a&r)!==0)&&(o[i]=Tp(a,t)):s<=t&&(e.expiredLanes|=a),l&=~a}}function ui(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Vu(){var e=Vr;return Vr<<=1,(Vr&4194240)===0&&(Vr=64),e}function kl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ar(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-$e(t),e[t]=n}function Mp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-$e(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function ta(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-$e(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var $=0;function Ku(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Wu,na,Hu,Qu,Gu,ci=!1,Wr=[],kt=null,Et=null,Ct=null,ur=new Map,cr=new Map,gt=[],Rp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ns(e,t){switch(e){case"focusin":case"focusout":kt=null;break;case"dragenter":case"dragleave":Et=null;break;case"mouseover":case"mouseout":Ct=null;break;case"pointerover":case"pointerout":ur.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":cr.delete(t.pointerId)}}function In(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=Dr(t),t!==null&&na(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Ip(e,t,n,r,o){switch(t){case"focusin":return kt=In(kt,e,t,n,r,o),!0;case"dragenter":return Et=In(Et,e,t,n,r,o),!0;case"mouseover":return Ct=In(Ct,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return ur.set(l,In(ur.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,cr.set(l,In(cr.get(l)||null,e,t,n,r,o)),!0}return!1}function Yu(e){var t=It(e.target);if(t!==null){var n=Zt(t);if(n!==null){if(t=n.tag,t===13){if(t=Mu(n),t!==null){e.blockedOn=t,Gu(e.priority,function(){Hu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function io(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=di(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);li=r,n.target.dispatchEvent(r),li=null}else return t=Dr(n),t!==null&&na(t),e.blockedOn=n,!1;t.shift()}return!0}function rs(e,t,n){io(e)&&n.delete(t)}function Op(){ci=!1,kt!==null&&io(kt)&&(kt=null),Et!==null&&io(Et)&&(Et=null),Ct!==null&&io(Ct)&&(Ct=null),ur.forEach(rs),cr.forEach(rs)}function On(e,t){e.blockedOn===t&&(e.blockedOn=null,ci||(ci=!0,be.unstable_scheduleCallback(be.unstable_NormalPriority,Op)))}function dr(e){function t(o){return On(o,e)}if(0<Wr.length){On(Wr[0],e);for(var n=1;n<Wr.length;n++){var r=Wr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(kt!==null&&On(kt,e),Et!==null&&On(Et,e),Ct!==null&&On(Ct,e),ur.forEach(t),cr.forEach(t),n=0;n<gt.length;n++)r=gt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<gt.length&&(n=gt[0],n.blockedOn===null);)Yu(n),n.blockedOn===null&&gt.shift()}var wn=dt.ReactCurrentBatchConfig,Co=!0;function Up(e,t,n,r){var o=$,l=wn.transition;wn.transition=null;try{$=1,ra(e,t,n,r)}finally{$=o,wn.transition=l}}function $p(e,t,n,r){var o=$,l=wn.transition;wn.transition=null;try{$=4,ra(e,t,n,r)}finally{$=o,wn.transition=l}}function ra(e,t,n,r){if(Co){var o=di(e,t,n,r);if(o===null)zl(e,t,r,So,n),ns(e,r);else if(Ip(o,e,t,n,r))r.stopPropagation();else if(ns(e,r),t&4&&-1<Rp.indexOf(e)){for(;o!==null;){var l=Dr(o);if(l!==null&&Wu(l),l=di(e,t,n,r),l===null&&zl(e,t,r,So,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else zl(e,t,r,null,n)}}var So=null;function di(e,t,n,r){if(So=null,e=qi(r),e=It(e),e!==null)if(t=Zt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Mu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return So=e,null}function Xu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Dp()){case ea:return 1;case Uu:return 4;case ko:case Pp:return 16;case $u:return 536870912;default:return 16}default:return 16}}var vt=null,oa=null,ao=null;function Zu(){if(ao)return ao;var e,t=oa,n=t.length,r,o="value"in vt?vt.value:vt.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return ao=o.slice(e,1<r?1-r:void 0)}function so(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Hr(){return!0}function os(){return!1}function Pe(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Hr:os,this.isPropagationStopped=os,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Hr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Hr)},persist:function(){},isPersistent:Hr}),t}var zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},la=Pe(zn),br=J({},zn,{view:0,detail:0}),Vp=Pe(br),El,Cl,Un,Ho=J({},br,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ia,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Un&&(Un&&e.type==="mousemove"?(El=e.screenX-Un.screenX,Cl=e.screenY-Un.screenY):Cl=El=0,Un=e),El)},movementY:function(e){return"movementY"in e?e.movementY:Cl}}),ls=Pe(Ho),Kp=J({},Ho,{dataTransfer:0}),Wp=Pe(Kp),Hp=J({},br,{relatedTarget:0}),Sl=Pe(Hp),Qp=J({},zn,{animationName:0,elapsedTime:0,pseudoElement:0}),Gp=Pe(Qp),Yp=J({},zn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xp=Pe(Yp),Zp=J({},zn,{data:0}),is=Pe(Zp),Jp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ef={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ef[e])?!!t[e]:!1}function ia(){return tf}var nf=J({},br,{key:function(e){if(e.key){var t=Jp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=so(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?qp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ia,charCode:function(e){return e.type==="keypress"?so(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?so(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),rf=Pe(nf),of=J({},Ho,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),as=Pe(of),lf=J({},br,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ia}),af=Pe(lf),sf=J({},zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),uf=Pe(sf),cf=J({},Ho,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),df=Pe(cf),pf=[9,13,27,32],aa=at&&"CompositionEvent"in window,Jn=null;at&&"documentMode"in document&&(Jn=document.documentMode);var ff=at&&"TextEvent"in window&&!Jn,Ju=at&&(!aa||Jn&&8<Jn&&11>=Jn),ss=String.fromCharCode(32),us=!1;function qu(e,t){switch(e){case"keyup":return pf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ec(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var an=!1;function hf(e,t){switch(e){case"compositionend":return ec(t);case"keypress":return t.which!==32?null:(us=!0,ss);case"textInput":return e=t.data,e===ss&&us?null:e;default:return null}}function mf(e,t){if(an)return e==="compositionend"||!aa&&qu(e,t)?(e=Zu(),ao=oa=vt=null,an=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ju&&t.locale!=="ko"?null:t.data;default:return null}}var gf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!gf[e.type]:t==="textarea"}function tc(e,t,n,r){Bu(r),t=Fo(t,"onChange"),0<t.length&&(n=new la("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var qn=null,pr=null;function yf(e){pc(e,0)}function Qo(e){var t=cn(e);if(Fu(t))return e}function vf(e,t){if(e==="change")return t}var nc=!1;if(at){var Fl;if(at){var Nl="oninput"in document;if(!Nl){var ds=document.createElement("div");ds.setAttribute("oninput","return;"),Nl=typeof ds.oninput=="function"}Fl=Nl}else Fl=!1;nc=Fl&&(!document.documentMode||9<document.documentMode)}function ps(){qn&&(qn.detachEvent("onpropertychange",rc),pr=qn=null)}function rc(e){if(e.propertyName==="value"&&Qo(pr)){var t=[];tc(t,pr,e,qi(e)),_u(yf,t)}}function xf(e,t,n){e==="focusin"?(ps(),qn=t,pr=n,qn.attachEvent("onpropertychange",rc)):e==="focusout"&&ps()}function wf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qo(pr)}function kf(e,t){if(e==="click")return Qo(t)}function Ef(e,t){if(e==="input"||e==="change")return Qo(t)}function Cf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ke=typeof Object.is=="function"?Object.is:Cf;function fr(e,t){if(Ke(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Ql.call(t,o)||!Ke(e[o],t[o]))return!1}return!0}function fs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hs(e,t){var n=fs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fs(n)}}function oc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?oc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function lc(){for(var e=window,t=vo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=vo(e.document)}return t}function sa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Sf(e){var t=lc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&oc(n.ownerDocument.documentElement,n)){if(r!==null&&sa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=hs(n,l);var i=hs(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ff=at&&"documentMode"in document&&11>=document.documentMode,sn=null,pi=null,er=null,fi=!1;function ms(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fi||sn==null||sn!==vo(r)||(r=sn,"selectionStart"in r&&sa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),er&&fr(er,r)||(er=r,r=Fo(pi,"onSelect"),0<r.length&&(t=new la("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=sn)))}function Qr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var un={animationend:Qr("Animation","AnimationEnd"),animationiteration:Qr("Animation","AnimationIteration"),animationstart:Qr("Animation","AnimationStart"),transitionend:Qr("Transition","TransitionEnd")},Al={},ic={};at&&(ic=document.createElement("div").style,"AnimationEvent"in window||(delete un.animationend.animation,delete un.animationiteration.animation,delete un.animationstart.animation),"TransitionEvent"in window||delete un.transitionend.transition);function Go(e){if(Al[e])return Al[e];if(!un[e])return e;var t=un[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ic)return Al[e]=t[n];return e}var ac=Go("animationend"),sc=Go("animationiteration"),uc=Go("animationstart"),cc=Go("transitionend"),dc=new Map,gs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bt(e,t){dc.set(e,t),Xt(t,[e])}for(var bl=0;bl<gs.length;bl++){var Dl=gs[bl],Nf=Dl.toLowerCase(),Af=Dl[0].toUpperCase()+Dl.slice(1);Bt(Nf,"on"+Af)}Bt(ac,"onAnimationEnd");Bt(sc,"onAnimationIteration");Bt(uc,"onAnimationStart");Bt("dblclick","onDoubleClick");Bt("focusin","onFocus");Bt("focusout","onBlur");Bt(cc,"onTransitionEnd");Cn("onMouseEnter",["mouseout","mouseover"]);Cn("onMouseLeave",["mouseout","mouseover"]);Cn("onPointerEnter",["pointerout","pointerover"]);Cn("onPointerLeave",["pointerout","pointerover"]);Xt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yn));function ys(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Fp(r,t,void 0,e),e.currentTarget=null}function pc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var a=r[i],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==l&&o.isPropagationStopped())break e;ys(o,a,c),l=s}else for(i=0;i<r.length;i++){if(a=r[i],s=a.instance,c=a.currentTarget,a=a.listener,s!==l&&o.isPropagationStopped())break e;ys(o,a,c),l=s}}}if(wo)throw e=si,wo=!1,si=null,e}function Q(e,t){var n=t[vi];n===void 0&&(n=t[vi]=new Set);var r=e+"__bubble";n.has(r)||(fc(t,e,2,!1),n.add(r))}function Pl(e,t,n){var r=0;t&&(r|=4),fc(n,e,r,t)}var Gr="_reactListening"+Math.random().toString(36).slice(2);function hr(e){if(!e[Gr]){e[Gr]=!0,wu.forEach(function(n){n!=="selectionchange"&&(bf.has(n)||Pl(n,!1,e),Pl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Gr]||(t[Gr]=!0,Pl("selectionchange",!1,t))}}function fc(e,t,n,r){switch(Xu(t)){case 1:var o=Up;break;case 4:o=$p;break;default:o=ra}n=o.bind(null,t,n,e),o=void 0,!ai||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function zl(e,t,n,r,o){var l=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;i=i.return}for(;a!==null;){if(i=It(a),i===null)return;if(s=i.tag,s===5||s===6){r=l=i;continue e}a=a.parentNode}}r=r.return}_u(function(){var c=l,h=qi(n),y=[];e:{var g=dc.get(e);if(g!==void 0){var k=la,w=e;switch(e){case"keypress":if(so(n)===0)break e;case"keydown":case"keyup":k=rf;break;case"focusin":w="focus",k=Sl;break;case"focusout":w="blur",k=Sl;break;case"beforeblur":case"afterblur":k=Sl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=ls;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=Wp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=af;break;case ac:case sc:case uc:k=Gp;break;case cc:k=uf;break;case"scroll":k=Vp;break;case"wheel":k=df;break;case"copy":case"cut":case"paste":k=Xp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=as}var E=(t&4)!==0,B=!E&&e==="scroll",f=E?g!==null?g+"Capture":null:g;E=[];for(var d=c,p;d!==null;){p=d;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,f!==null&&(v=sr(d,f),v!=null&&E.push(mr(d,v,p)))),B)break;d=d.return}0<E.length&&(g=new k(g,w,null,n,h),y.push({event:g,listeners:E}))}}if((t&7)===0){e:{if(g=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",g&&n!==li&&(w=n.relatedTarget||n.fromElement)&&(It(w)||w[st]))break e;if((k||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,k?(w=n.relatedTarget||n.toElement,k=c,w=w?It(w):null,w!==null&&(B=Zt(w),w!==B||w.tag!==5&&w.tag!==6)&&(w=null)):(k=null,w=c),k!==w)){if(E=ls,v="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(E=as,v="onPointerLeave",f="onPointerEnter",d="pointer"),B=k==null?g:cn(k),p=w==null?g:cn(w),g=new E(v,d+"leave",k,n,h),g.target=B,g.relatedTarget=p,v=null,It(h)===c&&(E=new E(f,d+"enter",w,n,h),E.target=p,E.relatedTarget=B,v=E),B=v,k&&w)t:{for(E=k,f=w,d=0,p=E;p;p=nn(p))d++;for(p=0,v=f;v;v=nn(v))p++;for(;0<d-p;)E=nn(E),d--;for(;0<p-d;)f=nn(f),p--;for(;d--;){if(E===f||f!==null&&E===f.alternate)break t;E=nn(E),f=nn(f)}E=null}else E=null;k!==null&&vs(y,g,k,E,!1),w!==null&&B!==null&&vs(y,B,w,E,!0)}}e:{if(g=c?cn(c):window,k=g.nodeName&&g.nodeName.toLowerCase(),k==="select"||k==="input"&&g.type==="file")var C=vf;else if(cs(g))if(nc)C=Ef;else{C=wf;var N=xf}else(k=g.nodeName)&&k.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(C=kf);if(C&&(C=C(e,c))){tc(y,C,n,h);break e}N&&N(e,g,c),e==="focusout"&&(N=g._wrapperState)&&N.controlled&&g.type==="number"&&ei(g,"number",g.value)}switch(N=c?cn(c):window,e){case"focusin":(cs(N)||N.contentEditable==="true")&&(sn=N,pi=c,er=null);break;case"focusout":er=pi=sn=null;break;case"mousedown":fi=!0;break;case"contextmenu":case"mouseup":case"dragend":fi=!1,ms(y,n,h);break;case"selectionchange":if(Ff)break;case"keydown":case"keyup":ms(y,n,h)}var A;if(aa)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else an?qu(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Ju&&n.locale!=="ko"&&(an||P!=="onCompositionStart"?P==="onCompositionEnd"&&an&&(A=Zu()):(vt=h,oa="value"in vt?vt.value:vt.textContent,an=!0)),N=Fo(c,P),0<N.length&&(P=new is(P,e,null,n,h),y.push({event:P,listeners:N}),A?P.data=A:(A=ec(n),A!==null&&(P.data=A)))),(A=ff?hf(e,n):mf(e,n))&&(c=Fo(c,"onBeforeInput"),0<c.length&&(h=new is("onBeforeInput","beforeinput",null,n,h),y.push({event:h,listeners:c}),h.data=A))}pc(y,t)})}function mr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Fo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=sr(e,n),l!=null&&r.unshift(mr(e,l,o)),l=sr(e,t),l!=null&&r.push(mr(e,l,o))),e=e.return}return r}function nn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function vs(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var a=n,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,o?(s=sr(n,l),s!=null&&i.unshift(mr(n,s,a))):o||(s=sr(n,l),s!=null&&i.push(mr(n,s,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Df=/\r\n?/g,Pf=/\u0000|\uFFFD/g;function xs(e){return(typeof e=="string"?e:""+e).replace(Df,`
`).replace(Pf,"")}function Yr(e,t,n){if(t=xs(t),xs(e)!==t&&n)throw Error(F(425))}function No(){}var hi=null,mi=null;function gi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var yi=typeof setTimeout=="function"?setTimeout:void 0,zf=typeof clearTimeout=="function"?clearTimeout:void 0,ws=typeof Promise=="function"?Promise:void 0,Bf=typeof queueMicrotask=="function"?queueMicrotask:typeof ws<"u"?function(e){return ws.resolve(null).then(e).catch(jf)}:yi;function jf(e){setTimeout(function(){throw e})}function Bl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),dr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);dr(t)}function St(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ks(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Bn=Math.random().toString(36).slice(2),Xe="__reactFiber$"+Bn,gr="__reactProps$"+Bn,st="__reactContainer$"+Bn,vi="__reactEvents$"+Bn,Lf="__reactListeners$"+Bn,Tf="__reactHandles$"+Bn;function It(e){var t=e[Xe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[st]||n[Xe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ks(e);e!==null;){if(n=e[Xe])return n;e=ks(e)}return t}e=n,n=e.parentNode}return null}function Dr(e){return e=e[Xe]||e[st],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function cn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(F(33))}function Yo(e){return e[gr]||null}var xi=[],dn=-1;function jt(e){return{current:e}}function G(e){0>dn||(e.current=xi[dn],xi[dn]=null,dn--)}function W(e,t){dn++,xi[dn]=e.current,e.current=t}var zt={},me=jt(zt),Ee=jt(!1),Wt=zt;function Sn(e,t){var n=e.type.contextTypes;if(!n)return zt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ce(e){return e=e.childContextTypes,e!=null}function Ao(){G(Ee),G(me)}function Es(e,t,n){if(me.current!==zt)throw Error(F(168));W(me,t),W(Ee,n)}function hc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(F(108,vp(e)||"Unknown",o));return J({},n,r)}function bo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||zt,Wt=me.current,W(me,e),W(Ee,Ee.current),!0}function Cs(e,t,n){var r=e.stateNode;if(!r)throw Error(F(169));n?(e=hc(e,t,Wt),r.__reactInternalMemoizedMergedChildContext=e,G(Ee),G(me),W(me,e)):G(Ee),W(Ee,n)}var rt=null,Xo=!1,jl=!1;function mc(e){rt===null?rt=[e]:rt.push(e)}function _f(e){Xo=!0,mc(e)}function Lt(){if(!jl&&rt!==null){jl=!0;var e=0,t=$;try{var n=rt;for($=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}rt=null,Xo=!1}catch(o){throw rt!==null&&(rt=rt.slice(e+1)),Ou(ea,Lt),o}finally{$=t,jl=!1}}return null}var pn=[],fn=0,Do=null,Po=0,Be=[],je=0,Ht=null,ot=1,lt="";function Mt(e,t){pn[fn++]=Po,pn[fn++]=Do,Do=e,Po=t}function gc(e,t,n){Be[je++]=ot,Be[je++]=lt,Be[je++]=Ht,Ht=e;var r=ot;e=lt;var o=32-$e(r)-1;r&=~(1<<o),n+=1;var l=32-$e(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,ot=1<<32-$e(t)+o|n<<o|r,lt=l+e}else ot=1<<l|n<<o|r,lt=e}function ua(e){e.return!==null&&(Mt(e,1),gc(e,1,0))}function ca(e){for(;e===Do;)Do=pn[--fn],pn[fn]=null,Po=pn[--fn],pn[fn]=null;for(;e===Ht;)Ht=Be[--je],Be[je]=null,lt=Be[--je],Be[je]=null,ot=Be[--je],Be[je]=null}var Ae=null,Ne=null,Y=!1,Ue=null;function yc(e,t){var n=Le(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ss(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ae=e,Ne=St(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ae=e,Ne=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ht!==null?{id:ot,overflow:lt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Le(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ae=e,Ne=null,!0):!1;default:return!1}}function wi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ki(e){if(Y){var t=Ne;if(t){var n=t;if(!Ss(e,t)){if(wi(e))throw Error(F(418));t=St(n.nextSibling);var r=Ae;t&&Ss(e,t)?yc(r,n):(e.flags=e.flags&-4097|2,Y=!1,Ae=e)}}else{if(wi(e))throw Error(F(418));e.flags=e.flags&-4097|2,Y=!1,Ae=e}}}function Fs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ae=e}function Xr(e){if(e!==Ae)return!1;if(!Y)return Fs(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!gi(e.type,e.memoizedProps)),t&&(t=Ne)){if(wi(e))throw vc(),Error(F(418));for(;t;)yc(e,t),t=St(t.nextSibling)}if(Fs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(F(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ne=St(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ne=null}}else Ne=Ae?St(e.stateNode.nextSibling):null;return!0}function vc(){for(var e=Ne;e;)e=St(e.nextSibling)}function Fn(){Ne=Ae=null,Y=!1}function da(e){Ue===null?Ue=[e]:Ue.push(e)}var Mf=dt.ReactCurrentBatchConfig;function $n(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var a=o.refs;i===null?delete a[l]:a[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,e))}return e}function Zr(e,t){throw e=Object.prototype.toString.call(t),Error(F(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ns(e){var t=e._init;return t(e._payload)}function xc(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function o(f,d){return f=bt(f,d),f.index=0,f.sibling=null,f}function l(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,d,p,v){return d===null||d.tag!==6?(d=Ol(p,f.mode,v),d.return=f,d):(d=o(d,p),d.return=f,d)}function s(f,d,p,v){var C=p.type;return C===ln?h(f,d,p.props.children,v,p.key):d!==null&&(d.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ht&&Ns(C)===d.type)?(v=o(d,p.props),v.ref=$n(f,d,p),v.return=f,v):(v=go(p.type,p.key,p.props,null,f.mode,v),v.ref=$n(f,d,p),v.return=f,v)}function c(f,d,p,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=Ul(p,f.mode,v),d.return=f,d):(d=o(d,p.children||[]),d.return=f,d)}function h(f,d,p,v,C){return d===null||d.tag!==7?(d=Vt(p,f.mode,v,C),d.return=f,d):(d=o(d,p),d.return=f,d)}function y(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Ol(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Or:return p=go(d.type,d.key,d.props,null,f.mode,p),p.ref=$n(f,null,d),p.return=f,p;case on:return d=Ul(d,f.mode,p),d.return=f,d;case ht:var v=d._init;return y(f,v(d._payload),p)}if(Qn(d)||Mn(d))return d=Vt(d,f.mode,p,null),d.return=f,d;Zr(f,d)}return null}function g(f,d,p,v){var C=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return C!==null?null:a(f,d,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Or:return p.key===C?s(f,d,p,v):null;case on:return p.key===C?c(f,d,p,v):null;case ht:return C=p._init,g(f,d,C(p._payload),v)}if(Qn(p)||Mn(p))return C!==null?null:h(f,d,p,v,null);Zr(f,p)}return null}function k(f,d,p,v,C){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(p)||null,a(d,f,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Or:return f=f.get(v.key===null?p:v.key)||null,s(d,f,v,C);case on:return f=f.get(v.key===null?p:v.key)||null,c(d,f,v,C);case ht:var N=v._init;return k(f,d,p,N(v._payload),C)}if(Qn(v)||Mn(v))return f=f.get(p)||null,h(d,f,v,C,null);Zr(d,v)}return null}function w(f,d,p,v){for(var C=null,N=null,A=d,P=d=0,I=null;A!==null&&P<p.length;P++){A.index>P?(I=A,A=null):I=A.sibling;var L=g(f,A,p[P],v);if(L===null){A===null&&(A=I);break}e&&A&&L.alternate===null&&t(f,A),d=l(L,d,P),N===null?C=L:N.sibling=L,N=L,A=I}if(P===p.length)return n(f,A),Y&&Mt(f,P),C;if(A===null){for(;P<p.length;P++)A=y(f,p[P],v),A!==null&&(d=l(A,d,P),N===null?C=A:N.sibling=A,N=A);return Y&&Mt(f,P),C}for(A=r(f,A);P<p.length;P++)I=k(A,f,P,p[P],v),I!==null&&(e&&I.alternate!==null&&A.delete(I.key===null?P:I.key),d=l(I,d,P),N===null?C=I:N.sibling=I,N=I);return e&&A.forEach(function(M){return t(f,M)}),Y&&Mt(f,P),C}function E(f,d,p,v){var C=Mn(p);if(typeof C!="function")throw Error(F(150));if(p=C.call(p),p==null)throw Error(F(151));for(var N=C=null,A=d,P=d=0,I=null,L=p.next();A!==null&&!L.done;P++,L=p.next()){A.index>P?(I=A,A=null):I=A.sibling;var M=g(f,A,L.value,v);if(M===null){A===null&&(A=I);break}e&&A&&M.alternate===null&&t(f,A),d=l(M,d,P),N===null?C=M:N.sibling=M,N=M,A=I}if(L.done)return n(f,A),Y&&Mt(f,P),C;if(A===null){for(;!L.done;P++,L=p.next())L=y(f,L.value,v),L!==null&&(d=l(L,d,P),N===null?C=L:N.sibling=L,N=L);return Y&&Mt(f,P),C}for(A=r(f,A);!L.done;P++,L=p.next())L=k(A,f,P,L.value,v),L!==null&&(e&&L.alternate!==null&&A.delete(L.key===null?P:L.key),d=l(L,d,P),N===null?C=L:N.sibling=L,N=L);return e&&A.forEach(function(de){return t(f,de)}),Y&&Mt(f,P),C}function B(f,d,p,v){if(typeof p=="object"&&p!==null&&p.type===ln&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Or:e:{for(var C=p.key,N=d;N!==null;){if(N.key===C){if(C=p.type,C===ln){if(N.tag===7){n(f,N.sibling),d=o(N,p.props.children),d.return=f,f=d;break e}}else if(N.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ht&&Ns(C)===N.type){n(f,N.sibling),d=o(N,p.props),d.ref=$n(f,N,p),d.return=f,f=d;break e}n(f,N);break}else t(f,N);N=N.sibling}p.type===ln?(d=Vt(p.props.children,f.mode,v,p.key),d.return=f,f=d):(v=go(p.type,p.key,p.props,null,f.mode,v),v.ref=$n(f,d,p),v.return=f,f=v)}return i(f);case on:e:{for(N=p.key;d!==null;){if(d.key===N)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(f,d.sibling),d=o(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=Ul(p,f.mode,v),d.return=f,f=d}return i(f);case ht:return N=p._init,B(f,d,N(p._payload),v)}if(Qn(p))return w(f,d,p,v);if(Mn(p))return E(f,d,p,v);Zr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(f,d.sibling),d=o(d,p),d.return=f,f=d):(n(f,d),d=Ol(p,f.mode,v),d.return=f,f=d),i(f)):n(f,d)}return B}var Nn=xc(!0),wc=xc(!1),zo=jt(null),Bo=null,hn=null,pa=null;function fa(){pa=hn=Bo=null}function ha(e){var t=zo.current;G(zo),e._currentValue=t}function Ei(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function kn(e,t){Bo=e,pa=hn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ke=!0),e.firstContext=null)}function _e(e){var t=e._currentValue;if(pa!==e)if(e={context:e,memoizedValue:t,next:null},hn===null){if(Bo===null)throw Error(F(308));hn=e,Bo.dependencies={lanes:0,firstContext:e}}else hn=hn.next=e;return t}var Ot=null;function ma(e){Ot===null?Ot=[e]:Ot.push(e)}function kc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,ma(t)):(n.next=o.next,o.next=n),t.interleaved=n,ut(e,r)}function ut(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var mt=!1;function ga(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ec(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function it(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ft(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(O&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,ut(e,n)}return o=r.interleaved,o===null?(t.next=t,ma(r)):(t.next=o.next,o.next=t),r.interleaved=t,ut(e,n)}function uo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ta(e,n)}}function As(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function jo(e,t,n,r){var o=e.updateQueue;mt=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,c=s.next;s.next=null,i===null?l=c:i.next=c,i=s;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==i&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=s))}if(l!==null){var y=o.baseState;i=0,h=c=s=null,a=l;do{var g=a.lane,k=a.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:k,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,E=a;switch(g=t,k=n,E.tag){case 1:if(w=E.payload,typeof w=="function"){y=w.call(k,y,g);break e}y=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=E.payload,g=typeof w=="function"?w.call(k,y,g):w,g==null)break e;y=J({},y,g);break e;case 2:mt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[a]:g.push(a))}else k={eventTime:k,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=k,s=y):h=h.next=k,i|=g;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;g=a,a=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(1);if(h===null&&(s=y),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=h,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);Gt|=i,e.lanes=i,e.memoizedState=y}}function bs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(F(191,o));o.call(r)}}}var Pr={},Je=jt(Pr),yr=jt(Pr),vr=jt(Pr);function Ut(e){if(e===Pr)throw Error(F(174));return e}function ya(e,t){switch(W(vr,t),W(yr,e),W(Je,Pr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ni(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ni(t,e)}G(Je),W(Je,t)}function An(){G(Je),G(yr),G(vr)}function Cc(e){Ut(vr.current);var t=Ut(Je.current),n=ni(t,e.type);t!==n&&(W(yr,e),W(Je,n))}function va(e){yr.current===e&&(G(Je),G(yr))}var X=jt(0);function Lo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ll=[];function xa(){for(var e=0;e<Ll.length;e++)Ll[e]._workInProgressVersionPrimary=null;Ll.length=0}var co=dt.ReactCurrentDispatcher,Tl=dt.ReactCurrentBatchConfig,Qt=0,Z=null,re=null,ie=null,To=!1,tr=!1,xr=0,Rf=0;function pe(){throw Error(F(321))}function wa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ke(e[n],t[n]))return!1;return!0}function ka(e,t,n,r,o,l){if(Qt=l,Z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,co.current=e===null||e.memoizedState===null?$f:Vf,e=n(r,o),tr){l=0;do{if(tr=!1,xr=0,25<=l)throw Error(F(301));l+=1,ie=re=null,t.updateQueue=null,co.current=Kf,e=n(r,o)}while(tr)}if(co.current=_o,t=re!==null&&re.next!==null,Qt=0,ie=re=Z=null,To=!1,t)throw Error(F(300));return e}function Ea(){var e=xr!==0;return xr=0,e}function Ye(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?Z.memoizedState=ie=e:ie=ie.next=e,ie}function Me(){if(re===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var t=ie===null?Z.memoizedState:ie.next;if(t!==null)ie=t,re=e;else{if(e===null)throw Error(F(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},ie===null?Z.memoizedState=ie=e:ie=ie.next=e}return ie}function wr(e,t){return typeof t=="function"?t(e):t}function _l(e){var t=Me(),n=t.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=e;var r=re,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var a=i=null,s=null,c=l;do{var h=c.lane;if((Qt&h)===h)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var y={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(a=s=y,i=r):s=s.next=y,Z.lanes|=h,Gt|=h}c=c.next}while(c!==null&&c!==l);s===null?i=r:s.next=a,Ke(r,t.memoizedState)||(ke=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,Z.lanes|=l,Gt|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ml(e){var t=Me(),n=t.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);Ke(l,t.memoizedState)||(ke=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Sc(){}function Fc(e,t){var n=Z,r=Me(),o=t(),l=!Ke(r.memoizedState,o);if(l&&(r.memoizedState=o,ke=!0),r=r.queue,Ca(bc.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||ie!==null&&ie.memoizedState.tag&1){if(n.flags|=2048,kr(9,Ac.bind(null,n,r,o,t),void 0,null),ae===null)throw Error(F(349));(Qt&30)!==0||Nc(n,t,o)}return o}function Nc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ac(e,t,n,r){t.value=n,t.getSnapshot=r,Dc(t)&&Pc(e)}function bc(e,t,n){return n(function(){Dc(t)&&Pc(e)})}function Dc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ke(e,n)}catch{return!0}}function Pc(e){var t=ut(e,1);t!==null&&Ve(t,e,1,-1)}function Ds(e){var t=Ye();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wr,lastRenderedState:e},t.queue=e,e=e.dispatch=Uf.bind(null,Z,e),[t.memoizedState,e]}function kr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function zc(){return Me().memoizedState}function po(e,t,n,r){var o=Ye();Z.flags|=e,o.memoizedState=kr(1|t,n,void 0,r===void 0?null:r)}function Zo(e,t,n,r){var o=Me();r=r===void 0?null:r;var l=void 0;if(re!==null){var i=re.memoizedState;if(l=i.destroy,r!==null&&wa(r,i.deps)){o.memoizedState=kr(t,n,l,r);return}}Z.flags|=e,o.memoizedState=kr(1|t,n,l,r)}function Ps(e,t){return po(8390656,8,e,t)}function Ca(e,t){return Zo(2048,8,e,t)}function Bc(e,t){return Zo(4,2,e,t)}function jc(e,t){return Zo(4,4,e,t)}function Lc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Tc(e,t,n){return n=n!=null?n.concat([e]):null,Zo(4,4,Lc.bind(null,t,e),n)}function Sa(){}function _c(e,t){var n=Me();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&wa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Mc(e,t){var n=Me();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&wa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Rc(e,t,n){return(Qt&21)===0?(e.baseState&&(e.baseState=!1,ke=!0),e.memoizedState=n):(Ke(n,t)||(n=Vu(),Z.lanes|=n,Gt|=n,e.baseState=!0),t)}function If(e,t){var n=$;$=n!==0&&4>n?n:4,e(!0);var r=Tl.transition;Tl.transition={};try{e(!1),t()}finally{$=n,Tl.transition=r}}function Ic(){return Me().memoizedState}function Of(e,t,n){var r=At(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Oc(e))Uc(t,n);else if(n=kc(e,t,n,r),n!==null){var o=ye();Ve(n,e,r,o),$c(n,t,r)}}function Uf(e,t,n){var r=At(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Oc(e))Uc(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,a=l(i,n);if(o.hasEagerState=!0,o.eagerState=a,Ke(a,i)){var s=t.interleaved;s===null?(o.next=o,ma(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=kc(e,t,o,r),n!==null&&(o=ye(),Ve(n,e,r,o),$c(n,t,r))}}function Oc(e){var t=e.alternate;return e===Z||t!==null&&t===Z}function Uc(e,t){tr=To=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function $c(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ta(e,n)}}var _o={readContext:_e,useCallback:pe,useContext:pe,useEffect:pe,useImperativeHandle:pe,useInsertionEffect:pe,useLayoutEffect:pe,useMemo:pe,useReducer:pe,useRef:pe,useState:pe,useDebugValue:pe,useDeferredValue:pe,useTransition:pe,useMutableSource:pe,useSyncExternalStore:pe,useId:pe,unstable_isNewReconciler:!1},$f={readContext:_e,useCallback:function(e,t){return Ye().memoizedState=[e,t===void 0?null:t],e},useContext:_e,useEffect:Ps,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,po(4194308,4,Lc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return po(4194308,4,e,t)},useInsertionEffect:function(e,t){return po(4,2,e,t)},useMemo:function(e,t){var n=Ye();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ye();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Of.bind(null,Z,e),[r.memoizedState,e]},useRef:function(e){var t=Ye();return e={current:e},t.memoizedState=e},useState:Ds,useDebugValue:Sa,useDeferredValue:function(e){return Ye().memoizedState=e},useTransition:function(){var e=Ds(!1),t=e[0];return e=If.bind(null,e[1]),Ye().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Z,o=Ye();if(Y){if(n===void 0)throw Error(F(407));n=n()}else{if(n=t(),ae===null)throw Error(F(349));(Qt&30)!==0||Nc(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,Ps(bc.bind(null,r,l,e),[e]),r.flags|=2048,kr(9,Ac.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Ye(),t=ae.identifierPrefix;if(Y){var n=lt,r=ot;n=(r&~(1<<32-$e(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=xr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Rf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Vf={readContext:_e,useCallback:_c,useContext:_e,useEffect:Ca,useImperativeHandle:Tc,useInsertionEffect:Bc,useLayoutEffect:jc,useMemo:Mc,useReducer:_l,useRef:zc,useState:function(){return _l(wr)},useDebugValue:Sa,useDeferredValue:function(e){var t=Me();return Rc(t,re.memoizedState,e)},useTransition:function(){var e=_l(wr)[0],t=Me().memoizedState;return[e,t]},useMutableSource:Sc,useSyncExternalStore:Fc,useId:Ic,unstable_isNewReconciler:!1},Kf={readContext:_e,useCallback:_c,useContext:_e,useEffect:Ca,useImperativeHandle:Tc,useInsertionEffect:Bc,useLayoutEffect:jc,useMemo:Mc,useReducer:Ml,useRef:zc,useState:function(){return Ml(wr)},useDebugValue:Sa,useDeferredValue:function(e){var t=Me();return re===null?t.memoizedState=e:Rc(t,re.memoizedState,e)},useTransition:function(){var e=Ml(wr)[0],t=Me().memoizedState;return[e,t]},useMutableSource:Sc,useSyncExternalStore:Fc,useId:Ic,unstable_isNewReconciler:!1};function Ie(e,t){if(e&&e.defaultProps){t=J({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ci(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:J({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Jo={isMounted:function(e){return(e=e._reactInternals)?Zt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ye(),o=At(e),l=it(r,o);l.payload=t,n!=null&&(l.callback=n),t=Ft(e,l,o),t!==null&&(Ve(t,e,o,r),uo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ye(),o=At(e),l=it(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Ft(e,l,o),t!==null&&(Ve(t,e,o,r),uo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ye(),r=At(e),o=it(n,r);o.tag=2,t!=null&&(o.callback=t),t=Ft(e,o,r),t!==null&&(Ve(t,e,r,n),uo(t,e,r))}};function zs(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!fr(n,r)||!fr(o,l):!0}function Vc(e,t,n){var r=!1,o=zt,l=t.contextType;return typeof l=="object"&&l!==null?l=_e(l):(o=Ce(t)?Wt:me.current,r=t.contextTypes,l=(r=r!=null)?Sn(e,o):zt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Jo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function Bs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Jo.enqueueReplaceState(t,t.state,null)}function Si(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},ga(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=_e(l):(l=Ce(t)?Wt:me.current,o.context=Sn(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Ci(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Jo.enqueueReplaceState(o,o.state,null),jo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function bn(e,t){try{var n="",r=t;do n+=yp(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function Rl(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function Fi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Wf=typeof WeakMap=="function"?WeakMap:Map;function Kc(e,t,n){n=it(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ro||(Ro=!0,Ti=r),Fi(e,t)},n}function Wc(e,t,n){n=it(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Fi(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Fi(e,t),typeof r!="function"&&(Nt===null?Nt=new Set([this]):Nt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function js(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Wf;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=l0.bind(null,e,t,n),t.then(e,e))}function Ls(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ts(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=it(-1,1),t.tag=2,Ft(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var Hf=dt.ReactCurrentOwner,ke=!1;function ge(e,t,n,r){t.child=e===null?wc(t,null,n,r):Nn(t,e.child,n,r)}function _s(e,t,n,r,o){n=n.render;var l=t.ref;return kn(t,o),r=ka(e,t,n,r,l,o),n=Ea(),e!==null&&!ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ct(e,t,o)):(Y&&n&&ua(t),t.flags|=1,ge(e,t,r,o),t.child)}function Ms(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!Ba(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Hc(e,t,l,r,o)):(e=go(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,(e.lanes&o)===0){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:fr,n(i,r)&&e.ref===t.ref)return ct(e,t,o)}return t.flags|=1,e=bt(l,r),e.ref=t.ref,e.return=t,t.child=e}function Hc(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(fr(l,r)&&e.ref===t.ref)if(ke=!1,t.pendingProps=r=l,(e.lanes&o)!==0)(e.flags&131072)!==0&&(ke=!0);else return t.lanes=e.lanes,ct(e,t,o)}return Ni(e,t,n,r,o)}function Qc(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(gn,Fe),Fe|=n;else{if((n&1073741824)===0)return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(gn,Fe),Fe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,W(gn,Fe),Fe|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,W(gn,Fe),Fe|=r;return ge(e,t,o,n),t.child}function Gc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ni(e,t,n,r,o){var l=Ce(n)?Wt:me.current;return l=Sn(t,l),kn(t,o),n=ka(e,t,n,r,l,o),r=Ea(),e!==null&&!ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ct(e,t,o)):(Y&&r&&ua(t),t.flags|=1,ge(e,t,n,o),t.child)}function Rs(e,t,n,r,o){if(Ce(n)){var l=!0;bo(t)}else l=!1;if(kn(t,o),t.stateNode===null)fo(e,t),Vc(t,n,r),Si(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var s=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=_e(c):(c=Ce(n)?Wt:me.current,c=Sn(t,c));var h=n.getDerivedStateFromProps,y=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function";y||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||s!==c)&&Bs(t,i,r,c),mt=!1;var g=t.memoizedState;i.state=g,jo(t,r,i,o),s=t.memoizedState,a!==r||g!==s||Ee.current||mt?(typeof h=="function"&&(Ci(t,n,h,r),s=t.memoizedState),(a=mt||zs(t,n,a,r,g,s,c))?(y||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=c,r=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Ec(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Ie(t.type,a),i.props=c,y=t.pendingProps,g=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=_e(s):(s=Ce(n)?Wt:me.current,s=Sn(t,s));var k=n.getDerivedStateFromProps;(h=typeof k=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==y||g!==s)&&Bs(t,i,r,s),mt=!1,g=t.memoizedState,i.state=g,jo(t,r,i,o);var w=t.memoizedState;a!==y||g!==w||Ee.current||mt?(typeof k=="function"&&(Ci(t,n,k,r),w=t.memoizedState),(c=mt||zs(t,n,c,r,g,w,s)||!1)?(h||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,w,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,w,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),i.props=r,i.state=w,i.context=s,r=c):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Ai(e,t,n,r,l,o)}function Ai(e,t,n,r,o,l){Gc(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&Cs(t,n,!1),ct(e,t,l);r=t.stateNode,Hf.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=Nn(t,e.child,null,l),t.child=Nn(t,null,a,l)):ge(e,t,a,l),t.memoizedState=r.state,o&&Cs(t,n,!0),t.child}function Yc(e){var t=e.stateNode;t.pendingContext?Es(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Es(e,t.context,!1),ya(e,t.containerInfo)}function Is(e,t,n,r,o){return Fn(),da(o),t.flags|=256,ge(e,t,n,r),t.child}var bi={dehydrated:null,treeContext:null,retryLane:0};function Di(e){return{baseLanes:e,cachePool:null,transitions:null}}function Xc(e,t,n){var r=t.pendingProps,o=X.current,l=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),W(X,o&1),e===null)return ki(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},(r&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=i):l=tl(i,r,0,null),e=Vt(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Di(n),t.memoizedState=bi,e):Fa(t,i));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Qf(e,t,i,r,a,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return(i&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=bt(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?l=bt(a,l):(l=Vt(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?Di(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=bi,r}return l=e.child,e=l.sibling,r=bt(l,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Fa(e,t){return t=tl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Jr(e,t,n,r){return r!==null&&da(r),Nn(t,e.child,null,n),e=Fa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Qf(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=Rl(Error(F(422))),Jr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=tl({mode:"visible",children:r.children},o,0,null),l=Vt(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,(t.mode&1)!==0&&Nn(t,e.child,null,i),t.child.memoizedState=Di(i),t.memoizedState=bi,l);if((t.mode&1)===0)return Jr(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(F(419)),r=Rl(l,r,void 0),Jr(e,t,i,r)}if(a=(i&e.childLanes)!==0,ke||a){if(r=ae,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|i))!==0?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,ut(e,o),Ve(r,e,o,-1))}return za(),r=Rl(Error(F(421))),Jr(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=i0.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,Ne=St(o.nextSibling),Ae=t,Y=!0,Ue=null,e!==null&&(Be[je++]=ot,Be[je++]=lt,Be[je++]=Ht,ot=e.id,lt=e.overflow,Ht=t),t=Fa(t,r.children),t.flags|=4096,t)}function Os(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ei(e.return,t,n)}function Il(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function Zc(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(ge(e,t,r.children,n),r=X.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Os(e,n,t);else if(e.tag===19)Os(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(X,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Lo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Il(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Lo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Il(t,!0,n,null,l);break;case"together":Il(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function fo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ct(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gt|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(F(153));if(t.child!==null){for(e=t.child,n=bt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=bt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Gf(e,t,n){switch(t.tag){case 3:Yc(t),Fn();break;case 5:Cc(t);break;case 1:Ce(t.type)&&bo(t);break;case 4:ya(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;W(zo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(X,X.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Xc(e,t,n):(W(X,X.current&1),e=ct(e,t,n),e!==null?e.sibling:null);W(X,X.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Zc(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),W(X,X.current),r)break;return null;case 22:case 23:return t.lanes=0,Qc(e,t,n)}return ct(e,t,n)}var Jc,Pi,qc,ed;Jc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Pi=function(){};qc=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Ut(Je.current);var l=null;switch(n){case"input":o=Jl(e,o),r=Jl(e,r),l=[];break;case"select":o=J({},o,{value:void 0}),r=J({},r,{value:void 0}),l=[];break;case"textarea":o=ti(e,o),r=ti(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=No)}ri(n,r);var i;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ir.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var s=r[c];if(a=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(i in a)!a.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&a[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(l||(l=[]),l.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(l=l||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ir.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&Q("scroll",e),l||a===s||(l=[])):(l=l||[]).push(c,s))}n&&(l=l||[]).push("style",n);var c=l;(t.updateQueue=c)&&(t.flags|=4)}};ed=function(e,t,n,r){n!==r&&(t.flags|=4)};function Vn(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Yf(e,t,n){var r=t.pendingProps;switch(ca(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fe(t),null;case 1:return Ce(t.type)&&Ao(),fe(t),null;case 3:return r=t.stateNode,An(),G(Ee),G(me),xa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Xr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ue!==null&&(Ri(Ue),Ue=null))),Pi(e,t),fe(t),null;case 5:va(t);var o=Ut(vr.current);if(n=t.type,e!==null&&t.stateNode!=null)qc(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(F(166));return fe(t),null}if(e=Ut(Je.current),Xr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Xe]=t,r[gr]=l,e=(t.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(o=0;o<Yn.length;o++)Q(Yn[o],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":Ya(r,l),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},Q("invalid",r);break;case"textarea":Za(r,l),Q("invalid",r)}ri(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&Yr(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&Yr(r.textContent,a,e),o=["children",""+a]):ir.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&Q("scroll",r)}switch(n){case"input":Ur(r),Xa(r,l,!0);break;case"textarea":Ur(r),Ja(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=No)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=bu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Xe]=t,e[gr]=r,Jc(e,t,!1,!1),t.stateNode=e;e:{switch(i=oi(n,r),n){case"dialog":Q("cancel",e),Q("close",e),o=r;break;case"iframe":case"object":case"embed":Q("load",e),o=r;break;case"video":case"audio":for(o=0;o<Yn.length;o++)Q(Yn[o],e);o=r;break;case"source":Q("error",e),o=r;break;case"img":case"image":case"link":Q("error",e),Q("load",e),o=r;break;case"details":Q("toggle",e),o=r;break;case"input":Ya(e,r),o=Jl(e,r),Q("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=J({},r,{value:void 0}),Q("invalid",e);break;case"textarea":Za(e,r),o=ti(e,r),Q("invalid",e);break;default:o=r}ri(n,o),a=o;for(l in a)if(a.hasOwnProperty(l)){var s=a[l];l==="style"?zu(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Du(e,s)):l==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&ar(e,s):typeof s=="number"&&ar(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(ir.hasOwnProperty(l)?s!=null&&l==="onScroll"&&Q("scroll",e):s!=null&&Yi(e,l,s,i))}switch(n){case"input":Ur(e),Xa(e,r,!1);break;case"textarea":Ur(e),Ja(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Pt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?yn(e,!!r.multiple,l,!1):r.defaultValue!=null&&yn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=No)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return fe(t),null;case 6:if(e&&t.stateNode!=null)ed(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(F(166));if(n=Ut(vr.current),Ut(Je.current),Xr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Xe]=t,(l=r.nodeValue!==n)&&(e=Ae,e!==null))switch(e.tag){case 3:Yr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Yr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Xe]=t,t.stateNode=r}return fe(t),null;case 13:if(G(X),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&Ne!==null&&(t.mode&1)!==0&&(t.flags&128)===0)vc(),Fn(),t.flags|=98560,l=!1;else if(l=Xr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(F(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(F(317));l[Xe]=t}else Fn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;fe(t),l=!1}else Ue!==null&&(Ri(Ue),Ue=null),l=!0;if(!l)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(X.current&1)!==0?oe===0&&(oe=3):za())),t.updateQueue!==null&&(t.flags|=4),fe(t),null);case 4:return An(),Pi(e,t),e===null&&hr(t.stateNode.containerInfo),fe(t),null;case 10:return ha(t.type._context),fe(t),null;case 17:return Ce(t.type)&&Ao(),fe(t),null;case 19:if(G(X),l=t.memoizedState,l===null)return fe(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)Vn(l,!1);else{if(oe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Lo(e),i!==null){for(t.flags|=128,Vn(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(X,X.current&1|2),t.child}e=e.sibling}l.tail!==null&&te()>Dn&&(t.flags|=128,r=!0,Vn(l,!1),t.lanes=4194304)}else{if(!r)if(e=Lo(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Vn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!Y)return fe(t),null}else 2*te()-l.renderingStartTime>Dn&&n!==1073741824&&(t.flags|=128,r=!0,Vn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=te(),t.sibling=null,n=X.current,W(X,r?n&1|2:n&1),t):(fe(t),null);case 22:case 23:return Pa(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Fe&1073741824)!==0&&(fe(t),t.subtreeFlags&6&&(t.flags|=8192)):fe(t),null;case 24:return null;case 25:return null}throw Error(F(156,t.tag))}function Xf(e,t){switch(ca(t),t.tag){case 1:return Ce(t.type)&&Ao(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return An(),G(Ee),G(me),xa(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return va(t),null;case 13:if(G(X),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(F(340));Fn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(X),null;case 4:return An(),null;case 10:return ha(t.type._context),null;case 22:case 23:return Pa(),null;case 24:return null;default:return null}}var qr=!1,he=!1,Zf=typeof WeakSet=="function"?WeakSet:Set,D=null;function mn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){q(e,t,r)}else n.current=null}function zi(e,t,n){try{n()}catch(r){q(e,t,r)}}var Us=!1;function Jf(e,t){if(hi=Co,e=lc(),sa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,a=-1,s=-1,c=0,h=0,y=e,g=null;t:for(;;){for(var k;y!==n||o!==0&&y.nodeType!==3||(a=i+o),y!==l||r!==0&&y.nodeType!==3||(s=i+r),y.nodeType===3&&(i+=y.nodeValue.length),(k=y.firstChild)!==null;)g=y,y=k;for(;;){if(y===e)break t;if(g===n&&++c===o&&(a=i),g===l&&++h===r&&(s=i),(k=y.nextSibling)!==null)break;y=g,g=y.parentNode}y=k}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(mi={focusedElem:e,selectionRange:n},Co=!1,D=t;D!==null;)if(t=D,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,D=e;else for(;D!==null;){t=D;try{var w=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var E=w.memoizedProps,B=w.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?E:Ie(t.type,E),B);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(v){q(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,D=e;break}D=t.return}return w=Us,Us=!1,w}function nr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&zi(t,n,l)}o=o.next}while(o!==r)}}function qo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Bi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function td(e){var t=e.alternate;t!==null&&(e.alternate=null,td(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Xe],delete t[gr],delete t[vi],delete t[Lf],delete t[Tf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function nd(e){return e.tag===5||e.tag===3||e.tag===4}function $s(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||nd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ji(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=No));else if(r!==4&&(e=e.child,e!==null))for(ji(e,t,n),e=e.sibling;e!==null;)ji(e,t,n),e=e.sibling}function Li(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Li(e,t,n),e=e.sibling;e!==null;)Li(e,t,n),e=e.sibling}var se=null,Oe=!1;function ft(e,t,n){for(n=n.child;n!==null;)rd(e,t,n),n=n.sibling}function rd(e,t,n){if(Ze&&typeof Ze.onCommitFiberUnmount=="function")try{Ze.onCommitFiberUnmount(Wo,n)}catch{}switch(n.tag){case 5:he||mn(n,t);case 6:var r=se,o=Oe;se=null,ft(e,t,n),se=r,Oe=o,se!==null&&(Oe?(e=se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):se.removeChild(n.stateNode));break;case 18:se!==null&&(Oe?(e=se,n=n.stateNode,e.nodeType===8?Bl(e.parentNode,n):e.nodeType===1&&Bl(e,n),dr(e)):Bl(se,n.stateNode));break;case 4:r=se,o=Oe,se=n.stateNode.containerInfo,Oe=!0,ft(e,t,n),se=r,Oe=o;break;case 0:case 11:case 14:case 15:if(!he&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&((l&2)!==0||(l&4)!==0)&&zi(n,t,i),o=o.next}while(o!==r)}ft(e,t,n);break;case 1:if(!he&&(mn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){q(n,t,a)}ft(e,t,n);break;case 21:ft(e,t,n);break;case 22:n.mode&1?(he=(r=he)||n.memoizedState!==null,ft(e,t,n),he=r):ft(e,t,n);break;default:ft(e,t,n)}}function Vs(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Zf),t.forEach(function(r){var o=a0.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Re(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:se=a.stateNode,Oe=!1;break e;case 3:se=a.stateNode.containerInfo,Oe=!0;break e;case 4:se=a.stateNode.containerInfo,Oe=!0;break e}a=a.return}if(se===null)throw Error(F(160));rd(l,i,o),se=null,Oe=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(c){q(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)od(t,e),t=t.sibling}function od(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Re(t,e),Ge(e),r&4){try{nr(3,e,e.return),qo(3,e)}catch(E){q(e,e.return,E)}try{nr(5,e,e.return)}catch(E){q(e,e.return,E)}}break;case 1:Re(t,e),Ge(e),r&512&&n!==null&&mn(n,n.return);break;case 5:if(Re(t,e),Ge(e),r&512&&n!==null&&mn(n,n.return),e.flags&32){var o=e.stateNode;try{ar(o,"")}catch(E){q(e,e.return,E)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&Nu(o,l),oi(a,i);var c=oi(a,l);for(i=0;i<s.length;i+=2){var h=s[i],y=s[i+1];h==="style"?zu(o,y):h==="dangerouslySetInnerHTML"?Du(o,y):h==="children"?ar(o,y):Yi(o,h,y,c)}switch(a){case"input":ql(o,l);break;case"textarea":Au(o,l);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var k=l.value;k!=null?yn(o,!!l.multiple,k,!1):g!==!!l.multiple&&(l.defaultValue!=null?yn(o,!!l.multiple,l.defaultValue,!0):yn(o,!!l.multiple,l.multiple?[]:"",!1))}o[gr]=l}catch(E){q(e,e.return,E)}}break;case 6:if(Re(t,e),Ge(e),r&4){if(e.stateNode===null)throw Error(F(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(E){q(e,e.return,E)}}break;case 3:if(Re(t,e),Ge(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{dr(t.containerInfo)}catch(E){q(e,e.return,E)}break;case 4:Re(t,e),Ge(e);break;case 13:Re(t,e),Ge(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(ba=te())),r&4&&Vs(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(he=(c=he)||h,Re(t,e),he=c):Re(t,e),Ge(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&(e.mode&1)!==0)for(D=e,h=e.child;h!==null;){for(y=D=h;D!==null;){switch(g=D,k=g.child,g.tag){case 0:case 11:case 14:case 15:nr(4,g,g.return);break;case 1:mn(g,g.return);var w=g.stateNode;if(typeof w.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(E){q(r,n,E)}}break;case 5:mn(g,g.return);break;case 22:if(g.memoizedState!==null){Ws(y);continue}}k!==null?(k.return=g,D=k):Ws(y)}h=h.sibling}e:for(h=null,y=e;;){if(y.tag===5){if(h===null){h=y;try{o=y.stateNode,c?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=y.stateNode,s=y.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Pu("display",i))}catch(E){q(e,e.return,E)}}}else if(y.tag===6){if(h===null)try{y.stateNode.nodeValue=c?"":y.memoizedProps}catch(E){q(e,e.return,E)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===e)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break e;for(;y.sibling===null;){if(y.return===null||y.return===e)break e;h===y&&(h=null),y=y.return}h===y&&(h=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:Re(t,e),Ge(e),r&4&&Vs(e);break;case 21:break;default:Re(t,e),Ge(e)}}function Ge(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(nd(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(ar(o,""),r.flags&=-33);var l=$s(e);Li(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,a=$s(e);ji(e,a,i);break;default:throw Error(F(161))}}catch(s){q(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function qf(e,t,n){D=e,ld(e)}function ld(e,t,n){for(var r=(e.mode&1)!==0;D!==null;){var o=D,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||qr;if(!i){var a=o.alternate,s=a!==null&&a.memoizedState!==null||he;a=qr;var c=he;if(qr=i,(he=s)&&!c)for(D=o;D!==null;)i=D,s=i.child,i.tag===22&&i.memoizedState!==null?Hs(o):s!==null?(s.return=i,D=s):Hs(o);for(;l!==null;)D=l,ld(l),l=l.sibling;D=o,qr=a,he=c}Ks(e)}else(o.subtreeFlags&8772)!==0&&l!==null?(l.return=o,D=l):Ks(e)}}function Ks(e){for(;D!==null;){var t=D;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:he||qo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!he)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ie(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&bs(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}bs(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var y=h.dehydrated;y!==null&&dr(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}he||t.flags&512&&Bi(t)}catch(g){q(t,t.return,g)}}if(t===e){D=null;break}if(n=t.sibling,n!==null){n.return=t.return,D=n;break}D=t.return}}function Ws(e){for(;D!==null;){var t=D;if(t===e){D=null;break}var n=t.sibling;if(n!==null){n.return=t.return,D=n;break}D=t.return}}function Hs(e){for(;D!==null;){var t=D;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{qo(4,t)}catch(s){q(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){q(t,o,s)}}var l=t.return;try{Bi(t)}catch(s){q(t,l,s)}break;case 5:var i=t.return;try{Bi(t)}catch(s){q(t,i,s)}}}catch(s){q(t,t.return,s)}if(t===e){D=null;break}var a=t.sibling;if(a!==null){a.return=t.return,D=a;break}D=t.return}}var e0=Math.ceil,Mo=dt.ReactCurrentDispatcher,Na=dt.ReactCurrentOwner,Te=dt.ReactCurrentBatchConfig,O=0,ae=null,ne=null,ue=0,Fe=0,gn=jt(0),oe=0,Er=null,Gt=0,el=0,Aa=0,rr=null,we=null,ba=0,Dn=1/0,nt=null,Ro=!1,Ti=null,Nt=null,eo=!1,xt=null,Io=0,or=0,_i=null,ho=-1,mo=0;function ye(){return(O&6)!==0?te():ho!==-1?ho:ho=te()}function At(e){return(e.mode&1)===0?1:(O&2)!==0&&ue!==0?ue&-ue:Mf.transition!==null?(mo===0&&(mo=Vu()),mo):(e=$,e!==0||(e=window.event,e=e===void 0?16:Xu(e.type)),e)}function Ve(e,t,n,r){if(50<or)throw or=0,_i=null,Error(F(185));Ar(e,n,r),((O&2)===0||e!==ae)&&(e===ae&&((O&2)===0&&(el|=n),oe===4&&yt(e,ue)),Se(e,r),n===1&&O===0&&(t.mode&1)===0&&(Dn=te()+500,Xo&&Lt()))}function Se(e,t){var n=e.callbackNode;_p(e,t);var r=Eo(e,e===ae?ue:0);if(r===0)n!==null&&ts(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ts(n),t===1)e.tag===0?_f(Qs.bind(null,e)):mc(Qs.bind(null,e)),Bf(function(){(O&6)===0&&Lt()}),n=null;else{switch(Ku(r)){case 1:n=ea;break;case 4:n=Uu;break;case 16:n=ko;break;case 536870912:n=$u;break;default:n=ko}n=fd(n,id.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function id(e,t){if(ho=-1,mo=0,(O&6)!==0)throw Error(F(327));var n=e.callbackNode;if(En()&&e.callbackNode!==n)return null;var r=Eo(e,e===ae?ue:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Oo(e,r);else{t=r;var o=O;O|=2;var l=sd();(ae!==e||ue!==t)&&(nt=null,Dn=te()+500,$t(e,t));do try{r0();break}catch(a){ad(e,a)}while(1);fa(),Mo.current=l,O=o,ne!==null?t=0:(ae=null,ue=0,t=oe)}if(t!==0){if(t===2&&(o=ui(e),o!==0&&(r=o,t=Mi(e,o))),t===1)throw n=Er,$t(e,0),yt(e,r),Se(e,te()),n;if(t===6)yt(e,r);else{if(o=e.current.alternate,(r&30)===0&&!t0(o)&&(t=Oo(e,r),t===2&&(l=ui(e),l!==0&&(r=l,t=Mi(e,l))),t===1))throw n=Er,$t(e,0),yt(e,r),Se(e,te()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(F(345));case 2:Rt(e,we,nt);break;case 3:if(yt(e,r),(r&130023424)===r&&(t=ba+500-te(),10<t)){if(Eo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ye(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=yi(Rt.bind(null,e,we,nt),t);break}Rt(e,we,nt);break;case 4:if(yt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-$e(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*e0(r/1960))-r,10<r){e.timeoutHandle=yi(Rt.bind(null,e,we,nt),r);break}Rt(e,we,nt);break;case 5:Rt(e,we,nt);break;default:throw Error(F(329))}}}return Se(e,te()),e.callbackNode===n?id.bind(null,e):null}function Mi(e,t){var n=rr;return e.current.memoizedState.isDehydrated&&($t(e,t).flags|=256),e=Oo(e,t),e!==2&&(t=we,we=n,t!==null&&Ri(t)),e}function Ri(e){we===null?we=e:we.push.apply(we,e)}function t0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!Ke(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yt(e,t){for(t&=~Aa,t&=~el,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-$e(t),r=1<<n;e[n]=-1,t&=~r}}function Qs(e){if((O&6)!==0)throw Error(F(327));En();var t=Eo(e,0);if((t&1)===0)return Se(e,te()),null;var n=Oo(e,t);if(e.tag!==0&&n===2){var r=ui(e);r!==0&&(t=r,n=Mi(e,r))}if(n===1)throw n=Er,$t(e,0),yt(e,t),Se(e,te()),n;if(n===6)throw Error(F(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Rt(e,we,nt),Se(e,te()),null}function Da(e,t){var n=O;O|=1;try{return e(t)}finally{O=n,O===0&&(Dn=te()+500,Xo&&Lt())}}function Yt(e){xt!==null&&xt.tag===0&&(O&6)===0&&En();var t=O;O|=1;var n=Te.transition,r=$;try{if(Te.transition=null,$=1,e)return e()}finally{$=r,Te.transition=n,O=t,(O&6)===0&&Lt()}}function Pa(){Fe=gn.current,G(gn)}function $t(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,zf(n)),ne!==null)for(n=ne.return;n!==null;){var r=n;switch(ca(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ao();break;case 3:An(),G(Ee),G(me),xa();break;case 5:va(r);break;case 4:An();break;case 13:G(X);break;case 19:G(X);break;case 10:ha(r.type._context);break;case 22:case 23:Pa()}n=n.return}if(ae=e,ne=e=bt(e.current,null),ue=Fe=t,oe=0,Er=null,Aa=el=Gt=0,we=rr=null,Ot!==null){for(t=0;t<Ot.length;t++)if(n=Ot[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}Ot=null}return e}function ad(e,t){do{var n=ne;try{if(fa(),co.current=_o,To){for(var r=Z.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}To=!1}if(Qt=0,ie=re=Z=null,tr=!1,xr=0,Na.current=null,n===null||n.return===null){oe=1,Er=t,ne=null;break}e:{var l=e,i=n.return,a=n,s=t;if(t=ue,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,h=a,y=h.tag;if((h.mode&1)===0&&(y===0||y===11||y===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var k=Ls(i);if(k!==null){k.flags&=-257,Ts(k,i,a,l,t),k.mode&1&&js(l,c,t),t=k,s=c;var w=t.updateQueue;if(w===null){var E=new Set;E.add(s),t.updateQueue=E}else w.add(s);break e}else{if((t&1)===0){js(l,c,t),za();break e}s=Error(F(426))}}else if(Y&&a.mode&1){var B=Ls(i);if(B!==null){(B.flags&65536)===0&&(B.flags|=256),Ts(B,i,a,l,t),da(bn(s,a));break e}}l=s=bn(s,a),oe!==4&&(oe=2),rr===null?rr=[l]:rr.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var f=Kc(l,s,t);As(l,f);break e;case 1:a=s;var d=l.type,p=l.stateNode;if((l.flags&128)===0&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Nt===null||!Nt.has(p)))){l.flags|=65536,t&=-t,l.lanes|=t;var v=Wc(l,a,t);As(l,v);break e}}l=l.return}while(l!==null)}cd(n)}catch(C){t=C,ne===n&&n!==null&&(ne=n=n.return);continue}break}while(1)}function sd(){var e=Mo.current;return Mo.current=_o,e===null?_o:e}function za(){(oe===0||oe===3||oe===2)&&(oe=4),ae===null||(Gt&268435455)===0&&(el&268435455)===0||yt(ae,ue)}function Oo(e,t){var n=O;O|=2;var r=sd();(ae!==e||ue!==t)&&(nt=null,$t(e,t));do try{n0();break}catch(o){ad(e,o)}while(1);if(fa(),O=n,Mo.current=r,ne!==null)throw Error(F(261));return ae=null,ue=0,oe}function n0(){for(;ne!==null;)ud(ne)}function r0(){for(;ne!==null&&!Ap();)ud(ne)}function ud(e){var t=pd(e.alternate,e,Fe);e.memoizedProps=e.pendingProps,t===null?cd(e):ne=t,Na.current=null}function cd(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Yf(n,t,Fe),n!==null){ne=n;return}}else{if(n=Xf(n,t),n!==null){n.flags&=32767,ne=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{oe=6,ne=null;return}}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);oe===0&&(oe=5)}function Rt(e,t,n){var r=$,o=Te.transition;try{Te.transition=null,$=1,o0(e,t,n,r)}finally{Te.transition=o,$=r}return null}function o0(e,t,n,r){do En();while(xt!==null);if((O&6)!==0)throw Error(F(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(F(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Mp(e,l),e===ae&&(ne=ae=null,ue=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||eo||(eo=!0,fd(ko,function(){return En(),null})),l=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||l){l=Te.transition,Te.transition=null;var i=$;$=1;var a=O;O|=4,Na.current=null,Jf(e,n),od(n,e),Sf(mi),Co=!!hi,mi=hi=null,e.current=n,qf(n),bp(),O=a,$=i,Te.transition=l}else e.current=n;if(eo&&(eo=!1,xt=e,Io=o),l=e.pendingLanes,l===0&&(Nt=null),zp(n.stateNode),Se(e,te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ro)throw Ro=!1,e=Ti,Ti=null,e;return(Io&1)!==0&&e.tag!==0&&En(),l=e.pendingLanes,(l&1)!==0?e===_i?or++:(or=0,_i=e):or=0,Lt(),null}function En(){if(xt!==null){var e=Ku(Io),t=Te.transition,n=$;try{if(Te.transition=null,$=16>e?16:e,xt===null)var r=!1;else{if(e=xt,xt=null,Io=0,(O&6)!==0)throw Error(F(331));var o=O;for(O|=4,D=e.current;D!==null;){var l=D,i=l.child;if((D.flags&16)!==0){var a=l.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for(D=c;D!==null;){var h=D;switch(h.tag){case 0:case 11:case 15:nr(8,h,l)}var y=h.child;if(y!==null)y.return=h,D=y;else for(;D!==null;){h=D;var g=h.sibling,k=h.return;if(td(h),h===c){D=null;break}if(g!==null){g.return=k,D=g;break}D=k}}}var w=l.alternate;if(w!==null){var E=w.child;if(E!==null){w.child=null;do{var B=E.sibling;E.sibling=null,E=B}while(E!==null)}}D=l}}if((l.subtreeFlags&2064)!==0&&i!==null)i.return=l,D=i;else e:for(;D!==null;){if(l=D,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:nr(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,D=f;break e}D=l.return}}var d=e.current;for(D=d;D!==null;){i=D;var p=i.child;if((i.subtreeFlags&2064)!==0&&p!==null)p.return=i,D=p;else e:for(i=d;D!==null;){if(a=D,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:qo(9,a)}}catch(C){q(a,a.return,C)}if(a===i){D=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,D=v;break e}D=a.return}}if(O=o,Lt(),Ze&&typeof Ze.onPostCommitFiberRoot=="function")try{Ze.onPostCommitFiberRoot(Wo,e)}catch{}r=!0}return r}finally{$=n,Te.transition=t}}return!1}function Gs(e,t,n){t=bn(n,t),t=Kc(e,t,1),e=Ft(e,t,1),t=ye(),e!==null&&(Ar(e,1,t),Se(e,t))}function q(e,t,n){if(e.tag===3)Gs(e,e,n);else for(;t!==null;){if(t.tag===3){Gs(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Nt===null||!Nt.has(r))){e=bn(n,e),e=Wc(t,e,1),t=Ft(t,e,1),e=ye(),t!==null&&(Ar(t,1,e),Se(t,e));break}}t=t.return}}function l0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ye(),e.pingedLanes|=e.suspendedLanes&n,ae===e&&(ue&n)===n&&(oe===4||oe===3&&(ue&130023424)===ue&&500>te()-ba?$t(e,0):Aa|=n),Se(e,t)}function dd(e,t){t===0&&((e.mode&1)===0?t=1:(t=Kr,Kr<<=1,(Kr&130023424)===0&&(Kr=4194304)));var n=ye();e=ut(e,t),e!==null&&(Ar(e,t,n),Se(e,n))}function i0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),dd(e,n)}function a0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(t),dd(e,n)}var pd;pd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ee.current)ke=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return ke=!1,Gf(e,t,n);ke=(e.flags&131072)!==0}else ke=!1,Y&&(t.flags&1048576)!==0&&gc(t,Po,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;fo(e,t),e=t.pendingProps;var o=Sn(t,me.current);kn(t,n),o=ka(null,t,r,e,o,n);var l=Ea();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ce(r)?(l=!0,bo(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ga(t),o.updater=Jo,t.stateNode=o,o._reactInternals=t,Si(t,r,e,n),t=Ai(null,t,r,!0,l,n)):(t.tag=0,Y&&l&&ua(t),ge(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(fo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=u0(r),e=Ie(r,e),o){case 0:t=Ni(null,t,r,e,n);break e;case 1:t=Rs(null,t,r,e,n);break e;case 11:t=_s(null,t,r,e,n);break e;case 14:t=Ms(null,t,r,Ie(r.type,e),n);break e}throw Error(F(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ie(r,o),Ni(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ie(r,o),Rs(e,t,r,o,n);case 3:e:{if(Yc(t),e===null)throw Error(F(387));r=t.pendingProps,l=t.memoizedState,o=l.element,Ec(e,t),jo(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=bn(Error(F(423)),t),t=Is(e,t,r,n,o);break e}else if(r!==o){o=bn(Error(F(424)),t),t=Is(e,t,r,n,o);break e}else for(Ne=St(t.stateNode.containerInfo.firstChild),Ae=t,Y=!0,Ue=null,n=wc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fn(),r===o){t=ct(e,t,n);break e}ge(e,t,r,n)}t=t.child}return t;case 5:return Cc(t),e===null&&ki(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,gi(r,o)?i=null:l!==null&&gi(r,l)&&(t.flags|=32),Gc(e,t),ge(e,t,i,n),t.child;case 6:return e===null&&ki(t),null;case 13:return Xc(e,t,n);case 4:return ya(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Nn(t,null,r,n):ge(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ie(r,o),_s(e,t,r,o,n);case 7:return ge(e,t,t.pendingProps,n),t.child;case 8:return ge(e,t,t.pendingProps.children,n),t.child;case 12:return ge(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,W(zo,r._currentValue),r._currentValue=i,l!==null)if(Ke(l.value,i)){if(l.children===o.children&&!Ee.current){t=ct(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){i=l.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=it(-1,n&-n),s.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?s.next=s:(s.next=h.next,h.next=s),c.pending=s}}l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Ei(l.return,n,t),a.lanes|=n;break}s=s.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(F(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Ei(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}ge(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,kn(t,n),o=_e(o),r=r(o),t.flags|=1,ge(e,t,r,n),t.child;case 14:return r=t.type,o=Ie(r,t.pendingProps),o=Ie(r.type,o),Ms(e,t,r,o,n);case 15:return Hc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ie(r,o),fo(e,t),t.tag=1,Ce(r)?(e=!0,bo(t)):e=!1,kn(t,n),Vc(t,r,o),Si(t,r,o,n),Ai(null,t,r,!0,e,n);case 19:return Zc(e,t,n);case 22:return Qc(e,t,n)}throw Error(F(156,t.tag))};function fd(e,t){return Ou(e,t)}function s0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Le(e,t,n,r){return new s0(e,t,n,r)}function Ba(e){return e=e.prototype,!(!e||!e.isReactComponent)}function u0(e){if(typeof e=="function")return Ba(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Zi)return 11;if(e===Ji)return 14}return 2}function bt(e,t){var n=e.alternate;return n===null?(n=Le(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function go(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")Ba(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case ln:return Vt(n.children,o,l,t);case Xi:i=8,o|=8;break;case Gl:return e=Le(12,n,t,o|2),e.elementType=Gl,e.lanes=l,e;case Yl:return e=Le(13,n,t,o),e.elementType=Yl,e.lanes=l,e;case Xl:return e=Le(19,n,t,o),e.elementType=Xl,e.lanes=l,e;case Cu:return tl(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ku:i=10;break e;case Eu:i=9;break e;case Zi:i=11;break e;case Ji:i=14;break e;case ht:i=16,r=null;break e}throw Error(F(130,e==null?e:typeof e,""))}return t=Le(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function Vt(e,t,n,r){return e=Le(7,e,r,t),e.lanes=n,e}function tl(e,t,n,r){return e=Le(22,e,r,t),e.elementType=Cu,e.lanes=n,e.stateNode={isHidden:!1},e}function Ol(e,t,n){return e=Le(6,e,null,t),e.lanes=n,e}function Ul(e,t,n){return t=Le(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function c0(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kl(0),this.expirationTimes=kl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ja(e,t,n,r,o,l,i,a,s){return e=new c0(e,t,n,a,s),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Le(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ga(l),e}function d0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:on,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function hd(e){if(!e)return zt;e=e._reactInternals;e:{if(Zt(e)!==e||e.tag!==1)throw Error(F(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ce(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(F(171))}if(e.tag===1){var n=e.type;if(Ce(n))return hc(e,n,t)}return t}function md(e,t,n,r,o,l,i,a,s){return e=ja(n,r,!0,e,o,l,i,a,s),e.context=hd(null),n=e.current,r=ye(),o=At(n),l=it(r,o),l.callback=t!=null?t:null,Ft(n,l,o),e.current.lanes=o,Ar(e,o,r),Se(e,r),e}function nl(e,t,n,r){var o=t.current,l=ye(),i=At(o);return n=hd(n),t.context===null?t.context=n:t.pendingContext=n,t=it(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ft(o,t,i),e!==null&&(Ve(e,o,i,l),uo(e,o,i)),i}function Uo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ys(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function La(e,t){Ys(e,t),(e=e.alternate)&&Ys(e,t)}function p0(){return null}var gd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ta(e){this._internalRoot=e}rl.prototype.render=Ta.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(F(409));nl(e,t,null,null)};rl.prototype.unmount=Ta.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Yt(function(){nl(null,e,null,null)}),t[st]=null}};function rl(e){this._internalRoot=e}rl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<gt.length&&t!==0&&t<gt[n].priority;n++);gt.splice(n,0,e),n===0&&Yu(e)}};function _a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ol(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Xs(){}function f0(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var c=Uo(i);l.call(c)}}var i=md(t,r,e,0,null,!1,!1,"",Xs);return e._reactRootContainer=i,e[st]=i.current,hr(e.nodeType===8?e.parentNode:e),Yt(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var c=Uo(s);a.call(c)}}var s=ja(e,0,!1,null,null,!1,!1,"",Xs);return e._reactRootContainer=s,e[st]=s.current,hr(e.nodeType===8?e.parentNode:e),Yt(function(){nl(t,s,n,r)}),s}function ll(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var a=o;o=function(){var s=Uo(i);a.call(s)}}nl(t,i,e,o)}else i=f0(n,t,e,o,r);return Uo(i)}Wu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Gn(t.pendingLanes);n!==0&&(ta(t,n|1),Se(t,te()),(O&6)===0&&(Dn=te()+500,Lt()))}break;case 13:Yt(function(){var r=ut(e,1);if(r!==null){var o=ye();Ve(r,e,1,o)}}),La(e,1)}};na=function(e){if(e.tag===13){var t=ut(e,134217728);if(t!==null){var n=ye();Ve(t,e,134217728,n)}La(e,134217728)}};Hu=function(e){if(e.tag===13){var t=At(e),n=ut(e,t);if(n!==null){var r=ye();Ve(n,e,t,r)}La(e,t)}};Qu=function(){return $};Gu=function(e,t){var n=$;try{return $=e,t()}finally{$=n}};ii=function(e,t,n){switch(t){case"input":if(ql(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Yo(r);if(!o)throw Error(F(90));Fu(r),ql(r,o)}}}break;case"textarea":Au(e,n);break;case"select":t=n.value,t!=null&&yn(e,!!n.multiple,t,!1)}};Lu=Da;Tu=Yt;var h0={usingClientEntryPoint:!1,Events:[Dr,cn,Yo,Bu,ju,Da]},Kn={findFiberByHostInstance:It,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},m0={bundleType:Kn.bundleType,version:Kn.version,rendererPackageName:Kn.rendererPackageName,rendererConfig:Kn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ru(e),e===null?null:e.stateNode},findFiberByHostInstance:Kn.findFiberByHostInstance||p0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var to=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!to.isDisabled&&to.supportsFiber)try{Wo=to.inject(m0),Ze=to}catch{}}De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=h0;De.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_a(t))throw Error(F(200));return d0(e,t,null,n)};De.createRoot=function(e,t){if(!_a(e))throw Error(F(299));var n=!1,r="",o=gd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ja(e,1,!1,null,null,n,!1,r,o),e[st]=t.current,hr(e.nodeType===8?e.parentNode:e),new Ta(t)};De.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(F(188)):(e=Object.keys(e).join(","),Error(F(268,e)));return e=Ru(t),e=e===null?null:e.stateNode,e};De.flushSync=function(e){return Yt(e)};De.hydrate=function(e,t,n){if(!ol(t))throw Error(F(200));return ll(null,e,t,!0,n)};De.hydrateRoot=function(e,t,n){if(!_a(e))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=gd;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=md(t,null,e,1,n!=null?n:null,o,!1,l,i),e[st]=t.current,hr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new rl(t)};De.render=function(e,t,n){if(!ol(t))throw Error(F(200));return ll(null,e,t,!1,n)};De.unmountComponentAtNode=function(e){if(!ol(e))throw Error(F(40));return e._reactRootContainer?(Yt(function(){ll(null,null,e,!1,function(){e._reactRootContainer=null,e[st]=null})}),!0):!1};De.unstable_batchedUpdates=Da;De.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ol(n))throw Error(F(200));if(e==null||e._reactInternals===void 0)throw Error(F(38));return ll(e,t,n,!1,r)};De.version="18.3.1-next-f1338f8080-20240426";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=De})(yu);var yd,Zs=yu.exports;yd=Zs.createRoot,Zs.hydrateRoot;/**
 * @remix-run/router v1.3.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cr(){return Cr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Cr.apply(this,arguments)}var wt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(wt||(wt={}));const Js="popstate";function g0(e){e===void 0&&(e={});function t(r,o){let{pathname:l,search:i,hash:a}=r.location;return Ii("",{pathname:l,search:i,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Sr(o)}return v0(t,n,null,e)}function le(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function y0(){return Math.random().toString(36).substr(2,8)}function qs(e,t){return{usr:e.state,key:e.key,idx:t}}function Ii(e,t,n,r){return n===void 0&&(n=null),Cr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?jn(t):t,{state:n,key:t&&t.key||r||y0()})}function Sr(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function jn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function v0(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:l=!1}=r,i=o.history,a=wt.Pop,s=null,c=h();c==null&&(c=0,i.replaceState(Cr({},i.state,{idx:c}),""));function h(){return(i.state||{idx:null}).idx}function y(){a=wt.Pop;let B=h(),f=B==null?null:B-c;c=B,s&&s({action:a,location:E.location,delta:f})}function g(B,f){a=wt.Push;let d=Ii(E.location,B,f);n&&n(d,B),c=h()+1;let p=qs(d,c),v=E.createHref(d);try{i.pushState(p,"",v)}catch{o.location.assign(v)}l&&s&&s({action:a,location:E.location,delta:1})}function k(B,f){a=wt.Replace;let d=Ii(E.location,B,f);n&&n(d,B),c=h();let p=qs(d,c),v=E.createHref(d);i.replaceState(p,"",v),l&&s&&s({action:a,location:E.location,delta:0})}function w(B){let f=o.location.origin!=="null"?o.location.origin:o.location.href,d=typeof B=="string"?B:Sr(B);return le(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let E={get action(){return a},get location(){return e(o,i)},listen(B){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(Js,y),s=B,()=>{o.removeEventListener(Js,y),s=null}},createHref(B){return t(o,B)},createURL:w,encodeLocation(B){let f=w(B);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:k,go(B){return i.go(B)}};return E}var eu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(eu||(eu={}));function x0(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?jn(t):t,o=wd(r.pathname||"/",n);if(o==null)return null;let l=vd(e);w0(l);let i=null;for(let a=0;i==null&&a<l.length;++a)i=D0(l[a],B0(o));return i}function vd(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(l,i,a)=>{let s={relativePath:a===void 0?l.path||"":a,caseSensitive:l.caseSensitive===!0,childrenIndex:i,route:l};s.relativePath.startsWith("/")&&(le(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let c=Dt([r,s.relativePath]),h=n.concat(s);l.children&&l.children.length>0&&(le(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),vd(l.children,t,h,c)),!(l.path==null&&!l.index)&&t.push({path:c,score:A0(c,l.index),routesMeta:h})};return e.forEach((l,i)=>{var a;if(l.path===""||!((a=l.path)!=null&&a.includes("?")))o(l,i);else for(let s of xd(l.path))o(l,i,s)}),t}function xd(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return o?[l,""]:[l];let i=xd(r.join("/")),a=[];return a.push(...i.map(s=>s===""?l:[l,s].join("/"))),o&&a.push(...i),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function w0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:b0(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const k0=/^:\w+$/,E0=3,C0=2,S0=1,F0=10,N0=-2,tu=e=>e==="*";function A0(e,t){let n=e.split("/"),r=n.length;return n.some(tu)&&(r+=N0),t&&(r+=C0),n.filter(o=>!tu(o)).reduce((o,l)=>o+(k0.test(l)?E0:l===""?S0:F0),r)}function b0(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function D0(e,t){let{routesMeta:n}=e,r={},o="/",l=[];for(let i=0;i<n.length;++i){let a=n[i],s=i===n.length-1,c=o==="/"?t:t.slice(o.length)||"/",h=P0({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},c);if(!h)return null;Object.assign(r,h.params);let y=a.route;l.push({params:r,pathname:Dt([o,h.pathname]),pathnameBase:_0(Dt([o,h.pathnameBase])),route:y}),h.pathnameBase!=="/"&&(o=Dt([o,h.pathnameBase]))}return l}function P0(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=z0(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let l=o[0],i=l.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((c,h,y)=>{if(h==="*"){let g=a[y]||"";i=l.slice(0,l.length-g.length).replace(/(.)\/+$/,"$1")}return c[h]=j0(a[y]||"",h),c},{}),pathname:l,pathnameBase:i,pattern:e}}function z0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ma(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(i,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function B0(e){try{return decodeURI(e)}catch(t){return Ma(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function j0(e,t){try{return decodeURIComponent(e)}catch(n){return Ma(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function wd(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Ma(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function L0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?jn(e):e;return{pathname:n?n.startsWith("/")?n:T0(n,t):t,search:M0(r),hash:R0(o)}}function T0(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function $l(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function kd(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ed(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=jn(e):(o=Cr({},e),le(!o.pathname||!o.pathname.includes("?"),$l("?","pathname","search",o)),le(!o.pathname||!o.pathname.includes("#"),$l("#","pathname","hash",o)),le(!o.search||!o.search.includes("#"),$l("#","search","hash",o)));let l=e===""||o.pathname==="",i=l?"/":o.pathname,a;if(r||i==null)a=n;else{let y=t.length-1;if(i.startsWith("..")){let g=i.split("/");for(;g[0]==="..";)g.shift(),y-=1;o.pathname=g.join("/")}a=y>=0?t[y]:"/"}let s=L0(o,a),c=i&&i!=="/"&&i.endsWith("/"),h=(l||i===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(c||h)&&(s.pathname+="/"),s}const Dt=e=>e.join("/").replace(/\/\/+/g,"/"),_0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),M0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,R0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function I0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const O0=["post","put","patch","delete"];[...O0];var il={exports:{}},al={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U0=S.exports,$0=Symbol.for("react.element"),V0=Symbol.for("react.fragment"),K0=Object.prototype.hasOwnProperty,W0=U0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,H0={key:!0,ref:!0,__self:!0,__source:!0};function Cd(e,t,n){var r,o={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)K0.call(t,r)&&!H0.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:$0,type:e,key:l,ref:i,props:o,_owner:W0.current}}al.Fragment=V0;al.jsx=Cd;al.jsxs=Cd;(function(e){e.exports=al})(il);const Q0=il.exports.Fragment,u=il.exports.jsx,m=il.exports.jsxs;/**
 * React Router v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oi(){return Oi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Oi.apply(this,arguments)}function G0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const Y0=typeof Object.is=="function"?Object.is:G0,{useState:X0,useEffect:Z0,useLayoutEffect:J0,useDebugValue:q0}=Hl;function eh(e,t,n){const r=t(),[{inst:o},l]=X0({inst:{value:r,getSnapshot:t}});return J0(()=>{o.value=r,o.getSnapshot=t,Vl(o)&&l({inst:o})},[e,r,t]),Z0(()=>(Vl(o)&&l({inst:o}),e(()=>{Vl(o)&&l({inst:o})})),[e]),q0(r),r}function Vl(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!Y0(n,r)}catch{return!0}}function th(e,t,n){return t()}const nh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",rh=!nh,oh=rh?th:eh;"useSyncExternalStore"in Hl&&(e=>e.useSyncExternalStore)(Hl);const Sd=S.exports.createContext(null),Fd=S.exports.createContext(null),sl=S.exports.createContext(null),ul=S.exports.createContext(null),Jt=S.exports.createContext({outlet:null,matches:[]}),Nd=S.exports.createContext(null);function lh(e,t){let{relative:n}=t===void 0?{}:t;zr()||le(!1);let{basename:r,navigator:o}=S.exports.useContext(sl),{hash:l,pathname:i,search:a}=bd(e,{relative:n}),s=i;return r!=="/"&&(s=i==="/"?r:Dt([r,i])),o.createHref({pathname:s,search:a,hash:l})}function zr(){return S.exports.useContext(ul)!=null}function cl(){return zr()||le(!1),S.exports.useContext(ul).location}function Br(){zr()||le(!1);let{basename:e,navigator:t}=S.exports.useContext(sl),{matches:n}=S.exports.useContext(Jt),{pathname:r}=cl(),o=JSON.stringify(kd(n).map(a=>a.pathnameBase)),l=S.exports.useRef(!1);return S.exports.useEffect(()=>{l.current=!0}),S.exports.useCallback(function(a,s){if(s===void 0&&(s={}),!l.current)return;if(typeof a=="number"){t.go(a);return}let c=Ed(a,JSON.parse(o),r,s.relative==="path");e!=="/"&&(c.pathname=c.pathname==="/"?e:Dt([e,c.pathname])),(s.replace?t.replace:t.push)(c,s.state,s)},[e,t,o,r])}function Ad(){let{matches:e}=S.exports.useContext(Jt),t=e[e.length-1];return t?t.params:{}}function bd(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=S.exports.useContext(Jt),{pathname:o}=cl(),l=JSON.stringify(kd(r).map(i=>i.pathnameBase));return S.exports.useMemo(()=>Ed(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function ih(e,t){zr()||le(!1);let{navigator:n}=S.exports.useContext(sl),r=S.exports.useContext(Fd),{matches:o}=S.exports.useContext(Jt),l=o[o.length-1],i=l?l.params:{};l&&l.pathname;let a=l?l.pathnameBase:"/";l&&l.route;let s=cl(),c;if(t){var h;let E=typeof t=="string"?jn(t):t;a==="/"||((h=E.pathname)==null?void 0:h.startsWith(a))||le(!1),c=E}else c=s;let y=c.pathname||"/",g=a==="/"?y:y.slice(a.length)||"/",k=x0(e,{pathname:g}),w=ch(k&&k.map(E=>Object.assign({},E,{params:Object.assign({},i,E.params),pathname:Dt([a,n.encodeLocation?n.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?a:Dt([a,n.encodeLocation?n.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),o,r||void 0);return t&&w?u(ul.Provider,{value:{location:Oi({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:wt.Pop},children:w}):w}function ah(){let e=hh(),t=I0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null;return m(Q0,{children:[u("h2",{children:"Unexpected Application Error!"}),u("h3",{style:{fontStyle:"italic"},children:t}),n?u("pre",{style:{padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},children:n}):null,null]})}class sh extends S.exports.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?u(Jt.Provider,{value:this.props.routeContext,children:u(Nd.Provider,{value:this.state.error,children:this.props.component})}):this.props.children}}function uh(e){let{routeContext:t,match:n,children:r}=e,o=S.exports.useContext(Sd);return o&&o.static&&o.staticContext&&n.route.errorElement&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),u(Jt.Provider,{value:t,children:r})}function ch(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,o=n==null?void 0:n.errors;if(o!=null){let l=r.findIndex(i=>i.route.id&&(o==null?void 0:o[i.route.id]));l>=0||le(!1),r=r.slice(0,Math.min(r.length,l+1))}return r.reduceRight((l,i,a)=>{let s=i.route.id?o==null?void 0:o[i.route.id]:null,c=n?i.route.errorElement||u(ah,{}):null,h=t.concat(r.slice(0,a+1)),y=()=>u(uh,{match:i,routeContext:{outlet:l,matches:h},children:s?c:i.route.element!==void 0?i.route.element:l});return n&&(i.route.errorElement||a===0)?u(sh,{location:n.location,component:c,error:s,children:y(),routeContext:{outlet:null,matches:h}}):y()},null)}var nu;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(nu||(nu={}));var $o;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})($o||($o={}));function dh(e){let t=S.exports.useContext(Fd);return t||le(!1),t}function ph(e){let t=S.exports.useContext(Jt);return t||le(!1),t}function fh(e){let t=ph(),n=t.matches[t.matches.length-1];return n.route.id||le(!1),n.route.id}function hh(){var e;let t=S.exports.useContext(Nd),n=dh($o.UseRouteError),r=fh($o.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function yo(e){le(!1)}function mh(e){let{basename:t="/",children:n=null,location:r,navigationType:o=wt.Pop,navigator:l,static:i=!1}=e;zr()&&le(!1);let a=t.replace(/^\/*/,"/"),s=S.exports.useMemo(()=>({basename:a,navigator:l,static:i}),[a,l,i]);typeof r=="string"&&(r=jn(r));let{pathname:c="/",search:h="",hash:y="",state:g=null,key:k="default"}=r,w=S.exports.useMemo(()=>{let E=wd(c,a);return E==null?null:{pathname:E,search:h,hash:y,state:g,key:k}},[a,c,h,y,g,k]);return w==null?null:u(sl.Provider,{value:s,children:u(ul.Provider,{children:n,value:{location:w,navigationType:o}})})}function gh(e){let{children:t,location:n}=e,r=S.exports.useContext(Sd),o=r&&!t?r.router.routes:Ui(t);return ih(o,n)}var ru;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(ru||(ru={}));new Promise(()=>{});function Ui(e,t){t===void 0&&(t=[]);let n=[];return S.exports.Children.forEach(e,(r,o)=>{if(!S.exports.isValidElement(r))return;if(r.type===S.exports.Fragment){n.push.apply(n,Ui(r.props.children,t));return}r.type!==yo&&le(!1),!r.props.index||!r.props.children||le(!1);let l=[...t,o],i={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(i.children=Ui(r.props.children,l)),n.push(i)}),n}/**
 * React Router DOM v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yh(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function vh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function xh(e,t){return e.button===0&&(!t||t==="_self")&&!vh(e)}const wh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function kh(e){let{basename:t,children:n,window:r}=e,o=S.exports.useRef();o.current==null&&(o.current=g0({window:r,v5Compat:!0}));let l=o.current,[i,a]=S.exports.useState({action:l.action,location:l.location});return S.exports.useLayoutEffect(()=>l.listen(a),[l]),u(mh,{basename:t,children:n,location:i.location,navigationType:i.action,navigator:l})}const Eh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",lr=S.exports.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:l,replace:i,state:a,target:s,to:c,preventScrollReset:h}=t,y=yh(t,wh),g=typeof c=="string"?c:Sr(c),k=/^[a-z+]+:\/\//i.test(g)||g.startsWith("//"),w=g,E=!1;if(Eh&&k){let p=new URL(window.location.href),v=g.startsWith("//")?new URL(p.protocol+g):new URL(g);v.origin===p.origin?w=v.pathname+v.search+v.hash:E=!0}let B=lh(w,{relative:o}),f=Ch(w,{replace:i,state:a,target:s,preventScrollReset:h,relative:o});function d(p){r&&r(p),p.defaultPrevented||f(p)}return u("a",{...y,href:k?g:B,onClick:E||l?r:d,ref:n,target:s})});var ou;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(ou||(ou={}));var lu;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(lu||(lu={}));function Ch(e,t){let{target:n,replace:r,state:o,preventScrollReset:l,relative:i}=t===void 0?{}:t,a=Br(),s=cl(),c=bd(e,{relative:i});return S.exports.useCallback(h=>{if(xh(h,n)){h.preventDefault();let y=r!==void 0?r:Sr(s)===Sr(c);a(e,{replace:y,state:o,preventScrollReset:l,relative:i})}},[s,a,c,r,o,n,e,l,i])}/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Sh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),V=(e,t)=>{const n=S.exports.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:l=2,absoluteStrokeWidth:i,className:a="",children:s,...c},h)=>S.exports.createElement("svg",{ref:h,...Sh,width:o,height:o,stroke:r,strokeWidth:i?Number(l)*24/Number(o):l,className:["lucide",`lucide-${Fh(e)}`,a].join(" "),...c},[...t.map(([y,g])=>S.exports.createElement(y,g)),...Array.isArray(s)?s:[s]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const no=V("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kl=V("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vo=V("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fr=V("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wl=V("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=V("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=V("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=V("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=V("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=V("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $i=V("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=V("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=V("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=V("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=V("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=V("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=V("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=V("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=V("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=V("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ko=V("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu=V("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ra=V("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dl=V("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=V("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=V("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=V("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=V("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function Ih(e,t,n){return window.go.main.App.CreateChapter(e,t,n)}function Oh(e,t,n,r){return window.go.main.App.CreateCharacter(e,t,n,r)}function Uh(e,t,n,r,o,l){return window.go.main.App.CreateParagraph(e,t,n,r,o,l)}function $h(e,t){return window.go.main.App.CreateProject(e,t)}function Vh(e){return window.go.main.App.DeleteChapter(e)}function Kh(e){return window.go.main.App.DeleteCharacter(e)}function Wh(e){return window.go.main.App.DeleteParagraph(e)}function Hh(e){return window.go.main.App.DeleteProject(e)}function Qh(e,t){return window.go.main.App.DeleteProjectKnownCharacter(e,t)}function Gh(e){return window.go.main.App.GetChapter(e)}function Yh(e){return window.go.main.App.GetChapters(e)}function Xh(e){return window.go.main.App.GetCharacter(e)}function Zh(e){return window.go.main.App.GetCharacters(e)}function Jh(e){return window.go.main.App.GetParagraph(e)}function qh(e){return window.go.main.App.GetParagraphs(e)}function em(e){return window.go.main.App.GetProject(e)}function tm(e){return window.go.main.App.GetProjectKnownCharacters(e)}function nm(e){return window.go.main.App.GetProjectLLMApiKey(e)}function rm(e){return window.go.main.App.GetProjectTTSApiKey(e)}function om(){return window.go.main.App.GetProjects()}function lm(e){return window.go.main.App.GetVoice(e)}function im(){return window.go.main.App.GetVoices()}function am(e,t,n){return window.go.main.App.Log(e,t,n)}function sm(e,t){return window.go.main.App.ReorderChapters(e,t)}function um(e,t){return window.go.main.App.SetProjectLLMApiKey(e,t)}function cm(e,t){return window.go.main.App.SetProjectTTSApiKey(e,t)}function dm(e){return window.go.main.App.SplitParagraph(e)}function pm(e,t,n){return window.go.main.App.UpdateChapter(e,t,n)}function fm(e,t,n,r){return window.go.main.App.UpdateCharacter(e,t,n,r)}function hm(e,t){return window.go.main.App.UpdateNarratorVoice(e,t)}function mm(e,t,n,r,o,l,i,a,s){return window.go.main.App.UpdateParagraph(e,t,n,r,o,l,i,a,s)}function gm(e,t,n){return window.go.main.App.UpdateProject(e,t,n)}function ym(e,t){return window.go.main.App.UpdateProjectKnownCharacters(e,t)}const K={createProject:async(e,t)=>{try{return await $h(e,t)}catch(n){throw console.error("Failed to create project:",n),n}},getProjects:async()=>{try{return await om()||[]}catch(e){throw console.error("Failed to get projects:",e),e}},getProject:async e=>{try{return await em(e)}catch(t){throw console.error("Failed to get project:",t),t}},updateProject:async(e,t,n)=>{try{await gm(e,t,n)}catch(r){throw console.error("Failed to update project:",r),r}},deleteProject:async e=>{try{await Hh(e)}catch(t){throw console.error("Failed to delete project:",t),t}},setProjectLLMApiKey:async(e,t)=>{try{await um(e,t)}catch(n){throw console.error("Failed to set project LLM API key:",n),n}},getProjectLLMApiKey:async e=>{try{return await nm(e)||""}catch(t){throw console.error("Failed to get project LLM API key:",t),t}},setProjectTTSApiKey:async(e,t)=>{try{await cm(e,t)}catch(n){throw console.error("Failed to set project TTS API key:",n),n}},getProjectTTSApiKey:async e=>{try{return await rm(e)||""}catch(t){throw console.error("Failed to get project TTS API key:",t),t}},getProjectKnownCharacters:async e=>{try{return await tm(e)||[]}catch(t){throw console.error("Failed to get project known characters:",t),t}},updateProjectKnownCharacters:async(e,t)=>{try{await ym(e,t)}catch(n){throw console.error("Failed to update project known characters:",n),n}},deleteProjectKnownCharacter:async(e,t)=>{try{await Qh(e,t)}catch(n){throw console.error("Failed to delete project known character:",n),n}},setKnownCharacterVoice:async(e,t,n)=>{try{const o=(await K.getProjectKnownCharacters(e)).map(l=>l.name===t?{...l,voiceId:n}:l);await K.updateProjectKnownCharacters(e,o)}catch(r){throw console.error("Failed to set known character voice:",r),r}},createChapter:async(e,t,n)=>{try{return await Ih(e,t,n)}catch(r){throw console.error("Failed to create chapter:",r),r}},getChapters:async e=>{try{return await Yh(e)||[]}catch(t){throw console.error("Failed to get chapters:",t),t}},getChapter:async e=>{try{return await Gh(e)}catch(t){throw console.error("Failed to get chapter:",t),t}},updateChapter:async(e,t,n)=>{try{await pm(e,t,n)}catch(r){throw console.error("Failed to update chapter:",r),r}},deleteChapter:async e=>{try{await Vh(e)}catch(t){throw console.error("Failed to delete chapter:",t),t}},reorderChapters:async(e,t)=>{try{await sm(e,t)}catch(n){throw console.error("Failed to reorder chapters:",n),n}},createParagraph:async(e,t,n,r,o,l)=>{try{return await Uh(e,t,n,r,o,l)}catch(i){throw console.error("Failed to create paragraph:",i),i}},getParagraphs:async e=>{try{return await qh(e)||[]}catch(t){throw console.error("Failed to get paragraphs:",t),t}},getParagraph:async e=>{try{return await Jh(e)}catch(t){throw console.error("Failed to get paragraph:",t),t}},updateParagraph:async(e,t,n,r,o,l,i="",a=0,s=0)=>{try{await mm(e,t,n,r,o,l,i,a,s)}catch(c){throw console.error("Failed to update paragraph:",c),c}},deleteParagraph:async e=>{try{await Wh(e)}catch(t){throw console.error("Failed to delete paragraph:",t),t}},splitParagraph:async e=>{try{return await dm(e)||[]}catch(t){throw console.error("Failed to split paragraph:",t),t}},createCharacter:async(e,t,n,r)=>{try{return await Oh(e,t,n,r)}catch(o){throw console.error("Failed to create character:",o),o}},getCharacters:async e=>{try{return await Zh(e)||[]}catch(t){throw console.error("Failed to get characters:",t),t}},getCharacter:async e=>{try{return await Xh(e)}catch(t){throw console.error("Failed to get character:",t),t}},updateCharacter:async(e,t,n,r)=>{try{await fm(e,t,n,r)}catch(o){throw console.error("Failed to update character:",o),o}},deleteCharacter:async e=>{try{await Kh(e)}catch(t){throw console.error("Failed to delete character:",t),t}},updateNarratorVoice:async(e,t)=>{try{await hm(e,t)}catch(n){throw console.error("Failed to update narrator voice:",n),n}},getVoices:async()=>{try{return await im()||[]}catch(e){throw console.error("Failed to get voices:",e),e}},getVoice:async e=>{try{return await lm(e)}catch(t){throw console.error("Failed to get voice:",t),t}},analyzeText:async e=>{throw new Error("Not implemented")},generateAudio:async(e,t,n,r)=>{throw new Error("Not implemented")},generateBatchAudio:async e=>{throw new Error("Not implemented")},log:async(e,t,n)=>{try{await am(e,t,n)}catch(r){console.error("Failed to send log to backend:",r)}}},vm=()=>{const e=Br(),[t,n]=S.exports.useState([]),[r,o]=S.exports.useState(!1),[l,i]=S.exports.useState(!1),[a,s]=S.exports.useState(!1),[c,h]=S.exports.useState(null),[y,g]=S.exports.useState(null),[k,w]=S.exports.useState({name:"",description:""}),E=async()=>{o(!0);try{const C=await K.getProjects();n(C)}catch(C){console.error("Failed to load projects:",C)}o(!1)};S.exports.useEffect(()=>{E()},[]);const B=async C=>{if(C.preventDefault(),!!k.name.trim()){o(!0);try{await K.createProject(k.name,k.description),w({name:"",description:""}),i(!1),E()}catch(N){console.error("Failed to create project:",N)}o(!1)}},f=C=>{h(C),s(!0)},d=async()=>{if(!!c){o(!0),g(null);try{await K.deleteProject(c.id),s(!1),h(null),E()}catch(C){console.error("Failed to delete project:",C),g("\u5220\u9664\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5")}o(!1)}},p=()=>{s(!1),h(null),g(null)},v=C=>{e(`/project/${C}`)};return m("div",{className:"home-page",children:[m("div",{className:"page-header",children:[m("div",{className:"header-content",children:[u(Fr,{size:28,className:"header-icon"}),m("div",{children:[u("h1",{children:"\u542C\u58A8\u8BED - \u6709\u58F0\u5C0F\u8BF4\u5236\u4F5C"}),u("p",{children:"\u521B\u5EFA\u3001\u7F16\u8F91\u548C\u7BA1\u7406\u60A8\u7684\u6709\u58F0\u5C0F\u8BF4\u5DE5\u7A0B"})]})]}),m("button",{className:"create-project-btn",onClick:()=>i(!0),disabled:r,children:[u(zd,{size:20}),"\u521B\u5EFA\u65B0\u5DE5\u7A0B"]})]}),u("div",{className:"projects-container",children:u("div",{className:"projects-list",children:r&&t.length===0?m("div",{className:"loading",children:[u("div",{className:"spinner"}),u("p",{children:"\u52A0\u8F7D\u4E2D..."})]}):t.length===0?m("div",{className:"empty-state",children:[u(Dh,{size:64}),u("h2",{children:"\u6682\u65E0\u5DE5\u7A0B"}),u("p",{children:"\u70B9\u51FB\u4E0A\u65B9\u6309\u94AE\u521B\u5EFA\u60A8\u7684\u7B2C\u4E00\u4E2A\u6709\u58F0\u5C0F\u8BF4\u5DE5\u7A0B"})]}):t.map((C,N)=>m("div",{className:"project-item",children:[m("div",{className:"project-info",onClick:()=>v(C.id),children:[u("div",{className:"project-index",children:N+1}),m("div",{className:"project-content",children:[u("h3",{children:C.name}),u("p",{className:"project-description",children:C.description||"\u6682\u65E0\u63CF\u8FF0"}),m("div",{className:"project-meta",children:[m("span",{children:["\u521B\u5EFA\u65F6\u95F4: ",new Date(C.createdAt).toLocaleDateString()]}),m("span",{children:["\u66F4\u65B0\u65F6\u95F4: ",new Date(C.updatedAt).toLocaleDateString()]})]})]})]}),m("div",{className:"project-actions",children:[m("button",{className:"btn-primary",onClick:A=>{A.stopPropagation(),v(C.id)},disabled:r,title:"\u6253\u5F00\u9879\u76EE",children:[u(Pd,{size:16}),"\u6253\u5F00"]}),m("button",{className:"btn-danger",onClick:A=>{A.stopPropagation(),f(C)},disabled:r,children:[u(dl,{size:16}),"\u5220\u9664"]})]})]},C.id))})}),l&&u("div",{className:"modal",children:m("div",{className:"modal-content",children:[m("div",{className:"modal-header",children:[u("h2",{children:"\u521B\u5EFA\u65B0\u5DE5\u7A0B"}),u("button",{className:"modal-close",onClick:()=>i(!1),children:"\xD7"})]}),m("form",{onSubmit:B,children:[m("div",{className:"form-group",children:[u("label",{htmlFor:"project-name",children:"\u5DE5\u7A0B\u540D\u79F0"}),u("input",{type:"text",id:"project-name",value:k.name,onChange:C=>w({...k,name:C.target.value}),placeholder:"\u8BF7\u8F93\u5165\u5DE5\u7A0B\u540D\u79F0",required:!0})]}),m("div",{className:"form-group",children:[u("label",{htmlFor:"project-description",children:"\u5DE5\u7A0B\u63CF\u8FF0"}),u("textarea",{id:"project-description",value:k.description,onChange:C=>w({...k,description:C.target.value}),placeholder:"\u8BF7\u8F93\u5165\u5DE5\u7A0B\u63CF\u8FF0",rows:3})]}),m("div",{className:"modal-footer",children:[u("button",{type:"button",className:"btn-secondary",onClick:()=>i(!1),disabled:r,children:"\u53D6\u6D88"}),u("button",{type:"submit",className:"btn-primary",disabled:r,children:"\u786E\u5B9A"})]})]})]})}),a&&c&&u("div",{className:"modal",children:m("div",{className:"modal-content delete-modal",children:[m("div",{className:"modal-header",children:[u("h2",{children:"\u5220\u9664\u5DE5\u7A0B"}),u("button",{className:"modal-close",onClick:p,children:"\xD7"})]}),m("div",{className:"delete-warning",children:[u("div",{className:"warning-icon",children:u("svg",{width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",children:u("path",{d:"M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",stroke:"#EF4444",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),u("h3",{children:"\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u5DE5\u7A0B\u5417\uFF1F"}),u("p",{className:"project-name-highlight",children:c.name}),u("p",{className:"delete-warning-text",children:"\u6B64\u64CD\u4F5C\u65E0\u6CD5\u64A4\u9500\uFF0C\u5DE5\u7A0B\u4E0B\u7684\u6240\u6709\u7AE0\u8282\u3001\u6BB5\u843D\u548C\u89D2\u8272\u6570\u636E\u90FD\u5C06\u88AB\u6C38\u4E45\u5220\u9664\u3002"}),y&&u("p",{className:"delete-error-message",children:y})]}),m("div",{className:"modal-footer",children:[u("button",{type:"button",className:"btn-secondary",onClick:p,disabled:r,children:"\u53D6\u6D88"}),u("button",{type:"button",className:"btn-danger",onClick:d,disabled:r,children:r?"\u5220\u9664\u4E2D...":"\u786E\u8BA4\u5220\u9664"})]})]})}),u("style",{children:`
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
      `})]})},jd=({isOpen:e,title:t,message:n,confirmText:r="\u786E\u5B9A",cancelText:o="\u53D6\u6D88",type:l="warning",onConfirm:i,onCancel:a})=>{if(!e)return null;const s=()=>{switch(l){case"danger":return u(Kl,{size:28,className:"text-red-500"});case"warning":return u(Kl,{size:28,className:"text-yellow-500"});case"info":return u(Ah,{size:28,className:"text-blue-500"});default:return u(Kl,{size:28,className:"text-yellow-500"})}},c=()=>{switch(l){case"danger":return"btn-danger";case"warning":return"btn-primary";case"info":return"btn-primary";default:return"btn-primary"}};return u("div",{className:"confirm-modal-overlay",onClick:a,children:m("div",{className:"confirm-modal-content",onClick:h=>h.stopPropagation(),children:[m("div",{className:"confirm-modal-header",children:[m("div",{className:"confirm-modal-title",children:[s(),u("h2",{children:t})]}),u("button",{className:"modal-close",onClick:a,children:u(Kt,{size:24})})]}),u("div",{className:"confirm-modal-body",children:u("p",{className:"confirm-message",children:n})}),m("div",{className:"confirm-modal-footer",children:[u("button",{className:"btn-secondary",onClick:a,children:o}),u("button",{className:c(),onClick:i,children:r})]}),u("style",{children:`
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
        `})]})})},xm=({projectId:e,onChapterSelect:t})=>{const n=Br(),[r,o]=S.exports.useState([]),[l,i]=S.exports.useState(!1),[a,s]=S.exports.useState(!1),[c,h]=S.exports.useState({title:"",content:""}),[y,g]=S.exports.useState({isOpen:!1,title:"",message:"",type:"warning",onConfirm:()=>{}}),k=async()=>{i(!0);try{const p=await K.getChapters(e);o(p)}catch(p){console.error("Failed to load chapters:",p)}i(!1)};S.exports.useEffect(()=>{k()},[e]);const w=async p=>{if(p.preventDefault(),!!c.title.trim()){i(!0);try{await K.createChapter(e,c.title,c.content),h({title:"",content:""}),s(!1),k()}catch(v){console.error("Failed to create chapter:",v)}i(!1)}},E=p=>{g({isOpen:!0,title:"\u5220\u9664\u7AE0\u8282",message:"\u786E\u5B9A\u8981\u5220\u9664\u6B64\u7AE0\u8282\u5417\uFF1F\u6B64\u64CD\u4F5C\u4E0D\u53EF\u64A4\u9500\u3002",type:"danger",confirmText:"\u5220\u9664",cancelText:"\u53D6\u6D88",onConfirm:async()=>{g(v=>({...v,isOpen:!1})),i(!0);try{await K.deleteChapter(p),k()}catch(v){console.error("Failed to delete chapter:",v)}i(!1)}})},B=(p,v)=>{p.dataTransfer.setData("text/plain",v.toString())},f=p=>{p.preventDefault()},d=async(p,v)=>{p.preventDefault();const C=parseInt(p.dataTransfer.getData("text/plain"));if(C!==v){const N=[...r],[A]=N.splice(C,1);N.splice(v,0,A);const P=N.map(I=>I.id);try{await K.reorderChapters(e,P),o(N)}catch(I){console.error("Failed to reorder chapters:",I)}}};return m("div",{className:"chapter-manager",children:[m("div",{className:"chapter-manager-header",children:[m("div",{className:"header-left",children:[u($i,{size:20}),u("h2",{children:"\u7AE0\u8282\u7BA1\u7406"})]}),m("button",{className:"btn-primary",onClick:()=>s(!0),disabled:l,children:[u(zd,{size:16}),"\u65B0\u5EFA\u7AE0\u8282"]})]}),u("div",{className:"chapter-list",children:l&&r.length===0?m("div",{className:"loading-state",children:[u("div",{className:"spinner"}),u("p",{children:"\u52A0\u8F7D\u4E2D..."})]}):r.length===0?m("div",{className:"empty-state",children:[u(Bh,{size:48}),u("h3",{children:"\u6682\u65E0\u7AE0\u8282"}),u("p",{children:"\u70B9\u51FB\u4E0A\u65B9\u6309\u94AE\u521B\u5EFA\u60A8\u7684\u7B2C\u4E00\u4E2A\u7AE0\u8282"})]}):r.map((p,v)=>m("div",{className:"chapter-item",draggable:!0,onDragStart:C=>B(C,v),onDragOver:f,onDrop:C=>d(C,v),children:[m("div",{className:"chapter-info",onClick:()=>n(`/project/${e}/chapter/${p.id}`),children:[u("div",{className:"chapter-index",children:v+1}),m("div",{className:"chapter-content",children:[u("h4",{children:p.title}),m("p",{className:"chapter-preview",children:[p.content.slice(0,50),p.content.length>50?"...":""]}),m("div",{className:"chapter-meta",children:[m("span",{children:["\u521B\u5EFA\u65F6\u95F4: ",new Date(p.createdAt).toLocaleDateString()]}),m("span",{children:["\u66F4\u65B0\u65F6\u95F4: ",new Date(p.updatedAt).toLocaleDateString()]})]})]})]}),m("div",{className:"chapter-actions",children:[u(Ph,{size:20,className:"drag-handle"}),m("button",{className:"btn-primary",onClick:C=>{C.stopPropagation(),n(`/project/${e}/chapter/${p.id}`)},disabled:l,title:"\u6253\u5F00\u7AE0\u8282\u7F16\u8F91\u5668",children:[u(Pd,{size:16}),"\u6253\u5F00"]}),m("button",{className:"btn-danger",onClick:C=>{C.stopPropagation(),E(p.id)},disabled:l,children:[u(dl,{size:16}),"\u5220\u9664"]})]})]},p.id))}),a&&u("div",{className:"modal",children:m("div",{className:"modal-content",children:[m("div",{className:"modal-header",children:[u("h2",{children:"\u521B\u5EFA\u65B0\u7AE0\u8282"}),u("button",{className:"modal-close",onClick:()=>s(!1),disabled:l,children:u(Kt,{size:24})})]}),m("form",{onSubmit:w,children:[m("div",{className:"form-group",children:[u("label",{htmlFor:"chapter-title",children:"\u7AE0\u8282\u6807\u9898"}),u("input",{type:"text",id:"chapter-title",value:c.title,onChange:p=>h({...c,title:p.target.value}),placeholder:"\u8BF7\u8F93\u5165\u7AE0\u8282\u6807\u9898",required:!0})]}),m("div",{className:"form-group",children:[u("label",{htmlFor:"chapter-content",children:"\u7AE0\u8282\u5185\u5BB9"}),u("textarea",{id:"chapter-content",value:c.content,onChange:p=>h({...c,content:p.target.value}),placeholder:"\u8BF7\u8F93\u5165\u7AE0\u8282\u5185\u5BB9",rows:6})]}),m("div",{className:"modal-footer",children:[u("button",{type:"button",className:"btn-secondary",onClick:()=>s(!1),disabled:l,children:"\u53D6\u6D88"}),u("button",{type:"submit",className:"btn-primary",disabled:l,children:"\u786E\u5B9A"})]})]})]})}),u(jd,{isOpen:y.isOpen,title:y.title,message:y.message,type:y.type,confirmText:y.confirmText,cancelText:y.cancelText,onConfirm:y.onConfirm,onCancel:()=>g(p=>({...p,isOpen:!1}))}),u("style",{children:`
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
      `})]})},wm=({projectId:e})=>{const[t,n]=S.exports.useState([]),[r,o]=S.exports.useState([]),[l,i]=S.exports.useState(!1);S.exports.useEffect(()=>{e&&a()},[e]);const a=async()=>{i(!0);try{const[h,y]=await Promise.all([K.getCharacters(e),K.getVoices()]);n(h),o(y)}catch(h){console.error("Failed to load data:",h)}i(!1)},s=async h=>{if(h!==0){i(!0);try{await K.deleteCharacter(h),a()}catch(y){console.error("Failed to delete character:",y)}i(!1)}},c=async(h,y)=>{try{if(n(g=>g.map(k=>k.id===h?{...k,voiceId:y}:k)),h===0)await K.updateNarratorVoice(e,y);else{const g=t.find(k=>k.id===h);g&&await K.updateCharacter(h,g.name,g.description,y)}}catch(g){console.error("Failed to set character voice:",g),a()}};return m("div",{className:"role-manager",children:[u("div",{className:"role-manager-header",children:m("div",{className:"header-left",children:[u(Wl,{size:20}),u("h2",{children:"\u89D2\u8272\u7BA1\u7406"}),t.length>0&&u("span",{className:"count-badge",children:t.length})]})}),u("div",{className:"role-list",children:l&&t.length===0?m("div",{className:"loading-state",children:[u("div",{className:"spinner"}),u("p",{children:"\u52A0\u8F7D\u4E2D..."})]}):t.length===0?m("div",{className:"empty-state",children:[u(Wl,{size:48}),u("h3",{children:"\u6682\u65E0\u89D2\u8272"}),u("p",{children:"\u4F7F\u7528 LLM \u89E3\u6790\u6587\u672C\u540E\uFF0C\u8BC6\u522B\u5230\u7684\u89D2\u8272\u4F1A\u663E\u793A\u5728\u8FD9\u91CC"})]}):u("div",{className:"role-grid",children:t.map(h=>m("div",{className:`role-card ${h.id===0?"narrator-card":"known-character-card"}`,children:[u("div",{className:`role-avatar ${h.id===0?"narrator-avatar":"known-avatar"}`,children:h.id===0?u(Fr,{size:28}):u(Wl,{size:28})}),m("div",{className:"role-info",children:[u("h4",{children:h.name}),h.description&&u("p",{className:"role-description",children:h.description}),m("div",{className:"voice-select-row",children:[u(Bd,{size:14}),m("select",{className:"voice-select",value:h.voiceId||"",onChange:y=>c(h.id,y.target.value),disabled:l,children:[u("option",{value:"",children:"\u9009\u62E9\u97F3\u8272"}),r.map(y=>u("option",{value:y.id,children:y.name},y.id))]})]}),h.id!==0&&m("div",{className:"known-badge",children:[u(Ra,{size:12}),u("span",{children:"AI \u8BC6\u522B"})]}),h.id===0&&m("div",{className:"narrator-badge",children:[u(Fr,{size:12}),u("span",{children:"\u7CFB\u7EDF\u89D2\u8272"})]})]}),u("div",{className:"role-actions",children:h.id!==0&&u("button",{className:"btn-icon btn-danger",onClick:()=>s(h.id),disabled:l,title:"\u5220\u9664",children:u(dl,{size:16})})})]},`${h.id}-${h.name}`))})}),u("style",{children:`
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

        .role-avatar.narrator-avatar {
          background: linear-gradient(135deg, #00A8FF 0%, #0088CC 100%);
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

        .narrator-badge {
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
      `})]})},km=()=>{const{id:e}=Ad(),t=Br(),[n,r]=S.exports.useState(null),[o,l]=S.exports.useState(!1),[i,a]=S.exports.useState(!1),[s,c]=S.exports.useState(!1),[h,y]=S.exports.useState(!1),[g,k]=S.exports.useState({name:"",description:""}),[w,E]=S.exports.useState(""),[B,f]=S.exports.useState(""),[d,p]=S.exports.useState(!1),[v,C]=S.exports.useState(!1);S.exports.useEffect(()=>{e&&N(parseInt(e))},[e]);const N=async M=>{l(!0);try{const de=await K.getProject(M);r(de),de&&(k({name:de.name,description:de.description}),E(de.llmApiKey||""),f(de.ttsApiKey||""))}catch(de){console.error("Failed to load project:",de)}l(!1)},A=async()=>{if(!!e){l(!0);try{await K.updateProject(parseInt(e),g.name,g.description),a(!1),N(parseInt(e))}catch(M){console.error("Failed to update project:",M)}l(!1)}},P=async()=>{if(!!e){p(!0);try{await K.setProjectLLMApiKey(parseInt(e),w),c(!1),N(parseInt(e))}catch(M){console.error("Failed to save LLM API key:",M)}p(!1)}},I=async()=>{if(!!e){C(!0);try{await K.setProjectTTSApiKey(parseInt(e),B),y(!1),N(parseInt(e))}catch(M){console.error("Failed to save TTS API key:",M)}C(!1)}},L=M=>M?M.length<=8?M:M.slice(0,4)+"..."+M.slice(-4):"\u672A\u8BBE\u7F6E";return o&&!n?u("div",{className:"project-details-page",children:m("div",{className:"loading-container",children:[u("div",{className:"spinner"}),u("p",{children:"\u52A0\u8F7D\u4E2D..."})]})}):n?m("div",{className:"project-details-page",children:[u("header",{className:"page-header",children:m("div",{className:"header-inner",children:[m("div",{className:"header-left",children:[m(lr,{to:"/",className:"back-button",children:[u(Vo,{size:18}),u("span",{children:"\u8FD4\u56DE"})]}),u("div",{className:"divider"}),m("div",{className:"project-title",children:[u(Fr,{size:20,className:"title-icon"}),m("div",{children:[u("h1",{children:n.name}),u("p",{className:"subtitle",children:"\u6709\u58F0\u5C0F\u8BF4\u5236\u4F5C\u5DE5\u7A0B"})]})]})]}),u("div",{className:"header-right",children:u("button",{className:"btn-secondary",onClick:()=>t("/"),children:"\u8FD4\u56DE\u9996\u9875"})})]})}),u("main",{className:"main-content",children:m("div",{className:"content-wrapper",children:[m("div",{className:"left-column",children:[m("section",{className:"project-info-section",children:[m("div",{className:"section-header",children:[m("h2",{children:[u(Ra,{size:18}),"\u9879\u76EE\u6982\u89C8"]}),!i&&u("button",{className:"btn-ghost",onClick:()=>a(!0),disabled:o,children:"\u7F16\u8F91\u4FE1\u606F"})]}),u("div",{className:"project-info-card",children:i?m("div",{className:"project-info-edit",children:[m("div",{className:"form-grid",children:[m("div",{className:"form-group full-width",children:[u("label",{htmlFor:"project-name",children:"\u9879\u76EE\u540D\u79F0"}),u("input",{id:"project-name",type:"text",value:g.name,onChange:M=>k({...g,name:M.target.value}),placeholder:"\u8BF7\u8F93\u5165\u9879\u76EE\u540D\u79F0",disabled:o})]}),m("div",{className:"form-group full-width",children:[u("label",{htmlFor:"project-description",children:"\u9879\u76EE\u63CF\u8FF0"}),u("textarea",{id:"project-description",value:g.description,onChange:M=>k({...g,description:M.target.value}),placeholder:"\u8BF7\u8F93\u5165\u9879\u76EE\u63CF\u8FF0",rows:2,disabled:o})]})]}),m("div",{className:"form-actions",children:[m("button",{className:"btn-secondary",onClick:()=>{a(!1),k({name:n.name,description:n.description})},disabled:o,children:[u(Kt,{size:16}),"\u53D6\u6D88"]}),m("button",{className:"btn-primary",onClick:A,disabled:o,children:[u(Ko,{size:16}),"\u4FDD\u5B58\u66F4\u6539"]})]})]}):m("div",{className:"project-info-content",children:[m("div",{className:"info-grid",children:[m("div",{className:"info-item",children:[u("div",{className:"info-label",children:"\u9879\u76EE\u540D\u79F0"}),u("div",{className:"info-value",children:n.name})]}),m("div",{className:"info-item",children:[u("div",{className:"info-label",children:"\u9879\u76EE\u63CF\u8FF0"}),u("div",{className:"info-value",children:n.description||"\u6682\u65E0\u63CF\u8FF0"})]})]}),m("div",{className:"meta-row",children:[m("div",{className:"meta-item",children:[u(Nh,{size:14}),m("span",{children:["\u521B\u5EFA\u4E8E ",new Date(n.createdAt).toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric"})]})]}),m("div",{className:"meta-item",children:[u(Dd,{size:14}),m("span",{children:["\u66F4\u65B0\u4E8E ",new Date(n.updatedAt).toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric"})]})]})]})]})})]}),m("section",{className:"api-key-section",children:[u("div",{className:"section-header",children:m("h2",{children:[u(zh,{size:18}),"\u57FA\u7840\u914D\u7F6E"]})}),m("div",{className:"api-key-card",children:[m("div",{className:"api-key-item",children:[u("div",{className:"api-key-header",children:u("h3",{children:"\u6587\u672C\u5927\u6A21\u578B"})}),s?u("div",{className:"api-key-edit-row",children:u("div",{className:"form-group",children:u("input",{type:"password",value:w,onChange:M=>E(M.target.value),placeholder:"\u8BF7\u8F93\u5165\u6587\u672C\u5927\u6A21\u578B API Key",disabled:d})})}):m("div",{className:"api-key-status-row",children:[u("div",{className:`status-indicator ${n.llmApiKey?"active":"inactive"}`,children:n.llmApiKey?"\u5DF2\u914D\u7F6E":"\u672A\u914D\u7F6E"}),n.llmApiKey&&u("span",{className:"api-key-masked",children:L(n.llmApiKey)})]})]}),u("div",{className:"api-key-divider"}),m("div",{className:"api-key-item",children:[u("div",{className:"api-key-header",children:u("h3",{children:"\u8BED\u97F3\u5927\u6A21\u578B"})}),h?u("div",{className:"api-key-edit-row",children:u("div",{className:"form-group",children:u("input",{type:"password",value:B,onChange:M=>f(M.target.value),placeholder:"\u8BF7\u8F93\u5165\u8BED\u97F3\u5927\u6A21\u578B API Key",disabled:v})})}):m("div",{className:"api-key-status-row",children:[u("div",{className:`status-indicator ${n.ttsApiKey?"active":"inactive"}`,children:n.ttsApiKey?"\u5DF2\u914D\u7F6E":"\u672A\u914D\u7F6E"}),n.ttsApiKey&&u("span",{className:"api-key-masked",children:L(n.ttsApiKey)})]})]}),u("div",{className:"api-key-actions",children:!s&&!h?u("button",{className:"btn-ghost",onClick:()=>{c(!0),y(!0)},disabled:o,children:"\u7F16\u8F91\u914D\u7F6E"}):m("div",{className:"form-actions",children:[m("button",{className:"btn-secondary",onClick:()=>{c(!1),y(!1),E(n.llmApiKey||""),f(n.ttsApiKey||"")},disabled:d||v,children:[u(Kt,{size:16}),"\u53D6\u6D88"]}),m("button",{className:"btn-primary",onClick:async()=>{s&&await P(),h&&await I()},disabled:d||v,children:[u(Ko,{size:16}),d||v?"\u4FDD\u5B58\u4E2D...":"\u4FDD\u5B58"]})]})})]})]}),m("section",{className:"character-section",children:[u("div",{className:"section-header",children:m("h2",{children:[u(Mh,{size:18}),"\u89D2\u8272\u7BA1\u7406"]})}),u("div",{className:"role-manager-wrapper",children:u(wm,{projectId:parseInt(e||"0")})})]})]}),u("div",{className:"right-column",children:m("section",{className:"chapter-section",children:[u("div",{className:"section-header",children:m("h2",{children:[u(Fr,{size:18}),"\u7AE0\u8282\u7BA1\u7406"]})}),u("div",{className:"chapter-manager-wrapper",children:u(xm,{projectId:parseInt(e||"0")})})]})})]})}),u("style",{children:`
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
      `})]}):u("div",{className:"project-details-page",children:m("div",{className:"error-container",children:[u("h2",{children:"\u9879\u76EE\u4E0D\u5B58\u5728"}),m(lr,{to:"/",className:"btn-primary",children:[u(Vo,{size:16}),"\u8FD4\u56DE\u9996\u9875"]})]})})},Em="neutral",Cm="happy",Sm="sad",Fm="angry",Nm="surprised",Am="fear",bm="hate",Dm="excited",Pm="coldness",zm="depressed",Bm="lovey-dovey",jm="shy",Lm="comfort",Tm="tension",_m="tender",Mm="storytelling",Rm="radio",Im="magnetic",Om="advertising",Um="vocal-fry",$m="ASMR",Vm="news",Km="entertainment",Wm="dialect",Hm="chat",Qm="warm",Gm="affectionate",Ym="authoritative",Xm=[{value:Em,label:"\u4E2D\u6027"},{value:Cm,label:"\u5F00\u5FC3"},{value:Sm,label:"\u60B2\u4F24"},{value:Fm,label:"\u751F\u6C14"},{value:Nm,label:"\u60CA\u8BB6"},{value:Am,label:"\u6050\u60E7"},{value:bm,label:"\u538C\u6076"},{value:Dm,label:"\u6FC0\u52A8"},{value:Pm,label:"\u51B7\u6F20"},{value:zm,label:"\u6CAE\u4E27"},{value:Bm,label:"\u6492\u5A07"},{value:jm,label:"\u5BB3\u7F9E"},{value:Lm,label:"\u5B89\u6170\u9F13\u52B1"},{value:Tm,label:"\u5486\u54EE/\u7126\u6025"},{value:_m,label:"\u6E29\u67D4"},{value:Mm,label:"\u8BB2\u6545\u4E8B/\u81EA\u7136\u8BB2\u8FF0"},{value:Rm,label:"\u60C5\u611F\u7535\u53F0"},{value:Im,label:"\u78C1\u6027"},{value:Om,label:"\u5E7F\u544A\u8425\u9500"},{value:Um,label:"\u6C14\u6CE1\u97F3"},{value:$m,label:"\u4F4E\u8BED(ASMR)"},{value:Vm,label:"\u65B0\u95FB\u64AD\u62A5"},{value:Km,label:"\u5A31\u4E50\u516B\u5366"},{value:Wm,label:"\u65B9\u8A00"}],Zm=[...Xm,{value:Hm,label:"\u5BF9\u8BDD/\u95F2\u804A"},{value:Qm,label:"\u6E29\u6696"},{value:Gm,label:"\u6DF1\u60C5"},{value:Ym,label:"\u6743\u5A01"}],ro=1,Jm=()=>{const{projectId:e,chapterId:t}=Ad();Br();const[n,r]=S.exports.useState(null),[o,l]=S.exports.useState([]),[i,a]=S.exports.useState([]),[s,c]=S.exports.useState([]),[h,y]=S.exports.useState([]),[g,k]=S.exports.useState(!0),[w,E]=S.exports.useState(null),[B,f]=S.exports.useState(!1),[d,p]=S.exports.useState(0),[v,C]=S.exports.useState(0),[N,A]=S.exports.useState({content:"",speaker:"",tone:"neutral",speed:ro}),[P,I]=S.exports.useState(new Set),[L,M]=S.exports.useState(!1),[de,ze]=S.exports.useState(!1),[jr,qt]=S.exports.useState(!1),[Tt,pt]=S.exports.useState(""),[b,j]=S.exports.useState(!1),[T,H]=S.exports.useState(!1),[ee,We]=S.exports.useState(0),[qe,He]=S.exports.useState(""),[Qe,et]=S.exports.useState(!1),[pl,Ia]=S.exports.useState(""),[Ld,Lr]=S.exports.useState(!1),[_t,Td]=S.exports.useState(""),[en,Ln]=S.exports.useState({isOpen:!1,title:"",message:"",type:"warning",onConfirm:null}),fl=S.exports.useRef(null),_d=S.exports.useRef(null),Tr=S.exports.useRef(null);S.exports.useEffect(()=>{t&&Md()},[t,e]),S.exports.useEffect(()=>{const x=z=>{fl.current&&!fl.current.contains(z.target)&&et(!1)};return document.addEventListener("mousedown",x),()=>document.removeEventListener("mousedown",x)},[]),S.exports.useEffect(()=>{if(w&&o.length>0){const x=o.find(z=>z.id===w);x&&A({content:x.content,speaker:x.speaker||"",tone:x.tone||"neutral",speed:x.speed||ro})}},[w,o]);const Md=async()=>{k(!0);try{const x=await K.getChapter(parseInt(t||"0"));if(r(x),pt(x.content||""),e){const tt=await K.getProjectKnownCharacters(parseInt(e));c(tt)}const z=await K.getVoices();y(z);const U=[...await K.getParagraphs(parseInt(t||"0"))].sort((tt,_n)=>tt.orderIndex-_n.orderIndex);l(U),a(U),_r(U),U.length>0&&tn(U[0].id)}catch(x){console.error("Failed to load data:",x)}k(!1)},Rd=()=>{n&&pt(n.content||""),qt(!0)},Id=async()=>{if(!!n){j(!0);try{await K.updateChapter(n.id,n.title,Tt),r(x=>x?{...x,content:Tt}:null),qt(!1),ze(!0),setTimeout(()=>ze(!1),2e3)}catch(x){console.error("Failed to save chapter:",x)}j(!1)}},_r=x=>{const z=x.reduce((R,U)=>R+(U.duration||0),0);C(z)},Od=(()=>{let x=0;return o.map(z=>{const R=x,U=x+(z.duration||2);return x=U,{id:z.id,start:R,end:U,paragraph:z}})})(),Mr=x=>P.has(x),tn=x=>{if(x===w)return;Oa(),E(x);const z=o.find(R=>R.id===x);z&&A({content:z.content,speaker:z.speaker||"",tone:z.tone||"neutral",speed:z.speed||ro})},Oa=()=>{if(w){const x=o.map(z=>z.id===w?{...z,...N,voiceId:z.voiceId}:z);l(x)}},Tn=(x,z)=>{A({...N,[x]:z}),w&&I(R=>new Set(R).add(w))},Ud=async()=>{if(P.size!==0){M(!0);try{Oa();for(const x of P){const z=o.find(R=>R.id===x);z&&await K.updateParagraph(z.id,z.content,z.speaker,z.tone,z.voiceId,z.speed,z.audioPath,z.duration,z.orderIndex)}I(new Set),a(o),ze(!0),setTimeout(()=>ze(!1),2e3)}catch(x){console.error("Failed to save paragraphs:",x)}M(!1)}},$d=()=>{if(l(i),_r(i),I(new Set),w){const x=i.find(z=>z.id===w);x?A({content:x.content,speaker:x.speaker||"",tone:x.tone||"neutral",speed:x.speed||ro}):i.length>0?tn(i[0].id):E(null)}},Vd=x=>{Ln({isOpen:!0,title:"\u5220\u9664\u6BB5\u843D",message:"\u786E\u5B9A\u8981\u5220\u9664\u6B64\u6BB5\u843D\u5417\uFF1F",type:"danger",onConfirm:()=>{const z=o.filter(R=>R.id!==x);l(z),_r(z),I(R=>{const U=new Set(R);return U.delete(x),U}),w===x&&(z.length>0?tn(z[0].id):E(null)),Ln(R=>({...R,isOpen:!1}))}})},Kd=async x=>{console.log("Generating audio for paragraph:",x)},Rr=()=>{Tr.current&&(clearInterval(Tr.current),Tr.current=null)};S.exports.useEffect(()=>()=>{Rr()},[]);const Ua=async()=>{if(!t)return;H(!0),We(0),He("\u9884\u8BA1 3-5 \u5206\u949F");const x=240;let z=0;Rr(),Tr.current=window.setInterval(()=>{z+=1;const R=Math.min(z/x*100,95),U=Math.max(x-z,0),tt=Math.floor(U/60),_n=U%60;We(R),U>0?He(`\u9884\u8BA1\u5269\u4F59 ${tt}\u5206${_n}\u79D2`):He("\u5373\u5C06\u5B8C\u6210...")},1e3);try{const R=await K.splitParagraph(parseInt(t));We(100),He("\u5B8C\u6210\uFF01"),await new Promise(tt=>setTimeout(tt,500));const U=[...R].sort((tt,_n)=>tt.orderIndex-_n.orderIndex);l(U),a(U),_r(U),I(new Set),U.length>0?tn(U[0].id):E(null),ze(!0),setTimeout(()=>ze(!1),2e3),Rr(),H(!1),setTimeout(()=>{We(0),He("")},1e3)}catch(R){console.error("Failed to generate script:",R),Rr(),H(!1);let U="\u672A\u77E5\u9519\u8BEF";typeof R=="string"?U=R:R instanceof Error?U=R.message:R&&typeof R=="object"&&(U=R.message||R.error||String(R)),console.log("Setting error message:",U),Td(U),Lr(!0),setTimeout(()=>{We(0),He("")},500)}},Wd=async()=>{if(!!t){if(o.length>0){Ln({isOpen:!0,title:"\u91CD\u65B0\u751F\u6210\u811A\u672C",message:"\u5DF2\u5B58\u5728\u6BB5\u843D\uFF0C\u786E\u5B9A\u8981\u91CD\u65B0\u751F\u6210\u5417\uFF1F\u8FD9\u5C06\u8986\u76D6\u73B0\u6709\u6BB5\u843D\u3002",type:"warning",onConfirm:()=>{Ln(x=>({...x,isOpen:!1})),Ua()}});return}Ua()}},Hd=()=>{f(!B)},$a=x=>{const z=Math.floor(x/60),R=Math.floor(x%60),U=Math.floor(x%1*100);return`${z.toString().padStart(2,"0")}:${R.toString().padStart(2,"0")}:${U.toString().padStart(2,"0")}`},hl=x=>({\u65C1\u767D:"#00A8FF",\u7537\u4E3B\u89D2:"#FF6B6B",\u5973\u4E3B\u89D2:"#FF8EC7"})[x]||"#95A5A6",Qd=()=>{const x=new Set;return s.forEach(z=>{z.name&&x.add(z.name)}),o.forEach(z=>{z.speaker&&x.add(z.speaker)}),Array.from(x).sort()},Gd=()=>{const x=Qd();if(!pl.trim())return x;const z=pl.toLowerCase();return x.filter(R=>R.toLowerCase().includes(z))},ml=w?o.find(x=>x.id===w):null;return g?u("div",{className:"chapter-editor",children:m("div",{className:"loading-container",children:[u("div",{className:"spinner"}),u("p",{children:"\u52A0\u8F7D\u4E2D..."})]})}):n?m("div",{className:"chapter-editor",children:[m("header",{className:"editor-header",children:[m("div",{className:"header-left",children:[m(lr,{to:`/project/${e}`,className:"back-button",children:[u(Vo,{size:18}),u("span",{children:"\u8FD4\u56DE"})]}),u("div",{className:"divider"}),m("div",{className:"chapter-title",children:[u("h1",{children:n.title}),u("p",{className:"subtitle",children:"\u7AE0\u8282\u7F16\u8F91 \xB7 \u65F6\u95F4\u8F74\u89C6\u56FE"})]}),P.size>0&&m("div",{className:"dirty-indicator-wrapper",children:[m("div",{className:"dirty-indicator",children:[u(no,{size:14}),m("span",{children:[P.size," \u4E2A\u672A\u4FDD\u5B58\u4FEE\u6539"]})]}),m("button",{className:"undo-btn",onClick:$d,disabled:L,children:[u(Kt,{size:14}),"\u64A4\u9500"]})]}),de&&m("div",{className:"save-success",children:[u(bh,{size:14}),u("span",{children:"\u5DF2\u4FDD\u5B58"})]})]}),m("div",{className:"header-right",children:[m("button",{className:"btn-secondary",onClick:Rd,children:[u($i,{size:16}),"\u7F16\u8F91\u6587\u672C"]}),m("button",{className:`btn-save ${P.size>0?"dirty":""}`,onClick:Ud,disabled:P.size===0||L,children:[u(Ko,{size:16}),L?"\u4FDD\u5B58\u4E2D...":"\u4FDD\u5B58"]}),m("div",{className:"generate-button-wrapper",children:[m("button",{className:"btn-primary",onClick:Wd,disabled:T,children:[u(Ra,{size:16}),T?"\u751F\u6210\u4E2D...":o.length>0?"\u91CD\u65B0\u751F\u6210\u811A\u672C":"\u751F\u6210\u811A\u672C"]}),T&&m("div",{className:"generate-progress-container",children:[u("div",{className:"progress-bar",children:u("div",{className:"progress-bar-fill",style:{width:`${ee}%`}})}),m("div",{className:"progress-info",children:[m("span",{className:"progress-percent",children:[Math.round(ee),"%"]}),u("span",{className:"progress-time",children:qe})]})]})]})]})]}),m("div",{className:"editor-main",children:[m("div",{className:"upper-section",children:[m("div",{className:"paragraph-list-panel",children:[m("div",{className:"panel-header",children:[u("h2",{children:"\u6BB5\u843D\u5217\u8868"}),m("span",{className:"paragraph-count",children:[o.length," \u4E2A\u6BB5\u843D"]})]}),u("div",{className:"paragraph-list-content",children:o.map((x,z)=>m("div",{className:`paragraph-item ${w===x.id?"selected":""}`,onClick:()=>tn(x.id),children:[m("div",{className:"paragraph-item-left",children:[u("div",{className:"paragraph-index",children:z+1}),u("div",{className:"speaker-dot",style:{backgroundColor:hl(x.speaker)}})]}),m("div",{className:"paragraph-item-content",children:[m("div",{className:"paragraph-item-header",children:[u("span",{className:"speaker-label",style:{color:hl(x.speaker)},children:x.speaker||"\u65C1\u767D"}),m("span",{className:"paragraph-duration",children:[u(Dd,{size:10}),(x.duration||0).toFixed(1),"s"]}),Mr(x.id)&&u("span",{className:"dirty-dot",title:"\u6709\u672A\u4FDD\u5B58\u7684\u4FEE\u6539"})]}),u("p",{className:"paragraph-item-text",children:x.content})]}),u("div",{className:"paragraph-item-right",children:x.audioPath?u("span",{className:"has-audio-icon",children:u(Bd,{size:14})}):null})]},x.id))})]}),m("div",{className:"paragraph-detail-panel",children:[m("div",{className:"panel-header",children:[u("h2",{children:"\u6BB5\u843D\u8BE6\u60C5"}),w&&Mr(w)&&m("span",{className:"dirty-badge",children:[u(no,{size:12}),"\u672A\u4FDD\u5B58"]})]}),ml?m("div",{className:"panel-content",children:[m("div",{className:"form-group",children:[u("label",{children:"\u6587\u672C\u5185\u5BB9"}),u("textarea",{value:N.content,onChange:x=>Tn("content",x.target.value),rows:5})]}),u("div",{className:"form-row",children:m("div",{className:"form-group full-width",children:[u("label",{children:"\u8BF4\u8BDD\u89D2\u8272"}),m("div",{className:"speaker-select-wrapper",ref:fl,children:[m("div",{className:"speaker-select-input",onClick:()=>{et(!Qe),Ia("")},children:[u("span",{className:N.speaker?"":"placeholder",children:N.speaker||"\u65C1\u767D"}),u("span",{className:"dropdown-arrow",children:"\u25BC"})]}),Qe&&m("div",{className:"speaker-dropdown",children:[u("input",{type:"text",className:"speaker-search-input",placeholder:"\u641C\u7D22\u89D2\u8272...",value:pl,onChange:x=>Ia(x.target.value),autoFocus:!0}),m("div",{className:"speaker-options",children:[u("div",{className:`speaker-option ${N.speaker?"selected":""}`,onClick:()=>{Tn("speaker",""),et(!1)},children:"\u65C1\u767D"}),Gd().map(x=>u("div",{className:`speaker-option ${N.speaker===x?"selected":""}`,onClick:()=>{Tn("speaker",x),et(!1)},children:x},x))]})]})]})]})}),m("div",{className:"form-row",children:[m("div",{className:"form-group",children:[u("label",{children:"\u60C5\u611F"}),u("select",{value:N.tone,onChange:x=>Tn("tone",x.target.value),children:Zm.map(x=>u("option",{value:x.value,children:x.label},x.value))})]}),m("div",{className:"form-group",children:[m("div",{className:"label-row",children:[u("label",{children:"\u8BED\u901F"}),u("span",{className:"value-badge",children:N.speed.toFixed(2)})]}),u("input",{type:"range",min:"0.5",max:"2.0",step:"0.05",value:N.speed,onChange:x=>Tn("speed",parseFloat(x.target.value))}),m("div",{className:"range-labels",children:[u("span",{children:"0.5x"}),u("span",{children:"1.0x"}),u("span",{children:"2.0x"})]})]})]}),m("div",{className:"action-buttons",children:[m("button",{className:"btn-generate",onClick:()=>Kd(ml.id),children:[u(Rh,{size:16}),"\u751F\u6210\u97F3\u9891"]}),m("button",{className:"btn-delete",onClick:()=>Vd(ml.id),children:[u(dl,{size:16}),"\u5220\u9664"]})]})]}):m("div",{className:"empty-properties",children:[u(iu,{size:40}),u("p",{children:"\u9009\u62E9\u4E00\u4E2A\u6BB5\u843D\u6765\u7F16\u8F91\u5C5E\u6027"})]})]})]}),u("div",{className:"lower-section",children:m("div",{className:"timeline-panel",children:[u("div",{className:"panel-header",children:m("div",{className:"transport-controls",children:[u("button",{className:`play-btn ${B?"playing":""}`,onClick:Hd,children:B?u(Th,{size:20}):u(_h,{size:20})}),m("div",{className:"time-display",children:[$a(d)," / ",$a(v)]})]})}),m("div",{className:"timeline-container",ref:_d,children:[u("div",{className:"timeline-ruler",children:Array.from({length:Math.ceil(v)+1}).map((x,z)=>u("div",{className:"ruler-mark",style:{left:`${z/v*100}%`},children:m("span",{className:"ruler-label",children:[z,"s"]})},z))}),u("div",{className:"timeline-track",children:Od.map(x=>m("div",{className:`timeline-clip ${w===x.id?"selected":""} ${Mr(x.id)?"dirty":""}`,style:{left:`${x.start/v*100}%`,width:`${(x.end-x.start)/v*100}%`,backgroundColor:hl(x.paragraph.speaker)},onClick:()=>tn(x.id),children:[m("div",{className:"clip-content",children:[m("div",{className:"clip-speaker",children:[u(jh,{size:14}),x.paragraph.speaker||"\u65C1\u767D"]}),m("div",{className:"clip-text",children:[x.paragraph.content.slice(0,40),x.paragraph.content.length>40?"...":""]})]}),Mr(x.id)&&u("div",{className:"clip-dirty-indicator",children:u(no,{size:10})}),x.paragraph.audioPath&&u("div",{className:"clip-indicator",children:u(Lh,{size:12})})]},x.id))}),u("div",{className:"playhead",style:{left:`${d/v*100}%`}})]})]})})]}),jr&&u("div",{className:"text-editor-modal",children:m("div",{className:"text-editor-content",children:[m("div",{className:"text-editor-header",children:[m("div",{className:"text-editor-title",children:[u($i,{size:20}),u("h2",{children:"\u7F16\u8F91\u7AE0\u8282\u6587\u672C"})]}),u("button",{className:"modal-close",onClick:()=>qt(!1),disabled:b,children:u(Kt,{size:24})})]}),u("div",{className:"text-editor-body",children:u("textarea",{value:Tt,onChange:x=>pt(x.target.value),placeholder:"\u8BF7\u8F93\u5165\u7AE0\u8282\u5185\u5BB9...",className:"chapter-textarea"})}),m("div",{className:"text-editor-footer",children:[u("button",{className:"btn-secondary",onClick:()=>{qt(!1),n&&pt(n.content||"")},disabled:b,children:"\u53D6\u6D88"}),m("button",{className:"btn-primary",onClick:Id,disabled:b,children:[u(Ko,{size:16}),b?"\u4FDD\u5B58\u4E2D...":"\u4FDD\u5B58"]})]})]})}),u(jd,{isOpen:en.isOpen,title:en.title,message:en.message,type:en.type,onConfirm:()=>{en.onConfirm&&en.onConfirm()},onCancel:()=>Ln(x=>({...x,isOpen:!1}))}),Ld&&u("div",{className:"error-modal",children:m("div",{className:"error-modal-content",children:[m("div",{className:"error-modal-header",children:[m("div",{className:"error-modal-title",children:[u(no,{size:24,className:"error-icon"}),u("h2",{children:"\u751F\u6210\u811A\u672C\u5931\u8D25"})]}),u("button",{className:"modal-close",onClick:()=>Lr(!1),children:u(Kt,{size:24})})]}),m("div",{className:"error-modal-body",children:[u("p",{className:"error-message-text",children:_t}),(_t==null?void 0:_t.includes("API Key"))&&m("div",{className:"error-hint-box",children:[u(iu,{size:16}),u("span",{children:"\u8BF7\u524D\u5F80\u9879\u76EE\u8BE6\u60C5\u9875\u914D\u7F6E API Key"})]})]}),m("div",{className:"error-modal-footer",children:[u("button",{className:"btn-primary",onClick:()=>Lr(!1),children:"\u77E5\u9053\u4E86"}),(_t==null?void 0:_t.includes("API Key"))&&e&&u(lr,{to:`/project/${e}`,className:"btn-secondary",onClick:()=>Lr(!1),children:"\u524D\u5F80\u914D\u7F6E"})]})]})}),u("style",{children:`
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
      `})]}):u("div",{className:"chapter-editor",children:m("div",{className:"error-container",children:[u("h2",{children:"\u7AE0\u8282\u4E0D\u5B58\u5728"}),m(lr,{to:`/project/${e}`,className:"btn-primary",children:[u(Vo,{size:16}),"\u8FD4\u56DE\u9879\u76EE"]})]})})};function qm(){return u(kh,{children:u("div",{className:"app",children:m(gh,{children:[u(yo,{path:"/",element:u(vm,{})}),u(yo,{path:"/project/:id",element:u(km,{})}),u(yo,{path:"/project/:projectId/chapter/:chapterId",element:u(Jm,{})})]})})})}const e1="Frontend",rn={debug:console.debug.bind(console),info:console.info.bind(console),warn:console.warn.bind(console),error:console.error.bind(console),log:console.log.bind(console)};let au=!1;const t1=()=>typeof window.go<"u",Wn=(e,...t)=>{if(!!t1())try{const n=t.map(r=>{if(typeof r=="object")try{return JSON.stringify(r)}catch{return String(r)}return String(r)}).join(" ");K.log(e,n,e1)}catch(n){rn.debug("Failed to send log to backend:",n)}},n1=()=>{au||(au=!0,console.debug=(...e)=>{rn.debug(...e),Wn("debug",...e)},console.info=(...e)=>{rn.info(...e),Wn("info",...e)},console.warn=(...e)=>{rn.warn(...e),Wn("warn",...e)},console.error=(...e)=>{rn.error(...e),Wn("error",...e)},console.log=(...e)=>{rn.log(...e),Wn("info",...e)},window.addEventListener("unhandledrejection",e=>{console.error("Unhandled Promise rejection:",e.reason)}),window.addEventListener("error",e=>{console.error("Uncaught error:",e.message,"at",e.filename,":",e.lineno,":",e.colno)}),console.info("\u65E5\u5FD7\u7CFB\u7EDF\u521D\u59CB\u5316\u5B8C\u6210"))};n1();const r1=document.getElementById("root"),o1=yd(r1);o1.render(u(gu.StrictMode,{children:u(qm,{})}));
