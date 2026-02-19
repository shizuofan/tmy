function Dd(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function bd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var F={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kr=Symbol.for("react.element"),Bd=Symbol.for("react.portal"),jd=Symbol.for("react.fragment"),_d=Symbol.for("react.strict_mode"),Ld=Symbol.for("react.profiler"),Td=Symbol.for("react.provider"),Md=Symbol.for("react.context"),Rd=Symbol.for("react.forward_ref"),Id=Symbol.for("react.suspense"),Od=Symbol.for("react.memo"),Ud=Symbol.for("react.lazy"),za=Symbol.iterator;function $d(e){return e===null||typeof e!="object"?null:(e=za&&e[za]||e["@@iterator"],typeof e=="function"?e:null)}var Zu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ju=Object.assign,qu={};function Sn(e,t,n){this.props=e,this.context=t,this.refs=qu,this.updater=n||Zu}Sn.prototype.isReactComponent={};Sn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Sn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function es(){}es.prototype=Sn.prototype;function Bi(e,t,n){this.props=e,this.context=t,this.refs=qu,this.updater=n||Zu}var ji=Bi.prototype=new es;ji.constructor=Bi;Ju(ji,Sn.prototype);ji.isPureReactComponent=!0;var Da=Array.isArray,ts=Object.prototype.hasOwnProperty,_i={current:null},ns={key:!0,ref:!0,__self:!0,__source:!0};function rs(e,t,n){var r,o={},l=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)ts.call(t,r)&&!ns.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:kr,type:e,key:l,ref:i,props:o,_owner:_i.current}}function Vd(e,t){return{$$typeof:kr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Li(e){return typeof e=="object"&&e!==null&&e.$$typeof===kr}function Wd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ba=/\/+/g;function rl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Wd(""+e.key):t.toString(36)}function Qr(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case kr:case Bd:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+rl(i,0):r,Da(o)?(n="",e!=null&&(n=e.replace(ba,"$&/")+"/"),Qr(o,t,n,"",function(c){return c})):o!=null&&(Li(o)&&(o=Vd(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(ba,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",Da(e))for(var a=0;a<e.length;a++){l=e[a];var u=r+rl(l,a);i+=Qr(l,t,n,u,o)}else if(u=$d(e),typeof u=="function")for(e=u.call(e),a=0;!(l=e.next()).done;)l=l.value,u=r+rl(l,a++),i+=Qr(l,t,n,u,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Dr(e,t,n){if(e==null)return e;var r=[],o=0;return Qr(e,r,"","",function(l){return t.call(n,l,o++)}),r}function Hd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ve={current:null},Gr={transition:null},Kd={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:Gr,ReactCurrentOwner:_i};function os(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:Dr,forEach:function(e,t,n){Dr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Dr(e,function(){t++}),t},toArray:function(e){return Dr(e,function(t){return t})||[]},only:function(e){if(!Li(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=Sn;M.Fragment=jd;M.Profiler=Ld;M.PureComponent=Bi;M.StrictMode=_d;M.Suspense=Id;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kd;M.act=os;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ju({},e.props),o=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=_i.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)ts.call(t,u)&&!ns.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:kr,type:e.type,key:o,ref:l,props:r,_owner:i}};M.createContext=function(e){return e={$$typeof:Md,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Td,_context:e},e.Consumer=e};M.createElement=rs;M.createFactory=function(e){var t=rs.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:Rd,render:e}};M.isValidElement=Li;M.lazy=function(e){return{$$typeof:Ud,_payload:{_status:-1,_result:e},_init:Hd}};M.memo=function(e,t){return{$$typeof:Od,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=Gr.transition;Gr.transition={};try{e()}finally{Gr.transition=t}};M.unstable_act=os;M.useCallback=function(e,t){return ve.current.useCallback(e,t)};M.useContext=function(e){return ve.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return ve.current.useDeferredValue(e)};M.useEffect=function(e,t){return ve.current.useEffect(e,t)};M.useId=function(){return ve.current.useId()};M.useImperativeHandle=function(e,t,n){return ve.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return ve.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return ve.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return ve.current.useMemo(e,t)};M.useReducer=function(e,t,n){return ve.current.useReducer(e,t,n)};M.useRef=function(e){return ve.current.useRef(e)};M.useState=function(e){return ve.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return ve.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return ve.current.useTransition()};M.version="18.3.1";(function(e){e.exports=M})(F);const ls=bd(F.exports),jl=Dd({__proto__:null,default:ls},[F.exports]);var is={exports:{}},De={},as={exports:{}},us={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,_){var L=z.length;z.push(_);e:for(;0<L;){var Q=L-1>>>1,ee=z[Q];if(0<o(ee,_))z[Q]=_,z[L]=ee,L=Q;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var _=z[0],L=z.pop();if(L!==_){z[0]=L;e:for(var Q=0,ee=z.length,Xt=ee>>>1;Q<Xt;){var Re=2*(Q+1)-1,Pr=z[Re],Je=Re+1,Ke=z[Je];if(0>o(Pr,L))Je<ee&&0>o(Ke,Pr)?(z[Q]=Ke,z[Je]=L,Q=Je):(z[Q]=Pr,z[Re]=L,Q=Re);else if(Je<ee&&0>o(Ke,L))z[Q]=Ke,z[Je]=L,Q=Je;else break e}}return _}function o(z,_){var L=z.sortIndex-_.sortIndex;return L!==0?L:z.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var u=[],c=[],g=1,y=null,m=3,x=!1,k=!1,w=!1,b=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(z){for(var _=n(c);_!==null;){if(_.callback===null)r(c);else if(_.startTime<=z)r(c),_.sortIndex=_.expirationTime,t(u,_);else break;_=n(c)}}function v(z){if(w=!1,f(z),!k)if(n(u)!==null)k=!0,st(S);else{var _=n(c);_!==null&&Yt(v,_.startTime-z)}}function S(z,_){k=!1,w&&(w=!1,p(B),B=-1),x=!0;var L=m;try{for(f(_),y=n(u);y!==null&&(!(y.expirationTime>_)||z&&!N());){var Q=y.callback;if(typeof Q=="function"){y.callback=null,m=y.priorityLevel;var ee=Q(y.expirationTime<=_);_=e.unstable_now(),typeof ee=="function"?y.callback=ee:y===n(u)&&r(u),f(_)}else r(u);y=n(u)}if(y!==null)var Xt=!0;else{var Re=n(c);Re!==null&&Yt(v,Re.startTime-_),Xt=!1}return Xt}finally{y=null,m=L,x=!1}}var A=!1,P=null,B=-1,I=5,T=-1;function N(){return!(e.unstable_now()-T<I)}function Z(){if(P!==null){var z=e.unstable_now();T=z;var _=!0;try{_=P(!0,z)}finally{_?we():(A=!1,P=null)}}else A=!1}var we;if(typeof d=="function")we=function(){d(Z)};else if(typeof MessageChannel<"u"){var Qt=new MessageChannel,Gt=Qt.port2;Qt.port1.onmessage=Z,we=function(){Gt.postMessage(null)}}else we=function(){b(Z,0)};function st(z){P=z,A||(A=!0,we())}function Yt(z,_){B=b(function(){z(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){k||x||(k=!0,st(S))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(z){switch(m){case 1:case 2:case 3:var _=3;break;default:_=m}var L=m;m=_;try{return z()}finally{m=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,_){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var L=m;m=z;try{return _()}finally{m=L}},e.unstable_scheduleCallback=function(z,_,L){var Q=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?Q+L:Q):L=Q,z){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=L+ee,z={id:g++,callback:_,priorityLevel:z,startTime:L,expirationTime:ee,sortIndex:-1},L>Q?(z.sortIndex=L,t(c,z),n(u)===null&&z===n(c)&&(w?(p(B),B=-1):w=!0,Yt(v,L-Q))):(z.sortIndex=ee,t(u,z),k||x||(k=!0,st(S))),z},e.unstable_shouldYield=N,e.unstable_wrapCallback=function(z){var _=m;return function(){var L=m;m=_;try{return z.apply(this,arguments)}finally{m=L}}}})(us);(function(e){e.exports=us})(as);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qd=F.exports,ze=as.exports;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ss=new Set,qn={};function Wt(e,t){vn(e,t),vn(e+"Capture",t)}function vn(e,t){for(qn[e]=t,e=0;e<t.length;e++)ss.add(t[e])}var ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_l=Object.prototype.hasOwnProperty,Gd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ba={},ja={};function Yd(e){return _l.call(ja,e)?!0:_l.call(Ba,e)?!1:Gd.test(e)?ja[e]=!0:(Ba[e]=!0,!1)}function Xd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Zd(e,t,n,r){if(t===null||typeof t>"u"||Xd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function xe(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ce[t]=new xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ti=/[\-:]([a-z])/g;function Mi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ti,Mi);ce[t]=new xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ti,Mi);ce[t]=new xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ti,Mi);ce[t]=new xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new xe(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ri(e,t,n,r){var o=ce.hasOwnProperty(t)?ce[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Zd(t,n,o,r)&&(n=null),r||o===null?Yd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ut=Qd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,br=Symbol.for("react.element"),qt=Symbol.for("react.portal"),en=Symbol.for("react.fragment"),Ii=Symbol.for("react.strict_mode"),Ll=Symbol.for("react.profiler"),cs=Symbol.for("react.provider"),ds=Symbol.for("react.context"),Oi=Symbol.for("react.forward_ref"),Tl=Symbol.for("react.suspense"),Ml=Symbol.for("react.suspense_list"),Ui=Symbol.for("react.memo"),dt=Symbol.for("react.lazy"),ps=Symbol.for("react.offscreen"),_a=Symbol.iterator;function bn(e){return e===null||typeof e!="object"?null:(e=_a&&e[_a]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,ol;function On(e){if(ol===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ol=t&&t[1]||""}return`
`+ol+e}var ll=!1;function il(e,t){if(!e||ll)return"";ll=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,a=l.length-1;1<=i&&0<=a&&o[i]!==l[a];)a--;for(;1<=i&&0<=a;i--,a--)if(o[i]!==l[a]){if(i!==1||a!==1)do if(i--,a--,0>a||o[i]!==l[a]){var u=`
`+o[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=a);break}}}finally{ll=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?On(e):""}function Jd(e){switch(e.tag){case 5:return On(e.type);case 16:return On("Lazy");case 13:return On("Suspense");case 19:return On("SuspenseList");case 0:case 2:case 15:return e=il(e.type,!1),e;case 11:return e=il(e.type.render,!1),e;case 1:return e=il(e.type,!0),e;default:return""}}function Rl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case en:return"Fragment";case qt:return"Portal";case Ll:return"Profiler";case Ii:return"StrictMode";case Tl:return"Suspense";case Ml:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ds:return(e.displayName||"Context")+".Consumer";case cs:return(e._context.displayName||"Context")+".Provider";case Oi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ui:return t=e.displayName||null,t!==null?t:Rl(e.type)||"Memo";case dt:t=e._payload,e=e._init;try{return Rl(e(t))}catch{}}return null}function qd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Rl(t);case 8:return t===Ii?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function At(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ep(e){var t=fs(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Br(e){e._valueTracker||(e._valueTracker=ep(e))}function hs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=fs(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function io(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Il(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function La(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=At(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ms(e,t){t=t.checked,t!=null&&Ri(e,"checked",t,!1)}function Ol(e,t){ms(e,t);var n=At(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ul(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ul(e,t.type,At(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ta(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ul(e,t,n){(t!=="number"||io(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Un=Array.isArray;function pn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+At(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function $l(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ma(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(Un(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:At(n)}}function gs(e,t){var n=At(t.value),r=At(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ra(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ys(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ys(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var jr,vs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(jr=jr||document.createElement("div"),jr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=jr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function er(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Wn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tp=["Webkit","ms","Moz","O"];Object.keys(Wn).forEach(function(e){tp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Wn[t]=Wn[e]})});function xs(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Wn.hasOwnProperty(e)&&Wn[e]?(""+t).trim():t+"px"}function ws(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=xs(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var np=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wl(e,t){if(t){if(np[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function Hl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kl=null;function $i(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ql=null,fn=null,hn=null;function Ia(e){if(e=Fr(e)){if(typeof Ql!="function")throw Error(C(280));var t=e.stateNode;t&&(t=Io(t),Ql(e.stateNode,e.type,t))}}function ks(e){fn?hn?hn.push(e):hn=[e]:fn=e}function Es(){if(fn){var e=fn,t=hn;if(hn=fn=null,Ia(e),t)for(e=0;e<t.length;e++)Ia(t[e])}}function Cs(e,t){return e(t)}function Fs(){}var al=!1;function Ss(e,t,n){if(al)return e(t,n);al=!0;try{return Cs(e,t,n)}finally{al=!1,(fn!==null||hn!==null)&&(Fs(),Es())}}function tr(e,t){var n=e.stateNode;if(n===null)return null;var r=Io(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var Gl=!1;if(ot)try{var Bn={};Object.defineProperty(Bn,"passive",{get:function(){Gl=!0}}),window.addEventListener("test",Bn,Bn),window.removeEventListener("test",Bn,Bn)}catch{Gl=!1}function rp(e,t,n,r,o,l,i,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(g){this.onError(g)}}var Hn=!1,ao=null,uo=!1,Yl=null,op={onError:function(e){Hn=!0,ao=e}};function lp(e,t,n,r,o,l,i,a,u){Hn=!1,ao=null,rp.apply(op,arguments)}function ip(e,t,n,r,o,l,i,a,u){if(lp.apply(this,arguments),Hn){if(Hn){var c=ao;Hn=!1,ao=null}else throw Error(C(198));uo||(uo=!0,Yl=c)}}function Ht(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ns(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Oa(e){if(Ht(e)!==e)throw Error(C(188))}function ap(e){var t=e.alternate;if(!t){if(t=Ht(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return Oa(o),e;if(l===r)return Oa(o),t;l=l.sibling}throw Error(C(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,a=o.child;a;){if(a===n){i=!0,n=o,r=l;break}if(a===r){i=!0,r=o,n=l;break}a=a.sibling}if(!i){for(a=l.child;a;){if(a===n){i=!0,n=l,r=o;break}if(a===r){i=!0,r=l,n=o;break}a=a.sibling}if(!i)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function As(e){return e=ap(e),e!==null?Ps(e):null}function Ps(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ps(e);if(t!==null)return t;e=e.sibling}return null}var zs=ze.unstable_scheduleCallback,Ua=ze.unstable_cancelCallback,up=ze.unstable_shouldYield,sp=ze.unstable_requestPaint,q=ze.unstable_now,cp=ze.unstable_getCurrentPriorityLevel,Vi=ze.unstable_ImmediatePriority,Ds=ze.unstable_UserBlockingPriority,so=ze.unstable_NormalPriority,dp=ze.unstable_LowPriority,bs=ze.unstable_IdlePriority,Lo=null,Xe=null;function pp(e){if(Xe&&typeof Xe.onCommitFiberRoot=="function")try{Xe.onCommitFiberRoot(Lo,e,void 0,(e.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:mp,fp=Math.log,hp=Math.LN2;function mp(e){return e>>>=0,e===0?32:31-(fp(e)/hp|0)|0}var _r=64,Lr=4194304;function $n(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function co(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~o;a!==0?r=$n(a):(l&=i,l!==0&&(r=$n(l)))}else i=n&~o,i!==0?r=$n(i):l!==0&&(r=$n(l));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ve(t),o=1<<n,r|=e[n],t&=~o;return r}function gp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-Ve(l),a=1<<i,u=o[i];u===-1?((a&n)===0||(a&r)!==0)&&(o[i]=gp(a,t)):u<=t&&(e.expiredLanes|=a),l&=~a}}function Xl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Bs(){var e=_r;return _r<<=1,(_r&4194240)===0&&(_r=64),e}function ul(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Er(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ve(t),e[t]=n}function vp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Ve(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function Wi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ve(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var O=0;function js(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var _s,Hi,Ls,Ts,Ms,Zl=!1,Tr=[],vt=null,xt=null,wt=null,nr=new Map,rr=new Map,ft=[],xp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $a(e,t){switch(e){case"focusin":case"focusout":vt=null;break;case"dragenter":case"dragleave":xt=null;break;case"mouseover":case"mouseout":wt=null;break;case"pointerover":case"pointerout":nr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":rr.delete(t.pointerId)}}function jn(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=Fr(t),t!==null&&Hi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function wp(e,t,n,r,o){switch(t){case"focusin":return vt=jn(vt,e,t,n,r,o),!0;case"dragenter":return xt=jn(xt,e,t,n,r,o),!0;case"mouseover":return wt=jn(wt,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return nr.set(l,jn(nr.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,rr.set(l,jn(rr.get(l)||null,e,t,n,r,o)),!0}return!1}function Rs(e){var t=_t(e.target);if(t!==null){var n=Ht(t);if(n!==null){if(t=n.tag,t===13){if(t=Ns(n),t!==null){e.blockedOn=t,Ms(e.priority,function(){Ls(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Jl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Kl=r,n.target.dispatchEvent(r),Kl=null}else return t=Fr(n),t!==null&&Hi(t),e.blockedOn=n,!1;t.shift()}return!0}function Va(e,t,n){Yr(e)&&n.delete(t)}function kp(){Zl=!1,vt!==null&&Yr(vt)&&(vt=null),xt!==null&&Yr(xt)&&(xt=null),wt!==null&&Yr(wt)&&(wt=null),nr.forEach(Va),rr.forEach(Va)}function _n(e,t){e.blockedOn===t&&(e.blockedOn=null,Zl||(Zl=!0,ze.unstable_scheduleCallback(ze.unstable_NormalPriority,kp)))}function or(e){function t(o){return _n(o,e)}if(0<Tr.length){_n(Tr[0],e);for(var n=1;n<Tr.length;n++){var r=Tr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(vt!==null&&_n(vt,e),xt!==null&&_n(xt,e),wt!==null&&_n(wt,e),nr.forEach(t),rr.forEach(t),n=0;n<ft.length;n++)r=ft[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ft.length&&(n=ft[0],n.blockedOn===null);)Rs(n),n.blockedOn===null&&ft.shift()}var mn=ut.ReactCurrentBatchConfig,po=!0;function Ep(e,t,n,r){var o=O,l=mn.transition;mn.transition=null;try{O=1,Ki(e,t,n,r)}finally{O=o,mn.transition=l}}function Cp(e,t,n,r){var o=O,l=mn.transition;mn.transition=null;try{O=4,Ki(e,t,n,r)}finally{O=o,mn.transition=l}}function Ki(e,t,n,r){if(po){var o=Jl(e,t,n,r);if(o===null)vl(e,t,r,fo,n),$a(e,r);else if(wp(o,e,t,n,r))r.stopPropagation();else if($a(e,r),t&4&&-1<xp.indexOf(e)){for(;o!==null;){var l=Fr(o);if(l!==null&&_s(l),l=Jl(e,t,n,r),l===null&&vl(e,t,r,fo,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else vl(e,t,r,null,n)}}var fo=null;function Jl(e,t,n,r){if(fo=null,e=$i(r),e=_t(e),e!==null)if(t=Ht(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ns(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return fo=e,null}function Is(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cp()){case Vi:return 1;case Ds:return 4;case so:case dp:return 16;case bs:return 536870912;default:return 16}default:return 16}}var mt=null,Qi=null,Xr=null;function Os(){if(Xr)return Xr;var e,t=Qi,n=t.length,r,o="value"in mt?mt.value:mt.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return Xr=o.slice(e,1<r?1-r:void 0)}function Zr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Mr(){return!0}function Wa(){return!1}function be(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Mr:Wa,this.isPropagationStopped=Wa,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Mr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Mr)},persist:function(){},isPersistent:Mr}),t}var Nn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gi=be(Nn),Cr=X({},Nn,{view:0,detail:0}),Fp=be(Cr),sl,cl,Ln,To=X({},Cr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ln&&(Ln&&e.type==="mousemove"?(sl=e.screenX-Ln.screenX,cl=e.screenY-Ln.screenY):cl=sl=0,Ln=e),sl)},movementY:function(e){return"movementY"in e?e.movementY:cl}}),Ha=be(To),Sp=X({},To,{dataTransfer:0}),Np=be(Sp),Ap=X({},Cr,{relatedTarget:0}),dl=be(Ap),Pp=X({},Nn,{animationName:0,elapsedTime:0,pseudoElement:0}),zp=be(Pp),Dp=X({},Nn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bp=be(Dp),Bp=X({},Nn,{data:0}),Ka=be(Bp),jp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_p={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Lp[e])?!!t[e]:!1}function Yi(){return Tp}var Mp=X({},Cr,{key:function(e){if(e.key){var t=jp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Zr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_p[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yi,charCode:function(e){return e.type==="keypress"?Zr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Rp=be(Mp),Ip=X({},To,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qa=be(Ip),Op=X({},Cr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yi}),Up=be(Op),$p=X({},Nn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vp=be($p),Wp=X({},To,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hp=be(Wp),Kp=[9,13,27,32],Xi=ot&&"CompositionEvent"in window,Kn=null;ot&&"documentMode"in document&&(Kn=document.documentMode);var Qp=ot&&"TextEvent"in window&&!Kn,Us=ot&&(!Xi||Kn&&8<Kn&&11>=Kn),Ga=String.fromCharCode(32),Ya=!1;function $s(e,t){switch(e){case"keyup":return Kp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var tn=!1;function Gp(e,t){switch(e){case"compositionend":return Vs(t);case"keypress":return t.which!==32?null:(Ya=!0,Ga);case"textInput":return e=t.data,e===Ga&&Ya?null:e;default:return null}}function Yp(e,t){if(tn)return e==="compositionend"||!Xi&&$s(e,t)?(e=Os(),Xr=Qi=mt=null,tn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Us&&t.locale!=="ko"?null:t.data;default:return null}}var Xp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Xp[e.type]:t==="textarea"}function Ws(e,t,n,r){ks(r),t=ho(t,"onChange"),0<t.length&&(n=new Gi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Qn=null,lr=null;function Zp(e){tc(e,0)}function Mo(e){var t=on(e);if(hs(t))return e}function Jp(e,t){if(e==="change")return t}var Hs=!1;if(ot){var pl;if(ot){var fl="oninput"in document;if(!fl){var Za=document.createElement("div");Za.setAttribute("oninput","return;"),fl=typeof Za.oninput=="function"}pl=fl}else pl=!1;Hs=pl&&(!document.documentMode||9<document.documentMode)}function Ja(){Qn&&(Qn.detachEvent("onpropertychange",Ks),lr=Qn=null)}function Ks(e){if(e.propertyName==="value"&&Mo(lr)){var t=[];Ws(t,lr,e,$i(e)),Ss(Zp,t)}}function qp(e,t,n){e==="focusin"?(Ja(),Qn=t,lr=n,Qn.attachEvent("onpropertychange",Ks)):e==="focusout"&&Ja()}function ef(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Mo(lr)}function tf(e,t){if(e==="click")return Mo(t)}function nf(e,t){if(e==="input"||e==="change")return Mo(t)}function rf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var He=typeof Object.is=="function"?Object.is:rf;function ir(e,t){if(He(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!_l.call(t,o)||!He(e[o],t[o]))return!1}return!0}function qa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function eu(e,t){var n=qa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qa(n)}}function Qs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Qs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gs(){for(var e=window,t=io();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=io(e.document)}return t}function Zi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function of(e){var t=Gs(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Qs(n.ownerDocument.documentElement,n)){if(r!==null&&Zi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=eu(n,l);var i=eu(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var lf=ot&&"documentMode"in document&&11>=document.documentMode,nn=null,ql=null,Gn=null,ei=!1;function tu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ei||nn==null||nn!==io(r)||(r=nn,"selectionStart"in r&&Zi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gn&&ir(Gn,r)||(Gn=r,r=ho(ql,"onSelect"),0<r.length&&(t=new Gi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=nn)))}function Rr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var rn={animationend:Rr("Animation","AnimationEnd"),animationiteration:Rr("Animation","AnimationIteration"),animationstart:Rr("Animation","AnimationStart"),transitionend:Rr("Transition","TransitionEnd")},hl={},Ys={};ot&&(Ys=document.createElement("div").style,"AnimationEvent"in window||(delete rn.animationend.animation,delete rn.animationiteration.animation,delete rn.animationstart.animation),"TransitionEvent"in window||delete rn.transitionend.transition);function Ro(e){if(hl[e])return hl[e];if(!rn[e])return e;var t=rn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ys)return hl[e]=t[n];return e}var Xs=Ro("animationend"),Zs=Ro("animationiteration"),Js=Ro("animationstart"),qs=Ro("transitionend"),ec=new Map,nu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zt(e,t){ec.set(e,t),Wt(t,[e])}for(var ml=0;ml<nu.length;ml++){var gl=nu[ml],af=gl.toLowerCase(),uf=gl[0].toUpperCase()+gl.slice(1);zt(af,"on"+uf)}zt(Xs,"onAnimationEnd");zt(Zs,"onAnimationIteration");zt(Js,"onAnimationStart");zt("dblclick","onDoubleClick");zt("focusin","onFocus");zt("focusout","onBlur");zt(qs,"onTransitionEnd");vn("onMouseEnter",["mouseout","mouseover"]);vn("onMouseLeave",["mouseout","mouseover"]);vn("onPointerEnter",["pointerout","pointerover"]);vn("onPointerLeave",["pointerout","pointerover"]);Wt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vn));function ru(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ip(r,t,void 0,e),e.currentTarget=null}function tc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var a=r[i],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==l&&o.isPropagationStopped())break e;ru(o,a,c),l=u}else for(i=0;i<r.length;i++){if(a=r[i],u=a.instance,c=a.currentTarget,a=a.listener,u!==l&&o.isPropagationStopped())break e;ru(o,a,c),l=u}}}if(uo)throw e=Yl,uo=!1,Yl=null,e}function V(e,t){var n=t[li];n===void 0&&(n=t[li]=new Set);var r=e+"__bubble";n.has(r)||(nc(t,e,2,!1),n.add(r))}function yl(e,t,n){var r=0;t&&(r|=4),nc(n,e,r,t)}var Ir="_reactListening"+Math.random().toString(36).slice(2);function ar(e){if(!e[Ir]){e[Ir]=!0,ss.forEach(function(n){n!=="selectionchange"&&(sf.has(n)||yl(n,!1,e),yl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ir]||(t[Ir]=!0,yl("selectionchange",!1,t))}}function nc(e,t,n,r){switch(Is(t)){case 1:var o=Ep;break;case 4:o=Cp;break;default:o=Ki}n=o.bind(null,t,n,e),o=void 0,!Gl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function vl(e,t,n,r,o){var l=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var u=i.tag;if((u===3||u===4)&&(u=i.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;i=i.return}for(;a!==null;){if(i=_t(a),i===null)return;if(u=i.tag,u===5||u===6){r=l=i;continue e}a=a.parentNode}}r=r.return}Ss(function(){var c=l,g=$i(n),y=[];e:{var m=ec.get(e);if(m!==void 0){var x=Gi,k=e;switch(e){case"keypress":if(Zr(n)===0)break e;case"keydown":case"keyup":x=Rp;break;case"focusin":k="focus",x=dl;break;case"focusout":k="blur",x=dl;break;case"beforeblur":case"afterblur":x=dl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Ha;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Np;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Up;break;case Xs:case Zs:case Js:x=zp;break;case qs:x=Vp;break;case"scroll":x=Fp;break;case"wheel":x=Hp;break;case"copy":case"cut":case"paste":x=bp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Qa}var w=(t&4)!==0,b=!w&&e==="scroll",p=w?m!==null?m+"Capture":null:m;w=[];for(var d=c,f;d!==null;){f=d;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,p!==null&&(v=tr(d,p),v!=null&&w.push(ur(d,v,f)))),b)break;d=d.return}0<w.length&&(m=new x(m,k,null,n,g),y.push({event:m,listeners:w}))}}if((t&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&n!==Kl&&(k=n.relatedTarget||n.fromElement)&&(_t(k)||k[lt]))break e;if((x||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,x?(k=n.relatedTarget||n.toElement,x=c,k=k?_t(k):null,k!==null&&(b=Ht(k),k!==b||k.tag!==5&&k.tag!==6)&&(k=null)):(x=null,k=c),x!==k)){if(w=Ha,v="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=Qa,v="onPointerLeave",p="onPointerEnter",d="pointer"),b=x==null?m:on(x),f=k==null?m:on(k),m=new w(v,d+"leave",x,n,g),m.target=b,m.relatedTarget=f,v=null,_t(g)===c&&(w=new w(p,d+"enter",k,n,g),w.target=f,w.relatedTarget=b,v=w),b=v,x&&k)t:{for(w=x,p=k,d=0,f=w;f;f=Zt(f))d++;for(f=0,v=p;v;v=Zt(v))f++;for(;0<d-f;)w=Zt(w),d--;for(;0<f-d;)p=Zt(p),f--;for(;d--;){if(w===p||p!==null&&w===p.alternate)break t;w=Zt(w),p=Zt(p)}w=null}else w=null;x!==null&&ou(y,m,x,w,!1),k!==null&&b!==null&&ou(y,b,k,w,!0)}}e:{if(m=c?on(c):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var S=Jp;else if(Xa(m))if(Hs)S=nf;else{S=ef;var A=qp}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=tf);if(S&&(S=S(e,c))){Ws(y,S,n,g);break e}A&&A(e,m,c),e==="focusout"&&(A=m._wrapperState)&&A.controlled&&m.type==="number"&&Ul(m,"number",m.value)}switch(A=c?on(c):window,e){case"focusin":(Xa(A)||A.contentEditable==="true")&&(nn=A,ql=c,Gn=null);break;case"focusout":Gn=ql=nn=null;break;case"mousedown":ei=!0;break;case"contextmenu":case"mouseup":case"dragend":ei=!1,tu(y,n,g);break;case"selectionchange":if(lf)break;case"keydown":case"keyup":tu(y,n,g)}var P;if(Xi)e:{switch(e){case"compositionstart":var B="onCompositionStart";break e;case"compositionend":B="onCompositionEnd";break e;case"compositionupdate":B="onCompositionUpdate";break e}B=void 0}else tn?$s(e,n)&&(B="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(B="onCompositionStart");B&&(Us&&n.locale!=="ko"&&(tn||B!=="onCompositionStart"?B==="onCompositionEnd"&&tn&&(P=Os()):(mt=g,Qi="value"in mt?mt.value:mt.textContent,tn=!0)),A=ho(c,B),0<A.length&&(B=new Ka(B,e,null,n,g),y.push({event:B,listeners:A}),P?B.data=P:(P=Vs(n),P!==null&&(B.data=P)))),(P=Qp?Gp(e,n):Yp(e,n))&&(c=ho(c,"onBeforeInput"),0<c.length&&(g=new Ka("onBeforeInput","beforeinput",null,n,g),y.push({event:g,listeners:c}),g.data=P))}tc(y,t)})}function ur(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ho(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=tr(e,n),l!=null&&r.unshift(ur(e,l,o)),l=tr(e,t),l!=null&&r.push(ur(e,l,o))),e=e.return}return r}function Zt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ou(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,o?(u=tr(n,l),u!=null&&i.unshift(ur(n,u,a))):o||(u=tr(n,l),u!=null&&i.push(ur(n,u,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var cf=/\r\n?/g,df=/\u0000|\uFFFD/g;function lu(e){return(typeof e=="string"?e:""+e).replace(cf,`
`).replace(df,"")}function Or(e,t,n){if(t=lu(t),lu(e)!==t&&n)throw Error(C(425))}function mo(){}var ti=null,ni=null;function ri(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var oi=typeof setTimeout=="function"?setTimeout:void 0,pf=typeof clearTimeout=="function"?clearTimeout:void 0,iu=typeof Promise=="function"?Promise:void 0,ff=typeof queueMicrotask=="function"?queueMicrotask:typeof iu<"u"?function(e){return iu.resolve(null).then(e).catch(hf)}:oi;function hf(e){setTimeout(function(){throw e})}function xl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),or(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);or(t)}function kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function au(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var An=Math.random().toString(36).slice(2),Ye="__reactFiber$"+An,sr="__reactProps$"+An,lt="__reactContainer$"+An,li="__reactEvents$"+An,mf="__reactListeners$"+An,gf="__reactHandles$"+An;function _t(e){var t=e[Ye];if(t)return t;for(var n=e.parentNode;n;){if(t=n[lt]||n[Ye]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=au(e);e!==null;){if(n=e[Ye])return n;e=au(e)}return t}e=n,n=e.parentNode}return null}function Fr(e){return e=e[Ye]||e[lt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function on(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Io(e){return e[sr]||null}var ii=[],ln=-1;function Dt(e){return{current:e}}function H(e){0>ln||(e.current=ii[ln],ii[ln]=null,ln--)}function $(e,t){ln++,ii[ln]=e.current,e.current=t}var Pt={},me=Dt(Pt),Ce=Dt(!1),It=Pt;function xn(e,t){var n=e.type.contextTypes;if(!n)return Pt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Fe(e){return e=e.childContextTypes,e!=null}function go(){H(Ce),H(me)}function uu(e,t,n){if(me.current!==Pt)throw Error(C(168));$(me,t),$(Ce,n)}function rc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(C(108,qd(e)||"Unknown",o));return X({},n,r)}function yo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pt,It=me.current,$(me,e),$(Ce,Ce.current),!0}function su(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=rc(e,t,It),r.__reactInternalMemoizedMergedChildContext=e,H(Ce),H(me),$(me,e)):H(Ce),$(Ce,n)}var et=null,Oo=!1,wl=!1;function oc(e){et===null?et=[e]:et.push(e)}function yf(e){Oo=!0,oc(e)}function bt(){if(!wl&&et!==null){wl=!0;var e=0,t=O;try{var n=et;for(O=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}et=null,Oo=!1}catch(o){throw et!==null&&(et=et.slice(e+1)),zs(Vi,bt),o}finally{O=t,wl=!1}}return null}var an=[],un=0,vo=null,xo=0,Be=[],je=0,Ot=null,tt=1,nt="";function Bt(e,t){an[un++]=xo,an[un++]=vo,vo=e,xo=t}function lc(e,t,n){Be[je++]=tt,Be[je++]=nt,Be[je++]=Ot,Ot=e;var r=tt;e=nt;var o=32-Ve(r)-1;r&=~(1<<o),n+=1;var l=32-Ve(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,tt=1<<32-Ve(t)+o|n<<o|r,nt=l+e}else tt=1<<l|n<<o|r,nt=e}function Ji(e){e.return!==null&&(Bt(e,1),lc(e,1,0))}function qi(e){for(;e===vo;)vo=an[--un],an[un]=null,xo=an[--un],an[un]=null;for(;e===Ot;)Ot=Be[--je],Be[je]=null,nt=Be[--je],Be[je]=null,tt=Be[--je],Be[je]=null}var Pe=null,Ae=null,K=!1,$e=null;function ic(e,t){var n=_e(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function cu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Pe=e,Ae=kt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Pe=e,Ae=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ot!==null?{id:tt,overflow:nt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=_e(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Pe=e,Ae=null,!0):!1;default:return!1}}function ai(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ui(e){if(K){var t=Ae;if(t){var n=t;if(!cu(e,t)){if(ai(e))throw Error(C(418));t=kt(n.nextSibling);var r=Pe;t&&cu(e,t)?ic(r,n):(e.flags=e.flags&-4097|2,K=!1,Pe=e)}}else{if(ai(e))throw Error(C(418));e.flags=e.flags&-4097|2,K=!1,Pe=e}}}function du(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Pe=e}function Ur(e){if(e!==Pe)return!1;if(!K)return du(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ri(e.type,e.memoizedProps)),t&&(t=Ae)){if(ai(e))throw ac(),Error(C(418));for(;t;)ic(e,t),t=kt(t.nextSibling)}if(du(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ae=kt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ae=null}}else Ae=Pe?kt(e.stateNode.nextSibling):null;return!0}function ac(){for(var e=Ae;e;)e=kt(e.nextSibling)}function wn(){Ae=Pe=null,K=!1}function ea(e){$e===null?$e=[e]:$e.push(e)}var vf=ut.ReactCurrentBatchConfig;function Tn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var a=o.refs;i===null?delete a[l]:a[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function $r(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function pu(e){var t=e._init;return t(e._payload)}function uc(e){function t(p,d){if(e){var f=p.deletions;f===null?(p.deletions=[d],p.flags|=16):f.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function o(p,d){return p=St(p,d),p.index=0,p.sibling=null,p}function l(p,d,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<d?(p.flags|=2,d):f):(p.flags|=2,d)):(p.flags|=1048576,d)}function i(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,d,f,v){return d===null||d.tag!==6?(d=Al(f,p.mode,v),d.return=p,d):(d=o(d,f),d.return=p,d)}function u(p,d,f,v){var S=f.type;return S===en?g(p,d,f.props.children,v,f.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===dt&&pu(S)===d.type)?(v=o(d,f.props),v.ref=Tn(p,d,f),v.return=p,v):(v=oo(f.type,f.key,f.props,null,p.mode,v),v.ref=Tn(p,d,f),v.return=p,v)}function c(p,d,f,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==f.containerInfo||d.stateNode.implementation!==f.implementation?(d=Pl(f,p.mode,v),d.return=p,d):(d=o(d,f.children||[]),d.return=p,d)}function g(p,d,f,v,S){return d===null||d.tag!==7?(d=Rt(f,p.mode,v,S),d.return=p,d):(d=o(d,f),d.return=p,d)}function y(p,d,f){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Al(""+d,p.mode,f),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case br:return f=oo(d.type,d.key,d.props,null,p.mode,f),f.ref=Tn(p,null,d),f.return=p,f;case qt:return d=Pl(d,p.mode,f),d.return=p,d;case dt:var v=d._init;return y(p,v(d._payload),f)}if(Un(d)||bn(d))return d=Rt(d,p.mode,f,null),d.return=p,d;$r(p,d)}return null}function m(p,d,f,v){var S=d!==null?d.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return S!==null?null:a(p,d,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case br:return f.key===S?u(p,d,f,v):null;case qt:return f.key===S?c(p,d,f,v):null;case dt:return S=f._init,m(p,d,S(f._payload),v)}if(Un(f)||bn(f))return S!==null?null:g(p,d,f,v,null);$r(p,f)}return null}function x(p,d,f,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(f)||null,a(d,p,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case br:return p=p.get(v.key===null?f:v.key)||null,u(d,p,v,S);case qt:return p=p.get(v.key===null?f:v.key)||null,c(d,p,v,S);case dt:var A=v._init;return x(p,d,f,A(v._payload),S)}if(Un(v)||bn(v))return p=p.get(f)||null,g(d,p,v,S,null);$r(d,v)}return null}function k(p,d,f,v){for(var S=null,A=null,P=d,B=d=0,I=null;P!==null&&B<f.length;B++){P.index>B?(I=P,P=null):I=P.sibling;var T=m(p,P,f[B],v);if(T===null){P===null&&(P=I);break}e&&P&&T.alternate===null&&t(p,P),d=l(T,d,B),A===null?S=T:A.sibling=T,A=T,P=I}if(B===f.length)return n(p,P),K&&Bt(p,B),S;if(P===null){for(;B<f.length;B++)P=y(p,f[B],v),P!==null&&(d=l(P,d,B),A===null?S=P:A.sibling=P,A=P);return K&&Bt(p,B),S}for(P=r(p,P);B<f.length;B++)I=x(P,p,B,f[B],v),I!==null&&(e&&I.alternate!==null&&P.delete(I.key===null?B:I.key),d=l(I,d,B),A===null?S=I:A.sibling=I,A=I);return e&&P.forEach(function(N){return t(p,N)}),K&&Bt(p,B),S}function w(p,d,f,v){var S=bn(f);if(typeof S!="function")throw Error(C(150));if(f=S.call(f),f==null)throw Error(C(151));for(var A=S=null,P=d,B=d=0,I=null,T=f.next();P!==null&&!T.done;B++,T=f.next()){P.index>B?(I=P,P=null):I=P.sibling;var N=m(p,P,T.value,v);if(N===null){P===null&&(P=I);break}e&&P&&N.alternate===null&&t(p,P),d=l(N,d,B),A===null?S=N:A.sibling=N,A=N,P=I}if(T.done)return n(p,P),K&&Bt(p,B),S;if(P===null){for(;!T.done;B++,T=f.next())T=y(p,T.value,v),T!==null&&(d=l(T,d,B),A===null?S=T:A.sibling=T,A=T);return K&&Bt(p,B),S}for(P=r(p,P);!T.done;B++,T=f.next())T=x(P,p,B,T.value,v),T!==null&&(e&&T.alternate!==null&&P.delete(T.key===null?B:T.key),d=l(T,d,B),A===null?S=T:A.sibling=T,A=T);return e&&P.forEach(function(Z){return t(p,Z)}),K&&Bt(p,B),S}function b(p,d,f,v){if(typeof f=="object"&&f!==null&&f.type===en&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case br:e:{for(var S=f.key,A=d;A!==null;){if(A.key===S){if(S=f.type,S===en){if(A.tag===7){n(p,A.sibling),d=o(A,f.props.children),d.return=p,p=d;break e}}else if(A.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===dt&&pu(S)===A.type){n(p,A.sibling),d=o(A,f.props),d.ref=Tn(p,A,f),d.return=p,p=d;break e}n(p,A);break}else t(p,A);A=A.sibling}f.type===en?(d=Rt(f.props.children,p.mode,v,f.key),d.return=p,p=d):(v=oo(f.type,f.key,f.props,null,p.mode,v),v.ref=Tn(p,d,f),v.return=p,p=v)}return i(p);case qt:e:{for(A=f.key;d!==null;){if(d.key===A)if(d.tag===4&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){n(p,d.sibling),d=o(d,f.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=Pl(f,p.mode,v),d.return=p,p=d}return i(p);case dt:return A=f._init,b(p,d,A(f._payload),v)}if(Un(f))return k(p,d,f,v);if(bn(f))return w(p,d,f,v);$r(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,d!==null&&d.tag===6?(n(p,d.sibling),d=o(d,f),d.return=p,p=d):(n(p,d),d=Al(f,p.mode,v),d.return=p,p=d),i(p)):n(p,d)}return b}var kn=uc(!0),sc=uc(!1),wo=Dt(null),ko=null,sn=null,ta=null;function na(){ta=sn=ko=null}function ra(e){var t=wo.current;H(wo),e._currentValue=t}function si(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function gn(e,t){ko=e,ta=sn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ee=!0),e.firstContext=null)}function Te(e){var t=e._currentValue;if(ta!==e)if(e={context:e,memoizedValue:t,next:null},sn===null){if(ko===null)throw Error(C(308));sn=e,ko.dependencies={lanes:0,firstContext:e}}else sn=sn.next=e;return t}var Lt=null;function oa(e){Lt===null?Lt=[e]:Lt.push(e)}function cc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,oa(t)):(n.next=o.next,o.next=n),t.interleaved=n,it(e,r)}function it(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var pt=!1;function la(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function rt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Et(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(R&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,it(e,n)}return o=r.interleaved,o===null?(t.next=t,oa(r)):(t.next=o.next,o.next=t),r.interleaved=t,it(e,n)}function Jr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Wi(e,n)}}function fu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Eo(e,t,n,r){var o=e.updateQueue;pt=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var u=a,c=u.next;u.next=null,i===null?l=c:i.next=c,i=u;var g=e.alternate;g!==null&&(g=g.updateQueue,a=g.lastBaseUpdate,a!==i&&(a===null?g.firstBaseUpdate=c:a.next=c,g.lastBaseUpdate=u))}if(l!==null){var y=o.baseState;i=0,g=c=u=null,a=l;do{var m=a.lane,x=a.eventTime;if((r&m)===m){g!==null&&(g=g.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var k=e,w=a;switch(m=t,x=n,w.tag){case 1:if(k=w.payload,typeof k=="function"){y=k.call(x,y,m);break e}y=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=w.payload,m=typeof k=="function"?k.call(x,y,m):k,m==null)break e;y=X({},y,m);break e;case 2:pt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[a]:m.push(a))}else x={eventTime:x,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},g===null?(c=g=x,u=y):g=g.next=x,i|=m;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;m=a,a=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(1);if(g===null&&(u=y),o.baseState=u,o.firstBaseUpdate=c,o.lastBaseUpdate=g,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);$t|=i,e.lanes=i,e.memoizedState=y}}function hu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(C(191,o));o.call(r)}}}var Sr={},Ze=Dt(Sr),cr=Dt(Sr),dr=Dt(Sr);function Tt(e){if(e===Sr)throw Error(C(174));return e}function ia(e,t){switch($(dr,t),$(cr,e),$(Ze,Sr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Vl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Vl(t,e)}H(Ze),$(Ze,t)}function En(){H(Ze),H(cr),H(dr)}function pc(e){Tt(dr.current);var t=Tt(Ze.current),n=Vl(t,e.type);t!==n&&($(cr,e),$(Ze,n))}function aa(e){cr.current===e&&(H(Ze),H(cr))}var G=Dt(0);function Co(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var kl=[];function ua(){for(var e=0;e<kl.length;e++)kl[e]._workInProgressVersionPrimary=null;kl.length=0}var qr=ut.ReactCurrentDispatcher,El=ut.ReactCurrentBatchConfig,Ut=0,Y=null,ne=null,ie=null,Fo=!1,Yn=!1,pr=0,xf=0;function pe(){throw Error(C(321))}function sa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!He(e[n],t[n]))return!1;return!0}function ca(e,t,n,r,o,l){if(Ut=l,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,qr.current=e===null||e.memoizedState===null?Cf:Ff,e=n(r,o),Yn){l=0;do{if(Yn=!1,pr=0,25<=l)throw Error(C(301));l+=1,ie=ne=null,t.updateQueue=null,qr.current=Sf,e=n(r,o)}while(Yn)}if(qr.current=So,t=ne!==null&&ne.next!==null,Ut=0,ie=ne=Y=null,Fo=!1,t)throw Error(C(300));return e}function da(){var e=pr!==0;return pr=0,e}function Ge(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?Y.memoizedState=ie=e:ie=ie.next=e,ie}function Me(){if(ne===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var t=ie===null?Y.memoizedState:ie.next;if(t!==null)ie=t,ne=e;else{if(e===null)throw Error(C(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},ie===null?Y.memoizedState=ie=e:ie=ie.next=e}return ie}function fr(e,t){return typeof t=="function"?t(e):t}function Cl(e){var t=Me(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=ne,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var a=i=null,u=null,c=l;do{var g=c.lane;if((Ut&g)===g)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var y={lane:g,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=y,i=r):u=u.next=y,Y.lanes|=g,$t|=g}c=c.next}while(c!==null&&c!==l);u===null?i=r:u.next=a,He(r,t.memoizedState)||(Ee=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,Y.lanes|=l,$t|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Fl(e){var t=Me(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);He(l,t.memoizedState)||(Ee=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function fc(){}function hc(e,t){var n=Y,r=Me(),o=t(),l=!He(r.memoizedState,o);if(l&&(r.memoizedState=o,Ee=!0),r=r.queue,pa(yc.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||ie!==null&&ie.memoizedState.tag&1){if(n.flags|=2048,hr(9,gc.bind(null,n,r,o,t),void 0,null),ae===null)throw Error(C(349));(Ut&30)!==0||mc(n,t,o)}return o}function mc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function gc(e,t,n,r){t.value=n,t.getSnapshot=r,vc(t)&&xc(e)}function yc(e,t,n){return n(function(){vc(t)&&xc(e)})}function vc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!He(e,n)}catch{return!0}}function xc(e){var t=it(e,1);t!==null&&We(t,e,1,-1)}function mu(e){var t=Ge();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fr,lastRenderedState:e},t.queue=e,e=e.dispatch=Ef.bind(null,Y,e),[t.memoizedState,e]}function hr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function wc(){return Me().memoizedState}function eo(e,t,n,r){var o=Ge();Y.flags|=e,o.memoizedState=hr(1|t,n,void 0,r===void 0?null:r)}function Uo(e,t,n,r){var o=Me();r=r===void 0?null:r;var l=void 0;if(ne!==null){var i=ne.memoizedState;if(l=i.destroy,r!==null&&sa(r,i.deps)){o.memoizedState=hr(t,n,l,r);return}}Y.flags|=e,o.memoizedState=hr(1|t,n,l,r)}function gu(e,t){return eo(8390656,8,e,t)}function pa(e,t){return Uo(2048,8,e,t)}function kc(e,t){return Uo(4,2,e,t)}function Ec(e,t){return Uo(4,4,e,t)}function Cc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Fc(e,t,n){return n=n!=null?n.concat([e]):null,Uo(4,4,Cc.bind(null,t,e),n)}function fa(){}function Sc(e,t){var n=Me();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&sa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Nc(e,t){var n=Me();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&sa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ac(e,t,n){return(Ut&21)===0?(e.baseState&&(e.baseState=!1,Ee=!0),e.memoizedState=n):(He(n,t)||(n=Bs(),Y.lanes|=n,$t|=n,e.baseState=!0),t)}function wf(e,t){var n=O;O=n!==0&&4>n?n:4,e(!0);var r=El.transition;El.transition={};try{e(!1),t()}finally{O=n,El.transition=r}}function Pc(){return Me().memoizedState}function kf(e,t,n){var r=Ft(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},zc(e))Dc(t,n);else if(n=cc(e,t,n,r),n!==null){var o=ye();We(n,e,r,o),bc(n,t,r)}}function Ef(e,t,n){var r=Ft(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(zc(e))Dc(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,a=l(i,n);if(o.hasEagerState=!0,o.eagerState=a,He(a,i)){var u=t.interleaved;u===null?(o.next=o,oa(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=cc(e,t,o,r),n!==null&&(o=ye(),We(n,e,r,o),bc(n,t,r))}}function zc(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function Dc(e,t){Yn=Fo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function bc(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Wi(e,n)}}var So={readContext:Te,useCallback:pe,useContext:pe,useEffect:pe,useImperativeHandle:pe,useInsertionEffect:pe,useLayoutEffect:pe,useMemo:pe,useReducer:pe,useRef:pe,useState:pe,useDebugValue:pe,useDeferredValue:pe,useTransition:pe,useMutableSource:pe,useSyncExternalStore:pe,useId:pe,unstable_isNewReconciler:!1},Cf={readContext:Te,useCallback:function(e,t){return Ge().memoizedState=[e,t===void 0?null:t],e},useContext:Te,useEffect:gu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,eo(4194308,4,Cc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return eo(4194308,4,e,t)},useInsertionEffect:function(e,t){return eo(4,2,e,t)},useMemo:function(e,t){var n=Ge();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ge();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=kf.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=Ge();return e={current:e},t.memoizedState=e},useState:mu,useDebugValue:fa,useDeferredValue:function(e){return Ge().memoizedState=e},useTransition:function(){var e=mu(!1),t=e[0];return e=wf.bind(null,e[1]),Ge().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,o=Ge();if(K){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),ae===null)throw Error(C(349));(Ut&30)!==0||mc(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,gu(yc.bind(null,r,l,e),[e]),r.flags|=2048,hr(9,gc.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Ge(),t=ae.identifierPrefix;if(K){var n=nt,r=tt;n=(r&~(1<<32-Ve(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=pr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=xf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ff={readContext:Te,useCallback:Sc,useContext:Te,useEffect:pa,useImperativeHandle:Fc,useInsertionEffect:kc,useLayoutEffect:Ec,useMemo:Nc,useReducer:Cl,useRef:wc,useState:function(){return Cl(fr)},useDebugValue:fa,useDeferredValue:function(e){var t=Me();return Ac(t,ne.memoizedState,e)},useTransition:function(){var e=Cl(fr)[0],t=Me().memoizedState;return[e,t]},useMutableSource:fc,useSyncExternalStore:hc,useId:Pc,unstable_isNewReconciler:!1},Sf={readContext:Te,useCallback:Sc,useContext:Te,useEffect:pa,useImperativeHandle:Fc,useInsertionEffect:kc,useLayoutEffect:Ec,useMemo:Nc,useReducer:Fl,useRef:wc,useState:function(){return Fl(fr)},useDebugValue:fa,useDeferredValue:function(e){var t=Me();return ne===null?t.memoizedState=e:Ac(t,ne.memoizedState,e)},useTransition:function(){var e=Fl(fr)[0],t=Me().memoizedState;return[e,t]},useMutableSource:fc,useSyncExternalStore:hc,useId:Pc,unstable_isNewReconciler:!1};function Oe(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ci(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var $o={isMounted:function(e){return(e=e._reactInternals)?Ht(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ye(),o=Ft(e),l=rt(r,o);l.payload=t,n!=null&&(l.callback=n),t=Et(e,l,o),t!==null&&(We(t,e,o,r),Jr(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ye(),o=Ft(e),l=rt(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Et(e,l,o),t!==null&&(We(t,e,o,r),Jr(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ye(),r=Ft(e),o=rt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Et(e,o,r),t!==null&&(We(t,e,r,n),Jr(t,e,r))}};function yu(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!ir(n,r)||!ir(o,l):!0}function Bc(e,t,n){var r=!1,o=Pt,l=t.contextType;return typeof l=="object"&&l!==null?l=Te(l):(o=Fe(t)?It:me.current,r=t.contextTypes,l=(r=r!=null)?xn(e,o):Pt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=$o,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function vu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&$o.enqueueReplaceState(t,t.state,null)}function di(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},la(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=Te(l):(l=Fe(t)?It:me.current,o.context=xn(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(ci(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&$o.enqueueReplaceState(o,o.state,null),Eo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Cn(e,t){try{var n="",r=t;do n+=Jd(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function Sl(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function pi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Nf=typeof WeakMap=="function"?WeakMap:Map;function jc(e,t,n){n=rt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ao||(Ao=!0,Ei=r),pi(e,t)},n}function _c(e,t,n){n=rt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){pi(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){pi(e,t),typeof r!="function"&&(Ct===null?Ct=new Set([this]):Ct.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function xu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Nf;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Of.bind(null,e,t,n),t.then(e,e))}function wu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ku(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=rt(-1,1),t.tag=2,Et(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var Af=ut.ReactCurrentOwner,Ee=!1;function ge(e,t,n,r){t.child=e===null?sc(t,null,n,r):kn(t,e.child,n,r)}function Eu(e,t,n,r,o){n=n.render;var l=t.ref;return gn(t,o),r=ca(e,t,n,r,l,o),n=da(),e!==null&&!Ee?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,at(e,t,o)):(K&&n&&Ji(t),t.flags|=1,ge(e,t,r,o),t.child)}function Cu(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!ka(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Lc(e,t,l,r,o)):(e=oo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,(e.lanes&o)===0){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:ir,n(i,r)&&e.ref===t.ref)return at(e,t,o)}return t.flags|=1,e=St(l,r),e.ref=t.ref,e.return=t,t.child=e}function Lc(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(ir(l,r)&&e.ref===t.ref)if(Ee=!1,t.pendingProps=r=l,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Ee=!0);else return t.lanes=e.lanes,at(e,t,o)}return fi(e,t,n,r,o)}function Tc(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},$(dn,Ne),Ne|=n;else{if((n&1073741824)===0)return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,$(dn,Ne),Ne|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,$(dn,Ne),Ne|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,$(dn,Ne),Ne|=r;return ge(e,t,o,n),t.child}function Mc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function fi(e,t,n,r,o){var l=Fe(n)?It:me.current;return l=xn(t,l),gn(t,o),n=ca(e,t,n,r,l,o),r=da(),e!==null&&!Ee?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,at(e,t,o)):(K&&r&&Ji(t),t.flags|=1,ge(e,t,n,o),t.child)}function Fu(e,t,n,r,o){if(Fe(n)){var l=!0;yo(t)}else l=!1;if(gn(t,o),t.stateNode===null)to(e,t),Bc(t,n,r),di(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var u=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=Te(c):(c=Fe(n)?It:me.current,c=xn(t,c));var g=n.getDerivedStateFromProps,y=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function";y||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||u!==c)&&vu(t,i,r,c),pt=!1;var m=t.memoizedState;i.state=m,Eo(t,r,i,o),u=t.memoizedState,a!==r||m!==u||Ce.current||pt?(typeof g=="function"&&(ci(t,n,g,r),u=t.memoizedState),(a=pt||yu(t,n,a,r,m,u,c))?(y||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),i.props=r,i.state=u,i.context=c,r=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,dc(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Oe(t.type,a),i.props=c,y=t.pendingProps,m=i.context,u=n.contextType,typeof u=="object"&&u!==null?u=Te(u):(u=Fe(n)?It:me.current,u=xn(t,u));var x=n.getDerivedStateFromProps;(g=typeof x=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==y||m!==u)&&vu(t,i,r,u),pt=!1,m=t.memoizedState,i.state=m,Eo(t,r,i,o);var k=t.memoizedState;a!==y||m!==k||Ce.current||pt?(typeof x=="function"&&(ci(t,n,x,r),k=t.memoizedState),(c=pt||yu(t,n,c,r,m,k,u)||!1)?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,k,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,k,u)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),i.props=r,i.state=k,i.context=u,r=c):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return hi(e,t,n,r,l,o)}function hi(e,t,n,r,o,l){Mc(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&su(t,n,!1),at(e,t,l);r=t.stateNode,Af.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=kn(t,e.child,null,l),t.child=kn(t,null,a,l)):ge(e,t,a,l),t.memoizedState=r.state,o&&su(t,n,!0),t.child}function Rc(e){var t=e.stateNode;t.pendingContext?uu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&uu(e,t.context,!1),ia(e,t.containerInfo)}function Su(e,t,n,r,o){return wn(),ea(o),t.flags|=256,ge(e,t,n,r),t.child}var mi={dehydrated:null,treeContext:null,retryLane:0};function gi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ic(e,t,n){var r=t.pendingProps,o=G.current,l=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),$(G,o&1),e===null)return ui(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},(r&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=i):l=Ho(i,r,0,null),e=Rt(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=gi(n),t.memoizedState=mi,e):ha(t,i));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Pf(e,t,i,r,a,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,a=o.sibling;var u={mode:"hidden",children:r.children};return(i&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=St(o,u),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?l=St(a,l):(l=Rt(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?gi(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=mi,r}return l=e.child,e=l.sibling,r=St(l,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ha(e,t){return t=Ho({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Vr(e,t,n,r){return r!==null&&ea(r),kn(t,e.child,null,n),e=ha(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Pf(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=Sl(Error(C(422))),Vr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=Ho({mode:"visible",children:r.children},o,0,null),l=Rt(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,(t.mode&1)!==0&&kn(t,e.child,null,i),t.child.memoizedState=gi(i),t.memoizedState=mi,l);if((t.mode&1)===0)return Vr(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(C(419)),r=Sl(l,r,void 0),Vr(e,t,i,r)}if(a=(i&e.childLanes)!==0,Ee||a){if(r=ae,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|i))!==0?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,it(e,o),We(r,e,o,-1))}return wa(),r=Sl(Error(C(421))),Vr(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Uf.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,Ae=kt(o.nextSibling),Pe=t,K=!0,$e=null,e!==null&&(Be[je++]=tt,Be[je++]=nt,Be[je++]=Ot,tt=e.id,nt=e.overflow,Ot=t),t=ha(t,r.children),t.flags|=4096,t)}function Nu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),si(e.return,t,n)}function Nl(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function Oc(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(ge(e,t,r.children,n),r=G.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Nu(e,n,t);else if(e.tag===19)Nu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if($(G,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Co(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Nl(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Co(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Nl(t,!0,n,null,l);break;case"together":Nl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function to(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function at(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),$t|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=St(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=St(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function zf(e,t,n){switch(t.tag){case 3:Rc(t),wn();break;case 5:pc(t);break;case 1:Fe(t.type)&&yo(t);break;case 4:ia(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;$(wo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?($(G,G.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Ic(e,t,n):($(G,G.current&1),e=at(e,t,n),e!==null?e.sibling:null);$(G,G.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Oc(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),$(G,G.current),r)break;return null;case 22:case 23:return t.lanes=0,Tc(e,t,n)}return at(e,t,n)}var Uc,yi,$c,Vc;Uc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};yi=function(){};$c=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Tt(Ze.current);var l=null;switch(n){case"input":o=Il(e,o),r=Il(e,r),l=[];break;case"select":o=X({},o,{value:void 0}),r=X({},r,{value:void 0}),l=[];break;case"textarea":o=$l(e,o),r=$l(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=mo)}Wl(n,r);var i;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(qn.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var u=r[c];if(a=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(i in a)!a.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in u)u.hasOwnProperty(i)&&a[i]!==u[i]&&(n||(n={}),n[i]=u[i])}else n||(l||(l=[]),l.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(l=l||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(qn.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&V("scroll",e),l||a===u||(l=[])):(l=l||[]).push(c,u))}n&&(l=l||[]).push("style",n);var c=l;(t.updateQueue=c)&&(t.flags|=4)}};Vc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Mn(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Df(e,t,n){var r=t.pendingProps;switch(qi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fe(t),null;case 1:return Fe(t.type)&&go(),fe(t),null;case 3:return r=t.stateNode,En(),H(Ce),H(me),ua(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ur(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,$e!==null&&(Si($e),$e=null))),yi(e,t),fe(t),null;case 5:aa(t);var o=Tt(dr.current);if(n=t.type,e!==null&&t.stateNode!=null)$c(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return fe(t),null}if(e=Tt(Ze.current),Ur(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Ye]=t,r[sr]=l,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(o=0;o<Vn.length;o++)V(Vn[o],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":La(r,l),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},V("invalid",r);break;case"textarea":Ma(r,l),V("invalid",r)}Wl(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&Or(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&Or(r.textContent,a,e),o=["children",""+a]):qn.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&V("scroll",r)}switch(n){case"input":Br(r),Ta(r,l,!0);break;case"textarea":Br(r),Ra(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=mo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ys(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Ye]=t,e[sr]=r,Uc(e,t,!1,!1),t.stateNode=e;e:{switch(i=Hl(n,r),n){case"dialog":V("cancel",e),V("close",e),o=r;break;case"iframe":case"object":case"embed":V("load",e),o=r;break;case"video":case"audio":for(o=0;o<Vn.length;o++)V(Vn[o],e);o=r;break;case"source":V("error",e),o=r;break;case"img":case"image":case"link":V("error",e),V("load",e),o=r;break;case"details":V("toggle",e),o=r;break;case"input":La(e,r),o=Il(e,r),V("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=X({},r,{value:void 0}),V("invalid",e);break;case"textarea":Ma(e,r),o=$l(e,r),V("invalid",e);break;default:o=r}Wl(n,o),a=o;for(l in a)if(a.hasOwnProperty(l)){var u=a[l];l==="style"?ws(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&vs(e,u)):l==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&er(e,u):typeof u=="number"&&er(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(qn.hasOwnProperty(l)?u!=null&&l==="onScroll"&&V("scroll",e):u!=null&&Ri(e,l,u,i))}switch(n){case"input":Br(e),Ta(e,r,!1);break;case"textarea":Br(e),Ra(e);break;case"option":r.value!=null&&e.setAttribute("value",""+At(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?pn(e,!!r.multiple,l,!1):r.defaultValue!=null&&pn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=mo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return fe(t),null;case 6:if(e&&t.stateNode!=null)Vc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=Tt(dr.current),Tt(Ze.current),Ur(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ye]=t,(l=r.nodeValue!==n)&&(e=Pe,e!==null))switch(e.tag){case 3:Or(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Or(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ye]=t,t.stateNode=r}return fe(t),null;case 13:if(H(G),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&Ae!==null&&(t.mode&1)!==0&&(t.flags&128)===0)ac(),wn(),t.flags|=98560,l=!1;else if(l=Ur(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(C(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(C(317));l[Ye]=t}else wn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;fe(t),l=!1}else $e!==null&&(Si($e),$e=null),l=!0;if(!l)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(G.current&1)!==0?re===0&&(re=3):wa())),t.updateQueue!==null&&(t.flags|=4),fe(t),null);case 4:return En(),yi(e,t),e===null&&ar(t.stateNode.containerInfo),fe(t),null;case 10:return ra(t.type._context),fe(t),null;case 17:return Fe(t.type)&&go(),fe(t),null;case 19:if(H(G),l=t.memoizedState,l===null)return fe(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)Mn(l,!1);else{if(re!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Co(e),i!==null){for(t.flags|=128,Mn(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return $(G,G.current&1|2),t.child}e=e.sibling}l.tail!==null&&q()>Fn&&(t.flags|=128,r=!0,Mn(l,!1),t.lanes=4194304)}else{if(!r)if(e=Co(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Mn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!K)return fe(t),null}else 2*q()-l.renderingStartTime>Fn&&n!==1073741824&&(t.flags|=128,r=!0,Mn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=q(),t.sibling=null,n=G.current,$(G,r?n&1|2:n&1),t):(fe(t),null);case 22:case 23:return xa(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Ne&1073741824)!==0&&(fe(t),t.subtreeFlags&6&&(t.flags|=8192)):fe(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function bf(e,t){switch(qi(t),t.tag){case 1:return Fe(t.type)&&go(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return En(),H(Ce),H(me),ua(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return aa(t),null;case 13:if(H(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));wn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(G),null;case 4:return En(),null;case 10:return ra(t.type._context),null;case 22:case 23:return xa(),null;case 24:return null;default:return null}}var Wr=!1,he=!1,Bf=typeof WeakSet=="function"?WeakSet:Set,D=null;function cn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){J(e,t,r)}else n.current=null}function vi(e,t,n){try{n()}catch(r){J(e,t,r)}}var Au=!1;function jf(e,t){if(ti=po,e=Gs(),Zi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,a=-1,u=-1,c=0,g=0,y=e,m=null;t:for(;;){for(var x;y!==n||o!==0&&y.nodeType!==3||(a=i+o),y!==l||r!==0&&y.nodeType!==3||(u=i+r),y.nodeType===3&&(i+=y.nodeValue.length),(x=y.firstChild)!==null;)m=y,y=x;for(;;){if(y===e)break t;if(m===n&&++c===o&&(a=i),m===l&&++g===r&&(u=i),(x=y.nextSibling)!==null)break;y=m,m=y.parentNode}y=x}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ni={focusedElem:e,selectionRange:n},po=!1,D=t;D!==null;)if(t=D,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,D=e;else for(;D!==null;){t=D;try{var k=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var w=k.memoizedProps,b=k.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:Oe(t.type,w),b);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(v){J(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,D=e;break}D=t.return}return k=Au,Au=!1,k}function Xn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&vi(t,n,l)}o=o.next}while(o!==r)}}function Vo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function xi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Wc(e){var t=e.alternate;t!==null&&(e.alternate=null,Wc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ye],delete t[sr],delete t[li],delete t[mf],delete t[gf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Hc(e){return e.tag===5||e.tag===3||e.tag===4}function Pu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function wi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=mo));else if(r!==4&&(e=e.child,e!==null))for(wi(e,t,n),e=e.sibling;e!==null;)wi(e,t,n),e=e.sibling}function ki(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ki(e,t,n),e=e.sibling;e!==null;)ki(e,t,n),e=e.sibling}var ue=null,Ue=!1;function ct(e,t,n){for(n=n.child;n!==null;)Kc(e,t,n),n=n.sibling}function Kc(e,t,n){if(Xe&&typeof Xe.onCommitFiberUnmount=="function")try{Xe.onCommitFiberUnmount(Lo,n)}catch{}switch(n.tag){case 5:he||cn(n,t);case 6:var r=ue,o=Ue;ue=null,ct(e,t,n),ue=r,Ue=o,ue!==null&&(Ue?(e=ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(Ue?(e=ue,n=n.stateNode,e.nodeType===8?xl(e.parentNode,n):e.nodeType===1&&xl(e,n),or(e)):xl(ue,n.stateNode));break;case 4:r=ue,o=Ue,ue=n.stateNode.containerInfo,Ue=!0,ct(e,t,n),ue=r,Ue=o;break;case 0:case 11:case 14:case 15:if(!he&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&((l&2)!==0||(l&4)!==0)&&vi(n,t,i),o=o.next}while(o!==r)}ct(e,t,n);break;case 1:if(!he&&(cn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){J(n,t,a)}ct(e,t,n);break;case 21:ct(e,t,n);break;case 22:n.mode&1?(he=(r=he)||n.memoizedState!==null,ct(e,t,n),he=r):ct(e,t,n);break;default:ct(e,t,n)}}function zu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Bf),t.forEach(function(r){var o=$f.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ie(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:ue=a.stateNode,Ue=!1;break e;case 3:ue=a.stateNode.containerInfo,Ue=!0;break e;case 4:ue=a.stateNode.containerInfo,Ue=!0;break e}a=a.return}if(ue===null)throw Error(C(160));Kc(l,i,o),ue=null,Ue=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(c){J(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Qc(t,e),t=t.sibling}function Qc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ie(t,e),Qe(e),r&4){try{Xn(3,e,e.return),Vo(3,e)}catch(w){J(e,e.return,w)}try{Xn(5,e,e.return)}catch(w){J(e,e.return,w)}}break;case 1:Ie(t,e),Qe(e),r&512&&n!==null&&cn(n,n.return);break;case 5:if(Ie(t,e),Qe(e),r&512&&n!==null&&cn(n,n.return),e.flags&32){var o=e.stateNode;try{er(o,"")}catch(w){J(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&ms(o,l),Hl(a,i);var c=Hl(a,l);for(i=0;i<u.length;i+=2){var g=u[i],y=u[i+1];g==="style"?ws(o,y):g==="dangerouslySetInnerHTML"?vs(o,y):g==="children"?er(o,y):Ri(o,g,y,c)}switch(a){case"input":Ol(o,l);break;case"textarea":gs(o,l);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var x=l.value;x!=null?pn(o,!!l.multiple,x,!1):m!==!!l.multiple&&(l.defaultValue!=null?pn(o,!!l.multiple,l.defaultValue,!0):pn(o,!!l.multiple,l.multiple?[]:"",!1))}o[sr]=l}catch(w){J(e,e.return,w)}}break;case 6:if(Ie(t,e),Qe(e),r&4){if(e.stateNode===null)throw Error(C(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(w){J(e,e.return,w)}}break;case 3:if(Ie(t,e),Qe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{or(t.containerInfo)}catch(w){J(e,e.return,w)}break;case 4:Ie(t,e),Qe(e);break;case 13:Ie(t,e),Qe(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(ya=q())),r&4&&zu(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(he=(c=he)||g,Ie(t,e),he=c):Ie(t,e),Qe(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!g&&(e.mode&1)!==0)for(D=e,g=e.child;g!==null;){for(y=D=g;D!==null;){switch(m=D,x=m.child,m.tag){case 0:case 11:case 14:case 15:Xn(4,m,m.return);break;case 1:cn(m,m.return);var k=m.stateNode;if(typeof k.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(w){J(r,n,w)}}break;case 5:cn(m,m.return);break;case 22:if(m.memoizedState!==null){bu(y);continue}}x!==null?(x.return=m,D=x):bu(y)}g=g.sibling}e:for(g=null,y=e;;){if(y.tag===5){if(g===null){g=y;try{o=y.stateNode,c?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=y.stateNode,u=y.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=xs("display",i))}catch(w){J(e,e.return,w)}}}else if(y.tag===6){if(g===null)try{y.stateNode.nodeValue=c?"":y.memoizedProps}catch(w){J(e,e.return,w)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===e)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break e;for(;y.sibling===null;){if(y.return===null||y.return===e)break e;g===y&&(g=null),y=y.return}g===y&&(g=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:Ie(t,e),Qe(e),r&4&&zu(e);break;case 21:break;default:Ie(t,e),Qe(e)}}function Qe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Hc(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(er(o,""),r.flags&=-33);var l=Pu(e);ki(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,a=Pu(e);wi(e,a,i);break;default:throw Error(C(161))}}catch(u){J(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _f(e,t,n){D=e,Gc(e)}function Gc(e,t,n){for(var r=(e.mode&1)!==0;D!==null;){var o=D,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Wr;if(!i){var a=o.alternate,u=a!==null&&a.memoizedState!==null||he;a=Wr;var c=he;if(Wr=i,(he=u)&&!c)for(D=o;D!==null;)i=D,u=i.child,i.tag===22&&i.memoizedState!==null?Bu(o):u!==null?(u.return=i,D=u):Bu(o);for(;l!==null;)D=l,Gc(l),l=l.sibling;D=o,Wr=a,he=c}Du(e)}else(o.subtreeFlags&8772)!==0&&l!==null?(l.return=o,D=l):Du(e)}}function Du(e){for(;D!==null;){var t=D;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:he||Vo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!he)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Oe(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&hu(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}hu(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var g=c.memoizedState;if(g!==null){var y=g.dehydrated;y!==null&&or(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}he||t.flags&512&&xi(t)}catch(m){J(t,t.return,m)}}if(t===e){D=null;break}if(n=t.sibling,n!==null){n.return=t.return,D=n;break}D=t.return}}function bu(e){for(;D!==null;){var t=D;if(t===e){D=null;break}var n=t.sibling;if(n!==null){n.return=t.return,D=n;break}D=t.return}}function Bu(e){for(;D!==null;){var t=D;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Vo(4,t)}catch(u){J(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){J(t,o,u)}}var l=t.return;try{xi(t)}catch(u){J(t,l,u)}break;case 5:var i=t.return;try{xi(t)}catch(u){J(t,i,u)}}}catch(u){J(t,t.return,u)}if(t===e){D=null;break}var a=t.sibling;if(a!==null){a.return=t.return,D=a;break}D=t.return}}var Lf=Math.ceil,No=ut.ReactCurrentDispatcher,ma=ut.ReactCurrentOwner,Le=ut.ReactCurrentBatchConfig,R=0,ae=null,te=null,se=0,Ne=0,dn=Dt(0),re=0,mr=null,$t=0,Wo=0,ga=0,Zn=null,ke=null,ya=0,Fn=1/0,qe=null,Ao=!1,Ei=null,Ct=null,Hr=!1,gt=null,Po=0,Jn=0,Ci=null,no=-1,ro=0;function ye(){return(R&6)!==0?q():no!==-1?no:no=q()}function Ft(e){return(e.mode&1)===0?1:(R&2)!==0&&se!==0?se&-se:vf.transition!==null?(ro===0&&(ro=Bs()),ro):(e=O,e!==0||(e=window.event,e=e===void 0?16:Is(e.type)),e)}function We(e,t,n,r){if(50<Jn)throw Jn=0,Ci=null,Error(C(185));Er(e,n,r),((R&2)===0||e!==ae)&&(e===ae&&((R&2)===0&&(Wo|=n),re===4&&ht(e,se)),Se(e,r),n===1&&R===0&&(t.mode&1)===0&&(Fn=q()+500,Oo&&bt()))}function Se(e,t){var n=e.callbackNode;yp(e,t);var r=co(e,e===ae?se:0);if(r===0)n!==null&&Ua(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ua(n),t===1)e.tag===0?yf(ju.bind(null,e)):oc(ju.bind(null,e)),ff(function(){(R&6)===0&&bt()}),n=null;else{switch(js(r)){case 1:n=Vi;break;case 4:n=Ds;break;case 16:n=so;break;case 536870912:n=bs;break;default:n=so}n=nd(n,Yc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Yc(e,t){if(no=-1,ro=0,(R&6)!==0)throw Error(C(327));var n=e.callbackNode;if(yn()&&e.callbackNode!==n)return null;var r=co(e,e===ae?se:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=zo(e,r);else{t=r;var o=R;R|=2;var l=Zc();(ae!==e||se!==t)&&(qe=null,Fn=q()+500,Mt(e,t));do try{Rf();break}catch(a){Xc(e,a)}while(1);na(),No.current=l,R=o,te!==null?t=0:(ae=null,se=0,t=re)}if(t!==0){if(t===2&&(o=Xl(e),o!==0&&(r=o,t=Fi(e,o))),t===1)throw n=mr,Mt(e,0),ht(e,r),Se(e,q()),n;if(t===6)ht(e,r);else{if(o=e.current.alternate,(r&30)===0&&!Tf(o)&&(t=zo(e,r),t===2&&(l=Xl(e),l!==0&&(r=l,t=Fi(e,l))),t===1))throw n=mr,Mt(e,0),ht(e,r),Se(e,q()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:jt(e,ke,qe);break;case 3:if(ht(e,r),(r&130023424)===r&&(t=ya+500-q(),10<t)){if(co(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ye(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=oi(jt.bind(null,e,ke,qe),t);break}jt(e,ke,qe);break;case 4:if(ht(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-Ve(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Lf(r/1960))-r,10<r){e.timeoutHandle=oi(jt.bind(null,e,ke,qe),r);break}jt(e,ke,qe);break;case 5:jt(e,ke,qe);break;default:throw Error(C(329))}}}return Se(e,q()),e.callbackNode===n?Yc.bind(null,e):null}function Fi(e,t){var n=Zn;return e.current.memoizedState.isDehydrated&&(Mt(e,t).flags|=256),e=zo(e,t),e!==2&&(t=ke,ke=n,t!==null&&Si(t)),e}function Si(e){ke===null?ke=e:ke.push.apply(ke,e)}function Tf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!He(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ht(e,t){for(t&=~ga,t&=~Wo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ve(t),r=1<<n;e[n]=-1,t&=~r}}function ju(e){if((R&6)!==0)throw Error(C(327));yn();var t=co(e,0);if((t&1)===0)return Se(e,q()),null;var n=zo(e,t);if(e.tag!==0&&n===2){var r=Xl(e);r!==0&&(t=r,n=Fi(e,r))}if(n===1)throw n=mr,Mt(e,0),ht(e,t),Se(e,q()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,jt(e,ke,qe),Se(e,q()),null}function va(e,t){var n=R;R|=1;try{return e(t)}finally{R=n,R===0&&(Fn=q()+500,Oo&&bt())}}function Vt(e){gt!==null&&gt.tag===0&&(R&6)===0&&yn();var t=R;R|=1;var n=Le.transition,r=O;try{if(Le.transition=null,O=1,e)return e()}finally{O=r,Le.transition=n,R=t,(R&6)===0&&bt()}}function xa(){Ne=dn.current,H(dn)}function Mt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,pf(n)),te!==null)for(n=te.return;n!==null;){var r=n;switch(qi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&go();break;case 3:En(),H(Ce),H(me),ua();break;case 5:aa(r);break;case 4:En();break;case 13:H(G);break;case 19:H(G);break;case 10:ra(r.type._context);break;case 22:case 23:xa()}n=n.return}if(ae=e,te=e=St(e.current,null),se=Ne=t,re=0,mr=null,ga=Wo=$t=0,ke=Zn=null,Lt!==null){for(t=0;t<Lt.length;t++)if(n=Lt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}Lt=null}return e}function Xc(e,t){do{var n=te;try{if(na(),qr.current=So,Fo){for(var r=Y.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Fo=!1}if(Ut=0,ie=ne=Y=null,Yn=!1,pr=0,ma.current=null,n===null||n.return===null){re=1,mr=t,te=null;break}e:{var l=e,i=n.return,a=n,u=t;if(t=se,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,g=a,y=g.tag;if((g.mode&1)===0&&(y===0||y===11||y===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var x=wu(i);if(x!==null){x.flags&=-257,ku(x,i,a,l,t),x.mode&1&&xu(l,c,t),t=x,u=c;var k=t.updateQueue;if(k===null){var w=new Set;w.add(u),t.updateQueue=w}else k.add(u);break e}else{if((t&1)===0){xu(l,c,t),wa();break e}u=Error(C(426))}}else if(K&&a.mode&1){var b=wu(i);if(b!==null){(b.flags&65536)===0&&(b.flags|=256),ku(b,i,a,l,t),ea(Cn(u,a));break e}}l=u=Cn(u,a),re!==4&&(re=2),Zn===null?Zn=[l]:Zn.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var p=jc(l,u,t);fu(l,p);break e;case 1:a=u;var d=l.type,f=l.stateNode;if((l.flags&128)===0&&(typeof d.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ct===null||!Ct.has(f)))){l.flags|=65536,t&=-t,l.lanes|=t;var v=_c(l,a,t);fu(l,v);break e}}l=l.return}while(l!==null)}qc(n)}catch(S){t=S,te===n&&n!==null&&(te=n=n.return);continue}break}while(1)}function Zc(){var e=No.current;return No.current=So,e===null?So:e}function wa(){(re===0||re===3||re===2)&&(re=4),ae===null||($t&268435455)===0&&(Wo&268435455)===0||ht(ae,se)}function zo(e,t){var n=R;R|=2;var r=Zc();(ae!==e||se!==t)&&(qe=null,Mt(e,t));do try{Mf();break}catch(o){Xc(e,o)}while(1);if(na(),R=n,No.current=r,te!==null)throw Error(C(261));return ae=null,se=0,re}function Mf(){for(;te!==null;)Jc(te)}function Rf(){for(;te!==null&&!up();)Jc(te)}function Jc(e){var t=td(e.alternate,e,Ne);e.memoizedProps=e.pendingProps,t===null?qc(e):te=t,ma.current=null}function qc(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Df(n,t,Ne),n!==null){te=n;return}}else{if(n=bf(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,te=null;return}}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);re===0&&(re=5)}function jt(e,t,n){var r=O,o=Le.transition;try{Le.transition=null,O=1,If(e,t,n,r)}finally{Le.transition=o,O=r}return null}function If(e,t,n,r){do yn();while(gt!==null);if((R&6)!==0)throw Error(C(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(vp(e,l),e===ae&&(te=ae=null,se=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Hr||(Hr=!0,nd(so,function(){return yn(),null})),l=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||l){l=Le.transition,Le.transition=null;var i=O;O=1;var a=R;R|=4,ma.current=null,jf(e,n),Qc(n,e),of(ni),po=!!ti,ni=ti=null,e.current=n,_f(n),sp(),R=a,O=i,Le.transition=l}else e.current=n;if(Hr&&(Hr=!1,gt=e,Po=o),l=e.pendingLanes,l===0&&(Ct=null),pp(n.stateNode),Se(e,q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ao)throw Ao=!1,e=Ei,Ei=null,e;return(Po&1)!==0&&e.tag!==0&&yn(),l=e.pendingLanes,(l&1)!==0?e===Ci?Jn++:(Jn=0,Ci=e):Jn=0,bt(),null}function yn(){if(gt!==null){var e=js(Po),t=Le.transition,n=O;try{if(Le.transition=null,O=16>e?16:e,gt===null)var r=!1;else{if(e=gt,gt=null,Po=0,(R&6)!==0)throw Error(C(331));var o=R;for(R|=4,D=e.current;D!==null;){var l=D,i=l.child;if((D.flags&16)!==0){var a=l.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(D=c;D!==null;){var g=D;switch(g.tag){case 0:case 11:case 15:Xn(8,g,l)}var y=g.child;if(y!==null)y.return=g,D=y;else for(;D!==null;){g=D;var m=g.sibling,x=g.return;if(Wc(g),g===c){D=null;break}if(m!==null){m.return=x,D=m;break}D=x}}}var k=l.alternate;if(k!==null){var w=k.child;if(w!==null){k.child=null;do{var b=w.sibling;w.sibling=null,w=b}while(w!==null)}}D=l}}if((l.subtreeFlags&2064)!==0&&i!==null)i.return=l,D=i;else e:for(;D!==null;){if(l=D,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:Xn(9,l,l.return)}var p=l.sibling;if(p!==null){p.return=l.return,D=p;break e}D=l.return}}var d=e.current;for(D=d;D!==null;){i=D;var f=i.child;if((i.subtreeFlags&2064)!==0&&f!==null)f.return=i,D=f;else e:for(i=d;D!==null;){if(a=D,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Vo(9,a)}}catch(S){J(a,a.return,S)}if(a===i){D=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,D=v;break e}D=a.return}}if(R=o,bt(),Xe&&typeof Xe.onPostCommitFiberRoot=="function")try{Xe.onPostCommitFiberRoot(Lo,e)}catch{}r=!0}return r}finally{O=n,Le.transition=t}}return!1}function _u(e,t,n){t=Cn(n,t),t=jc(e,t,1),e=Et(e,t,1),t=ye(),e!==null&&(Er(e,1,t),Se(e,t))}function J(e,t,n){if(e.tag===3)_u(e,e,n);else for(;t!==null;){if(t.tag===3){_u(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ct===null||!Ct.has(r))){e=Cn(n,e),e=_c(t,e,1),t=Et(t,e,1),e=ye(),t!==null&&(Er(t,1,e),Se(t,e));break}}t=t.return}}function Of(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ye(),e.pingedLanes|=e.suspendedLanes&n,ae===e&&(se&n)===n&&(re===4||re===3&&(se&130023424)===se&&500>q()-ya?Mt(e,0):ga|=n),Se(e,t)}function ed(e,t){t===0&&((e.mode&1)===0?t=1:(t=Lr,Lr<<=1,(Lr&130023424)===0&&(Lr=4194304)));var n=ye();e=it(e,t),e!==null&&(Er(e,t,n),Se(e,n))}function Uf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ed(e,n)}function $f(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),ed(e,n)}var td;td=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ce.current)Ee=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Ee=!1,zf(e,t,n);Ee=(e.flags&131072)!==0}else Ee=!1,K&&(t.flags&1048576)!==0&&lc(t,xo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;to(e,t),e=t.pendingProps;var o=xn(t,me.current);gn(t,n),o=ca(null,t,r,e,o,n);var l=da();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Fe(r)?(l=!0,yo(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,la(t),o.updater=$o,t.stateNode=o,o._reactInternals=t,di(t,r,e,n),t=hi(null,t,r,!0,l,n)):(t.tag=0,K&&l&&Ji(t),ge(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(to(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Wf(r),e=Oe(r,e),o){case 0:t=fi(null,t,r,e,n);break e;case 1:t=Fu(null,t,r,e,n);break e;case 11:t=Eu(null,t,r,e,n);break e;case 14:t=Cu(null,t,r,Oe(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Oe(r,o),fi(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Oe(r,o),Fu(e,t,r,o,n);case 3:e:{if(Rc(t),e===null)throw Error(C(387));r=t.pendingProps,l=t.memoizedState,o=l.element,dc(e,t),Eo(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=Cn(Error(C(423)),t),t=Su(e,t,r,n,o);break e}else if(r!==o){o=Cn(Error(C(424)),t),t=Su(e,t,r,n,o);break e}else for(Ae=kt(t.stateNode.containerInfo.firstChild),Pe=t,K=!0,$e=null,n=sc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(wn(),r===o){t=at(e,t,n);break e}ge(e,t,r,n)}t=t.child}return t;case 5:return pc(t),e===null&&ui(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,ri(r,o)?i=null:l!==null&&ri(r,l)&&(t.flags|=32),Mc(e,t),ge(e,t,i,n),t.child;case 6:return e===null&&ui(t),null;case 13:return Ic(e,t,n);case 4:return ia(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=kn(t,null,r,n):ge(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Oe(r,o),Eu(e,t,r,o,n);case 7:return ge(e,t,t.pendingProps,n),t.child;case 8:return ge(e,t,t.pendingProps.children,n),t.child;case 12:return ge(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,$(wo,r._currentValue),r._currentValue=i,l!==null)if(He(l.value,i)){if(l.children===o.children&&!Ce.current){t=at(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){i=l.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(l.tag===1){u=rt(-1,n&-n),u.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var g=c.pending;g===null?u.next=u:(u.next=g.next,g.next=u),c.pending=u}}l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),si(l.return,n,t),a.lanes|=n;break}u=u.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(C(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),si(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}ge(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,gn(t,n),o=Te(o),r=r(o),t.flags|=1,ge(e,t,r,n),t.child;case 14:return r=t.type,o=Oe(r,t.pendingProps),o=Oe(r.type,o),Cu(e,t,r,o,n);case 15:return Lc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Oe(r,o),to(e,t),t.tag=1,Fe(r)?(e=!0,yo(t)):e=!1,gn(t,n),Bc(t,r,o),di(t,r,o,n),hi(null,t,r,!0,e,n);case 19:return Oc(e,t,n);case 22:return Tc(e,t,n)}throw Error(C(156,t.tag))};function nd(e,t){return zs(e,t)}function Vf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _e(e,t,n,r){return new Vf(e,t,n,r)}function ka(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wf(e){if(typeof e=="function")return ka(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Oi)return 11;if(e===Ui)return 14}return 2}function St(e,t){var n=e.alternate;return n===null?(n=_e(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function oo(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")ka(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case en:return Rt(n.children,o,l,t);case Ii:i=8,o|=8;break;case Ll:return e=_e(12,n,t,o|2),e.elementType=Ll,e.lanes=l,e;case Tl:return e=_e(13,n,t,o),e.elementType=Tl,e.lanes=l,e;case Ml:return e=_e(19,n,t,o),e.elementType=Ml,e.lanes=l,e;case ps:return Ho(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case cs:i=10;break e;case ds:i=9;break e;case Oi:i=11;break e;case Ui:i=14;break e;case dt:i=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=_e(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function Rt(e,t,n,r){return e=_e(7,e,r,t),e.lanes=n,e}function Ho(e,t,n,r){return e=_e(22,e,r,t),e.elementType=ps,e.lanes=n,e.stateNode={isHidden:!1},e}function Al(e,t,n){return e=_e(6,e,null,t),e.lanes=n,e}function Pl(e,t,n){return t=_e(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Hf(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ul(0),this.expirationTimes=ul(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ul(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ea(e,t,n,r,o,l,i,a,u){return e=new Hf(e,t,n,a,u),t===1?(t=1,l===!0&&(t|=8)):t=0,l=_e(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},la(l),e}function Kf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function rd(e){if(!e)return Pt;e=e._reactInternals;e:{if(Ht(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(Fe(n))return rc(e,n,t)}return t}function od(e,t,n,r,o,l,i,a,u){return e=Ea(n,r,!0,e,o,l,i,a,u),e.context=rd(null),n=e.current,r=ye(),o=Ft(n),l=rt(r,o),l.callback=t!=null?t:null,Et(n,l,o),e.current.lanes=o,Er(e,o,r),Se(e,r),e}function Ko(e,t,n,r){var o=t.current,l=ye(),i=Ft(o);return n=rd(n),t.context===null?t.context=n:t.pendingContext=n,t=rt(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Et(o,t,i),e!==null&&(We(e,o,i,l),Jr(e,o,i)),i}function Do(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Lu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ca(e,t){Lu(e,t),(e=e.alternate)&&Lu(e,t)}function Qf(){return null}var ld=typeof reportError=="function"?reportError:function(e){console.error(e)};function Fa(e){this._internalRoot=e}Qo.prototype.render=Fa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));Ko(e,t,null,null)};Qo.prototype.unmount=Fa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vt(function(){Ko(null,e,null,null)}),t[lt]=null}};function Qo(e){this._internalRoot=e}Qo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ts();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ft.length&&t!==0&&t<ft[n].priority;n++);ft.splice(n,0,e),n===0&&Rs(e)}};function Sa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Go(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Tu(){}function Gf(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var c=Do(i);l.call(c)}}var i=od(t,r,e,0,null,!1,!1,"",Tu);return e._reactRootContainer=i,e[lt]=i.current,ar(e.nodeType===8?e.parentNode:e),Vt(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var c=Do(u);a.call(c)}}var u=Ea(e,0,!1,null,null,!1,!1,"",Tu);return e._reactRootContainer=u,e[lt]=u.current,ar(e.nodeType===8?e.parentNode:e),Vt(function(){Ko(t,u,n,r)}),u}function Yo(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var a=o;o=function(){var u=Do(i);a.call(u)}}Ko(t,i,e,o)}else i=Gf(n,t,e,o,r);return Do(i)}_s=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=$n(t.pendingLanes);n!==0&&(Wi(t,n|1),Se(t,q()),(R&6)===0&&(Fn=q()+500,bt()))}break;case 13:Vt(function(){var r=it(e,1);if(r!==null){var o=ye();We(r,e,1,o)}}),Ca(e,1)}};Hi=function(e){if(e.tag===13){var t=it(e,134217728);if(t!==null){var n=ye();We(t,e,134217728,n)}Ca(e,134217728)}};Ls=function(e){if(e.tag===13){var t=Ft(e),n=it(e,t);if(n!==null){var r=ye();We(n,e,t,r)}Ca(e,t)}};Ts=function(){return O};Ms=function(e,t){var n=O;try{return O=e,t()}finally{O=n}};Ql=function(e,t,n){switch(t){case"input":if(Ol(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Io(r);if(!o)throw Error(C(90));hs(r),Ol(r,o)}}}break;case"textarea":gs(e,n);break;case"select":t=n.value,t!=null&&pn(e,!!n.multiple,t,!1)}};Cs=va;Fs=Vt;var Yf={usingClientEntryPoint:!1,Events:[Fr,on,Io,ks,Es,va]},Rn={findFiberByHostInstance:_t,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Xf={bundleType:Rn.bundleType,version:Rn.version,rendererPackageName:Rn.rendererPackageName,rendererConfig:Rn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ut.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=As(e),e===null?null:e.stateNode},findFiberByHostInstance:Rn.findFiberByHostInstance||Qf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kr.isDisabled&&Kr.supportsFiber)try{Lo=Kr.inject(Xf),Xe=Kr}catch{}}De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yf;De.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sa(t))throw Error(C(200));return Kf(e,t,null,n)};De.createRoot=function(e,t){if(!Sa(e))throw Error(C(299));var n=!1,r="",o=ld;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ea(e,1,!1,null,null,n,!1,r,o),e[lt]=t.current,ar(e.nodeType===8?e.parentNode:e),new Fa(t)};De.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=As(t),e=e===null?null:e.stateNode,e};De.flushSync=function(e){return Vt(e)};De.hydrate=function(e,t,n){if(!Go(t))throw Error(C(200));return Yo(null,e,t,!0,n)};De.hydrateRoot=function(e,t,n){if(!Sa(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=ld;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=od(t,null,e,1,n!=null?n:null,o,!1,l,i),e[lt]=t.current,ar(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Qo(t)};De.render=function(e,t,n){if(!Go(t))throw Error(C(200));return Yo(null,e,t,!1,n)};De.unmountComponentAtNode=function(e){if(!Go(e))throw Error(C(40));return e._reactRootContainer?(Vt(function(){Yo(null,null,e,!1,function(){e._reactRootContainer=null,e[lt]=null})}),!0):!1};De.unstable_batchedUpdates=va;De.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Go(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Yo(e,t,n,!1,r)};De.version="18.3.1-next-f1338f8080-20240426";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=De})(is);var id,Mu=is.exports;id=Mu.createRoot,Mu.hydrateRoot;/**
 * @remix-run/router v1.3.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gr(){return gr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gr.apply(this,arguments)}var yt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(yt||(yt={}));const Ru="popstate";function Zf(e){e===void 0&&(e={});function t(r,o){let{pathname:l,search:i,hash:a}=r.location;return Ni("",{pathname:l,search:i,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:yr(o)}return qf(t,n,null,e)}function oe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Jf(){return Math.random().toString(36).substr(2,8)}function Iu(e,t){return{usr:e.state,key:e.key,idx:t}}function Ni(e,t,n,r){return n===void 0&&(n=null),gr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Pn(t):t,{state:n,key:t&&t.key||r||Jf()})}function yr(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Pn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function qf(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:l=!1}=r,i=o.history,a=yt.Pop,u=null,c=g();c==null&&(c=0,i.replaceState(gr({},i.state,{idx:c}),""));function g(){return(i.state||{idx:null}).idx}function y(){a=yt.Pop;let b=g(),p=b==null?null:b-c;c=b,u&&u({action:a,location:w.location,delta:p})}function m(b,p){a=yt.Push;let d=Ni(w.location,b,p);n&&n(d,b),c=g()+1;let f=Iu(d,c),v=w.createHref(d);try{i.pushState(f,"",v)}catch{o.location.assign(v)}l&&u&&u({action:a,location:w.location,delta:1})}function x(b,p){a=yt.Replace;let d=Ni(w.location,b,p);n&&n(d,b),c=g();let f=Iu(d,c),v=w.createHref(d);i.replaceState(f,"",v),l&&u&&u({action:a,location:w.location,delta:0})}function k(b){let p=o.location.origin!=="null"?o.location.origin:o.location.href,d=typeof b=="string"?b:yr(b);return oe(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let w={get action(){return a},get location(){return e(o,i)},listen(b){if(u)throw new Error("A history only accepts one active listener");return o.addEventListener(Ru,y),u=b,()=>{o.removeEventListener(Ru,y),u=null}},createHref(b){return t(o,b)},createURL:k,encodeLocation(b){let p=k(b);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:m,replace:x,go(b){return i.go(b)}};return w}var Ou;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ou||(Ou={}));function eh(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Pn(t):t,o=sd(r.pathname||"/",n);if(o==null)return null;let l=ad(e);th(l);let i=null;for(let a=0;i==null&&a<l.length;++a)i=ch(l[a],fh(o));return i}function ad(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(l,i,a)=>{let u={relativePath:a===void 0?l.path||"":a,caseSensitive:l.caseSensitive===!0,childrenIndex:i,route:l};u.relativePath.startsWith("/")&&(oe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Nt([r,u.relativePath]),g=n.concat(u);l.children&&l.children.length>0&&(oe(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),ad(l.children,t,g,c)),!(l.path==null&&!l.index)&&t.push({path:c,score:uh(c,l.index),routesMeta:g})};return e.forEach((l,i)=>{var a;if(l.path===""||!((a=l.path)!=null&&a.includes("?")))o(l,i);else for(let u of ud(l.path))o(l,i,u)}),t}function ud(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return o?[l,""]:[l];let i=ud(r.join("/")),a=[];return a.push(...i.map(u=>u===""?l:[l,u].join("/"))),o&&a.push(...i),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function th(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:sh(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const nh=/^:\w+$/,rh=3,oh=2,lh=1,ih=10,ah=-2,Uu=e=>e==="*";function uh(e,t){let n=e.split("/"),r=n.length;return n.some(Uu)&&(r+=ah),t&&(r+=oh),n.filter(o=>!Uu(o)).reduce((o,l)=>o+(nh.test(l)?rh:l===""?lh:ih),r)}function sh(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function ch(e,t){let{routesMeta:n}=e,r={},o="/",l=[];for(let i=0;i<n.length;++i){let a=n[i],u=i===n.length-1,c=o==="/"?t:t.slice(o.length)||"/",g=dh({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},c);if(!g)return null;Object.assign(r,g.params);let y=a.route;l.push({params:r,pathname:Nt([o,g.pathname]),pathnameBase:yh(Nt([o,g.pathnameBase])),route:y}),g.pathnameBase!=="/"&&(o=Nt([o,g.pathnameBase]))}return l}function dh(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ph(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let l=o[0],i=l.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((c,g,y)=>{if(g==="*"){let m=a[y]||"";i=l.slice(0,l.length-m.length).replace(/(.)\/+$/,"$1")}return c[g]=hh(a[y]||"",g),c},{}),pathname:l,pathnameBase:i,pattern:e}}function ph(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Na(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(i,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function fh(e){try{return decodeURI(e)}catch(t){return Na(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function hh(e,t){try{return decodeURIComponent(e)}catch(n){return Na(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function sd(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Na(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function mh(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Pn(e):e;return{pathname:n?n.startsWith("/")?n:gh(n,t):t,search:vh(r),hash:xh(o)}}function gh(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function zl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function cd(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function dd(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Pn(e):(o=gr({},e),oe(!o.pathname||!o.pathname.includes("?"),zl("?","pathname","search",o)),oe(!o.pathname||!o.pathname.includes("#"),zl("#","pathname","hash",o)),oe(!o.search||!o.search.includes("#"),zl("#","search","hash",o)));let l=e===""||o.pathname==="",i=l?"/":o.pathname,a;if(r||i==null)a=n;else{let y=t.length-1;if(i.startsWith("..")){let m=i.split("/");for(;m[0]==="..";)m.shift(),y-=1;o.pathname=m.join("/")}a=y>=0?t[y]:"/"}let u=mh(o,a),c=i&&i!=="/"&&i.endsWith("/"),g=(l||i===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||g)&&(u.pathname+="/"),u}const Nt=e=>e.join("/").replace(/\/\/+/g,"/"),yh=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),vh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,xh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function wh(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const kh=["post","put","patch","delete"];[...kh];var Xo={exports:{}},Zo={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eh=F.exports,Ch=Symbol.for("react.element"),Fh=Symbol.for("react.fragment"),Sh=Object.prototype.hasOwnProperty,Nh=Eh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ah={key:!0,ref:!0,__self:!0,__source:!0};function pd(e,t,n){var r,o={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Sh.call(t,r)&&!Ah.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Ch,type:e,key:l,ref:i,props:o,_owner:Nh.current}}Zo.Fragment=Fh;Zo.jsx=pd;Zo.jsxs=pd;(function(e){e.exports=Zo})(Xo);const Ai=Xo.exports.Fragment,s=Xo.exports.jsx,h=Xo.exports.jsxs;/**
 * React Router v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pi(){return Pi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Pi.apply(this,arguments)}function Ph(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const zh=typeof Object.is=="function"?Object.is:Ph,{useState:Dh,useEffect:bh,useLayoutEffect:Bh,useDebugValue:jh}=jl;function _h(e,t,n){const r=t(),[{inst:o},l]=Dh({inst:{value:r,getSnapshot:t}});return Bh(()=>{o.value=r,o.getSnapshot=t,Dl(o)&&l({inst:o})},[e,r,t]),bh(()=>(Dl(o)&&l({inst:o}),e(()=>{Dl(o)&&l({inst:o})})),[e]),jh(r),r}function Dl(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!zh(n,r)}catch{return!0}}function Lh(e,t,n){return t()}const Th=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Mh=!Th,Rh=Mh?Lh:_h;"useSyncExternalStore"in jl&&(e=>e.useSyncExternalStore)(jl);const fd=F.exports.createContext(null),hd=F.exports.createContext(null),Jo=F.exports.createContext(null),qo=F.exports.createContext(null),Kt=F.exports.createContext({outlet:null,matches:[]}),md=F.exports.createContext(null);function Ih(e,t){let{relative:n}=t===void 0?{}:t;Nr()||oe(!1);let{basename:r,navigator:o}=F.exports.useContext(Jo),{hash:l,pathname:i,search:a}=yd(e,{relative:n}),u=i;return r!=="/"&&(u=i==="/"?r:Nt([r,i])),o.createHref({pathname:u,search:a,hash:l})}function Nr(){return F.exports.useContext(qo)!=null}function el(){return Nr()||oe(!1),F.exports.useContext(qo).location}function Ar(){Nr()||oe(!1);let{basename:e,navigator:t}=F.exports.useContext(Jo),{matches:n}=F.exports.useContext(Kt),{pathname:r}=el(),o=JSON.stringify(cd(n).map(a=>a.pathnameBase)),l=F.exports.useRef(!1);return F.exports.useEffect(()=>{l.current=!0}),F.exports.useCallback(function(a,u){if(u===void 0&&(u={}),!l.current)return;if(typeof a=="number"){t.go(a);return}let c=dd(a,JSON.parse(o),r,u.relative==="path");e!=="/"&&(c.pathname=c.pathname==="/"?e:Nt([e,c.pathname])),(u.replace?t.replace:t.push)(c,u.state,u)},[e,t,o,r])}function gd(){let{matches:e}=F.exports.useContext(Kt),t=e[e.length-1];return t?t.params:{}}function yd(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=F.exports.useContext(Kt),{pathname:o}=el(),l=JSON.stringify(cd(r).map(i=>i.pathnameBase));return F.exports.useMemo(()=>dd(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function Oh(e,t){Nr()||oe(!1);let{navigator:n}=F.exports.useContext(Jo),r=F.exports.useContext(hd),{matches:o}=F.exports.useContext(Kt),l=o[o.length-1],i=l?l.params:{};l&&l.pathname;let a=l?l.pathnameBase:"/";l&&l.route;let u=el(),c;if(t){var g;let w=typeof t=="string"?Pn(t):t;a==="/"||((g=w.pathname)==null?void 0:g.startsWith(a))||oe(!1),c=w}else c=u;let y=c.pathname||"/",m=a==="/"?y:y.slice(a.length)||"/",x=eh(e,{pathname:m}),k=Wh(x&&x.map(w=>Object.assign({},w,{params:Object.assign({},i,w.params),pathname:Nt([a,n.encodeLocation?n.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?a:Nt([a,n.encodeLocation?n.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),o,r||void 0);return t&&k?s(qo.Provider,{value:{location:Pi({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:yt.Pop},children:k}):k}function Uh(){let e=Gh(),t=wh(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null;return h(Ai,{children:[s("h2",{children:"Unexpected Application Error!"}),s("h3",{style:{fontStyle:"italic"},children:t}),n?s("pre",{style:{padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},children:n}):null,null]})}class $h extends F.exports.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?s(Kt.Provider,{value:this.props.routeContext,children:s(md.Provider,{value:this.state.error,children:this.props.component})}):this.props.children}}function Vh(e){let{routeContext:t,match:n,children:r}=e,o=F.exports.useContext(fd);return o&&o.static&&o.staticContext&&n.route.errorElement&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),s(Kt.Provider,{value:t,children:r})}function Wh(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,o=n==null?void 0:n.errors;if(o!=null){let l=r.findIndex(i=>i.route.id&&(o==null?void 0:o[i.route.id]));l>=0||oe(!1),r=r.slice(0,Math.min(r.length,l+1))}return r.reduceRight((l,i,a)=>{let u=i.route.id?o==null?void 0:o[i.route.id]:null,c=n?i.route.errorElement||s(Uh,{}):null,g=t.concat(r.slice(0,a+1)),y=()=>s(Vh,{match:i,routeContext:{outlet:l,matches:g},children:u?c:i.route.element!==void 0?i.route.element:l});return n&&(i.route.errorElement||a===0)?s($h,{location:n.location,component:c,error:u,children:y(),routeContext:{outlet:null,matches:g}}):y()},null)}var $u;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})($u||($u={}));var bo;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(bo||(bo={}));function Hh(e){let t=F.exports.useContext(hd);return t||oe(!1),t}function Kh(e){let t=F.exports.useContext(Kt);return t||oe(!1),t}function Qh(e){let t=Kh(),n=t.matches[t.matches.length-1];return n.route.id||oe(!1),n.route.id}function Gh(){var e;let t=F.exports.useContext(md),n=Hh(bo.UseRouteError),r=Qh(bo.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function lo(e){oe(!1)}function Yh(e){let{basename:t="/",children:n=null,location:r,navigationType:o=yt.Pop,navigator:l,static:i=!1}=e;Nr()&&oe(!1);let a=t.replace(/^\/*/,"/"),u=F.exports.useMemo(()=>({basename:a,navigator:l,static:i}),[a,l,i]);typeof r=="string"&&(r=Pn(r));let{pathname:c="/",search:g="",hash:y="",state:m=null,key:x="default"}=r,k=F.exports.useMemo(()=>{let w=sd(c,a);return w==null?null:{pathname:w,search:g,hash:y,state:m,key:x}},[a,c,g,y,m,x]);return k==null?null:s(Jo.Provider,{value:u,children:s(qo.Provider,{children:n,value:{location:k,navigationType:o}})})}function Xh(e){let{children:t,location:n}=e,r=F.exports.useContext(fd),o=r&&!t?r.router.routes:zi(t);return Oh(o,n)}var Vu;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Vu||(Vu={}));new Promise(()=>{});function zi(e,t){t===void 0&&(t=[]);let n=[];return F.exports.Children.forEach(e,(r,o)=>{if(!F.exports.isValidElement(r))return;if(r.type===F.exports.Fragment){n.push.apply(n,zi(r.props.children,t));return}r.type!==lo&&oe(!1),!r.props.index||!r.props.children||oe(!1);let l=[...t,o],i={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(i.children=zi(r.props.children,l)),n.push(i)}),n}/**
 * React Router DOM v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zh(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Jh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function qh(e,t){return e.button===0&&(!t||t==="_self")&&!Jh(e)}const e0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function t0(e){let{basename:t,children:n,window:r}=e,o=F.exports.useRef();o.current==null&&(o.current=Zf({window:r,v5Compat:!0}));let l=o.current,[i,a]=F.exports.useState({action:l.action,location:l.location});return F.exports.useLayoutEffect(()=>l.listen(a),[l]),s(Yh,{basename:t,children:n,location:i.location,navigationType:i.action,navigator:l})}const n0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Bo=F.exports.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:l,replace:i,state:a,target:u,to:c,preventScrollReset:g}=t,y=Zh(t,e0),m=typeof c=="string"?c:yr(c),x=/^[a-z+]+:\/\//i.test(m)||m.startsWith("//"),k=m,w=!1;if(n0&&x){let f=new URL(window.location.href),v=m.startsWith("//")?new URL(f.protocol+m):new URL(m);v.origin===f.origin?k=v.pathname+v.search+v.hash:w=!0}let b=Ih(k,{relative:o}),p=r0(k,{replace:i,state:a,target:u,preventScrollReset:g,relative:o});function d(f){r&&r(f),f.defaultPrevented||p(f)}return s("a",{...y,href:x?m:b,onClick:w||l?r:d,ref:n,target:u})});var Wu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Wu||(Wu={}));var Hu;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Hu||(Hu={}));function r0(e,t){let{target:n,replace:r,state:o,preventScrollReset:l,relative:i}=t===void 0?{}:t,a=Ar(),u=el(),c=yd(e,{relative:i});return F.exports.useCallback(g=>{if(qh(g,n)){g.preventDefault();let y=r!==void 0?r:yr(u)===yr(c);a(e,{replace:y,state:o,preventScrollReset:l,relative:i})}},[u,a,c,r,o,n,e,l,i])}/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var o0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),U=(e,t)=>{const n=F.exports.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:l=2,absoluteStrokeWidth:i,className:a="",children:u,...c},g)=>F.exports.createElement("svg",{ref:g,...o0,width:o,height:o,stroke:r,strokeWidth:i?Number(l)*24/Number(o):l,className:["lucide",`lucide-${l0(e)}`,a].join(" "),...c},[...t.map(([y,m])=>F.exports.createElement(y,m)),...Array.isArray(u)?u:[u]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bl=U("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jo=U("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Di=U("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bl=U("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=U("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ku=U("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vd=U("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=U("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bi=U("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=U("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=U("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=U("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qu=U("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=U("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=U("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=U("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=U("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=U("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=U("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aa=U("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vr=U("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=U("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _o=U("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xr=U("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gu=U("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kd=U("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=U("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wr=U("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=U("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function y0(e,t,n){return window.go.main.App.CreateChapter(e,t,n)}function v0(e,t,n,r){return window.go.main.App.CreateCharacter(e,t,n,r)}function x0(e,t,n,r,o,l){return window.go.main.App.CreateParagraph(e,t,n,r,o,l)}function w0(e,t){return window.go.main.App.CreateProject(e,t)}function k0(e){return window.go.main.App.DeleteChapter(e)}function E0(e){return window.go.main.App.DeleteCharacter(e)}function C0(e){return window.go.main.App.DeleteParagraph(e)}function F0(e){return window.go.main.App.DeleteProject(e)}function S0(e,t){return window.go.main.App.DeleteProjectKnownCharacter(e,t)}function N0(e){return window.go.main.App.GetChapter(e)}function A0(e){return window.go.main.App.GetChapters(e)}function P0(e){return window.go.main.App.GetCharacter(e)}function z0(e){return window.go.main.App.GetCharacters(e)}function D0(e){return window.go.main.App.GetParagraph(e)}function b0(e){return window.go.main.App.GetParagraphs(e)}function B0(e){return window.go.main.App.GetProject(e)}function j0(e){return window.go.main.App.GetProjectKnownCharacters(e)}function _0(e){return window.go.main.App.GetProjectLLMApiKey(e)}function L0(){return window.go.main.App.GetProjects()}function T0(e){return window.go.main.App.GetVoice(e)}function M0(){return window.go.main.App.GetVoices()}function R0(e,t,n){return window.go.main.App.Log(e,t,n)}function I0(e,t){return window.go.main.App.ReorderChapters(e,t)}function O0(e,t){return window.go.main.App.SetProjectLLMApiKey(e,t)}function U0(e){return window.go.main.App.SplitParagraph(e)}function $0(e,t,n){return window.go.main.App.UpdateChapter(e,t,n)}function V0(e,t,n,r){return window.go.main.App.UpdateCharacter(e,t,n,r)}function W0(e,t,n,r,o,l,i,a,u){return window.go.main.App.UpdateParagraph(e,t,n,r,o,l,i,a,u)}function H0(e,t,n){return window.go.main.App.UpdateProject(e,t,n)}function K0(e,t){return window.go.main.App.UpdateProjectKnownCharacters(e,t)}const W={createProject:async(e,t)=>{try{return await w0(e,t)}catch(n){throw console.error("Failed to create project:",n),n}},getProjects:async()=>{try{return await L0()||[]}catch(e){throw console.error("Failed to get projects:",e),e}},getProject:async e=>{try{return await B0(e)}catch(t){throw console.error("Failed to get project:",t),t}},updateProject:async(e,t,n)=>{try{await H0(e,t,n)}catch(r){throw console.error("Failed to update project:",r),r}},deleteProject:async e=>{try{await F0(e)}catch(t){throw console.error("Failed to delete project:",t),t}},setProjectLLMApiKey:async(e,t)=>{try{await O0(e,t)}catch(n){throw console.error("Failed to set project LLM API key:",n),n}},getProjectLLMApiKey:async e=>{try{return await _0(e)||""}catch(t){throw console.error("Failed to get project LLM API key:",t),t}},getProjectKnownCharacters:async e=>{try{return await j0(e)||[]}catch(t){throw console.error("Failed to get project known characters:",t),t}},updateProjectKnownCharacters:async(e,t)=>{try{await K0(e,t)}catch(n){throw console.error("Failed to update project known characters:",n),n}},deleteProjectKnownCharacter:async(e,t)=>{try{await S0(e,t)}catch(n){throw console.error("Failed to delete project known character:",n),n}},createChapter:async(e,t,n)=>{try{return await y0(e,t,n)}catch(r){throw console.error("Failed to create chapter:",r),r}},getChapters:async e=>{try{return await A0(e)||[]}catch(t){throw console.error("Failed to get chapters:",t),t}},getChapter:async e=>{try{return await N0(e)}catch(t){throw console.error("Failed to get chapter:",t),t}},updateChapter:async(e,t,n)=>{try{await $0(e,t,n)}catch(r){throw console.error("Failed to update chapter:",r),r}},deleteChapter:async e=>{try{await k0(e)}catch(t){throw console.error("Failed to delete chapter:",t),t}},reorderChapters:async(e,t)=>{try{await I0(e,t)}catch(n){throw console.error("Failed to reorder chapters:",n),n}},createParagraph:async(e,t,n,r,o,l)=>{try{return await x0(e,t,n,r,o,l)}catch(i){throw console.error("Failed to create paragraph:",i),i}},getParagraphs:async e=>{try{return await b0(e)||[]}catch(t){throw console.error("Failed to get paragraphs:",t),t}},getParagraph:async e=>{try{return await D0(e)}catch(t){throw console.error("Failed to get paragraph:",t),t}},updateParagraph:async(e,t,n,r,o,l,i="",a=0,u=0)=>{try{await W0(e,t,n,r,o,l,i,a,u)}catch(c){throw console.error("Failed to update paragraph:",c),c}},deleteParagraph:async e=>{try{await C0(e)}catch(t){throw console.error("Failed to delete paragraph:",t),t}},splitParagraph:async e=>{try{return await U0(e)||[]}catch(t){throw console.error("Failed to split paragraph:",t),t}},createCharacter:async(e,t,n,r)=>{try{return await v0(e,t,n,r)}catch(o){throw console.error("Failed to create character:",o),o}},getCharacters:async e=>{try{return await z0(e)||[]}catch(t){throw console.error("Failed to get characters:",t),t}},getCharacter:async e=>{try{return await P0(e)}catch(t){throw console.error("Failed to get character:",t),t}},updateCharacter:async(e,t,n,r)=>{try{await V0(e,t,n,r)}catch(o){throw console.error("Failed to update character:",o),o}},deleteCharacter:async e=>{try{await E0(e)}catch(t){throw console.error("Failed to delete character:",t),t}},getVoices:async()=>{try{return await M0()||[]}catch(e){throw console.error("Failed to get voices:",e),e}},getVoice:async e=>{try{return await T0(e)}catch(t){throw console.error("Failed to get voice:",t),t}},analyzeText:async e=>{throw new Error("Not implemented")},generateAudio:async(e,t,n,r)=>{throw new Error("Not implemented")},generateBatchAudio:async e=>{throw new Error("Not implemented")},log:async(e,t,n)=>{try{await R0(e,t,n)}catch(r){console.error("Failed to send log to backend:",r)}}},Q0=()=>{const e=Ar(),[t,n]=F.exports.useState([]),[r,o]=F.exports.useState(!1),[l,i]=F.exports.useState(!1),[a,u]=F.exports.useState({name:"",description:""}),c=async()=>{o(!0);try{const x=await W.getProjects();n(x)}catch(x){console.error("Failed to load projects:",x)}o(!1)};F.exports.useEffect(()=>{c()},[]);const g=async x=>{if(x.preventDefault(),!!a.name.trim()){o(!0);try{await W.createProject(a.name,a.description),u({name:"",description:""}),i(!1),c()}catch(k){console.error("Failed to create project:",k)}o(!1)}},y=async x=>{if(!!window.confirm("\u786E\u5B9A\u8981\u5220\u9664\u6B64\u5DE5\u7A0B\u5417\uFF1F")){o(!0);try{await W.deleteProject(x),c()}catch(k){console.error("Failed to delete project:",k)}o(!1)}},m=x=>{e(`/project/${x}`)};return h("div",{className:"home-page",children:[h("div",{className:"page-header",children:[h("div",{className:"header-content",children:[s(Di,{size:28,className:"header-icon"}),h("div",{children:[s("h1",{children:"\u542C\u58A8\u8BED - \u6709\u58F0\u5C0F\u8BF4\u5236\u4F5C"}),s("p",{children:"\u521B\u5EFA\u3001\u7F16\u8F91\u548C\u7BA1\u7406\u60A8\u7684\u6709\u58F0\u5C0F\u8BF4\u5DE5\u7A0B"})]})]}),h("button",{className:"create-project-btn",onClick:()=>i(!0),disabled:r,children:[s(Aa,{size:20}),"\u521B\u5EFA\u65B0\u5DE5\u7A0B"]})]}),s("div",{className:"projects-container",children:s("div",{className:"projects-list",children:r&&t.length===0?h("div",{className:"loading",children:[s("div",{className:"spinner"}),s("p",{children:"\u52A0\u8F7D\u4E2D..."})]}):t.length===0?h("div",{className:"empty-state",children:[s(a0,{size:64}),s("h2",{children:"\u6682\u65E0\u5DE5\u7A0B"}),s("p",{children:"\u70B9\u51FB\u4E0A\u65B9\u6309\u94AE\u521B\u5EFA\u60A8\u7684\u7B2C\u4E00\u4E2A\u6709\u58F0\u5C0F\u8BF4\u5DE5\u7A0B"})]}):t.map((x,k)=>h("div",{className:"project-item",children:[h("div",{className:"project-info",onClick:()=>m(x.id),children:[s("div",{className:"project-index",children:k+1}),h("div",{className:"project-content",children:[s("h3",{children:x.name}),s("p",{className:"project-description",children:x.description||"\u6682\u65E0\u63CF\u8FF0"}),h("div",{className:"project-meta",children:[h("span",{children:["\u521B\u5EFA\u65F6\u95F4: ",new Date(x.createdAt).toLocaleDateString()]}),h("span",{children:["\u66F4\u65B0\u65F6\u95F4: ",new Date(x.updatedAt).toLocaleDateString()]})]})]})]}),h("div",{className:"project-actions",children:[h("button",{className:"btn-primary",onClick:w=>{w.stopPropagation(),m(x.id)},disabled:r,title:"\u6253\u5F00\u9879\u76EE",children:[s(xd,{size:16}),"\u6253\u5F00"]}),h("button",{className:"btn-danger",onClick:w=>{w.stopPropagation(),y(x.id)},disabled:r,children:[s(xr,{size:16}),"\u5220\u9664"]})]})]},x.id))})}),l&&s("div",{className:"modal",children:h("div",{className:"modal-content",children:[h("div",{className:"modal-header",children:[s("h2",{children:"\u521B\u5EFA\u65B0\u5DE5\u7A0B"}),s("button",{className:"modal-close",onClick:()=>i(!1),children:"\xD7"})]}),h("form",{onSubmit:g,children:[h("div",{className:"form-group",children:[s("label",{htmlFor:"project-name",children:"\u5DE5\u7A0B\u540D\u79F0"}),s("input",{type:"text",id:"project-name",value:a.name,onChange:x=>u({...a,name:x.target.value}),placeholder:"\u8BF7\u8F93\u5165\u5DE5\u7A0B\u540D\u79F0",required:!0})]}),h("div",{className:"form-group",children:[s("label",{htmlFor:"project-description",children:"\u5DE5\u7A0B\u63CF\u8FF0"}),s("textarea",{id:"project-description",value:a.description,onChange:x=>u({...a,description:x.target.value}),placeholder:"\u8BF7\u8F93\u5165\u5DE5\u7A0B\u63CF\u8FF0",rows:3})]}),h("div",{className:"modal-footer",children:[s("button",{type:"button",className:"btn-secondary",onClick:()=>i(!1),disabled:r,children:"\u53D6\u6D88"}),s("button",{type:"submit",className:"btn-primary",disabled:r,children:"\u786E\u5B9A"})]})]})]})}),s("style",{children:`
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
      `})]})},G0=({projectId:e,onChapterSelect:t})=>{const n=Ar(),[r,o]=F.exports.useState([]),[l,i]=F.exports.useState(!1),[a,u]=F.exports.useState(!1),[c,g]=F.exports.useState({title:"",content:""}),y=async()=>{i(!0);try{const p=await W.getChapters(e);o(p)}catch(p){console.error("Failed to load chapters:",p)}i(!1)};F.exports.useEffect(()=>{y()},[e]);const m=async p=>{if(p.preventDefault(),!!c.title.trim()){i(!0);try{await W.createChapter(e,c.title,c.content),g({title:"",content:""}),u(!1),y()}catch(d){console.error("Failed to create chapter:",d)}i(!1)}},x=async p=>{if(!!window.confirm("\u786E\u5B9A\u8981\u5220\u9664\u6B64\u7AE0\u8282\u5417\uFF1F")){i(!0);try{await W.deleteChapter(p),y()}catch(d){console.error("Failed to delete chapter:",d)}i(!1)}},k=(p,d)=>{p.dataTransfer.setData("text/plain",d.toString())},w=p=>{p.preventDefault()},b=async(p,d)=>{p.preventDefault();const f=parseInt(p.dataTransfer.getData("text/plain"));if(f!==d){const v=[...r],[S]=v.splice(f,1);v.splice(d,0,S);const A=v.map(P=>P.id);try{await W.reorderChapters(e,A),o(v)}catch(P){console.error("Failed to reorder chapters:",P)}}};return h("div",{className:"chapter-manager",children:[h("div",{className:"chapter-manager-header",children:[h("div",{className:"header-left",children:[s(bi,{size:20}),s("h2",{children:"\u7AE0\u8282\u7BA1\u7406"})]}),h("button",{className:"btn-primary",onClick:()=>u(!0),disabled:l,children:[s(Aa,{size:16}),"\u65B0\u5EFA\u7AE0\u8282"]})]}),s("div",{className:"chapter-list",children:l&&r.length===0?h("div",{className:"loading-state",children:[s("div",{className:"spinner"}),s("p",{children:"\u52A0\u8F7D\u4E2D..."})]}):r.length===0?h("div",{className:"empty-state",children:[s(c0,{size:48}),s("h3",{children:"\u6682\u65E0\u7AE0\u8282"}),s("p",{children:"\u70B9\u51FB\u4E0A\u65B9\u6309\u94AE\u521B\u5EFA\u60A8\u7684\u7B2C\u4E00\u4E2A\u7AE0\u8282"})]}):r.map((p,d)=>h("div",{className:"chapter-item",draggable:!0,onDragStart:f=>k(f,d),onDragOver:w,onDrop:f=>b(f,d),children:[h("div",{className:"chapter-info",onClick:()=>n(`/project/${e}/chapter/${p.id}`),children:[s("div",{className:"chapter-index",children:d+1}),h("div",{className:"chapter-content",children:[s("h4",{children:p.title}),h("p",{className:"chapter-preview",children:[p.content.slice(0,50),p.content.length>50?"...":""]}),h("div",{className:"chapter-meta",children:[h("span",{children:["\u521B\u5EFA\u65F6\u95F4: ",new Date(p.createdAt).toLocaleDateString()]}),h("span",{children:["\u66F4\u65B0\u65F6\u95F4: ",new Date(p.updatedAt).toLocaleDateString()]})]})]})]}),h("div",{className:"chapter-actions",children:[s(u0,{size:20,className:"drag-handle"}),h("button",{className:"btn-primary",onClick:f=>{f.stopPropagation(),n(`/project/${e}/chapter/${p.id}`)},disabled:l,title:"\u6253\u5F00\u7AE0\u8282\u7F16\u8F91\u5668",children:[s(xd,{size:16}),"\u6253\u5F00"]}),h("button",{className:"btn-danger",onClick:f=>{f.stopPropagation(),x(p.id)},disabled:l,children:[s(xr,{size:16}),"\u5220\u9664"]})]})]},p.id))}),a&&s("div",{className:"modal",children:h("div",{className:"modal-content",children:[h("div",{className:"modal-header",children:[s("h2",{children:"\u521B\u5EFA\u65B0\u7AE0\u8282"}),s("button",{className:"modal-close",onClick:()=>u(!1),disabled:l,children:s(wr,{size:24})})]}),h("form",{onSubmit:m,children:[h("div",{className:"form-group",children:[s("label",{htmlFor:"chapter-title",children:"\u7AE0\u8282\u6807\u9898"}),s("input",{type:"text",id:"chapter-title",value:c.title,onChange:p=>g({...c,title:p.target.value}),placeholder:"\u8BF7\u8F93\u5165\u7AE0\u8282\u6807\u9898",required:!0})]}),h("div",{className:"form-group",children:[s("label",{htmlFor:"chapter-content",children:"\u7AE0\u8282\u5185\u5BB9"}),s("textarea",{id:"chapter-content",value:c.content,onChange:p=>g({...c,content:p.target.value}),placeholder:"\u8BF7\u8F93\u5165\u7AE0\u8282\u5185\u5BB9",rows:6})]}),h("div",{className:"modal-footer",children:[s("button",{type:"button",className:"btn-secondary",onClick:()=>u(!1),disabled:l,children:"\u53D6\u6D88"}),s("button",{type:"submit",className:"btn-primary",disabled:l,children:"\u786E\u5B9A"})]})]})]})}),s("style",{children:`
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
      `})]})},Y0=({projectId:e})=>{const[t,n]=F.exports.useState([]),[r,o]=F.exports.useState([]),[l,i]=F.exports.useState([]),[a,u]=F.exports.useState(!1),[c,g]=F.exports.useState(!1),[y,m]=F.exports.useState(null),[x,k]=F.exports.useState({name:"",description:"",voiceId:""}),[w,b]=F.exports.useState("managed");F.exports.useEffect(()=>{e&&(p(),d(),f())},[e]);const p=async()=>{u(!0);try{const N=await W.getCharacters(e);n(N)}catch(N){console.error("Failed to load characters:",N)}u(!1)},d=async()=>{try{const N=await W.getProjectKnownCharacters(e);o(N)}catch(N){console.error("Failed to load known characters:",N)}},f=async()=>{try{const N=await W.getVoices();i(N)}catch(N){console.error("Failed to load voices:",N)}},v=async N=>{if(N.preventDefault(),!!x.name.trim()){u(!0);try{await W.createCharacter(e,x.name,x.description,x.voiceId),I(),g(!1),p()}catch(Z){console.error("Failed to create character:",Z)}u(!1)}},S=async N=>{if(N.preventDefault(),!(!y||!x.name.trim())){u(!0);try{await W.updateCharacter(y.id,x.name,x.description,x.voiceId),I(),m(null),p()}catch(Z){console.error("Failed to update character:",Z)}u(!1)}},A=async N=>{if(!!window.confirm("\u786E\u5B9A\u8981\u5220\u9664\u6B64\u89D2\u8272\u5417\uFF1F")){u(!0);try{await W.deleteCharacter(N),p()}catch(Z){console.error("Failed to delete character:",Z)}u(!1)}},P=async N=>{if(!!window.confirm(`\u786E\u5B9A\u8981\u5220\u9664\u89D2\u8272 "${N}" \u5417\uFF1F`)){u(!0);try{await W.deleteProjectKnownCharacter(e,N),d()}catch(Z){console.error("Failed to delete known character:",Z)}u(!1)}},B=N=>{m(N),k({name:N.name,description:N.description||"",voiceId:N.voiceId||""})},I=()=>{k({name:"",description:"",voiceId:""})},T=N=>{const Z=l.find(we=>we.id===N);return Z?Z.name:"\u672A\u8BBE\u7F6E\u97F3\u8272"};return h("div",{className:"role-manager",children:[h("div",{className:"role-manager-header",children:[h("div",{className:"header-left",children:[s(Gu,{size:20}),s("h2",{children:"\u89D2\u8272\u7BA1\u7406"})]}),w==="managed"&&h("button",{className:"btn-primary",onClick:()=>{I(),m(null),g(!0)},disabled:a,children:[s(Aa,{size:16}),"\u6DFB\u52A0\u89D2\u8272"]})]}),h("div",{className:"tabs-container",children:[h("button",{className:`tab-button ${w==="managed"?"active":""}`,onClick:()=>b("managed"),children:[s(kd,{size:16}),"\u7BA1\u7406\u89D2\u8272"]}),h("button",{className:`tab-button ${w==="known"?"active":""}`,onClick:()=>b("known"),children:[s(Bl,{size:16}),"\u5DF2\u77E5\u89D2\u8272",r.length>0&&s("span",{className:"tab-badge",children:r.length})]})]}),s("div",{className:"role-list",children:w==="managed"?s(Ai,{children:a&&t.length===0?h("div",{className:"loading-state",children:[s("div",{className:"spinner"}),s("p",{children:"\u52A0\u8F7D\u4E2D..."})]}):t.length===0?h("div",{className:"empty-state",children:[s(_o,{size:48}),s("h3",{children:"\u6682\u65E0\u89D2\u8272"}),s("p",{children:"\u70B9\u51FB\u4E0A\u65B9\u6309\u94AE\u6DFB\u52A0\u5C0F\u8BF4\u89D2\u8272"})]}):s("div",{className:"role-grid",children:t.map(N=>h("div",{className:"role-card",children:[s("div",{className:"role-avatar",children:s(Gu,{size:28})}),h("div",{className:"role-info",children:[s("h4",{children:N.name}),N.description&&s("p",{className:"role-description",children:N.description}),h("div",{className:"voice-badge",children:[s(wd,{size:14}),s("span",{children:T(N.voiceId)})]})]}),h("div",{className:"role-actions",children:[s("button",{className:"btn-icon",onClick:()=>B(N),disabled:a,title:"\u7F16\u8F91",children:s(f0,{size:16})}),s("button",{className:"btn-icon btn-danger",onClick:()=>A(N.id),disabled:a,title:"\u5220\u9664",children:s(xr,{size:16})})]})]},N.id))})}):s(Ai,{children:a&&r.length===0?h("div",{className:"loading-state",children:[s("div",{className:"spinner"}),s("p",{children:"\u52A0\u8F7D\u4E2D..."})]}):r.length===0?h("div",{className:"empty-state",children:[s(Bl,{size:48}),s("h3",{children:"\u6682\u672A\u77E5\u89D2\u8272"}),s("p",{children:"\u4F7F\u7528 LLM \u89E3\u6790\u6587\u672C\u540E\uFF0C\u8BC6\u522B\u5230\u7684\u89D2\u8272\u4F1A\u663E\u793A\u5728\u8FD9\u91CC"})]}):s("div",{className:"role-grid",children:r.map((N,Z)=>h("div",{className:"role-card known-character-card",children:[s("div",{className:"role-avatar known-avatar",children:s(Bl,{size:28})}),h("div",{className:"role-info",children:[s("h4",{children:N.name}),N.description&&s("p",{className:"role-description",children:N.description}),h("div",{className:"known-badge",children:[s(_o,{size:12}),s("span",{children:"AI \u8BC6\u522B"})]})]}),s("div",{className:"role-actions",children:s("button",{className:"btn-icon btn-danger",onClick:()=>P(N.name),disabled:a,title:"\u5220\u9664",children:s(xr,{size:16})})})]},`${N.name}-${Z}`))})})}),(c||y)&&s("div",{className:"modal",children:h("div",{className:"modal-content",children:[h("div",{className:"modal-header",children:[s("h2",{children:y?"\u7F16\u8F91\u89D2\u8272":"\u6DFB\u52A0\u65B0\u89D2\u8272"}),s("button",{className:"modal-close",onClick:()=>{g(!1),m(null),I()},disabled:a,children:s(wr,{size:24})})]}),h("form",{onSubmit:y?S:v,children:[h("div",{className:"form-group",children:[s("label",{htmlFor:"character-name",children:"\u89D2\u8272\u540D\u79F0 *"}),s("input",{id:"character-name",type:"text",value:x.name,onChange:N=>k({...x,name:N.target.value}),placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0",required:!0,disabled:a})]}),h("div",{className:"form-group",children:[s("label",{htmlFor:"character-description",children:"\u89D2\u8272\u7B80\u4ECB"}),s("textarea",{id:"character-description",value:x.description,onChange:N=>k({...x,description:N.target.value}),placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u7B80\u4ECB\uFF08\u53EF\u9009\uFF09",rows:3,disabled:a})]}),h("div",{className:"form-group",children:[s("label",{htmlFor:"character-voice",children:"\u9009\u62E9\u97F3\u8272"}),s("div",{className:"voice-selector",children:l.length===0?h("div",{className:"no-voices",children:[s(s0,{size:16}),s("span",{children:"\u52A0\u8F7D\u97F3\u8272\u4E2D..."})]}):s("div",{className:"voice-grid",children:l.map(N=>h("div",{className:`voice-option ${x.voiceId===N.id?"selected":""}`,onClick:()=>k({...x,voiceId:N.id}),children:[h("div",{className:"voice-option-header",children:[s(Ed,{size:16}),s("span",{className:"voice-name",children:N.name})]}),s("p",{className:"voice-desc",children:N.description}),N.supportedTones&&N.supportedTones.length>0&&h("div",{className:"voice-tones",children:[N.supportedTones.slice(0,3).map((Z,we)=>s("span",{className:"tone-tag",children:Z},we)),N.supportedTones.length>3&&h("span",{className:"tone-tag",children:["+",N.supportedTones.length-3]})]})]},N.id))})})]}),h("div",{className:"modal-footer",children:[s("button",{type:"button",className:"btn-secondary",onClick:()=>{g(!1),m(null),I()},disabled:a,children:"\u53D6\u6D88"}),h("button",{type:"submit",className:"btn-primary",disabled:a,children:[s(vr,{size:16}),y?"\u4FDD\u5B58\u4FEE\u6539":"\u521B\u5EFA\u89D2\u8272"]})]})]})]})}),s("style",{children:`
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

        /* \u6807\u7B7E\u9875\u6837\u5F0F */
        .tabs-container {
          display: flex;
          gap: 4px;
          padding: 12px 20px;
          background-color: #1A2432;
          border-bottom: 1px solid #2D3E54;
        }

        .tab-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: transparent;
          border: none;
          border-radius: 8px;
          color: #94A3B8;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          position: relative;
        }

        .tab-button:hover {
          color: #E2E8F0;
          background: rgba(255, 255, 255, 0.06);
        }

        .tab-button.active {
          color: #00A8FF;
          background: rgba(0, 168, 255, 0.12);
        }

        .tab-badge {
          margin-left: 4px;
          padding: 2px 8px;
          background: #00A8FF;
          color: white;
          border-radius: 10px;
          font-size: 0.75rem;
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

        .role-card.known-character-card {
          background: linear-gradient(145deg, #1A2A35 0%, #16232D 100%);
          border-color: #2D4A3E;
        }

        .role-card.known-character-card:hover {
          border-color: #10B981;
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

        .role-avatar.known-avatar {
          background: linear-gradient(135deg, #10B981 0%, #059669 100%);
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.25);
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
      `})]})},X0=()=>{const{id:e}=gd(),t=Ar(),[n,r]=F.exports.useState(null),[o,l]=F.exports.useState(!1),[i,a]=F.exports.useState(!1),[u,c]=F.exports.useState(!1),[g,y]=F.exports.useState({name:"",description:""}),[m,x]=F.exports.useState(""),[k,w]=F.exports.useState(!1);F.exports.useEffect(()=>{e&&b(parseInt(e))},[e]);const b=async v=>{l(!0);try{const S=await W.getProject(v);r(S),S&&(y({name:S.name,description:S.description}),x(S.llmApiKey||""))}catch(S){console.error("Failed to load project:",S)}l(!1)},p=async()=>{if(!!e){l(!0);try{await W.updateProject(parseInt(e),g.name,g.description),a(!1),b(parseInt(e))}catch(v){console.error("Failed to update project:",v)}l(!1)}},d=async()=>{if(!!e){w(!0);try{await W.setProjectLLMApiKey(parseInt(e),m),c(!1),b(parseInt(e))}catch(v){console.error("Failed to save API key:",v)}w(!1)}},f=v=>v?v.length<=8?v:v.slice(0,4)+"..."+v.slice(-4):"\u672A\u8BBE\u7F6E";return o&&!n?s("div",{className:"project-details-page",children:h("div",{className:"loading-container",children:[s("div",{className:"spinner"}),s("p",{children:"\u52A0\u8F7D\u4E2D..."})]})}):n?h("div",{className:"project-details-page",children:[s("header",{className:"page-header",children:h("div",{className:"header-inner",children:[h("div",{className:"header-left",children:[h(Bo,{to:"/",className:"back-button",children:[s(jo,{size:18}),s("span",{children:"\u8FD4\u56DE"})]}),s("div",{className:"divider"}),h("div",{className:"project-title",children:[s(Di,{size:20,className:"title-icon"}),h("div",{children:[s("h1",{children:n.name}),s("p",{className:"subtitle",children:"\u6709\u58F0\u5C0F\u8BF4\u5236\u4F5C\u5DE5\u7A0B"})]})]})]}),s("div",{className:"header-right",children:s("button",{className:"btn-secondary",onClick:()=>t("/"),children:"\u8FD4\u56DE\u9996\u9875"})})]})}),s("main",{className:"main-content",children:h("div",{className:"content-wrapper",children:[h("section",{className:"project-info-section",children:[h("div",{className:"section-header",children:[h("h2",{children:[s(_o,{size:18}),"\u9879\u76EE\u6982\u89C8"]}),!i&&s("button",{className:"btn-ghost",onClick:()=>a(!0),disabled:o,children:"\u7F16\u8F91\u4FE1\u606F"})]}),s("div",{className:"project-info-card",children:i?h("div",{className:"project-info-edit",children:[h("div",{className:"form-grid",children:[h("div",{className:"form-group full-width",children:[s("label",{htmlFor:"project-name",children:"\u9879\u76EE\u540D\u79F0"}),s("input",{id:"project-name",type:"text",value:g.name,onChange:v=>y({...g,name:v.target.value}),placeholder:"\u8BF7\u8F93\u5165\u9879\u76EE\u540D\u79F0",disabled:o})]}),h("div",{className:"form-group full-width",children:[s("label",{htmlFor:"project-description",children:"\u9879\u76EE\u63CF\u8FF0"}),s("textarea",{id:"project-description",value:g.description,onChange:v=>y({...g,description:v.target.value}),placeholder:"\u8BF7\u8F93\u5165\u9879\u76EE\u63CF\u8FF0",rows:3,disabled:o})]})]}),h("div",{className:"form-actions",children:[h("button",{className:"btn-secondary",onClick:()=>{a(!1),y({name:n.name,description:n.description})},disabled:o,children:[s(wr,{size:16}),"\u53D6\u6D88"]}),h("button",{className:"btn-primary",onClick:p,disabled:o,children:[s(vr,{size:16}),"\u4FDD\u5B58\u66F4\u6539"]})]})]}):h("div",{className:"project-info-content",children:[h("div",{className:"info-grid",children:[h("div",{className:"info-item",children:[s("div",{className:"info-label",children:"\u9879\u76EE\u540D\u79F0"}),s("div",{className:"info-value",children:n.name})]}),h("div",{className:"info-item",children:[s("div",{className:"info-label",children:"\u9879\u76EE\u63CF\u8FF0"}),s("div",{className:"info-value",children:n.description||"\u6682\u65E0\u63CF\u8FF0"})]}),h("div",{className:"info-item",children:[s("div",{className:"info-label",children:"API Key"}),h("div",{className:"info-value api-key-display",children:[s(Qu,{size:14}),s("span",{children:f(n.llmApiKey)})]})]})]}),h("div",{className:"meta-row",children:[h("div",{className:"meta-item",children:[s(i0,{size:14}),h("span",{children:["\u521B\u5EFA\u4E8E ",new Date(n.createdAt).toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric"})]})]}),h("div",{className:"meta-item",children:[s(vd,{size:14}),h("span",{children:["\u66F4\u65B0\u4E8E ",new Date(n.updatedAt).toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric"})]})]})]})]})})]}),h("section",{className:"api-key-section",children:[h("div",{className:"section-header",children:[h("h2",{children:[s(Qu,{size:18}),"\u6587\u672C\u5927\u6A21\u578B API Key"]}),!u&&s("button",{className:"btn-ghost",onClick:()=>c(!0),disabled:o,children:"\u914D\u7F6E"})]}),s("div",{className:"api-key-card",children:u?h("div",{className:"api-key-edit",children:[h("div",{className:"form-group",children:[s("label",{htmlFor:"llm-api-key",children:"API Key"}),s("input",{id:"llm-api-key",type:"password",value:m,onChange:v=>x(v.target.value),placeholder:"\u8BF7\u8F93\u5165\u6587\u672C\u5927\u6A21\u578B API Key",disabled:k}),s("p",{className:"help-text",children:"\u8F93\u5165\u706B\u5C71\u5F15\u64CE\u6587\u672C\u5927\u6A21\u578B API Key"})]}),h("div",{className:"form-actions",children:[h("button",{className:"btn-secondary",onClick:()=>{c(!1),x(n.llmApiKey||"")},disabled:k,children:[s(wr,{size:16}),"\u53D6\u6D88"]}),h("button",{className:"btn-primary",onClick:d,disabled:k,children:[s(vr,{size:16}),k?"\u4FDD\u5B58\u4E2D...":"\u4FDD\u5B58"]})]})]}):h("div",{className:"api-key-content",children:[s("div",{className:"api-key-description",children:s("p",{children:"\u5728\u6B64\u9879\u76EE\u4E2D\u4F7F\u7528\u81EA\u5B9A\u4E49\u7684 API Key \u6765\u8C03\u7528\u6587\u672C\u5927\u6A21\u578B\u670D\u52A1\u3002\u5982\u679C\u672A\u8BBE\u7F6E\uFF0C\u5C06\u4F7F\u7528\u7CFB\u7EDF\u9ED8\u8BA4\u914D\u7F6E\u3002"})}),h("div",{className:"api-key-status",children:[s("div",{className:`status-indicator ${n.llmApiKey?"active":"inactive"}`,children:n.llmApiKey?"\u5DF2\u914D\u7F6E":"\u672A\u914D\u7F6E"}),n.llmApiKey&&s("span",{className:"api-key-masked",children:f(n.llmApiKey)})]})]})})]}),h("section",{className:"character-section",children:[s("div",{className:"section-header",children:h("h2",{children:[s(kd,{size:18}),"\u89D2\u8272\u7BA1\u7406"]})}),s("div",{className:"role-manager-wrapper",children:s(Y0,{projectId:parseInt(e||"0")})})]}),h("section",{className:"chapter-section",children:[s("div",{className:"section-header",children:h("h2",{children:[s(Di,{size:18}),"\u7AE0\u8282\u7BA1\u7406"]})}),s("div",{className:"chapter-manager-wrapper",children:s(G0,{projectId:parseInt(e||"0")})})]})]})}),s("style",{children:`
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
      `})]}):s("div",{className:"project-details-page",children:h("div",{className:"error-container",children:[s("h2",{children:"\u9879\u76EE\u4E0D\u5B58\u5728"}),h(Bo,{to:"/",className:"btn-primary",children:[s(jo,{size:16}),"\u8FD4\u56DE\u9996\u9875"]})]})})},Z0="neutral",J0="happy",q0="sad",em="angry",tm="excited",nm="fearful",rm="surprised",om="disgusted",lm=[{value:Z0,label:"\u4E2D\u6027"},{value:J0,label:"\u5F00\u5FC3"},{value:q0,label:"\u60B2\u4F24"},{value:em,label:"\u6124\u6012"},{value:tm,label:"\u5174\u594B"},{value:nm,label:"\u6050\u60E7"},{value:rm,label:"\u60CA\u8BB6"},{value:om,label:"\u538C\u6076"}],Yu=1,im=()=>{const{projectId:e,chapterId:t}=gd();Ar();const[n,r]=F.exports.useState(null),[o,l]=F.exports.useState([]),[i,a]=F.exports.useState([]),[u,c]=F.exports.useState([]),[g,y]=F.exports.useState(!0),[m,x]=F.exports.useState(null),[k,w]=F.exports.useState(!1),[b,p]=F.exports.useState(0),[d,f]=F.exports.useState(0),[v,S]=F.exports.useState({content:"",speaker:"",tone:"neutral",voiceId:"",speed:Yu}),[A,P]=F.exports.useState(new Set),[B,I]=F.exports.useState(!1),[T,N]=F.exports.useState(!1),[Z,we]=F.exports.useState(!1),[Qt,Gt]=F.exports.useState(""),[st,Yt]=F.exports.useState(!1),[z,_]=F.exports.useState(!1),L=F.exports.useRef(null);F.exports.useEffect(()=>{t&&Q()},[t,e]);const Q=async()=>{y(!0);try{const E=await W.getChapter(parseInt(t||"0"));if(r(E),Gt(E.content||""),e){const nl=await W.getCharacters(parseInt(e));a(nl)}const j=await W.getVoices();c(j);const de=[...await W.getParagraphs(parseInt(t||"0"))].sort((nl,zd)=>nl.orderIndex-zd.orderIndex);l(de),Re(de),de.length>0&&zn(de[0].id)}catch(E){console.error("Failed to load data:",E)}y(!1)},ee=()=>{n&&Gt(n.content||""),we(!0)},Xt=async()=>{if(!!n){Yt(!0);try{await W.updateChapter(n.id,n.title,Qt),r(E=>E?{...E,content:Qt}:null),we(!1),N(!0),setTimeout(()=>N(!1),2e3)}catch(E){console.error("Failed to save chapter:",E)}Yt(!1)}},Re=E=>{const j=E.reduce((le,de)=>le+(de.duration||0),0);f(j)},Je=(()=>{let E=0;return o.map(j=>{const le=E,de=E+(j.duration||2);return E=de,{id:j.id,start:le,end:de,paragraph:j}})})(),Ke=E=>A.has(E),zn=E=>{x(E);const j=o.find(le=>le.id===E);j&&S({content:j.content,speaker:j.speaker||"",tone:j.tone||"neutral",voiceId:j.voiceId||"",speed:j.speed||Yu})},Dn=(E,j)=>{S({...v,[E]:j}),m&&P(le=>new Set(le).add(m))},Cd=()=>{if(!m)return;const E=o.map(j=>j.id===m?{...j,...v}:j);l(E)},Fd=async()=>{if(A.size!==0){I(!0);try{for(const E of A){const j=o.find(le=>le.id===E);j&&await W.updateParagraph(j.id,j.content,j.speaker,j.tone,j.voiceId,j.speed,j.audioPath,j.duration,j.orderIndex)}P(new Set),N(!0),setTimeout(()=>N(!1),2e3)}catch(E){console.error("Failed to save paragraphs:",E)}I(!1)}},Sd=E=>{if(!window.confirm("\u786E\u5B9A\u8981\u5220\u9664\u6B64\u6BB5\u843D\u5417\uFF1F"))return;const j=o.filter(le=>le.id!==E);l(j),Re(j),P(le=>{const de=new Set(le);return de.delete(E),de}),m===E&&(j.length>0?zn(j[0].id):x(null))},Nd=async E=>{console.log("Generating audio for paragraph:",E)},Ad=async()=>{if(!!t&&!(o.length>0&&!window.confirm("\u5DF2\u5B58\u5728\u6BB5\u843D\uFF0C\u786E\u5B9A\u8981\u91CD\u65B0\u751F\u6210\u5417\uFF1F\u8FD9\u5C06\u8986\u76D6\u73B0\u6709\u6BB5\u843D\u3002"))){_(!0);try{const j=[...await W.splitParagraph(parseInt(t))].sort((le,de)=>le.orderIndex-de.orderIndex);l(j),Re(j),P(new Set),j.length>0?zn(j[0].id):x(null),N(!0),setTimeout(()=>N(!1),2e3)}catch(E){console.error("Failed to generate script:",E),alert("\u751F\u6210\u811A\u672C\u5931\u8D25\uFF1A"+E.message)}_(!1)}},Pd=()=>{w(!k)},Pa=E=>{const j=Math.floor(E/60),le=Math.floor(E%60),de=Math.floor(E%1*100);return`${j.toString().padStart(2,"0")}:${le.toString().padStart(2,"0")}:${de.toString().padStart(2,"0")}`},tl=E=>({\u65C1\u767D:"#00A8FF",\u7537\u4E3B\u89D2:"#FF6B6B",\u5973\u4E3B\u89D2:"#FF8EC7"})[E]||"#95A5A6",zr=m?o.find(E=>E.id===m):null;return g?s("div",{className:"chapter-editor",children:h("div",{className:"loading-container",children:[s("div",{className:"spinner"}),s("p",{children:"\u52A0\u8F7D\u4E2D..."})]})}):n?h("div",{className:"chapter-editor",children:[h("header",{className:"editor-header",children:[h("div",{className:"header-left",children:[h(Bo,{to:`/project/${e}`,className:"back-button",children:[s(jo,{size:18}),s("span",{children:"\u8FD4\u56DE"})]}),s("div",{className:"divider"}),h("div",{className:"chapter-title",children:[s("h1",{children:n.title}),s("p",{className:"subtitle",children:"\u7AE0\u8282\u7F16\u8F91 \xB7 \u65F6\u95F4\u8F74\u89C6\u56FE"})]}),A.size>0&&h("div",{className:"dirty-indicator",children:[s(bl,{size:14}),h("span",{children:[A.size," \u4E2A\u672A\u4FDD\u5B58\u4FEE\u6539"]})]}),T&&h("div",{className:"save-success",children:[s(Ku,{size:14}),s("span",{children:"\u5DF2\u4FDD\u5B58"})]})]}),h("div",{className:"header-right",children:[h("button",{className:"btn-secondary",onClick:ee,children:[s(bi,{size:16}),"\u7F16\u8F91\u6587\u672C"]}),h("button",{className:`btn-save ${A.size>0?"dirty":""}`,onClick:Fd,disabled:A.size===0||B,children:[s(vr,{size:16}),B?"\u4FDD\u5B58\u4E2D...":"\u4FDD\u5B58"]}),h("button",{className:"btn-primary",onClick:Ad,disabled:z,children:[s(_o,{size:16}),z?"\u751F\u6210\u4E2D...":o.length>0?"\u91CD\u65B0\u751F\u6210\u811A\u672C":"\u751F\u6210\u811A\u672C"]})]})]}),h("div",{className:"editor-main",children:[h("div",{className:"upper-section",children:[h("div",{className:"paragraph-list-panel",children:[h("div",{className:"panel-header",children:[s("h2",{children:"\u6BB5\u843D\u5217\u8868"}),h("span",{className:"paragraph-count",children:[o.length," \u4E2A\u6BB5\u843D"]})]}),s("div",{className:"paragraph-list-content",children:o.map((E,j)=>h("div",{className:`paragraph-item ${m===E.id?"selected":""}`,onClick:()=>zn(E.id),children:[h("div",{className:"paragraph-item-left",children:[s("div",{className:"paragraph-index",children:j+1}),s("div",{className:"speaker-dot",style:{backgroundColor:tl(E.speaker)}})]}),h("div",{className:"paragraph-item-content",children:[h("div",{className:"paragraph-item-header",children:[s("span",{className:"speaker-label",style:{color:tl(E.speaker)},children:E.speaker||"\u65C1\u767D"}),h("span",{className:"paragraph-duration",children:[s(vd,{size:10}),(E.duration||0).toFixed(1),"s"]}),Ke(E.id)&&s("span",{className:"dirty-dot",title:"\u6709\u672A\u4FDD\u5B58\u7684\u4FEE\u6539"})]}),s("p",{className:"paragraph-item-text",children:E.content})]}),s("div",{className:"paragraph-item-right",children:E.audioPath?s("span",{className:"has-audio-icon",children:s(Ed,{size:14})}):null})]},E.id))})]}),h("div",{className:"paragraph-detail-panel",children:[h("div",{className:"panel-header",children:[s("h2",{children:"\u6BB5\u843D\u8BE6\u60C5"}),m&&Ke(m)&&h("span",{className:"dirty-badge",children:[s(bl,{size:12}),"\u672A\u4FDD\u5B58"]})]}),zr?h("div",{className:"panel-content",children:[h("div",{className:"form-group",children:[s("label",{children:"\u6587\u672C\u5185\u5BB9"}),s("textarea",{value:v.content,onChange:E=>Dn("content",E.target.value),rows:5})]}),h("div",{className:"form-row",children:[h("div",{className:"form-group",children:[s("label",{children:"\u8BF4\u8BDD\u89D2\u8272"}),h("select",{value:v.speaker,onChange:E=>Dn("speaker",E.target.value),children:[s("option",{value:"",children:"\u65C1\u767D"}),i.map(E=>s("option",{value:E.name,children:E.name},E.id))]})]}),h("div",{className:"form-group",children:[s("label",{children:"\u97F3\u8272"}),h("select",{value:v.voiceId,onChange:E=>Dn("voiceId",E.target.value),children:[s("option",{value:"",children:"\u8BF7\u9009\u62E9\u97F3\u8272"}),u.map(E=>s("option",{value:E.id,children:E.name},E.id))]})]})]}),h("div",{className:"form-row",children:[h("div",{className:"form-group",children:[s("label",{children:"\u60C5\u611F"}),s("select",{value:v.tone,onChange:E=>Dn("tone",E.target.value),children:lm.map(E=>s("option",{value:E.value,children:E.label},E.value))})]}),h("div",{className:"form-group",children:[h("div",{className:"label-row",children:[s("label",{children:"\u8BED\u901F"}),s("span",{className:"value-badge",children:v.speed.toFixed(2)})]}),s("input",{type:"range",min:"0.5",max:"2.0",step:"0.05",value:v.speed,onChange:E=>Dn("speed",parseFloat(E.target.value))}),h("div",{className:"range-labels",children:[s("span",{children:"0.5x"}),s("span",{children:"1.0x"}),s("span",{children:"2.0x"})]})]})]}),h("div",{className:"action-buttons",children:[h("button",{className:"btn-generate",onClick:()=>Nd(zr.id),children:[s(g0,{size:16}),"\u751F\u6210\u97F3\u9891"]}),h("button",{className:"btn-delete",onClick:()=>Sd(zr.id),children:[s(xr,{size:16}),"\u5220\u9664"]})]}),s("div",{className:"save-bar",children:h("button",{className:"btn-secondary",onClick:Cd,disabled:!Ke(zr.id),children:[s(Ku,{size:16}),"\u5E94\u7528\u4FEE\u6539"]})})]}):h("div",{className:"empty-properties",children:[s(m0,{size:40}),s("p",{children:"\u9009\u62E9\u4E00\u4E2A\u6BB5\u843D\u6765\u7F16\u8F91\u5C5E\u6027"})]})]})]}),s("div",{className:"lower-section",children:h("div",{className:"timeline-panel",children:[s("div",{className:"panel-header",children:h("div",{className:"transport-controls",children:[s("button",{className:`play-btn ${k?"playing":""}`,onClick:Pd,children:k?s(p0,{size:20}):s(h0,{size:20})}),h("div",{className:"time-display",children:[Pa(b)," / ",Pa(d)]})]})}),h("div",{className:"timeline-container",ref:L,children:[s("div",{className:"timeline-ruler",children:Array.from({length:Math.ceil(d)+1}).map((E,j)=>s("div",{className:"ruler-mark",style:{left:`${j/d*100}%`},children:h("span",{className:"ruler-label",children:[j,"s"]})},j))}),s("div",{className:"timeline-track",children:Je.map(E=>h("div",{className:`timeline-clip ${m===E.id?"selected":""} ${Ke(E.id)?"dirty":""}`,style:{left:`${E.start/d*100}%`,width:`${(E.end-E.start)/d*100}%`,backgroundColor:tl(E.paragraph.speaker)},onClick:()=>zn(E.id),children:[h("div",{className:"clip-content",children:[h("div",{className:"clip-speaker",children:[s(wd,{size:14}),E.paragraph.speaker||"\u65C1\u767D"]}),h("div",{className:"clip-text",children:[E.paragraph.content.slice(0,40),E.paragraph.content.length>40?"...":""]})]}),Ke(E.id)&&s("div",{className:"clip-dirty-indicator",children:s(bl,{size:10})}),E.paragraph.audioPath&&s("div",{className:"clip-indicator",children:s(d0,{size:12})})]},E.id))}),s("div",{className:"playhead",style:{left:`${b/d*100}%`}})]})]})})]}),Z&&s("div",{className:"text-editor-modal",children:h("div",{className:"text-editor-content",children:[h("div",{className:"text-editor-header",children:[h("div",{className:"text-editor-title",children:[s(bi,{size:20}),s("h2",{children:"\u7F16\u8F91\u7AE0\u8282\u6587\u672C"})]}),s("button",{className:"modal-close",onClick:()=>we(!1),disabled:st,children:s(wr,{size:24})})]}),s("div",{className:"text-editor-body",children:s("textarea",{value:Qt,onChange:E=>Gt(E.target.value),placeholder:"\u8BF7\u8F93\u5165\u7AE0\u8282\u5185\u5BB9...",className:"chapter-textarea"})}),h("div",{className:"text-editor-footer",children:[s("button",{className:"btn-secondary",onClick:()=>{we(!1),n&&Gt(n.content||"")},disabled:st,children:"\u53D6\u6D88"}),h("button",{className:"btn-primary",onClick:Xt,disabled:st,children:[s(vr,{size:16}),st?"\u4FDD\u5B58\u4E2D...":"\u4FDD\u5B58"]})]})]})}),s("style",{children:`
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
      `})]}):s("div",{className:"chapter-editor",children:h("div",{className:"error-container",children:[s("h2",{children:"\u7AE0\u8282\u4E0D\u5B58\u5728"}),h(Bo,{to:`/project/${e}`,className:"btn-primary",children:[s(jo,{size:16}),"\u8FD4\u56DE\u9879\u76EE"]})]})})};function am(){return s(t0,{children:s("div",{className:"app",children:h(Xh,{children:[s(lo,{path:"/",element:s(Q0,{})}),s(lo,{path:"/project/:id",element:s(X0,{})}),s(lo,{path:"/project/:projectId/chapter/:chapterId",element:s(im,{})})]})})})}const um="Frontend",Jt={debug:console.debug.bind(console),info:console.info.bind(console),warn:console.warn.bind(console),error:console.error.bind(console),log:console.log.bind(console)};let Xu=!1;const sm=()=>typeof window.go<"u",In=(e,...t)=>{if(!!sm())try{const n=t.map(r=>{if(typeof r=="object")try{return JSON.stringify(r)}catch{return String(r)}return String(r)}).join(" ");W.log(e,n,um)}catch(n){Jt.debug("Failed to send log to backend:",n)}},cm=()=>{Xu||(Xu=!0,console.debug=(...e)=>{Jt.debug(...e),In("debug",...e)},console.info=(...e)=>{Jt.info(...e),In("info",...e)},console.warn=(...e)=>{Jt.warn(...e),In("warn",...e)},console.error=(...e)=>{Jt.error(...e),In("error",...e)},console.log=(...e)=>{Jt.log(...e),In("info",...e)},window.addEventListener("unhandledrejection",e=>{console.error("Unhandled Promise rejection:",e.reason)}),window.addEventListener("error",e=>{console.error("Uncaught error:",e.message,"at",e.filename,":",e.lineno,":",e.colno)}),console.info("\u65E5\u5FD7\u7CFB\u7EDF\u521D\u59CB\u5316\u5B8C\u6210"))};cm();const dm=document.getElementById("root"),pm=id(dm);pm.render(s(ls.StrictMode,{children:s(am,{})}));
