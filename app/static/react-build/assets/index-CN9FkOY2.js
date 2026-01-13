function yd(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const l=Object.getOwnPropertyDescriptor(r,i);l&&Object.defineProperty(e,i,l.get?l:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();function gd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ko={exports:{}},Li={},Wo={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wr=Symbol.for("react.element"),xd=Symbol.for("react.portal"),kd=Symbol.for("react.fragment"),wd=Symbol.for("react.strict_mode"),jd=Symbol.for("react.profiler"),Nd=Symbol.for("react.provider"),Sd=Symbol.for("react.context"),Td=Symbol.for("react.forward_ref"),Ed=Symbol.for("react.suspense"),Cd=Symbol.for("react.memo"),zd=Symbol.for("react.lazy"),Ta=Symbol.iterator;function _d(e){return e===null||typeof e!="object"?null:(e=Ta&&e[Ta]||e["@@iterator"],typeof e=="function"?e:null)}var Qo={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Go=Object.assign,Xo={};function _t(e,n,t){this.props=e,this.context=n,this.refs=Xo,this.updater=t||Qo}_t.prototype.isReactComponent={};_t.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};_t.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Yo(){}Yo.prototype=_t.prototype;function El(e,n,t){this.props=e,this.context=n,this.refs=Xo,this.updater=t||Qo}var Cl=El.prototype=new Yo;Cl.constructor=El;Go(Cl,_t.prototype);Cl.isPureReactComponent=!0;var Ea=Array.isArray,Zo=Object.prototype.hasOwnProperty,zl={current:null},Jo={key:!0,ref:!0,__self:!0,__source:!0};function eu(e,n,t){var r,i={},l=null,a=null;if(n!=null)for(r in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(l=""+n.key),n)Zo.call(n,r)&&!Jo.hasOwnProperty(r)&&(i[r]=n[r]);var u=arguments.length-2;if(u===1)i.children=t;else if(1<u){for(var o=Array(u),c=0;c<u;c++)o[c]=arguments[c+2];i.children=o}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:wr,type:e,key:l,ref:a,props:i,_owner:zl.current}}function Ld(e,n){return{$$typeof:wr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function _l(e){return typeof e=="object"&&e!==null&&e.$$typeof===wr}function bd(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Ca=/\/+/g;function Xi(e,n){return typeof e=="object"&&e!==null&&e.key!=null?bd(""+e.key):n.toString(36)}function Kr(e,n,t,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(l){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case wr:case xd:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Xi(a,0):r,Ea(i)?(t="",e!=null&&(t=e.replace(Ca,"$&/")+"/"),Kr(i,n,t,"",function(c){return c})):i!=null&&(_l(i)&&(i=Ld(i,t+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Ca,"$&/")+"/")+e)),n.push(i)),1;if(a=0,r=r===""?".":r+":",Ea(e))for(var u=0;u<e.length;u++){l=e[u];var o=r+Xi(l,u);a+=Kr(l,n,t,o,i)}else if(o=_d(e),typeof o=="function")for(e=o.call(e),u=0;!(l=e.next()).done;)l=l.value,o=r+Xi(l,u++),a+=Kr(l,n,t,o,i);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function _r(e,n,t){if(e==null)return e;var r=[],i=0;return Kr(e,r,"","",function(l){return n.call(t,l,i++)}),r}function Pd(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ke={current:null},Wr={transition:null},Id={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:Wr,ReactCurrentOwner:zl};function nu(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:_r,forEach:function(e,n,t){_r(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return _r(e,function(){n++}),n},toArray:function(e){return _r(e,function(n){return n})||[]},only:function(e){if(!_l(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=_t;U.Fragment=kd;U.Profiler=jd;U.PureComponent=El;U.StrictMode=wd;U.Suspense=Ed;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Id;U.act=nu;U.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Go({},e.props),i=e.key,l=e.ref,a=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,a=zl.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(o in n)Zo.call(n,o)&&!Jo.hasOwnProperty(o)&&(r[o]=n[o]===void 0&&u!==void 0?u[o]:n[o])}var o=arguments.length-2;if(o===1)r.children=t;else if(1<o){u=Array(o);for(var c=0;c<o;c++)u[c]=arguments[c+2];r.children=u}return{$$typeof:wr,type:e.type,key:i,ref:l,props:r,_owner:a}};U.createContext=function(e){return e={$$typeof:Sd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Nd,_context:e},e.Consumer=e};U.createElement=eu;U.createFactory=function(e){var n=eu.bind(null,e);return n.type=e,n};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:Td,render:e}};U.isValidElement=_l;U.lazy=function(e){return{$$typeof:zd,_payload:{_status:-1,_result:e},_init:Pd}};U.memo=function(e,n){return{$$typeof:Cd,type:e,compare:n===void 0?null:n}};U.startTransition=function(e){var n=Wr.transition;Wr.transition={};try{e()}finally{Wr.transition=n}};U.unstable_act=nu;U.useCallback=function(e,n){return ke.current.useCallback(e,n)};U.useContext=function(e){return ke.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return ke.current.useDeferredValue(e)};U.useEffect=function(e,n){return ke.current.useEffect(e,n)};U.useId=function(){return ke.current.useId()};U.useImperativeHandle=function(e,n,t){return ke.current.useImperativeHandle(e,n,t)};U.useInsertionEffect=function(e,n){return ke.current.useInsertionEffect(e,n)};U.useLayoutEffect=function(e,n){return ke.current.useLayoutEffect(e,n)};U.useMemo=function(e,n){return ke.current.useMemo(e,n)};U.useReducer=function(e,n,t){return ke.current.useReducer(e,n,t)};U.useRef=function(e){return ke.current.useRef(e)};U.useState=function(e){return ke.current.useState(e)};U.useSyncExternalStore=function(e,n,t){return ke.current.useSyncExternalStore(e,n,t)};U.useTransition=function(){return ke.current.useTransition()};U.version="18.3.1";Wo.exports=U;var y=Wo.exports;const bi=gd(y),Od=yd({__proto__:null,default:bi},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rd=y,Md=Symbol.for("react.element"),Dd=Symbol.for("react.fragment"),Fd=Object.prototype.hasOwnProperty,Ad=Rd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Hd={key:!0,ref:!0,__self:!0,__source:!0};function tu(e,n,t){var r,i={},l=null,a=null;t!==void 0&&(l=""+t),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(a=n.ref);for(r in n)Fd.call(n,r)&&!Hd.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:Md,type:e,key:l,ref:a,props:i,_owner:Ad.current}}Li.Fragment=Dd;Li.jsx=tu;Li.jsxs=tu;Ko.exports=Li;var s=Ko.exports,Ts={},ru={exports:{}},Pe={},iu={exports:{}},su={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(T,j){var L=T.length;T.push(j);e:for(;0<L;){var R=L-1>>>1,F=T[R];if(0<i(F,j))T[R]=j,T[L]=F,L=R;else break e}}function t(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var j=T[0],L=T.pop();if(L!==j){T[0]=L;e:for(var R=0,F=T.length,$=F>>>1;R<$;){var Rn=2*(R+1)-1,Gi=T[Rn],Mn=Rn+1,zr=T[Mn];if(0>i(Gi,L))Mn<F&&0>i(zr,Gi)?(T[R]=zr,T[Mn]=L,R=Mn):(T[R]=Gi,T[Rn]=L,R=Rn);else if(Mn<F&&0>i(zr,L))T[R]=zr,T[Mn]=L,R=Mn;else break e}}return j}function i(T,j){var L=T.sortIndex-j.sortIndex;return L!==0?L:T.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var a=Date,u=a.now();e.unstable_now=function(){return a.now()-u}}var o=[],c=[],p=1,f=null,m=3,x=!1,k=!1,w=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(T){for(var j=t(c);j!==null;){if(j.callback===null)r(c);else if(j.startTime<=T)r(c),j.sortIndex=j.expirationTime,n(o,j);else break;j=t(c)}}function N(T){if(w=!1,v(T),!k)if(t(o)!==null)k=!0,z(_);else{var j=t(c);j!==null&&E(N,j.startTime-T)}}function _(T,j){k=!1,w&&(w=!1,d(I),I=-1),x=!0;var L=m;try{for(v(j),f=t(o);f!==null&&(!(f.expirationTime>j)||T&&!A());){var R=f.callback;if(typeof R=="function"){f.callback=null,m=f.priorityLevel;var F=R(f.expirationTime<=j);j=e.unstable_now(),typeof F=="function"?f.callback=F:f===t(o)&&r(o),v(j)}else r(o);f=t(o)}if(f!==null)var $=!0;else{var Rn=t(c);Rn!==null&&E(N,Rn.startTime-j),$=!1}return $}finally{f=null,m=L,x=!1}}var P=!1,b=null,I=-1,M=5,S=-1;function A(){return!(e.unstable_now()-S<M)}function oe(){if(b!==null){var T=e.unstable_now();S=T;var j=!0;try{j=b(!0,T)}finally{j?ue():(P=!1,b=null)}}else P=!1}var ue;if(typeof h=="function")ue=function(){h(oe)};else if(typeof MessageChannel<"u"){var Ce=new MessageChannel,q=Ce.port2;Ce.port1.onmessage=oe,ue=function(){q.postMessage(null)}}else ue=function(){g(oe,0)};function z(T){b=T,P||(P=!0,ue())}function E(T,j){I=g(function(){T(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){k||x||(k=!0,z(_))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(o)},e.unstable_next=function(T){switch(m){case 1:case 2:case 3:var j=3;break;default:j=m}var L=m;m=j;try{return T()}finally{m=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,j){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var L=m;m=T;try{return j()}finally{m=L}},e.unstable_scheduleCallback=function(T,j,L){var R=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?R+L:R):L=R,T){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=L+F,T={id:p++,callback:j,priorityLevel:T,startTime:L,expirationTime:F,sortIndex:-1},L>R?(T.sortIndex=L,n(c,T),t(o)===null&&T===t(c)&&(w?(d(I),I=-1):w=!0,E(N,L-R))):(T.sortIndex=F,n(o,T),k||x||(k=!0,z(_))),T},e.unstable_shouldYield=A,e.unstable_wrapCallback=function(T){var j=m;return function(){var L=m;m=j;try{return T.apply(this,arguments)}finally{m=L}}}})(su);iu.exports=su;var Ud=iu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vd=y,be=Ud;function C(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var lu=new Set,tr={};function Gn(e,n){wt(e,n),wt(e+"Capture",n)}function wt(e,n){for(tr[e]=n,e=0;e<n.length;e++)lu.add(n[e])}var ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Es=Object.prototype.hasOwnProperty,$d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,za={},_a={};function Bd(e){return Es.call(_a,e)?!0:Es.call(za,e)?!1:$d.test(e)?_a[e]=!0:(za[e]=!0,!1)}function qd(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Kd(e,n,t,r){if(n===null||typeof n>"u"||qd(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function we(e,n,t,r,i,l,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=a}var he={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){he[e]=new we(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];he[n]=new we(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){he[e]=new we(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){he[e]=new we(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){he[e]=new we(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){he[e]=new we(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){he[e]=new we(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){he[e]=new we(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){he[e]=new we(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ll=/[\-:]([a-z])/g;function bl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Ll,bl);he[n]=new we(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Ll,bl);he[n]=new we(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Ll,bl);he[n]=new we(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){he[e]=new we(e,1,!1,e.toLowerCase(),null,!1,!1)});he.xlinkHref=new we("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){he[e]=new we(e,1,!1,e.toLowerCase(),null,!0,!0)});function Pl(e,n,t,r){var i=he.hasOwnProperty(n)?he[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Kd(n,t,i,r)&&(t=null),r||i===null?Bd(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var dn=Vd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Lr=Symbol.for("react.element"),tt=Symbol.for("react.portal"),rt=Symbol.for("react.fragment"),Il=Symbol.for("react.strict_mode"),Cs=Symbol.for("react.profiler"),au=Symbol.for("react.provider"),ou=Symbol.for("react.context"),Ol=Symbol.for("react.forward_ref"),zs=Symbol.for("react.suspense"),_s=Symbol.for("react.suspense_list"),Rl=Symbol.for("react.memo"),fn=Symbol.for("react.lazy"),uu=Symbol.for("react.offscreen"),La=Symbol.iterator;function Rt(e){return e===null||typeof e!="object"?null:(e=La&&e[La]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,Yi;function $t(e){if(Yi===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Yi=n&&n[1]||""}return`
`+Yi+e}var Zi=!1;function Ji(e,n){if(!e||Zi)return"";Zi=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var r=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){r=c}e.call(n.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),l=r.stack.split(`
`),a=i.length-1,u=l.length-1;1<=a&&0<=u&&i[a]!==l[u];)u--;for(;1<=a&&0<=u;a--,u--)if(i[a]!==l[u]){if(a!==1||u!==1)do if(a--,u--,0>u||i[a]!==l[u]){var o=`
`+i[a].replace(" at new "," at ");return e.displayName&&o.includes("<anonymous>")&&(o=o.replace("<anonymous>",e.displayName)),o}while(1<=a&&0<=u);break}}}finally{Zi=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?$t(e):""}function Wd(e){switch(e.tag){case 5:return $t(e.type);case 16:return $t("Lazy");case 13:return $t("Suspense");case 19:return $t("SuspenseList");case 0:case 2:case 15:return e=Ji(e.type,!1),e;case 11:return e=Ji(e.type.render,!1),e;case 1:return e=Ji(e.type,!0),e;default:return""}}function Ls(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case rt:return"Fragment";case tt:return"Portal";case Cs:return"Profiler";case Il:return"StrictMode";case zs:return"Suspense";case _s:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ou:return(e.displayName||"Context")+".Consumer";case au:return(e._context.displayName||"Context")+".Provider";case Ol:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Rl:return n=e.displayName||null,n!==null?n:Ls(e.type)||"Memo";case fn:n=e._payload,e=e._init;try{return Ls(e(n))}catch{}}return null}function Qd(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ls(n);case 8:return n===Il?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function _n(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function cu(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Gd(e){var n=cu(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,l.call(this,a)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function br(e){e._valueTracker||(e._valueTracker=Gd(e))}function du(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=cu(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function ii(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function bs(e,n){var t=n.checked;return Z({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function ba(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=_n(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function hu(e,n){n=n.checked,n!=null&&Pl(e,"checked",n,!1)}function Ps(e,n){hu(e,n);var t=_n(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Is(e,n.type,t):n.hasOwnProperty("defaultValue")&&Is(e,n.type,_n(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Pa(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Is(e,n,t){(n!=="number"||ii(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Bt=Array.isArray;function mt(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+_n(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Os(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(C(91));return Z({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ia(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(C(92));if(Bt(t)){if(1<t.length)throw Error(C(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:_n(t)}}function fu(e,n){var t=_n(n.value),r=_n(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Oa(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function pu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rs(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?pu(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Pr,mu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Pr=Pr||document.createElement("div"),Pr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Pr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function rr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Wt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xd=["Webkit","ms","Moz","O"];Object.keys(Wt).forEach(function(e){Xd.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Wt[n]=Wt[e]})});function vu(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Wt.hasOwnProperty(e)&&Wt[e]?(""+n).trim():n+"px"}function yu(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=vu(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var Yd=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ms(e,n){if(n){if(Yd[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(C(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(C(61))}if(n.style!=null&&typeof n.style!="object")throw Error(C(62))}}function Ds(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fs=null;function Ml(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var As=null,vt=null,yt=null;function Ra(e){if(e=Sr(e)){if(typeof As!="function")throw Error(C(280));var n=e.stateNode;n&&(n=Mi(n),As(e.stateNode,e.type,n))}}function gu(e){vt?yt?yt.push(e):yt=[e]:vt=e}function xu(){if(vt){var e=vt,n=yt;if(yt=vt=null,Ra(e),n)for(e=0;e<n.length;e++)Ra(n[e])}}function ku(e,n){return e(n)}function wu(){}var es=!1;function ju(e,n,t){if(es)return e(n,t);es=!0;try{return ku(e,n,t)}finally{es=!1,(vt!==null||yt!==null)&&(wu(),xu())}}function ir(e,n){var t=e.stateNode;if(t===null)return null;var r=Mi(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(C(231,n,typeof t));return t}var Hs=!1;if(ln)try{var Mt={};Object.defineProperty(Mt,"passive",{get:function(){Hs=!0}}),window.addEventListener("test",Mt,Mt),window.removeEventListener("test",Mt,Mt)}catch{Hs=!1}function Zd(e,n,t,r,i,l,a,u,o){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(p){this.onError(p)}}var Qt=!1,si=null,li=!1,Us=null,Jd={onError:function(e){Qt=!0,si=e}};function eh(e,n,t,r,i,l,a,u,o){Qt=!1,si=null,Zd.apply(Jd,arguments)}function nh(e,n,t,r,i,l,a,u,o){if(eh.apply(this,arguments),Qt){if(Qt){var c=si;Qt=!1,si=null}else throw Error(C(198));li||(li=!0,Us=c)}}function Xn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Nu(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Ma(e){if(Xn(e)!==e)throw Error(C(188))}function th(e){var n=e.alternate;if(!n){if(n=Xn(e),n===null)throw Error(C(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return Ma(i),e;if(l===r)return Ma(i),n;l=l.sibling}throw Error(C(188))}if(t.return!==r.return)t=i,r=l;else{for(var a=!1,u=i.child;u;){if(u===t){a=!0,t=i,r=l;break}if(u===r){a=!0,r=i,t=l;break}u=u.sibling}if(!a){for(u=l.child;u;){if(u===t){a=!0,t=l,r=i;break}if(u===r){a=!0,r=l,t=i;break}u=u.sibling}if(!a)throw Error(C(189))}}if(t.alternate!==r)throw Error(C(190))}if(t.tag!==3)throw Error(C(188));return t.stateNode.current===t?e:n}function Su(e){return e=th(e),e!==null?Tu(e):null}function Tu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Tu(e);if(n!==null)return n;e=e.sibling}return null}var Eu=be.unstable_scheduleCallback,Da=be.unstable_cancelCallback,rh=be.unstable_shouldYield,ih=be.unstable_requestPaint,ee=be.unstable_now,sh=be.unstable_getCurrentPriorityLevel,Dl=be.unstable_ImmediatePriority,Cu=be.unstable_UserBlockingPriority,ai=be.unstable_NormalPriority,lh=be.unstable_LowPriority,zu=be.unstable_IdlePriority,Pi=null,Ze=null;function ah(e){if(Ze&&typeof Ze.onCommitFiberRoot=="function")try{Ze.onCommitFiberRoot(Pi,e,void 0,(e.current.flags&128)===128)}catch{}}var qe=Math.clz32?Math.clz32:ch,oh=Math.log,uh=Math.LN2;function ch(e){return e>>>=0,e===0?32:31-(oh(e)/uh|0)|0}var Ir=64,Or=4194304;function qt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function oi(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,a=t&268435455;if(a!==0){var u=a&~i;u!==0?r=qt(u):(l&=a,l!==0&&(r=qt(l)))}else a=t&~i,a!==0?r=qt(a):l!==0&&(r=qt(l));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,l=n&-n,i>=l||i===16&&(l&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-qe(n),i=1<<t,r|=e[t],n&=~i;return r}function dh(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hh(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var a=31-qe(l),u=1<<a,o=i[a];o===-1?(!(u&t)||u&r)&&(i[a]=dh(u,n)):o<=n&&(e.expiredLanes|=u),l&=~u}}function Vs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function _u(){var e=Ir;return Ir<<=1,!(Ir&4194240)&&(Ir=64),e}function ns(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function jr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-qe(n),e[n]=t}function fh(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-qe(t),l=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~l}}function Fl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-qe(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var B=0;function Lu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var bu,Al,Pu,Iu,Ou,$s=!1,Rr=[],kn=null,wn=null,jn=null,sr=new Map,lr=new Map,mn=[],ph="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fa(e,n){switch(e){case"focusin":case"focusout":kn=null;break;case"dragenter":case"dragleave":wn=null;break;case"mouseover":case"mouseout":jn=null;break;case"pointerover":case"pointerout":sr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":lr.delete(n.pointerId)}}function Dt(e,n,t,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},n!==null&&(n=Sr(n),n!==null&&Al(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function mh(e,n,t,r,i){switch(n){case"focusin":return kn=Dt(kn,e,n,t,r,i),!0;case"dragenter":return wn=Dt(wn,e,n,t,r,i),!0;case"mouseover":return jn=Dt(jn,e,n,t,r,i),!0;case"pointerover":var l=i.pointerId;return sr.set(l,Dt(sr.get(l)||null,e,n,t,r,i)),!0;case"gotpointercapture":return l=i.pointerId,lr.set(l,Dt(lr.get(l)||null,e,n,t,r,i)),!0}return!1}function Ru(e){var n=An(e.target);if(n!==null){var t=Xn(n);if(t!==null){if(n=t.tag,n===13){if(n=Nu(t),n!==null){e.blockedOn=n,Ou(e.priority,function(){Pu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Bs(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Fs=r,t.target.dispatchEvent(r),Fs=null}else return n=Sr(t),n!==null&&Al(n),e.blockedOn=t,!1;n.shift()}return!0}function Aa(e,n,t){Qr(e)&&t.delete(n)}function vh(){$s=!1,kn!==null&&Qr(kn)&&(kn=null),wn!==null&&Qr(wn)&&(wn=null),jn!==null&&Qr(jn)&&(jn=null),sr.forEach(Aa),lr.forEach(Aa)}function Ft(e,n){e.blockedOn===n&&(e.blockedOn=null,$s||($s=!0,be.unstable_scheduleCallback(be.unstable_NormalPriority,vh)))}function ar(e){function n(i){return Ft(i,e)}if(0<Rr.length){Ft(Rr[0],e);for(var t=1;t<Rr.length;t++){var r=Rr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(kn!==null&&Ft(kn,e),wn!==null&&Ft(wn,e),jn!==null&&Ft(jn,e),sr.forEach(n),lr.forEach(n),t=0;t<mn.length;t++)r=mn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<mn.length&&(t=mn[0],t.blockedOn===null);)Ru(t),t.blockedOn===null&&mn.shift()}var gt=dn.ReactCurrentBatchConfig,ui=!0;function yh(e,n,t,r){var i=B,l=gt.transition;gt.transition=null;try{B=1,Hl(e,n,t,r)}finally{B=i,gt.transition=l}}function gh(e,n,t,r){var i=B,l=gt.transition;gt.transition=null;try{B=4,Hl(e,n,t,r)}finally{B=i,gt.transition=l}}function Hl(e,n,t,r){if(ui){var i=Bs(e,n,t,r);if(i===null)ds(e,n,r,ci,t),Fa(e,r);else if(mh(i,e,n,t,r))r.stopPropagation();else if(Fa(e,r),n&4&&-1<ph.indexOf(e)){for(;i!==null;){var l=Sr(i);if(l!==null&&bu(l),l=Bs(e,n,t,r),l===null&&ds(e,n,r,ci,t),l===i)break;i=l}i!==null&&r.stopPropagation()}else ds(e,n,r,null,t)}}var ci=null;function Bs(e,n,t,r){if(ci=null,e=Ml(r),e=An(e),e!==null)if(n=Xn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Nu(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return ci=e,null}function Mu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sh()){case Dl:return 1;case Cu:return 4;case ai:case lh:return 16;case zu:return 536870912;default:return 16}default:return 16}}var yn=null,Ul=null,Gr=null;function Du(){if(Gr)return Gr;var e,n=Ul,t=n.length,r,i="value"in yn?yn.value:yn.textContent,l=i.length;for(e=0;e<t&&n[e]===i[e];e++);var a=t-e;for(r=1;r<=a&&n[t-r]===i[l-r];r++);return Gr=i.slice(e,1<r?1-r:void 0)}function Xr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Mr(){return!0}function Ha(){return!1}function Ie(e){function n(t,r,i,l,a){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=a,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(l):l[u]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Mr:Ha,this.isPropagationStopped=Ha,this}return Z(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Mr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Mr)},persist:function(){},isPersistent:Mr}),n}var Lt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vl=Ie(Lt),Nr=Z({},Lt,{view:0,detail:0}),xh=Ie(Nr),ts,rs,At,Ii=Z({},Nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$l,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==At&&(At&&e.type==="mousemove"?(ts=e.screenX-At.screenX,rs=e.screenY-At.screenY):rs=ts=0,At=e),ts)},movementY:function(e){return"movementY"in e?e.movementY:rs}}),Ua=Ie(Ii),kh=Z({},Ii,{dataTransfer:0}),wh=Ie(kh),jh=Z({},Nr,{relatedTarget:0}),is=Ie(jh),Nh=Z({},Lt,{animationName:0,elapsedTime:0,pseudoElement:0}),Sh=Ie(Nh),Th=Z({},Lt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Eh=Ie(Th),Ch=Z({},Lt,{data:0}),Va=Ie(Ch),zh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_h={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bh(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Lh[e])?!!n[e]:!1}function $l(){return bh}var Ph=Z({},Nr,{key:function(e){if(e.key){var n=zh[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Xr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_h[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$l,charCode:function(e){return e.type==="keypress"?Xr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ih=Ie(Ph),Oh=Z({},Ii,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$a=Ie(Oh),Rh=Z({},Nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$l}),Mh=Ie(Rh),Dh=Z({},Lt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fh=Ie(Dh),Ah=Z({},Ii,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hh=Ie(Ah),Uh=[9,13,27,32],Bl=ln&&"CompositionEvent"in window,Gt=null;ln&&"documentMode"in document&&(Gt=document.documentMode);var Vh=ln&&"TextEvent"in window&&!Gt,Fu=ln&&(!Bl||Gt&&8<Gt&&11>=Gt),Ba=" ",qa=!1;function Au(e,n){switch(e){case"keyup":return Uh.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var it=!1;function $h(e,n){switch(e){case"compositionend":return Hu(n);case"keypress":return n.which!==32?null:(qa=!0,Ba);case"textInput":return e=n.data,e===Ba&&qa?null:e;default:return null}}function Bh(e,n){if(it)return e==="compositionend"||!Bl&&Au(e,n)?(e=Du(),Gr=Ul=yn=null,it=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Fu&&n.locale!=="ko"?null:n.data;default:return null}}var qh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ka(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!qh[e.type]:n==="textarea"}function Uu(e,n,t,r){gu(r),n=di(n,"onChange"),0<n.length&&(t=new Vl("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Xt=null,or=null;function Kh(e){Zu(e,0)}function Oi(e){var n=at(e);if(du(n))return e}function Wh(e,n){if(e==="change")return n}var Vu=!1;if(ln){var ss;if(ln){var ls="oninput"in document;if(!ls){var Wa=document.createElement("div");Wa.setAttribute("oninput","return;"),ls=typeof Wa.oninput=="function"}ss=ls}else ss=!1;Vu=ss&&(!document.documentMode||9<document.documentMode)}function Qa(){Xt&&(Xt.detachEvent("onpropertychange",$u),or=Xt=null)}function $u(e){if(e.propertyName==="value"&&Oi(or)){var n=[];Uu(n,or,e,Ml(e)),ju(Kh,n)}}function Qh(e,n,t){e==="focusin"?(Qa(),Xt=n,or=t,Xt.attachEvent("onpropertychange",$u)):e==="focusout"&&Qa()}function Gh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Oi(or)}function Xh(e,n){if(e==="click")return Oi(n)}function Yh(e,n){if(e==="input"||e==="change")return Oi(n)}function Zh(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var We=typeof Object.is=="function"?Object.is:Zh;function ur(e,n){if(We(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!Es.call(n,i)||!We(e[i],n[i]))return!1}return!0}function Ga(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xa(e,n){var t=Ga(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Ga(t)}}function Bu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Bu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function qu(){for(var e=window,n=ii();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=ii(e.document)}return n}function ql(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Jh(e){var n=qu(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Bu(t.ownerDocument.documentElement,t)){if(r!==null&&ql(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=Xa(t,l);var a=Xa(t,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ef=ln&&"documentMode"in document&&11>=document.documentMode,st=null,qs=null,Yt=null,Ks=!1;function Ya(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ks||st==null||st!==ii(r)||(r=st,"selectionStart"in r&&ql(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Yt&&ur(Yt,r)||(Yt=r,r=di(qs,"onSelect"),0<r.length&&(n=new Vl("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=st)))}function Dr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var lt={animationend:Dr("Animation","AnimationEnd"),animationiteration:Dr("Animation","AnimationIteration"),animationstart:Dr("Animation","AnimationStart"),transitionend:Dr("Transition","TransitionEnd")},as={},Ku={};ln&&(Ku=document.createElement("div").style,"AnimationEvent"in window||(delete lt.animationend.animation,delete lt.animationiteration.animation,delete lt.animationstart.animation),"TransitionEvent"in window||delete lt.transitionend.transition);function Ri(e){if(as[e])return as[e];if(!lt[e])return e;var n=lt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Ku)return as[e]=n[t];return e}var Wu=Ri("animationend"),Qu=Ri("animationiteration"),Gu=Ri("animationstart"),Xu=Ri("transitionend"),Yu=new Map,Za="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bn(e,n){Yu.set(e,n),Gn(n,[e])}for(var os=0;os<Za.length;os++){var us=Za[os],nf=us.toLowerCase(),tf=us[0].toUpperCase()+us.slice(1);bn(nf,"on"+tf)}bn(Wu,"onAnimationEnd");bn(Qu,"onAnimationIteration");bn(Gu,"onAnimationStart");bn("dblclick","onDoubleClick");bn("focusin","onFocus");bn("focusout","onBlur");bn(Xu,"onTransitionEnd");wt("onMouseEnter",["mouseout","mouseover"]);wt("onMouseLeave",["mouseout","mouseover"]);wt("onPointerEnter",["pointerout","pointerover"]);wt("onPointerLeave",["pointerout","pointerover"]);Gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Kt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Kt));function Ja(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,nh(r,n,void 0,e),e.currentTarget=null}function Zu(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var a=r.length-1;0<=a;a--){var u=r[a],o=u.instance,c=u.currentTarget;if(u=u.listener,o!==l&&i.isPropagationStopped())break e;Ja(i,u,c),l=o}else for(a=0;a<r.length;a++){if(u=r[a],o=u.instance,c=u.currentTarget,u=u.listener,o!==l&&i.isPropagationStopped())break e;Ja(i,u,c),l=o}}}if(li)throw e=Us,li=!1,Us=null,e}function W(e,n){var t=n[Ys];t===void 0&&(t=n[Ys]=new Set);var r=e+"__bubble";t.has(r)||(Ju(n,e,2,!1),t.add(r))}function cs(e,n,t){var r=0;n&&(r|=4),Ju(t,e,r,n)}var Fr="_reactListening"+Math.random().toString(36).slice(2);function cr(e){if(!e[Fr]){e[Fr]=!0,lu.forEach(function(t){t!=="selectionchange"&&(rf.has(t)||cs(t,!1,e),cs(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Fr]||(n[Fr]=!0,cs("selectionchange",!1,n))}}function Ju(e,n,t,r){switch(Mu(n)){case 1:var i=yh;break;case 4:i=gh;break;default:i=Hl}t=i.bind(null,n,t,e),i=void 0,!Hs||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function ds(e,n,t,r,i){var l=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var o=a.tag;if((o===3||o===4)&&(o=a.stateNode.containerInfo,o===i||o.nodeType===8&&o.parentNode===i))return;a=a.return}for(;u!==null;){if(a=An(u),a===null)return;if(o=a.tag,o===5||o===6){r=l=a;continue e}u=u.parentNode}}r=r.return}ju(function(){var c=l,p=Ml(t),f=[];e:{var m=Yu.get(e);if(m!==void 0){var x=Vl,k=e;switch(e){case"keypress":if(Xr(t)===0)break e;case"keydown":case"keyup":x=Ih;break;case"focusin":k="focus",x=is;break;case"focusout":k="blur",x=is;break;case"beforeblur":case"afterblur":x=is;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Ua;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=wh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Mh;break;case Wu:case Qu:case Gu:x=Sh;break;case Xu:x=Fh;break;case"scroll":x=xh;break;case"wheel":x=Hh;break;case"copy":case"cut":case"paste":x=Eh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=$a}var w=(n&4)!==0,g=!w&&e==="scroll",d=w?m!==null?m+"Capture":null:m;w=[];for(var h=c,v;h!==null;){v=h;var N=v.stateNode;if(v.tag===5&&N!==null&&(v=N,d!==null&&(N=ir(h,d),N!=null&&w.push(dr(h,N,v)))),g)break;h=h.return}0<w.length&&(m=new x(m,k,null,t,p),f.push({event:m,listeners:w}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&t!==Fs&&(k=t.relatedTarget||t.fromElement)&&(An(k)||k[an]))break e;if((x||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,x?(k=t.relatedTarget||t.toElement,x=c,k=k?An(k):null,k!==null&&(g=Xn(k),k!==g||k.tag!==5&&k.tag!==6)&&(k=null)):(x=null,k=c),x!==k)){if(w=Ua,N="onMouseLeave",d="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(w=$a,N="onPointerLeave",d="onPointerEnter",h="pointer"),g=x==null?m:at(x),v=k==null?m:at(k),m=new w(N,h+"leave",x,t,p),m.target=g,m.relatedTarget=v,N=null,An(p)===c&&(w=new w(d,h+"enter",k,t,p),w.target=v,w.relatedTarget=g,N=w),g=N,x&&k)n:{for(w=x,d=k,h=0,v=w;v;v=nt(v))h++;for(v=0,N=d;N;N=nt(N))v++;for(;0<h-v;)w=nt(w),h--;for(;0<v-h;)d=nt(d),v--;for(;h--;){if(w===d||d!==null&&w===d.alternate)break n;w=nt(w),d=nt(d)}w=null}else w=null;x!==null&&eo(f,m,x,w,!1),k!==null&&g!==null&&eo(f,g,k,w,!0)}}e:{if(m=c?at(c):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var _=Wh;else if(Ka(m))if(Vu)_=Yh;else{_=Gh;var P=Qh}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(_=Xh);if(_&&(_=_(e,c))){Uu(f,_,t,p);break e}P&&P(e,m,c),e==="focusout"&&(P=m._wrapperState)&&P.controlled&&m.type==="number"&&Is(m,"number",m.value)}switch(P=c?at(c):window,e){case"focusin":(Ka(P)||P.contentEditable==="true")&&(st=P,qs=c,Yt=null);break;case"focusout":Yt=qs=st=null;break;case"mousedown":Ks=!0;break;case"contextmenu":case"mouseup":case"dragend":Ks=!1,Ya(f,t,p);break;case"selectionchange":if(ef)break;case"keydown":case"keyup":Ya(f,t,p)}var b;if(Bl)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else it?Au(e,t)&&(I="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(I="onCompositionStart");I&&(Fu&&t.locale!=="ko"&&(it||I!=="onCompositionStart"?I==="onCompositionEnd"&&it&&(b=Du()):(yn=p,Ul="value"in yn?yn.value:yn.textContent,it=!0)),P=di(c,I),0<P.length&&(I=new Va(I,e,null,t,p),f.push({event:I,listeners:P}),b?I.data=b:(b=Hu(t),b!==null&&(I.data=b)))),(b=Vh?$h(e,t):Bh(e,t))&&(c=di(c,"onBeforeInput"),0<c.length&&(p=new Va("onBeforeInput","beforeinput",null,t,p),f.push({event:p,listeners:c}),p.data=b))}Zu(f,n)})}function dr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function di(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=ir(e,t),l!=null&&r.unshift(dr(e,l,i)),l=ir(e,n),l!=null&&r.push(dr(e,l,i))),e=e.return}return r}function nt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function eo(e,n,t,r,i){for(var l=n._reactName,a=[];t!==null&&t!==r;){var u=t,o=u.alternate,c=u.stateNode;if(o!==null&&o===r)break;u.tag===5&&c!==null&&(u=c,i?(o=ir(t,l),o!=null&&a.unshift(dr(t,o,u))):i||(o=ir(t,l),o!=null&&a.push(dr(t,o,u)))),t=t.return}a.length!==0&&e.push({event:n,listeners:a})}var sf=/\r\n?/g,lf=/\u0000|\uFFFD/g;function no(e){return(typeof e=="string"?e:""+e).replace(sf,`
`).replace(lf,"")}function Ar(e,n,t){if(n=no(n),no(e)!==n&&t)throw Error(C(425))}function hi(){}var Ws=null,Qs=null;function Gs(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Xs=typeof setTimeout=="function"?setTimeout:void 0,af=typeof clearTimeout=="function"?clearTimeout:void 0,to=typeof Promise=="function"?Promise:void 0,of=typeof queueMicrotask=="function"?queueMicrotask:typeof to<"u"?function(e){return to.resolve(null).then(e).catch(uf)}:Xs;function uf(e){setTimeout(function(){throw e})}function hs(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),ar(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);ar(n)}function Nn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function ro(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var bt=Math.random().toString(36).slice(2),Ye="__reactFiber$"+bt,hr="__reactProps$"+bt,an="__reactContainer$"+bt,Ys="__reactEvents$"+bt,cf="__reactListeners$"+bt,df="__reactHandles$"+bt;function An(e){var n=e[Ye];if(n)return n;for(var t=e.parentNode;t;){if(n=t[an]||t[Ye]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=ro(e);e!==null;){if(t=e[Ye])return t;e=ro(e)}return n}e=t,t=e.parentNode}return null}function Sr(e){return e=e[Ye]||e[an],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function at(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Mi(e){return e[hr]||null}var Zs=[],ot=-1;function Pn(e){return{current:e}}function Q(e){0>ot||(e.current=Zs[ot],Zs[ot]=null,ot--)}function K(e,n){ot++,Zs[ot]=e.current,e.current=n}var Ln={},ye=Pn(Ln),Se=Pn(!1),Bn=Ln;function jt(e,n){var t=e.type.contextTypes;if(!t)return Ln;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in t)i[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function Te(e){return e=e.childContextTypes,e!=null}function fi(){Q(Se),Q(ye)}function io(e,n,t){if(ye.current!==Ln)throw Error(C(168));K(ye,n),K(Se,t)}function ec(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(C(108,Qd(e)||"Unknown",i));return Z({},t,r)}function pi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ln,Bn=ye.current,K(ye,e),K(Se,Se.current),!0}function so(e,n,t){var r=e.stateNode;if(!r)throw Error(C(169));t?(e=ec(e,n,Bn),r.__reactInternalMemoizedMergedChildContext=e,Q(Se),Q(ye),K(ye,e)):Q(Se),K(Se,t)}var nn=null,Di=!1,fs=!1;function nc(e){nn===null?nn=[e]:nn.push(e)}function hf(e){Di=!0,nc(e)}function In(){if(!fs&&nn!==null){fs=!0;var e=0,n=B;try{var t=nn;for(B=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}nn=null,Di=!1}catch(i){throw nn!==null&&(nn=nn.slice(e+1)),Eu(Dl,In),i}finally{B=n,fs=!1}}return null}var ut=[],ct=0,mi=null,vi=0,Re=[],Me=0,qn=null,tn=1,rn="";function Dn(e,n){ut[ct++]=vi,ut[ct++]=mi,mi=e,vi=n}function tc(e,n,t){Re[Me++]=tn,Re[Me++]=rn,Re[Me++]=qn,qn=e;var r=tn;e=rn;var i=32-qe(r)-1;r&=~(1<<i),t+=1;var l=32-qe(n)+i;if(30<l){var a=i-i%5;l=(r&(1<<a)-1).toString(32),r>>=a,i-=a,tn=1<<32-qe(n)+i|t<<i|r,rn=l+e}else tn=1<<l|t<<i|r,rn=e}function Kl(e){e.return!==null&&(Dn(e,1),tc(e,1,0))}function Wl(e){for(;e===mi;)mi=ut[--ct],ut[ct]=null,vi=ut[--ct],ut[ct]=null;for(;e===qn;)qn=Re[--Me],Re[Me]=null,rn=Re[--Me],Re[Me]=null,tn=Re[--Me],Re[Me]=null}var Le=null,_e=null,G=!1,Be=null;function rc(e,n){var t=De(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function lo(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Le=e,_e=Nn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Le=e,_e=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=qn!==null?{id:tn,overflow:rn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=De(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Le=e,_e=null,!0):!1;default:return!1}}function Js(e){return(e.mode&1)!==0&&(e.flags&128)===0}function el(e){if(G){var n=_e;if(n){var t=n;if(!lo(e,n)){if(Js(e))throw Error(C(418));n=Nn(t.nextSibling);var r=Le;n&&lo(e,n)?rc(r,t):(e.flags=e.flags&-4097|2,G=!1,Le=e)}}else{if(Js(e))throw Error(C(418));e.flags=e.flags&-4097|2,G=!1,Le=e}}}function ao(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Le=e}function Hr(e){if(e!==Le)return!1;if(!G)return ao(e),G=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Gs(e.type,e.memoizedProps)),n&&(n=_e)){if(Js(e))throw ic(),Error(C(418));for(;n;)rc(e,n),n=Nn(n.nextSibling)}if(ao(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){_e=Nn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}_e=null}}else _e=Le?Nn(e.stateNode.nextSibling):null;return!0}function ic(){for(var e=_e;e;)e=Nn(e.nextSibling)}function Nt(){_e=Le=null,G=!1}function Ql(e){Be===null?Be=[e]:Be.push(e)}var ff=dn.ReactCurrentBatchConfig;function Ht(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(C(309));var r=t.stateNode}if(!r)throw Error(C(147,e));var i=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(a){var u=i.refs;a===null?delete u[l]:u[l]=a},n._stringRef=l,n)}if(typeof e!="string")throw Error(C(284));if(!t._owner)throw Error(C(290,e))}return e}function Ur(e,n){throw e=Object.prototype.toString.call(n),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function oo(e){var n=e._init;return n(e._payload)}function sc(e){function n(d,h){if(e){var v=d.deletions;v===null?(d.deletions=[h],d.flags|=16):v.push(h)}}function t(d,h){if(!e)return null;for(;h!==null;)n(d,h),h=h.sibling;return null}function r(d,h){for(d=new Map;h!==null;)h.key!==null?d.set(h.key,h):d.set(h.index,h),h=h.sibling;return d}function i(d,h){return d=Cn(d,h),d.index=0,d.sibling=null,d}function l(d,h,v){return d.index=v,e?(v=d.alternate,v!==null?(v=v.index,v<h?(d.flags|=2,h):v):(d.flags|=2,h)):(d.flags|=1048576,h)}function a(d){return e&&d.alternate===null&&(d.flags|=2),d}function u(d,h,v,N){return h===null||h.tag!==6?(h=ks(v,d.mode,N),h.return=d,h):(h=i(h,v),h.return=d,h)}function o(d,h,v,N){var _=v.type;return _===rt?p(d,h,v.props.children,N,v.key):h!==null&&(h.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===fn&&oo(_)===h.type)?(N=i(h,v.props),N.ref=Ht(d,h,v),N.return=d,N):(N=ri(v.type,v.key,v.props,null,d.mode,N),N.ref=Ht(d,h,v),N.return=d,N)}function c(d,h,v,N){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=ws(v,d.mode,N),h.return=d,h):(h=i(h,v.children||[]),h.return=d,h)}function p(d,h,v,N,_){return h===null||h.tag!==7?(h=$n(v,d.mode,N,_),h.return=d,h):(h=i(h,v),h.return=d,h)}function f(d,h,v){if(typeof h=="string"&&h!==""||typeof h=="number")return h=ks(""+h,d.mode,v),h.return=d,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Lr:return v=ri(h.type,h.key,h.props,null,d.mode,v),v.ref=Ht(d,null,h),v.return=d,v;case tt:return h=ws(h,d.mode,v),h.return=d,h;case fn:var N=h._init;return f(d,N(h._payload),v)}if(Bt(h)||Rt(h))return h=$n(h,d.mode,v,null),h.return=d,h;Ur(d,h)}return null}function m(d,h,v,N){var _=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return _!==null?null:u(d,h,""+v,N);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Lr:return v.key===_?o(d,h,v,N):null;case tt:return v.key===_?c(d,h,v,N):null;case fn:return _=v._init,m(d,h,_(v._payload),N)}if(Bt(v)||Rt(v))return _!==null?null:p(d,h,v,N,null);Ur(d,v)}return null}function x(d,h,v,N,_){if(typeof N=="string"&&N!==""||typeof N=="number")return d=d.get(v)||null,u(h,d,""+N,_);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Lr:return d=d.get(N.key===null?v:N.key)||null,o(h,d,N,_);case tt:return d=d.get(N.key===null?v:N.key)||null,c(h,d,N,_);case fn:var P=N._init;return x(d,h,v,P(N._payload),_)}if(Bt(N)||Rt(N))return d=d.get(v)||null,p(h,d,N,_,null);Ur(h,N)}return null}function k(d,h,v,N){for(var _=null,P=null,b=h,I=h=0,M=null;b!==null&&I<v.length;I++){b.index>I?(M=b,b=null):M=b.sibling;var S=m(d,b,v[I],N);if(S===null){b===null&&(b=M);break}e&&b&&S.alternate===null&&n(d,b),h=l(S,h,I),P===null?_=S:P.sibling=S,P=S,b=M}if(I===v.length)return t(d,b),G&&Dn(d,I),_;if(b===null){for(;I<v.length;I++)b=f(d,v[I],N),b!==null&&(h=l(b,h,I),P===null?_=b:P.sibling=b,P=b);return G&&Dn(d,I),_}for(b=r(d,b);I<v.length;I++)M=x(b,d,I,v[I],N),M!==null&&(e&&M.alternate!==null&&b.delete(M.key===null?I:M.key),h=l(M,h,I),P===null?_=M:P.sibling=M,P=M);return e&&b.forEach(function(A){return n(d,A)}),G&&Dn(d,I),_}function w(d,h,v,N){var _=Rt(v);if(typeof _!="function")throw Error(C(150));if(v=_.call(v),v==null)throw Error(C(151));for(var P=_=null,b=h,I=h=0,M=null,S=v.next();b!==null&&!S.done;I++,S=v.next()){b.index>I?(M=b,b=null):M=b.sibling;var A=m(d,b,S.value,N);if(A===null){b===null&&(b=M);break}e&&b&&A.alternate===null&&n(d,b),h=l(A,h,I),P===null?_=A:P.sibling=A,P=A,b=M}if(S.done)return t(d,b),G&&Dn(d,I),_;if(b===null){for(;!S.done;I++,S=v.next())S=f(d,S.value,N),S!==null&&(h=l(S,h,I),P===null?_=S:P.sibling=S,P=S);return G&&Dn(d,I),_}for(b=r(d,b);!S.done;I++,S=v.next())S=x(b,d,I,S.value,N),S!==null&&(e&&S.alternate!==null&&b.delete(S.key===null?I:S.key),h=l(S,h,I),P===null?_=S:P.sibling=S,P=S);return e&&b.forEach(function(oe){return n(d,oe)}),G&&Dn(d,I),_}function g(d,h,v,N){if(typeof v=="object"&&v!==null&&v.type===rt&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Lr:e:{for(var _=v.key,P=h;P!==null;){if(P.key===_){if(_=v.type,_===rt){if(P.tag===7){t(d,P.sibling),h=i(P,v.props.children),h.return=d,d=h;break e}}else if(P.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===fn&&oo(_)===P.type){t(d,P.sibling),h=i(P,v.props),h.ref=Ht(d,P,v),h.return=d,d=h;break e}t(d,P);break}else n(d,P);P=P.sibling}v.type===rt?(h=$n(v.props.children,d.mode,N,v.key),h.return=d,d=h):(N=ri(v.type,v.key,v.props,null,d.mode,N),N.ref=Ht(d,h,v),N.return=d,d=N)}return a(d);case tt:e:{for(P=v.key;h!==null;){if(h.key===P)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){t(d,h.sibling),h=i(h,v.children||[]),h.return=d,d=h;break e}else{t(d,h);break}else n(d,h);h=h.sibling}h=ws(v,d.mode,N),h.return=d,d=h}return a(d);case fn:return P=v._init,g(d,h,P(v._payload),N)}if(Bt(v))return k(d,h,v,N);if(Rt(v))return w(d,h,v,N);Ur(d,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,h!==null&&h.tag===6?(t(d,h.sibling),h=i(h,v),h.return=d,d=h):(t(d,h),h=ks(v,d.mode,N),h.return=d,d=h),a(d)):t(d,h)}return g}var St=sc(!0),lc=sc(!1),yi=Pn(null),gi=null,dt=null,Gl=null;function Xl(){Gl=dt=gi=null}function Yl(e){var n=yi.current;Q(yi),e._currentValue=n}function nl(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function xt(e,n){gi=e,Gl=dt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Ne=!0),e.firstContext=null)}function Ae(e){var n=e._currentValue;if(Gl!==e)if(e={context:e,memoizedValue:n,next:null},dt===null){if(gi===null)throw Error(C(308));dt=e,gi.dependencies={lanes:0,firstContext:e}}else dt=dt.next=e;return n}var Hn=null;function Zl(e){Hn===null?Hn=[e]:Hn.push(e)}function ac(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,Zl(n)):(t.next=i.next,i.next=t),n.interleaved=t,on(e,r)}function on(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var pn=!1;function Jl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function oc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function sn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Sn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,V&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,on(e,t)}return i=r.interleaved,i===null?(n.next=n,Zl(r)):(n.next=i.next,i.next=n),r.interleaved=n,on(e,t)}function Yr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Fl(e,t)}}function uo(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?i=l=a:l=l.next=a,t=t.next}while(t!==null);l===null?i=l=n:l=l.next=n}else i=l=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function xi(e,n,t,r){var i=e.updateQueue;pn=!1;var l=i.firstBaseUpdate,a=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var o=u,c=o.next;o.next=null,a===null?l=c:a.next=c,a=o;var p=e.alternate;p!==null&&(p=p.updateQueue,u=p.lastBaseUpdate,u!==a&&(u===null?p.firstBaseUpdate=c:u.next=c,p.lastBaseUpdate=o))}if(l!==null){var f=i.baseState;a=0,p=c=o=null,u=l;do{var m=u.lane,x=u.eventTime;if((r&m)===m){p!==null&&(p=p.next={eventTime:x,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var k=e,w=u;switch(m=n,x=t,w.tag){case 1:if(k=w.payload,typeof k=="function"){f=k.call(x,f,m);break e}f=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=w.payload,m=typeof k=="function"?k.call(x,f,m):k,m==null)break e;f=Z({},f,m);break e;case 2:pn=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[u]:m.push(u))}else x={eventTime:x,lane:m,tag:u.tag,payload:u.payload,callback:u.callback,next:null},p===null?(c=p=x,o=f):p=p.next=x,a|=m;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;m=u,u=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(p===null&&(o=f),i.baseState=o,i.firstBaseUpdate=c,i.lastBaseUpdate=p,n=i.shared.interleaved,n!==null){i=n;do a|=i.lane,i=i.next;while(i!==n)}else l===null&&(i.shared.lanes=0);Wn|=a,e.lanes=a,e.memoizedState=f}}function co(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var Tr={},Je=Pn(Tr),fr=Pn(Tr),pr=Pn(Tr);function Un(e){if(e===Tr)throw Error(C(174));return e}function ea(e,n){switch(K(pr,n),K(fr,e),K(Je,Tr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Rs(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Rs(n,e)}Q(Je),K(Je,n)}function Tt(){Q(Je),Q(fr),Q(pr)}function uc(e){Un(pr.current);var n=Un(Je.current),t=Rs(n,e.type);n!==t&&(K(fr,e),K(Je,t))}function na(e){fr.current===e&&(Q(Je),Q(fr))}var X=Pn(0);function ki(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ps=[];function ta(){for(var e=0;e<ps.length;e++)ps[e]._workInProgressVersionPrimary=null;ps.length=0}var Zr=dn.ReactCurrentDispatcher,ms=dn.ReactCurrentBatchConfig,Kn=0,Y=null,ie=null,le=null,wi=!1,Zt=!1,mr=0,pf=0;function fe(){throw Error(C(321))}function ra(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!We(e[t],n[t]))return!1;return!0}function ia(e,n,t,r,i,l){if(Kn=l,Y=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Zr.current=e===null||e.memoizedState===null?gf:xf,e=t(r,i),Zt){l=0;do{if(Zt=!1,mr=0,25<=l)throw Error(C(301));l+=1,le=ie=null,n.updateQueue=null,Zr.current=kf,e=t(r,i)}while(Zt)}if(Zr.current=ji,n=ie!==null&&ie.next!==null,Kn=0,le=ie=Y=null,wi=!1,n)throw Error(C(300));return e}function sa(){var e=mr!==0;return mr=0,e}function Xe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?Y.memoizedState=le=e:le=le.next=e,le}function He(){if(ie===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=ie.next;var n=le===null?Y.memoizedState:le.next;if(n!==null)le=n,ie=e;else{if(e===null)throw Error(C(310));ie=e,e={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},le===null?Y.memoizedState=le=e:le=le.next=e}return le}function vr(e,n){return typeof n=="function"?n(e):n}function vs(e){var n=He(),t=n.queue;if(t===null)throw Error(C(311));t.lastRenderedReducer=e;var r=ie,i=r.baseQueue,l=t.pending;if(l!==null){if(i!==null){var a=i.next;i.next=l.next,l.next=a}r.baseQueue=i=l,t.pending=null}if(i!==null){l=i.next,r=r.baseState;var u=a=null,o=null,c=l;do{var p=c.lane;if((Kn&p)===p)o!==null&&(o=o.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};o===null?(u=o=f,a=r):o=o.next=f,Y.lanes|=p,Wn|=p}c=c.next}while(c!==null&&c!==l);o===null?a=r:o.next=u,We(r,n.memoizedState)||(Ne=!0),n.memoizedState=r,n.baseState=a,n.baseQueue=o,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do l=i.lane,Y.lanes|=l,Wn|=l,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function ys(e){var n=He(),t=n.queue;if(t===null)throw Error(C(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,l=n.memoizedState;if(i!==null){t.pending=null;var a=i=i.next;do l=e(l,a.action),a=a.next;while(a!==i);We(l,n.memoizedState)||(Ne=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function cc(){}function dc(e,n){var t=Y,r=He(),i=n(),l=!We(r.memoizedState,i);if(l&&(r.memoizedState=i,Ne=!0),r=r.queue,la(pc.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||le!==null&&le.memoizedState.tag&1){if(t.flags|=2048,yr(9,fc.bind(null,t,r,i,n),void 0,null),ae===null)throw Error(C(349));Kn&30||hc(t,n,i)}return i}function hc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Y.updateQueue,n===null?(n={lastEffect:null,stores:null},Y.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function fc(e,n,t,r){n.value=t,n.getSnapshot=r,mc(n)&&vc(e)}function pc(e,n,t){return t(function(){mc(n)&&vc(e)})}function mc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!We(e,t)}catch{return!0}}function vc(e){var n=on(e,1);n!==null&&Ke(n,e,1,-1)}function ho(e){var n=Xe();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vr,lastRenderedState:e},n.queue=e,e=e.dispatch=yf.bind(null,Y,e),[n.memoizedState,e]}function yr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=Y.updateQueue,n===null?(n={lastEffect:null,stores:null},Y.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function yc(){return He().memoizedState}function Jr(e,n,t,r){var i=Xe();Y.flags|=e,i.memoizedState=yr(1|n,t,void 0,r===void 0?null:r)}function Fi(e,n,t,r){var i=He();r=r===void 0?null:r;var l=void 0;if(ie!==null){var a=ie.memoizedState;if(l=a.destroy,r!==null&&ra(r,a.deps)){i.memoizedState=yr(n,t,l,r);return}}Y.flags|=e,i.memoizedState=yr(1|n,t,l,r)}function fo(e,n){return Jr(8390656,8,e,n)}function la(e,n){return Fi(2048,8,e,n)}function gc(e,n){return Fi(4,2,e,n)}function xc(e,n){return Fi(4,4,e,n)}function kc(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function wc(e,n,t){return t=t!=null?t.concat([e]):null,Fi(4,4,kc.bind(null,n,e),t)}function aa(){}function jc(e,n){var t=He();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&ra(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Nc(e,n){var t=He();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&ra(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Sc(e,n,t){return Kn&21?(We(t,n)||(t=_u(),Y.lanes|=t,Wn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Ne=!0),e.memoizedState=t)}function mf(e,n){var t=B;B=t!==0&&4>t?t:4,e(!0);var r=ms.transition;ms.transition={};try{e(!1),n()}finally{B=t,ms.transition=r}}function Tc(){return He().memoizedState}function vf(e,n,t){var r=En(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Ec(e))Cc(n,t);else if(t=ac(e,n,t,r),t!==null){var i=xe();Ke(t,e,r,i),zc(t,n,r)}}function yf(e,n,t){var r=En(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ec(e))Cc(n,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var a=n.lastRenderedState,u=l(a,t);if(i.hasEagerState=!0,i.eagerState=u,We(u,a)){var o=n.interleaved;o===null?(i.next=i,Zl(n)):(i.next=o.next,o.next=i),n.interleaved=i;return}}catch{}finally{}t=ac(e,n,i,r),t!==null&&(i=xe(),Ke(t,e,r,i),zc(t,n,r))}}function Ec(e){var n=e.alternate;return e===Y||n!==null&&n===Y}function Cc(e,n){Zt=wi=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function zc(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Fl(e,t)}}var ji={readContext:Ae,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},gf={readContext:Ae,useCallback:function(e,n){return Xe().memoizedState=[e,n===void 0?null:n],e},useContext:Ae,useEffect:fo,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Jr(4194308,4,kc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Jr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Jr(4,2,e,n)},useMemo:function(e,n){var t=Xe();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Xe();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=vf.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var n=Xe();return e={current:e},n.memoizedState=e},useState:ho,useDebugValue:aa,useDeferredValue:function(e){return Xe().memoizedState=e},useTransition:function(){var e=ho(!1),n=e[0];return e=mf.bind(null,e[1]),Xe().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=Y,i=Xe();if(G){if(t===void 0)throw Error(C(407));t=t()}else{if(t=n(),ae===null)throw Error(C(349));Kn&30||hc(r,n,t)}i.memoizedState=t;var l={value:t,getSnapshot:n};return i.queue=l,fo(pc.bind(null,r,l,e),[e]),r.flags|=2048,yr(9,fc.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=Xe(),n=ae.identifierPrefix;if(G){var t=rn,r=tn;t=(r&~(1<<32-qe(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=mr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=pf++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},xf={readContext:Ae,useCallback:jc,useContext:Ae,useEffect:la,useImperativeHandle:wc,useInsertionEffect:gc,useLayoutEffect:xc,useMemo:Nc,useReducer:vs,useRef:yc,useState:function(){return vs(vr)},useDebugValue:aa,useDeferredValue:function(e){var n=He();return Sc(n,ie.memoizedState,e)},useTransition:function(){var e=vs(vr)[0],n=He().memoizedState;return[e,n]},useMutableSource:cc,useSyncExternalStore:dc,useId:Tc,unstable_isNewReconciler:!1},kf={readContext:Ae,useCallback:jc,useContext:Ae,useEffect:la,useImperativeHandle:wc,useInsertionEffect:gc,useLayoutEffect:xc,useMemo:Nc,useReducer:ys,useRef:yc,useState:function(){return ys(vr)},useDebugValue:aa,useDeferredValue:function(e){var n=He();return ie===null?n.memoizedState=e:Sc(n,ie.memoizedState,e)},useTransition:function(){var e=ys(vr)[0],n=He().memoizedState;return[e,n]},useMutableSource:cc,useSyncExternalStore:dc,useId:Tc,unstable_isNewReconciler:!1};function Ve(e,n){if(e&&e.defaultProps){n=Z({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function tl(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:Z({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Ai={isMounted:function(e){return(e=e._reactInternals)?Xn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=xe(),i=En(e),l=sn(r,i);l.payload=n,t!=null&&(l.callback=t),n=Sn(e,l,i),n!==null&&(Ke(n,e,i,r),Yr(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=xe(),i=En(e),l=sn(r,i);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=Sn(e,l,i),n!==null&&(Ke(n,e,i,r),Yr(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=xe(),r=En(e),i=sn(t,r);i.tag=2,n!=null&&(i.callback=n),n=Sn(e,i,r),n!==null&&(Ke(n,e,r,t),Yr(n,e,r))}};function po(e,n,t,r,i,l,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,a):n.prototype&&n.prototype.isPureReactComponent?!ur(t,r)||!ur(i,l):!0}function _c(e,n,t){var r=!1,i=Ln,l=n.contextType;return typeof l=="object"&&l!==null?l=Ae(l):(i=Te(n)?Bn:ye.current,r=n.contextTypes,l=(r=r!=null)?jt(e,i):Ln),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ai,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),n}function mo(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Ai.enqueueReplaceState(n,n.state,null)}function rl(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},Jl(e);var l=n.contextType;typeof l=="object"&&l!==null?i.context=Ae(l):(l=Te(n)?Bn:ye.current,i.context=jt(e,l)),i.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(tl(e,n,l,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&Ai.enqueueReplaceState(i,i.state,null),xi(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Et(e,n){try{var t="",r=n;do t+=Wd(r),r=r.return;while(r);var i=t}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:i,digest:null}}function gs(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function il(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var wf=typeof WeakMap=="function"?WeakMap:Map;function Lc(e,n,t){t=sn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Si||(Si=!0,pl=r),il(e,n)},t}function bc(e,n,t){t=sn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){il(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){il(e,n),typeof r!="function"&&(Tn===null?Tn=new Set([this]):Tn.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),t}function vo(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new wf;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=Rf.bind(null,e,n,t),n.then(e,e))}function yo(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function go(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=sn(-1,1),n.tag=2,Sn(t,n,1))),t.lanes|=1),e)}var jf=dn.ReactCurrentOwner,Ne=!1;function ge(e,n,t,r){n.child=e===null?lc(n,null,t,r):St(n,e.child,t,r)}function xo(e,n,t,r,i){t=t.render;var l=n.ref;return xt(n,i),r=ia(e,n,t,r,l,i),t=sa(),e!==null&&!Ne?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,un(e,n,i)):(G&&t&&Kl(n),n.flags|=1,ge(e,n,r,i),n.child)}function ko(e,n,t,r,i){if(e===null){var l=t.type;return typeof l=="function"&&!ma(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,Pc(e,n,l,r,i)):(e=ri(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&i)){var a=l.memoizedProps;if(t=t.compare,t=t!==null?t:ur,t(a,r)&&e.ref===n.ref)return un(e,n,i)}return n.flags|=1,e=Cn(l,r),e.ref=n.ref,e.return=n,n.child=e}function Pc(e,n,t,r,i){if(e!==null){var l=e.memoizedProps;if(ur(l,r)&&e.ref===n.ref)if(Ne=!1,n.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(Ne=!0);else return n.lanes=e.lanes,un(e,n,i)}return sl(e,n,t,r,i)}function Ic(e,n,t){var r=n.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(ft,ze),ze|=t;else{if(!(t&1073741824))return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,K(ft,ze),ze|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,K(ft,ze),ze|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,K(ft,ze),ze|=r;return ge(e,n,i,t),n.child}function Oc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function sl(e,n,t,r,i){var l=Te(t)?Bn:ye.current;return l=jt(n,l),xt(n,i),t=ia(e,n,t,r,l,i),r=sa(),e!==null&&!Ne?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,un(e,n,i)):(G&&r&&Kl(n),n.flags|=1,ge(e,n,t,i),n.child)}function wo(e,n,t,r,i){if(Te(t)){var l=!0;pi(n)}else l=!1;if(xt(n,i),n.stateNode===null)ei(e,n),_c(n,t,r),rl(n,t,r,i),r=!0;else if(e===null){var a=n.stateNode,u=n.memoizedProps;a.props=u;var o=a.context,c=t.contextType;typeof c=="object"&&c!==null?c=Ae(c):(c=Te(t)?Bn:ye.current,c=jt(n,c));var p=t.getDerivedStateFromProps,f=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==r||o!==c)&&mo(n,a,r,c),pn=!1;var m=n.memoizedState;a.state=m,xi(n,r,a,i),o=n.memoizedState,u!==r||m!==o||Se.current||pn?(typeof p=="function"&&(tl(n,t,p,r),o=n.memoizedState),(u=pn||po(n,t,u,r,m,o,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=o),a.props=r,a.state=o,a.context=c,r=u):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{a=n.stateNode,oc(e,n),u=n.memoizedProps,c=n.type===n.elementType?u:Ve(n.type,u),a.props=c,f=n.pendingProps,m=a.context,o=t.contextType,typeof o=="object"&&o!==null?o=Ae(o):(o=Te(t)?Bn:ye.current,o=jt(n,o));var x=t.getDerivedStateFromProps;(p=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==f||m!==o)&&mo(n,a,r,o),pn=!1,m=n.memoizedState,a.state=m,xi(n,r,a,i);var k=n.memoizedState;u!==f||m!==k||Se.current||pn?(typeof x=="function"&&(tl(n,t,x,r),k=n.memoizedState),(c=pn||po(n,t,c,r,m,k,o)||!1)?(p||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,k,o),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,k,o)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=k),a.props=r,a.state=k,a.context=o,r=c):(typeof a.componentDidUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),r=!1)}return ll(e,n,t,r,l,i)}function ll(e,n,t,r,i,l){Oc(e,n);var a=(n.flags&128)!==0;if(!r&&!a)return i&&so(n,t,!1),un(e,n,l);r=n.stateNode,jf.current=n;var u=a&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&a?(n.child=St(n,e.child,null,l),n.child=St(n,null,u,l)):ge(e,n,u,l),n.memoizedState=r.state,i&&so(n,t,!0),n.child}function Rc(e){var n=e.stateNode;n.pendingContext?io(e,n.pendingContext,n.pendingContext!==n.context):n.context&&io(e,n.context,!1),ea(e,n.containerInfo)}function jo(e,n,t,r,i){return Nt(),Ql(i),n.flags|=256,ge(e,n,t,r),n.child}var al={dehydrated:null,treeContext:null,retryLane:0};function ol(e){return{baseLanes:e,cachePool:null,transitions:null}}function Mc(e,n,t){var r=n.pendingProps,i=X.current,l=!1,a=(n.flags&128)!==0,u;if((u=a)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),K(X,i&1),e===null)return el(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(a=r.children,e=r.fallback,l?(r=n.mode,l=n.child,a={mode:"hidden",children:a},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=a):l=Vi(a,r,0,null),e=$n(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=ol(t),n.memoizedState=al,e):oa(n,a));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return Nf(e,n,a,r,u,i,t);if(l){l=r.fallback,a=n.mode,i=e.child,u=i.sibling;var o={mode:"hidden",children:r.children};return!(a&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=o,n.deletions=null):(r=Cn(i,o),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?l=Cn(u,l):(l=$n(l,a,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,a=e.child.memoizedState,a=a===null?ol(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},l.memoizedState=a,l.childLanes=e.childLanes&~t,n.memoizedState=al,r}return l=e.child,e=l.sibling,r=Cn(l,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function oa(e,n){return n=Vi({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Vr(e,n,t,r){return r!==null&&Ql(r),St(n,e.child,null,t),e=oa(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Nf(e,n,t,r,i,l,a){if(t)return n.flags&256?(n.flags&=-257,r=gs(Error(C(422))),Vr(e,n,a,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,i=n.mode,r=Vi({mode:"visible",children:r.children},i,0,null),l=$n(l,i,a,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,n.mode&1&&St(n,e.child,null,a),n.child.memoizedState=ol(a),n.memoizedState=al,l);if(!(n.mode&1))return Vr(e,n,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,l=Error(C(419)),r=gs(l,r,void 0),Vr(e,n,a,r)}if(u=(a&e.childLanes)!==0,Ne||u){if(r=ae,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,on(e,i),Ke(r,e,i,-1))}return pa(),r=gs(Error(C(421))),Vr(e,n,a,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=Mf.bind(null,e),i._reactRetry=n,null):(e=l.treeContext,_e=Nn(i.nextSibling),Le=n,G=!0,Be=null,e!==null&&(Re[Me++]=tn,Re[Me++]=rn,Re[Me++]=qn,tn=e.id,rn=e.overflow,qn=n),n=oa(n,r.children),n.flags|=4096,n)}function No(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),nl(e.return,n,t)}function xs(e,n,t,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=i)}function Dc(e,n,t){var r=n.pendingProps,i=r.revealOrder,l=r.tail;if(ge(e,n,r.children,t),r=X.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&No(e,t,n);else if(e.tag===19)No(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(K(X,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&ki(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),xs(n,!1,i,t,l);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&ki(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}xs(n,!0,t,null,l);break;case"together":xs(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ei(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function un(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Wn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(C(153));if(n.child!==null){for(e=n.child,t=Cn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Cn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Sf(e,n,t){switch(n.tag){case 3:Rc(n),Nt();break;case 5:uc(n);break;case 1:Te(n.type)&&pi(n);break;case 4:ea(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;K(yi,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(K(X,X.current&1),n.flags|=128,null):t&n.child.childLanes?Mc(e,n,t):(K(X,X.current&1),e=un(e,n,t),e!==null?e.sibling:null);K(X,X.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Dc(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),K(X,X.current),r)break;return null;case 22:case 23:return n.lanes=0,Ic(e,n,t)}return un(e,n,t)}var Fc,ul,Ac,Hc;Fc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};ul=function(){};Ac=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,Un(Je.current);var l=null;switch(t){case"input":i=bs(e,i),r=bs(e,r),l=[];break;case"select":i=Z({},i,{value:void 0}),r=Z({},r,{value:void 0}),l=[];break;case"textarea":i=Os(e,i),r=Os(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=hi)}Ms(t,r);var a;t=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var u=i[c];for(a in u)u.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(tr.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var o=r[c];if(u=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&o!==u&&(o!=null||u!=null))if(c==="style")if(u){for(a in u)!u.hasOwnProperty(a)||o&&o.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in o)o.hasOwnProperty(a)&&u[a]!==o[a]&&(t||(t={}),t[a]=o[a])}else t||(l||(l=[]),l.push(c,t)),t=o;else c==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,u=u?u.__html:void 0,o!=null&&u!==o&&(l=l||[]).push(c,o)):c==="children"?typeof o!="string"&&typeof o!="number"||(l=l||[]).push(c,""+o):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(tr.hasOwnProperty(c)?(o!=null&&c==="onScroll"&&W("scroll",e),l||u===o||(l=[])):(l=l||[]).push(c,o))}t&&(l=l||[]).push("style",t);var c=l;(n.updateQueue=c)&&(n.flags|=4)}};Hc=function(e,n,t,r){t!==r&&(n.flags|=4)};function Ut(e,n){if(!G)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function pe(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Tf(e,n,t){var r=n.pendingProps;switch(Wl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(n),null;case 1:return Te(n.type)&&fi(),pe(n),null;case 3:return r=n.stateNode,Tt(),Q(Se),Q(ye),ta(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Hr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Be!==null&&(yl(Be),Be=null))),ul(e,n),pe(n),null;case 5:na(n);var i=Un(pr.current);if(t=n.type,e!==null&&n.stateNode!=null)Ac(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(C(166));return pe(n),null}if(e=Un(Je.current),Hr(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[Ye]=n,r[hr]=l,e=(n.mode&1)!==0,t){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(i=0;i<Kt.length;i++)W(Kt[i],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":ba(r,l),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},W("invalid",r);break;case"textarea":Ia(r,l),W("invalid",r)}Ms(t,l),i=null;for(var a in l)if(l.hasOwnProperty(a)){var u=l[a];a==="children"?typeof u=="string"?r.textContent!==u&&(l.suppressHydrationWarning!==!0&&Ar(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(l.suppressHydrationWarning!==!0&&Ar(r.textContent,u,e),i=["children",""+u]):tr.hasOwnProperty(a)&&u!=null&&a==="onScroll"&&W("scroll",r)}switch(t){case"input":br(r),Pa(r,l,!0);break;case"textarea":br(r),Oa(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=hi)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=pu(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(t,{is:r.is}):(e=a.createElement(t),t==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,t),e[Ye]=n,e[hr]=r,Fc(e,n,!1,!1),n.stateNode=e;e:{switch(a=Ds(t,r),t){case"dialog":W("cancel",e),W("close",e),i=r;break;case"iframe":case"object":case"embed":W("load",e),i=r;break;case"video":case"audio":for(i=0;i<Kt.length;i++)W(Kt[i],e);i=r;break;case"source":W("error",e),i=r;break;case"img":case"image":case"link":W("error",e),W("load",e),i=r;break;case"details":W("toggle",e),i=r;break;case"input":ba(e,r),i=bs(e,r),W("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Z({},r,{value:void 0}),W("invalid",e);break;case"textarea":Ia(e,r),i=Os(e,r),W("invalid",e);break;default:i=r}Ms(t,i),u=i;for(l in u)if(u.hasOwnProperty(l)){var o=u[l];l==="style"?yu(e,o):l==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,o!=null&&mu(e,o)):l==="children"?typeof o=="string"?(t!=="textarea"||o!=="")&&rr(e,o):typeof o=="number"&&rr(e,""+o):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(tr.hasOwnProperty(l)?o!=null&&l==="onScroll"&&W("scroll",e):o!=null&&Pl(e,l,o,a))}switch(t){case"input":br(e),Pa(e,r,!1);break;case"textarea":br(e),Oa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+_n(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?mt(e,!!r.multiple,l,!1):r.defaultValue!=null&&mt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=hi)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return pe(n),null;case 6:if(e&&n.stateNode!=null)Hc(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(C(166));if(t=Un(pr.current),Un(Je.current),Hr(n)){if(r=n.stateNode,t=n.memoizedProps,r[Ye]=n,(l=r.nodeValue!==t)&&(e=Le,e!==null))switch(e.tag){case 3:Ar(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ar(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Ye]=n,n.stateNode=r}return pe(n),null;case 13:if(Q(X),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&_e!==null&&n.mode&1&&!(n.flags&128))ic(),Nt(),n.flags|=98560,l=!1;else if(l=Hr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(C(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(C(317));l[Ye]=n}else Nt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;pe(n),l=!1}else Be!==null&&(yl(Be),Be=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||X.current&1?se===0&&(se=3):pa())),n.updateQueue!==null&&(n.flags|=4),pe(n),null);case 4:return Tt(),ul(e,n),e===null&&cr(n.stateNode.containerInfo),pe(n),null;case 10:return Yl(n.type._context),pe(n),null;case 17:return Te(n.type)&&fi(),pe(n),null;case 19:if(Q(X),l=n.memoizedState,l===null)return pe(n),null;if(r=(n.flags&128)!==0,a=l.rendering,a===null)if(r)Ut(l,!1);else{if(se!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(a=ki(e),a!==null){for(n.flags|=128,Ut(l,!1),r=a.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,a=l.alternate,a===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=a.childLanes,l.lanes=a.lanes,l.child=a.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=a.memoizedProps,l.memoizedState=a.memoizedState,l.updateQueue=a.updateQueue,l.type=a.type,e=a.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return K(X,X.current&1|2),n.child}e=e.sibling}l.tail!==null&&ee()>Ct&&(n.flags|=128,r=!0,Ut(l,!1),n.lanes=4194304)}else{if(!r)if(e=ki(a),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Ut(l,!0),l.tail===null&&l.tailMode==="hidden"&&!a.alternate&&!G)return pe(n),null}else 2*ee()-l.renderingStartTime>Ct&&t!==1073741824&&(n.flags|=128,r=!0,Ut(l,!1),n.lanes=4194304);l.isBackwards?(a.sibling=n.child,n.child=a):(t=l.last,t!==null?t.sibling=a:n.child=a,l.last=a)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=ee(),n.sibling=null,t=X.current,K(X,r?t&1|2:t&1),n):(pe(n),null);case 22:case 23:return fa(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?ze&1073741824&&(pe(n),n.subtreeFlags&6&&(n.flags|=8192)):pe(n),null;case 24:return null;case 25:return null}throw Error(C(156,n.tag))}function Ef(e,n){switch(Wl(n),n.tag){case 1:return Te(n.type)&&fi(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Tt(),Q(Se),Q(ye),ta(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return na(n),null;case 13:if(Q(X),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(C(340));Nt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Q(X),null;case 4:return Tt(),null;case 10:return Yl(n.type._context),null;case 22:case 23:return fa(),null;case 24:return null;default:return null}}var $r=!1,me=!1,Cf=typeof WeakSet=="function"?WeakSet:Set,O=null;function ht(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){J(e,n,r)}else t.current=null}function cl(e,n,t){try{t()}catch(r){J(e,n,r)}}var So=!1;function zf(e,n){if(Ws=ui,e=qu(),ql(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var a=0,u=-1,o=-1,c=0,p=0,f=e,m=null;n:for(;;){for(var x;f!==t||i!==0&&f.nodeType!==3||(u=a+i),f!==l||r!==0&&f.nodeType!==3||(o=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(x=f.firstChild)!==null;)m=f,f=x;for(;;){if(f===e)break n;if(m===t&&++c===i&&(u=a),m===l&&++p===r&&(o=a),(x=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=x}t=u===-1||o===-1?null:{start:u,end:o}}else t=null}t=t||{start:0,end:0}}else t=null;for(Qs={focusedElem:e,selectionRange:t},ui=!1,O=n;O!==null;)if(n=O,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,O=e;else for(;O!==null;){n=O;try{var k=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var w=k.memoizedProps,g=k.memoizedState,d=n.stateNode,h=d.getSnapshotBeforeUpdate(n.elementType===n.type?w:Ve(n.type,w),g);d.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var v=n.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(N){J(n,n.return,N)}if(e=n.sibling,e!==null){e.return=n.return,O=e;break}O=n.return}return k=So,So=!1,k}function Jt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&cl(n,t,l)}i=i.next}while(i!==r)}}function Hi(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function dl(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Uc(e){var n=e.alternate;n!==null&&(e.alternate=null,Uc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ye],delete n[hr],delete n[Ys],delete n[cf],delete n[df])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vc(e){return e.tag===5||e.tag===3||e.tag===4}function To(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=hi));else if(r!==4&&(e=e.child,e!==null))for(hl(e,n,t),e=e.sibling;e!==null;)hl(e,n,t),e=e.sibling}function fl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(fl(e,n,t),e=e.sibling;e!==null;)fl(e,n,t),e=e.sibling}var ce=null,$e=!1;function hn(e,n,t){for(t=t.child;t!==null;)$c(e,n,t),t=t.sibling}function $c(e,n,t){if(Ze&&typeof Ze.onCommitFiberUnmount=="function")try{Ze.onCommitFiberUnmount(Pi,t)}catch{}switch(t.tag){case 5:me||ht(t,n);case 6:var r=ce,i=$e;ce=null,hn(e,n,t),ce=r,$e=i,ce!==null&&($e?(e=ce,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ce.removeChild(t.stateNode));break;case 18:ce!==null&&($e?(e=ce,t=t.stateNode,e.nodeType===8?hs(e.parentNode,t):e.nodeType===1&&hs(e,t),ar(e)):hs(ce,t.stateNode));break;case 4:r=ce,i=$e,ce=t.stateNode.containerInfo,$e=!0,hn(e,n,t),ce=r,$e=i;break;case 0:case 11:case 14:case 15:if(!me&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,a=l.destroy;l=l.tag,a!==void 0&&(l&2||l&4)&&cl(t,n,a),i=i.next}while(i!==r)}hn(e,n,t);break;case 1:if(!me&&(ht(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(u){J(t,n,u)}hn(e,n,t);break;case 21:hn(e,n,t);break;case 22:t.mode&1?(me=(r=me)||t.memoizedState!==null,hn(e,n,t),me=r):hn(e,n,t);break;default:hn(e,n,t)}}function Eo(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Cf),n.forEach(function(r){var i=Df.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Ue(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var l=e,a=n,u=a;e:for(;u!==null;){switch(u.tag){case 5:ce=u.stateNode,$e=!1;break e;case 3:ce=u.stateNode.containerInfo,$e=!0;break e;case 4:ce=u.stateNode.containerInfo,$e=!0;break e}u=u.return}if(ce===null)throw Error(C(160));$c(l,a,i),ce=null,$e=!1;var o=i.alternate;o!==null&&(o.return=null),i.return=null}catch(c){J(i,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Bc(n,e),n=n.sibling}function Bc(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ue(n,e),Ge(e),r&4){try{Jt(3,e,e.return),Hi(3,e)}catch(w){J(e,e.return,w)}try{Jt(5,e,e.return)}catch(w){J(e,e.return,w)}}break;case 1:Ue(n,e),Ge(e),r&512&&t!==null&&ht(t,t.return);break;case 5:if(Ue(n,e),Ge(e),r&512&&t!==null&&ht(t,t.return),e.flags&32){var i=e.stateNode;try{rr(i,"")}catch(w){J(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,a=t!==null?t.memoizedProps:l,u=e.type,o=e.updateQueue;if(e.updateQueue=null,o!==null)try{u==="input"&&l.type==="radio"&&l.name!=null&&hu(i,l),Ds(u,a);var c=Ds(u,l);for(a=0;a<o.length;a+=2){var p=o[a],f=o[a+1];p==="style"?yu(i,f):p==="dangerouslySetInnerHTML"?mu(i,f):p==="children"?rr(i,f):Pl(i,p,f,c)}switch(u){case"input":Ps(i,l);break;case"textarea":fu(i,l);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var x=l.value;x!=null?mt(i,!!l.multiple,x,!1):m!==!!l.multiple&&(l.defaultValue!=null?mt(i,!!l.multiple,l.defaultValue,!0):mt(i,!!l.multiple,l.multiple?[]:"",!1))}i[hr]=l}catch(w){J(e,e.return,w)}}break;case 6:if(Ue(n,e),Ge(e),r&4){if(e.stateNode===null)throw Error(C(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(w){J(e,e.return,w)}}break;case 3:if(Ue(n,e),Ge(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{ar(n.containerInfo)}catch(w){J(e,e.return,w)}break;case 4:Ue(n,e),Ge(e);break;case 13:Ue(n,e),Ge(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(da=ee())),r&4&&Eo(e);break;case 22:if(p=t!==null&&t.memoizedState!==null,e.mode&1?(me=(c=me)||p,Ue(n,e),me=c):Ue(n,e),Ge(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!p&&e.mode&1)for(O=e,p=e.child;p!==null;){for(f=O=p;O!==null;){switch(m=O,x=m.child,m.tag){case 0:case 11:case 14:case 15:Jt(4,m,m.return);break;case 1:ht(m,m.return);var k=m.stateNode;if(typeof k.componentWillUnmount=="function"){r=m,t=m.return;try{n=r,k.props=n.memoizedProps,k.state=n.memoizedState,k.componentWillUnmount()}catch(w){J(r,t,w)}}break;case 5:ht(m,m.return);break;case 22:if(m.memoizedState!==null){zo(f);continue}}x!==null?(x.return=m,O=x):zo(f)}p=p.sibling}e:for(p=null,f=e;;){if(f.tag===5){if(p===null){p=f;try{i=f.stateNode,c?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(u=f.stateNode,o=f.memoizedProps.style,a=o!=null&&o.hasOwnProperty("display")?o.display:null,u.style.display=vu("display",a))}catch(w){J(e,e.return,w)}}}else if(f.tag===6){if(p===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(w){J(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;p===f&&(p=null),f=f.return}p===f&&(p=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ue(n,e),Ge(e),r&4&&Eo(e);break;case 21:break;default:Ue(n,e),Ge(e)}}function Ge(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Vc(t)){var r=t;break e}t=t.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(rr(i,""),r.flags&=-33);var l=To(e);fl(e,l,i);break;case 3:case 4:var a=r.stateNode.containerInfo,u=To(e);hl(e,u,a);break;default:throw Error(C(161))}}catch(o){J(e,e.return,o)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function _f(e,n,t){O=e,qc(e)}function qc(e,n,t){for(var r=(e.mode&1)!==0;O!==null;){var i=O,l=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||$r;if(!a){var u=i.alternate,o=u!==null&&u.memoizedState!==null||me;u=$r;var c=me;if($r=a,(me=o)&&!c)for(O=i;O!==null;)a=O,o=a.child,a.tag===22&&a.memoizedState!==null?_o(i):o!==null?(o.return=a,O=o):_o(i);for(;l!==null;)O=l,qc(l),l=l.sibling;O=i,$r=u,me=c}Co(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,O=l):Co(e)}}function Co(e){for(;O!==null;){var n=O;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:me||Hi(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!me)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:Ve(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&co(n,l,r);break;case 3:var a=n.updateQueue;if(a!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}co(n,a,t)}break;case 5:var u=n.stateNode;if(t===null&&n.flags&4){t=u;var o=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":o.autoFocus&&t.focus();break;case"img":o.src&&(t.src=o.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var f=p.dehydrated;f!==null&&ar(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}me||n.flags&512&&dl(n)}catch(m){J(n,n.return,m)}}if(n===e){O=null;break}if(t=n.sibling,t!==null){t.return=n.return,O=t;break}O=n.return}}function zo(e){for(;O!==null;){var n=O;if(n===e){O=null;break}var t=n.sibling;if(t!==null){t.return=n.return,O=t;break}O=n.return}}function _o(e){for(;O!==null;){var n=O;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Hi(4,n)}catch(o){J(n,t,o)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(o){J(n,i,o)}}var l=n.return;try{dl(n)}catch(o){J(n,l,o)}break;case 5:var a=n.return;try{dl(n)}catch(o){J(n,a,o)}}}catch(o){J(n,n.return,o)}if(n===e){O=null;break}var u=n.sibling;if(u!==null){u.return=n.return,O=u;break}O=n.return}}var Lf=Math.ceil,Ni=dn.ReactCurrentDispatcher,ua=dn.ReactCurrentOwner,Fe=dn.ReactCurrentBatchConfig,V=0,ae=null,ne=null,de=0,ze=0,ft=Pn(0),se=0,gr=null,Wn=0,Ui=0,ca=0,er=null,je=null,da=0,Ct=1/0,en=null,Si=!1,pl=null,Tn=null,Br=!1,gn=null,Ti=0,nr=0,ml=null,ni=-1,ti=0;function xe(){return V&6?ee():ni!==-1?ni:ni=ee()}function En(e){return e.mode&1?V&2&&de!==0?de&-de:ff.transition!==null?(ti===0&&(ti=_u()),ti):(e=B,e!==0||(e=window.event,e=e===void 0?16:Mu(e.type)),e):1}function Ke(e,n,t,r){if(50<nr)throw nr=0,ml=null,Error(C(185));jr(e,t,r),(!(V&2)||e!==ae)&&(e===ae&&(!(V&2)&&(Ui|=t),se===4&&vn(e,de)),Ee(e,r),t===1&&V===0&&!(n.mode&1)&&(Ct=ee()+500,Di&&In()))}function Ee(e,n){var t=e.callbackNode;hh(e,n);var r=oi(e,e===ae?de:0);if(r===0)t!==null&&Da(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Da(t),n===1)e.tag===0?hf(Lo.bind(null,e)):nc(Lo.bind(null,e)),of(function(){!(V&6)&&In()}),t=null;else{switch(Lu(r)){case 1:t=Dl;break;case 4:t=Cu;break;case 16:t=ai;break;case 536870912:t=zu;break;default:t=ai}t=Jc(t,Kc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Kc(e,n){if(ni=-1,ti=0,V&6)throw Error(C(327));var t=e.callbackNode;if(kt()&&e.callbackNode!==t)return null;var r=oi(e,e===ae?de:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Ei(e,r);else{n=r;var i=V;V|=2;var l=Qc();(ae!==e||de!==n)&&(en=null,Ct=ee()+500,Vn(e,n));do try{If();break}catch(u){Wc(e,u)}while(!0);Xl(),Ni.current=l,V=i,ne!==null?n=0:(ae=null,de=0,n=se)}if(n!==0){if(n===2&&(i=Vs(e),i!==0&&(r=i,n=vl(e,i))),n===1)throw t=gr,Vn(e,0),vn(e,r),Ee(e,ee()),t;if(n===6)vn(e,r);else{if(i=e.current.alternate,!(r&30)&&!bf(i)&&(n=Ei(e,r),n===2&&(l=Vs(e),l!==0&&(r=l,n=vl(e,l))),n===1))throw t=gr,Vn(e,0),vn(e,r),Ee(e,ee()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(C(345));case 2:Fn(e,je,en);break;case 3:if(vn(e,r),(r&130023424)===r&&(n=da+500-ee(),10<n)){if(oi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){xe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Xs(Fn.bind(null,e,je,en),n);break}Fn(e,je,en);break;case 4:if(vn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var a=31-qe(r);l=1<<a,a=n[a],a>i&&(i=a),r&=~l}if(r=i,r=ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Lf(r/1960))-r,10<r){e.timeoutHandle=Xs(Fn.bind(null,e,je,en),r);break}Fn(e,je,en);break;case 5:Fn(e,je,en);break;default:throw Error(C(329))}}}return Ee(e,ee()),e.callbackNode===t?Kc.bind(null,e):null}function vl(e,n){var t=er;return e.current.memoizedState.isDehydrated&&(Vn(e,n).flags|=256),e=Ei(e,n),e!==2&&(n=je,je=t,n!==null&&yl(n)),e}function yl(e){je===null?je=e:je.push.apply(je,e)}function bf(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],l=i.getSnapshot;i=i.value;try{if(!We(l(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function vn(e,n){for(n&=~ca,n&=~Ui,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-qe(n),r=1<<t;e[t]=-1,n&=~r}}function Lo(e){if(V&6)throw Error(C(327));kt();var n=oi(e,0);if(!(n&1))return Ee(e,ee()),null;var t=Ei(e,n);if(e.tag!==0&&t===2){var r=Vs(e);r!==0&&(n=r,t=vl(e,r))}if(t===1)throw t=gr,Vn(e,0),vn(e,n),Ee(e,ee()),t;if(t===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Fn(e,je,en),Ee(e,ee()),null}function ha(e,n){var t=V;V|=1;try{return e(n)}finally{V=t,V===0&&(Ct=ee()+500,Di&&In())}}function Qn(e){gn!==null&&gn.tag===0&&!(V&6)&&kt();var n=V;V|=1;var t=Fe.transition,r=B;try{if(Fe.transition=null,B=1,e)return e()}finally{B=r,Fe.transition=t,V=n,!(V&6)&&In()}}function fa(){ze=ft.current,Q(ft)}function Vn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,af(t)),ne!==null)for(t=ne.return;t!==null;){var r=t;switch(Wl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fi();break;case 3:Tt(),Q(Se),Q(ye),ta();break;case 5:na(r);break;case 4:Tt();break;case 13:Q(X);break;case 19:Q(X);break;case 10:Yl(r.type._context);break;case 22:case 23:fa()}t=t.return}if(ae=e,ne=e=Cn(e.current,null),de=ze=n,se=0,gr=null,ca=Ui=Wn=0,je=er=null,Hn!==null){for(n=0;n<Hn.length;n++)if(t=Hn[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,l=t.pending;if(l!==null){var a=l.next;l.next=i,r.next=a}t.pending=r}Hn=null}return e}function Wc(e,n){do{var t=ne;try{if(Xl(),Zr.current=ji,wi){for(var r=Y.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}wi=!1}if(Kn=0,le=ie=Y=null,Zt=!1,mr=0,ua.current=null,t===null||t.return===null){se=1,gr=n,ne=null;break}e:{var l=e,a=t.return,u=t,o=n;if(n=de,u.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){var c=o,p=u,f=p.tag;if(!(p.mode&1)&&(f===0||f===11||f===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var x=yo(a);if(x!==null){x.flags&=-257,go(x,a,u,l,n),x.mode&1&&vo(l,c,n),n=x,o=c;var k=n.updateQueue;if(k===null){var w=new Set;w.add(o),n.updateQueue=w}else k.add(o);break e}else{if(!(n&1)){vo(l,c,n),pa();break e}o=Error(C(426))}}else if(G&&u.mode&1){var g=yo(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),go(g,a,u,l,n),Ql(Et(o,u));break e}}l=o=Et(o,u),se!==4&&(se=2),er===null?er=[l]:er.push(l),l=a;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var d=Lc(l,o,n);uo(l,d);break e;case 1:u=o;var h=l.type,v=l.stateNode;if(!(l.flags&128)&&(typeof h.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Tn===null||!Tn.has(v)))){l.flags|=65536,n&=-n,l.lanes|=n;var N=bc(l,u,n);uo(l,N);break e}}l=l.return}while(l!==null)}Xc(t)}catch(_){n=_,ne===t&&t!==null&&(ne=t=t.return);continue}break}while(!0)}function Qc(){var e=Ni.current;return Ni.current=ji,e===null?ji:e}function pa(){(se===0||se===3||se===2)&&(se=4),ae===null||!(Wn&268435455)&&!(Ui&268435455)||vn(ae,de)}function Ei(e,n){var t=V;V|=2;var r=Qc();(ae!==e||de!==n)&&(en=null,Vn(e,n));do try{Pf();break}catch(i){Wc(e,i)}while(!0);if(Xl(),V=t,Ni.current=r,ne!==null)throw Error(C(261));return ae=null,de=0,se}function Pf(){for(;ne!==null;)Gc(ne)}function If(){for(;ne!==null&&!rh();)Gc(ne)}function Gc(e){var n=Zc(e.alternate,e,ze);e.memoizedProps=e.pendingProps,n===null?Xc(e):ne=n,ua.current=null}function Xc(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Ef(t,n),t!==null){t.flags&=32767,ne=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{se=6,ne=null;return}}else if(t=Tf(t,n,ze),t!==null){ne=t;return}if(n=n.sibling,n!==null){ne=n;return}ne=n=e}while(n!==null);se===0&&(se=5)}function Fn(e,n,t){var r=B,i=Fe.transition;try{Fe.transition=null,B=1,Of(e,n,t,r)}finally{Fe.transition=i,B=r}return null}function Of(e,n,t,r){do kt();while(gn!==null);if(V&6)throw Error(C(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(fh(e,l),e===ae&&(ne=ae=null,de=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Br||(Br=!0,Jc(ai,function(){return kt(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=Fe.transition,Fe.transition=null;var a=B;B=1;var u=V;V|=4,ua.current=null,zf(e,t),Bc(t,e),Jh(Qs),ui=!!Ws,Qs=Ws=null,e.current=t,_f(t),ih(),V=u,B=a,Fe.transition=l}else e.current=t;if(Br&&(Br=!1,gn=e,Ti=i),l=e.pendingLanes,l===0&&(Tn=null),ah(t.stateNode),Ee(e,ee()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(Si)throw Si=!1,e=pl,pl=null,e;return Ti&1&&e.tag!==0&&kt(),l=e.pendingLanes,l&1?e===ml?nr++:(nr=0,ml=e):nr=0,In(),null}function kt(){if(gn!==null){var e=Lu(Ti),n=Fe.transition,t=B;try{if(Fe.transition=null,B=16>e?16:e,gn===null)var r=!1;else{if(e=gn,gn=null,Ti=0,V&6)throw Error(C(331));var i=V;for(V|=4,O=e.current;O!==null;){var l=O,a=l.child;if(O.flags&16){var u=l.deletions;if(u!==null){for(var o=0;o<u.length;o++){var c=u[o];for(O=c;O!==null;){var p=O;switch(p.tag){case 0:case 11:case 15:Jt(8,p,l)}var f=p.child;if(f!==null)f.return=p,O=f;else for(;O!==null;){p=O;var m=p.sibling,x=p.return;if(Uc(p),p===c){O=null;break}if(m!==null){m.return=x,O=m;break}O=x}}}var k=l.alternate;if(k!==null){var w=k.child;if(w!==null){k.child=null;do{var g=w.sibling;w.sibling=null,w=g}while(w!==null)}}O=l}}if(l.subtreeFlags&2064&&a!==null)a.return=l,O=a;else e:for(;O!==null;){if(l=O,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Jt(9,l,l.return)}var d=l.sibling;if(d!==null){d.return=l.return,O=d;break e}O=l.return}}var h=e.current;for(O=h;O!==null;){a=O;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,O=v;else e:for(a=h;O!==null;){if(u=O,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Hi(9,u)}}catch(_){J(u,u.return,_)}if(u===a){O=null;break e}var N=u.sibling;if(N!==null){N.return=u.return,O=N;break e}O=u.return}}if(V=i,In(),Ze&&typeof Ze.onPostCommitFiberRoot=="function")try{Ze.onPostCommitFiberRoot(Pi,e)}catch{}r=!0}return r}finally{B=t,Fe.transition=n}}return!1}function bo(e,n,t){n=Et(t,n),n=Lc(e,n,1),e=Sn(e,n,1),n=xe(),e!==null&&(jr(e,1,n),Ee(e,n))}function J(e,n,t){if(e.tag===3)bo(e,e,t);else for(;n!==null;){if(n.tag===3){bo(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Tn===null||!Tn.has(r))){e=Et(t,e),e=bc(n,e,1),n=Sn(n,e,1),e=xe(),n!==null&&(jr(n,1,e),Ee(n,e));break}}n=n.return}}function Rf(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=xe(),e.pingedLanes|=e.suspendedLanes&t,ae===e&&(de&t)===t&&(se===4||se===3&&(de&130023424)===de&&500>ee()-da?Vn(e,0):ca|=t),Ee(e,n)}function Yc(e,n){n===0&&(e.mode&1?(n=Or,Or<<=1,!(Or&130023424)&&(Or=4194304)):n=1);var t=xe();e=on(e,n),e!==null&&(jr(e,n,t),Ee(e,t))}function Mf(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Yc(e,t)}function Df(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(n),Yc(e,t)}var Zc;Zc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Se.current)Ne=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Ne=!1,Sf(e,n,t);Ne=!!(e.flags&131072)}else Ne=!1,G&&n.flags&1048576&&tc(n,vi,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;ei(e,n),e=n.pendingProps;var i=jt(n,ye.current);xt(n,t),i=ia(null,n,r,e,i,t);var l=sa();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Te(r)?(l=!0,pi(n)):l=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Jl(n),i.updater=Ai,n.stateNode=i,i._reactInternals=n,rl(n,r,e,t),n=ll(null,n,r,!0,l,t)):(n.tag=0,G&&l&&Kl(n),ge(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(ei(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=Af(r),e=Ve(r,e),i){case 0:n=sl(null,n,r,e,t);break e;case 1:n=wo(null,n,r,e,t);break e;case 11:n=xo(null,n,r,e,t);break e;case 14:n=ko(null,n,r,Ve(r.type,e),t);break e}throw Error(C(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Ve(r,i),sl(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Ve(r,i),wo(e,n,r,i,t);case 3:e:{if(Rc(n),e===null)throw Error(C(387));r=n.pendingProps,l=n.memoizedState,i=l.element,oc(e,n),xi(n,r,null,t);var a=n.memoizedState;if(r=a.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){i=Et(Error(C(423)),n),n=jo(e,n,r,t,i);break e}else if(r!==i){i=Et(Error(C(424)),n),n=jo(e,n,r,t,i);break e}else for(_e=Nn(n.stateNode.containerInfo.firstChild),Le=n,G=!0,Be=null,t=lc(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Nt(),r===i){n=un(e,n,t);break e}ge(e,n,r,t)}n=n.child}return n;case 5:return uc(n),e===null&&el(n),r=n.type,i=n.pendingProps,l=e!==null?e.memoizedProps:null,a=i.children,Gs(r,i)?a=null:l!==null&&Gs(r,l)&&(n.flags|=32),Oc(e,n),ge(e,n,a,t),n.child;case 6:return e===null&&el(n),null;case 13:return Mc(e,n,t);case 4:return ea(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=St(n,null,r,t):ge(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Ve(r,i),xo(e,n,r,i,t);case 7:return ge(e,n,n.pendingProps,t),n.child;case 8:return ge(e,n,n.pendingProps.children,t),n.child;case 12:return ge(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,l=n.memoizedProps,a=i.value,K(yi,r._currentValue),r._currentValue=a,l!==null)if(We(l.value,a)){if(l.children===i.children&&!Se.current){n=un(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var u=l.dependencies;if(u!==null){a=l.child;for(var o=u.firstContext;o!==null;){if(o.context===r){if(l.tag===1){o=sn(-1,t&-t),o.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?o.next=o:(o.next=p.next,p.next=o),c.pending=o}}l.lanes|=t,o=l.alternate,o!==null&&(o.lanes|=t),nl(l.return,t,n),u.lanes|=t;break}o=o.next}}else if(l.tag===10)a=l.type===n.type?null:l.child;else if(l.tag===18){if(a=l.return,a===null)throw Error(C(341));a.lanes|=t,u=a.alternate,u!==null&&(u.lanes|=t),nl(a,t,n),a=l.sibling}else a=l.child;if(a!==null)a.return=l;else for(a=l;a!==null;){if(a===n){a=null;break}if(l=a.sibling,l!==null){l.return=a.return,a=l;break}a=a.return}l=a}ge(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,xt(n,t),i=Ae(i),r=r(i),n.flags|=1,ge(e,n,r,t),n.child;case 14:return r=n.type,i=Ve(r,n.pendingProps),i=Ve(r.type,i),ko(e,n,r,i,t);case 15:return Pc(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Ve(r,i),ei(e,n),n.tag=1,Te(r)?(e=!0,pi(n)):e=!1,xt(n,t),_c(n,r,i),rl(n,r,i,t),ll(null,n,r,!0,e,t);case 19:return Dc(e,n,t);case 22:return Ic(e,n,t)}throw Error(C(156,n.tag))};function Jc(e,n){return Eu(e,n)}function Ff(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function De(e,n,t,r){return new Ff(e,n,t,r)}function ma(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Af(e){if(typeof e=="function")return ma(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ol)return 11;if(e===Rl)return 14}return 2}function Cn(e,n){var t=e.alternate;return t===null?(t=De(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function ri(e,n,t,r,i,l){var a=2;if(r=e,typeof e=="function")ma(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case rt:return $n(t.children,i,l,n);case Il:a=8,i|=8;break;case Cs:return e=De(12,t,n,i|2),e.elementType=Cs,e.lanes=l,e;case zs:return e=De(13,t,n,i),e.elementType=zs,e.lanes=l,e;case _s:return e=De(19,t,n,i),e.elementType=_s,e.lanes=l,e;case uu:return Vi(t,i,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case au:a=10;break e;case ou:a=9;break e;case Ol:a=11;break e;case Rl:a=14;break e;case fn:a=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return n=De(a,t,n,i),n.elementType=e,n.type=r,n.lanes=l,n}function $n(e,n,t,r){return e=De(7,e,r,n),e.lanes=t,e}function Vi(e,n,t,r){return e=De(22,e,r,n),e.elementType=uu,e.lanes=t,e.stateNode={isHidden:!1},e}function ks(e,n,t){return e=De(6,e,null,n),e.lanes=t,e}function ws(e,n,t){return n=De(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Hf(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ns(0),this.expirationTimes=ns(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ns(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function va(e,n,t,r,i,l,a,u,o){return e=new Hf(e,n,t,u,o),n===1?(n=1,l===!0&&(n|=8)):n=0,l=De(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jl(l),e}function Uf(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:tt,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function ed(e){if(!e)return Ln;e=e._reactInternals;e:{if(Xn(e)!==e||e.tag!==1)throw Error(C(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Te(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(C(171))}if(e.tag===1){var t=e.type;if(Te(t))return ec(e,t,n)}return n}function nd(e,n,t,r,i,l,a,u,o){return e=va(t,r,!0,e,i,l,a,u,o),e.context=ed(null),t=e.current,r=xe(),i=En(t),l=sn(r,i),l.callback=n??null,Sn(t,l,i),e.current.lanes=i,jr(e,i,r),Ee(e,r),e}function $i(e,n,t,r){var i=n.current,l=xe(),a=En(i);return t=ed(t),n.context===null?n.context=t:n.pendingContext=t,n=sn(l,a),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Sn(i,n,a),e!==null&&(Ke(e,i,a,l),Yr(e,i,a)),a}function Ci(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Po(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function ya(e,n){Po(e,n),(e=e.alternate)&&Po(e,n)}function Vf(){return null}var td=typeof reportError=="function"?reportError:function(e){console.error(e)};function ga(e){this._internalRoot=e}Bi.prototype.render=ga.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(C(409));$i(e,n,null,null)};Bi.prototype.unmount=ga.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Qn(function(){$i(null,e,null,null)}),n[an]=null}};function Bi(e){this._internalRoot=e}Bi.prototype.unstable_scheduleHydration=function(e){if(e){var n=Iu();e={blockedOn:null,target:e,priority:n};for(var t=0;t<mn.length&&n!==0&&n<mn[t].priority;t++);mn.splice(t,0,e),t===0&&Ru(e)}};function xa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function qi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Io(){}function $f(e,n,t,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var c=Ci(a);l.call(c)}}var a=nd(n,r,e,0,null,!1,!1,"",Io);return e._reactRootContainer=a,e[an]=a.current,cr(e.nodeType===8?e.parentNode:e),Qn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var c=Ci(o);u.call(c)}}var o=va(e,0,!1,null,null,!1,!1,"",Io);return e._reactRootContainer=o,e[an]=o.current,cr(e.nodeType===8?e.parentNode:e),Qn(function(){$i(n,o,t,r)}),o}function Ki(e,n,t,r,i){var l=t._reactRootContainer;if(l){var a=l;if(typeof i=="function"){var u=i;i=function(){var o=Ci(a);u.call(o)}}$i(n,a,e,i)}else a=$f(t,n,e,i,r);return Ci(a)}bu=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=qt(n.pendingLanes);t!==0&&(Fl(n,t|1),Ee(n,ee()),!(V&6)&&(Ct=ee()+500,In()))}break;case 13:Qn(function(){var r=on(e,1);if(r!==null){var i=xe();Ke(r,e,1,i)}}),ya(e,1)}};Al=function(e){if(e.tag===13){var n=on(e,134217728);if(n!==null){var t=xe();Ke(n,e,134217728,t)}ya(e,134217728)}};Pu=function(e){if(e.tag===13){var n=En(e),t=on(e,n);if(t!==null){var r=xe();Ke(t,e,n,r)}ya(e,n)}};Iu=function(){return B};Ou=function(e,n){var t=B;try{return B=e,n()}finally{B=t}};As=function(e,n,t){switch(n){case"input":if(Ps(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=Mi(r);if(!i)throw Error(C(90));du(r),Ps(r,i)}}}break;case"textarea":fu(e,t);break;case"select":n=t.value,n!=null&&mt(e,!!t.multiple,n,!1)}};ku=ha;wu=Qn;var Bf={usingClientEntryPoint:!1,Events:[Sr,at,Mi,gu,xu,ha]},Vt={findFiberByHostInstance:An,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qf={bundleType:Vt.bundleType,version:Vt.version,rendererPackageName:Vt.rendererPackageName,rendererConfig:Vt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Su(e),e===null?null:e.stateNode},findFiberByHostInstance:Vt.findFiberByHostInstance||Vf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qr.isDisabled&&qr.supportsFiber)try{Pi=qr.inject(qf),Ze=qr}catch{}}Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bf;Pe.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xa(n))throw Error(C(200));return Uf(e,n,null,t)};Pe.createRoot=function(e,n){if(!xa(e))throw Error(C(299));var t=!1,r="",i=td;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=va(e,1,!1,null,null,t,!1,r,i),e[an]=n.current,cr(e.nodeType===8?e.parentNode:e),new ga(n)};Pe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=Su(n),e=e===null?null:e.stateNode,e};Pe.flushSync=function(e){return Qn(e)};Pe.hydrate=function(e,n,t){if(!qi(n))throw Error(C(200));return Ki(null,e,n,!0,t)};Pe.hydrateRoot=function(e,n,t){if(!xa(e))throw Error(C(405));var r=t!=null&&t.hydratedSources||null,i=!1,l="",a=td;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),n=nd(n,null,e,1,t??null,i,!1,l,a),e[an]=n.current,cr(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new Bi(n)};Pe.render=function(e,n,t){if(!qi(n))throw Error(C(200));return Ki(null,e,n,!1,t)};Pe.unmountComponentAtNode=function(e){if(!qi(e))throw Error(C(40));return e._reactRootContainer?(Qn(function(){Ki(null,null,e,!1,function(){e._reactRootContainer=null,e[an]=null})}),!0):!1};Pe.unstable_batchedUpdates=ha;Pe.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!qi(t))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Ki(e,n,t,!1,r)};Pe.version="18.3.1-next-f1338f8080-20240426";function rd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rd)}catch(e){console.error(e)}}rd(),ru.exports=Pe;var Kf=ru.exports,Oo=Kf;Ts.createRoot=Oo.createRoot,Ts.hydrateRoot=Oo.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xr(){return xr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},xr.apply(this,arguments)}var xn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(xn||(xn={}));const Ro="popstate";function Wf(e){e===void 0&&(e={});function n(r,i){let{pathname:l,search:a,hash:u}=r.location;return gl("",{pathname:l,search:a,hash:u},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(r,i){return typeof i=="string"?i:zi(i)}return Gf(n,t,null,e)}function re(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function ka(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Qf(){return Math.random().toString(36).substr(2,8)}function Mo(e,n){return{usr:e.state,key:e.key,idx:n}}function gl(e,n,t,r){return t===void 0&&(t=null),xr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?Pt(n):n,{state:t,key:n&&n.key||r||Qf()})}function zi(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function Pt(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function Gf(e,n,t,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:l=!1}=r,a=i.history,u=xn.Pop,o=null,c=p();c==null&&(c=0,a.replaceState(xr({},a.state,{idx:c}),""));function p(){return(a.state||{idx:null}).idx}function f(){u=xn.Pop;let g=p(),d=g==null?null:g-c;c=g,o&&o({action:u,location:w.location,delta:d})}function m(g,d){u=xn.Push;let h=gl(w.location,g,d);c=p()+1;let v=Mo(h,c),N=w.createHref(h);try{a.pushState(v,"",N)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;i.location.assign(N)}l&&o&&o({action:u,location:w.location,delta:1})}function x(g,d){u=xn.Replace;let h=gl(w.location,g,d);c=p();let v=Mo(h,c),N=w.createHref(h);a.replaceState(v,"",N),l&&o&&o({action:u,location:w.location,delta:0})}function k(g){let d=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof g=="string"?g:zi(g);return h=h.replace(/ $/,"%20"),re(d,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,d)}let w={get action(){return u},get location(){return e(i,a)},listen(g){if(o)throw new Error("A history only accepts one active listener");return i.addEventListener(Ro,f),o=g,()=>{i.removeEventListener(Ro,f),o=null}},createHref(g){return n(i,g)},createURL:k,encodeLocation(g){let d=k(g);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:m,replace:x,go(g){return a.go(g)}};return w}var Do;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Do||(Do={}));function Xf(e,n,t){return t===void 0&&(t="/"),Yf(e,n,t)}function Yf(e,n,t,r){let i=typeof n=="string"?Pt(n):n,l=wa(i.pathname||"/",t);if(l==null)return null;let a=id(e);Zf(a);let u=null;for(let o=0;u==null&&o<a.length;++o){let c=cp(l);u=ap(a[o],c)}return u}function id(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let i=(l,a,u)=>{let o={relativePath:u===void 0?l.path||"":u,caseSensitive:l.caseSensitive===!0,childrenIndex:a,route:l};o.relativePath.startsWith("/")&&(re(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(r.length));let c=zn([r,o.relativePath]),p=t.concat(o);l.children&&l.children.length>0&&(re(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),id(l.children,n,p,c)),!(l.path==null&&!l.index)&&n.push({path:c,score:sp(c,l.index),routesMeta:p})};return e.forEach((l,a)=>{var u;if(l.path===""||!((u=l.path)!=null&&u.includes("?")))i(l,a);else for(let o of sd(l.path))i(l,a,o)}),n}function sd(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,i=t.endsWith("?"),l=t.replace(/\?$/,"");if(r.length===0)return i?[l,""]:[l];let a=sd(r.join("/")),u=[];return u.push(...a.map(o=>o===""?l:[l,o].join("/"))),i&&u.push(...a),u.map(o=>e.startsWith("/")&&o===""?"/":o)}function Zf(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:lp(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const Jf=/^:[\w-]+$/,ep=3,np=2,tp=1,rp=10,ip=-2,Fo=e=>e==="*";function sp(e,n){let t=e.split("/"),r=t.length;return t.some(Fo)&&(r+=ip),n&&(r+=np),t.filter(i=>!Fo(i)).reduce((i,l)=>i+(Jf.test(l)?ep:l===""?tp:rp),r)}function lp(e,n){return e.length===n.length&&e.slice(0,-1).every((r,i)=>r===n[i])?e[e.length-1]-n[n.length-1]:0}function ap(e,n,t){let{routesMeta:r}=e,i={},l="/",a=[];for(let u=0;u<r.length;++u){let o=r[u],c=u===r.length-1,p=l==="/"?n:n.slice(l.length)||"/",f=op({path:o.relativePath,caseSensitive:o.caseSensitive,end:c},p),m=o.route;if(!f)return null;Object.assign(i,f.params),a.push({params:i,pathname:zn([l,f.pathname]),pathnameBase:mp(zn([l,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(l=zn([l,f.pathnameBase]))}return a}function op(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=up(e.path,e.caseSensitive,e.end),i=n.match(t);if(!i)return null;let l=i[0],a=l.replace(/(.)\/+$/,"$1"),u=i.slice(1);return{params:r.reduce((c,p,f)=>{let{paramName:m,isOptional:x}=p;if(m==="*"){let w=u[f]||"";a=l.slice(0,l.length-w.length).replace(/(.)\/+$/,"$1")}const k=u[f];return x&&!k?c[m]=void 0:c[m]=(k||"").replace(/%2F/g,"/"),c},{}),pathname:l,pathnameBase:a,pattern:e}}function up(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),ka(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,u,o)=>(r.push({paramName:u,isOptional:o!=null}),o?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,n?void 0:"i"),r]}function cp(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return ka(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function wa(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}const dp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,hp=e=>dp.test(e);function fp(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:i=""}=typeof e=="string"?Pt(e):e,l;if(t)if(hp(t))l=t;else{if(t.includes("//")){let a=t;t=t.replace(/\/\/+/g,"/"),ka(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+t))}t.startsWith("/")?l=Ao(t.substring(1),"/"):l=Ao(t,n)}else l=n;return{pathname:l,search:vp(r),hash:yp(i)}}function Ao(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?t.length>1&&t.pop():i!=="."&&t.push(i)}),t.length>1?t.join("/"):"/"}function js(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function pp(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function ld(e,n){let t=pp(e);return n?t.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function ad(e,n,t,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Pt(e):(i=xr({},e),re(!i.pathname||!i.pathname.includes("?"),js("?","pathname","search",i)),re(!i.pathname||!i.pathname.includes("#"),js("#","pathname","hash",i)),re(!i.search||!i.search.includes("#"),js("#","search","hash",i)));let l=e===""||i.pathname==="",a=l?"/":i.pathname,u;if(a==null)u=t;else{let f=n.length-1;if(!r&&a.startsWith("..")){let m=a.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}u=f>=0?n[f]:"/"}let o=fp(i,u),c=a&&a!=="/"&&a.endsWith("/"),p=(l||a===".")&&t.endsWith("/");return!o.pathname.endsWith("/")&&(c||p)&&(o.pathname+="/"),o}const zn=e=>e.join("/").replace(/\/\/+/g,"/"),mp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),vp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,yp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function gp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const od=["post","put","patch","delete"];new Set(od);const xp=["get",...od];new Set(xp);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function kr(){return kr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},kr.apply(this,arguments)}const ja=y.createContext(null),kp=y.createContext(null),Yn=y.createContext(null),Wi=y.createContext(null),Zn=y.createContext({outlet:null,matches:[],isDataRoute:!1}),ud=y.createContext(null);function wp(e,n){let{relative:t}=n===void 0?{}:n;Er()||re(!1);let{basename:r,navigator:i}=y.useContext(Yn),{hash:l,pathname:a,search:u}=dd(e,{relative:t}),o=a;return r!=="/"&&(o=a==="/"?r:zn([r,a])),i.createHref({pathname:o,search:u,hash:l})}function Er(){return y.useContext(Wi)!=null}function Cr(){return Er()||re(!1),y.useContext(Wi).location}function cd(e){y.useContext(Yn).static||y.useLayoutEffect(e)}function jp(){let{isDataRoute:e}=y.useContext(Zn);return e?Rp():Np()}function Np(){Er()||re(!1);let e=y.useContext(ja),{basename:n,future:t,navigator:r}=y.useContext(Yn),{matches:i}=y.useContext(Zn),{pathname:l}=Cr(),a=JSON.stringify(ld(i,t.v7_relativeSplatPath)),u=y.useRef(!1);return cd(()=>{u.current=!0}),y.useCallback(function(c,p){if(p===void 0&&(p={}),!u.current)return;if(typeof c=="number"){r.go(c);return}let f=ad(c,JSON.parse(a),l,p.relative==="path");e==null&&n!=="/"&&(f.pathname=f.pathname==="/"?n:zn([n,f.pathname])),(p.replace?r.replace:r.push)(f,p.state,p)},[n,r,a,l,e])}function dd(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=y.useContext(Yn),{matches:i}=y.useContext(Zn),{pathname:l}=Cr(),a=JSON.stringify(ld(i,r.v7_relativeSplatPath));return y.useMemo(()=>ad(e,JSON.parse(a),l,t==="path"),[e,a,l,t])}function Sp(e,n){return Tp(e,n)}function Tp(e,n,t,r){Er()||re(!1);let{navigator:i}=y.useContext(Yn),{matches:l}=y.useContext(Zn),a=l[l.length-1],u=a?a.params:{};a&&a.pathname;let o=a?a.pathnameBase:"/";a&&a.route;let c=Cr(),p;if(n){var f;let g=typeof n=="string"?Pt(n):n;o==="/"||(f=g.pathname)!=null&&f.startsWith(o)||re(!1),p=g}else p=c;let m=p.pathname||"/",x=m;if(o!=="/"){let g=o.replace(/^\//,"").split("/");x="/"+m.replace(/^\//,"").split("/").slice(g.length).join("/")}let k=Xf(e,{pathname:x}),w=Lp(k&&k.map(g=>Object.assign({},g,{params:Object.assign({},u,g.params),pathname:zn([o,i.encodeLocation?i.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?o:zn([o,i.encodeLocation?i.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),l,t,r);return n&&w?y.createElement(Wi.Provider,{value:{location:kr({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:xn.Pop}},w):w}function Ep(){let e=Op(),n=gp(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},n),t?y.createElement("pre",{style:i},t):null,null)}const Cp=y.createElement(Ep,null);class zp extends y.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?y.createElement(Zn.Provider,{value:this.props.routeContext},y.createElement(ud.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function _p(e){let{routeContext:n,match:t,children:r}=e,i=y.useContext(ja);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),y.createElement(Zn.Provider,{value:n},r)}function Lp(e,n,t,r){var i;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var l;if(!t)return null;if(t.errors)e=t.matches;else if((l=r)!=null&&l.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let a=e,u=(i=t)==null?void 0:i.errors;if(u!=null){let p=a.findIndex(f=>f.route.id&&(u==null?void 0:u[f.route.id])!==void 0);p>=0||re(!1),a=a.slice(0,Math.min(a.length,p+1))}let o=!1,c=-1;if(t&&r&&r.v7_partialHydration)for(let p=0;p<a.length;p++){let f=a[p];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=p),f.route.id){let{loaderData:m,errors:x}=t,k=f.route.loader&&m[f.route.id]===void 0&&(!x||x[f.route.id]===void 0);if(f.route.lazy||k){o=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((p,f,m)=>{let x,k=!1,w=null,g=null;t&&(x=u&&f.route.id?u[f.route.id]:void 0,w=f.route.errorElement||Cp,o&&(c<0&&m===0?(Mp("route-fallback"),k=!0,g=null):c===m&&(k=!0,g=f.route.hydrateFallbackElement||null)));let d=n.concat(a.slice(0,m+1)),h=()=>{let v;return x?v=w:k?v=g:f.route.Component?v=y.createElement(f.route.Component,null):f.route.element?v=f.route.element:v=p,y.createElement(_p,{match:f,routeContext:{outlet:p,matches:d,isDataRoute:t!=null},children:v})};return t&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?y.createElement(zp,{location:t.location,revalidation:t.revalidation,component:w,error:x,children:h(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):h()},null)}var hd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(hd||{}),fd=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(fd||{});function bp(e){let n=y.useContext(ja);return n||re(!1),n}function Pp(e){let n=y.useContext(kp);return n||re(!1),n}function Ip(e){let n=y.useContext(Zn);return n||re(!1),n}function pd(e){let n=Ip(),t=n.matches[n.matches.length-1];return t.route.id||re(!1),t.route.id}function Op(){var e;let n=y.useContext(ud),t=Pp(),r=pd();return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function Rp(){let{router:e}=bp(hd.UseNavigateStable),n=pd(fd.UseNavigateStable),t=y.useRef(!1);return cd(()=>{t.current=!0}),y.useCallback(function(i,l){l===void 0&&(l={}),t.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,kr({fromRouteId:n},l)))},[e,n])}const Ho={};function Mp(e,n,t){Ho[e]||(Ho[e]=!0)}function Dp(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Oe(e){re(!1)}function Fp(e){let{basename:n="/",children:t=null,location:r,navigationType:i=xn.Pop,navigator:l,static:a=!1,future:u}=e;Er()&&re(!1);let o=n.replace(/^\/*/,"/"),c=y.useMemo(()=>({basename:o,navigator:l,static:a,future:kr({v7_relativeSplatPath:!1},u)}),[o,u,l,a]);typeof r=="string"&&(r=Pt(r));let{pathname:p="/",search:f="",hash:m="",state:x=null,key:k="default"}=r,w=y.useMemo(()=>{let g=wa(p,o);return g==null?null:{location:{pathname:g,search:f,hash:m,state:x,key:k},navigationType:i}},[o,p,f,m,x,k,i]);return w==null?null:y.createElement(Yn.Provider,{value:c},y.createElement(Wi.Provider,{children:t,value:w}))}function Ap(e){let{children:n,location:t}=e;return Sp(xl(n),t)}new Promise(()=>{});function xl(e,n){n===void 0&&(n=[]);let t=[];return y.Children.forEach(e,(r,i)=>{if(!y.isValidElement(r))return;let l=[...n,i];if(r.type===y.Fragment){t.push.apply(t,xl(r.props.children,l));return}r.type!==Oe&&re(!1),!r.props.index||!r.props.children||re(!1);let a={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=xl(r.props.children,l)),t.push(a)}),t}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function kl(){return kl=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},kl.apply(this,arguments)}function Hp(e,n){if(e==null)return{};var t={},r=Object.keys(e),i,l;for(l=0;l<r.length;l++)i=r[l],!(n.indexOf(i)>=0)&&(t[i]=e[i]);return t}function Up(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Vp(e,n){return e.button===0&&(!n||n==="_self")&&!Up(e)}const $p=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Bp="6";try{window.__reactRouterVersion=Bp}catch{}const qp="startTransition",Uo=Od[qp];function Kp(e){let{basename:n,children:t,future:r,window:i}=e,l=y.useRef();l.current==null&&(l.current=Wf({window:i,v5Compat:!0}));let a=l.current,[u,o]=y.useState({action:a.action,location:a.location}),{v7_startTransition:c}=r||{},p=y.useCallback(f=>{c&&Uo?Uo(()=>o(f)):o(f)},[o,c]);return y.useLayoutEffect(()=>a.listen(p),[a,p]),y.useEffect(()=>Dp(r),[r]),y.createElement(Fp,{basename:n,children:t,location:u.location,navigationType:u.action,navigator:a,future:r})}const Wp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Qp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,zt=y.forwardRef(function(n,t){let{onClick:r,relative:i,reloadDocument:l,replace:a,state:u,target:o,to:c,preventScrollReset:p,viewTransition:f}=n,m=Hp(n,$p),{basename:x}=y.useContext(Yn),k,w=!1;if(typeof c=="string"&&Qp.test(c)&&(k=c,Wp))try{let v=new URL(window.location.href),N=c.startsWith("//")?new URL(v.protocol+c):new URL(c),_=wa(N.pathname,x);N.origin===v.origin&&_!=null?c=_+N.search+N.hash:w=!0}catch{}let g=wp(c,{relative:i}),d=Gp(c,{replace:a,state:u,target:o,preventScrollReset:p,relative:i,viewTransition:f});function h(v){r&&r(v),v.defaultPrevented||d(v)}return y.createElement("a",kl({},m,{href:k||g,onClick:w||l?r:h,ref:t,target:o}))});var Vo;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Vo||(Vo={}));var $o;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})($o||($o={}));function Gp(e,n){let{target:t,replace:r,state:i,preventScrollReset:l,relative:a,viewTransition:u}=n===void 0?{}:n,o=jp(),c=Cr(),p=dd(e,{relative:a});return y.useCallback(f=>{if(Vp(f,t)){f.preventDefault();let m=r!==void 0?r:zi(c)===zi(p);o(e,{replace:m,state:i,preventScrollReset:l,relative:a,viewTransition:u})}},[c,o,p,r,i,t,e,l,a,u])}/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Xp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),H=(e,n)=>{const t=y.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:l=2,absoluteStrokeWidth:a,className:u="",children:o,...c},p)=>y.createElement("svg",{ref:p,...Xp,width:i,height:i,stroke:r,strokeWidth:a?Number(l)*24/Number(i):l,className:["lucide",`lucide-${Yp(e)}`,u].join(" "),...c},[...n.map(([f,m])=>y.createElement(f,m)),...Array.isArray(o)?o:[o]]));return t.displayName=`${e}`,t};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _i=H("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=H("ArrowDownNarrowWide",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h4",key:"6d7r33"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h10",key:"1438ji"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jp=H("ArrowRightLeft",[["path",{d:"m16 3 4 4-4 4",key:"1x1c3m"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"m8 21-4-4 4-4",key:"h9nckh"}],["path",{d:"M4 17h16",key:"g4d7ey"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=H("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=H("ArrowUpNarrowWide",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M11 12h4",key:"q8tih4"}],["path",{d:"M11 16h7",key:"uosisv"}],["path",{d:"M11 20h10",key:"jvxblo"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=H("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=H("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=H("Brain",[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",key:"1mhkh5"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",key:"1d6s00"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=H("Bug",[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",key:"xs1cw7"}],["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4",key:"k3fwyw"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=H("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=H("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=H("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=H("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=H("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=H("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=H("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bo=H("FileCode",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=H("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=H("GitFork",[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",key:"1uq4wg"}],["path",{d:"M12 12v3",key:"158kv8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Na=H("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=H("GraduationCap",[["path",{d:"M22 10v6M2 10l10-5 10 5-10 5z",key:"1ef52a"}],["path",{d:"M6 12v5c3 3 9 3 12 0v-5",key:"1f75yj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ns=H("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=H("HeartHandshake",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"12sd6o"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const On=H("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=H("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qi=H("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=H("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cn=H("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wl=H("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sa=H("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=H("ListOrdered",[["line",{x1:"10",x2:"21",y1:"6",y2:"6",key:"76qw6h"}],["line",{x1:"10",x2:"21",y1:"12",y2:"12",key:"16nom4"}],["line",{x1:"10",x2:"21",y1:"18",y2:"18",key:"u3jurt"}],["path",{d:"M4 6h1v4",key:"cnovpq"}],["path",{d:"M4 10h2",key:"16xx2s"}],["path",{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1",key:"m9a95d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=H("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=H("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=H("MoveUp",[["path",{d:"M8 6L12 2L16 6",key:"1yvkyx"}],["path",{d:"M12 2V22",key:"r89rzk"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qo=H("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=H("Pyramid",[["path",{d:"M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z",key:"aenxs0"}],["path",{d:"M12 2v20",key:"t6zp3m"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vd=H("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=H("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=H("TreeDeciduous",[["path",{d:"M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z",key:"oadzkq"}],["path",{d:"M12 19v3",key:"npa21l"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=H("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=H("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=H("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function Cm(){const e=Cr(),[n,t]=y.useState(!1),r=e.pathname==="/"?"home":e.pathname.replace("/","").replace("_",""),i=()=>t(!n),l=()=>t(!1);y.useEffect(()=>{const u=()=>{window.innerWidth>1024&&t(!1)};return window.addEventListener("resize",u),()=>window.removeEventListener("resize",u)},[]),y.useEffect(()=>{n?document.body.style.overflow="hidden":document.body.style.overflow=""},[n]);const a=({to:u,icon:o,children:c,pageName:p})=>{const f=r===p;return s.jsxs(zt,{to:u,className:`nav-item ${f?"active":""}`,onClick:l,children:[s.jsx(o,{}),s.jsx("span",{children:c})]})};return s.jsxs(s.Fragment,{children:[s.jsx("button",{className:"mobile-menu-toggle",id:"mobileMenuToggle","aria-label":"Toggle menu",onClick:i,children:n?s.jsx(Tm,{}):s.jsx(xm,{})}),s.jsx("div",{className:`sidebar-overlay ${n?"active":""}`,onClick:l}),s.jsxs("aside",{className:`sidebar ${n?"active":""}`,id:"sidebar",children:[s.jsx("div",{className:"sidebar-header",children:s.jsxs(zt,{to:"/",className:"logo-wrapper",onClick:l,children:[s.jsx("img",{src:"/logo.svg",alt:"DSA Visualizer Logo",className:"logo-icon"}),s.jsx("span",{className:"logo-text",children:"DSA Visualizer"})]})}),s.jsxs("nav",{className:"sidebar-nav",children:[s.jsxs("div",{className:"nav-section",children:[s.jsx("div",{className:"nav-section-title",children:"Explore"}),s.jsx(a,{to:"/",icon:vm,pageName:"home",children:"Home"}),s.jsx(a,{to:"/algorithms",icon:am,pageName:"algorithms",children:"Algorithms"})]}),s.jsxs("div",{className:"nav-section",children:[s.jsx("div",{className:"nav-section-title",children:"More"}),s.jsx(a,{to:"/contact",icon:md,pageName:"contact",children:"Contact"}),s.jsx(a,{to:"/contributions",icon:mm,pageName:"contributions",children:"Contributions"})]})]}),s.jsxs("div",{className:"sidebar-footer",children:[s.jsxs("div",{className:"social-links-sidebar",children:[s.jsx("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",title:"GitHub",children:s.jsx(Na,{})}),s.jsx("a",{href:"https://www.linkedin.com/in/abdullah-mahfouz-5188b1306/",target:"_blank",rel:"noopener noreferrer",title:"LinkedIn",children:s.jsx(Sa,{})})]}),s.jsx("p",{className:"copyright",children:"© 2026 Abdullah Mahfouz"})]})]})]})}function zm(){return s.jsx("footer",{className:"main-footer",children:s.jsxs("div",{className:"footer-content",children:[s.jsxs("div",{className:"footer-social",children:[s.jsxs("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"footer-link",children:[s.jsx(Na,{}),s.jsx("span",{children:"GitHub"})]}),s.jsxs("a",{href:"https://www.linkedin.com/in/abdullah-mahfouz-5188b1306/",target:"_blank",rel:"noopener noreferrer",className:"footer-link",children:[s.jsx(Sa,{}),s.jsx("span",{children:"LinkedIn"})]})]}),s.jsx("p",{className:"footer-copyright",children:"© 2026 Abdullah Mahfouz"})]})})}function _m(){return s.jsxs(s.Fragment,{children:[s.jsxs("section",{className:"explore-hero",children:[s.jsx("div",{className:"hero-background"}),s.jsxs("div",{className:"hero-content-wrapper",children:[s.jsxs("div",{className:"hero-badge",children:[s.jsx(pm,{}),s.jsx("span",{children:"Free Student Learning Tool"})]}),s.jsxs("h1",{className:"hero-title",children:[s.jsx("span",{className:"gradient-text",children:"Learn"})," Data Structures & Algorithms"]}),s.jsx("p",{className:"hero-description",children:"A free, interactive learning tool designed to help students master DSA concepts. Visualize and understand them step-by-step."}),s.jsxs("div",{className:"hero-actions",children:[s.jsxs(zt,{to:"/algorithms",className:"btn-primary",children:[s.jsx("span",{children:"Learn Now"}),s.jsx(ve,{})]}),s.jsxs(zt,{to:"/stack",className:"btn-secondary",children:[s.jsx("span",{children:"Try Your First Visualizer"}),s.jsx(qo,{})]})]})]})]}),s.jsxs("section",{className:"features-section",children:[s.jsxs("div",{className:"section-header",children:[s.jsx("h2",{children:"How This Tool Helps Students"}),s.jsx("p",{children:"Designed specifically for students who find DSA challenging"})]}),s.jsxs("div",{className:"features-grid",children:[s.jsxs("div",{className:"feature-card",children:[s.jsx("div",{className:"feature-icon",children:s.jsx(dm,{})}),s.jsx("h3",{children:"See It in Action"}),s.jsx("p",{children:"Watch how data structures work with real-time visualizations. Perfect for visual learners who struggle with abstract concepts."})]}),s.jsxs("div",{className:"feature-card",children:[s.jsx("div",{className:"feature-icon",children:s.jsx(On,{})}),s.jsx("h3",{children:"Step-by-Step Help"}),s.jsx("p",{children:"Detailed explanations for each operation. No more confusion about how push, pop, or insert actually work."})]}),s.jsxs("div",{className:"feature-card",children:[s.jsx("div",{className:"feature-icon",children:s.jsx(rm,{})}),s.jsx("h3",{children:"AI Study Buddy"}),s.jsx("p",{children:"Stuck on a concept? Ask our AI assistant anything about DSA. Get instant, personalized explanations."})]}),s.jsxs("div",{className:"feature-card",children:[s.jsx("div",{className:"feature-icon",children:s.jsx(qo,{})}),s.jsx("h3",{children:"Learn by Doing"}),s.jsx("p",{children:"Practice makes perfect. Interact with data structures yourself to build confidence and understanding."})]})]})]})]})}function Lm(){const[e,n]=y.useState(null),t=i=>{n(e===i?null:i)},r=[{id:"linear",name:"Linear Data Structures",icon:gm,description:"Elements stored sequentially where each element has a unique predecessor and successor. These are the building blocks of computer science — simple to implement yet powerful enough to solve complex problems.",color:"#6366f1",items:[{to:"/stack",icon:ym,title:"Stack",description:"LIFO (Last In, First Out) — imagine a stack of plates where you can only add or remove from the top. The most recent item is always accessed first. Push adds to top, Pop removes from top. Both operations are O(1) constant time. Essential for: browser back button (page history), undo/redo in editors, function call management in recursion, parsing expressions like (a+b)*c, and depth-first search algorithms.",available:!0},{to:"/queue",icon:Jp,title:"Queue",description:"FIFO (First In, First Out) — like waiting in line at a coffee shop. The first person to arrive gets served first. Enqueue adds to the back, Dequeue removes from front. Both O(1) operations. Used everywhere: print job scheduling, CPU task management, breadth-first search (BFS) in graphs, handling requests in web servers, and buffering data streams like video playback.",available:!0},{to:"/linkedlist",icon:wl,title:"Linked List",description:"A chain of nodes where each node stores data and a pointer to the next node. Unlike arrays, memory doesn't need to be contiguous — nodes can be scattered in memory. Insertion/deletion at known positions is O(1), but finding a position is O(n). Perfect for: implementing stacks/queues, music playlists (next/previous song), browser history, memory allocation in operating systems, and polynomial arithmetic.",available:!0}]},{id:"hash",name:"Hash-Based Structures",icon:cm,description:"Revolutionary data structures that use hash functions to map keys to array indices, enabling O(1) average-case lookup, insertion, and deletion. The backbone of databases, caches, and any system requiring fast key-value access.",color:"#10b981",items:[{to:"/hashtable_linear",icon:Ns,title:"Linear Probing",description:'Open addressing collision resolution: when a collision occurs (two keys hash to same index), simply check the next slot, then the next, until an empty slot is found. Pros: excellent cache performance since data is stored contiguously, simple implementation. Cons: can cause "primary clustering" where long runs of occupied slots form, degrading performance. Load factor should stay below 0.7 for efficiency.',available:!0},{to:"/hashtable_quadratic",icon:Ns,title:"Quadratic Probing",description:'Instead of checking consecutive slots, probe at quadratic intervals: 1², 2², 3²... positions away from the original hash. This eliminates primary clustering but can cause "secondary clustering" where keys with the same hash follow the same probe sequence. Table size should be prime and load factor < 0.5 to guarantee finding an empty slot. Used when cache performance is less critical than even distribution.',available:!0},{to:"/hashtable_chaining",icon:Ns,title:"Separate Chaining",description:"Each array slot holds a linked list (chain) of all entries that hash to that index. No limit on how many items can be stored — just grow the chains. Handles high load factors gracefully (even > 1.0). Simpler deletion than open addressing. Used in Java's HashMap, Python's dict (with optimization). Trade-off: extra memory for pointers, potentially poor cache performance with long chains.",available:!0}]},{id:"trees",name:"Tree Structures",icon:Nm,description:"Hierarchical data structures where data flows from a root node down through children. Trees enable O(log n) operations on sorted data and model real-world hierarchies like file systems, organization charts, and decision trees in AI/ML.",color:"#f59e0b",items:[{to:"/binarytree",icon:hm,title:"Binary Tree Traversals",description:"Master the four fundamental ways to visit every node in a binary tree: INORDER (Left→Root→Right) visits nodes in sorted order for BST, used for expression trees; PREORDER (Root→Left→Right) processes root first, perfect for copying trees or creating prefix expressions; POSTORDER (Left→Right→Root) processes children before parent, used for deleting trees or postfix notation; LEVEL-ORDER (BFS) visits level by level, used for finding shortest paths and printing tree structure.",available:!0},{to:"/bst",icon:fm,title:"Binary Search Tree",description:`The fundamental ordered tree: every node's left subtree contains only smaller values, right subtree only larger values. This property enables O(log n) search by eliminating half the tree at each step — like binary search but in tree form. Supports efficient range queries. Caveat: can degrade to O(n) if insertions create an unbalanced "stick". Foundation for databases, symbol tables, and more advanced balanced trees.`,available:!1},{to:"/avl",icon:jm,title:"AVL Tree",description:"The first self-balancing BST, invented in 1962. Maintains strict balance: height difference between left and right subtrees ≤ 1 at every node. When insertion/deletion violates this, the tree self-corrects using rotations (single or double). Guarantees O(log n) for all operations. More rigidly balanced than Red-Black trees, so faster lookups but slightly slower insertions. Used when reads far exceed writes.",available:!1},{to:"/splay",icon:km,title:"Splay Tree",description:`A self-adjusting BST with a clever optimization: every accessed node is "splayed" (rotated) to the root. No explicit balance condition, yet achieves O(log n) amortized time. Recently accessed items stay near the root — perfect for caches where some items are accessed repeatedly (temporal locality). Used in Windows NT's virtual memory management, GCC's implementation of certain data structures, and network routers.`,available:!1}]},{id:"heaps",name:"Heap Structures",icon:wm,description:"Complete binary trees satisfying the heap property — either every parent ≥ children (max-heap) or every parent ≤ children (min-heap). Heaps power priority queues, enabling O(1) access to the extreme element and O(log n) insertions and deletions.",color:"#ec4899",items:[{to:"/minheap",icon:Zp,title:"Min Heap",description:`Every parent node is smaller than or equal to its children, so the minimum element is always at the root — accessible in O(1). Insert and extract-min are O(log n) as elements "bubble up" or "sink down" to maintain the heap property. Critical for: Dijkstra's shortest path algorithm, Prim's minimum spanning tree, job schedulers (process with smallest priority runs next), and efficiently finding the k largest elements in a stream.`,available:!1},{to:"/maxheap",icon:em,title:"Max Heap",description:"The mirror of min-heap: every parent ≥ children, maximum at root. Extract-max in O(1), insert and delete in O(log n). Powers: Heapsort algorithm (in-place O(n log n) sorting), priority queues where highest priority goes first, finding k smallest elements, implementing a median-finding structure (use one min-heap + one max-heap), and bandwidth management in network routers.",available:!1}]}];return s.jsxs("section",{className:"algorithms-section",children:[s.jsxs("div",{className:"section-header",children:[s.jsx("h1",{children:"Explore Data Structures"}),s.jsx("p",{children:"Choose a category to explore different data structures. Each visualizer includes step-by-step explanations and hands-on practice."})]}),s.jsx("div",{className:"categories-container",children:r.map(i=>s.jsxs("div",{className:"category-wrapper",children:[s.jsxs("button",{className:`category-header ${e===i.id?"expanded":""}`,onClick:()=>t(i.id),style:{"--category-color":i.color},children:[s.jsx("div",{className:"category-icon",style:{background:i.color},children:s.jsx(i.icon,{})}),s.jsxs("div",{className:"category-info",children:[s.jsx("h2",{children:i.name}),s.jsx("p",{children:i.description})]}),s.jsxs("div",{className:"category-meta",children:[s.jsxs("span",{className:"item-count",children:[i.items.filter(l=>l.available).length," available"]}),e===i.id?s.jsx(lm,{}):s.jsx(sm,{})]})]}),s.jsx("div",{className:`category-items ${e===i.id?"expanded":""}`,children:s.jsx("div",{className:"items-grid",children:i.items.map((l,a)=>l.available?s.jsxs(zt,{to:l.to,className:"algorithm-item",children:[s.jsx("div",{className:"item-icon",style:{background:i.color},children:s.jsx(l.icon,{})}),s.jsxs("div",{className:"item-info",children:[s.jsx("h3",{children:l.title}),s.jsx("p",{children:l.description})]}),s.jsx(ve,{className:"item-arrow"})]},a):s.jsxs("div",{className:"algorithm-item coming-soon",children:[s.jsx("div",{className:"item-icon disabled",children:s.jsx(l.icon,{})}),s.jsxs("div",{className:"item-info",children:[s.jsx("h3",{children:l.title}),s.jsx("p",{children:l.description})]}),s.jsx("span",{className:"coming-soon-badge",children:"Coming Soon"})]},a))})})]},i.id))})]})}function bm(){return s.jsxs("section",{className:"contact-section",children:[s.jsx("div",{className:"page-header",children:s.jsx("h1",{children:"Contact"})}),s.jsx("div",{className:"contact-content",children:s.jsxs("div",{className:"contact-info",children:[s.jsxs("div",{className:"info-card",children:[s.jsx("div",{className:"info-icon",children:s.jsx(md,{})}),s.jsx("h3",{children:"Email"}),s.jsx("p",{children:"For recruitment and professional opportunities"}),s.jsx("a",{href:"mailto:abdullahmahfouz@trentu.ca",className:"info-link",children:"abdullahmahfouz@trentu.ca"})]}),s.jsxs("div",{className:"info-card",children:[s.jsx("div",{className:"info-icon",children:s.jsx(Na,{})}),s.jsx("h3",{children:"GitHub"}),s.jsx("p",{children:"View my projects and contributions"}),s.jsx("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"info-link",children:"github.com/abdullahmahfouz"})]}),s.jsxs("div",{className:"info-card",children:[s.jsx("div",{className:"info-icon",children:s.jsx(Sa,{})}),s.jsx("h3",{children:"LinkedIn"}),s.jsx("p",{children:"Connect for professional networking"}),s.jsx("a",{href:"https://www.linkedin.com/in/abdullah-mahfouz-5188b1306/",target:"_blank",rel:"noopener noreferrer",className:"info-link",children:"Connect on LinkedIn"})]})]})})]})}function Pm(){return s.jsxs("section",{className:"contributions-section",children:[s.jsxs("div",{className:"page-header",children:[s.jsx("h1",{children:"Contributions"}),s.jsx("p",{children:"Help us improve this free learning tool for students! Your contributions help make DSA easier to understand for everyone."})]}),s.jsxs("div",{className:"contributions-content",children:[s.jsxs("div",{className:"contribution-card",children:[s.jsx("div",{className:"contribution-icon",children:s.jsx(om,{})}),s.jsx("h2",{children:"Code Contributions"}),s.jsx("p",{children:"Found a bug or want to add a new feature? Fork the repository, make your changes, and submit a pull request!"}),s.jsxs("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"btn-primary",children:[s.jsx("span",{children:"View on GitHub"}),s.jsx(ve,{})]})]}),s.jsxs("div",{className:"contribution-card",children:[s.jsx("div",{className:"contribution-icon",children:s.jsx(nm,{})}),s.jsx("h2",{children:"Documentation"}),s.jsx("p",{children:"Help improve our documentation, fix typos, or add examples. Every bit helps!"}),s.jsxs("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"btn-primary",children:[s.jsx("span",{children:"Improve Docs"}),s.jsx(ve,{})]})]}),s.jsxs("div",{className:"contribution-card",children:[s.jsx("div",{className:"contribution-icon",children:s.jsx(im,{})}),s.jsx("h2",{children:"Report Issues"}),s.jsx("p",{children:"Found a bug or have a suggestion? Open an issue on GitHub and let us know!"}),s.jsxs("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"btn-primary",children:[s.jsx("span",{children:"Report Issue"}),s.jsx(ve,{})]})]}),s.jsxs("div",{className:"contribution-card",children:[s.jsx("div",{className:"contribution-icon",children:s.jsx(cn,{})}),s.jsx("h2",{children:"Feature Requests"}),s.jsx("p",{children:"Have an idea for a new visualizer or feature? We'd love to hear your suggestions!"}),s.jsxs(zt,{to:"/contact",className:"btn-primary",children:[s.jsx("span",{children:"Suggest Feature"}),s.jsx(ve,{})]})]})]}),s.jsxs("div",{className:"contributors-section",children:[s.jsx("h2",{children:"Contributors"}),s.jsx("div",{className:"contributors-list",children:s.jsxs("div",{className:"contributor-item",children:[s.jsx("div",{className:"contributor-avatar",children:s.jsx(Sm,{})}),s.jsxs("div",{className:"contributor-info",children:[s.jsx("h3",{children:"Abdullah Mahfouz"}),s.jsx("p",{children:"Creator & Maintainer"})]})]})}),s.jsx("p",{className:"contributors-note",children:"Want to see your name here? Start contributing today!"})]})]})}function Jn({context:e="Data Structures"}){const[n,t]=y.useState(""),[r,i]=y.useState(""),[l,a]=y.useState(!1),u=()=>{const p=e.toLowerCase();return p.includes("stack")?"e.g., How does LIFO work?":p.includes("queue")?"e.g., What is FIFO?":p.includes("linked list")?"e.g., How do I insert at the head?":p.includes("hash")?"e.g., What is a collision?":p.includes("binary tree")||p.includes("traversal")?"e.g., What is inorder traversal?":"e.g., How does this work?"},o=async()=>{if(n.trim()){a(!0),i("");try{const p=await fetch("/api/ask-ai",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:n.trim(),code:e})}),f=await p.json();p.ok?i(f.answer||"No answer returned."):i("Currently not working, try again later.")}catch{i("Currently not working, try again later.")}finally{a(!1)}}},c=p=>{p.key==="Enter"&&o()};return s.jsxs("div",{className:"ai-assistant",children:[s.jsxs("h3",{children:[s.jsx(tm,{}),"AI Assistant"]}),s.jsxs("p",{children:["Ask me anything about ",e.toLowerCase(),"!"]}),s.jsxs("div",{className:"ai-input-group",children:[s.jsx("input",{type:"text",value:n,onChange:p=>t(p.target.value),onKeyPress:c,placeholder:u(),disabled:l}),s.jsx("button",{onClick:o,disabled:l,children:l?"Asking...":"Ask"})]}),s.jsxs("div",{id:"ai-response",children:[l&&s.jsx("div",{className:"ai-loading",children:"Thinking..."}),r&&s.jsx("div",{className:r.startsWith("Error")?"ai-error":"ai-answer",children:r})]})]})}const Im=`class Stack:
    """Stack using Python's dynamic list - simple and Pythonic!"""
    
    def __init__(self):
        self.items = []  # Dynamic list, no fixed size
    
    def push(self, item):
        """Add item to top - O(1) amortized"""
        self.items.append(item)
    
    def pop(self):
        """Remove and return top item - O(1)"""
        if self.is_empty():
            raise IndexError("Cannot pop from empty stack")
        return self.items.pop()
    
    def peek(self):
        """View top item without removing - O(1)"""
        if self.is_empty():
            return None
        return self.items[-1]
    
    def is_empty(self):
        """Check if stack is empty - O(1)"""
        return len(self.items) == 0
    
    def size(self):
        """Get number of items - O(1)"""
        return len(self.items)

# Usage
stack = Stack()
stack.push(10)
stack.push(20)
stack.push(30)
print(stack.pop())   # 30
print(stack.peek())  # 20`,Om=`class Stack {
    constructor(capacity = 100) {
        this.capacity = capacity;
        this.items = new Array(capacity);
        this.top = -1;
    }
    
    push(item) {
        if (this.top >= this.capacity - 1) {
            throw new Error("Stack is full");
        }
        this.top++;
        this.items[this.top] = item;
    }
    
    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        const item = this.items[this.top];
        this.items[this.top] = undefined;
        this.top--;
        return item;
    }
    
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.top];
    }
    
    isEmpty() {
        return this.top === -1;
    }
    
    size() {
        return this.top + 1;
    }
}

// Usage
const stack = new Stack(100);
stack.push(10);
stack.push(20);
console.log(stack.pop()); // 20`,Rm=`import java.util.EmptyStackException;

public class Stack<T> {
    private Object[] items;
    private int top;
    private int capacity;
    
    public Stack(int capacity) {
        this.capacity = capacity;
        this.items = new Object[capacity];
        this.top = -1;
    }
    
    public void push(T item) {
        if (top >= capacity - 1) {
            throw new StackOverflowError("Stack is full");
        }
        items[++top] = item;
    }
    
    @SuppressWarnings("unchecked")
    public T pop() {
        if (isEmpty()) {
            throw new EmptyStackException();
        }
        T item = (T) items[top];
        items[top--] = null;
        return item;
    }
    
    @SuppressWarnings("unchecked")
    public T peek() {
        if (isEmpty()) {
            return null;
        }
        return (T) items[top];
    }
    
    public boolean isEmpty() {
        return top == -1;
    }
    
    public int size() {
        return top + 1;
    }
}

// Usage
Stack<Integer> stack = new Stack<>(100);
stack.push(10);
stack.push(20);
System.out.println(stack.pop()); // 20`,Mm={python:Im,javascript:Om,java:Rm,"c++":`#include <iostream>
#include <stdexcept>

template <typename T>
class Stack {
private:
    T* items;
    int top;
    int capacity;

public:
    Stack(int cap = 100) : capacity(cap), top(-1) {
        items = new T[capacity];
    }
    
    ~Stack() {
        delete[] items;
    }
    
    void push(const T& item) {
        if (top >= capacity - 1) {
            throw std::overflow_error("Stack is full");
        }
        items[++top] = item;
    }
    
    T pop() {
        if (isEmpty()) {
            throw std::underflow_error("Stack is empty");
        }
        return items[top--];
    }
    
    T peek() const {
        if (isEmpty()) {
            throw std::underflow_error("Stack is empty");
        }
        return items[top];
    }
    
    bool isEmpty() const {
        return top == -1;
    }
    
    int size() const {
        return top + 1;
    }
};

// Usage
int main() {
    Stack<int> stack(100);
    stack.push(10);
    stack.push(20);
    std::cout << stack.pop() << std::endl; // 20
    return 0;
}`,"c#":`using System;

public class Stack<T>
{
    private T[] items;
    private int top;
    private int capacity;
    
    public Stack(int capacity = 100)
    {
        this.capacity = capacity;
        this.items = new T[capacity];
        this.top = -1;
    }
    
    public void Push(T item)
    {
        if (top >= capacity - 1)
            throw new StackOverflowException("Stack is full");
        items[++top] = item;
    }
    
    public T Pop()
    {
        if (IsEmpty())
            throw new InvalidOperationException("Stack is empty");
        return items[top--];
    }
    
    public T Peek()
    {
        if (IsEmpty())
            throw new InvalidOperationException("Stack is empty");
        return items[top];
    }
    
    public bool IsEmpty() => top == -1;
    
    public int Size() => top + 1;
}

// Usage
var stack = new Stack<int>(100);
stack.Push(10);
stack.Push(20);
Console.WriteLine(stack.Pop()); // 20`},Dm=`class Queue:
    """Queue using Python's dynamic list - FIFO principle"""
    
    def __init__(self):
        self.items = []
    
    def enqueue(self, item):
        """Add item to the back - O(1) amortized"""
        self.items.append(item)
    
    def dequeue(self):
        """Remove and return front item - O(n)"""
        if self.is_empty():
            raise IndexError("Cannot dequeue from empty queue")
        return self.items.pop(0)
    
    def peek(self):
        """View front item without removing - O(1)"""
        if self.is_empty():
            return None
        return self.items[0]
    
    def is_empty(self):
        """Check if queue is empty - O(1)"""
        return len(self.items) == 0
    
    def size(self):
        """Get number of items - O(1)"""
        return len(self.items)

# Usage
queue = Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
print(queue.dequeue())  # 10 (first in, first out)
print(queue.peek())     # 20`,Fm=`class Queue {
    constructor(capacity = 100) {
        this.capacity = capacity;
        this.items = new Array(capacity);
        this.front = 0;
        this.rear = -1;
        this.size = 0;
    }
    
    enqueue(item) {
        if (this.size >= this.capacity) {
            throw new Error("Queue is full");
        }
        this.rear = (this.rear + 1) % this.capacity;
        this.items[this.rear] = item;
        this.size++;
    }
    
    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        const item = this.items[this.front];
        this.items[this.front] = undefined;
        this.front = (this.front + 1) % this.capacity;
        this.size--;
        return item;
    }
    
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.front];
    }
    
    isEmpty() {
        return this.size === 0;
    }
    
    getSize() {
        return this.size;
    }
}

// Usage
const queue = new Queue(100);
queue.enqueue(10);
queue.enqueue(20);
console.log(queue.dequeue()); // 10`,Am=`import java.util.NoSuchElementException;

public class Queue<T> {
    private Object[] items;
    private int front;
    private int rear;
    private int size;
    private int capacity;
    
    public Queue(int capacity) {
        this.capacity = capacity;
        this.items = new Object[capacity];
        this.front = 0;
        this.rear = -1;
        this.size = 0;
    }
    
    public void enqueue(T item) {
        if (size >= capacity) {
            throw new IllegalStateException("Queue is full");
        }
        rear = (rear + 1) % capacity;
        items[rear] = item;
        size++;
    }
    
    @SuppressWarnings("unchecked")
    public T dequeue() {
        if (isEmpty()) {
            throw new NoSuchElementException("Queue is empty");
        }
        T item = (T) items[front];
        items[front] = null;
        front = (front + 1) % capacity;
        size--;
        return item;
    }
    
    @SuppressWarnings("unchecked")
    public T peek() {
        if (isEmpty()) {
            return null;
        }
        return (T) items[front];
    }
    
    public boolean isEmpty() {
        return size == 0;
    }
    
    public int size() {
        return size;
    }
}

// Usage
Queue<Integer> queue = new Queue<>(100);
queue.enqueue(10);
queue.enqueue(20);
System.out.println(queue.dequeue()); // 10`,Hm={python:Dm,javascript:Fm,java:Am,"c++":`#include <iostream>
#include <stdexcept>

template <typename T>
class Queue {
private:
    T* items;
    int front;
    int rear;
    int size;
    int capacity;

public:
    Queue(int cap = 100) : capacity(cap), front(0), rear(-1), size(0) {
        items = new T[capacity];
    }
    
    ~Queue() {
        delete[] items;
    }
    
    void enqueue(const T& item) {
        if (size >= capacity) {
            throw std::overflow_error("Queue is full");
        }
        rear = (rear + 1) % capacity;
        items[rear] = item;
        size++;
    }
    
    T dequeue() {
        if (isEmpty()) {
            throw std::underflow_error("Queue is empty");
        }
        T item = items[front];
        front = (front + 1) % capacity;
        size--;
        return item;
    }
    
    T peek() const {
        if (isEmpty()) {
            throw std::underflow_error("Queue is empty");
        }
        return items[front];
    }
    
    bool isEmpty() const {
        return size == 0;
    }
    
    int getSize() const {
        return size;
    }
};

// Usage
int main() {
    Queue<int> queue(100);
    queue.enqueue(10);
    queue.enqueue(20);
    std::cout << queue.dequeue() << std::endl; // 10
    return 0;
}`,"c#":`using System;

public class Queue<T>
{
    private T[] items;
    private int front;
    private int rear;
    private int size;
    private int capacity;
    
    public Queue(int capacity = 100)
    {
        this.capacity = capacity;
        this.items = new T[capacity];
        this.front = 0;
        this.rear = -1;
        this.size = 0;
    }
    
    public void Enqueue(T item)
    {
        if (size >= capacity)
            throw new InvalidOperationException("Queue is full");
        rear = (rear + 1) % capacity;
        items[rear] = item;
        size++;
    }
    
    public T Dequeue()
    {
        if (IsEmpty())
            throw new InvalidOperationException("Queue is empty");
        T item = items[front];
        front = (front + 1) % capacity;
        size--;
        return item;
    }
    
    public T Peek()
    {
        if (IsEmpty())
            throw new InvalidOperationException("Queue is empty");
        return items[front];
    }
    
    public bool IsEmpty() => size == 0;
    
    public int Size => size;
}

// Usage
var queue = new Queue<int>(100);
queue.Enqueue(10);
queue.Enqueue(20);
Console.WriteLine(queue.Dequeue()); // 10`},Um=`class Node:
    """Node for singly linked list"""
    def __init__(self, data):
        self.data = data
        self.next = None

class SinglyLinkedList:
    """Singly Linked List Implementation"""
    
    def __init__(self):
        self.head = None
        self.size = 0
    
    def insert_at_head(self, data):
        """Insert at the beginning - O(1)"""
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node
        self.size += 1
    
    def insert_at_tail(self, data):
        """Insert at the end - O(n)"""
        new_node = Node(data)
        if not self.head:
            self.head = new_node
        else:
            current = self.head
            while current.next:
                current = current.next
            current.next = new_node
        self.size += 1
    
    def delete_at_head(self):
        """Delete from beginning - O(1)"""
        if not self.head:
            raise IndexError("List is empty")
        data = self.head.data
        self.head = self.head.next
        self.size -= 1
        return data
    
    def delete_at_tail(self):
        """Delete from end - O(n)"""
        if not self.head:
            raise IndexError("List is empty")
        if not self.head.next:
            data = self.head.data
            self.head = None
            self.size -= 1
            return data
        current = self.head
        while current.next.next:
            current = current.next
        data = current.next.data
        current.next = None
        self.size -= 1
        return data
    
    def search(self, data):
        """Search for element - O(n)"""
        current = self.head
        index = 0
        while current:
            if current.data == data:
                return index
            current = current.next
            index += 1
        return -1

# Usage
ll = SinglyLinkedList()
ll.insert_at_head(10)
ll.insert_at_tail(20)
ll.insert_at_tail(30)
print(ll.search(20))  # 1`,Vm=`class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    
    insertAtHead(data) {
        // Insert at beginning - O(1)
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }
    
    insertAtTail(data) {
        // Insert at end - O(n)
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }
    
    deleteAtHead() {
        // Delete from beginning - O(1)
        if (!this.head) {
            throw new Error("List is empty");
        }
        const data = this.head.data;
        this.head = this.head.next;
        this.size--;
        return data;
    }
    
    deleteAtTail() {
        // Delete from end - O(n)
        if (!this.head) {
            throw new Error("List is empty");
        }
        if (!this.head.next) {
            const data = this.head.data;
            this.head = null;
            this.size--;
            return data;
        }
        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }
        const data = current.next.data;
        current.next = null;
        this.size--;
        return data;
    }
    
    search(data) {
        // Search for element - O(n)
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.data === data) return index;
            current = current.next;
            index++;
        }
        return -1;
    }
}

// Usage
const ll = new SinglyLinkedList();
ll.insertAtHead(10);
ll.insertAtTail(20);
ll.insertAtTail(30);`,$m=`public class SinglyLinkedList<T> {
    private class Node {
        T data;
        Node next;
        
        Node(T data) {
            this.data = data;
            this.next = null;
        }
    }
    
    private Node head;
    private int size;
    
    public SinglyLinkedList() {
        this.head = null;
        this.size = 0;
    }
    
    public void insertAtHead(T data) {
        // Insert at beginning - O(1)
        Node newNode = new Node(data);
        newNode.next = head;
        head = newNode;
        size++;
    }
    
    public void insertAtTail(T data) {
        // Insert at end - O(n)
        Node newNode = new Node(data);
        if (head == null) {
            head = newNode;
        } else {
            Node current = head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }
        size++;
    }
    
    public T deleteAtHead() {
        // Delete from beginning - O(1)
        if (head == null) {
            throw new IllegalStateException("List is empty");
        }
        T data = head.data;
        head = head.next;
        size--;
        return data;
    }
    
    public T deleteAtTail() {
        // Delete from end - O(n)
        if (head == null) {
            throw new IllegalStateException("List is empty");
        }
        if (head.next == null) {
            T data = head.data;
            head = null;
            size--;
            return data;
        }
        Node current = head;
        while (current.next.next != null) {
            current = current.next;
        }
        T data = current.next.data;
        current.next = null;
        size--;
        return data;
    }
    
    public int search(T data) {
        // Search for element - O(n)
        Node current = head;
        int index = 0;
        while (current != null) {
            if (current.data.equals(data)) return index;
            current = current.next;
            index++;
        }
        return -1;
    }
    
    public int size() {
        return size;
    }
}

// Usage
SinglyLinkedList<Integer> ll = new SinglyLinkedList<>();
ll.insertAtHead(10);
ll.insertAtTail(20);
ll.insertAtTail(30);`,Bm={python:Um,javascript:Vm,java:$m,"c++":`#include <iostream>
#include <stdexcept>

template <typename T>
class SinglyLinkedList {
private:
    struct Node {
        T data;
        Node* next;
        Node(T val) : data(val), next(nullptr) {}
    };
    
    Node* head;
    int listSize;

public:
    SinglyLinkedList() : head(nullptr), listSize(0) {}
    
    ~SinglyLinkedList() {
        while (head) {
            Node* temp = head;
            head = head->next;
            delete temp;
        }
    }
    
    void insertAtHead(T data) {
        // Insert at beginning - O(1)
        Node* newNode = new Node(data);
        newNode->next = head;
        head = newNode;
        listSize++;
    }
    
    void insertAtTail(T data) {
        // Insert at end - O(n)
        Node* newNode = new Node(data);
        if (!head) {
            head = newNode;
        } else {
            Node* current = head;
            while (current->next) {
                current = current->next;
            }
            current->next = newNode;
        }
        listSize++;
    }
    
    T deleteAtHead() {
        // Delete from beginning - O(1)
        if (!head) {
            throw std::runtime_error("List is empty");
        }
        T data = head->data;
        Node* temp = head;
        head = head->next;
        delete temp;
        listSize--;
        return data;
    }
    
    T deleteAtTail() {
        // Delete from end - O(n)
        if (!head) {
            throw std::runtime_error("List is empty");
        }
        if (!head->next) {
            T data = head->data;
            delete head;
            head = nullptr;
            listSize--;
            return data;
        }
        Node* current = head;
        while (current->next->next) {
            current = current->next;
        }
        T data = current->next->data;
        delete current->next;
        current->next = nullptr;
        listSize--;
        return data;
    }
    
    int search(T data) {
        // Search for element - O(n)
        Node* current = head;
        int index = 0;
        while (current) {
            if (current->data == data) return index;
            current = current->next;
            index++;
        }
        return -1;
    }
    
    int size() const { return listSize; }
};

// Usage
int main() {
    SinglyLinkedList<int> ll;
    ll.insertAtHead(10);
    ll.insertAtTail(20);
    ll.insertAtTail(30);
    return 0;
}`,"c#":`using System;

public class SinglyLinkedList<T>
{
    private class Node
    {
        public T Data { get; set; }
        public Node Next { get; set; }
        
        public Node(T data)
        {
            Data = data;
            Next = null;
        }
    }
    
    private Node head;
    private int size;
    
    public SinglyLinkedList()
    {
        head = null;
        size = 0;
    }
    
    public void InsertAtHead(T data)
    {
        // Insert at beginning - O(1)
        var newNode = new Node(data);
        newNode.Next = head;
        head = newNode;
        size++;
    }
    
    public void InsertAtTail(T data)
    {
        // Insert at end - O(n)
        var newNode = new Node(data);
        if (head == null)
        {
            head = newNode;
        }
        else
        {
            var current = head;
            while (current.Next != null)
                current = current.Next;
            current.Next = newNode;
        }
        size++;
    }
    
    public T DeleteAtHead()
    {
        // Delete from beginning - O(1)
        if (head == null)
            throw new InvalidOperationException("List is empty");
        T data = head.Data;
        head = head.Next;
        size--;
        return data;
    }
    
    public T DeleteAtTail()
    {
        // Delete from end - O(n)
        if (head == null)
            throw new InvalidOperationException("List is empty");
        if (head.Next == null)
        {
            T data = head.Data;
            head = null;
            size--;
            return data;
        }
        var current = head;
        while (current.Next.Next != null)
            current = current.Next;
        T tailData = current.Next.Data;
        current.Next = null;
        size--;
        return tailData;
    }
    
    public int Search(T data)
    {
        // Search for element - O(n)
        var current = head;
        int index = 0;
        while (current != null)
        {
            if (current.Data.Equals(data)) return index;
            current = current.Next;
            index++;
        }
        return -1;
    }
    
    public int Size => size;
}

// Usage
var ll = new SinglyLinkedList<int>();
ll.InsertAtHead(10);
ll.InsertAtTail(20);
ll.InsertAtTail(30);`},qm=`class TreeNode:
    """Node in a binary tree"""
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

class BinaryTree:
    """Binary Search Tree with Traversals"""
    
    def __init__(self):
        self.root = None
        self.size = 0
    
    def insert(self, data):
        """Insert a value into the BST - O(log n) average"""
        if not self.root:
            self.root = TreeNode(data)
            self.size += 1
            return
        self._insert_recursive(self.root, data)
        self.size += 1
    
    def _insert_recursive(self, node, data):
        if data < node.data:
            if node.left is None:
                node.left = TreeNode(data)
            else:
                self._insert_recursive(node.left, data)
        else:
            if node.right is None:
                node.right = TreeNode(data)
            else:
                self._insert_recursive(node.right, data)
    
    # ============ TRAVERSALS ============
    
    def inorder_traversal(self):
        """Left -> Root -> Right (sorted order for BST)"""
        result = []
        self._inorder(self.root, result)
        return result
    
    def _inorder(self, node, result):
        if node:
            self._inorder(node.left, result)
            result.append(node.data)
            self._inorder(node.right, result)
    
    def preorder_traversal(self):
        """Root -> Left -> Right (copy tree structure)"""
        result = []
        self._preorder(self.root, result)
        return result
    
    def _preorder(self, node, result):
        if node:
            result.append(node.data)
            self._preorder(node.left, result)
            self._preorder(node.right, result)
    
    def postorder_traversal(self):
        """Left -> Right -> Root (delete tree safely)"""
        result = []
        self._postorder(self.root, result)
        return result
    
    def _postorder(self, node, result):
        if node:
            self._postorder(node.left, result)
            self._postorder(node.right, result)
            result.append(node.data)
    
    def levelorder_traversal(self):
        """Level by level - BFS (shortest path)"""
        if not self.root:
            return []
        result = []
        queue = [self.root]
        while queue:
            node = queue.pop(0)
            result.append(node.data)
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        return result

# Usage
tree = BinaryTree()
for val in [50, 30, 70, 20, 40, 60, 80]:
    tree.insert(val)

print("Inorder:   ", tree.inorder_traversal())     # [20, 30, 40, 50, 60, 70, 80]
print("Preorder:  ", tree.preorder_traversal())    # [50, 30, 20, 40, 70, 60, 80]
print("Postorder: ", tree.postorder_traversal())   # [20, 40, 30, 60, 80, 70, 50]
print("Level:     ", tree.levelorder_traversal())  # [50, 30, 70, 20, 40, 60, 80]`,Km=`class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
        this.size = 0;
    }
    
    insert(data) {
        // Insert into BST - O(log n) average
        if (!this.root) {
            this.root = new TreeNode(data);
            this.size++;
            return;
        }
        this._insertRecursive(this.root, data);
        this.size++;
    }
    
    _insertRecursive(node, data) {
        if (data < node.data) {
            if (!node.left) {
                node.left = new TreeNode(data);
            } else {
                this._insertRecursive(node.left, data);
            }
        } else {
            if (!node.right) {
                node.right = new TreeNode(data);
            } else {
                this._insertRecursive(node.right, data);
            }
        }
    }
    
    // ============ TRAVERSALS ============
    
    inorderTraversal() {
        // Left -> Root -> Right (sorted order for BST)
        const result = [];
        this._inorder(this.root, result);
        return result;
    }
    
    _inorder(node, result) {
        if (node) {
            this._inorder(node.left, result);
            result.push(node.data);
            this._inorder(node.right, result);
        }
    }
    
    preorderTraversal() {
        // Root -> Left -> Right (copy tree structure)
        const result = [];
        this._preorder(this.root, result);
        return result;
    }
    
    _preorder(node, result) {
        if (node) {
            result.push(node.data);
            this._preorder(node.left, result);
            this._preorder(node.right, result);
        }
    }
    
    postorderTraversal() {
        // Left -> Right -> Root (delete tree safely)
        const result = [];
        this._postorder(this.root, result);
        return result;
    }
    
    _postorder(node, result) {
        if (node) {
            this._postorder(node.left, result);
            this._postorder(node.right, result);
            result.push(node.data);
        }
    }
    
    levelOrderTraversal() {
        // Level by level - BFS (shortest path)
        if (!this.root) return [];
        const result = [];
        const queue = [this.root];
        while (queue.length > 0) {
            const node = queue.shift();
            result.push(node.data);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return result;
    }
}

// Usage
const tree = new BinaryTree();
[50, 30, 70, 20, 40, 60, 80].forEach(val => tree.insert(val));

console.log("Inorder:  ", tree.inorderTraversal());     // [20, 30, 40, 50, 60, 70, 80]
console.log("Preorder: ", tree.preorderTraversal());    // [50, 30, 20, 40, 70, 60, 80]
console.log("Postorder:", tree.postorderTraversal());   // [20, 40, 30, 60, 80, 70, 50]
console.log("Level:    ", tree.levelOrderTraversal());  // [50, 30, 70, 20, 40, 60, 80]`,Wm=`import java.util.*;

class TreeNode {
    int data;
    TreeNode left, right;
    
    TreeNode(int data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

public class BinaryTree {
    private TreeNode root;
    private int size;
    
    public BinaryTree() {
        this.root = null;
        this.size = 0;
    }
    
    public void insert(int data) {
        // Insert into BST - O(log n) average
        if (root == null) {
            root = new TreeNode(data);
            size++;
            return;
        }
        insertRecursive(root, data);
        size++;
    }
    
    private void insertRecursive(TreeNode node, int data) {
        if (data < node.data) {
            if (node.left == null) {
                node.left = new TreeNode(data);
            } else {
                insertRecursive(node.left, data);
            }
        } else {
            if (node.right == null) {
                node.right = new TreeNode(data);
            } else {
                insertRecursive(node.right, data);
            }
        }
    }
    
    // ============ TRAVERSALS ============
    
    public List<Integer> inorderTraversal() {
        // Left -> Root -> Right (sorted order for BST)
        List<Integer> result = new ArrayList<>();
        inorder(root, result);
        return result;
    }
    
    private void inorder(TreeNode node, List<Integer> result) {
        if (node != null) {
            inorder(node.left, result);
            result.add(node.data);
            inorder(node.right, result);
        }
    }
    
    public List<Integer> preorderTraversal() {
        // Root -> Left -> Right (copy tree structure)
        List<Integer> result = new ArrayList<>();
        preorder(root, result);
        return result;
    }
    
    private void preorder(TreeNode node, List<Integer> result) {
        if (node != null) {
            result.add(node.data);
            preorder(node.left, result);
            preorder(node.right, result);
        }
    }
    
    public List<Integer> postorderTraversal() {
        // Left -> Right -> Root (delete tree safely)
        List<Integer> result = new ArrayList<>();
        postorder(root, result);
        return result;
    }
    
    private void postorder(TreeNode node, List<Integer> result) {
        if (node != null) {
            postorder(node.left, result);
            postorder(node.right, result);
            result.add(node.data);
        }
    }
    
    public List<Integer> levelOrderTraversal() {
        // Level by level - BFS (shortest path)
        List<Integer> result = new ArrayList<>();
        if (root == null) return result;
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        while (!queue.isEmpty()) {
            TreeNode node = queue.poll();
            result.add(node.data);
            if (node.left != null) queue.offer(node.left);
            if (node.right != null) queue.offer(node.right);
        }
        return result;
    }
}

// Usage
BinaryTree tree = new BinaryTree();
for (int val : new int[]{50, 30, 70, 20, 40, 60, 80}) {
    tree.insert(val);
}

System.out.println("Inorder:   " + tree.inorderTraversal());
System.out.println("Preorder:  " + tree.preorderTraversal());
System.out.println("Postorder: " + tree.postorderTraversal());
System.out.println("Level:     " + tree.levelOrderTraversal());`,Qm={python:qm,javascript:Km,java:Wm,"c++":`#include <iostream>
#include <vector>
#include <queue>
using namespace std;

struct TreeNode {
    int data;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int val) : data(val), left(nullptr), right(nullptr) {}
};

class BinaryTree {
private:
    TreeNode* root;
    int size;
    
    void insertRecursive(TreeNode* node, int data) {
        if (data < node->data) {
            if (!node->left) node->left = new TreeNode(data);
            else insertRecursive(node->left, data);
        } else {
            if (!node->right) node->right = new TreeNode(data);
            else insertRecursive(node->right, data);
        }
    }
    
    // Helper functions for traversals
    void inorder(TreeNode* node, vector<int>& result) {
        if (node) {
            inorder(node->left, result);
            result.push_back(node->data);
            inorder(node->right, result);
        }
    }
    
    void preorder(TreeNode* node, vector<int>& result) {
        if (node) {
            result.push_back(node->data);
            preorder(node->left, result);
            preorder(node->right, result);
        }
    }
    
    void postorder(TreeNode* node, vector<int>& result) {
        if (node) {
            postorder(node->left, result);
            postorder(node->right, result);
            result.push_back(node->data);
        }
    }

public:
    BinaryTree() : root(nullptr), size(0) {}
    
    void insert(int data) {
        // Insert into BST - O(log n) average
        if (!root) {
            root = new TreeNode(data);
            size++;
            return;
        }
        insertRecursive(root, data);
        size++;
    }
    
    // ============ TRAVERSALS ============
    
    vector<int> inorderTraversal() {
        // Left -> Root -> Right (sorted order for BST)
        vector<int> result;
        inorder(root, result);
        return result;
    }
    
    vector<int> preorderTraversal() {
        // Root -> Left -> Right (copy tree structure)
        vector<int> result;
        preorder(root, result);
        return result;
    }
    
    vector<int> postorderTraversal() {
        // Left -> Right -> Root (delete tree safely)
        vector<int> result;
        postorder(root, result);
        return result;
    }
    
    vector<int> levelOrderTraversal() {
        // Level by level - BFS (shortest path)
        vector<int> result;
        if (!root) return result;
        queue<TreeNode*> q;
        q.push(root);
        while (!q.empty()) {
            TreeNode* node = q.front();
            q.pop();
            result.push_back(node->data);
            if (node->left) q.push(node->left);
            if (node->right) q.push(node->right);
        }
        return result;
    }
};

// Usage
int main() {
    BinaryTree tree;
    for (int val : {50, 30, 70, 20, 40, 60, 80}) {
        tree.insert(val);
    }
    
    // Inorder:   [20, 30, 40, 50, 60, 70, 80]
    // Preorder:  [50, 30, 20, 40, 70, 60, 80]
    // Postorder: [20, 40, 30, 60, 80, 70, 50]
    // Level:     [50, 30, 70, 20, 40, 60, 80]
    return 0;
}`,"c#":`using System;
using System.Collections.Generic;

public class TreeNode
{
    public int Data { get; set; }
    public TreeNode Left { get; set; }
    public TreeNode Right { get; set; }
    
    public TreeNode(int data)
    {
        Data = data;
        Left = null;
        Right = null;
    }
}

public class BinaryTree
{
    private TreeNode root;
    private int size;
    
    public BinaryTree()
    {
        root = null;
        size = 0;
    }
    
    public void Insert(int data)
    {
        // Insert into BST - O(log n) average
        if (root == null)
        {
            root = new TreeNode(data);
            size++;
            return;
        }
        InsertRecursive(root, data);
        size++;
    }
    
    private void InsertRecursive(TreeNode node, int data)
    {
        if (data < node.Data)
        {
            if (node.Left == null)
                node.Left = new TreeNode(data);
            else
                InsertRecursive(node.Left, data);
        }
        else
        {
            if (node.Right == null)
                node.Right = new TreeNode(data);
            else
                InsertRecursive(node.Right, data);
        }
    }
    
    // ============ TRAVERSALS ============
    
    public List<int> InorderTraversal()
    {
        // Left -> Root -> Right (sorted order for BST)
        var result = new List<int>();
        Inorder(root, result);
        return result;
    }
    
    private void Inorder(TreeNode node, List<int> result)
    {
        if (node != null)
        {
            Inorder(node.Left, result);
            result.Add(node.Data);
            Inorder(node.Right, result);
        }
    }
    
    public List<int> PreorderTraversal()
    {
        // Root -> Left -> Right (copy tree structure)
        var result = new List<int>();
        Preorder(root, result);
        return result;
    }
    
    private void Preorder(TreeNode node, List<int> result)
    {
        if (node != null)
        {
            result.Add(node.Data);
            Preorder(node.Left, result);
            Preorder(node.Right, result);
        }
    }
    
    public List<int> PostorderTraversal()
    {
        // Left -> Right -> Root (delete tree safely)
        var result = new List<int>();
        Postorder(root, result);
        return result;
    }
    
    private void Postorder(TreeNode node, List<int> result)
    {
        if (node != null)
        {
            Postorder(node.Left, result);
            Postorder(node.Right, result);
            result.Add(node.Data);
        }
    }
    
    public List<int> LevelOrderTraversal()
    {
        // Level by level - BFS (shortest path)
        var result = new List<int>();
        if (root == null) return result;
        var queue = new Queue<TreeNode>();
        queue.Enqueue(root);
        while (queue.Count > 0)
        {
            var node = queue.Dequeue();
            result.Add(node.Data);
            if (node.Left != null) queue.Enqueue(node.Left);
            if (node.Right != null) queue.Enqueue(node.Right);
        }
        return result;
    }
}

// Usage
var tree = new BinaryTree();
foreach (var val in new[] {50, 30, 70, 20, 40, 60, 80})
    tree.Insert(val);

Console.WriteLine("Inorder:   " + string.Join(", ", tree.InorderTraversal()));
Console.WriteLine("Preorder:  " + string.Join(", ", tree.PreorderTraversal()));
Console.WriteLine("Postorder: " + string.Join(", ", tree.PostorderTraversal()));
Console.WriteLine("Level:     " + string.Join(", ", tree.LevelOrderTraversal()));`},Gm=`class HashTable:
    """Hash Table with Linear Probing for collision resolution"""
    
    def __init__(self, capacity=10):
        self.capacity = capacity
        self.size = 0
        self.keys = [None] * capacity
        self.values = [None] * capacity
    
    def _hash(self, key):
        """Simple hash function"""
        hash_value = 0
        for char in str(key):
            hash_value = (hash_value * 31 + ord(char)) % self.capacity
        return hash_value
    
    def insert(self, key, value):
        """Insert key-value pair - O(1) average"""
        index = self._hash(key)
        original_index = index
        
        while self.keys[index] is not None:
            if self.keys[index] == key:
                self.values[index] = value  # Update
                return
            index = (index + 1) % self.capacity  # Linear probing
            if index == original_index:
                raise Exception("Hash table is full")
        
        self.keys[index] = key
        self.values[index] = value
        self.size += 1
    
    def get(self, key):
        """Get value by key - O(1) average"""
        index = self._hash(key)
        original_index = index
        
        while self.keys[index] is not None:
            if self.keys[index] == key:
                return self.values[index]
            index = (index + 1) % self.capacity
            if index == original_index:
                break
        return None
    
    def delete(self, key):
        """Delete key-value pair - O(1) average"""
        index = self._hash(key)
        original_index = index
        
        while self.keys[index] is not None:
            if self.keys[index] == key:
                self.keys[index] = None
                self.values[index] = None
                self.size -= 1
                return True
            index = (index + 1) % self.capacity
            if index == original_index:
                break
        return False

# Usage
ht = HashTable(10)
ht.insert("apple", 5)
ht.insert("banana", 3)
ht.insert("orange", 8)
print(ht.get("apple"))   # 5
print(ht.get("banana"))  # 3`,Xm=`class HashTable {
    constructor(capacity = 10) {
        this.capacity = capacity;
        this.size = 0;
        this.keys = new Array(capacity).fill(null);
        this.values = new Array(capacity).fill(null);
    }
    
    _hash(key) {
        // Simple hash function
        let hash = 0;
        const str = String(key);
        for (let i = 0; i < str.length; i++) {
            hash = (hash * 31 + str.charCodeAt(i)) % this.capacity;
        }
        return hash;
    }
    
    insert(key, value) {
        // Insert key-value pair - O(1) average
        let index = this._hash(key);
        const originalIndex = index;
        
        while (this.keys[index] !== null) {
            if (this.keys[index] === key) {
                this.values[index] = value; // Update
                return;
            }
            index = (index + 1) % this.capacity; // Linear probing
            if (index === originalIndex) {
                throw new Error("Hash table is full");
            }
        }
        
        this.keys[index] = key;
        this.values[index] = value;
        this.size++;
    }
    
    get(key) {
        // Get value by key - O(1) average
        let index = this._hash(key);
        const originalIndex = index;
        
        while (this.keys[index] !== null) {
            if (this.keys[index] === key) {
                return this.values[index];
            }
            index = (index + 1) % this.capacity;
            if (index === originalIndex) break;
        }
        return null;
    }
    
    delete(key) {
        // Delete key-value pair - O(1) average
        let index = this._hash(key);
        const originalIndex = index;
        
        while (this.keys[index] !== null) {
            if (this.keys[index] === key) {
                this.keys[index] = null;
                this.values[index] = null;
                this.size--;
                return true;
            }
            index = (index + 1) % this.capacity;
            if (index === originalIndex) break;
        }
        return false;
    }
}

// Usage
const ht = new HashTable(10);
ht.insert("apple", 5);
ht.insert("banana", 3);
console.log(ht.get("apple"));  // 5`,Ym=`public class HashTable<K, V> {
    private K[] keys;
    private V[] values;
    private int capacity;
    private int size;
    
    @SuppressWarnings("unchecked")
    public HashTable(int capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.keys = (K[]) new Object[capacity];
        this.values = (V[]) new Object[capacity];
    }
    
    private int hash(K key) {
        // Simple hash function
        int hash = 0;
        String str = String.valueOf(key);
        for (int i = 0; i < str.length(); i++) {
            hash = (hash * 31 + str.charAt(i)) % capacity;
        }
        return Math.abs(hash);
    }
    
    public void insert(K key, V value) {
        // Insert with linear probing - O(1) average
        int index = hash(key);
        int originalIndex = index;
        
        while (keys[index] != null) {
            if (keys[index].equals(key)) {
                values[index] = value; // Update
                return;
            }
            index = (index + 1) % capacity;
            if (index == originalIndex) {
                throw new RuntimeException("Hash table is full");
            }
        }
        
        keys[index] = key;
        values[index] = value;
        size++;
    }
    
    public V get(K key) {
        // Get value - O(1) average
        int index = hash(key);
        int originalIndex = index;
        
        while (keys[index] != null) {
            if (keys[index].equals(key)) {
                return values[index];
            }
            index = (index + 1) % capacity;
            if (index == originalIndex) break;
        }
        return null;
    }
    
    public boolean delete(K key) {
        // Delete key-value pair - O(1) average
        int index = hash(key);
        int originalIndex = index;
        
        while (keys[index] != null) {
            if (keys[index].equals(key)) {
                keys[index] = null;
                values[index] = null;
                size--;
                return true;
            }
            index = (index + 1) % capacity;
            if (index == originalIndex) break;
        }
        return false;
    }
}

// Usage
HashTable<String, Integer> ht = new HashTable<>(10);
ht.insert("apple", 5);
ht.insert("banana", 3);
System.out.println(ht.get("apple")); // 5`,Zm={python:Gm,javascript:Xm,java:Ym,"c++":`#include <iostream>
#include <string>
#include <vector>
using namespace std;

class HashTable {
private:
    vector<string> keys;
    vector<int> values;
    vector<bool> occupied;
    int capacity;
    int size;
    
    int hash(const string& key) {
        int hashVal = 0;
        for (char c : key) {
            hashVal = (hashVal * 31 + c) % capacity;
        }
        return abs(hashVal);
    }

public:
    HashTable(int cap = 10) : capacity(cap), size(0) {
        keys.resize(capacity);
        values.resize(capacity);
        occupied.resize(capacity, false);
    }
    
    void insert(const string& key, int value) {
        // Insert with linear probing - O(1) average
        int index = hash(key);
        int originalIndex = index;
        
        while (occupied[index]) {
            if (keys[index] == key) {
                values[index] = value; // Update
                return;
            }
            index = (index + 1) % capacity;
            if (index == originalIndex) {
                throw runtime_error("Hash table is full");
            }
        }
        
        keys[index] = key;
        values[index] = value;
        occupied[index] = true;
        size++;
    }
    
    int get(const string& key) {
        // Get value - O(1) average
        int index = hash(key);
        int originalIndex = index;
        
        while (occupied[index]) {
            if (keys[index] == key) {
                return values[index];
            }
            index = (index + 1) % capacity;
            if (index == originalIndex) break;
        }
        return -1; // Not found
    }
    
    bool remove(const string& key) {
        // Delete key-value pair - O(1) average
        int index = hash(key);
        int originalIndex = index;
        
        while (occupied[index]) {
            if (keys[index] == key) {
                occupied[index] = false;
                size--;
                return true;
            }
            index = (index + 1) % capacity;
            if (index == originalIndex) break;
        }
        return false;
    }
};

// Usage
int main() {
    HashTable ht(10);
    ht.insert("apple", 5);
    ht.insert("banana", 3);
    cout << ht.get("apple") << endl; // 5
    return 0;
}`,"c#":`using System;

public class HashTable<K, V>
{
    private K[] keys;
    private V[] values;
    private bool[] occupied;
    private int capacity;
    private int size;
    
    public HashTable(int capacity = 10)
    {
        this.capacity = capacity;
        this.size = 0;
        this.keys = new K[capacity];
        this.values = new V[capacity];
        this.occupied = new bool[capacity];
    }
    
    private int Hash(K key)
    {
        // Simple hash function
        string str = key.ToString();
        int hash = 0;
        foreach (char c in str)
        {
            hash = (hash * 31 + c) % capacity;
        }
        return Math.Abs(hash);
    }
    
    public void Insert(K key, V value)
    {
        // Insert with linear probing - O(1) average
        int index = Hash(key);
        int originalIndex = index;
        
        while (occupied[index])
        {
            if (keys[index].Equals(key))
            {
                values[index] = value; // Update
                return;
            }
            index = (index + 1) % capacity;
            if (index == originalIndex)
                throw new InvalidOperationException("Hash table is full");
        }
        
        keys[index] = key;
        values[index] = value;
        occupied[index] = true;
        size++;
    }
    
    public V Get(K key)
    {
        // Get value - O(1) average
        int index = Hash(key);
        int originalIndex = index;
        
        while (occupied[index])
        {
            if (keys[index].Equals(key))
                return values[index];
            index = (index + 1) % capacity;
            if (index == originalIndex) break;
        }
        return default(V);
    }
    
    public bool Delete(K key)
    {
        // Delete key-value pair - O(1) average
        int index = Hash(key);
        int originalIndex = index;
        
        while (occupied[index])
        {
            if (keys[index].Equals(key))
            {
                occupied[index] = false;
                size--;
                return true;
            }
            index = (index + 1) % capacity;
            if (index == originalIndex) break;
        }
        return false;
    }
}

// Usage
var ht = new HashTable<string, int>(10);
ht.Insert("apple", 5);
ht.Insert("banana", 3);
Console.WriteLine(ht.Get("apple")); // 5`},Jm=`class Node:
    """Node for linked list in each bucket"""
    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.next = None


class HashTableChaining:
    """
    Hash Table with Separate Chaining
    Each bucket contains a linked list of key-value pairs
    """
    
    def __init__(self, capacity=10):
        self.capacity = capacity
        self.size = 0
        self.table = [None] * capacity
    
    def _hash(self, key):
        """Hash function - O(k) where k is key length"""
        return hash(key) % self.capacity
    
    def insert(self, key, value):
        """
        Insert or update key-value pair
        Time: O(1) average, O(n) worst case
        Space: O(1)
        """
        index = self._hash(key)
        
        # Empty bucket - create new node
        if self.table[index] is None:
            self.table[index] = Node(key, value)
            self.size += 1
            return
        
        # Traverse chain to find key or end
        current = self.table[index]
        while current:
            if current.key == key:
                current.value = value  # Update existing
                return
            if current.next is None:
                break
            current = current.next
        
        # Append new node (collision)
        current.next = Node(key, value)
        self.size += 1
    
    def search(self, key):
        """
        Search for value by key
        Time: O(1) average, O(n) worst case
        Space: O(1)
        """
        index = self._hash(key)
        current = self.table[index]
        
        while current:
            if current.key == key:
                return current.value
            current = current.next
        return None
    
    def delete(self, key):
        """
        Delete key-value pair
        Time: O(1) average, O(n) worst case
        Space: O(1)
        """
        index = self._hash(key)
        
        if self.table[index] is None:
            return False
        
        # Check head node
        if self.table[index].key == key:
            self.table[index] = self.table[index].next
            self.size -= 1
            return True
        
        # Search rest of chain
        current = self.table[index]
        while current.next:
            if current.next.key == key:
                current.next = current.next.next
                self.size -= 1
                return True
            current = current.next
        return False


# Usage
ht = HashTableChaining(7)
ht.insert("apple", 5)
ht.insert("banana", 3)
ht.insert("cherry", 8)  # May collide
print(ht.search("apple"))  # 5
ht.delete("banana")`,ev=`class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class HashTableChaining {
    /**
     * Hash Table with Separate Chaining
     * Each bucket contains a linked list of key-value pairs
     */
    constructor(capacity = 10) {
        this.capacity = capacity;
        this.size = 0;
        this.table = new Array(capacity).fill(null);
    }
    
    _hash(key) {
        // Hash function - O(k) where k is key length
        let hash = 0;
        const str = String(key);
        for (let i = 0; i < str.length; i++) {
            hash = (hash * 31 + str.charCodeAt(i)) % this.capacity;
        }
        return hash;
    }
    
    insert(key, value) {
        /**
         * Insert or update key-value pair
         * Time: O(1) average, O(n) worst case
         * Space: O(1)
         */
        const index = this._hash(key);
        
        // Empty bucket - create new node
        if (this.table[index] === null) {
            this.table[index] = new Node(key, value);
            this.size++;
            return;
        }
        
        // Traverse chain to find key or end
        let current = this.table[index];
        while (current) {
            if (current.key === key) {
                current.value = value;  // Update existing
                return;
            }
            if (current.next === null) break;
            current = current.next;
        }
        
        // Append new node (collision)
        current.next = new Node(key, value);
        this.size++;
    }
    
    search(key) {
        /**
         * Search for value by key
         * Time: O(1) average, O(n) worst case
         * Space: O(1)
         */
        const index = this._hash(key);
        let current = this.table[index];
        
        while (current) {
            if (current.key === key) {
                return current.value;
            }
            current = current.next;
        }
        return null;
    }
    
    delete(key) {
        /**
         * Delete key-value pair
         * Time: O(1) average, O(n) worst case
         * Space: O(1)
         */
        const index = this._hash(key);
        
        if (this.table[index] === null) return false;
        
        // Check head node
        if (this.table[index].key === key) {
            this.table[index] = this.table[index].next;
            this.size--;
            return true;
        }
        
        // Search rest of chain
        let current = this.table[index];
        while (current.next) {
            if (current.next.key === key) {
                current.next = current.next.next;
                this.size--;
                return true;
            }
            current = current.next;
        }
        return false;
    }
}

// Usage
const ht = new HashTableChaining(7);
ht.insert("apple", 5);
ht.insert("banana", 3);
console.log(ht.search("apple"));  // 5`,nv=`public class HashTableChaining<K, V> {
    /**
     * Hash Table with Separate Chaining
     * Each bucket contains a linked list of key-value pairs
     */
    
    private class Node {
        K key;
        V value;
        Node next;
        
        Node(K key, V value) {
            this.key = key;
            this.value = value;
            this.next = null;
        }
    }
    
    private Node[] table;
    private int capacity;
    private int size;
    
    @SuppressWarnings("unchecked")
    public HashTableChaining(int capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.table = (Node[]) new HashTableChaining.Node[capacity];
    }
    
    private int hash(K key) {
        // Hash function - O(1)
        return Math.abs(key.hashCode() % capacity);
    }
    
    /**
     * Insert or update key-value pair
     * Time: O(1) average, O(n) worst case
     * Space: O(1)
     */
    public void insert(K key, V value) {
        int index = hash(key);
        
        // Empty bucket - create new node
        if (table[index] == null) {
            table[index] = new Node(key, value);
            size++;
            return;
        }
        
        // Traverse chain to find key or end
        Node current = table[index];
        while (current != null) {
            if (current.key.equals(key)) {
                current.value = value;  // Update existing
                return;
            }
            if (current.next == null) break;
            current = current.next;
        }
        
        // Append new node (collision)
        current.next = new Node(key, value);
        size++;
    }
    
    /**
     * Search for value by key
     * Time: O(1) average, O(n) worst case
     * Space: O(1)
     */
    public V search(K key) {
        int index = hash(key);
        Node current = table[index];
        
        while (current != null) {
            if (current.key.equals(key)) {
                return current.value;
            }
            current = current.next;
        }
        return null;
    }
    
    /**
     * Delete key-value pair
     * Time: O(1) average, O(n) worst case
     * Space: O(1)
     */
    public boolean delete(K key) {
        int index = hash(key);
        
        if (table[index] == null) return false;
        
        // Check head node
        if (table[index].key.equals(key)) {
            table[index] = table[index].next;
            size--;
            return true;
        }
        
        // Search rest of chain
        Node current = table[index];
        while (current.next != null) {
            if (current.next.key.equals(key)) {
                current.next = current.next.next;
                size--;
                return true;
            }
            current = current.next;
        }
        return false;
    }
}

// Usage
HashTableChaining<String, Integer> ht = new HashTableChaining<>(7);
ht.insert("apple", 5);
ht.insert("banana", 3);
System.out.println(ht.search("apple"));  // 5`,tv={python:Jm,javascript:ev,java:nv,"c++":`#include <iostream>
#include <string>
#include <functional>
using namespace std;

/**
 * Hash Table with Separate Chaining
 * Each bucket contains a linked list of key-value pairs
 */
template <typename K, typename V>
class HashTableChaining {
private:
    struct Node {
        K key;
        V value;
        Node* next;
        Node(K k, V v) : key(k), value(v), next(nullptr) {}
    };
    
    Node** table;
    int capacity;
    int size;
    
    int hash(const K& key) {
        // Hash function - O(1)
        return abs((int)(std::hash<K>{}(key) % capacity));
    }

public:
    HashTableChaining(int cap = 10) : capacity(cap), size(0) {
        table = new Node*[capacity]();
    }
    
    ~HashTableChaining() {
        for (int i = 0; i < capacity; i++) {
            Node* current = table[i];
            while (current) {
                Node* temp = current;
                current = current->next;
                delete temp;
            }
        }
        delete[] table;
    }
    
    /**
     * Insert or update key-value pair
     * Time: O(1) average, O(n) worst case
     * Space: O(1)
     */
    void insert(const K& key, const V& value) {
        int index = hash(key);
        
        // Empty bucket - create new node
        if (table[index] == nullptr) {
            table[index] = new Node(key, value);
            size++;
            return;
        }
        
        // Traverse chain to find key or end
        Node* current = table[index];
        while (current) {
            if (current->key == key) {
                current->value = value;  // Update existing
                return;
            }
            if (current->next == nullptr) break;
            current = current->next;
        }
        
        // Append new node (collision)
        current->next = new Node(key, value);
        size++;
    }
    
    /**
     * Search for value by key
     * Time: O(1) average, O(n) worst case
     * Space: O(1)
     */
    V* search(const K& key) {
        int index = hash(key);
        Node* current = table[index];
        
        while (current) {
            if (current->key == key) {
                return &current->value;
            }
            current = current->next;
        }
        return nullptr;
    }
    
    /**
     * Delete key-value pair
     * Time: O(1) average, O(n) worst case
     * Space: O(1)
     */
    bool remove(const K& key) {
        int index = hash(key);
        
        if (table[index] == nullptr) return false;
        
        // Check head node
        if (table[index]->key == key) {
            Node* temp = table[index];
            table[index] = table[index]->next;
            delete temp;
            size--;
            return true;
        }
        
        // Search rest of chain
        Node* current = table[index];
        while (current->next) {
            if (current->next->key == key) {
                Node* temp = current->next;
                current->next = current->next->next;
                delete temp;
                size--;
                return true;
            }
            current = current->next;
        }
        return false;
    }
};

// Usage
int main() {
    HashTableChaining<string, int> ht(7);
    ht.insert("apple", 5);
    ht.insert("banana", 3);
    int* val = ht.search("apple");
    if (val) cout << *val << endl;  // 5
    return 0;
}`,"c#":`using System;

/// <summary>
/// Hash Table with Separate Chaining
/// Each bucket contains a linked list of key-value pairs
/// </summary>
public class HashTableChaining<K, V>
{
    private class Node
    {
        public K Key;
        public V Value;
        public Node Next;
        
        public Node(K key, V value)
        {
            Key = key;
            Value = value;
            Next = null;
        }
    }
    
    private Node[] table;
    private int capacity;
    private int size;
    
    public HashTableChaining(int capacity = 10)
    {
        this.capacity = capacity;
        this.size = 0;
        this.table = new Node[capacity];
    }
    
    private int Hash(K key)
    {
        // Hash function - O(1)
        return Math.Abs(key.GetHashCode() % capacity);
    }
    
    /// <summary>
    /// Insert or update key-value pair
    /// Time: O(1) average, O(n) worst case
    /// Space: O(1)
    /// </summary>
    public void Insert(K key, V value)
    {
        int index = Hash(key);
        
        // Empty bucket - create new node
        if (table[index] == null)
        {
            table[index] = new Node(key, value);
            size++;
            return;
        }
        
        // Traverse chain to find key or end
        Node current = table[index];
        while (current != null)
        {
            if (current.Key.Equals(key))
            {
                current.Value = value;  // Update existing
                return;
            }
            if (current.Next == null) break;
            current = current.Next;
        }
        
        // Append new node (collision)
        current.Next = new Node(key, value);
        size++;
    }
    
    /// <summary>
    /// Search for value by key
    /// Time: O(1) average, O(n) worst case
    /// Space: O(1)
    /// </summary>
    public V Search(K key)
    {
        int index = Hash(key);
        Node current = table[index];
        
        while (current != null)
        {
            if (current.Key.Equals(key))
            {
                return current.Value;
            }
            current = current.Next;
        }
        return default(V);
    }
    
    /// <summary>
    /// Delete key-value pair
    /// Time: O(1) average, O(n) worst case
    /// Space: O(1)
    /// </summary>
    public bool Delete(K key)
    {
        int index = Hash(key);
        
        if (table[index] == null) return false;
        
        // Check head node
        if (table[index].Key.Equals(key))
        {
            table[index] = table[index].Next;
            size--;
            return true;
        }
        
        // Search rest of chain
        Node current = table[index];
        while (current.Next != null)
        {
            if (current.Next.Key.Equals(key))
            {
                current.Next = current.Next.Next;
                size--;
                return true;
            }
            current = current.Next;
        }
        return false;
    }
}

// Usage
var ht = new HashTableChaining<string, int>(7);
ht.Insert("apple", 5);
ht.Insert("banana", 3);
Console.WriteLine(ht.Search("apple"));  // 5`},Ss={stack:Mm,queue:Hm,linkedlist:Bm,binarytree:Qm,hashtable:Zm,hashtableChaining:tv};function et({dataStructure:e}){var f;const[n,t]=y.useState("python"),[r,i]=y.useState(!1),l=["python","javascript","java","c++","c#"],a=l.filter(m=>{var x;return(x=Ss[e])==null?void 0:x[m]}),u=a.length>0?a:l,o=((f=Ss[e])==null?void 0:f[n])||"Code not available for this data structure";y.useEffect(()=>{var m;!((m=Ss[e])!=null&&m[n])&&a.length>0&&t(a[0])},[e,n,a]);const c=m=>({python:"Python",javascript:"JavaScript",java:"Java","c++":"C++","c#":"C#"})[m]||m,p=()=>{navigator.clipboard.writeText(o),i(!0),setTimeout(()=>i(!1),2e3)};return s.jsxs("div",{className:"code-section",children:[s.jsxs("h2",{children:[s.jsx(Bo,{})," Implementation"]}),s.jsx("div",{className:"code-tabs",children:u.map(m=>s.jsxs("button",{className:`tab-btn ${n===m?"active":""}`,onClick:()=>t(m),children:[s.jsx(Bo,{}),c(m)]},m))}),s.jsx("div",{className:"code-panels",children:s.jsx("div",{className:"code-panel active",children:s.jsxs("pre",{children:[s.jsxs("button",{className:"copy-btn",onClick:p,children:[s.jsx(um,{})," ",r?"Copied!":"Copy"]}),s.jsx("code",{children:o})]})})})]})}function It({message:e}){if(!(e!=null&&e.text))return null;const n=e.type||"info";return s.jsx("div",{className:`message message-${n}`,children:e.text})}async function Qe(e){return await(await fetch(e)).json()}async function te(e,n){return await(await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json()}function Ot(e=3e3){const[n,t]=y.useState(null),r=y.useRef(null),i=y.useCallback(()=>{t(null),r.current&&(clearTimeout(r.current),r.current=null)},[]),l=y.useCallback((a,u="info")=>{t({text:a,type:u}),r.current&&clearTimeout(r.current),r.current=setTimeout(()=>{t(null),r.current=null},e)},[e]);return y.useEffect(()=>i,[i]),{message:n,showMessage:l,clearMessage:i}}function rv(){const[e,n]=y.useState([]),[t,r]=y.useState(0),[i,l]=y.useState("Empty"),[a]=y.useState(10),{message:u,showMessage:o}=Ot(3e3),[c,p]=y.useState("");y.useEffect(()=>{f()},[]);const f=async()=>{try{const d=await Qe("/api/stack");n(d.items||[]),r(d.size||0),l(d.top!==null&&d.top!==void 0?d.top:"Empty")}catch(d){console.error("Error loading stack:",d)}},m=async()=>{if(!c||c.trim()===""){o("Please enter a number!","error");return}const d=Number(c);if(isNaN(d)){o("Please enter a valid number!","error");return}try{const h=await te("/api/stack/push",{value:d});if(h.error){o(h.error,"error");return}n(h.items||[]),r(h.size||0),l(h.top!==null&&h.top!==void 0?h.top:"Empty"),o(`Pushed ${d} to stack!`,"success"),p("")}catch(h){console.error("Push error:",h),o("Error pushing to stack. Is Flask running?","error")}},x=async()=>{try{const d=await te("/api/stack/pop",{});if(d.error){o(d.error,"error");return}n(d.items||[]),r(d.size||0),l(d.top!==null&&d.top!==void 0?d.top:"Empty"),o(`Popped ${d.popped} from stack!`,"success")}catch{o("Error popping from stack","error")}},k=async()=>{try{const d=await Qe("/api/stack/peek");if(d.error){o(d.error,"error");return}o(`Top element is: ${d.top}`,"info")}catch{o("Error peeking stack","error")}},w=async()=>{try{await te("/api/stack/clear",{}),n([]),r(0),l("Empty"),o("Stack cleared!","success")}catch{o("Error clearing stack","error")}},g=d=>{d.key==="Enter"&&m()};return s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"intro-layout",children:[s.jsxs("div",{className:"concept-box",children:[s.jsxs("div",{className:"concept-header",children:[s.jsx(On,{className:"icon-sm"}),s.jsx("span",{children:"What is a Stack?"})]}),s.jsxs("div",{className:"concept-content",children:[s.jsxs("p",{children:["A ",s.jsx("strong",{children:"Stack"})," is a linear data structure that follows the ",s.jsx("strong",{children:"LIFO"})," (Last In, First Out) principle."]}),s.jsxs("div",{className:"concept-analogy",children:[s.jsx(cn,{}),s.jsxs("span",{children:["Think of a stack of plates - you can only add or remove from the ",s.jsx("strong",{children:"top"}),"!"]})]}),s.jsxs("div",{className:"concept-operations",children:[s.jsxs("div",{className:"op-item",children:[s.jsx("span",{className:"op-name",children:"Push"}),s.jsx("span",{className:"op-desc",children:"Add to top"}),s.jsx("span",{className:"op-complexity",children:"O(1)"})]}),s.jsxs("div",{className:"op-item",children:[s.jsx("span",{className:"op-name",children:"Pop"}),s.jsx("span",{className:"op-desc",children:"Remove from top"}),s.jsx("span",{className:"op-complexity",children:"O(1)"})]}),s.jsxs("div",{className:"op-item",children:[s.jsx("span",{className:"op-name",children:"Peek"}),s.jsx("span",{className:"op-desc",children:"View top element"}),s.jsx("span",{className:"op-complexity",children:"O(1)"})]})]}),s.jsxs("div",{className:"concept-uses",children:[s.jsx("strong",{children:"Common Uses:"}),s.jsxs("ul",{children:[s.jsx("li",{children:"Browser back/forward buttons"}),s.jsx("li",{children:"Undo/Redo functionality"}),s.jsx("li",{children:"Function call stack"}),s.jsx("li",{children:"Expression evaluation"})]})]})]})]}),s.jsx(Jn,{context:"Stack data structure"})]}),s.jsxs("div",{className:"visualizer-layout",children:[s.jsxs("div",{className:"control-panel",children:[s.jsx("h2",{children:"Stack Operations"}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{htmlFor:"pushValue",children:"Push (Add to top)"}),s.jsxs("div",{className:"input-group",children:[s.jsx("input",{type:"text",id:"pushValue",value:c,onChange:d=>p(d.target.value),onKeyPress:g,placeholder:"Enter a value"}),s.jsx("button",{onClick:m,className:"btn btn-push",children:"Push"})]})]}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{children:"Other Operations"}),s.jsxs("div",{className:"btn-group",children:[s.jsx("button",{onClick:x,className:"btn btn-pop",children:"Pop"}),s.jsx("button",{onClick:k,className:"btn btn-peek",children:"Peek"}),s.jsx("button",{onClick:w,className:"btn btn-clear",children:"Clear"})]})]}),s.jsxs("div",{className:"info-panel",children:[s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Size:"}),s.jsx("span",{className:"info-value",children:t})]}),s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Top:"}),s.jsx("span",{className:"info-value",children:i})]}),s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Max Size:"}),s.jsx("span",{className:"info-value",children:a})]})]}),s.jsx(It,{message:u})]}),s.jsxs("div",{className:"visual-panel",children:[s.jsx("h2",{children:"Stack Visualization"}),s.jsxs("div",{className:"stack-container",children:[s.jsx("div",{className:"stack-visual",children:e.length===0?s.jsx("div",{className:"stack-empty",children:"Stack is empty. Push some items!"}):e.slice().reverse().map((d,h)=>s.jsx("div",{className:"stack-item",children:d},h))}),s.jsx("div",{className:"stack-base",children:s.jsx("span",{children:"BOTTOM"})})]})]})]}),s.jsx(et,{dataStructure:"stack"})]})}function iv(){const[e,n]=y.useState([]),[t,r]=y.useState(0),[i,l]=y.useState("Empty"),[a]=y.useState(10),{message:u,showMessage:o}=Ot(3e3),[c,p]=y.useState("");y.useEffect(()=>{f()},[]);const f=async()=>{try{const g=await Qe("/api/queue");n(g.items||[]),r(g.size||0),l(g.front!==null&&g.front!==void 0?g.front:"Empty")}catch(g){console.error("Error loading queue:",g)}},m=async()=>{if(!c||c.trim()===""){o("Please enter a number!","error");return}const g=Number(c);if(isNaN(g)){o("Please enter a valid number!","error");return}try{const d=await te("/api/queue/enqueue",{value:g});if(d.error){o(d.error,"error");return}n(d.items||[]),r(d.size||0),l(d.front!==null&&d.front!==void 0?d.front:"Empty"),o(`Enqueued ${g}!`,"success"),p("")}catch(d){console.error("Enqueue error:",d),o("Error enqueueing. Is Flask running?","error")}},x=async()=>{try{const g=await te("/api/queue/dequeue",{});if(g.error){o(g.error,"error");return}n(g.items||[]),r(g.size||0),l(g.front!==null&&g.front!==void 0?g.front:"Empty"),o(`Dequeued ${g.dequeued} from queue!`,"success")}catch{o("Error dequeuing from queue","error")}},k=async()=>{try{const g=await Qe("/api/queue/peek");if(g.error){o(g.error,"error");return}o(`Front element is: ${g.front}`,"info")}catch{o("Error peeking queue","error")}},w=async()=>{try{await te("/api/queue/clear",{}),n([]),r(0),l("Empty"),o("Queue cleared!","success")}catch{o("Error clearing queue","error")}};return s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"intro-layout",children:[s.jsxs("div",{className:"concept-box",children:[s.jsxs("div",{className:"concept-header",children:[s.jsx(On,{className:"icon-sm"}),s.jsx("span",{children:"What is a Queue?"})]}),s.jsxs("div",{className:"concept-content",children:[s.jsxs("p",{children:["A ",s.jsx("strong",{children:"Queue"})," is a linear data structure that follows the ",s.jsx("strong",{children:"FIFO"})," (First In, First Out) principle."]}),s.jsxs("div",{className:"concept-analogy",children:[s.jsx(cn,{}),s.jsxs("span",{children:["Think of a line at a store – the first person in line gets served ",s.jsx("strong",{children:"first"}),"!"]})]}),s.jsxs("div",{className:"concept-operations",children:[s.jsxs("div",{className:"op-item",children:[s.jsx("span",{className:"op-name",children:"Enqueue"}),s.jsx("span",{className:"op-desc",children:"Add to the back"}),s.jsx("span",{className:"op-complexity",children:"O(1)"})]}),s.jsxs("div",{className:"op-item",children:[s.jsx("span",{className:"op-name",children:"Dequeue"}),s.jsx("span",{className:"op-desc",children:"Remove from the front"}),s.jsx("span",{className:"op-complexity",children:"O(1)"})]}),s.jsxs("div",{className:"op-item",children:[s.jsx("span",{className:"op-name",children:"Peek"}),s.jsx("span",{className:"op-desc",children:"View the front element"}),s.jsx("span",{className:"op-complexity",children:"O(1)"})]})]})]})]}),s.jsx(Jn,{context:"Queue data structure"})]}),s.jsxs("div",{className:"visualizer-layout",children:[s.jsxs("div",{className:"control-panel",children:[s.jsx("h2",{children:"Queue Operations"}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{htmlFor:"enqueueValue",children:"Enqueue (Add to back)"}),s.jsxs("div",{className:"input-group",children:[s.jsx("input",{type:"text",id:"enqueueValue",value:c,onChange:g=>p(g.target.value),onKeyPress:g=>g.key==="Enter"&&m(),placeholder:"Enter a value"}),s.jsx("button",{onClick:m,className:"btn btn-enqueue",children:"Enqueue"})]})]}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{children:"Other Operations"}),s.jsxs("div",{className:"btn-group",children:[s.jsx("button",{onClick:x,className:"btn btn-dequeue",children:"Dequeue"}),s.jsx("button",{onClick:k,className:"btn btn-peek",children:"Peek"}),s.jsx("button",{onClick:w,className:"btn btn-clear",children:"Clear"})]})]}),s.jsxs("div",{className:"info-panel",children:[s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Size:"}),s.jsx("span",{className:"info-value",children:t})]}),s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Front:"}),s.jsx("span",{className:"info-value",children:i})]}),s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Max Size:"}),s.jsx("span",{className:"info-value",children:a})]})]}),s.jsx(It,{message:u})]}),s.jsxs("div",{className:"visual-panel",children:[s.jsx("h2",{children:"Queue Visualization"}),s.jsxs("div",{className:"queue-container",children:[s.jsx("div",{className:"queue-label",children:s.jsx("span",{className:"front-marker",children:"FRONT →"})}),s.jsx("div",{className:"queue-visual",children:e.length===0?s.jsx("div",{className:"queue-empty",children:"Queue is empty. Enqueue some items!"}):e.map((g,d)=>{const h=d===0,v=d===e.length-1;return s.jsxs("div",{className:`queue-item ${h?"queue-front":""} ${v?"queue-back":""}`,children:[h&&s.jsx("span",{className:"front-label",children:"FRONT"}),g,v&&s.jsx("span",{className:"back-label",children:"BACK"})]},d)})}),s.jsx("div",{className:"queue-label",children:s.jsx("span",{className:"back-marker",children:"← BACK"})})]})]})]}),s.jsx(et,{dataStructure:"queue"})]})}function sv(){const[e,n]=y.useState([]),[t,r]=y.useState(0),[i,l]=y.useState("Empty"),{message:a,showMessage:u}=Ot(3e3),[o,c]=y.useState(""),[p,f]=y.useState(""),[m,x]=y.useState(""),[k,w]=y.useState(""),[g,d]=y.useState(""),[h,v]=y.useState("");y.useEffect(()=>{N()},[]);const N=async()=>{try{const S=await Qe("/api/linkedlist");n(S.items||[]),r(S.size||0),l(S.head!==null&&S.head!==void 0?S.head:"Empty")}catch(S){console.error("Error loading linked list:",S)}},_=async()=>{if(!o||o.trim()===""){u("Please enter a number!","error");return}const S=Number(o);if(isNaN(S)){u("Please enter a valid number!","error");return}try{const A=await te("/api/linkedlist/insert/head",{value:S});if(A.error){u(A.error,"error");return}n(A.items||[]),r(A.size||0),l(A.head!==null&&A.head!==void 0?A.head:"Empty"),u(`Inserted ${S} at head!`,"success"),c("")}catch(A){console.error("Insert error:",A),u("Error inserting. Is Flask running?","error")}},P=async()=>{if(!p||p.trim()===""){u("Please enter a number!","error");return}const S=Number(p);if(isNaN(S)){u("Please enter a valid number!","error");return}try{const A=await te("/api/linkedlist/insert/tail",{value:S});if(A.error){u(A.error,"error");return}n(A.items||[]),r(A.size||0),l(A.head!==null&&A.head!==void 0?A.head:"Empty"),u(`Inserted ${S} at tail!`,"success"),f("")}catch(A){console.error("Insert error:",A),u("Error inserting. Is Flask running?","error")}},b=async()=>{try{const S=await te("/api/linkedlist/delete/head",{});if(S.error){u(S.error,"error");return}n(S.items||[]),r(S.size||0),l(S.head!==null&&S.head!==void 0?S.head:"Empty"),u("Deleted head!","success")}catch{u("Error deleting head","error")}},I=async()=>{try{const S=await te("/api/linkedlist/delete/tail",{});if(S.error){u(S.error,"error");return}n(S.items||[]),r(S.size||0),l(S.head!==null&&S.head!==void 0?S.head:"Empty"),u("Deleted tail!","success")}catch{u("Error deleting tail","error")}},M=async()=>{try{await te("/api/linkedlist/clear",{}),n([]),r(0),l("Empty"),u("List cleared!","success")}catch{u("Error clearing list","error")}};return s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"intro-layout",children:[s.jsxs("div",{className:"concept-box",children:[s.jsxs("div",{className:"concept-header",children:[s.jsx(On,{className:"icon-sm"}),s.jsx("span",{children:"What is a Singly Linked List?"})]}),s.jsxs("div",{className:"concept-content",children:[s.jsxs("p",{children:["A ",s.jsx("strong",{children:"Singly Linked List"})," is a linear data structure where each element contains data and a pointer to the next node."]}),s.jsxs("div",{className:"concept-analogy",children:[s.jsx(cn,{}),s.jsxs("span",{children:["Think of a treasure hunt – each clue points to the ",s.jsx("strong",{children:"next location"}),"!"]})]})]})]}),s.jsx(Jn,{context:"Singly Linked List data structure"})]}),s.jsxs("div",{className:"visualizer-layout",children:[s.jsxs("div",{className:"control-panel",children:[s.jsx("h2",{children:"Linked List Operations"}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{htmlFor:"insertHeadValue",children:"Insert at Head"}),s.jsxs("div",{className:"input-group",children:[s.jsx("input",{type:"text",id:"insertHeadValue",value:o,onChange:S=>c(S.target.value),onKeyPress:S=>S.key==="Enter"&&_(),placeholder:"Enter a value"}),s.jsx("button",{onClick:_,className:"btn btn-insert",children:"Insert Head"})]})]}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{htmlFor:"insertTailValue",children:"Insert at Tail"}),s.jsxs("div",{className:"input-group",children:[s.jsx("input",{type:"text",id:"insertTailValue",value:p,onChange:S=>f(S.target.value),onKeyPress:S=>S.key==="Enter"&&P(),placeholder:"Enter a value"}),s.jsx("button",{onClick:P,className:"btn btn-insert",children:"Insert Tail"})]})]}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{children:"Delete Operations"}),s.jsxs("div",{className:"btn-group",children:[s.jsx("button",{onClick:b,className:"btn btn-delete",children:"Delete Head"}),s.jsx("button",{onClick:I,className:"btn btn-delete",children:"Delete Tail"})]})]}),s.jsx("div",{className:"operation-group",children:s.jsx("button",{onClick:M,className:"btn btn-clear full-width",children:"Clear All"})}),s.jsxs("div",{className:"info-panel",children:[s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Size:"}),s.jsx("span",{className:"info-value",children:t})]}),s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Head:"}),s.jsx("span",{className:"info-value",children:i})]})]}),s.jsx(It,{message:a})]}),s.jsxs("div",{className:"visual-panel",children:[s.jsx("h2",{children:"Linked List Visualization"}),s.jsx("div",{className:"linkedlist-container",children:s.jsx("div",{className:"linkedlist-visual",children:e.length===0?s.jsx("div",{className:"linkedlist-empty",children:"List is empty. Insert some nodes!"}):e.map((S,A)=>s.jsx(bi.Fragment,{children:s.jsxs("div",{className:"linkedlist-node",children:[s.jsx("div",{className:"node-value",children:S}),A<e.length-1&&s.jsx("div",{className:"node-arrow",children:"→"})]})},A))})})]})]}),s.jsx(et,{dataStructure:"linkedlist"})]})}function lv(){const[e,n]=y.useState([]),[t,r]=y.useState(0),[i,l]=y.useState(0),[a,u]=y.useState(0),[o,c]=y.useState(0),{message:p,showMessage:f}=Ot(3e3),[m,x]=y.useState(""),[k,w]=y.useState(""),[g,d]=y.useState(""),[h,v]=y.useState(""),[N,_]=y.useState(null),[P,b]=y.useState([]),[I,M]=y.useState(null),[S,A]=y.useState(null);y.useEffect(()=>{oe()},[]);const oe=async()=>{try{const j=await Qe("/api/hashtable");n(j.table||[]),r(j.size||0),l(j.capacity||0),u(j.load_factor||0),c(j.collision_count||0)}catch(j){console.error("Error loading hashtable:",j)}},ue=j=>{if(!i||i===0)return 0;let L=0;for(let R=0;R<j.length;R++)L=(L*31+j.charCodeAt(R))%i;return L},Ce=(j,L)=>{const R=ue(j),F=[R];let $=R;for(;L[$]&&L[$][0]!==j&&($=($+1)%i,F.push($),!($===R||F.length>i)););return{originalHash:R,path:F,finalSlot:$}},q=async()=>{if(!m.trim()||!k.trim()){f("Please enter both key and value!","error");return}const j=i>0?ue(m.trim()):0,L=e.length>0&&e[j]&&e[j][0]!==m.trim();let R=null;L&&(R=Ce(m.trim(),e));try{const F=await te("/api/hashtable/insert",{key:m.trim(),value:k.trim()});if(F.error){f(F.error,"error");return}await oe(),M(m.trim()),L&&R?(A({key:m.trim(),originalSlot:R.originalHash,probedSlots:R.path,finalSlot:R.path[R.path.length-1]}),b(R.path),f(`Collision! "${m}" hashed to ${R.originalHash}, probed ${R.path.length} slot(s)`,"warning"),setTimeout(()=>{b([]),A(null)},4e3)):(f(`Inserted "${m}" → slot ${j}`,"success"),_(j),setTimeout(()=>_(null),2e3)),x(""),w(""),setTimeout(()=>M(null),3e3)}catch{f("Error inserting. Is Flask running?","error")}},z=async()=>{if(!g.trim()){f("Please enter a key!","error");return}try{const j=await te("/api/hashtable/delete",{key:g.trim()});if(j.error){f(j.error,"error");return}await oe(),f(`Deleted "${g}"`,"success"),d("")}catch{f("Error deleting. Is Flask running?","error")}},E=async()=>{if(!h.trim()){f("Please enter a key!","error");return}try{const j=await Qe(`/api/hashtable/get?key=${encodeURIComponent(h.trim())}`);if(j.error){f(j.error,"error");return}j.found?f(`Found: "${h}" = ${j.value}`,"success"):f(`Key "${h}" not found`,"error"),v("")}catch{f("Error searching item","error")}},T=async()=>{try{await te("/api/hashtable/clear",{}),await oe(),b([]),A(null),f("Hashtable cleared!","success")}catch{f("Error clearing hashtable","error")}};return s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"intro-layout",children:[s.jsxs("div",{className:"intro-left",children:[s.jsxs("div",{className:"concept-box",children:[s.jsxs("div",{className:"concept-header",children:[s.jsx(On,{className:"icon-sm"}),s.jsx("span",{children:"What is a Hash Table?"})]}),s.jsxs("div",{className:"concept-content",children:[s.jsxs("p",{children:["A ",s.jsx("strong",{children:"Hash Table"})," maps keys to values using a hash function for O(1) lookups."]}),s.jsxs("div",{className:"concept-analogy",children:[s.jsx(cn,{}),s.jsxs("span",{children:["Like a ",s.jsx("strong",{children:"coat check"})," – give them your coat (value), get a ticket number (hash of key)!"]})]})]})]}),s.jsxs("div",{className:"concept-box",style:{marginTop:"1rem"},children:[s.jsxs("div",{className:"concept-header",children:[s.jsx(_i,{className:"icon-sm",style:{color:"#f59e0b"}}),s.jsx("span",{children:"Linear Probing"})]}),s.jsxs("div",{className:"concept-content",children:[s.jsxs("p",{children:["When two keys hash to the same slot (",s.jsx("strong",{children:"collision"}),"), we check the next slot until we find an empty one."]}),s.jsxs("div",{className:"concept-analogy",style:{marginTop:"0.5rem"},children:[s.jsx(Qi,{style:{color:"#3b82f6"}}),s.jsx("span",{children:"Like parking – if spot 3 is taken, try spot 4, then 5..."})]})]})]})]}),s.jsx(Jn,{context:"Hash Table with Linear Probing"})]}),s.jsxs("div",{className:"visualizer-layout",children:[s.jsxs("div",{className:"control-panel",children:[s.jsx("h2",{children:"Operations"}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{children:"Insert Key-Value"}),s.jsxs("div",{className:"input-group",children:[s.jsx("input",{type:"text",value:m,onChange:j=>x(j.target.value),placeholder:"Key"}),s.jsx("input",{type:"text",value:k,onChange:j=>w(j.target.value),onKeyPress:j=>j.key==="Enter"&&q(),placeholder:"Value"}),s.jsx("button",{onClick:q,className:"btn btn-insert",children:"Insert"})]})]}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{children:"Delete Key"}),s.jsxs("div",{className:"input-group",children:[s.jsx("input",{type:"text",value:g,onChange:j=>d(j.target.value),onKeyPress:j=>j.key==="Enter"&&z(),placeholder:"Key"}),s.jsx("button",{onClick:z,className:"btn btn-delete",children:"Delete"})]})]}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{children:"Search Key"}),s.jsxs("div",{className:"input-group",children:[s.jsx("input",{type:"text",value:h,onChange:j=>v(j.target.value),onKeyPress:j=>j.key==="Enter"&&E(),placeholder:"Key"}),s.jsx("button",{onClick:E,className:"btn btn-search",children:"Search"})]})]}),s.jsx("div",{className:"operation-group",children:s.jsx("button",{onClick:T,className:"btn btn-clear",children:"Clear Table"})}),s.jsxs("div",{className:"info-panel",children:[s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Items"}),s.jsxs("span",{className:"info-value",children:[t,"/",i]})]}),s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Load"}),s.jsxs("span",{className:"info-value",style:{color:a>=.7?"#f59e0b":"inherit"},children:[(a*100).toFixed(0),"%"]})]}),s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Collisions"}),s.jsx("span",{className:"info-value",style:{color:o>0?"#f59e0b":"inherit"},children:o})]})]}),s.jsxs("div",{className:"rehash-info-box",children:[s.jsx(vd,{size:16}),s.jsxs("div",{children:[s.jsx("strong",{children:"Rehashing Threshold: 70%"}),s.jsx("p",{children:"In practice, hash tables rehash (double capacity) when load factor reaches ~0.7 to maintain O(1) performance."}),a>=.7?s.jsxs("span",{className:"rehash-warning",children:["Current load (",(a*100).toFixed(0),"%) exceeds threshold!"]}):s.jsxs("span",{className:"rehash-safe",children:["Currently safe (",(a*100).toFixed(0),"% < 70%)"]})]})]}),s.jsx(It,{message:p})]}),s.jsxs("div",{className:"visual-panel",children:[s.jsx("h2",{children:"Hash Table"}),m&&s.jsxs("div",{className:"hash-demo",children:[s.jsxs("div",{className:"hash-demo-item",children:[s.jsx("span",{className:"hash-demo-label",children:"Key:"}),s.jsxs("span",{className:"hash-demo-key",children:['"',m,'"']})]}),s.jsx(ve,{className:"hash-demo-arrow"}),s.jsx("div",{className:"hash-demo-item",children:s.jsx("span",{className:"hash-demo-label",children:"hash()"})}),s.jsx(ve,{className:"hash-demo-arrow"}),s.jsxs("div",{className:"hash-demo-item",children:[s.jsx("span",{className:"hash-demo-label",children:"Slot:"}),s.jsx("span",{className:"hash-demo-index",children:ue(m)})]})]}),S&&s.jsxs("div",{className:"collision-banner",children:[s.jsx(_i,{size:18}),s.jsxs("div",{children:[s.jsx("strong",{children:"Collision Detected!"}),s.jsxs("p",{children:['"',S.key,'" hashed to slot ',s.jsx("span",{className:"slot-badge original",children:S.originalSlot}),S.probedSlots.length>1&&s.jsxs(s.Fragment,{children:[" ","- Probed: ",S.probedSlots.map((j,L)=>s.jsxs("span",{children:[s.jsx("span",{className:`slot-badge ${L===S.probedSlots.length-1?"final":"probed"}`,children:j}),L<S.probedSlots.length-1&&" > "]},L))]})]})]})]}),s.jsx("div",{className:"ht-visual",children:!e||e.length===0?s.jsx("div",{className:"ht-empty",children:"Hash table is empty. Insert some key-value pairs!"}):s.jsx("div",{className:"ht-buckets",children:e.map((j,L)=>{const R=P.includes(L),F=S&&S.originalSlot===L,$=S&&S.finalSlot===L;return s.jsxs("div",{className:`ht-row ${j?"filled":"empty"} 
                        ${N===L?"highlighted":""} 
                        ${I&&j&&j[0]===I?"just-inserted":""}
                        ${R?"probed":""}
                        ${F?"original-hash":""}
                        ${$?"final-slot":""}`,children:[R&&s.jsx("div",{className:"probe-indicator",children:F?"X":$?"O":">"}),s.jsx("div",{className:`ht-key-box ${j?"has-key":""}`,children:j&&s.jsx("span",{className:"ht-key",children:j[0]})}),s.jsx("div",{className:"ht-arrow",children:j&&s.jsx(ve,{size:20})}),s.jsx("div",{className:`ht-index ${F?"collision-index":""}`,children:L}),s.jsx("div",{className:`ht-value-box ${j?"has-value":""}`,children:j?s.jsx("span",{className:"ht-value",children:j[1]}):s.jsx("span",{className:"ht-empty-slot",children:"—"})})]},L)})})}),s.jsxs("div",{className:"ht-legend",children:[s.jsxs("div",{className:"legend-item",children:[s.jsx("div",{className:"legend-color key-color"}),s.jsx("span",{children:"Key"})]}),s.jsxs("div",{className:"legend-item",children:[s.jsx("div",{className:"legend-color index-color"}),s.jsx("span",{children:"Index"})]}),s.jsxs("div",{className:"legend-item",children:[s.jsx("div",{className:"legend-color value-color"}),s.jsx("span",{children:"Value"})]}),P.length>0&&s.jsxs("div",{className:"legend-item",children:[s.jsx("div",{className:"legend-color probe-color"}),s.jsx("span",{children:"Probing Path"})]})]})]})]}),s.jsx(et,{dataStructure:"hashtable"})]})}const av={title:"What is Chaining?",description:"Chaining handles collisions by storing multiple key-value pairs in a linked list at each slot.",codeExample:"slot[hash] → [key1, val1] → [key2, val2] → ...",analogy:"Like a coat rack - multiple coats can hang on the same hook!"},ov={title:"Chaining vs Probing",chaining:{label:"Chaining:",color:"#22c55e",points:["Uses linked lists","Load factor can exceed 1.0"]},probing:{label:"Probing:",color:"#f59e0b",points:["Finds next empty slot","Load factor must stay below 1.0"]},summary:"Chaining is simpler and handles high load factors better, but uses extra memory for pointers."},uv={title:"Chaining Advantage",description:"With chaining, load factor can exceed 1.0 because each slot can hold multiple items in a chain.",highLoadThreshold:1.5,highLoadMessage:"High load ({loadFactor}) - chains getting long!",safeMessage:"Load factor: {loadFactor}"},cv={title:"Rehash Table",description:"Doubles the table capacity and redistributes all items to reduce chain lengths.",buttonText:"Rehash",recommendThreshold:1.5},dv=[{type:"color",className:"key-color",label:"Key"},{type:"color",className:"index-color",label:"Index"},{type:"color",className:"value-color",label:"Value"},{type:"icon",icon:"Link",color:"#8b5cf6",label:"Chain (Linked List)"}],hv={insert:{label:"Insert Key-Value",keyPlaceholder:"Key",valuePlaceholder:"Value",buttonText:"Insert"},delete:{label:"Delete Key",placeholder:"Key",buttonText:"Delete"},search:{label:"Search Key",placeholder:"Key",buttonText:"Search"},clear:{buttonText:"Clear Table"},rehash:{buttonText:"Rehash"}},fv={items:"Items",capacity:"Capacity",load:"Load",collisions:"Collisions"},pv={emptyTable:"Hash table is empty. Insert some key-value pairs!",insertSuccess:'Inserted "{key}" at slot {index}',insertUpdated:'Updated "{key}" at slot {index}',insertCollision:'Collision! Added "{key}" to chain at slot {index}',deleteSuccess:'Deleted "{key}"',searchFound:'Found: "{key}" = {value}',searchNotFound:'Key "{key}" not found',clearSuccess:"Hashtable cleared!",rehashSuccess:"Rehashed! Capacity: {oldCapacity} -> {newCapacity}",rehashEmpty:"Nothing to rehash - table is empty!",errorNoKey:"Please enter a key!",errorNoKeyValue:"Please enter both key and value!",errorInsert:"Error inserting. Is Flask running?",errorDelete:"Error deleting. Is Flask running?",errorSearch:"Error searching item",errorClear:"Error clearing hashtable",errorRehash:"Error rehashing. Is Flask running?"},D={concept:av,comparison:ov,chainingAdvantage:uv,rehash:cv,legend:dv,operations:hv,infoLabels:fv,messages:pv};function mv(){const[e,n]=y.useState([]),[t,r]=y.useState(0),[i,l]=y.useState(0),[a,u]=y.useState(0),[o,c]=y.useState(0),{message:p,showMessage:f}=Ot(3e3),[m,x]=y.useState(""),[k,w]=y.useState(""),[g,d]=y.useState(""),[h,v]=y.useState(""),[N,_]=y.useState(null),[P,b]=y.useState(null),[I,M]=y.useState(!1);y.useEffect(()=>{S()},[]);const S=async()=>{try{const z=await Qe("/api/hashtable_chaining");n(z.table||[]),r(z.size||0),l(z.capacity||0),u(z.load_factor||0),c(z.collision_count||0)}catch(z){console.error("Error loading hashtable:",z)}},A=z=>{if(!i||i===0)return 0;let E=0;for(let T=0;T<z.length;T++)E=(E*31+z.charCodeAt(T))%i;return E},oe=async()=>{if(!m.trim()||!k.trim()){f(D.messages.errorNoKeyValue,"error");return}try{const z=await te("/api/hashtable_chaining/insert",{key:m.trim(),value:k.trim()});if(z.error){f(z.error,"error");return}await S(),b(m.trim()),z.updated?f(D.messages.insertUpdated.replace("{key}",m).replace("{index}",z.index),"info"):z.collision?f(D.messages.insertCollision.replace("{key}",m).replace("{index}",z.index),"warning"):f(D.messages.insertSuccess.replace("{key}",m).replace("{index}",z.index),"success"),_(z.index),setTimeout(()=>{_(null),b(null)},3e3),x(""),w("")}catch{f(D.messages.errorInsert,"error")}},ue=async()=>{if(!g.trim()){f(D.messages.errorNoKey,"error");return}try{const z=await te("/api/hashtable_chaining/delete",{key:g.trim()});if(z.error){f(z.error,"error");return}await S(),f(D.messages.deleteSuccess.replace("{key}",g),"success"),d("")}catch{f(D.messages.errorDelete,"error")}},Ce=async()=>{if(!h.trim()){f(D.messages.errorNoKey,"error");return}try{const z=await Qe(`/api/hashtable_chaining/get?key=${encodeURIComponent(h.trim())}`);if(z.error){f(z.error,"error");return}z.found?f(D.messages.searchFound.replace("{key}",h).replace("{value}",z.value),"success"):f(D.messages.searchNotFound.replace("{key}",h),"error"),v("")}catch{f(D.messages.errorSearch,"error")}},q=async()=>{try{await te("/api/hashtable_chaining/clear",{}),await S(),_(null),b(null),f(D.messages.clearSuccess,"success")}catch{f(D.messages.errorClear,"error")}};return s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"intro-layout",children:[s.jsxs("div",{className:"intro-left",children:[s.jsxs("div",{className:"concept-box",children:[s.jsxs("div",{className:"concept-header",children:[s.jsx(On,{className:"icon-sm"}),s.jsx("span",{children:D.concept.title})]}),s.jsxs("div",{className:"concept-content",children:[s.jsxs("p",{children:[s.jsx("strong",{children:"Chaining"})," ",D.concept.description.replace("Chaining ","")]}),s.jsx("div",{style:{background:"var(--bg-tertiary)",padding:"0.75rem",borderRadius:"8px",marginTop:"0.5rem",fontFamily:"monospace",fontSize:"0.9rem"},children:s.jsx("div",{children:D.concept.codeExample})}),s.jsxs("div",{className:"concept-analogy",style:{marginTop:"0.75rem"},children:[s.jsx(cn,{}),s.jsx("span",{children:D.concept.analogy})]})]})]}),s.jsxs("div",{className:"concept-box",style:{marginTop:"1rem"},children:[s.jsxs("div",{className:"concept-header",children:[s.jsx(Qi,{className:"icon-sm",style:{color:"#3b82f6"}}),s.jsx("span",{children:D.comparison.title})]}),s.jsxs("div",{className:"concept-content",children:[s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",fontSize:"0.85rem"},children:[s.jsxs("div",{children:[s.jsx("strong",{style:{color:D.comparison.chaining.color},children:D.comparison.chaining.label}),D.comparison.chaining.points.map((z,E)=>s.jsx("div",{style:{marginTop:"0.25rem"},children:z},E))]}),s.jsxs("div",{children:[s.jsx("strong",{style:{color:D.comparison.probing.color},children:D.comparison.probing.label}),D.comparison.probing.points.map((z,E)=>s.jsx("div",{style:{marginTop:"0.25rem"},children:z},E))]})]}),s.jsx("p",{style:{marginTop:"0.75rem",fontSize:"0.85rem"},children:D.comparison.summary})]})]})]}),s.jsx(Jn,{context:"Hash Table with Chaining"})]}),s.jsxs("div",{className:"visualizer-layout",children:[s.jsxs("div",{className:"control-panel",children:[s.jsx("h2",{children:"Operations"}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{children:D.operations.insert.label}),s.jsxs("div",{className:"input-group",children:[s.jsx("input",{type:"text",value:m,onChange:z=>x(z.target.value),placeholder:D.operations.insert.keyPlaceholder}),s.jsx("input",{type:"text",value:k,onChange:z=>w(z.target.value),onKeyDown:z=>z.key==="Enter"&&oe(),placeholder:D.operations.insert.valuePlaceholder}),s.jsx("button",{onClick:oe,className:"btn btn-insert",children:D.operations.insert.buttonText})]})]}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{children:D.operations.delete.label}),s.jsxs("div",{className:"input-group",children:[s.jsx("input",{type:"text",value:g,onChange:z=>d(z.target.value),onKeyDown:z=>z.key==="Enter"&&ue(),placeholder:D.operations.delete.placeholder}),s.jsx("button",{onClick:ue,className:"btn btn-delete",children:D.operations.delete.buttonText})]})]}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{children:D.operations.search.label}),s.jsxs("div",{className:"input-group",children:[s.jsx("input",{type:"text",value:h,onChange:z=>v(z.target.value),onKeyDown:z=>z.key==="Enter"&&Ce(),placeholder:D.operations.search.placeholder}),s.jsx("button",{onClick:Ce,className:"btn btn-search",children:D.operations.search.buttonText})]})]}),s.jsx("div",{className:"operation-group",style:{display:"flex",gap:"0.5rem"},children:s.jsx("button",{onClick:q,className:"btn btn-clear",children:D.operations.clear.buttonText})}),s.jsxs("div",{className:"info-panel",children:[s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:D.infoLabels.items}),s.jsx("span",{className:"info-value",children:t})]}),s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:D.infoLabels.capacity}),s.jsx("span",{className:"info-value",children:i})]}),s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:D.infoLabels.load}),s.jsx("span",{className:"info-value",style:{color:a>=1?"#f59e0b":"inherit"},children:a.toFixed(2)})]}),s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:D.infoLabels.collisions}),s.jsx("span",{className:"info-value",style:{color:o>0?"#f59e0b":"inherit"},children:o})]})]}),s.jsxs("div",{className:"rehash-info-box",children:[s.jsx(wl,{size:16}),s.jsxs("div",{children:[s.jsx("strong",{children:D.chainingAdvantage.title}),s.jsx("p",{children:D.chainingAdvantage.description}),a>=D.chainingAdvantage.highLoadThreshold?s.jsxs("div",{className:"rehash-recommend",children:[s.jsx(Em,{size:14}),s.jsx("span",{className:"rehash-warning",children:D.chainingAdvantage.highLoadMessage.replace("{loadFactor}",a.toFixed(2))})]}):s.jsx("span",{className:"rehash-safe",children:D.chainingAdvantage.safeMessage.replace("{loadFactor}",a.toFixed(2))})]})]}),s.jsx(It,{message:p})]}),s.jsxs("div",{className:"visual-panel",children:[s.jsx("h2",{children:"Hash Table (Chaining)"}),m&&s.jsxs("div",{className:"hash-demo",children:[s.jsxs("div",{className:"hash-demo-item",children:[s.jsx("span",{className:"hash-demo-label",children:"Key:"}),s.jsxs("span",{className:"hash-demo-key",children:['"',m,'"']})]}),s.jsx(ve,{className:"hash-demo-arrow"}),s.jsx("div",{className:"hash-demo-item",children:s.jsx("span",{className:"hash-demo-label",children:"hash()"})}),s.jsx(ve,{className:"hash-demo-arrow"}),s.jsxs("div",{className:"hash-demo-item",children:[s.jsx("span",{className:"hash-demo-label",children:"Slot:"}),s.jsx("span",{className:"hash-demo-index",children:A(m)})]})]}),s.jsx("div",{className:"ht-chaining-visual",children:!e||e.length===0?s.jsx("div",{className:"ht-empty",children:D.messages.emptyTable}):s.jsx("div",{className:"ht-chaining-buckets",children:e.map((z,E)=>{const T=N===E,j=z&&Array.isArray(z)&&z.length>0,L=j?z.length:0;return s.jsxs("div",{className:`ht-chaining-row ${j?"filled":"empty"} ${T?"highlighted":""}`,children:[s.jsxs("div",{className:"ht-chaining-index",children:[s.jsx("span",{className:"index-number",children:E}),L>1&&s.jsx("span",{className:"chain-count",children:L})]}),s.jsx("div",{className:"ht-chaining-arrow-container",children:s.jsx(ve,{size:18,className:"bucket-arrow"})}),s.jsx("div",{className:"ht-chaining-content",children:j?s.jsx("div",{className:"ht-chaining-chain",children:z.map((R,F)=>{const $=P&&R.key===P;return s.jsxs(bi.Fragment,{children:[s.jsxs("div",{className:`ht-chaining-node ${$?"just-inserted":""} ${F>0?"collision-node":""}`,children:[s.jsx("div",{className:"node-key",children:R.key}),s.jsx("div",{className:"node-separator"}),s.jsx("div",{className:"node-value",children:R.value})]}),F<z.length-1&&s.jsx("div",{className:"chain-link",children:s.jsx(ve,{size:16})})]},F)})}):s.jsx("div",{className:"ht-chaining-empty-slot",children:s.jsx("span",{children:"Empty"})})})]},E)})})}),s.jsx("div",{className:"ht-legend",children:D.legend.map((z,E)=>s.jsxs("div",{className:"legend-item",children:[z.type==="color"?s.jsx("div",{className:`legend-color ${z.className}`}):s.jsx(wl,{size:14,style:{color:z.color}}),s.jsx("span",{children:z.label})]},E))})]})]}),s.jsx(et,{dataStructure:"hashtableChaining"})]})}function vv(){const[e,n]=y.useState([]),[t,r]=y.useState(0),[i,l]=y.useState(0),[a,u]=y.useState(0),{message:o,showMessage:c}=Ot(3e3),[p,f]=y.useState(""),[m,x]=y.useState(""),[k,w]=y.useState(""),[g,d]=y.useState(""),[h,v]=y.useState(null),[N,_]=y.useState([]),[P,b]=y.useState(null),[I,M]=y.useState(null);y.useEffect(()=>{S()},[]);const S=async()=>{try{const E=await Qe("/api/hashtable_quadratic");n(E.table||[]),r(E.size||0),l(E.capacity||0),u(E.load_factor||0)}catch(E){console.error("Error loading hashtable:",E)}},A=E=>{if(!i||i===0)return 0;let T=0;for(let j=0;j<E.length;j++)T=(T*31+E.charCodeAt(j))%i;return T},oe=(E,T)=>{var R;const j=A(E),L=[];for(let F=0;F<i;F++){const $=(j+F*F)%i;if(L.push({index:$,i:F,formula:`(${j} + ${F}²) % ${i} = ${$}`}),!T[$]||T[$][0]===E)break}return{originalHash:j,path:L,finalSlot:(R=L[L.length-1])==null?void 0:R.index}},ue=async()=>{if(!p.trim()||!m.trim()){c("Please enter both key and value!","error");return}const E=i>0?A(p.trim()):0,T=e.length>0&&e[E]&&e[E]!=="DELETED"&&e[E][0]!==p.trim();let j=null;T&&(j=oe(p.trim(),e));try{const L=await te("/api/hashtable_quadratic/insert",{key:p.trim(),value:m.trim()});if(L.error){c(L.error,"error");return}await S(),b(p.trim()),T&&j?(M({key:p.trim(),originalSlot:j.originalHash,probedSlots:j.path,finalSlot:L.final_index}),_(j.path.map(R=>R.index)),c(`Collision! Quadratic probing: ${j.path.length} probe(s)`,"warning"),setTimeout(()=>{_([]),M(null)},5e3)):(c(`Inserted "${p}" → slot ${E}`,"success"),v(E),setTimeout(()=>v(null),2e3)),f(""),x(""),setTimeout(()=>b(null),3e3)}catch{c("Error inserting. Is Flask running?","error")}},Ce=async()=>{if(!k.trim()){c("Please enter a key!","error");return}try{const E=await te("/api/hashtable_quadratic/delete",{key:k.trim()});if(E.error){c(E.error,"error");return}await S(),c(`Deleted "${k}"`,"success"),w("")}catch{c("Error deleting. Is Flask running?","error")}},q=async()=>{if(!g.trim()){c("Please enter a key!","error");return}try{const E=await Qe(`/api/hashtable_quadratic/get?key=${encodeURIComponent(g.trim())}`);if(E.error){c(E.error,"error");return}E.found?c(`Found: "${g}" = ${E.value}`,"success"):c(`Key "${g}" not found`,"error"),d("")}catch{c("Error searching item","error")}},z=async()=>{try{await te("/api/hashtable_quadratic/clear",{}),await S(),_([]),M(null),c("Hashtable cleared!","success")}catch{c("Error clearing hashtable","error")}};return s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"intro-layout",children:[s.jsxs("div",{className:"intro-left",children:[s.jsxs("div",{className:"concept-box",children:[s.jsxs("div",{className:"concept-header",children:[s.jsx(On,{className:"icon-sm"}),s.jsx("span",{children:"What is Quadratic Probing?"})]}),s.jsxs("div",{className:"concept-content",children:[s.jsxs("p",{children:[s.jsx("strong",{children:"Quadratic Probing"})," is a collision resolution technique where we probe at quadratically increasing intervals."]}),s.jsxs("div",{style:{background:"var(--bg-tertiary)",padding:"0.75rem",borderRadius:"8px",marginTop:"0.5rem",fontFamily:"monospace",fontSize:"0.9rem"},children:[s.jsx("div",{children:"probe(i) = (hash + i²) % capacity"}),s.jsx("div",{style:{color:"var(--text-muted)",marginTop:"0.25rem"},children:"i = 0, 1, 4, 9, 16, 25..."})]}),s.jsxs("div",{className:"concept-analogy",style:{marginTop:"0.75rem"},children:[s.jsx(cn,{}),s.jsxs("span",{children:["Unlike linear probing, we jump further each time – reducing ",s.jsx("strong",{children:"clustering"}),"!"]})]})]})]}),s.jsxs("div",{className:"concept-box",style:{marginTop:"1rem"},children:[s.jsxs("div",{className:"concept-header",children:[s.jsx(Qi,{className:"icon-sm",style:{color:"#3b82f6"}}),s.jsx("span",{children:"Linear vs Quadratic"})]}),s.jsxs("div",{className:"concept-content",children:[s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",fontSize:"0.85rem"},children:[s.jsxs("div",{children:[s.jsx("strong",{style:{color:"#f59e0b"},children:"Linear:"}),s.jsx("div",{style:{fontFamily:"monospace",marginTop:"0.25rem"},children:"+1, +2, +3, +4..."})]}),s.jsxs("div",{children:[s.jsx("strong",{style:{color:"#22c55e"},children:"Quadratic:"}),s.jsx("div",{style:{fontFamily:"monospace",marginTop:"0.25rem"},children:"+1, +4, +9, +16..."})]})]}),s.jsx("p",{style:{marginTop:"0.75rem",fontSize:"0.85rem"},children:"Quadratic probing spreads entries more evenly but may not find empty slots if table is over 50% full."})]})]})]}),s.jsx(Jn,{context:"Hash Table with Quadratic Probing"})]}),s.jsxs("div",{className:"visualizer-layout",children:[s.jsxs("div",{className:"control-panel",children:[s.jsx("h2",{children:"Operations"}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{children:"Insert Key-Value"}),s.jsxs("div",{className:"input-group",children:[s.jsx("input",{type:"text",value:p,onChange:E=>f(E.target.value),placeholder:"Key"}),s.jsx("input",{type:"text",value:m,onChange:E=>x(E.target.value),onKeyPress:E=>E.key==="Enter"&&ue(),placeholder:"Value"}),s.jsx("button",{onClick:ue,className:"btn btn-insert",children:"Insert"})]})]}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{children:"Delete Key"}),s.jsxs("div",{className:"input-group",children:[s.jsx("input",{type:"text",value:k,onChange:E=>w(E.target.value),onKeyPress:E=>E.key==="Enter"&&Ce(),placeholder:"Key"}),s.jsx("button",{onClick:Ce,className:"btn btn-delete",children:"Delete"})]})]}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{children:"Search Key"}),s.jsxs("div",{className:"input-group",children:[s.jsx("input",{type:"text",value:g,onChange:E=>d(E.target.value),onKeyPress:E=>E.key==="Enter"&&q(),placeholder:"Key"}),s.jsx("button",{onClick:q,className:"btn btn-search",children:"Search"})]})]}),s.jsx("div",{className:"operation-group",children:s.jsx("button",{onClick:z,className:"btn btn-clear",children:"Clear Table"})}),s.jsxs("div",{className:"info-panel",children:[s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Items"}),s.jsxs("span",{className:"info-value",children:[t,"/",i]})]}),s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Load"}),s.jsxs("span",{className:"info-value",style:{color:a>=.5?"#f59e0b":"inherit"},children:[(a*100).toFixed(0),"%"]})]})]}),s.jsxs("div",{className:"rehash-info-box",children:[s.jsx(vd,{size:16}),s.jsxs("div",{children:[s.jsx("strong",{children:"Rehashing Threshold: 50%"}),s.jsx("p",{children:"Quadratic probing requires lower load factor (~0.5) to guarantee finding empty slots."}),a>=.5?s.jsxs("span",{className:"rehash-warning",children:["Load (",(a*100).toFixed(0),"%) at threshold!"]}):s.jsxs("span",{className:"rehash-safe",children:["Currently safe (",(a*100).toFixed(0),"% < 50%)"]})]})]}),s.jsx(It,{message:o})]}),s.jsxs("div",{className:"visual-panel",children:[s.jsx("h2",{children:"Hash Table (Quadratic Probing)"}),p&&s.jsxs("div",{className:"hash-demo",children:[s.jsxs("div",{className:"hash-demo-item",children:[s.jsx("span",{className:"hash-demo-label",children:"Key:"}),s.jsxs("span",{className:"hash-demo-key",children:['"',p,'"']})]}),s.jsx(ve,{className:"hash-demo-arrow"}),s.jsx("div",{className:"hash-demo-item",children:s.jsx("span",{className:"hash-demo-label",children:"hash()"})}),s.jsx(ve,{className:"hash-demo-arrow"}),s.jsxs("div",{className:"hash-demo-item",children:[s.jsx("span",{className:"hash-demo-label",children:"Slot:"}),s.jsx("span",{className:"hash-demo-index",children:A(p)})]})]}),I&&s.jsxs("div",{className:"collision-banner",children:[s.jsx(_i,{size:18}),s.jsxs("div",{children:[s.jsx("strong",{children:"Quadratic Probing!"}),s.jsxs("p",{children:['"',I.key,'" hashed to slot ',s.jsx("span",{className:"slot-badge original",children:I.originalSlot})]}),s.jsx("div",{style:{marginTop:"0.5rem",fontSize:"0.8rem",fontFamily:"monospace"},children:I.probedSlots.map((E,T)=>s.jsxs("div",{style:{marginBottom:"0.25rem"},children:["i=",E.i,": ",E.formula,T===I.probedSlots.length-1&&s.jsx("span",{style:{color:"#4ade80"},children:" [FOUND]"})]},T))})]})]}),s.jsx("div",{className:"ht-visual",children:!e||e.length===0?s.jsx("div",{className:"ht-empty",children:"Hash table is empty. Insert some key-value pairs!"}):s.jsx("div",{className:"ht-buckets",children:e.map((E,T)=>{const j=N.includes(T),L=I&&I.originalSlot===T,R=I&&I.finalSlot===T,F=E==="DELETED",$=E&&E!=="DELETED";return s.jsxs("div",{className:`ht-row ${$?"filled":"empty"} 
                        ${F?"deleted":""}
                        ${h===T?"highlighted":""} 
                        ${P&&$&&E[0]===P?"just-inserted":""}
                        ${j?"probed":""}
                        ${L?"original-hash":""}
                        ${R?"final-slot":""}`,children:[j&&s.jsx("div",{className:"probe-indicator",children:L?"X":R?"O":">"}),s.jsxs("div",{className:`ht-key-box ${$?"has-key":""} ${F?"deleted-slot":""}`,children:[$&&s.jsx("span",{className:"ht-key",children:E[0]}),F&&s.jsx("span",{className:"ht-deleted-text",children:"DEL"})]}),s.jsx("div",{className:"ht-arrow",children:$&&s.jsx(ve,{size:20})}),s.jsx("div",{className:`ht-index ${L?"collision-index":""}`,children:T}),s.jsx("div",{className:`ht-value-box ${$?"has-value":""} ${F?"deleted-slot":""}`,children:$?s.jsx("span",{className:"ht-value",children:E[1]}):F?s.jsx("span",{className:"ht-deleted-text",children:"DELETED"}):s.jsx("span",{className:"ht-empty-slot",children:"—"})})]},T)})})}),s.jsxs("div",{className:"ht-legend",children:[s.jsxs("div",{className:"legend-item",children:[s.jsx("div",{className:"legend-color key-color"}),s.jsx("span",{children:"Key"})]}),s.jsxs("div",{className:"legend-item",children:[s.jsx("div",{className:"legend-color index-color"}),s.jsx("span",{children:"Index"})]}),s.jsxs("div",{className:"legend-item",children:[s.jsx("div",{className:"legend-color value-color"}),s.jsx("span",{children:"Value"})]}),N.length>0&&s.jsxs("div",{className:"legend-item",children:[s.jsx("div",{className:"legend-color probe-color"}),s.jsx("span",{children:"Probe Path"})]})]})]})]}),s.jsx(et,{dataStructure:"hashtable"})]})}const pt=20,yv={inorder:{name:"Inorder Traversal",order:"Left → Root → Right",description:"Visit left subtree, process root, then visit right subtree. For BST, this produces sorted order.",useCase:["Get sorted elements","Validate BST","Create mirror image"],complexity:{time:"O(n)",space:"O(h)"}},preorder:{name:"Preorder Traversal",order:"Root → Left → Right",description:"Process root first, then recursively visit left and right subtrees. Useful for copying trees.",useCase:["Copy tree structure","Serialize/deserialize","Prefix expressions"],complexity:{time:"O(n)",space:"O(h)"}},postorder:{name:"Postorder Traversal",order:"Left → Right → Root",description:"Visit left subtree, right subtree, then process root. Essential for deleting nodes safely.",useCase:["Delete nodes safely","Calculate folder sizes","Postfix expressions"],complexity:{time:"O(n)",space:"O(h)"}},levelorder:{name:"Level Order Traversal",order:"Level by Level (BFS)",description:"Visit nodes level by level using a queue. Perfect for finding shortest paths.",useCase:["Shortest path","Level-wise printing","Nodes at distance K"],complexity:{time:"O(n)",space:"O(w)"}}},jl=(e,n=[])=>(e&&(jl(e.left,n),n.push(e.data),jl(e.right,n)),n),Nl=(e,n=[])=>(e&&(n.push(e.data),Nl(e.left,n),Nl(e.right,n)),n),Sl=(e,n=[])=>(e&&(Sl(e.left,n),Sl(e.right,n),n.push(e.data)),n),gv=e=>{if(!e)return[];const n=[],t=[e];for(;t.length;){const r=t.shift();n.push(r.data),r.left&&t.push(r.left),r.right&&t.push(r.right)}return n},Tl=(e,n=0)=>e?Math.max(Tl(e.left,n+1),Tl(e.right,n+1)):n-1;function xv(){return s.jsxs("div",{className:"intro-left",children:[s.jsxs("div",{className:"concept-box",children:[s.jsxs("div",{className:"concept-header",children:[s.jsx(On,{className:"icon-sm"}),s.jsx("span",{children:"What is a Binary Tree?"})]}),s.jsxs("div",{className:"concept-content",children:[s.jsxs("p",{children:["A ",s.jsx("strong",{children:"Binary Tree"})," is a hierarchical data structure where each node has at most ",s.jsx("strong",{children:"two children"}),": left and right."]}),s.jsxs("div",{className:"concept-analogy",children:[s.jsx(cn,{}),s.jsxs("span",{children:["Think of a ",s.jsx("strong",{children:"family tree"})," – each person can have up to two children!"]})]}),s.jsxs("div",{className:"concept-key-terms",children:[s.jsx("h4",{children:"Key Terms:"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Node:"})," Contains data and links to children"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Root:"})," The topmost node (no parent)"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Leaf:"})," A node with no children"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Height:"})," Longest path from root to leaf"]})]})]})]})]}),s.jsxs("div",{className:"concept-box",style:{marginTop:"1rem"},children:[s.jsxs("div",{className:"concept-header",children:[s.jsx(Qi,{className:"icon-sm"}),s.jsx("span",{children:"What are Tree Traversals?"})]}),s.jsxs("div",{className:"concept-content",children:[s.jsxs("p",{children:[s.jsx("strong",{children:"Tree Traversal"})," is visiting each node ",s.jsx("strong",{children:"exactly once"})," in a specific order."]}),s.jsxs("div",{className:"concept-why-traverse",children:[s.jsx("h4",{children:"Why Traverse?"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Search:"})," Find specific data"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Copy:"})," Duplicate the tree"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Evaluate:"})," Calculate expressions"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Delete:"})," Remove nodes properly"]})]})]}),s.jsxs("div",{className:"concept-analogy",style:{marginTop:"0.75rem"},children:[s.jsx(cn,{}),s.jsx("span",{children:"Like reading a book – you can read in different orders based on your needs!"})]})]})]})]})}function kv({insertValue:e,deleteValue:n,size:t,height:r,message:i,tree:l,isAnimating:a,visitedNodes:u,onInsertValueChange:o,onDeleteValueChange:c,onInsert:p,onDelete:f,onTraversal:m,onClear:x,onResetTraversal:k}){const w=(g,d)=>{const h=g.target.value;(h===""||h==="-"||/^-?\d*\.?\d*$/.test(h))&&d(h)};return s.jsxs("div",{className:"control-panel",children:[s.jsx("h2",{children:"Binary Tree Traversals"}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{htmlFor:"insertValue",children:"Insert Node"}),s.jsxs("div",{className:"input-group",children:[s.jsx("input",{type:"number",id:"insertValue",value:e,onChange:g=>w(g,o),onKeyPress:g=>g.key==="Enter"&&p(),placeholder:"Enter a number"}),s.jsx("button",{onClick:p,className:"btn btn-insert",children:"Insert"})]})]}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{htmlFor:"deleteValue",children:"Delete Node"}),s.jsxs("div",{className:"input-group",children:[s.jsx("input",{type:"number",id:"deleteValue",value:n,onChange:g=>w(g,c),onKeyPress:g=>g.key==="Enter"&&f(),placeholder:"Enter a number"}),s.jsx("button",{onClick:f,className:"btn btn-delete",children:"Delete"})]})]}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{children:"Traversals"}),s.jsx("div",{className:"btn-group",children:["inorder","preorder","postorder","levelorder"].map(g=>s.jsx("button",{onClick:()=>m(g),className:"btn btn-traversal",disabled:a||!l,children:g==="levelorder"?"Level Order":g.charAt(0).toUpperCase()+g.slice(1)},g))}),u.length>0&&!a&&s.jsx("button",{onClick:k,className:"btn btn-secondary",style:{marginTop:"0.5rem",width:"100%"},children:"Reset Colors"})]}),s.jsxs("div",{className:"traversal-legend",children:[s.jsxs("div",{className:"legend-item",children:[s.jsx("span",{className:"legend-dot legend-dot--default"}),s.jsx("span",{children:"Not visited"})]}),s.jsxs("div",{className:"legend-item",children:[s.jsx("span",{className:"legend-dot legend-dot--visiting"}),s.jsx("span",{children:"Visiting"})]}),s.jsxs("div",{className:"legend-item",children:[s.jsx("span",{className:"legend-dot legend-dot--visited"}),s.jsx("span",{children:"Visited"})]})]}),s.jsxs("div",{className:"info-panel",children:[s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Size:"}),s.jsx("span",{className:"info-value",children:t})]}),s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Height:"}),s.jsx("span",{className:"info-value",children:r})]}),s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Max Size:"}),s.jsx("span",{className:"info-value",children:pt})]})]}),t>=pt*.8&&t<pt&&s.jsxs("div",{className:"warning-box",children:[s.jsx(_i,{size:18}),s.jsxs("div",{children:[s.jsx("strong",{children:"Tree is filling up!"})," You're at ",t,"/",pt," nodes."]})]}),s.jsx("div",{className:"operation-group",children:s.jsx("button",{onClick:x,className:"btn btn-clear",children:"Clear Tree"})}),i&&s.jsx("div",{className:`message message-${i.includes("Error")||i.includes("error")?"error":/success|complete|Inserted|Deleted|cleared/i.test(i)?"success":i.includes("full")?"warning":"info"}`,children:i})]})}function wv({tree:e,currentNode:n,visitedNodes:t}){const r=o=>{const c=n===o,p=t.includes(o);return{color:c?"#f59e0b":p?"#10b981":"#6366f1",glow:c?"drop-shadow(0 0 12px #f59e0b) drop-shadow(0 0 20px #f59e0b)":p?"drop-shadow(0 0 6px #10b981)":"none",radius:c?30:25,stroke:c?3:2,fontSize:c?16:14,fontWeight:c?"bold":"normal"}},i=(o,c,p,f,m)=>{if(!o)return[];const x=Math.pow(2,m-f)*50,k=r(o.data),w=[];return o.left&&(w.push(s.jsx("line",{x1:c,y1:p,x2:c-x,y2:p+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:"2"},`l-${o.data}-l`)),w.push(...i(o.left,c-x,p+100,f+1,m))),o.right&&(w.push(s.jsx("line",{x1:c,y1:p,x2:c+x,y2:p+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:"2"},`l-${o.data}-r`)),w.push(...i(o.right,c+x,p+100,f+1,m))),w.push(s.jsxs("g",{style:{filter:k.glow,transition:"all 0.3s ease"},children:[s.jsx("circle",{cx:c,cy:p,r:k.radius,fill:k.color,stroke:"white",strokeWidth:k.stroke,style:{transition:"all 0.3s ease"}}),s.jsx("text",{x:c,y:p,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:k.fontSize,fontWeight:k.fontWeight,children:o.data})]},`n-${o.data}-${c}`)),w};if(!e)return s.jsx("div",{className:"tree-empty",children:"Tree is empty. Insert some nodes!"});const l=Tl(e),a=(l+1)*100+50,u=Math.max(800,Math.pow(2,Math.max(l,1))*80);return s.jsx("svg",{width:u,height:a,className:"tree-svg",children:i(e,u/2,50,0,l)})}function jv({traversalType:e,traversalResult:n,isAnimating:t,traversalComplete:r}){if(!e||n.length===0&&!t)return null;const i=yv[e];return s.jsxs("div",{className:"traversal-output-panel",children:[s.jsxs("div",{style:{marginBottom:"1rem"},children:[s.jsxs("h3",{className:"traversal-title",children:[i==null?void 0:i.name,t&&s.jsx("span",{className:"traversal-badge traversal-badge--running",children:"Running..."}),r&&s.jsx("span",{className:"traversal-badge traversal-badge--complete",children:"Complete"})]}),s.jsxs("p",{className:"traversal-order",children:[s.jsx("strong",{children:"Order:"})," ",i==null?void 0:i.order]}),s.jsx("p",{className:"traversal-description",children:i==null?void 0:i.description})]}),s.jsxs("div",{className:"traversal-output-box",children:[s.jsx("div",{className:"traversal-output-label",children:"Output Sequence:"}),s.jsx("div",{className:"traversal-sequence-container",children:n.length===0&&t?s.jsx("span",{style:{color:"var(--text-muted)",fontStyle:"italic"},children:"Traversing..."}):n.map((l,a)=>s.jsx("span",{className:`traversal-node ${a===n.length-1&&!r?"traversal-node--current":"traversal-node--complete"}`,children:l},a))})]}),r&&n.length>0&&s.jsxs("div",{className:"traversal-array-section",children:[s.jsx("div",{className:"traversal-array-label",children:"Array Output:"}),s.jsxs("code",{className:"traversal-array-output",children:["[",n.join(", "),"]"]}),s.jsxs("p",{className:"traversal-use-case",children:["Use case: ",i==null?void 0:i.useCase.join(" • ")]}),s.jsxs("div",{className:"traversal-complexity",children:[s.jsx("strong",{children:"Time:"})," ",s.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.time})," (visits each node once)",s.jsx("br",{}),s.jsx("strong",{children:"Space:"})," ",s.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.space})," (recursion stack/queue)"]})]})]})}function Nv(){const[e,n]=y.useState(null),[t,r]=y.useState(0),[i,l]=y.useState(-1),[a,u]=y.useState(""),[o,c]=y.useState(""),[p,f]=y.useState(""),[m,x]=y.useState([]),[k,w]=y.useState(!1),[g,d]=y.useState(null),[h,v]=y.useState([]),[N,_]=y.useState(null),[P,b]=y.useState(!1);y.useEffect(()=>{I()},[]);const I=async()=>{try{const z=await(await fetch("/api/binarytree")).json();n(z.tree),r(z.size||0),l(z.height!==void 0?z.height:-1)}catch(q){console.error("Error loading tree:",q)}},M=q=>{f(q),setTimeout(()=>f(""),3e3)},S=async()=>{if(!a.trim()){M("Please enter a number!");return}const q=Number(a);if(isNaN(q)){M("Please enter a valid number!");return}if(t>=pt){M(`Tree is full! Maximum size is ${pt} nodes.`);return}try{const E=await(await fetch("/api/binarytree/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:q})})).json();if(E.error){M(E.error);return}n(E.tree),r(E.size||0),l(E.height!==void 0?E.height:-1),M(`Inserted ${q}`),u("")}catch{M("Error inserting node")}},A=async()=>{if(!o.trim()){M("Please enter a number!");return}const q=Number(o);if(isNaN(q)){M("Please enter a valid number!");return}try{const E=await(await fetch("/api/binarytree/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:q})})).json();if(E.error){M(E.error);return}n(E.tree),r(E.size||0),l(E.height!==void 0?E.height:-1),M(`Deleted ${q}`),c("")}catch{M("Error deleting node")}},oe=async()=>{try{await fetch("/api/binarytree/clear",{method:"POST"}),n(null),r(0),l(-1),Ce(),M("Tree cleared!")}catch{M("Error clearing tree")}},ue=async q=>{if(!e){M("Tree is empty! Insert some nodes first.");return}w(!0),x([]),d(null),v([]),_(q),b(!1);let z=[];switch(q){case"inorder":z=jl(e);break;case"preorder":z=Nl(e);break;case"postorder":z=Sl(e);break;case"levelorder":z=gv(e);break;default:z=[]}if(z.length===0){M("Tree is empty!"),w(!1);return}for(let E=0;E<z.length;E++)d(z[E]),await new Promise(T=>setTimeout(T,600)),v(T=>[...T,z[E]]),x(T=>[...T,z[E]]),await new Promise(T=>setTimeout(T,200));d(null),b(!0),w(!1),M(`${q.charAt(0).toUpperCase()+q.slice(1)} traversal complete!`)},Ce=()=>{x([]),d(null),v([]),_(null),b(!1)};return s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"intro-layout",children:[s.jsx(xv,{}),s.jsx(Jn,{context:"Binary Tree data structure and traversals"})]}),s.jsxs("div",{className:"visualizer-layout",children:[s.jsx(kv,{insertValue:a,deleteValue:o,size:t,height:i,message:p,tree:e,isAnimating:k,visitedNodes:h,onInsertValueChange:u,onDeleteValueChange:c,onInsert:S,onDelete:A,onTraversal:ue,onClear:oe,onResetTraversal:Ce}),s.jsxs("div",{className:"visual-panel",children:[s.jsx("h2",{children:"Binary Tree Visualization"}),s.jsx("div",{className:"tree-container",children:s.jsx(wv,{tree:e,currentNode:g,visitedNodes:h})}),s.jsx(jv,{traversalType:N,traversalResult:m,isAnimating:k,traversalComplete:P})]})]}),s.jsx(et,{dataStructure:"binarytree"})]})}function Sv(){return s.jsxs("div",{className:"homepage-body",children:[s.jsx(Cm,{}),s.jsxs("main",{className:"main-content",children:[s.jsxs(Ap,{children:[s.jsx(Oe,{path:"/",element:s.jsx(_m,{})}),s.jsx(Oe,{path:"/algorithms",element:s.jsx(Lm,{})}),s.jsx(Oe,{path:"/contact",element:s.jsx(bm,{})}),s.jsx(Oe,{path:"/contributions",element:s.jsx(Pm,{})}),s.jsx(Oe,{path:"/stack",element:s.jsx(rv,{})}),s.jsx(Oe,{path:"/queue",element:s.jsx(iv,{})}),s.jsx(Oe,{path:"/linkedlist",element:s.jsx(sv,{})}),s.jsx(Oe,{path:"/hashtable_linear",element:s.jsx(lv,{})}),s.jsx(Oe,{path:"/hashtable_quadratic",element:s.jsx(vv,{})}),s.jsx(Oe,{path:"/hashtable_chaining",element:s.jsx(mv,{})}),s.jsx(Oe,{path:"/binarytree",element:s.jsx(Nv,{})})]}),s.jsx(zm,{})]})]})}Ts.createRoot(document.getElementById("root")).render(s.jsx(bi.StrictMode,{children:s.jsx(Kp,{children:s.jsx(Sv,{})})}));
