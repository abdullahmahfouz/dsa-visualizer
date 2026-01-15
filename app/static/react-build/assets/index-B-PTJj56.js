function Pd(e,n){for(var t=0;t<n.length;t++){const s=n[t];if(typeof s!="string"&&!Array.isArray(s)){for(const a in s)if(a!=="default"&&!(a in e)){const i=Object.getOwnPropertyDescriptor(s,a);i&&Object.defineProperty(e,a,i.get?i:{enumerable:!0,get:()=>s[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();function zd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var lc={exports:{}},$s={},oc={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pr=Symbol.for("react.element"),Id=Symbol.for("react.portal"),Md=Symbol.for("react.fragment"),Vd=Symbol.for("react.strict_mode"),Hd=Symbol.for("react.profiler"),Dd=Symbol.for("react.provider"),Fd=Symbol.for("react.context"),Ad=Symbol.for("react.forward_ref"),$d=Symbol.for("react.suspense"),Bd=Symbol.for("react.memo"),Ud=Symbol.for("react.lazy"),Vl=Symbol.iterator;function qd(e){return e===null||typeof e!="object"?null:(e=Vl&&e[Vl]||e["@@iterator"],typeof e=="function"?e:null)}var cc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},uc=Object.assign,dc={};function Ft(e,n,t){this.props=e,this.context=n,this.refs=dc,this.updater=t||cc}Ft.prototype.isReactComponent={};Ft.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Ft.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function hc(){}hc.prototype=Ft.prototype;function Vi(e,n,t){this.props=e,this.context=n,this.refs=dc,this.updater=t||cc}var Hi=Vi.prototype=new hc;Hi.constructor=Vi;uc(Hi,Ft.prototype);Hi.isPureReactComponent=!0;var Hl=Array.isArray,pc=Object.prototype.hasOwnProperty,Di={current:null},fc={key:!0,ref:!0,__self:!0,__source:!0};function mc(e,n,t){var s,a={},i=null,l=null;if(n!=null)for(s in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(i=""+n.key),n)pc.call(n,s)&&!fc.hasOwnProperty(s)&&(a[s]=n[s]);var o=arguments.length-2;if(o===1)a.children=t;else if(1<o){for(var c=Array(o),u=0;u<o;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(s in o=e.defaultProps,o)a[s]===void 0&&(a[s]=o[s]);return{$$typeof:Pr,type:e,key:i,ref:l,props:a,_owner:Di.current}}function Kd(e,n){return{$$typeof:Pr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Fi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Pr}function Wd(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Dl=/\/+/g;function aa(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Wd(""+e.key):n.toString(36)}function ss(e,n,t,s,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Pr:case Id:l=!0}}if(l)return l=e,a=a(l),e=s===""?"."+aa(l,0):s,Hl(a)?(t="",e!=null&&(t=e.replace(Dl,"$&/")+"/"),ss(a,n,t,"",function(u){return u})):a!=null&&(Fi(a)&&(a=Kd(a,t+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(Dl,"$&/")+"/")+e)),n.push(a)),1;if(l=0,s=s===""?".":s+":",Hl(e))for(var o=0;o<e.length;o++){i=e[o];var c=s+aa(i,o);l+=ss(i,n,t,c,a)}else if(c=qd(e),typeof c=="function")for(e=c.call(e),o=0;!(i=e.next()).done;)i=i.value,c=s+aa(i,o++),l+=ss(i,n,t,c,a);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function Ar(e,n,t){if(e==null)return e;var s=[],a=0;return ss(e,s,"","",function(i){return n.call(t,i,a++)}),s}function Qd(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Te={current:null},as={transition:null},Gd={ReactCurrentDispatcher:Te,ReactCurrentBatchConfig:as,ReactCurrentOwner:Di};function yc(){throw Error("act(...) is not supported in production builds of React.")}Q.Children={map:Ar,forEach:function(e,n,t){Ar(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Ar(e,function(){n++}),n},toArray:function(e){return Ar(e,function(n){return n})||[]},only:function(e){if(!Fi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Q.Component=Ft;Q.Fragment=Md;Q.Profiler=Hd;Q.PureComponent=Vi;Q.StrictMode=Vd;Q.Suspense=$d;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gd;Q.act=yc;Q.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=uc({},e.props),a=e.key,i=e.ref,l=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,l=Di.current),n.key!==void 0&&(a=""+n.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(c in n)pc.call(n,c)&&!fc.hasOwnProperty(c)&&(s[c]=n[c]===void 0&&o!==void 0?o[c]:n[c])}var c=arguments.length-2;if(c===1)s.children=t;else if(1<c){o=Array(c);for(var u=0;u<c;u++)o[u]=arguments[u+2];s.children=o}return{$$typeof:Pr,type:e.type,key:a,ref:i,props:s,_owner:l}};Q.createContext=function(e){return e={$$typeof:Fd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Dd,_context:e},e.Consumer=e};Q.createElement=mc;Q.createFactory=function(e){var n=mc.bind(null,e);return n.type=e,n};Q.createRef=function(){return{current:null}};Q.forwardRef=function(e){return{$$typeof:Ad,render:e}};Q.isValidElement=Fi;Q.lazy=function(e){return{$$typeof:Ud,_payload:{_status:-1,_result:e},_init:Qd}};Q.memo=function(e,n){return{$$typeof:Bd,type:e,compare:n===void 0?null:n}};Q.startTransition=function(e){var n=as.transition;as.transition={};try{e()}finally{as.transition=n}};Q.unstable_act=yc;Q.useCallback=function(e,n){return Te.current.useCallback(e,n)};Q.useContext=function(e){return Te.current.useContext(e)};Q.useDebugValue=function(){};Q.useDeferredValue=function(e){return Te.current.useDeferredValue(e)};Q.useEffect=function(e,n){return Te.current.useEffect(e,n)};Q.useId=function(){return Te.current.useId()};Q.useImperativeHandle=function(e,n,t){return Te.current.useImperativeHandle(e,n,t)};Q.useInsertionEffect=function(e,n){return Te.current.useInsertionEffect(e,n)};Q.useLayoutEffect=function(e,n){return Te.current.useLayoutEffect(e,n)};Q.useMemo=function(e,n){return Te.current.useMemo(e,n)};Q.useReducer=function(e,n,t){return Te.current.useReducer(e,n,t)};Q.useRef=function(e){return Te.current.useRef(e)};Q.useState=function(e){return Te.current.useState(e)};Q.useSyncExternalStore=function(e,n,t){return Te.current.useSyncExternalStore(e,n,t)};Q.useTransition=function(){return Te.current.useTransition()};Q.version="18.3.1";oc.exports=Q;var g=oc.exports;const At=zd(g),Zd=Pd({__proto__:null,default:At},[g]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jd=g,Xd=Symbol.for("react.element"),Yd=Symbol.for("react.fragment"),eh=Object.prototype.hasOwnProperty,nh=Jd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,th={key:!0,ref:!0,__self:!0,__source:!0};function gc(e,n,t){var s,a={},i=null,l=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(l=n.ref);for(s in n)eh.call(n,s)&&!th.hasOwnProperty(s)&&(a[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps,n)a[s]===void 0&&(a[s]=n[s]);return{$$typeof:Xd,type:e,key:i,ref:l,props:a,_owner:nh.current}}$s.Fragment=Yd;$s.jsx=gc;$s.jsxs=gc;lc.exports=$s;var r=lc.exports,za={},vc={exports:{}},Ve={},xc={exports:{}},kc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(L,b){var E=L.length;L.push(b);e:for(;0<E;){var H=E-1>>>1,V=L[H];if(0<a(V,b))L[H]=b,L[E]=V,E=H;else break e}}function t(L){return L.length===0?null:L[0]}function s(L){if(L.length===0)return null;var b=L[0],E=L.pop();if(E!==b){L[0]=E;e:for(var H=0,V=L.length,I=V>>>1;H<I;){var K=2*(H+1)-1,B=L[K],W=K+1,Nn=L[W];if(0>a(B,E))W<V&&0>a(Nn,B)?(L[H]=Nn,L[W]=E,H=W):(L[H]=B,L[K]=E,H=K);else if(W<V&&0>a(Nn,E))L[H]=Nn,L[W]=E,H=W;else break e}}return b}function a(L,b){var E=L.sortIndex-b.sortIndex;return E!==0?E:L.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,o=l.now();e.unstable_now=function(){return l.now()-o}}var c=[],u=[],d=1,h=null,m=3,N=!1,k=!1,x=!1,v=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(L){for(var b=t(u);b!==null;){if(b.callback===null)s(u);else if(b.startTime<=L)s(u),b.sortIndex=b.expirationTime,n(c,b);else break;b=t(u)}}function w(L){if(x=!1,y(L),!k)if(t(c)!==null)k=!0,R(j);else{var b=t(u);b!==null&&O(w,b.startTime-L)}}function j(L,b){k=!1,x&&(x=!1,p(M),M=-1),N=!0;var E=m;try{for(y(b),h=t(c);h!==null&&(!(h.expirationTime>b)||L&&!$());){var H=h.callback;if(typeof H=="function"){h.callback=null,m=h.priorityLevel;var V=H(h.expirationTime<=b);b=e.unstable_now(),typeof V=="function"?h.callback=V:h===t(c)&&s(c),y(b)}else s(c);h=t(c)}if(h!==null)var I=!0;else{var K=t(u);K!==null&&O(w,K.startTime-b),I=!1}return I}finally{h=null,m=E,N=!1}}var _=!1,S=null,M=-1,A=5,C=-1;function $(){return!(e.unstable_now()-C<A)}function J(){if(S!==null){var L=e.unstable_now();C=L;var b=!0;try{b=S(!0,L)}finally{b?z():(_=!1,S=null)}}else _=!1}var z;if(typeof f=="function")z=function(){f(J)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,T=D.port2;D.port1.onmessage=J,z=function(){T.postMessage(null)}}else z=function(){v(J,0)};function R(L){S=L,_||(_=!0,z())}function O(L,b){M=v(function(){L(e.unstable_now())},b)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){k||N||(k=!0,R(j))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(c)},e.unstable_next=function(L){switch(m){case 1:case 2:case 3:var b=3;break;default:b=m}var E=m;m=b;try{return L()}finally{m=E}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,b){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var E=m;m=L;try{return b()}finally{m=E}},e.unstable_scheduleCallback=function(L,b,E){var H=e.unstable_now();switch(typeof E=="object"&&E!==null?(E=E.delay,E=typeof E=="number"&&0<E?H+E:H):E=H,L){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=E+V,L={id:d++,callback:b,priorityLevel:L,startTime:E,expirationTime:V,sortIndex:-1},E>H?(L.sortIndex=E,n(u,L),t(c)===null&&L===t(u)&&(x?(p(M),M=-1):x=!0,O(w,E-H))):(L.sortIndex=V,n(c,L),k||N||(k=!0,R(j))),L},e.unstable_shouldYield=$,e.unstable_wrapCallback=function(L){var b=m;return function(){var E=m;m=b;try{return L.apply(this,arguments)}finally{m=E}}}})(kc);xc.exports=kc;var rh=xc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sh=g,Me=rh;function P(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Nc=new Set,fr={};function at(e,n){_t(e,n),_t(e+"Capture",n)}function _t(e,n){for(fr[e]=n,e=0;e<n.length;e++)Nc.add(n[e])}var fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ia=Object.prototype.hasOwnProperty,ah=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fl={},Al={};function ih(e){return Ia.call(Al,e)?!0:Ia.call(Fl,e)?!1:ah.test(e)?Al[e]=!0:(Fl[e]=!0,!1)}function lh(e,n,t,s){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return s?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function oh(e,n,t,s){if(n===null||typeof n>"u"||lh(e,n,t,s))return!0;if(s)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Ce(e,n,t,s,a,i,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=s,this.attributeNamespace=a,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=l}var ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ve[e]=new Ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ve[n]=new Ce(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ve[e]=new Ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ve[e]=new Ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ve[e]=new Ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ve[e]=new Ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ve[e]=new Ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ve[e]=new Ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ve[e]=new Ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ai=/[\-:]([a-z])/g;function $i(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Ai,$i);ve[n]=new Ce(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Ai,$i);ve[n]=new Ce(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Ai,$i);ve[n]=new Ce(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ve[e]=new Ce(e,1,!1,e.toLowerCase(),null,!1,!1)});ve.xlinkHref=new Ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ve[e]=new Ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function Bi(e,n,t,s){var a=ve.hasOwnProperty(n)?ve[n]:null;(a!==null?a.type!==0:s||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(oh(n,t,a,s)&&(t=null),s||a===null?ih(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):a.mustUseProperty?e[a.propertyName]=t===null?a.type===3?!1:"":t:(n=a.attributeName,s=a.attributeNamespace,t===null?e.removeAttribute(n):(a=a.type,t=a===3||a===4&&t===!0?"":""+t,s?e.setAttributeNS(s,n,t):e.setAttribute(n,t))))}var xn=sh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$r=Symbol.for("react.element"),ut=Symbol.for("react.portal"),dt=Symbol.for("react.fragment"),Ui=Symbol.for("react.strict_mode"),Ma=Symbol.for("react.profiler"),jc=Symbol.for("react.provider"),wc=Symbol.for("react.context"),qi=Symbol.for("react.forward_ref"),Va=Symbol.for("react.suspense"),Ha=Symbol.for("react.suspense_list"),Ki=Symbol.for("react.memo"),wn=Symbol.for("react.lazy"),Sc=Symbol.for("react.offscreen"),$l=Symbol.iterator;function Wt(e){return e===null||typeof e!="object"?null:(e=$l&&e[$l]||e["@@iterator"],typeof e=="function"?e:null)}var se=Object.assign,ia;function nr(e){if(ia===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);ia=n&&n[1]||""}return`
`+ia+e}var la=!1;function oa(e,n){if(!e||la)return"";la=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var s=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){s=u}e.call(n.prototype)}else{try{throw Error()}catch(u){s=u}e()}}catch(u){if(u&&s&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),i=s.stack.split(`
`),l=a.length-1,o=i.length-1;1<=l&&0<=o&&a[l]!==i[o];)o--;for(;1<=l&&0<=o;l--,o--)if(a[l]!==i[o]){if(l!==1||o!==1)do if(l--,o--,0>o||a[l]!==i[o]){var c=`
`+a[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=o);break}}}finally{la=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?nr(e):""}function ch(e){switch(e.tag){case 5:return nr(e.type);case 16:return nr("Lazy");case 13:return nr("Suspense");case 19:return nr("SuspenseList");case 0:case 2:case 15:return e=oa(e.type,!1),e;case 11:return e=oa(e.type.render,!1),e;case 1:return e=oa(e.type,!0),e;default:return""}}function Da(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case dt:return"Fragment";case ut:return"Portal";case Ma:return"Profiler";case Ui:return"StrictMode";case Va:return"Suspense";case Ha:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case wc:return(e.displayName||"Context")+".Consumer";case jc:return(e._context.displayName||"Context")+".Provider";case qi:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ki:return n=e.displayName||null,n!==null?n:Da(e.type)||"Memo";case wn:n=e._payload,e=e._init;try{return Da(e(n))}catch{}}return null}function uh(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Da(n);case 8:return n===Ui?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Fn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function dh(e){var n=bc(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var a=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return a.call(this)},set:function(l){s=""+l,i.call(this,l)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return s},setValue:function(l){s=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Br(e){e._valueTracker||(e._valueTracker=dh(e))}function Tc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),s="";return e&&(s=bc(e)?e.checked?"true":"false":e.value),e=s,e!==t?(n.setValue(e),!0):!1}function ys(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Fa(e,n){var t=n.checked;return se({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Bl(e,n){var t=n.defaultValue==null?"":n.defaultValue,s=n.checked!=null?n.checked:n.defaultChecked;t=Fn(n.value!=null?n.value:t),e._wrapperState={initialChecked:s,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Cc(e,n){n=n.checked,n!=null&&Bi(e,"checked",n,!1)}function Aa(e,n){Cc(e,n);var t=Fn(n.value),s=n.type;if(t!=null)s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?$a(e,n.type,t):n.hasOwnProperty("defaultValue")&&$a(e,n.type,Fn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Ul(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var s=n.type;if(!(s!=="submit"&&s!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function $a(e,n,t){(n!=="number"||ys(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var tr=Array.isArray;function Tt(e,n,t,s){if(e=e.options,n){n={};for(var a=0;a<t.length;a++)n["$"+t[a]]=!0;for(t=0;t<e.length;t++)a=n.hasOwnProperty("$"+e[t].value),e[t].selected!==a&&(e[t].selected=a),a&&s&&(e[t].defaultSelected=!0)}else{for(t=""+Fn(t),n=null,a=0;a<e.length;a++){if(e[a].value===t){e[a].selected=!0,s&&(e[a].defaultSelected=!0);return}n!==null||e[a].disabled||(n=e[a])}n!==null&&(n.selected=!0)}}function Ba(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(P(91));return se({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ql(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(P(92));if(tr(t)){if(1<t.length)throw Error(P(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Fn(t)}}function Lc(e,n){var t=Fn(n.value),s=Fn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),s!=null&&(e.defaultValue=""+s)}function Kl(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Ec(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ua(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Ec(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ur,Rc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,s,a){MSApp.execUnsafeLocalFunction(function(){return e(n,t,s,a)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Ur=Ur||document.createElement("div"),Ur.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Ur.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function mr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var ar={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hh=["Webkit","ms","Moz","O"];Object.keys(ar).forEach(function(e){hh.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),ar[n]=ar[e]})});function Oc(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||ar.hasOwnProperty(e)&&ar[e]?(""+n).trim():n+"px"}function _c(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var s=t.indexOf("--")===0,a=Oc(t,n[t],s);t==="float"&&(t="cssFloat"),s?e.setProperty(t,a):e[t]=a}}var ph=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qa(e,n){if(n){if(ph[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(P(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(P(61))}if(n.style!=null&&typeof n.style!="object")throw Error(P(62))}}function Ka(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wa=null;function Wi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qa=null,Ct=null,Lt=null;function Wl(e){if(e=Mr(e)){if(typeof Qa!="function")throw Error(P(280));var n=e.stateNode;n&&(n=Ws(n),Qa(e.stateNode,e.type,n))}}function Pc(e){Ct?Lt?Lt.push(e):Lt=[e]:Ct=e}function zc(){if(Ct){var e=Ct,n=Lt;if(Lt=Ct=null,Wl(e),n)for(e=0;e<n.length;e++)Wl(n[e])}}function Ic(e,n){return e(n)}function Mc(){}var ca=!1;function Vc(e,n,t){if(ca)return e(n,t);ca=!0;try{return Ic(e,n,t)}finally{ca=!1,(Ct!==null||Lt!==null)&&(Mc(),zc())}}function yr(e,n){var t=e.stateNode;if(t===null)return null;var s=Ws(t);if(s===null)return null;t=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(P(231,n,typeof t));return t}var Ga=!1;if(fn)try{var Qt={};Object.defineProperty(Qt,"passive",{get:function(){Ga=!0}}),window.addEventListener("test",Qt,Qt),window.removeEventListener("test",Qt,Qt)}catch{Ga=!1}function fh(e,n,t,s,a,i,l,o,c){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(d){this.onError(d)}}var ir=!1,gs=null,vs=!1,Za=null,mh={onError:function(e){ir=!0,gs=e}};function yh(e,n,t,s,a,i,l,o,c){ir=!1,gs=null,fh.apply(mh,arguments)}function gh(e,n,t,s,a,i,l,o,c){if(yh.apply(this,arguments),ir){if(ir){var u=gs;ir=!1,gs=null}else throw Error(P(198));vs||(vs=!0,Za=u)}}function it(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Hc(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Ql(e){if(it(e)!==e)throw Error(P(188))}function vh(e){var n=e.alternate;if(!n){if(n=it(e),n===null)throw Error(P(188));return n!==e?null:e}for(var t=e,s=n;;){var a=t.return;if(a===null)break;var i=a.alternate;if(i===null){if(s=a.return,s!==null){t=s;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===t)return Ql(a),e;if(i===s)return Ql(a),n;i=i.sibling}throw Error(P(188))}if(t.return!==s.return)t=a,s=i;else{for(var l=!1,o=a.child;o;){if(o===t){l=!0,t=a,s=i;break}if(o===s){l=!0,s=a,t=i;break}o=o.sibling}if(!l){for(o=i.child;o;){if(o===t){l=!0,t=i,s=a;break}if(o===s){l=!0,s=i,t=a;break}o=o.sibling}if(!l)throw Error(P(189))}}if(t.alternate!==s)throw Error(P(190))}if(t.tag!==3)throw Error(P(188));return t.stateNode.current===t?e:n}function Dc(e){return e=vh(e),e!==null?Fc(e):null}function Fc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Fc(e);if(n!==null)return n;e=e.sibling}return null}var Ac=Me.unstable_scheduleCallback,Gl=Me.unstable_cancelCallback,xh=Me.unstable_shouldYield,kh=Me.unstable_requestPaint,ie=Me.unstable_now,Nh=Me.unstable_getCurrentPriorityLevel,Qi=Me.unstable_ImmediatePriority,$c=Me.unstable_UserBlockingPriority,xs=Me.unstable_NormalPriority,jh=Me.unstable_LowPriority,Bc=Me.unstable_IdlePriority,Bs=null,an=null;function wh(e){if(an&&typeof an.onCommitFiberRoot=="function")try{an.onCommitFiberRoot(Bs,e,void 0,(e.current.flags&128)===128)}catch{}}var Xe=Math.clz32?Math.clz32:Th,Sh=Math.log,bh=Math.LN2;function Th(e){return e>>>=0,e===0?32:31-(Sh(e)/bh|0)|0}var qr=64,Kr=4194304;function rr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ks(e,n){var t=e.pendingLanes;if(t===0)return 0;var s=0,a=e.suspendedLanes,i=e.pingedLanes,l=t&268435455;if(l!==0){var o=l&~a;o!==0?s=rr(o):(i&=l,i!==0&&(s=rr(i)))}else l=t&~a,l!==0?s=rr(l):i!==0&&(s=rr(i));if(s===0)return 0;if(n!==0&&n!==s&&!(n&a)&&(a=s&-s,i=n&-n,a>=i||a===16&&(i&4194240)!==0))return n;if(s&4&&(s|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=s;0<n;)t=31-Xe(n),a=1<<t,s|=e[t],n&=~a;return s}function Ch(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lh(e,n){for(var t=e.suspendedLanes,s=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Xe(i),o=1<<l,c=a[l];c===-1?(!(o&t)||o&s)&&(a[l]=Ch(o,n)):c<=n&&(e.expiredLanes|=o),i&=~o}}function Ja(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Uc(){var e=qr;return qr<<=1,!(qr&4194240)&&(qr=64),e}function ua(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function zr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Xe(n),e[n]=t}function Eh(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<t;){var a=31-Xe(t),i=1<<a;n[a]=0,s[a]=-1,e[a]=-1,t&=~i}}function Gi(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var s=31-Xe(t),a=1<<s;a&n|e[s]&n&&(e[s]|=n),t&=~a}}var Z=0;function qc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Kc,Zi,Wc,Qc,Gc,Xa=!1,Wr=[],On=null,_n=null,Pn=null,gr=new Map,vr=new Map,bn=[],Rh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zl(e,n){switch(e){case"focusin":case"focusout":On=null;break;case"dragenter":case"dragleave":_n=null;break;case"mouseover":case"mouseout":Pn=null;break;case"pointerover":case"pointerout":gr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":vr.delete(n.pointerId)}}function Gt(e,n,t,s,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:s,nativeEvent:i,targetContainers:[a]},n!==null&&(n=Mr(n),n!==null&&Zi(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,a!==null&&n.indexOf(a)===-1&&n.push(a),e)}function Oh(e,n,t,s,a){switch(n){case"focusin":return On=Gt(On,e,n,t,s,a),!0;case"dragenter":return _n=Gt(_n,e,n,t,s,a),!0;case"mouseover":return Pn=Gt(Pn,e,n,t,s,a),!0;case"pointerover":var i=a.pointerId;return gr.set(i,Gt(gr.get(i)||null,e,n,t,s,a)),!0;case"gotpointercapture":return i=a.pointerId,vr.set(i,Gt(vr.get(i)||null,e,n,t,s,a)),!0}return!1}function Zc(e){var n=Wn(e.target);if(n!==null){var t=it(n);if(t!==null){if(n=t.tag,n===13){if(n=Hc(t),n!==null){e.blockedOn=n,Gc(e.priority,function(){Wc(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function is(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ya(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var s=new t.constructor(t.type,t);Wa=s,t.target.dispatchEvent(s),Wa=null}else return n=Mr(t),n!==null&&Zi(n),e.blockedOn=t,!1;n.shift()}return!0}function Jl(e,n,t){is(e)&&t.delete(n)}function _h(){Xa=!1,On!==null&&is(On)&&(On=null),_n!==null&&is(_n)&&(_n=null),Pn!==null&&is(Pn)&&(Pn=null),gr.forEach(Jl),vr.forEach(Jl)}function Zt(e,n){e.blockedOn===n&&(e.blockedOn=null,Xa||(Xa=!0,Me.unstable_scheduleCallback(Me.unstable_NormalPriority,_h)))}function xr(e){function n(a){return Zt(a,e)}if(0<Wr.length){Zt(Wr[0],e);for(var t=1;t<Wr.length;t++){var s=Wr[t];s.blockedOn===e&&(s.blockedOn=null)}}for(On!==null&&Zt(On,e),_n!==null&&Zt(_n,e),Pn!==null&&Zt(Pn,e),gr.forEach(n),vr.forEach(n),t=0;t<bn.length;t++)s=bn[t],s.blockedOn===e&&(s.blockedOn=null);for(;0<bn.length&&(t=bn[0],t.blockedOn===null);)Zc(t),t.blockedOn===null&&bn.shift()}var Et=xn.ReactCurrentBatchConfig,Ns=!0;function Ph(e,n,t,s){var a=Z,i=Et.transition;Et.transition=null;try{Z=1,Ji(e,n,t,s)}finally{Z=a,Et.transition=i}}function zh(e,n,t,s){var a=Z,i=Et.transition;Et.transition=null;try{Z=4,Ji(e,n,t,s)}finally{Z=a,Et.transition=i}}function Ji(e,n,t,s){if(Ns){var a=Ya(e,n,t,s);if(a===null)ka(e,n,s,js,t),Zl(e,s);else if(Oh(a,e,n,t,s))s.stopPropagation();else if(Zl(e,s),n&4&&-1<Rh.indexOf(e)){for(;a!==null;){var i=Mr(a);if(i!==null&&Kc(i),i=Ya(e,n,t,s),i===null&&ka(e,n,s,js,t),i===a)break;a=i}a!==null&&s.stopPropagation()}else ka(e,n,s,null,t)}}var js=null;function Ya(e,n,t,s){if(js=null,e=Wi(s),e=Wn(e),e!==null)if(n=it(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Hc(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return js=e,null}function Jc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Nh()){case Qi:return 1;case $c:return 4;case xs:case jh:return 16;case Bc:return 536870912;default:return 16}default:return 16}}var Cn=null,Xi=null,ls=null;function Xc(){if(ls)return ls;var e,n=Xi,t=n.length,s,a="value"in Cn?Cn.value:Cn.textContent,i=a.length;for(e=0;e<t&&n[e]===a[e];e++);var l=t-e;for(s=1;s<=l&&n[t-s]===a[i-s];s++);return ls=a.slice(e,1<s?1-s:void 0)}function os(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Qr(){return!0}function Xl(){return!1}function He(e){function n(t,s,a,i,l){this._reactName=t,this._targetInst=a,this.type=s,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Qr:Xl,this.isPropagationStopped=Xl,this}return se(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Qr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Qr)},persist:function(){},isPersistent:Qr}),n}var $t={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yi=He($t),Ir=se({},$t,{view:0,detail:0}),Ih=He(Ir),da,ha,Jt,Us=se({},Ir,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:el,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jt&&(Jt&&e.type==="mousemove"?(da=e.screenX-Jt.screenX,ha=e.screenY-Jt.screenY):ha=da=0,Jt=e),da)},movementY:function(e){return"movementY"in e?e.movementY:ha}}),Yl=He(Us),Mh=se({},Us,{dataTransfer:0}),Vh=He(Mh),Hh=se({},Ir,{relatedTarget:0}),pa=He(Hh),Dh=se({},$t,{animationName:0,elapsedTime:0,pseudoElement:0}),Fh=He(Dh),Ah=se({},$t,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$h=He(Ah),Bh=se({},$t,{data:0}),eo=He(Bh),Uh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wh(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Kh[e])?!!n[e]:!1}function el(){return Wh}var Qh=se({},Ir,{key:function(e){if(e.key){var n=Uh[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=os(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?qh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:el,charCode:function(e){return e.type==="keypress"?os(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?os(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gh=He(Qh),Zh=se({},Us,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),no=He(Zh),Jh=se({},Ir,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:el}),Xh=He(Jh),Yh=se({},$t,{propertyName:0,elapsedTime:0,pseudoElement:0}),ep=He(Yh),np=se({},Us,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),tp=He(np),rp=[9,13,27,32],nl=fn&&"CompositionEvent"in window,lr=null;fn&&"documentMode"in document&&(lr=document.documentMode);var sp=fn&&"TextEvent"in window&&!lr,Yc=fn&&(!nl||lr&&8<lr&&11>=lr),to=" ",ro=!1;function eu(e,n){switch(e){case"keyup":return rp.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ht=!1;function ap(e,n){switch(e){case"compositionend":return nu(n);case"keypress":return n.which!==32?null:(ro=!0,to);case"textInput":return e=n.data,e===to&&ro?null:e;default:return null}}function ip(e,n){if(ht)return e==="compositionend"||!nl&&eu(e,n)?(e=Xc(),ls=Xi=Cn=null,ht=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Yc&&n.locale!=="ko"?null:n.data;default:return null}}var lp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function so(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!lp[e.type]:n==="textarea"}function tu(e,n,t,s){Pc(s),n=ws(n,"onChange"),0<n.length&&(t=new Yi("onChange","change",null,t,s),e.push({event:t,listeners:n}))}var or=null,kr=null;function op(e){pu(e,0)}function qs(e){var n=mt(e);if(Tc(n))return e}function cp(e,n){if(e==="change")return n}var ru=!1;if(fn){var fa;if(fn){var ma="oninput"in document;if(!ma){var ao=document.createElement("div");ao.setAttribute("oninput","return;"),ma=typeof ao.oninput=="function"}fa=ma}else fa=!1;ru=fa&&(!document.documentMode||9<document.documentMode)}function io(){or&&(or.detachEvent("onpropertychange",su),kr=or=null)}function su(e){if(e.propertyName==="value"&&qs(kr)){var n=[];tu(n,kr,e,Wi(e)),Vc(op,n)}}function up(e,n,t){e==="focusin"?(io(),or=n,kr=t,or.attachEvent("onpropertychange",su)):e==="focusout"&&io()}function dp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qs(kr)}function hp(e,n){if(e==="click")return qs(n)}function pp(e,n){if(e==="input"||e==="change")return qs(n)}function fp(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var en=typeof Object.is=="function"?Object.is:fp;function Nr(e,n){if(en(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),s=Object.keys(n);if(t.length!==s.length)return!1;for(s=0;s<t.length;s++){var a=t[s];if(!Ia.call(n,a)||!en(e[a],n[a]))return!1}return!0}function lo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function oo(e,n){var t=lo(e);e=0;for(var s;t;){if(t.nodeType===3){if(s=e+t.textContent.length,e<=n&&s>=n)return{node:t,offset:n-e};e=s}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=lo(t)}}function au(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?au(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function iu(){for(var e=window,n=ys();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=ys(e.document)}return n}function tl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function mp(e){var n=iu(),t=e.focusedElem,s=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&au(t.ownerDocument.documentElement,t)){if(s!==null&&tl(t)){if(n=s.start,e=s.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var a=t.textContent.length,i=Math.min(s.start,a);s=s.end===void 0?i:Math.min(s.end,a),!e.extend&&i>s&&(a=s,s=i,i=a),a=oo(t,i);var l=oo(t,s);a&&l&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(a.node,a.offset),e.removeAllRanges(),i>s?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var yp=fn&&"documentMode"in document&&11>=document.documentMode,pt=null,ei=null,cr=null,ni=!1;function co(e,n,t){var s=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ni||pt==null||pt!==ys(s)||(s=pt,"selectionStart"in s&&tl(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),cr&&Nr(cr,s)||(cr=s,s=ws(ei,"onSelect"),0<s.length&&(n=new Yi("onSelect","select",null,n,t),e.push({event:n,listeners:s}),n.target=pt)))}function Gr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var ft={animationend:Gr("Animation","AnimationEnd"),animationiteration:Gr("Animation","AnimationIteration"),animationstart:Gr("Animation","AnimationStart"),transitionend:Gr("Transition","TransitionEnd")},ya={},lu={};fn&&(lu=document.createElement("div").style,"AnimationEvent"in window||(delete ft.animationend.animation,delete ft.animationiteration.animation,delete ft.animationstart.animation),"TransitionEvent"in window||delete ft.transitionend.transition);function Ks(e){if(ya[e])return ya[e];if(!ft[e])return e;var n=ft[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in lu)return ya[e]=n[t];return e}var ou=Ks("animationend"),cu=Ks("animationiteration"),uu=Ks("animationstart"),du=Ks("transitionend"),hu=new Map,uo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $n(e,n){hu.set(e,n),at(n,[e])}for(var ga=0;ga<uo.length;ga++){var va=uo[ga],gp=va.toLowerCase(),vp=va[0].toUpperCase()+va.slice(1);$n(gp,"on"+vp)}$n(ou,"onAnimationEnd");$n(cu,"onAnimationIteration");$n(uu,"onAnimationStart");$n("dblclick","onDoubleClick");$n("focusin","onFocus");$n("focusout","onBlur");$n(du,"onTransitionEnd");_t("onMouseEnter",["mouseout","mouseover"]);_t("onMouseLeave",["mouseout","mouseover"]);_t("onPointerEnter",["pointerout","pointerover"]);_t("onPointerLeave",["pointerout","pointerover"]);at("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));at("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));at("onBeforeInput",["compositionend","keypress","textInput","paste"]);at("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));at("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));at("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xp=new Set("cancel close invalid load scroll toggle".split(" ").concat(sr));function ho(e,n,t){var s=e.type||"unknown-event";e.currentTarget=t,gh(s,n,void 0,e),e.currentTarget=null}function pu(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var s=e[t],a=s.event;s=s.listeners;e:{var i=void 0;if(n)for(var l=s.length-1;0<=l;l--){var o=s[l],c=o.instance,u=o.currentTarget;if(o=o.listener,c!==i&&a.isPropagationStopped())break e;ho(a,o,u),i=c}else for(l=0;l<s.length;l++){if(o=s[l],c=o.instance,u=o.currentTarget,o=o.listener,c!==i&&a.isPropagationStopped())break e;ho(a,o,u),i=c}}}if(vs)throw e=Za,vs=!1,Za=null,e}function Y(e,n){var t=n[ii];t===void 0&&(t=n[ii]=new Set);var s=e+"__bubble";t.has(s)||(fu(n,e,2,!1),t.add(s))}function xa(e,n,t){var s=0;n&&(s|=4),fu(t,e,s,n)}var Zr="_reactListening"+Math.random().toString(36).slice(2);function jr(e){if(!e[Zr]){e[Zr]=!0,Nc.forEach(function(t){t!=="selectionchange"&&(xp.has(t)||xa(t,!1,e),xa(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Zr]||(n[Zr]=!0,xa("selectionchange",!1,n))}}function fu(e,n,t,s){switch(Jc(n)){case 1:var a=Ph;break;case 4:a=zh;break;default:a=Ji}t=a.bind(null,n,t,e),a=void 0,!Ga||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(a=!0),s?a!==void 0?e.addEventListener(n,t,{capture:!0,passive:a}):e.addEventListener(n,t,!0):a!==void 0?e.addEventListener(n,t,{passive:a}):e.addEventListener(n,t,!1)}function ka(e,n,t,s,a){var i=s;if(!(n&1)&&!(n&2)&&s!==null)e:for(;;){if(s===null)return;var l=s.tag;if(l===3||l===4){var o=s.stateNode.containerInfo;if(o===a||o.nodeType===8&&o.parentNode===a)break;if(l===4)for(l=s.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;l=l.return}for(;o!==null;){if(l=Wn(o),l===null)return;if(c=l.tag,c===5||c===6){s=i=l;continue e}o=o.parentNode}}s=s.return}Vc(function(){var u=i,d=Wi(t),h=[];e:{var m=hu.get(e);if(m!==void 0){var N=Yi,k=e;switch(e){case"keypress":if(os(t)===0)break e;case"keydown":case"keyup":N=Gh;break;case"focusin":k="focus",N=pa;break;case"focusout":k="blur",N=pa;break;case"beforeblur":case"afterblur":N=pa;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=Yl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=Vh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=Xh;break;case ou:case cu:case uu:N=Fh;break;case du:N=ep;break;case"scroll":N=Ih;break;case"wheel":N=tp;break;case"copy":case"cut":case"paste":N=$h;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=no}var x=(n&4)!==0,v=!x&&e==="scroll",p=x?m!==null?m+"Capture":null:m;x=[];for(var f=u,y;f!==null;){y=f;var w=y.stateNode;if(y.tag===5&&w!==null&&(y=w,p!==null&&(w=yr(f,p),w!=null&&x.push(wr(f,w,y)))),v)break;f=f.return}0<x.length&&(m=new N(m,k,null,t,d),h.push({event:m,listeners:x}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",m&&t!==Wa&&(k=t.relatedTarget||t.fromElement)&&(Wn(k)||k[mn]))break e;if((N||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,N?(k=t.relatedTarget||t.toElement,N=u,k=k?Wn(k):null,k!==null&&(v=it(k),k!==v||k.tag!==5&&k.tag!==6)&&(k=null)):(N=null,k=u),N!==k)){if(x=Yl,w="onMouseLeave",p="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(x=no,w="onPointerLeave",p="onPointerEnter",f="pointer"),v=N==null?m:mt(N),y=k==null?m:mt(k),m=new x(w,f+"leave",N,t,d),m.target=v,m.relatedTarget=y,w=null,Wn(d)===u&&(x=new x(p,f+"enter",k,t,d),x.target=y,x.relatedTarget=v,w=x),v=w,N&&k)n:{for(x=N,p=k,f=0,y=x;y;y=ct(y))f++;for(y=0,w=p;w;w=ct(w))y++;for(;0<f-y;)x=ct(x),f--;for(;0<y-f;)p=ct(p),y--;for(;f--;){if(x===p||p!==null&&x===p.alternate)break n;x=ct(x),p=ct(p)}x=null}else x=null;N!==null&&po(h,m,N,x,!1),k!==null&&v!==null&&po(h,v,k,x,!0)}}e:{if(m=u?mt(u):window,N=m.nodeName&&m.nodeName.toLowerCase(),N==="select"||N==="input"&&m.type==="file")var j=cp;else if(so(m))if(ru)j=pp;else{j=dp;var _=up}else(N=m.nodeName)&&N.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(j=hp);if(j&&(j=j(e,u))){tu(h,j,t,d);break e}_&&_(e,m,u),e==="focusout"&&(_=m._wrapperState)&&_.controlled&&m.type==="number"&&$a(m,"number",m.value)}switch(_=u?mt(u):window,e){case"focusin":(so(_)||_.contentEditable==="true")&&(pt=_,ei=u,cr=null);break;case"focusout":cr=ei=pt=null;break;case"mousedown":ni=!0;break;case"contextmenu":case"mouseup":case"dragend":ni=!1,co(h,t,d);break;case"selectionchange":if(yp)break;case"keydown":case"keyup":co(h,t,d)}var S;if(nl)e:{switch(e){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else ht?eu(e,t)&&(M="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(M="onCompositionStart");M&&(Yc&&t.locale!=="ko"&&(ht||M!=="onCompositionStart"?M==="onCompositionEnd"&&ht&&(S=Xc()):(Cn=d,Xi="value"in Cn?Cn.value:Cn.textContent,ht=!0)),_=ws(u,M),0<_.length&&(M=new eo(M,e,null,t,d),h.push({event:M,listeners:_}),S?M.data=S:(S=nu(t),S!==null&&(M.data=S)))),(S=sp?ap(e,t):ip(e,t))&&(u=ws(u,"onBeforeInput"),0<u.length&&(d=new eo("onBeforeInput","beforeinput",null,t,d),h.push({event:d,listeners:u}),d.data=S))}pu(h,n)})}function wr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function ws(e,n){for(var t=n+"Capture",s=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=yr(e,t),i!=null&&s.unshift(wr(e,i,a)),i=yr(e,n),i!=null&&s.push(wr(e,i,a))),e=e.return}return s}function ct(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function po(e,n,t,s,a){for(var i=n._reactName,l=[];t!==null&&t!==s;){var o=t,c=o.alternate,u=o.stateNode;if(c!==null&&c===s)break;o.tag===5&&u!==null&&(o=u,a?(c=yr(t,i),c!=null&&l.unshift(wr(t,c,o))):a||(c=yr(t,i),c!=null&&l.push(wr(t,c,o)))),t=t.return}l.length!==0&&e.push({event:n,listeners:l})}var kp=/\r\n?/g,Np=/\u0000|\uFFFD/g;function fo(e){return(typeof e=="string"?e:""+e).replace(kp,`
`).replace(Np,"")}function Jr(e,n,t){if(n=fo(n),fo(e)!==n&&t)throw Error(P(425))}function Ss(){}var ti=null,ri=null;function si(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ai=typeof setTimeout=="function"?setTimeout:void 0,jp=typeof clearTimeout=="function"?clearTimeout:void 0,mo=typeof Promise=="function"?Promise:void 0,wp=typeof queueMicrotask=="function"?queueMicrotask:typeof mo<"u"?function(e){return mo.resolve(null).then(e).catch(Sp)}:ai;function Sp(e){setTimeout(function(){throw e})}function Na(e,n){var t=n,s=0;do{var a=t.nextSibling;if(e.removeChild(t),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(s===0){e.removeChild(a),xr(n);return}s--}else t!=="$"&&t!=="$?"&&t!=="$!"||s++;t=a}while(t);xr(n)}function zn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function yo(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Bt=Math.random().toString(36).slice(2),sn="__reactFiber$"+Bt,Sr="__reactProps$"+Bt,mn="__reactContainer$"+Bt,ii="__reactEvents$"+Bt,bp="__reactListeners$"+Bt,Tp="__reactHandles$"+Bt;function Wn(e){var n=e[sn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[mn]||t[sn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=yo(e);e!==null;){if(t=e[sn])return t;e=yo(e)}return n}e=t,t=e.parentNode}return null}function Mr(e){return e=e[sn]||e[mn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function mt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Ws(e){return e[Sr]||null}var li=[],yt=-1;function Bn(e){return{current:e}}function ee(e){0>yt||(e.current=li[yt],li[yt]=null,yt--)}function X(e,n){yt++,li[yt]=e.current,e.current=n}var An={},je=Bn(An),Re=Bn(!1),et=An;function Pt(e,n){var t=e.type.contextTypes;if(!t)return An;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===n)return s.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in t)a[i]=n[i];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=a),a}function Oe(e){return e=e.childContextTypes,e!=null}function bs(){ee(Re),ee(je)}function go(e,n,t){if(je.current!==An)throw Error(P(168));X(je,n),X(Re,t)}function mu(e,n,t){var s=e.stateNode;if(n=n.childContextTypes,typeof s.getChildContext!="function")return t;s=s.getChildContext();for(var a in s)if(!(a in n))throw Error(P(108,uh(e)||"Unknown",a));return se({},t,s)}function Ts(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||An,et=je.current,X(je,e),X(Re,Re.current),!0}function vo(e,n,t){var s=e.stateNode;if(!s)throw Error(P(169));t?(e=mu(e,n,et),s.__reactInternalMemoizedMergedChildContext=e,ee(Re),ee(je),X(je,e)):ee(Re),X(Re,t)}var un=null,Qs=!1,ja=!1;function yu(e){un===null?un=[e]:un.push(e)}function Cp(e){Qs=!0,yu(e)}function Un(){if(!ja&&un!==null){ja=!0;var e=0,n=Z;try{var t=un;for(Z=1;e<t.length;e++){var s=t[e];do s=s(!0);while(s!==null)}un=null,Qs=!1}catch(a){throw un!==null&&(un=un.slice(e+1)),Ac(Qi,Un),a}finally{Z=n,ja=!1}}return null}var gt=[],vt=0,Cs=null,Ls=0,De=[],Fe=0,nt=null,dn=1,hn="";function qn(e,n){gt[vt++]=Ls,gt[vt++]=Cs,Cs=e,Ls=n}function gu(e,n,t){De[Fe++]=dn,De[Fe++]=hn,De[Fe++]=nt,nt=e;var s=dn;e=hn;var a=32-Xe(s)-1;s&=~(1<<a),t+=1;var i=32-Xe(n)+a;if(30<i){var l=a-a%5;i=(s&(1<<l)-1).toString(32),s>>=l,a-=l,dn=1<<32-Xe(n)+a|t<<a|s,hn=i+e}else dn=1<<i|t<<a|s,hn=e}function rl(e){e.return!==null&&(qn(e,1),gu(e,1,0))}function sl(e){for(;e===Cs;)Cs=gt[--vt],gt[vt]=null,Ls=gt[--vt],gt[vt]=null;for(;e===nt;)nt=De[--Fe],De[Fe]=null,hn=De[--Fe],De[Fe]=null,dn=De[--Fe],De[Fe]=null}var Ie=null,ze=null,ne=!1,Je=null;function vu(e,n){var t=Ae(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function xo(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ie=e,ze=zn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ie=e,ze=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=nt!==null?{id:dn,overflow:hn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ae(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ie=e,ze=null,!0):!1;default:return!1}}function oi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ci(e){if(ne){var n=ze;if(n){var t=n;if(!xo(e,n)){if(oi(e))throw Error(P(418));n=zn(t.nextSibling);var s=Ie;n&&xo(e,n)?vu(s,t):(e.flags=e.flags&-4097|2,ne=!1,Ie=e)}}else{if(oi(e))throw Error(P(418));e.flags=e.flags&-4097|2,ne=!1,Ie=e}}}function ko(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ie=e}function Xr(e){if(e!==Ie)return!1;if(!ne)return ko(e),ne=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!si(e.type,e.memoizedProps)),n&&(n=ze)){if(oi(e))throw xu(),Error(P(418));for(;n;)vu(e,n),n=zn(n.nextSibling)}if(ko(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){ze=zn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}ze=null}}else ze=Ie?zn(e.stateNode.nextSibling):null;return!0}function xu(){for(var e=ze;e;)e=zn(e.nextSibling)}function zt(){ze=Ie=null,ne=!1}function al(e){Je===null?Je=[e]:Je.push(e)}var Lp=xn.ReactCurrentBatchConfig;function Xt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(P(309));var s=t.stateNode}if(!s)throw Error(P(147,e));var a=s,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(l){var o=a.refs;l===null?delete o[i]:o[i]=l},n._stringRef=i,n)}if(typeof e!="string")throw Error(P(284));if(!t._owner)throw Error(P(290,e))}return e}function Yr(e,n){throw e=Object.prototype.toString.call(n),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function No(e){var n=e._init;return n(e._payload)}function ku(e){function n(p,f){if(e){var y=p.deletions;y===null?(p.deletions=[f],p.flags|=16):y.push(f)}}function t(p,f){if(!e)return null;for(;f!==null;)n(p,f),f=f.sibling;return null}function s(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function a(p,f){return p=Hn(p,f),p.index=0,p.sibling=null,p}function i(p,f,y){return p.index=y,e?(y=p.alternate,y!==null?(y=y.index,y<f?(p.flags|=2,f):y):(p.flags|=2,f)):(p.flags|=1048576,f)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function o(p,f,y,w){return f===null||f.tag!==6?(f=Ea(y,p.mode,w),f.return=p,f):(f=a(f,y),f.return=p,f)}function c(p,f,y,w){var j=y.type;return j===dt?d(p,f,y.props.children,w,y.key):f!==null&&(f.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===wn&&No(j)===f.type)?(w=a(f,y.props),w.ref=Xt(p,f,y),w.return=p,w):(w=ms(y.type,y.key,y.props,null,p.mode,w),w.ref=Xt(p,f,y),w.return=p,w)}function u(p,f,y,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==y.containerInfo||f.stateNode.implementation!==y.implementation?(f=Ra(y,p.mode,w),f.return=p,f):(f=a(f,y.children||[]),f.return=p,f)}function d(p,f,y,w,j){return f===null||f.tag!==7?(f=Yn(y,p.mode,w,j),f.return=p,f):(f=a(f,y),f.return=p,f)}function h(p,f,y){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ea(""+f,p.mode,y),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case $r:return y=ms(f.type,f.key,f.props,null,p.mode,y),y.ref=Xt(p,null,f),y.return=p,y;case ut:return f=Ra(f,p.mode,y),f.return=p,f;case wn:var w=f._init;return h(p,w(f._payload),y)}if(tr(f)||Wt(f))return f=Yn(f,p.mode,y,null),f.return=p,f;Yr(p,f)}return null}function m(p,f,y,w){var j=f!==null?f.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return j!==null?null:o(p,f,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case $r:return y.key===j?c(p,f,y,w):null;case ut:return y.key===j?u(p,f,y,w):null;case wn:return j=y._init,m(p,f,j(y._payload),w)}if(tr(y)||Wt(y))return j!==null?null:d(p,f,y,w,null);Yr(p,y)}return null}function N(p,f,y,w,j){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(y)||null,o(f,p,""+w,j);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case $r:return p=p.get(w.key===null?y:w.key)||null,c(f,p,w,j);case ut:return p=p.get(w.key===null?y:w.key)||null,u(f,p,w,j);case wn:var _=w._init;return N(p,f,y,_(w._payload),j)}if(tr(w)||Wt(w))return p=p.get(y)||null,d(f,p,w,j,null);Yr(f,w)}return null}function k(p,f,y,w){for(var j=null,_=null,S=f,M=f=0,A=null;S!==null&&M<y.length;M++){S.index>M?(A=S,S=null):A=S.sibling;var C=m(p,S,y[M],w);if(C===null){S===null&&(S=A);break}e&&S&&C.alternate===null&&n(p,S),f=i(C,f,M),_===null?j=C:_.sibling=C,_=C,S=A}if(M===y.length)return t(p,S),ne&&qn(p,M),j;if(S===null){for(;M<y.length;M++)S=h(p,y[M],w),S!==null&&(f=i(S,f,M),_===null?j=S:_.sibling=S,_=S);return ne&&qn(p,M),j}for(S=s(p,S);M<y.length;M++)A=N(S,p,M,y[M],w),A!==null&&(e&&A.alternate!==null&&S.delete(A.key===null?M:A.key),f=i(A,f,M),_===null?j=A:_.sibling=A,_=A);return e&&S.forEach(function($){return n(p,$)}),ne&&qn(p,M),j}function x(p,f,y,w){var j=Wt(y);if(typeof j!="function")throw Error(P(150));if(y=j.call(y),y==null)throw Error(P(151));for(var _=j=null,S=f,M=f=0,A=null,C=y.next();S!==null&&!C.done;M++,C=y.next()){S.index>M?(A=S,S=null):A=S.sibling;var $=m(p,S,C.value,w);if($===null){S===null&&(S=A);break}e&&S&&$.alternate===null&&n(p,S),f=i($,f,M),_===null?j=$:_.sibling=$,_=$,S=A}if(C.done)return t(p,S),ne&&qn(p,M),j;if(S===null){for(;!C.done;M++,C=y.next())C=h(p,C.value,w),C!==null&&(f=i(C,f,M),_===null?j=C:_.sibling=C,_=C);return ne&&qn(p,M),j}for(S=s(p,S);!C.done;M++,C=y.next())C=N(S,p,M,C.value,w),C!==null&&(e&&C.alternate!==null&&S.delete(C.key===null?M:C.key),f=i(C,f,M),_===null?j=C:_.sibling=C,_=C);return e&&S.forEach(function(J){return n(p,J)}),ne&&qn(p,M),j}function v(p,f,y,w){if(typeof y=="object"&&y!==null&&y.type===dt&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case $r:e:{for(var j=y.key,_=f;_!==null;){if(_.key===j){if(j=y.type,j===dt){if(_.tag===7){t(p,_.sibling),f=a(_,y.props.children),f.return=p,p=f;break e}}else if(_.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===wn&&No(j)===_.type){t(p,_.sibling),f=a(_,y.props),f.ref=Xt(p,_,y),f.return=p,p=f;break e}t(p,_);break}else n(p,_);_=_.sibling}y.type===dt?(f=Yn(y.props.children,p.mode,w,y.key),f.return=p,p=f):(w=ms(y.type,y.key,y.props,null,p.mode,w),w.ref=Xt(p,f,y),w.return=p,p=w)}return l(p);case ut:e:{for(_=y.key;f!==null;){if(f.key===_)if(f.tag===4&&f.stateNode.containerInfo===y.containerInfo&&f.stateNode.implementation===y.implementation){t(p,f.sibling),f=a(f,y.children||[]),f.return=p,p=f;break e}else{t(p,f);break}else n(p,f);f=f.sibling}f=Ra(y,p.mode,w),f.return=p,p=f}return l(p);case wn:return _=y._init,v(p,f,_(y._payload),w)}if(tr(y))return k(p,f,y,w);if(Wt(y))return x(p,f,y,w);Yr(p,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,f!==null&&f.tag===6?(t(p,f.sibling),f=a(f,y),f.return=p,p=f):(t(p,f),f=Ea(y,p.mode,w),f.return=p,p=f),l(p)):t(p,f)}return v}var It=ku(!0),Nu=ku(!1),Es=Bn(null),Rs=null,xt=null,il=null;function ll(){il=xt=Rs=null}function ol(e){var n=Es.current;ee(Es),e._currentValue=n}function ui(e,n,t){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===t)break;e=e.return}}function Rt(e,n){Rs=e,il=xt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Ee=!0),e.firstContext=null)}function Be(e){var n=e._currentValue;if(il!==e)if(e={context:e,memoizedValue:n,next:null},xt===null){if(Rs===null)throw Error(P(308));xt=e,Rs.dependencies={lanes:0,firstContext:e}}else xt=xt.next=e;return n}var Qn=null;function cl(e){Qn===null?Qn=[e]:Qn.push(e)}function ju(e,n,t,s){var a=n.interleaved;return a===null?(t.next=t,cl(n)):(t.next=a.next,a.next=t),n.interleaved=t,yn(e,s)}function yn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Sn=!1;function ul(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function In(e,n,t){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,G&2){var a=s.pending;return a===null?n.next=n:(n.next=a.next,a.next=n),s.pending=n,yn(e,t)}return a=s.interleaved,a===null?(n.next=n,cl(s)):(n.next=a.next,a.next=n),s.interleaved=n,yn(e,t)}function cs(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var s=n.lanes;s&=e.pendingLanes,t|=s,n.lanes=t,Gi(e,t)}}function jo(e,n){var t=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,t===s)){var a=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?a=i=l:i=i.next=l,t=t.next}while(t!==null);i===null?a=i=n:i=i.next=n}else a=i=n;t={baseState:s.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:s.shared,effects:s.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Os(e,n,t,s){var a=e.updateQueue;Sn=!1;var i=a.firstBaseUpdate,l=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var c=o,u=c.next;c.next=null,l===null?i=u:l.next=u,l=c;var d=e.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==l&&(o===null?d.firstBaseUpdate=u:o.next=u,d.lastBaseUpdate=c))}if(i!==null){var h=a.baseState;l=0,d=u=c=null,o=i;do{var m=o.lane,N=o.eventTime;if((s&m)===m){d!==null&&(d=d.next={eventTime:N,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var k=e,x=o;switch(m=n,N=t,x.tag){case 1:if(k=x.payload,typeof k=="function"){h=k.call(N,h,m);break e}h=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=x.payload,m=typeof k=="function"?k.call(N,h,m):k,m==null)break e;h=se({},h,m);break e;case 2:Sn=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,m=a.effects,m===null?a.effects=[o]:m.push(o))}else N={eventTime:N,lane:m,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(u=d=N,c=h):d=d.next=N,l|=m;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;m=o,o=m.next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}while(!0);if(d===null&&(c=h),a.baseState=c,a.firstBaseUpdate=u,a.lastBaseUpdate=d,n=a.shared.interleaved,n!==null){a=n;do l|=a.lane,a=a.next;while(a!==n)}else i===null&&(a.shared.lanes=0);rt|=l,e.lanes=l,e.memoizedState=h}}function wo(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var s=e[n],a=s.callback;if(a!==null){if(s.callback=null,s=t,typeof a!="function")throw Error(P(191,a));a.call(s)}}}var Vr={},ln=Bn(Vr),br=Bn(Vr),Tr=Bn(Vr);function Gn(e){if(e===Vr)throw Error(P(174));return e}function dl(e,n){switch(X(Tr,n),X(br,e),X(ln,Vr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ua(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Ua(n,e)}ee(ln),X(ln,n)}function Mt(){ee(ln),ee(br),ee(Tr)}function Su(e){Gn(Tr.current);var n=Gn(ln.current),t=Ua(n,e.type);n!==t&&(X(br,e),X(ln,t))}function hl(e){br.current===e&&(ee(ln),ee(br))}var te=Bn(0);function _s(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var wa=[];function pl(){for(var e=0;e<wa.length;e++)wa[e]._workInProgressVersionPrimary=null;wa.length=0}var us=xn.ReactCurrentDispatcher,Sa=xn.ReactCurrentBatchConfig,tt=0,re=null,ue=null,he=null,Ps=!1,ur=!1,Cr=0,Ep=0;function xe(){throw Error(P(321))}function fl(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!en(e[t],n[t]))return!1;return!0}function ml(e,n,t,s,a,i){if(tt=i,re=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,us.current=e===null||e.memoizedState===null?Pp:zp,e=t(s,a),ur){i=0;do{if(ur=!1,Cr=0,25<=i)throw Error(P(301));i+=1,he=ue=null,n.updateQueue=null,us.current=Ip,e=t(s,a)}while(ur)}if(us.current=zs,n=ue!==null&&ue.next!==null,tt=0,he=ue=re=null,Ps=!1,n)throw Error(P(300));return e}function yl(){var e=Cr!==0;return Cr=0,e}function rn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?re.memoizedState=he=e:he=he.next=e,he}function Ue(){if(ue===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var n=he===null?re.memoizedState:he.next;if(n!==null)he=n,ue=e;else{if(e===null)throw Error(P(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},he===null?re.memoizedState=he=e:he=he.next=e}return he}function Lr(e,n){return typeof n=="function"?n(e):n}function ba(e){var n=Ue(),t=n.queue;if(t===null)throw Error(P(311));t.lastRenderedReducer=e;var s=ue,a=s.baseQueue,i=t.pending;if(i!==null){if(a!==null){var l=a.next;a.next=i.next,i.next=l}s.baseQueue=a=i,t.pending=null}if(a!==null){i=a.next,s=s.baseState;var o=l=null,c=null,u=i;do{var d=u.lane;if((tt&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),s=u.hasEagerState?u.eagerState:e(s,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(o=c=h,l=s):c=c.next=h,re.lanes|=d,rt|=d}u=u.next}while(u!==null&&u!==i);c===null?l=s:c.next=o,en(s,n.memoizedState)||(Ee=!0),n.memoizedState=s,n.baseState=l,n.baseQueue=c,t.lastRenderedState=s}if(e=t.interleaved,e!==null){a=e;do i=a.lane,re.lanes|=i,rt|=i,a=a.next;while(a!==e)}else a===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Ta(e){var n=Ue(),t=n.queue;if(t===null)throw Error(P(311));t.lastRenderedReducer=e;var s=t.dispatch,a=t.pending,i=n.memoizedState;if(a!==null){t.pending=null;var l=a=a.next;do i=e(i,l.action),l=l.next;while(l!==a);en(i,n.memoizedState)||(Ee=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,s]}function bu(){}function Tu(e,n){var t=re,s=Ue(),a=n(),i=!en(s.memoizedState,a);if(i&&(s.memoizedState=a,Ee=!0),s=s.queue,gl(Eu.bind(null,t,s,e),[e]),s.getSnapshot!==n||i||he!==null&&he.memoizedState.tag&1){if(t.flags|=2048,Er(9,Lu.bind(null,t,s,a,n),void 0,null),fe===null)throw Error(P(349));tt&30||Cu(t,n,a)}return a}function Cu(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=re.updateQueue,n===null?(n={lastEffect:null,stores:null},re.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Lu(e,n,t,s){n.value=t,n.getSnapshot=s,Ru(n)&&Ou(e)}function Eu(e,n,t){return t(function(){Ru(n)&&Ou(e)})}function Ru(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!en(e,t)}catch{return!0}}function Ou(e){var n=yn(e,1);n!==null&&Ye(n,e,1,-1)}function So(e){var n=rn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Lr,lastRenderedState:e},n.queue=e,e=e.dispatch=_p.bind(null,re,e),[n.memoizedState,e]}function Er(e,n,t,s){return e={tag:e,create:n,destroy:t,deps:s,next:null},n=re.updateQueue,n===null?(n={lastEffect:null,stores:null},re.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(s=t.next,t.next=e,e.next=s,n.lastEffect=e)),e}function _u(){return Ue().memoizedState}function ds(e,n,t,s){var a=rn();re.flags|=e,a.memoizedState=Er(1|n,t,void 0,s===void 0?null:s)}function Gs(e,n,t,s){var a=Ue();s=s===void 0?null:s;var i=void 0;if(ue!==null){var l=ue.memoizedState;if(i=l.destroy,s!==null&&fl(s,l.deps)){a.memoizedState=Er(n,t,i,s);return}}re.flags|=e,a.memoizedState=Er(1|n,t,i,s)}function bo(e,n){return ds(8390656,8,e,n)}function gl(e,n){return Gs(2048,8,e,n)}function Pu(e,n){return Gs(4,2,e,n)}function zu(e,n){return Gs(4,4,e,n)}function Iu(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Mu(e,n,t){return t=t!=null?t.concat([e]):null,Gs(4,4,Iu.bind(null,n,e),t)}function vl(){}function Vu(e,n){var t=Ue();n=n===void 0?null:n;var s=t.memoizedState;return s!==null&&n!==null&&fl(n,s[1])?s[0]:(t.memoizedState=[e,n],e)}function Hu(e,n){var t=Ue();n=n===void 0?null:n;var s=t.memoizedState;return s!==null&&n!==null&&fl(n,s[1])?s[0]:(e=e(),t.memoizedState=[e,n],e)}function Du(e,n,t){return tt&21?(en(t,n)||(t=Uc(),re.lanes|=t,rt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Ee=!0),e.memoizedState=t)}function Rp(e,n){var t=Z;Z=t!==0&&4>t?t:4,e(!0);var s=Sa.transition;Sa.transition={};try{e(!1),n()}finally{Z=t,Sa.transition=s}}function Fu(){return Ue().memoizedState}function Op(e,n,t){var s=Vn(e);if(t={lane:s,action:t,hasEagerState:!1,eagerState:null,next:null},Au(e))$u(n,t);else if(t=ju(e,n,t,s),t!==null){var a=be();Ye(t,e,s,a),Bu(t,n,s)}}function _p(e,n,t){var s=Vn(e),a={lane:s,action:t,hasEagerState:!1,eagerState:null,next:null};if(Au(e))$u(n,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var l=n.lastRenderedState,o=i(l,t);if(a.hasEagerState=!0,a.eagerState=o,en(o,l)){var c=n.interleaved;c===null?(a.next=a,cl(n)):(a.next=c.next,c.next=a),n.interleaved=a;return}}catch{}finally{}t=ju(e,n,a,s),t!==null&&(a=be(),Ye(t,e,s,a),Bu(t,n,s))}}function Au(e){var n=e.alternate;return e===re||n!==null&&n===re}function $u(e,n){ur=Ps=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Bu(e,n,t){if(t&4194240){var s=n.lanes;s&=e.pendingLanes,t|=s,n.lanes=t,Gi(e,t)}}var zs={readContext:Be,useCallback:xe,useContext:xe,useEffect:xe,useImperativeHandle:xe,useInsertionEffect:xe,useLayoutEffect:xe,useMemo:xe,useReducer:xe,useRef:xe,useState:xe,useDebugValue:xe,useDeferredValue:xe,useTransition:xe,useMutableSource:xe,useSyncExternalStore:xe,useId:xe,unstable_isNewReconciler:!1},Pp={readContext:Be,useCallback:function(e,n){return rn().memoizedState=[e,n===void 0?null:n],e},useContext:Be,useEffect:bo,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,ds(4194308,4,Iu.bind(null,n,e),t)},useLayoutEffect:function(e,n){return ds(4194308,4,e,n)},useInsertionEffect:function(e,n){return ds(4,2,e,n)},useMemo:function(e,n){var t=rn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var s=rn();return n=t!==void 0?t(n):n,s.memoizedState=s.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},s.queue=e,e=e.dispatch=Op.bind(null,re,e),[s.memoizedState,e]},useRef:function(e){var n=rn();return e={current:e},n.memoizedState=e},useState:So,useDebugValue:vl,useDeferredValue:function(e){return rn().memoizedState=e},useTransition:function(){var e=So(!1),n=e[0];return e=Rp.bind(null,e[1]),rn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var s=re,a=rn();if(ne){if(t===void 0)throw Error(P(407));t=t()}else{if(t=n(),fe===null)throw Error(P(349));tt&30||Cu(s,n,t)}a.memoizedState=t;var i={value:t,getSnapshot:n};return a.queue=i,bo(Eu.bind(null,s,i,e),[e]),s.flags|=2048,Er(9,Lu.bind(null,s,i,t,n),void 0,null),t},useId:function(){var e=rn(),n=fe.identifierPrefix;if(ne){var t=hn,s=dn;t=(s&~(1<<32-Xe(s)-1)).toString(32)+t,n=":"+n+"R"+t,t=Cr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Ep++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},zp={readContext:Be,useCallback:Vu,useContext:Be,useEffect:gl,useImperativeHandle:Mu,useInsertionEffect:Pu,useLayoutEffect:zu,useMemo:Hu,useReducer:ba,useRef:_u,useState:function(){return ba(Lr)},useDebugValue:vl,useDeferredValue:function(e){var n=Ue();return Du(n,ue.memoizedState,e)},useTransition:function(){var e=ba(Lr)[0],n=Ue().memoizedState;return[e,n]},useMutableSource:bu,useSyncExternalStore:Tu,useId:Fu,unstable_isNewReconciler:!1},Ip={readContext:Be,useCallback:Vu,useContext:Be,useEffect:gl,useImperativeHandle:Mu,useInsertionEffect:Pu,useLayoutEffect:zu,useMemo:Hu,useReducer:Ta,useRef:_u,useState:function(){return Ta(Lr)},useDebugValue:vl,useDeferredValue:function(e){var n=Ue();return ue===null?n.memoizedState=e:Du(n,ue.memoizedState,e)},useTransition:function(){var e=Ta(Lr)[0],n=Ue().memoizedState;return[e,n]},useMutableSource:bu,useSyncExternalStore:Tu,useId:Fu,unstable_isNewReconciler:!1};function Ge(e,n){if(e&&e.defaultProps){n=se({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function di(e,n,t,s){n=e.memoizedState,t=t(s,n),t=t==null?n:se({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Zs={isMounted:function(e){return(e=e._reactInternals)?it(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var s=be(),a=Vn(e),i=pn(s,a);i.payload=n,t!=null&&(i.callback=t),n=In(e,i,a),n!==null&&(Ye(n,e,a,s),cs(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var s=be(),a=Vn(e),i=pn(s,a);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=In(e,i,a),n!==null&&(Ye(n,e,a,s),cs(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=be(),s=Vn(e),a=pn(t,s);a.tag=2,n!=null&&(a.callback=n),n=In(e,a,s),n!==null&&(Ye(n,e,s,t),cs(n,e,s))}};function To(e,n,t,s,a,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,i,l):n.prototype&&n.prototype.isPureReactComponent?!Nr(t,s)||!Nr(a,i):!0}function Uu(e,n,t){var s=!1,a=An,i=n.contextType;return typeof i=="object"&&i!==null?i=Be(i):(a=Oe(n)?et:je.current,s=n.contextTypes,i=(s=s!=null)?Pt(e,a):An),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Zs,e.stateNode=n,n._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),n}function Co(e,n,t,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,s),n.state!==e&&Zs.enqueueReplaceState(n,n.state,null)}function hi(e,n,t,s){var a=e.stateNode;a.props=t,a.state=e.memoizedState,a.refs={},ul(e);var i=n.contextType;typeof i=="object"&&i!==null?a.context=Be(i):(i=Oe(n)?et:je.current,a.context=Pt(e,i)),a.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(di(e,n,i,t),a.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(n=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),n!==a.state&&Zs.enqueueReplaceState(a,a.state,null),Os(e,t,a,s),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Vt(e,n){try{var t="",s=n;do t+=ch(s),s=s.return;while(s);var a=t}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:a,digest:null}}function Ca(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function pi(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Mp=typeof WeakMap=="function"?WeakMap:Map;function qu(e,n,t){t=pn(-1,t),t.tag=3,t.payload={element:null};var s=n.value;return t.callback=function(){Ms||(Ms=!0,wi=s),pi(e,n)},t}function Ku(e,n,t){t=pn(-1,t),t.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var a=n.value;t.payload=function(){return s(a)},t.callback=function(){pi(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){pi(e,n),typeof s!="function"&&(Mn===null?Mn=new Set([this]):Mn.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),t}function Lo(e,n,t){var s=e.pingCache;if(s===null){s=e.pingCache=new Mp;var a=new Set;s.set(n,a)}else a=s.get(n),a===void 0&&(a=new Set,s.set(n,a));a.has(t)||(a.add(t),e=Zp.bind(null,e,n,t),n.then(e,e))}function Eo(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Ro(e,n,t,s,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=pn(-1,1),n.tag=2,In(t,n,1))),t.lanes|=1),e)}var Vp=xn.ReactCurrentOwner,Ee=!1;function Se(e,n,t,s){n.child=e===null?Nu(n,null,t,s):It(n,e.child,t,s)}function Oo(e,n,t,s,a){t=t.render;var i=n.ref;return Rt(n,a),s=ml(e,n,t,s,i,a),t=yl(),e!==null&&!Ee?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,gn(e,n,a)):(ne&&t&&rl(n),n.flags|=1,Se(e,n,s,a),n.child)}function _o(e,n,t,s,a){if(e===null){var i=t.type;return typeof i=="function"&&!Tl(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,Wu(e,n,i,s,a)):(e=ms(t.type,null,s,n,n.mode,a),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&a)){var l=i.memoizedProps;if(t=t.compare,t=t!==null?t:Nr,t(l,s)&&e.ref===n.ref)return gn(e,n,a)}return n.flags|=1,e=Hn(i,s),e.ref=n.ref,e.return=n,n.child=e}function Wu(e,n,t,s,a){if(e!==null){var i=e.memoizedProps;if(Nr(i,s)&&e.ref===n.ref)if(Ee=!1,n.pendingProps=s=i,(e.lanes&a)!==0)e.flags&131072&&(Ee=!0);else return n.lanes=e.lanes,gn(e,n,a)}return fi(e,n,t,s,a)}function Qu(e,n,t){var s=n.pendingProps,a=s.children,i=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(Nt,Pe),Pe|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,X(Nt,Pe),Pe|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=i!==null?i.baseLanes:t,X(Nt,Pe),Pe|=s}else i!==null?(s=i.baseLanes|t,n.memoizedState=null):s=t,X(Nt,Pe),Pe|=s;return Se(e,n,a,t),n.child}function Gu(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function fi(e,n,t,s,a){var i=Oe(t)?et:je.current;return i=Pt(n,i),Rt(n,a),t=ml(e,n,t,s,i,a),s=yl(),e!==null&&!Ee?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,gn(e,n,a)):(ne&&s&&rl(n),n.flags|=1,Se(e,n,t,a),n.child)}function Po(e,n,t,s,a){if(Oe(t)){var i=!0;Ts(n)}else i=!1;if(Rt(n,a),n.stateNode===null)hs(e,n),Uu(n,t,s),hi(n,t,s,a),s=!0;else if(e===null){var l=n.stateNode,o=n.memoizedProps;l.props=o;var c=l.context,u=t.contextType;typeof u=="object"&&u!==null?u=Be(u):(u=Oe(t)?et:je.current,u=Pt(n,u));var d=t.getDerivedStateFromProps,h=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==s||c!==u)&&Co(n,l,s,u),Sn=!1;var m=n.memoizedState;l.state=m,Os(n,s,l,a),c=n.memoizedState,o!==s||m!==c||Re.current||Sn?(typeof d=="function"&&(di(n,t,d,s),c=n.memoizedState),(o=Sn||To(n,t,o,s,m,c,u))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=c),l.props=s,l.state=c,l.context=u,s=o):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{l=n.stateNode,wu(e,n),o=n.memoizedProps,u=n.type===n.elementType?o:Ge(n.type,o),l.props=u,h=n.pendingProps,m=l.context,c=t.contextType,typeof c=="object"&&c!==null?c=Be(c):(c=Oe(t)?et:je.current,c=Pt(n,c));var N=t.getDerivedStateFromProps;(d=typeof N=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==h||m!==c)&&Co(n,l,s,c),Sn=!1,m=n.memoizedState,l.state=m,Os(n,s,l,a);var k=n.memoizedState;o!==h||m!==k||Re.current||Sn?(typeof N=="function"&&(di(n,t,N,s),k=n.memoizedState),(u=Sn||To(n,t,u,s,m,k,c)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(s,k,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(s,k,c)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=k),l.props=s,l.state=k,l.context=c,s=u):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),s=!1)}return mi(e,n,t,s,i,a)}function mi(e,n,t,s,a,i){Gu(e,n);var l=(n.flags&128)!==0;if(!s&&!l)return a&&vo(n,t,!1),gn(e,n,i);s=n.stateNode,Vp.current=n;var o=l&&typeof t.getDerivedStateFromError!="function"?null:s.render();return n.flags|=1,e!==null&&l?(n.child=It(n,e.child,null,i),n.child=It(n,null,o,i)):Se(e,n,o,i),n.memoizedState=s.state,a&&vo(n,t,!0),n.child}function Zu(e){var n=e.stateNode;n.pendingContext?go(e,n.pendingContext,n.pendingContext!==n.context):n.context&&go(e,n.context,!1),dl(e,n.containerInfo)}function zo(e,n,t,s,a){return zt(),al(a),n.flags|=256,Se(e,n,t,s),n.child}var yi={dehydrated:null,treeContext:null,retryLane:0};function gi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ju(e,n,t){var s=n.pendingProps,a=te.current,i=!1,l=(n.flags&128)!==0,o;if((o=l)||(o=e!==null&&e.memoizedState===null?!1:(a&2)!==0),o?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),X(te,a&1),e===null)return ci(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(l=s.children,e=s.fallback,i?(s=n.mode,i=n.child,l={mode:"hidden",children:l},!(s&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Ys(l,s,0,null),e=Yn(e,s,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=gi(t),n.memoizedState=yi,e):xl(n,l));if(a=e.memoizedState,a!==null&&(o=a.dehydrated,o!==null))return Hp(e,n,l,s,o,a,t);if(i){i=s.fallback,l=n.mode,a=e.child,o=a.sibling;var c={mode:"hidden",children:s.children};return!(l&1)&&n.child!==a?(s=n.child,s.childLanes=0,s.pendingProps=c,n.deletions=null):(s=Hn(a,c),s.subtreeFlags=a.subtreeFlags&14680064),o!==null?i=Hn(o,i):(i=Yn(i,l,t,null),i.flags|=2),i.return=n,s.return=n,s.sibling=i,n.child=s,s=i,i=n.child,l=e.child.memoizedState,l=l===null?gi(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~t,n.memoizedState=yi,s}return i=e.child,e=i.sibling,s=Hn(i,{mode:"visible",children:s.children}),!(n.mode&1)&&(s.lanes=t),s.return=n,s.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=s,n.memoizedState=null,s}function xl(e,n){return n=Ys({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function es(e,n,t,s){return s!==null&&al(s),It(n,e.child,null,t),e=xl(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Hp(e,n,t,s,a,i,l){if(t)return n.flags&256?(n.flags&=-257,s=Ca(Error(P(422))),es(e,n,l,s)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=s.fallback,a=n.mode,s=Ys({mode:"visible",children:s.children},a,0,null),i=Yn(i,a,l,null),i.flags|=2,s.return=n,i.return=n,s.sibling=i,n.child=s,n.mode&1&&It(n,e.child,null,l),n.child.memoizedState=gi(l),n.memoizedState=yi,i);if(!(n.mode&1))return es(e,n,l,null);if(a.data==="$!"){if(s=a.nextSibling&&a.nextSibling.dataset,s)var o=s.dgst;return s=o,i=Error(P(419)),s=Ca(i,s,void 0),es(e,n,l,s)}if(o=(l&e.childLanes)!==0,Ee||o){if(s=fe,s!==null){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(s.suspendedLanes|l)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,yn(e,a),Ye(s,e,a,-1))}return bl(),s=Ca(Error(P(421))),es(e,n,l,s)}return a.data==="$?"?(n.flags|=128,n.child=e.child,n=Jp.bind(null,e),a._reactRetry=n,null):(e=i.treeContext,ze=zn(a.nextSibling),Ie=n,ne=!0,Je=null,e!==null&&(De[Fe++]=dn,De[Fe++]=hn,De[Fe++]=nt,dn=e.id,hn=e.overflow,nt=n),n=xl(n,s.children),n.flags|=4096,n)}function Io(e,n,t){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),ui(e.return,n,t)}function La(e,n,t,s,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:t,tailMode:a}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=s,i.tail=t,i.tailMode=a)}function Xu(e,n,t){var s=n.pendingProps,a=s.revealOrder,i=s.tail;if(Se(e,n,s.children,t),s=te.current,s&2)s=s&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Io(e,t,n);else if(e.tag===19)Io(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(X(te,s),!(n.mode&1))n.memoizedState=null;else switch(a){case"forwards":for(t=n.child,a=null;t!==null;)e=t.alternate,e!==null&&_s(e)===null&&(a=t),t=t.sibling;t=a,t===null?(a=n.child,n.child=null):(a=t.sibling,t.sibling=null),La(n,!1,a,t,i);break;case"backwards":for(t=null,a=n.child,n.child=null;a!==null;){if(e=a.alternate,e!==null&&_s(e)===null){n.child=a;break}e=a.sibling,a.sibling=t,t=a,a=e}La(n,!0,t,null,i);break;case"together":La(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function hs(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function gn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),rt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(P(153));if(n.child!==null){for(e=n.child,t=Hn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Hn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Dp(e,n,t){switch(n.tag){case 3:Zu(n),zt();break;case 5:Su(n);break;case 1:Oe(n.type)&&Ts(n);break;case 4:dl(n,n.stateNode.containerInfo);break;case 10:var s=n.type._context,a=n.memoizedProps.value;X(Es,s._currentValue),s._currentValue=a;break;case 13:if(s=n.memoizedState,s!==null)return s.dehydrated!==null?(X(te,te.current&1),n.flags|=128,null):t&n.child.childLanes?Ju(e,n,t):(X(te,te.current&1),e=gn(e,n,t),e!==null?e.sibling:null);X(te,te.current&1);break;case 19:if(s=(t&n.childLanes)!==0,e.flags&128){if(s)return Xu(e,n,t);n.flags|=128}if(a=n.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),X(te,te.current),s)break;return null;case 22:case 23:return n.lanes=0,Qu(e,n,t)}return gn(e,n,t)}var Yu,vi,ed,nd;Yu=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};vi=function(){};ed=function(e,n,t,s){var a=e.memoizedProps;if(a!==s){e=n.stateNode,Gn(ln.current);var i=null;switch(t){case"input":a=Fa(e,a),s=Fa(e,s),i=[];break;case"select":a=se({},a,{value:void 0}),s=se({},s,{value:void 0}),i=[];break;case"textarea":a=Ba(e,a),s=Ba(e,s),i=[];break;default:typeof a.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Ss)}qa(t,s);var l;t=null;for(u in a)if(!s.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var o=a[u];for(l in o)o.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(fr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in s){var c=s[u];if(o=a!=null?a[u]:void 0,s.hasOwnProperty(u)&&c!==o&&(c!=null||o!=null))if(u==="style")if(o){for(l in o)!o.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in c)c.hasOwnProperty(l)&&o[l]!==c[l]&&(t||(t={}),t[l]=c[l])}else t||(i||(i=[]),i.push(u,t)),t=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(fr.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Y("scroll",e),i||o===c||(i=[])):(i=i||[]).push(u,c))}t&&(i=i||[]).push("style",t);var u=i;(n.updateQueue=u)&&(n.flags|=4)}};nd=function(e,n,t,s){t!==s&&(n.flags|=4)};function Yt(e,n){if(!ne)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var s=null;t!==null;)t.alternate!==null&&(s=t),t=t.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,s=0;if(n)for(var a=e.child;a!==null;)t|=a.lanes|a.childLanes,s|=a.subtreeFlags&14680064,s|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)t|=a.lanes|a.childLanes,s|=a.subtreeFlags,s|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=s,e.childLanes=t,n}function Fp(e,n,t){var s=n.pendingProps;switch(sl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(n),null;case 1:return Oe(n.type)&&bs(),ke(n),null;case 3:return s=n.stateNode,Mt(),ee(Re),ee(je),pl(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Xr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Je!==null&&(Ti(Je),Je=null))),vi(e,n),ke(n),null;case 5:hl(n);var a=Gn(Tr.current);if(t=n.type,e!==null&&n.stateNode!=null)ed(e,n,t,s,a),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!s){if(n.stateNode===null)throw Error(P(166));return ke(n),null}if(e=Gn(ln.current),Xr(n)){s=n.stateNode,t=n.type;var i=n.memoizedProps;switch(s[sn]=n,s[Sr]=i,e=(n.mode&1)!==0,t){case"dialog":Y("cancel",s),Y("close",s);break;case"iframe":case"object":case"embed":Y("load",s);break;case"video":case"audio":for(a=0;a<sr.length;a++)Y(sr[a],s);break;case"source":Y("error",s);break;case"img":case"image":case"link":Y("error",s),Y("load",s);break;case"details":Y("toggle",s);break;case"input":Bl(s,i),Y("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!i.multiple},Y("invalid",s);break;case"textarea":ql(s,i),Y("invalid",s)}qa(t,i),a=null;for(var l in i)if(i.hasOwnProperty(l)){var o=i[l];l==="children"?typeof o=="string"?s.textContent!==o&&(i.suppressHydrationWarning!==!0&&Jr(s.textContent,o,e),a=["children",o]):typeof o=="number"&&s.textContent!==""+o&&(i.suppressHydrationWarning!==!0&&Jr(s.textContent,o,e),a=["children",""+o]):fr.hasOwnProperty(l)&&o!=null&&l==="onScroll"&&Y("scroll",s)}switch(t){case"input":Br(s),Ul(s,i,!0);break;case"textarea":Br(s),Kl(s);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(s.onclick=Ss)}s=a,n.updateQueue=s,s!==null&&(n.flags|=4)}else{l=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ec(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=l.createElement(t,{is:s.is}):(e=l.createElement(t),t==="select"&&(l=e,s.multiple?l.multiple=!0:s.size&&(l.size=s.size))):e=l.createElementNS(e,t),e[sn]=n,e[Sr]=s,Yu(e,n,!1,!1),n.stateNode=e;e:{switch(l=Ka(t,s),t){case"dialog":Y("cancel",e),Y("close",e),a=s;break;case"iframe":case"object":case"embed":Y("load",e),a=s;break;case"video":case"audio":for(a=0;a<sr.length;a++)Y(sr[a],e);a=s;break;case"source":Y("error",e),a=s;break;case"img":case"image":case"link":Y("error",e),Y("load",e),a=s;break;case"details":Y("toggle",e),a=s;break;case"input":Bl(e,s),a=Fa(e,s),Y("invalid",e);break;case"option":a=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},a=se({},s,{value:void 0}),Y("invalid",e);break;case"textarea":ql(e,s),a=Ba(e,s),Y("invalid",e);break;default:a=s}qa(t,a),o=a;for(i in o)if(o.hasOwnProperty(i)){var c=o[i];i==="style"?_c(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Rc(e,c)):i==="children"?typeof c=="string"?(t!=="textarea"||c!=="")&&mr(e,c):typeof c=="number"&&mr(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(fr.hasOwnProperty(i)?c!=null&&i==="onScroll"&&Y("scroll",e):c!=null&&Bi(e,i,c,l))}switch(t){case"input":Br(e),Ul(e,s,!1);break;case"textarea":Br(e),Kl(e);break;case"option":s.value!=null&&e.setAttribute("value",""+Fn(s.value));break;case"select":e.multiple=!!s.multiple,i=s.value,i!=null?Tt(e,!!s.multiple,i,!1):s.defaultValue!=null&&Tt(e,!!s.multiple,s.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Ss)}switch(t){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ke(n),null;case 6:if(e&&n.stateNode!=null)nd(e,n,e.memoizedProps,s);else{if(typeof s!="string"&&n.stateNode===null)throw Error(P(166));if(t=Gn(Tr.current),Gn(ln.current),Xr(n)){if(s=n.stateNode,t=n.memoizedProps,s[sn]=n,(i=s.nodeValue!==t)&&(e=Ie,e!==null))switch(e.tag){case 3:Jr(s.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Jr(s.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else s=(t.nodeType===9?t:t.ownerDocument).createTextNode(s),s[sn]=n,n.stateNode=s}return ke(n),null;case 13:if(ee(te),s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ne&&ze!==null&&n.mode&1&&!(n.flags&128))xu(),zt(),n.flags|=98560,i=!1;else if(i=Xr(n),s!==null&&s.dehydrated!==null){if(e===null){if(!i)throw Error(P(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(P(317));i[sn]=n}else zt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ke(n),i=!1}else Je!==null&&(Ti(Je),Je=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(n.child.flags|=8192,n.mode&1&&(e===null||te.current&1?de===0&&(de=3):bl())),n.updateQueue!==null&&(n.flags|=4),ke(n),null);case 4:return Mt(),vi(e,n),e===null&&jr(n.stateNode.containerInfo),ke(n),null;case 10:return ol(n.type._context),ke(n),null;case 17:return Oe(n.type)&&bs(),ke(n),null;case 19:if(ee(te),i=n.memoizedState,i===null)return ke(n),null;if(s=(n.flags&128)!==0,l=i.rendering,l===null)if(s)Yt(i,!1);else{if(de!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(l=_s(e),l!==null){for(n.flags|=128,Yt(i,!1),s=l.updateQueue,s!==null&&(n.updateQueue=s,n.flags|=4),n.subtreeFlags=0,s=t,t=n.child;t!==null;)i=t,e=s,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return X(te,te.current&1|2),n.child}e=e.sibling}i.tail!==null&&ie()>Ht&&(n.flags|=128,s=!0,Yt(i,!1),n.lanes=4194304)}else{if(!s)if(e=_s(l),e!==null){if(n.flags|=128,s=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Yt(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!ne)return ke(n),null}else 2*ie()-i.renderingStartTime>Ht&&t!==1073741824&&(n.flags|=128,s=!0,Yt(i,!1),n.lanes=4194304);i.isBackwards?(l.sibling=n.child,n.child=l):(t=i.last,t!==null?t.sibling=l:n.child=l,i.last=l)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=ie(),n.sibling=null,t=te.current,X(te,s?t&1|2:t&1),n):(ke(n),null);case 22:case 23:return Sl(),s=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(n.flags|=8192),s&&n.mode&1?Pe&1073741824&&(ke(n),n.subtreeFlags&6&&(n.flags|=8192)):ke(n),null;case 24:return null;case 25:return null}throw Error(P(156,n.tag))}function Ap(e,n){switch(sl(n),n.tag){case 1:return Oe(n.type)&&bs(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Mt(),ee(Re),ee(je),pl(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return hl(n),null;case 13:if(ee(te),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(P(340));zt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ee(te),null;case 4:return Mt(),null;case 10:return ol(n.type._context),null;case 22:case 23:return Sl(),null;case 24:return null;default:return null}}var ns=!1,Ne=!1,$p=typeof WeakSet=="function"?WeakSet:Set,F=null;function kt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(s){ae(e,n,s)}else t.current=null}function xi(e,n,t){try{t()}catch(s){ae(e,n,s)}}var Mo=!1;function Bp(e,n){if(ti=Ns,e=iu(),tl(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var s=t.getSelection&&t.getSelection();if(s&&s.rangeCount!==0){t=s.anchorNode;var a=s.anchorOffset,i=s.focusNode;s=s.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var l=0,o=-1,c=-1,u=0,d=0,h=e,m=null;n:for(;;){for(var N;h!==t||a!==0&&h.nodeType!==3||(o=l+a),h!==i||s!==0&&h.nodeType!==3||(c=l+s),h.nodeType===3&&(l+=h.nodeValue.length),(N=h.firstChild)!==null;)m=h,h=N;for(;;){if(h===e)break n;if(m===t&&++u===a&&(o=l),m===i&&++d===s&&(c=l),(N=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=N}t=o===-1||c===-1?null:{start:o,end:c}}else t=null}t=t||{start:0,end:0}}else t=null;for(ri={focusedElem:e,selectionRange:t},Ns=!1,F=n;F!==null;)if(n=F,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,F=e;else for(;F!==null;){n=F;try{var k=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var x=k.memoizedProps,v=k.memoizedState,p=n.stateNode,f=p.getSnapshotBeforeUpdate(n.elementType===n.type?x:Ge(n.type,x),v);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var y=n.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(w){ae(n,n.return,w)}if(e=n.sibling,e!==null){e.return=n.return,F=e;break}F=n.return}return k=Mo,Mo=!1,k}function dr(e,n,t){var s=n.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&xi(n,t,i)}a=a.next}while(a!==s)}}function Js(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var s=t.create;t.destroy=s()}t=t.next}while(t!==n)}}function ki(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function td(e){var n=e.alternate;n!==null&&(e.alternate=null,td(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[sn],delete n[Sr],delete n[ii],delete n[bp],delete n[Tp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function rd(e){return e.tag===5||e.tag===3||e.tag===4}function Vo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||rd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ni(e,n,t){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Ss));else if(s!==4&&(e=e.child,e!==null))for(Ni(e,n,t),e=e.sibling;e!==null;)Ni(e,n,t),e=e.sibling}function ji(e,n,t){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(ji(e,n,t),e=e.sibling;e!==null;)ji(e,n,t),e=e.sibling}var ye=null,Ze=!1;function jn(e,n,t){for(t=t.child;t!==null;)sd(e,n,t),t=t.sibling}function sd(e,n,t){if(an&&typeof an.onCommitFiberUnmount=="function")try{an.onCommitFiberUnmount(Bs,t)}catch{}switch(t.tag){case 5:Ne||kt(t,n);case 6:var s=ye,a=Ze;ye=null,jn(e,n,t),ye=s,Ze=a,ye!==null&&(Ze?(e=ye,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ye.removeChild(t.stateNode));break;case 18:ye!==null&&(Ze?(e=ye,t=t.stateNode,e.nodeType===8?Na(e.parentNode,t):e.nodeType===1&&Na(e,t),xr(e)):Na(ye,t.stateNode));break;case 4:s=ye,a=Ze,ye=t.stateNode.containerInfo,Ze=!0,jn(e,n,t),ye=s,Ze=a;break;case 0:case 11:case 14:case 15:if(!Ne&&(s=t.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){a=s=s.next;do{var i=a,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&xi(t,n,l),a=a.next}while(a!==s)}jn(e,n,t);break;case 1:if(!Ne&&(kt(t,n),s=t.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=t.memoizedProps,s.state=t.memoizedState,s.componentWillUnmount()}catch(o){ae(t,n,o)}jn(e,n,t);break;case 21:jn(e,n,t);break;case 22:t.mode&1?(Ne=(s=Ne)||t.memoizedState!==null,jn(e,n,t),Ne=s):jn(e,n,t);break;default:jn(e,n,t)}}function Ho(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new $p),n.forEach(function(s){var a=Xp.bind(null,e,s);t.has(s)||(t.add(s),s.then(a,a))})}}function Qe(e,n){var t=n.deletions;if(t!==null)for(var s=0;s<t.length;s++){var a=t[s];try{var i=e,l=n,o=l;e:for(;o!==null;){switch(o.tag){case 5:ye=o.stateNode,Ze=!1;break e;case 3:ye=o.stateNode.containerInfo,Ze=!0;break e;case 4:ye=o.stateNode.containerInfo,Ze=!0;break e}o=o.return}if(ye===null)throw Error(P(160));sd(i,l,a),ye=null,Ze=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(u){ae(a,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)ad(n,e),n=n.sibling}function ad(e,n){var t=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Qe(n,e),tn(e),s&4){try{dr(3,e,e.return),Js(3,e)}catch(x){ae(e,e.return,x)}try{dr(5,e,e.return)}catch(x){ae(e,e.return,x)}}break;case 1:Qe(n,e),tn(e),s&512&&t!==null&&kt(t,t.return);break;case 5:if(Qe(n,e),tn(e),s&512&&t!==null&&kt(t,t.return),e.flags&32){var a=e.stateNode;try{mr(a,"")}catch(x){ae(e,e.return,x)}}if(s&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,l=t!==null?t.memoizedProps:i,o=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{o==="input"&&i.type==="radio"&&i.name!=null&&Cc(a,i),Ka(o,l);var u=Ka(o,i);for(l=0;l<c.length;l+=2){var d=c[l],h=c[l+1];d==="style"?_c(a,h):d==="dangerouslySetInnerHTML"?Rc(a,h):d==="children"?mr(a,h):Bi(a,d,h,u)}switch(o){case"input":Aa(a,i);break;case"textarea":Lc(a,i);break;case"select":var m=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var N=i.value;N!=null?Tt(a,!!i.multiple,N,!1):m!==!!i.multiple&&(i.defaultValue!=null?Tt(a,!!i.multiple,i.defaultValue,!0):Tt(a,!!i.multiple,i.multiple?[]:"",!1))}a[Sr]=i}catch(x){ae(e,e.return,x)}}break;case 6:if(Qe(n,e),tn(e),s&4){if(e.stateNode===null)throw Error(P(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(x){ae(e,e.return,x)}}break;case 3:if(Qe(n,e),tn(e),s&4&&t!==null&&t.memoizedState.isDehydrated)try{xr(n.containerInfo)}catch(x){ae(e,e.return,x)}break;case 4:Qe(n,e),tn(e);break;case 13:Qe(n,e),tn(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(jl=ie())),s&4&&Ho(e);break;case 22:if(d=t!==null&&t.memoizedState!==null,e.mode&1?(Ne=(u=Ne)||d,Qe(n,e),Ne=u):Qe(n,e),tn(e),s&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(F=e,d=e.child;d!==null;){for(h=F=d;F!==null;){switch(m=F,N=m.child,m.tag){case 0:case 11:case 14:case 15:dr(4,m,m.return);break;case 1:kt(m,m.return);var k=m.stateNode;if(typeof k.componentWillUnmount=="function"){s=m,t=m.return;try{n=s,k.props=n.memoizedProps,k.state=n.memoizedState,k.componentWillUnmount()}catch(x){ae(s,t,x)}}break;case 5:kt(m,m.return);break;case 22:if(m.memoizedState!==null){Fo(h);continue}}N!==null?(N.return=m,F=N):Fo(h)}d=d.sibling}e:for(d=null,h=e;;){if(h.tag===5){if(d===null){d=h;try{a=h.stateNode,u?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(o=h.stateNode,c=h.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=Oc("display",l))}catch(x){ae(e,e.return,x)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(x){ae(e,e.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Qe(n,e),tn(e),s&4&&Ho(e);break;case 21:break;default:Qe(n,e),tn(e)}}function tn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(rd(t)){var s=t;break e}t=t.return}throw Error(P(160))}switch(s.tag){case 5:var a=s.stateNode;s.flags&32&&(mr(a,""),s.flags&=-33);var i=Vo(e);ji(e,i,a);break;case 3:case 4:var l=s.stateNode.containerInfo,o=Vo(e);Ni(e,o,l);break;default:throw Error(P(161))}}catch(c){ae(e,e.return,c)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Up(e,n,t){F=e,id(e)}function id(e,n,t){for(var s=(e.mode&1)!==0;F!==null;){var a=F,i=a.child;if(a.tag===22&&s){var l=a.memoizedState!==null||ns;if(!l){var o=a.alternate,c=o!==null&&o.memoizedState!==null||Ne;o=ns;var u=Ne;if(ns=l,(Ne=c)&&!u)for(F=a;F!==null;)l=F,c=l.child,l.tag===22&&l.memoizedState!==null?Ao(a):c!==null?(c.return=l,F=c):Ao(a);for(;i!==null;)F=i,id(i),i=i.sibling;F=a,ns=o,Ne=u}Do(e)}else a.subtreeFlags&8772&&i!==null?(i.return=a,F=i):Do(e)}}function Do(e){for(;F!==null;){var n=F;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Ne||Js(5,n);break;case 1:var s=n.stateNode;if(n.flags&4&&!Ne)if(t===null)s.componentDidMount();else{var a=n.elementType===n.type?t.memoizedProps:Ge(n.type,t.memoizedProps);s.componentDidUpdate(a,t.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&wo(n,i,s);break;case 3:var l=n.updateQueue;if(l!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}wo(n,l,t)}break;case 5:var o=n.stateNode;if(t===null&&n.flags&4){t=o;var c=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&t.focus();break;case"img":c.src&&(t.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&xr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}Ne||n.flags&512&&ki(n)}catch(m){ae(n,n.return,m)}}if(n===e){F=null;break}if(t=n.sibling,t!==null){t.return=n.return,F=t;break}F=n.return}}function Fo(e){for(;F!==null;){var n=F;if(n===e){F=null;break}var t=n.sibling;if(t!==null){t.return=n.return,F=t;break}F=n.return}}function Ao(e){for(;F!==null;){var n=F;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Js(4,n)}catch(c){ae(n,t,c)}break;case 1:var s=n.stateNode;if(typeof s.componentDidMount=="function"){var a=n.return;try{s.componentDidMount()}catch(c){ae(n,a,c)}}var i=n.return;try{ki(n)}catch(c){ae(n,i,c)}break;case 5:var l=n.return;try{ki(n)}catch(c){ae(n,l,c)}}}catch(c){ae(n,n.return,c)}if(n===e){F=null;break}var o=n.sibling;if(o!==null){o.return=n.return,F=o;break}F=n.return}}var qp=Math.ceil,Is=xn.ReactCurrentDispatcher,kl=xn.ReactCurrentOwner,$e=xn.ReactCurrentBatchConfig,G=0,fe=null,le=null,ge=0,Pe=0,Nt=Bn(0),de=0,Rr=null,rt=0,Xs=0,Nl=0,hr=null,Le=null,jl=0,Ht=1/0,cn=null,Ms=!1,wi=null,Mn=null,ts=!1,Ln=null,Vs=0,pr=0,Si=null,ps=-1,fs=0;function be(){return G&6?ie():ps!==-1?ps:ps=ie()}function Vn(e){return e.mode&1?G&2&&ge!==0?ge&-ge:Lp.transition!==null?(fs===0&&(fs=Uc()),fs):(e=Z,e!==0||(e=window.event,e=e===void 0?16:Jc(e.type)),e):1}function Ye(e,n,t,s){if(50<pr)throw pr=0,Si=null,Error(P(185));zr(e,t,s),(!(G&2)||e!==fe)&&(e===fe&&(!(G&2)&&(Xs|=t),de===4&&Tn(e,ge)),_e(e,s),t===1&&G===0&&!(n.mode&1)&&(Ht=ie()+500,Qs&&Un()))}function _e(e,n){var t=e.callbackNode;Lh(e,n);var s=ks(e,e===fe?ge:0);if(s===0)t!==null&&Gl(t),e.callbackNode=null,e.callbackPriority=0;else if(n=s&-s,e.callbackPriority!==n){if(t!=null&&Gl(t),n===1)e.tag===0?Cp($o.bind(null,e)):yu($o.bind(null,e)),wp(function(){!(G&6)&&Un()}),t=null;else{switch(qc(s)){case 1:t=Qi;break;case 4:t=$c;break;case 16:t=xs;break;case 536870912:t=Bc;break;default:t=xs}t=fd(t,ld.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function ld(e,n){if(ps=-1,fs=0,G&6)throw Error(P(327));var t=e.callbackNode;if(Ot()&&e.callbackNode!==t)return null;var s=ks(e,e===fe?ge:0);if(s===0)return null;if(s&30||s&e.expiredLanes||n)n=Hs(e,s);else{n=s;var a=G;G|=2;var i=cd();(fe!==e||ge!==n)&&(cn=null,Ht=ie()+500,Xn(e,n));do try{Qp();break}catch(o){od(e,o)}while(!0);ll(),Is.current=i,G=a,le!==null?n=0:(fe=null,ge=0,n=de)}if(n!==0){if(n===2&&(a=Ja(e),a!==0&&(s=a,n=bi(e,a))),n===1)throw t=Rr,Xn(e,0),Tn(e,s),_e(e,ie()),t;if(n===6)Tn(e,s);else{if(a=e.current.alternate,!(s&30)&&!Kp(a)&&(n=Hs(e,s),n===2&&(i=Ja(e),i!==0&&(s=i,n=bi(e,i))),n===1))throw t=Rr,Xn(e,0),Tn(e,s),_e(e,ie()),t;switch(e.finishedWork=a,e.finishedLanes=s,n){case 0:case 1:throw Error(P(345));case 2:Kn(e,Le,cn);break;case 3:if(Tn(e,s),(s&130023424)===s&&(n=jl+500-ie(),10<n)){if(ks(e,0)!==0)break;if(a=e.suspendedLanes,(a&s)!==s){be(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ai(Kn.bind(null,e,Le,cn),n);break}Kn(e,Le,cn);break;case 4:if(Tn(e,s),(s&4194240)===s)break;for(n=e.eventTimes,a=-1;0<s;){var l=31-Xe(s);i=1<<l,l=n[l],l>a&&(a=l),s&=~i}if(s=a,s=ie()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*qp(s/1960))-s,10<s){e.timeoutHandle=ai(Kn.bind(null,e,Le,cn),s);break}Kn(e,Le,cn);break;case 5:Kn(e,Le,cn);break;default:throw Error(P(329))}}}return _e(e,ie()),e.callbackNode===t?ld.bind(null,e):null}function bi(e,n){var t=hr;return e.current.memoizedState.isDehydrated&&(Xn(e,n).flags|=256),e=Hs(e,n),e!==2&&(n=Le,Le=t,n!==null&&Ti(n)),e}function Ti(e){Le===null?Le=e:Le.push.apply(Le,e)}function Kp(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var s=0;s<t.length;s++){var a=t[s],i=a.getSnapshot;a=a.value;try{if(!en(i(),a))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Tn(e,n){for(n&=~Nl,n&=~Xs,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Xe(n),s=1<<t;e[t]=-1,n&=~s}}function $o(e){if(G&6)throw Error(P(327));Ot();var n=ks(e,0);if(!(n&1))return _e(e,ie()),null;var t=Hs(e,n);if(e.tag!==0&&t===2){var s=Ja(e);s!==0&&(n=s,t=bi(e,s))}if(t===1)throw t=Rr,Xn(e,0),Tn(e,n),_e(e,ie()),t;if(t===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Kn(e,Le,cn),_e(e,ie()),null}function wl(e,n){var t=G;G|=1;try{return e(n)}finally{G=t,G===0&&(Ht=ie()+500,Qs&&Un())}}function st(e){Ln!==null&&Ln.tag===0&&!(G&6)&&Ot();var n=G;G|=1;var t=$e.transition,s=Z;try{if($e.transition=null,Z=1,e)return e()}finally{Z=s,$e.transition=t,G=n,!(G&6)&&Un()}}function Sl(){Pe=Nt.current,ee(Nt)}function Xn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,jp(t)),le!==null)for(t=le.return;t!==null;){var s=t;switch(sl(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&bs();break;case 3:Mt(),ee(Re),ee(je),pl();break;case 5:hl(s);break;case 4:Mt();break;case 13:ee(te);break;case 19:ee(te);break;case 10:ol(s.type._context);break;case 22:case 23:Sl()}t=t.return}if(fe=e,le=e=Hn(e.current,null),ge=Pe=n,de=0,Rr=null,Nl=Xs=rt=0,Le=hr=null,Qn!==null){for(n=0;n<Qn.length;n++)if(t=Qn[n],s=t.interleaved,s!==null){t.interleaved=null;var a=s.next,i=t.pending;if(i!==null){var l=i.next;i.next=a,s.next=l}t.pending=s}Qn=null}return e}function od(e,n){do{var t=le;try{if(ll(),us.current=zs,Ps){for(var s=re.memoizedState;s!==null;){var a=s.queue;a!==null&&(a.pending=null),s=s.next}Ps=!1}if(tt=0,he=ue=re=null,ur=!1,Cr=0,kl.current=null,t===null||t.return===null){de=1,Rr=n,le=null;break}e:{var i=e,l=t.return,o=t,c=n;if(n=ge,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=o,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var N=Eo(l);if(N!==null){N.flags&=-257,Ro(N,l,o,i,n),N.mode&1&&Lo(i,u,n),n=N,c=u;var k=n.updateQueue;if(k===null){var x=new Set;x.add(c),n.updateQueue=x}else k.add(c);break e}else{if(!(n&1)){Lo(i,u,n),bl();break e}c=Error(P(426))}}else if(ne&&o.mode&1){var v=Eo(l);if(v!==null){!(v.flags&65536)&&(v.flags|=256),Ro(v,l,o,i,n),al(Vt(c,o));break e}}i=c=Vt(c,o),de!==4&&(de=2),hr===null?hr=[i]:hr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var p=qu(i,c,n);jo(i,p);break e;case 1:o=c;var f=i.type,y=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Mn===null||!Mn.has(y)))){i.flags|=65536,n&=-n,i.lanes|=n;var w=Ku(i,o,n);jo(i,w);break e}}i=i.return}while(i!==null)}dd(t)}catch(j){n=j,le===t&&t!==null&&(le=t=t.return);continue}break}while(!0)}function cd(){var e=Is.current;return Is.current=zs,e===null?zs:e}function bl(){(de===0||de===3||de===2)&&(de=4),fe===null||!(rt&268435455)&&!(Xs&268435455)||Tn(fe,ge)}function Hs(e,n){var t=G;G|=2;var s=cd();(fe!==e||ge!==n)&&(cn=null,Xn(e,n));do try{Wp();break}catch(a){od(e,a)}while(!0);if(ll(),G=t,Is.current=s,le!==null)throw Error(P(261));return fe=null,ge=0,de}function Wp(){for(;le!==null;)ud(le)}function Qp(){for(;le!==null&&!xh();)ud(le)}function ud(e){var n=pd(e.alternate,e,Pe);e.memoizedProps=e.pendingProps,n===null?dd(e):le=n,kl.current=null}function dd(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Ap(t,n),t!==null){t.flags&=32767,le=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{de=6,le=null;return}}else if(t=Fp(t,n,Pe),t!==null){le=t;return}if(n=n.sibling,n!==null){le=n;return}le=n=e}while(n!==null);de===0&&(de=5)}function Kn(e,n,t){var s=Z,a=$e.transition;try{$e.transition=null,Z=1,Gp(e,n,t,s)}finally{$e.transition=a,Z=s}return null}function Gp(e,n,t,s){do Ot();while(Ln!==null);if(G&6)throw Error(P(327));t=e.finishedWork;var a=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(Eh(e,i),e===fe&&(le=fe=null,ge=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||ts||(ts=!0,fd(xs,function(){return Ot(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=$e.transition,$e.transition=null;var l=Z;Z=1;var o=G;G|=4,kl.current=null,Bp(e,t),ad(t,e),mp(ri),Ns=!!ti,ri=ti=null,e.current=t,Up(t),kh(),G=o,Z=l,$e.transition=i}else e.current=t;if(ts&&(ts=!1,Ln=e,Vs=a),i=e.pendingLanes,i===0&&(Mn=null),wh(t.stateNode),_e(e,ie()),n!==null)for(s=e.onRecoverableError,t=0;t<n.length;t++)a=n[t],s(a.value,{componentStack:a.stack,digest:a.digest});if(Ms)throw Ms=!1,e=wi,wi=null,e;return Vs&1&&e.tag!==0&&Ot(),i=e.pendingLanes,i&1?e===Si?pr++:(pr=0,Si=e):pr=0,Un(),null}function Ot(){if(Ln!==null){var e=qc(Vs),n=$e.transition,t=Z;try{if($e.transition=null,Z=16>e?16:e,Ln===null)var s=!1;else{if(e=Ln,Ln=null,Vs=0,G&6)throw Error(P(331));var a=G;for(G|=4,F=e.current;F!==null;){var i=F,l=i.child;if(F.flags&16){var o=i.deletions;if(o!==null){for(var c=0;c<o.length;c++){var u=o[c];for(F=u;F!==null;){var d=F;switch(d.tag){case 0:case 11:case 15:dr(8,d,i)}var h=d.child;if(h!==null)h.return=d,F=h;else for(;F!==null;){d=F;var m=d.sibling,N=d.return;if(td(d),d===u){F=null;break}if(m!==null){m.return=N,F=m;break}F=N}}}var k=i.alternate;if(k!==null){var x=k.child;if(x!==null){k.child=null;do{var v=x.sibling;x.sibling=null,x=v}while(x!==null)}}F=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,F=l;else e:for(;F!==null;){if(i=F,i.flags&2048)switch(i.tag){case 0:case 11:case 15:dr(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,F=p;break e}F=i.return}}var f=e.current;for(F=f;F!==null;){l=F;var y=l.child;if(l.subtreeFlags&2064&&y!==null)y.return=l,F=y;else e:for(l=f;F!==null;){if(o=F,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Js(9,o)}}catch(j){ae(o,o.return,j)}if(o===l){F=null;break e}var w=o.sibling;if(w!==null){w.return=o.return,F=w;break e}F=o.return}}if(G=a,Un(),an&&typeof an.onPostCommitFiberRoot=="function")try{an.onPostCommitFiberRoot(Bs,e)}catch{}s=!0}return s}finally{Z=t,$e.transition=n}}return!1}function Bo(e,n,t){n=Vt(t,n),n=qu(e,n,1),e=In(e,n,1),n=be(),e!==null&&(zr(e,1,n),_e(e,n))}function ae(e,n,t){if(e.tag===3)Bo(e,e,t);else for(;n!==null;){if(n.tag===3){Bo(n,e,t);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Mn===null||!Mn.has(s))){e=Vt(t,e),e=Ku(n,e,1),n=In(n,e,1),e=be(),n!==null&&(zr(n,1,e),_e(n,e));break}}n=n.return}}function Zp(e,n,t){var s=e.pingCache;s!==null&&s.delete(n),n=be(),e.pingedLanes|=e.suspendedLanes&t,fe===e&&(ge&t)===t&&(de===4||de===3&&(ge&130023424)===ge&&500>ie()-jl?Xn(e,0):Nl|=t),_e(e,n)}function hd(e,n){n===0&&(e.mode&1?(n=Kr,Kr<<=1,!(Kr&130023424)&&(Kr=4194304)):n=1);var t=be();e=yn(e,n),e!==null&&(zr(e,n,t),_e(e,t))}function Jp(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),hd(e,t)}function Xp(e,n){var t=0;switch(e.tag){case 13:var s=e.stateNode,a=e.memoizedState;a!==null&&(t=a.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(P(314))}s!==null&&s.delete(n),hd(e,t)}var pd;pd=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Re.current)Ee=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Ee=!1,Dp(e,n,t);Ee=!!(e.flags&131072)}else Ee=!1,ne&&n.flags&1048576&&gu(n,Ls,n.index);switch(n.lanes=0,n.tag){case 2:var s=n.type;hs(e,n),e=n.pendingProps;var a=Pt(n,je.current);Rt(n,t),a=ml(null,n,s,e,a,t);var i=yl();return n.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Oe(s)?(i=!0,Ts(n)):i=!1,n.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,ul(n),a.updater=Zs,n.stateNode=a,a._reactInternals=n,hi(n,s,e,t),n=mi(null,n,s,!0,i,t)):(n.tag=0,ne&&i&&rl(n),Se(null,n,a,t),n=n.child),n;case 16:s=n.elementType;e:{switch(hs(e,n),e=n.pendingProps,a=s._init,s=a(s._payload),n.type=s,a=n.tag=ef(s),e=Ge(s,e),a){case 0:n=fi(null,n,s,e,t);break e;case 1:n=Po(null,n,s,e,t);break e;case 11:n=Oo(null,n,s,e,t);break e;case 14:n=_o(null,n,s,Ge(s.type,e),t);break e}throw Error(P(306,s,""))}return n;case 0:return s=n.type,a=n.pendingProps,a=n.elementType===s?a:Ge(s,a),fi(e,n,s,a,t);case 1:return s=n.type,a=n.pendingProps,a=n.elementType===s?a:Ge(s,a),Po(e,n,s,a,t);case 3:e:{if(Zu(n),e===null)throw Error(P(387));s=n.pendingProps,i=n.memoizedState,a=i.element,wu(e,n),Os(n,s,null,t);var l=n.memoizedState;if(s=l.element,i.isDehydrated)if(i={element:s,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){a=Vt(Error(P(423)),n),n=zo(e,n,s,t,a);break e}else if(s!==a){a=Vt(Error(P(424)),n),n=zo(e,n,s,t,a);break e}else for(ze=zn(n.stateNode.containerInfo.firstChild),Ie=n,ne=!0,Je=null,t=Nu(n,null,s,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(zt(),s===a){n=gn(e,n,t);break e}Se(e,n,s,t)}n=n.child}return n;case 5:return Su(n),e===null&&ci(n),s=n.type,a=n.pendingProps,i=e!==null?e.memoizedProps:null,l=a.children,si(s,a)?l=null:i!==null&&si(s,i)&&(n.flags|=32),Gu(e,n),Se(e,n,l,t),n.child;case 6:return e===null&&ci(n),null;case 13:return Ju(e,n,t);case 4:return dl(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=It(n,null,s,t):Se(e,n,s,t),n.child;case 11:return s=n.type,a=n.pendingProps,a=n.elementType===s?a:Ge(s,a),Oo(e,n,s,a,t);case 7:return Se(e,n,n.pendingProps,t),n.child;case 8:return Se(e,n,n.pendingProps.children,t),n.child;case 12:return Se(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(s=n.type._context,a=n.pendingProps,i=n.memoizedProps,l=a.value,X(Es,s._currentValue),s._currentValue=l,i!==null)if(en(i.value,l)){if(i.children===a.children&&!Re.current){n=gn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var o=i.dependencies;if(o!==null){l=i.child;for(var c=o.firstContext;c!==null;){if(c.context===s){if(i.tag===1){c=pn(-1,t&-t),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}i.lanes|=t,c=i.alternate,c!==null&&(c.lanes|=t),ui(i.return,t,n),o.lanes|=t;break}c=c.next}}else if(i.tag===10)l=i.type===n.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(P(341));l.lanes|=t,o=l.alternate,o!==null&&(o.lanes|=t),ui(l,t,n),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===n){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Se(e,n,a.children,t),n=n.child}return n;case 9:return a=n.type,s=n.pendingProps.children,Rt(n,t),a=Be(a),s=s(a),n.flags|=1,Se(e,n,s,t),n.child;case 14:return s=n.type,a=Ge(s,n.pendingProps),a=Ge(s.type,a),_o(e,n,s,a,t);case 15:return Wu(e,n,n.type,n.pendingProps,t);case 17:return s=n.type,a=n.pendingProps,a=n.elementType===s?a:Ge(s,a),hs(e,n),n.tag=1,Oe(s)?(e=!0,Ts(n)):e=!1,Rt(n,t),Uu(n,s,a),hi(n,s,a,t),mi(null,n,s,!0,e,t);case 19:return Xu(e,n,t);case 22:return Qu(e,n,t)}throw Error(P(156,n.tag))};function fd(e,n){return Ac(e,n)}function Yp(e,n,t,s){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ae(e,n,t,s){return new Yp(e,n,t,s)}function Tl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ef(e){if(typeof e=="function")return Tl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===qi)return 11;if(e===Ki)return 14}return 2}function Hn(e,n){var t=e.alternate;return t===null?(t=Ae(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function ms(e,n,t,s,a,i){var l=2;if(s=e,typeof e=="function")Tl(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case dt:return Yn(t.children,a,i,n);case Ui:l=8,a|=8;break;case Ma:return e=Ae(12,t,n,a|2),e.elementType=Ma,e.lanes=i,e;case Va:return e=Ae(13,t,n,a),e.elementType=Va,e.lanes=i,e;case Ha:return e=Ae(19,t,n,a),e.elementType=Ha,e.lanes=i,e;case Sc:return Ys(t,a,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case jc:l=10;break e;case wc:l=9;break e;case qi:l=11;break e;case Ki:l=14;break e;case wn:l=16,s=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return n=Ae(l,t,n,a),n.elementType=e,n.type=s,n.lanes=i,n}function Yn(e,n,t,s){return e=Ae(7,e,s,n),e.lanes=t,e}function Ys(e,n,t,s){return e=Ae(22,e,s,n),e.elementType=Sc,e.lanes=t,e.stateNode={isHidden:!1},e}function Ea(e,n,t){return e=Ae(6,e,null,n),e.lanes=t,e}function Ra(e,n,t){return n=Ae(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function nf(e,n,t,s,a){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ua(0),this.expirationTimes=ua(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ua(0),this.identifierPrefix=s,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Cl(e,n,t,s,a,i,l,o,c){return e=new nf(e,n,t,o,c),n===1?(n=1,i===!0&&(n|=8)):n=0,i=Ae(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:s,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ul(i),e}function tf(e,n,t){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ut,key:s==null?null:""+s,children:e,containerInfo:n,implementation:t}}function md(e){if(!e)return An;e=e._reactInternals;e:{if(it(e)!==e||e.tag!==1)throw Error(P(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Oe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(P(171))}if(e.tag===1){var t=e.type;if(Oe(t))return mu(e,t,n)}return n}function yd(e,n,t,s,a,i,l,o,c){return e=Cl(t,s,!0,e,a,i,l,o,c),e.context=md(null),t=e.current,s=be(),a=Vn(t),i=pn(s,a),i.callback=n??null,In(t,i,a),e.current.lanes=a,zr(e,a,s),_e(e,s),e}function ea(e,n,t,s){var a=n.current,i=be(),l=Vn(a);return t=md(t),n.context===null?n.context=t:n.pendingContext=t,n=pn(i,l),n.payload={element:e},s=s===void 0?null:s,s!==null&&(n.callback=s),e=In(a,n,l),e!==null&&(Ye(e,a,l,i),cs(e,a,l)),l}function Ds(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Uo(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Ll(e,n){Uo(e,n),(e=e.alternate)&&Uo(e,n)}function rf(){return null}var gd=typeof reportError=="function"?reportError:function(e){console.error(e)};function El(e){this._internalRoot=e}na.prototype.render=El.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(P(409));ea(e,n,null,null)};na.prototype.unmount=El.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;st(function(){ea(null,e,null,null)}),n[mn]=null}};function na(e){this._internalRoot=e}na.prototype.unstable_scheduleHydration=function(e){if(e){var n=Qc();e={blockedOn:null,target:e,priority:n};for(var t=0;t<bn.length&&n!==0&&n<bn[t].priority;t++);bn.splice(t,0,e),t===0&&Zc(e)}};function Rl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ta(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function qo(){}function sf(e,n,t,s,a){if(a){if(typeof s=="function"){var i=s;s=function(){var u=Ds(l);i.call(u)}}var l=yd(n,s,e,0,null,!1,!1,"",qo);return e._reactRootContainer=l,e[mn]=l.current,jr(e.nodeType===8?e.parentNode:e),st(),l}for(;a=e.lastChild;)e.removeChild(a);if(typeof s=="function"){var o=s;s=function(){var u=Ds(c);o.call(u)}}var c=Cl(e,0,!1,null,null,!1,!1,"",qo);return e._reactRootContainer=c,e[mn]=c.current,jr(e.nodeType===8?e.parentNode:e),st(function(){ea(n,c,t,s)}),c}function ra(e,n,t,s,a){var i=t._reactRootContainer;if(i){var l=i;if(typeof a=="function"){var o=a;a=function(){var c=Ds(l);o.call(c)}}ea(n,l,e,a)}else l=sf(t,n,e,a,s);return Ds(l)}Kc=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=rr(n.pendingLanes);t!==0&&(Gi(n,t|1),_e(n,ie()),!(G&6)&&(Ht=ie()+500,Un()))}break;case 13:st(function(){var s=yn(e,1);if(s!==null){var a=be();Ye(s,e,1,a)}}),Ll(e,1)}};Zi=function(e){if(e.tag===13){var n=yn(e,134217728);if(n!==null){var t=be();Ye(n,e,134217728,t)}Ll(e,134217728)}};Wc=function(e){if(e.tag===13){var n=Vn(e),t=yn(e,n);if(t!==null){var s=be();Ye(t,e,n,s)}Ll(e,n)}};Qc=function(){return Z};Gc=function(e,n){var t=Z;try{return Z=e,n()}finally{Z=t}};Qa=function(e,n,t){switch(n){case"input":if(Aa(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var s=t[n];if(s!==e&&s.form===e.form){var a=Ws(s);if(!a)throw Error(P(90));Tc(s),Aa(s,a)}}}break;case"textarea":Lc(e,t);break;case"select":n=t.value,n!=null&&Tt(e,!!t.multiple,n,!1)}};Ic=wl;Mc=st;var af={usingClientEntryPoint:!1,Events:[Mr,mt,Ws,Pc,zc,wl]},er={findFiberByHostInstance:Wn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lf={bundleType:er.bundleType,version:er.version,rendererPackageName:er.rendererPackageName,rendererConfig:er.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Dc(e),e===null?null:e.stateNode},findFiberByHostInstance:er.findFiberByHostInstance||rf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rs.isDisabled&&rs.supportsFiber)try{Bs=rs.inject(lf),an=rs}catch{}}Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=af;Ve.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rl(n))throw Error(P(200));return tf(e,n,null,t)};Ve.createRoot=function(e,n){if(!Rl(e))throw Error(P(299));var t=!1,s="",a=gd;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),n=Cl(e,1,!1,null,null,t,!1,s,a),e[mn]=n.current,jr(e.nodeType===8?e.parentNode:e),new El(n)};Ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=Dc(n),e=e===null?null:e.stateNode,e};Ve.flushSync=function(e){return st(e)};Ve.hydrate=function(e,n,t){if(!ta(n))throw Error(P(200));return ra(null,e,n,!0,t)};Ve.hydrateRoot=function(e,n,t){if(!Rl(e))throw Error(P(405));var s=t!=null&&t.hydratedSources||null,a=!1,i="",l=gd;if(t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),n=yd(n,null,e,1,t??null,a,!1,i,l),e[mn]=n.current,jr(e),s)for(e=0;e<s.length;e++)t=s[e],a=t._getVersion,a=a(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,a]:n.mutableSourceEagerHydrationData.push(t,a);return new na(n)};Ve.render=function(e,n,t){if(!ta(n))throw Error(P(200));return ra(null,e,n,!1,t)};Ve.unmountComponentAtNode=function(e){if(!ta(e))throw Error(P(40));return e._reactRootContainer?(st(function(){ra(null,null,e,!1,function(){e._reactRootContainer=null,e[mn]=null})}),!0):!1};Ve.unstable_batchedUpdates=wl;Ve.unstable_renderSubtreeIntoContainer=function(e,n,t,s){if(!ta(t))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return ra(e,n,t,!1,s)};Ve.version="18.3.1-next-f1338f8080-20240426";function vd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vd)}catch(e){console.error(e)}}vd(),vc.exports=Ve;var of=vc.exports,Ko=of;za.createRoot=Ko.createRoot,za.hydrateRoot=Ko.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Or(){return Or=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Or.apply(this,arguments)}var En;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(En||(En={}));const Wo="popstate";function cf(e){e===void 0&&(e={});function n(s,a){let{pathname:i,search:l,hash:o}=s.location;return Ci("",{pathname:i,search:l,hash:o},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(s,a){return typeof a=="string"?a:Fs(a)}return df(n,t,null,e)}function ce(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Ol(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function uf(){return Math.random().toString(36).substr(2,8)}function Qo(e,n){return{usr:e.state,key:e.key,idx:n}}function Ci(e,n,t,s){return t===void 0&&(t=null),Or({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?Ut(n):n,{state:t,key:n&&n.key||s||uf()})}function Fs(e){let{pathname:n="/",search:t="",hash:s=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),s&&s!=="#"&&(n+=s.charAt(0)==="#"?s:"#"+s),n}function Ut(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let s=e.indexOf("?");s>=0&&(n.search=e.substr(s),e=e.substr(0,s)),e&&(n.pathname=e)}return n}function df(e,n,t,s){s===void 0&&(s={});let{window:a=document.defaultView,v5Compat:i=!1}=s,l=a.history,o=En.Pop,c=null,u=d();u==null&&(u=0,l.replaceState(Or({},l.state,{idx:u}),""));function d(){return(l.state||{idx:null}).idx}function h(){o=En.Pop;let v=d(),p=v==null?null:v-u;u=v,c&&c({action:o,location:x.location,delta:p})}function m(v,p){o=En.Push;let f=Ci(x.location,v,p);u=d()+1;let y=Qo(f,u),w=x.createHref(f);try{l.pushState(y,"",w)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;a.location.assign(w)}i&&c&&c({action:o,location:x.location,delta:1})}function N(v,p){o=En.Replace;let f=Ci(x.location,v,p);u=d();let y=Qo(f,u),w=x.createHref(f);l.replaceState(y,"",w),i&&c&&c({action:o,location:x.location,delta:0})}function k(v){let p=a.location.origin!=="null"?a.location.origin:a.location.href,f=typeof v=="string"?v:Fs(v);return f=f.replace(/ $/,"%20"),ce(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let x={get action(){return o},get location(){return e(a,l)},listen(v){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(Wo,h),c=v,()=>{a.removeEventListener(Wo,h),c=null}},createHref(v){return n(a,v)},createURL:k,encodeLocation(v){let p=k(v);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:m,replace:N,go(v){return l.go(v)}};return x}var Go;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Go||(Go={}));function hf(e,n,t){return t===void 0&&(t="/"),pf(e,n,t)}function pf(e,n,t,s){let a=typeof n=="string"?Ut(n):n,i=_l(a.pathname||"/",t);if(i==null)return null;let l=xd(e);ff(l);let o=null;for(let c=0;o==null&&c<l.length;++c){let u=Tf(i);o=wf(l[c],u)}return o}function xd(e,n,t,s){n===void 0&&(n=[]),t===void 0&&(t=[]),s===void 0&&(s="");let a=(i,l,o)=>{let c={relativePath:o===void 0?i.path||"":o,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};c.relativePath.startsWith("/")&&(ce(c.relativePath.startsWith(s),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(s.length));let u=Dn([s,c.relativePath]),d=t.concat(c);i.children&&i.children.length>0&&(ce(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),xd(i.children,n,d,u)),!(i.path==null&&!i.index)&&n.push({path:u,score:Nf(u,i.index),routesMeta:d})};return e.forEach((i,l)=>{var o;if(i.path===""||!((o=i.path)!=null&&o.includes("?")))a(i,l);else for(let c of kd(i.path))a(i,l,c)}),n}function kd(e){let n=e.split("/");if(n.length===0)return[];let[t,...s]=n,a=t.endsWith("?"),i=t.replace(/\?$/,"");if(s.length===0)return a?[i,""]:[i];let l=kd(s.join("/")),o=[];return o.push(...l.map(c=>c===""?i:[i,c].join("/"))),a&&o.push(...l),o.map(c=>e.startsWith("/")&&c===""?"/":c)}function ff(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:jf(n.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}const mf=/^:[\w-]+$/,yf=3,gf=2,vf=1,xf=10,kf=-2,Zo=e=>e==="*";function Nf(e,n){let t=e.split("/"),s=t.length;return t.some(Zo)&&(s+=kf),n&&(s+=gf),t.filter(a=>!Zo(a)).reduce((a,i)=>a+(mf.test(i)?yf:i===""?vf:xf),s)}function jf(e,n){return e.length===n.length&&e.slice(0,-1).every((s,a)=>s===n[a])?e[e.length-1]-n[n.length-1]:0}function wf(e,n,t){let{routesMeta:s}=e,a={},i="/",l=[];for(let o=0;o<s.length;++o){let c=s[o],u=o===s.length-1,d=i==="/"?n:n.slice(i.length)||"/",h=Sf({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),m=c.route;if(!h)return null;Object.assign(a,h.params),l.push({params:a,pathname:Dn([i,h.pathname]),pathnameBase:Of(Dn([i,h.pathnameBase])),route:m}),h.pathnameBase!=="/"&&(i=Dn([i,h.pathnameBase]))}return l}function Sf(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,s]=bf(e.path,e.caseSensitive,e.end),a=n.match(t);if(!a)return null;let i=a[0],l=i.replace(/(.)\/+$/,"$1"),o=a.slice(1);return{params:s.reduce((u,d,h)=>{let{paramName:m,isOptional:N}=d;if(m==="*"){let x=o[h]||"";l=i.slice(0,i.length-x.length).replace(/(.)\/+$/,"$1")}const k=o[h];return N&&!k?u[m]=void 0:u[m]=(k||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:l,pattern:e}}function bf(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Ol(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let s=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,o,c)=>(s.push({paramName:o,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(s.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,n?void 0:"i"),s]}function Tf(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Ol(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function _l(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,s=e.charAt(t);return s&&s!=="/"?null:e.slice(t)||"/"}const Cf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Lf=e=>Cf.test(e);function Ef(e,n){n===void 0&&(n="/");let{pathname:t,search:s="",hash:a=""}=typeof e=="string"?Ut(e):e,i;if(t)if(Lf(t))i=t;else{if(t.includes("//")){let l=t;t=t.replace(/\/\/+/g,"/"),Ol(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+t))}t.startsWith("/")?i=Jo(t.substring(1),"/"):i=Jo(t,n)}else i=n;return{pathname:i,search:_f(s),hash:Pf(a)}}function Jo(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function Oa(e,n,t,s){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Rf(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function Nd(e,n){let t=Rf(e);return n?t.map((s,a)=>a===t.length-1?s.pathname:s.pathnameBase):t.map(s=>s.pathnameBase)}function jd(e,n,t,s){s===void 0&&(s=!1);let a;typeof e=="string"?a=Ut(e):(a=Or({},e),ce(!a.pathname||!a.pathname.includes("?"),Oa("?","pathname","search",a)),ce(!a.pathname||!a.pathname.includes("#"),Oa("#","pathname","hash",a)),ce(!a.search||!a.search.includes("#"),Oa("#","search","hash",a)));let i=e===""||a.pathname==="",l=i?"/":a.pathname,o;if(l==null)o=t;else{let h=n.length-1;if(!s&&l.startsWith("..")){let m=l.split("/");for(;m[0]==="..";)m.shift(),h-=1;a.pathname=m.join("/")}o=h>=0?n[h]:"/"}let c=Ef(a,o),u=l&&l!=="/"&&l.endsWith("/"),d=(i||l===".")&&t.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const Dn=e=>e.join("/").replace(/\/\/+/g,"/"),Of=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),_f=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Pf=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function zf(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const wd=["post","put","patch","delete"];new Set(wd);const If=["get",...wd];new Set(If);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _r(){return _r=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},_r.apply(this,arguments)}const Pl=g.createContext(null),Mf=g.createContext(null),lt=g.createContext(null),sa=g.createContext(null),ot=g.createContext({outlet:null,matches:[],isDataRoute:!1}),Sd=g.createContext(null);function Vf(e,n){let{relative:t}=n===void 0?{}:n;Hr()||ce(!1);let{basename:s,navigator:a}=g.useContext(lt),{hash:i,pathname:l,search:o}=Td(e,{relative:t}),c=l;return s!=="/"&&(c=l==="/"?s:Dn([s,l])),a.createHref({pathname:c,search:o,hash:i})}function Hr(){return g.useContext(sa)!=null}function Dr(){return Hr()||ce(!1),g.useContext(sa).location}function bd(e){g.useContext(lt).static||g.useLayoutEffect(e)}function Hf(){let{isDataRoute:e}=g.useContext(ot);return e?Jf():Df()}function Df(){Hr()||ce(!1);let e=g.useContext(Pl),{basename:n,future:t,navigator:s}=g.useContext(lt),{matches:a}=g.useContext(ot),{pathname:i}=Dr(),l=JSON.stringify(Nd(a,t.v7_relativeSplatPath)),o=g.useRef(!1);return bd(()=>{o.current=!0}),g.useCallback(function(u,d){if(d===void 0&&(d={}),!o.current)return;if(typeof u=="number"){s.go(u);return}let h=jd(u,JSON.parse(l),i,d.relative==="path");e==null&&n!=="/"&&(h.pathname=h.pathname==="/"?n:Dn([n,h.pathname])),(d.replace?s.replace:s.push)(h,d.state,d)},[n,s,l,i,e])}function Td(e,n){let{relative:t}=n===void 0?{}:n,{future:s}=g.useContext(lt),{matches:a}=g.useContext(ot),{pathname:i}=Dr(),l=JSON.stringify(Nd(a,s.v7_relativeSplatPath));return g.useMemo(()=>jd(e,JSON.parse(l),i,t==="path"),[e,l,i,t])}function Ff(e,n){return Af(e,n)}function Af(e,n,t,s){Hr()||ce(!1);let{navigator:a}=g.useContext(lt),{matches:i}=g.useContext(ot),l=i[i.length-1],o=l?l.params:{};l&&l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let u=Dr(),d;if(n){var h;let v=typeof n=="string"?Ut(n):n;c==="/"||(h=v.pathname)!=null&&h.startsWith(c)||ce(!1),d=v}else d=u;let m=d.pathname||"/",N=m;if(c!=="/"){let v=c.replace(/^\//,"").split("/");N="/"+m.replace(/^\//,"").split("/").slice(v.length).join("/")}let k=hf(e,{pathname:N}),x=Kf(k&&k.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:Dn([c,a.encodeLocation?a.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?c:Dn([c,a.encodeLocation?a.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,t,s);return n&&x?g.createElement(sa.Provider,{value:{location:_r({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:En.Pop}},x):x}function $f(){let e=Zf(),n=zf(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return g.createElement(g.Fragment,null,g.createElement("h2",null,"Unexpected Application Error!"),g.createElement("h3",{style:{fontStyle:"italic"}},n),t?g.createElement("pre",{style:a},t):null,null)}const Bf=g.createElement($f,null);class Uf extends g.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?g.createElement(ot.Provider,{value:this.props.routeContext},g.createElement(Sd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function qf(e){let{routeContext:n,match:t,children:s}=e,a=g.useContext(Pl);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),g.createElement(ot.Provider,{value:n},s)}function Kf(e,n,t,s){var a;if(n===void 0&&(n=[]),t===void 0&&(t=null),s===void 0&&(s=null),e==null){var i;if(!t)return null;if(t.errors)e=t.matches;else if((i=s)!=null&&i.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let l=e,o=(a=t)==null?void 0:a.errors;if(o!=null){let d=l.findIndex(h=>h.route.id&&(o==null?void 0:o[h.route.id])!==void 0);d>=0||ce(!1),l=l.slice(0,Math.min(l.length,d+1))}let c=!1,u=-1;if(t&&s&&s.v7_partialHydration)for(let d=0;d<l.length;d++){let h=l[d];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=d),h.route.id){let{loaderData:m,errors:N}=t,k=h.route.loader&&m[h.route.id]===void 0&&(!N||N[h.route.id]===void 0);if(h.route.lazy||k){c=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((d,h,m)=>{let N,k=!1,x=null,v=null;t&&(N=o&&h.route.id?o[h.route.id]:void 0,x=h.route.errorElement||Bf,c&&(u<0&&m===0?(Xf("route-fallback"),k=!0,v=null):u===m&&(k=!0,v=h.route.hydrateFallbackElement||null)));let p=n.concat(l.slice(0,m+1)),f=()=>{let y;return N?y=x:k?y=v:h.route.Component?y=g.createElement(h.route.Component,null):h.route.element?y=h.route.element:y=d,g.createElement(qf,{match:h,routeContext:{outlet:d,matches:p,isDataRoute:t!=null},children:y})};return t&&(h.route.ErrorBoundary||h.route.errorElement||m===0)?g.createElement(Uf,{location:t.location,revalidation:t.revalidation,component:x,error:N,children:f(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):f()},null)}var Cd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Cd||{}),Ld=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ld||{});function Wf(e){let n=g.useContext(Pl);return n||ce(!1),n}function Qf(e){let n=g.useContext(Mf);return n||ce(!1),n}function Gf(e){let n=g.useContext(ot);return n||ce(!1),n}function Ed(e){let n=Gf(),t=n.matches[n.matches.length-1];return t.route.id||ce(!1),t.route.id}function Zf(){var e;let n=g.useContext(Sd),t=Qf(),s=Ed();return n!==void 0?n:(e=t.errors)==null?void 0:e[s]}function Jf(){let{router:e}=Wf(Cd.UseNavigateStable),n=Ed(Ld.UseNavigateStable),t=g.useRef(!1);return bd(()=>{t.current=!0}),g.useCallback(function(a,i){i===void 0&&(i={}),t.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,_r({fromRouteId:n},i)))},[e,n])}const Xo={};function Xf(e,n,t){Xo[e]||(Xo[e]=!0)}function Yf(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function me(e){ce(!1)}function em(e){let{basename:n="/",children:t=null,location:s,navigationType:a=En.Pop,navigator:i,static:l=!1,future:o}=e;Hr()&&ce(!1);let c=n.replace(/^\/*/,"/"),u=g.useMemo(()=>({basename:c,navigator:i,static:l,future:_r({v7_relativeSplatPath:!1},o)}),[c,o,i,l]);typeof s=="string"&&(s=Ut(s));let{pathname:d="/",search:h="",hash:m="",state:N=null,key:k="default"}=s,x=g.useMemo(()=>{let v=_l(d,c);return v==null?null:{location:{pathname:v,search:h,hash:m,state:N,key:k},navigationType:a}},[c,d,h,m,N,k,a]);return x==null?null:g.createElement(lt.Provider,{value:u},g.createElement(sa.Provider,{children:t,value:x}))}function nm(e){let{children:n,location:t}=e;return Ff(Li(n),t)}new Promise(()=>{});function Li(e,n){n===void 0&&(n=[]);let t=[];return g.Children.forEach(e,(s,a)=>{if(!g.isValidElement(s))return;let i=[...n,a];if(s.type===g.Fragment){t.push.apply(t,Li(s.props.children,i));return}s.type!==me&&ce(!1),!s.props.index||!s.props.children||ce(!1);let l={id:s.props.id||i.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(l.children=Li(s.props.children,i)),t.push(l)}),t}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ei(){return Ei=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Ei.apply(this,arguments)}function tm(e,n){if(e==null)return{};var t={},s=Object.keys(e),a,i;for(i=0;i<s.length;i++)a=s[i],!(n.indexOf(a)>=0)&&(t[a]=e[a]);return t}function rm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function sm(e,n){return e.button===0&&(!n||n==="_self")&&!rm(e)}const am=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],im="6";try{window.__reactRouterVersion=im}catch{}const lm="startTransition",Yo=Zd[lm];function om(e){let{basename:n,children:t,future:s,window:a}=e,i=g.useRef();i.current==null&&(i.current=cf({window:a,v5Compat:!0}));let l=i.current,[o,c]=g.useState({action:l.action,location:l.location}),{v7_startTransition:u}=s||{},d=g.useCallback(h=>{u&&Yo?Yo(()=>c(h)):c(h)},[c,u]);return g.useLayoutEffect(()=>l.listen(d),[l,d]),g.useEffect(()=>Yf(s),[s]),g.createElement(em,{basename:n,children:t,location:o.location,navigationType:o.action,navigator:l,future:s})}const cm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",um=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Dt=g.forwardRef(function(n,t){let{onClick:s,relative:a,reloadDocument:i,replace:l,state:o,target:c,to:u,preventScrollReset:d,viewTransition:h}=n,m=tm(n,am),{basename:N}=g.useContext(lt),k,x=!1;if(typeof u=="string"&&um.test(u)&&(k=u,cm))try{let y=new URL(window.location.href),w=u.startsWith("//")?new URL(y.protocol+u):new URL(u),j=_l(w.pathname,N);w.origin===y.origin&&j!=null?u=j+w.search+w.hash:x=!0}catch{}let v=Vf(u,{relative:a}),p=dm(u,{replace:l,state:o,target:c,preventScrollReset:d,relative:a,viewTransition:h});function f(y){s&&s(y),y.defaultPrevented||p(y)}return g.createElement("a",Ei({},m,{href:k||v,onClick:x||i?s:f,ref:t,target:c}))});var ec;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ec||(ec={}));var nc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(nc||(nc={}));function dm(e,n){let{target:t,replace:s,state:a,preventScrollReset:i,relative:l,viewTransition:o}=n===void 0?{}:n,c=Hf(),u=Dr(),d=Td(e,{relative:l});return g.useCallback(h=>{if(sm(h,t)){h.preventDefault();let m=s!==void 0?s:Fs(u)===Fs(d);c(e,{replace:m,state:a,preventScrollReset:i,relative:l,viewTransition:o})}},[u,c,d,s,a,t,e,i,l,o])}/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var hm={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),q=(e,n)=>{const t=g.forwardRef(({color:s="currentColor",size:a=24,strokeWidth:i=2,absoluteStrokeWidth:l,className:o="",children:c,...u},d)=>g.createElement("svg",{ref:d,...hm,width:a,height:a,stroke:s,strokeWidth:l?Number(i)*24/Number(a):i,className:["lucide",`lucide-${pm(e)}`,o].join(" "),...u},[...n.map(([h,m])=>g.createElement(h,m)),...Array.isArray(c)?c:[c]]));return t.displayName=`${e}`,t};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vn=q("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=q("ArrowDownNarrowWide",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h4",key:"6d7r33"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h10",key:"1438ji"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=q("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tc=q("ArrowRightLeft",[["path",{d:"m16 3 4 4-4 4",key:"1x1c3m"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"m8 21-4-4 4-4",key:"h9nckh"}],["path",{d:"M4 17h16",key:"g4d7ey"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=q("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=q("ArrowUpNarrowWide",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M11 12h4",key:"q8tih4"}],["path",{d:"M11 16h7",key:"uosisv"}],["path",{d:"M11 20h10",key:"jvxblo"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=q("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=q("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=q("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=q("Brain",[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",key:"1mhkh5"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",key:"1d6s00"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=q("Bug",[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",key:"xs1cw7"}],["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4",key:"k3fwyw"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=q("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=q("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=q("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=q("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=q("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=q("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=q("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rc=q("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=q("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sc=q("FileCode",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ac=q("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=q("GitFork",[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",key:"1uq4wg"}],["path",{d:"M12 12v3",key:"158kv8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=q("GitGraph",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M5 9v6",key:"158jrl"}],["circle",{cx:"5",cy:"18",r:"3",key:"104gr9"}],["path",{d:"M12 3v18",key:"108xh3"}],["circle",{cx:"19",cy:"6",r:"3",key:"108a5v"}],["path",{d:"M16 15.7A9 9 0 0 0 19 9",key:"1e3vqb"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zl=q("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=q("GraduationCap",[["path",{d:"M22 10v6M2 10l10-5 10 5-10 5z",key:"1ef52a"}],["path",{d:"M6 12v5c3 3 9 3 12 0v-5",key:"1f75yj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _a=q("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=q("HeartHandshake",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"12sd6o"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kn=q("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm=q("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=q("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=q("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const on=q("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const As=q("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Il=q("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=q("ListOrdered",[["line",{x1:"10",x2:"21",y1:"6",y2:"6",key:"76qw6h"}],["line",{x1:"10",x2:"21",y1:"12",y2:"12",key:"16nom4"}],["line",{x1:"10",x2:"21",y1:"18",y2:"18",key:"u3jurt"}],["path",{d:"M4 6h1v4",key:"cnovpq"}],["path",{d:"M4 10h2",key:"16xx2s"}],["path",{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1",key:"m9a95d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd=q("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=q("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=q("MoveUp",[["path",{d:"M8 6L12 2L16 6",key:"1yvkyx"}],["path",{d:"M12 2V22",key:"r89rzk"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ic=q("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=q("Pyramid",[["path",{d:"M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z",key:"aenxs0"}],["path",{d:"M12 2v20",key:"t6zp3m"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=q("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=q("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ml=q("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=q("TreeDeciduous",[["path",{d:"M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z",key:"oadzkq"}],["path",{d:"M12 19v3",key:"npa21l"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=q("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=q("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _d=q("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function Um(){const e=Dr(),[n,t]=g.useState(!1),s=e.pathname==="/"?"home":e.pathname.replace("/","").replace("_",""),a=()=>t(!n),i=()=>t(!1);g.useEffect(()=>{const o=()=>{window.innerWidth>1024&&t(!1)};return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[]),g.useEffect(()=>{n?document.body.style.overflow="hidden":document.body.style.overflow=""},[n]);const l=({to:o,icon:c,children:u,pageName:d})=>{const h=s===d;return r.jsxs(Dt,{to:o,className:`nav-item ${h?"active":""}`,onClick:i,children:[r.jsx(c,{}),r.jsx("span",{children:u})]})};return r.jsxs(r.Fragment,{children:[r.jsx("button",{className:"mobile-menu-toggle",id:"mobileMenuToggle","aria-label":"Toggle menu",onClick:a,children:n?r.jsx(Bm,{}):r.jsx(Vm,{})}),r.jsx("div",{className:`sidebar-overlay ${n?"active":""}`,onClick:i}),r.jsxs("aside",{className:`sidebar ${n?"active":""}`,id:"sidebar",children:[r.jsx("div",{className:"sidebar-header",children:r.jsxs(Dt,{to:"/",className:"logo-wrapper",onClick:i,children:[r.jsx("img",{src:"/logo.svg",alt:"DSA Visualizer Logo",className:"logo-icon"}),r.jsx("span",{className:"logo-text",children:"DSA Visualizer"})]})}),r.jsxs("nav",{className:"sidebar-nav",children:[r.jsxs("div",{className:"nav-section",children:[r.jsx("div",{className:"nav-section-title",children:"Explore"}),r.jsx(l,{to:"/",icon:zm,pageName:"home",children:"Home"}),r.jsx(l,{to:"/algorithms",icon:Tm,pageName:"algorithms",children:"Algorithms"})]}),r.jsxs("div",{className:"nav-section",children:[r.jsx("div",{className:"nav-section-title",children:"More"}),r.jsx(l,{to:"/contact",icon:Rd,pageName:"contact",children:"Contact"}),r.jsx(l,{to:"/contributions",icon:Pm,pageName:"contributions",children:"Contributions"})]})]}),r.jsxs("div",{className:"sidebar-footer",children:[r.jsxs("div",{className:"social-links-sidebar",children:[r.jsx("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",title:"GitHub",children:r.jsx(zl,{})}),r.jsx("a",{href:"https://www.linkedin.com/in/abdullah-mahfouz-5188b1306/",target:"_blank",rel:"noopener noreferrer",title:"LinkedIn",children:r.jsx(Il,{})})]}),r.jsx("p",{className:"copyright",children:"© 2026 Abdullah Mahfouz"})]})]})]})}function qm(){return r.jsx("footer",{className:"main-footer",children:r.jsxs("div",{className:"footer-content",children:[r.jsxs("div",{className:"footer-social",children:[r.jsxs("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"footer-link",children:[r.jsx(zl,{}),r.jsx("span",{children:"GitHub"})]}),r.jsxs("a",{href:"https://www.linkedin.com/in/abdullah-mahfouz-5188b1306/",target:"_blank",rel:"noopener noreferrer",className:"footer-link",children:[r.jsx(Il,{}),r.jsx("span",{children:"LinkedIn"})]})]}),r.jsx("p",{className:"footer-copyright",children:"© 2026 Abdullah Mahfouz"})]})})}function Km(){return r.jsxs(r.Fragment,{children:[r.jsxs("section",{className:"explore-hero",children:[r.jsx("div",{className:"hero-background"}),r.jsxs("div",{className:"hero-content-wrapper",children:[r.jsxs("div",{className:"hero-badge",children:[r.jsx(_m,{}),r.jsx("span",{children:"Free Student Learning Tool"})]}),r.jsxs("h1",{className:"hero-title",children:[r.jsx("span",{className:"gradient-text",children:"Learn"})," Data Structures & Algorithms"]}),r.jsx("p",{className:"hero-description",children:"A free, interactive learning tool designed to help students master DSA concepts. Visualize and understand them step-by-step."}),r.jsxs("div",{className:"hero-actions",children:[r.jsxs(Dt,{to:"/algorithms",className:"btn-primary",children:[r.jsx("span",{children:"Learn Now"}),r.jsx(pe,{})]}),r.jsxs(Dt,{to:"/stack",className:"btn-secondary",children:[r.jsx("span",{children:"Try Your First Visualizer"}),r.jsx(ic,{})]})]})]})]}),r.jsxs("section",{className:"features-section",children:[r.jsxs("div",{className:"section-header",children:[r.jsx("h2",{children:"How This Tool Helps Students"}),r.jsx("p",{children:"Designed specifically for students who find DSA challenging"})]}),r.jsxs("div",{className:"features-grid",children:[r.jsxs("div",{className:"feature-card",children:[r.jsx("div",{className:"feature-icon",children:r.jsx(Em,{})}),r.jsx("h3",{children:"See It in Action"}),r.jsx("p",{children:"Watch how data structures work with real-time visualizations. Perfect for visual learners who struggle with abstract concepts."})]}),r.jsxs("div",{className:"feature-card",children:[r.jsx("div",{className:"feature-icon",children:r.jsx(kn,{})}),r.jsx("h3",{children:"Step-by-Step Help"}),r.jsx("p",{children:"Detailed explanations for each operation. No more confusion about how push, pop, or insert actually work."})]}),r.jsxs("div",{className:"feature-card",children:[r.jsx("div",{className:"feature-icon",children:r.jsx(km,{})}),r.jsx("h3",{children:"AI Study Buddy"}),r.jsx("p",{children:"Stuck on a concept? Ask our AI assistant anything about DSA. Get instant, personalized explanations."})]}),r.jsxs("div",{className:"feature-card",children:[r.jsx("div",{className:"feature-icon",children:r.jsx(ic,{})}),r.jsx("h3",{children:"Learn by Doing"}),r.jsx("p",{children:"Practice makes perfect. Interact with data structures yourself to build confidence and understanding."})]})]})]})]})}function Wm(){const[e,n]=g.useState(null),t=a=>{n(e===a?null:a)},s=[{id:"linear",name:"Linear Data Structures",icon:Mm,description:"Elements stored sequentially where each element has a unique predecessor and successor. These are the building blocks of computer science — simple to implement yet powerful enough to solve complex problems.",color:"#6366f1",items:[{to:"/stack",icon:Im,title:"Stack",description:"LIFO (Last In, First Out) — imagine a stack of plates where you can only add or remove from the top. The most recent item is always accessed first. Push adds to top, Pop removes from top. Both operations are O(1) constant time. Essential for: browser back button (page history), undo/redo in editors, function call management in recursion, parsing expressions like (a+b)*c, and depth-first search algorithms.",available:!0},{to:"/queue",icon:tc,title:"Queue",description:"FIFO (First In, First Out) — like waiting in line at a coffee shop. The first person to arrive gets served first. Enqueue adds to the back, Dequeue removes from front. Both O(1) operations. Used everywhere: print job scheduling, CPU task management, breadth-first search (BFS) in graphs, handling requests in web servers, and buffering data streams like video playback.",available:!0},{to:"/linkedlist",icon:As,title:"Linked List",description:"A chain of nodes where each node stores data and a pointer to the next node. Unlike arrays, memory doesn't need to be contiguous — nodes can be scattered in memory. Insertion/deletion at known positions is O(1), but finding a position is O(n). Perfect for: implementing stacks/queues, music playlists (next/previous song), browser history, memory allocation in operating systems, and polynomial arithmetic.",available:!0}]},{id:"hash",name:"Hash-Tables",icon:rc,description:"Revolutionary data structures that use hash functions to map keys to array indices, enabling O(1) average-case lookup, insertion, and deletion. The backbone of databases, caches, and any system requiring fast key-value access.",color:"#10b981",items:[{to:"/hashtable_linear",icon:_a,title:"Linear Probing",description:'Open addressing collision resolution: when a collision occurs (two keys hash to same index), simply check the next slot, then the next, until an empty slot is found. Pros: excellent cache performance since data is stored contiguously, simple implementation. Cons: can cause "primary clustering" where long runs of occupied slots form, degrading performance. Load factor should stay below 0.7 for efficiency.',available:!0},{to:"/hashtable_quadratic",icon:_a,title:"Quadratic Probing",description:'Instead of checking consecutive slots, probe at quadratic intervals: 1², 2², 3²... positions away from the original hash. This eliminates primary clustering but can cause "secondary clustering" where keys with the same hash follow the same probe sequence. Table size should be prime and load factor < 0.5 to guarantee finding an empty slot. Used when cache performance is less critical than even distribution.',available:!0},{to:"/hashtable_chaining",icon:_a,title:"Separate Chaining",description:"Each array slot holds a linked list (chain) of all entries that hash to that index. No limit on how many items can be stored — just grow the chains. Handles high load factors gracefully (even > 1.0). Simpler deletion than open addressing. Used in Java's HashMap, Python's dict (with optimization). Trade-off: extra memory for pointers, potentially poor cache performance with long chains.",available:!0}]},{id:"heaps",name:"Priority Queues & Heaps",icon:Dm,description:"Complete binary trees satisfying the heap property — either every parent ≥ children (max-heap) or every parent ≤ children (min-heap). Heaps power priority queues, enabling O(1) access to the extreme element and O(log n) insertions and deletions.",color:"#ec4899",items:[{to:"/minheap",icon:fm,title:"Min Heap",description:`Every parent node is smaller than or equal to its children, so the minimum element is always at the root — accessible in O(1). Insert and extract-min are O(log n) as elements "bubble up" or "sink down" to maintain the heap property. Critical for: Dijkstra's shortest path algorithm, Prim's minimum spanning tree, job schedulers (process with smallest priority runs next), and efficiently finding the k largest elements in a stream.`,available:!0},{to:"/maxheap",icon:ym,title:"Max Heap",description:"The mirror of min-heap: every parent ≥ children, maximum at root. Extract-max in O(1), insert and delete in O(log n). Powers: Heapsort algorithm (in-place O(n log n) sorting), priority queues where highest priority goes first, finding k smallest elements, implementing a median-finding structure (use one min-heap + one max-heap), and bandwidth management in network routers.",available:!0}]},{id:"trees",name:"Binary Trees",icon:Am,description:"Hierarchical data structures where data flows from a root node down through children. Trees enable O(log n) operations on sorted data and model real-world hierarchies like file systems, organization charts, and decision trees in AI/ML.",color:"#f59e0b",items:[{to:"/binarytree",icon:ac,title:"Binary Tree Traversals",description:"Master the four fundamental ways to visit every node in a binary tree: INORDER (Left→Root→Right) visits nodes in sorted order for BST, used for expression trees; PREORDER (Root→Left→Right) processes root first, perfect for copying trees or creating prefix expressions; POSTORDER (Left→Right→Root) processes children before parent, used for deleting trees or postfix notation; LEVEL-ORDER (BFS) visits level by level, used for finding shortest paths and printing tree structure.",available:!0},{to:"/bst",icon:Rm,title:"Binary Search Tree",description:`The fundamental ordered tree: every node's left subtree contains only smaller values, right subtree only larger values. This property enables O(log n) search by eliminating half the tree at each step — like binary search but in tree form. Supports efficient range queries. Caveat: can degrade to O(n) if insertions create an unbalanced "stick". Foundation for databases, symbol tables, and more advanced balanced trees.`,available:!0},{to:"/avl",icon:Fm,title:"AVL Tree",description:"The first self-balancing BST, invented in 1962. Maintains strict balance: height difference between left and right subtrees ≤ 1 at every node. When insertion/deletion violates this, the tree self-corrects using rotations (single or double). Guarantees O(log n) for all operations. More rigidly balanced than Red-Black trees, so faster lookups but slightly slower insertions. Used when reads far exceed writes.",available:!0},{to:"/splay",icon:Hm,title:"Splay Tree",description:`A self-adjusting BST with a clever optimization: every accessed node is "splayed" (rotated) to the root. No explicit balance condition, yet achieves O(log n) amortized time. Recently accessed items stay near the root — perfect for caches where some items are accessed repeatedly (temporal locality). Used in Windows NT's virtual memory management, GCC's implementation of certain data structures, and network routers.`,available:!0}]},{id:"Graphs",name:"Graphs",icon:Om,description:"",color:"#ef4444",items:[{to:"/adjacency-matrix",icon:rc,title:"Adjacency Matrix",description:"A 2D array used to represent a finite graph. Each cell at (i, j) indicates if there is an edge from vertex i to vertex j. Simple and fast for dense graphs, but uses O(V^2) space. Not practical for large, sparse graphs.",available:!1},{to:"/adjacency-list",icon:As,title:"Adjacency List",description:"A space-efficient way to represent a graph. Each vertex stores a list of adjacent vertices. Ideal for sparse graphs, supports efficient iteration over neighbors. Commonly used in network routing, social networks, and recommendation systems.",available:!1},{to:"/bfs",icon:tc,title:"Breadth-First Search (BFS)",description:"A fundamental graph traversal algorithm that explores neighbors level by level. Used for finding shortest paths in unweighted graphs, peer-to-peer networks, and web crawlers.",available:!1},{to:"/dfs",icon:ac,title:"Depth-First Search (DFS)",description:"A classic graph traversal technique that explores as far as possible along each branch before backtracking. Used for topological sorting, cycle detection, and solving puzzles like mazes.",available:!1}]}];return r.jsxs("section",{className:"algorithms-section",children:[r.jsxs("div",{className:"section-header",children:[r.jsx("h1",{children:"Explore Data Structures"}),r.jsx("p",{children:"Choose a category to explore different data structures. Each visualizer includes step-by-step explanations and hands-on practice."})]}),r.jsx("div",{className:"categories-container",children:s.map(a=>r.jsxs("div",{className:"category-wrapper",children:[r.jsxs("button",{className:`category-header ${e===a.id?"expanded":""}`,onClick:()=>t(a.id),style:{"--category-color":a.color},children:[r.jsx("div",{className:"category-icon",style:{background:a.color},children:r.jsx(a.icon,{})}),r.jsxs("div",{className:"category-info",children:[r.jsx("h2",{children:a.name}),r.jsx("p",{children:a.description})]}),r.jsxs("div",{className:"category-meta",children:[r.jsxs("span",{className:"item-count",children:[a.items.filter(i=>i.available).length," available"]}),e===a.id?r.jsx(Sm,{}):r.jsx(wm,{})]})]}),r.jsx("div",{className:`category-items ${e===a.id?"expanded":""}`,children:r.jsx("div",{className:"items-grid",children:a.items.map((i,l)=>i.available?r.jsxs(Dt,{to:i.to,className:"algorithm-item",children:[r.jsx("div",{className:"item-icon",style:{background:a.color},children:r.jsx(i.icon,{})}),r.jsxs("div",{className:"item-info",children:[r.jsx("h3",{children:i.title}),r.jsx("p",{children:i.description})]}),r.jsx(pe,{className:"item-arrow"})]},l):r.jsxs("div",{className:"algorithm-item coming-soon",children:[r.jsx("div",{className:"item-icon disabled",children:r.jsx(i.icon,{})}),r.jsxs("div",{className:"item-info",children:[r.jsx("h3",{children:i.title}),r.jsx("p",{children:i.description})]}),r.jsx("span",{className:"coming-soon-badge",children:"Coming Soon"})]},l))})})]},a.id))})]})}function Qm(){return r.jsxs("section",{className:"contact-section",children:[r.jsx("div",{className:"page-header",children:r.jsx("h1",{children:"Contact"})}),r.jsx("div",{className:"contact-content",children:r.jsxs("div",{className:"contact-info",children:[r.jsxs("div",{className:"info-card",children:[r.jsx("div",{className:"info-icon",children:r.jsx(Rd,{})}),r.jsx("h3",{children:"Email"}),r.jsx("p",{children:"For recruitment and professional opportunities"}),r.jsx("a",{href:"mailto:abdullahmahfouz@trentu.ca",className:"info-link",children:"abdullahmahfouz@trentu.ca"})]}),r.jsxs("div",{className:"info-card",children:[r.jsx("div",{className:"info-icon",children:r.jsx(zl,{})}),r.jsx("h3",{children:"GitHub"}),r.jsx("p",{children:"View my projects and contributions"}),r.jsx("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"info-link",children:"github.com/abdullahmahfouz"})]}),r.jsxs("div",{className:"info-card",children:[r.jsx("div",{className:"info-icon",children:r.jsx(Il,{})}),r.jsx("h3",{children:"LinkedIn"}),r.jsx("p",{children:"Connect for professional networking"}),r.jsx("a",{href:"https://www.linkedin.com/in/abdullah-mahfouz-5188b1306/",target:"_blank",rel:"noopener noreferrer",className:"info-link",children:"Connect on LinkedIn"})]})]})})]})}function Gm(){return r.jsxs("section",{className:"contributions-section",children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h1",{children:"Contributions"}),r.jsx("p",{children:"Help us improve this free learning tool for students! Your contributions help make DSA easier to understand for everyone."})]}),r.jsxs("div",{className:"contributions-content",children:[r.jsxs("div",{className:"contribution-card",children:[r.jsx("div",{className:"contribution-icon",children:r.jsx(Cm,{})}),r.jsx("h2",{children:"Code Contributions"}),r.jsx("p",{children:"Found a bug or want to add a new feature? Fork the repository, make your changes, and submit a pull request!"}),r.jsxs("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"btn-primary",children:[r.jsx("span",{children:"View on GitHub"}),r.jsx(pe,{})]})]}),r.jsxs("div",{className:"contribution-card",children:[r.jsx("div",{className:"contribution-icon",children:r.jsx(vm,{})}),r.jsx("h2",{children:"Documentation"}),r.jsx("p",{children:"Help improve our documentation, fix typos, or add examples. Every bit helps!"}),r.jsxs("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"btn-primary",children:[r.jsx("span",{children:"Improve Docs"}),r.jsx(pe,{})]})]}),r.jsxs("div",{className:"contribution-card",children:[r.jsx("div",{className:"contribution-icon",children:r.jsx(Nm,{})}),r.jsx("h2",{children:"Report Issues"}),r.jsx("p",{children:"Found a bug or have a suggestion? Open an issue on GitHub and let us know!"}),r.jsxs("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"btn-primary",children:[r.jsx("span",{children:"Report Issue"}),r.jsx(pe,{})]})]}),r.jsxs("div",{className:"contribution-card",children:[r.jsx("div",{className:"contribution-icon",children:r.jsx(on,{})}),r.jsx("h2",{children:"Feature Requests"}),r.jsx("p",{children:"Have an idea for a new visualizer or feature? We'd love to hear your suggestions!"}),r.jsxs(Dt,{to:"/contact",className:"btn-primary",children:[r.jsx("span",{children:"Suggest Feature"}),r.jsx(pe,{})]})]})]}),r.jsxs("div",{className:"contributors-section",children:[r.jsx("h2",{children:"Contributors"}),r.jsx("div",{className:"contributors-list",children:r.jsxs("div",{className:"contributor-item",children:[r.jsx("div",{className:"contributor-avatar",children:r.jsx($m,{})}),r.jsxs("div",{className:"contributor-info",children:[r.jsx("h3",{children:"Abdullah Mahfouz"}),r.jsx("p",{children:"Creator & Maintainer"})]})]})}),r.jsx("p",{className:"contributors-note",children:"Want to see your name here? Start contributing today!"})]})]})}function qe({context:e="Data Structures"}){const[n,t]=g.useState(""),[s,a]=g.useState(""),[i,l]=g.useState(!1),o=()=>{const d=e.toLowerCase();return d.includes("stack")?"e.g., How does LIFO work?":d.includes("queue")?"e.g., What is FIFO?":d.includes("linked list")?"e.g., How do I insert at the head?":d.includes("hash")?"e.g., What is a collision?":d.includes("binary tree")||d.includes("traversal")?"e.g., What is inorder traversal?":"e.g., How does this work?"},c=async()=>{if(n.trim()){l(!0),a("");try{const d=await fetch("/api/ask-ai",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:n.trim(),code:e})}),h=await d.json();d.ok?a(h.answer||"No answer returned."):a("Currently not working, try again later.")}catch{a("Currently not working, try again later.")}finally{l(!1)}}},u=d=>{d.key==="Enter"&&c()};return r.jsxs("div",{className:"ai-assistant",children:[r.jsxs("h3",{children:[r.jsx(xm,{}),"AI Assistant"]}),r.jsxs("p",{children:["Ask me anything about ",e.toLowerCase(),"!"]}),r.jsxs("div",{className:"ai-input-group",children:[r.jsx("input",{type:"text",value:n,onChange:d=>t(d.target.value),onKeyPress:u,placeholder:o(),disabled:i}),r.jsx("button",{onClick:c,disabled:i,children:i?"Asking...":"Ask"})]}),r.jsxs("div",{id:"ai-response",children:[i&&r.jsx("div",{className:"ai-loading",children:"Thinking..."}),s&&r.jsx("div",{className:s.startsWith("Error")?"ai-error":"ai-answer",children:s})]})]})}const Zm=`class Stack:
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
print(stack.peek())  # 20`,Jm=`class Stack {
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
console.log(stack.pop()); // 20`,Xm=`import java.util.EmptyStackException;

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
System.out.println(stack.pop()); // 20`,Ym={python:Zm,javascript:Jm,java:Xm,"c++":`#include <iostream>
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
Console.WriteLine(stack.Pop()); // 20`},ey=`class Queue:
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
print(queue.peek())     # 20`,ny=`class Queue {
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
console.log(queue.dequeue()); // 10`,ty=`import java.util.NoSuchElementException;

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
System.out.println(queue.dequeue()); // 10`,ry={python:ey,javascript:ny,java:ty,"c++":`#include <iostream>
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
Console.WriteLine(queue.Dequeue()); // 10`},sy=`class Node:
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
print(ll.search(20))  # 1`,ay=`class Node {
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
ll.insertAtTail(30);`,iy=`public class SinglyLinkedList<T> {
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
ll.insertAtTail(30);`,ly={python:sy,javascript:ay,java:iy,"c++":`#include <iostream>
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
ll.InsertAtTail(30);`},oy=`class TreeNode:
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
print("Level:     ", tree.levelorder_traversal())  # [50, 30, 70, 20, 40, 60, 80]`,cy=`class TreeNode {
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
console.log("Level:    ", tree.levelOrderTraversal());  // [50, 30, 70, 20, 40, 60, 80]`,uy=`import java.util.*;

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
System.out.println("Level:     " + tree.levelOrderTraversal());`,dy={python:oy,javascript:cy,java:uy,"c++":`#include <iostream>
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
Console.WriteLine("Level:     " + string.Join(", ", tree.LevelOrderTraversal()));`},hy=`class HashTable:
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
print(ht.get("banana"))  # 3`,py=`class HashTable {
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
console.log(ht.get("apple"));  // 5`,fy=`public class HashTable<K, V> {
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
System.out.println(ht.get("apple")); // 5`,my={python:hy,javascript:py,java:fy,"c++":`#include <iostream>
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
Console.WriteLine(ht.Get("apple")); // 5`},yy=`class Node:
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
ht.delete("banana")`,gy=`class Node {
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
console.log(ht.search("apple"));  // 5`,vy=`public class HashTableChaining<K, V> {
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
System.out.println(ht.search("apple"));  // 5`,xy={python:yy,javascript:gy,java:vy,"c++":`#include <iostream>
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
Console.WriteLine(ht.Search("apple"));  // 5`},ky=`class TreeNode:
    """Node in a Binary Search Tree"""
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None

class BST:
    """Binary Search Tree - Left < Root < Right"""
    
    def __init__(self):
        self.root = None
    
    def insert(self, key):
        """Insert maintaining BST property - O(log n) avg"""
        if not self.root:
            self.root = TreeNode(key)
            return
        self._insert_rec(self.root, key)
    
    def _insert_rec(self, node, key):
        if key < node.key:
            if node.left is None:
                node.left = TreeNode(key)
            else:
                self._insert_rec(node.left, key)
        else:
            if node.right is None:
                node.right = TreeNode(key)
            else:
                self._insert_rec(node.right, key)
    
    def search(self, key):
        """Search for key - O(log n) avg"""
        return self._search_rec(self.root, key)
    
    def _search_rec(self, node, key):
        if node is None or node.key == key:
            return node
        if key < node.key:
            return self._search_rec(node.left, key)
        return self._search_rec(node.right, key)
    
    def delete(self, key):
        """Delete node with key - O(log n) avg"""
        self.root = self._delete_rec(self.root, key)
    
    def _delete_rec(self, node, key):
        if node is None:
            return node
        
        if key < node.key:
            node.left = self._delete_rec(node.left, key)
        elif key > node.key:
            node.right = self._delete_rec(node.right, key)
        else:
            # Node found - handle 3 cases
            # Case 1 & 2: No child or one child
            if node.left is None:
                return node.right
            elif node.right is None:
                return node.left
            # Case 3: Two children - get inorder successor
            successor = self._min_value(node.right)
            node.key = successor.key
            node.right = self._delete_rec(node.right, successor.key)
        return node
    
    def _min_value(self, node):
        """Find minimum value node (leftmost)"""
        current = node
        while current.left:
            current = current.left
        return current
    
    def inorder(self):
        """Inorder traversal - returns sorted order!"""
        result = []
        self._inorder_rec(self.root, result)
        return result
    
    def _inorder_rec(self, node, result):
        if node:
            self._inorder_rec(node.left, result)
            result.append(node.key)
            self._inorder_rec(node.right, result)

# Usage
bst = BST()
for val in [50, 30, 70, 20, 40, 60, 80]:
    bst.insert(val)

print("Inorder (sorted):", bst.inorder())  # [20, 30, 40, 50, 60, 70, 80]
print("Search 40:", bst.search(40) is not None)  # True
bst.delete(30)  # Delete node with two children
print("After delete 30:", bst.inorder())  # [20, 40, 50, 60, 70, 80]`,Ny=`class TreeNode {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class BST {
    // Binary Search Tree - Left < Root < Right
    
    constructor() {
        this.root = null;
    }
    
    insert(key) {
        // Insert maintaining BST property - O(log n) avg
        if (!this.root) {
            this.root = new TreeNode(key);
            return;
        }
        this._insertRec(this.root, key);
    }
    
    _insertRec(node, key) {
        if (key < node.key) {
            if (!node.left) {
                node.left = new TreeNode(key);
            } else {
                this._insertRec(node.left, key);
            }
        } else {
            if (!node.right) {
                node.right = new TreeNode(key);
            } else {
                this._insertRec(node.right, key);
            }
        }
    }
    
    search(key) {
        // Search for key - O(log n) avg
        return this._searchRec(this.root, key);
    }
    
    _searchRec(node, key) {
        if (!node || node.key === key) return node;
        if (key < node.key) return this._searchRec(node.left, key);
        return this._searchRec(node.right, key);
    }
    
    delete(key) {
        // Delete node with key - O(log n) avg
        this.root = this._deleteRec(this.root, key);
    }
    
    _deleteRec(node, key) {
        if (!node) return node;
        
        if (key < node.key) {
            node.left = this._deleteRec(node.left, key);
        } else if (key > node.key) {
            node.right = this._deleteRec(node.right, key);
        } else {
            // Node found - handle 3 cases
            if (!node.left) return node.right;
            if (!node.right) return node.left;
            // Two children - get inorder successor
            const successor = this._minValue(node.right);
            node.key = successor.key;
            node.right = this._deleteRec(node.right, successor.key);
        }
        return node;
    }
    
    _minValue(node) {
        // Find minimum value node (leftmost)
        let current = node;
        while (current.left) current = current.left;
        return current;
    }
    
    inorder() {
        // Inorder traversal - returns sorted order!
        const result = [];
        this._inorderRec(this.root, result);
        return result;
    }
    
    _inorderRec(node, result) {
        if (node) {
            this._inorderRec(node.left, result);
            result.push(node.key);
            this._inorderRec(node.right, result);
        }
    }
}

// Usage
const bst = new BST();
[50, 30, 70, 20, 40, 60, 80].forEach(val => bst.insert(val));

console.log("Inorder (sorted):", bst.inorder());  // [20, 30, 40, 50, 60, 70, 80]
console.log("Search 40:", bst.search(40) !== null);  // true
bst.delete(30);  // Delete node with two children
console.log("After delete 30:", bst.inorder());  // [20, 40, 50, 60, 70, 80]`,jy=`import java.util.*;

class TreeNode {
    int key;
    TreeNode left, right;
    
    TreeNode(int key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

public class BST {
    // Binary Search Tree - Left < Root < Right
    private TreeNode root;
    
    public BST() {
        this.root = null;
    }
    
    public void insert(int key) {
        // Insert maintaining BST property - O(log n) avg
        if (root == null) {
            root = new TreeNode(key);
            return;
        }
        insertRec(root, key);
    }
    
    private void insertRec(TreeNode node, int key) {
        if (key < node.key) {
            if (node.left == null) node.left = new TreeNode(key);
            else insertRec(node.left, key);
        } else {
            if (node.right == null) node.right = new TreeNode(key);
            else insertRec(node.right, key);
        }
    }
    
    public TreeNode search(int key) {
        // Search for key - O(log n) avg
        return searchRec(root, key);
    }
    
    private TreeNode searchRec(TreeNode node, int key) {
        if (node == null || node.key == key) return node;
        if (key < node.key) return searchRec(node.left, key);
        return searchRec(node.right, key);
    }
    
    public void delete(int key) {
        // Delete node with key - O(log n) avg
        root = deleteRec(root, key);
    }
    
    private TreeNode deleteRec(TreeNode node, int key) {
        if (node == null) return node;
        
        if (key < node.key) {
            node.left = deleteRec(node.left, key);
        } else if (key > node.key) {
            node.right = deleteRec(node.right, key);
        } else {
            // Node found - handle 3 cases
            if (node.left == null) return node.right;
            if (node.right == null) return node.left;
            // Two children - get inorder successor
            TreeNode successor = minValue(node.right);
            node.key = successor.key;
            node.right = deleteRec(node.right, successor.key);
        }
        return node;
    }
    
    private TreeNode minValue(TreeNode node) {
        // Find minimum value node (leftmost)
        TreeNode current = node;
        while (current.left != null) current = current.left;
        return current;
    }
    
    public List<Integer> inorder() {
        // Inorder traversal - returns sorted order!
        List<Integer> result = new ArrayList<>();
        inorderRec(root, result);
        return result;
    }
    
    private void inorderRec(TreeNode node, List<Integer> result) {
        if (node != null) {
            inorderRec(node.left, result);
            result.add(node.key);
            inorderRec(node.right, result);
        }
    }
}

// Usage
BST bst = new BST();
for (int val : new int[]{50, 30, 70, 20, 40, 60, 80}) bst.insert(val);

System.out.println("Inorder: " + bst.inorder());  // [20, 30, 40, 50, 60, 70, 80]
System.out.println("Search 40: " + (bst.search(40) != null));  // true
bst.delete(30);  // Delete node with two children
System.out.println("After delete: " + bst.inorder());  // [20, 40, 50, 60, 70, 80]`,wy={python:ky,javascript:Ny,java:jy,"c++":`#include <iostream>
#include <vector>
using namespace std;

struct TreeNode {
    int key;
    TreeNode *left, *right;
    TreeNode(int k) : key(k), left(nullptr), right(nullptr) {}
};

class BST {
    // Binary Search Tree - Left < Root < Right
private:
    TreeNode* root;
    
    void insertRec(TreeNode* node, int key) {
        if (key < node->key) {
            if (!node->left) node->left = new TreeNode(key);
            else insertRec(node->left, key);
        } else {
            if (!node->right) node->right = new TreeNode(key);
            else insertRec(node->right, key);
        }
    }
    
    TreeNode* searchRec(TreeNode* node, int key) {
        if (!node || node->key == key) return node;
        if (key < node->key) return searchRec(node->left, key);
        return searchRec(node->right, key);
    }
    
    TreeNode* minValue(TreeNode* node) {
        TreeNode* current = node;
        while (current->left) current = current->left;
        return current;
    }
    
    TreeNode* deleteRec(TreeNode* node, int key) {
        if (!node) return node;
        
        if (key < node->key) {
            node->left = deleteRec(node->left, key);
        } else if (key > node->key) {
            node->right = deleteRec(node->right, key);
        } else {
            // Node found - handle 3 cases
            if (!node->left) return node->right;
            if (!node->right) return node->left;
            // Two children - get inorder successor
            TreeNode* successor = minValue(node->right);
            node->key = successor->key;
            node->right = deleteRec(node->right, successor->key);
        }
        return node;
    }
    
    void inorderRec(TreeNode* node, vector<int>& result) {
        if (node) {
            inorderRec(node->left, result);
            result.push_back(node->key);
            inorderRec(node->right, result);
        }
    }

public:
    BST() : root(nullptr) {}
    
    void insert(int key) {
        // Insert maintaining BST property - O(log n) avg
        if (!root) { root = new TreeNode(key); return; }
        insertRec(root, key);
    }
    
    TreeNode* search(int key) {
        // Search for key - O(log n) avg
        return searchRec(root, key);
    }
    
    void remove(int key) {
        // Delete node with key - O(log n) avg
        root = deleteRec(root, key);
    }
    
    vector<int> inorder() {
        // Inorder traversal - returns sorted order!
        vector<int> result;
        inorderRec(root, result);
        return result;
    }
};

// Usage
int main() {
    BST bst;
    for (int val : {50, 30, 70, 20, 40, 60, 80}) bst.insert(val);
    
    // Inorder (sorted): [20, 30, 40, 50, 60, 70, 80]
    // Search 40: true
    bst.remove(30);  // Delete node with two children
    // After delete: [20, 40, 50, 60, 70, 80]
    return 0;
}`,"c#":`using System;
using System.Collections.Generic;

public class TreeNode
{
    public int Key { get; set; }
    public TreeNode Left { get; set; }
    public TreeNode Right { get; set; }
    
    public TreeNode(int key)
    {
        Key = key;
        Left = null;
        Right = null;
    }
}

public class BST
{
    // Binary Search Tree - Left < Root < Right
    private TreeNode root;
    
    public BST() { root = null; }
    
    public void Insert(int key)
    {
        // Insert maintaining BST property - O(log n) avg
        if (root == null) { root = new TreeNode(key); return; }
        InsertRec(root, key);
    }
    
    private void InsertRec(TreeNode node, int key)
    {
        if (key < node.Key)
        {
            if (node.Left == null) node.Left = new TreeNode(key);
            else InsertRec(node.Left, key);
        }
        else
        {
            if (node.Right == null) node.Right = new TreeNode(key);
            else InsertRec(node.Right, key);
        }
    }
    
    public TreeNode Search(int key)
    {
        // Search for key - O(log n) avg
        return SearchRec(root, key);
    }
    
    private TreeNode SearchRec(TreeNode node, int key)
    {
        if (node == null || node.Key == key) return node;
        if (key < node.Key) return SearchRec(node.Left, key);
        return SearchRec(node.Right, key);
    }
    
    public void Delete(int key)
    {
        // Delete node with key - O(log n) avg
        root = DeleteRec(root, key);
    }
    
    private TreeNode DeleteRec(TreeNode node, int key)
    {
        if (node == null) return node;
        
        if (key < node.Key)
            node.Left = DeleteRec(node.Left, key);
        else if (key > node.Key)
            node.Right = DeleteRec(node.Right, key);
        else
        {
            // Node found - handle 3 cases
            if (node.Left == null) return node.Right;
            if (node.Right == null) return node.Left;
            // Two children - get inorder successor
            var successor = MinValue(node.Right);
            node.Key = successor.Key;
            node.Right = DeleteRec(node.Right, successor.Key);
        }
        return node;
    }
    
    private TreeNode MinValue(TreeNode node)
    {
        var current = node;
        while (current.Left != null) current = current.Left;
        return current;
    }
    
    public List<int> Inorder()
    {
        // Inorder traversal - returns sorted order!
        var result = new List<int>();
        InorderRec(root, result);
        return result;
    }
    
    private void InorderRec(TreeNode node, List<int> result)
    {
        if (node != null)
        {
            InorderRec(node.Left, result);
            result.Add(node.Key);
            InorderRec(node.Right, result);
        }
    }
}

// Usage
var bst = new BST();
foreach (var val in new[] {50, 30, 70, 20, 40, 60, 80}) bst.Insert(val);

Console.WriteLine("Inorder: " + string.Join(", ", bst.Inorder()));
Console.WriteLine("Search 40: " + (bst.Search(40) != null));
bst.Delete(30);  // Delete node with two children
Console.WriteLine("After delete: " + string.Join(", ", bst.Inorder()));`},Sy=`class AVLNode:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None
        self.height = 1

class AVLTree:
    """Self-balancing BST with O(log n) guaranteed"""
    
    def __init__(self):
        self.root = None
    
    def height(self, node):
        return node.height if node else 0
    
    def balance_factor(self, node):
        return self.height(node.left) - self.height(node.right) if node else 0
    
    def rotate_right(self, y):
        """Right rotation for Left-Left case"""
        x = y.left
        T2 = x.right
        x.right = y
        y.left = T2
        y.height = 1 + max(self.height(y.left), self.height(y.right))
        x.height = 1 + max(self.height(x.left), self.height(x.right))
        return x
    
    def rotate_left(self, x):
        """Left rotation for Right-Right case"""
        y = x.right
        T2 = y.left
        y.left = x
        x.right = T2
        x.height = 1 + max(self.height(x.left), self.height(x.right))
        y.height = 1 + max(self.height(y.left), self.height(y.right))
        return y
    
    def insert(self, key):
        self.root = self._insert(self.root, key)
    
    def _insert(self, node, key):
        # Standard BST insert
        if not node:
            return AVLNode(key)
        if key < node.key:
            node.left = self._insert(node.left, key)
        elif key > node.key:
            node.right = self._insert(node.right, key)
        else:
            return node  # No duplicates
        
        # Update height
        node.height = 1 + max(self.height(node.left), self.height(node.right))
        
        # Get balance factor and rebalance if needed
        bf = self.balance_factor(node)
        
        # Left Left -> Right rotation
        if bf > 1 and key < node.left.key:
            return self.rotate_right(node)
        # Right Right -> Left rotation
        if bf < -1 and key > node.right.key:
            return self.rotate_left(node)
        # Left Right -> Left-Right rotation
        if bf > 1 and key > node.left.key:
            node.left = self.rotate_left(node.left)
            return self.rotate_right(node)
        # Right Left -> Right-Left rotation
        if bf < -1 and key < node.right.key:
            node.right = self.rotate_right(node.right)
            return self.rotate_left(node)
        
        return node

# Usage
avl = AVLTree()
for val in [30, 20, 40, 10, 25, 35, 50]:
    avl.insert(val)
# Tree automatically balances after each insert!`,by=`class AVLNode {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

class AVLTree {
    // Self-balancing BST with O(log n) guaranteed
    
    constructor() {
        this.root = null;
    }
    
    height(node) {
        return node ? node.height : 0;
    }
    
    balanceFactor(node) {
        return node ? this.height(node.left) - this.height(node.right) : 0;
    }
    
    rotateRight(y) {
        // Right rotation for Left-Left case
        const x = y.left;
        const T2 = x.right;
        x.right = y;
        y.left = T2;
        y.height = 1 + Math.max(this.height(y.left), this.height(y.right));
        x.height = 1 + Math.max(this.height(x.left), this.height(x.right));
        return x;
    }
    
    rotateLeft(x) {
        // Left rotation for Right-Right case
        const y = x.right;
        const T2 = y.left;
        y.left = x;
        x.right = T2;
        x.height = 1 + Math.max(this.height(x.left), this.height(x.right));
        y.height = 1 + Math.max(this.height(y.left), this.height(y.right));
        return y;
    }
    
    insert(key) {
        this.root = this._insert(this.root, key);
    }
    
    _insert(node, key) {
        if (!node) return new AVLNode(key);
        
        if (key < node.key) node.left = this._insert(node.left, key);
        else if (key > node.key) node.right = this._insert(node.right, key);
        else return node; // No duplicates
        
        node.height = 1 + Math.max(this.height(node.left), this.height(node.right));
        const bf = this.balanceFactor(node);
        
        // Left Left
        if (bf > 1 && key < node.left.key) return this.rotateRight(node);
        // Right Right
        if (bf < -1 && key > node.right.key) return this.rotateLeft(node);
        // Left Right
        if (bf > 1 && key > node.left.key) {
            node.left = this.rotateLeft(node.left);
            return this.rotateRight(node);
        }
        // Right Left
        if (bf < -1 && key < node.right.key) {
            node.right = this.rotateRight(node.right);
            return this.rotateLeft(node);
        }
        return node;
    }
}

// Usage
const avl = new AVLTree();
[30, 20, 40, 10, 25, 35, 50].forEach(v => avl.insert(v));`,Ty=`class AVLNode {
    int key, height;
    AVLNode left, right;
    AVLNode(int key) { this.key = key; this.height = 1; }
}

public class AVLTree {
    // Self-balancing BST with O(log n) guaranteed
    private AVLNode root;
    
    int height(AVLNode node) { return node == null ? 0 : node.height; }
    
    int balanceFactor(AVLNode node) {
        return node == null ? 0 : height(node.left) - height(node.right);
    }
    
    AVLNode rotateRight(AVLNode y) {
        AVLNode x = y.left, T2 = x.right;
        x.right = y;
        y.left = T2;
        y.height = 1 + Math.max(height(y.left), height(y.right));
        x.height = 1 + Math.max(height(x.left), height(x.right));
        return x;
    }
    
    AVLNode rotateLeft(AVLNode x) {
        AVLNode y = x.right, T2 = y.left;
        y.left = x;
        x.right = T2;
        x.height = 1 + Math.max(height(x.left), height(x.right));
        y.height = 1 + Math.max(height(y.left), height(y.right));
        return y;
    }
    
    public void insert(int key) { root = insert(root, key); }
    
    private AVLNode insert(AVLNode node, int key) {
        if (node == null) return new AVLNode(key);
        
        if (key < node.key) node.left = insert(node.left, key);
        else if (key > node.key) node.right = insert(node.right, key);
        else return node;
        
        node.height = 1 + Math.max(height(node.left), height(node.right));
        int bf = balanceFactor(node);
        
        if (bf > 1 && key < node.left.key) return rotateRight(node);
        if (bf < -1 && key > node.right.key) return rotateLeft(node);
        if (bf > 1 && key > node.left.key) {
            node.left = rotateLeft(node.left);
            return rotateRight(node);
        }
        if (bf < -1 && key < node.right.key) {
            node.right = rotateRight(node.right);
            return rotateLeft(node);
        }
        return node;
    }
}

// Usage
AVLTree avl = new AVLTree();
for (int v : new int[]{30, 20, 40, 10, 25}) avl.insert(v);`,Cy={python:Sy,javascript:by,java:Ty,"c++":`#include <algorithm>
using namespace std;

struct AVLNode {
    int key, height;
    AVLNode *left, *right;
    AVLNode(int k) : key(k), height(1), left(nullptr), right(nullptr) {}
};

class AVLTree {
    // Self-balancing BST with O(log n) guaranteed
    AVLNode* root = nullptr;
    
    int height(AVLNode* n) { return n ? n->height : 0; }
    int bf(AVLNode* n) { return n ? height(n->left) - height(n->right) : 0; }
    
    AVLNode* rotateRight(AVLNode* y) {
        AVLNode* x = y->left;
        y->left = x->right;
        x->right = y;
        y->height = 1 + max(height(y->left), height(y->right));
        x->height = 1 + max(height(x->left), height(x->right));
        return x;
    }
    
    AVLNode* rotateLeft(AVLNode* x) {
        AVLNode* y = x->right;
        x->right = y->left;
        y->left = x;
        x->height = 1 + max(height(x->left), height(x->right));
        y->height = 1 + max(height(y->left), height(y->right));
        return y;
    }
    
    AVLNode* insert(AVLNode* node, int key) {
        if (!node) return new AVLNode(key);
        
        if (key < node->key) node->left = insert(node->left, key);
        else if (key > node->key) node->right = insert(node->right, key);
        else return node;
        
        node->height = 1 + max(height(node->left), height(node->right));
        int balance = bf(node);
        
        if (balance > 1 && key < node->left->key) return rotateRight(node);
        if (balance < -1 && key > node->right->key) return rotateLeft(node);
        if (balance > 1 && key > node->left->key) {
            node->left = rotateLeft(node->left);
            return rotateRight(node);
        }
        if (balance < -1 && key < node->right->key) {
            node->right = rotateRight(node->right);
            return rotateLeft(node);
        }
        return node;
    }
    
public:
    void insert(int key) { root = insert(root, key); }
};

// Usage: AVLTree avl; for(int v : {30,20,40,10,25}) avl.insert(v);`,"c#":`public class AVLNode {
    public int Key { get; set; }
    public int Height { get; set; } = 1;
    public AVLNode Left { get; set; }
    public AVLNode Right { get; set; }
    public AVLNode(int key) { Key = key; }
}

public class AVLTree {
    // Self-balancing BST with O(log n) guaranteed
    private AVLNode root;
    
    int Height(AVLNode n) => n?.Height ?? 0;
    int BalanceFactor(AVLNode n) => n == null ? 0 : Height(n.Left) - Height(n.Right);
    
    AVLNode RotateRight(AVLNode y) {
        var x = y.Left;
        y.Left = x.Right;
        x.Right = y;
        y.Height = 1 + Math.Max(Height(y.Left), Height(y.Right));
        x.Height = 1 + Math.Max(Height(x.Left), Height(x.Right));
        return x;
    }
    
    AVLNode RotateLeft(AVLNode x) {
        var y = x.Right;
        x.Right = y.Left;
        y.Left = x;
        x.Height = 1 + Math.Max(Height(x.Left), Height(x.Right));
        y.Height = 1 + Math.Max(Height(y.Left), Height(y.Right));
        return y;
    }
    
    public void Insert(int key) => root = Insert(root, key);
    
    private AVLNode Insert(AVLNode node, int key) {
        if (node == null) return new AVLNode(key);
        
        if (key < node.Key) node.Left = Insert(node.Left, key);
        else if (key > node.Key) node.Right = Insert(node.Right, key);
        else return node;
        
        node.Height = 1 + Math.Max(Height(node.Left), Height(node.Right));
        int bf = BalanceFactor(node);
        
        if (bf > 1 && key < node.Left.Key) return RotateRight(node);
        if (bf < -1 && key > node.Right.Key) return RotateLeft(node);
        if (bf > 1 && key > node.Left.Key) {
            node.Left = RotateLeft(node.Left);
            return RotateRight(node);
        }
        if (bf < -1 && key < node.Right.Key) {
            node.Right = RotateRight(node.Right);
            return RotateLeft(node);
        }
        return node;
    }
}

// Usage: var avl = new AVLTree(); foreach(var v in new[]{30,20,40}) avl.Insert(v);`},Ly=`class SplayNode:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None

class SplayTree:
    """Self-adjusting BST - accessed nodes move to root"""
    
    def __init__(self):
        self.root = None
    
    def _rotate_right(self, x):
        y = x.left
        x.left = y.right
        y.right = x
        return y
    
    def _rotate_left(self, x):
        y = x.right
        x.right = y.left
        y.left = x
        return y
    
    def _splay(self, root, key):
        """Splay operation - bring key to root"""
        if not root or root.key == key:
            return root
        
        # Key in left subtree
        if key < root.key:
            if not root.left:
                return root
            # Zig-Zig (Left Left)
            if key < root.left.key:
                root.left.left = self._splay(root.left.left, key)
                root = self._rotate_right(root)
            # Zig-Zag (Left Right)
            elif key > root.left.key:
                root.left.right = self._splay(root.left.right, key)
                if root.left.right:
                    root.left = self._rotate_left(root.left)
            return root if not root.left else self._rotate_right(root)
        
        # Key in right subtree
        else:
            if not root.right:
                return root
            # Zig-Zag (Right Left)
            if key < root.right.key:
                root.right.left = self._splay(root.right.left, key)
                if root.right.left:
                    root.right = self._rotate_right(root.right)
            # Zig-Zig (Right Right)
            elif key > root.right.key:
                root.right.right = self._splay(root.right.right, key)
                root = self._rotate_left(root)
            return root if not root.right else self._rotate_left(root)
    
    def search(self, key):
        """Search and splay to root - O(log n) amortized"""
        self.root = self._splay(self.root, key)
        return self.root if self.root and self.root.key == key else None
    
    def insert(self, key):
        """Insert and splay new node to root"""
        if not self.root:
            self.root = SplayNode(key)
            return
        
        self.root = self._splay(self.root, key)
        if self.root.key == key:
            return  # Key exists
        
        node = SplayNode(key)
        if key < self.root.key:
            node.right = self.root
            node.left = self.root.left
            self.root.left = None
        else:
            node.left = self.root
            node.right = self.root.right
            self.root.right = None
        self.root = node

# Usage
splay = SplayTree()
for val in [50, 30, 70, 20, 40]:
    splay.insert(val)

splay.search(20)  # 20 is now at root!
print("Root:", splay.root.key)  # 20`,Ey=`class SplayNode {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class SplayTree {
    // Self-adjusting BST - accessed nodes move to root
    
    constructor() {
        this.root = null;
    }
    
    _rotateRight(x) {
        const y = x.left;
        x.left = y.right;
        y.right = x;
        return y;
    }
    
    _rotateLeft(x) {
        const y = x.right;
        x.right = y.left;
        y.left = x;
        return y;
    }
    
    _splay(root, key) {
        if (!root || root.key === key) return root;
        
        if (key < root.key) {
            if (!root.left) return root;
            if (key < root.left.key) {
                root.left.left = this._splay(root.left.left, key);
                root = this._rotateRight(root);
            } else if (key > root.left.key) {
                root.left.right = this._splay(root.left.right, key);
                if (root.left.right) root.left = this._rotateLeft(root.left);
            }
            return !root.left ? root : this._rotateRight(root);
        } else {
            if (!root.right) return root;
            if (key < root.right.key) {
                root.right.left = this._splay(root.right.left, key);
                if (root.right.left) root.right = this._rotateRight(root.right);
            } else if (key > root.right.key) {
                root.right.right = this._splay(root.right.right, key);
                root = this._rotateLeft(root);
            }
            return !root.right ? root : this._rotateLeft(root);
        }
    }
    
    search(key) {
        this.root = this._splay(this.root, key);
        return this.root?.key === key ? this.root : null;
    }
    
    insert(key) {
        if (!this.root) { this.root = new SplayNode(key); return; }
        this.root = this._splay(this.root, key);
        if (this.root.key === key) return;
        
        const node = new SplayNode(key);
        if (key < this.root.key) {
            node.right = this.root;
            node.left = this.root.left;
            this.root.left = null;
        } else {
            node.left = this.root;
            node.right = this.root.right;
            this.root.right = null;
        }
        this.root = node;
    }
}

// Usage
const splay = new SplayTree();
[50, 30, 70, 20].forEach(v => splay.insert(v));
splay.search(20); // 20 moves to root`,Ry=`class SplayNode {
    int key;
    SplayNode left, right;
    SplayNode(int key) { this.key = key; }
}

public class SplayTree {
    // Self-adjusting BST - accessed nodes move to root
    private SplayNode root;
    
    private SplayNode rotateRight(SplayNode x) {
        SplayNode y = x.left;
        x.left = y.right;
        y.right = x;
        return y;
    }
    
    private SplayNode rotateLeft(SplayNode x) {
        SplayNode y = x.right;
        x.right = y.left;
        y.left = x;
        return y;
    }
    
    private SplayNode splay(SplayNode root, int key) {
        if (root == null || root.key == key) return root;
        
        if (key < root.key) {
            if (root.left == null) return root;
            if (key < root.left.key) {
                root.left.left = splay(root.left.left, key);
                root = rotateRight(root);
            } else if (key > root.left.key) {
                root.left.right = splay(root.left.right, key);
                if (root.left.right != null)
                    root.left = rotateLeft(root.left);
            }
            return root.left == null ? root : rotateRight(root);
        } else {
            if (root.right == null) return root;
            if (key < root.right.key) {
                root.right.left = splay(root.right.left, key);
                if (root.right.left != null)
                    root.right = rotateRight(root.right);
            } else if (key > root.right.key) {
                root.right.right = splay(root.right.right, key);
                root = rotateLeft(root);
            }
            return root.right == null ? root : rotateLeft(root);
        }
    }
    
    public SplayNode search(int key) {
        root = splay(root, key);
        return (root != null && root.key == key) ? root : null;
    }
    
    public void insert(int key) {
        if (root == null) { root = new SplayNode(key); return; }
        root = splay(root, key);
        if (root.key == key) return;
        
        SplayNode node = new SplayNode(key);
        if (key < root.key) {
            node.right = root;
            node.left = root.left;
            root.left = null;
        } else {
            node.left = root;
            node.right = root.right;
            root.right = null;
        }
        root = node;
    }
}

// Usage
SplayTree st = new SplayTree();
for (int v : new int[]{50, 30, 70, 20}) st.insert(v);
st.search(20); // 20 is now root`,Oy={python:Ly,javascript:Ey,java:Ry,"c++":`struct SplayNode {
    int key;
    SplayNode *left, *right;
    SplayNode(int k) : key(k), left(nullptr), right(nullptr) {}
};

class SplayTree {
    // Self-adjusting BST - accessed nodes move to root
    SplayNode* root = nullptr;
    
    SplayNode* rotateRight(SplayNode* x) {
        SplayNode* y = x->left;
        x->left = y->right;
        y->right = x;
        return y;
    }
    
    SplayNode* rotateLeft(SplayNode* x) {
        SplayNode* y = x->right;
        x->right = y->left;
        y->left = x;
        return y;
    }
    
    SplayNode* splay(SplayNode* root, int key) {
        if (!root || root->key == key) return root;
        
        if (key < root->key) {
            if (!root->left) return root;
            if (key < root->left->key) {
                root->left->left = splay(root->left->left, key);
                root = rotateRight(root);
            } else if (key > root->left->key) {
                root->left->right = splay(root->left->right, key);
                if (root->left->right) root->left = rotateLeft(root->left);
            }
            return !root->left ? root : rotateRight(root);
        } else {
            if (!root->right) return root;
            if (key < root->right->key) {
                root->right->left = splay(root->right->left, key);
                if (root->right->left) root->right = rotateRight(root->right);
            } else if (key > root->right->key) {
                root->right->right = splay(root->right->right, key);
                root = rotateLeft(root);
            }
            return !root->right ? root : rotateLeft(root);
        }
    }
    
public:
    SplayNode* search(int key) {
        root = splay(root, key);
        return (root && root->key == key) ? root : nullptr;
    }
    
    void insert(int key) {
        if (!root) { root = new SplayNode(key); return; }
        root = splay(root, key);
        if (root->key == key) return;
        
        SplayNode* node = new SplayNode(key);
        if (key < root->key) {
            node->right = root; node->left = root->left; root->left = nullptr;
        } else {
            node->left = root; node->right = root->right; root->right = nullptr;
        }
        root = node;
    }
};

// Usage: SplayTree st; for(int v:{50,30,70,20}) st.insert(v);`,"c#":`public class SplayNode {
    public int Key { get; set; }
    public SplayNode Left { get; set; }
    public SplayNode Right { get; set; }
    public SplayNode(int key) { Key = key; }
}

public class SplayTree {
    // Self-adjusting BST - accessed nodes move to root
    private SplayNode root;
    
    private SplayNode RotateRight(SplayNode x) {
        var y = x.Left; x.Left = y.Right; y.Right = x; return y;
    }
    
    private SplayNode RotateLeft(SplayNode x) {
        var y = x.Right; x.Right = y.Left; y.Left = x; return y;
    }
    
    private SplayNode Splay(SplayNode root, int key) {
        if (root == null || root.Key == key) return root;
        
        if (key < root.Key) {
            if (root.Left == null) return root;
            if (key < root.Left.Key) {
                root.Left.Left = Splay(root.Left.Left, key);
                root = RotateRight(root);
            } else if (key > root.Left.Key) {
                root.Left.Right = Splay(root.Left.Right, key);
                if (root.Left.Right != null) root.Left = RotateLeft(root.Left);
            }
            return root.Left == null ? root : RotateRight(root);
        } else {
            if (root.Right == null) return root;
            if (key < root.Right.Key) {
                root.Right.Left = Splay(root.Right.Left, key);
                if (root.Right.Left != null) root.Right = RotateRight(root.Right);
            } else if (key > root.Right.Key) {
                root.Right.Right = Splay(root.Right.Right, key);
                root = RotateLeft(root);
            }
            return root.Right == null ? root : RotateLeft(root);
        }
    }
    
    public SplayNode Search(int key) {
        root = Splay(root, key);
        return root?.Key == key ? root : null;
    }
    
    public void Insert(int key) {
        if (root == null) { root = new SplayNode(key); return; }
        root = Splay(root, key);
        if (root.Key == key) return;
        
        var node = new SplayNode(key);
        if (key < root.Key) {
            node.Right = root; node.Left = root.Left; root.Left = null;
        } else {
            node.Left = root; node.Right = root.Right; root.Right = null;
        }
        root = node;
    }
}

// Usage: var st = new SplayTree(); foreach(var v in new[]{50,30,70}) st.Insert(v);`},_y=`class MinHeap:
    """Min Heap - Parent always smaller than children"""
    
    def __init__(self):
        self.heap = []
    
    def parent(self, i): return (i - 1) // 2
    def left(self, i): return 2 * i + 1
    def right(self, i): return 2 * i + 2
    
    def insert(self, key):
        """Insert and bubble up - O(log n)"""
        self.heap.append(key)
        self._heapify_up(len(self.heap) - 1)
    
    def _heapify_up(self, i):
        """Move element up to maintain heap property"""
        while i > 0 and self.heap[i] < self.heap[self.parent(i)]:
            p = self.parent(i)
            self.heap[i], self.heap[p] = self.heap[p], self.heap[i]
            i = p
    
    def extract_min(self):
        """Remove and return min - O(log n)"""
        if not self.heap:
            return None
        if len(self.heap) == 1:
            return self.heap.pop()
        
        min_val = self.heap[0]
        self.heap[0] = self.heap.pop()  # Move last to root
        self._heapify_down(0)
        return min_val
    
    def _heapify_down(self, i):
        """Move element down to maintain heap property"""
        smallest = i
        l, r = self.left(i), self.right(i)
        
        if l < len(self.heap) and self.heap[l] < self.heap[smallest]:
            smallest = l
        if r < len(self.heap) and self.heap[r] < self.heap[smallest]:
            smallest = r
        
        if smallest != i:
            self.heap[i], self.heap[smallest] = self.heap[smallest], self.heap[i]
            self._heapify_down(smallest)
    
    def peek(self):
        """Get min without removing - O(1)"""
        return self.heap[0] if self.heap else None
    
    def build_heap(self, arr):
        """Build heap from array - O(n)"""
        self.heap = arr[:]
        # Start from last non-leaf and heapify down
        for i in range(len(self.heap) // 2 - 1, -1, -1):
            self._heapify_down(i)

# Usage
heap = MinHeap()
for val in [5, 3, 8, 1, 2, 9]:
    heap.insert(val)

print("Min:", heap.peek())  # 1
print("Extract:", heap.extract_min())  # 1
print("New min:", heap.peek())  # 2`,Py=`class MinHeap {
    // Min Heap - Parent always smaller than children
    
    constructor() {
        this.heap = [];
    }
    
    parent(i) { return Math.floor((i - 1) / 2); }
    left(i) { return 2 * i + 1; }
    right(i) { return 2 * i + 2; }
    
    insert(key) {
        // Insert and bubble up - O(log n)
        this.heap.push(key);
        this._heapifyUp(this.heap.length - 1);
    }
    
    _heapifyUp(i) {
        while (i > 0 && this.heap[i] < this.heap[this.parent(i)]) {
            const p = this.parent(i);
            [this.heap[i], this.heap[p]] = [this.heap[p], this.heap[i]];
            i = p;
        }
    }
    
    extractMin() {
        // Remove and return min - O(log n)
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown(0);
        return min;
    }
    
    _heapifyDown(i) {
        let smallest = i;
        const l = this.left(i), r = this.right(i);
        
        if (l < this.heap.length && this.heap[l] < this.heap[smallest])
            smallest = l;
        if (r < this.heap.length && this.heap[r] < this.heap[smallest])
            smallest = r;
        
        if (smallest !== i) {
            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
            this._heapifyDown(smallest);
        }
    }
    
    peek() { return this.heap[0] ?? null; }
    
    buildHeap(arr) {
        this.heap = [...arr];
        for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--)
            this._heapifyDown(i);
    }
}

// Usage
const heap = new MinHeap();
[5, 3, 8, 1, 2, 9].forEach(v => heap.insert(v));
console.log("Min:", heap.peek());  // 1
console.log("Extract:", heap.extractMin());  // 1`,zy=`import java.util.*;

public class MinHeap {
    // Min Heap - Parent always smaller than children
    private List<Integer> heap = new ArrayList<>();
    
    int parent(int i) { return (i - 1) / 2; }
    int left(int i) { return 2 * i + 1; }
    int right(int i) { return 2 * i + 2; }
    
    public void insert(int key) {
        // Insert and bubble up - O(log n)
        heap.add(key);
        heapifyUp(heap.size() - 1);
    }
    
    private void heapifyUp(int i) {
        while (i > 0 && heap.get(i) < heap.get(parent(i))) {
            int p = parent(i);
            Collections.swap(heap, i, p);
            i = p;
        }
    }
    
    public Integer extractMin() {
        // Remove and return min - O(log n)
        if (heap.isEmpty()) return null;
        if (heap.size() == 1) return heap.remove(0);
        
        int min = heap.get(0);
        heap.set(0, heap.remove(heap.size() - 1));
        heapifyDown(0);
        return min;
    }
    
    private void heapifyDown(int i) {
        int smallest = i;
        int l = left(i), r = right(i);
        
        if (l < heap.size() && heap.get(l) < heap.get(smallest))
            smallest = l;
        if (r < heap.size() && heap.get(r) < heap.get(smallest))
            smallest = r;
        
        if (smallest != i) {
            Collections.swap(heap, i, smallest);
            heapifyDown(smallest);
        }
    }
    
    public Integer peek() {
        return heap.isEmpty() ? null : heap.get(0);
    }
    
    public void buildHeap(int[] arr) {
        heap.clear();
        for (int v : arr) heap.add(v);
        for (int i = heap.size() / 2 - 1; i >= 0; i--)
            heapifyDown(i);
    }
}

// Usage
MinHeap heap = new MinHeap();
for (int v : new int[]{5, 3, 8, 1, 2, 9}) heap.insert(v);
System.out.println("Min: " + heap.peek());  // 1`,Iy={python:_y,javascript:Py,java:zy,"c++":`#include <vector>
#include <algorithm>
using namespace std;

class MinHeap {
    // Min Heap - Parent always smaller than children
    vector<int> heap;
    
    int parent(int i) { return (i - 1) / 2; }
    int left(int i) { return 2 * i + 1; }
    int right(int i) { return 2 * i + 2; }
    
    void heapifyUp(int i) {
        while (i > 0 && heap[i] < heap[parent(i)]) {
            swap(heap[i], heap[parent(i)]);
            i = parent(i);
        }
    }
    
    void heapifyDown(int i) {
        int smallest = i;
        int l = left(i), r = right(i);
        
        if (l < heap.size() && heap[l] < heap[smallest]) smallest = l;
        if (r < heap.size() && heap[r] < heap[smallest]) smallest = r;
        
        if (smallest != i) {
            swap(heap[i], heap[smallest]);
            heapifyDown(smallest);
        }
    }
    
public:
    void insert(int key) {
        // Insert and bubble up - O(log n)
        heap.push_back(key);
        heapifyUp(heap.size() - 1);
    }
    
    int extractMin() {
        // Remove and return min - O(log n)
        if (heap.empty()) return -1;
        int min = heap[0];
        heap[0] = heap.back();
        heap.pop_back();
        if (!heap.empty()) heapifyDown(0);
        return min;
    }
    
    int peek() { return heap.empty() ? -1 : heap[0]; }
    
    void buildHeap(vector<int>& arr) {
        // Build heap from array - O(n)
        heap = arr;
        for (int i = heap.size() / 2 - 1; i >= 0; i--)
            heapifyDown(i);
    }
};

// Usage: MinHeap h; for(int v:{5,3,8,1,2}) h.insert(v);`,"c#":`using System.Collections.Generic;

public class MinHeap {
    // Min Heap - Parent always smaller than children
    private List<int> heap = new List<int>();
    
    int Parent(int i) => (i - 1) / 2;
    int Left(int i) => 2 * i + 1;
    int Right(int i) => 2 * i + 2;
    
    public void Insert(int key) {
        // Insert and bubble up - O(log n)
        heap.Add(key);
        HeapifyUp(heap.Count - 1);
    }
    
    private void HeapifyUp(int i) {
        while (i > 0 && heap[i] < heap[Parent(i)]) {
            int p = Parent(i);
            (heap[i], heap[p]) = (heap[p], heap[i]);
            i = p;
        }
    }
    
    public int? ExtractMin() {
        // Remove and return min - O(log n)
        if (heap.Count == 0) return null;
        int min = heap[0];
        heap[0] = heap[heap.Count - 1];
        heap.RemoveAt(heap.Count - 1);
        if (heap.Count > 0) HeapifyDown(0);
        return min;
    }
    
    private void HeapifyDown(int i) {
        int smallest = i;
        int l = Left(i), r = Right(i);
        
        if (l < heap.Count && heap[l] < heap[smallest]) smallest = l;
        if (r < heap.Count && heap[r] < heap[smallest]) smallest = r;
        
        if (smallest != i) {
            (heap[i], heap[smallest]) = (heap[smallest], heap[i]);
            HeapifyDown(smallest);
        }
    }
    
    public int? Peek() => heap.Count > 0 ? heap[0] : null;
    
    public void BuildHeap(int[] arr) {
        heap = new List<int>(arr);
        for (int i = heap.Count / 2 - 1; i >= 0; i--)
            HeapifyDown(i);
    }
}

// Usage: var h = new MinHeap(); foreach(var v in new[]{5,3,8,1}) h.Insert(v);`},My=`class MaxHeap:
    """Max Heap - Parent always greater than children"""
    
    def __init__(self):
        self.heap = []
    
    def parent(self, i): return (i - 1) // 2
    def left(self, i): return 2 * i + 1
    def right(self, i): return 2 * i + 2
    
    def insert(self, key):
        """Insert and bubble up - O(log n)"""
        self.heap.append(key)
        self._heapify_up(len(self.heap) - 1)
    
    def _heapify_up(self, i):
        """Move element up to maintain heap property"""
        while i > 0 and self.heap[i] > self.heap[self.parent(i)]:
            p = self.parent(i)
            self.heap[i], self.heap[p] = self.heap[p], self.heap[i]
            i = p
    
    def extract_max(self):
        """Remove and return max - O(log n)"""
        if not self.heap:
            return None
        if len(self.heap) == 1:
            return self.heap.pop()
        
        max_val = self.heap[0]
        self.heap[0] = self.heap.pop()  # Move last to root
        self._heapify_down(0)
        return max_val
    
    def _heapify_down(self, i):
        """Move element down to maintain heap property"""
        largest = i
        l, r = self.left(i), self.right(i)
        
        if l < len(self.heap) and self.heap[l] > self.heap[largest]:
            largest = l
        if r < len(self.heap) and self.heap[r] > self.heap[largest]:
            largest = r
        
        if largest != i:
            self.heap[i], self.heap[largest] = self.heap[largest], self.heap[i]
            self._heapify_down(largest)
    
    def peek(self):
        """Get max without removing - O(1)"""
        return self.heap[0] if self.heap else None
    
    def build_heap(self, arr):
        """Build heap from array - O(n)"""
        self.heap = arr[:]
        # Start from last non-leaf and heapify down
        for i in range(len(self.heap) // 2 - 1, -1, -1):
            self._heapify_down(i)

# Usage
heap = MaxHeap()
for val in [5, 3, 8, 1, 2, 9]:
    heap.insert(val)

print("Max:", heap.peek())  # 9
print("Extract:", heap.extract_max())  # 9
print("New max:", heap.peek())  # 8`,Vy=`class MaxHeap {
    // Max Heap - Parent always greater than children
    
    constructor() {
        this.heap = [];
    }
    
    parent(i) { return Math.floor((i - 1) / 2); }
    left(i) { return 2 * i + 1; }
    right(i) { return 2 * i + 2; }
    
    insert(key) {
        // Insert and bubble up - O(log n)
        this.heap.push(key);
        this._heapifyUp(this.heap.length - 1);
    }
    
    _heapifyUp(i) {
        while (i > 0 && this.heap[i] > this.heap[this.parent(i)]) {
            const p = this.parent(i);
            [this.heap[i], this.heap[p]] = [this.heap[p], this.heap[i]];
            i = p;
        }
    }
    
    extractMax() {
        // Remove and return max - O(log n)
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown(0);
        return max;
    }
    
    _heapifyDown(i) {
        let largest = i;
        const l = this.left(i), r = this.right(i);
        
        if (l < this.heap.length && this.heap[l] > this.heap[largest])
            largest = l;
        if (r < this.heap.length && this.heap[r] > this.heap[largest])
            largest = r;
        
        if (largest !== i) {
            [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]];
            this._heapifyDown(largest);
        }
    }
    
    peek() { return this.heap[0] ?? null; }
    
    buildHeap(arr) {
        this.heap = [...arr];
        for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--)
            this._heapifyDown(i);
    }
}

// Usage
const heap = new MaxHeap();
[5, 3, 8, 1, 2, 9].forEach(v => heap.insert(v));
console.log("Max:", heap.peek());  // 9
console.log("Extract:", heap.extractMax());  // 9`,Hy=`import java.util.*;

public class MaxHeap {
    // Max Heap - Parent always greater than children
    private List<Integer> heap = new ArrayList<>();
    
    int parent(int i) { return (i - 1) / 2; }
    int left(int i) { return 2 * i + 1; }
    int right(int i) { return 2 * i + 2; }
    
    public void insert(int key) {
        // Insert and bubble up - O(log n)
        heap.add(key);
        heapifyUp(heap.size() - 1);
    }
    
    private void heapifyUp(int i) {
        while (i > 0 && heap.get(i) > heap.get(parent(i))) {
            int p = parent(i);
            Collections.swap(heap, i, p);
            i = p;
        }
    }
    
    public Integer extractMax() {
        // Remove and return max - O(log n)
        if (heap.isEmpty()) return null;
        if (heap.size() == 1) return heap.remove(0);
        
        int max = heap.get(0);
        heap.set(0, heap.remove(heap.size() - 1));
        heapifyDown(0);
        return max;
    }
    
    private void heapifyDown(int i) {
        int largest = i;
        int l = left(i), r = right(i);
        
        if (l < heap.size() && heap.get(l) > heap.get(largest))
            largest = l;
        if (r < heap.size() && heap.get(r) > heap.get(largest))
            largest = r;
        
        if (largest != i) {
            Collections.swap(heap, i, largest);
            heapifyDown(largest);
        }
    }
    
    public Integer peek() {
        return heap.isEmpty() ? null : heap.get(0);
    }
    
    public void buildHeap(int[] arr) {
        heap.clear();
        for (int v : arr) heap.add(v);
        for (int i = heap.size() / 2 - 1; i >= 0; i--)
            heapifyDown(i);
    }
}

// Usage
MaxHeap heap = new MaxHeap();
for (int v : new int[]{5, 3, 8, 1, 2, 9}) heap.insert(v);
System.out.println("Max: " + heap.peek());  // 9`,Dy={python:My,javascript:Vy,java:Hy,"c++":`#include <vector>
#include <algorithm>
using namespace std;

class MaxHeap {
    // Max Heap - Parent always greater than children
    vector<int> heap;
    
    int parent(int i) { return (i - 1) / 2; }
    int left(int i) { return 2 * i + 1; }
    int right(int i) { return 2 * i + 2; }
    
    void heapifyUp(int i) {
        while (i > 0 && heap[i] > heap[parent(i)]) {
            swap(heap[i], heap[parent(i)]);
            i = parent(i);
        }
    }
    
    void heapifyDown(int i) {
        int largest = i;
        int l = left(i), r = right(i);
        
        if (l < heap.size() && heap[l] > heap[largest]) largest = l;
        if (r < heap.size() && heap[r] > heap[largest]) largest = r;
        
        if (largest != i) {
            swap(heap[i], heap[largest]);
            heapifyDown(largest);
        }
    }
    
public:
    void insert(int key) {
        // Insert and bubble up - O(log n)
        heap.push_back(key);
        heapifyUp(heap.size() - 1);
    }
    
    int extractMax() {
        // Remove and return max - O(log n)
        if (heap.empty()) return -1;
        int max = heap[0];
        heap[0] = heap.back();
        heap.pop_back();
        if (!heap.empty()) heapifyDown(0);
        return max;
    }
    
    int peek() { return heap.empty() ? -1 : heap[0]; }
    
    void buildHeap(vector<int>& arr) {
        // Build heap from array - O(n)
        heap = arr;
        for (int i = heap.size() / 2 - 1; i >= 0; i--)
            heapifyDown(i);
    }
};

// Usage: MaxHeap h; for(int v:{5,3,8,1,9}) h.insert(v);`,"c#":`using System.Collections.Generic;

public class MaxHeap {
    // Max Heap - Parent always greater than children
    private List<int> heap = new List<int>();
    
    int Parent(int i) => (i - 1) / 2;
    int Left(int i) => 2 * i + 1;
    int Right(int i) => 2 * i + 2;
    
    public void Insert(int key) {
        // Insert and bubble up - O(log n)
        heap.Add(key);
        HeapifyUp(heap.Count - 1);
    }
    
    private void HeapifyUp(int i) {
        while (i > 0 && heap[i] > heap[Parent(i)]) {
            int p = Parent(i);
            (heap[i], heap[p]) = (heap[p], heap[i]);
            i = p;
        }
    }
    
    public int? ExtractMax() {
        // Remove and return max - O(log n)
        if (heap.Count == 0) return null;
        int max = heap[0];
        heap[0] = heap[heap.Count - 1];
        heap.RemoveAt(heap.Count - 1);
        if (heap.Count > 0) HeapifyDown(0);
        return max;
    }
    
    private void HeapifyDown(int i) {
        int largest = i;
        int l = Left(i), r = Right(i);
        
        if (l < heap.Count && heap[l] > heap[largest]) largest = l;
        if (r < heap.Count && heap[r] > heap[largest]) largest = r;
        
        if (largest != i) {
            (heap[i], heap[largest]) = (heap[largest], heap[i]);
            HeapifyDown(largest);
        }
    }
    
    public int? Peek() => heap.Count > 0 ? heap[0] : null;
    
    public void BuildHeap(int[] arr) {
        heap = new List<int>(arr);
        for (int i = heap.Count / 2 - 1; i >= 0; i--)
            HeapifyDown(i);
    }
}

// Usage: var h = new MaxHeap(); foreach(var v in new[]{5,3,8,9}) h.Insert(v);`},Pa={stack:Ym,queue:ry,linkedlist:ly,binarytree:dy,hashtable:my,hashtableChaining:xy,bst:wy,avl:Cy,splay:Oy,minheap:Iy,maxheap:Dy};function Ke({dataStructure:e}){var h;const[n,t]=g.useState("python"),[s,a]=g.useState(!1),i=["python","javascript","java","c++","c#"],l=i.filter(m=>{var N;return(N=Pa[e])==null?void 0:N[m]}),o=l.length>0?l:i,c=((h=Pa[e])==null?void 0:h[n])||"Code not available for this data structure";g.useEffect(()=>{var m;!((m=Pa[e])!=null&&m[n])&&l.length>0&&t(l[0])},[e,n,l]);const u=m=>({python:"Python",javascript:"JavaScript",java:"Java","c++":"C++","c#":"C#"})[m]||m,d=()=>{navigator.clipboard.writeText(c),a(!0),setTimeout(()=>a(!1),2e3)};return r.jsxs("div",{className:"code-section",children:[r.jsxs("h2",{children:[r.jsx(sc,{})," Implementation"]}),r.jsx("div",{className:"code-tabs",children:o.map(m=>r.jsxs("button",{className:`tab-btn ${n===m?"active":""}`,onClick:()=>t(m),children:[r.jsx(sc,{}),u(m)]},m))}),r.jsx("div",{className:"code-panels",children:r.jsx("div",{className:"code-panel active",children:r.jsxs("pre",{children:[r.jsxs("button",{className:"copy-btn",onClick:d,children:[r.jsx(Lm,{})," ",s?"Copied!":"Copy"]}),r.jsx("code",{children:c})]})})})]})}function qt({message:e}){if(!(e!=null&&e.text))return null;const n=e.type||"info";return r.jsx("div",{className:`message message-${n}`,children:e.text})}async function nn(e){return await(await fetch(e)).json()}async function oe(e,n){return await(await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json()}function Kt(e=3e3){const[n,t]=g.useState(null),s=g.useRef(null),a=g.useCallback(()=>{t(null),s.current&&(clearTimeout(s.current),s.current=null)},[]),i=g.useCallback((l,o="info")=>{t({text:l,type:o}),s.current&&clearTimeout(s.current),s.current=setTimeout(()=>{t(null),s.current=null},e)},[e]);return g.useEffect(()=>a,[a]),{message:n,showMessage:i,clearMessage:a}}function Fy(){const[e,n]=g.useState([]),[t,s]=g.useState(0),[a,i]=g.useState("Empty"),[l]=g.useState(10),{message:o,showMessage:c}=Kt(3e3),[u,d]=g.useState("");g.useEffect(()=>{h()},[]);const h=async()=>{try{const p=await nn("/api/stack");n(p.items||[]),s(p.size||0),i(p.top!==null&&p.top!==void 0?p.top:"Empty")}catch(p){console.error("Error loading stack:",p)}},m=async()=>{if(!u||u.trim()===""){c("Please enter a number!","error");return}const p=Number(u);if(isNaN(p)){c("Please enter a valid number!","error");return}try{const f=await oe("/api/stack/push",{value:p});if(f.error){c(f.error,"error");return}n(f.items||[]),s(f.size||0),i(f.top!==null&&f.top!==void 0?f.top:"Empty"),c(`Pushed ${p} to stack!`,"success"),d("")}catch(f){console.error("Push error:",f),c("Error pushing to stack. Is Flask running?","error")}},N=async()=>{try{const p=await oe("/api/stack/pop",{});if(p.error){c(p.error,"error");return}n(p.items||[]),s(p.size||0),i(p.top!==null&&p.top!==void 0?p.top:"Empty"),c(`Popped ${p.popped} from stack!`,"success")}catch{c("Error popping from stack","error")}},k=async()=>{try{const p=await nn("/api/stack/peek");if(p.error){c(p.error,"error");return}c(`Top element is: ${p.top}`,"info")}catch{c("Error peeking stack","error")}},x=async()=>{try{await oe("/api/stack/clear",{}),n([]),s(0),i("Empty"),c("Stack cleared!","success")}catch{c("Error clearing stack","error")}},v=p=>{p.key==="Enter"&&m()};return r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"intro-layout",children:[r.jsxs("div",{className:"concept-box",children:[r.jsxs("div",{className:"concept-header",children:[r.jsx(kn,{className:"icon-sm"}),r.jsx("span",{children:"What is a Stack?"})]}),r.jsxs("div",{className:"concept-content",children:[r.jsxs("p",{children:["A ",r.jsx("strong",{children:"Stack"})," is a linear data structure that follows the ",r.jsx("strong",{children:"LIFO"})," (Last In, First Out) principle."]}),r.jsxs("div",{className:"concept-analogy",children:[r.jsx(on,{}),r.jsxs("span",{children:["Think of a stack of plates - you can only add or remove from the ",r.jsx("strong",{children:"top"}),"!"]})]}),r.jsxs("div",{className:"concept-operations",children:[r.jsxs("div",{className:"op-item",children:[r.jsx("span",{className:"op-name",children:"Push"}),r.jsx("span",{className:"op-desc",children:"Add to top"}),r.jsx("span",{className:"op-complexity",children:"O(1)"})]}),r.jsxs("div",{className:"op-item",children:[r.jsx("span",{className:"op-name",children:"Pop"}),r.jsx("span",{className:"op-desc",children:"Remove from top"}),r.jsx("span",{className:"op-complexity",children:"O(1)"})]}),r.jsxs("div",{className:"op-item",children:[r.jsx("span",{className:"op-name",children:"Peek"}),r.jsx("span",{className:"op-desc",children:"View top element"}),r.jsx("span",{className:"op-complexity",children:"O(1)"})]})]}),r.jsxs("div",{className:"concept-uses",children:[r.jsx("strong",{children:"Common Uses:"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Browser back/forward buttons"}),r.jsx("li",{children:"Undo/Redo functionality"}),r.jsx("li",{children:"Function call stack"}),r.jsx("li",{children:"Expression evaluation"})]})]})]})]}),r.jsx(qe,{context:"Stack data structure"})]}),r.jsxs("div",{className:"visualizer-layout",children:[r.jsxs("div",{className:"control-panel",children:[r.jsx("h2",{children:"Stack Operations"}),r.jsxs("div",{className:"operation-group",children:[r.jsx("label",{htmlFor:"pushValue",children:"Push (Add to top)"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{type:"text",id:"pushValue",value:u,onChange:p=>d(p.target.value),onKeyPress:v,placeholder:"Enter a value"}),r.jsx("button",{onClick:m,className:"btn btn-push",children:"Push"})]})]}),r.jsxs("div",{className:"operation-group",children:[r.jsx("label",{children:"Other Operations"}),r.jsxs("div",{className:"btn-group",children:[r.jsx("button",{onClick:N,className:"btn btn-pop",children:"Pop"}),r.jsx("button",{onClick:k,className:"btn btn-peek",children:"Peek"}),r.jsx("button",{onClick:x,className:"btn btn-clear",children:"Clear"})]})]}),r.jsxs("div",{className:"info-panel",children:[r.jsxs("div",{className:"info-item",children:[r.jsx("span",{className:"info-label",children:"Size:"}),r.jsx("span",{className:"info-value",children:t})]}),r.jsxs("div",{className:"info-item",children:[r.jsx("span",{className:"info-label",children:"Top:"}),r.jsx("span",{className:"info-value",children:a})]}),r.jsxs("div",{className:"info-item",children:[r.jsx("span",{className:"info-label",children:"Max Size:"}),r.jsx("span",{className:"info-value",children:l})]})]}),r.jsx(qt,{message:o})]}),r.jsxs("div",{className:"visual-panel",children:[r.jsx("h2",{children:"Stack Visualization"}),r.jsxs("div",{className:"stack-container",children:[r.jsx("div",{className:"stack-visual",children:e.length===0?r.jsx("div",{className:"stack-empty",children:"Stack is empty. Push some items!"}):e.slice().reverse().map((p,f)=>r.jsx("div",{className:"stack-item",children:p},f))}),r.jsx("div",{className:"stack-base",children:r.jsx("span",{children:"BOTTOM"})})]})]})]}),r.jsx(Ke,{dataStructure:"stack"})]})}function Ay(){const[e,n]=g.useState([]),[t,s]=g.useState(0),[a,i]=g.useState("Empty"),[l]=g.useState(10),{message:o,showMessage:c}=Kt(3e3),[u,d]=g.useState("");g.useEffect(()=>{h()},[]);const h=async()=>{try{const v=await nn("/api/queue");n(v.items||[]),s(v.size||0),i(v.front!==null&&v.front!==void 0?v.front:"Empty")}catch(v){console.error("Error loading queue:",v)}},m=async()=>{if(!u||u.trim()===""){c("Please enter a number!","error");return}const v=Number(u);if(isNaN(v)){c("Please enter a valid number!","error");return}try{const p=await oe("/api/queue/enqueue",{value:v});if(p.error){c(p.error,"error");return}n(p.items||[]),s(p.size||0),i(p.front!==null&&p.front!==void 0?p.front:"Empty"),c(`Enqueued ${v}!`,"success"),d("")}catch(p){console.error("Enqueue error:",p),c("Error enqueueing. Is Flask running?","error")}},N=async()=>{try{const v=await oe("/api/queue/dequeue",{});if(v.error){c(v.error,"error");return}n(v.items||[]),s(v.size||0),i(v.front!==null&&v.front!==void 0?v.front:"Empty"),c(`Dequeued ${v.dequeued} from queue!`,"success")}catch{c("Error dequeuing from queue","error")}},k=async()=>{try{const v=await nn("/api/queue/peek");if(v.error){c(v.error,"error");return}c(`Front element is: ${v.front}`,"info")}catch{c("Error peeking queue","error")}},x=async()=>{try{await oe("/api/queue/clear",{}),n([]),s(0),i("Empty"),c("Queue cleared!","success")}catch{c("Error clearing queue","error")}};return r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"intro-layout",children:[r.jsxs("div",{className:"concept-box",children:[r.jsxs("div",{className:"concept-header",children:[r.jsx(kn,{className:"icon-sm"}),r.jsx("span",{children:"What is a Queue?"})]}),r.jsxs("div",{className:"concept-content",children:[r.jsxs("p",{children:["A ",r.jsx("strong",{children:"Queue"})," is a linear data structure that follows the ",r.jsx("strong",{children:"FIFO"})," (First In, First Out) principle."]}),r.jsxs("div",{className:"concept-analogy",children:[r.jsx(on,{}),r.jsxs("span",{children:["Think of a line at a store – the first person in line gets served ",r.jsx("strong",{children:"first"}),"!"]})]}),r.jsxs("div",{className:"concept-operations",children:[r.jsxs("div",{className:"op-item",children:[r.jsx("span",{className:"op-name",children:"Enqueue"}),r.jsx("span",{className:"op-desc",children:"Add to the back"}),r.jsx("span",{className:"op-complexity",children:"O(1)"})]}),r.jsxs("div",{className:"op-item",children:[r.jsx("span",{className:"op-name",children:"Dequeue"}),r.jsx("span",{className:"op-desc",children:"Remove from the front"}),r.jsx("span",{className:"op-complexity",children:"O(1)"})]}),r.jsxs("div",{className:"op-item",children:[r.jsx("span",{className:"op-name",children:"Peek"}),r.jsx("span",{className:"op-desc",children:"View the front element"}),r.jsx("span",{className:"op-complexity",children:"O(1)"})]})]})]})]}),r.jsx(qe,{context:"Queue data structure"})]}),r.jsxs("div",{className:"visualizer-layout",children:[r.jsxs("div",{className:"control-panel",children:[r.jsx("h2",{children:"Queue Operations"}),r.jsxs("div",{className:"operation-group",children:[r.jsx("label",{htmlFor:"enqueueValue",children:"Enqueue (Add to back)"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{type:"text",id:"enqueueValue",value:u,onChange:v=>d(v.target.value),onKeyPress:v=>v.key==="Enter"&&m(),placeholder:"Enter a value"}),r.jsx("button",{onClick:m,className:"btn btn-enqueue",children:"Enqueue"})]})]}),r.jsxs("div",{className:"operation-group",children:[r.jsx("label",{children:"Other Operations"}),r.jsxs("div",{className:"btn-group",children:[r.jsx("button",{onClick:N,className:"btn btn-dequeue",children:"Dequeue"}),r.jsx("button",{onClick:k,className:"btn btn-peek",children:"Peek"}),r.jsx("button",{onClick:x,className:"btn btn-clear",children:"Clear"})]})]}),r.jsxs("div",{className:"info-panel",children:[r.jsxs("div",{className:"info-item",children:[r.jsx("span",{className:"info-label",children:"Size:"}),r.jsx("span",{className:"info-value",children:t})]}),r.jsxs("div",{className:"info-item",children:[r.jsx("span",{className:"info-label",children:"Front:"}),r.jsx("span",{className:"info-value",children:a})]}),r.jsxs("div",{className:"info-item",children:[r.jsx("span",{className:"info-label",children:"Max Size:"}),r.jsx("span",{className:"info-value",children:l})]})]}),r.jsx(qt,{message:o})]}),r.jsxs("div",{className:"visual-panel",children:[r.jsx("h2",{children:"Queue Visualization"}),r.jsxs("div",{className:"queue-container",children:[r.jsx("div",{className:"queue-label",children:r.jsx("span",{className:"front-marker",children:"FRONT →"})}),r.jsx("div",{className:"queue-visual",children:e.length===0?r.jsx("div",{className:"queue-empty",children:"Queue is empty. Enqueue some items!"}):e.map((v,p)=>{const f=p===0,y=p===e.length-1;return r.jsxs("div",{className:`queue-item ${f?"queue-front":""} ${y?"queue-back":""}`,children:[f&&r.jsx("span",{className:"front-label",children:"FRONT"}),v,y&&r.jsx("span",{className:"back-label",children:"BACK"})]},p)})}),r.jsx("div",{className:"queue-label",children:r.jsx("span",{className:"back-marker",children:"← BACK"})})]})]})]}),r.jsx(Ke,{dataStructure:"queue"})]})}function $y(){const[e,n]=g.useState([]),[t,s]=g.useState(0),[a,i]=g.useState("Empty"),{message:l,showMessage:o}=Kt(3e3),[c,u]=g.useState(""),[d,h]=g.useState(""),[m,N]=g.useState(""),[k,x]=g.useState(""),[v,p]=g.useState(""),[f,y]=g.useState("");g.useEffect(()=>{w()},[]);const w=async()=>{try{const C=await nn("/api/linkedlist");n(C.items||[]),s(C.size||0),i(C.head!==null&&C.head!==void 0?C.head:"Empty")}catch(C){console.error("Error loading linked list:",C)}},j=async()=>{if(!c||c.trim()===""){o("Please enter a number!","error");return}const C=Number(c);if(isNaN(C)){o("Please enter a valid number!","error");return}try{const $=await oe("/api/linkedlist/insert/head",{value:C});if($.error){o($.error,"error");return}n($.items||[]),s($.size||0),i($.head!==null&&$.head!==void 0?$.head:"Empty"),o(`Inserted ${C} at head!`,"success"),u("")}catch($){console.error("Insert error:",$),o("Error inserting. Is Flask running?","error")}},_=async()=>{if(!d||d.trim()===""){o("Please enter a number!","error");return}const C=Number(d);if(isNaN(C)){o("Please enter a valid number!","error");return}try{const $=await oe("/api/linkedlist/insert/tail",{value:C});if($.error){o($.error,"error");return}n($.items||[]),s($.size||0),i($.head!==null&&$.head!==void 0?$.head:"Empty"),o(`Inserted ${C} at tail!`,"success"),h("")}catch($){console.error("Insert error:",$),o("Error inserting. Is Flask running?","error")}},S=async()=>{try{const C=await oe("/api/linkedlist/delete/head",{});if(C.error){o(C.error,"error");return}n(C.items||[]),s(C.size||0),i(C.head!==null&&C.head!==void 0?C.head:"Empty"),o("Deleted head!","success")}catch{o("Error deleting head","error")}},M=async()=>{try{const C=await oe("/api/linkedlist/delete/tail",{});if(C.error){o(C.error,"error");return}n(C.items||[]),s(C.size||0),i(C.head!==null&&C.head!==void 0?C.head:"Empty"),o("Deleted tail!","success")}catch{o("Error deleting tail","error")}},A=async()=>{try{await oe("/api/linkedlist/clear",{}),n([]),s(0),i("Empty"),o("List cleared!","success")}catch{o("Error clearing list","error")}};return r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"intro-layout",children:[r.jsxs("div",{className:"concept-box",children:[r.jsxs("div",{className:"concept-header",children:[r.jsx(kn,{className:"icon-sm"}),r.jsx("span",{children:"What is a Singly Linked List?"})]}),r.jsxs("div",{className:"concept-content",children:[r.jsxs("p",{children:["A ",r.jsx("strong",{children:"Singly Linked List"})," is a linear data structure where each element contains data and a pointer to the next node."]}),r.jsxs("div",{className:"concept-analogy",children:[r.jsx(on,{}),r.jsxs("span",{children:["Think of a treasure hunt – each clue points to the ",r.jsx("strong",{children:"next location"}),"!"]})]})]})]}),r.jsx(qe,{context:"Singly Linked List data structure"})]}),r.jsxs("div",{className:"visualizer-layout",children:[r.jsxs("div",{className:"control-panel",children:[r.jsx("h2",{children:"Linked List Operations"}),r.jsxs("div",{className:"operation-group",children:[r.jsx("label",{htmlFor:"insertHeadValue",children:"Insert at Head"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{type:"text",id:"insertHeadValue",value:c,onChange:C=>u(C.target.value),onKeyPress:C=>C.key==="Enter"&&j(),placeholder:"Enter a value"}),r.jsx("button",{onClick:j,className:"btn btn-insert",children:"Insert Head"})]})]}),r.jsxs("div",{className:"operation-group",children:[r.jsx("label",{htmlFor:"insertTailValue",children:"Insert at Tail"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{type:"text",id:"insertTailValue",value:d,onChange:C=>h(C.target.value),onKeyPress:C=>C.key==="Enter"&&_(),placeholder:"Enter a value"}),r.jsx("button",{onClick:_,className:"btn btn-insert",children:"Insert Tail"})]})]}),r.jsxs("div",{className:"operation-group",children:[r.jsx("label",{children:"Delete Operations"}),r.jsxs("div",{className:"btn-group",children:[r.jsx("button",{onClick:S,className:"btn btn-delete",children:"Delete Head"}),r.jsx("button",{onClick:M,className:"btn btn-delete",children:"Delete Tail"})]})]}),r.jsx("div",{className:"operation-group",children:r.jsx("button",{onClick:A,className:"btn btn-clear full-width",children:"Clear All"})}),r.jsxs("div",{className:"info-panel",children:[r.jsxs("div",{className:"info-item",children:[r.jsx("span",{className:"info-label",children:"Size:"}),r.jsx("span",{className:"info-value",children:t})]}),r.jsxs("div",{className:"info-item",children:[r.jsx("span",{className:"info-label",children:"Head:"}),r.jsx("span",{className:"info-value",children:a})]})]}),r.jsx(qt,{message:l})]}),r.jsxs("div",{className:"visual-panel",children:[r.jsx("h2",{children:"Linked List Visualization"}),r.jsx("div",{className:"linkedlist-container",children:r.jsx("div",{className:"linkedlist-visual",children:e.length===0?r.jsx("div",{className:"linkedlist-empty",children:"List is empty. Insert some nodes!"}):e.map((C,$)=>r.jsx(At.Fragment,{children:r.jsxs("div",{className:"linkedlist-node",children:[r.jsx("div",{className:"node-value",children:C}),$<e.length-1&&r.jsx("div",{className:"node-arrow",children:"→"})]})},$))})})]})]}),r.jsx(Ke,{dataStructure:"linkedlist"})]})}function By(){const[e,n]=g.useState([]),[t,s]=g.useState(0),[a,i]=g.useState(0),[l,o]=g.useState(0),[c,u]=g.useState(0),{message:d,showMessage:h}=Kt(3e3),[m,N]=g.useState(""),[k,x]=g.useState(""),[v,p]=g.useState(""),[f,y]=g.useState(""),[w,j]=g.useState(null),[_,S]=g.useState([]),[M,A]=g.useState(null),[C,$]=g.useState(null);g.useEffect(()=>{J()},[]);const J=async()=>{try{const b=await nn("/api/hashtable");n(b.table||[]),s(b.size||0),i(b.capacity||0),o(b.load_factor||0),u(b.collision_count||0)}catch(b){console.error("Error loading hashtable:",b)}},z=b=>{if(!a||a===0)return 0;let E=0;for(let H=0;H<b.length;H++)E=(E*31+b.charCodeAt(H))%a;return E},D=(b,E)=>{const H=z(b),V=[H];let I=H;for(;E[I]&&E[I][0]!==b&&(I=(I+1)%a,V.push(I),!(I===H||V.length>a)););return{originalHash:H,path:V,finalSlot:I}},T=async()=>{if(!m.trim()||!k.trim()){h("Please enter both key and value!","error");return}const b=a>0?z(m.trim()):0,E=e.length>0&&e[b]&&e[b][0]!==m.trim();let H=null;E&&(H=D(m.trim(),e));try{const V=await oe("/api/hashtable/insert",{key:m.trim(),value:k.trim()});if(V.error){h(V.error,"error");return}await J(),A(m.trim()),E&&H?($({key:m.trim(),originalSlot:H.originalHash,probedSlots:H.path,finalSlot:H.path[H.path.length-1]}),S(H.path),h(`Collision! "${m}" hashed to ${H.originalHash}, probed ${H.path.length} slot(s)`,"warning"),setTimeout(()=>{S([]),$(null)},4e3)):(h(`Inserted "${m}" → slot ${b}`,"success"),j(b),setTimeout(()=>j(null),2e3)),N(""),x(""),setTimeout(()=>A(null),3e3)}catch{h("Error inserting. Is Flask running?","error")}},R=async()=>{if(!v.trim()){h("Please enter a key!","error");return}try{const b=await oe("/api/hashtable/delete",{key:v.trim()});if(b.error){h(b.error,"error");return}await J(),h(`Deleted "${v}"`,"success"),p("")}catch{h("Error deleting. Is Flask running?","error")}},O=async()=>{if(!f.trim()){h("Please enter a key!","error");return}try{const b=await nn(`/api/hashtable/get?key=${encodeURIComponent(f.trim())}`);if(b.error){h(b.error,"error");return}b.found?h(`Found: "${f}" = ${b.value}`,"success"):h(`Key "${f}" not found`,"error"),y("")}catch{h("Error searching item","error")}},L=async()=>{try{await oe("/api/hashtable/clear",{}),await J(),S([]),$(null),h("Hashtable cleared!","success")}catch{h("Error clearing hashtable","error")}};return r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"intro-layout",children:[r.jsxs("div",{className:"intro-left",children:[r.jsxs("div",{className:"concept-box",children:[r.jsxs("div",{className:"concept-header",children:[r.jsx(kn,{className:"icon-sm"}),r.jsx("span",{children:"What is a Hash Table?"})]}),r.jsxs("div",{className:"concept-content",children:[r.jsxs("p",{children:["A ",r.jsx("strong",{children:"Hash Table"})," maps keys to values using a hash function for O(1) lookups."]}),r.jsxs("div",{className:"concept-analogy",children:[r.jsx(on,{}),r.jsxs("span",{children:["Like a ",r.jsx("strong",{children:"coat check"})," – give them your coat (value), get a ticket number (hash of key)!"]})]})]})]}),r.jsxs("div",{className:"concept-box",style:{marginTop:"1rem"},children:[r.jsxs("div",{className:"concept-header",children:[r.jsx(vn,{className:"icon-sm",style:{color:"#f59e0b"}}),r.jsx("span",{children:"Linear Probing"})]}),r.jsxs("div",{className:"concept-content",children:[r.jsxs("p",{children:["When two keys hash to the same slot (",r.jsx("strong",{children:"collision"}),"), we check the next slot until we find an empty one."]}),r.jsxs("div",{className:"concept-analogy",style:{marginTop:"0.5rem"},children:[r.jsx(Rn,{style:{color:"#3b82f6"}}),r.jsx("span",{children:"Like parking – if spot 3 is taken, try spot 4, then 5..."})]})]})]})]}),r.jsx(qe,{context:"Hash Table with Linear Probing"})]}),r.jsxs("div",{className:"visualizer-layout",children:[r.jsxs("div",{className:"control-panel",children:[r.jsx("h2",{children:"Operations"}),r.jsxs("div",{className:"operation-group",children:[r.jsx("label",{children:"Insert Key-Value"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{type:"text",value:m,onChange:b=>N(b.target.value),placeholder:"Key"}),r.jsx("input",{type:"text",value:k,onChange:b=>x(b.target.value),onKeyPress:b=>b.key==="Enter"&&T(),placeholder:"Value"}),r.jsx("button",{onClick:T,className:"btn btn-insert",children:"Insert"})]})]}),r.jsxs("div",{className:"operation-group",children:[r.jsx("label",{children:"Delete Key"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{type:"text",value:v,onChange:b=>p(b.target.value),onKeyPress:b=>b.key==="Enter"&&R(),placeholder:"Key"}),r.jsx("button",{onClick:R,className:"btn btn-delete",children:"Delete"})]})]}),r.jsxs("div",{className:"operation-group",children:[r.jsx("label",{children:"Search Key"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{type:"text",value:f,onChange:b=>y(b.target.value),onKeyPress:b=>b.key==="Enter"&&O(),placeholder:"Key"}),r.jsx("button",{onClick:O,className:"btn btn-search",children:"Search"})]})]}),r.jsx("div",{className:"operation-group",children:r.jsx("button",{onClick:L,className:"btn btn-clear",children:"Clear Table"})}),r.jsxs("div",{className:"info-panel",children:[r.jsxs("div",{className:"info-item",children:[r.jsx("span",{className:"info-label",children:"Items"}),r.jsxs("span",{className:"info-value",children:[t,"/",a]})]}),r.jsxs("div",{className:"info-item",children:[r.jsx("span",{className:"info-label",children:"Load"}),r.jsxs("span",{className:"info-value",style:{color:l>=.7?"#f59e0b":"inherit"},children:[(l*100).toFixed(0),"%"]})]}),r.jsxs("div",{className:"info-item",children:[r.jsx("span",{className:"info-label",children:"Collisions"}),r.jsx("span",{className:"info-value",style:{color:c>0?"#f59e0b":"inherit"},children:c})]})]}),r.jsxs("div",{className:"rehash-info-box",children:[r.jsx(Od,{size:16}),r.jsxs("div",{children:[r.jsx("strong",{children:"Rehashing Threshold: 70%"}),r.jsx("p",{children:"In practice, hash tables rehash (double capacity) when load factor reaches ~0.7 to maintain O(1) performance."}),l>=.7?r.jsxs("span",{className:"rehash-warning",children:["Current load (",(l*100).toFixed(0),"%) exceeds threshold!"]}):r.jsxs("span",{className:"rehash-safe",children:["Currently safe (",(l*100).toFixed(0),"% < 70%)"]})]})]}),r.jsx(qt,{message:d})]}),r.jsxs("div",{className:"visual-panel",children:[r.jsx("h2",{children:"Hash Table"}),m&&r.jsxs("div",{className:"hash-demo",children:[r.jsxs("div",{className:"hash-demo-item",children:[r.jsx("span",{className:"hash-demo-label",children:"Key:"}),r.jsxs("span",{className:"hash-demo-key",children:['"',m,'"']})]}),r.jsx(pe,{className:"hash-demo-arrow"}),r.jsx("div",{className:"hash-demo-item",children:r.jsx("span",{className:"hash-demo-label",children:"hash()"})}),r.jsx(pe,{className:"hash-demo-arrow"}),r.jsxs("div",{className:"hash-demo-item",children:[r.jsx("span",{className:"hash-demo-label",children:"Slot:"}),r.jsx("span",{className:"hash-demo-index",children:z(m)})]})]}),C&&r.jsxs("div",{className:"collision-banner",children:[r.jsx(vn,{size:18}),r.jsxs("div",{children:[r.jsx("strong",{children:"Collision Detected!"}),r.jsxs("p",{children:['"',C.key,'" hashed to slot ',r.jsx("span",{className:"slot-badge original",children:C.originalSlot}),C.probedSlots.length>1&&r.jsxs(r.Fragment,{children:[" ","- Probed: ",C.probedSlots.map((b,E)=>r.jsxs("span",{children:[r.jsx("span",{className:`slot-badge ${E===C.probedSlots.length-1?"final":"probed"}`,children:b}),E<C.probedSlots.length-1&&" > "]},E))]})]})]})]}),r.jsx("div",{className:"ht-visual",children:!e||e.length===0?r.jsx("div",{className:"ht-empty",children:"Hash table is empty. Insert some key-value pairs!"}):r.jsx("div",{className:"ht-buckets",children:e.map((b,E)=>{const H=_.includes(E),V=C&&C.originalSlot===E,I=C&&C.finalSlot===E;return r.jsxs("div",{className:`ht-row ${b?"filled":"empty"} 
                        ${w===E?"highlighted":""} 
                        ${M&&b&&b[0]===M?"just-inserted":""}
                        ${H?"probed":""}
                        ${V?"original-hash":""}
                        ${I?"final-slot":""}`,children:[H&&r.jsx("div",{className:"probe-indicator",children:V?"X":I?"O":">"}),r.jsx("div",{className:`ht-key-box ${b?"has-key":""}`,children:b&&r.jsx("span",{className:"ht-key",children:b[0]})}),r.jsx("div",{className:"ht-arrow",children:b&&r.jsx(pe,{size:20})}),r.jsx("div",{className:`ht-index ${V?"collision-index":""}`,children:E}),r.jsx("div",{className:`ht-value-box ${b?"has-value":""}`,children:b?r.jsx("span",{className:"ht-value",children:b[1]}):r.jsx("span",{className:"ht-empty-slot",children:"—"})})]},E)})})}),r.jsxs("div",{className:"ht-legend",children:[r.jsxs("div",{className:"legend-item",children:[r.jsx("div",{className:"legend-color key-color"}),r.jsx("span",{children:"Key"})]}),r.jsxs("div",{className:"legend-item",children:[r.jsx("div",{className:"legend-color index-color"}),r.jsx("span",{children:"Index"})]}),r.jsxs("div",{className:"legend-item",children:[r.jsx("div",{className:"legend-color value-color"}),r.jsx("span",{children:"Value"})]}),_.length>0&&r.jsxs("div",{className:"legend-item",children:[r.jsx("div",{className:"legend-color probe-color"}),r.jsx("span",{children:"Probing Path"})]})]})]})]}),r.jsx(Ke,{dataStructure:"hashtable"})]})}const Uy={title:"What is Chaining?",description:"Chaining handles collisions by storing multiple key-value pairs in a linked list at each slot.",codeExample:"slot[hash] → [key1, val1] → [key2, val2] → ...",analogy:"Like a coat rack - multiple coats can hang on the same hook!"},qy={title:"Chaining vs Probing",chaining:{label:"Chaining:",color:"#22c55e",points:["Uses linked lists","Load factor can exceed 1.0"]},probing:{label:"Probing:",color:"#f59e0b",points:["Finds next empty slot","Load factor must stay below 1.0"]},summary:"Chaining is simpler and handles high load factors better, but uses extra memory for pointers."},Ky={title:"Chaining Advantage",description:"With chaining, load factor can exceed 1.0 because each slot can hold multiple items in a chain.",highLoadThreshold:1.5,highLoadMessage:"High load ({loadFactor}) - chains getting long!",safeMessage:"Load factor: {loadFactor}"},Wy={title:"Rehash Table",description:"Doubles the table capacity and redistributes all items to reduce chain lengths.",buttonText:"Rehash",recommendThreshold:1.5},Qy=[{type:"color",className:"key-color",label:"Key"},{type:"color",className:"index-color",label:"Index"},{type:"color",className:"value-color",label:"Value"},{type:"icon",icon:"Link",color:"#8b5cf6",label:"Chain (Linked List)"}],Gy={insert:{label:"Insert Key-Value",keyPlaceholder:"Key",valuePlaceholder:"Value",buttonText:"Insert"},delete:{label:"Delete Key",placeholder:"Key",buttonText:"Delete"},search:{label:"Search Key",placeholder:"Key",buttonText:"Search"},clear:{buttonText:"Clear Table"},rehash:{buttonText:"Rehash"}},Zy={items:"Items",capacity:"Capacity",load:"Load",collisions:"Collisions"},Jy={emptyTable:"Hash table is empty. Insert some key-value pairs!",insertSuccess:'Inserted "{key}" at slot {index}',insertUpdated:'Updated "{key}" at slot {index}',insertCollision:'Collision! Added "{key}" to chain at slot {index}',deleteSuccess:'Deleted "{key}"',searchFound:'Found: "{key}" = {value}',searchNotFound:'Key "{key}" not found',clearSuccess:"Hashtable cleared!",rehashSuccess:"Rehashed! Capacity: {oldCapacity} -> {newCapacity}",rehashEmpty:"Nothing to rehash - table is empty!",errorNoKey:"Please enter a key!",errorNoKeyValue:"Please enter both key and value!",errorInsert:"Error inserting. Is Flask running?",errorDelete:"Error deleting. Is Flask running?",errorSearch:"Error searching item",errorClear:"Error clearing hashtable",errorRehash:"Error rehashing. Is Flask running?"},U={concept:Uy,comparison:qy,chainingAdvantage:Ky,rehash:Wy,legend:Qy,operations:Gy,infoLabels:Zy,messages:Jy};function Xy(){const[e,n]=g.useState([]),[t,s]=g.useState(0),[a,i]=g.useState(0),[l,o]=g.useState(0),[c,u]=g.useState(0),{message:d,showMessage:h}=Kt(3e3),[m,N]=g.useState(""),[k,x]=g.useState(""),[v,p]=g.useState(""),[f,y]=g.useState(""),[w,j]=g.useState(null),[_,S]=g.useState(null),[M,A]=g.useState(!1);g.useEffect(()=>{C()},[]);const C=async()=>{try{const R=await nn("/api/hashtable_chaining");n(R.table||[]),s(R.size||0),i(R.capacity||0),o(R.load_factor||0),u(R.collision_count||0)}catch(R){console.error("Error loading hashtable:",R)}},$=R=>{if(!a||a===0)return 0;let O=0;for(let L=0;L<R.length;L++)O=(O*31+R.charCodeAt(L))%a;return O},J=async()=>{if(!m.trim()||!k.trim()){h(U.messages.errorNoKeyValue,"error");return}try{const R=await oe("/api/hashtable_chaining/insert",{key:m.trim(),value:k.trim()});if(R.error){h(R.error,"error");return}await C(),S(m.trim()),R.updated?h(U.messages.insertUpdated.replace("{key}",m).replace("{index}",R.index),"info"):R.collision?h(U.messages.insertCollision.replace("{key}",m).replace("{index}",R.index),"warning"):h(U.messages.insertSuccess.replace("{key}",m).replace("{index}",R.index),"success"),j(R.index),setTimeout(()=>{j(null),S(null)},3e3),N(""),x("")}catch{h(U.messages.errorInsert,"error")}},z=async()=>{if(!v.trim()){h(U.messages.errorNoKey,"error");return}try{const R=await oe("/api/hashtable_chaining/delete",{key:v.trim()});if(R.error){h(R.error,"error");return}await C(),h(U.messages.deleteSuccess.replace("{key}",v),"success"),p("")}catch{h(U.messages.errorDelete,"error")}},D=async()=>{if(!f.trim()){h(U.messages.errorNoKey,"error");return}try{const R=await nn(`/api/hashtable_chaining/get?key=${encodeURIComponent(f.trim())}`);if(R.error){h(R.error,"error");return}R.found?h(U.messages.searchFound.replace("{key}",f).replace("{value}",R.value),"success"):h(U.messages.searchNotFound.replace("{key}",f),"error"),y("")}catch{h(U.messages.errorSearch,"error")}},T=async()=>{try{await oe("/api/hashtable_chaining/clear",{}),await C(),j(null),S(null),h(U.messages.clearSuccess,"success")}catch{h(U.messages.errorClear,"error")}};return r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"intro-layout",children:[r.jsxs("div",{className:"intro-left",children:[r.jsxs("div",{className:"concept-box",children:[r.jsxs("div",{className:"concept-header",children:[r.jsx(kn,{className:"icon-sm"}),r.jsx("span",{children:U.concept.title})]}),r.jsxs("div",{className:"concept-content",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"Chaining"})," ",U.concept.description.replace("Chaining ","")]}),r.jsx("div",{style:{background:"var(--bg-tertiary)",padding:"0.75rem",borderRadius:"8px",marginTop:"0.5rem",fontFamily:"monospace",fontSize:"0.9rem"},children:r.jsx("div",{children:U.concept.codeExample})}),r.jsxs("div",{className:"concept-analogy",style:{marginTop:"0.75rem"},children:[r.jsx(on,{}),r.jsx("span",{children:U.concept.analogy})]})]})]}),r.jsxs("div",{className:"concept-box",style:{marginTop:"1rem"},children:[r.jsxs("div",{className:"concept-header",children:[r.jsx(Rn,{className:"icon-sm",style:{color:"#3b82f6"}}),r.jsx("span",{children:U.comparison.title})]}),r.jsxs("div",{className:"concept-content",children:[r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",fontSize:"0.85rem"},children:[r.jsxs("div",{children:[r.jsx("strong",{style:{color:U.comparison.chaining.color},children:U.comparison.chaining.label}),U.comparison.chaining.points.map((R,O)=>r.jsx("div",{style:{marginTop:"0.25rem"},children:R},O))]}),r.jsxs("div",{children:[r.jsx("strong",{style:{color:U.comparison.probing.color},children:U.comparison.probing.label}),U.comparison.probing.points.map((R,O)=>r.jsx("div",{style:{marginTop:"0.25rem"},children:R},O))]})]}),r.jsx("p",{style:{marginTop:"0.75rem",fontSize:"0.85rem"},children:U.comparison.summary})]})]})]}),r.jsx(qe,{context:"Hash Table with Chaining"})]}),r.jsxs("div",{className:"visualizer-layout",children:[r.jsxs("div",{className:"control-panel",children:[r.jsx("h2",{children:"Operations"}),r.jsxs("div",{className:"operation-group",children:[r.jsx("label",{children:U.operations.insert.label}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{type:"text",value:m,onChange:R=>N(R.target.value),placeholder:U.operations.insert.keyPlaceholder}),r.jsx("input",{type:"text",value:k,onChange:R=>x(R.target.value),onKeyDown:R=>R.key==="Enter"&&J(),placeholder:U.operations.insert.valuePlaceholder}),r.jsx("button",{onClick:J,className:"btn btn-insert",children:U.operations.insert.buttonText})]})]}),r.jsxs("div",{className:"operation-group",children:[r.jsx("label",{children:U.operations.delete.label}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{type:"text",value:v,onChange:R=>p(R.target.value),onKeyDown:R=>R.key==="Enter"&&z(),placeholder:U.operations.delete.placeholder}),r.jsx("button",{onClick:z,className:"btn btn-delete",children:U.operations.delete.buttonText})]})]}),r.jsxs("div",{className:"operation-group",children:[r.jsx("label",{children:U.operations.search.label}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{type:"text",value:f,onChange:R=>y(R.target.value),onKeyDown:R=>R.key==="Enter"&&D(),placeholder:U.operations.search.placeholder}),r.jsx("button",{onClick:D,className:"btn btn-search",children:U.operations.search.buttonText})]})]}),r.jsx("div",{className:"operation-group",style:{display:"flex",gap:"0.5rem"},children:r.jsx("button",{onClick:T,className:"btn btn-clear",children:U.operations.clear.buttonText})}),r.jsxs("div",{className:"info-panel",children:[r.jsxs("div",{className:"info-item",children:[r.jsx("span",{className:"info-label",children:U.infoLabels.items}),r.jsx("span",{className:"info-value",children:t})]}),r.jsxs("div",{className:"info-item",children:[r.jsx("span",{className:"info-label",children:U.infoLabels.capacity}),r.jsx("span",{className:"info-value",children:a})]}),r.jsxs("div",{className:"info-item",children:[r.jsx("span",{className:"info-label",children:U.infoLabels.load}),r.jsx("span",{className:"info-value",style:{color:l>=1?"#f59e0b":"inherit"},children:l.toFixed(2)})]}),r.jsxs("div",{className:"info-item",children:[r.jsx("span",{className:"info-label",children:U.infoLabels.collisions}),r.jsx("span",{className:"info-value",style:{color:c>0?"#f59e0b":"inherit"},children:c})]})]}),r.jsxs("div",{className:"rehash-info-box",children:[r.jsx(As,{size:16}),r.jsxs("div",{children:[r.jsx("strong",{children:U.chainingAdvantage.title}),r.jsx("p",{children:U.chainingAdvantage.description}),l>=U.chainingAdvantage.highLoadThreshold?r.jsxs("div",{className:"rehash-recommend",children:[r.jsx(_d,{size:14}),r.jsx("span",{className:"rehash-warning",children:U.chainingAdvantage.highLoadMessage.replace("{loadFactor}",l.toFixed(2))})]}):r.jsx("span",{className:"rehash-safe",children:U.chainingAdvantage.safeMessage.replace("{loadFactor}",l.toFixed(2))})]})]}),r.jsx(qt,{message:d})]}),r.jsxs("div",{className:"visual-panel",children:[r.jsx("h2",{children:"Hash Table (Chaining)"}),m&&r.jsxs("div",{className:"hash-demo",children:[r.jsxs("div",{className:"hash-demo-item",children:[r.jsx("span",{className:"hash-demo-label",children:"Key:"}),r.jsxs("span",{className:"hash-demo-key",children:['"',m,'"']})]}),r.jsx(pe,{className:"hash-demo-arrow"}),r.jsx("div",{className:"hash-demo-item",children:r.jsx("span",{className:"hash-demo-label",children:"hash()"})}),r.jsx(pe,{className:"hash-demo-arrow"}),r.jsxs("div",{className:"hash-demo-item",children:[r.jsx("span",{className:"hash-demo-label",children:"Slot:"}),r.jsx("span",{className:"hash-demo-index",children:$(m)})]})]}),r.jsx("div",{className:"ht-chaining-visual",children:!e||e.length===0?r.jsx("div",{className:"ht-empty",children:U.messages.emptyTable}):r.jsx("div",{className:"ht-chaining-buckets",children:e.map((R,O)=>{const L=w===O,b=R&&Array.isArray(R)&&R.length>0,E=b?R.length:0;return r.jsxs("div",{className:`ht-chaining-row ${b?"filled":"empty"} ${L?"highlighted":""}`,children:[r.jsxs("div",{className:"ht-chaining-index",children:[r.jsx("span",{className:"index-number",children:O}),E>1&&r.jsx("span",{className:"chain-count",children:E})]}),r.jsx("div",{className:"ht-chaining-arrow-container",children:r.jsx(pe,{size:18,className:"bucket-arrow"})}),r.jsx("div",{className:"ht-chaining-content",children:b?r.jsx("div",{className:"ht-chaining-chain",children:R.map((H,V)=>{const I=_&&H.key===_;return r.jsxs(At.Fragment,{children:[r.jsxs("div",{className:`ht-chaining-node ${I?"just-inserted":""} ${V>0?"collision-node":""}`,children:[r.jsx("div",{className:"node-key",children:H.key}),r.jsx("div",{className:"node-separator"}),r.jsx("div",{className:"node-value",children:H.value})]}),V<R.length-1&&r.jsx("div",{className:"chain-link",children:r.jsx(pe,{size:16})})]},V)})}):r.jsx("div",{className:"ht-chaining-empty-slot",children:r.jsx("span",{children:"Empty"})})})]},O)})})}),r.jsx("div",{className:"ht-legend",children:U.legend.map((R,O)=>r.jsxs("div",{className:"legend-item",children:[R.type==="color"?r.jsx("div",{className:`legend-color ${R.className}`}):r.jsx(As,{size:14,style:{color:R.color}}),r.jsx("span",{children:R.label})]},O))})]})]}),r.jsx(Ke,{dataStructure:"hashtableChaining"})]})}function Yy(){const[e,n]=g.useState([]),[t,s]=g.useState(0),[a,i]=g.useState(0),[l,o]=g.useState(0),{message:c,showMessage:u}=Kt(3e3),[d,h]=g.useState(""),[m,N]=g.useState(""),[k,x]=g.useState(""),[v,p]=g.useState(""),[f,y]=g.useState(null),[w,j]=g.useState([]),[_,S]=g.useState(null),[M,A]=g.useState(null);g.useEffect(()=>{C()},[]);const C=async()=>{try{const O=await nn("/api/hashtable_quadratic");n(O.table||[]),s(O.size||0),i(O.capacity||0),o(O.load_factor||0)}catch(O){console.error("Error loading hashtable:",O)}},$=O=>{if(!a||a===0)return 0;let L=0;for(let b=0;b<O.length;b++)L=(L*31+O.charCodeAt(b))%a;return L},J=(O,L)=>{var H;const b=$(O),E=[];for(let V=0;V<a;V++){const I=(b+V*V)%a;if(E.push({index:I,i:V,formula:`(${b} + ${V}²) % ${a} = ${I}`}),!L[I]||L[I][0]===O)break}return{originalHash:b,path:E,finalSlot:(H=E[E.length-1])==null?void 0:H.index}},z=async()=>{if(!d.trim()||!m.trim()){u("Please enter both key and value!","error");return}const O=a>0?$(d.trim()):0,L=e.length>0&&e[O]&&e[O]!=="DELETED"&&e[O][0]!==d.trim();let b=null;L&&(b=J(d.trim(),e));try{const E=await oe("/api/hashtable_quadratic/insert",{key:d.trim(),value:m.trim()});if(E.error){u(E.error,"error");return}await C(),S(d.trim()),L&&b?(A({key:d.trim(),originalSlot:b.originalHash,probedSlots:b.path,finalSlot:E.final_index}),j(b.path.map(H=>H.index)),u(`Collision! Quadratic probing: ${b.path.length} probe(s)`,"warning"),setTimeout(()=>{j([]),A(null)},5e3)):(u(`Inserted "${d}" → slot ${O}`,"success"),y(O),setTimeout(()=>y(null),2e3)),h(""),N(""),setTimeout(()=>S(null),3e3)}catch{u("Error inserting. Is Flask running?","error")}},D=async()=>{if(!k.trim()){u("Please enter a key!","error");return}try{const O=await oe("/api/hashtable_quadratic/delete",{key:k.trim()});if(O.error){u(O.error,"error");return}await C(),u(`Deleted "${k}"`,"success"),x("")}catch{u("Error deleting. Is Flask running?","error")}},T=async()=>{if(!v.trim()){u("Please enter a key!","error");return}try{const O=await nn(`/api/hashtable_quadratic/get?key=${encodeURIComponent(v.trim())}`);if(O.error){u(O.error,"error");return}O.found?u(`Found: "${v}" = ${O.value}`,"success"):u(`Key "${v}" not found`,"error"),p("")}catch{u("Error searching item","error")}},R=async()=>{try{await oe("/api/hashtable_quadratic/clear",{}),await C(),j([]),A(null),u("Hashtable cleared!","success")}catch{u("Error clearing hashtable","error")}};return r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"intro-layout",children:[r.jsxs("div",{className:"intro-left",children:[r.jsxs("div",{className:"concept-box",children:[r.jsxs("div",{className:"concept-header",children:[r.jsx(kn,{className:"icon-sm"}),r.jsx("span",{children:"What is Quadratic Probing?"})]}),r.jsxs("div",{className:"concept-content",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"Quadratic Probing"})," is a collision resolution technique where we probe at quadratically increasing intervals."]}),r.jsxs("div",{style:{background:"var(--bg-tertiary)",padding:"0.75rem",borderRadius:"8px",marginTop:"0.5rem",fontFamily:"monospace",fontSize:"0.9rem"},children:[r.jsx("div",{children:"probe(i) = (hash + i²) % capacity"}),r.jsx("div",{style:{color:"var(--text-muted)",marginTop:"0.25rem"},children:"i = 0, 1, 4, 9, 16, 25..."})]}),r.jsxs("div",{className:"concept-analogy",style:{marginTop:"0.75rem"},children:[r.jsx(on,{}),r.jsxs("span",{children:["Unlike linear probing, we jump further each time – reducing ",r.jsx("strong",{children:"clustering"}),"!"]})]})]})]}),r.jsxs("div",{className:"concept-box",style:{marginTop:"1rem"},children:[r.jsxs("div",{className:"concept-header",children:[r.jsx(Rn,{className:"icon-sm",style:{color:"#3b82f6"}}),r.jsx("span",{children:"Linear vs Quadratic"})]}),r.jsxs("div",{className:"concept-content",children:[r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",fontSize:"0.85rem"},children:[r.jsxs("div",{children:[r.jsx("strong",{style:{color:"#f59e0b"},children:"Linear:"}),r.jsx("div",{style:{fontFamily:"monospace",marginTop:"0.25rem"},children:"+1, +2, +3, +4..."})]}),r.jsxs("div",{children:[r.jsx("strong",{style:{color:"#22c55e"},children:"Quadratic:"}),r.jsx("div",{style:{fontFamily:"monospace",marginTop:"0.25rem"},children:"+1, +4, +9, +16..."})]})]}),r.jsx("p",{style:{marginTop:"0.75rem",fontSize:"0.85rem"},children:"Quadratic probing spreads entries more evenly but may not find empty slots if table is over 50% full."})]})]})]}),r.jsx(qe,{context:"Hash Table with Quadratic Probing"})]}),r.jsxs("div",{className:"visualizer-layout",children:[r.jsxs("div",{className:"control-panel",children:[r.jsx("h2",{children:"Operations"}),r.jsxs("div",{className:"operation-group",children:[r.jsx("label",{children:"Insert Key-Value"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{type:"text",value:d,onChange:O=>h(O.target.value),placeholder:"Key"}),r.jsx("input",{type:"text",value:m,onChange:O=>N(O.target.value),onKeyPress:O=>O.key==="Enter"&&z(),placeholder:"Value"}),r.jsx("button",{onClick:z,className:"btn btn-insert",children:"Insert"})]})]}),r.jsxs("div",{className:"operation-group",children:[r.jsx("label",{children:"Delete Key"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{type:"text",value:k,onChange:O=>x(O.target.value),onKeyPress:O=>O.key==="Enter"&&D(),placeholder:"Key"}),r.jsx("button",{onClick:D,className:"btn btn-delete",children:"Delete"})]})]}),r.jsxs("div",{className:"operation-group",children:[r.jsx("label",{children:"Search Key"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{type:"text",value:v,onChange:O=>p(O.target.value),onKeyPress:O=>O.key==="Enter"&&T(),placeholder:"Key"}),r.jsx("button",{onClick:T,className:"btn btn-search",children:"Search"})]})]}),r.jsx("div",{className:"operation-group",children:r.jsx("button",{onClick:R,className:"btn btn-clear",children:"Clear Table"})}),r.jsxs("div",{className:"info-panel",children:[r.jsxs("div",{className:"info-item",children:[r.jsx("span",{className:"info-label",children:"Items"}),r.jsxs("span",{className:"info-value",children:[t,"/",a]})]}),r.jsxs("div",{className:"info-item",children:[r.jsx("span",{className:"info-label",children:"Load"}),r.jsxs("span",{className:"info-value",style:{color:l>=.5?"#f59e0b":"inherit"},children:[(l*100).toFixed(0),"%"]})]})]}),r.jsxs("div",{className:"rehash-info-box",children:[r.jsx(Od,{size:16}),r.jsxs("div",{children:[r.jsx("strong",{children:"Rehashing Threshold: 50%"}),r.jsx("p",{children:"Quadratic probing requires lower load factor (~0.5) to guarantee finding empty slots."}),l>=.5?r.jsxs("span",{className:"rehash-warning",children:["Load (",(l*100).toFixed(0),"%) at threshold!"]}):r.jsxs("span",{className:"rehash-safe",children:["Currently safe (",(l*100).toFixed(0),"% < 50%)"]})]})]}),r.jsx(qt,{message:c})]}),r.jsxs("div",{className:"visual-panel",children:[r.jsx("h2",{children:"Hash Table (Quadratic Probing)"}),d&&r.jsxs("div",{className:"hash-demo",children:[r.jsxs("div",{className:"hash-demo-item",children:[r.jsx("span",{className:"hash-demo-label",children:"Key:"}),r.jsxs("span",{className:"hash-demo-key",children:['"',d,'"']})]}),r.jsx(pe,{className:"hash-demo-arrow"}),r.jsx("div",{className:"hash-demo-item",children:r.jsx("span",{className:"hash-demo-label",children:"hash()"})}),r.jsx(pe,{className:"hash-demo-arrow"}),r.jsxs("div",{className:"hash-demo-item",children:[r.jsx("span",{className:"hash-demo-label",children:"Slot:"}),r.jsx("span",{className:"hash-demo-index",children:$(d)})]})]}),M&&r.jsxs("div",{className:"collision-banner",children:[r.jsx(vn,{size:18}),r.jsxs("div",{children:[r.jsx("strong",{children:"Quadratic Probing!"}),r.jsxs("p",{children:['"',M.key,'" hashed to slot ',r.jsx("span",{className:"slot-badge original",children:M.originalSlot})]}),r.jsx("div",{style:{marginTop:"0.5rem",fontSize:"0.8rem",fontFamily:"monospace"},children:M.probedSlots.map((O,L)=>r.jsxs("div",{style:{marginBottom:"0.25rem"},children:["i=",O.i,": ",O.formula,L===M.probedSlots.length-1&&r.jsx("span",{style:{color:"#4ade80"},children:" [FOUND]"})]},L))})]})]}),r.jsx("div",{className:"ht-visual",children:!e||e.length===0?r.jsx("div",{className:"ht-empty",children:"Hash table is empty. Insert some key-value pairs!"}):r.jsx("div",{className:"ht-buckets",children:e.map((O,L)=>{const b=w.includes(L),E=M&&M.originalSlot===L,H=M&&M.finalSlot===L,V=O==="DELETED",I=O&&O!=="DELETED";return r.jsxs("div",{className:`ht-row ${I?"filled":"empty"} 
                        ${V?"deleted":""}
                        ${f===L?"highlighted":""} 
                        ${_&&I&&O[0]===_?"just-inserted":""}
                        ${b?"probed":""}
                        ${E?"original-hash":""}
                        ${H?"final-slot":""}`,children:[b&&r.jsx("div",{className:"probe-indicator",children:E?"X":H?"O":">"}),r.jsxs("div",{className:`ht-key-box ${I?"has-key":""} ${V?"deleted-slot":""}`,children:[I&&r.jsx("span",{className:"ht-key",children:O[0]}),V&&r.jsx("span",{className:"ht-deleted-text",children:"DEL"})]}),r.jsx("div",{className:"ht-arrow",children:I&&r.jsx(pe,{size:20})}),r.jsx("div",{className:`ht-index ${E?"collision-index":""}`,children:L}),r.jsx("div",{className:`ht-value-box ${I?"has-value":""} ${V?"deleted-slot":""}`,children:I?r.jsx("span",{className:"ht-value",children:O[1]}):V?r.jsx("span",{className:"ht-deleted-text",children:"DELETED"}):r.jsx("span",{className:"ht-empty-slot",children:"—"})})]},L)})})}),r.jsxs("div",{className:"ht-legend",children:[r.jsxs("div",{className:"legend-item",children:[r.jsx("div",{className:"legend-color key-color"}),r.jsx("span",{children:"Key"})]}),r.jsxs("div",{className:"legend-item",children:[r.jsx("div",{className:"legend-color index-color"}),r.jsx("span",{children:"Index"})]}),r.jsxs("div",{className:"legend-item",children:[r.jsx("div",{className:"legend-color value-color"}),r.jsx("span",{children:"Value"})]}),w.length>0&&r.jsxs("div",{className:"legend-item",children:[r.jsx("div",{className:"legend-color probe-color"}),r.jsx("span",{children:"Probe Path"})]})]})]})]}),r.jsx(Ke,{dataStructure:"hashtable"})]})}const jt=7,eg={inorder:{name:"Inorder Traversal",order:"Left → Root → Right",description:"Visit left subtree, process root, then visit right subtree. For BST, this produces sorted order.",useCase:["Get sorted elements","Validate BST","Create mirror image"],complexity:{time:"O(n)",space:"O(h)"}},preorder:{name:"Preorder Traversal",order:"Root → Left → Right",description:"Process root first, then recursively visit left and right subtrees. Useful for copying trees.",useCase:["Copy tree structure","Serialize/deserialize","Prefix expressions"],complexity:{time:"O(n)",space:"O(h)"}},postorder:{name:"Postorder Traversal",order:"Left → Right → Root",description:"Visit left subtree, right subtree, then process root. Essential for deleting nodes safely.",useCase:["Delete nodes safely","Calculate folder sizes","Postfix expressions"],complexity:{time:"O(n)",space:"O(h)"}},levelorder:{name:"Level Order Traversal",order:"Level by Level (BFS)",description:"Visit nodes level by level using a queue. Perfect for finding shortest paths.",useCase:["Shortest path","Level-wise printing","Nodes at distance K"],complexity:{time:"O(n)",space:"O(w)"}}},Ri=(e,n=[])=>(e&&(Ri(e.left,n),n.push(e.data),Ri(e.right,n)),n),Oi=(e,n=[])=>(e&&(n.push(e.data),Oi(e.left,n),Oi(e.right,n)),n),_i=(e,n=[])=>(e&&(_i(e.left,n),_i(e.right,n),n.push(e.data)),n),ng=e=>{if(!e)return[];const n=[],t=[e];for(;t.length;){const s=t.shift();n.push(s.data),s.left&&t.push(s.left),s.right&&t.push(s.right)}return n},Pi=(e,n=0)=>e?Math.max(Pi(e.left,n+1),Pi(e.right,n+1)):n-1;function tg(){return r.jsxs("div",{className:"intro-left",children:[r.jsxs("div",{className:"concept-box",children:[r.jsxs("div",{className:"concept-header",children:[r.jsx(kn,{className:"icon-sm"}),r.jsx("span",{children:"What is a Binary Tree?"})]}),r.jsxs("div",{className:"concept-content",children:[r.jsxs("p",{children:["A ",r.jsx("strong",{children:"Binary Tree"})," is a hierarchical data structure where each node has at most ",r.jsx("strong",{children:"two children"}),": left and right."]}),r.jsxs("div",{className:"concept-analogy",children:[r.jsx(on,{}),r.jsxs("span",{children:["Think of a ",r.jsx("strong",{children:"family tree"})," – each person can have up to two children!"]})]}),r.jsxs("div",{className:"concept-key-terms",children:[r.jsx("h4",{children:"Key Terms:"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Node:"})," Contains data and links to children"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Root:"})," The topmost node (no parent)"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Leaf:"})," A node with no children"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Height:"})," Longest path from root to leaf"]})]})]})]})]}),r.jsxs("div",{className:"concept-box",style:{marginTop:"1rem"},children:[r.jsxs("div",{className:"concept-header",children:[r.jsx(Rn,{className:"icon-sm"}),r.jsx("span",{children:"What are Tree Traversals?"})]}),r.jsxs("div",{className:"concept-content",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"Tree Traversal"})," is visiting each node ",r.jsx("strong",{children:"exactly once"})," in a specific order."]}),r.jsxs("div",{className:"concept-why-traverse",children:[r.jsx("h4",{children:"Why Traverse?"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Search:"})," Find specific data"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Copy:"})," Duplicate the tree"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Evaluate:"})," Calculate expressions"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Delete:"})," Remove nodes properly"]})]})]}),r.jsxs("div",{className:"concept-analogy",style:{marginTop:"0.75rem"},children:[r.jsx(on,{}),r.jsx("span",{children:"Like reading a book – you can read in different orders based on your needs!"})]})]})]})]})}function rg({insertValue:e,deleteValue:n,size:t,height:s,message:a,tree:i,isAnimating:l,visitedNodes:o,onInsertValueChange:c,onDeleteValueChange:u,onInsert:d,onDelete:h,onTraversal:m,onClear:N,onResetTraversal:k}){const x=(v,p)=>{const f=v.target.value;(f===""||f==="-"||/^-?\d*\.?\d*$/.test(f))&&p(f)};return r.jsxs("div",{className:"control-panel",children:[r.jsx("h2",{children:"Binary Tree Traversals"}),r.jsxs("div",{className:"operation-group",children:[r.jsx("label",{htmlFor:"insertValue",children:"Insert Node"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{type:"number",id:"insertValue",value:e,onChange:v=>x(v,c),onKeyPress:v=>v.key==="Enter"&&d(),placeholder:"Enter a number"}),r.jsx("button",{onClick:d,className:"btn btn-insert",children:"Insert"})]})]}),r.jsxs("div",{className:"operation-group",children:[r.jsx("label",{htmlFor:"deleteValue",children:"Delete Node"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{type:"number",id:"deleteValue",value:n,onChange:v=>x(v,u),onKeyPress:v=>v.key==="Enter"&&h(),placeholder:"Enter a number"}),r.jsx("button",{onClick:h,className:"btn btn-delete",children:"Delete"})]})]}),r.jsxs("div",{className:"operation-group",children:[r.jsx("label",{children:"Traversals"}),r.jsx("div",{className:"btn-group",children:["inorder","preorder","postorder","levelorder"].map(v=>r.jsx("button",{onClick:()=>m(v),className:"btn btn-traversal",disabled:l||!i,children:v==="levelorder"?"Level Order":v.charAt(0).toUpperCase()+v.slice(1)},v))}),o.length>0&&!l&&r.jsx("button",{onClick:k,className:"btn btn-secondary",style:{marginTop:"0.5rem",width:"100%"},children:"Reset Colors"})]}),r.jsxs("div",{className:"traversal-legend",children:[r.jsxs("div",{className:"legend-item",children:[r.jsx("span",{className:"legend-dot legend-dot--default"}),r.jsx("span",{children:"Not visited"})]}),r.jsxs("div",{className:"legend-item",children:[r.jsx("span",{className:"legend-dot legend-dot--visiting"}),r.jsx("span",{children:"Visiting"})]}),r.jsxs("div",{className:"legend-item",children:[r.jsx("span",{className:"legend-dot legend-dot--visited"}),r.jsx("span",{children:"Visited"})]})]}),r.jsxs("div",{className:"info-panel",children:[r.jsxs("div",{className:"info-item",children:[r.jsx("span",{className:"info-label",children:"Size:"}),r.jsx("span",{className:"info-value",children:t})]}),r.jsxs("div",{className:"info-item",children:[r.jsx("span",{className:"info-label",children:"Height:"}),r.jsx("span",{className:"info-value",children:s})]}),r.jsxs("div",{className:"info-item",children:[r.jsx("span",{className:"info-label",children:"Max Size:"}),r.jsx("span",{className:"info-value",children:jt})]})]}),t>=jt*.8&&t<jt&&r.jsxs("div",{className:"warning-box",children:[r.jsx(vn,{size:18}),r.jsxs("div",{children:[r.jsx("strong",{children:"Tree is filling up!"})," You're at ",t,"/",jt," nodes."]})]}),r.jsx("div",{className:"operation-group",children:r.jsx("button",{onClick:N,className:"btn btn-clear",children:"Clear Tree"})}),a&&r.jsx("div",{className:`message message-${a.includes("Error")||a.includes("error")?"error":/success|complete|Inserted|Deleted|cleared/i.test(a)?"success":a.includes("full")?"warning":"info"}`,children:a})]})}function sg({tree:e,currentNode:n,visitedNodes:t}){const s=c=>{const u=n===c,d=t.includes(c);return{color:u?"#f59e0b":d?"#10b981":"#6366f1",glow:u?"drop-shadow(0 0 12px #f59e0b) drop-shadow(0 0 20px #f59e0b)":d?"drop-shadow(0 0 6px #10b981)":"none",radius:u?30:25,stroke:u?3:2,fontSize:u?16:14,fontWeight:u?"bold":"normal"}},a=(c,u,d,h,m)=>{if(!c)return[];const N=Math.pow(2,m-h)*50,k=s(c.data),x=[];return c.left&&(x.push(r.jsx("line",{x1:u,y1:d,x2:u-N,y2:d+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:"2"},`l-${c.data}-l`)),x.push(...a(c.left,u-N,d+100,h+1,m))),c.right&&(x.push(r.jsx("line",{x1:u,y1:d,x2:u+N,y2:d+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:"2"},`l-${c.data}-r`)),x.push(...a(c.right,u+N,d+100,h+1,m))),x.push(r.jsxs("g",{style:{filter:k.glow,transition:"all 0.3s ease"},children:[r.jsx("circle",{cx:u,cy:d,r:k.radius,fill:k.color,stroke:"white",strokeWidth:k.stroke,style:{transition:"all 0.3s ease"}}),r.jsx("text",{x:u,y:d,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:k.fontSize,fontWeight:k.fontWeight,children:c.data})]},`n-${c.data}-${u}`)),x};if(!e)return r.jsx("div",{className:"tree-empty",children:"Tree is empty. Insert some nodes!"});const i=Pi(e),l=(i+1)*100+50,o=Math.max(800,Math.pow(2,Math.max(i,1))*80);return r.jsx("svg",{width:o,height:l,className:"tree-svg",children:a(e,o/2,50,0,i)})}function ag({traversalType:e,traversalResult:n,isAnimating:t,traversalComplete:s}){if(!e||n.length===0&&!t)return null;const a=eg[e];return r.jsxs("div",{className:"traversal-output-panel",children:[r.jsxs("div",{style:{marginBottom:"1rem"},children:[r.jsxs("h3",{className:"traversal-title",children:[a==null?void 0:a.name,t&&r.jsx("span",{className:"traversal-badge traversal-badge--running",children:"Running..."}),s&&r.jsx("span",{className:"traversal-badge traversal-badge--complete",children:"Complete"})]}),r.jsxs("p",{className:"traversal-order",children:[r.jsx("strong",{children:"Order:"})," ",a==null?void 0:a.order]}),r.jsx("p",{className:"traversal-description",children:a==null?void 0:a.description})]}),r.jsxs("div",{className:"traversal-output-box",children:[r.jsx("div",{className:"traversal-output-label",children:"Output Sequence:"}),r.jsx("div",{className:"traversal-sequence-container",children:n.length===0&&t?r.jsx("span",{style:{color:"var(--text-muted)",fontStyle:"italic"},children:"Traversing..."}):n.map((i,l)=>r.jsx("span",{className:`traversal-node ${l===n.length-1&&!s?"traversal-node--current":"traversal-node--complete"}`,children:i},l))})]}),s&&n.length>0&&r.jsxs("div",{className:"traversal-array-section",children:[r.jsx("div",{className:"traversal-array-label",children:"Array Output:"}),r.jsxs("code",{className:"traversal-array-output",children:["[",n.join(", "),"]"]}),r.jsxs("p",{className:"traversal-use-case",children:["Use case: ",a==null?void 0:a.useCase.join(" • ")]}),r.jsxs("div",{className:"traversal-complexity",children:[r.jsx("strong",{children:"Time:"})," ",r.jsx("code",{className:"complexity-value",children:a==null?void 0:a.complexity.time})," (visits each node once)",r.jsx("br",{}),r.jsx("strong",{children:"Space:"})," ",r.jsx("code",{className:"complexity-value",children:a==null?void 0:a.complexity.space})," (recursion stack/queue)"]})]})]})}function ig(){const[e,n]=g.useState(null),[t,s]=g.useState(0),[a,i]=g.useState(-1),[l,o]=g.useState(""),[c,u]=g.useState(""),[d,h]=g.useState(""),[m,N]=g.useState([]),[k,x]=g.useState(!1),[v,p]=g.useState(null),[f,y]=g.useState([]),[w,j]=g.useState(null),[_,S]=g.useState(!1);g.useEffect(()=>{M()},[]);const M=async()=>{try{const R=await(await fetch("/api/binarytree")).json();n(R.tree),s(R.size||0),i(R.height!==void 0?R.height:-1)}catch(T){console.error("Error loading tree:",T)}},A=T=>{h(T),setTimeout(()=>h(""),3e3)},C=async()=>{if(!l.trim()){A("Please enter a number!");return}const T=Number(l);if(isNaN(T)){A("Please enter a valid number!");return}if(t>=jt){A(`Tree is full! Maximum size is ${jt} nodes.`);return}try{const O=await(await fetch("/api/binarytree/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:T})})).json();if(O.error){A(O.error);return}n(O.tree),s(O.size||0),i(O.height!==void 0?O.height:-1),A(`Inserted ${T}`),o("")}catch{A("Error inserting node")}},$=async()=>{if(!c.trim()){A("Please enter a number!");return}const T=Number(c);if(isNaN(T)){A("Please enter a valid number!");return}try{const O=await(await fetch("/api/binarytree/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:T})})).json();if(O.error){A(O.error);return}n(O.tree),s(O.size||0),i(O.height!==void 0?O.height:-1),A(`Deleted ${T}`),u("")}catch{A("Error deleting node")}},J=async()=>{try{await fetch("/api/binarytree/clear",{method:"POST"}),n(null),s(0),i(-1),D(),A("Tree cleared!")}catch{A("Error clearing tree")}},z=async T=>{if(!e){A("Tree is empty! Insert some nodes first.");return}x(!0),N([]),p(null),y([]),j(T),S(!1);let R=[];switch(T){case"inorder":R=Ri(e);break;case"preorder":R=Oi(e);break;case"postorder":R=_i(e);break;case"levelorder":R=ng(e);break;default:R=[]}if(R.length===0){A("Tree is empty!"),x(!1);return}for(let O=0;O<R.length;O++)p(R[O]),await new Promise(L=>setTimeout(L,600)),y(L=>[...L,R[O]]),N(L=>[...L,R[O]]),await new Promise(L=>setTimeout(L,200));p(null),S(!0),x(!1),A(`${T.charAt(0).toUpperCase()+T.slice(1)} traversal complete!`)},D=()=>{N([]),p(null),y([]),j(null),S(!1)};return r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"intro-layout",children:[r.jsx(tg,{}),r.jsx(qe,{context:"Binary Tree data structure and traversals"})]}),r.jsxs("div",{className:"visualizer-layout",children:[r.jsx(rg,{insertValue:l,deleteValue:c,size:t,height:a,message:d,tree:e,isAnimating:k,visitedNodes:f,onInsertValueChange:o,onDeleteValueChange:u,onInsert:C,onDelete:$,onTraversal:z,onClear:J,onResetTraversal:D}),r.jsxs("div",{className:"visual-panel",children:[r.jsx("h2",{children:"Binary Tree Visualization"}),r.jsx("div",{className:"tree-container",children:r.jsx(sg,{tree:e,currentNode:v,visitedNodes:f})}),r.jsx(ag,{traversalType:w,traversalResult:m,isAnimating:k,traversalComplete:_})]})]}),r.jsx(Ke,{dataStructure:"binarytree"})]})}const lg={title:"What is a Stack?",description:"A Stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle.",codeExample:"push(A) → push(B) → push(C) → pop() returns C",analogy:"Like a stack of plates - you can only take the top plate off first!"},og={title:"Stack Properties",items:[{label:"Order",value:"LIFO (Last-In-First-Out)"},{label:"Access",value:"Top element only"},{label:"Insert",value:"Push to top - O(1)"},{label:"Remove",value:"Pop from top - O(1)"}]},cg={title:"Common Use Cases",items:["Function call stack (recursion)","Undo/Redo operations","Browser back button","Expression evaluation","Syntax parsing"]},ug={title:"Time Complexity",operations:[{name:"Push",time:"O(1)",description:"Add to top"},{name:"Pop",time:"O(1)",description:"Remove from top"},{name:"Peek",time:"O(1)",description:"View top element"},{name:"isEmpty",time:"O(1)",description:"Check if empty"},{name:"Search",time:"O(n)",description:"Find element"}]},dg={push:{label:"Push Value",placeholder:"Value",buttonText:"Push"},pop:{buttonText:"Pop"},peek:{buttonText:"Peek"},clear:{buttonText:"Clear"}},hg={size:"Size",top:"Top",capacity:"Capacity"},pg={emptyStack:"Stack is empty. Push some values!",pushSuccess:'Pushed "{value}" to stack',popSuccess:'Popped "{value}" from stack',popEmpty:"Cannot pop - stack is empty!",peekSuccess:'Top element: "{value}"',peekEmpty:"Cannot peek - stack is empty!",clearSuccess:"Stack cleared!",errorNoValue:"Please enter a value!",errorPush:"Error pushing to stack",errorPop:"Error popping from stack",errorClear:"Error clearing stack",stackFull:"Stack is full!"},fg=[{type:"color",className:"top-color",label:"Top Element"},{type:"color",className:"element-color",label:"Stack Element"}],mg={concept:lg,properties:og,useCases:cg,complexity:ug,operations:dg,infoLabels:hg,messages:pg,legend:fg},yg={title:"What is a Queue?",description:"A Queue is a linear data structure that follows the First-In-First-Out (FIFO) principle.",codeExample:"enqueue(A) → enqueue(B) → enqueue(C) → dequeue() returns A",analogy:"Like a line at a store - first person in line gets served first!"},gg={title:"Queue Properties",items:[{label:"Order",value:"FIFO (First-In-First-Out)"},{label:"Access",value:"Front and Rear"},{label:"Insert",value:"Enqueue at rear - O(1)"},{label:"Remove",value:"Dequeue from front - O(1)"}]},vg={title:"Queue vs Stack",queue:{label:"Queue:",color:"#22c55e",points:["FIFO order","Two access points (front/rear)"]},stack:{label:"Stack:",color:"#3b82f6",points:["LIFO order","One access point (top)"]},summary:"Use Queue when order of processing matters (like task scheduling)."},xg={title:"Common Use Cases",items:["Task scheduling (CPU, print jobs)","Breadth-First Search (BFS)","Message queues","Request handling in servers","Buffering (streaming)"]},kg={title:"Time Complexity",operations:[{name:"Enqueue",time:"O(1)",description:"Add to rear"},{name:"Dequeue",time:"O(1)",description:"Remove from front"},{name:"Front",time:"O(1)",description:"View front element"},{name:"isEmpty",time:"O(1)",description:"Check if empty"},{name:"Search",time:"O(n)",description:"Find element"}]},Ng={enqueue:{label:"Enqueue Value",placeholder:"Value",buttonText:"Enqueue"},dequeue:{buttonText:"Dequeue"},front:{buttonText:"Front"},clear:{buttonText:"Clear"}},jg={size:"Size",front:"Front",rear:"Rear",capacity:"Capacity"},wg={emptyQueue:"Queue is empty. Enqueue some values!",enqueueSuccess:'Enqueued "{value}"',dequeueSuccess:'Dequeued "{value}"',dequeueEmpty:"Cannot dequeue - queue is empty!",frontSuccess:'Front element: "{value}"',frontEmpty:"Cannot get front - queue is empty!",clearSuccess:"Queue cleared!",errorNoValue:"Please enter a value!",errorEnqueue:"Error enqueueing to queue",errorDequeue:"Error dequeueing from queue",errorClear:"Error clearing queue",queueFull:"Queue is full!"},Sg=[{type:"color",className:"front-color",label:"Front"},{type:"color",className:"rear-color",label:"Rear"},{type:"color",className:"element-color",label:"Queue Element"}],bg={concept:yg,properties:gg,comparison:vg,useCases:xg,complexity:kg,operations:Ng,infoLabels:jg,messages:wg,legend:Sg},Tg={title:"What is a Linked List?",description:"A Linked List is a linear data structure where elements are stored in nodes, each pointing to the next node.",codeExample:"HEAD → [A|→] → [B|→] → [C|→] → NULL",analogy:"Like a treasure hunt - each clue (node) points to the next location!"},Cg={title:"Linked List Properties",items:[{label:"Structure",value:"Nodes with data + pointer"},{label:"Memory",value:"Non-contiguous allocation"},{label:"Size",value:"Dynamic (grows/shrinks)"},{label:"Access",value:"Sequential (no random access)"}]},Lg={title:"Linked List vs Array",linkedlist:{label:"Linked List:",color:"#22c55e",points:["Dynamic size","O(1) insert/delete at known position","Extra memory for pointers"]},array:{label:"Array:",color:"#3b82f6",points:["Fixed size (usually)","O(1) random access by index","Contiguous memory"]},summary:"Use Linked List when you need frequent insertions/deletions and don't need random access."},Eg={title:"Types of Linked Lists",items:[{name:"Singly Linked",description:"Each node points to next only"},{name:"Doubly Linked",description:"Nodes point to both next and previous"},{name:"Circular",description:"Last node points back to first"}]},Rg={title:"Time Complexity",operations:[{name:"Access",time:"O(n)",description:"Traverse to find"},{name:"Search",time:"O(n)",description:"Linear search"},{name:"Insert (head)",time:"O(1)",description:"Add at beginning"},{name:"Insert (tail)",time:"O(n)",description:"Traverse then add"},{name:"Delete (head)",time:"O(1)",description:"Remove first"},{name:"Delete (by value)",time:"O(n)",description:"Find then remove"}]},Og={insertHead:{label:"Insert at Head",placeholder:"Value",buttonText:"Insert Head"},insertTail:{label:"Insert at Tail",placeholder:"Value",buttonText:"Insert Tail"},delete:{label:"Delete Value",placeholder:"Value",buttonText:"Delete"},search:{label:"Search Value",placeholder:"Value",buttonText:"Search"},clear:{buttonText:"Clear"}},_g={size:"Size",head:"Head",tail:"Tail"},Pg={emptyList:"Linked list is empty. Insert some values!",insertHeadSuccess:'Inserted "{value}" at head',insertTailSuccess:'Inserted "{value}" at tail',deleteSuccess:'Deleted "{value}"',deleteNotFound:'Value "{value}" not found',searchFound:'Found "{value}" at position {position}',searchNotFound:'Value "{value}" not found',clearSuccess:"Linked list cleared!",errorNoValue:"Please enter a value!",errorInsert:"Error inserting value",errorDelete:"Error deleting value",errorSearch:"Error searching value",errorClear:"Error clearing list"},zg=[{type:"color",className:"head-color",label:"Head Node"},{type:"color",className:"node-color",label:"Node"},{type:"icon",icon:"ArrowRight",color:"#8b5cf6",label:"Pointer"}],Ig={concept:Tg,properties:Cg,comparison:Lg,types:Eg,complexity:Rg,operations:Og,infoLabels:_g,messages:Pg,legend:zg},Mg={title:"What is a Binary Tree?",description:"A Binary Tree is a hierarchical data structure where each node has at most two children (left and right).",codeExample:`       [5]
      /   \\
    [3]   [7]
   /  \\     \\
 [1]  [4]   [9]`,analogy:"Like a family tree - each person can have at most two children!"},Vg={title:"Binary Tree Properties",items:[{label:"Structure",value:"Hierarchical (nodes + edges)"},{label:"Children",value:"At most 2 per node"},{label:"Root",value:"Topmost node (no parent)"},{label:"Leaf",value:"Node with no children"}]},Hg={title:"Types of Binary Trees",items:[{name:"Full Binary Tree",description:"Every node has 0 or 2 children"},{name:"Complete Binary Tree",description:"All levels filled except possibly last"},{name:"Perfect Binary Tree",description:"All internal nodes have 2 children, leaves at same level"},{name:"Binary Search Tree",description:"Left < Parent < Right ordering"}]},Dg={title:"Tree Traversals",items:[{name:"Inorder",order:"Left → Root → Right",use:"BST gives sorted order"},{name:"Preorder",order:"Root → Left → Right",use:"Copy tree, prefix expression"},{name:"Postorder",order:"Left → Right → Root",use:"Delete tree, postfix expression"},{name:"Level Order",order:"Level by level (BFS)",use:"Print by levels"}]},Fg={title:"Time Complexity (BST)",operations:[{name:"Search",average:"O(log n)",worst:"O(n)",description:"Find element"},{name:"Insert",average:"O(log n)",worst:"O(n)",description:"Add element"},{name:"Delete",average:"O(log n)",worst:"O(n)",description:"Remove element"},{name:"Traversal",average:"O(n)",worst:"O(n)",description:"Visit all nodes"}],note:"Worst case O(n) occurs when tree becomes a linked list (unbalanced)"},Ag={title:"Common Use Cases",items:["Binary Search Trees (fast lookup)","Expression trees (parsing)","Huffman coding (compression)","Heaps (priority queues)","File system structure"]},$g={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},delete:{label:"Delete Value",placeholder:"Value",buttonText:"Delete"},search:{label:"Search Value",placeholder:"Value",buttonText:"Search"},traversals:{inorder:"Inorder",preorder:"Preorder",postorder:"Postorder",levelorder:"Level Order"},clear:{buttonText:"Clear"}},Bg={size:"Nodes",height:"Height",root:"Root"},Ug={emptyTree:"Binary tree is empty. Insert some values!",insertSuccess:"Inserted {value}",deleteSuccess:"Deleted {value}",deleteNotFound:"Value {value} not found",searchFound:"Found {value}",searchNotFound:"Value {value} not found",clearSuccess:"Tree cleared!",traversalResult:"{type} traversal: {result}",errorNoValue:"Please enter a value!",errorInsert:"Error inserting value",errorDelete:"Error deleting value",errorSearch:"Error searching value",errorClear:"Error clearing tree"},qg=[{type:"color",className:"root-color",label:"Root"},{type:"color",className:"node-color",label:"Node"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Found"}],Kg={concept:Mg,properties:Vg,types:Hg,traversals:Dg,complexity:Fg,useCases:Ag,operations:$g,infoLabels:Bg,messages:Ug,legend:qg},Wg={title:"What is a Hash Table?",description:"A Hash Table is a data structure that maps keys to values using a hash function for O(1) average access time.",codeExample:'hash("apple") → 3 → table[3] = "apple"',analogy:"Like a library catalog - the book title (key) tells you exactly which shelf (index) to find it!"},Qg={title:"Hash Table Properties",items:[{label:"Access",value:"O(1) average time"},{label:"Hash Function",value:"Maps key → index"},{label:"Load Factor",value:"size / capacity"},{label:"Collision",value:"When two keys hash to same index"}]},Gg={title:"Collision Resolution: Linear Probing",description:"When a collision occurs, probe sequentially until an empty slot is found.",steps:["Calculate hash index","If slot occupied, try next slot","Repeat until empty slot found","Insert at empty slot"],formula:"index = (hash(key) + i) % capacity, where i = 0, 1, 2, ..."},Zg={title:"Linear vs Quadratic Probing",linear:{label:"Linear Probing:",color:"#3b82f6",points:["Simple: check next slot","Primary clustering problem","Cache-friendly"]},quadratic:{label:"Quadratic Probing:",color:"#f59e0b",points:["Jump by squares: 1, 4, 9...","Reduces primary clustering","May not find empty slot"]},summary:"Linear probing is simpler but can cause clustering. Quadratic probing spreads entries better."},Jg={title:"Load Factor",description:"Load factor = size / capacity. Measures how full the table is.",threshold:.7,warningMessage:"High load ({loadFactor}) - consider rehashing!",safeMessage:"Load factor: {loadFactor}"},Xg={title:"Time Complexity",operations:[{name:"Insert",average:"O(1)",worst:"O(n)",description:"Add key-value"},{name:"Search",average:"O(1)",worst:"O(n)",description:"Find by key"},{name:"Delete",average:"O(1)",worst:"O(n)",description:"Remove by key"},{name:"Rehash",average:"O(n)",worst:"O(n)",description:"Resize table"}],note:"Worst case O(n) when many collisions or poor hash function"},Yg={title:"Common Use Cases",items:["Dictionaries/Maps","Caching (memoization)","Database indexing","Symbol tables (compilers)","Counting frequencies"]},ev={insert:{label:"Insert Key-Value",keyPlaceholder:"Key",valuePlaceholder:"Value",buttonText:"Insert"},delete:{label:"Delete Key",placeholder:"Key",buttonText:"Delete"},search:{label:"Search Key",placeholder:"Key",buttonText:"Search"},clear:{buttonText:"Clear"},rehash:{buttonText:"Rehash"}},nv={items:"Items",capacity:"Capacity",load:"Load",collisions:"Collisions"},tv={emptyTable:"Hash table is empty. Insert some key-value pairs!",insertSuccess:'Inserted "{key}" at slot {index}',insertUpdated:'Updated "{key}" at slot {index}',insertCollision:"Collision at slot {original}! Probed to slot {index}",deleteSuccess:'Deleted "{key}"',searchFound:'Found: "{key}" = {value}',searchNotFound:'Key "{key}" not found',clearSuccess:"Hash table cleared!",rehashSuccess:"Rehashed! Capacity: {oldCapacity} → {newCapacity}",rehashEmpty:"Nothing to rehash - table is empty!",tableFull:"Table is full! Consider rehashing.",errorNoKey:"Please enter a key!",errorNoKeyValue:"Please enter both key and value!",errorInsert:"Error inserting. Is Flask running?",errorDelete:"Error deleting. Is Flask running?",errorSearch:"Error searching item",errorClear:"Error clearing hash table",errorRehash:"Error rehashing. Is Flask running?"},rv=[{type:"color",className:"key-color",label:"Key"},{type:"color",className:"index-color",label:"Index"},{type:"color",className:"value-color",label:"Value"},{type:"color",className:"probe-color",label:"Probed Slot"},{type:"color",className:"collision-color",label:"Collision"}],sv={concept:Wg,properties:Qg,collisionResolution:Gg,comparison:Zg,loadFactor:Jg,complexity:Xg,useCases:Yg,operations:ev,infoLabels:nv,messages:tv,legend:rv},av={title:"What is Quadratic Probing?",description:"Quadratic Probing is a collision resolution technique that uses a quadratic function to find the next available slot.",codeExample:"index = (hash(key) + i²) % capacity, where i = 0, 1, 2, 3...",analogy:"Like jumping farther each time - first 1 step, then 4, then 9, then 16!"},iv={title:"Quadratic Probing Properties",items:[{label:"Probe Sequence",value:"+1, +4, +9, +16, +25..."},{label:"Formula",value:"(hash + i²) % capacity"},{label:"Clustering",value:"Reduces primary clustering"},{label:"Load Factor",value:"Must stay below 0.5 for guarantee"}]},lv={title:"Quadratic vs Linear Probing",quadratic:{label:"Quadratic:",color:"#f59e0b",points:["Jumps by squares: 1, 4, 9...","Less primary clustering","May miss empty slots"]},linear:{label:"Linear:",color:"#3b82f6",points:["Steps by 1 each time","Primary clustering issue","Always finds empty slot"]},summary:"Quadratic probing reduces clustering but requires load factor < 0.5 and prime table size for guaranteed insertion."},ov={title:"Clustering Problem",primary:{name:"Primary Clustering",description:"Long runs of occupied slots form clusters",cause:"Linear probing - same probe sequence for nearby hashes",solution:"Use quadratic or double hashing"},secondary:{name:"Secondary Clustering",description:"Keys with same hash follow same probe sequence",cause:"Probe sequence depends only on initial hash",solution:"Use double hashing"}},cv={title:"Load Factor Warning",description:"Quadratic probing may fail to find empty slots if load factor > 0.5",threshold:.5,warningMessage:"Warning: Load factor ({loadFactor}) > 0.5 - insertions may fail!",safeMessage:"Load factor: {loadFactor}"},uv={title:"Time Complexity",operations:[{name:"Insert",average:"O(1)",worst:"O(n)",description:"Add key-value"},{name:"Search",average:"O(1)",worst:"O(n)",description:"Find by key"},{name:"Delete",average:"O(1)",worst:"O(n)",description:"Remove by key"},{name:"Rehash",average:"O(n)",worst:"O(n)",description:"Resize table"}],note:"Requires prime table size and load factor < 0.5 for guaranteed O(1)"},dv={insert:{label:"Insert Key-Value",keyPlaceholder:"Key",valuePlaceholder:"Value",buttonText:"Insert"},delete:{label:"Delete Key",placeholder:"Key",buttonText:"Delete"},search:{label:"Search Key",placeholder:"Key",buttonText:"Search"},clear:{buttonText:"Clear"},rehash:{buttonText:"Rehash"}},hv={items:"Items",capacity:"Capacity",load:"Load",collisions:"Collisions"},pv={emptyTable:"Hash table is empty. Insert some key-value pairs!",insertSuccess:'Inserted "{key}" at slot {index}',insertUpdated:'Updated "{key}" at slot {index}',insertCollision:"Collision! Quadratic probed to slot {index} (i={probeCount})",deleteSuccess:'Deleted "{key}"',searchFound:'Found: "{key}" = {value}',searchNotFound:'Key "{key}" not found',clearSuccess:"Hash table cleared!",rehashSuccess:"Rehashed! Capacity: {oldCapacity} → {newCapacity}",rehashEmpty:"Nothing to rehash - table is empty!",tableFull:"Cannot insert - no empty slot found after full probe cycle!",errorNoKey:"Please enter a key!",errorNoKeyValue:"Please enter both key and value!",errorInsert:"Error inserting. Is Flask running?",errorDelete:"Error deleting. Is Flask running?",errorSearch:"Error searching item",errorClear:"Error clearing hash table",errorRehash:"Error rehashing. Is Flask running?"},fv=[{type:"color",className:"key-color",label:"Key"},{type:"color",className:"index-color",label:"Index"},{type:"color",className:"value-color",label:"Value"},{type:"color",className:"probe-color",label:"Quadratic Probe"}],mv={concept:av,properties:iv,comparison:lv,clustering:ov,loadFactor:cv,complexity:uv,operations:dv,infoLabels:hv,messages:pv,legend:fv},yv={title:"What is a Binary Search Tree?",description:"A Binary Search Tree (BST) is a binary tree where each node follows the ordering property: all left descendants < node < all right descendants.",codeExample:`       [50]
      /    \\
   [30]    [70]
   /  \\    /  \\
 [20][40][60][80]

Left < Parent < Right`,analogy:"Like a dictionary - words are sorted alphabetically, so you can quickly find any word by comparing!"},gv={title:"BST Properties",items:[{label:"Ordering",value:"Left < Parent < Right"},{label:"Search",value:"O(log n) average"},{label:"Inorder",value:"Gives sorted sequence"},{label:"No Duplicates",value:"Typically unique keys"}]},vv={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},delete:{label:"Delete Value",placeholder:"Value",buttonText:"Delete"},search:{label:"Search Value",placeholder:"Value",buttonText:"Search"},traversals:{inorder:"Inorder (Sorted)",preorder:"Preorder",postorder:"Postorder",levelorder:"Level Order"},clear:{buttonText:"Clear"}},xv={title:"BST Delete Cases",items:[{name:"Leaf Node",description:"Simply remove (no children)"},{name:"One Child",description:"Replace with child"},{name:"Two Children",description:"Replace with inorder successor (smallest in right subtree)"}]},kv={title:"Tree Traversals",items:[{name:"Inorder",order:"Left -> Root -> Right",use:"Returns SORTED order in BST"},{name:"Preorder",order:"Root -> Left -> Right",use:"Copy/serialize tree"},{name:"Postorder",order:"Left -> Right -> Root",use:"Delete tree safely"},{name:"Level Order",order:"Level by level (BFS)",use:"Print by levels"}]},Nv={title:"Time Complexity",operations:[{name:"Search",average:"O(log n)",worst:"O(n)",description:"Binary search principle"},{name:"Insert",average:"O(log n)",worst:"O(n)",description:"Find position + insert"},{name:"Delete",average:"O(log n)",worst:"O(n)",description:"Find + restructure"},{name:"Min/Max",average:"O(log n)",worst:"O(n)",description:"Leftmost/rightmost"}],note:"Worst case O(n) when tree is unbalanced (degenerates to linked list). Use AVL/Red-Black trees for guaranteed O(log n)."},jv={title:"Common Use Cases",items:["Database indexing (B-trees)","Symbol tables in compilers","Priority queues","Auto-complete suggestions","Range queries (find all values between X and Y)"]},wv={title:"BST vs Other Structures",items:[{vs:"Array",advantage:"O(log n) insert/delete vs O(n)"},{vs:"Hash Table",advantage:"Ordered data, range queries"},{vs:"Linked List",advantage:"O(log n) search vs O(n)"}]},Sv={size:"Nodes",height:"Height",root:"Root"},bv={emptyTree:"BST is empty. Insert some values!",insertSuccess:"Inserted {value}",deleteSuccess:"Deleted {value}",deleteNotFound:"Value {value} not found",searchFound:"Found {value}",searchNotFound:"Value {value} not found",clearSuccess:"BST cleared!",traversalResult:"{type}: {result}",errorNoValue:"Please enter a value!",errorInsert:"Error inserting value",errorDelete:"Error deleting value",errorSearch:"Error searching value",errorClear:"Error clearing BST"},Tv=[{type:"color",className:"root-color",label:"Root"},{type:"color",className:"node-color",label:"Node"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Found"}],Cv={concept:yv,properties:gv,operations:vv,deleteCases:xv,traversals:kv,complexity:Nv,useCases:jv,comparison:wv,infoLabels:Sv,messages:bv,legend:Tv},Lv={title:"What is an AVL Tree?",description:"An AVL Tree is a self-balancing Binary Search Tree where the height difference between left and right subtrees (balance factor) is at most 1 for every node.",codeExample:`       [50]  BF=0
      /    \\
   [30]    [70]  
  BF=0     BF=0
   /  \\      \\
 [20][40]   [80]

Balance Factor = Height(Left) - Height(Right)
BF must be -1, 0, or 1`,analogy:"Like a well-organized library that automatically reorganizes shelves whenever books are added or removed to ensure quick access!"},Ev={title:"AVL Properties",items:[{label:"Balance Factor",value:"-1, 0, or 1 for all nodes"},{label:"Height",value:"O(log n) guaranteed"},{label:"Self-Balancing",value:"Rotations on insert/delete"},{label:"BST Property",value:"Left < Parent < Right"}]},Rv={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},delete:{label:"Delete Value",placeholder:"Value",buttonText:"Delete"},search:{label:"Search Value",placeholder:"Value",buttonText:"Search"},traversals:{inorder:"Inorder (Sorted)",preorder:"Preorder",postorder:"Postorder",levelorder:"Level Order"},clear:{buttonText:"Clear"}},Ov={title:"AVL Rotations",items:[{name:"Left-Left (LL)",description:"Right rotation",when:"BF > 1, Left child BF >= 0"},{name:"Right-Right (RR)",description:"Left rotation",when:"BF < -1, Right child BF <= 0"},{name:"Left-Right (LR)",description:"Left then Right rotation",when:"BF > 1, Left child BF < 0"},{name:"Right-Left (RL)",description:"Right then Left rotation",when:"BF < -1, Right child BF > 0"}]},_v={title:"Tree Traversals",items:[{name:"Inorder",order:"Left -> Root -> Right",use:"Returns SORTED order"},{name:"Preorder",order:"Root -> Left -> Right",use:"Copy/serialize tree"},{name:"Postorder",order:"Left -> Right -> Root",use:"Delete tree safely"},{name:"Level Order",order:"Level by level (BFS)",use:"Print by levels"}]},Pv={title:"Time Complexity",operations:[{name:"Search",average:"O(log n)",worst:"O(log n)",description:"Height always balanced"},{name:"Insert",average:"O(log n)",worst:"O(log n)",description:"Insert + rebalance"},{name:"Delete",average:"O(log n)",worst:"O(log n)",description:"Delete + rebalance"},{name:"Rotation",average:"O(1)",worst:"O(1)",description:"Constant time fix"}],note:"Unlike regular BST, AVL guarantees O(log n) even in worst case because the tree is always balanced!"},zv={title:"Common Use Cases",items:["Database indexing with frequent lookups","In-memory databases","Dictionary implementations","When guaranteed O(log n) is critical","Real-time systems needing predictable performance"]},Iv={title:"AVL vs Other Trees",items:[{vs:"BST",advantage:"Guaranteed O(log n) vs O(n) worst case"},{vs:"Red-Black",advantage:"More rigidly balanced (faster lookup)"},{vs:"B-Tree",advantage:"Better for in-memory operations"}]},Mv={size:"Nodes",height:"Height",root:"Root"},Vv={emptyTree:"AVL Tree is empty. Insert some values!",insertSuccess:"Inserted {value} (tree rebalanced)",deleteSuccess:"Deleted {value} (tree rebalanced)",deleteNotFound:"Value {value} not found",searchFound:"Found {value}",searchNotFound:"Value {value} not found",clearSuccess:"AVL Tree cleared!",traversalResult:"{type}: {result}",errorNoValue:"Please enter a value!",errorInsert:"Error inserting value",errorDelete:"Error deleting value",errorSearch:"Error searching value",errorClear:"Error clearing AVL Tree"},Hv=[{type:"color",className:"root-color",label:"Root"},{type:"color",className:"balanced-color",label:"Balanced (|BF| <= 1)"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Found"}],Dv={concept:Lv,properties:Ev,operations:Rv,rotations:Ov,traversals:_v,complexity:Pv,useCases:zv,comparison:Iv,infoLabels:Mv,messages:Vv,legend:Hv},Fv={title:"What is a Splay Tree?",description:"A Splay Tree is a self-adjusting Binary Search Tree that moves frequently accessed elements closer to the root through rotations (splaying), providing amortized O(log n) performance.",codeExample:`After searching for 20:

Before:        After Splay:
   [50]           [20]
   /                  \\
 [30]                [50]
 /                   /
[20]  <-- found   [30]

Accessed node moves to root!`,analogy:"Like keeping frequently used items at the front of your desk - recently used elements stay easily accessible!"},Av={title:"Splay Tree Properties",items:[{label:"Self-Adjusting",value:"Accessed nodes move to root"},{label:"No Balance Info",value:"No height/color stored"},{label:"Amortized O(log n)",value:"Good average performance"},{label:"Cache Friendly",value:"Hot nodes stay near root"}]},$v={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},delete:{label:"Delete Value",placeholder:"Value",buttonText:"Delete"},search:{label:"Search Value",placeholder:"Value",buttonText:"Search"},traversals:{inorder:"Inorder (Sorted)",preorder:"Preorder",postorder:"Postorder",levelorder:"Level Order"},clear:{buttonText:"Clear"}},Bv={title:"Splay Operations",items:[{name:"Zig",description:"Single rotation when parent is root",when:"Parent is root"},{name:"Zig-Zig",description:"Both node and parent are left (or both right) children",when:"Same side grandchild"},{name:"Zig-Zag",description:"Node is left child, parent is right (or vice versa)",when:"Opposite side grandchild"}]},Uv={title:"Tree Traversals",items:[{name:"Inorder",order:"Left -> Root -> Right",use:"Returns SORTED order"},{name:"Preorder",order:"Root -> Left -> Right",use:"Copy/serialize tree"},{name:"Postorder",order:"Left -> Right -> Root",use:"Delete tree safely"},{name:"Level Order",order:"Level by level (BFS)",use:"Print by levels"}]},qv={title:"Time Complexity",operations:[{name:"Search",average:"O(log n)*",worst:"O(n)",description:"Amortized logarithmic"},{name:"Insert",average:"O(log n)*",worst:"O(n)",description:"Amortized logarithmic"},{name:"Delete",average:"O(log n)*",worst:"O(n)",description:"Amortized logarithmic"},{name:"Splay",average:"O(log n)*",worst:"O(n)",description:"Brings node to root"}],note:"* Amortized - while single operations can be O(n), any sequence of m operations takes O(m log n) total time."},Kv={title:"Common Use Cases",items:["Cache implementations (LRU-like behavior)","Garbage collectors","Network routers (IP lookup)","Situations with temporal locality","When same elements accessed repeatedly"]},Wv={title:"Splay Tree vs Other Trees",items:[{vs:"AVL",advantage:"Simpler (no balance info), better for skewed access"},{vs:"Red-Black",advantage:"Self-optimizing for access patterns"},{vs:"BST",advantage:"Better amortized performance"}]},Qv={size:"Nodes",height:"Height",root:"Root"},Gv={emptyTree:"Splay Tree is empty. Insert some values!",insertSuccess:"Inserted {value} (now at root)",deleteSuccess:"Deleted {value}",deleteNotFound:"Value {value} not found",searchFound:"Found {value} (splayed to root)",searchNotFound:"Value {value} not found",clearSuccess:"Splay Tree cleared!",traversalResult:"{type}: {result}",errorNoValue:"Please enter a value!",errorInsert:"Error inserting value",errorDelete:"Error deleting value",errorSearch:"Error searching value",errorClear:"Error clearing Splay Tree"},Zv=[{type:"color",className:"root-color",label:"Root (Most Recent)"},{type:"color",className:"node-color",label:"Node"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Found"}],Jv={concept:Fv,properties:Av,operations:$v,splayOperations:Bv,traversals:Uv,complexity:qv,useCases:Kv,comparison:Wv,infoLabels:Qv,messages:Gv,legend:Zv},Xv={title:"What is a Min Heap?",description:"A Min Heap is a complete binary tree where each parent node is smaller than or equal to its children. The minimum element is always at the root, making it perfect for priority queues.",codeExample:`       [1]  <- Min at root
      /    \\
    [3]    [2]
   /  \\    /
 [7]  [6][4]

Array: [1, 3, 2, 7, 6, 4]
Parent always <= Children`,analogy:"Like a tournament bracket where the winner (smallest) rises to the top - the champion is always at the root!"},Yv={title:"Min Heap Properties",items:[{label:"Heap Property",value:"Parent <= Children"},{label:"Complete Tree",value:"Filled level by level"},{label:"Array Storage",value:"Parent(i)=(i-1)/2"},{label:"Min Access",value:"O(1) to get minimum"}]},ex={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},extract:{label:"Extract Min",buttonText:"Extract Min"},peek:{label:"Peek Min",buttonText:"Peek"},build:{label:"Build from Array",placeholder:"e.g., 5,3,8,1,2",buttonText:"Build Heap"},clear:{buttonText:"Clear"}},nx={title:"Heap Operations",items:[{name:"Insert",description:"Add at end, bubble up (heapify up)",complexity:"O(log n)"},{name:"Extract Min",description:"Remove root, replace with last, bubble down",complexity:"O(log n)"},{name:"Peek",description:"Return root without removing",complexity:"O(1)"},{name:"Build Heap",description:"Heapify from array (bottom-up)",complexity:"O(n)"}]},tx={title:"Array Representation",items:[{formula:"Parent(i)",value:"(i - 1) / 2"},{formula:"Left Child(i)",value:"2*i + 1"},{formula:"Right Child(i)",value:"2*i + 2"}]},rx={title:"Time Complexity",operations:[{name:"Insert",average:"O(log n)",worst:"O(log n)",description:"Bubble up to root"},{name:"Extract Min",average:"O(log n)",worst:"O(log n)",description:"Bubble down"},{name:"Peek/Get Min",average:"O(1)",worst:"O(1)",description:"Always at root"},{name:"Build Heap",average:"O(n)",worst:"O(n)",description:"Bottom-up heapify"}],note:"Space complexity is O(n). Complete tree structure ensures height is always O(log n)."},sx={title:"Common Use Cases",items:["Priority Queues (process by priority)","Dijkstra's shortest path algorithm","Prim's minimum spanning tree","Huffman coding (compression)","Event-driven simulation","K smallest/largest elements"]},ax={title:"Min Heap vs Other Structures",items:[{vs:"Sorted Array",advantage:"O(log n) insert vs O(n)"},{vs:"BST",advantage:"O(1) get min vs O(log n)"},{vs:"Max Heap",advantage:"Fast min access vs fast max"}]},ix={size:"Size",height:"Height",min:"Min"},lx={emptyHeap:"Min Heap is empty. Insert some values!",insertSuccess:"Inserted {value}",extractSuccess:"Extracted minimum: {value}",peekSuccess:"Minimum element is {value}",buildSuccess:"Built heap from array",clearSuccess:"Heap cleared!",errorNoValue:"Please enter a value!",errorEmpty:"Heap is empty!",errorFull:"Heap is full!",errorInsert:"Error inserting value",errorExtract:"Error extracting minimum"},ox=[{type:"color",className:"root-color",label:"Root (Min)"},{type:"color",className:"node-color",label:"Internal Node"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Swapping"}],cx={concept:Xv,properties:Yv,operations:ex,heapOperations:nx,arrayRepresentation:tx,complexity:rx,useCases:sx,comparison:ax,infoLabels:ix,messages:lx,legend:ox},ux={title:"What is a Max Heap?",description:"A Max Heap is a complete binary tree where each parent node is greater than or equal to its children. The maximum element is always at the root, ideal for priority queues where largest = highest priority.",codeExample:`       [9]  <- Max at root
      /    \\
    [7]    [8]
   /  \\    /
 [3]  [5][6]

Array: [9, 7, 8, 3, 5, 6]
Parent always >= Children`,analogy:"Like a corporate hierarchy - the CEO (maximum) is at the top, and each manager has authority over their subordinates!"},dx={title:"Max Heap Properties",items:[{label:"Heap Property",value:"Parent >= Children"},{label:"Complete Tree",value:"Filled level by level"},{label:"Array Storage",value:"Parent(i)=(i-1)/2"},{label:"Max Access",value:"O(1) to get maximum"}]},hx={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},extract:{label:"Extract Max",buttonText:"Extract Max"},peek:{label:"Peek Max",buttonText:"Peek"},build:{label:"Build from Array",placeholder:"e.g., 5,3,8,1,2",buttonText:"Build Heap"},clear:{buttonText:"Clear"}},px={title:"Heap Operations",items:[{name:"Insert",description:"Add at end, bubble up (heapify up)",complexity:"O(log n)"},{name:"Extract Max",description:"Remove root, replace with last, bubble down",complexity:"O(log n)"},{name:"Peek",description:"Return root without removing",complexity:"O(1)"},{name:"Build Heap",description:"Heapify from array (bottom-up)",complexity:"O(n)"}]},fx={title:"Array Representation",items:[{formula:"Parent(i)",value:"(i - 1) / 2"},{formula:"Left Child(i)",value:"2*i + 1"},{formula:"Right Child(i)",value:"2*i + 2"}]},mx={title:"Time Complexity",operations:[{name:"Insert",average:"O(log n)",worst:"O(log n)",description:"Bubble up to root"},{name:"Extract Max",average:"O(log n)",worst:"O(log n)",description:"Bubble down"},{name:"Peek/Get Max",average:"O(1)",worst:"O(1)",description:"Always at root"},{name:"Build Heap",average:"O(n)",worst:"O(n)",description:"Bottom-up heapify"}],note:"Space complexity is O(n). Complete tree structure ensures height is always O(log n)."},yx={title:"Common Use Cases",items:["Priority Queues (largest = highest priority)","Heap Sort algorithm","Job scheduling (highest priority first)","Finding K largest elements","Median maintenance (with min heap)","Stock trading (highest bid)"]},gx={title:"Max Heap vs Other Structures",items:[{vs:"Sorted Array",advantage:"O(log n) insert vs O(n)"},{vs:"BST",advantage:"O(1) get max vs O(log n)"},{vs:"Min Heap",advantage:"Fast max access vs fast min"}]},vx={size:"Size",height:"Height",max:"Max"},xx={emptyHeap:"Max Heap is empty. Insert some values!",insertSuccess:"Inserted {value}",extractSuccess:"Extracted maximum: {value}",peekSuccess:"Maximum element is {value}",buildSuccess:"Built heap from array",clearSuccess:"Heap cleared!",errorNoValue:"Please enter a value!",errorEmpty:"Heap is empty!",errorFull:"Heap is full!",errorInsert:"Error inserting value",errorExtract:"Error extracting maximum"},kx=[{type:"color",className:"root-color",label:"Root (Max)"},{type:"color",className:"node-color",label:"Internal Node"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Swapping"}],Nx={concept:ux,properties:dx,operations:hx,heapOperations:px,arrayRepresentation:fx,complexity:mx,useCases:yx,comparison:gx,infoLabels:vx,messages:xx,legend:kx},jx={stack:mg,queue:bg,linkedlist:Ig,binarytree:Kg,hashtable:sv,hashtableChaining:U,hashtableQuadratic:mv,bst:Cv,avl:Dv,splay:Jv,minheap:cx,maxheap:Nx};function Fr({dataStructure:e}){const n=jx[e];return n?r.jsxs("div",{className:"concepts-panel",children:[n.concept&&r.jsxs("div",{className:"concept-box",children:[r.jsxs("div",{className:"concept-header",children:[r.jsx(kn,{className:"icon-sm"}),r.jsx("span",{children:n.concept.title})]}),r.jsxs("div",{className:"concept-content",children:[r.jsx("p",{children:n.concept.description}),n.concept.codeExample&&r.jsx("pre",{className:"concept-code-example",children:r.jsx("code",{children:n.concept.codeExample})}),n.concept.analogy&&r.jsxs("div",{className:"concept-analogy",children:[r.jsx(on,{}),r.jsx("span",{children:n.concept.analogy})]})]})]}),n.properties&&r.jsxs("div",{className:"concept-box",children:[r.jsxs("div",{className:"concept-header",children:[r.jsx(Rn,{className:"icon-sm"}),r.jsx("span",{children:n.properties.title})]}),r.jsx("div",{className:"concept-content",children:r.jsx("div",{className:"properties-grid",children:n.properties.items.map((t,s)=>r.jsxs("div",{className:"property-item",children:[r.jsx("span",{className:"property-label",children:t.label}),r.jsx("span",{className:"property-value",children:t.value})]},s))})})]}),n.complexity&&r.jsxs("div",{className:"concept-box",children:[r.jsxs("div",{className:"concept-header",children:[r.jsx(bm,{className:"icon-sm"}),r.jsx("span",{children:n.complexity.title})]}),r.jsxs("div",{className:"concept-content",children:[r.jsx("div",{className:"complexity-table",children:n.complexity.operations.map((t,s)=>r.jsxs("div",{className:"complexity-row",children:[r.jsx("span",{className:"complexity-name",children:t.name}),t.time&&r.jsx("code",{className:"complexity-time",children:t.time}),t.average&&r.jsxs(r.Fragment,{children:[r.jsx("code",{className:"complexity-avg",children:t.average}),t.worst&&r.jsx("code",{className:"complexity-worst",children:t.worst})]}),t.description&&r.jsx("span",{className:"complexity-desc",children:t.description})]},s))}),n.complexity.note&&r.jsx("p",{className:"complexity-note",children:n.complexity.note})]})]}),n.useCases&&r.jsxs("div",{className:"concept-box",children:[r.jsxs("div",{className:"concept-header",children:[r.jsx(_d,{className:"icon-sm"}),r.jsx("span",{children:n.useCases.title})]}),r.jsx("div",{className:"concept-content",children:r.jsx("ul",{className:"use-cases-list",children:n.useCases.items.map((t,s)=>r.jsxs("li",{children:[r.jsx(jm,{className:"icon-xs"}),r.jsx("span",{children:t})]},s))})})]}),n.traversals&&r.jsxs("div",{className:"concept-box",children:[r.jsxs("div",{className:"concept-header",children:[r.jsx(Rn,{className:"icon-sm"}),r.jsx("span",{children:n.traversals.title})]}),r.jsx("div",{className:"concept-content",children:r.jsx("div",{className:"traversals-list",children:n.traversals.items.map((t,s)=>r.jsxs("div",{className:"traversal-item",children:[r.jsx("span",{className:"traversal-name",children:t.name}),r.jsx("span",{className:"traversal-order",children:t.order}),r.jsx("span",{className:"traversal-use",children:t.use})]},s))})})]}),n.deleteCases&&r.jsxs("div",{className:"concept-box",children:[r.jsxs("div",{className:"concept-header",children:[r.jsx(Rn,{className:"icon-sm"}),r.jsx("span",{children:n.deleteCases.title})]}),r.jsx("div",{className:"concept-content",children:r.jsx("div",{className:"delete-cases-grid",children:n.deleteCases.items.map((t,s)=>r.jsxs("div",{className:"delete-case-item",children:[r.jsx("span",{className:"case-number",children:s+1}),r.jsxs("div",{children:[r.jsx("strong",{children:t.name}),r.jsx("p",{children:t.description})]})]},s))})})]}),n.comparison&&r.jsxs("div",{className:"concept-box",children:[r.jsxs("div",{className:"concept-header",children:[r.jsx(Rn,{className:"icon-sm"}),r.jsx("span",{children:n.comparison.title})]}),r.jsx("div",{className:"concept-content",children:r.jsx("div",{className:"comparison-list",children:n.comparison.items.map((t,s)=>r.jsxs("div",{className:"comparison-item",children:[r.jsxs("span",{className:"comparison-vs",children:["vs ",t.vs]}),r.jsx("span",{className:"comparison-advantage",children:t.advantage})]},s))})})]})]}):r.jsx("div",{className:"concepts-panel",children:r.jsx("p",{children:"Concepts not available for this data structure."})})}const wt=7,wx={inorder:{name:"Inorder Traversal",order:"Left -> Root -> Right",description:"Returns elements in SORTED order for BST. This is the key property of BST!",useCase:["Get sorted elements","Validate BST","Range queries"],complexity:{time:"O(n)",space:"O(h)"}},preorder:{name:"Preorder Traversal",order:"Root -> Left -> Right",description:"Process root first. Useful for copying/serializing the BST structure.",useCase:["Copy tree structure","Serialize BST","Prefix expressions"],complexity:{time:"O(n)",space:"O(h)"}},postorder:{name:"Postorder Traversal",order:"Left -> Right -> Root",description:"Process children before root. Essential for safely deleting the tree.",useCase:["Delete tree safely","Calculate subtree sizes","Postfix expressions"],complexity:{time:"O(n)",space:"O(h)"}},levelorder:{name:"Level Order Traversal",order:"Level by Level (BFS)",description:"Visit nodes level by level using a queue. Shows tree structure clearly.",useCase:["Level-wise printing","Find width","Serialize for reconstruction"],complexity:{time:"O(n)",space:"O(w)"}}},zi=(e,n=0)=>e?Math.max(zi(e.left,n+1),zi(e.right,n+1)):n-1,Sx=(e,n)=>{const t=[];let s=e;for(;s&&(t.push(s.value),s.value!==n);)n<s.value?s=s.left:s=s.right;return t};function bx({insertValue:e,deleteValue:n,searchValue:t,size:s,height:a,message:i,tree:l,isAnimating:o,visitedNodes:c,searchPath:u,searchResult:d,onInsertValueChange:h,onDeleteValueChange:m,onSearchValueChange:N,onInsert:k,onDelete:x,onSearch:v,onTraversal:p,onClear:f,onResetTraversal:y}){const w=(j,_)=>{const S=j.target.value;(S===""||S==="-"||/^-?\d*\.?\d*$/.test(S))&&_(S)};return r.jsxs("div",{className:"control-panel",children:[r.jsx("h2",{children:"Binary Search Tree"}),r.jsxs("div",{className:"operation-group",children:[r.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{type:"number",id:"insertValue",value:e,onChange:j=>w(j,h),onKeyDown:j=>j.key==="Enter"&&k(),placeholder:"Enter a number",disabled:o}),r.jsx("button",{onClick:k,className:"btn btn-insert",disabled:o,children:"Insert"})]})]}),r.jsxs("div",{className:"operation-group",children:[r.jsx("label",{htmlFor:"searchValue",children:"Search Value"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{type:"number",id:"searchValue",value:t,onChange:j=>w(j,N),onKeyDown:j=>j.key==="Enter"&&v(),placeholder:"Enter a number",disabled:o}),r.jsxs("button",{onClick:v,className:"btn btn-search",disabled:o||!l,children:[r.jsx(Ml,{size:16})," Search"]})]}),u.length>0&&r.jsxs("div",{className:"search-path-display",children:[r.jsx("span",{className:"search-path-label",children:"Path:"}),r.jsx("div",{className:"search-path-nodes",children:u.map((j,_)=>r.jsxs(At.Fragment,{children:[r.jsx("span",{className:`search-path-node ${_===u.length-1?d?"found":"not-found":""}`,children:j}),_<u.length-1&&r.jsx(pe,{size:14,className:"search-path-arrow"})]},_))})]})]}),r.jsxs("div",{className:"operation-group",children:[r.jsx("label",{htmlFor:"deleteValue",children:"Delete Value"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{type:"number",id:"deleteValue",value:n,onChange:j=>w(j,m),onKeyDown:j=>j.key==="Enter"&&x(),placeholder:"Enter a number",disabled:o}),r.jsx("button",{onClick:x,className:"btn btn-delete",disabled:o,children:"Delete"})]})]}),r.jsxs("div",{className:"operation-group",children:[r.jsx("label",{children:"Traversals"}),r.jsx("div",{className:"btn-group",children:["inorder","preorder","postorder","levelorder"].map(j=>r.jsxs("button",{onClick:()=>p(j),className:`btn btn-traversal ${j==="inorder"?"btn-traversal-primary":""}`,disabled:o||!l,title:j==="inorder"?"Returns sorted order!":"",children:[j==="levelorder"?"Level Order":j.charAt(0).toUpperCase()+j.slice(1),j==="inorder"&&r.jsx("span",{className:"sorted-badge",children:"Sorted!"})]},j))}),c.length>0&&!o&&r.jsx("button",{onClick:y,className:"btn btn-secondary",style:{marginTop:"0.5rem",width:"100%"},children:"Reset Colors"})]}),r.jsxs("div",{className:"traversal-legend",children:[r.jsxs("div",{className:"legend-item",children:[r.jsx("span",{className:"legend-dot legend-dot--default"}),r.jsx("span",{children:"Not visited"})]}),r.jsxs("div",{className:"legend-item",children:[r.jsx("span",{className:"legend-dot legend-dot--visiting"}),r.jsx("span",{children:"Current"})]}),r.jsxs("div",{className:"legend-item",children:[r.jsx("span",{className:"legend-dot legend-dot--visited"}),r.jsx("span",{children:"Visited"})]}),r.jsxs("div",{className:"legend-item",children:[r.jsx("span",{className:"legend-dot legend-dot--search"}),r.jsx("span",{children:"Search path"})]})]}),r.jsxs("div",{className:"info-panel",children:[r.jsxs("div",{className:"info-item",children:[r.jsx("span",{className:"info-label",children:"Nodes:"}),r.jsx("span",{className:"info-value",children:s})]}),r.jsxs("div",{className:"info-item",children:[r.jsx("span",{className:"info-label",children:"Height:"}),r.jsx("span",{className:"info-value",children:a})]}),r.jsxs("div",{className:"info-item",children:[r.jsx("span",{className:"info-label",children:"Max:"}),r.jsx("span",{className:"info-value",children:wt})]})]}),s>=wt*.8&&s<wt&&r.jsxs("div",{className:"warning-box",children:[r.jsx(vn,{size:18}),r.jsxs("div",{children:[r.jsx("strong",{children:"Tree filling up!"})," ",s,"/",wt," nodes."]})]}),r.jsx("div",{className:"operation-group",children:r.jsx("button",{onClick:f,className:"btn btn-clear",disabled:o,children:"Clear Tree"})}),i&&r.jsx("div",{className:`message message-${i.includes("Error")||i.includes("error")||i.includes("not found")?"error":/success|complete|Inserted|Deleted|cleared|Found/i.test(i)?"success":i.includes("full")?"warning":"info"}`,children:i})]})}function Tx({tree:e,currentNode:n,visitedNodes:t,searchPath:s,searchResult:a}){const i=d=>{const h=n===d,m=t.includes(d),N=s.includes(d),k=s.length>0&&s[s.length-1]===d;let x="#6366f1",v="none";return h?(x="#f59e0b",v="drop-shadow(0 0 12px #f59e0b) drop-shadow(0 0 20px #f59e0b)"):k?(x=a?"#10b981":"#ef4444",v=a?"drop-shadow(0 0 12px #10b981)":"drop-shadow(0 0 12px #ef4444)"):N?(x="#3b82f6",v="drop-shadow(0 0 8px #3b82f6)"):m&&(x="#10b981",v="drop-shadow(0 0 6px #10b981)"),{color:x,glow:v,radius:h||k?30:25,stroke:h||k?3:2,fontSize:h||k?16:14,fontWeight:h||k?"bold":"normal"}},l=(d,h,m,N,k)=>{if(!d)return[];const x=Math.pow(2,k-N)*50,v=i(d.value),p=[];if(d.left){const f=s.includes(d.value)&&s.includes(d.left.value);p.push(r.jsx("line",{x1:h,y1:m,x2:h-x,y2:m+100,stroke:f?"#3b82f6":"rgba(255,255,255,0.3)",strokeWidth:f?3:2},`l-${d.value}-l`)),p.push(...l(d.left,h-x,m+100,N+1,k))}if(d.right){const f=s.includes(d.value)&&s.includes(d.right.value);p.push(r.jsx("line",{x1:h,y1:m,x2:h+x,y2:m+100,stroke:f?"#3b82f6":"rgba(255,255,255,0.3)",strokeWidth:f?3:2},`l-${d.value}-r`)),p.push(...l(d.right,h+x,m+100,N+1,k))}return p.push(r.jsxs("g",{style:{filter:v.glow,transition:"all 0.3s ease"},children:[r.jsx("circle",{cx:h,cy:m,r:v.radius,fill:v.color,stroke:"white",strokeWidth:v.stroke,style:{transition:"all 0.3s ease"}}),r.jsx("text",{x:h,y:m,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:v.fontSize,fontWeight:v.fontWeight,children:d.value})]},`n-${d.value}-${h}`)),p};if(!e)return r.jsxs("div",{className:"tree-empty",children:[r.jsx("p",{children:"BST is empty. Insert some values!"}),r.jsx("p",{className:"tree-empty-hint",children:"Try: 50, 30, 70, 20, 40, 60, 80"})]});const o=zi(e),c=(o+1)*100+50,u=Math.max(800,Math.pow(2,Math.max(o,1))*80);return r.jsx("svg",{width:u,height:c,className:"tree-svg",children:l(e,u/2,50,0,o)})}function Cx({traversalType:e,traversalResult:n,isAnimating:t,traversalComplete:s}){if(!e||n.length===0&&!t)return null;const a=wx[e];return r.jsxs("div",{className:"traversal-output-panel",children:[r.jsxs("div",{style:{marginBottom:"1rem"},children:[r.jsxs("h3",{className:"traversal-title",children:[a==null?void 0:a.name,e==="inorder"&&r.jsx("span",{className:"sorted-indicator",children:"Returns Sorted Order!"}),t&&r.jsx("span",{className:"traversal-badge traversal-badge--running",children:"Running..."}),s&&r.jsx("span",{className:"traversal-badge traversal-badge--complete",children:"Complete"})]}),r.jsxs("p",{className:"traversal-order",children:[r.jsx("strong",{children:"Order:"})," ",a==null?void 0:a.order]}),r.jsx("p",{className:"traversal-description",children:a==null?void 0:a.description})]}),r.jsxs("div",{className:"traversal-output-box",children:[r.jsx("div",{className:"traversal-output-label",children:"Output Sequence:"}),r.jsx("div",{className:"traversal-sequence-container",children:n.length===0&&t?r.jsx("span",{style:{color:"var(--text-muted)",fontStyle:"italic"},children:"Traversing..."}):n.map((i,l)=>r.jsx("span",{className:`traversal-node ${l===n.length-1&&!s?"traversal-node--current":"traversal-node--complete"}`,children:i},l))})]}),s&&n.length>0&&r.jsxs("div",{className:"traversal-array-section",children:[r.jsx("div",{className:"traversal-array-label",children:"Array Output:"}),r.jsxs("code",{className:"traversal-array-output",children:["[",n.join(", "),"]"]}),e==="inorder"&&r.jsx("p",{className:"traversal-sorted-note",children:"Notice: The output is sorted! This is the BST property."}),r.jsxs("p",{className:"traversal-use-case",children:["Use case: ",a==null?void 0:a.useCase.join(" | ")]}),r.jsxs("div",{className:"traversal-complexity",children:[r.jsx("strong",{children:"Time:"})," ",r.jsx("code",{className:"complexity-value",children:a==null?void 0:a.complexity.time}),r.jsx("br",{}),r.jsx("strong",{children:"Space:"})," ",r.jsx("code",{className:"complexity-value",children:a==null?void 0:a.complexity.space})]})]})]})}function Lx(){const[e,n]=g.useState(null),[t,s]=g.useState(0),[a,i]=g.useState(-1),[l,o]=g.useState(""),[c,u]=g.useState(""),[d,h]=g.useState(""),[m,N]=g.useState(""),[k,x]=g.useState([]),[v,p]=g.useState(null),[f,y]=g.useState([]),[w,j]=g.useState(!1),[_,S]=g.useState(null),[M,A]=g.useState([]),[C,$]=g.useState(null),[J,z]=g.useState(!1);g.useEffect(()=>{D()},[]);const D=async()=>{try{const K=await(await fetch("/api/bst")).json();n(K.tree),s(K.size||0),i(K.height!==void 0?K.height:-1)}catch(I){console.error("Error loading BST:",I)}},T=I=>{N(I),setTimeout(()=>N(""),3e3)},R=()=>{x([]),p(null)},O=async()=>{if(!l.trim()){T("Please enter a number!");return}const I=Number(l);if(isNaN(I)){T("Please enter a valid number!");return}if(t>=wt){T(`Tree is full! Maximum size is ${wt} nodes.`);return}R(),V();try{const B=await(await fetch("/api/bst/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:I})})).json();if(B.error){T(B.error);return}n(B.tree),s(B.size||0),i(B.height!==void 0?B.height:-1),T(`Inserted ${I}`),o("")}catch{T("Error inserting node")}},L=async()=>{if(!c.trim()){T("Please enter a number!");return}const I=Number(c);if(isNaN(I)){T("Please enter a valid number!");return}R(),V();try{const B=await(await fetch("/api/bst/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:I})})).json();if(B.error){T(B.error);return}n(B.tree),s(B.size||0),i(B.height!==void 0?B.height:-1),T(`Deleted ${I}`),u("")}catch{T("Error deleting node")}},b=async()=>{if(!d.trim()){T("Please enter a number!");return}const I=Number(d);if(isNaN(I)){T("Please enter a valid number!");return}if(!e){T("Tree is empty!");return}V(),j(!0);const K=Sx(e,I);for(let B=0;B<K.length;B++)x(K.slice(0,B+1)),await new Promise(W=>setTimeout(W,500));try{const W=await(await fetch(`/api/bst/search?value=${I}`)).json();p(W.found),W.found?T(`Found ${I}!`):T(`${I} not found in BST`)}catch{T("Error searching")}j(!1),h("")},E=async()=>{try{await fetch("/api/bst/clear",{method:"POST"}),n(null),s(0),i(-1),V(),R(),T("BST cleared!")}catch{T("Error clearing tree")}},H=async I=>{if(!e){T("Tree is empty! Insert some nodes first.");return}R(),j(!0),y([]),S(null),A([]),$(I),z(!1);try{const W=(await(await fetch(`/api/bst/${I}`)).json()).traversal||[];if(W.length===0){T("Tree is empty!"),j(!1);return}for(let We=0;We<W.length;We++)S(W[We]),await new Promise(we=>setTimeout(we,600)),A(we=>[...we,W[We]]),y(we=>[...we,W[We]]),await new Promise(we=>setTimeout(we,200));S(null),z(!0),j(!1);const Nn=I.charAt(0).toUpperCase()+I.slice(1);T(`${Nn} traversal complete!${I==="inorder"?" (Sorted!)":""}`)}catch(K){console.error("Traversal error:",K),T("Error performing traversal"),j(!1)}},V=()=>{y([]),S(null),A([]),$(null),z(!1)};return r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"intro-layout",children:[r.jsx("div",{className:"intro-left",children:r.jsx(Fr,{dataStructure:"bst"})}),r.jsx(qe,{context:"Binary Search Tree (BST) data structure, search, insert, delete operations, and traversals"})]}),r.jsxs("div",{className:"visualizer-layout",children:[r.jsx(bx,{insertValue:l,deleteValue:c,searchValue:d,size:t,height:a,message:m,tree:e,isAnimating:w,visitedNodes:M,searchPath:k,searchResult:v,onInsertValueChange:o,onDeleteValueChange:u,onSearchValueChange:h,onInsert:O,onDelete:L,onSearch:b,onTraversal:H,onClear:E,onResetTraversal:()=>{V(),R()}}),r.jsxs("div",{className:"visual-panel",children:[r.jsx("h2",{children:"BST Visualization"}),r.jsxs("p",{className:"bst-property-reminder",children:["Remember: ",r.jsxs("code",{children:["Left ","<"," Parent ","<"," Right"]})]}),r.jsx("div",{className:"tree-container",children:r.jsx(Tx,{tree:e,currentNode:_,visitedNodes:M,searchPath:k,searchResult:v})}),r.jsx(Cx,{traversalType:C,traversalResult:f,isAnimating:w,traversalComplete:J})]})]}),r.jsx(Ke,{dataStructure:"bst"})]})}const St=7,Ex={inorder:{name:"Inorder Traversal",order:"Left -> Root -> Right",description:"Returns elements in SORTED order.",useCase:["Get sorted elements","Validate BST property"],complexity:{time:"O(n)",space:"O(h)"}},preorder:{name:"Preorder Traversal",order:"Root -> Left -> Right",description:"Process root first. Useful for copying tree structure.",useCase:["Copy tree structure","Serialize AVL"],complexity:{time:"O(n)",space:"O(h)"}},postorder:{name:"Postorder Traversal",order:"Left -> Right -> Root",description:"Process children before root.",useCase:["Delete tree safely","Calculate subtree info"],complexity:{time:"O(n)",space:"O(h)"}},levelorder:{name:"Level Order Traversal",order:"Level by Level (BFS)",description:"Visit nodes level by level using a queue.",useCase:["Level-wise printing","Find width"],complexity:{time:"O(n)",space:"O(w)"}}},Ii=(e,n=0)=>e?Math.max(Ii(e.left,n+1),Ii(e.right,n+1)):n-1,Rx=(e,n)=>{const t=[];let s=e;for(;s&&(t.push(s.value),s.value!==n);)n<s.value?s=s.left:s=s.right;return t};function Ox({insertValue:e,deleteValue:n,searchValue:t,size:s,height:a,message:i,tree:l,isAnimating:o,visitedNodes:c,searchPath:u,searchResult:d,onInsertValueChange:h,onDeleteValueChange:m,onSearchValueChange:N,onInsert:k,onDelete:x,onSearch:v,onTraversal:p,onClear:f,onResetTraversal:y}){const w=(j,_)=>{const S=j.target.value;(S===""||S==="-"||/^-?\d*\.?\d*$/.test(S))&&_(S)};return r.jsxs("div",{className:"control-panel",children:[r.jsx("h2",{children:"AVL Tree"}),r.jsxs("div",{className:"operation-group",children:[r.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{type:"number",id:"insertValue",value:e,onChange:j=>w(j,h),onKeyDown:j=>j.key==="Enter"&&k(),placeholder:"Enter a number",disabled:o}),r.jsx("button",{onClick:k,className:"btn btn-insert",disabled:o,children:"Insert"})]})]}),r.jsxs("div",{className:"operation-group",children:[r.jsx("label",{htmlFor:"searchValue",children:"Search Value"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{type:"number",id:"searchValue",value:t,onChange:j=>w(j,N),onKeyDown:j=>j.key==="Enter"&&v(),placeholder:"Enter a number",disabled:o}),r.jsxs("button",{onClick:v,className:"btn btn-search",disabled:o||!l,children:[r.jsx(Ml,{size:16})," Search"]})]}),u.length>0&&r.jsxs("div",{className:"search-path-display",children:[r.jsx("span",{className:"search-path-label",children:"Path:"}),r.jsx("div",{className:"search-path-nodes",children:u.map((j,_)=>r.jsxs(At.Fragment,{children:[r.jsx("span",{className:`search-path-node ${_===u.length-1?d?"found":"not-found":""}`,children:j}),_<u.length-1&&r.jsx(pe,{size:14,className:"search-path-arrow"})]},_))})]})]}),r.jsxs("div",{className:"operation-group",children:[r.jsx("label",{htmlFor:"deleteValue",children:"Delete Value"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{type:"number",id:"deleteValue",value:n,onChange:j=>w(j,m),onKeyDown:j=>j.key==="Enter"&&x(),placeholder:"Enter a number",disabled:o}),r.jsx("button",{onClick:x,className:"btn btn-delete",disabled:o,children:"Delete"})]})]}),r.jsxs("div",{className:"operation-group",children:[r.jsx("label",{children:"Traversals"}),r.jsx("div",{className:"btn-group",children:["inorder","preorder","postorder","levelorder"].map(j=>r.jsx("button",{onClick:()=>p(j),className:"btn btn-traversal",disabled:o||!l,children:j==="levelorder"?"Level Order":j.charAt(0).toUpperCase()+j.slice(1)},j))}),c.length>0&&!o&&r.jsx("button",{onClick:y,className:"btn btn-secondary",style:{marginTop:"0.5rem",width:"100%"},children:"Reset Colors"})]}),r.jsxs("div",{className:"traversal-legend",children:[r.jsxs("div",{className:"legend-item",children:[r.jsx("span",{className:"legend-dot legend-dot--default"}),r.jsx("span",{children:"Not visited"})]}),r.jsxs("div",{className:"legend-item",children:[r.jsx("span",{className:"legend-dot legend-dot--visiting"}),r.jsx("span",{children:"Current"})]}),r.jsxs("div",{className:"legend-item",children:[r.jsx("span",{className:"legend-dot legend-dot--visited"}),r.jsx("span",{children:"Visited"})]}),r.jsxs("div",{className:"legend-item",children:[r.jsx("span",{className:"legend-dot legend-dot--search"}),r.jsx("span",{children:"Search path"})]})]}),r.jsxs("div",{className:"info-panel",children:[r.jsxs("div",{className:"info-item",children:[r.jsx("span",{className:"info-label",children:"Nodes:"}),r.jsx("span",{className:"info-value",children:s})]}),r.jsxs("div",{className:"info-item",children:[r.jsx("span",{className:"info-label",children:"Height:"}),r.jsx("span",{className:"info-value",children:a})]}),r.jsxs("div",{className:"info-item",children:[r.jsx("span",{className:"info-label",children:"Max:"}),r.jsx("span",{className:"info-value",children:St})]})]}),s>=St*.8&&s<St&&r.jsxs("div",{className:"warning-box",children:[r.jsx(vn,{size:18}),r.jsxs("div",{children:[r.jsx("strong",{children:"Tree filling up!"})," ",s,"/",St," nodes."]})]}),r.jsx("div",{className:"operation-group",children:r.jsx("button",{onClick:f,className:"btn btn-clear",disabled:o,children:"Clear Tree"})}),i&&r.jsx("div",{className:`message message-${i.includes("Error")||i.includes("error")||i.includes("not found")?"error":/success|complete|Inserted|Deleted|cleared|Found|rebalanced/i.test(i)?"success":i.includes("full")?"warning":"info"}`,children:i})]})}function _x({tree:e,currentNode:n,visitedNodes:t,searchPath:s,searchResult:a}){const i=d=>{const h=n===d,m=t.includes(d),N=s.includes(d),k=s.length>0&&s[s.length-1]===d;let x="#8b5cf6",v="none";return h?(x="#f59e0b",v="drop-shadow(0 0 12px #f59e0b) drop-shadow(0 0 20px #f59e0b)"):k?(x=a?"#10b981":"#ef4444",v=a?"drop-shadow(0 0 12px #10b981)":"drop-shadow(0 0 12px #ef4444)"):N?(x="#3b82f6",v="drop-shadow(0 0 8px #3b82f6)"):m&&(x="#10b981",v="drop-shadow(0 0 6px #10b981)"),{color:x,glow:v,radius:h||k?30:25,stroke:h||k?3:2,fontSize:h||k?16:14,fontWeight:h||k?"bold":"normal"}},l=(d,h,m,N,k)=>{if(!d)return[];const x=Math.pow(2,k-N)*50,v=i(d.value),p=[];if(d.left){const f=s.includes(d.value)&&s.includes(d.left.value);p.push(r.jsx("line",{x1:h,y1:m,x2:h-x,y2:m+100,stroke:f?"#3b82f6":"rgba(255,255,255,0.3)",strokeWidth:f?3:2},`l-${d.value}-l`)),p.push(...l(d.left,h-x,m+100,N+1,k))}if(d.right){const f=s.includes(d.value)&&s.includes(d.right.value);p.push(r.jsx("line",{x1:h,y1:m,x2:h+x,y2:m+100,stroke:f?"#3b82f6":"rgba(255,255,255,0.3)",strokeWidth:f?3:2},`l-${d.value}-r`)),p.push(...l(d.right,h+x,m+100,N+1,k))}return p.push(r.jsxs("g",{style:{filter:v.glow,transition:"all 0.3s ease"},children:[r.jsx("circle",{cx:h,cy:m,r:v.radius,fill:v.color,stroke:"white",strokeWidth:v.stroke,style:{transition:"all 0.3s ease"}}),r.jsx("text",{x:h,y:m,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:v.fontSize,fontWeight:v.fontWeight,children:d.value}),d.balance!==void 0&&r.jsxs("g",{children:[r.jsx("circle",{cx:h+20,cy:m-20,r:10,fill:Math.abs(d.balance)<=1?"#10b981":"#ef4444"}),r.jsx("text",{x:h+20,y:m-20,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:10,fontWeight:"bold",children:d.balance})]})]},`n-${d.value}-${h}`)),p};if(!e)return r.jsxs("div",{className:"tree-empty",children:[r.jsx("p",{children:"AVL Tree is empty. Insert some values!"}),r.jsx("p",{className:"tree-empty-hint",children:"Try: 30, 20, 40, 10 (watch it balance!)"})]});const o=Ii(e),c=(o+1)*100+50,u=Math.max(800,Math.pow(2,Math.max(o,1))*80);return r.jsx("svg",{width:u,height:c,className:"tree-svg",children:l(e,u/2,50,0,o)})}function Px({traversalType:e,traversalResult:n,isAnimating:t,traversalComplete:s}){if(!e||n.length===0&&!t)return null;const a=Ex[e];return r.jsxs("div",{className:"traversal-output-panel",children:[r.jsxs("div",{style:{marginBottom:"1rem"},children:[r.jsxs("h3",{className:"traversal-title",children:[a==null?void 0:a.name,t&&r.jsx("span",{className:"traversal-badge traversal-badge--running",children:"Running..."}),s&&r.jsx("span",{className:"traversal-badge traversal-badge--complete",children:"Complete"})]}),r.jsxs("p",{className:"traversal-order",children:[r.jsx("strong",{children:"Order:"})," ",a==null?void 0:a.order]}),r.jsx("p",{className:"traversal-description",children:a==null?void 0:a.description})]}),r.jsxs("div",{className:"traversal-output-box",children:[r.jsx("div",{className:"traversal-output-label",children:"Output Sequence:"}),r.jsx("div",{className:"traversal-sequence-container",children:n.length===0&&t?r.jsx("span",{style:{color:"var(--text-muted)",fontStyle:"italic"},children:"Traversing..."}):n.map((i,l)=>r.jsx("span",{className:`traversal-node ${l===n.length-1&&!s?"traversal-node--current":"traversal-node--complete"}`,children:i},l))})]}),s&&n.length>0&&r.jsxs("div",{className:"traversal-array-section",children:[r.jsx("div",{className:"traversal-array-label",children:"Array Output:"}),r.jsxs("code",{className:"traversal-array-output",children:["[",n.join(", "),"]"]}),r.jsxs("p",{className:"traversal-use-case",children:["Use case: ",a==null?void 0:a.useCase.join(" | ")]}),r.jsxs("div",{className:"traversal-complexity",children:[r.jsx("strong",{children:"Time:"})," ",r.jsx("code",{className:"complexity-value",children:a==null?void 0:a.complexity.time}),r.jsx("br",{}),r.jsx("strong",{children:"Space:"})," ",r.jsx("code",{className:"complexity-value",children:a==null?void 0:a.complexity.space})]})]})]})}function zx(){const[e,n]=g.useState(null),[t,s]=g.useState(0),[a,i]=g.useState(-1),[l,o]=g.useState(""),[c,u]=g.useState(""),[d,h]=g.useState(""),[m,N]=g.useState(""),[k,x]=g.useState([]),[v,p]=g.useState(null),[f,y]=g.useState([]),[w,j]=g.useState(!1),[_,S]=g.useState(null),[M,A]=g.useState([]),[C,$]=g.useState(null),[J,z]=g.useState(!1);g.useEffect(()=>{D()},[]);const D=async()=>{try{const K=await(await fetch("/api/avl")).json();n(K.tree),s(K.size||0),i(K.height!==void 0?K.height:-1)}catch(I){console.error("Error loading AVL:",I)}},T=I=>{N(I),setTimeout(()=>N(""),3e3)},R=()=>{x([]),p(null)},O=async()=>{if(!l.trim()){T("Please enter a number!");return}const I=Number(l);if(isNaN(I)){T("Please enter a valid number!");return}if(t>=St){T(`Tree is full! Maximum size is ${St} nodes.`);return}R(),V();try{const B=await(await fetch("/api/avl/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:I})})).json();if(B.error){T(B.error);return}n(B.tree),s(B.size||0),i(B.height!==void 0?B.height:-1),T(`Inserted ${I} (tree rebalanced)`),o("")}catch{T("Error inserting node")}},L=async()=>{if(!c.trim()){T("Please enter a number!");return}const I=Number(c);if(isNaN(I)){T("Please enter a valid number!");return}R(),V();try{const B=await(await fetch("/api/avl/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:I})})).json();if(B.error){T(B.error);return}n(B.tree),s(B.size||0),i(B.height!==void 0?B.height:-1),T(`Deleted ${I} (tree rebalanced)`),u("")}catch{T("Error deleting node")}},b=async()=>{if(!d.trim()){T("Please enter a number!");return}const I=Number(d);if(isNaN(I)){T("Please enter a valid number!");return}if(!e){T("Tree is empty!");return}V(),j(!0);const K=Rx(e,I);for(let B=0;B<K.length;B++)x(K.slice(0,B+1)),await new Promise(W=>setTimeout(W,500));try{const W=await(await fetch(`/api/avl/search?value=${I}`)).json();p(W.found),W.found?T(`Found ${I}!`):T(`${I} not found in AVL Tree`)}catch{T("Error searching")}j(!1),h("")},E=async()=>{try{await fetch("/api/avl/clear",{method:"POST"}),n(null),s(0),i(-1),V(),R(),T("AVL Tree cleared!")}catch{T("Error clearing tree")}},H=async I=>{if(!e){T("Tree is empty! Insert some nodes first.");return}R(),j(!0),y([]),S(null),A([]),$(I),z(!1);try{const W=(await(await fetch(`/api/avl/${I}`)).json()).traversal||[];if(W.length===0){T("Tree is empty!"),j(!1);return}for(let We=0;We<W.length;We++)S(W[We]),await new Promise(we=>setTimeout(we,600)),A(we=>[...we,W[We]]),y(we=>[...we,W[We]]),await new Promise(we=>setTimeout(we,200));S(null),z(!0),j(!1);const Nn=I.charAt(0).toUpperCase()+I.slice(1);T(`${Nn} traversal complete!`)}catch(K){console.error("Traversal error:",K),T("Error performing traversal"),j(!1)}},V=()=>{y([]),S(null),A([]),$(null),z(!1)};return r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"intro-layout",children:[r.jsx("div",{className:"intro-left",children:r.jsx(Fr,{dataStructure:"avl"})}),r.jsx(qe,{context:"AVL Tree data structure, self-balancing BST, rotations, balance factors, and O(log n) guaranteed operations"})]}),r.jsxs("div",{className:"visualizer-layout",children:[r.jsx(Ox,{insertValue:l,deleteValue:c,searchValue:d,size:t,height:a,message:m,tree:e,isAnimating:w,visitedNodes:M,searchPath:k,searchResult:v,onInsertValueChange:o,onDeleteValueChange:u,onSearchValueChange:h,onInsert:O,onDelete:L,onSearch:b,onTraversal:H,onClear:E,onResetTraversal:()=>{V(),R()}}),r.jsxs("div",{className:"visual-panel",children:[r.jsx("h2",{children:"AVL Tree Visualization"}),r.jsxs("p",{className:"bst-property-reminder",children:["Self-balancing: ",r.jsx("code",{children:"|Balance Factor| <= 1"})," for all nodes"]}),r.jsx("div",{className:"tree-container",children:r.jsx(_x,{tree:e,currentNode:_,visitedNodes:M,searchPath:k,searchResult:v})}),r.jsx(Px,{traversalType:C,traversalResult:f,isAnimating:w,traversalComplete:J})]})]}),r.jsx(Ke,{dataStructure:"avl"})]})}const bt=7,Ix={inorder:{name:"Inorder Traversal",order:"Left -> Root -> Right",description:"Returns elements in SORTED order.",useCase:["Get sorted elements","Validate BST property"],complexity:{time:"O(n)",space:"O(h)"}},preorder:{name:"Preorder Traversal",order:"Root -> Left -> Right",description:"Process root first. Root shows most recently accessed!",useCase:["See access pattern","Serialize structure"],complexity:{time:"O(n)",space:"O(h)"}},postorder:{name:"Postorder Traversal",order:"Left -> Right -> Root",description:"Process children before root.",useCase:["Delete tree safely","Calculate subtree info"],complexity:{time:"O(n)",space:"O(h)"}},levelorder:{name:"Level Order Traversal",order:"Level by Level (BFS)",description:"Visit nodes level by level.",useCase:["Level-wise printing","Find width"],complexity:{time:"O(n)",space:"O(w)"}}},Mi=(e,n=0)=>e?Math.max(Mi(e.left,n+1),Mi(e.right,n+1)):n-1;function Mx({insertValue:e,deleteValue:n,searchValue:t,size:s,height:a,message:i,tree:l,isAnimating:o,visitedNodes:c,lastSplayedValue:u,onInsertValueChange:d,onDeleteValueChange:h,onSearchValueChange:m,onInsert:N,onDelete:k,onSearch:x,onTraversal:v,onClear:p,onResetTraversal:f}){const y=(w,j)=>{const _=w.target.value;(_===""||_==="-"||/^-?\d*\.?\d*$/.test(_))&&j(_)};return r.jsxs("div",{className:"control-panel",children:[r.jsx("h2",{children:"Splay Tree"}),r.jsxs("div",{className:"splay-info-box",children:[r.jsx("strong",{children:"Key Feature:"})," Accessed nodes move to root!"]}),r.jsxs("div",{className:"operation-group",children:[r.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{type:"number",id:"insertValue",value:e,onChange:w=>y(w,d),onKeyDown:w=>w.key==="Enter"&&N(),placeholder:"Enter a number",disabled:o}),r.jsx("button",{onClick:N,className:"btn btn-insert",disabled:o,children:"Insert"})]})]}),r.jsxs("div",{className:"operation-group",children:[r.jsx("label",{htmlFor:"searchValue",children:"Search Value (Splays to Root!)"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{type:"number",id:"searchValue",value:t,onChange:w=>y(w,m),onKeyDown:w=>w.key==="Enter"&&x(),placeholder:"Enter a number",disabled:o}),r.jsxs("button",{onClick:x,className:"btn btn-search",disabled:o||!l,children:[r.jsx(Ml,{size:16})," Search"]})]})]}),r.jsxs("div",{className:"operation-group",children:[r.jsx("label",{htmlFor:"deleteValue",children:"Delete Value"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{type:"number",id:"deleteValue",value:n,onChange:w=>y(w,h),onKeyDown:w=>w.key==="Enter"&&k(),placeholder:"Enter a number",disabled:o}),r.jsx("button",{onClick:k,className:"btn btn-delete",disabled:o,children:"Delete"})]})]}),r.jsxs("div",{className:"operation-group",children:[r.jsx("label",{children:"Traversals"}),r.jsx("div",{className:"btn-group",children:["inorder","preorder","postorder","levelorder"].map(w=>r.jsx("button",{onClick:()=>v(w),className:"btn btn-traversal",disabled:o||!l,children:w==="levelorder"?"Level Order":w.charAt(0).toUpperCase()+w.slice(1)},w))}),c.length>0&&!o&&r.jsx("button",{onClick:f,className:"btn btn-secondary",style:{marginTop:"0.5rem",width:"100%"},children:"Reset Colors"})]}),r.jsxs("div",{className:"traversal-legend",children:[r.jsxs("div",{className:"legend-item",children:[r.jsx("span",{className:"legend-dot legend-dot--default"}),r.jsx("span",{children:"Not visited"})]}),r.jsxs("div",{className:"legend-item",children:[r.jsx("span",{className:"legend-dot legend-dot--visiting"}),r.jsx("span",{children:"Current"})]}),r.jsxs("div",{className:"legend-item",children:[r.jsx("span",{className:"legend-dot legend-dot--visited"}),r.jsx("span",{children:"Visited"})]}),r.jsxs("div",{className:"legend-item",children:[r.jsx("span",{className:"legend-dot",style:{background:"#ec4899"}}),r.jsx("span",{children:"Root (Splayed)"})]})]}),r.jsxs("div",{className:"info-panel",children:[r.jsxs("div",{className:"info-item",children:[r.jsx("span",{className:"info-label",children:"Nodes:"}),r.jsx("span",{className:"info-value",children:s})]}),r.jsxs("div",{className:"info-item",children:[r.jsx("span",{className:"info-label",children:"Height:"}),r.jsx("span",{className:"info-value",children:a})]}),r.jsxs("div",{className:"info-item",children:[r.jsx("span",{className:"info-label",children:"Max:"}),r.jsx("span",{className:"info-value",children:bt})]})]}),u!==null&&r.jsxs("div",{className:"splay-result-box",children:[r.jsx("strong",{children:"Root:"})," ",u," (most recently accessed)"]}),s>=bt*.8&&s<bt&&r.jsxs("div",{className:"warning-box",children:[r.jsx(vn,{size:18}),r.jsxs("div",{children:[r.jsx("strong",{children:"Tree filling up!"})," ",s,"/",bt," nodes."]})]}),r.jsx("div",{className:"operation-group",children:r.jsx("button",{onClick:p,className:"btn btn-clear",disabled:o,children:"Clear Tree"})}),i&&r.jsx("div",{className:`message message-${i.includes("Error")||i.includes("error")||i.includes("not found")?"error":/success|complete|Inserted|Deleted|cleared|Found|root/i.test(i)?"success":i.includes("full")?"warning":"info"}`,children:i})]})}function Vx({tree:e,currentNode:n,visitedNodes:t,lastSplayedValue:s}){const a=(u,d)=>{const h=n===u,m=t.includes(u),N=d&&s===u;let k="#06b6d4",x="none";return h?(k="#f59e0b",x="drop-shadow(0 0 12px #f59e0b) drop-shadow(0 0 20px #f59e0b)"):N?(k="#ec4899",x="drop-shadow(0 0 15px #ec4899) drop-shadow(0 0 25px #ec4899)"):d?(k="#8b5cf6",x="drop-shadow(0 0 8px #8b5cf6)"):m&&(k="#10b981",x="drop-shadow(0 0 6px #10b981)"),{color:k,glow:x,radius:h||N?30:d?28:25,stroke:h||N?3:2,fontSize:h||N?16:14,fontWeight:h||N||d?"bold":"normal"}},i=(u,d,h,m,N,k=!1)=>{if(!u)return[];const x=Math.pow(2,N-m)*50,v=a(u.value,k),p=[];return u.left&&(p.push(r.jsx("line",{x1:d,y1:h,x2:d-x,y2:h+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:2},`l-${u.value}-l`)),p.push(...i(u.left,d-x,h+100,m+1,N,!1))),u.right&&(p.push(r.jsx("line",{x1:d,y1:h,x2:d+x,y2:h+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:2},`l-${u.value}-r`)),p.push(...i(u.right,d+x,h+100,m+1,N,!1))),p.push(r.jsxs("g",{style:{filter:v.glow,transition:"all 0.3s ease"},children:[r.jsx("circle",{cx:d,cy:h,r:v.radius,fill:v.color,stroke:"white",strokeWidth:v.stroke,style:{transition:"all 0.3s ease"}}),r.jsx("text",{x:d,y:h,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:v.fontSize,fontWeight:v.fontWeight,children:u.value}),k&&r.jsx("text",{x:d,y:h+v.radius+15,textAnchor:"middle",fill:"#ec4899",fontSize:10,fontWeight:"bold",children:"ROOT"})]},`n-${u.value}-${d}`)),p};if(!e)return r.jsxs("div",{className:"tree-empty",children:[r.jsx("p",{children:"Splay Tree is empty. Insert some values!"}),r.jsx("p",{className:"tree-empty-hint",children:"Try inserting: 50, 30, 70, then search for 30!"})]});const l=Mi(e),o=(l+1)*100+70,c=Math.max(800,Math.pow(2,Math.max(l,1))*80);return r.jsx("svg",{width:c,height:o,className:"tree-svg",children:i(e,c/2,50,0,l,!0)})}function Hx({traversalType:e,traversalResult:n,isAnimating:t,traversalComplete:s}){if(!e||n.length===0&&!t)return null;const a=Ix[e];return r.jsxs("div",{className:"traversal-output-panel",children:[r.jsxs("div",{style:{marginBottom:"1rem"},children:[r.jsxs("h3",{className:"traversal-title",children:[a==null?void 0:a.name,t&&r.jsx("span",{className:"traversal-badge traversal-badge--running",children:"Running..."}),s&&r.jsx("span",{className:"traversal-badge traversal-badge--complete",children:"Complete"})]}),r.jsxs("p",{className:"traversal-order",children:[r.jsx("strong",{children:"Order:"})," ",a==null?void 0:a.order]}),r.jsx("p",{className:"traversal-description",children:a==null?void 0:a.description})]}),r.jsxs("div",{className:"traversal-output-box",children:[r.jsx("div",{className:"traversal-output-label",children:"Output Sequence:"}),r.jsx("div",{className:"traversal-sequence-container",children:n.length===0&&t?r.jsx("span",{style:{color:"var(--text-muted)",fontStyle:"italic"},children:"Traversing..."}):n.map((i,l)=>r.jsx("span",{className:`traversal-node ${l===n.length-1&&!s?"traversal-node--current":"traversal-node--complete"}`,children:i},l))})]}),s&&n.length>0&&r.jsxs("div",{className:"traversal-array-section",children:[r.jsx("div",{className:"traversal-array-label",children:"Array Output:"}),r.jsxs("code",{className:"traversal-array-output",children:["[",n.join(", "),"]"]}),e==="preorder"&&r.jsx("p",{className:"traversal-sorted-note",children:"Note: First element is the root (most recently accessed)!"}),r.jsxs("p",{className:"traversal-use-case",children:["Use case: ",a==null?void 0:a.useCase.join(" | ")]}),r.jsxs("div",{className:"traversal-complexity",children:[r.jsx("strong",{children:"Time:"})," ",r.jsx("code",{className:"complexity-value",children:a==null?void 0:a.complexity.time}),r.jsx("br",{}),r.jsx("strong",{children:"Space:"})," ",r.jsx("code",{className:"complexity-value",children:a==null?void 0:a.complexity.space})]})]})]})}function Dx(){const[e,n]=g.useState(null),[t,s]=g.useState(0),[a,i]=g.useState(-1),[l,o]=g.useState(""),[c,u]=g.useState(""),[d,h]=g.useState(""),[m,N]=g.useState(""),[k,x]=g.useState(null),[v,p]=g.useState([]),[f,y]=g.useState(!1),[w,j]=g.useState(null),[_,S]=g.useState([]),[M,A]=g.useState(null),[C,$]=g.useState(!1);g.useEffect(()=>{J()},[]);const J=async()=>{try{const H=await(await fetch("/api/splay")).json();n(H.tree),s(H.size||0),i(H.height!==void 0?H.height:-1)}catch(E){console.error("Error loading Splay Tree:",E)}},z=E=>{N(E),setTimeout(()=>N(""),3e3)},D=async()=>{if(!l.trim()){z("Please enter a number!");return}const E=Number(l);if(isNaN(E)){z("Please enter a valid number!");return}if(t>=bt){z(`Tree is full! Maximum size is ${bt} nodes.`);return}b(),x(null);try{const V=await(await fetch("/api/splay/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:E})})).json();if(V.error){z(V.error);return}n(V.tree),s(V.size||0),i(V.height!==void 0?V.height:-1),x(E),z(`Inserted ${E} (now at root!)`),o("")}catch{z("Error inserting node")}},T=async()=>{if(!c.trim()){z("Please enter a number!");return}const E=Number(c);if(isNaN(E)){z("Please enter a valid number!");return}b(),x(null);try{const V=await(await fetch("/api/splay/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:E})})).json();if(V.error){z(V.error);return}n(V.tree),s(V.size||0),i(V.height!==void 0?V.height:-1),z(`Deleted ${E}`),u("")}catch{z("Error deleting node")}},R=async()=>{if(!d.trim()){z("Please enter a number!");return}const E=Number(d);if(isNaN(E)){z("Please enter a valid number!");return}if(!e){z("Tree is empty!");return}b(),y(!0);try{const V=await(await fetch(`/api/splay/search?value=${E}`)).json();V.tree&&n(V.tree),V.found?(x(E),z(`Found ${E}! (splayed to root)`)):(x(null),z(`${E} not found in Splay Tree`)),await J()}catch{z("Error searching")}y(!1),h("")},O=async()=>{try{await fetch("/api/splay/clear",{method:"POST"}),n(null),s(0),i(-1),b(),x(null),z("Splay Tree cleared!")}catch{z("Error clearing tree")}},L=async E=>{if(!e){z("Tree is empty! Insert some nodes first.");return}x(null),y(!0),p([]),j(null),S([]),A(E),$(!1);try{const I=(await(await fetch(`/api/splay/${E}`)).json()).traversal||[];if(I.length===0){z("Tree is empty!"),y(!1);return}for(let B=0;B<I.length;B++)j(I[B]),await new Promise(W=>setTimeout(W,600)),S(W=>[...W,I[B]]),p(W=>[...W,I[B]]),await new Promise(W=>setTimeout(W,200));j(null),$(!0),y(!1);const K=E.charAt(0).toUpperCase()+E.slice(1);z(`${K} traversal complete!`)}catch(H){console.error("Traversal error:",H),z("Error performing traversal"),y(!1)}},b=()=>{p([]),j(null),S([]),A(null),$(!1)};return r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"intro-layout",children:[r.jsx("div",{className:"intro-left",children:r.jsx(Fr,{dataStructure:"splay"})}),r.jsx(qe,{context:"Splay Tree data structure, self-adjusting BST, splay operations, zig-zig, zig-zag rotations, amortized O(log n)"})]}),r.jsxs("div",{className:"visualizer-layout",children:[r.jsx(Mx,{insertValue:l,deleteValue:c,searchValue:d,size:t,height:a,message:m,tree:e,isAnimating:f,visitedNodes:_,lastSplayedValue:k,onInsertValueChange:o,onDeleteValueChange:u,onSearchValueChange:h,onInsert:D,onDelete:T,onSearch:R,onTraversal:L,onClear:O,onResetTraversal:()=>{b(),x(null)}}),r.jsxs("div",{className:"visual-panel",children:[r.jsx("h2",{children:"Splay Tree Visualization"}),r.jsxs("p",{className:"bst-property-reminder",children:["Self-adjusting: ",r.jsx("code",{children:"Recently accessed = Root"})]}),r.jsx("div",{className:"tree-container",children:r.jsx(Vx,{tree:e,currentNode:w,visitedNodes:_,lastSplayedValue:k})}),r.jsx(Hx,{traversalType:M,traversalResult:v,isAnimating:f,traversalComplete:C})]})]}),r.jsx(Ke,{dataStructure:"splay"})]})}const Zn=7;function Fx({insertValue:e,buildArray:n,size:t,height:s,min:a,message:i,heap:l,isAnimating:o,onInsertValueChange:c,onBuildArrayChange:u,onInsert:d,onExtract:h,onPeek:m,onBuild:N,onClear:k}){const x=(v,p)=>{const f=v.target.value;(f===""||f==="-"||/^-?\d*\.?\d*$/.test(f))&&p(f)};return r.jsxs("div",{className:"control-panel",children:[r.jsx("h2",{children:"Min Heap"}),r.jsxs("div",{className:"heap-info-box",children:[r.jsx("strong",{children:"Priority Queue:"})," Minimum always at root!"]}),r.jsxs("div",{className:"operation-group",children:[r.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{type:"number",id:"insertValue",value:e,onChange:v=>x(v,c),onKeyDown:v=>v.key==="Enter"&&d(),placeholder:"Enter a number",disabled:o}),r.jsx("button",{onClick:d,className:"btn btn-insert",disabled:o,children:"Insert"})]})]}),r.jsxs("div",{className:"operation-group",children:[r.jsx("label",{children:"Heap Operations"}),r.jsxs("div",{className:"btn-group-vertical",children:[r.jsxs("button",{onClick:h,className:"btn btn-extract",disabled:o||l.length===0,children:[r.jsx(mm,{size:16})," Extract Min"]}),r.jsx("button",{onClick:m,className:"btn btn-peek",disabled:o||l.length===0,children:"Peek Min"})]})]}),r.jsxs("div",{className:"operation-group",children:[r.jsx("label",{htmlFor:"buildArray",children:"Build from Array"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{type:"text",id:"buildArray",value:n,onChange:v=>u(v.target.value),onKeyDown:v=>v.key==="Enter"&&N(),placeholder:"e.g., 5, 3, 8, 1, 2",disabled:o}),r.jsx("button",{onClick:N,className:"btn btn-build",disabled:o,children:"Build"})]})]}),r.jsxs("div",{className:"traversal-legend",children:[r.jsxs("div",{className:"legend-item",children:[r.jsx("span",{className:"legend-dot",style:{background:"#10b981"}}),r.jsx("span",{children:"Root (Min)"})]}),r.jsxs("div",{className:"legend-item",children:[r.jsx("span",{className:"legend-dot",style:{background:"#6366f1"}}),r.jsx("span",{children:"Internal"})]}),r.jsxs("div",{className:"legend-item",children:[r.jsx("span",{className:"legend-dot",style:{background:"#8b5cf6"}}),r.jsx("span",{children:"Leaf"})]}),r.jsxs("div",{className:"legend-item",children:[r.jsx("span",{className:"legend-dot",style:{background:"#f59e0b"}}),r.jsx("span",{children:"Highlighted"})]})]}),r.jsxs("div",{className:"info-panel",children:[r.jsxs("div",{className:"info-item",children:[r.jsx("span",{className:"info-label",children:"Size:"}),r.jsx("span",{className:"info-value",children:t})]}),r.jsxs("div",{className:"info-item",children:[r.jsx("span",{className:"info-label",children:"Height:"}),r.jsx("span",{className:"info-value",children:s})]}),r.jsxs("div",{className:"info-item",children:[r.jsx("span",{className:"info-label",children:"Min:"}),r.jsx("span",{className:"info-value",children:a??"-"})]})]}),t>=Zn*.8&&t<Zn&&r.jsxs("div",{className:"warning-box",children:[r.jsx(vn,{size:18}),r.jsxs("div",{children:[r.jsx("strong",{children:"Heap filling up!"})," ",t,"/",Zn," elements."]})]}),r.jsx("div",{className:"operation-group",children:r.jsx("button",{onClick:k,className:"btn btn-clear",disabled:o,children:"Clear Heap"})}),i&&r.jsx("div",{className:`message message-${i.includes("Error")||i.includes("error")?"error":/success|complete|Inserted|Extracted|cleared|Built/i.test(i)?"success":i.includes("full")||i.includes("empty")?"warning":"info"}`,children:i})]})}function Ax({tree:e,heap:n,highlightedIndex:t,swappingIndices:s}){const a=d=>{const h=t===d,m=s.includes(d),N=d===0;let k="#6366f1",x="none";return h||m?(k="#f59e0b",x="drop-shadow(0 0 12px #f59e0b)"):N&&(k="#10b981",x="drop-shadow(0 0 8px #10b981)"),{color:k,glow:x,radius:h||N?28:25}},i=(d,h=0)=>d?Math.max(i(d.left,h+1),i(d.right,h+1)):h-1,l=(d,h,m,N,k)=>{if(!d)return[];const x=Math.pow(2,k-N)*50,v=a(d.index),p=[];return d.left&&(p.push(r.jsx("line",{x1:h,y1:m,x2:h-x,y2:m+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:2},`l-${d.index}-l`)),p.push(...l(d.left,h-x,m+100,N+1,k))),d.right&&(p.push(r.jsx("line",{x1:h,y1:m,x2:h+x,y2:m+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:2},`l-${d.index}-r`)),p.push(...l(d.right,h+x,m+100,N+1,k))),p.push(r.jsxs("g",{style:{filter:v.glow,transition:"all 0.3s ease"},children:[r.jsx("circle",{cx:h,cy:m,r:v.radius,fill:v.color,stroke:"white",strokeWidth:2}),r.jsx("text",{x:h,y:m,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:14,fontWeight:"bold",children:d.value}),r.jsxs("text",{x:h,y:m+v.radius+12,textAnchor:"middle",fill:"rgba(255,255,255,0.6)",fontSize:10,children:["[",d.index,"]"]})]},`n-${d.index}`)),p};if(!e||n.length===0)return r.jsxs("div",{className:"tree-empty",children:[r.jsx("p",{children:"Min Heap is empty. Insert some values!"}),r.jsx("p",{className:"tree-empty-hint",children:"Try: 5, 3, 8, 1, 2 or build from array"})]});const o=i(e),c=(o+1)*100+80,u=Math.max(600,Math.pow(2,Math.max(o,1))*70);return r.jsx("svg",{width:u,height:c,className:"tree-svg",children:l(e,u/2,50,0,o)})}function $x({heap:e,highlightedIndex:n,swappingIndices:t}){return e.length===0?r.jsx("div",{className:"heap-array-empty",children:r.jsx("code",{children:"[ ]"})}):r.jsxs("div",{className:"heap-array-container",children:[r.jsx("div",{className:"heap-array",children:e.map((s,a)=>{const i=n===a,l=t.includes(a),o=a===0;return r.jsxs("div",{className:`heap-array-cell ${i||l?"highlighted":""} ${o?"root":""}`,children:[r.jsx("span",{className:"heap-array-index",children:a}),r.jsx("span",{className:"heap-array-value",children:s})]},a)})}),r.jsxs("div",{className:"heap-array-formulas",children:[r.jsxs("div",{className:"formula-item",children:[r.jsx("strong",{children:"Parent(i):"})," ",r.jsx("code",{children:"(i - 1) / 2"})]}),r.jsxs("div",{className:"formula-item",children:[r.jsx("strong",{children:"Left(i):"})," ",r.jsx("code",{children:"2*i + 1"})]}),r.jsxs("div",{className:"formula-item",children:[r.jsx("strong",{children:"Right(i):"})," ",r.jsx("code",{children:"2*i + 2"})]})]})]})}function Bx(){const[e,n]=g.useState([]),[t,s]=g.useState(null),[a,i]=g.useState(0),[l,o]=g.useState(-1),[c,u]=g.useState(null),[d,h]=g.useState(""),[m,N]=g.useState(""),[k,x]=g.useState(""),[v,p]=g.useState(!1),[f,y]=g.useState(null),[w,j]=g.useState([]);g.useEffect(()=>{_()},[]);const _=async()=>{try{const D=await(await fetch("/api/minheap")).json();n(D.heap||[]),s(D.tree),i(D.size||0),o(D.height!==void 0?D.height:-1),u(D.min)}catch(z){console.error("Error loading Min Heap:",z)}},S=z=>{x(z),setTimeout(()=>x(""),3e3)},M=async()=>{if(!d.trim()){S("Please enter a number!");return}const z=Number(d);if(isNaN(z)){S("Please enter a valid number!");return}if(a>=Zn){S(`Heap is full! Maximum size is ${Zn}.`);return}p(!0);try{const T=await(await fetch("/api/minheap/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:z})})).json();if(T.error){S(T.error),p(!1);return}n(T.heap||[]),s(T.tree),i(T.size||0),o(T.height!==void 0?T.height:-1),u(T.min),S(`Inserted ${z}`),h("")}catch{S("Error inserting element")}p(!1)},A=async()=>{if(a===0){S("Heap is empty!");return}p(!0),y(0),await new Promise(z=>setTimeout(z,500));try{const D=await(await fetch("/api/minheap/extract",{method:"POST"})).json();if(D.error){S(D.error),p(!1),y(null);return}n(D.heap||[]),s(D.tree),i(D.size||0),o(D.height!==void 0?D.height:-1),u(D.min),S(`Extracted minimum: ${D.extracted}`)}catch{S("Error extracting minimum")}y(null),p(!1)},C=async()=>{if(a===0){S("Heap is empty!");return}y(0),S(`Minimum element is ${c}`),await new Promise(z=>setTimeout(z,1500)),y(null)},$=async()=>{if(!m.trim()){S("Please enter an array of numbers!");return}const z=m.split(",").map(D=>{const T=Number(D.trim());return isNaN(T)?null:T}).filter(D=>D!==null);if(z.length===0){S("Please enter valid numbers separated by commas!");return}if(z.length>Zn){S(`Array too large! Maximum size is ${Zn}.`);return}p(!0);try{const T=await(await fetch("/api/minheap/build",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({array:z})})).json();if(T.error){S(T.error),p(!1);return}n(T.heap||[]),s(T.tree),i(T.size||0),o(T.height!==void 0?T.height:-1),u(T.min),S("Built heap from array!"),N("")}catch{S("Error building heap")}p(!1)},J=async()=>{try{await fetch("/api/minheap/clear",{method:"POST"}),n([]),s(null),i(0),o(-1),u(null),y(null),j([]),S("Heap cleared!")}catch{S("Error clearing heap")}};return r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"intro-layout",children:[r.jsx("div",{className:"intro-left",children:r.jsx(Fr,{dataStructure:"minheap"})}),r.jsx(qe,{context:"Min Heap data structure, priority queue, heapify operations, O(log n) insert and extract, O(1) peek minimum"})]}),r.jsxs("div",{className:"visualizer-layout",children:[r.jsx(Fx,{insertValue:d,buildArray:m,size:a,height:l,min:c,message:k,heap:e,isAnimating:v,onInsertValueChange:h,onBuildArrayChange:N,onInsert:M,onExtract:A,onPeek:C,onBuild:$,onClear:J}),r.jsxs("div",{className:"visual-panel",children:[r.jsx("h2",{children:"Min Heap Visualization"}),r.jsxs("p",{className:"bst-property-reminder",children:["Heap Property: ",r.jsx("code",{children:"Parent <= Children"})," (Min at root)"]}),r.jsxs("div",{className:"heap-tree-section",children:[r.jsx("h3",{children:"Tree View"}),r.jsx("div",{className:"tree-container",children:r.jsx(Ax,{tree:t,heap:e,highlightedIndex:f,swappingIndices:w})})]}),r.jsxs("div",{className:"heap-array-section",children:[r.jsx("h3",{children:"Array Representation"}),r.jsx($x,{heap:e,highlightedIndex:f,swappingIndices:w})]})]})]}),r.jsx(Ke,{dataStructure:"minheap"})]})}const Jn=7;function Ux({insertValue:e,buildArray:n,size:t,height:s,max:a,message:i,heap:l,isAnimating:o,onInsertValueChange:c,onBuildArrayChange:u,onInsert:d,onExtract:h,onPeek:m,onBuild:N,onClear:k}){const x=(v,p)=>{const f=v.target.value;(f===""||f==="-"||/^-?\d*\.?\d*$/.test(f))&&p(f)};return r.jsxs("div",{className:"control-panel",children:[r.jsx("h2",{children:"Max Heap"}),r.jsxs("div",{className:"heap-info-box max-heap",children:[r.jsx("strong",{children:"Priority Queue:"})," Maximum always at root!"]}),r.jsxs("div",{className:"operation-group",children:[r.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{type:"number",id:"insertValue",value:e,onChange:v=>x(v,c),onKeyDown:v=>v.key==="Enter"&&d(),placeholder:"Enter a number",disabled:o}),r.jsx("button",{onClick:d,className:"btn btn-insert",disabled:o,children:"Insert"})]})]}),r.jsxs("div",{className:"operation-group",children:[r.jsx("label",{children:"Heap Operations"}),r.jsxs("div",{className:"btn-group-vertical",children:[r.jsxs("button",{onClick:h,className:"btn btn-extract-max",disabled:o||l.length===0,children:[r.jsx(gm,{size:16})," Extract Max"]}),r.jsx("button",{onClick:m,className:"btn btn-peek",disabled:o||l.length===0,children:"Peek Max"})]})]}),r.jsxs("div",{className:"operation-group",children:[r.jsx("label",{htmlFor:"buildArray",children:"Build from Array"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{type:"text",id:"buildArray",value:n,onChange:v=>u(v.target.value),onKeyDown:v=>v.key==="Enter"&&N(),placeholder:"e.g., 5, 3, 8, 1, 2",disabled:o}),r.jsx("button",{onClick:N,className:"btn btn-build",disabled:o,children:"Build"})]})]}),r.jsxs("div",{className:"traversal-legend",children:[r.jsxs("div",{className:"legend-item",children:[r.jsx("span",{className:"legend-dot",style:{background:"#ef4444"}}),r.jsx("span",{children:"Root (Max)"})]}),r.jsxs("div",{className:"legend-item",children:[r.jsx("span",{className:"legend-dot",style:{background:"#6366f1"}}),r.jsx("span",{children:"Internal"})]}),r.jsxs("div",{className:"legend-item",children:[r.jsx("span",{className:"legend-dot",style:{background:"#8b5cf6"}}),r.jsx("span",{children:"Leaf"})]}),r.jsxs("div",{className:"legend-item",children:[r.jsx("span",{className:"legend-dot",style:{background:"#f59e0b"}}),r.jsx("span",{children:"Highlighted"})]})]}),r.jsxs("div",{className:"info-panel",children:[r.jsxs("div",{className:"info-item",children:[r.jsx("span",{className:"info-label",children:"Size:"}),r.jsx("span",{className:"info-value",children:t})]}),r.jsxs("div",{className:"info-item",children:[r.jsx("span",{className:"info-label",children:"Height:"}),r.jsx("span",{className:"info-value",children:s})]}),r.jsxs("div",{className:"info-item",children:[r.jsx("span",{className:"info-label",children:"Max:"}),r.jsx("span",{className:"info-value",children:a??"-"})]})]}),t>=Jn*.8&&t<Jn&&r.jsxs("div",{className:"warning-box",children:[r.jsx(vn,{size:18}),r.jsxs("div",{children:[r.jsx("strong",{children:"Heap filling up!"})," ",t,"/",Jn," elements."]})]}),r.jsx("div",{className:"operation-group",children:r.jsx("button",{onClick:k,className:"btn btn-clear",disabled:o,children:"Clear Heap"})}),i&&r.jsx("div",{className:`message message-${i.includes("Error")||i.includes("error")?"error":/success|complete|Inserted|Extracted|cleared|Built/i.test(i)?"success":i.includes("full")||i.includes("empty")?"warning":"info"}`,children:i})]})}function qx({tree:e,heap:n,highlightedIndex:t,swappingIndices:s}){const a=d=>{const h=t===d,m=s.includes(d),N=d===0;let k="#6366f1",x="none";return h||m?(k="#f59e0b",x="drop-shadow(0 0 12px #f59e0b)"):N&&(k="#ef4444",x="drop-shadow(0 0 8px #ef4444)"),{color:k,glow:x,radius:h||N?28:25}},i=(d,h=0)=>d?Math.max(i(d.left,h+1),i(d.right,h+1)):h-1,l=(d,h,m,N,k)=>{if(!d)return[];const x=Math.pow(2,k-N)*50,v=a(d.index),p=[];return d.left&&(p.push(r.jsx("line",{x1:h,y1:m,x2:h-x,y2:m+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:2},`l-${d.index}-l`)),p.push(...l(d.left,h-x,m+100,N+1,k))),d.right&&(p.push(r.jsx("line",{x1:h,y1:m,x2:h+x,y2:m+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:2},`l-${d.index}-r`)),p.push(...l(d.right,h+x,m+100,N+1,k))),p.push(r.jsxs("g",{style:{filter:v.glow,transition:"all 0.3s ease"},children:[r.jsx("circle",{cx:h,cy:m,r:v.radius,fill:v.color,stroke:"white",strokeWidth:2}),r.jsx("text",{x:h,y:m,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:14,fontWeight:"bold",children:d.value}),r.jsxs("text",{x:h,y:m+v.radius+12,textAnchor:"middle",fill:"rgba(255,255,255,0.6)",fontSize:10,children:["[",d.index,"]"]})]},`n-${d.index}`)),p};if(!e||n.length===0)return r.jsxs("div",{className:"tree-empty",children:[r.jsx("p",{children:"Max Heap is empty. Insert some values!"}),r.jsx("p",{className:"tree-empty-hint",children:"Try: 5, 3, 8, 1, 9 or build from array"})]});const o=i(e),c=(o+1)*100+80,u=Math.max(600,Math.pow(2,Math.max(o,1))*70);return r.jsx("svg",{width:u,height:c,className:"tree-svg",children:l(e,u/2,50,0,o)})}function Kx({heap:e,highlightedIndex:n,swappingIndices:t}){return e.length===0?r.jsx("div",{className:"heap-array-empty",children:r.jsx("code",{children:"[ ]"})}):r.jsxs("div",{className:"heap-array-container",children:[r.jsx("div",{className:"heap-array",children:e.map((s,a)=>{const i=n===a,l=t.includes(a),o=a===0;return r.jsxs("div",{className:`heap-array-cell ${i||l?"highlighted":""} ${o?"root-max":""}`,children:[r.jsx("span",{className:"heap-array-index",children:a}),r.jsx("span",{className:"heap-array-value",children:s})]},a)})}),r.jsxs("div",{className:"heap-array-formulas",children:[r.jsxs("div",{className:"formula-item",children:[r.jsx("strong",{children:"Parent(i):"})," ",r.jsx("code",{children:"(i - 1) / 2"})]}),r.jsxs("div",{className:"formula-item",children:[r.jsx("strong",{children:"Left(i):"})," ",r.jsx("code",{children:"2*i + 1"})]}),r.jsxs("div",{className:"formula-item",children:[r.jsx("strong",{children:"Right(i):"})," ",r.jsx("code",{children:"2*i + 2"})]})]})]})}function Wx(){const[e,n]=g.useState([]),[t,s]=g.useState(null),[a,i]=g.useState(0),[l,o]=g.useState(-1),[c,u]=g.useState(null),[d,h]=g.useState(""),[m,N]=g.useState(""),[k,x]=g.useState(""),[v,p]=g.useState(!1),[f,y]=g.useState(null),[w,j]=g.useState([]);g.useEffect(()=>{_()},[]);const _=async()=>{try{const D=await(await fetch("/api/maxheap")).json();n(D.heap||[]),s(D.tree),i(D.size||0),o(D.height!==void 0?D.height:-1),u(D.max)}catch(z){console.error("Error loading Max Heap:",z)}},S=z=>{x(z),setTimeout(()=>x(""),3e3)},M=async()=>{if(!d.trim()){S("Please enter a number!");return}const z=Number(d);if(isNaN(z)){S("Please enter a valid number!");return}if(a>=Jn){S(`Heap is full! Maximum size is ${Jn}.`);return}p(!0);try{const T=await(await fetch("/api/maxheap/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:z})})).json();if(T.error){S(T.error),p(!1);return}n(T.heap||[]),s(T.tree),i(T.size||0),o(T.height!==void 0?T.height:-1),u(T.max),S(`Inserted ${z}`),h("")}catch{S("Error inserting element")}p(!1)},A=async()=>{if(a===0){S("Heap is empty!");return}p(!0),y(0),await new Promise(z=>setTimeout(z,500));try{const D=await(await fetch("/api/maxheap/extract",{method:"POST"})).json();if(D.error){S(D.error),p(!1),y(null);return}n(D.heap||[]),s(D.tree),i(D.size||0),o(D.height!==void 0?D.height:-1),u(D.max),S(`Extracted maximum: ${D.extracted}`)}catch{S("Error extracting maximum")}y(null),p(!1)},C=async()=>{if(a===0){S("Heap is empty!");return}y(0),S(`Maximum element is ${c}`),await new Promise(z=>setTimeout(z,1500)),y(null)},$=async()=>{if(!m.trim()){S("Please enter an array of numbers!");return}const z=m.split(",").map(D=>{const T=Number(D.trim());return isNaN(T)?null:T}).filter(D=>D!==null);if(z.length===0){S("Please enter valid numbers separated by commas!");return}if(z.length>Jn){S(`Array too large! Maximum size is ${Jn}.`);return}p(!0);try{const T=await(await fetch("/api/maxheap/build",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({array:z})})).json();if(T.error){S(T.error),p(!1);return}n(T.heap||[]),s(T.tree),i(T.size||0),o(T.height!==void 0?T.height:-1),u(T.max),S("Built heap from array!"),N("")}catch{S("Error building heap")}p(!1)},J=async()=>{try{await fetch("/api/maxheap/clear",{method:"POST"}),n([]),s(null),i(0),o(-1),u(null),y(null),j([]),S("Heap cleared!")}catch{S("Error clearing heap")}};return r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"intro-layout",children:[r.jsx("div",{className:"intro-left",children:r.jsx(Fr,{dataStructure:"maxheap"})}),r.jsx(qe,{context:"Max Heap data structure, priority queue, heapify operations, O(log n) insert and extract, O(1) peek maximum, heap sort"})]}),r.jsxs("div",{className:"visualizer-layout",children:[r.jsx(Ux,{insertValue:d,buildArray:m,size:a,height:l,max:c,message:k,heap:e,isAnimating:v,onInsertValueChange:h,onBuildArrayChange:N,onInsert:M,onExtract:A,onPeek:C,onBuild:$,onClear:J}),r.jsxs("div",{className:"visual-panel",children:[r.jsx("h2",{children:"Max Heap Visualization"}),r.jsxs("p",{className:"bst-property-reminder",children:["Heap Property: ",r.jsx("code",{children:"Parent >= Children"})," (Max at root)"]}),r.jsxs("div",{className:"heap-tree-section",children:[r.jsx("h3",{children:"Tree View"}),r.jsx("div",{className:"tree-container",children:r.jsx(qx,{tree:t,heap:e,highlightedIndex:f,swappingIndices:w})})]}),r.jsxs("div",{className:"heap-array-section",children:[r.jsx("h3",{children:"Array Representation"}),r.jsx(Kx,{heap:e,highlightedIndex:f,swappingIndices:w})]})]})]}),r.jsx(Ke,{dataStructure:"maxheap"})]})}function Qx(){return r.jsxs("div",{className:"homepage-body",children:[r.jsx(Um,{}),r.jsxs("main",{className:"main-content",children:[r.jsxs(nm,{children:[r.jsx(me,{path:"/",element:r.jsx(Km,{})}),r.jsx(me,{path:"/algorithms",element:r.jsx(Wm,{})}),r.jsx(me,{path:"/contact",element:r.jsx(Qm,{})}),r.jsx(me,{path:"/contributions",element:r.jsx(Gm,{})}),r.jsx(me,{path:"/stack",element:r.jsx(Fy,{})}),r.jsx(me,{path:"/queue",element:r.jsx(Ay,{})}),r.jsx(me,{path:"/linkedlist",element:r.jsx($y,{})}),r.jsx(me,{path:"/hashtable_linear",element:r.jsx(By,{})}),r.jsx(me,{path:"/hashtable_quadratic",element:r.jsx(Yy,{})}),r.jsx(me,{path:"/hashtable_chaining",element:r.jsx(Xy,{})}),r.jsx(me,{path:"/binarytree",element:r.jsx(ig,{})}),r.jsx(me,{path:"/bst",element:r.jsx(Lx,{})}),r.jsx(me,{path:"/avl",element:r.jsx(zx,{})}),r.jsx(me,{path:"/splay",element:r.jsx(Dx,{})}),r.jsx(me,{path:"/minheap",element:r.jsx(Bx,{})}),r.jsx(me,{path:"/maxheap",element:r.jsx(Wx,{})})]}),r.jsx(qm,{})]})]})}za.createRoot(document.getElementById("root")).render(r.jsx(At.StrictMode,{children:r.jsx(om,{children:r.jsx(Qx,{})})}));
