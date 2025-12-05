var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function D(e,t){return E(e.type,t,e.props)}function O(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function k(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var A=/\/+/g;function j(e,t){return typeof e==`object`&&e&&e.key!=null?k(``+e.key):t.toString(36)}function M(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ee(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ee(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+j(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(A,`$&/`)+`/`),ee(o,r,i,``,function(e){return e})):o!=null&&(O(o)&&(o=D(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(A,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+j(a,u),c+=ee(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+j(a,u++),c+=ee(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ee(M(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function N(e,t,n){if(e==null)return e;var r=[],i=0;return ee(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function te(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var P=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},F={map:N,forEach:function(e,t,n){N(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return N(e,function(){t++}),t},toArray:function(e){return N(e,function(e){return e})||[]},only:function(e){if(!O(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=F,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=O,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:te}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,P)}catch(e){P(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.8`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,O());else{var t=n(l);t!==null&&j(x,t.startTime-e)}}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&j(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}}}finally{i?O():S=!1}}}var O;if(typeof y==`function`)O=function(){y(D)};else if(typeof MessageChannel<`u`){var k=new MessageChannel,A=k.port2;k.port1.onmessage=D,O=function(){A.postMessage(null)}}else O=function(){_(D,0)};function j(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,j(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,O()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.8`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),E=Symbol.for(`react.suspense_list`),D=Symbol.for(`react.memo`),O=Symbol.for(`react.lazy`),k=Symbol.for(`react.activity`),A=Symbol.for(`react.memo_cache_sentinel`),j=Symbol.iterator;function M(e){return typeof e!=`object`||!e?null:(e=j&&e[j]||e[`@@iterator`],typeof e==`function`?e:null)}var ee=Symbol.for(`react.client.reference`);function N(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ee?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case E:return`SuspenseList`;case k:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case D:return t=e.displayName||null,t===null?N(e.type)||`Memo`:t;case O:t=e._payload,e=e._init;try{return N(e(t))}catch{}}return null}var te=Array.isArray,P=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},re=[],ie=-1;function ae(e){return{current:e}}function oe(e){0>ie||(e.current=re[ie],re[ie]=null,ie--)}function I(e,t){ie++,re[ie]=e.current,e.current=t}var se=ae(null),ce=ae(null),le=ae(null),ue=ae(null);function de(e,t){switch(I(le,t),I(ce,e),I(se,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Jd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Jd(t),e=Yd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}oe(se),I(se,e)}function fe(){oe(se),oe(ce),oe(le)}function L(e){e.memoizedState!==null&&I(ue,e);var t=se.current,n=Yd(t,e.type);t!==n&&(I(ce,e),I(se,n))}function pe(e){ce.current===e&&(oe(se),oe(ce)),ue.current===e&&(oe(ue),ap._currentValue=ne)}var me,he;function ge(e){if(me===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);me=t&&t[1]||``,he=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+me+e+he}var _e=!1;function ve(e,t){if(!e||_e)return``;_e=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{_e=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?ge(n):``}function ye(e,t){switch(e.tag){case 26:case 27:case 5:return ge(e.type);case 16:return ge(`Lazy`);case 13:return e.child!==t&&t!==null?ge(`Suspense Fallback`):ge(`Suspense`);case 19:return ge(`SuspenseList`);case 0:case 15:return ve(e.type,!1);case 11:return ve(e.type.render,!1);case 1:return ve(e.type,!0);case 31:return ge(`Activity`);default:return``}}function be(e){try{var t=``,n=null;do t+=ye(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var xe=Object.prototype.hasOwnProperty,R=t.unstable_scheduleCallback,Se=t.unstable_cancelCallback,Ce=t.unstable_shouldYield,we=t.unstable_requestPaint,Te=t.unstable_now,Ee=t.unstable_getCurrentPriorityLevel,De=t.unstable_ImmediatePriority,Oe=t.unstable_UserBlockingPriority,ke=t.unstable_NormalPriority,Ae=t.unstable_LowPriority,je=t.unstable_IdlePriority,Me=t.log,Ne=t.unstable_setDisableYieldValue,z=null,Pe=null;function Fe(e){if(typeof Me==`function`&&Ne(e),Pe&&typeof Pe.setStrictMode==`function`)try{Pe.setStrictMode(z,e)}catch{}}var Ie=Math.clz32?Math.clz32:ze,Le=Math.log,Re=Math.LN2;function ze(e){return e>>>=0,e===0?32:31-(Le(e)/Re|0)|0}var Be=256,Ve=262144,He=4194304;function Ue(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function We(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Ue(n))):i=Ue(o):i=Ue(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Ue(n))):i=Ue(o)):i=Ue(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Ge(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ke(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qe(){var e=He;return He<<=1,!(He&62914560)&&(He=4194304),e}function Je(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ye(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Xe(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ie(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&Ze(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function Ze(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ie(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function Qe(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ie(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function $e(e,t){var n=t&-t;return n=n&42?1:et(n),(n&(e.suspendedLanes|t))===0?n:0}function et(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function tt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function nt(){var e=F.p;return e===0?(e=window.event,e===void 0?32:xp(e.type)):e}function rt(e,t){var n=F.p;try{return F.p=e,t()}finally{F.p=n}}var it=Math.random().toString(36).slice(2),at=`__reactFiber$`+it,ot=`__reactProps$`+it,st=`__reactContainer$`+it,ct=`__reactEvents$`+it,lt=`__reactListeners$`+it,ut=`__reactHandles$`+it,dt=`__reactResources$`+it,ft=`__reactMarker$`+it;function pt(e){delete e[at],delete e[ot],delete e[ct],delete e[lt],delete e[ut]}function mt(e){var t=e[at];if(t)return t;for(var n=e.parentNode;n;){if(t=n[st]||n[at]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=vf(e);e!==null;){if(n=e[at])return n;e=vf(e)}return t}e=n,n=e.parentNode}return null}function ht(e){if(e=e[at]||e[st]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function gt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function _t(e){var t=e[dt];return t||=e[dt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function vt(e){e[ft]=!0}var yt=new Set,bt={};function xt(e,t){St(e,t),St(e+`Capture`,t)}function St(e,t){for(bt[e]=t,e=0;e<t.length;e++)yt.add(t[e])}var Ct=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),wt={},Tt={};function Et(e){return xe.call(Tt,e)?!0:xe.call(wt,e)?!1:Ct.test(e)?Tt[e]=!0:(wt[e]=!0,!1)}function Dt(e,t,n){if(Et(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}}function Ot(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function kt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function At(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function jt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Mt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Nt(e){if(!e._valueTracker){var t=jt(e)?`checked`:`value`;e._valueTracker=Mt(e,t,``+e[t])}}function Pt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=jt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function Ft(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var It=/[\n"\\]/g;function Lt(e){return e.replace(It,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Rt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+At(t)):e.value!==``+At(t)&&(e.value=``+At(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Bt(e,o,At(n)):Bt(e,o,At(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+At(s):e.removeAttribute(`name`)}function zt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Nt(e);return}n=n==null?``:``+At(n),t=t==null?n:``+At(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Nt(e)}function Bt(e,t,n){t===`number`&&Ft(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Vt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+At(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ht(e,t,n){if(t!=null&&(t=``+At(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+At(n)}function Ut(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(te(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=At(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Nt(e)}function Wt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Gt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Kt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Gt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function qt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Kt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Kt(e,o,t[o])}function Jt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Yt=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),Xt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Zt(e){return Xt.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function Qt(){}var $t=null;function en(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var tn=null,nn=null;function rn(e){var t=ht(e);if(t&&(e=t.stateNode)){var n=e[ot]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Rt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Lt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[ot]||null;if(!a)throw Error(i(90));Rt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Pt(r)}break a;case`textarea`:Ht(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Vt(e,!!n.multiple,t,!1)}}}var B=!1;function an(e,t,n){if(B)return e(t,n);B=!0;try{return e(t)}finally{if(B=!1,(tn!==null||nn!==null)&&(Eu(),tn&&(t=tn,e=nn,nn=tn=null,rn(t),e)))for(t=0;t<e.length;t++)rn(e[t])}}function on(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ot]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var sn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),cn=!1;if(sn)try{var ln={};Object.defineProperty(ln,"passive",{get:function(){cn=!0}}),window.addEventListener(`test`,ln,ln),window.removeEventListener(`test`,ln,ln)}catch{cn=!1}var un=null,dn=null,fn=null;function pn(){if(fn)return fn;var e,t=dn,n=t.length,r,i=`value`in un?un.value:un.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return fn=i.slice(e,1<r?1-r:void 0)}function mn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function hn(){return!0}function gn(){return!1}function _n(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?hn:gn,this.isPropagationStopped=gn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=hn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=hn)},persist:function(){},isPersistent:hn}),t}var vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yn=_n(vn),bn=h({},vn,{view:0,detail:0}),xn=_n(bn),Sn,Cn,wn,Tn=h({},bn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:In,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==wn&&(wn&&e.type===`mousemove`?(Sn=e.screenX-wn.screenX,Cn=e.screenY-wn.screenY):Cn=Sn=0,wn=e),Sn)},movementY:function(e){return`movementY`in e?e.movementY:Cn}}),En=_n(Tn),Dn=_n(h({},Tn,{dataTransfer:0})),On=_n(h({},bn,{relatedTarget:0})),kn=_n(h({},vn,{animationName:0,elapsedTime:0,pseudoElement:0})),An=_n(h({},vn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),jn=_n(h({},vn,{data:0})),Mn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Nn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Pn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Fn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Pn[e])?!!t[e]:!1}function In(){return Fn}var Ln=_n(h({},bn,{key:function(e){if(e.key){var t=Mn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=mn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Nn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:In,charCode:function(e){return e.type===`keypress`?mn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?mn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Rn=_n(h({},Tn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),zn=_n(h({},bn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:In})),Bn=_n(h({},vn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Vn=_n(h({},Tn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Hn=_n(h({},vn,{newState:0,oldState:0})),Un=[9,13,27,32],Wn=sn&&`CompositionEvent`in window,Gn=null;sn&&`documentMode`in document&&(Gn=document.documentMode);var Kn=sn&&`TextEvent`in window&&!Gn,qn=sn&&(!Wn||Gn&&8<Gn&&11>=Gn),Jn=` `,Yn=!1;function Xn(e,t){switch(e){case`keyup`:return Un.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function Zn(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var Qn=!1;function $n(e,t){switch(e){case`compositionend`:return Zn(t);case`keypress`:return t.which===32?(Yn=!0,Jn):null;case`textInput`:return e=t.data,e===Jn&&Yn?null:e;default:return null}}function er(e,t){if(Qn)return e===`compositionend`||!Wn&&Xn(e,t)?(e=pn(),fn=dn=un=null,Qn=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return qn&&t.locale!==`ko`?null:t.data;default:return null}}var tr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!tr[e.type]:t===`textarea`}function rr(e,t,n,r){tn?nn?nn.push(r):nn=[r]:tn=r,t=Nd(t,`onChange`),0<t.length&&(n=new yn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var ir=null,ar=null;function or(e){Ed(e,0)}function sr(e){if(Pt(gt(e)))return e}function cr(e,t){if(e===`change`)return t}var lr=!1;if(sn){var ur;if(sn){var dr=`oninput`in document;if(!dr){var fr=document.createElement(`div`);fr.setAttribute(`oninput`,`return;`),dr=typeof fr.oninput==`function`}ur=dr}else ur=!1;lr=ur&&(!document.documentMode||9<document.documentMode)}function pr(){ir&&(ir.detachEvent(`onpropertychange`,mr),ar=ir=null)}function mr(e){if(e.propertyName===`value`&&sr(ar)){var t=[];rr(t,ar,e,en(e)),an(or,t)}}function hr(e,t,n){e===`focusin`?(pr(),ir=t,ar=n,ir.attachEvent(`onpropertychange`,mr)):e===`focusout`&&pr()}function gr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return sr(ar)}function _r(e,t){if(e===`click`)return sr(t)}function vr(e,t){if(e===`input`||e===`change`)return sr(t)}function yr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var br=typeof Object.is==`function`?Object.is:yr;function xr(e,t){if(br(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!xe.call(t,i)||!br(e[i],t[i]))return!1}return!0}function Sr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Cr(e,t){var n=Sr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Sr(n)}}function wr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Tr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ft(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ft(e.document)}return t}function Er(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Dr=sn&&`documentMode`in document&&11>=document.documentMode,Or=null,kr=null,Ar=null,jr=!1;function Mr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;jr||Or==null||Or!==Ft(r)||(r=Or,`selectionStart`in r&&Er(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ar&&xr(Ar,r)||(Ar=r,r=Nd(kr,`onSelect`),0<r.length&&(t=new yn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Or)))}function Nr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Pr={animationend:Nr(`Animation`,`AnimationEnd`),animationiteration:Nr(`Animation`,`AnimationIteration`),animationstart:Nr(`Animation`,`AnimationStart`),transitionrun:Nr(`Transition`,`TransitionRun`),transitionstart:Nr(`Transition`,`TransitionStart`),transitioncancel:Nr(`Transition`,`TransitionCancel`),transitionend:Nr(`Transition`,`TransitionEnd`)},Fr={},Ir={};sn&&(Ir=document.createElement(`div`).style,`AnimationEvent`in window||(delete Pr.animationend.animation,delete Pr.animationiteration.animation,delete Pr.animationstart.animation),`TransitionEvent`in window||delete Pr.transitionend.transition);function Lr(e){if(Fr[e])return Fr[e];if(!Pr[e])return e;var t=Pr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ir)return Fr[e]=t[n];return e}var Rr=Lr(`animationend`),zr=Lr(`animationiteration`),Br=Lr(`animationstart`),Vr=Lr(`transitionrun`),Hr=Lr(`transitionstart`),Ur=Lr(`transitioncancel`),Wr=Lr(`transitionend`),Gr=new Map,Kr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Kr.push(`scrollEnd`);function qr(e,t){Gr.set(e,t),xt(t,[e])}var Jr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Yr=[],Xr=0,Zr=0;function Qr(){for(var e=Xr,t=Zr=Xr=0;t<e;){var n=Yr[t];Yr[t++]=null;var r=Yr[t];Yr[t++]=null;var i=Yr[t];Yr[t++]=null;var a=Yr[t];if(Yr[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ni(n,i,a)}}function $r(e,t,n,r){Yr[Xr++]=e,Yr[Xr++]=t,Yr[Xr++]=n,Yr[Xr++]=r,Zr|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ei(e,t,n,r){return $r(e,t,n,r),ri(e)}function ti(e,t){return $r(e,null,null,t),ri(e)}function ni(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ie(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ri(e){if(50<_u)throw _u=0,vu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ii={};function ai(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function oi(e,t,n,r){return new ai(e,t,n,r)}function si(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ci(e,t){var n=e.alternate;return n===null?(n=oi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function li(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ui(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)si(e)&&(s=1);else if(typeof e==`string`)s=Xf(e,n,se.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case k:return e=oi(31,n,t,a),e.elementType=k,e.lanes=o,e;case y:return di(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=oi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case T:return e=oi(13,n,t,a),e.elementType=T,e.lanes=o,e;case E:return e=oi(19,n,t,a),e.elementType=E,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case D:s=14;break a;case O:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=oi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function di(e,t,n,r){return e=oi(7,e,r,t),e.lanes=n,e}function fi(e,t,n){return e=oi(6,e,null,t),e.lanes=n,e}function pi(e){var t=oi(18,null,null,0);return t.stateNode=e,t}function mi(e,t,n){return t=oi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var hi=new WeakMap;function gi(e,t){if(typeof e==`object`&&e){var n=hi.get(e);return n===void 0?(t={value:e,source:t,stack:be(t)},hi.set(e,t),t):n}return{value:e,source:t,stack:be(t)}}var _i=[],vi=0,yi=null,bi=0,xi=[],Si=0,Ci=null,wi=1,Ti=``;function Ei(e,t){_i[vi++]=bi,_i[vi++]=yi,yi=e,bi=t}function Di(e,t,n){xi[Si++]=wi,xi[Si++]=Ti,xi[Si++]=Ci,Ci=e;var r=wi;e=Ti;var i=32-Ie(r)-1;r&=~(1<<i),n+=1;var a=32-Ie(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,wi=1<<32-Ie(t)+i|n<<i|r,Ti=a+e}else wi=1<<a|n<<i|r,Ti=e}function Oi(e){e.return!==null&&(Ei(e,1),Di(e,1,0))}function ki(e){for(;e===yi;)yi=_i[--vi],_i[vi]=null,bi=_i[--vi],_i[vi]=null;for(;e===Ci;)Ci=xi[--Si],xi[Si]=null,Ti=xi[--Si],xi[Si]=null,wi=xi[--Si],xi[Si]=null}function Ai(e,t){xi[Si++]=wi,xi[Si++]=Ti,xi[Si++]=Ci,wi=t.id,Ti=t.overflow,Ci=e}var ji=null,Mi=null,V=!1,Ni=null,Pi=!1,Fi=Error(i(519));function Ii(e){throw Hi(gi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Fi}function Li(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[at]=e,t[ot]=r,n){case`dialog`:G(`cancel`,t),G(`close`,t);break;case`iframe`:case`object`:case`embed`:G(`load`,t);break;case`video`:case`audio`:for(n=0;n<wd.length;n++)G(wd[n],t);break;case`source`:G(`error`,t);break;case`img`:case`image`:case`link`:G(`error`,t),G(`load`,t);break;case`details`:G(`toggle`,t);break;case`input`:G(`invalid`,t),zt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:G(`invalid`,t);break;case`textarea`:G(`invalid`,t),Ut(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||zd(t.textContent,n)?(r.popover!=null&&(G(`beforetoggle`,t),G(`toggle`,t)),r.onScroll!=null&&G(`scroll`,t),r.onScrollEnd!=null&&G(`scrollend`,t),r.onClick!=null&&(t.onclick=Qt),t=!0):t=!1,t||Ii(e,!0)}function Ri(e){for(ji=e.return;ji;)switch(ji.tag){case 5:case 31:case 13:Pi=!1;return;case 27:case 3:Pi=!0;return;default:ji=ji.return}}function zi(e){if(e!==ji)return!1;if(!V)return Ri(e),V=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Xd(e.type,e.memoizedProps)),n=!n),n&&Mi&&Ii(e),Ri(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Mi=_f(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Mi=_f(e)}else t===27?(t=Mi,af(e.type)?(e=gf,gf=null,Mi=e):Mi=t):Mi=ji?hf(e.stateNode.nextSibling):null;return!0}function Bi(){Mi=ji=null,V=!1}function Vi(){var e=Ni;return e!==null&&(ru===null?ru=e:ru.push.apply(ru,e),Ni=null),e}function Hi(e){Ni===null?Ni=[e]:Ni.push(e)}var Ui=ae(null),Wi=null,Gi=null;function Ki(e,t,n){I(Ui,t._currentValue),t._currentValue=n}function qi(e){e._currentValue=Ui.current,oe(Ui)}function Ji(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Yi(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Ji(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Ji(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Xi(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;br(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ue.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[ap]:e.push(ap))}a=a.return}e!==null&&Yi(t,e,n,r),t.flags|=262144}function Zi(e){for(e=e.firstContext;e!==null;){if(!br(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Qi(e){Wi=e,Gi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function $i(e){return ta(Wi,e)}function ea(e,t){return Wi===null&&Qi(e),ta(e,t)}function ta(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Gi===null){if(e===null)throw Error(i(308));Gi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Gi=Gi.next=t;return n}var na=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ra=t.unstable_scheduleCallback,ia=t.unstable_NormalPriority,aa={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function oa(){return{controller:new na,data:new Map,refCount:0}}function sa(e){e.refCount--,e.refCount===0&&ra(ia,function(){e.controller.abort()})}var ca=null,la=0,ua=0,da=null;function fa(e,t){if(ca===null){var n=ca=[];la=0,ua=vd(),da={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return la++,t.then(pa,pa),t}function pa(){if(--la===0&&ca!==null){da!==null&&(da.status=`fulfilled`);var e=ca;ca=null,ua=0,da=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ma(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ha=P.S;P.S=function(e,t){ou=Te(),typeof t==`object`&&t&&typeof t.then==`function`&&fa(e,t),ha!==null&&ha(e,t)};var ga=ae(null);function _a(){var e=ga.current;return e===null?Ul.pooledCache:e}function va(e,t){t===null?I(ga,ga.current):I(ga,t.pool)}function ya(){var e=_a();return e===null?null:{parent:aa._currentValue,pool:e}}var ba=Error(i(460)),xa=Error(i(474)),Sa=Error(i(542)),Ca={then:function(){}};function wa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ta(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Qt,Qt),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,ka(e),e;default:if(typeof t.status==`string`)t.then(Qt,Qt);else{if(e=Ul,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,ka(e),e}throw Da=t,ba}}function Ea(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Da=e,ba):e}}var Da=null;function Oa(){if(Da===null)throw Error(i(459));var e=Da;return Da=null,e}function ka(e){if(e===ba||e===Sa)throw Error(i(483))}var Aa=null,ja=0;function Ma(e){var t=ja;return ja+=1,Aa===null&&(Aa=[]),Ta(Aa,e,t)}function Na(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Pa(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Fa(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=ci(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=fi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===O&&Ea(i)===t.type)?(t=a(t,n.props),Na(t,n),t.return=e,t):(t=ui(n.type,n.key,n.props,null,e.mode,r),Na(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=mi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=di(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=fi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=ui(t.type,t.key,t.props,null,e.mode,n),Na(n,t),n.return=e,n;case v:return t=mi(t,e.mode,n),t.return=e,t;case O:return t=Ea(t),f(e,t,n)}if(te(t)||M(t))return t=di(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ma(t),n);if(t.$$typeof===C)return f(e,ea(e,t),n);Pa(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case O:return n=Ea(n),p(e,t,n,r)}if(te(n)||M(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ma(n),r);if(n.$$typeof===C)return p(e,t,ea(e,n),r);Pa(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case O:return r=Ea(r),m(e,t,n,r,i)}if(te(r)||M(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ma(r),i);if(r.$$typeof===C)return m(e,t,n,ea(t,r),i);Pa(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),V&&Ei(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return V&&Ei(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),V&&Ei(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),V&&Ei(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return V&&Ei(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),V&&Ei(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===O&&Ea(l)===r.type){n(e,r.sibling),c=a(r,o.props),Na(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===y?(c=di(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=ui(o.type,o.key,o.props,null,e.mode,c),Na(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=mi(o,e.mode,c),c.return=e,e=c}return s(e);case O:return o=Ea(o),b(e,r,o,c)}if(te(o))return h(e,r,o,c);if(M(o)){if(l=M(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ma(o),c);if(o.$$typeof===C)return b(e,r,ea(e,o),c);Pa(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=fi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{ja=0;var i=b(e,t,n,r);return Aa=null,i}catch(t){if(t===ba||t===Sa)throw t;var a=oi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ia=Fa(!0),La=Fa(!1),Ra=!1;function za(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ba(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Va(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ha(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Hl&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ri(e),ni(e,null,n),t}return $r(e,r,t,n),ri(e)}function Ua(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qe(e,n)}}function Wa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ga=!1;function Ka(){if(Ga){var e=da;if(e!==null)throw e}}function qa(e,t,n,r){Ga=!1;var i=e.updateQueue;Ra=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(W&f)===f:(r&f)===f){f!==0&&f===ua&&(Ga=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ra=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Zl|=o,e.lanes=o,e.memoizedState=d}}function Ja(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Ya(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ja(n[e],t)}var Xa=ae(null),Za=ae(0);function Qa(e,t){e=Yl,I(Za,e),I(Xa,t),Yl=e|t.baseLanes}function $a(){I(Za,Yl),I(Xa,Xa.current)}function eo(){Yl=Za.current,oe(Xa),oe(Za)}var to=ae(null),no=null;function ro(e){var t=e.alternate;I(co,co.current&1),I(to,e),no===null&&(t===null||Xa.current!==null||t.memoizedState!==null)&&(no=e)}function io(e){I(co,co.current),I(to,e),no===null&&(no=e)}function ao(e){e.tag===22?(I(co,co.current),I(to,e),no===null&&(no=e)):oo(e)}function oo(){I(co,co.current),I(to,to.current)}function so(e){oe(to),no===e&&(no=null),oe(co)}var co=ae(0);function lo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||ff(n)||pf(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var uo=0,H=null,fo=null,po=null,mo=!1,ho=!1,go=!1,_o=0,vo=0,yo=null,bo=0;function xo(){throw Error(i(321))}function So(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!br(e[n],t[n]))return!1;return!0}function Co(e,t,n,r,i,a){return uo=a,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,P.H=e===null||e.memoizedState===null?Bs:Vs,go=!1,a=n(r,i),go=!1,ho&&(a=To(t,n,r,i)),wo(e),a}function wo(e){P.H=zs;var t=fo!==null&&fo.next!==null;if(uo=0,po=fo=H=null,mo=!1,vo=0,yo=null,t)throw Error(i(300));e===null||ic||(e=e.dependencies,e!==null&&Zi(e)&&(ic=!0))}function To(e,t,n,r){H=e;var a=0;do{if(ho&&(yo=null),vo=0,ho=!1,25<=a)throw Error(i(301));if(a+=1,po=fo=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}P.H=Hs,o=t(n,r)}while(ho);return o}function Eo(){var e=P.H,t=e.useState()[0];return t=typeof t.then==`function`?No(t):t,e=e.useState()[0],(fo===null?null:fo.memoizedState)!==e&&(H.flags|=1024),t}function Do(){var e=_o!==0;return _o=0,e}function Oo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ko(e){if(mo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}mo=!1}uo=0,po=fo=H=null,ho=!1,vo=_o=0,yo=null}function Ao(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return po===null?H.memoizedState=po=e:po=po.next=e,po}function jo(){if(fo===null){var e=H.alternate;e=e===null?null:e.memoizedState}else e=fo.next;var t=po===null?H.memoizedState:po.next;if(t!==null)po=t,fo=e;else{if(e===null)throw H.alternate===null?Error(i(467)):Error(i(310));fo=e,e={memoizedState:fo.memoizedState,baseState:fo.baseState,baseQueue:fo.baseQueue,queue:fo.queue,next:null},po===null?H.memoizedState=po=e:po=po.next=e}return po}function Mo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function No(e){var t=vo;return vo+=1,yo===null&&(yo=[]),e=Ta(yo,e,t),t=H,(po===null?t.memoizedState:po.next)===null&&(t=t.alternate,P.H=t===null||t.memoizedState===null?Bs:Vs),e}function Po(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return No(e);if(e.$$typeof===C)return $i(e)}throw Error(i(438,String(e)))}function Fo(e){var t=null,n=H.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=H.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Mo(),H.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=A;return t.index++,n}function Io(e,t){return typeof t==`function`?t(e):t}function Lo(e){return Ro(jo(),fo,e)}function Ro(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(uo&f)===f:(W&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ua&&(d=!0);else if((uo&p)===p){u=u.next,p===ua&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,H.lanes|=p,Zl|=p;f=u.action,go&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,H.lanes|=f,Zl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!br(o,e.memoizedState)&&(ic=!0,d&&(n=da,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function zo(e){var t=jo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);br(o,t.memoizedState)||(ic=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Bo(e,t,n){var r=H,a=jo(),o=V;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!br((fo||a).memoizedState,n);if(s&&(a.memoizedState=n,ic=!0),a=a.queue,ds(Uo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||po!==null&&po.memoizedState.tag&1){if(r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,a,n,t),null),Ul===null)throw Error(i(349));o||uo&127||Vo(r,t,n)}return n}function Vo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t=Mo(),H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ho(e,t,n,r){t.value=n,t.getSnapshot=r,Wo(t)&&Go(e)}function Uo(e,t,n){return n(function(){Wo(t)&&Go(e)})}function Wo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!br(e,n)}catch{return!0}}function Go(e){var t=ti(e,2);t!==null&&xu(t,e,2)}function Ko(e){var t=Ao();if(typeof e==`function`){var n=e;if(e=n(),go){Fe(!0);try{n()}finally{Fe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:e},t}function qo(e,t,n,r){return e.baseState=n,Ro(e,fo,typeof r==`function`?r:Io)}function Jo(e,t,n,r,a){if(Is(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};P.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Yo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Yo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=P.T,o={};P.T=o;try{var s=n(i,r),c=P.S;c!==null&&c(o,s),Xo(e,t,s)}catch(n){Qo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),P.T=a}}else try{a=n(i,r),Xo(e,t,a)}catch(n){Qo(e,t,n)}}function Xo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Zo(e,t,n)},function(n){return Qo(e,t,n)}):Zo(e,t,n)}function Zo(e,t,n){t.status=`fulfilled`,t.value=n,$o(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Yo(e,n)))}function Qo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,$o(t),t=t.next;while(t!==r)}e.action=null}function $o(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function es(e,t){return t}function ts(e,t){if(V){var n=Ul.formState;if(n!==null){a:{var r=H;if(V){if(Mi){b:{for(var i=Mi,a=Pi;i.nodeType!==8;){if(!a){i=null;break b}if(i=hf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){Mi=hf(i.nextSibling),r=i.data===`F!`;break a}}Ii(r)}r=!1}r&&(t=n[0])}}return n=Ao(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:t},n.queue=r,n=Ns.bind(null,H,r),r.dispatch=n,r=Ko(!1),a=Fs.bind(null,H,!1,r.queue),r=Ao(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Jo.bind(null,H,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ns(e){return rs(jo(),fo,e)}function rs(e,t,n){if(t=Ro(e,t,es)[0],e=Lo(Io)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=No(t)}catch(e){throw e===ba?Sa:e}else r=t;t=jo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(H.flags|=2048,os(9,{destroy:void 0},is.bind(null,i,n),null)),[r,a,e]}function is(e,t){e.action=t}function as(e){var t=jo(),n=fo;if(n!==null)return rs(t,n,e);jo(),t=t.memoizedState,n=jo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function os(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=H.updateQueue,t===null&&(t=Mo(),H.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ss(){return jo().memoizedState}function cs(e,t,n,r){var i=Ao();H.flags|=e,i.memoizedState=os(1|t,{destroy:void 0},n,r===void 0?null:r)}function ls(e,t,n,r){var i=jo();r=r===void 0?null:r;var a=i.memoizedState.inst;fo!==null&&r!==null&&So(r,fo.memoizedState.deps)?i.memoizedState=os(t,a,n,r):(H.flags|=e,i.memoizedState=os(1|t,a,n,r))}function us(e,t){cs(8390656,8,e,t)}function ds(e,t){ls(2048,8,e,t)}function fs(e){H.flags|=4;var t=H.updateQueue;if(t===null)t=Mo(),H.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ps(e){var t=jo().memoizedState;return fs({ref:t,nextImpl:e}),function(){if(Hl&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ms(e,t){return ls(4,2,e,t)}function hs(e,t){return ls(4,4,e,t)}function gs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _s(e,t,n){n=n==null?null:n.concat([e]),ls(4,4,gs.bind(null,t,e),n)}function vs(){}function ys(e,t){var n=jo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&So(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bs(e,t){var n=jo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&So(t,r[1]))return r[0];if(r=e(),go){Fe(!0);try{e()}finally{Fe(!1)}}return n.memoizedState=[r,t],r}function xs(e,t,n){return n===void 0||uo&1073741824&&!(W&261930)?e.memoizedState=t:(e.memoizedState=n,e=bu(),H.lanes|=e,Zl|=e,n)}function Ss(e,t,n,r){return br(n,t)?n:Xa.current===null?!(uo&42)||uo&1073741824&&!(W&261930)?(ic=!0,e.memoizedState=n):(e=bu(),H.lanes|=e,Zl|=e,t):(e=xs(e,n,r),br(e,t)||(ic=!0),e)}function Cs(e,t,n,r,i){var a=F.p;F.p=a!==0&&8>a?a:8;var o=P.T,s={};P.T=s,Fs(e,!1,t,n);try{var c=i(),l=P.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ps(e,t,ma(c,r),yu(e)):Ps(e,t,r,yu(e))}catch(n){Ps(e,t,{then:function(){},status:`rejected`,reason:n},yu())}finally{F.p=a,o!==null&&s.types!==null&&(o.types=s.types),P.T=o}}function ws(){}function Ts(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Es(e).queue;Cs(e,a,t,ne,n===null?ws:function(){return Ds(e),n(r)})}function Es(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:ne},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ds(e){var t=Es(e);t.next===null&&(t=e.alternate.memoizedState),Ps(e,t.next.queue,{},yu())}function Os(){return $i(ap)}function ks(){return jo().memoizedState}function As(){return jo().memoizedState}function js(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=yu();e=Va(n);var r=Ha(t,e,n);r!==null&&(xu(r,t,n),Ua(r,t,n)),t={cache:oa()},e.payload=t;return}t=t.return}}function Ms(e,t,n){var r=yu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Is(e)?Ls(t,n):(n=ei(e,t,n,r),n!==null&&(xu(n,e,r),Rs(n,t,r)))}function Ns(e,t,n){Ps(e,t,n,yu())}function Ps(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Is(e))Ls(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,br(s,o))return $r(e,t,i,0),Ul===null&&Qr(),!1}catch{}if(n=ei(e,t,i,r),n!==null)return xu(n,e,r),Rs(n,t,r),!0}return!1}function Fs(e,t,n,r){if(r={lane:2,revertLane:vd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Is(e)){if(t)throw Error(i(479))}else t=ei(e,n,r,2),t!==null&&xu(t,e,2)}function Is(e){var t=e.alternate;return e===H||t!==null&&t===H}function Ls(e,t){ho=mo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qe(e,n)}}var zs={readContext:$i,use:Po,useCallback:xo,useContext:xo,useEffect:xo,useImperativeHandle:xo,useLayoutEffect:xo,useInsertionEffect:xo,useMemo:xo,useReducer:xo,useRef:xo,useState:xo,useDebugValue:xo,useDeferredValue:xo,useTransition:xo,useSyncExternalStore:xo,useId:xo,useHostTransitionStatus:xo,useFormState:xo,useActionState:xo,useOptimistic:xo,useMemoCache:xo,useCacheRefresh:xo};zs.useEffectEvent=xo;var Bs={readContext:$i,use:Po,useCallback:function(e,t){return Ao().memoizedState=[e,t===void 0?null:t],e},useContext:$i,useEffect:us,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),cs(4194308,4,gs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return cs(4194308,4,e,t)},useInsertionEffect:function(e,t){cs(4,2,e,t)},useMemo:function(e,t){var n=Ao();t=t===void 0?null:t;var r=e();if(go){Fe(!0);try{e()}finally{Fe(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Ao();if(n!==void 0){var i=n(t);if(go){Fe(!0);try{n(t)}finally{Fe(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ms.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=Ao();return e={current:e},t.memoizedState=e},useState:function(e){e=Ko(e);var t=e.queue,n=Ns.bind(null,H,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:vs,useDeferredValue:function(e,t){return xs(Ao(),e,t)},useTransition:function(){var e=Ko(!1);return e=Cs.bind(null,H,e.queue,!0,!1),Ao().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=H,a=Ao();if(V){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Ul===null)throw Error(i(349));W&127||Vo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,us(Uo.bind(null,r,o,e),[e]),r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,o,n,t),null),n},useId:function(){var e=Ao(),t=Ul.identifierPrefix;if(V){var n=Ti,r=wi;n=(r&~(1<<32-Ie(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=_o++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=bo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Os,useFormState:ts,useActionState:ts,useOptimistic:function(e){var t=Ao();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Fs.bind(null,H,!0,n),n.dispatch=t,[e,t]},useMemoCache:Fo,useCacheRefresh:function(){return Ao().memoizedState=js.bind(null,H)},useEffectEvent:function(e){var t=Ao(),n={impl:e};return t.memoizedState=n,function(){if(Hl&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Vs={readContext:$i,use:Po,useCallback:ys,useContext:$i,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:Lo,useRef:ss,useState:function(){return Lo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){return Ss(jo(),fo.memoizedState,e,t)},useTransition:function(){var e=Lo(Io)[0],t=jo().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:ns,useActionState:ns,useOptimistic:function(e,t){return qo(jo(),fo,e,t)},useMemoCache:Fo,useCacheRefresh:As};Vs.useEffectEvent=ps;var Hs={readContext:$i,use:Po,useCallback:ys,useContext:$i,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:zo,useRef:ss,useState:function(){return zo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){var n=jo();return fo===null?xs(n,e,t):Ss(n,fo.memoizedState,e,t)},useTransition:function(){var e=zo(Io)[0],t=jo().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:as,useActionState:as,useOptimistic:function(e,t){var n=jo();return fo===null?(n.baseState=e,[e,n.queue.dispatch]):qo(n,fo,e,t)},useMemoCache:Fo,useCacheRefresh:As};Hs.useEffectEvent=ps;function Us(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ws={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=yu(),i=Va(r);i.payload=t,n!=null&&(i.callback=n),t=Ha(e,i,r),t!==null&&(xu(t,e,r),Ua(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=yu(),i=Va(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ha(e,i,r),t!==null&&(xu(t,e,r),Ua(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=yu(),r=Va(n);r.tag=2,t!=null&&(r.callback=t),t=Ha(e,r,n),t!==null&&(xu(t,e,n),Ua(t,e,n))}};function Gs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!xr(n,r)||!xr(i,a):!0}function Ks(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ws.enqueueReplaceState(t,t.state,null)}function qs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Js(e){Jr(e)}function Ys(e){console.error(e)}function Xs(e){Jr(e)}function Zs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Qs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function $s(e,t,n){return n=Va(n),n.tag=3,n.payload={element:null},n.callback=function(){Zs(e,t)},n}function ec(e){return e=Va(e),e.tag=3,e}function tc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Qs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Qs(t,n,r),typeof i!=`function`&&(lu===null?lu=new Set([this]):lu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function nc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Xi(t,n,a,!0),n=to.current,n!==null){switch(n.tag){case 31:case 13:return no===null?Nu():n.alternate===null&&Xl===0&&(Xl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Ca?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Qu(e,r,a)),!1;case 22:return n.flags|=65536,r===Ca?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Qu(e,r,a)),!1}throw Error(i(435,n.tag))}return Qu(e,r,a),Nu(),!1}if(V)return t=to.current,t===null?(r!==Fi&&(t=Error(i(423),{cause:r}),Hi(gi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=gi(r,n),a=$s(e.stateNode,r,a),Wa(e,a),Xl!==4&&(Xl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Fi&&(e=Error(i(422),{cause:r}),Hi(gi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=gi(o,n),nu===null?nu=[o]:nu.push(o),Xl!==4&&(Xl=2),t===null)return!0;r=gi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=$s(n.stateNode,r,e),Wa(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(lu===null||!lu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=ec(a),tc(a,e,n,r),Wa(n,a),!1}n=n.return}while(n!==null);return!1}var rc=Error(i(461)),ic=!1;function ac(e,t,n,r){t.child=e===null?La(t,null,n,r):Ia(t,e.child,n,r)}function oc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Qi(t),r=Co(e,t,n,o,a,i),s=Do(),e!==null&&!ic?(Oo(e,t,i),Ac(e,t,i)):(V&&s&&Oi(t),t.flags|=1,ac(e,t,r,i),t.child)}function sc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!si(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,cc(e,t,a,r,i)):(e=ui(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!jc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?xr:n,n(o,r)&&e.ref===t.ref)return Ac(e,t,i)}return t.flags|=1,e=ci(a,r),e.ref=t.ref,e.return=t,t.child=e}function cc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(xr(a,r)&&e.ref===t.ref){if(ic=!1,t.pendingProps=r=a,jc(e,i))e.flags&131072&&(ic=!0);else return t.lanes=e.lanes,Ac(e,t,i)}}return gc(e,t,n,r,i)}function lc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return dc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&va(t,a===null?null:a.cachePool),a===null?$a():Qa(t,a),ao(t);else return r=t.lanes=536870912,dc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&va(t,null),$a(),oo(t)):(va(t,a.cachePool),Qa(t,a),oo(t),t.memoizedState=null);return ac(e,t,i,n),t.child}function uc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function dc(e,t,n,r,i){var a=_a();return a=a===null?null:{parent:aa._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&va(t,null),$a(),ao(t),e!==null&&Xi(e,t,r,!0),t.childLanes=i,null}function fc(e,t){return t=Tc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function pc(e,t,n){return Ia(t,e.child,null,n),e=fc(t,t.pendingProps),e.flags|=2,so(t),t.memoizedState=null,e}function mc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(V){if(r.mode===`hidden`)return e=fc(t,r),t.lanes=536870912,uc(null,e);if(io(t),(e=Mi)?(e=df(e,Pi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ci===null?null:{id:wi,overflow:Ti},retryLane:536870912,hydrationErrors:null},n=pi(e),n.return=t,t.child=n,ji=t,Mi=null)):e=null,e===null)throw Ii(t);return t.lanes=536870912,null}return fc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(io(t),a){if(t.flags&256)t.flags&=-257,t=pc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(ic||Xi(e,t,n,!1),a=(n&e.childLanes)!==0,ic||a){if(r=Ul,r!==null&&(s=$e(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ti(e,s),xu(r,e,s),rc;Nu(),t=pc(e,t,n)}else e=o.treeContext,Mi=hf(s.nextSibling),ji=t,V=!0,Ni=null,Pi=!1,e!==null&&Ai(t,e),t=fc(t,r),t.flags|=4096;return t}return e=ci(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function hc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function gc(e,t,n,r,i){return Qi(t),n=Co(e,t,n,r,void 0,i),r=Do(),e!==null&&!ic?(Oo(e,t,i),Ac(e,t,i)):(V&&r&&Oi(t),t.flags|=1,ac(e,t,n,i),t.child)}function _c(e,t,n,r,i,a){return Qi(t),t.updateQueue=null,n=To(t,r,n,i),wo(e),r=Do(),e!==null&&!ic?(Oo(e,t,a),Ac(e,t,a)):(V&&r&&Oi(t),t.flags|=1,ac(e,t,n,a),t.child)}function vc(e,t,n,r,i){if(Qi(t),t.stateNode===null){var a=ii,o=n.contextType;typeof o==`object`&&o&&(a=$i(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ws,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},za(t),o=n.contextType,a.context=typeof o==`object`&&o?$i(o):ii,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Us(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ws.enqueueReplaceState(a,a.state,null),qa(t,r,a,i),Ka(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=qs(n,s);a.props=c;var l=a.context,u=n.contextType;o=ii,typeof u==`object`&&u&&(o=$i(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ks(t,a,r,o),Ra=!1;var f=t.memoizedState;a.state=f,qa(t,r,a,i),Ka(),l=t.memoizedState,s||f!==l||Ra?(typeof d==`function`&&(Us(t,n,d,r),l=t.memoizedState),(c=Ra||Gs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ba(e,t),o=t.memoizedProps,u=qs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ii,typeof l==`object`&&l&&(c=$i(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ks(t,a,r,c),Ra=!1,f=t.memoizedState,a.state=f,qa(t,r,a,i),Ka();var p=t.memoizedState;o!==d||f!==p||Ra||e!==null&&e.dependencies!==null&&Zi(e.dependencies)?(typeof s==`function`&&(Us(t,n,s,r),p=t.memoizedState),(u=Ra||Gs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Zi(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,hc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ia(t,e.child,null,i),t.child=Ia(t,null,n,i)):ac(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Ac(e,t,i),e}function yc(e,t,n,r){return Bi(),t.flags|=256,ac(e,t,n,r),t.child}var bc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xc(e){return{baseLanes:e,cachePool:ya()}}function Sc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=eu),e}function Cc(e,t,n){var r=t.pendingProps,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(co.current&2)),s&&(a=!0,t.flags&=-129),s=!!(t.flags&32),t.flags&=-33,e===null){if(V){if(a?ro(t):oo(t),(e=Mi)?(e=df(e,Pi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ci===null?null:{id:wi,overflow:Ti},retryLane:536870912,hydrationErrors:null},n=pi(e),n.return=t,t.child=n,ji=t,Mi=null)):e=null,e===null)throw Ii(t);return pf(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(oo(t),a=t.mode,c=Tc({mode:`hidden`,children:c},a),r=di(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(null,r)):(ro(t),wc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(ro(t),t.flags&=-257,t=Ec(e,t,n)):t.memoizedState===null?(oo(t),c=r.fallback,a=t.mode,r=Tc({mode:`visible`,children:r.children},a),c=di(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ia(t,e.child,null,n),r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,t=uc(null,r)):(oo(t),t.child=e.child,t.flags|=128,t=null);else if(ro(t),pf(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Hi({value:r,source:null,stack:null}),t=Ec(e,t,n)}else if(ic||Xi(e,t,n,!1),s=(n&e.childLanes)!==0,ic||s){if(s=Ul,s!==null&&(r=$e(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ti(e,r),xu(s,e,r),rc;ff(c)||Nu(),t=Ec(e,t,n)}else ff(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Mi=hf(c.nextSibling),ji=t,V=!0,Ni=null,Pi=!1,e!==null&&Ai(t,e),t=wc(t,r.children),t.flags|=4096);return t}return a?(oo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=ci(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=di(c,a,n,null),c.flags|=2):c=ci(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,uc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=xc(n):(a=c.cachePool,a===null?a=ya():(l=aa._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(e.child,r)):(ro(t),n=e.child,e=n.sibling,n=ci(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function wc(e,t){return t=Tc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Tc(e,t){return e=oi(22,e,null,t),e.lanes=0,e}function Ec(e,t,n){return Ia(t,e.child,null,n),e=wc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ji(e.return,t,n)}function Oc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function kc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=co.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,I(co,o),ac(e,t,r,n),r=V?bi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dc(e,n,t);else if(e.tag===19)Dc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&lo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Oc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&lo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Oc(t,!0,n,null,a,r);break;case`together`:Oc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Ac(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Zl|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(Xi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=ci(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ci(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jc(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&Zi(e)))}function Mc(e,t,n){switch(t.tag){case 3:de(t,t.stateNode.containerInfo),Ki(t,aa,e.memoizedState.cache),Bi();break;case 27:case 5:L(t);break;case 4:de(t,t.stateNode.containerInfo);break;case 10:Ki(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,io(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(ro(t),e=Ac(e,t,n),e===null?null:e.sibling):Cc(e,t,n):(ro(t),t.flags|=128,null);ro(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=(Xi(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return kc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),I(co,co.current),r)break;return null;case 22:return t.lanes=0,lc(e,t,n,t.pendingProps);case 24:Ki(t,aa,e.memoizedState.cache)}return Ac(e,t,n)}function Nc(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)ic=!0;else{if(!jc(e,n)&&!(t.flags&128))return ic=!1,Mc(e,t,n);ic=!!(e.flags&131072)}}else ic=!1,V&&t.flags&1048576&&Di(t,bi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Ea(t.elementType),t.type=e,typeof e==`function`)si(e)?(r=qs(e,r),t.tag=1,t=vc(null,t,e,r,n)):(t.tag=0,t=gc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=oc(null,t,e,r,n);break a}if(a===D){t.tag=14,t=sc(null,t,e,r,n);break a}}throw t=N(e)||e,Error(i(306,t,``))}}return t;case 0:return gc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=qs(r,t.pendingProps),vc(e,t,r,a,n);case 3:a:{if(de(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ba(e,t),qa(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Ki(t,aa,r),r!==o.cache&&Yi(t,[aa],n,!0),Ka(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=yc(e,t,r,n);break a}if(r!==a){a=gi(Error(i(424)),t),Hi(a),t=yc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(Mi=hf(e.firstChild),ji=t,V=!0,Ni=null,Pi=!0,n=La(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Bi(),r===a){t=Ac(e,t,n);break a}ac(e,t,r,n)}t=t.child}return t;case 26:return hc(e,t),e===null?(n=If(t.type,null,t.pendingProps,null))?t.memoizedState=n:V||(n=t.type,e=t.pendingProps,r=qd(le.current).createElement(n),r[at]=t,r[ot]=e,K(r,n,e),vt(r),t.stateNode=r):t.memoizedState=If(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return L(t),e===null&&V&&(r=t.stateNode=yf(t.type,t.pendingProps,le.current),ji=t,Pi=!0,a=Mi,af(t.type)?(gf=a,Mi=hf(r.firstChild)):Mi=a),ac(e,t,t.pendingProps.children,n),hc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&V&&((a=r=Mi)&&(r=lf(r,t.type,t.pendingProps,Pi),r===null?a=!1:(t.stateNode=r,ji=t,Mi=hf(r.firstChild),Pi=!1,a=!0)),a||Ii(t)),L(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Xd(a,o)?r=null:s!==null&&Xd(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Co(e,t,Eo,null,null,n),ap._currentValue=a),hc(e,t),ac(e,t,r,n),t.child;case 6:return e===null&&V&&((e=n=Mi)&&(n=uf(n,t.pendingProps,Pi),n===null?e=!1:(t.stateNode=n,ji=t,Mi=null,e=!0)),e||Ii(t)),null;case 13:return Cc(e,t,n);case 4:return de(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ia(t,null,r,n):ac(e,t,r,n),t.child;case 11:return oc(e,t,t.type,t.pendingProps,n);case 7:return ac(e,t,t.pendingProps,n),t.child;case 8:return ac(e,t,t.pendingProps.children,n),t.child;case 12:return ac(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Ki(t,t.type,r.value),ac(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,Qi(t),a=$i(a),r=r(a),t.flags|=1,ac(e,t,r,n),t.child;case 14:return sc(e,t,t.type,t.pendingProps,n);case 15:return cc(e,t,t.type,t.pendingProps,n);case 19:return kc(e,t,n);case 31:return mc(e,t,n);case 22:return lc(e,t,n,t.pendingProps);case 24:return Qi(t),r=$i(aa),e===null?(a=_a(),a===null&&(a=Ul,o=oa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},za(t),Ki(t,aa,a)):((e.lanes&n)!==0&&(Ba(e,t),qa(t,null,null,n),Ka()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Ki(t,aa,r),r!==a.cache&&Yi(t,[aa],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Ki(t,aa,r))),ac(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Pc(e){e.flags|=4}function Fc(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Au())e.flags|=8192;else throw Da=Ca,xa}}else e.flags&=-16777217}function Ic(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Zf(t)){if(Au())e.flags|=8192;else throw Da=Ca,xa}}function Lc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:qe(),e.lanes|=t,tu|=t)}function Rc(e,t){if(!V)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function zc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Bc(e,t,n){var r=t.pendingProps;switch(ki(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zc(t),null;case 1:return zc(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),qi(aa),fe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(zi(t)?Pc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Vi())),zc(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Pc(t),o===null?(zc(t),Fc(t,a,null,r,n)):(zc(t),Ic(t,o))):o?o===e.memoizedState?(zc(t),t.flags&=-16777217):(Pc(t),zc(t),Ic(t,o)):(e=e.memoizedProps,e!==r&&Pc(t),zc(t),Fc(t,a,e,r,n)),null;case 27:if(pe(t),n=le.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return zc(t),null}e=se.current,zi(t)?Li(t,e):(e=yf(a,r,n),t.stateNode=e,Pc(t))}return zc(t),null;case 5:if(pe(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return zc(t),null}if(o=se.current,zi(t))Li(t,o);else{var s=qd(le.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[at]=t,o[ot]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(K(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Pc(t)}}return zc(t),Fc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=le.current,zi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=ji,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[at]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||zd(e.nodeValue,n)),e||Ii(t,!0)}else e=qd(e).createTextNode(r),e[at]=t,t.stateNode=e}return zc(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=zi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[at]=t}else Bi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;zc(t),e=!1}else n=Vi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(so(t),t):(so(t),null);if(t.flags&128)throw Error(i(558))}return zc(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=zi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[at]=t}else Bi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;zc(t),a=!1}else a=Vi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(so(t),t):(so(t),null)}return so(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Lc(t,t.updateQueue),zc(t),null);case 4:return fe(),e===null&&kd(t.stateNode.containerInfo),zc(t),null;case 10:return qi(t.type),zc(t),null;case 19:if(oe(co),r=t.memoizedState,r===null)return zc(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)Rc(r,!1);else{if(Xl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=lo(e),o!==null){for(t.flags|=128,Rc(r,!1),e=o.updateQueue,t.updateQueue=e,Lc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)li(n,e),n=n.sibling;return I(co,co.current&1|2),V&&Ei(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Te()>su&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304)}}else{if(!a){if(e=lo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Lc(t,e),Rc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!V)return zc(t),null}else 2*Te()-r.renderingStartTime>su&&n!==536870912&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(zc(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Te(),e.sibling=null,n=co.current,I(co,a?n&1|2:n&1),V&&Ei(t,r.treeForkCount),e);case 22:case 23:return so(t),eo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(zc(t),t.subtreeFlags&6&&(t.flags|=8192)):zc(t),n=t.updateQueue,n!==null&&Lc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&oe(ga),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),qi(aa),zc(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Vc(e,t){switch(ki(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qi(aa),fe(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return pe(t),null;case 31:if(t.memoizedState!==null){if(so(t),t.alternate===null)throw Error(i(340));Bi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(so(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Bi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return oe(co),null;case 4:return fe(),null;case 10:return qi(t.type),null;case 22:case 23:return so(t),eo(),e!==null&&oe(ga),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return qi(aa),null;case 25:return null;default:return null}}function Hc(e,t){switch(ki(t),t.tag){case 3:qi(aa),fe();break;case 26:case 27:case 5:pe(t);break;case 4:fe();break;case 31:t.memoizedState!==null&&so(t);break;case 13:so(t);break;case 19:oe(co);break;case 10:qi(t.type);break;case 22:case 23:so(t),eo(),e!==null&&oe(ga);break;case 24:qi(aa)}}function Uc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Zu(t,t.return,e)}}function Wc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Zu(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Zu(t,t.return,e)}}function Gc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ya(t,n)}catch(t){Zu(e,e.return,t)}}}function Kc(e,t,n){n.props=qs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Zu(e,t,n)}}function qc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Zu(e,t,n)}}function Jc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Zu(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Zu(e,t,n)}else n.current=null}}function Yc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Zu(e,e.return,t)}}function Xc(e,t,n){try{var r=e.stateNode;Hd(r,e.type,n,t),r[ot]=t}catch(t){Zu(e,e.return,t)}}function Zc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&af(e.type)||e.tag===4}function Qc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Zc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&af(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Qt));else if(r!==4&&(r===27&&af(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&af(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}function tl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);K(t,r,n),t[at]=e,t[ot]=n}catch(t){Zu(e,e.return,t)}}var nl=!1,rl=!1,il=!1,al=typeof WeakSet==`function`?WeakSet:Set,ol=null;function sl(e,t){if(e=e.containerInfo,Gd=mp,e=Tr(e),Er(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Kd={focusedElem:e,selectionRange:n},mp=!1,ol=t;ol!==null;)if(t=ol,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,ol=e;else for(;ol!==null;){switch(t=ol,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=qs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Zu(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)cf(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:cf(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,ol=e;break}ol=t.return}}function cl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Cl(e,n),r&4&&Uc(5,n);break;case 1:if(Cl(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Zu(n,n.return,e)}else{var i=qs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Zu(n,n.return,e)}}}r&64&&Gc(n),r&512&&qc(n,n.return);break;case 3:if(Cl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ya(e,t)}catch(e){Zu(n,n.return,e)}}break;case 27:t===null&&r&4&&tl(n);case 26:case 5:Cl(e,n),t===null&&r&4&&Yc(n),r&512&&qc(n,n.return);break;case 12:Cl(e,n);break;case 31:Cl(e,n),r&4&&ml(e,n);break;case 13:Cl(e,n),r&4&&hl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=td.bind(null,n),mf(e,n))));break;case 22:if(r=n.memoizedState!==null||nl,!r){t=t!==null&&t.memoizedState!==null||rl,i=nl;var a=rl;nl=r,(rl=t)&&!a?Tl(e,n,!!(n.subtreeFlags&8772)):Cl(e,n),nl=i,rl=a}break;case 30:break;default:Cl(e,n)}}function ll(e){var t=e.alternate;t!==null&&(e.alternate=null,ll(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&pt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ul=null,dl=!1;function fl(e,t,n){for(n=n.child;n!==null;)pl(e,t,n),n=n.sibling}function pl(e,t,n){if(Pe&&typeof Pe.onCommitFiberUnmount==`function`)try{Pe.onCommitFiberUnmount(z,n)}catch{}switch(n.tag){case 26:rl||Jc(n,t),fl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:rl||Jc(n,t);var r=ul,i=dl;af(n.type)&&(ul=n.stateNode,dl=!1),fl(e,t,n),bf(n.stateNode),ul=r,dl=i;break;case 5:rl||Jc(n,t);case 6:if(r=ul,i=dl,ul=null,fl(e,t,n),ul=r,dl=i,ul!==null){if(dl)try{(ul.nodeType===9?ul.body:ul.nodeName===`HTML`?ul.ownerDocument.body:ul).removeChild(n.stateNode)}catch(e){Zu(n,t,e)}else try{ul.removeChild(n.stateNode)}catch(e){Zu(n,t,e)}}break;case 18:ul!==null&&(dl?(e=ul,of(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Bp(e)):of(ul,n.stateNode));break;case 4:r=ul,i=dl,ul=n.stateNode.containerInfo,dl=!0,fl(e,t,n),ul=r,dl=i;break;case 0:case 11:case 14:case 15:Wc(2,n,t),rl||Wc(4,n,t),fl(e,t,n);break;case 1:rl||(Jc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Kc(n,t,r)),fl(e,t,n);break;case 21:fl(e,t,n);break;case 22:rl=(r=rl)||n.memoizedState!==null,fl(e,t,n),rl=r;break;default:fl(e,t,n)}}function ml(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Bp(e)}catch(e){Zu(t,t.return,e)}}}function hl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Bp(e)}catch(e){Zu(t,t.return,e)}}function gl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new al),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new al),t;default:throw Error(i(435,e.tag))}}function _l(e,t){var n=gl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=nd.bind(null,e,t);t.then(r,r)}})}function vl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(af(c.type)){ul=c.stateNode,dl=!1;break a}break;case 5:ul=c.stateNode,dl=!1;break a;case 3:case 4:ul=c.stateNode.containerInfo,dl=!0;break a}c=c.return}if(ul===null)throw Error(i(160));pl(o,s,a),ul=null,dl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)bl(t,e),t=t.sibling}var yl=null;function bl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:vl(t,e),xl(e),r&4&&(Wc(3,e,e.return),Uc(3,e),Wc(5,e,e.return));break;case 1:vl(t,e),xl(e),r&512&&(rl||n===null||Jc(n,n.return)),r&64&&nl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=yl;if(vl(t,e),xl(e),r&512&&(rl||n===null||Jc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null){if(r===null){if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[ft]||o[at]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),K(o,r,n),o[at]=e,vt(o),r=o;break a;case`link`:var s=Jf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),K(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Jf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),K(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[at]=e,vt(o),r=o}e.stateNode=r}else Yf(a,e.type,e.stateNode)}else e.stateNode=Uf(a,r,e.memoizedProps)}else o===r?r===null&&e.stateNode!==null&&Xc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Yf(a,e.type,e.stateNode):Uf(a,r,e.memoizedProps))}break;case 27:vl(t,e),xl(e),r&512&&(rl||n===null||Jc(n,n.return)),n!==null&&r&4&&Xc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(vl(t,e),xl(e),r&512&&(rl||n===null||Jc(n,n.return)),e.flags&32){a=e.stateNode;try{Wt(a,``)}catch(t){Zu(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Xc(e,a,n===null?a:n.memoizedProps)),r&1024&&(il=!0);break;case 6:if(vl(t,e),xl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Zu(e,e.return,t)}}break;case 3:if(qf=null,a=yl,yl=Cf(t.containerInfo),vl(t,e),yl=a,xl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Bp(t.containerInfo)}catch(t){Zu(e,e.return,t)}il&&(il=!1,Sl(e));break;case 4:r=yl,yl=Cf(e.stateNode.containerInfo),vl(t,e),xl(e),yl=r;break;case 12:vl(t,e),xl(e);break;case 31:vl(t,e),xl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_l(e,r)));break;case 13:vl(t,e),xl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(au=Te()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_l(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=nl,d=rl;if(nl=u||a,rl=d||l,vl(t,e),rl=d,nl=u,xl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||nl||rl||wl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Zu(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Zu(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?sf(m,!0):sf(l.stateNode,!1)}catch(e){Zu(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,_l(e,n))));break;case 19:vl(t,e),xl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_l(e,r)));break;case 30:break;case 21:break;default:vl(t,e),xl(e)}}function xl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Zc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;el(e,Qc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Wt(o,``),n.flags&=-33),el(e,Qc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;$c(e,Qc(e),s);break;default:throw Error(i(161))}}catch(t){Zu(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Sl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Cl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cl(e,t.alternate,t),t=t.sibling}function wl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Wc(4,t,t.return),wl(t);break;case 1:Jc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Kc(t,t.return,n),wl(t);break;case 27:bf(t.stateNode);case 26:case 5:Jc(t,t.return),wl(t);break;case 22:t.memoizedState===null&&wl(t);break;case 30:wl(t);break;default:wl(t)}e=e.sibling}}function Tl(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Tl(i,a,n),Uc(4,a);break;case 1:if(Tl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Zu(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Ja(c[i],s)}catch(e){Zu(r,r.return,e)}}n&&o&64&&Gc(a),qc(a,a.return);break;case 27:tl(a);case 26:case 5:Tl(i,a,n),n&&r===null&&o&4&&Yc(a),qc(a,a.return);break;case 12:Tl(i,a,n);break;case 31:Tl(i,a,n),n&&o&4&&ml(i,a);break;case 13:Tl(i,a,n),n&&o&4&&hl(i,a);break;case 22:a.memoizedState===null&&Tl(i,a,n),qc(a,a.return);break;case 30:break;default:Tl(i,a,n)}t=t.sibling}}function El(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&sa(n))}function Dl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&sa(e))}function Ol(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)kl(e,t,n,r),t=t.sibling}function kl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Ol(e,t,n,r),i&2048&&Uc(9,t);break;case 1:Ol(e,t,n,r);break;case 3:Ol(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&sa(e)));break;case 12:if(i&2048){Ol(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Zu(t,t.return,e)}}else Ol(e,t,n,r);break;case 31:Ol(e,t,n,r);break;case 13:Ol(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Ol(e,t,n,r):(a._visibility|=2,Al(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?Ol(e,t,n,r):jl(e,t),i&2048&&El(o,t);break;case 24:Ol(e,t,n,r),i&2048&&Dl(t.alternate,t);break;default:Ol(e,t,n,r)}}function Al(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Al(a,o,s,c,i),Uc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Al(a,o,s,c,i)):u._visibility&2?Al(a,o,s,c,i):jl(a,o),i&&l&2048&&El(o.alternate,o);break;case 24:Al(a,o,s,c,i),i&&l&2048&&Dl(o.alternate,o);break;default:Al(a,o,s,c,i)}t=t.sibling}}function jl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:jl(n,r),i&2048&&El(r.alternate,r);break;case 24:jl(n,r),i&2048&&Dl(r.alternate,r);break;default:jl(n,r)}t=t.sibling}}var Ml=8192;function Nl(e,t,n){if(e.subtreeFlags&Ml)for(e=e.child;e!==null;)Pl(e,t,n),e=e.sibling}function Pl(e,t,n){switch(e.tag){case 26:Nl(e,t,n),e.flags&Ml&&e.memoizedState!==null&&Qf(n,yl,e.memoizedState,e.memoizedProps);break;case 5:Nl(e,t,n);break;case 3:case 4:var r=yl;yl=Cf(e.stateNode.containerInfo),Nl(e,t,n),yl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ml,Ml=16777216,Nl(e,t,n),Ml=r):Nl(e,t,n));break;default:Nl(e,t,n)}}function Fl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ol=r,zl(r,e)}Fl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ll(e),e=e.sibling}function Ll(e){switch(e.tag){case 0:case 11:case 15:Il(e),e.flags&2048&&Wc(9,e,e.return);break;case 3:Il(e);break;case 12:Il(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Rl(e)):Il(e);break;default:Il(e)}}function Rl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ol=r,zl(r,e)}Fl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Wc(8,t,t.return),Rl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Rl(t));break;default:Rl(t)}e=e.sibling}}function zl(e,t){for(;ol!==null;){var n=ol;switch(n.tag){case 0:case 11:case 15:Wc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:sa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,ol=r;else a:for(n=e;ol!==null;){r=ol;var i=r.sibling,a=r.return;if(ll(r),r===n){ol=null;break a}if(i!==null){i.return=a,ol=i;break a}ol=a}}}var Bl={getCacheForType:function(e){var t=$i(aa),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return $i(aa).controller.signal}},Vl=typeof WeakMap==`function`?WeakMap:Map,Hl=0,Ul=null,U=null,W=0,Wl=0,Gl=null,Kl=!1,ql=!1,Jl=!1,Yl=0,Xl=0,Zl=0,Ql=0,$l=0,eu=0,tu=0,nu=null,ru=null,iu=!1,au=0,ou=0,su=1/0,cu=null,lu=null,uu=0,du=null,fu=null,pu=0,mu=0,hu=null,gu=null,_u=0,vu=null;function yu(){return Hl&2&&W!==0?W&-W:P.T===null?nt():vd()}function bu(){if(eu===0){if(!(W&536870912)||V){var e=Ve;Ve<<=1,!(Ve&3932160)&&(Ve=262144),eu=e}else eu=536870912}return e=to.current,e!==null&&(e.flags|=32),eu}function xu(e,t,n){(e===Ul&&(Wl===2||Wl===9)||e.cancelPendingCommit!==null)&&(Ou(e,0),Tu(e,W,eu,!1)),Ye(e,n),(!(Hl&2)||e!==Ul)&&(e===Ul&&(!(Hl&2)&&(Ql|=n),Xl===4&&Tu(e,W,eu,!1)),ud(e))}function Su(e,t,n){if(Hl&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||Ge(e,t),a=r?Iu(e,t):Pu(e,t,!0),o=r;do{if(a===0){ql&&!r&&Tu(e,t,0,!1);break}if(n=e.current.alternate,o&&!wu(n)){a=Pu(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=nu;var l=c.current.memoizedState.isDehydrated;if(l&&(Ou(c,s).flags|=256),s=Pu(c,s,!1),s!==2){if(Jl&&!l){c.errorRecoveryDisabledLanes|=o,Ql|=o,a=4;break a}o=ru,ru=a,o!==null&&(ru===null?ru=o:ru.push.apply(ru,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Ou(e,0),Tu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:Tu(r,t,eu,!Kl);break a;case 2:ru=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=au+300-Te(),10<a)){if(Tu(r,t,eu,!Kl),We(r,0,!0)!==0)break a;pu=t,r.timeoutHandle=$d(Cu.bind(null,r,n,ru,cu,iu,t,eu,Ql,tu,Kl,o,`Throttled`,-0,0),a);break a}Cu(r,n,ru,cu,iu,t,eu,Ql,tu,Kl,o,null,-0,0)}break}while(1);ud(e)}function Cu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Qt},Pl(t,a,d);var m=(a&62914560)===a?au-Te():(a&4194048)===a?ou-Te():0;if(m=ep(d,m),m!==null){pu=a,e.cancelPendingCommit=m(Uu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),Tu(e,a,o,!l);return}}Uu(e,t,a,n,r,i,o,s,c)}function wu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!br(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Tu(e,t,n,r){t&=~$l,t&=~Ql,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ie(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&Ze(e,n,t)}function Eu(){return Hl&6?!0:(dd(0,!1),!1)}function Du(){if(U!==null){if(Wl===0)var e=U.return;else e=U,Gi=Wi=null,ko(e),Aa=null,ja=0,e=U;for(;e!==null;)Hc(e.alternate,e),e=e.return;U=null}}function Ou(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,ef(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),pu=0,Du(),Ul=e,U=n=ci(e.current,null),W=t,Wl=0,Gl=null,Kl=!1,ql=Ge(e,t),Jl=!1,tu=eu=$l=Ql=Zl=Xl=0,ru=nu=null,iu=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ie(r),a=1<<i;t|=e[i],r&=~a}return Yl=t,Qr(),n}function ku(e,t){H=null,P.H=zs,t===ba||t===Sa?(t=Oa(),Wl=3):t===xa?(t=Oa(),Wl=4):Wl=t===rc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Gl=t,U===null&&(Xl=1,Zs(e,gi(t,e.current)))}function Au(){var e=to.current;return e===null?!0:(W&4194048)===W?no===null:(W&62914560)===W||W&536870912?e===no:!1}function ju(){var e=P.H;return P.H=zs,e===null?zs:e}function Mu(){var e=P.A;return P.A=Bl,e}function Nu(){Xl=4,Kl||(W&4194048)!==W&&to.current!==null||(ql=!0),!(Zl&134217727)&&!(Ql&134217727)||Ul===null||Tu(Ul,W,eu,!1)}function Pu(e,t,n){var r=Hl;Hl|=2;var i=ju(),a=Mu();(Ul!==e||W!==t)&&(cu=null,Ou(e,t)),t=!1;var o=Xl;a:do try{if(Wl!==0&&U!==null){var s=U,c=Gl;switch(Wl){case 8:Du(),o=6;break a;case 3:case 2:case 9:case 6:to.current===null&&(t=!0);var l=Wl;if(Wl=0,Gl=null,Bu(e,s,c,l),n&&ql){o=0;break a}break;default:l=Wl,Wl=0,Gl=null,Bu(e,s,c,l)}}Fu(),o=Xl;break}catch(t){ku(e,t)}while(1);return t&&e.shellSuspendCounter++,Gi=Wi=null,Hl=r,P.H=i,P.A=a,U===null&&(Ul=null,W=0,Qr()),o}function Fu(){for(;U!==null;)Ru(U)}function Iu(e,t){var n=Hl;Hl|=2;var r=ju(),a=Mu();Ul!==e||W!==t?(cu=null,su=Te()+500,Ou(e,t)):ql=Ge(e,t);a:do try{if(Wl!==0&&U!==null){t=U;var o=Gl;b:switch(Wl){case 1:Wl=0,Gl=null,Bu(e,t,o,1);break;case 2:case 9:if(wa(o)){Wl=0,Gl=null,zu(t);break}t=function(){Wl!==2&&Wl!==9||Ul!==e||(Wl=7),ud(e)},o.then(t,t);break a;case 3:Wl=7;break a;case 4:Wl=5;break a;case 7:wa(o)?(Wl=0,Gl=null,zu(t)):(Wl=0,Gl=null,Bu(e,t,o,7));break;case 5:var s=null;switch(U.tag){case 26:s=U.memoizedState;case 5:case 27:var c=U;if(s?Zf(s):c.stateNode.complete){Wl=0,Gl=null;var l=c.sibling;if(l!==null)U=l;else{var u=c.return;u===null?U=null:(U=u,Vu(u))}break b}}Wl=0,Gl=null,Bu(e,t,o,5);break;case 6:Wl=0,Gl=null,Bu(e,t,o,6);break;case 8:Du(),Xl=6;break a;default:throw Error(i(462))}}Lu();break}catch(t){ku(e,t)}while(1);return Gi=Wi=null,P.H=r,P.A=a,Hl=n,U===null?(Ul=null,W=0,Qr(),Xl):0}function Lu(){for(;U!==null&&!Ce();)Ru(U)}function Ru(e){var t=Nc(e.alternate,e,Yl);e.memoizedProps=e.pendingProps,t===null?Vu(e):U=t}function zu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=_c(n,t,t.pendingProps,t.type,void 0,W);break;case 11:t=_c(n,t,t.pendingProps,t.type.render,t.ref,W);break;case 5:ko(t);default:Hc(n,t),t=U=li(t,Yl),t=Nc(n,t,Yl)}e.memoizedProps=e.pendingProps,t===null?Vu(e):U=t}function Bu(e,t,n,r){Gi=Wi=null,ko(t),Aa=null,ja=0;var i=t.return;try{if(nc(e,i,t,n,W)){Xl=1,Zs(e,gi(n,e.current)),U=null;return}}catch(t){if(i!==null)throw U=i,t;Xl=1,Zs(e,gi(n,e.current)),U=null;return}t.flags&32768?(V||r===1?e=!0:ql||W&536870912?e=!1:(Kl=e=!0,(r===2||r===9||r===3||r===6)&&(r=to.current,r!==null&&r.tag===13&&(r.flags|=16384))),Hu(t,e)):Vu(t)}function Vu(e){var t=e;do{if(t.flags&32768){Hu(t,Kl);return}e=t.return;var n=Bc(t.alternate,t,Yl);if(n!==null){U=n;return}if(t=t.sibling,t!==null){U=t;return}U=t=e}while(t!==null);Xl===0&&(Xl=5)}function Hu(e,t){do{var n=Vc(e.alternate,e);if(n!==null){n.flags&=32767,U=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){U=e;return}U=e=n}while(e!==null);Xl=6,U=null}function Uu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Ju();while(uu!==0);if(Hl&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=Zr,Xe(e,n,o,s,c,l),e===Ul&&(U=Ul=null,W=0),fu=t,du=e,pu=n,mu=o,hu=a,gu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,rd(ke,function(){return Yu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=P.T,P.T=null,a=F.p,F.p=2,s=Hl,Hl|=4;try{sl(e,t,n)}finally{Hl=s,F.p=a,P.T=r}}uu=1,Wu(),Gu(),Ku()}}function Wu(){if(uu===1){uu=0;var e=du,t=fu,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=P.T,P.T=null;var r=F.p;F.p=2;var i=Hl;Hl|=4;try{bl(t,e);var a=Kd,o=Tr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&wr(s.ownerDocument.documentElement,s)){if(c!==null&&Er(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Cr(s,h),v=Cr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}mp=!!Gd,Kd=Gd=null}finally{Hl=i,F.p=r,P.T=n}}e.current=t,uu=2}}function Gu(){if(uu===2){uu=0;var e=du,t=fu,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=P.T,P.T=null;var r=F.p;F.p=2;var i=Hl;Hl|=4;try{cl(e,t.alternate,t)}finally{Hl=i,F.p=r,P.T=n}}uu=3}}function Ku(){if(uu===4||uu===3){uu=0,we();var e=du,t=fu,n=pu,r=gu;t.subtreeFlags&10256||t.flags&10256?uu=5:(uu=0,fu=du=null,qu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(lu=null),tt(n),t=t.stateNode,Pe&&typeof Pe.onCommitFiberRoot==`function`)try{Pe.onCommitFiberRoot(z,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=P.T,i=F.p,F.p=2,P.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{P.T=t,F.p=i}}pu&3&&Ju(),ud(e),i=e.pendingLanes,n&261930&&i&42?e===vu?_u++:(_u=0,vu=e):_u=0,dd(0,!1)}}function qu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,sa(t)))}function Ju(){return Wu(),Gu(),Ku(),Yu()}function Yu(){if(uu!==5)return!1;var e=du,t=mu;mu=0;var n=tt(pu),r=P.T,a=F.p;try{F.p=32>n?32:n,P.T=null,n=hu,hu=null;var o=du,s=pu;if(uu=0,fu=du=null,pu=0,Hl&6)throw Error(i(331));var c=Hl;if(Hl|=4,Ll(o.current),kl(o,o.current,s,n),Hl=c,dd(0,!1),Pe&&typeof Pe.onPostCommitFiberRoot==`function`)try{Pe.onPostCommitFiberRoot(z,o)}catch{}return!0}finally{F.p=a,P.T=r,qu(e,t)}}function Xu(e,t,n){t=gi(n,t),t=$s(e.stateNode,t,2),e=Ha(e,t,2),e!==null&&(Ye(e,2),ud(e))}function Zu(e,t,n){if(e.tag===3)Xu(e,e,n);else for(;t!==null;){if(t.tag===3){Xu(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(lu===null||!lu.has(r))){e=gi(n,e),n=ec(2),r=Ha(t,n,2),r!==null&&(tc(n,r,t,e),Ye(r,2),ud(r));break}}t=t.return}}function Qu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Vl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Jl=!0,i.add(n),e=$u.bind(null,e,t,n),t.then(e,e))}function $u(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ul===e&&(W&n)===n&&(Xl===4||Xl===3&&(W&62914560)===W&&300>Te()-au?!(Hl&2)&&Ou(e,0):$l|=n,tu===W&&(tu=0)),ud(e)}function ed(e,t){t===0&&(t=qe()),e=ti(e,t),e!==null&&(Ye(e,t),ud(e))}function td(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ed(e,n)}function nd(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),ed(e,n)}function rd(e,t){return R(e,t)}var id=null,ad=null,od=!1,sd=!1,cd=!1,ld=0;function ud(e){e!==ad&&e.next===null&&(ad===null?id=ad=e:ad=ad.next=e),sd=!0,od||(od=!0,_d())}function dd(e,t){if(!cd&&sd){cd=!0;do for(var n=!1,r=id;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ie(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,gd(r,a))}else a=W,a=We(r,r===Ul?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Ge(r,a)||(n=!0,gd(r,a))}r=r.next}while(n);cd=!1}}function fd(){pd()}function pd(){sd=od=!1;var e=0;ld!==0&&Qd()&&(e=ld);for(var t=Te(),n=null,r=id;r!==null;){var i=r.next,a=md(r,t);a===0?(r.next=null,n===null?id=i:n.next=i,i===null&&(ad=n)):(n=r,(e!==0||a&3)&&(sd=!0)),r=i}uu!==0&&uu!==5||dd(e,!1),ld!==0&&(ld=0)}function md(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ie(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Ke(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Ul,n=W,n=We(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Wl===2||Wl===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Se(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Ge(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Se(r),tt(n)){case 2:case 8:n=Oe;break;case 32:n=ke;break;case 268435456:n=je;break;default:n=ke}return r=hd.bind(null,e),n=R(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Se(r),e.callbackPriority=2,e.callbackNode=null,2}function hd(e,t){if(uu!==0&&uu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Ju()&&e.callbackNode!==n)return null;var r=W;return r=We(e,e===Ul?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Su(e,r,t),md(e,Te()),e.callbackNode!=null&&e.callbackNode===n?hd.bind(null,e):null)}function gd(e,t){if(Ju())return null;Su(e,t,!0)}function _d(){nf(function(){Hl&6?R(De,fd):pd()})}function vd(){if(ld===0){var e=ua;e===0&&(e=Be,Be<<=1,!(Be&261888)&&(Be=256)),ld=e}return ld}function yd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:Zt(``+e)}function bd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function xd(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=yd((i[ot]||null).action),o=r.submitter;o&&(t=(t=o[ot]||null)?yd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new yn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ld!==0){var e=o?bd(i,o):new FormData(i);Ts(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?bd(i,o):new FormData(i),Ts(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var Sd=0;Sd<Kr.length;Sd++){var Cd=Kr[Sd];qr(Cd.toLowerCase(),`on`+(Cd[0].toUpperCase()+Cd.slice(1)))}qr(Rr,`onAnimationEnd`),qr(zr,`onAnimationIteration`),qr(Br,`onAnimationStart`),qr(`dblclick`,`onDoubleClick`),qr(`focusin`,`onFocus`),qr(`focusout`,`onBlur`),qr(Vr,`onTransitionRun`),qr(Hr,`onTransitionStart`),qr(Ur,`onTransitionCancel`),qr(Wr,`onTransitionEnd`),St(`onMouseEnter`,[`mouseout`,`mouseover`]),St(`onMouseLeave`,[`mouseout`,`mouseover`]),St(`onPointerEnter`,[`pointerout`,`pointerover`]),St(`onPointerLeave`,[`pointerout`,`pointerover`]),xt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),xt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),xt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),xt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),xt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),xt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var wd=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),Td=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(wd));function Ed(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Jr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Jr(e)}i.currentTarget=null,a=c}}}}function G(e,t){var n=t[ct];n===void 0&&(n=t[ct]=new Set);var r=e+`__bubble`;n.has(r)||(Ad(t,e,2,!1),n.add(r))}function Dd(e,t,n){var r=0;t&&(r|=4),Ad(n,e,r,t)}var Od=`_reactListening`+Math.random().toString(36).slice(2);function kd(e){if(!e[Od]){e[Od]=!0,yt.forEach(function(t){t!==`selectionchange`&&(Td.has(t)||Dd(t,!1,e),Dd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Od]||(t[Od]=!0,Dd(`selectionchange`,!1,t))}}function Ad(e,t,n,r){switch(xp(t)){case 2:var i=hp;break;case 8:i=gp;break;default:i=_p}n=i.bind(null,t,n,e),i=void 0,!cn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function jd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=mt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}an(function(){var r=a,i=en(n),s=[];a:{var c=Gr.get(e);if(c!==void 0){var l=yn,u=e;switch(e){case`keypress`:if(mn(n)===0)break a;case`keydown`:case`keyup`:l=Ln;break;case`focusin`:u=`focus`,l=On;break;case`focusout`:u=`blur`,l=On;break;case`beforeblur`:case`afterblur`:l=On;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=En;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Dn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=zn;break;case Rr:case zr:case Br:l=kn;break;case Wr:l=Bn;break;case`scroll`:case`scrollend`:l=xn;break;case`wheel`:l=Vn;break;case`copy`:case`cut`:case`paste`:l=An;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Rn;break;case`toggle`:case`beforetoggle`:l=Hn}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=on(m,p),g!=null&&d.push(Md(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==$t&&(u=n.relatedTarget||n.fromElement)&&(mt(u)||u[st]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?mt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=En,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Rn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:gt(l),h=u==null?c:gt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,mt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Pd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Fd(s,c,l,d,!1),u!==null&&f!==null&&Fd(s,f,u,d,!0)}}a:{if(c=r?gt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=cr;else if(nr(c)){if(lr)v=vr;else{v=gr;var y=hr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&Jt(r.elementType)&&(v=cr):v=_r;if(v&&=v(e,r)){rr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Bt(c,`number`,c.value)}switch(y=r?gt(r):window,e){case`focusin`:(nr(y)||y.contentEditable===`true`)&&(Or=y,kr=r,Ar=null);break;case`focusout`:Ar=kr=Or=null;break;case`mousedown`:jr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:jr=!1,Mr(s,n,i);break;case`selectionchange`:if(Dr)break;case`keydown`:case`keyup`:Mr(s,n,i)}var b;if(Wn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else Qn?Xn(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(qn&&n.locale!==`ko`&&(Qn||x!==`onCompositionStart`?x===`onCompositionEnd`&&Qn&&(b=pn()):(un=i,dn=`value`in un?un.value:un.textContent,Qn=!0)),y=Nd(r,x),0<y.length&&(x=new jn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=Zn(n),b!==null&&(x.data=b)))),(b=Kn?$n(e,n):er(e,n))&&(x=Nd(r,`onBeforeInput`),0<x.length&&(y=new jn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),xd(s,e,r,n,i)}Ed(s,t)})}function Md(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Nd(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=on(e,n),i!=null&&r.unshift(Md(e,i,a)),i=on(e,t),i!=null&&r.push(Md(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Pd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Fd(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=on(n,a),l!=null&&o.unshift(Md(n,l,c))):i||(l=on(n,a),l!=null&&o.push(Md(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Id=/\r\n?/g,Ld=/\u0000|\uFFFD/g;function Rd(e){return(typeof e==`string`?e:``+e).replace(Id,`
`).replace(Ld,``)}function zd(e,t){return t=Rd(t),Rd(e)===t}function Bd(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Wt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Wt(e,``+r);break;case`className`:Ot(e,`class`,r);break;case`tabIndex`:Ot(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Ot(e,n,r);break;case`style`:qt(e,r,o);break;case`data`:if(t!==`object`){Ot(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Zt(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&Bd(e,t,`name`,a.name,a,null),Bd(e,t,`formEncType`,a.formEncType,a,null),Bd(e,t,`formMethod`,a.formMethod,a,null),Bd(e,t,`formTarget`,a.formTarget,a,null)):(Bd(e,t,`encType`,a.encType,a,null),Bd(e,t,`method`,a.method,a,null),Bd(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Zt(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=Qt);break;case`onScroll`:r!=null&&G(`scroll`,e);break;case`onScrollEnd`:r!=null&&G(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=Zt(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:G(`beforetoggle`,e),G(`toggle`,e),Dt(e,`popover`,r);break;case`xlinkActuate`:kt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:kt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:kt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:kt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:kt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:kt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:kt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:kt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:kt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Dt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=Yt.get(n)||n,Dt(e,n,r))}}function Vd(e,t,n,r,a,o){switch(n){case`style`:qt(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Wt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Wt(e,``+r);break;case`onScroll`:r!=null&&G(`scroll`,e);break;case`onScrollEnd`:r!=null&&G(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=Qt);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!bt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[ot]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Dt(e,n,r)}}}function K(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:G(`error`,e),G(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Bd(e,t,o,s,n,null)}}a&&Bd(e,t,`srcSet`,n.srcSet,n,null),r&&Bd(e,t,`src`,n.src,n,null);return;case`input`:G(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:Bd(e,t,r,d,n,null)}}zt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in G(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:Bd(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Vt(e,!!r,n,!0):Vt(e,!!r,t,!1);return;case`textarea`:for(s in G(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:Bd(e,t,s,c,n,null)}Ut(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Bd(e,t,l,r,n,null)}return;case`dialog`:G(`beforetoggle`,e),G(`toggle`,e),G(`cancel`,e),G(`close`,e);break;case`iframe`:case`object`:G(`load`,e);break;case`video`:case`audio`:for(r=0;r<wd.length;r++)G(wd[r],e);break;case`image`:G(`error`,e),G(`load`,e);break;case`details`:G(`toggle`,e);break;case`embed`:case`source`:case`link`:G(`error`,e),G(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Bd(e,t,u,r,n,null)}return;default:if(Jt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Vd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Bd(e,t,c,r,n,null))}function Hd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Bd(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&Bd(e,t,p,m,r,f)}}Rt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||Bd(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&Bd(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Vt(e,!!n,n?[]:``,!1):Vt(e,!!n,t,!0)):Vt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Bd(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&Bd(e,t,s,a,r,o)}Ht(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Bd(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Bd(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Bd(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:Bd(e,t,u,p,r,m)}return;default:if(Jt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Vd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Vd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Bd(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Bd(e,t,f,p,r,m)}function Ud(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Wd(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Ud(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Ud(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Gd=null,Kd=null;function qd(e){return e.nodeType===9?e:e.ownerDocument}function Jd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Yd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Xd(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Zd=null;function Qd(){var e=window.event;return e&&e.type===`popstate`?e!==Zd&&(Zd=e,!0):(Zd=null,!1)}var $d=typeof setTimeout==`function`?setTimeout:void 0,ef=typeof clearTimeout==`function`?clearTimeout:void 0,tf=typeof Promise==`function`?Promise:void 0,nf=typeof queueMicrotask==`function`?queueMicrotask:tf===void 0?$d:function(e){return tf.resolve(null).then(e).catch(rf)};function rf(e){setTimeout(function(){throw e})}function af(e){return e===`head`}function of(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Bp(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)bf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,bf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[ft]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&bf(e.ownerDocument.body)}n=i}while(n);Bp(t)}function sf(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function cf(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:cf(n),pt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function lf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[ft])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=hf(e.nextSibling),e===null)break}return null}function uf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=hf(e.nextSibling),e===null))return null;return e}function df(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=hf(e.nextSibling),e===null))return null;return e}function ff(e){return e.data===`$?`||e.data===`$~`}function pf(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function mf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function hf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var gf=null;function _f(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return hf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function vf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function yf(e,t,n){switch(t=qd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function bf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);pt(e)}var xf=new Map,Sf=new Set;function Cf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var wf=F.d;F.d={f:Tf,r:Ef,D:kf,C:Af,L:jf,m:Mf,X:Pf,S:Nf,M:Ff};function Tf(){var e=wf.f(),t=Eu();return e||t}function Ef(e){var t=ht(e);t!==null&&t.tag===5&&t.type===`form`?Ds(t):wf.r(e)}var Df=typeof document>`u`?null:document;function Of(e,t,n){var r=Df;if(r&&typeof t==`string`&&t){var i=Lt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),Sf.has(i)||(Sf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),K(t,`link`,e),vt(t),r.head.appendChild(t)))}}function kf(e){wf.D(e),Of(`dns-prefetch`,e,null)}function Af(e,t){wf.C(e,t),Of(`preconnect`,e,t)}function jf(e,t,n){wf.L(e,t,n);var r=Df;if(r&&e&&t){var i=`link[rel="preload"][as="`+Lt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Lt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Lt(n.imageSizes)+`"]`)):i+=`[href="`+Lt(e)+`"]`;var a=i;switch(t){case`style`:a=Lf(e);break;case`script`:a=Vf(e)}xf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),xf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Rf(a))||t===`script`&&r.querySelector(Hf(a))||(t=r.createElement(`link`),K(t,`link`,e),vt(t),r.head.appendChild(t)))}}function Mf(e,t){wf.m(e,t);var n=Df;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Lt(r)+`"][href="`+Lt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Vf(e)}if(!xf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),xf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Hf(a)))return}r=n.createElement(`link`),K(r,`link`,e),vt(r),n.head.appendChild(r)}}}function Nf(e,t,n){wf.S(e,t,n);var r=Df;if(r&&e){var i=_t(r).hoistableStyles,a=Lf(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Rf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=xf.get(a))&&Gf(e,n);var c=o=r.createElement(`link`);vt(c),K(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Wf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Pf(e,t){wf.X(e,t);var n=Df;if(n&&e){var r=_t(n).hoistableScripts,i=Vf(e),a=r.get(i);a||(a=n.querySelector(Hf(i)),a||(e=h({src:e,async:!0},t),(t=xf.get(i))&&Kf(e,t),a=n.createElement(`script`),vt(a),K(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Ff(e,t){wf.M(e,t);var n=Df;if(n&&e){var r=_t(n).hoistableScripts,i=Vf(e),a=r.get(i);a||(a=n.querySelector(Hf(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=xf.get(i))&&Kf(e,t),a=n.createElement(`script`),vt(a),K(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function If(e,t,n,r){var a=(a=le.current)?Cf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Lf(n.href),n=_t(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Lf(n.href);var o=_t(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Rf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),xf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},xf.set(e,n),o||Bf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Vf(n),n=_t(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Lf(e){return`href="`+Lt(e)+`"`}function Rf(e){return`link[rel="stylesheet"][`+e+`]`}function zf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Bf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),K(t,`link`,n),vt(t),e.head.appendChild(t))}function Vf(e){return`[src="`+Lt(e)+`"]`}function Hf(e){return`script[async]`+e}function Uf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Lt(n.href)+`"]`);if(r)return t.instance=r,vt(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),vt(r),K(r,`style`,a),Wf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Lf(n.href);var o=e.querySelector(Rf(a));if(o)return t.state.loading|=4,t.instance=o,vt(o),o;r=zf(n),(a=xf.get(a))&&Gf(r,a),o=(e.ownerDocument||e).createElement(`link`),vt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),K(o,`link`,r),t.state.loading|=4,Wf(o,n.precedence,e),t.instance=o;case`script`:return o=Vf(n.src),(a=e.querySelector(Hf(o)))?(t.instance=a,vt(a),a):(r=n,(a=xf.get(o))&&(r=h({},n),Kf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),vt(a),K(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Wf(r,n.precedence,e));return t.instance}function Wf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Gf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Kf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var qf=null;function Jf(e,t,n){if(qf===null){var r=new Map,i=qf=new Map;i.set(n,r)}else i=qf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[ft]||a[at]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Yf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Xf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Zf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Qf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Lf(r.href),a=t.querySelector(Rf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=tp.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,vt(a);return}a=t.ownerDocument||t,r=zf(r),(i=xf.get(i))&&Gf(r,i),a=a.createElement(`link`),vt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),K(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=tp.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var $f=0;function ep(e,t){return e.stylesheets&&e.count===0&&rp(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&rp(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&$f===0&&($f=62500*Wd());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&rp(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>$f?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function tp(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)rp(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var np=null;function rp(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,np=new Map,t.forEach(ip,e),np=null,tp.call(e))}function ip(e,t){if(!(t.state.loading&4)){var n=np.get(e);if(n)var r=n.get(null);else{n=new Map,np.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=tp.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var ap={$$typeof:C,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function op(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Je(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Je(0),this.hiddenUpdates=Je(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function sp(e,t,n,r,i,a,o,s,c,l,u,d){return e=new op(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=oi(3,null,null,t),e.current=a,a.stateNode=e,t=oa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},za(a),e}function cp(e){return e?(e=ii,e):ii}function lp(e,t,n,r,i,a){i=cp(i),r.context===null?r.context=i:r.pendingContext=i,r=Va(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ha(e,r,t),n!==null&&(xu(n,e,t),Ua(n,e,t))}function up(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function dp(e,t){up(e,t),(e=e.alternate)&&up(e,t)}function fp(e){if(e.tag===13||e.tag===31){var t=ti(e,67108864);t!==null&&xu(t,e,67108864),dp(e,67108864)}}function pp(e){if(e.tag===13||e.tag===31){var t=yu();t=et(t);var n=ti(e,t);n!==null&&xu(n,e,t),dp(e,t)}}var mp=!0;function hp(e,t,n,r){var i=P.T;P.T=null;var a=F.p;try{F.p=2,_p(e,t,n,r)}finally{F.p=a,P.T=i}}function gp(e,t,n,r){var i=P.T;P.T=null;var a=F.p;try{F.p=8,_p(e,t,n,r)}finally{F.p=a,P.T=i}}function _p(e,t,n,r){if(mp){var i=vp(r);if(i===null)jd(e,t,r,yp,n),Ap(e,r);else if(Mp(i,e,t,n,r))r.stopPropagation();else if(Ap(e,r),t&4&&-1<kp.indexOf(e)){for(;i!==null;){var a=ht(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Ue(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ie(o);s.entanglements[1]|=c,o&=~c}ud(a),!(Hl&6)&&(su=Te()+500,dd(0,!1))}}break;case 31:case 13:s=ti(a,2),s!==null&&xu(s,a,2),Eu(),dp(a,2)}if(a=vp(r),a===null&&jd(e,t,r,yp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else jd(e,t,r,null,n)}}function vp(e){return e=en(e),bp(e)}var yp=null;function bp(e){if(yp=null,e=mt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return yp=e,null}function xp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ee()){case De:return 2;case Oe:return 8;case ke:case Ae:return 32;case je:return 268435456;default:return 32}default:return 32}}var Sp=!1,Cp=null,wp=null,Tp=null,Ep=new Map,Dp=new Map,Op=[],kp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Ap(e,t){switch(e){case`focusin`:case`focusout`:Cp=null;break;case`dragenter`:case`dragleave`:wp=null;break;case`mouseover`:case`mouseout`:Tp=null;break;case`pointerover`:case`pointerout`:Ep.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:Dp.delete(t.pointerId)}}function jp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=ht(t),t!==null&&fp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Mp(e,t,n,r,i){switch(t){case`focusin`:return Cp=jp(Cp,e,t,n,r,i),!0;case`dragenter`:return wp=jp(wp,e,t,n,r,i),!0;case`mouseover`:return Tp=jp(Tp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Ep.set(a,jp(Ep.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,Dp.set(a,jp(Dp.get(a)||null,e,t,n,r,i)),!0}return!1}function Np(e){var t=mt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,rt(e.priority,function(){pp(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,rt(e.priority,function(){pp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=vp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);$t=r,n.target.dispatchEvent(r),$t=null}else return t=ht(n),t!==null&&fp(t),e.blockedOn=n,!1;t.shift()}return!0}function Fp(e,t,n){Pp(e)&&n.delete(t)}function Ip(){Sp=!1,Cp!==null&&Pp(Cp)&&(Cp=null),wp!==null&&Pp(wp)&&(wp=null),Tp!==null&&Pp(Tp)&&(Tp=null),Ep.forEach(Fp),Dp.forEach(Fp)}function Lp(e,n){e.blockedOn===n&&(e.blockedOn=null,Sp||(Sp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Ip)))}var Rp=null;function zp(e){Rp!==e&&(Rp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Rp===e&&(Rp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(bp(r||n)===null)continue;break}var a=ht(n);a!==null&&(e.splice(t,3),t-=3,Ts(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Bp(e){function t(t){return Lp(t,e)}Cp!==null&&Lp(Cp,e),wp!==null&&Lp(wp,e),Tp!==null&&Lp(Tp,e),Ep.forEach(t),Dp.forEach(t);for(var n=0;n<Op.length;n++){var r=Op[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Op.length&&(n=Op[0],n.blockedOn===null);)Np(n),n.blockedOn===null&&Op.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[ot]||null;if(typeof a==`function`)o||zp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[ot]||null)s=o.formAction;else if(bp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),zp(n)}}}function Vp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Hp(e){this._internalRoot=e}Up.prototype.render=Hp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;lp(n,yu(),e,t,null,null)},Up.prototype.unmount=Hp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;lp(e.current,2,null,e,null,null),Eu(),t[st]=null}};function Up(e){this._internalRoot=e}Up.prototype.unstable_scheduleHydration=function(e){if(e){var t=nt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Op.length&&t!==0&&t<Op[n].priority;n++);Op.splice(n,0,e),n===0&&Np(e)}};var q=n.version;if(q!==`19.2.8`)throw Error(i(527,q,`19.2.8`));F.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Wp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:P,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Gp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gp.isDisabled&&Gp.supportsFiber)try{z=Gp.inject(Wp),Pe=Gp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Js,s=Ys,c=Xs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=sp(e,1,!1,null,null,n,r,null,o,s,c,Vp),e[st]=t.current,kd(e),new Hp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u(),1),v=g(),y=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),b=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),x=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),S=e=>{let t=x(e);return t.charAt(0).toUpperCase()+t.slice(1)},C={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},w=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},T=(0,_.createContext)({}),E=()=>(0,_.useContext)(T),D=(0,_.forwardRef)(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>{let{size:l=24,strokeWidth:u=2,absoluteStrokeWidth:d=!1,color:f=`currentColor`,className:p=``}=E()??{},m=r??d?Number(n??u)*24/Number(t??l):n??u;return(0,_.createElement)(`svg`,{ref:c,...C,width:t??l??C.width,height:t??l??C.height,stroke:e??f,strokeWidth:m,className:y(`lucide`,p,i),...!a&&!w(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,_.createElement)(e,t)),...Array.isArray(a)?a:[a]])}),O=(e,t)=>{let n=(0,_.forwardRef)(({className:n,...r},i)=>(0,_.createElement)(D,{ref:i,iconNode:t,className:y(`lucide-${b(S(e))}`,`lucide-${e}`,n),...r}));return n.displayName=S(e),n},k=O(`arrow-up-right`,[[`path`,{d:`M7 7h10v10`,key:`1tivn9`}],[`path`,{d:`M7 17 17 7`,key:`1vkiza`}]]),A=O(`arrow-up`,[[`path`,{d:`m5 12 7-7 7 7`,key:`hav0vg`}],[`path`,{d:`M12 19V5`,key:`x0mq9r`}]]),j=O(`book-open`,[[`path`,{d:`M12 5v16`,key:`1f6ucr`}],[`path`,{d:`M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z`,key:`1fyvmf`}]]),M=O(`bot`,[[`path`,{d:`M12 8V4H8`,key:`hb8ula`}],[`rect`,{width:`16`,height:`12`,x:`4`,y:`8`,rx:`2`,key:`enze0r`}],[`path`,{d:`M2 14h2`,key:`vft8re`}],[`path`,{d:`M20 14h2`,key:`4cs60a`}],[`path`,{d:`M15 13v2`,key:`1xurst`}],[`path`,{d:`M9 13v2`,key:`rq6x2g`}]]),ee=O(`check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),N=O(`chevron-down`,[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]),te=O(`chevron-right`,[[`path`,{d:`m9 18 6-6-6-6`,key:`mthhwq`}]]),P=O(`circle-check`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),F=O(`clock`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 6v6l4 2`,key:`mmk7yg`}]]),ne=O(`cpu`,[[`path`,{d:`M12 20v2`,key:`1lh1kg`}],[`path`,{d:`M12 2v2`,key:`tus03m`}],[`path`,{d:`M17 20v2`,key:`1rnc9c`}],[`path`,{d:`M17 2v2`,key:`11trls`}],[`path`,{d:`M2 12h2`,key:`1t8f8n`}],[`path`,{d:`M2 17h2`,key:`7oei6x`}],[`path`,{d:`M2 7h2`,key:`asdhe0`}],[`path`,{d:`M20 12h2`,key:`1q8mjw`}],[`path`,{d:`M20 17h2`,key:`1fpfkl`}],[`path`,{d:`M20 7h2`,key:`1o8tra`}],[`path`,{d:`M7 20v2`,key:`4gnj0m`}],[`path`,{d:`M7 2v2`,key:`1i4yhu`}],[`rect`,{x:`4`,y:`4`,width:`16`,height:`16`,rx:`2`,key:`1vbyd7`}],[`rect`,{x:`8`,y:`8`,width:`8`,height:`8`,rx:`1`,key:`z9xiuo`}]]),re=O(`external-link`,[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`M10 14 21 3`,key:`gplh6r`}],[`path`,{d:`M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`,key:`a6xqqp`}]]),ie=O(`feather`,[[`path`,{d:`M14.086 18.412A2 2 0 0112.67 19H5v-7.672a2 2 0 01.586-1.414L11.75 3.75a6 6 0 118.49 8.49z`,key:`1nq9jb`}],[`path`,{d:`M16 8 2 22`,key:`vp34q`}],[`path`,{d:`M17.488 15H9`,key:`16yirz`}]]),ae=O(`file-text`,[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M10 9H8`,key:`b1mrlr`}],[`path`,{d:`M16 13H8`,key:`t4e002`}],[`path`,{d:`M16 17H8`,key:`z1uh3a`}]]),oe=O(`heart`,[[`path`,{d:`M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5`,key:`mvr1a0`}]]),I=O(`mail`,[[`path`,{d:`m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7`,key:`132q7q`}],[`rect`,{x:`2`,y:`4`,width:`20`,height:`16`,rx:`2`,key:`izxlao`}]]),se=O(`message-square`,[[`path`,{d:`M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z`,key:`18887p`}]]),ce=O(`moon`,[[`path`,{d:`M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401`,key:`kfwtm`}]]),le=O(`send`,[[`path`,{d:`M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z`,key:`1ffxy3`}],[`path`,{d:`m21.854 2.147-10.94 10.939`,key:`12cjpa`}]]),ue=O(`share-2`,[[`circle`,{cx:`18`,cy:`5`,r:`3`,key:`gq8acd`}],[`circle`,{cx:`6`,cy:`12`,r:`3`,key:`w7nqdw`}],[`circle`,{cx:`18`,cy:`19`,r:`3`,key:`1xt0gg`}],[`line`,{x1:`8.59`,x2:`15.42`,y1:`13.51`,y2:`17.49`,key:`47mynk`}],[`line`,{x1:`15.41`,x2:`8.59`,y1:`6.51`,y2:`10.49`,key:`1n3mei`}]]),de=O(`sparkles`,[[`path`,{d:`M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,key:`1s2grr`}],[`path`,{d:`M20 2v4`,key:`1rf3ol`}],[`path`,{d:`M22 4h-4`,key:`gwowj6`}],[`circle`,{cx:`4`,cy:`20`,r:`2`,key:`6kqj1y`}]]),fe=O(`sun`,[[`circle`,{cx:`12`,cy:`12`,r:`4`,key:`4exip2`}],[`path`,{d:`M12 2v2`,key:`tus03m`}],[`path`,{d:`M12 20v2`,key:`1lh1kg`}],[`path`,{d:`m4.93 4.93 1.41 1.41`,key:`149t6j`}],[`path`,{d:`m17.66 17.66 1.41 1.41`,key:`ptbguv`}],[`path`,{d:`M2 12h2`,key:`1t8f8n`}],[`path`,{d:`M20 12h2`,key:`1q8mjw`}],[`path`,{d:`m6.34 17.66-1.41 1.41`,key:`1m8zz5`}],[`path`,{d:`m19.07 4.93-1.41 1.41`,key:`1shlcs`}]]),L=O(`tag`,[[`path`,{d:`M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z`,key:`vktsd0`}],[`circle`,{cx:`7.5`,cy:`7.5`,r:`.5`,fill:`currentColor`,key:`kqv944`}]]),pe=O(`user`,[[`path`,{d:`M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2`,key:`975kel`}],[`circle`,{cx:`12`,cy:`7`,r:`4`,key:`17ys0d`}]]),me=O(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),he={};(function e(t,n,r,i){var a=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),o=typeof Path2D==`function`&&typeof DOMMatrix==`function`,s=(function(){if(!t.OffscreenCanvas)return!1;try{var e=new OffscreenCanvas(1,1),n=e.getContext(`2d`);n.fillRect(0,0,1,1);var r=e.transferToImageBitmap();n.createPattern(r,`no-repeat`)}catch{return!1}return!0})();function c(){}function l(e){var r=n.exports.Promise,i=r===void 0?t.Promise:r;return typeof i==`function`?new i(e):(e(c,c),null)}var u=(function(e,t){return{transform:function(n){if(e)return n;if(t.has(n))return t.get(n);var r=new OffscreenCanvas(n.width,n.height);return r.getContext(`2d`).drawImage(n,0,0),t.set(n,r),r},clear:function(){t.clear()}}})(s,new Map),d=function(){var e,t,n={},r=0;return typeof requestAnimationFrame==`function`&&typeof cancelAnimationFrame==`function`?(e=function(e){var t=Math.random();return n[t]=requestAnimationFrame(function i(a){r===a||r+16-1<a?(r=a,delete n[t],e()):n[t]=requestAnimationFrame(i)}),t},t=function(e){n[e]&&cancelAnimationFrame(n[e])}):(e=function(e){return setTimeout(e,16)},t=function(e){return clearTimeout(e)}),{frame:e,cancel:t}}(),f=(function(){var t,n,i={};function o(e){function t(t,n){e.postMessage({options:t||{},callback:n})}e.init=function(t){var n=t.transferControlToOffscreen();e.postMessage({canvas:n},[n])},e.fire=function(r,a,o){if(n)return t(r,null),n;var s=Math.random().toString(36).slice(2);return n=l(function(a){function c(t){t.data.callback===s&&(delete i[s],e.removeEventListener(`message`,c),n=null,u.clear(),o(),a())}e.addEventListener(`message`,c),t(r,s),i[s]=c.bind(null,{data:{callback:s}})}),n},e.reset=function(){for(var t in e.postMessage({reset:!0}),i)i[t](),delete i[t]}}return function(){if(t)return t;if(!r&&a){var n=[`var CONFETTI, SIZE = {}, module = {};`,`(`+e.toString()+`)(this, module, true, SIZE);`,`onmessage = function(msg) {`,`  if (msg.data.options) {`,`    CONFETTI(msg.data.options).then(function () {`,`      if (msg.data.callback) {`,`        postMessage({ callback: msg.data.callback });`,`      }`,`    });`,`  } else if (msg.data.reset) {`,`    CONFETTI && CONFETTI.reset();`,`  } else if (msg.data.resize) {`,`    SIZE.width = msg.data.resize.width;`,`    SIZE.height = msg.data.resize.height;`,`  } else if (msg.data.canvas) {`,`    SIZE.width = msg.data.canvas.width;`,`    SIZE.height = msg.data.canvas.height;`,`    CONFETTI = module.exports.create(msg.data.canvas);`,`  }`,`}`].join(`
`);try{t=new Worker(URL.createObjectURL(new Blob([n])))}catch(e){return typeof console<`u`&&typeof console.warn==`function`&&console.warn(`🎊 Could not load worker`,e),null}o(t)}return t}})(),p={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:[`square`,`circle`],zIndex:100,colors:[`#26ccff`,`#a25afd`,`#ff5e7e`,`#88ff5a`,`#fcff42`,`#ffa62d`,`#ff36ff`],disableForReducedMotion:!1,scalar:1};function m(e,t){return t?t(e):e}function h(e){return e!=null}function g(e,t,n){return m(e&&h(e[t])?e[t]:p[t],n)}function _(e){return e<0?0:Math.floor(e)}function v(e,t){return Math.floor(Math.random()*(t-e))+e}function y(e){return parseInt(e,16)}function b(e){return e.map(x)}function x(e){var t=String(e).replace(/[^0-9a-f]/gi,``);return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:y(t.substring(0,2)),g:y(t.substring(2,4)),b:y(t.substring(4,6))}}function S(e){var t=g(e,`origin`,Object);return t.x=g(t,`x`,Number),t.y=g(t,`y`,Number),t}function C(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function w(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function T(e){var t=document.createElement(`canvas`);return t.style.position=`fixed`,t.style.top=`0px`,t.style.left=`0px`,t.style.pointerEvents=`none`,t.style.zIndex=e,t}function E(e,t,n,r,i,a,o,s,c){e.save(),e.translate(t,n),e.rotate(a),e.scale(r,i),e.arc(0,0,1,o,s,c),e.restore()}function D(e){var t=e.angle*(Math.PI/180),n=e.spread*(Math.PI/180);return{x:e.x,y:e.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:e.startVelocity*.5+Math.random()*e.startVelocity,angle2D:-t+(.5*n-Math.random()*n),tiltAngle:(Math.random()*.5+.25)*Math.PI,color:e.color,shape:e.shape,tick:0,totalTicks:e.ticks,decay:e.decay,drift:e.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:e.gravity*3,ovalScalar:.6,scalar:e.scalar,flat:e.flat}}function O(e,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.velocity*=t.decay,t.flat?(t.wobble=0,t.wobbleX=t.x+10*t.scalar,t.wobbleY=t.y+10*t.scalar,t.tiltSin=0,t.tiltCos=0,t.random=1):(t.wobble+=t.wobbleSpeed,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble),t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2);var n=t.tick++/t.totalTicks,r=t.x+t.random*t.tiltCos,i=t.y+t.random*t.tiltSin,a=t.wobbleX+t.random*t.tiltCos,s=t.wobbleY+t.random*t.tiltSin;if(e.fillStyle=`rgba(`+t.color.r+`, `+t.color.g+`, `+t.color.b+`, `+(1-n)+`)`,e.beginPath(),o&&t.shape.type===`path`&&typeof t.shape.path==`string`&&Array.isArray(t.shape.matrix))e.fill(ee(t.shape.path,t.shape.matrix,t.x,t.y,Math.abs(a-r)*.1,Math.abs(s-i)*.1,Math.PI/10*t.wobble));else if(t.shape.type===`bitmap`){var c=Math.PI/10*t.wobble,l=Math.abs(a-r)*.1,d=Math.abs(s-i)*.1,f=t.shape.bitmap.width*t.scalar,p=t.shape.bitmap.height*t.scalar,m=new DOMMatrix([Math.cos(c)*l,Math.sin(c)*l,-Math.sin(c)*d,Math.cos(c)*d,t.x,t.y]);m.multiplySelf(new DOMMatrix(t.shape.matrix));var h=e.createPattern(u.transform(t.shape.bitmap),`no-repeat`);h.setTransform(m),e.globalAlpha=1-n,e.fillStyle=h,e.fillRect(t.x-f/2,t.y-p/2,f,p),e.globalAlpha=1}else if(t.shape===`circle`)e.ellipse?e.ellipse(t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(s-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):E(e,t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(s-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI);else if(t.shape===`star`)for(var g=Math.PI/2*3,_=4*t.scalar,v=8*t.scalar,y=t.x,b=t.y,x=5,S=Math.PI/x;x--;)y=t.x+Math.cos(g)*v,b=t.y+Math.sin(g)*v,e.lineTo(y,b),g+=S,y=t.x+Math.cos(g)*_,b=t.y+Math.sin(g)*_,e.lineTo(y,b),g+=S;else e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(i)),e.lineTo(Math.floor(a),Math.floor(s)),e.lineTo(Math.floor(r),Math.floor(t.wobbleY));return e.closePath(),e.fill(),t.tick<t.totalTicks}function k(e,t,n,a,o){var s=t.slice(),c=e.getContext(`2d`),f,p,m=l(function(t){function l(){f=p=null,c.clearRect(0,0,a.width,a.height),u.clear(),o(),t()}function m(){r&&(a.width!==i.width||a.height!==i.height)&&(a.width=e.width=i.width,a.height=e.height=i.height),!a.width&&!a.height&&(n(e),a.width=e.width,a.height=e.height),c.clearRect(0,0,a.width,a.height),s=s.filter(function(e){return O(c,e)}),s.length?f=d.frame(m):l()}f=d.frame(m),p=l});return{addFettis:function(e){return s=s.concat(e),m},canvas:e,promise:m,reset:function(){f&&d.cancel(f),p&&p()}}}function A(e,n){var r=!e,i=!!g(n||{},`resize`),o=!1,s=g(n,`disableForReducedMotion`,Boolean),c=a&&g(n||{},`useWorker`)?f():null,u=r?C:w,d=e&&c?!!e.__confetti_initialized:!1,p=typeof matchMedia==`function`&&matchMedia(`(prefers-reduced-motion)`).matches,m;function h(t,n,r){for(var i=g(t,`particleCount`,_),a=g(t,`angle`,Number),o=g(t,`spread`,Number),s=g(t,`startVelocity`,Number),c=g(t,`decay`,Number),l=g(t,`gravity`,Number),d=g(t,`drift`,Number),f=g(t,`colors`,b),p=g(t,`ticks`,Number),h=g(t,`shapes`),y=g(t,`scalar`),x=!!g(t,`flat`),C=S(t),w=i,T=[],E=e.width*C.x,O=e.height*C.y;w--;)T.push(D({x:E,y:O,angle:a,spread:o,startVelocity:s,color:f[w%f.length],shape:h[v(0,h.length)],ticks:p,decay:c,gravity:l,drift:d,scalar:y,flat:x}));return m?m.addFettis(T):(m=k(e,T,u,n,r),m.promise)}function y(n){var a=s||g(n,`disableForReducedMotion`,Boolean),f=g(n,`zIndex`,Number);if(a&&p)return l(function(e){e()});r&&m?e=m.canvas:r&&!e&&(e=T(f),document.body.appendChild(e)),i&&!d&&u(e);var _={width:e.width,height:e.height};c&&!d&&c.init(e),d=!0,c&&(e.__confetti_initialized=!0);function v(){if(c){var t={getBoundingClientRect:function(){if(!r)return e.getBoundingClientRect()}};u(t),c.postMessage({resize:{width:t.width,height:t.height}});return}_.width=_.height=null}function y(){m=null,i&&(o=!1,t.removeEventListener(`resize`,v)),r&&e&&(document.body.contains(e)&&document.body.removeChild(e),e=null,d=!1)}return i&&!o&&(o=!0,t.addEventListener(`resize`,v,!1)),c?c.fire(n,_,y):h(n,_,y)}return y.reset=function(){c&&c.reset(),m&&m.reset()},y}var j;function M(){return j||=A(null,{useWorker:!0,resize:!0}),j}function ee(e,t,n,r,i,a,o){var s=new Path2D(e),c=new Path2D;c.addPath(s,new DOMMatrix(t));var l=new Path2D;return l.addPath(c,new DOMMatrix([Math.cos(o)*i,Math.sin(o)*i,-Math.sin(o)*a,Math.cos(o)*a,n,r])),l}function N(e){if(!o)throw Error(`path confetti are not supported in this browser`);var t,n;typeof e==`string`?t=e:(t=e.path,n=e.matrix);var r=new Path2D(t),i=document.createElement(`canvas`).getContext(`2d`);if(!n){for(var a=1e3,s=a,c=a,l=0,u=0,d,f,p=0;p<a;p+=2)for(var m=0;m<a;m+=2)i.isPointInPath(r,p,m,`nonzero`)&&(s=Math.min(s,p),c=Math.min(c,m),l=Math.max(l,p),u=Math.max(u,m));d=l-s,f=u-c;var h=10,g=Math.min(h/d,h/f);n=[g,0,0,g,-Math.round(d/2+s)*g,-Math.round(f/2+c)*g]}return{type:`path`,path:t,matrix:n}}function te(e){var t,n=1,r=`#000000`,i=`"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif`;typeof e==`string`?t=e:(t=e.text,n=`scalar`in e?e.scalar:n,i=`fontFamily`in e?e.fontFamily:i,r=`color`in e?e.color:r);var a=10*n,o=``+a+`px `+i,s=new OffscreenCanvas(a,a),c=s.getContext(`2d`);c.font=o;var l=c.measureText(t),u=Math.ceil(l.actualBoundingBoxRight+l.actualBoundingBoxLeft),d=Math.ceil(l.actualBoundingBoxAscent+l.actualBoundingBoxDescent),f=2,p=l.actualBoundingBoxLeft+f,m=l.actualBoundingBoxAscent+f;u+=f+f,d+=f+f,s=new OffscreenCanvas(u,d),c=s.getContext(`2d`),c.font=o,c.fillStyle=r,c.fillText(t,p,m);var h=1/n;return{type:`bitmap`,bitmap:s.transferToImageBitmap(),matrix:[h,0,0,h,-u*h/2,-d*h/2]}}n.exports=function(){return M().apply(this,arguments)},n.exports.reset=function(){M().reset()},n.exports.create=A,n.exports.shapeFromPath=N,n.exports.shapeFromText=te})((function(){return typeof window<`u`?window:typeof self<`u`?self:this||{}})(),he,!1);var ge=he.exports;he.exports.create;var _e=`http://www.w3.org/2000/svg`,ve=class{constructor(e){this.seed=e}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}};function ye(e,t,n,r,i){return{type:`path`,ops:Te(e,t,n,r,i)}}function be(e,t,n){let r=(e||[]).length;if(r>2){let i=[];for(let t=0;t<r-1;t++)i.push(...Te(e[t][0],e[t][1],e[t+1][0],e[t+1][1],n));return t&&i.push(...Te(e[r-1][0],e[r-1][1],e[0][0],e[0][1],n)),{type:`path`,ops:i}}return r===2?ye(e[0][0],e[0][1],e[1][0],e[1][1],n):{type:`path`,ops:[]}}function xe(e,t,n,r,i){return function(e,t){return be(e,!0,t)}([[e,t],[e+n,t],[e+n,t+r],[e,t+r]],i)}function R(e,t,n,r,i){return function(e,t,n,r){let[i,a]=Oe(r.increment,e,t,r.rx,r.ry,1,r.increment*Ce(.1,Ce(.4,1,n),n),n),o=De(i,null,n);if(!n.disableMultiStroke){let[i]=Oe(r.increment,e,t,r.rx,r.ry,1.5,0,n),a=De(i,null,n);o=o.concat(a)}return{estimatedPoints:a,opset:{type:`path`,ops:o}}}(e,t,i,function(e,t,n){let r=Math.sqrt(2*Math.PI*Math.sqrt(((e/2)**2+(t/2)**2)/2)),i=Math.max(n.curveStepCount,n.curveStepCount/Math.sqrt(200)*r),a=2*Math.PI/i,o=Math.abs(e/2),s=Math.abs(t/2),c=1-n.curveFitting;return o+=we(o*c,n),s+=we(s*c,n),{increment:a,rx:o,ry:s}}(n,r,i)).opset}function Se(e){return e.randomizer||=new ve(e.seed||0),e.randomizer.next()}function Ce(e,t,n,r=1){return n.roughness*r*(Se(n)*(t-e)+e)}function we(e,t,n=1){return Ce(-e,e,t,n)}function Te(e,t,n,r,i,a=!1){let o=a?i.disableMultiStrokeFill:i.disableMultiStroke,s=Ee(e,t,n,r,i,!0,!1);if(o)return s;let c=Ee(e,t,n,r,i,!0,!0);return s.concat(c)}function Ee(e,t,n,r,i,a,o){let s=(e-n)**2+(t-r)**2,c=Math.sqrt(s),l=1;l=c<200?1:c>500?.4:-.0016668*c+1.233334;let u=i.maxRandomnessOffset||0;u*u*100>s&&(u=c/10);let d=u/2,f=.2+.2*Se(i),p=i.bowing*i.maxRandomnessOffset*(r-t)/200,m=i.bowing*i.maxRandomnessOffset*(e-n)/200;p=we(p,i,l),m=we(m,i,l);let h=[],g=()=>we(d,i,l),_=()=>we(u,i,l);return a&&(o?h.push({op:`move`,data:[e+g(),t+g()]}):h.push({op:`move`,data:[e+we(u,i,l),t+we(u,i,l)]})),o?h.push({op:`bcurveTo`,data:[p+e+(n-e)*f+g(),m+t+(r-t)*f+g(),p+e+2*(n-e)*f+g(),m+t+2*(r-t)*f+g(),n+g(),r+g()]}):h.push({op:`bcurveTo`,data:[p+e+(n-e)*f+_(),m+t+(r-t)*f+_(),p+e+2*(n-e)*f+_(),m+t+2*(r-t)*f+_(),n+_(),r+_()]}),h}function De(e,t,n){let r=e.length,i=[];if(r>3){let a=[],o=1-n.curveTightness;i.push({op:`move`,data:[e[1][0],e[1][1]]});for(let t=1;t+2<r;t++){let n=e[t];a[0]=[n[0],n[1]],a[1]=[n[0]+(o*e[t+1][0]-o*e[t-1][0])/6,n[1]+(o*e[t+1][1]-o*e[t-1][1])/6],a[2]=[e[t+1][0]+(o*e[t][0]-o*e[t+2][0])/6,e[t+1][1]+(o*e[t][1]-o*e[t+2][1])/6],a[3]=[e[t+1][0],e[t+1][1]],i.push({op:`bcurveTo`,data:[a[1][0],a[1][1],a[2][0],a[2][1],a[3][0],a[3][1]]})}if(t&&t.length===2){let e=n.maxRandomnessOffset;i.push({op:`lineTo`,data:[t[0]+we(e,n),t[1]+we(e,n)]})}}else r===3?(i.push({op:`move`,data:[e[1][0],e[1][1]]}),i.push({op:`bcurveTo`,data:[e[1][0],e[1][1],e[2][0],e[2][1],e[2][0],e[2][1]]})):r===2&&i.push(...Te(e[0][0],e[0][1],e[1][0],e[1][1],n));return i}function Oe(e,t,n,r,i,a,o,s){let c=[],l=[],u=we(.5,s)-Math.PI/2;l.push([we(a,s)+t+.9*r*Math.cos(u-e),we(a,s)+n+.9*i*Math.sin(u-e)]);for(let o=u;o<2*Math.PI+u-.01;o+=e){let e=[we(a,s)+t+r*Math.cos(o),we(a,s)+n+i*Math.sin(o)];c.push(e),l.push(e)}return l.push([we(a,s)+t+r*Math.cos(u+2*Math.PI+.5*o),we(a,s)+n+i*Math.sin(u+2*Math.PI+.5*o)]),l.push([we(a,s)+t+.98*r*Math.cos(u+o),we(a,s)+n+.98*i*Math.sin(u+o)]),l.push([we(a,s)+t+.9*r*Math.cos(u+.5*o),we(a,s)+n+.9*i*Math.sin(u+.5*o)]),[l,c]}function ke(e,t){return{maxRandomnessOffset:2,roughness:e===`highlight`?3:1.5,bowing:1,stroke:`#000`,strokeWidth:1.5,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:`hachure`,fillWeight:-1,hachureAngle:-41,hachureGap:-1,dashOffset:-1,dashGap:-1,zigzagOffset:-1,combineNestedSvgPaths:!1,disableMultiStroke:e!==`double`,disableMultiStrokeFill:!1,seed:t}}function Ae(e,t,n,r,i,a){let o=[],s=n.strokeWidth||2,c=function(e){let t=e.padding;if(t||t===0){if(typeof t==`number`)return[t,t,t,t];if(Array.isArray(t)){let e=t;if(e.length)switch(e.length){case 4:return[...e];case 1:return[e[0],e[0],e[0],e[0]];case 2:return[...e,...e];case 3:return[...e,e[1]];default:return[e[0],e[1],e[2],e[3]]}}}return[5,5,5,5]}(n),l=n.animate===void 0||!!n.animate,u=n.iterations||2,d=+!!n.rtl,f=ke(`single`,a);switch(n.type){case`underline`:{let e=t.y+t.h+c[2];for(let n=d;n<u+d;n++)n%2?o.push(ye(t.x+t.w,e,t.x,e,f)):o.push(ye(t.x,e,t.x+t.w,e,f));break}case`strike-through`:{let e=t.y+t.h/2;for(let n=d;n<u+d;n++)n%2?o.push(ye(t.x+t.w,e,t.x,e,f)):o.push(ye(t.x,e,t.x+t.w,e,f));break}case`box`:{let e=t.x-c[3],n=t.y-c[0],r=t.w+(c[1]+c[3]),i=t.h+(c[0]+c[2]);for(let t=0;t<u;t++)o.push(xe(e,n,r,i,f));break}case`bracket`:{let e=Array.isArray(n.brackets)?n.brackets:n.brackets?[n.brackets]:[`right`],r=t.x-2*c[3],i=t.x+t.w+2*c[1],a=t.y-2*c[0],s=t.y+t.h+2*c[2];for(let n of e){let e;switch(n){case`bottom`:e=[[r,t.y+t.h],[r,s],[i,s],[i,t.y+t.h]];break;case`top`:e=[[r,t.y],[r,a],[i,a],[i,t.y]];break;case`left`:e=[[t.x,a],[r,a],[r,s],[t.x,s]];break;case`right`:e=[[t.x+t.w,a],[i,a],[i,s],[t.x+t.w,s]]}e&&o.push(be(e,!1,f))}break}case`crossed-off`:{let e=t.x,n=t.y,r=e+t.w,i=n+t.h;for(let t=d;t<u+d;t++)t%2?o.push(ye(r,i,e,n,f)):o.push(ye(e,n,r,i,f));for(let t=d;t<u+d;t++)t%2?o.push(ye(e,i,r,n,f)):o.push(ye(r,n,e,i,f));break}case`circle`:{let e=ke(`double`,a),n=t.w+(c[1]+c[3]),r=t.h+(c[0]+c[2]),i=t.x-c[3]+n/2,s=t.y-c[0]+r/2,l=Math.floor(u/2),d=u-2*l;for(let t=0;t<l;t++)o.push(R(i,s,n,r,e));for(let e=0;e<d;e++)o.push(R(i,s,n,r,f));break}case`highlight`:{let e=ke(`highlight`,a);s=.95*t.h;let n=t.y+t.h/2;for(let r=d;r<u+d;r++)r%2?o.push(ye(t.x+t.w,n,t.x,n,e)):o.push(ye(t.x,n,t.x+t.w,n,e));break}}if(o.length){let t=function(e){let t=[];for(let n of e){let e=``;for(let r of n.ops){let n=r.data;switch(r.op){case`move`:e.trim()&&t.push(e.trim()),e=`M${n[0]} ${n[1]} `;break;case`bcurveTo`:e+=`C${n[0]} ${n[1]}, ${n[2]} ${n[3]}, ${n[4]} ${n[5]} `;break;case`lineTo`:e+=`L${n[0]} ${n[1]} `}}e.trim()&&t.push(e.trim())}return t}(o),a=[],c=[],u=0,d=(e,t,n)=>e.setAttribute(t,n);for(let r of t){let t=document.createElementNS(_e,`path`);if(d(t,`d`,r),d(t,`fill`,`none`),d(t,`stroke`,n.color||`currentColor`),d(t,`stroke-width`,``+s),l){let e=t.getTotalLength();a.push(e),u+=e}e.appendChild(t),c.push(t)}if(l){let e=0;for(let t=0;t<c.length;t++){let n=c[t],o=a[t],s=u?o/u*i:0,l=r+e,d=n.style;d.strokeDashoffset=``+o,d.strokeDasharray=``+o,d.animation=`rough-notation-dash ${s}ms ease-out ${l}ms forwards`,e+=s}}}}var je=class{constructor(e,t){this._state=`unattached`,this._resizing=!1,this._seed=Math.floor(Math.random()*2**31),this._lastSizes=[],this._animationDelay=0,this._resizeListener=()=>{this._resizing||(this._resizing=!0,setTimeout(()=>{this._resizing=!1,this._state===`showing`&&this.haveRectsChanged()&&this.show()},400))},this._e=e,this._config=JSON.parse(JSON.stringify(t)),this.attach()}get animate(){return this._config.animate}set animate(e){this._config.animate=e}get animationDuration(){return this._config.animationDuration}set animationDuration(e){this._config.animationDuration=e}get iterations(){return this._config.iterations}set iterations(e){this._config.iterations=e}get color(){return this._config.color}set color(e){this._config.color!==e&&(this._config.color=e,this.refresh())}get strokeWidth(){return this._config.strokeWidth}set strokeWidth(e){this._config.strokeWidth!==e&&(this._config.strokeWidth=e,this.refresh())}get padding(){return this._config.padding}set padding(e){this._config.padding!==e&&(this._config.padding=e,this.refresh())}attach(){if(this._state===`unattached`&&this._e.parentElement){(function(){if(!window.__rno_kf_s){let e=window.__rno_kf_s=document.createElement(`style`);e.textContent=`@keyframes rough-notation-dash { to { stroke-dashoffset: 0; } }`,document.head.appendChild(e)}})();let e=this._svg=document.createElementNS(_e,`svg`);e.setAttribute(`class`,`rough-annotation`);let t=e.style;t.position=`absolute`,t.top=`0`,t.left=`0`,t.overflow=`visible`,t.pointerEvents=`none`,t.width=`100px`,t.height=`100px`;let n=this._config.type===`highlight`;if(this._e.insertAdjacentElement(n?`beforebegin`:`afterend`,e),this._state=`not-showing`,n){let e=window.getComputedStyle(this._e).position;(!e||e===`static`)&&(this._e.style.position=`relative`)}this.attachListeners()}}detachListeners(){window.removeEventListener(`resize`,this._resizeListener),this._ro&&this._ro.unobserve(this._e)}attachListeners(){this.detachListeners(),window.addEventListener(`resize`,this._resizeListener,{passive:!0}),!this._ro&&`ResizeObserver`in window&&(this._ro=new window.ResizeObserver(e=>{for(let t of e)t.contentRect&&this._resizeListener()})),this._ro&&this._ro.observe(this._e)}haveRectsChanged(){if(this._lastSizes.length){let e=this.rects();if(e.length!==this._lastSizes.length)return!0;for(let t=0;t<e.length;t++)if(!this.isSameRect(e[t],this._lastSizes[t]))return!0}return!1}isSameRect(e,t){let n=(e,t)=>Math.round(e)===Math.round(t);return n(e.x,t.x)&&n(e.y,t.y)&&n(e.w,t.w)&&n(e.h,t.h)}isShowing(){return this._state!==`not-showing`}refresh(){this.isShowing()&&!this.pendingRefresh&&(this.pendingRefresh=Promise.resolve().then(()=>{this.isShowing()&&this.show(),delete this.pendingRefresh}))}show(){switch(this._state){case`unattached`:break;case`showing`:this.hide(),this._svg&&this.render(this._svg,!0);break;case`not-showing`:this.attach(),this._svg&&this.render(this._svg,!1)}}hide(){if(this._svg)for(;this._svg.lastChild;)this._svg.removeChild(this._svg.lastChild);this._state=`not-showing`}remove(){this._svg&&this._svg.parentElement&&this._svg.parentElement.removeChild(this._svg),this._svg=void 0,this._state=`unattached`,this.detachListeners()}render(e,t){let n=this._config;t&&(n=JSON.parse(JSON.stringify(this._config)),n.animate=!1);let r=this.rects(),i=0;r.forEach(e=>i+=e.w);let a=n.animationDuration||800,o=0;for(let t=0;t<r.length;t++){let s=a*(r[t].w/i);Ae(e,r[t],n,o+this._animationDelay,s,this._seed),o+=s}this._lastSizes=r,this._state=`showing`}rects(){let e=[];if(this._svg){if(this._config.multiline){let t=this._e.getClientRects();for(let n=0;n<t.length;n++)e.push(this.svgRect(this._svg,t[n]))}else e.push(this.svgRect(this._svg,this._e.getBoundingClientRect()))}return e}svgRect(e,t){let n=e.getBoundingClientRect(),r=t;return{x:(r.x||r.left)-(n.x||n.left),y:(r.y||r.top)-(n.y||n.top),w:r.width,h:r.height}}};function Me(e,t){return new je(e,t)}var Ne=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),z=o(((e,t)=>{t.exports=Ne()}))();function Pe({type:e=`underline`,color:t=`#2997ff`,show:n=!0,strokeWidth:r=2.5,animationDuration:i=900,iterations:a=2,brackets:o=[`left`,`right`],loop:s=!0,loopInterval:c=3500,children:l,className:u=``,multiline:d=!0}){let f=(0,_.useRef)(null),p=(0,_.useRef)(null),m=()=>{if(!f.current)return;if(p.current){try{p.current.remove()}catch{}p.current=null}let n={type:e,color:t,strokeWidth:r,animationDuration:i,iterations:a,multiline:d};e===`bracket`&&(n.brackets=o),p.current=Me(f.current,n),p.current.show()};return(0,_.useEffect)(()=>{if(!n)return;let e=setTimeout(()=>{m()},100),t=null;return s&&(t=setInterval(()=>{m()},c)),()=>{if(clearTimeout(e),t&&clearInterval(t),p.current)try{p.current.remove()}catch{}}},[e,t,n,r,i,a,s,c,JSON.stringify(o),d]),(0,z.jsx)(`span`,{ref:f,className:`inline-block relative ${u}`,children:l})}function Fe({className:e=`w-5 h-5 text-[#2997ff]`,type:t=`sparkle`}){return t===`crown`?(0,z.jsx)(`svg`,{className:e,viewBox:`0 0 40 40`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,z.jsx)(`path`,{d:`M5 28 L11 12 L19 20 L27 8 L35 28 Z M5 28 L35 28`,className:`[stroke-dasharray:120] [stroke-dashoffset:0] transition-all hover:stroke-amber-400`})}):t===`orbit`?(0,z.jsxs)(`svg`,{className:e,viewBox:`0 0 40 40`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,children:[(0,z.jsx)(`ellipse`,{cx:`20`,cy:`20`,rx:`16`,ry:`7`,transform:`rotate(-25 20 20)`,strokeDasharray:`3 3`}),(0,z.jsx)(`circle`,{cx:`20`,cy:`20`,r:`4`,fill:`currentColor`}),(0,z.jsx)(`circle`,{cx:`32`,cy:`14`,r:`2.5`,fill:`currentColor`})]}):(0,z.jsxs)(`svg`,{className:e,viewBox:`0 0 40 40`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,z.jsx)(`path`,{d:`M20 4 C20 14 26 20 36 20 C26 20 20 26 20 36 C20 26 14 20 4 20 C14 20 20 14 20 4 Z`}),(0,z.jsx)(`circle`,{cx:`31`,cy:`9`,r:`1.5`,fill:`currentColor`}),(0,z.jsx)(`circle`,{cx:`9`,cy:`31`,r:`1.5`,fill:`currentColor`})]})}function Ie({theme:e,toggleTheme:t}){let[n,r]=(0,_.useState)(!1);(0,_.useEffect)(()=>{let e=()=>{r(window.scrollY>30)};return window.addEventListener(`scroll`,e),()=>window.removeEventListener(`scroll`,e)},[]);let i=e===`dark`;return(0,z.jsxs)(`header`,{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300`,children:[(0,z.jsx)(`div`,{className:`py-2 px-6 text-center text-xs transition-colors border-b ${i?`bg-[#161617]/90 text-[#86868b] border-[#2c2c2e]`:`bg-[#e8e8ed]/90 text-[#6e6e73] border-[#d2d2d7]`}`,children:(0,z.jsxs)(`span`,{className:`inline-flex items-center gap-2 font-medium`,children:[(0,z.jsx)(Fe,{type:`sparkle`,className:`w-4 h-4 text-[#2997ff] animate-pulse`}),(0,z.jsx)(`span`,{className:`font-semibold tracking-wide ${i?`text-[#f5f5f7]`:`text-[#1d1d1f]`}`,children:`Sanket Kakad GenAI Portfolio`})]})}),(0,z.jsx)(`div`,{className:`transition-all duration-300 py-3.5 px-6 border-b ${n?i?`bg-[#161617]/85 backdrop-blur-xl border-[#2c2c2e] shadow-2xl shadow-black/80`:`bg-[#ffffff]/85 backdrop-blur-xl border-[#d2d2d7] shadow-xl shadow-slate-200/50`:i?`bg-[#161617]/50 backdrop-blur-md border-[#2c2c2e]/40`:`bg-[#f5f5f7]/50 backdrop-blur-md border-[#d2d2d7]/40`}`,children:(0,z.jsxs)(`div`,{className:`max-w-6xl mx-auto flex items-center justify-between`,children:[(0,z.jsxs)(`div`,{className:`flex items-baseline gap-3`,children:[(0,z.jsxs)(`a`,{href:`#`,className:`text-lg md:text-xl font-bold tracking-tight flex items-center gap-2 ${i?`text-[#f5f5f7]`:`text-[#1d1d1f]`}`,children:[(0,z.jsx)(`div`,{className:`w-6 h-6 rounded-lg bg-[#0071e3] p-[1px]`,children:(0,z.jsx)(`div`,{className:`w-full h-full rounded-[7px] flex items-center justify-center ${i?`bg-[#000000]`:`bg-[#ffffff]`}`,children:(0,z.jsx)(ie,{className:`w-3.5 h-3.5 text-[#0071e3]`})})}),(0,z.jsx)(Pe,{type:`underline`,color:`#0071e3`,show:!0,strokeWidth:2,children:(0,z.jsx)(`span`,{children:`Sanket Kakad`})})]}),(0,z.jsx)(`span`,{className:`text-xs font-mono hidden sm:inline-block ${i?`text-[#86868b]`:`text-[#6e6e73]`}`,children:`Senior AI Engineer`})]}),(0,z.jsxs)(`div`,{className:`flex items-center gap-6 text-xs`,children:[(0,z.jsxs)(`nav`,{className:`hidden md:flex items-center gap-6 font-medium ${i?`text-[#a1a1a6]`:`text-[#6e6e73]`}`,children:[(0,z.jsx)(`a`,{href:`#overview`,className:`transition-colors font-semibold ${i?`hover:text-[#f5f5f7] text-[#f5f5f7]`:`hover:text-[#1d1d1f] text-[#1d1d1f]`}`,children:`Overview`}),(0,z.jsx)(`a`,{href:`#projects`,className:i?`hover:text-[#f5f5f7]`:`hover:text-[#1d1d1f]`,children:`Projects`}),(0,z.jsx)(`a`,{href:`#articles`,className:i?`hover:text-[#f5f5f7]`:`hover:text-[#1d1d1f]`,children:`Articles`}),(0,z.jsx)(`a`,{href:`#contact`,className:i?`hover:text-[#f5f5f7]`:`hover:text-[#1d1d1f]`,children:`Contact`})]}),(0,z.jsx)(`button`,{onClick:t,className:`px-3 py-1.5 rounded-full border text-xs font-medium transition-all flex items-center gap-2 active:scale-95 ${i?`bg-[#2c2c2e] border-[#3a3a3c] text-[#f5f5f7] hover:bg-[#3a3a3c]`:`bg-[#e8e8ed] border-[#d2d2d7] text-[#1d1d1f] hover:bg-[#d2d2d7]`}`,title:i?`Switch to Light Mode`:`Switch to Dark Mode`,children:i?(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(fe,{className:`w-3.5 h-3.5 text-amber-400`}),(0,z.jsx)(`span`,{children:`Light`})]}):(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(ce,{className:`w-3.5 h-3.5 text-[#0071e3]`}),(0,z.jsx)(`span`,{children:`Dark`})]})})]})]})})]})}var Le=(0,_.createContext)({});function Re(e){let t=(0,_.useRef)(null);return t.current===null&&(t.current=e()),t.current}var ze=typeof window<`u`?_.useLayoutEffect:_.useEffect,Be=(0,_.createContext)(null);function Ve(e,t){e.indexOf(t)===-1&&e.push(t)}function He(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}var Ue=(e,t,n)=>n>t?t:n<e?e:n,We={},Ge=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),Ke=e=>typeof e==`object`&&!!e,qe=e=>/^0[^.\s]+$/u.test(e);function Je(e){let t;return()=>(t===void 0&&(t=e()),t)}var Ye=e=>e,Xe=(...e)=>e.reduce((e,t)=>n=>t(e(n))),Ze=(e,t,n)=>{let r=t-e;return r?(n-e)/r:1},Qe=class{constructor(){this.subscriptions=[]}add(e){return Ve(this.subscriptions,e),()=>He(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r){if(r===1)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){let r=this.subscriptions[i];r&&r(e,t,n)}}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}},$e=e=>e*1e3,et=e=>e/1e3,tt=(e,t)=>t?1e3/t*e:0,nt=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,rt=1e-7,it=12;function at(e,t,n,r,i){let a,o,s=0;do o=t+(n-t)/2,a=nt(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>rt&&++s<it);return o}function ot(e,t,n,r){if(e===t&&n===r)return Ye;let i=t=>at(t,0,1,e,n);return e=>e===0||e===1?e:nt(i(e),t,r)}var st=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,ct=e=>t=>1-e(1-t),lt=ot(.33,1.53,.69,.99),ut=ct(lt),dt=st(ut),ft=e=>e>=1?1:(e*=2)<1?.5*ut(e):.5*(2-2**(-10*(e-1))),pt=e=>1-Math.sin(Math.acos(e)),mt=ct(pt),ht=st(pt),gt=ot(.42,0,1,1),_t=ot(0,0,.58,1),vt=ot(.42,0,.58,1),yt=e=>Array.isArray(e)&&typeof e[0]!=`number`,bt=e=>Array.isArray(e)&&typeof e[0]==`number`,xt={linear:Ye,easeIn:gt,easeInOut:vt,easeOut:_t,circIn:pt,circInOut:ht,circOut:mt,backIn:ut,backInOut:dt,backOut:lt,anticipate:ft},St=e=>typeof e==`string`,Ct=e=>{if(bt(e)){e.length;let[t,n,r,i]=e;return ot(t,n,r,i)}return St(e)?(xt[e],`${e}`,xt[e]):e},wt=[`setup`,`read`,`resolveKeyframes`,`preUpdate`,`update`,`preRender`,`render`,`postRender`];function Tt(e){let t=new Set,n=new Set,r=!1,i=!1,a=new WeakSet,o={delta:0,timestamp:0,isProcessing:!1};function s(t){a.has(t)&&(c.schedule(t),e()),t(o)}let c={schedule:(e,i=!1,o=!1)=>{let s=o&&r?t:n;return i&&a.add(e),s.add(e),e},cancel:e=>{n.delete(e),a.delete(e)},process:e=>{if(o=e,r){i=!0;return}r=!0;let a=t;t=n,n=a,t.forEach(s),t.clear(),r=!1,i&&(i=!1,c.process(e))}};return c}var Et=40;function Dt(e,t){let n=!1,r=!0,i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=wt.reduce((e,t)=>(e[t]=Tt(a),e),{}),{setup:s,read:c,resolveKeyframes:l,preUpdate:u,update:d,preRender:f,render:p,postRender:m}=o,h=()=>{let a=We.useManualTiming,o=a?i.timestamp:performance.now();n=!1,a||(i.delta=r?1e3/60:Math.max(Math.min(o-i.timestamp,Et),1)),i.timestamp=o,i.isProcessing=!0,s.process(i),c.process(i),l.process(i),u.process(i),d.process(i),f.process(i),p.process(i),m.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(h))},g=()=>{n=!0,r=!0,i.isProcessing||e(h)};return{schedule:wt.reduce((e,t)=>{let r=o[t];return e[t]=(e,t=!1,i=!1)=>(n||g(),r.schedule(e,t,i)),e},{}),cancel:e=>{for(let t=0;t<wt.length;t++)o[wt[t]].cancel(e)},state:i,steps:o}}var{schedule:Ot,cancel:kt,state:At,steps:jt}=Dt(typeof requestAnimationFrame<`u`?requestAnimationFrame:Ye,!0),Mt;function Nt(){Mt=void 0}var Pt={now:()=>(Mt===void 0&&Pt.set(At.isProcessing||We.useManualTiming?At.timestamp:performance.now()),Mt),set:e=>{Mt=e,queueMicrotask(Nt)}},Ft=e=>t=>typeof t==`string`&&t.startsWith(e),It=Ft(`--`),Lt=Ft(`var(--`),Rt=e=>Lt(e)?zt.test(e.split(`/*`)[0].trim()):!1,zt=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Bt(e){return typeof e==`string`&&e.split(`/*`)[0].includes(`var(--`)}var Vt={test:e=>typeof e==`number`,parse:parseFloat,transform:e=>e},Ht={...Vt,transform:e=>Ue(0,1,e)},Ut={...Vt,default:1},Wt=e=>Math.round(e*1e5)/1e5,Gt=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Kt(e){return e==null}var qt=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Jt=(e,t)=>n=>!!(typeof n==`string`&&qt.test(n)&&n.startsWith(e)||t&&!Kt(n)&&Object.prototype.hasOwnProperty.call(n,t)),Yt=(e,t,n)=>r=>{if(typeof r!=`string`)return r;let[i,a,o,s]=r.match(Gt);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s===void 0?1:parseFloat(s)}},Xt=e=>Ue(0,255,e),Zt={...Vt,transform:e=>Math.round(Xt(e))},Qt={test:Jt(`rgb`,`red`),parse:Yt(`red`,`green`,`blue`),transform:({red:e,green:t,blue:n,alpha:r=1})=>`rgba(`+Zt.transform(e)+`, `+Zt.transform(t)+`, `+Zt.transform(n)+`, `+Wt(Ht.transform(r))+`)`};function $t(e){let t=``,n=``,r=``,i=``;return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}var en={test:Jt(`#`),parse:$t,transform:Qt.transform},tn=e=>({test:t=>typeof t==`string`&&t.endsWith(e)&&t.split(` `).length===1,parse:parseFloat,transform:t=>`${t}${e}`}),nn=tn(`deg`),rn=tn(`%`),B=tn(`px`),an=tn(`vh`),on=tn(`vw`),sn={...rn,parse:e=>rn.parse(e)/100,transform:e=>rn.transform(e*100)},cn={test:Jt(`hsl`,`hue`),parse:Yt(`hue`,`saturation`,`lightness`),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>`hsla(`+Math.round(e)+`, `+rn.transform(Wt(t))+`, `+rn.transform(Wt(n))+`, `+Wt(Ht.transform(r))+`)`},ln={test:e=>Qt.test(e)||en.test(e)||cn.test(e),parse:e=>Qt.test(e)?Qt.parse(e):cn.test(e)?cn.parse(e):en.parse(e),transform:e=>typeof e==`string`?e:e.hasOwnProperty(`red`)?Qt.transform(e):cn.transform(e),getAnimatableNone:e=>{let t=ln.parse(e);return t.alpha=0,ln.transform(t)}},un=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function dn(e){return isNaN(e)&&typeof e==`string`&&(e.match(Gt)?.length||0)+(e.match(un)?.length||0)>0}var fn=`number`,pn=`color`,mn=`var`,hn=`var(`,gn="${}",_n=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function vn(e){let t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[],a=0;return{values:n,split:t.replace(_n,e=>(ln.test(e)?(r.color.push(a),i.push(pn),n.push(ln.parse(e))):e.startsWith(hn)?(r.var.push(a),i.push(mn),n.push(e)):(r.number.push(a),i.push(fn),n.push(parseFloat(e))),++a,gn)).split(gn),indexes:r,types:i}}function yn(e){return vn(e).values}function bn({split:e,types:t}){let n=e.length;return r=>{let i=``;for(let a=0;a<n;a++)if(i+=e[a],r[a]!==void 0){let e=t[a];i+=e===fn?Wt(r[a]):e===pn?ln.transform(r[a]):r[a]}return i}}function xn(e){return bn(vn(e))}var Sn=e=>typeof e==`number`?0:ln.test(e)?ln.getAnimatableNone(e):e,Cn=(e,t)=>typeof e==`number`?t?.trim().endsWith(`/`)?e:0:Sn(e);function wn(e){let t=vn(e);return bn(t)(t.values.map((e,n)=>Cn(e,t.split[n])))}var Tn={test:dn,parse:yn,createTransformer:xn,getAnimatableNone:wn};function En(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Dn({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{let r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=En(s,r,e+1/3),a=En(s,r,e),o=En(s,r,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function On(e,t){return n=>n>0?t:e}var kn=(e,t,n)=>e+(t-e)*n,An=(e,t,n)=>{let r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},jn=[en,Qt,cn],Mn=e=>jn.find(t=>t.test(e));function Nn(e){let t=Mn(e);if(`${e}`,!t)return!1;let n=t.parse(e);return t===cn&&(n=Dn(n)),n}var Pn=(e,t)=>{let n=Nn(e),r=Nn(t);if(!n||!r)return On(e,t);let i={...n};return e=>(i.red=An(n.red,r.red,e),i.green=An(n.green,r.green,e),i.blue=An(n.blue,r.blue,e),i.alpha=kn(n.alpha,r.alpha,e),Qt.transform(i))},Fn=new Set([`none`,`hidden`]);function In(e,t){return Fn.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function Ln(e,t){return n=>kn(e,t,n)}function Rn(e){return typeof e==`number`?Ln:typeof e==`string`?Rt(e)?On:ln.test(e)?Pn:Hn:Array.isArray(e)?zn:typeof e==`object`?ln.test(e)?Pn:Bn:On}function zn(e,t){let n=[...e],r=n.length,i=e.map((e,n)=>Rn(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function Bn(e,t){let n={...e,...t},r={};for(let i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Rn(e[i])(e[i],t[i]));return e=>{for(let t in r)n[t]=r[t](e);return n}}function Vn(e,t){let n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){let a=t.types[i],o=e.indexes[a][r[a]],s=e.values[o]??0;n[i]=s,r[a]++}return n}var Hn=(e,t)=>{let n=Tn.createTransformer(t),r=vn(e),i=vn(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Fn.has(e)&&!i.values.length||Fn.has(t)&&!r.values.length?In(e,t):Xe(zn(Vn(r,i),i.values),n):(`${e}${t}`,On(e,t))};function Un(e,t,n){return typeof e==`number`&&typeof t==`number`&&typeof n==`number`?kn(e,t,n):Rn(e)(e,t)}var Wn=e=>{let t=({timestamp:t})=>e(t);return{start:(e=!0)=>Ot.update(t,e),stop:()=>kt(t),now:()=>At.isProcessing?At.timestamp:Pt.now()}},Gn=(e,t,n=10)=>{let r=``,i=Math.max(Math.round(t/n),2);for(let t=0;t<i;t++)r+=Math.round(e(t/(i-1))*1e4)/1e4+`, `;return`linear(${r.substring(0,r.length-2)})`},Kn=2e4;function qn(e){let t=0,n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}function Jn(e,t=100,n){let r=n({...e,keyframes:[0,t]}),i=Math.min(qn(r),Kn);return{type:`keyframes`,ease:e=>r.next(i*e).value/t,duration:et(i)}}var Yn={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Xn(e,t){return e*Math.sqrt(1-t*t)}var Zn=12;function Qn(e,t,n){let r=n;for(let n=1;n<Zn;n++)r-=e(r)/t(r);return r}var $n=.001;function er({duration:e=Yn.duration,bounce:t=Yn.bounce,velocity:n=Yn.velocity,mass:r=Yn.mass}){let i,a;Yn.maxDuration;let o=1-t;o=Ue(Yn.minDamping,Yn.maxDamping,o),e=Ue(Yn.minDuration,Yn.maxDuration,et(e)),o<1?(i=t=>{let r=t*o,i=r*e,a=r-n,s=Xn(t,o),c=Math.exp(-i);return $n-a/s*c},a=t=>{let r=t*o*e,a=r*n+n,s=o**2*t**2*e,c=Math.exp(-r),l=Xn(t**2,o);return(-i(t)+$n>0?-1:1)*((a-s)*c)/l}):(i=t=>-.001+Math.exp(-t*e)*((t-n)*e+1),a=t=>Math.exp(-t*e)*((n-t)*(e*e)));let s=5/e,c=Qn(i,a,s);if(e=$e(e),isNaN(c))return{stiffness:Yn.stiffness,damping:Yn.damping,duration:e};{let t=c**2*r;return{stiffness:t,damping:o*2*Math.sqrt(r*t),duration:e}}}var tr=[`duration`,`bounce`],nr=[`stiffness`,`damping`,`mass`];function rr(e,t){return t.some(t=>e[t]!==void 0)}function ir(e){let t={velocity:Yn.velocity,stiffness:Yn.stiffness,damping:Yn.damping,mass:Yn.mass,isResolvedFromDuration:!1,...e};if(!rr(e,nr)&&rr(e,tr)){if(t.velocity=0,e.visualDuration){let n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*Ue(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:Yn.mass,stiffness:i,damping:a}}else{let n=er({...e,velocity:0});t={...t,...n,mass:Yn.mass},t.isResolvedFromDuration=!0}}return t}function ar(e=Yn.visualDuration,t=Yn.bounce){let n=typeof e==`object`?e:{visualDuration:e,keyframes:[0,1],bounce:t},{restSpeed:r,restDelta:i}=n,a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:c,damping:l,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=ir({...n,velocity:-et(n.velocity||0)}),m=f||0,h=l/(2*Math.sqrt(c*u)),g=o-a,_=et(Math.sqrt(c/u)),v=Math.abs(g)<5;r||=v?Yn.restSpeed.granular:Yn.restSpeed.default,i||=v?Yn.restDelta.granular:Yn.restDelta.default;let y,b,x,S,C,w;if(h<1)x=Xn(_,h),S=(m+h*_*g)/x,y=e=>{let t=Math.exp(-h*_*e);return o-t*(S*Math.sin(x*e)+g*Math.cos(x*e))},C=h*_*S+g*x,w=h*_*g-S*x,b=e=>Math.exp(-h*_*e)*(C*Math.sin(x*e)+w*Math.cos(x*e));else if(h===1){y=e=>o-Math.exp(-_*e)*(g+(m+_*g)*e);let e=m+_*g;b=t=>Math.exp(-_*t)*(_*e*t-m)}else{let e=_*Math.sqrt(h*h-1);y=t=>{let n=Math.exp(-h*_*t),r=Math.min(e*t,300);return o-n*((m+h*_*g)*Math.sinh(r)+e*g*Math.cosh(r))/e};let t=(m+h*_*g)/e,n=h*_*t-g*e,r=h*_*g-t*e;b=t=>{let i=Math.exp(-h*_*t),a=Math.min(e*t,300);return i*(n*Math.sinh(a)+r*Math.cosh(a))}}let T={calculatedDuration:p&&d||null,velocity:e=>$e(b(e)),next:e=>{if(!p&&h<1){let t=Math.exp(-h*_*e),n=Math.sin(x*e),a=Math.cos(x*e),c=o-t*(S*n+g*a),l=$e(t*(C*n+w*a));return s.done=Math.abs(l)<=r&&Math.abs(o-c)<=i,s.value=s.done?o:c,s}let t=y(e);if(p)s.done=e>=d;else{let n=$e(b(e));s.done=Math.abs(n)<=r&&Math.abs(o-t)<=i}return s.value=s.done?o:t,s},toString:()=>{let e=Math.min(qn(T),Kn),t=Gn(t=>T.next(e*t).value,e,30);return e+`ms `+t},toTransition:()=>{}};return T}ar.applyToOptions=e=>{let t=Jn(e,100,ar);return e.ease=t.ease,e.duration=$e(t.duration),e.type=`keyframes`,e};var or=5;function sr(e,t,n){let r=Math.max(t-or,0);return tt(n-e(r),t-r)}function cr({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:c,restDelta:l=.5,restSpeed:u}){let d=e[0],f={done:!1,value:d},p=e=>s!==void 0&&e<s||c!==void 0&&e>c,m=e=>s===void 0?c:c===void 0||Math.abs(s-e)<Math.abs(c-e)?s:c,h=n*t,g=d+h,_=o===void 0?g:o(g);_!==g&&(h=_-d);let v=e=>-h*Math.exp(-e/r),y=e=>_+v(e),b=e=>{let t=v(e),n=y(e);f.done=Math.abs(t)<=l,f.value=f.done?_:n},x,S,C=e=>{p(f.value)&&(x=e,S=ar({keyframes:[f.value,m(f.value)],velocity:sr(y,e,f.value),damping:i,stiffness:a,restDelta:l,restSpeed:u}))};return C(0),{calculatedDuration:null,next:e=>{let t=!1;return!S&&x===void 0&&(t=!0,b(e),C(e)),x!==void 0&&e>=x?S.next(e-x):(!t&&b(e),f)}}}function lr(e,t,n){let r=[],i=n||We.mix||Un,a=e.length-1;for(let n=0;n<a;n++){let a=i(e[n],e[n+1]);t&&(a=Xe(Array.isArray(t)?t[n]||Ye:t,a)),r.push(a)}return r}function ur(e,t,{clamp:n=!0,ease:r,mixer:i}={}){let a=e.length;if(t.length,a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];let o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());let s=lr(t,r,i),c=s.length,l=n=>{if(o&&n<e[0])return t[0];let r=0;if(c>1)for(;r<e.length-2&&!(n<e[r+1]);r++);let i=Ze(e[r],e[r+1],n);return s[r](i)};return n?t=>l(Ue(e[0],e[a-1],t)):l}function dr(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let i=Ze(0,t,r);e.push(kn(n,1,i))}}function fr(e){let t=[0];return dr(t,e.length-1),t}function pr(e,t){return e.map(e=>e*t)}function mr(e,t){return e.map(()=>t||vt).splice(0,e.length-1)}function hr({duration:e=300,keyframes:t,times:n,ease:r=`easeInOut`}){let i=yt(r)?r.map(Ct):Ct(r),a={done:!1,value:t[0]},o=ur(pr(n&&n.length===t.length?n:fr(t),e),t,{ease:Array.isArray(i)?i:mr(t,i)});return{calculatedDuration:e,next:t=>(a.value=o(t),a.done=t>=e,a)}}var gr=e=>e!==null;function _r(e,{repeat:t,repeatType:n=`loop`},r,i=1){let a=e.filter(gr),o=i<0||t&&n!==`loop`&&t%2==1?0:a.length-1;return!o||r===void 0?a[o]:r}var vr={decay:cr,inertia:cr,tween:hr,keyframes:hr,spring:ar};function yr(e){typeof e.type==`string`&&(e.type=vr[e.type])}var br=class{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}},xr=e=>e/100,Sr=class extends br{constructor(e){super(),this.state=`idle`,this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{let{motionValue:e}=this.options;e&&e.updatedAt!==Pt.now()&&this.tick(Pt.now()),this.isStopped=!0,this.state!==`idle`&&(this.teardown(),this.options.onStop?.())},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){let{options:e}=this;yr(e);let{type:t=hr,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=e,{keyframes:o}=e,s=t||hr;s!==hr&&typeof o[0]!=`number`&&(this.mixKeyframes=Xe(xr,Un(o[0],o[1])),o=[0,100]);let c=s({...e,keyframes:o});i===`mirror`&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=qn(c));let{calculatedDuration:l}=c;this.calculatedDuration=l,this.resolvedDuration=l+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=c}updateTime(e){let t=Math.round(e-this.startTime)*this.playbackSpeed;this.currentTime=this.holdTime===null?t:this.holdTime}tick(e,t=!1){let{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:s}=this;if(this.startTime===null)return n.next(0);let{delay:c=0,keyframes:l,repeat:u,repeatType:d,repeatDelay:f,type:p,onUpdate:m,finalKeyframe:h}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let g=this.currentTime-c*(this.playbackSpeed>=0?1:-1),_=this.playbackSpeed>=0?g<0:g>r;this.currentTime=Math.max(g,0),this.state===`finished`&&this.holdTime===null&&(this.currentTime=r);let v=this.currentTime,y=n;if(u){let e=Math.min(this.currentTime,r)/o,t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),n===1&&t--,t=Math.min(t,u+1),t%2&&(d===`reverse`?(n=1-n,f&&(n-=f/o)):d===`mirror`&&(y=a)),v=Ue(0,1,n)*o}let b;_?(this.delayState.value=l[0],b=this.delayState):b=y.next(v),i&&!_&&(b.value=i(b.value));let{done:x}=b;!_&&s!==null&&(x=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);let S=this.holdTime===null&&(this.state===`finished`||this.state===`running`&&x);return S&&p!==cr&&(b.value=_r(l,this.options,h,this.speed)),m&&m(b.value),S&&this.finish(),b}then(e,t){return this.finished.then(e,t)}get duration(){return et(this.calculatedDuration)}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+et(e)}get time(){return et(this.currentTime)}set time(e){e=$e(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state=`paused`,this.holdTime=e,this.tick(e))}getGeneratorVelocity(){let e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);let t=this.generator.next(e).value;return sr(e=>this.generator.next(e).value,e,t)}get speed(){return this.playbackSpeed}set speed(e){let t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(Pt.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=et(this.currentTime))}play(){if(this.isStopped)return;let{driver:e=Wn,startTime:t}=this.options;this.driver||=e(e=>this.tick(e)),this.options.onPlay?.();let n=this.driver.now();this.state===`finished`?(this.updateFinished(),this.startTime=n):this.holdTime===null?this.startTime||=t??n:this.startTime=n-this.holdTime,this.state===`finished`&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state=`running`,this.driver.start()}pause(){this.state=`paused`,this.updateTime(Pt.now()),this.holdTime=this.currentTime}complete(){this.state!==`running`&&this.play(),this.state=`finished`,this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state=`finished`,this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state=`idle`,this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&=(this.driver.stop(),void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type=`keyframes`,this.options.ease=`linear`,this.initAnimation()),this.driver?.stop(),e.observe(this)}};function Cr(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}var wr=e=>e*180/Math.PI,Tr=e=>Dr(wr(Math.atan2(e[1],e[0]))),Er={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Tr,rotateZ:Tr,skewX:e=>wr(Math.atan(e[1])),skewY:e=>wr(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Dr=e=>(e%=360,e<0&&(e+=360),e),Or=Tr,kr=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Ar=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),jr={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:kr,scaleY:Ar,scale:e=>(kr(e)+Ar(e))/2,rotateX:e=>Dr(wr(Math.atan2(e[6],e[5]))),rotateY:e=>Dr(wr(Math.atan2(-e[2],e[0]))),rotateZ:Or,rotate:Or,skewX:e=>wr(Math.atan(e[4])),skewY:e=>wr(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Mr(e){return+!!e.includes(`scale`)}function Nr(e,t){if(!e||e===`none`)return Mr(t);let n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),r,i;if(n)r=jr,i=n;else{let t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=Er,i=t}if(!i)return Mr(t);let a=r[t],o=i[1].split(`,`).map(Fr);return typeof a==`function`?a(o):o[a]}var Pr=(e,t)=>{let{transform:n=`none`}=getComputedStyle(e);return Nr(n,t)};function Fr(e){return parseFloat(e.trim())}var Ir=[`transformPerspective`,`x`,`y`,`z`,`translateX`,`translateY`,`translateZ`,`scale`,`scaleX`,`scaleY`,`rotate`,`rotateX`,`rotateY`,`rotateZ`,`skew`,`skewX`,`skewY`],Lr=new Set([...Ir,`pathRotation`]),Rr=e=>e===Vt||e===B,zr=new Set([`x`,`y`,`z`]),Br=Ir.filter(e=>!zr.has(e));function Vr(e){let t=[];return Br.forEach(n=>{let r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(+!!n.startsWith(`scale`)))}),t}var Hr={width:({x:e},{paddingLeft:t=`0`,paddingRight:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},height:({y:e},{paddingTop:t=`0`,paddingBottom:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>Nr(t,`x`),y:(e,{transform:t})=>Nr(t,`y`)};Hr.translateX=Hr.x,Hr.translateY=Hr.y;var Ur=new Set,Wr=!1,Gr=!1,Kr=!1;function qr(){if(Gr){let e=Array.from(Ur).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;t.forEach(e=>{let t=Vr(e);t.length&&(n.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=n.get(e);t&&t.forEach(([t,n])=>{e.getValue(t)?.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{e.suspendedScrollY!==void 0&&window.scrollTo(0,e.suspendedScrollY)})}Gr=!1,Wr=!1,Ur.forEach(e=>e.complete(Kr)),Ur.clear()}function Jr(){Ur.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Gr=!0)})}function Yr(){Kr=!0,Jr(),qr(),Kr=!1}var Xr=class{constructor(e,t,n,r,i,a=!1){this.state=`pending`,this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.state=`scheduled`,this.isAsync?(Ur.add(this),Wr||(Wr=!0,Ot.read(Jr),Ot.resolveKeyframes(qr))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(e[0]===null){let i=r?.get(),a=e[e.length-1];if(i!==void 0)e[0]=i;else if(n&&t){let r=n.readValue(t,a);r!=null&&(e[0]=r)}e[0]===void 0&&(e[0]=a),r&&i===void 0&&r.set(e[0])}Cr(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state=`complete`,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Ur.delete(this)}cancel(){this.state===`scheduled`&&(Ur.delete(this),this.state=`pending`)}resume(){this.state===`pending`&&this.scheduleResolve()}},Zr=e=>e.startsWith(`--`);function Qr(e,t,n){Zr(t)?e.style.setProperty(t,n):e.style[t]=n}var $r={};function ei(e,t){let n=Je(e);return()=>$r[t]??n()}var ti=ei(()=>window.ScrollTimeline!==void 0,`scrollTimeline`),ni=ei(()=>{try{document.createElement(`div`).animate({opacity:0},{easing:`linear(0, 1)`})}catch{return!1}return!0},`linearEasing`),ri=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,ii={linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`,circIn:ri([0,.65,.55,1]),circOut:ri([.55,0,1,.45]),backIn:ri([.31,.01,.66,-.59]),backOut:ri([.33,1.53,.69,.99])};function ai(e,t){if(e)return typeof e==`function`?ni()?Gn(e,t):`ease-out`:bt(e)?ri(e):Array.isArray(e)?e.map(e=>ai(e,t)||ii.easeOut):ii[e]}function oi(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o=`loop`,ease:s=`easeOut`,times:c}={},l=void 0){let u={[t]:n};c&&(u.offset=c);let d=ai(s,i);Array.isArray(d)&&(u.easing=d);let f={delay:r,duration:i,easing:Array.isArray(d)?`linear`:d,fill:`both`,iterations:a+1,direction:o===`reverse`?`alternate`:`normal`};return l&&(f.pseudoElement=l),e.animate(u,f)}function si(e){return typeof e==`function`&&`applyToOptions`in e}function ci({type:e,...t}){return si(e)&&ni()?e.applyToOptions(t):(t.duration??=300,t.ease??=`easeOut`,t)}var li=class extends br{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=!!i,this.allowFlatten=a,this.options=e,e.type;let c=ci(e);this.animation=oi(t,n,r,c,i),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){let e=_r(r,this.options,o,this.speed);this.updateMotionValue&&this.updateMotionValue(e),Qr(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state===`finished`&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;e!==`idle`&&e!==`finished`&&(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){let e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){let e=this.animation.effect?.getComputedTiming?.().duration||0;return et(Number(e))}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+et(e)}get time(){return et(Number(this.animation.currentTime)||0)}set time(e){let t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=$e(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime===null?this.animation.playState:`finished`}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:n,observe:r}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:`linear`}),this.animation.onfinish=null,e&&ti()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),n&&(this.animation.rangeEnd=n),Ye):r(this)}},ui={anticipate:ft,backInOut:dt,circInOut:ht};function di(e){return e in ui}function fi(e){typeof e.ease==`string`&&di(e.ease)&&(e.ease=ui[e.ease])}var pi=10,mi=class extends li{constructor(e){fi(e),yr(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){let{motionValue:t,onUpdate:n,onComplete:r,element:i,...a}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}let o=new Sr({...a,autoplay:!1}),s=Math.max(pi,Pt.now()-this.startTime),c=Ue(0,pi,s-pi),l=o.sample(s).value,{name:u}=this.options;i&&u&&Qr(i,u,l),t.setWithVelocity(o.sample(Math.max(0,s-c)).value,l,c),o.stop()}},hi=(e,t)=>t!==`zIndex`&&!!(typeof e==`number`||Array.isArray(e)||typeof e==`string`&&(Tn.test(e)||e===`0`)&&!e.startsWith(`url(`));function gi(e){let t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function _i(e,t,n,r){let i=e[0];if(i===null)return!1;if(t===`display`||t===`visibility`)return!0;let a=e[e.length-1],o=hi(i,t),s=hi(a,t);return`${t}${i}${a}${o?a:i}`,!o||!s?!1:gi(e)||(n===`spring`||si(n))&&r}function vi(e){e.duration=0,e.type=`keyframes`}var yi=new Set([`opacity`,`clipPath`,`filter`,`transform`,`backgroundColor`]),bi=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function xi(e){for(let t=0;t<e.length;t++)if(typeof e[t]==`string`&&bi.test(e[t]))return!0;return!1}var Si=new Set([`color`,`backgroundColor`,`outlineColor`,`fill`,`stroke`,`borderColor`,`borderTopColor`,`borderRightColor`,`borderBottomColor`,`borderLeftColor`]),Ci=Je(()=>Object.hasOwnProperty.call(Element.prototype,`animate`));function wi(e){let{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o,keyframes:s}=e,c=t?.owner?.current;if(!(c instanceof HTMLElement)&&!(c instanceof SVGElement))return!1;let{onUpdate:l,transformTemplate:u}=t.owner.getProps();return Ci()&&n&&(yi.has(n)||Si.has(n)&&xi(s))&&(n!==`transform`||!u)&&!l&&!r&&i!==`mirror`&&a!==0&&o!==`inertia`}var Ti=40,Ei=class extends br{constructor({autoplay:e=!0,delay:t=0,type:n=`keyframes`,repeat:r=0,repeatDelay:i=0,repeatType:a=`loop`,keyframes:o,name:s,motionValue:c,element:l,...u}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=Pt.now();let d={autoplay:e,delay:t,type:n,repeat:r,repeatDelay:i,repeatType:a,name:s,motionValue:c,element:l,...u},f=l?.KeyframeResolver||Xr;this.keyframeResolver=new f(o,(e,t,n)=>this.onKeyframesResolved(e,t,d,!n),s,c,l),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;let{name:i,type:a,velocity:o,delay:s,isHandoff:c,onUpdate:l}=n;this.resolvedAt=Pt.now();let u=!0;_i(e,i,a,o)||(u=!1,(We.instantAnimations||!s)&&l?.(_r(e,n,t)),e[0]=e[e.length-1],vi(n),n.repeat=0);let d={startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>Ti?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},f=u&&!c&&wi(d),p=d.motionValue?.owner?.current,m;if(f)try{m=new mi({...d,element:p})}catch{m=new Sr(d)}else m=new Sr(d);m.finished.then(()=>{this.notifyFinished()}).catch(Ye),this.pendingTimeline&&=(this.stopTimeline=m.attachTimeline(this.pendingTimeline),void 0),this._animation=m}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),Yr()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}};function Di(e,t,n,r=0,i=1){let a=Array.from(e).sort((e,t)=>e.sortNodePosition(t)).indexOf(t),o=e.size,s=(o-1)*r;return typeof n==`function`?n(a,o):i===1?a*r:s-a*r}var Oi=30,ki=e=>!isNaN(parseFloat(e)),Ai={current:void 0},ji=class{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=Pt.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Pt.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=ki(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on(`change`,e)}on(e,t){this.events[e]||(this.events[e]=new Qe);let n=this.events[e].add(t);return e===`change`?()=>{n(),Ot.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||=new Set,this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return Ai.current&&Ai.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let e=Pt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Oi)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,Oi);return tt(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function Mi(e,t){return new ji(e,t)}function V(e,t){if(e?.inherit&&t){let{inherit:n,...r}=e;return{...t,...r}}return e}function Ni(e,t){let n=e?.[t]??e?.default??e;return n===e?n:V(n,e)}var Pi={type:`spring`,stiffness:500,damping:25,restSpeed:10},Fi=e=>({type:`spring`,stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Ii={type:`keyframes`,duration:.8},Li={type:`keyframes`,ease:[.25,.1,.35,1],duration:.3},Ri=(e,{keyframes:t})=>t.length>2?Ii:Lr.has(e)?e.startsWith(`scale`)?Fi(t[1]):Pi:Li,zi=new Set([`when`,`delay`,`delayChildren`,`staggerChildren`,`staggerDirection`,`repeat`,`repeatType`,`repeatDelay`,`from`,`elapsed`]);function Bi(e){for(let t in e)if(!zi.has(t))return!0;return!1}var Vi=(e,t,n,r={},i,a)=>o=>{let s=Ni(r,e)||{},c=s.delay||r.delay||0,{elapsed:l=0}=r;l-=$e(c);let u={keyframes:Array.isArray(n)?n:[null,n],ease:`easeOut`,velocity:t.getVelocity(),...s,delay:-l,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};Bi(s)||Object.assign(u,Ri(e,u)),u.duration&&=$e(u.duration),u.repeatDelay&&=$e(u.repeatDelay),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(vi(u),u.delay===0&&(d=!0)),(We.instantAnimations||We.skipAnimations||i?.shouldSkipAnimations||s.skipAnimations)&&(d=!0,vi(u),u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!a&&t.get()!==void 0){let e=_r(u.keyframes,s);if(e!==void 0){Ot.update(()=>{u.onUpdate(e),u.onComplete()});return}}return s.isSync?new Sr(u):new Ei(u)},Hi=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Ui(e){let t=Hi.exec(e);if(!t)return[,];let[,n,r,i]=t;return[`--${n??r}`,i]}function Wi(e,t,n=1){`${e}`;let[r,i]=Ui(e);if(!r)return;let a=window.getComputedStyle(t).getPropertyValue(r);if(a){let e=a.trim();return Ge(e)?parseFloat(e):e}return Rt(i)?Wi(i,t,n+1):i}function Gi(e){let t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function Ki(e,t,n,r){if(typeof t==`function`){let[i,a]=Gi(r);t=t(n===void 0?e.custom:n,i,a)}if(typeof t==`string`&&(t=e.variants&&e.variants[t]),typeof t==`function`){let[i,a]=Gi(r);t=t(n===void 0?e.custom:n,i,a)}return t}function qi(e,t,n){let r=e.getProps();return Ki(r,t,n===void 0?r.custom:n,e)}var Ji=new Set([`width`,`height`,`top`,`left`,`right`,`bottom`,...Ir]),Yi=e=>Array.isArray(e);function Xi(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Mi(n))}function Zi(e){return Yi(e)?e[e.length-1]||0:e}function Qi(e,t){let{transitionEnd:n={},transition:r={},...i}=qi(e,t)||{};i={...i,...n};for(let t in i)Xi(e,t,Zi(i[t]))}var $i=e=>!!(e&&e.getVelocity);function ea(e){return!!($i(e)&&e.add)}function ta(e,t){let n=e.getValue(`willChange`);if(ea(n))return n.add(t);if(!n&&We.WillChange){let n=new We.WillChange(`auto`);e.addValue(`willChange`,n),n.add(t)}}function na(e){return e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}var ra=`data-`+na(`framerAppearId`);function ia(e){return e.props[ra]}function aa({protectedKeys:e,needsAnimating:t},n){let r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function oa(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a,transitionEnd:o,...s}=t,c=e.getDefaultTransition();a=a?V(a,c):c;let l=a?.reduceMotion,u=a?.skipAnimations;r&&(a=r);let d=[],f=i&&e.animationState&&e.animationState.getState()[i],p=a?.path;p&&p.animateVisualElement(e,s,a,n,d);for(let t in s){let r=e.getValue(t,e.latestValues[t]??null),i=s[t];if(i===void 0||f&&aa(f,t))continue;let o={delay:n,...Ni(a||{},t)};u&&(o.skipAnimations=!0);let c=r.get();if(c!==void 0&&!r.isAnimating()&&!Array.isArray(i)&&i===c&&!o.velocity){Ot.update(()=>r.set(i));continue}let p=!1;if(window.MotionHandoffAnimation){let n=ia(e);if(n){let e=window.MotionHandoffAnimation(n,t,Ot);e!==null&&(o.startTime=e,p=!0)}}ta(e,t);let m=l??e.shouldReduceMotion;r.start(Vi(t,r,i,m&&Ji.has(t)?{type:!1}:o,e,p));let h=r.animation;h&&d.push(h)}if(o){let t=()=>Ot.update(()=>{o&&Qi(e,o)});d.length?Promise.all(d).then(t):t()}return d}function sa(e,t,n={}){let r=qi(e,t,n.type===`exit`?e.presenceContext?.custom:void 0),{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);let a=r?()=>Promise.all(oa(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(r=0)=>{let{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return ca(e,t,r,a,o,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){let[e,t]=s===`beforeChildren`?[a,o]:[o,a];return e().then(()=>t())}return Promise.all([a(),o(n.delay)])}function ca(e,t,n=0,r=0,i=0,a=1,o){let s=[];for(let c of e.variantChildren)c.notify(`AnimationStart`,t),s.push(sa(c,t,{...o,delay:n+(typeof r==`function`?0:r)+Di(e.variantChildren,c,r,i,a)}).then(()=>c.notify(`AnimationComplete`,t)));return Promise.all(s)}function la(e,t,n={}){e.notify(`AnimationStart`,t);let r;if(Array.isArray(t)){let i=t.map(t=>sa(e,t,n));r=Promise.all(i)}else if(typeof t==`string`)r=sa(e,t,n);else{let i=typeof t==`function`?qi(e,t,n.custom):t;r=Promise.all(oa(e,i,n))}return r.then(()=>{e.notify(`AnimationComplete`,t)})}var ua={test:e=>e===`auto`,parse:e=>e},da=e=>t=>t.test(e),fa=[Vt,B,rn,nn,on,an,ua],pa=e=>fa.find(da(e));function ma(e){return typeof e==`number`?e===0:e===null||e===`none`||e===`0`||qe(e)}var ha=new Set([`brightness`,`contrast`,`saturate`,`opacity`]);function ga(e){let[t,n]=e.slice(0,-1).split(`(`);if(t===`drop-shadow`)return e;let[r]=n.match(Gt)||[];if(!r)return e;let i=n.replace(r,``),a=+!!ha.has(t);return r!==n&&(a*=100),t+`(`+a+i+`)`}var _a=/\b([a-z-]*)\(.*?\)/gu,va={...Tn,getAnimatableNone:e=>{let t=e.match(_a);return t?t.map(ga).join(` `):e}},ya={...Tn,getAnimatableNone:e=>{let t=Tn.parse(e);return Tn.createTransformer(e)(t.map(e=>typeof e==`number`?0:typeof e==`object`?{...e,alpha:1}:e))}},ba={...Vt,transform:Math.round},xa={borderWidth:B,borderTopWidth:B,borderRightWidth:B,borderBottomWidth:B,borderLeftWidth:B,borderRadius:B,borderTopLeftRadius:B,borderTopRightRadius:B,borderBottomRightRadius:B,borderBottomLeftRadius:B,width:B,maxWidth:B,height:B,maxHeight:B,top:B,right:B,bottom:B,left:B,inset:B,insetBlock:B,insetBlockStart:B,insetBlockEnd:B,insetInline:B,insetInlineStart:B,insetInlineEnd:B,padding:B,paddingTop:B,paddingRight:B,paddingBottom:B,paddingLeft:B,paddingBlock:B,paddingBlockStart:B,paddingBlockEnd:B,paddingInline:B,paddingInlineStart:B,paddingInlineEnd:B,margin:B,marginTop:B,marginRight:B,marginBottom:B,marginLeft:B,marginBlock:B,marginBlockStart:B,marginBlockEnd:B,marginInline:B,marginInlineStart:B,marginInlineEnd:B,fontSize:B,backgroundPositionX:B,backgroundPositionY:B,rotate:nn,pathRotation:nn,rotateX:nn,rotateY:nn,rotateZ:nn,scale:Ut,scaleX:Ut,scaleY:Ut,scaleZ:Ut,skew:nn,skewX:nn,skewY:nn,distance:B,translateX:B,translateY:B,translateZ:B,x:B,y:B,z:B,perspective:B,transformPerspective:B,opacity:Ht,originX:sn,originY:sn,originZ:B,zIndex:ba,fillOpacity:Ht,strokeOpacity:Ht,numOctaves:ba},Sa={...xa,color:ln,backgroundColor:ln,outlineColor:ln,fill:ln,stroke:ln,borderColor:ln,borderTopColor:ln,borderRightColor:ln,borderBottomColor:ln,borderLeftColor:ln,filter:va,WebkitFilter:va,mask:ya,WebkitMask:ya},Ca=e=>Sa[e],wa=new Set([va,ya]);function Ta(e,t){let n=Ca(e);return wa.has(n)||(n=Tn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}var Ea=new Set([`auto`,`none`,`0`]);function Da(e,t,n){let r=0,i;for(;r<e.length&&!i;){let t=e[r];typeof t==`string`&&!Ea.has(t)&&vn(t).values.length&&(i=e[r]),r++}if(i&&n)for(let r of t)e[r]=Ta(n,i)}var Oa=class extends Xr{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let n=0;n<e.length;n++){let r=e[n];if(typeof r==`string`&&(r=r.trim(),Rt(r))){let i=Wi(r,t.current);i!==void 0&&(e[n]=i),n===e.length-1&&(this.finalKeyframe=r)}}if(this.resolveNoneKeyframes(),!Ji.has(n)||e.length!==2)return;let[r,i]=e,a=pa(r),o=pa(i);if(Bt(r)!==Bt(i)&&Hr[n]){this.needsMeasurement=!0;return}if(a!==o){if(Rr(a)&&Rr(o))for(let t=0;t<e.length;t++){let n=e[t];typeof n==`string`&&(e[t]=parseFloat(n))}else Hr[n]&&(this.needsMeasurement=!0)}}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,n=[];for(let t=0;t<e.length;t++)(e[t]===null||ma(e[t]))&&n.push(t);n.length&&Da(e,n,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;n===`height`&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Hr[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;let r=t[t.length-1];r!==void 0&&e.getValue(n,r).jump(r,!1)}measureEndState(){let{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;let r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);let i=n.length-1,a=n[i];n[i]=Hr[t](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,n])=>{e.getValue(t).set(n)}),this.resolveNoneKeyframes()}},ka=[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomRightRadius`,`borderBottomLeftRadius`];function Aa(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e==`string`){let r=document;t&&(r=t.current);let i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(e=>e!=null)}var ja=(e,t)=>t&&typeof e==`number`?t.transform(e):e;function Ma(e){return Ke(e)&&`offsetHeight`in e&&!(`ownerSVGElement`in e)}var{schedule:Na,cancel:Pa}=Dt(queueMicrotask,!1),Fa={x:!1,y:!1};function Ia(){return Fa.x||Fa.y}function La(e){return e===`x`||e===`y`?Fa[e]?null:(Fa[e]=!0,()=>{Fa[e]=!1}):Fa.x||Fa.y?null:(Fa.x=Fa.y=!0,()=>{Fa.x=Fa.y=!1})}function Ra(e,t){let n=Aa(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function za(e){return!(e.pointerType===`touch`||Ia())}function Ba(e,t,n={}){let[r,i,a]=Ra(e,n);return r.forEach(e=>{let n=!1,r=!1,a,o=()=>{e.removeEventListener(`pointerleave`,u)},s=e=>{a&&=(a(e),void 0),o()},c=e=>{n=!1,window.removeEventListener(`pointerup`,c),window.removeEventListener(`pointercancel`,c),r&&(r=!1,s(e))},l=()=>{n=!0,window.addEventListener(`pointerup`,c,i),window.addEventListener(`pointercancel`,c,i)},u=e=>{if(e.pointerType!==`touch`){if(n){r=!0;return}s(e)}};e.addEventListener(`pointerenter`,n=>{if(!za(n))return;r=!1;let o=t(e,n);typeof o==`function`&&(a=o,e.addEventListener(`pointerleave`,u,i))},i),e.addEventListener(`pointerdown`,l,i)}),a}var Va=(e,t)=>t?e===t||Va(e,t.parentElement):!1,Ha=e=>e.pointerType===`mouse`?typeof e.button!=`number`||e.button<=0:e.isPrimary!==!1,Ua=new Set([`BUTTON`,`INPUT`,`SELECT`,`TEXTAREA`,`A`]);function Wa(e){return Ua.has(e.tagName)||e.isContentEditable===!0}var Ga=new Set([`INPUT`,`SELECT`,`TEXTAREA`]);function Ka(e){return Ga.has(e.tagName)||e.isContentEditable===!0}var qa=new WeakSet;function Ja(e){return t=>{t.key===`Enter`&&e(t)}}function Ya(e,t){e.dispatchEvent(new PointerEvent(`pointer`+t,{isPrimary:!0,bubbles:!0}))}var Xa=(e,t)=>{let n=e.currentTarget;if(!n)return;let r=Ja(()=>{if(qa.has(n))return;Ya(n,`down`);let e=Ja(()=>{Ya(n,`up`)});n.addEventListener(`keyup`,e,t),n.addEventListener(`blur`,()=>Ya(n,`cancel`),t)});n.addEventListener(`keydown`,r,t),n.addEventListener(`blur`,()=>n.removeEventListener(`keydown`,r),t)};function Za(e){return Ha(e)&&!Ia()}var Qa=new WeakSet;function $a(e,t,n={}){let[r,i,a]=Ra(e,n),o=e=>{let r=e.currentTarget;if(!Za(e)||Qa.has(e))return;qa.add(r),n.stopPropagation&&Qa.add(e);let a=t(r,e),o={...i,capture:!0},s=(e,t)=>{window.removeEventListener(`pointerup`,c,o),window.removeEventListener(`pointercancel`,l,o),qa.has(r)&&qa.delete(r),Za(e)&&typeof a==`function`&&a(e,{success:t})},c=e=>{s(e,r===window||r===document||n.useGlobalTarget||Va(r,e.target))},l=e=>{s(e,!1)};window.addEventListener(`pointerup`,c,o),window.addEventListener(`pointercancel`,l,o)};return r.forEach(e=>{(n.useGlobalTarget?window:e).addEventListener(`pointerdown`,o,i),Ma(e)&&(e.addEventListener(`focus`,e=>Xa(e,i)),!Wa(e)&&!e.hasAttribute(`tabindex`)&&(e.tabIndex=0))}),a}function eo(e){return Ke(e)&&`ownerSVGElement`in e}var to=new WeakMap,no,ro=(e,t,n)=>(r,i)=>i&&i[0]?i[0][e+`Size`]:eo(r)&&`getBBox`in r?r.getBBox()[t]:r[n],io=ro(`inline`,`width`,`offsetWidth`),ao=ro(`block`,`height`,`offsetHeight`);function oo({target:e,borderBoxSize:t}){to.get(e)?.forEach(n=>{n(e,{get width(){return io(e,t)},get height(){return ao(e,t)}})})}function so(e){e.forEach(oo)}function co(){typeof ResizeObserver>`u`||(no=new ResizeObserver(so))}function lo(e,t){no||co();let n=Aa(e);return n.forEach(e=>{let n=to.get(e);n||(n=new Set,to.set(e,n)),n.add(t),no?.observe(e)}),()=>{n.forEach(e=>{let n=to.get(e);n?.delete(t),n?.size||no?.unobserve(e)})}}var uo=new Set,H;function fo(){H=()=>{let e={get width(){return window.innerWidth},get height(){return window.innerHeight}};uo.forEach(t=>t(e))},window.addEventListener(`resize`,H)}function po(e){return uo.add(e),H||fo(),()=>{uo.delete(e),!uo.size&&typeof H==`function`&&(window.removeEventListener(`resize`,H),H=void 0)}}function mo(e,t){return typeof e==`function`?po(e):lo(e,t)}var ho={value:null,addProjectionMetrics:null};function go(e){return eo(e)&&e.tagName===`svg`}var _o=[...fa,ln,Tn],vo=e=>_o.find(da(e)),yo=()=>({translate:0,scale:1,origin:0,originPoint:0}),bo=()=>({x:yo(),y:yo()}),xo=()=>({min:0,max:0}),So=()=>({x:xo(),y:xo()}),Co=new WeakMap;function wo(e){return typeof e==`object`&&!!e&&typeof e.start==`function`}function To(e){return typeof e==`string`||Array.isArray(e)}var Eo=[`animate`,`whileInView`,`whileFocus`,`whileHover`,`whileTap`,`whileDrag`,`exit`],Do=[`initial`,...Eo];function Oo(e){return wo(e.animate)||Do.some(t=>To(e[t]))}function ko(e){return!!(Oo(e)||e.variants)}function Ao(e,t,n){for(let r in t){let i=t[r],a=n[r];if($i(i))e.addValue(r,i);else if($i(a))e.addValue(r,Mi(i,{owner:e}));else if(a!==i){if(e.hasValue(r)){let t=e.getValue(r);t.liveStyle===!0?t.jump(i):t.hasAnimated||t.set(i)}else{let t=e.getStaticValue(r);e.addValue(r,Mi(t===void 0?i:t,{owner:e}))}}}for(let r in n)t[r]===void 0&&e.removeValue(r);return t}var jo={current:null},Mo={current:!1},No=typeof window<`u`;function Po(){if(Mo.current=!0,No){if(window.matchMedia){let e=window.matchMedia(`(prefers-reduced-motion)`),t=()=>jo.current=e.matches;e.addEventListener(`change`,t),t()}else jo.current=!1}}var Fo=[`AnimationStart`,`AnimationComplete`,`Update`,`BeforeLayoutMeasure`,`LayoutMeasure`,`LayoutAnimationStart`,`LayoutAnimationComplete`],Io={};function Lo(e){Io=e}function Ro(){return Io}var zo=class{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,skipAnimations:i,blockInitialAnimation:a,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Xr,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify(`Update`,this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=Pt.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,Ot.render(this.render,!1,!0))};let{latestValues:c,renderState:l}=o;this.latestValues=c,this.baseTarget={...c},this.initialValues=t.initial?{...c}:{},this.renderState=l,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=i,this.options=s,this.blockInitialAnimation=!!a,this.isControllingVariants=Oo(t),this.isVariantNode=ko(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:u,...d}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in d){let t=d[e];c[e]!==void 0&&$i(t)&&t.set(c[e])}}mount(e){if(this.hasBeenMounted)for(let e in this.initialValues)this.values.get(e)?.jump(this.initialValues[e]),this.latestValues[e]=this.initialValues[e];this.current=e,Co.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),this.reducedMotionConfig===`never`?this.shouldReduceMotion=!1:this.reducedMotionConfig===`always`?this.shouldReduceMotion=!0:(Mo.current||Po(),this.shouldReduceMotion=jo.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),kt(this.notifyUpdate),kt(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(let e in this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??=new Set,this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&yi.has(e)&&this.current instanceof HTMLElement){let{factory:n,keyframes:r,times:i,ease:a,duration:o}=t.accelerate,s=new li({element:this.current,name:e,keyframes:r,times:i,ease:a,duration:$e(o)}),c=n(s);this.valueSubscriptions.set(e,()=>{c(),s.cancel()});return}let n=Lr.has(e);n&&this.onBindTransform&&this.onBindTransform();let r=t.on(`change`,t=>{this.latestValues[e]=t,this.props.onUpdate&&Ot.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()}),i;typeof window<`u`&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i&&i()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e=`animation`;for(e in Io){let t=Io[e];if(!t)continue;let{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):So()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<Fo.length;t++){let n=Fo[t];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);let r=e[`on`+n];r&&(this.propEventSubscriptions[n]=this.on(n,r))}this.prevMotionValues=Ao(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&t!==void 0&&(n=Mi(t===null?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n==`string`&&(Ge(n)||qe(n))?n=parseFloat(n):!vo(n)&&Tn.test(t)&&(n=Ta(e,t)),this.setBaseTarget(e,$i(n)?n.get():n)),$i(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){let{initial:t}=this.props,n;if(typeof t==`string`||typeof t==`object`){let r=Ki(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&n!==void 0)return n;let r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!$i(r)?r:this.initialValues[e]!==void 0&&n===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new Qe),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){Na.render(this.render)}},Bo=class extends zo{constructor(){super(...arguments),this.KeyframeResolver=Oa}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){let n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;$i(e)&&(this.childSubscription=e.on(`change`,e=>{this.current&&(this.current.textContent=`${e}`)}))}},Vo=class{constructor(e){this.isMounted=!1,this.node=e}update(){}};function Ho({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function Uo({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function Wo(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Go(e){return e===void 0||e===1}function Ko({scale:e,scaleX:t,scaleY:n}){return!Go(e)||!Go(t)||!Go(n)}function qo(e){return Ko(e)||Jo(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Jo(e){return Yo(e.x)||Yo(e.y)}function Yo(e){return e&&e!==`0%`}function Xo(e,t,n){return n+t*(e-n)}function Zo(e,t,n,r,i){return i!==void 0&&(e=Xo(e,i,r)),Xo(e,n,r)+t}function Qo(e,t=0,n=1,r,i){e.min=Zo(e.min,t,n,r,i),e.max=Zo(e.max,t,n,r,i)}function $o(e,{x:t,y:n}){Qo(e.x,t.translate,t.scale,t.originPoint),Qo(e.y,n.translate,n.scale,n.originPoint)}var es=.999999999999,ts=1.0000000000001;function ns(e,t,n,r=!1){let i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;let{visualElement:i}=a.options;i&&i.props.style&&i.props.style.display===`contents`||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&(rs(e.x,-a.scroll.offset.x),rs(e.y,-a.scroll.offset.y)),o&&(t.x*=o.x.scale,t.y*=o.y.scale,$o(e,o)),r&&qo(a.latestValues)&&os(e,a.latestValues,a.layout?.layoutBox))}t.x<ts&&t.x>es&&(t.x=1),t.y<ts&&t.y>es&&(t.y=1)}function rs(e,t){e.min+=t,e.max+=t}function is(e,t,n,r,i=.5){Qo(e,t,n,kn(e.min,e.max,i),r)}function as(e,t){return typeof e==`string`?parseFloat(e)/100*(t.max-t.min):e}function os(e,t,n){let r=n??e;is(e.x,as(t.x,r.x),t.scaleX,t.scale,t.originX),is(e.y,as(t.y,r.y),t.scaleY,t.scale,t.originY)}function ss(e,t){return Ho(Wo(e.getBoundingClientRect(),t))}function cs(e,t,n){let r=ss(e,n),{scroll:i}=t;return i&&(rs(r.x,i.offset.x),rs(r.y,i.offset.y)),r}var ls={x:`translateX`,y:`translateY`,z:`translateZ`,transformPerspective:`perspective`},us=Ir.length;function ds(e,t,n){let r=``,i=!0;for(let a=0;a<us;a++){let o=Ir[a],s=e[o];if(s===void 0)continue;let c=!0;if(typeof s==`number`)c=s===+!!o.startsWith(`scale`);else{let e=parseFloat(s);c=o.startsWith(`scale`)?e===1:e===0}if(!c||n){let e=ja(s,xa[o]);if(!c){i=!1;let t=ls[o]||o;r+=`${t}(${e}) `}n&&(t[o]=e)}}let a=e.pathRotation;return a&&(i=!1,r+=`rotate(${ja(a,xa.pathRotation)}) `),r=r.trim(),n?r=n(t,i?``:r):i&&(r=`none`),r}function fs(e,t,n){let{style:r,vars:i,transformOrigin:a}=e,o=!1,s=!1;for(let e in t){let n=t[e];if(Lr.has(e)){o=!0;continue}if(It(e)){i[e]=n;continue}{let t=ja(n,xa[e]);e.startsWith(`origin`)?(s=!0,a[e]=t):r[e]=t}}if(t.transform||(o||n?r.transform=ds(t,e.transform,n):r.transform&&=`none`),s){let{originX:e=`50%`,originY:t=`50%`,originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}function ps(e,{style:t,vars:n},r,i){let a=e.style,o;for(o in t)a[o]=t[o];for(o in i?.applyProjectionStyles(a,r),n)a.setProperty(o,n[o])}function ms(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}var hs={correct:(e,t)=>{if(!t.target)return e;if(typeof e==`string`){if(B.test(e))e=parseFloat(e);else return e}return`${ms(e,t.target.x)}% ${ms(e,t.target.y)}%`}},gs={correct:(e,{treeScale:t,projectionDelta:n})=>{let r=e,i=Tn.parse(e);if(i.length>5)return r;let a=Tn.createTransformer(e),o=typeof i[0]==`number`?0:1,s=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=c;let l=kn(s,c,.5);return typeof i[2+o]==`number`&&(i[2+o]/=l),typeof i[3+o]==`number`&&(i[3+o]/=l),a(i)}},_s={borderRadius:{...hs,applyTo:[...ka]},borderTopLeftRadius:hs,borderTopRightRadius:hs,borderBottomLeftRadius:hs,borderBottomRightRadius:hs,boxShadow:gs};function vs(e,{layout:t,layoutId:n}){return Lr.has(e)||e.startsWith(`origin`)||(t||n!==void 0)&&(!!_s[e]||e===`opacity`)}function ys(e,t,n){let r=e.style,i=t?.style,a={};if(!r)return a;for(let t in r)($i(r[t])||i&&$i(i[t])||vs(t,e)||n?.getValue(t)?.liveStyle!==void 0)&&(a[t]=r[t]);return a}function bs(e){return window.getComputedStyle(e)}var xs=class extends Bo{constructor(){super(...arguments),this.type=`html`,this.renderInstance=ps}mount(e){e.style,super.mount(e)}readValueFromInstance(e,t){if(Lr.has(t))return this.projection?.isProjecting?Mr(t):Pr(e,t);{let n=bs(e),r=(It(t)?n.getPropertyValue(t):n[t])||0;return typeof r==`string`?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return ss(e,t)}build(e,t,n){fs(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return ys(e,t,n)}},Ss={offset:`stroke-dashoffset`,array:`stroke-dasharray`},Cs={offset:`strokeDashoffset`,array:`strokeDasharray`};function ws(e,t,n=1,r=0,i=!0){e.pathLength=1;let a=i?Ss:Cs;e[a.offset]=`${-r}`,e[a.array]=`${t} ${n}`}var Ts=[`transform`,`opacity`,`offsetDistance`,`offsetPath`,`offsetRotate`,`offsetAnchor`];function Es(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:o=0,...s},c,l,u){if(fs(e,s,l),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:d,style:f}=e;for(let e of Ts)d[e]!==void 0&&(f[e]=d[e],delete d[e]);(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??`50% 50%`,delete d.transformOrigin),f.transform&&(f.transformBox=u?.transformBox??`fill-box`,delete d.transformBox),t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&ws(d,i,a,o,!1)}var Ds=new Set([`baseFrequency`,`diffuseConstant`,`kernelMatrix`,`kernelUnitLength`,`keySplines`,`keyTimes`,`limitingConeAngle`,`markerHeight`,`markerWidth`,`numOctaves`,`targetX`,`targetY`,`surfaceScale`,`specularConstant`,`specularExponent`,`stdDeviation`,`tableValues`,`viewBox`,`gradientTransform`,`pathLength`,`startOffset`,`textLength`,`lengthAdjust`]),Os=e=>typeof e==`string`&&e.toLowerCase()===`svg`;function ks(e,t,n,r){ps(e,t,void 0,r);for(let n in t.attrs)e.setAttribute(Ds.has(n)?n:na(n),t.attrs[n])}function As(e,t,n){let r=ys(e,t,n);for(let n in e)if($i(e[n])||$i(t[n])){let t=Ir.indexOf(n)===-1?n:`attr`+n.charAt(0).toUpperCase()+n.substring(1);r[t]=e[n]}return r}var js=class extends Bo{constructor(){super(...arguments),this.type=`svg`,this.isSVGTag=!1,this.measureInstanceViewportBox=So}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Lr.has(t)){let e=Ca(t);return e&&e.default||0}if(Ts.includes(t)){let n=getComputedStyle(e)[t];if(typeof n==`string`&&n)return n.trim()}return t=Ds.has(t)?t:na(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return As(e,t,n)}build(e,t,n){Es(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){ks(e,t,n,r)}mount(e){this.isSVGTag=Os(e.tagName),super.mount(e)}},Ms=Do.length;function Ns(e){if(!e)return;if(!e.isControllingVariants){let t=e.parent&&Ns(e.parent)||{};return e.props.initial!==void 0&&(t.initial=e.props.initial),t}let t={};for(let n=0;n<Ms;n++){let r=Do[n],i=e.props[r];(To(i)||i===!1)&&(t[r]=i)}return t}function Ps(e,t){if(!Array.isArray(t))return!1;let n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}var Fs=[...Eo].reverse(),Is=Eo.length;function Ls(e){return t=>Promise.all(t.map(({animation:t,options:n})=>la(e,t,n)))}function Rs(e){let t=Ls(e),n=Vs(),r=!0,i=!1,a=t=>(n,r)=>{let i=qi(e,r,t===`exit`?e.presenceContext?.custom:void 0);if(i){let{transition:e,transitionEnd:t,...r}=i;n={...n,...r,...t}}return n};function o(n){t=n(e)}function s(o){let{props:s}=e,c=Ns(e.parent)||{},l=[],u=new Set,d={},f=1/0;for(let t=0;t<Is;t++){let p=Fs[t],m=n[p],h=s[p]===void 0?c[p]:s[p],g=To(h),_=p===o?m.isActive:null;_===!1&&(f=t);let v=h===c[p]&&h!==s[p]&&g;if(v&&(r||i)&&e.manuallyAnimateOnMount&&(v=!1),m.protectedKeys={...d},!m.isActive&&_===null||!h&&!m.prevProp||wo(h)||typeof h==`boolean`)continue;if(p===`exit`&&m.isActive&&_!==!0){m.prevResolvedValues&&(d={...d,...m.prevResolvedValues});continue}let y=zs(m.prevProp,h),b=y||p===o&&m.isActive&&!v&&g||t>f&&g,x=!1,S=Array.isArray(h)?h:[h],C=S.reduce(a(p),{});_===!1&&(C={});let{prevResolvedValues:w={}}=m,T={...w,...C},E=t=>{b=!0,u.has(t)&&(x=!0,u.delete(t)),m.needsAnimating[t]=!0;let n=e.getValue(t);n&&(n.liveStyle=!1)};for(let e in T){let t=C[e],n=w[e];if(d.hasOwnProperty(e))continue;let r=!1;r=Yi(t)&&Yi(n)?!Ps(t,n)||y:t!==n,r?t==null?u.add(e):E(e):t!==void 0&&u.has(e)?E(e):m.protectedKeys[e]=!0}m.prevProp=h,m.prevResolvedValues=C,m.isActive&&(d={...d,...C}),(r||i)&&e.blockInitialAnimation&&(b=!1);let D=v&&y;b&&(!D||x)&&l.push(...S.map(t=>{let n={type:p};if(typeof t==`string`&&(r||i)&&!D&&e.manuallyAnimateOnMount&&e.parent){let{parent:r}=e,i=qi(r,t);if(r.enteringChildren&&i){let{delayChildren:t}=i.transition||{};n.delay=Di(r.enteringChildren,e,t)}}return{animation:t,options:n}}))}if(u.size){let t={};if(typeof s.initial!=`boolean`){let n=qi(e,Array.isArray(s.initial)?s.initial[0]:s.initial);n&&n.transition&&(t.transition=n.transition)}u.forEach(n=>{let r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=r??null}),l.push({animation:t})}let p=!!l.length;return r&&(s.initial===!1||s.initial===s.animate)&&!e.manuallyAnimateOnMount&&(p=!1),r=!1,i=!1,p?t(l):Promise.resolve()}function c(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,r)),n[t].isActive=r;let i=s(t);for(let e in n)n[e].protectedKeys={};return i}return{animateChanges:s,setActive:c,setAnimateFunction:o,getState:()=>n,reset:()=>{n=Vs(),i=!0}}}function zs(e,t){return typeof t==`string`?t!==e:Array.isArray(t)?!Ps(t,e):!1}function Bs(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Vs(){return{animate:Bs(!0),whileInView:Bs(),whileHover:Bs(),whileTap:Bs(),whileDrag:Bs(),whileFocus:Bs(),exit:Bs()}}function Hs(e,t){e.min=t.min,e.max=t.max}function Us(e,t){Hs(e.x,t.x),Hs(e.y,t.y)}function Ws(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}var Gs=.9999,Ks=1.0001,qs=-.01,Js=.01;function Ys(e){return e.max-e.min}function Xs(e,t,n){return Math.abs(e-t)<=n}function Zs(e,t,n,r=.5){e.origin=r,e.originPoint=kn(t.min,t.max,e.origin),e.scale=Ys(n)/Ys(t),e.translate=kn(n.min,n.max,e.origin)-e.originPoint,(e.scale>=Gs&&e.scale<=Ks||isNaN(e.scale))&&(e.scale=1),(e.translate>=qs&&e.translate<=Js||isNaN(e.translate))&&(e.translate=0)}function Qs(e,t,n,r){Zs(e.x,t.x,n.x,r?r.originX:void 0),Zs(e.y,t.y,n.y,r?r.originY:void 0)}function $s(e,t,n,r=0){e.min=(r?kn(n.min,n.max,r):n.min)+t.min,e.max=e.min+Ys(t)}function ec(e,t,n,r){$s(e.x,t.x,n.x,r?.x),$s(e.y,t.y,n.y,r?.y)}function tc(e,t,n,r=0){let i=r?kn(n.min,n.max,r):n.min;e.min=t.min-i,e.max=e.min+Ys(t)}function nc(e,t,n,r){tc(e.x,t.x,n.x,r?.x),tc(e.y,t.y,n.y,r?.y)}function rc(e,t,n,r,i){return e-=t,e=Xo(e,1/n,r),i!==void 0&&(e=Xo(e,1/i,r)),e}function ic(e,t=0,n=1,r=.5,i,a=e,o=e){if(rn.test(t)&&(t=parseFloat(t),t=kn(o.min,o.max,t/100)-o.min),typeof t!=`number`)return;let s=kn(a.min,a.max,r);e===a&&(s-=t),e.min=rc(e.min,t,n,s,i),e.max=rc(e.max,t,n,s,i)}function ac(e,t,[n,r,i],a,o){ic(e,t[n],t[r],t[i],t.scale,a,o)}var oc=[`x`,`scaleX`,`originX`],sc=[`y`,`scaleY`,`originY`];function cc(e,t,n,r){ac(e.x,t,oc,n?n.x:void 0,r?r.x:void 0),ac(e.y,t,sc,n?n.y:void 0,r?r.y:void 0)}function lc(e){return e.translate===0&&e.scale===1}function uc(e){return lc(e.x)&&lc(e.y)}function dc(e,t){return e.min===t.min&&e.max===t.max}function fc(e,t){return dc(e.x,t.x)&&dc(e.y,t.y)}function pc(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function mc(e,t){return pc(e.x,t.x)&&pc(e.y,t.y)}function hc(e){return Ys(e.x)/Ys(e.y)}function gc(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function _c(e){return[e(`x`),e(`y`)]}function vc(e,t,n){let r=``,i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){let{transformPerspective:e,rotate:t,pathRotation:i,rotateX:a,rotateY:o,skewX:s,skewY:c}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotate(${i}deg) `),a&&(r+=`rotateX(${a}deg) `),o&&(r+=`rotateY(${o}deg) `),s&&(r+=`skewX(${s}deg) `),c&&(r+=`skewY(${c}deg) `)}let s=e.x.scale*t.x,c=e.y.scale*t.y;return(s!==1||c!==1)&&(r+=`scale(${s}, ${c})`),r||`none`}var yc=ka.length,bc=e=>typeof e==`string`?parseFloat(e):e,xc=e=>typeof e==`number`||B.test(e);function Sc(e,t,n,r,i,a){i?(e.opacity=kn(0,n.opacity??1,wc(r)),e.opacityExit=kn(t.opacity??1,0,Tc(r))):a&&(e.opacity=kn(t.opacity??1,n.opacity??1,r));for(let i=0;i<yc;i++){let a=ka[i],o=Cc(t,a),s=Cc(n,a);(o!==void 0||s!==void 0)&&(o||=0,s||=0,o===0||s===0||xc(o)===xc(s)?(e[a]=Math.max(kn(bc(o),bc(s),r),0),(rn.test(s)||rn.test(o))&&(e[a]+=`%`)):e[a]=s)}(t.rotate||n.rotate)&&(e.rotate=kn(t.rotate||0,n.rotate||0,r))}function Cc(e,t){return e[t]===void 0?e.borderRadius:e[t]}var wc=Ec(0,.5,mt),Tc=Ec(.5,.95,Ye);function Ec(e,t,n){return r=>r<e?0:r>t?1:n(Ze(e,t,r))}function Dc(e,t,n){let r=$i(e)?e:Mi(e);return r.start(Vi(``,r,t,n)),r.animation}function Oc(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}var kc=(e,t)=>e.depth-t.depth,Ac=class{constructor(){this.children=[],this.isDirty=!1}add(e){Ve(this.children,e),this.isDirty=!0}remove(e){He(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(kc),this.isDirty=!1,this.children.forEach(e)}};function jc(e,t){let n=Pt.now(),r=({timestamp:i})=>{let a=i-n;a>=t&&(kt(r),e(a-t))};return Ot.setup(r,!0),()=>kt(r)}function Mc(e){return $i(e)?e.get():e}var Nc=class{constructor(){this.members=[]}add(e){Ve(this.members,e);for(let t=this.members.length-1;t>=0;t--){let n=this.members[t];if(n===e||n===this.lead||n===this.prevLead)continue;let r=n.instance;(!r||r.isConnected===!1)&&!n.snapshot&&(He(this.members,n),n.unmount())}e.scheduleRender()}remove(e){if(He(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){for(let t=this.members.indexOf(e)-1;t>=0;t--){let e=this.members[t];if(e.isPresent!==!1&&e.instance?.isConnected!==!1)return this.promote(e),!0}return!1}promote(e,t){let n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.updateSnapshot(),e.scheduleRender();let{layoutDependency:r}=n.options,{layoutDependency:i}=e.options;(r===void 0||r!==i)&&(e.resumeFrom=n,t&&(n.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root?.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{e.options.onExitComplete?.(),e.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}},Pc={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Fc={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},Ic=[``,`X`,`Y`,`Z`],Lc=1e3,Rc=0;function zc(e,t,n,r){let{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Bc(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;let{visualElement:t}=e.options;if(!t)return;let n=ia(t);if(window.MotionHasOptimisedAnimation(n,`transform`)){let{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,`transform`,Ot,!(t||r))}let{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Bc(r)}function Vc({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(e={},n=t?.()){this.id=Rc++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,ho.value&&(Fc.nodes=Fc.calculatedTargetDeltas=Fc.calculatedProjections=0),this.nodes.forEach(Wc),this.nodes.forEach($c),this.nodes.forEach(el),this.nodes.forEach(Gc),ho.addProjectionMetrics&&ho.addProjectionMetrics(Fc)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new Ac)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new Qe),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let n=this.eventHandlers.get(e);n&&n.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t){if(this.instance)return;this.isSVG=eo(t)&&!go(t),this.instance=t;let{layoutId:n,layout:r,visualElement:i}=this.options;if(i&&!i.current&&i.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(r||n)&&(this.isLayoutDirty=!0),e){let n,r=0,i=()=>this.root.updateBlockedByResize=!1;Ot.read(()=>{r=window.innerWidth}),e(t,()=>{let e=window.innerWidth;e!==r&&(r=e,this.root.updateBlockedByResize=!0,n&&n(),n=jc(i,250),Pc.hasAnimatedSinceResize&&(Pc.hasAnimatedSinceResize=!1,this.nodes.forEach(Qc)))})}n&&this.root.registerSharedNode(n,this),this.options.animate!==!1&&i&&(n||r)&&this.addEventListener(`didUpdate`,({delta:e,hasLayoutChanged:t,hasRelativeLayoutChanged:n,layout:r})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let a=this.options.transition||i.getDefaultTransition()||sl,{onLayoutAnimationStart:o,onLayoutAnimationComplete:s}=i.getProps(),c=!this.targetLayout||!mc(this.targetLayout,r),l=!t&&n;if(this.options.layoutRoot||this.resumeFrom||l||t&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let t={...Ni(a,`layout`),onPlay:o,onComplete:s};(i.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t),this.setAnimationOrigin(e,l,t.path)}else t||Qc(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=r})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),kt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(tl),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Bc(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,(typeof t.latestValues.x==`string`||typeof t.latestValues.y==`string`)&&(t.isLayoutDirty=!0),t.updateScroll(`snapshot`),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:n}=this.options;if(t===void 0&&!n)return;let r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,``):void 0,this.updateSnapshot(),e&&this.notifyListeners(`willUpdate`)}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){let e=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),e&&this.nodes.forEach(Jc),this.nodes.forEach(qc);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Yc);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Xc),this.nodes.forEach(Zc),this.nodes.forEach(Hc),this.nodes.forEach(Uc)):this.nodes.forEach(Yc),this.clearAllSnapshots();let e=Pt.now();At.delta=Ue(0,1e3/60,e-At.timestamp),At.timestamp=e,At.isProcessing=!0,jt.update.process(At),jt.preRender.process(At),jt.render.process(At),At.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Na.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Kc),this.sharedNodes.forEach(nl)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ot.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ot.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Ys(this.snapshot.measuredBox.x)&&!Ys(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++)this.path[e].updateScroll();let e=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||=So(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners(`measure`,this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify(`LayoutMeasure`,this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e=`measure`){let t=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){let t=r(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!i)return;let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!uc(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,``):void 0,a=r!==this.prevTransformTemplateValue;e&&this.instance&&(t||qo(this.latestValues)||a)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){let t=this.measurePageBox(),n=this.removeElementScroll(t);return e&&(n=this.removeTransform(n)),dl(n),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return So();let t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(pl))){let{scroll:e}=this.root;e&&(rs(t.x,e.offset.x),rs(t.y,e.offset.y))}return t}removeElementScroll(e){let t=So();if(Us(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){let r=this.path[n],{scroll:i,options:a}=r;r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&Us(t,e),rs(t.x,i.offset.x),rs(t.y,i.offset.y))}return t}applyTransform(e,t=!1,n){let r=n||So();Us(r,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];!t&&n.options.layoutScroll&&n.scroll&&n!==n.root&&(rs(r.x,-n.scroll.offset.x),rs(r.y,-n.scroll.offset.y)),qo(n.latestValues)&&os(r,n.latestValues,n.layout?.layoutBox)}return qo(this.latestValues)&&os(r,this.latestValues,this.layout?.layoutBox),r}removeTransform(e){let t=So();Us(t,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];if(!qo(n.latestValues))continue;let r;n.instance&&(Ko(n.latestValues)&&n.updateSnapshot(),r=So(),Us(r,n.measurePageBox())),cc(t,n.latestValues,n.snapshot?.layoutBox,r)}return qo(this.latestValues)&&cc(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:e.crossfade===void 0||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==At.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){let t=this.getLead();this.isProjectionDirty||=t.isProjectionDirty,this.isTransformDirty||=t.isTransformDirty,this.isSharedProjectionDirty||=t.isSharedProjectionDirty;let n=!!this.resumingFrom||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:r,layoutId:i}=this.options;if(!this.layout||!(r||i))return;this.resolvedRelativeTargetAt=At.timestamp;let a=this.getClosestProjectingParent();a&&this.linkedParentVersion!==a.layoutVersion&&!a.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&a&&a.layout?this.createRelativeTarget(a,this.layout.layoutBox,a.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=So(),this.targetWithTransforms=So()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),ec(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Us(this.target,this.layout.layoutBox),$o(this.target,this.targetDelta)):Us(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&a&&!!a.resumingFrom==!!this.resumingFrom&&!a.options.layoutScroll&&a.target&&this.animationProgress!==1?this.createRelativeTarget(a,this.target,a.target):this.relativeParent=this.relativeTarget=void 0),ho.value&&Fc.calculatedTargetDeltas++)}getClosestProjectingParent(){if(!(!this.parent||Ko(this.parent.latestValues)||Jo(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(e,t,n){this.relativeParent=e,this.linkedParentVersion=e.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=So(),this.relativeTargetOrigin=So(),nc(this.relativeTargetOrigin,t,n,this.options.layoutAnchor||void 0),Us(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){let e=this.getLead(),t=!!this.resumingFrom||this!==e,n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===At.timestamp&&(n=!1),n)return;let{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(r||i))return;Us(this.layoutCorrected,this.layout.layoutBox);let a=this.treeScale.x,o=this.treeScale.y;ns(this.layoutCorrected,this.treeScale,this.path,t),e.layout&&!e.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(e.target=e.layout.layoutBox,e.targetWithTransforms=So());let{target:s}=e;if(!s){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Ws(this.prevProjectionDelta.x,this.projectionDelta.x),Ws(this.prevProjectionDelta.y,this.projectionDelta.y)),Qs(this.projectionDelta,this.layoutCorrected,s,this.latestValues),(this.treeScale.x!==a||this.treeScale.y!==o||!gc(this.projectionDelta.x,this.prevProjectionDelta.x)||!gc(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners(`projectionUpdate`,s)),ho.value&&Fc.calculatedProjections++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){if(this.options.visualElement?.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=bo(),this.projectionDelta=bo(),this.projectionDeltaWithTransform=bo()}setAnimationOrigin(e,t=!1,n){let r=this.snapshot,i=r?r.latestValues:{},a={...this.latestValues},o=bo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let s=So(),c=(r?r.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),u=!l||l.members.length<=1,d=!!(c&&!u&&this.options.crossfade===!0&&!this.path.some(ol));this.animationProgress=0;let f,p=n?.interpolateProjection(e);this.mixTargetDelta=t=>{let n=t/1e3,r=p?.(n);r?(o.x.translate=r.x,o.x.scale=kn(e.x.scale,1,n),o.x.origin=e.x.origin,o.x.originPoint=e.x.originPoint,o.y.translate=r.y,o.y.scale=kn(e.y.scale,1,n),o.y.origin=e.y.origin,o.y.originPoint=e.y.originPoint):(rl(o.x,e.x,n),rl(o.y,e.y,n)),this.setTargetDelta(o),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(nc(s,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),al(this.relativeTarget,this.relativeTargetOrigin,s,n),f&&fc(this.relativeTarget,f)&&(this.isProjectionDirty=!1),f||=So(),Us(f,this.relativeTarget)),c&&(this.animationValues=a,Sc(a,i,this.latestValues,n,d,u)),r&&r.rotate!==void 0&&(this.animationValues||=a,this.animationValues.pathRotation=r.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners(`animationStart`),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&=(kt(this.pendingAnimation),void 0),this.pendingAnimation=Ot.update(()=>{Pc.hasAnimatedSinceResize=!0,this.motionValue||=Mi(0),this.motionValue.jump(0,!1),this.currentAnimation=Dc(this.motionValue,[0,1e3],{...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onComplete:()=>{e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners(`animationComplete`)}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Lc),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(!(!t||!n||!r)){if(this!==e&&this.layout&&r&&fl(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||So();let t=Ys(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;let r=Ys(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}Us(t,n),os(t,i),Qs(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new Nc),this.sharedNodes.get(e).add(t);let n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return!e||e.lead===this}getLead(){let{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){let{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:n}={}){let r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return e?e.relegate(this):!1}resetSkewAndRotation(){let{visualElement:e}=this.options;if(!e)return;let t=!1,{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;let r={};n.z&&zc(`z`,e,r,this.animationValues);for(let t=0;t<Ic.length;t++)zc(`rotate${Ic[t]}`,e,r,this.animationValues),zc(`skew${Ic[t]}`,e,r,this.animationValues);e.render();for(let t in r)e.setStaticValue(t,r[t]),this.animationValues&&(this.animationValues[t]=r[t]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;if(!this.isVisible){e.visibility=`hidden`;return}let n=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,e.visibility=``,e.opacity=``,e.pointerEvents=Mc(t?.pointerEvents)||``,e.transform=n?n(this.latestValues,``):`none`;return}let r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target){this.options.layoutId&&(e.opacity=this.latestValues.opacity===void 0?1:this.latestValues.opacity,e.pointerEvents=Mc(t?.pointerEvents)||``),this.hasProjected&&!qo(this.latestValues)&&(e.transform=n?n({},``):`none`,this.hasProjected=!1);return}e.visibility=``;let i=r.animationValues||r.latestValues;this.applyTransformsToTarget();let a=vc(this.projectionDeltaWithTransform,this.treeScale,i);n&&(a=n(i,a)),e.transform=a;let{x:o,y:s}=this.projectionDelta;e.transformOrigin=`${o.origin*100}% ${s.origin*100}% 0`,e.opacity=r.animationValues?r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:r===this?i.opacity===void 0?``:i.opacity:i.opacityExit===void 0?0:i.opacityExit;for(let t in _s){if(i[t]===void 0)continue;let{correct:n,applyTo:o,isCSSVariable:s}=_s[t],c=a===`none`?i[t]:n(i[t],r);if(o){let t=o.length;for(let n=0;n<t;n++)e[o[n]]=c}else s?this.options.visualElement.renderState.vars[t]=c:e[t]=c}this.options.layoutId&&(e.pointerEvents=r===this?Mc(t?.pointerEvents)||``:`none`)}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(qc),this.root.sharedNodes.clear()}}}function Hc(e){e.updateLayout()}function Uc(e){let t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners(`didUpdate`)){let{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;if(i===`size`)_c(e=>{let r=a?t.measuredBox[e]:t.layoutBox[e],i=Ys(r);r.min=n[e].min,r.max=r.min+i});else if(i===`x`||i===`y`){let e=i===`x`?`y`:`x`;Hs(a?t.measuredBox[e]:t.layoutBox[e],n[e])}else fl(i,t.layoutBox,n)&&_c(r=>{let i=a?t.measuredBox[r]:t.layoutBox[r],o=Ys(n[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)});let o=bo();Qs(o,n,t.layoutBox);let s=bo();a?Qs(s,e.applyTransform(r,!0),t.measuredBox):Qs(s,n,t.layoutBox);let c=!uc(o),l=!1;if(!e.resumeFrom){let r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){let{snapshot:i,layout:a}=r;if(i&&a){let o=e.options.layoutAnchor||void 0,s=So();nc(s,t.layoutBox,i.layoutBox,o);let c=So();nc(c,n,a.layoutBox,o),mc(s,c)||(l=!0),r.options.layoutRoot&&(e.relativeTarget=c,e.relativeTargetOrigin=s,e.relativeParent=r)}}}e.notifyListeners(`didUpdate`,{layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:c,hasRelativeLayoutChanged:l})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function Wc(e){ho.value&&Fc.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty),e.isTransformDirty||=e.parent.isTransformDirty)}function Gc(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Kc(e){e.clearSnapshot()}function qc(e){e.clearMeasurements()}function Jc(e){e.isLayoutDirty=!0,e.updateLayout()}function Yc(e){e.isLayoutDirty=!1}function Xc(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function Zc(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify(`BeforeLayoutMeasure`),e.resetTransform()}function Qc(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function $c(e){e.resolveTargetDelta()}function el(e){e.calcProjection()}function tl(e){e.resetSkewAndRotation()}function nl(e){e.removeLeadSnapshot()}function rl(e,t,n){e.translate=kn(t.translate,0,n),e.scale=kn(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function il(e,t,n,r){e.min=kn(t.min,n.min,r),e.max=kn(t.max,n.max,r)}function al(e,t,n,r){il(e.x,t.x,n.x,r),il(e.y,t.y,n.y,r)}function ol(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}var sl={duration:.45,ease:[.4,0,.1,1]},cl=e=>typeof navigator<`u`&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),ll=cl(`applewebkit/`)&&!cl(`chrome/`)?Math.round:Ye;function ul(e){e.min=ll(e.min),e.max=ll(e.max)}function dl(e){ul(e.x),ul(e.y)}function fl(e,t,n){return e===`position`||e===`preserve-aspect`&&!Xs(hc(t),hc(n),.2)}function pl(e){return e!==e.root&&e.scroll?.wasRoot}var ml=Vc({attachResizeListener:(e,t)=>Oc(e,`resize`,t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),hl={current:void 0},gl=Vc({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!hl.current){let e=new ml({});e.mount(window),e.setOptions({layoutScroll:!0}),hl.current=e}return hl.current},resetTransform:(e,t)=>{e.style.transform=t===void 0?`none`:t},checkIsScrollRoot:e=>window.getComputedStyle(e).position===`fixed`}),_l=(0,_.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:`never`});function vl(e=!0){let t=(0,_.useContext)(Be);if(t===null)return[!0,null];let{isPresent:n,onExitComplete:r,register:i}=t,a=(0,_.useId)();(0,_.useEffect)(()=>{if(e)return i(a)},[e]);let o=(0,_.useCallback)(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,o]:[!0]}var yl=(0,_.createContext)({strict:!1}),bl={animation:[`animate`,`variants`,`whileHover`,`whileTap`,`exit`,`whileInView`,`whileFocus`,`whileDrag`],exit:[`exit`],drag:[`drag`,`dragControls`],focus:[`whileFocus`],hover:[`whileHover`,`onHoverStart`,`onHoverEnd`],tap:[`whileTap`,`onTap`,`onTapStart`,`onTapCancel`],pan:[`onPan`,`onPanStart`,`onPanSessionStart`,`onPanEnd`],inView:[`whileInView`,`onViewportEnter`,`onViewportLeave`],layout:[`layout`,`layoutId`]},xl=!1;function Sl(){if(xl)return;let e={};for(let t in bl)e[t]={isEnabled:e=>bl[t].some(t=>!!e[t])};Lo(e),xl=!0}function Cl(){return Sl(),Ro()}function wl(e){let t=Cl();for(let n in e)t[n]={...t[n],...e[n]};Lo(t)}var Tl=(0,_.createContext)({});function El(e,t){if(Oo(e)){let{initial:t,animate:n}=e;return{initial:t===!1||To(t)?t:void 0,animate:To(n)?n:void 0}}return e.inherit===!1?{}:t}function Dl(e){let{initial:t,animate:n}=El(e,(0,_.useContext)(Tl));return(0,_.useMemo)(()=>({initial:t,animate:n}),[Ol(t),Ol(n)])}function Ol(e){return Array.isArray(e)?e.join(` `):e}var kl=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Al(e,t,n){for(let r in t)!$i(t[r])&&!vs(r,n)&&(e[r]=t[r])}function jl({transformTemplate:e},t){return(0,_.useMemo)(()=>{let n=kl();return fs(n,t,e),Object.assign({},n.vars,n.style)},[t])}function Ml(e,t){let n=e.style||{},r={};return Al(r,n,e),Object.assign(r,jl(e,t)),r}function Nl(e,t){let n={},r=Ml(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout=`none`,r.touchAction=e.drag===!0?`none`:`pan-${e.drag===`x`?`y`:`x`}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}var Pl=()=>({...kl(),attrs:{}});function Fl(e,t,n,r){let i=(0,_.useMemo)(()=>{let n=Pl();return Es(n,t,Os(r),e.transformTemplate,e.style),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let t={};Al(t,e.style,e),i.style={...t,...i.style}}return i}var Il=new Set(`animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport`.split(`.`));function Ll(e){return e.startsWith(`while`)||e.startsWith(`drag`)&&e!==`draggable`||e.startsWith(`layout`)||e.startsWith(`onTap`)||e.startsWith(`onPan`)||e.startsWith(`onLayout`)||Il.has(e)}function Rl(e,t){return e.startsWith(`on`)?!Ll(e):t?.(e)??!Ll(e)}function zl(e,t,n,r){let i={};for(let a in e)(a!==`values`||typeof e.values!=`object`)&&($i(e[a])||(Rl(a,r)||n===!0&&Ll(a)||!t&&!Ll(a)||e.draggable&&a.startsWith(`onDrag`))&&(i[a]=e[a]));return i}var Bl=[`animate`,`circle`,`defs`,`desc`,`ellipse`,`g`,`image`,`line`,`filter`,`marker`,`mask`,`metadata`,`path`,`pattern`,`polygon`,`polyline`,`rect`,`stop`,`switch`,`symbol`,`svg`,`text`,`tspan`,`use`,`view`];function Vl(e){return typeof e!=`string`||e.includes(`-`)?!1:!!(Bl.indexOf(e)>-1||/[A-Z]/u.test(e))}function Hl(e,t,n,{latestValues:r},i,a=!1,o,s){let c=(o??Vl(e)?Fl:Nl)(t,r,i,e),l=zl(t,typeof e==`string`,a,s),u=e===_.Fragment?{}:{...l,...c,ref:n},{children:d}=t,f=(0,_.useMemo)(()=>$i(d)?d.get():d,[d]);return(0,_.createElement)(e,{...u,children:f})}function Ul({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:U(n,r,i,e),renderState:t()}}function U(e,t,n,r){let i={},a=r(e,{});for(let e in a)i[e]=Mc(a[e]);let{initial:o,animate:s}=e,c=Oo(e),l=ko(e);t&&l&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));let u=n?n.initial===!1:!1;u||=o===!1;let d=u?s:o;if(d&&typeof d!=`boolean`&&!wo(d)){let t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){let r=Ki(e,t[n]);if(r){let{transitionEnd:e,transition:t,...n}=r;for(let e in n){let t=n[e];if(Array.isArray(t)){let e=u?t.length-1:0;t=t[e]}t!==null&&(i[e]=t)}for(let t in e)i[t]=e[t]}}}return i}var W=e=>(t,n)=>{let r=(0,_.useContext)(Tl),i=(0,_.useContext)(Be),a=()=>Ul(e,t,r,i);return n?a():Re(a)},Wl=W({scrapeMotionValuesFromProps:ys,createRenderState:kl}),Gl=W({scrapeMotionValuesFromProps:As,createRenderState:Pl}),Kl=Symbol.for(`motionComponentSymbol`);function ql(e,t,n){let r=(0,_.useRef)(n);(0,_.useInsertionEffect)(()=>{r.current=n});let i=(0,_.useRef)(null);return(0,_.useCallback)(n=>{n&&e.onMount?.(n),t&&(n?t.mount(n):t.unmount());let a=r.current;if(typeof a==`function`){if(n){let e=a(n);typeof e==`function`&&(i.current=e)}else i.current?(i.current(),i.current=null):a(n)}else a&&(a.current=n)},[t])}var Jl=(0,_.createContext)({});function Yl(e){return e&&typeof e==`object`&&Object.prototype.hasOwnProperty.call(e,`current`)}function Xl(e,t,n,r,i,a){let{visualElement:o}=(0,_.useContext)(Tl),s=(0,_.useContext)(yl),c=(0,_.useContext)(Be),l=(0,_.useContext)(_l),u=l.reducedMotion,d=l.skipAnimations,f=(0,_.useRef)(null),p=(0,_.useRef)(!1);r||=s.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u,skipAnimations:d,isSVG:a}),p.current&&f.current&&(f.current.manuallyAnimateOnMount=!0));let m=f.current,h=(0,_.useContext)(Jl);m&&!m.projection&&i&&(m.type===`html`||m.type===`svg`)&&Zl(f.current,n,i,h);let g=(0,_.useRef)(!1);(0,_.useInsertionEffect)(()=>{m&&g.current&&m.update(n,c)});let v=n[ra],y=(0,_.useRef)(!!v&&typeof window<`u`&&!window.MotionHandoffIsComplete?.(v)&&window.MotionHasOptimisedAnimation?.(v));return ze(()=>{p.current=!0,m&&(g.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),y.current&&m.animationState&&m.animationState.animateChanges())}),(0,_.useEffect)(()=>{m&&(!y.current&&m.animationState&&m.animationState.animateChanges(),y.current&&=(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(v)}),!1),m.enteringChildren=void 0)}),m}function Zl(e,t,n,r){let{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:c,layoutRoot:l,layoutAnchor:u,layoutCrossfade:d}=t;e.projection=new n(e.latestValues,t[`data-framer-portal-id`]?void 0:Ql(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||s&&Yl(s),visualElement:e,animationType:typeof a==`string`?a:`both`,initialPromotionConfig:r,crossfade:d,layoutScroll:c,layoutRoot:l,layoutAnchor:u})}function Ql(e){if(e)return e.options.allowProjection===!1?Ql(e.parent):e.projection}function $l(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&wl(r);let a=n?n===`svg`:Vl(e),o=a?Gl:Wl;function s(n,s){let c,l={...(0,_.useContext)(_l),...n,layoutId:eu(n)},{isStatic:u,isValidProp:d}=l,f=Dl(n),p=o(n,u);if(!u&&typeof window<`u`){tu(l,r);let t=nu(l);c=t.MeasureLayout,f.visualElement=Xl(e,p,l,i,t.ProjectionNode,a)}return(0,z.jsxs)(Tl.Provider,{value:f,children:[c&&f.visualElement?(0,z.jsx)(c,{visualElement:f.visualElement,...l}):null,Hl(e,n,ql(p,f.visualElement,s),p,u,t,a,d)]})}s.displayName=`motion.${typeof e==`string`?e:`create(${e.displayName??e.name??``})`}`;let c=(0,_.forwardRef)(s);return c[Kl]=e,c}function eu({layoutId:e}){let t=(0,_.useContext)(Le).id;return t&&e!==void 0?t+`-`+e:e}function tu(e,t){(0,_.useContext)(yl).strict}function nu(e){let{drag:t,layout:n}=Cl();if(!t&&!n)return{};let r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function ru(e,t){if(typeof Proxy>`u`)return $l;let n=new Map,r=(n,r)=>$l(n,r,e,t);return new Proxy((e,t)=>r(e,t),{get:(i,a)=>a===`create`?r:(n.has(a)||n.set(a,$l(a,void 0,e,t)),n.get(a))})}var iu=(e,t)=>t.isSVG??Vl(e)?new js(t):new xs(t,{allowProjection:e!==_.Fragment}),au=class extends Vo{constructor(e){super(e),e.animationState||=Rs(e)}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();wo(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}},ou=0,su={animation:{Feature:au},exit:{Feature:class extends Vo{constructor(){super(...arguments),this.id=ou++,this.isExitComplete=!1}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;if(e&&n===!1){if(this.isExitComplete){let{initial:e,custom:t}=this.node.getProps();if(typeof e==`string`||typeof e==`object`&&e&&!Array.isArray(e)){let n=qi(this.node,e,t);if(n){let{transition:e,transitionEnd:t,...r}=n;for(let e in r)this.node.getValue(e)?.jump(r[e])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive(`exit`,!1);this.isExitComplete=!1;return}let r=this.node.animationState.setActive(`exit`,!e);t&&!e&&r.then(()=>{this.isExitComplete=!0,t(this.id)})}mount(){let{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}};function cu(e){return{point:{x:e.pageX,y:e.pageY}}}var lu=e=>t=>Ha(t)&&e(t,cu(t));function uu(e,t,n,r){return Oc(e,t,lu(n),r)}var du=({current:e})=>e?e.ownerDocument.defaultView:null,fu=(e,t)=>Math.abs(e-t);function pu(e,t){let n=fu(e.x,t.x),r=fu(e.y,t.y);return Math.sqrt(n**2+r**2)}var mu=new Set([`auto`,`scroll`]),hu=class{constructor(e,t,{transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3,element:o}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=e=>{this.handleScroll(e.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=gu(this.lastRawMoveEventInfo,this.transformPagePoint));let e=vu(this.lastMoveEventInfo,this.history),t=this.startEvent!==null,n=pu(e.offset,{x:0,y:0})>=this.distanceThreshold;if(!t&&!n)return;let{point:r}=e,{timestamp:i}=At;this.history.push({...r,timestamp:i});let{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastRawMoveEventInfo=t,this.lastMoveEventInfo=gu(t,this.transformPagePoint),Ot.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();let{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&i&&i(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let a=vu(e.type===`pointercancel`?this.lastMoveEventInfo:gu(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!Ha(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=a,this.contextWindow=r||window;let s=gu(cu(e),this.transformPagePoint),{point:c}=s,{timestamp:l}=At;this.history=[{...c,timestamp:l}];let{onSessionStart:u}=t;u&&u(e,vu(s,this.history));let d={passive:!0,capture:!0};this.removeListeners=Xe(uu(this.contextWindow,`pointermove`,this.handlePointerMove,d),uu(this.contextWindow,`pointerup`,this.handlePointerUp,d),uu(this.contextWindow,`pointercancel`,this.handlePointerUp,d)),o&&this.startScrollTracking(o)}startScrollTracking(e){let t=e.parentElement;for(;t;){let e=getComputedStyle(t);(mu.has(e.overflowX)||mu.has(e.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.addEventListener(`scroll`,this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.removeEventListener(`scroll`,this.onWindowScroll)}}handleScroll(e){let t=this.scrollPositions.get(e);if(!t)return;let n=e===window,r=n?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},i={x:r.x-t.x,y:r.y-t.y};(i.x!==0||i.y!==0)&&(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i.x,this.lastMoveEventInfo.point.y+=i.y):this.history.length>0&&(this.history[0].x-=i.x,this.history[0].y-=i.y),this.scrollPositions.set(e,r),Ot.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),kt(this.updatePoint)}};function gu(e,t){return t?{point:t(e.point)}:e}function _u(e,t){return{x:e.x-t.x,y:e.y-t.y}}function vu({point:e},t){return{point:e,delta:_u(e,bu(t)),offset:_u(e,yu(t)),velocity:xu(t,.1)}}function yu(e){return e[0]}function bu(e){return e[e.length-1]}function xu(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null,i=bu(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>$e(t)));)n--;if(!r)return{x:0,y:0};r===e[0]&&e.length>2&&i.timestamp-r.timestamp>$e(t)*2&&(r=e[1]);let a=et(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};let o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function Su(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?kn(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?kn(n,e,r.max):Math.min(e,n)),e}function Cu(e,t,n){return{min:t===void 0?void 0:e.min+t,max:n===void 0?void 0:e.max+n-(e.max-e.min)}}function wu(e,{top:t,left:n,bottom:r,right:i}){return{x:Cu(e.x,n,i),y:Cu(e.y,t,r)}}function Tu(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function Eu(e,t){return{x:Tu(e.x,t.x),y:Tu(e.y,t.y)}}function Du(e,t){let n=.5,r=Ys(e),i=Ys(t);return i>r?n=Ze(t.min,t.max-r,e.min):r>i&&(n=Ze(e.min,e.max-i,t.min)),Ue(0,1,n)}function Ou(e,t){let n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}var ku=.35;function Au(e=ku){return e===!1?e=0:e===!0&&(e=ku),{x:ju(e,`left`,`right`),y:ju(e,`top`,`bottom`)}}function ju(e,t,n){return{min:Mu(e,t),max:Mu(e,n)}}function Mu(e,t){return typeof e==`number`?e:e[t]||0}var Nu=new WeakMap,Pu=class{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=So(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:n}={}){let{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;let i=e=>{t&&this.snapToCursor(cu(e).point),this.stopAnimation()},a=(e,t)=>{let{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock=La(n),!this.openDragLock))return;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),_c(e=>{let t=this.getAxisMotionValue(e).get()||0;if(rn.test(t)){let{projection:n}=this.visualElement;if(n&&n.layout){let r=n.layout.layoutBox[e];r&&(t=Ys(r)*(parseFloat(t)/100))}}this.originPoint[e]=t}),i&&Ot.update(()=>i(e,t),!1,!0),ta(this.visualElement,`transform`);let{animationState:a}=this.visualElement;a&&a.setActive(`whileDrag`,!0)},o=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;let{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;let{offset:o}=t;if(r&&this.currentDirection===null){this.currentDirection=Ru(o),this.currentDirection!==null&&i&&i(this.currentDirection);return}this.updateAxis(`x`,t.point,o),this.updateAxis(`y`,t.point,o),this.visualElement.render(),a&&Ot.update(()=>a(e,t),!1,!0)},s=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{let{dragSnapToOrigin:e}=this.getProps();(e||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:l}=this.getProps();this.panSession=new hu(e,{onSessionStart:i,onStart:a,onMove:o,onSessionEnd:s,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:l,distanceThreshold:n,contextWindow:du(this.visualElement),element:this.visualElement.current})}stop(e,t){let n=e||this.latestPointerEvent,r=t||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!r||!n)return;let{velocity:a}=r;this.startAnimation(a);let{onDragEnd:o}=this.getProps();o&&Ot.postRender(()=>o(n,r))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();let{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive(`whileDrag`,!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,n){let{drag:r}=this.getProps();if(!n||!Lu(e,r,this.currentDirection))return;let i=this.getAxisMotionValue(e),a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=Su(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){let{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&Yl(e)?this.constraints||=this.resolveRefConstraints():this.constraints=e&&n?wu(n.layoutBox,e):!1,this.elastic=Au(t),r!==this.constraints&&!Yl(e)&&n&&this.constraints&&!this.hasMutatedConstraints&&_c(e=>{this.constraints!==!1&&this.getAxisMotionValue(e)&&(this.constraints[e]=Ou(n.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){let{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Yl(e))return!1;let n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;r.root&&(r.root.scroll=void 0,r.root.updateScroll());let i=cs(n,r.root,this.visualElement.getTransformPagePoint()),a=Eu(r.layout.layoutBox,i);if(t){let e=t(Uo(a));this.hasMutatedConstraints=!!e,e&&(a=Ho(e))}return a}startAnimation(e){let{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},c=_c(o=>{if(!Lu(o,t,this.currentDirection))return;let c=s&&s[o]||{};(a===!0||a===o)&&(c={min:0,max:0});let l=r?200:1e6,u=r?40:1e7,d={type:`inertia`,velocity:n?e[o]:0,bounceStiffness:l,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...c};return this.startAxisValueAnimation(o,d)});return Promise.all(c).then(o)}startAxisValueAnimation(e,t){let n=this.getAxisMotionValue(e);return ta(this.visualElement,e),n.start(Vi(e,n,0,t,this.visualElement,!1))}stopAnimation(){_c(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){let t=`_drag${e.toUpperCase()}`;return this.visualElement.getProps()[t]||this.visualElement.getValue(e,this.visualElement.latestValues[e]??0)}snapToCursor(e){_c(t=>{let{drag:n}=this.getProps();if(!Lu(t,n,this.currentDirection))return;let{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){let{min:n,max:a}=r.layout.layoutBox[t],o=i.get()||0;i.set(e[t]-kn(n,a,.5)+o)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!Yl(t)||!n||!this.constraints)return;this.stopAnimation();let r={x:0,y:0};_c(e=>{let t=this.getAxisMotionValue(e);if(t&&this.constraints!==!1){let n=t.get();r[e]=Du({min:n,max:n},this.constraints[e])}});let{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},``):`none`,n.root&&n.root.updateScroll(),n.updateLayout(),this.constraints=!1,this.resolveConstraints(),_c(t=>{if(!Lu(t,e,null))return;let n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(kn(i,a,r[t]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;Nu.set(this.visualElement,this);let e=this.visualElement.current,t=uu(e,`pointerdown`,t=>{let{drag:n,dragListener:r=!0}=this.getProps(),i=t.target,a=i!==e&&Ka(i);n&&r&&!a&&this.start(t)}),n,r=()=>{let{dragConstraints:t}=this.getProps();Yl(t)&&t.current&&(this.constraints=this.resolveRefConstraints(),n||=Iu(e,t.current,()=>this.scalePositionWithinConstraints()))},{projection:i}=this.visualElement,a=i.addEventListener(`measure`,r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),Ot.read(r);let o=Oc(window,`resize`,()=>this.scalePositionWithinConstraints()),s=i.addEventListener(`didUpdate`,(({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(_c(t=>{let n=this.getAxisMotionValue(t);n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))}),this.visualElement.render())}));return()=>{o(),t(),a(),s&&s(),n&&n()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=ku,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}};function Fu(e){let t=!0;return()=>{if(t){t=!1;return}e()}}function Iu(e,t,n){let r=mo(e,Fu(n)),i=mo(t,Fu(n));return()=>{r(),i()}}function Lu(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function Ru(e,t=10){let n=null;return Math.abs(e.y)>t?n=`y`:Math.abs(e.x)>t&&(n=`x`),n}var zu=class extends Vo{constructor(e){super(e),this.removeGroupControls=Ye,this.removeListeners=Ye,this.controls=new Pu(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ye}update(){let{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}},Bu=e=>(t,n)=>{e&&Ot.update(()=>e(t,n),!1,!0)},Vu=class extends Vo{constructor(){super(...arguments),this.removePointerDownListener=Ye}onPointerDown(e){this.session=new hu(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:du(this.node)})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:Bu(e),onStart:Bu(t),onMove:Bu(n),onEnd:(e,t)=>{delete this.session,r&&Ot.postRender(()=>r(e,t))}}}mount(){this.removePointerDownListener=uu(this.node.current,`pointerdown`,e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}},Hu=!1,Uu=class extends _.Component{componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),Hu&&i.root.didUpdate(),i.addEventListener(`animationComplete`,()=>{this.safeToRemove()}),i.setOptions({...i.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Pc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,{projection:a}=n;return a?(a.isPresent=i,e.layoutDependency!==t&&a.setOptions({...a.options,layoutDependency:t}),Hu=!0,r||e.layoutDependency!==t||t===void 0||e.isPresent!==i?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||Ot.postRender(()=>{let e=a.getStack();(!e||!e.members.length)&&this.safeToRemove()})),null):null}componentDidUpdate(){let{visualElement:e,layoutAnchor:t}=this.props,{projection:n}=e;n&&(n.options.layoutAnchor=t,n.root.didUpdate(),Na.postRender(()=>{!n.currentAnimation&&n.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;Hu=!0,r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}};function Wu(e){let[t,n]=vl(),r=(0,_.useContext)(Le);return(0,z.jsx)(Uu,{...e,layoutGroup:r,switchLayoutGroup:(0,_.useContext)(Jl),isPresent:t,safeToRemove:n})}var Gu={pan:{Feature:Vu},drag:{Feature:zu,ProjectionNode:gl,MeasureLayout:Wu}};function Ku(e,t,n){let{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive(`whileHover`,n===`Start`);let i=r[`onHover`+n];i&&Ot.postRender(()=>i(t,cu(t)))}var qu=class extends Vo{mount(){let{current:e}=this.node;e&&(this.unmount=Ba(e,(e,t)=>(Ku(this.node,t,`Start`),e=>Ku(this.node,e,`End`))))}unmount(){}},Ju=class extends Vo{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(`:focus-visible`)}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!1),this.isActive=!1)}mount(){this.unmount=Xe(Oc(this.node.current,`focus`,()=>this.onFocus()),Oc(this.node.current,`blur`,()=>this.onBlur()))}unmount(){}};function Yu(e,t,n){let{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive(`whileTap`,n===`Start`);let i=r[`onTap`+(n===`End`?``:n)];i&&Ot.postRender(()=>i(t,cu(t)))}var Xu=class extends Vo{mount(){let{current:e}=this.node;if(!e)return;let{globalTapTarget:t,propagate:n}=this.node.props;this.unmount=$a(e,(e,t)=>(Yu(this.node,t,`Start`),(e,{success:t})=>Yu(this.node,e,t?`End`:`Cancel`)),{useGlobalTarget:t,stopPropagation:n?.tap===!1})}unmount(){}},Zu=new WeakMap,Qu=new WeakMap,$u=e=>{let t=Zu.get(e.target);t&&t(e)},ed=e=>{e.forEach($u)};function td({root:e,...t}){let n=e||document;Qu.has(n)||Qu.set(n,{});let r=Qu.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(ed,{root:e,...t})),r[i]}function nd(e,t,n){let r=td(t);return Zu.set(e,n),r.observe(e),()=>{Zu.delete(e),r.unobserve(e)}}var rd={some:0,all:1},id=class extends Vo{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.stopObserver?.();let{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r=`some`,once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:typeof r==`number`?r:rd[r]},o=e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,i&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive(`whileInView`,t);let{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)};this.stopObserver=nd(this.node.current,a,o)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>`u`)return;let{props:e,prevProps:t}=this.node;[`amount`,`margin`,`root`].some(ad(e,t))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}};function ad({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}var od={inView:{Feature:id},tap:{Feature:Xu},focus:{Feature:Ju},hover:{Feature:qu}},sd={layout:{ProjectionNode:gl,MeasureLayout:Wu}},cd=ru({...su,...od,...Gu,...sd},iu);function ld(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function ud(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var dd={autoSleep:120,force3D:`auto`,nullTargetWarn:1,units:{lineHeight:``}},fd={duration:.5,overwrite:!1,delay:0},pd,md,hd,gd=1e8,_d=1/gd,vd=Math.PI*2,yd=vd/4,bd=0,xd=Math.sqrt,Sd=Math.cos,Cd=Math.sin,wd=function(e){return typeof e==`string`},Td=function(e){return typeof e==`function`},Ed=function(e){return typeof e==`number`},G=function(e){return e===void 0},Dd=function(e){return typeof e==`object`},Od=function(e){return e!==!1},kd=function(){return typeof window<`u`},Ad=function(e){return Td(e)||wd(e)},jd=typeof ArrayBuffer==`function`&&ArrayBuffer.isView||function(){},Md=Array.isArray,Nd=/random\([^)]+\)/g,Pd=/,\s*/g,Fd=/(?:-?\.?\d|\.)+/gi,Id=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ld=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Rd=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,zd=/[+-]=-?[.\d]+/,Bd=/[^,'"\[\]\s]+/gi,Vd=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,K,Hd,Ud,Wd,Gd={},Kd={},qd,Jd=function(e){return(Kd=Df(e,Gd))&&Gm},Yd=function(e,t){return console.warn(`Invalid property`,e,`set to`,t,`Missing plugin? gsap.registerPlugin()`)},Xd=function(e,t){return!t&&console.warn(e)},Zd=function(e,t){return e&&(Gd[e]=t)&&Kd&&(Kd[e]=t)||Gd},Qd=function(){return 0},$d={suppressEvents:!0,isStart:!0,kill:!1},ef={suppressEvents:!0,kill:!1},tf={suppressEvents:!0},nf={},rf=[],af={},of,sf={},cf={},lf=30,uf=[],df=``,ff=function(e){var t=e[0],n,r;if(Dd(t)||Td(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=uf.length;r--&&!uf[r].targetTest(t););n=uf[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new tm(e[r],n)))||e.splice(r,1);return e},pf=function(e){return e._gsap||ff(up(e))[0]._gsap},mf=function(e,t,n){return(n=e[t])&&Td(n)?e[t]():G(n)&&e.getAttribute&&e.getAttribute(t)||n},hf=function(e,t){return(e=e.split(`,`)).forEach(t)||e},gf=function(e){return Math.round(e*1e5)/1e5||0},_f=function(e){return Math.round(e*1e7)/1e7||0},vf=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n===`+`?e+r:n===`-`?e-r:n===`*`?e*r:e/r},yf=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},bf=function(){var e=rf.length,t=rf.slice(0),n,r;for(af={},rf.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},xf=function(e){return!!(e._initted||e._startAt||e.add)},Sf=function(e,t,n,r){rf.length&&!md&&bf(),e.render(t,n,r||!!(md&&t<0&&xf(e))),rf.length&&!md&&bf()},Cf=function(e){var t=parseFloat(e);return(t||t===0)&&(e+``).match(Bd).length<2?t:wd(e)?e.trim():e},wf=function(e){return e},Tf=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ef=function(e){return function(t,n){for(var r in n)r in t||r===`duration`&&e||r===`ease`||(t[r]=n[r])}},Df=function(e,t){for(var n in t)e[n]=t[n];return e},Of=function e(t,n){for(var r in n)r!==`__proto__`&&r!==`constructor`&&r!==`prototype`&&(t[r]=Dd(n[r])?e(t[r]||(t[r]={}),n[r]):n[r]);return t},kf=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Af=function(e){var t=e.parent||K,n=e.keyframes?Ef(Md(e.keyframes)):Tf;if(Od(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},jf=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},Mf=function(e,t,n,r,i){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var a=e[r],o;if(i)for(o=t[i];a&&a[i]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},Nf=function(e,t,n,r){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var i=t._prev,a=t._next;i?i._next=a:e[n]===t&&(e[n]=a),a?a._prev=i:e[r]===t&&(e[r]=i),t._next=t._prev=t.parent=null},Pf=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ff=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},If=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Lf=function(e,t,n,r){return e._startAt&&(md?e._startAt.revert(ef):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Rf=function e(t){return!t||t._ts&&e(t.parent)},zf=function(e){return e._repeat?Bf(e._tTime,e=e.duration()+e._rDelay)*e:0},Bf=function(e,t){var n=Math.floor(e=_f(e/t));return e&&n===e?n-1:n},Vf=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Hf=function(e){return e._end=_f(e._start+(e._tDur/Math.abs(e._ts||e._rts||_d)||0))},Uf=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=_f(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Hf(e),n._dirty||Ff(n,e)),e},Wf=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Vf(e.rawTime(),t),(!t._dur||ip(0,t.totalDuration(),n)-t._tTime>_d)&&t.render(n,!0)),Ff(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-_d}},Gf=function(e,t,n,r){return t.parent&&Pf(t),t._start=_f((Ed(n)?n:n||e!==K?tp(e,n,t):e._time)+t._delay),t._end=_f(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Mf(e,t,`_first`,`_last`,e._sort?`_start`:0),Yf(t)||(e._recent=t),r||Wf(e,t),e._ts<0&&Uf(e,e._tTime),e},Kf=function(e,t){return(Gd.ScrollTrigger||Yd(`scrollTrigger`,t))&&Gd.ScrollTrigger.create(t,e)},qf=function(e,t,n,r,i){if(um(e,t,i),!e._initted)return 1;if(!n&&e._pt&&!md&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&of!==Hp.frame)return rf.push(e),e._lazy=[i,r],1},Jf=function e(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||e(n))},Yf=function(e){var t=e.data;return t===`isFromStart`||t===`isStart`},Xf=function(e,t,n,r){var i=e.ratio,a=t<0||!t&&(!e._start&&Jf(e)&&!(!e._initted&&Yf(e))||(e._ts<0||e._dp._ts<0)&&!Yf(e))?0:1,o=e._rDelay,s=0,c,l,u;if(o&&e._repeat&&(s=ip(0,e._tDur,t),l=Bf(s,o),e._yoyo&&l&1&&(a=1-a),l!==Bf(e._tTime,o)&&(i=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==i||md||r||e._zTime===_d||!t&&e._zTime){if(!e._initted&&qf(e,t,r,n,s))return;for(u=e._zTime,e._zTime=t||(n?_d:0),n||=t&&!u,e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=s,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Lf(e,t,n,!0),e._onUpdate&&!n&&Dp(e,`onUpdate`),s&&e._repeat&&!n&&e.parent&&Dp(e,`onRepeat`),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Pf(e,1),!n&&!md&&(Dp(e,a?`onComplete`:`onReverseComplete`,!0),e._prom&&e._prom()))}else e._zTime||=t},Zf=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data===`isPause`&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data===`isPause`&&r._start<t)return r;r=r._prev}},Qf=function(e,t,n,r){var i=e._repeat,a=_f(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=i?i<0?1e10:_f(a*(i+1)+e._rDelay*i):a,o>0&&!r&&Uf(e,e._tTime=e._tDur*o),e.parent&&Hf(e),n||Ff(e.parent,e),e},$f=function(e){return e instanceof rm?Ff(e):Qf(e,e._dur)},ep={_start:0,endTime:Qd,totalDuration:Qd},tp=function e(t,n,r){var i=t.labels,a=t._recent||ep,o=t.duration()>=gd?a.endTime(!1):t._dur,s,c,l;return wd(n)&&(isNaN(n)||n in i)?(c=n.charAt(0),l=n.substr(-1)===`%`,s=n.indexOf(`=`),c===`<`||c===`>`?(s>=0&&(n=n.replace(/=/,``)),(c===`<`?a._start:a.endTime(a._repeat>=0))+(parseFloat(n.substr(1))||0)*(l?(s<0?a:r).totalDuration()/100:1)):s<0?(n in i||(i[n]=o),i[n]):(c=parseFloat(n.charAt(s-1)+n.substr(s+1)),l&&r&&(c=c/100*(Md(r)?r[0]:r).totalDuration()),s>1?e(t,n.substr(0,s-1),r)+c:o+c)):n==null?o:+n},np=function(e,t,n){var r=Ed(t[1]),i=(r?2:1)+(e<2?0:1),a=t[i],o,s;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,s=n;s&&!(`immediateRender`in o);)o=s.vars.defaults||{},s=Od(s.vars.inherit)&&s.parent;a.immediateRender=Od(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[i-1]}return new _m(t[0],a,t[i+1])},rp=function(e,t){return e||e===0?t(e):t},ip=function(e,t,n){return n<e?e:n>t?t:n},ap=function(e,t){return!wd(e)||!(t=Vd.exec(e))?``:t[1]},op=function(e,t,n){return rp(n,function(n){return ip(e,t,n)})},sp=[].slice,cp=function(e,t){return e&&Dd(e)&&`length`in e&&(!t&&!e.length||e.length-1 in e&&Dd(e[0]))&&!e.nodeType&&e!==Hd},lp=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(e){var r;return wd(e)&&!t||cp(e,1)?(r=n).push.apply(r,up(e)):n.push(e)})||n},up=function(e,t,n){return hd&&!t&&hd.selector?hd.selector(e):wd(e)&&!n&&(Ud||!Up())?sp.call((t||Wd).querySelectorAll(e),0):Md(e)?lp(e,n):cp(e)?sp.call(e,0):e?[e]:[]},dp=function(e){return e=up(e)[0]||Xd(`Invalid scope`)||{},function(t){var n=e.current||e.nativeElement||e;return up(t,n.querySelectorAll?n:n===e?Xd(`Invalid scope`)||Wd.createElement(`div`):e)}},fp=function(e){return e.sort(function(){return .5-Math.random()})},pp=function(e){if(Td(e))return e;var t=Dd(e)?e:{each:e},n=Xp(t.ease),r=t.from||0,i=parseFloat(t.base)||0,a={},o=r>0&&r<1,s=isNaN(r)||o,c=t.axis,l=r,u=r;return wd(r)?l=u={center:.5,edges:.5,end:1}[r]||0:!o&&s&&(l=r[0],u=r[1]),function(e,o,d){var f=(d||t).length,p=a[f],m,h,g,_,v,y,b,x,S;if(!p){if(S=t.grid===`auto`?0:(t.grid||[1,gd])[1],!S){for(b=-gd;b<(b=d[S++].getBoundingClientRect().left)&&S<f;);S<f&&S--}for(p=a[f]=[],m=s?Math.min(S,f)*l-.5:r%S,h=S===gd?0:s?f*u/S-.5:r/S|0,b=0,x=gd,y=0;y<f;y++)g=y%S-m,_=h-(y/S|0),p[y]=v=c?Math.abs(c===`y`?_:g):xd(g*g+_*_),v>b&&(b=v),v<x&&(x=v);r===`random`&&fp(p),p.max=b-x,p.min=x,p.v=f=(parseFloat(t.amount)||parseFloat(t.each)*(S>f?f-1:c?c===`y`?f/S:S:Math.max(S,f/S))||0)*(r===`edges`?-1:1),p.b=f<0?i-f:i,p.u=ap(t.amount||t.each)||0,n=n&&f<0?Yp(n):n}return f=(p[e]-p.min)/p.max||0,_f(p.b+(n?n(f):f)*p.v)+p.u}},mp=function(e){var t=10**((e+``).split(`.`)[1]||``).length;return function(n){var r=_f(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(Ed(n)?0:ap(n))}},hp=function(e,t){var n=Md(e),r,i;return!n&&Dd(e)&&(r=n=e.radius||gd,e.values?(e=up(e.values),(i=!Ed(e[0]))&&(r*=r)):e=mp(e.increment)),rp(t,n?Td(e)?function(t){return i=e(t),Math.abs(i-t)<=r?i:t}:function(t){for(var n=parseFloat(i?t.x:t),a=parseFloat(i?t.y:0),o=gd,s=0,c=e.length,l,u;c--;)i?(l=e[c].x-n,u=e[c].y-a,l=l*l+u*u):l=Math.abs(e[c]-n),l<o&&(o=l,s=c);return s=!r||o<=r?e[s]:t,i||s===t||Ed(t)?s:s+ap(t)}:mp(e))},gp=function(e,t,n,r){return rp(Md(e)?!t:n===!0?!!(n=0):!r,function(){return Md(e)?e[~~(Math.random()*e.length)]:(n||=1e-5)&&(r=n<1?10**((n+``).length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},_p=function(){var e=[...arguments];return function(t){return e.reduce(function(e,t){return t(e)},t)}},vp=function(e,t){return function(n){return e(parseFloat(n))+(t||ap(n))}},yp=function(e,t,n){return wp(e,t,0,1,n)},bp=function(e,t,n){return rp(n,function(n){return e[~~t(n)]})},xp=function e(t,n,r){var i=n-t;return Md(t)?bp(t,e(0,t.length),n):rp(r,function(e){return(i+(e-t)%i)%i+t})},Sp=function e(t,n,r){var i=n-t,a=i*2;return Md(t)?bp(t,e(0,t.length-1),n):rp(r,function(e){return e=(a+(e-t)%a)%a||0,t+(e>i?a-e:e)})},Cp=function(e){return e.replace(Nd,function(e){var t=e.indexOf(`[`)+1,n=e.substring(t||7,t?e.indexOf(`]`):e.length-1).split(Pd);return gp(t?n:+n[0],t?0:+n[1],+n[2]||1e-5)})},wp=function(e,t,n,r,i){var a=t-e,o=r-n;return rp(i,function(t){return n+((t-e)/a*o||0)})},Tp=function e(t,n,r,i){var a=isNaN(t+n)?0:function(e){return(1-e)*t+e*n};if(!a){var o=wd(t),s={},c,l,u,d,f;if(r===!0&&(i=1)&&(r=null),o)t={p:t},n={p:n};else if(Md(t)&&!Md(n)){for(u=[],d=t.length,f=d-2,l=1;l<d;l++)u.push(e(t[l-1],t[l]));d--,a=function(e){e*=d;var t=Math.min(f,~~e);return u[t](e-t)},r=n}else i||(t=Df(Md(t)?[]:{},t));if(!u){for(c in n)am.call(s,t,c,`get`,n[c]);a=function(e){return Em(e,s)||(o?t.p:t)}}}return rp(r,a)},Ep=function(e,t,n){var r=e.labels,i=gd,a,o,s;for(a in r)o=r[a]-t,o<0==!!n&&o&&i>(o=Math.abs(o))&&(s=a,i=o);return s},Dp=function(e,t,n){var r=e.vars,i=r[t],a=hd,o=e._ctx,s,c,l;if(i)return s=r[t+`Params`],c=r.callbackScope||e,n&&rf.length&&bf(),o&&(hd=o),l=s?i.apply(c,s):i.call(c),hd=a,l},Op=function(e){return Pf(e),e.scrollTrigger&&e.scrollTrigger.kill(!!md),e.progress()<1&&Dp(e,`onInterrupt`),e},kp,Ap=[],jp=function(e){if(e){if(e=!e.name&&e.default||e,kd()||e.headless){var t=e.name,n=Td(e),r=t&&!n&&e.init?function(){this._props=[]}:e,i={init:Qd,render:Em,add:am,kill:Om,modifier:Dm,rawVars:0},a={targetTest:0,get:0,getSetter:Sm,aliases:{},register:0};if(Up(),e!==r){if(sf[t])return;Tf(r,Tf(kf(e,i),a)),Df(r.prototype,Df(i,kf(e,a))),sf[r.prop=t]=r,e.targetTest&&(uf.push(r),nf[t]=1),t=(t===`css`?`CSS`:t.charAt(0).toUpperCase()+t.substr(1))+`Plugin`}Zd(t,r),e.register&&e.register(Gm,r,jm)}else Ap.push(e)}},Mp=255,Np={aqua:[0,Mp,Mp],lime:[0,Mp,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Mp],navy:[0,0,128],white:[Mp,Mp,Mp],olive:[128,128,0],yellow:[Mp,Mp,0],orange:[Mp,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Mp,0,0],pink:[Mp,192,203],cyan:[0,Mp,Mp],transparent:[Mp,Mp,Mp,0]},Pp=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Mp+.5|0},Fp=function(e,t,n){var r=e?Ed(e)?[e>>16,e>>8&Mp,e&Mp]:0:Np.black,i,a,o,s,c,l,u,d,f,p;if(!r){if(e.substr(-1)===`,`&&(e=e.substr(0,e.length-1)),Np[e])r=Np[e];else if(e.charAt(0)===`#`){if(e.length<6&&(i=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e=`#`+i+i+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):``)),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Mp,r&Mp,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Mp,e&Mp]}else if(e.substr(0,3)===`hsl`){if(r=p=e.match(Fd),!t)s=r[0]%360/360,c=r[1]/100,l=r[2]/100,a=l<=.5?l*(c+1):l+c-l*c,i=l*2-a,r.length>3&&(r[3]*=1),r[0]=Pp(s+1/3,i,a),r[1]=Pp(s,i,a),r[2]=Pp(s-1/3,i,a);else if(~e.indexOf(`=`))return r=e.match(Id),n&&r.length<4&&(r[3]=1),r}else r=e.match(Fd)||Np.transparent;r=r.map(Number)}return t&&!p&&(i=r[0]/Mp,a=r[1]/Mp,o=r[2]/Mp,u=Math.max(i,a,o),d=Math.min(i,a,o),l=(u+d)/2,u===d?s=c=0:(f=u-d,c=l>.5?f/(2-u-d):f/(u+d),s=u===i?(a-o)/f+(a<o?6:0):u===a?(o-i)/f+2:(i-a)/f+4,s*=60),r[0]=~~(s+.5),r[1]=~~(c*100+.5),r[2]=~~(l*100+.5)),n&&r.length<4&&(r[3]=1),r},Ip=function(e){var t=[],n=[],r=-1;return e.split(Rp).forEach(function(e){var i=e.match(Ld)||[];t.push.apply(t,i),n.push(r+=i.length+1)}),t.c=n,t},Lp=function(e,t,n){var r=``,i=(e+r).match(Rp),a=t?`hsla(`:`rgba(`,o=0,s,c,l,u;if(!i)return e;if(i=i.map(function(e){return(e=Fp(e,t,1))&&a+(t?e[0]+`,`+e[1]+`%,`+e[2]+`%,`+e[3]:e.join(`,`))+`)`}),n&&(l=Ip(e),s=n.c,s.join(r)!==l.c.join(r)))for(c=e.replace(Rp,`1`).split(Ld),u=c.length-1;o<u;o++)r+=c[o]+(~s.indexOf(o)?i.shift()||a+`0,0,0,0)`:(l.length?l:i.length?i:n).shift());if(!c)for(c=e.split(Rp),u=c.length-1;o<u;o++)r+=c[o]+i[o];return r+c[u]},Rp=function(){var e=`(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b`,t;for(t in Np)e+=`|`+t+`\\b`;return RegExp(e+`)`,`gi`)}(),zp=/hsl[a]?\(/,Bp=function(e){var t=e.join(` `),n;if(Rp.lastIndex=0,Rp.test(t))return n=zp.test(t),e[1]=Lp(e[1],n),e[0]=Lp(e[0],n,Ip(e[1])),!0},Vp,Hp=function(){var e=Date.now,t=500,n=33,r=e(),i=r,a=1e3/240,o=a,s=[],c,l,u,d,f,p,m=function u(m){var h=e()-i,g=m===!0,_,v,y,b;if((h>t||h<0)&&(r+=h-n),i+=h,y=i-r,_=y-o,(_>0||g)&&(b=++d.frame,f=y-d.time*1e3,d.time=y/=1e3,o+=_+(_>=a?4:a-_),v=1),g||(c=l(u)),v)for(p=0;p<s.length;p++)s[p](y,f,b,m)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(e){return f/(1e3/(e||60))},wake:function(){qd&&(!Ud&&kd()&&(Hd=Ud=window,Wd=Hd.document||{},Gd.gsap=Gm,(Hd.gsapVersions||(Hd.gsapVersions=[])).push(Gm.version),Jd(Kd||Hd.GreenSockGlobals||!Hd.gsap&&Hd||{}),Ap.forEach(jp)),u=typeof requestAnimationFrame<`u`&&requestAnimationFrame,c&&d.sleep(),l=u||function(e){return setTimeout(e,o-d.time*1e3+1|0)},Vp=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),Vp=0,l=Qd},lagSmoothing:function(e,r){t=e||1/0,n=Math.min(r||33,t)},fps:function(e){a=1e3/(e||240),o=d.time*1e3+a},add:function(e,t,n){var r=t?function(t,n,i,a){e(t,n,i,a),d.remove(r)}:e;return d.remove(e),s[n?`unshift`:`push`](r),Up(),r},remove:function(e,t){~(t=s.indexOf(e))&&s.splice(t,1)&&p>=t&&p--},_listeners:s},d}(),Up=function(){return!Vp&&Hp.wake()},q={},Wp=/^[\d.\-M][\d.\-,\s]/,Gp=/["']/g,Kp=function(e){for(var t={},n=e.substr(1,e.length-3).split(`:`),r=n[0],i=1,a=n.length,o,s,c;i<a;i++)s=n[i],o=i===a-1?s.length:s.lastIndexOf(`,`),c=s.substr(0,o),t[r]=isNaN(c)?c.replace(Gp,``).trim():+c,r=s.substr(o+1).trim();return t},qp=function(e){var t=e.indexOf(`(`)+1,n=e.indexOf(`)`),r=e.indexOf(`(`,t);return e.substring(t,~r&&r<n?e.indexOf(`)`,n+1):n)},Jp=function(e){var t=(e+``).split(`(`),n=q[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf(`{`)?[Kp(t[1])]:qp(e).split(`,`).map(Cf)):q._CE&&Wp.test(e)?q._CE(``,e):n},Yp=function(e){return function(t){return 1-e(1-t)}},Xp=function(e,t){return e&&(Td(e)?e:q[e]||Jp(e))||t},Zp=function(e,t,n,r){n===void 0&&(n=function(e){return 1-t(1-e)}),r===void 0&&(r=function(e){return e<.5?t(e*2)/2:1-t((1-e)*2)/2});var i={easeIn:t,easeOut:n,easeInOut:r},a;return hf(e,function(e){for(var t in q[e]=Gd[e]=i,q[a=e.toLowerCase()]=n,i)q[a+(t===`easeIn`?`.in`:t===`easeOut`?`.out`:`.inOut`)]=q[e+`.`+t]=i[t]}),i},Qp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},$p=function e(t,n,r){var i=n>=1?n:1,a=(r||(t?.3:.45))/(n<1?n:1),o=a/vd*(Math.asin(1/i)||0),s=function(e){return e===1?1:i*2**(-10*e)*Cd((e-o)*a)+1},c=t===`out`?s:t===`in`?function(e){return 1-s(1-e)}:Qp(s);return a=vd/a,c.config=function(n,r){return e(t,n,r)},c},em=function e(t,n){n===void 0&&(n=1.70158);var r=function(e){return e?--e*e*((n+1)*e+n)+1:0},i=t===`out`?r:t===`in`?function(e){return 1-r(1-e)}:Qp(r);return i.config=function(n){return e(t,n)},i};hf(`Linear,Quad,Cubic,Quart,Quint,Strong`,function(e,t){var n=t<5?t+1:t;Zp(e+`,Power`+(n-1),t?function(e){return e**+n}:function(e){return e},function(e){return 1-(1-e)**n},function(e){return e<.5?(e*2)**n/2:1-((1-e)*2)**n/2})}),q.Linear.easeNone=q.none=q.Linear.easeIn,Zp(`Elastic`,$p(`in`),$p(`out`),$p()),(function(e,t){var n=1/t,r=2*n,i=2.5*n,a=function(a){return a<n?e*a*a:a<r?e*(a-1.5/t)**2+.75:a<i?e*(a-=2.25/t)*a+.9375:e*(a-2.625/t)**2+.984375};Zp(`Bounce`,function(e){return 1-a(1-e)},a)})(7.5625,2.75),Zp(`Expo`,function(e){return 2**(10*(e-1))*e+e*e*e*e*e*e*(1-e)}),Zp(`Circ`,function(e){return-(xd(1-e*e)-1)}),Zp(`Sine`,function(e){return e===1?1:-Sd(e*yd)+1}),Zp(`Back`,em(`in`),em(`out`),em()),q.SteppedEase=q.steps=Gd.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+ +!t,i=+!!t,a=1-_d;return function(e){return((r*ip(0,a,e)|0)+i)*n}}},fd.ease=q[`quad.out`],hf(`onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt`,function(e){return df+=e+`,`+e+`Params,`});var tm=function(e,t){this.id=bd++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:mf,this.set=t?t.getSetter:Sm},nm=function(){function e(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Qf(this,+e.duration,1,1),this.data=e.data,hd&&(this._ctx=hd,hd.data.push(this)),Vp||Hp.wake()}var t=e.prototype;return t.delay=function(e){return e||e===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+e-this._delay),this._delay=e,this):this._delay},t.duration=function(e){return arguments.length?this.totalDuration(this._repeat>0?e+(e+this._rDelay)*this._repeat:e):this.totalDuration()&&this._dur},t.totalDuration=function(e){return arguments.length?(this._dirty=0,Qf(this,this._repeat<0?e:(e-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(e,t){if(Up(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(Uf(this,e),!n._dp||n.parent||Wf(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&e<this._tDur||this._ts<0&&e>0||!this._tDur&&!e)&&Gf(this._dp,this,this._start-this._delay)}return(this._tTime!==e||!this._dur&&!t||this._initted&&Math.abs(this._zTime)===_d||!this._initted&&this._dur&&e||!e&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=e),Sf(this,e,t)),this},t.time=function(e,t){return arguments.length?this.totalTime(Math.min(this.totalDuration(),e+zf(this))%(this._dur+this._rDelay)||(e?this._dur:0),t):this._time},t.totalProgress=function(e,t){return arguments.length?this.totalTime(this.totalDuration()*e,t):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(e,t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-e:e)+zf(this),t):this.duration()?Math.min(1,this._time/this._dur):+(this.rawTime()>0)},t.iteration=function(e,t){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(e-1)*n,t):this._repeat?Bf(this._tTime,n)+1:1},t.timeScale=function(e,t){if(!arguments.length)return this._rts===-_d?0:this._rts;if(this._rts===e)return this;var n=this.parent&&this._ts?Vf(this.parent._time,this):this._tTime;return this._rts=+e||0,this._ts=this._ps||e===-_d?0:this._rts,this.totalTime(ip(-Math.abs(this._delay),this.totalDuration(),n),t!==!1),Hf(this),If(this)},t.paused=function(e){return arguments.length?(this._ps!==e&&(this._ps=e,e?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Up(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==_d&&(this._tTime-=_d)))),this):this._ps},t.startTime=function(e){if(arguments.length){this._start=_f(e);var t=this.parent||this._dp;return t&&(t._sort||!this.parent)&&Gf(t,this,this._start-this._delay),this}return this._start},t.endTime=function(e){return this._start+(Od(e)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(e){var t=this.parent||this._dp;return t?e&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Vf(t.rawTime(e),this):this._tTime:this._tTime},t.revert=function(e){e===void 0&&(e=tf);var t=md;return md=e,xf(this)&&(this.timeline&&this.timeline.revert(e),this.totalTime(-.01,e.suppressEvents)),this.data!==`nested`&&e.kill!==!1&&this.kill(),md=t,this},t.globalTime=function(e){for(var t=this,n=arguments.length?e:t.rawTime();t;)n=t._start+n/(Math.abs(t._ts)||1),t=t._dp;return!this.parent&&this._sat?this._sat.globalTime(e):n},t.repeat=function(e){return arguments.length?(this._repeat=e===1/0?-2:e,$f(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(e){if(arguments.length){var t=this._time;return this._rDelay=e,$f(this),t?this.time(t):this}return this._rDelay},t.yoyo=function(e){return arguments.length?(this._yoyo=e,this):this._yoyo},t.seek=function(e,t){return this.totalTime(tp(this,e),Od(t))},t.restart=function(e,t){return this.play().totalTime(e?-this._delay:0,Od(t)),this._dur||(this._zTime=-_d),this},t.play=function(e,t){return e!=null&&this.seek(e,t),this.reversed(!1).paused(!1)},t.reverse=function(e,t){return e!=null&&this.seek(e||this.totalDuration(),t),this.reversed(!0).paused(!1)},t.pause=function(e,t){return e!=null&&this.seek(e,t),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(e){return arguments.length?(!!e!==this.reversed()&&this.timeScale(-this._rts||(e?-_d:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-_d,this},t.isActive=function(){var e=this.parent||this._dp,t=this._start,n;return!!(!e||this._ts&&this._initted&&e.isActive()&&(n=e.rawTime(!0))>=t&&n<this.endTime(!0)-_d)},t.eventCallback=function(e,t,n){var r=this.vars;return arguments.length>1?(t?(r[e]=t,n&&(r[e+`Params`]=n),e===`onUpdate`&&(this._onUpdate=t)):delete r[e],this):r[e]},t.then=function(e){var t=this,n=t._prom;return new Promise(function(r){var i=Td(e)?e:wf,a=function(){var e=t.then;t.then=null,n&&n(),Td(i)&&(i=i(t))&&(i.then||i===t)&&(t.then=e),r(i),t.then=e};t._initted&&t.totalProgress()===1&&t._ts>=0||!t._tTime&&t._ts<0?a():t._prom=a})},t.kill=function(){Op(this)},e}();Tf(nm.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-_d,_prom:0,_ps:!1,_rts:1});var rm=function(e){ud(t,e);function t(t,n){var r;return t===void 0&&(t={}),r=e.call(this,t)||this,r.labels={},r.smoothChildTiming=!!t.smoothChildTiming,r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=Od(t.sortChildren),K&&Gf(t.parent||K,ld(r),n),t.reversed&&r.reverse(),t.paused&&r.paused(!0),t.scrollTrigger&&Kf(ld(r),t.scrollTrigger),r}var n=t.prototype;return n.to=function(e,t,n){return np(0,arguments,this),this},n.from=function(e,t,n){return np(1,arguments,this),this},n.fromTo=function(e,t,n,r){return np(2,arguments,this),this},n.set=function(e,t,n){return t.duration=0,t.parent=this,Af(t).repeatDelay||(t.repeat=0),t.immediateRender=!!t.immediateRender,new _m(e,t,tp(this,n),1),this},n.call=function(e,t,n){return Gf(this,_m.delayedCall(0,e,t),n)},n.staggerTo=function(e,t,n,r,i,a,o){return n.duration=t,n.stagger=n.stagger||r,n.onComplete=a,n.onCompleteParams=o,n.parent=this,new _m(e,n,tp(this,i)),this},n.staggerFrom=function(e,t,n,r,i,a,o){return n.runBackwards=1,Af(n).immediateRender=Od(n.immediateRender),this.staggerTo(e,t,n,r,i,a,o)},n.staggerFromTo=function(e,t,n,r,i,a,o,s){return r.startAt=n,Af(r).immediateRender=Od(r.immediateRender),this.staggerTo(e,t,r,i,a,o,s)},n.render=function(e,t,n){var r=this._time,i=this._dirty?this.totalDuration():this._tDur,a=this._dur,o=e<=0?0:_f(e),s=this._zTime<0!=e<0&&(this._initted||!a),c,l,u,d,f,p,m,h,g,_,v,y;if(this!==K&&o>i&&e>=0&&(o=i),o!==this._tTime||n||s){if(r!==this._time&&a&&(o+=this._time-r,e+=this._time-r),c=o,g=this._start,h=this._ts,p=!h,s&&(a||(r=this._zTime),(e||!t)&&(this._zTime=e)),this._repeat){if(v=this._yoyo,f=a+this._rDelay,this._repeat<-1&&e<0)return this.totalTime(f*100+e,t,n);if(c=_f(o%f),o===i?(d=this._repeat,c=a):(_=_f(o/f),d=~~_,d&&d===_&&(c=a,d--),c>a&&(c=a)),_=Bf(this._tTime,f),!r&&this._tTime&&_!==d&&this._tTime-_*f-this._dur<=0&&(_=d),v&&d&1&&(c=a-c,y=1),d!==_&&!this._lock){var b=v&&_&1,x=b===(v&&d&1);if(d<_&&(b=!b),r=b?0:o%a?a:o,this._lock=1,this.render(r||(y?0:_f(d*f)),t,!a)._lock=0,this._tTime=o,!t&&this.parent&&Dp(this,`onRepeat`),this.vars.repeatRefresh&&!y&&(this.invalidate()._lock=1,_=d),r&&r!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act||(a=this._dur,i=this._tDur,x&&(this._lock=2,r=b?a:-1e-4,this.render(r,!0),this.vars.repeatRefresh&&!y&&this.invalidate()),this._lock=0,!this._ts&&!p))return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(m=Zf(this,_f(r),_f(c)),m&&(o-=c-(c=m._start))),this._tTime=o,this._time=c,this._act=!!h,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=e,r=0),!r&&o&&a&&!t&&!_&&(Dp(this,`onStart`),this._tTime!==o))return this;if(c>=r&&e>=0)for(l=this._first;l;){if(u=l._next,(l._act||c>=l._start)&&l._ts&&m!==l){if(l.parent!==this)return this.render(e,t,n);if(l.render(l._ts>0?(c-l._start)*l._ts:(l._dirty?l.totalDuration():l._tDur)+(c-l._start)*l._ts,t,n),c!==this._time||!this._ts&&!p){m=0,u&&(o+=this._zTime=-_d);break}}l=u}else{l=this._last;for(var S=e<0?e:c;l;){if(u=l._prev,(l._act||S<=l._end)&&l._ts&&m!==l){if(l.parent!==this)return this.render(e,t,n);if(l.render(l._ts>0?(S-l._start)*l._ts:(l._dirty?l.totalDuration():l._tDur)+(S-l._start)*l._ts,t,n||md&&xf(l)),c!==this._time||!this._ts&&!p){m=0,u&&(o+=this._zTime=S?-_d:_d);break}}l=u}}if(m&&!t&&(this.pause(),m.render(c>=r?0:-_d)._zTime=c>=r?1:-1,this._ts))return this._start=g,Hf(this),this.render(e,t,n);this._onUpdate&&!t&&Dp(this,`onUpdate`,!0),(o===i&&this._tTime>=this.totalDuration()||!o&&r)&&(g===this._start||Math.abs(h)!==Math.abs(this._ts))&&(this._lock||((e||!a)&&(o===i&&this._ts>0||!o&&this._ts<0)&&Pf(this,1),!t&&!(e<0&&!r)&&(o||r||!i)&&(Dp(this,o===i&&e>=0?`onComplete`:`onReverseComplete`,!0),this._prom&&!(o<i&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(e,t){var n=this;if(Ed(t)||(t=tp(this,t,e)),!(e instanceof nm)){if(Md(e))return e.forEach(function(e){return n.add(e,t)}),this;if(wd(e))return this.addLabel(e,t);if(Td(e))e=_m.delayedCall(0,e);else return this}return this===e?this:Gf(this,e,t)},n.getChildren=function(e,t,n,r){e===void 0&&(e=!0),t===void 0&&(t=!0),n===void 0&&(n=!0),r===void 0&&(r=-gd);for(var i=[],a=this._first;a;)a._start>=r&&(a instanceof _m?t&&i.push(a):(n&&i.push(a),e&&i.push.apply(i,a.getChildren(!0,t,n)))),a=a._next;return i},n.getById=function(e){for(var t=this.getChildren(1,1,1),n=t.length;n--;)if(t[n].vars.id===e)return t[n]},n.remove=function(e){return wd(e)?this.removeLabel(e):Td(e)?this.killTweensOf(e):(e.parent===this&&Nf(this,e),e===this._recent&&(this._recent=this._last),Ff(this))},n.totalTime=function(t,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=_f(Hp.time-(this._ts>0?t/this._ts:(this.totalDuration()-t)/-this._ts))),e.prototype.totalTime.call(this,t,n),this._forcing=0,this):this._tTime},n.addLabel=function(e,t){return this.labels[e]=tp(this,t),this},n.removeLabel=function(e){return delete this.labels[e],this},n.addPause=function(e,t,n){var r=_m.delayedCall(0,t||Qd,n);return r.data=`isPause`,this._hasPause=1,Gf(this,r,tp(this,e))},n.removePause=function(e){var t=this._first;for(e=tp(this,e);t;)t._start===e&&t.data===`isPause`&&Pf(t),t=t._next},n.killTweensOf=function(e,t,n){for(var r=this.getTweensOf(e,n),i=r.length;i--;)cm!==r[i]&&r[i].kill(e,t);return this},n.getTweensOf=function(e,t){for(var n=[],r=up(e),i=this._first,a=Ed(t),o;i;)i instanceof _m?yf(i._targets,r)&&(a?(!cm||i._initted&&i._ts)&&i.globalTime(0)<=t&&i.globalTime(i.totalDuration())>t:!t||i.isActive())&&n.push(i):(o=i.getTweensOf(r,t)).length&&n.push.apply(n,o),i=i._next;return n},n.tweenTo=function(e,t){t||={};var n=this,r=tp(n,e),i=t,a=i.startAt,o=i.onStart,s=i.onStartParams,c=i.immediateRender,l,u=_m.to(n,Tf({ease:t.ease||`none`,lazy:!1,immediateRender:!1,time:r,overwrite:`auto`,duration:t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale())||_d,onStart:function(){if(n.pause(),!l){var e=t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale());u._dur!==e&&Qf(u,e,0,1).render(u._time,!0,!0),l=1}o&&o.apply(u,s||[])}},t));return c?u.render(0):u},n.tweenFromTo=function(e,t,n){return this.tweenTo(t,Tf({startAt:{time:tp(this,e)}},n))},n.recent=function(){return this._recent},n.nextLabel=function(e){return e===void 0&&(e=this._time),Ep(this,tp(this,e))},n.previousLabel=function(e){return e===void 0&&(e=this._time),Ep(this,tp(this,e),1)},n.currentLabel=function(e){return arguments.length?this.seek(e,!0):this.previousLabel(this._time+_d)},n.shiftChildren=function(e,t,n){n===void 0&&(n=0);var r=this._first,i=this.labels,a;for(e=_f(e);r;)r._start>=n&&(r._start+=e,r._end+=e),r=r._next;if(t)for(a in i)i[a]>=n&&(i[a]+=e);return Ff(this)},n.invalidate=function(t){var n=this._first;for(this._lock=0;n;)n.invalidate(t),n=n._next;return e.prototype.invalidate.call(this,t)},n.clear=function(e){e===void 0&&(e=!0);for(var t=this._first,n;t;)n=t._next,this.remove(t),t=n;return this._dp&&(this._time=this._tTime=this._pTime=0),e&&(this.labels={}),Ff(this)},n.totalDuration=function(e){var t=0,n=this,r=n._last,i=gd,a,o,s;if(arguments.length)return n.timeScale((n._repeat<0?n.duration():n.totalDuration())/(n.reversed()?-e:e));if(n._dirty){for(s=n.parent;r;)a=r._prev,r._dirty&&r.totalDuration(),o=r._start,o>i&&n._sort&&r._ts&&!n._lock?(n._lock=1,Gf(n,r,o-r._delay,1)._lock=0):i=o,o<0&&r._ts&&(t-=o,(!s&&!n._dp||s&&s.smoothChildTiming)&&(n._start+=_f(o/n._ts),n._time-=o,n._tTime-=o),n.shiftChildren(-o,!1,-1/0),i=0),r._end>t&&r._ts&&(t=r._end),r=a;Qf(n,n===K&&n._time>t?n._time:t,1,1),n._dirty=0}return n._tDur},t.updateRoot=function(e){if(K._ts&&(Sf(K,Vf(e,K)),of=Hp.frame),Hp.frame>=lf){lf+=dd.autoSleep||120;var t=K._first;if((!t||!t._ts)&&dd.autoSleep&&Hp._listeners.length<2){for(;t&&!t._ts;)t=t._next;t||Hp.sleep()}}},t}(nm);Tf(rm.prototype,{_lock:0,_hasPause:0,_forcing:0});var im=function(e,t,n,r,i,a,o){var s=new jm(this._pt,e,t,0,1,Tm,null,i),c=0,l=0,u,d,f,p,m,h,g,_;for(s.b=n,s.e=r,n+=``,r+=``,(g=~r.indexOf(`random(`))&&(r=Cp(r)),a&&(_=[n,r],a(_,e,t),n=_[0],r=_[1]),d=n.match(Rd)||[];u=Rd.exec(r);)p=u[0],m=r.substring(c,u.index),f?f=(f+1)%5:m.substr(-5)===`rgba(`&&(f=1),p!==d[l++]&&(h=parseFloat(d[l-1])||0,s._pt={_next:s._pt,p:m||l===1?m:`,`,s:h,c:p.charAt(1)===`=`?vf(h,p)-h:parseFloat(p)-h,m:f&&f<4?Math.round:0},c=Rd.lastIndex);return s.c=c<r.length?r.substring(c,r.length):``,s.fp=o,(zd.test(r)||g)&&(s.e=0),this._pt=s,s},am=function(e,t,n,r,i,a,o,s,c,l){Td(r)&&(r=r(i||0,e,a));var u=e[t],d=n===`get`?Td(u)?c?e[t.indexOf(`set`)||!Td(e[`get`+t.substr(3)])?t:`get`+t.substr(3)](c):e[t]():u:n,f=Td(u)?c?bm:ym:vm,p;if(wd(r)&&(~r.indexOf(`random(`)&&(r=Cp(r)),r.charAt(1)===`=`&&(p=vf(d,r)+(ap(d)||0),(p||p===0)&&(r=p))),!l||d!==r||lm)return!isNaN(d*r)&&r!==``?(p=new jm(this._pt,e,t,+d||0,r-(d||0),typeof u==`boolean`?wm:Cm,0,f),c&&(p.fp=c),o&&p.modifier(o,this,e),this._pt=p):(!u&&!(t in e)&&Yd(t,r),im.call(this,e,t,d,r,f,s||dd.stringFilter,c))},om=function(e,t,n,r,i){if(Td(e)&&(e=mm(e,i,t,n,r)),!Dd(e)||e.style&&e.nodeType||Md(e)||jd(e))return wd(e)?mm(e,i,t,n,r):e;var a={},o;for(o in e)a[o]=mm(e[o],i,t,n,r);return a},sm=function(e,t,n,r,i,a){var o,s,c,l;if(sf[e]&&(o=new sf[e]).init(i,o.rawVars?t[e]:om(t[e],r,i,a,n),n,r,a)!==!1&&(n._pt=s=new jm(n._pt,i,e,0,1,o.render,o,0,o.priority),n!==kp))for(c=n._ptLookup[n._targets.indexOf(i)],l=o._props.length;l--;)c[o._props[l]]=s;return o},cm,lm,um=function e(t,n,r){var i=t.vars,a=i.ease,o=i.startAt,s=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,f=i.keyframes,p=i.autoRevert,m=t._dur,h=t._startAt,g=t._targets,_=t.parent,v=_&&_.data===`nested`?_.vars.targets:g,y=t._overwrite===`auto`&&!pd,b=t.timeline,x=i.easeReverse||d,S,C,w,T,E,D,O,k,A,j,M,ee,N;if(b&&(!f||!a)&&(a=`none`),t._ease=Xp(a,fd.ease),t._rEase=x&&(Xp(x)||t._ease),t._from=!b&&!!i.runBackwards,t._from&&(t.ratio=1),!b||f&&!i.stagger){if(k=g[0]?pf(g[0]).harness:0,ee=k&&i[k.prop],S=kf(i,nf),h&&(h._zTime<0&&h.progress(1),n<0&&u&&s&&!p?h.render(-1,!0):h.revert(u&&m?ef:$d),h._lazy=0),o){if(Pf(t._startAt=_m.set(g,Tf({data:`isStart`,overwrite:!1,parent:_,immediateRender:!0,lazy:!h&&Od(c),startAt:null,delay:0,onUpdate:l&&function(){return Dp(t,`onUpdate`)},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(md||!s&&!p)&&t._startAt.revert(ef),s&&m&&n<=0&&r<=0){n&&(t._zTime=n);return}}else if(u&&m&&!h){if(n&&(s=!1),w=Tf({overwrite:!1,data:`isFromStart`,lazy:s&&!h&&Od(c),immediateRender:s,stagger:0,parent:_},S),ee&&(w[k.prop]=ee),Pf(t._startAt=_m.set(g,w)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(md?t._startAt.revert(ef):t._startAt.render(-1,!0)),t._zTime=n,!s)e(t._startAt,_d,_d);else if(!n)return}for(t._pt=t._ptCache=0,c=m&&Od(c)||c&&!m,C=0;C<g.length;C++){if(E=g[C],O=E._gsap||ff(g)[C]._gsap,t._ptLookup[C]=j={},af[O.id]&&rf.length&&bf(),M=v===g?C:v.indexOf(E),k&&(A=new k).init(E,ee||S,t,M,v)!==!1&&(t._pt=T=new jm(t._pt,E,A.name,0,1,A.render,A,0,A.priority),A._props.forEach(function(e){j[e]=T}),A.priority&&(D=1)),!k||ee)for(w in S)sf[w]&&(A=sm(w,S,t,M,E,v))?A.priority&&(D=1):j[w]=T=am.call(t,E,w,`get`,S[w],M,v,0,i.stringFilter);t._op&&t._op[C]&&t.kill(E,t._op[C]),y&&t._pt&&(cm=t,K.killTweensOf(E,j,t.globalTime(n)),N=!t.parent,cm=0),t._pt&&c&&(af[O.id]=1)}D&&Am(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!N,f&&n<=0&&b.render(gd,!0,!0)},dm=function(e,t,n,r,i,a,o,s){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],l,u,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(l=d[f][t],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==t&&l.fp!==t;)l=l._next;if(!l)return lm=1,e.vars[t]=`+=0`,um(e,o),lm=0,s?Xd(t+` not eligible for reset. Try splitting into individual properties`):1;c.push(l)}for(f=c.length;f--;)u=c[f],l=u._pt||u,l.s=(r||r===0)&&!i?r:l.s+(r||0)+a*l.c,l.c=n-l.s,u.e&&(u.e=gf(n)+ap(u.e)),u.b&&(u.b=l.s+ap(u.b))},fm=function(e,t){var n=e[0]?pf(e[0]).harness:0,r=n&&n.aliases,i,a,o,s;if(!r)return t;for(a in i=Df({},t),r)if(a in i)for(s=r[a].split(`,`),o=s.length;o--;)i[s[o]]=i[a];return i},pm=function(e,t,n,r){var i=t.ease||r||`power1.inOut`,a,o;if(Md(t))o=n[e]||(n[e]=[]),t.forEach(function(e,n){return o.push({t:n/(t.length-1)*100,v:e,e:i})});else for(a in t)o=n[a]||(n[a]=[]),a===`ease`||o.push({t:parseFloat(e),v:t[a],e:i})},mm=function(e,t,n,r,i){return Td(e)?e.call(t,n,r,i):wd(e)&&~e.indexOf(`random(`)?Cp(e):e},hm=df+`repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert`,gm={};hf(hm+`,id,stagger,delay,duration,paused,scrollTrigger`,function(e){return gm[e]=1});var _m=function(e){ud(t,e);function t(t,n,r,i){var a;typeof n==`number`&&(r.duration=n,n=r,r=null),a=e.call(this,i?n:Af(n))||this;var o=a.vars,s=o.duration,c=o.delay,l=o.immediateRender,u=o.stagger,d=o.overwrite,f=o.keyframes,p=o.defaults,m=o.scrollTrigger,h=n.parent||K,g=(Md(t)||jd(t)?Ed(t[0]):`length`in n)?[t]:up(t),_,v,y,b,x,S,C,w;if(a._targets=g.length?ff(g):Xd(`GSAP target `+t+` not found. https://gsap.com`,!dd.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,f||u||Ad(s)||Ad(c)){n=a.vars;var T=n.easeReverse||n.yoyoEase;if(_=a.timeline=new rm({data:`nested`,defaults:p||{},targets:h&&h.data===`nested`?h.vars.targets:g}),_.kill(),_.parent=_._dp=ld(a),_._start=0,u||Ad(s)||Ad(c)){if(b=g.length,C=u&&pp(u),Dd(u))for(x in u)~hm.indexOf(x)&&(w||={},w[x]=u[x]);for(v=0;v<b;v++)y=kf(n,gm),y.stagger=0,T&&(y.easeReverse=T),w&&Df(y,w),S=g[v],y.duration=+mm(s,ld(a),v,S,g),y.delay=(+mm(c,ld(a),v,S,g)||0)-a._delay,!u&&b===1&&y.delay&&(a._delay=c=y.delay,a._start+=c,y.delay=0),_.to(S,y,C?C(v,S,g):0),_._ease=q.none;_.duration()?s=c=0:a.timeline=0}else if(f){Af(Tf(_.vars.defaults,{ease:`none`})),_._ease=Xp(f.ease||n.ease||`none`);var E=0,D,O,k;if(Md(f))f.forEach(function(e){return _.to(g,e,`>`)}),_.duration();else{for(x in y={},f)x===`ease`||x===`easeEach`||pm(x,f[x],y,f.easeEach);for(x in y)for(D=y[x].sort(function(e,t){return e.t-t.t}),E=0,v=0;v<D.length;v++)O=D[v],k={ease:O.e,duration:(O.t-(v?D[v-1].t:0))/100*s},k[x]=O.v,_.to(g,k,E),E+=k.duration;_.duration()<s&&_.to({},{duration:s-_.duration()})}}s||a.duration(s=_.duration())}else a.timeline=0;return d===!0&&!pd&&(cm=ld(a),K.killTweensOf(g),cm=0),Gf(h,ld(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(l||!s&&!f&&a._start===_f(h._time)&&Od(l)&&Rf(ld(a))&&h.data!==`nested`)&&(a._tTime=-_d,a.render(Math.max(0,-c)||0)),m&&Kf(ld(a),m),a}var n=t.prototype;return n.render=function(e,t,n){var r=this._time,i=this._tDur,a=this._dur,o=e<0,s=e>i-_d&&!o?i:e<_d?0:e,c,l,u,d,f,p,m,h;if(!a)Xf(this,e,t,n);else if(s!==this._tTime||!e||n||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==o||this._lazy){if(c=s,h=this.timeline,this._repeat){if(d=a+this._rDelay,this._repeat<-1&&o)return this.totalTime(d*100+e,t,n);if(c=_f(s%d),s===i?(u=this._repeat,c=a):(f=_f(s/d),u=~~f,u&&u===f?(c=a,u--):c>a&&(c=a)),p=this._yoyo&&u&1,p&&(c=a-c),f=Bf(this._tTime,d),c===r&&!n&&this._initted&&u===f)return this._tTime=s,this;u!==f&&this.vars.repeatRefresh&&!p&&!this._lock&&c!==d&&this._initted&&(this._lock=n=1,this.render(_f(d*u),!0).invalidate()._lock=0)}if(!this._initted){if(qf(this,o?e:c,n,t,s))return this._tTime=0,this;if(r!==this._time&&!(n&&this.vars.repeatRefresh&&u!==f))return this;if(a!==this._dur)return this.render(e,t,n)}if(this._rEase){var g=c<r;if(g!==this._inv){var _=g?r:a-r;this._inv=g,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=r,this._invRecip=_?(g?-1:1)/_:0,this._invScale=g?-this.ratio:1-this.ratio,this._invEase=g?this._rEase:this._ease}this.ratio=m=this._invRatio+this._invScale*this._invEase((c-this._invTime)*this._invRecip)}else this.ratio=m=this._ease(c/a);if(this._from&&(this.ratio=m=1-m),this._tTime=s,this._time=c,!this._act&&this._ts&&(this._act=1,this._lazy=0),!r&&s&&!t&&!f&&(Dp(this,`onStart`),this._tTime!==s))return this;for(l=this._pt;l;)l.r(m,l.d),l=l._next;h&&h.render(e<0?e:h._dur*h._ease(c/this._dur),t,n)||this._startAt&&(this._zTime=e),this._onUpdate&&!t&&(o&&Lf(this,e,t,n),Dp(this,`onUpdate`)),this._repeat&&u!==f&&this.vars.onRepeat&&!t&&this.parent&&Dp(this,`onRepeat`),(s===this._tDur||!s)&&this._tTime===s&&(o&&!this._onUpdate&&Lf(this,e,!0,!0),(e||!a)&&(s===this._tDur&&this._ts>0||!s&&this._ts<0)&&Pf(this,1),!t&&!(o&&!r)&&(s||r||p)&&(Dp(this,s===i?`onComplete`:`onReverseComplete`,!0),this._prom&&!(s<i&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(t){return(!t||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(t),e.prototype.invalidate.call(this,t)},n.resetTo=function(e,t,n,r,i){Vp||Hp.wake(),this._ts||this.play();var a=Math.min(this._dur,(this._dp._time-this._start)*this._ts),o;return this._initted||um(this,a),o=this._ease(a/this._dur),dm(this,e,t,n,r,o,a,i)?this.resetTo(e,t,n,r,1):(Uf(this,0),this.parent||Mf(this._dp,this,`_first`,`_last`,this._dp._sort?`_start`:0),this.render(0))},n.kill=function(e,t){if(t===void 0&&(t=`all`),!e&&(!t||t===`all`))return this._lazy=this._pt=0,this.parent?Op(this):this.scrollTrigger&&this.scrollTrigger.kill(!!md),this;if(this.timeline){var n=this.timeline.totalDuration();return this.timeline.killTweensOf(e,t,cm&&cm.vars.overwrite!==!0)._first||Op(this),this.parent&&n!==this.timeline.totalDuration()&&Qf(this,this._dur*this.timeline._tDur/n,0,1),this}var r=this._targets,i=e?up(e):r,a=this._ptLookup,o=this._pt,s,c,l,u,d,f,p;if((!t||t===`all`)&&jf(r,i))return t===`all`&&(this._pt=0),Op(this);for(s=this._op=this._op||[],t!==`all`&&(wd(t)&&(d={},hf(t,function(e){return d[e]=1}),t=d),t=fm(r,t)),p=r.length;p--;)if(~i.indexOf(r[p]))for(d in c=a[p],t===`all`?(s[p]=t,u=c,l={}):(l=s[p]=s[p]||{},u=t),u)f=c&&c[d],f&&((!(`kill`in f.d)||f.d.kill(d)===!0)&&Nf(this,f,`_pt`),delete c[d]),l!==`all`&&(l[d]=1);return this._initted&&!this._pt&&o&&Op(this),this},t.to=function(e,n){return new t(e,n,arguments[2])},t.from=function(e,t){return np(1,arguments)},t.delayedCall=function(e,n,r,i){return new t(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:e,onComplete:n,onReverseComplete:n,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},t.fromTo=function(e,t,n){return np(2,arguments)},t.set=function(e,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new t(e,n)},t.killTweensOf=function(e,t,n){return K.killTweensOf(e,t,n)},t}(nm);Tf(_m.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),hf(`staggerTo,staggerFrom,staggerFromTo`,function(e){_m[e]=function(){var t=new rm,n=sp.call(arguments,0);return n.splice(e===`staggerFromTo`?5:4,0,0),t[e].apply(t,n)}});var vm=function(e,t,n){return e[t]=n},ym=function(e,t,n){return e[t](n)},bm=function(e,t,n,r){return e[t](r.fp,n)},xm=function(e,t,n){return e.setAttribute(t,n)},Sm=function(e,t){return Td(e[t])?ym:G(e[t])&&e.setAttribute?xm:vm},Cm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},wm=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Tm=function(e,t){var n=t._pt,r=``;if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Em=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Dm=function(e,t,n,r){for(var i=this._pt,a;i;)a=i._next,i.p===r&&i.modifier(e,t,n),i=a},Om=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Nf(this,t,`_pt`):t.dep||(n=1),t=r;return!n},km=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Am=function(e){for(var t=e._pt,n,r,i,a;t;){for(n=t._next,r=i;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:i=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=i},jm=function(){function e(e,t,n,r,i,a,o,s,c){this.t=t,this.s=r,this.c=i,this.p=n,this.r=a||Cm,this.d=o||this,this.set=s||vm,this.pr=c||0,this._next=e,e&&(e._prev=this)}var t=e.prototype;return t.modifier=function(e,t,n){this.mSet=this.mSet||this.set,this.set=km,this.m=e,this.mt=n,this.tween=t},e}();hf(df+`parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse`,function(e){return nf[e]=1}),Gd.TweenMax=Gd.TweenLite=_m,Gd.TimelineLite=Gd.TimelineMax=rm,K=new rm({sortChildren:!1,defaults:fd,autoRemoveChildren:!0,id:`root`,smoothChildTiming:!0}),dd.stringFilter=Bp;var Mm=[],Nm={},Pm=[],Fm=0,Im=0,Lm=function(e){return(Nm[e]||Pm).map(function(e){return e()})},Rm=function(){var e=Date.now(),t=[];e-Fm>2&&(Lm(`matchMediaInit`),Mm.forEach(function(e){var n=e.queries,r=e.conditions,i,a,o,s;for(a in n)i=Hd.matchMedia(n[a]).matches,i&&(o=1),i!==r[a]&&(r[a]=i,s=1);s&&(e.revert(),o&&t.push(e))}),Lm(`matchMediaRevert`),t.forEach(function(e){return e.onMatch(e,function(t){return e.add(null,t)})}),Fm=e,Lm(`matchMedia`))},zm=function(){function e(e,t){this.selector=t&&dp(t),this.data=[],this._r=[],this.isReverted=!1,this.id=Im++,e&&this.add(e)}var t=e.prototype;return t.add=function(e,t,n){Td(e)&&(n=t,t=e,e=Td);var r=this,i=function(){var e=hd,i=r.selector,a;return e&&e!==r&&e.data.push(r),n&&(r.selector=dp(n)),hd=r,a=t.apply(r,arguments),Td(a)&&r._r.push(a),hd=e,r.selector=i,r.isReverted=!1,a};return r.last=i,e===Td?i(r,function(e){return r.add(null,e)}):e?r[e]=i:i},t.ignore=function(e){var t=hd;hd=null,e(this),hd=t},t.getTweens=function(){var t=[];return this.data.forEach(function(n){return n instanceof e?t.push.apply(t,n.getTweens()):n instanceof _m&&!(n.parent&&n.parent.data===`nested`)&&t.push(n)}),t},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(e,t){var n=this;if(e?(function(){for(var t=n.getTweens(),r=n.data.length,i;r--;)i=n.data[r],i.data===`isFlip`&&(i.revert(),i.getChildren(!0,!0,!1).forEach(function(e){return t.splice(t.indexOf(e),1)}));for(t.map(function(e){return{g:e._dur||e._delay||e._sat&&!e._sat.vars.immediateRender?e.globalTime(0):-1/0,t:e}}).sort(function(e,t){return t.g-e.g||-1/0}).forEach(function(t){return t.t.revert(e)}),r=n.data.length;r--;)i=n.data[r],i instanceof rm?i.data!==`nested`&&(i.scrollTrigger&&i.scrollTrigger.revert(),i.kill()):!(i instanceof _m)&&i.revert&&i.revert(e);n._r.forEach(function(t){return t(e,n)}),n.isReverted=!0})():this.data.forEach(function(e){return e.kill&&e.kill()}),this.clear(),t)for(var r=Mm.length;r--;)Mm[r].id===this.id&&Mm.splice(r,1)},t.revert=function(e){this.kill(e||{})},e}(),Bm=function(){function e(e){this.contexts=[],this.scope=e,hd&&hd.data.push(this)}var t=e.prototype;return t.add=function(e,t,n){Dd(e)||(e={matches:e});var r=new zm(0,n||this.scope),i=r.conditions={},a,o,s;for(o in hd&&!r.selector&&(r.selector=hd.selector),this.contexts.push(r),t=r.add(`onMatch`,t),r.queries=e,e)o===`all`?s=1:(a=Hd.matchMedia(e[o]),a&&(Mm.indexOf(r)<0&&Mm.push(r),(i[o]=a.matches)&&(s=1),a.addListener?a.addListener(Rm):a.addEventListener(`change`,Rm)));return s&&t(r,function(e){return r.add(null,e)}),this},t.revert=function(e){this.kill(e||{})},t.kill=function(e){this.contexts.forEach(function(t){return t.kill(e,!0)})},e}(),Vm={registerPlugin:function(){[...arguments].forEach(function(e){return jp(e)})},timeline:function(e){return new rm(e)},getTweensOf:function(e,t){return K.getTweensOf(e,t)},getProperty:function(e,t,n,r){wd(e)&&(e=up(e)[0]);var i=pf(e||{}).get,a=n?wf:Cf;return n===`native`&&(n=``),e&&(t?a((sf[t]&&sf[t].get||i)(e,t,n,r)):function(t,n,r){return a((sf[t]&&sf[t].get||i)(e,t,n,r))})},quickSetter:function(e,t,n){if(e=up(e),e.length>1){var r=e.map(function(e){return Gm.quickSetter(e,t,n)}),i=r.length;return function(e){for(var t=i;t--;)r[t](e)}}e=e[0]||{};var a=sf[t],o=pf(e),s=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(t){var r=new a;kp._pt=0,r.init(e,n?t+n:t,kp,0,[e]),r.render(1,r),kp._pt&&Em(1,kp)}:o.set(e,s);return a?c:function(t){return c(e,s,n?t+n:t,o,1)}},quickTo:function(e,t,n){var r,i=Gm.to(e,Tf((r={},r[t]=`+=0.1`,r.paused=!0,r.stagger=0,r),n||{})),a=function(e,n,r){return i.resetTo(t,e,n,r)};return a.tween=i,a},isTweening:function(e){return K.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Xp(e.ease,fd.ease)),Of(fd,e||{})},config:function(e){return Of(dd,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,i=e.defaults,a=e.extendTimeline;(r||``).split(`,`).forEach(function(e){return e&&!sf[e]&&!Gd[e]&&Xd(t+` effect requires `+e+` plugin.`)}),cf[t]=function(e,t,r){return n(up(e),Tf(t||{},i),r)},a&&(rm.prototype[t]=function(e,n,r){return this.add(cf[t](e,Dd(n)?n:(r=n)&&{},this),r)})},registerEase:function(e,t){q[e]=Xp(t)},parseEase:function(e,t){return arguments.length?Xp(e,t):q},getById:function(e){return K.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new rm(e),r,i;for(n.smoothChildTiming=Od(e.smoothChildTiming),K.remove(n),n._dp=0,n._time=n._tTime=K._time,r=K._first;r;)i=r._next,(t||!(!r._dur&&r instanceof _m&&r.vars.onComplete===r._targets[0]))&&Gf(n,r,r._start-r._delay),r=i;return Gf(K,n,0),n},context:function(e,t){return e?new zm(e,t):hd},matchMedia:function(e){return new Bm(e)},matchMediaRefresh:function(){return Mm.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Rm()},addEventListener:function(e,t){var n=Nm[e]||(Nm[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Nm[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:xp,wrapYoyo:Sp,distribute:pp,random:gp,snap:hp,normalize:yp,getUnit:ap,clamp:op,splitColor:Fp,toArray:up,selector:dp,mapRange:wp,pipe:_p,unitize:vp,interpolate:Tp,shuffle:fp},install:Jd,effects:cf,ticker:Hp,updateRoot:rm.updateRoot,plugins:sf,globalTimeline:K,core:{PropTween:jm,globals:Zd,Tween:_m,Timeline:rm,Animation:nm,getCache:pf,_removeLinkedListItem:Nf,reverting:function(){return md},context:function(e){return e&&hd&&(hd.data.push(e),e._ctx=hd),hd},suppressOverwrites:function(e){return pd=e}}};hf(`to,from,fromTo,delayedCall,set,killTweensOf`,function(e){return Vm[e]=_m[e]}),Hp.add(rm.updateRoot),kp=Vm.to({},{duration:0});var Hm=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Um=function(e,t){var n=e._targets,r,i,a;for(r in t)for(i=n.length;i--;)a=e._ptLookup[i][r],(a&&=a.d)&&(a._pt&&(a=Hm(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[i],r))},Wm=function(e,t){return{name:e,headless:1,rawVars:1,init:function(e,n,r){r._onInit=function(e){var r,i;if(wd(n)&&(r={},hf(n,function(e){return r[e]=1}),n=r),t){for(i in r={},n)r[i]=t(n[i]);n=r}Um(e,n)}}}},Gm=Vm.registerPlugin({name:`attr`,init:function(e,t,n,r,i){var a,o,s;for(a in this.tween=n,t)s=e.getAttribute(a)||``,o=this.add(e,`setAttribute`,(s||0)+``,t[a],r,i,0,0,a),o.op=a,o.b=s,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)md?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:`endArray`,headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Wm(`roundProps`,mp),Wm(`modifiers`),Wm(`snap`,hp))||Vm;_m.version=rm.version=Gm.version=`3.15.0`,qd=1,kd()&&Up(),q.Power0,q.Power1,q.Power2,q.Power3,q.Power4,q.Linear,q.Quad,q.Cubic,q.Quart,q.Quint,q.Strong,q.Elastic,q.Back,q.SteppedEase,q.Bounce,q.Sine,q.Expo,q.Circ;var Km,qm,Jm,Ym,Xm,Zm,Qm,$m=function(){return typeof window<`u`},eh={},th=180/Math.PI,nh=Math.PI/180,rh=Math.atan2,ih=1e8,ah=/([A-Z])/g,oh=/(left|right|width|margin|padding|x)/i,sh=/[\s,\(]\S/,ch={autoAlpha:`opacity,visibility`,scale:`scaleX,scaleY`,alpha:`opacity`},lh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},uh=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},dh=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},fh=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ph=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},mh=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},hh=function(e,t){return t.set(t.t,t.p,e===1?t.e:t.b,t)},gh=function(e,t,n){return e.style[t]=n},_h=function(e,t,n){return e.style.setProperty(t,n)},vh=function(e,t,n){return e._gsap[t]=n},yh=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},bh=function(e,t,n,r,i){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(i,a)},xh=function(e,t,n,r,i){var a=e._gsap;a[t]=n,a.renderTransform(i,a)},Sh=`transform`,Ch=Sh+`Origin`,wh=function e(t,n){var r=this,i=this.target,a=i.style,o=i._gsap;if(t in eh&&a){if(this.tfm=this.tfm||{},t!==`transform`)t=ch[t]||t,~t.indexOf(`,`)?t.split(`,`).forEach(function(e){return r.tfm[e]=Uh(i,e)}):this.tfm[t]=o.x?o[t]:Uh(i,t),t===Ch&&(this.tfm.zOrigin=o.zOrigin);else return ch.transform.split(`,`).forEach(function(t){return e.call(r,t,n)});if(this.props.indexOf(Sh)>=0)return;o.svg&&(this.svgo=i.getAttribute(`data-svg-origin`),this.props.push(Ch,n,``)),t=Sh}(a||n)&&this.props.push(t,n,a[t])},Th=function(e){e.translate&&(e.removeProperty(`translate`),e.removeProperty(`scale`),e.removeProperty(`rotate`))},Eh=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,i,a;for(i=0;i<e.length;i+=3)e[i+1]?e[i+1]===2?t[e[i]](e[i+2]):t[e[i]]=e[i+2]:e[i+2]?n[e[i]]=e[i+2]:n.removeProperty(e[i].substr(0,2)===`--`?e[i]:e[i].replace(ah,`-$1`).toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute(`data-svg-origin`,this.svgo||``)),i=Qm(),(!i||!i.isStart)&&!n[Sh]&&(Th(n),r.zOrigin&&n[Ch]&&(n[Ch]+=` `+r.zOrigin+`px`,r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Dh=function(e,t){var n={target:e,props:[],revert:Eh,save:wh};return e._gsap||Gm.core.getCache(e),t&&e.style&&e.nodeType&&t.split(`,`).forEach(function(e){return n.save(e)}),n},Oh,kh=function(e,t){var n=qm.createElementNS?qm.createElementNS((t||`http://www.w3.org/1999/xhtml`).replace(/^https/,`http`),e):qm.createElement(e);return n&&n.style?n:qm.createElement(e)},Ah=function e(t,n,r){var i=getComputedStyle(t);return i[n]||i.getPropertyValue(n.replace(ah,`-$1`).toLowerCase())||i.getPropertyValue(n)||!r&&e(t,Mh(n)||n,1)||``},jh=`O,Moz,ms,Ms,Webkit`.split(`,`),Mh=function(e,t,n){var r=(t||Xm).style,i=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);i--&&!(jh[i]+e in r););return i<0?null:(i===3?`ms`:i>=0?jh[i]:``)+e},Nh=function(){$m()&&window.document&&(Km=window,qm=Km.document,Jm=qm.documentElement,Xm=kh(`div`)||{style:{}},kh(`div`),Sh=Mh(Sh),Ch=Sh+`Origin`,Xm.style.cssText=`border-width:0;line-height:0;position:absolute;padding:0`,Oh=!!Mh(`perspective`),Qm=Gm.core.reverting,Ym=1)},Ph=function(e){var t=e.ownerSVGElement,n=kh(`svg`,t&&t.getAttribute(`xmlns`)||`http://www.w3.org/2000/svg`),r=e.cloneNode(!0),i;r.style.display=`block`,n.appendChild(r),Jm.appendChild(n);try{i=r.getBBox()}catch{}return n.removeChild(r),Jm.removeChild(n),i},Fh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Ih=function(e){var t,n;try{t=e.getBBox()}catch{t=Ph(e),n=1}return t&&(t.width||t.height)||n||(t=Ph(e)),t&&!t.width&&!t.x&&!t.y?{x:+Fh(e,[`x`,`cx`,`x1`])||0,y:+Fh(e,[`y`,`cy`,`y1`])||0,width:0,height:0}:t},Lh=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Ih(e))},Rh=function(e,t){if(t){var n=e.style,r;t in eh&&t!==Ch&&(t=Sh),n.removeProperty?(r=t.substr(0,2),(r===`ms`||t.substr(0,6)===`webkit`)&&(t=`-`+t),n.removeProperty(r===`--`?t:t.replace(ah,`-$1`).toLowerCase())):n.removeAttribute(t)}},zh=function(e,t,n,r,i,a){var o=new jm(e._pt,t,n,0,1,a?hh:mh);return e._pt=o,o.b=r,o.e=i,e._props.push(n),o},Bh={deg:1,rad:1,turn:1},Vh={grid:1,flex:1},Hh=function e(t,n,r,i){var a=parseFloat(r)||0,o=(r+``).trim().substr((a+``).length)||`px`,s=Xm.style,c=oh.test(n),l=t.tagName.toLowerCase()===`svg`,u=(l?`client`:`offset`)+(c?`Width`:`Height`),d=100,f=i===`px`,p=i===`%`,m,h,g,_;if(i===o||!a||Bh[i]||Bh[o])return a;if(o!==`px`&&!f&&(a=e(t,n,r,`px`)),_=t.getCTM&&Lh(t),(p||o===`%`)&&(eh[n]||~n.indexOf(`adius`)))return m=_?t.getBBox()[c?`width`:`height`]:t[u],gf(p?a/m*d:a/100*m);if(s[c?`width`:`height`]=d+(f?o:i),h=i!==`rem`&&~n.indexOf(`adius`)||i===`em`&&t.appendChild&&!l?t:t.parentNode,_&&(h=(t.ownerSVGElement||{}).parentNode),(!h||h===qm||!h.appendChild)&&(h=qm.body),g=h._gsap,g&&p&&g.width&&c&&g.time===Hp.time&&!g.uncache)return gf(a/g.width*d);if(p&&(n===`height`||n===`width`)){var v=t.style[n];t.style[n]=d+i,m=t[u],v?t.style[n]=v:Rh(t,n)}else(p||o===`%`)&&!Vh[Ah(h,`display`)]&&(s.position=Ah(t,`position`)),h===t&&(s.position=`static`),h.appendChild(Xm),m=Xm[u],h.removeChild(Xm),s.position=`absolute`;return c&&p&&(g=pf(h),g.time=Hp.time,g.width=h[u]),gf(f?m*a/d:m&&a?d/m*a:0)},Uh=function(e,t,n,r){var i;return Ym||Nh(),t in ch&&t!==`transform`&&(t=ch[t],~t.indexOf(`,`)&&(t=t.split(`,`)[0])),eh[t]&&t!==`transform`?(i=tg(e,r),i=t===`transformOrigin`?i.svg?i.origin:ng(Ah(e,Ch))+` `+i.zOrigin+`px`:i[t]):(i=e.style[t],(!i||i===`auto`||r||~(i+``).indexOf(`calc(`))&&(i=Jh[t]&&Jh[t](e,t,n)||Ah(e,t)||mf(e,t)||+(t===`opacity`))),n&&!~(i+``).trim().indexOf(` `)?Hh(e,t,i,n)+n:i},Wh=function(e,t,n,r){if(!n||n===`none`){var i=Mh(t,e,1),a=i&&Ah(e,i,1);a&&a!==n?(t=i,n=a):t===`borderColor`&&(n=Ah(e,`borderTopColor`))}var o=new jm(this._pt,e.style,t,0,1,Tm),s=0,c=0,l,u,d,f,p,m,h,g,_,v,y,b;if(o.b=n,o.e=r,n+=``,r+=``,r.substring(0,6)===`var(--`&&(r=Ah(e,r.substring(4,r.indexOf(`)`)))),r===`auto`&&(m=e.style[t],e.style[t]=r,r=Ah(e,t)||r,m?e.style[t]=m:Rh(e,t)),l=[n,r],Bp(l),n=l[0],r=l[1],d=n.match(Ld)||[],b=r.match(Ld)||[],b.length){for(;u=Ld.exec(r);)h=u[0],_=r.substring(s,u.index),p?p=(p+1)%5:(_.substr(-5)===`rgba(`||_.substr(-5)===`hsla(`)&&(p=1),h!==(m=d[c++]||``)&&(f=parseFloat(m)||0,y=m.substr((f+``).length),h.charAt(1)===`=`&&(h=vf(f,h)+y),g=parseFloat(h),v=h.substr((g+``).length),s=Ld.lastIndex-v.length,v||(v=v||dd.units[t]||y,s===r.length&&(r+=v,o.e+=v)),y!==v&&(f=Hh(e,t,m,v)||0),o._pt={_next:o._pt,p:_||c===1?_:`,`,s:f,c:g-f,m:p&&p<4||t===`zIndex`?Math.round:0});o.c=s<r.length?r.substring(s,r.length):``}else o.r=t===`display`&&r===`none`?hh:mh;return zd.test(r)&&(o.e=0),this._pt=o,o},Gh={top:`0%`,bottom:`100%`,left:`0%`,right:`100%`,center:`50%`},Kh=function(e){var t=e.split(` `),n=t[0],r=t[1]||`50%`;return(n===`top`||n===`bottom`||r===`left`||r===`right`)&&(e=n,n=r,r=e),t[0]=Gh[n]||n,t[1]=Gh[r]||r,t.join(` `)},qh=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,i=t.u,a=n._gsap,o,s,c;if(i===`all`||i===!0)r.cssText=``,s=1;else for(i=i.split(`,`),c=i.length;--c>-1;)o=i[c],eh[o]&&(s=1,o=o===`transformOrigin`?Ch:Sh),Rh(n,o);s&&(Rh(n,Sh),a&&(a.svg&&n.removeAttribute(`transform`),r.scale=r.rotate=r.translate=`none`,tg(n,1),a.uncache=1,Th(r)))}},Jh={clearProps:function(e,t,n,r,i){if(i.data!==`isFromStart`){var a=e._pt=new jm(e._pt,t,n,0,0,qh);return a.u=r,a.pr=-10,a.tween=i,e._props.push(n),1}}},Yh=[1,0,0,1,0,0],Xh={},Zh=function(e){return e===`matrix(1, 0, 0, 1, 0, 0)`||e===`none`||!e},Qh=function(e){var t=Ah(e,Sh);return Zh(t)?Yh:t.substr(7).match(Id).map(gf)},$h=function(e,t){var n=e._gsap||pf(e),r=e.style,i=Qh(e),a,o,s,c;return n.svg&&e.getAttribute(`transform`)?(s=e.transform.baseVal.consolidate().matrix,i=[s.a,s.b,s.c,s.d,s.e,s.f],i.join(`,`)===`1,0,0,1,0,0`?Yh:i):(i===Yh&&!e.offsetParent&&e!==Jm&&!n.svg&&(s=r.display,r.display=`block`,a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Jm.appendChild(e)),i=Qh(e),s?r.display=s:Rh(e,`display`),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Jm.removeChild(e))),t&&i.length>6?[i[0],i[1],i[4],i[5],i[12],i[13]]:i)},eg=function(e,t,n,r,i,a){var o=e._gsap,s=i||$h(e,!0),c=o.xOrigin||0,l=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=s[0],p=s[1],m=s[2],h=s[3],g=s[4],_=s[5],v=t.split(` `),y=parseFloat(v[0])||0,b=parseFloat(v[1])||0,x,S,C,w;n?s!==Yh&&(S=f*h-p*m)&&(C=h/S*y+b*(-m/S)+(m*_-h*g)/S,w=y*(-p/S)+f/S*b-(f*_-p*g)/S,y=C,b=w):(x=Ih(e),y=x.x+(~v[0].indexOf(`%`)?y/100*x.width:y),b=x.y+(~(v[1]||v[0]).indexOf(`%`)?b/100*x.height:b)),r||r!==!1&&o.smooth?(g=y-c,_=b-l,o.xOffset=u+(g*f+_*m)-g,o.yOffset=d+(g*p+_*h)-_):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=b,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[Ch]=`0px 0px`,a&&(zh(a,o,`xOrigin`,c,y),zh(a,o,`yOrigin`,l,b),zh(a,o,`xOffset`,u,o.xOffset),zh(a,o,`yOffset`,d,o.yOffset)),e.setAttribute(`data-svg-origin`,y+` `+b)},tg=function(e,t){var n=e._gsap||new tm(e);if(`x`in n&&!t&&!n.uncache)return n;var r=e.style,i=n.scaleX<0,a=`px`,o=`deg`,s=getComputedStyle(e),c=Ah(e,Ch)||`0`,l=u=d=m=h=g=_=v=y=0,u,d,f=p=1,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,ee,N,te,P,F,ne,re,ie;return n.svg=!!(e.getCTM&&Lh(e)),s.translate&&((s.translate!==`none`||s.scale!==`none`||s.rotate!==`none`)&&(r[Sh]=(s.translate===`none`?``:`translate3d(`+(s.translate+` 0 0`).split(` `).slice(0,3).join(`, `)+`) `)+(s.rotate===`none`?``:`rotate(`+s.rotate+`) `)+(s.scale===`none`?``:`scale(`+s.scale.split(` `).join(`,`)+`) `)+(s[Sh]===`none`?``:s[Sh])),r.scale=r.rotate=r.translate=`none`),S=$h(e,n.svg),n.svg&&(n.uncache?(ee=e.getBBox(),c=n.xOrigin-ee.x+`px `+(n.yOrigin-ee.y)+`px`,M=``):M=!t&&e.getAttribute(`data-svg-origin`),eg(e,M||c,!!M||n.originIsAbsolute,n.smooth!==!1,S)),b=n.xOrigin||0,x=n.yOrigin||0,S!==Yh&&(E=S[0],D=S[1],O=S[2],k=S[3],l=A=S[4],u=j=S[5],S.length===6?(f=Math.sqrt(E*E+D*D),p=Math.sqrt(k*k+O*O),m=E||D?rh(D,E)*th:0,_=O||k?rh(O,k)*th+m:0,_&&(p*=Math.abs(Math.cos(_*nh))),n.svg&&(l-=b-(b*E+x*O),u-=x-(b*D+x*k))):(ie=S[6],ne=S[7],te=S[8],P=S[9],F=S[10],re=S[11],l=S[12],u=S[13],d=S[14],C=rh(ie,F),h=C*th,C&&(w=Math.cos(-C),T=Math.sin(-C),M=A*w+te*T,ee=j*w+P*T,N=ie*w+F*T,te=A*-T+te*w,P=j*-T+P*w,F=ie*-T+F*w,re=ne*-T+re*w,A=M,j=ee,ie=N),C=rh(-O,F),g=C*th,C&&(w=Math.cos(-C),T=Math.sin(-C),M=E*w-te*T,ee=D*w-P*T,N=O*w-F*T,re=k*T+re*w,E=M,D=ee,O=N),C=rh(D,E),m=C*th,C&&(w=Math.cos(C),T=Math.sin(C),M=E*w+D*T,ee=A*w+j*T,D=D*w-E*T,j=j*w-A*T,E=M,A=ee),h&&Math.abs(h)+Math.abs(m)>359.9&&(h=m=0,g=180-g),f=gf(Math.sqrt(E*E+D*D+O*O)),p=gf(Math.sqrt(j*j+ie*ie)),C=rh(A,j),_=Math.abs(C)>2e-4?C*th:0,y=re?1/(re<0?-re:re):0),n.svg&&(M=e.getAttribute(`transform`),n.forceCSS=e.setAttribute(`transform`,``)||!Zh(Ah(e,Sh)),M&&e.setAttribute(`transform`,M))),Math.abs(_)>90&&Math.abs(_)<270&&(i?(f*=-1,_+=m<=0?180:-180,m+=m<=0?180:-180):(p*=-1,_+=_<=0?180:-180)),t||=n.uncache,n.x=l-((n.xPercent=l&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-l)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=gf(f),n.scaleY=gf(p),n.rotation=gf(m)+o,n.rotationX=gf(h)+o,n.rotationY=gf(g)+o,n.skewX=_+o,n.skewY=v+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(` `)[2])||!t&&n.zOrigin||0)&&(r[Ch]=ng(c)),n.xOffset=n.yOffset=0,n.force3D=dd.force3D,n.renderTransform=n.svg?lg:Oh?cg:ig,n.uncache=0,n},ng=function(e){return(e=e.split(` `))[0]+` `+e[1]},rg=function(e,t,n){var r=ap(t);return gf(parseFloat(t)+parseFloat(Hh(e,`x`,n+`px`,r)))+r},ig=function(e,t){t.z=`0px`,t.rotationY=t.rotationX=`0deg`,t.force3D=0,cg(e,t)},ag=`0deg`,og=`0px`,sg=`) `,cg=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.z,c=n.rotation,l=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,p=n.scaleX,m=n.scaleY,h=n.transformPerspective,g=n.force3D,_=n.target,v=n.zOrigin,y=``,b=g===`auto`&&e&&e!==1||g===!0;if(v&&(u!==ag||l!==ag)){var x=parseFloat(l)*nh,S=Math.sin(x),C=Math.cos(x),w;x=parseFloat(u)*nh,w=Math.cos(x),a=rg(_,a,S*w*-v),o=rg(_,o,-Math.sin(x)*-v),s=rg(_,s,C*w*-v+v)}h!==og&&(y+=`perspective(`+h+sg),(r||i)&&(y+=`translate(`+r+`%, `+i+`%) `),(b||a!==og||o!==og||s!==og)&&(y+=s!==og||b?`translate3d(`+a+`, `+o+`, `+s+`) `:`translate(`+a+`, `+o+sg),c!==ag&&(y+=`rotate(`+c+sg),l!==ag&&(y+=`rotateY(`+l+sg),u!==ag&&(y+=`rotateX(`+u+sg),(d!==ag||f!==ag)&&(y+=`skew(`+d+`, `+f+sg),(p!==1||m!==1)&&(y+=`scale(`+p+`, `+m+sg),_.style[Sh]=y||`translate(0, 0)`},lg=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.rotation,c=n.skewX,l=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,p=n.xOrigin,m=n.yOrigin,h=n.xOffset,g=n.yOffset,_=n.forceCSS,v=parseFloat(a),y=parseFloat(o),b,x,S,C,w;s=parseFloat(s),c=parseFloat(c),l=parseFloat(l),l&&(l=parseFloat(l),c+=l,s+=l),s||c?(s*=nh,c*=nh,b=Math.cos(s)*u,x=Math.sin(s)*u,S=Math.sin(s-c)*-d,C=Math.cos(s-c)*d,c&&(l*=nh,w=Math.tan(c-l),w=Math.sqrt(1+w*w),S*=w,C*=w,l&&(w=Math.tan(l),w=Math.sqrt(1+w*w),b*=w,x*=w)),b=gf(b),x=gf(x),S=gf(S),C=gf(C)):(b=u,C=d,x=S=0),(v&&!~(a+``).indexOf(`px`)||y&&!~(o+``).indexOf(`px`))&&(v=Hh(f,`x`,a,`px`),y=Hh(f,`y`,o,`px`)),(p||m||h||g)&&(v=gf(v+p-(p*b+m*S)+h),y=gf(y+m-(p*x+m*C)+g)),(r||i)&&(w=f.getBBox(),v=gf(v+r/100*w.width),y=gf(y+i/100*w.height)),w=`matrix(`+b+`,`+x+`,`+S+`,`+C+`,`+v+`,`+y+`)`,f.setAttribute(`transform`,w),_&&(f.style[Sh]=w)},ug=function(e,t,n,r,i){var a=360,o=wd(i),s=parseFloat(i)*(o&&~i.indexOf(`rad`)?th:1)-r,c=r+s+`deg`,l,u;return o&&(l=i.split(`_`)[1],l===`short`&&(s%=a,s!==s%(a/2)&&(s+=s<0?a:-a)),l===`cw`&&s<0?s=(s+a*ih)%a-~~(s/a)*a:l===`ccw`&&s>0&&(s=(s-a*ih)%a-~~(s/a)*a)),e._pt=u=new jm(e._pt,t,n,r,s,uh),u.e=c,u.u=`deg`,e._props.push(n),u},dg=function(e,t){for(var n in t)e[n]=t[n];return e},fg=function(e,t,n){var r=dg({},n._gsap),i=`perspective,force3D,transformOrigin,svgOrigin`,a=n.style,o,s,c,l,u,d,f,p;for(s in r.svg?(c=n.getAttribute(`transform`),n.setAttribute(`transform`,``),a[Sh]=t,o=tg(n,1),Rh(n,Sh),n.setAttribute(`transform`,c)):(c=getComputedStyle(n)[Sh],a[Sh]=t,o=tg(n,1),a[Sh]=c),eh)c=r[s],l=o[s],c!==l&&i.indexOf(s)<0&&(f=ap(c),p=ap(l),u=f===p?parseFloat(c):Hh(n,s,c,p),d=parseFloat(l),e._pt=new jm(e._pt,o,s,u,d-u,lh),e._pt.u=p||0,e._props.push(s));dg(o,r)};hf(`padding,margin,Width,Radius`,function(e,t){var n=`Top`,r=`Right`,i=`Bottom`,a=`Left`,o=(t<3?[n,r,i,a]:[n+a,n+r,i+r,i+a]).map(function(n){return t<2?e+n:`border`+n+e});Jh[t>1?`border`+e:e]=function(e,t,n,r,i){var a,s;if(arguments.length<4)return a=o.map(function(t){return Uh(e,t,n)}),s=a.join(` `),s.split(a[0]).length===5?a[0]:s;a=(r+``).split(` `),s={},o.forEach(function(e,t){return s[e]=a[t]=a[t]||a[(t-1)/2|0]}),e.init(t,s,i)}});var pg={name:`css`,register:Nh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,i){var a=this._props,o=e.style,s=n.vars.startAt,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;for(m in Ym||Nh(),this.styles=this.styles||Dh(e),C=this.styles.props,this.tween=n,t)if(m!==`autoRound`&&(l=t[m],!(sf[m]&&sm(m,t,n,r,e,i)))){if(f=typeof l,p=Jh[m],f===`function`&&(l=l.call(n,r,e,i),f=typeof l),f===`string`&&~l.indexOf(`random(`)&&(l=Cp(l)),p)p(this,e,m,l,n)&&(S=1);else if(m.substr(0,2)===`--`)c=(getComputedStyle(e).getPropertyValue(m)+``).trim(),l+=``,Rp.lastIndex=0,Rp.test(c)||(h=ap(c),g=ap(l),g?h!==g&&(c=Hh(e,m,c,g)+g):h&&(l+=h)),this.add(o,`setProperty`,c,l,r,i,0,0,m),a.push(m),C.push(m,0,o[m]);else if(f!==`undefined`){if(s&&m in s?(c=typeof s[m]==`function`?s[m].call(n,r,e,i):s[m],wd(c)&&~c.indexOf(`random(`)&&(c=Cp(c)),ap(c+``)||c===`auto`||(c+=dd.units[m]||ap(Uh(e,m))||``),(c+``).charAt(1)===`=`&&(c=Uh(e,m))):c=Uh(e,m),d=parseFloat(c),_=f===`string`&&l.charAt(1)===`=`&&l.substr(0,2),_&&(l=l.substr(2)),u=parseFloat(l),m in ch&&(m===`autoAlpha`&&(d===1&&Uh(e,`visibility`)===`hidden`&&u&&(d=0),C.push(`visibility`,0,o.visibility),zh(this,o,`visibility`,d?`inherit`:`hidden`,u?`inherit`:`hidden`,!u)),m!==`scale`&&m!==`transform`&&(m=ch[m],~m.indexOf(`,`)&&(m=m.split(`,`)[0]))),v=m in eh,v){if(this.styles.save(m),w=l,f===`string`&&l.substring(0,6)===`var(--`){if(l=Ah(e,l.substring(4,l.indexOf(`)`))),l.substring(0,5)===`calc(`){var T=e.style.perspective;e.style.perspective=l,l=Ah(e,`perspective`),T?e.style.perspective=T:Rh(e,`perspective`)}u=parseFloat(l)}if(y||(b=e._gsap,b.renderTransform&&!t.parseTransform||tg(e,t.parseTransform),x=t.smoothOrigin!==!1&&b.smooth,y=this._pt=new jm(this._pt,o,Sh,0,1,b.renderTransform,b,0,-1),y.dep=1),m===`scale`)this._pt=new jm(this._pt,b,`scaleY`,b.scaleY,(_?vf(b.scaleY,_+u):u)-b.scaleY||0,lh),this._pt.u=0,a.push(`scaleY`,m),m+=`X`;else if(m===`transformOrigin`){C.push(Ch,0,o[Ch]),l=Kh(l),b.svg?eg(e,l,0,x,0,this):(g=parseFloat(l.split(` `)[2])||0,g!==b.zOrigin&&zh(this,b,`zOrigin`,b.zOrigin,g),zh(this,o,m,ng(c),ng(l)));continue}else if(m===`svgOrigin`){eg(e,l,1,x,0,this);continue}else if(m in Xh){ug(this,b,m,d,_?vf(d,_+l):l);continue}else if(m===`smoothOrigin`){zh(this,b,`smooth`,b.smooth,l);continue}else if(m===`force3D`){b[m]=l;continue}else if(m===`transform`){fg(this,l,e);continue}}else m in o||(m=Mh(m)||m);if(v||(u||u===0)&&(d||d===0)&&!sh.test(l)&&m in o)h=(c+``).substr((d+``).length),u||=0,g=ap(l)||(m in dd.units?dd.units[m]:h),h!==g&&(d=Hh(e,m,c,g)),this._pt=new jm(this._pt,v?b:o,m,d,(_?vf(d,_+u):u)-d,!v&&(g===`px`||m===`zIndex`)&&t.autoRound!==!1?ph:lh),this._pt.u=g||0,v&&w!==l?(this._pt.b=c,this._pt.e=w,this._pt.r=fh):h!==g&&g!==`%`&&(this._pt.b=c,this._pt.r=dh);else if(m in o)Wh.call(this,e,m,c,_?_+l:l);else if(m in e)this.add(e,m,c||e[m],_?_+l:l,r,i);else if(m!==`parseTransform`){Yd(m,l);continue}v||(m in o?C.push(m,0,o[m]):typeof e[m]==`function`?C.push(m,2,e[m]()):C.push(m,1,c||e[m])),a.push(m)}}S&&Am(this)},render:function(e,t){if(t.tween._time||!Qm())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Uh,aliases:ch,getSetter:function(e,t,n){var r=ch[t];return r&&r.indexOf(`,`)<0&&(t=r),t in eh&&t!==Ch&&(e._gsap.x||Uh(e,`x`))?n&&Zm===n?t===`scale`?yh:vh:(Zm=n||{})&&(t===`scale`?bh:xh):e.style&&!G(e.style[t])?gh:~t.indexOf(`-`)?_h:Sm(e,t)},core:{_removeProperty:Rh,_getMatrix:$h}};Gm.utils.checkPrefix=Mh,Gm.core.getStyleSaver=Dh,(function(e,t,n,r){var i=hf(e+`,`+t+`,`+n,function(e){eh[e]=1});hf(t,function(e){dd.units[e]=`deg`,Xh[e]=1}),ch[i[13]]=e+`,`+t,hf(r,function(e){var t=e.split(`:`);ch[t[1]]=i[t[0]]})})(`x,y,z,scale,scaleX,scaleY,xPercent,yPercent`,`rotation,rotationX,rotationY,skewX,skewY`,`transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective`,`0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY`),hf(`x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective`,function(e){dd.units[e]=`px`}),Gm.registerPlugin(pg);var mg=Gm.registerPlugin(pg)||Gm;mg.core.Tween;var hg=typeof document<`u`?_.useLayoutEffect:_.useEffect,gg=e=>e&&!Array.isArray(e)&&typeof e==`object`,_g=[],vg={},yg=mg,bg=(e,t=_g)=>{let n=vg;gg(e)?(n=e,e=null,t=`dependencies`in n?n.dependencies:_g):gg(t)&&(n=t,t=`dependencies`in n?n.dependencies:_g),e&&typeof e!=`function`&&console.warn(`First parameter must be a function or config object`);let{scope:r,revertOnUpdate:i}=n,a=(0,_.useRef)(!1),o=(0,_.useRef)(yg.context(()=>{},r)),s=(0,_.useRef)(e=>o.current.add(null,e)),c=t&&t.length&&!i;return c&&hg(()=>(a.current=!0,()=>o.current.revert()),_g),hg(()=>{if(e&&o.current.add(e,r),!c||!a.current)return()=>o.current.revert()},t),{context:o.current,contextSafe:s.current}};bg.register=e=>{yg=e},bg.headless=!0;function xg(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Sg(e,t,n){return t&&xg(e.prototype,t),n&&xg(e,n),e}var Cg,wg,Tg,Eg,Dg,Og,kg,Ag,jg,Mg,Ng,Pg,Fg,Ig=function(){return Cg||typeof window<`u`&&(Cg=window.gsap)&&Cg.registerPlugin&&Cg},Lg=1,Rg=[],J=[],zg=[],Bg=Date.now,Vg=function(e,t){return t},Hg=function(){var e=jg.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,J),r.push.apply(r,zg),J=n,zg=r,Vg=function(e,n){return t[e](n)}},Ug=function(e,t){return~zg.indexOf(e)&&zg[zg.indexOf(e)+1][t]},Wg=function(e){return!!~Mg.indexOf(e)},Gg=function(e,t,n,r,i){return e.addEventListener(t,n,{passive:r!==!1,capture:!!i})},Kg=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},qg=`scrollLeft`,Jg=`scrollTop`,Yg=function(){return Ng&&Ng.isPressed||J.cache++},Xg=function(e,t){var n=function n(r){if(r||r===0){Lg&&(Tg.history.scrollRestoration=`manual`);var i=Ng&&Ng.isPressed;r=n.v=Math.round(r)||(Ng&&Ng.iOS?1:0),e(r),n.cacheID=J.cache,i&&Vg(`ss`,r)}else(t||J.cache!==n.cacheID||Vg(`ref`))&&(n.cacheID=J.cache,n.v=e());return n.v+n.offset};return n.offset=0,e&&n},Zg={s:qg,p:`left`,p2:`Left`,os:`right`,os2:`Right`,d:`width`,d2:`Width`,a:`x`,sc:Xg(function(e){return arguments.length?Tg.scrollTo(e,Qg.sc()):Tg.pageXOffset||Eg[qg]||Dg[qg]||Og[qg]||0})},Qg={s:Jg,p:`top`,p2:`Top`,os:`bottom`,os2:`Bottom`,d:`height`,d2:`Height`,a:`y`,op:Zg,sc:Xg(function(e){return arguments.length?Tg.scrollTo(Zg.sc(),e):Tg.pageYOffset||Eg[Jg]||Dg[Jg]||Og[Jg]||0})},$g=function(e,t){return(t&&t._ctx&&t._ctx.selector||Cg.utils.toArray)(e)[0]||(typeof e==`string`&&Cg.config().nullTargetWarn!==!1?console.warn(`Element not found:`,e):null)},e_=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},t_=function(e,t){var n=t.s,r=t.sc;Wg(e)&&(e=Eg.scrollingElement||Dg);var i=J.indexOf(e),a=r===Qg.sc?1:2;!~i&&(i=J.push(e)-1),J[i+a]||Gg(e,`scroll`,Yg);var o=J[i+a],s=o||(J[i+a]=Xg(Ug(e,n),!0)||(Wg(e)?r:Xg(function(t){return arguments.length?e[n]=t:e[n]})));return s.target=e,o||(s.smooth=Cg.getProperty(e,`scrollBehavior`)===`smooth`),s},n_=function(e,t,n){var r=e,i=e,a=Bg(),o=a,s=t||50,c=Math.max(500,s*3),l=function(e,t){var c=Bg();t||c-a>s?(i=r,r=e,o=a,a=c):n?r+=e:r=i+(e-i)/(c-o)*(a-o)};return{update:l,reset:function(){i=r=n?0:r,o=a=0},getVelocity:function(e){var t=o,s=i,u=Bg();return(e||e===0)&&e!==r&&l(e),a===o||u-o>c?0:(r+(n?s:-s))/((n?u:a)-t)*1e3}}},r_=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},i_=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},a_=function(){jg=Cg.core.globals().ScrollTrigger,jg&&jg.core&&Hg()},o_=function(e){return Cg=e||Ig(),!wg&&Cg&&typeof document<`u`&&document.body&&(Tg=window,Eg=document,Dg=Eg.documentElement,Og=Eg.body,Mg=[Tg,Eg,Dg,Og],Cg.utils.clamp,Fg=Cg.core.context||function(){},Ag=`onpointerenter`in Og?`pointer`:`mouse`,kg=s_.isTouch=Tg.matchMedia&&Tg.matchMedia(`(hover: none), (pointer: coarse)`).matches?1:`ontouchstart`in Tg||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Pg=s_.eventTypes=(`ontouchstart`in Dg?`touchstart,touchmove,touchcancel,touchend`:`onpointerdown`in Dg?`pointerdown,pointermove,pointercancel,pointerup`:`mousedown,mousemove,mouseup,mouseup`).split(`,`),setTimeout(function(){return Lg=0},500),wg=1),jg||a_(),wg};Zg.op=Qg,J.cache=0;var s_=function(){function e(e){this.init(e)}var t=e.prototype;return t.init=function(e){wg||o_(Cg)||console.warn(`Please gsap.registerPlugin(Observer)`),jg||a_();var t=e.tolerance,n=e.dragMinimum,r=e.type,i=e.target,a=e.lineHeight,o=e.debounce,s=e.preventDefault,c=e.onStop,l=e.onStopDelay,u=e.ignore,d=e.wheelSpeed,f=e.event,p=e.onDragStart,m=e.onDragEnd,h=e.onDrag,g=e.onPress,_=e.onRelease,v=e.onRight,y=e.onLeft,b=e.onUp,x=e.onDown,S=e.onChangeX,C=e.onChangeY,w=e.onChange,T=e.onToggleX,E=e.onToggleY,D=e.onHover,O=e.onHoverEnd,k=e.onMove,A=e.ignoreCheck,j=e.isNormalizer,M=e.onGestureStart,ee=e.onGestureEnd,N=e.onWheel,te=e.onEnable,P=e.onDisable,F=e.onClick,ne=e.scrollSpeed,re=e.capture,ie=e.allowClicks,ae=e.lockAxis,oe=e.onLockAxis;this.target=i=$g(i)||Dg,this.vars=e,u&&=Cg.utils.toArray(u),t||=1e-9,n||=0,d||=1,ne||=1,r||=`wheel,touch,pointer`,o=o!==!1,a||=parseFloat(Tg.getComputedStyle(Og).lineHeight)||22;var I,se,ce,le,ue,de,fe,L=this,pe=0,me=0,he=e.passive||!s&&e.passive!==!1,ge=t_(i,Zg),_e=t_(i,Qg),ve=ge(),ye=_e(),be=~r.indexOf(`touch`)&&!~r.indexOf(`pointer`)&&Pg[0]===`pointerdown`,xe=Wg(i),R=i.ownerDocument||Eg,Se=[0,0,0],Ce=[0,0,0],we=0,Te=function(){return we=Bg()},Ee=function(e,t){return(L.event=e)&&u&&e_(e.target,u)||t&&be&&e.pointerType!==`touch`||A&&A(e,t)},De=function(){L._vx.reset(),L._vy.reset(),se.pause(),c&&c(L)},Oe=function(){var e=L.deltaX=i_(Se),n=L.deltaY=i_(Ce),r=Math.abs(e)>=t,i=Math.abs(n)>=t;w&&(r||i)&&w(L,e,n,Se,Ce),r&&(v&&L.deltaX>0&&v(L),y&&L.deltaX<0&&y(L),S&&S(L),T&&L.deltaX<0!=pe<0&&T(L),pe=L.deltaX,Se[0]=Se[1]=Se[2]=0),i&&(x&&L.deltaY>0&&x(L),b&&L.deltaY<0&&b(L),C&&C(L),E&&L.deltaY<0!=me<0&&E(L),me=L.deltaY,Ce[0]=Ce[1]=Ce[2]=0),(le||ce)&&(k&&k(L),ce&&=(p&&ce===1&&p(L),h&&h(L),0),le=!1),de&&!(de=!1)&&oe&&oe(L),ue&&=(N(L),!1),I=0},ke=function(e,t,n){Se[n]+=e,Ce[n]+=t,L._vx.update(e),L._vy.update(t),o?I||=requestAnimationFrame(Oe):Oe()},Ae=function(e,t){ae&&!fe&&(L.axis=fe=Math.abs(e)>Math.abs(t)?`x`:`y`,de=!0),fe!==`y`&&(Se[2]+=e,L._vx.update(e,!0)),fe!==`x`&&(Ce[2]+=t,L._vy.update(t,!0)),o?I||=requestAnimationFrame(Oe):Oe()},je=function(e){if(!Ee(e,1)){e=r_(e,s);var t=e.clientX,r=e.clientY,i=t-L.x,a=r-L.y,o=L.isDragging;L.x=t,L.y=r,(o||(i||a)&&(Math.abs(L.startX-t)>=n||Math.abs(L.startY-r)>=n))&&(ce||=o?2:1,o||(L.isDragging=!0),Ae(i,a))}},Me=L.onPress=function(e){Ee(e,1)||e&&e.button||(L.axis=fe=null,se.pause(),L.isPressed=!0,e=r_(e),pe=me=0,L.startX=L.x=e.clientX,L.startY=L.y=e.clientY,L._vx.reset(),L._vy.reset(),Gg(j?i:R,Pg[1],je,he,!0),L.deltaX=L.deltaY=0,g&&g(L))},Ne=L.onRelease=function(e){if(!Ee(e,1)){Kg(j?i:R,Pg[1],je,!0);var t=!isNaN(L.y-L.startY),n=L.isDragging,r=n&&(Math.abs(L.x-L.startX)>3||Math.abs(L.y-L.startY)>3),a=r_(e);!r&&t&&(L._vx.reset(),L._vy.reset(),s&&ie&&Cg.delayedCall(.08,function(){if(Bg()-we>300&&!e.defaultPrevented){if(e.target.click)e.target.click();else if(R.createEvent){var t=R.createEvent(`MouseEvents`);t.initMouseEvent(`click`,!0,!0,Tg,1,a.screenX,a.screenY,a.clientX,a.clientY,!1,!1,!1,!1,0,null),e.target.dispatchEvent(t)}}})),L.isDragging=L.isGesturing=L.isPressed=!1,c&&n&&!j&&se.restart(!0),ce&&Oe(),m&&n&&m(L),_&&_(L,r)}},z=function(e){return e.touches&&e.touches.length>1&&(L.isGesturing=!0)&&M(e,L.isDragging)},Pe=function(){return(L.isGesturing=!1)||ee(L)},Fe=function(e){if(!Ee(e)){var t=ge(),n=_e();ke((t-ve)*ne,(n-ye)*ne,1),ve=t,ye=n,c&&se.restart(!0)}},Ie=function(e){if(!Ee(e)){e=r_(e,s),N&&(ue=!0);var t=(e.deltaMode===1?a:e.deltaMode===2?Tg.innerHeight:1)*d;ke(e.deltaX*t,e.deltaY*t,0),c&&!j&&se.restart(!0)}},Le=function(e){if(!Ee(e)){var t=e.clientX,n=e.clientY,r=t-L.x,i=n-L.y;L.x=t,L.y=n,le=!0,c&&se.restart(!0),(r||i)&&Ae(r,i)}},Re=function(e){L.event=e,D(L)},ze=function(e){L.event=e,O(L)},Be=function(e){return Ee(e)||r_(e,s)&&F(L)};se=L._dc=Cg.delayedCall(l||.25,De).pause(),L.deltaX=L.deltaY=0,L._vx=n_(0,50,!0),L._vy=n_(0,50,!0),L.scrollX=ge,L.scrollY=_e,L.isDragging=L.isGesturing=L.isPressed=!1,Fg(this),L.enable=function(e){return L.isEnabled||(Gg(xe?R:i,`scroll`,Yg),r.indexOf(`scroll`)>=0&&Gg(xe?R:i,`scroll`,Fe,he,re),r.indexOf(`wheel`)>=0&&Gg(i,`wheel`,Ie,he,re),(r.indexOf(`touch`)>=0&&kg||r.indexOf(`pointer`)>=0)&&(Gg(i,Pg[0],Me,he,re),Gg(R,Pg[2],Ne),Gg(R,Pg[3],Ne),ie&&Gg(i,`click`,Te,!0,!0),F&&Gg(i,`click`,Be),M&&Gg(R,`gesturestart`,z),ee&&Gg(R,`gestureend`,Pe),D&&Gg(i,Ag+`enter`,Re),O&&Gg(i,Ag+`leave`,ze),k&&Gg(i,Ag+`move`,Le)),L.isEnabled=!0,L.isDragging=L.isGesturing=L.isPressed=le=ce=!1,L._vx.reset(),L._vy.reset(),ve=ge(),ye=_e(),e&&e.type&&Me(e),te&&te(L)),L},L.disable=function(){L.isEnabled&&(Rg.filter(function(e){return e!==L&&Wg(e.target)}).length||Kg(xe?R:i,`scroll`,Yg),L.isPressed&&(L._vx.reset(),L._vy.reset(),Kg(j?i:R,Pg[1],je,!0)),Kg(xe?R:i,`scroll`,Fe,re),Kg(i,`wheel`,Ie,re),Kg(i,Pg[0],Me,re),Kg(R,Pg[2],Ne),Kg(R,Pg[3],Ne),Kg(i,`click`,Te,!0),Kg(i,`click`,Be),Kg(R,`gesturestart`,z),Kg(R,`gestureend`,Pe),Kg(i,Ag+`enter`,Re),Kg(i,Ag+`leave`,ze),Kg(i,Ag+`move`,Le),L.isEnabled=L.isPressed=L.isDragging=!1,P&&P(L))},L.kill=L.revert=function(){L.disable();var e=Rg.indexOf(L);e>=0&&Rg.splice(e,1),Ng===L&&(Ng=0)},Rg.push(L),j&&Wg(i)&&(Ng=L),L.enable(f)},Sg(e,[{key:`velocityX`,get:function(){return this._vx.getVelocity()}},{key:`velocityY`,get:function(){return this._vy.getVelocity()}}]),e}();s_.version=`3.15.0`,s_.create=function(e){return new s_(e)},s_.register=o_,s_.getAll=function(){return Rg.slice()},s_.getById=function(e){return Rg.filter(function(t){return t.vars.id===e})[0]},Ig()&&Cg.registerPlugin(s_);var Y,c_,X,l_,u_,d_,f_,p_,m_,h_,g_,__,v_,y_,b_,x_,S_,C_,w_,T_,E_,D_,O_,k_,A_,j_,M_,N_,P_,F_,I_,L_,R_,z_,B_=1,V_=Date.now,H_=V_(),U_=0,W_=0,G_=function(e,t,n){var r=sv(e)&&(e.substr(0,6)===`clamp(`||e.indexOf(`max`)>-1);return n[`_`+t+`Clamp`]=r,r?e.substr(6,e.length-7):e},K_=function(e,t){return t&&(!sv(e)||e.substr(0,6)!==`clamp(`)?`clamp(`+e+`)`:e},q_=function e(){return W_&&requestAnimationFrame(e)},J_=function(){return y_=1},Y_=function(){return y_=0},X_=function(e){return e},Z_=function(e){return Math.round(e*1e5)/1e5||0},Q_=function(){return typeof window<`u`},$_=function(){return Y||Q_()&&(Y=window.gsap)&&Y.registerPlugin&&Y},ev=function(e){return!!~f_.indexOf(e)},tv=function(e){return(e===`Height`?I_:X[`inner`+e])||u_[`client`+e]||d_[`client`+e]},nv=function(e){return Ug(e,`getBoundingClientRect`)||(ev(e)?function(){return Oy.width=X.innerWidth,Oy.height=I_,Oy}:function(){return Mv(e)})},rv=function(e,t,n){var r=n.d,i=n.d2,a=n.a;return(a=Ug(e,`getBoundingClientRect`))?function(){return a()[r]}:function(){return(t?tv(i):e[`client`+i])||0}},iv=function(e,t){return!t||~zg.indexOf(e)?nv(e):function(){return Oy}},av=function(e,t){var n=t.s,r=t.d2,i=t.d,a=t.a;return Math.max(0,(n=`scroll`+r)&&(a=Ug(e,n))?a()-nv(e)()[i]:ev(e)?(u_[n]||d_[n])-tv(r):e[n]-e[`offset`+r])},ov=function(e,t){for(var n=0;n<w_.length;n+=3)(!t||~t.indexOf(w_[n+1]))&&e(w_[n],w_[n+1],w_[n+2])},sv=function(e){return typeof e==`string`},cv=function(e){return typeof e==`function`},lv=function(e){return typeof e==`number`},uv=function(e){return typeof e==`object`},dv=function(e,t,n){return e&&e.progress(+!t)&&n&&e.pause()},fv=function(e,t,n){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);r&&r.totalTime&&(e.callbackAnimation=r)}},pv=Math.abs,mv=`left`,hv=`top`,gv=`right`,_v=`bottom`,vv=`width`,yv=`height`,bv=`Right`,xv=`Left`,Sv=`Top`,Cv=`Bottom`,wv=`padding`,Tv=`margin`,Ev=`Width`,Dv=`Height`,Ov=`px`,kv=function(e){return X.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},Av=function(e){var t=kv(e).position;e.style.position=t===`absolute`||t===`fixed`?t:`relative`},jv=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Mv=function(e,t){var n=t&&kv(e)[b_]!==`matrix(1, 0, 0, 1, 0, 0)`&&Y.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),r},Nv=function(e,t){var n=t.d2;return e[`offset`+n]||e[`client`+n]||0},Pv=function(e){var t=[],n=e.labels,r=e.duration(),i;for(i in n)t.push(n[i]/r);return t},Fv=function(e){return function(t){return Y.utils.snap(Pv(e),t)}},Iv=function(e){var t=Y.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(e,t){return e-t});return n?function(e,r,i){i===void 0&&(i=.001);var a;if(!r)return t(e);if(r>0){for(e-=i,a=0;a<n.length;a++)if(n[a]>=e)return n[a];return n[a-1]}for(a=n.length,e+=i;a--;)if(n[a]<=e)return n[a];return n[0]}:function(n,r,i){i===void 0&&(i=.001);var a=t(n);return!r||Math.abs(a-n)<i||a-n<0==r<0?a:t(r<0?n-e:n+e)}},Lv=function(e){return function(t,n){return Iv(Pv(e))(t,n.direction)}},Rv=function(e,t,n,r){return n.split(`,`).forEach(function(n){return e(t,n,r)})},zv=function(e,t,n,r,i){return e.addEventListener(t,n,{passive:!r,capture:!!i})},Bv=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Vv=function(e,t,n){n&&=n.wheelHandler,n&&(e(t,`wheel`,n),e(t,`touchmove`,n))},Hv={startColor:`green`,endColor:`red`,indent:0,fontSize:`16px`,fontWeight:`normal`},Uv={toggleActions:`play`,anticipatePin:0},Wv={top:0,left:0,center:.5,bottom:1,right:1},Gv=function(e,t){if(sv(e)){var n=e.indexOf(`=`),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf(`%`)>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in Wv?Wv[e]*t:~e.indexOf(`%`)?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Kv=function(e,t,n,r,i,a,o,s){var c=i.startColor,l=i.endColor,u=i.fontSize,d=i.indent,f=i.fontWeight,p=l_.createElement(`div`),m=ev(n)||Ug(n,`pinType`)===`fixed`,h=e.indexOf(`scroller`)!==-1,g=m?d_:n.tagName===`IFRAME`?n.contentDocument.body:n,_=e.indexOf(`start`)!==-1,v=_?c:l,y=`border-color:`+v+`;font-size:`+u+`;color:`+v+`;font-weight:`+f+`;pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;`;return y+=`position:`+((h||s)&&m?`fixed;`:`absolute;`),(h||s||!m)&&(y+=(r===Qg?gv:_v)+`:`+(a+parseFloat(d))+`px;`),o&&(y+=`box-sizing:border-box;text-align:left;width:`+o.offsetWidth+`px;`),p._isStart=_,p.setAttribute(`class`,`gsap-marker-`+e+(t?` marker-`+t:``)),p.style.cssText=y,p.innerText=t||t===0?e+`-`+t:e,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p[`offset`+r.op.d2],qv(p,0,r,_),p},qv=function(e,t,n,r){var i={display:`block`},a=n[r?`os2`:`p2`],o=n[r?`p2`:`os2`];e._isFlipped=r,i[n.a+`Percent`]=r?-100:0,i[n.a]=r?`1px`:0,i[`border`+a+Ev]=1,i[`border`+o+Ev]=0,i[n.p]=t+`px`,Y.set(e,i)},Z=[],Jv={},Yv,Xv=function(){return V_()-U_>34&&(Yv||=requestAnimationFrame(yy))},Zv=function(){(!O_||!O_.isPressed||O_.startX>d_.clientWidth)&&(J.cache++,O_?Yv||=requestAnimationFrame(yy):yy(),U_||ry(`scrollStart`),U_=V_())},Qv=function(){j_=X.innerWidth,A_=X.innerHeight},$v=function(e){J.cache++,(e===!0||!v_&&!D_&&!l_.fullscreenElement&&!l_.webkitFullscreenElement&&(!k_||j_!==X.innerWidth||Math.abs(X.innerHeight-A_)>X.innerHeight*.25))&&p_.restart(!0)},ey={},ty=[],ny=function e(){return Bv(Q,`scrollEnd`,e)||hy(!0)},ry=function(e){return ey[e]&&ey[e].map(function(e){return e()})||ty},iy=[],ay=function(e){for(var t=0;t<iy.length;t+=5)(!e||iy[t+4]&&iy[t+4].query===e)&&(iy[t].style.cssText=iy[t+1],iy[t].getBBox&&iy[t].setAttribute(`transform`,iy[t+2]||``),iy[t+3].uncache=1)},oy=function(){return J.forEach(function(e){return cv(e)&&++e.cacheID&&(e.rec=e())})},sy=function(e,t){var n;for(x_=0;x_<Z.length;x_++)n=Z[x_],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));L_=!0,t&&ay(t),t||ry(`revert`)},cy=function(e,t){J.cache++,(t||!ly)&&J.forEach(function(e){return cv(e)&&e.cacheID++&&(e.rec=0)}),sv(e)&&(X.history.scrollRestoration=P_=e)},ly,uy=0,dy,fy=function(){if(dy!==uy){var e=dy=uy;requestAnimationFrame(function(){return e===uy&&hy(!0)})}},py=function(){d_.appendChild(F_),I_=!O_&&F_.offsetHeight||X.innerHeight,d_.removeChild(F_)},my=function(e){return m_(`.gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end`).forEach(function(t){return t.style.display=e?`none`:`block`})},hy=function(e,t){if(u_=l_.documentElement,d_=l_.body,f_=[X,l_,u_,d_],U_&&!e&&!L_){zv(Q,`scrollEnd`,ny);return}py(),ly=Q.isRefreshing=!0,L_||oy();var n=ry(`refreshInit`);T_&&Q.sort(),t||sy(),J.forEach(function(e){cv(e)&&(e.smooth&&(e.target.style.scrollBehavior=`auto`),e(0))}),Z.slice(0).forEach(function(e){return e.refresh()}),L_=!1,Z.forEach(function(e){if(e._subPinOffset&&e.pin){var t=e.vars.horizontal?`offsetWidth`:`offsetHeight`,n=e.pin[t];e.revert(!0,1),e.adjustPinSpacing(e.pin[t]-n),e.refresh()}}),R_=1,my(!0),Z.forEach(function(e){var t=av(e.scroller,e._dir),n=e.vars.end===`max`||e._endClamp&&e.end>t,r=e._startClamp&&e.start>=t;(n||r)&&e.setPositions(r?t-1:e.start,n?Math.max(r?t:e.start+1,t):e.end,!0)}),my(!1),R_=0,n.forEach(function(e){return e&&e.render&&e.render(-1)}),J.forEach(function(e){cv(e)&&(e.smooth&&requestAnimationFrame(function(){return e.target.style.scrollBehavior=`smooth`}),e.rec&&e(e.rec))}),cy(P_,1),p_.pause(),uy++,ly=2,yy(2),Z.forEach(function(e){return cv(e.vars.onRefresh)&&e.vars.onRefresh(e)}),ly=Q.isRefreshing=!1,ry(`refresh`)},gy=0,_y=1,vy,yy=function(e){if(e===2||!ly&&!L_){Q.isUpdating=!0,vy&&vy.update(0);var t=Z.length,n=V_(),r=n-H_>=50,i=t&&Z[0].scroll();if(_y=gy>i?-1:1,ly||(gy=i),r&&(U_&&!y_&&n-U_>200&&(U_=0,ry(`scrollEnd`)),g_=H_,H_=n),_y<0){for(x_=t;x_-->0;)Z[x_]&&Z[x_].update(0,r);_y=1}else for(x_=0;x_<t;x_++)Z[x_]&&Z[x_].update(0,r);Q.isUpdating=!1}Yv=0},by=[mv,hv,_v,gv,Tv+Cv,Tv+bv,Tv+Sv,Tv+xv,`display`,`flexShrink`,`float`,`zIndex`,`gridColumnStart`,`gridColumnEnd`,`gridRowStart`,`gridRowEnd`,`gridArea`,`justifySelf`,`alignSelf`,`placeSelf`,`order`],xy=by.concat([vv,yv,`boxSizing`,`max`+Ev,`max`+Dv,`position`,Tv,wv,wv+Sv,wv+bv,wv+Cv,wv+xv]),Sy=function(e,t,n){Ty(n);var r=e._gsap;if(r.spacerIsNative)Ty(r.spacerState);else if(e._gsap.swappedIn){var i=t.parentNode;i&&(i.insertBefore(e,t),i.removeChild(t))}e._gsap.swappedIn=!1},Cy=function(e,t,n,r){if(!e._gsap.swappedIn){for(var i=by.length,a=t.style,o=e.style,s;i--;)s=by[i],a[s]=n[s];a.position=n.position===`absolute`?`absolute`:`relative`,n.display===`inline`&&(a.display=`inline-block`),o[_v]=o[gv]=`auto`,a.flexBasis=n.flexBasis||`auto`,a.overflow=`visible`,a.boxSizing=`border-box`,a[vv]=Nv(e,Zg)+Ov,a[yv]=Nv(e,Qg)+Ov,a[wv]=o[Tv]=o[hv]=o[mv]=`0`,Ty(r),o[vv]=o[`max`+Ev]=n[vv],o[yv]=o[`max`+Dv]=n[yv],o[wv]=n[wv],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},wy=/([A-Z])/g,Ty=function(e){if(e){var t=e.t.style,n=e.length,r=0,i,a;for((e.t._gsap||Y.core.getCache(e.t)).uncache=1;r<n;r+=2)a=e[r+1],i=e[r],a?t[i]=a:t[i]&&t.removeProperty(i.replace(wy,`-$1`).toLowerCase())}},Ey=function(e){for(var t=xy.length,n=e.style,r=[],i=0;i<t;i++)r.push(xy[i],n[xy[i]]);return r.t=e,r},Dy=function(e,t,n){for(var r=[],i=e.length,a=n?8:0,o;a<i;a+=2)o=e[a],r.push(o,o in t?t[o]:e[a+1]);return r.t=e.t,r},Oy={left:0,top:0},ky=function(e,t,n,r,i,a,o,s,c,l,u,d,f,p){cv(e)&&(e=e(s)),sv(e)&&e.substr(0,3)===`max`&&(e=d+(e.charAt(4)===`=`?Gv(`0`+e.substr(3),n):0));var m=f?f.time():0,h,g,_;if(f&&f.seek(0),isNaN(e)||(e=+e),lv(e))f&&(e=Y.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,e)),o&&qv(o,n,r,!0);else{cv(t)&&(t=t(s));var v=(e||`0`).split(` `),y,b,x,S;_=$g(t,s)||d_,y=Mv(_)||{},(!y||!y.left&&!y.top)&&kv(_).display===`none`&&(S=_.style.display,_.style.display=`block`,y=Mv(_),S?_.style.display=S:_.style.removeProperty(`display`)),b=Gv(v[0],y[r.d]),x=Gv(v[1]||`0`,n),e=y[r.p]-c[r.p]-l+b+i-x,o&&qv(o,x,r,n-x<20||o._isStart&&x>20),n-=n-x}if(p&&(s[p]=e||-.001,e<0&&(e=0)),a){var C=e+n,w=a._isStart;h=`scroll`+r.d2,qv(a,C,r,w&&C>20||!w&&(u?Math.max(d_[h],u_[h]):a.parentNode[h])<=C+1),u&&(c=Mv(o),u&&(a.style[r.op.p]=c[r.op.p]-r.op.m-a._offset+Ov))}return f&&_&&(h=Mv(_),f.seek(d),g=Mv(_),f._caScrollDist=h[r.p]-g[r.p],e=e/f._caScrollDist*d),f&&f.seek(m),f?e:Math.round(e)},Ay=/(webkit|moz|length|cssText|inset)/i,jy=function(e,t,n,r){if(e.parentNode!==t){var i=e.style,a,o;if(t===d_){for(a in e._stOrig=i.cssText,o=kv(e),o)!+a&&!Ay.test(a)&&o[a]&&typeof i[a]==`string`&&a!==`0`&&(i[a]=o[a]);i.top=n,i.left=r}else i.cssText=e._stOrig;Y.core.getCache(e).uncache=1,t.appendChild(e)}},My=function(e,t,n){var r=t,i=r;return function(t){var a=Math.round(e());return a!==r&&a!==i&&Math.abs(a-r)>3&&Math.abs(a-i)>3&&(t=a,n&&n()),i=r,r=Math.round(t),r}},Ny=function(e,t,n){var r={};r[t.p]=`+=`+n,Y.set(e,r)},Py=function(e,t){var n=t_(e,t),r=`_scroll`+t.p2,i=function t(i,a,o,s,c){var l=t.tween,u=a.onComplete,d={};o||=n();var f=My(n,o,function(){l.kill(),t.tween=0});return c=s&&c||0,s||=i-o,l&&l.kill(),a[r]=i,a.inherit=!1,a.modifiers=d,d[r]=function(){return f(o+s*l.ratio+c*l.ratio*l.ratio)},a.onUpdate=function(){J.cache++,t.tween&&yy()},a.onComplete=function(){t.tween=0,u&&u.call(l)},l=t.tween=Y.to(e,a),l};return e[r]=n,n.wheelHandler=function(){return i.tween&&i.tween.kill()&&(i.tween=0)},zv(e,`wheel`,n.wheelHandler),Q.isTouch&&zv(e,`touchmove`,n.wheelHandler),i},Q=function(){function e(t,n){c_||e.register(Y)||console.warn(`Please gsap.registerPlugin(ScrollTrigger)`),N_(this),this.init(t,n)}var t=e.prototype;return t.init=function(t,n){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!W_){this.update=this.refresh=this.kill=X_;return}t=jv(sv(t)||lv(t)||t.nodeType?{trigger:t}:t,Uv);var r=t,i=r.onUpdate,a=r.toggleClass,o=r.id,s=r.onToggle,c=r.onRefresh,l=r.scrub,u=r.trigger,d=r.pin,f=r.pinSpacing,p=r.invalidateOnRefresh,m=r.anticipatePin,h=r.onScrubComplete,g=r.onSnapComplete,_=r.once,v=r.snap,y=r.pinReparent,b=r.pinSpacer,x=r.containerAnimation,S=r.fastScrollEnd,C=r.preventOverlaps,w=t.horizontal||t.containerAnimation&&t.horizontal!==!1?Zg:Qg,T=!l&&l!==0,E=$g(t.scroller||X),D=Y.core.getCache(E),O=ev(E),k=(`pinType`in t?t.pinType:Ug(E,`pinType`)||O&&`fixed`)===`fixed`,A=[t.onEnter,t.onLeave,t.onEnterBack,t.onLeaveBack],j=T&&t.toggleActions.split(` `),M=`markers`in t?t.markers:Uv.markers,ee=O?0:parseFloat(kv(E)[`border`+w.p2+Ev])||0,N=this,te=t.onRefreshInit&&function(){return t.onRefreshInit(N)},P=rv(E,O,w),F=iv(E,O),ne=0,re=0,ie=0,ae=t_(E,w),oe,I,se,ce,le,ue,de,fe,L,pe,me,he,ge,_e,ve,ye,be,xe,R,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,z,Pe,Fe,Ie,Le,Re,ze,Be;if(N._startClamp=N._endClamp=!1,N._dir=w,m*=45,N.scroller=E,N.scroll=x?x.time.bind(x):ae,ce=ae(),N.vars=t,n||=t.animation,`refreshPriority`in t&&(T_=1,t.refreshPriority===-9999&&(vy=N)),D.tweenScroll=D.tweenScroll||{top:Py(E,Qg),left:Py(E,Zg)},N.tweenTo=oe=D.tweenScroll[w.p],N.scrubDuration=function(e){Pe=lv(e)&&e,Pe?z?z.duration(e):z=Y.to(n,{ease:`expo`,totalProgress:`+=0`,inherit:!1,duration:Pe,paused:!0,onComplete:function(){return h&&h(N)}}):(z&&z.progress(1).kill(),z=0)},n&&(n.vars.lazy=!1,n._initted&&!N.isReverted||n.vars.immediateRender!==!1&&t.immediateRender!==!1&&n.duration()&&n.render(0,!0,!0),N.animation=n.pause(),n.scrollTrigger=N,N.scrubDuration(l),Me=0,o||=n.vars.id),v&&((!uv(v)||v.push)&&(v={snapTo:v}),`scrollBehavior`in d_.style&&Y.set(O?[d_,u_]:E,{scrollBehavior:`auto`}),J.forEach(function(e){return cv(e)&&e.target===(O?l_.scrollingElement||u_:E)&&(e.smooth=!1)}),se=cv(v.snapTo)?v.snapTo:v.snapTo===`labels`?Fv(n):v.snapTo===`labelsDirectional`?Lv(n):v.directional===!1?Y.utils.snap(v.snapTo):function(e,t){return Iv(v.snapTo)(e,V_()-re<500?0:t.direction)},Fe=v.duration||{min:.1,max:2},Fe=uv(Fe)?h_(Fe.min,Fe.max):h_(Fe,Fe),Ie=Y.delayedCall(v.delay||Pe/2||.1,function(){var e=ae(),t=V_()-re<500,r=oe.tween;if((t||Math.abs(N.getVelocity())<10)&&!r&&!y_&&ne!==e){var i=(e-ue)/_e,a=n&&!T?n.totalProgress():i,o=t?0:(a-Ne)/(V_()-g_)*1e3||0,s=Y.utils.clamp(-i,1-i,pv(o/2)*o/.185),c=i+(v.inertia===!1?0:s),l,u,d=v,f=d.onStart,p=d.onInterrupt,m=d.onComplete;if(l=se(c,N),lv(l)||(l=c),u=Math.max(0,Math.round(ue+l*_e)),e<=de&&e>=ue&&u!==e){if(r&&!r._initted&&r.data<=pv(u-e))return;v.inertia===!1&&(s=l-i),oe(u,{duration:Fe(pv(Math.max(pv(c-a),pv(l-a))*.185/o/.05||0)),ease:v.ease||`power3`,data:pv(u-e),onInterrupt:function(){return Ie.restart(!0)&&p&&fv(N,p)},onComplete:function(){N.update(),ne=ae(),n&&!T&&(z?z.resetTo(`totalProgress`,l,n._tTime/n._tDur):n.progress(l)),Me=Ne=n&&!T?n.totalProgress():N.progress,g&&g(N),m&&fv(N,m)}},e,s*_e,u-e-s*_e),f&&fv(N,f,oe.tween)}}else N.isActive&&ne!==e&&Ie.restart(!0)}).pause()),o&&(Jv[o]=N),u=N.trigger=$g(u||d!==!0&&d),Be=u&&u._gsap&&u._gsap.stRevert,Be&&=Be(N),d=d===!0?u:$g(d),sv(a)&&(a={targets:u,className:a}),d&&(f===!1||f===Tv||(f=!f&&d.parentNode&&d.parentNode.style&&kv(d.parentNode).display===`flex`?!1:wv),N.pin=d,I=Y.core.getCache(d),I.spacer?ve=I.pinState:(b&&(b=$g(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),I.spacerIsNative=!!b,b&&(I.spacerState=Ey(b))),I.spacer=xe=b||l_.createElement(`div`),xe.classList.add(`pin-spacer`),o&&xe.classList.add(`pin-spacer-`+o),I.pinState=ve=Ey(d)),t.force3D!==!1&&Y.set(d,{force3D:!0}),N.spacer=xe=I.spacer,je=kv(d),Ee=je[f+w.os2],Se=Y.getProperty(d),Ce=Y.quickSetter(d,w.a,Ov),Cy(d,xe,je),be=Ey(d)),M){he=uv(M)?jv(M,Hv):Hv,pe=Kv(`scroller-start`,o,E,w,he,0),me=Kv(`scroller-end`,o,E,w,he,0,pe),R=pe[`offset`+w.op.d2];var Ve=$g(Ug(E,`content`)||E);fe=this.markerStart=Kv(`start`,o,Ve,w,he,R,0,x),L=this.markerEnd=Kv(`end`,o,Ve,w,he,R,0,x),x&&(ze=Y.quickSetter([fe,L],w.a,Ov)),!k&&!(zg.length&&Ug(E,`fixedMarkers`)===!0)&&(Av(O?d_:E),Y.set([pe,me],{force3D:!0}),Oe=Y.quickSetter(pe,w.a,Ov),Ae=Y.quickSetter(me,w.a,Ov))}if(x){var He=x.vars.onUpdate,Ue=x.vars.onUpdateParams;x.eventCallback(`onUpdate`,function(){N.update(0,0,1),He&&He.apply(x,Ue||[])})}if(N.previous=function(){return Z[Z.indexOf(N)-1]},N.next=function(){return Z[Z.indexOf(N)+1]},N.revert=function(e,t){if(!t)return N.kill(!0);var r=e!==!1||!N.enabled,i=v_;r!==N.isReverted&&(r&&(Le=Math.max(ae(),N.scroll.rec||0),ie=N.progress,Re=n&&n.progress()),fe&&[fe,L,pe,me].forEach(function(e){return e.style.display=r?`none`:`block`}),r&&(v_=N,N.update(r)),d&&(!y||!N.isActive)&&(r?Sy(d,xe,ve):Cy(d,xe,kv(d),De)),r||N.update(r),v_=i,N.isReverted=r)},N.refresh=function(r,i,a,o){if(!((v_||!N.enabled)&&!i)){if(d&&r&&U_){zv(e,`scrollEnd`,ny);return}!ly&&te&&te(N),v_=N,oe.tween&&!a&&(oe.tween.kill(),oe.tween=0),z&&z.pause(),p&&n&&(n.revert({kill:!1}).invalidate(),n.getChildren?n.getChildren(!0,!0,!1).forEach(function(e){return e.vars.immediateRender&&e.render(0,!0,!0)}):n.vars.immediateRender&&n.render(0,!0,!0)),N.isReverted||N.revert(!0,!0),N._subPinOffset=!1;var s=P(),l=F(),m=x?x.duration():av(E,w),h=_e<=.01||!_e,g=0,_=o||0,v=uv(a)?a.end:t.end,b=t.endTrigger||u,S=uv(a)?a.start:t.start||(t.start===0||!u?0:d?`0 0`:`0 100%`),C=N.pinnedContainer=t.pinnedContainer&&$g(t.pinnedContainer,N),D=u&&Math.max(0,Z.indexOf(N))||0,A=D,j,I,se,he,R,Ce,Ee,Oe,Ae,je,Me,Ne,Pe;for(M&&uv(a)&&(Ne=Y.getProperty(pe,w.p),Pe=Y.getProperty(me,w.p));A-->0;)Ce=Z[A],Ce.end||Ce.refresh(0,1)||(v_=N),Ee=Ce.pin,Ee&&(Ee===u||Ee===d||Ee===C)&&!Ce.isReverted&&(je||=[],je.unshift(Ce),Ce.revert(!0,!0)),Ce!==Z[A]&&(D--,A--);for(cv(S)&&(S=S(N)),S=G_(S,`start`,N),ue=ky(S,u,s,w,ae(),fe,pe,N,l,ee,k,m,x,N._startClamp&&`_startClamp`)||(d?-.001:0),cv(v)&&(v=v(N)),sv(v)&&!v.indexOf(`+=`)&&(~v.indexOf(` `)?v=(sv(S)?S.split(` `)[0]:``)+v:(g=Gv(v.substr(2),s),v=sv(S)?S:(x?Y.utils.mapRange(0,x.duration(),x.scrollTrigger.start,x.scrollTrigger.end,ue):ue)+g,b=u)),v=G_(v,`end`,N),de=Math.max(ue,ky(v||(b?`100% 0`:m),b,s,w,ae()+g,L,me,N,l,ee,k,m,x,N._endClamp&&`_endClamp`))||-.001,g=0,A=D;A--;)Ce=Z[A]||{},Ee=Ce.pin,Ee&&Ce.start-Ce._pinPush<=ue&&!x&&Ce.end>0&&(j=Ce.end-(N._startClamp?Math.max(0,Ce.start):Ce.start),(Ee===u&&Ce.start-Ce._pinPush<ue||Ee===C)&&isNaN(S)&&(g+=j*(1-Ce.progress)),Ee===d&&(_+=j));if(ue+=g,de+=g,N._startClamp&&(N._startClamp+=g),N._endClamp&&!ly&&(N._endClamp=de||-.001,de=Math.min(de,av(E,w))),_e=de-ue||(ue-=.01)&&.001,h&&(ie=Y.utils.clamp(0,1,Y.utils.normalize(ue,de,Le))),N._pinPush=_,fe&&g&&(j={},j[w.a]=`+=`+g,C&&(j[w.p]=`-=`+ae()),Y.set([fe,L],j)),d&&!(R_&&N.end>=av(E,w)))j=kv(d),he=w===Qg,se=ae(),we=parseFloat(Se(w.a))+_,!m&&de>1&&(Me=(O?l_.scrollingElement||u_:E).style,Me={style:Me,value:Me[`overflow`+w.a.toUpperCase()]},O&&kv(d_)[`overflow`+w.a.toUpperCase()]!==`scroll`&&(Me.style[`overflow`+w.a.toUpperCase()]=`scroll`)),Cy(d,xe,j),be=Ey(d),I=Mv(d,!0),Oe=k&&t_(E,he?Zg:Qg)(),f?(De=[f+w.os2,_e+_+Ov],De.t=xe,A=f===wv?Nv(d,w)+_e+_:0,A&&(De.push(w.d,A+Ov),xe.style.flexBasis!==`auto`&&(xe.style.flexBasis=A+Ov)),Ty(De),C&&Z.forEach(function(e){e.pin===C&&e.vars.pinSpacing!==!1&&(e._subPinOffset=!0)}),k&&ae(Le)):(A=Nv(d,w),A&&xe.style.flexBasis!==`auto`&&(xe.style.flexBasis=A+Ov)),k&&(R={top:I.top+(he?se-ue:Oe)+Ov,left:I.left+(he?Oe:se-ue)+Ov,boxSizing:`border-box`,position:`fixed`},R[vv]=R[`max`+Ev]=Math.ceil(I.width)+Ov,R[yv]=R[`max`+Dv]=Math.ceil(I.height)+Ov,R[Tv]=R[Tv+Sv]=R[Tv+bv]=R[Tv+Cv]=R[Tv+xv]=`0`,R[wv]=j[wv],R[wv+Sv]=j[wv+Sv],R[wv+bv]=j[wv+bv],R[wv+Cv]=j[wv+Cv],R[wv+xv]=j[wv+xv],ye=Dy(ve,R,y),ly&&ae(0)),n?(Ae=n._initted,E_(1),n.render(n.duration(),!0,!0),Te=Se(w.a)-we+_e+_,ke=Math.abs(_e-Te)>1,k&&ke&&ye.splice(ye.length-2,2),n.render(0,!0,!0),Ae||n.invalidate(!0),n.parent||n.totalTime(n.totalTime()),E_(0)):Te=_e,Me&&(Me.value?Me.style[`overflow`+w.a.toUpperCase()]=Me.value:Me.style.removeProperty(`overflow-`+w.a));else if(u&&ae()&&!x)for(I=u.parentNode;I&&I!==d_;)I._pinOffset&&(ue-=I._pinOffset,de-=I._pinOffset),I=I.parentNode;je&&je.forEach(function(e){return e.revert(!1,!0)}),N.start=ue,N.end=de,ce=le=ly?Le:ae(),!x&&!ly&&(ce<Le&&ae(Le),N.scroll.rec=0),N.revert(!1,!0),re=V_(),Ie&&(ne=-1,Ie.restart(!0)),v_=0,n&&T&&(n._initted||Re)&&n.progress()!==Re&&n.progress(Re||0,!0).render(n.time(),!0,!0),(h||ie!==N.progress||x||p||n&&!n._initted)&&(n&&!T&&(n._initted||ie||n.vars.immediateRender!==!1)&&n.totalProgress(x&&ue<-.001&&!ie?Y.utils.normalize(ue,de,0):ie,!0),N.progress=h||(ce-ue)/_e===ie?0:ie),d&&f&&(xe._pinOffset=Math.round(N.progress*Te)),z&&z.invalidate(),isNaN(Ne)||(Ne-=Y.getProperty(pe,w.p),Pe-=Y.getProperty(me,w.p),Ny(pe,w,Ne),Ny(fe,w,Ne-(o||0)),Ny(me,w,Pe),Ny(L,w,Pe-(o||0))),h&&!ly&&N.update(),c&&!ly&&!ge&&(ge=!0,c(N),ge=!1)}},N.getVelocity=function(){return(ae()-le)/(V_()-g_)*1e3||0},N.endAnimation=function(){dv(N.callbackAnimation),n&&(z?z.progress(1):n.paused()?T||dv(n,N.direction<0,1):dv(n,n.reversed()))},N.labelToScroll=function(e){return n&&n.labels&&(ue||N.refresh()||ue)+n.labels[e]/n.duration()*_e||0},N.getTrailing=function(e){var t=Z.indexOf(N),n=N.direction>0?Z.slice(0,t).reverse():Z.slice(t+1);return(sv(e)?n.filter(function(t){return t.vars.preventOverlaps===e}):n).filter(function(e){return N.direction>0?e.end<=ue:e.start>=de})},N.update=function(e,t,r){if(!(x&&!r&&!e)){var o=ly===!0?Le:N.scroll(),c=e?0:(o-ue)/_e,u=c<0?0:c>1?1:c||0,p=N.progress,h,g,b,D,O,M,ee,te;if(t&&(le=ce,ce=x?ae():o,v&&(Ne=Me,Me=n&&!T?n.totalProgress():u)),m&&d&&!v_&&!B_&&U_&&(!u&&ue<o+(o-le)/(V_()-g_)*m?u=1e-4:u===1&&de>o+(o-le)/(V_()-g_)*m&&(u=.9999)),u!==p&&N.enabled){if(h=N.isActive=!!u&&u<1,g=!!p&&p<1,M=h!==g,O=M||!!u!=!!p,N.direction=u>p?1:-1,N.progress=u,O&&!v_&&(b=u&&!p?0:u===1?1:p===1?2:3,T&&(D=!M&&j[b+1]!==`none`&&j[b+1]||j[b],te=n&&(D===`complete`||D===`reset`||D in n))),C&&(M||te)&&(te||l||!n)&&(cv(C)?C(N):N.getTrailing(C).forEach(function(e){return e.endAnimation()})),T||(z&&!v_&&!B_?(z._dp._time-z._start!==z._time&&z.render(z._dp._time-z._start),z.resetTo?z.resetTo(`totalProgress`,u,n._tTime/n._tDur):(z.vars.totalProgress=u,z.invalidate().restart())):n&&n.totalProgress(u,!!(v_&&(re||e)))),d){if(e&&f&&(xe.style[f+w.os2]=Ee),!k)Ce(Z_(we+Te*u));else if(O){if(ee=!e&&u>p&&de+1>o&&o+1>=av(E,w),y){if(!e&&(h||ee)){var P=Mv(d,!0),F=o-ue;jy(d,d_,P.top+(w===Qg?F:0)+Ov,P.left+(w===Qg?0:F)+Ov)}else jy(d,xe)}Ty(h||ee?ye:be),ke&&u<1&&h||Ce(we+(u===1&&!ee?Te:0))}}v&&!oe.tween&&!v_&&!B_&&Ie.restart(!0),a&&(M||_&&u&&(u<1||!z_))&&m_(a.targets).forEach(function(e){return e.classList[h||_?`add`:`remove`](a.className)}),i&&!T&&!e&&i(N),O&&!v_?(T&&(te&&(D===`complete`?n.pause().totalProgress(1):D===`reset`?n.restart(!0).pause():D===`restart`?n.restart(!0):n[D]()),i&&i(N)),(M||!z_)&&(s&&M&&fv(N,s),A[b]&&fv(N,A[b]),_&&(u===1?N.kill(!1,1):A[b]=0),M||(b=u===1?1:3,A[b]&&fv(N,A[b]))),S&&!h&&Math.abs(N.getVelocity())>(lv(S)?S:2500)&&(dv(N.callbackAnimation),z?z.progress(1):dv(n,D===`reverse`?1:!u,1))):T&&i&&!v_&&i(N)}if(Ae){var ne=x?o/x.duration()*(x._caScrollDist||0):o;Oe(ne+ +!!pe._isFlipped),Ae(ne)}ze&&ze(-o/x.duration()*(x._caScrollDist||0))}},N.enable=function(t,n){N.enabled||(N.enabled=!0,zv(E,`resize`,$v),O||zv(E,`scroll`,Zv),te&&zv(e,`refreshInit`,te),t!==!1&&(N.progress=ie=0,ce=le=ne=ae()),n!==!1&&N.refresh())},N.getTween=function(e){return e&&oe?oe.tween:z},N.setPositions=function(e,t,n,r){if(x){var i=x.scrollTrigger,a=x.duration(),o=i.end-i.start;e=i.start+o*e/a,t=i.start+o*t/a}N.refresh(!1,!1,{start:K_(e,n&&!!N._startClamp),end:K_(t,n&&!!N._endClamp)},r),N.update()},N.adjustPinSpacing=function(e){if(De&&e){var t=De.indexOf(w.d)+1;De[t]=parseFloat(De[t])+e+Ov,De[1]=parseFloat(De[1])+e+Ov,Ty(De)}},N.disable=function(t,n){if(t!==!1&&N.revert(!0,!0),N.enabled&&(N.enabled=N.isActive=!1,n||z&&z.pause(),Le=0,I&&(I.uncache=1),te&&Bv(e,`refreshInit`,te),Ie&&(Ie.pause(),oe.tween&&oe.tween.kill()&&(oe.tween=0)),!O)){for(var r=Z.length;r--;)if(Z[r].scroller===E&&Z[r]!==N)return;Bv(E,`resize`,$v),O||Bv(E,`scroll`,Zv)}},N.kill=function(e,r){N.disable(e,r),z&&!r&&z.kill(),o&&delete Jv[o];var i=Z.indexOf(N);i>=0&&Z.splice(i,1),i===x_&&_y>0&&x_--,i=0,Z.forEach(function(e){return e.scroller===N.scroller&&(i=1)}),i||ly||(N.scroll.rec=0),n&&(n.scrollTrigger=null,e&&n.revert({kill:!1}),r||n.kill()),fe&&[fe,L,pe,me].forEach(function(e){return e.parentNode&&e.parentNode.removeChild(e)}),vy===N&&(vy=0),d&&(I&&(I.uncache=1),i=0,Z.forEach(function(e){return e.pin===d&&i++}),i||(I.spacer=0)),t.onKill&&t.onKill(N)},Z.push(N),N.enable(!1,!1),Be&&Be(N),n&&n.add&&!_e){var We=N.update;N.update=function(){N.update=We,J.cache++,ue||de||N.refresh()},Y.delayedCall(.01,N.update),_e=.01,ue=de=0}else N.refresh();d&&fy()},e.register=function(t){return c_||=(Y=t||$_(),Q_()&&window.document&&e.enable(),W_),c_},e.defaults=function(e){if(e)for(var t in e)Uv[t]=e[t];return Uv},e.disable=function(e,t){W_=0,Z.forEach(function(n){return n[t?`kill`:`disable`](e)}),Bv(X,`wheel`,Zv),Bv(l_,`scroll`,Zv),clearInterval(__),Bv(l_,`touchcancel`,X_),Bv(d_,`touchstart`,X_),Rv(Bv,l_,`pointerdown,touchstart,mousedown`,J_),Rv(Bv,l_,`pointerup,touchend,mouseup`,Y_),p_.kill(),ov(Bv);for(var n=0;n<J.length;n+=3)Vv(Bv,J[n],J[n+1]),Vv(Bv,J[n],J[n+2])},e.enable=function(){if(X=window,l_=document,u_=l_.documentElement,d_=l_.body,Y){if(m_=Y.utils.toArray,h_=Y.utils.clamp,N_=Y.core.context||X_,E_=Y.core.suppressOverwrites||X_,P_=X.history.scrollRestoration||`auto`,gy=X.pageYOffset||0,Y.core.globals(`ScrollTrigger`,e),d_){W_=1,F_=document.createElement(`div`),F_.style.height=`100vh`,F_.style.position=`absolute`,py(),q_(),s_.register(Y),e.isTouch=s_.isTouch,M_=s_.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),k_=s_.isTouch===1,zv(X,`wheel`,Zv),f_=[X,l_,u_,d_],Y.matchMedia?(e.matchMedia=function(e){var t=Y.matchMedia(),n;for(n in e)t.add(n,e[n]);return t},Y.addEventListener(`matchMediaInit`,function(){oy(),sy()}),Y.addEventListener(`matchMediaRevert`,function(){return ay()}),Y.addEventListener(`matchMedia`,function(){hy(0,1),ry(`matchMedia`)}),Y.matchMedia().add(`(orientation: portrait)`,function(){return Qv(),Qv})):console.warn(`Requires GSAP 3.11.0 or later`),Qv(),zv(l_,`scroll`,Zv);var t=d_.hasAttribute(`style`),n=d_.style,r=n.borderTopStyle,i=Y.core.Animation.prototype,a,o;for(i.revert||Object.defineProperty(i,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle=`solid`,a=Mv(d_),Qg.m=Math.round(a.top+Qg.sc())||0,Zg.m=Math.round(a.left+Zg.sc())||0,r?n.borderTopStyle=r:n.removeProperty(`border-top-style`),t||(d_.setAttribute(`style`,``),d_.removeAttribute(`style`)),__=setInterval(Xv,250),Y.delayedCall(.5,function(){return B_=0}),zv(l_,`touchcancel`,X_),zv(d_,`touchstart`,X_),Rv(zv,l_,`pointerdown,touchstart,mousedown`,J_),Rv(zv,l_,`pointerup,touchend,mouseup`,Y_),b_=Y.utils.checkPrefix(`transform`),xy.push(b_),c_=V_(),p_=Y.delayedCall(.2,hy).pause(),w_=[l_,`visibilitychange`,function(){var e=X.innerWidth,t=X.innerHeight;l_.hidden?(S_=e,C_=t):(S_!==e||C_!==t)&&$v()},l_,`DOMContentLoaded`,hy,X,`load`,hy,X,`resize`,$v],ov(zv),Z.forEach(function(e){return e.enable(0,1)}),o=0;o<J.length;o+=3)Vv(Bv,J[o],J[o+1]),Vv(Bv,J[o],J[o+2])}else l_&&l_.addEventListener(`DOMContentLoaded`,function t(){e.enable(),l_.removeEventListener(`DOMContentLoaded`,t)})}},e.config=function(t){`limitCallbacks`in t&&(z_=!!t.limitCallbacks);var n=t.syncInterval;n&&clearInterval(__)||(__=n)&&setInterval(Xv,n),`ignoreMobileResize`in t&&(k_=e.isTouch===1&&t.ignoreMobileResize),`autoRefreshEvents`in t&&(ov(Bv)||ov(zv,t.autoRefreshEvents||`none`),D_=(t.autoRefreshEvents+``).indexOf(`resize`)===-1)},e.scrollerProxy=function(e,t){var n=$g(e),r=J.indexOf(n),i=ev(n);~r&&J.splice(r,i?6:2),t&&(i?zg.unshift(X,t,d_,t,u_,t):zg.unshift(n,t))},e.clearMatchMedia=function(e){Z.forEach(function(t){return t._ctx&&t._ctx.query===e&&t._ctx.kill(!0,!0)})},e.isInViewport=function(e,t,n){var r=(sv(e)?$g(e):e).getBoundingClientRect(),i=r[n?vv:yv]*t||0;return n?r.right-i>0&&r.left+i<X.innerWidth:r.bottom-i>0&&r.top+i<X.innerHeight},e.positionInViewport=function(e,t,n){sv(e)&&(e=$g(e));var r=e.getBoundingClientRect(),i=r[n?vv:yv],a=t==null?i/2:t in Wv?Wv[t]*i:~t.indexOf(`%`)?parseFloat(t)*i/100:parseFloat(t)||0;return n?(r.left+a)/X.innerWidth:(r.top+a)/X.innerHeight},e.killAll=function(e){if(Z.slice(0).forEach(function(e){return e.vars.id!==`ScrollSmoother`&&e.kill()}),e!==!0){var t=ey.killAll||[];ey={},t.forEach(function(e){return e()})}},e}();Q.version=`3.15.0`,Q.saveStyles=function(e){return e?m_(e).forEach(function(e){if(e&&e.style){var t=iy.indexOf(e);t>=0&&iy.splice(t,5),iy.push(e,e.style.cssText,e.getBBox&&e.getAttribute(`transform`),Y.core.getCache(e),N_())}}):iy},Q.revert=function(e,t){return sy(!e,t)},Q.create=function(e,t){return new Q(e,t)},Q.refresh=function(e){return e?$v(!0):(c_||Q.register())&&hy(!0)},Q.update=function(e){return++J.cache&&yy(e===!0?2:0)},Q.clearScrollMemory=cy,Q.maxScroll=function(e,t){return av(e,t?Zg:Qg)},Q.getScrollFunc=function(e,t){return t_($g(e),t?Zg:Qg)},Q.getById=function(e){return Jv[e]},Q.getAll=function(){return Z.filter(function(e){return e.vars.id!==`ScrollSmoother`})},Q.isScrolling=function(){return!!U_},Q.snapDirectional=Iv,Q.addEventListener=function(e,t){var n=ey[e]||(ey[e]=[]);~n.indexOf(t)||n.push(t)},Q.removeEventListener=function(e,t){var n=ey[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},Q.batch=function(e,t){var n=[],r={},i=t.interval||.016,a=t.batchMax||1e9,o=function(e,t){var n=[],r=[],o=Y.delayedCall(i,function(){t(n,r),n=[],r=[]}).pause();return function(e){n.length||o.restart(!0),n.push(e.trigger),r.push(e),a<=n.length&&o.progress(1)}},s;for(s in t)r[s]=s.substr(0,2)===`on`&&cv(t[s])&&s!==`onRefreshInit`?o(s,t[s]):t[s];return cv(a)&&(a=a(),zv(Q,`refresh`,function(){return a=t.batchMax()})),m_(e).forEach(function(e){var t={};for(s in r)t[s]=r[s];t.trigger=e,n.push(Q.create(t))}),n};var Fy=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},Iy=function e(t,n){n===!0?t.style.removeProperty(`touch-action`):t.style.touchAction=n===!0?`auto`:n?`pan-`+n+(s_.isTouch?` pinch-zoom`:``):`none`,t===u_&&e(d_,n)},Ly={auto:1,scroll:1},Ry=function(e){var t=e.event,n=e.target,r=e.axis,i=(t.changedTouches?t.changedTouches[0]:t).target,a=i._gsap||Y.core.getCache(i),o=V_(),s;if(!a._isScrollT||o-a._isScrollT>2e3){for(;i&&i!==d_&&(i.scrollHeight<=i.clientHeight&&i.scrollWidth<=i.clientWidth||!(Ly[(s=kv(i)).overflowY]||Ly[s.overflowX]));)i=i.parentNode;a._isScroll=i&&i!==n&&!ev(i)&&(Ly[(s=kv(i)).overflowY]||Ly[s.overflowX]),a._isScrollT=o}(a._isScroll||r===`x`)&&(t.stopPropagation(),t._gsapAllow=!0)},zy=function(e,t,n,r){return s_.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r&&=Ry,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&zv(l_,s_.eventTypes[0],Hy,!1,!0)},onDisable:function(){return Bv(l_,s_.eventTypes[0],Hy,!0)}})},By=/(input|label|select|textarea)/i,Vy,Hy=function(e){var t=By.test(e.target.tagName);(t||Vy)&&(e._gsapAllow=!0,Vy=t)},Uy=function(e){uv(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type=`wheel,touch`),e.debounce=!!e.debounce,e.id=e.id||`normalizer`;var t=e,n=t.normalizeScrollX,r=t.momentum,i=t.allowNestedScroll,a=t.onRelease,o,s,c=$g(e.target)||u_,l=Y.core.globals().ScrollSmoother,u=l&&l.get(),d=M_&&(e.content&&$g(e.content)||u&&e.content!==!1&&!u.smooth()&&u.content()),f=t_(c,Qg),p=t_(c,Zg),m=1,h=(s_.isTouch&&X.visualViewport?X.visualViewport.scale*X.visualViewport.width:X.outerWidth)/X.innerWidth,g=0,_=cv(r)?function(){return r(o)}:function(){return r||2.8},v,y,b=zy(c,e.type,!0,i),x=function(){return y=!1},S=X_,C=X_,w=function(){s=av(c,Qg),C=h_(+!!M_,s),n&&(S=h_(0,av(c,Zg))),v=uy},T=function(){d._gsap.y=Z_(parseFloat(d._gsap.y)+f.offset)+`px`,d.style.transform=`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, `+parseFloat(d._gsap.y)+`, 0, 1)`,f.offset=f.cacheID=0},E=function(){if(y){requestAnimationFrame(x);var e=Z_(o.deltaY/2),t=C(f.v-e);if(d&&t!==f.v+f.offset){f.offset=t-f.v;var n=Z_((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform=`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, `+n+`, 0, 1)`,d._gsap.y=n+`px`,f.cacheID=J.cache,yy()}return!0}f.offset&&T(),y=!0},D,O,k,A,j=function(){w(),D.isActive()&&D.vars.scrollY>s&&(f()>s?D.progress(1)&&f(s):D.resetTo(`scrollY`,s))};return d&&Y.set(d,{y:`+=0`}),e.ignoreCheck=function(e){return M_&&e.type===`touchmove`&&E(e)||m>1.05&&e.type!==`touchstart`||o.isGesturing||e.touches&&e.touches.length>1},e.onPress=function(){y=!1;var e=m;m=Z_((X.visualViewport&&X.visualViewport.scale||1)/h),D.pause(),e!==m&&Iy(c,m>1.01||!n&&`x`),O=p(),k=f(),w(),v=uy},e.onRelease=e.onGestureStart=function(e,t){if(f.offset&&T(),!t)A.restart(!0);else{J.cache++;var r=_(),i,o;n&&(i=p(),o=i+r*.05*-e.velocityX/.227,r*=Fy(p,i,o,av(c,Zg)),D.vars.scrollX=S(o)),i=f(),o=i+r*.05*-e.velocityY/.227,r*=Fy(f,i,o,av(c,Qg)),D.vars.scrollY=C(o),D.invalidate().duration(r).play(.01),(M_&&D.vars.scrollY>=s||i>=s-1)&&Y.to({},{onUpdate:j,duration:r})}a&&a(e)},e.onWheel=function(){D._ts&&D.pause(),V_()-g>1e3&&(v=0,g=V_())},e.onChange=function(e,t,r,i,a){if(uy!==v&&w(),t&&n&&p(S(i[2]===t?O+(e.startX-e.x):p()+t-i[1])),r){f.offset&&T();var o=a[2]===r,s=o?k+e.startY-e.y:f()+r-a[1],c=C(s);o&&s!==c&&(k+=c-s),f(c)}(r||t)&&yy()},e.onEnable=function(){Iy(c,!n&&`x`),Q.addEventListener(`refresh`,j),zv(X,`resize`,j),f.smooth&&=(f.target.style.scrollBehavior=`auto`,p.smooth=!1),b.enable()},e.onDisable=function(){Iy(c,!0),Bv(X,`resize`,j),Q.removeEventListener(`refresh`,j),b.kill()},e.lockAxis=e.lockAxis!==!1,o=new s_(e),o.iOS=M_,M_&&!f()&&f(1),M_&&Y.ticker.add(X_),A=o._dc,D=Y.to(o,{ease:`power4`,paused:!0,inherit:!1,scrollX:n?`+=0.1`:`+=0`,scrollY:`+=0.1`,modifiers:{scrollY:My(f,f(),function(){return D.pause()})},onUpdate:yy,onComplete:A.vars.onComplete}),o};Q.sort=function(e){if(cv(e))return Z.sort(e);var t=X.pageYOffset||0;return Q.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+X.innerHeight}),Z.sort(e||function(e,t){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((t.vars.containerAnimation?1e6:t._sortY)+(t.vars.refreshPriority||0)*-1e6)})},Q.observe=function(e){return new s_(e)},Q.normalizeScroll=function(e){if(e===void 0)return O_;if(e===!0&&O_)return O_.enable();if(e===!1){O_&&O_.kill(),O_=e;return}var t=e instanceof s_?e:Uy(e);return O_&&O_.target===t.target&&O_.kill(),ev(t.target)&&(O_=t),t},Q.core={_getVelocityProp:n_,_inputObserver:zy,_scrollers:J,_proxies:zg,bridge:{ss:function(){U_||ry(`scrollStart`),U_=V_()},ref:function(){return v_}}},$_()&&Y.registerPlugin(Q);function Wy({isDark:e=!0}){let t=[{title:`Agentic AI & Orchestration`,color:`#0071e3`,skills:[{name:`LangGraph`,highlight:!0,annotation:`underline`},{name:`LangChain`,highlight:!0,annotation:`highlight`},{name:`CrewAI`,highlight:!0,annotation:`box`},{name:`LangSmith`,highlight:!1}]},{title:`Core AI & Data Engineering`,color:`#30d158`,skills:[{name:`Python`,highlight:!0,annotation:`circle`},{name:`Pydantic`,highlight:!0,annotation:`underline`},{name:`SQL`,highlight:!1},{name:`Vector DBs`,highlight:!1}]},{title:`Full-Stack & Cloud Infrastructure`,color:`#f5a623`,skills:[{name:`React`,highlight:!0,annotation:`highlight`},{name:`Node.js`,highlight:!1},{name:`Docker`,highlight:!0,annotation:`box`},{name:`FastAPI`,highlight:!1}]}],n={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08}}},r={hidden:{opacity:0,scale:.9,y:10},visible:{opacity:1,scale:1,y:0}};return(0,z.jsxs)(`div`,{className:`w-full h-full flex flex-col justify-between p-2 sm:p-4 text-left`,children:[(0,z.jsxs)(`div`,{className:`flex items-center justify-between pb-3 border-b border-[#2c2c2e]/60 mb-4`,children:[(0,z.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,z.jsx)(de,{className:`w-4 h-4 text-[#0071e3] animate-pulse`}),(0,z.jsx)(`span`,{className:`text-xs font-mono font-bold tracking-wider text-[#0071e3] uppercase`,children:`Sanket Kakad • Production Tech Stack`})]}),(0,z.jsx)(`div`,{className:`text-[11px] font-mono text-[#86868b]`,children:(0,z.jsx)(`span`,{children:`10 Core Production Skills`})})]}),(0,z.jsx)(cd.div,{variants:n,initial:`hidden`,animate:`visible`,className:`flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 items-center overflow-y-auto scrollbar-none py-1`,children:t.map((t,n)=>(0,z.jsxs)(`div`,{className:`rounded-2xl p-4 border transition-colors flex flex-col justify-between h-full ${e?`bg-[#161617]/80 border-[#2c2c2e]`:`bg-[#ffffff]/90 border-[#d2d2d7] shadow-sm`}`,children:[(0,z.jsxs)(`div`,{className:`flex items-center gap-2 mb-3`,children:[(0,z.jsx)(`span`,{className:`w-2 h-2 rounded-full`,style:{backgroundColor:t.color}}),(0,z.jsx)(`h4`,{className:`text-[11px] font-mono font-bold uppercase tracking-wider text-[#86868b]`,children:t.title})]}),(0,z.jsx)(`div`,{className:`flex flex-wrap gap-2.5 my-auto`,children:t.skills.map((n,i)=>(0,z.jsx)(cd.div,{variants:r,whileHover:{scale:1.06,y:-2},className:`px-3.5 py-2 rounded-xl border text-sm sm:text-base font-extrabold tracking-tight transition-all flex items-center gap-1.5 cursor-default ${n.highlight?e?`bg-[#2c2c2e] border-white/15 text-[#f5f5f7] shadow-md shadow-black/40`:`bg-[#ffffff] border-[#0071e3]/40 text-[#1d1d1f] shadow-md shadow-slate-200`:e?`bg-[#000000]/60 border-[#2c2c2e] text-[#a1a1a6]`:`bg-[#f5f5f7] border-[#d2d2d7] text-[#6e6e73]`}`,children:n.highlight?(0,z.jsx)(Pe,{type:n.annotation||`underline`,color:t.color,show:!0,strokeWidth:2.5,children:(0,z.jsx)(`span`,{className:`px-0.5`,children:n.name})}):(0,z.jsx)(`span`,{children:n.name})},i))})]},n))}),(0,z.jsxs)(`div`,{className:`pt-3 border-t text-[11px] font-mono flex flex-wrap items-center justify-between gap-2 ${e?`border-[#2c2c2e] text-[#86868b]`:`border-[#d2d2d7] text-[#6e6e73]`}`,children:[(0,z.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,z.jsx)(`span`,{className:`w-2 h-2 rounded-full bg-emerald-500 animate-ping`}),(0,z.jsx)(`span`,{children:`Production AI Agents & Multi-Model Integration`})]}),(0,z.jsx)(`div`,{className:`flex items-center gap-3 font-semibold text-[#0071e3]`,children:(0,z.jsx)(`span`,{children:`Python • LangChain • React • Docker`})})]})]})}mg.registerPlugin(Q);function Gy({theme:e=`dark`}){let t=(0,_.useRef)(null),n=e===`dark`;return bg(()=>{mg.timeline({defaults:{ease:`power3.out`,duration:.9}}).from(`.hero-eyebrow`,{opacity:0,y:-20}).from(`.hero-main-title`,{opacity:0,y:50,scale:.96}).from(`.hero-sub-title`,{opacity:0,y:30},`-=0.4`).from(`.hero-sub-text`,{opacity:0,y:30},`-=0.4`).from(`.hero-device-mockup`,{opacity:0,y:80,scale:.88},`-=0.2`),mg.to(`.hero-device-mockup`,{scale:1.02,rotateX:4,ease:`none`,scrollTrigger:{trigger:t.current,start:`top top`,end:`bottom top`,scrub:!0}})},{scope:t}),(0,z.jsxs)(`section`,{ref:t,id:`overview`,className:`relative pt-40 pb-24 px-6 overflow-hidden flex flex-col items-center transition-colors duration-500 ${n?`bg-[#000000] text-[#f5f5f7]`:`bg-[#f5f5f7] text-[#1d1d1f]`}`,children:[(0,z.jsx)(`div`,{className:`absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#0071e3]/10 rounded-full blur-[170px] pointer-events-none animate-pulse-glow`}),(0,z.jsx)(`div`,{className:`absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#0071e3]/8 rounded-full blur-[140px] pointer-events-none`}),(0,z.jsxs)(`div`,{className:`max-w-5xl mx-auto text-center flex flex-col items-center relative z-10`,children:[(0,z.jsxs)(`div`,{className:`hero-eyebrow inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6 border transition-colors ${n?`bg-[#161617] border-[#2c2c2e] text-[#2997ff]`:`bg-[#ffffff] border-[#d2d2d7] text-[#0071e3] shadow-sm`}`,children:[(0,z.jsx)(de,{className:`w-3.5 h-3.5 text-[#0071e3]`}),(0,z.jsx)(`span`,{children:`Generative AI & Machine Learning Architect`})]}),(0,z.jsx)(`h1`,{className:`hero-main-title text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight leading-[1.0] text-center mb-4 ${n?`text-[#f5f5f7]`:`text-[#1d1d1f]`}`,children:`Sanket Kakad`}),(0,z.jsxs)(`div`,{className:`hero-sub-title text-xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-6 ${n?`text-[#f5f5f7]`:`text-[#1d1d1f]`}`,children:[`Architecting Enterprise LLMs.`,` `,(0,z.jsx)(Pe,{type:`underline`,color:`#0071e3`,show:!0,strokeWidth:3,animationDuration:1e3,className:`px-1`,children:(0,z.jsx)(`span`,{className:`text-[#0071e3]`,children:`Engineering Autonomous Agents.`})})]}),(0,z.jsx)(`p`,{className:`hero-sub-text text-base sm:text-lg md:text-xl font-light max-w-3xl leading-relaxed mb-14 ${n?`text-[#86868b]`:`text-[#6e6e73]`}`,children:`Senior AI engineer designing production-grade LLM systems, multimodal RAG architectures, multi-agent tool execution, and low-latency streaming infrastructure.`}),(0,z.jsxs)(cd.div,{whileHover:{rotateX:2,rotateY:-2,y:-6},transition:{type:`spring`,stiffness:200,damping:20},className:`hero-device-mockup w-full max-w-4xl relative perspective-1000`,children:[(0,z.jsx)(`div`,{className:`rounded-3xl p-3 transition-colors duration-300 ${n?`bg-gradient-to-b from-[#2c2c2e] via-[#1c1c1e] to-[#161617] border border-white/15 shadow-2xl shadow-black/90`:`bg-gradient-to-b from-[#e5e5ea] via-[#f2f2f7] to-[#ffffff] border border-black/10 shadow-2xl shadow-slate-300/80`}`,children:(0,z.jsxs)(`div`,{className:`rounded-2xl overflow-hidden aspect-[16/10] relative flex flex-col justify-between p-6 sm:p-10 transition-colors duration-300 ${n?`bg-[#000000] border border-[#2c2c2e]`:`bg-[#ffffff] border border-[#d2d2d7] shadow-inner`}`,children:[(0,z.jsxs)(`div`,{className:`flex items-center justify-between pb-3 border-b text-xs font-mono transition-colors ${n?`border-[#2c2c2e] text-[#86868b]`:`border-[#e5e5ea] text-[#6e6e73]`}`,children:[(0,z.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,z.jsx)(`div`,{className:`w-2.5 h-2.5 rounded-full bg-rose-500/80`}),(0,z.jsx)(`div`,{className:`w-2.5 h-2.5 rounded-full bg-amber-500/80`}),(0,z.jsx)(`div`,{className:`w-2.5 h-2.5 rounded-full bg-emerald-500/80`}),(0,z.jsx)(`span`,{className:`ml-2 font-medium transition-colors ${n?`text-[#f5f5f7]`:`text-[#1d1d1f]`}`,children:`Terminal`})]}),(0,z.jsx)(`div`,{className:`flex items-center gap-2 text-[11px] text-[#86868b]`,children:(0,z.jsx)(`span`,{children:`zsh`})})]}),(0,z.jsx)(`div`,{className:`my-auto h-[260px] sm:h-[320px] w-full p-1 sm:p-2 flex flex-col justify-between overflow-hidden`,children:(0,z.jsx)(Wy,{isDark:n})})]})}),(0,z.jsx)(`div`,{className:`w-[85%] h-3 rounded-b-xl mx-auto transition-colors duration-300 ${n?`bg-gradient-to-r from-[#2c2c2e] via-[#1c1c1e] to-[#2c2c2e] border-t border-white/20 shadow-md`:`bg-gradient-to-r from-[#d2d2d7] via-[#e5e5ea] to-[#d2d2d7] border-t border-black/10 shadow-sm`}`})]})]})]})}function Ky(e,t,n){if(e&&e.length){let[r,i]=t,a=Math.PI/180*n,o=Math.cos(a),s=Math.sin(a);for(let t of e){let[e,n]=t;t[0]=(e-r)*o-(n-i)*s+r,t[1]=(e-r)*s+(n-i)*o+i}}}function qy(e,t){return e[0]===t[0]&&e[1]===t[1]}function Jy(e,t,n,r=1){let i=n,a=Math.max(t,.1),o=e[0]&&e[0][0]&&typeof e[0][0]==`number`?[e]:e,s=[0,0];if(i)for(let e of o)Ky(e,s,i);let c=function(e,t,n){let r=[];for(let t of e){let e=[...t];qy(e[0],e[e.length-1])||e.push([e[0][0],e[0][1]]),e.length>2&&r.push(e)}let i=[];t=Math.max(t,.1);let a=[];for(let e of r)for(let t=0;t<e.length-1;t++){let n=e[t],r=e[t+1];if(n[1]!==r[1]){let e=Math.min(n[1],r[1]);a.push({ymin:e,ymax:Math.max(n[1],r[1]),x:e===n[1]?n[0]:r[0],islope:(r[0]-n[0])/(r[1]-n[1])})}}if(a.sort(((e,t)=>e.ymin<t.ymin?-1:e.ymin>t.ymin?1:e.x<t.x?-1:e.x>t.x?1:e.ymax===t.ymax?0:(e.ymax-t.ymax)/Math.abs(e.ymax-t.ymax))),!a.length)return i;let o=[],s=a[0].ymin,c=0;for(;o.length||a.length;){if(a.length){let e=-1;for(let t=0;t<a.length&&!(a[t].ymin>s);t++)e=t;a.splice(0,e+1).forEach((e=>{o.push({s,edge:e})}))}if(o=o.filter((e=>!(e.edge.ymax<=s))),o.sort(((e,t)=>e.edge.x===t.edge.x?0:(e.edge.x-t.edge.x)/Math.abs(e.edge.x-t.edge.x))),(n!==1||c%t==0)&&o.length>1)for(let e=0;e<o.length;e+=2){let t=e+1;if(t>=o.length)break;let n=o[e].edge,r=o[t].edge;i.push([[Math.round(n.x),s],[Math.round(r.x),s]])}s+=n,o.forEach((e=>{e.edge.x=e.edge.x+n*e.edge.islope})),c++}return i}(o,a,r);if(i){for(let e of o)Ky(e,s,-i);(function(e,t,n){let r=[];e.forEach((e=>r.push(...e))),Ky(r,t,n)})(c,s,-i)}return c}function Yy(e,t){let n=t.hachureAngle+90,r=t.hachureGap;r<0&&(r=4*t.strokeWidth),r=Math.round(Math.max(r,.1));let i=1;return t.roughness>=1&&(t.randomizer?.next()||Math.random())>.7&&(i=r),Jy(e,r,n,i||1)}var Xy=class{constructor(e){this.helper=e}fillPolygons(e,t){return this._fillPolygons(e,t)}_fillPolygons(e,t){let n=Yy(e,t);return{type:`fillSketch`,ops:this.renderLines(n,t)}}renderLines(e,t){let n=[];for(let r of e)n.push(...this.helper.doubleLineOps(r[0][0],r[0][1],r[1][0],r[1][1],t));return n}};function Zy(e){let t=e[0],n=e[1];return Math.sqrt((t[0]-n[0])**2+(t[1]-n[1])**2)}var Qy=class extends Xy{fillPolygons(e,t){let n=t.hachureGap;n<0&&(n=4*t.strokeWidth),n=Math.max(n,.1);let r=Yy(e,Object.assign({},t,{hachureGap:n})),i=Math.PI/180*t.hachureAngle,a=[],o=.5*n*Math.cos(i),s=.5*n*Math.sin(i);for(let[e,t]of r)Zy([e,t])&&a.push([[e[0]-o,e[1]+s],[...t]],[[e[0]+o,e[1]-s],[...t]]);return{type:`fillSketch`,ops:this.renderLines(a,t)}}},$y=class extends Xy{fillPolygons(e,t){let n=this._fillPolygons(e,t),r=Object.assign({},t,{hachureAngle:t.hachureAngle+90}),i=this._fillPolygons(e,r);return n.ops=n.ops.concat(i.ops),n}},eb=class{constructor(e){this.helper=e}fillPolygons(e,t){let n=Yy(e,t=Object.assign({},t,{hachureAngle:0}));return this.dotsOnLines(n,t)}dotsOnLines(e,t){let n=[],r=t.hachureGap;r<0&&(r=4*t.strokeWidth),r=Math.max(r,.1);let i=t.fillWeight;i<0&&(i=t.strokeWidth/2);let a=r/4;for(let o of e){let e=Zy(o),s=e/r,c=Math.ceil(s)-1,l=e-c*r,u=(o[0][0]+o[1][0])/2-r/4,d=Math.min(o[0][1],o[1][1]);for(let e=0;e<c;e++){let o=d+l+e*r,s=u-a+2*Math.random()*a,c=o-a+2*Math.random()*a,f=this.helper.ellipse(s,c,i,i,t);n.push(...f.ops)}}return{type:`fillSketch`,ops:n}}},tb=class{constructor(e){this.helper=e}fillPolygons(e,t){let n=Yy(e,t);return{type:`fillSketch`,ops:this.dashedLine(n,t)}}dashedLine(e,t){let n=t.dashOffset<0?t.hachureGap<0?4*t.strokeWidth:t.hachureGap:t.dashOffset,r=t.dashGap<0?t.hachureGap<0?4*t.strokeWidth:t.hachureGap:t.dashGap,i=[];return e.forEach((e=>{let a=Zy(e),o=Math.floor(a/(n+r)),s=(a+r-o*(n+r))/2,c=e[0],l=e[1];c[0]>l[0]&&(c=e[1],l=e[0]);let u=Math.atan((l[1]-c[1])/(l[0]-c[0]));for(let e=0;e<o;e++){let a=e*(n+r),o=a+n,l=[c[0]+a*Math.cos(u)+s*Math.cos(u),c[1]+a*Math.sin(u)+s*Math.sin(u)],d=[c[0]+o*Math.cos(u)+s*Math.cos(u),c[1]+o*Math.sin(u)+s*Math.sin(u)];i.push(...this.helper.doubleLineOps(l[0],l[1],d[0],d[1],t))}})),i}},nb=class{constructor(e){this.helper=e}fillPolygons(e,t){let n=t.hachureGap<0?4*t.strokeWidth:t.hachureGap,r=t.zigzagOffset<0?n:t.zigzagOffset,i=Yy(e,t=Object.assign({},t,{hachureGap:n+r}));return{type:`fillSketch`,ops:this.zigzagLines(i,r,t)}}zigzagLines(e,t,n){let r=[];return e.forEach((e=>{let i=Zy(e),a=Math.round(i/(2*t)),o=e[0],s=e[1];o[0]>s[0]&&(o=e[1],s=e[0]);let c=Math.atan((s[1]-o[1])/(s[0]-o[0]));for(let e=0;e<a;e++){let i=2*e*t,a=2*(e+1)*t,s=Math.sqrt(2*t**2),l=[o[0]+i*Math.cos(c),o[1]+i*Math.sin(c)],u=[o[0]+a*Math.cos(c),o[1]+a*Math.sin(c)],d=[l[0]+s*Math.cos(c+Math.PI/4),l[1]+s*Math.sin(c+Math.PI/4)];r.push(...this.helper.doubleLineOps(l[0],l[1],d[0],d[1],n),...this.helper.doubleLineOps(d[0],d[1],u[0],u[1],n))}})),r}},rb={},ib=class{constructor(e){this.seed=e}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}},ab=0,ob=1,sb=2,cb={A:7,a:7,C:6,c:6,H:1,h:1,L:2,l:2,M:2,m:2,Q:4,q:4,S:4,s:4,T:2,t:2,V:1,v:1,Z:0,z:0};function lb(e,t){return e.type===t}function ub(e){let t=[],n=function(e){let t=[];for(;e!==``;)if(e.match(/^([ \t\r\n,]+)/))e=e.substr(RegExp.$1.length);else if(e.match(/^([aAcChHlLmMqQsStTvVzZ])/))t[t.length]={type:ab,text:RegExp.$1},e=e.substr(RegExp.$1.length);else{if(!e.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/))return[];t[t.length]={type:ob,text:`${parseFloat(RegExp.$1)}`},e=e.substr(RegExp.$1.length)}return t[t.length]={type:sb,text:``},t}(e),r=`BOD`,i=0,a=n[i];for(;!lb(a,sb);){let o=0,s=[];if(r===`BOD`){if(a.text!==`M`&&a.text!==`m`)return ub(`M0,0`+e);i++,o=cb[a.text],r=a.text}else lb(a,ob)?o=cb[r]:(i++,o=cb[a.text],r=a.text);if(!(i+o<n.length))throw Error(`Path data ended short`);for(let e=i;e<i+o;e++){let t=n[e];if(!lb(t,ob))throw Error(`Param not a number: `+r+`,`+t.text);s[s.length]=+t.text}if(typeof cb[r]!=`number`)throw Error(`Bad segment: `+r);{let e={key:r,data:s};t.push(e),i+=o,a=n[i],r===`M`&&(r=`L`),r===`m`&&(r=`l`)}}return t}function db(e){let t=0,n=0,r=0,i=0,a=[];for(let{key:o,data:s}of e)switch(o){case`M`:a.push({key:`M`,data:[...s]}),[t,n]=s,[r,i]=s;break;case`m`:t+=s[0],n+=s[1],a.push({key:`M`,data:[t,n]}),r=t,i=n;break;case`L`:a.push({key:`L`,data:[...s]}),[t,n]=s;break;case`l`:t+=s[0],n+=s[1],a.push({key:`L`,data:[t,n]});break;case`C`:a.push({key:`C`,data:[...s]}),t=s[4],n=s[5];break;case`c`:{let e=s.map(((e,r)=>r%2?e+n:e+t));a.push({key:`C`,data:e}),t=e[4],n=e[5];break}case`Q`:a.push({key:`Q`,data:[...s]}),t=s[2],n=s[3];break;case`q`:{let e=s.map(((e,r)=>r%2?e+n:e+t));a.push({key:`Q`,data:e}),t=e[2],n=e[3];break}case`A`:a.push({key:`A`,data:[...s]}),t=s[5],n=s[6];break;case`a`:t+=s[5],n+=s[6],a.push({key:`A`,data:[s[0],s[1],s[2],s[3],s[4],t,n]});break;case`H`:a.push({key:`H`,data:[...s]}),t=s[0];break;case`h`:t+=s[0],a.push({key:`H`,data:[t]});break;case`V`:a.push({key:`V`,data:[...s]}),n=s[0];break;case`v`:n+=s[0],a.push({key:`V`,data:[n]});break;case`S`:a.push({key:`S`,data:[...s]}),t=s[2],n=s[3];break;case`s`:{let e=s.map(((e,r)=>r%2?e+n:e+t));a.push({key:`S`,data:e}),t=e[2],n=e[3];break}case`T`:a.push({key:`T`,data:[...s]}),t=s[0],n=s[1];break;case`t`:t+=s[0],n+=s[1],a.push({key:`T`,data:[t,n]});break;case`Z`:case`z`:a.push({key:`Z`,data:[]}),t=r,n=i}return a}function fb(e){let t=[],n=``,r=0,i=0,a=0,o=0,s=0,c=0;for(let{key:l,data:u}of e){switch(l){case`M`:t.push({key:`M`,data:[...u]}),[r,i]=u,[a,o]=u;break;case`C`:t.push({key:`C`,data:[...u]}),r=u[4],i=u[5],s=u[2],c=u[3];break;case`L`:t.push({key:`L`,data:[...u]}),[r,i]=u;break;case`H`:r=u[0],t.push({key:`L`,data:[r,i]});break;case`V`:i=u[0],t.push({key:`L`,data:[r,i]});break;case`S`:{let e=0,a=0;n===`C`||n===`S`?(e=r+(r-s),a=i+(i-c)):(e=r,a=i),t.push({key:`C`,data:[e,a,...u]}),s=u[0],c=u[1],r=u[2],i=u[3];break}case`T`:{let[e,a]=u,o=0,l=0;n===`Q`||n===`T`?(o=r+(r-s),l=i+(i-c)):(o=r,l=i);let d=r+2*(o-r)/3,f=i+2*(l-i)/3,p=e+2*(o-e)/3,m=a+2*(l-a)/3;t.push({key:`C`,data:[d,f,p,m,e,a]}),s=o,c=l,r=e,i=a;break}case`Q`:{let[e,n,a,o]=u,l=r+2*(e-r)/3,d=i+2*(n-i)/3,f=a+2*(e-a)/3,p=o+2*(n-o)/3;t.push({key:`C`,data:[l,d,f,p,a,o]}),s=e,c=n,r=a,i=o;break}case`A`:{let e=Math.abs(u[0]),n=Math.abs(u[1]),a=u[2],o=u[3],s=u[4],c=u[5],l=u[6];e===0||n===0?(t.push({key:`C`,data:[r,i,c,l,c,l]}),r=c,i=l):(r!==c||i!==l)&&(mb(r,i,c,l,e,n,a,o,s).forEach((function(e){t.push({key:`C`,data:e})})),r=c,i=l);break}case`Z`:t.push({key:`Z`,data:[]}),r=a,i=o}n=l}return t}function pb(e,t,n){return[e*Math.cos(n)-t*Math.sin(n),e*Math.sin(n)+t*Math.cos(n)]}function mb(e,t,n,r,i,a,o,s,c,l){let u=(d=o,Math.PI*d/180);var d;let f=[],p=0,m=0,h=0,g=0;if(l)[p,m,h,g]=l;else{[e,t]=pb(e,t,-u),[n,r]=pb(n,r,-u);let o=(e-n)/2,l=(t-r)/2,d=o*o/(i*i)+l*l/(a*a);d>1&&(d=Math.sqrt(d),i*=d,a*=d);let f=i*i,_=a*a,v=f*_-f*l*l-_*o*o,y=f*l*l+_*o*o,b=(s===c?-1:1)*Math.sqrt(Math.abs(v/y));h=b*i*l/a+(e+n)/2,g=b*-a*o/i+(t+r)/2,p=Math.asin(parseFloat(((t-g)/a).toFixed(9))),m=Math.asin(parseFloat(((r-g)/a).toFixed(9))),e<h&&(p=Math.PI-p),n<h&&(m=Math.PI-m),p<0&&(p=2*Math.PI+p),m<0&&(m=2*Math.PI+m),c&&p>m&&(p-=2*Math.PI),!c&&m>p&&(m-=2*Math.PI)}let _=m-p;if(Math.abs(_)>120*Math.PI/180){let e=m,t=n,s=r;m=c&&m>p?p+120*Math.PI/180*1:p+120*Math.PI/180*-1,f=mb(n=h+i*Math.cos(m),r=g+a*Math.sin(m),t,s,i,a,o,0,c,[m,e,h,g])}_=m-p;let v=Math.cos(p),y=Math.sin(p),b=Math.cos(m),x=Math.sin(m),S=Math.tan(_/4),C=4/3*i*S,w=4/3*a*S,T=[e,t],E=[e+C*y,t-w*v],D=[n+C*x,r-w*b],O=[n,r];if(E[0]=2*T[0]-E[0],E[1]=2*T[1]-E[1],l)return[E,D,O].concat(f);{f=[E,D,O].concat(f);let e=[];for(let t=0;t<f.length;t+=3){let n=pb(f[t][0],f[t][1],u),r=pb(f[t+1][0],f[t+1][1],u),i=pb(f[t+2][0],f[t+2][1],u);e.push([n[0],n[1],r[0],r[1],i[0],i[1]])}return e}}var hb={randOffset:function(e,t){return $(e,t)},randOffsetWithRange:function(e,t,n){return Ob(e,t,n)},ellipse:function(e,t,n,r,i){return xb(e,t,i,bb(n,r,i)).opset},doubleLineOps:function(e,t,n,r,i){return kb(e,t,n,r,i,!0)}};function gb(e,t,n,r,i){return{type:`path`,ops:kb(e,t,n,r,i)}}function _b(e,t,n){let r=(e||[]).length;if(r>2){let i=[];for(let t=0;t<r-1;t++)i.push(...kb(e[t][0],e[t][1],e[t+1][0],e[t+1][1],n));return t&&i.push(...kb(e[r-1][0],e[r-1][1],e[0][0],e[0][1],n)),{type:`path`,ops:i}}return r===2?gb(e[0][0],e[0][1],e[1][0],e[1][1],n):{type:`path`,ops:[]}}function vb(e,t,n,r,i){return function(e,t){return _b(e,!0,t)}([[e,t],[e+n,t],[e+n,t+r],[e,t+r]],i)}function yb(e,t){if(e.length){let n=typeof e[0][0]==`number`?[e]:e,r=jb(n[0],1*(1+.2*t.roughness),t),i=t.disableMultiStroke?[]:jb(n[0],1.5*(1+.22*t.roughness),Eb(t));for(let e=1;e<n.length;e++){let a=n[e];if(a.length){let e=jb(a,1*(1+.2*t.roughness),t),n=t.disableMultiStroke?[]:jb(a,1.5*(1+.22*t.roughness),Eb(t));for(let t of e)t.op!==`move`&&r.push(t);for(let e of n)e.op!==`move`&&i.push(e)}}return{type:`path`,ops:r.concat(i)}}return{type:`path`,ops:[]}}function bb(e,t,n){let r=Math.sqrt(2*Math.PI*Math.sqrt(((e/2)**2+(t/2)**2)/2)),i=Math.ceil(Math.max(n.curveStepCount,n.curveStepCount/Math.sqrt(200)*r)),a=2*Math.PI/i,o=Math.abs(e/2),s=Math.abs(t/2),c=1-n.curveFitting;return o+=$(o*c,n),s+=$(s*c,n),{increment:a,rx:o,ry:s}}function xb(e,t,n,r){let[i,a]=Nb(r.increment,e,t,r.rx,r.ry,1,r.increment*Ob(.1,Ob(.4,1,n),n),n),o=Mb(i,null,n);if(!n.disableMultiStroke&&n.roughness!==0){let[i]=Nb(r.increment,e,t,r.rx,r.ry,1.5,0,n),a=Mb(i,null,n);o=o.concat(a)}return{estimatedPoints:a,opset:{type:`path`,ops:o}}}function Sb(e,t,n,r,i,a,o,s,c){let l=e,u=t,d=Math.abs(n/2),f=Math.abs(r/2);d+=$(.01*d,c),f+=$(.01*f,c);let p=i,m=a;for(;p<0;)p+=2*Math.PI,m+=2*Math.PI;m-p>2*Math.PI&&(p=0,m=2*Math.PI);let h=2*Math.PI/c.curveStepCount,g=Math.min(h/2,(m-p)/2),_=Pb(g,l,u,d,f,p,m,1,c);if(!c.disableMultiStroke){let e=Pb(g,l,u,d,f,p,m,1.5,c);_.push(...e)}return o&&(s?_.push(...kb(l,u,l+d*Math.cos(p),u+f*Math.sin(p),c),...kb(l,u,l+d*Math.cos(m),u+f*Math.sin(m),c)):_.push({op:`lineTo`,data:[l,u]},{op:`lineTo`,data:[l+d*Math.cos(p),u+f*Math.sin(p)]})),{type:`path`,ops:_}}function Cb(e,t){let n=fb(db(ub(e))),r=[],i=[0,0],a=[0,0];for(let{key:e,data:o}of n)switch(e){case`M`:a=[o[0],o[1]],i=[o[0],o[1]];break;case`L`:r.push(...kb(a[0],a[1],o[0],o[1],t)),a=[o[0],o[1]];break;case`C`:{let[e,n,i,s,c,l]=o;r.push(...Fb(e,n,i,s,c,l,a,t)),a=[c,l];break}case`Z`:r.push(...kb(a[0],a[1],i[0],i[1],t)),a=[i[0],i[1]]}return{type:`path`,ops:r}}function wb(e,t){let n=[];for(let r of e)if(r.length){let e=t.maxRandomnessOffset||0,i=r.length;if(i>2){n.push({op:`move`,data:[r[0][0]+$(e,t),r[0][1]+$(e,t)]});for(let a=1;a<i;a++)n.push({op:`lineTo`,data:[r[a][0]+$(e,t),r[a][1]+$(e,t)]})}}return{type:`fillPath`,ops:n}}function Tb(e,t){return function(e,t){let n=e.fillStyle||`hachure`;if(!rb[n])switch(n){case`zigzag`:rb[n]||(rb[n]=new Qy(t));break;case`cross-hatch`:rb[n]||(rb[n]=new $y(t));break;case`dots`:rb[n]||(rb[n]=new eb(t));break;case`dashed`:rb[n]||(rb[n]=new tb(t));break;case`zigzag-line`:rb[n]||(rb[n]=new nb(t));break;default:n=`hachure`,rb[n]||(rb[n]=new Xy(t))}return rb[n]}(t,hb).fillPolygons(e,t)}function Eb(e){let t=Object.assign({},e);return t.randomizer=void 0,e.seed&&(t.seed=e.seed+1),t}function Db(e){return e.randomizer||=new ib(e.seed||0),e.randomizer.next()}function Ob(e,t,n,r=1){return n.roughness*r*(Db(n)*(t-e)+e)}function $(e,t,n=1){return Ob(-e,e,t,n)}function kb(e,t,n,r,i,a=!1){let o=a?i.disableMultiStrokeFill:i.disableMultiStroke,s=Ab(e,t,n,r,i,!0,!1);if(o)return s;let c=Ab(e,t,n,r,i,!0,!0);return s.concat(c)}function Ab(e,t,n,r,i,a,o){let s=(e-n)**2+(t-r)**2,c=Math.sqrt(s),l=1;l=c<200?1:c>500?.4:-.0016668*c+1.233334;let u=i.maxRandomnessOffset||0;u*u*100>s&&(u=c/10);let d=u/2,f=.2+.2*Db(i),p=i.bowing*i.maxRandomnessOffset*(r-t)/200,m=i.bowing*i.maxRandomnessOffset*(e-n)/200;p=$(p,i,l),m=$(m,i,l);let h=[],g=()=>$(d,i,l),_=()=>$(u,i,l),v=i.preserveVertices;return a&&(o?h.push({op:`move`,data:[e+(v?0:g()),t+(v?0:g())]}):h.push({op:`move`,data:[e+(v?0:$(u,i,l)),t+(v?0:$(u,i,l))]})),o?h.push({op:`bcurveTo`,data:[p+e+(n-e)*f+g(),m+t+(r-t)*f+g(),p+e+2*(n-e)*f+g(),m+t+2*(r-t)*f+g(),n+(v?0:g()),r+(v?0:g())]}):h.push({op:`bcurveTo`,data:[p+e+(n-e)*f+_(),m+t+(r-t)*f+_(),p+e+2*(n-e)*f+_(),m+t+2*(r-t)*f+_(),n+(v?0:_()),r+(v?0:_())]}),h}function jb(e,t,n){if(!e.length)return[];let r=[];r.push([e[0][0]+$(t,n),e[0][1]+$(t,n)]),r.push([e[0][0]+$(t,n),e[0][1]+$(t,n)]);for(let i=1;i<e.length;i++)r.push([e[i][0]+$(t,n),e[i][1]+$(t,n)]),i===e.length-1&&r.push([e[i][0]+$(t,n),e[i][1]+$(t,n)]);return Mb(r,null,n)}function Mb(e,t,n){let r=e.length,i=[];if(r>3){let a=[],o=1-n.curveTightness;i.push({op:`move`,data:[e[1][0],e[1][1]]});for(let t=1;t+2<r;t++){let n=e[t];a[0]=[n[0],n[1]],a[1]=[n[0]+(o*e[t+1][0]-o*e[t-1][0])/6,n[1]+(o*e[t+1][1]-o*e[t-1][1])/6],a[2]=[e[t+1][0]+(o*e[t][0]-o*e[t+2][0])/6,e[t+1][1]+(o*e[t][1]-o*e[t+2][1])/6],a[3]=[e[t+1][0],e[t+1][1]],i.push({op:`bcurveTo`,data:[a[1][0],a[1][1],a[2][0],a[2][1],a[3][0],a[3][1]]})}if(t&&t.length===2){let e=n.maxRandomnessOffset;i.push({op:`lineTo`,data:[t[0]+$(e,n),t[1]+$(e,n)]})}}else r===3?(i.push({op:`move`,data:[e[1][0],e[1][1]]}),i.push({op:`bcurveTo`,data:[e[1][0],e[1][1],e[2][0],e[2][1],e[2][0],e[2][1]]})):r===2&&i.push(...Ab(e[0][0],e[0][1],e[1][0],e[1][1],n,!0,!0));return i}function Nb(e,t,n,r,i,a,o,s){let c=[],l=[];if(s.roughness===0){e/=4,l.push([t+r*Math.cos(-e),n+i*Math.sin(-e)]);for(let a=0;a<=2*Math.PI;a+=e){let e=[t+r*Math.cos(a),n+i*Math.sin(a)];c.push(e),l.push(e)}l.push([t+r*Math.cos(0),n+i*Math.sin(0)]),l.push([t+r*Math.cos(e),n+i*Math.sin(e)])}else{let u=$(.5,s)-Math.PI/2;l.push([$(a,s)+t+.9*r*Math.cos(u-e),$(a,s)+n+.9*i*Math.sin(u-e)]);let d=2*Math.PI+u-.01;for(let o=u;o<d;o+=e){let e=[$(a,s)+t+r*Math.cos(o),$(a,s)+n+i*Math.sin(o)];c.push(e),l.push(e)}l.push([$(a,s)+t+r*Math.cos(u+2*Math.PI+.5*o),$(a,s)+n+i*Math.sin(u+2*Math.PI+.5*o)]),l.push([$(a,s)+t+.98*r*Math.cos(u+o),$(a,s)+n+.98*i*Math.sin(u+o)]),l.push([$(a,s)+t+.9*r*Math.cos(u+.5*o),$(a,s)+n+.9*i*Math.sin(u+.5*o)])}return[l,c]}function Pb(e,t,n,r,i,a,o,s,c){let l=a+$(.1,c),u=[];u.push([$(s,c)+t+.9*r*Math.cos(l-e),$(s,c)+n+.9*i*Math.sin(l-e)]);for(let a=l;a<=o;a+=e)u.push([$(s,c)+t+r*Math.cos(a),$(s,c)+n+i*Math.sin(a)]);return u.push([t+r*Math.cos(o),n+i*Math.sin(o)]),u.push([t+r*Math.cos(o),n+i*Math.sin(o)]),Mb(u,null,c)}function Fb(e,t,n,r,i,a,o,s){let c=[],l=[s.maxRandomnessOffset||1,(s.maxRandomnessOffset||1)+.3],u=[0,0],d=s.disableMultiStroke?1:2,f=s.preserveVertices;for(let p=0;p<d;p++)p===0?c.push({op:`move`,data:[o[0],o[1]]}):c.push({op:`move`,data:[o[0]+(f?0:$(l[0],s)),o[1]+(f?0:$(l[0],s))]}),u=f?[i,a]:[i+$(l[p],s),a+$(l[p],s)],c.push({op:`bcurveTo`,data:[e+$(l[p],s),t+$(l[p],s),n+$(l[p],s),r+$(l[p],s),u[0],u[1]]});return c}function Ib(e){return[...e]}function Lb(e,t=0){let n=e.length;if(n<3)throw Error(`A curve must have at least three points.`);let r=[];if(n===3)r.push(Ib(e[0]),Ib(e[1]),Ib(e[2]),Ib(e[2]));else{let n=[];n.push(e[0],e[0]);for(let t=1;t<e.length;t++)n.push(e[t]),t===e.length-1&&n.push(e[t]);let i=[],a=1-t;r.push(Ib(n[0]));for(let e=1;e+2<n.length;e++){let t=n[e];i[0]=[t[0],t[1]],i[1]=[t[0]+(a*n[e+1][0]-a*n[e-1][0])/6,t[1]+(a*n[e+1][1]-a*n[e-1][1])/6],i[2]=[n[e+1][0]+(a*n[e][0]-a*n[e+2][0])/6,n[e+1][1]+(a*n[e][1]-a*n[e+2][1])/6],i[3]=[n[e+1][0],n[e+1][1]],r.push(i[1],i[2],i[3])}}return r}function Rb(e,t){return(e[0]-t[0])**2+(e[1]-t[1])**2}function zb(e,t,n){let r=Rb(t,n);if(r===0)return Rb(e,t);let i=((e[0]-t[0])*(n[0]-t[0])+(e[1]-t[1])*(n[1]-t[1]))/r;return i=Math.max(0,Math.min(1,i)),Rb(e,Bb(t,n,i))}function Bb(e,t,n){return[e[0]+(t[0]-e[0])*n,e[1]+(t[1]-e[1])*n]}function Vb(e,t,n,r){let i=r||[];if(function(e,t){let n=e[t+0],r=e[t+1],i=e[t+2],a=e[t+3],o=3*r[0]-2*n[0]-a[0];o*=o;let s=3*r[1]-2*n[1]-a[1];s*=s;let c=3*i[0]-2*a[0]-n[0];c*=c;let l=3*i[1]-2*a[1]-n[1];return l*=l,o<c&&(o=c),s<l&&(s=l),o+s}(e,t)<n){let n=e[t+0];i.length?(a=i[i.length-1],o=n,Math.sqrt(Rb(a,o))>1&&i.push(n)):i.push(n),i.push(e[t+3])}else{let r=.5,a=e[t+0],o=e[t+1],s=e[t+2],c=e[t+3],l=Bb(a,o,r),u=Bb(o,s,r),d=Bb(s,c,r),f=Bb(l,u,r),p=Bb(u,d,r),m=Bb(f,p,r);Vb([a,l,f,m],0,n,i),Vb([m,p,d,c],0,n,i)}var a,o;return i}function Hb(e,t){return Ub(e,0,e.length,t)}function Ub(e,t,n,r,i){let a=i||[],o=e[t],s=e[n-1],c=0,l=1;for(let r=t+1;r<n-1;++r){let t=zb(e[r],o,s);t>c&&(c=t,l=r)}return Math.sqrt(c)>r?(Ub(e,t,l+1,r,a),Ub(e,l,n,r,a)):(a.length||a.push(o),a.push(s)),a}function Wb(e,t=.15,n){let r=[],i=(e.length-1)/3;for(let n=0;n<i;n++)Vb(e,3*n,t,r);return n&&n>0?Ub(r,0,r.length,n):r}var Gb=`none`,Kb=class{constructor(e){this.defaultOptions={maxRandomnessOffset:2,roughness:1,bowing:1,stroke:`#000`,strokeWidth:1,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:`hachure`,fillWeight:-1,hachureAngle:-41,hachureGap:-1,dashOffset:-1,dashGap:-1,zigzagOffset:-1,seed:0,disableMultiStroke:!1,disableMultiStrokeFill:!1,preserveVertices:!1,fillShapeRoughnessGain:.8},this.config=e||{},this.config.options&&(this.defaultOptions=this._o(this.config.options))}static newSeed(){return Math.floor(Math.random()*2**31)}_o(e){return e?Object.assign({},this.defaultOptions,e):this.defaultOptions}_d(e,t,n){return{shape:e,sets:t||[],options:n||this.defaultOptions}}line(e,t,n,r,i){let a=this._o(i);return this._d(`line`,[gb(e,t,n,r,a)],a)}rectangle(e,t,n,r,i){let a=this._o(i),o=[],s=vb(e,t,n,r,a);if(a.fill){let i=[[e,t],[e+n,t],[e+n,t+r],[e,t+r]];a.fillStyle===`solid`?o.push(wb([i],a)):o.push(Tb([i],a))}return a.stroke!==Gb&&o.push(s),this._d(`rectangle`,o,a)}ellipse(e,t,n,r,i){let a=this._o(i),o=[],s=bb(n,r,a),c=xb(e,t,a,s);if(a.fill){if(a.fillStyle===`solid`){let n=xb(e,t,a,s).opset;n.type=`fillPath`,o.push(n)}else o.push(Tb([c.estimatedPoints],a))}return a.stroke!==Gb&&o.push(c.opset),this._d(`ellipse`,o,a)}circle(e,t,n,r){let i=this.ellipse(e,t,n,n,r);return i.shape=`circle`,i}linearPath(e,t){let n=this._o(t);return this._d(`linearPath`,[_b(e,!1,n)],n)}arc(e,t,n,r,i,a,o=!1,s){let c=this._o(s),l=[],u=Sb(e,t,n,r,i,a,o,!0,c);if(o&&c.fill){if(c.fillStyle===`solid`){let o=Object.assign({},c);o.disableMultiStroke=!0;let s=Sb(e,t,n,r,i,a,!0,!1,o);s.type=`fillPath`,l.push(s)}else l.push(function(e,t,n,r,i,a,o){let s=e,c=t,l=Math.abs(n/2),u=Math.abs(r/2);l+=$(.01*l,o),u+=$(.01*u,o);let d=i,f=a;for(;d<0;)d+=2*Math.PI,f+=2*Math.PI;f-d>2*Math.PI&&(d=0,f=2*Math.PI);let p=(f-d)/o.curveStepCount,m=[];for(let e=d;e<=f;e+=p)m.push([s+l*Math.cos(e),c+u*Math.sin(e)]);return m.push([s+l*Math.cos(f),c+u*Math.sin(f)]),m.push([s,c]),Tb([m],o)}(e,t,n,r,i,a,c))}return c.stroke!==Gb&&l.push(u),this._d(`arc`,l,c)}curve(e,t){let n=this._o(t),r=[],i=yb(e,n);if(n.fill&&n.fill!==Gb){if(n.fillStyle===`solid`){let t=yb(e,Object.assign(Object.assign({},n),{disableMultiStroke:!0,roughness:n.roughness?n.roughness+n.fillShapeRoughnessGain:0}));r.push({type:`fillPath`,ops:this._mergedShape(t.ops)})}else{let t=[],i=e;if(i.length){let e=typeof i[0][0]==`number`?[i]:i;for(let r of e)r.length<3?t.push(...r):r.length===3?t.push(...Wb(Lb([r[0],r[0],r[1],r[2]]),10,(1+n.roughness)/2)):t.push(...Wb(Lb(r),10,(1+n.roughness)/2))}t.length&&r.push(Tb([t],n))}}return n.stroke!==Gb&&r.push(i),this._d(`curve`,r,n)}polygon(e,t){let n=this._o(t),r=[],i=_b(e,!0,n);return n.fill&&(n.fillStyle===`solid`?r.push(wb([e],n)):r.push(Tb([e],n))),n.stroke!==Gb&&r.push(i),this._d(`polygon`,r,n)}path(e,t){let n=this._o(t),r=[];if(!e)return this._d(`path`,r,n);e=(e||``).replace(/\n/g,` `).replace(/(-\s)/g,`-`).replace(`/(ss)/g`,` `);let i=n.fill&&n.fill!==`transparent`&&n.fill!==Gb,a=n.stroke!==Gb,o=!!(n.simplification&&n.simplification<1),s=function(e,t,n){let r=fb(db(ub(e))),i=[],a=[],o=[0,0],s=[],c=()=>{s.length>=4&&a.push(...Wb(s,t)),s=[]},l=()=>{c(),a.length&&(i.push(a),a=[])};for(let{key:e,data:t}of r)switch(e){case`M`:l(),o=[t[0],t[1]],a.push(o);break;case`L`:c(),a.push([t[0],t[1]]);break;case`C`:if(!s.length){let e=a.length?a[a.length-1]:o;s.push([e[0],e[1]])}s.push([t[0],t[1]]),s.push([t[2],t[3]]),s.push([t[4],t[5]]);break;case`Z`:c(),a.push([o[0],o[1]])}if(l(),!n)return i;let u=[];for(let e of i){let t=Hb(e,n);t.length&&u.push(t)}return u}(e,1,o?4-4*(n.simplification||1):(1+n.roughness)/2),c=Cb(e,n);if(i){if(n.fillStyle===`solid`){if(s.length===1){let t=Cb(e,Object.assign(Object.assign({},n),{disableMultiStroke:!0,roughness:n.roughness?n.roughness+n.fillShapeRoughnessGain:0}));r.push({type:`fillPath`,ops:this._mergedShape(t.ops)})}else r.push(wb(s,n))}else r.push(Tb(s,n))}return a&&(o?s.forEach((e=>{r.push(_b(e,!1,n))})):r.push(c)),this._d(`path`,r,n)}opsToPath(e,t){let n=``;for(let r of e.ops){let e=typeof t==`number`&&t>=0?r.data.map((e=>+e.toFixed(t))):r.data;switch(r.op){case`move`:n+=`M${e[0]} ${e[1]} `;break;case`bcurveTo`:n+=`C${e[0]} ${e[1]}, ${e[2]} ${e[3]}, ${e[4]} ${e[5]} `;break;case`lineTo`:n+=`L${e[0]} ${e[1]} `}}return n.trim()}toPaths(e){let t=e.sets||[],n=e.options||this.defaultOptions,r=[];for(let e of t){let t=null;switch(e.type){case`path`:t={d:this.opsToPath(e),stroke:n.stroke,strokeWidth:n.strokeWidth,fill:Gb};break;case`fillPath`:t={d:this.opsToPath(e),stroke:Gb,strokeWidth:0,fill:n.fill||Gb};break;case`fillSketch`:t=this.fillSketch(e,n)}t&&r.push(t)}return r}fillSketch(e,t){let n=t.fillWeight;return n<0&&(n=t.strokeWidth/2),{d:this.opsToPath(e),stroke:t.fill||Gb,strokeWidth:n,fill:Gb}}_mergedShape(e){return e.filter(((e,t)=>t===0||e.op!==`move`))}},qb=class{constructor(e,t){this.canvas=e,this.ctx=this.canvas.getContext(`2d`),this.gen=new Kb(t)}draw(e){let t=e.sets||[],n=e.options||this.getDefaultOptions(),r=this.ctx,i=e.options.fixedDecimalPlaceDigits;for(let a of t)switch(a.type){case`path`:r.save(),r.strokeStyle=n.stroke===`none`?`transparent`:n.stroke,r.lineWidth=n.strokeWidth,n.strokeLineDash&&r.setLineDash(n.strokeLineDash),n.strokeLineDashOffset&&(r.lineDashOffset=n.strokeLineDashOffset),this._drawToContext(r,a,i),r.restore();break;case`fillPath`:{r.save(),r.fillStyle=n.fill||``;let t=e.shape===`curve`||e.shape===`polygon`||e.shape===`path`?`evenodd`:`nonzero`;this._drawToContext(r,a,i,t),r.restore();break}case`fillSketch`:this.fillSketch(r,a,n)}}fillSketch(e,t,n){let r=n.fillWeight;r<0&&(r=n.strokeWidth/2),e.save(),n.fillLineDash&&e.setLineDash(n.fillLineDash),n.fillLineDashOffset&&(e.lineDashOffset=n.fillLineDashOffset),e.strokeStyle=n.fill||``,e.lineWidth=r,this._drawToContext(e,t,n.fixedDecimalPlaceDigits),e.restore()}_drawToContext(e,t,n,r=`nonzero`){e.beginPath();for(let r of t.ops){let t=typeof n==`number`&&n>=0?r.data.map((e=>+e.toFixed(n))):r.data;switch(r.op){case`move`:e.moveTo(t[0],t[1]);break;case`bcurveTo`:e.bezierCurveTo(t[0],t[1],t[2],t[3],t[4],t[5]);break;case`lineTo`:e.lineTo(t[0],t[1])}}t.type===`fillPath`?e.fill(r):e.stroke()}get generator(){return this.gen}getDefaultOptions(){return this.gen.defaultOptions}line(e,t,n,r,i){let a=this.gen.line(e,t,n,r,i);return this.draw(a),a}rectangle(e,t,n,r,i){let a=this.gen.rectangle(e,t,n,r,i);return this.draw(a),a}ellipse(e,t,n,r,i){let a=this.gen.ellipse(e,t,n,r,i);return this.draw(a),a}circle(e,t,n,r){let i=this.gen.circle(e,t,n,r);return this.draw(i),i}linearPath(e,t){let n=this.gen.linearPath(e,t);return this.draw(n),n}polygon(e,t){let n=this.gen.polygon(e,t);return this.draw(n),n}arc(e,t,n,r,i,a,o=!1,s){let c=this.gen.arc(e,t,n,r,i,a,o,s);return this.draw(c),c}curve(e,t){let n=this.gen.curve(e,t);return this.draw(n),n}path(e,t){let n=this.gen.path(e,t);return this.draw(n),n}},Jb=`http://www.w3.org/2000/svg`,Yb=class{constructor(e,t){this.svg=e,this.gen=new Kb(t)}draw(e){let t=e.sets||[],n=e.options||this.getDefaultOptions(),r=this.svg.ownerDocument||window.document,i=r.createElementNS(Jb,`g`),a=e.options.fixedDecimalPlaceDigits;for(let o of t){let t=null;switch(o.type){case`path`:t=r.createElementNS(Jb,`path`),t.setAttribute(`d`,this.opsToPath(o,a)),t.setAttribute(`stroke`,n.stroke),t.setAttribute(`stroke-width`,n.strokeWidth+``),t.setAttribute(`fill`,`none`),n.strokeLineDash&&t.setAttribute(`stroke-dasharray`,n.strokeLineDash.join(` `).trim()),n.strokeLineDashOffset&&t.setAttribute(`stroke-dashoffset`,`${n.strokeLineDashOffset}`);break;case`fillPath`:t=r.createElementNS(Jb,`path`),t.setAttribute(`d`,this.opsToPath(o,a)),t.setAttribute(`stroke`,`none`),t.setAttribute(`stroke-width`,`0`),t.setAttribute(`fill`,n.fill||``),e.shape!==`curve`&&e.shape!==`polygon`||t.setAttribute(`fill-rule`,`evenodd`);break;case`fillSketch`:t=this.fillSketch(r,o,n)}t&&i.appendChild(t)}return i}fillSketch(e,t,n){let r=n.fillWeight;r<0&&(r=n.strokeWidth/2);let i=e.createElementNS(Jb,`path`);return i.setAttribute(`d`,this.opsToPath(t,n.fixedDecimalPlaceDigits)),i.setAttribute(`stroke`,n.fill||``),i.setAttribute(`stroke-width`,r+``),i.setAttribute(`fill`,`none`),n.fillLineDash&&i.setAttribute(`stroke-dasharray`,n.fillLineDash.join(` `).trim()),n.fillLineDashOffset&&i.setAttribute(`stroke-dashoffset`,`${n.fillLineDashOffset}`),i}get generator(){return this.gen}getDefaultOptions(){return this.gen.defaultOptions}opsToPath(e,t){return this.gen.opsToPath(e,t)}line(e,t,n,r,i){let a=this.gen.line(e,t,n,r,i);return this.draw(a)}rectangle(e,t,n,r,i){let a=this.gen.rectangle(e,t,n,r,i);return this.draw(a)}ellipse(e,t,n,r,i){let a=this.gen.ellipse(e,t,n,r,i);return this.draw(a)}circle(e,t,n,r){let i=this.gen.circle(e,t,n,r);return this.draw(i)}linearPath(e,t){let n=this.gen.linearPath(e,t);return this.draw(n)}polygon(e,t){let n=this.gen.polygon(e,t);return this.draw(n)}arc(e,t,n,r,i,a,o=!1,s){let c=this.gen.arc(e,t,n,r,i,a,o,s);return this.draw(c)}curve(e,t){let n=this.gen.curve(e,t);return this.draw(n)}path(e,t){let n=this.gen.path(e,t);return this.draw(n)}},Xb={canvas:(e,t)=>new qb(e,t),svg:(e,t)=>new Yb(e,t),generator:e=>new Kb(e),newSeed:()=>Kb.newSeed()};mg.registerPlugin(Q);var Zb=({className:e=`w-4 h-4`})=>(0,z.jsx)(`svg`,{className:e,fill:`currentColor`,viewBox:`0 0 24 24`,"aria-hidden":`true`,children:(0,z.jsx)(`path`,{fillRule:`evenodd`,d:`M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z`,clipRule:`evenodd`})});function Qb({theme:e=`dark`}){let t=(0,_.useRef)(null),n=(0,_.useRef)(null),r=(0,_.useRef)(null),[i,a]=(0,_.useState)(0),[o,s]=(0,_.useState)(0),c=e===`dark`,l=[{id:`multipdf-chatbot`,category:`Production RAG & Vector Engine`,icon:ae,title:`Advanced Multi-PDF Chatbot`,titleHighlight:`Groq Llama 3.1 RAG.`,url:`https://sanket-kakad-multi-pdf-advanced-rag.vercel.app/`,githubUrl:`https://github.com/sanketskakad/multipdf-chatbot`,videoUrl:`https://www.youtube.com/embed/bh_6XDT8_zY?autoplay=1&loop=1&playlist=bh_6XDT8_zY&mute=1&controls=0&playsinline=1&rel=0`,annotationType:`highlight`,annotationColor:c?`rgba(0, 113, 227, 0.4)`:`rgba(0, 113, 227, 0.25)`,desc:`Sub-second, production-grade RAG engine with pre-cached vector indexing, page-aware chunking, hybrid BM25 + dense retrieval, FlashRank re-ranking, and Groq Llama 3.1 8B instant inference.`,stat:`Live on Vercel`,statDesc:`Production Multi-PDF RAG`,tech:[`Python`,`FastAPI`,`Groq Llama 3.1`,`ChromaDB`,`BM25 RAG`,`React`,`Vercel`],gradient:c?`from-[#1c1c1e] via-[#161617] to-[#000000]`:`from-[#ffffff] via-[#f5f5f7] to-[#e8e8ed]`,borderColor:c?`border-[#0071e3]/40`:`border-[#0071e3]/30`,mediaType:`video`},{id:`agentic-travel-booking`,category:`Multi-Agent Autonomous AI App`,icon:M,title:`Agentic Travel Booking`,titleHighlight:`Multi-Agent System.`,url:`https://sanket-kakad-agentic-travel-booking.vercel.app/`,githubUrl:`https://github.com/sanketskakad/agentic-travel-booking-app`,videoUrl:`https://www.youtube.com/embed/Jc2GhSvd-_w?autoplay=1&loop=1&playlist=Jc2GhSvd-_w&mute=1&controls=0&playsinline=1&rel=0`,annotationType:`highlight`,annotationColor:c?`rgba(0, 113, 227, 0.4)`:`rgba(0, 113, 227, 0.25)`,desc:`Autonomous multi-agent travel orchestration system. Executes flight, hotel, and activity search, generates customized itineraries, and orchestrates live booking workflows in real-time.`,stat:`Live on Render`,statDesc:`Production Multi-Agent App`,tech:[`Python`,`FastAPI`,`React`,`Multi-Agent Workflows`,`Docker`,`Render`],gradient:c?`from-[#1c1c1e] via-[#161617] to-[#000000]`:`from-[#ffffff] via-[#f5f5f7] to-[#e8e8ed]`,borderColor:c?`border-[#0071e3]/40`:`border-[#0071e3]/30`,mediaType:`video`},{id:`usa-constitution-gpt`,category:`Generative AI & Hugging Face Space`,icon:ne,title:`USA Constitution GPT`,titleHighlight:`Legal RAG Engine.`,url:`https://huggingface.co/spaces/SANKETKAKAD/usa-constitution-gpt`,githubUrl:null,annotationType:`highlight`,annotationColor:c?`rgba(0, 113, 227, 0.4)`:`rgba(0, 113, 227, 0.25)`,desc:`Conversational AI assistant trained for US Constitutional law querying, precise article citation extraction, and legal document Q&A.`,stat:`Hugging Face Space`,statDesc:`Live Model Deployment`,tech:[`Hugging Face`,`Python`,`LangChain`,`Gradio`],gradient:c?`from-[#1c1c1e] via-[#161617] to-[#000000]`:`from-[#ffffff] via-[#f5f5f7] to-[#e8e8ed]`,borderColor:c?`border-[#0071e3]/40`:`border-[#0071e3]/30`,mediaType:`canvas`}];bg(()=>{if(!t.current||!n.current)return;let e=l.length,r=-((e-1)/e)*100,i=mg.to(n.current,{xPercent:r,ease:`none`,scrollTrigger:{trigger:t.current,pin:!0,scrub:1,start:`top top`,end:`+=${window.innerHeight*(e-1)}`,onUpdate:t=>{let n=t.progress;s(Math.round(n*100));let r=Math.min(Math.floor(n*e),e-1);a(r)}}});return()=>{i.scrollTrigger&&i.scrollTrigger.kill()}},{scope:t,dependencies:[l.length]}),(0,_.useEffect)(()=>{let e=r.current;if(!e)return;let t=Xb.canvas(e);e.getContext(`2d`).clearRect(0,0,e.width,e.height);let n=c?`rgba(0, 113, 227, 0.4)`:`rgba(0, 113, 227, 0.25)`,i=c?`#1c1c1e`:`#ffffff`;t.rectangle(20,20,320,200,{fill:i,roughness:1.5,stroke:n}),t.circle(180,120,90,{fill:n,fillStyle:`hachure`,stroke:n}),t.line(60,60,180,120,{stroke:n,strokeWidth:2}),t.line(300,60,180,120,{stroke:n,strokeWidth:2})},[c,i]);let u=e=>{if(!t.current)return;let n=l.length,r=window.innerHeight*(n-1),i=t.current.offsetTop+e/(n-1)*r;window.scrollTo({top:i,behavior:`smooth`})};return(0,z.jsx)(`section`,{ref:t,id:`projects`,className:`relative transition-colors duration-500 overflow-hidden ${c?`bg-[#000000] text-[#f5f5f7]`:`bg-[#f5f5f7] text-[#1d1d1f]`}`,children:(0,z.jsxs)(`div`,{className:`h-screen sticky top-0 flex flex-col justify-between py-12 overflow-hidden`,children:[(0,z.jsxs)(`div`,{className:`max-w-6xl mx-auto px-6 w-full flex items-center justify-between z-20`,children:[(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`span`,{className:`text-xs font-mono text-[#0071e3] uppercase tracking-widest block mb-1`,children:`Featured Live Projects`}),(0,z.jsxs)(`h2`,{className:`text-2xl sm:text-4xl font-extrabold tracking-tight ${c?`text-[#f5f5f7]`:`text-[#1d1d1f]`}`,children:[`Production AI Architecture.`,` `,(0,z.jsx)(`span`,{className:`font-light text-base sm:text-xl ml-2 ${c?`text-[#86868b]`:`text-[#6e6e73]`}`,children:`Scroll to explore.`})]})]}),(0,z.jsx)(`div`,{className:`hidden sm:flex items-center gap-3 px-4 py-2 rounded-full border transition-colors ${c?`bg-[#161617]/90 border-[#2c2c2e]`:`bg-[#ffffff]/90 border-[#d2d2d7] shadow-sm`}`,children:l.map((e,t)=>(0,z.jsx)(`button`,{onClick:()=>u(t),className:`transition-all duration-300 rounded-full cursor-pointer ${i===t?`w-8 h-2.5 bg-[#0071e3] shadow-md shadow-[#0071e3]/40`:c?`w-2.5 h-2.5 bg-white/20 hover:bg-white/40`:`w-2.5 h-2.5 bg-black/20 hover:bg-black/40`}`,title:`Jump to Project ${t+1}: ${e.title}`},e.id))})]}),(0,z.jsx)(`div`,{ref:n,style:{width:`${l.length*100}%`},className:`flex flex-nowrap h-full items-center my-auto z-10 will-change-transform`,children:l.map((e,t)=>{let n=e.icon;return(0,z.jsx)(`div`,{className:`w-screen shrink-0 px-6 sm:px-12 max-w-6xl mx-auto`,children:(0,z.jsxs)(`div`,{className:`apple-glass-card rounded-3xl p-8 md:p-12 border ${e.borderColor} bg-gradient-to-br ${e.gradient} grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[420px] shadow-2xl relative overflow-hidden`,children:[(0,z.jsxs)(`div`,{className:`lg:col-span-7 flex flex-col justify-between h-full`,children:[(0,z.jsxs)(`div`,{children:[(0,z.jsxs)(`div`,{className:`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 border ${c?`bg-[#2c2c2e]/60 border-white/10 text-[#f5f5f7]`:`bg-[#ffffff]/80 border-slate-300 text-[#1d1d1f] shadow-sm`}`,children:[(0,z.jsx)(n,{className:`w-3.5 h-3.5 text-[#0071e3]`}),(0,z.jsxs)(`span`,{children:[`Project `,t+1,` of `,l.length,` • `,e.category]})]}),(0,z.jsxs)(`h3`,{className:`text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] mb-6 ${c?`text-[#f5f5f7]`:`text-[#1d1d1f]`}`,children:[e.title,` `,(0,z.jsx)(Pe,{type:e.annotationType,color:e.annotationColor,show:!0,strokeWidth:3,children:(0,z.jsx)(`span`,{className:`px-1 ${c?`text-[#f5f5f7]`:`text-[#1d1d1f]`}`,children:e.titleHighlight})})]}),(0,z.jsx)(`p`,{className:`text-base md:text-lg font-light leading-relaxed mb-6 max-w-xl ${c?`text-[#86868b]`:`text-[#6e6e73]`}`,children:e.desc}),(0,z.jsx)(`div`,{className:`flex flex-wrap gap-2 mb-8`,children:e.tech.map((e,t)=>(0,z.jsx)(`span`,{className:`px-3 py-1 rounded-full text-xs font-mono font-semibold border ${c?`bg-[#2c2c2e] border-white/10 text-[#2997ff]`:`bg-[#ffffff] border-[#d2d2d7] text-[#0071e3]`}`,children:e},t))})]}),(0,z.jsxs)(`div`,{className:`pt-6 border-t flex flex-wrap items-center justify-between gap-4 ${c?`border-[#2c2c2e]`:`border-[#d2d2d7]`}`,children:[(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`span`,{className:`block text-2xl font-extrabold font-mono tracking-tight ${c?`text-[#f5f5f7]`:`text-[#1d1d1f]`}`,children:e.stat}),(0,z.jsx)(`span`,{className:`text-xs font-medium ${c?`text-[#86868b]`:`text-[#6e6e73]`}`,children:e.statDesc})]}),(0,z.jsxs)(`div`,{className:`flex items-center gap-3`,children:[e.githubUrl&&(0,z.jsxs)(`a`,{href:e.githubUrl,target:`_blank`,rel:`noopener noreferrer`,className:`px-4 py-2.5 rounded-full text-xs font-semibold transition-all border flex items-center gap-1.5 cursor-pointer active:scale-95 ${c?`bg-[#2c2c2e] hover:bg-[#3a3a3c] text-[#f5f5f7] border-white/10 hover:border-white/20`:`bg-white hover:bg-slate-100 text-[#1d1d1f] border-slate-300 shadow-sm`}`,children:[(0,z.jsx)(Zb,{className:`w-4 h-4 text-[#0071e3]`}),(0,z.jsx)(`span`,{children:`GitHub`})]}),(0,z.jsxs)(`a`,{href:e.url,target:`_blank`,rel:`noopener noreferrer`,className:`px-5 py-2.5 rounded-full text-xs font-semibold transition-all border flex items-center gap-1.5 cursor-pointer active:scale-95 bg-[#0071e3] hover:bg-[#0077ed] text-white border-[#0071e3] shadow-md shadow-[#0071e3]/30`,children:[(0,z.jsx)(`span`,{children:e.githubUrl?`Open Live App`:`Open Live Space`}),(0,z.jsx)(k,{className:`w-4 h-4 text-white`})]})]})]})]}),(0,z.jsx)(`div`,{className:`lg:col-span-5 flex flex-col items-center justify-center`,children:e.mediaType===`video`?(0,z.jsxs)(`div`,{className:`w-full aspect-video rounded-2xl border relative overflow-hidden shadow-inner ${c?`bg-black border-[#2c2c2e]`:`bg-slate-900 border-[#d2d2d7]`}`,children:[(0,z.jsx)(`iframe`,{src:e.videoUrl,title:`${e.title} Video Preview`,className:`w-full h-full border-0 object-cover`,allow:`accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share`,allowFullScreen:!0}),(0,z.jsxs)(`div`,{className:`absolute top-3 right-3 text-[10px] font-mono px-2.5 py-1 rounded-full border flex items-center gap-1.5 backdrop-blur-md ${c?`text-[#f5f5f7] bg-[#161617]/80 border-white/10`:`text-[#1d1d1f] bg-[#ffffff]/80 border-slate-300 shadow-sm`}`,children:[(0,z.jsxs)(`span`,{className:`relative flex h-2 w-2`,children:[(0,z.jsx)(`span`,{className:`animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75`}),(0,z.jsx)(`span`,{className:`relative inline-flex rounded-full h-2 w-2 bg-red-500`})]}),(0,z.jsx)(`span`,{className:`font-semibold tracking-wide`,children:`Live Demo Video`})]})]}):(0,z.jsxs)(`div`,{className:`w-full rounded-2xl border p-4 flex items-center justify-center min-h-[240px] relative overflow-hidden shadow-inner ${c?`bg-[#000000] border-[#2c2c2e]`:`bg-[#ffffff] border-[#d2d2d7]`}`,children:[(0,z.jsx)(`canvas`,{ref:r,width:360,height:240,className:`w-full h-[240px] object-contain`}),(0,z.jsx)(`div`,{className:`absolute bottom-3 right-3 text-[10px] font-mono px-2 py-0.5 rounded border ${c?`text-[#86868b] bg-[#161617] border-[#2c2c2e]`:`text-[#6e6e73] bg-[#f5f5f7] border-[#d2d2d7]`}`,children:`Hugging Face Vector Architecture`})]})})]})},e.id)})}),(0,z.jsxs)(`div`,{className:`max-w-6xl mx-auto px-6 w-full flex items-center justify-between z-20`,children:[(0,z.jsxs)(`div`,{className:`flex items-center gap-2 text-xs font-mono ${c?`text-[#86868b]`:`text-[#6e6e73]`}`,children:[(0,z.jsx)(`span`,{children:`Scroll Scrub Progress:`}),(0,z.jsx)(`div`,{className:`w-32 h-1.5 rounded-full overflow-hidden ${c?`bg-[#2c2c2e]`:`bg-[#e8e8ed]`}`,children:(0,z.jsx)(`div`,{className:`h-full bg-[#0071e3] transition-all duration-75`,style:{width:`${o}%`}})}),(0,z.jsxs)(`span`,{className:`font-bold ${c?`text-[#f5f5f7]`:`text-[#1d1d1f]`}`,children:[o,`%`]})]}),(0,z.jsx)(`div`,{className:`flex items-center gap-2 text-xs font-mono ${c?`text-[#86868b]`:`text-[#6e6e73]`}`,children:(0,z.jsxs)(`span`,{children:[`Project `,i+1,` / `,l.length]})})]})]})})}var $b=`---
id: langchain-deep-dive
title: "LangChain Deep Dive: Architecture, Core Concepts, and How It Works"
category: Generative AI
readTime: 10 min read
date: Jun 2025
author: Sanket Kakad
excerpt: A deep dive into LangChain architecture, core components, execution flow, chains, agents, tools, memory, retrievers, and how these building blocks work together to develop production-ready LLM applications.
---

## 1. What is LangChain?

**LangChain is a framework for building applications around Large Language Models (LLMs).**

An LLM by itself mainly does this:

\`\`\`text
Input
  ↓
LLM
  ↓
Output
\`\`\`

For real applications, we usually need much more:

\`\`\`text
User
  ↓
Application
  ↓
LLM
  ├── Retrieve documents
  ├── Call APIs
  ├── Query databases
  ├── Execute tools
  ├── Produce structured output
  ├── Maintain conversation state
  └── Make decisions
\`\`\`

LangChain provides abstractions and integrations for building these systems.

The important thing to understand is:

> **LangChain is not an LLM.**

It is an application framework that helps you connect LLMs with data, tools, retrieval systems, and application logic.

---

# 2. Why Do We Need LangChain?

Suppose you want to build a simple AI assistant.

Without a framework, you might manually implement:

\`\`\`text
OpenAI API
    ↓
Prompt construction
    ↓
JSON parsing
    ↓
Tool calling
    ↓
Database access
    ↓
Document retrieval
    ↓
Conversation state
    ↓
Error handling
\`\`\`

The application quickly becomes complicated.

LangChain provides reusable abstractions around many of these components.

Conceptually:

\`\`\`text
                    LangChain
                       |
       +---------------+---------------+
       |               |               |
       v               v               v
     Models         Retrieval        Tools
       |               |               |
       v               v               v
   OpenAI/etc.     Vector DBs       APIs/DBs
\`\`\`

---

# 3. The Most Important LangChain Mental Model

Do not start by memorizing LangChain classes.

Start with this:

\`\`\`text
                    Application
                         |
                         v
                       Model
                         |
             +-----------+-----------+
             |           |           |
             v           v           v
          Prompt      Tools      Retrieval
             |           |           |
             +-----------+-----------+
                         |
                         v
                       Output
\`\`\`

LangChain gives you building blocks for these pieces.

---

# 4. LangChain Is a Layer Between Your Application and Providers

Your application might use:

\`\`\`text
OpenAI
Anthropic
Google
Azure OpenAI
Ollama
AWS Bedrock
\`\`\`

Instead of tightly coupling every part of your application to one provider, LangChain provides common interfaces.

Conceptually:

\`\`\`text
                    Your Application
                           |
                           v
                       LangChain
                           |
          +----------------+----------------+
          |                |                |
          v                v                v
       OpenAI          Anthropic          Gemini
\`\`\`

This does not mean every provider behaves identically.

Provider-specific capabilities and differences still matter.

The abstraction mainly makes common application patterns easier to build.

---

# 5. Installing LangChain

For Python projects, you will commonly install LangChain packages according to what functionality you need.

For example:

\`\`\`bash
uv add langchain
\`\`\`

For a specific model provider, you may also need the provider integration package.

For example:

\`\`\`bash
uv add langchain-openai
\`\`\`

For embeddings:

\`\`\`bash
uv add langchain-openai
\`\`\`

For vector stores or other integrations, the required package depends on the integration.

The important principle is:

> LangChain's ecosystem is modular. You generally install the integrations you actually use.

---

# 6. The Model Abstraction

One of the first things you encounter is the model.

Conceptually:

\`\`\`python
from langchain_openai import ChatOpenAI

model = ChatOpenAI(
    model="gpt-4.1-mini"
)
\`\`\`

You can then invoke it:

\`\`\`python
response = model.invoke(
    "Explain Kubernetes in simple terms"
)

print(response.content)
\`\`\`

The architecture is:

\`\`\`text
Your Python Code
      |
      v
ChatOpenAI
      |
      v
OpenAI API
      |
      v
LLM
      |
      v
AI Response
\`\`\`

---

# 7. What Is a Chat Model?

Modern LLM applications generally work with messages rather than only one text string.

The basic message types are:

\`\`\`text
SystemMessage
HumanMessage
AIMessage
ToolMessage
\`\`\`

For example:

\`\`\`python
from langchain_core.messages import (
    SystemMessage,
    HumanMessage
)

messages = [
    SystemMessage(
        "You are a helpful software engineer."
    ),
    HumanMessage(
        "Explain Kubernetes."
    )
]

response = model.invoke(messages)
\`\`\`

Conceptually:

\`\`\`text
System Message
      +
Human Message
      |
      v
     LLM
      |
      v
AI Message
\`\`\`

---

# 8. System Message

The system message defines high-level behavior.

Example:

\`\`\`text
You are an experienced Java engineer.
Explain concepts using practical examples.
\`\`\`

It establishes instructions for the model.

---

# 9. Human Message

This represents the user's input.

\`\`\`text
How does ConcurrentHashMap work?
\`\`\`

---

# 10. AI Message

This is the model's response.

\`\`\`text
ConcurrentHashMap provides thread-safe access
to a hash table without synchronizing the entire map.
\`\`\`

---

# 11. Tool Message

When an LLM calls a tool, the tool result can be represented as a tool message.

For example:

\`\`\`text
AI:
Call get_weather("Singapore")

Tool:
31°C, Cloudy

AI:
The current temperature is 31°C.
\`\`\`

The interaction becomes:

\`\`\`text
Human
  ↓
AI
  ↓
Tool
  ↓
AI
\`\`\`

This pattern is fundamental to agentic applications.

---

# 12. Prompt Templates

One of LangChain's most useful abstractions is the prompt template.

Instead of writing:

\`\`\`python
prompt = f"""
Explain {topic} for a {experience_level} developer.
"""
\`\`\`

you can define a reusable prompt.

For example:

\`\`\`python
from langchain_core.prompts import ChatPromptTemplate

prompt = ChatPromptTemplate.from_messages([
    (
        "system",
        "You are an experienced software engineer."
    ),
    (
        "human",
        "Explain {topic} for a {level} developer."
    )
])
\`\`\`

Then:

\`\`\`python
messages = prompt.invoke({
    "topic": "Kubernetes",
    "level": "beginner"
})
\`\`\`

The result is a structured message sequence.

---

# 13. Why Prompt Templates Matter

Suppose you have:

\`\`\`text
Question 1
Question 2
Question 3
\`\`\`

You don't want to manually build prompts every time.

Instead:

\`\`\`text
Prompt Template
      |
      +---- topic
      +---- level
      +---- context
      +---- question
\`\`\`

This makes prompts reusable and easier to maintain.

---

# 14. Chains

Historically, one of LangChain's central concepts was the **chain**.

A chain connects multiple operations:

\`\`\`text
Input
  ↓
Prompt
  ↓
LLM
  ↓
Parser
  ↓
Output
\`\`\`

For example:

\`\`\`text
Question
   ↓
Prompt Template
   ↓
LLM
   ↓
Output Parser
   ↓
Final Answer
\`\`\`

The idea is simple:

> The output of one component becomes the input of another component.

---

# 15. LCEL

LangChain introduced **LangChain Expression Language**, commonly called **LCEL**, for composing components.

A simple chain can look like:

\`\`\`python
chain = prompt | model
\`\`\`

Then:

\`\`\`python
response = chain.invoke({
    "topic": "Docker"
})
\`\`\`

The pipe operator means:

\`\`\`text
prompt
   |
   v
model
\`\`\`

You can continue:

\`\`\`python
chain = prompt | model | parser
\`\`\`

Conceptually:

\`\`\`text
Prompt
  |
  v
Model
  |
  v
Parser
  |
  v
Output
\`\`\`

---

# 16. Why the Pipe Operator Is Important

Consider:

\`\`\`python
chain = prompt | model | parser
\`\`\`

Instead of manually writing:

\`\`\`python
messages = prompt.invoke(data)

response = model.invoke(messages)

result = parser.invoke(response)
\`\`\`

you define the flow declaratively.

This makes composition easier.

---

# 17. Runnable

Many LangChain components implement the **Runnable** interface.

This is one of the most important concepts for understanding LangChain internally.

A Runnable represents something that can process an input and produce an output.

Conceptually:

\`\`\`text
Runnable[A, B]

A
 ↓
Runnable
 ↓
B
\`\`\`

For example:

\`\`\`text
Prompt:
dict → messages

Model:
messages → AIMessage

Parser:
AIMessage → string
\`\`\`

Therefore:

\`\`\`text
dict
 ↓
Prompt
 ↓
messages
 ↓
Model
 ↓
AIMessage
 ↓
Parser
 ↓
string
\`\`\`

This composability is what makes:

\`\`\`python
prompt | model | parser
\`\`\`

possible.

---

# 18. invoke()

The simplest execution method is:

\`\`\`python
result = chain.invoke(input)
\`\`\`

Conceptually:

\`\`\`text
Input
  ↓
Chain
  ↓
Output
\`\`\`

---

# 19. batch()

If you need to process multiple inputs:

\`\`\`python
results = chain.batch([
    {"topic": "Docker"},
    {"topic": "Kubernetes"},
    {"topic": "Kafka"}
])
\`\`\`

Conceptually:

\`\`\`text
Input 1 ─┐
Input 2 ─┼──> Chain
Input 3 ─┘
            ↓
        Results
\`\`\`

Batching can be useful for workloads where multiple independent requests need processing.

---

# 20. Streaming

LLM responses can be streamed.

Conceptually:

\`\`\`python
for chunk in chain.stream(input):
    print(chunk)
\`\`\`

Instead of waiting:

\`\`\`text
Request
   |
   | 5 seconds
   v
Complete response
\`\`\`

the user sees:

\`\`\`text
Request
   |
   +--> "Kubernetes"
   +--> "is"
   +--> "an"
   +--> "orchestration"
   +--> "platform..."
\`\`\`

Streaming improves perceived responsiveness.

---

# 21. Async Execution

Python applications often need asynchronous execution.

LangChain supports asynchronous invocation patterns such as:

\`\`\`python
result = await chain.ainvoke(input)
\`\`\`

and asynchronous streaming:

\`\`\`python
async for chunk in chain.astream(input):
    ...
\`\`\`

This matters for production APIs where you want to handle multiple concurrent requests efficiently.

---

# 22. Output Parsers

LLMs normally return natural-language responses.

But applications often need structured data.

For example:

\`\`\`text
{
    "name": "John",
    "age": 35
}
\`\`\`

Instead of manually parsing strings, LangChain provides structured output mechanisms.

---

# 23. Structured Output

Modern LangChain applications commonly use the model's structured output capabilities directly.

For example:

\`\`\`python
from pydantic import BaseModel


class Movie(BaseModel):
    title: str
    year: int
    genre: str


structured_model = model.with_structured_output(Movie)

result = structured_model.invoke(
    "Tell me about the movie Inception"
)
\`\`\`

Now the application receives structured data corresponding to the schema.

Conceptually:

\`\`\`text
Natural Language
       |
       v
      LLM
       |
       v
Structured Schema
       |
       v
Pydantic Object
\`\`\`

This is much safer than asking the model:

\`\`\`text
"Return JSON"
\`\`\`

and manually trusting the response.

---

# 24. Why Pydantic Is Important

Pydantic provides validation.

For example:

\`\`\`python
class User(BaseModel):
    name: str
    age: int
\`\`\`

The application expects:

\`\`\`text
name → string
age  → integer
\`\`\`

This is especially useful when LLM output enters business logic.

Instead of:

\`\`\`text
LLM
 ↓
Unvalidated text
 ↓
Business logic
\`\`\`

you want:

\`\`\`text
LLM
 ↓
Structured output
 ↓
Validation
 ↓
Business logic
\`\`\`

---

# 25. Embeddings

LangChain also provides abstractions around embedding models.

For example:

\`\`\`python
from langchain_openai import OpenAIEmbeddings

embeddings = OpenAIEmbeddings(
    model="text-embedding-3-small"
)
\`\`\`

You can create an embedding:

\`\`\`python
vector = embeddings.embed_query(
    "How many vacation days do I get?"
)
\`\`\`

Conceptually:

\`\`\`text
Text
 ↓
Embedding Model
 ↓
Vector
\`\`\`

This is one of the building blocks of RAG.

---

# 26. Document

LangChain represents documents using a document abstraction.

Conceptually:

\`\`\`python
Document(
    page_content="Employees receive 28 days of annual leave.",
    metadata={
        "source": "leave-policy.pdf",
        "page": 12
    }
)
\`\`\`

There are two important parts:

\`\`\`text
page_content
metadata
\`\`\`

---

# 27. Document Loaders

LangChain has integrations for loading different sources.

Conceptually:

\`\`\`text
PDF
 ↓
PDF Loader
 ↓
Documents
\`\`\`

Other sources can include:

\`\`\`text
Web pages
CSV
JSON
Markdown
Word documents
Cloud storage
Databases
\`\`\`

The exact loader depends on the source and integration package.

---

# 28. Text Splitters

After loading documents, we normally split them.

Conceptually:

\`\`\`text
Large Document
      |
      v
Text Splitter
      |
      +---- Chunk 1
      +---- Chunk 2
      +---- Chunk 3
      +---- Chunk 4
\`\`\`

A splitter can use:

\`\`\`text
Character boundaries
Token boundaries
Recursive separators
Markdown structure
Code structure
\`\`\`

For general text, recursive splitting is often a reasonable starting point.

But document-aware splitting can be better for structured sources.

---

# 29. Vector Stores

LangChain provides integrations for vector stores.

Conceptually:

\`\`\`text
Documents
    |
    v
Embeddings
    |
    v
Vector Store
\`\`\`

The vector store can be:

\`\`\`text
pgvector
Chroma
Pinecone
Qdrant
Weaviate
Milvus
FAISS
\`\`\`

The exact choice depends on your application requirements.

---

# 30. Retriever

A retriever provides a standard way to retrieve relevant documents.

Conceptually:

\`\`\`text
Question
   |
   v
Retriever
   |
   v
Relevant Documents
\`\`\`

This abstraction is extremely important in RAG.

You don't necessarily care whether retrieval internally uses:

\`\`\`text
Vector Search
Keyword Search
Hybrid Search
Database Search
Custom Search
\`\`\`

The application can interact with the retriever interface.

---

# 31. Retriever Example

Conceptually:

\`\`\`python
retriever = vector_store.as_retriever(
    search_kwargs={
        "k": 4
    }
)
\`\`\`

Then:

\`\`\`python
documents = retriever.invoke(
    "How many annual leave days do employees receive?"
)
\`\`\`

The result is something like:

\`\`\`text
[
    Document(...),
    Document(...),
    Document(...),
    Document(...)
]
\`\`\`

---

# 32. Basic RAG Chain

Now we can combine:

\`\`\`text
Retriever
    ↓
Documents
    ↓
Prompt
    ↓
LLM
    ↓
Answer
\`\`\`

For example:

\`\`\`python
documents = retriever.invoke(question)

context = "\\n\\n".join(
    doc.page_content
    for doc in documents
)

response = model.invoke(
    prompt.invoke({
        "context": context,
        "question": question
    })
)
\`\`\`

This is the fundamental RAG pattern.

---

# 33. RAG with LCEL

The architecture can be represented as:

\`\`\`text
                 Question
                    |
          +---------+---------+
          |                   |
          v                   v
      Retriever          Question
          |
          v
       Context
          |
          +---------+
                    |
                    v
              Prompt Template
                    |
                    v
                   LLM
                    |
                    v
                 Parser
                    |
                    v
                 Answer
\`\`\`

In LangChain, these components can be composed into a runnable pipeline.

---

# 34. Tools

Another major LangChain capability is tool calling.

A tool is a function the LLM can request your application to execute.

For example:

\`\`\`python
def get_weather(city: str) -> str:
    ...
\`\`\`

You can expose it as a tool.

Conceptually:

\`\`\`text
LLM
 |
 | "I need weather information"
 v
Tool
 |
 v
Weather API
 |
 v
Result
 |
 v
LLM
\`\`\`

---

# 35. Why Tools Matter

An LLM cannot directly:

\`\`\`text
Access your database
Call your internal API
Read your filesystem
Send an email
Execute business logic
\`\`\`

unless your application gives it a controlled mechanism to do so.

Tools provide that mechanism.

---

# 36. Tool Calling Flow

Suppose the user asks:

\`\`\`text
What is the weather in Singapore?
\`\`\`

The model might decide:

\`\`\`text
I should call get_weather.
\`\`\`

The application executes:

\`\`\`python
get_weather("Singapore")
\`\`\`

The result:

\`\`\`text
31°C, cloudy
\`\`\`

is sent back to the model.

Then the model produces:

\`\`\`text
Singapore is currently 31°C and cloudy.
\`\`\`

The complete flow is:

\`\`\`text
User
 ↓
LLM
 ↓
Tool Call
 ↓
Application
 ↓
Tool
 ↓
Result
 ↓
LLM
 ↓
Final Answer
\`\`\`

---

# 37. Tools vs Functions

A normal Python function:

\`\`\`python
def get_weather(city):
    ...
\`\`\`

is simply code.

A tool additionally provides information that allows the model/application framework to understand:

\`\`\`text
Tool name
Description
Arguments
Argument schema
\`\`\`

For example:

\`\`\`text
Name:
get_weather

Description:
Get current weather for a city.

Arguments:
city: string
\`\`\`

This information helps the model decide when the tool is appropriate.

---

# 38. Agents

An agent is different from a simple chain.

A chain has a predetermined flow:

\`\`\`text
Prompt
  ↓
LLM
  ↓
Parser
  ↓
Output
\`\`\`

An agent can decide what to do next.

For example:

\`\`\`text
User Question
      |
      v
    Agent
      |
      +---- Search documents
      |
      +---- Query database
      |
      +---- Call weather API
      |
      +---- Call another tool
      |
      v
   Final Answer
\`\`\`

The exact execution path can depend on the request.

---

# 39. Chain vs Agent

This distinction is critical.

## Chain

You define the workflow.

\`\`\`text
A → B → C → D
\`\`\`

Example:

\`\`\`text
Question
 ↓
Retriever
 ↓
Prompt
 ↓
LLM
\`\`\`

## Agent

The model can choose the next action.

\`\`\`text
Question
 ↓
Agent
 ↓
Choose Tool
 ↓
Observe Result
 ↓
Choose Next Action
 ↓
Final Answer
\`\`\`

Therefore:

> Use a chain when the workflow is known. Use an agent when the workflow needs dynamic decisions.

---

# 40. Why Agents Can Be More Expensive

A chain might require:

\`\`\`text
1 LLM call
\`\`\`

An agent might perform:

\`\`\`text
LLM call
 ↓
Tool
 ↓
LLM call
 ↓
Tool
 ↓
LLM call
 ↓
Answer
\`\`\`

Therefore agents can introduce:

\`\`\`text
Higher latency
Higher token usage
Higher cost
More failure modes
\`\`\`

Don't use an agent simply because it is available.

Use deterministic workflows where possible.

---

# 41. LangGraph and LangChain

This is an important modern distinction.

**LangChain** provides many components for working with models, tools, retrieval, prompts, and structured output.

**LangGraph** is designed for building more complex stateful agent workflows.

Conceptually:

\`\`\`text
LangChain
   |
   +---- Models
   +---- Prompts
   +---- Tools
   +---- Retrievers
   +---- Embeddings
   +---- Structured Output
\`\`\`

While:

\`\`\`text
LangGraph
   |
   +---- State
   +---- Nodes
   +---- Edges
   +---- Loops
   +---- Human approval
   +---- Checkpoints
   +---- Durable workflows
\`\`\`

They are complementary.

---

# 42. LangChain + LangGraph

A production agent might use:

\`\`\`text
                  LangGraph
                     |
          +----------+----------+
          |                     |
          v                     v
     LangChain Model       LangChain Tools
          |                     |
          v                     v
        LLMs                  APIs/DBs
\`\`\`

LangGraph controls the workflow.

LangChain provides many of the components used inside that workflow.

---

# 43. Memory

LLM APIs are generally stateless unless your application sends previous conversation information.

For example:

\`\`\`text
User:
My name is John.

Assistant:
Nice to meet you, John.

User:
What is my name?
\`\`\`

The application needs to provide relevant previous messages or stored state.

Conceptually:

\`\`\`text
Conversation
     |
     v
State / Memory
     |
     v
Prompt
     |
     v
LLM
\`\`\`

Modern applications often treat conversation state as application state rather than relying on a magical "memory" abstraction.

---

# 44. Short-Term Conversation State

Suppose:

\`\`\`text
Message 1:
I am learning Python.

Message 2:
What should I learn next?
\`\`\`

The model needs the previous message to understand:

\`\`\`text
"I"
\`\`\`

refers to the same user.

The application can maintain:

\`\`\`text
messages = [
    HumanMessage(...),
    AIMessage(...),
    HumanMessage(...)
]
\`\`\`

and provide relevant state to the model.

---

# 45. Long-Term Memory

Long-term information can be stored separately.

For example:

\`\`\`text
User Preferences
      |
      v
Database
      |
      v
Retrieve relevant memory
      |
      v
LLM
\`\`\`

This is different from simply keeping the entire conversation history.

---

# 46. Why You Should Not Send Unlimited History

Suppose a user has a conversation with:

\`\`\`text
5,000 messages
\`\`\`

Sending all of them on every request is inefficient.

It can cause:

\`\`\`text
Higher token cost
Higher latency
Context-window pressure
More irrelevant information
\`\`\`

A better architecture might use:

\`\`\`text
Recent messages
+
Conversation summary
+
Relevant long-term memory
\`\`\`

---

# 47. Middleware

Modern LangChain applications may also need middleware around model and tool execution.

Middleware can be used for concerns such as:

\`\`\`text
Logging
Retries
Guardrails
Human approval
Rate limiting
Custom routing
Request transformation
Observability
\`\`\`

Conceptually:

\`\`\`text
Request
   |
   v
Middleware
   |
   v
Model / Tool
   |
   v
Middleware
   |
   v
Response
\`\`\`

This is similar to middleware concepts in web frameworks.

---

# 48. Guardrails

LLMs are probabilistic systems.

Your application should not blindly trust every output.

For example:

\`\`\`text
User
 ↓
LLM
 ↓
Tool
\`\`\`

Before executing a dangerous tool, you may want:

\`\`\`text
LLM
 ↓
Validation
 ↓
Authorization
 ↓
Human Approval
 ↓
Tool
\`\`\`

For example, an agent may be allowed to:

\`\`\`text
Read customer information
\`\`\`

but not automatically:

\`\`\`text
Delete customer information
\`\`\`

without approval.

---

# 49. Error Handling

LLM applications can fail for many reasons:

\`\`\`text
API timeout
Rate limit
Malformed tool arguments
Invalid structured output
Network error
Retriever failure
Vector database failure
\`\`\`

A production application should handle these explicitly.

For example:

\`\`\`text
LLM
 |
 +---- success → continue
 |
 +---- timeout → retry
 |
 +---- invalid output → repair/retry
 |
 +---- tool failure → fallback
\`\`\`

Do not assume LLM calls always succeed.

---

# 50. Retry Strategies

A retry may be appropriate for transient failures:

\`\`\`text
Request
 ↓
API timeout
 ↓
Retry
 ↓
Success
\`\`\`

But blindly retrying everything is dangerous.

For example:

\`\`\`text
Invalid authentication
\`\`\`

should not usually be retried repeatedly.

Production systems distinguish:

\`\`\`text
Transient failure
\`\`\`

from:

\`\`\`text
Permanent failure
\`\`\`

---

# 51. Observability

LLM applications need more than traditional application logs.

You want to understand:

\`\`\`text
What question did the user ask?

Which prompt was sent?

Which documents were retrieved?

Which tools were called?

How many tokens were used?

How long did each step take?

What did the model return?

Why did the agent choose a tool?
\`\`\`

Conceptually:

\`\`\`text
Request
  |
  +-- Retriever: 120ms
  |
  +-- Reranker: 80ms
  |
  +-- LLM: 1.2s
  |
  +-- Tool: 300ms
  |
  +-- LLM: 900ms
  |
  v
Response
\`\`\`

Tracing is extremely valuable when debugging agentic systems.

---

# 52. LangSmith

LangSmith is part of the LangChain ecosystem for observability and evaluation.

It can help inspect application execution.

Conceptually:

\`\`\`text
Application
    |
    v
LangChain
    |
    v
Tracing
    |
    v
LangSmith
\`\`\`

You can inspect things such as:

\`\`\`text
Prompt
Model call
Tool call
Retriever results
Latency
Token usage
Errors
\`\`\`

This becomes especially valuable once your application contains multiple steps.

---

# 53. A Complete RAG Application Using LangChain

A production-style RAG application might look like:

\`\`\`text
                       Documents
                           |
                           v
                    Document Loader
                           |
                           v
                      Text Splitter
                           |
                           v
                       Embeddings
                           |
                           v
                     Vector Store
                           |
                           |
User --------------------> Retriever
  |                          |
  |                          v
  |                    Relevant Chunks
  |                          |
  +--------------------------+
                             |
                             v
                       Prompt Template
                             |
                             v
                            LLM
                             |
                             v
                    Structured Output
                             |
                             v
                          Answer
\`\`\`

LangChain provides abstractions for most of these pieces.

---

# 54. Example RAG Application Structure

A maintainable Python project might look like:

\`\`\`text
rag-app/
│
├── app/
│   ├── api/
│   │   └── routes.py
│   │
│   ├── ingestion/
│   │   ├── loaders.py
│   │   ├── chunking.py
│   │   └── embeddings.py
│   │
│   ├── retrieval/
│   │   ├── retriever.py
│   │   └── reranker.py
│   │
│   ├── llm/
│   │   ├── model.py
│   │   └── prompts.py
│   │
│   ├── tools/
│   │   ├── weather.py
│   │   └── database.py
│   │
│   └── services/
│       └── rag_service.py
│
├── tests/
│
├── pyproject.toml
└── .env
\`\`\`

This is generally easier to maintain than putting everything into one large notebook.

---

# 55. Simple RAG Code

A simplified implementation can look like:

\`\`\`python
from langchain_openai import ChatOpenAI
from langchain_openai import OpenAIEmbeddings
from langchain_core.prompts import ChatPromptTemplate


model = ChatOpenAI(
    model="gpt-4.1-mini"
)

embeddings = OpenAIEmbeddings(
    model="text-embedding-3-small"
)

prompt = ChatPromptTemplate.from_template("""
Answer the question using the context below.

Context:
{context}

Question:
{question}
""")
\`\`\`

Then:

\`\`\`python
def answer_question(question, retriever):

    documents = retriever.invoke(question)

    context = "\\n\\n".join(
        document.page_content
        for document in documents
    )

    messages = prompt.invoke({
        "context": context,
        "question": question
    })

    response = model.invoke(messages)

    return response.content
\`\`\`

The important thing is not the exact code.

The important architecture is:

\`\`\`text
Question
 ↓
Retriever
 ↓
Documents
 ↓
Context
 ↓
Prompt
 ↓
Model
 ↓
Answer
\`\`\`

---

# 56. LangChain's Role in the RAG Article

If you understand RAG without LangChain, you can understand what LangChain is doing.

Without LangChain:

\`\`\`text
Document
 ↓
Your chunking code
 ↓
Your embedding API code
 ↓
Your vector DB code
 ↓
Your prompt code
 ↓
Your LLM API code
\`\`\`

With LangChain:

\`\`\`text
Document
 ↓
LangChain loader
 ↓
LangChain splitter
 ↓
Embedding integration
 ↓
Vector store integration
 ↓
Retriever
 ↓
Prompt
 ↓
Model
\`\`\`

LangChain reduces the amount of integration code you have to write.

---

# 57. What LangChain Does Not Solve Automatically

Using LangChain does not automatically give you:

\`\`\`text
Good chunking
Good retrieval
Good prompts
Low hallucination
Correct architecture
Security
Authorization
Low latency
Low cost
\`\`\`

You still have to design the system properly.

For example:

\`\`\`text
Bad documents
     ↓
Bad chunks
     ↓
Bad retrieval
     ↓
LangChain
     ↓
Bad answer
\`\`\`

LangChain cannot magically fix bad data.

---

# 58. Common Beginner Mistake

A common mistake is learning LangChain by memorizing APIs:

\`\`\`text
What is this class?

What does this method do?

What parameter does this function accept?
\`\`\`

This can make LangChain feel complicated.

Instead, learn the underlying architecture first:

\`\`\`text
LLM
Prompt
Runnable
Retriever
Vector Store
Tool
Agent
State
\`\`\`

Then learn the LangChain API for implementing each concept.

---

# 59. Recommended Learning Order

A good progression is:

\`\`\`text
1. LLM fundamentals
       ↓
2. Prompt templates
       ↓
3. Chat messages
       ↓
4. Models
       ↓
5. Structured output
       ↓
6. Runnable / LCEL
       ↓
7. Documents
       ↓
8. Embeddings
       ↓
9. Vector stores
       ↓
10. Retrievers
       ↓
11. RAG
       ↓
12. Tools
       ↓
13. Tool calling
       ↓
14. Agents
       ↓
15. LangGraph
       ↓
16. State and persistence
       ↓
17. Evaluation
       ↓
18. Production deployment
\`\`\`

This order gives you the concepts before the framework complexity.

---

# 60. LangChain vs LangGraph

A useful mental model is:

\`\`\`text
LangChain
=========
Building blocks

Models
Prompts
Tools
Retrievers
Embeddings
Structured output
\`\`\`

\`\`\`text
LangGraph
=========
Workflow orchestration

State
Nodes
Edges
Loops
Branches
Persistence
Human approval
Agent workflows
\`\`\`

For a simple RAG application:

\`\`\`text
LangChain may be enough.
\`\`\`

For a complex agent:

\`\`\`text
LangChain + LangGraph
\`\`\`

is often a more appropriate architecture.

---

# 61. A Practical Example: Enterprise Knowledge Assistant

Imagine you are building:

\`\`\`text
Enterprise Knowledge Assistant
\`\`\`

The user asks:

\`\`\`text
What is our Kubernetes deployment process?
\`\`\`

The application could execute:

\`\`\`text
User
 ↓
LangChain
 ↓
Retriever
 ↓
Vector Database
 ↓
Top 5 documentation chunks
 ↓
Prompt
 ↓
LLM
 ↓
Answer
\`\`\`

If the user asks:

\`\`\`text
Deploy service payments-service to production.
\`\`\`

Now the problem is different.

You may need:

\`\`\`text
User
 ↓
Agent
 ↓
Check deployment policy
 ↓
Query Kubernetes
 ↓
Check service status
 ↓
Request approval
 ↓
Deploy
 ↓
Verify deployment
 ↓
Report result
\`\`\`

That is where an agentic workflow becomes more appropriate.

---

# 62. The Big Picture

LangChain is easiest to understand when you see it as a collection of layers.

\`\`\`text
                         APPLICATION
                              |
                              v
                       ┌─────────────┐
                       │   Agent /   │
                       │   Workflow  │
                       └──────┬──────┘
                              |
                ┌─────────────┼─────────────┐
                |             |             |
                v             v             v
              Tools        Retrieval      Memory
                |             |             |
                v             v             v
              APIs       Vector Store     State
                |             |             |
                +-------------+-------------+
                              |
                              v
                         Prompt / Chain
                              |
                              v
                             Model
                              |
                              v
                            Output
\`\`\`

---

# 63. The Five Concepts You Should Master First

If your goal is to become good at building GenAI applications, focus heavily on these five concepts:

### 1. Models

Understand:

\`\`\`text
Chat models
Embeddings
Streaming
Structured output
\`\`\`

### 2. Runnables

Understand:

\`\`\`text
Input → Runnable → Output
\`\`\`

and:

\`\`\`python
prompt | model | parser
\`\`\`

### 3. Retrieval

Understand:

\`\`\`text
Documents
 ↓
Chunks
 ↓
Embeddings
 ↓
Vector Store
 ↓
Retriever
\`\`\`

### 4. Tools

Understand:

\`\`\`text
LLM
 ↓
Tool call
 ↓
Application
 ↓
Tool
 ↓
Result
 ↓
LLM
\`\`\`

### 5. Agents / LangGraph

Understand:

\`\`\`text
State
 ↓
Decision
 ↓
Action
 ↓
Observation
 ↓
Decision
\`\`\`

Once these concepts are clear, the LangChain API becomes much easier.

---

# 64. Final Mental Model

Think about LangChain as a set of Lego blocks for LLM applications.

\`\`\`text
                 LangChain
                     |
      +--------------+--------------+
      |              |              |
      v              v              v
    Models         Retrieval       Tools
      |              |              |
      v              v              v
    LLMs         Vector DBs       APIs/DB
      |              |              |
      +--------------+--------------+
                     |
                     v
                  Chains
                     |
                     v
                  Agents
                     |
                     v
                 Application
\`\`\`

And remember the distinction:

\`\`\`text
LLM
=
Reasoning / generation engine
\`\`\`

\`\`\`text
LangChain
=
Application building blocks around LLMs
\`\`\`

\`\`\`text
RAG
=
Retrieve external knowledge and provide it
to the LLM as context
\`\`\`

\`\`\`text
Tool Calling
=
Allow the LLM to request external actions/data
\`\`\`

\`\`\`text
Agent
=
Allow the model to decide which actions to take
\`\`\`

\`\`\`text
LangGraph
=
Build stateful, controllable, multi-step workflows
around models and tools
\`\`\`

The progression is therefore:

\`\`\`text
LLM
 ↓
Prompt + Model
 ↓
Runnable / Chain
 ↓
RAG
 ↓
Tools
 ↓
Agents
 ↓
LangGraph
 ↓
Production AI Application
\`\`\`

That is the conceptual foundation you need before going deep into individual LangChain APIs.
`,ex=`---
id: langgraph-stateful-production-ai-agents
title: "LangGraph Deep Dive: Building Stateful and Production-Grade AI Agents"
category: Generative AI
readTime: 12 min read
date: Sep 2025
author: Sanket Kakad
excerpt: A deep dive into LangGraph for building stateful, controllable, and production-grade AI agents using graphs, nodes, edges, persistence, checkpoints, human-in-the-loop workflows, memory, and fault-tolerant execution.
---

## 1. What is LangGraph?

**LangGraph is a framework for building stateful, multi-step AI workflows and agents.**

The easiest way to understand it is:

> **LangGraph lets you define an AI application as a graph of steps that operate on shared state.**

A traditional application might look like:

\`\`\`text
Request
   ↓
Function A
   ↓
Function B
   ↓
Function C
   ↓
Response
\`\`\`

An AI agent often needs something more dynamic:

\`\`\`text
User
  ↓
Understand request
  ↓
Should I search?
  ├── Yes → Search
  │          ↓
  │       Analyze
  │          ↓
  │       Search again?
  │
  └── No ──────────────┐
                       ↓
                    Generate
                       ↓
                    Response
\`\`\`

The workflow can contain:

* loops
* conditional branches
* tools
* LLM calls
* persistent state
* human approval
* retries
* memory
* multiple agents
* checkpoints

This is where LangGraph becomes useful.

---

# 2. The Core Mental Model

The most important LangGraph concept is:

\`\`\`text
Graph = State + Nodes + Edges
\`\`\`

Think of it like a workflow engine.

\`\`\`text
                Graph
                  |
        +---------+---------+
        |         |         |
      State     Nodes     Edges
\`\`\`

### State

What the application currently knows.

### Nodes

What the application does.

### Edges

What the application should do next.

For example:

\`\`\`text
State
{
    question: "What is AWS Lambda?",
    documents: [],
    answer: null
}
\`\`\`

Nodes:

\`\`\`text
retrieve()
generate()
\`\`\`

Edges:

\`\`\`text
START → retrieve
retrieve → generate
generate → END
\`\`\`

---

# 3. Why Do We Need LangGraph?

Suppose you build an AI assistant.

The simplest implementation might be:

\`\`\`python
answer = llm.invoke(question)
\`\`\`

That's easy.

But now you want:

\`\`\`text
If question requires company information
        ↓
Search company knowledge base
        ↓
If information is insufficient
        ↓
Search web
        ↓
Generate answer
\`\`\`

Now the workflow becomes:

\`\`\`text
Question
   ↓
Classify
   ↓
Company question?
   ├── No → Generate
   │
   └── Yes
        ↓
      Retrieve
        ↓
      Enough?
       ├── Yes → Generate
       └── No  → Web Search
                    ↓
                 Generate
\`\`\`

This is a graph.

LangGraph gives you a structured way to represent and execute it.

---

# 4. LangGraph vs LangChain

These two are related but solve different problems.

## LangChain

LangChain provides building blocks.

\`\`\`text
LLM
Prompt
Retriever
Tool
Parser
Embedding
Vector Store
\`\`\`

Think:

\`\`\`text
LangChain = Components
\`\`\`

## LangGraph

LangGraph orchestrates those components.

\`\`\`text
Node A
   ↓
Node B
   ↓
Condition
   ├── Node C
   └── Node D
\`\`\`

Think:

\`\`\`text
LangGraph = Workflow orchestration
\`\`\`

Together:

\`\`\`text
                 Application
                     |
          +----------+----------+
          |                     |
          v                     v
      LangChain             LangGraph
      Components            Workflow
          |                     |
          +----------+----------+
                     |
                     v
                    LLM
\`\`\`

---

# 5. LangGraph Is a State Machine

A very useful way to understand LangGraph is as a **state machine**.

Imagine an order-processing system:

\`\`\`text
CREATED
   ↓
PAYMENT_PENDING
   ↓
PAID
   ↓
SHIPPED
   ↓
DELIVERED
\`\`\`

The application always has a current state.

AI agents work similarly.

\`\`\`text
START
  ↓
UNDERSTAND_REQUEST
  ↓
SEARCH
  ↓
ANALYZE
  ↓
GENERATE
  ↓
END
\`\`\`

But unlike a simple state machine, LangGraph can maintain complex state and execute arbitrary application logic inside nodes.

---

# 6. Graph Components

A LangGraph application generally consists of:

\`\`\`text
State
Nodes
Edges
START
END
Reducers
Checkpoints
\`\`\`

Let's understand each one.

---

# 7. State

State is the most important concept.

State represents the data shared between nodes.

For example:

\`\`\`python
from typing import TypedDict


class State(TypedDict):
    question: str
    documents: list[str]
    answer: str
\`\`\`

You can imagine:

\`\`\`text
State
├── question
├── documents
└── answer
\`\`\`

Initially:

\`\`\`python
{
    "question": "What is Kubernetes?",
    "documents": [],
    "answer": ""
}
\`\`\`

A node modifies the state.

---

# 8. Why Shared State Matters

Suppose we have three nodes.

\`\`\`text
retrieve
   ↓
analyze
   ↓
generate
\`\`\`

The retrieve node produces documents.

The generate node needs those documents.

Instead of passing arguments manually:

\`\`\`python
retrieve(question)
analyze(question, documents)
generate(question, documents)
\`\`\`

LangGraph maintains shared state.

\`\`\`text
                 State
                   |
        +----------+----------+
        |          |          |
     retrieve   analyze    generate
\`\`\`

Each node reads the state and can return updates to it.

---

# 9. State Updates

Suppose:

\`\`\`python
class State(TypedDict):
    question: str
    documents: list[str]
\`\`\`

Initial state:

\`\`\`python
{
    "question": "What is RAG?",
    "documents": []
}
\`\`\`

Retriever:

\`\`\`python
def retrieve(state):
    documents = search(state["question"])

    return {
        "documents": documents
    }
\`\`\`

The state becomes:

\`\`\`text
Before:

question = "What is RAG?"
documents = []


After:

question = "What is RAG?"
documents = ["doc1", "doc2", "doc3"]
\`\`\`

The node doesn't need to return the entire state.

It can return the fields it updates.

---

# 10. Nodes

A node is a function that performs work.

For example:

\`\`\`python
def retrieve(state):
    documents = search(state["question"])

    return {
        "documents": documents
    }
\`\`\`

Another node:

\`\`\`python
def generate(state):
    answer = llm.invoke(
        f"""
        Question: {state["question"]}

        Context:
        {state["documents"]}
        """
    )

    return {
        "answer": answer.content
    }
\`\`\`

Conceptually:

\`\`\`text
retrieve
   ↓
documents added to state
   ↓
generate
   ↓
answer added to state
\`\`\`

---

# 11. What Should a Node Do?

A good node generally has one clear responsibility.

Good:

\`\`\`text
retrieve_documents
generate_answer
validate_answer
search_web
call_customer_api
\`\`\`

Avoid giant nodes like:

\`\`\`python
def do_everything(state):
    ...
\`\`\`

A large node becomes difficult to:

* test
* debug
* retry
* observe
* reuse

Prefer small nodes with clear responsibilities.

---

# 12. Edges

Edges determine what happens next.

For example:

\`\`\`text
START
  ↓
retrieve
  ↓
generate
  ↓
END
\`\`\`

In code:

\`\`\`python
graph.add_edge(START, "retrieve")
graph.add_edge("retrieve", "generate")
graph.add_edge("generate", END)
\`\`\`

This creates:

\`\`\`text
START → retrieve → generate → END
\`\`\`

---

# 13. START and END

LangGraph provides special graph markers:

\`\`\`text
START
END
\`\`\`

\`START\` represents where graph execution begins.

\`END\` represents successful completion.

Example:

\`\`\`text
START
  ↓
process
  ↓
END
\`\`\`

---

# 14. A Complete Simple Graph

A basic graph might look like:

\`\`\`python
from typing import TypedDict

from langgraph.graph import StateGraph, START, END


class State(TypedDict):
    message: str


def process(state: State):
    return {
        "message": state["message"].upper()
    }


builder = StateGraph(State)

builder.add_node("process", process)

builder.add_edge(START, "process")
builder.add_edge("process", END)

graph = builder.compile()
\`\`\`

Run it:

\`\`\`python
result = graph.invoke({
    "message": "hello langgraph"
})
\`\`\`

Result:

\`\`\`python
{
    "message": "HELLO LANGGRAPH"
}
\`\`\`

The architecture is:

\`\`\`text
START
  ↓
process
  ↓
END
\`\`\`

---

# 15. Why compile()?

This is an important concept.

You define the graph first:

\`\`\`python
builder = StateGraph(State)

builder.add_node(...)
builder.add_edge(...)
\`\`\`

Then:

\`\`\`python
graph = builder.compile()
\`\`\`

Think of it as:

\`\`\`text
Graph Definition
       ↓
Validation / Compilation
       ↓
Executable Graph
\`\`\`

After compilation:

\`\`\`python
graph.invoke(...)
\`\`\`

executes the graph.

---

# 16. Graph Builder vs Compiled Graph

Conceptually:

\`\`\`text
StateGraph
    |
    | add_node()
    | add_edge()
    | add_conditional_edges()
    |
    v
Builder
    |
    | compile()
    v
Compiled Graph
    |
    | invoke()
    | stream()
    v
Execution
\`\`\`

This separation makes graph construction explicit.

---

# 17. Conditional Edges

This is where LangGraph becomes much more interesting.

Suppose we have:

\`\`\`text
Question
   ↓
Classify
   ↓
Need search?
   ├── Yes → Search
   └── No  → Generate
\`\`\`

We need an edge whose destination depends on the state.

That's a **conditional edge**.

---

# 18. Conditional Routing

Suppose:

\`\`\`python
def should_search(state):
    if "latest" in state["question"].lower():
        return "search"

    return "generate"
\`\`\`

Then:

\`\`\`python
builder.add_conditional_edges(
    "classify",
    should_search,
    {
        "search": "search",
        "generate": "generate",
    }
)
\`\`\`

Conceptually:

\`\`\`text
             classify
                 |
          should_search()
            /       \\
           /         \\
       search       generate
\`\`\`

---

# 19. Why Conditional Edges Matter for Agents

Agents are fundamentally routing systems.

An agent decides:

\`\`\`text
What should I do next?
\`\`\`

For example:

\`\`\`text
User
 ↓
LLM
 ↓
Decision
 ├── Search
 ├── Database
 ├── Calculator
 └── Final Answer
\`\`\`

That decision can be represented as graph routing.

---

# 20. A Simple Agent Graph

Imagine:

\`\`\`text
                 START
                   |
                   v
                agent
                   |
            What should happen?
             /      |       \\
            /       |        \\
       search    database   finish
          |          |         |
          +----------+---------+
                     |
                     v
                   agent
                     |
                  repeat
                     |
                     v
                    END
\`\`\`

This loop is a fundamental agent pattern.

---

# 21. The Agent Loop

A classic agent works like this:

\`\`\`text
User Question
     ↓
Think
     ↓
Choose Action
     ↓
Execute Tool
     ↓
Observe Result
     ↓
Think Again
     ↓
Choose Action
     ↓
...
     ↓
Final Answer
\`\`\`

LangGraph can model this naturally.

\`\`\`text
START
  ↓
agent
  ↓
should_continue?
  ├── tool → tools → agent
  └── end  → END
\`\`\`

This is one of the most important LangGraph patterns.

---

# 22. Why the Loop Is Powerful

Traditional workflow:

\`\`\`text
A → B → C → D
\`\`\`

Agent workflow:

\`\`\`text
A → B → C
    ↑   |
    |   ↓
    +---D
\`\`\`

The system can decide dynamically whether another iteration is required.

This is why LangGraph is useful for agentic applications.

---

# 23. Reducers

Reducers become important when multiple nodes update the same state field.

Consider:

\`\`\`python
class State(TypedDict):
    messages: list
\`\`\`

Suppose one node returns:

\`\`\`python
{
    "messages": [message1]
}
\`\`\`

Another returns:

\`\`\`python
{
    "messages": [message2]
}
\`\`\`

Do we want:

\`\`\`text
messages = [message2]
\`\`\`

or:

\`\`\`text
messages = [message1, message2]
\`\`\`

A reducer determines how updates are combined.

---

# 24. Reducer Mental Model

Think of a reducer as:

\`\`\`text
Existing State
      +
Node Update
      ↓
Reducer
      ↓
New State
\`\`\`

For a normal field:

\`\`\`text
old value
   ↓
replace
   ↓
new value
\`\`\`

For a message list:

\`\`\`text
old messages
      +
new messages
      ↓
append/merge
\`\`\`

---

# 25. Why Messages Need Special Handling

Agents commonly maintain:

\`\`\`python
messages
\`\`\`

containing:

\`\`\`text
HumanMessage
AIMessage
ToolMessage
\`\`\`

For example:

\`\`\`text
messages
├── Human: What is Kubernetes?
├── AI: I need to search.
├── Tool: Kubernetes is...
└── AI: Kubernetes is...
\`\`\`

You usually don't want every node to overwrite the complete message history.

You want message updates to be merged appropriately.

LangGraph provides message-aware state patterns for this.

---

# 26. MessagesState

For message-based applications, LangGraph provides a convenient state structure for message histories.

Conceptually:

\`\`\`text
MessagesState
      |
      v
messages
      |
      +── HumanMessage
      +── AIMessage
      +── ToolMessage
      +── AIMessage
\`\`\`

This is commonly used for chatbots and agents.

---

# 27. Agent State

A production agent's state might look like:

\`\`\`python
class AgentState(TypedDict):
    messages: list
    user_id: str
    retrieved_documents: list
    tool_results: list
    next_action: str
    final_answer: str
\`\`\`

You can think of it as the agent's working memory.

\`\`\`text
                 Agent State
                      |
      +---------------+---------------+
      |               |               |
   Messages       Documents        Tool Results
      |
   Next Action
      |
   Final Answer
\`\`\`

---

# 28. State Is Not the Same as Memory

This distinction is important.

**State** is the data available during graph execution.

**Memory** generally means information that persists across interactions or sessions.

For example:

\`\`\`text
State:
Current conversation
Current retrieved documents
Current tool results
\`\`\`

Memory:

\`\`\`text
User preferences
Previous conversation
Saved facts
Long-term information
\`\`\`

State can exist only for one execution.

Memory can persist beyond it.

---

# 29. Short-Term Memory

Suppose a user says:

\`\`\`text
User:
My name is John.
\`\`\`

Then:

\`\`\`text
User:
What is my name?
\`\`\`

The current conversation state might contain:

\`\`\`text
messages:
[
    Human("My name is John."),
    AI(...),
    Human("What is my name?")
]
\`\`\`

This is short-term conversational context.

---

# 30. Long-Term Memory

Long-term memory could store:

\`\`\`text
user_id = 123

preferences:
{
    "language": "English",
    "timezone": "Singapore"
}
\`\`\`

This information can be loaded into state when needed.

Conceptually:

\`\`\`text
Persistent Memory
       ↓
Load
       ↓
Graph State
       ↓
Agent
       ↓
Update Memory
\`\`\`

---

# 31. Checkpointing

One of LangGraph's most important production features is **checkpointing**.

A checkpoint stores graph state at a particular point in execution.

Think:

\`\`\`text
Node A
 ↓
Checkpoint
 ↓
Node B
 ↓
Checkpoint
 ↓
Node C
\`\`\`

If something fails after Node B, the system can potentially resume from saved state rather than starting over.

---

# 32. Why Checkpoints Matter

Imagine an agent performs:

\`\`\`text
Search
 ↓
Analyze  ← expensive
 ↓
Database query
 ↓
Human approval
 ↓
Execute
\`\`\`

Without persistence:

\`\`\`text
Failure
 ↓
Start from beginning
\`\`\`

With checkpointing:

\`\`\`text
Failure
 ↓
Load checkpoint
 ↓
Resume
\`\`\`

This is extremely useful for long-running workflows.

---

# 33. Threads

LangGraph commonly uses a thread identifier to associate execution and persisted state with a particular conversation or workflow instance.

Conceptually:

\`\`\`text
thread_id = "customer-123"
\`\`\`

Then:

\`\`\`text
Thread
 |
 +── Execution 1
 |
 +── Execution 2
 |
 +── Execution 3
\`\`\`

The system can maintain continuity for that thread.

---

# 34. Thread vs State

Think:

\`\`\`text
Thread
  ↓
Persistent execution context
  ↓
Checkpoints
  ↓
State snapshots
\`\`\`

State:

\`\`\`text
Current data
\`\`\`

Thread:

\`\`\`text
Identity of the ongoing conversation/workflow
\`\`\`

---

# 35. Persistence Architecture

A production setup might look like:

\`\`\`text
                User
                  |
                  v
               API
                  |
                  v
             LangGraph
                  |
          +-------+-------+
          |               |
          v               v
       State          Checkpointer
                          |
                          v
                      Database
\`\`\`

The database could persist graph checkpoints depending on the chosen persistence implementation.

---

# 36. Human-in-the-Loop

One of LangGraph's strongest features is human-in-the-loop workflows.

Consider a financial agent:

\`\`\`text
User
 ↓
Agent
 ↓
Analyze transaction
 ↓
Should refund?
 ↓
Human approval
 ↓
Execute refund
\`\`\`

You don't want the agent automatically issuing refunds.

Instead:

\`\`\`text
Agent
 ↓
Interrupt
 ↓
Human
 ↓
Approve / Reject
 ↓
Resume
\`\`\`

---

# 37. Interrupts

An interrupt pauses graph execution.

Conceptually:

\`\`\`text
Node A
  ↓
Node B
  ↓
INTERRUPT
  ↓
Human
  ↓
RESUME
  ↓
Node C
\`\`\`

The graph state can be persisted while waiting.

This enables workflows that may pause for seconds, minutes, or much longer depending on the application design.

---

# 38. Human Approval Example

Imagine an agent wants to delete a user.

\`\`\`text
START
  ↓
Analyze Request
  ↓
Prepare Delete Operation
  ↓
Human Approval
  ├── Reject → END
  └── Approve
        ↓
     Delete User
        ↓
       END
\`\`\`

This is much safer than:

\`\`\`text
User
 ↓
LLM
 ↓
Delete User
\`\`\`

---

# 39. Dynamic Routing

A graph can route based on state.

Example:

\`\`\`text
                    classify
                       |
          +------------+------------+
          |            |            |
          v            v            v
       billing       technical    general
          |            |            |
          v            v            v
       billing       support      chatbot
\`\`\`

This is useful for enterprise assistants.

---

# 40. Multi-Agent Systems

LangGraph can orchestrate multiple agents.

For example:

\`\`\`text
                  Supervisor
                      |
        +-------------+-------------+
        |             |             |
        v             v             v
    Researcher     Coder        Reviewer
        |             |             |
        +-------------+-------------+
                      |
                      v
                  Supervisor
                      |
                      v
                     END
\`\`\`

The supervisor determines which agent should work next.

---

# 41. Supervisor Pattern

A common pattern is:

\`\`\`text
User
 ↓
Supervisor
 ↓
Which specialist?
 ├── Research Agent
 ├── Coding Agent
 ├── Data Agent
 └── Writing Agent
\`\`\`

After a specialist completes its work:

\`\`\`text
Specialist
   ↓
Supervisor
   ↓
Another specialist?
\`\`\`

This creates a multi-agent loop.

---

# 42. Why Not Just One Agent?

Sometimes one agent is enough.

But a large agent can become difficult to manage:

\`\`\`text
Agent
 ├── Search
 ├── Database
 ├── Coding
 ├── Email
 ├── Finance
 ├── Customer support
 └── Reporting
\`\`\`

A supervisor architecture can separate responsibilities.

\`\`\`text
Supervisor
 ├── Research
 ├── Database
 ├── Coding
 └── Communication
\`\`\`

Each specialist can have a smaller tool set and clearer instructions.

---

# 43. Subgraphs

Large workflows can be decomposed into smaller graphs.

For example:

\`\`\`text
Main Graph
│
├── Authentication
│
├── Research Subgraph
│
├── Analysis Subgraph
│
└── Reporting Subgraph
\`\`\`

A subgraph is essentially a graph used as a component inside another graph.

This helps with:

* modularity
* testing
* reuse
* team ownership

---

# 44. Example Architecture

\`\`\`text
                    Main Graph
                        |
            +-----------+-----------+
            |           |           |
            v           v           v
       Research      Analysis     Approval
       Subgraph      Subgraph     Subgraph
\`\`\`

This is similar to calling services or modules from a larger workflow.

---

# 45. Tools

Agents often need external tools.

Examples:

\`\`\`text
Search API
Database
Calculator
Weather API
CRM
Payment API
Internal REST API
\`\`\`

The graph can contain a tool execution node.

Conceptually:

\`\`\`text
LLM
 ↓
Tool decision
 ↓
Tool
 ↓
Tool result
 ↓
LLM
\`\`\`

---

# 46. Tool Calling Loop

The classic architecture:

\`\`\`text
                 ┌─────────────┐
                 │     LLM     │
                 └──────┬──────┘
                        ↓
                 Tool required?
                  /           \\
                Yes            No
                 ↓              ↓
               Tool          Answer
                 ↓
             Tool result
                 ↓
                LLM
\`\`\`

This is one of the fundamental agent loops implemented using graph logic.

---

# 47. ToolNode

LangGraph provides utilities for executing tools from tool calls.

Conceptually:

\`\`\`text
Agent Node
    ↓
ToolNode
    ↓
Tool execution
    ↓
Tool messages
    ↓
Agent Node
\`\`\`

This reduces the amount of boilerplate required for common tool-calling workflows.

---

# 48. RAG with LangGraph

LangGraph is particularly useful for advanced RAG.

Basic RAG:

\`\`\`text
Question
 ↓
Retrieve
 ↓
Generate
\`\`\`

Advanced RAG:

\`\`\`text
Question
 ↓
Rewrite Query
 ↓
Retrieve
 ↓
Grade Documents
 ↓
Relevant?
 ├── Yes → Generate
 │
 └── No → Rewrite
             ↓
          Retrieve
\`\`\`

This is a graph.

---

# 49. Corrective RAG

A corrective RAG workflow might look like:

\`\`\`text
             User Question
                   |
                   v
              Retrieve
                   |
                   v
             Grade Docs
              /      \\
             /        \\
        Relevant    Irrelevant
           |            |
           v            v
        Generate    Web Search
                        |
                        v
                    Generate
\`\`\`

LangGraph is a natural fit for this architecture.

---

# 50. Self-Checking Agent

Another pattern:

\`\`\`text
Question
 ↓
Generate Answer
 ↓
Validate
 ↓
Correct?
 ├── Yes → END
 └── No
      ↓
   Improve
      ↓
   Validate
\`\`\`

This introduces a loop.

\`\`\`text
Generate
   ↓
Validate
   ↓
   └──── No ──── Generate
\`\`\`

You must also define limits so the agent does not loop forever.

---

# 51. Maximum Iterations

For agent loops, always consider:

\`\`\`text
max_iterations = 5
\`\`\`

Conceptually:

\`\`\`text
iteration = 0

while not finished:
    iteration += 1

    if iteration > 5:
        stop
\`\`\`

In a graph architecture, this can be represented in state:

\`\`\`python
class State(TypedDict):
    iteration: int
\`\`\`

Then route based on the value.

---

# 52. Why Loop Limits Matter

Without limits:

\`\`\`text
Agent
 ↓
Tool
 ↓
Agent
 ↓
Tool
 ↓
Agent
 ↓
Tool
 ↓
...
\`\`\`

Possible consequences:

\`\`\`text
High token cost
High latency
Repeated API calls
Unexpected side effects
\`\`\`

Production agents need guardrails.

---

# 53. Error Handling

A production graph should consider failures.

For example:

\`\`\`text
LLM
 ↓
Failure
 ↓
Retry
\`\`\`

Or:

\`\`\`text
Tool
 ↓
Failure
 ↓
Fallback
\`\`\`

Example:

\`\`\`text
Primary Search
      |
      v
    Error?
    /    \\
  Yes     No
   |       |
Fallback   Continue
\`\`\`

---

# 54. Retry Strategy

Not every failure should be retried.

Transient errors:

\`\`\`text
Timeout
429
Temporary network error
\`\`\`

may be retryable.

Permanent errors:

\`\`\`text
Invalid request
Invalid credentials
Bad input
\`\`\`

usually should not be blindly retried.

This is standard distributed-systems thinking applied to agent workflows.

---

# 55. Idempotency

This becomes especially important when tools cause side effects.

Suppose the agent calls:

\`\`\`text
charge_customer()
\`\`\`

The request times out.

Did the charge happen?

If you blindly retry:

\`\`\`text
charge_customer()
charge_customer()
\`\`\`

you might charge twice.

Therefore production agent tools need proper idempotency design.

LangGraph does not magically solve this business problem.

Your tools must be designed safely.

---

# 56. Streaming

LLM applications often need streaming.

Instead of waiting:

\`\`\`text
Request
   ↓
LLM
   ↓
Complete response
   ↓
User
\`\`\`

you can stream:

\`\`\`text
Request
   ↓
LLM
   ↓
Token
   ↓
Token
   ↓
Token
   ↓
Token
\`\`\`

LangGraph supports streaming graph execution so applications can expose intermediate or incremental results depending on the streaming mode and architecture.

---

# 57. Why Streaming Matters

Without streaming:

\`\`\`text
User waits 5 seconds
\`\`\`

With token streaming:

\`\`\`text
0.5 sec → first output
1.0 sec → more output
2.0 sec → more output
...
\`\`\`

The total processing time may not change, but perceived responsiveness improves.

---

# 58. Streaming Agent Progress

For agents, you may want to stream more than tokens.

For example:

\`\`\`text
Agent started
   ↓
Searching documents
   ↓
Found 5 documents
   ↓
Analyzing results
   ↓
Calling customer API
   ↓
Generating response
\`\`\`

This can make long-running workflows easier to understand.

---

# 59. Graph Execution Modes

The important distinction is:

\`\`\`text
invoke()
\`\`\`

for a complete result.

And streaming APIs for incremental execution information.

Conceptually:

\`\`\`text
invoke()
   ↓
Final State
\`\`\`

while streaming:

\`\`\`text
stream()
   ↓
Node updates
Events
Tokens
Intermediate results
\`\`\`

The exact stream modes and APIs depend on the LangGraph version you are using, so check the current documentation when implementing a production streaming interface.

---

# 60. Durable Execution

One of LangGraph's major strengths is support for workflows that need to survive interruptions.

Imagine:

\`\`\`text
Agent
 ↓
Research
 ↓
Human approval
 ↓
Execute
\`\`\`

The human may take 30 minutes to approve.

You don't want to keep the entire application process running in memory for 30 minutes.

Instead:

\`\`\`text
Execute
 ↓
Persist state
 ↓
Pause
 ↓
Human decision
 ↓
Resume
\`\`\`

This is the idea behind durable workflows.

---

# 61. LangGraph Is More Than an Agent Framework

A common misconception is:

> LangGraph is only for AI agents.

Not true.

You can use it for deterministic workflows too.

Example:

\`\`\`text
Validate
 ↓
Fetch Customer
 ↓
Check Eligibility
 ↓
Calculate
 ↓
Generate Report
\`\`\`

No autonomous agent is required.

LangGraph is useful whenever your workflow benefits from:

\`\`\`text
State
Branches
Loops
Persistence
Human interaction
Long-running execution
\`\`\`

---

# 62. Deterministic vs Agentic Graphs

### Deterministic

\`\`\`text
START
 ↓
A
 ↓
B
 ↓
C
 ↓
END
\`\`\`

The path is known.

### Conditional

\`\`\`text
START
 ↓
A
 ↓
Condition
 ├── B
 └── C
\`\`\`

The path depends on state.

### Agentic

\`\`\`text
START
 ↓
Agent
 ↓
Tool
 ↓
Agent
 ↓
Tool
 ↓
Agent
 ↓
END
\`\`\`

The system dynamically determines the next action.

---

# 63. Graph State as the Source of Truth

A good architecture treats graph state as the current workflow state.

For example:

\`\`\`python
{
    "messages": [...],
    "customer_id": "123",
    "documents": [...],
    "tool_results": [...],
    "approved": False,
    "iteration": 2
}
\`\`\`

Nodes read from it.

Nodes return updates.

The graph determines execution.

---

# 64. Avoid Putting Everything Into State

State should contain information that needs to be shared between nodes.

Don't automatically put every variable into state.

Bad:

\`\`\`python
state = {
    "temporary_loop_variable": ...,
    "internal_debug_variable": ...,
    "random_local_value": ...
}
\`\`\`

Better:

\`\`\`python
state = {
    "messages": ...,
    "documents": ...,
    "customer_id": ...,
    "approval_status": ...
}
\`\`\`

Keep state intentional.

---

# 65. State Design Is Architecture

Poor state design creates difficult graphs.

For example:

\`\`\`text
State
├── 50 unrelated fields
├── temporary values
├── duplicated information
└── unclear ownership
\`\`\`

Good state:

\`\`\`text
State
├── conversation
├── task information
├── retrieved context
├── decisions
└── workflow status
\`\`\`

Think of state as the contract between nodes.

---

# 66. Node Design

A good node should generally:

\`\`\`text
Input:
State

Process:
One responsibility

Output:
State updates
\`\`\`

For example:

\`\`\`python
def retrieve_documents(state):
    query = state["question"]

    documents = retriever.invoke(query)

    return {
        "documents": documents
    }
\`\`\`

This is easy to test.

---

# 67. Testing Nodes

Because nodes are functions, you can test them independently.

Example:

\`\`\`python
def test_retrieve_documents():
    state = {
        "question": "What is Kubernetes?",
        "documents": []
    }

    result = retrieve_documents(state)

    assert len(result["documents"]) > 0
\`\`\`

Then separately test graph routing.

This is much easier than testing one giant agent function.

---

# 68. Testing the Graph

You can test:

\`\`\`text
Input state
     ↓
Graph
     ↓
Expected state
\`\`\`

For example:

\`\`\`python
result = graph.invoke({
    "question": "What is Kubernetes?"
})

assert result["answer"] != ""
\`\`\`

For conditional workflows, test each route.

\`\`\`text
Question A → Search
Question B → Database
Question C → Direct Answer
\`\`\`

---

# 69. Observability with LangSmith

LangGraph and LangSmith work particularly well together.

Conceptually:

\`\`\`text
                LangGraph
                    |
                    v
             Graph Execution
                    |
          +---------+---------+
          |         |         |
         Node      Node      Node
          |         |         |
          +---------+---------+
                    |
                    v
                LangSmith
\`\`\`

LangSmith can provide visibility into graph execution.

For example:

\`\`\`text
Trace
└── Agent
    ├── classify
    ├── retrieve
    ├── grade_documents
    ├── generate
    └── validate
\`\`\`

This is extremely useful when debugging complex graphs.

---

# 70. LangGraph + LangSmith

Think of the relationship as:

\`\`\`text
LangGraph
    =
Execution

LangSmith
    =
Observability + Evaluation
\`\`\`

Together:

\`\`\`text
Build workflow
      ↓
Execute workflow
      ↓
Trace workflow
      ↓
Evaluate workflow
      ↓
Improve workflow
\`\`\`

---

# 71. Production Architecture

A realistic architecture might look like:

\`\`\`text
                         Users
                           |
                           v
                       Frontend
                           |
                           v
                         API
                           |
                           v
                      LangGraph
                           |
        +------------------+------------------+
        |                  |                  |
        v                  v                  v
       LLM              Retriever           Tools
        |                  |                  |
        v                  v                  v
   Model Provider       Vector DB        Internal APIs
                           |
                           v
                        Database

                           |
                           v
                       LangSmith
                           |
                +----------+----------+
                |                     |
              Traces              Evaluation
\`\`\`

---

# 72. Production Concerns

When moving from a demo to production, consider:

\`\`\`text
State management
Persistence
Retries
Timeouts
Idempotency
Tool security
Authentication
Authorization
PII
Rate limits
Cost
Latency
Observability
Evaluation
Concurrency
\`\`\`

LangGraph handles workflow orchestration, but the surrounding system still needs standard production engineering.

---

# 73. Security

Agents are powerful because they can perform actions.

Consider:

\`\`\`text
Agent
 ↓
delete_customer()
\`\`\`

Never assume:

\`\`\`text
LLM decision = authorization
\`\`\`

The agent should not be the security boundary.

Instead:

\`\`\`text
User
 ↓
Authentication
 ↓
Authorization
 ↓
Agent
 ↓
Tool
 ↓
Authorization check
 ↓
Action
\`\`\`

Tools should enforce permissions independently.

---

# 74. Tool Permissions

Suppose an agent has:

\`\`\`text
search_customer()
update_customer()
delete_customer()
\`\`\`

Don't give every user every tool.

You can enforce:

\`\`\`text
User Role
    ↓
Allowed Tools
    ↓
Agent
\`\`\`

For high-risk tools, perform another authorization check at execution time.

---

# 75. Timeouts

Every external operation should have appropriate timeouts.

For example:

\`\`\`text
LLM timeout
Database timeout
HTTP timeout
Search timeout
\`\`\`

Otherwise one slow dependency can block the entire workflow.

---

# 76. Rate Limits

Agents can generate multiple calls.

Suppose:

\`\`\`text
1 user request
    ↓
5 LLM calls
    ↓
3 search calls
    ↓
2 database calls
\`\`\`

A small number of users can create substantial downstream traffic.

Production systems need:

\`\`\`text
Rate limiting
Concurrency limits
Budget controls
Maximum iterations
Tool restrictions
\`\`\`

---

# 77. Cost Controls

Consider:

\`\`\`text
Agent
 ↓
LLM
 ↓
Tool
 ↓
LLM
 ↓
Tool
 ↓
LLM
\`\`\`

If every request results in 10 model calls, costs can grow quickly.

Use:

\`\`\`text
Maximum iterations
Model selection
Caching
Smaller models where appropriate
Context reduction
Tool limits
\`\`\`

and monitor usage.

---

# 78. Context Management

Agent state can grow.

Imagine:

\`\`\`text
messages:
1
2
3
...
100
...
1000
\`\`\`

Sending the entire history to every LLM call is expensive.

You may need:

\`\`\`text
Conversation summarization
Message trimming
Relevant context retrieval
State compression
\`\`\`

Conceptually:

\`\`\`text
Long History
     ↓
Summarize
     ↓
Compact State
     ↓
LLM
\`\`\`

---

# 79. Memory Architecture

A production conversational system might use:

\`\`\`text
                User
                  |
                  v
             LangGraph
                  |
          +-------+-------+
          |               |
          v               v
    Short-term State   Long-term Memory
          |               |
          v               v
     Checkpointer     Database / Store
\`\`\`

Short-term:

\`\`\`text
Current conversation
\`\`\`

Long-term:

\`\`\`text
Persistent user information
\`\`\`

Keep these concepts separate.

---

# 80. Graph Versioning

Your graph is application code.

Therefore it should be version controlled.

Example:

\`\`\`text
Git
 |
 +── graph_v1
 +── graph_v2
 +── graph_v3
\`\`\`

When graph behavior changes:

\`\`\`text
Prompt
Tool
Node
Routing
State
\`\`\`

you should be able to identify which version produced a production result.

This is particularly important when debugging agent behavior.

---

# 81. Configuration vs Code

Avoid hardcoding everything into nodes.

For example:

\`\`\`python
MAX_ITERATIONS = 5
\`\`\`

can be configuration.

Similarly:

\`\`\`text
model
temperature
top_k
timeouts
\`\`\`

should generally be configurable where appropriate.

This makes experimentation easier.

---

# 82. A More Complete Agent Example

Consider a customer support agent.

Requirements:

\`\`\`text
1. Understand customer question.
2. Search knowledge base.
3. If insufficient, search web.
4. If refund requested, inspect order.
5. If refund exceeds $500, require approval.
6. Generate final response.
\`\`\`

Graph:

\`\`\`text
                         START
                           |
                           v
                       Understand
                           |
                           v
                       Retrieve KB
                           |
                           v
                    Enough information?
                       /           \\
                     Yes            No
                      |              |
                      |          Web Search
                      |              |
                      +------+-------+
                             |
                             v
                       Is refund?
                        /       \\
                      No         Yes
                      |           |
                      |       Get Order
                      |           |
                      |       Amount > $500?
                      |         /      \\
                      |       Yes       No
                      |        |         |
                      |    Approval     Continue
                      |        |         |
                      +--------+---------+
                               |
                               v
                           Generate
                               |
                               v
                              END
\`\`\`

This is exactly the kind of workflow that becomes difficult to maintain as a collection of nested \`if\` statements.

LangGraph gives it an explicit structure.

---

# 83. Why Graphs Improve Maintainability

Without a graph:

\`\`\`python
def agent():
    if ...
        if ...
            if ...
                ...
\`\`\`

Eventually:

\`\`\`text
Nested conditions
+
Tool calls
+
Retries
+
State
+
Human approval
\`\`\`

become difficult to reason about.

With a graph:

\`\`\`text
Understand
   ↓
Retrieve
   ↓
Grade
   ↓
Conditional
   ├── Search
   └── Generate
\`\`\`

The workflow is visible.

---

# 84. LangGraph as an Orchestration Layer

A useful production mental model is:

\`\`\`text
                   Application
                        |
                        v
                 LangGraph
                        |
        +---------------+---------------+
        |               |               |
        v               v               v
       LLM             Tools          Data
        |               |               |
        +---------------+---------------+
                        |
                        v
                   Final Result
\`\`\`

LangGraph coordinates the components.

It does not need to own every component.

---

# 85. LangGraph vs Simple Python

You should not use LangGraph for every workflow.

Simple:

\`\`\`python
result = step1()
result = step2(result)
result = step3(result)
\`\`\`

is perfectly fine when the workflow is simple and deterministic.

LangGraph becomes more valuable when you have:

\`\`\`text
Branches
Loops
State
Persistence
Human approval
Multiple agents
Long-running execution
Dynamic tool use
\`\`\`

Use the simplest architecture that solves the problem.

---

# 86. LangGraph vs LangChain Agent Abstractions

LangChain provides higher-level agent abstractions.

LangGraph gives you more explicit control over the workflow.

Think:

\`\`\`text
Higher level
     ↓
Agent abstraction
     ↓
LangGraph
     ↓
Explicit workflow
\`\`\`

When you need precise control over:

\`\`\`text
State
Routing
Persistence
Human approval
Loops
Retries
\`\`\`

a graph-based design becomes attractive.

---

# 87. The Most Important LangGraph Concepts

If you are learning LangGraph for a GenAI engineering role, prioritize these:

\`\`\`text
1. State
2. StateGraph
3. Nodes
4. Edges
5. START / END
6. Conditional edges
7. Reducers
8. MessagesState
9. Tool calling
10. Agent loops
11. Checkpointing
12. Threads
13. Persistence
14. Interrupts
15. Human-in-the-loop
16. Memory
17. Subgraphs
18. Streaming
19. Multi-agent workflows
20. Error handling
\`\`\`

---

# 88. Recommended Learning Order

Don't try to learn everything simultaneously.

Use this progression:

\`\`\`text
Level 1
  ↓
State
  ↓
Nodes
  ↓
Edges
  ↓
START / END

Level 2
  ↓
Conditional Edges
  ↓
Reducers
  ↓
Messages

Level 3
  ↓
Tools
  ↓
Agent Loop
  ↓
RAG

Level 4
  ↓
Checkpointing
  ↓
Threads
  ↓
Persistence

Level 5
  ↓
Interrupts
  ↓
Human-in-the-loop
  ↓
Memory

Level 6
  ↓
Subgraphs
  ↓
Multi-agent
  ↓
Streaming

Level 7
  ↓
LangSmith
  ↓
Evaluation
  ↓
Production
\`\`\`

This order prevents the framework from feeling unnecessarily complicated.

---

# 89. One Diagram to Remember

If you remember only one diagram, remember this:

\`\`\`text
                         STATE
                           |
             +-------------+-------------+
             |             |             |
             v             v             v
           NODE          NODE          NODE
             |             |             |
             +-------------+-------------+
                           |
                           v
                         EDGE
                           |
                    What happens next?
                           |
                +----------+----------+
                |                     |
                v                     v
              NODE                  NODE
                |                     |
                +----------+----------+
                           |
                           v
                          END
\`\`\`

And for an agent:

\`\`\`text
                         STATE
                           |
                           v
                         AGENT
                           |
                    What should I do?
                    /       |       \\
                   /        |        \\
                  v         v         v
               Search    Database   Finish
                  |         |         |
                  +---------+---------+
                            |
                            v
                          AGENT
                            |
                         Repeat
                            |
                            v
                           END
\`\`\`

---

# 90. Final Mental Model

LangGraph can be understood with one sentence:

> **LangGraph is a stateful graph-based orchestration framework where nodes perform work, edges control execution, and state carries information between steps.**

The fundamental structure is:

\`\`\`text
State
  +
Nodes
  +
Edges
  =
LangGraph Workflow
\`\`\`

For a basic workflow:

\`\`\`text
START
 ↓
Node A
 ↓
Node B
 ↓
Node C
 ↓
END
\`\`\`

For a conditional workflow:

\`\`\`text
START
 ↓
Classifier
 ↓
Condition
 ├── A
 └── B
 ↓
END
\`\`\`

For an agent:

\`\`\`text
START
 ↓
Agent
 ↓
Tool
 ↓
Agent
 ↓
Tool
 ↓
Agent
 ↓
END
\`\`\`

For a persistent human-in-the-loop system:

\`\`\`text
START
 ↓
Agent
 ↓
Tool
 ↓
Interrupt
 ↓
Checkpoint
 ↓
Human
 ↓
Resume
 ↓
Agent
 ↓
END
\`\`\`

For a production AI system:

\`\`\`text
                         User
                           |
                           v
                       API Layer
                           |
                           v
                       LangGraph
                           |
          +----------------+----------------+
          |                |                |
          v                v                v
        Agents            RAG             Tools
          |                |                |
          v                v                v
         LLM          Vector Store       APIs/DB
          |                |                |
          +----------------+----------------+
                           |
                           v
                      Checkpointer
                           |
                           v
                       Persistence


                           +
                           |
                           v

                       LangSmith
                           |
              +------------+------------+
              |                         |
              v                         v
           Tracing                 Evaluation
\`\`\`

The key shift in thinking is this:

\`\`\`text
Simple LLM application:

Input → LLM → Output
\`\`\`

becomes:

\`\`\`text
Production Agent:

Input
  ↓
State
  ↓
Decision
  ↓
Action
  ↓
Observation
  ↓
State Update
  ↓
Decision
  ↓
Action
  ↓
...
  ↓
Final Answer
\`\`\`

**That loop, combined with persistent state and explicit control flow, is the foundation of LangGraph.**

Once you understand **state → node → edge → state update → routing**, the more advanced concepts such as tools, agents, RAG, checkpointing, interrupts, memory, subgraphs, and multi-agent systems become extensions of the same basic model.
`,tx=`---
id: langsmith-deep-dive
title: "LangSmith Deep Dive: Observability, Tracing, Evaluation, and Debugging for LLM Applications"
category: Generative AI
readTime: 10 min read
date: Jan 2026
author: Sanket Kakad
excerpt: A deep dive into LangSmith for building observable, debuggable, and reliable LLM applications through tracing, monitoring, evaluation, datasets, experiments, and production debugging.
---

## 1. What is LangSmith?

**LangSmith is an observability and evaluation platform for LLM applications.**

If LangChain helps you build an AI application:

\`\`\`text
LangChain
    ↓
Build the application
\`\`\`

LangSmith helps you understand what that application is actually doing:

\`\`\`text
LangChain / LangGraph Application
              ↓
          LangSmith
              ↓
    ┌─────────┼─────────┐
    ↓         ↓         ↓
  Traces   Evaluation  Debugging
\`\`\`

This becomes particularly important when your application contains:

* LLM calls
* RAG
* tools
* agents
* multi-step workflows
* retries
* structured output
* memory
* multiple model calls

A simple application may be easy to debug with normal logs.

An agentic application is much harder.

---

# 2. Why Normal Logging Is Not Enough

Imagine your application returns:

\`\`\`text
I could not find the answer.
\`\`\`

Your application logs:

\`\`\`text
ERROR: Request failed
\`\`\`

That's not enough.

You need to know:

\`\`\`text
What was the user question?

Which prompt was sent?

Which model was called?

What model parameters were used?

What did the model return?

Which documents were retrieved?

Which tools were called?

What arguments were passed to the tools?

How long did each operation take?

How many tokens were consumed?

Which step failed?
\`\`\`

LangSmith gives you a structured trace of the execution.

---

# 3. The Core Mental Model

Think of LangSmith as a **flight recorder for your AI application**.

For a normal backend:

\`\`\`text
Request
   ↓
Service
   ↓
Database
   ↓
Response
\`\`\`

You might log:

\`\`\`text
request_id
latency
status
\`\`\`

For an AI application:

\`\`\`text
User
 ↓
Agent
 ↓
LLM
 ↓
Retriever
 ↓
Vector DB
 ↓
LLM
 ↓
Tool
 ↓
LLM
 ↓
Answer
\`\`\`

LangSmith lets you inspect that entire execution.

\`\`\`text
                    LangSmith
                        |
                        v
User → Agent → LLM → Retriever → LLM → Tool → LLM
          |        |       |       |       |      |
          +--------+-------+-------+-------+------+
                         Trace
\`\`\`

---

# 4. What is a Trace?

A **trace** represents an execution of your application.

For example:

\`\`\`text
Trace
└── RAG Application
    ├── Retriever
    │   ├── Query embedding
    │   └── Vector search
    │
    ├── Prompt
    │
    └── LLM
        └── Response
\`\`\`

A trace answers:

> What happened during this particular request?

---

# 5. Trace vs Run

You will encounter the concept of a **run**.

A run represents an individual execution of a component.

For example:

\`\`\`text
Trace
│
├── Run: Retriever
├── Run: Prompt
├── Run: Chat Model
└── Run: Parser
\`\`\`

An entire application request can therefore be represented as a hierarchy.

Conceptually:

\`\`\`text
Parent Run
│
├── Child Run
│
├── Child Run
│   ├── Grandchild Run
│   └── Grandchild Run
│
└── Child Run
\`\`\`

This hierarchy is extremely useful when debugging agents.

---

# 6. Example: Simple LLM Application

Suppose your code is:

\`\`\`python
from langchain_openai import ChatOpenAI

model = ChatOpenAI(
    model="gpt-4.1-mini"
)

response = model.invoke(
    "Explain Kubernetes"
)
\`\`\`

Without observability:

\`\`\`text
Application
   ↓
OpenAI
   ↓
Response
\`\`\`

With LangSmith tracing:

\`\`\`text
Trace
└── ChatOpenAI
    ├── Input
    ├── Model
    ├── Parameters
    ├── Output
    ├── Tokens
    └── Latency
\`\`\`

Now you can investigate what happened.

---

# 7. Why This Becomes More Important with RAG

Consider a RAG application:

\`\`\`text
User Question
      |
      v
Query Embedding
      |
      v
Vector Search
      |
      v
Retrieved Documents
      |
      v
Prompt
      |
      v
LLM
      |
      v
Answer
\`\`\`

Suppose the answer is incorrect.

There are two major possibilities.

### Retrieval failure

\`\`\`text
Question
   ↓
Bad retrieval
   ↓
Wrong context
   ↓
LLM
   ↓
Wrong answer
\`\`\`

### Generation failure

\`\`\`text
Question
   ↓
Correct retrieval
   ↓
Correct context
   ↓
LLM
   ↓
Wrong answer
\`\`\`

Without tracing, these can look identical.

LangSmith lets you inspect the individual steps.

---

# 8. Debugging a RAG Application

Suppose the user asks:

\`\`\`text
How many annual leave days do employees receive?
\`\`\`

The retriever returns:

\`\`\`text
Password Policy
Security Policy
Remote Work Policy
\`\`\`

instead of:

\`\`\`text
Leave Policy
\`\`\`

The LLM answers:

\`\`\`text
I could not find the annual leave policy.
\`\`\`

The problem is not the LLM.

The problem is:

\`\`\`text
Retriever
\`\`\`

A trace makes this visible.

\`\`\`text
Trace
└── RAG Request
    │
    ├── Retriever
    │   ├── Query
    │   └── Retrieved Documents
    │
    ├── Prompt
    │
    └── LLM
\`\`\`

You can inspect the retrieval step independently.

---

# 9. Debugging an Agent

Now consider an agent:

\`\`\`text
User
 ↓
Agent
 ↓
LLM
 ↓
Tool
 ↓
LLM
 ↓
Tool
 ↓
LLM
 ↓
Answer
\`\`\`

Suppose the agent chooses the wrong tool.

Without tracing:

\`\`\`text
Agent failed.
\`\`\`

With tracing:

\`\`\`text
Trace
└── Agent
    ├── LLM
    │   └── Tool decision
    │
    ├── Tool: search_database
    │
    ├── Tool result
    │
    ├── LLM
    │   └── Tool decision
    │
    ├── Tool: search_web
    │
    └── Final LLM
\`\`\`

Now you can determine exactly where the behavior went wrong.

---

# 10. LangSmith Architecture

Conceptually:

\`\`\`text
                     Your Application
                            |
             +--------------+--------------+
             |                             |
             v                             v
        LangChain                       LangGraph
             |                             |
             +--------------+--------------+
                            |
                            v
                       Tracing
                            |
                            v
                        LangSmith
                            |
              +-------------+-------------+
              |             |             |
              v             v             v
           Traces       Datasets      Evaluations
\`\`\`

The application executes normally.

Tracing sends execution information to LangSmith.

LangSmith then gives you tools to inspect and evaluate the application.

---

# 11. LangSmith Is Not the LLM

This distinction is important.

\`\`\`text
OpenAI / Anthropic / Google
        ↓
      Model
\`\`\`

The model generates the response.

LangSmith:

\`\`\`text
Application
    ↓
Observability
    ↓
Trace / Evaluate / Debug
\`\`\`

LangSmith does not replace your model provider.

---

# 12. LangSmith Is Not LangChain

These are related but different.

## LangChain

Used to build application components:

\`\`\`text
Models
Prompts
Tools
Retrievers
Vector Stores
Structured Output
\`\`\`

## LangSmith

Used to observe and evaluate those applications:

\`\`\`text
Tracing
Debugging
Datasets
Evaluation
Monitoring
\`\`\`

Think:

\`\`\`text
LangChain
=
Build
\`\`\`

\`\`\`text
LangSmith
=
Observe + Evaluate
\`\`\`

---

# 13. LangSmith and LangGraph

For agentic applications:

\`\`\`text
LangGraph
=
Workflow orchestration
\`\`\`

\`\`\`text
LangSmith
=
Observability and evaluation
\`\`\`

Together:

\`\`\`text
                LangGraph
                    |
                    v
             Agent Workflow
                    |
        +-----------+-----------+
        |           |           |
       LLM        Tools       RAG
        |           |           |
        +-----------+-----------+
                    |
                    v
                LangSmith
                    |
          +---------+---------+
          |                   |
        Trace              Evaluate
\`\`\`

This combination is particularly useful for production agent systems.

---

# 14. Setting Up LangSmith

The basic environment configuration uses environment variables.

Conceptually:

\`\`\`bash
LANGSMITH_TRACING=true
LANGSMITH_API_KEY=your_api_key
LANGSMITH_PROJECT=my-project
\`\`\`

The exact configuration can vary with SDK versions and deployment setup, so use the current LangSmith documentation when setting up a new project.

---

# 15. What is a LangSmith Project?

A project is a logical grouping of traces.

For example:

\`\`\`text
Projects
│
├── development
├── staging
└── production
\`\`\`

Or:

\`\`\`text
Projects
│
├── customer-support
├── knowledge-assistant
└── coding-agent
\`\`\`

This makes it easier to separate different applications or environments.

---

# 16. Why Separate Development and Production?

Suppose you have:

\`\`\`text
my-agent-dev
my-agent-staging
my-agent-prod
\`\`\`

You don't want production traces mixed with development experiments.

A common pattern is:

\`\`\`text
Development
    ↓
LangSmith Project: agent-dev

Staging
    ↓
LangSmith Project: agent-staging

Production
    ↓
LangSmith Project: agent-prod
\`\`\`

This makes monitoring and evaluation much easier.

---

# 17. What Information Can a Trace Contain?

A trace can contain information such as:

\`\`\`text
Input
Output
Model name
Model parameters
Latency
Token usage
Errors
Metadata
Tags
Child operations
Retrieved documents
Tool calls
\`\`\`

For example:

\`\`\`text
Run
├── Name: answer_question
├── Input:
│   └── "What is our refund policy?"
│
├── Model:
│   └── gpt-4.1-mini
│
├── Retrieval:
│   ├── document-12
│   ├── document-31
│   └── document-42
│
├── Output:
│   └── "Refunds are allowed within 30 days."
│
└── Latency:
    └── 1.8 seconds
\`\`\`

---

# 18. Metadata

Metadata allows you to attach useful application information.

For example:

\`\`\`text
environment = production
customer_tier = enterprise
feature = knowledge_assistant
version = v2.4.0
\`\`\`

This allows you to analyze traces by application context.

For example:

\`\`\`text
Show me failures from:

environment = production
version = v2.4.0
\`\`\`

---

# 19. Tags

Tags are useful for categorizing traces.

For example:

\`\`\`text
rag
production
customer-support
\`\`\`

A trace could have:

\`\`\`text
Tags:
[
    "production",
    "rag",
    "customer-support"
]
\`\`\`

Tags make filtering and analysis easier.

---

# 20. Metadata vs Tags

A useful distinction:

### Metadata

Usually represents structured information.

\`\`\`text
environment = production
version = 2.1
customer_id = 123
\`\`\`

### Tags

Usually represent categories.

\`\`\`text
production
rag
support
\`\`\`

In practice, use metadata for attributes you want to inspect as key-value data, and tags for categorical labels.

---

# 21. Latency

Latency is extremely important in AI applications.

Consider:

\`\`\`text
Total: 5.4 seconds

Retriever: 200 ms
Embedding: 150 ms
LLM #1: 2.2 s
Tool: 1.1 s
LLM #2: 1.75 s
\`\`\`

You can immediately see that:

\`\`\`text
LLM #1
LLM #2
\`\`\`

are the major contributors.

Without tracing, you might only know:

\`\`\`text
API request = 5.4 seconds
\`\`\`

That doesn't tell you where the problem is.

---

# 22. Token Usage

LLM applications are often token-cost sensitive.

For example:

\`\`\`text
Input tokens:
4,500

Output tokens:
800
\`\`\`

If an agent makes:

\`\`\`text
6 LLM calls
\`\`\`

the total token consumption can become significant.

Tracing helps you understand:

\`\`\`text
Which calls use the most tokens?
\`\`\`

and:

\`\`\`text
Which prompts are unnecessarily large?
\`\`\`

---

# 23. Finding Expensive Prompts

Suppose your RAG application retrieves:

\`\`\`text
20 chunks
\`\`\`

and sends all of them to the model.

The trace may reveal:

\`\`\`text
Input tokens = 18,000
\`\`\`

But perhaps only:

\`\`\`text
3 chunks
\`\`\`

were actually useful.

This gives you a concrete optimization opportunity:

\`\`\`text
20 chunks
   ↓
Reduce to 5
   ↓
Lower token usage
   ↓
Lower cost
   ↓
Lower latency
\`\`\`

---

# 24. Error Tracking

Suppose an application fails:

\`\`\`text
ToolValidationError
\`\`\`

A trace can show:

\`\`\`text
Agent
 └── Tool Call
      ├── Input
      ├── Validation
      └── Error
\`\`\`

Instead of searching through thousands of application log lines, you can inspect the failed execution.

---

# 25. Retries

Consider:

\`\`\`text
LLM Call
   ↓
Timeout
   ↓
Retry
   ↓
Success
\`\`\`

The trace can make the retry behavior visible.

This is particularly useful for identifying:

\`\`\`text
Too many retries
Repeated tool failures
Slow dependencies
Provider instability
\`\`\`

---

# 26. Evaluation

Observability answers:

> What happened?

Evaluation answers:

> Was the result good?

These are different questions.

For example:

\`\`\`text
Trace:
The LLM returned an answer.
\`\`\`

Evaluation:

\`\`\`text
Correctness:
0.95

Relevance:
0.90

Groundedness:
0.98
\`\`\`

This distinction is fundamental.

---

# 27. Why Evaluation Is Necessary

Suppose you change your prompt.

Old prompt:

\`\`\`text
Answer the question using the context.
\`\`\`

New prompt:

\`\`\`text
Answer the question using only the context.
If the answer is unavailable, say you don't know.
\`\`\`

You run your application.

It appears better.

But how do you know?

You need a test dataset.

\`\`\`text
Questions
+
Expected answers
+
Documents
\`\`\`

Then evaluate both versions.

---

# 28. What Is a Dataset?

A dataset is a collection of examples used to test your AI application.

For example:

\`\`\`text
Dataset: HR Knowledge

1.
Question:
How many annual leave days do employees receive?

Expected:
28 days

2.
Question:
How many sick leave days are available?

Expected:
14 days

3.
Question:
Can employees work remotely?

Expected:
Up to 3 days with approval
\`\`\`

You can run your application against these examples.

---

# 29. Dataset as an AI Test Suite

Think of a LangSmith dataset as similar to a test suite.

Traditional software:

\`\`\`text
test_addition()
test_login()
test_payment()
\`\`\`

LLM application:

\`\`\`text
test_refund_policy()
test_leave_policy()
test_remote_work()
\`\`\`

The difference is that LLM outputs can be probabilistic.

Therefore evaluation often uses evaluators rather than simple exact string comparison.

---

# 30. Creating an Evaluation Dataset

Suppose you have:

\`\`\`text
Question
Expected Answer
\`\`\`

You can store examples such as:

\`\`\`text
Input:
"What is the refund period?"

Reference:
"Customers can request refunds within 30 days."
\`\`\`

Then run your application against the dataset.

Conceptually:

\`\`\`text
Dataset
   |
   +---- Example 1 → Application → Output
   |
   +---- Example 2 → Application → Output
   |
   +---- Example 3 → Application → Output
\`\`\`

---

# 31. Evaluators

An evaluator judges an application output.

For example:

\`\`\`text
Input:
What is the refund period?

Expected:
30 days

Actual:
Customers can request refunds within 30 days.
\`\`\`

An evaluator might determine:

\`\`\`text
Correct = true
\`\`\`

Another example:

\`\`\`text
Actual:
Customers have 60 days to request a refund.
\`\`\`

The evaluator might produce:

\`\`\`text
Correct = false
\`\`\`

---

# 32. LLM-as-a-Judge

Some evaluations are difficult to implement with simple rules.

For example:

\`\`\`text
Question:
Explain Kubernetes.

Answer:
Kubernetes is a container orchestration platform...
\`\`\`

There may be many valid answers.

You can use another LLM to evaluate the answer.

Conceptually:

\`\`\`text
             Application LLM
                    |
                    v
                 Answer
                    |
                    v
             Evaluator LLM
                    |
                    v
            Score / Feedback
\`\`\`

This is commonly called **LLM-as-a-judge**.

---

# 33. Important Warning About LLM-as-a-Judge

An LLM evaluator is itself imperfect.

It can:

\`\`\`text
Misjudge answers
Prefer certain writing styles
Miss subtle factual errors
Be sensitive to prompt wording
\`\`\`

Therefore important evaluations should use multiple signals where practical.

For example:

\`\`\`text
Exact match
+
Rule-based validation
+
LLM judge
+
Human review
\`\`\`

---

# 34. RAG Evaluation

For RAG, evaluation should happen at multiple levels.

\`\`\`text
                    RAG Evaluation
                         |
          +--------------+--------------+
          |              |              |
          v              v              v
      Retrieval      Generation      Overall
\`\`\`

### Retrieval

Did we retrieve the correct information?

### Generation

Did the model answer correctly using the information?

### Overall

Did the user get a useful answer?

---

# 35. Retrieval Evaluation

Suppose the correct document is:

\`\`\`text
leave-policy.pdf
\`\`\`

Retrieved documents:

\`\`\`text
security-policy.pdf
leave-policy.pdf
remote-work.pdf
\`\`\`

The relevant document was retrieved.

Good.

If instead:

\`\`\`text
security-policy.pdf
password-policy.pdf
remote-work.pdf
\`\`\`

are returned:

\`\`\`text
Retrieval = failure
\`\`\`

This should be evaluated independently of the LLM.

---

# 36. Generation Evaluation

Suppose retrieval returns:

\`\`\`text
Employees receive 28 days of annual leave.
\`\`\`

The model says:

\`\`\`text
Employees receive 30 days.
\`\`\`

Retrieval:

\`\`\`text
Correct
\`\`\`

Generation:

\`\`\`text
Incorrect
\`\`\`

This distinction is extremely important when debugging RAG.

---

# 37. Groundedness

Groundedness asks:

> Is the answer supported by the provided context?

Context:

\`\`\`text
Employees receive 28 days of annual leave.
\`\`\`

Answer:

\`\`\`text
Employees receive 28 days of annual leave.
\`\`\`

Grounded.

But:

\`\`\`text
Employees receive 28 days and unlimited remote work.
\`\`\`

The second claim is not supported by the context.

That is a grounding problem.

---

# 38. Faithfulness

Faithfulness is closely related to whether the generated answer is supported by the available source information.

For enterprise RAG systems, this is particularly important.

A good evaluation pipeline may therefore examine:

\`\`\`text
Correctness
Relevance
Groundedness
Citation quality
\`\`\`

---

# 39. Evaluation Workflow

A typical workflow is:

\`\`\`text
Dataset
   |
   v
Application
   |
   v
Generated Outputs
   |
   v
Evaluators
   |
   +---- Correctness
   +---- Relevance
   +---- Groundedness
   +---- Custom metrics
   |
   v
Scores
\`\`\`

You can compare application versions.

---

# 40. Prompt Version Comparison

Suppose:

\`\`\`text
Version A
Prompt v1
\`\`\`

produces:

\`\`\`text
Correctness = 82%
\`\`\`

You modify the prompt.

\`\`\`text
Version B
Prompt v2
\`\`\`

produces:

\`\`\`text
Correctness = 89%
\`\`\`

Now you have evidence that the change improved the application on the evaluation dataset.

This is much better than saying:

\`\`\`text
"I think the new prompt is better."
\`\`\`

---

# 41. Experimentation

A useful development cycle is:

\`\`\`text
Build
 ↓
Run
 ↓
Trace
 ↓
Evaluate
 ↓
Modify
 ↓
Run again
 ↓
Compare
\`\`\`

This is the core development loop for reliable LLM applications.

---

# 42. Traditional Software vs LLM Software

Traditional development:

\`\`\`text
Write Code
 ↓
Unit Tests
 ↓
Integration Tests
 ↓
Deploy
 ↓
Monitor
\`\`\`

LLM application development:

\`\`\`text
Build Prompt / Workflow
 ↓
Run Traces
 ↓
Evaluate Outputs
 ↓
Inspect Failures
 ↓
Modify
 ↓
Evaluate Again
 ↓
Deploy
 ↓
Monitor Production
\`\`\`

The evaluation loop becomes much more important because outputs are not always deterministic.

---

# 43. Production Monitoring

Once your application is deployed, you need to monitor real user traffic.

For example:

\`\`\`text
Production
    |
    v
LangSmith
    |
    +---- Latency
    +---- Errors
    +---- Token usage
    +---- Model usage
    +---- Tool failures
    +---- Retrieval behavior
\`\`\`

This allows you to detect regressions that did not appear in development.

---

# 44. Development vs Production

A good setup is:

\`\`\`text
                Application
                    |
          +---------+---------+
          |                   |
          v                   v
     Development          Production
          |                   |
          v                   v
   LangSmith Project     LangSmith Project
      agent-dev             agent-prod
\`\`\`

Development traces help you debug.

Production traces help you monitor real behavior.

---

# 45. Sampling Production Traces

Production applications may generate a huge number of traces.

For example:

\`\`\`text
10,000 requests/hour
\`\`\`

Sending every possible detail to observability infrastructure may be unnecessary.

A production design may use:

\`\`\`text
100% error traces
+
Selected successful traces
+
Evaluation samples
\`\`\`

The exact strategy depends on your observability and compliance requirements.

---

# 46. Privacy and Sensitive Data

This is a critical consideration.

Traces can contain:

\`\`\`text
User questions
LLM prompts
LLM outputs
Retrieved documents
Tool arguments
Customer information
\`\`\`

Therefore you should treat tracing data as potentially sensitive.

Before enabling production tracing, determine:

\`\`\`text
What data is being captured?

Who can access it?

How long is it retained?

Are secrets being logged?

Are customer identifiers included?

Do you need redaction?
\`\`\`

Never put API keys or passwords into prompts or trace metadata.

---

# 47. PII Considerations

Suppose a user sends:

\`\`\`text
My name is John Smith.
My passport number is XXXXX.
\`\`\`

If the complete request is traced, sensitive information may appear in your observability system.

Therefore production applications may need:

\`\`\`text
Redaction
Filtering
Anonymization
Access controls
Retention policies
\`\`\`

Observability should not bypass your application's data protection requirements.

---

# 48. Cost Monitoring

An AI application can become expensive without obvious infrastructure problems.

For example:

\`\`\`text
Request
 ↓
Agent
 ↓
LLM call #1
 ↓
Retriever
 ↓
LLM call #2
 ↓
Tool
 ↓
LLM call #3
\`\`\`

Each model call can consume tokens.

Tracing lets you investigate:

\`\`\`text
Token usage per request
Token usage per model
Token usage per workflow
\`\`\`

This helps answer:

> Why did our AI application's monthly model bill increase?

---

# 49. Latency Optimization with Traces

Suppose:

\`\`\`text
Total latency = 7 seconds
\`\`\`

Trace:

\`\`\`text
Retriever       200ms
LLM #1          1.5s
Tool            400ms
LLM #2          1.2s
Reranker        500ms
LLM #3          3.2s
\`\`\`

Now the optimization target is obvious:

\`\`\`text
LLM #3
\`\`\`

You might investigate:

\`\`\`text
Why is this call taking 3.2 seconds?
\`\`\`

Without tracing, you only know:

\`\`\`text
API = 7 seconds
\`\`\`

---

# 50. Debugging Prompt Problems

Suppose your prompt template is:

\`\`\`text
You are an assistant.

Context:
{context}

Question:
{question}
\`\`\`

But \`{context}\` contains:

\`\`\`text
20 large documents
\`\`\`

The trace lets you inspect the actual rendered prompt.

You may discover:

\`\`\`text
Input tokens:
18,500
\`\`\`

Then optimize:

\`\`\`text
20 documents
      ↓
Reranking
      ↓
Top 5 documents
      ↓
4,500 tokens
\`\`\`

This is one of the most practical uses of tracing.

---

# 51. Debugging Tool Calls

Suppose you define:

\`\`\`text
get_customer(customer_id)
\`\`\`

The agent calls:

\`\`\`json
{
  "customer_id": "12345"
}
\`\`\`

But your application expects:

\`\`\`text
integer
\`\`\`

The trace can reveal:

\`\`\`text
Tool input
    ↓
Validation error
\`\`\`

You can then improve:

\`\`\`text
Tool schema
Prompt
Model selection
Validation
\`\`\`

---

# 52. Debugging Agent Loops

Agents can sometimes get stuck:

\`\`\`text
Agent
 ↓
Tool A
 ↓
Agent
 ↓
Tool A
 ↓
Agent
 ↓
Tool A
\`\`\`

A trace makes the loop visible.

You can then investigate:

\`\`\`text
Why is the agent repeatedly choosing Tool A?
\`\`\`

Possible causes:

\`\`\`text
Poor tool description
Missing state
Bad prompt
Tool result ambiguity
Incorrect routing logic
\`\`\`

---

# 53. LangSmith and Structured Output

Suppose your application expects:

\`\`\`python
class Customer(BaseModel):
    name: str
    age: int
\`\`\`

but the model returns invalid data.

The trace can show:

\`\`\`text
LLM Output
     ↓
Structured Output Parser
     ↓
Validation Error
\`\`\`

This helps you determine whether the problem is:

\`\`\`text
Model output
\`\`\`

or:

\`\`\`text
Schema / parsing
\`\`\`

---

# 54. LangSmith and RAG

A RAG trace can be thought of as:

\`\`\`text
Trace
│
├── User Query
│
├── Query Embedding
│
├── Retriever
│   ├── Document 1
│   ├── Document 2
│   └── Document 3
│
├── Prompt
│
├── LLM
│
└── Answer
\`\`\`

This gives you visibility into the entire RAG pipeline.

---

# 55. LangSmith and Agentic RAG

Now imagine:

\`\`\`text
User
 ↓
Agent
 ↓
Determine whether search is needed
 ↓
Retriever
 ↓
Documents
 ↓
LLM
 ↓
Tool
 ↓
LLM
 ↓
Answer
\`\`\`

A trace can capture the whole workflow.

This is where observability becomes essential.

---

# 56. LangSmith and LangGraph State

LangGraph applications are stateful.

For example:

\`\`\`text
State
{
    messages: [...],
    customer_id: 123,
    retrieved_documents: [...],
    approval_required: true
}
\`\`\`

The graph might execute:

\`\`\`text
START
  ↓
Classify
  ↓
Retrieve
  ↓
Generate
  ↓
Human Approval
  ↓
Execute
  ↓
END
\`\`\`

Tracing helps you inspect how the application moved through this workflow.

---

# 57. Human-in-the-Loop

Suppose an agent wants to perform:

\`\`\`text
Delete production database record
\`\`\`

Your architecture may require:

\`\`\`text
Agent
 ↓
Decision
 ↓
Human Approval
 ↓
Tool
\`\`\`

Observability should capture:

\`\`\`text
Agent decision
 ↓
Approval request
 ↓
Human decision
 ↓
Tool execution
\`\`\`

This becomes important for auditing high-risk workflows.

---

# 58. Custom Application Logic

You don't have to limit observability to LangChain components.

A real application might contain:

\`\`\`text
FastAPI
 ↓
Authentication
 ↓
Business Logic
 ↓
LangGraph
 ↓
LangChain
 ↓
Database
\`\`\`

You want enough tracing around important application boundaries to understand the complete request.

Conceptually:

\`\`\`text
API Request
   |
   v
Application Service
   |
   v
AI Workflow
   |
   v
External Services
\`\`\`

---

# 59. Trace Hierarchy

A useful mental model is a tree.

\`\`\`text
Request
│
└── AI Workflow
    │
    ├── Classifier
    │   └── LLM
    │
    ├── Retrieval
    │   ├── Embedding
    │   └── Vector Search
    │
    ├── Generation
    │   └── LLM
    │
    └── Tool
        └── Database
\`\`\`

This is far more informative than:

\`\`\`text
INFO request completed
\`\`\`

---

# 60. Evaluation + Tracing Together

The real power comes from combining both.

Tracing tells you:

\`\`\`text
What happened?
\`\`\`

Evaluation tells you:

\`\`\`text
Was it good?
\`\`\`

Together:

\`\`\`text
                 AI Application
                       |
          +------------+------------+
          |                         |
          v                         v
       Tracing                  Evaluation
          |                         |
          v                         v
      Execution                 Quality
          |                         |
          +------------+------------+
                       |
                       v
                 Improvement
\`\`\`

---

# 61. The LLM Application Development Loop

A mature workflow looks like:

\`\`\`text
                    ┌──────────────┐
                    │    Build    │
                    └──────┬───────┘
                           ↓
                    ┌──────────────┐
                    │    Trace     │
                    └──────┬───────┘
                           ↓
                    ┌──────────────┐
                    │   Evaluate   │
                    └──────┬───────┘
                           ↓
                    ┌──────────────┐
                    │   Analyze    │
                    └──────┬───────┘
                           ↓
                    ┌──────────────┐
                    │    Improve   │
                    └──────┬───────┘
                           |
                           └──────────→ Build
\`\`\`

This feedback loop is one of the most important ideas in production GenAI engineering.

---

# 62. LangSmith for Regression Testing

Suppose you have a production RAG application.

You change:

\`\`\`text
Chunk size
Embedding model
Retriever
Prompt
LLM
\`\`\`

Any of these can change behavior.

You should run your evaluation dataset again.

\`\`\`text
Before change
    ↓
Evaluation
    ↓
Scores

After change
    ↓
Evaluation
    ↓
Scores
\`\`\`

Compare:

\`\`\`text
                    Before    After

Correctness           91%       94%
Groundedness          96%       97%
Retrieval Recall      88%       92%
Latency               1.8s      2.1s
\`\`\`

Now you can make an informed decision.

---

# 63. Experiment Tracking

An experiment can represent:

\`\`\`text
Application Version
+
Dataset
+
Configuration
+
Evaluation Results
\`\`\`

For example:

\`\`\`text
Experiment A
-------------
Model: model-A
Chunk size: 500
Top K: 5
Prompt: v1

Score: 0.84
\`\`\`

Experiment B:

\`\`\`text
Model: model-A
Chunk size: 700
Top K: 5
Prompt: v2

Score: 0.89
\`\`\`

Now you have measurable evidence.

---

# 64. Why This Matters for RAG

RAG has many configurable variables:

\`\`\`text
Chunk size
Chunk overlap
Embedding model
Vector database
Top K
Metadata filters
Reranker
Prompt
LLM
Temperature
\`\`\`

Changing any one of them can affect quality.

LangSmith provides a useful environment for comparing these changes against datasets and traces.

---

# 65. A Production RAG Development Strategy

A practical process is:

### Step 1

Build a basic RAG system.

\`\`\`text
Documents
 ↓
Embeddings
 ↓
Vector DB
 ↓
Retriever
 ↓
LLM
\`\`\`

### Step 2

Enable tracing.

\`\`\`text
RAG
 ↓
LangSmith
\`\`\`

### Step 3

Collect representative questions.

\`\`\`text
Dataset
\`\`\`

### Step 4

Evaluate.

\`\`\`text
Retrieval
+
Generation
\`\`\`

### Step 5

Improve retrieval.

\`\`\`text
Chunking
Top K
Metadata
Reranking
\`\`\`

### Step 6

Improve generation.

\`\`\`text
Prompt
Model
Context formatting
\`\`\`

### Step 7

Deploy.

\`\`\`text
Production
 ↓
LangSmith monitoring
\`\`\`

---

# 66. LangSmith in a Production Architecture

A realistic architecture could look like:

\`\`\`text
                       Users
                         |
                         v
                    Next.js App
                         |
                         v
                    FastAPI API
                         |
                         v
                  AI Application
                         |
             +-----------+-----------+
             |           |           |
             v           v           v
          LangGraph   Retriever    Tools
             |           |           |
             v           v           v
            LLM      Vector DB     APIs
             |
             |
             +----------------------+
                                    |
                                    v
                               LangSmith
                                    |
                 +------------------+------------------+
                 |                  |                  |
                 v                  v                  v
              Traces            Evaluation         Monitoring
\`\`\`

LangSmith sits beside your application rather than being the core execution engine.

---

# 67. Self-Hosted LangSmith

LangSmith also has deployment options beyond the hosted service.

For example, the official documentation describes self-hosting LangSmith on infrastructure such as Azure AKS using Terraform and Helm. A production-oriented deployment can involve PostgreSQL, Redis, object storage, Kubernetes, ingress, and other supporting infrastructure.

Conceptually:

\`\`\`text
                   Your Cloud
                       |
                       v
                     AKS
                       |
              ┌────────┴────────┐
              |                 |
              v                 v
         LangSmith          Supporting
          Services          Infrastructure
                                |
                    +-----------+-----------+
                    |           |           |
                 Postgres     Redis       Storage
\`\`\`

This is a significantly more operationally complex option than using the hosted platform.

---

# 68. When Would You Self-Host?

Self-hosting can make sense when you have requirements around:

\`\`\`text
Data residency
Network isolation
Enterprise infrastructure
Security controls
Internal deployment requirements
Operational ownership
\`\`\`

But self-hosting also means you own more infrastructure.

You need to manage:

\`\`\`text
Kubernetes
Database
Redis
Storage
TLS
Networking
Backups
Upgrades
Scaling
Monitoring
Security
\`\`\`

Therefore:

> Do not self-host simply because you can. Choose it when your requirements justify the operational cost.

---

# 69. What LangSmith Does Not Automatically Solve

LangSmith does not automatically guarantee:

\`\`\`text
Correct answers
No hallucinations
Good RAG retrieval
Secure tools
Correct agent behavior
Low cost
Low latency
\`\`\`

It gives you visibility and evaluation mechanisms.

You still need good engineering.

For example:

\`\`\`text
Bad RAG
   ↓
LangSmith
   ↓
You can see that it is bad
\`\`\`

LangSmith does not automatically redesign the RAG system for you.

---

# 70. Common Beginner Mistakes

## Mistake 1: Treating tracing as logging

Tracing is more useful when it represents the relationship between operations.

\`\`\`text
Agent
 ├── LLM
 ├── Retriever
 └── Tool
\`\`\`

rather than unrelated log messages.

---

## Mistake 2: Only monitoring production errors

You should also inspect successful requests.

A successful response can still be:

\`\`\`text
Incorrect
Expensive
Slow
Poorly grounded
\`\`\`

---

## Mistake 3: Evaluating only final answers

For RAG:

\`\`\`text
Final answer
\`\`\`

is not enough.

Evaluate:

\`\`\`text
Retrieval
+
Generation
\`\`\`

---

## Mistake 4: No evaluation dataset

Without representative test cases, you cannot reliably determine whether a change improved the system.

---

## Mistake 5: Ignoring sensitive data

Tracing can expose the same information your application processes.

Treat observability data as production data.

---

# 71. LangSmith vs Traditional APM

Traditional APM tools monitor:

\`\`\`text
CPU
Memory
HTTP
Database
Latency
Errors
\`\`\`

These are still important.

LLM applications additionally need:

\`\`\`text
Prompt
Model
Tokens
Tool calls
Retrieved context
Agent decisions
Evaluation scores
\`\`\`

Therefore the two categories complement each other.

\`\`\`text
                 Production AI
                       |
          +------------+------------+
          |                         |
          v                         v
      Traditional APM          LangSmith
          |                         |
          v                         v
      Infrastructure          AI behavior
\`\`\`

A production AI system may need both.

---

# 72. APM + LangSmith

For example:

\`\`\`text
                    User
                      |
                      v
                   API
                      |
          +-----------+-----------+
          |                       |
          v                       v
      Datadog/APM             LangSmith
          |                       |
          v                       v
Infrastructure              LLM behavior
Database                    Retrieval
Network                     Tools
CPU                         Evaluation
Memory                      Tokens
\`\`\`

This gives you a much more complete operational picture.

---

# 73. A Useful Debugging Example

Imagine a customer asks:

\`\`\`text
Why was my refund rejected?
\`\`\`

The application returns:

\`\`\`text
Your refund was rejected because it was submitted
after 30 days.
\`\`\`

The customer complains that this is incorrect.

You inspect the LangSmith trace:

\`\`\`text
Trace
└── Customer Support Agent
    │
    ├── Customer Lookup
    │   └── Customer #123
    │
    ├── Policy Retrieval
    │   └── Refund Policy 2025
    │
    ├── LLM
    │   └── "Refunds after 30 days are rejected."
    │
    └── Answer
\`\`\`

You discover:

\`\`\`text
Retrieved policy:
2025 version
\`\`\`

But the current policy is:

\`\`\`text
2026 version
\`\`\`

The problem is not the model.

The actual problem is:

\`\`\`text
Stale retrieval data
\`\`\`

This is exactly the kind of issue observability helps expose.

---

# 74. LangSmith + CI/CD

You can integrate evaluation into your development process.

Conceptually:

\`\`\`text
Developer
   |
   v
Git Push
   |
   v
CI Pipeline
   |
   v
Run Evaluation Dataset
   |
   v
Evaluation Score
   |
   +---- Pass → Deploy
   |
   +---- Fail → Stop
\`\`\`

For example:

\`\`\`text
Minimum correctness = 90%

Current version = 94%
\`\`\`

Deployment can continue.

But:

\`\`\`text
Current version = 83%
\`\`\`

The pipeline can fail.

This brings software engineering discipline into LLM application development.

---

# 75. LLM Application CI/CD

A mature pipeline can look like:

\`\`\`text
Code
 |
 v
Unit Tests
 |
 v
Integration Tests
 |
 v
RAG Evaluation
 |
 v
Agent Evaluation
 |
 v
Security Checks
 |
 v
Build Container
 |
 v
Deploy
\`\`\`

This is much stronger than:

\`\`\`text
Code
 ↓
Deploy
\`\`\`

---

# 76. LangSmith as an AI Development Platform

The easiest way to remember LangSmith is:

\`\`\`text
                   LangSmith
                       |
        +--------------+--------------+
        |              |              |
        v              v              v
    Observe         Evaluate        Improve
        |              |              |
        v              v              v
     Traces         Datasets       Experiments
\`\`\`

The goal is not merely to see logs.

The goal is to create a feedback loop for improving AI systems.

---

# 77. The Relationship Between the Main Tools

A useful mental model for the modern LangChain ecosystem is:

\`\`\`text
                 AI Application
                       |
              ┌────────┴────────┐
              |                 |
         LangChain          LangGraph
              |                 |
       Building blocks      Workflows
              |                 |
              +--------+--------+
                       |
                       v
                  LangSmith
                       |
        +--------------+--------------+
        |              |              |
      Trace          Evaluate       Monitor
\`\`\`

### LangChain

Provides components.

\`\`\`text
Model
Prompt
Retriever
Tool
Parser
\`\`\`

### LangGraph

Provides orchestration.

\`\`\`text
State
Nodes
Edges
Loops
Human approval
Persistence
\`\`\`

### LangSmith

Provides observability and evaluation.

\`\`\`text
Traces
Datasets
Experiments
Evaluation
Monitoring
\`\`\`

---

# 78. The Most Important Concepts to Learn

If you are learning LangSmith for a GenAI engineering role, focus on these concepts:

\`\`\`text
1. Traces
2. Runs
3. Projects
4. Metadata
5. Tags
6. Inputs / Outputs
7. Token usage
8. Latency
9. Errors
10. Datasets
11. Evaluators
12. LLM-as-a-judge
13. RAG evaluation
14. Experiments
15. Production monitoring
16. Privacy / redaction
17. LangGraph tracing
18. CI/CD evaluation
\`\`\`

You do not need to memorize every API.

Understand what problem each concept solves.

---

# 79. The Complete Mental Model

Think of a production GenAI system like this:

\`\`\`text
                         USER
                           |
                           v
                     APPLICATION
                           |
                           v
                    LangChain /
                    LangGraph
                           |
          +----------------+----------------+
          |                |                |
          v                v                v
         LLM            Retrieval          Tools
          |                |                |
          +----------------+----------------+
                           |
                           v
                        Answer
                           |
                           v
                         USER


              OBSERVABILITY / EVALUATION
                           |
                           v
                       LangSmith
                           |
          +----------------+----------------+
          |                |                |
          v                v                v
        Traces          Datasets        Evaluation
          |                |                |
          +----------------+----------------+
                           |
                           v
                       Improvement
\`\`\`

---

# 80. Final Mental Model

There are four different questions you should ask when building an AI application.

### Question 1

> **Can I build the workflow?**

Use:

\`\`\`text
LangChain
LangGraph
\`\`\`

### Question 2

> **What happened during execution?**

Use:

\`\`\`text
LangSmith Tracing
\`\`\`

### Question 3

> **Was the answer actually good?**

Use:

\`\`\`text
LangSmith Evaluation
\`\`\`

### Question 4

> **Did the latest version improve the application?**

Use:

\`\`\`text
Datasets
+
Experiments
+
Evaluation
\`\`\`

Therefore:

\`\`\`text
                  GenAI Engineering
                         |
        +----------------+----------------+
        |                |                |
        v                v                v
      Build            Observe          Evaluate
        |                |                |
        v                v                v
   LangChain/         LangSmith        LangSmith
   LangGraph          Tracing          Evaluation
\`\`\`

The most important idea is this:

> **LangSmith turns an LLM application from a black box into an observable and measurable system.**

For a simple chatbot, you might survive without it.

For a production RAG or agentic system with multiple LLM calls, retrieval, tools, state, retries, and real users, observability and evaluation become much more important.

The engineering loop becomes:

\`\`\`text
Build
  ↓
Trace
  ↓
Debug
  ↓
Evaluate
  ↓
Experiment
  ↓
Improve
  ↓
Deploy
  ↓
Monitor
  ↓
Repeat
\`\`\`

That feedback loop is the real value of LangSmith.
`,nx=`---
id: retrieval-augmented-generation-rag
title: "Retrieval-Augmented Generation (RAG): How It Works"
category: Generative AI
readTime: 8 min read
date: Feb 2025
author: Sanket Kakad
excerpt: Understanding how Retrieval-Augmented Generation (RAG) combines information retrieval with large language models to deliver accurate, context-aware, and up-to-date AI-generated responses.
---

## 1. What is RAG?

**RAG stands for Retrieval-Augmented Generation.**

It is an architecture that combines:

1. **Retrieval**: Find relevant information from an external knowledge source.
2. **Augmentation**: Add that information to the prompt sent to the LLM.
3. **Generation**: Let the LLM generate an answer using the retrieved information.

The basic idea is:

\`\`\`text
User Question
      |
      v
   Retrieve
      |
      v
Relevant Documents
      |
      v
Add to Prompt
      |
      v
      LLM
      |
      v
    Answer
\`\`\`

Instead of asking an LLM to answer entirely from what it learned during training, RAG gives the LLM relevant information at runtime.

---

# 2. Why Do We Need RAG?

Consider an LLM such as GPT.

It has learned a huge amount of information during training, but it has several limitations.

### Problem 1: Private data

Suppose your company has this document:

\`\`\`text
Company Leave Policy

Employees receive 25 days of annual leave.

Employees can carry forward a maximum of 5 unused days
to the following year.
\`\`\`

The LLM normally does not know this information.

RAG allows us to keep the information in an external database and retrieve it when needed.

---

### Problem 2: Frequently changing information

Imagine a company policy changes:

\`\`\`text
Old policy: 25 annual leave days
New policy: 28 annual leave days
\`\`\`

You do not want to retrain an LLM every time a document changes.

With RAG, you simply update the knowledge base.

---

### Problem 3: Hallucination

An LLM can sometimes produce a plausible answer even when it does not know the answer.

With RAG:

\`\`\`text
User Question
      |
      v
Retrieve company policy
      |
      v
"Employees receive 28 days."
      |
      v
LLM
      |
      v
"Employees receive 28 days of annual leave."
\`\`\`

The retrieved document provides grounding information.
`;function rx(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var ix=rx();function ax(e){ix=e}var ox={exec:()=>null};function sx(e){let t=[];return n=>{let r=Math.max(0,Math.min(3,n-1)),i=t[r];return i||(i=e(r),t[r]=i),i}}function cx(e,t=``){let n=typeof e==`string`?e:e.source,r={replace:(e,t)=>{let i=typeof t==`string`?t:t.source;return i=i.replace(ux.caret,`$1`),n=n.replace(e,i),r},getRegex:()=>new RegExp(n,t)};return r}var lx=((e=``)=>{try{return!!RegExp(`(?<=1)(?<!1)`+e)}catch{return!1}})(),ux={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:sx(e=>RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:sx(e=>RegExp(`^ {0,${e}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:sx(e=>RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),headingBeginRegex:sx(e=>RegExp(`^ {0,${e}}#`)),htmlBeginRegex:sx(e=>RegExp(`^ {0,${e}}<(?:[a-z].*>|!--)`,`i`)),blockquoteBeginRegex:sx(e=>RegExp(`^ {0,${e}}>`))},dx=/^(?:[ \t]*(?:\n|$))+/,fx=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,px=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,mx=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,hx=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,gx=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,_x=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,vx=cx(_x).replace(/bull/g,gx).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex(),yx=cx(_x).replace(/bull/g,gx).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),bx=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,xx=/^[^\n]+/,Sx=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Cx=cx(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,Sx).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),wx=cx(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,gx).getRegex(),Tx=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,Ex=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Dx=cx(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,Ex).replace(`tag`,Tx).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Ox=e=>cx(bx).replace(`hr`,mx).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace(`list`,e).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,Tx).getRegex(),kx=Ox(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),Ax=Ox(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),jx={blockquote:cx(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace(`paragraph`,Ax).getRegex(),code:fx,def:Cx,fences:px,heading:hx,hr:mx,html:Dx,lheading:vx,list:wx,newline:dx,paragraph:kx,table:ox,text:xx},Mx=cx(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,mx).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,Tx).getRegex(),Nx={...jx,lheading:yx,table:Mx,paragraph:cx(bx).replace(`hr`,mx).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,Mx).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,Tx).getRegex()},Px={...jx,html:cx(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,Ex).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:ox,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:cx(bx).replace(`hr`,mx).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,vx).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()},Fx=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Ix=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Lx=/^( {2,}|\\)\n(?!\s*$)/,Rx=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,zx=/[\p{P}\p{S}]/u,Bx=/[\s\p{P}\p{S}]/u,Vx=/[^\s\p{P}\p{S}]/u,Hx=cx(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,Bx).getRegex(),Ux=/[\p{Pi}\p{Ps}"']/u,Wx=/(?!~)[\p{P}\p{S}]/u,Gx=/(?!~)[\s\p{P}\p{S}]/u,Kx=/(?:[^\s\p{P}\p{S}]|~)/u,qx=cx(/link|precode-code|html/,`g`).replace(`link`,/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`,lx?"(?<!`)()":"(^^|[^`])").replace(`code`,/(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`,/<(?! )[^<>]*?>/).getRegex(),Jx=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,Yx=cx(Jx,`u`).replace(/punct/g,zx).getRegex(),Xx=cx(Jx,`u`).replace(/punct/g,Wx).getRegex(),Zx=cx(/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/,`u`).replace(/openQuote/g,Ux).replace(/punct/g,zx).getRegex(),Qx=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,$x=cx(Qx,`gu`).replace(/notPunctSpace/g,Vx).replace(/punctSpace/g,Bx).replace(/punct/g,zx).getRegex(),eS=cx(Qx,`gu`).replace(/notPunctSpace/g,Kx).replace(/punctSpace/g,Gx).replace(/punct/g,Wx).getRegex(),tS=cx(`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,Vx).replace(/punctSpace/g,Bx).replace(/punct/g,zx).getRegex(),nS=cx(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,Vx).replace(/punctSpace/g,Bx).replace(/punct/g,zx).getRegex(),rS=cx(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,Vx).replace(/punctSpace/g,Bx).replace(/punct/g,zx).getRegex(),iS=cx(/^~~?(?:((?!~)punct)|[^\s~])/,`u`).replace(/punct/g,zx).getRegex(),aS=cx(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,Vx).replace(/punctSpace/g,Bx).replace(/punct/g,zx).getRegex(),oS=cx(/\\(punct)/,`gu`).replace(/punct/g,zx).getRegex(),sS=cx(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),cS=cx(Ex).replace(`(?:-->|$)`,`-->`).getRegex(),lS=cx(`^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,cS).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),uS=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,dS=cx(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace(`label`,uS).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),fS=cx(/^!?\[(label)\]\[(ref)\]/).replace(`label`,uS).replace(`ref`,Sx).getRegex(),pS=cx(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,Sx).getRegex(),mS=cx(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,fS).replace(`nolink`,pS).getRegex(),hS=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,gS={_backpedal:ox,anyPunctuation:oS,autolink:sS,blockSkip:qx,br:Lx,code:Ix,del:ox,delLDelim:ox,delRDelim:ox,emStrongLDelim:Yx,emStrongRDelimAst:$x,emStrongRDelimUnd:nS,escape:Fx,link:dS,nolink:pS,punctuation:Hx,reflink:fS,reflinkSearch:mS,tag:lS,text:Rx,url:ox},_S={...gS,emStrongLDelim:Zx,emStrongRDelimAst:tS,emStrongRDelimUnd:rS,link:cx(/^!?\[(label)\]\((.*?)\)/).replace(`label`,uS).getRegex(),reflink:cx(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,uS).getRegex()},vS={...gS,emStrongRDelimAst:eS,emStrongLDelim:Xx,delLDelim:iS,delRDelim:aS,url:cx(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`protocol`,hS).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:cx(/^(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace(`protocol`,hS).getRegex()},yS={...vS,br:cx(Lx).replace(`{2,}`,`*`).getRegex(),text:cx(vS.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()},bS={normal:jx,gfm:Nx,pedantic:Px},xS={normal:gS,gfm:vS,breaks:yS,pedantic:_S},SS={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},CS=e=>SS[e];function wS(e,t){if(t){if(ux.escapeTest.test(e))return e.replace(ux.escapeReplace,CS)}else if(ux.escapeTestNoEncode.test(e))return e.replace(ux.escapeReplaceNoEncode,CS);return e}function TS(e){try{e=encodeURI(e).replace(ux.percentDecode,`%`)}catch{return null}return e}function ES(e,t){let n=e.replace(ux.findPipe,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`}).split(ux.splitPipe),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t){if(n.length>t)n.splice(t);else for(;n.length<t;)n.push(``)}for(;r<n.length;r++)n[r]=n[r].trim().replace(ux.slashPipe,`|`);return n}function DS(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,r-i)}function OS(e){let t=e.split(`
`),n=t.length-1;for(;n>=0&&ux.blankLine.test(t[n]);)n--;return t.length-n<=2?e:t.slice(0,n+1).join(`
`)}function kS(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]===`\\`)r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function AS(e,t=0){let n=t,r=``;for(let t of e)if(t===`	`){let e=4-n%4;r+=` `.repeat(e),n+=e}else r+=t,n++;return r}function jS(e,t,n,r,i){let a=t.href,o=t.title||null,s=e[1].replace(i.other.outputLinkReplace,`$1`);r.state.inLink=!0;let c={type:e[0].charAt(0)===`!`?`image`:`link`,raw:n,href:a,title:o,text:s,tokens:r.inlineTokens(s)};return r.state.inLink=!1,c}function MS(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(e=>{let t=e.match(n.other.beginningSpace);if(t===null)return e;let[r]=t;return r.length>=i.length?e.slice(i.length):e}).join(`
`)}var NS=class{options;rules;lexer;constructor(e){this.options=e||ix}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=this.options.pedantic?t[0]:OS(t[0]);return{type:`code`,raw:e,codeBlockStyle:`indented`,text:e.replace(this.rules.other.codeRemoveIndent,``)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=MS(e,t[3]||``,this.rules);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=DS(e,`#`);(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:`heading`,raw:DS(t[0],`
`),depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:`hr`,raw:DS(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=DS(t[0],`
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
`);continue}}return{type:`blockquote`,raw:n,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),r=n.length>1,i={type:`list`,raw:``,ordered:r,start:r?+n.slice(0,-1):``,loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:`[*+-]`);let a=this.rules.other.listItemRegex(n),o=!1;for(;e;){let n=!1,r=``,s=``;if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;r=t[0],e=e.substring(r.length);let c=AS(t[2].split(`
`,1)[0],t[1].length),l=e.split(`
`,1)[0],u=!c.trim(),d=0;if(this.options.pedantic?(d=2,s=c.trimStart()):u?d=t[1].length+1:(d=c.search(this.rules.other.nonSpaceChar),d=d>4?1:d,s=c.slice(d),d+=t[1].length),u&&this.rules.other.blankLine.test(l)&&(r+=l+`
`,e=e.substring(l.length+1),n=!0),!n){let t=this.rules.other.nextBulletRegex(d),n=this.rules.other.hrRegex(d),i=this.rules.other.fencesBeginRegex(d),a=this.rules.other.headingBeginRegex(d),o=this.rules.other.htmlBeginRegex(d),f=this.rules.other.blockquoteBeginRegex(d);for(;e;){let p=e.split(`
`,1)[0],m;if(l=p,this.options.pedantic?(l=l.replace(this.rules.other.listReplaceNesting,`  `),m=l):m=l.replace(this.rules.other.tabCharGlobal,`    `),i.test(l)||a.test(l)||o.test(l)||f.test(l)||t.test(l)||n.test(l))break;if(m.search(this.rules.other.nonSpaceChar)>=d||!l.trim())s+=`
`+m.slice(d);else{if(u||c.replace(this.rules.other.tabCharGlobal,`    `).search(this.rules.other.nonSpaceChar)>=4||i.test(c)||a.test(c)||n.test(c))break;s+=`
`+l}u=!l.trim(),r+=p+`
`,e=e.substring(p.length+1),c=m.slice(d)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(r)&&(o=!0)),i.items.push({type:`list_item`,raw:r,task:!!this.options.gfm&&this.rules.other.listIsTask.test(s),loose:!1,text:s,tokens:[]}),i.raw+=r}let s=i.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let e of i.items){this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]);let t=e.tokens[0];if(e.task&&(t?.type===`text`||t?.type===`paragraph`)){e.text=e.text.replace(this.rules.other.listReplaceTask,``),t.raw=t.raw.replace(this.rules.other.listReplaceTask,``),t.text=t.text.replace(this.rules.other.listReplaceTask,``);for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,``);break}let n=this.rules.other.listTaskCheckbox.exec(e.raw);if(n){let t={type:`checkbox`,raw:n[0]+` `,checked:n[0]!==`[ ]`};e.checked=t.checked,i.loose?e.tokens[0]&&[`paragraph`,`text`].includes(e.tokens[0].type)&&`tokens`in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=t.raw+e.tokens[0].raw,e.tokens[0].text=t.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(t)):e.tokens.unshift({type:`paragraph`,raw:t.raw,text:t.raw,tokens:[t]}):e.tokens.unshift(t)}}else e.task&&=!1;if(!i.loose){let t=e.tokens.filter(e=>e.type===`space`);i.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}}if(i.loose)for(let e of i.items){e.loose=!0;for(let t of e.tokens)t.type===`text`&&(t.type=`paragraph`)}return i}}html(e){let t=this.rules.block.html.exec(e);if(t){let e=OS(t[0]);return{type:`html`,block:!0,raw:e,pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:e}}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal,` `),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:e,raw:DS(t[0],`
`),href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=ES(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],a={type:`table`,raw:DS(t[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push(`right`):this.rules.other.tableAlignCenter.test(e)?a.align.push(`center`):this.rules.other.tableAlignLeft.test(e)?a.align.push(`left`):a.align.push(null);for(let e=0;e<n.length;e++)a.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:a.align[e]});for(let e of i)a.rows.push(ES(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let e=t[1].trim();return{type:`heading`,raw:DS(t[0],`
`),depth:t[2].charAt(0)===`=`?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=DS(e.slice(0,-1),`\\`);if((e.length-t.length)%2==0)return}else{let e=kS(t[2],`()`);if(e===-2)return;if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let n=t[2],r=``;if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):``;return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(n=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?n.slice(1):n.slice(1,-1)),jS(t,{href:n&&n.replace(this.rules.inline.anyPunctuation,`$1`),title:r&&r.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=t[(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal,` `).toLowerCase()];if(!e){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return jS(n,e,n[0],this.lexer,this.rules)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let i=[...r[0]].length-1,a,o,s=i,c=0,l=r[0][0],u=n===l,d=l===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(d.lastIndex=0,t=t.slice(-1*e.length+i);(r=d.exec(t))!==null;){if(a=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!a)continue;if(o=[...a].length,r[3]||r[4]){s+=o;continue}if(r[5]||r[6]){if(i%3&&!((i+o)%3)){c+=o;continue}if(u)break}if(s-=o,s>0)continue;o=Math.min(o,o+s+c);let t=[...r[0]][0].length,n=e.slice(0,i+r.index+t+o);if(Math.min(i,o)%2){let e=n.slice(1,-1);return{type:`em`,raw:n,text:e,tokens:this.lexer.inlineTokens(e)}}let l=n.slice(2,-2);return{type:`strong`,raw:n,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal,` `),n=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&r&&(e=e.substring(1,e.length-1)),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e,t,n=``){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=this.rules.inline.delRDelim;for(s.lastIndex=0,t=t.slice(-1*e.length+n);(r=s.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(a=[...i].length,a!==n))continue;if(r[3]||r[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let t=[...r[0]][0].length,s=e.slice(0,n+r.index+t+a),c=s.slice(n,-n);return{type:`del`,raw:s,text:c,tokens:this.lexer.inlineTokens(c)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return t[2]===`@`?(e=t[1],n=`mailto:`+e):(e=t[1],n=e),{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if(t[2]===`@`)e=t[0],n=`mailto:`+e;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);e=t[0],n=t[1]===`www.`?`http://`+t[0]:t[0]}return{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:t[0],escaped:e}}}},PS=class e{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||ix,this.options.tokenizer=this.options.tokenizer||new NS,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:ux,block:bS.normal,inline:xS.normal};this.options.pedantic?(t.block=bS.pedantic,t.inline=xS.pedantic):this.options.gfm&&(t.block=bS.gfm,t.inline=this.options.breaks?xS.breaks:xS.gfm),this.tokenizer.rules=t}static get rules(){return{block:bS,inline:xS}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){e=e.replace(ux.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(ux.tabCharGlobal,`    `).replace(ux.spaceLine,``));let r=1/0;for(;e;){if(e.length<r)r=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let i;if(this.options.extensions?.block?.some(n=>(i=n.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let n=t.at(-1);i.raw.length===1&&n!==void 0?n.raw+=`
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
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let n=e;if(this.tokens.links){let e=Object.keys(this.tokens.links);e.length>0&&(n=n.replace(this.tokenizer.rules.inline.reflinkSearch,t=>e.includes(t.slice(t.lastIndexOf(`[`)+1,-1))?`[`+`a`.repeat(t.length-2)+`]`:t))}n=n.replace(this.tokenizer.rules.inline.anyPunctuation,`++`),n=n.replace(this.tokenizer.rules.inline.blockSkip,(e,t,n)=>{let r=n?n.length:0;return e.slice(0,r)+`[`+`a`.repeat(e.length-r-2)+`]`}),n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let r=!1,i=``,a=1/0;for(;e;){if(e.length<a)a=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}r||(i=``),r=!1;let o;if(this.options.extensions?.inline?.some(n=>(o=n.call({lexer:this},e,t))?(e=e.substring(o.raw.length),t.push(o),!0):!1))continue;if(o=this.tokenizer.escape(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.tag(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.link(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(o.raw.length);let n=t.at(-1);o.type===`text`&&n?.type===`text`?(n.raw+=o.raw,n.text+=o.text):t.push(o);continue}if(o=this.tokenizer.emStrong(e,n,i)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.codespan(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.br(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.del(e,n,i)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.autolink(e)){e=e.substring(o.raw.length),t.push(o);continue}if(!this.state.inLink&&(o=this.tokenizer.url(e))){e=e.substring(o.raw.length),t.push(o);continue}let s=e;if(this.options.extensions?.startInline){let t=1/0,n=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(s=e.substring(0,t+1))}if(o=this.tokenizer.inlineText(s)){e=e.substring(o.raw.length),o.raw.slice(-1)!==`_`&&(i=o.raw.slice(-1)),r=!0;let n=t.at(-1);n?.type===`text`?(n.raw+=o.raw,n.text+=o.text):t.push(o);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return t}infiniteLoopError(e){let t=`Infinite loop on byte: `+e;if(this.options.silent)console.error(t);else throw Error(t)}},FS=class{options;parser;constructor(e){this.options=e||ix}space(e){return``}code({text:e,lang:t,escaped:n}){let r=(t||``).match(ux.notSpaceStart)?.[0],i=e.replace(ux.endingNewline,``)+`
`;return r?`<pre><code class="language-`+wS(r)+`">`+(n?i:wS(i,!0))+`</code></pre>
`:`<pre><code>`+(n?i:wS(i,!0))+`</code></pre>
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
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${wS(e,!0)}</code>`}br(e){return`<br>`}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let r=this.parser.parseInline(n),i=TS(e);if(i===null)return r;e=i;let a=`<a href="`+e+`"`;return t&&(a+=` title="`+wS(t)+`"`),a+=`>`+r+`</a>`,a}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=TS(e);if(i===null)return wS(n);e=i;let a=`<img src="${e}" alt="${wS(n)}"`;return t&&(a+=` title="${wS(t)}"`),a+=`>`,a}text(e){return`tokens`in e&&e.tokens?this.parser.parseInline(e.tokens):`escaped`in e&&e.escaped?e.text:wS(e.text)}},IS=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return``+e}image({text:e}){return``+e}br(){return``}checkbox({raw:e}){return e}},LS=class e{options;renderer;textRenderer;constructor(e){this.options=e||ix,this.options.renderer=this.options.renderer||new FS,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new IS}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e){this.renderer.parser=this;let t=``;for(let n=0;n<e.length;n++){let r=e[n];if(this.options.extensions?.renderers?.[r.type]){let e=r,n=this.options.extensions.renderers[e.type].call({parser:this},e);if(n!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`checkbox`,`html`,`def`,`paragraph`,`text`].includes(e.type)){t+=n||``;continue}}let i=r;switch(i.type){case`space`:t+=this.renderer.space(i);break;case`hr`:t+=this.renderer.hr(i);break;case`heading`:t+=this.renderer.heading(i);break;case`code`:t+=this.renderer.code(i);break;case`table`:t+=this.renderer.table(i);break;case`blockquote`:t+=this.renderer.blockquote(i);break;case`list`:t+=this.renderer.list(i);break;case`checkbox`:t+=this.renderer.checkbox(i);break;case`html`:t+=this.renderer.html(i);break;case`def`:t+=this.renderer.def(i);break;case`paragraph`:t+=this.renderer.paragraph(i);break;case`text`:t+=this.renderer.text(i);break;default:{let e=`Token with "`+i.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(e!==!1||![`escape`,`html`,`link`,`image`,`checkbox`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(i.type)){n+=e||``;continue}}let a=i;switch(a.type){case`escape`:n+=t.text(a);break;case`html`:n+=t.html(a);break;case`link`:n+=t.link(a);break;case`image`:n+=t.image(a);break;case`checkbox`:n+=t.checkbox(a);break;case`strong`:n+=t.strong(a);break;case`em`:n+=t.em(a);break;case`codespan`:n+=t.codespan(a);break;case`br`:n+=t.br(a);break;case`del`:n+=t.del(a);break;case`text`:n+=t.text(a);break;default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}},RS=class{options;block;constructor(e){this.options=e||ix}static passThroughHooks=new Set([`preprocess`,`postprocess`,`processAllTokens`,`emStrongMask`]);static passThroughHooksRespectAsync=new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?PS.lex:PS.lexInline}provideParser(e=this.block){return e?LS.parse:LS.parseInline}},zS=new class{defaults=rx();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=LS;Renderer=FS;TextRenderer=IS;Lexer=PS;Tokenizer=NS;Hooks=RS;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(n=n.concat(t.call(this,r)),r.type){case`table`:{let e=r;for(let r of e.header)n=n.concat(this.walkTokens(r.tokens,t));for(let r of e.rows)for(let e of r)n=n.concat(this.walkTokens(e.tokens,t));break}case`list`:{let e=r;n=n.concat(this.walkTokens(e.items,t));break}default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let i=e[r].flat(1/0);n=n.concat(this.walkTokens(i,t))}):e.tokens&&(n=n.concat(this.walkTokens(e.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error(`extension name required`);if(`renderer`in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return r===!1&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(`tokenizer`in e){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}`childTokens`in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new FS(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if([`options`,`parser`].includes(n))continue;let r=n,i=e.renderer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n||``}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new NS(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if([`options`,`rules`,`lexer`].includes(n))continue;let r=n,i=e.tokenizer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new RS;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if([`options`,`block`].includes(n))continue;let r=n,i=e.hooks[r],a=t[r];t[r]=RS.passThroughHooks.has(n)?e=>{if(this.defaults.async&&RS.passThroughHooksRespectAsync.has(n))return(async()=>{let n=await i.call(t,e);return a.call(t,n)})();let r=i.call(t,e);return a.call(t,r)}:(...e)=>{if(this.defaults.async)return(async()=>{let n=await i.apply(t,e);return n===!1&&(n=await a.apply(t,e)),n})();let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&(n=n.concat(t.call(this,e))),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return PS.lex(e,t??this.defaults)}parser(e,t){return LS.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},i={...this.defaults,...r},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return a(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(typeof t>`u`||t===null)return a(Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return a(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let n=i.hooks?await i.hooks.preprocess(t):t,r=await(i.hooks?await i.hooks.provideLexer(e):e?PS.lex:PS.lexInline)(n,i),a=i.hooks?await i.hooks.processAllTokens(r):r;i.walkTokens&&await Promise.all(this.walkTokens(a,i.walkTokens));let o=await(i.hooks?await i.hooks.provideParser(e):e?LS.parse:LS.parseInline)(a,i);return i.hooks?await i.hooks.postprocess(o):o})().catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let n=(i.hooks?i.hooks.provideLexer(e):e?PS.lex:PS.lexInline)(t,i);i.hooks&&(n=i.hooks.processAllTokens(n)),i.walkTokens&&this.walkTokens(n,i.walkTokens);let r=(i.hooks?i.hooks.provideParser(e):e?LS.parse:LS.parseInline)(n,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(e){return a(e)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+wS(n.message+``,!0)+`</pre>`;return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}};function BS(e,t){return zS.parse(e,t)}BS.options=BS.setOptions=function(e){return zS.setOptions(e),BS.defaults=zS.defaults,ax(BS.defaults),BS},BS.getDefaults=rx,BS.defaults=ix;function VS(...e){return zS.use(...e),BS.defaults=zS.defaults,ax(BS.defaults),BS}BS.use=VS,BS.walkTokens=function(e,t){return zS.walkTokens(e,t)},BS.parseInline=zS.parseInline,BS.Parser=LS,BS.parser=LS.parse,BS.Renderer=FS,BS.TextRenderer=IS,BS.Lexer=PS,BS.lexer=PS.lex,BS.Tokenizer=NS,BS.Hooks=RS,BS.parse=BS,BS.options,BS.setOptions,BS.walkTokens,BS.parseInline,LS.parse,PS.lex,mg.registerPlugin(Q);function HS(e){if(!e)return{};let t=e.match(/^---[\s\S]*?---/);if(!t)return{};let n=t[0].replace(/---/g,``).trim(),r={};return n.split(`
`).forEach(e=>{let t=e.indexOf(`:`);if(t!==-1){let n=e.slice(0,t).trim(),i=e.slice(t+1).trim();(i.startsWith(`"`)&&i.endsWith(`"`)||i.startsWith(`'`)&&i.endsWith(`'`))&&(i=i.slice(1,-1)),r[n]=i}}),r}var US=Object.assign({"../../public/assets/articles/lang-chain-deepdive.md":$b,"../../public/assets/articles/lang-graph-deepdive.md":ex,"../../public/assets/articles/lang-smith-deepdive.md":tx,"../../public/assets/articles/retrieval-augmented-generation-rag.md":nx});function WS(){let e=[];for(let t in US){let n=US[t],r=t.split(`/`).pop().replace(/\.md$/,``),i=HS(n);e.push({id:i.id||r,filePath:`/assets/articles/${r}.md`,rawText:n,category:i.category||`Generative AI`,readTime:i.readTime||`5 min read`,date:i.date||`2026`,author:i.author||`Sanket Kakad`,title:i.title||r.replace(/-/g,` `),excerpt:i.excerpt||`Technical publication.`})}return e}function GS({theme:e=`dark`}){let t=e===`dark`,[n,r]=(0,_.useState)(WS),[i,a]=(0,_.useState)(()=>n[0]?n[0].id:``),[o,s]=(0,_.useState)(4),[c,l]=(0,_.useState)(``),[u,d]=(0,_.useState)(!1),[f,p]=(0,_.useState)(!1),[m,h]=(0,_.useState)(null);(0,_.useEffect)(()=>{let e=WS();r(e),e.length>0&&!e.some(e=>e.id===i)&&a(e[0].id)},[]);let g=n.find(e=>e.id===i||e.filePath.includes(i))||n[0];(0,_.useEffect)(()=>{let e=()=>{let e=window.location.hash;if(e.startsWith(`#article-`)){let t=e.replace(`#article-`,``),r=n.find(e=>e.id===t||e.filePath.includes(t));r&&(a(r.id),p(!0))}};return e(),window.addEventListener(`hashchange`,e),()=>window.removeEventListener(`hashchange`,e)},[n]),(0,_.useEffect)(()=>{if(!g)return;d(!0);let e=e=>{let t=e.replace(/^---[\s\S]*?---/,``).trim();BS.setOptions({gfm:!0,breaks:!0});let n=BS.parse(t);l(n),d(!1)};g.rawText?e(g.rawText):fetch(g.filePath).then(e=>e.text()).then(t=>e(t)).catch(()=>{l(`<h1>${g.title}</h1><p>${g.excerpt}</p>`),d(!1)})},[i,g]);let v=e=>{a(e),p(!0),window.history.pushState(null,``,`#article-${e}`)},y=()=>{p(!1),window.history.pushState(null,``,`#articles`)},b=(e,t)=>{e&&e.stopPropagation();let n=`${window.location.origin}${window.location.pathname}#article-${t}`;navigator.clipboard.writeText(n),h(t),setTimeout(()=>h(null),2500)};return(0,z.jsxs)(`section`,{id:`articles`,className:`py-24 relative overflow-hidden transition-colors duration-500 ${t?`bg-[#000000] text-[#f5f5f7]`:`bg-[#f5f5f7] text-[#1d1d1f]`}`,children:[(0,z.jsx)(`div`,{className:`absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#0071e3]/10 rounded-full blur-[150px] pointer-events-none`}),(0,z.jsxs)(`div`,{className:`max-w-6xl mx-auto px-6 relative z-10`,children:[(0,z.jsxs)(`div`,{className:`flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6`,children:[(0,z.jsxs)(`div`,{children:[(0,z.jsxs)(`div`,{className:`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border transition-colors ${t?`bg-[#161617] border-[#2c2c2e] text-[#2997ff]`:`bg-[#ffffff] border-[#d2d2d7] text-[#0071e3] shadow-sm`}`,children:[(0,z.jsx)(j,{className:`w-3.5 h-3.5 text-[#0071e3]`}),(0,z.jsx)(`span`,{children:`Markdown Article Library`})]}),(0,z.jsx)(`h2`,{className:`text-3xl sm:text-5xl font-extrabold tracking-tight ${t?`text-[#f5f5f7]`:`text-[#1d1d1f]`}`,children:`Engineering Publications & Deep Dives`})]}),(0,z.jsxs)(`p`,{className:`text-sm md:text-base font-light max-w-md ${t?`text-[#86868b]`:`text-[#6e6e73]`}`,children:[`Showing `,Math.min(o,n.length),` of `,n.length,` technical publications. Click any article to read or share.`]})]}),n.length===0?(0,z.jsxs)(`div`,{className:`text-center py-16 rounded-3xl border ${t?`bg-[#161617] border-[#2c2c2e] text-[#86868b]`:`bg-[#ffffff] border-[#d2d2d7] text-[#6e6e73]`}`,children:[(0,z.jsx)(j,{className:`w-12 h-12 text-[#0071e3] mx-auto mb-4`}),(0,z.jsx)(`h3`,{className:`text-xl font-bold mb-2`,children:`No Articles Found`}),(0,z.jsx)(`p`,{className:`text-sm font-light max-w-md mx-auto`,children:"Add `.md` files to `public/assets/articles/` directory to auto-discover and render publications live on the website."})]}):(0,z.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 gap-8 mb-12`,children:n.slice(0,o).map(e=>{let n=g&&g.id===e.id,r=m===e.id;return(0,z.jsxs)(`div`,{onClick:()=>v(e.id),className:`apple-glass-card rounded-3xl p-8 border transition-all duration-300 relative cursor-pointer group flex flex-col justify-between ${n?t?`bg-[#161617] border-[#0071e3] shadow-2xl shadow-[#0071e3]/20`:`bg-[#ffffff] border-[#0071e3] shadow-xl shadow-[#0071e3]/10`:t?`bg-[#161617]/70 border-[#2c2c2e] hover:border-[#3a3a3c]`:`bg-[#ffffff]/80 border-[#d2d2d7] hover:border-[#b0b0b8] shadow-sm`}`,children:[(0,z.jsxs)(`div`,{children:[(0,z.jsxs)(`div`,{className:`flex items-center justify-between mb-4 text-xs font-mono`,children:[(0,z.jsx)(`span`,{className:`px-3 py-1 rounded-full font-semibold uppercase tracking-wider border ${t?`bg-[#2c2c2e] border-white/10 text-[#2997ff]`:`bg-[#f5f5f7] border-[#d2d2d7] text-[#0071e3]`}`,children:e.category}),(0,z.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,z.jsxs)(`div`,{className:`flex items-center gap-1.5 text-[#86868b]`,children:[(0,z.jsx)(F,{className:`w-3.5 h-3.5`}),(0,z.jsx)(`span`,{children:e.readTime})]}),(0,z.jsx)(`button`,{onClick:t=>b(t,e.id),className:`p-1.5 rounded-lg border transition-all cursor-pointer flex items-center gap-1 text-[11px] ${r?`bg-emerald-500/20 text-emerald-400 border-emerald-500/40`:t?`bg-[#2c2c2e] border-white/10 text-[#86868b] hover:text-[#f5f5f7]`:`bg-[#f5f5f7] border-[#d2d2d7] text-[#6e6e73] hover:text-[#1d1d1f]`}`,title:`Copy Shareable Link`,children:r?(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(ee,{className:`w-3.5 h-3.5 text-emerald-400`}),(0,z.jsx)(`span`,{children:`Copied!`})]}):(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(ue,{className:`w-3.5 h-3.5`}),(0,z.jsx)(`span`,{children:`Share`})]})})]})]}),(0,z.jsx)(`h3`,{className:`text-xl sm:text-2xl font-bold tracking-tight mb-3 group-hover:text-[#0071e3] transition-colors ${t?`text-[#f5f5f7]`:`text-[#1d1d1f]`}`,children:e.title}),(0,z.jsx)(`p`,{className:`text-sm leading-relaxed mb-6 font-light ${t?`text-[#86868b]`:`text-[#6e6e73]`}`,children:e.excerpt})]}),(0,z.jsxs)(`div`,{className:`pt-4 border-t flex items-center justify-between text-xs font-mono ${t?`border-[#2c2c2e]`:`border-[#d2d2d7]`}`,children:[(0,z.jsxs)(`div`,{className:`flex items-center gap-2 text-[#86868b]`,children:[(0,z.jsx)(pe,{className:`w-3.5 h-3.5 text-[#0071e3]`}),(0,z.jsxs)(`span`,{children:[e.author,` • `,e.date]})]}),(0,z.jsxs)(`button`,{className:`flex items-center gap-1 text-[#0071e3] font-bold group-hover:translate-x-1 transition-transform`,children:[(0,z.jsx)(`span`,{children:`Read Article`}),(0,z.jsx)(te,{className:`w-4 h-4`})]})]})]},e.id)})}),o<n.length&&(0,z.jsx)(`div`,{className:`flex justify-center mt-8`,children:(0,z.jsxs)(`button`,{onClick:()=>{s(e=>Math.min(e+4,n.length))},className:`px-8 py-3.5 rounded-full font-semibold text-xs transition-all border flex items-center gap-2 cursor-pointer active:scale-95 ${t?`bg-[#161617] hover:bg-[#2c2c2e] text-[#f5f5f7] border-[#2c2c2e] shadow-lg`:`bg-[#ffffff] hover:bg-[#e8e8ed] text-[#1d1d1f] border-[#d2d2d7] shadow-md`}`,children:[(0,z.jsxs)(`span`,{children:[`Load More Articles (`,n.length-o,` Remaining)`]}),(0,z.jsx)(N,{className:`w-4 h-4 text-[#0071e3]`})]})})]}),f&&g&&(0,z.jsx)(`div`,{className:`fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto`,children:(0,z.jsxs)(`div`,{className:`max-w-4xl w-full rounded-3xl p-8 sm:p-12 border max-h-[90vh] overflow-y-auto relative ${t?`bg-[#161617] border-[#2c2c2e] text-[#f5f5f7]`:`bg-[#ffffff] border-[#d2d2d7] text-[#1d1d1f]`}`,children:[(0,z.jsxs)(`div`,{className:`flex items-center justify-between pb-6 border-b border-[#2c2c2e] mb-6`,children:[(0,z.jsx)(`button`,{onClick:e=>b(e,g.id),className:`px-3.5 py-1.5 rounded-full border text-xs font-mono font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${m===g.id?`bg-emerald-500/20 text-emerald-400 border-emerald-500/40`:t?`bg-[#2c2c2e] border-white/10 text-[#f5f5f7] hover:bg-[#3a3a3c]`:`bg-[#f5f5f7] border-[#d2d2d7] text-[#1d1d1f] hover:bg-[#e8e8ed]`}`,children:m===g.id?(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(ee,{className:`w-3.5 h-3.5 text-emerald-400`}),(0,z.jsx)(`span`,{children:`Link Copied!`})]}):(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(ue,{className:`w-3.5 h-3.5 text-[#0071e3]`}),(0,z.jsx)(`span`,{children:`Shareable Deep Link`})]})}),(0,z.jsx)(`button`,{onClick:y,className:`p-2 rounded-full border transition-colors cursor-pointer ${t?`bg-[#2c2c2e] border-white/10 hover:bg-[#3a3a3c]`:`bg-[#f5f5f7] border-[#d2d2d7] hover:bg-[#e8e8ed]`}`,title:`Close Reader`,children:(0,z.jsx)(me,{className:`w-5 h-5`})})]}),(0,z.jsxs)(`div`,{className:`mb-6`,children:[(0,z.jsxs)(`span`,{className:`text-xs font-mono text-[#0071e3] uppercase tracking-wider block mb-2`,children:[g.category,` • `,g.readTime]}),(0,z.jsx)(`h2`,{className:`text-3xl sm:text-4xl font-extrabold tracking-tight mb-2`,children:g.title}),(0,z.jsxs)(`div`,{className:`text-xs font-mono text-[#86868b]`,children:[`By `,g.author,` • `,g.date]})]}),u?(0,z.jsx)(`div`,{className:`py-16 text-center text-sm font-mono text-[#86868b] animate-pulse`,children:`Parsing Markdown file...`}):(0,z.jsx)(`div`,{className:`prose max-w-none text-base leading-relaxed pt-6 border-t ${t?`border-[#2c2c2e] prose-invert text-[#a1a1a6]`:`border-[#d2d2d7] text-[#424245]`}`,dangerouslySetInnerHTML:{__html:c}})]})})]})}function KS({theme:e=`dark`}){let t=e===`dark`,[n,r]=(0,_.useState)({name:``,email:``,topic:``,message:``}),[i,a]=(0,_.useState)(!1),o=e=>{r({...n,[e.target.name]:e.target.value})};return(0,z.jsxs)(`section`,{id:`contact`,className:`py-24 relative overflow-hidden transition-colors duration-500 ${t?`bg-[#000000] text-[#f5f5f7]`:`bg-[#f5f5f7] text-[#1d1d1f]`}`,children:[(0,z.jsx)(`div`,{className:`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0071e3]/10 rounded-full blur-[160px] pointer-events-none`}),(0,z.jsxs)(`div`,{className:`max-w-4xl mx-auto px-6 relative z-10`,children:[(0,z.jsxs)(`div`,{className:`text-center max-w-2xl mx-auto mb-14`,children:[(0,z.jsxs)(`div`,{className:`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border transition-colors ${t?`bg-[#161617] border-[#2c2c2e] text-[#2997ff]`:`bg-[#ffffff] border-[#d2d2d7] text-[#0071e3] shadow-sm`}`,children:[(0,z.jsx)(I,{className:`w-3.5 h-3.5 text-[#0071e3]`}),(0,z.jsx)(`span`,{children:`Direct Inquiry`})]}),(0,z.jsxs)(`h2`,{className:`text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 ${t?`text-[#f5f5f7]`:`text-[#1d1d1f]`}`,children:[`Let's Build`,` `,(0,z.jsx)(Pe,{type:`underline`,color:`#0071e3`,show:!0,strokeWidth:3,children:(0,z.jsx)(`span`,{className:`text-[#0071e3]`,children:`Generative AI Systems`})}),` `,`Together.`]}),(0,z.jsxs)(`p`,{className:`text-base md:text-lg font-light leading-relaxed ${t?`text-[#86868b]`:`text-[#6e6e73]`}`,children:[`Send your project requirements or technical inquiries directly to `,(0,z.jsx)(`strong`,{className:`font-semibold text-[#0071e3]`,children:`sanket.kakad@gmail.com`}),`.`]})]}),(0,z.jsx)(`div`,{className:`apple-glass-card rounded-3xl p-8 sm:p-12 border transition-all duration-300 ${t?`bg-[#161617]/90 border-[#2c2c2e] shadow-2xl shadow-black/80`:`bg-[#ffffff]/90 border-[#d2d2d7] shadow-xl shadow-slate-200/50`}`,children:i?(0,z.jsxs)(`div`,{className:`py-12 text-center flex flex-col items-center justify-center space-y-4`,children:[(0,z.jsx)(`div`,{className:`w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center border border-emerald-500/40 animate-bounce`,children:(0,z.jsx)(P,{className:`w-8 h-8`})}),(0,z.jsx)(`h3`,{className:`text-2xl font-bold ${t?`text-[#f5f5f7]`:`text-[#1d1d1f]`}`,children:`Message Ready to Send!`}),(0,z.jsxs)(`p`,{className:`text-sm max-w-md ${t?`text-[#86868b]`:`text-[#6e6e73]`}`,children:[`Your email client has been launched with your inquiry addressed to `,(0,z.jsx)(`strong`,{className:`text-[#0071e3]`,children:`sanket.kakad@gmail.com`}),`.`]}),(0,z.jsx)(`button`,{onClick:()=>a(!1),className:`mt-6 px-6 py-2.5 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs font-semibold transition-all`,children:`Send Another Message`})]}):(0,z.jsxs)(`form`,{onSubmit:e=>{e.preventDefault();let t={origin:{y:.7}};function r(e,n){ge({...t,...n,particleCount:Math.floor(200*e)})}r(.25,{spread:26,startVelocity:55}),r(.2,{spread:60}),r(.35,{spread:100,decay:.91,scalar:.8}),r(.1,{spread:120,startVelocity:25,decay:.92,scalar:1.2}),r(.1,{spread:120,startVelocity:45});let i=encodeURIComponent(`[Portfolio Inquiry - ${n.topic}] from ${n.name}`),o=encodeURIComponent(`Name: ${n.name}\nEmail: ${n.email}\nTopic: ${n.topic}\n\nMessage:\n${n.message}`);setTimeout(()=>{window.location.href=`mailto:sanket.kakad@gmail.com?subject=${i}&body=${o}`},400),a(!0)},className:`space-y-6`,children:[(0,z.jsxs)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 gap-6`,children:[(0,z.jsxs)(`div`,{children:[(0,z.jsxs)(`label`,{className:`block text-xs font-semibold uppercase tracking-wider mb-2 flex items-center gap-1.5 ${t?`text-[#86868b]`:`text-[#6e6e73]`}`,children:[(0,z.jsx)(pe,{className:`w-3.5 h-3.5 text-[#0071e3]`}),(0,z.jsx)(`span`,{children:`Your Name`})]}),(0,z.jsx)(`input`,{type:`text`,name:`name`,required:!0,value:n.name,onChange:o,placeholder:`Sanket Kakad`,className:`w-full px-4 py-3 rounded-xl border text-sm font-medium transition-all outline-none focus:ring-2 focus:ring-[#0071e3] ${t?`bg-[#000000] border-[#2c2c2e] text-[#f5f5f7] placeholder-[#86868b]/50`:`bg-[#f5f5f7] border-[#d2d2d7] text-[#1d1d1f] placeholder-[#6e6e73]/50`}`})]}),(0,z.jsxs)(`div`,{children:[(0,z.jsxs)(`label`,{className:`block text-xs font-semibold uppercase tracking-wider mb-2 flex items-center gap-1.5 ${t?`text-[#86868b]`:`text-[#6e6e73]`}`,children:[(0,z.jsx)(I,{className:`w-3.5 h-3.5 text-[#0071e3]`}),(0,z.jsx)(`span`,{children:`Your Email`})]}),(0,z.jsx)(`input`,{type:`email`,name:`email`,required:!0,value:n.email,onChange:o,placeholder:`you@domain.com`,className:`w-full px-4 py-3 rounded-xl border text-sm font-medium transition-all outline-none focus:ring-2 focus:ring-[#0071e3] ${t?`bg-[#000000] border-[#2c2c2e] text-[#f5f5f7] placeholder-[#86868b]/50`:`bg-[#f5f5f7] border-[#d2d2d7] text-[#1d1d1f] placeholder-[#6e6e73]/50`}`})]})]}),(0,z.jsxs)(`div`,{children:[(0,z.jsxs)(`label`,{className:`block text-xs font-semibold uppercase tracking-wider mb-2 flex items-center gap-1.5 ${t?`text-[#86868b]`:`text-[#6e6e73]`}`,children:[(0,z.jsx)(L,{className:`w-3.5 h-3.5 text-[#0071e3]`}),(0,z.jsx)(`span`,{children:`Subject`})]}),(0,z.jsx)(`input`,{type:`text`,name:`topic`,required:!0,value:n.topic,onChange:o,placeholder:`Enter subject...`,className:`w-full px-4 py-3 rounded-xl border text-sm font-medium transition-all outline-none focus:ring-2 focus:ring-[#0071e3] ${t?`bg-[#000000] border-[#2c2c2e] text-[#f5f5f7] placeholder-[#86868b]/50`:`bg-[#f5f5f7] border-[#d2d2d7] text-[#1d1d1f] placeholder-[#6e6e73]/50`}`})]}),(0,z.jsxs)(`div`,{children:[(0,z.jsxs)(`label`,{className:`block text-xs font-semibold uppercase tracking-wider mb-2 flex items-center gap-1.5 ${t?`text-[#86868b]`:`text-[#6e6e73]`}`,children:[(0,z.jsx)(se,{className:`w-3.5 h-3.5 text-[#0071e3]`}),(0,z.jsx)(`span`,{children:`Message`})]}),(0,z.jsx)(`textarea`,{name:`message`,required:!0,rows:4,value:n.message,onChange:o,placeholder:`Describe your project goals or architecture requirements...`,className:`w-full px-4 py-3 rounded-xl border text-sm font-medium transition-all outline-none focus:ring-2 focus:ring-[#0071e3] ${t?`bg-[#000000] border-[#2c2c2e] text-[#f5f5f7] placeholder-[#86868b]/50`:`bg-[#f5f5f7] border-[#d2d2d7] text-[#1d1d1f] placeholder-[#6e6e73]/50`}`})]}),(0,z.jsxs)(`button`,{type:`submit`,className:`w-full py-4 rounded-xl bg-[#0071e3] hover:bg-[#0077ed] text-white font-bold text-sm shadow-xl shadow-[#0071e3]/30 flex items-center justify-center gap-2 active:scale-98 transition-all cursor-pointer`,children:[(0,z.jsx)(`span`,{children:`Submit`}),(0,z.jsx)(le,{className:`w-4 h-4 text-white ml-1`})]})]})})]})]})}function qS({theme:e=`dark`}){let t=e===`dark`;return(0,z.jsx)(`footer`,{className:`border-t transition-colors duration-500 pt-16 pb-12 relative overflow-hidden ${t?`bg-[#161617] border-[#2c2c2e] text-[#f5f5f7]`:`bg-[#e8e8ed] border-[#d2d2d7] text-[#1d1d1f]`}`,children:(0,z.jsxs)(`div`,{className:`max-w-6xl mx-auto px-6`,children:[(0,z.jsxs)(`div`,{className:`flex flex-col md:flex-row items-center justify-between pb-12 border-b gap-6 ${t?`border-[#2c2c2e]`:`border-[#d2d2d7]`}`,children:[(0,z.jsxs)(`div`,{children:[(0,z.jsxs)(`div`,{className:`flex items-center gap-2 text-2xl font-extrabold tracking-tight mb-1 ${t?`text-[#f5f5f7]`:`text-[#1d1d1f]`}`,children:[(0,z.jsx)(`span`,{children:`Sanket Kakad`}),(0,z.jsx)(`span`,{className:`w-2.5 h-2.5 rounded-full bg-[#0071e3]`})]}),(0,z.jsx)(`p`,{className:`text-xs font-light max-w-md ${t?`text-[#86868b]`:`text-[#6e6e73]`}`,children:`Senior AI Engineer building production LLM architectures, agentic workflows, and low-latency streaming engines.`})]}),(0,z.jsx)(`div`,{className:`flex items-center gap-3`,children:(0,z.jsxs)(`button`,{onClick:()=>{window.scrollTo({top:0,behavior:`smooth`})},className:`px-4 py-2 rounded-full transition-all border cursor-pointer active:scale-95 flex items-center gap-1.5 text-xs font-semibold ${t?`bg-[#2c2c2e] text-[#f5f5f7] hover:bg-[#3a3a3c] border-[#2c2c2e]`:`bg-[#ffffff] text-[#1d1d1f] hover:bg-[#f5f5f7] border-[#d2d2d7] shadow-sm`}`,title:`Back to Top`,children:[(0,z.jsx)(`span`,{children:`Back to Top`}),(0,z.jsx)(A,{className:`w-3.5 h-3.5`})]})})]}),(0,z.jsxs)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b text-xs ${t?`border-[#2c2c2e]`:`border-[#d2d2d7]`}`,children:[(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`h4`,{className:`font-mono font-bold uppercase tracking-wider mb-4 text-[11px] text-[#0071e3]`,children:`Site Map`}),(0,z.jsxs)(`ul`,{className:`flex flex-col gap-3 font-medium ${t?`text-[#86868b]`:`text-[#6e6e73]`}`,children:[(0,z.jsx)(`li`,{children:(0,z.jsx)(`a`,{href:`#overview`,className:`hover:text-[#0071e3] transition-colors flex items-center gap-1.5`,children:(0,z.jsx)(`span`,{children:`Overview`})})}),(0,z.jsx)(`li`,{children:(0,z.jsx)(`a`,{href:`#projects`,className:`hover:text-[#0071e3] transition-colors flex items-center gap-1.5`,children:(0,z.jsx)(`span`,{children:`Projects`})})}),(0,z.jsx)(`li`,{children:(0,z.jsx)(`a`,{href:`#articles`,className:`hover:text-[#0071e3] transition-colors flex items-center gap-1.5`,children:(0,z.jsx)(`span`,{children:`Articles`})})}),(0,z.jsx)(`li`,{children:(0,z.jsx)(`a`,{href:`#contact`,className:`hover:text-[#0071e3] transition-colors flex items-center gap-1.5`,children:(0,z.jsx)(`span`,{children:`Contact Form`})})})]})]}),(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`h4`,{className:`font-mono font-bold uppercase tracking-wider mb-4 text-[11px] text-[#0071e3]`,children:`Live Projects`}),(0,z.jsxs)(`ul`,{className:`flex flex-col gap-3 font-medium ${t?`text-[#86868b]`:`text-[#6e6e73]`}`,children:[(0,z.jsx)(`li`,{children:(0,z.jsxs)(`a`,{href:`https://sanket-kakad-agentic-travel-booking-app.onrender.com/`,target:`_blank`,rel:`noopener noreferrer`,className:`hover:text-[#0071e3] transition-colors flex items-center gap-1 text-[#0071e3] font-semibold`,children:[(0,z.jsx)(`span`,{children:`Agentic Travel Booking`}),(0,z.jsx)(re,{className:`w-3 h-3`})]})}),(0,z.jsx)(`li`,{children:(0,z.jsxs)(`a`,{href:`https://sanket-kakad-multi-pdf-advanced-rag.vercel.app/`,target:`_blank`,rel:`noopener noreferrer`,className:`hover:text-[#0071e3] transition-colors flex items-center gap-1 text-[#0071e3] font-semibold`,children:[(0,z.jsx)(`span`,{children:`Advanced Multi-PDF Chatbot`}),(0,z.jsx)(re,{className:`w-3 h-3`})]})}),(0,z.jsx)(`li`,{children:(0,z.jsxs)(`a`,{href:`https://huggingface.co/spaces/SANKETKAKAD/usa-constitution-gpt`,target:`_blank`,rel:`noopener noreferrer`,className:`hover:text-[#0071e3] transition-colors flex items-center gap-1 text-[#0071e3] font-semibold`,children:[(0,z.jsx)(`span`,{children:`USA Constitution GPT`}),(0,z.jsx)(re,{className:`w-3 h-3`})]})})]})]}),(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`h4`,{className:`font-mono font-bold uppercase tracking-wider mb-4 text-[11px] text-[#0071e3]`,children:`Core Tech Stack`}),(0,z.jsxs)(`ul`,{className:`flex flex-col gap-3 font-medium ${t?`text-[#86868b]`:`text-[#6e6e73]`}`,children:[(0,z.jsx)(`li`,{children:(0,z.jsx)(`span`,{className:t?`text-[#f5f5f7]`:`text-[#1d1d1f]`,children:`Python & Pydantic`})}),(0,z.jsx)(`li`,{children:(0,z.jsx)(`span`,{className:t?`text-[#f5f5f7]`:`text-[#1d1d1f]`,children:`LangChain & LangGraph`})}),(0,z.jsx)(`li`,{children:(0,z.jsx)(`span`,{className:t?`text-[#f5f5f7]`:`text-[#1d1d1f]`,children:`React 19 & Tailwind v4`})}),(0,z.jsx)(`li`,{children:(0,z.jsx)(`span`,{className:t?`text-[#f5f5f7]`:`text-[#1d1d1f]`,children:`Docker & SQL`})})]})]}),(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`h4`,{className:`font-mono font-bold uppercase tracking-wider mb-4 text-[11px] text-[#0071e3]`,children:`Contact Information`}),(0,z.jsxs)(`div`,{className:`flex flex-col gap-3 font-medium ${t?`text-[#86868b]`:`text-[#6e6e73]`}`,children:[(0,z.jsxs)(`a`,{href:`mailto:sanket.kakad@gmail.com`,className:`hover:text-[#0071e3] transition-colors flex items-center gap-2 text-[#0071e3] font-semibold break-all`,children:[(0,z.jsx)(I,{className:`w-4 h-4 shrink-0 text-[#0071e3]`}),(0,z.jsx)(`span`,{children:`sanket.kakad@gmail.com`})]}),(0,z.jsxs)(`div`,{className:`flex items-center gap-2 pt-1`,children:[(0,z.jsx)(`span`,{className:`w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0`}),(0,z.jsx)(`span`,{className:`text-[11px] leading-tight`,children:`Available for AI Engineering Roles`})]})]})]})]}),(0,z.jsxs)(`div`,{className:`pt-8 flex flex-col sm:flex-row items-center justify-between text-xs gap-4 font-mono ${t?`text-[#86868b]`:`text-[#6e6e73]`}`,children:[(0,z.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[(0,z.jsxs)(`span`,{children:[`© `,new Date().getFullYear(),` Sanket Kakad. Built with`]}),(0,z.jsx)(oe,{className:`w-3.5 h-3.5 text-rose-500 fill-rose-500 inline-block animate-pulse`})]}),(0,z.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,z.jsx)(`a`,{href:`#overview`,className:`hover:text-[#0071e3] transition-colors`,children:`Overview`}),(0,z.jsx)(`a`,{href:`#projects`,className:`hover:text-[#0071e3] transition-colors`,children:`Projects`}),(0,z.jsx)(`a`,{href:`#articles`,className:`hover:text-[#0071e3] transition-colors`,children:`Articles`}),(0,z.jsx)(`a`,{href:`#contact`,className:`hover:text-[#0071e3] transition-colors`,children:`Contact`})]})]})]})})}function JS(){let[e,t]=(0,_.useState)(()=>{try{let e=localStorage.getItem(`theme`);return e===`dark`||e===`light`?e:window.matchMedia&&window.matchMedia(`(prefers-color-scheme: dark)`).matches?`dark`:`light`}catch{return`dark`}});return(0,_.useEffect)(()=>{try{localStorage.setItem(`theme`,e)}catch{}e===`dark`?(document.documentElement.classList.add(`dark`),document.documentElement.classList.remove(`light`)):(document.documentElement.classList.add(`light`),document.documentElement.classList.remove(`dark`))},[e]),(0,z.jsxs)(`div`,{className:`min-h-screen transition-colors duration-500 font-sans antialiased overflow-x-hidden selection:bg-[#0071e3] selection:text-white ${e===`dark`?`bg-[#000000] text-[#f5f5f7]`:`bg-[#f5f5f7] text-[#1d1d1f]`}`,children:[(0,z.jsx)(Ie,{theme:e,toggleTheme:()=>{t(e=>e===`dark`?`light`:`dark`)}}),(0,z.jsxs)(`main`,{children:[(0,z.jsx)(Gy,{theme:e}),(0,z.jsx)(Qb,{theme:e}),(0,z.jsx)(GS,{theme:e}),(0,z.jsx)(KS,{theme:e})]}),(0,z.jsx)(qS,{theme:e})]})}(0,v.createRoot)(document.getElementById(`root`)).render((0,z.jsx)(_.StrictMode,{children:(0,z.jsx)(JS,{})}));