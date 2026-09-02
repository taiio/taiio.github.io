var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function ne(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function w(e,t){return ne(e.type,t,e.props)}function T(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function re(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var E=/\/+/g;function ie(e,t){return typeof e==`object`&&e&&e.key!=null?re(``+e.key):t.toString(36)}function D(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ae(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ae(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ie(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(E,`$&/`)+`/`),ae(o,r,i,``,function(e){return e})):o!=null&&(T(o)&&(o=w(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(E,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ie(a,u),c+=ae(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ie(a,u++),c+=ae(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ae(D(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function O(e,t,n){if(e==null)return e;var r=[],i=0;return ae(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function oe(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var k=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},A={map:O,forEach:function(e,t,n){O(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return O(e,function(){t++}),t},toArray:function(e){return O(e,function(e){return e})||[]},only:function(e){if(!T(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=A,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!te.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ne(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)te.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ne(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=T,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:oe}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,k)}catch(e){k(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.8`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,ee||(ee=!0,T());else{var t=n(l);t!==null&&ie(x,t.startTime-e)}}}var ee=!1,S=-1,C=5,te=-1;function ne(){return g?!0:!(e.unstable_now()-te<C)}function w(){if(g=!1,ee){var t=e.unstable_now();te=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ie(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?T():ee=!1}}}var T;if(typeof y==`function`)T=function(){y(w)};else if(typeof MessageChannel<`u`){var re=new MessageChannel,E=re.port2;re.port1.onmessage=w,T=function(){E.postMessage(null)}}else T=function(){_(w,0)};function ie(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,ie(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,T()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.8`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),te=Symbol.for(`react.suspense`),ne=Symbol.for(`react.suspense_list`),w=Symbol.for(`react.memo`),T=Symbol.for(`react.lazy`),re=Symbol.for(`react.activity`),E=Symbol.for(`react.memo_cache_sentinel`),ie=Symbol.iterator;function D(e){return typeof e!=`object`||!e?null:(e=ie&&e[ie]||e[`@@iterator`],typeof e==`function`?e:null)}var ae=Symbol.for(`react.client.reference`);function O(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ae?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case te:return`Suspense`;case ne:return`SuspenseList`;case re:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case w:return t=e.displayName||null,t===null?O(e.type)||`Memo`:t;case T:t=e._payload,e=e._init;try{return O(e(t))}catch{}}return null}var oe=Array.isArray,k=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se={pending:!1,data:null,method:null,action:null},ce=[],le=-1;function ue(e){return{current:e}}function de(e){0>le||(e.current=ce[le],ce[le]=null,le--)}function j(e,t){le++,ce[le]=e.current,e.current=t}var fe=ue(null),pe=ue(null),me=ue(null),he=ue(null);function ge(e,t){switch(j(me,t),j(pe,e),j(fe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}de(fe),j(fe,e)}function _e(){de(fe),de(pe),de(me)}function ve(e){e.memoizedState!==null&&j(he,e);var t=fe.current,n=Hd(t,e.type);t!==n&&(j(pe,e),j(fe,n))}function ye(e){pe.current===e&&(de(fe),de(pe)),he.current===e&&(de(he),Qf._currentValue=se)}var be,xe;function Se(e){if(be===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);be=t&&t[1]||``,xe=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+be+e+xe}var Ce=!1;function we(e,t){if(!e||Ce)return``;Ce=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ce=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Se(n):``}function Te(e,t){switch(e.tag){case 26:case 27:case 5:return Se(e.type);case 16:return Se(`Lazy`);case 13:return e.child!==t&&t!==null?Se(`Suspense Fallback`):Se(`Suspense`);case 19:return Se(`SuspenseList`);case 0:case 15:return we(e.type,!1);case 11:return we(e.type.render,!1);case 1:return we(e.type,!0);case 31:return Se(`Activity`);default:return``}}function Ee(e){try{var t=``,n=null;do t+=Te(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var De=Object.prototype.hasOwnProperty,Oe=t.unstable_scheduleCallback,ke=t.unstable_cancelCallback,Ae=t.unstable_shouldYield,je=t.unstable_requestPaint,Me=t.unstable_now,Ne=t.unstable_getCurrentPriorityLevel,Pe=t.unstable_ImmediatePriority,Fe=t.unstable_UserBlockingPriority,M=t.unstable_NormalPriority,Ie=t.unstable_LowPriority,Le=t.unstable_IdlePriority,Re=t.log,ze=t.unstable_setDisableYieldValue,Be=null,Ve=null;function He(e){if(typeof Re==`function`&&ze(e),Ve&&typeof Ve.setStrictMode==`function`)try{Ve.setStrictMode(Be,e)}catch{}}var Ue=Math.clz32?Math.clz32:Ke,We=Math.log,Ge=Math.LN2;function Ke(e){return e>>>=0,e===0?32:31-(We(e)/Ge|0)|0}var qe=256,Je=262144,Ye=4194304;function Xe(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ze(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Xe(n))):i=Xe(o):i=Xe(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Xe(n))):i=Xe(o)):i=Xe(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Qe(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function $e(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function et(){var e=Ye;return Ye<<=1,!(Ye&62914560)&&(Ye=4194304),e}function tt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function nt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function rt(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ue(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&it(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function it(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ue(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function at(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ue(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ot(e,t){var n=t&-t;return n=n&42?1:st(n),(n&(e.suspendedLanes|t))===0?n:0}function st(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ct(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function lt(){var e=A.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function N(e,t){var n=A.p;try{return A.p=e,t()}finally{A.p=n}}var ut=Math.random().toString(36).slice(2),P=`__reactFiber$`+ut,dt=`__reactProps$`+ut,ft=`__reactContainer$`+ut,pt=`__reactEvents$`+ut,mt=`__reactListeners$`+ut,ht=`__reactHandles$`+ut,gt=`__reactResources$`+ut,_t=`__reactMarker$`+ut;function vt(e){delete e[P],delete e[dt],delete e[pt],delete e[mt],delete e[ht]}function yt(e){var t=e[P];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ft]||n[P]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[P])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function bt(e){if(e=e[P]||e[ft]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function xt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function St(e){var t=e[gt];return t||=e[gt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Ct(e){e[_t]=!0}var wt=new Set,Tt={};function Et(e,t){Dt(e,t),Dt(e+`Capture`,t)}function Dt(e,t){for(Tt[e]=t,e=0;e<t.length;e++)wt.add(t[e])}var Ot=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),kt={},At={};function jt(e){return De.call(At,e)?!0:De.call(kt,e)?!1:Ot.test(e)?At[e]=!0:(kt[e]=!0,!1)}function Mt(e,t,n){if(jt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}}function Nt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Pt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Ft(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function It(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Lt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Rt(e){if(!e._valueTracker){var t=It(e)?`checked`:`value`;e._valueTracker=Lt(e,t,``+e[t])}}function zt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=It(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function Bt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Vt=/[\n"\\]/g;function Ht(e){return e.replace(Vt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Ut(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Ft(t)):e.value!==``+Ft(t)&&(e.value=``+Ft(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Gt(e,o,Ft(n)):Gt(e,o,Ft(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Ft(s):e.removeAttribute(`name`)}function Wt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Rt(e);return}n=n==null?``:``+Ft(n),t=t==null?n:``+Ft(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Rt(e)}function Gt(e,t,n){t===`number`&&Bt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Kt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Ft(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function qt(e,t,n){if(t!=null&&(t=``+Ft(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Ft(n)}function Jt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(oe(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Ft(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Rt(e)}function Yt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Xt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Zt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Xt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Qt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Zt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Zt(e,o,t[o])}function $t(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var en=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),tn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function nn(e){return tn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function rn(){}var an=null;function on(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var sn=null,cn=null;function ln(e){var t=bt(e);if(t&&(e=t.stateNode)){var n=e[dt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Ut(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Ht(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[dt]||null;if(!a)throw Error(i(90));Ut(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&zt(r)}break a;case`textarea`:qt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Kt(e,!!n.multiple,t,!1)}}}var un=!1;function dn(e,t,n){if(un)return e(t,n);un=!0;try{return e(t)}finally{if(un=!1,(sn!==null||cn!==null)&&(bu(),sn&&(t=sn,e=cn,cn=sn=null,ln(t),e)))for(t=0;t<e.length;t++)ln(e[t])}}function fn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[dt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var pn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),mn=!1;if(pn)try{var hn={};Object.defineProperty(hn,"passive",{get:function(){mn=!0}}),window.addEventListener(`test`,hn,hn),window.removeEventListener(`test`,hn,hn)}catch{mn=!1}var gn=null,_n=null,vn=null;function yn(){if(vn)return vn;var e,t=_n,n=t.length,r,i=`value`in gn?gn.value:gn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return vn=i.slice(e,1<r?1-r:void 0)}function bn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xn(){return!0}function Sn(){return!1}function Cn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?xn:Sn,this.isPropagationStopped=Sn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=xn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=xn)},persist:function(){},isPersistent:xn}),t}var wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tn=Cn(wn),En=h({},wn,{view:0,detail:0}),Dn=Cn(En),On,kn,An,jn=h({},En,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==An&&(An&&e.type===`mousemove`?(On=e.screenX-An.screenX,kn=e.screenY-An.screenY):kn=On=0,An=e),On)},movementY:function(e){return`movementY`in e?e.movementY:kn}}),Mn=Cn(jn),Nn=Cn(h({},jn,{dataTransfer:0})),Pn=Cn(h({},En,{relatedTarget:0})),Fn=Cn(h({},wn,{animationName:0,elapsedTime:0,pseudoElement:0})),In=Cn(h({},wn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Ln=Cn(h({},wn,{data:0})),Rn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},zn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Bn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function F(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Bn[e])?!!t[e]:!1}function Vn(){return F}var Hn=Cn(h({},En,{key:function(e){if(e.key){var t=Rn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=bn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?zn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vn,charCode:function(e){return e.type===`keypress`?bn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?bn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Un=Cn(h({},jn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Wn=Cn(h({},En,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vn})),Gn=Cn(h({},wn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Kn=Cn(h({},jn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),qn=Cn(h({},wn,{newState:0,oldState:0})),Jn=[9,13,27,32],Yn=pn&&`CompositionEvent`in window,Xn=null;pn&&`documentMode`in document&&(Xn=document.documentMode);var Zn=pn&&`TextEvent`in window&&!Xn,Qn=pn&&(!Yn||Xn&&8<Xn&&11>=Xn),$n=` `,er=!1;function tr(e,t){switch(e){case`keyup`:return Jn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function nr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var rr=!1;function ir(e,t){switch(e){case`compositionend`:return nr(t);case`keypress`:return t.which===32?(er=!0,$n):null;case`textInput`:return e=t.data,e===$n&&er?null:e;default:return null}}function ar(e,t){if(rr)return e===`compositionend`||!Yn&&tr(e,t)?(e=yn(),vn=_n=gn=null,rr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Qn&&t.locale!==`ko`?null:t.data;default:return null}}var or={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!or[e.type]:t===`textarea`}function cr(e,t,n,r){sn?cn?cn.push(r):cn=[r]:sn=r,t=Ed(t,`onChange`),0<t.length&&(n=new Tn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var lr=null,ur=null;function dr(e){yd(e,0)}function fr(e){if(zt(xt(e)))return e}function pr(e,t){if(e===`change`)return t}var mr=!1;if(pn){var hr;if(pn){var gr=`oninput`in document;if(!gr){var _r=document.createElement(`div`);_r.setAttribute(`oninput`,`return;`),gr=typeof _r.oninput==`function`}hr=gr}else hr=!1;mr=hr&&(!document.documentMode||9<document.documentMode)}function vr(){lr&&(lr.detachEvent(`onpropertychange`,yr),ur=lr=null)}function yr(e){if(e.propertyName===`value`&&fr(ur)){var t=[];cr(t,ur,e,on(e)),dn(dr,t)}}function br(e,t,n){e===`focusin`?(vr(),lr=t,ur=n,lr.attachEvent(`onpropertychange`,yr)):e===`focusout`&&vr()}function xr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return fr(ur)}function Sr(e,t){if(e===`click`)return fr(t)}function Cr(e,t){if(e===`input`||e===`change`)return fr(t)}function wr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Tr=typeof Object.is==`function`?Object.is:wr;function Er(e,t){if(Tr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!De.call(t,i)||!Tr(e[i],t[i]))return!1}return!0}function Dr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Or(e,t){var n=Dr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Dr(n)}}function kr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?kr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ar(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Bt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Bt(e.document)}return t}function jr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Mr=pn&&`documentMode`in document&&11>=document.documentMode,Nr=null,Pr=null,Fr=null,Ir=!1;function Lr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ir||Nr==null||Nr!==Bt(r)||(r=Nr,`selectionStart`in r&&jr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fr&&Er(Fr,r)||(Fr=r,r=Ed(Pr,`onSelect`),0<r.length&&(t=new Tn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Nr)))}function Rr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var zr={animationend:Rr(`Animation`,`AnimationEnd`),animationiteration:Rr(`Animation`,`AnimationIteration`),animationstart:Rr(`Animation`,`AnimationStart`),transitionrun:Rr(`Transition`,`TransitionRun`),transitionstart:Rr(`Transition`,`TransitionStart`),transitioncancel:Rr(`Transition`,`TransitionCancel`),transitionend:Rr(`Transition`,`TransitionEnd`)},Br={},Vr={};pn&&(Vr=document.createElement(`div`).style,`AnimationEvent`in window||(delete zr.animationend.animation,delete zr.animationiteration.animation,delete zr.animationstart.animation),`TransitionEvent`in window||delete zr.transitionend.transition);function Hr(e){if(Br[e])return Br[e];if(!zr[e])return e;var t=zr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Vr)return Br[e]=t[n];return e}var Ur=Hr(`animationend`),Wr=Hr(`animationiteration`),Gr=Hr(`animationstart`),Kr=Hr(`transitionrun`),qr=Hr(`transitionstart`),Jr=Hr(`transitioncancel`),Yr=Hr(`transitionend`),Xr=new Map,Zr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Zr.push(`scrollEnd`);function Qr(e,t){Xr.set(e,t),Et(t,[e])}var $r=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ei=[],ti=0,ni=0;function ri(){for(var e=ti,t=ni=ti=0;t<e;){var n=ei[t];ei[t++]=null;var r=ei[t];ei[t++]=null;var i=ei[t];ei[t++]=null;var a=ei[t];if(ei[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&si(n,i,a)}}function ii(e,t,n,r){ei[ti++]=e,ei[ti++]=t,ei[ti++]=n,ei[ti++]=r,ni|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ai(e,t,n,r){return ii(e,t,n,r),ci(e)}function oi(e,t){return ii(e,null,null,t),ci(e)}function si(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ue(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ci(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var li={};function ui(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(e,t,n,r){return new ui(e,t,n,r)}function fi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pi(e,t){var n=e.alternate;return n===null?(n=di(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function mi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function hi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)fi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,fe.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case re:return e=di(31,n,t,a),e.elementType=re,e.lanes=o,e;case y:return gi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=di(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case te:return e=di(13,n,t,a),e.elementType=te,e.lanes=o,e;case ne:return e=di(19,n,t,a),e.elementType=ne,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:s=10;break a;case ee:s=9;break a;case C:s=11;break a;case w:s=14;break a;case T:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=di(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function gi(e,t,n,r){return e=di(7,e,r,t),e.lanes=n,e}function _i(e,t,n){return e=di(6,e,null,t),e.lanes=n,e}function vi(e){var t=di(18,null,null,0);return t.stateNode=e,t}function yi(e,t,n){return t=di(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var bi=new WeakMap;function xi(e,t){if(typeof e==`object`&&e){var n=bi.get(e);return n===void 0?(t={value:e,source:t,stack:Ee(t)},bi.set(e,t),t):n}return{value:e,source:t,stack:Ee(t)}}var Si=[],Ci=0,wi=null,Ti=0,Ei=[],Di=0,Oi=null,ki=1,Ai=``;function ji(e,t){Si[Ci++]=Ti,Si[Ci++]=wi,wi=e,Ti=t}function Mi(e,t,n){Ei[Di++]=ki,Ei[Di++]=Ai,Ei[Di++]=Oi,Oi=e;var r=ki;e=Ai;var i=32-Ue(r)-1;r&=~(1<<i),n+=1;var a=32-Ue(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ki=1<<32-Ue(t)+i|n<<i|r,Ai=a+e}else ki=1<<a|n<<i|r,Ai=e}function Ni(e){e.return!==null&&(ji(e,1),Mi(e,1,0))}function Pi(e){for(;e===wi;)wi=Si[--Ci],Si[Ci]=null,Ti=Si[--Ci],Si[Ci]=null;for(;e===Oi;)Oi=Ei[--Di],Ei[Di]=null,Ai=Ei[--Di],Ei[Di]=null,ki=Ei[--Di],Ei[Di]=null}function Fi(e,t){Ei[Di++]=ki,Ei[Di++]=Ai,Ei[Di++]=Oi,ki=t.id,Ai=t.overflow,Oi=e}var Ii=null,I=null,L=!1,Li=null,Ri=!1,zi=Error(i(519));function Bi(e){throw Ki(xi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),zi}function Vi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[P]=e,t[dt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Wt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Jt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=rn),t=!0):t=!1,t||Bi(e,!0)}function Hi(e){for(Ii=e.return;Ii;)switch(Ii.tag){case 5:case 31:case 13:Ri=!1;return;case 27:case 3:Ri=!0;return;default:Ii=Ii.return}}function Ui(e){if(e!==Ii)return!1;if(!L)return Hi(e),L=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Ud(e.type,e.memoizedProps)),n=!n),n&&I&&Bi(e),Hi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));I=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));I=uf(e)}else t===27?(t=I,Zd(e.type)?(e=lf,lf=null,I=e):I=t):I=Ii?cf(e.stateNode.nextSibling):null;return!0}function Wi(){I=Ii=null,L=!1}function Gi(){var e=Li;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Li=null),e}function Ki(e){Li===null?Li=[e]:Li.push(e)}var qi=ue(null),Ji=null,Yi=null;function Xi(e,t,n){j(qi,t._currentValue),t._currentValue=n}function Zi(e){e._currentValue=qi.current,de(qi)}function Qi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function $i(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Qi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Qi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ea(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Tr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===he.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&$i(t,e,n,r),t.flags|=262144}function ta(e){for(e=e.firstContext;e!==null;){if(!Tr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function na(e){Ji=e,Yi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ra(e){return aa(Ji,e)}function ia(e,t){return Ji===null&&na(e),aa(e,t)}function aa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Yi===null){if(e===null)throw Error(i(308));Yi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Yi=Yi.next=t;return n}var oa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},sa=t.unstable_scheduleCallback,ca=t.unstable_NormalPriority,la={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ua(){return{controller:new oa,data:new Map,refCount:0}}function da(e){e.refCount--,e.refCount===0&&sa(ca,function(){e.controller.abort()})}var fa=null,pa=0,ma=0,ha=null;function ga(e,t){if(fa===null){var n=fa=[];pa=0,ma=dd(),ha={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return pa++,t.then(_a,_a),t}function _a(){if(--pa===0&&fa!==null){ha!==null&&(ha.status=`fulfilled`);var e=fa;fa=null,ma=0,ha=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function va(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ya=k.S;k.S=function(e,t){eu=Me(),typeof t==`object`&&t&&typeof t.then==`function`&&ga(e,t),ya!==null&&ya(e,t)};var ba=ue(null);function xa(){var e=ba.current;return e===null?K.pooledCache:e}function Sa(e,t){t===null?j(ba,ba.current):j(ba,t.pool)}function Ca(){var e=xa();return e===null?null:{parent:la._currentValue,pool:e}}var wa=Error(i(460)),Ta=Error(i(474)),Ea=Error(i(542)),Da={then:function(){}};function Oa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function ka(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(rn,rn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Na(e),e;default:if(typeof t.status==`string`)t.then(rn,rn);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Na(e),e}throw ja=t,wa}}function Aa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(ja=e,wa):e}}var ja=null;function Ma(){if(ja===null)throw Error(i(459));var e=ja;return ja=null,e}function Na(e){if(e===wa||e===Ea)throw Error(i(483))}var Pa=null,Fa=0;function Ia(e){var t=Fa;return Fa+=1,Pa===null&&(Pa=[]),ka(Pa,e,t)}function La(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ra(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function za(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=pi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=_i(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===T&&Aa(i)===t.type)?(t=a(t,n.props),La(t,n),t.return=e,t):(t=hi(n.type,n.key,n.props,null,e.mode,r),La(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=yi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=gi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=_i(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=hi(t.type,t.key,t.props,null,e.mode,n),La(n,t),n.return=e,n;case v:return t=yi(t,e.mode,n),t.return=e,t;case T:return t=Aa(t),f(e,t,n)}if(oe(t)||D(t))return t=gi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ia(t),n);if(t.$$typeof===S)return f(e,ia(e,t),n);Ra(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case T:return n=Aa(n),p(e,t,n,r)}if(oe(n)||D(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ia(n),r);if(n.$$typeof===S)return p(e,t,ia(e,n),r);Ra(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case T:return r=Aa(r),m(e,t,n,r,i)}if(oe(r)||D(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ia(r),i);if(r.$$typeof===S)return m(e,t,n,ia(t,r),i);Ra(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),L&&ji(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return L&&ji(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),L&&ji(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),L&&ji(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return L&&ji(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),L&&ji(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===T&&Aa(l)===r.type){n(e,r.sibling),c=a(r,o.props),La(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===y?(c=gi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=hi(o.type,o.key,o.props,null,e.mode,c),La(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=yi(o,e.mode,c),c.return=e,e=c}return s(e);case T:return o=Aa(o),b(e,r,o,c)}if(oe(o))return h(e,r,o,c);if(D(o)){if(l=D(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ia(o),c);if(o.$$typeof===S)return b(e,r,ia(e,o),c);Ra(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=_i(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Fa=0;var i=b(e,t,n,r);return Pa=null,i}catch(t){if(t===wa||t===Ea)throw t;var a=di(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ba=za(!0),Va=za(!1),Ha=!1;function Ua(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ka(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ci(e),si(e,null,n),t}return ii(e,r,t,n),ci(e)}function qa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,at(e,n)}}function Ja(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ya=!1;function Xa(){if(Ya){var e=ha;if(e!==null)throw e}}function Za(e,t,n,r){Ya=!1;var i=e.updateQueue;Ha=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(J&f)===f:(r&f)===f){f!==0&&f===ma&&(Ya=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ha=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function Qa(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function $a(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Qa(n[e],t)}var eo=ue(null),to=ue(0);function no(e,t){e=Wl,j(to,e),j(eo,t),Wl=e|t.baseLanes}function ro(){j(to,Wl),j(eo,eo.current)}function io(){Wl=to.current,de(eo),de(to)}var ao=ue(null),oo=null;function so(e){var t=e.alternate;j(R,R.current&1),j(ao,e),oo===null&&(t===null||eo.current!==null||t.memoizedState!==null)&&(oo=e)}function co(e){j(R,R.current),j(ao,e),oo===null&&(oo=e)}function lo(e){e.tag===22?(j(R,R.current),j(ao,e),oo===null&&(oo=e)):uo(e)}function uo(){j(R,R.current),j(ao,ao.current)}function fo(e){de(ao),oo===e&&(oo=null),de(R)}var R=ue(0);function po(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var mo=0,z=null,B=null,ho=null,go=!1,_o=!1,vo=!1,yo=0,bo=0,xo=null,So=0;function V(){throw Error(i(321))}function Co(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Tr(e[n],t[n]))return!1;return!0}function wo(e,t,n,r,i,a){return mo=a,z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,k.H=e===null||e.memoizedState===null?Bs:Vs,vo=!1,a=n(r,i),vo=!1,_o&&(a=Eo(t,n,r,i)),To(e),a}function To(e){k.H=zs;var t=B!==null&&B.next!==null;if(mo=0,ho=B=z=null,go=!1,bo=0,xo=null,t)throw Error(i(300));e===null||ic||(e=e.dependencies,e!==null&&ta(e)&&(ic=!0))}function Eo(e,t,n,r){z=e;var a=0;do{if(_o&&(xo=null),bo=0,_o=!1,25<=a)throw Error(i(301));if(a+=1,ho=B=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}k.H=Hs,o=t(n,r)}while(_o);return o}function Do(){var e=k.H,t=e.useState()[0];return t=typeof t.then==`function`?No(t):t,e=e.useState()[0],(B===null?null:B.memoizedState)!==e&&(z.flags|=1024),t}function Oo(){var e=yo!==0;return yo=0,e}function ko(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ao(e){if(go){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}go=!1}mo=0,ho=B=z=null,_o=!1,bo=yo=0,xo=null}function jo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ho===null?z.memoizedState=ho=e:ho=ho.next=e,ho}function H(){if(B===null){var e=z.alternate;e=e===null?null:e.memoizedState}else e=B.next;var t=ho===null?z.memoizedState:ho.next;if(t!==null)ho=t,B=e;else{if(e===null)throw z.alternate===null?Error(i(467)):Error(i(310));B=e,e={memoizedState:B.memoizedState,baseState:B.baseState,baseQueue:B.baseQueue,queue:B.queue,next:null},ho===null?z.memoizedState=ho=e:ho=ho.next=e}return ho}function Mo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function No(e){var t=bo;return bo+=1,xo===null&&(xo=[]),e=ka(xo,e,t),t=z,(ho===null?t.memoizedState:ho.next)===null&&(t=t.alternate,k.H=t===null||t.memoizedState===null?Bs:Vs),e}function Po(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return No(e);if(e.$$typeof===S)return ra(e)}throw Error(i(438,String(e)))}function Fo(e){var t=null,n=z.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=z.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Mo(),z.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=E;return t.index++,n}function Io(e,t){return typeof t==`function`?t(e):t}function Lo(e){return Ro(H(),B,e)}function Ro(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(mo&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ma&&(d=!0);else if((mo&p)===p){u=u.next,p===ma&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,z.lanes|=p,Gl|=p;f=u.action,vo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,z.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Tr(o,e.memoizedState)&&(ic=!0,d&&(n=ha,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function zo(e){var t=H(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Tr(o,t.memoizedState)||(ic=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Bo(e,t,n){var r=z,a=H(),o=L;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Tr((B||a).memoizedState,n);if(s&&(a.memoizedState=n,ic=!0),a=a.queue,ds(Uo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||ho!==null&&ho.memoizedState.tag&1){if(r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,a,n,t),null),K===null)throw Error(i(349));o||mo&127||Vo(r,t,n)}return n}function Vo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=z.updateQueue,t===null?(t=Mo(),z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ho(e,t,n,r){t.value=n,t.getSnapshot=r,Wo(t)&&Go(e)}function Uo(e,t,n){return n(function(){Wo(t)&&Go(e)})}function Wo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Tr(e,n)}catch{return!0}}function Go(e){var t=oi(e,2);t!==null&&hu(t,e,2)}function Ko(e){var t=jo();if(typeof e==`function`){var n=e;if(e=n(),vo){He(!0);try{n()}finally{He(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:e},t}function qo(e,t,n,r){return e.baseState=n,Ro(e,B,typeof r==`function`?r:Io)}function Jo(e,t,n,r,a){if(Is(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};k.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Yo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Yo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=k.T,o={};k.T=o;try{var s=n(i,r),c=k.S;c!==null&&c(o,s),Xo(e,t,s)}catch(n){Qo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),k.T=a}}else try{a=n(i,r),Xo(e,t,a)}catch(n){Qo(e,t,n)}}function Xo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Zo(e,t,n)},function(n){return Qo(e,t,n)}):Zo(e,t,n)}function Zo(e,t,n){t.status=`fulfilled`,t.value=n,$o(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Yo(e,n)))}function Qo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,$o(t),t=t.next;while(t!==r)}e.action=null}function $o(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function es(e,t){return t}function ts(e,t){if(L){var n=K.formState;if(n!==null){a:{var r=z;if(L){if(I){b:{for(var i=I,a=Ri;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){I=cf(i.nextSibling),r=i.data===`F!`;break a}}Bi(r)}r=!1}r&&(t=n[0])}}return n=jo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:t},n.queue=r,n=Ns.bind(null,z,r),r.dispatch=n,r=Ko(!1),a=Fs.bind(null,z,!1,r.queue),r=jo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Jo.bind(null,z,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ns(e){return rs(H(),B,e)}function rs(e,t,n){if(t=Ro(e,t,es)[0],e=Lo(Io)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=No(t)}catch(e){throw e===wa?Ea:e}else r=t;t=H();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(z.flags|=2048,os(9,{destroy:void 0},is.bind(null,i,n),null)),[r,a,e]}function is(e,t){e.action=t}function as(e){var t=H(),n=B;if(n!==null)return rs(t,n,e);H(),t=t.memoizedState,n=H();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function os(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=z.updateQueue,t===null&&(t=Mo(),z.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ss(){return H().memoizedState}function cs(e,t,n,r){var i=jo();z.flags|=e,i.memoizedState=os(1|t,{destroy:void 0},n,r===void 0?null:r)}function ls(e,t,n,r){var i=H();r=r===void 0?null:r;var a=i.memoizedState.inst;B!==null&&r!==null&&Co(r,B.memoizedState.deps)?i.memoizedState=os(t,a,n,r):(z.flags|=e,i.memoizedState=os(1|t,a,n,r))}function us(e,t){cs(8390656,8,e,t)}function ds(e,t){ls(2048,8,e,t)}function fs(e){z.flags|=4;var t=z.updateQueue;if(t===null)t=Mo(),z.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ps(e){var t=H().memoizedState;return fs({ref:t,nextImpl:e}),function(){if(G&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ms(e,t){return ls(4,2,e,t)}function hs(e,t){return ls(4,4,e,t)}function gs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _s(e,t,n){n=n==null?null:n.concat([e]),ls(4,4,gs.bind(null,t,e),n)}function vs(){}function ys(e,t){var n=H();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Co(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bs(e,t){var n=H();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Co(t,r[1]))return r[0];if(r=e(),vo){He(!0);try{e()}finally{He(!1)}}return n.memoizedState=[r,t],r}function xs(e,t,n){return n===void 0||mo&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),z.lanes|=e,Gl|=e,n)}function Ss(e,t,n,r){return Tr(n,t)?n:eo.current===null?!(mo&42)||mo&1073741824&&!(J&261930)?(ic=!0,e.memoizedState=n):(e=mu(),z.lanes|=e,Gl|=e,t):(e=xs(e,n,r),Tr(e,t)||(ic=!0),e)}function Cs(e,t,n,r,i){var a=A.p;A.p=a!==0&&8>a?a:8;var o=k.T,s={};k.T=s,Fs(e,!1,t,n);try{var c=i(),l=k.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ps(e,t,va(c,r),pu(e)):Ps(e,t,r,pu(e))}catch(n){Ps(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{A.p=a,o!==null&&s.types!==null&&(o.types=s.types),k.T=o}}function ws(){}function Ts(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Es(e).queue;Cs(e,a,t,se,n===null?ws:function(){return Ds(e),n(r)})}function Es(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:se,baseState:se,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:se},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ds(e){var t=Es(e);t.next===null&&(t=e.alternate.memoizedState),Ps(e,t.next.queue,{},pu())}function Os(){return ra(Qf)}function ks(){return H().memoizedState}function As(){return H().memoizedState}function js(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ga(n);var r=Ka(t,e,n);r!==null&&(hu(r,t,n),qa(r,t,n)),t={cache:ua()},e.payload=t;return}t=t.return}}function Ms(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Is(e)?Ls(t,n):(n=ai(e,t,n,r),n!==null&&(hu(n,e,r),Rs(n,t,r)))}function Ns(e,t,n){Ps(e,t,n,pu())}function Ps(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Is(e))Ls(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Tr(s,o))return ii(e,t,i,0),K===null&&ri(),!1}catch{}if(n=ai(e,t,i,r),n!==null)return hu(n,e,r),Rs(n,t,r),!0}return!1}function Fs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Is(e)){if(t)throw Error(i(479))}else t=ai(e,n,r,2),t!==null&&hu(t,e,2)}function Is(e){var t=e.alternate;return e===z||t!==null&&t===z}function Ls(e,t){_o=go=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,at(e,n)}}var zs={readContext:ra,use:Po,useCallback:V,useContext:V,useEffect:V,useImperativeHandle:V,useLayoutEffect:V,useInsertionEffect:V,useMemo:V,useReducer:V,useRef:V,useState:V,useDebugValue:V,useDeferredValue:V,useTransition:V,useSyncExternalStore:V,useId:V,useHostTransitionStatus:V,useFormState:V,useActionState:V,useOptimistic:V,useMemoCache:V,useCacheRefresh:V};zs.useEffectEvent=V;var Bs={readContext:ra,use:Po,useCallback:function(e,t){return jo().memoizedState=[e,t===void 0?null:t],e},useContext:ra,useEffect:us,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),cs(4194308,4,gs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return cs(4194308,4,e,t)},useInsertionEffect:function(e,t){cs(4,2,e,t)},useMemo:function(e,t){var n=jo();t=t===void 0?null:t;var r=e();if(vo){He(!0);try{e()}finally{He(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=jo();if(n!==void 0){var i=n(t);if(vo){He(!0);try{n(t)}finally{He(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ms.bind(null,z,e),[r.memoizedState,e]},useRef:function(e){var t=jo();return e={current:e},t.memoizedState=e},useState:function(e){e=Ko(e);var t=e.queue,n=Ns.bind(null,z,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:vs,useDeferredValue:function(e,t){return xs(jo(),e,t)},useTransition:function(){var e=Ko(!1);return e=Cs.bind(null,z,e.queue,!0,!1),jo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=z,a=jo();if(L){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),K===null)throw Error(i(349));J&127||Vo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,us(Uo.bind(null,r,o,e),[e]),r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,o,n,t),null),n},useId:function(){var e=jo(),t=K.identifierPrefix;if(L){var n=Ai,r=ki;n=(r&~(1<<32-Ue(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=yo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=So++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Os,useFormState:ts,useActionState:ts,useOptimistic:function(e){var t=jo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Fs.bind(null,z,!0,n),n.dispatch=t,[e,t]},useMemoCache:Fo,useCacheRefresh:function(){return jo().memoizedState=js.bind(null,z)},useEffectEvent:function(e){var t=jo(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Vs={readContext:ra,use:Po,useCallback:ys,useContext:ra,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:Lo,useRef:ss,useState:function(){return Lo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){return Ss(H(),B.memoizedState,e,t)},useTransition:function(){var e=Lo(Io)[0],t=H().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:ns,useActionState:ns,useOptimistic:function(e,t){return qo(H(),B,e,t)},useMemoCache:Fo,useCacheRefresh:As};Vs.useEffectEvent=ps;var Hs={readContext:ra,use:Po,useCallback:ys,useContext:ra,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:zo,useRef:ss,useState:function(){return zo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){var n=H();return B===null?xs(n,e,t):Ss(n,B.memoizedState,e,t)},useTransition:function(){var e=zo(Io)[0],t=H().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:as,useActionState:as,useOptimistic:function(e,t){var n=H();return B===null?(n.baseState=e,[e,n.queue.dispatch]):qo(n,B,e,t)},useMemoCache:Fo,useCacheRefresh:As};Hs.useEffectEvent=ps;function Us(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ws={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ga(r);i.payload=t,n!=null&&(i.callback=n),t=Ka(e,i,r),t!==null&&(hu(t,e,r),qa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ga(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ka(e,i,r),t!==null&&(hu(t,e,r),qa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ga(n);r.tag=2,t!=null&&(r.callback=t),t=Ka(e,r,n),t!==null&&(hu(t,e,n),qa(t,e,n))}};function Gs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Er(n,r)||!Er(i,a):!0}function Ks(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ws.enqueueReplaceState(t,t.state,null)}function qs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Js(e){$r(e)}function Ys(e){console.error(e)}function Xs(e){$r(e)}function Zs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Qs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function $s(e,t,n){return n=Ga(n),n.tag=3,n.payload={element:null},n.callback=function(){Zs(e,t)},n}function ec(e){return e=Ga(e),e.tag=3,e}function tc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Qs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Qs(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function nc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ea(t,n,a,!0),n=ao.current,n!==null){switch(n.tag){case 31:case 13:return oo===null?Du():n.alternate===null&&X===0&&(X=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Da?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Da?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(L)return t=ao.current,t===null?(r!==zi&&(t=Error(i(423),{cause:r}),Ki(xi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=xi(r,n),a=$s(e.stateNode,r,a),Ja(e,a),X!==4&&(X=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==zi&&(e=Error(i(422),{cause:r}),Ki(xi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=xi(o,n),Xl===null?Xl=[o]:Xl.push(o),X!==4&&(X=2),t===null)return!0;r=xi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=$s(n.stateNode,r,e),Ja(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=ec(a),tc(a,e,n,r),Ja(n,a),!1}n=n.return}while(n!==null);return!1}var rc=Error(i(461)),ic=!1;function ac(e,t,n,r){t.child=e===null?Va(t,null,n,r):Ba(t,e.child,n,r)}function oc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return na(t),r=wo(e,t,n,o,a,i),s=Oo(),e!==null&&!ic?(ko(e,t,i),Ac(e,t,i)):(L&&s&&Ni(t),t.flags|=1,ac(e,t,r,i),t.child)}function sc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!fi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,cc(e,t,a,r,i)):(e=hi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!jc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Er:n,n(o,r)&&e.ref===t.ref)return Ac(e,t,i)}return t.flags|=1,e=pi(a,r),e.ref=t.ref,e.return=t,t.child=e}function cc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Er(a,r)&&e.ref===t.ref){if(ic=!1,t.pendingProps=r=a,jc(e,i))e.flags&131072&&(ic=!0);else return t.lanes=e.lanes,Ac(e,t,i)}}return gc(e,t,n,r,i)}function lc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return dc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Sa(t,a===null?null:a.cachePool),a===null?ro():no(t,a),lo(t);else return r=t.lanes=536870912,dc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Sa(t,null),ro(),uo(t)):(Sa(t,a.cachePool),no(t,a),uo(t),t.memoizedState=null);return ac(e,t,i,n),t.child}function uc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function dc(e,t,n,r,i){var a=xa();return a=a===null?null:{parent:la._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Sa(t,null),ro(),lo(t),e!==null&&ea(e,t,r,!0),t.childLanes=i,null}function fc(e,t){return t=Tc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function pc(e,t,n){return Ba(t,e.child,null,n),e=fc(t,t.pendingProps),e.flags|=2,fo(t),t.memoizedState=null,e}function mc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(L){if(r.mode===`hidden`)return e=fc(t,r),t.lanes=536870912,uc(null,e);if(co(t),(e=I)?(e=rf(e,Ri),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Oi===null?null:{id:ki,overflow:Ai},retryLane:536870912,hydrationErrors:null},n=vi(e),n.return=t,t.child=n,Ii=t,I=null)):e=null,e===null)throw Bi(t);return t.lanes=536870912,null}return fc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(co(t),a){if(t.flags&256)t.flags&=-257,t=pc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(ic||ea(e,t,n,!1),a=(n&e.childLanes)!==0,ic||a){if(r=K,r!==null&&(s=ot(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,oi(e,s),hu(r,e,s),rc;Du(),t=pc(e,t,n)}else e=o.treeContext,I=cf(s.nextSibling),Ii=t,L=!0,Li=null,Ri=!1,e!==null&&Fi(t,e),t=fc(t,r),t.flags|=4096;return t}return e=pi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function hc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function gc(e,t,n,r,i){return na(t),n=wo(e,t,n,r,void 0,i),r=Oo(),e!==null&&!ic?(ko(e,t,i),Ac(e,t,i)):(L&&r&&Ni(t),t.flags|=1,ac(e,t,n,i),t.child)}function _c(e,t,n,r,i,a){return na(t),t.updateQueue=null,n=Eo(t,r,n,i),To(e),r=Oo(),e!==null&&!ic?(ko(e,t,a),Ac(e,t,a)):(L&&r&&Ni(t),t.flags|=1,ac(e,t,n,a),t.child)}function vc(e,t,n,r,i){if(na(t),t.stateNode===null){var a=li,o=n.contextType;typeof o==`object`&&o&&(a=ra(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ws,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ua(t),o=n.contextType,a.context=typeof o==`object`&&o?ra(o):li,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Us(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ws.enqueueReplaceState(a,a.state,null),Za(t,r,a,i),Xa(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=qs(n,s);a.props=c;var l=a.context,u=n.contextType;o=li,typeof u==`object`&&u&&(o=ra(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ks(t,a,r,o),Ha=!1;var f=t.memoizedState;a.state=f,Za(t,r,a,i),Xa(),l=t.memoizedState,s||f!==l||Ha?(typeof d==`function`&&(Us(t,n,d,r),l=t.memoizedState),(c=Ha||Gs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Wa(e,t),o=t.memoizedProps,u=qs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=li,typeof l==`object`&&l&&(c=ra(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ks(t,a,r,c),Ha=!1,f=t.memoizedState,a.state=f,Za(t,r,a,i),Xa();var p=t.memoizedState;o!==d||f!==p||Ha||e!==null&&e.dependencies!==null&&ta(e.dependencies)?(typeof s==`function`&&(Us(t,n,s,r),p=t.memoizedState),(u=Ha||Gs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ta(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,hc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ba(t,e.child,null,i),t.child=Ba(t,null,n,i)):ac(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Ac(e,t,i),e}function yc(e,t,n,r){return Wi(),t.flags|=256,ac(e,t,n,r),t.child}var bc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xc(e){return{baseLanes:e,cachePool:Ca()}}function Sc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function Cc(e,t,n){var r=t.pendingProps,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(R.current&2)),s&&(a=!0,t.flags&=-129),s=!!(t.flags&32),t.flags&=-33,e===null){if(L){if(a?so(t):uo(t),(e=I)?(e=rf(e,Ri),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Oi===null?null:{id:ki,overflow:Ai},retryLane:536870912,hydrationErrors:null},n=vi(e),n.return=t,t.child=n,Ii=t,I=null)):e=null,e===null)throw Bi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(uo(t),a=t.mode,c=Tc({mode:`hidden`,children:c},a),r=gi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(null,r)):(so(t),wc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(so(t),t.flags&=-257,t=Ec(e,t,n)):t.memoizedState===null?(uo(t),c=r.fallback,a=t.mode,r=Tc({mode:`visible`,children:r.children},a),c=gi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ba(t,e.child,null,n),r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,t=uc(null,r)):(uo(t),t.child=e.child,t.flags|=128,t=null);else if(so(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Ki({value:r,source:null,stack:null}),t=Ec(e,t,n)}else if(ic||ea(e,t,n,!1),s=(n&e.childLanes)!==0,ic||s){if(s=K,s!==null&&(r=ot(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,oi(e,r),hu(s,e,r),rc;af(c)||Du(),t=Ec(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,I=cf(c.nextSibling),Ii=t,L=!0,Li=null,Ri=!1,e!==null&&Fi(t,e),t=wc(t,r.children),t.flags|=4096);return t}return a?(uo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=pi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=gi(c,a,n,null),c.flags|=2):c=pi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,uc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=xc(n):(a=c.cachePool,a===null?a=Ca():(l=la._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(e.child,r)):(so(t),n=e.child,e=n.sibling,n=pi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function wc(e,t){return t=Tc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Tc(e,t){return e=di(22,e,null,t),e.lanes=0,e}function Ec(e,t,n){return Ba(t,e.child,null,n),e=wc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Qi(e.return,t,n)}function Oc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function kc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=R.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,j(R,o),ac(e,t,r,n),r=L?Ti:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dc(e,n,t);else if(e.tag===19)Dc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&po(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Oc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&po(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Oc(t,!0,n,null,a,r);break;case`together`:Oc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Ac(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(ea(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=pi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=pi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jc(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&ta(e)))}function Mc(e,t,n){switch(t.tag){case 3:ge(t,t.stateNode.containerInfo),Xi(t,la,e.memoizedState.cache),Wi();break;case 27:case 5:ve(t);break;case 4:ge(t,t.stateNode.containerInfo);break;case 10:Xi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,co(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(so(t),e=Ac(e,t,n),e===null?null:e.sibling):Cc(e,t,n):(so(t),t.flags|=128,null);so(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=(ea(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return kc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),j(R,R.current),r)break;return null;case 22:return t.lanes=0,lc(e,t,n,t.pendingProps);case 24:Xi(t,la,e.memoizedState.cache)}return Ac(e,t,n)}function Nc(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)ic=!0;else{if(!jc(e,n)&&!(t.flags&128))return ic=!1,Mc(e,t,n);ic=!!(e.flags&131072)}}else ic=!1,L&&t.flags&1048576&&Mi(t,Ti,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Aa(t.elementType),t.type=e,typeof e==`function`)fi(e)?(r=qs(e,r),t.tag=1,t=vc(null,t,e,r,n)):(t.tag=0,t=gc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===C){t.tag=11,t=oc(null,t,e,r,n);break a}if(a===w){t.tag=14,t=sc(null,t,e,r,n);break a}}throw t=O(e)||e,Error(i(306,t,``))}}return t;case 0:return gc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=qs(r,t.pendingProps),vc(e,t,r,a,n);case 3:a:{if(ge(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Wa(e,t),Za(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Xi(t,la,r),r!==o.cache&&$i(t,[la],n,!0),Xa(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=yc(e,t,r,n);break a}if(r!==a){a=xi(Error(i(424)),t),Ki(a),t=yc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(I=cf(e.firstChild),Ii=t,L=!0,Li=null,Ri=!0,n=Va(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Wi(),r===a){t=Ac(e,t,n);break a}ac(e,t,r,n)}t=t.child}return t;case 26:return hc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:L||(n=t.type,e=t.pendingProps,r=Bd(me.current).createElement(n),r[P]=t,r[dt]=e,Pd(r,n,e),Ct(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ve(t),e===null&&L&&(r=t.stateNode=ff(t.type,t.pendingProps,me.current),Ii=t,Ri=!0,a=I,Zd(t.type)?(lf=a,I=cf(r.firstChild)):I=a),ac(e,t,t.pendingProps.children,n),hc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&L&&((a=r=I)&&(r=tf(r,t.type,t.pendingProps,Ri),r===null?a=!1:(t.stateNode=r,Ii=t,I=cf(r.firstChild),Ri=!1,a=!0)),a||Bi(t)),ve(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=wo(e,t,Do,null,null,n),Qf._currentValue=a),hc(e,t),ac(e,t,r,n),t.child;case 6:return e===null&&L&&((e=n=I)&&(n=nf(n,t.pendingProps,Ri),n===null?e=!1:(t.stateNode=n,Ii=t,I=null,e=!0)),e||Bi(t)),null;case 13:return Cc(e,t,n);case 4:return ge(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ba(t,null,r,n):ac(e,t,r,n),t.child;case 11:return oc(e,t,t.type,t.pendingProps,n);case 7:return ac(e,t,t.pendingProps,n),t.child;case 8:return ac(e,t,t.pendingProps.children,n),t.child;case 12:return ac(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Xi(t,t.type,r.value),ac(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,na(t),a=ra(a),r=r(a),t.flags|=1,ac(e,t,r,n),t.child;case 14:return sc(e,t,t.type,t.pendingProps,n);case 15:return cc(e,t,t.type,t.pendingProps,n);case 19:return kc(e,t,n);case 31:return mc(e,t,n);case 22:return lc(e,t,n,t.pendingProps);case 24:return na(t),r=ra(la),e===null?(a=xa(),a===null&&(a=K,o=ua(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ua(t),Xi(t,la,a)):((e.lanes&n)!==0&&(Wa(e,t),Za(t,null,null,n),Xa()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Xi(t,la,r),r!==a.cache&&$i(t,[la],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Xi(t,la,r))),ac(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Pc(e){e.flags|=4}function Fc(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw ja=Da,Ta}}else e.flags&=-16777217}function Ic(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t)){if(wu())e.flags|=8192;else throw ja=Da,Ta}}function Lc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:et(),e.lanes|=t,Yl|=t)}function Rc(e,t){if(!L)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function U(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function zc(e,t,n){var r=t.pendingProps;switch(Pi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return U(t),null;case 1:return U(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Zi(la),_e(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ui(t)?Pc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Gi())),U(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Pc(t),o===null?(U(t),Fc(t,a,null,r,n)):(U(t),Ic(t,o))):o?o===e.memoizedState?(U(t),t.flags&=-16777217):(Pc(t),U(t),Ic(t,o)):(e=e.memoizedProps,e!==r&&Pc(t),U(t),Fc(t,a,e,r,n)),null;case 27:if(ye(t),n=me.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}e=fe.current,Ui(t)?Vi(t,e):(e=ff(a,r,n),t.stateNode=e,Pc(t))}return U(t),null;case 5:if(ye(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}if(o=fe.current,Ui(t))Vi(t,o);else{var s=Bd(me.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[P]=t,o[dt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Pc(t)}}return U(t),Fc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=me.current,Ui(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Ii,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[P]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Bi(t,!0)}else e=Bd(e).createTextNode(r),e[P]=t,t.stateNode=e}return U(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ui(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[P]=t}else Wi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),e=!1}else n=Gi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(fo(t),t):(fo(t),null);if(t.flags&128)throw Error(i(558))}return U(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ui(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[P]=t}else Wi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),a=!1}else a=Gi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(fo(t),t):(fo(t),null)}return fo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Lc(t,t.updateQueue),U(t),null);case 4:return _e(),e===null&&Sd(t.stateNode.containerInfo),U(t),null;case 10:return Zi(t.type),U(t),null;case 19:if(de(R),r=t.memoizedState,r===null)return U(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)Rc(r,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=po(e),o!==null){for(t.flags|=128,Rc(r,!1),e=o.updateQueue,t.updateQueue=e,Lc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)mi(n,e),n=n.sibling;return j(R,R.current&1|2),L&&ji(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Me()>tu&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304)}}else{if(!a){if(e=po(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Lc(t,e),Rc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!L)return U(t),null}else 2*Me()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(U(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Me(),e.sibling=null,n=R.current,j(R,a?n&1|2:n&1),L&&ji(t,r.treeForkCount),e);case 22:case 23:return fo(t),io(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(U(t),t.subtreeFlags&6&&(t.flags|=8192)):U(t),n=t.updateQueue,n!==null&&Lc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&de(ba),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Zi(la),U(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Bc(e,t){switch(Pi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zi(la),_e(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ye(t),null;case 31:if(t.memoizedState!==null){if(fo(t),t.alternate===null)throw Error(i(340));Wi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(fo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Wi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return de(R),null;case 4:return _e(),null;case 10:return Zi(t.type),null;case 22:case 23:return fo(t),io(),e!==null&&de(ba),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Zi(la),null;case 25:return null;default:return null}}function Vc(e,t){switch(Pi(t),t.tag){case 3:Zi(la),_e();break;case 26:case 27:case 5:ye(t);break;case 4:_e();break;case 31:t.memoizedState!==null&&fo(t);break;case 13:fo(t);break;case 19:de(R);break;case 10:Zi(t.type);break;case 22:case 23:fo(t),io(),e!==null&&de(ba);break;case 24:Zi(la)}}function Hc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Uc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Wc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{$a(t,n)}catch(t){Z(e,e.return,t)}}}function Gc(e,t,n){n.props=qs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Kc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function qc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}}function Jc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Yc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[dt]=t}catch(t){Z(e,e.return,t)}}function Xc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Zc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Xc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=rn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[P]=e,t[dt]=n}catch(t){Z(e,e.return,t)}}var tl=!1,nl=!1,rl=!1,il=typeof WeakSet==`function`?WeakSet:Set,al=null;function ol(e,t){if(e=e.containerInfo,Rd=sp,e=Ar(e),jr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,al=t;al!==null;)if(t=al,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,al=e;else for(;al!==null;){switch(t=al,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=qs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,al=e;break}al=t.return}}function sl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Hc(5,n);break;case 1:if(xl(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=qs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}}r&64&&Wc(n),r&512&&Kc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{$a(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&el(n);case 26:case 5:xl(e,n),t===null&&r&4&&Jc(n),r&512&&Kc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||tl,!r){t=t!==null&&t.memoizedState!==null||nl,i=tl;var a=nl;tl=r,(nl=t)&&!a?Cl(e,n,!!(n.subtreeFlags&8772)):xl(e,n),tl=i,nl=a}break;case 30:break;default:xl(e,n)}}function cl(e){var t=e.alternate;t!==null&&(e.alternate=null,cl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&vt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var W=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(Ve&&typeof Ve.onCommitFiberUnmount==`function`)try{Ve.onCommitFiberUnmount(Be,n)}catch{}switch(n.tag){case 26:nl||qc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:nl||qc(n,t);var r=W,i=ll;Zd(n.type)&&(W=n.stateNode,ll=!1),ul(e,t,n),pf(n.stateNode),W=r,ll=i;break;case 5:nl||qc(n,t);case 6:if(r=W,i=ll,W=null,ul(e,t,n),W=r,ll=i,W!==null){if(ll)try{(W.nodeType===9?W.body:W.nodeName===`HTML`?W.ownerDocument.body:W).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{W.removeChild(n.stateNode)}catch(e){Z(n,t,e)}}break;case 18:W!==null&&(ll?(e=W,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(W,n.stateNode));break;case 4:r=W,i=ll,W=n.stateNode.containerInfo,ll=!0,ul(e,t,n),W=r,ll=i;break;case 0:case 11:case 14:case 15:Uc(2,n,t),nl||Uc(4,n,t),ul(e,t,n);break;case 1:nl||(qc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Gc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:nl=(r=nl)||n.memoizedState!==null,ul(e,t,n),nl=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new il),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new il),t;default:throw Error(i(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){W=c.stateNode,ll=!1;break a}break;case 5:W=c.stateNode,ll=!1;break a;case 3:case 4:W=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(W===null)throw Error(i(160));dl(o,s,a),W=null,ll=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Uc(3,e,e.return),Hc(3,e),Uc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&64&&tl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=_l;if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null){if(r===null){if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[_t]||o[P]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[P]=e,Ct(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[P]=e,Ct(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode)}else e.stateNode=If(a,r,e.memoizedProps)}else o===r?r===null&&e.stateNode!==null&&Yc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),n!==null&&r&4&&Yc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),e.flags&32){a=e.stateNode;try{Yt(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Yc(e,a,n===null?a:n.memoizedProps)),r&1024&&(rl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=_l,_l=gf(t.containerInfo),gl(t,e),_l=a,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}rl&&(rl=!1,bl(e));break;case 4:r=_l,_l=gf(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Me()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=tl,d=nl;if(tl=u||a,nl=d||l,gl(t,e),nl=d,tl=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||tl||nl||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Xc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;$c(e,Zc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Yt(o,``),n.flags&=-33),$c(e,Zc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Qc(e,Zc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sl(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Uc(4,t,t.return),Sl(t);break;case 1:qc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Gc(t,t.return,n),Sl(t);break;case 27:pf(t.stateNode);case 26:case 5:qc(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Hc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Qa(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Wc(a),Kc(a,a.return);break;case 27:el(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&Jc(a),Kc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Cl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),Kc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&da(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&da(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Hc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&da(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Hc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Gf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=_l;_l=gf(e.stateNode.containerInfo),jl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Uc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Pl(e);break;default:Pl(e)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Uc(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function Ll(e,t){for(;al!==null;){var n=al;switch(n.tag){case 0:case 11:case 15:Uc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:da(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,al=r;else a:for(n=e;al!==null;){r=al;var i=r.sibling,a=r.return;if(cl(r),r===n){al=null;break a}if(i!==null){i.return=a,al=i;break a}al=a}}}var Rl={getCacheForType:function(e){var t=ra(la),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ra(la).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,X=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return G&2&&J!==0?J&-J:k.T===null?lt():dd()}function mu(){if(Jl===0){if(!(J&536870912)||L){var e=Je;Je<<=1,!(Je&3932160)&&(Je=262144),Jl=e}else Jl=536870912}return e=ao.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,J,Jl,!1)),nt(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(Kl|=n),X===4&&yu(e,J,Jl,!1)),rd(e))}function gu(e,t,n){if(G&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||Qe(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Hl&&!r&&yu(e,t,0,!1);break}if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Vl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-Me(),10<a)){if(yu(r,t,Jl,!Vl),Ze(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,null,-0,0)}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:rn},Ml(t,a,d);var m=(a&62914560)===a?$l-Me():(a&4194048)===a?eu-Me():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Tr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ue(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&it(e,n,t)}function bu(){return G&6?!0:(id(0,!1),!1)}function xu(){if(q!==null){if(Y===0)var e=q.return;else e=q,Yi=Ji=null,Ao(e),Pa=null,Fa=0,e=q;for(;e!==null;)Vc(e.alternate,e),e=e.return;q=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),K=e,q=n=pi(e.current,null),J=t,Y=0,Bl=null,Vl=!1,Hl=Qe(e,t),Ul=!1,Yl=Jl=ql=Kl=Gl=X=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ue(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,ri(),n}function Cu(e,t){z=null,k.H=zs,t===wa||t===Ea?(t=Ma(),Y=3):t===Ta?(t=Ma(),Y=4):Y=t===rc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,q===null&&(X=1,Zs(e,xi(t,e.current)))}function wu(){var e=ao.current;return e===null?!0:(J&4194048)===J?oo===null:(J&62914560)===J||J&536870912?e===oo:!1}function Tu(){var e=k.H;return k.H=zs,e===null?zs:e}function Eu(){var e=k.A;return k.A=Rl,e}function Du(){X=4,Vl||(J&4194048)!==J&&ao.current!==null||(Hl=!0),!(Gl&134217727)&&!(Kl&134217727)||K===null||yu(K,J,Jl,!1)}function Ou(e,t,n){var r=G;G|=2;var i=Tu(),a=Eu();(K!==e||J!==t)&&(nu=null,Su(e,t)),t=!1;var o=X;a:do try{if(Y!==0&&q!==null){var s=q,c=Bl;switch(Y){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:ao.current===null&&(t=!0);var l=Y;if(Y=0,Bl=null,Pu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=Y,Y=0,Bl=null,Pu(e,s,c,l)}}ku(),o=X;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Yi=Ji=null,G=r,k.H=i,k.A=a,q===null&&(K=null,J=0,ri()),o}function ku(){for(;q!==null;)Mu(q)}function Au(e,t){var n=G;G|=2;var r=Tu(),a=Eu();K!==e||J!==t?(nu=null,tu=Me()+500,Su(e,t)):Hl=Qe(e,t);a:do try{if(Y!==0&&q!==null){t=q;var o=Bl;b:switch(Y){case 1:Y=0,Bl=null,Pu(e,t,o,1);break;case 2:case 9:if(Oa(o)){Y=0,Bl=null,Nu(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),rd(e)},o.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:Oa(o)?(Y=0,Bl=null,Nu(t)):(Y=0,Bl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(s?Wf(s):c.stateNode.complete){Y=0,Bl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Fu(u))}break b}}Y=0,Bl=null,Pu(e,t,o,5);break;case 6:Y=0,Bl=null,Pu(e,t,o,6);break;case 8:xu(),X=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Yi=Ji=null,k.H=r,k.A=a,G=n,q===null?(K=null,J=0,ri(),X):0}function ju(){for(;q!==null&&!Ae();)Mu(q)}function Mu(e){var t=Nc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=_c(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=_c(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:Ao(t);default:Vc(n,t),t=q=mi(t,Wl),t=Nc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Pu(e,t,n,r){Yi=Ji=null,Ao(t),Pa=null,Fa=0;var i=t.return;try{if(nc(e,i,t,n,J)){X=1,Zs(e,xi(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;X=1,Zs(e,xi(n,e.current)),q=null;return}t.flags&32768?(L||r===1?e=!0:Hl||J&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=ao.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Vl);return}e=t.return;var n=zc(t.alternate,t,Wl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);X===0&&(X=5)}function Iu(e,t){do{var n=Bc(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);X=6,q=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(G&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ni,rt(e,n,o,s,c,l),e===K&&(q=K=null,J=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(M,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=k.T,k.T=null,a=A.p,A.p=2,s=G,G|=4;try{ol(e,t,n)}finally{G=s,A.p=a,k.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=k.T,k.T=null;var r=A.p;A.p=2;var i=G;G|=4;try{vl(t,e);var a=zd,o=Ar(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&kr(s.ownerDocument.documentElement,s)){if(c!==null&&jr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Or(s,h),v=Or(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{G=i,A.p=r,k.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=k.T,k.T=null;var r=A.p;A.p=2;var i=G;G|=4;try{sl(e,t.alternate,t)}finally{G=i,A.p=r,k.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,je();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),ct(n),t=t.stateNode,Ve&&typeof Ve.onCommitFiberRoot==`function`)try{Ve.onCommitFiberRoot(Be,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=k.T,i=A.p,A.p=2,k.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{k.T=t,A.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,da(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=ct(su),r=k.T,a=A.p;try{A.p=32>n?32:n,k.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,G&6)throw Error(i(331));var c=G;if(G|=4,Fl(o.current),Dl(o,o.current,s,n),G=c,id(0,!1),Ve&&typeof Ve.onPostCommitFiberRoot==`function`)try{Ve.onPostCommitFiberRoot(Be,o)}catch{}return!0}finally{A.p=a,k.T=r,Vu(e,t)}}function Wu(e,t,n){t=xi(n,t),t=$s(e.stateNode,t,2),e=Ka(e,t,2),e!==null&&(nt(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=xi(n,e),n=ec(2),r=Ka(t,n,2),r!==null&&(tc(n,r,t,e),nt(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(X===4||X===3&&(J&62914560)===J&&300>Me()-$l?!(G&2)&&Su(e,0):ql|=n,Yl===J&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=et()),e=oi(e,t),e!==null&&(nt(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Oe(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ue(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=J,a=Ze(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Qe(r,a)||(n=!0,ld(r,a))}r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Me(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ue(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=$e(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=Ze(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&ke(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Qe(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&ke(r),ct(n)){case 2:case 8:n=Fe;break;case 32:n=M;break;case 268435456:n=Le;break;default:n=M}return r=cd.bind(null,e),n=Oe(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&ke(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=J;return r=Ze(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Me()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){G&6?Oe(Pe,ad):od()})}function dd(){if(nd===0){var e=ma;e===0&&(e=qe,qe<<=1,!(qe&261888)&&(qe=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:nn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[dt]||null).action),o=r.submitter;o&&(t=(t=o[dt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Tn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ts(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ts(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<Zr.length;hd++){var gd=Zr[hd];Qr(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}Qr(Ur,`onAnimationEnd`),Qr(Wr,`onAnimationIteration`),Qr(Gr,`onAnimationStart`),Qr(`dblclick`,`onDoubleClick`),Qr(`focusin`,`onFocus`),Qr(`focusout`,`onBlur`),Qr(Kr,`onTransitionRun`),Qr(qr,`onTransitionStart`),Qr(Jr,`onTransitionCancel`),Qr(Yr,`onTransitionEnd`),Dt(`onMouseEnter`,[`mouseout`,`mouseover`]),Dt(`onMouseLeave`,[`mouseout`,`mouseover`]),Dt(`onPointerEnter`,[`pointerout`,`pointerover`]),Dt(`onPointerLeave`,[`pointerout`,`pointerover`]),Et(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Et(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Et(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Et(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Et(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Et(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){$r(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){$r(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[pt];n===void 0&&(n=t[pt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,wt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!mn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=yt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}dn(function(){var r=a,i=on(n),s=[];a:{var c=Xr.get(e);if(c!==void 0){var l=Tn,u=e;switch(e){case`keypress`:if(bn(n)===0)break a;case`keydown`:case`keyup`:l=Hn;break;case`focusin`:u=`focus`,l=Pn;break;case`focusout`:u=`blur`,l=Pn;break;case`beforeblur`:case`afterblur`:l=Pn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Mn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Nn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Wn;break;case Ur:case Wr:case Gr:l=Fn;break;case Yr:l=Gn;break;case`scroll`:case`scrollend`:l=Dn;break;case`wheel`:l=Kn;break;case`copy`:case`cut`:case`paste`:l=In;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Un;break;case`toggle`:case`beforetoggle`:l=qn}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=fn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==an&&(u=n.relatedTarget||n.fromElement)&&(yt(u)||u[ft]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?yt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Mn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Un,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:xt(l),h=u==null?c:xt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,yt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?xt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=pr;else if(sr(c)){if(mr)v=Cr;else{v=xr;var y=br}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&$t(r.elementType)&&(v=pr):v=Sr;if(v&&=v(e,r)){cr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Gt(c,`number`,c.value)}switch(y=r?xt(r):window,e){case`focusin`:(sr(y)||y.contentEditable===`true`)&&(Nr=y,Pr=r,Fr=null);break;case`focusout`:Fr=Pr=Nr=null;break;case`mousedown`:Ir=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Ir=!1,Lr(s,n,i);break;case`selectionchange`:if(Mr)break;case`keydown`:case`keyup`:Lr(s,n,i)}var b;if(Yn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else rr?tr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Qn&&n.locale!==`ko`&&(rr||x!==`onCompositionStart`?x===`onCompositionEnd`&&rr&&(b=yn()):(gn=i,_n=`value`in gn?gn.value:gn.textContent,rr=!0)),y=Ed(r,x),0<y.length&&(x=new Ln(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=nr(n),b!==null&&(x.data=b)))),(b=Zn?ir(e,n):ar(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Ln(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=fn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=fn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=fn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=fn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Yt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Yt(e,``+r);break;case`className`:Nt(e,`class`,r);break;case`tabIndex`:Nt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Nt(e,n,r);break;case`style`:Qt(e,r,o);break;case`data`:if(t!==`object`){Nt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=nn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=nn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=rn);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=nn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Mt(e,`popover`,r);break;case`xlinkActuate`:Pt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Pt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Pt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Pt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Pt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Pt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Pt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Pt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Pt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Mt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=en.get(n)||n,Mt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:Qt(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Yt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Yt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=rn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Tt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[dt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Mt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Wt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Kt(e,!!r,n,!0):Kt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Jt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if($t(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Ut(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Kt(e,!!n,n?[]:``,!1):Kt(e,!!n,t,!0)):Kt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}qt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if($t(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e!==Wd&&(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[_t]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body)}n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),vt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[_t])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);vt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=A.d;A.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=bt(e);t!==null&&t.tag===5&&t.type===`form`?Ds(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Ht(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),Ct(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Ht(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Ht(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Ht(n.imageSizes)+`"]`)):i+=`[href="`+Ht(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),Ct(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Ht(r)+`"][href="`+Ht(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),Ct(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=St(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);Ct(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=St(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Ct(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=St(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Ct(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=me.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=St(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=St(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=St(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Ht(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),Ct(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Ht(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Ht(n.href)+`"]`);if(r)return t.instance=r,Ct(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Ct(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,Ct(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),Ct(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,Ct(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Ct(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[_t]||a[P]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Ct(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),Ct(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:S,Provider:null,Consumer:null,_currentValue:se,_currentValue2:se,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=tt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tt(0),this.hiddenUpdates=tt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=di(3,null,null,t),e.current=a,a.stateNode=e,t=ua(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ua(a),e}function tp(e){return e?(e=li,e):li}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ga(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ka(e,r,t),n!==null&&(hu(n,e,t),qa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=oi(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=st(t);var n=oi(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=k.T;k.T=null;var a=A.p;try{A.p=2,up(e,t,n,r)}finally{A.p=a,k.T=i}}function lp(e,t,n,r){var i=k.T;k.T=null;var a=A.p;try{A.p=8,up(e,t,n,r)}finally{A.p=a,k.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=bt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Xe(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ue(o);s.entanglements[1]|=c,o&=~c}rd(a),!(G&6)&&(tu=Me()+500,id(0,!1))}}break;case 31:case 13:s=oi(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=on(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=yt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ne()){case Pe:return 2;case Fe:return 8;case M:case Ie:return 32;case Le:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=bt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=yt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,N(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,N(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);an=r,n.target.dispatchEvent(r),an=null}else return t=bt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=bt(n);a!==null&&(e.splice(t,3),t-=3,Ts(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[dt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[dt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[ft]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=lt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.8`)throw Error(i(527,Lp,`19.2.8`));A.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:k,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Be=zp.inject(Rp),Ve=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Js,s=Ys,c=Xs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[ft]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=u(),v=g(),y=`---
title: Problem Title
number: 0
source: LeetCode
category: Category Name
difficulty: Easy
tags: Tag One, Tag Two
url: https://link-to-original-problem
---

## Problem
Paste problem description here. Supports full Markdown: **bold**, \`code\`, \`\`\`block\`\`\`, lists... and provide examples:...

## Hints
- You need provide full hint for the website provide.
- Hint 1 (remove the entire "## Hints" section if hints are not needed)
- Hint 2

## Template
(Optional — starter code for the "Try it yourself" scratchpad. Remove this section if not needed.
TypeScript is prioritized — place \`\`\`typescript fence first.)

\`\`\`typescript
// just init the function name and paramaters. dont remove!.

function solve(): void {
  // TODO
}
\`\`\`

\`\`\`python
def solve():
    # TODO
    pass
\`\`\`

## Solution: Solution Name (e.g. Brute Force)
- time: O(n)
- space: O(1)

### Explanation
Explain the general intuition of this approach.

### Walkthrough
- Step 1 (remove "### Walkthrough" if step-by-step breakdown is not needed).
- Step 2
- Step 3

\`\`\`typescript
// TypeScript solution code here
\`\`\`

\`\`\`python
# Python solution code here
\`\`\`

## Solution: Second Approach Name (if multiple approaches)
- time: O(n log n)
- space: O(1)

### Explanation
...

### Walkthrough
- Step 1
- Step 2

\`\`\`typescript
// Ok. you can provide full solution here. please init, explain if the function depent on Class or other function likes: BST, Linkedin list,...
// Please format /newline and /tab to easy read the code
// TypeScript solution code here
\`\`\`

<!--
NAMING CONVENTIONS:
- source: Use consistent casing (e.g. "LeetCode", "HackerRank", "NeetCode").
- category: Level 2 in the sidebar (e.g. "Arrays & Hashing", "Two Pointers", "Trees").
- tags: Title Case, separated by commas (e.g. "Hash Table, Two Pointers").
- number: Problem number on the original platform.
- code language: TypeScript fence \`\`\`typescript placed first in Template and Solution blocks.
-->

`,b=`---
title: Template to resolve on problem
number: 217
source: Hackerrank
category: DFS, BFS, Linkedin List, BST
difficulty: Easy
tags: DFS, BFS, Linkedin List, BST 
url: 
---

## Solution: DFS - BFS.
- time: O(n)
- space: O(n)


\`\`\`typescript

/* ============================================================
   DFS / BFS DSA TEMPLATE - TYPESCRIPT
   Includes:
   - Binary Search Tree (BST)
   - Graph (Adjacency List)
   - DFS / BFS
   - Shortest Path
   - Connected Components
   - Cycle Detection
   - Grid / Matrix DFS & BFS
   - Multi-source BFS
   ============================================================ */


/* ============================================================
   1. BINARY SEARCH TREE (BST)
   ============================================================ */

class TreeNode<T> {
  val: T;
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;

  constructor(val: T) {
    this.val = val;
  }
}

class BST<T> {
  root: TreeNode<T> | null = null;

  // ------------------------------------------------------------
  // Insert
  // ------------------------------------------------------------

  insert(val: T): void {
    const newNode = new TreeNode(val);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let cur = this.root;

    while (true) {
      if (val < cur.val) {
        if (!cur.left) {
          cur.left = newNode;
          return;
        }

        cur = cur.left;
      } else {
        if (!cur.right) {
          cur.right = newNode;
          return;
        }

        cur = cur.right;
      }
    }
  }

  // ------------------------------------------------------------
  // Search
  // ------------------------------------------------------------

  search(val: T): TreeNode<T> | null {
    let cur = this.root;

    while (cur) {
      if (val === cur.val) return cur;

      if (val < cur.val) {
        cur = cur.left;
      } else {
        cur = cur.right;
      }
    }

    return null;
  }

  // ------------------------------------------------------------
  // DFS - Recursive
  // ------------------------------------------------------------

  // Preorder: Node -> Left -> Right
  dfsPreorder(
    node: TreeNode<T> | null = this.root,
    res: T[] = []
  ): T[] {
    if (!node) return res;

    res.push(node.val);

    this.dfsPreorder(node.left, res);
    this.dfsPreorder(node.right, res);

    return res;
  }

  // Inorder: Left -> Node -> Right
  //
  // IMPORTANT:
  // In a BST, inorder traversal produces sorted values.
  dfsInorder(
    node: TreeNode<T> | null = this.root,
    res: T[] = []
  ): T[] {
    if (!node) return res;

    this.dfsInorder(node.left, res);
    res.push(node.val);
    this.dfsInorder(node.right, res);

    return res;
  }

  // Postorder: Left -> Right -> Node
  dfsPostorder(
    node: TreeNode<T> | null = this.root,
    res: T[] = []
  ): T[] {
    if (!node) return res;

    this.dfsPostorder(node.left, res);
    this.dfsPostorder(node.right, res);
    res.push(node.val);

    return res;
  }

  // ------------------------------------------------------------
  // DFS - Iterative
  // ------------------------------------------------------------

  // Iterative preorder traversal
  dfsIterative(): T[] {
    const res: T[] = [];

    if (!this.root) return res;

    const stack: TreeNode<T>[] = [this.root];

    while (stack.length > 0) {
      const node = stack.pop()!;

      res.push(node.val);

      // Push right first so left is processed first.
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
    }

    return res;
  }

  // ------------------------------------------------------------
  // BFS - Level Order
  // ------------------------------------------------------------

  bfs(): T[][] {
    const res: T[][] = [];

    if (!this.root) return res;

    const queue: TreeNode<T>[] = [this.root];

    while (queue.length > 0) {
      const levelSize = queue.length;
      const level: T[] = [];

      for (let i = 0; i < levelSize; i++) {
        const node = queue.shift()!;

        level.push(node.val);

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }

      res.push(level);
    }

    return res;
  }

  // ------------------------------------------------------------
  // Find Minimum
  // ------------------------------------------------------------

  findMin(node: TreeNode<T> | null = this.root): T | null {
    if (!node) return null;

    let cur = node;

    while (cur.left) {
      cur = cur.left;
    }

    return cur.val;
  }

  // ------------------------------------------------------------
  // Find Maximum
  // ------------------------------------------------------------

  findMax(node: TreeNode<T> | null = this.root): T | null {
    if (!node) return null;

    let cur = node;

    while (cur.right) {
      cur = cur.right;
    }

    return cur.val;
  }

  // ------------------------------------------------------------
  // Tree Height
  // ------------------------------------------------------------

  height(node: TreeNode<T> | null = this.root): number {
    if (!node) return 0;

    return 1 + Math.max(
      this.height(node.left),
      this.height(node.right)
    );
  }

  // ------------------------------------------------------------
  // Count Nodes
  // ------------------------------------------------------------

  countNodes(node: TreeNode<T> | null = this.root): number {
    if (!node) return 0;

    return (
      1 +
      this.countNodes(node.left) +
      this.countNodes(node.right)
    );
  }

  // ------------------------------------------------------------
  // Check if Tree Contains a Value
  // ------------------------------------------------------------

  contains(val: T): boolean {
    return this.search(val) !== null;
  }
}


/* ============================================================
   2. GRAPH - ADJACENCY LIST
   ============================================================ */

class Graph<T> {
  private adjList: Map<T, T[]> = new Map();
  private directed: boolean;

  constructor(directed: boolean = false) {
    this.directed = directed;
  }

  // ------------------------------------------------------------
  // Add Vertex
  // ------------------------------------------------------------

  addVertex(v: T): void {
    if (!this.adjList.has(v)) {
      this.adjList.set(v, []);
    }
  }

  // ------------------------------------------------------------
  // Add Edge
  // ------------------------------------------------------------

  addEdge(u: T, v: T): void {
    this.addVertex(u);
    this.addVertex(v);

    this.adjList.get(u)!.push(v);

    if (!this.directed) {
      this.adjList.get(v)!.push(u);
    }
  }

  // ------------------------------------------------------------
  // Get Neighbors
  // ------------------------------------------------------------

  getNeighbors(v: T): T[] {
    return this.adjList.get(v) ?? [];
  }

  // ------------------------------------------------------------
  // Get All Vertices
  // ------------------------------------------------------------

  getVertices(): T[] {
    return [...this.adjList.keys()];
  }

  // ------------------------------------------------------------
  // DFS - Recursive
  // ------------------------------------------------------------

  dfsRecursive(
    start: T,
    visited: Set<T> = new Set(),
    res: T[] = []
  ): T[] {
    if (visited.has(start)) return res;

    visited.add(start);
    res.push(start);

    for (const neighbor of this.getNeighbors(start)) {
      this.dfsRecursive(neighbor, visited, res);
    }

    return res;
  }

  // ------------------------------------------------------------
  // DFS - Iterative
  // ------------------------------------------------------------

  dfsIterative(start: T): T[] {
    const visited = new Set<T>();
    const stack: T[] = [start];
    const res: T[] = [];

    while (stack.length > 0) {
      const node = stack.pop()!;

      if (visited.has(node)) continue;

      visited.add(node);
      res.push(node);

      const neighbors = this.getNeighbors(node);

      // Reverse so traversal follows insertion order.
      for (let i = neighbors.length - 1; i >= 0; i--) {
        if (!visited.has(neighbors[i])) {
          stack.push(neighbors[i]);
        }
      }
    }

    return res;
  }

  // ------------------------------------------------------------
  // BFS
  // ------------------------------------------------------------

  bfs(start: T): T[] {
    const visited = new Set<T>([start]);
    const queue: T[] = [start];
    const res: T[] = [];

    let head = 0;

    while (head < queue.length) {
      const node = queue[head++];

      res.push(node);

      for (const neighbor of this.getNeighbors(node)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }

    return res;
  }

  // ------------------------------------------------------------
  // BFS - Shortest Path in Unweighted Graph
  // ------------------------------------------------------------

  bfsShortestPath(start: T, end: T): T[] | null {
    const visited = new Set<T>([start]);

    const queue: T[] = [start];

    const parent = new Map<T, T | null>();
    parent.set(start, null);

    let head = 0;

    while (head < queue.length) {
      const node = queue[head++];

      if (node === end) {
        const path: T[] = [];

        let cur: T | null = end;

        while (cur !== null) {
          path.push(cur);
          cur = parent.get(cur)!;
        }

        path.reverse();

        return path;
      }

      for (const neighbor of this.getNeighbors(node)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          parent.set(neighbor, node);
          queue.push(neighbor);
        }
      }
    }

    return null;
  }

  // ------------------------------------------------------------
  // BFS - Shortest Distance
  // ------------------------------------------------------------

  bfsShortestDistance(start: T, end: T): number {
    const visited = new Set<T>([start]);

    const queue: Array<[T, number]> = [[start, 0]];

    let head = 0;

    while (head < queue.length) {
      const [node, distance] = queue[head++];

      if (node === end) {
        return distance;
      }

      for (const neighbor of this.getNeighbors(node)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push([neighbor, distance + 1]);
        }
      }
    }

    return -1;
  }

  // ------------------------------------------------------------
  // Count Connected Components
  // ------------------------------------------------------------

  countComponents(): number {
    const visited = new Set<T>();
    let count = 0;

    for (const vertex of this.getVertices()) {
      if (visited.has(vertex)) continue;

      count++;

      const stack: T[] = [vertex];

      while (stack.length > 0) {
        const node = stack.pop()!;

        if (visited.has(node)) continue;

        visited.add(node);

        for (const neighbor of this.getNeighbors(node)) {
          if (!visited.has(neighbor)) {
            stack.push(neighbor);
          }
        }
      }
    }

    return count;
  }

  // ------------------------------------------------------------
  // Detect Cycle - Undirected Graph
  // ------------------------------------------------------------

  hasCycleUndirected(): boolean {
    const visited = new Set<T>();

    for (const start of this.getVertices()) {
      if (visited.has(start)) continue;

      const stack: Array<[T, T | null]> = [
        [start, null]
      ];

      while (stack.length > 0) {
        const [node, parent] = stack.pop()!;

        if (visited.has(node)) {
          return true;
        }

        visited.add(node);

        for (const neighbor of this.getNeighbors(node)) {
          if (neighbor !== parent) {
            stack.push([neighbor, node]);
          }
        }
      }
    }

    return false;
  }
}


/* ============================================================
   3. GRID / MATRIX DFS
   ============================================================ */

// Common 4-direction movement:
//
//        UP
//         |
// LEFT -- (r,c) -- RIGHT
//         |
//       DOWN

const dirs = [
  [0, 1],   // right
  [0, -1],  // left
  [1, 0],   // down
  [-1, 0]   // up
];


// ------------------------------------------------------------
// Grid DFS
// ------------------------------------------------------------

function dfsGrid(
  grid: number[][],
  startRow: number,
  startCol: number
): void {
  const rows = grid.length;
  const cols = grid[0].length;

  const visited = new Set<string>();

  function dfs(r: number, c: number): void {
    // Boundary check
    if (
      r < 0 ||
      r >= rows ||
      c < 0 ||
      c >= cols
    ) {
      return;
    }

    const key = \`\${r},\${c}\`;

    // Already visited
    if (visited.has(key)) return;

    // Example condition:
    // Only visit cells containing 1.
    if (grid[r][c] !== 1) return;

    visited.add(key);

    for (const [dr, dc] of dirs) {
      dfs(r + dr, c + dc);
    }
  }

  dfs(startRow, startCol);
}


/* ============================================================
   4. NUMBER OF ISLANDS
   ============================================================ */

function numIslands(grid: string[][]): number {
  if (grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;

  let count = 0;

  function dfs(r: number, c: number): void {
    if (
      r < 0 ||
      r >= rows ||
      c < 0 ||
      c >= cols ||
      grid[r][c] !== "1"
    ) {
      return;
    }

    // Mark visited by changing "1" -> "0"
    grid[r][c] = "0";

    for (const [dr, dc] of dirs) {
      dfs(r + dr, c + dc);
    }
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "1") {
        count++;
        dfs(r, c);
      }
    }
  }

  return count;
}


/* ============================================================
   5. GRID BFS - SHORTEST PATH
   ============================================================ */

function shortestPathGrid(
  grid: number[][],
  start: [number, number],
  end: [number, number]
): number {
  const rows = grid.length;
  const cols = grid[0].length;

  const [sr, sc] = start;
  const [er, ec] = end;

  if (grid[sr][sc] === 0 || grid[er][ec] === 0) {
    return -1;
  }

  const queue: Array<[number, number, number]> = [
    [sr, sc, 0]
  ];

  const visited = new Set<string>();
  visited.add(\`\${sr},\${sc}\`);

  let head = 0;

  while (head < queue.length) {
    const [r, c, distance] = queue[head++];

    if (r === er && c === ec) {
      return distance;
    }

    for (const [dr, dc] of dirs) {
      const nr = r + dr;
      const nc = c + dc;

      if (
        nr < 0 ||
        nr >= rows ||
        nc < 0 ||
        nc >= cols
      ) {
        continue;
      }

      if (grid[nr][nc] === 0) continue;

      const key = \`\${nr},\${nc}\`;

      if (visited.has(key)) continue;

      visited.add(key);

      queue.push([
        nr,
        nc,
        distance + 1
      ]);
    }
  }

  return -1;
}


/* ============================================================
   6. MULTI-SOURCE BFS
   ============================================================ */

// Useful for problems like:
//
// - Rotting Oranges
// - Walls and Gates
// - Distance from nearest 0
// - Infection / spreading problems
// - Fire spreading
// - Multiple starting points

function multiSourceBFS(
  grid: number[][]
): number[][] {
  const rows = grid.length;
  const cols = grid[0].length;

  const distance = Array.from(
    { length: rows },
    () => Array(cols).fill(-1)
  );

  const queue: Array<[number, number]> = [];

  // Add ALL starting points first.
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 0) {
        distance[r][c] = 0;
        queue.push([r, c]);
      }
    }
  }

  let head = 0;

  while (head < queue.length) {
    const [r, c] = queue[head++];

    for (const [dr, dc] of dirs) {
      const nr = r + dr;
      const nc = c + dc;

      if (
        nr < 0 ||
        nr >= rows ||
        nc < 0 ||
        nc >= cols
      ) {
        continue;
      }

      if (distance[nr][nc] !== -1) continue;

      distance[nr][nc] = distance[r][c] + 1;

      queue.push([nr, nc]);
    }
  }

  return distance;
}


/* ============================================================
   7. TOPOLOGICAL SORT - DIRECTED GRAPH
   ============================================================ */

// Kahn's Algorithm
//
// Useful for:
// - Course Schedule
// - Dependency problems
// - Build systems
// - Task scheduling

function topologicalSort(
  numNodes: number,
  edges: Array<[number, number]>
): number[] {
  const graph: number[][] = Array.from(
    { length: numNodes },
    () => []
  );

  const indegree = new Array(numNodes).fill(0);

  for (const [u, v] of edges) {
    graph[u].push(v);
    indegree[v]++;
  }

  const queue: number[] = [];

  for (let i = 0; i < numNodes; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }

  const result: number[] = [];

  let head = 0;

  while (head < queue.length) {
    const node = queue[head++];

    result.push(node);

    for (const neighbor of graph[node]) {
      indegree[neighbor]--;

      if (indegree[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }

  // If not all nodes were processed,
  // the graph contains a cycle.
  if (result.length !== numNodes) {
    return [];
  }

  return result;
}


/* ============================================================
   8. BFS TREE / LEVEL ORDER TEMPLATE
   ============================================================ */

function levelOrder<T>(
  root: TreeNode<T> | null
): T[][] {
  if (!root) return [];

  const result: T[][] = [];
  const queue: TreeNode<T>[] = [root];

  let head = 0;

  while (head < queue.length) {
    const levelSize = queue.length - head;
    const level: T[] = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue[head++];

      level.push(node.val);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    result.push(level);
  }

  return result;
}


/* ============================================================
   9. TREE DFS - COMMON PATTERN
   ============================================================ */

// Example:
// Find maximum value in a binary tree.

function maxTreeValue(
  root: TreeNode<number> | null
): number {
  if (!root) return -Infinity;

  const leftMax = maxTreeValue(root.left);
  const rightMax = maxTreeValue(root.right);

  return Math.max(
    root.val,
    leftMax,
    rightMax
  );
}


/* ============================================================
   10. TREE DFS - PATH SUM
   ============================================================ */

function hasPathSum(
  root: TreeNode<number> | null,
  targetSum: number
): boolean {
  if (!root) return false;

  // Leaf node
  if (!root.left && !root.right) {
    return root.val === targetSum;
  }

  const remaining = targetSum - root.val;

  return (
    hasPathSum(root.left, remaining) ||
    hasPathSum(root.right, remaining)
  );
}


/* ============================================================
   11. GENERIC DFS TEMPLATE
   ============================================================ */

function dfsTemplate<T>(
  start: T,
  getNeighbors: (node: T) => T[]
): T[] {
  const visited = new Set<T>();
  const result: T[] = [];

  function dfs(node: T): void {
    if (visited.has(node)) return;

    visited.add(node);
    result.push(node);

    for (const neighbor of getNeighbors(node)) {
      dfs(neighbor);
    }
  }

  dfs(start);

  return result;
}


/* ============================================================
   12. GENERIC BFS TEMPLATE
   ============================================================ */

function bfsTemplate<T>(
  start: T,
  getNeighbors: (node: T) => T[]
): T[] {
  const visited = new Set<T>([start]);
  const queue: T[] = [start];
  const result: T[] = [];

  let head = 0;

  while (head < queue.length) {
    const node = queue[head++];

    result.push(node);

    for (const neighbor of getNeighbors(node)) {
      if (visited.has(neighbor)) continue;

      visited.add(neighbor);
      queue.push(neighbor);
    }
  }

  return result;
}


/* ============================================================
   13. EXAMPLE USAGE
   ============================================================ */

// ------------------------------------------------------------
// BST
// ------------------------------------------------------------

const bst = new BST<number>();

[5, 3, 8, 1, 4, 7, 9].forEach(n => {
  bst.insert(n);
});

console.log(
  "Preorder:",
  bst.dfsPreorder()
);

console.log(
  "Inorder:",
  bst.dfsInorder()
);

console.log(
  "Postorder:",
  bst.dfsPostorder()
);

console.log(
  "DFS iterative:",
  bst.dfsIterative()
);

console.log(
  "BFS:",
  bst.bfs()
);

console.log(
  "Search 7:",
  bst.contains(7)
);

console.log(
  "Min:",
  bst.findMin()
);

console.log(
  "Max:",
  bst.findMax()
);

console.log(
  "Height:",
  bst.height()
);


// ------------------------------------------------------------
// Graph
// ------------------------------------------------------------

const graph = new Graph<string>(false);

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");
graph.addEdge("D", "E");

console.log(
  "DFS recursive:",
  graph.dfsRecursive("A")
);

console.log(
  "DFS iterative:",
  graph.dfsIterative("A")
);

console.log(
  "BFS:",
  graph.bfs("A")
);

console.log(
  "Shortest path A -> E:",
  graph.bfsShortestPath("A", "E")
);

console.log(
  "Shortest distance A -> E:",
  graph.bfsShortestDistance("A", "E")
);


/* ============================================================
   14. QUICK DSA NOTES
   ============================================================

   DFS
   ---
   Use DFS when you need to:

   - Explore an entire branch
   - Search for a path
   - Backtracking
   - Count connected components
   - Detect cycles
   - Explore trees
   - Solve recursive problems


   BFS
   ---
   Use BFS when you need to:

   - Find shortest path in an unweighted graph
   - Traverse level by level
   - Solve tree level-order problems
   - Simulate spreading / infection
   - Multi-source BFS
   - Find minimum number of steps


   GRAPH
   -----

   Adjacency List:

       A -> [B, C]
       B -> [A, D]
       C -> [A, D]
       D -> [B, C, E]
       E -> [D]


   DFS:

       stack / recursion
       visited Set


   BFS:

       queue
       visited Set


   GRID
   ----

   Common directions:

       const dirs = [
         [0, 1],    // right
         [0, -1],   // left
         [1, 0],    // down
         [-1, 0]    // up
       ];


   8-DIRECTION GRID
   ----------------

   const dirs8 = [
     [-1, -1], [-1, 0], [-1, 1],
     [ 0, -1],          [ 0, 1],
     [ 1, -1], [ 1, 0], [ 1, 1]
   ];


   IMPORTANT:
   ----------

   For BFS in TypeScript, avoid repeated queue.shift()
   for large inputs because shift() is O(n).

   Prefer:

       let head = 0;

       while (head < queue.length) {
         const node = queue[head++];
       }


   COMPLEXITY
   ----------

   DFS:
       Time  = O(V + E)
       Space = O(V)

   BFS:
       Time  = O(V + E)
       Space = O(V)

   Grid DFS/BFS:
       Time  = O(rows * cols)
       Space = O(rows * cols)


   BST:
       Average search/insert = O(log n)
       Worst-case            = O(n)

   ============================================================ */
\`\`\`


## Solution: DP - Dynamic Programing.
- time: O(n)
- space: O(n)



\`\`\`typescript

/* ============================================================
   DYNAMIC PROGRAMMING — SENIOR DSA INTERVIEW PLAYBOOK
   TypeScript

   Goal:
   - Recognize DP
   - Derive the state
   - Derive the transition
   - Implement Top-Down
   - Implement Bottom-Up
   - Optimize Space
   - Explain trade-offs in an interview
   ============================================================ */


/* ============================================================
   0. UNIVERSAL DP THINKING PROCESS
   ============================================================

   When you see a problem, ask:

   1. Can I define the problem using a smaller subproblem?
   2. Are the same subproblems repeated?
   3. What is my STATE?
   4. What is my TRANSITION?
   5. What are my BASE CASES?
   6. What is the ORDER of computation?
   7. Can I reduce SPACE?

   General form:

       dp[state] = best / number of ways / possible(state)

   Interview explanation:

       State:
       Transition:
       Base case:
       Iteration order:
       Time:
       Space:
       Space optimization:
*/


/* ============================================================
   1. FIBONACCI / LINEAR DP
   ============================================================

   Problem:
   Given n, return the nth Fibonacci number.

   Example:
   F(5) = 5

   Recurrence:

       F(n) = F(n - 1) + F(n - 2)
*/


// ------------------------------------------------------------
// Way 1: Brute Force Recursion
// ------------------------------------------------------------

function fibBruteForce(n: number): number {
    if (n <= 1) {
        return n;
    }

    return fibBruteForce(n - 1) + fibBruteForce(n - 2);
}

/*
Time:  O(2^n)
Space: O(n) recursion stack

Problem:
The same subproblems are calculated repeatedly.
*/


// ------------------------------------------------------------
// Way 2: Top-Down DP / Memoization
// ------------------------------------------------------------

function fibMemo(n: number): number {
    const memo = new Map<number, number>();

    function dfs(n: number): number {
        if (n <= 1) {
            return n;
        }

        if (memo.has(n)) {
            return memo.get(n)!;
        }

        const result = dfs(n - 1) + dfs(n - 2);

        memo.set(n, result);

        return result;
    }

    return dfs(n);
}

/*
Time:  O(n)
Space: O(n)

Pattern:

    function dfs(state) {
        if (base case) return ...

        if (memo.has(state)) {
            return memo.get(state)!
        }

        const result = ...

        memo.set(state, result)

        return result
    }
*/


// ------------------------------------------------------------
// Way 3: Bottom-Up DP
// ------------------------------------------------------------

function fibBottomUp(n: number): number {
    if (n <= 1) {
        return n;
    }

    const dp = new Array<number>(n + 1);

    dp[0] = 0;
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}

/*
Time:  O(n)
Space: O(n)
*/


// ------------------------------------------------------------
// Way 4: Space Optimized
// ------------------------------------------------------------

function fibOptimized(n: number): number {
    if (n <= 1) {
        return n;
    }

    let prev2 = 0;
    let prev1 = 1;

    for (let i = 2; i <= n; i++) {
        const current = prev1 + prev2;

        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
}

/*
Time:  O(n)
Space: O(1)

Senior interview point:

    We only need dp[i - 1] and dp[i - 2].

    Therefore the entire DP array is unnecessary.
*/


/* ============================================================
   2. CLIMBING STAIRS
   ============================================================

   Problem:

   You can climb either 1 or 2 steps.

   How many distinct ways can you reach step n?

   State:

       dp[i] = number of ways to reach i

   Transition:

       dp[i] = dp[i - 1] + dp[i - 2]

   Base:

       dp[0] = 1
       dp[1] = 1
*/


function climbStairs(n: number): number {
    if (n <= 1) {
        return 1;
    }

    let one = 1;
    let two = 1;

    for (let i = 2; i <= n; i++) {
        const current = one + two;

        two = one;
        one = current;
    }

    return one;
}


/* ============================================================
   3. HOUSE ROBBER
   ============================================================

   Problem:

   Cannot rob two adjacent houses.

   Example:

       [2, 7, 9, 3, 1]

   Answer:

       12

   State:

       dp[i] = maximum money using houses [0..i]

   Choice:

       Skip house i
       Take house i

   Transition:

       dp[i] = max(
           dp[i - 1],
           dp[i - 2] + nums[i]
       )
*/


function robMemo(nums: number[]): number {
    const memo = new Map<number, number>();

    function dfs(i: number): number {
        if (i < 0) {
            return 0;
        }

        if (memo.has(i)) {
            return memo.get(i)!;
        }

        const skip = dfs(i - 1);
        const take = dfs(i - 2) + nums[i];

        const result = Math.max(skip, take);

        memo.set(i, result);

        return result;
    }

    return dfs(nums.length - 1);
}


function robBottomUp(nums: number[]): number {
    const n = nums.length;

    if (n === 0) {
        return 0;
    }

    if (n === 1) {
        return nums[0];
    }

    const dp = new Array<number>(n);

    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < n; i++) {
        dp[i] = Math.max(
            dp[i - 1],
            dp[i - 2] + nums[i]
        );
    }

    return dp[n - 1];
}


function robOptimized(nums: number[]): number {
    let prev2 = 0;
    let prev1 = 0;

    for (const money of nums) {
        const current = Math.max(
            prev1,
            prev2 + money
        );

        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
}


/* ============================================================
   4. 0/1 KNAPSACK
   ============================================================

   Each item can be selected AT MOST ONCE.

   State:

       dp[i][capacity]

   Meaning:

       Maximum value using first i items
       with capacity <= capacity.

   Choice:

       Don't take item i

       Take item i

   Transition:

       dp[i][c] =
           max(
               dp[i - 1][c],
               dp[i - 1][c - weight] + value
           )

   Important:

       0/1 Knapsack
       -> iterate capacity BACKWARD

       Unbounded Knapsack
       -> iterate capacity FORWARD
*/


function knapsack01(
    weights: number[],
    values: number[],
    capacity: number
): number {
    const dp = new Array<number>(capacity + 1).fill(0);

    for (let i = 0; i < weights.length; i++) {
        const weight = weights[i];
        const value = values[i];

        for (let c = capacity; c >= weight; c--) {
            dp[c] = Math.max(
                dp[c],
                dp[c - weight] + value
            );
        }
    }

    return dp[capacity];
}


/* ============================================================
   5. COIN CHANGE
   ============================================================

   Problem:

   coins = [1, 2, 5]
   amount = 11

   Answer:

       3

   because:

       5 + 5 + 1

   State:

       dp[amount]

   Meaning:

       Minimum number of coins required.

   Transition:

       dp[a] = min(
           dp[a],
           dp[a - coin] + 1
       )
*/


function coinChange(
    coins: number[],
    amount: number
): number {
    const INF = amount + 1;

    const dp = new Array<number>(amount + 1)
        .fill(INF);

    dp[0] = 0;

    for (let a = 1; a <= amount; a++) {
        for (const coin of coins) {
            if (a >= coin) {
                dp[a] = Math.min(
                    dp[a],
                    dp[a - coin] + 1
                );
            }
        }
    }

    return dp[amount] === INF
        ? -1
        : dp[amount];
}


/* ============================================================
   6. COIN CHANGE II
   ============================================================

   Difference:

       Coin Change:
           minimum number of coins

       Coin Change II:
           number of combinations

   Critical detail:

       Loop coins FIRST.

   This avoids counting:

       [1,2]
       [2,1]

   as different combinations.
*/


function coinChangeCombinations(
    coins: number[],
    amount: number
): number {
    const dp = new Array<number>(amount + 1)
        .fill(0);

    dp[0] = 1;

    for (const coin of coins) {
        for (let a = coin; a <= amount; a++) {
            dp[a] += dp[a - coin];
        }
    }

    return dp[amount];
}


/* ============================================================
   7. UNIQUE PATHS / GRID DP
   ============================================================

   Grid:

       Start -> End

   Can move:

       Right
       Down

   State:

       dp[row][col]

   Transition:

       dp[r][c] =
           dp[r - 1][c] +
           dp[r][c - 1]
*/


function uniquePaths(
    rows: number,
    cols: number
): number {
    const dp = new Array<number>(cols).fill(1);

    for (let r = 1; r < rows; r++) {
        for (let c = 1; c < cols; c++) {
            dp[c] += dp[c - 1];
        }
    }

    return dp[cols - 1];
}


/* ============================================================
   8. LONGEST INCREASING SUBSEQUENCE
   ============================================================

   Basic DP:

       dp[i] =
       length of LIS ending at i

   Transition:

       if nums[j] < nums[i]

           dp[i] = max(
               dp[i],
               dp[j] + 1
           )

   O(n²) solution.

   Senior follow-up:

       Can you do O(n log n)?

   Answer:

       Maintain tails[] and binary search.
*/


function lengthOfLIS(nums: number[]): number {
    const n = nums.length;

    if (n === 0) {
        return 0;
    }

    const dp = new Array<number>(n).fill(1);

    let answer = 1;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(
                    dp[i],
                    dp[j] + 1
                );
            }
        }

        answer = Math.max(answer, dp[i]);
    }

    return answer;
}


/* ============================================================
   9. LIS — O(n log n)
   ============================================================ */

function lengthOfLISOptimized(nums: number[]): number {
    const tails: number[] = [];

    for (const num of nums) {
        let left = 0;
        let right = tails.length;

        while (left < right) {
            const mid = Math.floor(
                (left + right) / 2
            );

            if (tails[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        tails[left] = num;
    }

    return tails.length;
}


/* ============================================================
   10. LONGEST COMMON SUBSEQUENCE
   ============================================================

   State:

       dp[i][j]

   Meaning:

       LCS of:

           text1[0..i)
           text2[0..j)

   Transition:

       if equal:

           dp[i][j] =
               dp[i - 1][j - 1] + 1

       else:

           max(
               dp[i - 1][j],
               dp[i][j - 1]
           )
*/


function longestCommonSubsequence(
    a: string,
    b: string
): number {
    const dp = Array.from(
        { length: a.length + 1 },
        () => new Array<number>(b.length + 1).fill(0)
    );

    for (let i = 1; i <= a.length; i++) {
        for (let j = 1; j <= b.length; j++) {
            if (a[i - 1] === b[j - 1]) {
                dp[i][j] =
                    dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(
                    dp[i - 1][j],
                    dp[i][j - 1]
                );
            }
        }
    }

    return dp[a.length][b.length];
}


/* ============================================================
   11. EDIT DISTANCE
   ============================================================

   Operations:

       Insert
       Delete
       Replace

   State:

       dp[i][j]

   Meaning:

       Minimum operations to transform
       first i characters into first j characters.

   If equal:

       dp[i][j] =
           dp[i - 1][j - 1]

   Otherwise:

       1 + min(
           insert,
           delete,
           replace
       )
*/


function editDistance(
    word1: string,
    word2: string
): number {
    const dp = Array.from(
        { length: word1.length + 1 },
        () => new Array<number>(
            word2.length + 1
        ).fill(0)
    );

    for (let i = 0; i <= word1.length; i++) {
        dp[i][0] = i;
    }

    for (let j = 0; j <= word2.length; j++) {
        dp[0][j] = j;
    }

    for (let i = 1; i <= word1.length; i++) {
        for (let j = 1; j <= word2.length; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] =
                    dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + Math.min(
                    dp[i - 1][j],     // delete
                    dp[i][j - 1],     // insert
                    dp[i - 1][j - 1]  // replace
                );
            }
        }
    }

    return dp[word1.length][word2.length];
}


/* ============================================================
   12. PARTITION EQUAL SUBSET SUM
   ============================================================

   Transform:

       total sum must be even.

   Target:

       total / 2

   Now becomes:

       0/1 subset sum.

   State:

       dp[s] = whether sum s is achievable.

   IMPORTANT:

       Iterate backward.

       Why?

       Each number can only be used once.
*/


function canPartition(nums: number[]): boolean {
    const total = nums.reduce(
        (sum, num) => sum + num,
        0
    );

    if (total % 2 !== 0) {
        return false;
    }

    const target = total / 2;

    const dp = new Array<boolean>(
        target + 1
    ).fill(false);

    dp[0] = true;

    for (const num of nums) {
        for (let sum = target; sum >= num; sum--) {
            dp[sum] =
                dp[sum] ||
                dp[sum - num];
        }
    }

    return dp[target];
}


/* ============================================================
   13. INTERVAL DP
   ============================================================

   Typical problems:

       Matrix Chain Multiplication
       Burst Balloons
       Palindrome Partitioning
       Strange Printer

   General state:

       dp[left][right]

   Meaning:

       Best answer for interval [left, right]

   General pattern:

       for (length ...)
           for (left ...)
               right = ...

               for (split ...)
                   dp[left][right] =
                       best(...)
*/


function intervalDPSkeleton(
    n: number
): number {
    const dp = Array.from(
        { length: n },
        () => new Array<number>(n).fill(0)
    );

    for (let length = 2; length <= n; length++) {
        for (let left = 0;
             left + length - 1 < n;
             left++) {

            const right =
                left + length - 1;

            for (let split = left;
                 split < right;
                 split++) {

                // dp[left][right] =
                //     best(
                //         dp[left][split],
                //         dp[split + 1][right]
                //     );
            }
        }
    }

    return dp[0][n - 1];
}


/* ============================================================
   14. TREE DP
   ============================================================

   Typical idea:

       Solve children first,
       then combine their results.

   Example:

       House Robber III

   State:

       [robThis, skipThis]

   This is fundamentally:

       DFS + DP

   The DP state belongs to a TREE NODE.
*/


interface TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
}


function robTree(
    root: TreeNode | null
): number {
    function dfs(
        node: TreeNode | null
    ): [number, number] {

        if (node === null) {
            return [0, 0];
        }

        const [leftRob, leftSkip] =
            dfs(node.left);

        const [rightRob, rightSkip] =
            dfs(node.right);

        const rob =
            node.val +
            leftSkip +
            rightSkip;

        const skip =
            Math.max(leftRob, leftSkip) +
            Math.max(rightRob, rightSkip);

        return [rob, skip];
    }

    const [rob, skip] = dfs(root);

    return Math.max(rob, skip);
}


/* ============================================================
   15. DAG DP
   ============================================================

   Dynamic Programming does NOT require arrays.

   On a DAG:

       dp[node]

   can represent the best result reaching that node.

   Important connection:

       DAG
       +
       Topological Order
       =
       DP

   Example:

       Longest path in a DAG.
*/


function longestPathDAG(
    n: number,
    edges: Array<[number, number]>
): number {
    const graph: number[][] =
        Array.from(
            { length: n },
            () => []
        );

    const indegree =
        new Array<number>(n).fill(0);

    for (const [u, v] of edges) {
        graph[u].push(v);
        indegree[v]++;
    }

    const queue: number[] = [];

    for (let i = 0; i < n; i++) {
        if (indegree[i] === 0) {
            queue.push(i);
        }
    }

    const dp =
        new Array<number>(n).fill(0);

    let answer = 0;

    let head = 0;

    while (head < queue.length) {
        const node = queue[head++];

        answer = Math.max(
            answer,
            dp[node]
        );

        for (const next of graph[node]) {
            dp[next] = Math.max(
                dp[next],
                dp[node] + 1
            );

            indegree[next]--;

            if (indegree[next] === 0) {
                queue.push(next);
            }
        }
    }

    return answer;
}


/* ============================================================
   16. BITMASK DP
   ============================================================

   Used when:

       n is small

   and state depends on:

       which elements have been selected.

   State:

       dp[mask]

   Example:

       Traveling Salesman Problem

   State:

       dp[mask][i]

   Meaning:

       Minimum cost to visit
       all nodes in mask
       and finish at i.
*/


function bitmaskDPSkeleton(
    n: number
): number {
    const totalMasks = 1 << n;

    const dp = Array.from(
        { length: totalMasks },
        () => new Array<number>(n)
            .fill(Infinity)
    );

    // Starting from node 0
    dp[1][0] = 0;

    for (let mask = 0;
         mask < totalMasks;
         mask++) {

        for (let current = 0;
             current < n;
             current++) {

            if (dp[mask][current] === Infinity) {
                continue;
            }

            for (let next = 0;
                 next < n;
                 next++) {

                if (mask & (1 << next)) {
                    continue;
                }

                const nextMask =
                    mask | (1 << next);

                // dp[nextMask][next] =
                //     min(...);
            }
        }
    }

    return 0;
}


/* ============================================================
   17. DP WITH STATE MACHINE
   ============================================================

   Common in stock problems.

   Example states:

       hold
       sold
       cooldown

   General idea:

       dp[i][state]

   Transition between states.

   Senior interview insight:

       Many "complicated" DP problems
       are simply finite-state machines.
*/


function maxProfitCooldown(
    prices: number[]
): number {
    let hold = -Infinity;
    let sold = 0;
    let cooldown = 0;

    for (const price of prices) {
        const previousHold = hold;
        const previousSold = sold;
        const previousCooldown = cooldown;

        hold = Math.max(
            previousHold,
            previousCooldown - price
        );

        sold =
            previousHold + price;

        cooldown =
            Math.max(
                previousCooldown,
                previousSold
            );
    }

    return Math.max(
        sold,
        cooldown
    );
}


/* ============================================================
   18. DP PATTERN RECOGNITION
   ============================================================

   Question asks:

   "How many ways?"

       -> Counting DP

   "Minimum cost?"

       -> Min DP

   "Maximum profit/value?"

       -> Max DP

   "Is it possible?"

       -> Boolean DP

   "Longest / shortest?"

       -> Optimization DP


   Common signals:

       - choose / skip
       - take / don't take
       - minimum / maximum
       - number of ways
       - subsequence
       - substring
       - transform
       - partition
       - interval
       - grid
       - repeated subproblem
*/


/* ============================================================
   19. TOP-DOWN vs BOTTOM-UP
   ============================================================

   TOP-DOWN

       Problem
          |
          v
       DFS
          |
          v
       Memoization


   BOTTOM-UP

       Base cases
          |
          v
       Smaller states
          |
          v
       Larger states


   Top-Down advantages:

       + Natural to derive
       + Computes only reachable states
       + Good for complex state spaces

   Bottom-Up advantages:

       + No recursion stack
       + Often faster
       + Easier space optimization
       + Better cache locality
*/


/* ============================================================
   20. SENIOR INTERVIEW CHECKLIST
   ============================================================

   Before coding:

       [ ] What is the state?
       [ ] What does each state mean?
       [ ] What are the choices?
       [ ] What is the transition?
       [ ] What are the base cases?
       [ ] Are states independent?
       [ ] What is the dependency direction?
       [ ] Can I use rolling array?
       [ ] Can I reduce dimensions?
       [ ] Is there a greedy alternative?
       [ ] Can binary search optimize the DP?
       [ ] Is this actually a graph / DAG problem?


   After coding:

       [ ] Test smallest input
       [ ] Test empty input
       [ ] Test one element
       [ ] Test impossible case
       [ ] Test duplicate values
       [ ] Test maximum constraint
       [ ] Explain Time Complexity
       [ ] Explain Space Complexity
*/


/* ============================================================
   21. SENIOR-LEVEL DP OPTIMIZATION MAP
   ============================================================

   O(n²)
      |
      +-- Can we binary search?
      |       |
      |       +-- LIS -> O(n log n)
      |
      +-- Can we exploit monotonicity?
      |
      +-- Monotonic Queue
      |
      +-- Divide & Conquer DP
      |
      +-- Knuth Optimization
      |
      +-- Convex Hull Trick
      |
      +-- Bitset optimization
      |
      +-- State compression


   Interview expectation:

       Don't immediately jump to advanced optimization.

       First produce a correct DP.

       Then ask:

           "Can we optimize the transition?"
*/


/* ============================================================
   22. MASTER TEMPLATE
   ============================================================

   function solve(input): output {

       // 1. Define state

       // 2. Initialize base cases

       // 3. Iterate states in dependency order

       // 4. Apply transition

       // 5. Return final state
   }


   Interview explanation:

       "I define dp[...] as ..."

       "For every state, I have two choices..."

       "Therefore the transition is ..."

       "The base case is ..."

       "The states depend on ..., so I iterate ..."

       "This gives O(...) time and O(...) space."

       "We can reduce the space to O(...) because
        each state only depends on ..."


   THIS is the most important skill:

       Don't memorize the solution.

       Derive the solution from the state.
*/


/* ============================================================
   23. PRACTICE ORDER
   ============================================================

   LEVEL 1 — Linear DP

       Climbing Stairs
       Min Cost Climbing Stairs
       House Robber
       House Robber II
       Decode Ways


   LEVEL 2 — Knapsack

       0/1 Knapsack
       Partition Equal Subset Sum
       Target Sum
       Coin Change
       Coin Change II


   LEVEL 3 — Grid

       Unique Paths
       Minimum Path Sum
       Triangle
       Dungeon Game


   LEVEL 4 — Sequence DP

       LIS
       LCS
       Edit Distance
       Longest Palindromic Subsequence


   LEVEL 5 — Interval DP

       Matrix Chain Multiplication
       Burst Balloons
       Strange Printer


   LEVEL 6 — Advanced

       Stock State Machine
       Tree DP
       DAG DP
       Bitmask DP
       Digit DP


   LEVEL 7 — Optimization

       O(n²) -> O(n log n)
       Monotonic Queue
       Divide & Conquer DP
       Convex Hull Trick
       Knuth Optimization
*/


/* ============================================================
   END
   ============================================================ */

\`\`\``,x=`---
title: Two Sum
number: 1
source: LeetCode
category: Arrays & Hashing
difficulty: Easy
tags: Array, Hash Table
url: https://leetcode.com/problems/two-sum/
---

## Problem
Given an integer array \`nums\` and an integer \`target\`, return the indices of the two numbers in the array such that they add up to \`target\`.

You may assume that each input has exactly one solution, and you may not use the same element twice. You can return the answer in any order.

**Example 1:**
\`\`\`
Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]
\`\`\`
Explanation: because \`nums[0] + nums[1] = 2 + 7 = 9\`.

**Example 2:**
\`\`\`
Input: nums = [3, 2, 4], target = 6
Output: [1, 2]
\`\`\`

**Example 3:**
\`\`\`
Input: nums = [3, 3], target = 6
Output: [0, 1]
\`\`\`

**Constraints:**
- \`2 <= nums.length <= 10^4\`
- \`-10^9 <= nums[i] <= 10^9\`
- \`-10^9 <= target <= 10^9\`
- Exactly one valid answer exists.

## Hints
- The simplest approach is to try every pair of elements (two nested loops) — O(n²).
- For each element \`nums[i]\`, the number you need to complete the pair is exactly \`target - nums[i]\`. The question becomes: "has this value appeared somewhere in the array, and at what index?"
- Using a Hash Map to store (value → index) for elements you've already visited lets you look up the missing complement in O(1), solving the problem in a single O(n) pass.

## Template

\`\`\`typescript
// just init the function name and paramaters. dont remove!.

function twoSum(nums: number[], target: number): number[] {
  // TODO
  return [];
}
\`\`\`

## Solution: Brute Force
- time: O(n²)
- space: O(1)

### Explanation
The most direct approach is to try every pair of indices \`(i, j)\` with \`i < j\`, checking whether \`nums[i] + nums[j]\` equals \`target\`. Since the problem guarantees exactly one solution, we can return as soon as we find a matching pair.

### Walkthrough
- Iterate \`i\` from \`0\` to \`n - 1\`.
- For each \`i\`, iterate \`j\` from \`i + 1\` to \`n - 1\`.
- If \`nums[i] + nums[j] === target\`, return \`[i, j]\`.

\`\`\`typescript
function twoSum(nums: number[], target: number): number[] {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}
\`\`\`

## Solution: Two-Pass Hash Map
- time: O(n)
- space: O(n)

### Explanation
As a stepping stone toward the fully optimized one-pass version, we can first build a Hash Map of every value to its index, then do a second pass checking, for each element, whether its complement exists in the map (making sure it isn't the same index as itself). This is a bit less elegant than the one-pass version below, but it's a natural way to arrive at the idea.

### Walkthrough
- Build a Hash Map \`indexOf\` mapping every value in \`nums\` to its index (later duplicates overwrite earlier ones, which is fine since we guard against reusing the same index).
- For each index \`i\`, compute \`complement = target - nums[i]\`.
- If \`complement\` is in \`indexOf\` and \`indexOf[complement] !== i\`, return \`[i, indexOf[complement]]\`.

\`\`\`typescript
function twoSum(nums: number[], target: number): number[] {
  const indexOf = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    indexOf.set(nums[i], i);
  }

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    const j = indexOf.get(complement);
    if (j !== undefined && j !== i) {
      return [i, j];
    }
  }

  return [];
}
\`\`\`

## Solution: One-Pass Hash Map
- time: O(n)
- space: O(n)

### Explanation
Instead of searching for the missing element with a nested loop or building the map upfront, we can store the values we've already visited, along with their indices, in a Hash Map as we go. For each new element \`nums[i]\`, we compute the "complement" \`complement = target - nums[i]\` and check whether that value has already appeared in the Hash Map. If it has, we've immediately found the answer pair without needing a second pass at all.

### Walkthrough
- Initialize an empty Hash Map \`seen\` mapping value → index.
- Iterate through each element \`nums[i]\`:
  - Compute \`complement = target - nums[i]\`.
  - If \`complement\` is already in \`seen\`, return \`[seen[complement], i]\`.
  - Otherwise, store \`nums[i] → i\` in \`seen\` and continue.

\`\`\`typescript
function twoSum(nums: number[], target: number): number[] {
  const seen = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (seen.has(complement)) {
      return [seen.get(complement)!, i];
    }
    seen.set(nums[i], i);
  }

  return [];
}
\`\`\`

## Solution: Sort + Two Pointers (Index-Preserving)
- time: O(n log n)
- space: O(n)

### Explanation
If we didn't need to return original indices, sorting the array and using two pointers moving inward from both ends would solve "does a pair sum to target" in O(n log n). Since the original indices matter here, we pair each value with its original index before sorting, so we can still recover the answer positions afterward. This is slower than the Hash Map solutions but useful to know as a pattern that generalizes to problems like 3Sum.

### Walkthrough
- Build an array of \`[value, originalIndex]\` pairs from \`nums\`.
- Sort this array by value.
- Set \`left = 0\` and \`right = n - 1\`.
- While \`left < right\`:
  - Compute \`sum = sorted[left][0] + sorted[right][0]\`.
  - If \`sum === target\`, return the two original indices (order doesn't matter).
  - If \`sum < target\`, move \`left\` forward.
  - If \`sum > target\`, move \`right\` backward.

\`\`\`typescript
function twoSum(nums: number[], target: number): number[] {
  const indexed: [number, number][] = nums.map((value, index) => [value, index]);
  indexed.sort((a, b) => a[0] - b[0]);

  let left = 0;
  let right = indexed.length - 1;

  while (left < right) {
    const sum = indexed[left][0] + indexed[right][0];
    if (sum === target) {
      return [indexed[left][1], indexed[right][1]];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
}
\`\`\`
`,ee=`---
title: Container With Most Water
number: 11
source: LeetCode
category: Two Pointers
difficulty: Medium
tags: Array, Two Pointers, Greedy
url: https://leetcode.com/problems/container-with-most-water/
---

## Problem
You are given an integer array \`height\` of length \`n\`. There are \`n\` vertical lines drawn such that the two endpoints of the \`i\`-th line are \`(i, 0)\` and \`(i, height[i])\`.

Find two lines that, together with the x-axis, form a container that holds the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

**Example 1:**
\`\`\`
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
\`\`\`
Explanation: the lines at index 1 (height 8) and index 8 (height 7) form a container with width \`8 - 1 = 7\` and height \`min(8, 7) = 7\`, giving area \`49\`, which is the maximum possible.

**Example 2:**
\`\`\`
Input: height = [1,1]
Output: 1
\`\`\`

**Constraints:**
- \`n == height.length\`
- \`2 <= n <= 10^5\`
- \`0 <= height[i] <= 10^4\`

## Hints
- The area between two lines at indices \`i\` and \`j\` is \`min(height[i], height[j]) * (j - i)\` — it's limited by the shorter of the two lines, not the taller one.
- Trying every pair of lines works but is O(n²), which is too slow for the input size.
- Start with two pointers at the widest possible container (both ends of the array). At each step, moving the pointer at the **shorter** line inward is the only move that could possibly increase the area — moving the taller line's pointer inward can never help, since the width shrinks while the limiting height can only stay the same or get worse.

## Template

\`\`\`typescript
// just init the function name and paramaters. dont remove!.

function maxArea(height: number[]): number {
  // TODO
  return 0;
}
\`\`\`

## Solution: Brute Force
- time: O(n²)
- space: O(1)

### Explanation
The most direct approach checks every possible pair of lines \`(i, j)\`, computing the area \`min(height[i], height[j]) * (j - i)\` for each pair, and keeping track of the maximum area seen.

### Walkthrough
- Initialize \`maxWater = 0\`.
- For each \`i\` from \`0\` to \`n - 1\`:
  - For each \`j\` from \`i + 1\` to \`n - 1\`:
    - Compute \`area = min(height[i], height[j]) * (j - i)\`.
    - Update \`maxWater = max(maxWater, area)\`.
- Return \`maxWater\`.

\`\`\`typescript
function maxArea(height: number[]): number {
  let maxWater = 0;
  const n = height.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const area = Math.min(height[i], height[j]) * (j - i);
      maxWater = Math.max(maxWater, area);
    }
  }

  return maxWater;
}
\`\`\`

## Solution: Two Pointers (Greedy)
- time: O(n)
- space: O(1)

### Explanation
Start with the widest possible container — pointers at the very first and very last line. At each step, the area is limited by the shorter of the two current lines. The key greedy insight is: if we move the pointer at the *taller* line inward, the width strictly decreases while the limiting height can only stay the same or decrease (since it's still bounded by the shorter line) — so that move can never produce a better area. Therefore, the only move worth making is to move the pointer at the *shorter* line inward, hoping to find a taller line that could increase the limiting height enough to offset the reduced width. Repeating this until the pointers meet is guaranteed to consider the optimal container, since every "wrong" move is provably never beneficial.

### Walkthrough
- Initialize \`left = 0\`, \`right = n - 1\`, and \`maxWater = 0\`.
- While \`left < right\`:
  - Compute \`area = min(height[left], height[right]) * (right - left)\`.
  - Update \`maxWater = max(maxWater, area)\`.
  - If \`height[left] < height[right]\`, move \`left\` forward (the left line is the limiting factor).
  - Otherwise, move \`right\` backward (the right line is the limiting factor, or they're equal).
- Return \`maxWater\`.

\`\`\`typescript
function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    maxWater = Math.max(maxWater, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
}
\`\`\`
`,S=`---
title: Best Time to Buy and Sell Stock
number: 121
source: LeetCode
category: Sliding Window
difficulty: Easy
tags: Array, Dynamic Programming, Sliding Window
url: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
---

## Problem
You are given an array \`prices\` where \`prices[i]\` is the price of a given stock on the \`i\`-th day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return \`0\`.

**Example 1:**
\`\`\`
Input: prices = [7,1,5,3,6,4]
Output: 5
\`\`\`
Explanation: buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5. Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

**Example 2:**
\`\`\`
Input: prices = [7,6,4,3,1]
Output: 0
\`\`\`
Explanation: prices are decreasing every day, so no transaction is done and the max profit is 0.

**Constraints:**
- \`1 <= prices.length <= 10^5\`
- \`0 <= prices[i] <= 10^4\`

## Hints
- The brute force approach tries every pair of buy/sell days, which is O(n²).
- To sell at a profit on day \`i\`, you'd want to have bought at the lowest price seen on any day before \`i\`. Try tracking the minimum price seen so far as you scan through the array.
- This is a "shrink-or-grow" Sliding Window in disguise: keep a \`left\` pointer at the lowest price seen so far, and a \`right\` pointer scanning forward computing potential profit, updating \`left\` whenever a new lower price is found.

## Template

\`\`\`typescript
// just init the function name and paramaters. dont remove!.

function maxProfit(prices: number[]): number {
  // TODO
  return 0;
}
\`\`\`

## Solution: Brute Force
- time: O(n²)
- space: O(1)

### Explanation
The most direct approach checks every possible pair of buy day \`i\` and sell day \`j\` (with \`j > i\`), computing the profit \`prices[j] - prices[i]\` for each pair and keeping track of the best one found.

### Walkthrough
- Initialize \`maxProfit = 0\`.
- For each \`i\` from \`0\` to \`n - 2\`:
  - For each \`j\` from \`i + 1\` to \`n - 1\`:
    - Compute \`profit = prices[j] - prices[i]\`.
    - Update \`maxProfit = max(maxProfit, profit)\`.
- Return \`maxProfit\`.

\`\`\`typescript
function maxProfit(prices: number[]): number {
  let maxProfit = 0;
  const n = prices.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const profit = prices[j] - prices[i];
      maxProfit = Math.max(maxProfit, profit);
    }
  }

  return maxProfit;
}
\`\`\`

## Solution: Sliding Window (One Pass)
- time: O(n)
- space: O(1)

### Explanation
We can think of this as a Sliding Window with a \`left\` pointer marking the best day to buy so far and a \`right\` pointer scanning forward as the candidate sell day. At each \`right\` position, if \`prices[right] < prices[left]\`, the window's "buy point" should shift — since buying at this lower price is strictly better going forward, we move \`left\` to \`right\`. Otherwise, we compute the profit \`prices[right] - prices[left]\` and update the best profit seen. Because \`left\` only ever moves forward and \`right\` scans forward exactly once, this achieves O(n) time using just two tracked values.

### Walkthrough
- Initialize \`left = 0\`, \`right = 1\`, and \`maxProfit = 0\`.
- While \`right < n\`:
  - If \`prices[right] < prices[left]\`, move \`left\` to \`right\` (a new lower buy price has been found).
  - Otherwise, compute \`profit = prices[right] - prices[left]\` and update \`maxProfit = max(maxProfit, profit)\`.
  - Move \`right\` forward.
- Return \`maxProfit\`.

\`\`\`typescript
function maxProfit(prices: number[]): number {
  let left = 0;
  let right = 1;
  let maxProfit = 0;

  while (right < prices.length) {
    if (prices[right] < prices[left]) {
      left = right;
    } else {
      const profit = prices[right] - prices[left];
      maxProfit = Math.max(maxProfit, profit);
    }
    right++;
  }

  return maxProfit;
}
\`\`\`

## Solution: Dynamic Programming (Running Minimum)
- time: O(n)
- space: O(1)

### Explanation
This is functionally equivalent to the sliding window approach but framed explicitly as a Dynamic Programming state update: at each day, track \`minPriceSoFar\`, the lowest price seen up to and including the current day, and update the running best profit as \`max(bestProfit, currentPrice - minPriceSoFar)\`. This framing generalizes naturally to the harder "Buy and Sell Stock II/III/IV" variants that require explicit DP states.

### Walkthrough
- Initialize \`minPriceSoFar = prices[0]\` and \`bestProfit = 0\`.
- For each price starting from index \`1\`:
  - Update \`bestProfit = max(bestProfit, price - minPriceSoFar)\`.
  - Update \`minPriceSoFar = min(minPriceSoFar, price)\`.
- Return \`bestProfit\`.

\`\`\`typescript
function maxProfit(prices: number[]): number {
  let minPriceSoFar = prices[0];
  let bestProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    bestProfit = Math.max(bestProfit, prices[i] - minPriceSoFar);
    minPriceSoFar = Math.min(minPriceSoFar, prices[i]);
  }

  return bestProfit;
}
\`\`\`
`,C=`---
title: Valid Palindrome
number: 125
source: LeetCode
category: Two Pointers
difficulty: Easy
tags: Two Pointers, String
url: https://leetcode.com/problems/valid-palindrome/
---

## Problem
A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string \`s\`, return \`true\` if it is a palindrome, or \`false\` otherwise.

**Example 1:**
\`\`\`
Input: s = "A man, a plan, a canal: Panama"
Output: true
\`\`\`
Explanation: after cleaning, the string becomes "amanaplanacanalpanama", which is a palindrome.

**Example 2:**
\`\`\`
Input: s = "race a car"
Output: false
\`\`\`
Explanation: after cleaning, the string becomes "raceacar", which is not a palindrome.

**Example 3:**
\`\`\`
Input: s = " "
Output: true
\`\`\`
Explanation: after removing all non-alphanumeric characters, the string is empty, and an empty string is a palindrome.

**Constraints:**
- \`1 <= s.length <= 2 * 10^5\`
- \`s\` consists only of printable ASCII characters.

## Hints
- One approach is to build a cleaned string (lowercase, alphanumeric only) first, then check if it equals its own reverse.
- A more space-efficient approach avoids building a second string: use two pointers starting at both ends of the original string, skip over non-alphanumeric characters on either side, and compare the remaining characters (case-insensitively) as the pointers move toward each other.
- The two-pointer approach only needs O(1) extra space, since it never allocates a new cleaned string.

## Template

\`\`\`typescript
// just init the function name and paramaters. dont remove!.

function isPalindrome(s: string): boolean {
  // TODO
  return false;
}
\`\`\`

## Solution: Build-and-Compare (String Reversal)
- time: O(n)
- space: O(n)

### Explanation
The most direct approach follows the problem statement literally: build a cleaned version of the string containing only lowercase alphanumeric characters, then compare that cleaned string to its own reverse. If they match, the original string is a palindrome.

### Walkthrough
- Filter \`s\` to keep only alphanumeric characters, converting each to lowercase, producing \`cleaned\`.
- Reverse \`cleaned\` to get \`reversed\`.
- Return whether \`cleaned === reversed\`.

\`\`\`typescript
function isPalindrome(s: string): boolean {
  const cleaned = s
    .toLowerCase()
    .split("")
    .filter((ch) => /[a-z0-9]/.test(ch))
    .join("");

  const reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}
\`\`\`

## Solution: Two Pointers
- time: O(n)
- space: O(1)

### Explanation
Instead of building an entirely new string, we can compare characters directly within the original string using two pointers — one starting at the beginning (\`left\`) and one at the end (\`right\`). At each step, we skip over any non-alphanumeric characters on either side. Once both pointers land on alphanumeric characters, we compare them case-insensitively; if they differ, the string isn't a palindrome. We continue moving the pointers toward each other until they meet or cross.

### Walkthrough
- Initialize \`left = 0\` and \`right = s.length - 1\`.
- While \`left < right\`:
  - Advance \`left\` while \`s[left]\` is not alphanumeric.
  - Retreat \`right\` while \`s[right]\` is not alphanumeric.
  - If \`left >= right\`, stop (all remaining characters have been checked).
  - Compare \`s[left].toLowerCase()\` and \`s[right].toLowerCase()\`; if they differ, return \`false\`.
  - Move \`left\` forward and \`right\` backward.
- If the pointers cross without a mismatch, return \`true\`.

\`\`\`typescript
function isPalindrome(s: string): boolean {
  const isAlphanumeric = (ch: string): boolean => /[a-z0-9]/i.test(ch);

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !isAlphanumeric(s[left])) {
      left++;
    }
    while (left < right && !isAlphanumeric(s[right])) {
      right--;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}
\`\`\`
`,te=`---
title: Longest Consecutive Sequence
number: 128
source: LeetCode
category: Arrays & Hashing
difficulty: Medium
tags: Array, Hash Table, Union Find
url: https://leetcode.com/problems/longest-consecutive-sequence/
---

## Problem
Given an unsorted array of integers \`nums\`, return the length of the longest sequence of consecutive integers (numbers that follow each other with a difference of 1) that can be formed using elements from \`nums\`.

You must write an algorithm that runs in **O(n)** time.

**Example 1:**
\`\`\`
Input: nums = [100,4,200,1,3,2]
Output: 4
\`\`\`
Explanation: the longest consecutive sequence is \`[1, 2, 3, 4]\`, which has length 4.

**Example 2:**
\`\`\`
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
\`\`\`
Explanation: the longest consecutive sequence is \`[0, 1, 2, 3, 4, 5, 6, 7, 8]\`, which has length 9.

**Constraints:**
- \`0 <= nums.length <= 10^5\`
- \`-10^9 <= nums[i] <= 10^9\`

## Hints
- Sorting the array first would let you find consecutive runs easily, but sorting costs O(n log n), which doesn't meet the required O(n) time.
- Put all numbers into a Hash Set for O(1) lookups. For each number, check whether \`number - 1\` exists in the set — if it doesn't, this number is the **start** of a potential sequence.
- Only start counting a sequence's length from numbers that are confirmed sequence starts (i.e. \`number - 1\` is not in the set). This guarantees that each number is only ever the starting point of at most one sequence-counting walk, which is what keeps the overall algorithm at O(n) instead of degrading to O(n²).

## Template

\`\`\`typescript
// just init the function name and paramaters. dont remove!.

function longestConsecutive(nums: number[]): number {
  // TODO
  return 0;
}
\`\`\`

## Solution: Sorting
- time: O(n log n)
- space: O(n) (or O(1) extra if sorting in place and duplicates are handled without extra structures)

### Explanation
Even though it doesn't meet the strict O(n) requirement, sorting is the most natural first approach to understand. Once the array is sorted, consecutive integers become adjacent (aside from duplicates, which we skip). We can then scan once, tracking the length of the current consecutive run and resetting it whenever there's a gap greater than 1.

### Walkthrough
- If \`nums\` is empty, return 0.
- Sort \`nums\` in ascending order.
- Initialize \`longest = 1\` and \`current = 1\`.
- Iterate from index 1 to the end:
  - If \`nums[i] === nums[i - 1]\`, skip (duplicate, doesn't break or extend the run).
  - Else if \`nums[i] === nums[i - 1] + 1\`, increment \`current\` and update \`longest = max(longest, current)\`.
  - Otherwise, reset \`current = 1\` (the run is broken).
- Return \`longest\`.

\`\`\`typescript
function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) return 0;

  const sorted = [...nums].sort((a, b) => a - b);
  let longest = 1;
  let current = 1;

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] === sorted[i - 1]) {
      continue;
    } else if (sorted[i] === sorted[i - 1] + 1) {
      current++;
      longest = Math.max(longest, current);
    } else {
      current = 1;
    }
  }

  return longest;
}
\`\`\`

## Solution: Hash Set with Sequence-Start Detection
- time: O(n)
- space: O(n)

### Explanation
First, we put every number into a Hash Set so we can check membership in O(1). Then, for each number in the set, we ask: "is this number the start of a sequence?" It's a start exactly when \`number - 1\` is **not** in the set — meaning there's nothing extending the sequence to the left. For each such start, we count forward (\`number + 1\`, \`number + 2\`, ...) as long as those values exist in the set, tracking how long the run is. Because we only ever start counting from true sequence starts, every number in the array gets visited by the inner counting loop at most once across the entire algorithm, keeping the total work at O(n).

### Walkthrough
- Put all numbers from \`nums\` into a Hash Set \`numSet\`.
- Initialize \`longest = 0\`.
- For each \`num\` in \`numSet\`:
  - If \`num - 1\` is in \`numSet\`, skip it — it's not a sequence start.
  - Otherwise, this is a sequence start. Set \`length = 1\` and \`current = num\`.
  - While \`current + 1\` is in \`numSet\`, increment \`current\` and increment \`length\`.
  - Update \`longest = max(longest, length)\`.
- Return \`longest\`.

\`\`\`typescript
function longestConsecutive(nums: number[]): number {
  const numSet = new Set(nums);
  let longest = 0;

  for (const num of numSet) {
    if (numSet.has(num - 1)) {
      continue;
    }

    let length = 1;
    let current = num;
    while (numSet.has(current + 1)) {
      current++;
      length++;
    }

    longest = Math.max(longest, length);
  }

  return longest;
}
\`\`\`

## Solution: Union-Find (Disjoint Set Union)
- time: O(n * α(n)), where α is the inverse Ackermann function — effectively O(n) in practice
- space: O(n)

### Explanation
We can model the problem as a graph-connectivity question: treat each number as its own node, and whenever two numbers \`x\` and \`x + 1\` both exist in the array, union their sets together. After processing every number this way, each connected component represents one consecutive run, and the size of the largest component is the answer. A Union-Find (Disjoint Set Union) structure with path compression and union by size/rank makes each union and find operation nearly O(1) amortized, so the overall algorithm is nearly linear.

### Walkthrough
- Deduplicate \`nums\` into a list of unique values, and map each value to an index for the Union-Find structure.
- Initialize \`parent[i] = i\` and \`size[i] = 1\` for every unique value's index.
- For each unique value \`x\`, if \`x + 1\` also exists in the map, union the set containing \`x\` with the set containing \`x + 1\`.
- After all unions, find the root of every element and track the maximum \`size[root]\` seen — this is the length of the longest consecutive sequence.
- If \`nums\` is empty, return 0 directly.

\`\`\`typescript
function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) return 0;

  const uniqueValues = Array.from(new Set(nums));
  const indexOf = new Map<number, number>();
  uniqueValues.forEach((value, i) => indexOf.set(value, i));

  const parent = uniqueValues.map((_, i) => i);
  const size = new Array(uniqueValues.length).fill(1);

  function find(i: number): number {
    while (parent[i] !== i) {
      parent[i] = parent[parent[i]]; // path compression
      i = parent[i];
    }
    return i;
  }

  function union(i: number, j: number): void {
    const rootI = find(i);
    const rootJ = find(j);
    if (rootI === rootJ) return;

    if (size[rootI] < size[rootJ]) {
      parent[rootI] = rootJ;
      size[rootJ] += size[rootI];
    } else {
      parent[rootJ] = rootI;
      size[rootI] += size[rootJ];
    }
  }

  for (const value of uniqueValues) {
    const nextIndex = indexOf.get(value + 1);
    if (nextIndex !== undefined) {
      union(indexOf.get(value)!, nextIndex);
    }
  }

  let longest = 0;
  for (let i = 0; i < uniqueValues.length; i++) {
    longest = Math.max(longest, size[find(i)]);
  }

  return longest;
}
\`\`\`
`,ne=`---
title: 3Sum
number: 15
source: LeetCode
category: Two Pointers
difficulty: Medium
tags: Array, Two Pointers, Sorting
url: https://leetcode.com/problems/3sum/
---

## Problem
Given an integer array \`nums\`, return all the triplets \`[nums[i], nums[j], nums[k]]\` such that \`i != j\`, \`i != k\`, and \`j != k\`, and \`nums[i] + nums[j] + nums[k] == 0\`.

Notice that the solution set must not contain duplicate triplets.

**Example 1:**
\`\`\`
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
\`\`\`
Explanation: \`nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0\`. \`nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0\`. \`nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0\`. The distinct triplets are \`[-1,0,1]\` and \`[-1,-1,2]\`.

**Example 2:**
\`\`\`
Input: nums = [0,1,1]
Output: []
\`\`\`
Explanation: no triplet sums to 0.

**Example 3:**
\`\`\`
Input: nums = [0,0,0]
Output: [[0,0,0]]
\`\`\`

**Constraints:**
- \`3 <= nums.length <= 3000\`
- \`-10^5 <= nums[i] <= 10^5\`

## Hints
- The brute force approach tries all triplets directly, but that's O(n³) and also awkward to de-duplicate.
- Sorting the array first makes duplicate handling much easier (equal values become adjacent) and unlocks the Two Pointers technique: fix one number, then use two pointers to find pairs in the rest of the array that sum to the negative of that number, exactly like the Two Sum II problem.
- To avoid duplicate triplets in the output, skip over repeated values both for the fixed outer element and for the two inner pointers whenever you find or reject a triplet.

## Template

\`\`\`typescript
// just init the function name and paramaters. dont remove!.

function threeSum(nums: number[]): number[][] {
  // TODO
  return [];
}
\`\`\`

## Solution: Brute Force
- time: O(n³)
- space: O(1) extra (excluding the space used to store duplicate results before deduplication)

### Explanation
The most direct approach checks every possible triplet of indices \`(i, j, k)\` with \`i < j < k\`, testing whether they sum to zero. To avoid duplicate triplets in the output, we can sort the array first and skip over triplets that would repeat a previously found combination of values.

### Walkthrough
- Sort \`nums\` (this makes duplicate-skipping straightforward).
- For each \`i\` from \`0\` to \`n - 3\`, skip if \`nums[i] === nums[i - 1]\` (avoids duplicate first elements).
- For each \`j\` from \`i + 1\` to \`n - 2\`, skip if \`j > i + 1 && nums[j] === nums[j - 1]\`.
- For each \`k\` from \`j + 1\` to \`n - 1\`, skip if \`k > j + 1 && nums[k] === nums[k - 1]\`.
- If \`nums[i] + nums[j] + nums[k] === 0\`, add \`[nums[i], nums[j], nums[k]]\` to the result.

\`\`\`typescript
function threeSum(nums: number[]): number[][] {
  const sorted = [...nums].sort((a, b) => a - b);
  const n = sorted.length;
  const result: number[][] = [];

  for (let i = 0; i < n - 2; i++) {
    if (i > 0 && sorted[i] === sorted[i - 1]) continue;

    for (let j = i + 1; j < n - 1; j++) {
      if (j > i + 1 && sorted[j] === sorted[j - 1]) continue;

      for (let k = j + 1; k < n; k++) {
        if (k > j + 1 && sorted[k] === sorted[k - 1]) continue;

        if (sorted[i] + sorted[j] + sorted[k] === 0) {
          result.push([sorted[i], sorted[j], sorted[k]]);
        }
      }
    }
  }

  return result;
}
\`\`\`

## Solution: Sort + Two Pointers
- time: O(n²)
- space: O(1) extra (not counting the sort and output)

### Explanation
After sorting, we fix one element \`nums[i]\` as the smallest of the triplet, then use the Two Pointers technique (as in Two Sum II) to find two other numbers in the remainder of the array that sum to \`-nums[i]\`. Since the array is sorted, moving \`left\` rightward increases the sum and moving \`right\` leftward decreases it, letting us find all valid pairs for a fixed \`i\` in a single linear sweep. Doing this for every \`i\` gives O(n²) total. Careful skipping of duplicate values — for both the fixed element and the two pointers — avoids duplicate triplets in the output.

### Walkthrough
- Sort \`nums\`.
- For each index \`i\` from \`0\` to \`n - 3\`:
  - If \`nums[i] > 0\`, break early — since the array is sorted, no triplet starting here (or later) can sum to zero.
  - If \`i > 0 && nums[i] === nums[i - 1]\`, skip (avoids duplicate first elements).
  - Set \`left = i + 1\` and \`right = n - 1\`.
  - While \`left < right\`:
    - Compute \`sum = nums[i] + nums[left] + nums[right]\`.
    - If \`sum === 0\`, record the triplet, then advance \`left\` and retreat \`right\`, skipping over any duplicate values at the new positions.
    - If \`sum < 0\`, increment \`left\` (need a larger sum).
    - If \`sum > 0\`, decrement \`right\` (need a smaller sum).

\`\`\`typescript
function threeSum(nums: number[]): number[][] {
  const sorted = [...nums].sort((a, b) => a - b);
  const n = sorted.length;
  const result: number[][] = [];

  for (let i = 0; i < n - 2; i++) {
    if (sorted[i] > 0) break;
    if (i > 0 && sorted[i] === sorted[i - 1]) continue;

    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      const sum = sorted[i] + sorted[left] + sorted[right];

      if (sum === 0) {
        result.push([sorted[i], sorted[left], sorted[right]]);
        left++;
        right--;
        while (left < right && sorted[left] === sorted[left - 1]) left++;
        while (left < right && sorted[right] === sorted[right + 1]) right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}
\`\`\`

## Solution: Hash Set (No Sorting Needed for the Core Logic)
- time: O(n²)
- space: O(n)

### Explanation
An alternative to two pointers: fix the first element \`nums[i]\`, then for the remaining sub-array, solve a "two sum equals \`-nums[i]\`" problem using a Hash Set, similar to the classic Two Sum approach. For each element \`nums[j]\` in the sub-array, check whether \`-nums[i] - nums[j]\` has already been seen; if so, we've found a valid triplet. A \`Set\` of stringified sorted triplets is used at the end to filter out duplicate results, since this approach doesn't naturally skip duplicates the way the two-pointer version does.

### Walkthrough
- Sort \`nums\` (still helpful for consistent duplicate-triplet formatting, though not strictly required for the two-sum-via-hash-set logic itself).
- Initialize an empty Set \`seenTriplets\` to track unique results (as serialized strings).
- For each index \`i\` from \`0\` to \`n - 3\`:
  - Initialize an empty Hash Set \`seen\` for this inner pass.
  - For each \`j\` from \`i + 1\` to \`n - 1\`:
    - Compute \`complement = -nums[i] - nums[j]\`.
    - If \`complement\` is in \`seen\`, form the triplet \`[nums[i], complement, nums[j]]\`, sort it, and add its serialized form to \`seenTriplets\` if not already present, pushing it to the result.
    - Add \`nums[j]\` to \`seen\`.
- Return the collected unique triplets.

\`\`\`typescript
function threeSum(nums: number[]): number[][] {
  const sorted = [...nums].sort((a, b) => a - b);
  const n = sorted.length;
  const result: number[][] = [];
  const seenTriplets = new Set<string>();

  for (let i = 0; i < n - 2; i++) {
    const seen = new Set<number>();

    for (let j = i + 1; j < n; j++) {
      const complement = -sorted[i] - sorted[j];

      if (seen.has(complement)) {
        const triplet = [sorted[i], complement, sorted[j]].sort((a, b) => a - b);
        const key = triplet.join(",");
        if (!seenTriplets.has(key)) {
          seenTriplets.add(key);
          result.push(triplet);
        }
      }

      seen.add(sorted[j]);
    }
  }

  return result;
}
\`\`\`
`,w=`---
title: Evaluate Reverse Polish Notation
number: 150
source: LeetCode
category: Stack
difficulty: Medium
tags: Array, Math, Stack
url: https://leetcode.com/problems/evaluate-reverse-polish-notation/
---

## Problem
You are given an array of strings \`tokens\` that represents an arithmetic expression in **Reverse Polish Notation** (postfix notation).

Evaluate the expression. Return an integer that represents the value of the expression.

**Note:**
- The valid operators are \`'+'\`, \`'-'\`, \`'*'\`, and \`'/'\`.
- Each operand may be an integer or another expression.
- The division between two integers always truncates toward zero.
- There will not be any division by zero.
- The input represents a valid arithmetic expression in a reverse polish notation.
- The answer and all intermediate calculations can be represented in a 32-bit integer.

**Example 1:**
\`\`\`
Input: tokens = ["2","1","+","3","*"]
Output: 9
\`\`\`
Explanation: \`((2 + 1) * 3) = 9\`.

**Example 2:**
\`\`\`
Input: tokens = ["4","13","5","/","+"]
Output: 6
\`\`\`
Explanation: \`(4 + (13 / 5)) = 6\`.

**Example 3:**
\`\`\`
Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
Output: 22
\`\`\`

**Constraints:**
- \`1 <= tokens.length <= 10^4\`
- \`tokens[i]\` is either an operator: \`"+"\`, \`"-"\`, \`"*"\`, or \`"/"\`, or an integer in the range \`[-200, 200]\`.

## Hints
- In Reverse Polish Notation, an operator always applies to the two operands that came immediately before it — this "most recent operands first" structure is a natural fit for a Stack.
- Scan the tokens left to right: push numbers onto the stack, and whenever you see an operator, pop the top two numbers off, apply the operator, and push the result back onto the stack.
- Be careful with operand order for non-commutative operators (\`-\` and \`/\`): the second-popped number is the left-hand operand and the first-popped number is the right-hand operand, since the more recently pushed value came second in the original expression.

## Template

\`\`\`typescript
// just init the function name and paramaters. dont remove!.

function evalRPN(tokens: string[]): number {
  // TODO
  return 0;
}
\`\`\`

## Solution: Stack
- time: O(n)
- space: O(n)

### Explanation
We process the tokens from left to right using a Stack. Whenever we encounter a number, we push it onto the stack. Whenever we encounter an operator, we pop the two most recently pushed numbers off the stack — these are exactly the two operands the operator should apply to, per the rules of postfix notation — compute the result, and push it back onto the stack. By the end, the stack contains exactly one number: the final result of the whole expression.

### Walkthrough
- Initialize an empty stack.
- For each token in \`tokens\`:
  - If the token is a number, push it (as a number) onto the stack.
  - Otherwise (it's an operator):
    - Pop the top of the stack as \`b\` (the right-hand operand).
    - Pop the top of the stack as \`a\` (the left-hand operand).
    - Apply the operator to \`a\` and \`b\` (using \`Math.trunc\` for division, to truncate toward zero as required).
    - Push the result back onto the stack.
- Return the single remaining value on the stack.

\`\`\`typescript
function evalRPN(tokens: string[]): number {
  const stack: number[] = [];
  const operators = new Set(["+", "-", "*", "/"]);

  for (const token of tokens) {
    if (!operators.has(token)) {
      stack.push(Number(token));
      continue;
    }

    const b = stack.pop()!;
    const a = stack.pop()!;

    let result: number;
    switch (token) {
      case "+":
        result = a + b;
        break;
      case "-":
        result = a - b;
        break;
      case "*":
        result = a * b;
        break;
      case "/":
        result = Math.trunc(a / b);
        break;
      default:
        throw new Error(\`Unknown operator: \${token}\`);
    }

    stack.push(result);
  }

  return stack[stack.length - 1];
}
\`\`\`
`,T="---\ntitle: Find Minimum in Rotated Sorted Array\nnumber: 153\nsource: LeetCode\ncategory: Binary Search\ndifficulty: Medium\ntags: Array, Binary Search\nurl: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/\n---\n\n## Problem\nSuppose an array of length `n` sorted in ascending order is rotated between `1` and `n` times. For example, the array `nums = [0,1,2,4,5,6,7]` might become `[4,5,6,7,0,1,2]` if it was rotated 4 times, or `[0,1,2,4,5,6,7]` if it was rotated 7 times.\n\nGiven the sorted rotated array `nums` of unique elements, return the minimum element of this array.\n\nYou must write an algorithm that runs in `O(log n)` time.\n\n**Example 1:**\n```\nInput: nums = [3,4,5,1,2]\nOutput: 1\n```\nExplanation: the original array was [1,2,3,4,5] rotated 3 times.\n\n**Example 2:**\n```\nInput: nums = [4,5,6,7,0,1,2]\nOutput: 0\n```\nExplanation: the original array was [0,1,2,4,5,6,7] and it was rotated 4 times.\n\n**Example 3:**\n```\nInput: nums = [11,13,15,17]\nOutput: 11\n```\nExplanation: the original array was [11,13,15,17] and it was rotated 4 times.\n\n**Constraints:**\n- `n == nums.length`\n- `1 <= n <= 5000`\n- `-5000 <= nums[i] <= 5000`\n- All the integers of `nums` are unique.\n- `nums` is sorted and rotated between `1` and `n` times.\n\n## Hints\n- Scanning the array to find the minimum works but is O(n), which doesn't meet the O(log n) requirement — we need to exploit the fact that the array is a rotation of a sorted array.\n- In a rotated sorted array, there's exactly one point where the order \"breaks\" (where an element is smaller than the one before it) — that break point is the minimum. Everything before the break is part of a sorted run starting at the original first element; everything from the break onward is part of a sorted run ending at the original last element.\n- Use Binary Search: compare `nums[mid]` to `nums[right]`. If `nums[mid] > nums[right]`, the minimum must be somewhere in the right half (the break point hasn't been reached yet), so move `left` past `mid`. If `nums[mid] < nums[right]`, the right half is fully sorted, so the minimum is at `mid` or somewhere in the left half, so move `right` to `mid`.\n\n## Template\n\n```typescript\n// just init the function name and paramaters. dont remove!.\n\nfunction findMin(nums: number[]): number {\n  // TODO\n  return 0;\n}\n```\n\n## Solution: Binary Search on the Rotation Point\n- time: O(log n)\n- space: O(1)\n\n### Explanation\nA rotated sorted array consists of two sorted runs: a segment from the original start up to the rotation point, and a segment from the rotation point to the original end, with the rotation point marking where the values \"wrap around\" and drop down to the smallest value. We can binary search for this rotation point by comparing the middle element to the rightmost element of the current search range. If `nums[mid] > nums[right]`, the array must \"wrap around\" somewhere between `mid` and `right`, meaning the minimum is in the right half, strictly after `mid` (so `mid` itself can be excluded, since we know it's not the minimum — something smaller lies ahead). If `nums[mid] <= nums[right]`, the segment from `mid` to `right` is entirely sorted with no wrap-around, meaning the minimum is either `mid` itself or somewhere in the left half, so we keep `mid` as a candidate and search `[left, mid]`.\n\n### Walkthrough\n- Initialize `left = 0` and `right = nums.length - 1`.\n- While `left < right`:\n  - Compute `mid = Math.floor((left + right) / 2)`.\n  - If `nums[mid] > nums[right]`, the minimum is strictly after `mid`, so set `left = mid + 1`.\n  - Otherwise, the minimum is at `mid` or before it, so set `right = mid`.\n- Once `left === right`, this index holds the minimum value. Return `nums[left]`.\n\n```typescript\nfunction findMin(nums: number[]): number {\n  let left = 0;\n  let right = nums.length - 1;\n\n  while (left < right) {\n    const mid = Math.floor((left + right) / 2);\n\n    if (nums[mid] > nums[right]) {\n      left = mid + 1;\n    } else {\n      right = mid;\n    }\n  }\n\n  return nums[left];\n}\n```\n\n## Solution: Binary Search Comparing to the Leftmost Element\n- time: O(log n)\n- space: O(1)\n\n### Explanation\nAn alternative framing of the same idea compares `nums[mid]` to `nums[0]` (the leftmost element of the whole array) instead of `nums[right]`. If `nums[mid] >= nums[0]`, then everything from the start up to `mid` is part of the same ascending run as the original array's beginning — meaning the rotation point (and thus the minimum) must be somewhere after `mid`. If `nums[mid] < nums[0]`, then the rotation point has already occurred somewhere at or before `mid`, so we search the left portion, keeping `mid` as a candidate. This version requires special care for arrays where no rotation occurred at all (already fully sorted), which the general logic below still handles correctly since it converges to index 0 in that case.\n\n### Walkthrough\n- If `nums[0] <= nums[nums.length - 1]`, the array isn't actually rotated (or was rotated a full `n` times, which is equivalent to no rotation) — return `nums[0]` immediately.\n- Initialize `left = 0` and `right = nums.length - 1`.\n- While `left < right`:\n  - Compute `mid = Math.floor((left + right) / 2)`.\n  - If `nums[mid] >= nums[0]`, the minimum is after `mid`, so set `left = mid + 1`.\n  - Otherwise, the minimum is at `mid` or before it, so set `right = mid`.\n- Return `nums[left]`.\n\n```typescript\nfunction findMin(nums: number[]): number {\n  const n = nums.length;\n\n  if (nums[0] <= nums[n - 1]) {\n    return nums[0];\n  }\n\n  let left = 0;\n  let right = n - 1;\n\n  while (left < right) {\n    const mid = Math.floor((left + right) / 2);\n\n    if (nums[mid] >= nums[0]) {\n      left = mid + 1;\n    } else {\n      right = mid;\n    }\n  }\n\n  return nums[left];\n}\n```\n",re=`---
title: Min Stack
number: 155
source: LeetCode
category: Stack
difficulty: Medium
tags: Stack, Design
url: https://leetcode.com/problems/min-stack/
---

## Problem
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the \`MinStack\` class:
- \`MinStack()\` initializes the stack object.
- \`void push(int val)\` pushes the element \`val\` onto the stack.
- \`void pop()\` removes the element on top of the stack.
- \`int top()\` gets the top element of the stack.
- \`int getMin()\` retrieves the minimum element in the stack.

You must implement a solution with \`O(1)\` time complexity for each function.

**Example 1:**
\`\`\`
Input:
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output:
[null,null,null,null,-3,null,0,-2]
\`\`\`
Explanation:
\`\`\`
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
\`\`\`

**Constraints:**
- \`-2^31 <= val <= 2^31 - 1\`
- Methods \`pop\`, \`top\`, and \`getMin\` will always be called on a non-empty stack.
- At most \`3 * 10^4\` calls will be made to \`push\`, \`pop\`, \`top\`, and \`getMin\`.

## Hints
- Recomputing the minimum by scanning the whole stack on every \`getMin()\` call would be O(n) per call, which doesn't meet the O(1) requirement.
- Maintain a second, parallel stack that tracks the *minimum value so far* at each corresponding position in the main stack — this way, the top of the min-stack is always the current overall minimum.
- When pushing a new value, push \`min(newValue, currentMin)\` onto the min-stack; when popping, pop from both stacks together, keeping them in sync at all times.

## Template

\`\`\`typescript
// just init the function name and paramaters. dont remove!.

class MinStack {
  constructor() {
    // TODO
  }

  push(val: number): void {
    // TODO
  }

  pop(): void {
    // TODO
  }

  top(): number {
    // TODO
    return 0;
  }

  getMin(): number {
    // TODO
    return 0;
  }
}
\`\`\`

## Solution: Two Stacks (Parallel Min-Tracking Stack)
- time: O(1) for every operation (push, pop, top, getMin)
- space: O(n)

### Explanation
We maintain two stacks in parallel: the regular \`stack\` holding all pushed values, and a \`minStack\` where \`minStack[i]\` always holds the minimum value among \`stack[0..i]\`. Whenever we push a new value \`val\`, we also push \`min(val, currentMin)\` onto \`minStack\` (where \`currentMin\` is the previous top of \`minStack\`, or \`val\` itself if \`minStack\` was empty). This way, the top of \`minStack\` is always the minimum of everything currently in \`stack\`. When we pop, we pop from both stacks together, which keeps them perfectly synchronized and ensures \`minStack\`'s top always reflects the correct minimum after the pop, all in O(1) per operation.

### Walkthrough
- Maintain two arrays acting as stacks: \`stack\` and \`minStack\`.
- \`push(val)\`: push \`val\` onto \`stack\`. Compute \`newMin = minStack.length === 0 ? val : min(val, minStack.top())\`, and push \`newMin\` onto \`minStack\`.
- \`pop()\`: pop from both \`stack\` and \`minStack\`.
- \`top()\`: return the last element of \`stack\`.
- \`getMin()\`: return the last element of \`minStack\`.

\`\`\`typescript
class MinStack {
  private stack: number[] = [];
  private minStack: number[] = [];

  push(val: number): void {
    this.stack.push(val);
    const currentMin =
      this.minStack.length === 0
        ? val
        : Math.min(val, this.minStack[this.minStack.length - 1]);
    this.minStack.push(currentMin);
  }

  pop(): void {
    this.stack.pop();
    this.minStack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}
\`\`\`

## Solution: Single Stack Storing (value, minSoFar) Pairs
- time: O(1) for every operation
- space: O(n)

### Explanation
Instead of two separate arrays, we can use a single stack where each entry stores a pair: the pushed value and the minimum value at the time it was pushed. This achieves the same effect as the two-stack approach — every element "remembers" what the minimum was up through that point — but keeps everything in one data structure, which some find simpler to reason about and keep in sync.

### Walkthrough
- Maintain a single stack of \`[value, minSoFar]\` pairs.
- \`push(val)\`: compute \`newMin = stack.length === 0 ? val : min(val, stack.top()[1])\`, then push \`[val, newMin]\`.
- \`pop()\`: pop the top pair off the stack.
- \`top()\`: return \`stack.top()[0]\`.
- \`getMin()\`: return \`stack.top()[1]\`.

\`\`\`typescript
class MinStack {
  private stack: [number, number][] = [];

  push(val: number): void {
    const currentMin =
      this.stack.length === 0
        ? val
        : Math.min(val, this.stack[this.stack.length - 1][1]);
    this.stack.push([val, currentMin]);
  }

  pop(): void {
    this.stack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1][0];
  }

  getMin(): number {
    return this.stack[this.stack.length - 1][1];
  }
}
\`\`\`
`,E=`---
title: Two Sum II - Input Array Is Sorted
number: 167
source: LeetCode
category: Two Pointers
difficulty: Medium
tags: Array, Two Pointers, Binary Search
url: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
---

## Problem
Given a **1-indexed** array of integers \`numbers\` that is already sorted in non-decreasing order, find two numbers such that they add up to a specific \`target\` number. Return the indices of the two numbers, \`index1\` and \`index2\`, added by one as an integer array \`[index1, index2]\` of length 2, where \`1 <= index1 < index2 <= numbers.length\`.

You may assume that each input has exactly one solution, and you may not use the same element twice. Your solution must use only constant extra space.

**Example 1:**
\`\`\`
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
\`\`\`
Explanation: \`numbers[0] + numbers[1] = 2 + 7 = 9\`, so \`index1 = 1, index2 = 2\`.

**Example 2:**
\`\`\`
Input: numbers = [2,3,4], target = 6
Output: [1,3]
\`\`\`

**Example 3:**
\`\`\`
Input: numbers = [-1,0], target = -1
Output: [1,2]
\`\`\`

**Constraints:**
- \`2 <= numbers.length <= 3 * 10^4\`
- \`-1000 <= numbers[i] <= 1000\`
- \`numbers\` is sorted in non-decreasing order.
- \`-1000 <= target <= 1000\`
- Exactly one valid answer exists.

## Hints
- Since the array is sorted, a Hash Map still works but ignores the useful sorted-order structure of the input.
- The array being sorted means: if the current pair's sum is too small, moving the left pointer rightward strictly increases the sum; if the sum is too large, moving the right pointer leftward strictly decreases it.
- This "shrinking window" behavior is exactly what the Two Pointers technique exploits, letting you scan the array once from both ends, achieving O(n) time and O(1) extra space (better than a Hash Map's O(n) space).

## Template

\`\`\`typescript
// just init the function name and paramaters. dont remove!.

function twoSum(numbers: number[], target: number): number[] {
  // TODO
  return [];
}
\`\`\`

## Solution: Hash Map
- time: O(n)
- space: O(n)

### Explanation
This is the same approach as the original Two Sum problem, ignoring the fact that the array is sorted: store each visited value with its index in a Hash Map, and for each new element check whether its complement (\`target - value\`) has already been seen. It works correctly here too, but doesn't take advantage of the sorted property, and uses more memory than necessary.

### Walkthrough
- Initialize an empty Hash Map \`seen\` mapping value → 1-indexed position.
- For each index \`i\` (0-indexed) in \`numbers\`:
  - Compute \`complement = target - numbers[i]\`.
  - If \`complement\` is in \`seen\`, return \`[seen[complement], i + 1]\` (sorted ascending since \`seen[complement]\` was recorded earlier).
  - Otherwise, store \`numbers[i] → i + 1\` in \`seen\`.

\`\`\`typescript
function twoSum(numbers: number[], target: number): number[] {
  const seen = new Map<number, number>();

  for (let i = 0; i < numbers.length; i++) {
    const complement = target - numbers[i];
    if (seen.has(complement)) {
      return [seen.get(complement)!, i + 1];
    }
    seen.set(numbers[i], i + 1);
  }

  return [];
}
\`\`\`

## Solution: Two Pointers
- time: O(n)
- space: O(1)

### Explanation
Because \`numbers\` is sorted, we can use two pointers — \`left\` starting at the first element and \`right\` starting at the last. At each step, we look at \`numbers[left] + numbers[right]\`: if it's exactly \`target\`, we're done. If it's too small, the only way to increase the sum (given the array is sorted) is to move \`left\` rightward to a larger value. If it's too large, we move \`right\` leftward to a smaller value. Each step eliminates at least one candidate pair, so the pointers meet after at most O(n) steps, using no extra space beyond the two pointer variables.

### Walkthrough
- Initialize \`left = 0\` and \`right = numbers.length - 1\`.
- While \`left < right\`:
  - Compute \`sum = numbers[left] + numbers[right]\`.
  - If \`sum === target\`, return \`[left + 1, right + 1]\` (converting to 1-indexed).
  - If \`sum < target\`, increment \`left\`.
  - If \`sum > target\`, decrement \`right\`.

\`\`\`typescript
function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
}
\`\`\`

## Solution: Binary Search per Element
- time: O(n log n)
- space: O(1)

### Explanation
Another way to exploit the sorted order is to fix each element \`numbers[i]\` in turn and binary search for its required complement \`target - numbers[i]\` within the remaining part of the array. This is slower than the two-pointer approach (O(n log n) instead of O(n)) since it repeats a search for every element, but it's a useful pattern to know since it generalizes to problems where a two-pointer sweep isn't directly applicable.

### Walkthrough
- For each index \`i\` from \`0\` to \`n - 2\`:
  - Compute \`complement = target - numbers[i]\`.
  - Binary search for \`complement\` within \`numbers[i + 1 .. n - 1]\`.
  - If found at position \`j\`, return \`[i + 1, j + 1]\`.
- (The problem guarantees a solution exists, so this loop will always find a match before finishing.)

\`\`\`typescript
function twoSum(numbers: number[], target: number): number[] {
  const n = numbers.length;

  const binarySearch = (start: number, end: number, value: number): number => {
    let lo = start;
    let hi = end;
    while (lo <= hi) {
      const mid = Math.floor((lo + hi) / 2);
      if (numbers[mid] === value) return mid;
      if (numbers[mid] < value) lo = mid + 1;
      else hi = mid - 1;
    }
    return -1;
  };

  for (let i = 0; i < n - 1; i++) {
    const complement = target - numbers[i];
    const j = binarySearch(i + 1, n - 1, complement);
    if (j !== -1) {
      return [i + 1, j + 1];
    }
  }

  return [];
}
\`\`\`
`,ie=`---
title: Valid Parentheses
number: 20
source: LeetCode
category: Stack
difficulty: Easy
tags: String, Stack
url: https://leetcode.com/problems/valid-parentheses/
---

## Problem
Given a string \`s\` containing just the characters \`'('\`, \`')'\`, \`'{'\`, \`'}'\`, \`'['\` and \`']'\`, determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

**Example 1:**
\`\`\`
Input: s = "()"
Output: true
\`\`\`

**Example 2:**
\`\`\`
Input: s = "()[]{}"
Output: true
\`\`\`

**Example 3:**
\`\`\`
Input: s = "(]"
Output: false
\`\`\`

**Constraints:**
- \`1 <= s.length <= 10^4\`
- \`s\` consists of parentheses only \`'()[]{}'\`.

## Hints
- Every time you see a closing bracket, it must match the *most recently opened* unmatched bracket — this "most recent first" behavior is exactly what a Stack provides.
- Push opening brackets onto a stack. When you see a closing bracket, check whether it matches the bracket at the top of the stack; if it does, pop the stack, otherwise the string is invalid.
- At the end, the string is only valid if the stack is completely empty — a nonempty stack means there are unmatched opening brackets left over.

## Template

\`\`\`typescript
// just init the function name and paramaters. dont remove!.

function isValid(s: string): boolean {
  // TODO
  return false;
}
\`\`\`

## Solution: Stack
- time: O(n)
- space: O(n)

### Explanation
We use a Stack to keep track of opening brackets that haven't been closed yet. For each character in the string: if it's an opening bracket, push it onto the stack. If it's a closing bracket, it must match whatever is currently on top of the stack (the most recently opened, still-unmatched bracket) — if it doesn't match, or the stack is empty, the string is invalid. At the end, the stack must be empty for the string to be considered fully valid; if any opening brackets remain unmatched, it's invalid.

### Walkthrough
- Create a Hash Map \`pairs\` mapping each closing bracket to its matching opening bracket, e.g. \`')' → '('\`.
- Initialize an empty stack.
- For each character \`ch\` in \`s\`:
  - If \`ch\` is an opening bracket (\`(\`, \`{\`, \`[\`), push it onto the stack.
  - Otherwise (\`ch\` is a closing bracket):
    - If the stack is empty, or the top of the stack doesn't equal \`pairs[ch]\`, return \`false\`.
    - Otherwise, pop the stack.
- After processing the whole string, return \`true\` if the stack is empty, \`false\` otherwise.

\`\`\`typescript
function isValid(s: string): boolean {
  const pairs: Record<string, string> = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  const stack: string[] = [];

  for (const ch of s) {
    if (ch === "(" || ch === "[" || ch === "{") {
      stack.push(ch);
    } else {
      if (stack.length === 0 || stack[stack.length - 1] !== pairs[ch]) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
}
\`\`\`
`,D=`---
title: Contains Duplicate
number: 217
source: LeetCode
category: Arrays & Hashing
difficulty: Easy
tags: Array, Hash Table
url: https://leetcode.com/problems/contains-duplicate/
---

## Problem
Given an integer array \`nums\`, return \`true\` if any value appears **at least twice** in the array, and return \`false\` if every element is distinct.

**Example 1:**
\`\`\`
Input: nums = [1, 2, 3, 1]
Output: true
\`\`\`
Explanation: the value 1 appears at index 0 and index 3.

**Example 2:**
\`\`\`
Input: nums = [1, 2, 3, 4]
Output: false
\`\`\`
Explanation: all elements are distinct.

**Example 3:**
\`\`\`
Input: nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
Output: true
\`\`\`

**Constraints:**
- \`1 <= nums.length <= 10^5\`
- \`-10^9 <= nums[i] <= 10^9\`

## Hints
- The slowest approach is comparing every pair of elements (brute force) — O(n²), not great for large arrays.
- If you sort the array first, duplicate values end up next to each other, so a single pass can detect them.
- Using a data structure with O(1) average lookup (a Hash Set) to track values you've already seen is the fastest approach, needing only one pass through the array.

## Template

\`\`\`typescript
// just init the function name and paramaters. dont remove!.

function hasDuplicate(nums: number[]): boolean {
  // TODO
  return false;
}
\`\`\`

## Solution: Brute Force
- time: O(n²)
- space: O(1)

### Explanation
The most direct approach is to compare every element against every other element that comes after it. If any pair matches, a duplicate exists.

### Walkthrough
- For each index \`i\`, loop through every index \`j > i\`.
- If \`nums[i] === nums[j]\`, return \`true\`.
- If no match is found after checking all pairs, return \`false\`.

\`\`\`typescript
function hasDuplicate(nums: number[]): boolean {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
}
\`\`\`

## Solution: Sorting
- time: O(n log n)
- space: O(1) (excluding space used by the sort algorithm itself)

### Explanation
If we sort the array in ascending order, two equal elements (if any) must end up adjacent to each other. So after sorting, we only need one pass, comparing each element to the one right before it.

### Walkthrough
- Sort \`nums\` in ascending order.
- Iterate from index 1 to the end.
- If \`nums[i] === nums[i - 1]\`, a duplicate exists, so return \`true\`.
- If the loop finishes without finding a match, return \`false\`.

\`\`\`typescript
function hasDuplicate(nums: number[]): boolean {
  const sorted = [...nums].sort((a, b) => a - b);
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] === sorted[i - 1]) {
      return true;
    }
  }
  return false;
}
\`\`\`

## Solution: Hash Set
- time: O(n)
- space: O(n)

### Explanation
We use a Hash Set to keep track of values seen so far while scanning the array. For each new element, we check whether it's already in the set: if so, we've found a duplicate and return \`true\` immediately; otherwise we add it and continue. Since Hash Set lookups and insertions are O(1) on average, the whole algorithm only needs a single O(n) pass.

### Walkthrough
- Initialize an empty set \`seen\`.
- For each number \`n\` in \`nums\`:
  - If \`n\` is already in \`seen\`, return \`true\`.
  - Otherwise, add \`n\` to \`seen\`.
- If the loop finishes with no duplicate found, return \`false\`.

\`\`\`typescript
function hasDuplicate(nums: number[]): boolean {
  const seen = new Set<number>();
  for (const n of nums) {
    if (seen.has(n)) {
      return true;
    }
    seen.add(n);
  }
  return false;
}
\`\`\`

## Solution: Length Comparison Shortcut (Set Size Trick)
- time: O(n)
- space: O(n)

### Explanation
A Hash Set can never contain duplicate values by definition. So if we convert the whole array into a Set, the resulting Set will only be smaller than the original array if at least one duplicate was removed during the conversion. This gives a very short one-line-style check, at the cost of always building the full set even when a duplicate is found early (so it doesn't short-circuit like the previous solution).

### Walkthrough
- Build a \`Set\` from all elements in \`nums\`.
- Compare \`set.size\` to \`nums.length\`.
- If they differ, a duplicate existed, so return \`true\`; otherwise return \`false\`.

\`\`\`typescript
function hasDuplicate(nums: number[]): boolean {
  const uniqueValues = new Set(nums);
  return uniqueValues.size !== nums.length;
}
\`\`\`
`,ae="---\ntitle: Generate Parentheses\nnumber: 22\nsource: LeetCode\ncategory: Stack\ndifficulty: Medium\ntags: String, Dynamic Programming, Backtracking\nurl: https://leetcode.com/problems/generate-parentheses/\n---\n\n## Problem\nGiven `n` pairs of parentheses, write a function to generate all combinations of well-formed (valid) parentheses.\n\n**Example 1:**\n```\nInput: n = 3\nOutput: [\"((()))\",\"(()())\",\"(())()\",\"()(())\",\"()()()\"]\n```\n\n**Example 2:**\n```\nInput: n = 1\nOutput: [\"()\"]\n```\n\n**Constraints:**\n- `1 <= n <= 8`\n\n## Hints\n- A string of parentheses is valid exactly when, at every prefix, the number of `'('` seen is at least the number of `')'` seen, and the total counts are equal by the end.\n- This naturally suggests a **Backtracking** approach: build the string character by character, choosing to add `'('` (as long as you haven't used all `n` yet) or `')'` (as long as it wouldn't exceed the number of `'('` used so far), and backtrack once a full-length string of `2n` characters has been built.\n- Track two counters as you build: how many open parens have been used (`openCount`) and how many close parens have been used (`closeCount`). You can add `'('` when `openCount < n`, and you can add `')'` when `closeCount < openCount`.\n\n## Template\n\n```typescript\n// just init the function name and paramaters. dont remove!.\n\nfunction generateParenthesis(n: number): string[] {\n  // TODO\n  return [];\n}\n```\n\n## Solution: Backtracking\n- time: O(4^n / sqrt(n)) (the n-th Catalan number, which bounds the number of valid combinations, times O(n) to build each string)\n- space: O(4^n / sqrt(n)) for the output, plus O(n) for the recursion depth\n\n### Explanation\nWe build the string one character at a time using Backtracking (a form of Depth-First Search over choices). At each step, we track how many open parentheses (`openCount`) and close parentheses (`closeCount`) have been placed so far. We're allowed to place another `'('` as long as we haven't used all `n` yet (`openCount < n`), and we're allowed to place a `')'` only if doing so wouldn't create more closing than opening parens so far (`closeCount < openCount`) — this constraint is exactly what guarantees every prefix stays valid. When the current string reaches length `2n`, it's a complete, valid combination, so we record it and backtrack to explore other branches.\n\n### Walkthrough\n- Initialize an empty result array and a mutable path (e.g. an array of characters or a string).\n- Define a recursive function `backtrack(openCount, closeCount)`:\n  - If the current path length equals `2n`, add a copy of the path (joined into a string) to the result and return.\n  - If `openCount < n`, append `'('`, recurse with `backtrack(openCount + 1, closeCount)`, then remove the last character (backtrack).\n  - If `closeCount < openCount`, append `')'`, recurse with `backtrack(openCount, closeCount + 1)`, then remove the last character (backtrack).\n- Call `backtrack(0, 0)` to start, then return the result array.\n\n```typescript\nfunction generateParenthesis(n: number): string[] {\n  const result: string[] = [];\n  const path: string[] = [];\n\n  function backtrack(openCount: number, closeCount: number): void {\n    if (path.length === 2 * n) {\n      result.push(path.join(\"\"));\n      return;\n    }\n\n    if (openCount < n) {\n      path.push(\"(\");\n      backtrack(openCount + 1, closeCount);\n      path.pop();\n    }\n\n    if (closeCount < openCount) {\n      path.push(\")\");\n      backtrack(openCount, closeCount + 1);\n      path.pop();\n    }\n  }\n\n  backtrack(0, 0);\n  return result;\n}\n```\n\n## Solution: Dynamic Programming (Build from Smaller n)\n- time: O(4^n / sqrt(n)) (same asymptotic bound as backtracking, since we still generate all valid combinations)\n- space: O(4^n / sqrt(n))\n\n### Explanation\nWe can build up the answer for `n` pairs using the answers for all smaller numbers of pairs, similar to how Catalan numbers are defined recursively. Every valid combination of `n` pairs can be decomposed as `\"(\" + A + \")\" + B`, where `A` is some valid combination using `i` pairs (fully enclosed within the first matched pair) and `B` is a valid combination using the remaining `n - 1 - i` pairs, for some `i` from `0` to `n - 1`. By computing and storing the valid combinations for every count from `0` up to `n`, we can construct each new count's combinations from the previously computed smaller ones.\n\n### Walkthrough\n- Create an array `dp` of length `n + 1`, where `dp[i]` will hold all valid combinations using `i` pairs. Initialize `dp[0] = [\"\"]` (the empty combination for 0 pairs).\n- For each `count` from `1` to `n`:\n  - Initialize `dp[count] = []`.\n  - For each `i` from `0` to `count - 1` (representing how many pairs go inside the first matched pair):\n    - Let `left = dp[i]` (combinations inside the parens) and `right = dp[count - 1 - i]` (combinations after the closing paren).\n    - For every combination `a` in `left` and every combination `b` in `right`, form `\"(\" + a + \")\" + b` and add it to `dp[count]`.\n- Return `dp[n]`.\n\n```typescript\nfunction generateParenthesis(n: number): string[] {\n  const dp: string[][] = [[\"\"]];\n\n  for (let count = 1; count <= n; count++) {\n    const current: string[] = [];\n\n    for (let i = 0; i < count; i++) {\n      const left = dp[i];\n      const right = dp[count - 1 - i];\n\n      for (const a of left) {\n        for (const b of right) {\n          current.push(`(${a})${b}`);\n        }\n      }\n    }\n\n    dp.push(current);\n  }\n\n  return dp[n];\n}\n```\n",O='---\ntitle: Product of Array Except Self\nnumber: 238\nsource: LeetCode\ncategory: Arrays & Hashing\ndifficulty: Medium\ntags: Array, Prefix Sum\nurl: https://leetcode.com/problems/product-of-array-except-self/\n---\n\n## Problem\nGiven an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all elements of `nums` except `nums[i]`.\n\nThe algorithm must run in O(n) time, and you must solve it **without using the division operator**.\n\n**Example 1:**\n```\nInput: nums = [1,2,3,4]\nOutput: [24,12,8,6]\n```\n\n**Example 2:**\n```\nInput: nums = [-1,1,0,-3,3]\nOutput: [0,0,9,0,0]\n```\n\n**Constraints:**\n- `2 <= nums.length <= 10^5`\n- `-30 <= nums[i] <= 30`\n- The product of any prefix or suffix of `nums` is guaranteed to fit in a 32-bit integer.\n\n## Hints\n- If division were allowed, you could compute the total product and divide by `nums[i]` for each position — but division is off the table here, and it also breaks when `nums` contains a zero.\n- For each index `i`, the answer is the product of everything to its left multiplied by the product of everything to its right. Try computing "prefix products" and "suffix products" separately.\n- You can avoid using extra arrays for prefix and suffix products by building the prefix products directly into the output array, then doing a second pass from the right, multiplying in the suffix product as you go — this keeps the algorithm at O(1) extra space (besides the output array).\n\n## Template\n\n```typescript\n// just init the function name and paramaters. dont remove!.\n\nfunction productExceptSelf(nums: number[]): number[] {\n  // TODO\n  return [];\n}\n```\n\n## Solution: Brute Force\n- time: O(n²)\n- space: O(1) extra space (not counting the output array)\n\n### Explanation\nThe simplest approach directly follows the problem statement: for each index `i`, multiply together every element except `nums[i]`. This means, for every index, doing an inner loop over the rest of the array, which is quadratic overall.\n\n### Walkthrough\n- For each index `i` in `nums`:\n  - Initialize `product = 1`.\n  - Loop over every index `j`; if `j !== i`, multiply `product` by `nums[j]`.\n  - Store `product` in `result[i]`.\n- Return `result`.\n\n```typescript\nfunction productExceptSelf(nums: number[]): number[] {\n  const n = nums.length;\n  const result = new Array(n).fill(1);\n\n  for (let i = 0; i < n; i++) {\n    let product = 1;\n    for (let j = 0; j < n; j++) {\n      if (j !== i) {\n        product *= nums[j];\n      }\n    }\n    result[i] = product;\n  }\n\n  return result;\n}\n```\n\n## Solution: Prefix and Suffix Arrays\n- time: O(n)\n- space: O(n)\n\n### Explanation\nFor each index `i`, the answer is `(product of everything before i) * (product of everything after i)`. We can precompute a `prefix` array where `prefix[i]` holds the product of all elements before index `i`, and a `suffix` array where `suffix[i]` holds the product of all elements after index `i`. The final answer at each index is simply `prefix[i] * suffix[i]`.\n\n### Walkthrough\n- Build `prefix`, where `prefix[0] = 1` and `prefix[i] = prefix[i - 1] * nums[i - 1]` for `i > 0`.\n- Build `suffix`, where `suffix[n - 1] = 1` and `suffix[i] = suffix[i + 1] * nums[i + 1]` for `i < n - 1`.\n- Return an array where each element is `prefix[i] * suffix[i]`.\n\n```typescript\nfunction productExceptSelf(nums: number[]): number[] {\n  const n = nums.length;\n  const prefix = new Array(n).fill(1);\n  const suffix = new Array(n).fill(1);\n\n  for (let i = 1; i < n; i++) {\n    prefix[i] = prefix[i - 1] * nums[i - 1];\n  }\n  for (let i = n - 2; i >= 0; i--) {\n    suffix[i] = suffix[i + 1] * nums[i + 1];\n  }\n\n  const result = new Array(n);\n  for (let i = 0; i < n; i++) {\n    result[i] = prefix[i] * suffix[i];\n  }\n  return result;\n}\n```\n\n## Solution: Single Output Array, O(1) Extra Space\n- time: O(n)\n- space: O(1) extra space (not counting the output array)\n\n### Explanation\nWe can eliminate the separate `prefix` and `suffix` arrays entirely. First, fill the output array with prefix products (everything to the left of each index) directly. Then, in a second pass moving from right to left, keep a running suffix product variable and multiply it into each output cell as we go. This gives the same result while only using a single extra variable rather than two extra arrays, meeting the space-optimal version of the O(n) time requirement.\n\n### Walkthrough\n- Initialize `result` where `result[0] = 1`, then for `i` from `1` to `n - 1`, set `result[i] = result[i - 1] * nums[i - 1]` (this fills in prefix products).\n- Initialize a running variable `suffix = 1`.\n- Iterate `i` from `n - 1` down to `0`: multiply `result[i]` by `suffix`, then update `suffix *= nums[i]`.\n- Return `result`.\n\n```typescript\nfunction productExceptSelf(nums: number[]): number[] {\n  const n = nums.length;\n  const result = new Array(n).fill(1);\n\n  for (let i = 1; i < n; i++) {\n    result[i] = result[i - 1] * nums[i - 1];\n  }\n\n  let suffix = 1;\n  for (let i = n - 1; i >= 0; i--) {\n    result[i] *= suffix;\n    suffix *= nums[i];\n  }\n\n  return result;\n}\n```\n',oe=`---
title: Sliding Window Maximum
number: 239
source: LeetCode
category: Sliding Window
difficulty: Hard
tags: Array, Queue, Sliding Window, Heap (Priority Queue), Monotonic Queue
url: https://leetcode.com/problems/sliding-window-maximum/
---

## Problem
You are given an array of integers \`nums\`, and there is a sliding window of size \`k\` which is moving from the very left of the array to the very right. You can only see the \`k\` numbers in the window at any given time. The window slides one position to the right at each step.

Return the max sliding window, i.e. an array containing the maximum value in the window at each position.

**Example 1:**
\`\`\`
Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
\`\`\`
Explanation:
\`\`\`
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
\`\`\`

**Example 2:**
\`\`\`
Input: nums = [1], k = 1
Output: [1]
\`\`\`

**Constraints:**
- \`1 <= nums.length <= 10^5\`
- \`-10^4 <= nums[i] <= 10^4\`
- \`1 <= k <= nums.length\`

## Hints
- The brute force approach recomputes the maximum of each window from scratch by scanning all k elements, giving O(n * k) total time.
- A Max-Heap (Priority Queue) can track the current maximum, but needs "lazy deletion" of elements that have slid out of the window, since heaps don't support efficient removal of an arbitrary element.
- The optimal approach uses a **Monotonic Queue** (Deque) storing candidate indices in decreasing order of their values: whenever a new element enters, remove all smaller elements from the back of the deque (they can never be the max again while this new, larger element is in the window), then remove indices from the front that have slid out of the window's range. The front of the deque is always the index of the current window's maximum.

## Template

\`\`\`typescript
// just init the function name and paramaters. dont remove!.

function maxSlidingWindow(nums: number[], k: number): number[] {
  // TODO
  return [];
}
\`\`\`

## Solution: Brute Force
- time: O(n * k)
- space: O(1) extra (not counting the output array)

### Explanation
The most direct approach recomputes the maximum of the current window from scratch at every position by scanning all \`k\` elements within it.

### Walkthrough
- For each window starting index \`i\` from \`0\` to \`n - k\`:
  - Scan \`nums[i .. i + k - 1]\` to find its maximum.
  - Append that maximum to the result.
- Return the result.

\`\`\`typescript
function maxSlidingWindow(nums: number[], k: number): number[] {
  const result: number[] = [];
  const n = nums.length;

  for (let i = 0; i + k <= n; i++) {
    let windowMax = nums[i];
    for (let j = i + 1; j < i + k; j++) {
      windowMax = Math.max(windowMax, nums[j]);
    }
    result.push(windowMax);
  }

  return result;
}
\`\`\`

## Solution: Max-Heap with Lazy Deletion
- time: O(n log n)
- space: O(n)

### Explanation
We can maintain a Max-Heap of \`[value, index]\` pairs. As the window slides, we push each new element's \`[value, index]\` onto the heap. To get the current window's maximum, we look at the top of the heap — but the top might correspond to an index that has already slid out of the window. Rather than removing it immediately (which heaps don't support efficiently for arbitrary elements), we simply pop off any stale entries (whose index is less than the window's left boundary) whenever we check the top, an approach called "lazy deletion." This works correctly but costs O(log n) per push/pop, and in the worst case elements can be pushed and later lazily popped, giving O(n log n) overall.

### Walkthrough
- Initialize an empty Max-Heap (storing \`[value, index]\` pairs, ordered by value descending) and a result array.
- For each index \`i\` from \`0\` to \`n - 1\`:
  - Push \`[nums[i], i]\` onto the heap.
  - While the top of the heap has an index less than \`i - k + 1\` (outside the current window), pop it off.
  - Once \`i >= k - 1\` (the window is full), the top of the heap (after cleaning stale entries) is the window's maximum — append its value to the result.
- Return the result.

\`\`\`typescript
class MaxHeap {
  private heap: [number, number][] = []; // [value, index]

  push(item: [number, number]): void {
    this.heap.push(item);
    let i = this.heap.length - 1;
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (this.heap[parent][0] >= this.heap[i][0]) break;
      [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
      i = parent;
    }
  }

  pop(): void {
    const last = this.heap.pop()!;
    if (this.heap.length > 0) {
      this.heap[0] = last;
      let i = 0;
      const n = this.heap.length;
      while (true) {
        let largest = i;
        const left = 2 * i + 1;
        const right = 2 * i + 2;
        if (left < n && this.heap[left][0] > this.heap[largest][0]) largest = left;
        if (right < n && this.heap[right][0] > this.heap[largest][0]) largest = right;
        if (largest === i) break;
        [this.heap[largest], this.heap[i]] = [this.heap[i], this.heap[largest]];
        i = largest;
      }
    }
  }

  top(): [number, number] {
    return this.heap[0];
  }
}

function maxSlidingWindow(nums: number[], k: number): number[] {
  const heap = new MaxHeap();
  const result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    heap.push([nums[i], i]);

    while (heap.top()[1] < i - k + 1) {
      heap.pop();
    }

    if (i >= k - 1) {
      result.push(heap.top()[0]);
    }
  }

  return result;
}
\`\`\`

## Solution: Monotonic Queue (Deque)
- time: O(n)
- space: O(k)

### Explanation
The optimal approach maintains a deque of indices, kept in an order such that their corresponding values are strictly decreasing from front to back. When a new element \`nums[i]\` arrives, any indices at the back of the deque whose values are less than or equal to \`nums[i]\` can be discarded — they can never be the maximum of any future window that also contains \`nums[i]\`, since \`nums[i]\` is both larger and more recent. We then push \`i\` onto the back. Separately, we check whether the index at the front of the deque has fallen outside the window (\`front <= i - k\`) and remove it if so. Because the front of the deque is always the largest remaining value's index, it's always the current window's maximum once the window is full. Each index is pushed and popped from the deque at most once, giving O(n) total time.

### Walkthrough
- Initialize an empty deque \`dq\` (storing indices) and a result array.
- For each index \`i\` from \`0\` to \`n - 1\`:
  - While \`dq\` is non-empty and \`nums[dq.back] <= nums[i]\`, pop from the back of \`dq\`.
  - Push \`i\` onto the back of \`dq\`.
  - If \`dq.front <= i - k\` (the front index has slid out of the window), pop from the front of \`dq\`.
  - Once \`i >= k - 1\` (the window is full), append \`nums[dq.front]\` to the result.
- Return the result.

\`\`\`typescript
function maxSlidingWindow(nums: number[], k: number): number[] {
  const deque: number[] = []; // stores indices, values decreasing front-to-back
  const result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) {
      deque.pop();
    }
    deque.push(i);

    if (deque[0] <= i - k) {
      deque.shift();
    }

    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
}
\`\`\`
`,k=`---
title: Valid Anagram
number: 242
source: LeetCode
category: Arrays & Hashing
difficulty: Easy
tags: Hash Table, String, Sorting
url: https://leetcode.com/problems/valid-anagram/
---

## Problem
Given two strings \`s\` and \`t\`, return \`true\` if \`t\` is an **anagram** of \`s\`, and \`false\` otherwise.

A string is an anagram of another string if it can be formed by rearranging all of the letters of the original string, using each letter exactly as many times as it appears.

**Example 1:**
\`\`\`
Input: s = "anagram", t = "nagaram"
Output: true
\`\`\`

**Example 2:**
\`\`\`
Input: s = "rat", t = "car"
Output: false
\`\`\`

**Constraints:**
- \`1 <= s.length, t.length <= 5 * 10^4\`
- \`s\` and \`t\` consist of lowercase English letters only.

## Hints
- If the two strings have different lengths, they can never be anagrams of each other — check this first to short-circuit the invalid case.
- A straightforward approach is to sort both strings and compare whether the sorted results are identical.
- A more efficient approach is to count the frequency of each character in both strings using a fixed-size array (since there are only 26 letters) or a Hash Map, then compare the two frequency tables.

## Template

\`\`\`typescript
// just init the function name and paramaters. dont remove!.

function isAnagram(s: string, t: string): boolean {
  // TODO
  return false;
}
\`\`\`

## Solution: Sorting
- time: O(n log n)
- space: O(n)

### Explanation
If two strings are anagrams of each other, sorting the characters of each string alphabetically must produce two identical strings. This is the simplest way to reason about the problem, even though it isn't the fastest.

### Walkthrough
- If the lengths of \`s\` and \`t\` differ, return \`false\` immediately.
- Sort the characters of \`s\` and of \`t\`.
- Compare the two sorted strings; return \`true\` if they're equal, \`false\` otherwise.

\`\`\`typescript
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const sortedS = s.split("").sort().join("");
  const sortedT = t.split("").sort().join("");
  return sortedS === sortedT;
}
\`\`\`

## Solution: Character Frequency Count (Fixed Array)
- time: O(n)
- space: O(1) (fixed-size 26-element table, independent of input size)

### Explanation
Instead of sorting, we can count how many times each character appears in \`s\`, then subtract the count of each character in \`t\`. If the strings are anagrams, every final count must be zero. Since the alphabet only has 26 lowercase letters, we can use a fixed array of size 26 instead of a Hash Map, making counting and comparing faster.

### Walkthrough
- If the lengths differ, return \`false\` immediately.
- Initialize a \`count\` array of 26 zeros, one per letter.
- Iterate through \`s\`, incrementing the corresponding counter for each character.
- Iterate through \`t\`, decrementing the corresponding counter for each character.
- After both passes, check whether every entry in \`count\` is zero. If any entry is nonzero, return \`false\`; otherwise return \`true\`.

\`\`\`typescript
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const count = new Array(26).fill(0);
  const aCode = "a".charCodeAt(0);

  for (let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - aCode]++;
    count[t.charCodeAt(i) - aCode]--;
  }

  return count.every((c) => c === 0);
}
\`\`\`

## Solution: Hash Map Frequency Count (General Alphabet)
- time: O(n)
- space: O(k), where k is the number of distinct characters

### Explanation
The fixed-array approach only works because the alphabet is limited to 26 lowercase letters. A more general version — one that would still work for Unicode characters, digits, or symbols — uses a Hash Map instead of a fixed array. The logic is otherwise identical: increment counts for \`s\`, decrement for \`t\`, and check that everything cancels out to zero.

### Walkthrough
- If the lengths differ, return \`false\` immediately.
- Create an empty Hash Map \`count\`.
- For each character in \`s\`, increment its count in the map (defaulting to 0 if unseen).
- For each character in \`t\`, decrement its count in the map.
- Check every value in the map; if any is nonzero, return \`false\`. Otherwise return \`true\`.

\`\`\`typescript
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const count = new Map<string, number>();

  for (const ch of s) {
    count.set(ch, (count.get(ch) ?? 0) + 1);
  }
  for (const ch of t) {
    count.set(ch, (count.get(ch) ?? 0) - 1);
  }

  for (const value of count.values()) {
    if (value !== 0) return false;
  }
  return true;
}
\`\`\`
`,A=`---
title: Encode and Decode Strings
number: 271
source: LeetCode
category: Arrays & Hashing
difficulty: Medium
tags: Array, String, Design
url: https://leetcode.com/problems/encode-and-decode-strings/
---

## Problem
Design an algorithm to **encode** a list of strings into a single string, and then **decode** that single string back into the original list of strings.

The encoded string can use any characters and any encoding scheme you'd like, as long as the following holds:
- \`decode(encode(strs)) == strs\` for any list of strings \`strs\`, including strings that may contain any characters (including empty strings, spaces, or even the delimiter characters you choose to use internally).

Implement two functions:
- \`encode(strs)\`: takes a list of strings and returns a single encoded string.
- \`decode(s)\`: takes the encoded string and returns the original list of strings.

**Example 1:**
\`\`\`
Input: strs = ["neet","code","love","you"]
Output after encode -> decode: ["neet","code","love","you"]
\`\`\`

**Example 2:**
\`\`\`
Input: strs = [""]
Output after encode -> decode: [""]
\`\`\`

**Constraints:**
- \`0 <= strs.length <= 200\`
- \`0 <= strs[i].length <= 200\`
- \`strs[i]\` may contain any possible characters, including special characters and delimiters like commas.

## Hints
- A naive approach — joining strings with a delimiter such as a comma — breaks as soon as one of the strings itself contains that delimiter character.
- A robust scheme is **length-prefixing**: before each string, write its length followed by a special separator character (one that can never be confused with digits), then the string itself. When decoding, read the length first, then read exactly that many characters as the next string, regardless of what those characters are.
- Because the length is read first, the decoder always knows exactly how many characters to consume next, so it never needs to guess where one string ends and the next begins — this works correctly no matter what characters appear inside the strings.

## Template

\`\`\`typescript
// just init the function name and paramaters. dont remove!.

function encode(strs: string[]): string {
  // TODO
  return "";
}

function decode(s: string): string[] {
  // TODO
  return [];
}
\`\`\`

## Solution: Length-Prefixed Encoding
- time: O(n), where n is the total number of characters across all strings, for both encode and decode
- space: O(n) for the encoded string and the resulting list

### Explanation
Instead of relying on a delimiter character that might collide with the string content, we prefix each string with its length and a separator (here, \`#\`) that's guaranteed not to be part of a valid length number. For example, the string \`"code"\` becomes \`"4#code"\`. When decoding, we read digits until we hit \`#\` to determine the length of the next string, then read exactly that many characters as the string itself — no matter what those characters are, even if they include digits, \`#\`, or anything else.

### Walkthrough
**Encode:**
- For each string \`s\` in \`strs\`, append \`"\${s.length}#\${s}"\` to the result.
- Concatenate all these pieces and return the combined string.

**Decode:**
- Initialize an empty result list and a pointer \`i = 0\`.
- While \`i\` is within bounds:
  - Read characters from \`i\` until hitting \`#\` to build up the length as a number \`length\`, then move past the \`#\`.
  - Extract the next \`length\` characters starting right after the \`#\` as the next string.
  - Append that string to the result and advance \`i\` past it.
- Return the result list.

\`\`\`typescript
function encode(strs: string[]): string {
  let result = "";
  for (const s of strs) {
    result += \`\${s.length}#\${s}\`;
  }
  return result;
}

function decode(s: string): string[] {
  const result: string[] = [];
  let i = 0;

  while (i < s.length) {
    let j = i;
    while (s[j] !== "#") {
      j++;
    }
    const length = parseInt(s.slice(i, j), 10);
    const start = j + 1;
    const end = start + length;
    result.push(s.slice(start, end));
    i = end;
  }

  return result;
}
\`\`\`

## Solution: Escape-Character Encoding
- time: O(n) for encode, O(n) for decode
- space: O(n)

### Explanation
An alternative to length-prefixing is a classic escaping scheme, similar to how many text formats handle special characters. We pick a delimiter (say \`,\`) to separate strings, but before writing each original string, we "escape" any literal delimiter or escape character that appears inside it (for example, replacing \`\\\` with \`\\\\\` and \`,\` with \`\\,\`). During decoding, we scan character by character: when we see the escape character \`\\\`, we know the next character is a literal part of the string rather than a delimiter, and when we see an unescaped delimiter, we know a string has ended. This avoids needing to compute lengths up front, at the cost of a slightly trickier decode loop.

### Walkthrough
**Encode:**
- For each string \`s\`, replace every \`\\\` with \`\\\\\` and every \`,\` with \`\\,\` to escape it.
- Join all escaped strings with an unescaped \`,\` delimiter.

**Decode:**
- Initialize an empty result list, a buffer for the current string, and a pointer \`i = 0\`.
- While \`i\` is within bounds:
  - If the current character is \`\\\`, append the *next* character literally to the buffer and advance \`i\` by 2 (skipping both the escape character and the escaped character).
  - Else if the current character is the unescaped delimiter \`,\`, push the buffer to the result, reset the buffer, and advance \`i\` by 1.
  - Otherwise, append the current character to the buffer and advance \`i\` by 1.
- After the loop, push the final buffer (for the last string) to the result.
- Return the result list.

\`\`\`typescript
function encode(strs: string[]): string {
  const escaped = strs.map((s) => s.replace(/\\\\/g, "\\\\\\\\").replace(/,/g, "\\\\,"));
  return escaped.join(",");
}

function decode(s: string): string[] {
  const result: string[] = [];
  let buffer = "";
  let i = 0;

  while (i < s.length) {
    if (s[i] === "\\\\") {
      buffer += s[i + 1];
      i += 2;
    } else if (s[i] === ",") {
      result.push(buffer);
      buffer = "";
      i += 1;
    } else {
      buffer += s[i];
      i += 1;
    }
  }

  result.push(buffer);
  return result;
}
\`\`\`
`,se=`---
title: Longest Substring Without Repeating Characters
number: 3
source: LeetCode
category: Sliding Window
difficulty: Medium
tags: Hash Table, String, Sliding Window
url: https://leetcode.com/problems/longest-substring-without-repeating-characters/
---

## Problem
Given a string \`s\`, find the length of the longest substring without duplicate characters.

**Example 1:**
\`\`\`
Input: s = "abcabcbb"
Output: 3
\`\`\`
Explanation: the answer is "abc", with length 3.

**Example 2:**
\`\`\`
Input: s = "bbbbb"
Output: 1
\`\`\`
Explanation: the answer is "b", with length 1.

**Example 3:**
\`\`\`
Input: s = "pwwkew"
Output: 3
\`\`\`
Explanation: the answer is "wke", with length 3. Notice that "pwke" is a subsequence, not a substring.

**Constraints:**
- \`0 <= s.length <= 5 * 10^4\`
- \`s\` consists of English letters, digits, symbols, and spaces.

## Hints
- The brute force approach checks every substring for duplicate characters, which is O(n³) or O(n²) with a smarter duplicate check.
- Since we're looking for a contiguous run of unique characters, this is a natural fit for the Sliding Window technique: maintain a window \`[left, right]\` that always contains only unique characters.
- Keep a Hash Set (or Hash Map of character → last seen index) of characters currently in the window. When you encounter a character already in the window, shrink the window from the left until the duplicate is removed, then continue expanding from the right.

## Template

\`\`\`typescript
// just init the function name and paramaters. dont remove!.

function lengthOfLongestSubstring(s: string): number {
  // TODO
  return 0;
}
\`\`\`

## Solution: Brute Force
- time: O(n³)
- space: O(min(n, m)), where m is the character set size (used for the duplicate check within each substring)

### Explanation
The most direct approach checks every possible substring \`s[i..j]\` and tests whether it contains any duplicate characters, keeping track of the longest one found without duplicates.

### Walkthrough
- For each starting index \`i\` from \`0\` to \`n - 1\`:
  - For each ending index \`j\` from \`i\` to \`n - 1\`:
    - Check whether \`s[i..j]\` has all unique characters (using a Set for this check).
    - If it does, update \`longest = max(longest, j - i + 1)\`.
- Return \`longest\`.

\`\`\`typescript
function lengthOfLongestSubstring(s: string): number {
  let longest = 0;

  for (let i = 0; i < s.length; i++) {
    const seen = new Set<string>();
    for (let j = i; j < s.length; j++) {
      if (seen.has(s[j])) break;
      seen.add(s[j]);
      longest = Math.max(longest, j - i + 1);
    }
  }

  return longest;
}
\`\`\`

## Solution: Sliding Window with Hash Set
- time: O(n)
- space: O(min(n, m)), where m is the character set size

### Explanation
We maintain a window \`[left, right]\` that always contains only unique characters, tracked using a Hash Set. As \`right\` expands one character at a time, if the new character is already in the set, we shrink the window from the left — removing characters from the set and advancing \`left\` — until the duplicate is gone. At every point, the window represents a valid substring with no duplicates, so we track its length as a candidate for the answer. Each character enters and leaves the window at most once, giving O(n) total work despite the nested-looking loop.

### Walkthrough
- Initialize an empty Set \`window\`, \`left = 0\`, and \`longest = 0\`.
- For each \`right\` from \`0\` to \`n - 1\`:
  - While \`s[right]\` is already in \`window\`, remove \`s[left]\` from \`window\` and increment \`left\`.
  - Add \`s[right]\` to \`window\`.
  - Update \`longest = max(longest, right - left + 1)\`.
- Return \`longest\`.

\`\`\`typescript
function lengthOfLongestSubstring(s: string): number {
  const window = new Set<string>();
  let left = 0;
  let longest = 0;

  for (let right = 0; right < s.length; right++) {
    while (window.has(s[right])) {
      window.delete(s[left]);
      left++;
    }
    window.add(s[right]);
    longest = Math.max(longest, right - left + 1);
  }

  return longest;
}
\`\`\`

## Solution: Sliding Window with Hash Map (Jump Left Pointer)
- time: O(n)
- space: O(min(n, m)), where m is the character set size

### Explanation
Instead of shrinking the window one character at a time when a duplicate is found, we can store the **last seen index** of each character in a Hash Map. When we encounter a character already in the window, we can jump \`left\` directly to just past its previous occurrence, rather than incrementing it repeatedly. This avoids the inner \`while\` loop entirely, making each character processed in strict O(1) amortized time with a single pass and no repeated shrinking steps.

### Walkthrough
- Initialize an empty Hash Map \`lastSeen\` (character → most recent index), \`left = 0\`, and \`longest = 0\`.
- For each \`right\` from \`0\` to \`n - 1\`:
  - If \`s[right]\` is in \`lastSeen\` and \`lastSeen[s[right]] >= left\`, move \`left\` to \`lastSeen[s[right]] + 1\` (jump past the duplicate).
  - Update \`lastSeen[s[right]] = right\`.
  - Update \`longest = max(longest, right - left + 1)\`.
- Return \`longest\`.

\`\`\`typescript
function lengthOfLongestSubstring(s: string): number {
  const lastSeen = new Map<string, number>();
  let left = 0;
  let longest = 0;

  for (let right = 0; right < s.length; right++) {
    const ch = s[right];
    if (lastSeen.has(ch) && lastSeen.get(ch)! >= left) {
      left = lastSeen.get(ch)! + 1;
    }
    lastSeen.set(ch, right);
    longest = Math.max(longest, right - left + 1);
  }

  return longest;
}
\`\`\`
`,ce=`---
title: Search in Rotated Sorted Array
number: 33
source: LeetCode
category: Binary Search
difficulty: Medium
tags: Array, Binary Search
url: https://leetcode.com/problems/search-in-rotated-sorted-array/
---

## Problem
There is an integer array \`nums\` sorted in ascending order (with distinct values). Prior to being passed to your function, \`nums\` is possibly rotated at an unknown pivot index \`k\`.

Given the array \`nums\` after the possible rotation and an integer \`target\`, return the index of \`target\` if it is in \`nums\`, or \`-1\` if it is not in \`nums\`.

You must write an algorithm with \`O(log n)\` runtime complexity.

**Example 1:**
\`\`\`
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
\`\`\`

**Example 2:**
\`\`\`
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
\`\`\`

**Example 3:**
\`\`\`
Input: nums = [1], target = 0
Output: -1
\`\`\`

**Constraints:**
- \`1 <= nums.length <= 5000\`
- \`-10^4 <= nums[i] <= 10^4\`
- All values of \`nums\` are unique.
- \`nums\` is an ascending array that is possibly rotated.
- \`-10^4 <= target <= 10^4\`

## Hints
- A linear scan works but is O(n), which doesn't meet the O(log n) requirement — the sorted-and-rotated structure of the array should be exploited instead.
- At any point during a binary search on this array, at least one of the two halves (\`[left, mid]\` or \`[mid, right]\`) is guaranteed to be normally sorted (no rotation break within it), even though the whole array isn't. Figuring out which half is sorted tells you whether the target could be in that half.
- Compare \`nums[left]\` to \`nums[mid]\` to determine which half is sorted. Then, check whether \`target\` falls within the range of the sorted half — if it does, search that half; otherwise, search the other half.

## Template

\`\`\`typescript
// just init the function name and paramaters. dont remove!.

function search(nums: number[], target: number): number {
  // TODO
  return -1;
}
\`\`\`

## Solution: Modified Binary Search
- time: O(log n)
- space: O(1)

### Explanation
Even though the array as a whole isn't sorted, at every step of the binary search, at least one of the two halves around \`mid\` must be fully sorted (with no rotation break inside it) — because there's only one rotation break point in the entire array. We determine which half is sorted by comparing \`nums[left]\` to \`nums[mid]\`: if \`nums[left] <= nums[mid]\`, the left half \`[left, mid]\` is sorted; otherwise, the right half \`[mid, right]\` is sorted. Once we know which half is sorted, we can check whether \`target\` falls within that sorted half's value range using simple comparisons. If it does, we search there; if not, the target (if present at all) must be in the other half, so we search that side instead. This still halves the search space each iteration, preserving O(log n) time.

### Walkthrough
- Initialize \`left = 0\` and \`right = nums.length - 1\`.
- While \`left <= right\`:
  - Compute \`mid = Math.floor((left + right) / 2)\`.
  - If \`nums[mid] === target\`, return \`mid\`.
  - If \`nums[left] <= nums[mid]\` (left half \`[left, mid]\` is sorted):
    - If \`nums[left] <= target < nums[mid]\`, the target is in the left half: set \`right = mid - 1\`.
    - Otherwise, search the right half: set \`left = mid + 1\`.
  - Otherwise (right half \`[mid, right]\` is sorted):
    - If \`nums[mid] < target <= nums[right]\`, the target is in the right half: set \`left = mid + 1\`.
    - Otherwise, search the left half: set \`right = mid - 1\`.
- If the loop ends without finding the target, return \`-1\`.

\`\`\`typescript
function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[left] <= nums[mid]) {
      // left half is sorted
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // right half is sorted
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}
\`\`\`

## Solution: Find Rotation Point, Then Binary Search
- time: O(log n)
- space: O(1)

### Explanation
An alternative two-phase approach: first, binary search to find the index of the minimum element (the rotation point), exactly as in the "Find Minimum in Rotated Sorted Array" problem. This index effectively splits the array into two sorted segments. Then, determine which of the two segments could contain \`target\` by comparing it to the value at the rotation point and the value at the end of the array, and run a standard binary search restricted to that segment.

### Walkthrough
**Find the rotation point (index of the minimum element):**
- Use the same binary search as in Find Minimum in Rotated Sorted Array to find \`pivot\`, the index of the smallest element.

**Decide which segment to search:**
- If \`target >= nums[pivot]\` and \`target <= nums[nums.length - 1]\`, the target (if present) is in the segment \`[pivot, nums.length - 1]\`.
- Otherwise, the target (if present) is in the segment \`[0, pivot - 1]\`.

**Standard binary search within the chosen segment:**
- Run a normal binary search restricted to the chosen \`[start, end]\` range, returning the index if found, or \`-1\` otherwise.

\`\`\`typescript
function search(nums: number[], target: number): number {
  const n = nums.length;

  const findPivot = (): number => {
    let left = 0;
    let right = n - 1;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] > nums[right]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return left;
  };

  const binarySearch = (start: number, end: number): number => {
    let left = start;
    let right = end;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) return mid;
      if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1;
  };

  const pivot = findPivot();

  if (target >= nums[pivot] && target <= nums[n - 1]) {
    return binarySearch(pivot, n - 1);
  } else {
    return binarySearch(0, pivot - 1);
  }
}
\`\`\`
`,le=`---
title: Top K Frequent Elements
number: 347
source: LeetCode
category: Arrays & Hashing
difficulty: Medium
tags: Array, Hash Table, Divide and Conquer, Sorting, Heap (Priority Queue), Bucket Sort, Counting, Quickselect
url: https://leetcode.com/problems/top-k-frequent-elements/
---

## Problem
Given an integer array \`nums\` and an integer \`k\`, return the \`k\` **most frequent** elements in the array. You can return the answer in any order.

**Example 1:**
\`\`\`
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
\`\`\`

**Example 2:**
\`\`\`
Input: nums = [1], k = 1
Output: [1]
\`\`\`

**Constraints:**
- \`1 <= nums.length <= 10^5\`
- \`-10^4 <= nums[i] <= 10^4\`
- \`k\` is a positive integer, and \`k <= number of distinct elements in nums\`.
- The answer is guaranteed to be unique.

## Hints
- The first step is always to count how often each element appears — a Hash Map is enough for that.
- Once you have the frequency table, a simple approach is to sort the elements by frequency in descending order and take the first k — but this costs O(n log n).
- A more optimal approach is **Bucket Sort** — create buckets indexed by frequency (from 0 to n), place each element into the bucket matching how many times it appears, then walk from the highest-frequency bucket downward to collect k elements. This runs in O(n).
- Another option is a Min-Heap of size k to keep the k most frequent elements seen so far.

## Template

\`\`\`typescript
// just init the function name and paramaters. dont remove!.

function topKFrequent(nums: number[], k: number): number[] {
  // TODO
  return [];
}
\`\`\`

## Solution: Sort by Frequency
- time: O(n log n)
- space: O(n)

### Explanation
The most intuitive approach: count each element's frequency using a Hash Map, then take the list of (value, frequency) pairs and sort it in descending order by frequency. The first k pairs after sorting are the answer.

### Walkthrough
- Count the frequency of each element in \`nums\` into a Hash Map \`freq\`.
- Take the (value, frequency) pairs from \`freq\`, sort them in descending order by frequency.
- Take the values of the first k pairs and return them as the result.

\`\`\`typescript
function topKFrequent(nums: number[], k: number): number[] {
  const freq = new Map<number, number>();
  for (const n of nums) {
    freq.set(n, (freq.get(n) ?? 0) + 1);
  }

  const sorted = Array.from(freq.entries()).sort((a, b) => b[1] - a[1]);
  return sorted.slice(0, k).map((entry) => entry[0]);
}
\`\`\`

## Solution: Min-Heap of Size K
- time: O(n log k)
- space: O(n + k)

### Explanation
Instead of sorting every distinct element, we can maintain a Min-Heap that holds at most \`k\` (value, frequency) pairs — always keeping the \`k\` most frequent elements seen so far. For each distinct element, if the heap has fewer than \`k\` items, we push it in; otherwise, we compare it to the smallest-frequency item currently in the heap (the root) and replace the root if the new element is more frequent. Since heap operations cost O(log k), and we do this for each of the (at most n) distinct elements, the total cost is O(n log k), which beats O(n log n) sorting whenever k is much smaller than n.

### Walkthrough
- Count frequencies into a Hash Map \`freq\`.
- Initialize an empty Min-Heap keyed by frequency.
- For each (value, count) in \`freq\`:
  - Push \`(count, value)\` onto the heap.
  - If the heap size exceeds \`k\`, pop the smallest element off.
- After processing all elements, the heap contains exactly the k most frequent values; extract them into the result array.

\`\`\`typescript
class MinHeap {
  private heap: [number, number][] = []; // [count, value]

  get size(): number {
    return this.heap.length;
  }

  push(item: [number, number]): void {
    this.heap.push(item);
    this.bubbleUp(this.heap.length - 1);
  }

  pop(): [number, number] {
    const top = this.heap[0];
    const last = this.heap.pop()!;
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.bubbleDown(0);
    }
    return top;
  }

  private bubbleUp(i: number): void {
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (this.heap[parent][0] <= this.heap[i][0]) break;
      [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
      i = parent;
    }
  }

  private bubbleDown(i: number): void {
    const n = this.heap.length;
    while (true) {
      let smallest = i;
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      if (left < n && this.heap[left][0] < this.heap[smallest][0]) smallest = left;
      if (right < n && this.heap[right][0] < this.heap[smallest][0]) smallest = right;
      if (smallest === i) break;
      [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];
      i = smallest;
    }
  }

  toArray(): [number, number][] {
    return this.heap;
  }
}

function topKFrequent(nums: number[], k: number): number[] {
  const freq = new Map<number, number>();
  for (const n of nums) {
    freq.set(n, (freq.get(n) ?? 0) + 1);
  }

  const minHeap = new MinHeap();
  for (const [value, count] of freq.entries()) {
    minHeap.push([count, value]);
    if (minHeap.size > k) {
      minHeap.pop();
    }
  }

  return minHeap.toArray().map(([, value]) => value);
}
\`\`\`

## Solution: Bucket Sort
- time: O(n)
- space: O(n)

### Explanation
Since an element's frequency can never exceed the array length \`n\`, we can create an array \`buckets\` with \`n + 1\` buckets, where \`buckets[i]\` holds the list of values that appear exactly \`i\` times. After counting frequencies and placing elements into buckets, we just walk \`buckets\` from the highest index (\`n\`) down to \`0\`, collecting elements until we have \`k\` of them. Because the number of buckets and the total number of elements across all buckets are both linear in \`n\`, the whole algorithm runs in O(n), faster than both sorting and the heap-based approach.

### Walkthrough
- Count each element's frequency into a Hash Map \`freq\`.
- Create an array \`buckets\` with \`n + 1\` entries, each an empty list.
- For each (value, count) in \`freq\`, push that value into \`buckets[count]\`.
- Walk \`buckets\` from index \`n\` down to \`0\`; for each non-empty bucket, add its values to the result until you have \`k\` elements.

\`\`\`typescript
function topKFrequent(nums: number[], k: number): number[] {
  const n = nums.length;
  const freq = new Map<number, number>();
  for (const num of nums) {
    freq.set(num, (freq.get(num) ?? 0) + 1);
  }

  const buckets: number[][] = Array.from({ length: n + 1 }, () => []);
  for (const [value, count] of freq.entries()) {
    buckets[count].push(value);
  }

  const result: number[] = [];
  for (let count = n; count >= 0 && result.length < k; count--) {
    for (const value of buckets[count]) {
      if (result.length < k) {
        result.push(value);
      }
    }
  }

  return result;
}
\`\`\`
`,ue=`---
title: Valid Sudoku
number: 36
source: LeetCode
category: Arrays & Hashing
difficulty: Medium
tags: Array, Hash Table, Matrix
url: https://leetcode.com/problems/valid-sudoku/
---

## Problem
Determine if a \`9 x 9\` Sudoku board is valid. Only the filled cells need to be validated **according to the following rules**:

1. Each row must contain the digits \`1-9\` without repetition.
2. Each column must contain the digits \`1-9\` without repetition.
3. Each of the nine \`3 x 3\` sub-boxes of the grid must contain the digits \`1-9\` without repetition.

**Note:**
- A Sudoku board (partially filled) could be valid according to these rules without necessarily being solvable.
- Only the filled cells (not \`'.'\`) need to be validated.

**Example 1:**
\`\`\`
Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true
\`\`\`

**Example 2:**
\`\`\`
Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
\`\`\`
Explanation: same board as example 1, except there are two 8's in the top-left 3x3 sub-box, which makes it invalid.

**Constraints:**
- \`board.length == 9\`
- \`board[i].length == 9\`
- \`board[i][j]\` is a digit \`1-9\` or \`'.'\`.

## Hints
- The board is only ever \`9x9\`, so brute-force checking (re-scanning the relevant row, column, and sub-box for every filled cell) is small enough to be fast in practice, even though it's not the most elegant approach.
- A cleaner approach is to track, for every row, column, and 3x3 sub-box, which digits have already been seen — using a Hash Set (or a small fixed-size array) per row/column/box.
- Every cell \`(r, c)\` belongs to exactly one row \`r\`, one column \`c\`, and one sub-box, whose index can be computed as \`(r // 3) * 3 + (c // 3)\`. A single pass over the board can update all three tracking structures at once.

## Template

\`\`\`typescript
// just init the function name and paramaters. dont remove!.

function isValidSudoku(board: string[][]): boolean {
  // TODO
  return false;
}
\`\`\`

## Solution: Brute Force Re-Scan
- time: O(1) in practice since the board is fixed at 9x9, but conceptually O(n²) work per cell for an n x n board, giving O(n⁴) overall
- space: O(1)

### Explanation
For every filled cell, we can directly re-scan its entire row, its entire column, and its 3x3 sub-box to check for duplicates of that digit, exactly as a human solving Sudoku might double-check. It's the most literal translation of the rules into code, though it repeats a lot of work compared to a single tracked pass.

### Walkthrough
- For each filled cell \`(r, c)\` with digit \`d\`:
  - Scan the rest of row \`r\` for another occurrence of \`d\`.
  - Scan the rest of column \`c\` for another occurrence of \`d\`.
  - Scan the rest of the 3x3 box containing \`(r, c)\` for another occurrence of \`d\`.
  - If any scan finds a duplicate, return \`false\`.
- If every cell passes all three checks, return \`true\`.

\`\`\`typescript
function isValidSudoku(board: string[][]): boolean {
  const isDigitUniqueInRow = (r: number, c: number, digit: string): boolean => {
    for (let col = 0; col < 9; col++) {
      if (col !== c && board[r][col] === digit) return false;
    }
    return true;
  };

  const isDigitUniqueInCol = (r: number, c: number, digit: string): boolean => {
    for (let row = 0; row < 9; row++) {
      if (row !== r && board[row][c] === digit) return false;
    }
    return true;
  };

  const isDigitUniqueInBox = (r: number, c: number, digit: string): boolean => {
    const boxRow = Math.floor(r / 3) * 3;
    const boxCol = Math.floor(c / 3) * 3;
    for (let row = boxRow; row < boxRow + 3; row++) {
      for (let col = boxCol; col < boxCol + 3; col++) {
        if ((row !== r || col !== c) && board[row][col] === digit) return false;
      }
    }
    return true;
  };

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const digit = board[r][c];
      if (digit === ".") continue;
      if (
        !isDigitUniqueInRow(r, c, digit) ||
        !isDigitUniqueInCol(r, c, digit) ||
        !isDigitUniqueInBox(r, c, digit)
      ) {
        return false;
      }
    }
  }

  return true;
}
\`\`\`

## Solution: Hash Sets per Row, Column, and Box
- time: O(1), since the board size is fixed at 9x9 (equivalently O(n²) in terms of board dimension n, done once)
- space: O(1), since at most 9 rows, 9 columns, and 9 boxes are tracked, each holding at most 9 digits

### Explanation
We only need a single pass over the board. For each filled cell, we check whether its digit has already been seen in the same row, the same column, or the same 3x3 sub-box. If so, the board is invalid. Otherwise, we record the digit as seen in all three of those tracking structures and continue. Using one Hash Set per row, per column, and per box lets us check and update in O(1) per cell, avoiding all the repeated re-scanning of the brute force approach.

### Walkthrough
- Create three arrays of 9 Hash Sets each: \`rows\`, \`cols\`, and \`boxes\`.
- Iterate over every cell \`(r, c)\` in the board.
- If the cell is \`'.'\`, skip it.
- Otherwise, let \`digit\` be the cell's value and \`boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3)\`.
  - If \`digit\` is already in \`rows[r]\`, \`cols[c]\`, or \`boxes[boxIndex]\`, return \`false\`.
  - Otherwise, add \`digit\` to all three sets.
- If the full board is scanned without conflicts, return \`true\`.

\`\`\`typescript
function isValidSudoku(board: string[][]): boolean {
  const rows: Set<string>[] = Array.from({ length: 9 }, () => new Set());
  const cols: Set<string>[] = Array.from({ length: 9 }, () => new Set());
  const boxes: Set<string>[] = Array.from({ length: 9 }, () => new Set());

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const digit = board[r][c];
      if (digit === ".") continue;

      const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

      if (rows[r].has(digit) || cols[c].has(digit) || boxes[boxIndex].has(digit)) {
        return false;
      }

      rows[r].add(digit);
      cols[c].add(digit);
      boxes[boxIndex].add(digit);
    }
  }

  return true;
}
\`\`\`

## Solution: Bitmask Tracking
- time: O(1) (fixed 9x9 board, single pass)
- space: O(1), just 27 integers used as bitmasks

### Explanation
Instead of Hash Sets, we can represent "which digits have been seen" for each row, column, and box as a single integer bitmask, where bit \`d\` (for digit \`d\` from 1 to 9) is set if that digit has already appeared. Checking membership becomes a bitwise AND, and marking a digit as seen becomes a bitwise OR — both O(1) primitive operations, and typically faster in practice than Hash Set operations since there's no hashing overhead.

### Walkthrough
- Create three arrays of 9 integers each, \`rowMask\`, \`colMask\`, \`boxMask\`, all initialized to 0.
- For each filled cell \`(r, c)\` with digit \`d\` (1-9):
  - Compute \`bit = 1 << d\` and \`boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3)\`.
  - If \`(rowMask[r] & bit)\`, \`(colMask[c] & bit)\`, or \`(boxMask[boxIndex] & bit)\` is nonzero, the digit was already seen there, so return \`false\`.
  - Otherwise, OR \`bit\` into all three masks.
- If the whole board is processed without conflicts, return \`true\`.

\`\`\`typescript
function isValidSudoku(board: string[][]): boolean {
  const rowMask = new Array(9).fill(0);
  const colMask = new Array(9).fill(0);
  const boxMask = new Array(9).fill(0);

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const cell = board[r][c];
      if (cell === ".") continue;

      const digit = Number(cell);
      const bit = 1 << digit;
      const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

      if (
        (rowMask[r] & bit) !== 0 ||
        (colMask[c] & bit) !== 0 ||
        (boxMask[boxIndex] & bit) !== 0
      ) {
        return false;
      }

      rowMask[r] |= bit;
      colMask[c] |= bit;
      boxMask[boxIndex] |= bit;
    }
  }

  return true;
}
\`\`\`
`,de=`---
title: Median of Two Sorted Arrays
number: 4
source: LeetCode
category: Binary Search
difficulty: Hard
tags: Array, Binary Search, Divide and Conquer
url: https://leetcode.com/problems/median-of-two-sorted-arrays/
---

## Problem
Given two sorted arrays \`nums1\` and \`nums2\` of size \`m\` and \`n\` respectively, return the median of the two sorted arrays.

The overall run time complexity should be \`O(log (m+n))\`.

**Example 1:**
\`\`\`
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
\`\`\`
Explanation: merged array = [1,2,3] and median is 2.

**Example 2:**
\`\`\`
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
\`\`\`
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

**Constraints:**
- \`nums1.length == m\`
- \`nums2.length == n\`
- \`0 <= m <= 1000\`
- \`0 <= n <= 1000\`
- \`1 <= m + n <= 2000\`
- \`-10^6 <= nums1[i], nums2[i] <= 10^6\`

## Hints
- Merging the two arrays and finding the middle element(s) works and is easy to reason about, but takes O(m + n) time, which doesn't meet the required O(log(m+n)).
- The median splits a sorted sequence into a left half and a right half of (nearly) equal size, where every element in the left half is \`<=\` every element in the right half. The goal is to find a "partition" of both arrays combined that achieves this property, without actually merging them.
- Binary search on the **partition point** within the smaller of the two arrays: for a candidate partition index in \`nums1\`, there's exactly one corresponding partition index in \`nums2\` that keeps the total left-half size correct. Check whether the four boundary elements around this combined partition satisfy the "everything on the left \`<=\` everything on the right" property; if not, shift the partition in \`nums1\` left or right using binary search.

## Template

\`\`\`typescript
// just init the function name and paramaters. dont remove!.

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  // TODO
  return 0;
}
\`\`\`

## Solution: Merge and Find Middle (Baseline)
- time: O(m + n)
- space: O(m + n)

### Explanation
The most straightforward approach merges both sorted arrays into one sorted array (using the standard merge step from merge sort), then directly reads off the median from the middle of the merged result — the single middle element if the combined length is odd, or the average of the two middle elements if it's even. This is easy to reason about but doesn't meet the problem's required O(log(m+n)) time complexity, so it's presented as a baseline before the optimal solution.

### Walkthrough
- Merge \`nums1\` and \`nums2\` into a single sorted array \`merged\`, using two pointers that advance through each array, always taking the smaller of the two current elements.
- Let \`total = merged.length\`.
- If \`total\` is odd, return \`merged[Math.floor(total / 2)]\`.
- If \`total\` is even, return the average of \`merged[total / 2 - 1]\` and \`merged[total / 2]\`.

\`\`\`typescript
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const merged: number[] = [];
  let i = 0;
  let j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] <= nums2[j]) {
      merged.push(nums1[i++]);
    } else {
      merged.push(nums2[j++]);
    }
  }
  while (i < nums1.length) merged.push(nums1[i++]);
  while (j < nums2.length) merged.push(nums2[j++]);

  const total = merged.length;
  if (total % 2 === 1) {
    return merged[Math.floor(total / 2)];
  }
  return (merged[total / 2 - 1] + merged[total / 2]) / 2;
}
\`\`\`

## Solution: Binary Search on Partition
- time: O(log(min(m, n)))
- space: O(1)

### Explanation
We binary search over how to "partition" the smaller array (call it \`nums1\`, swapping if needed so it's the smaller one) into a left portion and a right portion. For any chosen partition size \`i\` in \`nums1\`, there's exactly one corresponding partition size \`j\` in \`nums2\` that makes the combined left portion contain exactly half (or half, rounded up, if the total is odd) of all elements: \`j = Math.floor((m + n + 1) / 2) - i\`. A valid partition is one where every element just left of the partition (in either array) is \`<=\` every element just right of the partition (in either array) — checked via four boundary comparisons. If the partition is invalid because \`nums1\`'s left boundary is too large, we need a smaller \`i\` (search left); if \`nums2\`'s left boundary is too large, we need a larger \`i\` (search right). Once a valid partition is found, the median can be read directly off the four boundary values.

### Walkthrough
- Ensure \`nums1\` is the smaller array (swap with \`nums2\` if not), with lengths \`m <= n\`.
- Initialize \`left = 0\` and \`right = m\` (the number of elements from \`nums1\` in the left partition can range from 0 to m).
- While \`left <= right\`:
  - Compute \`i = Math.floor((left + right) / 2)\` (partition size in \`nums1\`).
  - Compute \`j = Math.floor((m + n + 1) / 2) - i\` (partition size in \`nums2\`).
  - Define the four boundary values, using \`-Infinity\`/\`+Infinity\` as sentinels when a partition falls at an array's edge:
    - \`left1 = i === 0 ? -Infinity : nums1[i - 1]\`
    - \`right1 = i === m ? Infinity : nums1[i]\`
    - \`left2 = j === 0 ? -Infinity : nums2[j - 1]\`
    - \`right2 = j === n ? Infinity : nums2[j]\`
  - If \`left1 <= right2 && left2 <= right1\`, this partition is valid:
    - If \`(m + n)\` is odd, return \`max(left1, left2)\`.
    - Otherwise, return \`(max(left1, left2) + min(right1, right2)) / 2\`.
  - Else if \`left1 > right2\`, the partition in \`nums1\` is too far right: set \`right = i - 1\`.
  - Else, the partition in \`nums1\` is too far left: set \`left = i + 1\`.

\`\`\`typescript
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let a = nums1;
  let b = nums2;
  if (a.length > b.length) {
    [a, b] = [b, a];
  }

  const m = a.length;
  const n = b.length;
  let left = 0;
  let right = m;

  while (left <= right) {
    const i = Math.floor((left + right) / 2);
    const j = Math.floor((m + n + 1) / 2) - i;

    const left1 = i === 0 ? -Infinity : a[i - 1];
    const right1 = i === m ? Infinity : a[i];
    const left2 = j === 0 ? -Infinity : b[j - 1];
    const right2 = j === n ? Infinity : b[j];

    if (left1 <= right2 && left2 <= right1) {
      if ((m + n) % 2 === 1) {
        return Math.max(left1, left2);
      }
      return (Math.max(left1, left2) + Math.min(right1, right2)) / 2;
    } else if (left1 > right2) {
      right = i - 1;
    } else {
      left = i + 1;
    }
  }

  throw new Error("Input arrays are not sorted correctly");
}
\`\`\`
`,j=`---
title: Trapping Rain Water
number: 42
source: LeetCode
category: Two Pointers
difficulty: Hard
tags: Array, Two Pointers, Dynamic Programming, Stack, Monotonic Stack
url: https://leetcode.com/problems/trapping-rain-water/
---

## Problem
Given \`n\` non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

**Example 1:**
\`\`\`
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
\`\`\`
Explanation: the elevation map traps 6 units of rain water between the bars.

**Example 2:**
\`\`\`
Input: height = [4,2,0,3,2,5]
Output: 9
\`\`\`

**Constraints:**
- \`n == height.length\`
- \`1 <= n <= 2 * 10^5\`
- \`0 <= height[i] <= 10^5\`

## Hints
- The amount of water trapped above any single bar at index \`i\` is determined by \`min(tallest bar to its left, tallest bar to its right) - height[i]\` (and never less than 0).
- A direct way to compute this is to precompute, for every index, the maximum height to its left and the maximum height to its right, then apply the formula above at each position.
- A more space-efficient approach uses two pointers moving inward from both ends, along with two running "max so far" values (one from the left, one from the right) — at each step, you can always safely resolve the side with the smaller running max, since that side's water level is fully determined regardless of what's further away on the other side.
- A Monotonic Stack approach is also possible: process bars left to right, using a decreasing stack of indices, and whenever a taller bar is found, "pop and fill" the trapped water for the dip that was just closed off.

## Template

\`\`\`typescript
// just init the function name and paramaters. dont remove!.

function trap(height: number[]): number {
  // TODO
  return 0;
}
\`\`\`

## Solution: Prefix and Suffix Max Arrays (Dynamic Programming)
- time: O(n)
- space: O(n)

### Explanation
For every index \`i\`, the water level above it is capped by the shorter of the tallest wall to its left and the tallest wall to its right — water would simply overflow past whichever side is lower. We can precompute \`leftMax[i]\` (the tallest bar from the start up to and including \`i\`) and \`rightMax[i]\` (the tallest bar from \`i\` to the end) in two linear passes, then compute the trapped water at each index as \`min(leftMax[i], rightMax[i]) - height[i]\`, summing these up (never letting an individual amount go below 0, though it naturally won't given how \`leftMax\`/\`rightMax\` are built).

### Walkthrough
- Build \`leftMax\`, where \`leftMax[i] = max(leftMax[i - 1], height[i])\`, starting with \`leftMax[0] = height[0]\`.
- Build \`rightMax\`, where \`rightMax[i] = max(rightMax[i + 1], height[i])\`, starting with \`rightMax[n - 1] = height[n - 1]\`.
- Sum up \`min(leftMax[i], rightMax[i]) - height[i]\` for every index \`i\`.
- Return the total sum.

\`\`\`typescript
function trap(height: number[]): number {
  const n = height.length;
  if (n === 0) return 0;

  const leftMax = new Array(n).fill(0);
  const rightMax = new Array(n).fill(0);

  leftMax[0] = height[0];
  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }

  rightMax[n - 1] = height[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }

  let total = 0;
  for (let i = 0; i < n; i++) {
    total += Math.min(leftMax[i], rightMax[i]) - height[i];
  }

  return total;
}
\`\`\`

## Solution: Two Pointers
- time: O(n)
- space: O(1)

### Explanation
We can avoid the extra arrays by using two pointers, \`left\` and \`right\`, moving inward from both ends, along with two running maximums, \`leftMax\` and \`rightMax\`. At each step, we compare \`leftMax\` and \`rightMax\`: whichever is smaller determines which side we can safely resolve, because that side's trapped water is only limited by its own running max — the far side is guaranteed to have an equal or taller wall somewhere, so it can't be the bottleneck. This lets us compute and add trapped water one bar at a time while only tracking a couple of extra variables, achieving O(1) extra space.

### Walkthrough
- Initialize \`left = 0\`, \`right = n - 1\`, \`leftMax = 0\`, \`rightMax = 0\`, and \`total = 0\`.
- While \`left < right\`:
  - If \`height[left] < height[right]\`:
    - Update \`leftMax = max(leftMax, height[left])\`.
    - Add \`leftMax - height[left]\` to \`total\`.
    - Move \`left\` forward.
  - Otherwise:
    - Update \`rightMax = max(rightMax, height[right])\`.
    - Add \`rightMax - height[right]\` to \`total\`.
    - Move \`right\` backward.
- Return \`total\`.

\`\`\`typescript
function trap(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let total = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      leftMax = Math.max(leftMax, height[left]);
      total += leftMax - height[left];
      left++;
    } else {
      rightMax = Math.max(rightMax, height[right]);
      total += rightMax - height[right];
      right--;
    }
  }

  return total;
}
\`\`\`

## Solution: Monotonic Stack
- time: O(n)
- space: O(n)

### Explanation
We can also solve this with a decreasing Monotonic Stack of indices as we scan left to right. The stack holds indices whose bar heights are decreasing from bottom to top. When we encounter a bar taller than the one at the top of the stack, it means a "dip" has just been closed off on both sides — we pop the dip's bottom off the stack and compute how much water it held, bounded above by the shorter of the new bar and the bar now exposed underneath the popped one, and bounded below by the popped bar's own height. This is repeated as long as the current bar keeps closing off dips, and then the current index is pushed onto the stack.

### Walkthrough
- Initialize an empty stack of indices and \`total = 0\`.
- For each index \`i\` in \`height\`:
  - While the stack isn't empty and \`height[i] > height[stack.top]\`:
    - Pop the top index as \`bottom\`.
    - If the stack is now empty, break (no left wall to trap water against).
    - Let \`left = stack.top\` (the new top after popping \`bottom\`).
    - Compute \`boundedHeight = min(height[left], height[i]) - height[bottom]\`.
    - Compute \`width = i - left - 1\`.
    - Add \`boundedHeight * width\` to \`total\`.
  - Push \`i\` onto the stack.
- Return \`total\`.

\`\`\`typescript
function trap(height: number[]): number {
  const stack: number[] = [];
  let total = 0;

  for (let i = 0; i < height.length; i++) {
    while (stack.length > 0 && height[i] > height[stack[stack.length - 1]]) {
      const bottom = stack.pop()!;

      if (stack.length === 0) break;

      const left = stack[stack.length - 1];
      const boundedHeight = Math.min(height[left], height[i]) - height[bottom];
      const width = i - left - 1;
      total += boundedHeight * width;
    }

    stack.push(i);
  }

  return total;
}
\`\`\`
`,fe=`---
title: Longest Repeating Character Replacement
number: 424
source: LeetCode
category: Sliding Window
difficulty: Medium
tags: Hash Table, String, Sliding Window
url: https://leetcode.com/problems/longest-repeating-character-replacement/
---

## Problem
You are given a string \`s\` and an integer \`k\`. You can choose any character of the string and change it to any other uppercase English character, and you can perform this operation at most \`k\` times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

**Example 1:**
\`\`\`
Input: s = "ABAB", k = 2
Output: 4
\`\`\`
Explanation: replace the two 'A's with two 'B's or vice versa.

**Example 2:**
\`\`\`
Input: s = "AABABBA", k = 1
Output: 4
\`\`\`
Explanation: replace the one 'A' in the middle with 'B' and form "AABBBBA". The substring "BBBB" has the longest repeating letters, which is 4.

**Constraints:**
- \`1 <= s.length <= 10^5\`
- \`s\` consists of only uppercase English letters.
- \`0 <= k <= s.length\`

## Hints
- For a window to be "achievable" with at most k replacements, the number of characters in the window that are *not* the most frequent character must be at most k. In other words: \`windowLength - maxFrequencyInWindow <= k\`.
- This is a Sliding Window problem: expand the window from the right, tracking character frequencies within it. Whenever the window becomes invalid (too many characters would need replacing), shrink it from the left.
- A useful trick: once you've found a window of a certain valid size, you don't need to shrink it below that size again — you only need to check if a *larger* valid window exists, so the window can simply slide (both pointers move together) rather than shrink, which simplifies the loop and keeps the algorithm at O(n) or O(26n).

## Template

\`\`\`typescript
// just init the function name and paramaters. dont remove!.

function characterReplacement(s: string, k: number): number {
  // TODO
  return 0;
}
\`\`\`

## Solution: Sliding Window (Shrinking)
- time: O(n) amortized (O(26n) accounting for the frequency scan, since the alphabet is fixed size)
- space: O(1) (fixed 26-character frequency table)

### Explanation
We maintain a window \`[left, right]\` and a frequency count of characters within it. A window is valid if, after replacing the least-frequent characters in it (up to k replacements), all characters could become the same — which happens exactly when \`windowLength - maxFrequencyInWindow <= k\`. As we expand \`right\`, if the window becomes invalid, we shrink it from the left (decrementing the frequency of \`s[left]\` and incrementing \`left\`) until it's valid again. We track the maximum valid window length seen throughout.

### Walkthrough
- Initialize a frequency array \`count\` of size 26 (or a Hash Map), \`left = 0\`, \`maxFreq = 0\`, and \`longest = 0\`.
- For each \`right\` from \`0\` to \`n - 1\`:
  - Increment \`count[s[right]]\` and update \`maxFreq = max(maxFreq, count[s[right]])\`.
  - While \`(right - left + 1) - maxFreq > k\`: decrement \`count[s[left]]\` and increment \`left\` (shrink the window; note \`maxFreq\` is allowed to become stale here — see explanation below).
  - Update \`longest = max(longest, right - left + 1)\`.
- Return \`longest\`.

\`\`\`typescript
function characterReplacement(s: string, k: number): number {
  const count = new Array(26).fill(0);
  const aCode = "A".charCodeAt(0);
  let left = 0;
  let maxFreq = 0;
  let longest = 0;

  for (let right = 0; right < s.length; right++) {
    const rightIndex = s.charCodeAt(right) - aCode;
    count[rightIndex]++;
    maxFreq = Math.max(maxFreq, count[rightIndex]);

    while (right - left + 1 - maxFreq > k) {
      const leftIndex = s.charCodeAt(left) - aCode;
      count[leftIndex]--;
      left++;
    }

    longest = Math.max(longest, right - left + 1);
  }

  return longest;
}
\`\`\`

## Solution: Sliding Window (Non-Shrinking, Slide Only)
- time: O(n)
- space: O(1) (fixed 26-character frequency table)

### Explanation
A subtle but important optimization: we don't actually need the window to ever shrink smaller than the best length found so far. If the window ever becomes invalid, we can just slide both \`left\` and \`right\` forward together (keeping the window size the same) instead of shrinking it — because we're only interested in whether a **larger** valid window exists, not in tracking the exact valid boundaries at every step. This means \`maxFreq\` never needs to decrease even as characters leave the window on the left (it may become temporarily "stale," i.e. larger than the current window's true max frequency, but that's fine — it can only cause us to keep a window the same size for one extra step, never to report an incorrect answer, since the final answer is always \`right - left + 1\` at the end).

### Walkthrough
- Initialize a frequency array \`count\` of size 26, \`left = 0\`, and \`maxFreq = 0\`.
- For each \`right\` from \`0\` to \`n - 1\`:
  - Increment \`count[s[right]]\` and update \`maxFreq = max(maxFreq, count[s[right]])\`.
  - If \`(right - left + 1) - maxFreq > k\`, decrement \`count[s[left]]\` and increment \`left\` (slide the window forward by exactly one on the left, no loop needed).
- Return \`s.length - left\` (the final window size, which equals the longest valid window found).

\`\`\`typescript
function characterReplacement(s: string, k: number): number {
  const count = new Array(26).fill(0);
  const aCode = "A".charCodeAt(0);
  let left = 0;
  let maxFreq = 0;

  for (let right = 0; right < s.length; right++) {
    const rightIndex = s.charCodeAt(right) - aCode;
    count[rightIndex]++;
    maxFreq = Math.max(maxFreq, count[rightIndex]);

    if (right - left + 1 - maxFreq > k) {
      const leftIndex = s.charCodeAt(left) - aCode;
      count[leftIndex]--;
      left++;
    }
  }

  return s.length - left;
}
\`\`\`
`,pe=`---
title: Group Anagrams
number: 49
source: LeetCode
category: Arrays & Hashing
difficulty: Medium
tags: Array, Hash Table, String, Sorting
url: https://leetcode.com/problems/group-anagrams/
---

## Problem
Given an array of strings \`strs\`, group the **anagrams** together. You can return the answer in any order.

An anagram is a word or phrase formed by rearranging the letters of another word or phrase, using all the original letters exactly once each.

**Example 1:**
\`\`\`
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
\`\`\`

**Example 2:**
\`\`\`
Input: strs = [""]
Output: [[""]]
\`\`\`

**Example 3:**
\`\`\`
Input: strs = ["a"]
Output: [["a"]]
\`\`\`

**Constraints:**
- \`1 <= strs.length <= 10^4\`
- \`0 <= strs[i].length <= 100\`
- \`strs[i]\` consists of lowercase English letters only.

## Hints
- Two strings are anagrams of each other exactly when they share the same set of characters with the same frequencies.
- The core idea: come up with a "key" that's shared by all anagrams of each other, then use a Hash Map to group strings that share the same key.
- Two common ways to build the key: (1) sort the characters of the string and use the sorted string as the key, or (2) count the frequency of the 26 letters and use that count as the key (faster since it avoids sorting).

## Template

\`\`\`typescript
// just init the function name and paramaters. dont remove!.

function groupAnagrams(strs: string[]): string[][] {
  // TODO
  return [];
}
\`\`\`

## Solution: Brute Force Pairwise Comparison
- time: O(n² * k log k), where n is the number of strings and k is the max string length
- space: O(n * k)

### Explanation
The most naive approach checks every string against every group formed so far, using a "is this string an anagram of the group's representative" test (comparing sorted versions of the strings). This avoids any clever key design but is quadratic in the number of strings, which is too slow for large inputs — it's mainly useful for building intuition before moving to a hashing-based key.

### Walkthrough
- Initialize an empty list of groups, where each group stores a representative sorted string and its members.
- For each string \`s\`, sort its characters to get \`sortedS\`.
- Scan existing groups for one whose representative equals \`sortedS\`; if found, add \`s\` to that group.
- If no matching group is found, start a new group with \`s\`.
- Return the members of every group.

\`\`\`typescript
function groupAnagrams(strs: string[]): string[][] {
  const groups: { key: string; members: string[] }[] = [];

  for (const s of strs) {
    const key = s.split("").sort().join("");
    const existing = groups.find((g) => g.key === key);
    if (existing) {
      existing.members.push(s);
    } else {
      groups.push({ key, members: [s] });
    }
  }

  return groups.map((g) => g.members);
}
\`\`\`

## Solution: Sorted String as Key
- time: O(n * k log k), where n is the number of strings and k is the length of the longest string
- space: O(n * k)

### Explanation
If two strings are anagrams of each other, sorting their characters produces two identical strings. So we can use the "sorted string" as a key to group anagrams together in a Hash Map, where the value is the list of original strings that share that key. This avoids the pairwise scanning of the brute force approach by using O(1) average Hash Map lookups instead.

### Walkthrough
- Initialize an empty Hash Map \`groups\`, mapping a key (sorted string) to a list of original strings.
- For each string \`s\` in \`strs\`:
  - Sort the characters of \`s\` to build the key \`key\`.
  - If \`key\` isn't in \`groups\` yet, initialize an empty list for it.
  - Push \`s\` onto the list for \`key\`.
- Return all the lists (values) in \`groups\`.

\`\`\`typescript
function groupAnagrams(strs: string[]): string[][] {
  const groups = new Map<string, string[]>();

  for (const s of strs) {
    const key = s.split("").sort().join("");
    if (!groups.has(key)) {
      groups.set(key, []);
    }
    groups.get(key)!.push(s);
  }

  return Array.from(groups.values());
}
\`\`\`

## Solution: Character Count as Key
- time: O(n * k), where n is the number of strings and k is the length of the longest string
- space: O(n * k)

### Explanation
Sorting a string to build the key costs O(k log k) per string. We can do better by counting the frequency of the 26 letters in each string (only O(k)), then using that count (converted into an immutable key such as a joined string) as the key. Two strings are anagrams exactly when their 26-letter frequency counts are identical.

### Walkthrough
- Initialize an empty Hash Map \`groups\`.
- For each string \`s\`:
  - Build a \`count\` array of 26 zeros.
  - Iterate through each character in \`s\`, incrementing the matching counter.
  - Convert \`count\` into a key (join the numbers with commas) usable as a Hash Map key.
  - Push \`s\` onto the list for that key.
- Return all the lists in \`groups\`.

\`\`\`typescript
function groupAnagrams(strs: string[]): string[][] {
  const groups = new Map<string, string[]>();
  const aCode = "a".charCodeAt(0);

  for (const s of strs) {
    const count = new Array(26).fill(0);
    for (const ch of s) {
      count[ch.charCodeAt(0) - aCode]++;
    }
    const key = count.join(",");

    if (!groups.has(key)) {
      groups.set(key, []);
    }
    groups.get(key)!.push(s);
  }

  return Array.from(groups.values());
}
\`\`\`

## Solution: Prime Number Product as Key
- time: O(n * k), where n is the number of strings and k is the length of the longest string
- space: O(n * k)

### Explanation
A more mathematical trick: assign each of the 26 letters a distinct prime number. Multiply the primes corresponding to each character of a string together to get a single numeric key. Because of the fundamental theorem of arithmetic (every integer has a unique prime factorization), two strings produce the same product if and only if they contain exactly the same multiset of characters — meaning they're anagrams. This avoids building an array-based key entirely, though for very long strings the product can grow large and would need BigInt in a real implementation.

### Walkthrough
- Define an array \`primes\` of 26 distinct prime numbers, one per letter.
- For each string \`s\`, compute the product of \`primes[charIndex]\` for every character (using BigInt to avoid overflow).
- Use the resulting BigInt (converted to a string) as the Hash Map key.
- Group strings sharing the same key, and return all groups.

\`\`\`typescript
function groupAnagrams(strs: string[]): string[][] {
  const primes = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,
    71, 73, 79, 83, 89, 97, 101,
  ];
  const aCode = "a".charCodeAt(0);
  const groups = new Map<string, string[]>();

  for (const s of strs) {
    let product = 1n;
    for (const ch of s) {
      product *= BigInt(primes[ch.charCodeAt(0) - aCode]);
    }
    const key = product.toString();

    if (!groups.has(key)) {
      groups.set(key, []);
    }
    groups.get(key)!.push(s);
  }

  return Array.from(groups.values());
}
\`\`\`
`,me='---\ntitle: Permutation in String\nnumber: 567\nsource: LeetCode\ncategory: Sliding Window\ndifficulty: Medium\ntags: Hash Table, Two Pointers, String, Sliding Window\nurl: https://leetcode.com/problems/permutation-in-string/\n---\n\n## Problem\nGiven two strings `s1` and `s2`, return `true` if `s2` contains a permutation of `s1`, or `false` otherwise.\n\nIn other words, return `true` if one of `s1`\'s permutations is a substring of `s2`.\n\n**Example 1:**\n```\nInput: s1 = "ab", s2 = "eidbaooo"\nOutput: true\n```\nExplanation: `s2` contains one permutation of `s1` ("ba").\n\n**Example 2:**\n```\nInput: s1 = "ab", s2 = "eidboaoo"\nOutput: false\n```\n\n**Constraints:**\n- `1 <= s1.length, s2.length <= 10^4`\n- `s1` and `s2` consist of lowercase English letters.\n\n## Hints\n- A permutation of `s1` occurring in `s2` means there\'s some window in `s2`, of the same length as `s1`, whose character frequency count exactly matches the character frequency count of `s1`.\n- This is a **fixed-size Sliding Window** problem: since we only care about windows of exactly `s1.length`, slide a window of that fixed size across `s2`, comparing character frequency counts.\n- Instead of recomputing the frequency count from scratch for every window position (which would be too slow), update it incrementally: when the window slides forward by one, remove the character that just left the window and add the character that just entered.\n\n## Template\n\n```typescript\n// just init the function name and paramaters. dont remove!.\n\nfunction checkInclusion(s1: string, s2: string): boolean {\n  // TODO\n  return false;\n}\n```\n\n## Solution: Brute Force (Sort and Compare Every Window)\n- time: O(n * m log m), where n is the length of s2 and m is the length of s1\n- space: O(m)\n\n### Explanation\nThe most direct approach checks every substring of `s2` with length equal to `s1.length`, sorting both it and `s1` to compare whether they\'re anagrams of each other (a permutation of `s1` is exactly a string with the same multiset of characters).\n\n### Walkthrough\n- Sort `s1`\'s characters to get `sortedS1`.\n- For each starting index `i` in `s2` such that `i + s1.length <= s2.length`:\n  - Extract the substring `s2[i .. i + s1.length - 1]`, sort its characters.\n  - If it equals `sortedS1`, return `true`.\n- If no window matches, return `false`.\n\n```typescript\nfunction checkInclusion(s1: string, s2: string): boolean {\n  const m = s1.length;\n  const n = s2.length;\n  if (m > n) return false;\n\n  const sortedS1 = s1.split("").sort().join("");\n\n  for (let i = 0; i + m <= n; i++) {\n    const window = s2.slice(i, i + m).split("").sort().join("");\n    if (window === sortedS1) return true;\n  }\n\n  return false;\n}\n```\n\n## Solution: Fixed-Size Sliding Window with Frequency Arrays\n- time: O(n), where n is the length of s2 (each window comparison is O(26), a constant)\n- space: O(1) (two fixed 26-element frequency arrays)\n\n### Explanation\nWe build a frequency array for `s1` once, then maintain a frequency array for a sliding window of the same length in `s2`, updating it incrementally as the window moves one position at a time: adding the newly entered character and removing the character that just left. At every position, we compare the two frequency arrays — if they match, the current window is a permutation of `s1`. This avoids re-sorting or rebuilding the window\'s frequency count from scratch each time.\n\n### Walkthrough\n- If `s1.length > s2.length`, return `false` immediately.\n- Build `s1Count`, a 26-element frequency array for `s1`.\n- Build `windowCount`, a 26-element frequency array for the first `s1.length` characters of `s2`.\n- Compare `s1Count` and `windowCount`; if equal, return `true`.\n- For each subsequent window start `i` from `1` to `s2.length - s1.length`:\n  - Increment the count for the character entering the window (`s2[i + s1.length - 1]`).\n  - Decrement the count for the character leaving the window (`s2[i - 1]`).\n  - Compare `s1Count` and `windowCount`; if equal, return `true`.\n- If no window matches, return `false`.\n\n```typescript\nfunction checkInclusion(s1: string, s2: string): boolean {\n  const m = s1.length;\n  const n = s2.length;\n  if (m > n) return false;\n\n  const aCode = "a".charCodeAt(0);\n  const s1Count = new Array(26).fill(0);\n  const windowCount = new Array(26).fill(0);\n\n  for (let i = 0; i < m; i++) {\n    s1Count[s1.charCodeAt(i) - aCode]++;\n    windowCount[s2.charCodeAt(i) - aCode]++;\n  }\n\n  const arraysMatch = (a: number[], b: number[]): boolean => {\n    for (let i = 0; i < 26; i++) {\n      if (a[i] !== b[i]) return false;\n    }\n    return true;\n  };\n\n  if (arraysMatch(s1Count, windowCount)) return true;\n\n  for (let i = m; i < n; i++) {\n    windowCount[s2.charCodeAt(i) - aCode]++;\n    windowCount[s2.charCodeAt(i - m) - aCode]--;\n\n    if (arraysMatch(s1Count, windowCount)) return true;\n  }\n\n  return false;\n}\n```\n\n## Solution: Sliding Window with a Running Match Counter\n- time: O(n)\n- space: O(1)\n\n### Explanation\nComparing the full 26-element frequency arrays at every window position (as in the previous solution) adds a constant factor of 26 to every step. We can avoid this by tracking a single integer, `matches`, representing how many of the 26 letters currently have *equal* counts between `s1Count` and `windowCount`. Whenever an increment or decrement causes a letter\'s counts to become equal, we increase `matches`; whenever it causes them to become unequal, we decrease `matches`. The window is a valid permutation exactly when `matches === 26`, which is an O(1) check instead of an O(26) array comparison.\n\n### Walkthrough\n- If `s1.length > s2.length`, return `false` immediately.\n- Build `s1Count` and `windowCount` frequency arrays for `s1` and the first window of `s2`, as before.\n- Compute the initial `matches` by counting how many of the 26 indices already have `s1Count[i] === windowCount[i]`.\n- If `matches === 26`, return `true`.\n- For each subsequent window position, when adding a character `c` to the window:\n  - If `windowCount[c] === s1Count[c]` before incrementing, decrement `matches` (they were equal, about to become unequal).\n  - Increment `windowCount[c]`.\n  - If `windowCount[c] === s1Count[c]` after incrementing, increment `matches` (they just became equal).\n  - Do the same symmetric update when removing the character leaving the window.\n  - If `matches === 26`, return `true`.\n- If no window matches, return `false`.\n\n```typescript\nfunction checkInclusion(s1: string, s2: string): boolean {\n  const m = s1.length;\n  const n = s2.length;\n  if (m > n) return false;\n\n  const aCode = "a".charCodeAt(0);\n  const s1Count = new Array(26).fill(0);\n  const windowCount = new Array(26).fill(0);\n\n  for (let i = 0; i < m; i++) {\n    s1Count[s1.charCodeAt(i) - aCode]++;\n    windowCount[s2.charCodeAt(i) - aCode]++;\n  }\n\n  let matches = 0;\n  for (let i = 0; i < 26; i++) {\n    if (s1Count[i] === windowCount[i]) matches++;\n  }\n\n  const adjust = (index: number, delta: number): void => {\n    if (windowCount[index] === s1Count[index]) matches--;\n    windowCount[index] += delta;\n    if (windowCount[index] === s1Count[index]) matches++;\n  };\n\n  if (matches === 26) return true;\n\n  for (let i = m; i < n; i++) {\n    adjust(s2.charCodeAt(i) - aCode, 1);\n    adjust(s2.charCodeAt(i - m) - aCode, -1);\n\n    if (matches === 26) return true;\n  }\n\n  return false;\n}\n```\n',he=`---
title: Binary Search
number: 704
source: LeetCode
category: Binary Search
difficulty: Easy
tags: Array, Binary Search
url: https://leetcode.com/problems/binary-search/
---

## Problem
Given an array of integers \`nums\` which is sorted in ascending order, and an integer \`target\`, write a function to search \`target\` in \`nums\`. If \`target\` exists, then return its index. Otherwise, return \`-1\`.

You must write an algorithm with \`O(log n)\` runtime complexity.

**Example 1:**
\`\`\`
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
\`\`\`
Explanation: 9 exists in nums and its index is 4.

**Example 2:**
\`\`\`
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
\`\`\`
Explanation: 2 does not exist in nums so return -1.

**Constraints:**
- \`1 <= nums.length <= 10^4\`
- \`-10^4 < nums[i], target < 10^4\`
- All the integers in \`nums\` are unique.
- \`nums\` is sorted in ascending order.

## Hints
- Scanning the array one element at a time works but is O(n), which doesn't meet the required O(log n) time.
- Since the array is sorted, you can repeatedly check the middle element and eliminate half of the remaining search space each time — this is the classic **Binary Search** pattern.
- Maintain \`left\` and \`right\` boundaries; compare \`nums[mid]\` to \`target\` to decide whether to search the left half or the right half next, and stop when the target is found or the search space is empty.

## Template

\`\`\`typescript
// just init the function name and paramaters. dont remove!.

function search(nums: number[], target: number): number {
  // TODO
  return -1;
}
\`\`\`

## Solution: Binary Search
- time: O(log n)
- space: O(1)

### Explanation
Since \`nums\` is sorted, we can repeatedly narrow down the search range by checking the middle element. If the middle element equals the target, we're done. If the middle element is smaller than the target, the target (if present) must be in the right half, so we discard the left half. If the middle element is larger, we discard the right half. Each step halves the remaining search space, giving O(log n) total comparisons.

### Walkthrough
- Initialize \`left = 0\` and \`right = nums.length - 1\`.
- While \`left <= right\`:
  - Compute \`mid = Math.floor((left + right) / 2)\`.
  - If \`nums[mid] === target\`, return \`mid\`.
  - If \`nums[mid] < target\`, set \`left = mid + 1\` (search the right half).
  - Otherwise, set \`right = mid - 1\` (search the left half).
- If the loop ends without finding the target, return \`-1\`.

\`\`\`typescript
function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
\`\`\`

## Solution: Recursive Binary Search
- time: O(log n)
- space: O(log n) due to the recursion call stack

### Explanation
The same halving logic can be expressed recursively instead of with an explicit loop: at each call, we check the middle element of the current \`[left, right]\` range and recurse into either the left or right half depending on the comparison, until the target is found or the range becomes empty. This is equivalent in behavior to the iterative version, trading O(1) space for a more directly "divide and conquer"-style structure, at the cost of O(log n) stack space.

### Walkthrough
- Define a recursive helper \`binarySearch(left, right)\`:
  - If \`left > right\`, return \`-1\` (search space exhausted).
  - Compute \`mid = Math.floor((left + right) / 2)\`.
  - If \`nums[mid] === target\`, return \`mid\`.
  - If \`nums[mid] < target\`, recurse on \`binarySearch(mid + 1, right)\`.
  - Otherwise, recurse on \`binarySearch(left, mid - 1)\`.
- Call \`binarySearch(0, nums.length - 1)\` and return its result.

\`\`\`typescript
function search(nums: number[], target: number): number {
  function binarySearch(left: number, right: number): number {
    if (left > right) return -1;

    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      return binarySearch(mid + 1, right);
    } else {
      return binarySearch(left, mid - 1);
    }
  }

  return binarySearch(0, nums.length - 1);
}
\`\`\`
`,ge=`---
title: Daily Temperatures
number: 739
source: LeetCode
category: Stack
difficulty: Medium
tags: Array, Stack, Monotonic Stack
url: https://leetcode.com/problems/daily-temperatures/
---

## Problem
Given an array of integers \`temperatures\` representing daily temperatures, return an array \`answer\` such that \`answer[i]\` is the number of days you have to wait after day \`i\` to get a warmer temperature. If there is no future day for which this is possible, keep \`answer[i] == 0\` instead.

**Example 1:**
\`\`\`
Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]
\`\`\`

**Example 2:**
\`\`\`
Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]
\`\`\`

**Example 3:**
\`\`\`
Input: temperatures = [30,60,90]
Output: [1,1,0]
\`\`\`

**Constraints:**
- \`1 <= temperatures.length <= 10^5\`
- \`30 <= temperatures[i] <= 100\`

## Hints
- The brute force approach scans forward from every day until a warmer day is found, which is O(n²) in the worst case (e.g. strictly decreasing temperatures).
- Think about it from the perspective of a **Monotonic Stack** of *unresolved* days — days that are still waiting for a warmer day to appear. As you scan left to right, whenever the current temperature is warmer than the temperature at the top of the stack, that top day's "wait" is now resolved.
- Maintain a stack of indices with strictly decreasing temperatures. When the current day's temperature is higher than the temperature at the index on top of the stack, pop that index, compute the day difference, and repeat until the stack's top temperature is higher (or the stack is empty), then push the current index.

## Template

\`\`\`typescript
// just init the function name and paramaters. dont remove!.

function dailyTemperatures(temperatures: number[]): number[] {
  // TODO
  return [];
}
\`\`\`

## Solution: Brute Force
- time: O(n²)
- space: O(1) extra (not counting the output array)

### Explanation
The most direct approach, for each day, scans forward through all future days until it finds one with a strictly warmer temperature, recording the distance. If no warmer day is found, the answer for that day stays 0.

### Walkthrough
- Initialize \`answer\` as an array of zeros, same length as \`temperatures\`.
- For each index \`i\` from \`0\` to \`n - 1\`:
  - For each index \`j\` from \`i + 1\` to \`n - 1\`:
    - If \`temperatures[j] > temperatures[i]\`, set \`answer[i] = j - i\` and break out of the inner loop.
- Return \`answer\`.

\`\`\`typescript
function dailyTemperatures(temperatures: number[]): number[] {
  const n = temperatures.length;
  const answer = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (temperatures[j] > temperatures[i]) {
        answer[i] = j - i;
        break;
      }
    }
  }

  return answer;
}
\`\`\`

## Solution: Monotonic Stack
- time: O(n)
- space: O(n)

### Explanation
We maintain a stack of indices representing days whose "warmer day" hasn't been found yet, kept in an order where the corresponding temperatures are strictly decreasing from bottom to top. As we scan through each day, we compare the current temperature to the temperature at the index on top of the stack. If the current day is warmer, it resolves that stacked day's wait — we pop it and record the day difference as the answer for that popped index. We keep popping and resolving as long as the current temperature keeps being warmer than what's now on top. Finally, we push the current day's index onto the stack (it becomes a new unresolved day, waiting for something warmer). Each index is pushed and popped from the stack at most once, giving O(n) total time.

### Walkthrough
- Initialize \`answer\` as an array of zeros, same length as \`temperatures\`, and an empty stack of indices.
- For each index \`i\` from \`0\` to \`n - 1\`:
  - While the stack isn't empty and \`temperatures[i] > temperatures[stack.top]\`:
    - Pop the top index as \`prevIndex\`.
    - Set \`answer[prevIndex] = i - prevIndex\`.
  - Push \`i\` onto the stack.
- Return \`answer\`.

\`\`\`typescript
function dailyTemperatures(temperatures: number[]): number[] {
  const n = temperatures.length;
  const answer = new Array(n).fill(0);
  const stack: number[] = []; // indices with decreasing temperatures

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const prevIndex = stack.pop()!;
      answer[prevIndex] = i - prevIndex;
    }
    stack.push(i);
  }

  return answer;
}
\`\`\`
`,_e=`---
title: Search a 2D Matrix
number: 74
source: LeetCode
category: Binary Search
difficulty: Medium
tags: Array, Binary Search, Matrix
url: https://leetcode.com/problems/search-a-2d-matrix/
---

## Problem
You are given an \`m x n\` integer matrix \`matrix\` with the following two properties:
- Each row is sorted in non-decreasing order.
- The first integer of each row is greater than the last integer of the previous row.

Given an integer \`target\`, return \`true\` if \`target\` is in \`matrix\`, or \`false\` otherwise.

You must write a solution in \`O(log(m * n))\` time complexity.

**Example 1:**
\`\`\`
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
\`\`\`

**Example 2:**
\`\`\`
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false
\`\`\`

**Constraints:**
- \`m == matrix.length\`
- \`n == matrix[i].length\`
- \`1 <= m, n <= 100\`
- \`-10^4 <= matrix[i][j], target <= 10^4\`

## Hints
- Because each row is sorted and every row's values are all greater than the previous row's, the entire matrix can be treated as one big sorted array of length \`m * n\` if you flatten it conceptually.
- A two-step Binary Search — first search for the correct row using each row's first element, then binary search within that row — also works, but a single binary search over the flattened index space is simpler.
- To convert a flattened index \`idx\` (from \`0\` to \`m*n - 1\`) back into 2D coordinates, use \`row = Math.floor(idx / n)\` and \`col = idx % n\`, where \`n\` is the number of columns.

## Template

\`\`\`typescript
// just init the function name and paramaters. dont remove!.

function searchMatrix(matrix: number[][], target: number): boolean {
  // TODO
  return false;
}
\`\`\`

## Solution: Binary Search on Flattened Index
- time: O(log(m * n))
- space: O(1)

### Explanation
Since every row is sorted and each row's values are entirely greater than the previous row's, the matrix behaves exactly like one long sorted array if you read it row by row, left to right. We can binary search directly over this conceptual flattened array of length \`m * n\`, without physically flattening it — instead converting each candidate flattened index into its corresponding \`(row, col)\` position on the fly using integer division and modulo by the row width \`n\`.

### Walkthrough
- Let \`m\` be the number of rows and \`n\` be the number of columns; if the matrix is empty, return \`false\`.
- Initialize \`left = 0\` and \`right = m * n - 1\`.
- While \`left <= right\`:
  - Compute \`mid = Math.floor((left + right) / 2)\`.
  - Convert \`mid\` to matrix coordinates: \`row = Math.floor(mid / n)\`, \`col = mid % n\`.
  - Let \`value = matrix[row][col]\`.
  - If \`value === target\`, return \`true\`.
  - If \`value < target\`, set \`left = mid + 1\`.
  - Otherwise, set \`right = mid - 1\`.
- If the loop ends without finding the target, return \`false\`.

\`\`\`typescript
function searchMatrix(matrix: number[][], target: number): boolean {
  const m = matrix.length;
  if (m === 0) return false;
  const n = matrix[0].length;
  if (n === 0) return false;

  let left = 0;
  let right = m * n - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const row = Math.floor(mid / n);
    const col = mid % n;
    const value = matrix[row][col];

    if (value === target) {
      return true;
    } else if (value < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}
\`\`\`

## Solution: Two-Step Binary Search (Row, Then Column)
- time: O(log m + log n)
- space: O(1)

### Explanation
Instead of treating the matrix as one flattened array, we can search in two explicit stages, which mirrors how the problem's structure is described. First, binary search over the rows using each row's first element to find the one row that could possibly contain \`target\` (the last row whose first element is \`<= target\`). Then, binary search within that specific row for \`target\`. This is conceptually the same total work as the flattened approach (both are O(log(mn)) since \`log m + log n = log(mn)\`), but keeps the row-finding and column-finding steps separate, which some find easier to reason about or adapt to variants (like when only some matrix properties hold).

### Walkthrough
**Find the candidate row:**
- Initialize \`top = 0\` and \`bottom = m - 1\`.
- While \`top <= bottom\`:
  - Compute \`midRow = Math.floor((top + bottom) / 2)\`.
  - If \`matrix[midRow][0] === target\`, return \`true\` immediately.
  - If \`matrix[midRow][0] < target\`, set \`top = midRow + 1\`.
  - Otherwise, set \`bottom = midRow - 1\`.
- After the loop, \`bottom\` is the index of the last row whose first element is less than \`target\` — this is the only row that could contain \`target\` (if \`bottom < 0\`, no row qualifies, so return \`false\`).

**Binary search within that row:**
- Let \`targetRow = matrix[bottom]\`.
- Initialize \`left = 0\` and \`right = targetRow.length - 1\`.
- Standard binary search for \`target\` within \`targetRow\`; return \`true\` if found, \`false\` otherwise.

\`\`\`typescript
function searchMatrix(matrix: number[][], target: number): boolean {
  const m = matrix.length;
  if (m === 0) return false;

  let top = 0;
  let bottom = m - 1;

  while (top <= bottom) {
    const midRow = Math.floor((top + bottom) / 2);
    if (matrix[midRow][0] === target) return true;
    if (matrix[midRow][0] < target) {
      top = midRow + 1;
    } else {
      bottom = midRow - 1;
    }
  }

  if (bottom < 0) return false;

  const row = matrix[bottom];
  let left = 0;
  let right = row.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (row[mid] === target) {
      return true;
    } else if (row[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}
\`\`\`
`,ve='---\ntitle: Minimum Window Substring\nnumber: 76\nsource: LeetCode\ncategory: Sliding Window\ndifficulty: Hard\ntags: Hash Table, String, Sliding Window\nurl: https://leetcode.com/problems/minimum-window-substring/\n---\n\n## Problem\nGiven two strings `s` and `t` of lengths `m` and `n` respectively, return the minimum window substring of `s` such that every character in `t` (including duplicates) is included in the window. If there is no such substring, return the empty string `""`.\n\n**Example 1:**\n```\nInput: s = "ADOBECODEBANC", t = "ABC"\nOutput: "BANC"\n```\nExplanation: the minimum window substring "BANC" includes \'A\', \'B\', and \'C\' from string t.\n\n**Example 2:**\n```\nInput: s = "a", t = "a"\nOutput: "a"\n```\nExplanation: the entire string s is the minimum window.\n\n**Example 3:**\n```\nInput: s = "a", t = "aa"\nOutput: ""\n```\nExplanation: both \'a\'s from t must be included in the window. Since the largest window of s only has one \'a\', return the empty string.\n\n**Constraints:**\n- `m == s.length`\n- `n == t.length`\n- `1 <= m, n <= 10^5`\n- `s` and `t` consist of uppercase and lowercase English letters.\n\n## Hints\n- The brute force approach checks every possible substring of `s` for whether it contains all characters of `t`, which is very slow (O(m² * n) or worse).\n- This is a **variable-size Sliding Window** problem: grow the window from the right until it satisfies the requirement (contains all of `t`\'s characters with the right frequencies), then shrink it from the left as much as possible while still satisfying the requirement, recording the smallest valid window found along the way.\n- Track a frequency count of `t`\'s characters, and a running counter of how many *distinct* required characters currently have their frequency requirement fully met within the window. When this counter equals the number of distinct characters in `t`, the window is valid.\n\n## Template\n\n```typescript\n// just init the function name and paramaters. dont remove!.\n\nfunction minWindow(s: string, t: string): string {\n  // TODO\n  return "";\n}\n```\n\n## Solution: Brute Force\n- time: O(m² * n), where m is the length of s and n is the length of t\n- space: O(n)\n\n### Explanation\nThe most direct approach checks every possible substring of `s`, testing whether it contains all the characters of `t` (with the correct multiplicities) by building a frequency count for the substring and comparing it against the required frequency count of `t`. Among all substrings that qualify, we keep the shortest one.\n\n### Walkthrough\n- Build a frequency map `need` for `t`.\n- For each starting index `i` in `s`:\n  - For each ending index `j >= i` in `s`:\n    - Build a frequency map for `s[i..j]` and check whether it satisfies `need` (contains at least as many of each required character).\n    - If it does, compare its length to the best window found so far, update if shorter, then break out of the inner loop (extending further can\'t make this particular `i` any better).\n- Return the shortest valid window found, or `""` if none exists.\n\n```typescript\nfunction minWindow(s: string, t: string): string {\n  if (t.length === 0 || s.length < t.length) return "";\n\n  const need = new Map<string, number>();\n  for (const ch of t) {\n    need.set(ch, (need.get(ch) ?? 0) + 1);\n  }\n\n  const satisfies = (count: Map<string, number>): boolean => {\n    for (const [ch, requiredCount] of need.entries()) {\n      if ((count.get(ch) ?? 0) < requiredCount) return false;\n    }\n    return true;\n  };\n\n  let bestStart = -1;\n  let bestLength = Infinity;\n\n  for (let i = 0; i < s.length; i++) {\n    const windowCount = new Map<string, number>();\n    for (let j = i; j < s.length; j++) {\n      windowCount.set(s[j], (windowCount.get(s[j]) ?? 0) + 1);\n      if (satisfies(windowCount)) {\n        if (j - i + 1 < bestLength) {\n          bestLength = j - i + 1;\n          bestStart = i;\n        }\n        break;\n      }\n    }\n  }\n\n  return bestStart === -1 ? "" : s.slice(bestStart, bestStart + bestLength);\n}\n```\n\n## Solution: Sliding Window with Frequency Map and Match Counter\n- time: O(m + n), where m is the length of s and n is the length of t\n- space: O(n)\n\n### Explanation\nWe maintain a Sliding Window `[left, right]` over `s`, along with a frequency count of characters currently inside the window and a running counter `have` tracking how many distinct required characters currently meet or exceed their needed frequency. We expand `right` one character at a time; whenever a character\'s window count reaches exactly its required count, we increment `have`. Once `have` equals the total number of distinct characters in `t` (`need.size`), the window is valid, so we try to shrink it from the left as much as possible while it remains valid, recording the smallest valid window seen. Shrinking decrements the window count of the character leaving and, if that drops it below the required count, decrements `have` too, signaling the window is no longer valid.\n\n### Walkthrough\n- If `t` is empty or longer than `s`, return `""`.\n- Build a frequency map `need` for `t`, and note `required = need.size` (number of distinct characters needed).\n- Initialize an empty frequency map `windowCount`, `have = 0`, `left = 0`, and variables to track the best window found (`bestLength = Infinity`, `bestStart = -1`).\n- For each `right` from `0` to `s.length - 1`:\n  - Add `s[right]` to `windowCount`.\n  - If `s[right]` is in `need` and `windowCount[s[right]] === need[s[right]]`, increment `have`.\n  - While `have === required` (the window is currently valid):\n    - If `right - left + 1` is smaller than `bestLength`, update `bestLength` and `bestStart`.\n    - Remove `s[left]` from `windowCount`; if `s[left]` is in `need` and this removal drops `windowCount[s[left]]` below `need[s[left]]`, decrement `have`.\n    - Increment `left`.\n- Return the substring starting at `bestStart` with length `bestLength`, or `""` if `bestStart` is still `-1`.\n\n```typescript\nfunction minWindow(s: string, t: string): string {\n  if (t.length === 0 || s.length < t.length) return "";\n\n  const need = new Map<string, number>();\n  for (const ch of t) {\n    need.set(ch, (need.get(ch) ?? 0) + 1);\n  }\n  const required = need.size;\n\n  const windowCount = new Map<string, number>();\n  let have = 0;\n  let left = 0;\n  let bestLength = Infinity;\n  let bestStart = -1;\n\n  for (let right = 0; right < s.length; right++) {\n    const ch = s[right];\n    windowCount.set(ch, (windowCount.get(ch) ?? 0) + 1);\n\n    if (need.has(ch) && windowCount.get(ch) === need.get(ch)) {\n      have++;\n    }\n\n    while (have === required) {\n      if (right - left + 1 < bestLength) {\n        bestLength = right - left + 1;\n        bestStart = left;\n      }\n\n      const leftCh = s[left];\n      windowCount.set(leftCh, windowCount.get(leftCh)! - 1);\n      if (need.has(leftCh) && windowCount.get(leftCh)! < need.get(leftCh)!) {\n        have--;\n      }\n      left++;\n    }\n  }\n\n  return bestStart === -1 ? "" : s.slice(bestStart, bestStart + bestLength);\n}\n```\n\n## Solution: Sliding Window with Fixed-Size Frequency Arrays\n- time: O(m + n)\n- space: O(1) (two fixed 128-element arrays covering the ASCII range, since s and t may contain both uppercase and lowercase letters)\n\n### Explanation\nSince the problem states `s` and `t` only contain English letters (upper and lowercase), we can replace the Hash Maps with fixed-size arrays indexed by ASCII character code, avoiding Hash Map overhead entirely. The sliding window logic is otherwise identical to the previous solution: expand `right`, track how many distinct required characters are satisfied via a `have` counter, and shrink from `left` whenever the window is valid, recording the smallest valid window.\n\n### Walkthrough\n- If `t` is empty or longer than `s`, return `""`.\n- Build a fixed-size array `need` (indexed by character code) counting each character in `t`, and count `required` as the number of distinct characters with a nonzero requirement.\n- Initialize a fixed-size array `windowCount` (same size), `have = 0`, `left = 0`, and best-window tracking variables.\n- For each `right` from `0` to `s.length - 1`:\n  - Increment `windowCount` at the index for `s[right]`.\n  - If `need` at that index is nonzero and `windowCount` now exactly equals `need` there, increment `have`.\n  - While `have === required`: update the best window if shorter, then decrement `windowCount` at the index for `s[left]` (decrementing `have` first if this removal breaks the match), and increment `left`.\n- Return the best window substring found, or `""` if none was found.\n\n```typescript\nfunction minWindow(s: string, t: string): string {\n  if (t.length === 0 || s.length < t.length) return "";\n\n  const need = new Array(128).fill(0);\n  for (const ch of t) {\n    need[ch.charCodeAt(0)]++;\n  }\n\n  let required = 0;\n  for (const count of need) {\n    if (count > 0) required++;\n  }\n\n  const windowCount = new Array(128).fill(0);\n  let have = 0;\n  let left = 0;\n  let bestLength = Infinity;\n  let bestStart = -1;\n\n  for (let right = 0; right < s.length; right++) {\n    const rightCode = s.charCodeAt(right);\n    windowCount[rightCode]++;\n\n    if (need[rightCode] > 0 && windowCount[rightCode] === need[rightCode]) {\n      have++;\n    }\n\n    while (have === required) {\n      if (right - left + 1 < bestLength) {\n        bestLength = right - left + 1;\n        bestStart = left;\n      }\n\n      const leftCode = s.charCodeAt(left);\n      windowCount[leftCode]--;\n      if (need[leftCode] > 0 && windowCount[leftCode] < need[leftCode]) {\n        have--;\n      }\n      left++;\n    }\n  }\n\n  return bestStart === -1 ? "" : s.slice(bestStart, bestStart + bestLength);\n}\n```\n',ye=`---
title: Largest Rectangle in Histogram
number: 84
source: LeetCode
category: Stack
difficulty: Hard
tags: Array, Stack, Monotonic Stack
url: https://leetcode.com/problems/largest-rectangle-in-histogram/
---

## Problem
Given an array of integers \`heights\` representing the histogram's bar heights where the width of each bar is 1, return the area of the largest rectangle in the histogram.

**Example 1:**
\`\`\`
Input: heights = [2,1,5,6,2,3]
Output: 10
\`\`\`
Explanation: the largest rectangle has area 10, formed by the bars of height 5 and 6 (indices 2 and 3), using height 5 and width 2.

**Example 2:**
\`\`\`
Input: heights = [2,4]
Output: 4
\`\`\`

**Constraints:**
- \`1 <= heights.length <= 10^5\`
- \`0 <= heights[i] <= 10^4\`

## Hints
- For any bar \`i\`, imagine it as the shortest bar in some rectangle — that rectangle can extend left and right until it hits a bar shorter than \`heights[i]\`. The brute force approach checks this directly for every bar, giving O(n²).
- A **Monotonic Stack** approach processes bars left to right, maintaining a stack of indices with increasing heights. When a shorter bar is encountered, it means the bars on top of the stack can't extend any further right, so we "resolve" them one by one, computing the max rectangle achievable with each as the shortest bar.
- When resolving a bar popped from the stack, its rectangle's width spans from just after the new stack top (its nearest shorter bar to the left) to just before the current index (its nearest shorter bar to the right, exclusive).

## Template

\`\`\`typescript
// just init the function name and paramaters. dont remove!.

function largestRectangleArea(heights: number[]): number {
  // TODO
  return 0;
}
\`\`\`

## Solution: Brute Force
- time: O(n²)
- space: O(1)

### Explanation
For every bar, treat it as the shortest bar of a candidate rectangle, then expand left and right as far as possible while every bar in that range is at least as tall. The area of that rectangle is \`heights[i] * width\`, and we track the maximum area found across all bars.

### Walkthrough
- Initialize \`maxArea = 0\`.
- For each index \`i\` from \`0\` to \`n - 1\`:
  - Expand \`left\` from \`i\` leftward while \`heights[left - 1] >= heights[i]\`.
  - Expand \`right\` from \`i\` rightward while \`heights[right + 1] >= heights[i]\`.
  - Compute \`width = right - left + 1\` and \`area = heights[i] * width\`.
  - Update \`maxArea = max(maxArea, area)\`.
- Return \`maxArea\`.

\`\`\`typescript
function largestRectangleArea(heights: number[]): number {
  const n = heights.length;
  let maxArea = 0;

  for (let i = 0; i < n; i++) {
    let left = i;
    while (left > 0 && heights[left - 1] >= heights[i]) {
      left--;
    }

    let right = i;
    while (right < n - 1 && heights[right + 1] >= heights[i]) {
      right++;
    }

    const width = right - left + 1;
    maxArea = Math.max(maxArea, heights[i] * width);
  }

  return maxArea;
}
\`\`\`

## Solution: Monotonic Stack
- time: O(n)
- space: O(n)

### Explanation
We process bars left to right while maintaining a stack of \`[index, height]\` pairs with heights in strictly increasing order from bottom to top. When we reach a bar shorter than the height at the top of the stack, it means the bar on top of the stack can never extend further right than the current position — so we "resolve" it: pop it off and compute the maximum rectangle achievable using that height, where the width spans from the index now exposed at the new top of the stack (exclusive) to the current index (exclusive). We keep popping and resolving as long as the current bar is shorter than the stack's top. After resolving, we push the current bar — but using the index of the last bar we popped as its effective left boundary, so it "absorbs" the width of the shorter bars that came before it. Any bars still on the stack after the full scan are resolved against the end of the array.

### Walkthrough
- Initialize an empty stack of \`[index, height]\` pairs and \`maxArea = 0\`.
- For each index \`i\` from \`0\` to \`n - 1\`:
  - Let \`start = i\`.
  - While the stack is non-empty and \`stack.top().height > heights[i]\`:
    - Pop \`[poppedIndex, poppedHeight]\` from the stack.
    - Compute \`area = poppedHeight * (i - poppedIndex)\`, update \`maxArea = max(maxArea, area)\`.
    - Set \`start = poppedIndex\` (this bar's rectangle can extend back to where the popped bar started).
  - Push \`[start, heights[i]]\` onto the stack.
- After the loop, resolve any bars remaining on the stack against the end of the array (\`n\`):
  - For each \`[index, height]\` remaining on the stack, compute \`area = height * (n - index)\`, update \`maxArea\`.
- Return \`maxArea\`.

\`\`\`typescript
function largestRectangleArea(heights: number[]): number {
  const n = heights.length;
  const stack: [number, number][] = []; // [startIndex, height]
  let maxArea = 0;

  for (let i = 0; i < n; i++) {
    let start = i;

    while (stack.length > 0 && stack[stack.length - 1][1] > heights[i]) {
      const [poppedIndex, poppedHeight] = stack.pop()!;
      const area = poppedHeight * (i - poppedIndex);
      maxArea = Math.max(maxArea, area);
      start = poppedIndex;
    }

    stack.push([start, heights[i]]);
  }

  for (const [index, height] of stack) {
    const area = height * (n - index);
    maxArea = Math.max(maxArea, area);
  }

  return maxArea;
}
\`\`\`
`,be=`---
title: Car Fleet
number: 853
source: LeetCode
category: Stack
difficulty: Medium
tags: Array, Stack, Sorting, Monotonic Stack
url: https://leetcode.com/problems/car-fleet/
---

## Problem
There are \`n\` cars going to the same destination along a one-lane road. The destination is \`target\` miles away.

You are given two integer arrays \`position\` and \`speed\`, both of length \`n\`, where \`position[i]\` is the position of the \`i\`-th car and \`speed[i]\` is the speed of the \`i\`-th car (in miles per hour).

A car can never pass another car ahead of it, but it can catch up to it and drive bumper to bumper at the same speed. The faster car will slow down to match the slower car's speed. A **car fleet** is a car or cars driving bumper to bumper. The car fleet will have the same speed as the slowest car in the fleet.

If a car catches up to a car fleet right at the destination point, it will still be considered as one car fleet.

Return the number of car fleets that will arrive at the destination.

**Example 1:**
\`\`\`
Input: target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]
Output: 3
\`\`\`
Explanation: the cars starting at 10 and 8 become a fleet, meeting each other at 12. The car starting at 0 doesn't catch up to any other car, so it's a fleet by itself. The cars starting at 5 and 3 become a fleet, meeting each other at 6.

**Example 2:**
\`\`\`
Input: target = 10, position = [3], speed = [3]
Output: 1
\`\`\`
Explanation: there is only one car, hence there is only one fleet.

**Example 3:**
\`\`\`
Input: target = 100, position = [0,2,4], speed = [4,2,1]
Output: 1
\`\`\`
Explanation: the cars starting at 0 (speed 4) and 2 (speed 2) become a fleet, meeting each other at 4. The fleet moves at speed 2. Then the fleet (speed 2) and the car starting at 4 (speed 1) never catch up to each other, wait — the car starting at 4 is slowest and ahead, so the faster cars behind it must slow down to its speed once they catch up, forming one large fleet.

**Constraints:**
- \`n == position.length == speed.length\`
- \`1 <= n <= 10^5\`
- \`0 <= target <= 10^6\`
- \`0 <= speed[i] <= 10^6\`
- \`0 <= position[i] < target\`
- Each value of \`position[i]\` is unique.

## Hints
- Since cars can never pass each other, it helps to process them in order from the car **closest to the target** to the car **farthest away**, because a car can only ever be blocked by (and merge into a fleet with) a car ahead of it, never behind it.
- For each car, compute the time it would take to reach the target if driving alone: \`(target - position[i]) / speed[i]\`.
- This becomes a **Monotonic Stack** problem in disguise: process cars from closest-to-target to farthest, keeping a stack of "arrival times" representing distinct fleets found so far. If the current car's arrival time is less than or equal to the time of the fleet immediately ahead of it (the top of the stack), it catches up and merges into that fleet (don't push a new entry). Otherwise, it forms its own new fleet (push its time).

## Template

\`\`\`typescript
// just init the function name and paramaters. dont remove!.

function carFleet(target: number, position: number[], speed: number[]): number {
  // TODO
  return 0;
}
\`\`\`

## Solution: Sorting + Monotonic Stack
- time: O(n log n), dominated by sorting the cars by position
- space: O(n)

### Explanation
We first pair up each car's position and speed, then sort these pairs by position in *descending* order — so we process the car closest to the target first, then work backward toward the car farthest away. For each car, we compute how long it would take to reach the target driving alone: \`(target - position) / speed\`. We maintain a stack representing the arrival times of the distinct fleets identified so far, ordered from closest-to-target to farthest. As we process each car (in closest-to-farthest order), if this car's solo arrival time is less than or equal to the time on top of the stack, it means this car will catch up to the fleet ahead of it before (or exactly at) the target, so it merges into that fleet — we don't push a new time. Otherwise, this car will still be behind the fleet ahead when it reaches the target (it's slower or too far back to catch up), so it forms a brand new fleet — we push its own arrival time onto the stack. The final size of the stack is the number of distinct fleets.

### Walkthrough
- Pair each car's \`position[i]\` and \`speed[i]\` together, and sort the pairs by position in descending order (closest to target first).
- Initialize an empty stack representing arrival times of fleets identified so far, from closest to farthest.
- For each car (in sorted order):
  - Compute \`time = (target - position) / speed\`.
  - If the stack is empty, or \`time > stack.top()\` (this car is strictly slower than the fleet ahead and won't catch up), push \`time\` onto the stack — it's a new fleet.
  - Otherwise (\`time <= stack.top()\`), this car catches up to the fleet ahead and merges with it — do nothing (don't push).
- Return the size of the stack.

\`\`\`typescript
function carFleet(target: number, position: number[], speed: number[]): number {
  const n = position.length;
  const cars: [number, number][] = [];
  for (let i = 0; i < n; i++) {
    cars.push([position[i], speed[i]]);
  }

  cars.sort((a, b) => b[0] - a[0]); // descending by position (closest to target first)

  const stack: number[] = [];

  for (const [pos, spd] of cars) {
    const time = (target - pos) / spd;

    if (stack.length === 0 || time > stack[stack.length - 1]) {
      stack.push(time);
    }
    // otherwise, this car merges into the fleet ahead (top of stack) — do nothing
  }

  return stack.length;
}
\`\`\`

## Solution: Sorting + Running Maximum (No Explicit Stack)
- time: O(n log n)
- space: O(n) for sorting (O(1) extra beyond that, not counting the output)

### Explanation
We can achieve the same result without maintaining an actual stack data structure, since we only ever need to compare against the *most recent* fleet's arrival time (the top of the stack) — we never need to look further back or pop multiple entries. So instead of a stack, we can just track a single running variable, \`lastFleetTime\`, representing the arrival time of the most recently formed fleet (the one closest to the target processed so far). Each car either merges into it (if its own solo time is less than or equal to \`lastFleetTime\`) or starts a new fleet and updates \`lastFleetTime\` to its own time.

### Walkthrough
- Pair and sort cars by position in descending order, same as before.
- Initialize \`fleetCount = 0\` and \`lastFleetTime = -Infinity\` (or use a sentinel indicating "no fleet yet").
- For each car (in sorted order):
  - Compute \`time = (target - position) / speed\`.
  - If \`time > lastFleetTime\`, this car forms a new fleet: increment \`fleetCount\` and update \`lastFleetTime = time\`.
  - Otherwise, it merges into the existing most-recent fleet — do nothing.
- Return \`fleetCount\`.

\`\`\`typescript
function carFleet(target: number, position: number[], speed: number[]): number {
  const n = position.length;
  const cars: [number, number][] = [];
  for (let i = 0; i < n; i++) {
    cars.push([position[i], speed[i]]);
  }

  cars.sort((a, b) => b[0] - a[0]);

  let fleetCount = 0;
  let lastFleetTime = -Infinity;

  for (const [pos, spd] of cars) {
    const time = (target - pos) / spd;

    if (time > lastFleetTime) {
      fleetCount++;
      lastFleetTime = time;
    }
  }

  return fleetCount;
}
\`\`\`
`,xe='---\ntitle: Koko Eating Bananas\nnumber: 875\nsource: LeetCode\ncategory: Binary Search\ndifficulty: Medium\ntags: Array, Binary Search\nurl: https://leetcode.com/problems/koko-eating-bananas/\n---\n\n## Problem\nKoko loves to eat bananas. There are `n` piles of bananas, the `i`-th pile has `piles[i]` bananas. The guards have gone and will come back in `h` hours.\n\nKoko can decide her bananas-per-hour eating speed of `k`. Each hour, she chooses some pile of bananas and eats `k` bananas from that pile. If the pile has less than `k` bananas, she eats all of them instead and will not eat any more bananas during this hour.\n\nKoko likes to eat slowly but still wants to finish eating all the bananas before the guards return.\n\nReturn the minimum integer `k` such that she can eat all the bananas within `h` hours.\n\n**Example 1:**\n```\nInput: piles = [3,6,7,11], h = 8\nOutput: 4\n```\n\n**Example 2:**\n```\nInput: piles = [30,11,23,4,20], h = 5\nOutput: 30\n```\n\n**Example 3:**\n```\nInput: piles = [30,11,23,4,20], h = 6\nOutput: 23\n```\n\n**Constraints:**\n- `1 <= piles.length <= 10^4`\n- `piles.length <= h <= 10^9`\n- `1 <= piles[i] <= 10^9`\n\n## Hints\n- For a fixed eating speed `k`, you can directly compute how many hours it would take to finish all piles: for each pile, it takes `ceil(pile / k)` hours, and you sum these up across all piles.\n- As `k` increases, the total hours needed can only decrease or stay the same — this "monotonic" relationship between speed and time is exactly what allows **Binary Search on the answer** (searching over possible values of `k`, not over the array itself).\n- Binary search `k` between `1` and `max(piles)` (eating faster than the largest pile is never necessary — a single hour is always enough for any pile once `k >= max(piles)`). For each candidate `k`, check whether the total hours needed is `<= h`; shrink the search range accordingly.\n\n## Template\n\n```typescript\n// just init the function name and paramaters. dont remove!.\n\nfunction minEatingSpeed(piles: number[], h: number): number {\n  // TODO\n  return 1;\n}\n```\n\n## Solution: Binary Search on the Answer\n- time: O(n log m), where n is the number of piles and m is the maximum pile size\n- space: O(1)\n\n### Explanation\nRather than searching through the array `piles` directly, we binary search over the space of possible *eating speeds* `k`, from `1` up to `max(piles)`. For any candidate speed `k`, we can compute in O(n) time exactly how many hours Koko would need: summing `ceil(pile / k)` for every pile. This "hours needed" function is monotonically non-increasing as `k` increases (a faster speed never takes more hours), which means we can binary search for the *smallest* `k` such that the hours needed is `<= h`. If a candidate `k` works (hours needed `<= h`), we try to find an even smaller (slower) speed that still works by moving `right` down; if `k` doesn\'t work, we need to increase the speed by moving `left` up.\n\n### Walkthrough\n- Initialize `left = 1` and `right = max(piles)`.\n- While `left < right`:\n  - Compute `mid = Math.floor((left + right) / 2)` as the candidate speed.\n  - Compute `hoursNeeded` as the sum of `Math.ceil(pile / mid)` across all piles.\n  - If `hoursNeeded <= h`, this speed works; try a smaller speed by setting `right = mid`.\n  - Otherwise, this speed is too slow; increase it by setting `left = mid + 1`.\n- Once `left === right`, this is the minimum working speed. Return `left`.\n\n```typescript\nfunction minEatingSpeed(piles: number[], h: number): number {\n  const hoursNeededAt = (speed: number): number => {\n    let hours = 0;\n    for (const pile of piles) {\n      hours += Math.ceil(pile / speed);\n    }\n    return hours;\n  };\n\n  let left = 1;\n  let right = Math.max(...piles);\n\n  while (left < right) {\n    const mid = Math.floor((left + right) / 2);\n\n    if (hoursNeededAt(mid) <= h) {\n      right = mid;\n    } else {\n      left = mid + 1;\n    }\n  }\n\n  return left;\n}\n```\n\n## Solution: Linear Search on Speed (Baseline)\n- time: O(n * m), where n is the number of piles and m is the maximum pile size\n- space: O(1)\n\n### Explanation\nAs a baseline to understand why binary search is needed, we could simply try every possible speed starting from `1` upward, checking each one\'s total hours needed, and returning the first speed that works. This is correct but far too slow for large pile sizes since `m` can be up to `10^9` — it\'s included here mainly to contrast with the binary search approach and make clear why exploiting the monotonic relationship between speed and hours is essential.\n\n### Walkthrough\n- Define a helper function computing hours needed for a given speed, as before.\n- For each candidate speed `k` starting from `1` and increasing by 1:\n  - If `hoursNeededAt(k) <= h`, return `k` immediately (the first working speed found is the minimum, since hours needed only decreases as speed increases).\n\n```typescript\nfunction minEatingSpeed(piles: number[], h: number): number {\n  const hoursNeededAt = (speed: number): number => {\n    let hours = 0;\n    for (const pile of piles) {\n      hours += Math.ceil(pile / speed);\n    }\n    return hours;\n  };\n\n  const maxPile = Math.max(...piles);\n\n  for (let speed = 1; speed <= maxPile; speed++) {\n    if (hoursNeededAt(speed) <= h) {\n      return speed;\n    }\n  }\n\n  return maxPile;\n}\n```\n',Se=`---
title: Time Based Key-Value Store
number: 981
source: LeetCode
category: Binary Search
difficulty: Medium
tags: Hash Table, String, Binary Search, Design
url: https://leetcode.com/problems/time-based-key-value-store/
---

## Problem
Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp.

Implement the \`TimeMap\` class:
- \`TimeMap()\` initializes the object.
- \`void set(String key, String value, int timestamp)\` stores the key \`key\` with the value \`value\` at the given time \`timestamp\`.
- \`String get(String key, int timestamp)\` returns a value such that \`set\` was called previously, with \`timestamp_prev <= timestamp\`. If there are multiple such values, it returns the value associated with the largest \`timestamp_prev\`. If there are no values, it returns \`""\`.

**Example 1:**
\`\`\`
Input:
["TimeMap", "set", "get", "get", "set", "get", "get"]
[[], ["foo", "bar", 1], ["foo", 1], ["foo", 3], ["foo", "bar2", 4], ["foo", 4], ["foo", 5]]

Output:
[null, null, "bar", "bar", null, "bar2", "bar2"]
\`\`\`
Explanation:
\`\`\`
TimeMap timeMap = new TimeMap();
timeMap.set("foo", "bar", 1);  // store the key "foo" and value "bar" along with timestamp = 1.
timeMap.get("foo", 1);         // return "bar"
timeMap.get("foo", 3);         // return "bar", since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 is "bar".
timeMap.set("foo", "bar2", 4); // store the key "foo" and value "bar2" along with timestamp = 4.
timeMap.get("foo", 4);         // return "bar2"
timeMap.get("foo", 5);         // return "bar2"
\`\`\`

**Constraints:**
- \`1 <= key.length, value.length <= 100\`
- \`key\` and \`value\` consist of lowercase English letters and digits.
- \`1 <= timestamp <= 10^7\`
- All the timestamps \`timestamp\` of \`set\` are strictly increasing.
- At most \`2 * 10^5\` calls will be made to \`set\` and \`get\`.

## Hints
- Since \`set\` calls for the same key always come with strictly increasing timestamps, the list of \`(timestamp, value)\` pairs stored for each key is naturally already sorted by timestamp — no extra sorting needed.
- \`get(key, timestamp)\` is asking: "among all stored timestamps for this key that are \`<= timestamp\`, what's the value at the largest one?" This is a classic **Binary Search** for "the rightmost value less than or equal to a target."
- Store each key's history as an array of \`[timestamp, value]\` pairs (appended in order since timestamps only increase), and binary search that array for the given \`timestamp\` on every \`get\` call.

## Template

\`\`\`typescript
// just init the function name and paramaters. dont remove!.

class TimeMap {
  constructor() {
    // TODO
  }

  set(key: string, value: string, timestamp: number): void {
    // TODO
  }

  get(key: string, timestamp: number): string {
    // TODO
    return "";
  }
}
\`\`\`

## Solution: Hash Map of Arrays + Binary Search
- time: O(1) for \`set\`; O(log n) for \`get\`, where n is the number of values stored for that key
- space: O(n) total, where n is the total number of \`set\` calls

### Explanation
We store a Hash Map from key to an array of \`[timestamp, value]\` pairs. Since the problem guarantees that timestamps for \`set\` calls on the same key strictly increase over time, each key's array is automatically sorted by timestamp as we append to it — no sorting step is needed for \`set\`. For \`get(key, timestamp)\`, we need to find the value associated with the largest stored timestamp that is \`<= timestamp\`. Since the array is sorted by timestamp, we can binary search for this — specifically, find the rightmost timestamp in the array that doesn't exceed the query timestamp, which is a standard "find the last element \`<=\` target" binary search pattern.

### Walkthrough
**\`set(key, value, timestamp)\`:**
- If \`key\` isn't in the map yet, initialize an empty array for it.
- Append \`[timestamp, value]\` to that key's array.

**\`get(key, timestamp)\`:**
- If \`key\` isn't in the map, return \`""\`.
- Let \`entries\` be the array of \`[timestamp, value]\` pairs for \`key\`.
- Binary search \`entries\` for the rightmost entry whose timestamp is \`<= timestamp\`:
  - Initialize \`left = 0\`, \`right = entries.length - 1\`, and \`result = ""\`.
  - While \`left <= right\`:
    - Compute \`mid = Math.floor((left + right) / 2)\`.
    - If \`entries[mid][0] <= timestamp\`, this is a valid candidate — record its value as \`result\` and try to find a later (larger-timestamp) one by setting \`left = mid + 1\`.
    - Otherwise, this entry's timestamp is too large, so set \`right = mid - 1\`.
  - Return \`result\`.

\`\`\`typescript
class TimeMap {
  private store: Map<string, [number, string][]> = new Map();

  set(key: string, value: string, timestamp: number): void {
    if (!this.store.has(key)) {
      this.store.set(key, []);
    }
    this.store.get(key)!.push([timestamp, value]);
  }

  get(key: string, timestamp: number): string {
    const entries = this.store.get(key);
    if (!entries || entries.length === 0) return "";

    let left = 0;
    let right = entries.length - 1;
    let result = "";

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (entries[mid][0] <= timestamp) {
        result = entries[mid][1];
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return result;
  }
}
\`\`\`

## Solution: Hash Map of Arrays + Linear Scan (Baseline)
- time: O(1) for \`set\`; O(n) for \`get\`, where n is the number of values stored for that key
- space: O(n) total

### Explanation
As a simpler but slower baseline, \`get\` could scan the stored entries for the key from the most recent backward (or from the oldest forward), stopping at the first entry whose timestamp is \`<= timestamp\`. This avoids implementing binary search but degrades to O(n) per \`get\` call in the worst case, which can be too slow given the problem's constraint of up to \`2 * 10^5\` calls — it's included here mainly to highlight why the binary search version is preferable at scale.

### Walkthrough
**\`set(key, value, timestamp)\`:** same as before — append \`[timestamp, value]\` to the key's array.

**\`get(key, timestamp)\`:**
- If \`key\` isn't in the map, return \`""\`.
- Scan \`entries\` for \`key\` from the end (most recent) backward.
- Return the value of the first entry found whose timestamp is \`<= timestamp\`.
- If no such entry exists, return \`""\`.

\`\`\`typescript
class TimeMap {
  private store: Map<string, [number, string][]> = new Map();

  set(key: string, value: string, timestamp: number): void {
    if (!this.store.has(key)) {
      this.store.set(key, []);
    }
    this.store.get(key)!.push([timestamp, value]);
  }

  get(key: string, timestamp: number): string {
    const entries = this.store.get(key);
    if (!entries) return "";

    for (let i = entries.length - 1; i >= 0; i--) {
      if (entries[i][0] <= timestamp) {
        return entries[i][1];
      }
    }

    return "";
  }
}
\`\`\`
`,Ce=`# Problem 1 — Two Sum

---
title: Two Sum
number: 1
source: LeetCode
category: Arrays & Hashing
difficulty: Easy
tags: Array, Hash Table, Two Pointers, Sorting
url: https://leetcode.com/problems/two-sum/description/
---

## Problem

You are given an integer array \`nums\` and an integer \`target\`. Find the indices of two different elements whose values add up to \`target\`.

The problem guarantees that exactly one valid pair exists, and the same array element cannot be used twice. The two returned indices may be in either order.

### Examples

**Example 1**

\`\`\`text
Input:
nums = [2, 7, 11, 15]
target = 9

Output:
[0, 1]

Explanation:
nums[0] + nums[1] = 2 + 7 = 9.
\`\`\`

**Example 2**

\`\`\`text
Input:
nums = [3, 2, 4]
target = 6

Output:
[1, 2]
\`\`\`

**Example 3**

\`\`\`text
Input:
nums = [3, 3]
target = 6

Output:
[0, 1]
\`\`\`

### Constraints

- \`2 <= nums.length <= 10^4\`
- \`-10^9 <= nums[i] <= 10^9\`
- \`-10^9 <= target <= 10^9\`
- Exactly one valid answer exists.

### Core Insight

For a value \`x\`, its required partner is:

\`\`\`text
needed = target - x
\`\`\`

The main question is therefore not "which pair should I try?", but:

> How quickly can I determine whether \`needed\` exists, and where it occurs?

This leads naturally from brute force to sorting/two-pointers and finally to hash-table solutions.

## Hints

- **Hint 1:** Start with the simplest solution: try every pair of indices.
- **Hint 2:** If you fix \`nums[i]\`, you only need to search for \`target - nums[i]\`.
- **Hint 3:** Searching the entire array for the partner repeatedly is expensive. Consider a data structure that gives near-constant-time lookup.
- **Hint 4:** A \`Map\` can store a value together with the index where you saw it.
- **Hint 5:** You can also sort the values and use two pointers, but remember that sorting destroys the original index positions unless you store them.

## Template

\`\`\`typescript
function solve(nums: number[], target: number): number[] {
  // TODO
  return [];
}
\`\`\`

## Solution: Brute Force

- time: \`O(n^2)\`
- space: \`O(1)\` auxiliary space

### Explanation

Check every pair \`(i, j)\` where \`i < j\`.

For each pair, calculate:

\`\`\`text
nums[i] + nums[j]
\`\`\`

If the sum equals \`target\`, return the two original indices.

This is the most direct solution. It is also an important baseline because it makes the optimization target obvious: we want to avoid repeatedly checking all remaining elements.

### Walkthrough

For:

\`\`\`text
nums = [2, 7, 11, 15]
target = 9
\`\`\`

1. Check \`2 + 7\`.
2. The result is \`9\`.
3. Return \`[0, 1]\`.

### TypeScript

\`\`\`typescript
function twoSumBruteForce(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
}
\`\`\`

---

## Solution: Sorting + Two Pointers

- time: \`O(n log n)\`
- space: \`O(n)\` because we preserve original indices

### Explanation

Create pairs containing both the value and its original index:

\`\`\`text
[value, originalIndex]
\`\`\`

Sort these pairs by value.

Then use two pointers:

- \`left\` starts at the smallest value.
- \`right\` starts at the largest value.

If their sum is too small, increase \`left\`.

If their sum is too large, decrease \`right\`.

If their sum equals \`target\`, return the stored original indices.

### Walkthrough

For:

\`\`\`text
nums = [3, 2, 4]
target = 6
\`\`\`

Create:

\`\`\`text
[(3, 0), (2, 1), (4, 2)]
\`\`\`

After sorting:

\`\`\`text
[(2, 1), (3, 0), (4, 2)]
\`\`\`

1. \`2 + 4 = 6\`.
2. The stored indices are \`1\` and \`2\`.
3. Return \`[1, 2]\`.

### TypeScript

\`\`\`typescript
function twoSumTwoPointers(
  nums: number[],
  target: number
): number[] {
  const items = nums.map((value, index) => ({
    value,
    index,
  }));

  items.sort((a, b) => a.value - b.value);

  let left = 0;
  let right = items.length - 1;

  while (left < right) {
    const sum = items[left].value + items[right].value;

    if (sum === target) {
      return [items[left].index, items[right].index];
    }

    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
}
\`\`\`

---

## Solution: Two-Pass Hash Map

- time: \`O(n)\` average
- space: \`O(n)\`

### Explanation

First store every value and its index in a \`Map\`.

Then scan the array again. For each value \`x\`, calculate:

\`\`\`text
target - x
\`\`\`

If that required value is already in the map, we have found the answer.

The two-pass version separates:

1. building the lookup table;
2. performing the lookup.

This makes the logic easy to reason about.

### Walkthrough

For:

\`\`\`text
nums = [2, 7, 11, 15]
target = 9
\`\`\`

The map becomes:

\`\`\`text
2  -> 0
7  -> 1
11 -> 2
15 -> 3
\`\`\`

For \`2\`:

\`\`\`text
needed = 9 - 2 = 7
\`\`\`

\`7\` exists at index \`1\`, so return \`[0, 1]\`.

### TypeScript

\`\`\`typescript
function twoSumTwoPassMap(
  nums: number[],
  target: number
): number[] {
  const indexByValue = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    indexByValue.set(nums[i], i);
  }

  for (let i = 0; i < nums.length; i++) {
    const needed = target - nums[i];
    const partnerIndex = indexByValue.get(needed);

    if (
      partnerIndex !== undefined &&
      partnerIndex !== i
    ) {
      return [i, partnerIndex];
    }
  }

  return [];
}
\`\`\`

---

## Solution: One-Pass Hash Map

- time: \`O(n)\` average
- space: \`O(n)\`

### Explanation

We can improve the two-pass solution by combining the lookup and insertion into one scan.

At index \`i\`:

1. Compute \`needed = target - nums[i]\`.
2. Check whether \`needed\` has already appeared.
3. If yes, return the previous index and \`i\`.
4. Otherwise store \`nums[i] -> i\`.

The crucial detail is that we check before inserting the current element. This guarantees that we never use the same array position twice.

### Walkthrough

For:

\`\`\`text
nums = [3, 3]
target = 6
\`\`\`

- At index \`0\`, needed is \`3\`. It is not in the map. Store \`3 -> 0\`.
- At index \`1\`, needed is \`3\`. It is already in the map at index \`0\`.
- Return \`[0, 1]\`.

### TypeScript

\`\`\`typescript
function twoSumOnePassMap(
  nums: number[],
  target: number
): number[] {
  const indexByValue = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const needed = target - nums[i];

    if (indexByValue.has(needed)) {
      return [indexByValue.get(needed)!, i];
    }

    indexByValue.set(nums[i], i);
  }

  return [];
}
\`\`\`

### Approach Comparison

| Approach | Time | Space | Main Idea |
|---|---:|---:|---|
| Brute Force | \`O(n^2)\` | \`O(1)\` | Try every pair |
| Sorting + Two Pointers | \`O(n log n)\` | \`O(n)\` | Sort values while preserving indices |
| Two-Pass Map | \`O(n)\` avg. | \`O(n)\` | Build lookup, then search |
| One-Pass Map | \`O(n)\` avg. | \`O(n)\` | Lookup and insert in one scan |

---
`;function we(e){let t=e.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);if(!t)return{meta:{},body:e};let[,n,r]=t,i={},a=n.split(`
`),o=null;for(let e of a){let t=e.match(/^\s*-\s+(.*)$/);if(t&&o){let e=i[o],n=Array.isArray(e)?e:[];n.push(t[1].trim()),i[o]=n;continue}let n=e.match(/^([A-Za-z0-9_]+):\s*(.*)$/);if(n){let[,e,t]=n;o=e,i[e]=t.trim()===``?[]:t.includes(`,`)?t.split(`,`).map(e=>e.trim()).filter(Boolean):t.trim()}}return{meta:i,body:r}}function Te(e){let t=e.trim();return t.startsWith(`## `)||t.startsWith(`### `)||/^```/.test(t)}function Ee(e){let t=e.split(`
`),n=[],r=null;for(let e of t){let t=e.match(/^##\s+(.*)$/);t?(r&&n.push(r),r={title:t[1].trim(),lines:[]}):r&&r.lines.push(e)}return r&&n.push(r),n}function De(e,t){let n={approach:e.replace(/^Solution:\s*/i,``).trim(),time:``,space:``,explanation:``,walkthrough:[],code:{}},r=0;for(;r<t.length;){let e=t[r].match(/^\s*-\s*(time|space)\s*:\s*(.*)$/i);if(e){let t=e[1].toLowerCase();n[t]=e[2].trim(),r++}else break}for(;r<t.length;){let e=t[r].match(/^###\s+(.*)$/),i=t[r].match(/^```(\w+)/);if(e){let i=e[1].trim().toLowerCase();r++;let a=[];for(;r<t.length&&!Te(t[r]);)a.push(t[r]),r++;i===`explanation`?n.explanation=a.join(`
`).trim():i===`walkthrough`&&(n.walkthrough=a.map(e=>e.trim()).filter(e=>e.startsWith(`- `)).map(e=>e.slice(2).trim()))}else if(i){let e=i[1];r++;let a=[];for(;r<t.length&&!/^```/.test(t[r].trim());)a.push(t[r]),r++;r++,n.code[e]=a.join(`
`)}else r++}return n}function Oe(e){let t={},n=0;for(;n<e.length;){let r=e[n].match(/^```(\w+)/);if(r){let i=r[1];n++;let a=[];for(;n<e.length&&!/^```/.test(e[n].trim());)a.push(e[n]),n++;n++,t[i]=a.join(`
`)}else n++}return t}function ke(e){let t=new Map;for(let n of e){let e=String(n).trim();if(!e)continue;let r=e.toLowerCase();t.has(r)||t.set(r,e)}return Array.from(t.values()).sort((e,t)=>e.localeCompare(t))}function Ae(e,t){let n=e[t];return Array.isArray(n)?n[0]:n}function je(e,t){let n=e[t];return Array.isArray(n)?n:typeof n==`string`?[n]:[]}function Me(e,t){let{meta:n,body:r}=we(e),i=Ee(r),a=je(n,`tags`),o=Ae(n,`difficulty`)||`Easy`,s={id:Ae(n,`slug`)||t,number:parseInt(Ae(n,`number`)||``,10)||0,title:Ae(n,`title`)||`Untitled`,source:(Ae(n,`source`)||`Custom`).trim(),difficulty:[`Easy`,`Medium`,`Hard`].includes(o)?o:`Easy`,tags:ke(a),category:(Ae(n,`category`)||a[0]||`Other`).trim(),url:Ae(n,`url`)||`#`,description:``,hints:[],template:{},solutions:[]};for(let e of i)/^problem$/i.test(e.title)?s.description=e.lines.join(`
`).trim():/^hints$/i.test(e.title)?s.hints=e.lines.map(e=>e.trim()).filter(e=>e.startsWith(`- `)).map(e=>e.slice(2).trim()):/^template$/i.test(e.title)?s.template=Oe(e.lines):/^solution:/i.test(e.title)&&s.solutions.push(De(e.title,e.lines));return s}var Ne=Object.assign({"../content/problems/_template.md":y,"../content/problems/hackerrank/DFS-BFS..md":b,"../content/problems/leetcode/1-two-sum.md":x,"../content/problems/leetcode/11-container-with-most-water.md":ee,"../content/problems/leetcode/121-best-time-to-buy-and-sell-stock.md":S,"../content/problems/leetcode/125-valid-palindrome.md":C,"../content/problems/leetcode/128-longest-consecutive-sequence.md":te,"../content/problems/leetcode/15-3sum.md":ne,"../content/problems/leetcode/150-evaluate-reverse-polish-notation.md":w,"../content/problems/leetcode/153-find-minimum-in-rotated-sorted-array.md":T,"../content/problems/leetcode/155-min-stack.md":re,"../content/problems/leetcode/167-two-sum-ii-input-array-is-sorted.md":E,"../content/problems/leetcode/20-valid-parentheses.md":ie,"../content/problems/leetcode/217-contains-duplicate.md":D,"../content/problems/leetcode/22-generate-parentheses.md":ae,"../content/problems/leetcode/238-product-of-array-except-self.md":O,"../content/problems/leetcode/239-sliding-window-maximum.md":oe,"../content/problems/leetcode/242-valid-anagram.md":k,"../content/problems/leetcode/271-encode-and-decode-strings.md":A,"../content/problems/leetcode/3-longest-substring-without-repeating-characters.md":se,"../content/problems/leetcode/33-search-in-rotated-sorted-array.md":ce,"../content/problems/leetcode/347-top-k-frequent-elements.md":le,"../content/problems/leetcode/36-valid-sudoku.md":ue,"../content/problems/leetcode/4-median-of-two-sorted-arrays.md":de,"../content/problems/leetcode/42-trapping-rain-water.md":j,"../content/problems/leetcode/424-longest-repeating-character-replacement.md":fe,"../content/problems/leetcode/49-group-anagrams.md":pe,"../content/problems/leetcode/567-permutation-in-string.md":me,"../content/problems/leetcode/704-binary-search.md":he,"../content/problems/leetcode/739-daily-temperatures.md":ge,"../content/problems/leetcode/74-search-a-2d-matrix.md":_e,"../content/problems/leetcode/76-minimum-window-substring.md":ve,"../content/problems/leetcode/84-largest-rectangle-in-histogram.md":ye,"../content/problems/leetcode/853-car-fleet.md":be,"../content/problems/leetcode/875-koko-eating-bananas.md":xe,"../content/problems/leetcode/981-time-based-key-value-store.md":Se,"../content/problems/neetcode/fizzbuzz.md":Ce});function Pe(){let e=[];for(let t in Ne){let n=t.split(`/content/problems/`)[1].split(`/`),r=n[n.length-1];if(r.startsWith(`_`))continue;let i=r.replace(/\.md$/,``),a=(n.length>1?n.slice(0,-1).join(`-`)+`-`:``)+i,o=Ne[t];e.push(Me(o,a))}return e.sort((e,t)=>(e.source+e.category+String(e.number)).localeCompare(t.source+t.category+String(t.number))),e}var Fe=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),M=o(((e,t)=>{t.exports=Fe()}))();function Ie({size:e=16,className:t,...n}){return(0,M.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:t,...n,children:[(0,M.jsx)(`path`,{d:`M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z`}),(0,M.jsx)(`path`,{d:`M6 6h10`}),(0,M.jsx)(`path`,{d:`M6 10h10`}),(0,M.jsx)(`path`,{d:`M6 14h6`})]})}function Le({size:e=15,className:t,...n}){return(0,M.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:t,...n,children:[(0,M.jsx)(`circle`,{cx:`12`,cy:`12`,r:`4`}),(0,M.jsx)(`path`,{d:`M12 2v2`}),(0,M.jsx)(`path`,{d:`M12 20v2`}),(0,M.jsx)(`path`,{d:`m4.93 4.93 1.41 1.41`}),(0,M.jsx)(`path`,{d:`m17.66 17.66 1.41 1.41`}),(0,M.jsx)(`path`,{d:`M2 12h2`}),(0,M.jsx)(`path`,{d:`M20 12h2`}),(0,M.jsx)(`path`,{d:`m6.34 17.66-1.41 1.41`}),(0,M.jsx)(`path`,{d:`m19.07 4.93-1.41 1.41`})]})}function Re({size:e=15,className:t,...n}){return(0,M.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:t,...n,children:(0,M.jsx)(`path`,{d:`M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z`})})}function ze({size:e=18,className:t,...n}){return(0,M.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:t,...n,children:[(0,M.jsx)(`line`,{x1:`4`,x2:`20`,y1:`12`,y2:`12`}),(0,M.jsx)(`line`,{x1:`4`,x2:`20`,y1:`6`,y2:`6`}),(0,M.jsx)(`line`,{x1:`4`,x2:`20`,y1:`18`,y2:`18`})]})}function Be({size:e=15,className:t,...n}){return(0,M.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:t,...n,children:[(0,M.jsx)(`path`,{d:`M18 6 6 18`}),(0,M.jsx)(`path`,{d:`m6 6 12 12`})]})}function Ve({size:e=13,className:t,...n}){return(0,M.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:t,...n,children:(0,M.jsx)(`path`,{d:`m6 9 6 6 6-6`})})}function He({size:e=13,className:t,...n}){return(0,M.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:t,...n,children:(0,M.jsx)(`path`,{d:`m9 18 6-6-6-6`})})}function Ue({size:e=12,className:t,...n}){return(0,M.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:t,...n,children:[(0,M.jsx)(`path`,{d:`M15 3h6v6`}),(0,M.jsx)(`path`,{d:`M10 14 21 3`}),(0,M.jsx)(`path`,{d:`M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`})]})}function We({size:e=12,className:t,...n}){return(0,M.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:t,...n,children:[(0,M.jsx)(`path`,{d:`M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z`}),(0,M.jsx)(`circle`,{cx:`7.5`,cy:`7.5`,r:`.5`,fill:`currentColor`})]})}function Ge({size:e=15,className:t,...n}){return(0,M.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:t,...n,children:[(0,M.jsx)(`path`,{d:`M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5`}),(0,M.jsx)(`path`,{d:`M9 18h6`}),(0,M.jsx)(`path`,{d:`M10 22h4`})]})}function Ke({size:e=15,className:t,...n}){return(0,M.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:t,...n,children:[(0,M.jsx)(`polyline`,{points:`4 17 10 11 4 5`}),(0,M.jsx)(`line`,{x1:`12`,x2:`20`,y1:`19`,y2:`19`})]})}function qe({size:e=13,className:t,...n}){return(0,M.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:t,...n,children:[(0,M.jsx)(`path`,{d:`M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`}),(0,M.jsx)(`path`,{d:`M3 3v5h5`})]})}function Je({size:e=13,className:t,...n}){return(0,M.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:t,...n,children:[(0,M.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,M.jsx)(`path`,{d:`M12 16v-4`}),(0,M.jsx)(`path`,{d:`M12 8h.01`})]})}function Ye({size:e=13,className:t,...n}){return(0,M.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:t,...n,children:[(0,M.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,M.jsx)(`polyline`,{points:`12 6 12 12 16 14`})]})}function Xe({size:e=13,className:t,...n}){return(0,M.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:t,...n,children:[(0,M.jsx)(`rect`,{width:`16`,height:`16`,x:`4`,y:`4`,rx:`2`}),(0,M.jsx)(`rect`,{width:`6`,height:`6`,x:`9`,y:`9`,rx:`1`}),(0,M.jsx)(`path`,{d:`M9 1v3`}),(0,M.jsx)(`path`,{d:`M15 1v3`}),(0,M.jsx)(`path`,{d:`M9 20v3`}),(0,M.jsx)(`path`,{d:`M15 20v3`}),(0,M.jsx)(`path`,{d:`M20 9h3`}),(0,M.jsx)(`path`,{d:`M20 14h3`}),(0,M.jsx)(`path`,{d:`M1 9h3`}),(0,M.jsx)(`path`,{d:`M1 14h3`})]})}function Ze({size:e=14,className:t,...n}){return(0,M.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:t,...n,children:[(0,M.jsx)(`rect`,{width:`18`,height:`11`,x:`3`,y:`11`,rx:`2`,ry:`2`}),(0,M.jsx)(`path`,{d:`M7 11V7a5 5 0 0 1 9.9-1`})]})}function Qe({size:e=14,className:t,...n}){return(0,M.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:t,...n,children:[(0,M.jsx)(`path`,{d:`M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z`}),(0,M.jsx)(`path`,{d:`M20 3v4`}),(0,M.jsx)(`path`,{d:`M22 5h-4`})]})}function $e({size:e=13,className:t,...n}){return(0,M.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:t,...n,children:[(0,M.jsx)(`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`}),(0,M.jsx)(`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`})]})}function et({size:e=13,className:t,...n}){return(0,M.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,className:t,...n,children:(0,M.jsx)(`polyline`,{points:`20 6 9 17 4 12`})})}function tt({size:e=13,className:t,...n}){return(0,M.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:t,...n,children:(0,M.jsx)(`path`,{d:`M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z`})})}var nt=[`Easy`,`Medium`,`Hard`];function rt(e){let t={};return e.forEach(e=>{let n=e.source.toLowerCase();t[n]||(t[n]={label:e.source,categories:{}});let r=e.category.toLowerCase(),i=t[n];i.categories[r]||(i.categories[r]={label:e.category,items:[]}),i.categories[r].items.push(e)}),t}function it({problems:e,activeDifficulties:t,onToggleDifficulty:n,currentProblem:r,onSelectProblem:i,collapsedGroups:a,onToggleGroup:o,theme:s,onToggleTheme:c,mobileOpen:l,onCloseMobile:u}){let d=rt(e),f=Object.keys(d).sort((e,t)=>d[e].label.localeCompare(d[t].label));return(0,M.jsxs)(`div`,{className:`sidebar`+(l?` mobile-open`:``),children:[(0,M.jsxs)(`div`,{className:`brand`,children:[(0,M.jsxs)(`span`,{className:`brand-title`,children:[(0,M.jsx)(Ie,{size:16,className:`brand-icon`}),(0,M.jsx)(`b`,{children:`code-notebook`}),(0,M.jsx)(`span`,{className:`brand-subtitle`,children:`/ problems`})]}),(0,M.jsxs)(`span`,{className:`brand-actions`,children:[(0,M.jsx)(`button`,{className:`theme-btn`,onClick:c,title:s===`dark`?`Switch to light mode`:`Switch to dark mode`,"aria-label":s===`dark`?`Switch to light mode`:`Switch to dark mode`,children:s===`dark`?(0,M.jsx)(Le,{size:15}):(0,M.jsx)(Re,{size:15})}),(0,M.jsx)(`button`,{className:`theme-btn mobile-close-btn`,onClick:u,title:`Close menu`,"aria-label":`Close menu`,children:(0,M.jsx)(Be,{size:15})})]})]}),(0,M.jsx)(`div`,{className:`filters`,children:nt.map(e=>(0,M.jsx)(`button`,{type:`button`,className:`chip`+(t.has(e)?` active`:``),"data-d":e,onClick:()=>n(e),children:e},e))}),(0,M.jsx)(`div`,{className:`toc`,children:f.map(e=>{let{label:t,categories:n}=d[e],s=a.has(e),c=Object.keys(n).sort((e,t)=>n[e].label.localeCompare(n[t].label)),l=c.reduce((e,t)=>e+n[t].items.length,0);return(0,M.jsxs)(`div`,{className:`group`+(s?` collapsed`:``),children:[(0,M.jsxs)(`div`,{className:`group-head`,onClick:()=>o(e),children:[(0,M.jsx)(`span`,{className:`group-title`,children:t}),(0,M.jsxs)(`span`,{className:`group-meta`,children:[(0,M.jsx)(`span`,{className:`group-count`,children:l}),(0,M.jsx)(`span`,{className:`chevron`,children:(0,M.jsx)(Ve,{size:12})})]})]}),!s&&(0,M.jsx)(`div`,{className:`group-items`,children:c.map(t=>{let{label:s,items:c}=n[t],l=e+`::`+t,u=a.has(l);return(0,M.jsxs)(`div`,{className:`subgroup`+(u?` collapsed`:``),children:[(0,M.jsxs)(`div`,{className:`subgroup-head`,onClick:()=>o(l),children:[(0,M.jsxs)(`span`,{className:`subgroup-title`,children:[(0,M.jsx)(tt,{size:12,className:`cat-icon`}),s]}),(0,M.jsxs)(`span`,{className:`subgroup-meta`,children:[(0,M.jsx)(`span`,{className:`group-count`,children:c.length}),(0,M.jsx)(`span`,{className:`chevron`,children:(0,M.jsx)(Ve,{size:11})})]})]}),!u&&(0,M.jsx)(`div`,{className:`subgroup-items`,children:c.map(e=>(0,M.jsxs)(`div`,{className:`item`+(e.id===r?.id?` active`:``),onClick:()=>i(e),children:[(0,M.jsx)(`span`,{className:`dot `+e.difficulty}),(0,M.jsx)(`span`,{className:`num`,children:String(e.number).padStart(2,`0`)}),(0,M.jsx)(`span`,{children:e.title})]},e.id))})]},l)})})]},e)})})]})}function at(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var ot=at();function st(e){ot=e}var ct={exec:()=>null};function lt(e){let t=[];return n=>{let r=Math.max(0,Math.min(3,n-1)),i=t[r];return i||(i=e(r),t[r]=i),i}}function N(e,t=``){let n=typeof e==`string`?e:e.source,r={replace:(e,t)=>{let i=typeof t==`string`?t:t.source;return i=i.replace(P.caret,`$1`),n=n.replace(e,i),r},getRegex:()=>new RegExp(n,t)};return r}var ut=((e=``)=>{try{return!!RegExp(`(?<=1)(?<!1)`+e)}catch{return!1}})(),P={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:lt(e=>RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:lt(e=>RegExp(`^ {0,${e}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:lt(e=>RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),headingBeginRegex:lt(e=>RegExp(`^ {0,${e}}#`)),htmlBeginRegex:lt(e=>RegExp(`^ {0,${e}}<(?:[a-z].*>|!--)`,`i`)),blockquoteBeginRegex:lt(e=>RegExp(`^ {0,${e}}>`))},dt=/^(?:[ \t]*(?:\n|$))+/,ft=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,pt=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,mt=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,ht=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,gt=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,_t=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,vt=N(_t).replace(/bull/g,gt).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex(),yt=N(_t).replace(/bull/g,gt).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),bt=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,xt=/^[^\n]+/,St=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Ct=N(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,St).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),wt=N(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,gt).getRegex(),Tt=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,Et=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Dt=N(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,Et).replace(`tag`,Tt).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Ot=e=>N(bt).replace(`hr`,mt).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,e).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,Tt).getRegex(),kt=Ot(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),At=Ot(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),jt={blockquote:N(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace(`paragraph`,At).getRegex(),code:ft,def:Ct,fences:pt,heading:ht,hr:mt,html:Dt,lheading:vt,list:wt,newline:dt,paragraph:kt,table:ct,text:xt},Mt=N(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,mt).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,Tt).getRegex(),Nt={...jt,lheading:yt,table:Mt,paragraph:N(bt).replace(`hr`,mt).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,Mt).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,Tt).getRegex()},Pt={...jt,html:N(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,Et).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:ct,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:N(bt).replace(`hr`,mt).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,vt).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()},Ft=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,It=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Lt=/^( {2,}|\\)\n(?!\s*$)/,Rt=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,zt=/[\p{P}\p{S}]/u,Bt=/[\s\p{P}\p{S}]/u,Vt=/[^\s\p{P}\p{S}]/u,Ht=N(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,Bt).getRegex(),Ut=/[\p{Pi}\p{Ps}"']/u,Wt=/(?!~)[\p{P}\p{S}]/u,Gt=/(?!~)[\s\p{P}\p{S}]/u,Kt=/(?:[^\s\p{P}\p{S}]|~)/u,qt=N(/link|precode-code|html/,`g`).replace(`link`,/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`,ut?"(?<!`)()":"(^^|[^`])").replace(`code`,/(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`,/<(?! )[^<>]*?>/).getRegex(),Jt=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,Yt=N(Jt,`u`).replace(/punct/g,zt).getRegex(),Xt=N(Jt,`u`).replace(/punct/g,Wt).getRegex(),Zt=N(/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/,`u`).replace(/openQuote/g,Ut).replace(/punct/g,zt).getRegex(),Qt=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,$t=N(Qt,`gu`).replace(/notPunctSpace/g,Vt).replace(/punctSpace/g,Bt).replace(/punct/g,zt).getRegex(),en=N(Qt,`gu`).replace(/notPunctSpace/g,Kt).replace(/punctSpace/g,Gt).replace(/punct/g,Wt).getRegex(),tn=N(`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,Vt).replace(/punctSpace/g,Bt).replace(/punct/g,zt).getRegex(),nn=N(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,Vt).replace(/punctSpace/g,Bt).replace(/punct/g,zt).getRegex(),rn=N(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,Vt).replace(/punctSpace/g,Bt).replace(/punct/g,zt).getRegex(),an=N(/^~~?(?:((?!~)punct)|[^\s~])/,`u`).replace(/punct/g,zt).getRegex(),on=N(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,Vt).replace(/punctSpace/g,Bt).replace(/punct/g,zt).getRegex(),sn=N(/\\(punct)/,`gu`).replace(/punct/g,zt).getRegex(),cn=N(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),ln=N(Et).replace(`(?:-->|$)`,`-->`).getRegex(),un=N(`^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,ln).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),dn=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,fn=N(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace(`label`,dn).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),pn=N(/^!?\[(label)\]\[(ref)\]/).replace(`label`,dn).replace(`ref`,St).getRegex(),mn=N(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,St).getRegex(),hn=N(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,pn).replace(`nolink`,mn).getRegex(),gn=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,_n={_backpedal:ct,anyPunctuation:sn,autolink:cn,blockSkip:qt,br:Lt,code:It,del:ct,delLDelim:ct,delRDelim:ct,emStrongLDelim:Yt,emStrongRDelimAst:$t,emStrongRDelimUnd:nn,escape:Ft,link:fn,nolink:mn,punctuation:Ht,reflink:pn,reflinkSearch:hn,tag:un,text:Rt,url:ct},vn={..._n,emStrongLDelim:Zt,emStrongRDelimAst:tn,emStrongRDelimUnd:rn,link:N(/^!?\[(label)\]\((.*?)\)/).replace(`label`,dn).getRegex(),reflink:N(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,dn).getRegex()},yn={..._n,emStrongRDelimAst:en,emStrongLDelim:Xt,delLDelim:an,delRDelim:on,url:N(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`protocol`,gn).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:N(/^(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace(`protocol`,gn).getRegex()},bn={...yn,br:N(Lt).replace(`{2,}`,`*`).getRegex(),text:N(yn.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()},xn={normal:jt,gfm:Nt,pedantic:Pt},Sn={normal:_n,gfm:yn,breaks:bn,pedantic:vn},Cn={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},wn=e=>Cn[e];function Tn(e,t){if(t){if(P.escapeTest.test(e))return e.replace(P.escapeReplace,wn)}else if(P.escapeTestNoEncode.test(e))return e.replace(P.escapeReplaceNoEncode,wn);return e}function En(e){try{e=encodeURI(e).replace(P.percentDecode,`%`)}catch{return null}return e}function Dn(e,t){let n=e.replace(P.findPipe,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`}).split(P.splitPipe),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t){if(n.length>t)n.splice(t);else for(;n.length<t;)n.push(``)}for(;r<n.length;r++)n[r]=n[r].trim().replace(P.slashPipe,`|`);return n}function On(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,r-i)}function kn(e){let t=e.split(`
`),n=t.length-1;for(;n>=0&&P.blankLine.test(t[n]);)n--;return t.length-n<=2?e:t.slice(0,n+1).join(`
`)}function An(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]===`\\`)r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function jn(e,t=0){let n=t,r=``;for(let t of e)if(t===`	`){let e=4-n%4;r+=` `.repeat(e),n+=e}else r+=t,n++;return r}function Mn(e,t,n,r,i){let a=t.href,o=t.title||null,s=e[1].replace(i.other.outputLinkReplace,`$1`),c=e[0].charAt(0)===`!`;r.state.inLink=!0;let l=r.state.linkEmitted,u=r.state.inRawBlock;r.state.linkEmitted=!1;let d=r.inlineTokens(s),f=r.state.linkEmitted;if(r.state.linkEmitted=l,r.state.inLink=!1,!c){if(f){r.state.inRawBlock=u;return}r.state.linkEmitted=!0}return{type:c?`image`:`link`,raw:n,href:a,title:o,text:s,tokens:d}}function Nn(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(e=>{let t=e.match(n.other.beginningSpace);if(t===null)return e;let[r]=t;return r.length>=i.length?e.slice(i.length):e}).join(`
`)}var Pn=class{options;rules;lexer;constructor(e){this.options=e||ot}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=this.options.pedantic?t[0]:kn(t[0]);return{type:`code`,raw:e,codeBlockStyle:`indented`,text:e.replace(this.rules.other.codeRemoveIndent,``)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=Nn(e,t[3]||``,this.rules);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=On(e,`#`);(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:`heading`,raw:On(t[0],`
`),depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:`hr`,raw:On(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=On(t[0],`
`).split(`
`),n=``,r=``,i=[];for(;e.length>0;){let t=!1,a=[],o;for(o=0;o<e.length;o++)if(this.rules.other.blockquoteStart.test(e[o]))a.push(e[o]),t=!0;else if(!t)a.push(e[o]);else break;e=e.slice(o);let s=a.join(`
`),c=s.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,``);n=n?`${n}
${s}`:s,r=r?`${r}
${c}`:c;let l=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=l,e.length===0)break;let u=i.at(-1);if(u?.type===`code`)break;if(u?.type===`blockquote`){let t=u,a=e.join(`
`),o=t.raw+`
`+a.replace(this.rules.other.blockquoteSetextReplace2,``),s=this.blockquote(o);i[i.length-1]=s,n=`${n}
${a}`,r=r.substring(0,r.length-t.text.length)+s.text;break}if(u?.type===`list`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.list(a);i[i.length-1]=o,n=n.substring(0,n.length-u.raw.length)+o.raw,r=r.substring(0,r.length-t.raw.length)+o.raw,e=a.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:`blockquote`,raw:n,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),r=n.length>1,i={type:`list`,raw:``,ordered:r,start:r?+n.slice(0,-1):``,loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:`[*+-]`);let a=this.rules.other.listItemRegex(n),o=!1;for(;e;){let n=!1,r=``,s=``;if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;r=t[0],e=e.substring(r.length);let c=jn(t[2].split(`
`,1)[0],t[1].length),l=e.split(`
`,1)[0],u=!c.trim(),d=0;if(this.options.pedantic?(d=2,s=c.trimStart()):u?d=t[1].length+1:(d=c.search(this.rules.other.nonSpaceChar),d=d>4?1:d,s=c.slice(d),d+=t[1].length),u&&this.rules.other.blankLine.test(l)&&(r+=l+`
`,e=e.substring(l.length+1),n=!0),!n){let t=this.rules.other.nextBulletRegex(d),n=this.rules.other.hrRegex(d),i=this.rules.other.fencesBeginRegex(d),a=this.rules.other.headingBeginRegex(d),o=this.rules.other.htmlBeginRegex(d),f=this.rules.other.blockquoteBeginRegex(d);for(;e;){let p=e.split(`
`,1)[0],m;if(l=p,this.options.pedantic?(l=l.replace(this.rules.other.listReplaceNesting,`  `),m=l):m=l.replace(this.rules.other.tabCharGlobal,`    `),i.test(l)||a.test(l)||o.test(l)||f.test(l)||t.test(l)||n.test(l))break;if(m.search(this.rules.other.nonSpaceChar)>=d||!l.trim())s+=`
`+m.slice(d);else{if(u||c.replace(this.rules.other.tabCharGlobal,`    `).search(this.rules.other.nonSpaceChar)>=4||i.test(c)||a.test(c)||n.test(c))break;s+=`
`+l}u=!l.trim(),r+=p+`
`,e=e.substring(p.length+1),c=m.slice(d)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(r)&&(o=!0)),i.items.push({type:`list_item`,raw:r,task:!!this.options.gfm&&this.rules.other.listIsTask.test(s),loose:!1,text:s,tokens:[]}),i.raw+=r}let s=i.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let e of i.items)if(this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]),!i.loose){let t=e.tokens.filter(e=>e.type===`space`);i.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}for(let e of i.items){let t=e.tokens[0];if(e.task&&(t?.type===`text`||t?.type===`paragraph`)){e.text=e.text.replace(this.rules.other.listReplaceTask,``),t.raw=t.raw.replace(this.rules.other.listReplaceTask,``),t.text=t.text.replace(this.rules.other.listReplaceTask,``);for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,``);break}let n=this.rules.other.listTaskCheckbox.exec(e.raw);if(n){let t={type:`checkbox`,raw:n[0]+` `,checked:n[0]!==`[ ]`};e.checked=t.checked,i.loose?e.tokens[0]&&[`paragraph`,`text`].includes(e.tokens[0].type)&&`tokens`in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=t.raw+e.tokens[0].raw,e.tokens[0].text=t.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(t)):e.tokens.unshift({type:`paragraph`,raw:t.raw,text:t.raw,tokens:[t]}):e.tokens.unshift(t)}}else e.task&&=!1}if(i.loose)for(let e of i.items){e.loose=!0;for(let t of e.tokens)t.type===`text`&&(t.type=`paragraph`)}return i}}html(e){let t=this.rules.block.html.exec(e);if(t){let e=kn(t[0]);return{type:`html`,block:!0,raw:e,pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:e}}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal,` `),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:e,raw:On(t[0],`
`),href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=Dn(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],a={type:`table`,raw:On(t[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push(`right`):this.rules.other.tableAlignCenter.test(e)?a.align.push(`center`):this.rules.other.tableAlignLeft.test(e)?a.align.push(`left`):a.align.push(null);for(let e=0;e<n.length;e++)a.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:a.align[e]});for(let e of i)a.rows.push(Dn(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let e=t[1].trim();return{type:`heading`,raw:On(t[0],`
`),depth:t[2].charAt(0)===`=`?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=On(e.slice(0,-1),`\\`);if((e.length-t.length)%2==0)return}else{let e=An(t[2],`()`);if(e===-2)return;if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let n=t[2],r=``;if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):``;return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(n=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?n.slice(1):n.slice(1,-1)),Mn(t,{href:n&&n.replace(this.rules.inline.anyPunctuation,`$1`),title:r&&r.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=t[(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal,` `).toLowerCase()];if(!e){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return Mn(n,e,n[0],this.lexer,this.rules)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let i=[...r[0]].length-1,a,o,s=i,c=0,l=r[0][0],u=n===l,d=l===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(d.lastIndex=0,t=t.slice(-1*e.length+i);(r=d.exec(t))!==null;){if(a=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!a)continue;if(o=[...a].length,r[3]||r[4]){s+=o;continue}if(r[5]||r[6]){if(i%3&&!((i+o)%3)){c+=o;continue}if(u)break}if(s-=o,s>0)continue;o=Math.min(o,o+s+c);let t=[...r[0]][0].length,n=e.slice(0,i+r.index+t+o);if(Math.min(i,o)%2){let e=n.slice(1,-1);return{type:`em`,raw:n,text:e,tokens:this.lexer.inlineTokens(e)}}let l=n.slice(2,-2);return{type:`strong`,raw:n,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal,` `),n=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&r&&(e=e.substring(1,e.length-1)),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e,t,n=``){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=this.rules.inline.delRDelim;for(s.lastIndex=0,t=t.slice(-1*e.length+n);(r=s.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(a=[...i].length,a!==n))continue;if(r[3]||r[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let t=[...r[0]][0].length,s=e.slice(0,n+r.index+t+a),c=s.slice(n,-n);return{type:`del`,raw:s,text:c,tokens:this.lexer.inlineTokens(c)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return t[2]===`@`?(e=t[1],n=`mailto:`+e):(e=t[1],n=e),{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if(t[2]===`@`)e=t[0],n=`mailto:`+e;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);e=t[0],n=t[1]===`www.`?`http://`+t[0]:t[0]}return{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:t[0],escaped:e}}}},Fn=class e{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||ot,this.options.tokenizer=this.options.tokenizer||new Pn,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,linkEmitted:!1,top:!0};let t={other:P,block:xn.normal,inline:Sn.normal};this.options.pedantic?(t.block=xn.pedantic,t.inline=Sn.pedantic):this.options.gfm&&(t.block=xn.gfm,t.inline=this.options.breaks?Sn.breaks:Sn.gfm),this.tokenizer.rules=t}static get rules(){return{block:xn,inline:Sn}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){e=e.replace(P.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(P.tabCharGlobal,`    `).replace(P.spaceLine,``));let r=1/0;for(;e;){if(e.length<r)r=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let i;if(this.options.extensions?.block?.some(n=>(i=n.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let n=t.at(-1);i.raw.length===1&&n!==void 0?n.raw+=`
`:t.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.raw,this.inlineQueue.at(-1).src=n.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},t.push(i));continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),t.push(i);continue}let a=e;if(this.options.extensions?.startBlock){let t=1/0,n=e.slice(1),r;this.options.extensions.startBlock.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(a=e.substring(0,t+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a))){let r=t.at(-1);n&&r?.type===`paragraph`?(r.raw+=(r.raw.endsWith(`
`)?``:`
`)+i.raw,r.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=r.text):t.push(i),n=a.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}linkInText(e){if(!e.includes(`[`))return!1;let t=this.tokenizer.rules.inline.link;for(let n of e.matchAll(this.tokenizer.rules.inline.blockSkip))if(t.test(n[0])&&e.charAt(n.index-1)!==`!`)return!0;for(let t of e.matchAll(this.tokenizer.rules.inline.reflinkSearch)){let e=t[0],n=e.lastIndexOf(`[`);if(!(e.charAt(0)===`!`||!Object.hasOwn(this.tokens.links,e.slice(n+1,-1)))&&!(n>1&&this.linkInText(e.slice(1,n-1))))return!0}return!1}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let n=e;if(this.tokens.links&&e.includes(`[`)){let e=this.tokenizer.rules.inline.reflinkSearch,t=n=>{let r=n.lastIndexOf(`[`);if(!Object.hasOwn(this.tokens.links,n.slice(r+1,-1)))return n;if(r>1&&n.charAt(0)!==`!`){let i=n.slice(1,r-1);if(this.linkInText(i))return`[`+i.replace(e,t)+`][`+`a`.repeat(n.length-r-2)+`]`}return`[`+`a`.repeat(n.length-2)+`]`};n=n.replace(e,t)}n=n.replace(this.tokenizer.rules.inline.anyPunctuation,e=>`+`.repeat(e.length)),n=n.replace(this.tokenizer.rules.inline.blockSkip,(e,t,n)=>{let r=n?n.length:0;return e.slice(0,r)+`[`+`a`.repeat(e.length-r-2)+`]`}),n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let r=!1,i=``,a=1/0;for(;e;){if(e.length<a)a=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}r||(i=``),r=!1;let o;if(this.options.extensions?.inline?.some(n=>(o=n.call({lexer:this},e,t))?(e=e.substring(o.raw.length),t.push(o),!0):!1))continue;if(o=this.tokenizer.escape(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.tag(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.link(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(o.raw.length);let n=t.at(-1);o.type===`text`&&n?.type===`text`?(n.raw+=o.raw,n.text+=o.text):t.push(o);continue}if(o=this.tokenizer.emStrong(e,n,i)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.codespan(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.br(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.del(e,n,i)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.autolink(e)){e=e.substring(o.raw.length),t.push(o);continue}if(!this.state.inLink&&(o=this.tokenizer.url(e))){e=e.substring(o.raw.length),t.push(o);continue}let s=e;if(this.options.extensions?.startInline){let t=1/0,n=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(s=e.substring(0,t+1))}if(o=this.tokenizer.inlineText(s)){e=e.substring(o.raw.length),o.raw.slice(-1)!==`_`&&(i=o.raw.slice(-1)),r=!0;let n=t.at(-1);n?.type===`text`?(n.raw+=o.raw,n.text+=o.text):t.push(o);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return t}infiniteLoopError(e){let t=`Infinite loop on byte: `+e;if(this.options.silent)console.error(t);else throw Error(t)}},In=class{options;parser;constructor(e){this.options=e||ot}space(e){return``}code({text:e,lang:t,escaped:n}){let r=(t||``).match(P.notSpaceStart)?.[0],i=e.replace(P.endingNewline,``)+`
`;return r?`<pre><code class="language-`+Tn(r)+`">`+(n?i:Tn(i,!0))+`</code></pre>
`:`<pre><code>`+(n?i:Tn(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return``}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,r=``;for(let t=0;t<e.items.length;t++){let n=e.items[t];r+=this.listitem(n)}let i=t?`ol`:`ul`,a=t&&n!==1?` start="`+n+`"`:``;return`<`+i+a+`>
`+r+`</`+i+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return`<input `+(e?`checked="" `:``)+`disabled="" type="checkbox"> `}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t=``,n=``;for(let t=0;t<e.header.length;t++)n+=this.tablecell(e.header[t]);t+=this.tablerow({text:n});let r=``;for(let t=0;t<e.rows.length;t++){let i=e.rows[t];n=``;for(let e=0;e<i.length;e++)n+=this.tablecell(i[e]);r+=this.tablerow({text:n})}return r&&=`<tbody>${r}</tbody>`,`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?`th`:`td`;return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${Tn(e,!0)}</code>`}br(e){return`<br>`}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let r=this.parser.parseInline(n),i=En(e);if(i===null)return r;e=i;let a=`<a href="`+e+`"`;return t&&(a+=` title="`+Tn(t)+`"`),a+=`>`+r+`</a>`,a}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=En(e);if(i===null)return Tn(n);e=i;let a=`<img src="${e}" alt="${Tn(n)}"`;return t&&(a+=` title="${Tn(t)}"`),a+=`>`,a}text(e){return`tokens`in e&&e.tokens?this.parser.parseInline(e.tokens):`escaped`in e&&e.escaped?e.text:Tn(e.text)}},Ln=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return``+e}image({text:e}){return``+e}br(){return``}checkbox({raw:e}){return e}},Rn=class e{options;renderer;textRenderer;constructor(e){this.options=e||ot,this.options.renderer=this.options.renderer||new In,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Ln}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e){this.renderer.parser=this;let t=``;for(let n=0;n<e.length;n++){let r=e[n];if(this.options.extensions?.renderers?.[r.type]){let e=r,n=this.options.extensions.renderers[e.type].call({parser:this},e);if(n!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`checkbox`,`html`,`def`,`paragraph`,`text`].includes(e.type)){t+=n||``;continue}}let i=r;switch(i.type){case`space`:t+=this.renderer.space(i);break;case`hr`:t+=this.renderer.hr(i);break;case`heading`:t+=this.renderer.heading(i);break;case`code`:t+=this.renderer.code(i);break;case`table`:t+=this.renderer.table(i);break;case`blockquote`:t+=this.renderer.blockquote(i);break;case`list`:t+=this.renderer.list(i);break;case`checkbox`:t+=this.renderer.checkbox(i);break;case`html`:t+=this.renderer.html(i);break;case`def`:t+=this.renderer.def(i);break;case`paragraph`:t+=this.renderer.paragraph(i);break;case`text`:t+=this.renderer.text(i);break;default:{let e=`Token with "`+i.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(e!==!1||![`escape`,`html`,`link`,`image`,`checkbox`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(i.type)){n+=e||``;continue}}let a=i;switch(a.type){case`escape`:n+=t.text(a);break;case`html`:n+=t.html(a);break;case`link`:n+=t.link(a);break;case`image`:n+=t.image(a);break;case`checkbox`:n+=t.checkbox(a);break;case`strong`:n+=t.strong(a);break;case`em`:n+=t.em(a);break;case`codespan`:n+=t.codespan(a);break;case`br`:n+=t.br(a);break;case`del`:n+=t.del(a);break;case`text`:n+=t.text(a);break;default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}},zn=class{options;block;constructor(e){this.options=e||ot}static passThroughHooks=new Set([`preprocess`,`postprocess`,`processAllTokens`,`emStrongMask`]);static passThroughHooksRespectAsync=new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?Fn.lex:Fn.lexInline}provideParser(e=this.block){return e?Rn.parse:Rn.parseInline}},Bn=new class{defaults=at();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Rn;Renderer=In;TextRenderer=Ln;Lexer=Fn;Tokenizer=Pn;Hooks=zn;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(n=n.concat(t.call(this,r)),r.type){case`table`:{let e=r;for(let r of e.header)n=n.concat(this.walkTokens(r.tokens,t));for(let r of e.rows)for(let e of r)n=n.concat(this.walkTokens(e.tokens,t));break}case`list`:{let e=r;n=n.concat(this.walkTokens(e.items,t));break}default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let i=e[r].flat(1/0);n=n.concat(this.walkTokens(i,t))}):e.tokens&&(n=n.concat(this.walkTokens(e.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error(`extension name required`);if(`renderer`in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return r===!1&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(`tokenizer`in e){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}`childTokens`in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new In(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if([`options`,`parser`].includes(n))continue;let r=n,i=e.renderer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n||``}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new Pn(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if([`options`,`rules`,`lexer`].includes(n))continue;let r=n,i=e.tokenizer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new zn;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if([`options`,`block`].includes(n))continue;let r=n,i=e.hooks[r],a=t[r];t[r]=zn.passThroughHooks.has(n)?e=>{if(this.defaults.async&&zn.passThroughHooksRespectAsync.has(n))return(async()=>{let n=await i.call(t,e);return a.call(t,n)})();let r=i.call(t,e);return a.call(t,r)}:(...e)=>{if(this.defaults.async)return(async()=>{let n=await i.apply(t,e);return n===!1&&(n=await a.apply(t,e)),n})();let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&(n=n.concat(t.call(this,e))),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return Fn.lex(e,t??this.defaults)}parser(e,t){return Rn.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},i={...this.defaults,...r},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return a(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(typeof t>`u`||t===null)return a(Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return a(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let n=i.hooks?await i.hooks.preprocess(t):t,r=await(i.hooks?await i.hooks.provideLexer(e):e?Fn.lex:Fn.lexInline)(n,i),a=i.hooks?await i.hooks.processAllTokens(r):r;i.walkTokens&&await Promise.all(this.walkTokens(a,i.walkTokens));let o=await(i.hooks?await i.hooks.provideParser(e):e?Rn.parse:Rn.parseInline)(a,i);return i.hooks?await i.hooks.postprocess(o):o})().catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let n=(i.hooks?i.hooks.provideLexer(e):e?Fn.lex:Fn.lexInline)(t,i);i.hooks&&(n=i.hooks.processAllTokens(n)),i.walkTokens&&this.walkTokens(n,i.walkTokens);let r=(i.hooks?i.hooks.provideParser(e):e?Rn.parse:Rn.parseInline)(n,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(e){return a(e)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+Tn(n.message+``,!0)+`</pre>`;return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}};function F(e,t){return Bn.parse(e,t)}F.options=F.setOptions=function(e){return Bn.setOptions(e),F.defaults=Bn.defaults,st(F.defaults),F},F.getDefaults=at,F.defaults=ot;function Vn(...e){return Bn.use(...e),F.defaults=Bn.defaults,st(F.defaults),F}F.use=Vn,F.walkTokens=function(e,t){return Bn.walkTokens(e,t)},F.parseInline=Bn.parseInline,F.Parser=Rn,F.parser=Rn.parse,F.Renderer=In,F.TextRenderer=Ln,F.Lexer=Fn,F.lexer=Fn.lex,F.Tokenizer=Pn,F.Hooks=zn,F.parse=F,F.options,F.setOptions,F.walkTokens,F.parseInline,Rn.parse,Fn.lex,F.setOptions({breaks:!0});function Hn({text:e,className:t=`prose`,style:n}){return(0,M.jsx)(`div`,{className:t,style:n,dangerouslySetInnerHTML:{__html:F.parse(e||``)}})}var Un=c(o(((e,t)=>{function n(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw Error(`map is read-only`)}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw Error(`set is read-only`)}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(t=>{let r=e[t],i=typeof r;(i===`object`||i===`function`)&&!Object.isFrozen(r)&&n(r)}),e}var r=class{constructor(e){e.data===void 0&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}};function i(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#x27;`)}function a(e,...t){let n=Object.create(null);for(let t in e)n[t]=e[t];return t.forEach(function(e){for(let t in e)n[t]=e[t]}),n}var o=`</span>`,s=e=>!!e.scope,c=(e,{prefix:t})=>{if(e.startsWith(`language:`))return e.replace(`language:`,`language-`);if(e.includes(`.`)){let n=e.split(`.`);return[`${t}${n.shift()}`,...n.map((e,t)=>`${e}${`_`.repeat(t+1)}`)].join(` `)}return`${t}${e}`},l=class{constructor(e,t){this.buffer=``,this.classPrefix=t.classPrefix,e.walk(this)}addText(e){this.buffer+=i(e)}openNode(e){if(!s(e))return;let t=c(e.scope,{prefix:this.classPrefix});this.span(t)}closeNode(e){s(e)&&(this.buffer+=o)}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}},u=(e={})=>{let t={children:[]};return Object.assign(t,e),t},d=class e{constructor(){this.rootNode=u(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){let t=u({scope:e});this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){return typeof t==`string`?e.addText(t):t.children&&(e.openNode(t),t.children.forEach(t=>this._walk(e,t)),e.closeNode(t)),e}static _collapse(t){typeof t!=`string`&&t.children&&(t.children.every(e=>typeof e==`string`)?t.children=[t.children.join(``)]:t.children.forEach(t=>{e._collapse(t)}))}},f=class extends d{constructor(e){super(),this.options=e}addText(e){e!==``&&this.add(e)}startScope(e){this.openNode(e)}endScope(){this.closeNode()}__addSublanguage(e,t){let n=e.root;t&&(n.scope=`language:${t}`),this.add(n)}toHTML(){return new l(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}};function p(e){return e?typeof e==`string`?e:e.source:null}function m(e){return _(`(?=`,e,`)`)}function h(e){return _(`(?:`,e,`)*`)}function g(e){return _(`(?:`,e,`)?`)}function _(...e){return e.map(e=>p(e)).join(``)}function v(e){let t=e[e.length-1];return typeof t==`object`&&t.constructor===Object?(e.splice(e.length-1,1),t):{}}function y(...e){return`(`+(v(e).capture?``:`?:`)+e.map(e=>p(e)).join(`|`)+`)`}function b(e){return RegExp(e.toString()+`|`).exec(``).length-1}function x(e,t){let n=e&&e.exec(t);return n&&n.index===0}var ee=new RegExp(y(/\[(?:[^\\\]]|\\.)*\]/,/\(\?<(?![=!])[^>]+>/,/\(\?'[^']+'/,/\(\??/,/\\([1-9][0-9]*)/,/\\./));function S(e,{joinWith:t}){let n=0;return e.map(e=>{n+=1;let t=n,r=p(e),i=``;for(;r.length>0;){let e=ee.exec(r);if(!e){i+=r;break}i+=r.substring(0,e.index),r=r.substring(e.index+e[0].length),e[0][0]===`\\`&&e[1]?i+=`\\`+String(Number(e[1])+t):(i+=e[0],(e[0]===`(`||/^\(\?[<']/.test(e[0]))&&n++)}return i}).map(e=>`(${e})`).join(t)}var C=/\b\B/,te=`[a-zA-Z]\\w*`,ne=`[a-zA-Z_]\\w*`,w=`\\b\\d+(\\.\\d+)?`,T=`(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)`,re=`\\b(0b[01]+)`,E=`!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~`,ie=(e={})=>{let t=/^#![ ]*\//;return e.binary&&(e.begin=_(t,/.*\b/,e.binary,/\b.*/)),a({scope:`meta`,begin:t,end:/$/,relevance:0,"on:begin":(e,t)=>{e.index!==0&&t.ignoreMatch()}},e)},D={begin:`\\\\[\\s\\S]`,relevance:0},ae={scope:`string`,begin:`'`,end:`'`,illegal:`\\n`,contains:[D]},O={scope:`string`,begin:`"`,end:`"`,illegal:`\\n`,contains:[D]},oe={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},k=function(e,t,n={}){let r=a({scope:`comment`,begin:e,end:t,contains:[]},n);r.contains.push({scope:`doctag`,begin:`[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)`,end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});let i=y(`I`,`a`,`is`,`so`,`us`,`to`,`at`,`if`,`in`,`it`,`on`,/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return r.contains.push({begin:_(/[ ]+/,`(`,i,/[.]?[:]?([.][ ]|[ ])/,`){3}`)}),r},A=k(`//`,`$`),se=k(`/\\*`,`\\*/`),ce=k(`#`,`$`),le=Object.freeze({__proto__:null,APOS_STRING_MODE:ae,BACKSLASH_ESCAPE:D,BINARY_NUMBER_MODE:{scope:`number`,begin:re,relevance:0},BINARY_NUMBER_RE:re,COMMENT:k,C_BLOCK_COMMENT_MODE:se,C_LINE_COMMENT_MODE:A,C_NUMBER_MODE:{scope:`number`,begin:T,relevance:0},C_NUMBER_RE:T,END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{t.data._beginMatch!==e[1]&&t.ignoreMatch()}})},HASH_COMMENT_MODE:ce,IDENT_RE:te,MATCH_NOTHING_RE:C,METHOD_GUARD:{begin:`\\.\\s*[a-zA-Z_]\\w*`,relevance:0},NUMBER_MODE:{scope:`number`,begin:w,relevance:0},NUMBER_RE:w,PHRASAL_WORDS_MODE:oe,QUOTE_STRING_MODE:O,REGEXP_MODE:{scope:`regexp`,begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[D,{begin:/\[/,end:/\]/,relevance:0,contains:[D]}]},RE_STARTERS_RE:E,SHEBANG:ie,TITLE_MODE:{scope:`title`,begin:te,relevance:0},UNDERSCORE_IDENT_RE:ne,UNDERSCORE_TITLE_MODE:{scope:`title`,begin:ne,relevance:0}});function ue(e,t){e.input[e.index-1]===`.`&&t.ignoreMatch()}function de(e,t){e.className!==void 0&&(e.scope=e.className,delete e.className)}function j(e,t){t&&e.beginKeywords&&(e.begin=`\\b(`+e.beginKeywords.split(` `).join(`|`)+`)(?!\\.)(?=\\b|\\s)`,e.__beforeBegin=ue,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function fe(e,t){Array.isArray(e.illegal)&&(e.illegal=y(...e.illegal))}function pe(e,t){if(e.match){if(e.begin||e.end)throw Error(`begin & end are not supported with match`);e.begin=e.match,delete e.match}}function me(e,t){e.relevance===void 0&&(e.relevance=1)}var he=(e,t)=>{if(!e.beforeMatch)return;if(e.starts)throw Error(`beforeMatch cannot be used with starts`);let n=Object.assign({},e);Object.keys(e).forEach(t=>{delete e[t]}),e.keywords=n.keywords,e.begin=_(n.beforeMatch,m(n.begin)),e.starts={relevance:0,contains:[Object.assign(n,{endsParent:!0})]},e.relevance=0,delete n.beforeMatch},ge=[`of`,`and`,`for`,`in`,`not`,`or`,`if`,`then`,`parent`,`list`,`value`],_e=`keyword`;function ve(e,t,n=_e){let r=Object.create(null);return typeof e==`string`?i(n,e.split(` `)):Array.isArray(e)?i(n,e):Object.keys(e).forEach(function(n){Object.assign(r,ve(e[n],t,n))}),r;function i(e,n){t&&(n=n.map(e=>e.toLowerCase())),n.forEach(function(t){let n=t.split(`|`);r[n[0]]=[e,ye(n[0],n[1])]})}}function ye(e,t){return t?Number(t):+!be(e)}function be(e){return ge.includes(e.toLowerCase())}var xe={},Se=e=>{console.error(e)},Ce=(e,...t)=>{console.log(`WARN: ${e}`,...t)},we=(e,t)=>{xe[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),xe[`${e}/${t}`]=!0)},Te=Error();function Ee(e,t,{key:n}){let r=0,i=e[n],a={},o={};for(let e=1;e<=t.length;e++)o[e+r]=i[e],a[e+r]=!0,r+=b(t[e-1]);e[n]=o,e[n]._emit=a,e[n]._multi=!0}function De(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw Se(`skip, excludeBegin, returnBegin not compatible with beginScope: {}`),Te;if(typeof e.beginScope!=`object`||e.beginScope===null)throw Se(`beginScope must be object`),Te;Ee(e,e.begin,{key:`beginScope`}),e.begin=S(e.begin,{joinWith:``})}}function Oe(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw Se(`skip, excludeEnd, returnEnd not compatible with endScope: {}`),Te;if(typeof e.endScope!=`object`||e.endScope===null)throw Se(`endScope must be object`),Te;Ee(e,e.end,{key:`endScope`}),e.end=S(e.end,{joinWith:``})}}function ke(e){e.scope&&typeof e.scope==`object`&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function Ae(e){ke(e),typeof e.beginScope==`string`&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope==`string`&&(e.endScope={_wrap:e.endScope}),De(e),Oe(e)}function je(e){function t(t,n){return new RegExp(p(t),`m`+(e.case_insensitive?`i`:``)+(e.unicodeRegex?`u`:``)+(n?`g`:``))}class n{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,t){t.position=this.position++,this.matchIndexes[this.matchAt]=t,this.regexes.push([t,e]),this.matchAt+=b(e)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);let e=this.regexes.map(e=>e[1]);this.matcherRe=t(S(e,{joinWith:`|`}),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;let t=this.matcherRe.exec(e);if(!t)return null;let n=t.findIndex((e,t)=>t>0&&e!==void 0),r=this.matchIndexes[n];return t.splice(0,n),Object.assign(t,r)}}class r{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];let t=new n;return this.rules.slice(e).forEach(([e,n])=>t.addRule(e,n)),t.compile(),this.multiRegexes[e]=t,t}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(e,t){this.rules.push([e,t]),t.type===`begin`&&this.count++}exec(e){let t=this.getMatcher(this.regexIndex);t.lastIndex=this.lastIndex;let n=t.exec(e);if(this.resumingScanAtSamePosition()&&!(n&&n.index===this.lastIndex)){let t=this.getMatcher(0);t.lastIndex=this.lastIndex+1,n=t.exec(e)}return n&&(this.regexIndex+=n.position+1,this.regexIndex===this.count&&this.considerAll()),n}}function i(e){let t=new r;return e.contains.forEach(e=>t.addRule(e.begin,{rule:e,type:`begin`})),e.terminatorEnd&&t.addRule(e.terminatorEnd,{type:`end`}),e.illegal&&t.addRule(e.illegal,{type:`illegal`}),t}function o(n,r){let a=n;if(n.isCompiled)return a;[de,pe,Ae,he].forEach(e=>e(n,r)),e.compilerExtensions.forEach(e=>e(n,r)),n.__beforeBegin=null,[j,fe,me].forEach(e=>e(n,r)),n.isCompiled=!0;let s=null;return typeof n.keywords==`object`&&n.keywords.$pattern&&(n.keywords=Object.assign({},n.keywords),s=n.keywords.$pattern,delete n.keywords.$pattern),s||=/\w+/,n.keywords&&=ve(n.keywords,e.case_insensitive),a.keywordPatternRe=t(s,!0),r&&(n.begin||=/\B|\b/,a.beginRe=t(a.begin),!n.end&&!n.endsWithParent&&(n.end=/\B|\b/),n.end&&(a.endRe=t(a.end)),a.terminatorEnd=p(a.end)||``,n.endsWithParent&&r.terminatorEnd&&(a.terminatorEnd+=(n.end?`|`:``)+r.terminatorEnd)),n.illegal&&(a.illegalRe=t(n.illegal)),n.contains||=[],n.contains=[].concat(...n.contains.map(function(e){return Ne(e===`self`?n:e)})),n.contains.forEach(function(e){o(e,a)}),n.starts&&o(n.starts,r),a.matcher=i(a),a}if(e.compilerExtensions||=[],e.contains&&e.contains.includes(`self`))throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=a(e.classNameAliases||{}),o(e)}function Me(e){return e?e.endsWithParent||Me(e.starts):!1}function Ne(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(t){return a(e,{variants:null},t)})),e.cachedVariants?e.cachedVariants:Me(e)?a(e,{starts:e.starts?a(e.starts):null}):Object.isFrozen(e)?a(e):e}var Pe=`11.12.0`,Fe=class extends Error{constructor(e,t){super(e),this.name=`HTMLInjectionError`,this.html=t}},M=i,Ie=a,Le=Symbol(`nomatch`),Re=7,ze=function(e){let t=Object.create(null),i=Object.create(null),a=[],o=!0,s=`Could not find the language '{}', did you forget to load/include a language module?`,c={disableAutodetect:!0,name:`Plain text`,contains:[]},l={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:`hljs-`,cssSelector:`pre code`,languages:null,__emitter:f};function u(e){return l.noHighlightRe.test(e)}function d(e){let t=e.className+` `;t+=e.parentNode?e.parentNode.className:``;let n=l.languageDetectRe.exec(t);if(n){let t=ae(n[1]);return t||(Ce(s.replace(`{}`,n[1])),Ce(`Falling back to no-highlight mode for this block.`,e)),t?n[1]:`no-highlight`}return t.split(/\s+/).find(e=>u(e)||ae(e))}function p(e,t,n){let r=``,i=``;typeof t==`object`?(r=e,n=t.ignoreIllegals,i=t.language):(we(`10.7.0`,`highlight(lang, code, ...args) has been deprecated.`),we(`10.7.0`,`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),i=e,r=t),n===void 0&&(n=!0);let a={code:r,language:i};ce(`before:highlight`,a);let o=a.result?a.result:v(a.language,a.code,n);return o.code=a.code,ce(`after:highlight`,o),o}function v(e,n,i,a){let c=Object.create(null);function u(e,t){return e.keywords[t]}function d(){if(!E.keywords){D.addText(O);return}let e=0;E.keywordPatternRe.lastIndex=0;let t=E.keywordPatternRe.exec(O),n=``;for(;t;){n+=O.substring(e,t.index);let r=w.case_insensitive?t[0].toLowerCase():t[0],i=u(E,r);if(i){let[e,a]=i;if(D.addText(n),n=``,c[r]=(c[r]||0)+1,c[r]<=Re&&(oe+=a),e.startsWith(`_`))n+=t[0];else{let n=w.classNameAliases[e]||e;m(t[0],n)}}else n+=t[0];e=E.keywordPatternRe.lastIndex,t=E.keywordPatternRe.exec(O)}n+=O.substring(e),D.addText(n)}function f(){if(O===``)return;let e=null;if(typeof E.subLanguage==`string`){if(!t[E.subLanguage]){D.addText(O);return}e=v(E.subLanguage,O,!0,ie[E.subLanguage]),ie[E.subLanguage]=e._top}else e=ee(O,E.subLanguage.length?E.subLanguage:null);E.relevance>0&&(oe+=e.relevance),D.__addSublanguage(e._emitter,e.language)}function p(){E.subLanguage==null?d():f(),O=``}function m(e,t){e!==``&&(D.startScope(t),D.addText(e),D.endScope())}function h(e,t){let n=1,r=t.length-1;for(;n<=r;){if(!e._emit[n]){n++;continue}let r=w.classNameAliases[e[n]]||e[n],i=t[n];r?m(i,r):(O=i,d(),O=``),n++}}function g(e,t){return e.scope&&typeof e.scope==`string`&&D.openNode(w.classNameAliases[e.scope]||e.scope),e.beginScope&&(e.beginScope._wrap?(m(O,w.classNameAliases[e.beginScope._wrap]||e.beginScope._wrap),O=``):e.beginScope._multi&&(h(e.beginScope,t),O=``)),E=Object.create(e,{parent:{value:E}}),E}function _(e,t,n){let i=x(e.endRe,n);if(i){if(e[`on:end`]){let n=new r(e);e[`on:end`](t,n),n.isMatchIgnored&&(i=!1)}if(i){for(;e.endsParent&&e.parent;)e=e.parent;return e}}if(e.endsWithParent)return _(e.parent,t,n)}function y(e){return E.matcher.regexIndex===0?(O+=e[0],1):(se=!0,0)}function b(e){let t=e[0],n=e.rule,i=new r(n),a=[n.__beforeBegin,n[`on:begin`]];for(let n of a)if(n&&(n(e,i),i.isMatchIgnored))return y(t);return n.skip?O+=t:(n.excludeBegin&&(O+=t),p(),!n.returnBegin&&!n.excludeBegin&&(O=t)),g(n,e),n.returnBegin?0:t.length}function S(e){let t=e[0],r=n.substring(e.index),i=_(E,e,r);if(!i)return Le;let a=E;E.endScope&&E.endScope._wrap?(p(),m(t,E.endScope._wrap)):E.endScope&&E.endScope._multi?(p(),h(E.endScope,e)):a.skip?O+=t:(a.returnEnd||a.excludeEnd||(O+=t),p(),a.excludeEnd&&(O=t));do E.scope&&D.closeNode(),!E.skip&&!E.subLanguage&&(oe+=E.relevance),E=E.parent;while(E!==i.parent);return i.starts&&g(i.starts,e),a.returnEnd?0:t.length}function C(){let e=[];for(let t=E;t!==w;t=t.parent)t.scope&&e.unshift(t.scope);e.forEach(e=>D.openNode(e))}let te={};function ne(t,r){let a=r&&r[0];if(O+=t,a==null)return p(),0;if(te.type===`begin`&&r.type===`end`&&te.index===r.index&&a===``){if(O+=n.slice(r.index,r.index+1),!o){let t=Error(`0 width match regex (${e})`);throw t.languageName=e,t.badRule=te.rule,t}return 1}if(te=r,r.type===`begin`)return b(r);if(r.type===`illegal`&&!i){let e=Error(`Illegal lexeme "`+a+`" for mode "`+(E.scope||`<unnamed>`)+`"`);throw e.mode=E,e}if(r.type===`end`){let e=S(r);if(e!==Le)return e}if(r.type===`illegal`&&a===``)return r.index===n.length||(O+=`
`),1;if(A>1e5&&A>r.index*3)throw Error(`potential infinite loop, way more iterations than matches`);return O+=a,a.length}let w=ae(e);if(!w)throw Se(s.replace(`{}`,e)),Error(`Unknown language: "`+e+`"`);let T=je(w),re=``,E=a||T,ie={},D=new l.__emitter(l);C();let O=``,oe=0,k=0,A=0,se=!1;try{if(w.__emitTokens)w.__emitTokens(n,D);else{for(E.matcher.considerAll();;){A++,se?se=!1:E.matcher.considerAll(),E.matcher.lastIndex=k;let e=E.matcher.exec(n);if(!e)break;let t=ne(n.substring(k,e.index),e);k=e.index+t}ne(n.substring(k))}return D.finalize(),re=D.toHTML(),{language:e,value:re,relevance:oe,illegal:!1,_emitter:D,_top:E}}catch(t){if(t.message&&t.message.includes(`Illegal`))return{language:e,value:M(n),illegal:!0,relevance:0,_illegalBy:{message:t.message,index:k,context:n.slice(k-100,k+100),mode:t.mode,resultSoFar:re},_emitter:D};if(o)return{language:e,value:M(n),illegal:!1,relevance:0,errorRaised:t,_emitter:D,_top:E};throw t}}function b(e){let t={value:M(e),illegal:!1,relevance:0,_top:c,_emitter:new l.__emitter(l)};return t._emitter.addText(e),t}function ee(e,n){n=n||l.languages||Object.keys(t);let r=b(e),i=n.filter(ae).filter(oe).map(t=>v(t,e,!1));i.unshift(r);let[a,o]=i.sort((e,t)=>{if(e.relevance!==t.relevance)return t.relevance-e.relevance;if(e.language&&t.language){if(ae(e.language).supersetOf===t.language)return 1;if(ae(t.language).supersetOf===e.language)return-1}return 0}),s=a;return s.secondBest=o,s}function S(e,t,n){let r=t&&i[t]||n;e.classList.add(`hljs`),e.classList.add(`language-${r}`)}function C(e){let t=null,n=d(e);if(u(n))return;if(ce(`before:highlightElement`,{el:e,language:n}),e.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",e);return}if(e.children.length>0&&(l.ignoreUnescapedHTML||(console.warn(`One of your code blocks includes unescaped HTML. This is a potentially serious security risk.`),console.warn(`https://github.com/highlightjs/highlight.js/wiki/security`),console.warn(`The element with unescaped HTML:`),console.warn(e)),l.throwUnescapedHTML))throw new Fe(`One of your code blocks includes unescaped HTML.`,e.innerHTML);t=e;let r=t.textContent,i=n?p(r,{language:n,ignoreIllegals:!0}):ee(r);e.innerHTML=i.value,e.dataset.highlighted=`yes`,S(e,n,i.language),e.result={language:i.language,re:i.relevance,relevance:i.relevance},i.secondBest&&(e.secondBest={language:i.secondBest.language,relevance:i.secondBest.relevance}),ce(`after:highlightElement`,{el:e,result:i,text:r})}function te(e){l=Ie(l,e)}let ne=()=>{re(),we(`10.6.0`,`initHighlighting() deprecated.  Use highlightAll() now.`)};function w(){re(),we(`10.6.0`,`initHighlightingOnLoad() deprecated.  Use highlightAll() now.`)}let T=!1;function re(){function e(){re()}if(document.readyState===`loading`){T||window.addEventListener(`DOMContentLoaded`,e,!1),T=!0;return}document.querySelectorAll(l.cssSelector).forEach(C)}function E(n,r){let i=null;try{i=r(e)}catch(e){if(Se(`Language definition for '{}' could not be registered.`.replace(`{}`,n)),o)Se(e);else throw e;i=c}i.name||(i.name=n),t[n]=i,i.rawDefinition=r.bind(null,e),i.aliases&&O(i.aliases,{languageName:n})}function ie(e){delete t[e];for(let t of Object.keys(i))i[t]===e&&delete i[t]}function D(){return Object.keys(t)}function ae(e){return e=(e||``).toLowerCase(),t[e]||t[i[e]]}function O(e,{languageName:t}){typeof e==`string`&&(e=[e]),e.forEach(e=>{i[e.toLowerCase()]=t})}function oe(e){let t=ae(e);return t&&!t.disableAutodetect}function k(e){e[`before:highlightBlock`]&&!e[`before:highlightElement`]&&(e[`before:highlightElement`]=t=>{e[`before:highlightBlock`](Object.assign({block:t.el},t))}),e[`after:highlightBlock`]&&!e[`after:highlightElement`]&&(e[`after:highlightElement`]=t=>{e[`after:highlightBlock`](Object.assign({block:t.el},t))})}function A(e){k(e),a.push(e)}function se(e){let t=a.indexOf(e);t!==-1&&a.splice(t,1)}function ce(e,t){let n=e;a.forEach(function(e){e[n]&&e[n](t)})}function ue(e){return we(`10.7.0`,`highlightBlock will be removed entirely in v12.0`),we(`10.7.0`,`Please use highlightElement now.`),C(e)}Object.assign(e,{highlight:p,highlightAuto:ee,highlightAll:re,highlightElement:C,highlightBlock:ue,configure:te,initHighlighting:ne,initHighlightingOnLoad:w,registerLanguage:E,unregisterLanguage:ie,listLanguages:D,getLanguage:ae,registerAliases:O,autoDetection:oe,inherit:Ie,addPlugin:A,removePlugin:se}),e.debugMode=function(){o=!1},e.safeMode=function(){o=!0},e.versionString=Pe,e.regex={concat:_,lookahead:m,either:y,optional:g,anyNumberOfTimes:h};for(let e in le)typeof le[e]==`object`&&n(le[e]);return Object.assign(e,le),e},Be=ze({});Be.newInstance=()=>ze({}),t.exports=Be,Be.HighlightJS=Be,Be.default=Be}))()).default,Wn=`[A-Za-z$_][0-9A-Za-z$_]*`,Gn=`as.in.of.if.for.while.finally.var.new.function.do.return.void.else.break.catch.instanceof.with.throw.case.default.try.switch.continue.typeof.delete.let.yield.const.class.debugger.async.await.static.import.from.export.extends.using`.split(`.`),Kn=[`true`,`false`,`null`,`undefined`,`NaN`,`Infinity`],qn=`Object.Function.Boolean.Symbol.Math.Date.Number.BigInt.String.RegExp.Array.Float32Array.Float64Array.Int8Array.Uint8Array.Uint8ClampedArray.Int16Array.Int32Array.Uint16Array.Uint32Array.BigInt64Array.BigUint64Array.Set.Map.WeakSet.WeakMap.ArrayBuffer.SharedArrayBuffer.Atomics.DataView.JSON.Promise.Generator.GeneratorFunction.AsyncFunction.Reflect.Proxy.Intl.WebAssembly`.split(`.`),Jn=[`Error`,`EvalError`,`InternalError`,`RangeError`,`ReferenceError`,`SyntaxError`,`TypeError`,`URIError`],Yn=[`setInterval`,`setTimeout`,`clearInterval`,`clearTimeout`,`require`,`exports`,`eval`,`isFinite`,`isNaN`,`parseFloat`,`parseInt`,`decodeURI`,`decodeURIComponent`,`encodeURI`,`encodeURIComponent`,`escape`,`unescape`],Xn=[`arguments`,`this`,`super`,`console`,`window`,`document`,`localStorage`,`sessionStorage`,`module`,`self`,`global`],Zn=[].concat(Yn,qn,Jn);function Qn(e){let t=e.regex,n=(e,{after:t})=>{let n=`</`+e[0].slice(1);return e.input.indexOf(n,t)!==-1},r=Wn,i={begin:`<>`,end:`</>`},a=/<[A-Za-z0-9\\._:-]+\s*\/>/,o={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,t)=>{let r=e[0].length+e.index,i=e.input[r];if(i===`<`||i===`,`){t.ignoreMatch();return}i===`>`&&(n(e,{after:r})||t.ignoreMatch());let a,o=e.input.substring(r);if(a=o.match(/^\s*=/)){t.ignoreMatch();return}if((a=o.match(/^\s+extends\s+/))&&a.index===0){t.ignoreMatch();return}}},s={$pattern:Wn,keyword:Gn,literal:Kn,built_in:Zn,"variable.language":Xn},c=`[0-9](_?[0-9])*`,l=`\\.(${c})`,u=`0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*`,d={className:`number`,variants:[{begin:`(\\b(${u})((${l})|\\.)?|(${l}))[eE][+-]?(${c})\\b`},{begin:`\\b(${u})\\b((${l})\\b|\\.)?|(${l})\\b`},{begin:`\\b(0|[1-9](_?[0-9])*)n\\b`},{begin:`\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b`},{begin:`\\b0[bB][0-1](_?[0-1])*n?\\b`},{begin:`\\b0[oO][0-7](_?[0-7])*n?\\b`},{begin:`\\b0[0-7]+n?\\b`}],relevance:0},f={className:`subst`,begin:`\\$\\{`,end:`\\}`,keywords:s,contains:[]},p={begin:".?html`",end:``,starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,f],subLanguage:`xml`}},m={begin:".?css`",end:``,starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,f],subLanguage:`css`}},h={begin:".?gql`",end:``,starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,f],subLanguage:`graphql`}},g={className:`string`,begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,f]},_={className:`comment`,variants:[e.COMMENT(/\/\*\*(?!\/)/,`\\*/`,{relevance:0,contains:[{begin:`(?=@[A-Za-z]+)`,relevance:0,contains:[{className:`doctag`,begin:`@[A-Za-z]+`},{className:`type`,begin:`\\{`,end:`\\}`,excludeEnd:!0,excludeBegin:!0,relevance:0},{className:`variable`,begin:r+`(?=\\s*(-)|$)`,endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},v=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,p,m,h,g,{match:/\$\d+/},d];f.contains=v.concat({begin:/\{/,end:/\}/,keywords:s,contains:[`self`].concat(v)});let y=[].concat(_,f.contains),b=y.concat([{begin:/(\s*)\(/,end:/\)/,keywords:s,contains:[`self`].concat(y)}]),x={className:`params`,begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,contains:b},ee={variants:[{match:[/class/,/\s+/,r,/\s+/,/extends/,/\s+/,t.concat(r,`(`,t.concat(/\./,r),`)*`)],scope:{1:`keyword`,3:`title.class`,5:`keyword`,7:`title.class.inherited`}},{match:[/class/,/\s+/,r],scope:{1:`keyword`,3:`title.class`}}]},S={relevance:0,match:t.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:`title.class`,keywords:{_:[...qn,...Jn]}},C={label:`use_strict`,className:`meta`,relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},te={variants:[{match:[/function/,/\s+/,r,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:`keyword`,3:`title.function`},label:`func.def`,contains:[x],illegal:/%/},ne={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:`variable.constant`};function w(e){return t.concat(`(?!`,e.join(`|`),`)`)}let T={match:t.concat(/\b/,w([...Yn,`super`,`import`,`await`].map(e=>`${e}\\s*\\(`)),r,t.lookahead(/\s*\(/)),className:`title.function`,relevance:0},re={begin:t.concat(/\./,t.lookahead(t.concat(r,/(?![0-9A-Za-z$_(])/))),end:r,excludeBegin:!0,keywords:`prototype`,className:`property`,relevance:0},E={match:[/get|set/,/\s+/,r,/(?=\()/],className:{1:`keyword`,3:`title.function`},contains:[{begin:/\(\)/},x]},ie=`(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|`+e.UNDERSCORE_IDENT_RE+`)\\s*=>`,D={match:[/const|var|let/,/\s+/,r,/\s*/,/=\s*/,/(async\s*)?/,t.lookahead(ie)],keywords:`async`,className:{1:`keyword`,3:`title.function`},contains:[x]};return{name:`JavaScript`,aliases:[`js`,`jsx`,`mjs`,`cjs`],keywords:s,exports:{PARAMS_CONTAINS:b,CLASS_REFERENCE:S},illegal:/#(?![$_A-Za-z])/,contains:[e.SHEBANG({label:`shebang`,binary:`node`,relevance:5}),C,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,p,m,h,g,_,{match:/\$\d+/},d,S,{scope:`attr`,match:r+t.lookahead(`:`),relevance:0},D,{begin:`(`+e.RE_STARTERS_RE+`|\\b(case|return|throw)\\b)\\s*`,keywords:`return throw case`,relevance:0,contains:[_,e.REGEXP_MODE,{className:`function`,begin:ie,returnBegin:!0,end:`\\s*=>`,contains:[{className:`params`,variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,contains:b}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:i.begin,end:i.end},{match:a},{begin:o.begin,"on:begin":o.isTrulyOpeningTag,end:o.end}],subLanguage:`xml`,contains:[{begin:o.begin,end:o.end,skip:!0,contains:[`self`]}]}]},te,{beginKeywords:`while if switch catch for`},{begin:`\\b(?!function)`+e.UNDERSCORE_IDENT_RE+`\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{`,returnBegin:!0,label:`func.def`,contains:[x,e.inherit(e.TITLE_MODE,{begin:r,className:`title.function`})]},{match:/\.\.\./,relevance:0},re,{match:`\\$`+r,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:`title.function`},contains:[x]},T,ne,ee,E,{match:/\$[(.]/}]}}function $n(e){let t=e.regex,n=Qn(e),r=Wn,i=[`any`,`void`,`number`,`boolean`,`string`,`object`,`never`,`symbol`,`bigint`,`unknown`],a={begin:[/namespace/,/\s+/,e.IDENT_RE],beginScope:{1:`keyword`,3:`title.class`}},o={beginKeywords:`interface`,end:/\{/,excludeEnd:!0,keywords:{keyword:`interface extends`,built_in:i},contains:[n.exports.CLASS_REFERENCE]},s={className:`meta`,relevance:10,begin:/^\s*['"]use strict['"]/},c={$pattern:Wn,keyword:Gn.concat([`type`,`interface`,`public`,`private`,`protected`,`implements`,`declare`,`abstract`,`readonly`,`enum`,`override`,`satisfies`]),literal:Kn,built_in:Zn.concat(i),"variable.language":Xn},l={className:`meta`,begin:`@`+r},u=(e,t,n)=>{let r=e.contains.findIndex(e=>e.label===t);if(r===-1)throw Error(`can not find mode to replace`);e.contains.splice(r,1,n)};Object.assign(n.keywords,c),n.exports.PARAMS_CONTAINS.push(l);let d=n.contains.find(e=>e.scope===`attr`),f=Object.assign({},d,{match:t.concat(r,t.lookahead(/\s*\?:/))});n.exports.PARAMS_CONTAINS.push([n.exports.CLASS_REFERENCE,d,f]),n.contains=n.contains.concat([l,a,o,f]),u(n,`shebang`,e.SHEBANG()),u(n,`use_strict`,s);let p=n.contains.find(e=>e.label===`func.def`);return p.relevance=0,Object.assign(n,{name:`TypeScript`,aliases:[`ts`,`tsx`,`mts`,`cts`]}),n}var er=`[A-Za-z$_][0-9A-Za-z$_]*`,tr=`as.in.of.if.for.while.finally.var.new.function.do.return.void.else.break.catch.instanceof.with.throw.case.default.try.switch.continue.typeof.delete.let.yield.const.class.debugger.async.await.static.import.from.export.extends.using`.split(`.`),nr=[`true`,`false`,`null`,`undefined`,`NaN`,`Infinity`],rr=`Object.Function.Boolean.Symbol.Math.Date.Number.BigInt.String.RegExp.Array.Float32Array.Float64Array.Int8Array.Uint8Array.Uint8ClampedArray.Int16Array.Int32Array.Uint16Array.Uint32Array.BigInt64Array.BigUint64Array.Set.Map.WeakSet.WeakMap.ArrayBuffer.SharedArrayBuffer.Atomics.DataView.JSON.Promise.Generator.GeneratorFunction.AsyncFunction.Reflect.Proxy.Intl.WebAssembly`.split(`.`),ir=[`Error`,`EvalError`,`InternalError`,`RangeError`,`ReferenceError`,`SyntaxError`,`TypeError`,`URIError`],ar=[`setInterval`,`setTimeout`,`clearInterval`,`clearTimeout`,`require`,`exports`,`eval`,`isFinite`,`isNaN`,`parseFloat`,`parseInt`,`decodeURI`,`decodeURIComponent`,`encodeURI`,`encodeURIComponent`,`escape`,`unescape`],or=[`arguments`,`this`,`super`,`console`,`window`,`document`,`localStorage`,`sessionStorage`,`module`,`self`,`global`],sr=[].concat(ar,rr,ir);function cr(e){let t=e.regex,n=(e,{after:t})=>{let n=`</`+e[0].slice(1);return e.input.indexOf(n,t)!==-1},r=er,i={begin:`<>`,end:`</>`},a=/<[A-Za-z0-9\\._:-]+\s*\/>/,o={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,t)=>{let r=e[0].length+e.index,i=e.input[r];if(i===`<`||i===`,`){t.ignoreMatch();return}i===`>`&&(n(e,{after:r})||t.ignoreMatch());let a,o=e.input.substring(r);if(a=o.match(/^\s*=/)){t.ignoreMatch();return}if((a=o.match(/^\s+extends\s+/))&&a.index===0){t.ignoreMatch();return}}},s={$pattern:er,keyword:tr,literal:nr,built_in:sr,"variable.language":or},c=`[0-9](_?[0-9])*`,l=`\\.(${c})`,u=`0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*`,d={className:`number`,variants:[{begin:`(\\b(${u})((${l})|\\.)?|(${l}))[eE][+-]?(${c})\\b`},{begin:`\\b(${u})\\b((${l})\\b|\\.)?|(${l})\\b`},{begin:`\\b(0|[1-9](_?[0-9])*)n\\b`},{begin:`\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b`},{begin:`\\b0[bB][0-1](_?[0-1])*n?\\b`},{begin:`\\b0[oO][0-7](_?[0-7])*n?\\b`},{begin:`\\b0[0-7]+n?\\b`}],relevance:0},f={className:`subst`,begin:`\\$\\{`,end:`\\}`,keywords:s,contains:[]},p={begin:".?html`",end:``,starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,f],subLanguage:`xml`}},m={begin:".?css`",end:``,starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,f],subLanguage:`css`}},h={begin:".?gql`",end:``,starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,f],subLanguage:`graphql`}},g={className:`string`,begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,f]},_={className:`comment`,variants:[e.COMMENT(/\/\*\*(?!\/)/,`\\*/`,{relevance:0,contains:[{begin:`(?=@[A-Za-z]+)`,relevance:0,contains:[{className:`doctag`,begin:`@[A-Za-z]+`},{className:`type`,begin:`\\{`,end:`\\}`,excludeEnd:!0,excludeBegin:!0,relevance:0},{className:`variable`,begin:r+`(?=\\s*(-)|$)`,endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},v=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,p,m,h,g,{match:/\$\d+/},d];f.contains=v.concat({begin:/\{/,end:/\}/,keywords:s,contains:[`self`].concat(v)});let y=[].concat(_,f.contains),b=y.concat([{begin:/(\s*)\(/,end:/\)/,keywords:s,contains:[`self`].concat(y)}]),x={className:`params`,begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,contains:b},ee={variants:[{match:[/class/,/\s+/,r,/\s+/,/extends/,/\s+/,t.concat(r,`(`,t.concat(/\./,r),`)*`)],scope:{1:`keyword`,3:`title.class`,5:`keyword`,7:`title.class.inherited`}},{match:[/class/,/\s+/,r],scope:{1:`keyword`,3:`title.class`}}]},S={relevance:0,match:t.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:`title.class`,keywords:{_:[...rr,...ir]}},C={label:`use_strict`,className:`meta`,relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},te={variants:[{match:[/function/,/\s+/,r,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:`keyword`,3:`title.function`},label:`func.def`,contains:[x],illegal:/%/},ne={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:`variable.constant`};function w(e){return t.concat(`(?!`,e.join(`|`),`)`)}let T={match:t.concat(/\b/,w([...ar,`super`,`import`,`await`].map(e=>`${e}\\s*\\(`)),r,t.lookahead(/\s*\(/)),className:`title.function`,relevance:0},re={begin:t.concat(/\./,t.lookahead(t.concat(r,/(?![0-9A-Za-z$_(])/))),end:r,excludeBegin:!0,keywords:`prototype`,className:`property`,relevance:0},E={match:[/get|set/,/\s+/,r,/(?=\()/],className:{1:`keyword`,3:`title.function`},contains:[{begin:/\(\)/},x]},ie=`(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|`+e.UNDERSCORE_IDENT_RE+`)\\s*=>`,D={match:[/const|var|let/,/\s+/,r,/\s*/,/=\s*/,/(async\s*)?/,t.lookahead(ie)],keywords:`async`,className:{1:`keyword`,3:`title.function`},contains:[x]};return{name:`JavaScript`,aliases:[`js`,`jsx`,`mjs`,`cjs`],keywords:s,exports:{PARAMS_CONTAINS:b,CLASS_REFERENCE:S},illegal:/#(?![$_A-Za-z])/,contains:[e.SHEBANG({label:`shebang`,binary:`node`,relevance:5}),C,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,p,m,h,g,_,{match:/\$\d+/},d,S,{scope:`attr`,match:r+t.lookahead(`:`),relevance:0},D,{begin:`(`+e.RE_STARTERS_RE+`|\\b(case|return|throw)\\b)\\s*`,keywords:`return throw case`,relevance:0,contains:[_,e.REGEXP_MODE,{className:`function`,begin:ie,returnBegin:!0,end:`\\s*=>`,contains:[{className:`params`,variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,contains:b}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:i.begin,end:i.end},{match:a},{begin:o.begin,"on:begin":o.isTrulyOpeningTag,end:o.end}],subLanguage:`xml`,contains:[{begin:o.begin,end:o.end,skip:!0,contains:[`self`]}]}]},te,{beginKeywords:`while if switch catch for`},{begin:`\\b(?!function)`+e.UNDERSCORE_IDENT_RE+`\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{`,returnBegin:!0,label:`func.def`,contains:[x,e.inherit(e.TITLE_MODE,{begin:r,className:`title.function`})]},{match:/\.\.\./,relevance:0},re,{match:`\\$`+r,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:`title.function`},contains:[x]},T,ne,ee,E,{match:/\$[(.]/}]}}function lr(e){let t=e.regex,n=/[\p{XID_Start}_]\p{XID_Continue}*/u,r=`and.as.assert.async.await.break.case.class.continue.def.del.elif.else.except.finally.for.from.global.if.import.in.is.lambda.lazy.match.nonlocal|10.not.or.pass.raise.return.try.while.with.yield`.split(`.`),i={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:r,built_in:`__import__.abs.aiter.all.anext.any.ascii.bin.bool.breakpoint.bytearray.bytes.callable.chr.classmethod.compile.complex.delattr.dict.dir.divmod.enumerate.eval.exec.filter.float.format.frozendict.frozenset.getattr.globals.hasattr.hash.help.hex.id.input.int.isinstance.issubclass.iter.len.list.locals.map.max.memoryview.min.next.object.oct.open.ord.pow.print.property.range.repr.reversed.round.sentinel.set.setattr.slice.sorted.staticmethod.str.sum.super.tuple.type.vars.zip`.split(`.`),literal:[`__debug__`,`Ellipsis`,`False`,`None`,`NotImplemented`,`True`],type:[`Any`,`Callable`,`Coroutine`,`Dict`,`List`,`Literal`,`Generic`,`Optional`,`Sequence`,`Set`,`Tuple`,`Type`,`Union`]},a={className:`meta`,begin:/^(>>>|\.\.\.) /},o={className:`subst`,begin:/\{/,end:/\}/,keywords:i,illegal:/#/},s={begin:/\{\{/,relevance:0},c={className:`string`,contains:[e.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,a],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,a],relevance:10},{begin:/([fFtT][rR]|[rR][fFtT]|[fFtT])'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,a,s,o]},{begin:/([fFtT][rR]|[rR][fFtT]|[fFtT])"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,a,s,o]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,end:/"/},{begin:/([fFtT][rR]|[rR][fFtT]|[fFtT])'/,end:/'/,contains:[e.BACKSLASH_ESCAPE,s,o]},{begin:/([fFtT][rR]|[rR][fFtT]|[fFtT])"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,s,o]},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},l=`[0-9](_?[0-9])*`,u=`(\\b(${l}))?\\.(${l})|\\b(${l})\\.`,d=`\\b|${r.join(`|`)}`,f={className:`number`,relevance:0,variants:[{begin:`(\\b(${l})|(${u}))[eE][+-]?(${l})[jJ]?(?=${d})`},{begin:`(${u})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${d})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${d})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${d})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${d})`},{begin:`\\b(${l})[jJ](?=${d})`}]},p={className:`comment`,begin:t.lookahead(/# type:/),end:/$/,keywords:i,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},m={className:`params`,variants:[{className:``,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:[`self`,a,f,c,e.HASH_COMMENT_MODE]}]};return o.contains=[c,f,a],{name:`Python`,aliases:[`py`,`gyp`,`ipython`],unicodeRegex:!0,keywords:i,illegal:/(<\/|\?)|=>/,contains:[a,f,{scope:`variable.language`,match:/\bself\b/},{beginKeywords:`if`,relevance:0},{match:/\bor\b/,scope:`keyword`},c,p,e.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,n],scope:{1:`keyword`,3:`title.function`},contains:[m]},{variants:[{match:[/\bclass/,/\s+/,n,/\s*/,/\(\s*/,n,/\s*\)/]},{match:[/\bclass/,/\s+/,n]}],scope:{1:`keyword`,3:`title.class`,6:`title.class.inherited`}},{className:`meta`,begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[f,m,c]}]}}var ur=`[0-9](_*[0-9])*`,dr=`\\.(${ur})`,fr=`[0-9a-fA-F](_*[0-9a-fA-F])*`,pr={className:`number`,variants:[{begin:`(\\b(${ur})((${dr})|\\.)?|(${dr}))[eE][+-]?(${ur})[fFdD]?\\b`},{begin:`\\b(${ur})((${dr})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{begin:`(${dr})[fFdD]?\\b`},{begin:`\\b(${ur})[fFdD]\\b`},{begin:`\\b0[xX]((${fr})\\.?|(${fr})?\\.(${fr}))[pP][+-]?(${ur})[fFdD]?\\b`},{begin:`\\b(0|[1-9](_*[0-9])*)[lL]?\\b`},{begin:`\\b0[xX](${fr})[lL]?\\b`},{begin:`\\b0(_*[0-7])*[lL]?\\b`},{begin:`\\b0[bB][01](_*[01])*[lL]?\\b`}],relevance:0};function mr(e,t,n){return n===-1?``:e.replace(t,r=>mr(e,t,n-1))}function hr(e){let t=e.regex,n=`[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*`,r=`(?:(?:\\s*\\[\\s*])+)?`,i=`(?:\\?(?:\\s+(?:extends|super)\\s+[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*<@@@>(?:(?:\\s*\\[\\s*])+)?)?|[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*<@@@>(?:(?:\\s*\\[\\s*])+)?)`,a=mr(`(?:\\s*<\\s*`+i+`(?:\\s*,\\s*`+i+`)*\\s*>)?`,/<@@@>/g,2),o={keyword:`synchronized.abstract.private.var.static.if.const .for.while.strictfp.finally.protected.import.native.final.void.enum.else.break.transient.catch.instanceof.volatile.case.assert.package.default.public.try.switch.continue.throws.protected.public.private.module.requires.exports.do.sealed.yield.permits.goto.when`.split(`.`),literal:[`false`,`true`,`null`],type:[`char`,`boolean`,`long`,`float`,`int`,`byte`,`short`,`double`],built_in:[`super`,`this`]},s={className:`meta`,begin:`@`+n,contains:[{begin:/\(/,end:/\)/,contains:[`self`]}]},c={className:`params`,begin:/\(/,end:/\)/,keywords:o,relevance:0,contains:[e.C_BLOCK_COMMENT_MODE],endsParent:!0};return{name:`Java`,aliases:[`jsp`],keywords:o,illegal:/<\/|#/,contains:[e.COMMENT(`/\\*\\*`,`\\*/`,{relevance:0,contains:[{begin:/\w+@/,relevance:0},{className:`doctag`,begin:`@[A-Za-z]+`}]}),{begin:/import java\.[a-z]+\./,keywords:`import`,relevance:2},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{begin:/"""/,end:/"""/,className:`string`,contains:[e.BACKSLASH_ESCAPE]},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{match:[/\b(?:class|interface|enum|extends|implements|new)/,/\s+/,n],className:{1:`keyword`,3:`title.class`}},{match:/non-sealed/,scope:`keyword`},{beginKeywords:`new throw return else yield assert`,relevance:0},{begin:[n,t.concat(a,r,/\s+/),n,r,/\s*/,/=(?!=)/],className:{1:`type`,3:`variable`,6:`operator`}},{begin:[/record/,/\s+/,n],className:{1:`keyword`,3:`title.class`},contains:[c,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{begin:[n,t.concat(a,r,/\s+/),n,/\s*(?=\()/],className:{1:`type`,3:`title.function`},keywords:o,contains:[{className:`params`,begin:/\(/,end:/\)/,keywords:o,relevance:0,contains:[s,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,pr,e.C_BLOCK_COMMENT_MODE]},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},pr,s]}}function gr(e){let t=e.regex,n=e.COMMENT(`//`,`$`,{contains:[{begin:/\\\n/}]}),r=`[a-zA-Z_]\\w*::`,i=`(?!struct)(decltype\\(auto\\)|`+t.optional(r)+`[a-zA-Z_]\\w*`+t.optional(`<[^<>]+>`)+`)`,a={className:`type`,begin:`\\b[a-z\\d_]*_t\\b`},o={className:`string`,variants:[{begin:`(u8?|U|L)?"`,end:`"`,illegal:`\\n`,contains:[e.BACKSLASH_ESCAPE]},{begin:`(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)`,end:`'`,illegal:`.`},e.END_SAME_AS_BEGIN({begin:/(?:u8?|U|L)?R"([^()\\\s"]{0,16})\(/,end:/\)([^()\\\s"]{0,16})"/})]},s={className:`number`,variants:[{begin:`[+-]?(?:(?:\\b[0-9](?:'?[0-9])*\\.(?:[0-9](?:'?[0-9])*)?|\\.[0-9](?:'?[0-9])*)(?:[Ee][+-]?[0-9](?:'?[0-9])*)?|\\b[0-9](?:'?[0-9])*[Ee][+-]?[0-9](?:'?[0-9])*|\\b0[Xx](?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*(?:\\.(?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)?)?|\\.[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)[Pp][+-]?[0-9](?:'?[0-9])*)(?:[Ff](?:16|32|64|128)?|(BF|bf)16|[Ll]|)`},{begin:`[+-]?\\b(?:0[Bb][01](?:'?[01])*|0[Xx][0-9A-Fa-f](?:'?[0-9A-Fa-f])*|0(?:'?[0-7])*|[1-9](?:'?[0-9])*)(?:[Uu](?:LL?|ll?)|[Uu][Zz]?|(?:LL?|ll?)[Uu]?|[Zz][Uu]|)`}],relevance:0},c=[{scope:`meta`,begin:/#\s*include\b/,end:/$/,keywords:{keyword:`include`},contains:[{begin:/\\\n/},o,{scope:`string`,begin:/<.*?>/},n,e.C_BLOCK_COMMENT_MODE]},{className:`meta`,begin:/#\s*[a-z]+\b/,end:/$/,keywords:{keyword:`if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include`},contains:[{begin:/\\\n/,relevance:0},e.inherit(o,{className:`string`}),n,e.C_BLOCK_COMMENT_MODE]}],l={className:`title`,begin:t.optional(r)+e.IDENT_RE,relevance:0},u=t.optional(r)+e.IDENT_RE+`\\s*\\(`,d=`alignas.alignof.and.and_eq.asm.atomic_cancel.atomic_commit.atomic_noexcept.auto.bitand.bitor.break.case.catch.class.co_await.co_return.co_yield.compl.concept.const_cast|10.consteval.constexpr.constinit.continue.decltype.default.delete.do.dynamic_cast|10.else.enum.explicit.export.extern.false.final.for.friend.goto.if.import.inline.module.mutable.namespace.new.noexcept.not.not_eq.nullptr.operator.or.or_eq.override.private.protected.public.reflexpr.register.reinterpret_cast|10.requires.return.sizeof.static_assert.static_cast|10.struct.switch.synchronized.template.this.thread_local.throw.transaction_safe.transaction_safe_dynamic.true.try.typedef.typeid.typename.union.using.virtual.volatile.while.xor.xor_eq`.split(`.`),f=[`bool`,`char`,`char16_t`,`char32_t`,`char8_t`,`double`,`float`,`int`,`long`,`short`,`void`,`wchar_t`,`unsigned`,`signed`,`const`,`static`],p=`any.auto_ptr.barrier.binary_semaphore.bitset.complex.condition_variable.condition_variable_any.counting_semaphore.deque.false_type.flat_map.flat_set.future.imaginary.initializer_list.istringstream.jthread.latch.lock_guard.multimap.multiset.mutex.optional.ostringstream.packaged_task.pair.promise.priority_queue.queue.recursive_mutex.recursive_timed_mutex.scoped_lock.set.shared_future.shared_lock.shared_mutex.shared_timed_mutex.shared_ptr.stack.string_view.stringstream.timed_mutex.thread.true_type.tuple.unique_lock.unique_ptr.unordered_map.unordered_multimap.unordered_multiset.unordered_set.variant.vector.weak_ptr.wstring.wstring_view`.split(`.`),m=`abort.abs.acos.apply.as_const.asin.atan.atan2.calloc.ceil.cerr.cin.clog.cos.cosh.cout.declval.endl.exchange.exit.exp.fabs.floor.fmod.forward.fprintf.fputs.free.frexp.fscanf.future.invoke.isalnum.isalpha.iscntrl.isdigit.isgraph.islower.isprint.ispunct.isspace.isupper.isxdigit.labs.launder.ldexp.log.log10.make_pair.make_shared.make_shared_for_overwrite.make_tuple.make_unique.malloc.memchr.memcmp.memcpy.memset.modf.move.pow.printf.putchar.puts.realloc.scanf.sin.sinh.snprintf.sprintf.sqrt.sscanf.std.stderr.stdin.stdout.strcat.strchr.strcmp.strcpy.strcspn.strlen.strncat.strncmp.strncpy.strpbrk.strrchr.strspn.strstr.swap.tan.tanh.terminate.to_underlying.tolower.toupper.vfprintf.visit.vprintf.vsprintf`.split(`.`),h={type:f,keyword:d,literal:[`NULL`,`false`,`nullopt`,`nullptr`,`true`],built_in:[`_Pragma`],_type_hints:p},g={className:`function.dispatch`,relevance:0,keywords:{_hint:m},begin:t.concat(/\b/,`(?!${d.join(`|`)})`,e.IDENT_RE,t.lookahead(/(<[^<>]+>|)\s*\(/))},_=[g,...c,a,n,e.C_BLOCK_COMMENT_MODE,s,o],v={variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{beginKeywords:`new throw return else`,end:/;/}],keywords:h,contains:_.concat([{begin:/\(/,end:/\)/,keywords:h,contains:_.concat([`self`]),relevance:0}]),relevance:0},y={className:`function`,begin:`(`+i+`[\\*&\\s]+){1,12}`+u,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:h,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:`decltype\\(auto\\)`,keywords:h,relevance:0},{begin:u,returnBegin:!0,contains:[l],relevance:0},{begin:/::/,relevance:0},{begin:/:/,endsWithParent:!0,contains:[o,s]},{relevance:0,match:/,/},{className:`params`,begin:/\(/,end:/\)/,keywords:h,relevance:0,contains:[n,e.C_BLOCK_COMMENT_MODE,o,s,a,{begin:/\(/,end:/\)/,keywords:h,relevance:0,contains:[`self`,n,e.C_BLOCK_COMMENT_MODE,o,s,a]}]},a,n,e.C_BLOCK_COMMENT_MODE,...c]};return{name:`C++`,aliases:[`cc`,`c++`,`h++`,`hpp`,`hh`,`hxx`,`cxx`],keywords:h,illegal:`</`,classNameAliases:{"function.dispatch":`built_in`},contains:[].concat(v,y,g,_,[...c,{begin:`\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function|flat_map|flat_set)\\s*<(?!<)`,end:`>`,keywords:h,contains:[`self`,a]},{begin:e.IDENT_RE+`::`,keywords:h},{match:[/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,/\s+/,/\w+/],className:{1:`keyword`,3:`title.class`}}])}}function _r(e){let t=[`bool`,`byte`,`char`,`decimal`,`delegate`,`double`,`dynamic`,`enum`,`float`,`int`,`long`,`nint`,`nuint`,`object`,`sbyte`,`short`,`string`,`ulong`,`uint`,`ushort`],n=[`public`,`private`,`protected`,`static`,`internal`,`protected`,`abstract`,`async`,`extern`,`override`,`unsafe`,`virtual`,`new`,`sealed`,`partial`],r={keyword:`abstract.as.base.break.case.catch.class.const.continue.do.else.event.explicit.extern.finally.fixed.for.foreach.goto.if.implicit.in.interface.internal.is.lock.namespace.new.operator.out.override.params.private.protected.public.readonly.record.ref.return.scoped.sealed.sizeof.stackalloc.static.struct.switch.this.throw.try.typeof.unchecked.unsafe.using.virtual.void.volatile.while`.split(`.`).concat(`add.alias.and.ascending.args.async.await.by.descending.dynamic.equals.file.from.get.global.group.init.into.join.let.nameof.not.notnull.on.or.orderby.partial.record.remove.required.scoped.select.set.unmanaged.value|0.var.when.where.with.yield`.split(`.`)),built_in:t,literal:[`default`,`false`,`null`,`true`]},i=e.inherit(e.TITLE_MODE,{begin:`[a-zA-Z](\\.?\\w)*`}),a=`([uU][lL]?|[lL][uU]?)?`,o={className:`number`,variants:[{begin:`\\b0[bB]_*[01](_*[01])*`+a},{begin:`(-?)\\b0[xX]_*[a-fA-F0-9](_*[a-fA-F0-9])*`+a},{begin:`(-?)(\\b\\d(_*\\d)*(\\.(\\d(_*\\d)*)?)?|\\.\\d(_*\\d)*)([eE][-+]?\\d(_*\\d)*)?([fFdDmM]|[uU][lL]?|[lL][uU]?)?`}],relevance:0},s={className:`string`,begin:/"""("*)(?!")(.|\n)*?"""\1/,relevance:1},c={className:`string`,begin:`@"`,end:`"`,contains:[{begin:`""`}]},l=e.inherit(c,{illegal:/\n/}),u={className:`subst`,begin:/\{/,end:/\}/,keywords:r},d=e.inherit(u,{illegal:/\n/}),f={className:`string`,begin:/\$"/,end:`"`,illegal:/\n/,contains:[{begin:/\{\{/},{begin:/\}\}/},e.BACKSLASH_ESCAPE,d]},p={className:`string`,begin:/\$@"/,end:`"`,contains:[{begin:/\{\{/},{begin:/\}\}/},{begin:`""`},u]},m=e.inherit(p,{illegal:/\n/,contains:[{begin:/\{\{/},{begin:/\}\}/},{begin:`""`},d]});u.contains=[p,f,c,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,o,e.C_BLOCK_COMMENT_MODE],d.contains=[m,f,l,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,o,e.inherit(e.C_BLOCK_COMMENT_MODE,{illegal:/\n/})];let h={variants:[s,p,f,c,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},g={begin:`<`,end:`>`,contains:[{beginKeywords:`in out`},i]},_=e.IDENT_RE+`(<`+e.IDENT_RE+`(\\s*,\\s*`+e.IDENT_RE+`)*>)?(\\[\\])?`,v={begin:`@`+e.IDENT_RE,relevance:0};return{name:`C#`,aliases:[`cs`,`c#`],keywords:r,illegal:/::/,contains:[e.COMMENT(`///`,`$`,{returnBegin:!0,contains:[{className:`doctag`,variants:[{begin:`///`,relevance:0},{begin:`<!--|-->`},{begin:`</?`,end:`>`}]}]}),e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:`meta`,begin:`#`,end:`$`,keywords:{keyword:`if else elif endif define undef warning error line region endregion pragma checksum`}},h,o,{beginKeywords:`class interface`,relevance:0,end:/[{;=]/,illegal:/[^\s:,]/,contains:[{beginKeywords:`where class`},i,g,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{beginKeywords:`namespace`,relevance:0,end:/[{;=]/,illegal:/[^\s:]/,contains:[i,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{beginKeywords:`record`,relevance:0,end:/[{;=]/,illegal:/[^\s:]/,contains:[i,g,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{className:`meta`,begin:`^\\s*\\[(?=[\\w])`,excludeBegin:!0,end:`\\]`,excludeEnd:!0,contains:[{className:`string`,begin:/"/,end:/"/}]},{beginKeywords:`new return throw await else`,relevance:0},{className:`function`,begin:`(`+_+`\\s+)+`+e.IDENT_RE+`\\s*(<[^=]+>\\s*)?\\(`,returnBegin:!0,end:/\s*[{;=]/,excludeEnd:!0,keywords:r,contains:[{beginKeywords:n.join(` `),relevance:0},{begin:e.IDENT_RE+`\\s*(<[^=]+>\\s*)?\\(`,returnBegin:!0,contains:[e.TITLE_MODE,g],relevance:0},{match:/\(\)/},{className:`params`,begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:r,relevance:0,contains:[h,o,e.C_BLOCK_COMMENT_MODE]},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},v]}}function vr(e){let t={keyword:[`break`,`case`,`chan`,`const`,`continue`,`default`,`defer`,`else`,`fallthrough`,`for`,`func`,`go`,`goto`,`if`,`import`,`interface`,`map`,`package`,`range`,`return`,`select`,`struct`,`switch`,`type`,`var`],type:[`bool`,`byte`,`complex64`,`complex128`,`error`,`float32`,`float64`,`int8`,`int16`,`int32`,`int64`,`string`,`uint8`,`uint16`,`uint32`,`uint64`,`int`,`uint`,`uintptr`,`rune`],literal:[`true`,`false`,`iota`,`nil`],built_in:[`append`,`cap`,`close`,`complex`,`copy`,`imag`,`len`,`make`,`new`,`panic`,`print`,`println`,`real`,`recover`,`delete`]};return{name:`Go`,aliases:[`golang`],keywords:t,illegal:`</`,contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:`string`,variants:[e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{begin:"`",end:"`"}]},{className:`number`,variants:[{match:/-?\b0[xX]\.[a-fA-F0-9](_?[a-fA-F0-9])*[pP][+-]?\d(_?\d)*i?/,relevance:0},{match:/-?\b0[xX](_?[a-fA-F0-9])+((\.([a-fA-F0-9](_?[a-fA-F0-9])*)?)?[pP][+-]?\d(_?\d)*)?i?/,relevance:0},{match:/-?\b0[oO](_?[0-7])*i?/,relevance:0},{match:/-?\b0[bB](_?[01])*i?/,relevance:0},{match:/-?\.\d(_?\d)*([eE][+-]?\d(_?\d)*)?i?/,relevance:0},{match:/-?\b\d(_?\d)*(\.(\d(_?\d)*)?)?([eE][+-]?\d(_?\d)*)?i?/,relevance:0}]},{begin:/:=/},{className:`function`,beginKeywords:`func`,end:`\\s*(\\{|$)`,excludeEnd:!0,contains:[e.TITLE_MODE,{className:`params`,begin:/\(/,end:/\)/,endsParent:!0,keywords:t,illegal:/["']/}]}]}}function yr(e){let t=e.regex,n=/(r#)?/,r=t.concat(n,e.UNDERSCORE_IDENT_RE),i=t.concat(n,e.IDENT_RE),a={scope:`title.function.invoke`,relevance:0,begin:t.concat(/\b/,/(?!(?:let|for|while|if|else|match)\b)/,i,t.lookahead(/\s*\(/))},o=`([ui](8|16|32|64|128|size)|f(16|32|64|128))?`,s=`abstract.as.async.await.become.box.break.const.continue.crate.do.dyn.else.enum.extern.false.final.fn.for.if.impl.in.let.loop.macro.match.mod.move.mut.override.priv.pub.raw.ref.return.self.Self.static.struct.super.trait.true.try.type.typeof.union.unsafe.unsized.use.virtual.where.while.yield`.split(`.`),c=[`true`,`false`,`Some`,`None`,`Ok`,`Err`],l=`drop .Copy.Send.Sized.Sync.Drop.Fn.FnMut.FnOnce.ToOwned.Clone.Debug.PartialEq.PartialOrd.Eq.Ord.AsRef.AsMut.Into.From.Default.Iterator.Extend.IntoIterator.DoubleEndedIterator.ExactSizeIterator.SliceConcatExt.ToString.assert!.assert_eq!.bitflags!.bytes!.cfg!.col!.concat!.concat_idents!.debug_assert!.debug_assert_eq!.env!.eprintln!.panic!.file!.format!.format_args!.include_bytes!.include_str!.line!.local_data_key!.module_path!.option_env!.print!.println!.select!.stringify!.try!.unimplemented!.unreachable!.vec!.write!.writeln!.macro_rules!.assert_ne!.debug_assert_ne!`.split(`.`),u=[`i8`,`i16`,`i32`,`i64`,`i128`,`isize`,`u8`,`u16`,`u32`,`u64`,`u128`,`usize`,`f16`,`f32`,`f64`,`f128`,`str`,`char`,`bool`,`Box`,`Option`,`Result`,`String`,`Vec`];return{name:`Rust`,aliases:[`rs`],keywords:{$pattern:e.IDENT_RE+`!?`,type:u,keyword:s,literal:c,built_in:l},illegal:`</`,contains:[e.C_LINE_COMMENT_MODE,e.COMMENT(`/\\*`,`\\*/`,{contains:[`self`]}),e.inherit(e.QUOTE_STRING_MODE,{begin:/b?"/,illegal:null}),{scope:`symbol`,begin:/'[a-zA-Z_][a-zA-Z0-9_]*(?!')/},{scope:`string`,variants:[{begin:/b?r(#*)"(.|\n)*?"\1(?!#)/},{begin:/b?'/,end:/'/,contains:[{scope:`char.escape`,match:/\\('|"|\\|\w|x\w{2}|u\w{4}|U\w{8})/}]}]},{scope:`number`,variants:[{begin:`\\b0b([01_]+)`+o},{begin:`\\b0o([0-7_]+)`+o},{begin:`\\b0x([A-Fa-f0-9_]+)`+o},{begin:`\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)`+o}],relevance:0},{begin:[/\bsafe/,/\s+/,/extern/],scope:{1:`keyword`,3:`keyword`}},{begin:[/fn/,/\s+/,r],scope:{1:`keyword`,3:`title.function`}},{scope:`meta`,begin:`#!?\\[`,end:`\\]`,contains:[{scope:`string`,begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE]}]},{begin:[/let/,/\s+/,/(?:mut\s+)?/,r],scope:{1:`keyword`,3:`keyword`,4:`variable`}},{begin:[/for/,/\s+/,r,/\s+/,/in/],scope:{1:`keyword`,3:`variable`,5:`keyword`}},{begin:[/type/,/\s+/,r],scope:{1:`keyword`,3:`title.class`}},{begin:[/(?:trait|enum|struct|union|impl|for)/,/\s+/,r],scope:{1:`keyword`,3:`title.class`}},{begin:e.IDENT_RE+`::`,keywords:{keyword:`Self`,built_in:l,type:u}},{scope:`punctuation`,begin:`->`},a]}}Un.registerLanguage(`typescript`,$n),Un.registerLanguage(`javascript`,cr),Un.registerLanguage(`python`,lr),Un.registerLanguage(`java`,hr),Un.registerLanguage(`cpp`,gr),Un.registerLanguage(`csharp`,_r),Un.registerLanguage(`go`,vr),Un.registerLanguage(`rust`,yr);var br=Un;function xr({code:e,language:t}){let n=(0,_.useRef)(null),[r,i]=(0,_.useState)(!1);(0,_.useEffect)(()=>{n.current&&(n.current.removeAttribute(`data-highlighted`),br.highlightElement(n.current))},[e,t]);let a=()=>{navigator.clipboard.writeText(e),i(!0),setTimeout(()=>i(!1),1400)},o=e.split(`
`).length,s=Array.from({length:o},(e,t)=>t+1);return(0,M.jsxs)(`div`,{className:`code-wrap`,children:[(0,M.jsx)(`button`,{type:`button`,className:`copy-btn`+(r?` copied`:``),onClick:a,title:r?`Copied to clipboard`:`Copy code`,"aria-label":r?`Copied to clipboard`:`Copy code`,children:r?(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(et,{size:12,className:`copy-icon`}),(0,M.jsx)(`span`,{children:`Copied!`})]}):(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)($e,{size:12,className:`copy-icon`}),(0,M.jsx)(`span`,{children:`Copy`})]})}),(0,M.jsx)(`div`,{className:`code-gutter`,"aria-hidden":`true`,children:s.map(e=>(0,M.jsx)(`div`,{children:e},e))}),(0,M.jsx)(`pre`,{children:(0,M.jsx)(`code`,{ref:n,className:`hljs language-`+t,children:e})})]})}function Sr({title:e,icon:t,badge:n,size:r=`lg`,defaultOpen:i=!1,children:a}){let[o,s]=(0,_.useState)(i);return(0,M.jsxs)(`div`,{className:`disclosure disclosure-${r}${o?` open`:``}`,children:[(0,M.jsxs)(`button`,{type:`button`,className:`disclosure-head`,onClick:()=>s(e=>!e),children:[(0,M.jsx)(`span`,{className:`arrow`,children:(0,M.jsx)(He,{size:r===`sm`?11:13})}),t&&(0,M.jsx)(`span`,{className:`dh-icon`,children:t}),(0,M.jsx)(`span`,{className:`dh-title`,children:e}),n!=null&&(0,M.jsx)(`span`,{className:`dh-badge`,children:n})]}),o&&(0,M.jsx)(`div`,{className:`disclosure-body`,children:a})]})}function Cr({templates:e}){let t=Object.keys(e||{}),[n,r]=(0,_.useState)(t[0]),[i,a]=(0,_.useState)(()=>({...e})),o=(0,_.useRef)(null),s=(0,_.useRef)(null),c=(0,_.useRef)(null),l=i[n]??``;return(0,_.useEffect)(()=>{s.current&&(s.current.removeAttribute(`data-highlighted`),br.highlightElement(s.current))},[l,n]),t.length===0?null:(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`div`,{className:`lang-row`,children:t.map(e=>(0,M.jsx)(`button`,{type:`button`,className:`lang-pill`+(e===n?` active`:``),onClick:()=>r(e),children:e},e))}),(0,M.jsxs)(`div`,{className:`code-editor-wrap`,children:[(0,M.jsx)(`pre`,{className:`code-editor-highlight`,ref:c,"aria-hidden":`true`,children:(0,M.jsx)(`code`,{ref:s,className:`hljs language-`+n,children:l+`
`})}),(0,M.jsx)(`textarea`,{ref:o,className:`code-editor-input`,spellCheck:!1,wrap:`off`,value:l,onChange:e=>{let t=e.target.value;a(e=>({...e,[n]:t}))},onScroll:()=>{c.current&&o.current&&(c.current.scrollTop=o.current.scrollTop,c.current.scrollLeft=o.current.scrollLeft)},onKeyDown:e=>{if(e.key!==`Tab`)return;e.preventDefault();let t=e.currentTarget,r=t.selectionStart,i=t.selectionEnd,o=l.slice(0,r)+`  `+l.slice(i);a(e=>({...e,[n]:o})),requestAnimationFrame(()=>{t.selectionStart=t.selectionEnd=r+2})}})]}),(0,M.jsxs)(`div`,{className:`editor-actions`,children:[(0,M.jsxs)(`button`,{type:`button`,className:`ghost-btn`,onClick:()=>a(t=>({...t,[n]:e[n]})),children:[(0,M.jsx)(qe,{size:12}),(0,M.jsx)(`span`,{children:`Reset to template`})]}),(0,M.jsxs)(`span`,{className:`editor-hint`,children:[(0,M.jsx)(Je,{size:12,className:`info-icon`}),(0,M.jsx)(`span`,{children:`Scratchpad only — code execution isn't supported yet.`})]})]})]})}function wr({solution:e}){let t=Object.keys(e.code),[n,r]=(0,_.useState)(t[0]);return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(`div`,{className:`solution-meta`,children:[(0,M.jsxs)(`span`,{className:`solution-meta-item`,children:[(0,M.jsx)(Ye,{size:13,className:`meta-icon`}),(0,M.jsxs)(`span`,{children:[`Time: `,(0,M.jsx)(`b`,{children:e.time||`—`})]})]}),(0,M.jsxs)(`span`,{className:`solution-meta-item`,children:[(0,M.jsx)(Xe,{size:13,className:`meta-icon`}),(0,M.jsxs)(`span`,{children:[`Space: `,(0,M.jsx)(`b`,{children:e.space||`—`})]})]})]}),(0,M.jsxs)(Sr,{size:`lg`,title:`View Solution`,icon:(0,M.jsx)(Ze,{size:14}),children:[e.explanation&&(0,M.jsx)(Hn,{text:e.explanation,className:`prose`,style:{padding:0,marginBottom:18}}),(0,M.jsx)(`div`,{className:`lang-row`,children:t.map(e=>(0,M.jsx)(`button`,{type:`button`,className:`lang-pill`+(e===n?` active`:``),onClick:()=>r(e),children:e},e))}),(0,M.jsx)(xr,{code:e.code[n]||``,language:n}),e.walkthrough.length>0&&(0,M.jsx)(Sr,{size:`lg`,title:`Step-by-step Walkthrough`,icon:(0,M.jsx)(Qe,{size:14}),badge:e.walkthrough.length,children:(0,M.jsx)(`div`,{className:`disclosure-stack`,children:e.walkthrough.map((e,t)=>(0,M.jsx)(Sr,{size:`sm`,title:`Step ${t+1}`,children:(0,M.jsx)(`div`,{className:`prose-sm`,children:e})},t))})})]})]})}function Tr({problem:e}){let[t,n]=(0,_.useState)(0),r=e.solutions[t],i=Object.keys(e.template||{}).length>0;return(0,M.jsxs)(`div`,{className:`content-inner`,children:[(0,M.jsxs)(`div`,{className:`ptitle`,children:[(0,M.jsxs)(`h1`,{children:[e.number,`. `,e.title]}),(0,M.jsx)(`span`,{className:`badge `+e.difficulty,children:e.difficulty})]}),(0,M.jsxs)(`div`,{className:`meta-row`,children:[(0,M.jsxs)(`a`,{href:e.url,target:`_blank`,rel:`noreferrer`,className:`source-link`,children:[(0,M.jsx)(`span`,{children:e.source}),(0,M.jsx)(Ue,{size:11,className:`ext-icon`})]}),e.tags.map(e=>(0,M.jsxs)(`span`,{className:`tag`,children:[(0,M.jsx)(We,{size:10,className:`tag-icon`}),(0,M.jsx)(`span`,{children:e})]},e))]}),(0,M.jsx)(Hn,{text:e.description}),e.hints.length>0&&(0,M.jsx)(Sr,{size:`lg`,title:`Hints`,icon:(0,M.jsx)(Ge,{size:14}),badge:e.hints.length,children:(0,M.jsx)(`div`,{className:`disclosure-stack`,children:e.hints.map((e,t)=>(0,M.jsx)(Sr,{size:`sm`,title:`Hint ${t+1}`,children:(0,M.jsx)(`div`,{className:`prose-sm`,children:e})},t))})}),i&&(0,M.jsx)(Sr,{size:`lg`,title:`Try it yourself (practice before viewing solution)`,icon:(0,M.jsx)(Ke,{size:14}),children:(0,M.jsx)(Cr,{templates:e.template})}),r&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`div`,{className:`section-label`,children:`Solutions`}),(0,M.jsx)(`div`,{className:`toggle-group`,children:e.solutions.map((e,r)=>(0,M.jsx)(`button`,{type:`button`,className:`toggle-btn`+(r===t?` active`:``),onClick:()=>n(r),children:e.approach},e.approach))}),(0,M.jsx)(wr,{solution:r},t)]})]})}function Er(){let e=(0,_.useMemo)(()=>Pe(),[]),[t,n]=(0,_.useState)(e[0]?.id),[r,i]=(0,_.useState)(new Set([`Easy`,`Medium`,`Hard`])),[a,o]=(0,_.useState)(new Set),[s,c]=(0,_.useState)(()=>localStorage.getItem(`cn-theme`)||`dark`),[l,u]=(0,_.useState)(!1);(0,_.useEffect)(()=>{localStorage.setItem(`cn-theme`,s)},[s]);let d=e.find(e=>e.id===t)||e[0],f=e.filter(e=>r.has(e.difficulty));return d?(0,M.jsxs)(`div`,{className:`app`,"data-theme":s,children:[(0,M.jsx)(it,{problems:f,activeDifficulties:r,onToggleDifficulty:e=>{i(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},currentProblem:d,onSelectProblem:e=>{n(e.id),u(!1)},collapsedGroups:a,onToggleGroup:e=>{o(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},theme:s,onToggleTheme:()=>c(e=>e===`dark`?`light`:`dark`),mobileOpen:l,onCloseMobile:()=>u(!1)}),l&&(0,M.jsx)(`div`,{className:`scrim`,onClick:()=>u(!1)}),(0,M.jsxs)(`div`,{className:`main`,children:[(0,M.jsxs)(`div`,{className:`mobile-topbar`,children:[(0,M.jsx)(`button`,{type:`button`,className:`hamburger-btn`,onClick:()=>u(!0),title:`Open menu`,"aria-label":`Open menu`,children:(0,M.jsx)(ze,{size:18})}),(0,M.jsxs)(`span`,{className:`mobile-topbar-title`,children:[d.number,`. `,d.title]})]}),(0,M.jsx)(`div`,{className:`content`,children:(0,M.jsx)(Tr,{problem:d},d.id)})]})]}):(0,M.jsx)(`div`,{style:{padding:40,fontFamily:`monospace`,color:`var(--text-muted)`},children:`No problems found in src/content/problems/. Add a .md file to get started.`})}var Dr=document.getElementById(`root`);if(!Dr)throw Error(`Root element #root not found in index.html`);(0,v.createRoot)(Dr).render((0,M.jsx)(_.StrictMode,{children:(0,M.jsx)(Er,{})}));
//# sourceMappingURL=index-DI36HR84.js.map