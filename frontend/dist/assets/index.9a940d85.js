function bd(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function Ld(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var S={exports:{}},T={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xr=Symbol.for("react.element"),Td=Symbol.for("react.portal"),Rd=Symbol.for("react.fragment"),Md=Symbol.for("react.strict_mode"),Id=Symbol.for("react.profiler"),Od=Symbol.for("react.provider"),Ud=Symbol.for("react.context"),$d=Symbol.for("react.forward_ref"),Vd=Symbol.for("react.suspense"),Wd=Symbol.for("react.memo"),Hd=Symbol.for("react.lazy"),Ba=Symbol.iterator;function Kd(e){return e===null||typeof e!="object"?null:(e=Ba&&e[Ba]||e["@@iterator"],typeof e=="function"?e:null)}var Xu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zu=Object.assign,Ju={};function Nn(e,t,n){this.props=e,this.context=t,this.refs=Ju,this.updater=n||Xu}Nn.prototype.isReactComponent={};Nn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Nn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function qu(){}qu.prototype=Nn.prototype;function _i(e,t,n){this.props=e,this.context=t,this.refs=Ju,this.updater=n||Xu}var bi=_i.prototype=new qu;bi.constructor=_i;Zu(bi,Nn.prototype);bi.isPureReactComponent=!0;var ja=Array.isArray,es=Object.prototype.hasOwnProperty,Li={current:null},ts={key:!0,ref:!0,__self:!0,__source:!0};function ns(e,t,n){var r,o={},l=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)es.call(t,r)&&!ts.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:xr,type:e,key:l,ref:i,props:o,_owner:Li.current}}function Qd(e,t){return{$$typeof:xr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ti(e){return typeof e=="object"&&e!==null&&e.$$typeof===xr}function Gd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var _a=/\/+/g;function ll(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Gd(""+e.key):t.toString(36)}function Qr(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case xr:case Td:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+ll(i,0):r,ja(o)?(n="",e!=null&&(n=e.replace(_a,"$&/")+"/"),Qr(o,t,n,"",function(c){return c})):o!=null&&(Ti(o)&&(o=Qd(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(_a,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",ja(e))for(var a=0;a<e.length;a++){l=e[a];var u=r+ll(l,a);i+=Qr(l,t,n,u,o)}else if(u=Kd(e),typeof u=="function")for(e=u.call(e),a=0;!(l=e.next()).done;)l=l.value,u=r+ll(l,a++),i+=Qr(l,t,n,u,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Dr(e,t,n){if(e==null)return e;var r=[],o=0;return Qr(e,r,"","",function(l){return t.call(n,l,o++)}),r}function Yd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ge={current:null},Gr={transition:null},Xd={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:Gr,ReactCurrentOwner:Li};function rs(){throw Error("act(...) is not supported in production builds of React.")}T.Children={map:Dr,forEach:function(e,t,n){Dr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Dr(e,function(){t++}),t},toArray:function(e){return Dr(e,function(t){return t})||[]},only:function(e){if(!Ti(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};T.Component=Nn;T.Fragment=Rd;T.Profiler=Id;T.PureComponent=_i;T.StrictMode=Md;T.Suspense=Vd;T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xd;T.act=rs;T.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Zu({},e.props),o=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=Li.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)es.call(t,u)&&!ts.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:xr,type:e.type,key:o,ref:l,props:r,_owner:i}};T.createContext=function(e){return e={$$typeof:Ud,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Od,_context:e},e.Consumer=e};T.createElement=ns;T.createFactory=function(e){var t=ns.bind(null,e);return t.type=e,t};T.createRef=function(){return{current:null}};T.forwardRef=function(e){return{$$typeof:$d,render:e}};T.isValidElement=Ti;T.lazy=function(e){return{$$typeof:Hd,_payload:{_status:-1,_result:e},_init:Yd}};T.memo=function(e,t){return{$$typeof:Wd,type:e,compare:t===void 0?null:t}};T.startTransition=function(e){var t=Gr.transition;Gr.transition={};try{e()}finally{Gr.transition=t}};T.unstable_act=rs;T.useCallback=function(e,t){return ge.current.useCallback(e,t)};T.useContext=function(e){return ge.current.useContext(e)};T.useDebugValue=function(){};T.useDeferredValue=function(e){return ge.current.useDeferredValue(e)};T.useEffect=function(e,t){return ge.current.useEffect(e,t)};T.useId=function(){return ge.current.useId()};T.useImperativeHandle=function(e,t,n){return ge.current.useImperativeHandle(e,t,n)};T.useInsertionEffect=function(e,t){return ge.current.useInsertionEffect(e,t)};T.useLayoutEffect=function(e,t){return ge.current.useLayoutEffect(e,t)};T.useMemo=function(e,t){return ge.current.useMemo(e,t)};T.useReducer=function(e,t,n){return ge.current.useReducer(e,t,n)};T.useRef=function(e){return ge.current.useRef(e)};T.useState=function(e){return ge.current.useState(e)};T.useSyncExternalStore=function(e,t,n){return ge.current.useSyncExternalStore(e,t,n)};T.useTransition=function(){return ge.current.useTransition()};T.version="18.3.1";(function(e){e.exports=T})(S);const os=Ld(S.exports),Ll=bd({__proto__:null,default:os},[S.exports]);var ls={exports:{}},Ae={},is={exports:{}},as={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,_){var b=A.length;A.push(_);e:for(;0<b;){var W=b-1>>>1,Z=A[W];if(0<o(Z,_))A[W]=_,A[b]=Z,b=W;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var _=A[0],b=A.pop();if(b!==_){A[0]=b;e:for(var W=0,Z=A.length,Ze=Z>>>1;W<Ze;){var Re=2*(W+1)-1,Yt=A[Re],Me=Re+1,Xt=A[Me];if(0>o(Yt,b))Me<Z&&0>o(Xt,Yt)?(A[W]=Xt,A[Me]=b,W=Me):(A[W]=Yt,A[Re]=b,W=Re);else if(Me<Z&&0>o(Xt,b))A[W]=Xt,A[Me]=b,W=Me;else break e}}return _}function o(A,_){var b=A.sortIndex-_.sortIndex;return b!==0?b:A.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var u=[],c=[],h=1,y=null,m=3,E=!1,x=!1,k=!1,B=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(A){for(var _=n(c);_!==null;){if(_.callback===null)r(c);else if(_.startTime<=A)r(c),_.sortIndex=_.expirationTime,t(u,_);else break;_=n(c)}}function v(A){if(k=!1,f(A),!x)if(n(u)!==null)x=!0,jt(C);else{var _=n(c);_!==null&&ut(v,_.startTime-A)}}function C(A,_){x=!1,k&&(k=!1,p(j),j=-1),E=!0;var b=m;try{for(f(_),y=n(u);y!==null&&(!(y.expirationTime>_)||A&&!ve());){var W=y.callback;if(typeof W=="function"){y.callback=null,m=y.priorityLevel;var Z=W(y.expirationTime<=_);_=e.unstable_now(),typeof Z=="function"?y.callback=Z:y===n(u)&&r(u),f(_)}else r(u);y=n(u)}if(y!==null)var Ze=!0;else{var Re=n(c);Re!==null&&ut(v,Re.startTime-_),Ze=!1}return Ze}finally{y=null,m=b,E=!1}}var N=!1,P=null,j=-1,I=5,L=-1;function ve(){return!(e.unstable_now()-L<I)}function Bt(){if(P!==null){var A=e.unstable_now();L=A;var _=!0;try{_=P(!0,A)}finally{_?ze():(N=!1,P=null)}}else N=!1}var ze;if(typeof d=="function")ze=function(){d(Bt)};else if(typeof MessageChannel<"u"){var Nr=new MessageChannel,Gt=Nr.port2;Nr.port1.onmessage=Bt,ze=function(){Gt.postMessage(null)}}else ze=function(){B(Bt,0)};function jt(A){P=A,N||(N=!0,ze())}function ut(A,_){j=B(function(){A(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){x||E||(x=!0,jt(C))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(A){switch(m){case 1:case 2:case 3:var _=3;break;default:_=m}var b=m;m=_;try{return A()}finally{m=b}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,_){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var b=m;m=A;try{return _()}finally{m=b}},e.unstable_scheduleCallback=function(A,_,b){var W=e.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?W+b:W):b=W,A){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=b+Z,A={id:h++,callback:_,priorityLevel:A,startTime:b,expirationTime:Z,sortIndex:-1},b>W?(A.sortIndex=b,t(c,A),n(u)===null&&A===n(c)&&(k?(p(j),j=-1):k=!0,ut(v,b-W))):(A.sortIndex=Z,t(u,A),x||E||(x=!0,jt(C))),A},e.unstable_shouldYield=ve,e.unstable_wrapCallback=function(A){var _=m;return function(){var b=m;m=_;try{return A.apply(this,arguments)}finally{m=b}}}})(as);(function(e){e.exports=as})(is);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zd=S.exports,Pe=is.exports;function F(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var us=new Set,qn={};function Ht(e,t){xn(e,t),xn(e+"Capture",t)}function xn(e,t){for(qn[e]=t,e=0;e<t.length;e++)us.add(t[e])}var rt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tl=Object.prototype.hasOwnProperty,Jd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ba={},La={};function qd(e){return Tl.call(La,e)?!0:Tl.call(ba,e)?!1:Jd.test(e)?La[e]=!0:(ba[e]=!0,!1)}function ep(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function tp(e,t,n,r){if(t===null||typeof t>"u"||ep(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ye(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){se[e]=new ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];se[t]=new ye(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){se[e]=new ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){se[e]=new ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){se[e]=new ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){se[e]=new ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){se[e]=new ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){se[e]=new ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){se[e]=new ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ri=/[\-:]([a-z])/g;function Mi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ri,Mi);se[t]=new ye(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ri,Mi);se[t]=new ye(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ri,Mi);se[t]=new ye(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){se[e]=new ye(e,1,!1,e.toLowerCase(),null,!1,!1)});se.xlinkHref=new ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){se[e]=new ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ii(e,t,n,r){var o=se.hasOwnProperty(t)?se[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(tp(t,n,o,r)&&(n=null),r||o===null?qd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var at=Zd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,zr=Symbol.for("react.element"),en=Symbol.for("react.portal"),tn=Symbol.for("react.fragment"),Oi=Symbol.for("react.strict_mode"),Rl=Symbol.for("react.profiler"),ss=Symbol.for("react.provider"),cs=Symbol.for("react.context"),Ui=Symbol.for("react.forward_ref"),Ml=Symbol.for("react.suspense"),Il=Symbol.for("react.suspense_list"),$i=Symbol.for("react.memo"),ct=Symbol.for("react.lazy"),ds=Symbol.for("react.offscreen"),Ta=Symbol.iterator;function Bn(e){return e===null||typeof e!="object"?null:(e=Ta&&e[Ta]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,il;function On(e){if(il===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);il=t&&t[1]||""}return`
`+il+e}var al=!1;function ul(e,t){if(!e||al)return"";al=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,a=l.length-1;1<=i&&0<=a&&o[i]!==l[a];)a--;for(;1<=i&&0<=a;i--,a--)if(o[i]!==l[a]){if(i!==1||a!==1)do if(i--,a--,0>a||o[i]!==l[a]){var u=`
`+o[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=a);break}}}finally{al=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?On(e):""}function np(e){switch(e.tag){case 5:return On(e.type);case 16:return On("Lazy");case 13:return On("Suspense");case 19:return On("SuspenseList");case 0:case 2:case 15:return e=ul(e.type,!1),e;case 11:return e=ul(e.type.render,!1),e;case 1:return e=ul(e.type,!0),e;default:return""}}function Ol(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case tn:return"Fragment";case en:return"Portal";case Rl:return"Profiler";case Oi:return"StrictMode";case Ml:return"Suspense";case Il:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case cs:return(e.displayName||"Context")+".Consumer";case ss:return(e._context.displayName||"Context")+".Provider";case Ui:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $i:return t=e.displayName||null,t!==null?t:Ol(e.type)||"Memo";case ct:t=e._payload,e=e._init;try{return Ol(e(t))}catch{}}return null}function rp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ol(t);case 8:return t===Oi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Nt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ps(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function op(e){var t=ps(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Br(e){e._valueTracker||(e._valueTracker=op(e))}function fs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ps(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function io(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ul(e,t){var n=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function Ra(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Nt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function hs(e,t){t=t.checked,t!=null&&Ii(e,"checked",t,!1)}function $l(e,t){hs(e,t);var n=Nt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Vl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Vl(e,t.type,Nt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ma(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Vl(e,t,n){(t!=="number"||io(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Un=Array.isArray;function fn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Nt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Wl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(F(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ia(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(F(92));if(Un(n)){if(1<n.length)throw Error(F(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Nt(n)}}function ms(e,t){var n=Nt(t.value),r=Nt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Oa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function gs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?gs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var jr,ys=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(jr=jr||document.createElement("div"),jr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=jr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function er(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Wn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lp=["Webkit","ms","Moz","O"];Object.keys(Wn).forEach(function(e){lp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Wn[t]=Wn[e]})});function vs(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Wn.hasOwnProperty(e)&&Wn[e]?(""+t).trim():t+"px"}function xs(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=vs(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var ip=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Kl(e,t){if(t){if(ip[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(F(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(F(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(F(61))}if(t.style!=null&&typeof t.style!="object")throw Error(F(62))}}function Ql(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gl=null;function Vi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Yl=null,hn=null,mn=null;function Ua(e){if(e=Er(e)){if(typeof Yl!="function")throw Error(F(280));var t=e.stateNode;t&&(t=Io(t),Yl(e.stateNode,e.type,t))}}function ws(e){hn?mn?mn.push(e):mn=[e]:hn=e}function ks(){if(hn){var e=hn,t=mn;if(mn=hn=null,Ua(e),t)for(e=0;e<t.length;e++)Ua(t[e])}}function Es(e,t){return e(t)}function Cs(){}var sl=!1;function Ss(e,t,n){if(sl)return e(t,n);sl=!0;try{return Es(e,t,n)}finally{sl=!1,(hn!==null||mn!==null)&&(Cs(),ks())}}function tr(e,t){var n=e.stateNode;if(n===null)return null;var r=Io(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(F(231,t,typeof n));return n}var Xl=!1;if(rt)try{var jn={};Object.defineProperty(jn,"passive",{get:function(){Xl=!0}}),window.addEventListener("test",jn,jn),window.removeEventListener("test",jn,jn)}catch{Xl=!1}function ap(e,t,n,r,o,l,i,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var Hn=!1,ao=null,uo=!1,Zl=null,up={onError:function(e){Hn=!0,ao=e}};function sp(e,t,n,r,o,l,i,a,u){Hn=!1,ao=null,ap.apply(up,arguments)}function cp(e,t,n,r,o,l,i,a,u){if(sp.apply(this,arguments),Hn){if(Hn){var c=ao;Hn=!1,ao=null}else throw Error(F(198));uo||(uo=!0,Zl=c)}}function Kt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Fs(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function $a(e){if(Kt(e)!==e)throw Error(F(188))}function dp(e){var t=e.alternate;if(!t){if(t=Kt(e),t===null)throw Error(F(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return $a(o),e;if(l===r)return $a(o),t;l=l.sibling}throw Error(F(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,a=o.child;a;){if(a===n){i=!0,n=o,r=l;break}if(a===r){i=!0,r=o,n=l;break}a=a.sibling}if(!i){for(a=l.child;a;){if(a===n){i=!0,n=l,r=o;break}if(a===r){i=!0,r=l,n=o;break}a=a.sibling}if(!i)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?e:t}function Ns(e){return e=dp(e),e!==null?Ps(e):null}function Ps(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ps(e);if(t!==null)return t;e=e.sibling}return null}var As=Pe.unstable_scheduleCallback,Va=Pe.unstable_cancelCallback,pp=Pe.unstable_shouldYield,fp=Pe.unstable_requestPaint,J=Pe.unstable_now,hp=Pe.unstable_getCurrentPriorityLevel,Wi=Pe.unstable_ImmediatePriority,Ds=Pe.unstable_UserBlockingPriority,so=Pe.unstable_NormalPriority,mp=Pe.unstable_LowPriority,zs=Pe.unstable_IdlePriority,Lo=null,Ye=null;function gp(e){if(Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(Lo,e,void 0,(e.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:xp,yp=Math.log,vp=Math.LN2;function xp(e){return e>>>=0,e===0?32:31-(yp(e)/vp|0)|0}var _r=64,br=4194304;function $n(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function co(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~o;a!==0?r=$n(a):(l&=i,l!==0&&(r=$n(l)))}else i=n&~o,i!==0?r=$n(i):l!==0&&(r=$n(l));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ve(t),o=1<<n,r|=e[n],t&=~o;return r}function wp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-Ve(l),a=1<<i,u=o[i];u===-1?((a&n)===0||(a&r)!==0)&&(o[i]=wp(a,t)):u<=t&&(e.expiredLanes|=a),l&=~a}}function Jl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Bs(){var e=_r;return _r<<=1,(_r&4194240)===0&&(_r=64),e}function cl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function wr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ve(t),e[t]=n}function Ep(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Ve(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function Hi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ve(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var M=0;function js(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var _s,Ki,bs,Ls,Ts,ql=!1,Lr=[],yt=null,vt=null,xt=null,nr=new Map,rr=new Map,pt=[],Cp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wa(e,t){switch(e){case"focusin":case"focusout":yt=null;break;case"dragenter":case"dragleave":vt=null;break;case"mouseover":case"mouseout":xt=null;break;case"pointerover":case"pointerout":nr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":rr.delete(t.pointerId)}}function _n(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=Er(t),t!==null&&Ki(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Sp(e,t,n,r,o){switch(t){case"focusin":return yt=_n(yt,e,t,n,r,o),!0;case"dragenter":return vt=_n(vt,e,t,n,r,o),!0;case"mouseover":return xt=_n(xt,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return nr.set(l,_n(nr.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,rr.set(l,_n(rr.get(l)||null,e,t,n,r,o)),!0}return!1}function Rs(e){var t=Lt(e.target);if(t!==null){var n=Kt(t);if(n!==null){if(t=n.tag,t===13){if(t=Fs(n),t!==null){e.blockedOn=t,Ts(e.priority,function(){bs(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ei(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Gl=r,n.target.dispatchEvent(r),Gl=null}else return t=Er(n),t!==null&&Ki(t),e.blockedOn=n,!1;t.shift()}return!0}function Ha(e,t,n){Yr(e)&&n.delete(t)}function Fp(){ql=!1,yt!==null&&Yr(yt)&&(yt=null),vt!==null&&Yr(vt)&&(vt=null),xt!==null&&Yr(xt)&&(xt=null),nr.forEach(Ha),rr.forEach(Ha)}function bn(e,t){e.blockedOn===t&&(e.blockedOn=null,ql||(ql=!0,Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority,Fp)))}function or(e){function t(o){return bn(o,e)}if(0<Lr.length){bn(Lr[0],e);for(var n=1;n<Lr.length;n++){var r=Lr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(yt!==null&&bn(yt,e),vt!==null&&bn(vt,e),xt!==null&&bn(xt,e),nr.forEach(t),rr.forEach(t),n=0;n<pt.length;n++)r=pt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<pt.length&&(n=pt[0],n.blockedOn===null);)Rs(n),n.blockedOn===null&&pt.shift()}var gn=at.ReactCurrentBatchConfig,po=!0;function Np(e,t,n,r){var o=M,l=gn.transition;gn.transition=null;try{M=1,Qi(e,t,n,r)}finally{M=o,gn.transition=l}}function Pp(e,t,n,r){var o=M,l=gn.transition;gn.transition=null;try{M=4,Qi(e,t,n,r)}finally{M=o,gn.transition=l}}function Qi(e,t,n,r){if(po){var o=ei(e,t,n,r);if(o===null)wl(e,t,r,fo,n),Wa(e,r);else if(Sp(o,e,t,n,r))r.stopPropagation();else if(Wa(e,r),t&4&&-1<Cp.indexOf(e)){for(;o!==null;){var l=Er(o);if(l!==null&&_s(l),l=ei(e,t,n,r),l===null&&wl(e,t,r,fo,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else wl(e,t,r,null,n)}}var fo=null;function ei(e,t,n,r){if(fo=null,e=Vi(r),e=Lt(e),e!==null)if(t=Kt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Fs(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return fo=e,null}function Ms(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hp()){case Wi:return 1;case Ds:return 4;case so:case mp:return 16;case zs:return 536870912;default:return 16}default:return 16}}var ht=null,Gi=null,Xr=null;function Is(){if(Xr)return Xr;var e,t=Gi,n=t.length,r,o="value"in ht?ht.value:ht.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return Xr=o.slice(e,1<r?1-r:void 0)}function Zr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Tr(){return!0}function Ka(){return!1}function De(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Tr:Ka,this.isPropagationStopped=Ka,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Tr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Tr)},persist:function(){},isPersistent:Tr}),t}var Pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yi=De(Pn),kr=Y({},Pn,{view:0,detail:0}),Ap=De(kr),dl,pl,Ln,To=Y({},kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ln&&(Ln&&e.type==="mousemove"?(dl=e.screenX-Ln.screenX,pl=e.screenY-Ln.screenY):pl=dl=0,Ln=e),dl)},movementY:function(e){return"movementY"in e?e.movementY:pl}}),Qa=De(To),Dp=Y({},To,{dataTransfer:0}),zp=De(Dp),Bp=Y({},kr,{relatedTarget:0}),fl=De(Bp),jp=Y({},Pn,{animationName:0,elapsedTime:0,pseudoElement:0}),_p=De(jp),bp=Y({},Pn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Lp=De(bp),Tp=Y({},Pn,{data:0}),Ga=De(Tp),Rp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ip={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Op(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ip[e])?!!t[e]:!1}function Xi(){return Op}var Up=Y({},kr,{key:function(e){if(e.key){var t=Rp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Zr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Mp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xi,charCode:function(e){return e.type==="keypress"?Zr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$p=De(Up),Vp=Y({},To,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ya=De(Vp),Wp=Y({},kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xi}),Hp=De(Wp),Kp=Y({},Pn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qp=De(Kp),Gp=Y({},To,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yp=De(Gp),Xp=[9,13,27,32],Zi=rt&&"CompositionEvent"in window,Kn=null;rt&&"documentMode"in document&&(Kn=document.documentMode);var Zp=rt&&"TextEvent"in window&&!Kn,Os=rt&&(!Zi||Kn&&8<Kn&&11>=Kn),Xa=String.fromCharCode(32),Za=!1;function Us(e,t){switch(e){case"keyup":return Xp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $s(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var nn=!1;function Jp(e,t){switch(e){case"compositionend":return $s(t);case"keypress":return t.which!==32?null:(Za=!0,Xa);case"textInput":return e=t.data,e===Xa&&Za?null:e;default:return null}}function qp(e,t){if(nn)return e==="compositionend"||!Zi&&Us(e,t)?(e=Is(),Xr=Gi=ht=null,nn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Os&&t.locale!=="ko"?null:t.data;default:return null}}var ef={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ja(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ef[e.type]:t==="textarea"}function Vs(e,t,n,r){ws(r),t=ho(t,"onChange"),0<t.length&&(n=new Yi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Qn=null,lr=null;function tf(e){ec(e,0)}function Ro(e){var t=ln(e);if(fs(t))return e}function nf(e,t){if(e==="change")return t}var Ws=!1;if(rt){var hl;if(rt){var ml="oninput"in document;if(!ml){var qa=document.createElement("div");qa.setAttribute("oninput","return;"),ml=typeof qa.oninput=="function"}hl=ml}else hl=!1;Ws=hl&&(!document.documentMode||9<document.documentMode)}function eu(){Qn&&(Qn.detachEvent("onpropertychange",Hs),lr=Qn=null)}function Hs(e){if(e.propertyName==="value"&&Ro(lr)){var t=[];Vs(t,lr,e,Vi(e)),Ss(tf,t)}}function rf(e,t,n){e==="focusin"?(eu(),Qn=t,lr=n,Qn.attachEvent("onpropertychange",Hs)):e==="focusout"&&eu()}function of(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ro(lr)}function lf(e,t){if(e==="click")return Ro(t)}function af(e,t){if(e==="input"||e==="change")return Ro(t)}function uf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var He=typeof Object.is=="function"?Object.is:uf;function ir(e,t){if(He(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Tl.call(t,o)||!He(e[o],t[o]))return!1}return!0}function tu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nu(e,t){var n=tu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tu(n)}}function Ks(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ks(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Qs(){for(var e=window,t=io();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=io(e.document)}return t}function Ji(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function sf(e){var t=Qs(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ks(n.ownerDocument.documentElement,n)){if(r!==null&&Ji(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=nu(n,l);var i=nu(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var cf=rt&&"documentMode"in document&&11>=document.documentMode,rn=null,ti=null,Gn=null,ni=!1;function ru(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ni||rn==null||rn!==io(r)||(r=rn,"selectionStart"in r&&Ji(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gn&&ir(Gn,r)||(Gn=r,r=ho(ti,"onSelect"),0<r.length&&(t=new Yi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=rn)))}function Rr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var on={animationend:Rr("Animation","AnimationEnd"),animationiteration:Rr("Animation","AnimationIteration"),animationstart:Rr("Animation","AnimationStart"),transitionend:Rr("Transition","TransitionEnd")},gl={},Gs={};rt&&(Gs=document.createElement("div").style,"AnimationEvent"in window||(delete on.animationend.animation,delete on.animationiteration.animation,delete on.animationstart.animation),"TransitionEvent"in window||delete on.transitionend.transition);function Mo(e){if(gl[e])return gl[e];if(!on[e])return e;var t=on[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gs)return gl[e]=t[n];return e}var Ys=Mo("animationend"),Xs=Mo("animationiteration"),Zs=Mo("animationstart"),Js=Mo("transitionend"),qs=new Map,ou="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function At(e,t){qs.set(e,t),Ht(t,[e])}for(var yl=0;yl<ou.length;yl++){var vl=ou[yl],df=vl.toLowerCase(),pf=vl[0].toUpperCase()+vl.slice(1);At(df,"on"+pf)}At(Ys,"onAnimationEnd");At(Xs,"onAnimationIteration");At(Zs,"onAnimationStart");At("dblclick","onDoubleClick");At("focusin","onFocus");At("focusout","onBlur");At(Js,"onTransitionEnd");xn("onMouseEnter",["mouseout","mouseover"]);xn("onMouseLeave",["mouseout","mouseover"]);xn("onPointerEnter",["pointerout","pointerover"]);xn("onPointerLeave",["pointerout","pointerover"]);Ht("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ht("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ht("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ht("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ht("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ht("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ff=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vn));function lu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,cp(r,t,void 0,e),e.currentTarget=null}function ec(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var a=r[i],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==l&&o.isPropagationStopped())break e;lu(o,a,c),l=u}else for(i=0;i<r.length;i++){if(a=r[i],u=a.instance,c=a.currentTarget,a=a.listener,u!==l&&o.isPropagationStopped())break e;lu(o,a,c),l=u}}}if(uo)throw e=Zl,uo=!1,Zl=null,e}function $(e,t){var n=t[ai];n===void 0&&(n=t[ai]=new Set);var r=e+"__bubble";n.has(r)||(tc(t,e,2,!1),n.add(r))}function xl(e,t,n){var r=0;t&&(r|=4),tc(n,e,r,t)}var Mr="_reactListening"+Math.random().toString(36).slice(2);function ar(e){if(!e[Mr]){e[Mr]=!0,us.forEach(function(n){n!=="selectionchange"&&(ff.has(n)||xl(n,!1,e),xl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Mr]||(t[Mr]=!0,xl("selectionchange",!1,t))}}function tc(e,t,n,r){switch(Ms(t)){case 1:var o=Np;break;case 4:o=Pp;break;default:o=Qi}n=o.bind(null,t,n,e),o=void 0,!Xl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function wl(e,t,n,r,o){var l=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var u=i.tag;if((u===3||u===4)&&(u=i.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;i=i.return}for(;a!==null;){if(i=Lt(a),i===null)return;if(u=i.tag,u===5||u===6){r=l=i;continue e}a=a.parentNode}}r=r.return}Ss(function(){var c=l,h=Vi(n),y=[];e:{var m=qs.get(e);if(m!==void 0){var E=Yi,x=e;switch(e){case"keypress":if(Zr(n)===0)break e;case"keydown":case"keyup":E=$p;break;case"focusin":x="focus",E=fl;break;case"focusout":x="blur",E=fl;break;case"beforeblur":case"afterblur":E=fl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=Qa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=zp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=Hp;break;case Ys:case Xs:case Zs:E=_p;break;case Js:E=Qp;break;case"scroll":E=Ap;break;case"wheel":E=Yp;break;case"copy":case"cut":case"paste":E=Lp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=Ya}var k=(t&4)!==0,B=!k&&e==="scroll",p=k?m!==null?m+"Capture":null:m;k=[];for(var d=c,f;d!==null;){f=d;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,p!==null&&(v=tr(d,p),v!=null&&k.push(ur(d,v,f)))),B)break;d=d.return}0<k.length&&(m=new E(m,x,null,n,h),y.push({event:m,listeners:k}))}}if((t&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",E=e==="mouseout"||e==="pointerout",m&&n!==Gl&&(x=n.relatedTarget||n.fromElement)&&(Lt(x)||x[ot]))break e;if((E||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,E?(x=n.relatedTarget||n.toElement,E=c,x=x?Lt(x):null,x!==null&&(B=Kt(x),x!==B||x.tag!==5&&x.tag!==6)&&(x=null)):(E=null,x=c),E!==x)){if(k=Qa,v="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(k=Ya,v="onPointerLeave",p="onPointerEnter",d="pointer"),B=E==null?m:ln(E),f=x==null?m:ln(x),m=new k(v,d+"leave",E,n,h),m.target=B,m.relatedTarget=f,v=null,Lt(h)===c&&(k=new k(p,d+"enter",x,n,h),k.target=f,k.relatedTarget=B,v=k),B=v,E&&x)t:{for(k=E,p=x,d=0,f=k;f;f=Jt(f))d++;for(f=0,v=p;v;v=Jt(v))f++;for(;0<d-f;)k=Jt(k),d--;for(;0<f-d;)p=Jt(p),f--;for(;d--;){if(k===p||p!==null&&k===p.alternate)break t;k=Jt(k),p=Jt(p)}k=null}else k=null;E!==null&&iu(y,m,E,k,!1),x!==null&&B!==null&&iu(y,B,x,k,!0)}}e:{if(m=c?ln(c):window,E=m.nodeName&&m.nodeName.toLowerCase(),E==="select"||E==="input"&&m.type==="file")var C=nf;else if(Ja(m))if(Ws)C=af;else{C=of;var N=rf}else(E=m.nodeName)&&E.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(C=lf);if(C&&(C=C(e,c))){Vs(y,C,n,h);break e}N&&N(e,m,c),e==="focusout"&&(N=m._wrapperState)&&N.controlled&&m.type==="number"&&Vl(m,"number",m.value)}switch(N=c?ln(c):window,e){case"focusin":(Ja(N)||N.contentEditable==="true")&&(rn=N,ti=c,Gn=null);break;case"focusout":Gn=ti=rn=null;break;case"mousedown":ni=!0;break;case"contextmenu":case"mouseup":case"dragend":ni=!1,ru(y,n,h);break;case"selectionchange":if(cf)break;case"keydown":case"keyup":ru(y,n,h)}var P;if(Zi)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else nn?Us(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(Os&&n.locale!=="ko"&&(nn||j!=="onCompositionStart"?j==="onCompositionEnd"&&nn&&(P=Is()):(ht=h,Gi="value"in ht?ht.value:ht.textContent,nn=!0)),N=ho(c,j),0<N.length&&(j=new Ga(j,e,null,n,h),y.push({event:j,listeners:N}),P?j.data=P:(P=$s(n),P!==null&&(j.data=P)))),(P=Zp?Jp(e,n):qp(e,n))&&(c=ho(c,"onBeforeInput"),0<c.length&&(h=new Ga("onBeforeInput","beforeinput",null,n,h),y.push({event:h,listeners:c}),h.data=P))}ec(y,t)})}function ur(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ho(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=tr(e,n),l!=null&&r.unshift(ur(e,l,o)),l=tr(e,t),l!=null&&r.push(ur(e,l,o))),e=e.return}return r}function Jt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function iu(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,o?(u=tr(n,l),u!=null&&i.unshift(ur(n,u,a))):o||(u=tr(n,l),u!=null&&i.push(ur(n,u,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var hf=/\r\n?/g,mf=/\u0000|\uFFFD/g;function au(e){return(typeof e=="string"?e:""+e).replace(hf,`
`).replace(mf,"")}function Ir(e,t,n){if(t=au(t),au(e)!==t&&n)throw Error(F(425))}function mo(){}var ri=null,oi=null;function li(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ii=typeof setTimeout=="function"?setTimeout:void 0,gf=typeof clearTimeout=="function"?clearTimeout:void 0,uu=typeof Promise=="function"?Promise:void 0,yf=typeof queueMicrotask=="function"?queueMicrotask:typeof uu<"u"?function(e){return uu.resolve(null).then(e).catch(vf)}:ii;function vf(e){setTimeout(function(){throw e})}function kl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),or(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);or(t)}function wt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function su(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var An=Math.random().toString(36).slice(2),Ge="__reactFiber$"+An,sr="__reactProps$"+An,ot="__reactContainer$"+An,ai="__reactEvents$"+An,xf="__reactListeners$"+An,wf="__reactHandles$"+An;function Lt(e){var t=e[Ge];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ot]||n[Ge]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=su(e);e!==null;){if(n=e[Ge])return n;e=su(e)}return t}e=n,n=e.parentNode}return null}function Er(e){return e=e[Ge]||e[ot],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ln(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(F(33))}function Io(e){return e[sr]||null}var ui=[],an=-1;function Dt(e){return{current:e}}function V(e){0>an||(e.current=ui[an],ui[an]=null,an--)}function O(e,t){an++,ui[an]=e.current,e.current=t}var Pt={},fe=Dt(Pt),ke=Dt(!1),Ot=Pt;function wn(e,t){var n=e.type.contextTypes;if(!n)return Pt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ee(e){return e=e.childContextTypes,e!=null}function go(){V(ke),V(fe)}function cu(e,t,n){if(fe.current!==Pt)throw Error(F(168));O(fe,t),O(ke,n)}function nc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(F(108,rp(e)||"Unknown",o));return Y({},n,r)}function yo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pt,Ot=fe.current,O(fe,e),O(ke,ke.current),!0}function du(e,t,n){var r=e.stateNode;if(!r)throw Error(F(169));n?(e=nc(e,t,Ot),r.__reactInternalMemoizedMergedChildContext=e,V(ke),V(fe),O(fe,e)):V(ke),O(ke,n)}var qe=null,Oo=!1,El=!1;function rc(e){qe===null?qe=[e]:qe.push(e)}function kf(e){Oo=!0,rc(e)}function zt(){if(!El&&qe!==null){El=!0;var e=0,t=M;try{var n=qe;for(M=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}qe=null,Oo=!1}catch(o){throw qe!==null&&(qe=qe.slice(e+1)),As(Wi,zt),o}finally{M=t,El=!1}}return null}var un=[],sn=0,vo=null,xo=0,Be=[],je=0,Ut=null,et=1,tt="";function _t(e,t){un[sn++]=xo,un[sn++]=vo,vo=e,xo=t}function oc(e,t,n){Be[je++]=et,Be[je++]=tt,Be[je++]=Ut,Ut=e;var r=et;e=tt;var o=32-Ve(r)-1;r&=~(1<<o),n+=1;var l=32-Ve(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,et=1<<32-Ve(t)+o|n<<o|r,tt=l+e}else et=1<<l|n<<o|r,tt=e}function qi(e){e.return!==null&&(_t(e,1),oc(e,1,0))}function ea(e){for(;e===vo;)vo=un[--sn],un[sn]=null,xo=un[--sn],un[sn]=null;for(;e===Ut;)Ut=Be[--je],Be[je]=null,tt=Be[--je],Be[je]=null,et=Be[--je],Be[je]=null}var Ne=null,Fe=null,K=!1,$e=null;function lc(e,t){var n=_e(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function pu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ne=e,Fe=wt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ne=e,Fe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ut!==null?{id:et,overflow:tt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=_e(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ne=e,Fe=null,!0):!1;default:return!1}}function si(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ci(e){if(K){var t=Fe;if(t){var n=t;if(!pu(e,t)){if(si(e))throw Error(F(418));t=wt(n.nextSibling);var r=Ne;t&&pu(e,t)?lc(r,n):(e.flags=e.flags&-4097|2,K=!1,Ne=e)}}else{if(si(e))throw Error(F(418));e.flags=e.flags&-4097|2,K=!1,Ne=e}}}function fu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ne=e}function Or(e){if(e!==Ne)return!1;if(!K)return fu(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!li(e.type,e.memoizedProps)),t&&(t=Fe)){if(si(e))throw ic(),Error(F(418));for(;t;)lc(e,t),t=wt(t.nextSibling)}if(fu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(F(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Fe=wt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Fe=null}}else Fe=Ne?wt(e.stateNode.nextSibling):null;return!0}function ic(){for(var e=Fe;e;)e=wt(e.nextSibling)}function kn(){Fe=Ne=null,K=!1}function ta(e){$e===null?$e=[e]:$e.push(e)}var Ef=at.ReactCurrentBatchConfig;function Tn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var a=o.refs;i===null?delete a[l]:a[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,e))}return e}function Ur(e,t){throw e=Object.prototype.toString.call(t),Error(F(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function hu(e){var t=e._init;return t(e._payload)}function ac(e){function t(p,d){if(e){var f=p.deletions;f===null?(p.deletions=[d],p.flags|=16):f.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function o(p,d){return p=St(p,d),p.index=0,p.sibling=null,p}function l(p,d,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<d?(p.flags|=2,d):f):(p.flags|=2,d)):(p.flags|=1048576,d)}function i(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,d,f,v){return d===null||d.tag!==6?(d=Dl(f,p.mode,v),d.return=p,d):(d=o(d,f),d.return=p,d)}function u(p,d,f,v){var C=f.type;return C===tn?h(p,d,f.props.children,v,f.key):d!==null&&(d.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ct&&hu(C)===d.type)?(v=o(d,f.props),v.ref=Tn(p,d,f),v.return=p,v):(v=oo(f.type,f.key,f.props,null,p.mode,v),v.ref=Tn(p,d,f),v.return=p,v)}function c(p,d,f,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==f.containerInfo||d.stateNode.implementation!==f.implementation?(d=zl(f,p.mode,v),d.return=p,d):(d=o(d,f.children||[]),d.return=p,d)}function h(p,d,f,v,C){return d===null||d.tag!==7?(d=It(f,p.mode,v,C),d.return=p,d):(d=o(d,f),d.return=p,d)}function y(p,d,f){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Dl(""+d,p.mode,f),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case zr:return f=oo(d.type,d.key,d.props,null,p.mode,f),f.ref=Tn(p,null,d),f.return=p,f;case en:return d=zl(d,p.mode,f),d.return=p,d;case ct:var v=d._init;return y(p,v(d._payload),f)}if(Un(d)||Bn(d))return d=It(d,p.mode,f,null),d.return=p,d;Ur(p,d)}return null}function m(p,d,f,v){var C=d!==null?d.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return C!==null?null:a(p,d,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case zr:return f.key===C?u(p,d,f,v):null;case en:return f.key===C?c(p,d,f,v):null;case ct:return C=f._init,m(p,d,C(f._payload),v)}if(Un(f)||Bn(f))return C!==null?null:h(p,d,f,v,null);Ur(p,f)}return null}function E(p,d,f,v,C){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(f)||null,a(d,p,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case zr:return p=p.get(v.key===null?f:v.key)||null,u(d,p,v,C);case en:return p=p.get(v.key===null?f:v.key)||null,c(d,p,v,C);case ct:var N=v._init;return E(p,d,f,N(v._payload),C)}if(Un(v)||Bn(v))return p=p.get(f)||null,h(d,p,v,C,null);Ur(d,v)}return null}function x(p,d,f,v){for(var C=null,N=null,P=d,j=d=0,I=null;P!==null&&j<f.length;j++){P.index>j?(I=P,P=null):I=P.sibling;var L=m(p,P,f[j],v);if(L===null){P===null&&(P=I);break}e&&P&&L.alternate===null&&t(p,P),d=l(L,d,j),N===null?C=L:N.sibling=L,N=L,P=I}if(j===f.length)return n(p,P),K&&_t(p,j),C;if(P===null){for(;j<f.length;j++)P=y(p,f[j],v),P!==null&&(d=l(P,d,j),N===null?C=P:N.sibling=P,N=P);return K&&_t(p,j),C}for(P=r(p,P);j<f.length;j++)I=E(P,p,j,f[j],v),I!==null&&(e&&I.alternate!==null&&P.delete(I.key===null?j:I.key),d=l(I,d,j),N===null?C=I:N.sibling=I,N=I);return e&&P.forEach(function(ve){return t(p,ve)}),K&&_t(p,j),C}function k(p,d,f,v){var C=Bn(f);if(typeof C!="function")throw Error(F(150));if(f=C.call(f),f==null)throw Error(F(151));for(var N=C=null,P=d,j=d=0,I=null,L=f.next();P!==null&&!L.done;j++,L=f.next()){P.index>j?(I=P,P=null):I=P.sibling;var ve=m(p,P,L.value,v);if(ve===null){P===null&&(P=I);break}e&&P&&ve.alternate===null&&t(p,P),d=l(ve,d,j),N===null?C=ve:N.sibling=ve,N=ve,P=I}if(L.done)return n(p,P),K&&_t(p,j),C;if(P===null){for(;!L.done;j++,L=f.next())L=y(p,L.value,v),L!==null&&(d=l(L,d,j),N===null?C=L:N.sibling=L,N=L);return K&&_t(p,j),C}for(P=r(p,P);!L.done;j++,L=f.next())L=E(P,p,j,L.value,v),L!==null&&(e&&L.alternate!==null&&P.delete(L.key===null?j:L.key),d=l(L,d,j),N===null?C=L:N.sibling=L,N=L);return e&&P.forEach(function(Bt){return t(p,Bt)}),K&&_t(p,j),C}function B(p,d,f,v){if(typeof f=="object"&&f!==null&&f.type===tn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case zr:e:{for(var C=f.key,N=d;N!==null;){if(N.key===C){if(C=f.type,C===tn){if(N.tag===7){n(p,N.sibling),d=o(N,f.props.children),d.return=p,p=d;break e}}else if(N.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ct&&hu(C)===N.type){n(p,N.sibling),d=o(N,f.props),d.ref=Tn(p,N,f),d.return=p,p=d;break e}n(p,N);break}else t(p,N);N=N.sibling}f.type===tn?(d=It(f.props.children,p.mode,v,f.key),d.return=p,p=d):(v=oo(f.type,f.key,f.props,null,p.mode,v),v.ref=Tn(p,d,f),v.return=p,p=v)}return i(p);case en:e:{for(N=f.key;d!==null;){if(d.key===N)if(d.tag===4&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){n(p,d.sibling),d=o(d,f.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=zl(f,p.mode,v),d.return=p,p=d}return i(p);case ct:return N=f._init,B(p,d,N(f._payload),v)}if(Un(f))return x(p,d,f,v);if(Bn(f))return k(p,d,f,v);Ur(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,d!==null&&d.tag===6?(n(p,d.sibling),d=o(d,f),d.return=p,p=d):(n(p,d),d=Dl(f,p.mode,v),d.return=p,p=d),i(p)):n(p,d)}return B}var En=ac(!0),uc=ac(!1),wo=Dt(null),ko=null,cn=null,na=null;function ra(){na=cn=ko=null}function oa(e){var t=wo.current;V(wo),e._currentValue=t}function di(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function yn(e,t){ko=e,na=cn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(we=!0),e.firstContext=null)}function Le(e){var t=e._currentValue;if(na!==e)if(e={context:e,memoizedValue:t,next:null},cn===null){if(ko===null)throw Error(F(308));cn=e,ko.dependencies={lanes:0,firstContext:e}}else cn=cn.next=e;return t}var Tt=null;function la(e){Tt===null?Tt=[e]:Tt.push(e)}function sc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,la(t)):(n.next=o.next,o.next=n),t.interleaved=n,lt(e,r)}function lt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var dt=!1;function ia(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function kt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(R&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,lt(e,n)}return o=r.interleaved,o===null?(t.next=t,la(r)):(t.next=o.next,o.next=t),r.interleaved=t,lt(e,n)}function Jr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Hi(e,n)}}function mu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Eo(e,t,n,r){var o=e.updateQueue;dt=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var u=a,c=u.next;u.next=null,i===null?l=c:i.next=c,i=u;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==i&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(l!==null){var y=o.baseState;i=0,h=c=u=null,a=l;do{var m=a.lane,E=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:E,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,k=a;switch(m=t,E=n,k.tag){case 1:if(x=k.payload,typeof x=="function"){y=x.call(E,y,m);break e}y=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=k.payload,m=typeof x=="function"?x.call(E,y,m):x,m==null)break e;y=Y({},y,m);break e;case 2:dt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[a]:m.push(a))}else E={eventTime:E,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=E,u=y):h=h.next=E,i|=m;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;m=a,a=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(1);if(h===null&&(u=y),o.baseState=u,o.firstBaseUpdate=c,o.lastBaseUpdate=h,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);Vt|=i,e.lanes=i,e.memoizedState=y}}function gu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(F(191,o));o.call(r)}}}var Cr={},Xe=Dt(Cr),cr=Dt(Cr),dr=Dt(Cr);function Rt(e){if(e===Cr)throw Error(F(174));return e}function aa(e,t){switch(O(dr,t),O(cr,e),O(Xe,Cr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Hl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Hl(t,e)}V(Xe),O(Xe,t)}function Cn(){V(Xe),V(cr),V(dr)}function dc(e){Rt(dr.current);var t=Rt(Xe.current),n=Hl(t,e.type);t!==n&&(O(cr,e),O(Xe,n))}function ua(e){cr.current===e&&(V(Xe),V(cr))}var Q=Dt(0);function Co(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Cl=[];function sa(){for(var e=0;e<Cl.length;e++)Cl[e]._workInProgressVersionPrimary=null;Cl.length=0}var qr=at.ReactCurrentDispatcher,Sl=at.ReactCurrentBatchConfig,$t=0,G=null,te=null,oe=null,So=!1,Yn=!1,pr=0,Cf=0;function ce(){throw Error(F(321))}function ca(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!He(e[n],t[n]))return!1;return!0}function da(e,t,n,r,o,l){if($t=l,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,qr.current=e===null||e.memoizedState===null?Pf:Af,e=n(r,o),Yn){l=0;do{if(Yn=!1,pr=0,25<=l)throw Error(F(301));l+=1,oe=te=null,t.updateQueue=null,qr.current=Df,e=n(r,o)}while(Yn)}if(qr.current=Fo,t=te!==null&&te.next!==null,$t=0,oe=te=G=null,So=!1,t)throw Error(F(300));return e}function pa(){var e=pr!==0;return pr=0,e}function Qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oe===null?G.memoizedState=oe=e:oe=oe.next=e,oe}function Te(){if(te===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var t=oe===null?G.memoizedState:oe.next;if(t!==null)oe=t,te=e;else{if(e===null)throw Error(F(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},oe===null?G.memoizedState=oe=e:oe=oe.next=e}return oe}function fr(e,t){return typeof t=="function"?t(e):t}function Fl(e){var t=Te(),n=t.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=e;var r=te,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var a=i=null,u=null,c=l;do{var h=c.lane;if(($t&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var y={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=y,i=r):u=u.next=y,G.lanes|=h,Vt|=h}c=c.next}while(c!==null&&c!==l);u===null?i=r:u.next=a,He(r,t.memoizedState)||(we=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,G.lanes|=l,Vt|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Nl(e){var t=Te(),n=t.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);He(l,t.memoizedState)||(we=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function pc(){}function fc(e,t){var n=G,r=Te(),o=t(),l=!He(r.memoizedState,o);if(l&&(r.memoizedState=o,we=!0),r=r.queue,fa(gc.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||oe!==null&&oe.memoizedState.tag&1){if(n.flags|=2048,hr(9,mc.bind(null,n,r,o,t),void 0,null),le===null)throw Error(F(349));($t&30)!==0||hc(n,t,o)}return o}function hc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function mc(e,t,n,r){t.value=n,t.getSnapshot=r,yc(t)&&vc(e)}function gc(e,t,n){return n(function(){yc(t)&&vc(e)})}function yc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!He(e,n)}catch{return!0}}function vc(e){var t=lt(e,1);t!==null&&We(t,e,1,-1)}function yu(e){var t=Qe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fr,lastRenderedState:e},t.queue=e,e=e.dispatch=Nf.bind(null,G,e),[t.memoizedState,e]}function hr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function xc(){return Te().memoizedState}function eo(e,t,n,r){var o=Qe();G.flags|=e,o.memoizedState=hr(1|t,n,void 0,r===void 0?null:r)}function Uo(e,t,n,r){var o=Te();r=r===void 0?null:r;var l=void 0;if(te!==null){var i=te.memoizedState;if(l=i.destroy,r!==null&&ca(r,i.deps)){o.memoizedState=hr(t,n,l,r);return}}G.flags|=e,o.memoizedState=hr(1|t,n,l,r)}function vu(e,t){return eo(8390656,8,e,t)}function fa(e,t){return Uo(2048,8,e,t)}function wc(e,t){return Uo(4,2,e,t)}function kc(e,t){return Uo(4,4,e,t)}function Ec(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cc(e,t,n){return n=n!=null?n.concat([e]):null,Uo(4,4,Ec.bind(null,t,e),n)}function ha(){}function Sc(e,t){var n=Te();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ca(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Fc(e,t){var n=Te();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ca(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Nc(e,t,n){return($t&21)===0?(e.baseState&&(e.baseState=!1,we=!0),e.memoizedState=n):(He(n,t)||(n=Bs(),G.lanes|=n,Vt|=n,e.baseState=!0),t)}function Sf(e,t){var n=M;M=n!==0&&4>n?n:4,e(!0);var r=Sl.transition;Sl.transition={};try{e(!1),t()}finally{M=n,Sl.transition=r}}function Pc(){return Te().memoizedState}function Ff(e,t,n){var r=Ct(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ac(e))Dc(t,n);else if(n=sc(e,t,n,r),n!==null){var o=me();We(n,e,r,o),zc(n,t,r)}}function Nf(e,t,n){var r=Ct(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ac(e))Dc(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,a=l(i,n);if(o.hasEagerState=!0,o.eagerState=a,He(a,i)){var u=t.interleaved;u===null?(o.next=o,la(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=sc(e,t,o,r),n!==null&&(o=me(),We(n,e,r,o),zc(n,t,r))}}function Ac(e){var t=e.alternate;return e===G||t!==null&&t===G}function Dc(e,t){Yn=So=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function zc(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Hi(e,n)}}var Fo={readContext:Le,useCallback:ce,useContext:ce,useEffect:ce,useImperativeHandle:ce,useInsertionEffect:ce,useLayoutEffect:ce,useMemo:ce,useReducer:ce,useRef:ce,useState:ce,useDebugValue:ce,useDeferredValue:ce,useTransition:ce,useMutableSource:ce,useSyncExternalStore:ce,useId:ce,unstable_isNewReconciler:!1},Pf={readContext:Le,useCallback:function(e,t){return Qe().memoizedState=[e,t===void 0?null:t],e},useContext:Le,useEffect:vu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,eo(4194308,4,Ec.bind(null,t,e),n)},useLayoutEffect:function(e,t){return eo(4194308,4,e,t)},useInsertionEffect:function(e,t){return eo(4,2,e,t)},useMemo:function(e,t){var n=Qe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Qe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ff.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var t=Qe();return e={current:e},t.memoizedState=e},useState:yu,useDebugValue:ha,useDeferredValue:function(e){return Qe().memoizedState=e},useTransition:function(){var e=yu(!1),t=e[0];return e=Sf.bind(null,e[1]),Qe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=G,o=Qe();if(K){if(n===void 0)throw Error(F(407));n=n()}else{if(n=t(),le===null)throw Error(F(349));($t&30)!==0||hc(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,vu(gc.bind(null,r,l,e),[e]),r.flags|=2048,hr(9,mc.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Qe(),t=le.identifierPrefix;if(K){var n=tt,r=et;n=(r&~(1<<32-Ve(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=pr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Cf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Af={readContext:Le,useCallback:Sc,useContext:Le,useEffect:fa,useImperativeHandle:Cc,useInsertionEffect:wc,useLayoutEffect:kc,useMemo:Fc,useReducer:Fl,useRef:xc,useState:function(){return Fl(fr)},useDebugValue:ha,useDeferredValue:function(e){var t=Te();return Nc(t,te.memoizedState,e)},useTransition:function(){var e=Fl(fr)[0],t=Te().memoizedState;return[e,t]},useMutableSource:pc,useSyncExternalStore:fc,useId:Pc,unstable_isNewReconciler:!1},Df={readContext:Le,useCallback:Sc,useContext:Le,useEffect:fa,useImperativeHandle:Cc,useInsertionEffect:wc,useLayoutEffect:kc,useMemo:Fc,useReducer:Nl,useRef:xc,useState:function(){return Nl(fr)},useDebugValue:ha,useDeferredValue:function(e){var t=Te();return te===null?t.memoizedState=e:Nc(t,te.memoizedState,e)},useTransition:function(){var e=Nl(fr)[0],t=Te().memoizedState;return[e,t]},useMutableSource:pc,useSyncExternalStore:fc,useId:Pc,unstable_isNewReconciler:!1};function Oe(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function pi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var $o={isMounted:function(e){return(e=e._reactInternals)?Kt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=me(),o=Ct(e),l=nt(r,o);l.payload=t,n!=null&&(l.callback=n),t=kt(e,l,o),t!==null&&(We(t,e,o,r),Jr(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=me(),o=Ct(e),l=nt(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=kt(e,l,o),t!==null&&(We(t,e,o,r),Jr(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=me(),r=Ct(e),o=nt(n,r);o.tag=2,t!=null&&(o.callback=t),t=kt(e,o,r),t!==null&&(We(t,e,r,n),Jr(t,e,r))}};function xu(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!ir(n,r)||!ir(o,l):!0}function Bc(e,t,n){var r=!1,o=Pt,l=t.contextType;return typeof l=="object"&&l!==null?l=Le(l):(o=Ee(t)?Ot:fe.current,r=t.contextTypes,l=(r=r!=null)?wn(e,o):Pt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=$o,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function wu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&$o.enqueueReplaceState(t,t.state,null)}function fi(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},ia(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=Le(l):(l=Ee(t)?Ot:fe.current,o.context=wn(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(pi(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&$o.enqueueReplaceState(o,o.state,null),Eo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Sn(e,t){try{var n="",r=t;do n+=np(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function Pl(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function hi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var zf=typeof WeakMap=="function"?WeakMap:Map;function jc(e,t,n){n=nt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Po||(Po=!0,Si=r),hi(e,t)},n}function _c(e,t,n){n=nt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){hi(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){hi(e,t),typeof r!="function"&&(Et===null?Et=new Set([this]):Et.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function ku(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zf;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Wf.bind(null,e,t,n),t.then(e,e))}function Eu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Cu(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=nt(-1,1),t.tag=2,kt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var Bf=at.ReactCurrentOwner,we=!1;function he(e,t,n,r){t.child=e===null?uc(t,null,n,r):En(t,e.child,n,r)}function Su(e,t,n,r,o){n=n.render;var l=t.ref;return yn(t,o),r=da(e,t,n,r,l,o),n=pa(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,it(e,t,o)):(K&&n&&qi(t),t.flags|=1,he(e,t,r,o),t.child)}function Fu(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!Ea(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,bc(e,t,l,r,o)):(e=oo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,(e.lanes&o)===0){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:ir,n(i,r)&&e.ref===t.ref)return it(e,t,o)}return t.flags|=1,e=St(l,r),e.ref=t.ref,e.return=t,t.child=e}function bc(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(ir(l,r)&&e.ref===t.ref)if(we=!1,t.pendingProps=r=l,(e.lanes&o)!==0)(e.flags&131072)!==0&&(we=!0);else return t.lanes=e.lanes,it(e,t,o)}return mi(e,t,n,r,o)}function Lc(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(pn,Se),Se|=n;else{if((n&1073741824)===0)return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,O(pn,Se),Se|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,O(pn,Se),Se|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,O(pn,Se),Se|=r;return he(e,t,o,n),t.child}function Tc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function mi(e,t,n,r,o){var l=Ee(n)?Ot:fe.current;return l=wn(t,l),yn(t,o),n=da(e,t,n,r,l,o),r=pa(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,it(e,t,o)):(K&&r&&qi(t),t.flags|=1,he(e,t,n,o),t.child)}function Nu(e,t,n,r,o){if(Ee(n)){var l=!0;yo(t)}else l=!1;if(yn(t,o),t.stateNode===null)to(e,t),Bc(t,n,r),fi(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var u=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=Le(c):(c=Ee(n)?Ot:fe.current,c=wn(t,c));var h=n.getDerivedStateFromProps,y=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function";y||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||u!==c)&&wu(t,i,r,c),dt=!1;var m=t.memoizedState;i.state=m,Eo(t,r,i,o),u=t.memoizedState,a!==r||m!==u||ke.current||dt?(typeof h=="function"&&(pi(t,n,h,r),u=t.memoizedState),(a=dt||xu(t,n,a,r,m,u,c))?(y||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),i.props=r,i.state=u,i.context=c,r=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,cc(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Oe(t.type,a),i.props=c,y=t.pendingProps,m=i.context,u=n.contextType,typeof u=="object"&&u!==null?u=Le(u):(u=Ee(n)?Ot:fe.current,u=wn(t,u));var E=n.getDerivedStateFromProps;(h=typeof E=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==y||m!==u)&&wu(t,i,r,u),dt=!1,m=t.memoizedState,i.state=m,Eo(t,r,i,o);var x=t.memoizedState;a!==y||m!==x||ke.current||dt?(typeof E=="function"&&(pi(t,n,E,r),x=t.memoizedState),(c=dt||xu(t,n,c,r,m,x,u)||!1)?(h||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,x,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,x,u)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),i.props=r,i.state=x,i.context=u,r=c):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return gi(e,t,n,r,l,o)}function gi(e,t,n,r,o,l){Tc(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&du(t,n,!1),it(e,t,l);r=t.stateNode,Bf.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=En(t,e.child,null,l),t.child=En(t,null,a,l)):he(e,t,a,l),t.memoizedState=r.state,o&&du(t,n,!0),t.child}function Rc(e){var t=e.stateNode;t.pendingContext?cu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&cu(e,t.context,!1),aa(e,t.containerInfo)}function Pu(e,t,n,r,o){return kn(),ta(o),t.flags|=256,he(e,t,n,r),t.child}var yi={dehydrated:null,treeContext:null,retryLane:0};function vi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Mc(e,t,n){var r=t.pendingProps,o=Q.current,l=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),O(Q,o&1),e===null)return ci(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},(r&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=i):l=Ho(i,r,0,null),e=It(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=vi(n),t.memoizedState=yi,e):ma(t,i));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return jf(e,t,i,r,a,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,a=o.sibling;var u={mode:"hidden",children:r.children};return(i&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=St(o,u),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?l=St(a,l):(l=It(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?vi(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=yi,r}return l=e.child,e=l.sibling,r=St(l,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ma(e,t){return t=Ho({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function $r(e,t,n,r){return r!==null&&ta(r),En(t,e.child,null,n),e=ma(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function jf(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=Pl(Error(F(422))),$r(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=Ho({mode:"visible",children:r.children},o,0,null),l=It(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,(t.mode&1)!==0&&En(t,e.child,null,i),t.child.memoizedState=vi(i),t.memoizedState=yi,l);if((t.mode&1)===0)return $r(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(F(419)),r=Pl(l,r,void 0),$r(e,t,i,r)}if(a=(i&e.childLanes)!==0,we||a){if(r=le,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|i))!==0?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,lt(e,o),We(r,e,o,-1))}return ka(),r=Pl(Error(F(421))),$r(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Hf.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,Fe=wt(o.nextSibling),Ne=t,K=!0,$e=null,e!==null&&(Be[je++]=et,Be[je++]=tt,Be[je++]=Ut,et=e.id,tt=e.overflow,Ut=t),t=ma(t,r.children),t.flags|=4096,t)}function Au(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),di(e.return,t,n)}function Al(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function Ic(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(he(e,t,r.children,n),r=Q.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Au(e,n,t);else if(e.tag===19)Au(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(O(Q,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Co(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Al(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Co(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Al(t,!0,n,null,l);break;case"together":Al(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function to(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function it(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Vt|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(F(153));if(t.child!==null){for(e=t.child,n=St(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=St(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function _f(e,t,n){switch(t.tag){case 3:Rc(t),kn();break;case 5:dc(t);break;case 1:Ee(t.type)&&yo(t);break;case 4:aa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;O(wo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(O(Q,Q.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Mc(e,t,n):(O(Q,Q.current&1),e=it(e,t,n),e!==null?e.sibling:null);O(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Ic(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),O(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,Lc(e,t,n)}return it(e,t,n)}var Oc,xi,Uc,$c;Oc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xi=function(){};Uc=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Rt(Xe.current);var l=null;switch(n){case"input":o=Ul(e,o),r=Ul(e,r),l=[];break;case"select":o=Y({},o,{value:void 0}),r=Y({},r,{value:void 0}),l=[];break;case"textarea":o=Wl(e,o),r=Wl(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=mo)}Kl(n,r);var i;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(qn.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var u=r[c];if(a=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(i in a)!a.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in u)u.hasOwnProperty(i)&&a[i]!==u[i]&&(n||(n={}),n[i]=u[i])}else n||(l||(l=[]),l.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(l=l||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(qn.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&$("scroll",e),l||a===u||(l=[])):(l=l||[]).push(c,u))}n&&(l=l||[]).push("style",n);var c=l;(t.updateQueue=c)&&(t.flags|=4)}};$c=function(e,t,n,r){n!==r&&(t.flags|=4)};function Rn(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function de(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function bf(e,t,n){var r=t.pendingProps;switch(ea(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(t),null;case 1:return Ee(t.type)&&go(),de(t),null;case 3:return r=t.stateNode,Cn(),V(ke),V(fe),sa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Or(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,$e!==null&&(Pi($e),$e=null))),xi(e,t),de(t),null;case 5:ua(t);var o=Rt(dr.current);if(n=t.type,e!==null&&t.stateNode!=null)Uc(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(F(166));return de(t),null}if(e=Rt(Xe.current),Or(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Ge]=t,r[sr]=l,e=(t.mode&1)!==0,n){case"dialog":$("cancel",r),$("close",r);break;case"iframe":case"object":case"embed":$("load",r);break;case"video":case"audio":for(o=0;o<Vn.length;o++)$(Vn[o],r);break;case"source":$("error",r);break;case"img":case"image":case"link":$("error",r),$("load",r);break;case"details":$("toggle",r);break;case"input":Ra(r,l),$("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},$("invalid",r);break;case"textarea":Ia(r,l),$("invalid",r)}Kl(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&Ir(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&Ir(r.textContent,a,e),o=["children",""+a]):qn.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&$("scroll",r)}switch(n){case"input":Br(r),Ma(r,l,!0);break;case"textarea":Br(r),Oa(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=mo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=gs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Ge]=t,e[sr]=r,Oc(e,t,!1,!1),t.stateNode=e;e:{switch(i=Ql(n,r),n){case"dialog":$("cancel",e),$("close",e),o=r;break;case"iframe":case"object":case"embed":$("load",e),o=r;break;case"video":case"audio":for(o=0;o<Vn.length;o++)$(Vn[o],e);o=r;break;case"source":$("error",e),o=r;break;case"img":case"image":case"link":$("error",e),$("load",e),o=r;break;case"details":$("toggle",e),o=r;break;case"input":Ra(e,r),o=Ul(e,r),$("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Y({},r,{value:void 0}),$("invalid",e);break;case"textarea":Ia(e,r),o=Wl(e,r),$("invalid",e);break;default:o=r}Kl(n,o),a=o;for(l in a)if(a.hasOwnProperty(l)){var u=a[l];l==="style"?xs(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&ys(e,u)):l==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&er(e,u):typeof u=="number"&&er(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(qn.hasOwnProperty(l)?u!=null&&l==="onScroll"&&$("scroll",e):u!=null&&Ii(e,l,u,i))}switch(n){case"input":Br(e),Ma(e,r,!1);break;case"textarea":Br(e),Oa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Nt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?fn(e,!!r.multiple,l,!1):r.defaultValue!=null&&fn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=mo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return de(t),null;case 6:if(e&&t.stateNode!=null)$c(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(F(166));if(n=Rt(dr.current),Rt(Xe.current),Or(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ge]=t,(l=r.nodeValue!==n)&&(e=Ne,e!==null))switch(e.tag){case 3:Ir(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ir(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ge]=t,t.stateNode=r}return de(t),null;case 13:if(V(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&Fe!==null&&(t.mode&1)!==0&&(t.flags&128)===0)ic(),kn(),t.flags|=98560,l=!1;else if(l=Or(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(F(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(F(317));l[Ge]=t}else kn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;de(t),l=!1}else $e!==null&&(Pi($e),$e=null),l=!0;if(!l)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Q.current&1)!==0?ne===0&&(ne=3):ka())),t.updateQueue!==null&&(t.flags|=4),de(t),null);case 4:return Cn(),xi(e,t),e===null&&ar(t.stateNode.containerInfo),de(t),null;case 10:return oa(t.type._context),de(t),null;case 17:return Ee(t.type)&&go(),de(t),null;case 19:if(V(Q),l=t.memoizedState,l===null)return de(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)Rn(l,!1);else{if(ne!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Co(e),i!==null){for(t.flags|=128,Rn(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return O(Q,Q.current&1|2),t.child}e=e.sibling}l.tail!==null&&J()>Fn&&(t.flags|=128,r=!0,Rn(l,!1),t.lanes=4194304)}else{if(!r)if(e=Co(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Rn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!K)return de(t),null}else 2*J()-l.renderingStartTime>Fn&&n!==1073741824&&(t.flags|=128,r=!0,Rn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=J(),t.sibling=null,n=Q.current,O(Q,r?n&1|2:n&1),t):(de(t),null);case 22:case 23:return wa(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Se&1073741824)!==0&&(de(t),t.subtreeFlags&6&&(t.flags|=8192)):de(t),null;case 24:return null;case 25:return null}throw Error(F(156,t.tag))}function Lf(e,t){switch(ea(t),t.tag){case 1:return Ee(t.type)&&go(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Cn(),V(ke),V(fe),sa(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return ua(t),null;case 13:if(V(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(F(340));kn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(Q),null;case 4:return Cn(),null;case 10:return oa(t.type._context),null;case 22:case 23:return wa(),null;case 24:return null;default:return null}}var Vr=!1,pe=!1,Tf=typeof WeakSet=="function"?WeakSet:Set,D=null;function dn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function wi(e,t,n){try{n()}catch(r){X(e,t,r)}}var Du=!1;function Rf(e,t){if(ri=po,e=Qs(),Ji(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,a=-1,u=-1,c=0,h=0,y=e,m=null;t:for(;;){for(var E;y!==n||o!==0&&y.nodeType!==3||(a=i+o),y!==l||r!==0&&y.nodeType!==3||(u=i+r),y.nodeType===3&&(i+=y.nodeValue.length),(E=y.firstChild)!==null;)m=y,y=E;for(;;){if(y===e)break t;if(m===n&&++c===o&&(a=i),m===l&&++h===r&&(u=i),(E=y.nextSibling)!==null)break;y=m,m=y.parentNode}y=E}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(oi={focusedElem:e,selectionRange:n},po=!1,D=t;D!==null;)if(t=D,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,D=e;else for(;D!==null;){t=D;try{var x=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var k=x.memoizedProps,B=x.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?k:Oe(t.type,k),B);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(v){X(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,D=e;break}D=t.return}return x=Du,Du=!1,x}function Xn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&wi(t,n,l)}o=o.next}while(o!==r)}}function Vo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ki(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Vc(e){var t=e.alternate;t!==null&&(e.alternate=null,Vc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ge],delete t[sr],delete t[ai],delete t[xf],delete t[wf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Wc(e){return e.tag===5||e.tag===3||e.tag===4}function zu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ei(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=mo));else if(r!==4&&(e=e.child,e!==null))for(Ei(e,t,n),e=e.sibling;e!==null;)Ei(e,t,n),e=e.sibling}function Ci(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ci(e,t,n),e=e.sibling;e!==null;)Ci(e,t,n),e=e.sibling}var ae=null,Ue=!1;function st(e,t,n){for(n=n.child;n!==null;)Hc(e,t,n),n=n.sibling}function Hc(e,t,n){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(Lo,n)}catch{}switch(n.tag){case 5:pe||dn(n,t);case 6:var r=ae,o=Ue;ae=null,st(e,t,n),ae=r,Ue=o,ae!==null&&(Ue?(e=ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ae.removeChild(n.stateNode));break;case 18:ae!==null&&(Ue?(e=ae,n=n.stateNode,e.nodeType===8?kl(e.parentNode,n):e.nodeType===1&&kl(e,n),or(e)):kl(ae,n.stateNode));break;case 4:r=ae,o=Ue,ae=n.stateNode.containerInfo,Ue=!0,st(e,t,n),ae=r,Ue=o;break;case 0:case 11:case 14:case 15:if(!pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&((l&2)!==0||(l&4)!==0)&&wi(n,t,i),o=o.next}while(o!==r)}st(e,t,n);break;case 1:if(!pe&&(dn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){X(n,t,a)}st(e,t,n);break;case 21:st(e,t,n);break;case 22:n.mode&1?(pe=(r=pe)||n.memoizedState!==null,st(e,t,n),pe=r):st(e,t,n);break;default:st(e,t,n)}}function Bu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Tf),t.forEach(function(r){var o=Kf.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ie(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:ae=a.stateNode,Ue=!1;break e;case 3:ae=a.stateNode.containerInfo,Ue=!0;break e;case 4:ae=a.stateNode.containerInfo,Ue=!0;break e}a=a.return}if(ae===null)throw Error(F(160));Hc(l,i,o),ae=null,Ue=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(c){X(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Kc(t,e),t=t.sibling}function Kc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ie(t,e),Ke(e),r&4){try{Xn(3,e,e.return),Vo(3,e)}catch(k){X(e,e.return,k)}try{Xn(5,e,e.return)}catch(k){X(e,e.return,k)}}break;case 1:Ie(t,e),Ke(e),r&512&&n!==null&&dn(n,n.return);break;case 5:if(Ie(t,e),Ke(e),r&512&&n!==null&&dn(n,n.return),e.flags&32){var o=e.stateNode;try{er(o,"")}catch(k){X(e,e.return,k)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&hs(o,l),Ql(a,i);var c=Ql(a,l);for(i=0;i<u.length;i+=2){var h=u[i],y=u[i+1];h==="style"?xs(o,y):h==="dangerouslySetInnerHTML"?ys(o,y):h==="children"?er(o,y):Ii(o,h,y,c)}switch(a){case"input":$l(o,l);break;case"textarea":ms(o,l);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var E=l.value;E!=null?fn(o,!!l.multiple,E,!1):m!==!!l.multiple&&(l.defaultValue!=null?fn(o,!!l.multiple,l.defaultValue,!0):fn(o,!!l.multiple,l.multiple?[]:"",!1))}o[sr]=l}catch(k){X(e,e.return,k)}}break;case 6:if(Ie(t,e),Ke(e),r&4){if(e.stateNode===null)throw Error(F(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(k){X(e,e.return,k)}}break;case 3:if(Ie(t,e),Ke(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{or(t.containerInfo)}catch(k){X(e,e.return,k)}break;case 4:Ie(t,e),Ke(e);break;case 13:Ie(t,e),Ke(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(va=J())),r&4&&Bu(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(pe=(c=pe)||h,Ie(t,e),pe=c):Ie(t,e),Ke(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&(e.mode&1)!==0)for(D=e,h=e.child;h!==null;){for(y=D=h;D!==null;){switch(m=D,E=m.child,m.tag){case 0:case 11:case 14:case 15:Xn(4,m,m.return);break;case 1:dn(m,m.return);var x=m.stateNode;if(typeof x.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(k){X(r,n,k)}}break;case 5:dn(m,m.return);break;case 22:if(m.memoizedState!==null){_u(y);continue}}E!==null?(E.return=m,D=E):_u(y)}h=h.sibling}e:for(h=null,y=e;;){if(y.tag===5){if(h===null){h=y;try{o=y.stateNode,c?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=y.stateNode,u=y.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=vs("display",i))}catch(k){X(e,e.return,k)}}}else if(y.tag===6){if(h===null)try{y.stateNode.nodeValue=c?"":y.memoizedProps}catch(k){X(e,e.return,k)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===e)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break e;for(;y.sibling===null;){if(y.return===null||y.return===e)break e;h===y&&(h=null),y=y.return}h===y&&(h=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:Ie(t,e),Ke(e),r&4&&Bu(e);break;case 21:break;default:Ie(t,e),Ke(e)}}function Ke(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Wc(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(er(o,""),r.flags&=-33);var l=zu(e);Ci(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,a=zu(e);Ei(e,a,i);break;default:throw Error(F(161))}}catch(u){X(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Mf(e,t,n){D=e,Qc(e)}function Qc(e,t,n){for(var r=(e.mode&1)!==0;D!==null;){var o=D,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Vr;if(!i){var a=o.alternate,u=a!==null&&a.memoizedState!==null||pe;a=Vr;var c=pe;if(Vr=i,(pe=u)&&!c)for(D=o;D!==null;)i=D,u=i.child,i.tag===22&&i.memoizedState!==null?bu(o):u!==null?(u.return=i,D=u):bu(o);for(;l!==null;)D=l,Qc(l),l=l.sibling;D=o,Vr=a,pe=c}ju(e)}else(o.subtreeFlags&8772)!==0&&l!==null?(l.return=o,D=l):ju(e)}}function ju(e){for(;D!==null;){var t=D;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:pe||Vo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!pe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Oe(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&gu(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}gu(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var y=h.dehydrated;y!==null&&or(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}pe||t.flags&512&&ki(t)}catch(m){X(t,t.return,m)}}if(t===e){D=null;break}if(n=t.sibling,n!==null){n.return=t.return,D=n;break}D=t.return}}function _u(e){for(;D!==null;){var t=D;if(t===e){D=null;break}var n=t.sibling;if(n!==null){n.return=t.return,D=n;break}D=t.return}}function bu(e){for(;D!==null;){var t=D;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Vo(4,t)}catch(u){X(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){X(t,o,u)}}var l=t.return;try{ki(t)}catch(u){X(t,l,u)}break;case 5:var i=t.return;try{ki(t)}catch(u){X(t,i,u)}}}catch(u){X(t,t.return,u)}if(t===e){D=null;break}var a=t.sibling;if(a!==null){a.return=t.return,D=a;break}D=t.return}}var If=Math.ceil,No=at.ReactCurrentDispatcher,ga=at.ReactCurrentOwner,be=at.ReactCurrentBatchConfig,R=0,le=null,ee=null,ue=0,Se=0,pn=Dt(0),ne=0,mr=null,Vt=0,Wo=0,ya=0,Zn=null,xe=null,va=0,Fn=1/0,Je=null,Po=!1,Si=null,Et=null,Wr=!1,mt=null,Ao=0,Jn=0,Fi=null,no=-1,ro=0;function me(){return(R&6)!==0?J():no!==-1?no:no=J()}function Ct(e){return(e.mode&1)===0?1:(R&2)!==0&&ue!==0?ue&-ue:Ef.transition!==null?(ro===0&&(ro=Bs()),ro):(e=M,e!==0||(e=window.event,e=e===void 0?16:Ms(e.type)),e)}function We(e,t,n,r){if(50<Jn)throw Jn=0,Fi=null,Error(F(185));wr(e,n,r),((R&2)===0||e!==le)&&(e===le&&((R&2)===0&&(Wo|=n),ne===4&&ft(e,ue)),Ce(e,r),n===1&&R===0&&(t.mode&1)===0&&(Fn=J()+500,Oo&&zt()))}function Ce(e,t){var n=e.callbackNode;kp(e,t);var r=co(e,e===le?ue:0);if(r===0)n!==null&&Va(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Va(n),t===1)e.tag===0?kf(Lu.bind(null,e)):rc(Lu.bind(null,e)),yf(function(){(R&6)===0&&zt()}),n=null;else{switch(js(r)){case 1:n=Wi;break;case 4:n=Ds;break;case 16:n=so;break;case 536870912:n=zs;break;default:n=so}n=td(n,Gc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Gc(e,t){if(no=-1,ro=0,(R&6)!==0)throw Error(F(327));var n=e.callbackNode;if(vn()&&e.callbackNode!==n)return null;var r=co(e,e===le?ue:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Do(e,r);else{t=r;var o=R;R|=2;var l=Xc();(le!==e||ue!==t)&&(Je=null,Fn=J()+500,Mt(e,t));do try{$f();break}catch(a){Yc(e,a)}while(1);ra(),No.current=l,R=o,ee!==null?t=0:(le=null,ue=0,t=ne)}if(t!==0){if(t===2&&(o=Jl(e),o!==0&&(r=o,t=Ni(e,o))),t===1)throw n=mr,Mt(e,0),ft(e,r),Ce(e,J()),n;if(t===6)ft(e,r);else{if(o=e.current.alternate,(r&30)===0&&!Of(o)&&(t=Do(e,r),t===2&&(l=Jl(e),l!==0&&(r=l,t=Ni(e,l))),t===1))throw n=mr,Mt(e,0),ft(e,r),Ce(e,J()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(F(345));case 2:bt(e,xe,Je);break;case 3:if(ft(e,r),(r&130023424)===r&&(t=va+500-J(),10<t)){if(co(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){me(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ii(bt.bind(null,e,xe,Je),t);break}bt(e,xe,Je);break;case 4:if(ft(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-Ve(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*If(r/1960))-r,10<r){e.timeoutHandle=ii(bt.bind(null,e,xe,Je),r);break}bt(e,xe,Je);break;case 5:bt(e,xe,Je);break;default:throw Error(F(329))}}}return Ce(e,J()),e.callbackNode===n?Gc.bind(null,e):null}function Ni(e,t){var n=Zn;return e.current.memoizedState.isDehydrated&&(Mt(e,t).flags|=256),e=Do(e,t),e!==2&&(t=xe,xe=n,t!==null&&Pi(t)),e}function Pi(e){xe===null?xe=e:xe.push.apply(xe,e)}function Of(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!He(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ft(e,t){for(t&=~ya,t&=~Wo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ve(t),r=1<<n;e[n]=-1,t&=~r}}function Lu(e){if((R&6)!==0)throw Error(F(327));vn();var t=co(e,0);if((t&1)===0)return Ce(e,J()),null;var n=Do(e,t);if(e.tag!==0&&n===2){var r=Jl(e);r!==0&&(t=r,n=Ni(e,r))}if(n===1)throw n=mr,Mt(e,0),ft(e,t),Ce(e,J()),n;if(n===6)throw Error(F(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,bt(e,xe,Je),Ce(e,J()),null}function xa(e,t){var n=R;R|=1;try{return e(t)}finally{R=n,R===0&&(Fn=J()+500,Oo&&zt())}}function Wt(e){mt!==null&&mt.tag===0&&(R&6)===0&&vn();var t=R;R|=1;var n=be.transition,r=M;try{if(be.transition=null,M=1,e)return e()}finally{M=r,be.transition=n,R=t,(R&6)===0&&zt()}}function wa(){Se=pn.current,V(pn)}function Mt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,gf(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(ea(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&go();break;case 3:Cn(),V(ke),V(fe),sa();break;case 5:ua(r);break;case 4:Cn();break;case 13:V(Q);break;case 19:V(Q);break;case 10:oa(r.type._context);break;case 22:case 23:wa()}n=n.return}if(le=e,ee=e=St(e.current,null),ue=Se=t,ne=0,mr=null,ya=Wo=Vt=0,xe=Zn=null,Tt!==null){for(t=0;t<Tt.length;t++)if(n=Tt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}Tt=null}return e}function Yc(e,t){do{var n=ee;try{if(ra(),qr.current=Fo,So){for(var r=G.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}So=!1}if($t=0,oe=te=G=null,Yn=!1,pr=0,ga.current=null,n===null||n.return===null){ne=1,mr=t,ee=null;break}e:{var l=e,i=n.return,a=n,u=t;if(t=ue,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,y=h.tag;if((h.mode&1)===0&&(y===0||y===11||y===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var E=Eu(i);if(E!==null){E.flags&=-257,Cu(E,i,a,l,t),E.mode&1&&ku(l,c,t),t=E,u=c;var x=t.updateQueue;if(x===null){var k=new Set;k.add(u),t.updateQueue=k}else x.add(u);break e}else{if((t&1)===0){ku(l,c,t),ka();break e}u=Error(F(426))}}else if(K&&a.mode&1){var B=Eu(i);if(B!==null){(B.flags&65536)===0&&(B.flags|=256),Cu(B,i,a,l,t),ta(Sn(u,a));break e}}l=u=Sn(u,a),ne!==4&&(ne=2),Zn===null?Zn=[l]:Zn.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var p=jc(l,u,t);mu(l,p);break e;case 1:a=u;var d=l.type,f=l.stateNode;if((l.flags&128)===0&&(typeof d.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Et===null||!Et.has(f)))){l.flags|=65536,t&=-t,l.lanes|=t;var v=_c(l,a,t);mu(l,v);break e}}l=l.return}while(l!==null)}Jc(n)}catch(C){t=C,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(1)}function Xc(){var e=No.current;return No.current=Fo,e===null?Fo:e}function ka(){(ne===0||ne===3||ne===2)&&(ne=4),le===null||(Vt&268435455)===0&&(Wo&268435455)===0||ft(le,ue)}function Do(e,t){var n=R;R|=2;var r=Xc();(le!==e||ue!==t)&&(Je=null,Mt(e,t));do try{Uf();break}catch(o){Yc(e,o)}while(1);if(ra(),R=n,No.current=r,ee!==null)throw Error(F(261));return le=null,ue=0,ne}function Uf(){for(;ee!==null;)Zc(ee)}function $f(){for(;ee!==null&&!pp();)Zc(ee)}function Zc(e){var t=ed(e.alternate,e,Se);e.memoizedProps=e.pendingProps,t===null?Jc(e):ee=t,ga.current=null}function Jc(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=bf(n,t,Se),n!==null){ee=n;return}}else{if(n=Lf(n,t),n!==null){n.flags&=32767,ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,ee=null;return}}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);ne===0&&(ne=5)}function bt(e,t,n){var r=M,o=be.transition;try{be.transition=null,M=1,Vf(e,t,n,r)}finally{be.transition=o,M=r}return null}function Vf(e,t,n,r){do vn();while(mt!==null);if((R&6)!==0)throw Error(F(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(F(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Ep(e,l),e===le&&(ee=le=null,ue=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Wr||(Wr=!0,td(so,function(){return vn(),null})),l=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||l){l=be.transition,be.transition=null;var i=M;M=1;var a=R;R|=4,ga.current=null,Rf(e,n),Kc(n,e),sf(oi),po=!!ri,oi=ri=null,e.current=n,Mf(n),fp(),R=a,M=i,be.transition=l}else e.current=n;if(Wr&&(Wr=!1,mt=e,Ao=o),l=e.pendingLanes,l===0&&(Et=null),gp(n.stateNode),Ce(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Po)throw Po=!1,e=Si,Si=null,e;return(Ao&1)!==0&&e.tag!==0&&vn(),l=e.pendingLanes,(l&1)!==0?e===Fi?Jn++:(Jn=0,Fi=e):Jn=0,zt(),null}function vn(){if(mt!==null){var e=js(Ao),t=be.transition,n=M;try{if(be.transition=null,M=16>e?16:e,mt===null)var r=!1;else{if(e=mt,mt=null,Ao=0,(R&6)!==0)throw Error(F(331));var o=R;for(R|=4,D=e.current;D!==null;){var l=D,i=l.child;if((D.flags&16)!==0){var a=l.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(D=c;D!==null;){var h=D;switch(h.tag){case 0:case 11:case 15:Xn(8,h,l)}var y=h.child;if(y!==null)y.return=h,D=y;else for(;D!==null;){h=D;var m=h.sibling,E=h.return;if(Vc(h),h===c){D=null;break}if(m!==null){m.return=E,D=m;break}D=E}}}var x=l.alternate;if(x!==null){var k=x.child;if(k!==null){x.child=null;do{var B=k.sibling;k.sibling=null,k=B}while(k!==null)}}D=l}}if((l.subtreeFlags&2064)!==0&&i!==null)i.return=l,D=i;else e:for(;D!==null;){if(l=D,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:Xn(9,l,l.return)}var p=l.sibling;if(p!==null){p.return=l.return,D=p;break e}D=l.return}}var d=e.current;for(D=d;D!==null;){i=D;var f=i.child;if((i.subtreeFlags&2064)!==0&&f!==null)f.return=i,D=f;else e:for(i=d;D!==null;){if(a=D,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Vo(9,a)}}catch(C){X(a,a.return,C)}if(a===i){D=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,D=v;break e}D=a.return}}if(R=o,zt(),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(Lo,e)}catch{}r=!0}return r}finally{M=n,be.transition=t}}return!1}function Tu(e,t,n){t=Sn(n,t),t=jc(e,t,1),e=kt(e,t,1),t=me(),e!==null&&(wr(e,1,t),Ce(e,t))}function X(e,t,n){if(e.tag===3)Tu(e,e,n);else for(;t!==null;){if(t.tag===3){Tu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Et===null||!Et.has(r))){e=Sn(n,e),e=_c(t,e,1),t=kt(t,e,1),e=me(),t!==null&&(wr(t,1,e),Ce(t,e));break}}t=t.return}}function Wf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=me(),e.pingedLanes|=e.suspendedLanes&n,le===e&&(ue&n)===n&&(ne===4||ne===3&&(ue&130023424)===ue&&500>J()-va?Mt(e,0):ya|=n),Ce(e,t)}function qc(e,t){t===0&&((e.mode&1)===0?t=1:(t=br,br<<=1,(br&130023424)===0&&(br=4194304)));var n=me();e=lt(e,t),e!==null&&(wr(e,t,n),Ce(e,n))}function Hf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qc(e,n)}function Kf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(t),qc(e,n)}var ed;ed=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ke.current)we=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return we=!1,_f(e,t,n);we=(e.flags&131072)!==0}else we=!1,K&&(t.flags&1048576)!==0&&oc(t,xo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;to(e,t),e=t.pendingProps;var o=wn(t,fe.current);yn(t,n),o=da(null,t,r,e,o,n);var l=pa();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ee(r)?(l=!0,yo(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ia(t),o.updater=$o,t.stateNode=o,o._reactInternals=t,fi(t,r,e,n),t=gi(null,t,r,!0,l,n)):(t.tag=0,K&&l&&qi(t),he(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(to(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Gf(r),e=Oe(r,e),o){case 0:t=mi(null,t,r,e,n);break e;case 1:t=Nu(null,t,r,e,n);break e;case 11:t=Su(null,t,r,e,n);break e;case 14:t=Fu(null,t,r,Oe(r.type,e),n);break e}throw Error(F(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Oe(r,o),mi(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Oe(r,o),Nu(e,t,r,o,n);case 3:e:{if(Rc(t),e===null)throw Error(F(387));r=t.pendingProps,l=t.memoizedState,o=l.element,cc(e,t),Eo(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=Sn(Error(F(423)),t),t=Pu(e,t,r,n,o);break e}else if(r!==o){o=Sn(Error(F(424)),t),t=Pu(e,t,r,n,o);break e}else for(Fe=wt(t.stateNode.containerInfo.firstChild),Ne=t,K=!0,$e=null,n=uc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(kn(),r===o){t=it(e,t,n);break e}he(e,t,r,n)}t=t.child}return t;case 5:return dc(t),e===null&&ci(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,li(r,o)?i=null:l!==null&&li(r,l)&&(t.flags|=32),Tc(e,t),he(e,t,i,n),t.child;case 6:return e===null&&ci(t),null;case 13:return Mc(e,t,n);case 4:return aa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=En(t,null,r,n):he(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Oe(r,o),Su(e,t,r,o,n);case 7:return he(e,t,t.pendingProps,n),t.child;case 8:return he(e,t,t.pendingProps.children,n),t.child;case 12:return he(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,O(wo,r._currentValue),r._currentValue=i,l!==null)if(He(l.value,i)){if(l.children===o.children&&!ke.current){t=it(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){i=l.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(l.tag===1){u=nt(-1,n&-n),u.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),di(l.return,n,t),a.lanes|=n;break}u=u.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(F(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),di(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}he(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,yn(t,n),o=Le(o),r=r(o),t.flags|=1,he(e,t,r,n),t.child;case 14:return r=t.type,o=Oe(r,t.pendingProps),o=Oe(r.type,o),Fu(e,t,r,o,n);case 15:return bc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Oe(r,o),to(e,t),t.tag=1,Ee(r)?(e=!0,yo(t)):e=!1,yn(t,n),Bc(t,r,o),fi(t,r,o,n),gi(null,t,r,!0,e,n);case 19:return Ic(e,t,n);case 22:return Lc(e,t,n)}throw Error(F(156,t.tag))};function td(e,t){return As(e,t)}function Qf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _e(e,t,n,r){return new Qf(e,t,n,r)}function Ea(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gf(e){if(typeof e=="function")return Ea(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ui)return 11;if(e===$i)return 14}return 2}function St(e,t){var n=e.alternate;return n===null?(n=_e(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function oo(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")Ea(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case tn:return It(n.children,o,l,t);case Oi:i=8,o|=8;break;case Rl:return e=_e(12,n,t,o|2),e.elementType=Rl,e.lanes=l,e;case Ml:return e=_e(13,n,t,o),e.elementType=Ml,e.lanes=l,e;case Il:return e=_e(19,n,t,o),e.elementType=Il,e.lanes=l,e;case ds:return Ho(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ss:i=10;break e;case cs:i=9;break e;case Ui:i=11;break e;case $i:i=14;break e;case ct:i=16,r=null;break e}throw Error(F(130,e==null?e:typeof e,""))}return t=_e(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function It(e,t,n,r){return e=_e(7,e,r,t),e.lanes=n,e}function Ho(e,t,n,r){return e=_e(22,e,r,t),e.elementType=ds,e.lanes=n,e.stateNode={isHidden:!1},e}function Dl(e,t,n){return e=_e(6,e,null,t),e.lanes=n,e}function zl(e,t,n){return t=_e(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Yf(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cl(0),this.expirationTimes=cl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ca(e,t,n,r,o,l,i,a,u){return e=new Yf(e,t,n,a,u),t===1?(t=1,l===!0&&(t|=8)):t=0,l=_e(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ia(l),e}function Xf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:en,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function nd(e){if(!e)return Pt;e=e._reactInternals;e:{if(Kt(e)!==e||e.tag!==1)throw Error(F(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ee(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(F(171))}if(e.tag===1){var n=e.type;if(Ee(n))return nc(e,n,t)}return t}function rd(e,t,n,r,o,l,i,a,u){return e=Ca(n,r,!0,e,o,l,i,a,u),e.context=nd(null),n=e.current,r=me(),o=Ct(n),l=nt(r,o),l.callback=t!=null?t:null,kt(n,l,o),e.current.lanes=o,wr(e,o,r),Ce(e,r),e}function Ko(e,t,n,r){var o=t.current,l=me(),i=Ct(o);return n=nd(n),t.context===null?t.context=n:t.pendingContext=n,t=nt(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=kt(o,t,i),e!==null&&(We(e,o,i,l),Jr(e,o,i)),i}function zo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ru(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Sa(e,t){Ru(e,t),(e=e.alternate)&&Ru(e,t)}function Zf(){return null}var od=typeof reportError=="function"?reportError:function(e){console.error(e)};function Fa(e){this._internalRoot=e}Qo.prototype.render=Fa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(F(409));Ko(e,t,null,null)};Qo.prototype.unmount=Fa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Wt(function(){Ko(null,e,null,null)}),t[ot]=null}};function Qo(e){this._internalRoot=e}Qo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ls();e={blockedOn:null,target:e,priority:t};for(var n=0;n<pt.length&&t!==0&&t<pt[n].priority;n++);pt.splice(n,0,e),n===0&&Rs(e)}};function Na(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Go(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Mu(){}function Jf(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var c=zo(i);l.call(c)}}var i=rd(t,r,e,0,null,!1,!1,"",Mu);return e._reactRootContainer=i,e[ot]=i.current,ar(e.nodeType===8?e.parentNode:e),Wt(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var c=zo(u);a.call(c)}}var u=Ca(e,0,!1,null,null,!1,!1,"",Mu);return e._reactRootContainer=u,e[ot]=u.current,ar(e.nodeType===8?e.parentNode:e),Wt(function(){Ko(t,u,n,r)}),u}function Yo(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var a=o;o=function(){var u=zo(i);a.call(u)}}Ko(t,i,e,o)}else i=Jf(n,t,e,o,r);return zo(i)}_s=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=$n(t.pendingLanes);n!==0&&(Hi(t,n|1),Ce(t,J()),(R&6)===0&&(Fn=J()+500,zt()))}break;case 13:Wt(function(){var r=lt(e,1);if(r!==null){var o=me();We(r,e,1,o)}}),Sa(e,1)}};Ki=function(e){if(e.tag===13){var t=lt(e,134217728);if(t!==null){var n=me();We(t,e,134217728,n)}Sa(e,134217728)}};bs=function(e){if(e.tag===13){var t=Ct(e),n=lt(e,t);if(n!==null){var r=me();We(n,e,t,r)}Sa(e,t)}};Ls=function(){return M};Ts=function(e,t){var n=M;try{return M=e,t()}finally{M=n}};Yl=function(e,t,n){switch(t){case"input":if($l(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Io(r);if(!o)throw Error(F(90));fs(r),$l(r,o)}}}break;case"textarea":ms(e,n);break;case"select":t=n.value,t!=null&&fn(e,!!n.multiple,t,!1)}};Es=xa;Cs=Wt;var qf={usingClientEntryPoint:!1,Events:[Er,ln,Io,ws,ks,xa]},Mn={findFiberByHostInstance:Lt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},eh={bundleType:Mn.bundleType,version:Mn.version,rendererPackageName:Mn.rendererPackageName,rendererConfig:Mn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:at.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ns(e),e===null?null:e.stateNode},findFiberByHostInstance:Mn.findFiberByHostInstance||Zf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hr.isDisabled&&Hr.supportsFiber)try{Lo=Hr.inject(eh),Ye=Hr}catch{}}Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qf;Ae.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Na(t))throw Error(F(200));return Xf(e,t,null,n)};Ae.createRoot=function(e,t){if(!Na(e))throw Error(F(299));var n=!1,r="",o=od;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ca(e,1,!1,null,null,n,!1,r,o),e[ot]=t.current,ar(e.nodeType===8?e.parentNode:e),new Fa(t)};Ae.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(F(188)):(e=Object.keys(e).join(","),Error(F(268,e)));return e=Ns(t),e=e===null?null:e.stateNode,e};Ae.flushSync=function(e){return Wt(e)};Ae.hydrate=function(e,t,n){if(!Go(t))throw Error(F(200));return Yo(null,e,t,!0,n)};Ae.hydrateRoot=function(e,t,n){if(!Na(e))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=od;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=rd(t,null,e,1,n!=null?n:null,o,!1,l,i),e[ot]=t.current,ar(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Qo(t)};Ae.render=function(e,t,n){if(!Go(t))throw Error(F(200));return Yo(null,e,t,!1,n)};Ae.unmountComponentAtNode=function(e){if(!Go(e))throw Error(F(40));return e._reactRootContainer?(Wt(function(){Yo(null,null,e,!1,function(){e._reactRootContainer=null,e[ot]=null})}),!0):!1};Ae.unstable_batchedUpdates=xa;Ae.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Go(n))throw Error(F(200));if(e==null||e._reactInternals===void 0)throw Error(F(38));return Yo(e,t,n,!1,r)};Ae.version="18.3.1-next-f1338f8080-20240426";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Ae})(ls);var ld,Iu=ls.exports;ld=Iu.createRoot,Iu.hydrateRoot;/**
 * @remix-run/router v1.3.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gr(){return gr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gr.apply(this,arguments)}var gt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(gt||(gt={}));const Ou="popstate";function th(e){e===void 0&&(e={});function t(r,o){let{pathname:l,search:i,hash:a}=r.location;return Ai("",{pathname:l,search:i,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:yr(o)}return rh(t,n,null,e)}function re(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function nh(){return Math.random().toString(36).substr(2,8)}function Uu(e,t){return{usr:e.state,key:e.key,idx:t}}function Ai(e,t,n,r){return n===void 0&&(n=null),gr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Dn(t):t,{state:n,key:t&&t.key||r||nh()})}function yr(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Dn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function rh(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:l=!1}=r,i=o.history,a=gt.Pop,u=null,c=h();c==null&&(c=0,i.replaceState(gr({},i.state,{idx:c}),""));function h(){return(i.state||{idx:null}).idx}function y(){a=gt.Pop;let B=h(),p=B==null?null:B-c;c=B,u&&u({action:a,location:k.location,delta:p})}function m(B,p){a=gt.Push;let d=Ai(k.location,B,p);n&&n(d,B),c=h()+1;let f=Uu(d,c),v=k.createHref(d);try{i.pushState(f,"",v)}catch{o.location.assign(v)}l&&u&&u({action:a,location:k.location,delta:1})}function E(B,p){a=gt.Replace;let d=Ai(k.location,B,p);n&&n(d,B),c=h();let f=Uu(d,c),v=k.createHref(d);i.replaceState(f,"",v),l&&u&&u({action:a,location:k.location,delta:0})}function x(B){let p=o.location.origin!=="null"?o.location.origin:o.location.href,d=typeof B=="string"?B:yr(B);return re(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let k={get action(){return a},get location(){return e(o,i)},listen(B){if(u)throw new Error("A history only accepts one active listener");return o.addEventListener(Ou,y),u=B,()=>{o.removeEventListener(Ou,y),u=null}},createHref(B){return t(o,B)},createURL:x,encodeLocation(B){let p=x(B);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:m,replace:E,go(B){return i.go(B)}};return k}var $u;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})($u||($u={}));function oh(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Dn(t):t,o=ud(r.pathname||"/",n);if(o==null)return null;let l=id(e);lh(l);let i=null;for(let a=0;i==null&&a<l.length;++a)i=hh(l[a],yh(o));return i}function id(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(l,i,a)=>{let u={relativePath:a===void 0?l.path||"":a,caseSensitive:l.caseSensitive===!0,childrenIndex:i,route:l};u.relativePath.startsWith("/")&&(re(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Ft([r,u.relativePath]),h=n.concat(u);l.children&&l.children.length>0&&(re(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),id(l.children,t,h,c)),!(l.path==null&&!l.index)&&t.push({path:c,score:ph(c,l.index),routesMeta:h})};return e.forEach((l,i)=>{var a;if(l.path===""||!((a=l.path)!=null&&a.includes("?")))o(l,i);else for(let u of ad(l.path))o(l,i,u)}),t}function ad(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return o?[l,""]:[l];let i=ad(r.join("/")),a=[];return a.push(...i.map(u=>u===""?l:[l,u].join("/"))),o&&a.push(...i),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function lh(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:fh(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ih=/^:\w+$/,ah=3,uh=2,sh=1,ch=10,dh=-2,Vu=e=>e==="*";function ph(e,t){let n=e.split("/"),r=n.length;return n.some(Vu)&&(r+=dh),t&&(r+=uh),n.filter(o=>!Vu(o)).reduce((o,l)=>o+(ih.test(l)?ah:l===""?sh:ch),r)}function fh(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function hh(e,t){let{routesMeta:n}=e,r={},o="/",l=[];for(let i=0;i<n.length;++i){let a=n[i],u=i===n.length-1,c=o==="/"?t:t.slice(o.length)||"/",h=mh({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},c);if(!h)return null;Object.assign(r,h.params);let y=a.route;l.push({params:r,pathname:Ft([o,h.pathname]),pathnameBase:kh(Ft([o,h.pathnameBase])),route:y}),h.pathnameBase!=="/"&&(o=Ft([o,h.pathnameBase]))}return l}function mh(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=gh(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let l=o[0],i=l.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((c,h,y)=>{if(h==="*"){let m=a[y]||"";i=l.slice(0,l.length-m.length).replace(/(.)\/+$/,"$1")}return c[h]=vh(a[y]||"",h),c},{}),pathname:l,pathnameBase:i,pattern:e}}function gh(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Pa(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(i,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function yh(e){try{return decodeURI(e)}catch(t){return Pa(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function vh(e,t){try{return decodeURIComponent(e)}catch(n){return Pa(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function ud(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Pa(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function xh(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Dn(e):e;return{pathname:n?n.startsWith("/")?n:wh(n,t):t,search:Eh(r),hash:Ch(o)}}function wh(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Bl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function sd(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function cd(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Dn(e):(o=gr({},e),re(!o.pathname||!o.pathname.includes("?"),Bl("?","pathname","search",o)),re(!o.pathname||!o.pathname.includes("#"),Bl("#","pathname","hash",o)),re(!o.search||!o.search.includes("#"),Bl("#","search","hash",o)));let l=e===""||o.pathname==="",i=l?"/":o.pathname,a;if(r||i==null)a=n;else{let y=t.length-1;if(i.startsWith("..")){let m=i.split("/");for(;m[0]==="..";)m.shift(),y-=1;o.pathname=m.join("/")}a=y>=0?t[y]:"/"}let u=xh(o,a),c=i&&i!=="/"&&i.endsWith("/"),h=(l||i===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const Ft=e=>e.join("/").replace(/\/\/+/g,"/"),kh=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Eh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ch=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Sh(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Fh=["post","put","patch","delete"];[...Fh];var Xo={exports:{}},Zo={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nh=S.exports,Ph=Symbol.for("react.element"),Ah=Symbol.for("react.fragment"),Dh=Object.prototype.hasOwnProperty,zh=Nh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bh={key:!0,ref:!0,__self:!0,__source:!0};function dd(e,t,n){var r,o={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Dh.call(t,r)&&!Bh.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Ph,type:e,key:l,ref:i,props:o,_owner:zh.current}}Zo.Fragment=Ah;Zo.jsx=dd;Zo.jsxs=dd;(function(e){e.exports=Zo})(Xo);const jh=Xo.exports.Fragment,s=Xo.exports.jsx,g=Xo.exports.jsxs;/**
 * React Router v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Di(){return Di=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Di.apply(this,arguments)}function _h(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const bh=typeof Object.is=="function"?Object.is:_h,{useState:Lh,useEffect:Th,useLayoutEffect:Rh,useDebugValue:Mh}=Ll;function Ih(e,t,n){const r=t(),[{inst:o},l]=Lh({inst:{value:r,getSnapshot:t}});return Rh(()=>{o.value=r,o.getSnapshot=t,jl(o)&&l({inst:o})},[e,r,t]),Th(()=>(jl(o)&&l({inst:o}),e(()=>{jl(o)&&l({inst:o})})),[e]),Mh(r),r}function jl(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!bh(n,r)}catch{return!0}}function Oh(e,t,n){return t()}const Uh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",$h=!Uh,Vh=$h?Oh:Ih;"useSyncExternalStore"in Ll&&(e=>e.useSyncExternalStore)(Ll);const pd=S.exports.createContext(null),fd=S.exports.createContext(null),Jo=S.exports.createContext(null),qo=S.exports.createContext(null),Qt=S.exports.createContext({outlet:null,matches:[]}),hd=S.exports.createContext(null);function Wh(e,t){let{relative:n}=t===void 0?{}:t;Sr()||re(!1);let{basename:r,navigator:o}=S.exports.useContext(Jo),{hash:l,pathname:i,search:a}=gd(e,{relative:n}),u=i;return r!=="/"&&(u=i==="/"?r:Ft([r,i])),o.createHref({pathname:u,search:a,hash:l})}function Sr(){return S.exports.useContext(qo)!=null}function el(){return Sr()||re(!1),S.exports.useContext(qo).location}function Fr(){Sr()||re(!1);let{basename:e,navigator:t}=S.exports.useContext(Jo),{matches:n}=S.exports.useContext(Qt),{pathname:r}=el(),o=JSON.stringify(sd(n).map(a=>a.pathnameBase)),l=S.exports.useRef(!1);return S.exports.useEffect(()=>{l.current=!0}),S.exports.useCallback(function(a,u){if(u===void 0&&(u={}),!l.current)return;if(typeof a=="number"){t.go(a);return}let c=cd(a,JSON.parse(o),r,u.relative==="path");e!=="/"&&(c.pathname=c.pathname==="/"?e:Ft([e,c.pathname])),(u.replace?t.replace:t.push)(c,u.state,u)},[e,t,o,r])}function md(){let{matches:e}=S.exports.useContext(Qt),t=e[e.length-1];return t?t.params:{}}function gd(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=S.exports.useContext(Qt),{pathname:o}=el(),l=JSON.stringify(sd(r).map(i=>i.pathnameBase));return S.exports.useMemo(()=>cd(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function Hh(e,t){Sr()||re(!1);let{navigator:n}=S.exports.useContext(Jo),r=S.exports.useContext(fd),{matches:o}=S.exports.useContext(Qt),l=o[o.length-1],i=l?l.params:{};l&&l.pathname;let a=l?l.pathnameBase:"/";l&&l.route;let u=el(),c;if(t){var h;let k=typeof t=="string"?Dn(t):t;a==="/"||((h=k.pathname)==null?void 0:h.startsWith(a))||re(!1),c=k}else c=u;let y=c.pathname||"/",m=a==="/"?y:y.slice(a.length)||"/",E=oh(e,{pathname:m}),x=Yh(E&&E.map(k=>Object.assign({},k,{params:Object.assign({},i,k.params),pathname:Ft([a,n.encodeLocation?n.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?a:Ft([a,n.encodeLocation?n.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),o,r||void 0);return t&&x?s(qo.Provider,{value:{location:Di({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:gt.Pop},children:x}):x}function Kh(){let e=qh(),t=Sh(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null;return g(jh,{children:[s("h2",{children:"Unexpected Application Error!"}),s("h3",{style:{fontStyle:"italic"},children:t}),n?s("pre",{style:{padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},children:n}):null,null]})}class Qh extends S.exports.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?s(Qt.Provider,{value:this.props.routeContext,children:s(hd.Provider,{value:this.state.error,children:this.props.component})}):this.props.children}}function Gh(e){let{routeContext:t,match:n,children:r}=e,o=S.exports.useContext(pd);return o&&o.static&&o.staticContext&&n.route.errorElement&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),s(Qt.Provider,{value:t,children:r})}function Yh(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,o=n==null?void 0:n.errors;if(o!=null){let l=r.findIndex(i=>i.route.id&&(o==null?void 0:o[i.route.id]));l>=0||re(!1),r=r.slice(0,Math.min(r.length,l+1))}return r.reduceRight((l,i,a)=>{let u=i.route.id?o==null?void 0:o[i.route.id]:null,c=n?i.route.errorElement||s(Kh,{}):null,h=t.concat(r.slice(0,a+1)),y=()=>s(Gh,{match:i,routeContext:{outlet:l,matches:h},children:u?c:i.route.element!==void 0?i.route.element:l});return n&&(i.route.errorElement||a===0)?s(Qh,{location:n.location,component:c,error:u,children:y(),routeContext:{outlet:null,matches:h}}):y()},null)}var Wu;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(Wu||(Wu={}));var Bo;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(Bo||(Bo={}));function Xh(e){let t=S.exports.useContext(fd);return t||re(!1),t}function Zh(e){let t=S.exports.useContext(Qt);return t||re(!1),t}function Jh(e){let t=Zh(),n=t.matches[t.matches.length-1];return n.route.id||re(!1),n.route.id}function qh(){var e;let t=S.exports.useContext(hd),n=Xh(Bo.UseRouteError),r=Jh(Bo.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function lo(e){re(!1)}function e0(e){let{basename:t="/",children:n=null,location:r,navigationType:o=gt.Pop,navigator:l,static:i=!1}=e;Sr()&&re(!1);let a=t.replace(/^\/*/,"/"),u=S.exports.useMemo(()=>({basename:a,navigator:l,static:i}),[a,l,i]);typeof r=="string"&&(r=Dn(r));let{pathname:c="/",search:h="",hash:y="",state:m=null,key:E="default"}=r,x=S.exports.useMemo(()=>{let k=ud(c,a);return k==null?null:{pathname:k,search:h,hash:y,state:m,key:E}},[a,c,h,y,m,E]);return x==null?null:s(Jo.Provider,{value:u,children:s(qo.Provider,{children:n,value:{location:x,navigationType:o}})})}function t0(e){let{children:t,location:n}=e,r=S.exports.useContext(pd),o=r&&!t?r.router.routes:zi(t);return Hh(o,n)}var Hu;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Hu||(Hu={}));new Promise(()=>{});function zi(e,t){t===void 0&&(t=[]);let n=[];return S.exports.Children.forEach(e,(r,o)=>{if(!S.exports.isValidElement(r))return;if(r.type===S.exports.Fragment){n.push.apply(n,zi(r.props.children,t));return}r.type!==lo&&re(!1),!r.props.index||!r.props.children||re(!1);let l=[...t,o],i={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(i.children=zi(r.props.children,l)),n.push(i)}),n}/**
 * React Router DOM v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function n0(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function r0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function o0(e,t){return e.button===0&&(!t||t==="_self")&&!r0(e)}const l0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function i0(e){let{basename:t,children:n,window:r}=e,o=S.exports.useRef();o.current==null&&(o.current=th({window:r,v5Compat:!0}));let l=o.current,[i,a]=S.exports.useState({action:l.action,location:l.location});return S.exports.useLayoutEffect(()=>l.listen(a),[l]),s(e0,{basename:t,children:n,location:i.location,navigationType:i.action,navigator:l})}const a0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",jo=S.exports.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:l,replace:i,state:a,target:u,to:c,preventScrollReset:h}=t,y=n0(t,l0),m=typeof c=="string"?c:yr(c),E=/^[a-z+]+:\/\//i.test(m)||m.startsWith("//"),x=m,k=!1;if(a0&&E){let f=new URL(window.location.href),v=m.startsWith("//")?new URL(f.protocol+m):new URL(m);v.origin===f.origin?x=v.pathname+v.search+v.hash:k=!0}let B=Wh(x,{relative:o}),p=u0(x,{replace:i,state:a,target:u,preventScrollReset:h,relative:o});function d(f){r&&r(f),f.defaultPrevented||p(f)}return s("a",{...y,href:E?m:B,onClick:k||l?r:d,ref:n,target:u})});var Ku;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Ku||(Ku={}));var Qu;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Qu||(Qu={}));function u0(e,t){let{target:n,replace:r,state:o,preventScrollReset:l,relative:i}=t===void 0?{}:t,a=Fr(),u=el(),c=gd(e,{relative:i});return S.exports.useCallback(h=>{if(o0(h,n)){h.preventDefault();let y=r!==void 0?r:yr(u)===yr(c);a(e,{replace:y,state:o,preventScrollReset:l,relative:i})}},[u,a,c,r,o,n,e,l,i])}/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var s0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),U=(e,t)=>{const n=S.exports.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:l=2,absoluteStrokeWidth:i,className:a="",children:u,...c},h)=>S.exports.createElement("svg",{ref:h,...s0,width:o,height:o,stroke:r,strokeWidth:i?Number(l)*24/Number(o):l,className:["lucide",`lucide-${c0(e)}`,a].join(" "),...c},[...t.map(([y,m])=>S.exports.createElement(y,m)),...Array.isArray(u)?u:[u]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _l=U("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _o=U("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bi=U("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bl=U("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=U("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=U("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
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
 */const f0=U("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=U("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gu=U("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=U("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=U("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=U("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=U("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=U("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=U("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bo=U("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=U("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aa=U("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tl=U("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=U("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=U("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vr=U("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=U("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function C0(e,t,n){return window.go.main.App.CreateChapter(e,t,n)}function S0(e,t,n,r){return window.go.main.App.CreateCharacter(e,t,n,r)}function F0(e,t,n,r,o,l){return window.go.main.App.CreateParagraph(e,t,n,r,o,l)}function N0(e,t){return window.go.main.App.CreateProject(e,t)}function P0(e){return window.go.main.App.DeleteChapter(e)}function A0(e){return window.go.main.App.DeleteCharacter(e)}function D0(e){return window.go.main.App.DeleteParagraph(e)}function z0(e){return window.go.main.App.DeleteProject(e)}function B0(e,t){return window.go.main.App.DeleteProjectKnownCharacter(e,t)}function j0(e){return window.go.main.App.GetChapter(e)}function _0(e){return window.go.main.App.GetChapters(e)}function b0(e){return window.go.main.App.GetCharacter(e)}function L0(e){return window.go.main.App.GetCharacters(e)}function T0(e){return window.go.main.App.GetParagraph(e)}function R0(e){return window.go.main.App.GetParagraphs(e)}function M0(e){return window.go.main.App.GetProject(e)}function I0(e){return window.go.main.App.GetProjectKnownCharacters(e)}function O0(e){return window.go.main.App.GetProjectLLMApiKey(e)}function U0(){return window.go.main.App.GetProjects()}function $0(e){return window.go.main.App.GetVoice(e)}function V0(){return window.go.main.App.GetVoices()}function W0(e,t,n){return window.go.main.App.Log(e,t,n)}function H0(e,t){return window.go.main.App.ReorderChapters(e,t)}function K0(e,t){return window.go.main.App.SetProjectLLMApiKey(e,t)}function Q0(e){return window.go.main.App.SplitParagraph(e)}function G0(e,t,n){return window.go.main.App.UpdateChapter(e,t,n)}function Y0(e,t,n,r){return window.go.main.App.UpdateCharacter(e,t,n,r)}function X0(e,t,n,r,o,l,i,a,u){return window.go.main.App.UpdateParagraph(e,t,n,r,o,l,i,a,u)}function Z0(e,t,n){return window.go.main.App.UpdateProject(e,t,n)}function J0(e,t){return window.go.main.App.UpdateProjectKnownCharacters(e,t)}const H={createProject:async(e,t)=>{try{return await N0(e,t)}catch(n){throw console.error("Failed to create project:",n),n}},getProjects:async()=>{try{return await U0()||[]}catch(e){throw console.error("Failed to get projects:",e),e}},getProject:async e=>{try{return await M0(e)}catch(t){throw console.error("Failed to get project:",t),t}},updateProject:async(e,t,n)=>{try{await Z0(e,t,n)}catch(r){throw console.error("Failed to update project:",r),r}},deleteProject:async e=>{try{await z0(e)}catch(t){throw console.error("Failed to delete project:",t),t}},setProjectLLMApiKey:async(e,t)=>{try{await K0(e,t)}catch(n){throw console.error("Failed to set project LLM API key:",n),n}},getProjectLLMApiKey:async e=>{try{return await O0(e)||""}catch(t){throw console.error("Failed to get project LLM API key:",t),t}},getProjectKnownCharacters:async e=>{try{return await I0(e)||[]}catch(t){throw console.error("Failed to get project known characters:",t),t}},updateProjectKnownCharacters:async(e,t)=>{try{await J0(e,t)}catch(n){throw console.error("Failed to update project known characters:",n),n}},deleteProjectKnownCharacter:async(e,t)=>{try{await B0(e,t)}catch(n){throw console.error("Failed to delete project known character:",n),n}},setKnownCharacterVoice:async(e,t,n)=>{try{const o=(await H.getProjectKnownCharacters(e)).map(l=>l.name===t?{...l,voiceId:n}:l);await H.updateProjectKnownCharacters(e,o)}catch(r){throw console.error("Failed to set known character voice:",r),r}},createChapter:async(e,t,n)=>{try{return await C0(e,t,n)}catch(r){throw console.error("Failed to create chapter:",r),r}},getChapters:async e=>{try{return await _0(e)||[]}catch(t){throw console.error("Failed to get chapters:",t),t}},getChapter:async e=>{try{return await j0(e)}catch(t){throw console.error("Failed to get chapter:",t),t}},updateChapter:async(e,t,n)=>{try{await G0(e,t,n)}catch(r){throw console.error("Failed to update chapter:",r),r}},deleteChapter:async e=>{try{await P0(e)}catch(t){throw console.error("Failed to delete chapter:",t),t}},reorderChapters:async(e,t)=>{try{await H0(e,t)}catch(n){throw console.error("Failed to reorder chapters:",n),n}},createParagraph:async(e,t,n,r,o,l)=>{try{return await F0(e,t,n,r,o,l)}catch(i){throw console.error("Failed to create paragraph:",i),i}},getParagraphs:async e=>{try{return await R0(e)||[]}catch(t){throw console.error("Failed to get paragraphs:",t),t}},getParagraph:async e=>{try{return await T0(e)}catch(t){throw console.error("Failed to get paragraph:",t),t}},updateParagraph:async(e,t,n,r,o,l,i="",a=0,u=0)=>{try{await X0(e,t,n,r,o,l,i,a,u)}catch(c){throw console.error("Failed to update paragraph:",c),c}},deleteParagraph:async e=>{try{await D0(e)}catch(t){throw console.error("Failed to delete paragraph:",t),t}},splitParagraph:async e=>{try{return await Q0(e)||[]}catch(t){throw console.error("Failed to split paragraph:",t),t}},createCharacter:async(e,t,n,r)=>{try{return await S0(e,t,n,r)}catch(o){throw console.error("Failed to create character:",o),o}},getCharacters:async e=>{try{return await L0(e)||[]}catch(t){throw console.error("Failed to get characters:",t),t}},getCharacter:async e=>{try{return await b0(e)}catch(t){throw console.error("Failed to get character:",t),t}},updateCharacter:async(e,t,n,r)=>{try{await Y0(e,t,n,r)}catch(o){throw console.error("Failed to update character:",o),o}},deleteCharacter:async e=>{try{await A0(e)}catch(t){throw console.error("Failed to delete character:",t),t}},getVoices:async()=>{try{return await V0()||[]}catch(e){throw console.error("Failed to get voices:",e),e}},getVoice:async e=>{try{return await $0(e)}catch(t){throw console.error("Failed to get voice:",t),t}},analyzeText:async e=>{throw new Error("Not implemented")},generateAudio:async(e,t,n,r)=>{throw new Error("Not implemented")},generateBatchAudio:async e=>{throw new Error("Not implemented")},log:async(e,t,n)=>{try{await W0(e,t,n)}catch(r){console.error("Failed to send log to backend:",r)}}},q0=()=>{const e=Fr(),[t,n]=S.exports.useState([]),[r,o]=S.exports.useState(!1),[l,i]=S.exports.useState(!1),[a,u]=S.exports.useState(!1),[c,h]=S.exports.useState(null),[y,m]=S.exports.useState(null),[E,x]=S.exports.useState({name:"",description:""}),k=async()=>{o(!0);try{const C=await H.getProjects();n(C)}catch(C){console.error("Failed to load projects:",C)}o(!1)};S.exports.useEffect(()=>{k()},[]);const B=async C=>{if(C.preventDefault(),!!E.name.trim()){o(!0);try{await H.createProject(E.name,E.description),x({name:"",description:""}),i(!1),k()}catch(N){console.error("Failed to create project:",N)}o(!1)}},p=C=>{h(C),u(!0)},d=async()=>{if(!!c){o(!0),m(null);try{await H.deleteProject(c.id),u(!1),h(null),k()}catch(C){console.error("Failed to delete project:",C),m("\u5220\u9664\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5")}o(!1)}},f=()=>{u(!1),h(null),m(null)},v=C=>{e(`/project/${C}`)};return g("div",{className:"home-page",children:[g("div",{className:"page-header",children:[g("div",{className:"header-content",children:[s(Bi,{size:28,className:"header-icon"}),g("div",{children:[s("h1",{children:"\u542C\u58A8\u8BED - \u6709\u58F0\u5C0F\u8BF4\u5236\u4F5C"}),s("p",{children:"\u521B\u5EFA\u3001\u7F16\u8F91\u548C\u7BA1\u7406\u60A8\u7684\u6709\u58F0\u5C0F\u8BF4\u5DE5\u7A0B"})]})]}),g("button",{className:"create-project-btn",onClick:()=>i(!0),disabled:r,children:[s(xd,{size:20}),"\u521B\u5EFA\u65B0\u5DE5\u7A0B"]})]}),s("div",{className:"projects-container",children:s("div",{className:"projects-list",children:r&&t.length===0?g("div",{className:"loading",children:[s("div",{className:"spinner"}),s("p",{children:"\u52A0\u8F7D\u4E2D..."})]}):t.length===0?g("div",{className:"empty-state",children:[s(f0,{size:64}),s("h2",{children:"\u6682\u65E0\u5DE5\u7A0B"}),s("p",{children:"\u70B9\u51FB\u4E0A\u65B9\u6309\u94AE\u521B\u5EFA\u60A8\u7684\u7B2C\u4E00\u4E2A\u6709\u58F0\u5C0F\u8BF4\u5DE5\u7A0B"})]}):t.map((C,N)=>g("div",{className:"project-item",children:[g("div",{className:"project-info",onClick:()=>v(C.id),children:[s("div",{className:"project-index",children:N+1}),g("div",{className:"project-content",children:[s("h3",{children:C.name}),s("p",{className:"project-description",children:C.description||"\u6682\u65E0\u63CF\u8FF0"}),g("div",{className:"project-meta",children:[g("span",{children:["\u521B\u5EFA\u65F6\u95F4: ",new Date(C.createdAt).toLocaleDateString()]}),g("span",{children:["\u66F4\u65B0\u65F6\u95F4: ",new Date(C.updatedAt).toLocaleDateString()]})]})]})]}),g("div",{className:"project-actions",children:[g("button",{className:"btn-primary",onClick:P=>{P.stopPropagation(),v(C.id)},disabled:r,title:"\u6253\u5F00\u9879\u76EE",children:[s(vd,{size:16}),"\u6253\u5F00"]}),g("button",{className:"btn-danger",onClick:P=>{P.stopPropagation(),p(C)},disabled:r,children:[s(tl,{size:16}),"\u5220\u9664"]})]})]},C.id))})}),l&&s("div",{className:"modal",children:g("div",{className:"modal-content",children:[g("div",{className:"modal-header",children:[s("h2",{children:"\u521B\u5EFA\u65B0\u5DE5\u7A0B"}),s("button",{className:"modal-close",onClick:()=>i(!1),children:"\xD7"})]}),g("form",{onSubmit:B,children:[g("div",{className:"form-group",children:[s("label",{htmlFor:"project-name",children:"\u5DE5\u7A0B\u540D\u79F0"}),s("input",{type:"text",id:"project-name",value:E.name,onChange:C=>x({...E,name:C.target.value}),placeholder:"\u8BF7\u8F93\u5165\u5DE5\u7A0B\u540D\u79F0",required:!0})]}),g("div",{className:"form-group",children:[s("label",{htmlFor:"project-description",children:"\u5DE5\u7A0B\u63CF\u8FF0"}),s("textarea",{id:"project-description",value:E.description,onChange:C=>x({...E,description:C.target.value}),placeholder:"\u8BF7\u8F93\u5165\u5DE5\u7A0B\u63CF\u8FF0",rows:3})]}),g("div",{className:"modal-footer",children:[s("button",{type:"button",className:"btn-secondary",onClick:()=>i(!1),disabled:r,children:"\u53D6\u6D88"}),s("button",{type:"submit",className:"btn-primary",disabled:r,children:"\u786E\u5B9A"})]})]})]})}),a&&c&&s("div",{className:"modal",children:g("div",{className:"modal-content delete-modal",children:[g("div",{className:"modal-header",children:[s("h2",{children:"\u5220\u9664\u5DE5\u7A0B"}),s("button",{className:"modal-close",onClick:f,children:"\xD7"})]}),g("div",{className:"delete-warning",children:[s("div",{className:"warning-icon",children:s("svg",{width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",children:s("path",{d:"M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",stroke:"#EF4444",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),s("h3",{children:"\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u5DE5\u7A0B\u5417\uFF1F"}),s("p",{className:"project-name-highlight",children:c.name}),s("p",{className:"delete-warning-text",children:"\u6B64\u64CD\u4F5C\u65E0\u6CD5\u64A4\u9500\uFF0C\u5DE5\u7A0B\u4E0B\u7684\u6240\u6709\u7AE0\u8282\u3001\u6BB5\u843D\u548C\u89D2\u8272\u6570\u636E\u90FD\u5C06\u88AB\u6C38\u4E45\u5220\u9664\u3002"}),y&&s("p",{className:"delete-error-message",children:y})]}),g("div",{className:"modal-footer",children:[s("button",{type:"button",className:"btn-secondary",onClick:f,disabled:r,children:"\u53D6\u6D88"}),s("button",{type:"button",className:"btn-danger",onClick:d,disabled:r,children:r?"\u5220\u9664\u4E2D...":"\u786E\u8BA4\u5220\u9664"})]})]})}),s("style",{children:`
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
      `})]})},em=({projectId:e,onChapterSelect:t})=>{const n=Fr(),[r,o]=S.exports.useState([]),[l,i]=S.exports.useState(!1),[a,u]=S.exports.useState(!1),[c,h]=S.exports.useState({title:"",content:""}),y=async()=>{i(!0);try{const p=await H.getChapters(e);o(p)}catch(p){console.error("Failed to load chapters:",p)}i(!1)};S.exports.useEffect(()=>{y()},[e]);const m=async p=>{if(p.preventDefault(),!!c.title.trim()){i(!0);try{await H.createChapter(e,c.title,c.content),h({title:"",content:""}),u(!1),y()}catch(d){console.error("Failed to create chapter:",d)}i(!1)}},E=async p=>{if(!!window.confirm("\u786E\u5B9A\u8981\u5220\u9664\u6B64\u7AE0\u8282\u5417\uFF1F")){i(!0);try{await H.deleteChapter(p),y()}catch(d){console.error("Failed to delete chapter:",d)}i(!1)}},x=(p,d)=>{p.dataTransfer.setData("text/plain",d.toString())},k=p=>{p.preventDefault()},B=async(p,d)=>{p.preventDefault();const f=parseInt(p.dataTransfer.getData("text/plain"));if(f!==d){const v=[...r],[C]=v.splice(f,1);v.splice(d,0,C);const N=v.map(P=>P.id);try{await H.reorderChapters(e,N),o(v)}catch(P){console.error("Failed to reorder chapters:",P)}}};return g("div",{className:"chapter-manager",children:[g("div",{className:"chapter-manager-header",children:[g("div",{className:"header-left",children:[s(ji,{size:20}),s("h2",{children:"\u7AE0\u8282\u7BA1\u7406"})]}),g("button",{className:"btn-primary",onClick:()=>u(!0),disabled:l,children:[s(xd,{size:16}),"\u65B0\u5EFA\u7AE0\u8282"]})]}),s("div",{className:"chapter-list",children:l&&r.length===0?g("div",{className:"loading-state",children:[s("div",{className:"spinner"}),s("p",{children:"\u52A0\u8F7D\u4E2D..."})]}):r.length===0?g("div",{className:"empty-state",children:[s(m0,{size:48}),s("h3",{children:"\u6682\u65E0\u7AE0\u8282"}),s("p",{children:"\u70B9\u51FB\u4E0A\u65B9\u6309\u94AE\u521B\u5EFA\u60A8\u7684\u7B2C\u4E00\u4E2A\u7AE0\u8282"})]}):r.map((p,d)=>g("div",{className:"chapter-item",draggable:!0,onDragStart:f=>x(f,d),onDragOver:k,onDrop:f=>B(f,d),children:[g("div",{className:"chapter-info",onClick:()=>n(`/project/${e}/chapter/${p.id}`),children:[s("div",{className:"chapter-index",children:d+1}),g("div",{className:"chapter-content",children:[s("h4",{children:p.title}),g("p",{className:"chapter-preview",children:[p.content.slice(0,50),p.content.length>50?"...":""]}),g("div",{className:"chapter-meta",children:[g("span",{children:["\u521B\u5EFA\u65F6\u95F4: ",new Date(p.createdAt).toLocaleDateString()]}),g("span",{children:["\u66F4\u65B0\u65F6\u95F4: ",new Date(p.updatedAt).toLocaleDateString()]})]})]})]}),g("div",{className:"chapter-actions",children:[s(h0,{size:20,className:"drag-handle"}),g("button",{className:"btn-primary",onClick:f=>{f.stopPropagation(),n(`/project/${e}/chapter/${p.id}`)},disabled:l,title:"\u6253\u5F00\u7AE0\u8282\u7F16\u8F91\u5668",children:[s(vd,{size:16}),"\u6253\u5F00"]}),g("button",{className:"btn-danger",onClick:f=>{f.stopPropagation(),E(p.id)},disabled:l,children:[s(tl,{size:16}),"\u5220\u9664"]})]})]},p.id))}),a&&s("div",{className:"modal",children:g("div",{className:"modal-content",children:[g("div",{className:"modal-header",children:[s("h2",{children:"\u521B\u5EFA\u65B0\u7AE0\u8282"}),s("button",{className:"modal-close",onClick:()=>u(!1),disabled:l,children:s(vr,{size:24})})]}),g("form",{onSubmit:m,children:[g("div",{className:"form-group",children:[s("label",{htmlFor:"chapter-title",children:"\u7AE0\u8282\u6807\u9898"}),s("input",{type:"text",id:"chapter-title",value:c.title,onChange:p=>h({...c,title:p.target.value}),placeholder:"\u8BF7\u8F93\u5165\u7AE0\u8282\u6807\u9898",required:!0})]}),g("div",{className:"form-group",children:[s("label",{htmlFor:"chapter-content",children:"\u7AE0\u8282\u5185\u5BB9"}),s("textarea",{id:"chapter-content",value:c.content,onChange:p=>h({...c,content:p.target.value}),placeholder:"\u8BF7\u8F93\u5165\u7AE0\u8282\u5185\u5BB9",rows:6})]}),g("div",{className:"modal-footer",children:[s("button",{type:"button",className:"btn-secondary",onClick:()=>u(!1),disabled:l,children:"\u53D6\u6D88"}),s("button",{type:"submit",className:"btn-primary",disabled:l,children:"\u786E\u5B9A"})]})]})]})}),s("style",{children:`
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
      `})]})},tm=({projectId:e})=>{const[t,n]=S.exports.useState([]),[r,o]=S.exports.useState([]),[l,i]=S.exports.useState(!1);S.exports.useEffect(()=>{e&&a()},[e]);const a=async()=>{i(!0);try{const[h,y]=await Promise.all([H.getProjectKnownCharacters(e),H.getVoices()]);n(h),o(y)}catch(h){console.error("Failed to load data:",h)}i(!1)},u=async h=>{if(!!window.confirm(`\u786E\u5B9A\u8981\u5220\u9664\u89D2\u8272 "${h}" \u5417\uFF1F`)){i(!0);try{await H.deleteProjectKnownCharacter(e,h),a()}catch(y){console.error("Failed to delete known character:",y)}i(!1)}},c=async(h,y)=>{try{n(m=>m.map(E=>E.name===h?{...E,voiceId:y}:E)),await H.setKnownCharacterVoice(e,h,y)}catch(m){console.error("Failed to set character voice:",m),a()}};return g("div",{className:"role-manager",children:[s("div",{className:"role-manager-header",children:g("div",{className:"header-left",children:[s(bl,{size:20}),s("h2",{children:"\u5DF2\u77E5\u89D2\u8272"}),t.length>0&&s("span",{className:"count-badge",children:t.length})]})}),s("div",{className:"role-list",children:l&&t.length===0?g("div",{className:"loading-state",children:[s("div",{className:"spinner"}),s("p",{children:"\u52A0\u8F7D\u4E2D..."})]}):t.length===0?g("div",{className:"empty-state",children:[s(bl,{size:48}),s("h3",{children:"\u6682\u672A\u77E5\u89D2\u8272"}),s("p",{children:"\u4F7F\u7528 LLM \u89E3\u6790\u6587\u672C\u540E\uFF0C\u8BC6\u522B\u5230\u7684\u89D2\u8272\u4F1A\u663E\u793A\u5728\u8FD9\u91CC"})]}):s("div",{className:"role-grid",children:t.map((h,y)=>g("div",{className:"role-card known-character-card",children:[s("div",{className:"role-avatar known-avatar",children:s(bl,{size:28})}),g("div",{className:"role-info",children:[s("h4",{children:h.name}),h.description&&s("p",{className:"role-description",children:h.description}),g("div",{className:"voice-select-row",children:[s(wd,{size:14}),g("select",{className:"voice-select",value:h.voiceId||"",onChange:m=>c(h.name,m.target.value),disabled:l,children:[s("option",{value:"",children:"\u9009\u62E9\u97F3\u8272"}),r.map(m=>s("option",{value:m.id,children:m.name},m.id))]})]}),g("div",{className:"known-badge",children:[s(Aa,{size:12}),s("span",{children:"AI \u8BC6\u522B"})]})]}),s("div",{className:"role-actions",children:s("button",{className:"btn-icon btn-danger",onClick:()=>u(h.name),disabled:l,title:"\u5220\u9664",children:s(tl,{size:16})})})]},`${h.name}-${y}`))})}),s("style",{children:`
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
      `})]})},nm=()=>{const{id:e}=md(),t=Fr(),[n,r]=S.exports.useState(null),[o,l]=S.exports.useState(!1),[i,a]=S.exports.useState(!1),[u,c]=S.exports.useState(!1),[h,y]=S.exports.useState({name:"",description:""}),[m,E]=S.exports.useState(""),[x,k]=S.exports.useState(!1);S.exports.useEffect(()=>{e&&B(parseInt(e))},[e]);const B=async v=>{l(!0);try{const C=await H.getProject(v);r(C),C&&(y({name:C.name,description:C.description}),E(C.llmApiKey||""))}catch(C){console.error("Failed to load project:",C)}l(!1)},p=async()=>{if(!!e){l(!0);try{await H.updateProject(parseInt(e),h.name,h.description),a(!1),B(parseInt(e))}catch(v){console.error("Failed to update project:",v)}l(!1)}},d=async()=>{if(!!e){k(!0);try{await H.setProjectLLMApiKey(parseInt(e),m),c(!1),B(parseInt(e))}catch(v){console.error("Failed to save API key:",v)}k(!1)}},f=v=>v?v.length<=8?v:v.slice(0,4)+"..."+v.slice(-4):"\u672A\u8BBE\u7F6E";return o&&!n?s("div",{className:"project-details-page",children:g("div",{className:"loading-container",children:[s("div",{className:"spinner"}),s("p",{children:"\u52A0\u8F7D\u4E2D..."})]})}):n?g("div",{className:"project-details-page",children:[s("header",{className:"page-header",children:g("div",{className:"header-inner",children:[g("div",{className:"header-left",children:[g(jo,{to:"/",className:"back-button",children:[s(_o,{size:18}),s("span",{children:"\u8FD4\u56DE"})]}),s("div",{className:"divider"}),g("div",{className:"project-title",children:[s(Bi,{size:20,className:"title-icon"}),g("div",{children:[s("h1",{children:n.name}),s("p",{className:"subtitle",children:"\u6709\u58F0\u5C0F\u8BF4\u5236\u4F5C\u5DE5\u7A0B"})]})]})]}),s("div",{className:"header-right",children:s("button",{className:"btn-secondary",onClick:()=>t("/"),children:"\u8FD4\u56DE\u9996\u9875"})})]})}),s("main",{className:"main-content",children:g("div",{className:"content-wrapper",children:[g("section",{className:"project-info-section",children:[g("div",{className:"section-header",children:[g("h2",{children:[s(Aa,{size:18}),"\u9879\u76EE\u6982\u89C8"]}),!i&&s("button",{className:"btn-ghost",onClick:()=>a(!0),disabled:o,children:"\u7F16\u8F91\u4FE1\u606F"})]}),s("div",{className:"project-info-card",children:i?g("div",{className:"project-info-edit",children:[g("div",{className:"form-grid",children:[g("div",{className:"form-group full-width",children:[s("label",{htmlFor:"project-name",children:"\u9879\u76EE\u540D\u79F0"}),s("input",{id:"project-name",type:"text",value:h.name,onChange:v=>y({...h,name:v.target.value}),placeholder:"\u8BF7\u8F93\u5165\u9879\u76EE\u540D\u79F0",disabled:o})]}),g("div",{className:"form-group full-width",children:[s("label",{htmlFor:"project-description",children:"\u9879\u76EE\u63CF\u8FF0"}),s("textarea",{id:"project-description",value:h.description,onChange:v=>y({...h,description:v.target.value}),placeholder:"\u8BF7\u8F93\u5165\u9879\u76EE\u63CF\u8FF0",rows:3,disabled:o})]})]}),g("div",{className:"form-actions",children:[g("button",{className:"btn-secondary",onClick:()=>{a(!1),y({name:n.name,description:n.description})},disabled:o,children:[s(vr,{size:16}),"\u53D6\u6D88"]}),g("button",{className:"btn-primary",onClick:p,disabled:o,children:[s(bo,{size:16}),"\u4FDD\u5B58\u66F4\u6539"]})]})]}):g("div",{className:"project-info-content",children:[g("div",{className:"info-grid",children:[g("div",{className:"info-item",children:[s("div",{className:"info-label",children:"\u9879\u76EE\u540D\u79F0"}),s("div",{className:"info-value",children:n.name})]}),g("div",{className:"info-item",children:[s("div",{className:"info-label",children:"\u9879\u76EE\u63CF\u8FF0"}),s("div",{className:"info-value",children:n.description||"\u6682\u65E0\u63CF\u8FF0"})]}),g("div",{className:"info-item",children:[s("div",{className:"info-label",children:"API Key"}),g("div",{className:"info-value api-key-display",children:[s(Gu,{size:14}),s("span",{children:f(n.llmApiKey)})]})]})]}),g("div",{className:"meta-row",children:[g("div",{className:"meta-item",children:[s(d0,{size:14}),g("span",{children:["\u521B\u5EFA\u4E8E ",new Date(n.createdAt).toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric"})]})]}),g("div",{className:"meta-item",children:[s(yd,{size:14}),g("span",{children:["\u66F4\u65B0\u4E8E ",new Date(n.updatedAt).toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric"})]})]})]})]})})]}),g("section",{className:"api-key-section",children:[g("div",{className:"section-header",children:[g("h2",{children:[s(Gu,{size:18}),"\u6587\u672C\u5927\u6A21\u578B API Key"]}),!u&&s("button",{className:"btn-ghost",onClick:()=>c(!0),disabled:o,children:"\u914D\u7F6E"})]}),s("div",{className:"api-key-card",children:u?g("div",{className:"api-key-edit",children:[g("div",{className:"form-group",children:[s("label",{htmlFor:"llm-api-key",children:"API Key"}),s("input",{id:"llm-api-key",type:"password",value:m,onChange:v=>E(v.target.value),placeholder:"\u8BF7\u8F93\u5165\u6587\u672C\u5927\u6A21\u578B API Key",disabled:x}),s("p",{className:"help-text",children:"\u8F93\u5165\u706B\u5C71\u5F15\u64CE\u6587\u672C\u5927\u6A21\u578B API Key"})]}),g("div",{className:"form-actions",children:[g("button",{className:"btn-secondary",onClick:()=>{c(!1),E(n.llmApiKey||"")},disabled:x,children:[s(vr,{size:16}),"\u53D6\u6D88"]}),g("button",{className:"btn-primary",onClick:d,disabled:x,children:[s(bo,{size:16}),x?"\u4FDD\u5B58\u4E2D...":"\u4FDD\u5B58"]})]})]}):g("div",{className:"api-key-content",children:[s("div",{className:"api-key-description",children:s("p",{children:"\u5728\u6B64\u9879\u76EE\u4E2D\u4F7F\u7528\u81EA\u5B9A\u4E49\u7684 API Key \u6765\u8C03\u7528\u6587\u672C\u5927\u6A21\u578B\u670D\u52A1\u3002\u5982\u679C\u672A\u8BBE\u7F6E\uFF0C\u5C06\u4F7F\u7528\u7CFB\u7EDF\u9ED8\u8BA4\u914D\u7F6E\u3002"})}),g("div",{className:"api-key-status",children:[s("div",{className:`status-indicator ${n.llmApiKey?"active":"inactive"}`,children:n.llmApiKey?"\u5DF2\u914D\u7F6E":"\u672A\u914D\u7F6E"}),n.llmApiKey&&s("span",{className:"api-key-masked",children:f(n.llmApiKey)})]})]})})]}),g("section",{className:"character-section",children:[s("div",{className:"section-header",children:g("h2",{children:[s(k0,{size:18}),"\u89D2\u8272\u7BA1\u7406"]})}),s("div",{className:"role-manager-wrapper",children:s(tm,{projectId:parseInt(e||"0")})})]}),g("section",{className:"chapter-section",children:[s("div",{className:"section-header",children:g("h2",{children:[s(Bi,{size:18}),"\u7AE0\u8282\u7BA1\u7406"]})}),s("div",{className:"chapter-manager-wrapper",children:s(em,{projectId:parseInt(e||"0")})})]})]})}),s("style",{children:`
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
      `})]}):s("div",{className:"project-details-page",children:g("div",{className:"error-container",children:[s("h2",{children:"\u9879\u76EE\u4E0D\u5B58\u5728"}),g(jo,{to:"/",className:"btn-primary",children:[s(_o,{size:16}),"\u8FD4\u56DE\u9996\u9875"]})]})})},rm="neutral",om="happy",lm="sad",im="angry",am="excited",um="fearful",sm="surprised",cm="disgusted",dm=[{value:rm,label:"\u4E2D\u6027"},{value:om,label:"\u5F00\u5FC3"},{value:lm,label:"\u60B2\u4F24"},{value:im,label:"\u6124\u6012"},{value:am,label:"\u5174\u594B"},{value:um,label:"\u6050\u60E7"},{value:sm,label:"\u60CA\u8BB6"},{value:cm,label:"\u538C\u6076"}],Kr=1,pm=()=>{const{projectId:e,chapterId:t}=md();Fr();const[n,r]=S.exports.useState(null),[o,l]=S.exports.useState([]),[i,a]=S.exports.useState([]),[u,c]=S.exports.useState([]),[h,y]=S.exports.useState([]),[m,E]=S.exports.useState(!0),[x,k]=S.exports.useState(null),[B,p]=S.exports.useState(!1),[d,f]=S.exports.useState(0),[v,C]=S.exports.useState(0),[N,P]=S.exports.useState({content:"",speaker:"",tone:"neutral",speed:Kr}),[j,I]=S.exports.useState(new Set),[L,ve]=S.exports.useState(!1),[Bt,ze]=S.exports.useState(!1),[Nr,Gt]=S.exports.useState(!1),[jt,ut]=S.exports.useState(""),[A,_]=S.exports.useState(!1),[b,W]=S.exports.useState(!1),[Z,Ze]=S.exports.useState(!1),[Re,Yt]=S.exports.useState(""),Me=S.exports.useRef(null),Xt=S.exports.useRef(null);S.exports.useEffect(()=>{t&&kd()},[t,e]),S.exports.useEffect(()=>{const w=z=>{Me.current&&!Me.current.contains(z.target)&&Ze(!1)};return document.addEventListener("mousedown",w),()=>document.removeEventListener("mousedown",w)},[]),S.exports.useEffect(()=>{if(x&&o.length>0){const w=o.find(z=>z.id===x);w&&P({content:w.content,speaker:w.speaker||"",tone:w.tone||"neutral",speed:w.speed||Kr})}},[x,o]);const kd=async()=>{E(!0);try{const w=await H.getChapter(parseInt(t||"0"));if(r(w),ut(w.content||""),e){const ol=await H.getProjectKnownCharacters(parseInt(e));c(ol)}const z=await H.getVoices();y(z);const ie=[...await H.getParagraphs(parseInt(t||"0"))].sort((ol,_d)=>ol.orderIndex-_d.orderIndex);l(ie),a(ie),Pr(ie),ie.length>0&&Zt(ie[0].id)}catch(w){console.error("Failed to load data:",w)}E(!1)},Ed=()=>{n&&ut(n.content||""),Gt(!0)},Cd=async()=>{if(!!n){_(!0);try{await H.updateChapter(n.id,n.title,jt),r(w=>w?{...w,content:jt}:null),Gt(!1),ze(!0),setTimeout(()=>ze(!1),2e3)}catch(w){console.error("Failed to save chapter:",w)}_(!1)}},Pr=w=>{const z=w.reduce((q,ie)=>q+(ie.duration||0),0);C(z)},Sd=(()=>{let w=0;return o.map(z=>{const q=w,ie=w+(z.duration||2);return w=ie,{id:z.id,start:q,end:ie,paragraph:z}})})(),Ar=w=>j.has(w),Zt=w=>{if(w===x)return;Da(),k(w);const z=o.find(q=>q.id===w);z&&P({content:z.content,speaker:z.speaker||"",tone:z.tone||"neutral",speed:z.speed||Kr})},Da=()=>{if(x){const w=o.map(z=>z.id===x?{...z,...N,voiceId:z.voiceId}:z);l(w)}},zn=(w,z)=>{P({...N,[w]:z}),x&&I(q=>new Set(q).add(x))},Fd=async()=>{if(j.size!==0){ve(!0);try{Da();for(const w of j){const z=o.find(q=>q.id===w);z&&await H.updateParagraph(z.id,z.content,z.speaker,z.tone,z.voiceId,z.speed,z.audioPath,z.duration,z.orderIndex)}I(new Set),a(o),ze(!0),setTimeout(()=>ze(!1),2e3)}catch(w){console.error("Failed to save paragraphs:",w)}ve(!1)}},Nd=()=>{if(l(i),Pr(i),I(new Set),x){const w=i.find(z=>z.id===x);w?P({content:w.content,speaker:w.speaker||"",tone:w.tone||"neutral",speed:w.speed||Kr}):i.length>0?Zt(i[0].id):k(null)}},Pd=w=>{if(!window.confirm("\u786E\u5B9A\u8981\u5220\u9664\u6B64\u6BB5\u843D\u5417\uFF1F"))return;const z=o.filter(q=>q.id!==w);l(z),Pr(z),I(q=>{const ie=new Set(q);return ie.delete(w),ie}),x===w&&(z.length>0?Zt(z[0].id):k(null))},Ad=async w=>{console.log("Generating audio for paragraph:",w)},Dd=async()=>{if(!!t&&!(o.length>0&&!window.confirm("\u5DF2\u5B58\u5728\u6BB5\u843D\uFF0C\u786E\u5B9A\u8981\u91CD\u65B0\u751F\u6210\u5417\uFF1F\u8FD9\u5C06\u8986\u76D6\u73B0\u6709\u6BB5\u843D\u3002"))){W(!0);try{const z=[...await H.splitParagraph(parseInt(t))].sort((q,ie)=>q.orderIndex-ie.orderIndex);l(z),a(z),Pr(z),I(new Set),z.length>0?Zt(z[0].id):k(null),ze(!0),setTimeout(()=>ze(!1),2e3)}catch(w){console.error("Failed to generate script:",w),alert("\u751F\u6210\u811A\u672C\u5931\u8D25\uFF1A"+w.message)}W(!1)}},zd=()=>{p(!B)},za=w=>{const z=Math.floor(w/60),q=Math.floor(w%60),ie=Math.floor(w%1*100);return`${z.toString().padStart(2,"0")}:${q.toString().padStart(2,"0")}:${ie.toString().padStart(2,"0")}`},nl=w=>({\u65C1\u767D:"#00A8FF",\u7537\u4E3B\u89D2:"#FF6B6B",\u5973\u4E3B\u89D2:"#FF8EC7"})[w]||"#95A5A6",Bd=()=>{const w=new Set;return u.forEach(z=>{z.name&&w.add(z.name)}),o.forEach(z=>{z.speaker&&w.add(z.speaker)}),Array.from(w).sort()},jd=()=>{const w=Bd();if(!Re.trim())return w;const z=Re.toLowerCase();return w.filter(q=>q.toLowerCase().includes(z))},rl=x?o.find(w=>w.id===x):null;return m?s("div",{className:"chapter-editor",children:g("div",{className:"loading-container",children:[s("div",{className:"spinner"}),s("p",{children:"\u52A0\u8F7D\u4E2D..."})]})}):n?g("div",{className:"chapter-editor",children:[g("header",{className:"editor-header",children:[g("div",{className:"header-left",children:[g(jo,{to:`/project/${e}`,className:"back-button",children:[s(_o,{size:18}),s("span",{children:"\u8FD4\u56DE"})]}),s("div",{className:"divider"}),g("div",{className:"chapter-title",children:[s("h1",{children:n.title}),s("p",{className:"subtitle",children:"\u7AE0\u8282\u7F16\u8F91 \xB7 \u65F6\u95F4\u8F74\u89C6\u56FE"})]}),j.size>0&&g("div",{className:"dirty-indicator-wrapper",children:[g("div",{className:"dirty-indicator",children:[s(_l,{size:14}),g("span",{children:[j.size," \u4E2A\u672A\u4FDD\u5B58\u4FEE\u6539"]})]}),g("button",{className:"undo-btn",onClick:Nd,disabled:L,children:[s(vr,{size:14}),"\u64A4\u9500"]})]}),Bt&&g("div",{className:"save-success",children:[s(p0,{size:14}),s("span",{children:"\u5DF2\u4FDD\u5B58"})]})]}),g("div",{className:"header-right",children:[g("button",{className:"btn-secondary",onClick:Ed,children:[s(ji,{size:16}),"\u7F16\u8F91\u6587\u672C"]}),g("button",{className:`btn-save ${j.size>0?"dirty":""}`,onClick:Fd,disabled:j.size===0||L,children:[s(bo,{size:16}),L?"\u4FDD\u5B58\u4E2D...":"\u4FDD\u5B58"]}),g("button",{className:"btn-primary",onClick:Dd,disabled:b,children:[s(Aa,{size:16}),b?"\u751F\u6210\u4E2D...":o.length>0?"\u91CD\u65B0\u751F\u6210\u811A\u672C":"\u751F\u6210\u811A\u672C"]})]})]}),g("div",{className:"editor-main",children:[g("div",{className:"upper-section",children:[g("div",{className:"paragraph-list-panel",children:[g("div",{className:"panel-header",children:[s("h2",{children:"\u6BB5\u843D\u5217\u8868"}),g("span",{className:"paragraph-count",children:[o.length," \u4E2A\u6BB5\u843D"]})]}),s("div",{className:"paragraph-list-content",children:o.map((w,z)=>g("div",{className:`paragraph-item ${x===w.id?"selected":""}`,onClick:()=>Zt(w.id),children:[g("div",{className:"paragraph-item-left",children:[s("div",{className:"paragraph-index",children:z+1}),s("div",{className:"speaker-dot",style:{backgroundColor:nl(w.speaker)}})]}),g("div",{className:"paragraph-item-content",children:[g("div",{className:"paragraph-item-header",children:[s("span",{className:"speaker-label",style:{color:nl(w.speaker)},children:w.speaker||"\u65C1\u767D"}),g("span",{className:"paragraph-duration",children:[s(yd,{size:10}),(w.duration||0).toFixed(1),"s"]}),Ar(w.id)&&s("span",{className:"dirty-dot",title:"\u6709\u672A\u4FDD\u5B58\u7684\u4FEE\u6539"})]}),s("p",{className:"paragraph-item-text",children:w.content})]}),s("div",{className:"paragraph-item-right",children:w.audioPath?s("span",{className:"has-audio-icon",children:s(wd,{size:14})}):null})]},w.id))})]}),g("div",{className:"paragraph-detail-panel",children:[g("div",{className:"panel-header",children:[s("h2",{children:"\u6BB5\u843D\u8BE6\u60C5"}),x&&Ar(x)&&g("span",{className:"dirty-badge",children:[s(_l,{size:12}),"\u672A\u4FDD\u5B58"]})]}),rl?g("div",{className:"panel-content",children:[g("div",{className:"form-group",children:[s("label",{children:"\u6587\u672C\u5185\u5BB9"}),s("textarea",{value:N.content,onChange:w=>zn("content",w.target.value),rows:5})]}),s("div",{className:"form-row",children:g("div",{className:"form-group full-width",children:[s("label",{children:"\u8BF4\u8BDD\u89D2\u8272"}),g("div",{className:"speaker-select-wrapper",ref:Me,children:[g("div",{className:"speaker-select-input",onClick:()=>{Ze(!Z),Yt("")},children:[s("span",{className:N.speaker?"":"placeholder",children:N.speaker||"\u65C1\u767D"}),s("span",{className:"dropdown-arrow",children:"\u25BC"})]}),Z&&g("div",{className:"speaker-dropdown",children:[s("input",{type:"text",className:"speaker-search-input",placeholder:"\u641C\u7D22\u89D2\u8272...",value:Re,onChange:w=>Yt(w.target.value),autoFocus:!0}),g("div",{className:"speaker-options",children:[s("div",{className:`speaker-option ${N.speaker?"":"selected"}`,onClick:()=>{zn("speaker",""),Ze(!1)},children:"\u65C1\u767D"}),jd().map(w=>s("div",{className:`speaker-option ${N.speaker===w?"selected":""}`,onClick:()=>{zn("speaker",w),Ze(!1)},children:w},w))]})]})]})]})}),g("div",{className:"form-row",children:[g("div",{className:"form-group",children:[s("label",{children:"\u60C5\u611F"}),s("select",{value:N.tone,onChange:w=>zn("tone",w.target.value),children:dm.map(w=>s("option",{value:w.value,children:w.label},w.value))})]}),g("div",{className:"form-group",children:[g("div",{className:"label-row",children:[s("label",{children:"\u8BED\u901F"}),s("span",{className:"value-badge",children:N.speed.toFixed(2)})]}),s("input",{type:"range",min:"0.5",max:"2.0",step:"0.05",value:N.speed,onChange:w=>zn("speed",parseFloat(w.target.value))}),g("div",{className:"range-labels",children:[s("span",{children:"0.5x"}),s("span",{children:"1.0x"}),s("span",{children:"2.0x"})]})]})]}),g("div",{className:"action-buttons",children:[g("button",{className:"btn-generate",onClick:()=>Ad(rl.id),children:[s(E0,{size:16}),"\u751F\u6210\u97F3\u9891"]}),g("button",{className:"btn-delete",onClick:()=>Pd(rl.id),children:[s(tl,{size:16}),"\u5220\u9664"]})]})]}):g("div",{className:"empty-properties",children:[s(w0,{size:40}),s("p",{children:"\u9009\u62E9\u4E00\u4E2A\u6BB5\u843D\u6765\u7F16\u8F91\u5C5E\u6027"})]})]})]}),s("div",{className:"lower-section",children:g("div",{className:"timeline-panel",children:[s("div",{className:"panel-header",children:g("div",{className:"transport-controls",children:[s("button",{className:`play-btn ${B?"playing":""}`,onClick:zd,children:B?s(v0,{size:20}):s(x0,{size:20})}),g("div",{className:"time-display",children:[za(d)," / ",za(v)]})]})}),g("div",{className:"timeline-container",ref:Xt,children:[s("div",{className:"timeline-ruler",children:Array.from({length:Math.ceil(v)+1}).map((w,z)=>s("div",{className:"ruler-mark",style:{left:`${z/v*100}%`},children:g("span",{className:"ruler-label",children:[z,"s"]})},z))}),s("div",{className:"timeline-track",children:Sd.map(w=>g("div",{className:`timeline-clip ${x===w.id?"selected":""} ${Ar(w.id)?"dirty":""}`,style:{left:`${w.start/v*100}%`,width:`${(w.end-w.start)/v*100}%`,backgroundColor:nl(w.paragraph.speaker)},onClick:()=>Zt(w.id),children:[g("div",{className:"clip-content",children:[g("div",{className:"clip-speaker",children:[s(g0,{size:14}),w.paragraph.speaker||"\u65C1\u767D"]}),g("div",{className:"clip-text",children:[w.paragraph.content.slice(0,40),w.paragraph.content.length>40?"...":""]})]}),Ar(w.id)&&s("div",{className:"clip-dirty-indicator",children:s(_l,{size:10})}),w.paragraph.audioPath&&s("div",{className:"clip-indicator",children:s(y0,{size:12})})]},w.id))}),s("div",{className:"playhead",style:{left:`${d/v*100}%`}})]})]})})]}),Nr&&s("div",{className:"text-editor-modal",children:g("div",{className:"text-editor-content",children:[g("div",{className:"text-editor-header",children:[g("div",{className:"text-editor-title",children:[s(ji,{size:20}),s("h2",{children:"\u7F16\u8F91\u7AE0\u8282\u6587\u672C"})]}),s("button",{className:"modal-close",onClick:()=>Gt(!1),disabled:A,children:s(vr,{size:24})})]}),s("div",{className:"text-editor-body",children:s("textarea",{value:jt,onChange:w=>ut(w.target.value),placeholder:"\u8BF7\u8F93\u5165\u7AE0\u8282\u5185\u5BB9...",className:"chapter-textarea"})}),g("div",{className:"text-editor-footer",children:[s("button",{className:"btn-secondary",onClick:()=>{Gt(!1),n&&ut(n.content||"")},disabled:A,children:"\u53D6\u6D88"}),g("button",{className:"btn-primary",onClick:Cd,disabled:A,children:[s(bo,{size:16}),A?"\u4FDD\u5B58\u4E2D...":"\u4FDD\u5B58"]})]})]})}),s("style",{children:`
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
      `})]}):s("div",{className:"chapter-editor",children:g("div",{className:"error-container",children:[s("h2",{children:"\u7AE0\u8282\u4E0D\u5B58\u5728"}),g(jo,{to:`/project/${e}`,className:"btn-primary",children:[s(_o,{size:16}),"\u8FD4\u56DE\u9879\u76EE"]})]})})};function fm(){return s(i0,{children:s("div",{className:"app",children:g(t0,{children:[s(lo,{path:"/",element:s(q0,{})}),s(lo,{path:"/project/:id",element:s(nm,{})}),s(lo,{path:"/project/:projectId/chapter/:chapterId",element:s(pm,{})})]})})})}const hm="Frontend",qt={debug:console.debug.bind(console),info:console.info.bind(console),warn:console.warn.bind(console),error:console.error.bind(console),log:console.log.bind(console)};let Yu=!1;const mm=()=>typeof window.go<"u",In=(e,...t)=>{if(!!mm())try{const n=t.map(r=>{if(typeof r=="object")try{return JSON.stringify(r)}catch{return String(r)}return String(r)}).join(" ");H.log(e,n,hm)}catch(n){qt.debug("Failed to send log to backend:",n)}},gm=()=>{Yu||(Yu=!0,console.debug=(...e)=>{qt.debug(...e),In("debug",...e)},console.info=(...e)=>{qt.info(...e),In("info",...e)},console.warn=(...e)=>{qt.warn(...e),In("warn",...e)},console.error=(...e)=>{qt.error(...e),In("error",...e)},console.log=(...e)=>{qt.log(...e),In("info",...e)},window.addEventListener("unhandledrejection",e=>{console.error("Unhandled Promise rejection:",e.reason)}),window.addEventListener("error",e=>{console.error("Uncaught error:",e.message,"at",e.filename,":",e.lineno,":",e.colno)}),console.info("\u65E5\u5FD7\u7CFB\u7EDF\u521D\u59CB\u5316\u5B8C\u6210"))};gm();const ym=document.getElementById("root"),vm=ld(ym);vm.render(s(os.StrictMode,{children:s(fm,{})}));
