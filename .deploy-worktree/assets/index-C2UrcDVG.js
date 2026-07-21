function Dv(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Uv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Am={exports:{}},Rl={},Cm={exports:{}},Oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bo=Symbol.for("react.element"),Iv=Symbol.for("react.portal"),Nv=Symbol.for("react.fragment"),Fv=Symbol.for("react.strict_mode"),Ov=Symbol.for("react.profiler"),kv=Symbol.for("react.provider"),Bv=Symbol.for("react.context"),zv=Symbol.for("react.forward_ref"),Hv=Symbol.for("react.suspense"),Vv=Symbol.for("react.memo"),Gv=Symbol.for("react.lazy"),ah=Symbol.iterator;function Wv(t){return t===null||typeof t!="object"?null:(t=ah&&t[ah]||t["@@iterator"],typeof t=="function"?t:null)}var Rm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pm=Object.assign,bm={};function Us(t,e,n){this.props=t,this.context=e,this.refs=bm,this.updater=n||Rm}Us.prototype.isReactComponent={};Us.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Us.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Lm(){}Lm.prototype=Us.prototype;function Yf(t,e,n){this.props=t,this.context=e,this.refs=bm,this.updater=n||Rm}var $f=Yf.prototype=new Lm;$f.constructor=Yf;Pm($f,Us.prototype);$f.isPureReactComponent=!0;var lh=Array.isArray,Dm=Object.prototype.hasOwnProperty,qf={current:null},Um={key:!0,ref:!0,__self:!0,__source:!0};function Im(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Dm.call(e,i)&&!Um.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:bo,type:t,key:s,ref:o,props:r,_owner:qf.current}}function Xv(t,e){return{$$typeof:bo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Kf(t){return typeof t=="object"&&t!==null&&t.$$typeof===bo}function jv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var uh=/\/+/g;function iu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?jv(""+t.key):e.toString(36)}function La(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case bo:case Iv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+iu(o,0):i,lh(r)?(n="",t!=null&&(n=t.replace(uh,"$&/")+"/"),La(r,e,n,"",function(u){return u})):r!=null&&(Kf(r)&&(r=Xv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(uh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",lh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+iu(s,a);o+=La(s,e,n,l,r)}else if(l=Wv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+iu(s,a++),o+=La(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Vo(t,e,n){if(t==null)return t;var i=[],r=0;return La(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Yv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Wt={current:null},Da={transition:null},$v={ReactCurrentDispatcher:Wt,ReactCurrentBatchConfig:Da,ReactCurrentOwner:qf};function Nm(){throw Error("act(...) is not supported in production builds of React.")}Oe.Children={map:Vo,forEach:function(t,e,n){Vo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Vo(t,function(){e++}),e},toArray:function(t){return Vo(t,function(e){return e})||[]},only:function(t){if(!Kf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Oe.Component=Us;Oe.Fragment=Nv;Oe.Profiler=Ov;Oe.PureComponent=Yf;Oe.StrictMode=Fv;Oe.Suspense=Hv;Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$v;Oe.act=Nm;Oe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Pm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=qf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Dm.call(e,l)&&!Um.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:bo,type:t.type,key:r,ref:s,props:i,_owner:o}};Oe.createContext=function(t){return t={$$typeof:Bv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:kv,_context:t},t.Consumer=t};Oe.createElement=Im;Oe.createFactory=function(t){var e=Im.bind(null,t);return e.type=t,e};Oe.createRef=function(){return{current:null}};Oe.forwardRef=function(t){return{$$typeof:zv,render:t}};Oe.isValidElement=Kf;Oe.lazy=function(t){return{$$typeof:Gv,_payload:{_status:-1,_result:t},_init:Yv}};Oe.memo=function(t,e){return{$$typeof:Vv,type:t,compare:e===void 0?null:e}};Oe.startTransition=function(t){var e=Da.transition;Da.transition={};try{t()}finally{Da.transition=e}};Oe.unstable_act=Nm;Oe.useCallback=function(t,e){return Wt.current.useCallback(t,e)};Oe.useContext=function(t){return Wt.current.useContext(t)};Oe.useDebugValue=function(){};Oe.useDeferredValue=function(t){return Wt.current.useDeferredValue(t)};Oe.useEffect=function(t,e){return Wt.current.useEffect(t,e)};Oe.useId=function(){return Wt.current.useId()};Oe.useImperativeHandle=function(t,e,n){return Wt.current.useImperativeHandle(t,e,n)};Oe.useInsertionEffect=function(t,e){return Wt.current.useInsertionEffect(t,e)};Oe.useLayoutEffect=function(t,e){return Wt.current.useLayoutEffect(t,e)};Oe.useMemo=function(t,e){return Wt.current.useMemo(t,e)};Oe.useReducer=function(t,e,n){return Wt.current.useReducer(t,e,n)};Oe.useRef=function(t){return Wt.current.useRef(t)};Oe.useState=function(t){return Wt.current.useState(t)};Oe.useSyncExternalStore=function(t,e,n){return Wt.current.useSyncExternalStore(t,e,n)};Oe.useTransition=function(){return Wt.current.useTransition()};Oe.version="18.3.1";Cm.exports=Oe;var xe=Cm.exports;const Fm=Uv(xe),qv=Dv({__proto__:null,default:Fm},[xe]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kv=xe,Zv=Symbol.for("react.element"),Qv=Symbol.for("react.fragment"),Jv=Object.prototype.hasOwnProperty,e0=Kv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t0={key:!0,ref:!0,__self:!0,__source:!0};function Om(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Jv.call(e,i)&&!t0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Zv,type:t,key:s,ref:o,props:r,_owner:e0.current}}Rl.Fragment=Qv;Rl.jsx=Om;Rl.jsxs=Om;Am.exports=Rl;var tt=Am.exports,oc={},km={exports:{}},_n={},Bm={exports:{}},zm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,Y){var K=L.length;L.push(Y);e:for(;0<K;){var re=K-1>>>1,Ee=L[re];if(0<r(Ee,Y))L[re]=Y,L[K]=Ee,K=re;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var Y=L[0],K=L.pop();if(K!==Y){L[0]=K;e:for(var re=0,Ee=L.length,ke=Ee>>>1;re<ke;){var W=2*(re+1)-1,te=L[W],ce=W+1,ae=L[ce];if(0>r(te,K))ce<Ee&&0>r(ae,te)?(L[re]=ae,L[ce]=K,re=ce):(L[re]=te,L[W]=K,re=W);else if(ce<Ee&&0>r(ae,K))L[re]=ae,L[ce]=K,re=ce;else break e}}return Y}function r(L,Y){var K=L.sortIndex-Y.sortIndex;return K!==0?K:L.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],f=1,d=null,h=3,m=!1,v=!1,y=!1,p=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(L){for(var Y=n(u);Y!==null;){if(Y.callback===null)i(u);else if(Y.startTime<=L)i(u),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(u)}}function M(L){if(y=!1,_(L),!v)if(n(l)!==null)v=!0,H(R);else{var Y=n(u);Y!==null&&Q(M,Y.startTime-L)}}function R(L,Y){v=!1,y&&(y=!1,c(P),P=-1),m=!0;var K=h;try{for(_(Y),d=n(l);d!==null&&(!(d.expirationTime>Y)||L&&!E());){var re=d.callback;if(typeof re=="function"){d.callback=null,h=d.priorityLevel;var Ee=re(d.expirationTime<=Y);Y=t.unstable_now(),typeof Ee=="function"?d.callback=Ee:d===n(l)&&i(l),_(Y)}else i(l);d=n(l)}if(d!==null)var ke=!0;else{var W=n(u);W!==null&&Q(M,W.startTime-Y),ke=!1}return ke}finally{d=null,h=K,m=!1}}var C=!1,w=null,P=-1,$=5,x=-1;function E(){return!(t.unstable_now()-x<$)}function z(){if(w!==null){var L=t.unstable_now();x=L;var Y=!0;try{Y=w(!0,L)}finally{Y?B():(C=!1,w=null)}}else C=!1}var B;if(typeof g=="function")B=function(){g(z)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,Z=G.port2;G.port1.onmessage=z,B=function(){Z.postMessage(null)}}else B=function(){p(z,0)};function H(L){w=L,C||(C=!0,B())}function Q(L,Y){P=p(function(){L(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,H(R))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(h){case 1:case 2:case 3:var Y=3;break;default:Y=h}var K=h;h=Y;try{return L()}finally{h=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,Y){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var K=h;h=L;try{return Y()}finally{h=K}},t.unstable_scheduleCallback=function(L,Y,K){var re=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?re+K:re):K=re,L){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=K+Ee,L={id:f++,callback:Y,priorityLevel:L,startTime:K,expirationTime:Ee,sortIndex:-1},K>re?(L.sortIndex=K,e(u,L),n(l)===null&&L===n(u)&&(y?(c(P),P=-1):y=!0,Q(M,K-re))):(L.sortIndex=Ee,e(l,L),v||m||(v=!0,H(R))),L},t.unstable_shouldYield=E,t.unstable_wrapCallback=function(L){var Y=h;return function(){var K=h;h=Y;try{return L.apply(this,arguments)}finally{h=K}}}})(zm);Bm.exports=zm;var n0=Bm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i0=xe,gn=n0;function ee(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hm=new Set,fo={};function Pr(t,e){ys(t,e),ys(t+"Capture",e)}function ys(t,e){for(fo[t]=e,t=0;t<e.length;t++)Hm.add(e[t])}var hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ac=Object.prototype.hasOwnProperty,r0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ch={},fh={};function s0(t){return ac.call(fh,t)?!0:ac.call(ch,t)?!1:r0.test(t)?fh[t]=!0:(ch[t]=!0,!1)}function o0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function a0(t,e,n,i){if(e===null||typeof e>"u"||o0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Xt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ut={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ut[t]=new Xt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ut[e]=new Xt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ut[t]=new Xt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ut[t]=new Xt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ut[t]=new Xt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ut[t]=new Xt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ut[t]=new Xt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ut[t]=new Xt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ut[t]=new Xt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Zf=/[\-:]([a-z])/g;function Qf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Zf,Qf);Ut[e]=new Xt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Zf,Qf);Ut[e]=new Xt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Zf,Qf);Ut[e]=new Xt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ut[t]=new Xt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ut.xlinkHref=new Xt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ut[t]=new Xt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Jf(t,e,n,i){var r=Ut.hasOwnProperty(e)?Ut[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(a0(e,n,r,i)&&(n=null),i||r===null?s0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var xi=i0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Go=Symbol.for("react.element"),qr=Symbol.for("react.portal"),Kr=Symbol.for("react.fragment"),ed=Symbol.for("react.strict_mode"),lc=Symbol.for("react.profiler"),Vm=Symbol.for("react.provider"),Gm=Symbol.for("react.context"),td=Symbol.for("react.forward_ref"),uc=Symbol.for("react.suspense"),cc=Symbol.for("react.suspense_list"),nd=Symbol.for("react.memo"),Ri=Symbol.for("react.lazy"),Wm=Symbol.for("react.offscreen"),dh=Symbol.iterator;function Os(t){return t===null||typeof t!="object"?null:(t=dh&&t[dh]||t["@@iterator"],typeof t=="function"?t:null)}var dt=Object.assign,ru;function Zs(t){if(ru===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ru=e&&e[1]||""}return`
`+ru+t}var su=!1;function ou(t,e){if(!t||su)return"";su=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{su=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Zs(t):""}function l0(t){switch(t.tag){case 5:return Zs(t.type);case 16:return Zs("Lazy");case 13:return Zs("Suspense");case 19:return Zs("SuspenseList");case 0:case 2:case 15:return t=ou(t.type,!1),t;case 11:return t=ou(t.type.render,!1),t;case 1:return t=ou(t.type,!0),t;default:return""}}function fc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Kr:return"Fragment";case qr:return"Portal";case lc:return"Profiler";case ed:return"StrictMode";case uc:return"Suspense";case cc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Gm:return(t.displayName||"Context")+".Consumer";case Vm:return(t._context.displayName||"Context")+".Provider";case td:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case nd:return e=t.displayName||null,e!==null?e:fc(t.type)||"Memo";case Ri:e=t._payload,t=t._init;try{return fc(t(e))}catch{}}return null}function u0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fc(e);case 8:return e===ed?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Yi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Xm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function c0(t){var e=Xm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Wo(t){t._valueTracker||(t._valueTracker=c0(t))}function jm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Xm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Za(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function dc(t,e){var n=e.checked;return dt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function hh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Yi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ym(t,e){e=e.checked,e!=null&&Jf(t,"checked",e,!1)}function hc(t,e){Ym(t,e);var n=Yi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?pc(t,e.type,n):e.hasOwnProperty("defaultValue")&&pc(t,e.type,Yi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ph(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function pc(t,e,n){(e!=="number"||Za(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Qs=Array.isArray;function us(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Yi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function mc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ee(91));return dt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function mh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ee(92));if(Qs(n)){if(1<n.length)throw Error(ee(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Yi(n)}}function $m(t,e){var n=Yi(e.value),i=Yi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function gh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function qm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?qm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xo,Km=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Xo=Xo||document.createElement("div"),Xo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ho(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var no={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},f0=["Webkit","ms","Moz","O"];Object.keys(no).forEach(function(t){f0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),no[e]=no[t]})});function Zm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||no.hasOwnProperty(t)&&no[t]?(""+e).trim():e+"px"}function Qm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Zm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var d0=dt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _c(t,e){if(e){if(d0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ee(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ee(62))}}function vc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xc=null;function id(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var yc=null,cs=null,fs=null;function _h(t){if(t=Uo(t)){if(typeof yc!="function")throw Error(ee(280));var e=t.stateNode;e&&(e=Ul(e),yc(t.stateNode,t.type,e))}}function Jm(t){cs?fs?fs.push(t):fs=[t]:cs=t}function eg(){if(cs){var t=cs,e=fs;if(fs=cs=null,_h(t),e)for(t=0;t<e.length;t++)_h(e[t])}}function tg(t,e){return t(e)}function ng(){}var au=!1;function ig(t,e,n){if(au)return t(e,n);au=!0;try{return tg(t,e,n)}finally{au=!1,(cs!==null||fs!==null)&&(ng(),eg())}}function po(t,e){var n=t.stateNode;if(n===null)return null;var i=Ul(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ee(231,e,typeof n));return n}var Sc=!1;if(hi)try{var ks={};Object.defineProperty(ks,"passive",{get:function(){Sc=!0}}),window.addEventListener("test",ks,ks),window.removeEventListener("test",ks,ks)}catch{Sc=!1}function h0(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var io=!1,Qa=null,Ja=!1,Mc=null,p0={onError:function(t){io=!0,Qa=t}};function m0(t,e,n,i,r,s,o,a,l){io=!1,Qa=null,h0.apply(p0,arguments)}function g0(t,e,n,i,r,s,o,a,l){if(m0.apply(this,arguments),io){if(io){var u=Qa;io=!1,Qa=null}else throw Error(ee(198));Ja||(Ja=!0,Mc=u)}}function br(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function rg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function vh(t){if(br(t)!==t)throw Error(ee(188))}function _0(t){var e=t.alternate;if(!e){if(e=br(t),e===null)throw Error(ee(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return vh(r),t;if(s===i)return vh(r),e;s=s.sibling}throw Error(ee(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ee(189))}}if(n.alternate!==i)throw Error(ee(190))}if(n.tag!==3)throw Error(ee(188));return n.stateNode.current===n?t:e}function sg(t){return t=_0(t),t!==null?og(t):null}function og(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=og(t);if(e!==null)return e;t=t.sibling}return null}var ag=gn.unstable_scheduleCallback,xh=gn.unstable_cancelCallback,v0=gn.unstable_shouldYield,x0=gn.unstable_requestPaint,gt=gn.unstable_now,y0=gn.unstable_getCurrentPriorityLevel,rd=gn.unstable_ImmediatePriority,lg=gn.unstable_UserBlockingPriority,el=gn.unstable_NormalPriority,S0=gn.unstable_LowPriority,ug=gn.unstable_IdlePriority,Pl=null,$n=null;function M0(t){if($n&&typeof $n.onCommitFiberRoot=="function")try{$n.onCommitFiberRoot(Pl,t,void 0,(t.current.flags&128)===128)}catch{}}var zn=Math.clz32?Math.clz32:w0,E0=Math.log,T0=Math.LN2;function w0(t){return t>>>=0,t===0?32:31-(E0(t)/T0|0)|0}var jo=64,Yo=4194304;function Js(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function tl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Js(a):(s&=o,s!==0&&(i=Js(s)))}else o=n&~r,o!==0?i=Js(o):s!==0&&(i=Js(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-zn(e),r=1<<n,i|=t[n],e&=~r;return i}function A0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function C0(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-zn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=A0(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Ec(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function cg(){var t=jo;return jo<<=1,!(jo&4194240)&&(jo=64),t}function lu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Lo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-zn(e),t[e]=n}function R0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-zn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function sd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-zn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Qe=0;function fg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var dg,od,hg,pg,mg,Tc=!1,$o=[],Oi=null,ki=null,Bi=null,mo=new Map,go=new Map,Li=[],P0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yh(t,e){switch(t){case"focusin":case"focusout":Oi=null;break;case"dragenter":case"dragleave":ki=null;break;case"mouseover":case"mouseout":Bi=null;break;case"pointerover":case"pointerout":mo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":go.delete(e.pointerId)}}function Bs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Uo(e),e!==null&&od(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function b0(t,e,n,i,r){switch(e){case"focusin":return Oi=Bs(Oi,t,e,n,i,r),!0;case"dragenter":return ki=Bs(ki,t,e,n,i,r),!0;case"mouseover":return Bi=Bs(Bi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return mo.set(s,Bs(mo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,go.set(s,Bs(go.get(s)||null,t,e,n,i,r)),!0}return!1}function gg(t){var e=hr(t.target);if(e!==null){var n=br(e);if(n!==null){if(e=n.tag,e===13){if(e=rg(n),e!==null){t.blockedOn=e,mg(t.priority,function(){hg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ua(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=wc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);xc=i,n.target.dispatchEvent(i),xc=null}else return e=Uo(n),e!==null&&od(e),t.blockedOn=n,!1;e.shift()}return!0}function Sh(t,e,n){Ua(t)&&n.delete(e)}function L0(){Tc=!1,Oi!==null&&Ua(Oi)&&(Oi=null),ki!==null&&Ua(ki)&&(ki=null),Bi!==null&&Ua(Bi)&&(Bi=null),mo.forEach(Sh),go.forEach(Sh)}function zs(t,e){t.blockedOn===e&&(t.blockedOn=null,Tc||(Tc=!0,gn.unstable_scheduleCallback(gn.unstable_NormalPriority,L0)))}function _o(t){function e(r){return zs(r,t)}if(0<$o.length){zs($o[0],t);for(var n=1;n<$o.length;n++){var i=$o[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Oi!==null&&zs(Oi,t),ki!==null&&zs(ki,t),Bi!==null&&zs(Bi,t),mo.forEach(e),go.forEach(e),n=0;n<Li.length;n++)i=Li[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Li.length&&(n=Li[0],n.blockedOn===null);)gg(n),n.blockedOn===null&&Li.shift()}var ds=xi.ReactCurrentBatchConfig,nl=!0;function D0(t,e,n,i){var r=Qe,s=ds.transition;ds.transition=null;try{Qe=1,ad(t,e,n,i)}finally{Qe=r,ds.transition=s}}function U0(t,e,n,i){var r=Qe,s=ds.transition;ds.transition=null;try{Qe=4,ad(t,e,n,i)}finally{Qe=r,ds.transition=s}}function ad(t,e,n,i){if(nl){var r=wc(t,e,n,i);if(r===null)vu(t,e,i,il,n),yh(t,i);else if(b0(r,t,e,n,i))i.stopPropagation();else if(yh(t,i),e&4&&-1<P0.indexOf(t)){for(;r!==null;){var s=Uo(r);if(s!==null&&dg(s),s=wc(t,e,n,i),s===null&&vu(t,e,i,il,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else vu(t,e,i,null,n)}}var il=null;function wc(t,e,n,i){if(il=null,t=id(i),t=hr(t),t!==null)if(e=br(t),e===null)t=null;else if(n=e.tag,n===13){if(t=rg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return il=t,null}function _g(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(y0()){case rd:return 1;case lg:return 4;case el:case S0:return 16;case ug:return 536870912;default:return 16}default:return 16}}var Ii=null,ld=null,Ia=null;function vg(){if(Ia)return Ia;var t,e=ld,n=e.length,i,r="value"in Ii?Ii.value:Ii.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Ia=r.slice(t,1<i?1-i:void 0)}function Na(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function qo(){return!0}function Mh(){return!1}function vn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?qo:Mh,this.isPropagationStopped=Mh,this}return dt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qo)},persist:function(){},isPersistent:qo}),e}var Is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ud=vn(Is),Do=dt({},Is,{view:0,detail:0}),I0=vn(Do),uu,cu,Hs,bl=dt({},Do,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Hs&&(Hs&&t.type==="mousemove"?(uu=t.screenX-Hs.screenX,cu=t.screenY-Hs.screenY):cu=uu=0,Hs=t),uu)},movementY:function(t){return"movementY"in t?t.movementY:cu}}),Eh=vn(bl),N0=dt({},bl,{dataTransfer:0}),F0=vn(N0),O0=dt({},Do,{relatedTarget:0}),fu=vn(O0),k0=dt({},Is,{animationName:0,elapsedTime:0,pseudoElement:0}),B0=vn(k0),z0=dt({},Is,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),H0=vn(z0),V0=dt({},Is,{data:0}),Th=vn(V0),G0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},W0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},X0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function j0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=X0[t])?!!e[t]:!1}function cd(){return j0}var Y0=dt({},Do,{key:function(t){if(t.key){var e=G0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Na(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?W0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cd,charCode:function(t){return t.type==="keypress"?Na(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Na(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$0=vn(Y0),q0=dt({},bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wh=vn(q0),K0=dt({},Do,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cd}),Z0=vn(K0),Q0=dt({},Is,{propertyName:0,elapsedTime:0,pseudoElement:0}),J0=vn(Q0),ex=dt({},bl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),tx=vn(ex),nx=[9,13,27,32],fd=hi&&"CompositionEvent"in window,ro=null;hi&&"documentMode"in document&&(ro=document.documentMode);var ix=hi&&"TextEvent"in window&&!ro,xg=hi&&(!fd||ro&&8<ro&&11>=ro),Ah=" ",Ch=!1;function yg(t,e){switch(t){case"keyup":return nx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zr=!1;function rx(t,e){switch(t){case"compositionend":return Sg(e);case"keypress":return e.which!==32?null:(Ch=!0,Ah);case"textInput":return t=e.data,t===Ah&&Ch?null:t;default:return null}}function sx(t,e){if(Zr)return t==="compositionend"||!fd&&yg(t,e)?(t=vg(),Ia=ld=Ii=null,Zr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return xg&&e.locale!=="ko"?null:e.data;default:return null}}var ox={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ox[t.type]:e==="textarea"}function Mg(t,e,n,i){Jm(i),e=rl(e,"onChange"),0<e.length&&(n=new ud("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var so=null,vo=null;function ax(t){Ug(t,0)}function Ll(t){var e=es(t);if(jm(e))return t}function lx(t,e){if(t==="change")return e}var Eg=!1;if(hi){var du;if(hi){var hu="oninput"in document;if(!hu){var Ph=document.createElement("div");Ph.setAttribute("oninput","return;"),hu=typeof Ph.oninput=="function"}du=hu}else du=!1;Eg=du&&(!document.documentMode||9<document.documentMode)}function bh(){so&&(so.detachEvent("onpropertychange",Tg),vo=so=null)}function Tg(t){if(t.propertyName==="value"&&Ll(vo)){var e=[];Mg(e,vo,t,id(t)),ig(ax,e)}}function ux(t,e,n){t==="focusin"?(bh(),so=e,vo=n,so.attachEvent("onpropertychange",Tg)):t==="focusout"&&bh()}function cx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ll(vo)}function fx(t,e){if(t==="click")return Ll(e)}function dx(t,e){if(t==="input"||t==="change")return Ll(e)}function hx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Vn=typeof Object.is=="function"?Object.is:hx;function xo(t,e){if(Vn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ac.call(e,r)||!Vn(t[r],e[r]))return!1}return!0}function Lh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Dh(t,e){var n=Lh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Lh(n)}}function wg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?wg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ag(){for(var t=window,e=Za();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Za(t.document)}return e}function dd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function px(t){var e=Ag(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&wg(n.ownerDocument.documentElement,n)){if(i!==null&&dd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Dh(n,s);var o=Dh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var mx=hi&&"documentMode"in document&&11>=document.documentMode,Qr=null,Ac=null,oo=null,Cc=!1;function Uh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Cc||Qr==null||Qr!==Za(i)||(i=Qr,"selectionStart"in i&&dd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),oo&&xo(oo,i)||(oo=i,i=rl(Ac,"onSelect"),0<i.length&&(e=new ud("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Qr)))}function Ko(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Jr={animationend:Ko("Animation","AnimationEnd"),animationiteration:Ko("Animation","AnimationIteration"),animationstart:Ko("Animation","AnimationStart"),transitionend:Ko("Transition","TransitionEnd")},pu={},Cg={};hi&&(Cg=document.createElement("div").style,"AnimationEvent"in window||(delete Jr.animationend.animation,delete Jr.animationiteration.animation,delete Jr.animationstart.animation),"TransitionEvent"in window||delete Jr.transitionend.transition);function Dl(t){if(pu[t])return pu[t];if(!Jr[t])return t;var e=Jr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Cg)return pu[t]=e[n];return t}var Rg=Dl("animationend"),Pg=Dl("animationiteration"),bg=Dl("animationstart"),Lg=Dl("transitionend"),Dg=new Map,Ih="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zi(t,e){Dg.set(t,e),Pr(e,[t])}for(var mu=0;mu<Ih.length;mu++){var gu=Ih[mu],gx=gu.toLowerCase(),_x=gu[0].toUpperCase()+gu.slice(1);Zi(gx,"on"+_x)}Zi(Rg,"onAnimationEnd");Zi(Pg,"onAnimationIteration");Zi(bg,"onAnimationStart");Zi("dblclick","onDoubleClick");Zi("focusin","onFocus");Zi("focusout","onBlur");Zi(Lg,"onTransitionEnd");ys("onMouseEnter",["mouseout","mouseover"]);ys("onMouseLeave",["mouseout","mouseover"]);ys("onPointerEnter",["pointerout","pointerover"]);ys("onPointerLeave",["pointerout","pointerover"]);Pr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vx=new Set("cancel close invalid load scroll toggle".split(" ").concat(eo));function Nh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,g0(i,e,void 0,t),t.currentTarget=null}function Ug(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Nh(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Nh(r,a,u),s=l}}}if(Ja)throw t=Mc,Ja=!1,Mc=null,t}function ot(t,e){var n=e[Dc];n===void 0&&(n=e[Dc]=new Set);var i=t+"__bubble";n.has(i)||(Ig(e,t,2,!1),n.add(i))}function _u(t,e,n){var i=0;e&&(i|=4),Ig(n,t,i,e)}var Zo="_reactListening"+Math.random().toString(36).slice(2);function yo(t){if(!t[Zo]){t[Zo]=!0,Hm.forEach(function(n){n!=="selectionchange"&&(vx.has(n)||_u(n,!1,t),_u(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Zo]||(e[Zo]=!0,_u("selectionchange",!1,e))}}function Ig(t,e,n,i){switch(_g(e)){case 1:var r=D0;break;case 4:r=U0;break;default:r=ad}n=r.bind(null,e,n,t),r=void 0,!Sc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function vu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=hr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}ig(function(){var u=s,f=id(n),d=[];e:{var h=Dg.get(t);if(h!==void 0){var m=ud,v=t;switch(t){case"keypress":if(Na(n)===0)break e;case"keydown":case"keyup":m=$0;break;case"focusin":v="focus",m=fu;break;case"focusout":v="blur",m=fu;break;case"beforeblur":case"afterblur":m=fu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Eh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=F0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Z0;break;case Rg:case Pg:case bg:m=B0;break;case Lg:m=J0;break;case"scroll":m=I0;break;case"wheel":m=tx;break;case"copy":case"cut":case"paste":m=H0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=wh}var y=(e&4)!==0,p=!y&&t==="scroll",c=y?h!==null?h+"Capture":null:h;y=[];for(var g=u,_;g!==null;){_=g;var M=_.stateNode;if(_.tag===5&&M!==null&&(_=M,c!==null&&(M=po(g,c),M!=null&&y.push(So(g,M,_)))),p)break;g=g.return}0<y.length&&(h=new m(h,v,null,n,f),d.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==xc&&(v=n.relatedTarget||n.fromElement)&&(hr(v)||v[pi]))break e;if((m||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?hr(v):null,v!==null&&(p=br(v),v!==p||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(y=Eh,M="onMouseLeave",c="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(y=wh,M="onPointerLeave",c="onPointerEnter",g="pointer"),p=m==null?h:es(m),_=v==null?h:es(v),h=new y(M,g+"leave",m,n,f),h.target=p,h.relatedTarget=_,M=null,hr(f)===u&&(y=new y(c,g+"enter",v,n,f),y.target=_,y.relatedTarget=p,M=y),p=M,m&&v)t:{for(y=m,c=v,g=0,_=y;_;_=Ur(_))g++;for(_=0,M=c;M;M=Ur(M))_++;for(;0<g-_;)y=Ur(y),g--;for(;0<_-g;)c=Ur(c),_--;for(;g--;){if(y===c||c!==null&&y===c.alternate)break t;y=Ur(y),c=Ur(c)}y=null}else y=null;m!==null&&Fh(d,h,m,y,!1),v!==null&&p!==null&&Fh(d,p,v,y,!0)}}e:{if(h=u?es(u):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var R=lx;else if(Rh(h))if(Eg)R=dx;else{R=cx;var C=ux}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(R=fx);if(R&&(R=R(t,u))){Mg(d,R,n,f);break e}C&&C(t,h,u),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&pc(h,"number",h.value)}switch(C=u?es(u):window,t){case"focusin":(Rh(C)||C.contentEditable==="true")&&(Qr=C,Ac=u,oo=null);break;case"focusout":oo=Ac=Qr=null;break;case"mousedown":Cc=!0;break;case"contextmenu":case"mouseup":case"dragend":Cc=!1,Uh(d,n,f);break;case"selectionchange":if(mx)break;case"keydown":case"keyup":Uh(d,n,f)}var w;if(fd)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Zr?yg(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(xg&&n.locale!=="ko"&&(Zr||P!=="onCompositionStart"?P==="onCompositionEnd"&&Zr&&(w=vg()):(Ii=f,ld="value"in Ii?Ii.value:Ii.textContent,Zr=!0)),C=rl(u,P),0<C.length&&(P=new Th(P,t,null,n,f),d.push({event:P,listeners:C}),w?P.data=w:(w=Sg(n),w!==null&&(P.data=w)))),(w=ix?rx(t,n):sx(t,n))&&(u=rl(u,"onBeforeInput"),0<u.length&&(f=new Th("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=w))}Ug(d,e)})}function So(t,e,n){return{instance:t,listener:e,currentTarget:n}}function rl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=po(t,n),s!=null&&i.unshift(So(t,s,r)),s=po(t,e),s!=null&&i.push(So(t,s,r))),t=t.return}return i}function Ur(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Fh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=po(n,s),l!=null&&o.unshift(So(n,l,a))):r||(l=po(n,s),l!=null&&o.push(So(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var xx=/\r\n?/g,yx=/\u0000|\uFFFD/g;function Oh(t){return(typeof t=="string"?t:""+t).replace(xx,`
`).replace(yx,"")}function Qo(t,e,n){if(e=Oh(e),Oh(t)!==e&&n)throw Error(ee(425))}function sl(){}var Rc=null,Pc=null;function bc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Lc=typeof setTimeout=="function"?setTimeout:void 0,Sx=typeof clearTimeout=="function"?clearTimeout:void 0,kh=typeof Promise=="function"?Promise:void 0,Mx=typeof queueMicrotask=="function"?queueMicrotask:typeof kh<"u"?function(t){return kh.resolve(null).then(t).catch(Ex)}:Lc;function Ex(t){setTimeout(function(){throw t})}function xu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),_o(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);_o(e)}function zi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Bh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ns=Math.random().toString(36).slice(2),Yn="__reactFiber$"+Ns,Mo="__reactProps$"+Ns,pi="__reactContainer$"+Ns,Dc="__reactEvents$"+Ns,Tx="__reactListeners$"+Ns,wx="__reactHandles$"+Ns;function hr(t){var e=t[Yn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[pi]||n[Yn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Bh(t);t!==null;){if(n=t[Yn])return n;t=Bh(t)}return e}t=n,n=t.parentNode}return null}function Uo(t){return t=t[Yn]||t[pi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function es(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ee(33))}function Ul(t){return t[Mo]||null}var Uc=[],ts=-1;function Qi(t){return{current:t}}function lt(t){0>ts||(t.current=Uc[ts],Uc[ts]=null,ts--)}function it(t,e){ts++,Uc[ts]=t.current,t.current=e}var $i={},Bt=Qi($i),Jt=Qi(!1),Sr=$i;function Ss(t,e){var n=t.type.contextTypes;if(!n)return $i;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function en(t){return t=t.childContextTypes,t!=null}function ol(){lt(Jt),lt(Bt)}function zh(t,e,n){if(Bt.current!==$i)throw Error(ee(168));it(Bt,e),it(Jt,n)}function Ng(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ee(108,u0(t)||"Unknown",r));return dt({},n,i)}function al(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||$i,Sr=Bt.current,it(Bt,t),it(Jt,Jt.current),!0}function Hh(t,e,n){var i=t.stateNode;if(!i)throw Error(ee(169));n?(t=Ng(t,e,Sr),i.__reactInternalMemoizedMergedChildContext=t,lt(Jt),lt(Bt),it(Bt,t)):lt(Jt),it(Jt,n)}var si=null,Il=!1,yu=!1;function Fg(t){si===null?si=[t]:si.push(t)}function Ax(t){Il=!0,Fg(t)}function Ji(){if(!yu&&si!==null){yu=!0;var t=0,e=Qe;try{var n=si;for(Qe=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}si=null,Il=!1}catch(r){throw si!==null&&(si=si.slice(t+1)),ag(rd,Ji),r}finally{Qe=e,yu=!1}}return null}var ns=[],is=0,ll=null,ul=0,Sn=[],Mn=0,Mr=null,ai=1,li="";function lr(t,e){ns[is++]=ul,ns[is++]=ll,ll=t,ul=e}function Og(t,e,n){Sn[Mn++]=ai,Sn[Mn++]=li,Sn[Mn++]=Mr,Mr=t;var i=ai;t=li;var r=32-zn(i)-1;i&=~(1<<r),n+=1;var s=32-zn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ai=1<<32-zn(e)+r|n<<r|i,li=s+t}else ai=1<<s|n<<r|i,li=t}function hd(t){t.return!==null&&(lr(t,1),Og(t,1,0))}function pd(t){for(;t===ll;)ll=ns[--is],ns[is]=null,ul=ns[--is],ns[is]=null;for(;t===Mr;)Mr=Sn[--Mn],Sn[Mn]=null,li=Sn[--Mn],Sn[Mn]=null,ai=Sn[--Mn],Sn[Mn]=null}var pn=null,hn=null,ut=!1,Fn=null;function kg(t,e){var n=Tn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Vh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,pn=t,hn=zi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,pn=t,hn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Mr!==null?{id:ai,overflow:li}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Tn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,pn=t,hn=null,!0):!1;default:return!1}}function Ic(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Nc(t){if(ut){var e=hn;if(e){var n=e;if(!Vh(t,e)){if(Ic(t))throw Error(ee(418));e=zi(n.nextSibling);var i=pn;e&&Vh(t,e)?kg(i,n):(t.flags=t.flags&-4097|2,ut=!1,pn=t)}}else{if(Ic(t))throw Error(ee(418));t.flags=t.flags&-4097|2,ut=!1,pn=t}}}function Gh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;pn=t}function Jo(t){if(t!==pn)return!1;if(!ut)return Gh(t),ut=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!bc(t.type,t.memoizedProps)),e&&(e=hn)){if(Ic(t))throw Bg(),Error(ee(418));for(;e;)kg(t,e),e=zi(e.nextSibling)}if(Gh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){hn=zi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}hn=null}}else hn=pn?zi(t.stateNode.nextSibling):null;return!0}function Bg(){for(var t=hn;t;)t=zi(t.nextSibling)}function Ms(){hn=pn=null,ut=!1}function md(t){Fn===null?Fn=[t]:Fn.push(t)}var Cx=xi.ReactCurrentBatchConfig;function Vs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ee(309));var i=n.stateNode}if(!i)throw Error(ee(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ee(284));if(!n._owner)throw Error(ee(290,t))}return t}function ea(t,e){throw t=Object.prototype.toString.call(e),Error(ee(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Wh(t){var e=t._init;return e(t._payload)}function zg(t){function e(c,g){if(t){var _=c.deletions;_===null?(c.deletions=[g],c.flags|=16):_.push(g)}}function n(c,g){if(!t)return null;for(;g!==null;)e(c,g),g=g.sibling;return null}function i(c,g){for(c=new Map;g!==null;)g.key!==null?c.set(g.key,g):c.set(g.index,g),g=g.sibling;return c}function r(c,g){return c=Wi(c,g),c.index=0,c.sibling=null,c}function s(c,g,_){return c.index=_,t?(_=c.alternate,_!==null?(_=_.index,_<g?(c.flags|=2,g):_):(c.flags|=2,g)):(c.flags|=1048576,g)}function o(c){return t&&c.alternate===null&&(c.flags|=2),c}function a(c,g,_,M){return g===null||g.tag!==6?(g=Cu(_,c.mode,M),g.return=c,g):(g=r(g,_),g.return=c,g)}function l(c,g,_,M){var R=_.type;return R===Kr?f(c,g,_.props.children,M,_.key):g!==null&&(g.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ri&&Wh(R)===g.type)?(M=r(g,_.props),M.ref=Vs(c,g,_),M.return=c,M):(M=Va(_.type,_.key,_.props,null,c.mode,M),M.ref=Vs(c,g,_),M.return=c,M)}function u(c,g,_,M){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=Ru(_,c.mode,M),g.return=c,g):(g=r(g,_.children||[]),g.return=c,g)}function f(c,g,_,M,R){return g===null||g.tag!==7?(g=xr(_,c.mode,M,R),g.return=c,g):(g=r(g,_),g.return=c,g)}function d(c,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Cu(""+g,c.mode,_),g.return=c,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Go:return _=Va(g.type,g.key,g.props,null,c.mode,_),_.ref=Vs(c,null,g),_.return=c,_;case qr:return g=Ru(g,c.mode,_),g.return=c,g;case Ri:var M=g._init;return d(c,M(g._payload),_)}if(Qs(g)||Os(g))return g=xr(g,c.mode,_,null),g.return=c,g;ea(c,g)}return null}function h(c,g,_,M){var R=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return R!==null?null:a(c,g,""+_,M);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Go:return _.key===R?l(c,g,_,M):null;case qr:return _.key===R?u(c,g,_,M):null;case Ri:return R=_._init,h(c,g,R(_._payload),M)}if(Qs(_)||Os(_))return R!==null?null:f(c,g,_,M,null);ea(c,_)}return null}function m(c,g,_,M,R){if(typeof M=="string"&&M!==""||typeof M=="number")return c=c.get(_)||null,a(g,c,""+M,R);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Go:return c=c.get(M.key===null?_:M.key)||null,l(g,c,M,R);case qr:return c=c.get(M.key===null?_:M.key)||null,u(g,c,M,R);case Ri:var C=M._init;return m(c,g,_,C(M._payload),R)}if(Qs(M)||Os(M))return c=c.get(_)||null,f(g,c,M,R,null);ea(g,M)}return null}function v(c,g,_,M){for(var R=null,C=null,w=g,P=g=0,$=null;w!==null&&P<_.length;P++){w.index>P?($=w,w=null):$=w.sibling;var x=h(c,w,_[P],M);if(x===null){w===null&&(w=$);break}t&&w&&x.alternate===null&&e(c,w),g=s(x,g,P),C===null?R=x:C.sibling=x,C=x,w=$}if(P===_.length)return n(c,w),ut&&lr(c,P),R;if(w===null){for(;P<_.length;P++)w=d(c,_[P],M),w!==null&&(g=s(w,g,P),C===null?R=w:C.sibling=w,C=w);return ut&&lr(c,P),R}for(w=i(c,w);P<_.length;P++)$=m(w,c,P,_[P],M),$!==null&&(t&&$.alternate!==null&&w.delete($.key===null?P:$.key),g=s($,g,P),C===null?R=$:C.sibling=$,C=$);return t&&w.forEach(function(E){return e(c,E)}),ut&&lr(c,P),R}function y(c,g,_,M){var R=Os(_);if(typeof R!="function")throw Error(ee(150));if(_=R.call(_),_==null)throw Error(ee(151));for(var C=R=null,w=g,P=g=0,$=null,x=_.next();w!==null&&!x.done;P++,x=_.next()){w.index>P?($=w,w=null):$=w.sibling;var E=h(c,w,x.value,M);if(E===null){w===null&&(w=$);break}t&&w&&E.alternate===null&&e(c,w),g=s(E,g,P),C===null?R=E:C.sibling=E,C=E,w=$}if(x.done)return n(c,w),ut&&lr(c,P),R;if(w===null){for(;!x.done;P++,x=_.next())x=d(c,x.value,M),x!==null&&(g=s(x,g,P),C===null?R=x:C.sibling=x,C=x);return ut&&lr(c,P),R}for(w=i(c,w);!x.done;P++,x=_.next())x=m(w,c,P,x.value,M),x!==null&&(t&&x.alternate!==null&&w.delete(x.key===null?P:x.key),g=s(x,g,P),C===null?R=x:C.sibling=x,C=x);return t&&w.forEach(function(z){return e(c,z)}),ut&&lr(c,P),R}function p(c,g,_,M){if(typeof _=="object"&&_!==null&&_.type===Kr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Go:e:{for(var R=_.key,C=g;C!==null;){if(C.key===R){if(R=_.type,R===Kr){if(C.tag===7){n(c,C.sibling),g=r(C,_.props.children),g.return=c,c=g;break e}}else if(C.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ri&&Wh(R)===C.type){n(c,C.sibling),g=r(C,_.props),g.ref=Vs(c,C,_),g.return=c,c=g;break e}n(c,C);break}else e(c,C);C=C.sibling}_.type===Kr?(g=xr(_.props.children,c.mode,M,_.key),g.return=c,c=g):(M=Va(_.type,_.key,_.props,null,c.mode,M),M.ref=Vs(c,g,_),M.return=c,c=M)}return o(c);case qr:e:{for(C=_.key;g!==null;){if(g.key===C)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(c,g.sibling),g=r(g,_.children||[]),g.return=c,c=g;break e}else{n(c,g);break}else e(c,g);g=g.sibling}g=Ru(_,c.mode,M),g.return=c,c=g}return o(c);case Ri:return C=_._init,p(c,g,C(_._payload),M)}if(Qs(_))return v(c,g,_,M);if(Os(_))return y(c,g,_,M);ea(c,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(n(c,g.sibling),g=r(g,_),g.return=c,c=g):(n(c,g),g=Cu(_,c.mode,M),g.return=c,c=g),o(c)):n(c,g)}return p}var Es=zg(!0),Hg=zg(!1),cl=Qi(null),fl=null,rs=null,gd=null;function _d(){gd=rs=fl=null}function vd(t){var e=cl.current;lt(cl),t._currentValue=e}function Fc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function hs(t,e){fl=t,gd=rs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Zt=!0),t.firstContext=null)}function Cn(t){var e=t._currentValue;if(gd!==t)if(t={context:t,memoizedValue:e,next:null},rs===null){if(fl===null)throw Error(ee(308));rs=t,fl.dependencies={lanes:0,firstContext:t}}else rs=rs.next=t;return e}var pr=null;function xd(t){pr===null?pr=[t]:pr.push(t)}function Vg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,xd(e)):(n.next=r.next,r.next=n),e.interleaved=n,mi(t,i)}function mi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Pi=!1;function yd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function di(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Hi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,We&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,mi(t,n)}return r=i.interleaved,r===null?(e.next=e,xd(i)):(e.next=r.next,r.next=e),i.interleaved=e,mi(t,n)}function Fa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,sd(t,n)}}function Xh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function dl(t,e,n,i){var r=t.updateQueue;Pi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,f=u=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,y=a;switch(h=e,m=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){d=v.call(m,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,h=typeof v=="function"?v.call(m,d,h):v,h==null)break e;d=dt({},d,h);break e;case 2:Pi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=m,l=d):f=f.next=m,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Tr|=o,t.lanes=o,t.memoizedState=d}}function jh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ee(191,r));r.call(i)}}}var Io={},qn=Qi(Io),Eo=Qi(Io),To=Qi(Io);function mr(t){if(t===Io)throw Error(ee(174));return t}function Sd(t,e){switch(it(To,e),it(Eo,t),it(qn,Io),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:gc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=gc(e,t)}lt(qn),it(qn,e)}function Ts(){lt(qn),lt(Eo),lt(To)}function Wg(t){mr(To.current);var e=mr(qn.current),n=gc(e,t.type);e!==n&&(it(Eo,t),it(qn,n))}function Md(t){Eo.current===t&&(lt(qn),lt(Eo))}var ct=Qi(0);function hl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Su=[];function Ed(){for(var t=0;t<Su.length;t++)Su[t]._workInProgressVersionPrimary=null;Su.length=0}var Oa=xi.ReactCurrentDispatcher,Mu=xi.ReactCurrentBatchConfig,Er=0,ft=null,Et=null,Rt=null,pl=!1,ao=!1,wo=0,Rx=0;function It(){throw Error(ee(321))}function Td(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Vn(t[n],e[n]))return!1;return!0}function wd(t,e,n,i,r,s){if(Er=s,ft=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Oa.current=t===null||t.memoizedState===null?Dx:Ux,t=n(i,r),ao){s=0;do{if(ao=!1,wo=0,25<=s)throw Error(ee(301));s+=1,Rt=Et=null,e.updateQueue=null,Oa.current=Ix,t=n(i,r)}while(ao)}if(Oa.current=ml,e=Et!==null&&Et.next!==null,Er=0,Rt=Et=ft=null,pl=!1,e)throw Error(ee(300));return t}function Ad(){var t=wo!==0;return wo=0,t}function Wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?ft.memoizedState=Rt=t:Rt=Rt.next=t,Rt}function Rn(){if(Et===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=Et.next;var e=Rt===null?ft.memoizedState:Rt.next;if(e!==null)Rt=e,Et=t;else{if(t===null)throw Error(ee(310));Et=t,t={memoizedState:Et.memoizedState,baseState:Et.baseState,baseQueue:Et.baseQueue,queue:Et.queue,next:null},Rt===null?ft.memoizedState=Rt=t:Rt=Rt.next=t}return Rt}function Ao(t,e){return typeof e=="function"?e(t):e}function Eu(t){var e=Rn(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=Et,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var f=u.lane;if((Er&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,ft.lanes|=f,Tr|=f}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Vn(i,e.memoizedState)||(Zt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ft.lanes|=s,Tr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Tu(t){var e=Rn(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Vn(s,e.memoizedState)||(Zt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Xg(){}function jg(t,e){var n=ft,i=Rn(),r=e(),s=!Vn(i.memoizedState,r);if(s&&(i.memoizedState=r,Zt=!0),i=i.queue,Cd(qg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Rt!==null&&Rt.memoizedState.tag&1){if(n.flags|=2048,Co(9,$g.bind(null,n,i,r,e),void 0,null),Pt===null)throw Error(ee(349));Er&30||Yg(n,e,r)}return r}function Yg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function $g(t,e,n,i){e.value=n,e.getSnapshot=i,Kg(e)&&Zg(t)}function qg(t,e,n){return n(function(){Kg(e)&&Zg(t)})}function Kg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Vn(t,n)}catch{return!0}}function Zg(t){var e=mi(t,1);e!==null&&Hn(e,t,1,-1)}function Yh(t){var e=Wn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ao,lastRenderedState:t},e.queue=t,t=t.dispatch=Lx.bind(null,ft,t),[e.memoizedState,t]}function Co(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Qg(){return Rn().memoizedState}function ka(t,e,n,i){var r=Wn();ft.flags|=t,r.memoizedState=Co(1|e,n,void 0,i===void 0?null:i)}function Nl(t,e,n,i){var r=Rn();i=i===void 0?null:i;var s=void 0;if(Et!==null){var o=Et.memoizedState;if(s=o.destroy,i!==null&&Td(i,o.deps)){r.memoizedState=Co(e,n,s,i);return}}ft.flags|=t,r.memoizedState=Co(1|e,n,s,i)}function $h(t,e){return ka(8390656,8,t,e)}function Cd(t,e){return Nl(2048,8,t,e)}function Jg(t,e){return Nl(4,2,t,e)}function e_(t,e){return Nl(4,4,t,e)}function t_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function n_(t,e,n){return n=n!=null?n.concat([t]):null,Nl(4,4,t_.bind(null,e,t),n)}function Rd(){}function i_(t,e){var n=Rn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Td(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function r_(t,e){var n=Rn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Td(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function s_(t,e,n){return Er&21?(Vn(n,e)||(n=cg(),ft.lanes|=n,Tr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Zt=!0),t.memoizedState=n)}function Px(t,e){var n=Qe;Qe=n!==0&&4>n?n:4,t(!0);var i=Mu.transition;Mu.transition={};try{t(!1),e()}finally{Qe=n,Mu.transition=i}}function o_(){return Rn().memoizedState}function bx(t,e,n){var i=Gi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},a_(t))l_(e,n);else if(n=Vg(t,e,n,i),n!==null){var r=Gt();Hn(n,t,i,r),u_(n,e,i)}}function Lx(t,e,n){var i=Gi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(a_(t))l_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Vn(a,o)){var l=e.interleaved;l===null?(r.next=r,xd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Vg(t,e,r,i),n!==null&&(r=Gt(),Hn(n,t,i,r),u_(n,e,i))}}function a_(t){var e=t.alternate;return t===ft||e!==null&&e===ft}function l_(t,e){ao=pl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function u_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,sd(t,n)}}var ml={readContext:Cn,useCallback:It,useContext:It,useEffect:It,useImperativeHandle:It,useInsertionEffect:It,useLayoutEffect:It,useMemo:It,useReducer:It,useRef:It,useState:It,useDebugValue:It,useDeferredValue:It,useTransition:It,useMutableSource:It,useSyncExternalStore:It,useId:It,unstable_isNewReconciler:!1},Dx={readContext:Cn,useCallback:function(t,e){return Wn().memoizedState=[t,e===void 0?null:e],t},useContext:Cn,useEffect:$h,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ka(4194308,4,t_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ka(4194308,4,t,e)},useInsertionEffect:function(t,e){return ka(4,2,t,e)},useMemo:function(t,e){var n=Wn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Wn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=bx.bind(null,ft,t),[i.memoizedState,t]},useRef:function(t){var e=Wn();return t={current:t},e.memoizedState=t},useState:Yh,useDebugValue:Rd,useDeferredValue:function(t){return Wn().memoizedState=t},useTransition:function(){var t=Yh(!1),e=t[0];return t=Px.bind(null,t[1]),Wn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ft,r=Wn();if(ut){if(n===void 0)throw Error(ee(407));n=n()}else{if(n=e(),Pt===null)throw Error(ee(349));Er&30||Yg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,$h(qg.bind(null,i,s,t),[t]),i.flags|=2048,Co(9,$g.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Wn(),e=Pt.identifierPrefix;if(ut){var n=li,i=ai;n=(i&~(1<<32-zn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=wo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Rx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ux={readContext:Cn,useCallback:i_,useContext:Cn,useEffect:Cd,useImperativeHandle:n_,useInsertionEffect:Jg,useLayoutEffect:e_,useMemo:r_,useReducer:Eu,useRef:Qg,useState:function(){return Eu(Ao)},useDebugValue:Rd,useDeferredValue:function(t){var e=Rn();return s_(e,Et.memoizedState,t)},useTransition:function(){var t=Eu(Ao)[0],e=Rn().memoizedState;return[t,e]},useMutableSource:Xg,useSyncExternalStore:jg,useId:o_,unstable_isNewReconciler:!1},Ix={readContext:Cn,useCallback:i_,useContext:Cn,useEffect:Cd,useImperativeHandle:n_,useInsertionEffect:Jg,useLayoutEffect:e_,useMemo:r_,useReducer:Tu,useRef:Qg,useState:function(){return Tu(Ao)},useDebugValue:Rd,useDeferredValue:function(t){var e=Rn();return Et===null?e.memoizedState=t:s_(e,Et.memoizedState,t)},useTransition:function(){var t=Tu(Ao)[0],e=Rn().memoizedState;return[t,e]},useMutableSource:Xg,useSyncExternalStore:jg,useId:o_,unstable_isNewReconciler:!1};function In(t,e){if(t&&t.defaultProps){e=dt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Oc(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:dt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Fl={isMounted:function(t){return(t=t._reactInternals)?br(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Gt(),r=Gi(t),s=di(i,r);s.payload=e,n!=null&&(s.callback=n),e=Hi(t,s,r),e!==null&&(Hn(e,t,r,i),Fa(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Gt(),r=Gi(t),s=di(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Hi(t,s,r),e!==null&&(Hn(e,t,r,i),Fa(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Gt(),i=Gi(t),r=di(n,i);r.tag=2,e!=null&&(r.callback=e),e=Hi(t,r,i),e!==null&&(Hn(e,t,i,n),Fa(e,t,i))}};function qh(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!xo(n,i)||!xo(r,s):!0}function c_(t,e,n){var i=!1,r=$i,s=e.contextType;return typeof s=="object"&&s!==null?s=Cn(s):(r=en(e)?Sr:Bt.current,i=e.contextTypes,s=(i=i!=null)?Ss(t,r):$i),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Fl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Kh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Fl.enqueueReplaceState(e,e.state,null)}function kc(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},yd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Cn(s):(s=en(e)?Sr:Bt.current,r.context=Ss(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Oc(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Fl.enqueueReplaceState(r,r.state,null),dl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ws(t,e){try{var n="",i=e;do n+=l0(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function wu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Bc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Nx=typeof WeakMap=="function"?WeakMap:Map;function f_(t,e,n){n=di(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){_l||(_l=!0,qc=i),Bc(t,e)},n}function d_(t,e,n){n=di(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Bc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Bc(t,e),typeof i!="function"&&(Vi===null?Vi=new Set([this]):Vi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Zh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Nx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=qx.bind(null,t,e,n),e.then(t,t))}function Qh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Jh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=di(-1,1),e.tag=2,Hi(n,e,1))),n.lanes|=1),t)}var Fx=xi.ReactCurrentOwner,Zt=!1;function Ht(t,e,n,i){e.child=t===null?Hg(e,null,n,i):Es(e,t.child,n,i)}function ep(t,e,n,i,r){n=n.render;var s=e.ref;return hs(e,r),i=wd(t,e,n,i,s,r),n=Ad(),t!==null&&!Zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,gi(t,e,r)):(ut&&n&&hd(e),e.flags|=1,Ht(t,e,i,r),e.child)}function tp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Fd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,h_(t,e,s,i,r)):(t=Va(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:xo,n(o,i)&&t.ref===e.ref)return gi(t,e,r)}return e.flags|=1,t=Wi(s,i),t.ref=e.ref,t.return=e,e.child=t}function h_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(xo(s,i)&&t.ref===e.ref)if(Zt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Zt=!0);else return e.lanes=t.lanes,gi(t,e,r)}return zc(t,e,n,i,r)}function p_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},it(os,dn),dn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,it(os,dn),dn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,it(os,dn),dn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,it(os,dn),dn|=i;return Ht(t,e,r,n),e.child}function m_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function zc(t,e,n,i,r){var s=en(n)?Sr:Bt.current;return s=Ss(e,s),hs(e,r),n=wd(t,e,n,i,s,r),i=Ad(),t!==null&&!Zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,gi(t,e,r)):(ut&&i&&hd(e),e.flags|=1,Ht(t,e,n,r),e.child)}function np(t,e,n,i,r){if(en(n)){var s=!0;al(e)}else s=!1;if(hs(e,r),e.stateNode===null)Ba(t,e),c_(e,n,i),kc(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Cn(u):(u=en(n)?Sr:Bt.current,u=Ss(e,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Kh(e,o,i,u),Pi=!1;var h=e.memoizedState;o.state=h,dl(e,i,o,r),l=e.memoizedState,a!==i||h!==l||Jt.current||Pi?(typeof f=="function"&&(Oc(e,n,f,i),l=e.memoizedState),(a=Pi||qh(e,n,a,i,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Gg(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:In(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Cn(l):(l=en(n)?Sr:Bt.current,l=Ss(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Kh(e,o,i,l),Pi=!1,h=e.memoizedState,o.state=h,dl(e,i,o,r);var v=e.memoizedState;a!==d||h!==v||Jt.current||Pi?(typeof m=="function"&&(Oc(e,n,m,i),v=e.memoizedState),(u=Pi||qh(e,n,u,i,h,v,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Hc(t,e,n,i,s,r)}function Hc(t,e,n,i,r,s){m_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Hh(e,n,!1),gi(t,e,s);i=e.stateNode,Fx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Es(e,t.child,null,s),e.child=Es(e,null,a,s)):Ht(t,e,a,s),e.memoizedState=i.state,r&&Hh(e,n,!0),e.child}function g_(t){var e=t.stateNode;e.pendingContext?zh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&zh(t,e.context,!1),Sd(t,e.containerInfo)}function ip(t,e,n,i,r){return Ms(),md(r),e.flags|=256,Ht(t,e,n,i),e.child}var Vc={dehydrated:null,treeContext:null,retryLane:0};function Gc(t){return{baseLanes:t,cachePool:null,transitions:null}}function __(t,e,n){var i=e.pendingProps,r=ct.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),it(ct,r&1),t===null)return Nc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Bl(o,i,0,null),t=xr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Gc(n),e.memoizedState=Vc,t):Pd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Ox(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Wi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Wi(a,s):(s=xr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Gc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Vc,i}return s=t.child,t=s.sibling,i=Wi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Pd(t,e){return e=Bl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ta(t,e,n,i){return i!==null&&md(i),Es(e,t.child,null,n),t=Pd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ox(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=wu(Error(ee(422))),ta(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Bl({mode:"visible",children:i.children},r,0,null),s=xr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Es(e,t.child,null,o),e.child.memoizedState=Gc(o),e.memoizedState=Vc,s);if(!(e.mode&1))return ta(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ee(419)),i=wu(s,i,void 0),ta(t,e,o,i)}if(a=(o&t.childLanes)!==0,Zt||a){if(i=Pt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,mi(t,r),Hn(i,t,r,-1))}return Nd(),i=wu(Error(ee(421))),ta(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Kx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,hn=zi(r.nextSibling),pn=e,ut=!0,Fn=null,t!==null&&(Sn[Mn++]=ai,Sn[Mn++]=li,Sn[Mn++]=Mr,ai=t.id,li=t.overflow,Mr=e),e=Pd(e,i.children),e.flags|=4096,e)}function rp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Fc(t.return,e,n)}function Au(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function v_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Ht(t,e,i.children,n),i=ct.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rp(t,n,e);else if(t.tag===19)rp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(it(ct,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&hl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Au(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&hl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Au(e,!0,n,null,s);break;case"together":Au(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ba(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function gi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Tr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ee(153));if(e.child!==null){for(t=e.child,n=Wi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Wi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function kx(t,e,n){switch(e.tag){case 3:g_(e),Ms();break;case 5:Wg(e);break;case 1:en(e.type)&&al(e);break;case 4:Sd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;it(cl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(it(ct,ct.current&1),e.flags|=128,null):n&e.child.childLanes?__(t,e,n):(it(ct,ct.current&1),t=gi(t,e,n),t!==null?t.sibling:null);it(ct,ct.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return v_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),it(ct,ct.current),i)break;return null;case 22:case 23:return e.lanes=0,p_(t,e,n)}return gi(t,e,n)}var x_,Wc,y_,S_;x_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wc=function(){};y_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,mr(qn.current);var s=null;switch(n){case"input":r=dc(t,r),i=dc(t,i),s=[];break;case"select":r=dt({},r,{value:void 0}),i=dt({},i,{value:void 0}),s=[];break;case"textarea":r=mc(t,r),i=mc(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=sl)}_c(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(fo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(fo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ot("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};S_=function(t,e,n,i){n!==i&&(e.flags|=4)};function Gs(t,e){if(!ut)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Nt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Bx(t,e,n){var i=e.pendingProps;switch(pd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nt(e),null;case 1:return en(e.type)&&ol(),Nt(e),null;case 3:return i=e.stateNode,Ts(),lt(Jt),lt(Bt),Ed(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Jo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Fn!==null&&(Qc(Fn),Fn=null))),Wc(t,e),Nt(e),null;case 5:Md(e);var r=mr(To.current);if(n=e.type,t!==null&&e.stateNode!=null)y_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return Nt(e),null}if(t=mr(qn.current),Jo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Yn]=e,i[Mo]=s,t=(e.mode&1)!==0,n){case"dialog":ot("cancel",i),ot("close",i);break;case"iframe":case"object":case"embed":ot("load",i);break;case"video":case"audio":for(r=0;r<eo.length;r++)ot(eo[r],i);break;case"source":ot("error",i);break;case"img":case"image":case"link":ot("error",i),ot("load",i);break;case"details":ot("toggle",i);break;case"input":hh(i,s),ot("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ot("invalid",i);break;case"textarea":mh(i,s),ot("invalid",i)}_c(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Qo(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Qo(i.textContent,a,t),r=["children",""+a]):fo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ot("scroll",i)}switch(n){case"input":Wo(i),ph(i,s,!0);break;case"textarea":Wo(i),gh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=sl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=qm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Yn]=e,t[Mo]=i,x_(t,e,!1,!1),e.stateNode=t;e:{switch(o=vc(n,i),n){case"dialog":ot("cancel",t),ot("close",t),r=i;break;case"iframe":case"object":case"embed":ot("load",t),r=i;break;case"video":case"audio":for(r=0;r<eo.length;r++)ot(eo[r],t);r=i;break;case"source":ot("error",t),r=i;break;case"img":case"image":case"link":ot("error",t),ot("load",t),r=i;break;case"details":ot("toggle",t),r=i;break;case"input":hh(t,i),r=dc(t,i),ot("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=dt({},i,{value:void 0}),ot("invalid",t);break;case"textarea":mh(t,i),r=mc(t,i),ot("invalid",t);break;default:r=i}_c(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Qm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Km(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ho(t,l):typeof l=="number"&&ho(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(fo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ot("scroll",t):l!=null&&Jf(t,s,l,o))}switch(n){case"input":Wo(t),ph(t,i,!1);break;case"textarea":Wo(t),gh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Yi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?us(t,!!i.multiple,s,!1):i.defaultValue!=null&&us(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=sl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Nt(e),null;case 6:if(t&&e.stateNode!=null)S_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(n=mr(To.current),mr(qn.current),Jo(e)){if(i=e.stateNode,n=e.memoizedProps,i[Yn]=e,(s=i.nodeValue!==n)&&(t=pn,t!==null))switch(t.tag){case 3:Qo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Qo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Yn]=e,e.stateNode=i}return Nt(e),null;case 13:if(lt(ct),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ut&&hn!==null&&e.mode&1&&!(e.flags&128))Bg(),Ms(),e.flags|=98560,s=!1;else if(s=Jo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ee(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ee(317));s[Yn]=e}else Ms(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Nt(e),s=!1}else Fn!==null&&(Qc(Fn),Fn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ct.current&1?Tt===0&&(Tt=3):Nd())),e.updateQueue!==null&&(e.flags|=4),Nt(e),null);case 4:return Ts(),Wc(t,e),t===null&&yo(e.stateNode.containerInfo),Nt(e),null;case 10:return vd(e.type._context),Nt(e),null;case 17:return en(e.type)&&ol(),Nt(e),null;case 19:if(lt(ct),s=e.memoizedState,s===null)return Nt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Gs(s,!1);else{if(Tt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=hl(t),o!==null){for(e.flags|=128,Gs(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return it(ct,ct.current&1|2),e.child}t=t.sibling}s.tail!==null&&gt()>As&&(e.flags|=128,i=!0,Gs(s,!1),e.lanes=4194304)}else{if(!i)if(t=hl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Gs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ut)return Nt(e),null}else 2*gt()-s.renderingStartTime>As&&n!==1073741824&&(e.flags|=128,i=!0,Gs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=gt(),e.sibling=null,n=ct.current,it(ct,i?n&1|2:n&1),e):(Nt(e),null);case 22:case 23:return Id(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?dn&1073741824&&(Nt(e),e.subtreeFlags&6&&(e.flags|=8192)):Nt(e),null;case 24:return null;case 25:return null}throw Error(ee(156,e.tag))}function zx(t,e){switch(pd(e),e.tag){case 1:return en(e.type)&&ol(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ts(),lt(Jt),lt(Bt),Ed(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Md(e),null;case 13:if(lt(ct),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));Ms()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return lt(ct),null;case 4:return Ts(),null;case 10:return vd(e.type._context),null;case 22:case 23:return Id(),null;case 24:return null;default:return null}}var na=!1,kt=!1,Hx=typeof WeakSet=="function"?WeakSet:Set,he=null;function ss(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){pt(t,e,i)}else n.current=null}function Xc(t,e,n){try{n()}catch(i){pt(t,e,i)}}var sp=!1;function Vx(t,e){if(Rc=nl,t=Ag(),dd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,f=0,d=t,h=null;t:for(;;){for(var m;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)h=d,d=m;for(;;){if(d===t)break t;if(h===n&&++u===r&&(a=o),h===s&&++f===i&&(l=o),(m=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pc={focusedElem:t,selectionRange:n},nl=!1,he=e;he!==null;)if(e=he,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,he=t;else for(;he!==null;){e=he;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,p=v.memoizedState,c=e.stateNode,g=c.getSnapshotBeforeUpdate(e.elementType===e.type?y:In(e.type,y),p);c.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(M){pt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,he=t;break}he=e.return}return v=sp,sp=!1,v}function lo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Xc(e,n,s)}r=r.next}while(r!==i)}}function Ol(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function jc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function M_(t){var e=t.alternate;e!==null&&(t.alternate=null,M_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Yn],delete e[Mo],delete e[Dc],delete e[Tx],delete e[wx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function E_(t){return t.tag===5||t.tag===3||t.tag===4}function op(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||E_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=sl));else if(i!==4&&(t=t.child,t!==null))for(Yc(t,e,n),t=t.sibling;t!==null;)Yc(t,e,n),t=t.sibling}function $c(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for($c(t,e,n),t=t.sibling;t!==null;)$c(t,e,n),t=t.sibling}var Lt=null,Nn=!1;function Si(t,e,n){for(n=n.child;n!==null;)T_(t,e,n),n=n.sibling}function T_(t,e,n){if($n&&typeof $n.onCommitFiberUnmount=="function")try{$n.onCommitFiberUnmount(Pl,n)}catch{}switch(n.tag){case 5:kt||ss(n,e);case 6:var i=Lt,r=Nn;Lt=null,Si(t,e,n),Lt=i,Nn=r,Lt!==null&&(Nn?(t=Lt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Lt.removeChild(n.stateNode));break;case 18:Lt!==null&&(Nn?(t=Lt,n=n.stateNode,t.nodeType===8?xu(t.parentNode,n):t.nodeType===1&&xu(t,n),_o(t)):xu(Lt,n.stateNode));break;case 4:i=Lt,r=Nn,Lt=n.stateNode.containerInfo,Nn=!0,Si(t,e,n),Lt=i,Nn=r;break;case 0:case 11:case 14:case 15:if(!kt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Xc(n,e,o),r=r.next}while(r!==i)}Si(t,e,n);break;case 1:if(!kt&&(ss(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){pt(n,e,a)}Si(t,e,n);break;case 21:Si(t,e,n);break;case 22:n.mode&1?(kt=(i=kt)||n.memoizedState!==null,Si(t,e,n),kt=i):Si(t,e,n);break;default:Si(t,e,n)}}function ap(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Hx),e.forEach(function(i){var r=Zx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function bn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Lt=a.stateNode,Nn=!1;break e;case 3:Lt=a.stateNode.containerInfo,Nn=!0;break e;case 4:Lt=a.stateNode.containerInfo,Nn=!0;break e}a=a.return}if(Lt===null)throw Error(ee(160));T_(s,o,r),Lt=null,Nn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){pt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)w_(e,t),e=e.sibling}function w_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(bn(e,t),Gn(t),i&4){try{lo(3,t,t.return),Ol(3,t)}catch(y){pt(t,t.return,y)}try{lo(5,t,t.return)}catch(y){pt(t,t.return,y)}}break;case 1:bn(e,t),Gn(t),i&512&&n!==null&&ss(n,n.return);break;case 5:if(bn(e,t),Gn(t),i&512&&n!==null&&ss(n,n.return),t.flags&32){var r=t.stateNode;try{ho(r,"")}catch(y){pt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Ym(r,s),vc(a,o);var u=vc(a,s);for(o=0;o<l.length;o+=2){var f=l[o],d=l[o+1];f==="style"?Qm(r,d):f==="dangerouslySetInnerHTML"?Km(r,d):f==="children"?ho(r,d):Jf(r,f,d,u)}switch(a){case"input":hc(r,s);break;case"textarea":$m(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?us(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?us(r,!!s.multiple,s.defaultValue,!0):us(r,!!s.multiple,s.multiple?[]:"",!1))}r[Mo]=s}catch(y){pt(t,t.return,y)}}break;case 6:if(bn(e,t),Gn(t),i&4){if(t.stateNode===null)throw Error(ee(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){pt(t,t.return,y)}}break;case 3:if(bn(e,t),Gn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{_o(e.containerInfo)}catch(y){pt(t,t.return,y)}break;case 4:bn(e,t),Gn(t);break;case 13:bn(e,t),Gn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Dd=gt())),i&4&&ap(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(kt=(u=kt)||f,bn(e,t),kt=u):bn(e,t),Gn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(he=t,f=t.child;f!==null;){for(d=he=f;he!==null;){switch(h=he,m=h.child,h.tag){case 0:case 11:case 14:case 15:lo(4,h,h.return);break;case 1:ss(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){pt(i,n,y)}}break;case 5:ss(h,h.return);break;case 22:if(h.memoizedState!==null){up(d);continue}}m!==null?(m.return=h,he=m):up(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Zm("display",o))}catch(y){pt(t,t.return,y)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){pt(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:bn(e,t),Gn(t),i&4&&ap(t);break;case 21:break;default:bn(e,t),Gn(t)}}function Gn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(E_(n)){var i=n;break e}n=n.return}throw Error(ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ho(r,""),i.flags&=-33);var s=op(t);$c(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=op(t);Yc(t,a,o);break;default:throw Error(ee(161))}}catch(l){pt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Gx(t,e,n){he=t,A_(t)}function A_(t,e,n){for(var i=(t.mode&1)!==0;he!==null;){var r=he,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||na;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||kt;a=na;var u=kt;if(na=o,(kt=l)&&!u)for(he=r;he!==null;)o=he,l=o.child,o.tag===22&&o.memoizedState!==null?cp(r):l!==null?(l.return=o,he=l):cp(r);for(;s!==null;)he=s,A_(s),s=s.sibling;he=r,na=a,kt=u}lp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,he=s):lp(t)}}function lp(t){for(;he!==null;){var e=he;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:kt||Ol(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!kt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:In(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&jh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}jh(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&_o(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}kt||e.flags&512&&jc(e)}catch(h){pt(e,e.return,h)}}if(e===t){he=null;break}if(n=e.sibling,n!==null){n.return=e.return,he=n;break}he=e.return}}function up(t){for(;he!==null;){var e=he;if(e===t){he=null;break}var n=e.sibling;if(n!==null){n.return=e.return,he=n;break}he=e.return}}function cp(t){for(;he!==null;){var e=he;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ol(4,e)}catch(l){pt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){pt(e,r,l)}}var s=e.return;try{jc(e)}catch(l){pt(e,s,l)}break;case 5:var o=e.return;try{jc(e)}catch(l){pt(e,o,l)}}}catch(l){pt(e,e.return,l)}if(e===t){he=null;break}var a=e.sibling;if(a!==null){a.return=e.return,he=a;break}he=e.return}}var Wx=Math.ceil,gl=xi.ReactCurrentDispatcher,bd=xi.ReactCurrentOwner,An=xi.ReactCurrentBatchConfig,We=0,Pt=null,St=null,Dt=0,dn=0,os=Qi(0),Tt=0,Ro=null,Tr=0,kl=0,Ld=0,uo=null,Kt=null,Dd=0,As=1/0,ri=null,_l=!1,qc=null,Vi=null,ia=!1,Ni=null,vl=0,co=0,Kc=null,za=-1,Ha=0;function Gt(){return We&6?gt():za!==-1?za:za=gt()}function Gi(t){return t.mode&1?We&2&&Dt!==0?Dt&-Dt:Cx.transition!==null?(Ha===0&&(Ha=cg()),Ha):(t=Qe,t!==0||(t=window.event,t=t===void 0?16:_g(t.type)),t):1}function Hn(t,e,n,i){if(50<co)throw co=0,Kc=null,Error(ee(185));Lo(t,n,i),(!(We&2)||t!==Pt)&&(t===Pt&&(!(We&2)&&(kl|=n),Tt===4&&Di(t,Dt)),tn(t,i),n===1&&We===0&&!(e.mode&1)&&(As=gt()+500,Il&&Ji()))}function tn(t,e){var n=t.callbackNode;C0(t,e);var i=tl(t,t===Pt?Dt:0);if(i===0)n!==null&&xh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&xh(n),e===1)t.tag===0?Ax(fp.bind(null,t)):Fg(fp.bind(null,t)),Mx(function(){!(We&6)&&Ji()}),n=null;else{switch(fg(i)){case 1:n=rd;break;case 4:n=lg;break;case 16:n=el;break;case 536870912:n=ug;break;default:n=el}n=I_(n,C_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function C_(t,e){if(za=-1,Ha=0,We&6)throw Error(ee(327));var n=t.callbackNode;if(ps()&&t.callbackNode!==n)return null;var i=tl(t,t===Pt?Dt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=xl(t,i);else{e=i;var r=We;We|=2;var s=P_();(Pt!==t||Dt!==e)&&(ri=null,As=gt()+500,vr(t,e));do try{Yx();break}catch(a){R_(t,a)}while(!0);_d(),gl.current=s,We=r,St!==null?e=0:(Pt=null,Dt=0,e=Tt)}if(e!==0){if(e===2&&(r=Ec(t),r!==0&&(i=r,e=Zc(t,r))),e===1)throw n=Ro,vr(t,0),Di(t,i),tn(t,gt()),n;if(e===6)Di(t,i);else{if(r=t.current.alternate,!(i&30)&&!Xx(r)&&(e=xl(t,i),e===2&&(s=Ec(t),s!==0&&(i=s,e=Zc(t,s))),e===1))throw n=Ro,vr(t,0),Di(t,i),tn(t,gt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ee(345));case 2:ur(t,Kt,ri);break;case 3:if(Di(t,i),(i&130023424)===i&&(e=Dd+500-gt(),10<e)){if(tl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Gt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Lc(ur.bind(null,t,Kt,ri),e);break}ur(t,Kt,ri);break;case 4:if(Di(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-zn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=gt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Wx(i/1960))-i,10<i){t.timeoutHandle=Lc(ur.bind(null,t,Kt,ri),i);break}ur(t,Kt,ri);break;case 5:ur(t,Kt,ri);break;default:throw Error(ee(329))}}}return tn(t,gt()),t.callbackNode===n?C_.bind(null,t):null}function Zc(t,e){var n=uo;return t.current.memoizedState.isDehydrated&&(vr(t,e).flags|=256),t=xl(t,e),t!==2&&(e=Kt,Kt=n,e!==null&&Qc(e)),t}function Qc(t){Kt===null?Kt=t:Kt.push.apply(Kt,t)}function Xx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Vn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Di(t,e){for(e&=~Ld,e&=~kl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-zn(e),i=1<<n;t[n]=-1,e&=~i}}function fp(t){if(We&6)throw Error(ee(327));ps();var e=tl(t,0);if(!(e&1))return tn(t,gt()),null;var n=xl(t,e);if(t.tag!==0&&n===2){var i=Ec(t);i!==0&&(e=i,n=Zc(t,i))}if(n===1)throw n=Ro,vr(t,0),Di(t,e),tn(t,gt()),n;if(n===6)throw Error(ee(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ur(t,Kt,ri),tn(t,gt()),null}function Ud(t,e){var n=We;We|=1;try{return t(e)}finally{We=n,We===0&&(As=gt()+500,Il&&Ji())}}function wr(t){Ni!==null&&Ni.tag===0&&!(We&6)&&ps();var e=We;We|=1;var n=An.transition,i=Qe;try{if(An.transition=null,Qe=1,t)return t()}finally{Qe=i,An.transition=n,We=e,!(We&6)&&Ji()}}function Id(){dn=os.current,lt(os)}function vr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Sx(n)),St!==null)for(n=St.return;n!==null;){var i=n;switch(pd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ol();break;case 3:Ts(),lt(Jt),lt(Bt),Ed();break;case 5:Md(i);break;case 4:Ts();break;case 13:lt(ct);break;case 19:lt(ct);break;case 10:vd(i.type._context);break;case 22:case 23:Id()}n=n.return}if(Pt=t,St=t=Wi(t.current,null),Dt=dn=e,Tt=0,Ro=null,Ld=kl=Tr=0,Kt=uo=null,pr!==null){for(e=0;e<pr.length;e++)if(n=pr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}pr=null}return t}function R_(t,e){do{var n=St;try{if(_d(),Oa.current=ml,pl){for(var i=ft.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}pl=!1}if(Er=0,Rt=Et=ft=null,ao=!1,wo=0,bd.current=null,n===null||n.return===null){Tt=1,Ro=e,St=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Dt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=Qh(o);if(m!==null){m.flags&=-257,Jh(m,o,a,s,e),m.mode&1&&Zh(s,u,e),e=m,l=u;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){Zh(s,u,e),Nd();break e}l=Error(ee(426))}}else if(ut&&a.mode&1){var p=Qh(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Jh(p,o,a,s,e),md(ws(l,a));break e}}s=l=ws(l,a),Tt!==4&&(Tt=2),uo===null?uo=[s]:uo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var c=f_(s,l,e);Xh(s,c);break e;case 1:a=l;var g=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Vi===null||!Vi.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=d_(s,a,e);Xh(s,M);break e}}s=s.return}while(s!==null)}L_(n)}catch(R){e=R,St===n&&n!==null&&(St=n=n.return);continue}break}while(!0)}function P_(){var t=gl.current;return gl.current=ml,t===null?ml:t}function Nd(){(Tt===0||Tt===3||Tt===2)&&(Tt=4),Pt===null||!(Tr&268435455)&&!(kl&268435455)||Di(Pt,Dt)}function xl(t,e){var n=We;We|=2;var i=P_();(Pt!==t||Dt!==e)&&(ri=null,vr(t,e));do try{jx();break}catch(r){R_(t,r)}while(!0);if(_d(),We=n,gl.current=i,St!==null)throw Error(ee(261));return Pt=null,Dt=0,Tt}function jx(){for(;St!==null;)b_(St)}function Yx(){for(;St!==null&&!v0();)b_(St)}function b_(t){var e=U_(t.alternate,t,dn);t.memoizedProps=t.pendingProps,e===null?L_(t):St=e,bd.current=null}function L_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=zx(n,e),n!==null){n.flags&=32767,St=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Tt=6,St=null;return}}else if(n=Bx(n,e,dn),n!==null){St=n;return}if(e=e.sibling,e!==null){St=e;return}St=e=t}while(e!==null);Tt===0&&(Tt=5)}function ur(t,e,n){var i=Qe,r=An.transition;try{An.transition=null,Qe=1,$x(t,e,n,i)}finally{An.transition=r,Qe=i}return null}function $x(t,e,n,i){do ps();while(Ni!==null);if(We&6)throw Error(ee(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ee(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(R0(t,s),t===Pt&&(St=Pt=null,Dt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ia||(ia=!0,I_(el,function(){return ps(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=An.transition,An.transition=null;var o=Qe;Qe=1;var a=We;We|=4,bd.current=null,Vx(t,n),w_(n,t),px(Pc),nl=!!Rc,Pc=Rc=null,t.current=n,Gx(n),x0(),We=a,Qe=o,An.transition=s}else t.current=n;if(ia&&(ia=!1,Ni=t,vl=r),s=t.pendingLanes,s===0&&(Vi=null),M0(n.stateNode),tn(t,gt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(_l)throw _l=!1,t=qc,qc=null,t;return vl&1&&t.tag!==0&&ps(),s=t.pendingLanes,s&1?t===Kc?co++:(co=0,Kc=t):co=0,Ji(),null}function ps(){if(Ni!==null){var t=fg(vl),e=An.transition,n=Qe;try{if(An.transition=null,Qe=16>t?16:t,Ni===null)var i=!1;else{if(t=Ni,Ni=null,vl=0,We&6)throw Error(ee(331));var r=We;for(We|=4,he=t.current;he!==null;){var s=he,o=s.child;if(he.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(he=u;he!==null;){var f=he;switch(f.tag){case 0:case 11:case 15:lo(8,f,s)}var d=f.child;if(d!==null)d.return=f,he=d;else for(;he!==null;){f=he;var h=f.sibling,m=f.return;if(M_(f),f===u){he=null;break}if(h!==null){h.return=m,he=h;break}he=m}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var p=y.sibling;y.sibling=null,y=p}while(y!==null)}}he=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,he=o;else e:for(;he!==null;){if(s=he,s.flags&2048)switch(s.tag){case 0:case 11:case 15:lo(9,s,s.return)}var c=s.sibling;if(c!==null){c.return=s.return,he=c;break e}he=s.return}}var g=t.current;for(he=g;he!==null;){o=he;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,he=_;else e:for(o=g;he!==null;){if(a=he,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ol(9,a)}}catch(R){pt(a,a.return,R)}if(a===o){he=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,he=M;break e}he=a.return}}if(We=r,Ji(),$n&&typeof $n.onPostCommitFiberRoot=="function")try{$n.onPostCommitFiberRoot(Pl,t)}catch{}i=!0}return i}finally{Qe=n,An.transition=e}}return!1}function dp(t,e,n){e=ws(n,e),e=f_(t,e,1),t=Hi(t,e,1),e=Gt(),t!==null&&(Lo(t,1,e),tn(t,e))}function pt(t,e,n){if(t.tag===3)dp(t,t,n);else for(;e!==null;){if(e.tag===3){dp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Vi===null||!Vi.has(i))){t=ws(n,t),t=d_(e,t,1),e=Hi(e,t,1),t=Gt(),e!==null&&(Lo(e,1,t),tn(e,t));break}}e=e.return}}function qx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Gt(),t.pingedLanes|=t.suspendedLanes&n,Pt===t&&(Dt&n)===n&&(Tt===4||Tt===3&&(Dt&130023424)===Dt&&500>gt()-Dd?vr(t,0):Ld|=n),tn(t,e)}function D_(t,e){e===0&&(t.mode&1?(e=Yo,Yo<<=1,!(Yo&130023424)&&(Yo=4194304)):e=1);var n=Gt();t=mi(t,e),t!==null&&(Lo(t,e,n),tn(t,n))}function Kx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),D_(t,n)}function Zx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ee(314))}i!==null&&i.delete(e),D_(t,n)}var U_;U_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Jt.current)Zt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Zt=!1,kx(t,e,n);Zt=!!(t.flags&131072)}else Zt=!1,ut&&e.flags&1048576&&Og(e,ul,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ba(t,e),t=e.pendingProps;var r=Ss(e,Bt.current);hs(e,n),r=wd(null,e,i,t,r,n);var s=Ad();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,en(i)?(s=!0,al(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,yd(e),r.updater=Fl,e.stateNode=r,r._reactInternals=e,kc(e,i,t,n),e=Hc(null,e,i,!0,s,n)):(e.tag=0,ut&&s&&hd(e),Ht(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ba(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Jx(i),t=In(i,t),r){case 0:e=zc(null,e,i,t,n);break e;case 1:e=np(null,e,i,t,n);break e;case 11:e=ep(null,e,i,t,n);break e;case 14:e=tp(null,e,i,In(i.type,t),n);break e}throw Error(ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),zc(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),np(t,e,i,r,n);case 3:e:{if(g_(e),t===null)throw Error(ee(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Gg(t,e),dl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ws(Error(ee(423)),e),e=ip(t,e,i,n,r);break e}else if(i!==r){r=ws(Error(ee(424)),e),e=ip(t,e,i,n,r);break e}else for(hn=zi(e.stateNode.containerInfo.firstChild),pn=e,ut=!0,Fn=null,n=Hg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ms(),i===r){e=gi(t,e,n);break e}Ht(t,e,i,n)}e=e.child}return e;case 5:return Wg(e),t===null&&Nc(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,bc(i,r)?o=null:s!==null&&bc(i,s)&&(e.flags|=32),m_(t,e),Ht(t,e,o,n),e.child;case 6:return t===null&&Nc(e),null;case 13:return __(t,e,n);case 4:return Sd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Es(e,null,i,n):Ht(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),ep(t,e,i,r,n);case 7:return Ht(t,e,e.pendingProps,n),e.child;case 8:return Ht(t,e,e.pendingProps.children,n),e.child;case 12:return Ht(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,it(cl,i._currentValue),i._currentValue=o,s!==null)if(Vn(s.value,o)){if(s.children===r.children&&!Jt.current){e=gi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=di(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Fc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ee(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Fc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ht(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,hs(e,n),r=Cn(r),i=i(r),e.flags|=1,Ht(t,e,i,n),e.child;case 14:return i=e.type,r=In(i,e.pendingProps),r=In(i.type,r),tp(t,e,i,r,n);case 15:return h_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),Ba(t,e),e.tag=1,en(i)?(t=!0,al(e)):t=!1,hs(e,n),c_(e,i,r),kc(e,i,r,n),Hc(null,e,i,!0,t,n);case 19:return v_(t,e,n);case 22:return p_(t,e,n)}throw Error(ee(156,e.tag))};function I_(t,e){return ag(t,e)}function Qx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(t,e,n,i){return new Qx(t,e,n,i)}function Fd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Jx(t){if(typeof t=="function")return Fd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===td)return 11;if(t===nd)return 14}return 2}function Wi(t,e){var n=t.alternate;return n===null?(n=Tn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Va(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Fd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Kr:return xr(n.children,r,s,e);case ed:o=8,r|=8;break;case lc:return t=Tn(12,n,e,r|2),t.elementType=lc,t.lanes=s,t;case uc:return t=Tn(13,n,e,r),t.elementType=uc,t.lanes=s,t;case cc:return t=Tn(19,n,e,r),t.elementType=cc,t.lanes=s,t;case Wm:return Bl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Vm:o=10;break e;case Gm:o=9;break e;case td:o=11;break e;case nd:o=14;break e;case Ri:o=16,i=null;break e}throw Error(ee(130,t==null?t:typeof t,""))}return e=Tn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function xr(t,e,n,i){return t=Tn(7,t,i,e),t.lanes=n,t}function Bl(t,e,n,i){return t=Tn(22,t,i,e),t.elementType=Wm,t.lanes=n,t.stateNode={isHidden:!1},t}function Cu(t,e,n){return t=Tn(6,t,null,e),t.lanes=n,t}function Ru(t,e,n){return e=Tn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ey(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=lu(0),this.expirationTimes=lu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Od(t,e,n,i,r,s,o,a,l){return t=new ey(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Tn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yd(s),t}function ty(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function N_(t){if(!t)return $i;t=t._reactInternals;e:{if(br(t)!==t||t.tag!==1)throw Error(ee(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(en(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ee(171))}if(t.tag===1){var n=t.type;if(en(n))return Ng(t,n,e)}return e}function F_(t,e,n,i,r,s,o,a,l){return t=Od(n,i,!0,t,r,s,o,a,l),t.context=N_(null),n=t.current,i=Gt(),r=Gi(n),s=di(i,r),s.callback=e??null,Hi(n,s,r),t.current.lanes=r,Lo(t,r,i),tn(t,i),t}function zl(t,e,n,i){var r=e.current,s=Gt(),o=Gi(r);return n=N_(n),e.context===null?e.context=n:e.pendingContext=n,e=di(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Hi(r,e,o),t!==null&&(Hn(t,r,o,s),Fa(t,r,o)),o}function yl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function hp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function kd(t,e){hp(t,e),(t=t.alternate)&&hp(t,e)}function ny(){return null}var O_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Bd(t){this._internalRoot=t}Hl.prototype.render=Bd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ee(409));zl(t,e,null,null)};Hl.prototype.unmount=Bd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;wr(function(){zl(null,t,null,null)}),e[pi]=null}};function Hl(t){this._internalRoot=t}Hl.prototype.unstable_scheduleHydration=function(t){if(t){var e=pg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Li.length&&e!==0&&e<Li[n].priority;n++);Li.splice(n,0,t),n===0&&gg(t)}};function zd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Vl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function pp(){}function iy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=yl(o);s.call(u)}}var o=F_(e,i,t,0,null,!1,!1,"",pp);return t._reactRootContainer=o,t[pi]=o.current,yo(t.nodeType===8?t.parentNode:t),wr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=yl(l);a.call(u)}}var l=Od(t,0,!1,null,null,!1,!1,"",pp);return t._reactRootContainer=l,t[pi]=l.current,yo(t.nodeType===8?t.parentNode:t),wr(function(){zl(e,l,n,i)}),l}function Gl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=yl(o);a.call(l)}}zl(e,o,t,r)}else o=iy(n,e,t,r,i);return yl(o)}dg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Js(e.pendingLanes);n!==0&&(sd(e,n|1),tn(e,gt()),!(We&6)&&(As=gt()+500,Ji()))}break;case 13:wr(function(){var i=mi(t,1);if(i!==null){var r=Gt();Hn(i,t,1,r)}}),kd(t,1)}};od=function(t){if(t.tag===13){var e=mi(t,134217728);if(e!==null){var n=Gt();Hn(e,t,134217728,n)}kd(t,134217728)}};hg=function(t){if(t.tag===13){var e=Gi(t),n=mi(t,e);if(n!==null){var i=Gt();Hn(n,t,e,i)}kd(t,e)}};pg=function(){return Qe};mg=function(t,e){var n=Qe;try{return Qe=t,e()}finally{Qe=n}};yc=function(t,e,n){switch(e){case"input":if(hc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Ul(i);if(!r)throw Error(ee(90));jm(i),hc(i,r)}}}break;case"textarea":$m(t,n);break;case"select":e=n.value,e!=null&&us(t,!!n.multiple,e,!1)}};tg=Ud;ng=wr;var ry={usingClientEntryPoint:!1,Events:[Uo,es,Ul,Jm,eg,Ud]},Ws={findFiberByHostInstance:hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},sy={bundleType:Ws.bundleType,version:Ws.version,rendererPackageName:Ws.rendererPackageName,rendererConfig:Ws.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=sg(t),t===null?null:t.stateNode},findFiberByHostInstance:Ws.findFiberByHostInstance||ny,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ra=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ra.isDisabled&&ra.supportsFiber)try{Pl=ra.inject(sy),$n=ra}catch{}}_n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ry;_n.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zd(e))throw Error(ee(200));return ty(t,e,null,n)};_n.createRoot=function(t,e){if(!zd(t))throw Error(ee(299));var n=!1,i="",r=O_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Od(t,1,!1,null,null,n,!1,i,r),t[pi]=e.current,yo(t.nodeType===8?t.parentNode:t),new Bd(e)};_n.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ee(188)):(t=Object.keys(t).join(","),Error(ee(268,t)));return t=sg(e),t=t===null?null:t.stateNode,t};_n.flushSync=function(t){return wr(t)};_n.hydrate=function(t,e,n){if(!Vl(e))throw Error(ee(200));return Gl(null,t,e,!0,n)};_n.hydrateRoot=function(t,e,n){if(!zd(t))throw Error(ee(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=O_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=F_(e,null,t,1,n??null,r,!1,s,o),t[pi]=e.current,yo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Hl(e)};_n.render=function(t,e,n){if(!Vl(e))throw Error(ee(200));return Gl(null,t,e,!1,n)};_n.unmountComponentAtNode=function(t){if(!Vl(t))throw Error(ee(40));return t._reactRootContainer?(wr(function(){Gl(null,null,t,!1,function(){t._reactRootContainer=null,t[pi]=null})}),!0):!1};_n.unstable_batchedUpdates=Ud;_n.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Vl(n))throw Error(ee(200));if(t==null||t._reactInternals===void 0)throw Error(ee(38));return Gl(t,e,n,!1,i)};_n.version="18.3.1-next-f1338f8080-20240426";function k_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(k_)}catch(t){console.error(t)}}k_(),km.exports=_n;var oy=km.exports,mp=oy;oc.createRoot=mp.createRoot,oc.hydrateRoot=mp.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Sl(){return Sl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Sl.apply(null,arguments)}var Fi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Fi||(Fi={}));const gp="popstate";function ay(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return Jc("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:z_(r)}return uy(e,n,null,t)}function on(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function B_(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ly(){return Math.random().toString(36).substr(2,8)}function _p(t,e){return{usr:t.state,key:t.key,idx:e}}function Jc(t,e,n,i){return n===void 0&&(n=null),Sl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Wl(e):e,{state:n,key:e&&e.key||i||ly()})}function z_(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Wl(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function uy(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=Fi.Pop,l=null,u=f();u==null&&(u=0,o.replaceState(Sl({},o.state,{idx:u}),""));function f(){return(o.state||{idx:null}).idx}function d(){a=Fi.Pop;let p=f(),c=p==null?null:p-u;u=p,l&&l({action:a,location:y.location,delta:c})}function h(p,c){a=Fi.Push;let g=Jc(y.location,p,c);u=f()+1;let _=_p(g,u),M=y.createHref(g);try{o.pushState(_,"",M)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;r.location.assign(M)}s&&l&&l({action:a,location:y.location,delta:1})}function m(p,c){a=Fi.Replace;let g=Jc(y.location,p,c);u=f();let _=_p(g,u),M=y.createHref(g);o.replaceState(_,"",M),s&&l&&l({action:a,location:y.location,delta:0})}function v(p){let c=r.location.origin!=="null"?r.location.origin:r.location.href,g=typeof p=="string"?p:z_(p);return g=g.replace(/ $/,"%20"),on(c,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,c)}let y={get action(){return a},get location(){return t(r,o)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(gp,d),l=p,()=>{r.removeEventListener(gp,d),l=null}},createHref(p){return e(r,p)},createURL:v,encodeLocation(p){let c=v(p);return{pathname:c.pathname,search:c.search,hash:c.hash}},push:h,replace:m,go(p){return o.go(p)}};return y}var vp;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(vp||(vp={}));function cy(t,e,n){return n===void 0&&(n="/"),fy(t,e,n)}function fy(t,e,n,i){let r=typeof e=="string"?Wl(e):e,s=G_(r.pathname||"/",n);if(s==null)return null;let o=H_(t);dy(o);let a=null,l=Ty(s);for(let u=0;a==null&&u<o.length;++u)a=Sy(o[u],l);return a}function H_(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(on(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let u=ms([i,l.relativePath]),f=n.concat(l);s.children&&s.children.length>0&&(on(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),H_(s.children,e,f,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:xy(u,s.index),routesMeta:f})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of V_(s.path))r(s,o,l)}),e}function V_(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=V_(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function dy(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:yy(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const hy=/^:[\w-]+$/,py=3,my=2,gy=1,_y=10,vy=-2,xp=t=>t==="*";function xy(t,e){let n=t.split("/"),i=n.length;return n.some(xp)&&(i+=vy),e&&(i+=my),n.filter(r=>!xp(r)).reduce((r,s)=>r+(hy.test(s)?py:s===""?gy:_y),i)}function yy(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function Sy(t,e,n){let{routesMeta:i}=t,r={},s="/",o=[];for(let a=0;a<i.length;++a){let l=i[a],u=a===i.length-1,f=s==="/"?e:e.slice(s.length)||"/",d=My({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},f),h=l.route;if(!d)return null;Object.assign(r,d.params),o.push({params:r,pathname:ms([s,d.pathname]),pathnameBase:Ay(ms([s,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(s=ms([s,d.pathnameBase]))}return o}function My(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=Ey(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((u,f,d)=>{let{paramName:h,isOptional:m}=f;if(h==="*"){let y=a[d]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const v=a[d];return m&&!v?u[h]=void 0:u[h]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function Ey(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),B_(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function Ty(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return B_(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function G_(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const wy=t=>t.replace(/\/\/+/g,"/"),ms=t=>wy(t.join("/")),Ay=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/");function Cy(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const W_=["post","put","patch","delete"];new Set(W_);const Ry=["get",...W_];new Set(Ry);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ml(){return Ml=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ml.apply(null,arguments)}const Py=xe.createContext(null),by=xe.createContext(null),X_=xe.createContext(null),Xl=xe.createContext(null),jl=xe.createContext({outlet:null,matches:[],isDataRoute:!1}),j_=xe.createContext(null);function Hd(){return xe.useContext(Xl)!=null}function Ly(){return Hd()||on(!1),xe.useContext(Xl).location}function Dy(t,e){return Uy(t,e)}function Uy(t,e,n,i){Hd()||on(!1);let{navigator:r}=xe.useContext(X_),{matches:s}=xe.useContext(jl),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Ly(),f;if(e){var d;let p=typeof e=="string"?Wl(e):e;l==="/"||(d=p.pathname)!=null&&d.startsWith(l)||on(!1),f=p}else f=u;let h=f.pathname||"/",m=h;if(l!=="/"){let p=l.replace(/^\//,"").split("/");m="/"+h.replace(/^\//,"").split("/").slice(p.length).join("/")}let v=cy(t,{pathname:m}),y=ky(v&&v.map(p=>Object.assign({},p,{params:Object.assign({},a,p.params),pathname:ms([l,r.encodeLocation?r.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?l:ms([l,r.encodeLocation?r.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),s,n,i);return e&&y?xe.createElement(Xl.Provider,{value:{location:Ml({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Fi.Pop}},y):y}function Iy(){let t=Vy(),e=Cy(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return xe.createElement(xe.Fragment,null,xe.createElement("h2",null,"Unexpected Application Error!"),xe.createElement("h3",{style:{fontStyle:"italic"}},e),n?xe.createElement("pre",{style:r},n):null,null)}const Ny=xe.createElement(Iy,null);class Fy extends xe.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?xe.createElement(jl.Provider,{value:this.props.routeContext},xe.createElement(j_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Oy(t){let{routeContext:e,match:n,children:i}=t,r=xe.useContext(Py);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),xe.createElement(jl.Provider,{value:e},i)}function ky(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(r=n)==null?void 0:r.errors;if(a!=null){let f=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);f>=0||on(!1),o=o.slice(0,Math.min(o.length,f+1))}let l=!1,u=-1;if(n&&i&&i.v7_partialHydration)for(let f=0;f<o.length;f++){let d=o[f];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=f),d.route.id){let{loaderData:h,errors:m}=n,v=d.route.loader&&h[d.route.id]===void 0&&(!m||m[d.route.id]===void 0);if(d.route.lazy||v){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((f,d,h)=>{let m,v=!1,y=null,p=null;n&&(m=a&&d.route.id?a[d.route.id]:void 0,y=d.route.errorElement||Ny,l&&(u<0&&h===0?(Gy("route-fallback"),v=!0,p=null):u===h&&(v=!0,p=d.route.hydrateFallbackElement||null)));let c=e.concat(o.slice(0,h+1)),g=()=>{let _;return m?_=y:v?_=p:d.route.Component?_=xe.createElement(d.route.Component,null):d.route.element?_=d.route.element:_=f,xe.createElement(Oy,{match:d,routeContext:{outlet:f,matches:c,isDataRoute:n!=null},children:_})};return n&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?xe.createElement(Fy,{location:n.location,revalidation:n.revalidation,component:y,error:m,children:g(),routeContext:{outlet:null,matches:c,isDataRoute:!0}}):g()},null)}var Y_=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Y_||{});function By(t){let e=xe.useContext(by);return e||on(!1),e}function zy(t){let e=xe.useContext(jl);return e||on(!1),e}function Hy(t){let e=zy(),n=e.matches[e.matches.length-1];return n.route.id||on(!1),n.route.id}function Vy(){var t;let e=xe.useContext(j_),n=By(Y_.UseRouteError),i=Hy();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}const yp={};function Gy(t,e,n){yp[t]||(yp[t]=!0)}function Wy(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function ef(t){on(!1)}function Xy(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Fi.Pop,navigator:s,static:o=!1,future:a}=t;Hd()&&on(!1);let l=e.replace(/^\/*/,"/"),u=xe.useMemo(()=>({basename:l,navigator:s,static:o,future:Ml({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof i=="string"&&(i=Wl(i));let{pathname:f="/",search:d="",hash:h="",state:m=null,key:v="default"}=i,y=xe.useMemo(()=>{let p=G_(f,l);return p==null?null:{location:{pathname:p,search:d,hash:h,state:m,key:v},navigationType:r}},[l,f,d,h,m,v,r]);return y==null?null:xe.createElement(X_.Provider,{value:u},xe.createElement(Xl.Provider,{children:n,value:y}))}function jy(t){let{children:e,location:n}=t;return Dy(tf(e),n)}new Promise(()=>{});function tf(t,e){e===void 0&&(e=[]);let n=[];return xe.Children.forEach(t,(i,r)=>{if(!xe.isValidElement(i))return;let s=[...e,r];if(i.type===xe.Fragment){n.push.apply(n,tf(i.props.children,s));return}i.type!==ef&&on(!1),!i.props.index||!i.props.children||on(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=tf(i.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Yy="6";try{window.__reactRouterVersion=Yy}catch{}const $y="startTransition",Sp=qv[$y];function qy(t){let{basename:e,children:n,future:i,window:r}=t,s=xe.useRef();s.current==null&&(s.current=ay({window:r,v5Compat:!0}));let o=s.current,[a,l]=xe.useState({action:o.action,location:o.location}),{v7_startTransition:u}=i||{},f=xe.useCallback(d=>{u&&Sp?Sp(()=>l(d)):l(d)},[l,u]);return xe.useLayoutEffect(()=>o.listen(f),[o,f]),xe.useEffect(()=>Wy(i),[i]),xe.createElement(Xy,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:i})}var Mp;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Mp||(Mp={}));var Ep;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Ep||(Ep={}));/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vd="169",gs={ROTATE:0,DOLLY:1,PAN:2},as={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ky=0,Tp=1,Zy=2,$_=1,Qy=2,ii=3,qi=0,nn=1,oi=2,Xi=0,_s=1,nf=2,wp=3,Ap=4,Jy=5,fr=100,eS=101,tS=102,nS=103,iS=104,rS=200,sS=201,oS=202,aS=203,rf=204,sf=205,lS=206,uS=207,cS=208,fS=209,dS=210,hS=211,pS=212,mS=213,gS=214,of=0,af=1,lf=2,Cs=3,uf=4,cf=5,ff=6,df=7,q_=0,_S=1,vS=2,ji=0,xS=1,yS=2,SS=3,MS=4,ES=5,TS=6,wS=7,K_=300,Rs=301,Ps=302,hf=303,pf=304,Yl=306,mf=1e3,gr=1001,gf=1002,wn=1003,AS=1004,sa=1005,On=1006,Pu=1007,_r=1008,_i=1009,Z_=1010,Q_=1011,Po=1012,Gd=1013,Ar=1014,ui=1015,No=1016,Wd=1017,Xd=1018,bs=1020,J_=35902,ev=1021,tv=1022,Bn=1023,nv=1024,iv=1025,vs=1026,Ls=1027,rv=1028,jd=1029,sv=1030,Yd=1031,$d=1033,Ga=33776,Wa=33777,Xa=33778,ja=33779,_f=35840,vf=35841,xf=35842,yf=35843,Sf=36196,Mf=37492,Ef=37496,Tf=37808,wf=37809,Af=37810,Cf=37811,Rf=37812,Pf=37813,bf=37814,Lf=37815,Df=37816,Uf=37817,If=37818,Nf=37819,Ff=37820,Of=37821,Ya=36492,kf=36494,Bf=36495,ov=36283,zf=36284,Hf=36285,Vf=36286,CS=3200,RS=3201,PS=0,bS=1,Ui="",Xn="srgb",er="srgb-linear",qd="display-p3",$l="display-p3-linear",El="linear",at="srgb",Tl="rec709",wl="p3",Ir=7680,Cp=519,LS=512,DS=513,US=514,av=515,IS=516,NS=517,FS=518,OS=519,Rp=35044,Pp="300 es",ci=2e3,Al=2001;class Lr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$a=Math.PI/180,Gf=180/Math.PI;function Fo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[t&255]+Ft[t>>8&255]+Ft[t>>16&255]+Ft[t>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[n&63|128]+Ft[n>>8&255]+"-"+Ft[n>>16&255]+Ft[n>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function Vt(t,e,n){return Math.max(e,Math.min(n,t))}function kS(t,e){return(t%e+e)%e}function bu(t,e,n){return(1-n)*t+n*e}function Xs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function $t(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const BS={DEG2RAD:$a};class Ne{constructor(e=0,n=0){Ne.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ie{constructor(e,n,i,r,s,o,a,l,u){Ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],f=i[4],d=i[7],h=i[2],m=i[5],v=i[8],y=r[0],p=r[3],c=r[6],g=r[1],_=r[4],M=r[7],R=r[2],C=r[5],w=r[8];return s[0]=o*y+a*g+l*R,s[3]=o*p+a*_+l*C,s[6]=o*c+a*M+l*w,s[1]=u*y+f*g+d*R,s[4]=u*p+f*_+d*C,s[7]=u*c+f*M+d*w,s[2]=h*y+m*g+v*R,s[5]=h*p+m*_+v*C,s[8]=h*c+m*M+v*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8];return n*o*f-n*a*u-i*s*f+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],d=f*o-a*u,h=a*l-f*s,m=u*s-o*l,v=n*d+i*h+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=d*y,e[1]=(r*u-f*i)*y,e[2]=(a*i-r*o)*y,e[3]=h*y,e[4]=(f*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=m*y,e[7]=(i*l-u*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Lu.makeScale(e,n)),this}rotate(e){return this.premultiply(Lu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Lu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Lu=new Ie;function lv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Cl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function zS(){const t=Cl("canvas");return t.style.display="block",t}const bp={};function qa(t){t in bp||(bp[t]=!0,console.warn(t))}function HS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function VS(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function GS(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Lp=new Ie().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Dp=new Ie().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),js={[er]:{transfer:El,primaries:Tl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Xn]:{transfer:at,primaries:Tl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[$l]:{transfer:El,primaries:wl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Dp),fromReference:t=>t.applyMatrix3(Lp)},[qd]:{transfer:at,primaries:wl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Dp),fromReference:t=>t.applyMatrix3(Lp).convertLinearToSRGB()}},WS=new Set([er,$l]),Ke={enabled:!0,_workingColorSpace:er,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!WS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=js[e].toReference,r=js[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return js[t].primaries},getTransfer:function(t){return t===Ui?El:js[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(js[e].luminanceCoefficients)}};function xs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Du(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Nr;class XS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Nr===void 0&&(Nr=Cl("canvas")),Nr.width=e.width,Nr.height=e.height;const i=Nr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Nr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Cl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=xs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(xs(n[i]/255)*255):n[i]=xs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jS=0;class uv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jS++}),this.uuid=Fo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Uu(r[o].image)):s.push(Uu(r[o]))}else s=Uu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Uu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?XS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let YS=0;class rn extends Lr{constructor(e=rn.DEFAULT_IMAGE,n=rn.DEFAULT_MAPPING,i=gr,r=gr,s=On,o=_r,a=Bn,l=_i,u=rn.DEFAULT_ANISOTROPY,f=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:YS++}),this.uuid=Fo(),this.name="",this.source=new uv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==K_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mf:e.x=e.x-Math.floor(e.x);break;case gr:e.x=e.x<0?0:1;break;case gf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mf:e.y=e.y-Math.floor(e.y);break;case gr:e.y=e.y<0?0:1;break;case gf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=K_;rn.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,n=0,i=0,r=1){_t.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],f=l[4],d=l[8],h=l[1],m=l[5],v=l[9],y=l[2],p=l[6],c=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-y)<.01&&Math.abs(v-p)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+y)<.1&&Math.abs(v+p)<.1&&Math.abs(u+m+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(u+1)/2,M=(m+1)/2,R=(c+1)/2,C=(f+h)/4,w=(d+y)/4,P=(v+p)/4;return _>M&&_>R?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=C/i,s=w/i):M>R?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=C/r,s=P/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=w/s,r=P/s),this.set(i,r,s,n),this}let g=Math.sqrt((p-v)*(p-v)+(d-y)*(d-y)+(h-f)*(h-f));return Math.abs(g)<.001&&(g=1),this.x=(p-v)/g,this.y=(d-y)/g,this.z=(h-f)/g,this.w=Math.acos((u+m+c-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $S extends Lr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new _t(0,0,e,n),this.scissorTest=!1,this.viewport=new _t(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new rn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new uv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cr extends $S{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class cv extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class qS extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],f=i[r+2],d=i[r+3];const h=s[o+0],m=s[o+1],v=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=f,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=m,e[n+2]=v,e[n+3]=y;return}if(d!==y||l!==h||u!==m||f!==v){let p=1-a;const c=l*h+u*m+f*v+d*y,g=c>=0?1:-1,_=1-c*c;if(_>Number.EPSILON){const R=Math.sqrt(_),C=Math.atan2(R,c*g);p=Math.sin(p*C)/R,a=Math.sin(a*C)/R}const M=a*g;if(l=l*p+h*M,u=u*p+m*M,f=f*p+v*M,d=d*p+y*M,p===1-a){const R=1/Math.sqrt(l*l+u*u+f*f+d*d);l*=R,u*=R,f*=R,d*=R}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],f=i[r+3],d=s[o],h=s[o+1],m=s[o+2],v=s[o+3];return e[n]=a*v+f*d+l*m-u*h,e[n+1]=l*v+f*h+u*d-a*m,e[n+2]=u*v+f*m+a*h-l*d,e[n+3]=f*v-a*d-l*h-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),f=a(r/2),d=a(s/2),h=l(i/2),m=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*f*d+u*m*v,this._y=u*m*d-h*f*v,this._z=u*f*v+h*m*d,this._w=u*f*d-h*m*v;break;case"YXZ":this._x=h*f*d+u*m*v,this._y=u*m*d-h*f*v,this._z=u*f*v-h*m*d,this._w=u*f*d+h*m*v;break;case"ZXY":this._x=h*f*d-u*m*v,this._y=u*m*d+h*f*v,this._z=u*f*v+h*m*d,this._w=u*f*d-h*m*v;break;case"ZYX":this._x=h*f*d-u*m*v,this._y=u*m*d+h*f*v,this._z=u*f*v-h*m*d,this._w=u*f*d+h*m*v;break;case"YZX":this._x=h*f*d+u*m*v,this._y=u*m*d+h*f*v,this._z=u*f*v-h*m*d,this._w=u*f*d-h*m*v;break;case"XZY":this._x=h*f*d-u*m*v,this._y=u*m*d-h*f*v,this._z=u*f*v+h*m*d,this._w=u*f*d+h*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],f=n[6],d=n[10],h=i+a+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-u)*m,this._z=(o-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(f-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+u)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(s-u)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-r)/m,this._x=(s+u)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+o*a+r*u-s*l,this._y=r*f+o*l+s*a-i*u,this._z=s*f+o*u+i*l-r*a,this._w=o*f-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),f=Math.atan2(u,a),d=Math.sin((1-n)*f)/u,h=Math.sin(n*f)/u;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,n=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Up.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Up.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),f=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*u+o*d-a*f,this.y=i+l*f+a*u-s*d,this.z=r+l*d+s*f-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Iu.copy(this).projectOnVector(e),this.sub(Iu)}reflect(e){return this.sub(Iu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Iu=new F,Up=new Rr;class Oo{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Ln.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Ln.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Ln.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ln):Ln.fromBufferAttribute(s,o),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),oa.copy(i.boundingBox)),oa.applyMatrix4(e.matrixWorld),this.union(oa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ys),aa.subVectors(this.max,Ys),Fr.subVectors(e.a,Ys),Or.subVectors(e.b,Ys),kr.subVectors(e.c,Ys),Mi.subVectors(Or,Fr),Ei.subVectors(kr,Or),nr.subVectors(Fr,kr);let n=[0,-Mi.z,Mi.y,0,-Ei.z,Ei.y,0,-nr.z,nr.y,Mi.z,0,-Mi.x,Ei.z,0,-Ei.x,nr.z,0,-nr.x,-Mi.y,Mi.x,0,-Ei.y,Ei.x,0,-nr.y,nr.x,0];return!Nu(n,Fr,Or,kr,aa)||(n=[1,0,0,0,1,0,0,0,1],!Nu(n,Fr,Or,kr,aa))?!1:(la.crossVectors(Mi,Ei),n=[la.x,la.y,la.z],Nu(n,Fr,Or,kr,aa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qn=[new F,new F,new F,new F,new F,new F,new F,new F],Ln=new F,oa=new Oo,Fr=new F,Or=new F,kr=new F,Mi=new F,Ei=new F,nr=new F,Ys=new F,aa=new F,la=new F,ir=new F;function Nu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){ir.fromArray(t,s);const a=r.x*Math.abs(ir.x)+r.y*Math.abs(ir.y)+r.z*Math.abs(ir.z),l=e.dot(ir),u=n.dot(ir),f=i.dot(ir);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>a)return!1}return!0}const KS=new Oo,$s=new F,Fu=new F;class ql{constructor(e=new F,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):KS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$s.subVectors(e,this.center);const n=$s.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector($s,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($s.copy(e.center).add(Fu)),this.expandByPoint($s.copy(e.center).sub(Fu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jn=new F,Ou=new F,ua=new F,Ti=new F,ku=new F,ca=new F,Bu=new F;class Kd{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Jn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,n),Jn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ou.copy(e).add(n).multiplyScalar(.5),ua.copy(n).sub(e).normalize(),Ti.copy(this.origin).sub(Ou);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ua),a=Ti.dot(this.direction),l=-Ti.dot(ua),u=Ti.lengthSq(),f=Math.abs(1-o*o);let d,h,m,v;if(f>0)if(d=o*l-a,h=o*a-l,v=s*f,d>=0)if(h>=-v)if(h<=v){const y=1/f;d*=y,h*=y,m=d*(d+o*h+2*a)+h*(o*d+h+2*l)+u}else h=s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+u;else h=-s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+u;else h<=-v?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+u):h<=v?(d=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+u):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+u);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Ou).addScaledVector(ua,h),m}intersectSphere(e,n){Jn.subVectors(e.center,this.origin);const i=Jn.dot(this.direction),r=Jn.dot(Jn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,n,i,r,s){ku.subVectors(n,e),ca.subVectors(i,e),Bu.crossVectors(ku,ca);let o=this.direction.dot(Bu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ti.subVectors(this.origin,e);const l=a*this.direction.dot(ca.crossVectors(Ti,ca));if(l<0)return null;const u=a*this.direction.dot(ku.cross(Ti));if(u<0||l+u>o)return null;const f=-a*Ti.dot(Bu);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,n,i,r,s,o,a,l,u,f,d,h,m,v,y,p){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,f,d,h,m,v,y,p)}set(e,n,i,r,s,o,a,l,u,f,d,h,m,v,y,p){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=s,c[5]=o,c[9]=a,c[13]=l,c[2]=u,c[6]=f,c[10]=d,c[14]=h,c[3]=m,c[7]=v,c[11]=y,c[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Br.setFromMatrixColumn(e,0).length(),s=1/Br.setFromMatrixColumn(e,1).length(),o=1/Br.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*f,m=o*d,v=a*f,y=a*d;n[0]=l*f,n[4]=-l*d,n[8]=u,n[1]=m+v*u,n[5]=h-y*u,n[9]=-a*l,n[2]=y-h*u,n[6]=v+m*u,n[10]=o*l}else if(e.order==="YXZ"){const h=l*f,m=l*d,v=u*f,y=u*d;n[0]=h+y*a,n[4]=v*a-m,n[8]=o*u,n[1]=o*d,n[5]=o*f,n[9]=-a,n[2]=m*a-v,n[6]=y+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*f,m=l*d,v=u*f,y=u*d;n[0]=h-y*a,n[4]=-o*d,n[8]=v+m*a,n[1]=m+v*a,n[5]=o*f,n[9]=y-h*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*f,m=o*d,v=a*f,y=a*d;n[0]=l*f,n[4]=v*u-m,n[8]=h*u+y,n[1]=l*d,n[5]=y*u+h,n[9]=m*u-v,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*u,v=a*l,y=a*u;n[0]=l*f,n[4]=y-h*d,n[8]=v*d+m,n[1]=d,n[5]=o*f,n[9]=-a*f,n[2]=-u*f,n[6]=m*d+v,n[10]=h-y*d}else if(e.order==="XZY"){const h=o*l,m=o*u,v=a*l,y=a*u;n[0]=l*f,n[4]=-d,n[8]=u*f,n[1]=h*d+y,n[5]=o*f,n[9]=m*d-v,n[2]=v*d-m,n[6]=a*f,n[10]=y*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ZS,e,QS)}lookAt(e,n,i){const r=this.elements;return cn.subVectors(e,n),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),wi.crossVectors(i,cn),wi.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),wi.crossVectors(i,cn)),wi.normalize(),fa.crossVectors(cn,wi),r[0]=wi.x,r[4]=fa.x,r[8]=cn.x,r[1]=wi.y,r[5]=fa.y,r[9]=cn.y,r[2]=wi.z,r[6]=fa.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],f=i[1],d=i[5],h=i[9],m=i[13],v=i[2],y=i[6],p=i[10],c=i[14],g=i[3],_=i[7],M=i[11],R=i[15],C=r[0],w=r[4],P=r[8],$=r[12],x=r[1],E=r[5],z=r[9],B=r[13],G=r[2],Z=r[6],H=r[10],Q=r[14],L=r[3],Y=r[7],K=r[11],re=r[15];return s[0]=o*C+a*x+l*G+u*L,s[4]=o*w+a*E+l*Z+u*Y,s[8]=o*P+a*z+l*H+u*K,s[12]=o*$+a*B+l*Q+u*re,s[1]=f*C+d*x+h*G+m*L,s[5]=f*w+d*E+h*Z+m*Y,s[9]=f*P+d*z+h*H+m*K,s[13]=f*$+d*B+h*Q+m*re,s[2]=v*C+y*x+p*G+c*L,s[6]=v*w+y*E+p*Z+c*Y,s[10]=v*P+y*z+p*H+c*K,s[14]=v*$+y*B+p*Q+c*re,s[3]=g*C+_*x+M*G+R*L,s[7]=g*w+_*E+M*Z+R*Y,s[11]=g*P+_*z+M*H+R*K,s[15]=g*$+_*B+M*Q+R*re,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],f=e[2],d=e[6],h=e[10],m=e[14],v=e[3],y=e[7],p=e[11],c=e[15];return v*(+s*l*d-r*u*d-s*a*h+i*u*h+r*a*m-i*l*m)+y*(+n*l*m-n*u*h+s*o*h-r*o*m+r*u*f-s*l*f)+p*(+n*u*d-n*a*m-s*o*d+i*o*m+s*a*f-i*u*f)+c*(-r*a*f-n*l*d+n*a*h+r*o*d-i*o*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],d=e[9],h=e[10],m=e[11],v=e[12],y=e[13],p=e[14],c=e[15],g=d*p*u-y*h*u+y*l*m-a*p*m-d*l*c+a*h*c,_=v*h*u-f*p*u-v*l*m+o*p*m+f*l*c-o*h*c,M=f*y*u-v*d*u+v*a*m-o*y*m-f*a*c+o*d*c,R=v*d*l-f*y*l-v*a*h+o*y*h+f*a*p-o*d*p,C=n*g+i*_+r*M+s*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return e[0]=g*w,e[1]=(y*h*s-d*p*s-y*r*m+i*p*m+d*r*c-i*h*c)*w,e[2]=(a*p*s-y*l*s+y*r*u-i*p*u-a*r*c+i*l*c)*w,e[3]=(d*l*s-a*h*s-d*r*u+i*h*u+a*r*m-i*l*m)*w,e[4]=_*w,e[5]=(f*p*s-v*h*s+v*r*m-n*p*m-f*r*c+n*h*c)*w,e[6]=(v*l*s-o*p*s-v*r*u+n*p*u+o*r*c-n*l*c)*w,e[7]=(o*h*s-f*l*s+f*r*u-n*h*u-o*r*m+n*l*m)*w,e[8]=M*w,e[9]=(v*d*s-f*y*s-v*i*m+n*y*m+f*i*c-n*d*c)*w,e[10]=(o*y*s-v*a*s+v*i*u-n*y*u-o*i*c+n*a*c)*w,e[11]=(f*a*s-o*d*s-f*i*u+n*d*u+o*i*m-n*a*m)*w,e[12]=R*w,e[13]=(f*y*r-v*d*r+v*i*h-n*y*h-f*i*p+n*d*p)*w,e[14]=(v*a*r-o*y*r-v*i*l+n*y*l+o*i*p-n*a*p)*w,e[15]=(o*d*r-f*a*r+f*i*l-n*d*l-o*i*h+n*a*h)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,f=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,f*a+i,f*l-r*o,0,u*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,f=o+o,d=a+a,h=s*u,m=s*f,v=s*d,y=o*f,p=o*d,c=a*d,g=l*u,_=l*f,M=l*d,R=i.x,C=i.y,w=i.z;return r[0]=(1-(y+c))*R,r[1]=(m+M)*R,r[2]=(v-_)*R,r[3]=0,r[4]=(m-M)*C,r[5]=(1-(h+c))*C,r[6]=(p+g)*C,r[7]=0,r[8]=(v+_)*w,r[9]=(p-g)*w,r[10]=(1-(h+y))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Br.set(r[0],r[1],r[2]).length();const o=Br.set(r[4],r[5],r[6]).length(),a=Br.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Dn.copy(this);const u=1/s,f=1/o,d=1/a;return Dn.elements[0]*=u,Dn.elements[1]*=u,Dn.elements[2]*=u,Dn.elements[4]*=f,Dn.elements[5]*=f,Dn.elements[6]*=f,Dn.elements[8]*=d,Dn.elements[9]*=d,Dn.elements[10]*=d,n.setFromRotationMatrix(Dn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=ci){const l=this.elements,u=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let m,v;if(a===ci)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Al)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=ci){const l=this.elements,u=1/(n-e),f=1/(i-r),d=1/(o-s),h=(n+e)*u,m=(i+r)*f;let v,y;if(a===ci)v=(o+s)*d,y=-2*d;else if(a===Al)v=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Br=new F,Dn=new vt,ZS=new F(0,0,0),QS=new F(1,1,1),wi=new F,fa=new F,cn=new F,Ip=new vt,Np=new Rr;class vi{constructor(e=0,n=0,i=0,r=vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],f=r[9],d=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Ip.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ip,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Np.setFromEuler(this),this.setFromQuaternion(Np,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vi.DEFAULT_ORDER="XYZ";class fv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let JS=0;const Fp=new F,zr=new Rr,ei=new vt,da=new F,qs=new F,eM=new F,tM=new Rr,Op=new F(1,0,0),kp=new F(0,1,0),Bp=new F(0,0,1),zp={type:"added"},nM={type:"removed"},Hr={type:"childadded",child:null},zu={type:"childremoved",child:null};class sn extends Lr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:JS++}),this.uuid=Fo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new F,n=new vi,i=new Rr,r=new F(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new Ie}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return zr.setFromAxisAngle(e,n),this.quaternion.multiply(zr),this}rotateOnWorldAxis(e,n){return zr.setFromAxisAngle(e,n),this.quaternion.premultiply(zr),this}rotateX(e){return this.rotateOnAxis(Op,e)}rotateY(e){return this.rotateOnAxis(kp,e)}rotateZ(e){return this.rotateOnAxis(Bp,e)}translateOnAxis(e,n){return Fp.copy(e).applyQuaternion(this.quaternion),this.position.add(Fp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Op,e)}translateY(e){return this.translateOnAxis(kp,e)}translateZ(e){return this.translateOnAxis(Bp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?da.copy(e):da.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(qs,da,this.up):ei.lookAt(da,qs,this.up),this.quaternion.setFromRotationMatrix(ei),r&&(ei.extractRotation(r.matrixWorld),zr.setFromRotationMatrix(ei),this.quaternion.premultiply(zr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zp),Hr.child=e,this.dispatchEvent(Hr),Hr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(nM),zu.child=e,this.dispatchEvent(zu),zu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zp),Hr.child=e,this.dispatchEvent(Hr),Hr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,e,eM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,tM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),f=o(e.images),d=o(e.shapes),h=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const u in a){const f=a[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}sn.DEFAULT_UP=new F(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Un=new F,ti=new F,Hu=new F,ni=new F,Vr=new F,Gr=new F,Hp=new F,Vu=new F,Gu=new F,Wu=new F,Xu=new _t,ju=new _t,Yu=new _t;class kn{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Un.subVectors(e,n),r.cross(Un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Un.subVectors(r,n),ti.subVectors(i,n),Hu.subVectors(e,n);const o=Un.dot(Un),a=Un.dot(ti),l=Un.dot(Hu),u=ti.dot(ti),f=ti.dot(Hu),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,m=(u*l-a*f)*h,v=(o*f-a*l)*h;return s.set(1-m-v,v,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ni.x),l.addScaledVector(o,ni.y),l.addScaledVector(a,ni.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Xu.setScalar(0),ju.setScalar(0),Yu.setScalar(0),Xu.fromBufferAttribute(e,n),ju.fromBufferAttribute(e,i),Yu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Xu,s.x),o.addScaledVector(ju,s.y),o.addScaledVector(Yu,s.z),o}static isFrontFacing(e,n,i,r){return Un.subVectors(i,n),ti.subVectors(e,n),Un.cross(ti).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Un.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return kn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return kn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Vr.subVectors(r,i),Gr.subVectors(s,i),Vu.subVectors(e,i);const l=Vr.dot(Vu),u=Gr.dot(Vu);if(l<=0&&u<=0)return n.copy(i);Gu.subVectors(e,r);const f=Vr.dot(Gu),d=Gr.dot(Gu);if(f>=0&&d<=f)return n.copy(r);const h=l*d-f*u;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Vr,o);Wu.subVectors(e,s);const m=Vr.dot(Wu),v=Gr.dot(Wu);if(v>=0&&m<=v)return n.copy(s);const y=m*u-l*v;if(y<=0&&u>=0&&v<=0)return a=u/(u-v),n.copy(i).addScaledVector(Gr,a);const p=f*v-m*d;if(p<=0&&d-f>=0&&m-v>=0)return Hp.subVectors(s,r),a=(d-f)/(d-f+(m-v)),n.copy(r).addScaledVector(Hp,a);const c=1/(p+y+h);return o=y*c,a=h*c,n.copy(i).addScaledVector(Vr,o).addScaledVector(Gr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const dv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},ha={h:0,s:0,l:0};function $u(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Fe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ke.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ke.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ke.workingColorSpace){if(e=kS(e,1),n=Vt(n,0,1),i=Vt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=$u(o,s,e+1/3),this.g=$u(o,s,e),this.b=$u(o,s,e-1/3)}return Ke.toWorkingColorSpace(this,r),this}setStyle(e,n=Xn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Xn){const i=dv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xs(e.r),this.g=xs(e.g),this.b=xs(e.b),this}copyLinearToSRGB(e){return this.r=Du(e.r),this.g=Du(e.g),this.b=Du(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xn){return Ke.fromWorkingColorSpace(Ot.copy(this),e),Math.round(Vt(Ot.r*255,0,255))*65536+Math.round(Vt(Ot.g*255,0,255))*256+Math.round(Vt(Ot.b*255,0,255))}getHexString(e=Xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Ot.copy(this),n);const i=Ot.r,r=Ot.g,s=Ot.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const f=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=f<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Ot.copy(this),n),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=Xn){Ke.fromWorkingColorSpace(Ot.copy(this),e);const n=Ot.r,i=Ot.g,r=Ot.b;return e!==Xn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ai),this.setHSL(Ai.h+e,Ai.s+n,Ai.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ai),e.getHSL(ha);const i=bu(Ai.h,ha.h,n),r=bu(Ai.s,ha.s,n),s=bu(Ai.l,ha.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new Fe;Fe.NAMES=dv;let iM=0;class ko extends Lr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iM++}),this.uuid=Fo(),this.name="",this.type="Material",this.blending=_s,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rf,this.blendDst=sf,this.blendEquation=fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ir,this.stencilZFail=Ir,this.stencilZPass=Ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_s&&(i.blending=this.blending),this.side!==qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==rf&&(i.blendSrc=this.blendSrc),this.blendDst!==sf&&(i.blendDst=this.blendDst),this.blendEquation!==fr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ir&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ir&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ir&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class hv extends ko{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=q_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new F,pa=new Ne;class mn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Rp,this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)pa.fromBufferAttribute(this,n),pa.applyMatrix3(e),this.setXY(n,pa.x,pa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix3(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix4(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyNormalMatrix(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.transformDirection(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Xs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=$t(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Xs(n,this.array)),n}setX(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Xs(n,this.array)),n}setY(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Xs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Xs(n,this.array)),n}setW(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array),r=$t(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array),r=$t(r,this.array),s=$t(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rp&&(e.usage=this.usage),e}}class pv extends mn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class mv extends mn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class yr extends mn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let rM=0;const yn=new vt,qu=new sn,Wr=new F,fn=new Oo,Ks=new Oo,Ct=new F;class Kn extends Lr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=Fo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lv(e)?mv:pv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ie().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,n,i){return yn.makeTranslation(e,n,i),this.applyMatrix4(yn),this}scale(e,n,i){return yn.makeScale(e,n,i),this.applyMatrix4(yn),this}lookAt(e){return qu.lookAt(e),qu.updateMatrix(),this.applyMatrix4(qu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wr).negate(),this.translate(Wr.x,Wr.y,Wr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new yr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ql);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Ks.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(fn.min,Ks.min),fn.expandByPoint(Ct),Ct.addVectors(fn.max,Ks.max),fn.expandByPoint(Ct)):(fn.expandByPoint(Ks.min),fn.expandByPoint(Ks.max))}fn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ct.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ct));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)Ct.fromBufferAttribute(a,u),l&&(Wr.fromBufferAttribute(e,u),Ct.add(Wr)),r=Math.max(r,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new F,l[P]=new F;const u=new F,f=new F,d=new F,h=new Ne,m=new Ne,v=new Ne,y=new F,p=new F;function c(P,$,x){u.fromBufferAttribute(i,P),f.fromBufferAttribute(i,$),d.fromBufferAttribute(i,x),h.fromBufferAttribute(s,P),m.fromBufferAttribute(s,$),v.fromBufferAttribute(s,x),f.sub(u),d.sub(u),m.sub(h),v.sub(h);const E=1/(m.x*v.y-v.x*m.y);isFinite(E)&&(y.copy(f).multiplyScalar(v.y).addScaledVector(d,-m.y).multiplyScalar(E),p.copy(d).multiplyScalar(m.x).addScaledVector(f,-v.x).multiplyScalar(E),a[P].add(y),a[$].add(y),a[x].add(y),l[P].add(p),l[$].add(p),l[x].add(p))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let P=0,$=g.length;P<$;++P){const x=g[P],E=x.start,z=x.count;for(let B=E,G=E+z;B<G;B+=3)c(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const _=new F,M=new F,R=new F,C=new F;function w(P){R.fromBufferAttribute(r,P),C.copy(R);const $=a[P];_.copy($),_.sub(R.multiplyScalar(R.dot($))).normalize(),M.crossVectors(C,$);const E=M.dot(l[P])<0?-1:1;o.setXYZW(P,_.x,_.y,_.z,E)}for(let P=0,$=g.length;P<$;++P){const x=g[P],E=x.start,z=x.count;for(let B=E,G=E+z;B<G;B+=3)w(e.getX(B+0)),w(e.getX(B+1)),w(e.getX(B+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,u=new F,f=new F,d=new F;if(e)for(let h=0,m=e.count;h<m;h+=3){const v=e.getX(h+0),y=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,p),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,p),a.add(f),l.add(f),u.add(f),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ct.fromBufferAttribute(e,n),Ct.normalize(),e.setXYZ(n,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,l){const u=a.array,f=a.itemSize,d=a.normalized,h=new u.constructor(l.length*f);let m=0,v=0;for(let y=0,p=l.length;y<p;y++){a.isInterleavedBufferAttribute?m=l[y]*a.data.stride+a.offset:m=l[y]*f;for(let c=0;c<f;c++)h[v++]=u[m++]}return new mn(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Kn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let f=0,d=u.length;f<d;f++){const h=u[f],m=e(h,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let d=0,h=u.length;d<h;d++){const m=u[d];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const s=e.morphAttributes;for(const u in s){const f=[],d=s[u];for(let h=0,m=d.length;h<m;h++)f.push(d[h].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,f=o.length;u<f;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vp=new vt,rr=new Kd,ma=new ql,Gp=new F,ga=new F,_a=new F,va=new F,Ku=new F,xa=new F,Wp=new F,ya=new F;class fi extends sn{constructor(e=new Kn,n=new hv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){xa.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const f=a[l],d=s[l];f!==0&&(Ku.fromBufferAttribute(d,e),o?xa.addScaledVector(Ku,f):xa.addScaledVector(Ku.sub(n),f))}n.add(xa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ma.copy(i.boundingSphere),ma.applyMatrix4(s),rr.copy(e.ray).recast(e.near),!(ma.containsPoint(rr.origin)===!1&&(rr.intersectSphere(ma,Gp)===null||rr.origin.distanceToSquared(Gp)>(e.far-e.near)**2))&&(Vp.copy(s).invert(),rr.copy(e.ray).applyMatrix4(Vp),!(i.boundingBox!==null&&rr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,rr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,y=h.length;v<y;v++){const p=h[v],c=o[p.materialIndex],g=Math.max(p.start,m.start),_=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let M=g,R=_;M<R;M+=3){const C=a.getX(M),w=a.getX(M+1),P=a.getX(M+2);r=Sa(this,c,e,i,u,f,d,C,w,P),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let p=v,c=y;p<c;p+=3){const g=a.getX(p),_=a.getX(p+1),M=a.getX(p+2);r=Sa(this,o,e,i,u,f,d,g,_,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,y=h.length;v<y;v++){const p=h[v],c=o[p.materialIndex],g=Math.max(p.start,m.start),_=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=g,R=_;M<R;M+=3){const C=M,w=M+1,P=M+2;r=Sa(this,c,e,i,u,f,d,C,w,P),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let p=v,c=y;p<c;p+=3){const g=p,_=p+1,M=p+2;r=Sa(this,o,e,i,u,f,d,g,_,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function sM(t,e,n,i,r,s,o,a){let l;if(e.side===nn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===qi,a),l===null)return null;ya.copy(a),ya.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(ya);return u<n.near||u>n.far?null:{distance:u,point:ya.clone(),object:t}}function Sa(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,ga),t.getVertexPosition(l,_a),t.getVertexPosition(u,va);const f=sM(t,e,n,i,ga,_a,va,Wp);if(f){const d=new F;kn.getBarycoord(Wp,ga,_a,va,d),r&&(f.uv=kn.getInterpolatedAttribute(r,a,l,u,d,new Ne)),s&&(f.uv1=kn.getInterpolatedAttribute(s,a,l,u,d,new Ne)),o&&(f.normal=kn.getInterpolatedAttribute(o,a,l,u,d,new F),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new F,materialIndex:0};kn.getNormal(ga,_a,va,h.normal),f.face=h,f.barycoord=d}return f}class Bo extends Kn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],f=[],d=[];let h=0,m=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new yr(u,3)),this.setAttribute("normal",new yr(f,3)),this.setAttribute("uv",new yr(d,2));function v(y,p,c,g,_,M,R,C,w,P,$){const x=M/w,E=R/P,z=M/2,B=R/2,G=C/2,Z=w+1,H=P+1;let Q=0,L=0;const Y=new F;for(let K=0;K<H;K++){const re=K*E-B;for(let Ee=0;Ee<Z;Ee++){const ke=Ee*x-z;Y[y]=ke*g,Y[p]=re*_,Y[c]=G,u.push(Y.x,Y.y,Y.z),Y[y]=0,Y[p]=0,Y[c]=C>0?1:-1,f.push(Y.x,Y.y,Y.z),d.push(Ee/w),d.push(1-K/P),Q+=1}}for(let K=0;K<P;K++)for(let re=0;re<w;re++){const Ee=h+re+Z*K,ke=h+re+Z*(K+1),W=h+(re+1)+Z*(K+1),te=h+(re+1)+Z*K;l.push(Ee,ke,te),l.push(ke,W,te),L+=6}a.addGroup(m,L,$),m+=L,h+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ds(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function zt(t){const e={};for(let n=0;n<t.length;n++){const i=Ds(t[n]);for(const r in i)e[r]=i[r]}return e}function oM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function gv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const aM={clone:Ds,merge:zt};var lM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ki extends ko{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lM,this.fragmentShader=uM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ds(e.uniforms),this.uniformsGroups=oM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class _v extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=ci}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ci=new F,Xp=new Ne,jp=new Ne;class En extends _v{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Gf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($a*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gf*2*Math.atan(Math.tan($a*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z)}getViewSize(e,n){return this.getViewBounds(e,Xp,jp),n.subVectors(jp,Xp)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan($a*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Xr=-90,jr=1;class cM extends sn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new En(Xr,jr,e,n);r.layers=this.layers,this.add(r);const s=new En(Xr,jr,e,n);s.layers=this.layers,this.add(s);const o=new En(Xr,jr,e,n);o.layers=this.layers,this.add(o);const a=new En(Xr,jr,e,n);a.layers=this.layers,this.add(a);const l=new En(Xr,jr,e,n);l.layers=this.layers,this.add(l);const u=new En(Xr,jr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===ci)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Al)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(d,h,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class vv extends rn{constructor(e,n,i,r,s,o,a,l,u,f){e=e!==void 0?e:[],n=n!==void 0?n:Rs,super(e,n,i,r,s,o,a,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fM extends Cr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new vv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:On}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Bo(5,5,5),s=new Ki({name:"CubemapFromEquirect",uniforms:Ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:Xi});s.uniforms.tEquirect.value=n;const o=new fi(r,s),a=n.minFilter;return n.minFilter===_r&&(n.minFilter=On),new cM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Zu=new F,dM=new F,hM=new Ie;class bi{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Zu.subVectors(i,n).cross(dM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Zu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||hM.getNormalMatrix(e),r=this.coplanarPoint(Zu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const sr=new ql,Ma=new F;class xv{constructor(e=new bi,n=new bi,i=new bi,r=new bi,s=new bi,o=new bi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ci){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],f=r[5],d=r[6],h=r[7],m=r[8],v=r[9],y=r[10],p=r[11],c=r[12],g=r[13],_=r[14],M=r[15];if(i[0].setComponents(l-s,h-u,p-m,M-c).normalize(),i[1].setComponents(l+s,h+u,p+m,M+c).normalize(),i[2].setComponents(l+o,h+f,p+v,M+g).normalize(),i[3].setComponents(l-o,h-f,p-v,M-g).normalize(),i[4].setComponents(l-a,h-d,p-y,M-_).normalize(),n===ci)i[5].setComponents(l+a,h+d,p+y,M+_).normalize();else if(n===Al)i[5].setComponents(a,d,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(e){return sr.center.set(0,0,0),sr.radius=.7071067811865476,sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ma.x=r.normal.x>0?e.max.x:e.min.x,Ma.y=r.normal.y>0?e.max.y:e.min.y,Ma.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ma)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function pM(t){const e=new WeakMap;function n(a,l){const u=a.array,f=a.usage,d=u.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,u,f),a.onUploadCallback();let m;if(u instanceof Float32Array)m=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=t.SHORT;else if(u instanceof Uint32Array)m=t.UNSIGNED_INT;else if(u instanceof Int32Array)m=t.INT;else if(u instanceof Int8Array)m=t.BYTE;else if(u instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,u){const f=l.array,d=l.updateRanges;if(t.bindBuffer(u,a),d.length===0)t.bufferSubData(u,0,f);else{d.sort((m,v)=>m.start-v.start);let h=0;for(let m=1;m<d.length;m++){const v=d[h],y=d[m];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++h,d[h]=y)}d.length=h+1;for(let m=0,v=d.length;m<v;m++){const y=d[m];t.bufferSubData(u,y.start*f.BYTES_PER_ELEMENT,f,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class Kl extends Kn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,f=l+1,d=e/a,h=n/l,m=[],v=[],y=[],p=[];for(let c=0;c<f;c++){const g=c*h-o;for(let _=0;_<u;_++){const M=_*d-s;v.push(M,-g,0),y.push(0,0,1),p.push(_/a),p.push(1-c/l)}}for(let c=0;c<l;c++)for(let g=0;g<a;g++){const _=g+u*c,M=g+u*(c+1),R=g+1+u*(c+1),C=g+1+u*c;m.push(_,M,C),m.push(M,R,C)}this.setIndex(m),this.setAttribute("position",new yr(v,3)),this.setAttribute("normal",new yr(y,3)),this.setAttribute("uv",new yr(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kl(e.width,e.height,e.widthSegments,e.heightSegments)}}var mM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_M=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,SM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,MM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,EM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,TM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,AM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,CM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,RM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,PM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,LM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,DM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,UM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,IM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,NM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,FM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,OM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,kM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,BM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,HM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,VM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,GM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,WM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,XM="gl_FragColor = linearToOutputTexel( gl_FragColor );",jM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,YM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$M=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,KM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ZM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,QM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,JM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,iE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,oE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,aE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,lE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,hE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_E=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,SE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ME=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,EE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,TE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,AE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,CE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,RE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,PE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,LE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,UE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,IE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,OE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,kE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,BE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,HE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,VE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,GE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,WE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,XE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,YE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$E=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,KE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ZE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,QE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,JE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,eT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,nT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,rT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,oT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,aT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,uT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,hT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_T=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ST=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,MT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ET=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,TT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,CT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,RT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,PT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,UT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,NT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,FT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,BT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,GT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,WT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,YT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:mM,alphahash_pars_fragment:gM,alphamap_fragment:_M,alphamap_pars_fragment:vM,alphatest_fragment:xM,alphatest_pars_fragment:yM,aomap_fragment:SM,aomap_pars_fragment:MM,batching_pars_vertex:EM,batching_vertex:TM,begin_vertex:wM,beginnormal_vertex:AM,bsdfs:CM,iridescence_fragment:RM,bumpmap_pars_fragment:PM,clipping_planes_fragment:bM,clipping_planes_pars_fragment:LM,clipping_planes_pars_vertex:DM,clipping_planes_vertex:UM,color_fragment:IM,color_pars_fragment:NM,color_pars_vertex:FM,color_vertex:OM,common:kM,cube_uv_reflection_fragment:BM,defaultnormal_vertex:zM,displacementmap_pars_vertex:HM,displacementmap_vertex:VM,emissivemap_fragment:GM,emissivemap_pars_fragment:WM,colorspace_fragment:XM,colorspace_pars_fragment:jM,envmap_fragment:YM,envmap_common_pars_fragment:$M,envmap_pars_fragment:qM,envmap_pars_vertex:KM,envmap_physical_pars_fragment:aE,envmap_vertex:ZM,fog_vertex:QM,fog_pars_vertex:JM,fog_fragment:eE,fog_pars_fragment:tE,gradientmap_pars_fragment:nE,lightmap_pars_fragment:iE,lights_lambert_fragment:rE,lights_lambert_pars_fragment:sE,lights_pars_begin:oE,lights_toon_fragment:lE,lights_toon_pars_fragment:uE,lights_phong_fragment:cE,lights_phong_pars_fragment:fE,lights_physical_fragment:dE,lights_physical_pars_fragment:hE,lights_fragment_begin:pE,lights_fragment_maps:mE,lights_fragment_end:gE,logdepthbuf_fragment:_E,logdepthbuf_pars_fragment:vE,logdepthbuf_pars_vertex:xE,logdepthbuf_vertex:yE,map_fragment:SE,map_pars_fragment:ME,map_particle_fragment:EE,map_particle_pars_fragment:TE,metalnessmap_fragment:wE,metalnessmap_pars_fragment:AE,morphinstance_vertex:CE,morphcolor_vertex:RE,morphnormal_vertex:PE,morphtarget_pars_vertex:bE,morphtarget_vertex:LE,normal_fragment_begin:DE,normal_fragment_maps:UE,normal_pars_fragment:IE,normal_pars_vertex:NE,normal_vertex:FE,normalmap_pars_fragment:OE,clearcoat_normal_fragment_begin:kE,clearcoat_normal_fragment_maps:BE,clearcoat_pars_fragment:zE,iridescence_pars_fragment:HE,opaque_fragment:VE,packing:GE,premultiplied_alpha_fragment:WE,project_vertex:XE,dithering_fragment:jE,dithering_pars_fragment:YE,roughnessmap_fragment:$E,roughnessmap_pars_fragment:qE,shadowmap_pars_fragment:KE,shadowmap_pars_vertex:ZE,shadowmap_vertex:QE,shadowmask_pars_fragment:JE,skinbase_vertex:eT,skinning_pars_vertex:tT,skinning_vertex:nT,skinnormal_vertex:iT,specularmap_fragment:rT,specularmap_pars_fragment:sT,tonemapping_fragment:oT,tonemapping_pars_fragment:aT,transmission_fragment:lT,transmission_pars_fragment:uT,uv_pars_fragment:cT,uv_pars_vertex:fT,uv_vertex:dT,worldpos_vertex:hT,background_vert:pT,background_frag:mT,backgroundCube_vert:gT,backgroundCube_frag:_T,cube_vert:vT,cube_frag:xT,depth_vert:yT,depth_frag:ST,distanceRGBA_vert:MT,distanceRGBA_frag:ET,equirect_vert:TT,equirect_frag:wT,linedashed_vert:AT,linedashed_frag:CT,meshbasic_vert:RT,meshbasic_frag:PT,meshlambert_vert:bT,meshlambert_frag:LT,meshmatcap_vert:DT,meshmatcap_frag:UT,meshnormal_vert:IT,meshnormal_frag:NT,meshphong_vert:FT,meshphong_frag:OT,meshphysical_vert:kT,meshphysical_frag:BT,meshtoon_vert:zT,meshtoon_frag:HT,points_vert:VT,points_frag:GT,shadow_vert:WT,shadow_frag:XT,sprite_vert:jT,sprite_frag:YT},se={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},jn={basic:{uniforms:zt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:zt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:zt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:zt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:zt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:zt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:zt([se.points,se.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:zt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:zt([se.common,se.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:zt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:zt([se.sprite,se.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:zt([se.common,se.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:zt([se.lights,se.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};jn.physical={uniforms:zt([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Ea={r:0,b:0,g:0},or=new vi,$T=new vt;function qT(t,e,n,i,r,s,o){const a=new Fe(0);let l=s===!0?0:1,u,f,d=null,h=0,m=null;function v(g){let _=g.isScene===!0?g.background:null;return _&&_.isTexture&&(_=(g.backgroundBlurriness>0?n:e).get(_)),_}function y(g){let _=!1;const M=v(g);M===null?c(a,l):M&&M.isColor&&(c(M,1),_=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function p(g,_){const M=v(_);M&&(M.isCubeTexture||M.mapping===Yl)?(f===void 0&&(f=new fi(new Bo(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:Ds(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(R,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),or.copy(_.backgroundRotation),or.x*=-1,or.y*=-1,or.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),f.material.uniforms.envMap.value=M,f.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4($T.makeRotationFromEuler(or)),f.material.toneMapped=Ke.getTransfer(M.colorSpace)!==at,(d!==M||h!==M.version||m!==t.toneMapping)&&(f.material.needsUpdate=!0,d=M,h=M.version,m=t.toneMapping),f.layers.enableAll(),g.unshift(f,f.geometry,f.material,0,0,null)):M&&M.isTexture&&(u===void 0&&(u=new fi(new Kl(2,2),new Ki({name:"BackgroundMaterial",uniforms:Ds(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=M,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=Ke.getTransfer(M.colorSpace)!==at,M.matrixAutoUpdate===!0&&M.updateMatrix(),u.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||h!==M.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,d=M,h=M.version,m=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null))}function c(g,_){g.getRGB(Ea,gv(t)),i.buffers.color.setClear(Ea.r,Ea.g,Ea.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(g,_=1){a.set(g),l=_,c(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,c(a,l)},render:y,addToRenderList:p}}function KT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(x,E,z,B,G){let Z=!1;const H=d(B,z,E);s!==H&&(s=H,u(s.object)),Z=m(x,B,z,G),Z&&v(x,B,z,G),G!==null&&e.update(G,t.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,M(x,E,z,B),G!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return t.createVertexArray()}function u(x){return t.bindVertexArray(x)}function f(x){return t.deleteVertexArray(x)}function d(x,E,z){const B=z.wireframe===!0;let G=i[x.id];G===void 0&&(G={},i[x.id]=G);let Z=G[E.id];Z===void 0&&(Z={},G[E.id]=Z);let H=Z[B];return H===void 0&&(H=h(l()),Z[B]=H),H}function h(x){const E=[],z=[],B=[];for(let G=0;G<n;G++)E[G]=0,z[G]=0,B[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:z,attributeDivisors:B,object:x,attributes:{},index:null}}function m(x,E,z,B){const G=s.attributes,Z=E.attributes;let H=0;const Q=z.getAttributes();for(const L in Q)if(Q[L].location>=0){const K=G[L];let re=Z[L];if(re===void 0&&(L==="instanceMatrix"&&x.instanceMatrix&&(re=x.instanceMatrix),L==="instanceColor"&&x.instanceColor&&(re=x.instanceColor)),K===void 0||K.attribute!==re||re&&K.data!==re.data)return!0;H++}return s.attributesNum!==H||s.index!==B}function v(x,E,z,B){const G={},Z=E.attributes;let H=0;const Q=z.getAttributes();for(const L in Q)if(Q[L].location>=0){let K=Z[L];K===void 0&&(L==="instanceMatrix"&&x.instanceMatrix&&(K=x.instanceMatrix),L==="instanceColor"&&x.instanceColor&&(K=x.instanceColor));const re={};re.attribute=K,K&&K.data&&(re.data=K.data),G[L]=re,H++}s.attributes=G,s.attributesNum=H,s.index=B}function y(){const x=s.newAttributes;for(let E=0,z=x.length;E<z;E++)x[E]=0}function p(x){c(x,0)}function c(x,E){const z=s.newAttributes,B=s.enabledAttributes,G=s.attributeDivisors;z[x]=1,B[x]===0&&(t.enableVertexAttribArray(x),B[x]=1),G[x]!==E&&(t.vertexAttribDivisor(x,E),G[x]=E)}function g(){const x=s.newAttributes,E=s.enabledAttributes;for(let z=0,B=E.length;z<B;z++)E[z]!==x[z]&&(t.disableVertexAttribArray(z),E[z]=0)}function _(x,E,z,B,G,Z,H){H===!0?t.vertexAttribIPointer(x,E,z,G,Z):t.vertexAttribPointer(x,E,z,B,G,Z)}function M(x,E,z,B){y();const G=B.attributes,Z=z.getAttributes(),H=E.defaultAttributeValues;for(const Q in Z){const L=Z[Q];if(L.location>=0){let Y=G[Q];if(Y===void 0&&(Q==="instanceMatrix"&&x.instanceMatrix&&(Y=x.instanceMatrix),Q==="instanceColor"&&x.instanceColor&&(Y=x.instanceColor)),Y!==void 0){const K=Y.normalized,re=Y.itemSize,Ee=e.get(Y);if(Ee===void 0)continue;const ke=Ee.buffer,W=Ee.type,te=Ee.bytesPerElement,ce=W===t.INT||W===t.UNSIGNED_INT||Y.gpuType===Gd;if(Y.isInterleavedBufferAttribute){const ae=Y.data,Le=ae.stride,we=Y.offset;if(ae.isInstancedInterleavedBuffer){for(let He=0;He<L.locationSize;He++)c(L.location+He,ae.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let He=0;He<L.locationSize;He++)p(L.location+He);t.bindBuffer(t.ARRAY_BUFFER,ke);for(let He=0;He<L.locationSize;He++)_(L.location+He,re/L.locationSize,W,K,Le*te,(we+re/L.locationSize*He)*te,ce)}else{if(Y.isInstancedBufferAttribute){for(let ae=0;ae<L.locationSize;ae++)c(L.location+ae,Y.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ae=0;ae<L.locationSize;ae++)p(L.location+ae);t.bindBuffer(t.ARRAY_BUFFER,ke);for(let ae=0;ae<L.locationSize;ae++)_(L.location+ae,re/L.locationSize,W,K,re*te,re/L.locationSize*ae*te,ce)}}else if(H!==void 0){const K=H[Q];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(L.location,K);break;case 3:t.vertexAttrib3fv(L.location,K);break;case 4:t.vertexAttrib4fv(L.location,K);break;default:t.vertexAttrib1fv(L.location,K)}}}}g()}function R(){P();for(const x in i){const E=i[x];for(const z in E){const B=E[z];for(const G in B)f(B[G].object),delete B[G];delete E[z]}delete i[x]}}function C(x){if(i[x.id]===void 0)return;const E=i[x.id];for(const z in E){const B=E[z];for(const G in B)f(B[G].object),delete B[G];delete E[z]}delete i[x.id]}function w(x){for(const E in i){const z=i[E];if(z[x.id]===void 0)continue;const B=z[x.id];for(const G in B)f(B[G].object),delete B[G];delete z[x.id]}}function P(){$(),o=!0,s!==r&&(s=r,u(s.object))}function $(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:$,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:y,enableAttribute:p,disableUnusedAttributes:g}}function ZT(t,e,n){let i;function r(u){i=u}function s(u,f){t.drawArrays(i,u,f),n.update(f,i,1)}function o(u,f,d){d!==0&&(t.drawArraysInstanced(i,u,f,d),n.update(f,i,d))}function a(u,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,f,0,d);let m=0;for(let v=0;v<d;v++)m+=f[v];n.update(m,i,1)}function l(u,f,d,h){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<u.length;v++)o(u[v],f[v],h[v]);else{m.multiDrawArraysInstancedWEBGL(i,u,0,f,0,h,0,d);let v=0;for(let y=0;y<d;y++)v+=f[y];for(let y=0;y<h.length;y++)n.update(v,i,h[y])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function QT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==Bn&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const P=w===No&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==_i&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==ui&&!P)}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const f=l(u);f!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const d=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){const w=e.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),c=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=v>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:m,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:p,maxAttributes:c,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:R,maxSamples:C}}function JT(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new bi,a=new Ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||i!==0||r;return r=h,i=d.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,m){const v=d.clippingPlanes,y=d.clipIntersection,p=d.clipShadows,c=t.get(d);if(!r||v===null||v.length===0||s&&!p)s?f(null):u();else{const g=s?0:i,_=g*4;let M=c.clippingState||null;l.value=M,M=f(v,h,_,m);for(let R=0;R!==_;++R)M[R]=n[R];c.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,m,v){const y=d!==null?d.length:0;let p=null;if(y!==0){if(p=l.value,v!==!0||p===null){const c=m+y*4,g=h.matrixWorldInverse;a.getNormalMatrix(g),(p===null||p.length<c)&&(p=new Float32Array(c));for(let _=0,M=m;_!==y;++_,M+=4)o.copy(d[_]).applyMatrix4(g,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function ew(t){let e=new WeakMap;function n(o,a){return a===hf?o.mapping=Rs:a===pf&&(o.mapping=Ps),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===hf||a===pf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new fM(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class tw extends _v{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ls=4,Yp=[.125,.215,.35,.446,.526,.582],dr=20,Qu=new tw,$p=new Fe;let Ju=null,ec=0,tc=0,nc=!1;const cr=(1+Math.sqrt(5))/2,Yr=1/cr,qp=[new F(-cr,Yr,0),new F(cr,Yr,0),new F(-Yr,0,cr),new F(Yr,0,cr),new F(0,cr,-Yr),new F(0,cr,Yr),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class Kp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Ju=this._renderer.getRenderTarget(),ec=this._renderer.getActiveCubeFace(),tc=this._renderer.getActiveMipmapLevel(),nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ju,ec,tc),this._renderer.xr.enabled=nc,e.scissorTest=!1,Ta(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Rs||e.mapping===Ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ju=this._renderer.getRenderTarget(),ec=this._renderer.getActiveCubeFace(),tc=this._renderer.getActiveMipmapLevel(),nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:On,minFilter:On,generateMipmaps:!1,type:No,format:Bn,colorSpace:er,depthBuffer:!1},r=Zp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nw(s)),this._blurMaterial=iw(s,e,n)}return r}_compileMaterial(e){const n=new fi(this._lodPlanes[0],e);this._renderer.compile(n,Qu)}_sceneToCubeUV(e,n,i,r){const a=new En(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor($p),f.toneMapping=ji,f.autoClear=!1;const m=new hv({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),v=new fi(new Bo,m);let y=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,y=!0):(m.color.copy($p),y=!0);for(let c=0;c<6;c++){const g=c%3;g===0?(a.up.set(0,l[c],0),a.lookAt(u[c],0,0)):g===1?(a.up.set(0,0,l[c]),a.lookAt(0,u[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,u[c]));const _=this._cubeSize;Ta(r,g*_,c>2?_:0,_,_),f.setRenderTarget(r),y&&f.render(v,a),f.render(e,a)}v.geometry.dispose(),v.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Rs||e.mapping===Ps;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new fi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ta(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Qu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=qp[(r-s-1)%qp.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new fi(this._lodPlanes[r],u),h=u.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*dr-1),y=s/v,p=isFinite(s)?1+Math.floor(f*y):dr;p>dr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${dr}`);const c=[];let g=0;for(let w=0;w<dr;++w){const P=w/y,$=Math.exp(-P*P/2);c.push($),w===0?g+=$:w<p&&(g+=2*$)}for(let w=0;w<c.length;w++)c[w]=c[w]/g;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=c,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=v,h.mipInt.value=_-i;const M=this._sizeLods[r],R=3*M*(r>_-ls?r-_+ls:0),C=4*(this._cubeSize-M);Ta(n,R,C,3*M,2*M),l.setRenderTarget(n),l.render(d,Qu)}}function nw(t){const e=[],n=[],i=[];let r=t;const s=t-ls+1+Yp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ls?l=Yp[o-t+ls-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),f=-u,d=1+u,h=[f,f,d,f,d,d,f,f,d,d,f,d],m=6,v=6,y=3,p=2,c=1,g=new Float32Array(y*v*m),_=new Float32Array(p*v*m),M=new Float32Array(c*v*m);for(let C=0;C<m;C++){const w=C%3*2/3-1,P=C>2?0:-1,$=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];g.set($,y*v*C),_.set(h,p*v*C);const x=[C,C,C,C,C,C];M.set(x,c*v*C)}const R=new Kn;R.setAttribute("position",new mn(g,y)),R.setAttribute("uv",new mn(_,p)),R.setAttribute("faceIndex",new mn(M,c)),e.push(R),r>ls&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Zp(t,e,n){const i=new Cr(t,e,n);return i.texture.mapping=Yl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ta(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function iw(t,e,n){const i=new Float32Array(dr),r=new F(0,1,0);return new Ki({name:"SphericalGaussianBlur",defines:{n:dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Qp(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Jp(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Zd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function rw(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===hf||l===pf,f=l===Rs||l===Ps;if(u||f){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new Kp(t)),d=u?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return u&&m&&m.height>0||f&&m&&r(m)?(n===null&&(n=new Kp(t)),d=u?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const u=6;for(let f=0;f<u;f++)a[f]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function sw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&qa("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function ow(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const y=h.morphAttributes[v];for(let p=0,c=y.length;p<c;p++)e.remove(y[p])}h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const v in h)e.update(h[v],t.ARRAY_BUFFER);const m=d.morphAttributes;for(const v in m){const y=m[v];for(let p=0,c=y.length;p<c;p++)e.update(y[p],t.ARRAY_BUFFER)}}function u(d){const h=[],m=d.index,v=d.attributes.position;let y=0;if(m!==null){const g=m.array;y=m.version;for(let _=0,M=g.length;_<M;_+=3){const R=g[_+0],C=g[_+1],w=g[_+2];h.push(R,C,C,w,w,R)}}else if(v!==void 0){const g=v.array;y=v.version;for(let _=0,M=g.length/3-1;_<M;_+=3){const R=_+0,C=_+1,w=_+2;h.push(R,C,C,w,w,R)}}else return;const p=new(lv(h)?mv:pv)(h,1);p.version=y;const c=s.get(d);c&&e.remove(c),s.set(d,p)}function f(d){const h=s.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function aw(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,m){t.drawElements(i,m,s,h*o),n.update(m,i,1)}function u(h,m,v){v!==0&&(t.drawElementsInstanced(i,m,s,h*o,v),n.update(m,i,v))}function f(h,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,h,0,v);let p=0;for(let c=0;c<v;c++)p+=m[c];n.update(p,i,1)}function d(h,m,v,y){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let c=0;c<h.length;c++)u(h[c]/o,m[c],y[c]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,h,0,y,0,v);let c=0;for(let g=0;g<v;g++)c+=m[g];for(let g=0;g<y.length;g++)n.update(c,i,y[g])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function lw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function uw(t,e,n){const i=new WeakMap,r=new _t;function s(o,a,l){const u=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=f!==void 0?f.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let x=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var m=x;h!==void 0&&h.texture.dispose();const v=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,c=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let M=0;v===!0&&(M=1),y===!0&&(M=2),p===!0&&(M=3);let R=a.attributes.position.count*M,C=1;R>e.maxTextureSize&&(C=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const w=new Float32Array(R*C*4*d),P=new cv(w,R,C,d);P.type=ui,P.needsUpdate=!0;const $=M*4;for(let E=0;E<d;E++){const z=c[E],B=g[E],G=_[E],Z=R*C*4*E;for(let H=0;H<z.count;H++){const Q=H*$;v===!0&&(r.fromBufferAttribute(z,H),w[Z+Q+0]=r.x,w[Z+Q+1]=r.y,w[Z+Q+2]=r.z,w[Z+Q+3]=0),y===!0&&(r.fromBufferAttribute(B,H),w[Z+Q+4]=r.x,w[Z+Q+5]=r.y,w[Z+Q+6]=r.z,w[Z+Q+7]=0),p===!0&&(r.fromBufferAttribute(G,H),w[Z+Q+8]=r.x,w[Z+Q+9]=r.y,w[Z+Q+10]=r.z,w[Z+Q+11]=G.itemSize===4?r.w:1)}}h={count:d,texture:P,size:new Ne(R,C)},i.set(a,h),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let p=0;p<u.length;p++)v+=u[p];const y=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function cw(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class Sv extends rn{constructor(e,n,i,r,s,o,a,l,u,f=vs){if(f!==vs&&f!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===vs&&(i=Ar),i===void 0&&f===Ls&&(i=bs),super(null,r,s,o,a,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:wn,this.minFilter=l!==void 0?l:wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Mv=new rn,em=new Sv(1,1),Ev=new cv,Tv=new qS,wv=new vv,tm=[],nm=[],im=new Float32Array(16),rm=new Float32Array(9),sm=new Float32Array(4);function Fs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=tm[r];if(s===void 0&&(s=new Float32Array(r),tm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function wt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function At(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Zl(t,e){let n=nm[e];n===void 0&&(n=new Int32Array(e),nm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function fw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function dw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2fv(this.addr,e),At(n,e)}}function hw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(wt(n,e))return;t.uniform3fv(this.addr,e),At(n,e)}}function pw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4fv(this.addr,e),At(n,e)}}function mw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),At(n,e)}else{if(wt(n,i))return;sm.set(i),t.uniformMatrix2fv(this.addr,!1,sm),At(n,i)}}function gw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),At(n,e)}else{if(wt(n,i))return;rm.set(i),t.uniformMatrix3fv(this.addr,!1,rm),At(n,i)}}function _w(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),At(n,e)}else{if(wt(n,i))return;im.set(i),t.uniformMatrix4fv(this.addr,!1,im),At(n,i)}}function vw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function xw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2iv(this.addr,e),At(n,e)}}function yw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3iv(this.addr,e),At(n,e)}}function Sw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4iv(this.addr,e),At(n,e)}}function Mw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Ew(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2uiv(this.addr,e),At(n,e)}}function Tw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3uiv(this.addr,e),At(n,e)}}function ww(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4uiv(this.addr,e),At(n,e)}}function Aw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(em.compareFunction=av,s=em):s=Mv,n.setTexture2D(e||s,r)}function Cw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Tv,r)}function Rw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||wv,r)}function Pw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Ev,r)}function bw(t){switch(t){case 5126:return fw;case 35664:return dw;case 35665:return hw;case 35666:return pw;case 35674:return mw;case 35675:return gw;case 35676:return _w;case 5124:case 35670:return vw;case 35667:case 35671:return xw;case 35668:case 35672:return yw;case 35669:case 35673:return Sw;case 5125:return Mw;case 36294:return Ew;case 36295:return Tw;case 36296:return ww;case 35678:case 36198:case 36298:case 36306:case 35682:return Aw;case 35679:case 36299:case 36307:return Cw;case 35680:case 36300:case 36308:case 36293:return Rw;case 36289:case 36303:case 36311:case 36292:return Pw}}function Lw(t,e){t.uniform1fv(this.addr,e)}function Dw(t,e){const n=Fs(e,this.size,2);t.uniform2fv(this.addr,n)}function Uw(t,e){const n=Fs(e,this.size,3);t.uniform3fv(this.addr,n)}function Iw(t,e){const n=Fs(e,this.size,4);t.uniform4fv(this.addr,n)}function Nw(t,e){const n=Fs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Fw(t,e){const n=Fs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Ow(t,e){const n=Fs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function kw(t,e){t.uniform1iv(this.addr,e)}function Bw(t,e){t.uniform2iv(this.addr,e)}function zw(t,e){t.uniform3iv(this.addr,e)}function Hw(t,e){t.uniform4iv(this.addr,e)}function Vw(t,e){t.uniform1uiv(this.addr,e)}function Gw(t,e){t.uniform2uiv(this.addr,e)}function Ww(t,e){t.uniform3uiv(this.addr,e)}function Xw(t,e){t.uniform4uiv(this.addr,e)}function jw(t,e,n){const i=this.cache,r=e.length,s=Zl(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Mv,s[o])}function Yw(t,e,n){const i=this.cache,r=e.length,s=Zl(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Tv,s[o])}function $w(t,e,n){const i=this.cache,r=e.length,s=Zl(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||wv,s[o])}function qw(t,e,n){const i=this.cache,r=e.length,s=Zl(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Ev,s[o])}function Kw(t){switch(t){case 5126:return Lw;case 35664:return Dw;case 35665:return Uw;case 35666:return Iw;case 35674:return Nw;case 35675:return Fw;case 35676:return Ow;case 5124:case 35670:return kw;case 35667:case 35671:return Bw;case 35668:case 35672:return zw;case 35669:case 35673:return Hw;case 5125:return Vw;case 36294:return Gw;case 36295:return Ww;case 36296:return Xw;case 35678:case 36198:case 36298:case 36306:case 35682:return jw;case 35679:case 36299:case 36307:return Yw;case 35680:case 36300:case 36308:case 36293:return $w;case 36289:case 36303:case 36311:case 36292:return qw}}class Zw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=bw(n.type)}}class Qw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Kw(n.type)}}class Jw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const ic=/(\w+)(\])?(\[|\.)?/g;function om(t,e){t.seq.push(e),t.map[e.id]=e}function e1(t,e,n){const i=t.name,r=i.length;for(ic.lastIndex=0;;){const s=ic.exec(i),o=ic.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){om(n,u===void 0?new Zw(a,t,e):new Qw(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new Jw(a),om(n,d)),n=d}}}class Ka{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);e1(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function am(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const t1=37297;let n1=0;function i1(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function r1(t){const e=Ke.getPrimaries(Ke.workingColorSpace),n=Ke.getPrimaries(t);let i;switch(e===n?i="":e===wl&&n===Tl?i="LinearDisplayP3ToLinearSRGB":e===Tl&&n===wl&&(i="LinearSRGBToLinearDisplayP3"),t){case er:case $l:return[i,"LinearTransferOETF"];case Xn:case qd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function lm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+i1(t.getShaderSource(e),o)}else return r}function s1(t,e){const n=r1(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function o1(t,e){let n;switch(e){case xS:n="Linear";break;case yS:n="Reinhard";break;case SS:n="Cineon";break;case MS:n="ACESFilmic";break;case TS:n="AgX";break;case wS:n="Neutral";break;case ES:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const wa=new F;function a1(){Ke.getLuminanceCoefficients(wa);const t=wa.x.toFixed(4),e=wa.y.toFixed(4),n=wa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function l1(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(to).join(`
`)}function u1(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function c1(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function to(t){return t!==""}function um(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const f1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wf(t){return t.replace(f1,h1)}const d1=new Map;function h1(t,e){let n=Ue[e];if(n===void 0){const i=d1.get(e);if(i!==void 0)n=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Wf(n)}const p1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fm(t){return t.replace(p1,m1)}function m1(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function dm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function g1(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===$_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Qy?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function _1(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Rs:case Ps:e="ENVMAP_TYPE_CUBE";break;case Yl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function v1(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ps:e="ENVMAP_MODE_REFRACTION";break}return e}function x1(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case q_:e="ENVMAP_BLENDING_MULTIPLY";break;case _S:e="ENVMAP_BLENDING_MIX";break;case vS:e="ENVMAP_BLENDING_ADD";break}return e}function y1(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function S1(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=g1(n),u=_1(n),f=v1(n),d=x1(n),h=y1(n),m=l1(n),v=u1(s),y=r.createProgram();let p,c,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(to).join(`
`),p.length>0&&(p+=`
`),c=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(to).join(`
`),c.length>0&&(c+=`
`)):(p=[dm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(to).join(`
`),c=[dm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ji?"#define TONE_MAPPING":"",n.toneMapping!==ji?Ue.tonemapping_pars_fragment:"",n.toneMapping!==ji?o1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,s1("linearToOutputTexel",n.outputColorSpace),a1(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(to).join(`
`)),o=Wf(o),o=um(o,n),o=cm(o,n),a=Wf(a),a=um(a,n),a=cm(a,n),o=fm(o),a=fm(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,c=["#define varying in",n.glslVersion===Pp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Pp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const _=g+p+o,M=g+c+a,R=am(r,r.VERTEX_SHADER,_),C=am(r,r.FRAGMENT_SHADER,M);r.attachShader(y,R),r.attachShader(y,C),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function w(E){if(t.debug.checkShaderErrors){const z=r.getProgramInfoLog(y).trim(),B=r.getShaderInfoLog(R).trim(),G=r.getShaderInfoLog(C).trim();let Z=!0,H=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(Z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,R,C);else{const Q=lm(r,R,"vertex"),L=lm(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+z+`
`+Q+`
`+L)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(B===""||G==="")&&(H=!1);H&&(E.diagnostics={runnable:Z,programLog:z,vertexShader:{log:B,prefix:p},fragmentShader:{log:G,prefix:c}})}r.deleteShader(R),r.deleteShader(C),P=new Ka(r,y),$=c1(r,y)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let $;this.getAttributes=function(){return $===void 0&&w(this),$};let x=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(y,t1)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=n1++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=R,this.fragmentShader=C,this}let M1=0;class E1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new T1(e),n.set(e,i)),i}}class T1{constructor(e){this.id=M1++,this.code=e,this.usedTimes=0}}function w1(t,e,n,i,r,s,o){const a=new fv,l=new E1,u=new Set,f=[],d=r.logarithmicDepthBuffer,h=r.reverseDepthBuffer,m=r.vertexTextures;let v=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return u.add(x),x===0?"uv":`uv${x}`}function c(x,E,z,B,G){const Z=B.fog,H=G.geometry,Q=x.isMeshStandardMaterial?B.environment:null,L=(x.isMeshStandardMaterial?n:e).get(x.envMap||Q),Y=L&&L.mapping===Yl?L.image.height:null,K=y[x.type];x.precision!==null&&(v=r.getMaxPrecision(x.precision),v!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",v,"instead."));const re=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ee=re!==void 0?re.length:0;let ke=0;H.morphAttributes.position!==void 0&&(ke=1),H.morphAttributes.normal!==void 0&&(ke=2),H.morphAttributes.color!==void 0&&(ke=3);let W,te,ce,ae;if(K){const Yt=jn[K];W=Yt.vertexShader,te=Yt.fragmentShader}else W=x.vertexShader,te=x.fragmentShader,l.update(x),ce=l.getVertexShaderID(x),ae=l.getFragmentShaderID(x);const Le=t.getRenderTarget(),we=G.isInstancedMesh===!0,He=G.isBatchedMesh===!0,Je=!!x.map,Ve=!!x.matcap,b=!!L,an=!!x.aoMap,Be=!!x.lightMap,Xe=!!x.bumpMap,Ce=!!x.normalMap,rt=!!x.displacementMap,be=!!x.emissiveMap,A=!!x.metalnessMap,S=!!x.roughnessMap,N=x.anisotropy>0,j=x.clearcoat>0,J=x.dispersion>0,X=x.iridescence>0,ye=x.sheen>0,oe=x.transmission>0,pe=N&&!!x.anisotropyMap,je=j&&!!x.clearcoatMap,ne=j&&!!x.clearcoatNormalMap,me=j&&!!x.clearcoatRoughnessMap,Re=X&&!!x.iridescenceMap,Pe=X&&!!x.iridescenceThicknessMap,ge=ye&&!!x.sheenColorMap,ze=ye&&!!x.sheenRoughnessMap,De=!!x.specularMap,nt=!!x.specularColorMap,D=!!x.specularIntensityMap,fe=oe&&!!x.transmissionMap,V=oe&&!!x.thicknessMap,q=!!x.gradientMap,le=!!x.alphaMap,de=x.alphaTest>0,Ge=!!x.alphaHash,xt=!!x.extensions;let jt=ji;x.toneMapped&&(Le===null||Le.isXRRenderTarget===!0)&&(jt=t.toneMapping);const Ye={shaderID:K,shaderType:x.type,shaderName:x.name,vertexShader:W,fragmentShader:te,defines:x.defines,customVertexShaderID:ce,customFragmentShaderID:ae,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:v,batching:He,batchingColor:He&&G._colorsTexture!==null,instancing:we,instancingColor:we&&G.instanceColor!==null,instancingMorph:we&&G.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Le===null?t.outputColorSpace:Le.isXRRenderTarget===!0?Le.texture.colorSpace:er,alphaToCoverage:!!x.alphaToCoverage,map:Je,matcap:Ve,envMap:b,envMapMode:b&&L.mapping,envMapCubeUVHeight:Y,aoMap:an,lightMap:Be,bumpMap:Xe,normalMap:Ce,displacementMap:m&&rt,emissiveMap:be,normalMapObjectSpace:Ce&&x.normalMapType===bS,normalMapTangentSpace:Ce&&x.normalMapType===PS,metalnessMap:A,roughnessMap:S,anisotropy:N,anisotropyMap:pe,clearcoat:j,clearcoatMap:je,clearcoatNormalMap:ne,clearcoatRoughnessMap:me,dispersion:J,iridescence:X,iridescenceMap:Re,iridescenceThicknessMap:Pe,sheen:ye,sheenColorMap:ge,sheenRoughnessMap:ze,specularMap:De,specularColorMap:nt,specularIntensityMap:D,transmission:oe,transmissionMap:fe,thicknessMap:V,gradientMap:q,opaque:x.transparent===!1&&x.blending===_s&&x.alphaToCoverage===!1,alphaMap:le,alphaTest:de,alphaHash:Ge,combine:x.combine,mapUv:Je&&p(x.map.channel),aoMapUv:an&&p(x.aoMap.channel),lightMapUv:Be&&p(x.lightMap.channel),bumpMapUv:Xe&&p(x.bumpMap.channel),normalMapUv:Ce&&p(x.normalMap.channel),displacementMapUv:rt&&p(x.displacementMap.channel),emissiveMapUv:be&&p(x.emissiveMap.channel),metalnessMapUv:A&&p(x.metalnessMap.channel),roughnessMapUv:S&&p(x.roughnessMap.channel),anisotropyMapUv:pe&&p(x.anisotropyMap.channel),clearcoatMapUv:je&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:ne&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:ze&&p(x.sheenRoughnessMap.channel),specularMapUv:De&&p(x.specularMap.channel),specularColorMapUv:nt&&p(x.specularColorMap.channel),specularIntensityMapUv:D&&p(x.specularIntensityMap.channel),transmissionMapUv:fe&&p(x.transmissionMap.channel),thicknessMapUv:V&&p(x.thicknessMap.channel),alphaMapUv:le&&p(x.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Ce||N),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!H.attributes.uv&&(Je||le),fog:!!Z,useFog:x.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:h,skinning:G.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:ke,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&z.length>0,shadowMapType:t.shadowMap.type,toneMapping:jt,decodeVideoTexture:Je&&x.map.isVideoTexture===!0&&Ke.getTransfer(x.map.colorSpace)===at,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===oi,flipSided:x.side===nn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:xt&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&x.extensions.multiDraw===!0||He)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ye.vertexUv1s=u.has(1),Ye.vertexUv2s=u.has(2),Ye.vertexUv3s=u.has(3),u.clear(),Ye}function g(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const z in x.defines)E.push(z),E.push(x.defines[z]);return x.isRawShaderMaterial===!1&&(_(E,x),M(E,x),E.push(t.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function _(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function M(x,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),x.push(a.mask)}function R(x){const E=y[x.type];let z;if(E){const B=jn[E];z=aM.clone(B.uniforms)}else z=x.uniforms;return z}function C(x,E){let z;for(let B=0,G=f.length;B<G;B++){const Z=f[B];if(Z.cacheKey===E){z=Z,++z.usedTimes;break}}return z===void 0&&(z=new S1(t,E,x,s),f.push(z)),z}function w(x){if(--x.usedTimes===0){const E=f.indexOf(x);f[E]=f[f.length-1],f.pop(),x.destroy()}}function P(x){l.remove(x)}function $(){l.dispose()}return{getParameters:c,getProgramCacheKey:g,getUniforms:R,acquireProgram:C,releaseProgram:w,releaseShaderCache:P,programs:f,dispose:$}}function A1(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function C1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function hm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function pm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,m,v,y,p){let c=t[e];return c===void 0?(c={id:d.id,object:d,geometry:h,material:m,groupOrder:v,renderOrder:d.renderOrder,z:y,group:p},t[e]=c):(c.id=d.id,c.object=d,c.geometry=h,c.material=m,c.groupOrder=v,c.renderOrder=d.renderOrder,c.z=y,c.group=p),e++,c}function a(d,h,m,v,y,p){const c=o(d,h,m,v,y,p);m.transmission>0?i.push(c):m.transparent===!0?r.push(c):n.push(c)}function l(d,h,m,v,y,p){const c=o(d,h,m,v,y,p);m.transmission>0?i.unshift(c):m.transparent===!0?r.unshift(c):n.unshift(c)}function u(d,h){n.length>1&&n.sort(d||C1),i.length>1&&i.sort(h||hm),r.length>1&&r.sort(h||hm)}function f(){for(let d=e,h=t.length;d<h;d++){const m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:u}}function R1(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new pm,t.set(i,[o])):r>=s.length?(o=new pm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function P1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new F,color:new Fe};break;case"SpotLight":n={position:new F,direction:new F,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":n={color:new Fe,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function b1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let L1=0;function D1(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function U1(t){const e=new P1,n=b1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new F);const r=new F,s=new vt,o=new vt;function a(u){let f=0,d=0,h=0;for(let $=0;$<9;$++)i.probe[$].set(0,0,0);let m=0,v=0,y=0,p=0,c=0,g=0,_=0,M=0,R=0,C=0,w=0;u.sort(D1);for(let $=0,x=u.length;$<x;$++){const E=u[$],z=E.color,B=E.intensity,G=E.distance,Z=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)f+=z.r*B,d+=z.g*B,h+=z.b*B;else if(E.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(E.sh.coefficients[H],B);w++}else if(E.isDirectionalLight){const H=e.get(E);if(H.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const Q=E.shadow,L=n.get(E);L.shadowIntensity=Q.intensity,L.shadowBias=Q.bias,L.shadowNormalBias=Q.normalBias,L.shadowRadius=Q.radius,L.shadowMapSize=Q.mapSize,i.directionalShadow[m]=L,i.directionalShadowMap[m]=Z,i.directionalShadowMatrix[m]=E.shadow.matrix,g++}i.directional[m]=H,m++}else if(E.isSpotLight){const H=e.get(E);H.position.setFromMatrixPosition(E.matrixWorld),H.color.copy(z).multiplyScalar(B),H.distance=G,H.coneCos=Math.cos(E.angle),H.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),H.decay=E.decay,i.spot[y]=H;const Q=E.shadow;if(E.map&&(i.spotLightMap[R]=E.map,R++,Q.updateMatrices(E),E.castShadow&&C++),i.spotLightMatrix[y]=Q.matrix,E.castShadow){const L=n.get(E);L.shadowIntensity=Q.intensity,L.shadowBias=Q.bias,L.shadowNormalBias=Q.normalBias,L.shadowRadius=Q.radius,L.shadowMapSize=Q.mapSize,i.spotShadow[y]=L,i.spotShadowMap[y]=Z,M++}y++}else if(E.isRectAreaLight){const H=e.get(E);H.color.copy(z).multiplyScalar(B),H.halfWidth.set(E.width*.5,0,0),H.halfHeight.set(0,E.height*.5,0),i.rectArea[p]=H,p++}else if(E.isPointLight){const H=e.get(E);if(H.color.copy(E.color).multiplyScalar(E.intensity),H.distance=E.distance,H.decay=E.decay,E.castShadow){const Q=E.shadow,L=n.get(E);L.shadowIntensity=Q.intensity,L.shadowBias=Q.bias,L.shadowNormalBias=Q.normalBias,L.shadowRadius=Q.radius,L.shadowMapSize=Q.mapSize,L.shadowCameraNear=Q.camera.near,L.shadowCameraFar=Q.camera.far,i.pointShadow[v]=L,i.pointShadowMap[v]=Z,i.pointShadowMatrix[v]=E.shadow.matrix,_++}i.point[v]=H,v++}else if(E.isHemisphereLight){const H=e.get(E);H.skyColor.copy(E.color).multiplyScalar(B),H.groundColor.copy(E.groundColor).multiplyScalar(B),i.hemi[c]=H,c++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=h;const P=i.hash;(P.directionalLength!==m||P.pointLength!==v||P.spotLength!==y||P.rectAreaLength!==p||P.hemiLength!==c||P.numDirectionalShadows!==g||P.numPointShadows!==_||P.numSpotShadows!==M||P.numSpotMaps!==R||P.numLightProbes!==w)&&(i.directional.length=m,i.spot.length=y,i.rectArea.length=p,i.point.length=v,i.hemi.length=c,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=M+R-C,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=w,P.directionalLength=m,P.pointLength=v,P.spotLength=y,P.rectAreaLength=p,P.hemiLength=c,P.numDirectionalShadows=g,P.numPointShadows=_,P.numSpotShadows=M,P.numSpotMaps=R,P.numLightProbes=w,i.version=L1++)}function l(u,f){let d=0,h=0,m=0,v=0,y=0;const p=f.matrixWorldInverse;for(let c=0,g=u.length;c<g;c++){const _=u[c];if(_.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),d++}else if(_.isSpotLight){const M=i.spot[m];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),m++}else if(_.isRectAreaLight){const M=i.rectArea[v];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),o.identity(),s.copy(_.matrixWorld),s.premultiply(p),o.extractRotation(s),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),v++}else if(_.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),h++}else if(_.isHemisphereLight){const M=i.hemi[y];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(p),y++}}}return{setup:a,setupView:l,state:i}}function mm(t){const e=new U1(t),n=[],i=[];function r(f){u.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function a(){e.setup(n)}function l(f){e.setupView(n,f)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function I1(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new mm(t),e.set(r,[a])):s>=o.length?(a=new mm(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class N1 extends ko{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=CS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class F1 extends ko{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const O1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,k1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function B1(t,e,n){let i=new xv;const r=new Ne,s=new Ne,o=new _t,a=new N1({depthPacking:RS}),l=new F1,u={},f=n.maxTextureSize,d={[qi]:nn,[nn]:qi,[oi]:oi},h=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:O1,fragmentShader:k1}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const v=new Kn;v.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new fi(v,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$_;let c=this.type;this.render=function(C,w,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const $=t.getRenderTarget(),x=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),z=t.state;z.setBlending(Xi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const B=c!==ii&&this.type===ii,G=c===ii&&this.type!==ii;for(let Z=0,H=C.length;Z<H;Z++){const Q=C[Z],L=Q.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const Y=L.getFrameExtents();if(r.multiply(Y),s.copy(L.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/Y.x),r.x=s.x*Y.x,L.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/Y.y),r.y=s.y*Y.y,L.mapSize.y=s.y)),L.map===null||B===!0||G===!0){const re=this.type!==ii?{minFilter:wn,magFilter:wn}:{};L.map!==null&&L.map.dispose(),L.map=new Cr(r.x,r.y,re),L.map.texture.name=Q.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const K=L.getViewportCount();for(let re=0;re<K;re++){const Ee=L.getViewport(re);o.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),z.viewport(o),L.updateMatrices(Q,re),i=L.getFrustum(),M(w,P,L.camera,Q,this.type)}L.isPointLightShadow!==!0&&this.type===ii&&g(L,P),L.needsUpdate=!1}c=this.type,p.needsUpdate=!1,t.setRenderTarget($,x,E)};function g(C,w){const P=e.update(y);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Cr(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(w,null,P,h,y,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(w,null,P,m,y,null)}function _(C,w,P,$){let x=null;const E=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(E!==void 0)x=E;else if(x=P.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const z=x.uuid,B=w.uuid;let G=u[z];G===void 0&&(G={},u[z]=G);let Z=G[B];Z===void 0&&(Z=x.clone(),G[B]=Z,w.addEventListener("dispose",R)),x=Z}if(x.visible=w.visible,x.wireframe=w.wireframe,$===ii?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:d[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const z=t.properties.get(x);z.light=P}return x}function M(C,w,P,$,x){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===ii)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);const B=e.update(C),G=C.material;if(Array.isArray(G)){const Z=B.groups;for(let H=0,Q=Z.length;H<Q;H++){const L=Z[H],Y=G[L.materialIndex];if(Y&&Y.visible){const K=_(C,Y,$,x);C.onBeforeShadow(t,C,w,P,B,K,L),t.renderBufferDirect(P,null,B,K,C,L),C.onAfterShadow(t,C,w,P,B,K,L)}}}else if(G.visible){const Z=_(C,G,$,x);C.onBeforeShadow(t,C,w,P,B,Z,null),t.renderBufferDirect(P,null,B,Z,C,null),C.onAfterShadow(t,C,w,P,B,Z,null)}}const z=C.children;for(let B=0,G=z.length;B<G;B++)M(z[B],w,P,$,x)}function R(C){C.target.removeEventListener("dispose",R);for(const P in u){const $=u[P],x=C.target.uuid;x in $&&($[x].dispose(),delete $[x])}}}const z1={[of]:af,[lf]:ff,[uf]:df,[Cs]:cf,[af]:of,[ff]:lf,[df]:uf,[cf]:Cs};function H1(t){function e(){let D=!1;const fe=new _t;let V=null;const q=new _t(0,0,0,0);return{setMask:function(le){V!==le&&!D&&(t.colorMask(le,le,le,le),V=le)},setLocked:function(le){D=le},setClear:function(le,de,Ge,xt,jt){jt===!0&&(le*=xt,de*=xt,Ge*=xt),fe.set(le,de,Ge,xt),q.equals(fe)===!1&&(t.clearColor(le,de,Ge,xt),q.copy(fe))},reset:function(){D=!1,V=null,q.set(-1,0,0,0)}}}function n(){let D=!1,fe=!1,V=null,q=null,le=null;return{setReversed:function(de){fe=de},setTest:function(de){de?ce(t.DEPTH_TEST):ae(t.DEPTH_TEST)},setMask:function(de){V!==de&&!D&&(t.depthMask(de),V=de)},setFunc:function(de){if(fe&&(de=z1[de]),q!==de){switch(de){case of:t.depthFunc(t.NEVER);break;case af:t.depthFunc(t.ALWAYS);break;case lf:t.depthFunc(t.LESS);break;case Cs:t.depthFunc(t.LEQUAL);break;case uf:t.depthFunc(t.EQUAL);break;case cf:t.depthFunc(t.GEQUAL);break;case ff:t.depthFunc(t.GREATER);break;case df:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}q=de}},setLocked:function(de){D=de},setClear:function(de){le!==de&&(t.clearDepth(de),le=de)},reset:function(){D=!1,V=null,q=null,le=null}}}function i(){let D=!1,fe=null,V=null,q=null,le=null,de=null,Ge=null,xt=null,jt=null;return{setTest:function(Ye){D||(Ye?ce(t.STENCIL_TEST):ae(t.STENCIL_TEST))},setMask:function(Ye){fe!==Ye&&!D&&(t.stencilMask(Ye),fe=Ye)},setFunc:function(Ye,Yt,Zn){(V!==Ye||q!==Yt||le!==Zn)&&(t.stencilFunc(Ye,Yt,Zn),V=Ye,q=Yt,le=Zn)},setOp:function(Ye,Yt,Zn){(de!==Ye||Ge!==Yt||xt!==Zn)&&(t.stencilOp(Ye,Yt,Zn),de=Ye,Ge=Yt,xt=Zn)},setLocked:function(Ye){D=Ye},setClear:function(Ye){jt!==Ye&&(t.clearStencil(Ye),jt=Ye)},reset:function(){D=!1,fe=null,V=null,q=null,le=null,de=null,Ge=null,xt=null,jt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let u={},f={},d=new WeakMap,h=[],m=null,v=!1,y=null,p=null,c=null,g=null,_=null,M=null,R=null,C=new Fe(0,0,0),w=0,P=!1,$=null,x=null,E=null,z=null,B=null;const G=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,H=0;const Q=t.getParameter(t.VERSION);Q.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(Q)[1]),Z=H>=1):Q.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),Z=H>=2);let L=null,Y={};const K=t.getParameter(t.SCISSOR_BOX),re=t.getParameter(t.VIEWPORT),Ee=new _t().fromArray(K),ke=new _t().fromArray(re);function W(D,fe,V,q){const le=new Uint8Array(4),de=t.createTexture();t.bindTexture(D,de),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ge=0;Ge<V;Ge++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(fe,0,t.RGBA,1,1,q,0,t.RGBA,t.UNSIGNED_BYTE,le):t.texImage2D(fe+Ge,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,le);return de}const te={};te[t.TEXTURE_2D]=W(t.TEXTURE_2D,t.TEXTURE_2D,1),te[t.TEXTURE_CUBE_MAP]=W(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[t.TEXTURE_2D_ARRAY]=W(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),te[t.TEXTURE_3D]=W(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ce(t.DEPTH_TEST),s.setFunc(Cs),Be(!1),Xe(Tp),ce(t.CULL_FACE),b(Xi);function ce(D){u[D]!==!0&&(t.enable(D),u[D]=!0)}function ae(D){u[D]!==!1&&(t.disable(D),u[D]=!1)}function Le(D,fe){return f[D]!==fe?(t.bindFramebuffer(D,fe),f[D]=fe,D===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=fe),D===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=fe),!0):!1}function we(D,fe){let V=h,q=!1;if(D){V=d.get(fe),V===void 0&&(V=[],d.set(fe,V));const le=D.textures;if(V.length!==le.length||V[0]!==t.COLOR_ATTACHMENT0){for(let de=0,Ge=le.length;de<Ge;de++)V[de]=t.COLOR_ATTACHMENT0+de;V.length=le.length,q=!0}}else V[0]!==t.BACK&&(V[0]=t.BACK,q=!0);q&&t.drawBuffers(V)}function He(D){return m!==D?(t.useProgram(D),m=D,!0):!1}const Je={[fr]:t.FUNC_ADD,[eS]:t.FUNC_SUBTRACT,[tS]:t.FUNC_REVERSE_SUBTRACT};Je[nS]=t.MIN,Je[iS]=t.MAX;const Ve={[rS]:t.ZERO,[sS]:t.ONE,[oS]:t.SRC_COLOR,[rf]:t.SRC_ALPHA,[dS]:t.SRC_ALPHA_SATURATE,[cS]:t.DST_COLOR,[lS]:t.DST_ALPHA,[aS]:t.ONE_MINUS_SRC_COLOR,[sf]:t.ONE_MINUS_SRC_ALPHA,[fS]:t.ONE_MINUS_DST_COLOR,[uS]:t.ONE_MINUS_DST_ALPHA,[hS]:t.CONSTANT_COLOR,[pS]:t.ONE_MINUS_CONSTANT_COLOR,[mS]:t.CONSTANT_ALPHA,[gS]:t.ONE_MINUS_CONSTANT_ALPHA};function b(D,fe,V,q,le,de,Ge,xt,jt,Ye){if(D===Xi){v===!0&&(ae(t.BLEND),v=!1);return}if(v===!1&&(ce(t.BLEND),v=!0),D!==Jy){if(D!==y||Ye!==P){if((p!==fr||_!==fr)&&(t.blendEquation(t.FUNC_ADD),p=fr,_=fr),Ye)switch(D){case _s:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case nf:t.blendFunc(t.ONE,t.ONE);break;case wp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ap:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case _s:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case nf:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case wp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ap:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}c=null,g=null,M=null,R=null,C.set(0,0,0),w=0,y=D,P=Ye}return}le=le||fe,de=de||V,Ge=Ge||q,(fe!==p||le!==_)&&(t.blendEquationSeparate(Je[fe],Je[le]),p=fe,_=le),(V!==c||q!==g||de!==M||Ge!==R)&&(t.blendFuncSeparate(Ve[V],Ve[q],Ve[de],Ve[Ge]),c=V,g=q,M=de,R=Ge),(xt.equals(C)===!1||jt!==w)&&(t.blendColor(xt.r,xt.g,xt.b,jt),C.copy(xt),w=jt),y=D,P=!1}function an(D,fe){D.side===oi?ae(t.CULL_FACE):ce(t.CULL_FACE);let V=D.side===nn;fe&&(V=!V),Be(V),D.blending===_s&&D.transparent===!1?b(Xi):b(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),r.setMask(D.colorWrite);const q=D.stencilWrite;o.setTest(q),q&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),rt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ce(t.SAMPLE_ALPHA_TO_COVERAGE):ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function Be(D){$!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),$=D)}function Xe(D){D!==Ky?(ce(t.CULL_FACE),D!==x&&(D===Tp?t.cullFace(t.BACK):D===Zy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ae(t.CULL_FACE),x=D}function Ce(D){D!==E&&(Z&&t.lineWidth(D),E=D)}function rt(D,fe,V){D?(ce(t.POLYGON_OFFSET_FILL),(z!==fe||B!==V)&&(t.polygonOffset(fe,V),z=fe,B=V)):ae(t.POLYGON_OFFSET_FILL)}function be(D){D?ce(t.SCISSOR_TEST):ae(t.SCISSOR_TEST)}function A(D){D===void 0&&(D=t.TEXTURE0+G-1),L!==D&&(t.activeTexture(D),L=D)}function S(D,fe,V){V===void 0&&(L===null?V=t.TEXTURE0+G-1:V=L);let q=Y[V];q===void 0&&(q={type:void 0,texture:void 0},Y[V]=q),(q.type!==D||q.texture!==fe)&&(L!==V&&(t.activeTexture(V),L=V),t.bindTexture(D,fe||te[D]),q.type=D,q.texture=fe)}function N(){const D=Y[L];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function j(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function X(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function je(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(D){Ee.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),Ee.copy(D))}function ge(D){ke.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),ke.copy(D))}function ze(D,fe){let V=l.get(fe);V===void 0&&(V=new WeakMap,l.set(fe,V));let q=V.get(D);q===void 0&&(q=t.getUniformBlockIndex(fe,D.name),V.set(D,q))}function De(D,fe){const q=l.get(fe).get(D);a.get(fe)!==q&&(t.uniformBlockBinding(fe,q,D.__bindingPointIndex),a.set(fe,q))}function nt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},L=null,Y={},f={},d=new WeakMap,h=[],m=null,v=!1,y=null,p=null,c=null,g=null,_=null,M=null,R=null,C=new Fe(0,0,0),w=0,P=!1,$=null,x=null,E=null,z=null,B=null,Ee.set(0,0,t.canvas.width,t.canvas.height),ke.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ce,disable:ae,bindFramebuffer:Le,drawBuffers:we,useProgram:He,setBlending:b,setMaterial:an,setFlipSided:Be,setCullFace:Xe,setLineWidth:Ce,setPolygonOffset:rt,setScissorTest:be,activeTexture:A,bindTexture:S,unbindTexture:N,compressedTexImage2D:j,compressedTexImage3D:J,texImage2D:me,texImage3D:Re,updateUBOMapping:ze,uniformBlockBinding:De,texStorage2D:je,texStorage3D:ne,texSubImage2D:X,texSubImage3D:ye,compressedTexSubImage2D:oe,compressedTexSubImage3D:pe,scissor:Pe,viewport:ge,reset:nt}}function gm(t,e,n,i){const r=V1(i);switch(n){case ev:return t*e;case nv:return t*e;case iv:return t*e*2;case rv:return t*e/r.components*r.byteLength;case jd:return t*e/r.components*r.byteLength;case sv:return t*e*2/r.components*r.byteLength;case Yd:return t*e*2/r.components*r.byteLength;case tv:return t*e*3/r.components*r.byteLength;case Bn:return t*e*4/r.components*r.byteLength;case $d:return t*e*4/r.components*r.byteLength;case Ga:case Wa:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Xa:case ja:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case vf:case yf:return Math.max(t,16)*Math.max(e,8)/4;case _f:case xf:return Math.max(t,8)*Math.max(e,8)/2;case Sf:case Mf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ef:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Tf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case wf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Af:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Cf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Rf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Pf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case bf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Lf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Df:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Uf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case If:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Nf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Ff:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Of:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Ya:case kf:case Bf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case ov:case zf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Hf:case Vf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function V1(t){switch(t){case _i:case Z_:return{byteLength:1,components:1};case Po:case Q_:case No:return{byteLength:2,components:1};case Wd:case Xd:return{byteLength:2,components:4};case Ar:case Gd:case ui:return{byteLength:4,components:1};case J_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function G1(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ne,f=new WeakMap;let d;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,S){return m?new OffscreenCanvas(A,S):Cl("canvas")}function y(A,S,N){let j=1;const J=be(A);if((J.width>N||J.height>N)&&(j=N/Math.max(J.width,J.height)),j<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const X=Math.floor(j*J.width),ye=Math.floor(j*J.height);d===void 0&&(d=v(X,ye));const oe=S?v(X,ye):d;return oe.width=X,oe.height=ye,oe.getContext("2d").drawImage(A,0,0,X,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+X+"x"+ye+")."),oe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function p(A){return A.generateMipmaps&&A.minFilter!==wn&&A.minFilter!==On}function c(A){t.generateMipmap(A)}function g(A,S,N,j,J=!1){if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let X=S;if(S===t.RED&&(N===t.FLOAT&&(X=t.R32F),N===t.HALF_FLOAT&&(X=t.R16F),N===t.UNSIGNED_BYTE&&(X=t.R8)),S===t.RED_INTEGER&&(N===t.UNSIGNED_BYTE&&(X=t.R8UI),N===t.UNSIGNED_SHORT&&(X=t.R16UI),N===t.UNSIGNED_INT&&(X=t.R32UI),N===t.BYTE&&(X=t.R8I),N===t.SHORT&&(X=t.R16I),N===t.INT&&(X=t.R32I)),S===t.RG&&(N===t.FLOAT&&(X=t.RG32F),N===t.HALF_FLOAT&&(X=t.RG16F),N===t.UNSIGNED_BYTE&&(X=t.RG8)),S===t.RG_INTEGER&&(N===t.UNSIGNED_BYTE&&(X=t.RG8UI),N===t.UNSIGNED_SHORT&&(X=t.RG16UI),N===t.UNSIGNED_INT&&(X=t.RG32UI),N===t.BYTE&&(X=t.RG8I),N===t.SHORT&&(X=t.RG16I),N===t.INT&&(X=t.RG32I)),S===t.RGB_INTEGER&&(N===t.UNSIGNED_BYTE&&(X=t.RGB8UI),N===t.UNSIGNED_SHORT&&(X=t.RGB16UI),N===t.UNSIGNED_INT&&(X=t.RGB32UI),N===t.BYTE&&(X=t.RGB8I),N===t.SHORT&&(X=t.RGB16I),N===t.INT&&(X=t.RGB32I)),S===t.RGBA_INTEGER&&(N===t.UNSIGNED_BYTE&&(X=t.RGBA8UI),N===t.UNSIGNED_SHORT&&(X=t.RGBA16UI),N===t.UNSIGNED_INT&&(X=t.RGBA32UI),N===t.BYTE&&(X=t.RGBA8I),N===t.SHORT&&(X=t.RGBA16I),N===t.INT&&(X=t.RGBA32I)),S===t.RGB&&N===t.UNSIGNED_INT_5_9_9_9_REV&&(X=t.RGB9_E5),S===t.RGBA){const ye=J?El:Ke.getTransfer(j);N===t.FLOAT&&(X=t.RGBA32F),N===t.HALF_FLOAT&&(X=t.RGBA16F),N===t.UNSIGNED_BYTE&&(X=ye===at?t.SRGB8_ALPHA8:t.RGBA8),N===t.UNSIGNED_SHORT_4_4_4_4&&(X=t.RGBA4),N===t.UNSIGNED_SHORT_5_5_5_1&&(X=t.RGB5_A1)}return(X===t.R16F||X===t.R32F||X===t.RG16F||X===t.RG32F||X===t.RGBA16F||X===t.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function _(A,S){let N;return A?S===null||S===Ar||S===bs?N=t.DEPTH24_STENCIL8:S===ui?N=t.DEPTH32F_STENCIL8:S===Po&&(N=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ar||S===bs?N=t.DEPTH_COMPONENT24:S===ui?N=t.DEPTH_COMPONENT32F:S===Po&&(N=t.DEPTH_COMPONENT16),N}function M(A,S){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==wn&&A.minFilter!==On?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function R(A){const S=A.target;S.removeEventListener("dispose",R),w(S),S.isVideoTexture&&f.delete(S)}function C(A){const S=A.target;S.removeEventListener("dispose",C),$(S)}function w(A){const S=i.get(A);if(S.__webglInit===void 0)return;const N=A.source,j=h.get(N);if(j){const J=j[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&P(A),Object.keys(j).length===0&&h.delete(N)}i.remove(A)}function P(A){const S=i.get(A);t.deleteTexture(S.__webglTexture);const N=A.source,j=h.get(N);delete j[S.__cacheKey],o.memory.textures--}function $(A){const S=i.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let J=0;J<S.__webglFramebuffer[j].length;J++)t.deleteFramebuffer(S.__webglFramebuffer[j][J]);else t.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)t.deleteFramebuffer(S.__webglFramebuffer[j]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const N=A.textures;for(let j=0,J=N.length;j<J;j++){const X=i.get(N[j]);X.__webglTexture&&(t.deleteTexture(X.__webglTexture),o.memory.textures--),i.remove(N[j])}i.remove(A)}let x=0;function E(){x=0}function z(){const A=x;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),x+=1,A}function B(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function G(A,S){const N=i.get(A);if(A.isVideoTexture&&Ce(A),A.isRenderTargetTexture===!1&&A.version>0&&N.__version!==A.version){const j=A.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ke(N,A,S);return}}n.bindTexture(t.TEXTURE_2D,N.__webglTexture,t.TEXTURE0+S)}function Z(A,S){const N=i.get(A);if(A.version>0&&N.__version!==A.version){ke(N,A,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,N.__webglTexture,t.TEXTURE0+S)}function H(A,S){const N=i.get(A);if(A.version>0&&N.__version!==A.version){ke(N,A,S);return}n.bindTexture(t.TEXTURE_3D,N.__webglTexture,t.TEXTURE0+S)}function Q(A,S){const N=i.get(A);if(A.version>0&&N.__version!==A.version){W(N,A,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+S)}const L={[mf]:t.REPEAT,[gr]:t.CLAMP_TO_EDGE,[gf]:t.MIRRORED_REPEAT},Y={[wn]:t.NEAREST,[AS]:t.NEAREST_MIPMAP_NEAREST,[sa]:t.NEAREST_MIPMAP_LINEAR,[On]:t.LINEAR,[Pu]:t.LINEAR_MIPMAP_NEAREST,[_r]:t.LINEAR_MIPMAP_LINEAR},K={[LS]:t.NEVER,[OS]:t.ALWAYS,[DS]:t.LESS,[av]:t.LEQUAL,[US]:t.EQUAL,[FS]:t.GEQUAL,[IS]:t.GREATER,[NS]:t.NOTEQUAL};function re(A,S){if(S.type===ui&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===On||S.magFilter===Pu||S.magFilter===sa||S.magFilter===_r||S.minFilter===On||S.minFilter===Pu||S.minFilter===sa||S.minFilter===_r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,L[S.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,L[S.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,L[S.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,Y[S.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,Y[S.minFilter]),S.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,K[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===wn||S.minFilter!==sa&&S.minFilter!==_r||S.type===ui&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Ee(A,S){let N=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",R));const j=S.source;let J=h.get(j);J===void 0&&(J={},h.set(j,J));const X=B(S);if(X!==A.__cacheKey){J[X]===void 0&&(J[X]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,N=!0),J[X].usedTimes++;const ye=J[A.__cacheKey];ye!==void 0&&(J[A.__cacheKey].usedTimes--,ye.usedTimes===0&&P(S)),A.__cacheKey=X,A.__webglTexture=J[X].texture}return N}function ke(A,S,N){let j=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=t.TEXTURE_3D);const J=Ee(A,S),X=S.source;n.bindTexture(j,A.__webglTexture,t.TEXTURE0+N);const ye=i.get(X);if(X.version!==ye.__version||J===!0){n.activeTexture(t.TEXTURE0+N);const oe=Ke.getPrimaries(Ke.workingColorSpace),pe=S.colorSpace===Ui?null:Ke.getPrimaries(S.colorSpace),je=S.colorSpace===Ui||oe===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let ne=y(S.image,!1,r.maxTextureSize);ne=rt(S,ne);const me=s.convert(S.format,S.colorSpace),Re=s.convert(S.type);let Pe=g(S.internalFormat,me,Re,S.colorSpace,S.isVideoTexture);re(j,S);let ge;const ze=S.mipmaps,De=S.isVideoTexture!==!0,nt=ye.__version===void 0||J===!0,D=X.dataReady,fe=M(S,ne);if(S.isDepthTexture)Pe=_(S.format===Ls,S.type),nt&&(De?n.texStorage2D(t.TEXTURE_2D,1,Pe,ne.width,ne.height):n.texImage2D(t.TEXTURE_2D,0,Pe,ne.width,ne.height,0,me,Re,null));else if(S.isDataTexture)if(ze.length>0){De&&nt&&n.texStorage2D(t.TEXTURE_2D,fe,Pe,ze[0].width,ze[0].height);for(let V=0,q=ze.length;V<q;V++)ge=ze[V],De?D&&n.texSubImage2D(t.TEXTURE_2D,V,0,0,ge.width,ge.height,me,Re,ge.data):n.texImage2D(t.TEXTURE_2D,V,Pe,ge.width,ge.height,0,me,Re,ge.data);S.generateMipmaps=!1}else De?(nt&&n.texStorage2D(t.TEXTURE_2D,fe,Pe,ne.width,ne.height),D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ne.width,ne.height,me,Re,ne.data)):n.texImage2D(t.TEXTURE_2D,0,Pe,ne.width,ne.height,0,me,Re,ne.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){De&&nt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,Pe,ze[0].width,ze[0].height,ne.depth);for(let V=0,q=ze.length;V<q;V++)if(ge=ze[V],S.format!==Bn)if(me!==null)if(De){if(D)if(S.layerUpdates.size>0){const le=gm(ge.width,ge.height,S.format,S.type);for(const de of S.layerUpdates){const Ge=ge.data.subarray(de*le/ge.data.BYTES_PER_ELEMENT,(de+1)*le/ge.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,V,0,0,de,ge.width,ge.height,1,me,Ge,0,0)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,V,0,0,0,ge.width,ge.height,ne.depth,me,ge.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,V,Pe,ge.width,ge.height,ne.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,V,0,0,0,ge.width,ge.height,ne.depth,me,Re,ge.data):n.texImage3D(t.TEXTURE_2D_ARRAY,V,Pe,ge.width,ge.height,ne.depth,0,me,Re,ge.data)}else{De&&nt&&n.texStorage2D(t.TEXTURE_2D,fe,Pe,ze[0].width,ze[0].height);for(let V=0,q=ze.length;V<q;V++)ge=ze[V],S.format!==Bn?me!==null?De?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,V,0,0,ge.width,ge.height,me,ge.data):n.compressedTexImage2D(t.TEXTURE_2D,V,Pe,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?D&&n.texSubImage2D(t.TEXTURE_2D,V,0,0,ge.width,ge.height,me,Re,ge.data):n.texImage2D(t.TEXTURE_2D,V,Pe,ge.width,ge.height,0,me,Re,ge.data)}else if(S.isDataArrayTexture)if(De){if(nt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,Pe,ne.width,ne.height,ne.depth),D)if(S.layerUpdates.size>0){const V=gm(ne.width,ne.height,S.format,S.type);for(const q of S.layerUpdates){const le=ne.data.subarray(q*V/ne.data.BYTES_PER_ELEMENT,(q+1)*V/ne.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,q,ne.width,ne.height,1,me,Re,le)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,me,Re,ne.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Pe,ne.width,ne.height,ne.depth,0,me,Re,ne.data);else if(S.isData3DTexture)De?(nt&&n.texStorage3D(t.TEXTURE_3D,fe,Pe,ne.width,ne.height,ne.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,me,Re,ne.data)):n.texImage3D(t.TEXTURE_3D,0,Pe,ne.width,ne.height,ne.depth,0,me,Re,ne.data);else if(S.isFramebufferTexture){if(nt)if(De)n.texStorage2D(t.TEXTURE_2D,fe,Pe,ne.width,ne.height);else{let V=ne.width,q=ne.height;for(let le=0;le<fe;le++)n.texImage2D(t.TEXTURE_2D,le,Pe,V,q,0,me,Re,null),V>>=1,q>>=1}}else if(ze.length>0){if(De&&nt){const V=be(ze[0]);n.texStorage2D(t.TEXTURE_2D,fe,Pe,V.width,V.height)}for(let V=0,q=ze.length;V<q;V++)ge=ze[V],De?D&&n.texSubImage2D(t.TEXTURE_2D,V,0,0,me,Re,ge):n.texImage2D(t.TEXTURE_2D,V,Pe,me,Re,ge);S.generateMipmaps=!1}else if(De){if(nt){const V=be(ne);n.texStorage2D(t.TEXTURE_2D,fe,Pe,V.width,V.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,me,Re,ne)}else n.texImage2D(t.TEXTURE_2D,0,Pe,me,Re,ne);p(S)&&c(j),ye.__version=X.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function W(A,S,N){if(S.image.length!==6)return;const j=Ee(A,S),J=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+N);const X=i.get(J);if(J.version!==X.__version||j===!0){n.activeTexture(t.TEXTURE0+N);const ye=Ke.getPrimaries(Ke.workingColorSpace),oe=S.colorSpace===Ui?null:Ke.getPrimaries(S.colorSpace),pe=S.colorSpace===Ui||ye===oe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const je=S.isCompressedTexture||S.image[0].isCompressedTexture,ne=S.image[0]&&S.image[0].isDataTexture,me=[];for(let q=0;q<6;q++)!je&&!ne?me[q]=y(S.image[q],!0,r.maxCubemapSize):me[q]=ne?S.image[q].image:S.image[q],me[q]=rt(S,me[q]);const Re=me[0],Pe=s.convert(S.format,S.colorSpace),ge=s.convert(S.type),ze=g(S.internalFormat,Pe,ge,S.colorSpace),De=S.isVideoTexture!==!0,nt=X.__version===void 0||j===!0,D=J.dataReady;let fe=M(S,Re);re(t.TEXTURE_CUBE_MAP,S);let V;if(je){De&&nt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,ze,Re.width,Re.height);for(let q=0;q<6;q++){V=me[q].mipmaps;for(let le=0;le<V.length;le++){const de=V[le];S.format!==Bn?Pe!==null?De?D&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,le,0,0,de.width,de.height,Pe,de.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,le,ze,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,le,0,0,de.width,de.height,Pe,ge,de.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,le,ze,de.width,de.height,0,Pe,ge,de.data)}}}else{if(V=S.mipmaps,De&&nt){V.length>0&&fe++;const q=be(me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,ze,q.width,q.height)}for(let q=0;q<6;q++)if(ne){De?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,me[q].width,me[q].height,Pe,ge,me[q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,ze,me[q].width,me[q].height,0,Pe,ge,me[q].data);for(let le=0;le<V.length;le++){const Ge=V[le].image[q].image;De?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,le+1,0,0,Ge.width,Ge.height,Pe,ge,Ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,le+1,ze,Ge.width,Ge.height,0,Pe,ge,Ge.data)}}else{De?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Pe,ge,me[q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,ze,Pe,ge,me[q]);for(let le=0;le<V.length;le++){const de=V[le];De?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,le+1,0,0,Pe,ge,de.image[q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,le+1,ze,Pe,ge,de.image[q])}}}p(S)&&c(t.TEXTURE_CUBE_MAP),X.__version=J.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function te(A,S,N,j,J,X){const ye=s.convert(N.format,N.colorSpace),oe=s.convert(N.type),pe=g(N.internalFormat,ye,oe,N.colorSpace);if(!i.get(S).__hasExternalTextures){const ne=Math.max(1,S.width>>X),me=Math.max(1,S.height>>X);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,X,pe,ne,me,S.depth,0,ye,oe,null):n.texImage2D(J,X,pe,ne,me,0,ye,oe,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),Xe(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,j,J,i.get(N).__webglTexture,0,Be(S)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,j,J,i.get(N).__webglTexture,X),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ce(A,S,N){if(t.bindRenderbuffer(t.RENDERBUFFER,A),S.depthBuffer){const j=S.depthTexture,J=j&&j.isDepthTexture?j.type:null,X=_(S.stencilBuffer,J),ye=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=Be(S);Xe(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,oe,X,S.width,S.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,oe,X,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,X,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ye,t.RENDERBUFFER,A)}else{const j=S.textures;for(let J=0;J<j.length;J++){const X=j[J],ye=s.convert(X.format,X.colorSpace),oe=s.convert(X.type),pe=g(X.internalFormat,ye,oe,X.colorSpace),je=Be(S);N&&Xe(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,je,pe,S.width,S.height):Xe(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,je,pe,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,pe,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ae(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),G(S.depthTexture,0);const j=i.get(S.depthTexture).__webglTexture,J=Be(S);if(S.depthTexture.format===vs)Xe(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,j,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,j,0);else if(S.depthTexture.format===Ls)Xe(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,j,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Le(A){const S=i.get(A),N=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const j=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),j){const J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,j.removeEventListener("dispose",J)};j.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=j}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");ae(S.__webglFramebuffer,A)}else if(N){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]===void 0)S.__webglDepthbuffer[j]=t.createRenderbuffer(),ce(S.__webglDepthbuffer[j],A,!1);else{const J=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,X=S.__webglDepthbuffer[j];t.bindRenderbuffer(t.RENDERBUFFER,X),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,X)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),ce(S.__webglDepthbuffer,A,!1);else{const j=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,J),t.framebufferRenderbuffer(t.FRAMEBUFFER,j,t.RENDERBUFFER,J)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function we(A,S,N){const j=i.get(A);S!==void 0&&te(j.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),N!==void 0&&Le(A)}function He(A){const S=A.texture,N=i.get(A),j=i.get(S);A.addEventListener("dispose",C);const J=A.textures,X=A.isWebGLCubeRenderTarget===!0,ye=J.length>1;if(ye||(j.__webglTexture===void 0&&(j.__webglTexture=t.createTexture()),j.__version=S.version,o.memory.textures++),X){N.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(S.mipmaps&&S.mipmaps.length>0){N.__webglFramebuffer[oe]=[];for(let pe=0;pe<S.mipmaps.length;pe++)N.__webglFramebuffer[oe][pe]=t.createFramebuffer()}else N.__webglFramebuffer[oe]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){N.__webglFramebuffer=[];for(let oe=0;oe<S.mipmaps.length;oe++)N.__webglFramebuffer[oe]=t.createFramebuffer()}else N.__webglFramebuffer=t.createFramebuffer();if(ye)for(let oe=0,pe=J.length;oe<pe;oe++){const je=i.get(J[oe]);je.__webglTexture===void 0&&(je.__webglTexture=t.createTexture(),o.memory.textures++)}if(A.samples>0&&Xe(A)===!1){N.__webglMultisampledFramebuffer=t.createFramebuffer(),N.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let oe=0;oe<J.length;oe++){const pe=J[oe];N.__webglColorRenderbuffer[oe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,N.__webglColorRenderbuffer[oe]);const je=s.convert(pe.format,pe.colorSpace),ne=s.convert(pe.type),me=g(pe.internalFormat,je,ne,pe.colorSpace,A.isXRRenderTarget===!0),Re=Be(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,Re,me,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.RENDERBUFFER,N.__webglColorRenderbuffer[oe])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(N.__webglDepthRenderbuffer=t.createRenderbuffer(),ce(N.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(X){n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture),re(t.TEXTURE_CUBE_MAP,S);for(let oe=0;oe<6;oe++)if(S.mipmaps&&S.mipmaps.length>0)for(let pe=0;pe<S.mipmaps.length;pe++)te(N.__webglFramebuffer[oe][pe],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,pe);else te(N.__webglFramebuffer[oe],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);p(S)&&c(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ye){for(let oe=0,pe=J.length;oe<pe;oe++){const je=J[oe],ne=i.get(je);n.bindTexture(t.TEXTURE_2D,ne.__webglTexture),re(t.TEXTURE_2D,je),te(N.__webglFramebuffer,A,je,t.COLOR_ATTACHMENT0+oe,t.TEXTURE_2D,0),p(je)&&c(t.TEXTURE_2D)}n.unbindTexture()}else{let oe=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(oe=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(oe,j.__webglTexture),re(oe,S),S.mipmaps&&S.mipmaps.length>0)for(let pe=0;pe<S.mipmaps.length;pe++)te(N.__webglFramebuffer[pe],A,S,t.COLOR_ATTACHMENT0,oe,pe);else te(N.__webglFramebuffer,A,S,t.COLOR_ATTACHMENT0,oe,0);p(S)&&c(oe),n.unbindTexture()}A.depthBuffer&&Le(A)}function Je(A){const S=A.textures;for(let N=0,j=S.length;N<j;N++){const J=S[N];if(p(J)){const X=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ye=i.get(J).__webglTexture;n.bindTexture(X,ye),c(X),n.unbindTexture()}}}const Ve=[],b=[];function an(A){if(A.samples>0){if(Xe(A)===!1){const S=A.textures,N=A.width,j=A.height;let J=t.COLOR_BUFFER_BIT;const X=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ye=i.get(A),oe=S.length>1;if(oe)for(let pe=0;pe<S.length;pe++)n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let pe=0;pe<S.length;pe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),oe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ye.__webglColorRenderbuffer[pe]);const je=i.get(S[pe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,je,0)}t.blitFramebuffer(0,0,N,j,0,0,N,j,J,t.NEAREST),l===!0&&(Ve.length=0,b.length=0,Ve.push(t.COLOR_ATTACHMENT0+pe),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ve.push(X),b.push(X),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,b)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ve))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),oe)for(let pe=0;pe<S.length;pe++){n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,ye.__webglColorRenderbuffer[pe]);const je=i.get(S[pe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,je,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const S=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function Be(A){return Math.min(r.maxSamples,A.samples)}function Xe(A){const S=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ce(A){const S=o.render.frame;f.get(A)!==S&&(f.set(A,S),A.update())}function rt(A,S){const N=A.colorSpace,j=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||N!==er&&N!==Ui&&(Ke.getTransfer(N)===at?(j!==Bn||J!==_i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),S}function be(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(u.width=A.naturalWidth||A.width,u.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(u.width=A.displayWidth,u.height=A.displayHeight):(u.width=A.width,u.height=A.height),u}this.allocateTextureUnit=z,this.resetTextureUnits=E,this.setTexture2D=G,this.setTexture2DArray=Z,this.setTexture3D=H,this.setTextureCube=Q,this.rebindTextures=we,this.setupRenderTarget=He,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=an,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=te,this.useMultisampledRTT=Xe}function W1(t,e){function n(i,r=Ui){let s;const o=Ke.getTransfer(r);if(i===_i)return t.UNSIGNED_BYTE;if(i===Wd)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Xd)return t.UNSIGNED_SHORT_5_5_5_1;if(i===J_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Z_)return t.BYTE;if(i===Q_)return t.SHORT;if(i===Po)return t.UNSIGNED_SHORT;if(i===Gd)return t.INT;if(i===Ar)return t.UNSIGNED_INT;if(i===ui)return t.FLOAT;if(i===No)return t.HALF_FLOAT;if(i===ev)return t.ALPHA;if(i===tv)return t.RGB;if(i===Bn)return t.RGBA;if(i===nv)return t.LUMINANCE;if(i===iv)return t.LUMINANCE_ALPHA;if(i===vs)return t.DEPTH_COMPONENT;if(i===Ls)return t.DEPTH_STENCIL;if(i===rv)return t.RED;if(i===jd)return t.RED_INTEGER;if(i===sv)return t.RG;if(i===Yd)return t.RG_INTEGER;if(i===$d)return t.RGBA_INTEGER;if(i===Ga||i===Wa||i===Xa||i===ja)if(o===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ga)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ja)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ga)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ja)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_f||i===vf||i===xf||i===yf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===_f)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===vf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===xf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===yf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Sf||i===Mf||i===Ef)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Sf||i===Mf)return o===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ef)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Tf||i===wf||i===Af||i===Cf||i===Rf||i===Pf||i===bf||i===Lf||i===Df||i===Uf||i===If||i===Nf||i===Ff||i===Of)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Tf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Af)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Cf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Rf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Pf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===bf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Lf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Df)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Uf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===If)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Nf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ff)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Of)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ya||i===kf||i===Bf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ya)return o===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===kf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ov||i===zf||i===Hf||i===Vf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ya)return s.COMPRESSED_RED_RGTC1_EXT;if(i===zf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Hf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Vf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===bs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class X1 extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Aa extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const j1={type:"move"};class rc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Aa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Aa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Aa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const y of e.hand.values()){const p=n.getJointPose(y,i),c=this._getHandJoint(u,y);p!==null&&(c.matrix.fromArray(p.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=p.radius),c.visible=p!==null}const f=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=f.position.distanceTo(d.position),m=.02,v=.005;u.inputState.pinching&&h>m+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=m-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(j1)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Aa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Y1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class q1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new rn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ki({vertexShader:Y1,fragmentShader:$1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new fi(new Kl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class K1 extends Lr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,f=null,d=null,h=null,m=null,v=null;const y=new q1,p=n.getContextAttributes();let c=null,g=null;const _=[],M=[],R=new Ne;let C=null;const w=new En;w.layers.enable(1),w.viewport=new _t;const P=new En;P.layers.enable(2),P.viewport=new _t;const $=[w,P],x=new X1;x.layers.enable(1),x.layers.enable(2);let E=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let te=_[W];return te===void 0&&(te=new rc,_[W]=te),te.getTargetRaySpace()},this.getControllerGrip=function(W){let te=_[W];return te===void 0&&(te=new rc,_[W]=te),te.getGripSpace()},this.getHand=function(W){let te=_[W];return te===void 0&&(te=new rc,_[W]=te),te.getHandSpace()};function B(W){const te=M.indexOf(W.inputSource);if(te===-1)return;const ce=_[te];ce!==void 0&&(ce.update(W.inputSource,W.frame,u||o),ce.dispatchEvent({type:W.type,data:W.inputSource}))}function G(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",Z);for(let W=0;W<_.length;W++){const te=M[W];te!==null&&(M[W]=null,_[W].disconnect(te))}E=null,z=null,y.reset(),e.setRenderTarget(c),m=null,h=null,d=null,r=null,g=null,ke.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(W){u=W},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(c=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",G),r.addEventListener("inputsourceschange",Z),p.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const te={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,te),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),g=new Cr(m.framebufferWidth,m.framebufferHeight,{format:Bn,type:_i,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let te=null,ce=null,ae=null;p.depth&&(ae=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,te=p.stencil?Ls:vs,ce=p.stencil?bs:Ar);const Le={colorFormat:n.RGBA8,depthFormat:ae,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(Le),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),g=new Cr(h.textureWidth,h.textureHeight,{format:Bn,type:_i,depthTexture:new Sv(h.textureWidth,h.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),ke.setContext(r),ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Z(W){for(let te=0;te<W.removed.length;te++){const ce=W.removed[te],ae=M.indexOf(ce);ae>=0&&(M[ae]=null,_[ae].disconnect(ce))}for(let te=0;te<W.added.length;te++){const ce=W.added[te];let ae=M.indexOf(ce);if(ae===-1){for(let we=0;we<_.length;we++)if(we>=M.length){M.push(ce),ae=we;break}else if(M[we]===null){M[we]=ce,ae=we;break}if(ae===-1)break}const Le=_[ae];Le&&Le.connect(ce)}}const H=new F,Q=new F;function L(W,te,ce){H.setFromMatrixPosition(te.matrixWorld),Q.setFromMatrixPosition(ce.matrixWorld);const ae=H.distanceTo(Q),Le=te.projectionMatrix.elements,we=ce.projectionMatrix.elements,He=Le[14]/(Le[10]-1),Je=Le[14]/(Le[10]+1),Ve=(Le[9]+1)/Le[5],b=(Le[9]-1)/Le[5],an=(Le[8]-1)/Le[0],Be=(we[8]+1)/we[0],Xe=He*an,Ce=He*Be,rt=ae/(-an+Be),be=rt*-an;if(te.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(be),W.translateZ(rt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Le[10]===-1)W.projectionMatrix.copy(te.projectionMatrix),W.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const A=He+rt,S=Je+rt,N=Xe-be,j=Ce+(ae-be),J=Ve*Je/S*A,X=b*Je/S*A;W.projectionMatrix.makePerspective(N,j,J,X,A,S),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function Y(W,te){te===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(te.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let te=W.near,ce=W.far;y.texture!==null&&(y.depthNear>0&&(te=y.depthNear),y.depthFar>0&&(ce=y.depthFar)),x.near=P.near=w.near=te,x.far=P.far=w.far=ce,(E!==x.near||z!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,z=x.far);const ae=W.parent,Le=x.cameras;Y(x,ae);for(let we=0;we<Le.length;we++)Y(Le[we],ae);Le.length===2?L(x,w,P):x.projectionMatrix.copy(w.projectionMatrix),K(W,x,ae)};function K(W,te,ce){ce===null?W.matrix.copy(te.matrixWorld):(W.matrix.copy(ce.matrixWorld),W.matrix.invert(),W.matrix.multiply(te.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(te.projectionMatrix),W.projectionMatrixInverse.copy(te.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Gf*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(W){l=W,h!==null&&(h.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let re=null;function Ee(W,te){if(f=te.getViewerPose(u||o),v=te,f!==null){const ce=f.views;m!==null&&(e.setRenderTargetFramebuffer(g,m.framebuffer),e.setRenderTarget(g));let ae=!1;ce.length!==x.cameras.length&&(x.cameras.length=0,ae=!0);for(let we=0;we<ce.length;we++){const He=ce[we];let Je=null;if(m!==null)Je=m.getViewport(He);else{const b=d.getViewSubImage(h,He);Je=b.viewport,we===0&&(e.setRenderTargetTextures(g,b.colorTexture,h.ignoreDepthValues?void 0:b.depthStencilTexture),e.setRenderTarget(g))}let Ve=$[we];Ve===void 0&&(Ve=new En,Ve.layers.enable(we),Ve.viewport=new _t,$[we]=Ve),Ve.matrix.fromArray(He.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(He.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(Je.x,Je.y,Je.width,Je.height),we===0&&(x.matrix.copy(Ve.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ae===!0&&x.cameras.push(Ve)}const Le=r.enabledFeatures;if(Le&&Le.includes("depth-sensing")){const we=d.getDepthInformation(ce[0]);we&&we.isValid&&we.texture&&y.init(e,we,r.renderState)}}for(let ce=0;ce<_.length;ce++){const ae=M[ce],Le=_[ce];ae!==null&&Le!==void 0&&Le.update(ae,te,u||o)}re&&re(W,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),v=null}const ke=new yv;ke.setAnimationLoop(Ee),this.setAnimationLoop=function(W){re=W},this.dispose=function(){}}}const ar=new vi,Z1=new vt;function Q1(t,e){function n(p,c){p.matrixAutoUpdate===!0&&p.updateMatrix(),c.value.copy(p.matrix)}function i(p,c){c.color.getRGB(p.fogColor.value,gv(t)),c.isFog?(p.fogNear.value=c.near,p.fogFar.value=c.far):c.isFogExp2&&(p.fogDensity.value=c.density)}function r(p,c,g,_,M){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(p,c):c.isMeshToonMaterial?(s(p,c),d(p,c)):c.isMeshPhongMaterial?(s(p,c),f(p,c)):c.isMeshStandardMaterial?(s(p,c),h(p,c),c.isMeshPhysicalMaterial&&m(p,c,M)):c.isMeshMatcapMaterial?(s(p,c),v(p,c)):c.isMeshDepthMaterial?s(p,c):c.isMeshDistanceMaterial?(s(p,c),y(p,c)):c.isMeshNormalMaterial?s(p,c):c.isLineBasicMaterial?(o(p,c),c.isLineDashedMaterial&&a(p,c)):c.isPointsMaterial?l(p,c,g,_):c.isSpriteMaterial?u(p,c):c.isShadowMaterial?(p.color.value.copy(c.color),p.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(p,c){p.opacity.value=c.opacity,c.color&&p.diffuse.value.copy(c.color),c.emissive&&p.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(p.map.value=c.map,n(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.bumpMap&&(p.bumpMap.value=c.bumpMap,n(c.bumpMap,p.bumpMapTransform),p.bumpScale.value=c.bumpScale,c.side===nn&&(p.bumpScale.value*=-1)),c.normalMap&&(p.normalMap.value=c.normalMap,n(c.normalMap,p.normalMapTransform),p.normalScale.value.copy(c.normalScale),c.side===nn&&p.normalScale.value.negate()),c.displacementMap&&(p.displacementMap.value=c.displacementMap,n(c.displacementMap,p.displacementMapTransform),p.displacementScale.value=c.displacementScale,p.displacementBias.value=c.displacementBias),c.emissiveMap&&(p.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,p.emissiveMapTransform)),c.specularMap&&(p.specularMap.value=c.specularMap,n(c.specularMap,p.specularMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest);const g=e.get(c),_=g.envMap,M=g.envMapRotation;_&&(p.envMap.value=_,ar.copy(M),ar.x*=-1,ar.y*=-1,ar.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ar.y*=-1,ar.z*=-1),p.envMapRotation.value.setFromMatrix4(Z1.makeRotationFromEuler(ar)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=c.reflectivity,p.ior.value=c.ior,p.refractionRatio.value=c.refractionRatio),c.lightMap&&(p.lightMap.value=c.lightMap,p.lightMapIntensity.value=c.lightMapIntensity,n(c.lightMap,p.lightMapTransform)),c.aoMap&&(p.aoMap.value=c.aoMap,p.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,p.aoMapTransform))}function o(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,c.map&&(p.map.value=c.map,n(c.map,p.mapTransform))}function a(p,c){p.dashSize.value=c.dashSize,p.totalSize.value=c.dashSize+c.gapSize,p.scale.value=c.scale}function l(p,c,g,_){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.size.value=c.size*g,p.scale.value=_*.5,c.map&&(p.map.value=c.map,n(c.map,p.uvTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function u(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.rotation.value=c.rotation,c.map&&(p.map.value=c.map,n(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function f(p,c){p.specular.value.copy(c.specular),p.shininess.value=Math.max(c.shininess,1e-4)}function d(p,c){c.gradientMap&&(p.gradientMap.value=c.gradientMap)}function h(p,c){p.metalness.value=c.metalness,c.metalnessMap&&(p.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,p.metalnessMapTransform)),p.roughness.value=c.roughness,c.roughnessMap&&(p.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,p.roughnessMapTransform)),c.envMap&&(p.envMapIntensity.value=c.envMapIntensity)}function m(p,c,g){p.ior.value=c.ior,c.sheen>0&&(p.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),p.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(p.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,p.sheenColorMapTransform)),c.sheenRoughnessMap&&(p.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,p.sheenRoughnessMapTransform))),c.clearcoat>0&&(p.clearcoat.value=c.clearcoat,p.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(p.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,p.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(p.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===nn&&p.clearcoatNormalScale.value.negate())),c.dispersion>0&&(p.dispersion.value=c.dispersion),c.iridescence>0&&(p.iridescence.value=c.iridescence,p.iridescenceIOR.value=c.iridescenceIOR,p.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(p.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,p.iridescenceMapTransform)),c.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),c.transmission>0&&(p.transmission.value=c.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),c.transmissionMap&&(p.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,p.transmissionMapTransform)),p.thickness.value=c.thickness,c.thicknessMap&&(p.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=c.attenuationDistance,p.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(p.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(p.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=c.specularIntensity,p.specularColor.value.copy(c.specularColor),c.specularColorMap&&(p.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,p.specularColorMapTransform)),c.specularIntensityMap&&(p.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,c){c.matcap&&(p.matcap.value=c.matcap)}function y(p,c){const g=e.get(c).light;p.referencePosition.value.setFromMatrixPosition(g.matrixWorld),p.nearDistance.value=g.shadow.camera.near,p.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function J1(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,_){const M=_.program;i.uniformBlockBinding(g,M)}function u(g,_){let M=r[g.id];M===void 0&&(v(g),M=f(g),r[g.id]=M,g.addEventListener("dispose",p));const R=_.program;i.updateUBOMapping(g,R);const C=e.render.frame;s[g.id]!==C&&(h(g),s[g.id]=C)}function f(g){const _=d();g.__bindingPointIndex=_;const M=t.createBuffer(),R=g.__size,C=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,R,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,M),M}function d(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const _=r[g.id],M=g.uniforms,R=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let C=0,w=M.length;C<w;C++){const P=Array.isArray(M[C])?M[C]:[M[C]];for(let $=0,x=P.length;$<x;$++){const E=P[$];if(m(E,C,$,R)===!0){const z=E.__offset,B=Array.isArray(E.value)?E.value:[E.value];let G=0;for(let Z=0;Z<B.length;Z++){const H=B[Z],Q=y(H);typeof H=="number"||typeof H=="boolean"?(E.__data[0]=H,t.bufferSubData(t.UNIFORM_BUFFER,z+G,E.__data)):H.isMatrix3?(E.__data[0]=H.elements[0],E.__data[1]=H.elements[1],E.__data[2]=H.elements[2],E.__data[3]=0,E.__data[4]=H.elements[3],E.__data[5]=H.elements[4],E.__data[6]=H.elements[5],E.__data[7]=0,E.__data[8]=H.elements[6],E.__data[9]=H.elements[7],E.__data[10]=H.elements[8],E.__data[11]=0):(H.toArray(E.__data,G),G+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,z,E.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(g,_,M,R){const C=g.value,w=_+"_"+M;if(R[w]===void 0)return typeof C=="number"||typeof C=="boolean"?R[w]=C:R[w]=C.clone(),!0;{const P=R[w];if(typeof C=="number"||typeof C=="boolean"){if(P!==C)return R[w]=C,!0}else if(P.equals(C)===!1)return P.copy(C),!0}return!1}function v(g){const _=g.uniforms;let M=0;const R=16;for(let w=0,P=_.length;w<P;w++){const $=Array.isArray(_[w])?_[w]:[_[w]];for(let x=0,E=$.length;x<E;x++){const z=$[x],B=Array.isArray(z.value)?z.value:[z.value];for(let G=0,Z=B.length;G<Z;G++){const H=B[G],Q=y(H),L=M%R,Y=L%Q.boundary,K=L+Y;M+=Y,K!==0&&R-K<Q.storage&&(M+=R-K),z.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=M,M+=Q.storage}}}const C=M%R;return C>0&&(M+=R-C),g.__size=M,g.__cache={},this}function y(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),_}function p(g){const _=g.target;_.removeEventListener("dispose",p);const M=o.indexOf(_.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function c(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:u,dispose:c}}class eA{constructor(e={}){const{canvas:n=zS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const m=new Uint32Array(4),v=new Int32Array(4);let y=null,p=null;const c=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xn,this.toneMapping=ji,this.toneMappingExposure=1;const _=this;let M=!1,R=0,C=0,w=null,P=-1,$=null;const x=new _t,E=new _t;let z=null;const B=new Fe(0);let G=0,Z=n.width,H=n.height,Q=1,L=null,Y=null;const K=new _t(0,0,Z,H),re=new _t(0,0,Z,H);let Ee=!1;const ke=new xv;let W=!1,te=!1;const ce=new vt,ae=new vt,Le=new F,we=new _t,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Je=!1;function Ve(){return w===null?Q:1}let b=i;function an(T,U){return n.getContext(T,U)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Vd}`),n.addEventListener("webglcontextlost",q,!1),n.addEventListener("webglcontextrestored",le,!1),n.addEventListener("webglcontextcreationerror",de,!1),b===null){const U="webgl2";if(b=an(U,T),b===null)throw an(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Be,Xe,Ce,rt,be,A,S,N,j,J,X,ye,oe,pe,je,ne,me,Re,Pe,ge,ze,De,nt,D;function fe(){Be=new sw(b),Be.init(),De=new W1(b,Be),Xe=new QT(b,Be,e,De),Ce=new H1(b),Xe.reverseDepthBuffer&&Ce.buffers.depth.setReversed(!0),rt=new lw(b),be=new A1,A=new G1(b,Be,Ce,be,Xe,De,rt),S=new ew(_),N=new rw(_),j=new pM(b),nt=new KT(b,j),J=new ow(b,j,rt,nt),X=new cw(b,J,j,rt),Pe=new uw(b,Xe,A),ne=new JT(be),ye=new w1(_,S,N,Be,Xe,nt,ne),oe=new Q1(_,be),pe=new R1,je=new I1(Be),Re=new qT(_,S,N,Ce,X,h,l),me=new B1(_,X,Xe),D=new J1(b,rt,Xe,Ce),ge=new ZT(b,Be,rt),ze=new aw(b,Be,rt),rt.programs=ye.programs,_.capabilities=Xe,_.extensions=Be,_.properties=be,_.renderLists=pe,_.shadowMap=me,_.state=Ce,_.info=rt}fe();const V=new K1(_,b);this.xr=V,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const T=Be.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Be.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(T){T!==void 0&&(Q=T,this.setSize(Z,H,!1))},this.getSize=function(T){return T.set(Z,H)},this.setSize=function(T,U,O=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=T,H=U,n.width=Math.floor(T*Q),n.height=Math.floor(U*Q),O===!0&&(n.style.width=T+"px",n.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(Z*Q,H*Q).floor()},this.setDrawingBufferSize=function(T,U,O){Z=T,H=U,Q=O,n.width=Math.floor(T*O),n.height=Math.floor(U*O),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(x)},this.getViewport=function(T){return T.copy(K)},this.setViewport=function(T,U,O,k){T.isVector4?K.set(T.x,T.y,T.z,T.w):K.set(T,U,O,k),Ce.viewport(x.copy(K).multiplyScalar(Q).round())},this.getScissor=function(T){return T.copy(re)},this.setScissor=function(T,U,O,k){T.isVector4?re.set(T.x,T.y,T.z,T.w):re.set(T,U,O,k),Ce.scissor(E.copy(re).multiplyScalar(Q).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(T){Ce.setScissorTest(Ee=T)},this.setOpaqueSort=function(T){L=T},this.setTransparentSort=function(T){Y=T},this.getClearColor=function(T){return T.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(T=!0,U=!0,O=!0){let k=0;if(T){let I=!1;if(w!==null){const ie=w.texture.format;I=ie===$d||ie===Yd||ie===jd}if(I){const ie=w.texture.type,ue=ie===_i||ie===Ar||ie===Po||ie===bs||ie===Wd||ie===Xd,_e=Re.getClearColor(),ve=Re.getClearAlpha(),Te=_e.r,Ae=_e.g,Se=_e.b;ue?(m[0]=Te,m[1]=Ae,m[2]=Se,m[3]=ve,b.clearBufferuiv(b.COLOR,0,m)):(v[0]=Te,v[1]=Ae,v[2]=Se,v[3]=ve,b.clearBufferiv(b.COLOR,0,v))}else k|=b.COLOR_BUFFER_BIT}U&&(k|=b.DEPTH_BUFFER_BIT,b.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),O&&(k|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",q,!1),n.removeEventListener("webglcontextrestored",le,!1),n.removeEventListener("webglcontextcreationerror",de,!1),pe.dispose(),je.dispose(),be.dispose(),S.dispose(),N.dispose(),X.dispose(),nt.dispose(),D.dispose(),ye.dispose(),V.dispose(),V.removeEventListener("sessionstart",Jd),V.removeEventListener("sessionend",eh),tr.stop()};function q(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const T=rt.autoReset,U=me.enabled,O=me.autoUpdate,k=me.needsUpdate,I=me.type;fe(),rt.autoReset=T,me.enabled=U,me.autoUpdate=O,me.needsUpdate=k,me.type=I}function de(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ge(T){const U=T.target;U.removeEventListener("dispose",Ge),xt(U)}function xt(T){jt(T),be.remove(T)}function jt(T){const U=be.get(T).programs;U!==void 0&&(U.forEach(function(O){ye.releaseProgram(O)}),T.isShaderMaterial&&ye.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,O,k,I,ie){U===null&&(U=He);const ue=I.isMesh&&I.matrixWorld.determinant()<0,_e=Rv(T,U,O,k,I);Ce.setMaterial(k,ue);let ve=O.index,Te=1;if(k.wireframe===!0){if(ve=J.getWireframeAttribute(O),ve===void 0)return;Te=2}const Ae=O.drawRange,Se=O.attributes.position;let Ze=Ae.start*Te,st=(Ae.start+Ae.count)*Te;ie!==null&&(Ze=Math.max(Ze,ie.start*Te),st=Math.min(st,(ie.start+ie.count)*Te)),ve!==null?(Ze=Math.max(Ze,0),st=Math.min(st,ve.count)):Se!=null&&(Ze=Math.max(Ze,0),st=Math.min(st,Se.count));const ht=st-Ze;if(ht<0||ht===1/0)return;nt.setup(I,k,_e,O,ve);let ln,$e=ge;if(ve!==null&&(ln=j.get(ve),$e=ze,$e.setIndex(ln)),I.isMesh)k.wireframe===!0?(Ce.setLineWidth(k.wireframeLinewidth*Ve()),$e.setMode(b.LINES)):$e.setMode(b.TRIANGLES);else if(I.isLine){let Me=k.linewidth;Me===void 0&&(Me=1),Ce.setLineWidth(Me*Ve()),I.isLineSegments?$e.setMode(b.LINES):I.isLineLoop?$e.setMode(b.LINE_LOOP):$e.setMode(b.LINE_STRIP)}else I.isPoints?$e.setMode(b.POINTS):I.isSprite&&$e.setMode(b.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)$e.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))$e.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const Me=I._multiDrawStarts,bt=I._multiDrawCounts,qe=I._multiDrawCount,Pn=ve?j.get(ve).bytesPerElement:1,Dr=be.get(k).currentProgram.getUniforms();for(let un=0;un<qe;un++)Dr.setValue(b,"_gl_DrawID",un),$e.render(Me[un]/Pn,bt[un])}else if(I.isInstancedMesh)$e.renderInstances(Ze,ht,I.count);else if(O.isInstancedBufferGeometry){const Me=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,bt=Math.min(O.instanceCount,Me);$e.renderInstances(Ze,ht,bt)}else $e.render(Ze,ht)};function Ye(T,U,O){T.transparent===!0&&T.side===oi&&T.forceSinglePass===!1?(T.side=nn,T.needsUpdate=!0,Ho(T,U,O),T.side=qi,T.needsUpdate=!0,Ho(T,U,O),T.side=oi):Ho(T,U,O)}this.compile=function(T,U,O=null){O===null&&(O=T),p=je.get(O),p.init(U),g.push(p),O.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),T!==O&&T.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),p.setupLights();const k=new Set;return T.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const ie=I.material;if(ie)if(Array.isArray(ie))for(let ue=0;ue<ie.length;ue++){const _e=ie[ue];Ye(_e,O,I),k.add(_e)}else Ye(ie,O,I),k.add(ie)}),g.pop(),p=null,k},this.compileAsync=function(T,U,O=null){const k=this.compile(T,U,O);return new Promise(I=>{function ie(){if(k.forEach(function(ue){be.get(ue).currentProgram.isReady()&&k.delete(ue)}),k.size===0){I(T);return}setTimeout(ie,10)}Be.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let Yt=null;function Zn(T){Yt&&Yt(T)}function Jd(){tr.stop()}function eh(){tr.start()}const tr=new yv;tr.setAnimationLoop(Zn),typeof self<"u"&&tr.setContext(self),this.setAnimationLoop=function(T){Yt=T,V.setAnimationLoop(T),T===null?tr.stop():tr.start()},V.addEventListener("sessionstart",Jd),V.addEventListener("sessionend",eh),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(U),U=V.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,U,w),p=je.get(T,g.length),p.init(U),g.push(p),ae.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ke.setFromProjectionMatrix(ae),te=this.localClippingEnabled,W=ne.init(this.clippingPlanes,te),y=pe.get(T,c.length),y.init(),c.push(y),V.enabled===!0&&V.isPresenting===!0){const ie=_.xr.getDepthSensingMesh();ie!==null&&Jl(ie,U,-1/0,_.sortObjects)}Jl(T,U,0,_.sortObjects),y.finish(),_.sortObjects===!0&&y.sort(L,Y),Je=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Je&&Re.addToRenderList(y,T),this.info.render.frame++,W===!0&&ne.beginShadows();const O=p.state.shadowsArray;me.render(O,T,U),W===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=y.opaque,I=y.transmissive;if(p.setupLights(),U.isArrayCamera){const ie=U.cameras;if(I.length>0)for(let ue=0,_e=ie.length;ue<_e;ue++){const ve=ie[ue];nh(k,I,T,ve)}Je&&Re.render(T);for(let ue=0,_e=ie.length;ue<_e;ue++){const ve=ie[ue];th(y,T,ve,ve.viewport)}}else I.length>0&&nh(k,I,T,U),Je&&Re.render(T),th(y,T,U);w!==null&&(A.updateMultisampleRenderTarget(w),A.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(_,T,U),nt.resetDefaultState(),P=-1,$=null,g.pop(),g.length>0?(p=g[g.length-1],W===!0&&ne.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,c.pop(),c.length>0?y=c[c.length-1]:y=null};function Jl(T,U,O,k){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)O=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ke.intersectsSprite(T)){k&&we.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ae);const ue=X.update(T),_e=T.material;_e.visible&&y.push(T,ue,_e,O,we.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ke.intersectsObject(T))){const ue=X.update(T),_e=T.material;if(k&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),we.copy(T.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),we.copy(ue.boundingSphere.center)),we.applyMatrix4(T.matrixWorld).applyMatrix4(ae)),Array.isArray(_e)){const ve=ue.groups;for(let Te=0,Ae=ve.length;Te<Ae;Te++){const Se=ve[Te],Ze=_e[Se.materialIndex];Ze&&Ze.visible&&y.push(T,ue,Ze,O,we.z,Se)}}else _e.visible&&y.push(T,ue,_e,O,we.z,null)}}const ie=T.children;for(let ue=0,_e=ie.length;ue<_e;ue++)Jl(ie[ue],U,O,k)}function th(T,U,O,k){const I=T.opaque,ie=T.transmissive,ue=T.transparent;p.setupLightsView(O),W===!0&&ne.setGlobalState(_.clippingPlanes,O),k&&Ce.viewport(x.copy(k)),I.length>0&&zo(I,U,O),ie.length>0&&zo(ie,U,O),ue.length>0&&zo(ue,U,O),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function nh(T,U,O,k){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new Cr(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?No:_i,minFilter:_r,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const ie=p.state.transmissionRenderTarget[k.id],ue=k.viewport||x;ie.setSize(ue.z,ue.w);const _e=_.getRenderTarget();_.setRenderTarget(ie),_.getClearColor(B),G=_.getClearAlpha(),G<1&&_.setClearColor(16777215,.5),_.clear(),Je&&Re.render(O);const ve=_.toneMapping;_.toneMapping=ji;const Te=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),W===!0&&ne.setGlobalState(_.clippingPlanes,k),zo(T,O,k),A.updateMultisampleRenderTarget(ie),A.updateRenderTargetMipmap(ie),Be.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let Se=0,Ze=U.length;Se<Ze;Se++){const st=U[Se],ht=st.object,ln=st.geometry,$e=st.material,Me=st.group;if($e.side===oi&&ht.layers.test(k.layers)){const bt=$e.side;$e.side=nn,$e.needsUpdate=!0,ih(ht,O,k,ln,$e,Me),$e.side=bt,$e.needsUpdate=!0,Ae=!0}}Ae===!0&&(A.updateMultisampleRenderTarget(ie),A.updateRenderTargetMipmap(ie))}_.setRenderTarget(_e),_.setClearColor(B,G),Te!==void 0&&(k.viewport=Te),_.toneMapping=ve}function zo(T,U,O){const k=U.isScene===!0?U.overrideMaterial:null;for(let I=0,ie=T.length;I<ie;I++){const ue=T[I],_e=ue.object,ve=ue.geometry,Te=k===null?ue.material:k,Ae=ue.group;_e.layers.test(O.layers)&&ih(_e,U,O,ve,Te,Ae)}}function ih(T,U,O,k,I,ie){T.onBeforeRender(_,U,O,k,I,ie),T.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),I.onBeforeRender(_,U,O,k,T,ie),I.transparent===!0&&I.side===oi&&I.forceSinglePass===!1?(I.side=nn,I.needsUpdate=!0,_.renderBufferDirect(O,U,k,I,T,ie),I.side=qi,I.needsUpdate=!0,_.renderBufferDirect(O,U,k,I,T,ie),I.side=oi):_.renderBufferDirect(O,U,k,I,T,ie),T.onAfterRender(_,U,O,k,I,ie)}function Ho(T,U,O){U.isScene!==!0&&(U=He);const k=be.get(T),I=p.state.lights,ie=p.state.shadowsArray,ue=I.state.version,_e=ye.getParameters(T,I.state,ie,U,O),ve=ye.getProgramCacheKey(_e);let Te=k.programs;k.environment=T.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(T.isMeshStandardMaterial?N:S).get(T.envMap||k.environment),k.envMapRotation=k.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Te===void 0&&(T.addEventListener("dispose",Ge),Te=new Map,k.programs=Te);let Ae=Te.get(ve);if(Ae!==void 0){if(k.currentProgram===Ae&&k.lightsStateVersion===ue)return sh(T,_e),Ae}else _e.uniforms=ye.getUniforms(T),T.onBeforeCompile(_e,_),Ae=ye.acquireProgram(_e,ve),Te.set(ve,Ae),k.uniforms=_e.uniforms;const Se=k.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Se.clippingPlanes=ne.uniform),sh(T,_e),k.needsLights=bv(T),k.lightsStateVersion=ue,k.needsLights&&(Se.ambientLightColor.value=I.state.ambient,Se.lightProbe.value=I.state.probe,Se.directionalLights.value=I.state.directional,Se.directionalLightShadows.value=I.state.directionalShadow,Se.spotLights.value=I.state.spot,Se.spotLightShadows.value=I.state.spotShadow,Se.rectAreaLights.value=I.state.rectArea,Se.ltc_1.value=I.state.rectAreaLTC1,Se.ltc_2.value=I.state.rectAreaLTC2,Se.pointLights.value=I.state.point,Se.pointLightShadows.value=I.state.pointShadow,Se.hemisphereLights.value=I.state.hemi,Se.directionalShadowMap.value=I.state.directionalShadowMap,Se.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Se.spotShadowMap.value=I.state.spotShadowMap,Se.spotLightMatrix.value=I.state.spotLightMatrix,Se.spotLightMap.value=I.state.spotLightMap,Se.pointShadowMap.value=I.state.pointShadowMap,Se.pointShadowMatrix.value=I.state.pointShadowMatrix),k.currentProgram=Ae,k.uniformsList=null,Ae}function rh(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=Ka.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function sh(T,U){const O=be.get(T);O.outputColorSpace=U.outputColorSpace,O.batching=U.batching,O.batchingColor=U.batchingColor,O.instancing=U.instancing,O.instancingColor=U.instancingColor,O.instancingMorph=U.instancingMorph,O.skinning=U.skinning,O.morphTargets=U.morphTargets,O.morphNormals=U.morphNormals,O.morphColors=U.morphColors,O.morphTargetsCount=U.morphTargetsCount,O.numClippingPlanes=U.numClippingPlanes,O.numIntersection=U.numClipIntersection,O.vertexAlphas=U.vertexAlphas,O.vertexTangents=U.vertexTangents,O.toneMapping=U.toneMapping}function Rv(T,U,O,k,I){U.isScene!==!0&&(U=He),A.resetTextureUnits();const ie=U.fog,ue=k.isMeshStandardMaterial?U.environment:null,_e=w===null?_.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:er,ve=(k.isMeshStandardMaterial?N:S).get(k.envMap||ue),Te=k.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ae=!!O.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Se=!!O.morphAttributes.position,Ze=!!O.morphAttributes.normal,st=!!O.morphAttributes.color;let ht=ji;k.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ht=_.toneMapping);const ln=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,$e=ln!==void 0?ln.length:0,Me=be.get(k),bt=p.state.lights;if(W===!0&&(te===!0||T!==$)){const xn=T===$&&k.id===P;ne.setState(k,T,xn)}let qe=!1;k.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==bt.state.version||Me.outputColorSpace!==_e||I.isBatchedMesh&&Me.batching===!1||!I.isBatchedMesh&&Me.batching===!0||I.isBatchedMesh&&Me.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Me.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Me.instancing===!1||!I.isInstancedMesh&&Me.instancing===!0||I.isSkinnedMesh&&Me.skinning===!1||!I.isSkinnedMesh&&Me.skinning===!0||I.isInstancedMesh&&Me.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Me.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Me.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Me.instancingMorph===!1&&I.morphTexture!==null||Me.envMap!==ve||k.fog===!0&&Me.fog!==ie||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==ne.numPlanes||Me.numIntersection!==ne.numIntersection)||Me.vertexAlphas!==Te||Me.vertexTangents!==Ae||Me.morphTargets!==Se||Me.morphNormals!==Ze||Me.morphColors!==st||Me.toneMapping!==ht||Me.morphTargetsCount!==$e)&&(qe=!0):(qe=!0,Me.__version=k.version);let Pn=Me.currentProgram;qe===!0&&(Pn=Ho(k,U,I));let Dr=!1,un=!1,eu=!1;const mt=Pn.getUniforms(),yi=Me.uniforms;if(Ce.useProgram(Pn.program)&&(Dr=!0,un=!0,eu=!0),k.id!==P&&(P=k.id,un=!0),Dr||$!==T){Xe.reverseDepthBuffer?(ce.copy(T.projectionMatrix),VS(ce),GS(ce),mt.setValue(b,"projectionMatrix",ce)):mt.setValue(b,"projectionMatrix",T.projectionMatrix),mt.setValue(b,"viewMatrix",T.matrixWorldInverse);const xn=mt.map.cameraPosition;xn!==void 0&&xn.setValue(b,Le.setFromMatrixPosition(T.matrixWorld)),Xe.logarithmicDepthBuffer&&mt.setValue(b,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&mt.setValue(b,"isOrthographic",T.isOrthographicCamera===!0),$!==T&&($=T,un=!0,eu=!0)}if(I.isSkinnedMesh){mt.setOptional(b,I,"bindMatrix"),mt.setOptional(b,I,"bindMatrixInverse");const xn=I.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),mt.setValue(b,"boneTexture",xn.boneTexture,A))}I.isBatchedMesh&&(mt.setOptional(b,I,"batchingTexture"),mt.setValue(b,"batchingTexture",I._matricesTexture,A),mt.setOptional(b,I,"batchingIdTexture"),mt.setValue(b,"batchingIdTexture",I._indirectTexture,A),mt.setOptional(b,I,"batchingColorTexture"),I._colorsTexture!==null&&mt.setValue(b,"batchingColorTexture",I._colorsTexture,A));const tu=O.morphAttributes;if((tu.position!==void 0||tu.normal!==void 0||tu.color!==void 0)&&Pe.update(I,O,Pn),(un||Me.receiveShadow!==I.receiveShadow)&&(Me.receiveShadow=I.receiveShadow,mt.setValue(b,"receiveShadow",I.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(yi.envMap.value=ve,yi.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(yi.envMapIntensity.value=U.environmentIntensity),un&&(mt.setValue(b,"toneMappingExposure",_.toneMappingExposure),Me.needsLights&&Pv(yi,eu),ie&&k.fog===!0&&oe.refreshFogUniforms(yi,ie),oe.refreshMaterialUniforms(yi,k,Q,H,p.state.transmissionRenderTarget[T.id]),Ka.upload(b,rh(Me),yi,A)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Ka.upload(b,rh(Me),yi,A),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&mt.setValue(b,"center",I.center),mt.setValue(b,"modelViewMatrix",I.modelViewMatrix),mt.setValue(b,"normalMatrix",I.normalMatrix),mt.setValue(b,"modelMatrix",I.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const xn=k.uniformsGroups;for(let nu=0,Lv=xn.length;nu<Lv;nu++){const oh=xn[nu];D.update(oh,Pn),D.bind(oh,Pn)}}return Pn}function Pv(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function bv(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,U,O){be.get(T.texture).__webglTexture=U,be.get(T.depthTexture).__webglTexture=O;const k=be.get(T);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=O===void 0,k.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,U){const O=be.get(T);O.__webglFramebuffer=U,O.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,O=0){w=T,R=U,C=O;let k=!0,I=null,ie=!1,ue=!1;if(T){const ve=be.get(T);if(ve.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(b.FRAMEBUFFER,null),k=!1;else if(ve.__webglFramebuffer===void 0)A.setupRenderTarget(T);else if(ve.__hasExternalTextures)A.rebindTextures(T,be.get(T.texture).__webglTexture,be.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Se=T.depthTexture;if(ve.__boundDepthTexture!==Se){if(Se!==null&&be.has(Se)&&(T.width!==Se.image.width||T.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(T)}}const Te=T.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(ue=!0);const Ae=be.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ae[U])?I=Ae[U][O]:I=Ae[U],ie=!0):T.samples>0&&A.useMultisampledRTT(T)===!1?I=be.get(T).__webglMultisampledFramebuffer:Array.isArray(Ae)?I=Ae[O]:I=Ae,x.copy(T.viewport),E.copy(T.scissor),z=T.scissorTest}else x.copy(K).multiplyScalar(Q).floor(),E.copy(re).multiplyScalar(Q).floor(),z=Ee;if(Ce.bindFramebuffer(b.FRAMEBUFFER,I)&&k&&Ce.drawBuffers(T,I),Ce.viewport(x),Ce.scissor(E),Ce.setScissorTest(z),ie){const ve=be.get(T.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+U,ve.__webglTexture,O)}else if(ue){const ve=be.get(T.texture),Te=U||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,ve.__webglTexture,O||0,Te)}P=-1},this.readRenderTargetPixels=function(T,U,O,k,I,ie,ue){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ue!==void 0&&(_e=_e[ue]),_e){Ce.bindFramebuffer(b.FRAMEBUFFER,_e);try{const ve=T.texture,Te=ve.format,Ae=ve.type;if(!Xe.textureFormatReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-k&&O>=0&&O<=T.height-I&&b.readPixels(U,O,k,I,De.convert(Te),De.convert(Ae),ie)}finally{const ve=w!==null?be.get(w).__webglFramebuffer:null;Ce.bindFramebuffer(b.FRAMEBUFFER,ve)}}},this.readRenderTargetPixelsAsync=async function(T,U,O,k,I,ie,ue){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ue!==void 0&&(_e=_e[ue]),_e){const ve=T.texture,Te=ve.format,Ae=ve.type;if(!Xe.textureFormatReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=T.width-k&&O>=0&&O<=T.height-I){Ce.bindFramebuffer(b.FRAMEBUFFER,_e);const Se=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Se),b.bufferData(b.PIXEL_PACK_BUFFER,ie.byteLength,b.STREAM_READ),b.readPixels(U,O,k,I,De.convert(Te),De.convert(Ae),0);const Ze=w!==null?be.get(w).__webglFramebuffer:null;Ce.bindFramebuffer(b.FRAMEBUFFER,Ze);const st=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await HS(b,st,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,Se),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,ie),b.deleteBuffer(Se),b.deleteSync(st),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,U=null,O=0){T.isTexture!==!0&&(qa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,T=arguments[1]);const k=Math.pow(2,-O),I=Math.floor(T.image.width*k),ie=Math.floor(T.image.height*k),ue=U!==null?U.x:0,_e=U!==null?U.y:0;A.setTexture2D(T,0),b.copyTexSubImage2D(b.TEXTURE_2D,O,0,0,ue,_e,I,ie),Ce.unbindTexture()},this.copyTextureToTexture=function(T,U,O=null,k=null,I=0){T.isTexture!==!0&&(qa("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,T=arguments[1],U=arguments[2],I=arguments[3]||0,O=null);let ie,ue,_e,ve,Te,Ae;O!==null?(ie=O.max.x-O.min.x,ue=O.max.y-O.min.y,_e=O.min.x,ve=O.min.y):(ie=T.image.width,ue=T.image.height,_e=0,ve=0),k!==null?(Te=k.x,Ae=k.y):(Te=0,Ae=0);const Se=De.convert(U.format),Ze=De.convert(U.type);A.setTexture2D(U,0),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,U.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,U.unpackAlignment);const st=b.getParameter(b.UNPACK_ROW_LENGTH),ht=b.getParameter(b.UNPACK_IMAGE_HEIGHT),ln=b.getParameter(b.UNPACK_SKIP_PIXELS),$e=b.getParameter(b.UNPACK_SKIP_ROWS),Me=b.getParameter(b.UNPACK_SKIP_IMAGES),bt=T.isCompressedTexture?T.mipmaps[I]:T.image;b.pixelStorei(b.UNPACK_ROW_LENGTH,bt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,bt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,_e),b.pixelStorei(b.UNPACK_SKIP_ROWS,ve),T.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,I,Te,Ae,ie,ue,Se,Ze,bt.data):T.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,I,Te,Ae,bt.width,bt.height,Se,bt.data):b.texSubImage2D(b.TEXTURE_2D,I,Te,Ae,ie,ue,Se,Ze,bt),b.pixelStorei(b.UNPACK_ROW_LENGTH,st),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,ht),b.pixelStorei(b.UNPACK_SKIP_PIXELS,ln),b.pixelStorei(b.UNPACK_SKIP_ROWS,$e),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Me),I===0&&U.generateMipmaps&&b.generateMipmap(b.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(T,U,O=null,k=null,I=0){T.isTexture!==!0&&(qa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,k=arguments[1]||null,T=arguments[2],U=arguments[3],I=arguments[4]||0);let ie,ue,_e,ve,Te,Ae,Se,Ze,st;const ht=T.isCompressedTexture?T.mipmaps[I]:T.image;O!==null?(ie=O.max.x-O.min.x,ue=O.max.y-O.min.y,_e=O.max.z-O.min.z,ve=O.min.x,Te=O.min.y,Ae=O.min.z):(ie=ht.width,ue=ht.height,_e=ht.depth,ve=0,Te=0,Ae=0),k!==null?(Se=k.x,Ze=k.y,st=k.z):(Se=0,Ze=0,st=0);const ln=De.convert(U.format),$e=De.convert(U.type);let Me;if(U.isData3DTexture)A.setTexture3D(U,0),Me=b.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)A.setTexture2DArray(U,0),Me=b.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,U.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,U.unpackAlignment);const bt=b.getParameter(b.UNPACK_ROW_LENGTH),qe=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Pn=b.getParameter(b.UNPACK_SKIP_PIXELS),Dr=b.getParameter(b.UNPACK_SKIP_ROWS),un=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,ht.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,ht.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,ve),b.pixelStorei(b.UNPACK_SKIP_ROWS,Te),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Ae),T.isDataTexture||T.isData3DTexture?b.texSubImage3D(Me,I,Se,Ze,st,ie,ue,_e,ln,$e,ht.data):U.isCompressedArrayTexture?b.compressedTexSubImage3D(Me,I,Se,Ze,st,ie,ue,_e,ln,ht.data):b.texSubImage3D(Me,I,Se,Ze,st,ie,ue,_e,ln,$e,ht),b.pixelStorei(b.UNPACK_ROW_LENGTH,bt),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,qe),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Pn),b.pixelStorei(b.UNPACK_SKIP_ROWS,Dr),b.pixelStorei(b.UNPACK_SKIP_IMAGES,un),I===0&&U.generateMipmaps&&b.generateMipmap(Me),Ce.unbindTexture()},this.initRenderTarget=function(T){be.get(T).__webglFramebuffer===void 0&&A.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),Ce.unbindTexture()},this.resetState=function(){R=0,C=0,w=null,Ce.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===qd?"display-p3":"srgb",n.unpackColorSpace=Ke.workingColorSpace===$l?"display-p3":"srgb"}}class tA extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Xf extends ko{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const _m=new vt,jf=new Kd,Ca=new ql,Ra=new F;class vm extends sn{constructor(e=new Kn,n=new Xf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ca.copy(i.boundingSphere),Ca.applyMatrix4(r),Ca.radius+=s,e.ray.intersectsSphere(Ca)===!1)return;_m.copy(r).invert(),jf.copy(e.ray).applyMatrix4(_m);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,d=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let v=h,y=m;v<y;v++){const p=u.getX(v);Ra.fromBufferAttribute(d,p),xm(Ra,p,l,r,e,n,this)}}else{const h=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let v=h,y=m;v<y;v++)Ra.fromBufferAttribute(d,v),xm(Ra,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function xm(t,e,n,i,r,s,o){const a=jf.distanceSqToPoint(t);if(a<n){const l=new F;jf.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class nA{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ym(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=ym();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function ym(){return performance.now()}class Sm{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Vt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class iA extends Lr{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vd);const Mm={type:"change"},Qd={type:"start"},Av={type:"end"},Pa=new Kd,Em=new bi,rA=Math.cos(70*BS.DEG2RAD),Mt=new F,qt=2*Math.PI,et={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},sc=1e-6;class sA extends iA{constructor(e,n=null){super(e,n),this.state=et.NONE,this.enabled=!0,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:gs.ROTATE,MIDDLE:gs.DOLLY,RIGHT:gs.PAN},this.touches={ONE:as.ROTATE,TWO:as.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new Rr,this._lastTargetPosition=new F,this._quat=new Rr().setFromUnitVectors(e.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Sm,this._sphericalDelta=new Sm,this._scale=1,this._panOffset=new F,this._rotateStart=new Ne,this._rotateEnd=new Ne,this._rotateDelta=new Ne,this._panStart=new Ne,this._panEnd=new Ne,this._panDelta=new Ne,this._dollyStart=new Ne,this._dollyEnd=new Ne,this._dollyDelta=new Ne,this._dollyDirection=new F,this._mouse=new Ne,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=aA.bind(this),this._onPointerDown=oA.bind(this),this._onPointerUp=lA.bind(this),this._onContextMenu=mA.bind(this),this._onMouseWheel=fA.bind(this),this._onKeyDown=dA.bind(this),this._onTouchStart=hA.bind(this),this._onTouchMove=pA.bind(this),this._onMouseDown=uA.bind(this),this._onMouseMove=cA.bind(this),this._interceptControlDown=gA.bind(this),this._interceptControlUp=_A.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Mm),this.update(),this.state=et.NONE}update(e=null){const n=this.object.position;Mt.copy(n).sub(this.target),Mt.applyQuaternion(this._quat),this._spherical.setFromVector3(Mt),this.autoRotate&&this.state===et.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=qt:i>Math.PI&&(i-=qt),r<-Math.PI?r+=qt:r>Math.PI&&(r-=qt),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Mt.setFromSpherical(this._spherical),Mt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Mt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Mt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new F(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const u=new F(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(a),this.object.updateMatrixWorld(),o=Mt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Pa.origin.copy(this.object.position),Pa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Pa.direction))<rA?this.object.lookAt(this.target):(Em.setFromNormalAndCoplanarPoint(this.object.up,this.target),Pa.intersectPlane(Em,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>sc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>sc||this._lastTargetPosition.distanceToSquared(this.target)>sc?(this.dispatchEvent(Mm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?qt/60*this.autoRotateSpeed*e:qt/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Mt.setFromMatrixColumn(n,0),Mt.multiplyScalar(-e),this._panOffset.add(Mt)}_panUp(e,n){this.screenSpacePanning===!0?Mt.setFromMatrixColumn(n,1):(Mt.setFromMatrixColumn(n,0),Mt.crossVectors(this.object.up,Mt)),Mt.multiplyScalar(e),this._panOffset.add(Mt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Mt.copy(r).sub(this.target);let s=Mt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(qt*this._rotateDelta.x/n.clientHeight),this._rotateUp(qt*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(qt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-qt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(qt*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-qt*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(qt*this._rotateDelta.x/n.clientHeight),this._rotateUp(qt*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Ne,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function oA(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function aA(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function lA(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Av),this.state=et.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function uA(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case gs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=et.DOLLY;break;case gs.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=et.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=et.ROTATE}break;case gs.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=et.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=et.PAN}break;default:this.state=et.NONE}this.state!==et.NONE&&this.dispatchEvent(Qd)}function cA(t){switch(this.state){case et.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case et.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case et.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function fA(t){this.enabled===!1||this.enableZoom===!1||this.state!==et.NONE||(t.preventDefault(),this.dispatchEvent(Qd),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(Av))}function dA(t){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(t)}function hA(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case as.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=et.TOUCH_ROTATE;break;case as.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=et.TOUCH_PAN;break;default:this.state=et.NONE}break;case 2:switch(this.touches.TWO){case as.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=et.TOUCH_DOLLY_PAN;break;case as.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=et.TOUCH_DOLLY_ROTATE;break;default:this.state=et.NONE}break;default:this.state=et.NONE}this.state!==et.NONE&&this.dispatchEvent(Qd)}function pA(t){switch(this._trackPointer(t),this.state){case et.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case et.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case et.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case et.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=et.NONE}}function mA(t){this.enabled!==!1&&t.preventDefault()}function gA(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function _A(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Qt=9e3;function Ql(t,e,n){return t.clone().lerp(e,n)}function Tm(){const t=new Float32Array(Qt*3),e=new Float32Array(Qt*3),n=6,i=4,r=1.2,s=.55,o=new Fe("#ff6ec7"),a=new Fe("#4facfe");for(let l=0;l<Qt;l++){const u=l*3,f=Math.random()*n,d=l%i/i*Math.PI*2,h=f*r,m=Math.pow(Math.random(),3)*(Math.random()<.5?1:-1)*s*f,v=Math.pow(Math.random(),3)*(Math.random()<.5?1:-1)*s*f*.4,y=Math.pow(Math.random(),3)*(Math.random()<.5?1:-1)*s*f;t[u]=Math.cos(d+h)*f+m,t[u+1]=v,t[u+2]=Math.sin(d+h)*f+y;const p=Ql(o,a,f/n);e[u]=p.r,e[u+1]=p.g,e[u+2]=p.b}return{positions:t,colors:e,size:.045}}function vA(){const t=new Float32Array(Qt*3),e=new Float32Array(Qt*3),n=new Fe("#fff6d5"),i=new Fe("#ff8a3d");for(let r=0;r<Qt;r++){const s=r*3;if(r%6===0){const a=Math.pow(Math.random(),2)*.6,l=Math.random()*Math.PI*2,u=Math.acos(2*Math.random()-1);t[s]=a*Math.sin(u)*Math.cos(l),t[s+1]=a*Math.sin(u)*Math.sin(l),t[s+2]=a*Math.cos(u),e[s]=n.r,e[s+1]=n.g,e[s+2]=n.b}else{const a=Math.random()*Math.PI*2,l=2.6+Math.random()*2.6;t[s]=Math.cos(a)*l,t[s+1]=(Math.random()-.5)*.18,t[s+2]=Math.sin(a)*l;const u=Ql(n,i,(l-2.6)/2.6);e[s]=u.r,e[s+1]=u.g,e[s+2]=u.b}}return{positions:t,colors:e,size:.05}}function xA(){const t=new Float32Array(Qt*3),e=new Float32Array(Qt*3),n=new Fe("#ffffff"),i=new Fe("#ff3b3b");for(let r=0;r<Qt;r++){const s=r*3,o=1+Math.pow(Math.random(),.5)*7,a=Math.random()*Math.PI*2,l=Math.acos(2*Math.random()-1);t[s]=o*Math.sin(l)*Math.cos(a),t[s+1]=o*Math.sin(l)*Math.sin(a),t[s+2]=o*Math.cos(l);const u=Ql(n,i,Math.min(o/8,1));e[s]=u.r,e[s+1]=u.g,e[s+2]=u.b}return{positions:t,colors:e,size:.05}}function yA(){const t=new Float32Array(Qt*3),e=new Float32Array(Qt*3),n=new Fe("#5ef3ff"),i=new Fe("#b06bff"),r=6,s=22;for(let o=0;o<Qt;o++){const a=o*3,l=o%2,u=o/Qt,f=u*Math.PI*2*r+l*Math.PI,d=1.5+Math.sin(u*Math.PI*3)*.15;t[a]=Math.cos(f)*d,t[a+1]=Math.sin(f)*d,t[a+2]=u*s-s/2;const h=Ql(n,i,u);e[a]=h.r,e[a+1]=h.g,e[a+2]=h.b}return{positions:t,colors:e,size:.045}}const $r=[Tm(),vA(),xA(),yA(),Tm()],ba=$r.length-1;function SA(t){return t*t*(3-2*t)}function MA(){const t=xe.useRef(null),e=xe.useRef(null),n=xe.useRef(0);return xe.useEffect(()=>{const i=e.current,r=t.current;if(!i||!r)return;const s=new tA,o=new En(55,i.clientWidth/i.clientHeight,.1,200);o.position.set(0,2.6,9);const a=new eA({antialias:!0,alpha:!0});a.setPixelRatio(Math.min(window.devicePixelRatio,2)),a.setSize(i.clientWidth,i.clientHeight),i.appendChild(a.domElement);const l=new Kn,u=new Float32Array($r[0].positions),f=new Float32Array($r[0].colors);l.setAttribute("position",new mn(u,3)),l.setAttribute("color",new mn(f,3));const d=new Xf({size:$r[0].size,sizeAttenuation:!0,vertexColors:!0,transparent:!0,depthWrite:!1,blending:nf}),h=new vm(l,d);s.add(h);const m=new Kn,v=2e3,y=new Float32Array(v*3);for(let E=0;E<v;E++){const z=30+Math.random()*40,B=Math.random()*Math.PI*2,G=Math.acos(2*Math.random()-1);y[E*3]=z*Math.sin(G)*Math.cos(B),y[E*3+1]=z*Math.sin(G)*Math.sin(B),y[E*3+2]=z*Math.cos(G)}m.setAttribute("position",new mn(y,3));const p=new Xf({size:.06,color:"#ffffff",transparent:!0,opacity:.7,depthWrite:!1}),c=new vm(m,p);s.add(c);const g=new sA(o,a.domElement);g.enableDamping=!0,g.dampingFactor=.06,g.autoRotate=!0,g.autoRotateSpeed=.35,g.minDistance=2.5,g.maxDistance=40;let _;const M=new nA;function R(){const E=n.current*ba;let z=Math.floor(E);z>=ba&&(z=ba-1),z<0&&(z=0);const B=SA(Math.min(Math.max(E-z,0),1)),G=$r[z],Z=$r[z+1];for(let H=0;H<Qt*3;H++)u[H]=G.positions[H]+(Z.positions[H]-G.positions[H])*B,f[H]=G.colors[H]+(Z.colors[H]-G.colors[H])*B;l.attributes.position.needsUpdate=!0,l.attributes.color.needsUpdate=!0,d.size=G.size+(Z.size-G.size)*B}function C(){_=requestAnimationFrame(C);const E=M.getDelta();R(),h.rotation.y+=E*.06,c.rotation.y-=E*.008,g.update(),a.render(s,o)}C();function w(){const E=r.getBoundingClientRect(),z=window.innerHeight,B=E.height-z,G=-E.top;n.current=B>0?Math.min(Math.max(G/B,0),1):0}let P=!1;function $(){P||(requestAnimationFrame(()=>{w(),P=!1}),P=!0)}w(),window.addEventListener("scroll",$,{passive:!0});function x(){o.aspect=i.clientWidth/i.clientHeight,o.updateProjectionMatrix(),a.setSize(i.clientWidth,i.clientHeight),w()}return window.addEventListener("resize",x),()=>{cancelAnimationFrame(_),window.removeEventListener("scroll",$),window.removeEventListener("resize",x),g.dispose(),a.dispose(),l.dispose(),d.dispose(),m.dispose(),p.dispose(),i.removeChild(a.domElement)}},[]),tt.jsx("div",{ref:t,style:{height:`${(ba+1)*100}vh`,position:"relative"},children:tt.jsx("div",{ref:e,style:{position:"sticky",top:0,height:"100vh",width:"100%",overflow:"hidden",cursor:"grab"}})})}function EA(){return tt.jsx(MA,{})}function TA(){return tt.jsxs("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:16,textAlign:"center"},children:[tt.jsx("h1",{style:{fontSize:48},children:"404"}),tt.jsx("p",{style:{color:"var(--text-muted)"},children:"This page doesn't exist. If you're looking for an application, check the applications section on the homepage."}),tt.jsx("a",{className:"btn btn-primary",href:"/",children:"Back to home"})]})}function wA(){return tt.jsx(qy,{children:tt.jsxs(jy,{children:[tt.jsx(ef,{path:"/",element:tt.jsx(EA,{})}),tt.jsx(ef,{path:"*",element:tt.jsx(TA,{})})]})})}const AA=xe.createContext({theme:"dark",toggle:()=>{}}),wm="portfolio-theme";function CA({children:t}){const[e,n]=xe.useState(()=>typeof window>"u"?"dark":window.localStorage.getItem(wm)??"dark");xe.useEffect(()=>{document.documentElement.setAttribute("data-theme",e),window.localStorage.setItem(wm,e)},[e]);const i=()=>n(r=>r==="dark"?"light":"dark");return tt.jsx(AA.Provider,{value:{theme:e,toggle:i},children:t})}const RA="Custody Architecture",PA="custody",bA="Multichain crypto custody platform with signing policy engine and audit trail.",LA=["Crypto","NodeJS","PostgreSQL"],DA=!0,UA=1,IA="icon.png",NA="live",FA={name:RA,slug:PA,description:bA,tags:LA,featured:DA,priority:UA,icon:IA,status:NA},OA="Flight Tool",kA="flight-tool",BA="Real-time flight tracking and route planning dashboard.",zA=["Aviation","React","Maps"],HA=!0,VA=2,GA="icon.png",WA="live",XA={name:OA,slug:kA,description:BA,tags:zA,featured:HA,priority:VA,icon:GA,status:WA},jA=Object.assign({"/apps/custody/app.json":FA,"/apps/flight-tool/app.json":XA});function YA(t){return{...t,path:`/${t.slug}`}}const Cv=Object.values(jA).map(YA).sort((t,e)=>{const n=t.priority??999,i=e.priority??999;return n!==i?n-i:t.name.localeCompare(e.name)});Cv.filter(t=>t.featured);function $A(){const[t,e]=xe.useState(!1),[n,i]=xe.useState(""),[r,s]=xe.useState(0),o=xe.useMemo(()=>Cv.map(u=>({id:`app-${u.slug}`,label:`Open ${u.name}`,hint:u.path,run:()=>{window.location.href=u.path}})),[]),a=xe.useMemo(()=>{const l=n.trim().toLowerCase();return l?o.filter(u=>u.label.toLowerCase().includes(l)):o},[o,n]);return xe.useEffect(()=>{function l(u){(u.metaKey||u.ctrlKey)&&u.key.toLowerCase()==="k"&&(u.preventDefault(),e(f=>!f),i(""),s(0)),u.key==="Escape"&&e(!1)}return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[]),xe.useEffect(()=>{function l(u){t&&(u.key==="ArrowDown"?(u.preventDefault(),s(f=>Math.min(f+1,a.length-1))):u.key==="ArrowUp"?(u.preventDefault(),s(f=>Math.max(f-1,0))):u.key==="Enter"&&a[r]&&(a[r].run(),e(!1)))}return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[t,a,r]),t?tt.jsx("div",{className:"palette-overlay",onClick:()=>e(!1),children:tt.jsxs("div",{className:"palette-box",onClick:l=>l.stopPropagation(),children:[tt.jsx("input",{autoFocus:!0,className:"palette-input",placeholder:"Type a command or search apps…",value:n,onChange:l=>{i(l.target.value),s(0)}}),tt.jsxs("div",{role:"listbox",style:{maxHeight:320,overflowY:"auto"},children:[a.length===0&&tt.jsx("div",{className:"palette-item",children:"No results"}),a.map((l,u)=>tt.jsxs("div",{role:"option","aria-selected":u===r,className:"palette-item",onMouseEnter:()=>s(u),onClick:()=>{l.run(),e(!1)},style:{display:"flex",justifyContent:"space-between"},children:[tt.jsx("span",{children:l.label}),tt.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:12},children:l.hint})]},l.id))]})]})}):null}function qA(){return tt.jsxs(CA,{children:[tt.jsx($A,{}),tt.jsx(wA,{})]})}oc.createRoot(document.getElementById("root")).render(tt.jsx(Fm.StrictMode,{children:tt.jsx(qA,{})}));"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").catch(()=>{})});
//# sourceMappingURL=index-C2UrcDVG.js.map
