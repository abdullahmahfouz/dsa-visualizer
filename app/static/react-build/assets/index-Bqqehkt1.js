function Uh(e,t){for(var r=0;r<t.length;r++){const s=t[r];if(typeof s!="string"&&!Array.isArray(s)){for(const i in s)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(s,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>s[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(i){if(i.ep)return;i.ep=!0;const a=r(i);fetch(i.href,a)}})();function Kh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Xc={exports:{}},mi={},Yc={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ns=Symbol.for("react.element"),Wh=Symbol.for("react.portal"),Gh=Symbol.for("react.fragment"),Qh=Symbol.for("react.strict_mode"),Xh=Symbol.for("react.profiler"),Yh=Symbol.for("react.provider"),Jh=Symbol.for("react.context"),Zh=Symbol.for("react.forward_ref"),ep=Symbol.for("react.suspense"),np=Symbol.for("react.memo"),tp=Symbol.for("react.lazy"),jo=Symbol.iterator;function rp(e){return e===null||typeof e!="object"?null:(e=jo&&e[jo]||e["@@iterator"],typeof e=="function"?e:null)}var Jc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zc=Object.assign,ed={};function ar(e,t,r){this.props=e,this.context=t,this.refs=ed,this.updater=r||Jc}ar.prototype.isReactComponent={};ar.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ar.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function nd(){}nd.prototype=ar.prototype;function jl(e,t,r){this.props=e,this.context=t,this.refs=ed,this.updater=r||Jc}var Nl=jl.prototype=new nd;Nl.constructor=jl;Zc(Nl,ar.prototype);Nl.isPureReactComponent=!0;var No=Array.isArray,td=Object.prototype.hasOwnProperty,kl={current:null},rd={key:!0,ref:!0,__self:!0,__source:!0};function sd(e,t,r){var s,i={},a=null,l=null;if(t!=null)for(s in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(a=""+t.key),t)td.call(t,s)&&!rd.hasOwnProperty(s)&&(i[s]=t[s]);var o=arguments.length-2;if(o===1)i.children=r;else if(1<o){for(var c=Array(o),h=0;h<o;h++)c[h]=arguments[h+2];i.children=c}if(e&&e.defaultProps)for(s in o=e.defaultProps,o)i[s]===void 0&&(i[s]=o[s]);return{$$typeof:ns,type:e,key:a,ref:l,props:i,_owner:kl.current}}function sp(e,t){return{$$typeof:ns,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function wl(e){return typeof e=="object"&&e!==null&&e.$$typeof===ns}function ip(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var ko=/\/+/g;function Pi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ip(""+e.key):t.toString(36)}function _s(e,t,r,s,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case ns:case Wh:l=!0}}if(l)return l=e,i=i(l),e=s===""?"."+Pi(l,0):s,No(i)?(r="",e!=null&&(r=e.replace(ko,"$&/")+"/"),_s(i,t,r,"",function(h){return h})):i!=null&&(wl(i)&&(i=sp(i,r+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(ko,"$&/")+"/")+e)),t.push(i)),1;if(l=0,s=s===""?".":s+":",No(e))for(var o=0;o<e.length;o++){a=e[o];var c=s+Pi(a,o);l+=_s(a,t,r,c,i)}else if(c=rp(e),typeof c=="function")for(e=c.call(e),o=0;!(a=e.next()).done;)a=a.value,c=s+Pi(a,o++),l+=_s(a,t,r,c,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function cs(e,t,r){if(e==null)return e;var s=[],i=0;return _s(e,s,"","",function(a){return t.call(r,a,i++)}),s}function ap(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Be={current:null},Ls={transition:null},lp={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:Ls,ReactCurrentOwner:kl};function id(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:cs,forEach:function(e,t,r){cs(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return cs(e,function(){t++}),t},toArray:function(e){return cs(e,function(t){return t})||[]},only:function(e){if(!wl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ee.Component=ar;ee.Fragment=Gh;ee.Profiler=Xh;ee.PureComponent=jl;ee.StrictMode=Qh;ee.Suspense=ep;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lp;ee.act=id;ee.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=Zc({},e.props),i=e.key,a=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,l=kl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(c in t)td.call(t,c)&&!rd.hasOwnProperty(c)&&(s[c]=t[c]===void 0&&o!==void 0?o[c]:t[c])}var c=arguments.length-2;if(c===1)s.children=r;else if(1<c){o=Array(c);for(var h=0;h<c;h++)o[h]=arguments[h+2];s.children=o}return{$$typeof:ns,type:e.type,key:i,ref:a,props:s,_owner:l}};ee.createContext=function(e){return e={$$typeof:Jh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Yh,_context:e},e.Consumer=e};ee.createElement=sd;ee.createFactory=function(e){var t=sd.bind(null,e);return t.type=e,t};ee.createRef=function(){return{current:null}};ee.forwardRef=function(e){return{$$typeof:Zh,render:e}};ee.isValidElement=wl;ee.lazy=function(e){return{$$typeof:tp,_payload:{_status:-1,_result:e},_init:ap}};ee.memo=function(e,t){return{$$typeof:np,type:e,compare:t===void 0?null:t}};ee.startTransition=function(e){var t=Ls.transition;Ls.transition={};try{e()}finally{Ls.transition=t}};ee.unstable_act=id;ee.useCallback=function(e,t){return Be.current.useCallback(e,t)};ee.useContext=function(e){return Be.current.useContext(e)};ee.useDebugValue=function(){};ee.useDeferredValue=function(e){return Be.current.useDeferredValue(e)};ee.useEffect=function(e,t){return Be.current.useEffect(e,t)};ee.useId=function(){return Be.current.useId()};ee.useImperativeHandle=function(e,t,r){return Be.current.useImperativeHandle(e,t,r)};ee.useInsertionEffect=function(e,t){return Be.current.useInsertionEffect(e,t)};ee.useLayoutEffect=function(e,t){return Be.current.useLayoutEffect(e,t)};ee.useMemo=function(e,t){return Be.current.useMemo(e,t)};ee.useReducer=function(e,t,r){return Be.current.useReducer(e,t,r)};ee.useRef=function(e){return Be.current.useRef(e)};ee.useState=function(e){return Be.current.useState(e)};ee.useSyncExternalStore=function(e,t,r){return Be.current.useSyncExternalStore(e,t,r)};ee.useTransition=function(){return Be.current.useTransition()};ee.version="18.3.1";Yc.exports=ee;var u=Yc.exports;const Ve=Kh(u),op=Uh({__proto__:null,default:Ve},[u]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cp=u,dp=Symbol.for("react.element"),up=Symbol.for("react.fragment"),hp=Object.prototype.hasOwnProperty,pp=cp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fp={key:!0,ref:!0,__self:!0,__source:!0};function ad(e,t,r){var s,i={},a=null,l=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(l=t.ref);for(s in t)hp.call(t,s)&&!fp.hasOwnProperty(s)&&(i[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)i[s]===void 0&&(i[s]=t[s]);return{$$typeof:dp,type:e,key:a,ref:l,props:i,_owner:pp.current}}mi.Fragment=up;mi.jsx=ad;mi.jsxs=ad;Xc.exports=mi;var n=Xc.exports,pa={},ld={exports:{}},en={},od={exports:{}},cd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,O){var S=L.length;L.push(O);e:for(;0<S;){var z=S-1>>>1,M=L[z];if(0<i(M,O))L[z]=O,L[S]=M,S=z;else break e}}function r(L){return L.length===0?null:L[0]}function s(L){if(L.length===0)return null;var O=L[0],S=L.pop();if(S!==O){L[0]=S;e:for(var z=0,M=L.length,C=M>>>1;z<C;){var P=2*(z+1)-1,_=L[P],N=P+1,V=L[N];if(0>i(_,S))N<M&&0>i(V,_)?(L[z]=V,L[N]=S,z=N):(L[z]=_,L[P]=S,z=P);else if(N<M&&0>i(V,S))L[z]=V,L[N]=S,z=N;else break e}}return O}function i(L,O){var S=L.sortIndex-O.sortIndex;return S!==0?S:L.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var l=Date,o=l.now();e.unstable_now=function(){return l.now()-o}}var c=[],h=[],d=1,p=null,m=3,b=!1,w=!1,k=!1,j=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(L){for(var O=r(h);O!==null;){if(O.callback===null)s(h);else if(O.startTime<=L)s(h),O.sortIndex=O.expirationTime,t(c,O);else break;O=r(h)}}function E(L){if(k=!1,x(L),!w)if(r(c)!==null)w=!0,R(y);else{var O=r(h);O!==null&&q(E,O.startTime-L)}}function y(L,O){w=!1,k&&(k=!1,f(D),D=-1),b=!0;var S=m;try{for(x(O),p=r(c);p!==null&&(!(p.expirationTime>O)||L&&!H());){var z=p.callback;if(typeof z=="function"){p.callback=null,m=p.priorityLevel;var M=z(p.expirationTime<=O);O=e.unstable_now(),typeof M=="function"?p.callback=M:p===r(c)&&s(c),x(O)}else s(c);p=r(c)}if(p!==null)var C=!0;else{var P=r(h);P!==null&&q(E,P.startTime-O),C=!1}return C}finally{p=null,m=S,b=!1}}var F=!1,T=null,D=-1,A=5,I=-1;function H(){return!(e.unstable_now()-I<A)}function K(){if(T!==null){var L=e.unstable_now();I=L;var O=!0;try{O=T(!0,L)}finally{O?B():(F=!1,T=null)}}else F=!1}var B;if(typeof g=="function")B=function(){g(K)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,v=$.port2;$.port1.onmessage=K,B=function(){v.postMessage(null)}}else B=function(){j(K,0)};function R(L){T=L,F||(F=!0,B())}function q(L,O){D=j(function(){L(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){w||b||(w=!0,R(y))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(L){switch(m){case 1:case 2:case 3:var O=3;break;default:O=m}var S=m;m=O;try{return L()}finally{m=S}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,O){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var S=m;m=L;try{return O()}finally{m=S}},e.unstable_scheduleCallback=function(L,O,S){var z=e.unstable_now();switch(typeof S=="object"&&S!==null?(S=S.delay,S=typeof S=="number"&&0<S?z+S:z):S=z,L){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=S+M,L={id:d++,callback:O,priorityLevel:L,startTime:S,expirationTime:M,sortIndex:-1},S>z?(L.sortIndex=S,t(h,L),r(c)===null&&L===r(h)&&(k?(f(D),D=-1):k=!0,q(E,S-z))):(L.sortIndex=M,t(c,L),w||b||(w=!0,R(y))),L},e.unstable_shouldYield=H,e.unstable_wrapCallback=function(L){var O=m;return function(){var S=m;m=O;try{return L.apply(this,arguments)}finally{m=S}}}})(cd);od.exports=cd;var mp=od.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gp=u,Ze=mp;function U(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dd=new Set,Mr={};function kt(e,t){Zt(e,t),Zt(e+"Capture",t)}function Zt(e,t){for(Mr[e]=t,e=0;e<t.length;e++)dd.add(t[e])}var _n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fa=Object.prototype.hasOwnProperty,xp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wo={},bo={};function vp(e){return fa.call(bo,e)?!0:fa.call(wo,e)?!1:xp.test(e)?bo[e]=!0:(wo[e]=!0,!1)}function yp(e,t,r,s){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function jp(e,t,r,s){if(t===null||typeof t>"u"||yp(e,t,r,s))return!0;if(s)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function qe(e,t,r,s,i,a,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=l}var Oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Oe[e]=new qe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Oe[t]=new qe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Oe[e]=new qe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Oe[e]=new qe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Oe[e]=new qe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Oe[e]=new qe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Oe[e]=new qe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Oe[e]=new qe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Oe[e]=new qe(e,5,!1,e.toLowerCase(),null,!1,!1)});var bl=/[\-:]([a-z])/g;function Sl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(bl,Sl);Oe[t]=new qe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(bl,Sl);Oe[t]=new qe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(bl,Sl);Oe[t]=new qe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Oe[e]=new qe(e,1,!1,e.toLowerCase(),null,!1,!1)});Oe.xlinkHref=new qe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Oe[e]=new qe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Cl(e,t,r,s){var i=Oe.hasOwnProperty(t)?Oe[t]:null;(i!==null?i.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(jp(t,r,i,s)&&(r=null),s||i===null?vp(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,s=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,s?e.setAttributeNS(s,t,r):e.setAttribute(t,r))))}var Rn=gp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ds=Symbol.for("react.element"),Lt=Symbol.for("react.portal"),Et=Symbol.for("react.fragment"),Tl=Symbol.for("react.strict_mode"),ma=Symbol.for("react.profiler"),ud=Symbol.for("react.provider"),hd=Symbol.for("react.context"),_l=Symbol.for("react.forward_ref"),ga=Symbol.for("react.suspense"),xa=Symbol.for("react.suspense_list"),Ll=Symbol.for("react.memo"),zn=Symbol.for("react.lazy"),pd=Symbol.for("react.offscreen"),So=Symbol.iterator;function hr(e){return e===null||typeof e!="object"?null:(e=So&&e[So]||e["@@iterator"],typeof e=="function"?e:null)}var pe=Object.assign,Ii;function jr(e){if(Ii===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Ii=t&&t[1]||""}return`
`+Ii+e}var Mi=!1;function zi(e,t){if(!e||Mi)return"";Mi=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(h){var s=h}Reflect.construct(e,[],t)}else{try{t.call()}catch(h){s=h}e.call(t.prototype)}else{try{throw Error()}catch(h){s=h}e()}}catch(h){if(h&&s&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),a=s.stack.split(`
`),l=i.length-1,o=a.length-1;1<=l&&0<=o&&i[l]!==a[o];)o--;for(;1<=l&&0<=o;l--,o--)if(i[l]!==a[o]){if(l!==1||o!==1)do if(l--,o--,0>o||i[l]!==a[o]){var c=`
`+i[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=o);break}}}finally{Mi=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?jr(e):""}function Np(e){switch(e.tag){case 5:return jr(e.type);case 16:return jr("Lazy");case 13:return jr("Suspense");case 19:return jr("SuspenseList");case 0:case 2:case 15:return e=zi(e.type,!1),e;case 11:return e=zi(e.type.render,!1),e;case 1:return e=zi(e.type,!0),e;default:return""}}function va(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Et:return"Fragment";case Lt:return"Portal";case ma:return"Profiler";case Tl:return"StrictMode";case ga:return"Suspense";case xa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case hd:return(e.displayName||"Context")+".Consumer";case ud:return(e._context.displayName||"Context")+".Provider";case _l:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ll:return t=e.displayName||null,t!==null?t:va(e.type)||"Memo";case zn:t=e._payload,e=e._init;try{return va(e(t))}catch{}}return null}function kp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return va(t);case 8:return t===Tl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function et(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function wp(e){var t=fd(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){s=""+l,a.call(this,l)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return s},setValue:function(l){s=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function us(e){e._valueTracker||(e._valueTracker=wp(e))}function md(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),s="";return e&&(s=fd(e)?e.checked?"true":"false":e.value),e=s,e!==r?(t.setValue(e),!0):!1}function $s(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ya(e,t){var r=t.checked;return pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Co(e,t){var r=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;r=et(t.value!=null?t.value:r),e._wrapperState={initialChecked:s,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function gd(e,t){t=t.checked,t!=null&&Cl(e,"checked",t,!1)}function ja(e,t){gd(e,t);var r=et(t.value),s=t.type;if(r!=null)s==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Na(e,t.type,r):t.hasOwnProperty("defaultValue")&&Na(e,t.type,et(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function To(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Na(e,t,r){(t!=="number"||$s(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Nr=Array.isArray;function Wt(e,t,r,s){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&s&&(e[r].defaultSelected=!0)}else{for(r=""+et(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,s&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ka(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(U(91));return pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function _o(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(U(92));if(Nr(r)){if(1<r.length)throw Error(U(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:et(r)}}function xd(e,t){var r=et(t.value),s=et(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),s!=null&&(e.defaultValue=""+s)}function Lo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function vd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?vd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var hs,yd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,s,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,s,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(hs=hs||document.createElement("div"),hs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=hs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function zr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Sr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bp=["Webkit","ms","Moz","O"];Object.keys(Sr).forEach(function(e){bp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Sr[t]=Sr[e]})});function jd(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Sr.hasOwnProperty(e)&&Sr[e]?(""+t).trim():t+"px"}function Nd(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var s=r.indexOf("--")===0,i=jd(r,t[r],s);r==="float"&&(r="cssFloat"),s?e.setProperty(r,i):e[r]=i}}var Sp=pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ba(e,t){if(t){if(Sp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(U(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(U(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(U(61))}if(t.style!=null&&typeof t.style!="object")throw Error(U(62))}}function Sa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ca=null;function El(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ta=null,Gt=null,Qt=null;function Eo(e){if(e=ss(e)){if(typeof Ta!="function")throw Error(U(280));var t=e.stateNode;t&&(t=ji(t),Ta(e.stateNode,e.type,t))}}function kd(e){Gt?Qt?Qt.push(e):Qt=[e]:Gt=e}function wd(){if(Gt){var e=Gt,t=Qt;if(Qt=Gt=null,Eo(e),t)for(e=0;e<t.length;e++)Eo(t[e])}}function bd(e,t){return e(t)}function Sd(){}var Fi=!1;function Cd(e,t,r){if(Fi)return e(t,r);Fi=!0;try{return bd(e,t,r)}finally{Fi=!1,(Gt!==null||Qt!==null)&&(Sd(),wd())}}function Fr(e,t){var r=e.stateNode;if(r===null)return null;var s=ji(r);if(s===null)return null;r=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(U(231,t,typeof r));return r}var _a=!1;if(_n)try{var pr={};Object.defineProperty(pr,"passive",{get:function(){_a=!0}}),window.addEventListener("test",pr,pr),window.removeEventListener("test",pr,pr)}catch{_a=!1}function Cp(e,t,r,s,i,a,l,o,c){var h=Array.prototype.slice.call(arguments,3);try{t.apply(r,h)}catch(d){this.onError(d)}}var Cr=!1,Bs=null,qs=!1,La=null,Tp={onError:function(e){Cr=!0,Bs=e}};function _p(e,t,r,s,i,a,l,o,c){Cr=!1,Bs=null,Cp.apply(Tp,arguments)}function Lp(e,t,r,s,i,a,l,o,c){if(_p.apply(this,arguments),Cr){if(Cr){var h=Bs;Cr=!1,Bs=null}else throw Error(U(198));qs||(qs=!0,La=h)}}function wt(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Td(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Oo(e){if(wt(e)!==e)throw Error(U(188))}function Ep(e){var t=e.alternate;if(!t){if(t=wt(e),t===null)throw Error(U(188));return t!==e?null:e}for(var r=e,s=t;;){var i=r.return;if(i===null)break;var a=i.alternate;if(a===null){if(s=i.return,s!==null){r=s;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===r)return Oo(i),e;if(a===s)return Oo(i),t;a=a.sibling}throw Error(U(188))}if(r.return!==s.return)r=i,s=a;else{for(var l=!1,o=i.child;o;){if(o===r){l=!0,r=i,s=a;break}if(o===s){l=!0,s=i,r=a;break}o=o.sibling}if(!l){for(o=a.child;o;){if(o===r){l=!0,r=a,s=i;break}if(o===s){l=!0,s=a,r=i;break}o=o.sibling}if(!l)throw Error(U(189))}}if(r.alternate!==s)throw Error(U(190))}if(r.tag!==3)throw Error(U(188));return r.stateNode.current===r?e:t}function _d(e){return e=Ep(e),e!==null?Ld(e):null}function Ld(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ld(e);if(t!==null)return t;e=e.sibling}return null}var Ed=Ze.unstable_scheduleCallback,Ro=Ze.unstable_cancelCallback,Op=Ze.unstable_shouldYield,Rp=Ze.unstable_requestPaint,je=Ze.unstable_now,Pp=Ze.unstable_getCurrentPriorityLevel,Ol=Ze.unstable_ImmediatePriority,Od=Ze.unstable_UserBlockingPriority,Hs=Ze.unstable_NormalPriority,Ip=Ze.unstable_LowPriority,Rd=Ze.unstable_IdlePriority,gi=null,yn=null;function Mp(e){if(yn&&typeof yn.onCommitFiberRoot=="function")try{yn.onCommitFiberRoot(gi,e,void 0,(e.current.flags&128)===128)}catch{}}var pn=Math.clz32?Math.clz32:Ap,zp=Math.log,Fp=Math.LN2;function Ap(e){return e>>>=0,e===0?32:31-(zp(e)/Fp|0)|0}var ps=64,fs=4194304;function kr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Us(e,t){var r=e.pendingLanes;if(r===0)return 0;var s=0,i=e.suspendedLanes,a=e.pingedLanes,l=r&268435455;if(l!==0){var o=l&~i;o!==0?s=kr(o):(a&=l,a!==0&&(s=kr(a)))}else l=r&~i,l!==0?s=kr(l):a!==0&&(s=kr(a));if(s===0)return 0;if(t!==0&&t!==s&&!(t&i)&&(i=s&-s,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(s&4&&(s|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)r=31-pn(t),i=1<<r,s|=e[r],t&=~i;return s}function Vp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dp(e,t){for(var r=e.suspendedLanes,s=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var l=31-pn(a),o=1<<l,c=i[l];c===-1?(!(o&r)||o&s)&&(i[l]=Vp(o,t)):c<=t&&(e.expiredLanes|=o),a&=~o}}function Ea(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Pd(){var e=ps;return ps<<=1,!(ps&4194240)&&(ps=64),e}function Ai(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function ts(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-pn(t),e[t]=r}function $p(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-pn(r),a=1<<i;t[i]=0,s[i]=-1,e[i]=-1,r&=~a}}function Rl(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var s=31-pn(r),i=1<<s;i&t|e[s]&t&&(e[s]|=t),r&=~i}}var se=0;function Id(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Md,Pl,zd,Fd,Ad,Oa=!1,ms=[],Hn=null,Un=null,Kn=null,Ar=new Map,Vr=new Map,An=[],Bp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Po(e,t){switch(e){case"focusin":case"focusout":Hn=null;break;case"dragenter":case"dragleave":Un=null;break;case"mouseover":case"mouseout":Kn=null;break;case"pointerover":case"pointerout":Ar.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vr.delete(t.pointerId)}}function fr(e,t,r,s,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:s,nativeEvent:a,targetContainers:[i]},t!==null&&(t=ss(t),t!==null&&Pl(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function qp(e,t,r,s,i){switch(t){case"focusin":return Hn=fr(Hn,e,t,r,s,i),!0;case"dragenter":return Un=fr(Un,e,t,r,s,i),!0;case"mouseover":return Kn=fr(Kn,e,t,r,s,i),!0;case"pointerover":var a=i.pointerId;return Ar.set(a,fr(Ar.get(a)||null,e,t,r,s,i)),!0;case"gotpointercapture":return a=i.pointerId,Vr.set(a,fr(Vr.get(a)||null,e,t,r,s,i)),!0}return!1}function Vd(e){var t=dt(e.target);if(t!==null){var r=wt(t);if(r!==null){if(t=r.tag,t===13){if(t=Td(r),t!==null){e.blockedOn=t,Ad(e.priority,function(){zd(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Es(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Ra(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var s=new r.constructor(r.type,r);Ca=s,r.target.dispatchEvent(s),Ca=null}else return t=ss(r),t!==null&&Pl(t),e.blockedOn=r,!1;t.shift()}return!0}function Io(e,t,r){Es(e)&&r.delete(t)}function Hp(){Oa=!1,Hn!==null&&Es(Hn)&&(Hn=null),Un!==null&&Es(Un)&&(Un=null),Kn!==null&&Es(Kn)&&(Kn=null),Ar.forEach(Io),Vr.forEach(Io)}function mr(e,t){e.blockedOn===t&&(e.blockedOn=null,Oa||(Oa=!0,Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority,Hp)))}function Dr(e){function t(i){return mr(i,e)}if(0<ms.length){mr(ms[0],e);for(var r=1;r<ms.length;r++){var s=ms[r];s.blockedOn===e&&(s.blockedOn=null)}}for(Hn!==null&&mr(Hn,e),Un!==null&&mr(Un,e),Kn!==null&&mr(Kn,e),Ar.forEach(t),Vr.forEach(t),r=0;r<An.length;r++)s=An[r],s.blockedOn===e&&(s.blockedOn=null);for(;0<An.length&&(r=An[0],r.blockedOn===null);)Vd(r),r.blockedOn===null&&An.shift()}var Xt=Rn.ReactCurrentBatchConfig,Ks=!0;function Up(e,t,r,s){var i=se,a=Xt.transition;Xt.transition=null;try{se=1,Il(e,t,r,s)}finally{se=i,Xt.transition=a}}function Kp(e,t,r,s){var i=se,a=Xt.transition;Xt.transition=null;try{se=4,Il(e,t,r,s)}finally{se=i,Xt.transition=a}}function Il(e,t,r,s){if(Ks){var i=Ra(e,t,r,s);if(i===null)Gi(e,t,s,Ws,r),Po(e,s);else if(qp(i,e,t,r,s))s.stopPropagation();else if(Po(e,s),t&4&&-1<Bp.indexOf(e)){for(;i!==null;){var a=ss(i);if(a!==null&&Md(a),a=Ra(e,t,r,s),a===null&&Gi(e,t,s,Ws,r),a===i)break;i=a}i!==null&&s.stopPropagation()}else Gi(e,t,s,null,r)}}var Ws=null;function Ra(e,t,r,s){if(Ws=null,e=El(s),e=dt(e),e!==null)if(t=wt(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Td(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ws=e,null}function Dd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Pp()){case Ol:return 1;case Od:return 4;case Hs:case Ip:return 16;case Rd:return 536870912;default:return 16}default:return 16}}var Dn=null,Ml=null,Os=null;function $d(){if(Os)return Os;var e,t=Ml,r=t.length,s,i="value"in Dn?Dn.value:Dn.textContent,a=i.length;for(e=0;e<r&&t[e]===i[e];e++);var l=r-e;for(s=1;s<=l&&t[r-s]===i[a-s];s++);return Os=i.slice(e,1<s?1-s:void 0)}function Rs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function gs(){return!0}function Mo(){return!1}function nn(e){function t(r,s,i,a,l){this._reactName=r,this._targetInst=i,this.type=s,this.nativeEvent=a,this.target=l,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(r=e[o],this[o]=r?r(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?gs:Mo,this.isPropagationStopped=Mo,this}return pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=gs)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=gs)},persist:function(){},isPersistent:gs}),t}var lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zl=nn(lr),rs=pe({},lr,{view:0,detail:0}),Wp=nn(rs),Vi,Di,gr,xi=pe({},rs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gr&&(gr&&e.type==="mousemove"?(Vi=e.screenX-gr.screenX,Di=e.screenY-gr.screenY):Di=Vi=0,gr=e),Vi)},movementY:function(e){return"movementY"in e?e.movementY:Di}}),zo=nn(xi),Gp=pe({},xi,{dataTransfer:0}),Qp=nn(Gp),Xp=pe({},rs,{relatedTarget:0}),$i=nn(Xp),Yp=pe({},lr,{animationName:0,elapsedTime:0,pseudoElement:0}),Jp=nn(Yp),Zp=pe({},lr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ef=nn(Zp),nf=pe({},lr,{data:0}),Fo=nn(nf),tf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function af(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=sf[e])?!!t[e]:!1}function Fl(){return af}var lf=pe({},rs,{key:function(e){if(e.key){var t=tf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Rs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fl,charCode:function(e){return e.type==="keypress"?Rs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Rs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),of=nn(lf),cf=pe({},xi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ao=nn(cf),df=pe({},rs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fl}),uf=nn(df),hf=pe({},lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),pf=nn(hf),ff=pe({},xi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mf=nn(ff),gf=[9,13,27,32],Al=_n&&"CompositionEvent"in window,Tr=null;_n&&"documentMode"in document&&(Tr=document.documentMode);var xf=_n&&"TextEvent"in window&&!Tr,Bd=_n&&(!Al||Tr&&8<Tr&&11>=Tr),Vo=" ",Do=!1;function qd(e,t){switch(e){case"keyup":return gf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ot=!1;function vf(e,t){switch(e){case"compositionend":return Hd(t);case"keypress":return t.which!==32?null:(Do=!0,Vo);case"textInput":return e=t.data,e===Vo&&Do?null:e;default:return null}}function yf(e,t){if(Ot)return e==="compositionend"||!Al&&qd(e,t)?(e=$d(),Os=Ml=Dn=null,Ot=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Bd&&t.locale!=="ko"?null:t.data;default:return null}}var jf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $o(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!jf[e.type]:t==="textarea"}function Ud(e,t,r,s){kd(s),t=Gs(t,"onChange"),0<t.length&&(r=new zl("onChange","change",null,r,s),e.push({event:r,listeners:t}))}var _r=null,$r=null;function Nf(e){tu(e,0)}function vi(e){var t=It(e);if(md(t))return e}function kf(e,t){if(e==="change")return t}var Kd=!1;if(_n){var Bi;if(_n){var qi="oninput"in document;if(!qi){var Bo=document.createElement("div");Bo.setAttribute("oninput","return;"),qi=typeof Bo.oninput=="function"}Bi=qi}else Bi=!1;Kd=Bi&&(!document.documentMode||9<document.documentMode)}function qo(){_r&&(_r.detachEvent("onpropertychange",Wd),$r=_r=null)}function Wd(e){if(e.propertyName==="value"&&vi($r)){var t=[];Ud(t,$r,e,El(e)),Cd(Nf,t)}}function wf(e,t,r){e==="focusin"?(qo(),_r=t,$r=r,_r.attachEvent("onpropertychange",Wd)):e==="focusout"&&qo()}function bf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vi($r)}function Sf(e,t){if(e==="click")return vi(t)}function Cf(e,t){if(e==="input"||e==="change")return vi(t)}function Tf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var mn=typeof Object.is=="function"?Object.is:Tf;function Br(e,t){if(mn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(s=0;s<r.length;s++){var i=r[s];if(!fa.call(t,i)||!mn(e[i],t[i]))return!1}return!0}function Ho(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Uo(e,t){var r=Ho(e);e=0;for(var s;r;){if(r.nodeType===3){if(s=e+r.textContent.length,e<=t&&s>=t)return{node:r,offset:t-e};e=s}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Ho(r)}}function Gd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Gd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Qd(){for(var e=window,t=$s();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=$s(e.document)}return t}function Vl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function _f(e){var t=Qd(),r=e.focusedElem,s=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Gd(r.ownerDocument.documentElement,r)){if(s!==null&&Vl(r)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,a=Math.min(s.start,i);s=s.end===void 0?a:Math.min(s.end,i),!e.extend&&a>s&&(i=s,s=a,a=i),i=Uo(r,a);var l=Uo(r,s);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>s?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Lf=_n&&"documentMode"in document&&11>=document.documentMode,Rt=null,Pa=null,Lr=null,Ia=!1;function Ko(e,t,r){var s=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Ia||Rt==null||Rt!==$s(s)||(s=Rt,"selectionStart"in s&&Vl(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Lr&&Br(Lr,s)||(Lr=s,s=Gs(Pa,"onSelect"),0<s.length&&(t=new zl("onSelect","select",null,t,r),e.push({event:t,listeners:s}),t.target=Rt)))}function xs(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Pt={animationend:xs("Animation","AnimationEnd"),animationiteration:xs("Animation","AnimationIteration"),animationstart:xs("Animation","AnimationStart"),transitionend:xs("Transition","TransitionEnd")},Hi={},Xd={};_n&&(Xd=document.createElement("div").style,"AnimationEvent"in window||(delete Pt.animationend.animation,delete Pt.animationiteration.animation,delete Pt.animationstart.animation),"TransitionEvent"in window||delete Pt.transitionend.transition);function yi(e){if(Hi[e])return Hi[e];if(!Pt[e])return e;var t=Pt[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Xd)return Hi[e]=t[r];return e}var Yd=yi("animationend"),Jd=yi("animationiteration"),Zd=yi("animationstart"),eu=yi("transitionend"),nu=new Map,Wo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tt(e,t){nu.set(e,t),kt(t,[e])}for(var Ui=0;Ui<Wo.length;Ui++){var Ki=Wo[Ui],Ef=Ki.toLowerCase(),Of=Ki[0].toUpperCase()+Ki.slice(1);tt(Ef,"on"+Of)}tt(Yd,"onAnimationEnd");tt(Jd,"onAnimationIteration");tt(Zd,"onAnimationStart");tt("dblclick","onDoubleClick");tt("focusin","onFocus");tt("focusout","onBlur");tt(eu,"onTransitionEnd");Zt("onMouseEnter",["mouseout","mouseover"]);Zt("onMouseLeave",["mouseout","mouseover"]);Zt("onPointerEnter",["pointerout","pointerover"]);Zt("onPointerLeave",["pointerout","pointerover"]);kt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));kt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));kt("onBeforeInput",["compositionend","keypress","textInput","paste"]);kt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));kt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));kt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rf=new Set("cancel close invalid load scroll toggle".split(" ").concat(wr));function Go(e,t,r){var s=e.type||"unknown-event";e.currentTarget=r,Lp(s,t,void 0,e),e.currentTarget=null}function tu(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var s=e[r],i=s.event;s=s.listeners;e:{var a=void 0;if(t)for(var l=s.length-1;0<=l;l--){var o=s[l],c=o.instance,h=o.currentTarget;if(o=o.listener,c!==a&&i.isPropagationStopped())break e;Go(i,o,h),a=c}else for(l=0;l<s.length;l++){if(o=s[l],c=o.instance,h=o.currentTarget,o=o.listener,c!==a&&i.isPropagationStopped())break e;Go(i,o,h),a=c}}}if(qs)throw e=La,qs=!1,La=null,e}function le(e,t){var r=t[Va];r===void 0&&(r=t[Va]=new Set);var s=e+"__bubble";r.has(s)||(ru(t,e,2,!1),r.add(s))}function Wi(e,t,r){var s=0;t&&(s|=4),ru(r,e,s,t)}var vs="_reactListening"+Math.random().toString(36).slice(2);function qr(e){if(!e[vs]){e[vs]=!0,dd.forEach(function(r){r!=="selectionchange"&&(Rf.has(r)||Wi(r,!1,e),Wi(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[vs]||(t[vs]=!0,Wi("selectionchange",!1,t))}}function ru(e,t,r,s){switch(Dd(t)){case 1:var i=Up;break;case 4:i=Kp;break;default:i=Il}r=i.bind(null,t,r,e),i=void 0,!_a||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),s?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function Gi(e,t,r,s,i){var a=s;if(!(t&1)&&!(t&2)&&s!==null)e:for(;;){if(s===null)return;var l=s.tag;if(l===3||l===4){var o=s.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(l===4)for(l=s.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;l=l.return}for(;o!==null;){if(l=dt(o),l===null)return;if(c=l.tag,c===5||c===6){s=a=l;continue e}o=o.parentNode}}s=s.return}Cd(function(){var h=a,d=El(r),p=[];e:{var m=nu.get(e);if(m!==void 0){var b=zl,w=e;switch(e){case"keypress":if(Rs(r)===0)break e;case"keydown":case"keyup":b=of;break;case"focusin":w="focus",b=$i;break;case"focusout":w="blur",b=$i;break;case"beforeblur":case"afterblur":b=$i;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=zo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=Qp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=uf;break;case Yd:case Jd:case Zd:b=Jp;break;case eu:b=pf;break;case"scroll":b=Wp;break;case"wheel":b=mf;break;case"copy":case"cut":case"paste":b=ef;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Ao}var k=(t&4)!==0,j=!k&&e==="scroll",f=k?m!==null?m+"Capture":null:m;k=[];for(var g=h,x;g!==null;){x=g;var E=x.stateNode;if(x.tag===5&&E!==null&&(x=E,f!==null&&(E=Fr(g,f),E!=null&&k.push(Hr(g,E,x)))),j)break;g=g.return}0<k.length&&(m=new b(m,w,null,r,d),p.push({event:m,listeners:k}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",m&&r!==Ca&&(w=r.relatedTarget||r.fromElement)&&(dt(w)||w[Ln]))break e;if((b||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,b?(w=r.relatedTarget||r.toElement,b=h,w=w?dt(w):null,w!==null&&(j=wt(w),w!==j||w.tag!==5&&w.tag!==6)&&(w=null)):(b=null,w=h),b!==w)){if(k=zo,E="onMouseLeave",f="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(k=Ao,E="onPointerLeave",f="onPointerEnter",g="pointer"),j=b==null?m:It(b),x=w==null?m:It(w),m=new k(E,g+"leave",b,r,d),m.target=j,m.relatedTarget=x,E=null,dt(d)===h&&(k=new k(f,g+"enter",w,r,d),k.target=x,k.relatedTarget=j,E=k),j=E,b&&w)n:{for(k=b,f=w,g=0,x=k;x;x=Tt(x))g++;for(x=0,E=f;E;E=Tt(E))x++;for(;0<g-x;)k=Tt(k),g--;for(;0<x-g;)f=Tt(f),x--;for(;g--;){if(k===f||f!==null&&k===f.alternate)break n;k=Tt(k),f=Tt(f)}k=null}else k=null;b!==null&&Qo(p,m,b,k,!1),w!==null&&j!==null&&Qo(p,j,w,k,!0)}}e:{if(m=h?It(h):window,b=m.nodeName&&m.nodeName.toLowerCase(),b==="select"||b==="input"&&m.type==="file")var y=kf;else if($o(m))if(Kd)y=Cf;else{y=bf;var F=wf}else(b=m.nodeName)&&b.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(y=Sf);if(y&&(y=y(e,h))){Ud(p,y,r,d);break e}F&&F(e,m,h),e==="focusout"&&(F=m._wrapperState)&&F.controlled&&m.type==="number"&&Na(m,"number",m.value)}switch(F=h?It(h):window,e){case"focusin":($o(F)||F.contentEditable==="true")&&(Rt=F,Pa=h,Lr=null);break;case"focusout":Lr=Pa=Rt=null;break;case"mousedown":Ia=!0;break;case"contextmenu":case"mouseup":case"dragend":Ia=!1,Ko(p,r,d);break;case"selectionchange":if(Lf)break;case"keydown":case"keyup":Ko(p,r,d)}var T;if(Al)e:{switch(e){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else Ot?qd(e,r)&&(D="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(D="onCompositionStart");D&&(Bd&&r.locale!=="ko"&&(Ot||D!=="onCompositionStart"?D==="onCompositionEnd"&&Ot&&(T=$d()):(Dn=d,Ml="value"in Dn?Dn.value:Dn.textContent,Ot=!0)),F=Gs(h,D),0<F.length&&(D=new Fo(D,e,null,r,d),p.push({event:D,listeners:F}),T?D.data=T:(T=Hd(r),T!==null&&(D.data=T)))),(T=xf?vf(e,r):yf(e,r))&&(h=Gs(h,"onBeforeInput"),0<h.length&&(d=new Fo("onBeforeInput","beforeinput",null,r,d),p.push({event:d,listeners:h}),d.data=T))}tu(p,t)})}function Hr(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Gs(e,t){for(var r=t+"Capture",s=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Fr(e,r),a!=null&&s.unshift(Hr(e,a,i)),a=Fr(e,t),a!=null&&s.push(Hr(e,a,i))),e=e.return}return s}function Tt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Qo(e,t,r,s,i){for(var a=t._reactName,l=[];r!==null&&r!==s;){var o=r,c=o.alternate,h=o.stateNode;if(c!==null&&c===s)break;o.tag===5&&h!==null&&(o=h,i?(c=Fr(r,a),c!=null&&l.unshift(Hr(r,c,o))):i||(c=Fr(r,a),c!=null&&l.push(Hr(r,c,o)))),r=r.return}l.length!==0&&e.push({event:t,listeners:l})}var Pf=/\r\n?/g,If=/\u0000|\uFFFD/g;function Xo(e){return(typeof e=="string"?e:""+e).replace(Pf,`
`).replace(If,"")}function ys(e,t,r){if(t=Xo(t),Xo(e)!==t&&r)throw Error(U(425))}function Qs(){}var Ma=null,za=null;function Fa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Aa=typeof setTimeout=="function"?setTimeout:void 0,Mf=typeof clearTimeout=="function"?clearTimeout:void 0,Yo=typeof Promise=="function"?Promise:void 0,zf=typeof queueMicrotask=="function"?queueMicrotask:typeof Yo<"u"?function(e){return Yo.resolve(null).then(e).catch(Ff)}:Aa;function Ff(e){setTimeout(function(){throw e})}function Qi(e,t){var r=t,s=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(s===0){e.removeChild(i),Dr(t);return}s--}else r!=="$"&&r!=="$?"&&r!=="$!"||s++;r=i}while(r);Dr(t)}function Wn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Jo(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var or=Math.random().toString(36).slice(2),vn="__reactFiber$"+or,Ur="__reactProps$"+or,Ln="__reactContainer$"+or,Va="__reactEvents$"+or,Af="__reactListeners$"+or,Vf="__reactHandles$"+or;function dt(e){var t=e[vn];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Ln]||r[vn]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Jo(e);e!==null;){if(r=e[vn])return r;e=Jo(e)}return t}e=r,r=e.parentNode}return null}function ss(e){return e=e[vn]||e[Ln],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function It(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(U(33))}function ji(e){return e[Ur]||null}var Da=[],Mt=-1;function rt(e){return{current:e}}function oe(e){0>Mt||(e.current=Da[Mt],Da[Mt]=null,Mt--)}function ae(e,t){Mt++,Da[Mt]=e.current,e.current=t}var nt={},Me=rt(nt),Ke=rt(!1),xt=nt;function er(e,t){var r=e.type.contextTypes;if(!r)return nt;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in r)i[a]=t[a];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function We(e){return e=e.childContextTypes,e!=null}function Xs(){oe(Ke),oe(Me)}function Zo(e,t,r){if(Me.current!==nt)throw Error(U(168));ae(Me,t),ae(Ke,r)}function su(e,t,r){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return r;s=s.getChildContext();for(var i in s)if(!(i in t))throw Error(U(108,kp(e)||"Unknown",i));return pe({},r,s)}function Ys(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||nt,xt=Me.current,ae(Me,e),ae(Ke,Ke.current),!0}function ec(e,t,r){var s=e.stateNode;if(!s)throw Error(U(169));r?(e=su(e,t,xt),s.__reactInternalMemoizedMergedChildContext=e,oe(Ke),oe(Me),ae(Me,e)):oe(Ke),ae(Ke,r)}var wn=null,Ni=!1,Xi=!1;function iu(e){wn===null?wn=[e]:wn.push(e)}function Df(e){Ni=!0,iu(e)}function st(){if(!Xi&&wn!==null){Xi=!0;var e=0,t=se;try{var r=wn;for(se=1;e<r.length;e++){var s=r[e];do s=s(!0);while(s!==null)}wn=null,Ni=!1}catch(i){throw wn!==null&&(wn=wn.slice(e+1)),Ed(Ol,st),i}finally{se=t,Xi=!1}}return null}var zt=[],Ft=0,Js=null,Zs=0,tn=[],rn=0,vt=null,Sn=1,Cn="";function ot(e,t){zt[Ft++]=Zs,zt[Ft++]=Js,Js=e,Zs=t}function au(e,t,r){tn[rn++]=Sn,tn[rn++]=Cn,tn[rn++]=vt,vt=e;var s=Sn;e=Cn;var i=32-pn(s)-1;s&=~(1<<i),r+=1;var a=32-pn(t)+i;if(30<a){var l=i-i%5;a=(s&(1<<l)-1).toString(32),s>>=l,i-=l,Sn=1<<32-pn(t)+i|r<<i|s,Cn=a+e}else Sn=1<<a|r<<i|s,Cn=e}function Dl(e){e.return!==null&&(ot(e,1),au(e,1,0))}function $l(e){for(;e===Js;)Js=zt[--Ft],zt[Ft]=null,Zs=zt[--Ft],zt[Ft]=null;for(;e===vt;)vt=tn[--rn],tn[rn]=null,Cn=tn[--rn],tn[rn]=null,Sn=tn[--rn],tn[rn]=null}var Je=null,Ye=null,ce=!1,hn=null;function lu(e,t){var r=sn(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function nc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Je=e,Ye=Wn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Je=e,Ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=vt!==null?{id:Sn,overflow:Cn}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=sn(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Je=e,Ye=null,!0):!1;default:return!1}}function $a(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ba(e){if(ce){var t=Ye;if(t){var r=t;if(!nc(e,t)){if($a(e))throw Error(U(418));t=Wn(r.nextSibling);var s=Je;t&&nc(e,t)?lu(s,r):(e.flags=e.flags&-4097|2,ce=!1,Je=e)}}else{if($a(e))throw Error(U(418));e.flags=e.flags&-4097|2,ce=!1,Je=e}}}function tc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Je=e}function js(e){if(e!==Je)return!1;if(!ce)return tc(e),ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Fa(e.type,e.memoizedProps)),t&&(t=Ye)){if($a(e))throw ou(),Error(U(418));for(;t;)lu(e,t),t=Wn(t.nextSibling)}if(tc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(U(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Ye=Wn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Ye=null}}else Ye=Je?Wn(e.stateNode.nextSibling):null;return!0}function ou(){for(var e=Ye;e;)e=Wn(e.nextSibling)}function nr(){Ye=Je=null,ce=!1}function Bl(e){hn===null?hn=[e]:hn.push(e)}var $f=Rn.ReactCurrentBatchConfig;function xr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(U(309));var s=r.stateNode}if(!s)throw Error(U(147,e));var i=s,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(l){var o=i.refs;l===null?delete o[a]:o[a]=l},t._stringRef=a,t)}if(typeof e!="string")throw Error(U(284));if(!r._owner)throw Error(U(290,e))}return e}function Ns(e,t){throw e=Object.prototype.toString.call(t),Error(U(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function rc(e){var t=e._init;return t(e._payload)}function cu(e){function t(f,g){if(e){var x=f.deletions;x===null?(f.deletions=[g],f.flags|=16):x.push(g)}}function r(f,g){if(!e)return null;for(;g!==null;)t(f,g),g=g.sibling;return null}function s(f,g){for(f=new Map;g!==null;)g.key!==null?f.set(g.key,g):f.set(g.index,g),g=g.sibling;return f}function i(f,g){return f=Yn(f,g),f.index=0,f.sibling=null,f}function a(f,g,x){return f.index=x,e?(x=f.alternate,x!==null?(x=x.index,x<g?(f.flags|=2,g):x):(f.flags|=2,g)):(f.flags|=1048576,g)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function o(f,g,x,E){return g===null||g.tag!==6?(g=ra(x,f.mode,E),g.return=f,g):(g=i(g,x),g.return=f,g)}function c(f,g,x,E){var y=x.type;return y===Et?d(f,g,x.props.children,E,x.key):g!==null&&(g.elementType===y||typeof y=="object"&&y!==null&&y.$$typeof===zn&&rc(y)===g.type)?(E=i(g,x.props),E.ref=xr(f,g,x),E.return=f,E):(E=Vs(x.type,x.key,x.props,null,f.mode,E),E.ref=xr(f,g,x),E.return=f,E)}function h(f,g,x,E){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=sa(x,f.mode,E),g.return=f,g):(g=i(g,x.children||[]),g.return=f,g)}function d(f,g,x,E,y){return g===null||g.tag!==7?(g=gt(x,f.mode,E,y),g.return=f,g):(g=i(g,x),g.return=f,g)}function p(f,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=ra(""+g,f.mode,x),g.return=f,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ds:return x=Vs(g.type,g.key,g.props,null,f.mode,x),x.ref=xr(f,null,g),x.return=f,x;case Lt:return g=sa(g,f.mode,x),g.return=f,g;case zn:var E=g._init;return p(f,E(g._payload),x)}if(Nr(g)||hr(g))return g=gt(g,f.mode,x,null),g.return=f,g;Ns(f,g)}return null}function m(f,g,x,E){var y=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return y!==null?null:o(f,g,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ds:return x.key===y?c(f,g,x,E):null;case Lt:return x.key===y?h(f,g,x,E):null;case zn:return y=x._init,m(f,g,y(x._payload),E)}if(Nr(x)||hr(x))return y!==null?null:d(f,g,x,E,null);Ns(f,x)}return null}function b(f,g,x,E,y){if(typeof E=="string"&&E!==""||typeof E=="number")return f=f.get(x)||null,o(g,f,""+E,y);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ds:return f=f.get(E.key===null?x:E.key)||null,c(g,f,E,y);case Lt:return f=f.get(E.key===null?x:E.key)||null,h(g,f,E,y);case zn:var F=E._init;return b(f,g,x,F(E._payload),y)}if(Nr(E)||hr(E))return f=f.get(x)||null,d(g,f,E,y,null);Ns(g,E)}return null}function w(f,g,x,E){for(var y=null,F=null,T=g,D=g=0,A=null;T!==null&&D<x.length;D++){T.index>D?(A=T,T=null):A=T.sibling;var I=m(f,T,x[D],E);if(I===null){T===null&&(T=A);break}e&&T&&I.alternate===null&&t(f,T),g=a(I,g,D),F===null?y=I:F.sibling=I,F=I,T=A}if(D===x.length)return r(f,T),ce&&ot(f,D),y;if(T===null){for(;D<x.length;D++)T=p(f,x[D],E),T!==null&&(g=a(T,g,D),F===null?y=T:F.sibling=T,F=T);return ce&&ot(f,D),y}for(T=s(f,T);D<x.length;D++)A=b(T,f,D,x[D],E),A!==null&&(e&&A.alternate!==null&&T.delete(A.key===null?D:A.key),g=a(A,g,D),F===null?y=A:F.sibling=A,F=A);return e&&T.forEach(function(H){return t(f,H)}),ce&&ot(f,D),y}function k(f,g,x,E){var y=hr(x);if(typeof y!="function")throw Error(U(150));if(x=y.call(x),x==null)throw Error(U(151));for(var F=y=null,T=g,D=g=0,A=null,I=x.next();T!==null&&!I.done;D++,I=x.next()){T.index>D?(A=T,T=null):A=T.sibling;var H=m(f,T,I.value,E);if(H===null){T===null&&(T=A);break}e&&T&&H.alternate===null&&t(f,T),g=a(H,g,D),F===null?y=H:F.sibling=H,F=H,T=A}if(I.done)return r(f,T),ce&&ot(f,D),y;if(T===null){for(;!I.done;D++,I=x.next())I=p(f,I.value,E),I!==null&&(g=a(I,g,D),F===null?y=I:F.sibling=I,F=I);return ce&&ot(f,D),y}for(T=s(f,T);!I.done;D++,I=x.next())I=b(T,f,D,I.value,E),I!==null&&(e&&I.alternate!==null&&T.delete(I.key===null?D:I.key),g=a(I,g,D),F===null?y=I:F.sibling=I,F=I);return e&&T.forEach(function(K){return t(f,K)}),ce&&ot(f,D),y}function j(f,g,x,E){if(typeof x=="object"&&x!==null&&x.type===Et&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ds:e:{for(var y=x.key,F=g;F!==null;){if(F.key===y){if(y=x.type,y===Et){if(F.tag===7){r(f,F.sibling),g=i(F,x.props.children),g.return=f,f=g;break e}}else if(F.elementType===y||typeof y=="object"&&y!==null&&y.$$typeof===zn&&rc(y)===F.type){r(f,F.sibling),g=i(F,x.props),g.ref=xr(f,F,x),g.return=f,f=g;break e}r(f,F);break}else t(f,F);F=F.sibling}x.type===Et?(g=gt(x.props.children,f.mode,E,x.key),g.return=f,f=g):(E=Vs(x.type,x.key,x.props,null,f.mode,E),E.ref=xr(f,g,x),E.return=f,f=E)}return l(f);case Lt:e:{for(F=x.key;g!==null;){if(g.key===F)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){r(f,g.sibling),g=i(g,x.children||[]),g.return=f,f=g;break e}else{r(f,g);break}else t(f,g);g=g.sibling}g=sa(x,f.mode,E),g.return=f,f=g}return l(f);case zn:return F=x._init,j(f,g,F(x._payload),E)}if(Nr(x))return w(f,g,x,E);if(hr(x))return k(f,g,x,E);Ns(f,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(r(f,g.sibling),g=i(g,x),g.return=f,f=g):(r(f,g),g=ra(x,f.mode,E),g.return=f,f=g),l(f)):r(f,g)}return j}var tr=cu(!0),du=cu(!1),ei=rt(null),ni=null,At=null,ql=null;function Hl(){ql=At=ni=null}function Ul(e){var t=ei.current;oe(ei),e._currentValue=t}function qa(e,t,r){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===r)break;e=e.return}}function Yt(e,t){ni=e,ql=At=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ue=!0),e.firstContext=null)}function ln(e){var t=e._currentValue;if(ql!==e)if(e={context:e,memoizedValue:t,next:null},At===null){if(ni===null)throw Error(U(308));At=e,ni.dependencies={lanes:0,firstContext:e}}else At=At.next=e;return t}var ut=null;function Kl(e){ut===null?ut=[e]:ut.push(e)}function uu(e,t,r,s){var i=t.interleaved;return i===null?(r.next=r,Kl(t)):(r.next=i.next,i.next=r),t.interleaved=r,En(e,s)}function En(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Fn=!1;function Wl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Tn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Gn(e,t,r){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,te&2){var i=s.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),s.pending=t,En(e,r)}return i=s.interleaved,i===null?(t.next=t,Kl(s)):(t.next=i.next,i.next=t),s.interleaved=t,En(e,r)}function Ps(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,Rl(e,r)}}function sc(e,t){var r=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,r===s)){var i=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var l={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?i=a=l:a=a.next=l,r=r.next}while(r!==null);a===null?i=a=t:a=a.next=t}else i=a=t;r={baseState:s.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:s.shared,effects:s.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function ti(e,t,r,s){var i=e.updateQueue;Fn=!1;var a=i.firstBaseUpdate,l=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var c=o,h=c.next;c.next=null,l===null?a=h:l.next=h,l=c;var d=e.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==l&&(o===null?d.firstBaseUpdate=h:o.next=h,d.lastBaseUpdate=c))}if(a!==null){var p=i.baseState;l=0,d=h=c=null,o=a;do{var m=o.lane,b=o.eventTime;if((s&m)===m){d!==null&&(d=d.next={eventTime:b,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var w=e,k=o;switch(m=t,b=r,k.tag){case 1:if(w=k.payload,typeof w=="function"){p=w.call(b,p,m);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,m=typeof w=="function"?w.call(b,p,m):w,m==null)break e;p=pe({},p,m);break e;case 2:Fn=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[o]:m.push(o))}else b={eventTime:b,lane:m,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(h=d=b,c=p):d=d.next=b,l|=m;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;m=o,o=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(c=p),i.baseState=c,i.firstBaseUpdate=h,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);jt|=l,e.lanes=l,e.memoizedState=p}}function ic(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],i=s.callback;if(i!==null){if(s.callback=null,s=r,typeof i!="function")throw Error(U(191,i));i.call(s)}}}var is={},jn=rt(is),Kr=rt(is),Wr=rt(is);function ht(e){if(e===is)throw Error(U(174));return e}function Gl(e,t){switch(ae(Wr,t),ae(Kr,e),ae(jn,is),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:wa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=wa(t,e)}oe(jn),ae(jn,t)}function rr(){oe(jn),oe(Kr),oe(Wr)}function pu(e){ht(Wr.current);var t=ht(jn.current),r=wa(t,e.type);t!==r&&(ae(Kr,e),ae(jn,r))}function Ql(e){Kr.current===e&&(oe(jn),oe(Kr))}var ue=rt(0);function ri(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Yi=[];function Xl(){for(var e=0;e<Yi.length;e++)Yi[e]._workInProgressVersionPrimary=null;Yi.length=0}var Is=Rn.ReactCurrentDispatcher,Ji=Rn.ReactCurrentBatchConfig,yt=0,he=null,we=null,Se=null,si=!1,Er=!1,Gr=0,Bf=0;function Re(){throw Error(U(321))}function Yl(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!mn(e[r],t[r]))return!1;return!0}function Jl(e,t,r,s,i,a){if(yt=a,he=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Is.current=e===null||e.memoizedState===null?Kf:Wf,e=r(s,i),Er){a=0;do{if(Er=!1,Gr=0,25<=a)throw Error(U(301));a+=1,Se=we=null,t.updateQueue=null,Is.current=Gf,e=r(s,i)}while(Er)}if(Is.current=ii,t=we!==null&&we.next!==null,yt=0,Se=we=he=null,si=!1,t)throw Error(U(300));return e}function Zl(){var e=Gr!==0;return Gr=0,e}function xn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?he.memoizedState=Se=e:Se=Se.next=e,Se}function on(){if(we===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=we.next;var t=Se===null?he.memoizedState:Se.next;if(t!==null)Se=t,we=e;else{if(e===null)throw Error(U(310));we=e,e={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},Se===null?he.memoizedState=Se=e:Se=Se.next=e}return Se}function Qr(e,t){return typeof t=="function"?t(e):t}function Zi(e){var t=on(),r=t.queue;if(r===null)throw Error(U(311));r.lastRenderedReducer=e;var s=we,i=s.baseQueue,a=r.pending;if(a!==null){if(i!==null){var l=i.next;i.next=a.next,a.next=l}s.baseQueue=i=a,r.pending=null}if(i!==null){a=i.next,s=s.baseState;var o=l=null,c=null,h=a;do{var d=h.lane;if((yt&d)===d)c!==null&&(c=c.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),s=h.hasEagerState?h.eagerState:e(s,h.action);else{var p={lane:d,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};c===null?(o=c=p,l=s):c=c.next=p,he.lanes|=d,jt|=d}h=h.next}while(h!==null&&h!==a);c===null?l=s:c.next=o,mn(s,t.memoizedState)||(Ue=!0),t.memoizedState=s,t.baseState=l,t.baseQueue=c,r.lastRenderedState=s}if(e=r.interleaved,e!==null){i=e;do a=i.lane,he.lanes|=a,jt|=a,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function ea(e){var t=on(),r=t.queue;if(r===null)throw Error(U(311));r.lastRenderedReducer=e;var s=r.dispatch,i=r.pending,a=t.memoizedState;if(i!==null){r.pending=null;var l=i=i.next;do a=e(a,l.action),l=l.next;while(l!==i);mn(a,t.memoizedState)||(Ue=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),r.lastRenderedState=a}return[a,s]}function fu(){}function mu(e,t){var r=he,s=on(),i=t(),a=!mn(s.memoizedState,i);if(a&&(s.memoizedState=i,Ue=!0),s=s.queue,eo(vu.bind(null,r,s,e),[e]),s.getSnapshot!==t||a||Se!==null&&Se.memoizedState.tag&1){if(r.flags|=2048,Xr(9,xu.bind(null,r,s,i,t),void 0,null),Ce===null)throw Error(U(349));yt&30||gu(r,t,i)}return i}function gu(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function xu(e,t,r,s){t.value=r,t.getSnapshot=s,yu(t)&&ju(e)}function vu(e,t,r){return r(function(){yu(t)&&ju(e)})}function yu(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!mn(e,r)}catch{return!0}}function ju(e){var t=En(e,1);t!==null&&fn(t,e,1,-1)}function ac(e){var t=xn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qr,lastRenderedState:e},t.queue=e,e=e.dispatch=Uf.bind(null,he,e),[t.memoizedState,e]}function Xr(e,t,r,s){return e={tag:e,create:t,destroy:r,deps:s,next:null},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(s=r.next,r.next=e,e.next=s,t.lastEffect=e)),e}function Nu(){return on().memoizedState}function Ms(e,t,r,s){var i=xn();he.flags|=e,i.memoizedState=Xr(1|t,r,void 0,s===void 0?null:s)}function ki(e,t,r,s){var i=on();s=s===void 0?null:s;var a=void 0;if(we!==null){var l=we.memoizedState;if(a=l.destroy,s!==null&&Yl(s,l.deps)){i.memoizedState=Xr(t,r,a,s);return}}he.flags|=e,i.memoizedState=Xr(1|t,r,a,s)}function lc(e,t){return Ms(8390656,8,e,t)}function eo(e,t){return ki(2048,8,e,t)}function ku(e,t){return ki(4,2,e,t)}function wu(e,t){return ki(4,4,e,t)}function bu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Su(e,t,r){return r=r!=null?r.concat([e]):null,ki(4,4,bu.bind(null,t,e),r)}function no(){}function Cu(e,t){var r=on();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&Yl(t,s[1])?s[0]:(r.memoizedState=[e,t],e)}function Tu(e,t){var r=on();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&Yl(t,s[1])?s[0]:(e=e(),r.memoizedState=[e,t],e)}function _u(e,t,r){return yt&21?(mn(r,t)||(r=Pd(),he.lanes|=r,jt|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ue=!0),e.memoizedState=r)}function qf(e,t){var r=se;se=r!==0&&4>r?r:4,e(!0);var s=Ji.transition;Ji.transition={};try{e(!1),t()}finally{se=r,Ji.transition=s}}function Lu(){return on().memoizedState}function Hf(e,t,r){var s=Xn(e);if(r={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null},Eu(e))Ou(t,r);else if(r=uu(e,t,r,s),r!==null){var i=De();fn(r,e,s,i),Ru(r,t,s)}}function Uf(e,t,r){var s=Xn(e),i={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null};if(Eu(e))Ou(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var l=t.lastRenderedState,o=a(l,r);if(i.hasEagerState=!0,i.eagerState=o,mn(o,l)){var c=t.interleaved;c===null?(i.next=i,Kl(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}r=uu(e,t,i,s),r!==null&&(i=De(),fn(r,e,s,i),Ru(r,t,s))}}function Eu(e){var t=e.alternate;return e===he||t!==null&&t===he}function Ou(e,t){Er=si=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Ru(e,t,r){if(r&4194240){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,Rl(e,r)}}var ii={readContext:ln,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useInsertionEffect:Re,useLayoutEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useMutableSource:Re,useSyncExternalStore:Re,useId:Re,unstable_isNewReconciler:!1},Kf={readContext:ln,useCallback:function(e,t){return xn().memoizedState=[e,t===void 0?null:t],e},useContext:ln,useEffect:lc,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Ms(4194308,4,bu.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Ms(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ms(4,2,e,t)},useMemo:function(e,t){var r=xn();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var s=xn();return t=r!==void 0?r(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=Hf.bind(null,he,e),[s.memoizedState,e]},useRef:function(e){var t=xn();return e={current:e},t.memoizedState=e},useState:ac,useDebugValue:no,useDeferredValue:function(e){return xn().memoizedState=e},useTransition:function(){var e=ac(!1),t=e[0];return e=qf.bind(null,e[1]),xn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var s=he,i=xn();if(ce){if(r===void 0)throw Error(U(407));r=r()}else{if(r=t(),Ce===null)throw Error(U(349));yt&30||gu(s,t,r)}i.memoizedState=r;var a={value:r,getSnapshot:t};return i.queue=a,lc(vu.bind(null,s,a,e),[e]),s.flags|=2048,Xr(9,xu.bind(null,s,a,r,t),void 0,null),r},useId:function(){var e=xn(),t=Ce.identifierPrefix;if(ce){var r=Cn,s=Sn;r=(s&~(1<<32-pn(s)-1)).toString(32)+r,t=":"+t+"R"+r,r=Gr++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Bf++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Wf={readContext:ln,useCallback:Cu,useContext:ln,useEffect:eo,useImperativeHandle:Su,useInsertionEffect:ku,useLayoutEffect:wu,useMemo:Tu,useReducer:Zi,useRef:Nu,useState:function(){return Zi(Qr)},useDebugValue:no,useDeferredValue:function(e){var t=on();return _u(t,we.memoizedState,e)},useTransition:function(){var e=Zi(Qr)[0],t=on().memoizedState;return[e,t]},useMutableSource:fu,useSyncExternalStore:mu,useId:Lu,unstable_isNewReconciler:!1},Gf={readContext:ln,useCallback:Cu,useContext:ln,useEffect:eo,useImperativeHandle:Su,useInsertionEffect:ku,useLayoutEffect:wu,useMemo:Tu,useReducer:ea,useRef:Nu,useState:function(){return ea(Qr)},useDebugValue:no,useDeferredValue:function(e){var t=on();return we===null?t.memoizedState=e:_u(t,we.memoizedState,e)},useTransition:function(){var e=ea(Qr)[0],t=on().memoizedState;return[e,t]},useMutableSource:fu,useSyncExternalStore:mu,useId:Lu,unstable_isNewReconciler:!1};function dn(e,t){if(e&&e.defaultProps){t=pe({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Ha(e,t,r,s){t=e.memoizedState,r=r(s,t),r=r==null?t:pe({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var wi={isMounted:function(e){return(e=e._reactInternals)?wt(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var s=De(),i=Xn(e),a=Tn(s,i);a.payload=t,r!=null&&(a.callback=r),t=Gn(e,a,i),t!==null&&(fn(t,e,i,s),Ps(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var s=De(),i=Xn(e),a=Tn(s,i);a.tag=1,a.payload=t,r!=null&&(a.callback=r),t=Gn(e,a,i),t!==null&&(fn(t,e,i,s),Ps(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=De(),s=Xn(e),i=Tn(r,s);i.tag=2,t!=null&&(i.callback=t),t=Gn(e,i,s),t!==null&&(fn(t,e,s,r),Ps(t,e,s))}};function oc(e,t,r,s,i,a,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,a,l):t.prototype&&t.prototype.isPureReactComponent?!Br(r,s)||!Br(i,a):!0}function Pu(e,t,r){var s=!1,i=nt,a=t.contextType;return typeof a=="object"&&a!==null?a=ln(a):(i=We(t)?xt:Me.current,s=t.contextTypes,a=(s=s!=null)?er(e,i):nt),t=new t(r,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=wi,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function cc(e,t,r,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,s),t.state!==e&&wi.enqueueReplaceState(t,t.state,null)}function Ua(e,t,r,s){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},Wl(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=ln(a):(a=We(t)?xt:Me.current,i.context=er(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Ha(e,t,a,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&wi.enqueueReplaceState(i,i.state,null),ti(e,r,i,s),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function sr(e,t){try{var r="",s=t;do r+=Np(s),s=s.return;while(s);var i=r}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function na(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Ka(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Qf=typeof WeakMap=="function"?WeakMap:Map;function Iu(e,t,r){r=Tn(-1,r),r.tag=3,r.payload={element:null};var s=t.value;return r.callback=function(){li||(li=!0,tl=s),Ka(e,t)},r}function Mu(e,t,r){r=Tn(-1,r),r.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var i=t.value;r.payload=function(){return s(i)},r.callback=function(){Ka(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){Ka(e,t),typeof s!="function"&&(Qn===null?Qn=new Set([this]):Qn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),r}function dc(e,t,r){var s=e.pingCache;if(s===null){s=e.pingCache=new Qf;var i=new Set;s.set(t,i)}else i=s.get(t),i===void 0&&(i=new Set,s.set(t,i));i.has(r)||(i.add(r),e=cm.bind(null,e,t,r),t.then(e,e))}function uc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function hc(e,t,r,s,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Tn(-1,1),t.tag=2,Gn(r,t,1))),r.lanes|=1),e)}var Xf=Rn.ReactCurrentOwner,Ue=!1;function Ae(e,t,r,s){t.child=e===null?du(t,null,r,s):tr(t,e.child,r,s)}function pc(e,t,r,s,i){r=r.render;var a=t.ref;return Yt(t,i),s=Jl(e,t,r,s,a,i),r=Zl(),e!==null&&!Ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,On(e,t,i)):(ce&&r&&Dl(t),t.flags|=1,Ae(e,t,s,i),t.child)}function fc(e,t,r,s,i){if(e===null){var a=r.type;return typeof a=="function"&&!co(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=a,zu(e,t,a,s,i)):(e=Vs(r.type,null,s,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var l=a.memoizedProps;if(r=r.compare,r=r!==null?r:Br,r(l,s)&&e.ref===t.ref)return On(e,t,i)}return t.flags|=1,e=Yn(a,s),e.ref=t.ref,e.return=t,t.child=e}function zu(e,t,r,s,i){if(e!==null){var a=e.memoizedProps;if(Br(a,s)&&e.ref===t.ref)if(Ue=!1,t.pendingProps=s=a,(e.lanes&i)!==0)e.flags&131072&&(Ue=!0);else return t.lanes=e.lanes,On(e,t,i)}return Wa(e,t,r,s,i)}function Fu(e,t,r){var s=t.pendingProps,i=s.children,a=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ae(Dt,Qe),Qe|=r;else{if(!(r&1073741824))return e=a!==null?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ae(Dt,Qe),Qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=a!==null?a.baseLanes:r,ae(Dt,Qe),Qe|=s}else a!==null?(s=a.baseLanes|r,t.memoizedState=null):s=r,ae(Dt,Qe),Qe|=s;return Ae(e,t,i,r),t.child}function Au(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Wa(e,t,r,s,i){var a=We(r)?xt:Me.current;return a=er(t,a),Yt(t,i),r=Jl(e,t,r,s,a,i),s=Zl(),e!==null&&!Ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,On(e,t,i)):(ce&&s&&Dl(t),t.flags|=1,Ae(e,t,r,i),t.child)}function mc(e,t,r,s,i){if(We(r)){var a=!0;Ys(t)}else a=!1;if(Yt(t,i),t.stateNode===null)zs(e,t),Pu(t,r,s),Ua(t,r,s,i),s=!0;else if(e===null){var l=t.stateNode,o=t.memoizedProps;l.props=o;var c=l.context,h=r.contextType;typeof h=="object"&&h!==null?h=ln(h):(h=We(r)?xt:Me.current,h=er(t,h));var d=r.getDerivedStateFromProps,p=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==s||c!==h)&&cc(t,l,s,h),Fn=!1;var m=t.memoizedState;l.state=m,ti(t,s,l,i),c=t.memoizedState,o!==s||m!==c||Ke.current||Fn?(typeof d=="function"&&(Ha(t,r,d,s),c=t.memoizedState),(o=Fn||oc(t,r,o,s,m,c,h))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=c),l.props=s,l.state=c,l.context=h,s=o):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{l=t.stateNode,hu(e,t),o=t.memoizedProps,h=t.type===t.elementType?o:dn(t.type,o),l.props=h,p=t.pendingProps,m=l.context,c=r.contextType,typeof c=="object"&&c!==null?c=ln(c):(c=We(r)?xt:Me.current,c=er(t,c));var b=r.getDerivedStateFromProps;(d=typeof b=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==p||m!==c)&&cc(t,l,s,c),Fn=!1,m=t.memoizedState,l.state=m,ti(t,s,l,i);var w=t.memoizedState;o!==p||m!==w||Ke.current||Fn?(typeof b=="function"&&(Ha(t,r,b,s),w=t.memoizedState),(h=Fn||oc(t,r,h,s,m,w,c)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(s,w,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(s,w,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=w),l.props=s,l.state=w,l.context=c,s=h):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),s=!1)}return Ga(e,t,r,s,a,i)}function Ga(e,t,r,s,i,a){Au(e,t);var l=(t.flags&128)!==0;if(!s&&!l)return i&&ec(t,r,!1),On(e,t,a);s=t.stateNode,Xf.current=t;var o=l&&typeof r.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&l?(t.child=tr(t,e.child,null,a),t.child=tr(t,null,o,a)):Ae(e,t,o,a),t.memoizedState=s.state,i&&ec(t,r,!0),t.child}function Vu(e){var t=e.stateNode;t.pendingContext?Zo(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Zo(e,t.context,!1),Gl(e,t.containerInfo)}function gc(e,t,r,s,i){return nr(),Bl(i),t.flags|=256,Ae(e,t,r,s),t.child}var Qa={dehydrated:null,treeContext:null,retryLane:0};function Xa(e){return{baseLanes:e,cachePool:null,transitions:null}}function Du(e,t,r){var s=t.pendingProps,i=ue.current,a=!1,l=(t.flags&128)!==0,o;if((o=l)||(o=e!==null&&e.memoizedState===null?!1:(i&2)!==0),o?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ae(ue,i&1),e===null)return Ba(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=s.children,e=s.fallback,a?(s=t.mode,a=t.child,l={mode:"hidden",children:l},!(s&1)&&a!==null?(a.childLanes=0,a.pendingProps=l):a=Ci(l,s,0,null),e=gt(e,s,r,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Xa(r),t.memoizedState=Qa,e):to(t,l));if(i=e.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return Yf(e,t,l,s,o,i,r);if(a){a=s.fallback,l=t.mode,i=e.child,o=i.sibling;var c={mode:"hidden",children:s.children};return!(l&1)&&t.child!==i?(s=t.child,s.childLanes=0,s.pendingProps=c,t.deletions=null):(s=Yn(i,c),s.subtreeFlags=i.subtreeFlags&14680064),o!==null?a=Yn(o,a):(a=gt(a,l,r,null),a.flags|=2),a.return=t,s.return=t,s.sibling=a,t.child=s,s=a,a=t.child,l=e.child.memoizedState,l=l===null?Xa(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},a.memoizedState=l,a.childLanes=e.childLanes&~r,t.memoizedState=Qa,s}return a=e.child,e=a.sibling,s=Yn(a,{mode:"visible",children:s.children}),!(t.mode&1)&&(s.lanes=r),s.return=t,s.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=s,t.memoizedState=null,s}function to(e,t){return t=Ci({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ks(e,t,r,s){return s!==null&&Bl(s),tr(t,e.child,null,r),e=to(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Yf(e,t,r,s,i,a,l){if(r)return t.flags&256?(t.flags&=-257,s=na(Error(U(422))),ks(e,t,l,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=s.fallback,i=t.mode,s=Ci({mode:"visible",children:s.children},i,0,null),a=gt(a,i,l,null),a.flags|=2,s.return=t,a.return=t,s.sibling=a,t.child=s,t.mode&1&&tr(t,e.child,null,l),t.child.memoizedState=Xa(l),t.memoizedState=Qa,a);if(!(t.mode&1))return ks(e,t,l,null);if(i.data==="$!"){if(s=i.nextSibling&&i.nextSibling.dataset,s)var o=s.dgst;return s=o,a=Error(U(419)),s=na(a,s,void 0),ks(e,t,l,s)}if(o=(l&e.childLanes)!==0,Ue||o){if(s=Ce,s!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(s.suspendedLanes|l)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,En(e,i),fn(s,e,i,-1))}return oo(),s=na(Error(U(421))),ks(e,t,l,s)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=dm.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,Ye=Wn(i.nextSibling),Je=t,ce=!0,hn=null,e!==null&&(tn[rn++]=Sn,tn[rn++]=Cn,tn[rn++]=vt,Sn=e.id,Cn=e.overflow,vt=t),t=to(t,s.children),t.flags|=4096,t)}function xc(e,t,r){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),qa(e.return,t,r)}function ta(e,t,r,s,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:r,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=s,a.tail=r,a.tailMode=i)}function $u(e,t,r){var s=t.pendingProps,i=s.revealOrder,a=s.tail;if(Ae(e,t,s.children,r),s=ue.current,s&2)s=s&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xc(e,r,t);else if(e.tag===19)xc(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(ae(ue,s),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&ri(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),ta(t,!1,i,r,a);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ri(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}ta(t,!0,r,null,a);break;case"together":ta(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function zs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function On(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),jt|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(U(153));if(t.child!==null){for(e=t.child,r=Yn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Yn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Jf(e,t,r){switch(t.tag){case 3:Vu(t),nr();break;case 5:pu(t);break;case 1:We(t.type)&&Ys(t);break;case 4:Gl(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,i=t.memoizedProps.value;ae(ei,s._currentValue),s._currentValue=i;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(ae(ue,ue.current&1),t.flags|=128,null):r&t.child.childLanes?Du(e,t,r):(ae(ue,ue.current&1),e=On(e,t,r),e!==null?e.sibling:null);ae(ue,ue.current&1);break;case 19:if(s=(r&t.childLanes)!==0,e.flags&128){if(s)return $u(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ae(ue,ue.current),s)break;return null;case 22:case 23:return t.lanes=0,Fu(e,t,r)}return On(e,t,r)}var Bu,Ya,qu,Hu;Bu=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Ya=function(){};qu=function(e,t,r,s){var i=e.memoizedProps;if(i!==s){e=t.stateNode,ht(jn.current);var a=null;switch(r){case"input":i=ya(e,i),s=ya(e,s),a=[];break;case"select":i=pe({},i,{value:void 0}),s=pe({},s,{value:void 0}),a=[];break;case"textarea":i=ka(e,i),s=ka(e,s),a=[];break;default:typeof i.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Qs)}ba(r,s);var l;r=null;for(h in i)if(!s.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var o=i[h];for(l in o)o.hasOwnProperty(l)&&(r||(r={}),r[l]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Mr.hasOwnProperty(h)?a||(a=[]):(a=a||[]).push(h,null));for(h in s){var c=s[h];if(o=i!=null?i[h]:void 0,s.hasOwnProperty(h)&&c!==o&&(c!=null||o!=null))if(h==="style")if(o){for(l in o)!o.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(r||(r={}),r[l]="");for(l in c)c.hasOwnProperty(l)&&o[l]!==c[l]&&(r||(r={}),r[l]=c[l])}else r||(a||(a=[]),a.push(h,r)),r=c;else h==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(a=a||[]).push(h,c)):h==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(h,""+c):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Mr.hasOwnProperty(h)?(c!=null&&h==="onScroll"&&le("scroll",e),a||o===c||(a=[])):(a=a||[]).push(h,c))}r&&(a=a||[]).push("style",r);var h=a;(t.updateQueue=h)&&(t.flags|=4)}};Hu=function(e,t,r,s){r!==s&&(t.flags|=4)};function vr(e,t){if(!ce)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,s=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,s|=i.subtreeFlags&14680064,s|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,s|=i.subtreeFlags,s|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=s,e.childLanes=r,t}function Zf(e,t,r){var s=t.pendingProps;switch($l(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(t),null;case 1:return We(t.type)&&Xs(),Pe(t),null;case 3:return s=t.stateNode,rr(),oe(Ke),oe(Me),Xl(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(js(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,hn!==null&&(il(hn),hn=null))),Ya(e,t),Pe(t),null;case 5:Ql(t);var i=ht(Wr.current);if(r=t.type,e!==null&&t.stateNode!=null)qu(e,t,r,s,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(U(166));return Pe(t),null}if(e=ht(jn.current),js(t)){s=t.stateNode,r=t.type;var a=t.memoizedProps;switch(s[vn]=t,s[Ur]=a,e=(t.mode&1)!==0,r){case"dialog":le("cancel",s),le("close",s);break;case"iframe":case"object":case"embed":le("load",s);break;case"video":case"audio":for(i=0;i<wr.length;i++)le(wr[i],s);break;case"source":le("error",s);break;case"img":case"image":case"link":le("error",s),le("load",s);break;case"details":le("toggle",s);break;case"input":Co(s,a),le("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!a.multiple},le("invalid",s);break;case"textarea":_o(s,a),le("invalid",s)}ba(r,a),i=null;for(var l in a)if(a.hasOwnProperty(l)){var o=a[l];l==="children"?typeof o=="string"?s.textContent!==o&&(a.suppressHydrationWarning!==!0&&ys(s.textContent,o,e),i=["children",o]):typeof o=="number"&&s.textContent!==""+o&&(a.suppressHydrationWarning!==!0&&ys(s.textContent,o,e),i=["children",""+o]):Mr.hasOwnProperty(l)&&o!=null&&l==="onScroll"&&le("scroll",s)}switch(r){case"input":us(s),To(s,a,!0);break;case"textarea":us(s),Lo(s);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(s.onclick=Qs)}s=i,t.updateQueue=s,s!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=vd(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=l.createElement(r,{is:s.is}):(e=l.createElement(r),r==="select"&&(l=e,s.multiple?l.multiple=!0:s.size&&(l.size=s.size))):e=l.createElementNS(e,r),e[vn]=t,e[Ur]=s,Bu(e,t,!1,!1),t.stateNode=e;e:{switch(l=Sa(r,s),r){case"dialog":le("cancel",e),le("close",e),i=s;break;case"iframe":case"object":case"embed":le("load",e),i=s;break;case"video":case"audio":for(i=0;i<wr.length;i++)le(wr[i],e);i=s;break;case"source":le("error",e),i=s;break;case"img":case"image":case"link":le("error",e),le("load",e),i=s;break;case"details":le("toggle",e),i=s;break;case"input":Co(e,s),i=ya(e,s),le("invalid",e);break;case"option":i=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},i=pe({},s,{value:void 0}),le("invalid",e);break;case"textarea":_o(e,s),i=ka(e,s),le("invalid",e);break;default:i=s}ba(r,i),o=i;for(a in o)if(o.hasOwnProperty(a)){var c=o[a];a==="style"?Nd(e,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&yd(e,c)):a==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&zr(e,c):typeof c=="number"&&zr(e,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Mr.hasOwnProperty(a)?c!=null&&a==="onScroll"&&le("scroll",e):c!=null&&Cl(e,a,c,l))}switch(r){case"input":us(e),To(e,s,!1);break;case"textarea":us(e),Lo(e);break;case"option":s.value!=null&&e.setAttribute("value",""+et(s.value));break;case"select":e.multiple=!!s.multiple,a=s.value,a!=null?Wt(e,!!s.multiple,a,!1):s.defaultValue!=null&&Wt(e,!!s.multiple,s.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Qs)}switch(r){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Pe(t),null;case 6:if(e&&t.stateNode!=null)Hu(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(U(166));if(r=ht(Wr.current),ht(jn.current),js(t)){if(s=t.stateNode,r=t.memoizedProps,s[vn]=t,(a=s.nodeValue!==r)&&(e=Je,e!==null))switch(e.tag){case 3:ys(s.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ys(s.nodeValue,r,(e.mode&1)!==0)}a&&(t.flags|=4)}else s=(r.nodeType===9?r:r.ownerDocument).createTextNode(s),s[vn]=t,t.stateNode=s}return Pe(t),null;case 13:if(oe(ue),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ce&&Ye!==null&&t.mode&1&&!(t.flags&128))ou(),nr(),t.flags|=98560,a=!1;else if(a=js(t),s!==null&&s.dehydrated!==null){if(e===null){if(!a)throw Error(U(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(U(317));a[vn]=t}else nr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Pe(t),a=!1}else hn!==null&&(il(hn),hn=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,t.mode&1&&(e===null||ue.current&1?be===0&&(be=3):oo())),t.updateQueue!==null&&(t.flags|=4),Pe(t),null);case 4:return rr(),Ya(e,t),e===null&&qr(t.stateNode.containerInfo),Pe(t),null;case 10:return Ul(t.type._context),Pe(t),null;case 17:return We(t.type)&&Xs(),Pe(t),null;case 19:if(oe(ue),a=t.memoizedState,a===null)return Pe(t),null;if(s=(t.flags&128)!==0,l=a.rendering,l===null)if(s)vr(a,!1);else{if(be!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=ri(e),l!==null){for(t.flags|=128,vr(a,!1),s=l.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=r,r=t.child;r!==null;)a=r,e=s,a.flags&=14680066,l=a.alternate,l===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return ae(ue,ue.current&1|2),t.child}e=e.sibling}a.tail!==null&&je()>ir&&(t.flags|=128,s=!0,vr(a,!1),t.lanes=4194304)}else{if(!s)if(e=ri(l),e!==null){if(t.flags|=128,s=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),vr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!ce)return Pe(t),null}else 2*je()-a.renderingStartTime>ir&&r!==1073741824&&(t.flags|=128,s=!0,vr(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(r=a.last,r!==null?r.sibling=l:t.child=l,a.last=l)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=je(),t.sibling=null,r=ue.current,ae(ue,s?r&1|2:r&1),t):(Pe(t),null);case 22:case 23:return lo(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&t.mode&1?Qe&1073741824&&(Pe(t),t.subtreeFlags&6&&(t.flags|=8192)):Pe(t),null;case 24:return null;case 25:return null}throw Error(U(156,t.tag))}function em(e,t){switch($l(t),t.tag){case 1:return We(t.type)&&Xs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return rr(),oe(Ke),oe(Me),Xl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ql(t),null;case 13:if(oe(ue),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(U(340));nr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return oe(ue),null;case 4:return rr(),null;case 10:return Ul(t.type._context),null;case 22:case 23:return lo(),null;case 24:return null;default:return null}}var ws=!1,Ie=!1,nm=typeof WeakSet=="function"?WeakSet:Set,Q=null;function Vt(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(s){xe(e,t,s)}else r.current=null}function Ja(e,t,r){try{r()}catch(s){xe(e,t,s)}}var vc=!1;function tm(e,t){if(Ma=Ks,e=Qd(),Vl(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var s=r.getSelection&&r.getSelection();if(s&&s.rangeCount!==0){r=s.anchorNode;var i=s.anchorOffset,a=s.focusNode;s=s.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var l=0,o=-1,c=-1,h=0,d=0,p=e,m=null;n:for(;;){for(var b;p!==r||i!==0&&p.nodeType!==3||(o=l+i),p!==a||s!==0&&p.nodeType!==3||(c=l+s),p.nodeType===3&&(l+=p.nodeValue.length),(b=p.firstChild)!==null;)m=p,p=b;for(;;){if(p===e)break n;if(m===r&&++h===i&&(o=l),m===a&&++d===s&&(c=l),(b=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=b}r=o===-1||c===-1?null:{start:o,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(za={focusedElem:e,selectionRange:r},Ks=!1,Q=t;Q!==null;)if(t=Q,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Q=e;else for(;Q!==null;){t=Q;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,j=w.memoizedState,f=t.stateNode,g=f.getSnapshotBeforeUpdate(t.elementType===t.type?k:dn(t.type,k),j);f.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(E){xe(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,Q=e;break}Q=t.return}return w=vc,vc=!1,w}function Or(e,t,r){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var i=s=s.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&Ja(t,r,a)}i=i.next}while(i!==s)}}function bi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var s=r.create;r.destroy=s()}r=r.next}while(r!==t)}}function Za(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Uu(e){var t=e.alternate;t!==null&&(e.alternate=null,Uu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[vn],delete t[Ur],delete t[Va],delete t[Af],delete t[Vf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ku(e){return e.tag===5||e.tag===3||e.tag===4}function yc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ku(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function el(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Qs));else if(s!==4&&(e=e.child,e!==null))for(el(e,t,r),e=e.sibling;e!==null;)el(e,t,r),e=e.sibling}function nl(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(nl(e,t,r),e=e.sibling;e!==null;)nl(e,t,r),e=e.sibling}var Le=null,un=!1;function In(e,t,r){for(r=r.child;r!==null;)Wu(e,t,r),r=r.sibling}function Wu(e,t,r){if(yn&&typeof yn.onCommitFiberUnmount=="function")try{yn.onCommitFiberUnmount(gi,r)}catch{}switch(r.tag){case 5:Ie||Vt(r,t);case 6:var s=Le,i=un;Le=null,In(e,t,r),Le=s,un=i,Le!==null&&(un?(e=Le,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Le.removeChild(r.stateNode));break;case 18:Le!==null&&(un?(e=Le,r=r.stateNode,e.nodeType===8?Qi(e.parentNode,r):e.nodeType===1&&Qi(e,r),Dr(e)):Qi(Le,r.stateNode));break;case 4:s=Le,i=un,Le=r.stateNode.containerInfo,un=!0,In(e,t,r),Le=s,un=i;break;case 0:case 11:case 14:case 15:if(!Ie&&(s=r.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){i=s=s.next;do{var a=i,l=a.destroy;a=a.tag,l!==void 0&&(a&2||a&4)&&Ja(r,t,l),i=i.next}while(i!==s)}In(e,t,r);break;case 1:if(!Ie&&(Vt(r,t),s=r.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=r.memoizedProps,s.state=r.memoizedState,s.componentWillUnmount()}catch(o){xe(r,t,o)}In(e,t,r);break;case 21:In(e,t,r);break;case 22:r.mode&1?(Ie=(s=Ie)||r.memoizedState!==null,In(e,t,r),Ie=s):In(e,t,r);break;default:In(e,t,r)}}function jc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new nm),t.forEach(function(s){var i=um.bind(null,e,s);r.has(s)||(r.add(s),s.then(i,i))})}}function cn(e,t){var r=t.deletions;if(r!==null)for(var s=0;s<r.length;s++){var i=r[s];try{var a=e,l=t,o=l;e:for(;o!==null;){switch(o.tag){case 5:Le=o.stateNode,un=!1;break e;case 3:Le=o.stateNode.containerInfo,un=!0;break e;case 4:Le=o.stateNode.containerInfo,un=!0;break e}o=o.return}if(Le===null)throw Error(U(160));Wu(a,l,i),Le=null,un=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(h){xe(i,t,h)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Gu(t,e),t=t.sibling}function Gu(e,t){var r=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(cn(t,e),gn(e),s&4){try{Or(3,e,e.return),bi(3,e)}catch(k){xe(e,e.return,k)}try{Or(5,e,e.return)}catch(k){xe(e,e.return,k)}}break;case 1:cn(t,e),gn(e),s&512&&r!==null&&Vt(r,r.return);break;case 5:if(cn(t,e),gn(e),s&512&&r!==null&&Vt(r,r.return),e.flags&32){var i=e.stateNode;try{zr(i,"")}catch(k){xe(e,e.return,k)}}if(s&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,l=r!==null?r.memoizedProps:a,o=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{o==="input"&&a.type==="radio"&&a.name!=null&&gd(i,a),Sa(o,l);var h=Sa(o,a);for(l=0;l<c.length;l+=2){var d=c[l],p=c[l+1];d==="style"?Nd(i,p):d==="dangerouslySetInnerHTML"?yd(i,p):d==="children"?zr(i,p):Cl(i,d,p,h)}switch(o){case"input":ja(i,a);break;case"textarea":xd(i,a);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var b=a.value;b!=null?Wt(i,!!a.multiple,b,!1):m!==!!a.multiple&&(a.defaultValue!=null?Wt(i,!!a.multiple,a.defaultValue,!0):Wt(i,!!a.multiple,a.multiple?[]:"",!1))}i[Ur]=a}catch(k){xe(e,e.return,k)}}break;case 6:if(cn(t,e),gn(e),s&4){if(e.stateNode===null)throw Error(U(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(k){xe(e,e.return,k)}}break;case 3:if(cn(t,e),gn(e),s&4&&r!==null&&r.memoizedState.isDehydrated)try{Dr(t.containerInfo)}catch(k){xe(e,e.return,k)}break;case 4:cn(t,e),gn(e);break;case 13:cn(t,e),gn(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(io=je())),s&4&&jc(e);break;case 22:if(d=r!==null&&r.memoizedState!==null,e.mode&1?(Ie=(h=Ie)||d,cn(t,e),Ie=h):cn(t,e),gn(e),s&8192){if(h=e.memoizedState!==null,(e.stateNode.isHidden=h)&&!d&&e.mode&1)for(Q=e,d=e.child;d!==null;){for(p=Q=d;Q!==null;){switch(m=Q,b=m.child,m.tag){case 0:case 11:case 14:case 15:Or(4,m,m.return);break;case 1:Vt(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){s=m,r=m.return;try{t=s,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(k){xe(s,r,k)}}break;case 5:Vt(m,m.return);break;case 22:if(m.memoizedState!==null){kc(p);continue}}b!==null?(b.return=m,Q=b):kc(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,h?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(o=p.stateNode,c=p.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=jd("display",l))}catch(k){xe(e,e.return,k)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(k){xe(e,e.return,k)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:cn(t,e),gn(e),s&4&&jc(e);break;case 21:break;default:cn(t,e),gn(e)}}function gn(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Ku(r)){var s=r;break e}r=r.return}throw Error(U(160))}switch(s.tag){case 5:var i=s.stateNode;s.flags&32&&(zr(i,""),s.flags&=-33);var a=yc(e);nl(e,a,i);break;case 3:case 4:var l=s.stateNode.containerInfo,o=yc(e);el(e,o,l);break;default:throw Error(U(161))}}catch(c){xe(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function rm(e,t,r){Q=e,Qu(e)}function Qu(e,t,r){for(var s=(e.mode&1)!==0;Q!==null;){var i=Q,a=i.child;if(i.tag===22&&s){var l=i.memoizedState!==null||ws;if(!l){var o=i.alternate,c=o!==null&&o.memoizedState!==null||Ie;o=ws;var h=Ie;if(ws=l,(Ie=c)&&!h)for(Q=i;Q!==null;)l=Q,c=l.child,l.tag===22&&l.memoizedState!==null?wc(i):c!==null?(c.return=l,Q=c):wc(i);for(;a!==null;)Q=a,Qu(a),a=a.sibling;Q=i,ws=o,Ie=h}Nc(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,Q=a):Nc(e)}}function Nc(e){for(;Q!==null;){var t=Q;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ie||bi(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!Ie)if(r===null)s.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:dn(t.type,r.memoizedProps);s.componentDidUpdate(i,r.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&ic(t,a,s);break;case 3:var l=t.updateQueue;if(l!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}ic(t,l,r)}break;case 5:var o=t.stateNode;if(r===null&&t.flags&4){r=o;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var h=t.alternate;if(h!==null){var d=h.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Dr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}Ie||t.flags&512&&Za(t)}catch(m){xe(t,t.return,m)}}if(t===e){Q=null;break}if(r=t.sibling,r!==null){r.return=t.return,Q=r;break}Q=t.return}}function kc(e){for(;Q!==null;){var t=Q;if(t===e){Q=null;break}var r=t.sibling;if(r!==null){r.return=t.return,Q=r;break}Q=t.return}}function wc(e){for(;Q!==null;){var t=Q;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{bi(4,t)}catch(c){xe(t,r,c)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var i=t.return;try{s.componentDidMount()}catch(c){xe(t,i,c)}}var a=t.return;try{Za(t)}catch(c){xe(t,a,c)}break;case 5:var l=t.return;try{Za(t)}catch(c){xe(t,l,c)}}}catch(c){xe(t,t.return,c)}if(t===e){Q=null;break}var o=t.sibling;if(o!==null){o.return=t.return,Q=o;break}Q=t.return}}var sm=Math.ceil,ai=Rn.ReactCurrentDispatcher,ro=Rn.ReactCurrentOwner,an=Rn.ReactCurrentBatchConfig,te=0,Ce=null,Ne=null,Ee=0,Qe=0,Dt=rt(0),be=0,Yr=null,jt=0,Si=0,so=0,Rr=null,He=null,io=0,ir=1/0,kn=null,li=!1,tl=null,Qn=null,bs=!1,$n=null,oi=0,Pr=0,rl=null,Fs=-1,As=0;function De(){return te&6?je():Fs!==-1?Fs:Fs=je()}function Xn(e){return e.mode&1?te&2&&Ee!==0?Ee&-Ee:$f.transition!==null?(As===0&&(As=Pd()),As):(e=se,e!==0||(e=window.event,e=e===void 0?16:Dd(e.type)),e):1}function fn(e,t,r,s){if(50<Pr)throw Pr=0,rl=null,Error(U(185));ts(e,r,s),(!(te&2)||e!==Ce)&&(e===Ce&&(!(te&2)&&(Si|=r),be===4&&Vn(e,Ee)),Ge(e,s),r===1&&te===0&&!(t.mode&1)&&(ir=je()+500,Ni&&st()))}function Ge(e,t){var r=e.callbackNode;Dp(e,t);var s=Us(e,e===Ce?Ee:0);if(s===0)r!==null&&Ro(r),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(r!=null&&Ro(r),t===1)e.tag===0?Df(bc.bind(null,e)):iu(bc.bind(null,e)),zf(function(){!(te&6)&&st()}),r=null;else{switch(Id(s)){case 1:r=Ol;break;case 4:r=Od;break;case 16:r=Hs;break;case 536870912:r=Rd;break;default:r=Hs}r=rh(r,Xu.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Xu(e,t){if(Fs=-1,As=0,te&6)throw Error(U(327));var r=e.callbackNode;if(Jt()&&e.callbackNode!==r)return null;var s=Us(e,e===Ce?Ee:0);if(s===0)return null;if(s&30||s&e.expiredLanes||t)t=ci(e,s);else{t=s;var i=te;te|=2;var a=Ju();(Ce!==e||Ee!==t)&&(kn=null,ir=je()+500,mt(e,t));do try{lm();break}catch(o){Yu(e,o)}while(!0);Hl(),ai.current=a,te=i,Ne!==null?t=0:(Ce=null,Ee=0,t=be)}if(t!==0){if(t===2&&(i=Ea(e),i!==0&&(s=i,t=sl(e,i))),t===1)throw r=Yr,mt(e,0),Vn(e,s),Ge(e,je()),r;if(t===6)Vn(e,s);else{if(i=e.current.alternate,!(s&30)&&!im(i)&&(t=ci(e,s),t===2&&(a=Ea(e),a!==0&&(s=a,t=sl(e,a))),t===1))throw r=Yr,mt(e,0),Vn(e,s),Ge(e,je()),r;switch(e.finishedWork=i,e.finishedLanes=s,t){case 0:case 1:throw Error(U(345));case 2:ct(e,He,kn);break;case 3:if(Vn(e,s),(s&130023424)===s&&(t=io+500-je(),10<t)){if(Us(e,0)!==0)break;if(i=e.suspendedLanes,(i&s)!==s){De(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Aa(ct.bind(null,e,He,kn),t);break}ct(e,He,kn);break;case 4:if(Vn(e,s),(s&4194240)===s)break;for(t=e.eventTimes,i=-1;0<s;){var l=31-pn(s);a=1<<l,l=t[l],l>i&&(i=l),s&=~a}if(s=i,s=je()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*sm(s/1960))-s,10<s){e.timeoutHandle=Aa(ct.bind(null,e,He,kn),s);break}ct(e,He,kn);break;case 5:ct(e,He,kn);break;default:throw Error(U(329))}}}return Ge(e,je()),e.callbackNode===r?Xu.bind(null,e):null}function sl(e,t){var r=Rr;return e.current.memoizedState.isDehydrated&&(mt(e,t).flags|=256),e=ci(e,t),e!==2&&(t=He,He=r,t!==null&&il(t)),e}function il(e){He===null?He=e:He.push.apply(He,e)}function im(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var s=0;s<r.length;s++){var i=r[s],a=i.getSnapshot;i=i.value;try{if(!mn(a(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Vn(e,t){for(t&=~so,t&=~Si,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-pn(t),s=1<<r;e[r]=-1,t&=~s}}function bc(e){if(te&6)throw Error(U(327));Jt();var t=Us(e,0);if(!(t&1))return Ge(e,je()),null;var r=ci(e,t);if(e.tag!==0&&r===2){var s=Ea(e);s!==0&&(t=s,r=sl(e,s))}if(r===1)throw r=Yr,mt(e,0),Vn(e,t),Ge(e,je()),r;if(r===6)throw Error(U(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ct(e,He,kn),Ge(e,je()),null}function ao(e,t){var r=te;te|=1;try{return e(t)}finally{te=r,te===0&&(ir=je()+500,Ni&&st())}}function Nt(e){$n!==null&&$n.tag===0&&!(te&6)&&Jt();var t=te;te|=1;var r=an.transition,s=se;try{if(an.transition=null,se=1,e)return e()}finally{se=s,an.transition=r,te=t,!(te&6)&&st()}}function lo(){Qe=Dt.current,oe(Dt)}function mt(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Mf(r)),Ne!==null)for(r=Ne.return;r!==null;){var s=r;switch($l(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Xs();break;case 3:rr(),oe(Ke),oe(Me),Xl();break;case 5:Ql(s);break;case 4:rr();break;case 13:oe(ue);break;case 19:oe(ue);break;case 10:Ul(s.type._context);break;case 22:case 23:lo()}r=r.return}if(Ce=e,Ne=e=Yn(e.current,null),Ee=Qe=t,be=0,Yr=null,so=Si=jt=0,He=Rr=null,ut!==null){for(t=0;t<ut.length;t++)if(r=ut[t],s=r.interleaved,s!==null){r.interleaved=null;var i=s.next,a=r.pending;if(a!==null){var l=a.next;a.next=i,s.next=l}r.pending=s}ut=null}return e}function Yu(e,t){do{var r=Ne;try{if(Hl(),Is.current=ii,si){for(var s=he.memoizedState;s!==null;){var i=s.queue;i!==null&&(i.pending=null),s=s.next}si=!1}if(yt=0,Se=we=he=null,Er=!1,Gr=0,ro.current=null,r===null||r.return===null){be=1,Yr=t,Ne=null;break}e:{var a=e,l=r.return,o=r,c=t;if(t=Ee,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var h=c,d=o,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var b=uc(l);if(b!==null){b.flags&=-257,hc(b,l,o,a,t),b.mode&1&&dc(a,h,t),t=b,c=h;var w=t.updateQueue;if(w===null){var k=new Set;k.add(c),t.updateQueue=k}else w.add(c);break e}else{if(!(t&1)){dc(a,h,t),oo();break e}c=Error(U(426))}}else if(ce&&o.mode&1){var j=uc(l);if(j!==null){!(j.flags&65536)&&(j.flags|=256),hc(j,l,o,a,t),Bl(sr(c,o));break e}}a=c=sr(c,o),be!==4&&(be=2),Rr===null?Rr=[a]:Rr.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var f=Iu(a,c,t);sc(a,f);break e;case 1:o=c;var g=a.type,x=a.stateNode;if(!(a.flags&128)&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Qn===null||!Qn.has(x)))){a.flags|=65536,t&=-t,a.lanes|=t;var E=Mu(a,o,t);sc(a,E);break e}}a=a.return}while(a!==null)}eh(r)}catch(y){t=y,Ne===r&&r!==null&&(Ne=r=r.return);continue}break}while(!0)}function Ju(){var e=ai.current;return ai.current=ii,e===null?ii:e}function oo(){(be===0||be===3||be===2)&&(be=4),Ce===null||!(jt&268435455)&&!(Si&268435455)||Vn(Ce,Ee)}function ci(e,t){var r=te;te|=2;var s=Ju();(Ce!==e||Ee!==t)&&(kn=null,mt(e,t));do try{am();break}catch(i){Yu(e,i)}while(!0);if(Hl(),te=r,ai.current=s,Ne!==null)throw Error(U(261));return Ce=null,Ee=0,be}function am(){for(;Ne!==null;)Zu(Ne)}function lm(){for(;Ne!==null&&!Op();)Zu(Ne)}function Zu(e){var t=th(e.alternate,e,Qe);e.memoizedProps=e.pendingProps,t===null?eh(e):Ne=t,ro.current=null}function eh(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=em(r,t),r!==null){r.flags&=32767,Ne=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{be=6,Ne=null;return}}else if(r=Zf(r,t,Qe),r!==null){Ne=r;return}if(t=t.sibling,t!==null){Ne=t;return}Ne=t=e}while(t!==null);be===0&&(be=5)}function ct(e,t,r){var s=se,i=an.transition;try{an.transition=null,se=1,om(e,t,r,s)}finally{an.transition=i,se=s}return null}function om(e,t,r,s){do Jt();while($n!==null);if(te&6)throw Error(U(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(U(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if($p(e,a),e===Ce&&(Ne=Ce=null,Ee=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||bs||(bs=!0,rh(Hs,function(){return Jt(),null})),a=(r.flags&15990)!==0,r.subtreeFlags&15990||a){a=an.transition,an.transition=null;var l=se;se=1;var o=te;te|=4,ro.current=null,tm(e,r),Gu(r,e),_f(za),Ks=!!Ma,za=Ma=null,e.current=r,rm(r),Rp(),te=o,se=l,an.transition=a}else e.current=r;if(bs&&(bs=!1,$n=e,oi=i),a=e.pendingLanes,a===0&&(Qn=null),Mp(r.stateNode),Ge(e,je()),t!==null)for(s=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],s(i.value,{componentStack:i.stack,digest:i.digest});if(li)throw li=!1,e=tl,tl=null,e;return oi&1&&e.tag!==0&&Jt(),a=e.pendingLanes,a&1?e===rl?Pr++:(Pr=0,rl=e):Pr=0,st(),null}function Jt(){if($n!==null){var e=Id(oi),t=an.transition,r=se;try{if(an.transition=null,se=16>e?16:e,$n===null)var s=!1;else{if(e=$n,$n=null,oi=0,te&6)throw Error(U(331));var i=te;for(te|=4,Q=e.current;Q!==null;){var a=Q,l=a.child;if(Q.flags&16){var o=a.deletions;if(o!==null){for(var c=0;c<o.length;c++){var h=o[c];for(Q=h;Q!==null;){var d=Q;switch(d.tag){case 0:case 11:case 15:Or(8,d,a)}var p=d.child;if(p!==null)p.return=d,Q=p;else for(;Q!==null;){d=Q;var m=d.sibling,b=d.return;if(Uu(d),d===h){Q=null;break}if(m!==null){m.return=b,Q=m;break}Q=b}}}var w=a.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var j=k.sibling;k.sibling=null,k=j}while(k!==null)}}Q=a}}if(a.subtreeFlags&2064&&l!==null)l.return=a,Q=l;else e:for(;Q!==null;){if(a=Q,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Or(9,a,a.return)}var f=a.sibling;if(f!==null){f.return=a.return,Q=f;break e}Q=a.return}}var g=e.current;for(Q=g;Q!==null;){l=Q;var x=l.child;if(l.subtreeFlags&2064&&x!==null)x.return=l,Q=x;else e:for(l=g;Q!==null;){if(o=Q,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:bi(9,o)}}catch(y){xe(o,o.return,y)}if(o===l){Q=null;break e}var E=o.sibling;if(E!==null){E.return=o.return,Q=E;break e}Q=o.return}}if(te=i,st(),yn&&typeof yn.onPostCommitFiberRoot=="function")try{yn.onPostCommitFiberRoot(gi,e)}catch{}s=!0}return s}finally{se=r,an.transition=t}}return!1}function Sc(e,t,r){t=sr(r,t),t=Iu(e,t,1),e=Gn(e,t,1),t=De(),e!==null&&(ts(e,1,t),Ge(e,t))}function xe(e,t,r){if(e.tag===3)Sc(e,e,r);else for(;t!==null;){if(t.tag===3){Sc(t,e,r);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Qn===null||!Qn.has(s))){e=sr(r,e),e=Mu(t,e,1),t=Gn(t,e,1),e=De(),t!==null&&(ts(t,1,e),Ge(t,e));break}}t=t.return}}function cm(e,t,r){var s=e.pingCache;s!==null&&s.delete(t),t=De(),e.pingedLanes|=e.suspendedLanes&r,Ce===e&&(Ee&r)===r&&(be===4||be===3&&(Ee&130023424)===Ee&&500>je()-io?mt(e,0):so|=r),Ge(e,t)}function nh(e,t){t===0&&(e.mode&1?(t=fs,fs<<=1,!(fs&130023424)&&(fs=4194304)):t=1);var r=De();e=En(e,t),e!==null&&(ts(e,t,r),Ge(e,r))}function dm(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),nh(e,r)}function um(e,t){var r=0;switch(e.tag){case 13:var s=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(U(314))}s!==null&&s.delete(t),nh(e,r)}var th;th=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ke.current)Ue=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Ue=!1,Jf(e,t,r);Ue=!!(e.flags&131072)}else Ue=!1,ce&&t.flags&1048576&&au(t,Zs,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;zs(e,t),e=t.pendingProps;var i=er(t,Me.current);Yt(t,r),i=Jl(null,t,s,e,i,r);var a=Zl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,We(s)?(a=!0,Ys(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Wl(t),i.updater=wi,t.stateNode=i,i._reactInternals=t,Ua(t,s,e,r),t=Ga(null,t,s,!0,a,r)):(t.tag=0,ce&&a&&Dl(t),Ae(null,t,i,r),t=t.child),t;case 16:s=t.elementType;e:{switch(zs(e,t),e=t.pendingProps,i=s._init,s=i(s._payload),t.type=s,i=t.tag=pm(s),e=dn(s,e),i){case 0:t=Wa(null,t,s,e,r);break e;case 1:t=mc(null,t,s,e,r);break e;case 11:t=pc(null,t,s,e,r);break e;case 14:t=fc(null,t,s,dn(s.type,e),r);break e}throw Error(U(306,s,""))}return t;case 0:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:dn(s,i),Wa(e,t,s,i,r);case 1:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:dn(s,i),mc(e,t,s,i,r);case 3:e:{if(Vu(t),e===null)throw Error(U(387));s=t.pendingProps,a=t.memoizedState,i=a.element,hu(e,t),ti(t,s,null,r);var l=t.memoizedState;if(s=l.element,a.isDehydrated)if(a={element:s,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=sr(Error(U(423)),t),t=gc(e,t,s,r,i);break e}else if(s!==i){i=sr(Error(U(424)),t),t=gc(e,t,s,r,i);break e}else for(Ye=Wn(t.stateNode.containerInfo.firstChild),Je=t,ce=!0,hn=null,r=du(t,null,s,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(nr(),s===i){t=On(e,t,r);break e}Ae(e,t,s,r)}t=t.child}return t;case 5:return pu(t),e===null&&Ba(t),s=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,l=i.children,Fa(s,i)?l=null:a!==null&&Fa(s,a)&&(t.flags|=32),Au(e,t),Ae(e,t,l,r),t.child;case 6:return e===null&&Ba(t),null;case 13:return Du(e,t,r);case 4:return Gl(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=tr(t,null,s,r):Ae(e,t,s,r),t.child;case 11:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:dn(s,i),pc(e,t,s,i,r);case 7:return Ae(e,t,t.pendingProps,r),t.child;case 8:return Ae(e,t,t.pendingProps.children,r),t.child;case 12:return Ae(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(s=t.type._context,i=t.pendingProps,a=t.memoizedProps,l=i.value,ae(ei,s._currentValue),s._currentValue=l,a!==null)if(mn(a.value,l)){if(a.children===i.children&&!Ke.current){t=On(e,t,r);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var o=a.dependencies;if(o!==null){l=a.child;for(var c=o.firstContext;c!==null;){if(c.context===s){if(a.tag===1){c=Tn(-1,r&-r),c.tag=2;var h=a.updateQueue;if(h!==null){h=h.shared;var d=h.pending;d===null?c.next=c:(c.next=d.next,d.next=c),h.pending=c}}a.lanes|=r,c=a.alternate,c!==null&&(c.lanes|=r),qa(a.return,r,t),o.lanes|=r;break}c=c.next}}else if(a.tag===10)l=a.type===t.type?null:a.child;else if(a.tag===18){if(l=a.return,l===null)throw Error(U(341));l.lanes|=r,o=l.alternate,o!==null&&(o.lanes|=r),qa(l,r,t),l=a.sibling}else l=a.child;if(l!==null)l.return=a;else for(l=a;l!==null;){if(l===t){l=null;break}if(a=l.sibling,a!==null){a.return=l.return,l=a;break}l=l.return}a=l}Ae(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,s=t.pendingProps.children,Yt(t,r),i=ln(i),s=s(i),t.flags|=1,Ae(e,t,s,r),t.child;case 14:return s=t.type,i=dn(s,t.pendingProps),i=dn(s.type,i),fc(e,t,s,i,r);case 15:return zu(e,t,t.type,t.pendingProps,r);case 17:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:dn(s,i),zs(e,t),t.tag=1,We(s)?(e=!0,Ys(t)):e=!1,Yt(t,r),Pu(t,s,i),Ua(t,s,i,r),Ga(null,t,s,!0,e,r);case 19:return $u(e,t,r);case 22:return Fu(e,t,r)}throw Error(U(156,t.tag))};function rh(e,t){return Ed(e,t)}function hm(e,t,r,s){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function sn(e,t,r,s){return new hm(e,t,r,s)}function co(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pm(e){if(typeof e=="function")return co(e)?1:0;if(e!=null){if(e=e.$$typeof,e===_l)return 11;if(e===Ll)return 14}return 2}function Yn(e,t){var r=e.alternate;return r===null?(r=sn(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Vs(e,t,r,s,i,a){var l=2;if(s=e,typeof e=="function")co(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Et:return gt(r.children,i,a,t);case Tl:l=8,i|=8;break;case ma:return e=sn(12,r,t,i|2),e.elementType=ma,e.lanes=a,e;case ga:return e=sn(13,r,t,i),e.elementType=ga,e.lanes=a,e;case xa:return e=sn(19,r,t,i),e.elementType=xa,e.lanes=a,e;case pd:return Ci(r,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ud:l=10;break e;case hd:l=9;break e;case _l:l=11;break e;case Ll:l=14;break e;case zn:l=16,s=null;break e}throw Error(U(130,e==null?e:typeof e,""))}return t=sn(l,r,t,i),t.elementType=e,t.type=s,t.lanes=a,t}function gt(e,t,r,s){return e=sn(7,e,s,t),e.lanes=r,e}function Ci(e,t,r,s){return e=sn(22,e,s,t),e.elementType=pd,e.lanes=r,e.stateNode={isHidden:!1},e}function ra(e,t,r){return e=sn(6,e,null,t),e.lanes=r,e}function sa(e,t,r){return t=sn(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function fm(e,t,r,s,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ai(0),this.expirationTimes=Ai(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ai(0),this.identifierPrefix=s,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function uo(e,t,r,s,i,a,l,o,c){return e=new fm(e,t,r,o,c),t===1?(t=1,a===!0&&(t|=8)):t=0,a=sn(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:s,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wl(a),e}function mm(e,t,r){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Lt,key:s==null?null:""+s,children:e,containerInfo:t,implementation:r}}function sh(e){if(!e)return nt;e=e._reactInternals;e:{if(wt(e)!==e||e.tag!==1)throw Error(U(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(We(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(U(171))}if(e.tag===1){var r=e.type;if(We(r))return su(e,r,t)}return t}function ih(e,t,r,s,i,a,l,o,c){return e=uo(r,s,!0,e,i,a,l,o,c),e.context=sh(null),r=e.current,s=De(),i=Xn(r),a=Tn(s,i),a.callback=t??null,Gn(r,a,i),e.current.lanes=i,ts(e,i,s),Ge(e,s),e}function Ti(e,t,r,s){var i=t.current,a=De(),l=Xn(i);return r=sh(r),t.context===null?t.context=r:t.pendingContext=r,t=Tn(a,l),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=Gn(i,t,l),e!==null&&(fn(e,i,l,a),Ps(e,i,l)),l}function di(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Cc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function ho(e,t){Cc(e,t),(e=e.alternate)&&Cc(e,t)}function gm(){return null}var ah=typeof reportError=="function"?reportError:function(e){console.error(e)};function po(e){this._internalRoot=e}_i.prototype.render=po.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(U(409));Ti(e,t,null,null)};_i.prototype.unmount=po.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Nt(function(){Ti(null,e,null,null)}),t[Ln]=null}};function _i(e){this._internalRoot=e}_i.prototype.unstable_scheduleHydration=function(e){if(e){var t=Fd();e={blockedOn:null,target:e,priority:t};for(var r=0;r<An.length&&t!==0&&t<An[r].priority;r++);An.splice(r,0,e),r===0&&Vd(e)}};function fo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Li(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Tc(){}function xm(e,t,r,s,i){if(i){if(typeof s=="function"){var a=s;s=function(){var h=di(l);a.call(h)}}var l=ih(t,s,e,0,null,!1,!1,"",Tc);return e._reactRootContainer=l,e[Ln]=l.current,qr(e.nodeType===8?e.parentNode:e),Nt(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof s=="function"){var o=s;s=function(){var h=di(c);o.call(h)}}var c=uo(e,0,!1,null,null,!1,!1,"",Tc);return e._reactRootContainer=c,e[Ln]=c.current,qr(e.nodeType===8?e.parentNode:e),Nt(function(){Ti(t,c,r,s)}),c}function Ei(e,t,r,s,i){var a=r._reactRootContainer;if(a){var l=a;if(typeof i=="function"){var o=i;i=function(){var c=di(l);o.call(c)}}Ti(t,l,e,i)}else l=xm(r,t,e,i,s);return di(l)}Md=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=kr(t.pendingLanes);r!==0&&(Rl(t,r|1),Ge(t,je()),!(te&6)&&(ir=je()+500,st()))}break;case 13:Nt(function(){var s=En(e,1);if(s!==null){var i=De();fn(s,e,1,i)}}),ho(e,1)}};Pl=function(e){if(e.tag===13){var t=En(e,134217728);if(t!==null){var r=De();fn(t,e,134217728,r)}ho(e,134217728)}};zd=function(e){if(e.tag===13){var t=Xn(e),r=En(e,t);if(r!==null){var s=De();fn(r,e,t,s)}ho(e,t)}};Fd=function(){return se};Ad=function(e,t){var r=se;try{return se=e,t()}finally{se=r}};Ta=function(e,t,r){switch(t){case"input":if(ja(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var s=r[t];if(s!==e&&s.form===e.form){var i=ji(s);if(!i)throw Error(U(90));md(s),ja(s,i)}}}break;case"textarea":xd(e,r);break;case"select":t=r.value,t!=null&&Wt(e,!!r.multiple,t,!1)}};bd=ao;Sd=Nt;var vm={usingClientEntryPoint:!1,Events:[ss,It,ji,kd,wd,ao]},yr={findFiberByHostInstance:dt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ym={bundleType:yr.bundleType,version:yr.version,rendererPackageName:yr.rendererPackageName,rendererConfig:yr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=_d(e),e===null?null:e.stateNode},findFiberByHostInstance:yr.findFiberByHostInstance||gm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ss=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ss.isDisabled&&Ss.supportsFiber)try{gi=Ss.inject(ym),yn=Ss}catch{}}en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vm;en.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fo(t))throw Error(U(200));return mm(e,t,null,r)};en.createRoot=function(e,t){if(!fo(e))throw Error(U(299));var r=!1,s="",i=ah;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=uo(e,1,!1,null,null,r,!1,s,i),e[Ln]=t.current,qr(e.nodeType===8?e.parentNode:e),new po(t)};en.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(U(188)):(e=Object.keys(e).join(","),Error(U(268,e)));return e=_d(t),e=e===null?null:e.stateNode,e};en.flushSync=function(e){return Nt(e)};en.hydrate=function(e,t,r){if(!Li(t))throw Error(U(200));return Ei(null,e,t,!0,r)};en.hydrateRoot=function(e,t,r){if(!fo(e))throw Error(U(405));var s=r!=null&&r.hydratedSources||null,i=!1,a="",l=ah;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),t=ih(t,null,e,1,r??null,i,!1,a,l),e[Ln]=t.current,qr(e),s)for(e=0;e<s.length;e++)r=s[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new _i(t)};en.render=function(e,t,r){if(!Li(t))throw Error(U(200));return Ei(null,e,t,!1,r)};en.unmountComponentAtNode=function(e){if(!Li(e))throw Error(U(40));return e._reactRootContainer?(Nt(function(){Ei(null,null,e,!1,function(){e._reactRootContainer=null,e[Ln]=null})}),!0):!1};en.unstable_batchedUpdates=ao;en.unstable_renderSubtreeIntoContainer=function(e,t,r,s){if(!Li(r))throw Error(U(200));if(e==null||e._reactInternals===void 0)throw Error(U(38));return Ei(e,t,r,!1,s)};en.version="18.3.1-next-f1338f8080-20240426";function lh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lh)}catch(e){console.error(e)}}lh(),ld.exports=en;var jm=ld.exports,_c=jm;pa.createRoot=_c.createRoot,pa.hydrateRoot=_c.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jr(){return Jr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},Jr.apply(this,arguments)}var Bn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Bn||(Bn={}));const Lc="popstate";function Nm(e){e===void 0&&(e={});function t(s,i){let{pathname:a,search:l,hash:o}=s.location;return al("",{pathname:a,search:l,hash:o},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function r(s,i){return typeof i=="string"?i:ui(i)}return wm(t,r,null,e)}function ke(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function mo(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function km(){return Math.random().toString(36).substr(2,8)}function Ec(e,t){return{usr:e.state,key:e.key,idx:t}}function al(e,t,r,s){return r===void 0&&(r=null),Jr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?cr(t):t,{state:r,key:t&&t.key||s||km()})}function ui(e){let{pathname:t="/",search:r="",hash:s=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),s&&s!=="#"&&(t+=s.charAt(0)==="#"?s:"#"+s),t}function cr(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let s=e.indexOf("?");s>=0&&(t.search=e.substr(s),e=e.substr(0,s)),e&&(t.pathname=e)}return t}function wm(e,t,r,s){s===void 0&&(s={});let{window:i=document.defaultView,v5Compat:a=!1}=s,l=i.history,o=Bn.Pop,c=null,h=d();h==null&&(h=0,l.replaceState(Jr({},l.state,{idx:h}),""));function d(){return(l.state||{idx:null}).idx}function p(){o=Bn.Pop;let j=d(),f=j==null?null:j-h;h=j,c&&c({action:o,location:k.location,delta:f})}function m(j,f){o=Bn.Push;let g=al(k.location,j,f);h=d()+1;let x=Ec(g,h),E=k.createHref(g);try{l.pushState(x,"",E)}catch(y){if(y instanceof DOMException&&y.name==="DataCloneError")throw y;i.location.assign(E)}a&&c&&c({action:o,location:k.location,delta:1})}function b(j,f){o=Bn.Replace;let g=al(k.location,j,f);h=d();let x=Ec(g,h),E=k.createHref(g);l.replaceState(x,"",E),a&&c&&c({action:o,location:k.location,delta:0})}function w(j){let f=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof j=="string"?j:ui(j);return g=g.replace(/ $/,"%20"),ke(f,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,f)}let k={get action(){return o},get location(){return e(i,l)},listen(j){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Lc,p),c=j,()=>{i.removeEventListener(Lc,p),c=null}},createHref(j){return t(i,j)},createURL:w,encodeLocation(j){let f=w(j);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:m,replace:b,go(j){return l.go(j)}};return k}var Oc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Oc||(Oc={}));function bm(e,t,r){return r===void 0&&(r="/"),Sm(e,t,r)}function Sm(e,t,r,s){let i=typeof t=="string"?cr(t):t,a=go(i.pathname||"/",r);if(a==null)return null;let l=oh(e);Cm(l);let o=null;for(let c=0;o==null&&c<l.length;++c){let h=Am(a);o=Mm(l[c],h)}return o}function oh(e,t,r,s){t===void 0&&(t=[]),r===void 0&&(r=[]),s===void 0&&(s="");let i=(a,l,o)=>{let c={relativePath:o===void 0?a.path||"":o,caseSensitive:a.caseSensitive===!0,childrenIndex:l,route:a};c.relativePath.startsWith("/")&&(ke(c.relativePath.startsWith(s),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(s.length));let h=Jn([s,c.relativePath]),d=r.concat(c);a.children&&a.children.length>0&&(ke(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),oh(a.children,t,d,h)),!(a.path==null&&!a.index)&&t.push({path:h,score:Pm(h,a.index),routesMeta:d})};return e.forEach((a,l)=>{var o;if(a.path===""||!((o=a.path)!=null&&o.includes("?")))i(a,l);else for(let c of ch(a.path))i(a,l,c)}),t}function ch(e){let t=e.split("/");if(t.length===0)return[];let[r,...s]=t,i=r.endsWith("?"),a=r.replace(/\?$/,"");if(s.length===0)return i?[a,""]:[a];let l=ch(s.join("/")),o=[];return o.push(...l.map(c=>c===""?a:[a,c].join("/"))),i&&o.push(...l),o.map(c=>e.startsWith("/")&&c===""?"/":c)}function Cm(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Im(t.routesMeta.map(s=>s.childrenIndex),r.routesMeta.map(s=>s.childrenIndex)))}const Tm=/^:[\w-]+$/,_m=3,Lm=2,Em=1,Om=10,Rm=-2,Rc=e=>e==="*";function Pm(e,t){let r=e.split("/"),s=r.length;return r.some(Rc)&&(s+=Rm),t&&(s+=Lm),r.filter(i=>!Rc(i)).reduce((i,a)=>i+(Tm.test(a)?_m:a===""?Em:Om),s)}function Im(e,t){return e.length===t.length&&e.slice(0,-1).every((s,i)=>s===t[i])?e[e.length-1]-t[t.length-1]:0}function Mm(e,t,r){let{routesMeta:s}=e,i={},a="/",l=[];for(let o=0;o<s.length;++o){let c=s[o],h=o===s.length-1,d=a==="/"?t:t.slice(a.length)||"/",p=zm({path:c.relativePath,caseSensitive:c.caseSensitive,end:h},d),m=c.route;if(!p)return null;Object.assign(i,p.params),l.push({params:i,pathname:Jn([a,p.pathname]),pathnameBase:qm(Jn([a,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(a=Jn([a,p.pathnameBase]))}return l}function zm(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,s]=Fm(e.path,e.caseSensitive,e.end),i=t.match(r);if(!i)return null;let a=i[0],l=a.replace(/(.)\/+$/,"$1"),o=i.slice(1);return{params:s.reduce((h,d,p)=>{let{paramName:m,isOptional:b}=d;if(m==="*"){let k=o[p]||"";l=a.slice(0,a.length-k.length).replace(/(.)\/+$/,"$1")}const w=o[p];return b&&!w?h[m]=void 0:h[m]=(w||"").replace(/%2F/g,"/"),h},{}),pathname:a,pathnameBase:l,pattern:e}}function Fm(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),mo(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let s=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,o,c)=>(s.push({paramName:o,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(s.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),s]}function Am(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return mo(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function go(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,s=e.charAt(r);return s&&s!=="/"?null:e.slice(r)||"/"}const Vm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Dm=e=>Vm.test(e);function $m(e,t){t===void 0&&(t="/");let{pathname:r,search:s="",hash:i=""}=typeof e=="string"?cr(e):e,a;if(r)if(Dm(r))a=r;else{if(r.includes("//")){let l=r;r=r.replace(/\/\/+/g,"/"),mo(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+r))}r.startsWith("/")?a=Pc(r.substring(1),"/"):a=Pc(r,t)}else a=t;return{pathname:a,search:Hm(s),hash:Um(i)}}function Pc(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function ia(e,t,r,s){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Bm(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function dh(e,t){let r=Bm(e);return t?r.map((s,i)=>i===r.length-1?s.pathname:s.pathnameBase):r.map(s=>s.pathnameBase)}function uh(e,t,r,s){s===void 0&&(s=!1);let i;typeof e=="string"?i=cr(e):(i=Jr({},e),ke(!i.pathname||!i.pathname.includes("?"),ia("?","pathname","search",i)),ke(!i.pathname||!i.pathname.includes("#"),ia("#","pathname","hash",i)),ke(!i.search||!i.search.includes("#"),ia("#","search","hash",i)));let a=e===""||i.pathname==="",l=a?"/":i.pathname,o;if(l==null)o=r;else{let p=t.length-1;if(!s&&l.startsWith("..")){let m=l.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}o=p>=0?t[p]:"/"}let c=$m(i,o),h=l&&l!=="/"&&l.endsWith("/"),d=(a||l===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(h||d)&&(c.pathname+="/"),c}const Jn=e=>e.join("/").replace(/\/\/+/g,"/"),qm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Hm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Um=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Km(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const hh=["post","put","patch","delete"];new Set(hh);const Wm=["get",...hh];new Set(Wm);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zr(){return Zr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},Zr.apply(this,arguments)}const xo=u.createContext(null),Gm=u.createContext(null),bt=u.createContext(null),Oi=u.createContext(null),it=u.createContext({outlet:null,matches:[],isDataRoute:!1}),ph=u.createContext(null);function Qm(e,t){let{relative:r}=t===void 0?{}:t;as()||ke(!1);let{basename:s,navigator:i}=u.useContext(bt),{hash:a,pathname:l,search:o}=gh(e,{relative:r}),c=l;return s!=="/"&&(c=l==="/"?s:Jn([s,l])),i.createHref({pathname:c,search:o,hash:a})}function as(){return u.useContext(Oi)!=null}function ls(){return as()||ke(!1),u.useContext(Oi).location}function fh(e){u.useContext(bt).static||u.useLayoutEffect(e)}function mh(){let{isDataRoute:e}=u.useContext(it);return e?cg():Xm()}function Xm(){as()||ke(!1);let e=u.useContext(xo),{basename:t,future:r,navigator:s}=u.useContext(bt),{matches:i}=u.useContext(it),{pathname:a}=ls(),l=JSON.stringify(dh(i,r.v7_relativeSplatPath)),o=u.useRef(!1);return fh(()=>{o.current=!0}),u.useCallback(function(h,d){if(d===void 0&&(d={}),!o.current)return;if(typeof h=="number"){s.go(h);return}let p=uh(h,JSON.parse(l),a,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Jn([t,p.pathname])),(d.replace?s.replace:s.push)(p,d.state,d)},[t,s,l,a,e])}function Ym(){let{matches:e}=u.useContext(it),t=e[e.length-1];return t?t.params:{}}function gh(e,t){let{relative:r}=t===void 0?{}:t,{future:s}=u.useContext(bt),{matches:i}=u.useContext(it),{pathname:a}=ls(),l=JSON.stringify(dh(i,s.v7_relativeSplatPath));return u.useMemo(()=>uh(e,JSON.parse(l),a,r==="path"),[e,l,a,r])}function Jm(e,t){return Zm(e,t)}function Zm(e,t,r,s){as()||ke(!1);let{navigator:i}=u.useContext(bt),{matches:a}=u.useContext(it),l=a[a.length-1],o=l?l.params:{};l&&l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let h=ls(),d;if(t){var p;let j=typeof t=="string"?cr(t):t;c==="/"||(p=j.pathname)!=null&&p.startsWith(c)||ke(!1),d=j}else d=h;let m=d.pathname||"/",b=m;if(c!=="/"){let j=c.replace(/^\//,"").split("/");b="/"+m.replace(/^\//,"").split("/").slice(j.length).join("/")}let w=bm(e,{pathname:b}),k=sg(w&&w.map(j=>Object.assign({},j,{params:Object.assign({},o,j.params),pathname:Jn([c,i.encodeLocation?i.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?c:Jn([c,i.encodeLocation?i.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),a,r,s);return t&&k?u.createElement(Oi.Provider,{value:{location:Zr({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Bn.Pop}},k):k}function eg(){let e=og(),t=Km(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return u.createElement(u.Fragment,null,u.createElement("h2",null,"Unexpected Application Error!"),u.createElement("h3",{style:{fontStyle:"italic"}},t),r?u.createElement("pre",{style:i},r):null,null)}const ng=u.createElement(eg,null);class tg extends u.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?u.createElement(it.Provider,{value:this.props.routeContext},u.createElement(ph.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function rg(e){let{routeContext:t,match:r,children:s}=e,i=u.useContext(xo);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),u.createElement(it.Provider,{value:t},s)}function sg(e,t,r,s){var i;if(t===void 0&&(t=[]),r===void 0&&(r=null),s===void 0&&(s=null),e==null){var a;if(!r)return null;if(r.errors)e=r.matches;else if((a=s)!=null&&a.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let l=e,o=(i=r)==null?void 0:i.errors;if(o!=null){let d=l.findIndex(p=>p.route.id&&(o==null?void 0:o[p.route.id])!==void 0);d>=0||ke(!1),l=l.slice(0,Math.min(l.length,d+1))}let c=!1,h=-1;if(r&&s&&s.v7_partialHydration)for(let d=0;d<l.length;d++){let p=l[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(h=d),p.route.id){let{loaderData:m,errors:b}=r,w=p.route.loader&&m[p.route.id]===void 0&&(!b||b[p.route.id]===void 0);if(p.route.lazy||w){c=!0,h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}return l.reduceRight((d,p,m)=>{let b,w=!1,k=null,j=null;r&&(b=o&&p.route.id?o[p.route.id]:void 0,k=p.route.errorElement||ng,c&&(h<0&&m===0?(dg("route-fallback"),w=!0,j=null):h===m&&(w=!0,j=p.route.hydrateFallbackElement||null)));let f=t.concat(l.slice(0,m+1)),g=()=>{let x;return b?x=k:w?x=j:p.route.Component?x=u.createElement(p.route.Component,null):p.route.element?x=p.route.element:x=d,u.createElement(rg,{match:p,routeContext:{outlet:d,matches:f,isDataRoute:r!=null},children:x})};return r&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?u.createElement(tg,{location:r.location,revalidation:r.revalidation,component:k,error:b,children:g(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):g()},null)}var xh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(xh||{}),vh=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(vh||{});function ig(e){let t=u.useContext(xo);return t||ke(!1),t}function ag(e){let t=u.useContext(Gm);return t||ke(!1),t}function lg(e){let t=u.useContext(it);return t||ke(!1),t}function yh(e){let t=lg(),r=t.matches[t.matches.length-1];return r.route.id||ke(!1),r.route.id}function og(){var e;let t=u.useContext(ph),r=ag(),s=yh();return t!==void 0?t:(e=r.errors)==null?void 0:e[s]}function cg(){let{router:e}=ig(xh.UseNavigateStable),t=yh(vh.UseNavigateStable),r=u.useRef(!1);return fh(()=>{r.current=!0}),u.useCallback(function(i,a){a===void 0&&(a={}),r.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Zr({fromRouteId:t},a)))},[e,t])}const Ic={};function dg(e,t,r){Ic[e]||(Ic[e]=!0)}function ug(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function re(e){ke(!1)}function hg(e){let{basename:t="/",children:r=null,location:s,navigationType:i=Bn.Pop,navigator:a,static:l=!1,future:o}=e;as()&&ke(!1);let c=t.replace(/^\/*/,"/"),h=u.useMemo(()=>({basename:c,navigator:a,static:l,future:Zr({v7_relativeSplatPath:!1},o)}),[c,o,a,l]);typeof s=="string"&&(s=cr(s));let{pathname:d="/",search:p="",hash:m="",state:b=null,key:w="default"}=s,k=u.useMemo(()=>{let j=go(d,c);return j==null?null:{location:{pathname:j,search:p,hash:m,state:b,key:w},navigationType:i}},[c,d,p,m,b,w,i]);return k==null?null:u.createElement(bt.Provider,{value:h},u.createElement(Oi.Provider,{children:r,value:k}))}function pg(e){let{children:t,location:r}=e;return Jm(ll(t),r)}new Promise(()=>{});function ll(e,t){t===void 0&&(t=[]);let r=[];return u.Children.forEach(e,(s,i)=>{if(!u.isValidElement(s))return;let a=[...t,i];if(s.type===u.Fragment){r.push.apply(r,ll(s.props.children,a));return}s.type!==re&&ke(!1),!s.props.index||!s.props.children||ke(!1);let l={id:s.props.id||a.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(l.children=ll(s.props.children,a)),r.push(l)}),r}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ol(){return ol=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},ol.apply(this,arguments)}function fg(e,t){if(e==null)return{};var r={},s=Object.keys(e),i,a;for(a=0;a<s.length;a++)i=s[a],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function mg(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function gg(e,t){return e.button===0&&(!t||t==="_self")&&!mg(e)}const xg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],vg="6";try{window.__reactRouterVersion=vg}catch{}const yg="startTransition",Mc=op[yg];function jg(e){let{basename:t,children:r,future:s,window:i}=e,a=u.useRef();a.current==null&&(a.current=Nm({window:i,v5Compat:!0}));let l=a.current,[o,c]=u.useState({action:l.action,location:l.location}),{v7_startTransition:h}=s||{},d=u.useCallback(p=>{h&&Mc?Mc(()=>c(p)):c(p)},[c,h]);return u.useLayoutEffect(()=>l.listen(d),[l,d]),u.useEffect(()=>ug(s),[s]),u.createElement(hg,{basename:t,children:r,location:o.location,navigationType:o.action,navigator:l,future:s})}const Ng=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",kg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,bn=u.forwardRef(function(t,r){let{onClick:s,relative:i,reloadDocument:a,replace:l,state:o,target:c,to:h,preventScrollReset:d,viewTransition:p}=t,m=fg(t,xg),{basename:b}=u.useContext(bt),w,k=!1;if(typeof h=="string"&&kg.test(h)&&(w=h,Ng))try{let x=new URL(window.location.href),E=h.startsWith("//")?new URL(x.protocol+h):new URL(h),y=go(E.pathname,b);E.origin===x.origin&&y!=null?h=y+E.search+E.hash:k=!0}catch{}let j=Qm(h,{relative:i}),f=wg(h,{replace:l,state:o,target:c,preventScrollReset:d,relative:i,viewTransition:p});function g(x){s&&s(x),x.defaultPrevented||f(x)}return u.createElement("a",ol({},m,{href:w||j,onClick:k||a?s:g,ref:r,target:c}))});var zc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(zc||(zc={}));var Fc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Fc||(Fc={}));function wg(e,t){let{target:r,replace:s,state:i,preventScrollReset:a,relative:l,viewTransition:o}=t===void 0?{}:t,c=mh(),h=ls(),d=gh(e,{relative:l});return u.useCallback(p=>{if(gg(p,r)){p.preventDefault();let m=s!==void 0?s:ui(h)===ui(d);c(e,{replace:m,state:i,preventScrollReset:a,relative:l,viewTransition:o})}},[h,c,d,s,i,r,e,a,l,o])}/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var bg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),X=(e,t)=>{const r=u.forwardRef(({color:s="currentColor",size:i=24,strokeWidth:a=2,absoluteStrokeWidth:l,className:o="",children:c,...h},d)=>u.createElement("svg",{ref:d,...bg,width:i,height:i,stroke:s,strokeWidth:l?Number(a)*24/Number(i):a,className:["lucide",`lucide-${Sg(e)}`,o].join(" "),...h},[...t.map(([p,m])=>u.createElement(p,m)),...Array.isArray(c)?c:[c]]));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn=X("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=X("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=X("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=X("ArrowUpDown",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=X("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cl=X("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=X("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=X("Bug",[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",key:"xs1cw7"}],["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4",key:"k3fwyw"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mn=X("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=X("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=X("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aa=X("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=X("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=X("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=X("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ds=X("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=X("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=X("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ac=X("FileCode",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=X("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vo=X("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=X("Grid3x3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=X("HeartHandshake",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"12sd6o"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Te=X("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=X("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qn=X("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=X("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=X("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=X("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dl=X("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yo=X("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=X("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=X("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vc=X("Map",[["polygon",{points:"3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21",key:"ok2ie8"}],["line",{x1:"9",x2:"9",y1:"3",y2:"18",key:"w34qz5"}],["line",{x1:"15",x2:"15",y1:"6",y2:"21",key:"volv9a"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=X("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=X("MousePointer2",[["path",{d:"m4 4 7.07 17 2.51-7.39L21 11.07z",key:"1vqm48"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=X("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const St=X("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $e=X("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hi=X("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=X("Puzzle",[["path",{d:"M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z",key:"i0oyt7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=X("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at=X("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dr=X("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ct=X("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ul=X("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=X("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=X("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dc=X("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=X("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=X("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function Wg(){const e=ls(),[t,r]=u.useState(!1),s=e.pathname==="/"?"home":e.pathname.replace("/","").replace("_",""),i=()=>r(!t),a=()=>r(!1);u.useEffect(()=>{const o=()=>{window.innerWidth>1024&&r(!1)};return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[]),u.useEffect(()=>{t?document.body.style.overflow="hidden":document.body.style.overflow=""},[t]);const l=({to:o,icon:c,children:h,pageName:d})=>{const p=s===d;return n.jsxs(bn,{to:o,className:`nav-item ${p?"active":""}`,onClick:a,children:[n.jsx(c,{}),n.jsx("span",{children:h})]})};return n.jsxs(n.Fragment,{children:[n.jsx("button",{className:"mobile-menu-toggle",id:"mobileMenuToggle","aria-label":"Toggle menu",onClick:i,children:t?n.jsx(Ch,{}):n.jsx(Bg,{})}),n.jsx("div",{className:`sidebar-overlay ${t?"active":""}`,onClick:a}),n.jsxs("aside",{className:`sidebar ${t?"active":""}`,id:"sidebar",children:[n.jsx("div",{className:"sidebar-header",children:n.jsxs(bn,{to:"/",className:"logo-wrapper",onClick:a,children:[n.jsx("img",{src:"/logo.svg",alt:"DSA Visualizer Logo",className:"logo-icon"}),n.jsx("span",{className:"logo-text",children:"DSA Visualizer"})]})}),n.jsxs("nav",{className:"sidebar-nav",children:[n.jsxs("div",{className:"nav-section",children:[n.jsx("div",{className:"nav-section-title",children:"Explore"}),n.jsx(l,{to:"/",icon:Vg,pageName:"home",children:"Home"}),n.jsx(l,{to:"/algorithms",icon:Ig,pageName:"algorithms",children:"Algorithms"}),n.jsx(l,{to:"/practice",icon:Sh,pageName:"practice",children:"Practice"})]}),n.jsxs("div",{className:"nav-section",children:[n.jsx("div",{className:"nav-section-title",children:"More"}),n.jsx(l,{to:"/contact",icon:wh,pageName:"contact",children:"Contact"}),n.jsx(l,{to:"/contributions",icon:Ag,pageName:"contributions",children:"Contributions"})]})]}),n.jsxs("div",{className:"sidebar-footer",children:[n.jsxs("div",{className:"social-links-sidebar",children:[n.jsx("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",title:"GitHub",children:n.jsx(vo,{})}),n.jsx("a",{href:"https://www.linkedin.com/in/abdullah-mahfouz-5188b1306/",target:"_blank",rel:"noopener noreferrer",title:"LinkedIn",children:n.jsx(yo,{})})]}),n.jsx("p",{className:"copyright",children:"© 2026 Abdullah Mahfouz"})]})]})]})}function Gg(){return n.jsx("footer",{className:"main-footer",children:n.jsxs("div",{className:"footer-content",children:[n.jsxs("div",{className:"footer-social",children:[n.jsxs("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"footer-link",children:[n.jsx(vo,{}),n.jsx("span",{children:"GitHub"})]}),n.jsxs("a",{href:"https://www.linkedin.com/in/abdullah-mahfouz-5188b1306/",target:"_blank",rel:"noopener noreferrer",className:"footer-link",children:[n.jsx(yo,{}),n.jsx("span",{children:"LinkedIn"})]})]}),n.jsx("p",{className:"footer-copyright",children:"© 2026 Abdullah Mahfouz"})]})})}const ye=({children:e,size:t,className:r,...s})=>n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:t||24,height:t||24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.75,strokeLinecap:"round",strokeLinejoin:"round",className:r,...s,children:e}),_h=e=>n.jsxs(ye,{...e,children:[n.jsx("rect",{x:"4",y:"2",width:"16",height:"5",rx:"1.5"}),n.jsx("rect",{x:"4",y:"9.5",width:"16",height:"5",rx:"1.5"}),n.jsx("rect",{x:"4",y:"17",width:"16",height:"5",rx:"1.5"})]}),Lh=e=>n.jsxs(ye,{...e,children:[n.jsx("rect",{x:"1.5",y:"6",width:"5",height:"9",rx:"1.5"}),n.jsx("rect",{x:"9.5",y:"6",width:"5",height:"9",rx:"1.5"}),n.jsx("rect",{x:"17.5",y:"6",width:"5",height:"9",rx:"1.5"}),n.jsx("path",{d:"M4 19h16"}),n.jsx("path",{d:"M17.5 17l2.5 2-2.5 2"})]}),Eh=e=>n.jsxs(ye,{...e,children:[n.jsx("circle",{cx:"4",cy:"12",r:"2.5"}),n.jsx("circle",{cx:"12",cy:"12",r:"2.5"}),n.jsx("circle",{cx:"20",cy:"12",r:"2.5"}),n.jsx("path",{d:"M6.5 12h3"}),n.jsx("path",{d:"M14.5 12h3"}),n.jsx("path",{d:"M8.5 10.5l1 1.5-1 1.5"}),n.jsx("path",{d:"M16.5 10.5l1 1.5-1 1.5"})]}),Qg=e=>n.jsxs(ye,{...e,children:[n.jsx("circle",{cx:"3",cy:"19",r:"1.8"}),n.jsx("circle",{cx:"9",cy:"19",r:"1.8"}),n.jsx("circle",{cx:"15",cy:"19",r:"1.8"}),n.jsx("circle",{cx:"21",cy:"19",r:"1.8"}),n.jsx("line",{x1:"4.8",y1:"19",x2:"7.2",y2:"19"}),n.jsx("line",{x1:"10.8",y1:"19",x2:"13.2",y2:"19"}),n.jsx("line",{x1:"16.8",y1:"19",x2:"19.2",y2:"19"}),n.jsx("circle",{cx:"3",cy:"12",r:"1.8"}),n.jsx("circle",{cx:"15",cy:"12",r:"1.8"}),n.jsx("line",{x1:"4.8",y1:"12",x2:"13.2",y2:"12"}),n.jsx("circle",{cx:"3",cy:"5",r:"1.8"}),n.jsx("circle",{cx:"21",cy:"5",r:"1.8"}),n.jsx("line",{x1:"4.8",y1:"5",x2:"19.2",y2:"5"}),n.jsx("line",{x1:"3",y1:"6.8",x2:"3",y2:"10.2"}),n.jsx("line",{x1:"3",y1:"13.8",x2:"3",y2:"17.2"}),n.jsx("line",{x1:"15",y1:"13.8",x2:"15",y2:"17.2"}),n.jsx("line",{x1:"21",y1:"6.8",x2:"21",y2:"17.2"})]}),Oh=e=>n.jsxs(ye,{...e,children:[n.jsx("rect",{x:"13",y:"2",width:"9",height:"4.5",rx:"1"}),n.jsx("rect",{x:"13",y:"8.5",width:"9",height:"4.5",rx:"1"}),n.jsx("rect",{x:"13",y:"15",width:"9",height:"4.5",rx:"1"}),n.jsx("circle",{cx:"3.5",cy:"4.25",r:"1.5"}),n.jsx("circle",{cx:"3.5",cy:"10.75",r:"1.5"}),n.jsx("circle",{cx:"3.5",cy:"17.25",r:"1.5"}),n.jsx("path",{d:"M5 4.25h6.5"}),n.jsx("path",{d:"M11.5 4.25l1.5 6.5"}),n.jsx("path",{d:"M5 10.75h8"}),n.jsx("path",{d:"M5 17.25h6.5"}),n.jsx("path",{d:"M11.5 17.25l1.5-3"})]}),Xg=e=>n.jsxs(ye,{...e,children:[n.jsx("rect",{x:"2",y:"3",width:"6",height:"5",rx:"1"}),n.jsx("rect",{x:"2",y:"10",width:"6",height:"5",rx:"1"}),n.jsx("rect",{x:"2",y:"17",width:"6",height:"5",rx:"1"}),n.jsx("line",{x1:"8",y1:"5.5",x2:"11",y2:"5.5"}),n.jsx("circle",{cx:"13",cy:"5.5",r:"1.8"}),n.jsx("line",{x1:"14.8",y1:"5.5",x2:"17.5",y2:"5.5"}),n.jsx("circle",{cx:"19.5",cy:"5.5",r:"1.8"}),n.jsx("line",{x1:"8",y1:"12.5",x2:"11",y2:"12.5"}),n.jsx("circle",{cx:"13",cy:"12.5",r:"1.8"}),n.jsx("line",{x1:"8",y1:"19.5",x2:"10",y2:"19.5"}),n.jsx("circle",{cx:"10.5",cy:"19.5",r:"0.5",fill:"currentColor"})]}),$c=e=>n.jsxs(ye,{...e,children:[n.jsx("rect",{x:"3",y:"8",width:"3.5",height:"8",rx:"1"}),n.jsx("rect",{x:"7.5",y:"8",width:"3.5",height:"8",rx:"1"}),n.jsx("rect",{x:"12",y:"8",width:"3.5",height:"8",rx:"1"}),n.jsx("rect",{x:"16.5",y:"8",width:"3.5",height:"8",rx:"1"}),n.jsx("line",{x1:"4",y1:"10",x2:"5.5",y2:"14"}),n.jsx("line",{x1:"5.5",y1:"10",x2:"4",y2:"14"}),n.jsx("path",{d:"M4.75 6.5 C4.75 3 9.25 3 9.25 6.5"}),n.jsx("path",{d:"M8.25 5l1 1.5-1.5 0.5"})]}),Yg=e=>n.jsxs(ye,{...e,children:[n.jsx("circle",{cx:"12",cy:"4",r:"2.5"}),n.jsx("circle",{cx:"6",cy:"13",r:"2.5"}),n.jsx("circle",{cx:"18",cy:"13",r:"2.5"}),n.jsx("circle",{cx:"3",cy:"21",r:"1.8"}),n.jsx("circle",{cx:"9",cy:"21",r:"1.8"}),n.jsx("circle",{cx:"15",cy:"21",r:"1.8"}),n.jsx("circle",{cx:"21",cy:"21",r:"1.8"}),n.jsx("line",{x1:"10.2",y1:"5.8",x2:"7.8",y2:"11.2"}),n.jsx("line",{x1:"13.8",y1:"5.8",x2:"16.2",y2:"11.2"}),n.jsx("line",{x1:"4.5",y1:"14.8",x2:"3.5",y2:"19.2"}),n.jsx("line",{x1:"7.5",y1:"14.8",x2:"8.5",y2:"19.2"}),n.jsx("line",{x1:"16.5",y1:"14.8",x2:"15.5",y2:"19.2"}),n.jsx("line",{x1:"19.5",y1:"14.8",x2:"20.5",y2:"19.2"})]}),Rh=e=>n.jsxs(ye,{...e,children:[n.jsx("circle",{cx:"12",cy:"4.5",r:"2.5"}),n.jsx("circle",{cx:"7",cy:"13",r:"2.5"}),n.jsx("circle",{cx:"17",cy:"13",r:"2.5"}),n.jsx("circle",{cx:"4",cy:"20.5",r:"2"}),n.jsx("circle",{cx:"20",cy:"20.5",r:"2"}),n.jsx("line",{x1:"10.3",y1:"6.2",x2:"8.7",y2:"11.3"}),n.jsx("line",{x1:"13.7",y1:"6.2",x2:"15.3",y2:"11.3"}),n.jsx("line",{x1:"5.5",y1:"14.8",x2:"4.8",y2:"18.5"}),n.jsx("line",{x1:"18.5",y1:"14.8",x2:"19.2",y2:"18.5"})]}),Jg=e=>n.jsxs(ye,{...e,children:[n.jsx("circle",{cx:"12",cy:"4",r:"2.5"}),n.jsx("circle",{cx:"6.5",cy:"12",r:"2.5"}),n.jsx("circle",{cx:"17.5",cy:"12",r:"2.5"}),n.jsx("circle",{cx:"3.5",cy:"20",r:"2"}),n.jsx("circle",{cx:"9.5",cy:"20",r:"2"}),n.jsx("circle",{cx:"14.5",cy:"20",r:"2"}),n.jsx("circle",{cx:"20.5",cy:"20",r:"2"}),n.jsx("line",{x1:"10.2",y1:"5.7",x2:"8.3",y2:"10.3"}),n.jsx("line",{x1:"13.8",y1:"5.7",x2:"15.7",y2:"10.3"}),n.jsx("line",{x1:"5",y1:"13.8",x2:"4.2",y2:"18"}),n.jsx("line",{x1:"8",y1:"13.8",x2:"8.8",y2:"18"}),n.jsx("line",{x1:"16",y1:"13.8",x2:"15.2",y2:"18"}),n.jsx("line",{x1:"19",y1:"13.8",x2:"19.8",y2:"18"})]}),Zg=e=>n.jsxs(ye,{...e,children:[n.jsx("circle",{cx:"12",cy:"4.5",r:"2.5"}),n.jsx("circle",{cx:"12",cy:"4.5",r:"4",opacity:"0.3"}),n.jsx("circle",{cx:"6",cy:"13",r:"2.5"}),n.jsx("circle",{cx:"18",cy:"13",r:"2.5"}),n.jsx("circle",{cx:"3.5",cy:"20.5",r:"2"}),n.jsx("circle",{cx:"15.5",cy:"20.5",r:"2"}),n.jsx("line",{x1:"10.2",y1:"6.2",x2:"7.8",y2:"11.2"}),n.jsx("line",{x1:"13.8",y1:"6.2",x2:"16.2",y2:"11.2"}),n.jsx("line",{x1:"4.7",y1:"14.8",x2:"3.9",y2:"18.5"}),n.jsx("line",{x1:"16.8",y1:"14.8",x2:"16",y2:"18.5"})]}),ex=e=>n.jsxs(ye,{...e,children:[n.jsx("circle",{cx:"12",cy:"4",r:"2.5"}),n.jsx("circle",{cx:"7",cy:"12",r:"2.5"}),n.jsx("circle",{cx:"18",cy:"10",r:"2.5"}),n.jsx("circle",{cx:"4",cy:"20",r:"2"}),n.jsx("circle",{cx:"10",cy:"19",r:"2"}),n.jsx("circle",{cx:"21",cy:"17.5",r:"2"}),n.jsx("line",{x1:"10.2",y1:"5.7",x2:"8.7",y2:"10.3"}),n.jsx("line",{x1:"13.8",y1:"5.2",x2:"16.2",y2:"8.5"}),n.jsx("line",{x1:"5.5",y1:"13.8",x2:"4.6",y2:"18"}),n.jsx("line",{x1:"8.5",y1:"13.8",x2:"9.5",y2:"17"}),n.jsx("line",{x1:"19.8",y1:"12",x2:"20.6",y2:"15.5"})]}),nx=e=>n.jsxs(ye,{...e,children:[n.jsx("circle",{cx:"12",cy:"3.5",r:"2.5"}),n.jsx("circle",{cx:"6.5",cy:"12",r:"2.5"}),n.jsx("circle",{cx:"17.5",cy:"12",r:"2.5"}),n.jsx("circle",{cx:"3",cy:"20.5",r:"2"}),n.jsx("circle",{cx:"10",cy:"20.5",r:"2"}),n.jsx("circle",{cx:"14",cy:"20.5",r:"2"}),n.jsx("circle",{cx:"21",cy:"20.5",r:"2"}),n.jsx("line",{x1:"10.2",y1:"5.2",x2:"8.3",y2:"10.3"}),n.jsx("line",{x1:"13.8",y1:"5.2",x2:"15.7",y2:"10.3"}),n.jsx("line",{x1:"5",y1:"13.8",x2:"3.7",y2:"18.5"}),n.jsx("line",{x1:"8",y1:"13.8",x2:"9.3",y2:"18.5"}),n.jsx("line",{x1:"16",y1:"13.8",x2:"14.7",y2:"18.5"}),n.jsx("line",{x1:"19",y1:"13.8",x2:"20.3",y2:"18.5"}),n.jsx("path",{d:"M22 8l0-5"}),n.jsx("path",{d:"M20.5 4.5L22 3l1.5 1.5",opacity:"0.5"})]}),tx=e=>n.jsxs(ye,{...e,children:[n.jsx("circle",{cx:"12",cy:"3.5",r:"2.5"}),n.jsx("circle",{cx:"6.5",cy:"12",r:"2.5"}),n.jsx("circle",{cx:"17.5",cy:"12",r:"2.5"}),n.jsx("circle",{cx:"3",cy:"20.5",r:"2"}),n.jsx("circle",{cx:"10",cy:"20.5",r:"2"}),n.jsx("circle",{cx:"14",cy:"20.5",r:"2"}),n.jsx("circle",{cx:"21",cy:"20.5",r:"2"}),n.jsx("line",{x1:"10.2",y1:"5.2",x2:"8.3",y2:"10.3"}),n.jsx("line",{x1:"13.8",y1:"5.2",x2:"15.7",y2:"10.3"}),n.jsx("line",{x1:"5",y1:"13.8",x2:"3.7",y2:"18.5"}),n.jsx("line",{x1:"8",y1:"13.8",x2:"9.3",y2:"18.5"}),n.jsx("line",{x1:"16",y1:"13.8",x2:"14.7",y2:"18.5"}),n.jsx("line",{x1:"19",y1:"13.8",x2:"20.3",y2:"18.5"}),n.jsx("path",{d:"M22 3l0 5"}),n.jsx("path",{d:"M20.5 6.5L22 8l1.5-1.5",opacity:"0.5"})]}),Ph=e=>n.jsxs(ye,{...e,children:[n.jsx("circle",{cx:"12",cy:"3",r:"2"}),n.jsx("circle",{cx:"4",cy:"10",r:"2"}),n.jsx("circle",{cx:"20",cy:"10",r:"2"}),n.jsx("circle",{cx:"6.5",cy:"20",r:"2"}),n.jsx("circle",{cx:"17.5",cy:"20",r:"2"}),n.jsx("line",{x1:"10.2",y1:"4.2",x2:"5.8",y2:"8.8"}),n.jsx("line",{x1:"13.8",y1:"4.2",x2:"18.2",y2:"8.8"}),n.jsx("line",{x1:"4.5",y1:"12",x2:"6",y2:"18"}),n.jsx("line",{x1:"19.5",y1:"12",x2:"18",y2:"18"}),n.jsx("line",{x1:"8.5",y1:"20",x2:"15.5",y2:"20"}),n.jsx("line",{x1:"6",y1:"10.5",x2:"18",y2:"10.5",opacity:"0.4"})]}),rx=e=>n.jsxs(ye,{...e,children:[n.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"1.5"}),n.jsx("line",{x1:"7",y1:"2",x2:"7",y2:"22"}),n.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"22"}),n.jsx("line",{x1:"17",y1:"2",x2:"17",y2:"22"}),n.jsx("line",{x1:"2",y1:"7",x2:"22",y2:"7"}),n.jsx("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),n.jsx("line",{x1:"2",y1:"17",x2:"22",y2:"17"}),n.jsx("rect",{x:"7.75",y:"2.75",width:"3.5",height:"3.5",rx:"0.5",fill:"currentColor",opacity:"0.25",stroke:"none"}),n.jsx("rect",{x:"12.75",y:"7.75",width:"3.5",height:"3.5",rx:"0.5",fill:"currentColor",opacity:"0.25",stroke:"none"}),n.jsx("rect",{x:"2.75",y:"12.75",width:"3.5",height:"3.5",rx:"0.5",fill:"currentColor",opacity:"0.25",stroke:"none"}),n.jsx("rect",{x:"17.75",y:"17.75",width:"3.5",height:"3.5",rx:"0.5",fill:"currentColor",opacity:"0.25",stroke:"none"})]}),sx=e=>n.jsxs(ye,{...e,children:[n.jsx("circle",{cx:"4",cy:"5",r:"2"}),n.jsx("circle",{cx:"4",cy:"12",r:"2"}),n.jsx("circle",{cx:"4",cy:"19",r:"2"}),n.jsx("line",{x1:"6",y1:"5",x2:"9",y2:"5"}),n.jsx("line",{x1:"6",y1:"12",x2:"9",y2:"12"}),n.jsx("line",{x1:"6",y1:"19",x2:"9",y2:"19"}),n.jsx("rect",{x:"9.5",y:"2.5",width:"4.5",height:"5",rx:"1"}),n.jsx("rect",{x:"15",y:"2.5",width:"4.5",height:"5",rx:"1"}),n.jsx("rect",{x:"9.5",y:"9.5",width:"4.5",height:"5",rx:"1"}),n.jsx("rect",{x:"15",y:"9.5",width:"4.5",height:"5",rx:"1"}),n.jsx("rect",{x:"20.5",y:"9.5",width:"2",height:"5",rx:"0.5",opacity:"0.4"}),n.jsx("rect",{x:"9.5",y:"16.5",width:"4.5",height:"5",rx:"1"})]}),ix=e=>n.jsxs(ye,{...e,children:[n.jsx("circle",{cx:"12",cy:"12",r:"2.5"}),n.jsx("circle",{cx:"12",cy:"12",r:"6",opacity:"0.5",strokeDasharray:"2 2"}),n.jsx("circle",{cx:"12",cy:"12",r:"9.5",opacity:"0.25",strokeDasharray:"2 2"}),n.jsx("circle",{cx:"6",cy:"12",r:"1.5"}),n.jsx("circle",{cx:"18",cy:"12",r:"1.5"}),n.jsx("circle",{cx:"12",cy:"6",r:"1.5"}),n.jsx("circle",{cx:"12",cy:"18",r:"1.5"}),n.jsx("circle",{cx:"3.5",cy:"7",r:"1.3",opacity:"0.5"}),n.jsx("circle",{cx:"20.5",cy:"7",r:"1.3",opacity:"0.5"}),n.jsx("circle",{cx:"3.5",cy:"17",r:"1.3",opacity:"0.5"}),n.jsx("circle",{cx:"20.5",cy:"17",r:"1.3",opacity:"0.5"})]}),ax=e=>n.jsxs(ye,{...e,children:[n.jsx("circle",{cx:"12",cy:"3",r:"2"}),n.jsx("circle",{cx:"6",cy:"10",r:"2"}),n.jsx("circle",{cx:"18",cy:"10",r:"2"}),n.jsx("circle",{cx:"3",cy:"17",r:"2"}),n.jsx("circle",{cx:"9",cy:"17",r:"2"}),n.jsx("circle",{cx:"6",cy:"22",r:"1.5"}),n.jsx("line",{x1:"10.5",y1:"4.5",x2:"7.5",y2:"8.5"}),n.jsx("line",{x1:"13.5",y1:"4.5",x2:"16.5",y2:"8.5"}),n.jsx("line",{x1:"4.5",y1:"11.5",x2:"3.5",y2:"15.5"}),n.jsx("line",{x1:"7.5",y1:"11.5",x2:"8.5",y2:"15.5"}),n.jsx("line",{x1:"3.5",y1:"19",x2:"5.2",y2:"20.8"}),n.jsx("path",{d:"M12 3 L6 10 L3 17 L6 22",strokeWidth:"2.5",opacity:"0.25"})]}),lx=e=>n.jsxs(ye,{...e,children:[n.jsx("rect",{x:"1",y:"9",width:"5",height:"6",rx:"1.5"}),n.jsx("rect",{x:"7.5",y:"9",width:"5",height:"6",rx:"1.5"}),n.jsx("rect",{x:"14",y:"9",width:"5",height:"6",rx:"1.5"}),n.jsx("path",{d:"M19 12h2.5"}),n.jsx("path",{d:"M20.5 10.5l1.5 1.5-1.5 1.5"})]}),ox=e=>n.jsxs(ye,{...e,children:[n.jsx("circle",{cx:"12",cy:"4",r:"2.5"}),n.jsx("circle",{cx:"5",cy:"13",r:"2.5"}),n.jsx("circle",{cx:"19",cy:"13",r:"2.5"}),n.jsx("circle",{cx:"12",cy:"21",r:"2"}),n.jsx("line",{x1:"10.2",y1:"5.8",x2:"6.8",y2:"11.2"}),n.jsx("line",{x1:"13.8",y1:"5.8",x2:"17.2",y2:"11.2"}),n.jsx("line",{x1:"6.5",y1:"15",x2:"10.5",y2:"19.5"}),n.jsx("line",{x1:"17.5",y1:"15",x2:"13.5",y2:"19.5"})]}),cx=e=>n.jsxs(ye,{...e,children:[n.jsx("circle",{cx:"12",cy:"3.5",r:"2.5"}),n.jsx("circle",{cx:"6.5",cy:"12",r:"2.5"}),n.jsx("circle",{cx:"17.5",cy:"12",r:"2.5"}),n.jsx("circle",{cx:"3.5",cy:"20.5",r:"2"}),n.jsx("circle",{cx:"9.5",cy:"20.5",r:"2"}),n.jsx("circle",{cx:"14.5",cy:"20.5",r:"2"}),n.jsx("circle",{cx:"20.5",cy:"20.5",r:"2"}),n.jsx("line",{x1:"10.3",y1:"5.2",x2:"8.3",y2:"10.3"}),n.jsx("line",{x1:"13.7",y1:"5.2",x2:"15.7",y2:"10.3"}),n.jsx("line",{x1:"5",y1:"13.8",x2:"4.2",y2:"18.5"}),n.jsx("line",{x1:"8",y1:"13.8",x2:"8.8",y2:"18.5"}),n.jsx("line",{x1:"16",y1:"13.8",x2:"15.2",y2:"18.5"}),n.jsx("line",{x1:"19",y1:"13.8",x2:"19.8",y2:"18.5"})]}),dx=[{icon:_h,name:"Stack",desc:"Last in, first out. Push, pop, and peek in constant time.",tag:"O(1)",path:"/stack"},{icon:Lh,name:"Queue",desc:"First in, first out. Enqueue and dequeue operations.",tag:"O(1)",path:"/queue"},{icon:Eh,name:"Linked List",desc:"Dynamic chain of nodes with pointer-based traversal.",tag:"O(1) insert",path:"/linkedlist"},{icon:Rh,name:"Binary Search Tree",desc:"Ordered tree for logarithmic search and insertion.",tag:"O(log n)",path:"/bst"},{icon:Oh,name:"Hash Table",desc:"Key-value mapping with collision handling strategies.",tag:"O(1) avg",path:"/hashtable_chaining"},{icon:Ph,name:"Graph Algorithms",desc:"BFS, DFS, Dijkstra, and minimum spanning trees.",tag:"Traversal",path:"/dijkstra"}];function ux(){return n.jsxs(n.Fragment,{children:[n.jsxs("section",{className:"home-hero",children:[n.jsx("div",{className:"home-hero-glow","aria-hidden":"true"}),n.jsxs("div",{className:"home-hero-inner",children:[n.jsxs("h1",{children:["Data Structures",n.jsx("br",{}),n.jsx("span",{children:"& Algorithms"})]}),n.jsx("p",{children:"Visualize operations step by step, interact with live structures, and build real intuition for how algorithms work."}),n.jsxs("div",{className:"home-hero-actions",children:[n.jsxs(bn,{to:"/algorithms",className:"home-btn home-btn--primary",children:["Explore Visualizers",n.jsx(de,{size:18})]}),n.jsxs(bn,{to:"/practice",className:"home-btn home-btn--ghost",children:[n.jsx(Sh,{size:18}),"Practice Problems"]})]})]})]}),n.jsxs("section",{className:"home-section",children:[n.jsxs("header",{className:"home-section-head",children:[n.jsx("h2",{children:"Featured"}),n.jsxs(bn,{to:"/algorithms",className:"home-link-muted",children:["All visualizers ",n.jsx(de,{size:15})]})]}),n.jsx("div",{className:"home-cards",children:dx.map((e,t)=>n.jsxs(bn,{to:e.path,className:"home-card",style:{"--stagger":`${t*.05}s`},children:[n.jsx("div",{className:"home-card-icon",children:n.jsx(e.icon,{})}),n.jsxs("div",{className:"home-card-body",children:[n.jsx("h3",{children:e.name}),n.jsx("p",{children:e.desc})]}),n.jsx("span",{className:"home-card-tag",children:e.tag})]},e.name))})]}),n.jsx("section",{className:"home-section home-section--alt",children:n.jsxs("div",{className:"home-banner",children:[n.jsxs("div",{children:[n.jsx("h2",{children:"Practice Problems"}),n.jsx("p",{children:"22 curated problems across arrays, trees, graphs, dynamic programming, and more. Built-in editor with instant test feedback."})]}),n.jsxs(bn,{to:"/practice",className:"home-btn home-btn--primary",children:["Start Practicing",n.jsx(de,{size:18})]})]})})]})}function hx(){const[e,t]=u.useState(null),r=i=>{t(e===i?null:i)},s=[{id:"linear",name:"Linear Data Structures",icon:lx,description:"Elements stored sequentially where each element has a unique predecessor and successor. These are the building blocks of computer science — simple to implement yet powerful enough to solve complex problems.",color:"#6366f1",items:[{to:"/stack",icon:_h,title:"Stack",description:"LIFO (Last In, First Out) — imagine a stack of plates where you can only add or remove from the top. The most recent item is always accessed first. Push adds to top, Pop removes from top. Both operations are O(1) constant time. Essential for: browser back button (page history), undo/redo in editors, function call management in recursion, parsing expressions like (a+b)*c, and depth-first search algorithms.",available:!0},{to:"/queue",icon:Lh,title:"Queue",description:"FIFO (First In, First Out) — like waiting in line at a coffee shop. The first person to arrive gets served first. Enqueue adds to the back, Dequeue removes from front. Both O(1) operations. Used everywhere: print job scheduling, CPU task management, breadth-first search (BFS) in graphs, handling requests in web servers, and buffering data streams like video playback.",available:!0},{to:"/linkedlist",icon:Eh,title:"Linked List",description:"A chain of nodes where each node stores data and a pointer to the next node. Unlike arrays, memory doesn't need to be contiguous — nodes can be scattered in memory. Insertion/deletion at known positions is O(1), but finding a position is O(n). Perfect for: implementing stacks/queues, music playlists (next/previous song), browser history, memory allocation in operating systems, and polynomial arithmetic.",available:!0},{to:"/skiplist",icon:Qg,title:"Skip List",description:'A probabilistic data structure that uses multiple layers of linked lists with decreasing density. Express lanes skip over elements like a train system — higher levels let you "skip" to your destination faster. Achieves O(log n) average for search, insert, and delete. Used in Redis for sorted sets, LevelDB for in-memory indexing, and concurrent data structures where lock-free operation is critical.',available:!0}]},{id:"hash",name:"Hash-Tables",icon:Oh,description:"Revolutionary data structures that use hash functions to map keys to array indices, enabling O(1) average-case lookup, insertion, and deletion. The backbone of databases, caches, and any system requiring fast key-value access.",color:"#10b981",items:[{to:"/hashtable_linear",icon:$c,title:"Linear Probing",description:'Open addressing collision resolution: when a collision occurs (two keys hash to same index), simply check the next slot, then the next, until an empty slot is found. Pros: excellent cache performance since data is stored contiguously, simple implementation. Cons: can cause "primary clustering" where long runs of occupied slots form, degrading performance. Load factor should stay below 0.7 for efficiency.',available:!0},{to:"/hashtable_quadratic",icon:$c,title:"Quadratic Probing",description:'Instead of checking consecutive slots, probe at quadratic intervals: 1², 2², 3²... positions away from the original hash. This eliminates primary clustering but can cause "secondary clustering" where keys with the same hash follow the same probe sequence. Table size should be prime and load factor < 0.5 to guarantee finding an empty slot. Used when cache performance is less critical than even distribution.',available:!0},{to:"/hashtable_chaining",icon:Xg,title:"Separate Chaining",description:"Each array slot holds a linked list (chain) of all entries that hash to that index. No limit on how many items can be stored — just grow the chains. Handles high load factors gracefully (even > 1.0). Simpler deletion than open addressing. Used in Java's HashMap, Python's dict (with optimization). Trade-off: extra memory for pointers, potentially poor cache performance with long chains.",available:!0}]},{id:"heaps",name:"Priority Queues & Heaps",icon:cx,description:"Complete binary trees satisfying the heap property — either every parent ≥ children (max-heap) or every parent ≤ children (min-heap). Heaps power priority queues, enabling O(1) access to the extreme element and O(log n) insertions and deletions.",color:"#ec4899",items:[{to:"/minheap",icon:nx,title:"Min Heap",description:`Every parent node is smaller than or equal to its children, so the minimum element is always at the root — accessible in O(1). Insert and extract-min are O(log n) as elements "bubble up" or "sink down" to maintain the heap property. Critical for: Dijkstra's shortest path algorithm, Prim's minimum spanning tree, job schedulers (process with smallest priority runs next), and efficiently finding the k largest elements in a stream.`,available:!0},{to:"/maxheap",icon:tx,title:"Max Heap",description:"The mirror of min-heap: every parent ≥ children, maximum at root. Extract-max in O(1), insert and delete in O(log n). Powers: Heapsort algorithm (in-place O(n log n) sorting), priority queues where highest priority goes first, finding k smallest elements, implementing a median-finding structure (use one min-heap + one max-heap), and bandwidth management in network routers.",available:!0}]},{id:"trees",name:"Binary Trees",icon:ox,description:"Hierarchical data structures where data flows from a root node down through children. Trees enable O(log n) operations on sorted data and model real-world hierarchies like file systems, organization charts, and decision trees in AI/ML.",color:"#f59e0b",items:[{to:"/binarytree",icon:Yg,title:"Binary Tree Traversals",description:"Master the four fundamental ways to visit every node in a binary tree: INORDER (Left→Root→Right) visits nodes in sorted order for BST, used for expression trees; PREORDER (Root→Left→Right) processes root first, perfect for copying trees or creating prefix expressions; POSTORDER (Left→Right→Root) processes children before parent, used for deleting trees or postfix notation; LEVEL-ORDER (BFS) visits level by level, used for finding shortest paths and printing tree structure.",available:!0},{to:"/bst",icon:Rh,title:"Binary Search Tree",description:`The fundamental ordered tree: every node's left subtree contains only smaller values, right subtree only larger values. This property enables O(log n) search by eliminating half the tree at each step — like binary search but in tree form. Supports efficient range queries. Caveat: can degrade to O(n) if insertions create an unbalanced "stick". Foundation for databases, symbol tables, and more advanced balanced trees.`,available:!0},{to:"/avl",icon:Jg,title:"AVL Tree",description:"The first self-balancing BST, invented in 1962. Maintains strict balance: height difference between left and right subtrees ≤ 1 at every node. When insertion/deletion violates this, the tree self-corrects using rotations (single or double). Guarantees O(log n) for all operations. More rigidly balanced than Red-Black trees, so faster lookups but slightly slower insertions. Used when reads far exceed writes.",available:!0},{to:"/splay",icon:Zg,title:"Splay Tree",description:`A self-adjusting BST with a clever optimization: every accessed node is "splayed" (rotated) to the root. No explicit balance condition, yet achieves O(log n) amortized time. Recently accessed items stay near the root — perfect for caches where some items are accessed repeatedly (temporal locality). Used in Windows NT's virtual memory management, GCC's implementation of certain data structures, and network routers.`,available:!0},{to:"/treap",icon:ex,title:"Treap",description:"A randomized BST that combines tree and heap properties. Each node has a key (BST-ordered) and a random priority (max-heap-ordered). Rotations restore heap order after insertion, giving O(log n) expected time for all operations without complex rebalancing logic. Supports efficient split and merge. Widely used in competitive programming and as a simpler alternative to AVL/Red-Black trees.",available:!0}]},{id:"Graphs",name:"Graphs",icon:Ph,description:"Graphs model relationships between objects using vertices (nodes) and edges (connections). They power social networks, GPS navigation, recommendation systems, and the internet itself. Understanding graphs unlocks solutions to complex real-world problems like finding shortest paths, detecting communities, and optimizing networks.",color:"#ef4444",items:[{to:"/adjacency-matrix",icon:rx,title:"Adjacency Matrix",description:"A 2D array used to represent a finite graph. Each cell at (i, j) indicates if there is an edge from vertex i to vertex j. Simple and fast for dense graphs, but uses O(V^2) space. Not practical for large, sparse graphs.",available:!0},{to:"/adjacency-list",icon:sx,title:"Adjacency List",description:"A space-efficient way to represent a graph. Each vertex stores a list of adjacent vertices. Ideal for sparse graphs, supports efficient iteration over neighbors. Commonly used in network routing, social networks, and recommendation systems.",available:!0},{to:"/bfs",icon:ix,title:"Breadth-First Search (BFS)",description:"A fundamental graph traversal algorithm that explores neighbors level by level. Used for finding shortest paths in unweighted graphs, peer-to-peer networks, and web crawlers.",available:!0},{to:"/dfs",icon:ax,title:"Depth-First Search (DFS)",description:"A classic graph traversal technique that explores as far as possible along each branch before backtracking. Used for topological sorting, cycle detection, and solving puzzles like mazes.",available:!0}]}];return n.jsxs("section",{className:"algorithms-section",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("h1",{children:"Explore Data Structures"}),n.jsx("p",{children:"Choose a category to explore different data structures. Each visualizer includes step-by-step explanations and hands-on practice."})]}),n.jsx("div",{className:"categories-container",children:s.map(i=>n.jsxs("div",{className:"category-wrapper",children:[n.jsxs("button",{className:`category-header ${e===i.id?"expanded":""}`,onClick:()=>r(i.id),style:{"--category-color":i.color},children:[n.jsx("div",{className:"category-icon",style:{background:i.color},children:n.jsx(i.icon,{})}),n.jsxs("div",{className:"category-info",children:[n.jsx("h2",{children:i.name}),n.jsx("p",{children:i.description})]}),n.jsxs("div",{className:"category-meta",children:[n.jsxs("span",{className:"item-count",children:[i.items.filter(a=>a.available).length," available"]}),e===i.id?n.jsx(Pg,{}):n.jsx(Rg,{})]})]}),n.jsx("div",{className:`category-items ${e===i.id?"expanded":""}`,children:n.jsx("div",{className:"items-grid",children:i.items.map((a,l)=>a.available?n.jsxs(bn,{to:a.to,className:"algorithm-item",children:[n.jsx("div",{className:"item-icon",style:{background:i.color},children:n.jsx(a.icon,{})}),n.jsxs("div",{className:"item-info",children:[n.jsx("h3",{children:a.title}),n.jsx("p",{children:a.description})]}),n.jsx(de,{className:"item-arrow"})]},l):n.jsxs("div",{className:"algorithm-item coming-soon",children:[n.jsx("div",{className:"item-icon disabled",children:n.jsx(a.icon,{})}),n.jsxs("div",{className:"item-info",children:[n.jsx("h3",{children:a.title}),n.jsx("p",{children:a.description})]}),n.jsx("span",{className:"coming-soon-badge",children:"Coming Soon"})]},l))})})]},i.id))})]})}function px(){return n.jsxs("section",{className:"contact-section",children:[n.jsx("div",{className:"page-header",children:n.jsx("h1",{children:"Contact"})}),n.jsx("div",{className:"contact-content",children:n.jsxs("div",{className:"contact-info",children:[n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:n.jsx(wh,{})}),n.jsx("h3",{children:"Email"}),n.jsx("p",{children:"For recruitment and professional opportunities"}),n.jsx("a",{href:"mailto:abdullahmahfouz@trentu.ca",className:"info-link",children:"abdullahmahfouz@trentu.ca"})]}),n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:n.jsx(vo,{})}),n.jsx("h3",{children:"GitHub"}),n.jsx("p",{children:"View my projects and contributions"}),n.jsx("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"info-link",children:"github.com/abdullahmahfouz"})]}),n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:n.jsx(yo,{})}),n.jsx("h3",{children:"LinkedIn"}),n.jsx("p",{children:"Connect for professional networking"}),n.jsx("a",{href:"https://www.linkedin.com/in/abdullah-mahfouz-5188b1306/",target:"_blank",rel:"noopener noreferrer",className:"info-link",children:"Connect on LinkedIn"})]})]})})]})}function fx(){return n.jsxs("section",{className:"contributions-section",children:[n.jsxs("div",{className:"page-header",children:[n.jsx("h1",{children:"Contributions"}),n.jsx("p",{children:"Help us improve this free learning tool for students! Your contributions help make DSA easier to understand for everyone."})]}),n.jsxs("div",{className:"contributions-content",children:[n.jsxs("div",{className:"contribution-card",children:[n.jsx("div",{className:"contribution-icon",children:n.jsx(Ds,{})}),n.jsx("h2",{children:"Code Contributions"}),n.jsx("p",{children:"Found a bug or want to add a new feature? Fork the repository, make your changes, and submit a pull request!"}),n.jsxs("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"btn-primary",children:[n.jsx("span",{children:"View on GitHub"}),n.jsx(de,{})]})]}),n.jsxs("div",{className:"contribution-card",children:[n.jsx("div",{className:"contribution-icon",children:n.jsx(cl,{})}),n.jsx("h2",{children:"Documentation"}),n.jsx("p",{children:"Help improve our documentation, fix typos, or add examples. Every bit helps!"}),n.jsxs("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"btn-primary",children:[n.jsx("span",{children:"Improve Docs"}),n.jsx(de,{})]})]}),n.jsxs("div",{className:"contribution-card",children:[n.jsx("div",{className:"contribution-icon",children:n.jsx(Eg,{})}),n.jsx("h2",{children:"Report Issues"}),n.jsx("p",{children:"Found a bug or have a suggestion? Open an issue on GitHub and let us know!"}),n.jsxs("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"btn-primary",children:[n.jsx("span",{children:"Report Issue"}),n.jsx(de,{})]})]}),n.jsxs("div",{className:"contribution-card",children:[n.jsx("div",{className:"contribution-icon",children:n.jsx(ve,{})}),n.jsx("h2",{children:"Feature Requests"}),n.jsx("p",{children:"Have an idea for a new visualizer or feature? We'd love to hear your suggestions!"}),n.jsxs(bn,{to:"/contact",className:"btn-primary",children:[n.jsx("span",{children:"Suggest Feature"}),n.jsx(de,{})]})]})]}),n.jsxs("div",{className:"contributors-section",children:[n.jsx("h2",{children:"Contributors"}),n.jsx("div",{className:"contributors-list",children:n.jsxs("div",{className:"contributor-item",children:[n.jsx("div",{className:"contributor-avatar",children:n.jsx(Kg,{})}),n.jsxs("div",{className:"contributor-info",children:[n.jsx("h3",{children:"Abdullah Mahfouz"}),n.jsx("p",{children:"Creator & Maintainer"})]})]})}),n.jsx("p",{className:"contributors-note",children:"Want to see your name here? Start contributing today!"})]})]})}function fe({context:e="Data Structures"}){const[t,r]=u.useState(""),[s,i]=u.useState(""),[a,l]=u.useState(!1),o=()=>{const d=e.toLowerCase();return d.includes("stack")?"e.g., How does LIFO work?":d.includes("queue")?"e.g., What is FIFO?":d.includes("linked list")?"e.g., How do I insert at the head?":d.includes("hash")?"e.g., What is a collision?":d.includes("binary tree")||d.includes("traversal")?"e.g., What is inorder traversal?":"e.g., How does this work?"},c=async()=>{if(t.trim()){l(!0),i("");try{const d=await fetch("/api/ask-ai",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:t.trim(),code:e})}),p=await d.json();d.ok?i(p.answer||"No answer returned."):i("Currently not working, try again later.")}catch{i("Currently not working, try again later.")}finally{l(!1)}}},h=d=>{d.key==="Enter"&&c()};return n.jsxs("div",{className:"ai-assistant",children:[n.jsxs("h3",{children:[n.jsx(Lg,{}),"AI Assistant"]}),n.jsxs("p",{children:["Ask me anything about ",e.toLowerCase(),"!"]}),n.jsxs("div",{className:"ai-input-group",children:[n.jsx("input",{type:"text",value:t,onChange:d=>r(d.target.value),onKeyPress:h,placeholder:o(),disabled:a}),n.jsx("button",{onClick:c,disabled:a,children:a?"Asking...":"Ask"})]}),n.jsxs("div",{id:"ai-response",children:[a&&n.jsx("div",{className:"ai-loading",children:"Thinking..."}),s&&n.jsx("div",{className:s.startsWith("Error")?"ai-error":"ai-answer",children:s})]})]})}const mx=`class Stack:
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
print(stack.peek())  # 20`,gx=`class Stack {
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
console.log(stack.pop()); // 20`,xx=`import java.util.EmptyStackException;

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
System.out.println(stack.pop()); // 20`,vx={python:mx,javascript:gx,java:xx,"c++":`#include <iostream>
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
Console.WriteLine(stack.Pop()); // 20`},yx=`class Queue:
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
print(queue.peek())     # 20`,jx=`class Queue {
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
console.log(queue.dequeue()); // 10`,Nx=`import java.util.NoSuchElementException;

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
System.out.println(queue.dequeue()); // 10`,kx={python:yx,javascript:jx,java:Nx,"c++":`#include <iostream>
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
Console.WriteLine(queue.Dequeue()); // 10`},wx=`class Node:
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
print(ll.search(20))  # 1`,bx=`class Node {
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
ll.insertAtTail(30);`,Sx=`public class SinglyLinkedList<T> {
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
ll.insertAtTail(30);`,Cx={python:wx,javascript:bx,java:Sx,"c++":`#include <iostream>
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
ll.InsertAtTail(30);`},Tx=`import random

class SkipListNode:
    def __init__(self, value, level):
        self.value = value
        self.forward = [None] * (level + 1)

class SkipList:
    MAX_LEVEL = 16
    P = 0.5
    
    def __init__(self):
        self.level = 0
        self.header = SkipListNode(float('-inf'), self.MAX_LEVEL)
        self.size = 0
    
    def random_level(self):
        lvl = 0
        while random.random() < self.P and lvl < self.MAX_LEVEL:
            lvl += 1
        return lvl
    
    def search(self, value):
        current = self.header
        for i in range(self.level, -1, -1):
            while current.forward[i] and current.forward[i].value < value:
                current = current.forward[i]
        current = current.forward[0]
        return current and current.value == value
    
    def insert(self, value):
        update = [None] * (self.MAX_LEVEL + 1)
        current = self.header
        
        for i in range(self.level, -1, -1):
            while current.forward[i] and current.forward[i].value < value:
                current = current.forward[i]
            update[i] = current
        
        current = current.forward[0]
        if current and current.value == value:
            return False  # Already exists
        
        new_level = self.random_level()
        if new_level > self.level:
            for i in range(self.level + 1, new_level + 1):
                update[i] = self.header
            self.level = new_level
        
        new_node = SkipListNode(value, new_level)
        for i in range(new_level + 1):
            new_node.forward[i] = update[i].forward[i]
            update[i].forward[i] = new_node
        
        self.size += 1
        return True
    
    def delete(self, value):
        update = [None] * (self.MAX_LEVEL + 1)
        current = self.header
        
        for i in range(self.level, -1, -1):
            while current.forward[i] and current.forward[i].value < value:
                current = current.forward[i]
            update[i] = current
        
        current = current.forward[0]
        if current and current.value == value:
            for i in range(self.level + 1):
                if update[i].forward[i] != current:
                    break
                update[i].forward[i] = current.forward[i]
            
            while self.level > 0 and not self.header.forward[self.level]:
                self.level -= 1
            
            self.size -= 1
            return True
        return False`,_x=`class SkipListNode {
    constructor(value, level) {
        this.value = value;
        this.forward = new Array(level + 1).fill(null);
    }
}

class SkipList {
    static MAX_LEVEL = 16;
    static P = 0.5;
    
    constructor() {
        this.level = 0;
        this.header = new SkipListNode(-Infinity, SkipList.MAX_LEVEL);
        this.size = 0;
    }
    
    randomLevel() {
        let lvl = 0;
        while (Math.random() < SkipList.P && lvl < SkipList.MAX_LEVEL) {
            lvl++;
        }
        return lvl;
    }
    
    search(value) {
        let current = this.header;
        for (let i = this.level; i >= 0; i--) {
            while (current.forward[i] && current.forward[i].value < value) {
                current = current.forward[i];
            }
        }
        current = current.forward[0];
        return current && current.value === value;
    }
    
    insert(value) {
        const update = new Array(SkipList.MAX_LEVEL + 1).fill(null);
        let current = this.header;
        
        for (let i = this.level; i >= 0; i--) {
            while (current.forward[i] && current.forward[i].value < value) {
                current = current.forward[i];
            }
            update[i] = current;
        }
        
        current = current.forward[0];
        if (current && current.value === value) {
            return false; // Already exists
        }
        
        const newLevel = this.randomLevel();
        if (newLevel > this.level) {
            for (let i = this.level + 1; i <= newLevel; i++) {
                update[i] = this.header;
            }
            this.level = newLevel;
        }
        
        const newNode = new SkipListNode(value, newLevel);
        for (let i = 0; i <= newLevel; i++) {
            newNode.forward[i] = update[i].forward[i];
            update[i].forward[i] = newNode;
        }
        
        this.size++;
        return true;
    }
    
    delete(value) {
        const update = new Array(SkipList.MAX_LEVEL + 1).fill(null);
        let current = this.header;
        
        for (let i = this.level; i >= 0; i--) {
            while (current.forward[i] && current.forward[i].value < value) {
                current = current.forward[i];
            }
            update[i] = current;
        }
        
        current = current.forward[0];
        if (current && current.value === value) {
            for (let i = 0; i <= this.level; i++) {
                if (update[i].forward[i] !== current) break;
                update[i].forward[i] = current.forward[i];
            }
            
            while (this.level > 0 && !this.header.forward[this.level]) {
                this.level--;
            }
            
            this.size--;
            return true;
        }
        return false;
    }
}`,Lx=`import java.util.Random;

public class SkipList<T extends Comparable<T>> {
    private static final int MAX_LEVEL = 16;
    private static final double P = 0.5;
    
    private class Node {
        T value;
        Node[] forward;
        
        @SuppressWarnings("unchecked")
        Node(T value, int level) {
            this.value = value;
            this.forward = new SkipList.Node[level + 1];
        }
    }
    
    private int level;
    private Node header;
    private int size;
    private Random random;
    
    public SkipList() {
        this.level = 0;
        this.header = new Node(null, MAX_LEVEL);
        this.size = 0;
        this.random = new Random();
    }
    
    private int randomLevel() {
        int lvl = 0;
        while (random.nextDouble() < P && lvl < MAX_LEVEL) {
            lvl++;
        }
        return lvl;
    }
    
    public boolean search(T value) {
        Node current = header;
        for (int i = level; i >= 0; i--) {
            while (current.forward[i] != null && 
                   current.forward[i].value.compareTo(value) < 0) {
                current = current.forward[i];
            }
        }
        current = current.forward[0];
        return current != null && current.value.compareTo(value) == 0;
    }
    
    @SuppressWarnings("unchecked")
    public boolean insert(T value) {
        Node[] update = new SkipList.Node[MAX_LEVEL + 1];
        Node current = header;
        
        for (int i = level; i >= 0; i--) {
            while (current.forward[i] != null && 
                   current.forward[i].value.compareTo(value) < 0) {
                current = current.forward[i];
            }
            update[i] = current;
        }
        
        current = current.forward[0];
        if (current != null && current.value.compareTo(value) == 0) {
            return false;
        }
        
        int newLevel = randomLevel();
        if (newLevel > level) {
            for (int i = level + 1; i <= newLevel; i++) {
                update[i] = header;
            }
            level = newLevel;
        }
        
        Node newNode = new Node(value, newLevel);
        for (int i = 0; i <= newLevel; i++) {
            newNode.forward[i] = update[i].forward[i];
            update[i].forward[i] = newNode;
        }
        
        size++;
        return true;
    }
    
    @SuppressWarnings("unchecked")
    public boolean delete(T value) {
        Node[] update = new SkipList.Node[MAX_LEVEL + 1];
        Node current = header;
        
        for (int i = level; i >= 0; i--) {
            while (current.forward[i] != null && 
                   current.forward[i].value.compareTo(value) < 0) {
                current = current.forward[i];
            }
            update[i] = current;
        }
        
        current = current.forward[0];
        if (current != null && current.value.compareTo(value) == 0) {
            for (int i = 0; i <= level; i++) {
                if (update[i].forward[i] != current) break;
                update[i].forward[i] = current.forward[i];
            }
            
            while (level > 0 && header.forward[level] == null) {
                level--;
            }
            
            size--;
            return true;
        }
        return false;
    }
    
    public int size() { return size; }
}`,Ex={python:Tx,javascript:_x,java:Lx,"c++":`#include <vector>
#include <cstdlib>
#include <ctime>
#include <climits>

template <typename T>
class SkipList {
private:
    static const int MAX_LEVEL = 16;
    static constexpr double P = 0.5;
    
    struct Node {
        T value;
        std::vector<Node*> forward;
        
        Node(T val, int level) : value(val), forward(level + 1, nullptr) {}
    };
    
    int level;
    Node* header;
    int size_;
    
    int randomLevel() {
        int lvl = 0;
        while ((double)rand() / RAND_MAX < P && lvl < MAX_LEVEL) {
            lvl++;
        }
        return lvl;
    }
    
public:
    SkipList() : level(0), size_(0) {
        srand(time(nullptr));
        header = new Node(T(), MAX_LEVEL);
    }
    
    ~SkipList() {
        Node* current = header;
        while (current) {
            Node* next = current->forward[0];
            delete current;
            current = next;
        }
    }
    
    bool search(const T& value) {
        Node* current = header;
        for (int i = level; i >= 0; i--) {
            while (current->forward[i] && current->forward[i]->value < value) {
                current = current->forward[i];
            }
        }
        current = current->forward[0];
        return current && current->value == value;
    }
    
    bool insert(const T& value) {
        std::vector<Node*> update(MAX_LEVEL + 1, nullptr);
        Node* current = header;
        
        for (int i = level; i >= 0; i--) {
            while (current->forward[i] && current->forward[i]->value < value) {
                current = current->forward[i];
            }
            update[i] = current;
        }
        
        current = current->forward[0];
        if (current && current->value == value) {
            return false;
        }
        
        int newLevel = randomLevel();
        if (newLevel > level) {
            for (int i = level + 1; i <= newLevel; i++) {
                update[i] = header;
            }
            level = newLevel;
        }
        
        Node* newNode = new Node(value, newLevel);
        for (int i = 0; i <= newLevel; i++) {
            newNode->forward[i] = update[i]->forward[i];
            update[i]->forward[i] = newNode;
        }
        
        size_++;
        return true;
    }
    
    bool remove(const T& value) {
        std::vector<Node*> update(MAX_LEVEL + 1, nullptr);
        Node* current = header;
        
        for (int i = level; i >= 0; i--) {
            while (current->forward[i] && current->forward[i]->value < value) {
                current = current->forward[i];
            }
            update[i] = current;
        }
        
        current = current->forward[0];
        if (current && current->value == value) {
            for (int i = 0; i <= level; i++) {
                if (update[i]->forward[i] != current) break;
                update[i]->forward[i] = current->forward[i];
            }
            delete current;
            
            while (level > 0 && !header->forward[level]) {
                level--;
            }
            
            size_--;
            return true;
        }
        return false;
    }
    
    int size() const { return size_; }
};`,"c#":`using System;

public class SkipList<T> where T : IComparable<T>
{
    private const int MAX_LEVEL = 16;
    private const double P = 0.5;
    
    private class Node
    {
        public T Value;
        public Node[] Forward;
        
        public Node(T value, int level)
        {
            Value = value;
            Forward = new Node[level + 1];
        }
    }
    
    private int level;
    private Node header;
    private int size;
    private Random random;
    
    public SkipList()
    {
        level = 0;
        header = new Node(default(T), MAX_LEVEL);
        size = 0;
        random = new Random();
    }
    
    private int RandomLevel()
    {
        int lvl = 0;
        while (random.NextDouble() < P && lvl < MAX_LEVEL)
        {
            lvl++;
        }
        return lvl;
    }
    
    public bool Search(T value)
    {
        Node current = header;
        for (int i = level; i >= 0; i--)
        {
            while (current.Forward[i] != null && 
                   current.Forward[i].Value.CompareTo(value) < 0)
            {
                current = current.Forward[i];
            }
        }
        current = current.Forward[0];
        return current != null && current.Value.CompareTo(value) == 0;
    }
    
    public bool Insert(T value)
    {
        Node[] update = new Node[MAX_LEVEL + 1];
        Node current = header;
        
        for (int i = level; i >= 0; i--)
        {
            while (current.Forward[i] != null && 
                   current.Forward[i].Value.CompareTo(value) < 0)
            {
                current = current.Forward[i];
            }
            update[i] = current;
        }
        
        current = current.Forward[0];
        if (current != null && current.Value.CompareTo(value) == 0)
        {
            return false;
        }
        
        int newLevel = RandomLevel();
        if (newLevel > level)
        {
            for (int i = level + 1; i <= newLevel; i++)
            {
                update[i] = header;
            }
            level = newLevel;
        }
        
        Node newNode = new Node(value, newLevel);
        for (int i = 0; i <= newLevel; i++)
        {
            newNode.Forward[i] = update[i].Forward[i];
            update[i].Forward[i] = newNode;
        }
        
        size++;
        return true;
    }
    
    public bool Delete(T value)
    {
        Node[] update = new Node[MAX_LEVEL + 1];
        Node current = header;
        
        for (int i = level; i >= 0; i--)
        {
            while (current.Forward[i] != null && 
                   current.Forward[i].Value.CompareTo(value) < 0)
            {
                current = current.Forward[i];
            }
            update[i] = current;
        }
        
        current = current.Forward[0];
        if (current != null && current.Value.CompareTo(value) == 0)
        {
            for (int i = 0; i <= level; i++)
            {
                if (update[i].Forward[i] != current) break;
                update[i].Forward[i] = current.Forward[i];
            }
            
            while (level > 0 && header.Forward[level] == null)
            {
                level--;
            }
            
            size--;
            return true;
        }
        return false;
    }
    
    public int Size => size;
}`},Ox=`class TreeNode:
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
print("Level:     ", tree.levelorder_traversal())  # [50, 30, 70, 20, 40, 60, 80]`,Rx=`class TreeNode {
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
console.log("Level:    ", tree.levelOrderTraversal());  // [50, 30, 70, 20, 40, 60, 80]`,Px=`import java.util.*;

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
System.out.println("Level:     " + tree.levelOrderTraversal());`,Ix={python:Ox,javascript:Rx,java:Px,"c++":`#include <iostream>
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
Console.WriteLine("Level:     " + string.Join(", ", tree.LevelOrderTraversal()));`},Mx=`class HashTable:
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
print(ht.get("banana"))  # 3`,zx=`class HashTable {
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
console.log(ht.get("apple"));  // 5`,Fx=`public class HashTable<K, V> {
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
System.out.println(ht.get("apple")); // 5`,Ax={python:Mx,javascript:zx,java:Fx,"c++":`#include <iostream>
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
Console.WriteLine(ht.Get("apple")); // 5`},Vx=`class Node:
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
ht.delete("banana")`,Dx=`class Node {
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
console.log(ht.search("apple"));  // 5`,$x=`public class HashTableChaining<K, V> {
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
System.out.println(ht.search("apple"));  // 5`,Bx={python:Vx,javascript:Dx,java:$x,"c++":`#include <iostream>
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
Console.WriteLine(ht.Search("apple"));  // 5`},qx=`class TreeNode:
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
print("After delete 30:", bst.inorder())  # [20, 40, 50, 60, 70, 80]`,Hx=`class TreeNode {
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
console.log("After delete 30:", bst.inorder());  // [20, 40, 50, 60, 70, 80]`,Ux=`import java.util.*;

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
System.out.println("After delete: " + bst.inorder());  // [20, 40, 50, 60, 70, 80]`,Kx={python:qx,javascript:Hx,java:Ux,"c++":`#include <iostream>
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
Console.WriteLine("After delete: " + string.Join(", ", bst.Inorder()));`},Wx=`class AVLNode:
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
# Tree automatically balances after each insert!`,Gx=`class AVLNode {
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
[30, 20, 40, 10, 25, 35, 50].forEach(v => avl.insert(v));`,Qx=`class AVLNode {
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
for (int v : new int[]{30, 20, 40, 10, 25}) avl.insert(v);`,Xx={python:Wx,javascript:Gx,java:Qx,"c++":`#include <algorithm>
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

// Usage: var avl = new AVLTree(); foreach(var v in new[]{30,20,40}) avl.Insert(v);`},Yx=`class SplayNode:
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
print("Root:", splay.root.key)  # 20`,Jx=`class SplayNode {
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
splay.search(20); // 20 moves to root`,Zx=`class SplayNode {
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
st.search(20); // 20 is now root`,ev={python:Yx,javascript:Jx,java:Zx,"c++":`struct SplayNode {
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

// Usage: var st = new SplayTree(); foreach(var v in new[]{50,30,70}) st.Insert(v);`},nv=`class MinHeap:
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
print("New min:", heap.peek())  # 2`,tv=`class MinHeap {
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
console.log("Extract:", heap.extractMin());  // 1`,rv=`import java.util.*;

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
System.out.println("Min: " + heap.peek());  // 1`,sv={python:nv,javascript:tv,java:rv,"c++":`#include <vector>
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

// Usage: var h = new MinHeap(); foreach(var v in new[]{5,3,8,1}) h.Insert(v);`},iv=`class MaxHeap:
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
print("New max:", heap.peek())  # 8`,av=`class MaxHeap {
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
console.log("Extract:", heap.extractMax());  // 9`,lv=`import java.util.*;

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
System.out.println("Max: " + heap.peek());  // 9`,ov={python:iv,javascript:av,java:lv,"c++":`#include <vector>
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

// Usage: var h = new MaxHeap(); foreach(var v in new[]{5,3,8,9}) h.Insert(v);`},cv=`from collections import defaultdict

class Graph:
    """Graph using adjacency list representation"""
    
    def __init__(self, directed=False):
        self.adj_list = defaultdict(list)
        self.directed = directed
    
    def add_vertex(self, vertex):
        """Add a vertex - O(1)"""
        if vertex not in self.adj_list:
            self.adj_list[vertex] = []
    
    def add_edge(self, v1, v2, weight=1):
        """Add an edge - O(1)"""
        self.adj_list[v1].append((v2, weight))
        if not self.directed:
            self.adj_list[v2].append((v1, weight))
    
    def remove_edge(self, v1, v2):
        """Remove an edge - O(E)"""
        self.adj_list[v1] = [(v, w) for v, w in self.adj_list[v1] if v != v2]
        if not self.directed:
            self.adj_list[v2] = [(v, w) for v, w in self.adj_list[v2] if v != v1]
    
    def get_neighbors(self, vertex):
        """Get all neighbors - O(1)"""
        return self.adj_list[vertex]
    
    def get_vertices(self):
        """Get all vertices - O(1)"""
        return list(self.adj_list.keys())

# Usage
g = Graph()
for v in ['A', 'B', 'C', 'D']:
    g.add_vertex(v)
g.add_edge('A', 'B')
g.add_edge('A', 'C')
g.add_edge('B', 'D')
print(g.get_neighbors('A'))  # [('B', 1), ('C', 1)]`,dv=`class Graph {
    constructor(directed = false) {
        this.adjList = new Map();
        this.directed = directed;
    }
    
    addVertex(vertex) {
        if (!this.adjList.has(vertex)) {
            this.adjList.set(vertex, []);
        }
    }
    
    addEdge(v1, v2, weight = 1) {
        this.adjList.get(v1).push({ node: v2, weight });
        if (!this.directed) {
            this.adjList.get(v2).push({ node: v1, weight });
        }
    }
    
    removeEdge(v1, v2) {
        this.adjList.set(v1, 
            this.adjList.get(v1).filter(e => e.node !== v2));
        if (!this.directed) {
            this.adjList.set(v2, 
                this.adjList.get(v2).filter(e => e.node !== v1));
        }
    }
    
    getNeighbors(vertex) {
        return this.adjList.get(vertex) || [];
    }
    
    getVertices() {
        return Array.from(this.adjList.keys());
    }
}

// Usage
const g = new Graph();
['A', 'B', 'C', 'D'].forEach(v => g.addVertex(v));
g.addEdge('A', 'B');
g.addEdge('A', 'C');
console.log(g.getNeighbors('A'));`,uv=`import java.util.*;

public class Graph {
    private Map<String, List<Edge>> adjList;
    private boolean directed;
    
    static class Edge {
        String to;
        int weight;
        Edge(String to, int weight) {
            this.to = to;
            this.weight = weight;
        }
    }
    
    public Graph(boolean directed) {
        this.adjList = new HashMap<>();
        this.directed = directed;
    }
    
    public void addVertex(String vertex) {
        adjList.putIfAbsent(vertex, new ArrayList<>());
    }
    
    public void addEdge(String v1, String v2, int weight) {
        adjList.get(v1).add(new Edge(v2, weight));
        if (!directed) {
            adjList.get(v2).add(new Edge(v1, weight));
        }
    }
    
    public void addEdge(String v1, String v2) {
        addEdge(v1, v2, 1);
    }
    
    public List<Edge> getNeighbors(String vertex) {
        return adjList.getOrDefault(vertex, new ArrayList<>());
    }
    
    public Set<String> getVertices() {
        return adjList.keySet();
    }
}

// Usage
Graph g = new Graph(false);
for (String v : new String[]{"A", "B", "C", "D"}) {
    g.addVertex(v);
}
g.addEdge("A", "B");
g.addEdge("A", "C");`,hv={python:cv,javascript:dv,java:uv,"c++":`#include <iostream>
#include <vector>
#include <unordered_map>
#include <list>

class Graph {
private:
    std::unordered_map<std::string, 
        std::list<std::pair<std::string, int>>> adjList;
    bool directed;

public:
    Graph(bool directed = false) : directed(directed) {}
    
    void addVertex(const std::string& vertex) {
        if (adjList.find(vertex) == adjList.end()) {
            adjList[vertex] = {};
        }
    }
    
    void addEdge(const std::string& v1, 
                 const std::string& v2, int weight = 1) {
        adjList[v1].push_back({v2, weight});
        if (!directed) {
            adjList[v2].push_back({v1, weight});
        }
    }
    
    auto& getNeighbors(const std::string& vertex) {
        return adjList[vertex];
    }
    
    std::vector<std::string> getVertices() {
        std::vector<std::string> vertices;
        for (const auto& pair : adjList) {
            vertices.push_back(pair.first);
        }
        return vertices;
    }
};

// Usage
int main() {
    Graph g(false);
    for (auto v : {"A", "B", "C", "D"}) {
        g.addVertex(v);
    }
    g.addEdge("A", "B");
    g.addEdge("A", "C");
    return 0;
}`,"c#":`using System;
using System.Collections.Generic;

public class Graph
{
    private Dictionary<string, List<(string To, int Weight)>> adjList;
    private bool directed;
    
    public Graph(bool directed = false)
    {
        this.adjList = new Dictionary<string, List<(string, int)>>();
        this.directed = directed;
    }
    
    public void AddVertex(string vertex)
    {
        if (!adjList.ContainsKey(vertex))
            adjList[vertex] = new List<(string, int)>();
    }
    
    public void AddEdge(string v1, string v2, int weight = 1)
    {
        adjList[v1].Add((v2, weight));
        if (!directed)
            adjList[v2].Add((v1, weight));
    }
    
    public List<(string To, int Weight)> GetNeighbors(string vertex)
    {
        return adjList.GetValueOrDefault(vertex, 
            new List<(string, int)>());
    }
    
    public IEnumerable<string> GetVertices()
    {
        return adjList.Keys;
    }
}

// Usage
var g = new Graph();
foreach (var v in new[] {"A", "B", "C", "D"})
    g.AddVertex(v);
g.AddEdge("A", "B");
g.AddEdge("A", "C");`},pv=`from collections import deque

def bfs(graph, start):
    """Breadth-First Search - O(V + E)"""
    visited = set()
    queue = deque([start])
    result = []
    
    while queue:
        vertex = queue.popleft()
        
        if vertex not in visited:
            visited.add(vertex)
            result.append(vertex)
            
            # Add all unvisited neighbors to queue
            for neighbor in graph[vertex]:
                if neighbor not in visited:
                    queue.append(neighbor)
    
    return result

# Example usage
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}

print(bfs(graph, 'A'))  # ['A', 'B', 'C', 'D', 'E', 'F']`,fv=`function bfs(graph, start) {
    // Breadth-First Search - O(V + E)
    const visited = new Set();
    const queue = [start];
    const result = [];
    
    while (queue.length > 0) {
        const vertex = queue.shift();
        
        if (!visited.has(vertex)) {
            visited.add(vertex);
            result.push(vertex);
            
            // Add all unvisited neighbors to queue
            for (const neighbor of graph[vertex]) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor);
                }
            }
        }
    }
    
    return result;
}

// Example usage
const graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
};

console.log(bfs(graph, 'A')); // ['A', 'B', 'C', 'D', 'E', 'F']`,mv=`import java.util.*;

public class BFS {
    public static List<String> bfs(Map<String, List<String>> graph, 
                                    String start) {
        // Breadth-First Search - O(V + E)
        Set<String> visited = new HashSet<>();
        Queue<String> queue = new LinkedList<>();
        List<String> result = new ArrayList<>();
        
        queue.offer(start);
        
        while (!queue.isEmpty()) {
            String vertex = queue.poll();
            
            if (!visited.contains(vertex)) {
                visited.add(vertex);
                result.add(vertex);
                
                // Add all unvisited neighbors to queue
                for (String neighbor : graph.get(vertex)) {
                    if (!visited.contains(neighbor)) {
                        queue.offer(neighbor);
                    }
                }
            }
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        Map<String, List<String>> graph = new HashMap<>();
        graph.put("A", Arrays.asList("B", "C"));
        graph.put("B", Arrays.asList("A", "D", "E"));
        graph.put("C", Arrays.asList("A", "F"));
        graph.put("D", Arrays.asList("B"));
        graph.put("E", Arrays.asList("B", "F"));
        graph.put("F", Arrays.asList("C", "E"));
        
        System.out.println(bfs(graph, "A"));
    }
}`,gv={python:pv,javascript:fv,java:mv,"c++":`#include <iostream>
#include <vector>
#include <queue>
#include <unordered_set>
#include <unordered_map>

std::vector<std::string> bfs(
    std::unordered_map<std::string, 
        std::vector<std::string>>& graph,
    const std::string& start) {
    
    // Breadth-First Search - O(V + E)
    std::unordered_set<std::string> visited;
    std::queue<std::string> queue;
    std::vector<std::string> result;
    
    queue.push(start);
    
    while (!queue.empty()) {
        std::string vertex = queue.front();
        queue.pop();
        
        if (visited.find(vertex) == visited.end()) {
            visited.insert(vertex);
            result.push_back(vertex);
            
            // Add all unvisited neighbors to queue
            for (const auto& neighbor : graph[vertex]) {
                if (visited.find(neighbor) == visited.end()) {
                    queue.push(neighbor);
                }
            }
        }
    }
    
    return result;
}

int main() {
    std::unordered_map<std::string, 
        std::vector<std::string>> graph;
    graph["A"] = {"B", "C"};
    graph["B"] = {"A", "D", "E"};
    graph["C"] = {"A", "F"};
    graph["D"] = {"B"};
    graph["E"] = {"B", "F"};
    graph["F"] = {"C", "E"};
    
    auto result = bfs(graph, "A");
    for (const auto& v : result) {
        std::cout << v << " ";
    }
    return 0;
}`,"c#":`using System;
using System.Collections.Generic;

public class BFS
{
    public static List<string> Search(
        Dictionary<string, List<string>> graph, 
        string start)
    {
        // Breadth-First Search - O(V + E)
        var visited = new HashSet<string>();
        var queue = new Queue<string>();
        var result = new List<string>();
        
        queue.Enqueue(start);
        
        while (queue.Count > 0)
        {
            var vertex = queue.Dequeue();
            
            if (!visited.Contains(vertex))
            {
                visited.Add(vertex);
                result.Add(vertex);
                
                // Add all unvisited neighbors to queue
                foreach (var neighbor in graph[vertex])
                {
                    if (!visited.Contains(neighbor))
                    {
                        queue.Enqueue(neighbor);
                    }
                }
            }
        }
        
        return result;
    }
    
    public static void Main()
    {
        var graph = new Dictionary<string, List<string>>
        {
            ["A"] = new List<string> {"B", "C"},
            ["B"] = new List<string> {"A", "D", "E"},
            ["C"] = new List<string> {"A", "F"},
            ["D"] = new List<string> {"B"},
            ["E"] = new List<string> {"B", "F"},
            ["F"] = new List<string> {"C", "E"}
        };
        
        Console.WriteLine(string.Join(", ", Search(graph, "A")));
    }
}`},xv=`def dfs(graph, start):
    """Depth-First Search (Iterative) - O(V + E)"""
    visited = set()
    stack = [start]
    result = []
    
    while stack:
        vertex = stack.pop()
        
        if vertex not in visited:
            visited.add(vertex)
            result.append(vertex)
            
            # Add neighbors in reverse for consistent order
            for neighbor in reversed(graph[vertex]):
                if neighbor not in visited:
                    stack.append(neighbor)
    
    return result

def dfs_recursive(graph, start, visited=None):
    """Depth-First Search (Recursive) - O(V + E)"""
    if visited is None:
        visited = set()
    
    visited.add(start)
    result = [start]
    
    for neighbor in graph[start]:
        if neighbor not in visited:
            result.extend(dfs_recursive(graph, neighbor, visited))
    
    return result

# Example usage
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}

print(dfs(graph, 'A'))  # ['A', 'B', 'D', 'E', 'F', 'C']`,vv=`function dfs(graph, start) {
    // Depth-First Search (Iterative) - O(V + E)
    const visited = new Set();
    const stack = [start];
    const result = [];
    
    while (stack.length > 0) {
        const vertex = stack.pop();
        
        if (!visited.has(vertex)) {
            visited.add(vertex);
            result.push(vertex);
            
            // Add neighbors in reverse for consistent order
            const neighbors = graph[vertex].slice().reverse();
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    stack.push(neighbor);
                }
            }
        }
    }
    
    return result;
}

function dfsRecursive(graph, start, visited = new Set()) {
    // Depth-First Search (Recursive) - O(V + E)
    visited.add(start);
    const result = [start];
    
    for (const neighbor of graph[start]) {
        if (!visited.has(neighbor)) {
            result.push(...dfsRecursive(graph, neighbor, visited));
        }
    }
    
    return result;
}

// Example usage
const graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
};

console.log(dfs(graph, 'A'));`,yv=`import java.util.*;

public class DFS {
    public static List<String> dfs(Map<String, List<String>> graph, 
                                    String start) {
        // Depth-First Search (Iterative) - O(V + E)
        Set<String> visited = new HashSet<>();
        Stack<String> stack = new Stack<>();
        List<String> result = new ArrayList<>();
        
        stack.push(start);
        
        while (!stack.isEmpty()) {
            String vertex = stack.pop();
            
            if (!visited.contains(vertex)) {
                visited.add(vertex);
                result.add(vertex);
                
                // Add neighbors in reverse
                List<String> neighbors = graph.get(vertex);
                for (int i = neighbors.size() - 1; i >= 0; i--) {
                    String neighbor = neighbors.get(i);
                    if (!visited.contains(neighbor)) {
                        stack.push(neighbor);
                    }
                }
            }
        }
        
        return result;
    }
    
    public static void dfsRecursive(Map<String, List<String>> graph,
                                     String vertex, 
                                     Set<String> visited,
                                     List<String> result) {
        visited.add(vertex);
        result.add(vertex);
        
        for (String neighbor : graph.get(vertex)) {
            if (!visited.contains(neighbor)) {
                dfsRecursive(graph, neighbor, visited, result);
            }
        }
    }
    
    public static void main(String[] args) {
        Map<String, List<String>> graph = new HashMap<>();
        graph.put("A", Arrays.asList("B", "C"));
        graph.put("B", Arrays.asList("A", "D", "E"));
        
        System.out.println(dfs(graph, "A"));
    }
}`,jv={python:xv,javascript:vv,java:yv,"c++":`#include <iostream>
#include <vector>
#include <stack>
#include <unordered_set>
#include <unordered_map>
#include <algorithm>

std::vector<std::string> dfs(
    std::unordered_map<std::string, 
        std::vector<std::string>>& graph,
    const std::string& start) {
    
    // Depth-First Search (Iterative) - O(V + E)
    std::unordered_set<std::string> visited;
    std::stack<std::string> stack;
    std::vector<std::string> result;
    
    stack.push(start);
    
    while (!stack.empty()) {
        std::string vertex = stack.top();
        stack.pop();
        
        if (visited.find(vertex) == visited.end()) {
            visited.insert(vertex);
            result.push_back(vertex);
            
            // Add neighbors in reverse order
            auto& neighbors = graph[vertex];
            for (auto it = neighbors.rbegin(); 
                 it != neighbors.rend(); ++it) {
                if (visited.find(*it) == visited.end()) {
                    stack.push(*it);
                }
            }
        }
    }
    
    return result;
}

void dfsRecursive(
    std::unordered_map<std::string, 
        std::vector<std::string>>& graph,
    const std::string& vertex,
    std::unordered_set<std::string>& visited,
    std::vector<std::string>& result) {
    
    visited.insert(vertex);
    result.push_back(vertex);
    
    for (const auto& neighbor : graph[vertex]) {
        if (visited.find(neighbor) == visited.end()) {
            dfsRecursive(graph, neighbor, visited, result);
        }
    }
}

int main() {
    std::unordered_map<std::string, 
        std::vector<std::string>> graph;
    graph["A"] = {"B", "C"};
    graph["B"] = {"A", "D", "E"};
    
    auto result = dfs(graph, "A");
    for (const auto& v : result) {
        std::cout << v << " ";
    }
    return 0;
}`,"c#":`using System;
using System.Collections.Generic;

public class DFS
{
    public static List<string> Search(
        Dictionary<string, List<string>> graph, 
        string start)
    {
        // Depth-First Search (Iterative) - O(V + E)
        var visited = new HashSet<string>();
        var stack = new Stack<string>();
        var result = new List<string>();
        
        stack.Push(start);
        
        while (stack.Count > 0)
        {
            var vertex = stack.Pop();
            
            if (!visited.Contains(vertex))
            {
                visited.Add(vertex);
                result.Add(vertex);
                
                // Add neighbors in reverse order
                var neighbors = graph[vertex];
                for (int i = neighbors.Count - 1; i >= 0; i--)
                {
                    if (!visited.Contains(neighbors[i]))
                    {
                        stack.Push(neighbors[i]);
                    }
                }
            }
        }
        
        return result;
    }
    
    public static void SearchRecursive(
        Dictionary<string, List<string>> graph,
        string vertex,
        HashSet<string> visited,
        List<string> result)
    {
        visited.Add(vertex);
        result.Add(vertex);
        
        foreach (var neighbor in graph[vertex])
        {
            if (!visited.Contains(neighbor))
            {
                SearchRecursive(graph, neighbor, visited, result);
            }
        }
    }
    
    public static void Main()
    {
        var graph = new Dictionary<string, List<string>>
        {
            ["A"] = new List<string> {"B", "C"},
            ["B"] = new List<string> {"A", "D", "E"}
        };
        
        Console.WriteLine(string.Join(", ", Search(graph, "A")));
    }
}`},Nv=`import random

class TreapNode:
    """Node with key (BST) and priority (heap)"""
    def __init__(self, key, priority=None):
        self.key = key
        self.priority = priority or random.randint(1, 100)
        self.left = None
        self.right = None

class Treap:
    """Treap = BST on keys + Max-Heap on priorities"""
    
    def __init__(self):
        self.root = None
    
    def _rotate_right(self, node):
        new_root = node.left
        node.left = new_root.right
        new_root.right = node
        return new_root
    
    def _rotate_left(self, node):
        new_root = node.right
        node.right = new_root.left
        new_root.left = node
        return new_root
    
    def insert(self, key):
        """Insert key with random priority - O(log n) expected"""
        self.root = self._insert(self.root, key)
    
    def _insert(self, node, key):
        if not node:
            return TreapNode(key)
        if key < node.key:
            node.left = self._insert(node.left, key)
            if node.left.priority > node.priority:
                node = self._rotate_right(node)
        elif key > node.key:
            node.right = self._insert(node.right, key)
            if node.right.priority > node.priority:
                node = self._rotate_left(node)
        return node
    
    def delete(self, key):
        """Delete key by rotating it down - O(log n) expected"""
        self.root = self._delete(self.root, key)
    
    def _delete(self, node, key):
        if not node:
            return None
        if key < node.key:
            node.left = self._delete(node.left, key)
        elif key > node.key:
            node.right = self._delete(node.right, key)
        else:
            if not node.left:
                return node.right
            elif not node.right:
                return node.left
            elif node.left.priority > node.right.priority:
                node = self._rotate_right(node)
                node.right = self._delete(node.right, key)
            else:
                node = self._rotate_left(node)
                node.left = self._delete(node.left, key)
        return node
    
    def search(self, key):
        """BST search - O(log n) expected"""
        node = self.root
        while node:
            if key == node.key:
                return True
            elif key < node.key:
                node = node.left
            else:
                node = node.right
        return False
    
    def inorder(self):
        """Inorder traversal - returns sorted keys"""
        result = []
        self._inorder(self.root, result)
        return result
    
    def _inorder(self, node, result):
        if node:
            self._inorder(node.left, result)
            result.append(node.key)
            self._inorder(node.right, result)

# Usage
treap = Treap()
for val in [50, 30, 70, 20, 40, 60, 80]:
    treap.insert(val)

print("Inorder (sorted):", treap.inorder())  # [20, 30, 40, 50, 60, 70, 80]
print("Search 40:", treap.search(40))  # True
treap.delete(30)
print("After delete 30:", treap.inorder())  # [20, 40, 50, 60, 70, 80]`,kv=`class TreapNode {
    constructor(key, priority = null) {
        this.key = key;
        this.priority = priority ?? Math.floor(Math.random() * 100) + 1;
        this.left = null;
        this.right = null;
    }
}

class Treap {
    // Treap = BST on keys + Max-Heap on priorities
    
    constructor() {
        this.root = null;
    }
    
    _rotateRight(node) {
        const newRoot = node.left;
        node.left = newRoot.right;
        newRoot.right = node;
        return newRoot;
    }
    
    _rotateLeft(node) {
        const newRoot = node.right;
        node.right = newRoot.left;
        newRoot.left = node;
        return newRoot;
    }
    
    insert(key) {
        // Insert key with random priority - O(log n) expected
        this.root = this._insert(this.root, key);
    }
    
    _insert(node, key) {
        if (!node) return new TreapNode(key);
        
        if (key < node.key) {
            node.left = this._insert(node.left, key);
            if (node.left.priority > node.priority) {
                node = this._rotateRight(node);
            }
        } else if (key > node.key) {
            node.right = this._insert(node.right, key);
            if (node.right.priority > node.priority) {
                node = this._rotateLeft(node);
            }
        }
        return node;
    }
    
    delete(key) {
        // Delete key by rotating it down - O(log n) expected
        this.root = this._delete(this.root, key);
    }
    
    _delete(node, key) {
        if (!node) return null;
        
        if (key < node.key) {
            node.left = this._delete(node.left, key);
        } else if (key > node.key) {
            node.right = this._delete(node.right, key);
        } else {
            if (!node.left) return node.right;
            if (!node.right) return node.left;
            if (node.left.priority > node.right.priority) {
                node = this._rotateRight(node);
                node.right = this._delete(node.right, key);
            } else {
                node = this._rotateLeft(node);
                node.left = this._delete(node.left, key);
            }
        }
        return node;
    }
    
    search(key) {
        // BST search - O(log n) expected
        let node = this.root;
        while (node) {
            if (key === node.key) return true;
            node = key < node.key ? node.left : node.right;
        }
        return false;
    }
    
    inorder() {
        // Returns sorted keys
        const result = [];
        this._inorder(this.root, result);
        return result;
    }
    
    _inorder(node, result) {
        if (node) {
            this._inorder(node.left, result);
            result.push(node.key);
            this._inorder(node.right, result);
        }
    }
}

// Usage
const treap = new Treap();
[50, 30, 70, 20, 40, 60, 80].forEach(v => treap.insert(v));

console.log("Inorder (sorted):", treap.inorder());  // [20, 30, 40, 50, 60, 70, 80]
console.log("Search 40:", treap.search(40));  // true
treap.delete(30);
console.log("After delete 30:", treap.inorder());  // [20, 40, 50, 60, 70, 80]`,wv=`import java.util.*;

class TreapNode {
    int key, priority;
    TreapNode left, right;
    
    TreapNode(int key) {
        this.key = key;
        this.priority = new Random().nextInt(100) + 1;
        this.left = null;
        this.right = null;
    }
}

public class Treap {
    // Treap = BST on keys + Max-Heap on priorities
    private TreapNode root;
    
    public Treap() { root = null; }
    
    private TreapNode rotateRight(TreapNode node) {
        TreapNode newRoot = node.left;
        node.left = newRoot.right;
        newRoot.right = node;
        return newRoot;
    }
    
    private TreapNode rotateLeft(TreapNode node) {
        TreapNode newRoot = node.right;
        node.right = newRoot.left;
        newRoot.left = node;
        return newRoot;
    }
    
    public void insert(int key) {
        // Insert with random priority - O(log n) expected
        root = insert(root, key);
    }
    
    private TreapNode insert(TreapNode node, int key) {
        if (node == null) return new TreapNode(key);
        
        if (key < node.key) {
            node.left = insert(node.left, key);
            if (node.left.priority > node.priority)
                node = rotateRight(node);
        } else if (key > node.key) {
            node.right = insert(node.right, key);
            if (node.right.priority > node.priority)
                node = rotateLeft(node);
        }
        return node;
    }
    
    public void delete(int key) {
        // Delete by rotating down - O(log n) expected
        root = delete(root, key);
    }
    
    private TreapNode delete(TreapNode node, int key) {
        if (node == null) return null;
        
        if (key < node.key) {
            node.left = delete(node.left, key);
        } else if (key > node.key) {
            node.right = delete(node.right, key);
        } else {
            if (node.left == null) return node.right;
            if (node.right == null) return node.left;
            if (node.left.priority > node.right.priority) {
                node = rotateRight(node);
                node.right = delete(node.right, key);
            } else {
                node = rotateLeft(node);
                node.left = delete(node.left, key);
            }
        }
        return node;
    }
    
    public boolean search(int key) {
        // BST search - O(log n) expected
        TreapNode node = root;
        while (node != null) {
            if (key == node.key) return true;
            node = key < node.key ? node.left : node.right;
        }
        return false;
    }
    
    public List<Integer> inorder() {
        List<Integer> result = new ArrayList<>();
        inorder(root, result);
        return result;
    }
    
    private void inorder(TreapNode node, List<Integer> result) {
        if (node != null) {
            inorder(node.left, result);
            result.add(node.key);
            inorder(node.right, result);
        }
    }
}

// Usage
Treap treap = new Treap();
for (int v : new int[]{50, 30, 70, 20, 40, 60, 80}) treap.insert(v);

System.out.println("Inorder: " + treap.inorder());  // [20, 30, 40, 50, 60, 70, 80]
System.out.println("Search 40: " + treap.search(40));  // true
treap.delete(30);
System.out.println("After delete: " + treap.inorder());  // [20, 40, 50, 60, 70, 80]`,bv={python:Nv,javascript:kv,java:wv,"c++":`#include <iostream>
#include <vector>
#include <cstdlib>
#include <ctime>
using namespace std;

struct TreapNode {
    int key, priority;
    TreapNode *left, *right;
    TreapNode(int k) : key(k), priority(rand() % 100 + 1),
                       left(nullptr), right(nullptr) {}
};

class Treap {
    // Treap = BST on keys + Max-Heap on priorities
private:
    TreapNode* root;
    
    TreapNode* rotateRight(TreapNode* node) {
        TreapNode* newRoot = node->left;
        node->left = newRoot->right;
        newRoot->right = node;
        return newRoot;
    }
    
    TreapNode* rotateLeft(TreapNode* node) {
        TreapNode* newRoot = node->right;
        node->right = newRoot->left;
        newRoot->left = node;
        return newRoot;
    }
    
    TreapNode* insert(TreapNode* node, int key) {
        if (!node) return new TreapNode(key);
        
        if (key < node->key) {
            node->left = insert(node->left, key);
            if (node->left->priority > node->priority)
                node = rotateRight(node);
        } else if (key > node->key) {
            node->right = insert(node->right, key);
            if (node->right->priority > node->priority)
                node = rotateLeft(node);
        }
        return node;
    }
    
    TreapNode* erase(TreapNode* node, int key) {
        if (!node) return nullptr;
        
        if (key < node->key) {
            node->left = erase(node->left, key);
        } else if (key > node->key) {
            node->right = erase(node->right, key);
        } else {
            if (!node->left) return node->right;
            if (!node->right) return node->left;
            if (node->left->priority > node->right->priority) {
                node = rotateRight(node);
                node->right = erase(node->right, key);
            } else {
                node = rotateLeft(node);
                node->left = erase(node->left, key);
            }
        }
        return node;
    }
    
    void inorder(TreapNode* node, vector<int>& result) {
        if (node) {
            inorder(node->left, result);
            result.push_back(node->key);
            inorder(node->right, result);
        }
    }

public:
    Treap() : root(nullptr) { srand(time(0)); }
    
    void insert(int key) {
        // Insert with random priority - O(log n) expected
        root = insert(root, key);
    }
    
    void remove(int key) {
        // Delete by rotating down - O(log n) expected
        root = erase(root, key);
    }
    
    bool search(int key) {
        // BST search - O(log n) expected
        TreapNode* node = root;
        while (node) {
            if (key == node->key) return true;
            node = key < node->key ? node->left : node->right;
        }
        return false;
    }
    
    vector<int> inorder() {
        vector<int> result;
        inorder(root, result);
        return result;
    }
};

// Usage
int main() {
    Treap treap;
    for (int v : {50, 30, 70, 20, 40, 60, 80}) treap.insert(v);
    
    // Inorder (sorted): [20, 30, 40, 50, 60, 70, 80]
    // Search 40: true
    treap.remove(30);
    // After delete: [20, 40, 50, 60, 70, 80]
    return 0;
}`,"c#":`using System;
using System.Collections.Generic;

public class TreapNode
{
    public int Key { get; set; }
    public int Priority { get; set; }
    public TreapNode Left { get; set; }
    public TreapNode Right { get; set; }
    
    private static readonly Random Rng = new Random();
    
    public TreapNode(int key)
    {
        Key = key;
        Priority = Rng.Next(1, 101);
        Left = null;
        Right = null;
    }
}

public class Treap
{
    // Treap = BST on keys + Max-Heap on priorities
    private TreapNode root;
    
    public Treap() { root = null; }
    
    private TreapNode RotateRight(TreapNode node)
    {
        var newRoot = node.Left;
        node.Left = newRoot.Right;
        newRoot.Right = node;
        return newRoot;
    }
    
    private TreapNode RotateLeft(TreapNode node)
    {
        var newRoot = node.Right;
        node.Right = newRoot.Left;
        newRoot.Left = node;
        return newRoot;
    }
    
    public void Insert(int key)
    {
        // Insert with random priority - O(log n) expected
        root = Insert(root, key);
    }
    
    private TreapNode Insert(TreapNode node, int key)
    {
        if (node == null) return new TreapNode(key);
        
        if (key < node.Key)
        {
            node.Left = Insert(node.Left, key);
            if (node.Left.Priority > node.Priority)
                node = RotateRight(node);
        }
        else if (key > node.Key)
        {
            node.Right = Insert(node.Right, key);
            if (node.Right.Priority > node.Priority)
                node = RotateLeft(node);
        }
        return node;
    }
    
    public void Delete(int key)
    {
        // Delete by rotating down - O(log n) expected
        root = Delete(root, key);
    }
    
    private TreapNode Delete(TreapNode node, int key)
    {
        if (node == null) return null;
        
        if (key < node.Key)
            node.Left = Delete(node.Left, key);
        else if (key > node.Key)
            node.Right = Delete(node.Right, key);
        else
        {
            if (node.Left == null) return node.Right;
            if (node.Right == null) return node.Left;
            if (node.Left.Priority > node.Right.Priority)
            {
                node = RotateRight(node);
                node.Right = Delete(node.Right, key);
            }
            else
            {
                node = RotateLeft(node);
                node.Left = Delete(node.Left, key);
            }
        }
        return node;
    }
    
    public bool Search(int key)
    {
        // BST search - O(log n) expected
        var node = root;
        while (node != null)
        {
            if (key == node.Key) return true;
            node = key < node.Key ? node.Left : node.Right;
        }
        return false;
    }
    
    public List<int> Inorder()
    {
        var result = new List<int>();
        Inorder(root, result);
        return result;
    }
    
    private void Inorder(TreapNode node, List<int> result)
    {
        if (node != null)
        {
            Inorder(node.Left, result);
            result.Add(node.Key);
            Inorder(node.Right, result);
        }
    }
}

// Usage
var treap = new Treap();
foreach (var v in new[] {50, 30, 70, 20, 40, 60, 80}) treap.Insert(v);

Console.WriteLine("Inorder: " + string.Join(", ", treap.Inorder()));
Console.WriteLine("Search 40: " + treap.Search(40));
treap.Delete(30);
Console.WriteLine("After delete: " + string.Join(", ", treap.Inorder()));`},la={stack:vx,queue:kx,linkedlist:Cx,skiplist:Ex,binarytree:Ix,hashtable:Ax,hashtableChaining:Bx,bst:Kx,avl:Xx,splay:ev,minheap:sv,maxheap:ov,graph:hv,bfs:gv,dfs:jv,treap:bv};function me({dataStructure:e}){var p;const[t,r]=u.useState("python"),[s,i]=u.useState(!1),a=["python","javascript","java","c++","c#"],l=a.filter(m=>{var b;return(b=la[e])==null?void 0:b[m]}),o=l.length>0?l:a,c=((p=la[e])==null?void 0:p[t])||"Code not available for this data structure";u.useEffect(()=>{var m;!((m=la[e])!=null&&m[t])&&l.length>0&&r(l[0])},[e,t,l]);const h=m=>({python:"Python",javascript:"JavaScript",java:"Java","c++":"C++","c#":"C#"})[m]||m,d=()=>{navigator.clipboard.writeText(c),i(!0),setTimeout(()=>i(!1),2e3)};return n.jsxs("div",{className:"code-section",children:[n.jsxs("h2",{children:[n.jsx(Ac,{})," Implementation"]}),n.jsx("div",{className:"code-tabs",children:o.map(m=>n.jsxs("button",{className:`tab-btn ${t===m?"active":""}`,onClick:()=>r(m),children:[n.jsx(Ac,{}),h(m)]},m))}),n.jsx("div",{className:"code-panels",children:n.jsx("div",{className:"code-panel active",children:n.jsxs("pre",{children:[n.jsxs("button",{className:"copy-btn",onClick:d,children:[n.jsx(Nh,{})," ",s?"Copied!":"Copy"]}),n.jsx("code",{children:c})]})})})]})}function ze({message:e}){if(!(e!=null&&e.text))return null;const t=e.type||"info";return n.jsx("div",{className:`message message-${t}`,children:e.text})}async function ie(e){return await(await fetch(e)).json()}async function Z(e,t){return await(await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()}async function pi(e,t=null){const r={method:"DELETE",headers:{"Content-Type":"application/json"}};return t&&(r.body=JSON.stringify(t)),await(await fetch(e,r)).json()}function Fe(e=3e3){const[t,r]=u.useState(null),s=u.useRef(null),i=u.useCallback(()=>{r(null),s.current&&(clearTimeout(s.current),s.current=null)},[]),a=u.useCallback((l,o="info")=>{r({text:l,type:o}),s.current&&clearTimeout(s.current),s.current=setTimeout(()=>{r(null),s.current=null},e)},[e]);return u.useEffect(()=>i,[i]),{message:t,showMessage:a,clearMessage:i}}function Sv(){const[e,t]=u.useState([]),[r,s]=u.useState(0),[i,a]=u.useState("Empty"),[l]=u.useState(10),{message:o,showMessage:c}=Fe(3e3),[h,d]=u.useState("");u.useEffect(()=>{p()},[]);const p=async()=>{try{const f=await ie("/api/stack");t(f.items||[]),s(f.size||0),a(f.top!==null&&f.top!==void 0?f.top:"Empty")}catch(f){console.error("Error loading stack:",f)}},m=async()=>{if(!h||h.trim()===""){c("Please enter a number!","error");return}const f=Number(h);if(isNaN(f)){c("Please enter a valid number!","error");return}try{const g=await Z("/api/stack/push",{value:f});if(g.error){c(g.error,"error");return}t(g.items||[]),s(g.size||0),a(g.top!==null&&g.top!==void 0?g.top:"Empty"),c(`Pushed ${f} to stack!`,"success"),d("")}catch(g){console.error("Push error:",g),c("Error pushing to stack. Is Flask running?","error")}},b=async()=>{try{const f=await Z("/api/stack/pop",{});if(f.error){c(f.error,"error");return}t(f.items||[]),s(f.size||0),a(f.top!==null&&f.top!==void 0?f.top:"Empty"),c(`Popped ${f.popped} from stack!`,"success")}catch{c("Error popping from stack","error")}},w=async()=>{try{const f=await ie("/api/stack/peek");if(f.error){c(f.error,"error");return}c(`Top element is: ${f.top}`,"info")}catch{c("Error peeking stack","error")}},k=async()=>{try{await Z("/api/stack/clear",{}),t([]),s(0),a("Empty"),c("Stack cleared!","success")}catch{c("Error clearing stack","error")}},j=f=>{f.key==="Enter"&&m()};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Te,{className:"icon-sm"}),n.jsx("span",{children:"What is a Stack?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["A ",n.jsx("strong",{children:"Stack"})," is a linear data structure that follows the ",n.jsx("strong",{children:"LIFO"})," (Last In, First Out) principle."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(ve,{}),n.jsxs("span",{children:["Think of a stack of plates - you can only add or remove from the ",n.jsx("strong",{children:"top"}),"!"]})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Push"}),n.jsx("span",{className:"op-desc",children:"Add to top"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Pop"}),n.jsx("span",{className:"op-desc",children:"Remove from top"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Peek"}),n.jsx("span",{className:"op-desc",children:"View top element"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"Common Uses:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Browser back/forward buttons"}),n.jsx("li",{children:"Undo/Redo functionality"}),n.jsx("li",{children:"Function call stack"}),n.jsx("li",{children:"Expression evaluation"})]})]})]})]}),n.jsx(fe,{context:"Stack data structure"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Stack Operations"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"pushValue",children:"Push (Add to top)"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"pushValue",value:h,onChange:f=>d(f.target.value),onKeyPress:j,placeholder:"Enter a value"}),n.jsx("button",{onClick:m,className:"btn btn-push",children:"Push"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Other Operations"}),n.jsxs("div",{className:"btn-group",children:[n.jsx("button",{onClick:b,className:"btn btn-pop",children:"Pop"}),n.jsx("button",{onClick:w,className:"btn btn-peek",children:"Peek"}),n.jsx("button",{onClick:k,className:"btn btn-clear",children:"Clear"})]})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Size:"}),n.jsx("span",{className:"info-value",children:r})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Top:"}),n.jsx("span",{className:"info-value",children:i})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Max Size:"}),n.jsx("span",{className:"info-value",children:l})]})]}),n.jsx(ze,{message:o})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Stack Visualization"}),n.jsxs("div",{className:"stack-container",children:[n.jsx("div",{className:"stack-visual",children:e.length===0?n.jsx("div",{className:"stack-empty",children:"Stack is empty. Push some items!"}):e.slice().reverse().map((f,g)=>n.jsx("div",{className:"stack-item",children:f},g))}),n.jsx("div",{className:"stack-base",children:n.jsx("span",{children:"BOTTOM"})})]})]})]}),n.jsx(me,{dataStructure:"stack"})]})}function Cv(){const[e,t]=u.useState([]),[r,s]=u.useState(0),[i,a]=u.useState("Empty"),[l]=u.useState(10),{message:o,showMessage:c}=Fe(3e3),[h,d]=u.useState("");u.useEffect(()=>{p()},[]);const p=async()=>{try{const j=await ie("/api/queue");t(j.items||[]),s(j.size||0),a(j.front!==null&&j.front!==void 0?j.front:"Empty")}catch(j){console.error("Error loading queue:",j)}},m=async()=>{if(!h||h.trim()===""){c("Please enter a number!","error");return}const j=Number(h);if(isNaN(j)){c("Please enter a valid number!","error");return}try{const f=await Z("/api/queue/enqueue",{value:j});if(f.error){c(f.error,"error");return}t(f.items||[]),s(f.size||0),a(f.front!==null&&f.front!==void 0?f.front:"Empty"),c(`Enqueued ${j}!`,"success"),d("")}catch(f){console.error("Enqueue error:",f),c("Error enqueueing. Is Flask running?","error")}},b=async()=>{try{const j=await Z("/api/queue/dequeue",{});if(j.error){c(j.error,"error");return}t(j.items||[]),s(j.size||0),a(j.front!==null&&j.front!==void 0?j.front:"Empty"),c(`Dequeued ${j.dequeued} from queue!`,"success")}catch{c("Error dequeuing from queue","error")}},w=async()=>{try{const j=await ie("/api/queue/peek");if(j.error){c(j.error,"error");return}c(`Front element is: ${j.front}`,"info")}catch{c("Error peeking queue","error")}},k=async()=>{try{await Z("/api/queue/clear",{}),t([]),s(0),a("Empty"),c("Queue cleared!","success")}catch{c("Error clearing queue","error")}};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Te,{className:"icon-sm"}),n.jsx("span",{children:"What is a Queue?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["A ",n.jsx("strong",{children:"Queue"})," is a linear data structure that follows the ",n.jsx("strong",{children:"FIFO"})," (First In, First Out) principle."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(ve,{}),n.jsxs("span",{children:["Think of a line at a store – the first person in line gets served ",n.jsx("strong",{children:"first"}),"!"]})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Enqueue"}),n.jsx("span",{className:"op-desc",children:"Add to the back"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Dequeue"}),n.jsx("span",{className:"op-desc",children:"Remove from the front"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Peek"}),n.jsx("span",{className:"op-desc",children:"View the front element"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]})]})]})]}),n.jsx(fe,{context:"Queue data structure"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Queue Operations"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"enqueueValue",children:"Enqueue (Add to back)"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"enqueueValue",value:h,onChange:j=>d(j.target.value),onKeyPress:j=>j.key==="Enter"&&m(),placeholder:"Enter a value"}),n.jsx("button",{onClick:m,className:"btn btn-enqueue",children:"Enqueue"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Other Operations"}),n.jsxs("div",{className:"btn-group",children:[n.jsx("button",{onClick:b,className:"btn btn-dequeue",children:"Dequeue"}),n.jsx("button",{onClick:w,className:"btn btn-peek",children:"Peek"}),n.jsx("button",{onClick:k,className:"btn btn-clear",children:"Clear"})]})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Size:"}),n.jsx("span",{className:"info-value",children:r})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Front:"}),n.jsx("span",{className:"info-value",children:i})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Max Size:"}),n.jsx("span",{className:"info-value",children:l})]})]}),n.jsx(ze,{message:o})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Queue Visualization"}),n.jsxs("div",{className:"queue-container",children:[n.jsx("div",{className:"queue-label",children:n.jsx("span",{className:"front-marker",children:"FRONT →"})}),n.jsx("div",{className:"queue-visual",children:e.length===0?n.jsx("div",{className:"queue-empty",children:"Queue is empty. Enqueue some items!"}):e.map((j,f)=>{const g=f===0,x=f===e.length-1;return n.jsxs("div",{className:`queue-item ${g?"queue-front":""} ${x?"queue-back":""}`,children:[g&&n.jsx("span",{className:"front-label",children:"FRONT"}),j,x&&n.jsx("span",{className:"back-label",children:"BACK"})]},f)})}),n.jsx("div",{className:"queue-label",children:n.jsx("span",{className:"back-marker",children:"← BACK"})})]})]})]}),n.jsx(me,{dataStructure:"queue"})]})}function Tv(){const[e,t]=u.useState([]),[r,s]=u.useState(0),[i,a]=u.useState("Empty"),{message:l,showMessage:o}=Fe(3e3),[c,h]=u.useState(""),[d,p]=u.useState(""),[m,b]=u.useState(""),[w,k]=u.useState(""),[j,f]=u.useState(""),[g,x]=u.useState("");u.useEffect(()=>{E()},[]);const E=async()=>{try{const I=await ie("/api/linkedlist");t(I.items||[]),s(I.size||0),a(I.head!==null&&I.head!==void 0?I.head:"Empty")}catch(I){console.error("Error loading linked list:",I)}},y=async()=>{if(!c||c.trim()===""){o("Please enter a number!","error");return}const I=Number(c);if(isNaN(I)){o("Please enter a valid number!","error");return}try{const H=await Z("/api/linkedlist/insert/head",{value:I});if(H.error){o(H.error,"error");return}t(H.items||[]),s(H.size||0),a(H.head!==null&&H.head!==void 0?H.head:"Empty"),o(`Inserted ${I} at head!`,"success"),h("")}catch(H){console.error("Insert error:",H),o("Error inserting. Is Flask running?","error")}},F=async()=>{if(!d||d.trim()===""){o("Please enter a number!","error");return}const I=Number(d);if(isNaN(I)){o("Please enter a valid number!","error");return}try{const H=await Z("/api/linkedlist/insert/tail",{value:I});if(H.error){o(H.error,"error");return}t(H.items||[]),s(H.size||0),a(H.head!==null&&H.head!==void 0?H.head:"Empty"),o(`Inserted ${I} at tail!`,"success"),p("")}catch(H){console.error("Insert error:",H),o("Error inserting. Is Flask running?","error")}},T=async()=>{try{const I=await Z("/api/linkedlist/delete/head",{});if(I.error){o(I.error,"error");return}t(I.items||[]),s(I.size||0),a(I.head!==null&&I.head!==void 0?I.head:"Empty"),o("Deleted head!","success")}catch{o("Error deleting head","error")}},D=async()=>{try{const I=await Z("/api/linkedlist/delete/tail",{});if(I.error){o(I.error,"error");return}t(I.items||[]),s(I.size||0),a(I.head!==null&&I.head!==void 0?I.head:"Empty"),o("Deleted tail!","success")}catch{o("Error deleting tail","error")}},A=async()=>{try{await Z("/api/linkedlist/clear",{}),t([]),s(0),a("Empty"),o("List cleared!","success")}catch{o("Error clearing list","error")}};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Te,{className:"icon-sm"}),n.jsx("span",{children:"What is a Singly Linked List?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["A ",n.jsx("strong",{children:"Singly Linked List"})," is a linear data structure where each element contains data and a pointer to the next node."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(ve,{}),n.jsxs("span",{children:["Think of a treasure hunt – each clue points to the ",n.jsx("strong",{children:"next location"}),"!"]})]})]})]}),n.jsx(fe,{context:"Singly Linked List data structure"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Linked List Operations"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertHeadValue",children:"Insert at Head"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"insertHeadValue",value:c,onChange:I=>h(I.target.value),onKeyPress:I=>I.key==="Enter"&&y(),placeholder:"Enter a value"}),n.jsx("button",{onClick:y,className:"btn btn-insert",children:"Insert Head"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertTailValue",children:"Insert at Tail"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"insertTailValue",value:d,onChange:I=>p(I.target.value),onKeyPress:I=>I.key==="Enter"&&F(),placeholder:"Enter a value"}),n.jsx("button",{onClick:F,className:"btn btn-insert",children:"Insert Tail"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Delete Operations"}),n.jsxs("div",{className:"btn-group",children:[n.jsx("button",{onClick:T,className:"btn btn-delete",children:"Delete Head"}),n.jsx("button",{onClick:D,className:"btn btn-delete",children:"Delete Tail"})]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:A,className:"btn btn-clear full-width",children:"Clear All"})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Size:"}),n.jsx("span",{className:"info-value",children:r})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Head:"}),n.jsx("span",{className:"info-value",children:i})]})]}),n.jsx(ze,{message:l})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Linked List Visualization"}),n.jsx("div",{className:"linkedlist-container",children:n.jsx("div",{className:"linkedlist-visual",children:e.length===0?n.jsx("div",{className:"linkedlist-empty",children:"List is empty. Insert some nodes!"}):e.map((I,H)=>n.jsx(Ve.Fragment,{children:n.jsxs("div",{className:"linkedlist-node",children:[n.jsx("div",{className:"node-value",children:I}),H<e.length-1&&n.jsx("div",{className:"node-arrow",children:"→"})]})},H))})})]})]}),n.jsx(me,{dataStructure:"linkedlist"})]})}function _v(){const[e,t]=u.useState([]),[r,s]=u.useState([]),[i,a]=u.useState(0),[l,o]=u.useState(0),{message:c,showMessage:h}=Fe(3e3),[d,p]=u.useState(""),[m,b]=u.useState(""),[w,k]=u.useState(""),[j,f]=u.useState([]),[g,x]=u.useState(null),[E,y]=u.useState(null);u.useEffect(()=>{F()},[]);const F=async()=>{try{const $=await ie("/api/skiplist");t($.levels||[]),s($.nodes||[]),a($.maxLevel||0),o($.size||0)}catch($){console.error("Error loading skip list:",$)}},T=async()=>{if(!d||d.trim()===""){h("Please enter a number!","error");return}const $=Number(d);if(isNaN($)||!Number.isInteger($)){h("Please enter a valid integer!","error");return}try{const v=await Z("/api/skiplist/insert",{value:$});if(v.error){h(v.error,"error");return}t(v.levels||[]),s(v.nodes||[]),a(v.maxLevel||0),o(v.size||0),y($),h(`Inserted ${$} at level ${v.insertedLevel}!`,"success"),p(""),setTimeout(()=>y(null),2e3)}catch(v){console.error("Insert error:",v),h("Error inserting. Is Flask running?","error")}},D=async()=>{if(!m||m.trim()===""){h("Please enter a number!","error");return}const $=Number(m);if(isNaN($)||!Number.isInteger($)){h("Please enter a valid integer!","error");return}try{const v=await Z("/api/skiplist/delete",{value:$});if(v.error){h(v.error,"error");return}t(v.levels||[]),s(v.nodes||[]),a(v.maxLevel||0),o(v.size||0),h(`Deleted ${$}!`,"success"),b("")}catch(v){console.error("Delete error:",v),h("Error deleting. Is Flask running?","error")}},A=async()=>{if(!w||w.trim()===""){h("Please enter a number!","error");return}const $=Number(w);if(isNaN($)||!Number.isInteger($)){h("Please enter a valid integer!","error");return}try{const v=await Z("/api/skiplist/search",{value:$});f(v.path||[]),x(v.found),v.found?(y($),h(`Found ${$}!`,"success")):h(`${$} not found`,"warning"),k(""),setTimeout(()=>{f([]),x(null),y(null)},3e3)}catch(v){console.error("Search error:",v),h("Error searching. Is Flask running?","error")}},I=async()=>{try{await Z("/api/skiplist/clear",{}),t([]),s([]),a(0),o(0),f([]),x(null),y(null),h("Skip list cleared!","success")}catch{h("Error clearing skip list","error")}},H=$=>{const v=r.find(R=>R.value===$);return v?v.level:0},K=($,v)=>{var R;return(R=e[v])==null?void 0:R.includes($)},B=()=>e.length===0?[]:[...e[0]].sort(($,v)=>$-v);return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Te,{className:"icon-sm"}),n.jsx("span",{children:"What is a Skip List?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["A ",n.jsx("strong",{children:"Skip List"})," is a probabilistic data structure that allows O(log n) search, insert, and delete operations by maintaining multiple layers of linked lists."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(ve,{}),n.jsx("span",{children:"Think of an express train system - express lines skip stations to get you there faster!"})]})]})]}),n.jsx(fe,{context:"Skip List data structure"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Skip List Operations"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"insertValue",value:d,onChange:$=>p($.target.value),onKeyPress:$=>$.key==="Enter"&&T(),placeholder:"Enter integer"}),n.jsx("button",{onClick:T,className:"btn btn-insert",children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"searchValue",children:"Search Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"searchValue",value:w,onChange:$=>k($.target.value),onKeyPress:$=>$.key==="Enter"&&A(),placeholder:"Enter integer"}),n.jsx("button",{onClick:A,className:"btn btn-search",children:"Search"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"deleteValue",children:"Delete Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"deleteValue",value:m,onChange:$=>b($.target.value),onKeyPress:$=>$.key==="Enter"&&D(),placeholder:"Enter integer"}),n.jsx("button",{onClick:D,className:"btn btn-delete",children:"Delete"})]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:I,className:"btn btn-clear full-width",children:"Clear All"})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Size:"}),n.jsx("span",{className:"info-value",children:l})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Max Level:"}),n.jsx("span",{className:"info-value",children:i})]})]}),n.jsxs("div",{className:"complexity-info",children:[n.jsx("h3",{children:"Time Complexity"}),n.jsxs("div",{className:"complexity-item",children:[n.jsx("span",{children:"Search:"}),n.jsx("span",{className:"complexity-value",children:"O(log n) avg"})]}),n.jsxs("div",{className:"complexity-item",children:[n.jsx("span",{children:"Insert:"}),n.jsx("span",{className:"complexity-value",children:"O(log n) avg"})]}),n.jsxs("div",{className:"complexity-item",children:[n.jsx("span",{children:"Delete:"}),n.jsx("span",{className:"complexity-value",children:"O(log n) avg"})]})]}),n.jsx(ze,{message:c})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Skip List Visualization"}),n.jsx("div",{className:"skiplist-container",children:l===0?n.jsx("div",{className:"skiplist-empty",children:"Skip list is empty. Insert some values!"}):n.jsxs("div",{className:"skiplist-visual",children:[[...Array(i+1)].reverse().map(($,v)=>{const R=i-v;return n.jsxs("div",{className:"skiplist-level",children:[n.jsxs("div",{className:"level-label",children:[n.jsx(kh,{size:14}),n.jsxs("span",{children:["L",R]})]}),n.jsxs("div",{className:"level-nodes",children:[n.jsx("div",{className:"skiplist-head",children:"HEAD"}),n.jsx("div",{className:"skiplist-arrow",children:"→"}),B().map((q,L)=>{const O=K(q,R),S=E===q;return n.jsx(Ve.Fragment,{children:O?n.jsxs(n.Fragment,{children:[n.jsx("div",{className:`skiplist-node ${S?"highlighted":""}`,children:q}),n.jsx("div",{className:"skiplist-arrow",children:"→"})]}):n.jsx(n.Fragment,{children:n.jsx("div",{className:"skiplist-gap",children:n.jsx("div",{className:"gap-line"})})})},`${R}-${q}`)}),n.jsx("div",{className:"skiplist-null",children:"NULL"})]})]},R)}),n.jsx("div",{className:"vertical-connectors",children:B().map($=>{const v=H($);return n.jsx("div",{className:"connector-column",style:{"--node-level":v},children:[...Array(v)].map((R,q)=>n.jsx("div",{className:"vertical-line"},q))},`connector-${$}`)})})]})}),n.jsxs("div",{className:"skiplist-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color head"}),n.jsx("span",{children:"Head Node"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color node"}),n.jsx("span",{children:"Data Node"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color highlighted"}),n.jsx("span",{children:"Highlighted"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color null"}),n.jsx("span",{children:"Null Pointer"})]})]})]})]}),n.jsx(me,{dataStructure:"skiplist"})]})}function Lv(){const[e,t]=u.useState([]),[r,s]=u.useState(0),[i,a]=u.useState(0),[l,o]=u.useState(0),[c,h]=u.useState(0),{message:d,showMessage:p}=Fe(3e3),[m,b]=u.useState(""),[w,k]=u.useState(""),[j,f]=u.useState(""),[g,x]=u.useState(""),[E,y]=u.useState(null),[F,T]=u.useState([]),[D,A]=u.useState(null),[I,H]=u.useState(null);u.useEffect(()=>{K()},[]);const K=async()=>{try{const O=await ie("/api/hashtable");t(O.table||[]),s(O.size||0),a(O.capacity||0),o(O.load_factor||0),h(O.collision_count||0)}catch(O){console.error("Error loading hashtable:",O)}},B=O=>{if(!i||i===0)return 0;let S=0;for(let z=0;z<O.length;z++)S=(S*31+O.charCodeAt(z))%i;return S},$=(O,S)=>{const z=B(O),M=[z];let C=z;for(;S[C]&&S[C][0]!==O&&(C=(C+1)%i,M.push(C),!(C===z||M.length>i)););return{originalHash:z,path:M,finalSlot:C}},v=async()=>{if(!m.trim()||!w.trim()){p("Please enter both key and value!","error");return}const O=i>0?B(m.trim()):0,S=e.length>0&&e[O]&&e[O][0]!==m.trim();let z=null;S&&(z=$(m.trim(),e));try{const M=await Z("/api/hashtable/insert",{key:m.trim(),value:w.trim()});if(M.error){p(M.error,"error");return}await K(),A(m.trim()),S&&z?(H({key:m.trim(),originalSlot:z.originalHash,probedSlots:z.path,finalSlot:z.path[z.path.length-1]}),T(z.path),p(`Collision! "${m}" hashed to ${z.originalHash}, probed ${z.path.length} slot(s)`,"warning"),setTimeout(()=>{T([]),H(null)},4e3)):(p(`Inserted "${m}" → slot ${O}`,"success"),y(O),setTimeout(()=>y(null),2e3)),b(""),k(""),setTimeout(()=>A(null),3e3)}catch{p("Error inserting. Is Flask running?","error")}},R=async()=>{if(!j.trim()){p("Please enter a key!","error");return}try{const O=await Z("/api/hashtable/delete",{key:j.trim()});if(O.error){p(O.error,"error");return}await K(),p(`Deleted "${j}"`,"success"),f("")}catch{p("Error deleting. Is Flask running?","error")}},q=async()=>{if(!g.trim()){p("Please enter a key!","error");return}try{const O=await ie(`/api/hashtable/get?key=${encodeURIComponent(g.trim())}`);if(O.error){p(O.error,"error");return}O.found?p(`Found: "${g}" = ${O.value}`,"success"):p(`Key "${g}" not found`,"error"),x("")}catch{p("Error searching item","error")}},L=async()=>{try{await Z("/api/hashtable/clear",{}),await K(),T([]),H(null),p("Hashtable cleared!","success")}catch{p("Error clearing hashtable","error")}};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"intro-left",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Te,{className:"icon-sm"}),n.jsx("span",{children:"What is a Hash Table?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["A ",n.jsx("strong",{children:"Hash Table"})," maps keys to values using a hash function for O(1) lookups."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(ve,{}),n.jsxs("span",{children:["Like a ",n.jsx("strong",{children:"coat check"})," – give them your coat (value), get a ticket number (hash of key)!"]})]})]})]}),n.jsxs("div",{className:"concept-box",style:{marginTop:"1rem"},children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Nn,{className:"icon-sm",style:{color:"#f59e0b"}}),n.jsx("span",{children:"Linear Probing"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["When two keys hash to the same slot (",n.jsx("strong",{children:"collision"}),"), we check the next slot until we find an empty one."]}),n.jsxs("div",{className:"concept-analogy",style:{marginTop:"0.5rem"},children:[n.jsx(qn,{style:{color:"#3b82f6"}}),n.jsx("span",{children:"Like parking – if spot 3 is taken, try spot 4, then 5..."})]})]})]})]}),n.jsx(fe,{context:"Hash Table with Linear Probing"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Operations"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Insert Key-Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",value:m,onChange:O=>b(O.target.value),placeholder:"Key"}),n.jsx("input",{type:"text",value:w,onChange:O=>k(O.target.value),onKeyPress:O=>O.key==="Enter"&&v(),placeholder:"Value"}),n.jsx("button",{onClick:v,className:"btn btn-insert",children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Delete Key"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",value:j,onChange:O=>f(O.target.value),onKeyPress:O=>O.key==="Enter"&&R(),placeholder:"Key"}),n.jsx("button",{onClick:R,className:"btn btn-delete",children:"Delete"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Search Key"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",value:g,onChange:O=>x(O.target.value),onKeyPress:O=>O.key==="Enter"&&q(),placeholder:"Key"}),n.jsx("button",{onClick:q,className:"btn btn-search",children:"Search"})]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:L,className:"btn btn-clear",children:"Clear Table"})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Items"}),n.jsxs("span",{className:"info-value",children:[r,"/",i]})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Load"}),n.jsxs("span",{className:"info-value",style:{color:l>=.7?"#f59e0b":"inherit"},children:[(l*100).toFixed(0),"%"]})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Collisions"}),n.jsx("span",{className:"info-value",style:{color:c>0?"#f59e0b":"inherit"},children:c})]})]}),n.jsxs("div",{className:"rehash-info-box",children:[n.jsx(bh,{size:16}),n.jsxs("div",{children:[n.jsx("strong",{children:"Rehashing Threshold: 70%"}),n.jsx("p",{children:"In practice, hash tables rehash (double capacity) when load factor reaches ~0.7 to maintain O(1) performance."}),l>=.7?n.jsxs("span",{className:"rehash-warning",children:["Current load (",(l*100).toFixed(0),"%) exceeds threshold!"]}):n.jsxs("span",{className:"rehash-safe",children:["Currently safe (",(l*100).toFixed(0),"% < 70%)"]})]})]}),n.jsx(ze,{message:d})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Hash Table"}),m&&n.jsxs("div",{className:"hash-demo",children:[n.jsxs("div",{className:"hash-demo-item",children:[n.jsx("span",{className:"hash-demo-label",children:"Key:"}),n.jsxs("span",{className:"hash-demo-key",children:['"',m,'"']})]}),n.jsx(de,{className:"hash-demo-arrow"}),n.jsx("div",{className:"hash-demo-item",children:n.jsx("span",{className:"hash-demo-label",children:"hash()"})}),n.jsx(de,{className:"hash-demo-arrow"}),n.jsxs("div",{className:"hash-demo-item",children:[n.jsx("span",{className:"hash-demo-label",children:"Slot:"}),n.jsx("span",{className:"hash-demo-index",children:B(m)})]})]}),I&&n.jsxs("div",{className:"collision-banner",children:[n.jsx(Nn,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Collision Detected!"}),n.jsxs("p",{children:['"',I.key,'" hashed to slot ',n.jsx("span",{className:"slot-badge original",children:I.originalSlot}),I.probedSlots.length>1&&n.jsxs(n.Fragment,{children:[" ","- Probed: ",I.probedSlots.map((O,S)=>n.jsxs("span",{children:[n.jsx("span",{className:`slot-badge ${S===I.probedSlots.length-1?"final":"probed"}`,children:O}),S<I.probedSlots.length-1&&" > "]},S))]})]})]})]}),n.jsx("div",{className:"ht-visual",children:!e||e.length===0?n.jsx("div",{className:"ht-empty",children:"Hash table is empty. Insert some key-value pairs!"}):n.jsx("div",{className:"ht-buckets",children:e.map((O,S)=>{const z=F.includes(S),M=I&&I.originalSlot===S,C=I&&I.finalSlot===S;return n.jsxs("div",{className:`ht-row ${O?"filled":"empty"} 
                        ${E===S?"highlighted":""} 
                        ${D&&O&&O[0]===D?"just-inserted":""}
                        ${z?"probed":""}
                        ${M?"original-hash":""}
                        ${C?"final-slot":""}`,children:[z&&n.jsx("div",{className:"probe-indicator",children:M?"X":C?"O":">"}),n.jsx("div",{className:`ht-key-box ${O?"has-key":""}`,children:O&&n.jsx("span",{className:"ht-key",children:O[0]})}),n.jsx("div",{className:"ht-arrow",children:O&&n.jsx(de,{size:20})}),n.jsx("div",{className:`ht-index ${M?"collision-index":""}`,children:S}),n.jsx("div",{className:`ht-value-box ${O?"has-value":""}`,children:O?n.jsx("span",{className:"ht-value",children:O[1]}):n.jsx("span",{className:"ht-empty-slot",children:"—"})})]},S)})})}),n.jsxs("div",{className:"ht-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color key-color"}),n.jsx("span",{children:"Key"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color index-color"}),n.jsx("span",{children:"Index"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color value-color"}),n.jsx("span",{children:"Value"})]}),F.length>0&&n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color probe-color"}),n.jsx("span",{children:"Probing Path"})]})]})]})]}),n.jsx(me,{dataStructure:"hashtable"})]})}const Ev={title:"What is Chaining?",description:"Chaining handles collisions by storing multiple key-value pairs in a linked list at each slot.",codeExample:"slot[hash] → [key1, val1] → [key2, val2] → ...",analogy:"Like a coat rack - multiple coats can hang on the same hook!"},Ov={title:"Chaining vs Probing",chaining:{label:"Chaining:",color:"#22c55e",points:["Uses linked lists","Load factor can exceed 1.0"]},probing:{label:"Probing:",color:"#f59e0b",points:["Finds next empty slot","Load factor must stay below 1.0"]},summary:"Chaining is simpler and handles high load factors better, but uses extra memory for pointers."},Rv={title:"Chaining Advantage",description:"With chaining, load factor can exceed 1.0 because each slot can hold multiple items in a chain.",highLoadThreshold:1.5,highLoadMessage:"High load ({loadFactor}) - chains getting long!",safeMessage:"Load factor: {loadFactor}"},Pv={title:"Rehash Table",description:"Doubles the table capacity and redistributes all items to reduce chain lengths.",buttonText:"Rehash",recommendThreshold:1.5},Iv=[{type:"color",className:"key-color",label:"Key"},{type:"color",className:"index-color",label:"Index"},{type:"color",className:"value-color",label:"Value"},{type:"icon",icon:"Link",color:"#8b5cf6",label:"Chain (Linked List)"}],Mv={insert:{label:"Insert Key-Value",keyPlaceholder:"Key",valuePlaceholder:"Value",buttonText:"Insert"},delete:{label:"Delete Key",placeholder:"Key",buttonText:"Delete"},search:{label:"Search Key",placeholder:"Key",buttonText:"Search"},clear:{buttonText:"Clear Table"},rehash:{buttonText:"Rehash"}},zv={items:"Items",capacity:"Capacity",load:"Load",collisions:"Collisions"},Fv={emptyTable:"Hash table is empty. Insert some key-value pairs!",insertSuccess:'Inserted "{key}" at slot {index}',insertUpdated:'Updated "{key}" at slot {index}',insertCollision:'Collision! Added "{key}" to chain at slot {index}',deleteSuccess:'Deleted "{key}"',searchFound:'Found: "{key}" = {value}',searchNotFound:'Key "{key}" not found',clearSuccess:"Hashtable cleared!",rehashSuccess:"Rehashed! Capacity: {oldCapacity} -> {newCapacity}",rehashEmpty:"Nothing to rehash - table is empty!",errorNoKey:"Please enter a key!",errorNoKeyValue:"Please enter both key and value!",errorInsert:"Error inserting. Is Flask running?",errorDelete:"Error deleting. Is Flask running?",errorSearch:"Error searching item",errorClear:"Error clearing hashtable",errorRehash:"Error rehashing. Is Flask running?"},Y={concept:Ev,comparison:Ov,chainingAdvantage:Rv,rehash:Pv,legend:Iv,operations:Mv,infoLabels:zv,messages:Fv};function Av(){const[e,t]=u.useState([]),[r,s]=u.useState(0),[i,a]=u.useState(0),[l,o]=u.useState(0),[c,h]=u.useState(0),{message:d,showMessage:p}=Fe(3e3),[m,b]=u.useState(""),[w,k]=u.useState(""),[j,f]=u.useState(""),[g,x]=u.useState(""),[E,y]=u.useState(null),[F,T]=u.useState(null),[D,A]=u.useState(!1);u.useEffect(()=>{I()},[]);const I=async()=>{try{const R=await ie("/api/hashtable_chaining");t(R.table||[]),s(R.size||0),a(R.capacity||0),o(R.load_factor||0),h(R.collision_count||0)}catch(R){console.error("Error loading hashtable:",R)}},H=R=>{if(!i||i===0)return 0;let q=0;for(let L=0;L<R.length;L++)q=(q*31+R.charCodeAt(L))%i;return q},K=async()=>{if(!m.trim()||!w.trim()){p(Y.messages.errorNoKeyValue,"error");return}try{const R=await Z("/api/hashtable_chaining/insert",{key:m.trim(),value:w.trim()});if(R.error){p(R.error,"error");return}await I(),T(m.trim()),R.updated?p(Y.messages.insertUpdated.replace("{key}",m).replace("{index}",R.index),"info"):R.collision?p(Y.messages.insertCollision.replace("{key}",m).replace("{index}",R.index),"warning"):p(Y.messages.insertSuccess.replace("{key}",m).replace("{index}",R.index),"success"),y(R.index),setTimeout(()=>{y(null),T(null)},3e3),b(""),k("")}catch{p(Y.messages.errorInsert,"error")}},B=async()=>{if(!j.trim()){p(Y.messages.errorNoKey,"error");return}try{const R=await Z("/api/hashtable_chaining/delete",{key:j.trim()});if(R.error){p(R.error,"error");return}await I(),p(Y.messages.deleteSuccess.replace("{key}",j),"success"),f("")}catch{p(Y.messages.errorDelete,"error")}},$=async()=>{if(!g.trim()){p(Y.messages.errorNoKey,"error");return}try{const R=await ie(`/api/hashtable_chaining/get?key=${encodeURIComponent(g.trim())}`);if(R.error){p(R.error,"error");return}R.found?p(Y.messages.searchFound.replace("{key}",g).replace("{value}",R.value),"success"):p(Y.messages.searchNotFound.replace("{key}",g),"error"),x("")}catch{p(Y.messages.errorSearch,"error")}},v=async()=>{try{await Z("/api/hashtable_chaining/clear",{}),await I(),y(null),T(null),p(Y.messages.clearSuccess,"success")}catch{p(Y.messages.errorClear,"error")}};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"intro-left",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Te,{className:"icon-sm"}),n.jsx("span",{children:Y.concept.title})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"Chaining"})," ",Y.concept.description.replace("Chaining ","")]}),n.jsx("div",{style:{background:"var(--bg-tertiary)",padding:"0.75rem",borderRadius:"8px",marginTop:"0.5rem",fontFamily:"monospace",fontSize:"0.9rem"},children:n.jsx("div",{children:Y.concept.codeExample})}),n.jsxs("div",{className:"concept-analogy",style:{marginTop:"0.75rem"},children:[n.jsx(ve,{}),n.jsx("span",{children:Y.concept.analogy})]})]})]}),n.jsxs("div",{className:"concept-box",style:{marginTop:"1rem"},children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(qn,{className:"icon-sm",style:{color:"#3b82f6"}}),n.jsx("span",{children:Y.comparison.title})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",fontSize:"0.85rem"},children:[n.jsxs("div",{children:[n.jsx("strong",{style:{color:Y.comparison.chaining.color},children:Y.comparison.chaining.label}),Y.comparison.chaining.points.map((R,q)=>n.jsx("div",{style:{marginTop:"0.25rem"},children:R},q))]}),n.jsxs("div",{children:[n.jsx("strong",{style:{color:Y.comparison.probing.color},children:Y.comparison.probing.label}),Y.comparison.probing.points.map((R,q)=>n.jsx("div",{style:{marginTop:"0.25rem"},children:R},q))]})]}),n.jsx("p",{style:{marginTop:"0.75rem",fontSize:"0.85rem"},children:Y.comparison.summary})]})]})]}),n.jsx(fe,{context:"Hash Table with Chaining"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Operations"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:Y.operations.insert.label}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",value:m,onChange:R=>b(R.target.value),placeholder:Y.operations.insert.keyPlaceholder}),n.jsx("input",{type:"text",value:w,onChange:R=>k(R.target.value),onKeyDown:R=>R.key==="Enter"&&K(),placeholder:Y.operations.insert.valuePlaceholder}),n.jsx("button",{onClick:K,className:"btn btn-insert",children:Y.operations.insert.buttonText})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:Y.operations.delete.label}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",value:j,onChange:R=>f(R.target.value),onKeyDown:R=>R.key==="Enter"&&B(),placeholder:Y.operations.delete.placeholder}),n.jsx("button",{onClick:B,className:"btn btn-delete",children:Y.operations.delete.buttonText})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:Y.operations.search.label}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",value:g,onChange:R=>x(R.target.value),onKeyDown:R=>R.key==="Enter"&&$(),placeholder:Y.operations.search.placeholder}),n.jsx("button",{onClick:$,className:"btn btn-search",children:Y.operations.search.buttonText})]})]}),n.jsx("div",{className:"operation-group",style:{display:"flex",gap:"0.5rem"},children:n.jsx("button",{onClick:v,className:"btn btn-clear",children:Y.operations.clear.buttonText})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:Y.infoLabels.items}),n.jsx("span",{className:"info-value",children:r})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:Y.infoLabels.capacity}),n.jsx("span",{className:"info-value",children:i})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:Y.infoLabels.load}),n.jsx("span",{className:"info-value",style:{color:l>=1?"#f59e0b":"inherit"},children:l.toFixed(2)})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:Y.infoLabels.collisions}),n.jsx("span",{className:"info-value",style:{color:c>0?"#f59e0b":"inherit"},children:c})]})]}),n.jsxs("div",{className:"rehash-info-box",children:[n.jsx(dl,{size:16}),n.jsxs("div",{children:[n.jsx("strong",{children:Y.chainingAdvantage.title}),n.jsx("p",{children:Y.chainingAdvantage.description}),l>=Y.chainingAdvantage.highLoadThreshold?n.jsxs("div",{className:"rehash-recommend",children:[n.jsx(Th,{size:14}),n.jsx("span",{className:"rehash-warning",children:Y.chainingAdvantage.highLoadMessage.replace("{loadFactor}",l.toFixed(2))})]}):n.jsx("span",{className:"rehash-safe",children:Y.chainingAdvantage.safeMessage.replace("{loadFactor}",l.toFixed(2))})]})]}),n.jsx(ze,{message:d})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Hash Table (Chaining)"}),m&&n.jsxs("div",{className:"hash-demo",children:[n.jsxs("div",{className:"hash-demo-item",children:[n.jsx("span",{className:"hash-demo-label",children:"Key:"}),n.jsxs("span",{className:"hash-demo-key",children:['"',m,'"']})]}),n.jsx(de,{className:"hash-demo-arrow"}),n.jsx("div",{className:"hash-demo-item",children:n.jsx("span",{className:"hash-demo-label",children:"hash()"})}),n.jsx(de,{className:"hash-demo-arrow"}),n.jsxs("div",{className:"hash-demo-item",children:[n.jsx("span",{className:"hash-demo-label",children:"Slot:"}),n.jsx("span",{className:"hash-demo-index",children:H(m)})]})]}),n.jsx("div",{className:"ht-chaining-visual",children:!e||e.length===0?n.jsx("div",{className:"ht-empty",children:Y.messages.emptyTable}):n.jsx("div",{className:"ht-chaining-buckets",children:e.map((R,q)=>{const L=E===q,O=R&&Array.isArray(R)&&R.length>0,S=O?R.length:0;return n.jsxs("div",{className:`ht-chaining-row ${O?"filled":"empty"} ${L?"highlighted":""}`,children:[n.jsxs("div",{className:"ht-chaining-index",children:[n.jsx("span",{className:"index-number",children:q}),S>1&&n.jsx("span",{className:"chain-count",children:S})]}),n.jsx("div",{className:"ht-chaining-arrow-container",children:n.jsx(de,{size:18,className:"bucket-arrow"})}),n.jsx("div",{className:"ht-chaining-content",children:O?n.jsx("div",{className:"ht-chaining-chain",children:R.map((z,M)=>{const C=F&&z.key===F;return n.jsxs(Ve.Fragment,{children:[n.jsxs("div",{className:`ht-chaining-node ${C?"just-inserted":""} ${M>0?"collision-node":""}`,children:[n.jsx("div",{className:"node-key",children:z.key}),n.jsx("div",{className:"node-separator"}),n.jsx("div",{className:"node-value",children:z.value})]}),M<R.length-1&&n.jsx("div",{className:"chain-link",children:n.jsx(de,{size:16})})]},M)})}):n.jsx("div",{className:"ht-chaining-empty-slot",children:n.jsx("span",{children:"Empty"})})})]},q)})})}),n.jsx("div",{className:"ht-legend",children:Y.legend.map((R,q)=>n.jsxs("div",{className:"legend-item",children:[R.type==="color"?n.jsx("div",{className:`legend-color ${R.className}`}):n.jsx(dl,{size:14,style:{color:R.color}}),n.jsx("span",{children:R.label})]},q))})]})]}),n.jsx(me,{dataStructure:"hashtableChaining"})]})}function Vv(){const[e,t]=u.useState([]),[r,s]=u.useState(0),[i,a]=u.useState(0),[l,o]=u.useState(0),{message:c,showMessage:h}=Fe(3e3),[d,p]=u.useState(""),[m,b]=u.useState(""),[w,k]=u.useState(""),[j,f]=u.useState(""),[g,x]=u.useState(null),[E,y]=u.useState([]),[F,T]=u.useState(null),[D,A]=u.useState(null);u.useEffect(()=>{I()},[]);const I=async()=>{try{const q=await ie("/api/hashtable_quadratic");t(q.table||[]),s(q.size||0),a(q.capacity||0),o(q.load_factor||0)}catch(q){console.error("Error loading hashtable:",q)}},H=q=>{if(!i||i===0)return 0;let L=0;for(let O=0;O<q.length;O++)L=(L*31+q.charCodeAt(O))%i;return L},K=(q,L)=>{var z;const O=H(q),S=[];for(let M=0;M<i;M++){const C=(O+M*M)%i;if(S.push({index:C,i:M,formula:`(${O} + ${M}²) % ${i} = ${C}`}),!L[C]||L[C][0]===q)break}return{originalHash:O,path:S,finalSlot:(z=S[S.length-1])==null?void 0:z.index}},B=async()=>{if(!d.trim()||!m.trim()){h("Please enter both key and value!","error");return}const q=i>0?H(d.trim()):0,L=e.length>0&&e[q]&&e[q]!=="DELETED"&&e[q][0]!==d.trim();let O=null;L&&(O=K(d.trim(),e));try{const S=await Z("/api/hashtable_quadratic/insert",{key:d.trim(),value:m.trim()});if(S.error){h(S.error,"error");return}await I(),T(d.trim()),L&&O?(A({key:d.trim(),originalSlot:O.originalHash,probedSlots:O.path,finalSlot:S.final_index}),y(O.path.map(z=>z.index)),h(`Collision! Quadratic probing: ${O.path.length} probe(s)`,"warning"),setTimeout(()=>{y([]),A(null)},5e3)):(h(`Inserted "${d}" → slot ${q}`,"success"),x(q),setTimeout(()=>x(null),2e3)),p(""),b(""),setTimeout(()=>T(null),3e3)}catch{h("Error inserting. Is Flask running?","error")}},$=async()=>{if(!w.trim()){h("Please enter a key!","error");return}try{const q=await Z("/api/hashtable_quadratic/delete",{key:w.trim()});if(q.error){h(q.error,"error");return}await I(),h(`Deleted "${w}"`,"success"),k("")}catch{h("Error deleting. Is Flask running?","error")}},v=async()=>{if(!j.trim()){h("Please enter a key!","error");return}try{const q=await ie(`/api/hashtable_quadratic/get?key=${encodeURIComponent(j.trim())}`);if(q.error){h(q.error,"error");return}q.found?h(`Found: "${j}" = ${q.value}`,"success"):h(`Key "${j}" not found`,"error"),f("")}catch{h("Error searching item","error")}},R=async()=>{try{await Z("/api/hashtable_quadratic/clear",{}),await I(),y([]),A(null),h("Hashtable cleared!","success")}catch{h("Error clearing hashtable","error")}};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"intro-left",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Te,{className:"icon-sm"}),n.jsx("span",{children:"What is Quadratic Probing?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"Quadratic Probing"})," is a collision resolution technique where we probe at quadratically increasing intervals."]}),n.jsxs("div",{style:{background:"var(--bg-tertiary)",padding:"0.75rem",borderRadius:"8px",marginTop:"0.5rem",fontFamily:"monospace",fontSize:"0.9rem"},children:[n.jsx("div",{children:"probe(i) = (hash + i²) % capacity"}),n.jsx("div",{style:{color:"var(--text-muted)",marginTop:"0.25rem"},children:"i = 0, 1, 4, 9, 16, 25..."})]}),n.jsxs("div",{className:"concept-analogy",style:{marginTop:"0.75rem"},children:[n.jsx(ve,{}),n.jsxs("span",{children:["Unlike linear probing, we jump further each time – reducing ",n.jsx("strong",{children:"clustering"}),"!"]})]})]})]}),n.jsxs("div",{className:"concept-box",style:{marginTop:"1rem"},children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(qn,{className:"icon-sm",style:{color:"#3b82f6"}}),n.jsx("span",{children:"Linear vs Quadratic"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",fontSize:"0.85rem"},children:[n.jsxs("div",{children:[n.jsx("strong",{style:{color:"#f59e0b"},children:"Linear:"}),n.jsx("div",{style:{fontFamily:"monospace",marginTop:"0.25rem"},children:"+1, +2, +3, +4..."})]}),n.jsxs("div",{children:[n.jsx("strong",{style:{color:"#22c55e"},children:"Quadratic:"}),n.jsx("div",{style:{fontFamily:"monospace",marginTop:"0.25rem"},children:"+1, +4, +9, +16..."})]})]}),n.jsx("p",{style:{marginTop:"0.75rem",fontSize:"0.85rem"},children:"Quadratic probing spreads entries more evenly but may not find empty slots if table is over 50% full."})]})]})]}),n.jsx(fe,{context:"Hash Table with Quadratic Probing"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Operations"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Insert Key-Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",value:d,onChange:q=>p(q.target.value),placeholder:"Key"}),n.jsx("input",{type:"text",value:m,onChange:q=>b(q.target.value),onKeyPress:q=>q.key==="Enter"&&B(),placeholder:"Value"}),n.jsx("button",{onClick:B,className:"btn btn-insert",children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Delete Key"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",value:w,onChange:q=>k(q.target.value),onKeyPress:q=>q.key==="Enter"&&$(),placeholder:"Key"}),n.jsx("button",{onClick:$,className:"btn btn-delete",children:"Delete"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Search Key"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",value:j,onChange:q=>f(q.target.value),onKeyPress:q=>q.key==="Enter"&&v(),placeholder:"Key"}),n.jsx("button",{onClick:v,className:"btn btn-search",children:"Search"})]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:R,className:"btn btn-clear",children:"Clear Table"})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Items"}),n.jsxs("span",{className:"info-value",children:[r,"/",i]})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Load"}),n.jsxs("span",{className:"info-value",style:{color:l>=.5?"#f59e0b":"inherit"},children:[(l*100).toFixed(0),"%"]})]})]}),n.jsxs("div",{className:"rehash-info-box",children:[n.jsx(bh,{size:16}),n.jsxs("div",{children:[n.jsx("strong",{children:"Rehashing Threshold: 50%"}),n.jsx("p",{children:"Quadratic probing requires lower load factor (~0.5) to guarantee finding empty slots."}),l>=.5?n.jsxs("span",{className:"rehash-warning",children:["Load (",(l*100).toFixed(0),"%) at threshold!"]}):n.jsxs("span",{className:"rehash-safe",children:["Currently safe (",(l*100).toFixed(0),"% < 50%)"]})]})]}),n.jsx(ze,{message:c})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Hash Table (Quadratic Probing)"}),d&&n.jsxs("div",{className:"hash-demo",children:[n.jsxs("div",{className:"hash-demo-item",children:[n.jsx("span",{className:"hash-demo-label",children:"Key:"}),n.jsxs("span",{className:"hash-demo-key",children:['"',d,'"']})]}),n.jsx(de,{className:"hash-demo-arrow"}),n.jsx("div",{className:"hash-demo-item",children:n.jsx("span",{className:"hash-demo-label",children:"hash()"})}),n.jsx(de,{className:"hash-demo-arrow"}),n.jsxs("div",{className:"hash-demo-item",children:[n.jsx("span",{className:"hash-demo-label",children:"Slot:"}),n.jsx("span",{className:"hash-demo-index",children:H(d)})]})]}),D&&n.jsxs("div",{className:"collision-banner",children:[n.jsx(Nn,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Quadratic Probing!"}),n.jsxs("p",{children:['"',D.key,'" hashed to slot ',n.jsx("span",{className:"slot-badge original",children:D.originalSlot})]}),n.jsx("div",{style:{marginTop:"0.5rem",fontSize:"0.8rem",fontFamily:"monospace"},children:D.probedSlots.map((q,L)=>n.jsxs("div",{style:{marginBottom:"0.25rem"},children:["i=",q.i,": ",q.formula,L===D.probedSlots.length-1&&n.jsx("span",{style:{color:"#4ade80"},children:" [FOUND]"})]},L))})]})]}),n.jsx("div",{className:"ht-visual",children:!e||e.length===0?n.jsx("div",{className:"ht-empty",children:"Hash table is empty. Insert some key-value pairs!"}):n.jsx("div",{className:"ht-buckets",children:e.map((q,L)=>{const O=E.includes(L),S=D&&D.originalSlot===L,z=D&&D.finalSlot===L,M=q==="DELETED",C=q&&q!=="DELETED";return n.jsxs("div",{className:`ht-row ${C?"filled":"empty"} 
                        ${M?"deleted":""}
                        ${g===L?"highlighted":""} 
                        ${F&&C&&q[0]===F?"just-inserted":""}
                        ${O?"probed":""}
                        ${S?"original-hash":""}
                        ${z?"final-slot":""}`,children:[O&&n.jsx("div",{className:"probe-indicator",children:S?"X":z?"O":">"}),n.jsxs("div",{className:`ht-key-box ${C?"has-key":""} ${M?"deleted-slot":""}`,children:[C&&n.jsx("span",{className:"ht-key",children:q[0]}),M&&n.jsx("span",{className:"ht-deleted-text",children:"DEL"})]}),n.jsx("div",{className:"ht-arrow",children:C&&n.jsx(de,{size:20})}),n.jsx("div",{className:`ht-index ${S?"collision-index":""}`,children:L}),n.jsx("div",{className:`ht-value-box ${C?"has-value":""} ${M?"deleted-slot":""}`,children:C?n.jsx("span",{className:"ht-value",children:q[1]}):M?n.jsx("span",{className:"ht-deleted-text",children:"DELETED"}):n.jsx("span",{className:"ht-empty-slot",children:"—"})})]},L)})})}),n.jsxs("div",{className:"ht-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color key-color"}),n.jsx("span",{children:"Key"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color index-color"}),n.jsx("span",{children:"Index"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color value-color"}),n.jsx("span",{children:"Value"})]}),E.length>0&&n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color probe-color"}),n.jsx("span",{children:"Probe Path"})]})]})]})]}),n.jsx(me,{dataStructure:"hashtable"})]})}const $t=7,Dv={inorder:{name:"Inorder Traversal",order:"Left → Root → Right",description:"Visit left subtree, process root, then visit right subtree. For BST, this produces sorted order.",useCase:["Get sorted elements","Validate BST","Create mirror image"],complexity:{time:"O(n)",space:"O(h)"}},preorder:{name:"Preorder Traversal",order:"Root → Left → Right",description:"Process root first, then recursively visit left and right subtrees. Useful for copying trees.",useCase:["Copy tree structure","Serialize/deserialize","Prefix expressions"],complexity:{time:"O(n)",space:"O(h)"}},postorder:{name:"Postorder Traversal",order:"Left → Right → Root",description:"Visit left subtree, right subtree, then process root. Essential for deleting nodes safely.",useCase:["Delete nodes safely","Calculate folder sizes","Postfix expressions"],complexity:{time:"O(n)",space:"O(h)"}},levelorder:{name:"Level Order Traversal",order:"Level by Level (BFS)",description:"Visit nodes level by level using a queue. Perfect for finding shortest paths.",useCase:["Shortest path","Level-wise printing","Nodes at distance K"],complexity:{time:"O(n)",space:"O(w)"}}},hl=(e,t=[])=>(e&&(hl(e.left,t),t.push(e.data),hl(e.right,t)),t),pl=(e,t=[])=>(e&&(t.push(e.data),pl(e.left,t),pl(e.right,t)),t),fl=(e,t=[])=>(e&&(fl(e.left,t),fl(e.right,t),t.push(e.data)),t),$v=e=>{if(!e)return[];const t=[],r=[e];for(;r.length;){const s=r.shift();t.push(s.data),s.left&&r.push(s.left),s.right&&r.push(s.right)}return t},ml=(e,t=0)=>e?Math.max(ml(e.left,t+1),ml(e.right,t+1)):t-1;function Bv(){return n.jsxs("div",{className:"intro-left",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Te,{className:"icon-sm"}),n.jsx("span",{children:"What is a Binary Tree?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["A ",n.jsx("strong",{children:"Binary Tree"})," is a hierarchical data structure where each node has at most ",n.jsx("strong",{children:"two children"}),": left and right."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(ve,{}),n.jsxs("span",{children:["Think of a ",n.jsx("strong",{children:"family tree"})," – each person can have up to two children!"]})]}),n.jsxs("div",{className:"concept-key-terms",children:[n.jsx("h4",{children:"Key Terms:"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Node:"})," Contains data and links to children"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Root:"})," The topmost node (no parent)"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Leaf:"})," A node with no children"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Height:"})," Longest path from root to leaf"]})]})]})]})]}),n.jsxs("div",{className:"concept-box",style:{marginTop:"1rem"},children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(qn,{className:"icon-sm"}),n.jsx("span",{children:"What are Tree Traversals?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"Tree Traversal"})," is visiting each node ",n.jsx("strong",{children:"exactly once"})," in a specific order."]}),n.jsxs("div",{className:"concept-why-traverse",children:[n.jsx("h4",{children:"Why Traverse?"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Search:"})," Find specific data"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Copy:"})," Duplicate the tree"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Evaluate:"})," Calculate expressions"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Delete:"})," Remove nodes properly"]})]})]}),n.jsxs("div",{className:"concept-analogy",style:{marginTop:"0.75rem"},children:[n.jsx(ve,{}),n.jsx("span",{children:"Like reading a book – you can read in different orders based on your needs!"})]})]})]})]})}function qv({insertValue:e,deleteValue:t,size:r,height:s,message:i,tree:a,isAnimating:l,visitedNodes:o,onInsertValueChange:c,onDeleteValueChange:h,onInsert:d,onDelete:p,onTraversal:m,onClear:b,onResetTraversal:w}){const k=(j,f)=>{const g=j.target.value;(g===""||g==="-"||/^-?\d*\.?\d*$/.test(g))&&f(g)};return n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Binary Tree Traversals"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertValue",children:"Insert Node"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"insertValue",value:e,onChange:j=>k(j,c),onKeyPress:j=>j.key==="Enter"&&d(),placeholder:"Enter a number"}),n.jsx("button",{onClick:d,className:"btn btn-insert",children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"deleteValue",children:"Delete Node"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"deleteValue",value:t,onChange:j=>k(j,h),onKeyPress:j=>j.key==="Enter"&&p(),placeholder:"Enter a number"}),n.jsx("button",{onClick:p,className:"btn btn-delete",children:"Delete"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Traversals"}),n.jsx("div",{className:"btn-group",children:["inorder","preorder","postorder","levelorder"].map(j=>n.jsx("button",{onClick:()=>m(j),className:"btn btn-traversal",disabled:l||!a,children:j==="levelorder"?"Level Order":j.charAt(0).toUpperCase()+j.slice(1)},j))}),o.length>0&&!l&&n.jsx("button",{onClick:w,className:"btn btn-secondary",style:{marginTop:"0.5rem",width:"100%"},children:"Reset Colors"})]}),n.jsxs("div",{className:"traversal-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--default"}),n.jsx("span",{children:"Not visited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visiting"}),n.jsx("span",{children:"Visiting"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visited"}),n.jsx("span",{children:"Visited"})]})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Size:"}),n.jsx("span",{className:"info-value",children:r})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Height:"}),n.jsx("span",{className:"info-value",children:s})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Max Size:"}),n.jsx("span",{className:"info-value",children:$t})]})]}),r>=$t*.8&&r<$t&&n.jsxs("div",{className:"warning-box",children:[n.jsx(Nn,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Tree is filling up!"})," You're at ",r,"/",$t," nodes."]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:b,className:"btn btn-clear",children:"Clear Tree"})}),i&&n.jsx("div",{className:`message message-${i.includes("Error")||i.includes("error")?"error":/success|complete|Inserted|Deleted|cleared/i.test(i)?"success":i.includes("full")?"warning":"info"}`,children:i})]})}function Hv({tree:e,currentNode:t,visitedNodes:r}){const s=c=>{const h=t===c,d=r.includes(c);return{color:h?"#f59e0b":d?"#10b981":"#6366f1",glow:h?"drop-shadow(0 0 12px #f59e0b) drop-shadow(0 0 20px #f59e0b)":d?"drop-shadow(0 0 6px #10b981)":"none",radius:h?30:25,stroke:h?3:2,fontSize:h?16:14,fontWeight:h?"bold":"normal"}},i=(c,h,d,p,m)=>{if(!c)return[];const b=Math.pow(2,m-p)*50,w=s(c.data),k=[];return c.left&&(k.push(n.jsx("line",{x1:h,y1:d,x2:h-b,y2:d+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:"2"},`l-${c.data}-l`)),k.push(...i(c.left,h-b,d+100,p+1,m))),c.right&&(k.push(n.jsx("line",{x1:h,y1:d,x2:h+b,y2:d+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:"2"},`l-${c.data}-r`)),k.push(...i(c.right,h+b,d+100,p+1,m))),k.push(n.jsxs("g",{style:{filter:w.glow,transition:"all 0.3s ease"},children:[n.jsx("circle",{cx:h,cy:d,r:w.radius,fill:w.color,stroke:"white",strokeWidth:w.stroke,style:{transition:"all 0.3s ease"}}),n.jsx("text",{x:h,y:d,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:w.fontSize,fontWeight:w.fontWeight,children:c.data})]},`n-${c.data}-${h}`)),k};if(!e)return n.jsx("div",{className:"tree-empty",children:"Tree is empty. Insert some nodes!"});const a=ml(e),l=(a+1)*100+50,o=Math.max(800,Math.pow(2,Math.max(a,1))*80);return n.jsx("svg",{width:o,height:l,className:"tree-svg",children:i(e,o/2,50,0,a)})}function Uv({traversalType:e,traversalResult:t,isAnimating:r,traversalComplete:s}){if(!e||t.length===0&&!r)return null;const i=Dv[e];return n.jsxs("div",{className:"traversal-output-panel",children:[n.jsxs("div",{style:{marginBottom:"1rem"},children:[n.jsxs("h3",{className:"traversal-title",children:[i==null?void 0:i.name,r&&n.jsx("span",{className:"traversal-badge traversal-badge--running",children:"Running..."}),s&&n.jsx("span",{className:"traversal-badge traversal-badge--complete",children:"Complete"})]}),n.jsxs("p",{className:"traversal-order",children:[n.jsx("strong",{children:"Order:"})," ",i==null?void 0:i.order]}),n.jsx("p",{className:"traversal-description",children:i==null?void 0:i.description})]}),n.jsxs("div",{className:"traversal-output-box",children:[n.jsx("div",{className:"traversal-output-label",children:"Output Sequence:"}),n.jsx("div",{className:"traversal-sequence-container",children:t.length===0&&r?n.jsx("span",{style:{color:"var(--text-muted)",fontStyle:"italic"},children:"Traversing..."}):t.map((a,l)=>n.jsx("span",{className:`traversal-node ${l===t.length-1&&!s?"traversal-node--current":"traversal-node--complete"}`,children:a},l))})]}),s&&t.length>0&&n.jsxs("div",{className:"traversal-array-section",children:[n.jsx("div",{className:"traversal-array-label",children:"Array Output:"}),n.jsxs("code",{className:"traversal-array-output",children:["[",t.join(", "),"]"]}),n.jsxs("p",{className:"traversal-use-case",children:["Use case: ",i==null?void 0:i.useCase.join(" • ")]}),n.jsxs("div",{className:"traversal-complexity",children:[n.jsx("strong",{children:"Time:"})," ",n.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.time})," (visits each node once)",n.jsx("br",{}),n.jsx("strong",{children:"Space:"})," ",n.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.space})," (recursion stack/queue)"]})]})]})}function Kv(){const[e,t]=u.useState(null),[r,s]=u.useState(0),[i,a]=u.useState(-1),[l,o]=u.useState(""),[c,h]=u.useState(""),[d,p]=u.useState(""),[m,b]=u.useState([]),[w,k]=u.useState(!1),[j,f]=u.useState(null),[g,x]=u.useState([]),[E,y]=u.useState(null),[F,T]=u.useState(!1);u.useEffect(()=>{D()},[]);const D=async()=>{try{const R=await(await fetch("/api/binarytree")).json();t(R.tree),s(R.size||0),a(R.height!==void 0?R.height:-1)}catch(v){console.error("Error loading tree:",v)}},A=v=>{p(v),setTimeout(()=>p(""),3e3)},I=async()=>{if(!l.trim()){A("Please enter a number!");return}const v=Number(l);if(isNaN(v)){A("Please enter a valid number!");return}if(r>=$t){A(`Tree is full! Maximum size is ${$t} nodes.`);return}try{const q=await(await fetch("/api/binarytree/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:v})})).json();if(q.error){A(q.error);return}t(q.tree),s(q.size||0),a(q.height!==void 0?q.height:-1),A(`Inserted ${v}`),o("")}catch{A("Error inserting node")}},H=async()=>{if(!c.trim()){A("Please enter a number!");return}const v=Number(c);if(isNaN(v)){A("Please enter a valid number!");return}try{const q=await(await fetch("/api/binarytree/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:v})})).json();if(q.error){A(q.error);return}t(q.tree),s(q.size||0),a(q.height!==void 0?q.height:-1),A(`Deleted ${v}`),h("")}catch{A("Error deleting node")}},K=async()=>{try{await fetch("/api/binarytree/clear",{method:"POST"}),t(null),s(0),a(-1),$(),A("Tree cleared!")}catch{A("Error clearing tree")}},B=async v=>{if(!e){A("Tree is empty! Insert some nodes first.");return}k(!0),b([]),f(null),x([]),y(v),T(!1);let R=[];switch(v){case"inorder":R=hl(e);break;case"preorder":R=pl(e);break;case"postorder":R=fl(e);break;case"levelorder":R=$v(e);break;default:R=[]}if(R.length===0){A("Tree is empty!"),k(!1);return}for(let q=0;q<R.length;q++)f(R[q]),await new Promise(L=>setTimeout(L,600)),x(L=>[...L,R[q]]),b(L=>[...L,R[q]]),await new Promise(L=>setTimeout(L,200));f(null),T(!0),k(!1),A(`${v.charAt(0).toUpperCase()+v.slice(1)} traversal complete!`)},$=()=>{b([]),f(null),x([]),y(null),T(!1)};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsx(Bv,{}),n.jsx(fe,{context:"Binary Tree data structure and traversals"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsx(qv,{insertValue:l,deleteValue:c,size:r,height:i,message:d,tree:e,isAnimating:w,visitedNodes:g,onInsertValueChange:o,onDeleteValueChange:h,onInsert:I,onDelete:H,onTraversal:B,onClear:K,onResetTraversal:$}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Binary Tree Visualization"}),n.jsx("div",{className:"tree-container",children:n.jsx(Hv,{tree:e,currentNode:j,visitedNodes:g})}),n.jsx(Uv,{traversalType:E,traversalResult:m,isAnimating:w,traversalComplete:F})]})]}),n.jsx(me,{dataStructure:"binarytree"})]})}const Wv={title:"What is a Stack?",description:"A Stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle.",codeExample:"push(A) → push(B) → push(C) → pop() returns C",analogy:"Like a stack of plates - you can only take the top plate off first!"},Gv={title:"Stack Properties",items:[{label:"Order",value:"LIFO (Last-In-First-Out)"},{label:"Access",value:"Top element only"},{label:"Insert",value:"Push to top - O(1)"},{label:"Remove",value:"Pop from top - O(1)"}]},Qv={title:"Common Use Cases",items:["Function call stack (recursion)","Undo/Redo operations","Browser back button","Expression evaluation","Syntax parsing"]},Xv={title:"Time Complexity",operations:[{name:"Push",time:"O(1)",description:"Add to top"},{name:"Pop",time:"O(1)",description:"Remove from top"},{name:"Peek",time:"O(1)",description:"View top element"},{name:"isEmpty",time:"O(1)",description:"Check if empty"},{name:"Search",time:"O(n)",description:"Find element"}]},Yv={push:{label:"Push Value",placeholder:"Value",buttonText:"Push"},pop:{buttonText:"Pop"},peek:{buttonText:"Peek"},clear:{buttonText:"Clear"}},Jv={size:"Size",top:"Top",capacity:"Capacity"},Zv={emptyStack:"Stack is empty. Push some values!",pushSuccess:'Pushed "{value}" to stack',popSuccess:'Popped "{value}" from stack',popEmpty:"Cannot pop - stack is empty!",peekSuccess:'Top element: "{value}"',peekEmpty:"Cannot peek - stack is empty!",clearSuccess:"Stack cleared!",errorNoValue:"Please enter a value!",errorPush:"Error pushing to stack",errorPop:"Error popping from stack",errorClear:"Error clearing stack",stackFull:"Stack is full!"},ey=[{type:"color",className:"top-color",label:"Top Element"},{type:"color",className:"element-color",label:"Stack Element"}],ny={concept:Wv,properties:Gv,useCases:Qv,complexity:Xv,operations:Yv,infoLabels:Jv,messages:Zv,legend:ey},ty={title:"What is a Queue?",description:"A Queue is a linear data structure that follows the First-In-First-Out (FIFO) principle.",codeExample:"enqueue(A) → enqueue(B) → enqueue(C) → dequeue() returns A",analogy:"Like a line at a store - first person in line gets served first!"},ry={title:"Queue Properties",items:[{label:"Order",value:"FIFO (First-In-First-Out)"},{label:"Access",value:"Front and Rear"},{label:"Insert",value:"Enqueue at rear - O(1)"},{label:"Remove",value:"Dequeue from front - O(1)"}]},sy={title:"Queue vs Stack",queue:{label:"Queue:",color:"#22c55e",points:["FIFO order","Two access points (front/rear)"]},stack:{label:"Stack:",color:"#3b82f6",points:["LIFO order","One access point (top)"]},summary:"Use Queue when order of processing matters (like task scheduling)."},iy={title:"Common Use Cases",items:["Task scheduling (CPU, print jobs)","Breadth-First Search (BFS)","Message queues","Request handling in servers","Buffering (streaming)"]},ay={title:"Time Complexity",operations:[{name:"Enqueue",time:"O(1)",description:"Add to rear"},{name:"Dequeue",time:"O(1)",description:"Remove from front"},{name:"Front",time:"O(1)",description:"View front element"},{name:"isEmpty",time:"O(1)",description:"Check if empty"},{name:"Search",time:"O(n)",description:"Find element"}]},ly={enqueue:{label:"Enqueue Value",placeholder:"Value",buttonText:"Enqueue"},dequeue:{buttonText:"Dequeue"},front:{buttonText:"Front"},clear:{buttonText:"Clear"}},oy={size:"Size",front:"Front",rear:"Rear",capacity:"Capacity"},cy={emptyQueue:"Queue is empty. Enqueue some values!",enqueueSuccess:'Enqueued "{value}"',dequeueSuccess:'Dequeued "{value}"',dequeueEmpty:"Cannot dequeue - queue is empty!",frontSuccess:'Front element: "{value}"',frontEmpty:"Cannot get front - queue is empty!",clearSuccess:"Queue cleared!",errorNoValue:"Please enter a value!",errorEnqueue:"Error enqueueing to queue",errorDequeue:"Error dequeueing from queue",errorClear:"Error clearing queue",queueFull:"Queue is full!"},dy=[{type:"color",className:"front-color",label:"Front"},{type:"color",className:"rear-color",label:"Rear"},{type:"color",className:"element-color",label:"Queue Element"}],uy={concept:ty,properties:ry,comparison:sy,useCases:iy,complexity:ay,operations:ly,infoLabels:oy,messages:cy,legend:dy},hy={title:"What is a Linked List?",description:"A Linked List is a linear data structure where elements are stored in nodes, each pointing to the next node.",codeExample:"HEAD → [A|→] → [B|→] → [C|→] → NULL",analogy:"Like a treasure hunt - each clue (node) points to the next location!"},py={title:"Linked List Properties",items:[{label:"Structure",value:"Nodes with data + pointer"},{label:"Memory",value:"Non-contiguous allocation"},{label:"Size",value:"Dynamic (grows/shrinks)"},{label:"Access",value:"Sequential (no random access)"}]},fy={title:"Linked List vs Array",linkedlist:{label:"Linked List:",color:"#22c55e",points:["Dynamic size","O(1) insert/delete at known position","Extra memory for pointers"]},array:{label:"Array:",color:"#3b82f6",points:["Fixed size (usually)","O(1) random access by index","Contiguous memory"]},summary:"Use Linked List when you need frequent insertions/deletions and don't need random access."},my={title:"Types of Linked Lists",items:[{name:"Singly Linked",description:"Each node points to next only"},{name:"Doubly Linked",description:"Nodes point to both next and previous"},{name:"Circular",description:"Last node points back to first"}]},gy={title:"Time Complexity",operations:[{name:"Access",time:"O(n)",description:"Traverse to find"},{name:"Search",time:"O(n)",description:"Linear search"},{name:"Insert (head)",time:"O(1)",description:"Add at beginning"},{name:"Insert (tail)",time:"O(n)",description:"Traverse then add"},{name:"Delete (head)",time:"O(1)",description:"Remove first"},{name:"Delete (by value)",time:"O(n)",description:"Find then remove"}]},xy={insertHead:{label:"Insert at Head",placeholder:"Value",buttonText:"Insert Head"},insertTail:{label:"Insert at Tail",placeholder:"Value",buttonText:"Insert Tail"},delete:{label:"Delete Value",placeholder:"Value",buttonText:"Delete"},search:{label:"Search Value",placeholder:"Value",buttonText:"Search"},clear:{buttonText:"Clear"}},vy={size:"Size",head:"Head",tail:"Tail"},yy={emptyList:"Linked list is empty. Insert some values!",insertHeadSuccess:'Inserted "{value}" at head',insertTailSuccess:'Inserted "{value}" at tail',deleteSuccess:'Deleted "{value}"',deleteNotFound:'Value "{value}" not found',searchFound:'Found "{value}" at position {position}',searchNotFound:'Value "{value}" not found',clearSuccess:"Linked list cleared!",errorNoValue:"Please enter a value!",errorInsert:"Error inserting value",errorDelete:"Error deleting value",errorSearch:"Error searching value",errorClear:"Error clearing list"},jy=[{type:"color",className:"head-color",label:"Head Node"},{type:"color",className:"node-color",label:"Node"},{type:"icon",icon:"ArrowRight",color:"#8b5cf6",label:"Pointer"}],Ny={concept:hy,properties:py,comparison:fy,types:my,complexity:gy,operations:xy,infoLabels:vy,messages:yy,legend:jy},ky={title:"What is a Binary Tree?",description:"A Binary Tree is a hierarchical data structure where each node has at most two children (left and right).",codeExample:`       [5]
      /   \\
    [3]   [7]
   /  \\     \\
 [1]  [4]   [9]`,analogy:"Like a family tree - each person can have at most two children!"},wy={title:"Binary Tree Properties",items:[{label:"Structure",value:"Hierarchical (nodes + edges)"},{label:"Children",value:"At most 2 per node"},{label:"Root",value:"Topmost node (no parent)"},{label:"Leaf",value:"Node with no children"}]},by={title:"Types of Binary Trees",items:[{name:"Full Binary Tree",description:"Every node has 0 or 2 children"},{name:"Complete Binary Tree",description:"All levels filled except possibly last"},{name:"Perfect Binary Tree",description:"All internal nodes have 2 children, leaves at same level"},{name:"Binary Search Tree",description:"Left < Parent < Right ordering"}]},Sy={title:"Tree Traversals",items:[{name:"Inorder",order:"Left → Root → Right",use:"BST gives sorted order"},{name:"Preorder",order:"Root → Left → Right",use:"Copy tree, prefix expression"},{name:"Postorder",order:"Left → Right → Root",use:"Delete tree, postfix expression"},{name:"Level Order",order:"Level by level (BFS)",use:"Print by levels"}]},Cy={title:"Time Complexity (BST)",operations:[{name:"Search",average:"O(log n)",worst:"O(n)",description:"Find element"},{name:"Insert",average:"O(log n)",worst:"O(n)",description:"Add element"},{name:"Delete",average:"O(log n)",worst:"O(n)",description:"Remove element"},{name:"Traversal",average:"O(n)",worst:"O(n)",description:"Visit all nodes"}],note:"Worst case O(n) occurs when tree becomes a linked list (unbalanced)"},Ty={title:"Common Use Cases",items:["Binary Search Trees (fast lookup)","Expression trees (parsing)","Huffman coding (compression)","Heaps (priority queues)","File system structure"]},_y={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},delete:{label:"Delete Value",placeholder:"Value",buttonText:"Delete"},search:{label:"Search Value",placeholder:"Value",buttonText:"Search"},traversals:{inorder:"Inorder",preorder:"Preorder",postorder:"Postorder",levelorder:"Level Order"},clear:{buttonText:"Clear"}},Ly={size:"Nodes",height:"Height",root:"Root"},Ey={emptyTree:"Binary tree is empty. Insert some values!",insertSuccess:"Inserted {value}",deleteSuccess:"Deleted {value}",deleteNotFound:"Value {value} not found",searchFound:"Found {value}",searchNotFound:"Value {value} not found",clearSuccess:"Tree cleared!",traversalResult:"{type} traversal: {result}",errorNoValue:"Please enter a value!",errorInsert:"Error inserting value",errorDelete:"Error deleting value",errorSearch:"Error searching value",errorClear:"Error clearing tree"},Oy=[{type:"color",className:"root-color",label:"Root"},{type:"color",className:"node-color",label:"Node"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Found"}],Ry={concept:ky,properties:wy,types:by,traversals:Sy,complexity:Cy,useCases:Ty,operations:_y,infoLabels:Ly,messages:Ey,legend:Oy},Py={title:"What is a Hash Table?",description:"A Hash Table is a data structure that maps keys to values using a hash function for O(1) average access time.",codeExample:'hash("apple") → 3 → table[3] = "apple"',analogy:"Like a library catalog - the book title (key) tells you exactly which shelf (index) to find it!"},Iy={title:"Hash Table Properties",items:[{label:"Access",value:"O(1) average time"},{label:"Hash Function",value:"Maps key → index"},{label:"Load Factor",value:"size / capacity"},{label:"Collision",value:"When two keys hash to same index"}]},My={title:"Collision Resolution: Linear Probing",description:"When a collision occurs, probe sequentially until an empty slot is found.",steps:["Calculate hash index","If slot occupied, try next slot","Repeat until empty slot found","Insert at empty slot"],formula:"index = (hash(key) + i) % capacity, where i = 0, 1, 2, ..."},zy={title:"Linear vs Quadratic Probing",linear:{label:"Linear Probing:",color:"#3b82f6",points:["Simple: check next slot","Primary clustering problem","Cache-friendly"]},quadratic:{label:"Quadratic Probing:",color:"#f59e0b",points:["Jump by squares: 1, 4, 9...","Reduces primary clustering","May not find empty slot"]},summary:"Linear probing is simpler but can cause clustering. Quadratic probing spreads entries better."},Fy={title:"Load Factor",description:"Load factor = size / capacity. Measures how full the table is.",threshold:.7,warningMessage:"High load ({loadFactor}) - consider rehashing!",safeMessage:"Load factor: {loadFactor}"},Ay={title:"Time Complexity",operations:[{name:"Insert",average:"O(1)",worst:"O(n)",description:"Add key-value"},{name:"Search",average:"O(1)",worst:"O(n)",description:"Find by key"},{name:"Delete",average:"O(1)",worst:"O(n)",description:"Remove by key"},{name:"Rehash",average:"O(n)",worst:"O(n)",description:"Resize table"}],note:"Worst case O(n) when many collisions or poor hash function"},Vy={title:"Common Use Cases",items:["Dictionaries/Maps","Caching (memoization)","Database indexing","Symbol tables (compilers)","Counting frequencies"]},Dy={insert:{label:"Insert Key-Value",keyPlaceholder:"Key",valuePlaceholder:"Value",buttonText:"Insert"},delete:{label:"Delete Key",placeholder:"Key",buttonText:"Delete"},search:{label:"Search Key",placeholder:"Key",buttonText:"Search"},clear:{buttonText:"Clear"},rehash:{buttonText:"Rehash"}},$y={items:"Items",capacity:"Capacity",load:"Load",collisions:"Collisions"},By={emptyTable:"Hash table is empty. Insert some key-value pairs!",insertSuccess:'Inserted "{key}" at slot {index}',insertUpdated:'Updated "{key}" at slot {index}',insertCollision:"Collision at slot {original}! Probed to slot {index}",deleteSuccess:'Deleted "{key}"',searchFound:'Found: "{key}" = {value}',searchNotFound:'Key "{key}" not found',clearSuccess:"Hash table cleared!",rehashSuccess:"Rehashed! Capacity: {oldCapacity} → {newCapacity}",rehashEmpty:"Nothing to rehash - table is empty!",tableFull:"Table is full! Consider rehashing.",errorNoKey:"Please enter a key!",errorNoKeyValue:"Please enter both key and value!",errorInsert:"Error inserting. Is Flask running?",errorDelete:"Error deleting. Is Flask running?",errorSearch:"Error searching item",errorClear:"Error clearing hash table",errorRehash:"Error rehashing. Is Flask running?"},qy=[{type:"color",className:"key-color",label:"Key"},{type:"color",className:"index-color",label:"Index"},{type:"color",className:"value-color",label:"Value"},{type:"color",className:"probe-color",label:"Probed Slot"},{type:"color",className:"collision-color",label:"Collision"}],Hy={concept:Py,properties:Iy,collisionResolution:My,comparison:zy,loadFactor:Fy,complexity:Ay,useCases:Vy,operations:Dy,infoLabels:$y,messages:By,legend:qy},Uy={title:"What is Quadratic Probing?",description:"Quadratic Probing is a collision resolution technique that uses a quadratic function to find the next available slot.",codeExample:"index = (hash(key) + i²) % capacity, where i = 0, 1, 2, 3...",analogy:"Like jumping farther each time - first 1 step, then 4, then 9, then 16!"},Ky={title:"Quadratic Probing Properties",items:[{label:"Probe Sequence",value:"+1, +4, +9, +16, +25..."},{label:"Formula",value:"(hash + i²) % capacity"},{label:"Clustering",value:"Reduces primary clustering"},{label:"Load Factor",value:"Must stay below 0.5 for guarantee"}]},Wy={title:"Quadratic vs Linear Probing",quadratic:{label:"Quadratic:",color:"#f59e0b",points:["Jumps by squares: 1, 4, 9...","Less primary clustering","May miss empty slots"]},linear:{label:"Linear:",color:"#3b82f6",points:["Steps by 1 each time","Primary clustering issue","Always finds empty slot"]},summary:"Quadratic probing reduces clustering but requires load factor < 0.5 and prime table size for guaranteed insertion."},Gy={title:"Clustering Problem",primary:{name:"Primary Clustering",description:"Long runs of occupied slots form clusters",cause:"Linear probing - same probe sequence for nearby hashes",solution:"Use quadratic or double hashing"},secondary:{name:"Secondary Clustering",description:"Keys with same hash follow same probe sequence",cause:"Probe sequence depends only on initial hash",solution:"Use double hashing"}},Qy={title:"Load Factor Warning",description:"Quadratic probing may fail to find empty slots if load factor > 0.5",threshold:.5,warningMessage:"Warning: Load factor ({loadFactor}) > 0.5 - insertions may fail!",safeMessage:"Load factor: {loadFactor}"},Xy={title:"Time Complexity",operations:[{name:"Insert",average:"O(1)",worst:"O(n)",description:"Add key-value"},{name:"Search",average:"O(1)",worst:"O(n)",description:"Find by key"},{name:"Delete",average:"O(1)",worst:"O(n)",description:"Remove by key"},{name:"Rehash",average:"O(n)",worst:"O(n)",description:"Resize table"}],note:"Requires prime table size and load factor < 0.5 for guaranteed O(1)"},Yy={insert:{label:"Insert Key-Value",keyPlaceholder:"Key",valuePlaceholder:"Value",buttonText:"Insert"},delete:{label:"Delete Key",placeholder:"Key",buttonText:"Delete"},search:{label:"Search Key",placeholder:"Key",buttonText:"Search"},clear:{buttonText:"Clear"},rehash:{buttonText:"Rehash"}},Jy={items:"Items",capacity:"Capacity",load:"Load",collisions:"Collisions"},Zy={emptyTable:"Hash table is empty. Insert some key-value pairs!",insertSuccess:'Inserted "{key}" at slot {index}',insertUpdated:'Updated "{key}" at slot {index}',insertCollision:"Collision! Quadratic probed to slot {index} (i={probeCount})",deleteSuccess:'Deleted "{key}"',searchFound:'Found: "{key}" = {value}',searchNotFound:'Key "{key}" not found',clearSuccess:"Hash table cleared!",rehashSuccess:"Rehashed! Capacity: {oldCapacity} → {newCapacity}",rehashEmpty:"Nothing to rehash - table is empty!",tableFull:"Cannot insert - no empty slot found after full probe cycle!",errorNoKey:"Please enter a key!",errorNoKeyValue:"Please enter both key and value!",errorInsert:"Error inserting. Is Flask running?",errorDelete:"Error deleting. Is Flask running?",errorSearch:"Error searching item",errorClear:"Error clearing hash table",errorRehash:"Error rehashing. Is Flask running?"},e1=[{type:"color",className:"key-color",label:"Key"},{type:"color",className:"index-color",label:"Index"},{type:"color",className:"value-color",label:"Value"},{type:"color",className:"probe-color",label:"Quadratic Probe"}],n1={concept:Uy,properties:Ky,comparison:Wy,clustering:Gy,loadFactor:Qy,complexity:Xy,operations:Yy,infoLabels:Jy,messages:Zy,legend:e1},t1={title:"What is a Binary Search Tree?",description:"A Binary Search Tree (BST) is a binary tree where each node follows the ordering property: all left descendants < node < all right descendants.",codeExample:`       [50]
      /    \\
   [30]    [70]
   /  \\    /  \\
 [20][40][60][80]

Left < Parent < Right`,analogy:"Like a dictionary - words are sorted alphabetically, so you can quickly find any word by comparing!"},r1={title:"BST Properties",items:[{label:"Ordering",value:"Left < Parent < Right"},{label:"Search",value:"O(log n) average"},{label:"Inorder",value:"Gives sorted sequence"},{label:"No Duplicates",value:"Typically unique keys"}]},s1={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},delete:{label:"Delete Value",placeholder:"Value",buttonText:"Delete"},search:{label:"Search Value",placeholder:"Value",buttonText:"Search"},traversals:{inorder:"Inorder (Sorted)",preorder:"Preorder",postorder:"Postorder",levelorder:"Level Order"},clear:{buttonText:"Clear"}},i1={title:"BST Delete Cases",items:[{name:"Leaf Node",description:"Simply remove (no children)"},{name:"One Child",description:"Replace with child"},{name:"Two Children",description:"Replace with inorder successor (smallest in right subtree)"}]},a1={title:"Tree Traversals",items:[{name:"Inorder",order:"Left -> Root -> Right",use:"Returns SORTED order in BST"},{name:"Preorder",order:"Root -> Left -> Right",use:"Copy/serialize tree"},{name:"Postorder",order:"Left -> Right -> Root",use:"Delete tree safely"},{name:"Level Order",order:"Level by level (BFS)",use:"Print by levels"}]},l1={title:"Time Complexity",operations:[{name:"Search",average:"O(log n)",worst:"O(n)",description:"Binary search principle"},{name:"Insert",average:"O(log n)",worst:"O(n)",description:"Find position + insert"},{name:"Delete",average:"O(log n)",worst:"O(n)",description:"Find + restructure"},{name:"Min/Max",average:"O(log n)",worst:"O(n)",description:"Leftmost/rightmost"}],note:"Worst case O(n) when tree is unbalanced (degenerates to linked list). Use AVL/Red-Black trees for guaranteed O(log n)."},o1={title:"Common Use Cases",items:["Database indexing (B-trees)","Symbol tables in compilers","Priority queues","Auto-complete suggestions","Range queries (find all values between X and Y)"]},c1={title:"BST vs Other Structures",items:[{vs:"Array",advantage:"O(log n) insert/delete vs O(n)"},{vs:"Hash Table",advantage:"Ordered data, range queries"},{vs:"Linked List",advantage:"O(log n) search vs O(n)"}]},d1={size:"Nodes",height:"Height",root:"Root"},u1={emptyTree:"BST is empty. Insert some values!",insertSuccess:"Inserted {value}",deleteSuccess:"Deleted {value}",deleteNotFound:"Value {value} not found",searchFound:"Found {value}",searchNotFound:"Value {value} not found",clearSuccess:"BST cleared!",traversalResult:"{type}: {result}",errorNoValue:"Please enter a value!",errorInsert:"Error inserting value",errorDelete:"Error deleting value",errorSearch:"Error searching value",errorClear:"Error clearing BST"},h1=[{type:"color",className:"root-color",label:"Root"},{type:"color",className:"node-color",label:"Node"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Found"}],p1={concept:t1,properties:r1,operations:s1,deleteCases:i1,traversals:a1,complexity:l1,useCases:o1,comparison:c1,infoLabels:d1,messages:u1,legend:h1},f1={title:"What is an AVL Tree?",description:"An AVL Tree is a self-balancing Binary Search Tree where the height difference between left and right subtrees (balance factor) is at most 1 for every node.",codeExample:`       [50]  BF=0
      /    \\
   [30]    [70]  
  BF=0     BF=0
   /  \\      \\
 [20][40]   [80]

Balance Factor = Height(Left) - Height(Right)
BF must be -1, 0, or 1`,analogy:"Like a well-organized library that automatically reorganizes shelves whenever books are added or removed to ensure quick access!"},m1={title:"AVL Properties",items:[{label:"Balance Factor",value:"-1, 0, or 1 for all nodes"},{label:"Height",value:"O(log n) guaranteed"},{label:"Self-Balancing",value:"Rotations on insert/delete"},{label:"BST Property",value:"Left < Parent < Right"}]},g1={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},delete:{label:"Delete Value",placeholder:"Value",buttonText:"Delete"},search:{label:"Search Value",placeholder:"Value",buttonText:"Search"},traversals:{inorder:"Inorder (Sorted)",preorder:"Preorder",postorder:"Postorder",levelorder:"Level Order"},clear:{buttonText:"Clear"}},x1={title:"AVL Rotations",items:[{name:"Left-Left (LL)",description:"Right rotation",when:"BF > 1, Left child BF >= 0"},{name:"Right-Right (RR)",description:"Left rotation",when:"BF < -1, Right child BF <= 0"},{name:"Left-Right (LR)",description:"Left then Right rotation",when:"BF > 1, Left child BF < 0"},{name:"Right-Left (RL)",description:"Right then Left rotation",when:"BF < -1, Right child BF > 0"}]},v1={title:"Tree Traversals",items:[{name:"Inorder",order:"Left -> Root -> Right",use:"Returns SORTED order"},{name:"Preorder",order:"Root -> Left -> Right",use:"Copy/serialize tree"},{name:"Postorder",order:"Left -> Right -> Root",use:"Delete tree safely"},{name:"Level Order",order:"Level by level (BFS)",use:"Print by levels"}]},y1={title:"Time Complexity",operations:[{name:"Search",average:"O(log n)",worst:"O(log n)",description:"Height always balanced"},{name:"Insert",average:"O(log n)",worst:"O(log n)",description:"Insert + rebalance"},{name:"Delete",average:"O(log n)",worst:"O(log n)",description:"Delete + rebalance"},{name:"Rotation",average:"O(1)",worst:"O(1)",description:"Constant time fix"}],note:"Unlike regular BST, AVL guarantees O(log n) even in worst case because the tree is always balanced!"},j1={title:"Common Use Cases",items:["Database indexing with frequent lookups","In-memory databases","Dictionary implementations","When guaranteed O(log n) is critical","Real-time systems needing predictable performance"]},N1={title:"AVL vs Other Trees",items:[{vs:"BST",advantage:"Guaranteed O(log n) vs O(n) worst case"},{vs:"Red-Black",advantage:"More rigidly balanced (faster lookup)"},{vs:"B-Tree",advantage:"Better for in-memory operations"}]},k1={size:"Nodes",height:"Height",root:"Root"},w1={emptyTree:"AVL Tree is empty. Insert some values!",insertSuccess:"Inserted {value} (tree rebalanced)",deleteSuccess:"Deleted {value} (tree rebalanced)",deleteNotFound:"Value {value} not found",searchFound:"Found {value}",searchNotFound:"Value {value} not found",clearSuccess:"AVL Tree cleared!",traversalResult:"{type}: {result}",errorNoValue:"Please enter a value!",errorInsert:"Error inserting value",errorDelete:"Error deleting value",errorSearch:"Error searching value",errorClear:"Error clearing AVL Tree"},b1=[{type:"color",className:"root-color",label:"Root"},{type:"color",className:"balanced-color",label:"Balanced (|BF| <= 1)"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Found"}],S1={concept:f1,properties:m1,operations:g1,rotations:x1,traversals:v1,complexity:y1,useCases:j1,comparison:N1,infoLabels:k1,messages:w1,legend:b1},C1={title:"What is a Splay Tree?",description:"A Splay Tree is a self-adjusting Binary Search Tree that moves frequently accessed elements closer to the root through rotations (splaying), providing amortized O(log n) performance.",codeExample:`After searching for 20:

Before:        After Splay:
   [50]           [20]
   /                  \\
 [30]                [50]
 /                   /
[20]  <-- found   [30]

Accessed node moves to root!`,analogy:"Like keeping frequently used items at the front of your desk - recently used elements stay easily accessible!"},T1={title:"Splay Tree Properties",items:[{label:"Self-Adjusting",value:"Accessed nodes move to root"},{label:"No Balance Info",value:"No height/color stored"},{label:"Amortized O(log n)",value:"Good average performance"},{label:"Cache Friendly",value:"Hot nodes stay near root"}]},_1={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},delete:{label:"Delete Value",placeholder:"Value",buttonText:"Delete"},search:{label:"Search Value",placeholder:"Value",buttonText:"Search"},traversals:{inorder:"Inorder (Sorted)",preorder:"Preorder",postorder:"Postorder",levelorder:"Level Order"},clear:{buttonText:"Clear"}},L1={title:"Splay Operations",items:[{name:"Zig",description:"Single rotation when parent is root",when:"Parent is root"},{name:"Zig-Zig",description:"Both node and parent are left (or both right) children",when:"Same side grandchild"},{name:"Zig-Zag",description:"Node is left child, parent is right (or vice versa)",when:"Opposite side grandchild"}]},E1={title:"Tree Traversals",items:[{name:"Inorder",order:"Left -> Root -> Right",use:"Returns SORTED order"},{name:"Preorder",order:"Root -> Left -> Right",use:"Copy/serialize tree"},{name:"Postorder",order:"Left -> Right -> Root",use:"Delete tree safely"},{name:"Level Order",order:"Level by level (BFS)",use:"Print by levels"}]},O1={title:"Time Complexity",operations:[{name:"Search",average:"O(log n)*",worst:"O(n)",description:"Amortized logarithmic"},{name:"Insert",average:"O(log n)*",worst:"O(n)",description:"Amortized logarithmic"},{name:"Delete",average:"O(log n)*",worst:"O(n)",description:"Amortized logarithmic"},{name:"Splay",average:"O(log n)*",worst:"O(n)",description:"Brings node to root"}],note:"* Amortized - while single operations can be O(n), any sequence of m operations takes O(m log n) total time."},R1={title:"Common Use Cases",items:["Cache implementations (LRU-like behavior)","Garbage collectors","Network routers (IP lookup)","Situations with temporal locality","When same elements accessed repeatedly"]},P1={title:"Splay Tree vs Other Trees",items:[{vs:"AVL",advantage:"Simpler (no balance info), better for skewed access"},{vs:"Red-Black",advantage:"Self-optimizing for access patterns"},{vs:"BST",advantage:"Better amortized performance"}]},I1={size:"Nodes",height:"Height",root:"Root"},M1={emptyTree:"Splay Tree is empty. Insert some values!",insertSuccess:"Inserted {value} (now at root)",deleteSuccess:"Deleted {value}",deleteNotFound:"Value {value} not found",searchFound:"Found {value} (splayed to root)",searchNotFound:"Value {value} not found",clearSuccess:"Splay Tree cleared!",traversalResult:"{type}: {result}",errorNoValue:"Please enter a value!",errorInsert:"Error inserting value",errorDelete:"Error deleting value",errorSearch:"Error searching value",errorClear:"Error clearing Splay Tree"},z1=[{type:"color",className:"root-color",label:"Root (Most Recent)"},{type:"color",className:"node-color",label:"Node"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Found"}],F1={concept:C1,properties:T1,operations:_1,splayOperations:L1,traversals:E1,complexity:O1,useCases:R1,comparison:P1,infoLabels:I1,messages:M1,legend:z1},A1={title:"What is a Min Heap?",description:"A Min Heap is a complete binary tree where each parent node is smaller than or equal to its children. The minimum element is always at the root, making it perfect for priority queues.",codeExample:`       [1]  <- Min at root
      /    \\
    [3]    [2]
   /  \\    /
 [7]  [6][4]

Array: [1, 3, 2, 7, 6, 4]
Parent always <= Children`,analogy:"Like a tournament bracket where the winner (smallest) rises to the top - the champion is always at the root!"},V1={title:"Min Heap Properties",items:[{label:"Heap Property",value:"Parent <= Children"},{label:"Complete Tree",value:"Filled level by level"},{label:"Array Storage",value:"Parent(i)=(i-1)/2"},{label:"Min Access",value:"O(1) to get minimum"}]},D1={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},extract:{label:"Extract Min",buttonText:"Extract Min"},peek:{label:"Peek Min",buttonText:"Peek"},build:{label:"Build from Array",placeholder:"e.g., 5,3,8,1,2",buttonText:"Build Heap"},clear:{buttonText:"Clear"}},$1={title:"Heap Operations",items:[{name:"Insert",description:"Add at end, bubble up (heapify up)",complexity:"O(log n)"},{name:"Extract Min",description:"Remove root, replace with last, bubble down",complexity:"O(log n)"},{name:"Peek",description:"Return root without removing",complexity:"O(1)"},{name:"Build Heap",description:"Heapify from array (bottom-up)",complexity:"O(n)"}]},B1={title:"Array Representation",items:[{formula:"Parent(i)",value:"(i - 1) / 2"},{formula:"Left Child(i)",value:"2*i + 1"},{formula:"Right Child(i)",value:"2*i + 2"}]},q1={title:"Time Complexity",operations:[{name:"Insert",average:"O(log n)",worst:"O(log n)",description:"Bubble up to root"},{name:"Extract Min",average:"O(log n)",worst:"O(log n)",description:"Bubble down"},{name:"Peek/Get Min",average:"O(1)",worst:"O(1)",description:"Always at root"},{name:"Build Heap",average:"O(n)",worst:"O(n)",description:"Bottom-up heapify"}],note:"Space complexity is O(n). Complete tree structure ensures height is always O(log n)."},H1={title:"Common Use Cases",items:["Priority Queues (process by priority)","Dijkstra's shortest path algorithm","Prim's minimum spanning tree","Huffman coding (compression)","Event-driven simulation","K smallest/largest elements"]},U1={title:"Min Heap vs Other Structures",items:[{vs:"Sorted Array",advantage:"O(log n) insert vs O(n)"},{vs:"BST",advantage:"O(1) get min vs O(log n)"},{vs:"Max Heap",advantage:"Fast min access vs fast max"}]},K1={size:"Size",height:"Height",min:"Min"},W1={emptyHeap:"Min Heap is empty. Insert some values!",insertSuccess:"Inserted {value}",extractSuccess:"Extracted minimum: {value}",peekSuccess:"Minimum element is {value}",buildSuccess:"Built heap from array",clearSuccess:"Heap cleared!",errorNoValue:"Please enter a value!",errorEmpty:"Heap is empty!",errorFull:"Heap is full!",errorInsert:"Error inserting value",errorExtract:"Error extracting minimum"},G1=[{type:"color",className:"root-color",label:"Root (Min)"},{type:"color",className:"node-color",label:"Internal Node"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Swapping"}],Q1={concept:A1,properties:V1,operations:D1,heapOperations:$1,arrayRepresentation:B1,complexity:q1,useCases:H1,comparison:U1,infoLabels:K1,messages:W1,legend:G1},X1={title:"What is a Max Heap?",description:"A Max Heap is a complete binary tree where each parent node is greater than or equal to its children. The maximum element is always at the root, ideal for priority queues where largest = highest priority.",codeExample:`       [9]  <- Max at root
      /    \\
    [7]    [8]
   /  \\    /
 [3]  [5][6]

Array: [9, 7, 8, 3, 5, 6]
Parent always >= Children`,analogy:"Like a corporate hierarchy - the CEO (maximum) is at the top, and each manager has authority over their subordinates!"},Y1={title:"Max Heap Properties",items:[{label:"Heap Property",value:"Parent >= Children"},{label:"Complete Tree",value:"Filled level by level"},{label:"Array Storage",value:"Parent(i)=(i-1)/2"},{label:"Max Access",value:"O(1) to get maximum"}]},J1={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},extract:{label:"Extract Max",buttonText:"Extract Max"},peek:{label:"Peek Max",buttonText:"Peek"},build:{label:"Build from Array",placeholder:"e.g., 5,3,8,1,2",buttonText:"Build Heap"},clear:{buttonText:"Clear"}},Z1={title:"Heap Operations",items:[{name:"Insert",description:"Add at end, bubble up (heapify up)",complexity:"O(log n)"},{name:"Extract Max",description:"Remove root, replace with last, bubble down",complexity:"O(log n)"},{name:"Peek",description:"Return root without removing",complexity:"O(1)"},{name:"Build Heap",description:"Heapify from array (bottom-up)",complexity:"O(n)"}]},ej={title:"Array Representation",items:[{formula:"Parent(i)",value:"(i - 1) / 2"},{formula:"Left Child(i)",value:"2*i + 1"},{formula:"Right Child(i)",value:"2*i + 2"}]},nj={title:"Time Complexity",operations:[{name:"Insert",average:"O(log n)",worst:"O(log n)",description:"Bubble up to root"},{name:"Extract Max",average:"O(log n)",worst:"O(log n)",description:"Bubble down"},{name:"Peek/Get Max",average:"O(1)",worst:"O(1)",description:"Always at root"},{name:"Build Heap",average:"O(n)",worst:"O(n)",description:"Bottom-up heapify"}],note:"Space complexity is O(n). Complete tree structure ensures height is always O(log n)."},tj={title:"Common Use Cases",items:["Priority Queues (largest = highest priority)","Heap Sort algorithm","Job scheduling (highest priority first)","Finding K largest elements","Median maintenance (with min heap)","Stock trading (highest bid)"]},rj={title:"Max Heap vs Other Structures",items:[{vs:"Sorted Array",advantage:"O(log n) insert vs O(n)"},{vs:"BST",advantage:"O(1) get max vs O(log n)"},{vs:"Min Heap",advantage:"Fast max access vs fast min"}]},sj={size:"Size",height:"Height",max:"Max"},ij={emptyHeap:"Max Heap is empty. Insert some values!",insertSuccess:"Inserted {value}",extractSuccess:"Extracted maximum: {value}",peekSuccess:"Maximum element is {value}",buildSuccess:"Built heap from array",clearSuccess:"Heap cleared!",errorNoValue:"Please enter a value!",errorEmpty:"Heap is empty!",errorFull:"Heap is full!",errorInsert:"Error inserting value",errorExtract:"Error extracting maximum"},aj=[{type:"color",className:"root-color",label:"Root (Max)"},{type:"color",className:"node-color",label:"Internal Node"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Swapping"}],lj={concept:X1,properties:Y1,operations:J1,heapOperations:Z1,arrayRepresentation:ej,complexity:nj,useCases:tj,comparison:rj,infoLabels:sj,messages:ij,legend:aj},oj={title:"What is a Treap?",description:"A Treap is a combination of a Binary Search Tree (BST) and a Heap. Each node has a key (follows BST ordering: left < parent < right) and a random priority (follows max-heap ordering: parent priority >= child priority). Rotations maintain the heap property after insertions.",codeExample:`       [50, p:95]
      /          \\
  [30, p:80]   [70, p:60]
   /     \\         \\
[20,p:40][40,p:55] [80,p:30]

BST on keys | Max-Heap on priorities`,analogy:"Like a tournament bracket where seeded players (priorities) determine placement, but match order follows alphabetical (BST) rules!"},cj={title:"Treap Properties",items:[{label:"Keys",value:"BST order (Left < Parent < Right)"},{label:"Priorities",value:"Max-heap order (Parent >= Children)"},{label:"Balance",value:"Expected O(log n) height"},{label:"Randomized",value:"Priorities assigned randomly"}]},dj={title:"Time Complexity",operations:[{name:"Search",average:"O(log n)",worst:"O(n)",description:"BST search on keys"},{name:"Insert",average:"O(log n)",worst:"O(n)",description:"BST insert + rotate up"},{name:"Delete",average:"O(log n)",worst:"O(n)",description:"Rotate down + remove leaf"},{name:"Split/Merge",average:"O(log n)",worst:"O(n)",description:"Divide/combine treaps"}],note:"Random priorities give O(log n) expected height, making worst-case O(n) extremely unlikely."},uj={title:"Common Use Cases",items:["Implicit key treaps for sequence operations","Efficient split and merge operations","Randomized balanced BST without complex rebalancing","Competitive programming (flexible tree operations)","Persistent data structures"]},hj={title:"Treap vs Other Trees",items:[{vs:"BST",advantage:"Expected O(log n) balance via random priorities"},{vs:"AVL Tree",advantage:"Simpler implementation, supports split/merge"},{vs:"Red-Black Tree",advantage:"Easier to code, natural split/merge"},{vs:"Skip List",advantage:"Tree structure, supports order statistics"}]},pj={concept:oj,properties:cj,complexity:dj,useCases:uj,comparison:hj},fj={stack:ny,queue:uy,linkedlist:Ny,binarytree:Ry,hashtable:Hy,hashtableChaining:Y,hashtableQuadratic:n1,bst:p1,avl:S1,splay:F1,minheap:Q1,maxheap:lj,treap:pj};function ur({dataStructure:e}){const t=fj[e];return t?n.jsxs("div",{className:"concepts-panel",children:[t.concept&&n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Te,{className:"icon-sm"}),n.jsx("span",{children:t.concept.title})]}),n.jsxs("div",{className:"concept-content",children:[n.jsx("p",{children:t.concept.description}),t.concept.codeExample&&n.jsx("pre",{className:"concept-code-example",children:n.jsx("code",{children:t.concept.codeExample})}),t.concept.analogy&&n.jsxs("div",{className:"concept-analogy",children:[n.jsx(ve,{}),n.jsx("span",{children:t.concept.analogy})]})]})]}),t.properties&&n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(qn,{className:"icon-sm"}),n.jsx("span",{children:t.properties.title})]}),n.jsx("div",{className:"concept-content",children:n.jsx("div",{className:"properties-grid",children:t.properties.items.map((r,s)=>n.jsxs("div",{className:"property-item",children:[n.jsx("span",{className:"property-label",children:r.label}),n.jsx("span",{className:"property-value",children:r.value})]},s))})})]}),t.complexity&&n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(jh,{className:"icon-sm"}),n.jsx("span",{children:t.complexity.title})]}),n.jsxs("div",{className:"concept-content",children:[n.jsx("div",{className:"complexity-table",children:t.complexity.operations.map((r,s)=>n.jsxs("div",{className:"complexity-row",children:[n.jsx("span",{className:"complexity-name",children:r.name}),r.time&&n.jsx("code",{className:"complexity-time",children:r.time}),r.average&&n.jsxs(n.Fragment,{children:[n.jsx("code",{className:"complexity-avg",children:r.average}),r.worst&&n.jsx("code",{className:"complexity-worst",children:r.worst})]}),r.description&&n.jsx("span",{className:"complexity-desc",children:r.description})]},s))}),t.complexity.note&&n.jsx("p",{className:"complexity-note",children:t.complexity.note})]})]}),t.useCases&&n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Th,{className:"icon-sm"}),n.jsx("span",{children:t.useCases.title})]}),n.jsx("div",{className:"concept-content",children:n.jsx("ul",{className:"use-cases-list",children:t.useCases.items.map((r,s)=>n.jsxs("li",{children:[n.jsx(Mn,{className:"icon-xs"}),n.jsx("span",{children:r})]},s))})})]}),t.traversals&&n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(qn,{className:"icon-sm"}),n.jsx("span",{children:t.traversals.title})]}),n.jsx("div",{className:"concept-content",children:n.jsx("div",{className:"traversals-list",children:t.traversals.items.map((r,s)=>n.jsxs("div",{className:"traversal-item",children:[n.jsx("span",{className:"traversal-name",children:r.name}),n.jsx("span",{className:"traversal-order",children:r.order}),n.jsx("span",{className:"traversal-use",children:r.use})]},s))})})]}),t.deleteCases&&n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(qn,{className:"icon-sm"}),n.jsx("span",{children:t.deleteCases.title})]}),n.jsx("div",{className:"concept-content",children:n.jsx("div",{className:"delete-cases-grid",children:t.deleteCases.items.map((r,s)=>n.jsxs("div",{className:"delete-case-item",children:[n.jsx("span",{className:"case-number",children:s+1}),n.jsxs("div",{children:[n.jsx("strong",{children:r.name}),n.jsx("p",{children:r.description})]})]},s))})})]}),t.comparison&&n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(qn,{className:"icon-sm"}),n.jsx("span",{children:t.comparison.title})]}),n.jsx("div",{className:"concept-content",children:n.jsx("div",{className:"comparison-list",children:t.comparison.items.map((r,s)=>n.jsxs("div",{className:"comparison-item",children:[n.jsxs("span",{className:"comparison-vs",children:["vs ",r.vs]}),n.jsx("span",{className:"comparison-advantage",children:r.advantage})]},s))})})]})]}):n.jsx("div",{className:"concepts-panel",children:n.jsx("p",{children:"Concepts not available for this data structure."})})}const Bt=7,mj={inorder:{name:"Inorder Traversal",order:"Left -> Root -> Right",description:"Returns elements in SORTED order for BST. This is the key property of BST!",useCase:["Get sorted elements","Validate BST","Range queries"],complexity:{time:"O(n)",space:"O(h)"}},preorder:{name:"Preorder Traversal",order:"Root -> Left -> Right",description:"Process root first. Useful for copying/serializing the BST structure.",useCase:["Copy tree structure","Serialize BST","Prefix expressions"],complexity:{time:"O(n)",space:"O(h)"}},postorder:{name:"Postorder Traversal",order:"Left -> Right -> Root",description:"Process children before root. Essential for safely deleting the tree.",useCase:["Delete tree safely","Calculate subtree sizes","Postfix expressions"],complexity:{time:"O(n)",space:"O(h)"}},levelorder:{name:"Level Order Traversal",order:"Level by Level (BFS)",description:"Visit nodes level by level using a queue. Shows tree structure clearly.",useCase:["Level-wise printing","Find width","Serialize for reconstruction"],complexity:{time:"O(n)",space:"O(w)"}}},gl=(e,t=0)=>e?Math.max(gl(e.left,t+1),gl(e.right,t+1)):t-1,gj=(e,t)=>{const r=[];let s=e;for(;s&&(r.push(s.value),s.value!==t);)t<s.value?s=s.left:s=s.right;return r};function xj({insertValue:e,deleteValue:t,searchValue:r,size:s,height:i,message:a,tree:l,isAnimating:o,visitedNodes:c,searchPath:h,searchResult:d,onInsertValueChange:p,onDeleteValueChange:m,onSearchValueChange:b,onInsert:w,onDelete:k,onSearch:j,onTraversal:f,onClear:g,onResetTraversal:x}){const E=(y,F)=>{const T=y.target.value;(T===""||T==="-"||/^-?\d*\.?\d*$/.test(T))&&F(T)};return n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Binary Search Tree"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"insertValue",value:e,onChange:y=>E(y,p),onKeyDown:y=>y.key==="Enter"&&w(),placeholder:"Enter a number",disabled:o}),n.jsx("button",{onClick:w,className:"btn btn-insert",disabled:o,children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"searchValue",children:"Search Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"searchValue",value:r,onChange:y=>E(y,b),onKeyDown:y=>y.key==="Enter"&&j(),placeholder:"Enter a number",disabled:o}),n.jsxs("button",{onClick:j,className:"btn btn-search",disabled:o||!l,children:[n.jsx(dr,{size:16})," Search"]})]}),h.length>0&&n.jsxs("div",{className:"search-path-display",children:[n.jsx("span",{className:"search-path-label",children:"Path:"}),n.jsx("div",{className:"search-path-nodes",children:h.map((y,F)=>n.jsxs(Ve.Fragment,{children:[n.jsx("span",{className:`search-path-node ${F===h.length-1?d?"found":"not-found":""}`,children:y}),F<h.length-1&&n.jsx(de,{size:14,className:"search-path-arrow"})]},F))})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"deleteValue",children:"Delete Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"deleteValue",value:t,onChange:y=>E(y,m),onKeyDown:y=>y.key==="Enter"&&k(),placeholder:"Enter a number",disabled:o}),n.jsx("button",{onClick:k,className:"btn btn-delete",disabled:o,children:"Delete"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Traversals"}),n.jsx("div",{className:"btn-group",children:["inorder","preorder","postorder","levelorder"].map(y=>n.jsxs("button",{onClick:()=>f(y),className:`btn btn-traversal ${y==="inorder"?"btn-traversal-primary":""}`,disabled:o||!l,title:y==="inorder"?"Returns sorted order!":"",children:[y==="levelorder"?"Level Order":y.charAt(0).toUpperCase()+y.slice(1),y==="inorder"&&n.jsx("span",{className:"sorted-badge",children:"Sorted!"})]},y))}),c.length>0&&!o&&n.jsx("button",{onClick:x,className:"btn btn-secondary",style:{marginTop:"0.5rem",width:"100%"},children:"Reset Colors"})]}),n.jsxs("div",{className:"traversal-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--default"}),n.jsx("span",{children:"Not visited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visiting"}),n.jsx("span",{children:"Current"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visited"}),n.jsx("span",{children:"Visited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--search"}),n.jsx("span",{children:"Search path"})]})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Nodes:"}),n.jsx("span",{className:"info-value",children:s})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Height:"}),n.jsx("span",{className:"info-value",children:i})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Max:"}),n.jsx("span",{className:"info-value",children:Bt})]})]}),s>=Bt*.8&&s<Bt&&n.jsxs("div",{className:"warning-box",children:[n.jsx(Nn,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Tree filling up!"})," ",s,"/",Bt," nodes."]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:g,className:"btn btn-clear",disabled:o,children:"Clear Tree"})}),a&&n.jsx("div",{className:`message message-${a.includes("Error")||a.includes("error")||a.includes("not found")?"error":/success|complete|Inserted|Deleted|cleared|Found/i.test(a)?"success":a.includes("full")?"warning":"info"}`,children:a})]})}function vj({tree:e,currentNode:t,visitedNodes:r,searchPath:s,searchResult:i}){const a=d=>{const p=t===d,m=r.includes(d),b=s.includes(d),w=s.length>0&&s[s.length-1]===d;let k="#6366f1",j="none";return p?(k="#f59e0b",j="drop-shadow(0 0 12px #f59e0b) drop-shadow(0 0 20px #f59e0b)"):w?(k=i?"#10b981":"#ef4444",j=i?"drop-shadow(0 0 12px #10b981)":"drop-shadow(0 0 12px #ef4444)"):b?(k="#3b82f6",j="drop-shadow(0 0 8px #3b82f6)"):m&&(k="#10b981",j="drop-shadow(0 0 6px #10b981)"),{color:k,glow:j,radius:p||w?30:25,stroke:p||w?3:2,fontSize:p||w?16:14,fontWeight:p||w?"bold":"normal"}},l=(d,p,m,b,w)=>{if(!d)return[];const k=Math.pow(2,w-b)*50,j=a(d.value),f=[];if(d.left){const g=s.includes(d.value)&&s.includes(d.left.value);f.push(n.jsx("line",{x1:p,y1:m,x2:p-k,y2:m+100,stroke:g?"#3b82f6":"rgba(255,255,255,0.3)",strokeWidth:g?3:2},`l-${d.value}-l`)),f.push(...l(d.left,p-k,m+100,b+1,w))}if(d.right){const g=s.includes(d.value)&&s.includes(d.right.value);f.push(n.jsx("line",{x1:p,y1:m,x2:p+k,y2:m+100,stroke:g?"#3b82f6":"rgba(255,255,255,0.3)",strokeWidth:g?3:2},`l-${d.value}-r`)),f.push(...l(d.right,p+k,m+100,b+1,w))}return f.push(n.jsxs("g",{style:{filter:j.glow,transition:"all 0.3s ease"},children:[n.jsx("circle",{cx:p,cy:m,r:j.radius,fill:j.color,stroke:"white",strokeWidth:j.stroke,style:{transition:"all 0.3s ease"}}),n.jsx("text",{x:p,y:m,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:j.fontSize,fontWeight:j.fontWeight,children:d.value})]},`n-${d.value}-${p}`)),f};if(!e)return n.jsxs("div",{className:"tree-empty",children:[n.jsx("p",{children:"BST is empty. Insert some values!"}),n.jsx("p",{className:"tree-empty-hint",children:"Try: 50, 30, 70, 20, 40, 60, 80"})]});const o=gl(e),c=(o+1)*100+50,h=Math.max(800,Math.pow(2,Math.max(o,1))*80);return n.jsx("svg",{width:h,height:c,className:"tree-svg",children:l(e,h/2,50,0,o)})}function yj({traversalType:e,traversalResult:t,isAnimating:r,traversalComplete:s}){if(!e||t.length===0&&!r)return null;const i=mj[e];return n.jsxs("div",{className:"traversal-output-panel",children:[n.jsxs("div",{style:{marginBottom:"1rem"},children:[n.jsxs("h3",{className:"traversal-title",children:[i==null?void 0:i.name,e==="inorder"&&n.jsx("span",{className:"sorted-indicator",children:"Returns Sorted Order!"}),r&&n.jsx("span",{className:"traversal-badge traversal-badge--running",children:"Running..."}),s&&n.jsx("span",{className:"traversal-badge traversal-badge--complete",children:"Complete"})]}),n.jsxs("p",{className:"traversal-order",children:[n.jsx("strong",{children:"Order:"})," ",i==null?void 0:i.order]}),n.jsx("p",{className:"traversal-description",children:i==null?void 0:i.description})]}),n.jsxs("div",{className:"traversal-output-box",children:[n.jsx("div",{className:"traversal-output-label",children:"Output Sequence:"}),n.jsx("div",{className:"traversal-sequence-container",children:t.length===0&&r?n.jsx("span",{style:{color:"var(--text-muted)",fontStyle:"italic"},children:"Traversing..."}):t.map((a,l)=>n.jsx("span",{className:`traversal-node ${l===t.length-1&&!s?"traversal-node--current":"traversal-node--complete"}`,children:a},l))})]}),s&&t.length>0&&n.jsxs("div",{className:"traversal-array-section",children:[n.jsx("div",{className:"traversal-array-label",children:"Array Output:"}),n.jsxs("code",{className:"traversal-array-output",children:["[",t.join(", "),"]"]}),e==="inorder"&&n.jsx("p",{className:"traversal-sorted-note",children:"Notice: The output is sorted! This is the BST property."}),n.jsxs("p",{className:"traversal-use-case",children:["Use case: ",i==null?void 0:i.useCase.join(" | ")]}),n.jsxs("div",{className:"traversal-complexity",children:[n.jsx("strong",{children:"Time:"})," ",n.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.time}),n.jsx("br",{}),n.jsx("strong",{children:"Space:"})," ",n.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.space})]})]})]})}function jj(){const[e,t]=u.useState(null),[r,s]=u.useState(0),[i,a]=u.useState(-1),[l,o]=u.useState(""),[c,h]=u.useState(""),[d,p]=u.useState(""),[m,b]=u.useState(""),[w,k]=u.useState([]),[j,f]=u.useState(null),[g,x]=u.useState([]),[E,y]=u.useState(!1),[F,T]=u.useState(null),[D,A]=u.useState([]),[I,H]=u.useState(null),[K,B]=u.useState(!1);u.useEffect(()=>{$()},[]);const $=async()=>{try{const P=await(await fetch("/api/bst")).json();t(P.tree),s(P.size||0),a(P.height!==void 0?P.height:-1)}catch(C){console.error("Error loading BST:",C)}},v=C=>{b(C),setTimeout(()=>b(""),3e3)},R=()=>{k([]),f(null)},q=async()=>{if(!l.trim()){v("Please enter a number!");return}const C=Number(l);if(isNaN(C)){v("Please enter a valid number!");return}if(r>=Bt){v(`Tree is full! Maximum size is ${Bt} nodes.`);return}R(),M();try{const _=await(await fetch("/api/bst/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:C})})).json();if(_.error){v(_.error);return}t(_.tree),s(_.size||0),a(_.height!==void 0?_.height:-1),v(`Inserted ${C}`),o("")}catch{v("Error inserting node")}},L=async()=>{if(!c.trim()){v("Please enter a number!");return}const C=Number(c);if(isNaN(C)){v("Please enter a valid number!");return}R(),M();try{const _=await(await fetch("/api/bst/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:C})})).json();if(_.error){v(_.error);return}t(_.tree),s(_.size||0),a(_.height!==void 0?_.height:-1),v(`Deleted ${C}`),h("")}catch{v("Error deleting node")}},O=async()=>{if(!d.trim()){v("Please enter a number!");return}const C=Number(d);if(isNaN(C)){v("Please enter a valid number!");return}if(!e){v("Tree is empty!");return}M(),y(!0);const P=gj(e,C);for(let _=0;_<P.length;_++)k(P.slice(0,_+1)),await new Promise(N=>setTimeout(N,500));try{const N=await(await fetch(`/api/bst/search?value=${C}`)).json();f(N.found),N.found?v(`Found ${C}!`):v(`${C} not found in BST`)}catch{v("Error searching")}y(!1),p("")},S=async()=>{try{await fetch("/api/bst/clear",{method:"POST"}),t(null),s(0),a(-1),M(),R(),v("BST cleared!")}catch{v("Error clearing tree")}},z=async C=>{if(!e){v("Tree is empty! Insert some nodes first.");return}R(),y(!0),x([]),T(null),A([]),H(C),B(!1);try{const N=(await(await fetch(`/api/bst/${C}`)).json()).traversal||[];if(N.length===0){v("Tree is empty!"),y(!1);return}for(let G=0;G<N.length;G++)T(N[G]),await new Promise(W=>setTimeout(W,600)),A(W=>[...W,N[G]]),x(W=>[...W,N[G]]),await new Promise(W=>setTimeout(W,200));T(null),B(!0),y(!1);const V=C.charAt(0).toUpperCase()+C.slice(1);v(`${V} traversal complete!${C==="inorder"?" (Sorted!)":""}`)}catch(P){console.error("Traversal error:",P),v("Error performing traversal"),y(!1)}},M=()=>{x([]),T(null),A([]),H(null),B(!1)};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsx("div",{className:"intro-left",children:n.jsx(ur,{dataStructure:"bst"})}),n.jsx(fe,{context:"Binary Search Tree (BST) data structure, search, insert, delete operations, and traversals"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsx(xj,{insertValue:l,deleteValue:c,searchValue:d,size:r,height:i,message:m,tree:e,isAnimating:E,visitedNodes:D,searchPath:w,searchResult:j,onInsertValueChange:o,onDeleteValueChange:h,onSearchValueChange:p,onInsert:q,onDelete:L,onSearch:O,onTraversal:z,onClear:S,onResetTraversal:()=>{M(),R()}}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"BST Visualization"}),n.jsxs("p",{className:"bst-property-reminder",children:["Remember: ",n.jsxs("code",{children:["Left ","<"," Parent ","<"," Right"]})]}),n.jsx("div",{className:"tree-container",children:n.jsx(vj,{tree:e,currentNode:F,visitedNodes:D,searchPath:w,searchResult:j})}),n.jsx(yj,{traversalType:I,traversalResult:g,isAnimating:E,traversalComplete:K})]})]}),n.jsx(me,{dataStructure:"bst"})]})}const qt=7,Nj={inorder:{name:"Inorder Traversal",order:"Left -> Root -> Right",description:"Returns elements in SORTED order.",useCase:["Get sorted elements","Validate BST property"],complexity:{time:"O(n)",space:"O(h)"}},preorder:{name:"Preorder Traversal",order:"Root -> Left -> Right",description:"Process root first. Useful for copying tree structure.",useCase:["Copy tree structure","Serialize AVL"],complexity:{time:"O(n)",space:"O(h)"}},postorder:{name:"Postorder Traversal",order:"Left -> Right -> Root",description:"Process children before root.",useCase:["Delete tree safely","Calculate subtree info"],complexity:{time:"O(n)",space:"O(h)"}},levelorder:{name:"Level Order Traversal",order:"Level by Level (BFS)",description:"Visit nodes level by level using a queue.",useCase:["Level-wise printing","Find width"],complexity:{time:"O(n)",space:"O(w)"}}},xl=(e,t=0)=>e?Math.max(xl(e.left,t+1),xl(e.right,t+1)):t-1,kj=(e,t)=>{const r=[];let s=e;for(;s&&(r.push(s.value),s.value!==t);)t<s.value?s=s.left:s=s.right;return r};function wj({insertValue:e,deleteValue:t,searchValue:r,size:s,height:i,message:a,tree:l,isAnimating:o,visitedNodes:c,searchPath:h,searchResult:d,onInsertValueChange:p,onDeleteValueChange:m,onSearchValueChange:b,onInsert:w,onDelete:k,onSearch:j,onTraversal:f,onClear:g,onResetTraversal:x}){const E=(y,F)=>{const T=y.target.value;(T===""||T==="-"||/^-?\d*\.?\d*$/.test(T))&&F(T)};return n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"AVL Tree"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"insertValue",value:e,onChange:y=>E(y,p),onKeyDown:y=>y.key==="Enter"&&w(),placeholder:"Enter a number",disabled:o}),n.jsx("button",{onClick:w,className:"btn btn-insert",disabled:o,children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"searchValue",children:"Search Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"searchValue",value:r,onChange:y=>E(y,b),onKeyDown:y=>y.key==="Enter"&&j(),placeholder:"Enter a number",disabled:o}),n.jsxs("button",{onClick:j,className:"btn btn-search",disabled:o||!l,children:[n.jsx(dr,{size:16})," Search"]})]}),h.length>0&&n.jsxs("div",{className:"search-path-display",children:[n.jsx("span",{className:"search-path-label",children:"Path:"}),n.jsx("div",{className:"search-path-nodes",children:h.map((y,F)=>n.jsxs(Ve.Fragment,{children:[n.jsx("span",{className:`search-path-node ${F===h.length-1?d?"found":"not-found":""}`,children:y}),F<h.length-1&&n.jsx(de,{size:14,className:"search-path-arrow"})]},F))})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"deleteValue",children:"Delete Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"deleteValue",value:t,onChange:y=>E(y,m),onKeyDown:y=>y.key==="Enter"&&k(),placeholder:"Enter a number",disabled:o}),n.jsx("button",{onClick:k,className:"btn btn-delete",disabled:o,children:"Delete"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Traversals"}),n.jsx("div",{className:"btn-group",children:["inorder","preorder","postorder","levelorder"].map(y=>n.jsx("button",{onClick:()=>f(y),className:"btn btn-traversal",disabled:o||!l,children:y==="levelorder"?"Level Order":y.charAt(0).toUpperCase()+y.slice(1)},y))}),c.length>0&&!o&&n.jsx("button",{onClick:x,className:"btn btn-secondary",style:{marginTop:"0.5rem",width:"100%"},children:"Reset Colors"})]}),n.jsxs("div",{className:"traversal-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--default"}),n.jsx("span",{children:"Not visited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visiting"}),n.jsx("span",{children:"Current"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visited"}),n.jsx("span",{children:"Visited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--search"}),n.jsx("span",{children:"Search path"})]})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Nodes:"}),n.jsx("span",{className:"info-value",children:s})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Height:"}),n.jsx("span",{className:"info-value",children:i})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Max:"}),n.jsx("span",{className:"info-value",children:qt})]})]}),s>=qt*.8&&s<qt&&n.jsxs("div",{className:"warning-box",children:[n.jsx(Nn,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Tree filling up!"})," ",s,"/",qt," nodes."]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:g,className:"btn btn-clear",disabled:o,children:"Clear Tree"})}),a&&n.jsx("div",{className:`message message-${a.includes("Error")||a.includes("error")||a.includes("not found")?"error":/success|complete|Inserted|Deleted|cleared|Found|rebalanced/i.test(a)?"success":a.includes("full")?"warning":"info"}`,children:a})]})}function bj({tree:e,currentNode:t,visitedNodes:r,searchPath:s,searchResult:i}){const a=d=>{const p=t===d,m=r.includes(d),b=s.includes(d),w=s.length>0&&s[s.length-1]===d;let k="#8b5cf6",j="none";return p?(k="#f59e0b",j="drop-shadow(0 0 12px #f59e0b) drop-shadow(0 0 20px #f59e0b)"):w?(k=i?"#10b981":"#ef4444",j=i?"drop-shadow(0 0 12px #10b981)":"drop-shadow(0 0 12px #ef4444)"):b?(k="#3b82f6",j="drop-shadow(0 0 8px #3b82f6)"):m&&(k="#10b981",j="drop-shadow(0 0 6px #10b981)"),{color:k,glow:j,radius:p||w?30:25,stroke:p||w?3:2,fontSize:p||w?16:14,fontWeight:p||w?"bold":"normal"}},l=(d,p,m,b,w)=>{if(!d)return[];const k=Math.pow(2,w-b)*50,j=a(d.value),f=[];if(d.left){const g=s.includes(d.value)&&s.includes(d.left.value);f.push(n.jsx("line",{x1:p,y1:m,x2:p-k,y2:m+100,stroke:g?"#3b82f6":"rgba(255,255,255,0.3)",strokeWidth:g?3:2},`l-${d.value}-l`)),f.push(...l(d.left,p-k,m+100,b+1,w))}if(d.right){const g=s.includes(d.value)&&s.includes(d.right.value);f.push(n.jsx("line",{x1:p,y1:m,x2:p+k,y2:m+100,stroke:g?"#3b82f6":"rgba(255,255,255,0.3)",strokeWidth:g?3:2},`l-${d.value}-r`)),f.push(...l(d.right,p+k,m+100,b+1,w))}return f.push(n.jsxs("g",{style:{filter:j.glow,transition:"all 0.3s ease"},children:[n.jsx("circle",{cx:p,cy:m,r:j.radius,fill:j.color,stroke:"white",strokeWidth:j.stroke,style:{transition:"all 0.3s ease"}}),n.jsx("text",{x:p,y:m,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:j.fontSize,fontWeight:j.fontWeight,children:d.value}),d.balance!==void 0&&n.jsxs("g",{children:[n.jsx("circle",{cx:p+20,cy:m-20,r:10,fill:Math.abs(d.balance)<=1?"#10b981":"#ef4444"}),n.jsx("text",{x:p+20,y:m-20,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:10,fontWeight:"bold",children:d.balance})]})]},`n-${d.value}-${p}`)),f};if(!e)return n.jsxs("div",{className:"tree-empty",children:[n.jsx("p",{children:"AVL Tree is empty. Insert some values!"}),n.jsx("p",{className:"tree-empty-hint",children:"Try: 30, 20, 40, 10 (watch it balance!)"})]});const o=xl(e),c=(o+1)*100+50,h=Math.max(800,Math.pow(2,Math.max(o,1))*80);return n.jsx("svg",{width:h,height:c,className:"tree-svg",children:l(e,h/2,50,0,o)})}function Sj({traversalType:e,traversalResult:t,isAnimating:r,traversalComplete:s}){if(!e||t.length===0&&!r)return null;const i=Nj[e];return n.jsxs("div",{className:"traversal-output-panel",children:[n.jsxs("div",{style:{marginBottom:"1rem"},children:[n.jsxs("h3",{className:"traversal-title",children:[i==null?void 0:i.name,r&&n.jsx("span",{className:"traversal-badge traversal-badge--running",children:"Running..."}),s&&n.jsx("span",{className:"traversal-badge traversal-badge--complete",children:"Complete"})]}),n.jsxs("p",{className:"traversal-order",children:[n.jsx("strong",{children:"Order:"})," ",i==null?void 0:i.order]}),n.jsx("p",{className:"traversal-description",children:i==null?void 0:i.description})]}),n.jsxs("div",{className:"traversal-output-box",children:[n.jsx("div",{className:"traversal-output-label",children:"Output Sequence:"}),n.jsx("div",{className:"traversal-sequence-container",children:t.length===0&&r?n.jsx("span",{style:{color:"var(--text-muted)",fontStyle:"italic"},children:"Traversing..."}):t.map((a,l)=>n.jsx("span",{className:`traversal-node ${l===t.length-1&&!s?"traversal-node--current":"traversal-node--complete"}`,children:a},l))})]}),s&&t.length>0&&n.jsxs("div",{className:"traversal-array-section",children:[n.jsx("div",{className:"traversal-array-label",children:"Array Output:"}),n.jsxs("code",{className:"traversal-array-output",children:["[",t.join(", "),"]"]}),n.jsxs("p",{className:"traversal-use-case",children:["Use case: ",i==null?void 0:i.useCase.join(" | ")]}),n.jsxs("div",{className:"traversal-complexity",children:[n.jsx("strong",{children:"Time:"})," ",n.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.time}),n.jsx("br",{}),n.jsx("strong",{children:"Space:"})," ",n.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.space})]})]})]})}function Cj(){const[e,t]=u.useState(null),[r,s]=u.useState(0),[i,a]=u.useState(-1),[l,o]=u.useState(""),[c,h]=u.useState(""),[d,p]=u.useState(""),[m,b]=u.useState(""),[w,k]=u.useState([]),[j,f]=u.useState(null),[g,x]=u.useState([]),[E,y]=u.useState(!1),[F,T]=u.useState(null),[D,A]=u.useState([]),[I,H]=u.useState(null),[K,B]=u.useState(!1);u.useEffect(()=>{$()},[]);const $=async()=>{try{const P=await(await fetch("/api/avl")).json();t(P.tree),s(P.size||0),a(P.height!==void 0?P.height:-1)}catch(C){console.error("Error loading AVL:",C)}},v=C=>{b(C),setTimeout(()=>b(""),3e3)},R=()=>{k([]),f(null)},q=async()=>{if(!l.trim()){v("Please enter a number!");return}const C=Number(l);if(isNaN(C)){v("Please enter a valid number!");return}if(r>=qt){v(`Tree is full! Maximum size is ${qt} nodes.`);return}R(),M();try{const _=await(await fetch("/api/avl/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:C})})).json();if(_.error){v(_.error);return}t(_.tree),s(_.size||0),a(_.height!==void 0?_.height:-1),v(`Inserted ${C} (tree rebalanced)`),o("")}catch{v("Error inserting node")}},L=async()=>{if(!c.trim()){v("Please enter a number!");return}const C=Number(c);if(isNaN(C)){v("Please enter a valid number!");return}R(),M();try{const _=await(await fetch("/api/avl/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:C})})).json();if(_.error){v(_.error);return}t(_.tree),s(_.size||0),a(_.height!==void 0?_.height:-1),v(`Deleted ${C} (tree rebalanced)`),h("")}catch{v("Error deleting node")}},O=async()=>{if(!d.trim()){v("Please enter a number!");return}const C=Number(d);if(isNaN(C)){v("Please enter a valid number!");return}if(!e){v("Tree is empty!");return}M(),y(!0);const P=kj(e,C);for(let _=0;_<P.length;_++)k(P.slice(0,_+1)),await new Promise(N=>setTimeout(N,500));try{const N=await(await fetch(`/api/avl/search?value=${C}`)).json();f(N.found),N.found?v(`Found ${C}!`):v(`${C} not found in AVL Tree`)}catch{v("Error searching")}y(!1),p("")},S=async()=>{try{await fetch("/api/avl/clear",{method:"POST"}),t(null),s(0),a(-1),M(),R(),v("AVL Tree cleared!")}catch{v("Error clearing tree")}},z=async C=>{if(!e){v("Tree is empty! Insert some nodes first.");return}R(),y(!0),x([]),T(null),A([]),H(C),B(!1);try{const N=(await(await fetch(`/api/avl/${C}`)).json()).traversal||[];if(N.length===0){v("Tree is empty!"),y(!1);return}for(let G=0;G<N.length;G++)T(N[G]),await new Promise(W=>setTimeout(W,600)),A(W=>[...W,N[G]]),x(W=>[...W,N[G]]),await new Promise(W=>setTimeout(W,200));T(null),B(!0),y(!1);const V=C.charAt(0).toUpperCase()+C.slice(1);v(`${V} traversal complete!`)}catch(P){console.error("Traversal error:",P),v("Error performing traversal"),y(!1)}},M=()=>{x([]),T(null),A([]),H(null),B(!1)};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsx("div",{className:"intro-left",children:n.jsx(ur,{dataStructure:"avl"})}),n.jsx(fe,{context:"AVL Tree data structure, self-balancing BST, rotations, balance factors, and O(log n) guaranteed operations"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsx(wj,{insertValue:l,deleteValue:c,searchValue:d,size:r,height:i,message:m,tree:e,isAnimating:E,visitedNodes:D,searchPath:w,searchResult:j,onInsertValueChange:o,onDeleteValueChange:h,onSearchValueChange:p,onInsert:q,onDelete:L,onSearch:O,onTraversal:z,onClear:S,onResetTraversal:()=>{M(),R()}}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"AVL Tree Visualization"}),n.jsxs("p",{className:"bst-property-reminder",children:["Self-balancing: ",n.jsx("code",{children:"|Balance Factor| <= 1"})," for all nodes"]}),n.jsx("div",{className:"tree-container",children:n.jsx(bj,{tree:e,currentNode:F,visitedNodes:D,searchPath:w,searchResult:j})}),n.jsx(Sj,{traversalType:I,traversalResult:g,isAnimating:E,traversalComplete:K})]})]}),n.jsx(me,{dataStructure:"avl"})]})}const Ht=7,Tj={inorder:{name:"Inorder Traversal",order:"Left -> Root -> Right",description:"Returns elements in SORTED order.",useCase:["Get sorted elements","Validate BST property"],complexity:{time:"O(n)",space:"O(h)"}},preorder:{name:"Preorder Traversal",order:"Root -> Left -> Right",description:"Process root first. Root shows most recently accessed!",useCase:["See access pattern","Serialize structure"],complexity:{time:"O(n)",space:"O(h)"}},postorder:{name:"Postorder Traversal",order:"Left -> Right -> Root",description:"Process children before root.",useCase:["Delete tree safely","Calculate subtree info"],complexity:{time:"O(n)",space:"O(h)"}},levelorder:{name:"Level Order Traversal",order:"Level by Level (BFS)",description:"Visit nodes level by level.",useCase:["Level-wise printing","Find width"],complexity:{time:"O(n)",space:"O(w)"}}},vl=(e,t=0)=>e?Math.max(vl(e.left,t+1),vl(e.right,t+1)):t-1;function _j({insertValue:e,deleteValue:t,searchValue:r,size:s,height:i,message:a,tree:l,isAnimating:o,visitedNodes:c,lastSplayedValue:h,onInsertValueChange:d,onDeleteValueChange:p,onSearchValueChange:m,onInsert:b,onDelete:w,onSearch:k,onTraversal:j,onClear:f,onResetTraversal:g}){const x=(E,y)=>{const F=E.target.value;(F===""||F==="-"||/^-?\d*\.?\d*$/.test(F))&&y(F)};return n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Splay Tree"}),n.jsxs("div",{className:"splay-info-box",children:[n.jsx("strong",{children:"Key Feature:"})," Accessed nodes move to root!"]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"insertValue",value:e,onChange:E=>x(E,d),onKeyDown:E=>E.key==="Enter"&&b(),placeholder:"Enter a number",disabled:o}),n.jsx("button",{onClick:b,className:"btn btn-insert",disabled:o,children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"searchValue",children:"Search Value (Splays to Root!)"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"searchValue",value:r,onChange:E=>x(E,m),onKeyDown:E=>E.key==="Enter"&&k(),placeholder:"Enter a number",disabled:o}),n.jsxs("button",{onClick:k,className:"btn btn-search",disabled:o||!l,children:[n.jsx(dr,{size:16})," Search"]})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"deleteValue",children:"Delete Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"deleteValue",value:t,onChange:E=>x(E,p),onKeyDown:E=>E.key==="Enter"&&w(),placeholder:"Enter a number",disabled:o}),n.jsx("button",{onClick:w,className:"btn btn-delete",disabled:o,children:"Delete"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Traversals"}),n.jsx("div",{className:"btn-group",children:["inorder","preorder","postorder","levelorder"].map(E=>n.jsx("button",{onClick:()=>j(E),className:"btn btn-traversal",disabled:o||!l,children:E==="levelorder"?"Level Order":E.charAt(0).toUpperCase()+E.slice(1)},E))}),c.length>0&&!o&&n.jsx("button",{onClick:g,className:"btn btn-secondary",style:{marginTop:"0.5rem",width:"100%"},children:"Reset Colors"})]}),n.jsxs("div",{className:"traversal-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--default"}),n.jsx("span",{children:"Not visited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visiting"}),n.jsx("span",{children:"Current"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visited"}),n.jsx("span",{children:"Visited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot",style:{background:"#ec4899"}}),n.jsx("span",{children:"Root (Splayed)"})]})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Nodes:"}),n.jsx("span",{className:"info-value",children:s})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Height:"}),n.jsx("span",{className:"info-value",children:i})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Max:"}),n.jsx("span",{className:"info-value",children:Ht})]})]}),h!==null&&n.jsxs("div",{className:"splay-result-box",children:[n.jsx("strong",{children:"Root:"})," ",h," (most recently accessed)"]}),s>=Ht*.8&&s<Ht&&n.jsxs("div",{className:"warning-box",children:[n.jsx(Nn,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Tree filling up!"})," ",s,"/",Ht," nodes."]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:f,className:"btn btn-clear",disabled:o,children:"Clear Tree"})}),a&&n.jsx("div",{className:`message message-${a.includes("Error")||a.includes("error")||a.includes("not found")?"error":/success|complete|Inserted|Deleted|cleared|Found|root/i.test(a)?"success":a.includes("full")?"warning":"info"}`,children:a})]})}function Lj({tree:e,currentNode:t,visitedNodes:r,lastSplayedValue:s}){const i=(h,d)=>{const p=t===h,m=r.includes(h),b=d&&s===h;let w="#06b6d4",k="none";return p?(w="#f59e0b",k="drop-shadow(0 0 12px #f59e0b) drop-shadow(0 0 20px #f59e0b)"):b?(w="#ec4899",k="drop-shadow(0 0 15px #ec4899) drop-shadow(0 0 25px #ec4899)"):d?(w="#8b5cf6",k="drop-shadow(0 0 8px #8b5cf6)"):m&&(w="#10b981",k="drop-shadow(0 0 6px #10b981)"),{color:w,glow:k,radius:p||b?30:d?28:25,stroke:p||b?3:2,fontSize:p||b?16:14,fontWeight:p||b||d?"bold":"normal"}},a=(h,d,p,m,b,w=!1)=>{if(!h)return[];const k=Math.pow(2,b-m)*50,j=i(h.value,w),f=[];return h.left&&(f.push(n.jsx("line",{x1:d,y1:p,x2:d-k,y2:p+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:2},`l-${h.value}-l`)),f.push(...a(h.left,d-k,p+100,m+1,b,!1))),h.right&&(f.push(n.jsx("line",{x1:d,y1:p,x2:d+k,y2:p+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:2},`l-${h.value}-r`)),f.push(...a(h.right,d+k,p+100,m+1,b,!1))),f.push(n.jsxs("g",{style:{filter:j.glow,transition:"all 0.3s ease"},children:[n.jsx("circle",{cx:d,cy:p,r:j.radius,fill:j.color,stroke:"white",strokeWidth:j.stroke,style:{transition:"all 0.3s ease"}}),n.jsx("text",{x:d,y:p,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:j.fontSize,fontWeight:j.fontWeight,children:h.value}),w&&n.jsx("text",{x:d,y:p+j.radius+15,textAnchor:"middle",fill:"#ec4899",fontSize:10,fontWeight:"bold",children:"ROOT"})]},`n-${h.value}-${d}`)),f};if(!e)return n.jsxs("div",{className:"tree-empty",children:[n.jsx("p",{children:"Splay Tree is empty. Insert some values!"}),n.jsx("p",{className:"tree-empty-hint",children:"Try inserting: 50, 30, 70, then search for 30!"})]});const l=vl(e),o=(l+1)*100+70,c=Math.max(800,Math.pow(2,Math.max(l,1))*80);return n.jsx("svg",{width:c,height:o,className:"tree-svg",children:a(e,c/2,50,0,l,!0)})}function Ej({traversalType:e,traversalResult:t,isAnimating:r,traversalComplete:s}){if(!e||t.length===0&&!r)return null;const i=Tj[e];return n.jsxs("div",{className:"traversal-output-panel",children:[n.jsxs("div",{style:{marginBottom:"1rem"},children:[n.jsxs("h3",{className:"traversal-title",children:[i==null?void 0:i.name,r&&n.jsx("span",{className:"traversal-badge traversal-badge--running",children:"Running..."}),s&&n.jsx("span",{className:"traversal-badge traversal-badge--complete",children:"Complete"})]}),n.jsxs("p",{className:"traversal-order",children:[n.jsx("strong",{children:"Order:"})," ",i==null?void 0:i.order]}),n.jsx("p",{className:"traversal-description",children:i==null?void 0:i.description})]}),n.jsxs("div",{className:"traversal-output-box",children:[n.jsx("div",{className:"traversal-output-label",children:"Output Sequence:"}),n.jsx("div",{className:"traversal-sequence-container",children:t.length===0&&r?n.jsx("span",{style:{color:"var(--text-muted)",fontStyle:"italic"},children:"Traversing..."}):t.map((a,l)=>n.jsx("span",{className:`traversal-node ${l===t.length-1&&!s?"traversal-node--current":"traversal-node--complete"}`,children:a},l))})]}),s&&t.length>0&&n.jsxs("div",{className:"traversal-array-section",children:[n.jsx("div",{className:"traversal-array-label",children:"Array Output:"}),n.jsxs("code",{className:"traversal-array-output",children:["[",t.join(", "),"]"]}),e==="preorder"&&n.jsx("p",{className:"traversal-sorted-note",children:"Note: First element is the root (most recently accessed)!"}),n.jsxs("p",{className:"traversal-use-case",children:["Use case: ",i==null?void 0:i.useCase.join(" | ")]}),n.jsxs("div",{className:"traversal-complexity",children:[n.jsx("strong",{children:"Time:"})," ",n.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.time}),n.jsx("br",{}),n.jsx("strong",{children:"Space:"})," ",n.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.space})]})]})]})}function Oj(){const[e,t]=u.useState(null),[r,s]=u.useState(0),[i,a]=u.useState(-1),[l,o]=u.useState(""),[c,h]=u.useState(""),[d,p]=u.useState(""),[m,b]=u.useState(""),[w,k]=u.useState(null),[j,f]=u.useState([]),[g,x]=u.useState(!1),[E,y]=u.useState(null),[F,T]=u.useState([]),[D,A]=u.useState(null),[I,H]=u.useState(!1);u.useEffect(()=>{K()},[]);const K=async()=>{try{const z=await(await fetch("/api/splay")).json();t(z.tree),s(z.size||0),a(z.height!==void 0?z.height:-1)}catch(S){console.error("Error loading Splay Tree:",S)}},B=S=>{b(S),setTimeout(()=>b(""),3e3)},$=async()=>{if(!l.trim()){B("Please enter a number!");return}const S=Number(l);if(isNaN(S)){B("Please enter a valid number!");return}if(r>=Ht){B(`Tree is full! Maximum size is ${Ht} nodes.`);return}O(),k(null);try{const M=await(await fetch("/api/splay/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:S})})).json();if(M.error){B(M.error);return}t(M.tree),s(M.size||0),a(M.height!==void 0?M.height:-1),k(S),B(`Inserted ${S} (now at root!)`),o("")}catch{B("Error inserting node")}},v=async()=>{if(!c.trim()){B("Please enter a number!");return}const S=Number(c);if(isNaN(S)){B("Please enter a valid number!");return}O(),k(null);try{const M=await(await fetch("/api/splay/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:S})})).json();if(M.error){B(M.error);return}t(M.tree),s(M.size||0),a(M.height!==void 0?M.height:-1),B(`Deleted ${S}`),h("")}catch{B("Error deleting node")}},R=async()=>{if(!d.trim()){B("Please enter a number!");return}const S=Number(d);if(isNaN(S)){B("Please enter a valid number!");return}if(!e){B("Tree is empty!");return}O(),x(!0);try{const M=await(await fetch(`/api/splay/search?value=${S}`)).json();M.tree&&t(M.tree),M.found?(k(S),B(`Found ${S}! (splayed to root)`)):(k(null),B(`${S} not found in Splay Tree`)),await K()}catch{B("Error searching")}x(!1),p("")},q=async()=>{try{await fetch("/api/splay/clear",{method:"POST"}),t(null),s(0),a(-1),O(),k(null),B("Splay Tree cleared!")}catch{B("Error clearing tree")}},L=async S=>{if(!e){B("Tree is empty! Insert some nodes first.");return}k(null),x(!0),f([]),y(null),T([]),A(S),H(!1);try{const C=(await(await fetch(`/api/splay/${S}`)).json()).traversal||[];if(C.length===0){B("Tree is empty!"),x(!1);return}for(let _=0;_<C.length;_++)y(C[_]),await new Promise(N=>setTimeout(N,600)),T(N=>[...N,C[_]]),f(N=>[...N,C[_]]),await new Promise(N=>setTimeout(N,200));y(null),H(!0),x(!1);const P=S.charAt(0).toUpperCase()+S.slice(1);B(`${P} traversal complete!`)}catch(z){console.error("Traversal error:",z),B("Error performing traversal"),x(!1)}},O=()=>{f([]),y(null),T([]),A(null),H(!1)};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsx("div",{className:"intro-left",children:n.jsx(ur,{dataStructure:"splay"})}),n.jsx(fe,{context:"Splay Tree data structure, self-adjusting BST, splay operations, zig-zig, zig-zag rotations, amortized O(log n)"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsx(_j,{insertValue:l,deleteValue:c,searchValue:d,size:r,height:i,message:m,tree:e,isAnimating:g,visitedNodes:F,lastSplayedValue:w,onInsertValueChange:o,onDeleteValueChange:h,onSearchValueChange:p,onInsert:$,onDelete:v,onSearch:R,onTraversal:L,onClear:q,onResetTraversal:()=>{O(),k(null)}}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Splay Tree Visualization"}),n.jsxs("p",{className:"bst-property-reminder",children:["Self-adjusting: ",n.jsx("code",{children:"Recently accessed = Root"})]}),n.jsx("div",{className:"tree-container",children:n.jsx(Lj,{tree:e,currentNode:E,visitedNodes:F,lastSplayedValue:w})}),n.jsx(Ej,{traversalType:D,traversalResult:j,isAnimating:g,traversalComplete:I})]})]}),n.jsx(me,{dataStructure:"splay"})]})}const Ut=15,Rj={inorder:{name:"Inorder Traversal",order:"Left -> Root -> Right",description:"Returns elements in SORTED order (BST property preserved in treap).",useCase:["Get sorted elements","Validate BST property","Range queries"],complexity:{time:"O(n)",space:"O(h)"}},preorder:{name:"Preorder Traversal",order:"Root -> Left -> Right",description:"Process root first. Shows the priority-based structure of the treap.",useCase:["Copy tree structure","Serialize treap","Prefix expressions"],complexity:{time:"O(n)",space:"O(h)"}},postorder:{name:"Postorder Traversal",order:"Left -> Right -> Root",description:"Process children before root. Useful for deletion operations.",useCase:["Delete tree safely","Calculate subtree sizes","Postfix expressions"],complexity:{time:"O(n)",space:"O(h)"}},levelorder:{name:"Level Order Traversal",order:"Level by Level (BFS)",description:"Visit nodes level by level. Reveals the heap-ordered priority structure.",useCase:["Level-wise printing","Verify heap property","Serialize for reconstruction"],complexity:{time:"O(n)",space:"O(w)"}}},yl=(e,t=0)=>e?Math.max(yl(e.left,t+1),yl(e.right,t+1)):t-1,Pj=(e,t)=>{const r=[];let s=e;for(;s&&(r.push(s.value),s.value!==t);)t<s.value?s=s.left:s=s.right;return r},Ij=e=>{const r=40+e/100*60,s=55-e/100*15;return`hsl(260, ${r}%, ${s}%)`};function Mj({insertValue:e,deleteValue:t,searchValue:r,size:s,height:i,message:a,tree:l,isAnimating:o,visitedNodes:c,searchPath:h,searchResult:d,onInsertValueChange:p,onDeleteValueChange:m,onSearchValueChange:b,onInsert:w,onDelete:k,onSearch:j,onTraversal:f,onClear:g,onResetTraversal:x}){const E=(y,F)=>{const T=y.target.value;(T===""||T==="-"||/^-?\d*\.?\d*$/.test(T))&&F(T)};return n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Treap"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"insertValue",value:e,onChange:y=>E(y,p),onKeyDown:y=>y.key==="Enter"&&w(),placeholder:"Enter a number",disabled:o}),n.jsx("button",{onClick:w,className:"btn btn-insert",disabled:o,children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"searchValue",children:"Search Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"searchValue",value:r,onChange:y=>E(y,b),onKeyDown:y=>y.key==="Enter"&&j(),placeholder:"Enter a number",disabled:o}),n.jsxs("button",{onClick:j,className:"btn btn-search",disabled:o||!l,children:[n.jsx(dr,{size:16})," Search"]})]}),h.length>0&&n.jsxs("div",{className:"search-path-display",children:[n.jsx("span",{className:"search-path-label",children:"Path:"}),n.jsx("div",{className:"search-path-nodes",children:h.map((y,F)=>n.jsxs(Ve.Fragment,{children:[n.jsx("span",{className:`search-path-node ${F===h.length-1?d?"found":"not-found":""}`,children:y}),F<h.length-1&&n.jsx(de,{size:14,className:"search-path-arrow"})]},F))})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"deleteValue",children:"Delete Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"deleteValue",value:t,onChange:y=>E(y,m),onKeyDown:y=>y.key==="Enter"&&k(),placeholder:"Enter a number",disabled:o}),n.jsx("button",{onClick:k,className:"btn btn-delete",disabled:o,children:"Delete"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Traversals"}),n.jsx("div",{className:"btn-group",children:["inorder","preorder","postorder","levelorder"].map(y=>n.jsxs("button",{onClick:()=>f(y),className:`btn btn-traversal ${y==="inorder"?"btn-traversal-primary":""}`,disabled:o||!l,title:y==="inorder"?"Returns sorted order!":"",children:[y==="levelorder"?"Level Order":y.charAt(0).toUpperCase()+y.slice(1),y==="inorder"&&n.jsx("span",{className:"sorted-badge",children:"Sorted!"})]},y))}),c.length>0&&!o&&n.jsx("button",{onClick:x,className:"btn btn-secondary",style:{marginTop:"0.5rem",width:"100%"},children:"Reset Colors"})]}),n.jsxs("div",{className:"traversal-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--default"}),n.jsx("span",{children:"Not visited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visiting"}),n.jsx("span",{children:"Current"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visited"}),n.jsx("span",{children:"Visited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--search"}),n.jsx("span",{children:"Search path"})]})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Nodes:"}),n.jsx("span",{className:"info-value",children:s})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Height:"}),n.jsx("span",{className:"info-value",children:i})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Max:"}),n.jsx("span",{className:"info-value",children:Ut})]})]}),s>=Ut*.8&&s<Ut&&n.jsxs("div",{className:"warning-box",children:[n.jsx(Nn,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Tree filling up!"})," ",s,"/",Ut," nodes."]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:g,className:"btn btn-clear",disabled:o,children:"Clear Tree"})}),a&&n.jsx("div",{className:`message message-${a.includes("Error")||a.includes("error")||a.includes("not found")||a.includes("already exists")?"error":/success|complete|Inserted|Deleted|cleared|Found/i.test(a)?"success":a.includes("full")?"warning":"info"}`,children:a})]})}function zj({tree:e,currentNode:t,visitedNodes:r,searchPath:s,searchResult:i}){const a=d=>{const p=t===d,m=r.includes(d),b=s.includes(d),w=s.length>0&&s[s.length-1]===d;let k="#6366f1",j="none";return p?(k="#f59e0b",j="drop-shadow(0 0 12px #f59e0b) drop-shadow(0 0 20px #f59e0b)"):w?(k=i?"#10b981":"#ef4444",j=i?"drop-shadow(0 0 12px #10b981)":"drop-shadow(0 0 12px #ef4444)"):b?(k="#3b82f6",j="drop-shadow(0 0 8px #3b82f6)"):m&&(k="#10b981",j="drop-shadow(0 0 6px #10b981)"),{color:k,glow:j,radius:p||w?30:25,stroke:p||w?3:2,fontSize:p||w?15:13,fontWeight:p||w?"bold":"normal"}},l=(d,p,m,b,w)=>{if(!d)return[];const k=Math.pow(2,w-b)*50,j=a(d.value),f=[],x=j.color==="#6366f1"?Ij(d.priority):j.color;if(d.left){const E=s.includes(d.value)&&s.includes(d.left.value);f.push(n.jsx("line",{x1:p,y1:m,x2:p-k,y2:m+100,stroke:E?"#3b82f6":"rgba(255,255,255,0.3)",strokeWidth:E?3:2},`l-${d.value}-l`)),f.push(...l(d.left,p-k,m+100,b+1,w))}if(d.right){const E=s.includes(d.value)&&s.includes(d.right.value);f.push(n.jsx("line",{x1:p,y1:m,x2:p+k,y2:m+100,stroke:E?"#3b82f6":"rgba(255,255,255,0.3)",strokeWidth:E?3:2},`l-${d.value}-r`)),f.push(...l(d.right,p+k,m+100,b+1,w))}return f.push(n.jsxs("g",{style:{filter:j.glow,transition:"all 0.3s ease"},children:[n.jsx("circle",{cx:p,cy:m,r:j.radius,fill:x,stroke:"white",strokeWidth:j.stroke,style:{transition:"all 0.3s ease"}}),n.jsx("text",{x:p,y:m-5,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:j.fontSize,fontWeight:j.fontWeight,children:d.value}),n.jsxs("text",{x:p,y:m+11,textAnchor:"middle",dominantBaseline:"middle",fill:"rgba(255,255,255,0.7)",fontSize:9,fontWeight:"normal",children:["p:",d.priority]})]},`n-${d.value}-${p}`)),f};if(!e)return n.jsxs("div",{className:"tree-empty",children:[n.jsx("p",{children:"Treap is empty. Insert some values!"}),n.jsx("p",{className:"tree-empty-hint",children:"Try: 50, 30, 70, 20, 40, 60, 80"})]});const o=yl(e),c=(o+1)*100+50,h=Math.max(800,Math.pow(2,Math.max(o,1))*80);return n.jsx("svg",{width:h,height:c,className:"tree-svg",children:l(e,h/2,50,0,o)})}function Fj({traversalType:e,traversalResult:t,isAnimating:r,traversalComplete:s}){if(!e||t.length===0&&!r)return null;const i=Rj[e];return n.jsxs("div",{className:"traversal-output-panel",children:[n.jsxs("div",{style:{marginBottom:"1rem"},children:[n.jsxs("h3",{className:"traversal-title",children:[i==null?void 0:i.name,e==="inorder"&&n.jsx("span",{className:"sorted-indicator",children:"Returns Sorted Order!"}),r&&n.jsx("span",{className:"traversal-badge traversal-badge--running",children:"Running..."}),s&&n.jsx("span",{className:"traversal-badge traversal-badge--complete",children:"Complete"})]}),n.jsxs("p",{className:"traversal-order",children:[n.jsx("strong",{children:"Order:"})," ",i==null?void 0:i.order]}),n.jsx("p",{className:"traversal-description",children:i==null?void 0:i.description})]}),n.jsxs("div",{className:"traversal-output-box",children:[n.jsx("div",{className:"traversal-output-label",children:"Output Sequence:"}),n.jsx("div",{className:"traversal-sequence-container",children:t.length===0&&r?n.jsx("span",{style:{color:"var(--text-muted)",fontStyle:"italic"},children:"Traversing..."}):t.map((a,l)=>n.jsx("span",{className:`traversal-node ${l===t.length-1&&!s?"traversal-node--current":"traversal-node--complete"}`,children:a},l))})]}),s&&t.length>0&&n.jsxs("div",{className:"traversal-array-section",children:[n.jsx("div",{className:"traversal-array-label",children:"Array Output:"}),n.jsxs("code",{className:"traversal-array-output",children:["[",t.join(", "),"]"]}),e==="inorder"&&n.jsx("p",{className:"traversal-sorted-note",children:"Notice: The output is sorted! BST property is maintained in the treap."}),n.jsxs("p",{className:"traversal-use-case",children:["Use case: ",i==null?void 0:i.useCase.join(" | ")]}),n.jsxs("div",{className:"traversal-complexity",children:[n.jsx("strong",{children:"Time:"})," ",n.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.time}),n.jsx("br",{}),n.jsx("strong",{children:"Space:"})," ",n.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.space})]})]})]})}function Aj(){const[e,t]=u.useState(null),[r,s]=u.useState(0),[i,a]=u.useState(-1),[l,o]=u.useState(""),[c,h]=u.useState(""),[d,p]=u.useState(""),[m,b]=u.useState(""),[w,k]=u.useState([]),[j,f]=u.useState(null),[g,x]=u.useState([]),[E,y]=u.useState(!1),[F,T]=u.useState(null),[D,A]=u.useState([]),[I,H]=u.useState(null),[K,B]=u.useState(!1);u.useEffect(()=>{$()},[]);const $=async()=>{try{const P=await(await fetch("/api/treap")).json();t(P.tree),s(P.size||0),a(P.height!==void 0?P.height:-1)}catch(C){console.error("Error loading Treap:",C)}},v=C=>{b(C),setTimeout(()=>b(""),3e3)},R=()=>{k([]),f(null)},q=async()=>{if(!l.trim()){v("Please enter a number!");return}const C=Number(l);if(isNaN(C)){v("Please enter a valid number!");return}if(r>=Ut){v(`Tree is full! Maximum size is ${Ut} nodes.`);return}R(),M();try{const _=await(await fetch("/api/treap/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:C})})).json();if(_.error){v(_.error);return}t(_.tree),s(_.size||0),a(_.height!==void 0?_.height:-1),v(`Inserted ${C}`),o("")}catch{v("Error inserting node")}},L=async()=>{if(!c.trim()){v("Please enter a number!");return}const C=Number(c);if(isNaN(C)){v("Please enter a valid number!");return}R(),M();try{const _=await(await fetch("/api/treap/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:C})})).json();if(_.error){v(_.error);return}t(_.tree),s(_.size||0),a(_.height!==void 0?_.height:-1),v(`Deleted ${C}`),h("")}catch{v("Error deleting node")}},O=async()=>{if(!d.trim()){v("Please enter a number!");return}const C=Number(d);if(isNaN(C)){v("Please enter a valid number!");return}if(!e){v("Tree is empty!");return}M(),y(!0);const P=Pj(e,C);for(let _=0;_<P.length;_++)k(P.slice(0,_+1)),await new Promise(N=>setTimeout(N,500));try{const N=await(await fetch(`/api/treap/search?value=${C}`)).json();f(N.found),N.found?v(`Found ${C}!`):v(`${C} not found in treap`)}catch{v("Error searching")}y(!1),p("")},S=async()=>{try{await fetch("/api/treap/clear",{method:"POST"}),t(null),s(0),a(-1),M(),R(),v("Treap cleared!")}catch{v("Error clearing tree")}},z=async C=>{if(!e){v("Tree is empty! Insert some nodes first.");return}R(),y(!0),x([]),T(null),A([]),H(C),B(!1);try{const N=(await(await fetch(`/api/treap/${C}`)).json()).traversal||[];if(N.length===0){v("Tree is empty!"),y(!1);return}for(let G=0;G<N.length;G++)T(N[G]),await new Promise(W=>setTimeout(W,600)),A(W=>[...W,N[G]]),x(W=>[...W,N[G]]),await new Promise(W=>setTimeout(W,200));T(null),B(!0),y(!1);const V=C.charAt(0).toUpperCase()+C.slice(1);v(`${V} traversal complete!${C==="inorder"?" (Sorted!)":""}`)}catch(P){console.error("Traversal error:",P),v("Error performing traversal"),y(!1)}},M=()=>{x([]),T(null),A([]),H(null),B(!1)};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsx("div",{className:"intro-left",children:n.jsx(ur,{dataStructure:"treap"})}),n.jsx(fe,{context:"Treap data structure, combining BST and heap properties, random priorities, rotations, insert, delete, search operations"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsx(Mj,{insertValue:l,deleteValue:c,searchValue:d,size:r,height:i,message:m,tree:e,isAnimating:E,visitedNodes:D,searchPath:w,searchResult:j,onInsertValueChange:o,onDeleteValueChange:h,onSearchValueChange:p,onInsert:q,onDelete:L,onSearch:O,onTraversal:z,onClear:S,onResetTraversal:()=>{M(),R()}}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Treap Visualization"}),n.jsxs("p",{className:"treap-property-reminder",children:[n.jsx("code",{children:"BST"})," on keys | ",n.jsx("code",{children:"Max-Heap"})," on priorities (p:)"]}),n.jsx("div",{className:"tree-container",children:n.jsx(zj,{tree:e,currentNode:F,visitedNodes:D,searchPath:w,searchResult:j})}),n.jsx(Fj,{traversalType:I,traversalResult:g,isAnimating:E,traversalComplete:K})]})]}),n.jsx(me,{dataStructure:"treap"})]})}const pt=7;function Vj({insertValue:e,buildArray:t,size:r,height:s,min:i,message:a,heap:l,isAnimating:o,onInsertValueChange:c,onBuildArrayChange:h,onInsert:d,onExtract:p,onPeek:m,onBuild:b,onClear:w}){const k=(j,f)=>{const g=j.target.value;(g===""||g==="-"||/^-?\d*\.?\d*$/.test(g))&&f(g)};return n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Min Heap"}),n.jsxs("div",{className:"heap-info-box",children:[n.jsx("strong",{children:"Priority Queue:"})," Minimum always at root!"]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"insertValue",value:e,onChange:j=>k(j,c),onKeyDown:j=>j.key==="Enter"&&d(),placeholder:"Enter a number",disabled:o}),n.jsx("button",{onClick:d,className:"btn btn-insert",disabled:o,children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Heap Operations"}),n.jsxs("div",{className:"btn-group-vertical",children:[n.jsxs("button",{onClick:p,className:"btn btn-extract",disabled:o||l.length===0,children:[n.jsx(Cg,{size:16})," Extract Min"]}),n.jsx("button",{onClick:m,className:"btn btn-peek",disabled:o||l.length===0,children:"Peek Min"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"buildArray",children:"Build from Array"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"buildArray",value:t,onChange:j=>h(j.target.value),onKeyDown:j=>j.key==="Enter"&&b(),placeholder:"e.g., 5, 3, 8, 1, 2",disabled:o}),n.jsx("button",{onClick:b,className:"btn btn-build",disabled:o,children:"Build"})]})]}),n.jsxs("div",{className:"traversal-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot",style:{background:"#10b981"}}),n.jsx("span",{children:"Root (Min)"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot",style:{background:"#6366f1"}}),n.jsx("span",{children:"Internal"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot",style:{background:"#8b5cf6"}}),n.jsx("span",{children:"Leaf"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot",style:{background:"#f59e0b"}}),n.jsx("span",{children:"Highlighted"})]})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Size:"}),n.jsx("span",{className:"info-value",children:r})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Height:"}),n.jsx("span",{className:"info-value",children:s})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Min:"}),n.jsx("span",{className:"info-value",children:i??"-"})]})]}),r>=pt*.8&&r<pt&&n.jsxs("div",{className:"warning-box",children:[n.jsx(Nn,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Heap filling up!"})," ",r,"/",pt," elements."]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:w,className:"btn btn-clear",disabled:o,children:"Clear Heap"})}),a&&n.jsx("div",{className:`message message-${a.includes("Error")||a.includes("error")?"error":/success|complete|Inserted|Extracted|cleared|Built/i.test(a)?"success":a.includes("full")||a.includes("empty")?"warning":"info"}`,children:a})]})}function Dj({tree:e,heap:t,highlightedIndex:r,swappingIndices:s}){const i=d=>{const p=r===d,m=s.includes(d),b=d===0;let w="#6366f1",k="none";return p||m?(w="#f59e0b",k="drop-shadow(0 0 12px #f59e0b)"):b&&(w="#10b981",k="drop-shadow(0 0 8px #10b981)"),{color:w,glow:k,radius:p||b?28:25}},a=(d,p=0)=>d?Math.max(a(d.left,p+1),a(d.right,p+1)):p-1,l=(d,p,m,b,w)=>{if(!d)return[];const k=Math.pow(2,w-b)*50,j=i(d.index),f=[];return d.left&&(f.push(n.jsx("line",{x1:p,y1:m,x2:p-k,y2:m+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:2},`l-${d.index}-l`)),f.push(...l(d.left,p-k,m+100,b+1,w))),d.right&&(f.push(n.jsx("line",{x1:p,y1:m,x2:p+k,y2:m+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:2},`l-${d.index}-r`)),f.push(...l(d.right,p+k,m+100,b+1,w))),f.push(n.jsxs("g",{style:{filter:j.glow,transition:"all 0.3s ease"},children:[n.jsx("circle",{cx:p,cy:m,r:j.radius,fill:j.color,stroke:"white",strokeWidth:2}),n.jsx("text",{x:p,y:m,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:14,fontWeight:"bold",children:d.value}),n.jsxs("text",{x:p,y:m+j.radius+12,textAnchor:"middle",fill:"rgba(255,255,255,0.6)",fontSize:10,children:["[",d.index,"]"]})]},`n-${d.index}`)),f};if(!e||t.length===0)return n.jsxs("div",{className:"tree-empty",children:[n.jsx("p",{children:"Min Heap is empty. Insert some values!"}),n.jsx("p",{className:"tree-empty-hint",children:"Try: 5, 3, 8, 1, 2 or build from array"})]});const o=a(e),c=(o+1)*100+80,h=Math.max(600,Math.pow(2,Math.max(o,1))*70);return n.jsx("svg",{width:h,height:c,className:"tree-svg",children:l(e,h/2,50,0,o)})}function $j({heap:e,highlightedIndex:t,swappingIndices:r}){return e.length===0?n.jsx("div",{className:"heap-array-empty",children:n.jsx("code",{children:"[ ]"})}):n.jsxs("div",{className:"heap-array-container",children:[n.jsx("div",{className:"heap-array",children:e.map((s,i)=>{const a=t===i,l=r.includes(i),o=i===0;return n.jsxs("div",{className:`heap-array-cell ${a||l?"highlighted":""} ${o?"root":""}`,children:[n.jsx("span",{className:"heap-array-index",children:i}),n.jsx("span",{className:"heap-array-value",children:s})]},i)})}),n.jsxs("div",{className:"heap-array-formulas",children:[n.jsxs("div",{className:"formula-item",children:[n.jsx("strong",{children:"Parent(i):"})," ",n.jsx("code",{children:"(i - 1) / 2"})]}),n.jsxs("div",{className:"formula-item",children:[n.jsx("strong",{children:"Left(i):"})," ",n.jsx("code",{children:"2*i + 1"})]}),n.jsxs("div",{className:"formula-item",children:[n.jsx("strong",{children:"Right(i):"})," ",n.jsx("code",{children:"2*i + 2"})]})]})]})}function Bj(){const[e,t]=u.useState([]),[r,s]=u.useState(null),[i,a]=u.useState(0),[l,o]=u.useState(-1),[c,h]=u.useState(null),[d,p]=u.useState(""),[m,b]=u.useState(""),[w,k]=u.useState(""),[j,f]=u.useState(!1),[g,x]=u.useState(null),[E,y]=u.useState([]);u.useEffect(()=>{F()},[]);const F=async()=>{try{const $=await(await fetch("/api/minheap")).json();t($.heap||[]),s($.tree),a($.size||0),o($.height!==void 0?$.height:-1),h($.min)}catch(B){console.error("Error loading Min Heap:",B)}},T=B=>{k(B),setTimeout(()=>k(""),3e3)},D=async()=>{if(!d.trim()){T("Please enter a number!");return}const B=Number(d);if(isNaN(B)){T("Please enter a valid number!");return}if(i>=pt){T(`Heap is full! Maximum size is ${pt}.`);return}f(!0);try{const v=await(await fetch("/api/minheap/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:B})})).json();if(v.error){T(v.error),f(!1);return}t(v.heap||[]),s(v.tree),a(v.size||0),o(v.height!==void 0?v.height:-1),h(v.min),T(`Inserted ${B}`),p("")}catch{T("Error inserting element")}f(!1)},A=async()=>{if(i===0){T("Heap is empty!");return}f(!0),x(0),await new Promise(B=>setTimeout(B,500));try{const $=await(await fetch("/api/minheap/extract",{method:"POST"})).json();if($.error){T($.error),f(!1),x(null);return}t($.heap||[]),s($.tree),a($.size||0),o($.height!==void 0?$.height:-1),h($.min),T(`Extracted minimum: ${$.extracted}`)}catch{T("Error extracting minimum")}x(null),f(!1)},I=async()=>{if(i===0){T("Heap is empty!");return}x(0),T(`Minimum element is ${c}`),await new Promise(B=>setTimeout(B,1500)),x(null)},H=async()=>{if(!m.trim()){T("Please enter an array of numbers!");return}const B=m.split(",").map($=>{const v=Number($.trim());return isNaN(v)?null:v}).filter($=>$!==null);if(B.length===0){T("Please enter valid numbers separated by commas!");return}if(B.length>pt){T(`Array too large! Maximum size is ${pt}.`);return}f(!0);try{const v=await(await fetch("/api/minheap/build",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({array:B})})).json();if(v.error){T(v.error),f(!1);return}t(v.heap||[]),s(v.tree),a(v.size||0),o(v.height!==void 0?v.height:-1),h(v.min),T("Built heap from array!"),b("")}catch{T("Error building heap")}f(!1)},K=async()=>{try{await fetch("/api/minheap/clear",{method:"POST"}),t([]),s(null),a(0),o(-1),h(null),x(null),y([]),T("Heap cleared!")}catch{T("Error clearing heap")}};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsx("div",{className:"intro-left",children:n.jsx(ur,{dataStructure:"minheap"})}),n.jsx(fe,{context:"Min Heap data structure, priority queue, heapify operations, O(log n) insert and extract, O(1) peek minimum"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsx(Vj,{insertValue:d,buildArray:m,size:i,height:l,min:c,message:w,heap:e,isAnimating:j,onInsertValueChange:p,onBuildArrayChange:b,onInsert:D,onExtract:A,onPeek:I,onBuild:H,onClear:K}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Min Heap Visualization"}),n.jsxs("p",{className:"bst-property-reminder",children:["Heap Property: ",n.jsx("code",{children:"Parent <= Children"})," (Min at root)"]}),n.jsxs("div",{className:"heap-tree-section",children:[n.jsx("h3",{children:"Tree View"}),n.jsx("div",{className:"tree-container",children:n.jsx(Dj,{tree:r,heap:e,highlightedIndex:g,swappingIndices:E})})]}),n.jsxs("div",{className:"heap-array-section",children:[n.jsx("h3",{children:"Array Representation"}),n.jsx($j,{heap:e,highlightedIndex:g,swappingIndices:E})]})]})]}),n.jsx(me,{dataStructure:"minheap"})]})}const ft=7;function qj({insertValue:e,buildArray:t,size:r,height:s,max:i,message:a,heap:l,isAnimating:o,onInsertValueChange:c,onBuildArrayChange:h,onInsert:d,onExtract:p,onPeek:m,onBuild:b,onClear:w}){const k=(j,f)=>{const g=j.target.value;(g===""||g==="-"||/^-?\d*\.?\d*$/.test(g))&&f(g)};return n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Max Heap"}),n.jsxs("div",{className:"heap-info-box max-heap",children:[n.jsx("strong",{children:"Priority Queue:"})," Maximum always at root!"]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"insertValue",value:e,onChange:j=>k(j,c),onKeyDown:j=>j.key==="Enter"&&d(),placeholder:"Enter a number",disabled:o}),n.jsx("button",{onClick:d,className:"btn btn-insert",disabled:o,children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Heap Operations"}),n.jsxs("div",{className:"btn-group-vertical",children:[n.jsxs("button",{onClick:p,className:"btn btn-extract-max",disabled:o||l.length===0,children:[n.jsx(_g,{size:16})," Extract Max"]}),n.jsx("button",{onClick:m,className:"btn btn-peek",disabled:o||l.length===0,children:"Peek Max"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"buildArray",children:"Build from Array"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"buildArray",value:t,onChange:j=>h(j.target.value),onKeyDown:j=>j.key==="Enter"&&b(),placeholder:"e.g., 5, 3, 8, 1, 2",disabled:o}),n.jsx("button",{onClick:b,className:"btn btn-build",disabled:o,children:"Build"})]})]}),n.jsxs("div",{className:"traversal-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot",style:{background:"#ef4444"}}),n.jsx("span",{children:"Root (Max)"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot",style:{background:"#6366f1"}}),n.jsx("span",{children:"Internal"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot",style:{background:"#8b5cf6"}}),n.jsx("span",{children:"Leaf"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot",style:{background:"#f59e0b"}}),n.jsx("span",{children:"Highlighted"})]})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Size:"}),n.jsx("span",{className:"info-value",children:r})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Height:"}),n.jsx("span",{className:"info-value",children:s})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Max:"}),n.jsx("span",{className:"info-value",children:i??"-"})]})]}),r>=ft*.8&&r<ft&&n.jsxs("div",{className:"warning-box",children:[n.jsx(Nn,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Heap filling up!"})," ",r,"/",ft," elements."]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:w,className:"btn btn-clear",disabled:o,children:"Clear Heap"})}),a&&n.jsx("div",{className:`message message-${a.includes("Error")||a.includes("error")?"error":/success|complete|Inserted|Extracted|cleared|Built/i.test(a)?"success":a.includes("full")||a.includes("empty")?"warning":"info"}`,children:a})]})}function Hj({tree:e,heap:t,highlightedIndex:r,swappingIndices:s}){const i=d=>{const p=r===d,m=s.includes(d),b=d===0;let w="#6366f1",k="none";return p||m?(w="#f59e0b",k="drop-shadow(0 0 12px #f59e0b)"):b&&(w="#ef4444",k="drop-shadow(0 0 8px #ef4444)"),{color:w,glow:k,radius:p||b?28:25}},a=(d,p=0)=>d?Math.max(a(d.left,p+1),a(d.right,p+1)):p-1,l=(d,p,m,b,w)=>{if(!d)return[];const k=Math.pow(2,w-b)*50,j=i(d.index),f=[];return d.left&&(f.push(n.jsx("line",{x1:p,y1:m,x2:p-k,y2:m+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:2},`l-${d.index}-l`)),f.push(...l(d.left,p-k,m+100,b+1,w))),d.right&&(f.push(n.jsx("line",{x1:p,y1:m,x2:p+k,y2:m+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:2},`l-${d.index}-r`)),f.push(...l(d.right,p+k,m+100,b+1,w))),f.push(n.jsxs("g",{style:{filter:j.glow,transition:"all 0.3s ease"},children:[n.jsx("circle",{cx:p,cy:m,r:j.radius,fill:j.color,stroke:"white",strokeWidth:2}),n.jsx("text",{x:p,y:m,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:14,fontWeight:"bold",children:d.value}),n.jsxs("text",{x:p,y:m+j.radius+12,textAnchor:"middle",fill:"rgba(255,255,255,0.6)",fontSize:10,children:["[",d.index,"]"]})]},`n-${d.index}`)),f};if(!e||t.length===0)return n.jsxs("div",{className:"tree-empty",children:[n.jsx("p",{children:"Max Heap is empty. Insert some values!"}),n.jsx("p",{className:"tree-empty-hint",children:"Try: 5, 3, 8, 1, 9 or build from array"})]});const o=a(e),c=(o+1)*100+80,h=Math.max(600,Math.pow(2,Math.max(o,1))*70);return n.jsx("svg",{width:h,height:c,className:"tree-svg",children:l(e,h/2,50,0,o)})}function Uj({heap:e,highlightedIndex:t,swappingIndices:r}){return e.length===0?n.jsx("div",{className:"heap-array-empty",children:n.jsx("code",{children:"[ ]"})}):n.jsxs("div",{className:"heap-array-container",children:[n.jsx("div",{className:"heap-array",children:e.map((s,i)=>{const a=t===i,l=r.includes(i),o=i===0;return n.jsxs("div",{className:`heap-array-cell ${a||l?"highlighted":""} ${o?"root-max":""}`,children:[n.jsx("span",{className:"heap-array-index",children:i}),n.jsx("span",{className:"heap-array-value",children:s})]},i)})}),n.jsxs("div",{className:"heap-array-formulas",children:[n.jsxs("div",{className:"formula-item",children:[n.jsx("strong",{children:"Parent(i):"})," ",n.jsx("code",{children:"(i - 1) / 2"})]}),n.jsxs("div",{className:"formula-item",children:[n.jsx("strong",{children:"Left(i):"})," ",n.jsx("code",{children:"2*i + 1"})]}),n.jsxs("div",{className:"formula-item",children:[n.jsx("strong",{children:"Right(i):"})," ",n.jsx("code",{children:"2*i + 2"})]})]})]})}function Kj(){const[e,t]=u.useState([]),[r,s]=u.useState(null),[i,a]=u.useState(0),[l,o]=u.useState(-1),[c,h]=u.useState(null),[d,p]=u.useState(""),[m,b]=u.useState(""),[w,k]=u.useState(""),[j,f]=u.useState(!1),[g,x]=u.useState(null),[E,y]=u.useState([]);u.useEffect(()=>{F()},[]);const F=async()=>{try{const $=await(await fetch("/api/maxheap")).json();t($.heap||[]),s($.tree),a($.size||0),o($.height!==void 0?$.height:-1),h($.max)}catch(B){console.error("Error loading Max Heap:",B)}},T=B=>{k(B),setTimeout(()=>k(""),3e3)},D=async()=>{if(!d.trim()){T("Please enter a number!");return}const B=Number(d);if(isNaN(B)){T("Please enter a valid number!");return}if(i>=ft){T(`Heap is full! Maximum size is ${ft}.`);return}f(!0);try{const v=await(await fetch("/api/maxheap/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:B})})).json();if(v.error){T(v.error),f(!1);return}t(v.heap||[]),s(v.tree),a(v.size||0),o(v.height!==void 0?v.height:-1),h(v.max),T(`Inserted ${B}`),p("")}catch{T("Error inserting element")}f(!1)},A=async()=>{if(i===0){T("Heap is empty!");return}f(!0),x(0),await new Promise(B=>setTimeout(B,500));try{const $=await(await fetch("/api/maxheap/extract",{method:"POST"})).json();if($.error){T($.error),f(!1),x(null);return}t($.heap||[]),s($.tree),a($.size||0),o($.height!==void 0?$.height:-1),h($.max),T(`Extracted maximum: ${$.extracted}`)}catch{T("Error extracting maximum")}x(null),f(!1)},I=async()=>{if(i===0){T("Heap is empty!");return}x(0),T(`Maximum element is ${c}`),await new Promise(B=>setTimeout(B,1500)),x(null)},H=async()=>{if(!m.trim()){T("Please enter an array of numbers!");return}const B=m.split(",").map($=>{const v=Number($.trim());return isNaN(v)?null:v}).filter($=>$!==null);if(B.length===0){T("Please enter valid numbers separated by commas!");return}if(B.length>ft){T(`Array too large! Maximum size is ${ft}.`);return}f(!0);try{const v=await(await fetch("/api/maxheap/build",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({array:B})})).json();if(v.error){T(v.error),f(!1);return}t(v.heap||[]),s(v.tree),a(v.size||0),o(v.height!==void 0?v.height:-1),h(v.max),T("Built heap from array!"),b("")}catch{T("Error building heap")}f(!1)},K=async()=>{try{await fetch("/api/maxheap/clear",{method:"POST"}),t([]),s(null),a(0),o(-1),h(null),x(null),y([]),T("Heap cleared!")}catch{T("Error clearing heap")}};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsx("div",{className:"intro-left",children:n.jsx(ur,{dataStructure:"maxheap"})}),n.jsx(fe,{context:"Max Heap data structure, priority queue, heapify operations, O(log n) insert and extract, O(1) peek maximum, heap sort"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsx(qj,{insertValue:d,buildArray:m,size:i,height:l,max:c,message:w,heap:e,isAnimating:j,onInsertValueChange:p,onBuildArrayChange:b,onInsert:D,onExtract:A,onPeek:I,onBuild:H,onClear:K}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Max Heap Visualization"}),n.jsxs("p",{className:"bst-property-reminder",children:["Heap Property: ",n.jsx("code",{children:"Parent >= Children"})," (Max at root)"]}),n.jsxs("div",{className:"heap-tree-section",children:[n.jsx("h3",{children:"Tree View"}),n.jsx("div",{className:"tree-container",children:n.jsx(Hj,{tree:r,heap:e,highlightedIndex:g,swappingIndices:E})})]}),n.jsxs("div",{className:"heap-array-section",children:[n.jsx("h3",{children:"Array Representation"}),n.jsx(Uj,{heap:e,highlightedIndex:g,swappingIndices:E})]})]})]}),n.jsx(me,{dataStructure:"maxheap"})]})}function Wj(){const[e,t]=u.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=u.useState(""),[i,a]=u.useState(""),[l,o]=u.useState(""),[c,h]=u.useState("1"),[d,p]=u.useState(null),[m,b]=u.useState(null),[w,k]=u.useState(null),[j,f]=u.useState({}),{message:g,showMessage:x}=Fe(3e3);u.useEffect(()=>{y()},[]),u.useEffect(()=>{e.vertices.length>0&&E()},[e.vertices]),u.useEffect(()=>{if(d||m){const v=setTimeout(()=>{p(null),b(null),k(null)},2e3);return()=>clearTimeout(v)}},[d,m]);const E=u.useCallback(()=>{const O=Math.min(450,300)*.38,S={},z=e.vertices.length;e.vertices.forEach((M,C)=>{const P=2*Math.PI*C/z-Math.PI/2;S[M]={x:225+O*Math.cos(P),y:150+O*Math.sin(P)}}),f(S)},[e.vertices]),y=async()=>{try{const v=await ie("/api/graph");t(v)}catch(v){console.error("Error loading graph:",v)}},F=async()=>{if(!r.trim()){x("Please enter a vertex name!","error");return}try{const v=await Z("/api/graph/vertex",{vertex:r.trim()});if(v.error){x(v.error,"error");return}t(v),p(r.trim().toUpperCase()),k("add-vertex"),x(`Added vertex '${r}' - Created new entry in adjacency list`,"success"),s("")}catch{x("Error adding vertex","error")}},T=async v=>{try{const R=await pi(`/api/graph/vertex/${v}`);if(R.error){x(R.error,"error");return}t(R),x(`Removed vertex '${v}' - Deleted from list and all references`,"success")}catch{x("Error removing vertex","error")}},D=async()=>{if(!i.trim()||!l.trim()){x("Please select both vertices!","error");return}const v=parseInt(c)||1;try{const R=await Z("/api/graph/edge",{from:i.trim(),to:l.trim(),weight:v});if(R.error){x(R.error,"error");return}t(R),b({from:i,to:l}),k("add-edge"),x(`Added edge ${i}→${l} (weight: ${v}) - Appended to ${i}'s neighbor list`,"success"),a(""),o(""),h("1")}catch{x("Error adding edge","error")}},A=async()=>{if(!i.trim()||!l.trim()){x("Please select both vertices!","error");return}try{const v=await pi("/api/graph/edge",{from:i.trim(),to:l.trim()});if(v.error){x(v.error,"error");return}t(v),x(`Removed edge ${i}→${l} - Removed from neighbor lists`,"success"),a(""),o("")}catch{x("Error removing edge","error")}},I=async v=>{try{const R=await Z(`/api/graph/preset/${v}`,{});if(R.error){x(R.error,"error");return}t(R),x(`Loaded '${v}' graph preset`,"success")}catch{x("Error loading preset","error")}},H=async()=>{try{const v=await Z("/api/graph/clear",{});t(v),x("Graph cleared","success")}catch{x("Error clearing graph","error")}},K=(v,R)=>{v.key==="Enter"&&R()},B=v=>d===v&&w==="add-vertex"?"graph-node highlighted-new":m&&(m.from===v||m.to===v)?"graph-node highlighted-edge":"graph-node",$=(v,R)=>m&&(m.from===v&&m.to===R||m.from===R&&m.to===v)?"graph-edge highlighted":"graph-edge";return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Te,{className:"icon-sm"}),n.jsx("span",{children:"What is an Adjacency List?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["An ",n.jsx("strong",{children:"Adjacency List"})," represents a graph using a collection of lists. Each vertex stores a list of its neighboring vertices."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(ve,{}),n.jsx("span",{children:"Like a contact list - each person has their own list of friends they're connected to!"})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Add Vertex"}),n.jsx("span",{className:"op-desc",children:"Create new list"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Add Edge"}),n.jsx("span",{className:"op-desc",children:"Append to list"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Remove Edge"}),n.jsx("span",{className:"op-desc",children:"Search & delete"}),n.jsx("span",{className:"op-complexity",children:"O(E)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Find Neighbors"}),n.jsx("span",{className:"op-desc",children:"Return list"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"Why Adjacency List?"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Space efficient for sparse graphs: O(V + E)"}),n.jsx("li",{children:"Fast iteration over neighbors"}),n.jsx("li",{children:"Easy to add vertices and edges"}),n.jsx("li",{children:"Supports weighted edges naturally"})]})]})]})]}),n.jsx(fe,{context:"Adjacency List graph representation, graph data structure"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Operations"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Load Preset"}),n.jsxs("div",{className:"btn-group preset-group",children:[n.jsx("button",{onClick:()=>I("simple"),className:"btn btn-preset",children:"Simple"}),n.jsx("button",{onClick:()=>I("tree"),className:"btn btn-preset",children:"Tree"}),n.jsx("button",{onClick:()=>I("cyclic"),className:"btn btn-preset",children:"Cyclic"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsxs("label",{htmlFor:"vertexInput",children:[n.jsx(hi,{size:14})," Add Vertex"]}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"vertexInput",value:r,onChange:v=>s(v.target.value.toUpperCase()),onKeyPress:v=>K(v,F),placeholder:"Name (e.g., A)",maxLength:3}),n.jsx("button",{onClick:F,className:"btn btn-add",children:"Add"})]}),n.jsx("span",{className:"operation-hint",children:"Creates a new empty list entry"})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Add/Remove Edge (with Weight)"}),n.jsxs("div",{className:"edge-inputs",children:[n.jsxs("select",{value:i,onChange:v=>a(v.target.value),className:"vertex-select",children:[n.jsx("option",{value:"",children:"From"}),e.vertices.map(v=>n.jsx("option",{value:v,children:v},v))]}),n.jsx("span",{className:"edge-arrow",children:"→"}),n.jsxs("select",{value:l,onChange:v=>o(v.target.value),className:"vertex-select",children:[n.jsx("option",{value:"",children:"To"}),e.vertices.map(v=>n.jsx("option",{value:v,children:v},v))]})]}),n.jsxs("div",{className:"weight-input",children:[n.jsx("label",{htmlFor:"weightInput",children:"Weight:"}),n.jsx("input",{type:"number",id:"weightInput",value:c,onChange:v=>h(v.target.value),min:"1",max:"99",className:"weight-field"})]}),n.jsxs("div",{className:"btn-group",children:[n.jsxs("button",{onClick:D,className:"btn btn-add",children:[n.jsx(hi,{size:14})," Add Edge"]}),n.jsxs("button",{onClick:A,className:"btn btn-remove",children:[n.jsx(ul,{size:14})," Remove"]})]}),n.jsx("span",{className:"operation-hint",children:"Appends neighbor to the vertex's list"})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:H,className:"btn btn-clear full-width",children:"Clear Graph"})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Vertices (V):"}),n.jsx("span",{className:"info-value",children:e.vertex_count||0})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Edges (E):"}),n.jsx("span",{className:"info-value",children:e.edge_count||0})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Space:"}),n.jsx("span",{className:"info-value",children:"O(V + E)"})]})]}),n.jsx(ze,{message:g})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Graph View"}),n.jsx("div",{className:"graph-container",children:e.vertices.length===0?n.jsx("div",{className:"graph-empty",children:"Graph is empty. Add vertices or load a preset!"}):n.jsxs("svg",{className:"graph-svg",viewBox:"0 0 450 300",children:[e.edges.map(([v,R,q],L)=>{const O=j[v],S=j[R];if(!O||!S)return null;const z=(O.x+S.x)/2,M=(O.y+S.y)/2;return n.jsxs("g",{children:[n.jsx("line",{x1:O.x,y1:O.y,x2:S.x,y2:S.y,className:$(v,R)}),n.jsx("circle",{cx:z,cy:M,r:12,className:"weight-bg"}),n.jsx("text",{x:z,y:M,className:"weight-label",dominantBaseline:"central",textAnchor:"middle",children:q})]},`edge-${L}`)}),e.vertices.map(v=>{const R=j[v];return R?n.jsxs("g",{className:B(v),children:[n.jsx("circle",{cx:R.x,cy:R.y,r:22,className:"node-circle"}),n.jsx("text",{x:R.x,y:R.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:v})]},v):null})]})}),n.jsxs("div",{className:"adjacency-list-section",children:[n.jsx("h3",{children:"Behind the Scenes: Adjacency List Structure"}),n.jsx("p",{className:"adj-explanation",children:"Each vertex has its own linked list of neighbors. When you add an edge A→B, we append B to A's list (and A to B's list for undirected graphs)."}),n.jsx("div",{className:"adj-list-visual",children:e.vertices.length===0?n.jsx("div",{className:"adj-empty",children:"No vertices in graph"}):e.vertices.map(v=>{const R=e.adjacency_list[v]||[],q=d===v||m&&(m.from===v||m.to===v);return n.jsxs("div",{className:`adj-row-visual ${q?"highlighted":""}`,children:[n.jsx("div",{className:"adj-vertex-box",children:n.jsx("span",{className:"adj-vertex-label",children:v})}),n.jsx("div",{className:"adj-pointer",children:n.jsx(de,{size:16})}),n.jsxs("div",{className:"adj-linked-list",children:[R.length===0?n.jsx("div",{className:"adj-null",children:"null"}):R.map(([L,O],S)=>{const z=m&&m.from===v&&m.to===L;return n.jsxs(Ve.Fragment,{children:[n.jsxs("div",{className:`adj-neighbor-node ${z?"highlighted":""}`,children:[n.jsx("span",{className:"neighbor-vertex",children:L}),n.jsxs("span",{className:"neighbor-weight",children:["w:",O]})]}),S<R.length-1&&n.jsx("div",{className:"adj-link",children:n.jsx(de,{size:14})})]},`${v}-${L}`)}),R.length>0&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"adj-link",children:n.jsx(de,{size:14})}),n.jsx("div",{className:"adj-null",children:"null"})]})]}),n.jsx("button",{className:"adj-remove-btn",onClick:()=>T(v),title:`Remove vertex ${v}`,children:n.jsx(ul,{size:14})})]},v)})}),n.jsxs("div",{className:"memory-hint",children:[n.jsx("strong",{children:"Memory Layout:"})," An array/hashmap stores vertex references, each pointing to the head of a linked list containing (neighbor, weight) pairs."]})]})]})]}),n.jsx(me,{dataStructure:"graph"})]})}function Gj(){const[e,t]=u.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=u.useState([]),[i,a]=u.useState([]),[l,o]=u.useState(""),[c,h]=u.useState(""),[d,p]=u.useState(""),[m,b]=u.useState("1"),[w,k]=u.useState(null),[j,f]=u.useState(null),[g,x]=u.useState({}),{message:E,showMessage:y}=Fe(3e3);u.useEffect(()=>{T()},[]),u.useEffect(()=>{e.vertices.length>0?(D(),F()):(s([]),a([]))},[e]),u.useEffect(()=>{if(w){const L=setTimeout(()=>{k(null)},2e3);return()=>clearTimeout(L)}},[w]);const F=u.useCallback(()=>{const M=Math.min(350,250)*.38,C={},P=e.vertices.length;e.vertices.forEach((_,N)=>{const V=2*Math.PI*N/P-Math.PI/2;C[_]={x:175+M*Math.cos(V),y:125+M*Math.sin(V)}}),x(C)},[e.vertices]),T=async()=>{try{const L=await ie("/api/graph");t(L)}catch(L){console.error("Error loading graph:",L)}},D=async()=>{try{const L=await ie("/api/graph/matrix");s(L.matrix),a(L.vertices)}catch(L){console.error("Error loading matrix:",L)}},A=async()=>{if(!l.trim()){y("Please enter a vertex name!","error");return}try{const L=await Z("/api/graph/vertex",{vertex:l.trim()});if(L.error){y(L.error,"error");return}t(L),y(`Added vertex '${l}' - Added new row and column to matrix`,"success"),o("")}catch{y("Error adding vertex","error")}},I=async L=>{try{const O=await pi(`/api/graph/vertex/${L}`);if(O.error){y(O.error,"error");return}t(O),y(`Removed vertex '${L}' - Removed row and column from matrix`,"success")}catch{y("Error removing vertex","error")}},H=async()=>{if(!c.trim()||!d.trim()){y("Please select both vertices!","error");return}const L=parseInt(m)||1;try{const O=await Z("/api/graph/edge",{from:c.trim(),to:d.trim(),weight:L});if(O.error){y(O.error,"error");return}t(O);const S=i.indexOf(c),z=i.indexOf(d);k({row:S,col:z}),y(`Added edge: matrix[${c}][${d}] = ${L}`,"success"),h(""),p(""),b("1")}catch{y("Error adding edge","error")}},K=async()=>{if(!c.trim()||!d.trim()){y("Please select both vertices!","error");return}try{const L=await pi("/api/graph/edge",{from:c.trim(),to:d.trim()});if(L.error){y(L.error,"error");return}t(L),y(`Removed edge: matrix[${c}][${d}] = 0`,"success"),h(""),p("")}catch{y("Error removing edge","error")}},B=()=>{var M;if(!c.trim()||!d.trim()){y("Please select both vertices to check!","error");return}const L=i.indexOf(c),O=i.indexOf(d);if(L===-1||O===-1){y("Vertex not found!","error");return}const S=((M=r[L])==null?void 0:M[O])||0,z=S>0;k({row:L,col:O}),f({from:c,to:d,exists:z,weight:S}),y(z?`Edge exists! matrix[${c}][${d}] = ${S} (O(1) lookup)`:`No edge: matrix[${c}][${d}] = 0 (O(1) lookup)`,z?"success":"info")},$=async L=>{try{const O=await Z(`/api/graph/preset/${L}`,{});if(O.error){y(O.error,"error");return}t(O),f(null),y(`Loaded '${L}' graph preset`,"success")}catch{y("Error loading preset","error")}},v=async()=>{try{const L=await Z("/api/graph/clear",{});t(L),s([]),a([]),f(null),y("Graph cleared","success")}catch{y("Error clearing graph","error")}},R=(L,O)=>{L.key==="Enter"&&O()},q=(L,O,S)=>{let z="matrix-cell";return w&&w.row===L&&w.col===O&&(z+=" highlighted"),w&&w.row===O&&w.col===L&&(z+=" highlighted"),S>0&&(z+=" has-edge"),L===O&&(z+=" diagonal"),z};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Te,{className:"icon-sm"}),n.jsx("span",{children:"What is an Adjacency Matrix?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["An ",n.jsx("strong",{children:"Adjacency Matrix"})," is a 2D array where ",n.jsx("code",{children:"matrix[i][j]"})," represents the edge weight between vertex i and j (0 if no edge)."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(ve,{}),n.jsx("span",{children:"Like a spreadsheet where rows and columns are people, and cells show if they're friends!"})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Check Edge"}),n.jsx("span",{className:"op-desc",children:"Direct lookup"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Add Edge"}),n.jsx("span",{className:"op-desc",children:"Set cell value"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Add Vertex"}),n.jsx("span",{className:"op-desc",children:"Resize matrix"}),n.jsx("span",{className:"op-complexity",children:"O(V²)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Space"}),n.jsx("span",{className:"op-desc",children:"2D array"}),n.jsx("span",{className:"op-complexity",children:"O(V²)"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"When to Use:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Dense graphs (many edges)"}),n.jsx("li",{children:"Fast edge existence checks needed"}),n.jsx("li",{children:"Small number of vertices"}),n.jsx("li",{children:"Frequent edge weight updates"})]})]})]})]}),n.jsx(fe,{context:"Adjacency Matrix graph representation"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Operations"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Load Preset"}),n.jsxs("div",{className:"btn-group preset-group",children:[n.jsx("button",{onClick:()=>$("simple"),className:"btn btn-preset",children:"Simple"}),n.jsx("button",{onClick:()=>$("complete"),className:"btn btn-preset",children:"Complete"}),n.jsx("button",{onClick:()=>$("cyclic"),className:"btn btn-preset",children:"Cyclic"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsxs("label",{htmlFor:"vertexInput",children:[n.jsx(hi,{size:14})," Add Vertex"]}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"vertexInput",value:l,onChange:L=>o(L.target.value.toUpperCase()),onKeyPress:L=>R(L,A),placeholder:"Name (e.g., A)",maxLength:3}),n.jsx("button",{onClick:A,className:"btn btn-add",children:"Add"})]}),n.jsx("span",{className:"operation-hint",children:"Adds new row & column (O(V²) resize)"})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Edge Operations"}),n.jsxs("div",{className:"edge-inputs",children:[n.jsxs("select",{value:c,onChange:L=>h(L.target.value),className:"vertex-select",children:[n.jsx("option",{value:"",children:"From"}),e.vertices.map(L=>n.jsx("option",{value:L,children:L},L))]}),n.jsx("span",{className:"edge-arrow",children:"→"}),n.jsxs("select",{value:d,onChange:L=>p(L.target.value),className:"vertex-select",children:[n.jsx("option",{value:"",children:"To"}),e.vertices.map(L=>n.jsx("option",{value:L,children:L},L))]})]}),n.jsxs("div",{className:"weight-input",children:[n.jsx("label",{htmlFor:"weightInput",children:"Weight:"}),n.jsx("input",{type:"number",id:"weightInput",value:m,onChange:L=>b(L.target.value),min:"1",max:"99",className:"weight-field"})]}),n.jsxs("div",{className:"btn-group",children:[n.jsxs("button",{onClick:H,className:"btn btn-add",children:[n.jsx(hi,{size:14})," Add"]}),n.jsxs("button",{onClick:K,className:"btn btn-remove",children:[n.jsx(ul,{size:14})," Remove"]}),n.jsxs("button",{onClick:B,className:"btn btn-check",children:[n.jsx(dr,{size:14})," Check"]})]}),n.jsx("span",{className:"operation-hint",children:"O(1) direct cell access"})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:v,className:"btn btn-clear full-width",children:"Clear Graph"})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Vertices (V):"}),n.jsx("span",{className:"info-value",children:e.vertex_count||0})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Edges (E):"}),n.jsx("span",{className:"info-value",children:e.edge_count||0})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Matrix Size:"}),n.jsxs("span",{className:"info-value",children:[i.length," × ",i.length]})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Space Used:"}),n.jsxs("span",{className:"info-value",children:["O(",i.length,"²) = ",i.length*i.length," cells"]})]})]}),j&&n.jsxs("div",{className:`lookup-result ${j.exists?"exists":"not-exists"}`,children:[n.jsx("strong",{children:"Lookup Result:"}),n.jsxs("code",{children:["matrix[",j.from,"][",j.to,"] = ",j.weight]}),n.jsx("span",{children:j.exists?"Edge exists!":"No edge"})]}),n.jsx(ze,{message:E})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsxs("div",{className:"mini-graph-section",children:[n.jsx("h3",{children:"Graph View"}),n.jsx("div",{className:"mini-graph-container",children:e.vertices.length===0?n.jsx("div",{className:"graph-empty-mini",children:"Empty graph"}):n.jsxs("svg",{className:"mini-graph-svg",viewBox:"0 0 350 250",children:[e.edges.map(([L,O,S],z)=>{const M=g[L],C=g[O];return!M||!C?null:n.jsx("line",{x1:M.x,y1:M.y,x2:C.x,y2:C.y,className:"mini-edge"},`edge-${z}`)}),e.vertices.map(L=>{const O=g[L];return O?n.jsxs("g",{className:"mini-node",children:[n.jsx("circle",{cx:O.x,cy:O.y,r:18}),n.jsx("text",{x:O.x,y:O.y,dominantBaseline:"central",textAnchor:"middle",children:L})]},L):null})]})})]}),n.jsxs("div",{className:"matrix-section",children:[n.jsx("h3",{children:"Adjacency Matrix"}),n.jsxs("p",{className:"matrix-explanation",children:["Each cell ",n.jsx("code",{children:"matrix[row][col]"})," stores the edge weight (0 = no edge). Undirected graphs have symmetric matrices."]}),i.length===0?n.jsx("div",{className:"matrix-empty",children:"No vertices in graph. Add vertices or load a preset!"}):n.jsx("div",{className:"matrix-container",children:n.jsxs("table",{className:"adjacency-matrix",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{className:"matrix-corner"}),i.map((L,O)=>n.jsx("th",{className:"matrix-header col-header",children:L},L))]})}),n.jsx("tbody",{children:i.map((L,O)=>n.jsxs("tr",{children:[n.jsxs("th",{className:"matrix-header row-header",children:[L,n.jsx("button",{className:"remove-vertex-btn",onClick:()=>I(L),title:`Remove ${L}`,children:"×"})]}),i.map((S,z)=>{var M,C,P;return n.jsx("td",{className:q(O,z,(M=r[O])==null?void 0:M[z]),title:`matrix[${L}][${S}] = ${((C=r[O])==null?void 0:C[z])||0}`,children:((P=r[O])==null?void 0:P[z])||0},`${O}-${z}`)})]},L))})]})}),n.jsxs("div",{className:"comparison-hint",children:[n.jsx("strong",{children:"vs Adjacency List:"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("span",{className:"pro",children:"Pro:"})," O(1) edge lookup vs O(degree) for list"]}),n.jsxs("li",{children:[n.jsx("span",{className:"con",children:"Con:"})," O(V²) space vs O(V+E) for list"]}),n.jsxs("li",{children:[n.jsx("span",{className:"pro",children:"Pro:"})," Better for dense graphs (E ≈ V²)"]}),n.jsxs("li",{children:[n.jsx("span",{className:"con",children:"Con:"})," Wastes space for sparse graphs"]})]})]})]})]})]}),n.jsx(me,{dataStructure:"graph"})]})}function Qj(){const[e,t]=u.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=u.useState(""),[i,a]=u.useState([]),[l,o]=u.useState([]),[c,h]=u.useState(-1),[d,p]=u.useState(!1),[m,b]=u.useState(!1),[w,k]=u.useState(new Set),[j,f]=u.useState(null),[g,x]=u.useState([]),[E,y]=u.useState({}),{message:F,showMessage:T}=Fe(3e3),D=u.useRef(null),A=u.useRef(0);u.useEffect(()=>{H()},[]),u.useEffect(()=>{e.vertices.length>0&&I()},[e.vertices]);const I=u.useCallback(()=>{const P=Math.min(500,350)*.35,_={},N=e.vertices.length;e.vertices.forEach((V,G)=>{const W=2*Math.PI*G/N-Math.PI/2;_[V]={x:250+P*Math.cos(W),y:175+P*Math.sin(W)}}),y(_)},[e.vertices]),H=async()=>{try{const S=await ie("/api/graph");S.vertices.length===0?await K("simple"):t(S)}catch(S){console.error("Error loading graph:",S)}},K=async S=>{try{const z=await Z(`/api/graph/preset/${S}`,{});if(z.error){T(z.error,"error");return}t(z),L(),T(`Loaded '${S}' preset`,"success")}catch{T("Error loading preset","error")}},B=async()=>{if(!r.trim()){T("Please select a starting vertex!","error");return}try{const S=await ie(`/api/graph/bfs/${r}`);if(S.error){T(S.error,"error");return}a(S.traversal),o(S.steps),T("Starting BFS traversal...","info"),$(S.steps)}catch{T("Error running BFS","error")}},$=S=>{D.current&&clearInterval(D.current),p(!0),b(!1),k(new Set),f(null),x([]),h(-1),A.current=0,D.current=setInterval(()=>{if(A.current>=S.length){clearInterval(D.current),p(!1),f(null),T(`BFS Complete: ${i.join(" → ")}`,"success");return}const z=S[A.current];h(A.current),z.action==="visit"?(f(z.vertex),k(new Set(z.visited)),x(z.queue||[])):z.action==="enqueue"&&x(z.queue||[]),A.current++},1e3)},v=()=>{m?(b(!1),R()):(b(!0),D.current&&clearInterval(D.current))},R=()=>{D.current&&clearInterval(D.current),D.current=setInterval(()=>{if(A.current>=l.length){clearInterval(D.current),p(!1),f(null);return}const S=l[A.current];h(A.current),S.action==="visit"?(f(S.vertex),k(new Set(S.visited)),x(S.queue||[])):S.action==="enqueue"&&x(S.queue||[]),A.current++},1e3)},q=()=>{if(A.current>=l.length)return;const S=l[A.current];h(A.current),S.action==="visit"?(f(S.vertex),k(new Set(S.visited)),x(S.queue||[])):S.action==="enqueue"&&x(S.queue||[]),A.current++,A.current>=l.length&&(p(!1),f(null))},L=()=>{D.current&&clearInterval(D.current),a([]),o([]),h(-1),k(new Set),f(null),x([]),p(!1),b(!1),A.current=0},O=S=>j===S?"graph-node current":w.has(S)?"graph-node visited":g.includes(S)?"graph-node queued":"graph-node";return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Te,{className:"icon-sm"}),n.jsx("span",{children:"What is Breadth-First Search?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"BFS"})," explores a graph level by level, visiting all neighbors of a node before moving to the next level."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(ve,{}),n.jsx("span",{children:"Like ripples spreading outward when you drop a stone in water!"})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Time"}),n.jsx("span",{className:"op-desc",children:"Visit all nodes"}),n.jsx("span",{className:"op-complexity",children:"O(V+E)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Space"}),n.jsx("span",{className:"op-desc",children:"Queue storage"}),n.jsx("span",{className:"op-complexity",children:"O(V)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Structure"}),n.jsx("span",{className:"op-desc",children:"Uses a Queue"}),n.jsx("span",{className:"op-complexity",children:"FIFO"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"Common Uses:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Shortest path in unweighted graphs"}),n.jsx("li",{children:"Level-order tree traversal"}),n.jsx("li",{children:"Finding connected components"}),n.jsx("li",{children:"Web crawlers"})]})]})]})]}),n.jsx(fe,{context:"Breadth-First Search (BFS) algorithm on graphs"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"BFS Controls"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Load Graph Preset"}),n.jsxs("div",{className:"btn-group preset-group",children:[n.jsx("button",{onClick:()=>K("simple"),className:"btn btn-preset",disabled:d,children:"Simple"}),n.jsx("button",{onClick:()=>K("tree"),className:"btn btn-preset",disabled:d,children:"Tree"}),n.jsx("button",{onClick:()=>K("cyclic"),className:"btn btn-preset",disabled:d,children:"Cyclic"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Start BFS From"}),n.jsxs("select",{value:r,onChange:S=>s(S.target.value),className:"vertex-select full-width",disabled:d,children:[n.jsx("option",{value:"",children:"Select start vertex"}),e.vertices.map(S=>n.jsx("option",{value:S,children:S},S))]})]}),n.jsx("div",{className:"operation-group",children:n.jsxs("div",{className:"btn-group",children:[n.jsxs("button",{onClick:B,className:"btn btn-bfs",disabled:d&&!m,children:[n.jsx($e,{size:14})," Run BFS"]}),d&&n.jsx("button",{onClick:v,className:"btn btn-pause",children:m?n.jsx($e,{size:14}):n.jsx(St,{size:14})}),m&&n.jsx("button",{onClick:q,className:"btn btn-step",children:n.jsx(Ct,{size:14})}),n.jsx("button",{onClick:L,className:"btn btn-reset",children:n.jsx(at,{size:14})})]})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Vertices:"}),n.jsx("span",{className:"info-value",children:e.vertex_count||e.vertices.length})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Edges:"}),n.jsx("span",{className:"info-value",children:e.edge_count||0})]}),g.length>0&&n.jsxs("div",{className:"info-item queue-display",children:[n.jsx("span",{className:"info-label",children:"Queue:"}),n.jsxs("span",{className:"info-value queue-items",children:["[",g.join(", "),"]"]})]}),i.length>0&&n.jsxs("div",{className:"info-item traversal-result",children:[n.jsx("span",{className:"info-label",children:"Order:"}),n.jsx("span",{className:"info-value",children:i.join(" → ")})]})]}),n.jsx(ze,{message:F}),n.jsxs("div",{className:"legend",children:[n.jsx("h3",{children:"Legend"}),n.jsxs("div",{className:"legend-items",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color unvisited"}),n.jsx("span",{children:"Unvisited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color queued"}),n.jsx("span",{children:"In Queue"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color current"}),n.jsx("span",{children:"Current"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color visited"}),n.jsx("span",{children:"Visited"})]})]})]})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"BFS Visualization"}),n.jsx("div",{className:"graph-container",children:e.vertices.length===0?n.jsx("div",{className:"graph-empty",children:"Loading graph..."}):n.jsxs("svg",{className:"graph-svg",viewBox:"0 0 500 350",children:[e.edges.map(([S,z],M)=>{const C=E[S],P=E[z];return!C||!P?null:n.jsx("line",{x1:C.x,y1:C.y,x2:P.x,y2:P.y,className:"graph-edge"},`edge-${M}`)}),e.vertices.map(S=>{const z=E[S];return z?n.jsxs("g",{className:O(S),children:[n.jsx("circle",{cx:z.x,cy:z.y,r:25,className:"node-circle"}),n.jsx("text",{x:z.x,y:z.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:S})]},S):null})]})}),n.jsxs("div",{className:"algorithm-steps",children:[n.jsx("h3",{children:"BFS Algorithm Steps"}),n.jsx("div",{className:"steps-content",children:n.jsxs("ol",{children:[n.jsx("li",{className:c>=0?"active":"",children:"Start at the selected vertex"}),n.jsx("li",{className:g.length>0?"active":"",children:"Add it to a queue and mark as visited"}),n.jsx("li",{className:j?"active":"",children:"Dequeue a vertex and explore its neighbors"}),n.jsx("li",{children:"Add unvisited neighbors to the queue"}),n.jsx("li",{children:"Repeat until queue is empty"})]})})]})]})]}),n.jsx(me,{dataStructure:"bfs"})]})}function Xj(){const[e,t]=u.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=u.useState(""),[i,a]=u.useState([]),[l,o]=u.useState([]),[c,h]=u.useState(-1),[d,p]=u.useState(!1),[m,b]=u.useState(!1),[w,k]=u.useState(new Set),[j,f]=u.useState(null),[g,x]=u.useState([]),[E,y]=u.useState({}),{message:F,showMessage:T}=Fe(3e3),D=u.useRef(null),A=u.useRef(0);u.useEffect(()=>{H()},[]),u.useEffect(()=>{e.vertices.length>0&&I()},[e.vertices]);const I=u.useCallback(()=>{const P=Math.min(500,350)*.35,_={},N=e.vertices.length;e.vertices.forEach((V,G)=>{const W=2*Math.PI*G/N-Math.PI/2;_[V]={x:250+P*Math.cos(W),y:175+P*Math.sin(W)}}),y(_)},[e.vertices]),H=async()=>{try{const S=await ie("/api/graph");S.vertices.length===0?await K("simple"):t(S)}catch(S){console.error("Error loading graph:",S)}},K=async S=>{try{const z=await Z(`/api/graph/preset/${S}`,{});if(z.error){T(z.error,"error");return}t(z),L(),T(`Loaded '${S}' preset`,"success")}catch{T("Error loading preset","error")}},B=async()=>{if(!r.trim()){T("Please select a starting vertex!","error");return}try{const S=await ie(`/api/graph/dfs/${r}`);if(S.error){T(S.error,"error");return}a(S.traversal),o(S.steps),T("Starting DFS traversal...","info"),$(S.steps)}catch{T("Error running DFS","error")}},$=S=>{D.current&&clearInterval(D.current),p(!0),b(!1),k(new Set),f(null),x([]),h(-1),A.current=0,D.current=setInterval(()=>{if(A.current>=S.length){clearInterval(D.current),p(!1),f(null),T(`DFS Complete: ${i.join(" → ")}`,"success");return}const z=S[A.current];h(A.current),z.action==="visit"?(f(z.vertex),k(new Set(z.visited)),x(z.stack||[])):z.action==="push"&&x(z.stack||[]),A.current++},1e3)},v=()=>{m?(b(!1),R()):(b(!0),D.current&&clearInterval(D.current))},R=()=>{D.current&&clearInterval(D.current),D.current=setInterval(()=>{if(A.current>=l.length){clearInterval(D.current),p(!1),f(null);return}const S=l[A.current];h(A.current),S.action==="visit"?(f(S.vertex),k(new Set(S.visited)),x(S.stack||[])):S.action==="push"&&x(S.stack||[]),A.current++},1e3)},q=()=>{if(A.current>=l.length)return;const S=l[A.current];h(A.current),S.action==="visit"?(f(S.vertex),k(new Set(S.visited)),x(S.stack||[])):S.action==="push"&&x(S.stack||[]),A.current++,A.current>=l.length&&(p(!1),f(null))},L=()=>{D.current&&clearInterval(D.current),a([]),o([]),h(-1),k(new Set),f(null),x([]),p(!1),b(!1),A.current=0},O=S=>j===S?"graph-node current":w.has(S)?"graph-node visited":g.includes(S)?"graph-node stacked":"graph-node";return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Te,{className:"icon-sm"}),n.jsx("span",{children:"What is Depth-First Search?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"DFS"})," explores a graph by going as deep as possible along each branch before backtracking."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(ve,{}),n.jsx("span",{children:"Like exploring a maze by following one path to its end before trying another!"})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Time"}),n.jsx("span",{className:"op-desc",children:"Visit all nodes"}),n.jsx("span",{className:"op-complexity",children:"O(V+E)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Space"}),n.jsx("span",{className:"op-desc",children:"Stack storage"}),n.jsx("span",{className:"op-complexity",children:"O(V)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Structure"}),n.jsx("span",{className:"op-desc",children:"Uses a Stack"}),n.jsx("span",{className:"op-complexity",children:"LIFO"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"Common Uses:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Topological sorting"}),n.jsx("li",{children:"Cycle detection"}),n.jsx("li",{children:"Solving mazes and puzzles"}),n.jsx("li",{children:"Finding connected components"})]})]})]})]}),n.jsx(fe,{context:"Depth-First Search (DFS) algorithm on graphs"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"DFS Controls"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Load Graph Preset"}),n.jsxs("div",{className:"btn-group preset-group",children:[n.jsx("button",{onClick:()=>K("simple"),className:"btn btn-preset",disabled:d,children:"Simple"}),n.jsx("button",{onClick:()=>K("tree"),className:"btn btn-preset",disabled:d,children:"Tree"}),n.jsx("button",{onClick:()=>K("cyclic"),className:"btn btn-preset",disabled:d,children:"Cyclic"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Start DFS From"}),n.jsxs("select",{value:r,onChange:S=>s(S.target.value),className:"vertex-select full-width",disabled:d,children:[n.jsx("option",{value:"",children:"Select start vertex"}),e.vertices.map(S=>n.jsx("option",{value:S,children:S},S))]})]}),n.jsx("div",{className:"operation-group",children:n.jsxs("div",{className:"btn-group",children:[n.jsxs("button",{onClick:B,className:"btn btn-dfs",disabled:d&&!m,children:[n.jsx($e,{size:14})," Run DFS"]}),d&&n.jsx("button",{onClick:v,className:"btn btn-pause",children:m?n.jsx($e,{size:14}):n.jsx(St,{size:14})}),m&&n.jsx("button",{onClick:q,className:"btn btn-step",children:n.jsx(Ct,{size:14})}),n.jsx("button",{onClick:L,className:"btn btn-reset",children:n.jsx(at,{size:14})})]})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Vertices:"}),n.jsx("span",{className:"info-value",children:e.vertex_count||e.vertices.length})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Edges:"}),n.jsx("span",{className:"info-value",children:e.edge_count||0})]}),g.length>0&&n.jsxs("div",{className:"info-item stack-display",children:[n.jsx("span",{className:"info-label",children:"Stack:"}),n.jsxs("span",{className:"info-value stack-items",children:["[",g.join(", "),"]"]})]}),i.length>0&&n.jsxs("div",{className:"info-item traversal-result",children:[n.jsx("span",{className:"info-label",children:"Order:"}),n.jsx("span",{className:"info-value",children:i.join(" → ")})]})]}),n.jsx(ze,{message:F}),n.jsxs("div",{className:"legend",children:[n.jsx("h3",{children:"Legend"}),n.jsxs("div",{className:"legend-items",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color unvisited"}),n.jsx("span",{children:"Unvisited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color stacked"}),n.jsx("span",{children:"In Stack"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color current"}),n.jsx("span",{children:"Current"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color visited"}),n.jsx("span",{children:"Visited"})]})]})]})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"DFS Visualization"}),n.jsx("div",{className:"graph-container",children:e.vertices.length===0?n.jsx("div",{className:"graph-empty",children:"Loading graph..."}):n.jsxs("svg",{className:"graph-svg",viewBox:"0 0 500 350",children:[e.edges.map(([S,z],M)=>{const C=E[S],P=E[z];return!C||!P?null:n.jsx("line",{x1:C.x,y1:C.y,x2:P.x,y2:P.y,className:"graph-edge"},`edge-${M}`)}),e.vertices.map(S=>{const z=E[S];return z?n.jsxs("g",{className:O(S),children:[n.jsx("circle",{cx:z.x,cy:z.y,r:25,className:"node-circle"}),n.jsx("text",{x:z.x,y:z.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:S})]},S):null})]})}),n.jsxs("div",{className:"algorithm-steps",children:[n.jsx("h3",{children:"DFS Algorithm Steps"}),n.jsx("div",{className:"steps-content",children:n.jsxs("ol",{children:[n.jsx("li",{className:c>=0?"active":"",children:"Start at the selected vertex"}),n.jsx("li",{className:g.length>0?"active":"",children:"Push it to a stack and mark as visited"}),n.jsx("li",{className:j?"active":"",children:"Pop a vertex and explore one unvisited neighbor"}),n.jsx("li",{children:"Push the neighbor to stack and repeat"}),n.jsx("li",{children:"Backtrack when no unvisited neighbors remain"})]})})]})]})]}),n.jsx(me,{dataStructure:"dfs"})]})}function Yj(){const[e,t]=u.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=u.useState(""),[i,a]=u.useState(""),[l,o]=u.useState({}),[c,h]=u.useState({}),[d,p]=u.useState([]),[m,b]=u.useState(-1),[w,k]=u.useState(!1),[j,f]=u.useState(!1),[g,x]=u.useState(new Set),[E,y]=u.useState(null),[F,T]=u.useState(null),[D,A]=u.useState({}),{message:I,showMessage:H}=Fe(3e3),K=u.useRef(null),B=u.useRef(0);u.useEffect(()=>{v()},[]),u.useEffect(()=>{e.vertices.length>0&&$()},[e.vertices]);const $=u.useCallback(()=>{const J=Math.min(500,350)*.35,ne={},ge=e.vertices.length;e.vertices.forEach((_e,Pn)=>{const lt=2*Math.PI*Pn/ge-Math.PI/2;ne[_e]={x:250+J*Math.cos(lt),y:175+J*Math.sin(lt)}}),A(ne)},[e.vertices]),v=async()=>{try{const N=await ie("/api/graph");N.vertices.length===0?await R("weighted"):t(N)}catch(N){console.error("Error loading graph:",N)}},R=async N=>{try{const V=await Z(`/api/graph/preset/${N}`,{});if(V.error){H(V.error,"error");return}t(V),M(),H(`Loaded '${N}' preset`,"success")}catch{H("Error loading preset","error")}},q=async()=>{if(!r){H("Please select a start vertex!","error");return}try{const N=i?`/api/graph/dijkstra/${r}?end=${i}`:`/api/graph/dijkstra/${r}`,V=await ie(N);if(V.error){H(V.error,"error");return}o(V.distances),h(V.paths),p(V.steps),H("Starting Dijkstra's algorithm...","info"),L(V.steps)}catch{H("Error running Dijkstra's algorithm","error")}},L=N=>{K.current&&clearInterval(K.current),k(!0),f(!1),x(new Set),y(null),T(null),b(-1),B.current=0,K.current=setInterval(()=>{if(B.current>=N.length){clearInterval(K.current),k(!1),y(null),T(null),H("Dijkstra's algorithm complete!","success");return}const V=N[B.current];b(B.current),o(V.distances||{}),x(new Set(V.visited||[])),V.action==="visit"?(y(V.current),T(null)):(V.action==="check"||V.action==="update")&&(y(V.current),T({from:V.current,to:V.neighbor})),B.current++},1200)},O=()=>{j?(f(!1),S()):(f(!0),K.current&&clearInterval(K.current))},S=()=>{K.current&&clearInterval(K.current),K.current=setInterval(()=>{if(B.current>=d.length){clearInterval(K.current),k(!1),y(null),T(null);return}const N=d[B.current];b(B.current),o(N.distances||{}),x(new Set(N.visited||[])),N.action==="visit"?(y(N.current),T(null)):(N.action==="check"||N.action==="update")&&(y(N.current),T({from:N.current,to:N.neighbor})),B.current++},1200)},z=()=>{if(B.current>=d.length)return;const N=d[B.current];b(B.current),o(N.distances||{}),x(new Set(N.visited||[])),N.action==="visit"?(y(N.current),T(null)):(N.action==="check"||N.action==="update")&&(y(N.current),T({from:N.current,to:N.neighbor})),B.current++,B.current>=d.length&&(k(!1),y(null),T(null))},M=()=>{K.current&&clearInterval(K.current),o({}),h({}),p([]),b(-1),x(new Set),y(null),T(null),k(!1),f(!1),B.current=0},C=N=>E===N?"graph-node current":g.has(N)?"graph-node visited":"graph-node",P=(N,V)=>F&&(F.from===N&&F.to===V||F.from===V&&F.to===N)?"graph-edge checking":"graph-edge",_=()=>m>=0&&m<d.length?d[m].message:"";return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Te,{className:"icon-sm"}),n.jsx("span",{children:"What is Dijkstra's Algorithm?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"Dijkstra's Algorithm"})," finds the shortest path from a source vertex to all other vertices in a weighted graph with non-negative weights."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(ve,{}),n.jsx("span",{children:"Like GPS finding the quickest route - always picks the closest unvisited location!"})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Time"}),n.jsx("span",{className:"op-desc",children:"With min-heap"}),n.jsx("span",{className:"op-complexity",children:"O((V+E)logV)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Space"}),n.jsx("span",{className:"op-desc",children:"Distance array"}),n.jsx("span",{className:"op-complexity",children:"O(V)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Strategy"}),n.jsx("span",{className:"op-desc",children:"Greedy"}),n.jsx("span",{className:"op-complexity",children:"Min first"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"Common Uses:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"GPS navigation systems"}),n.jsx("li",{children:"Network routing protocols"}),n.jsx("li",{children:"Social network analysis"}),n.jsx("li",{children:"Game pathfinding"})]})]})]})]}),n.jsx(fe,{context:"Dijkstra's shortest path algorithm"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Dijkstra's Algorithm"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Load Preset"}),n.jsxs("div",{className:"btn-group preset-group",children:[n.jsx("button",{onClick:()=>R("weighted"),className:"btn btn-preset",disabled:w,children:"Weighted"}),n.jsx("button",{onClick:()=>R("simple"),className:"btn btn-preset",disabled:w,children:"Simple"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Start Vertex"}),n.jsxs("select",{value:r,onChange:N=>s(N.target.value),className:"vertex-select full-width",disabled:w,children:[n.jsx("option",{value:"",children:"Select start"}),e.vertices.map(N=>n.jsx("option",{value:N,children:N},N))]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"End Vertex (Optional)"}),n.jsxs("select",{value:i,onChange:N=>a(N.target.value),className:"vertex-select full-width",disabled:w,children:[n.jsx("option",{value:"",children:"All vertices"}),e.vertices.map(N=>n.jsx("option",{value:N,children:N},N))]})]}),n.jsx("div",{className:"operation-group",children:n.jsxs("div",{className:"btn-group",children:[n.jsxs("button",{onClick:q,className:"btn btn-dijkstra",disabled:w&&!j,children:[n.jsx($e,{size:14})," Run"]}),w&&n.jsx("button",{onClick:O,className:"btn btn-pause",children:j?n.jsx($e,{size:14}):n.jsx(St,{size:14})}),j&&n.jsx("button",{onClick:z,className:"btn btn-step",children:n.jsx(Ct,{size:14})}),n.jsx("button",{onClick:M,className:"btn btn-reset",children:n.jsx(at,{size:14})})]})}),Object.keys(l).length>0&&n.jsxs("div",{className:"distance-table",children:[n.jsxs("h3",{children:["Distances from ",r]}),n.jsx("div",{className:"distance-grid",children:e.vertices.map(N=>n.jsxs("div",{className:`distance-item ${g.has(N)?"visited":""} ${E===N?"current":""}`,children:[n.jsx("span",{className:"vertex-label",children:N}),n.jsx("span",{className:"distance-value",children:l[N]==="inf"||l[N]===null?"∞":l[N]})]},N))})]}),m>=0&&n.jsxs("div",{className:"current-step-box",children:[n.jsxs("strong",{children:["Step ",m+1,":"]}),n.jsx("p",{children:_()})]}),n.jsx(ze,{message:I}),n.jsxs("div",{className:"legend",children:[n.jsx("h3",{children:"Legend"}),n.jsxs("div",{className:"legend-items",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color unvisited"}),n.jsx("span",{children:"Unvisited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color current"}),n.jsx("span",{children:"Current"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color visited"}),n.jsx("span",{children:"Visited"})]})]})]})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Visualization"}),n.jsx("div",{className:"graph-container",children:e.vertices.length===0?n.jsx("div",{className:"graph-empty",children:"Loading graph..."}):n.jsxs("svg",{className:"graph-svg",viewBox:"0 0 500 350",children:[e.edges.map(([N,V,G],W)=>{const J=D[N],ne=D[V];if(!J||!ne)return null;const ge=(J.x+ne.x)/2,_e=(J.y+ne.y)/2;return n.jsxs("g",{children:[n.jsx("line",{x1:J.x,y1:J.y,x2:ne.x,y2:ne.y,className:P(N,V)}),n.jsx("circle",{cx:ge,cy:_e,r:12,className:"weight-bg"}),n.jsx("text",{x:ge,y:_e,className:"weight-label",dominantBaseline:"central",textAnchor:"middle",children:G})]},`edge-${W}`)}),e.vertices.map(N=>{const V=D[N];return V?n.jsxs("g",{className:C(N),children:[n.jsx("circle",{cx:V.x,cy:V.y,r:25,className:"node-circle"}),n.jsx("text",{x:V.x,y:V.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:N}),l[N]!==void 0&&n.jsxs("text",{x:V.x,y:V.y+38,className:"distance-label",dominantBaseline:"central",textAnchor:"middle",children:["d=",l[N]==="inf"||l[N]===null?"∞":l[N]]})]},N):null})]})}),Object.keys(c).length>0&&!w&&n.jsxs("div",{className:"paths-section",children:[n.jsxs("h3",{children:["Shortest Paths from ",r]}),n.jsx("div",{className:"paths-list",children:Object.entries(c).map(([N,V])=>n.jsxs("div",{className:"path-item",children:[n.jsxs("span",{className:"path-target",children:[N,":"]}),n.jsx("span",{className:"path-route",children:V.join(" → ")}),n.jsxs("span",{className:"path-distance",children:["(dist: ",l[N]===null?"∞":l[N],")"]})]},N))})]})]})]}),n.jsx(me,{dataStructure:"dijkstra"})]})}function Jj(){const[e,t]=u.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=u.useState(""),[i,a]=u.useState([]),[l,o]=u.useState(0),[c,h]=u.useState([]),[d,p]=u.useState(-1),[m,b]=u.useState(!1),[w,k]=u.useState(!1),[j,f]=u.useState(new Set),[g,x]=u.useState(null),[E,y]=u.useState(null),[F,T]=u.useState({}),{message:D,showMessage:A}=Fe(3e3),I=u.useRef(null),H=u.useRef(0);u.useEffect(()=>{B()},[]),u.useEffect(()=>{e.vertices.length>0&&K()},[e.vertices]);const K=u.useCallback(()=>{const W=Math.min(500,350)*.35,J={},ne=e.vertices.length;e.vertices.forEach((ge,_e)=>{const Pn=2*Math.PI*_e/ne-Math.PI/2;J[ge]={x:250+W*Math.cos(Pn),y:175+W*Math.sin(Pn)}}),T(J)},[e.vertices]),B=async()=>{try{const _=await ie("/api/graph");_.vertices.length===0?await $("weighted"):t(_)}catch(_){console.error("Error loading graph:",_)}},$=async _=>{try{const N=await Z(`/api/graph/preset/${_}`,{});if(N.error){A(N.error,"error");return}t(N),S(),A(`Loaded '${_}' preset`,"success")}catch{A("Error loading preset","error")}},v=async()=>{try{const _=r?`/api/graph/mst?start=${r}`:"/api/graph/mst",N=await ie(_);if(N.error){A(N.error,"error");return}h(N.steps),A("Starting Prim's MST algorithm...","info"),R(N.steps,N.mst_edges,N.total_weight)}catch{A("Error running MST algorithm","error")}},R=(_,N,V)=>{I.current&&clearInterval(I.current),b(!0),k(!1),f(new Set),a([]),o(0),x(null),y(null),p(-1),H.current=0,I.current=setInterval(()=>{if(H.current>=_.length){clearInterval(I.current),b(!1),x(null),y(null),a(N),o(V),A(`MST complete! Total weight: ${V}`,"success");return}const G=_[H.current];p(H.current),f(new Set(G.visited||[])),a(G.mst_edges||[]),o(G.total_weight||0),G.action==="add"?(x(G.current),y(null)):G.action==="consider"&&(x(G.current),y({from:G.current,to:G.neighbor,weight:G.weight})),H.current++},1e3)},q=()=>{w?(k(!1),L()):(k(!0),I.current&&clearInterval(I.current))},L=()=>{I.current&&clearInterval(I.current),I.current=setInterval(()=>{if(H.current>=c.length){clearInterval(I.current),b(!1),x(null),y(null);return}const _=c[H.current];p(H.current),f(new Set(_.visited||[])),a(_.mst_edges||[]),o(_.total_weight||0),_.action==="add"?(x(_.current),y(null)):_.action==="consider"&&(x(_.current),y({from:_.current,to:_.neighbor,weight:_.weight})),H.current++},1e3)},O=()=>{if(H.current>=c.length)return;const _=c[H.current];p(H.current),f(new Set(_.visited||[])),a(_.mst_edges||[]),o(_.total_weight||0),_.action==="add"?(x(_.current),y(null)):_.action==="consider"&&(x(_.current),y({from:_.current,to:_.neighbor,weight:_.weight})),H.current++,H.current>=c.length&&(b(!1),x(null),y(null))},S=()=>{I.current&&clearInterval(I.current),a([]),o(0),h([]),p(-1),f(new Set),x(null),y(null),b(!1),k(!1),H.current=0},z=_=>g===_?"graph-node current":j.has(_)?"graph-node visited":"graph-node",M=(_,N)=>i.some(([V,G])=>V===_&&G===N||V===N&&G===_),C=(_,N)=>E&&(E.from===_&&E.to===N||E.from===N&&E.to===_)?"graph-edge considering":M(_,N)?"graph-edge mst":"graph-edge",P=()=>d>=0&&d<c.length?c[d].message:"";return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Te,{className:"icon-sm"}),n.jsx("span",{children:"What is Minimum Spanning Tree?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["A ",n.jsx("strong",{children:"Minimum Spanning Tree (MST)"})," connects all vertices with the minimum total edge weight, without any cycles."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(ve,{}),n.jsx("span",{children:"Like finding the cheapest way to connect all cities with roads!"})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Time"}),n.jsx("span",{className:"op-desc",children:"Prim's with heap"}),n.jsx("span",{className:"op-complexity",children:"O((V+E)logV)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Edges"}),n.jsx("span",{className:"op-desc",children:"In MST"}),n.jsx("span",{className:"op-complexity",children:"V - 1"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Strategy"}),n.jsx("span",{className:"op-desc",children:"Greedy"}),n.jsx("span",{className:"op-complexity",children:"Min edge"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"Common Uses:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Network design (cables, pipes)"}),n.jsx("li",{children:"Cluster analysis"}),n.jsx("li",{children:"Image segmentation"}),n.jsx("li",{children:"Approximation algorithms"})]})]})]})]}),n.jsx(fe,{context:"Minimum Spanning Tree, Prim's algorithm"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Prim's MST Algorithm"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Load Preset"}),n.jsxs("div",{className:"btn-group preset-group",children:[n.jsx("button",{onClick:()=>$("weighted"),className:"btn btn-preset",disabled:m,children:"Weighted"}),n.jsx("button",{onClick:()=>$("complete"),className:"btn btn-preset",disabled:m,children:"Complete"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Start Vertex (Optional)"}),n.jsxs("select",{value:r,onChange:_=>s(_.target.value),className:"vertex-select full-width",disabled:m,children:[n.jsx("option",{value:"",children:"Auto (first vertex)"}),e.vertices.map(_=>n.jsx("option",{value:_,children:_},_))]})]}),n.jsx("div",{className:"operation-group",children:n.jsxs("div",{className:"btn-group",children:[n.jsxs("button",{onClick:v,className:"btn btn-mst",disabled:m&&!w,children:[n.jsx($e,{size:14})," Run MST"]}),m&&n.jsx("button",{onClick:q,className:"btn btn-pause",children:w?n.jsx($e,{size:14}):n.jsx(St,{size:14})}),w&&n.jsx("button",{onClick:O,className:"btn btn-step",children:n.jsx(Ct,{size:14})}),n.jsx("button",{onClick:S,className:"btn btn-reset",children:n.jsx(at,{size:14})})]})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"MST Edges:"}),n.jsxs("span",{className:"info-value",children:[i.length," / ",e.vertices.length-1]})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Total Weight:"}),n.jsx("span",{className:"info-value mst-weight",children:l})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Visited:"}),n.jsxs("span",{className:"info-value",children:[j.size," / ",e.vertices.length]})]})]}),d>=0&&n.jsxs("div",{className:"current-step-box",children:[n.jsxs("strong",{children:["Step ",d+1,":"]}),n.jsx("p",{children:P()})]}),n.jsx(ze,{message:D}),n.jsxs("div",{className:"legend",children:[n.jsx("h3",{children:"Legend"}),n.jsxs("div",{className:"legend-items",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color unvisited"}),n.jsx("span",{children:"Unvisited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color current"}),n.jsx("span",{children:"Current"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color visited"}),n.jsx("span",{children:"In MST"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-line mst"}),n.jsx("span",{children:"MST Edge"})]})]})]})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Visualization"}),n.jsx("div",{className:"graph-container",children:e.vertices.length===0?n.jsx("div",{className:"graph-empty",children:"Loading graph..."}):n.jsxs("svg",{className:"graph-svg",viewBox:"0 0 500 350",children:[e.edges.map(([_,N,V],G)=>{const W=F[_],J=F[N];if(!W||!J)return null;const ne=(W.x+J.x)/2,ge=(W.y+J.y)/2;return n.jsxs("g",{children:[n.jsx("line",{x1:W.x,y1:W.y,x2:J.x,y2:J.y,className:C(_,N)}),n.jsx("circle",{cx:ne,cy:ge,r:12,className:"weight-bg"}),n.jsx("text",{x:ne,y:ge,className:"weight-label",dominantBaseline:"central",textAnchor:"middle",children:V})]},`edge-${G}`)}),e.vertices.map(_=>{const N=F[_];return N?n.jsxs("g",{className:z(_),children:[n.jsx("circle",{cx:N.x,cy:N.y,r:25,className:"node-circle"}),n.jsx("text",{x:N.x,y:N.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:_})]},_):null})]})}),i.length>0&&n.jsxs("div",{className:"mst-edges-section",children:[n.jsx("h3",{children:"MST Edges"}),n.jsx("div",{className:"mst-edges-list",children:i.map(([_,N,V],G)=>n.jsxs("div",{className:"mst-edge-item",children:[n.jsxs("span",{children:[_," — ",N]}),n.jsxs("span",{className:"edge-weight",children:["(w: ",V,")"]})]},G))}),n.jsx("div",{className:"mst-total",children:n.jsxs("strong",{children:["Total MST Weight: ",l]})})]})]})]}),n.jsx(me,{dataStructure:"graph"})]})}function Zj(){const[e,t]=u.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=u.useState([]),[i,a]=u.useState({}),[l,o]=u.useState([]),[c,h]=u.useState(-1),[d,p]=u.useState(!1),[m,b]=u.useState(!1),[w,k]=u.useState(new Set),[j,f]=u.useState(null),[g,x]=u.useState([]),[E,y]=u.useState(!1),[F,T]=u.useState({}),{message:D,showMessage:A}=Fe(3e3),I=u.useRef(null),H=u.useRef(0);u.useEffect(()=>{B()},[]),u.useEffect(()=>{e.vertices.length>0&&K()},[e.vertices]);const K=u.useCallback(()=>{const V=Math.min(500,350)*.35,G={},W=e.vertices.length;e.vertices.forEach((J,ne)=>{const ge=2*Math.PI*ne/W-Math.PI/2;G[J]={x:250+V*Math.cos(ge),y:175+V*Math.sin(ge)}}),T(G)},[e.vertices]),B=async()=>{try{const C=await ie("/api/graph");C.vertices.length===0?await $("dag"):t(C)}catch(C){console.error("Error loading graph:",C)}},$=async C=>{try{const P=await Z(`/api/graph/preset/${C}`,{});if(P.error){A(P.error,"error");return}t(P),S(),A(`Loaded '${C}' preset`,"success")}catch{A("Error loading preset","error")}},v=async()=>{try{const C=await ie("/api/graph/topological");if(C.error){A(C.error,"error");return}if(C.has_cycle){y(!0),A("Graph has a cycle - topological sort not possible!","error");return}y(!1),s(C.sorted||[]),o(C.steps),A("Starting Topological Sort (Kahn's Algorithm)...","info"),R(C.steps)}catch{A("Error running topological sort","error")}},R=C=>{I.current&&clearInterval(I.current),p(!0),b(!1),k(new Set),f(null),x([]),a({}),h(-1),H.current=0,I.current=setInterval(()=>{if(H.current>=C.length){clearInterval(I.current),p(!1),f(null),A(`Topological Sort Complete: ${r.join(" → ")}`,"success");return}const P=C[H.current];h(H.current),a(P.in_degrees||{}),x(P.queue||[]),P.action==="process"?(f(P.vertex),k(new Set(P.result||[]))):P.action==="decrement"||P.action==="enqueue"?f(P.vertex||P.neighbor):P.action==="init"&&(a(P.in_degrees||{}),x(P.queue||[])),H.current++},1e3)},q=()=>{m?(b(!1),L()):(b(!0),I.current&&clearInterval(I.current))},L=()=>{I.current&&clearInterval(I.current),I.current=setInterval(()=>{if(H.current>=l.length){clearInterval(I.current),p(!1),f(null);return}const C=l[H.current];h(H.current),a(C.in_degrees||{}),x(C.queue||[]),C.action==="process"?(f(C.vertex),k(new Set(C.result||[]))):(C.action==="decrement"||C.action==="enqueue")&&f(C.vertex||C.neighbor),H.current++},1e3)},O=()=>{if(H.current>=l.length)return;const C=l[H.current];h(H.current),a(C.in_degrees||{}),x(C.queue||[]),C.action==="process"?(f(C.vertex),k(new Set(C.result||[]))):(C.action==="decrement"||C.action==="enqueue")&&f(C.vertex||C.neighbor),H.current++,H.current>=l.length&&(p(!1),f(null))},S=()=>{I.current&&clearInterval(I.current),s([]),a({}),o([]),h(-1),k(new Set),f(null),x([]),y(!1),p(!1),b(!1),H.current=0},z=C=>j===C?"graph-node current":w.has(C)?"graph-node visited":g.includes(C)?"graph-node queued":"graph-node",M=()=>c>=0&&c<l.length?l[c].message:"";return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Te,{className:"icon-sm"}),n.jsx("span",{children:"What is Topological Sort?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"Topological Sort"})," orders vertices in a directed acyclic graph (DAG) so that for every edge u→v, u comes before v in the ordering."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(ve,{}),n.jsx("span",{children:"Like scheduling tasks - you must complete prerequisites before dependent tasks!"})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Time"}),n.jsx("span",{className:"op-desc",children:"Kahn's Algorithm"}),n.jsx("span",{className:"op-complexity",children:"O(V+E)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Space"}),n.jsx("span",{className:"op-desc",children:"In-degree array"}),n.jsx("span",{className:"op-complexity",children:"O(V)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Requirement"}),n.jsx("span",{className:"op-desc",children:"Graph type"}),n.jsx("span",{className:"op-complexity",children:"DAG only"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"Common Uses:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Task scheduling with dependencies"}),n.jsx("li",{children:"Build systems (Makefile)"}),n.jsx("li",{children:"Course prerequisite planning"}),n.jsx("li",{children:"Package dependency resolution"})]})]})]})]}),n.jsx(fe,{context:"Topological Sort using Kahn's Algorithm on directed acyclic graphs"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Topological Sort"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Load Graph Preset"}),n.jsxs("div",{className:"btn-group preset-group",children:[n.jsx("button",{onClick:()=>$("dag"),className:"btn btn-preset",disabled:d,children:"DAG"}),n.jsx("button",{onClick:()=>$("tree"),className:"btn btn-preset",disabled:d,children:"Tree"}),n.jsx("button",{onClick:()=>$("simple"),className:"btn btn-preset",disabled:d,children:"Simple"})]})]}),n.jsx("div",{className:"operation-group",children:n.jsxs("div",{className:"btn-group",children:[n.jsxs("button",{onClick:v,className:"btn btn-bfs",disabled:d&&!m,children:[n.jsx($e,{size:14})," Run Sort"]}),d&&n.jsx("button",{onClick:q,className:"btn btn-pause",children:m?n.jsx($e,{size:14}):n.jsx(St,{size:14})}),m&&n.jsx("button",{onClick:O,className:"btn btn-step",children:n.jsx(Ct,{size:14})}),n.jsx("button",{onClick:S,className:"btn btn-reset",children:n.jsx(at,{size:14})})]})}),Object.keys(i).length>0&&n.jsxs("div",{className:"distance-table",children:[n.jsx("h3",{children:"In-Degrees"}),n.jsx("div",{className:"distance-grid",children:e.vertices.map(C=>n.jsxs("div",{className:`distance-item ${w.has(C)?"visited":""} ${j===C?"current":""}`,children:[n.jsx("span",{className:"vertex-label",children:C}),n.jsx("span",{className:"distance-value",children:i[C]??"-"})]},C))})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Vertices:"}),n.jsx("span",{className:"info-value",children:e.vertex_count||e.vertices.length})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Edges:"}),n.jsx("span",{className:"info-value",children:e.edge_count||0})]}),g.length>0&&n.jsxs("div",{className:"info-item queue-display",children:[n.jsx("span",{className:"info-label",children:"Queue:"}),n.jsxs("span",{className:"info-value queue-items",children:["[",g.join(", "),"]"]})]}),r.length>0&&!d&&n.jsxs("div",{className:"info-item traversal-result",children:[n.jsx("span",{className:"info-label",children:"Order:"}),n.jsx("span",{className:"info-value",children:r.join(" → ")})]})]}),c>=0&&n.jsxs("div",{className:"current-step-box",children:[n.jsxs("strong",{children:["Step ",c+1,":"]}),n.jsx("p",{children:M()})]}),n.jsx(ze,{message:D}),E&&n.jsxs("div",{className:"warning-box",children:[n.jsx("strong",{children:"Cycle Detected!"}),n.jsx("p",{children:"Topological sort is only possible on Directed Acyclic Graphs (DAGs)."})]}),n.jsxs("div",{className:"legend",children:[n.jsx("h3",{children:"Legend"}),n.jsxs("div",{className:"legend-items",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color unvisited"}),n.jsx("span",{children:"Unprocessed"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color queued"}),n.jsx("span",{children:"In Queue (in-degree 0)"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color current"}),n.jsx("span",{children:"Current"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color visited"}),n.jsx("span",{children:"Processed"})]})]})]})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Visualization"}),n.jsx("div",{className:"graph-container",children:e.vertices.length===0?n.jsx("div",{className:"graph-empty",children:"Loading graph..."}):n.jsxs("svg",{className:"graph-svg",viewBox:"0 0 500 350",children:[e.edges.map(([C,P,_],N)=>{const V=F[C],G=F[P];if(!V||!G)return null;const W=G.x-V.x,J=G.y-V.y,ne=Math.sqrt(W*W+J*J),ge=W/ne,_e=J/ne,Pn=V.x+ge*25,lt=V.y+_e*25,qh=G.x-ge*30,Hh=G.y-_e*30;return n.jsxs("g",{children:[n.jsx("defs",{children:n.jsx("marker",{id:`arrowhead-${N}`,markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:n.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#64748b"})})}),n.jsx("line",{x1:Pn,y1:lt,x2:qh,y2:Hh,className:"graph-edge",markerEnd:`url(#arrowhead-${N})`})]},`edge-${N}`)}),e.vertices.map(C=>{const P=F[C];return P?n.jsxs("g",{className:z(C),children:[n.jsx("circle",{cx:P.x,cy:P.y,r:25,className:"node-circle"}),n.jsx("text",{x:P.x,y:P.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:C}),i[C]!==void 0&&n.jsxs("text",{x:P.x,y:P.y+38,className:"distance-label",dominantBaseline:"central",textAnchor:"middle",children:["in=",i[C]]})]},C):null})]})}),n.jsxs("div",{className:"algorithm-steps",children:[n.jsx("h3",{children:"Kahn's Algorithm Steps"}),n.jsx("div",{className:"steps-content",children:n.jsxs("ol",{children:[n.jsx("li",{className:c===0?"active":"",children:"Calculate in-degree for all vertices"}),n.jsx("li",{className:g.length>0?"active":"",children:"Add vertices with in-degree 0 to queue"}),n.jsx("li",{className:j?"active":"",children:"Dequeue vertex and add to result"}),n.jsx("li",{children:"Decrement in-degree of neighbors"}),n.jsx("li",{children:"Add neighbors with in-degree 0 to queue"}),n.jsx("li",{children:"Repeat until queue is empty"})]})})]})]})]}),n.jsx(me,{dataStructure:"topological"})]})}function e0(){const[e,t]=u.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=u.useState(""),[i,a]=u.useState({}),[l,o]=u.useState({}),[c,h]=u.useState([]),[d,p]=u.useState(-1),[m,b]=u.useState(0),[w,k]=u.useState(!1),[j,f]=u.useState(!1),[g,x]=u.useState(null),[E,y]=u.useState(null),[F,T]=u.useState(!1),[D,A]=u.useState({}),{message:I,showMessage:H}=Fe(3e3),K=u.useRef(null),B=u.useRef(0);u.useEffect(()=>{v()},[]),u.useEffect(()=>{e.vertices.length>0&&$()},[e.vertices]);const $=u.useCallback(()=>{const J=Math.min(500,350)*.35,ne={},ge=e.vertices.length;e.vertices.forEach((_e,Pn)=>{const lt=2*Math.PI*Pn/ge-Math.PI/2;ne[_e]={x:250+J*Math.cos(lt),y:175+J*Math.sin(lt)}}),A(ne)},[e.vertices]),v=async()=>{try{const N=await ie("/api/graph");N.vertices.length===0?await R("weighted"):t(N)}catch(N){console.error("Error loading graph:",N)}},R=async N=>{try{const V=await Z(`/api/graph/preset/${N}`,{});if(V.error){H(V.error,"error");return}t(V),M(),H(`Loaded '${N}' preset`,"success")}catch{H("Error loading preset","error")}},q=async()=>{if(!r){H("Please select a start vertex!","error");return}try{const N=await ie(`/api/graph/bellman-ford/${r}`);if(N.error){H(N.error,"error");return}a(N.distances),o(N.paths),h(N.steps),T(N.has_negative_cycle),N.has_negative_cycle?H("Negative cycle detected in graph!","error"):H("Starting Bellman-Ford algorithm...","info"),L(N.steps)}catch{H("Error running Bellman-Ford algorithm","error")}},L=N=>{K.current&&clearInterval(K.current),k(!0),f(!1),x(null),y(null),b(0),p(-1),B.current=0,K.current=setInterval(()=>{if(B.current>=N.length){clearInterval(K.current),k(!1),x(null),y(null),F||H("Bellman-Ford algorithm complete!","success");return}const V=N[B.current];p(B.current),a(V.distances||{}),V.iteration&&b(V.iteration),V.action==="check"?(x({from:V.from,to:V.to}),y(null)):V.action==="update"?(x({from:V.from,to:V.to}),y(V.to)):V.action==="negative_cycle"?x({from:V.from,to:V.to}):(x(null),y(null)),B.current++},800)},O=()=>{j?(f(!1),S()):(f(!0),K.current&&clearInterval(K.current))},S=()=>{K.current&&clearInterval(K.current),K.current=setInterval(()=>{if(B.current>=c.length){clearInterval(K.current),k(!1),x(null),y(null);return}const N=c[B.current];p(B.current),a(N.distances||{}),N.iteration&&b(N.iteration),N.action==="check"?(x({from:N.from,to:N.to}),y(null)):N.action==="update"?(x({from:N.from,to:N.to}),y(N.to)):(x(null),y(null)),B.current++},800)},z=()=>{if(B.current>=c.length)return;const N=c[B.current];p(B.current),a(N.distances||{}),N.iteration&&b(N.iteration),N.action==="check"?(x({from:N.from,to:N.to}),y(null)):N.action==="update"?(x({from:N.from,to:N.to}),y(N.to)):(x(null),y(null)),B.current++,B.current>=c.length&&(k(!1),x(null),y(null))},M=()=>{K.current&&clearInterval(K.current),a({}),o({}),h([]),p(-1),b(0),x(null),y(null),T(!1),k(!1),f(!1),B.current=0},C=N=>E===N?"graph-node current":N===r&&!w&&Object.keys(i).length>0?"graph-node visited":"graph-node",P=(N,V)=>g&&(g.from===N&&g.to===V||g.from===V&&g.to===N)?"graph-edge checking":"graph-edge",_=()=>d>=0&&d<c.length?c[d].message:"";return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Te,{className:"icon-sm"}),n.jsx("span",{children:"What is Bellman-Ford Algorithm?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"Bellman-Ford Algorithm"})," finds shortest paths from a source vertex, even with negative edge weights. It can also detect negative cycles."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(ve,{}),n.jsx("span",{children:"Unlike Dijkstra, it checks ALL edges V-1 times - slower but handles negative weights!"})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Time"}),n.jsx("span",{className:"op-desc",children:"V-1 iterations"}),n.jsx("span",{className:"op-complexity",children:"O(V*E)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Space"}),n.jsx("span",{className:"op-desc",children:"Distance array"}),n.jsx("span",{className:"op-complexity",children:"O(V)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Feature"}),n.jsx("span",{className:"op-desc",children:"Negative weights"}),n.jsx("span",{className:"op-complexity",children:"Supported"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"Common Uses:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Currency exchange arbitrage detection"}),n.jsx("li",{children:"Network routing (RIP protocol)"}),n.jsx("li",{children:"Graphs with negative weights"}),n.jsx("li",{children:"Detecting negative cycles"})]})]})]})]}),n.jsx(fe,{context:"Bellman-Ford shortest path algorithm with negative weight handling"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Bellman-Ford Algorithm"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Load Preset"}),n.jsxs("div",{className:"btn-group preset-group",children:[n.jsx("button",{onClick:()=>R("weighted"),className:"btn btn-preset",disabled:w,children:"Weighted"}),n.jsx("button",{onClick:()=>R("simple"),className:"btn btn-preset",disabled:w,children:"Simple"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Start Vertex"}),n.jsxs("select",{value:r,onChange:N=>s(N.target.value),className:"vertex-select full-width",disabled:w,children:[n.jsx("option",{value:"",children:"Select start"}),e.vertices.map(N=>n.jsx("option",{value:N,children:N},N))]})]}),n.jsx("div",{className:"operation-group",children:n.jsxs("div",{className:"btn-group",children:[n.jsxs("button",{onClick:q,className:"btn btn-dijkstra",disabled:w&&!j,children:[n.jsx($e,{size:14})," Run"]}),w&&n.jsx("button",{onClick:O,className:"btn btn-pause",children:j?n.jsx($e,{size:14}):n.jsx(St,{size:14})}),j&&n.jsx("button",{onClick:z,className:"btn btn-step",children:n.jsx(Ct,{size:14})}),n.jsx("button",{onClick:M,className:"btn btn-reset",children:n.jsx(at,{size:14})})]})}),m>0&&n.jsx("div",{className:"info-panel",children:n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Iteration:"}),n.jsxs("span",{className:"info-value",children:[m," / ",e.vertices.length-1]})]})}),Object.keys(i).length>0&&n.jsxs("div",{className:"distance-table",children:[n.jsxs("h3",{children:["Distances from ",r]}),n.jsx("div",{className:"distance-grid",children:e.vertices.map(N=>n.jsxs("div",{className:`distance-item ${E===N?"current":""}`,children:[n.jsx("span",{className:"vertex-label",children:N}),n.jsx("span",{className:"distance-value",children:i[N]==="inf"||i[N]===null?"∞":i[N]})]},N))})]}),d>=0&&n.jsxs("div",{className:"current-step-box",children:[n.jsxs("strong",{children:["Step ",d+1,":"]}),n.jsx("p",{children:_()})]}),n.jsx(ze,{message:I}),F&&n.jsxs("div",{className:"warning-box",children:[n.jsx("strong",{children:"Negative Cycle Detected!"}),n.jsx("p",{children:"The graph contains a negative weight cycle. Shortest paths are undefined."})]}),n.jsxs("div",{className:"legend",children:[n.jsx("h3",{children:"Legend"}),n.jsxs("div",{className:"legend-items",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color unvisited"}),n.jsx("span",{children:"Unprocessed"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color current"}),n.jsx("span",{children:"Updated"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color checking"}),n.jsx("span",{children:"Checking Edge"})]})]})]})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Visualization"}),n.jsx("div",{className:"graph-container",children:e.vertices.length===0?n.jsx("div",{className:"graph-empty",children:"Loading graph..."}):n.jsxs("svg",{className:"graph-svg",viewBox:"0 0 500 350",children:[e.edges.map(([N,V,G],W)=>{const J=D[N],ne=D[V];if(!J||!ne)return null;const ge=(J.x+ne.x)/2,_e=(J.y+ne.y)/2;return n.jsxs("g",{children:[n.jsx("line",{x1:J.x,y1:J.y,x2:ne.x,y2:ne.y,className:P(N,V)}),n.jsx("circle",{cx:ge,cy:_e,r:12,className:"weight-bg"}),n.jsx("text",{x:ge,y:_e,className:"weight-label",dominantBaseline:"central",textAnchor:"middle",children:G})]},`edge-${W}`)}),e.vertices.map(N=>{const V=D[N];return V?n.jsxs("g",{className:C(N),children:[n.jsx("circle",{cx:V.x,cy:V.y,r:25,className:"node-circle"}),n.jsx("text",{x:V.x,y:V.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:N}),i[N]!==void 0&&n.jsxs("text",{x:V.x,y:V.y+38,className:"distance-label",dominantBaseline:"central",textAnchor:"middle",children:["d=",i[N]==="inf"||i[N]===null?"∞":i[N]]})]},N):null})]})}),n.jsxs("div",{className:"algorithm-steps",children:[n.jsx("h3",{children:"Bellman-Ford vs Dijkstra"}),n.jsxs("div",{className:"comparison-table",children:[n.jsxs("div",{className:"comparison-row header",children:[n.jsx("span",{children:"Feature"}),n.jsx("span",{children:"Bellman-Ford"}),n.jsx("span",{children:"Dijkstra"})]}),n.jsxs("div",{className:"comparison-row",children:[n.jsx("span",{children:"Time Complexity"}),n.jsx("span",{children:"O(V*E)"}),n.jsx("span",{children:"O((V+E)logV)"})]}),n.jsxs("div",{className:"comparison-row",children:[n.jsx("span",{children:"Negative Weights"}),n.jsx("span",{className:"yes",children:"Yes"}),n.jsx("span",{className:"no",children:"No"})]}),n.jsxs("div",{className:"comparison-row",children:[n.jsx("span",{children:"Detects Neg. Cycles"}),n.jsx("span",{className:"yes",children:"Yes"}),n.jsx("span",{className:"no",children:"No"})]})]})]}),Object.keys(l).length>0&&!w&&!F&&n.jsxs("div",{className:"paths-section",children:[n.jsxs("h3",{children:["Shortest Paths from ",r]}),n.jsx("div",{className:"paths-list",children:Object.entries(l).map(([N,V])=>n.jsxs("div",{className:"path-item",children:[n.jsxs("span",{className:"path-target",children:[N,":"]}),n.jsx("span",{className:"path-route",children:V.join(" → ")}),n.jsxs("span",{className:"path-distance",children:["(dist: ",i[N]===null?"∞":i[N],")"]})]},N))})]})]})]}),n.jsx(me,{dataStructure:"bellman-ford"})]})}function n0(){const[e,t]=u.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=u.useState([]),[i,a]=u.useState([]),[l,o]=u.useState(0),[c,h]=u.useState([]),[d,p]=u.useState([]),[m,b]=u.useState(-1),[w,k]=u.useState(!1),[j,f]=u.useState(!1),[g,x]=u.useState(null),[E,y]=u.useState({}),{message:F,showMessage:T}=Fe(3e3),D=u.useRef(null),A=u.useRef(0);u.useEffect(()=>{H()},[]),u.useEffect(()=>{e.vertices.length>0&&I()},[e.vertices]);const I=u.useCallback(()=>{const G=Math.min(500,350)*.35,W={},J=e.vertices.length;e.vertices.forEach((ne,ge)=>{const _e=2*Math.PI*ge/J-Math.PI/2;W[ne]={x:250+G*Math.cos(_e),y:175+G*Math.sin(_e)}}),y(W)},[e.vertices]),H=async()=>{try{const P=await ie("/api/graph");P.vertices.length===0?await K("weighted"):t(P)}catch(P){console.error("Error loading graph:",P)}},K=async P=>{try{const _=await Z(`/api/graph/preset/${P}`,{});if(_.error){T(_.error,"error");return}t(_),L(),T(`Loaded '${P}' preset`,"success")}catch{T("Error loading preset","error")}},B=async()=>{try{const P=await ie("/api/graph/kruskal");if(P.error){T(P.error,"error");return}p(P.steps);const _=P.steps.find(N=>N.action==="init");_&&h(_.edges_sorted||[]),T("Starting Kruskal's MST algorithm...","info"),$(P.steps,P.mst_edges,P.total_weight)}catch{T("Error running Kruskal's algorithm","error")}},$=(P,_,N)=>{D.current&&clearInterval(D.current),k(!0),f(!1),s([]),a([]),o(0),x(null),b(-1),A.current=0,D.current=setInterval(()=>{if(A.current>=P.length){clearInterval(D.current),k(!1),x(null),s(_),o(N),T(`MST complete! Total weight: ${N}`,"success");return}const V=P[A.current];b(A.current),s(V.mst_edges||[]),o(V.total_weight||0),V.action==="consider"?x({from:V.from,to:V.to,weight:V.weight}):(V.action==="add"||V.action==="reject"&&a(G=>[...G,{from:V.from,to:V.to,weight:V.weight}]),x(null)),A.current++},1e3)},v=()=>{j?(f(!1),R()):(f(!0),D.current&&clearInterval(D.current))},R=()=>{D.current&&clearInterval(D.current),D.current=setInterval(()=>{if(A.current>=d.length){clearInterval(D.current),k(!1),x(null);return}const P=d[A.current];b(A.current),s(P.mst_edges||[]),o(P.total_weight||0),P.action==="consider"?x({from:P.from,to:P.to,weight:P.weight}):(P.action==="add"||P.action==="reject"&&a(_=>[..._,{from:P.from,to:P.to,weight:P.weight}]),x(null)),A.current++},1e3)},q=()=>{if(A.current>=d.length)return;const P=d[A.current];b(A.current),s(P.mst_edges||[]),o(P.total_weight||0),P.action==="consider"?x({from:P.from,to:P.to,weight:P.weight}):(P.action==="add"||P.action==="reject"&&a(_=>[..._,{from:P.from,to:P.to,weight:P.weight}]),x(null)),A.current++,A.current>=d.length&&(k(!1),x(null))},L=()=>{D.current&&clearInterval(D.current),s([]),a([]),o(0),h([]),p([]),b(-1),x(null),k(!1),f(!1),A.current=0},O=(P,_)=>r.some(([N,V])=>N===P&&V===_||N===_&&V===P),S=(P,_)=>i.some(N=>N.from===P&&N.to===_||N.from===_&&N.to===P),z=P=>r.some(([N,V])=>N===P||V===P)?"graph-node visited":"graph-node",M=(P,_)=>g&&(g.from===P&&g.to===_||g.from===_&&g.to===P)?"graph-edge considering":O(P,_)?"graph-edge mst":S(P,_)?"graph-edge rejected":"graph-edge",C=()=>m>=0&&m<d.length?d[m].message:"";return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Te,{className:"icon-sm"}),n.jsx("span",{children:"What is Kruskal's Algorithm?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"Kruskal's Algorithm"})," builds the MST by sorting all edges by weight and adding them if they don't create a cycle (using Union-Find)."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(ve,{}),n.jsx("span",{children:"Like building a network by always picking the cheapest cable that connects new areas!"})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Time"}),n.jsx("span",{className:"op-desc",children:"Sort + Union-Find"}),n.jsx("span",{className:"op-complexity",children:"O(E log E)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Space"}),n.jsx("span",{className:"op-desc",children:"Union-Find array"}),n.jsx("span",{className:"op-complexity",children:"O(V)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Strategy"}),n.jsx("span",{className:"op-desc",children:"Global greedy"}),n.jsx("span",{className:"op-complexity",children:"Min edge"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"Kruskal vs Prim:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Better for sparse graphs (fewer edges)"}),n.jsx("li",{children:"Processes edges globally, not locally"}),n.jsx("li",{children:"Uses Union-Find for cycle detection"}),n.jsx("li",{children:"Easier to parallelize"})]})]})]})]}),n.jsx(fe,{context:"Kruskal's Minimum Spanning Tree algorithm with Union-Find"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Kruskal's MST Algorithm"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Load Preset"}),n.jsxs("div",{className:"btn-group preset-group",children:[n.jsx("button",{onClick:()=>K("weighted"),className:"btn btn-preset",disabled:w,children:"Weighted"}),n.jsx("button",{onClick:()=>K("complete"),className:"btn btn-preset",disabled:w,children:"Complete"})]})]}),n.jsx("div",{className:"operation-group",children:n.jsxs("div",{className:"btn-group",children:[n.jsxs("button",{onClick:B,className:"btn btn-mst",disabled:w&&!j,children:[n.jsx($e,{size:14})," Run Kruskal's"]}),w&&n.jsx("button",{onClick:v,className:"btn btn-pause",children:j?n.jsx($e,{size:14}):n.jsx(St,{size:14})}),j&&n.jsx("button",{onClick:q,className:"btn btn-step",children:n.jsx(Ct,{size:14})}),n.jsx("button",{onClick:L,className:"btn btn-reset",children:n.jsx(at,{size:14})})]})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"MST Edges:"}),n.jsxs("span",{className:"info-value",children:[r.length," / ",e.vertices.length-1]})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Total Weight:"}),n.jsx("span",{className:"info-value mst-weight",children:l})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Rejected:"}),n.jsx("span",{className:"info-value",children:i.length})]})]}),c.length>0&&n.jsxs("div",{className:"sorted-edges-panel",children:[n.jsx("h3",{children:"Edges (sorted by weight)"}),n.jsx("div",{className:"sorted-edges-list",children:c.map(([P,_,N],V)=>{const G=O(P,_),W=S(P,_);return n.jsxs("div",{className:`sorted-edge-item ${G?"in-mst":""} ${W?"rejected":""}`,children:[n.jsxs("span",{children:[P,"—",_]}),n.jsxs("span",{className:"edge-weight",children:["w=",N]})]},V)})})]}),m>=0&&n.jsxs("div",{className:"current-step-box",children:[n.jsxs("strong",{children:["Step ",m+1,":"]}),n.jsx("p",{children:C()})]}),n.jsx(ze,{message:F}),n.jsxs("div",{className:"legend",children:[n.jsx("h3",{children:"Legend"}),n.jsxs("div",{className:"legend-items",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color unvisited"}),n.jsx("span",{children:"Unconnected"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color visited"}),n.jsx("span",{children:"In MST"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-line considering"}),n.jsx("span",{children:"Considering"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-line mst"}),n.jsx("span",{children:"MST Edge"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-line rejected"}),n.jsx("span",{children:"Rejected (cycle)"})]})]})]})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Visualization"}),n.jsx("div",{className:"graph-container",children:e.vertices.length===0?n.jsx("div",{className:"graph-empty",children:"Loading graph..."}):n.jsxs("svg",{className:"graph-svg",viewBox:"0 0 500 350",children:[e.edges.map(([P,_,N],V)=>{const G=E[P],W=E[_];if(!G||!W)return null;const J=(G.x+W.x)/2,ne=(G.y+W.y)/2;return n.jsxs("g",{children:[n.jsx("line",{x1:G.x,y1:G.y,x2:W.x,y2:W.y,className:M(P,_)}),n.jsx("circle",{cx:J,cy:ne,r:12,className:"weight-bg"}),n.jsx("text",{x:J,y:ne,className:"weight-label",dominantBaseline:"central",textAnchor:"middle",children:N})]},`edge-${V}`)}),e.vertices.map(P=>{const _=E[P];return _?n.jsxs("g",{className:z(P),children:[n.jsx("circle",{cx:_.x,cy:_.y,r:25,className:"node-circle"}),n.jsx("text",{x:_.x,y:_.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:P})]},P):null})]})}),n.jsxs("div",{className:"algorithm-steps",children:[n.jsx("h3",{children:"Kruskal vs Prim"}),n.jsxs("div",{className:"comparison-table",children:[n.jsxs("div",{className:"comparison-row header",children:[n.jsx("span",{children:"Feature"}),n.jsx("span",{children:"Kruskal's"}),n.jsx("span",{children:"Prim's"})]}),n.jsxs("div",{className:"comparison-row",children:[n.jsx("span",{children:"Time Complexity"}),n.jsx("span",{children:"O(E log E)"}),n.jsx("span",{children:"O((V+E)logV)"})]}),n.jsxs("div",{className:"comparison-row",children:[n.jsx("span",{children:"Best for"}),n.jsx("span",{children:"Sparse graphs"}),n.jsx("span",{children:"Dense graphs"})]}),n.jsxs("div",{className:"comparison-row",children:[n.jsx("span",{children:"Data Structure"}),n.jsx("span",{children:"Union-Find"}),n.jsx("span",{children:"Priority Queue"})]}),n.jsxs("div",{className:"comparison-row",children:[n.jsx("span",{children:"Strategy"}),n.jsx("span",{children:"Global (all edges)"}),n.jsx("span",{children:"Local (neighbors)"})]})]})]}),r.length>0&&n.jsxs("div",{className:"mst-edges-section",children:[n.jsx("h3",{children:"MST Edges"}),n.jsx("div",{className:"mst-edges-list",children:r.map(([P,_,N],V)=>n.jsxs("div",{className:"mst-edge-item",children:[n.jsxs("span",{children:[P," — ",_]}),n.jsxs("span",{className:"edge-weight",children:["(w: ",N,")"]})]},V))}),n.jsx("div",{className:"mst-total",children:n.jsxs("strong",{children:["Total MST Weight: ",l]})})]})]})]}),n.jsx(me,{dataStructure:"kruskal"})]})}function Bc(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,s=Array(t);r<t;r++)s[r]=e[r];return s}function t0(e){if(Array.isArray(e))return e}function r0(e,t,r){return(t=d0(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s0(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var s,i,a,l,o=[],c=!0,h=!1;try{if(a=(r=r.call(e)).next,t!==0)for(;!(c=(s=a.call(r)).done)&&(o.push(s.value),o.length!==t);c=!0);}catch(d){h=!0,i=d}finally{try{if(!c&&r.return!=null&&(l=r.return(),Object(l)!==l))return}finally{if(h)throw i}}return o}}function i0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qc(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,s)}return r}function Hc(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?qc(Object(r),!0).forEach(function(s){r0(e,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):qc(Object(r)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(r,s))})}return e}function a0(e,t){if(e==null)return{};var r,s,i=l0(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function l0(e,t){if(e==null)return{};var r={};for(var s in e)if({}.hasOwnProperty.call(e,s)){if(t.indexOf(s)!==-1)continue;r[s]=e[s]}return r}function o0(e,t){return t0(e)||s0(e,t)||u0(e,t)||i0()}function c0(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var s=r.call(e,t);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function d0(e){var t=c0(e,"string");return typeof t=="symbol"?t:t+""}function u0(e,t){if(e){if(typeof e=="string")return Bc(e,t);var r={}.toString.call(e).slice(8,-1);return r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set"?Array.from(e):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Bc(e,t):void 0}}function h0(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Uc(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,s)}return r}function Kc(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Uc(Object(r),!0).forEach(function(s){h0(e,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Uc(Object(r)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(r,s))})}return e}function p0(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(s){return t.reduceRight(function(i,a){return a(i)},s)}}function br(e){return function t(){for(var r=this,s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return i.length>=e.length?e.apply(this,i):function(){for(var l=arguments.length,o=new Array(l),c=0;c<l;c++)o[c]=arguments[c];return t.apply(r,[].concat(i,o))}}}function fi(e){return{}.toString.call(e).includes("Object")}function f0(e){return!Object.keys(e).length}function es(e){return typeof e=="function"}function m0(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function g0(e,t){return fi(t)||Zn("changeType"),Object.keys(t).some(function(r){return!m0(e,r)})&&Zn("changeField"),t}function x0(e){es(e)||Zn("selectorType")}function v0(e){es(e)||fi(e)||Zn("handlerType"),fi(e)&&Object.values(e).some(function(t){return!es(t)})&&Zn("handlersType")}function y0(e){e||Zn("initialIsRequired"),fi(e)||Zn("initialType"),f0(e)&&Zn("initialContent")}function j0(e,t){throw new Error(e[t]||e.default)}var N0={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},Zn=br(j0)(N0),Cs={changes:g0,selector:x0,handler:v0,initial:y0};function k0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Cs.initial(e),Cs.handler(t);var r={current:e},s=br(S0)(r,t),i=br(b0)(r),a=br(Cs.changes)(e),l=br(w0)(r);function o(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(d){return d};return Cs.selector(h),h(r.current)}function c(h){p0(s,i,a,l)(h)}return[o,c]}function w0(e,t){return es(t)?t(e.current):t}function b0(e,t){return e.current=Kc(Kc({},e.current),t),t}function S0(e,t,r){return es(t)?t(e.current):Object.keys(r).forEach(function(s){var i;return(i=t[s])===null||i===void 0?void 0:i.call(t,e.current[s])}),r}var C0={create:k0},T0={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function _0(e){return function t(){for(var r=this,s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return i.length>=e.length?e.apply(this,i):function(){for(var l=arguments.length,o=new Array(l),c=0;c<l;c++)o[c]=arguments[c];return t.apply(r,[].concat(i,o))}}}function L0(e){return{}.toString.call(e).includes("Object")}function E0(e){return e||Wc("configIsRequired"),L0(e)||Wc("configType"),e.urls?(O0(),{paths:{vs:e.urls.monacoBase}}):e}function O0(){console.warn(Ih.deprecation)}function R0(e,t){throw new Error(e[t]||e.default)}var Ih={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},Wc=_0(R0)(Ih),P0={config:E0},I0=function(){for(var t=arguments.length,r=new Array(t),s=0;s<t;s++)r[s]=arguments[s];return function(i){return r.reduceRight(function(a,l){return l(a)},i)}};function Mh(e,t){return Object.keys(t).forEach(function(r){t[r]instanceof Object&&e[r]&&Object.assign(t[r],Mh(e[r],t[r]))}),Hc(Hc({},e),t)}var M0={type:"cancelation",msg:"operation is manually canceled"};function oa(e){var t=!1,r=new Promise(function(s,i){e.then(function(a){return t?i(M0):s(a)}),e.catch(i)});return r.cancel=function(){return t=!0},r}var z0=["monaco"],F0=C0.create({config:T0,isInitialized:!1,resolve:null,reject:null,monaco:null}),zh=o0(F0,2),os=zh[0],Ri=zh[1];function A0(e){var t=P0.config(e),r=t.monaco,s=a0(t,z0);Ri(function(i){return{config:Mh(i.config,s),monaco:r}})}function V0(){var e=os(function(t){var r=t.monaco,s=t.isInitialized,i=t.resolve;return{monaco:r,isInitialized:s,resolve:i}});if(!e.isInitialized){if(Ri({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),oa(ca);if(window.monaco&&window.monaco.editor)return Fh(window.monaco),e.resolve(window.monaco),oa(ca);I0(D0,B0)(q0)}return oa(ca)}function D0(e){return document.body.appendChild(e)}function $0(e){var t=document.createElement("script");return e&&(t.src=e),t}function B0(e){var t=os(function(s){var i=s.config,a=s.reject;return{config:i,reject:a}}),r=$0("".concat(t.config.paths.vs,"/loader.js"));return r.onload=function(){return e()},r.onerror=t.reject,r}function q0(){var e=os(function(r){var s=r.config,i=r.resolve,a=r.reject;return{config:s,resolve:i,reject:a}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(r){var s=r.m||r;Fh(s),e.resolve(s)},function(r){e.reject(r)})}function Fh(e){os().monaco||Ri({monaco:e})}function H0(){return os(function(e){var t=e.monaco;return t})}var ca=new Promise(function(e,t){return Ri({resolve:e,reject:t})}),Ah={config:A0,init:V0,__getMonacoInstance:H0},U0={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},da=U0,K0={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},W0=K0;function G0({children:e}){return Ve.createElement("div",{style:W0.container},e)}var Q0=G0,X0=Q0;function Y0({width:e,height:t,isEditorReady:r,loading:s,_ref:i,className:a,wrapperProps:l}){return Ve.createElement("section",{style:{...da.wrapper,width:e,height:t},...l},!r&&Ve.createElement(X0,null,s),Ve.createElement("div",{ref:i,style:{...da.fullWidth,...!r&&da.hide},className:a}))}var J0=Y0,Vh=u.memo(J0);function Z0(e){u.useEffect(e,[])}var Dh=Z0;function eN(e,t,r=!0){let s=u.useRef(!0);u.useEffect(s.current||!r?()=>{s.current=!1}:e,t)}var Xe=eN;function Ir(){}function Kt(e,t,r,s){return nN(e,s)||tN(e,t,r,s)}function nN(e,t){return e.editor.getModel($h(e,t))}function tN(e,t,r,s){return e.editor.createModel(t,r,s?$h(e,s):void 0)}function $h(e,t){return e.Uri.parse(t)}function rN({original:e,modified:t,language:r,originalLanguage:s,modifiedLanguage:i,originalModelPath:a,modifiedModelPath:l,keepCurrentOriginalModel:o=!1,keepCurrentModifiedModel:c=!1,theme:h="light",loading:d="Loading...",options:p={},height:m="100%",width:b="100%",className:w,wrapperProps:k={},beforeMount:j=Ir,onMount:f=Ir}){let[g,x]=u.useState(!1),[E,y]=u.useState(!0),F=u.useRef(null),T=u.useRef(null),D=u.useRef(null),A=u.useRef(f),I=u.useRef(j),H=u.useRef(!1);Dh(()=>{let v=Ah.init();return v.then(R=>(T.current=R)&&y(!1)).catch(R=>(R==null?void 0:R.type)!=="cancelation"&&console.error("Monaco initialization: error:",R)),()=>F.current?$():v.cancel()}),Xe(()=>{if(F.current&&T.current){let v=F.current.getOriginalEditor(),R=Kt(T.current,e||"",s||r||"text",a||"");R!==v.getModel()&&v.setModel(R)}},[a],g),Xe(()=>{if(F.current&&T.current){let v=F.current.getModifiedEditor(),R=Kt(T.current,t||"",i||r||"text",l||"");R!==v.getModel()&&v.setModel(R)}},[l],g),Xe(()=>{let v=F.current.getModifiedEditor();v.getOption(T.current.editor.EditorOption.readOnly)?v.setValue(t||""):t!==v.getValue()&&(v.executeEdits("",[{range:v.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),v.pushUndoStop())},[t],g),Xe(()=>{var v,R;(R=(v=F.current)==null?void 0:v.getModel())==null||R.original.setValue(e||"")},[e],g),Xe(()=>{let{original:v,modified:R}=F.current.getModel();T.current.editor.setModelLanguage(v,s||r||"text"),T.current.editor.setModelLanguage(R,i||r||"text")},[r,s,i],g),Xe(()=>{var v;(v=T.current)==null||v.editor.setTheme(h)},[h],g),Xe(()=>{var v;(v=F.current)==null||v.updateOptions(p)},[p],g);let K=u.useCallback(()=>{var q;if(!T.current)return;I.current(T.current);let v=Kt(T.current,e||"",s||r||"text",a||""),R=Kt(T.current,t||"",i||r||"text",l||"");(q=F.current)==null||q.setModel({original:v,modified:R})},[r,t,i,e,s,a,l]),B=u.useCallback(()=>{var v;!H.current&&D.current&&(F.current=T.current.editor.createDiffEditor(D.current,{automaticLayout:!0,...p}),K(),(v=T.current)==null||v.editor.setTheme(h),x(!0),H.current=!0)},[p,h,K]);u.useEffect(()=>{g&&A.current(F.current,T.current)},[g]),u.useEffect(()=>{!E&&!g&&B()},[E,g,B]);function $(){var R,q,L,O;let v=(R=F.current)==null?void 0:R.getModel();o||((q=v==null?void 0:v.original)==null||q.dispose()),c||((L=v==null?void 0:v.modified)==null||L.dispose()),(O=F.current)==null||O.dispose()}return Ve.createElement(Vh,{width:b,height:m,isEditorReady:g,loading:d,_ref:D,className:w,wrapperProps:k})}var sN=rN;u.memo(sN);function iN(e){let t=u.useRef();return u.useEffect(()=>{t.current=e},[e]),t.current}var aN=iN,Ts=new Map;function lN({defaultValue:e,defaultLanguage:t,defaultPath:r,value:s,language:i,path:a,theme:l="light",line:o,loading:c="Loading...",options:h={},overrideServices:d={},saveViewState:p=!0,keepCurrentModel:m=!1,width:b="100%",height:w="100%",className:k,wrapperProps:j={},beforeMount:f=Ir,onMount:g=Ir,onChange:x,onValidate:E=Ir}){let[y,F]=u.useState(!1),[T,D]=u.useState(!0),A=u.useRef(null),I=u.useRef(null),H=u.useRef(null),K=u.useRef(g),B=u.useRef(f),$=u.useRef(),v=u.useRef(s),R=aN(a),q=u.useRef(!1),L=u.useRef(!1);Dh(()=>{let z=Ah.init();return z.then(M=>(A.current=M)&&D(!1)).catch(M=>(M==null?void 0:M.type)!=="cancelation"&&console.error("Monaco initialization: error:",M)),()=>I.current?S():z.cancel()}),Xe(()=>{var M,C,P,_;let z=Kt(A.current,e||s||"",t||i||"",a||r||"");z!==((M=I.current)==null?void 0:M.getModel())&&(p&&Ts.set(R,(C=I.current)==null?void 0:C.saveViewState()),(P=I.current)==null||P.setModel(z),p&&((_=I.current)==null||_.restoreViewState(Ts.get(a))))},[a],y),Xe(()=>{var z;(z=I.current)==null||z.updateOptions(h)},[h],y),Xe(()=>{!I.current||s===void 0||(I.current.getOption(A.current.editor.EditorOption.readOnly)?I.current.setValue(s):s!==I.current.getValue()&&(L.current=!0,I.current.executeEdits("",[{range:I.current.getModel().getFullModelRange(),text:s,forceMoveMarkers:!0}]),I.current.pushUndoStop(),L.current=!1))},[s],y),Xe(()=>{var M,C;let z=(M=I.current)==null?void 0:M.getModel();z&&i&&((C=A.current)==null||C.editor.setModelLanguage(z,i))},[i],y),Xe(()=>{var z;o!==void 0&&((z=I.current)==null||z.revealLine(o))},[o],y),Xe(()=>{var z;(z=A.current)==null||z.editor.setTheme(l)},[l],y);let O=u.useCallback(()=>{var z;if(!(!H.current||!A.current)&&!q.current){B.current(A.current);let M=a||r,C=Kt(A.current,s||e||"",t||i||"",M||"");I.current=(z=A.current)==null?void 0:z.editor.create(H.current,{model:C,automaticLayout:!0,...h},d),p&&I.current.restoreViewState(Ts.get(M)),A.current.editor.setTheme(l),o!==void 0&&I.current.revealLine(o),F(!0),q.current=!0}},[e,t,r,s,i,a,h,d,p,l,o]);u.useEffect(()=>{y&&K.current(I.current,A.current)},[y]),u.useEffect(()=>{!T&&!y&&O()},[T,y,O]),v.current=s,u.useEffect(()=>{var z,M;y&&x&&((z=$.current)==null||z.dispose(),$.current=(M=I.current)==null?void 0:M.onDidChangeModelContent(C=>{L.current||x(I.current.getValue(),C)}))},[y,x]),u.useEffect(()=>{if(y){let z=A.current.editor.onDidChangeMarkers(M=>{var P;let C=(P=I.current.getModel())==null?void 0:P.uri;if(C&&M.find(_=>_.path===C.path)){let _=A.current.editor.getModelMarkers({resource:C});E==null||E(_)}});return()=>{z==null||z.dispose()}}return()=>{}},[y,E]);function S(){var z,M;(z=$.current)==null||z.dispose(),m?p&&Ts.set(a,I.current.saveViewState()):(M=I.current.getModel())==null||M.dispose(),I.current.dispose()}return Ve.createElement(Vh,{width:b,height:w,isEditorReady:y,loading:c,_ref:H,className:k,wrapperProps:j})}var oN=lN,cN=u.memo(oN),dN=cN;const Gc={python:{monacoLang:"python",defaultCode:`def solution(nums):
    # Write your solution here
    pass
`}};function uN({language:e,code:t,onChange:r,theme:s="vs-dark"}){const i=Gc[e]||Gc.python,a=o=>{r(o||"")},l={minimap:{enabled:!1},fontSize:14,fontFamily:"'Fira Code', 'JetBrains Mono', Consolas, monospace",fontLigatures:!0,lineNumbers:"on",roundedSelection:!0,scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,wordWrap:"on",padding:{top:16,bottom:16},suggest:{showKeywords:!0,showSnippets:!0}};return n.jsx("div",{className:"code-editor-container",children:n.jsx(dN,{height:"400px",language:i.monacoLang,value:t,theme:s,onChange:a,options:l,loading:n.jsx("div",{className:"editor-loading",children:"Loading editor..."})})})}const ua=[{id:"arrays-hashing",title:"Arrays & Hashing",icon:"grid",color:"#10b981",description:"Foundation of DSA - array manipulation and hash maps",problems:["two-sum","valid-anagram","contains-duplicate","group-anagrams"]},{id:"two-pointers",title:"Two Pointers",icon:"pointer",color:"#3b82f6",description:"Efficient array traversal techniques",problems:["valid-palindrome","two-sum-sorted","container-with-most-water"]},{id:"stack",title:"Stack",icon:"layers",color:"#8b5cf6",description:"LIFO data structure problems",problems:["valid-parentheses","min-stack","evaluate-reverse-polish-notation"]},{id:"binary-search",title:"Binary Search",icon:"search",color:"#f59e0b",description:"Divide and conquer search technique",problems:["binary-search","search-rotated-array","find-minimum-in-rotated-sorted-array"]},{id:"linked-list",title:"Linked List",icon:"link",color:"#ec4899",description:"Pointer-based data structures",problems:["reverse-linked-list","merge-two-lists","linked-list-cycle","reorder-list"]},{id:"trees",title:"Trees",icon:"tree",color:"#14b8a6",description:"Hierarchical data structures",problems:["invert-tree","max-depth-tree","same-tree","kth-smallest-element-in-a-bst"]},{id:"graphs",title:"Graphs",icon:"network",color:"#6366f1",description:"Graph traversal and algorithms",problems:["bfs-traversal","dfs-traversal","number-of-islands"]},{id:"dynamic-programming",title:"Dynamic Programming",icon:"puzzle",color:"#ef4444",description:"Optimization through memoization",problems:["climbing-stairs","house-robber"]},{id:"sorting",title:"Sorting",icon:"sort",color:"#84cc16",description:"Classic sorting algorithms",problems:["merge-sort","quick-sort"]}],_t={"two-sum":{id:"two-sum",title:"Two Sum",difficulty:"Easy",category:"Arrays & Hashing",description:"Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\n\nYou can return the answer in any order.",examples:[{input:"nums = [2,7,11,15], target = 9",output:"[0,1]",explanation:"Because nums[0] + nums[1] == 9, we return [0, 1]."},{input:"nums = [3,2,4], target = 6",output:"[1,2]",explanation:"Because nums[1] + nums[2] == 6, we return [1, 2]."}],constraints:["2 <= nums.length <= 10^4","-10^9 <= nums[i] <= 10^9","Only one valid answer exists."],testCases:[{input:"[2,7,11,15], 9",expected:"[0, 1]"},{input:"[3,2,4], 6",expected:"[1, 2]"},{input:"[3,3], 6",expected:"[0, 1]"}],starterCode:{python:`class Solution:
    def solution(self, nums, target):
        # Use a hash map for O(n) time complexity
        pass

# Test
s = Solution()
print(s.solution([2,7,11,15], 9))`},solutions:{optimal:{name:"Hash Map (Optimal)",timeComplexity:"O(n)",spaceComplexity:"O(n)",description:"Use a hash map to store seen numbers and their indices. For each number, check if complement exists.",code:`class Solution:
    def solution(self, nums, target):
        # Hash map: number -> index
        seen = {}
        for i, num in enumerate(nums):
            complement = target - num
            if complement in seen:
                return [seen[complement], i]
            seen[num] = i
        return []

# Test
s = Solution()
print(s.solution([2,7,11,15], 9))`},bruteForce:{name:"Brute Force",timeComplexity:"O(n²)",spaceComplexity:"O(1)",description:"Check every pair of numbers to see if they sum to target.",code:`class Solution:
    def solution(self, nums, target):
        # Check all pairs
        n = len(nums)
        for i in range(n):
            for j in range(i + 1, n):
                if nums[i] + nums[j] == target:
                    return [i, j]
        return []

# Test
s = Solution()
print(s.solution([2,7,11,15], 9))`},sorting:{name:"Sorting + Two Pointers",timeComplexity:"O(n log n)",spaceComplexity:"O(n)",description:"Sort with indices, then use two pointers. Note: need to track original indices.",code:`class Solution:
    def solution(self, nums, target):
        # Store (value, original_index) pairs
        indexed = [(num, i) for i, num in enumerate(nums)]
        indexed.sort(key=lambda x: x[0])

        left, right = 0, len(nums) - 1
        while left < right:
            current_sum = indexed[left][0] + indexed[right][0]
            if current_sum == target:
                return sorted([indexed[left][1], indexed[right][1]])
            elif current_sum < target:
                left += 1
            else:
                right -= 1
        return []

# Test
s = Solution()
print(s.solution([2,7,11,15], 9))`}},hints:["A brute force approach is O(n²). Can you do better with a hash map?","For each number, check if (target - number) exists in the hash map.","Store each number and its index as you iterate."]},"valid-anagram":{id:"valid-anagram",title:"Valid Anagram",difficulty:"Easy",category:"Arrays & Hashing",description:"Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.\n\nAn anagram is a word formed by rearranging the letters of another word.",examples:[{input:'s = "anagram", t = "nagaram"',output:"true",explanation:"Both contain the same letters."},{input:'s = "rat", t = "car"',output:"false",explanation:"Different letters."}],constraints:["1 <= s.length, t.length <= 5 * 10^4","s and t consist of lowercase English letters."],testCases:[{input:'"anagram", "nagaram"',expected:"True"},{input:'"rat", "car"',expected:"False"}],starterCode:{python:`class Solution:
    def solution(self, s, t):
        # Count character frequencies
        pass

s = Solution()
print(s.solution("anagram", "nagaram"))`},solutions:{optimal:{name:"Hash Map Counter",timeComplexity:"O(n)",spaceComplexity:"O(1)",description:"Count character frequencies using a hash map. Space is O(1) since alphabet is fixed (26 letters).",code:`class Solution:
    def solution(self, s, t):
        if len(s) != len(t):
            return False

        # Count characters in s
        count = {}
        for char in s:
            count[char] = count.get(char, 0) + 1

        # Subtract counts for t
        for char in t:
            if char not in count:
                return False
            count[char] -= 1
            if count[char] < 0:
                return False

        return True

s = Solution()
print(s.solution("anagram", "nagaram"))`},sorting:{name:"Sorting",timeComplexity:"O(n log n)",spaceComplexity:"O(n)",description:"Sort both strings and compare. Simple but slower.",code:`class Solution:
    def solution(self, s, t):
        return sorted(s) == sorted(t)

s = Solution()
print(s.solution("anagram", "nagaram"))`},arrayCounter:{name:"Array Counter (26 letters)",timeComplexity:"O(n)",spaceComplexity:"O(1)",description:"Use a fixed-size array of 26 for lowercase letters.",code:`class Solution:
    def solution(self, s, t):
        if len(s) != len(t):
            return False

        # Use array for 26 lowercase letters
        count = [0] * 26

        for i in range(len(s)):
            count[ord(s[i]) - ord('a')] += 1
            count[ord(t[i]) - ord('a')] -= 1

        return all(c == 0 for c in count)

s = Solution()
print(s.solution("anagram", "nagaram"))`}},hints:["Compare character frequencies in both strings.","You can use a hash map or sort both strings."]},"contains-duplicate":{id:"contains-duplicate",title:"Contains Duplicate",difficulty:"Easy",category:"Arrays & Hashing",description:"Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.",examples:[{input:"nums = [1,2,3,1]",output:"true",explanation:"1 appears twice."},{input:"nums = [1,2,3,4]",output:"false",explanation:"All elements are distinct."}],constraints:["1 <= nums.length <= 10^5","-10^9 <= nums[i] <= 10^9"],testCases:[{input:"[1,2,3,1]",expected:"True"},{input:"[1,2,3,4]",expected:"False"}],starterCode:{python:`class Solution:
    def solution(self, nums):
        # Use a set for O(n) lookup
        pass

s = Solution()
print(s.solution([1,2,3,1]))`},solutions:{optimal:{name:"Hash Set",timeComplexity:"O(n)",spaceComplexity:"O(n)",description:"Use a set to track seen numbers. Return true if we see a duplicate.",code:`class Solution:
    def solution(self, nums):
        seen = set()
        for num in nums:
            if num in seen:
                return True
            seen.add(num)
        return False

s = Solution()
print(s.solution([1,2,3,1]))`},setLength:{name:"Set Length Comparison",timeComplexity:"O(n)",spaceComplexity:"O(n)",description:"Compare length of set vs original array. One-liner approach.",code:`class Solution:
    def solution(self, nums):
        return len(nums) != len(set(nums))

s = Solution()
print(s.solution([1,2,3,1]))`},sorting:{name:"Sorting",timeComplexity:"O(n log n)",spaceComplexity:"O(1)",description:"Sort the array, then check adjacent elements for duplicates.",code:`class Solution:
    def solution(self, nums):
        nums.sort()
        for i in range(1, len(nums)):
            if nums[i] == nums[i - 1]:
                return True
        return False

s = Solution()
print(s.solution([1,2,3,1]))`},bruteForce:{name:"Brute Force",timeComplexity:"O(n²)",spaceComplexity:"O(1)",description:"Compare each element with every other element.",code:`class Solution:
    def solution(self, nums):
        n = len(nums)
        for i in range(n):
            for j in range(i + 1, n):
                if nums[i] == nums[j]:
                    return True
        return False

s = Solution()
print(s.solution([1,2,3,1]))`}},hints:["A set only stores unique values.","Compare the length of the set vs the original array."]},"contains-duplicate":{id:"contains-duplicate",title:"Contains Duplicate",difficulty:"Easy",category:"Arrays & Hashing",description:"Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.",examples:[{input:"nums = [1,2,3,1]",output:"true",explanation:"1 appears twice."},{input:"nums = [1,2,3,4]",output:"false",explanation:"All elements are distinct."}],constraints:["1 <= nums.length <= 10^5","-10^9 <= nums[i] <= 10^9"],testCases:[{input:"[1,2,3,1]",expected:"True"},{input:"[1,2,3,4]",expected:"False"}],starterCode:{python:`class Solution:
    def solution(self, nums):
        # Use a set for O(n) lookup
        pass

s = Solution()
print(s.solution([1,2,3,1]))`},solutions:{optimal:{name:"Hash Set",timeComplexity:"O(n)",spaceComplexity:"O(n)",description:"Use a set to track seen numbers. Return true if we see a duplicate.",code:`class Solution:
    def solution(self, nums):
        seen = set()
        for num in nums:
            if num in seen:
                return True
            seen.add(num)
        return False

s = Solution()
print(s.solution([1,2,3,1]))`},setLength:{name:"Set Length Comparison",timeComplexity:"O(n)",spaceComplexity:"O(n)",description:"Compare length of set vs original array. One-liner approach.",code:`class Solution:
    def solution(self, nums):
        return len(nums) != len(set(nums))

s = Solution()
print(s.solution([1,2,3,1]))`},sorting:{name:"Sorting",timeComplexity:"O(n log n)",spaceComplexity:"O(1)",description:"Sort the array, then check adjacent elements for duplicates.",code:`class Solution:
    def solution(self, nums):
        nums.sort()
        for i in range(1, len(nums)):
            if nums[i] == nums[i - 1]:
                return True
        return False

s = Solution()
print(s.solution([1,2,3,1]))`},bruteForce:{name:"Brute Force",timeComplexity:"O(n²)",spaceComplexity:"O(1)",description:"Compare each element with every other element.",code:`class Solution:
    def solution(self, nums):
        n = len(nums)
        for i in range(n):
            for j in range(i + 1, n):
                if nums[i] == nums[j]:
                    return True
        return False

s = Solution()
print(s.solution([1,2,3,1]))`}},hints:["A set only stores unique values.","Compare the length of the set vs the original array."]},"group-anagrams":{id:"group-anagrams",title:"Group Anagrams",difficulty:"Medium",category:"Arrays & Hashing",description:"Given an array of strings `strs`, group the anagrams together. You can return the answer in any order.\n\nAn Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.",examples:[{input:'strs = ["eat","tea","tan","ate","nat","bat"]',output:'[["bat"],["nat","tan"],["ate","eat","tea"]]',explanation:"Grouped by anagrams."},{input:'strs = [""]',output:'[[""]]',explanation:"Empty string is an anagram of itself."},{input:'strs = ["a"]',output:'[["a"]]',explanation:"Single character string."}],constraints:["1 <= strs.length <= 10^4","0 <= strs[i].length <= 100","strs[i] consists of lowercase English letters."],testCases:[{input:'["eat","tea","tan","ate","nat","bat"]',expected:'[["bat"],["nat","tan"],["ate","eat","tea"]]'},{input:'[""]',expected:'[[""]]'},{input:'["a"]',expected:'[["a"]]'}],starterCode:{python:`class Solution:
    def solution(self, strs):
        # Use a hash map where key is sorted string and value is list of anagrams
        pass

s = Solution()
print(s.solution(["eat","tea","tan","ate","nat","bat"]))`},solutions:{optimal:{name:"Hash Map with Sorted String Key",timeComplexity:"O(N * K log K)",spaceComplexity:"O(N * K)",description:"For each string, sort it to use as a key in a hash map. Group original strings by this key.",code:`from collections import defaultdict

class Solution:
    def solution(self, strs):
        # Defaultdict to store lists of anagrams
        anagram_map = defaultdict(list)

        for word in strs:
            # Sort the word to create a unique key for anagrams
            sorted_word = "".join(sorted(word))
            anagram_map[sorted_word].append(word)

        # Return the values (lists of anagrams) from the hash map
        return list(anagram_map.values())

s = Solution()
print(s.solution(["eat","tea","tan","ate","nat","bat"]))`},countArrayKey:{name:"Hash Map with Character Count Tuple Key",timeComplexity:"O(N * K)",spaceComplexity:"O(N * K)",description:"Create a count array (tuple for hashability) for each word. Use this tuple as the hash map key.",code:`from collections import defaultdict

class Solution:
    def solution(self, strs):
        anagram_map = defaultdict(list)

        for word in strs:
            # Create a count array for characters (a-z)
            count = [0] * 26
            for char in word:
                count[ord(char) - ord('a')] += 1
            # Use the tuple of counts as the key
            anagram_map[tuple(count)].append(word)

        return list(anagram_map.values())

s = Solution()
print(s.solution(["eat","tea","tan","ate","nat","bat"]))`}},hints:["Anagrams have the same characters with the same frequencies.","A sorted version of an anagram is unique.","A character count array (or tuple) can also serve as a unique key for anagrams."]},"valid-palindrome":{id:"valid-palindrome",title:"Valid Palindrome",difficulty:"Easy",category:"Two Pointers",description:"Given a string `s`, return `true` if it is a palindrome, or `false` otherwise.\n\nConsider only alphanumeric characters and ignore cases.",examples:[{input:'s = "A man, a plan, a canal: Panama"',output:"true",explanation:'"amanaplanacanalpanama" is a palindrome.'},{input:'s = "race a car"',output:"false",explanation:'"raceacar" is not a palindrome.'}],constraints:["1 <= s.length <= 2 * 10^5","s consists only of printable ASCII characters."],testCases:[{input:'"A man, a plan, a canal: Panama"',expected:"True"},{input:'"race a car"',expected:"False"}],starterCode:{python:`def solution(s):
    # Use two pointers from both ends
    pass

print(solution("A man, a plan, a canal: Panama"))`},solutions:{optimal:{name:"Two Pointers (In-place)",timeComplexity:"O(n)",spaceComplexity:"O(1)",description:"Use two pointers from both ends, skipping non-alphanumeric characters.",code:`def solution(s):
    left, right = 0, len(s) - 1

    while left < right:
        # Skip non-alphanumeric from left
        while left < right and not s[left].isalnum():
            left += 1
        # Skip non-alphanumeric from right
        while left < right and not s[right].isalnum():
            right -= 1

        # Compare characters (case-insensitive)
        if s[left].lower() != s[right].lower():
            return False

        left += 1
        right -= 1

    return True

print(solution("A man, a plan, a canal: Panama"))`},cleanFirst:{name:"Clean String First",timeComplexity:"O(n)",spaceComplexity:"O(n)",description:"First clean the string, then compare with reverse.",code:`def solution(s):
    # Clean: keep only alphanumeric, convert to lowercase
    cleaned = ''.join(c.lower() for c in s if c.isalnum())
    return cleaned == cleaned[::-1]

print(solution("A man, a plan, a canal: Panama"))`},recursive:{name:"Recursive",timeComplexity:"O(n)",spaceComplexity:"O(n)",description:"Recursive approach comparing characters from both ends.",code:`def solution(s):
    # Clean the string first
    cleaned = ''.join(c.lower() for c in s if c.isalnum())

    def is_palindrome(left, right):
        if left >= right:
            return True
        if cleaned[left] != cleaned[right]:
            return False
        return is_palindrome(left + 1, right - 1)

    return is_palindrome(0, len(cleaned) - 1)

print(solution("A man, a plan, a canal: Panama"))`}},hints:["Clean the string first (remove non-alphanumeric, lowercase).","Compare characters from start and end moving inward."]},"two-sum-sorted":{id:"two-sum-sorted",title:"Two Sum II - Sorted Array",difficulty:"Medium",category:"Two Pointers",description:`Given a 1-indexed sorted array, find two numbers that add up to a target.

Return the indices of the two numbers (1-indexed).`,examples:[{input:"numbers = [2,7,11,15], target = 9",output:"[1,2]",explanation:"2 + 7 = 9"}],constraints:["2 <= numbers.length <= 3 * 10^4","numbers is sorted in non-decreasing order."],testCases:[{input:"[2,7,11,15], 9",expected:"[1, 2]"},{input:"[2,3,4], 6",expected:"[1, 3]"}],starterCode:{python:`def solution(numbers, target):
    # Two pointers - no extra space needed!
    pass

print(solution([2,7,11,15], 9))`},solutions:{optimal:{name:"Two Pointers",timeComplexity:"O(n)",spaceComplexity:"O(1)",description:"Use two pointers from both ends. Since array is sorted, adjust pointers based on sum.",code:`def solution(numbers, target):
    left, right = 0, len(numbers) - 1

    while left < right:
        current_sum = numbers[left] + numbers[right]

        if current_sum == target:
            return [left + 1, right + 1]  # 1-indexed
        elif current_sum < target:
            left += 1  # Need larger sum
        else:
            right -= 1  # Need smaller sum

    return []

print(solution([2,7,11,15], 9))`},binarySearch:{name:"Binary Search",timeComplexity:"O(n log n)",spaceComplexity:"O(1)",description:"For each element, binary search for its complement.",code:`def solution(numbers, target):
    def binary_search(arr, left, target):
        right = len(arr) - 1
        while left <= right:
            mid = (left + right) // 2
            if arr[mid] == target:
                return mid
            elif arr[mid] < target:
                left = mid + 1
            else:
                right = mid - 1
        return -1

    for i in range(len(numbers)):
        complement = target - numbers[i]
        j = binary_search(numbers, i + 1, complement)
        if j != -1:
            return [i + 1, j + 1]  # 1-indexed

    return []

print(solution([2,7,11,15], 9))`},hashMap:{name:"Hash Map",timeComplexity:"O(n)",spaceComplexity:"O(n)",description:"Same as regular Two Sum, but uses extra space.",code:`def solution(numbers, target):
    seen = {}
    for i, num in enumerate(numbers):
        complement = target - num
        if complement in seen:
            return [seen[complement] + 1, i + 1]  # 1-indexed
        seen[num] = i
    return []

print(solution([2,7,11,15], 9))`}},hints:["Since array is sorted, use two pointers.","If sum < target, move left pointer. If sum > target, move right pointer."]},"two-sum-sorted":{id:"two-sum-sorted",title:"Two Sum II - Sorted Array",difficulty:"Medium",category:"Two Pointers",description:`Given a 1-indexed sorted array, find two numbers that add up to a target.

Return the indices of the two numbers (1-indexed).`,examples:[{input:"numbers = [2,7,11,15], target = 9",output:"[1,2]",explanation:"2 + 7 = 9"}],constraints:["2 <= numbers.length <= 3 * 10^4","numbers is sorted in non-decreasing order."],testCases:[{input:"[2,7,11,15], 9",expected:"[1, 2]"},{input:"[2,3,4], 6",expected:"[1, 3]"}],starterCode:{python:`def solution(numbers, target):
    # Two pointers - no extra space needed!
    pass

print(solution([2,7,11,15], 9))`},solutions:{optimal:{name:"Two Pointers",timeComplexity:"O(n)",spaceComplexity:"O(1)",description:"Use two pointers from both ends. Since array is sorted, adjust pointers based on sum.",code:`def solution(numbers, target):
    left, right = 0, len(numbers) - 1

    while left < right:
        current_sum = numbers[left] + numbers[right]

        if current_sum == target:
            return [left + 1, right + 1]  # 1-indexed
        elif current_sum < target:
            left += 1  # Need larger sum
        else:
            right -= 1  # Need smaller sum

    return []

print(solution([2,7,11,15], 9))`},binarySearch:{name:"Binary Search",timeComplexity:"O(n log n)",spaceComplexity:"O(1)",description:"For each element, binary search for its complement.",code:`def solution(numbers, target):
    def binary_search(arr, left, target):
        right = len(arr) - 1
        while left <= right:
            mid = (left + right) // 2
            if arr[mid] == target:
                return mid
            elif arr[mid] < target:
                left = mid + 1
            else:
                right = mid - 1
        return -1

    for i in range(len(numbers)):
        complement = target - numbers[i]
        j = binary_search(numbers, i + 1, complement)
        if j != -1:
            return [i + 1, j + 1]  # 1-indexed

    return []

print(solution([2,7,11,15], 9))`},hashMap:{name:"Hash Map",timeComplexity:"O(n)",spaceComplexity:"O(n)",description:"Same as regular Two Sum, but uses extra space.",code:`def solution(numbers, target):
    seen = {}
    for i, num in enumerate(numbers):
        complement = target - num
        if complement in seen:
            return [seen[complement] + 1, i + 1]  # 1-indexed
        seen[num] = i
    return []

print(solution([2,7,11,15], 9))`}},hints:["Since array is sorted, use two pointers.","If sum < target, move left pointer. If sum > target, move right pointer."]},"container-with-most-water":{id:"container-with-most-water",title:"Container With Most Water",difficulty:"Medium",category:"Two Pointers",description:`Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.`,examples:[{input:"height = [1,8,6,2,5,4,8,3,7]",output:"49",explanation:"The vertical lines are at x=1 and x=8 with heights 8 and 7 respectively. The area is 7 * (8 - 1) = 49."}],constraints:["n == height.length","2 <= n <= 10^5","0 <= height[i] <= 10^4"],testCases:[{input:"[1,8,6,2,5,4,8,3,7]",expected:"49"},{input:"[1,1]",expected:"1"}],starterCode:{python:`def solution(height):
    # Two pointers from ends
    pass

print(solution([1,8,6,2,5,4,8,3,7]))`},solutions:{optimal:{name:"Two Pointers",timeComplexity:"O(n)",spaceComplexity:"O(1)",description:"Start with pointers at both ends. Move the pointer pointing to the shorter line inward. This is because moving the taller line inward will definitely not increase the height, and thus the area, while moving the shorter line inward might find a taller line that can form a larger container.",code:`def solution(height):
    max_area = 0
    left = 0
    right = len(height) - 1

    while left < right:
        # Calculate current area
        current_area = min(height[left], height[right]) * (right - left)
        max_area = max(max_area, current_area)

        # Move the pointer pointing to the shorter line
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1

    return max_area

print(solution([1,8,6,2,5,4,8,3,7]))`},bruteForce:{name:"Brute Force",timeComplexity:"O(n²)",spaceComplexity:"O(1)",description:"Check every possible pair of lines and calculate the area. Keep track of the maximum area found.",code:`def solution(height):
    max_area = 0
    n = len(height)

    for i in range(n):
        for j in range(i + 1, n):
            current_area = min(height[i], height[j]) * (j - i)
            max_area = max(max_area, current_area)

    return max_area

print(solution([1,8,6,2,5,4,8,3,7]))`}},hints:["Use two pointers, one at each end of the array.","The area is limited by the shorter line.","To find a larger area, move the pointer of the shorter line inward."]},"valid-parentheses":{id:"valid-parentheses",title:"Valid Parentheses",difficulty:"Easy",category:"Stack",description:`Given a string containing just '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

Valid if: brackets closed by same type, in correct order.`,examples:[{input:'s = "()"',output:"true",explanation:"Valid pair."},{input:'s = "()[]{}"',output:"true",explanation:"Multiple valid pairs."},{input:'s = "(]"',output:"false",explanation:"Mismatched types."}],constraints:["1 <= s.length <= 10^4","s consists of parentheses only."],testCases:[{input:'"()"',expected:"True"},{input:'"()[]{}"',expected:"True"},{input:'"(]"',expected:"False"}],starterCode:{python:`def solution(s):
    # Use a stack to track opening brackets
    pass

print(solution("()[]{}"))`},solutions:{optimal:{name:"Stack with Hash Map",timeComplexity:"O(n)",spaceComplexity:"O(n)",description:"Use a stack to track opening brackets. Use hash map for bracket matching.",code:`def solution(s):
    stack = []
    mapping = {')': '(', '}': '{', ']': '['}

    for char in s:
        if char in mapping:
            # Closing bracket
            if not stack or stack[-1] != mapping[char]:
                return False
            stack.pop()
        else:
            # Opening bracket
            stack.append(char)

    return len(stack) == 0

print(solution("()[]{}"))`},basicStack:{name:"Basic Stack",timeComplexity:"O(n)",spaceComplexity:"O(n)",description:"Stack approach with explicit if-else for each bracket type.",code:`def solution(s):
    stack = []

    for char in s:
        if char in '({[':
            stack.append(char)
        else:
            if not stack:
                return False
            top = stack.pop()
            if char == ')' and top != '(':
                return False
            if char == '}' and top != '{':
                return False
            if char == ']' and top != '[':
                return False

    return len(stack) == 0

print(solution("()[]{}"))`},replacement:{name:"String Replacement",timeComplexity:"O(n²)",spaceComplexity:"O(n)",description:"Repeatedly remove valid pairs until string is empty or no more pairs.",code:`def solution(s):
    while '()' in s or '{}' in s or '[]' in s:
        s = s.replace('()', '')
        s = s.replace('{}', '')
        s = s.replace('[]', '')
    return s == ''

print(solution("()[]{}"))`}},hints:["Push opening brackets onto stack.","For closing brackets, check if it matches top of stack.","Stack should be empty at the end."]},"min-stack":{id:"min-stack",title:"Min Stack",difficulty:"Medium",category:"Stack",description:"Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.",examples:[{input:"push(-2), push(0), push(-3), getMin(), pop(), top(), getMin()",output:"-3, 0, -2",explanation:"Track min at each level."}],constraints:["Methods will be called at most 3 * 10^4 times."],testCases:[{input:'{"methods": ["MinStack", "push", "push", "push", "getMin", "pop", "top", "getMin"], "args": [[], [-2], [0], [-3], [], [], [], []]}',expected:"[-3, 0, -2]"}],starterCode:{python:`class MinStack:
    def __init__(self):
        pass

    def push(self, val):
        pass

    def pop(self):
        pass

    def top(self):
        pass

    def getMin(self):
        pass

# Test
s = MinStack()
s.push(-2); s.push(0); s.push(-3)
print(s.getMin())  # -3`},solutions:{optimal:{name:"Two Stacks",timeComplexity:"O(1) all operations",spaceComplexity:"O(n)",description:"Use two stacks: one for values, one for minimums at each level.",code:`class MinStack:
    def __init__(self):
        self.stack = []
        self.min_stack = []

    def push(self, val):
        self.stack.append(val)
        # Push minimum so far onto min_stack
        if not self.min_stack or val <= self.min_stack[-1]:
            self.min_stack.append(val)
        else:
            self.min_stack.append(self.min_stack[-1])

    def pop(self):
        self.stack.pop()
        self.min_stack.pop()

    def top(self):
        return self.stack[-1]

    def getMin(self):
        return self.min_stack[-1]

# Test
s = MinStack()
s.push(-2); s.push(0); s.push(-3)
print(s.getMin())  # -3
s.pop()
print(s.top())     # 0
print(s.getMin())  # -2`},singleStack:{name:"Single Stack with Tuples",timeComplexity:"O(1) all operations",spaceComplexity:"O(n)",description:"Store (value, currentMin) pairs in a single stack.",code:`class MinStack:
    def __init__(self):
        self.stack = []  # Each element is (value, min_so_far)

    def push(self, val):
        if not self.stack:
            self.stack.append((val, val))
        else:
            current_min = min(val, self.stack[-1][1])
            self.stack.append((val, current_min))

    def pop(self):
        self.stack.pop()

    def top(self):
        return self.stack[-1][0]

    def getMin(self):
        return self.stack[-1][1]

# Test
s = MinStack()
s.push(-2); s.push(0); s.push(-3)
print(s.getMin())  # -3
s.pop()
print(s.top())     # 0
print(s.getMin())  # -2`},optimizedMinStack:{name:"Optimized Min Stack",timeComplexity:"O(1) all operations",spaceComplexity:"O(n) worst case, better average",description:"Only push to min_stack when new value <= current min.",code:`class MinStack:
    def __init__(self):
        self.stack = []
        self.min_stack = []

    def push(self, val):
        self.stack.append(val)
        # Only push if <= current min (handles duplicates)
        if not self.min_stack or val <= self.min_stack[-1]:
            self.min_stack.append(val)

    def pop(self):
        val = self.stack.pop()
        # Only pop from min_stack if it matches
        if val == self.min_stack[-1]:
            self.min_stack.pop()

    def top(self):
        return self.stack[-1]

    def getMin(self):
        return self.min_stack[-1]

# Test
s = MinStack()
s.push(-2); s.push(0); s.push(-3)
print(s.getMin())  # -3
s.pop()
print(s.top())     # 0
print(s.getMin())  # -2`}},hints:["Use two stacks - one for values, one for minimums.","Or store (value, currentMin) pairs in a single stack."]},"min-stack":{id:"min-stack",title:"Min Stack",difficulty:"Medium",category:"Stack",description:"Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.",examples:[{input:"push(-2), push(0), push(-3), getMin(), pop(), top(), getMin()",output:"-3, 0, -2",explanation:"Track min at each level."}],constraints:["Methods will be called at most 3 * 10^4 times."],testCases:[{input:'{"methods": ["MinStack", "push", "push", "push", "getMin", "pop", "top", "getMin"], "args": [[], [-2], [0], [-3], [], [], [], []]}',expected:"[-3, 0, -2]"}],starterCode:{python:`class MinStack:
    def __init__(self):
        pass

    def push(self, val):
        pass

    def pop(self):
        pass

    def top(self):
        pass

    def getMin(self):
        pass

# Test
s = MinStack()
s.push(-2); s.push(0); s.push(-3)
print(s.getMin())  # -3`},solutions:{optimal:{name:"Two Stacks",timeComplexity:"O(1) all operations",spaceComplexity:"O(n)",description:"Use two stacks: one for values, one for minimums at each level.",code:`class MinStack:
    def __init__(self):
        self.stack = []
        self.min_stack = []

    def push(self, val):
        self.stack.append(val)
        # Push minimum so far onto min_stack
        if not self.min_stack or val <= self.min_stack[-1]:
            self.min_stack.append(val)
        else:
            self.min_stack.append(self.min_stack[-1])

    def pop(self):
        self.stack.pop()
        self.min_stack.pop()

    def top(self):
        return self.stack[-1]

    def getMin(self):
        return self.min_stack[-1]

# Test
s = MinStack()
s.push(-2); s.push(0); s.push(-3)
print(s.getMin())  # -3
s.pop()
print(s.top())     # 0
print(s.getMin())  # -2`},singleStack:{name:"Single Stack with Tuples",timeComplexity:"O(1) all operations",spaceComplexity:"O(n)",description:"Store (value, currentMin) pairs in a single stack.",code:`class MinStack:
    def __init__(self):
        self.stack = []  # Each element is (value, min_so_far)

    def push(self, val):
        if not self.stack:
            self.stack.append((val, val))
        else:
            current_min = min(val, self.stack[-1][1])
            self.stack.append((val, current_min))

    def pop(self):
        self.stack.pop()

    def top(self):
        return self.stack[-1][0]

    def getMin(self):
        return self.stack[-1][1]

# Test
s = MinStack()
s.push(-2); s.push(0); s.push(-3)
print(s.getMin())  # -3
s.pop()
print(s.top())     # 0
print(s.getMin())  # -2`},optimizedMinStack:{name:"Optimized Min Stack",timeComplexity:"O(1) all operations",spaceComplexity:"O(n) worst case, better average",description:"Only push to min_stack when new value <= current min.",code:`class MinStack:
    def __init__(self):
        self.stack = []
        self.min_stack = []

    def push(self, val):
        self.stack.append(val)
        # Only push if <= current min (handles duplicates)
        if not self.min_stack or val <= self.min_stack[-1]:
            self.min_stack.append(val)

    def pop(self):
        val = self.stack.pop()
        # Only pop from min_stack if it matches
        if val == self.min_stack[-1]:
            self.min_stack.pop()

    def top(self):
        return self.stack[-1]

    def getMin(self):
        return self.min_stack[-1]

# Test
s = MinStack()
s.push(-2); s.push(0); s.push(-3)
print(s.getMin())  # -3
s.pop()
print(s.top())     # 0
print(s.getMin())  # -2`}},hints:["Use two stacks - one for values, one for minimums.","Or store (value, currentMin) pairs in a single stack."]},"evaluate-reverse-polish-notation":{id:"evaluate-reverse-polish-notation",title:"Evaluate Reverse Polish Notation",difficulty:"Medium",category:"Stack",description:`Evaluate the value of an arithmetic expression in Reverse Polish Notation.

Valid operators are +, -, *, /. Each operand may be an integer or another expression.`,examples:[{input:'tokens = ["2","1","+","3","*"]',output:"9",explanation:"((2 + 1) * 3) = 9"},{input:'tokens = ["4","13","5","/","+"]',output:"6",explanation:"(4 + (13 / 5)) = 6"}],constraints:["1 <= tokens.length <= 10^4","tokens[i] is an operator or an integer."],testCases:[{input:'["2","1","+","3","*"]',expected:"9"},{input:'["4","13","5","/","+"]',expected:"6"}],starterCode:{python:`def solution(tokens):
    # Use a stack to store numbers
    pass

print(solution(["2","1","+","3","*"]))`},solutions:{optimal:{name:"Stack",timeComplexity:"O(n)",spaceComplexity:"O(n)",description:"Iterate through tokens. If operand, push to stack. If operator, pop two operands, perform operation, push result back.",code:`def solution(tokens):
    stack = []
    
    for token in tokens:
        if token == "+":
            b = stack.pop()
            a = stack.pop()
            stack.append(a + b)
        elif token == "-":
            b = stack.pop()
            a = stack.pop()
            stack.append(a - b)
        elif token == "*":
            b = stack.pop()
            a = stack.pop()
            stack.append(a * b)
        elif token == "/":
            b = stack.pop()
            a = stack.pop()
            # Integer division towards zero
            stack.append(int(a / b))
        else:
            stack.append(int(token))
            
    return stack[0]

print(solution(["2","1","+","3","*"]))`}},hints:["Use a stack.","Push numbers onto the stack.","When an operator is encountered, pop two numbers, perform the operation, and push the result back onto the stack."]},"binary-search":{id:"binary-search",title:"Binary Search",difficulty:"Easy",category:"Binary Search",description:`Given a sorted array and a target, return the index if found, else -1.

Must be O(log n) time complexity.`,examples:[{input:"nums = [-1,0,3,5,9,12], target = 9",output:"4",explanation:"9 is at index 4."},{input:"nums = [-1,0,3,5,9,12], target = 2",output:"-1",explanation:"2 not found."}],constraints:["1 <= nums.length <= 10^4","nums is sorted in ascending order."],testCases:[{input:"[-1,0,3,5,9,12], 9",expected:"4"},{input:"[-1,0,3,5,9,12], 2",expected:"-1"}],starterCode:{python:`def solution(nums, target):
    # Classic binary search
    pass

print(solution([-1,0,3,5,9,12], 9))`},solutions:{iterative:{name:"Iterative Binary Search",timeComplexity:"O(log n)",spaceComplexity:"O(1)",description:"Classic iterative binary search using two pointers.",code:`def solution(nums, target):
    left, right = 0, len(nums) - 1

    while left <= right:
        mid = (left + right) // 2

        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1

print(solution([-1,0,3,5,9,12], 9))`},recursive:{name:"Recursive Binary Search",timeComplexity:"O(log n)",spaceComplexity:"O(log n)",description:"Recursive approach - cleaner but uses stack space.",code:`def solution(nums, target):
    def binary_search(left, right):
        if left > right:
            return -1

        mid = (left + right) // 2

        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            return binary_search(mid + 1, right)
        else:
            return binary_search(left, mid - 1)

    return binary_search(0, len(nums) - 1)

print(solution([-1,0,3,5,9,12], 9))`},linear:{name:"Linear Search (Comparison)",timeComplexity:"O(n)",spaceComplexity:"O(1)",description:"Simple linear search - does not meet O(log n) requirement but shows contrast.",code:`def solution(nums, target):
    # Linear search - O(n), doesn't meet the requirement
    # Shown for comparison only
    for i, num in enumerate(nums):
        if num == target:
            return i
    return -1

print(solution([-1,0,3,5,9,12], 9))`}},hints:["Use left and right pointers.","mid = (left + right) // 2","Adjust left or right based on comparison."]},"search-rotated-array":{id:"search-rotated-array",title:"Search in Rotated Sorted Array",difficulty:"Medium",category:"Binary Search",description:"Given a rotated sorted array (e.g., [4,5,6,7,0,1,2]), find a target in O(log n) time.",examples:[{input:"nums = [4,5,6,7,0,1,2], target = 0",output:"4",explanation:"0 is at index 4."}],constraints:["1 <= nums.length <= 5000","nums contains distinct values."],testCases:[{input:"[4,5,6,7,0,1,2], 0",expected:"4"},{input:"[4,5,6,7,0,1,2], 3",expected:"-1"}],starterCode:{python:`def solution(nums, target):
    # Modified binary search
    pass

print(solution([4,5,6,7,0,1,2], 0))`},solutions:{optimal:{name:"Modified Binary Search",timeComplexity:"O(log n)",spaceComplexity:"O(1)",description:"One half is always sorted. Determine which half and if target is in that range.",code:`def solution(nums, target):
    left, right = 0, len(nums) - 1

    while left <= right:
        mid = (left + right) // 2

        if nums[mid] == target:
            return mid

        # Check which half is sorted
        if nums[left] <= nums[mid]:
            # Left half is sorted
            if nums[left] <= target < nums[mid]:
                right = mid - 1
            else:
                left = mid + 1
        else:
            # Right half is sorted
            if nums[mid] < target <= nums[right]:
                left = mid + 1
            else:
                right = mid - 1

    return -1

print(solution([4,5,6,7,0,1,2], 0))`},findPivotFirst:{name:"Find Pivot Then Search",timeComplexity:"O(log n)",spaceComplexity:"O(1)",description:"First find the rotation pivot, then binary search the correct half.",code:`def solution(nums, target):
    n = len(nums)

    # Find the pivot (smallest element)
    left, right = 0, n - 1
    while left < right:
        mid = (left + right) // 2
        if nums[mid] > nums[right]:
            left = mid + 1
        else:
            right = mid

    pivot = left

    # Binary search in the correct half
    if target >= nums[pivot] and target <= nums[n - 1]:
        left, right = pivot, n - 1
    else:
        left, right = 0, pivot - 1

    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1

print(solution([4,5,6,7,0,1,2], 0))`},linear:{name:"Linear Search (Comparison)",timeComplexity:"O(n)",spaceComplexity:"O(1)",description:"Simple but does not meet O(log n) requirement.",code:`def solution(nums, target):
    # O(n) - doesn't meet requirement, for comparison
    for i, num in enumerate(nums):
        if num == target:
            return i
    return -1

print(solution([4,5,6,7,0,1,2], 0))`}},hints:["One half is always sorted.","Check which half is sorted, then decide which half to search."]},"search-rotated-array":{id:"search-rotated-array",title:"Search in Rotated Sorted Array",difficulty:"Medium",category:"Binary Search",description:"Given a rotated sorted array (e.g., [4,5,6,7,0,1,2]), find a target in O(log n) time.",examples:[{input:"nums = [4,5,6,7,0,1,2], target = 0",output:"4",explanation:"0 is at index 4."}],constraints:["1 <= nums.length <= 5000","nums contains distinct values."],testCases:[{input:"[4,5,6,7,0,1,2], 0",expected:"4"},{input:"[4,5,6,7,0,1,2], 3",expected:"-1"}],starterCode:{python:`def solution(nums, target):
    # Modified binary search
    pass

print(solution([4,5,6,7,0,1,2], 0))`},solutions:{optimal:{name:"Modified Binary Search",timeComplexity:"O(log n)",spaceComplexity:"O(1)",description:"One half is always sorted. Determine which half and if target is in that range.",code:`def solution(nums, target):
    left, right = 0, len(nums) - 1

    while left <= right:
        mid = (left + right) // 2

        if nums[mid] == target:
            return mid

        # Check which half is sorted
        if nums[left] <= nums[mid]:
            # Left half is sorted
            if nums[left] <= target < nums[mid]:
                right = mid - 1
            else:
                left = mid + 1
        else:
            # Right half is sorted
            if nums[mid] < target <= nums[right]:
                left = mid + 1
            else:
                right = mid - 1

    return -1

print(solution([4,5,6,7,0,1,2], 0))`},findPivotFirst:{name:"Find Pivot Then Search",timeComplexity:"O(log n)",spaceComplexity:"O(1)",description:"First find the rotation pivot, then binary search the correct half.",code:`def solution(nums, target):
    n = len(nums)

    # Find the pivot (smallest element)
    left, right = 0, n - 1
    while left < right:
        mid = (left + right) // 2
        if nums[mid] > nums[right]:
            left = mid + 1
        else:
            right = mid

    pivot = left

    # Binary search in the correct half
    if target >= nums[pivot] and target <= nums[n - 1]:
        left, right = pivot, n - 1
    else:
        left, right = 0, pivot - 1

    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1

print(solution([4,5,6,7,0,1,2], 0))`},linear:{name:"Linear Search (Comparison)",timeComplexity:"O(n)",spaceComplexity:"O(1)",description:"Simple but does not meet O(log n) requirement.",code:`def solution(nums, target):
    # O(n) - doesn't meet requirement, for comparison
    for i, num in enumerate(nums):
        if num == target:
            return i
    return -1

print(solution([4,5,6,7,0,1,2], 0))`}},hints:["One half is always sorted.","Check which half is sorted, then decide which half to search."]},"find-minimum-in-rotated-sorted-array":{id:"find-minimum-in-rotated-sorted-array",title:"Find Minimum in Rotated Sorted Array",difficulty:"Medium",category:"Binary Search",description:`Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2] if it was rotated 4 times.

Given the sorted rotated array nums, return the minimum element of this array.`,examples:[{input:"nums = [3,4,5,1,2]",output:"1",explanation:"The original array was [1,2,3,4,5] rotated 3 times."},{input:"nums = [4,5,6,7,0,1,2]",output:"0",explanation:"The original array was [0,1,2,4,5,6,7] rotated 4 times."}],constraints:["n == nums.length","1 <= n <= 5000","nums contains unique elements.","nums is sorted and rotated between 1 and n times."],testCases:[{input:"[3,4,5,1,2]",expected:"1"},{input:"[4,5,6,7,0,1,2]",expected:"0"}],starterCode:{python:`def solution(nums):
    # Modified binary search to find inflection point
    pass

print(solution([3,4,5,1,2]))`},solutions:{optimal:{name:"Binary Search",timeComplexity:"O(log n)",spaceComplexity:"O(1)",description:"Use binary search. The minimum element is the only one that is smaller than its previous element (if it's not the first element). Compare mid with right. If nums[mid] > nums[right], minimum is in right half. Else, minimum is in left half (including mid).",code:`def solution(nums):
    left, right = 0, len(nums) - 1
    
    while left < right:
        mid = (left + right) // 2
        
        # If mid element is greater than right element,
        # it means the minimum is in the right half (mid+1 to right)
        if nums[mid] > nums[right]:
            left = mid + 1
        # Otherwise, the minimum is in the left half (left to mid)
        else:
            right = mid
            
    # When left == right, we have found the minimum element
    return nums[left]

print(solution([3,4,5,1,2]))`},linear:{name:"Linear Scan",timeComplexity:"O(n)",spaceComplexity:"O(1)",description:"Iterate through the array and find the minimum element. Simple but not optimal.",code:`def solution(nums):
    min_val = float('inf')
    for num in nums:
        min_val = min(min_val, num)
    return min_val

print(solution([3,4,5,1,2]))`}},hints:["Use binary search.","The minimum element will be the only one that is smaller than its previous element (unless it's the first element).","Compare the middle element with the rightmost element to determine which half contains the minimum."]},"reverse-linked-list":{id:"reverse-linked-list",title:"Reverse Linked List",difficulty:"Easy",category:"Linked List",description:"Given the head of a singly linked list, reverse it and return the reversed list.",examples:[{input:"head = [1,2,3,4,5]",output:"[5,4,3,2,1]",explanation:"Reversed."}],constraints:["0 <= Number of nodes <= 5000"],testCases:[{input:"[1,2,3,4,5]",expected:"[5, 4, 3, 2, 1]"},{input:"[1,2]",expected:"[2, 1]"}],starterCode:{python:`class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def solution(head):
    # Use three pointers: prev, curr, next
    pass

# Helper functions
def create_list(arr):
    if not arr: return None
    head = ListNode(arr[0])
    curr = head
    for v in arr[1:]:
        curr.next = ListNode(v)
        curr = curr.next
    return head

def to_array(head):
    result = []
    while head:
        result.append(head.val)
        head = head.next
    return result

print(to_array(solution(create_list([1,2,3,4,5]))))`},solutions:{iterative:{name:"Iterative (Three Pointers)",timeComplexity:"O(n)",spaceComplexity:"O(1)",description:"Use three pointers to reverse links one by one.",code:`class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def solution(head):
    prev = None
    curr = head

    while curr:
        next_temp = curr.next  # Save next
        curr.next = prev       # Reverse link
        prev = curr            # Move prev forward
        curr = next_temp       # Move curr forward

    return prev

# Helper functions
def create_list(arr):
    if not arr: return None
    head = ListNode(arr[0])
    curr = head
    for v in arr[1:]:
        curr.next = ListNode(v)
        curr = curr.next
    return head

def to_array(head):
    result = []
    while head:
        result.append(head.val)
        head = head.next
    return result

print(to_array(solution(create_list([1,2,3,4,5]))))`},recursive:{name:"Recursive",timeComplexity:"O(n)",spaceComplexity:"O(n)",description:"Recursive approach - elegant but uses stack space.",code:`class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def solution(head):
    # Base case
    if not head or not head.next:
        return head

    # Recursively reverse the rest
    new_head = solution(head.next)

    # Reverse the link
    head.next.next = head
    head.next = None

    return new_head

# Helper functions
def create_list(arr):
    if not arr: return None
    head = ListNode(arr[0])
    curr = head
    for v in arr[1:]:
        curr.next = ListNode(v)
        curr = curr.next
    return head

def to_array(head):
    result = []
    while head:
        result.append(head.val)
        head = head.next
    return result

print(to_array(solution(create_list([1,2,3,4,5]))))`},stackBased:{name:"Stack-Based",timeComplexity:"O(n)",spaceComplexity:"O(n)",description:"Push all nodes to stack, then pop to build reversed list.",code:`class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def solution(head):
    if not head:
        return None

    # Push all nodes to stack
    stack = []
    curr = head
    while curr:
        stack.append(curr)
        curr = curr.next

    # Pop and rebuild
    new_head = stack.pop()
    curr = new_head
    while stack:
        curr.next = stack.pop()
        curr = curr.next
    curr.next = None

    return new_head

# Helper functions
def create_list(arr):
    if not arr: return None
    head = ListNode(arr[0])
    curr = head
    for v in arr[1:]:
        curr.next = ListNode(v)
        curr = curr.next
    return head

def to_array(head):
    result = []
    while head:
        result.append(head.val)
        head = head.next
    return result

print(to_array(solution(create_list([1,2,3,4,5]))))`}},hints:["Track previous, current, and next nodes.","Reverse the link: curr.next = prev","Move all pointers forward."]},"merge-two-lists":{id:"merge-two-lists",title:"Merge Two Sorted Lists",difficulty:"Easy",category:"Linked List",description:"Merge two sorted linked lists into one sorted list.",examples:[{input:"list1 = [1,2,4], list2 = [1,3,4]",output:"[1,1,2,3,4,4]",explanation:"Merged in order."}],constraints:["0 <= list length <= 50"],testCases:[{input:"[1,2,4], [1,3,4]",expected:"[1, 1, 2, 3, 4, 4]"}],starterCode:{python:`class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def solution(list1, list2):
    # Compare heads, build merged list
    pass

# Helper functions
def create_list(arr):
    if not arr: return None
    head = ListNode(arr[0])
    curr = head
    for v in arr[1:]:
        curr.next = ListNode(v)
        curr = curr.next
    return head

def to_array(head):
    result = []
    while head:
        result.append(head.val)
        head = head.next
    return result

l1 = create_list([1,2,4])
l2 = create_list([1,3,4])
print(to_array(solution(l1, l2)))`},solutions:{iterative:{name:"Iterative with Dummy Node",timeComplexity:"O(n + m)",spaceComplexity:"O(1)",description:"Use a dummy head and compare nodes one by one.",code:`class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def solution(list1, list2):
    dummy = ListNode(0)
    curr = dummy

    while list1 and list2:
        if list1.val <= list2.val:
            curr.next = list1
            list1 = list1.next
        else:
            curr.next = list2
            list2 = list2.next
        curr = curr.next

    # Attach remaining nodes
    curr.next = list1 if list1 else list2

    return dummy.next

# Helper functions
def create_list(arr):
    if not arr: return None
    head = ListNode(arr[0])
    curr = head
    for v in arr[1:]:
        curr.next = ListNode(v)
        curr = curr.next
    return head

def to_array(head):
    result = []
    while head:
        result.append(head.val)
        head = head.next
    return result

l1 = create_list([1,2,4])
l2 = create_list([1,3,4])
print(to_array(solution(l1, l2)))`},recursive:{name:"Recursive",timeComplexity:"O(n + m)",spaceComplexity:"O(n + m)",description:"Recursive approach - compare heads and recurse.",code:`class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def solution(list1, list2):
    if not list1:
        return list2
    if not list2:
        return list1

    if list1.val <= list2.val:
        list1.next = solution(list1.next, list2)
        return list1
    else:
        list2.next = solution(list1, list2.next)
        return list2

# Helper functions
def create_list(arr):
    if not arr: return None
    head = ListNode(arr[0])
    curr = head
    for v in arr[1:]:
        curr.next = ListNode(v)
        curr = curr.next
    return head

def to_array(head):
    result = []
    while head:
        result.append(head.val)
        head = head.next
    return result

l1 = create_list([1,2,4])
l2 = create_list([1,3,4])
print(to_array(solution(l1, l2)))`}},hints:["Use a dummy head node.","Compare values and append smaller one.","Attach remaining nodes at the end."]},"linked-list-cycle":{id:"linked-list-cycle",title:"Linked List Cycle",difficulty:"Easy",category:"Linked List",description:"Detect if a linked list has a cycle (a node's next points back to a previous node).",examples:[{input:"head = [3,2,0,-4], pos = 1",output:"true",explanation:"Tail connects to node index 1."}],constraints:["0 <= Number of nodes <= 10^4"],testCases:[{input:"[3,2,0,-4], 1",expected:"True"},{input:"[1], -1",expected:"False"}],starterCode:{python:`class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def solution(head):
    # Floyd's cycle detection (slow & fast pointers)
    pass

# Helper to create list with cycle
def create_list_with_cycle(arr, pos):
    if not arr: return None
    nodes = [ListNode(v) for v in arr]
    for i in range(len(nodes) - 1):
        nodes[i].next = nodes[i + 1]
    if pos >= 0:
        nodes[-1].next = nodes[pos]
    return nodes[0]

head = create_list_with_cycle([3,2,0,-4], 1)
print(solution(head))`},solutions:{optimal:{name:"Floyd's Cycle Detection",timeComplexity:"O(n)",spaceComplexity:"O(1)",description:"Use slow (1 step) and fast (2 steps) pointers. If they meet, cycle exists.",code:`class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def solution(head):
    if not head or not head.next:
        return False

    slow = head
    fast = head

    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next

        if slow == fast:
            return True

    return False

# Helper to create list with cycle
def create_list_with_cycle(arr, pos):
    if not arr: return None
    nodes = [ListNode(v) for v in arr]
    for i in range(len(nodes) - 1):
        nodes[i].next = nodes[i + 1]
    if pos >= 0:
        nodes[-1].next = nodes[pos]
    return nodes[0]

head = create_list_with_cycle([3,2,0,-4], 1)
print(solution(head))`},hashSet:{name:"Hash Set",timeComplexity:"O(n)",spaceComplexity:"O(n)",description:"Store visited nodes in a set. If we see a node twice, cycle exists.",code:`class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def solution(head):
    visited = set()
    curr = head

    while curr:
        if curr in visited:
            return True
        visited.add(curr)
        curr = curr.next

    return False

# Helper to create list with cycle
def create_list_with_cycle(arr, pos):
    if not arr: return None
    nodes = [ListNode(v) for v in arr]
    for i in range(len(nodes) - 1):
        nodes[i].next = nodes[i + 1]
    if pos >= 0:
        nodes[-1].next = nodes[pos]
    return nodes[0]

head = create_list_with_cycle([3,2,0,-4], 1)
print(solution(head))`}},hints:["Use slow (1 step) and fast (2 steps) pointers.","If they meet, there's a cycle.","If fast reaches null, no cycle."]},"linked-list-cycle":{id:"linked-list-cycle",title:"Linked List Cycle",difficulty:"Easy",category:"Linked List",description:"Detect if a linked list has a cycle (a node's next points back to a previous node).",examples:[{input:"head = [3,2,0,-4], pos = 1",output:"true",explanation:"Tail connects to node index 1."}],constraints:["0 <= Number of nodes <= 10^4"],testCases:[{input:"[3,2,0,-4], 1",expected:"True"},{input:"[1], -1",expected:"False"}],starterCode:{python:`class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def solution(head):
    # Floyd's cycle detection (slow & fast pointers)
    pass

# Helper to create list with cycle
def create_list_with_cycle(arr, pos):
    if not arr: return None
    nodes = [ListNode(v) for v v in arr]
    for i in range(len(nodes) - 1):
        nodes[i].next = nodes[i + 1]
    if pos >= 0:
        nodes[-1].next = nodes[pos]
    return nodes[0]

head = create_list_with_cycle([3,2,0,-4], 1)
print(solution(head))`},solutions:{optimal:{name:"Floyd's Cycle Detection",timeComplexity:"O(n)",spaceComplexity:"O(1)",description:"Use slow (1 step) and fast (2 steps) pointers. If they meet, cycle exists.",code:`class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def solution(head):
    if not head or not head.next:
        return False

    slow = head
    fast = head

    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next

        if slow == fast:
            return True

    return False

# Helper to create list with cycle
def create_list_with_cycle(arr, pos):
    if not arr: return None
    nodes = [ListNode(v) for v in arr]
    for i in range(len(nodes) - 1):
        nodes[i].next = nodes[i + 1]
    if pos >= 0:
        nodes[-1].next = nodes[pos]
    return nodes[0]

head = create_list_with_cycle([3,2,0,-4], 1)
print(solution(head))`},hashSet:{name:"Hash Set",timeComplexity:"O(n)",spaceComplexity:"O(n)",description:"Store visited nodes in a set. If we see a node twice, cycle exists.",code:`class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def solution(head):
    visited = set()
    curr = head

    while curr:
        if curr in visited:
            return True
        visited.add(curr)
        curr = curr.next

    return False

# Helper to create list with cycle
def create_list_with_cycle(arr, pos):
    if not arr: return None
    nodes = [ListNode(v) for v in arr]
    for i in range(len(nodes) - 1):
        nodes[i].next = nodes[i + 1]
    if pos >= 0:
        nodes[-1].next = nodes[pos]
    return nodes[0]

head = create_list_with_cycle([3,2,0,-4], 1)
print(solution(head))`}},hints:["Use slow (1 step) and fast (2 steps) pointers.","If they meet, there's a cycle.","If fast reaches null, no cycle."]},"reorder-list":{id:"reorder-list",title:"Reorder List",difficulty:"Medium",category:"Linked List",description:`Given a singly linked list L: L0 → L1 → … → Ln-1 → Ln, reorder it to: L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → …

You may not modify the values in the list's nodes, only nodes themselves may be changed.`,examples:[{input:"head = [1,2,3,4]",output:"[1,4,2,3]",explanation:"Reordered."},{input:"head = [1,2,3,4,5]",output:"[1,5,2,4,3]",explanation:"Reordered."}],constraints:["The number of nodes in the list is in the range [1, 5 * 10^4].","1 <= Node.val <= 1000"],testCases:[{input:"[1,2,3,4]",expected:"[1, 4, 2, 3]"},{input:"[1,2,3,4,5]",expected:"[1, 5, 2, 4, 3]"}],starterCode:{python:`class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def solution(head):
    # Find middle, reverse second half, merge
    pass

# Helper functions
def create_list(arr):
    if not arr: return None
    head = ListNode(arr[0])
    curr = head
    for v in arr[1:]:
        curr.next = ListNode(v)
        curr = curr.next
    return head

def to_array(head):
    result = []
    while head:
        result.append(head.val)
        head = head.next
    return result

head = create_list([1,2,3,4])
solution(head)
print(to_array(head))`},solutions:{optimal:{name:"Find Middle, Reverse Second Half, Merge",timeComplexity:"O(n)",spaceComplexity:"O(1)",description:"1. Find the middle of the list. 2. Reverse the second half. 3. Merge the two halves.",code:`class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def solution(head):
    if not head or not head.next:
        return

    # Step 1: Find the middle of the linked list
    slow = head
    fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next

    # Step 2: Split the list into two halves and reverse the second half
    second_half = slow.next
    slow.next = None  # Break the link
    
    prev = None
    curr = second_half
    while curr:
        next_temp = curr.next
        curr.next = prev
        prev = curr
        curr = next_temp
    
    # second_half_reversed is now 'prev'
    second_half_reversed = prev

    # Step 3: Merge the two halves
    first_half = head
    while second_half_reversed:
        temp1 = first_half.next
        temp2 = second_half_reversed.next

        first_half.next = second_half_reversed
        second_half_reversed.next = temp1

        first_half = temp1
        second_half_reversed = temp2

# Helper functions
def create_list(arr):
    if not arr: return None
    head = ListNode(arr[0])
    curr = head
    for v in arr[1:]:
        curr.next = ListNode(v)
        curr = curr.next
    return head

def to_array(head):
    result = []
    while head:
        result.append(head.val)
        head = head.next
    return result

head = create_list([1,2,3,4])
solution(head)
print(to_array(head))`},stackBased:{name:"Stack-Based",timeComplexity:"O(n)",spaceComplexity:"O(n)",description:"Push all nodes to a stack. Then iterate through the first half of the list, interleaving with nodes popped from the stack.",code:`class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def solution(head):
    if not head or not head.next:
        return

    # Push all nodes to stack
    stack = []
    curr = head
    while curr:
        stack.append(curr)
        curr = curr.next

    first_half_ptr = head
    
    # Iterate half way through the list
    for i in range(len(stack) // 2):
        last_node = stack.pop() # Get last node
        
        temp_next = first_half_ptr.next # Save next node of first half
        first_half_ptr.next = last_node  # Link first half node to last node
        last_node.next = temp_next       # Link last node to next node of first half
        
        first_half_ptr = temp_next      # Move first half pointer forward
        
    # Set the next of the middle node (or the last node of the first half) to None
    first_half_ptr.next = None


# Helper functions
def create_list(arr):
    if not arr: return None
    head = ListNode(arr[0])
    curr = head
    for v in arr[1:]:
        curr.next = ListNode(v)
        curr = curr.next
    return head

def to_array(head):
    result = []
    while head:
        result.append(head.val)
        head = head.next
    return result

head = create_list([1,2,3,4])
solution(head)
print(to_array(head))`}},hints:["Find the middle of the list.","Reverse the second half of the list.","Merge the first half with the reversed second half."]},"invert-tree":{id:"invert-tree",title:"Invert Binary Tree",difficulty:"Easy",category:"Trees",description:"Invert a binary tree (swap left and right children at every node).",examples:[{input:"root = [4,2,7,1,3,6,9]",output:"[4,7,2,9,6,3,1]",explanation:"Mirror image."}],constraints:["0 <= Number of nodes <= 100"],testCases:[{input:"[4,2,7,1,3,6,9]",expected:"[4, 7, 2, 9, 6, 3, 1]"}],starterCode:{python:`class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def solution(root):
    # Swap left and right recursively
    pass

# Helper functions
def create_tree(arr):
    if not arr: return None
    nodes = [TreeNode(v) if v is not None else None for v in arr]
    for i, node in enumerate(nodes):
        if node:
            left_idx = 2 * i + 1
            right_idx = 2 * i + 2
            if left_idx < len(nodes):
                node.left = nodes[left_idx]
            if right_idx < len(nodes):
                node.right = nodes[right_idx]
    return nodes[0] if nodes else None

def tree_to_list(root):
    if not root: return []
    result, queue = [], [root]
    while queue:
        node = queue.pop(0)
        if node:
            result.append(node.val)
            queue.append(node.left)
            queue.append(node.right)
    while result and result[-1] is None:
        result.pop()
    return result

print(tree_to_list(solution(create_tree([4,2,7,1,3,6,9]))))`},solutions:{recursive:{name:"Recursive DFS",timeComplexity:"O(n)",spaceComplexity:"O(h)",description:"Recursively swap left and right children.",code:`class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def solution(root):
    if not root:
        return None

    # Swap children
    root.left, root.right = root.right, root.left

    # Recursively invert subtrees
    solution(root.left)
    solution(root.right)

    return root

# Helper functions
def create_tree(arr):
    if not arr: return None
    nodes = [TreeNode(v) if v is not None else None for v in arr]
    for i, node in enumerate(nodes):
        if node:
            left_idx = 2 * i + 1
            right_idx = 2 * i + 2
            if left_idx < len(nodes):
                node.left = nodes[left_idx]
            if right_idx < len(nodes):
                node.right = nodes[right_idx]
    return nodes[0] if nodes else None

def tree_to_list(root):
    if not root: return []
    result, queue = [], [root]
    while queue:
        node = queue.pop(0)
        if node:
            result.append(node.val)
            queue.append(node.left)
            queue.append(node.right)
    while result and result[-1] is None:
        result.pop()
    return result

print(tree_to_list(solution(create_tree([4,2,7,1,3,6,9]))))`},iterativeBFS:{name:"Iterative BFS",timeComplexity:"O(n)",spaceComplexity:"O(n)",description:"Use a queue to process nodes level by level.",code:`from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def solution(root):
    if not root:
        return None

    queue = deque([root])

    while queue:
        node = queue.popleft()

        # Swap children
        node.left, node.right = node.right, node.left

        if node.left:
            queue.append(node.left)
        if node.right:
            queue.append(node.right)

    return root

# Helper functions
def create_tree(arr):
    if not arr: return None
    nodes = [TreeNode(v) if v is not None else None for v in arr]
    for i, node in enumerate(nodes):
        if node:
            left_idx = 2 * i + 1
            right_idx = 2 * i + 2
            if left_idx < len(nodes):
                node.left = nodes[left_idx]
            if right_idx < len(nodes):
                node.right = nodes[right_idx]
    return nodes[0] if nodes else None

def tree_to_list(root):
    if not root: return []
    result, queue = [], [root]
    while queue:
        node = queue.pop(0)
        if node:
            result.append(node.val)
            queue.append(node.left)
            queue.append(node.right)
    while result and result[-1] is None:
        result.pop()
    return result

print(tree_to_list(solution(create_tree([4,2,7,1,3,6,9]))))`},iterativeDFS:{name:"Iterative DFS (Stack)",timeComplexity:"O(n)",spaceComplexity:"O(h)",description:"Use a stack for iterative DFS.",code:`class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def solution(root):
    if not root:
        return None

    stack = [root]

    while stack:
        node = stack.pop()

        # Swap children
        node.left, node.right = node.right, node.left

        if node.left:
            stack.append(node.left)
        if node.right:
            stack.append(node.right)

    return root

# Helper functions
def create_tree(arr):
    if not arr: return None
    nodes = [TreeNode(v) if v is not None else None for v in arr]
    for i, node in enumerate(nodes):
        if node:
            left_idx = 2 * i + 1
            right_idx = 2 * i + 2
            if left_idx < len(nodes):
                node.left = nodes[left_idx]
            if right_idx < len(nodes):
                node.right = nodes[right_idx]
    return nodes[0] if nodes else None

def tree_to_list(root):
    if not root: return []
    result, queue = [], [root]
    while queue:
        node = queue.pop(0)
        if node:
            result.append(node.val)
            queue.append(node.left)
            queue.append(node.right)
    while result and result[-1] is None:
        result.pop()
    return result

print(tree_to_list(solution(create_tree([4,2,7,1,3,6,9]))))`}},hints:["Base case: null node.","Swap left and right children.","Recursively invert both subtrees."]},"max-depth-tree":{id:"max-depth-tree",title:"Maximum Depth of Binary Tree",difficulty:"Easy",category:"Trees",description:"Find the maximum depth (longest path from root to leaf) of a binary tree.",examples:[{input:"root = [3,9,20,null,null,15,7]",output:"3",explanation:"Depth is 3."}],constraints:["0 <= Number of nodes <= 10^4"],testCases:[{input:"[3,9,20,null,null,15,7]",expected:"3"}],starterCode:{python:`class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def solution(root):
    # DFS: 1 + max(left depth, right depth)
    pass

# Helper
def create_tree(arr):
    if not arr: return None
    nodes = [TreeNode(v) if v is not None else None for v in arr]
    for i, node in enumerate(nodes):
        if node:
            left_idx = 2 * i + 1
            right_idx = 2 * i + 2
            if left_idx < len(nodes):
                node.left = nodes[left_idx]
            if right_idx < len(nodes):
                node.right = nodes[right_idx]
    return nodes[0] if nodes else None

print(solution(create_tree([3,9,20,None,None,15,7])))`},solutions:{recursiveDFS:{name:"Recursive DFS",timeComplexity:"O(n)",spaceComplexity:"O(h)",description:"Recursively find max depth of subtrees and add 1.",code:`class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def solution(root):
    if not root:
        return 0

    left_depth = solution(root.left)
    right_depth = solution(root.right)

    return 1 + max(left_depth, right_depth)

# Helper
def create_tree(arr):
    if not arr: return None
    nodes = [TreeNode(v) if v is not None else None for v in arr]
    for i, node in enumerate(nodes):
        if node:
            left_idx = 2 * i + 1
            right_idx = 2 * i + 2
            if left_idx < len(nodes):
                node.left = nodes[left_idx]
            if right_idx < len(nodes):
                node.right = nodes[right_idx]
    return nodes[0] if nodes else None

print(solution(create_tree([3,9,20,None,None,15,7])))`},iterativeBFS:{name:"Iterative BFS (Level Order)",timeComplexity:"O(n)",spaceComplexity:"O(n)",description:"Count levels using BFS traversal.",code:`from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def solution(root):
    if not root:
        return 0

    queue = deque([root])
    depth = 0

    while queue:
        depth += 1
        level_size = len(queue)

        for _ in range(level_size):
            node = queue.popleft()
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)

    return depth

# Helper
def create_tree(arr):
    if not arr: return None
    nodes = [TreeNode(v) if v is not None else None for v in arr]
    for i, node in enumerate(nodes):
        if node:
            left_idx = 2 * i + 1
            right_idx = 2 * i + 2
            if left_idx < len(nodes):
                node.left = nodes[left_idx]
            if right_idx < len(nodes):
                node.right = nodes[right_idx]
    return nodes[0] if nodes else None

print(solution(create_tree([3,9,20,None,None,15,7])))`},iterativeDFS:{name:"Iterative DFS (Stack)",timeComplexity:"O(n)",spaceComplexity:"O(h)",description:"Use stack with (node, depth) pairs.",code:`class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def solution(root):
    if not root:
        return 0

    stack = [(root, 1)]
    max_depth = 0

    while stack:
        node, depth = stack.pop()
        max_depth = max(max_depth, depth)

        if node.left:
            stack.append((node.left, depth + 1))
        if node.right:
            stack.append((node.right, depth + 1))

    return max_depth

# Helper
def create_tree(arr):
    if not arr: return None
    nodes = [TreeNode(v) if v is not None else None for v in arr]
    for i, node in enumerate(nodes):
        if node:
            left_idx = 2 * i + 1
            right_idx = 2 * i + 2
            if left_idx < len(nodes):
                node.left = nodes[left_idx]
            if right_idx < len(nodes):
                node.right = nodes[right_idx]
    return nodes[0] if nodes else None

print(solution(create_tree([3,9,20,None,None,15,7])))`}},hints:["Base case: null node has depth 0.","Recursively find max of left and right depths.","Add 1 for current node."]},"same-tree":{id:"same-tree",title:"Same Tree",difficulty:"Easy",category:"Trees",description:"Check if two binary trees are identical (same structure and values).",examples:[{input:"p = [1,2,3], q = [1,2,3]",output:"true",explanation:"Identical."}],constraints:["0 <= Number of nodes <= 100"],testCases:[{input:"[1,2,3], [1,2,3]",expected:"True"},{input:"[1,2], [1,null,2]",expected:"False"}],starterCode:{python:`class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def solution(p, q):
    # Compare nodes recursively
    pass

# Helper
def create_tree(arr):
    if not arr: return None
    nodes = [TreeNode(v) if v is not None else None for v in arr]
    for i, node in enumerate(nodes):
        if node:
            left_idx = 2 * i + 1
            right_idx = 2 * i + 2
            if left_idx < len(nodes):
                node.left = nodes[left_idx]
            if right_idx < len(nodes):
                node.right = nodes[right_idx]
    return nodes[0] if nodes else None

p = create_tree([1,2,3])
q = create_tree([1,2,3])
print(solution(p, q))`},solutions:{recursive:{name:"Recursive DFS",timeComplexity:"O(n)",spaceComplexity:"O(h)",description:"Recursively compare each node.",code:`class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def solution(p, q):
    # Both null
    if not p and not q:
        return True

    # One null, one not
    if not p or not q:
        return False

    # Compare values and recurse
    if p.val != q.val:
        return False

    return solution(p.left, q.left) and solution(p.right, q.right)

# Helper
def create_tree(arr):
    if not arr: return None
    nodes = [TreeNode(v) if v is not None else None for v in arr]
    for i, node in enumerate(nodes):
        if node:
            left_idx = 2 * i + 1
            right_idx = 2 * i + 2
            if left_idx < len(nodes):
                node.left = nodes[left_idx]
            if right_idx < len(nodes):
                node.right = nodes[right_idx]
    return nodes[0] if nodes else None

p = create_tree([1,2,3])
q = create_tree([1,2,3])
print(solution(p, q))`},iterativeBFS:{name:"Iterative BFS",timeComplexity:"O(n)",spaceComplexity:"O(n)",description:"Use queues to compare level by level.",code:`from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def solution(p, q):
    queue = deque([(p, q)])

    while queue:
        node1, node2 = queue.popleft()

        if not node1 and not node2:
            continue
        if not node1 or not node2:
            return False
        if node1.val != node2.val:
            return False

        queue.append((node1.left, node2.left))
        queue.append((node1.right, node2.right))

    return True

# Helper
def create_tree(arr):
    if not arr: return None
    nodes = [TreeNode(v) if v is not None else None for v in arr]
    for i, node in enumerate(nodes):
        if node:
            left_idx = 2 * i + 1
            right_idx = 2 * i + 2
            if left_idx < len(nodes):
                node.left = nodes[left_idx]
            if right_idx < len(nodes):
                node.right = nodes[right_idx]
    return nodes[0] if nodes else None

p = create_tree([1,2,3])
q = create_tree([1,2,3])
print(solution(p, q))`},iterativeDFS:{name:"Iterative DFS (Stack)",timeComplexity:"O(n)",spaceComplexity:"O(h)",description:"Use stack to compare nodes iteratively.",code:`class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def solution(p, q):
    stack = [(p, q)]

    while stack:
        node1, node2 = stack.pop()

        if not node1 and not node2:
            continue
        if not node1 or not node2:
            return False
        if node1.val != node2.val:
            return False

        stack.append((node1.left, node2.left))
        stack.append((node1.right, node2.right))

    return True

# Helper
def create_tree(arr):
    if not arr: return None
    nodes = [TreeNode(v) if v is not None else None for v in arr]
    for i, node in enumerate(nodes):
        if node:
            left_idx = 2 * i + 1
            right_idx = 2 * i + 2
            if left_idx < len(nodes):
                node.left = nodes[left_idx]
            if right_idx < len(nodes):
                node.right = nodes[right_idx]
    return nodes[0] if nodes else None

p = create_tree([1,2,3])
q = create_tree([1,2,3])
print(solution(p, q))`}},hints:["Both null = same.","One null = different.","Compare values, then recurse on children."]},"same-tree":{id:"same-tree",title:"Same Tree",difficulty:"Easy",category:"Trees",description:"Check if two binary trees are identical (same structure and values).",examples:[{input:"p = [1,2,3], q = [1,2,3]",output:"true",explanation:"Identical."}],constraints:["0 <= Number of nodes <= 100"],testCases:[{input:"[1,2,3], [1,2,3]",expected:"True"},{input:"[1,2], [1,null,2]",expected:"False"}],starterCode:{python:`class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def solution(p, q):
    # Compare nodes recursively
    pass

# Helper
def create_tree(arr):
    if not arr: return None
    nodes = [TreeNode(v) if v is not None else None for v in arr]
    for i, node in enumerate(nodes):
        if node:
            left_idx = 2 * i + 1
            right_idx = 2 * i + 2
            if left_idx < len(nodes):
                node.left = nodes[left_idx]
            if right_idx < len(nodes):
                node.right = nodes[right_idx]
    return nodes[0] if nodes else None

p = create_tree([1,2,3])
q = create_tree([1,2,3])
print(solution(p, q))`},solutions:{recursive:{name:"Recursive DFS",timeComplexity:"O(n)",spaceComplexity:"O(h)",description:"Recursively compare each node.",code:`class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def solution(p, q):
    # Both null
    if not p and not q:
        return True

    # One null, one not
    if not p or not q:
        return False

    # Compare values and recurse
    if p.val != q.val:
        return False

    return solution(p.left, q.left) and solution(p.right, q.right)

# Helper
def create_tree(arr):
    if not arr: return None
    nodes = [TreeNode(v) if v is not None else None for v in arr]
    for i, node in enumerate(nodes):
        if node:
            left_idx = 2 * i + 1
            right_idx = 2 * i + 2
            if left_idx < len(nodes):
                node.left = nodes[left_idx]
            if right_idx < len(nodes):
                node.right = nodes[right_idx]
    return nodes[0] if nodes else None

p = create_tree([1,2,3])
q = create_tree([1,2,3])
print(solution(p, q))`},iterativeBFS:{name:"Iterative BFS",timeComplexity:"O(n)",spaceComplexity:"O(n)",description:"Use queues to compare level by level.",code:`from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def solution(p, q):
    queue = deque([(p, q)])

    while queue:
        node1, node2 = queue.popleft()

        if not node1 and not node2:
            continue
        if not node1 or not node2:
            return False
        if node1.val != node2.val:
            return False

        queue.append((node1.left, node2.left))
        queue.append((node1.right, node2.right))

    return True

# Helper
def create_tree(arr):
    if not arr: return None
    nodes = [TreeNode(v) if v is not None else None for v in arr]
    for i, node in enumerate(nodes):
        if node:
            left_idx = 2 * i + 1
            right_idx = 2 * i + 2
            if left_idx < len(nodes):
                node.left = nodes[left_idx]
            if right_idx < len(nodes):
                node.right = nodes[right_idx]
    return nodes[0] if nodes else None

p = create_tree([1,2,3])
q = create_tree([1,2,3])
print(solution(p, q))`},iterativeDFS:{name:"Iterative DFS (Stack)",timeComplexity:"O(n)",spaceComplexity:"O(h)",description:"Use stack to compare nodes iteratively.",code:`class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def solution(p, q):
    stack = [(p, q)]

    while stack:
        node1, node2 = stack.pop()

        if not node1 and not node2:
            continue
        if not node1 or not node2:
            return False
        if node1.val != node2.val:
            return False

        stack.append((node1.right, node2.right))
        stack.append((node1.left, node2.left))

    return True

# Helper
def create_tree(arr):
    if not arr: return None
    nodes = [TreeNode(v) if v is not None else None for v in arr]
    for i, node in enumerate(nodes):
        if node:
            left_idx = 2 * i + 1
            right_idx = 2 * i + 2
            if left_idx < len(nodes):
                node.left = nodes[left_idx]
            if right_idx < len(nodes):
                node.right = nodes[right_idx]
    return nodes[0] if nodes else None

p = create_tree([1,2,3])
q = create_tree([1,2,3])
print(solution(p, q))`}},hints:["Recursively check if both nodes are null.","If one is null and other is not, return false.","If values differ, return false."]},"kth-smallest-element-in-a-bst":{id:"kth-smallest-element-in-a-bst",title:"Kth Smallest Element in a BST",difficulty:"Medium",category:"Trees",description:"Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.",examples:[{input:"root = [3,1,4,null,2], k = 1",output:"1",explanation:"The 1st smallest element is 1."},{input:"root = [5,3,6,2,4,null,null,1], k = 3",output:"3",explanation:"The 3rd smallest element is 3."}],constraints:["The number of nodes in the tree is n.","1 <= k <= n <= 10^4","0 <= Node.val <= 10^4"],testCases:[{input:"[3,1,4,null,2], 1",expected:"1"},{input:"[5,3,6,2,4,null,null,1], 3",expected:"3"}],starterCode:{python:`class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def solution(root, k):
    # Inorder traversal of BST is sorted
    pass

# Helper
def create_tree(arr):
    if not arr: return None
    nodes = [TreeNode(v) if v is not None else None for v in arr]
    for i, node in enumerate(nodes):
        if node:
            left_idx = 2 * i + 1
            right_idx = 2 * i + 2
            if left_idx < len(nodes):
                node.left = nodes[left_idx]
            if right_idx < len(nodes):
                node.right = nodes[right_idx]
    return nodes[0] if nodes else None

root = create_tree([3,1,4,None,2])
print(solution(root, 1))`},solutions:{inorderTraversalRecursive:{name:"Inorder Traversal (Recursive)",timeComplexity:"O(N)",spaceComplexity:"O(N)",description:"Perform an inorder traversal (Left, Root, Right). In a BST, inorder traversal yields elements in sorted order. Keep a count and return the k-th element.",code:`class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def solution(root, k):
    stack = []
    
    while root or stack:
        while root:
            stack.append(root)
            root = root.left
        
        root = stack.pop()
        k -= 1
        if k == 0:
            return root.val
        
        root = root.right
    
    return -1 # Should not reach here if k is valid

# Helper
def create_tree(arr):
    if not arr: return None
    nodes = [TreeNode(v) if v is not None else None for v in arr]
    for i, node in enumerate(nodes):
        if node:
            left_idx = 2 * i + 1
            right_idx = 2 * i + 2
            if left_idx < len(nodes):
                node.left = nodes[left_idx]
            if right_idx < len(nodes):
                node.right = nodes[right_idx]
    return nodes[0] if nodes else None

root = create_tree([3,1,4,None,2])
print(solution(root, 1))`},inorderTraversalIterative:{name:"Inorder Traversal (Iterative)",timeComplexity:"O(H + K)",spaceComplexity:"O(H)",description:"Perform an iterative inorder traversal using a stack. Stop once the k-th element is found.",code:`class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def solution(root, k):
    stack = []
    
    while root or stack:
        while root:
            stack.append(root)
            root = root.left
        
        root = stack.pop()
        k -= 1
        if k == 0:
            return root.val
        
        root = root.right
    
    return -1 # Should not reach here if k is valid

# Helper
def create_tree(arr):
    if not arr: return None
    nodes = [TreeNode(v) if v is not None else None for v in arr]
    for i, node in enumerate(nodes):
        if node:
            left_idx = 2 * i + 1
            right_idx = 2 * i + 2
            if left_idx < len(nodes):
                node.left = nodes[left_idx]
            if right_idx < len(nodes):
                node.right = nodes[right_idx]
    return nodes[0] if nodes else None

root = create_tree([3,1,4,None,2])
print(solution(root, 1))`}},hints:["An inorder traversal of a BST visits nodes in ascending order.","You can use either a recursive or iterative inorder traversal."]},"bfs-traversal":{id:"bfs-traversal",title:"BFS Graph Traversal",difficulty:"Medium",category:"Graphs",description:"Implement BFS traversal on a graph (adjacency list). Return visit order.",examples:[{input:"graph = {0: [1,2], 1: [2], 2: [0,3], 3: []}, start = 2",output:"[2, 0, 3, 1]",explanation:"Level by level."}],constraints:["Graph may contain cycles."],testCases:[{input:"{0: [1,2], 1: [2], 2: [0,3], 3: [3]}, 2",expected:"[2, 0, 3, 1]"}],starterCode:{python:`from collections import deque

def solution(graph, start):
    # Use queue, track visited
    pass

graph = {0: [1,2], 1: [2], 2: [0,3], 3: [3]}
print(solution(graph, 2))`},solutions:{optimal:{name:"BFS with Queue",timeComplexity:"O(V + E)",spaceComplexity:"O(V)",description:"Use a queue and visited set for level-order traversal.",code:`from collections import deque

def solution(graph, start):
    visited = set()
    result = []
    queue = deque([start])
    visited.add(start)

    while queue:
        node = queue.popleft()
        result.append(node)

        for neighbor in graph.get(node, []):
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)

    return result

graph = {0: [1,2], 1: [2], 2: [0,3], 3: [3]}
print(solution(graph, 2))`},withLevel:{name:"BFS with Level Tracking",timeComplexity:"O(V + E)",spaceComplexity:"O(V)",description:"Track levels for each node.",code:`from collections import deque

def solution(graph, start):
    visited = set()
    result = []
    queue = deque([(start, 0)])  # (node, level)
    visited.add(start)

    while queue:
        node, level = queue.popleft()
        result.append(node)

        for neighbor in graph.get(node, []):
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append((neighbor, level + 1))

    return result

graph = {0: [1,2], 1: [2], 2: [0,3], 3: [3]}
print(solution(graph, 2))`},listQueue:{name:"BFS with List (Less Efficient)",timeComplexity:"O(V² + E)",spaceComplexity:"O(V)",description:"Using list as queue - less efficient due to pop(0).",code:`def solution(graph, start):
    visited = set()
    result = []
    queue = [start]  # List as queue (inefficient)
    visited.add(start)

    while queue:
        node = queue.pop(0)  # O(n) operation
        result.append(node)

        for neighbor in graph.get(node, []):
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)

    return result

graph = {0: [1,2], 1: [2], 2: [0,3], 3: [3]}
print(solution(graph, 2))`}},hints:["Use a queue (FIFO).","Mark nodes as visited when adding to queue.","Process neighbors level by level."]},"dfs-traversal":{id:"dfs-traversal",title:"DFS Graph Traversal",difficulty:"Medium",category:"Graphs",description:"Implement DFS traversal on a graph. Return visit order.",examples:[{input:"graph = {0: [1,2], 1: [2], 2: [3], 3: []}, start = 0",output:"[0, 1, 2, 3]",explanation:"Depth first."}],constraints:["Graph may contain cycles."],testCases:[{input:"{0: [1,2], 1: [2], 2: [3], 3: []}, 0",expected:"[0, 1, 2, 3]"}],starterCode:{python:`def solution(graph, start):
    # Use stack or recursion, track visited
    pass

graph = {0: [1,2], 1: [2], 2: [3], 3: []}
print(solution(graph, 0))`},solutions:{recursive:{name:"Recursive DFS",timeComplexity:"O(V + E)",spaceComplexity:"O(V)",description:"Classic recursive approach.",code:`def solution(graph, start):
    visited = set()
    result = []

    def dfs(node):
        if node in visited:
            return

        visited.add(node)
        result.append(node)

        for neighbor in graph.get(node, []):
            dfs(neighbor)

    dfs(start)
    return result

graph = {0: [1,2], 1: [2], 2: [3], 3: []}
print(solution(graph, 0))`},iterative:{name:"Iterative DFS (Stack)",timeComplexity:"O(V + E)",spaceComplexity:"O(V)",description:"Use explicit stack instead of recursion.",code:`def solution(graph, start):
    visited = set()
    result = []
    stack = [start]

    while stack:
        node = stack.pop()

        if node in visited:
            continue

        visited.add(node)
        result.append(node)

        # Add neighbors in reverse order for consistent ordering
        for neighbor in reversed(graph.get(node, [])):
            if neighbor not in visited:
                stack.append(neighbor)

    return result

graph = {0: [1,2], 1: [2], 2: [3], 3: []}
print(solution(graph, 0))`},preorderIterative:{name:"Pre-order Iterative",timeComplexity:"O(V + E)",spaceComplexity:"O(V)",description:"Iterative with pre-order guarantee.",code:`def solution(graph, start):
    visited = set()
    result = []
    stack = [start]
    visited.add(start)

    while stack:
        node = stack.pop()
        result.append(node)

        # Process in reverse to maintain order
        for neighbor in reversed(graph.get(node, [])):
            if neighbor not in visited:
                visited.add(neighbor)
                stack.append(neighbor)

    return result

graph = {0: [1,2], 1: [2], 2: [3], 3: []}
print(solution(graph, 0))`}},hints:["Use a stack (LIFO) or recursion.","Mark visited before exploring.","Go deep before going wide."]},"number-of-islands":{id:"number-of-islands",title:"Number of Islands",difficulty:"Medium",category:"Graphs",description:"Count islands in a 2D grid. '1' = land, '0' = water. Islands are surrounded by water.",examples:[{input:'grid = [["1","1","0"],["1","1","0"],["0","0","1"]]',output:"2",explanation:"Two separate islands."}],constraints:["1 <= m, n <= 300"],testCases:[{input:'[["1","1","0"],["1","1","0"],["0","0","1"]]',expected:"2"}],starterCode:{python:`def solution(grid):
    # DFS/BFS from each unvisited land cell
    pass

grid = [["1","1","0"],["1","1","0"],["0","0","1"]]
print(solution(grid))`},solutions:{dfs:{name:"DFS (Recursive)",timeComplexity:"O(m × n)",spaceComplexity:"O(m × n)",description:"Use DFS to flood-fill each island.",code:`def solution(grid):
    if not grid:
        return 0

    rows, cols = len(grid), len(grid[0])
    count = 0

    def dfs(r, c):
        # Out of bounds or water
        if r < 0 or r >= rows or c < 0 or c >= cols or grid[r][c] == '0':
            return

        # Mark as visited (sink the island)
        grid[r][c] = '0'

        # Explore all 4 directions
        dfs(r + 1, c)
        dfs(r - 1, c)
        dfs(r, c + 1)
        dfs(r, c - 1)

    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1':
                count += 1
                dfs(r, c)

    return count

grid = [["1","1","0"],["1","1","0"],["0","0","1"]]
print(solution(grid))`},bfs:{name:"BFS",timeComplexity:"O(m × n)",spaceComplexity:"O(min(m, n))",description:"Use BFS to explore each island.",code:`from collections import deque

def solution(grid):
    if not grid:
        return 0

    rows, cols = len(grid), len(grid[0])
    count = 0

    def bfs(r, c):
        queue = deque([(r, c)])
        grid[r][c] = '0'

        while queue:
            row, col = queue.popleft()

            for dr, dc in [(1, 0), (-1, 0), (0, 1), (0, -1)]:
                nr, nc = row + dr, col + dc
                if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] == '1':
                    grid[nr][nc] = '0'
                    queue.append((nr, nc))

    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1':
                count += 1
                bfs(r, c)

    return count

grid = [["1","1","0"],["1","1","0"],["0","0","1"]]
print(solution(grid))`},unionFind:{name:"Union-Find",timeComplexity:"O(m × n × α(m × n))",spaceComplexity:"O(m × n)",description:"Use Union-Find to group connected land cells.",code:`def solution(grid):
    if not grid:
        return 0

    rows, cols = len(grid), len(grid[0])

    # Union-Find
    parent = {}
    rank = {}

    def find(x):
        if parent[x] != x:
            parent[x] = find(parent[x])  # Path compression
        return parent[x]

    def union(x, y):
        px, py = find(x), find(y)
        if px == py:
            return
        # Union by rank
        if rank[px] < rank[py]:
            px, py = py, px
        parent[py] = px
        if rank[px] == rank[py]:
            rank[px] += 1

    # Initialize
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1':
                parent[(r, c)] = (r, c)
                rank[(r, c)] = 0

    # Union adjacent land cells
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1':
                if r + 1 < rows and grid[r + 1][c] == '1':
                    union((r, c), (r + 1, c))
                if c + 1 < cols and grid[r][c + 1] == '1':
                    union((r, c), (r, c + 1))

    # Count unique roots
    return len(set(find(k) for k in parent))

grid = [["1","1","0"],["1","1","0"],["0","0","1"]]
print(solution(grid))`}},hints:["Iterate through grid.",'When you find "1", increment count and flood-fill (DFS/BFS) to mark all connected land.']},"same-tree":{id:"same-tree",title:"Same Tree",difficulty:"Easy",category:"Trees",description:"Check if two binary trees are identical (same structure and values).",examples:[{input:"p = [1,2,3], q = [1,2,3]",output:"true",explanation:"Identical."}],constraints:["0 <= Number of nodes <= 100"],testCases:[{input:"[1,2,3], [1,2,3]",expected:"True"},{input:"[1,2], [1,null,2]",expected:"False"}],starterCode:{python:`class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def solution(p, q):
    # Compare nodes recursively
    pass

# Helper
def create_tree(arr):
    if not arr: return None
    nodes = [TreeNode(v) if v is not None else None for v in arr]
    for i, node in enumerate(nodes):
        if node:
            left_idx = 2 * i + 1
            right_idx = 2 * i + 2
            if left_idx < len(nodes):
                node.left = nodes[left_idx]
            if right_idx < len(nodes):
                node.right = nodes[right_idx]
    return nodes[0] if nodes else None

p = create_tree([1,2,3])
q = create_tree([1,2,3])
print(solution(p, q))`},solutions:{recursive:{name:"Recursive DFS",timeComplexity:"O(n)",spaceComplexity:"O(h)",description:"Recursively compare each node.",code:`class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def solution(p, q):
    # Both null
    if not p and not q:
        return True

    # One null, one not
    if not p or not q:
        return False

    # Compare values and recurse
    if p.val != q.val:
        return False

    return solution(p.left, q.left) and solution(p.right, q.right)

# Helper
def create_tree(arr):
    if not arr: return None
    nodes = [TreeNode(v) if v is not None else None for v in arr]
    for i, node in enumerate(nodes):
        if node:
            left_idx = 2 * i + 1
            right_idx = 2 * i + 2
            if left_idx < len(nodes):
                node.left = nodes[left_idx]
            if right_idx < len(nodes):
                node.right = nodes[right_idx]
    return nodes[0] if nodes else None

p = create_tree([1,2,3])
q = create_tree([1,2,3])
print(solution(p, q))`},iterativeBFS:{name:"Iterative BFS",timeComplexity:"O(n)",spaceComplexity:"O(n)",description:"Use queues to compare level by level.",code:`from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def solution(p, q):
    queue = deque([(p, q)])

    while queue:
        node1, node2 = queue.popleft()

        if not node1 and not node2:
            continue
        if not node1 or not node2:
            return False
        if node1.val != node2.val:
            return False

        queue.append((node1.left, node2.left))
        queue.append((node1.right, node2.right))

    return True

# Helper
def create_tree(arr):
    if not arr: return None
    nodes = [TreeNode(v) if v is not None else None for v in arr]
    for i, node in enumerate(nodes):
        if node:
            left_idx = 2 * i + 1
            right_idx = 2 * i + 2
            if left_idx < len(nodes):
                node.left = nodes[left_idx]
            if right_idx < len(nodes):
                node.right = nodes[right_idx]
    return nodes[0] if nodes else None

p = create_tree([1,2,3])
q = create_tree([1,2,3])
print(solution(p, q))`},iterativeDFS:{name:"Iterative DFS (Stack)",timeComplexity:"O(n)",spaceComplexity:"O(h)",description:"Use stack to compare nodes iteratively.",code:`class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def solution(p, q):
    stack = [(p, q)]

    while stack:
        node1, node2 = stack.pop()

        if not node1 and not node2:
            continue
        if not node1 or not node2:
            return False
        if node1.val != node2.val:
            return False

        stack.append((node1.right, node2.right))
        stack.append((node1.left, node2.left))

    return True

# Helper
def create_tree(arr):
    if not arr: return None
    nodes = [TreeNode(v) if v is not None else None for v in arr]
    for i, node in enumerate(nodes):
        if node:
            left_idx = 2 * i + 1
            right_idx = 2 * i + 2
            if left_idx < len(nodes):
                node.left = nodes[left_idx]
            if right_idx < len(nodes):
                node.right = nodes[right_idx]
    return nodes[0] if nodes else None

p = create_tree([1,2,3])
q = create_tree([1,2,3])
print(solution(p, q))`}},hints:["Recursively check if both nodes are null.","If one is null and other is not, return false.","If values differ, return false."]},"number-of-islands":{id:"number-of-islands",title:"Number of Islands",difficulty:"Medium",category:"Graphs",description:`Given an m x n 2D binary grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.`,examples:[{input:`grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]`,output:"1",explanation:"Only one island."},{input:`grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]`,output:"3",explanation:"Three separate islands."}],constraints:["m == grid.length","n == grid[i].length","1 <= m, n <= 300","grid[i][j] is '0' or '1'."],testCases:[{input:'[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]',expected:"1"},{input:'[["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]',expected:"3"}],starterCode:{python:`def solution(grid):
    # Use DFS or BFS to traverse and mark visited land cells
    pass

grid1 = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
print(solution(grid1))`},solutions:{dfs:{name:"Depth First Search (DFS)",timeComplexity:"O(M * N)",spaceComplexity:"O(M * N)",description:"Iterate through each cell. If land ('1') is found, increment island count and perform DFS to mark all connected land cells as visited ('0').",code:`def solution(grid):
    if not grid or not grid[0]:
        return 0

    rows, cols = len(grid), len(grid[0])
    num_islands = 0

    def dfs(r, c):
        if r < 0 or r >= rows or c < 0 or c >= cols or grid[r][c] == '0':
            return
        
        grid[r][c] = '0' # Mark as visited
        dfs(r + 1, c)
        dfs(r - 1, c)
        dfs(r, c + 1)
        dfs(r, c - 1)

    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1':
                num_islands += 1
                dfs(r, c)
                
    return num_islands

grid1 = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
print(solution(grid1))`},bfs:{name:"Breadth First Search (BFS)",timeComplexity:"O(M * N)",spaceComplexity:"O(M * N)",description:"Iterate through each cell. If land ('1') is found, increment island count and perform BFS to mark all connected land cells as visited ('0').",code:`from collections import deque

def solution(grid):
    if not grid or not grid[0]:
        return 0

    rows, cols = len(grid), len(grid[0])
    num_islands = 0

    def bfs(r, c):
        q = deque()
        q.append((r, c))
        grid[r][c] = '0' # Mark as visited

        while q:
            row, col = q.popleft()
            directions = [(1, 0), (-1, 0), (0, 1), (0, -1)] # Down, Up, Right, Left

            for dr, dc in directions:
                new_r, new_c = row + dr, col + dc
                if 0 <= new_r < rows and 0 <= new_c < cols and grid[new_r][new_c] == '1':
                    grid[new_r][new_c] = '0' # Mark as visited
                    q.append((new_r, new_c))

    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1':
                num_islands += 1
                bfs(r, c)
                
    return num_islands

grid1 = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
print(solution(grid1))`}},hints:["Traverse the grid.","When you find a '1', increment island count and then explore all connected '1's (horizontally and vertically) to mark them as visited (e.g., change to '0') so they are not counted again."]},"climbing-stairs":{id:"climbing-stairs",title:"Climbing Stairs",difficulty:"Easy",category:"Dynamic Programming",description:"You can climb 1 or 2 steps at a time. How many distinct ways to reach step n?",examples:[{input:"n = 3",output:"3",explanation:"1+1+1, 1+2, 2+1"}],constraints:["1 <= n <= 45"],testCases:[{input:"2",expected:"2"},{input:"3",expected:"3"}],starterCode:{python:`def solution(n):
    # Fibonacci pattern! dp[i] = dp[i-1] + dp[i-2]
    pass

print(solution(3))`},solutions:{dpOptimized:{name:"DP (Space Optimized)",timeComplexity:"O(n)",spaceComplexity:"O(1)",description:"Only track last two values since dp[i] depends only on dp[i-1] and dp[i-2].",code:`def solution(n):
    if n <= 2:
        return n

    prev2, prev1 = 1, 2

    for i in range(3, n + 1):
        curr = prev1 + prev2
        prev2 = prev1
        prev1 = curr

    return prev1

print(solution(3))`},dpArray:{name:"DP (Array)",timeComplexity:"O(n)",spaceComplexity:"O(n)",description:"Build up solution using an array.",code:`def solution(n):
    if n <= 2:
        return n

    dp = [0] * (n + 1)
    dp[1] = 1
    dp[2] = 2

    for i in range(3, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]

    return dp[n]

print(solution(3))`},memoization:{name:"Recursion with Memoization",timeComplexity:"O(n)",spaceComplexity:"O(n)",description:"Top-down approach with caching.",code:`def solution(n):
    memo = {}

    def climb(i):
        if i <= 2:
            return i
        if i in memo:
            return memo[i]

        memo[i] = climb(i - 1) + climb(i - 2)
        return memo[i]

    return climb(n)

print(solution(3))`},bruteForce:{name:"Brute Force Recursion",timeComplexity:"O(2^n)",spaceComplexity:"O(n)",description:"Naive recursion - exponential time, for comparison only.",code:`def solution(n):
    # WARNING: Very slow for large n!
    if n <= 2:
        return n
    return solution(n - 1) + solution(n - 2)

print(solution(3))`}},hints:["Base cases: dp[1]=1, dp[2]=2","dp[i] = ways to reach from i-1 + ways from i-2","This is Fibonacci!"]},"house-robber":{id:"house-robber",title:"House Robber",difficulty:"Medium",category:"Dynamic Programming",description:"Rob houses for max money, but can't rob adjacent houses.",examples:[{input:"nums = [1,2,3,1]",output:"4",explanation:"Rob house 0 and 2: 1+3=4"}],constraints:["1 <= nums.length <= 100"],testCases:[{input:"[1,2,3,1]",expected:"4"},{input:"[2,7,9,3,1]",expected:"12"}],starterCode:{python:`def solution(nums):
    # dp[i] = max(rob this + dp[i-2], skip + dp[i-1])
    pass

print(solution([1,2,3,1]))`},solutions:{dpOptimized:{name:"DP (Space Optimized)",timeComplexity:"O(n)",spaceComplexity:"O(1)",description:"Only track last two maximum values.",code:`def solution(nums):
    if not nums:
        return 0
    if len(nums) == 1:
        return nums[0]

    prev2, prev1 = 0, 0

    for num in nums:
        curr = max(prev1, prev2 + num)
        prev2 = prev1
        prev1 = curr

    return prev1

print(solution([1,2,3,1]))`},dpArray:{name:"DP (Array)",timeComplexity:"O(n)",spaceComplexity:"O(n)",description:"Build up solution using an array.",code:`def solution(nums):
    if not nums:
        return 0
    if len(nums) == 1:
        return nums[0]

    n = len(nums)
    dp = [0] * n
    dp[0] = nums[0]
    dp[1] = max(nums[0], nums[1])

    for i in range(2, n):
        # Rob current house + dp[i-2], or skip and take dp[i-1]
        dp[i] = max(dp[i - 1], dp[i - 2] + nums[i])

    return dp[n - 1]

print(solution([1,2,3,1]))`},memoization:{name:"Recursion with Memoization",timeComplexity:"O(n)",spaceComplexity:"O(n)",description:"Top-down approach with caching.",code:`def solution(nums):
    memo = {}

    def rob(i):
        if i < 0:
            return 0
        if i in memo:
            return memo[i]

        # Rob this house + best from i-2, or skip
        memo[i] = max(rob(i - 1), rob(i - 2) + nums[i])
        return memo[i]

    return rob(len(nums) - 1)

print(solution([1,2,3,1]))`},bruteForce:{name:"Brute Force Recursion",timeComplexity:"O(2^n)",spaceComplexity:"O(n)",description:"Try all combinations - exponential time.",code:`def solution(nums):
    # WARNING: Very slow for large inputs!
    def rob(i):
        if i < 0:
            return 0
        return max(rob(i - 1), rob(i - 2) + nums[i])

    return rob(len(nums) - 1)

print(solution([1,2,3,1]))`}},hints:["At each house: rob it or skip it.","Rob: nums[i] + dp[i-2]","Skip: dp[i-1]","Take the max."]},"house-robber":{id:"house-robber",title:"House Robber",difficulty:"Medium",category:"Dynamic Programming",description:"You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.\n\nGiven an integer array `nums` representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.",examples:[{input:"nums = [1,2,3,1]",output:"4",explanation:"Rob house 1 (money = 1) and then rob house 3 (money = 3). Total amount = 1 + 3 = 4."},{input:"nums = [2,7,9,3,1]",output:"12",explanation:"Rob house 1 (money = 2), rob house 3 (money = 9). Total amount = 2 + 9 = 11. Rob house 2 (money = 7), rob house 4 (money = 3). Total amount = 7 + 3 = 10. Max is 12: house 1 (2), house 3 (9), house 5 (1)."}],constraints:["1 <= nums.length <= 100","0 <= nums[i] <= 400"],testCases:[{input:"[1,2,3,1]",expected:"4"},{input:"[2,7,9,3,1]",expected:"12"}],starterCode:{python:`def solution(nums):
    # DP approach
    pass

print(solution([1,2,3,1]))`},solutions:{dp:{name:"Dynamic Programming",timeComplexity:"O(n)",spaceComplexity:"O(1)",description:"For each house, decide whether to rob it or not. If robbed, cannot rob adjacent. Optimized to O(1) space.",code:`def solution(nums):
    if not nums:
        return 0
    if len(nums) == 1:
        return nums[0]

    # dp[i] represents the maximum amount that can be robbed up to house i
    # Let's optimize space:
    # rob_prev = max money if previous house was robbed
    # skip_prev = max money if previous house was skipped

    rob_prev = 0 # Max money ending at previous house, including previous
    skip_prev = 0 # Max money ending at previous house, excluding previous

    for num in nums:
        rob_current = skip_prev + num # If we rob current, we must have skipped previous
        skip_current = max(rob_prev, skip_prev) # If we skip current, we take max of robbing/skipping previous
        
        rob_prev = rob_current
        skip_prev = skip_current
        
    return max(rob_prev, skip_prev)

print(solution([1,2,3,1]))`},memoization:{name:"Memoization (Top-Down DP)",timeComplexity:"O(n)",spaceComplexity:"O(n)",description:"Recursive solution with memoization to store results of subproblems.",code:`def solution(nums):
    memo = {}

    def rob_from(i):
        if i >= len(nums):
            return 0
        if i in memo:
            return memo[i]

        # Option 1: Rob current house i, then skip i+1 and rob from i+2
        rob_current = nums[i] + rob_from(i + 2)
        # Option 2: Skip current house i, then rob from i+1
        skip_current = rob_from(i + 1)

        memo[i] = max(rob_current, skip_current)
        return memo[i]

    return rob_from(0)

print(solution([1,2,3,1]))`},tabulation:{name:"Tabulation (Bottom-Up DP)",timeComplexity:"O(n)",spaceComplexity:"O(n)",description:"Iterative solution building up the solution from smaller subproblems.",code:`def solution(nums):
    if not nums:
        return 0
    if len(nums) == 1:
        return nums[0]

    dp = [0] * len(nums)
    dp[0] = nums[0]
    dp[1] = max(nums[0], nums[1])

    for i in range(2, len(nums)):
        dp[i] = max(nums[i] + dp[i - 2], dp[i - 1])

    return dp[-1]

print(solution([1,2,3,1]))`}},hints:["Consider two choices at each house: rob it or skip it.","If you rob house i, you cannot rob house i-1.","Dynamic programming can help optimize repeated calculations."]},"longest-increasing-subsequence":{id:"longest-increasing-subsequence",title:"Longest Increasing Subsequence",difficulty:"Medium",category:"Dynamic Programming",description:"Given an integer array `nums`, return the length of the longest strictly increasing subsequence.",examples:[{input:"nums = [10,9,2,5,3,7,101,18]",output:"4",explanation:"The longest increasing subsequence is [2,3,7,101], hence the length is 4."},{input:"nums = [0,1,0,3,2,3]",output:"4",explanation:"The longest increasing subsequence is [0,1,2,3] or [0,1,0,3,2,3] with length 4."}],constraints:["1 <= nums.length <= 2500","-10^4 <= nums[i] <= 10^4"],testCases:[{input:"[10,9,2,5,3,7,101,18]",expected:"4"},{input:"[0,1,0,3,2,3]",expected:"4"}],starterCode:{python:`def solution(nums):
    # Dynamic Programming
    pass

print(solution([10,9,2,5,3,7,101,18]))`},solutions:{dp:{name:"Dynamic Programming",timeComplexity:"O(n²)",spaceComplexity:"O(n)",description:"Create a DP array where `dp[i]` is the length of the longest increasing subsequence ending at index `i`.",code:`def solution(nums):
    if not nums:
        return 0

    dp = [1] * len(nums) # Each element itself is an increasing subsequence of length 1

    for i in range(len(nums)):
        for j in range(i):
            if nums[i] > nums[j]:
                dp[i] = max(dp[i], 1 + dp[j])

    return max(dp)

print(solution([10,9,2,5,3,7,101,18]))`},dpWithBinarySearch:{name:"DP with Binary Search (N log N)",timeComplexity:"O(n log n)",spaceComplexity:"O(n)",description:"Maintain a `tails` array where `tails[i]` is the smallest tail of all increasing subsequences of length `i+1`. Use binary search to find the correct position for each number.",code:`import bisect

def solution(nums):
    tails = []
    for num in nums:
        # Find the first element in tails that is >= num
        idx = bisect.bisect_left(tails, num)
        
        if idx == len(tails):
            # If num is greater than all elements in tails, extend the LIS
            tails.append(num)
        else:
            # Otherwise, replace the element at idx with num
            # This forms a new LIS of the same length but with a smaller end
            tails[idx] = num
            
    return len(tails)

print(solution([10,9,2,5,3,7,101,18]))`}},hints:["Consider dynamic programming. For each number, calculate the longest increasing subsequence ending with that number.","Can you optimize the DP solution with binary search?"]},"merge-sort":{id:"merge-sort",title:"Merge Sort",difficulty:"Medium",category:"Sorting",description:"Implement merge sort. Divide array, sort halves, merge.",examples:[{input:"nums = [5,2,3,1]",output:"[1,2,3,5]",explanation:"Sorted."}],constraints:["1 <= nums.length <= 5 * 10^4"],testCases:[{input:"[5,2,3,1]",expected:"[1, 2, 3, 5]"}],starterCode:{python:`def solution(nums):
    # Divide, conquer, merge
    pass

print(solution([5,2,3,1]))`},solutions:{topDown:{name:"Top-Down (Recursive)",timeComplexity:"O(n log n)",spaceComplexity:"O(n)",description:"Classic recursive divide and conquer approach.",code:`def solution(nums):
    if len(nums) <= 1:
        return nums

    # Divide
    mid = len(nums) // 2
    left = solution(nums[:mid])
    right = solution(nums[mid:])

    # Merge
    result = []
    i = j = 0

    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1

    result.extend(left[i:])
    result.extend(right[j:])

    return result

print(solution([5,2,3,1]))`},inPlace:{name:"In-Place Merge Sort",timeComplexity:"O(n log n)",spaceComplexity:"O(n)",description:"Modify array in place with auxiliary space for merging.",code:`def solution(nums):
    def merge_sort(arr, left, right):
        if left >= right:
            return

        mid = (left + right) // 2
        merge_sort(arr, left, mid)
        merge_sort(arr, mid + 1, right)
        merge(arr, left, mid, right)

    def merge(arr, left, mid, right):
        # Create temp arrays
        left_arr = arr[left:mid + 1]
        right_arr = arr[mid + 1:right + 1]

        i = j = 0
        k = left

        while i < len(left_arr) and j < len(right_arr):
            if left_arr[i] <= right_arr[j]:
                arr[k] = left_arr[i]
                i += 1
            else:
                arr[k] = right_arr[j]
                j += 1
            k += 1

        while i < len(left_arr):
            arr[k] = left_arr[i]
            i += 1
            k += 1

        while j < len(right_arr):
            arr[k] = right_arr[j]
            j += 1
            k += 1

    merge_sort(nums, 0, len(nums) - 1)
    return nums

print(solution([5,2,3,1]))`},bottomUp:{name:"Bottom-Up (Iterative)",timeComplexity:"O(n log n)",spaceComplexity:"O(n)",description:"Iterative approach, merging progressively larger subarrays.",code:`def solution(nums):
    n = len(nums)

    # Start with subarrays of size 1, double each iteration
    size = 1
    while size < n:
        for left in range(0, n, 2 * size):
            mid = min(left + size - 1, n - 1)
            right = min(left + 2 * size - 1, n - 1)

            if mid < right:
                # Merge [left, mid] and [mid+1, right]
                left_arr = nums[left:mid + 1]
                right_arr = nums[mid + 1:right + 1]

                i = j = 0
                k = left

                while i < len(left_arr) and j < len(right_arr):
                    if left_arr[i] <= right_arr[j]:
                        nums[k] = left_arr[i]
                        i += 1
                    else:
                        nums[k] = right_arr[j]
                        j += 1
                    k += 1

                while i < len(left_arr):
                    nums[k] = left_arr[i]
                    i += 1
                    k += 1

                while j < len(right_arr):
                    nums[k] = right_arr[j]
                    j += 1
                    k += 1

        size *= 2

    return nums

print(solution([5,2,3,1]))`}},hints:["Base case: length <= 1.","Split at mid, recursively sort both.","Merge by comparing heads of both sorted halves."]},"quick-sort":{id:"quick-sort",title:"Quick Sort",difficulty:"Medium",category:"Sorting",description:"Implement quick sort. Pick pivot, partition, recurse.",examples:[{input:"nums = [3,6,8,10,1,2,1]",output:"[1,1,2,3,6,8,10]",explanation:"Sorted."}],constraints:["1 <= nums.length <= 5 * 10^4"],testCases:[{input:"[3,6,8,10,1,2,1]",expected:"[1, 1, 2, 3, 6, 8, 10]"}],starterCode:{python:`def solution(nums):
    # Partition around pivot, recurse
    pass

print(solution([3,6,8,10,1,2,1]))`},solutions:{lomuto:{name:"Lomuto Partition",timeComplexity:"O(n log n) avg, O(n²) worst",spaceComplexity:"O(log n)",description:"Classic quicksort with Lomuto partition (last element as pivot).",code:`def solution(nums):
    def quicksort(arr, low, high):
        if low < high:
            pivot_idx = partition(arr, low, high)
            quicksort(arr, low, pivot_idx - 1)
            quicksort(arr, pivot_idx + 1, high)

    def partition(arr, low, high):
        pivot = arr[high]
        i = low - 1

        for j in range(low, high):
            if arr[j] <= pivot:
                i += 1
                arr[i], arr[j] = arr[j], arr[i]

        arr[i + 1], arr[high] = arr[high], arr[i + 1]
        return i + 1

    quicksort(nums, 0, len(nums) - 1)
    return nums

print(solution([3,6,8,10,1,2,1]))`},hoare:{name:"Hoare Partition",timeComplexity:"O(n log n) avg, O(n²) worst",spaceComplexity:"O(log n)",description:"More efficient partition using two pointers.",code:`def solution(nums):
    def quicksort(arr, low, high):
        if low < high:
            pivot_idx = partition(arr, low, high)
            quicksort(arr, low, pivot_idx)
            quicksort(arr, pivot_idx + 1, high)

    def partition(arr, low, high):
        pivot = arr[(low + high) // 2]
        i = low - 1
        j = high + 1

        while True:
            i += 1
            while arr[i] < pivot:
                i += 1

            j -= 1
            while arr[j] > pivot:
                j -= 1

            if i >= j:
                return j

            arr[i], arr[j] = arr[j], arr[i]

    quicksort(nums, 0, len(nums) - 1)
    return nums

print(solution([3,6,8,10,1,2,1]))`},pythonic:{name:"Pythonic (Not In-Place)",timeComplexity:"O(n log n) avg",spaceComplexity:"O(n)",description:"Clean, list-comprehension based approach.",code:`def solution(nums):
    if len(nums) <= 1:
        return nums

    pivot = nums[len(nums) // 2]
    left = [x for x in nums if x < pivot]
    middle = [x for x in nums if x == pivot]
    right = [x for x in nums if x > pivot]

    return solution(left) + middle + solution(right)

print(solution([3,6,8,10,1,2,1]))`},randomized:{name:"Randomized Pivot",timeComplexity:"O(n log n) expected",spaceComplexity:"O(log n)",description:"Random pivot selection to avoid worst case.",code:`import random

def solution(nums):
    def quicksort(arr, low, high):
        if low < high:
            pivot_idx = partition(arr, low, high)
            quicksort(arr, low, pivot_idx - 1)
            quicksort(arr, pivot_idx + 1, high)

    def partition(arr, low, high):
        # Randomize pivot
        rand_idx = random.randint(low, high)
        arr[rand_idx], arr[high] = arr[high], arr[rand_idx]

        pivot = arr[high]
        i = low - 1

        for j in range(low, high):
            if arr[j] <= pivot:
                i += 1
                arr[i], arr[j] = arr[j], arr[i]

        arr[i + 1], arr[high] = arr[high], arr[i + 1]
        return i + 1

    quicksort(nums, 0, len(nums) - 1)
    return nums

print(solution([3,6,8,10,1,2,1]))`}},hints:["Pick a pivot (last element is common).","Partition: smaller left, larger right.","Recurse on both partitions."]}},Bh=Object.values(_t);[...new Set(Bh.map(e=>e.category))];const ha={grid:Fg,pointer:qg,layers:kh,search:dr,link:dl,tree:zg,network:Hg,puzzle:Ug,sort:Tg};function Qc(){const{problemId:e}=Ym(),t=mh(),[r,s]=u.useState(null),[i,a]=u.useState("python"),[l,o]=u.useState(""),[c,h]=u.useState(!1),[d,p]=u.useState(null),[m,b]=u.useState(null),[w,k]=u.useState(!1),[j,f]=u.useState(0),[g,x]=u.useState("description"),[E,y]=u.useState(!e),[F,T]=u.useState(()=>{const M=localStorage.getItem("completedProblems");return M?JSON.parse(M):[]}),[D,A]=u.useState(null),[I,H]=u.useState("map"),[K,B]=u.useState(null),[$,v]=u.useState(null),R=u.useRef(null);u.useEffect(()=>{R.current&&(R.current.scrollTop=0)},[g,r]),u.useEffect(()=>{localStorage.setItem("completedProblems",JSON.stringify(F))},[F]),u.useEffect(()=>{if(e&&_t[e]){const M=_t[e];s(M),o(M.starterCode[i]||M.starterCode.python),p(null),b(null),k(!1),f(0),y(!1),window.scrollTo(0,0)}else e||(y(!0),window.scrollTo(0,0))},[e]),u.useEffect(()=>{r&&o(r.starterCode[i]||r.starterCode.python)},[i,r]);const q=M=>{F.includes(M)||T([...F,M])},L=async()=>{h(!0),p(null),b(null);try{const C=await(await fetch("/api/practice/execute",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({language:i,code:l})})).json();p({stdout:C.output||"",stderr:C.error||"",success:C.success})}catch(M){p({stdout:"",stderr:`Error: ${M.message}`,success:!1})}finally{h(!1)}},O=async()=>{if(r){h(!0),p(null),b(null);try{const C=await(await fetch("/api/practice/run-tests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({language:i,code:l,testCases:r.testCases,functionName:"solution"})})).json();b(C),C.allPassed&&q(r.id)}catch(M){p({stdout:"",stderr:`Error running tests: ${M.message}`,success:!1})}finally{h(!1)}}},S=()=>{r&&(o(r.starterCode[i]||r.starterCode.python),p(null),b(null))},z=()=>{r&&j<r.hints.length&&(k(!0),f(M=>Math.min(M+1,r.hints.length)))};if(E){const M=Bh.length,C=F.length,P=Math.round(C/M*100);return n.jsx("div",{className:"practice-container",children:n.jsxs("div",{className:"roadmap-page",children:[n.jsxs("div",{className:"roadmap-header",children:[n.jsxs("div",{className:"roadmap-title",children:[n.jsx(Vc,{size:32}),n.jsxs("div",{children:[n.jsx("h1",{children:"DSA Roadmap"}),n.jsx("p",{children:"Master data structures and algorithms step by step"})]})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[n.jsxs("div",{className:"view-toggle",children:[n.jsxs("button",{className:`view-toggle-btn ${I==="map"?"active":""}`,onClick:()=>H("map"),children:[n.jsx(Dg,{size:16}),"Map"]}),n.jsxs("button",{className:`view-toggle-btn ${I==="list"?"active":""}`,onClick:()=>H("list"),children:[n.jsx($g,{size:16}),"List"]})]}),n.jsxs("div",{className:"progress-stats",children:[n.jsxs("div",{className:"progress-circle",children:[n.jsxs("svg",{viewBox:"0 0 36 36",children:[n.jsx("path",{className:"progress-bg",d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"}),n.jsx("path",{className:"progress-fill",strokeDasharray:`${P}, 100`,d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"})]}),n.jsxs("span",{className:"progress-text",children:[P,"%"]})]}),n.jsxs("div",{className:"progress-info",children:[n.jsxs("span",{className:"completed-count",children:[C,"/",M]}),n.jsx("span",{className:"completed-label",children:"Problems Solved"})]})]})]})]}),I==="map"&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"roadmap-visual-map",children:ua.map(_=>{const N=_.problems.map(J=>_t[J]).filter(Boolean),V=N.filter(J=>F.includes(J.id)).length,G=Math.round(V/N.length*100),W=D===_.id;return n.jsxs("div",{className:`map-node ${W?"active":""}`,style:{"--node-color":_.color},onClick:()=>A(W?null:_.id),children:[V===N.length?n.jsx("div",{className:"map-node-badge completed",children:n.jsx(Mn,{size:14})}):V>0?n.jsx("div",{className:"map-node-badge in-progress",children:V}):null,n.jsxs("div",{className:"map-node-header",children:[n.jsx("span",{className:"map-node-icon",children:(()=>{const J=ha[_.icon];return J?n.jsx(J,{size:20}):null})()}),n.jsx("span",{className:"map-node-title",children:_.title})]}),n.jsx("p",{className:"map-node-description",children:_.description}),n.jsxs("div",{className:"map-node-progress",children:[n.jsx("div",{className:"map-node-progress-bar",children:n.jsx("div",{className:"map-node-progress-fill",style:{width:`${G}%`}})}),n.jsxs("span",{className:"map-node-progress-text",children:[V,"/",N.length]})]})]},_.id)})}),D&&n.jsx("div",{className:"expanded-section",children:(()=>{const _=ua.find(V=>V.id===D),N=_.problems.map(V=>_t[V]).filter(Boolean);return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"expanded-section-header",children:[n.jsxs("div",{className:"expanded-section-title",children:[n.jsx("span",{className:"section-icon-wrapper",children:(()=>{const V=ha[_.icon];return V?n.jsx(V,{size:24}):null})()}),n.jsx("h3",{children:_.title})]}),n.jsx("button",{className:"close-section-btn",onClick:V=>{V.stopPropagation(),A(null)},children:n.jsx(Ch,{size:16})})]}),n.jsx("div",{className:"problem-grid",children:N.map(V=>{const G=F.includes(V.id);return n.jsxs("div",{className:`problem-item ${G?"completed":""}`,onClick:()=>t(`/practice/${V.id}`),children:[n.jsx("div",{className:`problem-status-icon ${G?"done":"pending"}`,children:G?n.jsx(Mn,{size:16}):n.jsx(Ds,{size:16})}),n.jsxs("div",{className:"problem-item-info",children:[n.jsx("div",{className:"problem-item-title",children:V.title}),n.jsx("div",{className:"problem-item-meta",children:n.jsx("span",{className:`problem-item-difficulty ${V.difficulty.toLowerCase()}`,children:V.difficulty})})]}),n.jsx(aa,{size:16,className:"problem-item-arrow"})]},V.id)})})]})})()})]}),I==="list"&&n.jsx("div",{className:"roadmap-container",children:ua.map((_,N)=>{const V=_.problems.map(W=>_t[W]).filter(Boolean),G=V.filter(W=>F.includes(W.id)).length;return n.jsxs("div",{className:"roadmap-section",children:[N>0&&n.jsx("div",{className:"roadmap-connector"}),n.jsxs("div",{className:"section-card",style:{"--section-color":_.color},children:[n.jsxs("div",{className:"section-header",children:[n.jsx("span",{className:"section-icon",children:(()=>{const W=ha[_.icon];return W?n.jsx(W,{size:24}):null})()}),n.jsxs("div",{className:"section-info",children:[n.jsx("h2",{children:_.title}),n.jsx("p",{children:_.description})]}),n.jsx("div",{className:"section-progress",children:n.jsxs("span",{children:[G,"/",V.length]})})]}),n.jsx("div",{className:"section-problems",children:V.map((W,J)=>{const ne=F.includes(W.id);return n.jsxs("div",{className:`problem-node ${ne?"completed":""}`,onClick:()=>t(`/practice/${W.id}`),children:[J>0&&n.jsx("div",{className:"node-connector"}),n.jsx("div",{className:"node-circle",children:ne?n.jsx(Mn,{size:16}):n.jsx("span",{className:"node-number",children:J+1})}),n.jsxs("div",{className:"node-info",children:[n.jsx("span",{className:"node-title",children:W.title}),n.jsx("span",{className:`node-difficulty ${W.difficulty.toLowerCase()}`,children:W.difficulty})]}),n.jsx(aa,{size:16,className:"node-arrow"})]},W.id)})})]})]},_.id)})})]})})}return r?n.jsx("div",{className:"practice-container",children:n.jsxs("div",{className:"practice-layout",children:[n.jsxs("div",{className:"problem-panel",children:[n.jsxs("div",{className:"problem-header",children:[n.jsxs("button",{className:"back-btn",onClick:()=>y(!0),children:[n.jsx(Vc,{size:16})," Roadmap"]}),n.jsx("h1",{children:r.title}),n.jsx("span",{className:`difficulty ${r.difficulty.toLowerCase()}`,children:r.difficulty}),F.includes(r.id)&&n.jsxs("span",{className:"solved-badge",children:[n.jsx(Mn,{size:14})," Solved"]})]}),n.jsxs("div",{className:"problem-tabs",children:[n.jsx("button",{className:g==="description"?"active":"",onClick:()=>x("description"),children:"Description"}),n.jsx("button",{className:g==="hints"?"active":"",onClick:()=>x("hints"),children:"Hints"}),n.jsxs("button",{className:g==="solutions"?"active":"",onClick:()=>x("solutions"),children:[n.jsx(cl,{size:14}),"Solutions"]})]}),n.jsxs("div",{className:"problem-content",ref:R,children:[g==="description"&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"description",children:r.description.split(`
`).map((M,C)=>n.jsx("p",{children:M},C))}),n.jsxs("div",{className:"examples",children:[n.jsx("h3",{children:"Examples"}),r.examples.map((M,C)=>n.jsxs("div",{className:"example",children:[n.jsxs("div",{className:"example-label",children:["Example ",C+1,":"]}),n.jsxs("div",{className:"example-content",children:[n.jsxs("div",{children:[n.jsx("strong",{children:"Input:"})," ",n.jsx("code",{children:M.input})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Output:"})," ",n.jsx("code",{children:M.output})]}),M.explanation&&n.jsxs("div",{children:[n.jsx("strong",{children:"Explanation:"})," ",M.explanation]})]})]},C))]}),n.jsxs("div",{className:"constraints",children:[n.jsx("h3",{children:"Constraints"}),n.jsx("ul",{children:r.constraints.map((M,C)=>n.jsx("li",{children:n.jsx("code",{children:M})},C))})]})]}),g==="hints"&&n.jsxs("div",{className:"hints-section",children:[n.jsxs("div",{className:"hints-header",children:[n.jsx(ve,{size:20}),n.jsx("span",{children:"Need help? Reveal hints one at a time."})]}),r.hints.slice(0,j).map((M,C)=>n.jsxs("div",{className:"hint",children:[n.jsxs("span",{className:"hint-number",children:["Hint ",C+1,":"]}),M]},C)),j<r.hints.length&&n.jsxs("button",{className:"reveal-hint-btn",onClick:z,children:[n.jsx(ve,{size:14}),"Reveal Hint ",j+1]}),j>=r.hints.length&&n.jsx("div",{className:"all-hints-shown",children:"All hints revealed!"})]}),g==="solutions"&&r.solutions&&n.jsxs("div",{className:"solutions-section",children:[n.jsxs("div",{className:"solutions-header",children:[n.jsx(cl,{size:20}),n.jsx("span",{children:"Multiple approaches with different time/space complexities"})]}),n.jsx("div",{className:"solutions-list",children:Object.entries(r.solutions).map(([M,C])=>{const P=K===M,_=$===M;return n.jsxs("div",{className:`solution-card ${P?"expanded":""}`,children:[n.jsxs("div",{className:"solution-card-header",onClick:()=>B(P?null:M),children:[n.jsxs("div",{className:"solution-info",children:[n.jsx("h4",{className:"solution-name",children:C.name}),n.jsxs("div",{className:"solution-complexity",children:[n.jsxs("span",{className:"complexity-badge time",children:[n.jsx(jh,{size:12}),C.timeComplexity]}),n.jsxs("span",{className:"complexity-badge space",children:[n.jsx(Mg,{size:12}),C.spaceComplexity]})]})]}),n.jsx(aa,{size:18,className:`solution-expand-icon ${P?"rotated":""}`})]}),P&&n.jsxs("div",{className:"solution-card-body",children:[n.jsx("p",{className:"solution-description",children:C.description}),n.jsxs("div",{className:"solution-code-container",children:[n.jsxs("div",{className:"solution-code-header",children:[n.jsx("span",{children:"Python"}),n.jsx("button",{className:"copy-solution-btn",onClick:N=>{N.stopPropagation(),navigator.clipboard.writeText(C.code),v(M),setTimeout(()=>v(null),2e3)},children:_?n.jsxs(n.Fragment,{children:[n.jsx(Og,{size:14}),"Copied!"]}):n.jsxs(n.Fragment,{children:[n.jsx(Nh,{size:14}),"Copy"]})})]}),n.jsx("pre",{className:"solution-code",children:n.jsx("code",{children:C.code})})]}),n.jsxs("button",{className:"use-solution-btn",onClick:N=>{N.stopPropagation(),o(C.code),x("description")},children:[n.jsx(Ds,{size:14}),"Use This Solution"]})]})]},M)})})]})]})]}),n.jsxs("div",{className:"editor-panel",children:[n.jsxs("div",{className:"editor-header",children:[n.jsxs("div",{className:"language-selector",children:[n.jsx(Ds,{size:16}),n.jsx("span",{className:"language-label",children:"Python"})]}),n.jsx("div",{className:"editor-actions",children:n.jsx("button",{className:"btn btn-reset",onClick:S,disabled:c,title:"Reset code",children:n.jsx(at,{size:14})})})]}),n.jsx(uN,{language:i,code:l,onChange:o}),n.jsxs("div",{className:"run-actions",children:[n.jsxs("button",{className:"btn btn-run",onClick:L,disabled:c,children:[n.jsx($e,{size:14}),c?"Running...":"Run Code"]}),n.jsxs("button",{className:"btn btn-submit",onClick:O,disabled:c,children:[n.jsx(Mn,{size:14}),c?"Testing...":"Submit"]})]}),n.jsxs("div",{className:"output-panel",children:[n.jsxs("div",{className:"output-header",children:[n.jsx("span",{children:"Output"}),d&&n.jsx("span",{className:`status ${d.success?"success":"error"}`,children:d.success?"Success":"Error"})]}),n.jsxs("div",{className:"output-content",children:[!d&&!m&&n.jsx("div",{className:"output-placeholder",children:"Run your code to see output here..."}),d&&n.jsxs(n.Fragment,{children:[d.stdout&&n.jsxs("div",{className:"stdout",children:[n.jsx("div",{className:"output-label",children:"stdout:"}),n.jsx("pre",{children:d.stdout})]}),d.stderr&&n.jsxs("div",{className:"stderr",children:[n.jsx("div",{className:"output-label",children:"stderr:"}),n.jsx("pre",{children:d.stderr})]})]}),m&&n.jsxs("div",{className:"test-results",children:[n.jsx("div",{className:"test-summary",children:n.jsx("span",{className:m.allPassed?"all-passed":"some-failed",children:m.allPassed?n.jsxs(n.Fragment,{children:[n.jsx(Mn,{size:16})," All tests passed!"]}):n.jsxs(n.Fragment,{children:[n.jsx(Dc,{size:16})," ",m.summary.passed,"/",m.summary.total," tests passed"]})})}),n.jsx("div",{className:"test-cases",children:m.results.map((M,C)=>n.jsxs("div",{className:`test-case ${M.passed?"passed":"failed"}`,children:[n.jsxs("div",{className:"test-case-header",children:[M.passed?n.jsx(Mn,{size:14}):n.jsx(Dc,{size:14}),n.jsxs("span",{children:["Test Case ",M.testCase]})]}),n.jsxs("div",{className:"test-case-details",children:[n.jsxs("div",{children:[n.jsx("strong",{children:"Input:"})," ",n.jsx("code",{children:M.input})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Expected:"})," ",n.jsx("code",{children:M.expected})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Actual:"})," ",n.jsx("code",{children:M.actual||"(empty)"})]}),M.error&&n.jsxs("div",{className:"test-error",children:[n.jsx("strong",{children:"Error:"})," ",M.error]})]})]},C))})]})]})]})]})]})}):n.jsx("div",{className:"practice-container",children:n.jsx("div",{className:"loading",children:"Loading problem..."})})}function hN(){return n.jsxs("div",{className:"homepage-body",children:[n.jsx(Wg,{}),n.jsxs("main",{className:"main-content",children:[n.jsxs(pg,{children:[n.jsx(re,{path:"/",element:n.jsx(ux,{})}),n.jsx(re,{path:"/algorithms",element:n.jsx(hx,{})}),n.jsx(re,{path:"/contact",element:n.jsx(px,{})}),n.jsx(re,{path:"/contributions",element:n.jsx(fx,{})}),n.jsx(re,{path:"/stack",element:n.jsx(Sv,{})}),n.jsx(re,{path:"/queue",element:n.jsx(Cv,{})}),n.jsx(re,{path:"/linkedlist",element:n.jsx(Tv,{})}),n.jsx(re,{path:"/skiplist",element:n.jsx(_v,{})}),n.jsx(re,{path:"/hashtable_linear",element:n.jsx(Lv,{})}),n.jsx(re,{path:"/hashtable_quadratic",element:n.jsx(Vv,{})}),n.jsx(re,{path:"/hashtable_chaining",element:n.jsx(Av,{})}),n.jsx(re,{path:"/binarytree",element:n.jsx(Kv,{})}),n.jsx(re,{path:"/bst",element:n.jsx(jj,{})}),n.jsx(re,{path:"/avl",element:n.jsx(Cj,{})}),n.jsx(re,{path:"/splay",element:n.jsx(Oj,{})}),n.jsx(re,{path:"/treap",element:n.jsx(Aj,{})}),n.jsx(re,{path:"/minheap",element:n.jsx(Bj,{})}),n.jsx(re,{path:"/maxheap",element:n.jsx(Kj,{})}),n.jsx(re,{path:"/adjacency-list",element:n.jsx(Wj,{})}),n.jsx(re,{path:"/adjacency-matrix",element:n.jsx(Gj,{})}),n.jsx(re,{path:"/bfs",element:n.jsx(Qj,{})}),n.jsx(re,{path:"/dfs",element:n.jsx(Xj,{})}),n.jsx(re,{path:"/dijkstra",element:n.jsx(Yj,{})}),n.jsx(re,{path:"/bellman-ford",element:n.jsx(e0,{})}),n.jsx(re,{path:"/prim-mst",element:n.jsx(Jj,{})}),n.jsx(re,{path:"/kruskal-mst",element:n.jsx(n0,{})}),n.jsx(re,{path:"/topological-sort",element:n.jsx(Zj,{})}),n.jsx(re,{path:"/practice",element:n.jsx(Qc,{})}),n.jsx(re,{path:"/practice/:problemId",element:n.jsx(Qc,{})})]}),n.jsx(Gg,{})]})]})}pa.createRoot(document.getElementById("root")).render(n.jsx(Ve.StrictMode,{children:n.jsx(jg,{children:n.jsx(hN,{})})}));
