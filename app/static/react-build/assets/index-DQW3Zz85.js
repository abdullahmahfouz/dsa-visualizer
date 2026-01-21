function $d(e,n){for(var r=0;r<n.length;r++){const s=n[r];if(typeof s!="string"&&!Array.isArray(s)){for(const a in s)if(a!=="default"&&!(a in e)){const i=Object.getOwnPropertyDescriptor(s,a);i&&Object.defineProperty(e,a,i.get?i:{enumerable:!0,get:()=>s[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();function Hd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var pc={exports:{}},Qs={},fc={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zr=Symbol.for("react.element"),Bd=Symbol.for("react.portal"),qd=Symbol.for("react.fragment"),Ud=Symbol.for("react.strict_mode"),Kd=Symbol.for("react.profiler"),Wd=Symbol.for("react.provider"),Qd=Symbol.for("react.context"),Gd=Symbol.for("react.forward_ref"),Xd=Symbol.for("react.suspense"),Zd=Symbol.for("react.memo"),Jd=Symbol.for("react.lazy"),Kl=Symbol.iterator;function Yd(e){return e===null||typeof e!="object"?null:(e=Kl&&e[Kl]||e["@@iterator"],typeof e=="function"?e:null)}var mc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gc=Object.assign,vc={};function qt(e,n,r){this.props=e,this.context=n,this.refs=vc,this.updater=r||mc}qt.prototype.isReactComponent={};qt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};qt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function yc(){}yc.prototype=qt.prototype;function Ki(e,n,r){this.props=e,this.context=n,this.refs=vc,this.updater=r||mc}var Wi=Ki.prototype=new yc;Wi.constructor=Ki;gc(Wi,qt.prototype);Wi.isPureReactComponent=!0;var Wl=Array.isArray,xc=Object.prototype.hasOwnProperty,Qi={current:null},jc={key:!0,ref:!0,__self:!0,__source:!0};function kc(e,n,r){var s,a={},i=null,l=null;if(n!=null)for(s in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(i=""+n.key),n)xc.call(n,s)&&!jc.hasOwnProperty(s)&&(a[s]=n[s]);var o=arguments.length-2;if(o===1)a.children=r;else if(1<o){for(var c=Array(o),d=0;d<o;d++)c[d]=arguments[d+2];a.children=c}if(e&&e.defaultProps)for(s in o=e.defaultProps,o)a[s]===void 0&&(a[s]=o[s]);return{$$typeof:zr,type:e,key:i,ref:l,props:a,_owner:Qi.current}}function eh(e,n){return{$$typeof:zr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Gi(e){return typeof e=="object"&&e!==null&&e.$$typeof===zr}function nh(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return n[r]})}var Ql=/\/+/g;function ha(e,n){return typeof e=="object"&&e!==null&&e.key!=null?nh(""+e.key):n.toString(36)}function is(e,n,r,s,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case zr:case Bd:l=!0}}if(l)return l=e,a=a(l),e=s===""?"."+ha(l,0):s,Wl(a)?(r="",e!=null&&(r=e.replace(Ql,"$&/")+"/"),is(a,n,r,"",function(d){return d})):a!=null&&(Gi(a)&&(a=eh(a,r+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(Ql,"$&/")+"/")+e)),n.push(a)),1;if(l=0,s=s===""?".":s+":",Wl(e))for(var o=0;o<e.length;o++){i=e[o];var c=s+ha(i,o);l+=is(i,n,r,c,a)}else if(c=Yd(e),typeof c=="function")for(e=c.call(e),o=0;!(i=e.next()).done;)i=i.value,c=s+ha(i,o++),l+=is(i,n,r,c,a);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function Br(e,n,r){if(e==null)return e;var s=[],a=0;return is(e,s,"","",function(i){return n.call(r,i,a++)}),s}function th(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Oe={current:null},ls={transition:null},rh={ReactCurrentDispatcher:Oe,ReactCurrentBatchConfig:ls,ReactCurrentOwner:Qi};function Nc(){throw Error("act(...) is not supported in production builds of React.")}G.Children={map:Br,forEach:function(e,n,r){Br(e,function(){n.apply(this,arguments)},r)},count:function(e){var n=0;return Br(e,function(){n++}),n},toArray:function(e){return Br(e,function(n){return n})||[]},only:function(e){if(!Gi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};G.Component=qt;G.Fragment=qd;G.Profiler=Kd;G.PureComponent=Ki;G.StrictMode=Ud;G.Suspense=Xd;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rh;G.act=Nc;G.cloneElement=function(e,n,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=gc({},e.props),a=e.key,i=e.ref,l=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,l=Qi.current),n.key!==void 0&&(a=""+n.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(c in n)xc.call(n,c)&&!jc.hasOwnProperty(c)&&(s[c]=n[c]===void 0&&o!==void 0?o[c]:n[c])}var c=arguments.length-2;if(c===1)s.children=r;else if(1<c){o=Array(c);for(var d=0;d<c;d++)o[d]=arguments[d+2];s.children=o}return{$$typeof:zr,type:e.type,key:a,ref:i,props:s,_owner:l}};G.createContext=function(e){return e={$$typeof:Qd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Wd,_context:e},e.Consumer=e};G.createElement=kc;G.createFactory=function(e){var n=kc.bind(null,e);return n.type=e,n};G.createRef=function(){return{current:null}};G.forwardRef=function(e){return{$$typeof:Gd,render:e}};G.isValidElement=Gi;G.lazy=function(e){return{$$typeof:Jd,_payload:{_status:-1,_result:e},_init:th}};G.memo=function(e,n){return{$$typeof:Zd,type:e,compare:n===void 0?null:n}};G.startTransition=function(e){var n=ls.transition;ls.transition={};try{e()}finally{ls.transition=n}};G.unstable_act=Nc;G.useCallback=function(e,n){return Oe.current.useCallback(e,n)};G.useContext=function(e){return Oe.current.useContext(e)};G.useDebugValue=function(){};G.useDeferredValue=function(e){return Oe.current.useDeferredValue(e)};G.useEffect=function(e,n){return Oe.current.useEffect(e,n)};G.useId=function(){return Oe.current.useId()};G.useImperativeHandle=function(e,n,r){return Oe.current.useImperativeHandle(e,n,r)};G.useInsertionEffect=function(e,n){return Oe.current.useInsertionEffect(e,n)};G.useLayoutEffect=function(e,n){return Oe.current.useLayoutEffect(e,n)};G.useMemo=function(e,n){return Oe.current.useMemo(e,n)};G.useReducer=function(e,n,r){return Oe.current.useReducer(e,n,r)};G.useRef=function(e){return Oe.current.useRef(e)};G.useState=function(e){return Oe.current.useState(e)};G.useSyncExternalStore=function(e,n,r){return Oe.current.useSyncExternalStore(e,n,r)};G.useTransition=function(){return Oe.current.useTransition()};G.version="18.3.1";fc.exports=G;var g=fc.exports;const ot=Hd(g),sh=$d({__proto__:null,default:ot},[g]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ah=g,ih=Symbol.for("react.element"),lh=Symbol.for("react.fragment"),oh=Object.prototype.hasOwnProperty,ch=ah.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,uh={key:!0,ref:!0,__self:!0,__source:!0};function wc(e,n,r){var s,a={},i=null,l=null;r!==void 0&&(i=""+r),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(l=n.ref);for(s in n)oh.call(n,s)&&!uh.hasOwnProperty(s)&&(a[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps,n)a[s]===void 0&&(a[s]=n[s]);return{$$typeof:ih,type:e,key:i,ref:l,props:a,_owner:ch.current}}Qs.Fragment=lh;Qs.jsx=wc;Qs.jsxs=wc;pc.exports=Qs;var t=pc.exports,Da={},bc={exports:{}},qe={},Sc={exports:{}},Tc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(b,T){var x=b.length;b.push(T);e:for(;0<x;){var R=x-1>>>1,M=b[R];if(0<a(M,T))b[R]=T,b[x]=M,x=R;else break e}}function r(b){return b.length===0?null:b[0]}function s(b){if(b.length===0)return null;var T=b[0],x=b.pop();if(x!==T){b[0]=x;e:for(var R=0,M=b.length,I=M>>>1;R<I;){var B=2*(R+1)-1,q=b[B],W=B+1,Ce=b[W];if(0>a(q,x))W<M&&0>a(Ce,q)?(b[R]=Ce,b[W]=x,R=W):(b[R]=q,b[B]=x,R=B);else if(W<M&&0>a(Ce,x))b[R]=Ce,b[W]=x,R=W;else break e}}return T}function a(b,T){var x=b.sortIndex-T.sortIndex;return x!==0?x:b.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,o=l.now();e.unstable_now=function(){return l.now()-o}}var c=[],d=[],u=1,h=null,f=3,N=!1,k=!1,j=!1,y=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(b){for(var T=r(d);T!==null;){if(T.callback===null)s(d);else if(T.startTime<=b)s(d),T.sortIndex=T.expirationTime,n(c,T);else break;T=r(d)}}function C(b){if(j=!1,v(b),!k)if(r(c)!==null)k=!0,L(S);else{var T=r(d);T!==null&&P(C,T.startTime-b)}}function S(b,T){k=!1,j&&(j=!1,p(_),_=-1),N=!0;var x=f;try{for(v(T),h=r(c);h!==null&&(!(h.expirationTime>T)||b&&!$());){var R=h.callback;if(typeof R=="function"){h.callback=null,f=h.priorityLevel;var M=R(h.expirationTime<=T);T=e.unstable_now(),typeof M=="function"?h.callback=M:h===r(c)&&s(c),v(T)}else s(c);h=r(c)}if(h!==null)var I=!0;else{var B=r(d);B!==null&&P(C,B.startTime-T),I=!1}return I}finally{h=null,f=x,N=!1}}var z=!1,E=null,_=-1,A=5,O=-1;function $(){return!(e.unstable_now()-O<A)}function Q(){if(E!==null){var b=e.unstable_now();O=b;var T=!0;try{T=E(!0,b)}finally{T?V():(z=!1,E=null)}}else z=!1}var V;if(typeof m=="function")V=function(){m(Q)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,w=D.port2;D.port1.onmessage=Q,V=function(){w.postMessage(null)}}else V=function(){y(Q,0)};function L(b){E=b,z||(z=!0,V())}function P(b,T){_=y(function(){b(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){k||N||(k=!0,L(S))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(b){switch(f){case 1:case 2:case 3:var T=3;break;default:T=f}var x=f;f=T;try{return b()}finally{f=x}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,T){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var x=f;f=b;try{return T()}finally{f=x}},e.unstable_scheduleCallback=function(b,T,x){var R=e.unstable_now();switch(typeof x=="object"&&x!==null?(x=x.delay,x=typeof x=="number"&&0<x?R+x:R):x=R,b){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=x+M,b={id:u++,callback:T,priorityLevel:b,startTime:x,expirationTime:M,sortIndex:-1},x>R?(b.sortIndex=x,n(d,b),r(c)===null&&b===r(d)&&(j?(p(_),_=-1):j=!0,P(C,x-R))):(b.sortIndex=M,n(c,b),k||N||(k=!0,L(S))),b},e.unstable_shouldYield=$,e.unstable_wrapCallback=function(b){var T=f;return function(){var x=f;f=T;try{return b.apply(this,arguments)}finally{f=x}}}})(Tc);Sc.exports=Tc;var dh=Sc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hh=g,Be=dh;function F(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Cc=new Set,gr={};function ct(e,n){Mt(e,n),Mt(e+"Capture",n)}function Mt(e,n){for(gr[e]=n,e=0;e<n.length;e++)Cc.add(n[e])}var xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$a=Object.prototype.hasOwnProperty,ph=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Gl={},Xl={};function fh(e){return $a.call(Xl,e)?!0:$a.call(Gl,e)?!1:ph.test(e)?Xl[e]=!0:(Gl[e]=!0,!1)}function mh(e,n,r,s){if(r!==null&&r.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return s?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function gh(e,n,r,s){if(n===null||typeof n>"u"||mh(e,n,r,s))return!0;if(s)return!1;if(r!==null)switch(r.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function _e(e,n,r,s,a,i,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=s,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=l}var je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){je[e]=new _e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];je[n]=new _e(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){je[e]=new _e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){je[e]=new _e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){je[e]=new _e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){je[e]=new _e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){je[e]=new _e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){je[e]=new _e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){je[e]=new _e(e,5,!1,e.toLowerCase(),null,!1,!1)});var Xi=/[\-:]([a-z])/g;function Zi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Xi,Zi);je[n]=new _e(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Xi,Zi);je[n]=new _e(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Xi,Zi);je[n]=new _e(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){je[e]=new _e(e,1,!1,e.toLowerCase(),null,!1,!1)});je.xlinkHref=new _e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){je[e]=new _e(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ji(e,n,r,s){var a=je.hasOwnProperty(n)?je[n]:null;(a!==null?a.type!==0:s||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(gh(n,r,a,s)&&(r=null),s||a===null?fh(n)&&(r===null?e.removeAttribute(n):e.setAttribute(n,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(n=a.attributeName,s=a.attributeNamespace,r===null?e.removeAttribute(n):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,s?e.setAttributeNS(s,n,r):e.setAttribute(n,r))))}var bn=hh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qr=Symbol.for("react.element"),ft=Symbol.for("react.portal"),mt=Symbol.for("react.fragment"),Yi=Symbol.for("react.strict_mode"),Ha=Symbol.for("react.profiler"),Ec=Symbol.for("react.provider"),Lc=Symbol.for("react.context"),el=Symbol.for("react.forward_ref"),Ba=Symbol.for("react.suspense"),qa=Symbol.for("react.suspense_list"),nl=Symbol.for("react.memo"),Tn=Symbol.for("react.lazy"),Rc=Symbol.for("react.offscreen"),Zl=Symbol.iterator;function Qt(e){return e===null||typeof e!="object"?null:(e=Zl&&e[Zl]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Object.assign,pa;function tr(e){if(pa===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);pa=n&&n[1]||""}return`
`+pa+e}var fa=!1;function ma(e,n){if(!e||fa)return"";fa=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(d){var s=d}Reflect.construct(e,[],n)}else{try{n.call()}catch(d){s=d}e.call(n.prototype)}else{try{throw Error()}catch(d){s=d}e()}}catch(d){if(d&&s&&typeof d.stack=="string"){for(var a=d.stack.split(`
`),i=s.stack.split(`
`),l=a.length-1,o=i.length-1;1<=l&&0<=o&&a[l]!==i[o];)o--;for(;1<=l&&0<=o;l--,o--)if(a[l]!==i[o]){if(l!==1||o!==1)do if(l--,o--,0>o||a[l]!==i[o]){var c=`
`+a[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=o);break}}}finally{fa=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?tr(e):""}function vh(e){switch(e.tag){case 5:return tr(e.type);case 16:return tr("Lazy");case 13:return tr("Suspense");case 19:return tr("SuspenseList");case 0:case 2:case 15:return e=ma(e.type,!1),e;case 11:return e=ma(e.type.render,!1),e;case 1:return e=ma(e.type,!0),e;default:return""}}function Ua(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case mt:return"Fragment";case ft:return"Portal";case Ha:return"Profiler";case Yi:return"StrictMode";case Ba:return"Suspense";case qa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Lc:return(e.displayName||"Context")+".Consumer";case Ec:return(e._context.displayName||"Context")+".Provider";case el:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case nl:return n=e.displayName||null,n!==null?n:Ua(e.type)||"Memo";case Tn:n=e._payload,e=e._init;try{return Ua(e(n))}catch{}}return null}function yh(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ua(n);case 8:return n===Yi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Bn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Oc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function xh(e){var n=Oc(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,i=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return a.call(this)},set:function(l){s=""+l,i.call(this,l)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return s},setValue:function(l){s=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ur(e){e._valueTracker||(e._valueTracker=xh(e))}function _c(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var r=n.getValue(),s="";return e&&(s=Oc(e)?e.checked?"true":"false":e.value),e=s,e!==r?(n.setValue(e),!0):!1}function ys(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ka(e,n){var r=n.checked;return ie({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Jl(e,n){var r=n.defaultValue==null?"":n.defaultValue,s=n.checked!=null?n.checked:n.defaultChecked;r=Bn(n.value!=null?n.value:r),e._wrapperState={initialChecked:s,initialValue:r,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Pc(e,n){n=n.checked,n!=null&&Ji(e,"checked",n,!1)}function Wa(e,n){Pc(e,n);var r=Bn(n.value),s=n.type;if(r!=null)s==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Qa(e,n.type,r):n.hasOwnProperty("defaultValue")&&Qa(e,n.type,Bn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Yl(e,n,r){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var s=n.type;if(!(s!=="submit"&&s!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,r||n===e.value||(e.value=n),e.defaultValue=n}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Qa(e,n,r){(n!=="number"||ys(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var rr=Array.isArray;function Rt(e,n,r,s){if(e=e.options,n){n={};for(var a=0;a<r.length;a++)n["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=n.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&s&&(e[r].defaultSelected=!0)}else{for(r=""+Bn(r),n=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,s&&(e[a].defaultSelected=!0);return}n!==null||e[a].disabled||(n=e[a])}n!==null&&(n.selected=!0)}}function Ga(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(F(91));return ie({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function eo(e,n){var r=n.value;if(r==null){if(r=n.children,n=n.defaultValue,r!=null){if(n!=null)throw Error(F(92));if(rr(r)){if(1<r.length)throw Error(F(93));r=r[0]}n=r}n==null&&(n=""),r=n}e._wrapperState={initialValue:Bn(r)}}function Ic(e,n){var r=Bn(n.value),s=Bn(n.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),n.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),s!=null&&(e.defaultValue=""+s)}function no(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function zc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xa(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?zc(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Kr,Mc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,r,s,a){MSApp.execUnsafeLocalFunction(function(){return e(n,r,s,a)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Kr=Kr||document.createElement("div"),Kr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Kr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function vr(e,n){if(n){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=n;return}}e.textContent=n}var ir={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jh=["Webkit","ms","Moz","O"];Object.keys(ir).forEach(function(e){jh.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),ir[n]=ir[e]})});function Ac(e,n,r){return n==null||typeof n=="boolean"||n===""?"":r||typeof n!="number"||n===0||ir.hasOwnProperty(e)&&ir[e]?(""+n).trim():n+"px"}function Vc(e,n){e=e.style;for(var r in n)if(n.hasOwnProperty(r)){var s=r.indexOf("--")===0,a=Ac(r,n[r],s);r==="float"&&(r="cssFloat"),s?e.setProperty(r,a):e[r]=a}}var kh=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Za(e,n){if(n){if(kh[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(F(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(F(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(F(61))}if(n.style!=null&&typeof n.style!="object")throw Error(F(62))}}function Ja(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ya=null;function tl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ei=null,Ot=null,_t=null;function to(e){if(e=Vr(e)){if(typeof ei!="function")throw Error(F(280));var n=e.stateNode;n&&(n=Ys(n),ei(e.stateNode,e.type,n))}}function Fc(e){Ot?_t?_t.push(e):_t=[e]:Ot=e}function Dc(){if(Ot){var e=Ot,n=_t;if(_t=Ot=null,to(e),n)for(e=0;e<n.length;e++)to(n[e])}}function $c(e,n){return e(n)}function Hc(){}var ga=!1;function Bc(e,n,r){if(ga)return e(n,r);ga=!0;try{return $c(e,n,r)}finally{ga=!1,(Ot!==null||_t!==null)&&(Hc(),Dc())}}function yr(e,n){var r=e.stateNode;if(r===null)return null;var s=Ys(r);if(s===null)return null;r=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(F(231,n,typeof r));return r}var ni=!1;if(xn)try{var Gt={};Object.defineProperty(Gt,"passive",{get:function(){ni=!0}}),window.addEventListener("test",Gt,Gt),window.removeEventListener("test",Gt,Gt)}catch{ni=!1}function Nh(e,n,r,s,a,i,l,o,c){var d=Array.prototype.slice.call(arguments,3);try{n.apply(r,d)}catch(u){this.onError(u)}}var lr=!1,xs=null,js=!1,ti=null,wh={onError:function(e){lr=!0,xs=e}};function bh(e,n,r,s,a,i,l,o,c){lr=!1,xs=null,Nh.apply(wh,arguments)}function Sh(e,n,r,s,a,i,l,o,c){if(bh.apply(this,arguments),lr){if(lr){var d=xs;lr=!1,xs=null}else throw Error(F(198));js||(js=!0,ti=d)}}function ut(e){var n=e,r=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(r=n.return),e=n.return;while(e)}return n.tag===3?r:null}function qc(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function ro(e){if(ut(e)!==e)throw Error(F(188))}function Th(e){var n=e.alternate;if(!n){if(n=ut(e),n===null)throw Error(F(188));return n!==e?null:e}for(var r=e,s=n;;){var a=r.return;if(a===null)break;var i=a.alternate;if(i===null){if(s=a.return,s!==null){r=s;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===r)return ro(a),e;if(i===s)return ro(a),n;i=i.sibling}throw Error(F(188))}if(r.return!==s.return)r=a,s=i;else{for(var l=!1,o=a.child;o;){if(o===r){l=!0,r=a,s=i;break}if(o===s){l=!0,s=a,r=i;break}o=o.sibling}if(!l){for(o=i.child;o;){if(o===r){l=!0,r=i,s=a;break}if(o===s){l=!0,s=i,r=a;break}o=o.sibling}if(!l)throw Error(F(189))}}if(r.alternate!==s)throw Error(F(190))}if(r.tag!==3)throw Error(F(188));return r.stateNode.current===r?e:n}function Uc(e){return e=Th(e),e!==null?Kc(e):null}function Kc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Kc(e);if(n!==null)return n;e=e.sibling}return null}var Wc=Be.unstable_scheduleCallback,so=Be.unstable_cancelCallback,Ch=Be.unstable_shouldYield,Eh=Be.unstable_requestPaint,ue=Be.unstable_now,Lh=Be.unstable_getCurrentPriorityLevel,rl=Be.unstable_ImmediatePriority,Qc=Be.unstable_UserBlockingPriority,ks=Be.unstable_NormalPriority,Rh=Be.unstable_LowPriority,Gc=Be.unstable_IdlePriority,Gs=null,un=null;function Oh(e){if(un&&typeof un.onCommitFiberRoot=="function")try{un.onCommitFiberRoot(Gs,e,void 0,(e.current.flags&128)===128)}catch{}}var rn=Math.clz32?Math.clz32:Ih,_h=Math.log,Ph=Math.LN2;function Ih(e){return e>>>=0,e===0?32:31-(_h(e)/Ph|0)|0}var Wr=64,Qr=4194304;function sr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ns(e,n){var r=e.pendingLanes;if(r===0)return 0;var s=0,a=e.suspendedLanes,i=e.pingedLanes,l=r&268435455;if(l!==0){var o=l&~a;o!==0?s=sr(o):(i&=l,i!==0&&(s=sr(i)))}else l=r&~a,l!==0?s=sr(l):i!==0&&(s=sr(i));if(s===0)return 0;if(n!==0&&n!==s&&!(n&a)&&(a=s&-s,i=n&-n,a>=i||a===16&&(i&4194240)!==0))return n;if(s&4&&(s|=r&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=s;0<n;)r=31-rn(n),a=1<<r,s|=e[r],n&=~a;return s}function zh(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mh(e,n){for(var r=e.suspendedLanes,s=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-rn(i),o=1<<l,c=a[l];c===-1?(!(o&r)||o&s)&&(a[l]=zh(o,n)):c<=n&&(e.expiredLanes|=o),i&=~o}}function ri(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Xc(){var e=Wr;return Wr<<=1,!(Wr&4194240)&&(Wr=64),e}function va(e){for(var n=[],r=0;31>r;r++)n.push(e);return n}function Mr(e,n,r){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-rn(n),e[n]=r}function Ah(e,n){var r=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-rn(r),i=1<<a;n[a]=0,s[a]=-1,e[a]=-1,r&=~i}}function sl(e,n){var r=e.entangledLanes|=n;for(e=e.entanglements;r;){var s=31-rn(r),a=1<<s;a&n|e[s]&n&&(e[s]|=n),r&=~a}}var J=0;function Zc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Jc,al,Yc,eu,nu,si=!1,Gr=[],In=null,zn=null,Mn=null,xr=new Map,jr=new Map,En=[],Vh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ao(e,n){switch(e){case"focusin":case"focusout":In=null;break;case"dragenter":case"dragleave":zn=null;break;case"mouseover":case"mouseout":Mn=null;break;case"pointerover":case"pointerout":xr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":jr.delete(n.pointerId)}}function Xt(e,n,r,s,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:r,eventSystemFlags:s,nativeEvent:i,targetContainers:[a]},n!==null&&(n=Vr(n),n!==null&&al(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,a!==null&&n.indexOf(a)===-1&&n.push(a),e)}function Fh(e,n,r,s,a){switch(n){case"focusin":return In=Xt(In,e,n,r,s,a),!0;case"dragenter":return zn=Xt(zn,e,n,r,s,a),!0;case"mouseover":return Mn=Xt(Mn,e,n,r,s,a),!0;case"pointerover":var i=a.pointerId;return xr.set(i,Xt(xr.get(i)||null,e,n,r,s,a)),!0;case"gotpointercapture":return i=a.pointerId,jr.set(i,Xt(jr.get(i)||null,e,n,r,s,a)),!0}return!1}function tu(e){var n=Xn(e.target);if(n!==null){var r=ut(n);if(r!==null){if(n=r.tag,n===13){if(n=qc(r),n!==null){e.blockedOn=n,nu(e.priority,function(){Yc(r)});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function os(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var r=ai(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var s=new r.constructor(r.type,r);Ya=s,r.target.dispatchEvent(s),Ya=null}else return n=Vr(r),n!==null&&al(n),e.blockedOn=r,!1;n.shift()}return!0}function io(e,n,r){os(e)&&r.delete(n)}function Dh(){si=!1,In!==null&&os(In)&&(In=null),zn!==null&&os(zn)&&(zn=null),Mn!==null&&os(Mn)&&(Mn=null),xr.forEach(io),jr.forEach(io)}function Zt(e,n){e.blockedOn===n&&(e.blockedOn=null,si||(si=!0,Be.unstable_scheduleCallback(Be.unstable_NormalPriority,Dh)))}function kr(e){function n(a){return Zt(a,e)}if(0<Gr.length){Zt(Gr[0],e);for(var r=1;r<Gr.length;r++){var s=Gr[r];s.blockedOn===e&&(s.blockedOn=null)}}for(In!==null&&Zt(In,e),zn!==null&&Zt(zn,e),Mn!==null&&Zt(Mn,e),xr.forEach(n),jr.forEach(n),r=0;r<En.length;r++)s=En[r],s.blockedOn===e&&(s.blockedOn=null);for(;0<En.length&&(r=En[0],r.blockedOn===null);)tu(r),r.blockedOn===null&&En.shift()}var Pt=bn.ReactCurrentBatchConfig,ws=!0;function $h(e,n,r,s){var a=J,i=Pt.transition;Pt.transition=null;try{J=1,il(e,n,r,s)}finally{J=a,Pt.transition=i}}function Hh(e,n,r,s){var a=J,i=Pt.transition;Pt.transition=null;try{J=4,il(e,n,r,s)}finally{J=a,Pt.transition=i}}function il(e,n,r,s){if(ws){var a=ai(e,n,r,s);if(a===null)Ca(e,n,s,bs,r),ao(e,s);else if(Fh(a,e,n,r,s))s.stopPropagation();else if(ao(e,s),n&4&&-1<Vh.indexOf(e)){for(;a!==null;){var i=Vr(a);if(i!==null&&Jc(i),i=ai(e,n,r,s),i===null&&Ca(e,n,s,bs,r),i===a)break;a=i}a!==null&&s.stopPropagation()}else Ca(e,n,s,null,r)}}var bs=null;function ai(e,n,r,s){if(bs=null,e=tl(s),e=Xn(e),e!==null)if(n=ut(e),n===null)e=null;else if(r=n.tag,r===13){if(e=qc(n),e!==null)return e;e=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return bs=e,null}function ru(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Lh()){case rl:return 1;case Qc:return 4;case ks:case Rh:return 16;case Gc:return 536870912;default:return 16}default:return 16}}var Rn=null,ll=null,cs=null;function su(){if(cs)return cs;var e,n=ll,r=n.length,s,a="value"in Rn?Rn.value:Rn.textContent,i=a.length;for(e=0;e<r&&n[e]===a[e];e++);var l=r-e;for(s=1;s<=l&&n[r-s]===a[i-s];s++);return cs=a.slice(e,1<s?1-s:void 0)}function us(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Xr(){return!0}function lo(){return!1}function Ue(e){function n(r,s,a,i,l){this._reactName=r,this._targetInst=a,this.type=s,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(r=e[o],this[o]=r?r(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Xr:lo,this.isPropagationStopped=lo,this}return ie(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Xr)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Xr)},persist:function(){},isPersistent:Xr}),n}var Ut={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ol=Ue(Ut),Ar=ie({},Ut,{view:0,detail:0}),Bh=Ue(Ar),ya,xa,Jt,Xs=ie({},Ar,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jt&&(Jt&&e.type==="mousemove"?(ya=e.screenX-Jt.screenX,xa=e.screenY-Jt.screenY):xa=ya=0,Jt=e),ya)},movementY:function(e){return"movementY"in e?e.movementY:xa}}),oo=Ue(Xs),qh=ie({},Xs,{dataTransfer:0}),Uh=Ue(qh),Kh=ie({},Ar,{relatedTarget:0}),ja=Ue(Kh),Wh=ie({},Ut,{animationName:0,elapsedTime:0,pseudoElement:0}),Qh=Ue(Wh),Gh=ie({},Ut,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xh=Ue(Gh),Zh=ie({},Ut,{data:0}),co=Ue(Zh),Jh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ep={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function np(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ep[e])?!!n[e]:!1}function cl(){return np}var tp=ie({},Ar,{key:function(e){if(e.key){var n=Jh[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=us(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Yh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cl,charCode:function(e){return e.type==="keypress"?us(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?us(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),rp=Ue(tp),sp=ie({},Xs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uo=Ue(sp),ap=ie({},Ar,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cl}),ip=Ue(ap),lp=ie({},Ut,{propertyName:0,elapsedTime:0,pseudoElement:0}),op=Ue(lp),cp=ie({},Xs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),up=Ue(cp),dp=[9,13,27,32],ul=xn&&"CompositionEvent"in window,or=null;xn&&"documentMode"in document&&(or=document.documentMode);var hp=xn&&"TextEvent"in window&&!or,au=xn&&(!ul||or&&8<or&&11>=or),ho=" ",po=!1;function iu(e,n){switch(e){case"keyup":return dp.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var gt=!1;function pp(e,n){switch(e){case"compositionend":return lu(n);case"keypress":return n.which!==32?null:(po=!0,ho);case"textInput":return e=n.data,e===ho&&po?null:e;default:return null}}function fp(e,n){if(gt)return e==="compositionend"||!ul&&iu(e,n)?(e=su(),cs=ll=Rn=null,gt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return au&&n.locale!=="ko"?null:n.data;default:return null}}var mp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!mp[e.type]:n==="textarea"}function ou(e,n,r,s){Fc(s),n=Ss(n,"onChange"),0<n.length&&(r=new ol("onChange","change",null,r,s),e.push({event:r,listeners:n}))}var cr=null,Nr=null;function gp(e){xu(e,0)}function Zs(e){var n=xt(e);if(_c(n))return e}function vp(e,n){if(e==="change")return n}var cu=!1;if(xn){var ka;if(xn){var Na="oninput"in document;if(!Na){var mo=document.createElement("div");mo.setAttribute("oninput","return;"),Na=typeof mo.oninput=="function"}ka=Na}else ka=!1;cu=ka&&(!document.documentMode||9<document.documentMode)}function go(){cr&&(cr.detachEvent("onpropertychange",uu),Nr=cr=null)}function uu(e){if(e.propertyName==="value"&&Zs(Nr)){var n=[];ou(n,Nr,e,tl(e)),Bc(gp,n)}}function yp(e,n,r){e==="focusin"?(go(),cr=n,Nr=r,cr.attachEvent("onpropertychange",uu)):e==="focusout"&&go()}function xp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zs(Nr)}function jp(e,n){if(e==="click")return Zs(n)}function kp(e,n){if(e==="input"||e==="change")return Zs(n)}function Np(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var an=typeof Object.is=="function"?Object.is:Np;function wr(e,n){if(an(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var r=Object.keys(e),s=Object.keys(n);if(r.length!==s.length)return!1;for(s=0;s<r.length;s++){var a=r[s];if(!$a.call(n,a)||!an(e[a],n[a]))return!1}return!0}function vo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yo(e,n){var r=vo(e);e=0;for(var s;r;){if(r.nodeType===3){if(s=e+r.textContent.length,e<=n&&s>=n)return{node:r,offset:n-e};e=s}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=vo(r)}}function du(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?du(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function hu(){for(var e=window,n=ys();n instanceof e.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)e=n.contentWindow;else break;n=ys(e.document)}return n}function dl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function wp(e){var n=hu(),r=e.focusedElem,s=e.selectionRange;if(n!==r&&r&&r.ownerDocument&&du(r.ownerDocument.documentElement,r)){if(s!==null&&dl(r)){if(n=s.start,e=s.end,e===void 0&&(e=n),"selectionStart"in r)r.selectionStart=n,r.selectionEnd=Math.min(e,r.value.length);else if(e=(n=r.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,i=Math.min(s.start,a);s=s.end===void 0?i:Math.min(s.end,a),!e.extend&&i>s&&(a=s,s=i,i=a),a=yo(r,i);var l=yo(r,s);a&&l&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(a.node,a.offset),e.removeAllRanges(),i>s?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=r;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<n.length;r++)e=n[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var bp=xn&&"documentMode"in document&&11>=document.documentMode,vt=null,ii=null,ur=null,li=!1;function xo(e,n,r){var s=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;li||vt==null||vt!==ys(s)||(s=vt,"selectionStart"in s&&dl(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),ur&&wr(ur,s)||(ur=s,s=Ss(ii,"onSelect"),0<s.length&&(n=new ol("onSelect","select",null,n,r),e.push({event:n,listeners:s}),n.target=vt)))}function Zr(e,n){var r={};return r[e.toLowerCase()]=n.toLowerCase(),r["Webkit"+e]="webkit"+n,r["Moz"+e]="moz"+n,r}var yt={animationend:Zr("Animation","AnimationEnd"),animationiteration:Zr("Animation","AnimationIteration"),animationstart:Zr("Animation","AnimationStart"),transitionend:Zr("Transition","TransitionEnd")},wa={},pu={};xn&&(pu=document.createElement("div").style,"AnimationEvent"in window||(delete yt.animationend.animation,delete yt.animationiteration.animation,delete yt.animationstart.animation),"TransitionEvent"in window||delete yt.transitionend.transition);function Js(e){if(wa[e])return wa[e];if(!yt[e])return e;var n=yt[e],r;for(r in n)if(n.hasOwnProperty(r)&&r in pu)return wa[e]=n[r];return e}var fu=Js("animationend"),mu=Js("animationiteration"),gu=Js("animationstart"),vu=Js("transitionend"),yu=new Map,jo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Un(e,n){yu.set(e,n),ct(n,[e])}for(var ba=0;ba<jo.length;ba++){var Sa=jo[ba],Sp=Sa.toLowerCase(),Tp=Sa[0].toUpperCase()+Sa.slice(1);Un(Sp,"on"+Tp)}Un(fu,"onAnimationEnd");Un(mu,"onAnimationIteration");Un(gu,"onAnimationStart");Un("dblclick","onDoubleClick");Un("focusin","onFocus");Un("focusout","onBlur");Un(vu,"onTransitionEnd");Mt("onMouseEnter",["mouseout","mouseover"]);Mt("onMouseLeave",["mouseout","mouseover"]);Mt("onPointerEnter",["pointerout","pointerover"]);Mt("onPointerLeave",["pointerout","pointerover"]);ct("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ct("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ct("onBeforeInput",["compositionend","keypress","textInput","paste"]);ct("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ct("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ct("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ar="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cp=new Set("cancel close invalid load scroll toggle".split(" ").concat(ar));function ko(e,n,r){var s=e.type||"unknown-event";e.currentTarget=r,Sh(s,n,void 0,e),e.currentTarget=null}function xu(e,n){n=(n&4)!==0;for(var r=0;r<e.length;r++){var s=e[r],a=s.event;s=s.listeners;e:{var i=void 0;if(n)for(var l=s.length-1;0<=l;l--){var o=s[l],c=o.instance,d=o.currentTarget;if(o=o.listener,c!==i&&a.isPropagationStopped())break e;ko(a,o,d),i=c}else for(l=0;l<s.length;l++){if(o=s[l],c=o.instance,d=o.currentTarget,o=o.listener,c!==i&&a.isPropagationStopped())break e;ko(a,o,d),i=c}}}if(js)throw e=ti,js=!1,ti=null,e}function ne(e,n){var r=n[hi];r===void 0&&(r=n[hi]=new Set);var s=e+"__bubble";r.has(s)||(ju(n,e,2,!1),r.add(s))}function Ta(e,n,r){var s=0;n&&(s|=4),ju(r,e,s,n)}var Jr="_reactListening"+Math.random().toString(36).slice(2);function br(e){if(!e[Jr]){e[Jr]=!0,Cc.forEach(function(r){r!=="selectionchange"&&(Cp.has(r)||Ta(r,!1,e),Ta(r,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Jr]||(n[Jr]=!0,Ta("selectionchange",!1,n))}}function ju(e,n,r,s){switch(ru(n)){case 1:var a=$h;break;case 4:a=Hh;break;default:a=il}r=a.bind(null,n,r,e),a=void 0,!ni||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(a=!0),s?a!==void 0?e.addEventListener(n,r,{capture:!0,passive:a}):e.addEventListener(n,r,!0):a!==void 0?e.addEventListener(n,r,{passive:a}):e.addEventListener(n,r,!1)}function Ca(e,n,r,s,a){var i=s;if(!(n&1)&&!(n&2)&&s!==null)e:for(;;){if(s===null)return;var l=s.tag;if(l===3||l===4){var o=s.stateNode.containerInfo;if(o===a||o.nodeType===8&&o.parentNode===a)break;if(l===4)for(l=s.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;l=l.return}for(;o!==null;){if(l=Xn(o),l===null)return;if(c=l.tag,c===5||c===6){s=i=l;continue e}o=o.parentNode}}s=s.return}Bc(function(){var d=i,u=tl(r),h=[];e:{var f=yu.get(e);if(f!==void 0){var N=ol,k=e;switch(e){case"keypress":if(us(r)===0)break e;case"keydown":case"keyup":N=rp;break;case"focusin":k="focus",N=ja;break;case"focusout":k="blur",N=ja;break;case"beforeblur":case"afterblur":N=ja;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=oo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=Uh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=ip;break;case fu:case mu:case gu:N=Qh;break;case vu:N=op;break;case"scroll":N=Bh;break;case"wheel":N=up;break;case"copy":case"cut":case"paste":N=Xh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=uo}var j=(n&4)!==0,y=!j&&e==="scroll",p=j?f!==null?f+"Capture":null:f;j=[];for(var m=d,v;m!==null;){v=m;var C=v.stateNode;if(v.tag===5&&C!==null&&(v=C,p!==null&&(C=yr(m,p),C!=null&&j.push(Sr(m,C,v)))),y)break;m=m.return}0<j.length&&(f=new N(f,k,null,r,u),h.push({event:f,listeners:j}))}}if(!(n&7)){e:{if(f=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",f&&r!==Ya&&(k=r.relatedTarget||r.fromElement)&&(Xn(k)||k[jn]))break e;if((N||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,N?(k=r.relatedTarget||r.toElement,N=d,k=k?Xn(k):null,k!==null&&(y=ut(k),k!==y||k.tag!==5&&k.tag!==6)&&(k=null)):(N=null,k=d),N!==k)){if(j=oo,C="onMouseLeave",p="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(j=uo,C="onPointerLeave",p="onPointerEnter",m="pointer"),y=N==null?f:xt(N),v=k==null?f:xt(k),f=new j(C,m+"leave",N,r,u),f.target=y,f.relatedTarget=v,C=null,Xn(u)===d&&(j=new j(p,m+"enter",k,r,u),j.target=v,j.relatedTarget=y,C=j),y=C,N&&k)n:{for(j=N,p=k,m=0,v=j;v;v=pt(v))m++;for(v=0,C=p;C;C=pt(C))v++;for(;0<m-v;)j=pt(j),m--;for(;0<v-m;)p=pt(p),v--;for(;m--;){if(j===p||p!==null&&j===p.alternate)break n;j=pt(j),p=pt(p)}j=null}else j=null;N!==null&&No(h,f,N,j,!1),k!==null&&y!==null&&No(h,y,k,j,!0)}}e:{if(f=d?xt(d):window,N=f.nodeName&&f.nodeName.toLowerCase(),N==="select"||N==="input"&&f.type==="file")var S=vp;else if(fo(f))if(cu)S=kp;else{S=xp;var z=yp}else(N=f.nodeName)&&N.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=jp);if(S&&(S=S(e,d))){ou(h,S,r,u);break e}z&&z(e,f,d),e==="focusout"&&(z=f._wrapperState)&&z.controlled&&f.type==="number"&&Qa(f,"number",f.value)}switch(z=d?xt(d):window,e){case"focusin":(fo(z)||z.contentEditable==="true")&&(vt=z,ii=d,ur=null);break;case"focusout":ur=ii=vt=null;break;case"mousedown":li=!0;break;case"contextmenu":case"mouseup":case"dragend":li=!1,xo(h,r,u);break;case"selectionchange":if(bp)break;case"keydown":case"keyup":xo(h,r,u)}var E;if(ul)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else gt?iu(e,r)&&(_="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(_="onCompositionStart");_&&(au&&r.locale!=="ko"&&(gt||_!=="onCompositionStart"?_==="onCompositionEnd"&&gt&&(E=su()):(Rn=u,ll="value"in Rn?Rn.value:Rn.textContent,gt=!0)),z=Ss(d,_),0<z.length&&(_=new co(_,e,null,r,u),h.push({event:_,listeners:z}),E?_.data=E:(E=lu(r),E!==null&&(_.data=E)))),(E=hp?pp(e,r):fp(e,r))&&(d=Ss(d,"onBeforeInput"),0<d.length&&(u=new co("onBeforeInput","beforeinput",null,r,u),h.push({event:u,listeners:d}),u.data=E))}xu(h,n)})}function Sr(e,n,r){return{instance:e,listener:n,currentTarget:r}}function Ss(e,n){for(var r=n+"Capture",s=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=yr(e,r),i!=null&&s.unshift(Sr(e,i,a)),i=yr(e,n),i!=null&&s.push(Sr(e,i,a))),e=e.return}return s}function pt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function No(e,n,r,s,a){for(var i=n._reactName,l=[];r!==null&&r!==s;){var o=r,c=o.alternate,d=o.stateNode;if(c!==null&&c===s)break;o.tag===5&&d!==null&&(o=d,a?(c=yr(r,i),c!=null&&l.unshift(Sr(r,c,o))):a||(c=yr(r,i),c!=null&&l.push(Sr(r,c,o)))),r=r.return}l.length!==0&&e.push({event:n,listeners:l})}var Ep=/\r\n?/g,Lp=/\u0000|\uFFFD/g;function wo(e){return(typeof e=="string"?e:""+e).replace(Ep,`
`).replace(Lp,"")}function Yr(e,n,r){if(n=wo(n),wo(e)!==n&&r)throw Error(F(425))}function Ts(){}var oi=null,ci=null;function ui(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var di=typeof setTimeout=="function"?setTimeout:void 0,Rp=typeof clearTimeout=="function"?clearTimeout:void 0,bo=typeof Promise=="function"?Promise:void 0,Op=typeof queueMicrotask=="function"?queueMicrotask:typeof bo<"u"?function(e){return bo.resolve(null).then(e).catch(_p)}:di;function _p(e){setTimeout(function(){throw e})}function Ea(e,n){var r=n,s=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(s===0){e.removeChild(a),kr(n);return}s--}else r!=="$"&&r!=="$?"&&r!=="$!"||s++;r=a}while(r);kr(n)}function An(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function So(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(n===0)return e;n--}else r==="/$"&&n++}e=e.previousSibling}return null}var Kt=Math.random().toString(36).slice(2),cn="__reactFiber$"+Kt,Tr="__reactProps$"+Kt,jn="__reactContainer$"+Kt,hi="__reactEvents$"+Kt,Pp="__reactListeners$"+Kt,Ip="__reactHandles$"+Kt;function Xn(e){var n=e[cn];if(n)return n;for(var r=e.parentNode;r;){if(n=r[jn]||r[cn]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(e=So(e);e!==null;){if(r=e[cn])return r;e=So(e)}return n}e=r,r=e.parentNode}return null}function Vr(e){return e=e[cn]||e[jn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function xt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(F(33))}function Ys(e){return e[Tr]||null}var pi=[],jt=-1;function Kn(e){return{current:e}}function te(e){0>jt||(e.current=pi[jt],pi[jt]=null,jt--)}function ee(e,n){jt++,pi[jt]=e.current,e.current=n}var qn={},be=Kn(qn),Me=Kn(!1),rt=qn;function At(e,n){var r=e.type.contextTypes;if(!r)return qn;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===n)return s.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in r)a[i]=n[i];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=a),a}function Ae(e){return e=e.childContextTypes,e!=null}function Cs(){te(Me),te(be)}function To(e,n,r){if(be.current!==qn)throw Error(F(168));ee(be,n),ee(Me,r)}function ku(e,n,r){var s=e.stateNode;if(n=n.childContextTypes,typeof s.getChildContext!="function")return r;s=s.getChildContext();for(var a in s)if(!(a in n))throw Error(F(108,yh(e)||"Unknown",a));return ie({},r,s)}function Es(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||qn,rt=be.current,ee(be,e),ee(Me,Me.current),!0}function Co(e,n,r){var s=e.stateNode;if(!s)throw Error(F(169));r?(e=ku(e,n,rt),s.__reactInternalMemoizedMergedChildContext=e,te(Me),te(be),ee(be,e)):te(Me),ee(Me,r)}var mn=null,ea=!1,La=!1;function Nu(e){mn===null?mn=[e]:mn.push(e)}function zp(e){ea=!0,Nu(e)}function Wn(){if(!La&&mn!==null){La=!0;var e=0,n=J;try{var r=mn;for(J=1;e<r.length;e++){var s=r[e];do s=s(!0);while(s!==null)}mn=null,ea=!1}catch(a){throw mn!==null&&(mn=mn.slice(e+1)),Wc(rl,Wn),a}finally{J=n,La=!1}}return null}var kt=[],Nt=0,Ls=null,Rs=0,Ke=[],We=0,st=null,gn=1,vn="";function Qn(e,n){kt[Nt++]=Rs,kt[Nt++]=Ls,Ls=e,Rs=n}function wu(e,n,r){Ke[We++]=gn,Ke[We++]=vn,Ke[We++]=st,st=e;var s=gn;e=vn;var a=32-rn(s)-1;s&=~(1<<a),r+=1;var i=32-rn(n)+a;if(30<i){var l=a-a%5;i=(s&(1<<l)-1).toString(32),s>>=l,a-=l,gn=1<<32-rn(n)+a|r<<a|s,vn=i+e}else gn=1<<i|r<<a|s,vn=e}function hl(e){e.return!==null&&(Qn(e,1),wu(e,1,0))}function pl(e){for(;e===Ls;)Ls=kt[--Nt],kt[Nt]=null,Rs=kt[--Nt],kt[Nt]=null;for(;e===st;)st=Ke[--We],Ke[We]=null,vn=Ke[--We],Ke[We]=null,gn=Ke[--We],Ke[We]=null}var He=null,$e=null,re=!1,tn=null;function bu(e,n){var r=Qe(5,null,null,0);r.elementType="DELETED",r.stateNode=n,r.return=e,n=e.deletions,n===null?(e.deletions=[r],e.flags|=16):n.push(r)}function Eo(e,n){switch(e.tag){case 5:var r=e.type;return n=n.nodeType!==1||r.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,He=e,$e=An(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,He=e,$e=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(r=st!==null?{id:gn,overflow:vn}:null,e.memoizedState={dehydrated:n,treeContext:r,retryLane:1073741824},r=Qe(18,null,null,0),r.stateNode=n,r.return=e,e.child=r,He=e,$e=null,!0):!1;default:return!1}}function fi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function mi(e){if(re){var n=$e;if(n){var r=n;if(!Eo(e,n)){if(fi(e))throw Error(F(418));n=An(r.nextSibling);var s=He;n&&Eo(e,n)?bu(s,r):(e.flags=e.flags&-4097|2,re=!1,He=e)}}else{if(fi(e))throw Error(F(418));e.flags=e.flags&-4097|2,re=!1,He=e}}}function Lo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;He=e}function es(e){if(e!==He)return!1;if(!re)return Lo(e),re=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!ui(e.type,e.memoizedProps)),n&&(n=$e)){if(fi(e))throw Su(),Error(F(418));for(;n;)bu(e,n),n=An(n.nextSibling)}if(Lo(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(F(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(n===0){$e=An(e.nextSibling);break e}n--}else r!=="$"&&r!=="$!"&&r!=="$?"||n++}e=e.nextSibling}$e=null}}else $e=He?An(e.stateNode.nextSibling):null;return!0}function Su(){for(var e=$e;e;)e=An(e.nextSibling)}function Vt(){$e=He=null,re=!1}function fl(e){tn===null?tn=[e]:tn.push(e)}var Mp=bn.ReactCurrentBatchConfig;function Yt(e,n,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(F(309));var s=r.stateNode}if(!s)throw Error(F(147,e));var a=s,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(l){var o=a.refs;l===null?delete o[i]:o[i]=l},n._stringRef=i,n)}if(typeof e!="string")throw Error(F(284));if(!r._owner)throw Error(F(290,e))}return e}function ns(e,n){throw e=Object.prototype.toString.call(n),Error(F(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Ro(e){var n=e._init;return n(e._payload)}function Tu(e){function n(p,m){if(e){var v=p.deletions;v===null?(p.deletions=[m],p.flags|=16):v.push(m)}}function r(p,m){if(!e)return null;for(;m!==null;)n(p,m),m=m.sibling;return null}function s(p,m){for(p=new Map;m!==null;)m.key!==null?p.set(m.key,m):p.set(m.index,m),m=m.sibling;return p}function a(p,m){return p=$n(p,m),p.index=0,p.sibling=null,p}function i(p,m,v){return p.index=v,e?(v=p.alternate,v!==null?(v=v.index,v<m?(p.flags|=2,m):v):(p.flags|=2,m)):(p.flags|=1048576,m)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function o(p,m,v,C){return m===null||m.tag!==6?(m=Ma(v,p.mode,C),m.return=p,m):(m=a(m,v),m.return=p,m)}function c(p,m,v,C){var S=v.type;return S===mt?u(p,m,v.props.children,C,v.key):m!==null&&(m.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Tn&&Ro(S)===m.type)?(C=a(m,v.props),C.ref=Yt(p,m,v),C.return=p,C):(C=vs(v.type,v.key,v.props,null,p.mode,C),C.ref=Yt(p,m,v),C.return=p,C)}function d(p,m,v,C){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=Aa(v,p.mode,C),m.return=p,m):(m=a(m,v.children||[]),m.return=p,m)}function u(p,m,v,C,S){return m===null||m.tag!==7?(m=tt(v,p.mode,C,S),m.return=p,m):(m=a(m,v),m.return=p,m)}function h(p,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Ma(""+m,p.mode,v),m.return=p,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case qr:return v=vs(m.type,m.key,m.props,null,p.mode,v),v.ref=Yt(p,null,m),v.return=p,v;case ft:return m=Aa(m,p.mode,v),m.return=p,m;case Tn:var C=m._init;return h(p,C(m._payload),v)}if(rr(m)||Qt(m))return m=tt(m,p.mode,v,null),m.return=p,m;ns(p,m)}return null}function f(p,m,v,C){var S=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return S!==null?null:o(p,m,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case qr:return v.key===S?c(p,m,v,C):null;case ft:return v.key===S?d(p,m,v,C):null;case Tn:return S=v._init,f(p,m,S(v._payload),C)}if(rr(v)||Qt(v))return S!==null?null:u(p,m,v,C,null);ns(p,v)}return null}function N(p,m,v,C,S){if(typeof C=="string"&&C!==""||typeof C=="number")return p=p.get(v)||null,o(m,p,""+C,S);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case qr:return p=p.get(C.key===null?v:C.key)||null,c(m,p,C,S);case ft:return p=p.get(C.key===null?v:C.key)||null,d(m,p,C,S);case Tn:var z=C._init;return N(p,m,v,z(C._payload),S)}if(rr(C)||Qt(C))return p=p.get(v)||null,u(m,p,C,S,null);ns(m,C)}return null}function k(p,m,v,C){for(var S=null,z=null,E=m,_=m=0,A=null;E!==null&&_<v.length;_++){E.index>_?(A=E,E=null):A=E.sibling;var O=f(p,E,v[_],C);if(O===null){E===null&&(E=A);break}e&&E&&O.alternate===null&&n(p,E),m=i(O,m,_),z===null?S=O:z.sibling=O,z=O,E=A}if(_===v.length)return r(p,E),re&&Qn(p,_),S;if(E===null){for(;_<v.length;_++)E=h(p,v[_],C),E!==null&&(m=i(E,m,_),z===null?S=E:z.sibling=E,z=E);return re&&Qn(p,_),S}for(E=s(p,E);_<v.length;_++)A=N(E,p,_,v[_],C),A!==null&&(e&&A.alternate!==null&&E.delete(A.key===null?_:A.key),m=i(A,m,_),z===null?S=A:z.sibling=A,z=A);return e&&E.forEach(function($){return n(p,$)}),re&&Qn(p,_),S}function j(p,m,v,C){var S=Qt(v);if(typeof S!="function")throw Error(F(150));if(v=S.call(v),v==null)throw Error(F(151));for(var z=S=null,E=m,_=m=0,A=null,O=v.next();E!==null&&!O.done;_++,O=v.next()){E.index>_?(A=E,E=null):A=E.sibling;var $=f(p,E,O.value,C);if($===null){E===null&&(E=A);break}e&&E&&$.alternate===null&&n(p,E),m=i($,m,_),z===null?S=$:z.sibling=$,z=$,E=A}if(O.done)return r(p,E),re&&Qn(p,_),S;if(E===null){for(;!O.done;_++,O=v.next())O=h(p,O.value,C),O!==null&&(m=i(O,m,_),z===null?S=O:z.sibling=O,z=O);return re&&Qn(p,_),S}for(E=s(p,E);!O.done;_++,O=v.next())O=N(E,p,_,O.value,C),O!==null&&(e&&O.alternate!==null&&E.delete(O.key===null?_:O.key),m=i(O,m,_),z===null?S=O:z.sibling=O,z=O);return e&&E.forEach(function(Q){return n(p,Q)}),re&&Qn(p,_),S}function y(p,m,v,C){if(typeof v=="object"&&v!==null&&v.type===mt&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case qr:e:{for(var S=v.key,z=m;z!==null;){if(z.key===S){if(S=v.type,S===mt){if(z.tag===7){r(p,z.sibling),m=a(z,v.props.children),m.return=p,p=m;break e}}else if(z.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Tn&&Ro(S)===z.type){r(p,z.sibling),m=a(z,v.props),m.ref=Yt(p,z,v),m.return=p,p=m;break e}r(p,z);break}else n(p,z);z=z.sibling}v.type===mt?(m=tt(v.props.children,p.mode,C,v.key),m.return=p,p=m):(C=vs(v.type,v.key,v.props,null,p.mode,C),C.ref=Yt(p,m,v),C.return=p,p=C)}return l(p);case ft:e:{for(z=v.key;m!==null;){if(m.key===z)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){r(p,m.sibling),m=a(m,v.children||[]),m.return=p,p=m;break e}else{r(p,m);break}else n(p,m);m=m.sibling}m=Aa(v,p.mode,C),m.return=p,p=m}return l(p);case Tn:return z=v._init,y(p,m,z(v._payload),C)}if(rr(v))return k(p,m,v,C);if(Qt(v))return j(p,m,v,C);ns(p,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(r(p,m.sibling),m=a(m,v),m.return=p,p=m):(r(p,m),m=Ma(v,p.mode,C),m.return=p,p=m),l(p)):r(p,m)}return y}var Ft=Tu(!0),Cu=Tu(!1),Os=Kn(null),_s=null,wt=null,ml=null;function gl(){ml=wt=_s=null}function vl(e){var n=Os.current;te(Os),e._currentValue=n}function gi(e,n,r){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===r)break;e=e.return}}function It(e,n){_s=e,ml=wt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(ze=!0),e.firstContext=null)}function Xe(e){var n=e._currentValue;if(ml!==e)if(e={context:e,memoizedValue:n,next:null},wt===null){if(_s===null)throw Error(F(308));wt=e,_s.dependencies={lanes:0,firstContext:e}}else wt=wt.next=e;return n}var Zn=null;function yl(e){Zn===null?Zn=[e]:Zn.push(e)}function Eu(e,n,r,s){var a=n.interleaved;return a===null?(r.next=r,yl(n)):(r.next=a.next,a.next=r),n.interleaved=r,kn(e,s)}function kn(e,n){e.lanes|=n;var r=e.alternate;for(r!==null&&(r.lanes|=n),r=e,e=e.return;e!==null;)e.childLanes|=n,r=e.alternate,r!==null&&(r.childLanes|=n),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Cn=!1;function xl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function yn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Vn(e,n,r){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,X&2){var a=s.pending;return a===null?n.next=n:(n.next=a.next,a.next=n),s.pending=n,kn(e,r)}return a=s.interleaved,a===null?(n.next=n,yl(s)):(n.next=a.next,a.next=n),s.interleaved=n,kn(e,r)}function ds(e,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194240)!==0)){var s=n.lanes;s&=e.pendingLanes,r|=s,n.lanes=r,sl(e,r)}}function Oo(e,n){var r=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,r===s)){var a=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var l={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?a=i=l:i=i.next=l,r=r.next}while(r!==null);i===null?a=i=n:i=i.next=n}else a=i=n;r={baseState:s.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:s.shared,effects:s.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=n:e.next=n,r.lastBaseUpdate=n}function Ps(e,n,r,s){var a=e.updateQueue;Cn=!1;var i=a.firstBaseUpdate,l=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var c=o,d=c.next;c.next=null,l===null?i=d:l.next=d,l=c;var u=e.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==l&&(o===null?u.firstBaseUpdate=d:o.next=d,u.lastBaseUpdate=c))}if(i!==null){var h=a.baseState;l=0,u=d=c=null,o=i;do{var f=o.lane,N=o.eventTime;if((s&f)===f){u!==null&&(u=u.next={eventTime:N,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var k=e,j=o;switch(f=n,N=r,j.tag){case 1:if(k=j.payload,typeof k=="function"){h=k.call(N,h,f);break e}h=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=j.payload,f=typeof k=="function"?k.call(N,h,f):k,f==null)break e;h=ie({},h,f);break e;case 2:Cn=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,f=a.effects,f===null?a.effects=[o]:f.push(o))}else N={eventTime:N,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(d=u=N,c=h):u=u.next=N,l|=f;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;f=o,o=f.next,f.next=null,a.lastBaseUpdate=f,a.shared.pending=null}}while(!0);if(u===null&&(c=h),a.baseState=c,a.firstBaseUpdate=d,a.lastBaseUpdate=u,n=a.shared.interleaved,n!==null){a=n;do l|=a.lane,a=a.next;while(a!==n)}else i===null&&(a.shared.lanes=0);it|=l,e.lanes=l,e.memoizedState=h}}function _o(e,n,r){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var s=e[n],a=s.callback;if(a!==null){if(s.callback=null,s=r,typeof a!="function")throw Error(F(191,a));a.call(s)}}}var Fr={},dn=Kn(Fr),Cr=Kn(Fr),Er=Kn(Fr);function Jn(e){if(e===Fr)throw Error(F(174));return e}function jl(e,n){switch(ee(Er,n),ee(Cr,e),ee(dn,Fr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Xa(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Xa(n,e)}te(dn),ee(dn,n)}function Dt(){te(dn),te(Cr),te(Er)}function Ru(e){Jn(Er.current);var n=Jn(dn.current),r=Xa(n,e.type);n!==r&&(ee(Cr,e),ee(dn,r))}function kl(e){Cr.current===e&&(te(dn),te(Cr))}var se=Kn(0);function Is(e){for(var n=e;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ra=[];function Nl(){for(var e=0;e<Ra.length;e++)Ra[e]._workInProgressVersionPrimary=null;Ra.length=0}var hs=bn.ReactCurrentDispatcher,Oa=bn.ReactCurrentBatchConfig,at=0,ae=null,pe=null,me=null,zs=!1,dr=!1,Lr=0,Ap=0;function ke(){throw Error(F(321))}function wl(e,n){if(n===null)return!1;for(var r=0;r<n.length&&r<e.length;r++)if(!an(e[r],n[r]))return!1;return!0}function bl(e,n,r,s,a,i){if(at=i,ae=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,hs.current=e===null||e.memoizedState===null?$p:Hp,e=r(s,a),dr){i=0;do{if(dr=!1,Lr=0,25<=i)throw Error(F(301));i+=1,me=pe=null,n.updateQueue=null,hs.current=Bp,e=r(s,a)}while(dr)}if(hs.current=Ms,n=pe!==null&&pe.next!==null,at=0,me=pe=ae=null,zs=!1,n)throw Error(F(300));return e}function Sl(){var e=Lr!==0;return Lr=0,e}function on(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?ae.memoizedState=me=e:me=me.next=e,me}function Ze(){if(pe===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var n=me===null?ae.memoizedState:me.next;if(n!==null)me=n,pe=e;else{if(e===null)throw Error(F(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},me===null?ae.memoizedState=me=e:me=me.next=e}return me}function Rr(e,n){return typeof n=="function"?n(e):n}function _a(e){var n=Ze(),r=n.queue;if(r===null)throw Error(F(311));r.lastRenderedReducer=e;var s=pe,a=s.baseQueue,i=r.pending;if(i!==null){if(a!==null){var l=a.next;a.next=i.next,i.next=l}s.baseQueue=a=i,r.pending=null}if(a!==null){i=a.next,s=s.baseState;var o=l=null,c=null,d=i;do{var u=d.lane;if((at&u)===u)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),s=d.hasEagerState?d.eagerState:e(s,d.action);else{var h={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(o=c=h,l=s):c=c.next=h,ae.lanes|=u,it|=u}d=d.next}while(d!==null&&d!==i);c===null?l=s:c.next=o,an(s,n.memoizedState)||(ze=!0),n.memoizedState=s,n.baseState=l,n.baseQueue=c,r.lastRenderedState=s}if(e=r.interleaved,e!==null){a=e;do i=a.lane,ae.lanes|=i,it|=i,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[n.memoizedState,r.dispatch]}function Pa(e){var n=Ze(),r=n.queue;if(r===null)throw Error(F(311));r.lastRenderedReducer=e;var s=r.dispatch,a=r.pending,i=n.memoizedState;if(a!==null){r.pending=null;var l=a=a.next;do i=e(i,l.action),l=l.next;while(l!==a);an(i,n.memoizedState)||(ze=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),r.lastRenderedState=i}return[i,s]}function Ou(){}function _u(e,n){var r=ae,s=Ze(),a=n(),i=!an(s.memoizedState,a);if(i&&(s.memoizedState=a,ze=!0),s=s.queue,Tl(zu.bind(null,r,s,e),[e]),s.getSnapshot!==n||i||me!==null&&me.memoizedState.tag&1){if(r.flags|=2048,Or(9,Iu.bind(null,r,s,a,n),void 0,null),ge===null)throw Error(F(349));at&30||Pu(r,n,a)}return a}function Pu(e,n,r){e.flags|=16384,e={getSnapshot:n,value:r},n=ae.updateQueue,n===null?(n={lastEffect:null,stores:null},ae.updateQueue=n,n.stores=[e]):(r=n.stores,r===null?n.stores=[e]:r.push(e))}function Iu(e,n,r,s){n.value=r,n.getSnapshot=s,Mu(n)&&Au(e)}function zu(e,n,r){return r(function(){Mu(n)&&Au(e)})}function Mu(e){var n=e.getSnapshot;e=e.value;try{var r=n();return!an(e,r)}catch{return!0}}function Au(e){var n=kn(e,1);n!==null&&sn(n,e,1,-1)}function Po(e){var n=on();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Rr,lastRenderedState:e},n.queue=e,e=e.dispatch=Dp.bind(null,ae,e),[n.memoizedState,e]}function Or(e,n,r,s){return e={tag:e,create:n,destroy:r,deps:s,next:null},n=ae.updateQueue,n===null?(n={lastEffect:null,stores:null},ae.updateQueue=n,n.lastEffect=e.next=e):(r=n.lastEffect,r===null?n.lastEffect=e.next=e:(s=r.next,r.next=e,e.next=s,n.lastEffect=e)),e}function Vu(){return Ze().memoizedState}function ps(e,n,r,s){var a=on();ae.flags|=e,a.memoizedState=Or(1|n,r,void 0,s===void 0?null:s)}function na(e,n,r,s){var a=Ze();s=s===void 0?null:s;var i=void 0;if(pe!==null){var l=pe.memoizedState;if(i=l.destroy,s!==null&&wl(s,l.deps)){a.memoizedState=Or(n,r,i,s);return}}ae.flags|=e,a.memoizedState=Or(1|n,r,i,s)}function Io(e,n){return ps(8390656,8,e,n)}function Tl(e,n){return na(2048,8,e,n)}function Fu(e,n){return na(4,2,e,n)}function Du(e,n){return na(4,4,e,n)}function $u(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Hu(e,n,r){return r=r!=null?r.concat([e]):null,na(4,4,$u.bind(null,n,e),r)}function Cl(){}function Bu(e,n){var r=Ze();n=n===void 0?null:n;var s=r.memoizedState;return s!==null&&n!==null&&wl(n,s[1])?s[0]:(r.memoizedState=[e,n],e)}function qu(e,n){var r=Ze();n=n===void 0?null:n;var s=r.memoizedState;return s!==null&&n!==null&&wl(n,s[1])?s[0]:(e=e(),r.memoizedState=[e,n],e)}function Uu(e,n,r){return at&21?(an(r,n)||(r=Xc(),ae.lanes|=r,it|=r,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,ze=!0),e.memoizedState=r)}function Vp(e,n){var r=J;J=r!==0&&4>r?r:4,e(!0);var s=Oa.transition;Oa.transition={};try{e(!1),n()}finally{J=r,Oa.transition=s}}function Ku(){return Ze().memoizedState}function Fp(e,n,r){var s=Dn(e);if(r={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null},Wu(e))Qu(n,r);else if(r=Eu(e,n,r,s),r!==null){var a=Re();sn(r,e,s,a),Gu(r,n,s)}}function Dp(e,n,r){var s=Dn(e),a={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null};if(Wu(e))Qu(n,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var l=n.lastRenderedState,o=i(l,r);if(a.hasEagerState=!0,a.eagerState=o,an(o,l)){var c=n.interleaved;c===null?(a.next=a,yl(n)):(a.next=c.next,c.next=a),n.interleaved=a;return}}catch{}finally{}r=Eu(e,n,a,s),r!==null&&(a=Re(),sn(r,e,s,a),Gu(r,n,s))}}function Wu(e){var n=e.alternate;return e===ae||n!==null&&n===ae}function Qu(e,n){dr=zs=!0;var r=e.pending;r===null?n.next=n:(n.next=r.next,r.next=n),e.pending=n}function Gu(e,n,r){if(r&4194240){var s=n.lanes;s&=e.pendingLanes,r|=s,n.lanes=r,sl(e,r)}}var Ms={readContext:Xe,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useInsertionEffect:ke,useLayoutEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useMutableSource:ke,useSyncExternalStore:ke,useId:ke,unstable_isNewReconciler:!1},$p={readContext:Xe,useCallback:function(e,n){return on().memoizedState=[e,n===void 0?null:n],e},useContext:Xe,useEffect:Io,useImperativeHandle:function(e,n,r){return r=r!=null?r.concat([e]):null,ps(4194308,4,$u.bind(null,n,e),r)},useLayoutEffect:function(e,n){return ps(4194308,4,e,n)},useInsertionEffect:function(e,n){return ps(4,2,e,n)},useMemo:function(e,n){var r=on();return n=n===void 0?null:n,e=e(),r.memoizedState=[e,n],e},useReducer:function(e,n,r){var s=on();return n=r!==void 0?r(n):n,s.memoizedState=s.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},s.queue=e,e=e.dispatch=Fp.bind(null,ae,e),[s.memoizedState,e]},useRef:function(e){var n=on();return e={current:e},n.memoizedState=e},useState:Po,useDebugValue:Cl,useDeferredValue:function(e){return on().memoizedState=e},useTransition:function(){var e=Po(!1),n=e[0];return e=Vp.bind(null,e[1]),on().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,r){var s=ae,a=on();if(re){if(r===void 0)throw Error(F(407));r=r()}else{if(r=n(),ge===null)throw Error(F(349));at&30||Pu(s,n,r)}a.memoizedState=r;var i={value:r,getSnapshot:n};return a.queue=i,Io(zu.bind(null,s,i,e),[e]),s.flags|=2048,Or(9,Iu.bind(null,s,i,r,n),void 0,null),r},useId:function(){var e=on(),n=ge.identifierPrefix;if(re){var r=vn,s=gn;r=(s&~(1<<32-rn(s)-1)).toString(32)+r,n=":"+n+"R"+r,r=Lr++,0<r&&(n+="H"+r.toString(32)),n+=":"}else r=Ap++,n=":"+n+"r"+r.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Hp={readContext:Xe,useCallback:Bu,useContext:Xe,useEffect:Tl,useImperativeHandle:Hu,useInsertionEffect:Fu,useLayoutEffect:Du,useMemo:qu,useReducer:_a,useRef:Vu,useState:function(){return _a(Rr)},useDebugValue:Cl,useDeferredValue:function(e){var n=Ze();return Uu(n,pe.memoizedState,e)},useTransition:function(){var e=_a(Rr)[0],n=Ze().memoizedState;return[e,n]},useMutableSource:Ou,useSyncExternalStore:_u,useId:Ku,unstable_isNewReconciler:!1},Bp={readContext:Xe,useCallback:Bu,useContext:Xe,useEffect:Tl,useImperativeHandle:Hu,useInsertionEffect:Fu,useLayoutEffect:Du,useMemo:qu,useReducer:Pa,useRef:Vu,useState:function(){return Pa(Rr)},useDebugValue:Cl,useDeferredValue:function(e){var n=Ze();return pe===null?n.memoizedState=e:Uu(n,pe.memoizedState,e)},useTransition:function(){var e=Pa(Rr)[0],n=Ze().memoizedState;return[e,n]},useMutableSource:Ou,useSyncExternalStore:_u,useId:Ku,unstable_isNewReconciler:!1};function en(e,n){if(e&&e.defaultProps){n=ie({},n),e=e.defaultProps;for(var r in e)n[r]===void 0&&(n[r]=e[r]);return n}return n}function vi(e,n,r,s){n=e.memoizedState,r=r(s,n),r=r==null?n:ie({},n,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var ta={isMounted:function(e){return(e=e._reactInternals)?ut(e)===e:!1},enqueueSetState:function(e,n,r){e=e._reactInternals;var s=Re(),a=Dn(e),i=yn(s,a);i.payload=n,r!=null&&(i.callback=r),n=Vn(e,i,a),n!==null&&(sn(n,e,a,s),ds(n,e,a))},enqueueReplaceState:function(e,n,r){e=e._reactInternals;var s=Re(),a=Dn(e),i=yn(s,a);i.tag=1,i.payload=n,r!=null&&(i.callback=r),n=Vn(e,i,a),n!==null&&(sn(n,e,a,s),ds(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var r=Re(),s=Dn(e),a=yn(r,s);a.tag=2,n!=null&&(a.callback=n),n=Vn(e,a,s),n!==null&&(sn(n,e,s,r),ds(n,e,s))}};function zo(e,n,r,s,a,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,i,l):n.prototype&&n.prototype.isPureReactComponent?!wr(r,s)||!wr(a,i):!0}function Xu(e,n,r){var s=!1,a=qn,i=n.contextType;return typeof i=="object"&&i!==null?i=Xe(i):(a=Ae(n)?rt:be.current,s=n.contextTypes,i=(s=s!=null)?At(e,a):qn),n=new n(r,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ta,e.stateNode=n,n._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),n}function Mo(e,n,r,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,s),n.state!==e&&ta.enqueueReplaceState(n,n.state,null)}function yi(e,n,r,s){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},xl(e);var i=n.contextType;typeof i=="object"&&i!==null?a.context=Xe(i):(i=Ae(n)?rt:be.current,a.context=At(e,i)),a.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(vi(e,n,i,r),a.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(n=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),n!==a.state&&ta.enqueueReplaceState(a,a.state,null),Ps(e,r,a,s),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function $t(e,n){try{var r="",s=n;do r+=vh(s),s=s.return;while(s);var a=r}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:a,digest:null}}function Ia(e,n,r){return{value:e,source:null,stack:r??null,digest:n??null}}function xi(e,n){try{console.error(n.value)}catch(r){setTimeout(function(){throw r})}}var qp=typeof WeakMap=="function"?WeakMap:Map;function Zu(e,n,r){r=yn(-1,r),r.tag=3,r.payload={element:null};var s=n.value;return r.callback=function(){Vs||(Vs=!0,Li=s),xi(e,n)},r}function Ju(e,n,r){r=yn(-1,r),r.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var a=n.value;r.payload=function(){return s(a)},r.callback=function(){xi(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){xi(e,n),typeof s!="function"&&(Fn===null?Fn=new Set([this]):Fn.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),r}function Ao(e,n,r){var s=e.pingCache;if(s===null){s=e.pingCache=new qp;var a=new Set;s.set(n,a)}else a=s.get(n),a===void 0&&(a=new Set,s.set(n,a));a.has(r)||(a.add(r),e=sf.bind(null,e,n,r),n.then(e,e))}function Vo(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Fo(e,n,r,s,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===n?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(n=yn(-1,1),n.tag=2,Vn(r,n,1))),r.lanes|=1),e)}var Up=bn.ReactCurrentOwner,ze=!1;function Le(e,n,r,s){n.child=e===null?Cu(n,null,r,s):Ft(n,e.child,r,s)}function Do(e,n,r,s,a){r=r.render;var i=n.ref;return It(n,a),s=bl(e,n,r,s,i,a),r=Sl(),e!==null&&!ze?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,Nn(e,n,a)):(re&&r&&hl(n),n.flags|=1,Le(e,n,s,a),n.child)}function $o(e,n,r,s,a){if(e===null){var i=r.type;return typeof i=="function"&&!zl(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(n.tag=15,n.type=i,Yu(e,n,i,s,a)):(e=vs(r.type,null,s,n,n.mode,a),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&a)){var l=i.memoizedProps;if(r=r.compare,r=r!==null?r:wr,r(l,s)&&e.ref===n.ref)return Nn(e,n,a)}return n.flags|=1,e=$n(i,s),e.ref=n.ref,e.return=n,n.child=e}function Yu(e,n,r,s,a){if(e!==null){var i=e.memoizedProps;if(wr(i,s)&&e.ref===n.ref)if(ze=!1,n.pendingProps=s=i,(e.lanes&a)!==0)e.flags&131072&&(ze=!0);else return n.lanes=e.lanes,Nn(e,n,a)}return ji(e,n,r,s,a)}function ed(e,n,r){var s=n.pendingProps,a=s.children,i=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(St,De),De|=r;else{if(!(r&1073741824))return e=i!==null?i.baseLanes|r:r,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,ee(St,De),De|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=i!==null?i.baseLanes:r,ee(St,De),De|=s}else i!==null?(s=i.baseLanes|r,n.memoizedState=null):s=r,ee(St,De),De|=s;return Le(e,n,a,r),n.child}function nd(e,n){var r=n.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(n.flags|=512,n.flags|=2097152)}function ji(e,n,r,s,a){var i=Ae(r)?rt:be.current;return i=At(n,i),It(n,a),r=bl(e,n,r,s,i,a),s=Sl(),e!==null&&!ze?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,Nn(e,n,a)):(re&&s&&hl(n),n.flags|=1,Le(e,n,r,a),n.child)}function Ho(e,n,r,s,a){if(Ae(r)){var i=!0;Es(n)}else i=!1;if(It(n,a),n.stateNode===null)fs(e,n),Xu(n,r,s),yi(n,r,s,a),s=!0;else if(e===null){var l=n.stateNode,o=n.memoizedProps;l.props=o;var c=l.context,d=r.contextType;typeof d=="object"&&d!==null?d=Xe(d):(d=Ae(r)?rt:be.current,d=At(n,d));var u=r.getDerivedStateFromProps,h=typeof u=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==s||c!==d)&&Mo(n,l,s,d),Cn=!1;var f=n.memoizedState;l.state=f,Ps(n,s,l,a),c=n.memoizedState,o!==s||f!==c||Me.current||Cn?(typeof u=="function"&&(vi(n,r,u,s),c=n.memoizedState),(o=Cn||zo(n,r,o,s,f,c,d))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=c),l.props=s,l.state=c,l.context=d,s=o):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{l=n.stateNode,Lu(e,n),o=n.memoizedProps,d=n.type===n.elementType?o:en(n.type,o),l.props=d,h=n.pendingProps,f=l.context,c=r.contextType,typeof c=="object"&&c!==null?c=Xe(c):(c=Ae(r)?rt:be.current,c=At(n,c));var N=r.getDerivedStateFromProps;(u=typeof N=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==h||f!==c)&&Mo(n,l,s,c),Cn=!1,f=n.memoizedState,l.state=f,Ps(n,s,l,a);var k=n.memoizedState;o!==h||f!==k||Me.current||Cn?(typeof N=="function"&&(vi(n,r,N,s),k=n.memoizedState),(d=Cn||zo(n,r,d,s,f,k,c)||!1)?(u||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(s,k,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(s,k,c)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=k),l.props=s,l.state=k,l.context=c,s=d):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),s=!1)}return ki(e,n,r,s,i,a)}function ki(e,n,r,s,a,i){nd(e,n);var l=(n.flags&128)!==0;if(!s&&!l)return a&&Co(n,r,!1),Nn(e,n,i);s=n.stateNode,Up.current=n;var o=l&&typeof r.getDerivedStateFromError!="function"?null:s.render();return n.flags|=1,e!==null&&l?(n.child=Ft(n,e.child,null,i),n.child=Ft(n,null,o,i)):Le(e,n,o,i),n.memoizedState=s.state,a&&Co(n,r,!0),n.child}function td(e){var n=e.stateNode;n.pendingContext?To(e,n.pendingContext,n.pendingContext!==n.context):n.context&&To(e,n.context,!1),jl(e,n.containerInfo)}function Bo(e,n,r,s,a){return Vt(),fl(a),n.flags|=256,Le(e,n,r,s),n.child}var Ni={dehydrated:null,treeContext:null,retryLane:0};function wi(e){return{baseLanes:e,cachePool:null,transitions:null}}function rd(e,n,r){var s=n.pendingProps,a=se.current,i=!1,l=(n.flags&128)!==0,o;if((o=l)||(o=e!==null&&e.memoizedState===null?!1:(a&2)!==0),o?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),ee(se,a&1),e===null)return mi(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(l=s.children,e=s.fallback,i?(s=n.mode,i=n.child,l={mode:"hidden",children:l},!(s&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=aa(l,s,0,null),e=tt(e,s,r,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=wi(r),n.memoizedState=Ni,e):El(n,l));if(a=e.memoizedState,a!==null&&(o=a.dehydrated,o!==null))return Kp(e,n,l,s,o,a,r);if(i){i=s.fallback,l=n.mode,a=e.child,o=a.sibling;var c={mode:"hidden",children:s.children};return!(l&1)&&n.child!==a?(s=n.child,s.childLanes=0,s.pendingProps=c,n.deletions=null):(s=$n(a,c),s.subtreeFlags=a.subtreeFlags&14680064),o!==null?i=$n(o,i):(i=tt(i,l,r,null),i.flags|=2),i.return=n,s.return=n,s.sibling=i,n.child=s,s=i,i=n.child,l=e.child.memoizedState,l=l===null?wi(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~r,n.memoizedState=Ni,s}return i=e.child,e=i.sibling,s=$n(i,{mode:"visible",children:s.children}),!(n.mode&1)&&(s.lanes=r),s.return=n,s.sibling=null,e!==null&&(r=n.deletions,r===null?(n.deletions=[e],n.flags|=16):r.push(e)),n.child=s,n.memoizedState=null,s}function El(e,n){return n=aa({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function ts(e,n,r,s){return s!==null&&fl(s),Ft(n,e.child,null,r),e=El(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Kp(e,n,r,s,a,i,l){if(r)return n.flags&256?(n.flags&=-257,s=Ia(Error(F(422))),ts(e,n,l,s)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=s.fallback,a=n.mode,s=aa({mode:"visible",children:s.children},a,0,null),i=tt(i,a,l,null),i.flags|=2,s.return=n,i.return=n,s.sibling=i,n.child=s,n.mode&1&&Ft(n,e.child,null,l),n.child.memoizedState=wi(l),n.memoizedState=Ni,i);if(!(n.mode&1))return ts(e,n,l,null);if(a.data==="$!"){if(s=a.nextSibling&&a.nextSibling.dataset,s)var o=s.dgst;return s=o,i=Error(F(419)),s=Ia(i,s,void 0),ts(e,n,l,s)}if(o=(l&e.childLanes)!==0,ze||o){if(s=ge,s!==null){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(s.suspendedLanes|l)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,kn(e,a),sn(s,e,a,-1))}return Il(),s=Ia(Error(F(421))),ts(e,n,l,s)}return a.data==="$?"?(n.flags|=128,n.child=e.child,n=af.bind(null,e),a._reactRetry=n,null):(e=i.treeContext,$e=An(a.nextSibling),He=n,re=!0,tn=null,e!==null&&(Ke[We++]=gn,Ke[We++]=vn,Ke[We++]=st,gn=e.id,vn=e.overflow,st=n),n=El(n,s.children),n.flags|=4096,n)}function qo(e,n,r){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),gi(e.return,n,r)}function za(e,n,r,s,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:r,tailMode:a}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=s,i.tail=r,i.tailMode=a)}function sd(e,n,r){var s=n.pendingProps,a=s.revealOrder,i=s.tail;if(Le(e,n,s.children,r),s=se.current,s&2)s=s&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qo(e,r,n);else if(e.tag===19)qo(e,r,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(ee(se,s),!(n.mode&1))n.memoizedState=null;else switch(a){case"forwards":for(r=n.child,a=null;r!==null;)e=r.alternate,e!==null&&Is(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=n.child,n.child=null):(a=r.sibling,r.sibling=null),za(n,!1,a,r,i);break;case"backwards":for(r=null,a=n.child,n.child=null;a!==null;){if(e=a.alternate,e!==null&&Is(e)===null){n.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}za(n,!0,r,null,i);break;case"together":za(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function fs(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Nn(e,n,r){if(e!==null&&(n.dependencies=e.dependencies),it|=n.lanes,!(r&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(F(153));if(n.child!==null){for(e=n.child,r=$n(e,e.pendingProps),n.child=r,r.return=n;e.sibling!==null;)e=e.sibling,r=r.sibling=$n(e,e.pendingProps),r.return=n;r.sibling=null}return n.child}function Wp(e,n,r){switch(n.tag){case 3:td(n),Vt();break;case 5:Ru(n);break;case 1:Ae(n.type)&&Es(n);break;case 4:jl(n,n.stateNode.containerInfo);break;case 10:var s=n.type._context,a=n.memoizedProps.value;ee(Os,s._currentValue),s._currentValue=a;break;case 13:if(s=n.memoizedState,s!==null)return s.dehydrated!==null?(ee(se,se.current&1),n.flags|=128,null):r&n.child.childLanes?rd(e,n,r):(ee(se,se.current&1),e=Nn(e,n,r),e!==null?e.sibling:null);ee(se,se.current&1);break;case 19:if(s=(r&n.childLanes)!==0,e.flags&128){if(s)return sd(e,n,r);n.flags|=128}if(a=n.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),ee(se,se.current),s)break;return null;case 22:case 23:return n.lanes=0,ed(e,n,r)}return Nn(e,n,r)}var ad,bi,id,ld;ad=function(e,n){for(var r=n.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};bi=function(){};id=function(e,n,r,s){var a=e.memoizedProps;if(a!==s){e=n.stateNode,Jn(dn.current);var i=null;switch(r){case"input":a=Ka(e,a),s=Ka(e,s),i=[];break;case"select":a=ie({},a,{value:void 0}),s=ie({},s,{value:void 0}),i=[];break;case"textarea":a=Ga(e,a),s=Ga(e,s),i=[];break;default:typeof a.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Ts)}Za(r,s);var l;r=null;for(d in a)if(!s.hasOwnProperty(d)&&a.hasOwnProperty(d)&&a[d]!=null)if(d==="style"){var o=a[d];for(l in o)o.hasOwnProperty(l)&&(r||(r={}),r[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(gr.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in s){var c=s[d];if(o=a!=null?a[d]:void 0,s.hasOwnProperty(d)&&c!==o&&(c!=null||o!=null))if(d==="style")if(o){for(l in o)!o.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(r||(r={}),r[l]="");for(l in c)c.hasOwnProperty(l)&&o[l]!==c[l]&&(r||(r={}),r[l]=c[l])}else r||(i||(i=[]),i.push(d,r)),r=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(i=i||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(gr.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&ne("scroll",e),i||o===c||(i=[])):(i=i||[]).push(d,c))}r&&(i=i||[]).push("style",r);var d=i;(n.updateQueue=d)&&(n.flags|=4)}};ld=function(e,n,r,s){r!==s&&(n.flags|=4)};function er(e,n){if(!re)switch(e.tailMode){case"hidden":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Ne(e){var n=e.alternate!==null&&e.alternate.child===e.child,r=0,s=0;if(n)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,s|=a.subtreeFlags&14680064,s|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,s|=a.subtreeFlags,s|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=s,e.childLanes=r,n}function Qp(e,n,r){var s=n.pendingProps;switch(pl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(n),null;case 1:return Ae(n.type)&&Cs(),Ne(n),null;case 3:return s=n.stateNode,Dt(),te(Me),te(be),Nl(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(es(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,tn!==null&&(_i(tn),tn=null))),bi(e,n),Ne(n),null;case 5:kl(n);var a=Jn(Er.current);if(r=n.type,e!==null&&n.stateNode!=null)id(e,n,r,s,a),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!s){if(n.stateNode===null)throw Error(F(166));return Ne(n),null}if(e=Jn(dn.current),es(n)){s=n.stateNode,r=n.type;var i=n.memoizedProps;switch(s[cn]=n,s[Tr]=i,e=(n.mode&1)!==0,r){case"dialog":ne("cancel",s),ne("close",s);break;case"iframe":case"object":case"embed":ne("load",s);break;case"video":case"audio":for(a=0;a<ar.length;a++)ne(ar[a],s);break;case"source":ne("error",s);break;case"img":case"image":case"link":ne("error",s),ne("load",s);break;case"details":ne("toggle",s);break;case"input":Jl(s,i),ne("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!i.multiple},ne("invalid",s);break;case"textarea":eo(s,i),ne("invalid",s)}Za(r,i),a=null;for(var l in i)if(i.hasOwnProperty(l)){var o=i[l];l==="children"?typeof o=="string"?s.textContent!==o&&(i.suppressHydrationWarning!==!0&&Yr(s.textContent,o,e),a=["children",o]):typeof o=="number"&&s.textContent!==""+o&&(i.suppressHydrationWarning!==!0&&Yr(s.textContent,o,e),a=["children",""+o]):gr.hasOwnProperty(l)&&o!=null&&l==="onScroll"&&ne("scroll",s)}switch(r){case"input":Ur(s),Yl(s,i,!0);break;case"textarea":Ur(s),no(s);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(s.onclick=Ts)}s=a,n.updateQueue=s,s!==null&&(n.flags|=4)}else{l=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=zc(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=l.createElement(r,{is:s.is}):(e=l.createElement(r),r==="select"&&(l=e,s.multiple?l.multiple=!0:s.size&&(l.size=s.size))):e=l.createElementNS(e,r),e[cn]=n,e[Tr]=s,ad(e,n,!1,!1),n.stateNode=e;e:{switch(l=Ja(r,s),r){case"dialog":ne("cancel",e),ne("close",e),a=s;break;case"iframe":case"object":case"embed":ne("load",e),a=s;break;case"video":case"audio":for(a=0;a<ar.length;a++)ne(ar[a],e);a=s;break;case"source":ne("error",e),a=s;break;case"img":case"image":case"link":ne("error",e),ne("load",e),a=s;break;case"details":ne("toggle",e),a=s;break;case"input":Jl(e,s),a=Ka(e,s),ne("invalid",e);break;case"option":a=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},a=ie({},s,{value:void 0}),ne("invalid",e);break;case"textarea":eo(e,s),a=Ga(e,s),ne("invalid",e);break;default:a=s}Za(r,a),o=a;for(i in o)if(o.hasOwnProperty(i)){var c=o[i];i==="style"?Vc(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Mc(e,c)):i==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&vr(e,c):typeof c=="number"&&vr(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(gr.hasOwnProperty(i)?c!=null&&i==="onScroll"&&ne("scroll",e):c!=null&&Ji(e,i,c,l))}switch(r){case"input":Ur(e),Yl(e,s,!1);break;case"textarea":Ur(e),no(e);break;case"option":s.value!=null&&e.setAttribute("value",""+Bn(s.value));break;case"select":e.multiple=!!s.multiple,i=s.value,i!=null?Rt(e,!!s.multiple,i,!1):s.defaultValue!=null&&Rt(e,!!s.multiple,s.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Ts)}switch(r){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Ne(n),null;case 6:if(e&&n.stateNode!=null)ld(e,n,e.memoizedProps,s);else{if(typeof s!="string"&&n.stateNode===null)throw Error(F(166));if(r=Jn(Er.current),Jn(dn.current),es(n)){if(s=n.stateNode,r=n.memoizedProps,s[cn]=n,(i=s.nodeValue!==r)&&(e=He,e!==null))switch(e.tag){case 3:Yr(s.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Yr(s.nodeValue,r,(e.mode&1)!==0)}i&&(n.flags|=4)}else s=(r.nodeType===9?r:r.ownerDocument).createTextNode(s),s[cn]=n,n.stateNode=s}return Ne(n),null;case 13:if(te(se),s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(re&&$e!==null&&n.mode&1&&!(n.flags&128))Su(),Vt(),n.flags|=98560,i=!1;else if(i=es(n),s!==null&&s.dehydrated!==null){if(e===null){if(!i)throw Error(F(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(F(317));i[cn]=n}else Vt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Ne(n),i=!1}else tn!==null&&(_i(tn),tn=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=r,n):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(n.child.flags|=8192,n.mode&1&&(e===null||se.current&1?fe===0&&(fe=3):Il())),n.updateQueue!==null&&(n.flags|=4),Ne(n),null);case 4:return Dt(),bi(e,n),e===null&&br(n.stateNode.containerInfo),Ne(n),null;case 10:return vl(n.type._context),Ne(n),null;case 17:return Ae(n.type)&&Cs(),Ne(n),null;case 19:if(te(se),i=n.memoizedState,i===null)return Ne(n),null;if(s=(n.flags&128)!==0,l=i.rendering,l===null)if(s)er(i,!1);else{if(fe!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(l=Is(e),l!==null){for(n.flags|=128,er(i,!1),s=l.updateQueue,s!==null&&(n.updateQueue=s,n.flags|=4),n.subtreeFlags=0,s=r,r=n.child;r!==null;)i=r,e=s,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return ee(se,se.current&1|2),n.child}e=e.sibling}i.tail!==null&&ue()>Ht&&(n.flags|=128,s=!0,er(i,!1),n.lanes=4194304)}else{if(!s)if(e=Is(l),e!==null){if(n.flags|=128,s=!0,r=e.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),er(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!re)return Ne(n),null}else 2*ue()-i.renderingStartTime>Ht&&r!==1073741824&&(n.flags|=128,s=!0,er(i,!1),n.lanes=4194304);i.isBackwards?(l.sibling=n.child,n.child=l):(r=i.last,r!==null?r.sibling=l:n.child=l,i.last=l)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=ue(),n.sibling=null,r=se.current,ee(se,s?r&1|2:r&1),n):(Ne(n),null);case 22:case 23:return Pl(),s=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(n.flags|=8192),s&&n.mode&1?De&1073741824&&(Ne(n),n.subtreeFlags&6&&(n.flags|=8192)):Ne(n),null;case 24:return null;case 25:return null}throw Error(F(156,n.tag))}function Gp(e,n){switch(pl(n),n.tag){case 1:return Ae(n.type)&&Cs(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Dt(),te(Me),te(be),Nl(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return kl(n),null;case 13:if(te(se),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(F(340));Vt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return te(se),null;case 4:return Dt(),null;case 10:return vl(n.type._context),null;case 22:case 23:return Pl(),null;case 24:return null;default:return null}}var rs=!1,we=!1,Xp=typeof WeakSet=="function"?WeakSet:Set,H=null;function bt(e,n){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(s){le(e,n,s)}else r.current=null}function Si(e,n,r){try{r()}catch(s){le(e,n,s)}}var Uo=!1;function Zp(e,n){if(oi=ws,e=hu(),dl(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var s=r.getSelection&&r.getSelection();if(s&&s.rangeCount!==0){r=s.anchorNode;var a=s.anchorOffset,i=s.focusNode;s=s.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var l=0,o=-1,c=-1,d=0,u=0,h=e,f=null;n:for(;;){for(var N;h!==r||a!==0&&h.nodeType!==3||(o=l+a),h!==i||s!==0&&h.nodeType!==3||(c=l+s),h.nodeType===3&&(l+=h.nodeValue.length),(N=h.firstChild)!==null;)f=h,h=N;for(;;){if(h===e)break n;if(f===r&&++d===a&&(o=l),f===i&&++u===s&&(c=l),(N=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=N}r=o===-1||c===-1?null:{start:o,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(ci={focusedElem:e,selectionRange:r},ws=!1,H=n;H!==null;)if(n=H,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,H=e;else for(;H!==null;){n=H;try{var k=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var j=k.memoizedProps,y=k.memoizedState,p=n.stateNode,m=p.getSnapshotBeforeUpdate(n.elementType===n.type?j:en(n.type,j),y);p.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=n.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(C){le(n,n.return,C)}if(e=n.sibling,e!==null){e.return=n.return,H=e;break}H=n.return}return k=Uo,Uo=!1,k}function hr(e,n,r){var s=n.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&Si(n,r,i)}a=a.next}while(a!==s)}}function ra(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do{if((r.tag&e)===e){var s=r.create;r.destroy=s()}r=r.next}while(r!==n)}}function Ti(e){var n=e.ref;if(n!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof n=="function"?n(e):n.current=e}}function od(e){var n=e.alternate;n!==null&&(e.alternate=null,od(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[cn],delete n[Tr],delete n[hi],delete n[Pp],delete n[Ip])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function cd(e){return e.tag===5||e.tag===3||e.tag===4}function Ko(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ci(e,n,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?r.nodeType===8?r.parentNode.insertBefore(e,n):r.insertBefore(e,n):(r.nodeType===8?(n=r.parentNode,n.insertBefore(e,r)):(n=r,n.appendChild(e)),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=Ts));else if(s!==4&&(e=e.child,e!==null))for(Ci(e,n,r),e=e.sibling;e!==null;)Ci(e,n,r),e=e.sibling}function Ei(e,n,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?r.insertBefore(e,n):r.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(Ei(e,n,r),e=e.sibling;e!==null;)Ei(e,n,r),e=e.sibling}var ye=null,nn=!1;function Sn(e,n,r){for(r=r.child;r!==null;)ud(e,n,r),r=r.sibling}function ud(e,n,r){if(un&&typeof un.onCommitFiberUnmount=="function")try{un.onCommitFiberUnmount(Gs,r)}catch{}switch(r.tag){case 5:we||bt(r,n);case 6:var s=ye,a=nn;ye=null,Sn(e,n,r),ye=s,nn=a,ye!==null&&(nn?(e=ye,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):ye.removeChild(r.stateNode));break;case 18:ye!==null&&(nn?(e=ye,r=r.stateNode,e.nodeType===8?Ea(e.parentNode,r):e.nodeType===1&&Ea(e,r),kr(e)):Ea(ye,r.stateNode));break;case 4:s=ye,a=nn,ye=r.stateNode.containerInfo,nn=!0,Sn(e,n,r),ye=s,nn=a;break;case 0:case 11:case 14:case 15:if(!we&&(s=r.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){a=s=s.next;do{var i=a,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Si(r,n,l),a=a.next}while(a!==s)}Sn(e,n,r);break;case 1:if(!we&&(bt(r,n),s=r.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=r.memoizedProps,s.state=r.memoizedState,s.componentWillUnmount()}catch(o){le(r,n,o)}Sn(e,n,r);break;case 21:Sn(e,n,r);break;case 22:r.mode&1?(we=(s=we)||r.memoizedState!==null,Sn(e,n,r),we=s):Sn(e,n,r);break;default:Sn(e,n,r)}}function Wo(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Xp),n.forEach(function(s){var a=lf.bind(null,e,s);r.has(s)||(r.add(s),s.then(a,a))})}}function Ye(e,n){var r=n.deletions;if(r!==null)for(var s=0;s<r.length;s++){var a=r[s];try{var i=e,l=n,o=l;e:for(;o!==null;){switch(o.tag){case 5:ye=o.stateNode,nn=!1;break e;case 3:ye=o.stateNode.containerInfo,nn=!0;break e;case 4:ye=o.stateNode.containerInfo,nn=!0;break e}o=o.return}if(ye===null)throw Error(F(160));ud(i,l,a),ye=null,nn=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(d){le(a,n,d)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)dd(n,e),n=n.sibling}function dd(e,n){var r=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ye(n,e),ln(e),s&4){try{hr(3,e,e.return),ra(3,e)}catch(j){le(e,e.return,j)}try{hr(5,e,e.return)}catch(j){le(e,e.return,j)}}break;case 1:Ye(n,e),ln(e),s&512&&r!==null&&bt(r,r.return);break;case 5:if(Ye(n,e),ln(e),s&512&&r!==null&&bt(r,r.return),e.flags&32){var a=e.stateNode;try{vr(a,"")}catch(j){le(e,e.return,j)}}if(s&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,l=r!==null?r.memoizedProps:i,o=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{o==="input"&&i.type==="radio"&&i.name!=null&&Pc(a,i),Ja(o,l);var d=Ja(o,i);for(l=0;l<c.length;l+=2){var u=c[l],h=c[l+1];u==="style"?Vc(a,h):u==="dangerouslySetInnerHTML"?Mc(a,h):u==="children"?vr(a,h):Ji(a,u,h,d)}switch(o){case"input":Wa(a,i);break;case"textarea":Ic(a,i);break;case"select":var f=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var N=i.value;N!=null?Rt(a,!!i.multiple,N,!1):f!==!!i.multiple&&(i.defaultValue!=null?Rt(a,!!i.multiple,i.defaultValue,!0):Rt(a,!!i.multiple,i.multiple?[]:"",!1))}a[Tr]=i}catch(j){le(e,e.return,j)}}break;case 6:if(Ye(n,e),ln(e),s&4){if(e.stateNode===null)throw Error(F(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(j){le(e,e.return,j)}}break;case 3:if(Ye(n,e),ln(e),s&4&&r!==null&&r.memoizedState.isDehydrated)try{kr(n.containerInfo)}catch(j){le(e,e.return,j)}break;case 4:Ye(n,e),ln(e);break;case 13:Ye(n,e),ln(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(Ol=ue())),s&4&&Wo(e);break;case 22:if(u=r!==null&&r.memoizedState!==null,e.mode&1?(we=(d=we)||u,Ye(n,e),we=d):Ye(n,e),ln(e),s&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!u&&e.mode&1)for(H=e,u=e.child;u!==null;){for(h=H=u;H!==null;){switch(f=H,N=f.child,f.tag){case 0:case 11:case 14:case 15:hr(4,f,f.return);break;case 1:bt(f,f.return);var k=f.stateNode;if(typeof k.componentWillUnmount=="function"){s=f,r=f.return;try{n=s,k.props=n.memoizedProps,k.state=n.memoizedState,k.componentWillUnmount()}catch(j){le(s,r,j)}}break;case 5:bt(f,f.return);break;case 22:if(f.memoizedState!==null){Go(h);continue}}N!==null?(N.return=f,H=N):Go(h)}u=u.sibling}e:for(u=null,h=e;;){if(h.tag===5){if(u===null){u=h;try{a=h.stateNode,d?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(o=h.stateNode,c=h.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=Ac("display",l))}catch(j){le(e,e.return,j)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(j){le(e,e.return,j)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ye(n,e),ln(e),s&4&&Wo(e);break;case 21:break;default:Ye(n,e),ln(e)}}function ln(e){var n=e.flags;if(n&2){try{e:{for(var r=e.return;r!==null;){if(cd(r)){var s=r;break e}r=r.return}throw Error(F(160))}switch(s.tag){case 5:var a=s.stateNode;s.flags&32&&(vr(a,""),s.flags&=-33);var i=Ko(e);Ei(e,i,a);break;case 3:case 4:var l=s.stateNode.containerInfo,o=Ko(e);Ci(e,o,l);break;default:throw Error(F(161))}}catch(c){le(e,e.return,c)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Jp(e,n,r){H=e,hd(e)}function hd(e,n,r){for(var s=(e.mode&1)!==0;H!==null;){var a=H,i=a.child;if(a.tag===22&&s){var l=a.memoizedState!==null||rs;if(!l){var o=a.alternate,c=o!==null&&o.memoizedState!==null||we;o=rs;var d=we;if(rs=l,(we=c)&&!d)for(H=a;H!==null;)l=H,c=l.child,l.tag===22&&l.memoizedState!==null?Xo(a):c!==null?(c.return=l,H=c):Xo(a);for(;i!==null;)H=i,hd(i),i=i.sibling;H=a,rs=o,we=d}Qo(e)}else a.subtreeFlags&8772&&i!==null?(i.return=a,H=i):Qo(e)}}function Qo(e){for(;H!==null;){var n=H;if(n.flags&8772){var r=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:we||ra(5,n);break;case 1:var s=n.stateNode;if(n.flags&4&&!we)if(r===null)s.componentDidMount();else{var a=n.elementType===n.type?r.memoizedProps:en(n.type,r.memoizedProps);s.componentDidUpdate(a,r.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&_o(n,i,s);break;case 3:var l=n.updateQueue;if(l!==null){if(r=null,n.child!==null)switch(n.child.tag){case 5:r=n.child.stateNode;break;case 1:r=n.child.stateNode}_o(n,l,r)}break;case 5:var o=n.stateNode;if(r===null&&n.flags&4){r=o;var c=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var d=n.alternate;if(d!==null){var u=d.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&kr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}we||n.flags&512&&Ti(n)}catch(f){le(n,n.return,f)}}if(n===e){H=null;break}if(r=n.sibling,r!==null){r.return=n.return,H=r;break}H=n.return}}function Go(e){for(;H!==null;){var n=H;if(n===e){H=null;break}var r=n.sibling;if(r!==null){r.return=n.return,H=r;break}H=n.return}}function Xo(e){for(;H!==null;){var n=H;try{switch(n.tag){case 0:case 11:case 15:var r=n.return;try{ra(4,n)}catch(c){le(n,r,c)}break;case 1:var s=n.stateNode;if(typeof s.componentDidMount=="function"){var a=n.return;try{s.componentDidMount()}catch(c){le(n,a,c)}}var i=n.return;try{Ti(n)}catch(c){le(n,i,c)}break;case 5:var l=n.return;try{Ti(n)}catch(c){le(n,l,c)}}}catch(c){le(n,n.return,c)}if(n===e){H=null;break}var o=n.sibling;if(o!==null){o.return=n.return,H=o;break}H=n.return}}var Yp=Math.ceil,As=bn.ReactCurrentDispatcher,Ll=bn.ReactCurrentOwner,Ge=bn.ReactCurrentBatchConfig,X=0,ge=null,de=null,xe=0,De=0,St=Kn(0),fe=0,_r=null,it=0,sa=0,Rl=0,pr=null,Ie=null,Ol=0,Ht=1/0,fn=null,Vs=!1,Li=null,Fn=null,ss=!1,On=null,Fs=0,fr=0,Ri=null,ms=-1,gs=0;function Re(){return X&6?ue():ms!==-1?ms:ms=ue()}function Dn(e){return e.mode&1?X&2&&xe!==0?xe&-xe:Mp.transition!==null?(gs===0&&(gs=Xc()),gs):(e=J,e!==0||(e=window.event,e=e===void 0?16:ru(e.type)),e):1}function sn(e,n,r,s){if(50<fr)throw fr=0,Ri=null,Error(F(185));Mr(e,r,s),(!(X&2)||e!==ge)&&(e===ge&&(!(X&2)&&(sa|=r),fe===4&&Ln(e,xe)),Ve(e,s),r===1&&X===0&&!(n.mode&1)&&(Ht=ue()+500,ea&&Wn()))}function Ve(e,n){var r=e.callbackNode;Mh(e,n);var s=Ns(e,e===ge?xe:0);if(s===0)r!==null&&so(r),e.callbackNode=null,e.callbackPriority=0;else if(n=s&-s,e.callbackPriority!==n){if(r!=null&&so(r),n===1)e.tag===0?zp(Zo.bind(null,e)):Nu(Zo.bind(null,e)),Op(function(){!(X&6)&&Wn()}),r=null;else{switch(Zc(s)){case 1:r=rl;break;case 4:r=Qc;break;case 16:r=ks;break;case 536870912:r=Gc;break;default:r=ks}r=jd(r,pd.bind(null,e))}e.callbackPriority=n,e.callbackNode=r}}function pd(e,n){if(ms=-1,gs=0,X&6)throw Error(F(327));var r=e.callbackNode;if(zt()&&e.callbackNode!==r)return null;var s=Ns(e,e===ge?xe:0);if(s===0)return null;if(s&30||s&e.expiredLanes||n)n=Ds(e,s);else{n=s;var a=X;X|=2;var i=md();(ge!==e||xe!==n)&&(fn=null,Ht=ue()+500,nt(e,n));do try{tf();break}catch(o){fd(e,o)}while(!0);gl(),As.current=i,X=a,de!==null?n=0:(ge=null,xe=0,n=fe)}if(n!==0){if(n===2&&(a=ri(e),a!==0&&(s=a,n=Oi(e,a))),n===1)throw r=_r,nt(e,0),Ln(e,s),Ve(e,ue()),r;if(n===6)Ln(e,s);else{if(a=e.current.alternate,!(s&30)&&!ef(a)&&(n=Ds(e,s),n===2&&(i=ri(e),i!==0&&(s=i,n=Oi(e,i))),n===1))throw r=_r,nt(e,0),Ln(e,s),Ve(e,ue()),r;switch(e.finishedWork=a,e.finishedLanes=s,n){case 0:case 1:throw Error(F(345));case 2:Gn(e,Ie,fn);break;case 3:if(Ln(e,s),(s&130023424)===s&&(n=Ol+500-ue(),10<n)){if(Ns(e,0)!==0)break;if(a=e.suspendedLanes,(a&s)!==s){Re(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=di(Gn.bind(null,e,Ie,fn),n);break}Gn(e,Ie,fn);break;case 4:if(Ln(e,s),(s&4194240)===s)break;for(n=e.eventTimes,a=-1;0<s;){var l=31-rn(s);i=1<<l,l=n[l],l>a&&(a=l),s&=~i}if(s=a,s=ue()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*Yp(s/1960))-s,10<s){e.timeoutHandle=di(Gn.bind(null,e,Ie,fn),s);break}Gn(e,Ie,fn);break;case 5:Gn(e,Ie,fn);break;default:throw Error(F(329))}}}return Ve(e,ue()),e.callbackNode===r?pd.bind(null,e):null}function Oi(e,n){var r=pr;return e.current.memoizedState.isDehydrated&&(nt(e,n).flags|=256),e=Ds(e,n),e!==2&&(n=Ie,Ie=r,n!==null&&_i(n)),e}function _i(e){Ie===null?Ie=e:Ie.push.apply(Ie,e)}function ef(e){for(var n=e;;){if(n.flags&16384){var r=n.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var s=0;s<r.length;s++){var a=r[s],i=a.getSnapshot;a=a.value;try{if(!an(i(),a))return!1}catch{return!1}}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ln(e,n){for(n&=~Rl,n&=~sa,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var r=31-rn(n),s=1<<r;e[r]=-1,n&=~s}}function Zo(e){if(X&6)throw Error(F(327));zt();var n=Ns(e,0);if(!(n&1))return Ve(e,ue()),null;var r=Ds(e,n);if(e.tag!==0&&r===2){var s=ri(e);s!==0&&(n=s,r=Oi(e,s))}if(r===1)throw r=_r,nt(e,0),Ln(e,n),Ve(e,ue()),r;if(r===6)throw Error(F(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Gn(e,Ie,fn),Ve(e,ue()),null}function _l(e,n){var r=X;X|=1;try{return e(n)}finally{X=r,X===0&&(Ht=ue()+500,ea&&Wn())}}function lt(e){On!==null&&On.tag===0&&!(X&6)&&zt();var n=X;X|=1;var r=Ge.transition,s=J;try{if(Ge.transition=null,J=1,e)return e()}finally{J=s,Ge.transition=r,X=n,!(X&6)&&Wn()}}function Pl(){De=St.current,te(St)}function nt(e,n){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Rp(r)),de!==null)for(r=de.return;r!==null;){var s=r;switch(pl(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Cs();break;case 3:Dt(),te(Me),te(be),Nl();break;case 5:kl(s);break;case 4:Dt();break;case 13:te(se);break;case 19:te(se);break;case 10:vl(s.type._context);break;case 22:case 23:Pl()}r=r.return}if(ge=e,de=e=$n(e.current,null),xe=De=n,fe=0,_r=null,Rl=sa=it=0,Ie=pr=null,Zn!==null){for(n=0;n<Zn.length;n++)if(r=Zn[n],s=r.interleaved,s!==null){r.interleaved=null;var a=s.next,i=r.pending;if(i!==null){var l=i.next;i.next=a,s.next=l}r.pending=s}Zn=null}return e}function fd(e,n){do{var r=de;try{if(gl(),hs.current=Ms,zs){for(var s=ae.memoizedState;s!==null;){var a=s.queue;a!==null&&(a.pending=null),s=s.next}zs=!1}if(at=0,me=pe=ae=null,dr=!1,Lr=0,Ll.current=null,r===null||r.return===null){fe=1,_r=n,de=null;break}e:{var i=e,l=r.return,o=r,c=n;if(n=xe,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,u=o,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var N=Vo(l);if(N!==null){N.flags&=-257,Fo(N,l,o,i,n),N.mode&1&&Ao(i,d,n),n=N,c=d;var k=n.updateQueue;if(k===null){var j=new Set;j.add(c),n.updateQueue=j}else k.add(c);break e}else{if(!(n&1)){Ao(i,d,n),Il();break e}c=Error(F(426))}}else if(re&&o.mode&1){var y=Vo(l);if(y!==null){!(y.flags&65536)&&(y.flags|=256),Fo(y,l,o,i,n),fl($t(c,o));break e}}i=c=$t(c,o),fe!==4&&(fe=2),pr===null?pr=[i]:pr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var p=Zu(i,c,n);Oo(i,p);break e;case 1:o=c;var m=i.type,v=i.stateNode;if(!(i.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Fn===null||!Fn.has(v)))){i.flags|=65536,n&=-n,i.lanes|=n;var C=Ju(i,o,n);Oo(i,C);break e}}i=i.return}while(i!==null)}vd(r)}catch(S){n=S,de===r&&r!==null&&(de=r=r.return);continue}break}while(!0)}function md(){var e=As.current;return As.current=Ms,e===null?Ms:e}function Il(){(fe===0||fe===3||fe===2)&&(fe=4),ge===null||!(it&268435455)&&!(sa&268435455)||Ln(ge,xe)}function Ds(e,n){var r=X;X|=2;var s=md();(ge!==e||xe!==n)&&(fn=null,nt(e,n));do try{nf();break}catch(a){fd(e,a)}while(!0);if(gl(),X=r,As.current=s,de!==null)throw Error(F(261));return ge=null,xe=0,fe}function nf(){for(;de!==null;)gd(de)}function tf(){for(;de!==null&&!Ch();)gd(de)}function gd(e){var n=xd(e.alternate,e,De);e.memoizedProps=e.pendingProps,n===null?vd(e):de=n,Ll.current=null}function vd(e){var n=e;do{var r=n.alternate;if(e=n.return,n.flags&32768){if(r=Gp(r,n),r!==null){r.flags&=32767,de=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{fe=6,de=null;return}}else if(r=Qp(r,n,De),r!==null){de=r;return}if(n=n.sibling,n!==null){de=n;return}de=n=e}while(n!==null);fe===0&&(fe=5)}function Gn(e,n,r){var s=J,a=Ge.transition;try{Ge.transition=null,J=1,rf(e,n,r,s)}finally{Ge.transition=a,J=s}return null}function rf(e,n,r,s){do zt();while(On!==null);if(X&6)throw Error(F(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(F(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(Ah(e,i),e===ge&&(de=ge=null,xe=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||ss||(ss=!0,jd(ks,function(){return zt(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=Ge.transition,Ge.transition=null;var l=J;J=1;var o=X;X|=4,Ll.current=null,Zp(e,r),dd(r,e),wp(ci),ws=!!oi,ci=oi=null,e.current=r,Jp(r),Eh(),X=o,J=l,Ge.transition=i}else e.current=r;if(ss&&(ss=!1,On=e,Fs=a),i=e.pendingLanes,i===0&&(Fn=null),Oh(r.stateNode),Ve(e,ue()),n!==null)for(s=e.onRecoverableError,r=0;r<n.length;r++)a=n[r],s(a.value,{componentStack:a.stack,digest:a.digest});if(Vs)throw Vs=!1,e=Li,Li=null,e;return Fs&1&&e.tag!==0&&zt(),i=e.pendingLanes,i&1?e===Ri?fr++:(fr=0,Ri=e):fr=0,Wn(),null}function zt(){if(On!==null){var e=Zc(Fs),n=Ge.transition,r=J;try{if(Ge.transition=null,J=16>e?16:e,On===null)var s=!1;else{if(e=On,On=null,Fs=0,X&6)throw Error(F(331));var a=X;for(X|=4,H=e.current;H!==null;){var i=H,l=i.child;if(H.flags&16){var o=i.deletions;if(o!==null){for(var c=0;c<o.length;c++){var d=o[c];for(H=d;H!==null;){var u=H;switch(u.tag){case 0:case 11:case 15:hr(8,u,i)}var h=u.child;if(h!==null)h.return=u,H=h;else for(;H!==null;){u=H;var f=u.sibling,N=u.return;if(od(u),u===d){H=null;break}if(f!==null){f.return=N,H=f;break}H=N}}}var k=i.alternate;if(k!==null){var j=k.child;if(j!==null){k.child=null;do{var y=j.sibling;j.sibling=null,j=y}while(j!==null)}}H=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,H=l;else e:for(;H!==null;){if(i=H,i.flags&2048)switch(i.tag){case 0:case 11:case 15:hr(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,H=p;break e}H=i.return}}var m=e.current;for(H=m;H!==null;){l=H;var v=l.child;if(l.subtreeFlags&2064&&v!==null)v.return=l,H=v;else e:for(l=m;H!==null;){if(o=H,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:ra(9,o)}}catch(S){le(o,o.return,S)}if(o===l){H=null;break e}var C=o.sibling;if(C!==null){C.return=o.return,H=C;break e}H=o.return}}if(X=a,Wn(),un&&typeof un.onPostCommitFiberRoot=="function")try{un.onPostCommitFiberRoot(Gs,e)}catch{}s=!0}return s}finally{J=r,Ge.transition=n}}return!1}function Jo(e,n,r){n=$t(r,n),n=Zu(e,n,1),e=Vn(e,n,1),n=Re(),e!==null&&(Mr(e,1,n),Ve(e,n))}function le(e,n,r){if(e.tag===3)Jo(e,e,r);else for(;n!==null;){if(n.tag===3){Jo(n,e,r);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Fn===null||!Fn.has(s))){e=$t(r,e),e=Ju(n,e,1),n=Vn(n,e,1),e=Re(),n!==null&&(Mr(n,1,e),Ve(n,e));break}}n=n.return}}function sf(e,n,r){var s=e.pingCache;s!==null&&s.delete(n),n=Re(),e.pingedLanes|=e.suspendedLanes&r,ge===e&&(xe&r)===r&&(fe===4||fe===3&&(xe&130023424)===xe&&500>ue()-Ol?nt(e,0):Rl|=r),Ve(e,n)}function yd(e,n){n===0&&(e.mode&1?(n=Qr,Qr<<=1,!(Qr&130023424)&&(Qr=4194304)):n=1);var r=Re();e=kn(e,n),e!==null&&(Mr(e,n,r),Ve(e,r))}function af(e){var n=e.memoizedState,r=0;n!==null&&(r=n.retryLane),yd(e,r)}function lf(e,n){var r=0;switch(e.tag){case 13:var s=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(F(314))}s!==null&&s.delete(n),yd(e,r)}var xd;xd=function(e,n,r){if(e!==null)if(e.memoizedProps!==n.pendingProps||Me.current)ze=!0;else{if(!(e.lanes&r)&&!(n.flags&128))return ze=!1,Wp(e,n,r);ze=!!(e.flags&131072)}else ze=!1,re&&n.flags&1048576&&wu(n,Rs,n.index);switch(n.lanes=0,n.tag){case 2:var s=n.type;fs(e,n),e=n.pendingProps;var a=At(n,be.current);It(n,r),a=bl(null,n,s,e,a,r);var i=Sl();return n.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ae(s)?(i=!0,Es(n)):i=!1,n.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,xl(n),a.updater=ta,n.stateNode=a,a._reactInternals=n,yi(n,s,e,r),n=ki(null,n,s,!0,i,r)):(n.tag=0,re&&i&&hl(n),Le(null,n,a,r),n=n.child),n;case 16:s=n.elementType;e:{switch(fs(e,n),e=n.pendingProps,a=s._init,s=a(s._payload),n.type=s,a=n.tag=cf(s),e=en(s,e),a){case 0:n=ji(null,n,s,e,r);break e;case 1:n=Ho(null,n,s,e,r);break e;case 11:n=Do(null,n,s,e,r);break e;case 14:n=$o(null,n,s,en(s.type,e),r);break e}throw Error(F(306,s,""))}return n;case 0:return s=n.type,a=n.pendingProps,a=n.elementType===s?a:en(s,a),ji(e,n,s,a,r);case 1:return s=n.type,a=n.pendingProps,a=n.elementType===s?a:en(s,a),Ho(e,n,s,a,r);case 3:e:{if(td(n),e===null)throw Error(F(387));s=n.pendingProps,i=n.memoizedState,a=i.element,Lu(e,n),Ps(n,s,null,r);var l=n.memoizedState;if(s=l.element,i.isDehydrated)if(i={element:s,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){a=$t(Error(F(423)),n),n=Bo(e,n,s,r,a);break e}else if(s!==a){a=$t(Error(F(424)),n),n=Bo(e,n,s,r,a);break e}else for($e=An(n.stateNode.containerInfo.firstChild),He=n,re=!0,tn=null,r=Cu(n,null,s,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Vt(),s===a){n=Nn(e,n,r);break e}Le(e,n,s,r)}n=n.child}return n;case 5:return Ru(n),e===null&&mi(n),s=n.type,a=n.pendingProps,i=e!==null?e.memoizedProps:null,l=a.children,ui(s,a)?l=null:i!==null&&ui(s,i)&&(n.flags|=32),nd(e,n),Le(e,n,l,r),n.child;case 6:return e===null&&mi(n),null;case 13:return rd(e,n,r);case 4:return jl(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=Ft(n,null,s,r):Le(e,n,s,r),n.child;case 11:return s=n.type,a=n.pendingProps,a=n.elementType===s?a:en(s,a),Do(e,n,s,a,r);case 7:return Le(e,n,n.pendingProps,r),n.child;case 8:return Le(e,n,n.pendingProps.children,r),n.child;case 12:return Le(e,n,n.pendingProps.children,r),n.child;case 10:e:{if(s=n.type._context,a=n.pendingProps,i=n.memoizedProps,l=a.value,ee(Os,s._currentValue),s._currentValue=l,i!==null)if(an(i.value,l)){if(i.children===a.children&&!Me.current){n=Nn(e,n,r);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var o=i.dependencies;if(o!==null){l=i.child;for(var c=o.firstContext;c!==null;){if(c.context===s){if(i.tag===1){c=yn(-1,r&-r),c.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var u=d.pending;u===null?c.next=c:(c.next=u.next,u.next=c),d.pending=c}}i.lanes|=r,c=i.alternate,c!==null&&(c.lanes|=r),gi(i.return,r,n),o.lanes|=r;break}c=c.next}}else if(i.tag===10)l=i.type===n.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(F(341));l.lanes|=r,o=l.alternate,o!==null&&(o.lanes|=r),gi(l,r,n),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===n){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Le(e,n,a.children,r),n=n.child}return n;case 9:return a=n.type,s=n.pendingProps.children,It(n,r),a=Xe(a),s=s(a),n.flags|=1,Le(e,n,s,r),n.child;case 14:return s=n.type,a=en(s,n.pendingProps),a=en(s.type,a),$o(e,n,s,a,r);case 15:return Yu(e,n,n.type,n.pendingProps,r);case 17:return s=n.type,a=n.pendingProps,a=n.elementType===s?a:en(s,a),fs(e,n),n.tag=1,Ae(s)?(e=!0,Es(n)):e=!1,It(n,r),Xu(n,s,a),yi(n,s,a,r),ki(null,n,s,!0,e,r);case 19:return sd(e,n,r);case 22:return ed(e,n,r)}throw Error(F(156,n.tag))};function jd(e,n){return Wc(e,n)}function of(e,n,r,s){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qe(e,n,r,s){return new of(e,n,r,s)}function zl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function cf(e){if(typeof e=="function")return zl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===el)return 11;if(e===nl)return 14}return 2}function $n(e,n){var r=e.alternate;return r===null?(r=Qe(e.tag,n,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=n,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,n=e.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function vs(e,n,r,s,a,i){var l=2;if(s=e,typeof e=="function")zl(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case mt:return tt(r.children,a,i,n);case Yi:l=8,a|=8;break;case Ha:return e=Qe(12,r,n,a|2),e.elementType=Ha,e.lanes=i,e;case Ba:return e=Qe(13,r,n,a),e.elementType=Ba,e.lanes=i,e;case qa:return e=Qe(19,r,n,a),e.elementType=qa,e.lanes=i,e;case Rc:return aa(r,a,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ec:l=10;break e;case Lc:l=9;break e;case el:l=11;break e;case nl:l=14;break e;case Tn:l=16,s=null;break e}throw Error(F(130,e==null?e:typeof e,""))}return n=Qe(l,r,n,a),n.elementType=e,n.type=s,n.lanes=i,n}function tt(e,n,r,s){return e=Qe(7,e,s,n),e.lanes=r,e}function aa(e,n,r,s){return e=Qe(22,e,s,n),e.elementType=Rc,e.lanes=r,e.stateNode={isHidden:!1},e}function Ma(e,n,r){return e=Qe(6,e,null,n),e.lanes=r,e}function Aa(e,n,r){return n=Qe(4,e.children!==null?e.children:[],e.key,n),n.lanes=r,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function uf(e,n,r,s,a){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=va(0),this.expirationTimes=va(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=va(0),this.identifierPrefix=s,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Ml(e,n,r,s,a,i,l,o,c){return e=new uf(e,n,r,o,c),n===1?(n=1,i===!0&&(n|=8)):n=0,i=Qe(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:s,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},xl(i),e}function df(e,n,r){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ft,key:s==null?null:""+s,children:e,containerInfo:n,implementation:r}}function kd(e){if(!e)return qn;e=e._reactInternals;e:{if(ut(e)!==e||e.tag!==1)throw Error(F(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ae(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(F(171))}if(e.tag===1){var r=e.type;if(Ae(r))return ku(e,r,n)}return n}function Nd(e,n,r,s,a,i,l,o,c){return e=Ml(r,s,!0,e,a,i,l,o,c),e.context=kd(null),r=e.current,s=Re(),a=Dn(r),i=yn(s,a),i.callback=n??null,Vn(r,i,a),e.current.lanes=a,Mr(e,a,s),Ve(e,s),e}function ia(e,n,r,s){var a=n.current,i=Re(),l=Dn(a);return r=kd(r),n.context===null?n.context=r:n.pendingContext=r,n=yn(i,l),n.payload={element:e},s=s===void 0?null:s,s!==null&&(n.callback=s),e=Vn(a,n,l),e!==null&&(sn(e,a,l,i),ds(e,a,l)),l}function $s(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Yo(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<n?r:n}}function Al(e,n){Yo(e,n),(e=e.alternate)&&Yo(e,n)}function hf(){return null}var wd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Vl(e){this._internalRoot=e}la.prototype.render=Vl.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(F(409));ia(e,n,null,null)};la.prototype.unmount=Vl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;lt(function(){ia(null,e,null,null)}),n[jn]=null}};function la(e){this._internalRoot=e}la.prototype.unstable_scheduleHydration=function(e){if(e){var n=eu();e={blockedOn:null,target:e,priority:n};for(var r=0;r<En.length&&n!==0&&n<En[r].priority;r++);En.splice(r,0,e),r===0&&tu(e)}};function Fl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function oa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ec(){}function pf(e,n,r,s,a){if(a){if(typeof s=="function"){var i=s;s=function(){var d=$s(l);i.call(d)}}var l=Nd(n,s,e,0,null,!1,!1,"",ec);return e._reactRootContainer=l,e[jn]=l.current,br(e.nodeType===8?e.parentNode:e),lt(),l}for(;a=e.lastChild;)e.removeChild(a);if(typeof s=="function"){var o=s;s=function(){var d=$s(c);o.call(d)}}var c=Ml(e,0,!1,null,null,!1,!1,"",ec);return e._reactRootContainer=c,e[jn]=c.current,br(e.nodeType===8?e.parentNode:e),lt(function(){ia(n,c,r,s)}),c}function ca(e,n,r,s,a){var i=r._reactRootContainer;if(i){var l=i;if(typeof a=="function"){var o=a;a=function(){var c=$s(l);o.call(c)}}ia(n,l,e,a)}else l=pf(r,n,e,a,s);return $s(l)}Jc=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var r=sr(n.pendingLanes);r!==0&&(sl(n,r|1),Ve(n,ue()),!(X&6)&&(Ht=ue()+500,Wn()))}break;case 13:lt(function(){var s=kn(e,1);if(s!==null){var a=Re();sn(s,e,1,a)}}),Al(e,1)}};al=function(e){if(e.tag===13){var n=kn(e,134217728);if(n!==null){var r=Re();sn(n,e,134217728,r)}Al(e,134217728)}};Yc=function(e){if(e.tag===13){var n=Dn(e),r=kn(e,n);if(r!==null){var s=Re();sn(r,e,n,s)}Al(e,n)}};eu=function(){return J};nu=function(e,n){var r=J;try{return J=e,n()}finally{J=r}};ei=function(e,n,r){switch(n){case"input":if(Wa(e,r),n=r.name,r.type==="radio"&&n!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<r.length;n++){var s=r[n];if(s!==e&&s.form===e.form){var a=Ys(s);if(!a)throw Error(F(90));_c(s),Wa(s,a)}}}break;case"textarea":Ic(e,r);break;case"select":n=r.value,n!=null&&Rt(e,!!r.multiple,n,!1)}};$c=_l;Hc=lt;var ff={usingClientEntryPoint:!1,Events:[Vr,xt,Ys,Fc,Dc,_l]},nr={findFiberByHostInstance:Xn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mf={bundleType:nr.bundleType,version:nr.version,rendererPackageName:nr.rendererPackageName,rendererConfig:nr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Uc(e),e===null?null:e.stateNode},findFiberByHostInstance:nr.findFiberByHostInstance||hf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var as=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!as.isDisabled&&as.supportsFiber)try{Gs=as.inject(mf),un=as}catch{}}qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ff;qe.createPortal=function(e,n){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fl(n))throw Error(F(200));return df(e,n,null,r)};qe.createRoot=function(e,n){if(!Fl(e))throw Error(F(299));var r=!1,s="",a=wd;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),n=Ml(e,1,!1,null,null,r,!1,s,a),e[jn]=n.current,br(e.nodeType===8?e.parentNode:e),new Vl(n)};qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(F(188)):(e=Object.keys(e).join(","),Error(F(268,e)));return e=Uc(n),e=e===null?null:e.stateNode,e};qe.flushSync=function(e){return lt(e)};qe.hydrate=function(e,n,r){if(!oa(n))throw Error(F(200));return ca(null,e,n,!0,r)};qe.hydrateRoot=function(e,n,r){if(!Fl(e))throw Error(F(405));var s=r!=null&&r.hydratedSources||null,a=!1,i="",l=wd;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),n=Nd(n,null,e,1,r??null,a,!1,i,l),e[jn]=n.current,br(e),s)for(e=0;e<s.length;e++)r=s[e],a=r._getVersion,a=a(r._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[r,a]:n.mutableSourceEagerHydrationData.push(r,a);return new la(n)};qe.render=function(e,n,r){if(!oa(n))throw Error(F(200));return ca(null,e,n,!1,r)};qe.unmountComponentAtNode=function(e){if(!oa(e))throw Error(F(40));return e._reactRootContainer?(lt(function(){ca(null,null,e,!1,function(){e._reactRootContainer=null,e[jn]=null})}),!0):!1};qe.unstable_batchedUpdates=_l;qe.unstable_renderSubtreeIntoContainer=function(e,n,r,s){if(!oa(r))throw Error(F(200));if(e==null||e._reactInternals===void 0)throw Error(F(38));return ca(e,n,r,!1,s)};qe.version="18.3.1-next-f1338f8080-20240426";function bd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bd)}catch(e){console.error(e)}}bd(),bc.exports=qe;var gf=bc.exports,nc=gf;Da.createRoot=nc.createRoot,Da.hydrateRoot=nc.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pr(){return Pr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},Pr.apply(this,arguments)}var _n;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(_n||(_n={}));const tc="popstate";function vf(e){e===void 0&&(e={});function n(s,a){let{pathname:i,search:l,hash:o}=s.location;return Pi("",{pathname:i,search:l,hash:o},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function r(s,a){return typeof a=="string"?a:Hs(a)}return xf(n,r,null,e)}function he(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Dl(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function yf(){return Math.random().toString(36).substr(2,8)}function rc(e,n){return{usr:e.state,key:e.key,idx:n}}function Pi(e,n,r,s){return r===void 0&&(r=null),Pr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?Wt(n):n,{state:r,key:n&&n.key||s||yf()})}function Hs(e){let{pathname:n="/",search:r="",hash:s=""}=e;return r&&r!=="?"&&(n+=r.charAt(0)==="?"?r:"?"+r),s&&s!=="#"&&(n+=s.charAt(0)==="#"?s:"#"+s),n}function Wt(e){let n={};if(e){let r=e.indexOf("#");r>=0&&(n.hash=e.substr(r),e=e.substr(0,r));let s=e.indexOf("?");s>=0&&(n.search=e.substr(s),e=e.substr(0,s)),e&&(n.pathname=e)}return n}function xf(e,n,r,s){s===void 0&&(s={});let{window:a=document.defaultView,v5Compat:i=!1}=s,l=a.history,o=_n.Pop,c=null,d=u();d==null&&(d=0,l.replaceState(Pr({},l.state,{idx:d}),""));function u(){return(l.state||{idx:null}).idx}function h(){o=_n.Pop;let y=u(),p=y==null?null:y-d;d=y,c&&c({action:o,location:j.location,delta:p})}function f(y,p){o=_n.Push;let m=Pi(j.location,y,p);d=u()+1;let v=rc(m,d),C=j.createHref(m);try{l.pushState(v,"",C)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;a.location.assign(C)}i&&c&&c({action:o,location:j.location,delta:1})}function N(y,p){o=_n.Replace;let m=Pi(j.location,y,p);d=u();let v=rc(m,d),C=j.createHref(m);l.replaceState(v,"",C),i&&c&&c({action:o,location:j.location,delta:0})}function k(y){let p=a.location.origin!=="null"?a.location.origin:a.location.href,m=typeof y=="string"?y:Hs(y);return m=m.replace(/ $/,"%20"),he(p,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,p)}let j={get action(){return o},get location(){return e(a,l)},listen(y){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(tc,h),c=y,()=>{a.removeEventListener(tc,h),c=null}},createHref(y){return n(a,y)},createURL:k,encodeLocation(y){let p=k(y);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:f,replace:N,go(y){return l.go(y)}};return j}var sc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(sc||(sc={}));function jf(e,n,r){return r===void 0&&(r="/"),kf(e,n,r)}function kf(e,n,r,s){let a=typeof n=="string"?Wt(n):n,i=$l(a.pathname||"/",r);if(i==null)return null;let l=Sd(e);Nf(l);let o=null;for(let c=0;o==null&&c<l.length;++c){let d=If(i);o=Of(l[c],d)}return o}function Sd(e,n,r,s){n===void 0&&(n=[]),r===void 0&&(r=[]),s===void 0&&(s="");let a=(i,l,o)=>{let c={relativePath:o===void 0?i.path||"":o,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};c.relativePath.startsWith("/")&&(he(c.relativePath.startsWith(s),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(s.length));let d=Hn([s,c.relativePath]),u=r.concat(c);i.children&&i.children.length>0&&(he(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Sd(i.children,n,u,d)),!(i.path==null&&!i.index)&&n.push({path:d,score:Lf(d,i.index),routesMeta:u})};return e.forEach((i,l)=>{var o;if(i.path===""||!((o=i.path)!=null&&o.includes("?")))a(i,l);else for(let c of Td(i.path))a(i,l,c)}),n}function Td(e){let n=e.split("/");if(n.length===0)return[];let[r,...s]=n,a=r.endsWith("?"),i=r.replace(/\?$/,"");if(s.length===0)return a?[i,""]:[i];let l=Td(s.join("/")),o=[];return o.push(...l.map(c=>c===""?i:[i,c].join("/"))),a&&o.push(...l),o.map(c=>e.startsWith("/")&&c===""?"/":c)}function Nf(e){e.sort((n,r)=>n.score!==r.score?r.score-n.score:Rf(n.routesMeta.map(s=>s.childrenIndex),r.routesMeta.map(s=>s.childrenIndex)))}const wf=/^:[\w-]+$/,bf=3,Sf=2,Tf=1,Cf=10,Ef=-2,ac=e=>e==="*";function Lf(e,n){let r=e.split("/"),s=r.length;return r.some(ac)&&(s+=Ef),n&&(s+=Sf),r.filter(a=>!ac(a)).reduce((a,i)=>a+(wf.test(i)?bf:i===""?Tf:Cf),s)}function Rf(e,n){return e.length===n.length&&e.slice(0,-1).every((s,a)=>s===n[a])?e[e.length-1]-n[n.length-1]:0}function Of(e,n,r){let{routesMeta:s}=e,a={},i="/",l=[];for(let o=0;o<s.length;++o){let c=s[o],d=o===s.length-1,u=i==="/"?n:n.slice(i.length)||"/",h=_f({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},u),f=c.route;if(!h)return null;Object.assign(a,h.params),l.push({params:a,pathname:Hn([i,h.pathname]),pathnameBase:Ff(Hn([i,h.pathnameBase])),route:f}),h.pathnameBase!=="/"&&(i=Hn([i,h.pathnameBase]))}return l}function _f(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,s]=Pf(e.path,e.caseSensitive,e.end),a=n.match(r);if(!a)return null;let i=a[0],l=i.replace(/(.)\/+$/,"$1"),o=a.slice(1);return{params:s.reduce((d,u,h)=>{let{paramName:f,isOptional:N}=u;if(f==="*"){let j=o[h]||"";l=i.slice(0,i.length-j.length).replace(/(.)\/+$/,"$1")}const k=o[h];return N&&!k?d[f]=void 0:d[f]=(k||"").replace(/%2F/g,"/"),d},{}),pathname:i,pathnameBase:l,pattern:e}}function Pf(e,n,r){n===void 0&&(n=!1),r===void 0&&(r=!0),Dl(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let s=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,o,c)=>(s.push({paramName:o,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(s.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,n?void 0:"i"),s]}function If(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Dl(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function $l(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let r=n.endsWith("/")?n.length-1:n.length,s=e.charAt(r);return s&&s!=="/"?null:e.slice(r)||"/"}const zf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Mf=e=>zf.test(e);function Af(e,n){n===void 0&&(n="/");let{pathname:r,search:s="",hash:a=""}=typeof e=="string"?Wt(e):e,i;if(r)if(Mf(r))i=r;else{if(r.includes("//")){let l=r;r=r.replace(/\/\/+/g,"/"),Dl(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+r))}r.startsWith("/")?i=ic(r.substring(1),"/"):i=ic(r,n)}else i=n;return{pathname:i,search:Df(s),hash:$f(a)}}function ic(e,n){let r=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function Va(e,n,r,s){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Vf(e){return e.filter((n,r)=>r===0||n.route.path&&n.route.path.length>0)}function Cd(e,n){let r=Vf(e);return n?r.map((s,a)=>a===r.length-1?s.pathname:s.pathnameBase):r.map(s=>s.pathnameBase)}function Ed(e,n,r,s){s===void 0&&(s=!1);let a;typeof e=="string"?a=Wt(e):(a=Pr({},e),he(!a.pathname||!a.pathname.includes("?"),Va("?","pathname","search",a)),he(!a.pathname||!a.pathname.includes("#"),Va("#","pathname","hash",a)),he(!a.search||!a.search.includes("#"),Va("#","search","hash",a)));let i=e===""||a.pathname==="",l=i?"/":a.pathname,o;if(l==null)o=r;else{let h=n.length-1;if(!s&&l.startsWith("..")){let f=l.split("/");for(;f[0]==="..";)f.shift(),h-=1;a.pathname=f.join("/")}o=h>=0?n[h]:"/"}let c=Af(a,o),d=l&&l!=="/"&&l.endsWith("/"),u=(i||l===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(d||u)&&(c.pathname+="/"),c}const Hn=e=>e.join("/").replace(/\/\/+/g,"/"),Ff=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Df=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,$f=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Hf(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Ld=["post","put","patch","delete"];new Set(Ld);const Bf=["get",...Ld];new Set(Bf);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ir(){return Ir=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},Ir.apply(this,arguments)}const Hl=g.createContext(null),qf=g.createContext(null),dt=g.createContext(null),ua=g.createContext(null),ht=g.createContext({outlet:null,matches:[],isDataRoute:!1}),Rd=g.createContext(null);function Uf(e,n){let{relative:r}=n===void 0?{}:n;Dr()||he(!1);let{basename:s,navigator:a}=g.useContext(dt),{hash:i,pathname:l,search:o}=_d(e,{relative:r}),c=l;return s!=="/"&&(c=l==="/"?s:Hn([s,l])),a.createHref({pathname:c,search:o,hash:i})}function Dr(){return g.useContext(ua)!=null}function $r(){return Dr()||he(!1),g.useContext(ua).location}function Od(e){g.useContext(dt).static||g.useLayoutEffect(e)}function Kf(){let{isDataRoute:e}=g.useContext(ht);return e?am():Wf()}function Wf(){Dr()||he(!1);let e=g.useContext(Hl),{basename:n,future:r,navigator:s}=g.useContext(dt),{matches:a}=g.useContext(ht),{pathname:i}=$r(),l=JSON.stringify(Cd(a,r.v7_relativeSplatPath)),o=g.useRef(!1);return Od(()=>{o.current=!0}),g.useCallback(function(d,u){if(u===void 0&&(u={}),!o.current)return;if(typeof d=="number"){s.go(d);return}let h=Ed(d,JSON.parse(l),i,u.relative==="path");e==null&&n!=="/"&&(h.pathname=h.pathname==="/"?n:Hn([n,h.pathname])),(u.replace?s.replace:s.push)(h,u.state,u)},[n,s,l,i,e])}function _d(e,n){let{relative:r}=n===void 0?{}:n,{future:s}=g.useContext(dt),{matches:a}=g.useContext(ht),{pathname:i}=$r(),l=JSON.stringify(Cd(a,s.v7_relativeSplatPath));return g.useMemo(()=>Ed(e,JSON.parse(l),i,r==="path"),[e,l,i,r])}function Qf(e,n){return Gf(e,n)}function Gf(e,n,r,s){Dr()||he(!1);let{navigator:a}=g.useContext(dt),{matches:i}=g.useContext(ht),l=i[i.length-1],o=l?l.params:{};l&&l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let d=$r(),u;if(n){var h;let y=typeof n=="string"?Wt(n):n;c==="/"||(h=y.pathname)!=null&&h.startsWith(c)||he(!1),u=y}else u=d;let f=u.pathname||"/",N=f;if(c!=="/"){let y=c.replace(/^\//,"").split("/");N="/"+f.replace(/^\//,"").split("/").slice(y.length).join("/")}let k=jf(e,{pathname:N}),j=em(k&&k.map(y=>Object.assign({},y,{params:Object.assign({},o,y.params),pathname:Hn([c,a.encodeLocation?a.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?c:Hn([c,a.encodeLocation?a.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,r,s);return n&&j?g.createElement(ua.Provider,{value:{location:Ir({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:_n.Pop}},j):j}function Xf(){let e=sm(),n=Hf(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return g.createElement(g.Fragment,null,g.createElement("h2",null,"Unexpected Application Error!"),g.createElement("h3",{style:{fontStyle:"italic"}},n),r?g.createElement("pre",{style:a},r):null,null)}const Zf=g.createElement(Xf,null);class Jf extends g.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,r){return r.location!==n.location||r.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:r.error,location:r.location,revalidation:n.revalidation||r.revalidation}}componentDidCatch(n,r){console.error("React Router caught the following error during render",n,r)}render(){return this.state.error!==void 0?g.createElement(ht.Provider,{value:this.props.routeContext},g.createElement(Rd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Yf(e){let{routeContext:n,match:r,children:s}=e,a=g.useContext(Hl);return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),g.createElement(ht.Provider,{value:n},s)}function em(e,n,r,s){var a;if(n===void 0&&(n=[]),r===void 0&&(r=null),s===void 0&&(s=null),e==null){var i;if(!r)return null;if(r.errors)e=r.matches;else if((i=s)!=null&&i.v7_partialHydration&&n.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let l=e,o=(a=r)==null?void 0:a.errors;if(o!=null){let u=l.findIndex(h=>h.route.id&&(o==null?void 0:o[h.route.id])!==void 0);u>=0||he(!1),l=l.slice(0,Math.min(l.length,u+1))}let c=!1,d=-1;if(r&&s&&s.v7_partialHydration)for(let u=0;u<l.length;u++){let h=l[u];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(d=u),h.route.id){let{loaderData:f,errors:N}=r,k=h.route.loader&&f[h.route.id]===void 0&&(!N||N[h.route.id]===void 0);if(h.route.lazy||k){c=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((u,h,f)=>{let N,k=!1,j=null,y=null;r&&(N=o&&h.route.id?o[h.route.id]:void 0,j=h.route.errorElement||Zf,c&&(d<0&&f===0?(im("route-fallback"),k=!0,y=null):d===f&&(k=!0,y=h.route.hydrateFallbackElement||null)));let p=n.concat(l.slice(0,f+1)),m=()=>{let v;return N?v=j:k?v=y:h.route.Component?v=g.createElement(h.route.Component,null):h.route.element?v=h.route.element:v=u,g.createElement(Yf,{match:h,routeContext:{outlet:u,matches:p,isDataRoute:r!=null},children:v})};return r&&(h.route.ErrorBoundary||h.route.errorElement||f===0)?g.createElement(Jf,{location:r.location,revalidation:r.revalidation,component:j,error:N,children:m(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):m()},null)}var Pd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Pd||{}),Id=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Id||{});function nm(e){let n=g.useContext(Hl);return n||he(!1),n}function tm(e){let n=g.useContext(qf);return n||he(!1),n}function rm(e){let n=g.useContext(ht);return n||he(!1),n}function zd(e){let n=rm(),r=n.matches[n.matches.length-1];return r.route.id||he(!1),r.route.id}function sm(){var e;let n=g.useContext(Rd),r=tm(),s=zd();return n!==void 0?n:(e=r.errors)==null?void 0:e[s]}function am(){let{router:e}=nm(Pd.UseNavigateStable),n=zd(Id.UseNavigateStable),r=g.useRef(!1);return Od(()=>{r.current=!0}),g.useCallback(function(a,i){i===void 0&&(i={}),r.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,Ir({fromRouteId:n},i)))},[e,n])}const lc={};function im(e,n,r){lc[e]||(lc[e]=!0)}function lm(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function ce(e){he(!1)}function om(e){let{basename:n="/",children:r=null,location:s,navigationType:a=_n.Pop,navigator:i,static:l=!1,future:o}=e;Dr()&&he(!1);let c=n.replace(/^\/*/,"/"),d=g.useMemo(()=>({basename:c,navigator:i,static:l,future:Ir({v7_relativeSplatPath:!1},o)}),[c,o,i,l]);typeof s=="string"&&(s=Wt(s));let{pathname:u="/",search:h="",hash:f="",state:N=null,key:k="default"}=s,j=g.useMemo(()=>{let y=$l(u,c);return y==null?null:{location:{pathname:y,search:h,hash:f,state:N,key:k},navigationType:a}},[c,u,h,f,N,k,a]);return j==null?null:g.createElement(dt.Provider,{value:d},g.createElement(ua.Provider,{children:r,value:j}))}function cm(e){let{children:n,location:r}=e;return Qf(Ii(n),r)}new Promise(()=>{});function Ii(e,n){n===void 0&&(n=[]);let r=[];return g.Children.forEach(e,(s,a)=>{if(!g.isValidElement(s))return;let i=[...n,a];if(s.type===g.Fragment){r.push.apply(r,Ii(s.props.children,i));return}s.type!==ce&&he(!1),!s.props.index||!s.props.children||he(!1);let l={id:s.props.id||i.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(l.children=Ii(s.props.children,i)),r.push(l)}),r}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zi(){return zi=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},zi.apply(this,arguments)}function um(e,n){if(e==null)return{};var r={},s=Object.keys(e),a,i;for(i=0;i<s.length;i++)a=s[i],!(n.indexOf(a)>=0)&&(r[a]=e[a]);return r}function dm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function hm(e,n){return e.button===0&&(!n||n==="_self")&&!dm(e)}const pm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],fm="6";try{window.__reactRouterVersion=fm}catch{}const mm="startTransition",oc=sh[mm];function gm(e){let{basename:n,children:r,future:s,window:a}=e,i=g.useRef();i.current==null&&(i.current=vf({window:a,v5Compat:!0}));let l=i.current,[o,c]=g.useState({action:l.action,location:l.location}),{v7_startTransition:d}=s||{},u=g.useCallback(h=>{d&&oc?oc(()=>c(h)):c(h)},[c,d]);return g.useLayoutEffect(()=>l.listen(u),[l,u]),g.useEffect(()=>lm(s),[s]),g.createElement(om,{basename:n,children:r,location:o.location,navigationType:o.action,navigator:l,future:s})}const vm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ym=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pe=g.forwardRef(function(n,r){let{onClick:s,relative:a,reloadDocument:i,replace:l,state:o,target:c,to:d,preventScrollReset:u,viewTransition:h}=n,f=um(n,pm),{basename:N}=g.useContext(dt),k,j=!1;if(typeof d=="string"&&ym.test(d)&&(k=d,vm))try{let v=new URL(window.location.href),C=d.startsWith("//")?new URL(v.protocol+d):new URL(d),S=$l(C.pathname,N);C.origin===v.origin&&S!=null?d=S+C.search+C.hash:j=!0}catch{}let y=Uf(d,{relative:a}),p=xm(d,{replace:l,state:o,target:c,preventScrollReset:u,relative:a,viewTransition:h});function m(v){s&&s(v),v.defaultPrevented||p(v)}return g.createElement("a",zi({},f,{href:k||y,onClick:j||i?s:m,ref:r,target:c}))});var cc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(cc||(cc={}));var uc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(uc||(uc={}));function xm(e,n){let{target:r,replace:s,state:a,preventScrollReset:i,relative:l,viewTransition:o}=n===void 0?{}:n,c=Kf(),d=$r(),u=_d(e,{relative:l});return g.useCallback(h=>{if(hm(h,r)){h.preventDefault();let f=s!==void 0?s:Hs(d)===Hs(u);c(e,{replace:f,state:a,preventScrollReset:i,relative:l,viewTransition:o})}},[d,c,u,s,a,r,e,i,l,o])}/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var jm={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),U=(e,n)=>{const r=g.forwardRef(({color:s="currentColor",size:a=24,strokeWidth:i=2,absoluteStrokeWidth:l,className:o="",children:c,...d},u)=>g.createElement("svg",{ref:u,...jm,width:a,height:a,stroke:s,strokeWidth:l?Number(i)*24/Number(a):i,className:["lucide",`lucide-${km(e)}`,o].join(" "),...d},[...n.map(([h,f])=>g.createElement(h,f)),...Array.isArray(c)?c:[c]]));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wn=U("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=U("ArrowDownNarrowWide",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h4",key:"6d7r33"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h10",key:"1438ji"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=U("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc=U("ArrowRightLeft",[["path",{d:"m16 3 4 4-4 4",key:"1x1c3m"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"m8 21-4-4 4-4",key:"h9nckh"}],["path",{d:"M4 17h16",key:"g4d7ey"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=U("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=U("ArrowUpNarrowWide",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M11 12h4",key:"q8tih4"}],["path",{d:"M11 16h7",key:"uosisv"}],["path",{d:"M11 20h10",key:"jvxblo"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=U("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=U("Binary",[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2",key:"p02svl"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2",key:"xm4xkj"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 10h4",key:"ru81e7"}],["path",{d:"M6 14h2v6",key:"16z9wg"}],["path",{d:"M14 4h2v6",key:"1idq9u"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=U("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=U("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=U("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=U("Brain",[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",key:"1mhkh5"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",key:"1d6s00"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=U("Bug",[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",key:"xs1cw7"}],["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4",key:"k3fwyw"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=U("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=U("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=U("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm=U("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=U("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mi=U("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=U("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=U("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bs=U("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=U("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc=U("FileCode",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qs=U("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=U("GitFork",[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",key:"1uq4wg"}],["path",{d:"M12 12v3",key:"158kv8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=U("GitGraph",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M5 9v6",key:"158jrl"}],["circle",{cx:"5",cy:"18",r:"3",key:"104gr9"}],["path",{d:"M12 3v18",key:"108xh3"}],["circle",{cx:"19",cy:"6",r:"3",key:"108a5v"}],["path",{d:"M16 15.7A9 9 0 0 0 19 9",key:"1e3vqb"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bl=U("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr=U("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=U("HeartHandshake",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"12sd6o"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=U("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=U("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pn=U("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ai=U("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=U("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Us=U("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=U("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=U("ListOrdered",[["line",{x1:"10",x2:"21",y1:"6",y2:"6",key:"76qw6h"}],["line",{x1:"10",x2:"21",y1:"12",y2:"12",key:"16nom4"}],["line",{x1:"10",x2:"21",y1:"18",y2:"18",key:"u3jurt"}],["path",{d:"M4 6h1v4",key:"cnovpq"}],["path",{d:"M4 10h2",key:"16xx2s"}],["path",{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1",key:"m9a95d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=U("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=U("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=U("MoveUp",[["path",{d:"M8 6L12 2L16 6",key:"1yvkyx"}],["path",{d:"M12 2V22",key:"r89rzk"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=U("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bt=U("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ks=U("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=U("Pyramid",[["path",{d:"M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z",key:"aenxs0"}],["path",{d:"M12 2v20",key:"t6zp3m"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=U("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=U("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=U("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const da=U("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=U("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=U("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=U("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vi=U("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm=U("TreeDeciduous",[["path",{d:"M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z",key:"oadzkq"}],["path",{d:"M12 19v3",key:"npa21l"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=U("TreePine",[["path",{d:"m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z",key:"cpyugq"}],["path",{d:"M12 22v-3",key:"kmzjlo"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=U("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=U("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ul=U("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function ng(){const e=$r(),[n,r]=g.useState(!1),s=e.pathname==="/"?"home":e.pathname.replace("/","").replace("_",""),a=()=>r(!n),i=()=>r(!1);g.useEffect(()=>{const o=()=>{window.innerWidth>1024&&r(!1)};return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[]),g.useEffect(()=>{n?document.body.style.overflow="hidden":document.body.style.overflow=""},[n]);const l=({to:o,icon:c,children:d,pageName:u})=>{const h=s===u;return t.jsxs(Pe,{to:o,className:`nav-item ${h?"active":""}`,onClick:i,children:[t.jsx(c,{}),t.jsx("span",{children:d})]})};return t.jsxs(t.Fragment,{children:[t.jsx("button",{className:"mobile-menu-toggle",id:"mobileMenuToggle","aria-label":"Toggle menu",onClick:a,children:n?t.jsx(eg,{}):t.jsx(Um,{})}),t.jsx("div",{className:`sidebar-overlay ${n?"active":""}`,onClick:i}),t.jsxs("aside",{className:`sidebar ${n?"active":""}`,id:"sidebar",children:[t.jsx("div",{className:"sidebar-header",children:t.jsxs(Pe,{to:"/",className:"logo-wrapper",onClick:i,children:[t.jsx("img",{src:"/logo.svg",alt:"DSA Visualizer Logo",className:"logo-icon"}),t.jsx("span",{className:"logo-text",children:"DSA Visualizer"})]})}),t.jsxs("nav",{className:"sidebar-nav",children:[t.jsxs("div",{className:"nav-section",children:[t.jsx("div",{className:"nav-section-title",children:"Explore"}),t.jsx(l,{to:"/",icon:Bm,pageName:"home",children:"Home"}),t.jsx(l,{to:"/algorithms",icon:Mi,pageName:"algorithms",children:"Algorithms"})]}),t.jsxs("div",{className:"nav-section",children:[t.jsx("div",{className:"nav-section-title",children:"More"}),t.jsx(l,{to:"/contact",icon:Md,pageName:"contact",children:"Contact"}),t.jsx(l,{to:"/contributions",icon:Hm,pageName:"contributions",children:"Contributions"})]})]}),t.jsxs("div",{className:"sidebar-footer",children:[t.jsxs("div",{className:"social-links-sidebar",children:[t.jsx("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",title:"GitHub",children:t.jsx(Bl,{})}),t.jsx("a",{href:"https://www.linkedin.com/in/abdullah-mahfouz-5188b1306/",target:"_blank",rel:"noopener noreferrer",title:"LinkedIn",children:t.jsx(ql,{})})]}),t.jsx("p",{className:"copyright",children:"© 2026 Abdullah Mahfouz"})]})]})]})}function tg(){return t.jsx("footer",{className:"main-footer",children:t.jsxs("div",{className:"footer-content",children:[t.jsxs("div",{className:"footer-social",children:[t.jsxs("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"footer-link",children:[t.jsx(Bl,{}),t.jsx("span",{children:"GitHub"})]}),t.jsxs("a",{href:"https://www.linkedin.com/in/abdullah-mahfouz-5188b1306/",target:"_blank",rel:"noopener noreferrer",className:"footer-link",children:[t.jsx(ql,{}),t.jsx("span",{children:"LinkedIn"})]})]}),t.jsx("p",{className:"footer-copyright",children:"© 2026 Abdullah Mahfouz"})]})})}function rg(){const[e,n]=g.useState(0);g.useEffect(()=>{const s=setInterval(()=>{n(a=>(a+1)%4)},3e3);return()=>clearInterval(s)},[]);const r=[{icon:Ai,name:"Stack",color:"#6366f1",description:"LIFO Operations"},{icon:qs,name:"Binary Tree",color:"#10b981",description:"Tree Traversals"},{icon:mr,name:"Hash Table",color:"#f59e0b",description:"Key-Value Mapping"},{icon:Bs,name:"Heap",color:"#ec4899",description:"Priority Queue"}];return t.jsxs(t.Fragment,{children:[t.jsxs("section",{className:"hero-advanced",children:[t.jsxs("div",{className:"hero-bg-effects",children:[t.jsx("div",{className:"gradient-orb orb-1"}),t.jsx("div",{className:"gradient-orb orb-2"}),t.jsx("div",{className:"gradient-orb orb-3"}),t.jsx("div",{className:"grid-overlay"}),t.jsx("div",{className:"noise-overlay"})]}),t.jsxs("div",{className:"hero-content-advanced",children:[t.jsxs("div",{className:"hero-badge-advanced",children:[t.jsx(Gm,{className:"badge-icon"}),t.jsx("span",{children:"Free & Open Source Learning Platform"})]}),t.jsxs("h1",{className:"hero-title-advanced",children:[t.jsx("span",{className:"title-line",children:"Master"}),t.jsx("span",{className:"title-line gradient-text-animated",children:"Data Structures"}),t.jsxs("span",{className:"title-line",children:["& ",t.jsx("span",{className:"gradient-text-animated",children:"Algorithms"})]})]}),t.jsx("p",{className:"hero-description-advanced",children:"Interactive visualizations that transform complex DSA concepts into intuitive, step-by-step learning experiences. Built for students, by students."}),t.jsxs("div",{className:"hero-cta-group",children:[t.jsxs(Pe,{to:"/algorithms",className:"btn-glow-primary",children:[t.jsx("span",{children:"Start Learning"}),t.jsx(Y,{className:"btn-icon"})]}),t.jsxs(Pe,{to:"/stack",className:"btn-glass",children:[t.jsx(Bt,{className:"btn-icon-left"}),t.jsx("span",{children:"Try Stack Visualizer"})]})]}),t.jsxs("div",{className:"hero-stats",children:[t.jsxs("div",{className:"stat-item",children:[t.jsx("span",{className:"stat-number",children:"12+"}),t.jsx("span",{className:"stat-label",children:"Data Structures"})]}),t.jsx("div",{className:"stat-divider"}),t.jsxs("div",{className:"stat-item",children:[t.jsx("span",{className:"stat-number",children:"100%"}),t.jsx("span",{className:"stat-label",children:"Free Forever"})]}),t.jsx("div",{className:"stat-divider"}),t.jsxs("div",{className:"stat-item",children:[t.jsx("span",{className:"stat-number",children:"AI"}),t.jsx("span",{className:"stat-label",children:"Powered Assistant"})]})]})]}),t.jsxs("div",{className:"hero-showcase",children:[t.jsxs("div",{className:"showcase-window",children:[t.jsxs("div",{className:"window-header",children:[t.jsxs("div",{className:"window-dots",children:[t.jsx("span",{className:"dot red"}),t.jsx("span",{className:"dot yellow"}),t.jsx("span",{className:"dot green"})]}),t.jsxs("span",{className:"window-title",children:[t.jsx(Xm,{size:14}),"DSA Visualizer"]})]}),t.jsx("div",{className:"showcase-content",children:r.map((s,a)=>t.jsxs("div",{className:`showcase-card ${a===e?"active":""}`,style:{"--card-color":s.color},children:[t.jsx("div",{className:"showcase-card-icon",children:t.jsx(s.icon,{})}),t.jsxs("div",{className:"showcase-card-info",children:[t.jsx("h4",{children:s.name}),t.jsx("p",{children:s.description})]}),t.jsx(Im,{className:"showcase-arrow"})]},s.name))})]}),t.jsx("div",{className:"floating-element float-1",children:t.jsx(Mi,{})}),t.jsx("div",{className:"floating-element float-2",children:t.jsx(Tm,{})}),t.jsx("div",{className:"floating-element float-3",children:t.jsx(Lm,{})})]})]}),t.jsxs("section",{className:"ds-showcase-section",children:[t.jsxs("div",{className:"section-header-advanced",children:[t.jsx("span",{className:"section-tag",children:"Explore"}),t.jsx("h2",{children:"Interactive Data Structures"}),t.jsx("p",{children:"Click to visualize, interact, and truly understand how each structure works"})]}),t.jsxs("div",{className:"ds-showcase-grid",children:[t.jsxs(Pe,{to:"/stack",className:"ds-card",style:{"--ds-color":"#6366f1"},children:[t.jsx("div",{className:"ds-card-glow"}),t.jsxs("div",{className:"ds-card-content",children:[t.jsx("div",{className:"ds-icon",children:t.jsx(Ai,{})}),t.jsx("h3",{children:"Stack"}),t.jsx("p",{children:"Last In, First Out"}),t.jsxs("div",{className:"ds-card-footer",children:[t.jsx("span",{className:"ds-complexity",children:"O(1) push/pop"}),t.jsx(Y,{className:"ds-arrow"})]})]})]}),t.jsxs(Pe,{to:"/queue",className:"ds-card",style:{"--ds-color":"#10b981"},children:[t.jsx("div",{className:"ds-card-glow"}),t.jsxs("div",{className:"ds-card-content",children:[t.jsx("div",{className:"ds-icon",children:t.jsx(qs,{})}),t.jsx("h3",{children:"Queue"}),t.jsx("p",{children:"First In, First Out"}),t.jsxs("div",{className:"ds-card-footer",children:[t.jsx("span",{className:"ds-complexity",children:"O(1) enqueue"}),t.jsx(Y,{className:"ds-arrow"})]})]})]}),t.jsxs(Pe,{to:"/linkedlist",className:"ds-card",style:{"--ds-color":"#f59e0b"},children:[t.jsx("div",{className:"ds-card-glow"}),t.jsxs("div",{className:"ds-card-content",children:[t.jsx("div",{className:"ds-icon",children:t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[t.jsx("circle",{cx:"5",cy:"12",r:"3"}),t.jsx("circle",{cx:"19",cy:"12",r:"3"}),t.jsx("line",{x1:"8",y1:"12",x2:"16",y2:"12"})]})}),t.jsx("h3",{children:"Linked List"}),t.jsx("p",{children:"Dynamic Node Chain"}),t.jsxs("div",{className:"ds-card-footer",children:[t.jsx("span",{className:"ds-complexity",children:"O(1) insert"}),t.jsx(Y,{className:"ds-arrow"})]})]})]}),t.jsxs(Pe,{to:"/bst",className:"ds-card",style:{"--ds-color":"#ec4899"},children:[t.jsx("div",{className:"ds-card-glow"}),t.jsxs("div",{className:"ds-card-content",children:[t.jsx("div",{className:"ds-icon",children:t.jsx(Jm,{})}),t.jsx("h3",{children:"Binary Search Tree"}),t.jsx("p",{children:"Ordered Tree Structure"}),t.jsxs("div",{className:"ds-card-footer",children:[t.jsx("span",{className:"ds-complexity",children:"O(log n) search"}),t.jsx(Y,{className:"ds-arrow"})]})]})]}),t.jsxs(Pe,{to:"/hashtable_chaining",className:"ds-card",style:{"--ds-color":"#8b5cf6"},children:[t.jsx("div",{className:"ds-card-glow"}),t.jsxs("div",{className:"ds-card-content",children:[t.jsx("div",{className:"ds-icon",children:t.jsx(mr,{})}),t.jsx("h3",{children:"Hash Table"}),t.jsx("p",{children:"Key-Value Mapping"}),t.jsxs("div",{className:"ds-card-footer",children:[t.jsx("span",{className:"ds-complexity",children:"O(1) average"}),t.jsx(Y,{className:"ds-arrow"})]})]})]}),t.jsxs(Pe,{to:"/minheap",className:"ds-card",style:{"--ds-color":"#06b6d4"},children:[t.jsx("div",{className:"ds-card-glow"}),t.jsxs("div",{className:"ds-card-content",children:[t.jsx("div",{className:"ds-icon",children:t.jsx(Bs,{})}),t.jsx("h3",{children:"Heap"}),t.jsx("p",{children:"Priority Queue"}),t.jsxs("div",{className:"ds-card-footer",children:[t.jsx("span",{className:"ds-complexity",children:"O(log n) insert"}),t.jsx(Y,{className:"ds-arrow"})]})]})]})]}),t.jsx("div",{className:"showcase-cta",children:t.jsxs(Pe,{to:"/algorithms",className:"btn-outline-glow",children:[t.jsx("span",{children:"View All Data Structures"}),t.jsx(Y,{})]})})]}),t.jsxs("section",{className:"features-section-advanced",children:[t.jsxs("div",{className:"section-header-advanced",children:[t.jsx("span",{className:"section-tag",children:"Why Choose Us"}),t.jsx("h2",{children:"Built for Visual Learners"}),t.jsx("p",{children:"Everything you need to master DSA concepts"})]}),t.jsxs("div",{className:"features-grid-advanced",children:[t.jsxs("div",{className:"feature-card-advanced",children:[t.jsx("div",{className:"feature-card-bg"}),t.jsx("div",{className:"feature-icon-advanced",style:{"--icon-color":"#6366f1"},children:t.jsx(Fm,{})}),t.jsx("h3",{children:"Real-Time Visualization"}),t.jsx("p",{children:"Watch data structures come alive with smooth animations that show exactly what happens during each operation."})]}),t.jsxs("div",{className:"feature-card-advanced",children:[t.jsx("div",{className:"feature-card-bg"}),t.jsx("div",{className:"feature-icon-advanced",style:{"--icon-color":"#10b981"},children:t.jsx(Ul,{})}),t.jsx("h3",{children:"Step-by-Step Execution"}),t.jsx("p",{children:"Control the pace of operations. Pause, step through, and understand every single state change."})]}),t.jsxs("div",{className:"feature-card-advanced",children:[t.jsx("div",{className:"feature-card-bg"}),t.jsx("div",{className:"feature-icon-advanced",style:{"--icon-color":"#f59e0b"},children:t.jsx(Rm,{})}),t.jsx("h3",{children:"AI Study Assistant"}),t.jsx("p",{children:"Get instant answers to your DSA questions. Our AI explains concepts in ways that make sense to you."})]}),t.jsxs("div",{className:"feature-card-advanced",children:[t.jsx("div",{className:"feature-card-bg"}),t.jsx("div",{className:"feature-icon-advanced",style:{"--icon-color":"#ec4899"},children:t.jsx(Mi,{})}),t.jsx("h3",{children:"Code Implementation"}),t.jsx("p",{children:"See the actual code behind each operation. Copy, learn, and implement in your own projects."})]})]})]}),t.jsxs("section",{className:"how-it-works-section",children:[t.jsxs("div",{className:"section-header-advanced",children:[t.jsx("span",{className:"section-tag",children:"Get Started"}),t.jsx("h2",{children:"Start Learning in Seconds"}),t.jsx("p",{children:"No signup required. Just pick a data structure and start visualizing."})]}),t.jsxs("div",{className:"steps-container",children:[t.jsxs("div",{className:"step-card",children:[t.jsx("div",{className:"step-number",children:"1"}),t.jsx("h3",{children:"Choose a Topic"}),t.jsx("p",{children:"Browse our collection of data structures and algorithms"})]}),t.jsx("div",{className:"step-connector"}),t.jsxs("div",{className:"step-card",children:[t.jsx("div",{className:"step-number",children:"2"}),t.jsx("h3",{children:"Interact & Visualize"}),t.jsx("p",{children:"Add elements, perform operations, and watch the magic happen"})]}),t.jsx("div",{className:"step-connector"}),t.jsxs("div",{className:"step-card",children:[t.jsx("div",{className:"step-number",children:"3"}),t.jsx("h3",{children:"Master the Concept"}),t.jsx("p",{children:"Read explanations, view code, and ask the AI for help"})]})]}),t.jsx("div",{className:"final-cta",children:t.jsxs(Pe,{to:"/stack",className:"btn-glow-large",children:[t.jsx(Bt,{className:"btn-icon-left"}),t.jsx("span",{children:"Start with Stack Visualizer"})]})})]})]})}function sg(){const[e,n]=g.useState(null),r=a=>{n(e===a?null:a)},s=[{id:"linear",name:"Linear Data Structures",icon:qm,description:"Elements stored sequentially where each element has a unique predecessor and successor. These are the building blocks of computer science — simple to implement yet powerful enough to solve complex problems.",color:"#6366f1",items:[{to:"/stack",icon:Ai,title:"Stack",description:"LIFO (Last In, First Out) — imagine a stack of plates where you can only add or remove from the top. The most recent item is always accessed first. Push adds to top, Pop removes from top. Both operations are O(1) constant time. Essential for: browser back button (page history), undo/redo in editors, function call management in recursion, parsing expressions like (a+b)*c, and depth-first search algorithms.",available:!0},{to:"/queue",icon:dc,title:"Queue",description:"FIFO (First In, First Out) — like waiting in line at a coffee shop. The first person to arrive gets served first. Enqueue adds to the back, Dequeue removes from front. Both O(1) operations. Used everywhere: print job scheduling, CPU task management, breadth-first search (BFS) in graphs, handling requests in web servers, and buffering data streams like video playback.",available:!0},{to:"/linkedlist",icon:Us,title:"Linked List",description:"A chain of nodes where each node stores data and a pointer to the next node. Unlike arrays, memory doesn't need to be contiguous — nodes can be scattered in memory. Insertion/deletion at known positions is O(1), but finding a position is O(n). Perfect for: implementing stacks/queues, music playlists (next/previous song), browser history, memory allocation in operating systems, and polynomial arithmetic.",available:!0}]},{id:"hash",name:"Hash-Tables",icon:Bs,description:"Revolutionary data structures that use hash functions to map keys to array indices, enabling O(1) average-case lookup, insertion, and deletion. The backbone of databases, caches, and any system requiring fast key-value access.",color:"#10b981",items:[{to:"/hashtable_linear",icon:mr,title:"Linear Probing",description:'Open addressing collision resolution: when a collision occurs (two keys hash to same index), simply check the next slot, then the next, until an empty slot is found. Pros: excellent cache performance since data is stored contiguously, simple implementation. Cons: can cause "primary clustering" where long runs of occupied slots form, degrading performance. Load factor should stay below 0.7 for efficiency.',available:!0},{to:"/hashtable_quadratic",icon:mr,title:"Quadratic Probing",description:'Instead of checking consecutive slots, probe at quadratic intervals: 1², 2², 3²... positions away from the original hash. This eliminates primary clustering but can cause "secondary clustering" where keys with the same hash follow the same probe sequence. Table size should be prime and load factor < 0.5 to guarantee finding an empty slot. Used when cache performance is less critical than even distribution.',available:!0},{to:"/hashtable_chaining",icon:mr,title:"Separate Chaining",description:"Each array slot holds a linked list (chain) of all entries that hash to that index. No limit on how many items can be stored — just grow the chains. Handles high load factors gracefully (even > 1.0). Simpler deletion than open addressing. Used in Java's HashMap, Python's dict (with optimization). Trade-off: extra memory for pointers, potentially poor cache performance with long chains.",available:!0}]},{id:"heaps",name:"Priority Queues & Heaps",icon:Wm,description:"Complete binary trees satisfying the heap property — either every parent ≥ children (max-heap) or every parent ≤ children (min-heap). Heaps power priority queues, enabling O(1) access to the extreme element and O(log n) insertions and deletions.",color:"#ec4899",items:[{to:"/minheap",icon:Nm,title:"Min Heap",description:`Every parent node is smaller than or equal to its children, so the minimum element is always at the root — accessible in O(1). Insert and extract-min are O(log n) as elements "bubble up" or "sink down" to maintain the heap property. Critical for: Dijkstra's shortest path algorithm, Prim's minimum spanning tree, job schedulers (process with smallest priority runs next), and efficiently finding the k largest elements in a stream.`,available:!0},{to:"/maxheap",icon:bm,title:"Max Heap",description:"The mirror of min-heap: every parent ≥ children, maximum at root. Extract-max in O(1), insert and delete in O(log n). Powers: Heapsort algorithm (in-place O(n log n) sorting), priority queues where highest priority goes first, finding k smallest elements, implementing a median-finding structure (use one min-heap + one max-heap), and bandwidth management in network routers.",available:!0}]},{id:"trees",name:"Binary Trees",icon:Zm,description:"Hierarchical data structures where data flows from a root node down through children. Trees enable O(log n) operations on sorted data and model real-world hierarchies like file systems, organization charts, and decision trees in AI/ML.",color:"#f59e0b",items:[{to:"/binarytree",icon:qs,title:"Binary Tree Traversals",description:"Master the four fundamental ways to visit every node in a binary tree: INORDER (Left→Root→Right) visits nodes in sorted order for BST, used for expression trees; PREORDER (Root→Left→Right) processes root first, perfect for copying trees or creating prefix expressions; POSTORDER (Left→Right→Root) processes children before parent, used for deleting trees or postfix notation; LEVEL-ORDER (BFS) visits level by level, used for finding shortest paths and printing tree structure.",available:!0},{to:"/bst",icon:Dm,title:"Binary Search Tree",description:`The fundamental ordered tree: every node's left subtree contains only smaller values, right subtree only larger values. This property enables O(log n) search by eliminating half the tree at each step — like binary search but in tree form. Supports efficient range queries. Caveat: can degrade to O(n) if insertions create an unbalanced "stick". Foundation for databases, symbol tables, and more advanced balanced trees.`,available:!0},{to:"/avl",icon:Qm,title:"AVL Tree",description:"The first self-balancing BST, invented in 1962. Maintains strict balance: height difference between left and right subtrees ≤ 1 at every node. When insertion/deletion violates this, the tree self-corrects using rotations (single or double). Guarantees O(log n) for all operations. More rigidly balanced than Red-Black trees, so faster lookups but slightly slower insertions. Used when reads far exceed writes.",available:!0},{to:"/splay",icon:Km,title:"Splay Tree",description:`A self-adjusting BST with a clever optimization: every accessed node is "splayed" (rotated) to the root. No explicit balance condition, yet achieves O(log n) amortized time. Recently accessed items stay near the root — perfect for caches where some items are accessed repeatedly (temporal locality). Used in Windows NT's virtual memory management, GCC's implementation of certain data structures, and network routers.`,available:!0}]},{id:"Graphs",name:"Graphs",icon:$m,description:"Graphs model relationships between objects using vertices (nodes) and edges (connections). They power social networks, GPS navigation, recommendation systems, and the internet itself. Understanding graphs unlocks solutions to complex real-world problems like finding shortest paths, detecting communities, and optimizing networks.",color:"#ef4444",items:[{to:"/adjacency-matrix",icon:Bs,title:"Adjacency Matrix",description:"A 2D array used to represent a finite graph. Each cell at (i, j) indicates if there is an edge from vertex i to vertex j. Simple and fast for dense graphs, but uses O(V^2) space. Not practical for large, sparse graphs.",available:!0},{to:"/adjacency-list",icon:Us,title:"Adjacency List",description:"A space-efficient way to represent a graph. Each vertex stores a list of adjacent vertices. Ideal for sparse graphs, supports efficient iteration over neighbors. Commonly used in network routing, social networks, and recommendation systems.",available:!0},{to:"/bfs",icon:dc,title:"Breadth-First Search (BFS)",description:"A fundamental graph traversal algorithm that explores neighbors level by level. Used for finding shortest paths in unweighted graphs, peer-to-peer networks, and web crawlers.",available:!0},{to:"/dfs",icon:qs,title:"Depth-First Search (DFS)",description:"A classic graph traversal technique that explores as far as possible along each branch before backtracking. Used for topological sorting, cycle detection, and solving puzzles like mazes.",available:!0}]}];return t.jsxs("section",{className:"algorithms-section",children:[t.jsxs("div",{className:"section-header",children:[t.jsx("h1",{children:"Explore Data Structures"}),t.jsx("p",{children:"Choose a category to explore different data structures. Each visualizer includes step-by-step explanations and hands-on practice."})]}),t.jsx("div",{className:"categories-container",children:s.map(a=>t.jsxs("div",{className:"category-wrapper",children:[t.jsxs("button",{className:`category-header ${e===a.id?"expanded":""}`,onClick:()=>r(a.id),style:{"--category-color":a.color},children:[t.jsx("div",{className:"category-icon",style:{background:a.color},children:t.jsx(a.icon,{})}),t.jsxs("div",{className:"category-info",children:[t.jsx("h2",{children:a.name}),t.jsx("p",{children:a.description})]}),t.jsxs("div",{className:"category-meta",children:[t.jsxs("span",{className:"item-count",children:[a.items.filter(i=>i.available).length," available"]}),e===a.id?t.jsx(zm,{}):t.jsx(Pm,{})]})]}),t.jsx("div",{className:`category-items ${e===a.id?"expanded":""}`,children:t.jsx("div",{className:"items-grid",children:a.items.map((i,l)=>i.available?t.jsxs(Pe,{to:i.to,className:"algorithm-item",children:[t.jsx("div",{className:"item-icon",style:{background:a.color},children:t.jsx(i.icon,{})}),t.jsxs("div",{className:"item-info",children:[t.jsx("h3",{children:i.title}),t.jsx("p",{children:i.description})]}),t.jsx(Y,{className:"item-arrow"})]},l):t.jsxs("div",{className:"algorithm-item coming-soon",children:[t.jsx("div",{className:"item-icon disabled",children:t.jsx(i.icon,{})}),t.jsxs("div",{className:"item-info",children:[t.jsx("h3",{children:i.title}),t.jsx("p",{children:i.description})]}),t.jsx("span",{className:"coming-soon-badge",children:"Coming Soon"})]},l))})})]},a.id))})]})}function ag(){return t.jsxs("section",{className:"contact-section",children:[t.jsx("div",{className:"page-header",children:t.jsx("h1",{children:"Contact"})}),t.jsx("div",{className:"contact-content",children:t.jsxs("div",{className:"contact-info",children:[t.jsxs("div",{className:"info-card",children:[t.jsx("div",{className:"info-icon",children:t.jsx(Md,{})}),t.jsx("h3",{children:"Email"}),t.jsx("p",{children:"For recruitment and professional opportunities"}),t.jsx("a",{href:"mailto:abdullahmahfouz@trentu.ca",className:"info-link",children:"abdullahmahfouz@trentu.ca"})]}),t.jsxs("div",{className:"info-card",children:[t.jsx("div",{className:"info-icon",children:t.jsx(Bl,{})}),t.jsx("h3",{children:"GitHub"}),t.jsx("p",{children:"View my projects and contributions"}),t.jsx("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"info-link",children:"github.com/abdullahmahfouz"})]}),t.jsxs("div",{className:"info-card",children:[t.jsx("div",{className:"info-icon",children:t.jsx(ql,{})}),t.jsx("h3",{children:"LinkedIn"}),t.jsx("p",{children:"Connect for professional networking"}),t.jsx("a",{href:"https://www.linkedin.com/in/abdullah-mahfouz-5188b1306/",target:"_blank",rel:"noopener noreferrer",className:"info-link",children:"Connect on LinkedIn"})]})]})})]})}function ig(){return t.jsxs("section",{className:"contributions-section",children:[t.jsxs("div",{className:"page-header",children:[t.jsx("h1",{children:"Contributions"}),t.jsx("p",{children:"Help us improve this free learning tool for students! Your contributions help make DSA easier to understand for everyone."})]}),t.jsxs("div",{className:"contributions-content",children:[t.jsxs("div",{className:"contribution-card",children:[t.jsx("div",{className:"contribution-icon",children:t.jsx(Am,{})}),t.jsx("h2",{children:"Code Contributions"}),t.jsx("p",{children:"Found a bug or want to add a new feature? Fork the repository, make your changes, and submit a pull request!"}),t.jsxs("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"btn-primary",children:[t.jsx("span",{children:"View on GitHub"}),t.jsx(Y,{})]})]}),t.jsxs("div",{className:"contribution-card",children:[t.jsx("div",{className:"contribution-icon",children:t.jsx(Cm,{})}),t.jsx("h2",{children:"Documentation"}),t.jsx("p",{children:"Help improve our documentation, fix typos, or add examples. Every bit helps!"}),t.jsxs("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"btn-primary",children:[t.jsx("span",{children:"Improve Docs"}),t.jsx(Y,{})]})]}),t.jsxs("div",{className:"contribution-card",children:[t.jsx("div",{className:"contribution-icon",children:t.jsx(Om,{})}),t.jsx("h2",{children:"Report Issues"}),t.jsx("p",{children:"Found a bug or have a suggestion? Open an issue on GitHub and let us know!"}),t.jsxs("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"btn-primary",children:[t.jsx("span",{children:"Report Issue"}),t.jsx(Y,{})]})]}),t.jsxs("div",{className:"contribution-card",children:[t.jsx("div",{className:"contribution-icon",children:t.jsx(Fe,{})}),t.jsx("h2",{children:"Feature Requests"}),t.jsx("p",{children:"Have an idea for a new visualizer or feature? We'd love to hear your suggestions!"}),t.jsxs(Pe,{to:"/contact",className:"btn-primary",children:[t.jsx("span",{children:"Suggest Feature"}),t.jsx(Y,{})]})]})]}),t.jsxs("div",{className:"contributors-section",children:[t.jsx("h2",{children:"Contributors"}),t.jsx("div",{className:"contributors-list",children:t.jsxs("div",{className:"contributor-item",children:[t.jsx("div",{className:"contributor-avatar",children:t.jsx(Ym,{})}),t.jsxs("div",{className:"contributor-info",children:[t.jsx("h3",{children:"Abdullah Mahfouz"}),t.jsx("p",{children:"Creator & Maintainer"})]})]})}),t.jsx("p",{className:"contributors-note",children:"Want to see your name here? Start contributing today!"})]})]})}function Se({context:e="Data Structures"}){const[n,r]=g.useState(""),[s,a]=g.useState(""),[i,l]=g.useState(!1),o=()=>{const u=e.toLowerCase();return u.includes("stack")?"e.g., How does LIFO work?":u.includes("queue")?"e.g., What is FIFO?":u.includes("linked list")?"e.g., How do I insert at the head?":u.includes("hash")?"e.g., What is a collision?":u.includes("binary tree")||u.includes("traversal")?"e.g., What is inorder traversal?":"e.g., How does this work?"},c=async()=>{if(n.trim()){l(!0),a("");try{const u=await fetch("/api/ask-ai",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:n.trim(),code:e})}),h=await u.json();u.ok?a(h.answer||"No answer returned."):a("Currently not working, try again later.")}catch{a("Currently not working, try again later.")}finally{l(!1)}}},d=u=>{u.key==="Enter"&&c()};return t.jsxs("div",{className:"ai-assistant",children:[t.jsxs("h3",{children:[t.jsx(Em,{}),"AI Assistant"]}),t.jsxs("p",{children:["Ask me anything about ",e.toLowerCase(),"!"]}),t.jsxs("div",{className:"ai-input-group",children:[t.jsx("input",{type:"text",value:n,onChange:u=>r(u.target.value),onKeyPress:d,placeholder:o(),disabled:i}),t.jsx("button",{onClick:c,disabled:i,children:i?"Asking...":"Ask"})]}),t.jsxs("div",{id:"ai-response",children:[i&&t.jsx("div",{className:"ai-loading",children:"Thinking..."}),s&&t.jsx("div",{className:s.startsWith("Error")?"ai-error":"ai-answer",children:s})]})]})}const lg=`class Stack:
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
print(stack.peek())  # 20`,og=`class Stack {
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
console.log(stack.pop()); // 20`,cg=`import java.util.EmptyStackException;

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
System.out.println(stack.pop()); // 20`,ug={python:lg,javascript:og,java:cg,"c++":`#include <iostream>
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
Console.WriteLine(stack.Pop()); // 20`},dg=`class Queue:
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
print(queue.peek())     # 20`,hg=`class Queue {
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
console.log(queue.dequeue()); // 10`,pg=`import java.util.NoSuchElementException;

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
System.out.println(queue.dequeue()); // 10`,fg={python:dg,javascript:hg,java:pg,"c++":`#include <iostream>
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
Console.WriteLine(queue.Dequeue()); // 10`},mg=`class Node:
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
print(ll.search(20))  # 1`,gg=`class Node {
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
ll.insertAtTail(30);`,vg=`public class SinglyLinkedList<T> {
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
ll.insertAtTail(30);`,yg={python:mg,javascript:gg,java:vg,"c++":`#include <iostream>
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
ll.InsertAtTail(30);`},xg=`class TreeNode:
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
print("Level:     ", tree.levelorder_traversal())  # [50, 30, 70, 20, 40, 60, 80]`,jg=`class TreeNode {
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
console.log("Level:    ", tree.levelOrderTraversal());  // [50, 30, 70, 20, 40, 60, 80]`,kg=`import java.util.*;

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
System.out.println("Level:     " + tree.levelOrderTraversal());`,Ng={python:xg,javascript:jg,java:kg,"c++":`#include <iostream>
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
Console.WriteLine("Level:     " + string.Join(", ", tree.LevelOrderTraversal()));`},wg=`class HashTable:
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
print(ht.get("banana"))  # 3`,bg=`class HashTable {
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
console.log(ht.get("apple"));  // 5`,Sg=`public class HashTable<K, V> {
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
System.out.println(ht.get("apple")); // 5`,Tg={python:wg,javascript:bg,java:Sg,"c++":`#include <iostream>
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
Console.WriteLine(ht.Get("apple")); // 5`},Cg=`class Node:
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
ht.delete("banana")`,Eg=`class Node {
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
console.log(ht.search("apple"));  // 5`,Lg=`public class HashTableChaining<K, V> {
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
System.out.println(ht.search("apple"));  // 5`,Rg={python:Cg,javascript:Eg,java:Lg,"c++":`#include <iostream>
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
Console.WriteLine(ht.Search("apple"));  // 5`},Og=`class TreeNode:
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
print("After delete 30:", bst.inorder())  # [20, 40, 50, 60, 70, 80]`,_g=`class TreeNode {
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
console.log("After delete 30:", bst.inorder());  // [20, 40, 50, 60, 70, 80]`,Pg=`import java.util.*;

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
System.out.println("After delete: " + bst.inorder());  // [20, 40, 50, 60, 70, 80]`,Ig={python:Og,javascript:_g,java:Pg,"c++":`#include <iostream>
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
Console.WriteLine("After delete: " + string.Join(", ", bst.Inorder()));`},zg=`class AVLNode:
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
# Tree automatically balances after each insert!`,Mg=`class AVLNode {
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
[30, 20, 40, 10, 25, 35, 50].forEach(v => avl.insert(v));`,Ag=`class AVLNode {
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
for (int v : new int[]{30, 20, 40, 10, 25}) avl.insert(v);`,Vg={python:zg,javascript:Mg,java:Ag,"c++":`#include <algorithm>
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

// Usage: var avl = new AVLTree(); foreach(var v in new[]{30,20,40}) avl.Insert(v);`},Fg=`class SplayNode:
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
print("Root:", splay.root.key)  # 20`,Dg=`class SplayNode {
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
splay.search(20); // 20 moves to root`,$g=`class SplayNode {
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
st.search(20); // 20 is now root`,Hg={python:Fg,javascript:Dg,java:$g,"c++":`struct SplayNode {
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

// Usage: var st = new SplayTree(); foreach(var v in new[]{50,30,70}) st.Insert(v);`},Bg=`class MinHeap:
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
print("New min:", heap.peek())  # 2`,qg=`class MinHeap {
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
console.log("Extract:", heap.extractMin());  // 1`,Ug=`import java.util.*;

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
System.out.println("Min: " + heap.peek());  // 1`,Kg={python:Bg,javascript:qg,java:Ug,"c++":`#include <vector>
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

// Usage: var h = new MinHeap(); foreach(var v in new[]{5,3,8,1}) h.Insert(v);`},Wg=`class MaxHeap:
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
print("New max:", heap.peek())  # 8`,Qg=`class MaxHeap {
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
console.log("Extract:", heap.extractMax());  // 9`,Gg=`import java.util.*;

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
System.out.println("Max: " + heap.peek());  // 9`,Xg={python:Wg,javascript:Qg,java:Gg,"c++":`#include <vector>
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

// Usage: var h = new MaxHeap(); foreach(var v in new[]{5,3,8,9}) h.Insert(v);`},Zg=`from collections import defaultdict

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
print(g.get_neighbors('A'))  # [('B', 1), ('C', 1)]`,Jg=`class Graph {
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
console.log(g.getNeighbors('A'));`,Yg=`import java.util.*;

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
g.addEdge("A", "C");`,ev={python:Zg,javascript:Jg,java:Yg,"c++":`#include <iostream>
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
g.AddEdge("A", "C");`},nv=`from collections import deque

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

print(bfs(graph, 'A'))  # ['A', 'B', 'C', 'D', 'E', 'F']`,tv=`function bfs(graph, start) {
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

console.log(bfs(graph, 'A')); // ['A', 'B', 'C', 'D', 'E', 'F']`,rv=`import java.util.*;

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
}`,sv={python:nv,javascript:tv,java:rv,"c++":`#include <iostream>
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
}`},av=`def dfs(graph, start):
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

print(dfs(graph, 'A'))  # ['A', 'B', 'D', 'E', 'F', 'C']`,iv=`function dfs(graph, start) {
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

console.log(dfs(graph, 'A'));`,lv=`import java.util.*;

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
}`,ov={python:av,javascript:iv,java:lv,"c++":`#include <iostream>
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
}`},Fa={stack:ug,queue:fg,linkedlist:yg,binarytree:Ng,hashtable:Tg,hashtableChaining:Rg,bst:Ig,avl:Vg,splay:Hg,minheap:Kg,maxheap:Xg,graph:ev,bfs:sv,dfs:ov};function Te({dataStructure:e}){var h;const[n,r]=g.useState("python"),[s,a]=g.useState(!1),i=["python","javascript","java","c++","c#"],l=i.filter(f=>{var N;return(N=Fa[e])==null?void 0:N[f]}),o=l.length>0?l:i,c=((h=Fa[e])==null?void 0:h[n])||"Code not available for this data structure";g.useEffect(()=>{var f;!((f=Fa[e])!=null&&f[n])&&l.length>0&&r(l[0])},[e,n,l]);const d=f=>({python:"Python",javascript:"JavaScript",java:"Java","c++":"C++","c#":"C#"})[f]||f,u=()=>{navigator.clipboard.writeText(c),a(!0),setTimeout(()=>a(!1),2e3)};return t.jsxs("div",{className:"code-section",children:[t.jsxs("h2",{children:[t.jsx(hc,{})," Implementation"]}),t.jsx("div",{className:"code-tabs",children:o.map(f=>t.jsxs("button",{className:`tab-btn ${n===f?"active":""}`,onClick:()=>r(f),children:[t.jsx(hc,{}),d(f)]},f))}),t.jsx("div",{className:"code-panels",children:t.jsx("div",{className:"code-panel active",children:t.jsxs("pre",{children:[t.jsxs("button",{className:"copy-btn",onClick:u,children:[t.jsx(Vm,{})," ",s?"Copied!":"Copy"]}),t.jsx("code",{children:c})]})})})]})}function hn({message:e}){if(!(e!=null&&e.text))return null;const n=e.type||"info";return t.jsx("div",{className:`message message-${n}`,children:e.text})}async function ve(e){return await(await fetch(e)).json()}async function Z(e,n){return await(await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json()}async function Ws(e,n=null){const r={method:"DELETE",headers:{"Content-Type":"application/json"}};return n&&(r.body=JSON.stringify(n)),await(await fetch(e,r)).json()}function pn(e=3e3){const[n,r]=g.useState(null),s=g.useRef(null),a=g.useCallback(()=>{r(null),s.current&&(clearTimeout(s.current),s.current=null)},[]),i=g.useCallback((l,o="info")=>{r({text:l,type:o}),s.current&&clearTimeout(s.current),s.current=setTimeout(()=>{r(null),s.current=null},e)},[e]);return g.useEffect(()=>a,[a]),{message:n,showMessage:i,clearMessage:a}}function cv(){const[e,n]=g.useState([]),[r,s]=g.useState(0),[a,i]=g.useState("Empty"),[l]=g.useState(10),{message:o,showMessage:c}=pn(3e3),[d,u]=g.useState("");g.useEffect(()=>{h()},[]);const h=async()=>{try{const p=await ve("/api/stack");n(p.items||[]),s(p.size||0),i(p.top!==null&&p.top!==void 0?p.top:"Empty")}catch(p){console.error("Error loading stack:",p)}},f=async()=>{if(!d||d.trim()===""){c("Please enter a number!","error");return}const p=Number(d);if(isNaN(p)){c("Please enter a valid number!","error");return}try{const m=await Z("/api/stack/push",{value:p});if(m.error){c(m.error,"error");return}n(m.items||[]),s(m.size||0),i(m.top!==null&&m.top!==void 0?m.top:"Empty"),c(`Pushed ${p} to stack!`,"success"),u("")}catch(m){console.error("Push error:",m),c("Error pushing to stack. Is Flask running?","error")}},N=async()=>{try{const p=await Z("/api/stack/pop",{});if(p.error){c(p.error,"error");return}n(p.items||[]),s(p.size||0),i(p.top!==null&&p.top!==void 0?p.top:"Empty"),c(`Popped ${p.popped} from stack!`,"success")}catch{c("Error popping from stack","error")}},k=async()=>{try{const p=await ve("/api/stack/peek");if(p.error){c(p.error,"error");return}c(`Top element is: ${p.top}`,"info")}catch{c("Error peeking stack","error")}},j=async()=>{try{await Z("/api/stack/clear",{}),n([]),s(0),i("Empty"),c("Stack cleared!","success")}catch{c("Error clearing stack","error")}},y=p=>{p.key==="Enter"&&f()};return t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"intro-layout",children:[t.jsxs("div",{className:"concept-box",children:[t.jsxs("div",{className:"concept-header",children:[t.jsx(Je,{className:"icon-sm"}),t.jsx("span",{children:"What is a Stack?"})]}),t.jsxs("div",{className:"concept-content",children:[t.jsxs("p",{children:["A ",t.jsx("strong",{children:"Stack"})," is a linear data structure that follows the ",t.jsx("strong",{children:"LIFO"})," (Last In, First Out) principle."]}),t.jsxs("div",{className:"concept-analogy",children:[t.jsx(Fe,{}),t.jsxs("span",{children:["Think of a stack of plates - you can only add or remove from the ",t.jsx("strong",{children:"top"}),"!"]})]}),t.jsxs("div",{className:"concept-operations",children:[t.jsxs("div",{className:"op-item",children:[t.jsx("span",{className:"op-name",children:"Push"}),t.jsx("span",{className:"op-desc",children:"Add to top"}),t.jsx("span",{className:"op-complexity",children:"O(1)"})]}),t.jsxs("div",{className:"op-item",children:[t.jsx("span",{className:"op-name",children:"Pop"}),t.jsx("span",{className:"op-desc",children:"Remove from top"}),t.jsx("span",{className:"op-complexity",children:"O(1)"})]}),t.jsxs("div",{className:"op-item",children:[t.jsx("span",{className:"op-name",children:"Peek"}),t.jsx("span",{className:"op-desc",children:"View top element"}),t.jsx("span",{className:"op-complexity",children:"O(1)"})]})]}),t.jsxs("div",{className:"concept-uses",children:[t.jsx("strong",{children:"Common Uses:"}),t.jsxs("ul",{children:[t.jsx("li",{children:"Browser back/forward buttons"}),t.jsx("li",{children:"Undo/Redo functionality"}),t.jsx("li",{children:"Function call stack"}),t.jsx("li",{children:"Expression evaluation"})]})]})]})]}),t.jsx(Se,{context:"Stack data structure"})]}),t.jsxs("div",{className:"visualizer-layout",children:[t.jsxs("div",{className:"control-panel",children:[t.jsx("h2",{children:"Stack Operations"}),t.jsxs("div",{className:"operation-group",children:[t.jsx("label",{htmlFor:"pushValue",children:"Push (Add to top)"}),t.jsxs("div",{className:"input-group",children:[t.jsx("input",{type:"text",id:"pushValue",value:d,onChange:p=>u(p.target.value),onKeyPress:y,placeholder:"Enter a value"}),t.jsx("button",{onClick:f,className:"btn btn-push",children:"Push"})]})]}),t.jsxs("div",{className:"operation-group",children:[t.jsx("label",{children:"Other Operations"}),t.jsxs("div",{className:"btn-group",children:[t.jsx("button",{onClick:N,className:"btn btn-pop",children:"Pop"}),t.jsx("button",{onClick:k,className:"btn btn-peek",children:"Peek"}),t.jsx("button",{onClick:j,className:"btn btn-clear",children:"Clear"})]})]}),t.jsxs("div",{className:"info-panel",children:[t.jsxs("div",{className:"info-item",children:[t.jsx("span",{className:"info-label",children:"Size:"}),t.jsx("span",{className:"info-value",children:r})]}),t.jsxs("div",{className:"info-item",children:[t.jsx("span",{className:"info-label",children:"Top:"}),t.jsx("span",{className:"info-value",children:a})]}),t.jsxs("div",{className:"info-item",children:[t.jsx("span",{className:"info-label",children:"Max Size:"}),t.jsx("span",{className:"info-value",children:l})]})]}),t.jsx(hn,{message:o})]}),t.jsxs("div",{className:"visual-panel",children:[t.jsx("h2",{children:"Stack Visualization"}),t.jsxs("div",{className:"stack-container",children:[t.jsx("div",{className:"stack-visual",children:e.length===0?t.jsx("div",{className:"stack-empty",children:"Stack is empty. Push some items!"}):e.slice().reverse().map((p,m)=>t.jsx("div",{className:"stack-item",children:p},m))}),t.jsx("div",{className:"stack-base",children:t.jsx("span",{children:"BOTTOM"})})]})]})]}),t.jsx(Te,{dataStructure:"stack"})]})}function uv(){const[e,n]=g.useState([]),[r,s]=g.useState(0),[a,i]=g.useState("Empty"),[l]=g.useState(10),{message:o,showMessage:c}=pn(3e3),[d,u]=g.useState("");g.useEffect(()=>{h()},[]);const h=async()=>{try{const y=await ve("/api/queue");n(y.items||[]),s(y.size||0),i(y.front!==null&&y.front!==void 0?y.front:"Empty")}catch(y){console.error("Error loading queue:",y)}},f=async()=>{if(!d||d.trim()===""){c("Please enter a number!","error");return}const y=Number(d);if(isNaN(y)){c("Please enter a valid number!","error");return}try{const p=await Z("/api/queue/enqueue",{value:y});if(p.error){c(p.error,"error");return}n(p.items||[]),s(p.size||0),i(p.front!==null&&p.front!==void 0?p.front:"Empty"),c(`Enqueued ${y}!`,"success"),u("")}catch(p){console.error("Enqueue error:",p),c("Error enqueueing. Is Flask running?","error")}},N=async()=>{try{const y=await Z("/api/queue/dequeue",{});if(y.error){c(y.error,"error");return}n(y.items||[]),s(y.size||0),i(y.front!==null&&y.front!==void 0?y.front:"Empty"),c(`Dequeued ${y.dequeued} from queue!`,"success")}catch{c("Error dequeuing from queue","error")}},k=async()=>{try{const y=await ve("/api/queue/peek");if(y.error){c(y.error,"error");return}c(`Front element is: ${y.front}`,"info")}catch{c("Error peeking queue","error")}},j=async()=>{try{await Z("/api/queue/clear",{}),n([]),s(0),i("Empty"),c("Queue cleared!","success")}catch{c("Error clearing queue","error")}};return t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"intro-layout",children:[t.jsxs("div",{className:"concept-box",children:[t.jsxs("div",{className:"concept-header",children:[t.jsx(Je,{className:"icon-sm"}),t.jsx("span",{children:"What is a Queue?"})]}),t.jsxs("div",{className:"concept-content",children:[t.jsxs("p",{children:["A ",t.jsx("strong",{children:"Queue"})," is a linear data structure that follows the ",t.jsx("strong",{children:"FIFO"})," (First In, First Out) principle."]}),t.jsxs("div",{className:"concept-analogy",children:[t.jsx(Fe,{}),t.jsxs("span",{children:["Think of a line at a store – the first person in line gets served ",t.jsx("strong",{children:"first"}),"!"]})]}),t.jsxs("div",{className:"concept-operations",children:[t.jsxs("div",{className:"op-item",children:[t.jsx("span",{className:"op-name",children:"Enqueue"}),t.jsx("span",{className:"op-desc",children:"Add to the back"}),t.jsx("span",{className:"op-complexity",children:"O(1)"})]}),t.jsxs("div",{className:"op-item",children:[t.jsx("span",{className:"op-name",children:"Dequeue"}),t.jsx("span",{className:"op-desc",children:"Remove from the front"}),t.jsx("span",{className:"op-complexity",children:"O(1)"})]}),t.jsxs("div",{className:"op-item",children:[t.jsx("span",{className:"op-name",children:"Peek"}),t.jsx("span",{className:"op-desc",children:"View the front element"}),t.jsx("span",{className:"op-complexity",children:"O(1)"})]})]})]})]}),t.jsx(Se,{context:"Queue data structure"})]}),t.jsxs("div",{className:"visualizer-layout",children:[t.jsxs("div",{className:"control-panel",children:[t.jsx("h2",{children:"Queue Operations"}),t.jsxs("div",{className:"operation-group",children:[t.jsx("label",{htmlFor:"enqueueValue",children:"Enqueue (Add to back)"}),t.jsxs("div",{className:"input-group",children:[t.jsx("input",{type:"text",id:"enqueueValue",value:d,onChange:y=>u(y.target.value),onKeyPress:y=>y.key==="Enter"&&f(),placeholder:"Enter a value"}),t.jsx("button",{onClick:f,className:"btn btn-enqueue",children:"Enqueue"})]})]}),t.jsxs("div",{className:"operation-group",children:[t.jsx("label",{children:"Other Operations"}),t.jsxs("div",{className:"btn-group",children:[t.jsx("button",{onClick:N,className:"btn btn-dequeue",children:"Dequeue"}),t.jsx("button",{onClick:k,className:"btn btn-peek",children:"Peek"}),t.jsx("button",{onClick:j,className:"btn btn-clear",children:"Clear"})]})]}),t.jsxs("div",{className:"info-panel",children:[t.jsxs("div",{className:"info-item",children:[t.jsx("span",{className:"info-label",children:"Size:"}),t.jsx("span",{className:"info-value",children:r})]}),t.jsxs("div",{className:"info-item",children:[t.jsx("span",{className:"info-label",children:"Front:"}),t.jsx("span",{className:"info-value",children:a})]}),t.jsxs("div",{className:"info-item",children:[t.jsx("span",{className:"info-label",children:"Max Size:"}),t.jsx("span",{className:"info-value",children:l})]})]}),t.jsx(hn,{message:o})]}),t.jsxs("div",{className:"visual-panel",children:[t.jsx("h2",{children:"Queue Visualization"}),t.jsxs("div",{className:"queue-container",children:[t.jsx("div",{className:"queue-label",children:t.jsx("span",{className:"front-marker",children:"FRONT →"})}),t.jsx("div",{className:"queue-visual",children:e.length===0?t.jsx("div",{className:"queue-empty",children:"Queue is empty. Enqueue some items!"}):e.map((y,p)=>{const m=p===0,v=p===e.length-1;return t.jsxs("div",{className:`queue-item ${m?"queue-front":""} ${v?"queue-back":""}`,children:[m&&t.jsx("span",{className:"front-label",children:"FRONT"}),y,v&&t.jsx("span",{className:"back-label",children:"BACK"})]},p)})}),t.jsx("div",{className:"queue-label",children:t.jsx("span",{className:"back-marker",children:"← BACK"})})]})]})]}),t.jsx(Te,{dataStructure:"queue"})]})}function dv(){const[e,n]=g.useState([]),[r,s]=g.useState(0),[a,i]=g.useState("Empty"),{message:l,showMessage:o}=pn(3e3),[c,d]=g.useState(""),[u,h]=g.useState(""),[f,N]=g.useState(""),[k,j]=g.useState(""),[y,p]=g.useState(""),[m,v]=g.useState("");g.useEffect(()=>{C()},[]);const C=async()=>{try{const O=await ve("/api/linkedlist");n(O.items||[]),s(O.size||0),i(O.head!==null&&O.head!==void 0?O.head:"Empty")}catch(O){console.error("Error loading linked list:",O)}},S=async()=>{if(!c||c.trim()===""){o("Please enter a number!","error");return}const O=Number(c);if(isNaN(O)){o("Please enter a valid number!","error");return}try{const $=await Z("/api/linkedlist/insert/head",{value:O});if($.error){o($.error,"error");return}n($.items||[]),s($.size||0),i($.head!==null&&$.head!==void 0?$.head:"Empty"),o(`Inserted ${O} at head!`,"success"),d("")}catch($){console.error("Insert error:",$),o("Error inserting. Is Flask running?","error")}},z=async()=>{if(!u||u.trim()===""){o("Please enter a number!","error");return}const O=Number(u);if(isNaN(O)){o("Please enter a valid number!","error");return}try{const $=await Z("/api/linkedlist/insert/tail",{value:O});if($.error){o($.error,"error");return}n($.items||[]),s($.size||0),i($.head!==null&&$.head!==void 0?$.head:"Empty"),o(`Inserted ${O} at tail!`,"success"),h("")}catch($){console.error("Insert error:",$),o("Error inserting. Is Flask running?","error")}},E=async()=>{try{const O=await Z("/api/linkedlist/delete/head",{});if(O.error){o(O.error,"error");return}n(O.items||[]),s(O.size||0),i(O.head!==null&&O.head!==void 0?O.head:"Empty"),o("Deleted head!","success")}catch{o("Error deleting head","error")}},_=async()=>{try{const O=await Z("/api/linkedlist/delete/tail",{});if(O.error){o(O.error,"error");return}n(O.items||[]),s(O.size||0),i(O.head!==null&&O.head!==void 0?O.head:"Empty"),o("Deleted tail!","success")}catch{o("Error deleting tail","error")}},A=async()=>{try{await Z("/api/linkedlist/clear",{}),n([]),s(0),i("Empty"),o("List cleared!","success")}catch{o("Error clearing list","error")}};return t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"intro-layout",children:[t.jsxs("div",{className:"concept-box",children:[t.jsxs("div",{className:"concept-header",children:[t.jsx(Je,{className:"icon-sm"}),t.jsx("span",{children:"What is a Singly Linked List?"})]}),t.jsxs("div",{className:"concept-content",children:[t.jsxs("p",{children:["A ",t.jsx("strong",{children:"Singly Linked List"})," is a linear data structure where each element contains data and a pointer to the next node."]}),t.jsxs("div",{className:"concept-analogy",children:[t.jsx(Fe,{}),t.jsxs("span",{children:["Think of a treasure hunt – each clue points to the ",t.jsx("strong",{children:"next location"}),"!"]})]})]})]}),t.jsx(Se,{context:"Singly Linked List data structure"})]}),t.jsxs("div",{className:"visualizer-layout",children:[t.jsxs("div",{className:"control-panel",children:[t.jsx("h2",{children:"Linked List Operations"}),t.jsxs("div",{className:"operation-group",children:[t.jsx("label",{htmlFor:"insertHeadValue",children:"Insert at Head"}),t.jsxs("div",{className:"input-group",children:[t.jsx("input",{type:"text",id:"insertHeadValue",value:c,onChange:O=>d(O.target.value),onKeyPress:O=>O.key==="Enter"&&S(),placeholder:"Enter a value"}),t.jsx("button",{onClick:S,className:"btn btn-insert",children:"Insert Head"})]})]}),t.jsxs("div",{className:"operation-group",children:[t.jsx("label",{htmlFor:"insertTailValue",children:"Insert at Tail"}),t.jsxs("div",{className:"input-group",children:[t.jsx("input",{type:"text",id:"insertTailValue",value:u,onChange:O=>h(O.target.value),onKeyPress:O=>O.key==="Enter"&&z(),placeholder:"Enter a value"}),t.jsx("button",{onClick:z,className:"btn btn-insert",children:"Insert Tail"})]})]}),t.jsxs("div",{className:"operation-group",children:[t.jsx("label",{children:"Delete Operations"}),t.jsxs("div",{className:"btn-group",children:[t.jsx("button",{onClick:E,className:"btn btn-delete",children:"Delete Head"}),t.jsx("button",{onClick:_,className:"btn btn-delete",children:"Delete Tail"})]})]}),t.jsx("div",{className:"operation-group",children:t.jsx("button",{onClick:A,className:"btn btn-clear full-width",children:"Clear All"})}),t.jsxs("div",{className:"info-panel",children:[t.jsxs("div",{className:"info-item",children:[t.jsx("span",{className:"info-label",children:"Size:"}),t.jsx("span",{className:"info-value",children:r})]}),t.jsxs("div",{className:"info-item",children:[t.jsx("span",{className:"info-label",children:"Head:"}),t.jsx("span",{className:"info-value",children:a})]})]}),t.jsx(hn,{message:l})]}),t.jsxs("div",{className:"visual-panel",children:[t.jsx("h2",{children:"Linked List Visualization"}),t.jsx("div",{className:"linkedlist-container",children:t.jsx("div",{className:"linkedlist-visual",children:e.length===0?t.jsx("div",{className:"linkedlist-empty",children:"List is empty. Insert some nodes!"}):e.map((O,$)=>t.jsx(ot.Fragment,{children:t.jsxs("div",{className:"linkedlist-node",children:[t.jsx("div",{className:"node-value",children:O}),$<e.length-1&&t.jsx("div",{className:"node-arrow",children:"→"})]})},$))})})]})]}),t.jsx(Te,{dataStructure:"linkedlist"})]})}function hv(){const[e,n]=g.useState([]),[r,s]=g.useState(0),[a,i]=g.useState(0),[l,o]=g.useState(0),[c,d]=g.useState(0),{message:u,showMessage:h}=pn(3e3),[f,N]=g.useState(""),[k,j]=g.useState(""),[y,p]=g.useState(""),[m,v]=g.useState(""),[C,S]=g.useState(null),[z,E]=g.useState([]),[_,A]=g.useState(null),[O,$]=g.useState(null);g.useEffect(()=>{Q()},[]);const Q=async()=>{try{const T=await ve("/api/hashtable");n(T.table||[]),s(T.size||0),i(T.capacity||0),o(T.load_factor||0),d(T.collision_count||0)}catch(T){console.error("Error loading hashtable:",T)}},V=T=>{if(!a||a===0)return 0;let x=0;for(let R=0;R<T.length;R++)x=(x*31+T.charCodeAt(R))%a;return x},D=(T,x)=>{const R=V(T),M=[R];let I=R;for(;x[I]&&x[I][0]!==T&&(I=(I+1)%a,M.push(I),!(I===R||M.length>a)););return{originalHash:R,path:M,finalSlot:I}},w=async()=>{if(!f.trim()||!k.trim()){h("Please enter both key and value!","error");return}const T=a>0?V(f.trim()):0,x=e.length>0&&e[T]&&e[T][0]!==f.trim();let R=null;x&&(R=D(f.trim(),e));try{const M=await Z("/api/hashtable/insert",{key:f.trim(),value:k.trim()});if(M.error){h(M.error,"error");return}await Q(),A(f.trim()),x&&R?($({key:f.trim(),originalSlot:R.originalHash,probedSlots:R.path,finalSlot:R.path[R.path.length-1]}),E(R.path),h(`Collision! "${f}" hashed to ${R.originalHash}, probed ${R.path.length} slot(s)`,"warning"),setTimeout(()=>{E([]),$(null)},4e3)):(h(`Inserted "${f}" → slot ${T}`,"success"),S(T),setTimeout(()=>S(null),2e3)),N(""),j(""),setTimeout(()=>A(null),3e3)}catch{h("Error inserting. Is Flask running?","error")}},L=async()=>{if(!y.trim()){h("Please enter a key!","error");return}try{const T=await Z("/api/hashtable/delete",{key:y.trim()});if(T.error){h(T.error,"error");return}await Q(),h(`Deleted "${y}"`,"success"),p("")}catch{h("Error deleting. Is Flask running?","error")}},P=async()=>{if(!m.trim()){h("Please enter a key!","error");return}try{const T=await ve(`/api/hashtable/get?key=${encodeURIComponent(m.trim())}`);if(T.error){h(T.error,"error");return}T.found?h(`Found: "${m}" = ${T.value}`,"success"):h(`Key "${m}" not found`,"error"),v("")}catch{h("Error searching item","error")}},b=async()=>{try{await Z("/api/hashtable/clear",{}),await Q(),E([]),$(null),h("Hashtable cleared!","success")}catch{h("Error clearing hashtable","error")}};return t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"intro-layout",children:[t.jsxs("div",{className:"intro-left",children:[t.jsxs("div",{className:"concept-box",children:[t.jsxs("div",{className:"concept-header",children:[t.jsx(Je,{className:"icon-sm"}),t.jsx("span",{children:"What is a Hash Table?"})]}),t.jsxs("div",{className:"concept-content",children:[t.jsxs("p",{children:["A ",t.jsx("strong",{children:"Hash Table"})," maps keys to values using a hash function for O(1) lookups."]}),t.jsxs("div",{className:"concept-analogy",children:[t.jsx(Fe,{}),t.jsxs("span",{children:["Like a ",t.jsx("strong",{children:"coat check"})," – give them your coat (value), get a ticket number (hash of key)!"]})]})]})]}),t.jsxs("div",{className:"concept-box",style:{marginTop:"1rem"},children:[t.jsxs("div",{className:"concept-header",children:[t.jsx(wn,{className:"icon-sm",style:{color:"#f59e0b"}}),t.jsx("span",{children:"Linear Probing"})]}),t.jsxs("div",{className:"concept-content",children:[t.jsxs("p",{children:["When two keys hash to the same slot (",t.jsx("strong",{children:"collision"}),"), we check the next slot until we find an empty one."]}),t.jsxs("div",{className:"concept-analogy",style:{marginTop:"0.5rem"},children:[t.jsx(Pn,{style:{color:"#3b82f6"}}),t.jsx("span",{children:"Like parking – if spot 3 is taken, try spot 4, then 5..."})]})]})]})]}),t.jsx(Se,{context:"Hash Table with Linear Probing"})]}),t.jsxs("div",{className:"visualizer-layout",children:[t.jsxs("div",{className:"control-panel",children:[t.jsx("h2",{children:"Operations"}),t.jsxs("div",{className:"operation-group",children:[t.jsx("label",{children:"Insert Key-Value"}),t.jsxs("div",{className:"input-group",children:[t.jsx("input",{type:"text",value:f,onChange:T=>N(T.target.value),placeholder:"Key"}),t.jsx("input",{type:"text",value:k,onChange:T=>j(T.target.value),onKeyPress:T=>T.key==="Enter"&&w(),placeholder:"Value"}),t.jsx("button",{onClick:w,className:"btn btn-insert",children:"Insert"})]})]}),t.jsxs("div",{className:"operation-group",children:[t.jsx("label",{children:"Delete Key"}),t.jsxs("div",{className:"input-group",children:[t.jsx("input",{type:"text",value:y,onChange:T=>p(T.target.value),onKeyPress:T=>T.key==="Enter"&&L(),placeholder:"Key"}),t.jsx("button",{onClick:L,className:"btn btn-delete",children:"Delete"})]})]}),t.jsxs("div",{className:"operation-group",children:[t.jsx("label",{children:"Search Key"}),t.jsxs("div",{className:"input-group",children:[t.jsx("input",{type:"text",value:m,onChange:T=>v(T.target.value),onKeyPress:T=>T.key==="Enter"&&P(),placeholder:"Key"}),t.jsx("button",{onClick:P,className:"btn btn-search",children:"Search"})]})]}),t.jsx("div",{className:"operation-group",children:t.jsx("button",{onClick:b,className:"btn btn-clear",children:"Clear Table"})}),t.jsxs("div",{className:"info-panel",children:[t.jsxs("div",{className:"info-item",children:[t.jsx("span",{className:"info-label",children:"Items"}),t.jsxs("span",{className:"info-value",children:[r,"/",a]})]}),t.jsxs("div",{className:"info-item",children:[t.jsx("span",{className:"info-label",children:"Load"}),t.jsxs("span",{className:"info-value",style:{color:l>=.7?"#f59e0b":"inherit"},children:[(l*100).toFixed(0),"%"]})]}),t.jsxs("div",{className:"info-item",children:[t.jsx("span",{className:"info-label",children:"Collisions"}),t.jsx("span",{className:"info-value",style:{color:c>0?"#f59e0b":"inherit"},children:c})]})]}),t.jsxs("div",{className:"rehash-info-box",children:[t.jsx(Vd,{size:16}),t.jsxs("div",{children:[t.jsx("strong",{children:"Rehashing Threshold: 70%"}),t.jsx("p",{children:"In practice, hash tables rehash (double capacity) when load factor reaches ~0.7 to maintain O(1) performance."}),l>=.7?t.jsxs("span",{className:"rehash-warning",children:["Current load (",(l*100).toFixed(0),"%) exceeds threshold!"]}):t.jsxs("span",{className:"rehash-safe",children:["Currently safe (",(l*100).toFixed(0),"% < 70%)"]})]})]}),t.jsx(hn,{message:u})]}),t.jsxs("div",{className:"visual-panel",children:[t.jsx("h2",{children:"Hash Table"}),f&&t.jsxs("div",{className:"hash-demo",children:[t.jsxs("div",{className:"hash-demo-item",children:[t.jsx("span",{className:"hash-demo-label",children:"Key:"}),t.jsxs("span",{className:"hash-demo-key",children:['"',f,'"']})]}),t.jsx(Y,{className:"hash-demo-arrow"}),t.jsx("div",{className:"hash-demo-item",children:t.jsx("span",{className:"hash-demo-label",children:"hash()"})}),t.jsx(Y,{className:"hash-demo-arrow"}),t.jsxs("div",{className:"hash-demo-item",children:[t.jsx("span",{className:"hash-demo-label",children:"Slot:"}),t.jsx("span",{className:"hash-demo-index",children:V(f)})]})]}),O&&t.jsxs("div",{className:"collision-banner",children:[t.jsx(wn,{size:18}),t.jsxs("div",{children:[t.jsx("strong",{children:"Collision Detected!"}),t.jsxs("p",{children:['"',O.key,'" hashed to slot ',t.jsx("span",{className:"slot-badge original",children:O.originalSlot}),O.probedSlots.length>1&&t.jsxs(t.Fragment,{children:[" ","- Probed: ",O.probedSlots.map((T,x)=>t.jsxs("span",{children:[t.jsx("span",{className:`slot-badge ${x===O.probedSlots.length-1?"final":"probed"}`,children:T}),x<O.probedSlots.length-1&&" > "]},x))]})]})]})]}),t.jsx("div",{className:"ht-visual",children:!e||e.length===0?t.jsx("div",{className:"ht-empty",children:"Hash table is empty. Insert some key-value pairs!"}):t.jsx("div",{className:"ht-buckets",children:e.map((T,x)=>{const R=z.includes(x),M=O&&O.originalSlot===x,I=O&&O.finalSlot===x;return t.jsxs("div",{className:`ht-row ${T?"filled":"empty"} 
                        ${C===x?"highlighted":""} 
                        ${_&&T&&T[0]===_?"just-inserted":""}
                        ${R?"probed":""}
                        ${M?"original-hash":""}
                        ${I?"final-slot":""}`,children:[R&&t.jsx("div",{className:"probe-indicator",children:M?"X":I?"O":">"}),t.jsx("div",{className:`ht-key-box ${T?"has-key":""}`,children:T&&t.jsx("span",{className:"ht-key",children:T[0]})}),t.jsx("div",{className:"ht-arrow",children:T&&t.jsx(Y,{size:20})}),t.jsx("div",{className:`ht-index ${M?"collision-index":""}`,children:x}),t.jsx("div",{className:`ht-value-box ${T?"has-value":""}`,children:T?t.jsx("span",{className:"ht-value",children:T[1]}):t.jsx("span",{className:"ht-empty-slot",children:"—"})})]},x)})})}),t.jsxs("div",{className:"ht-legend",children:[t.jsxs("div",{className:"legend-item",children:[t.jsx("div",{className:"legend-color key-color"}),t.jsx("span",{children:"Key"})]}),t.jsxs("div",{className:"legend-item",children:[t.jsx("div",{className:"legend-color index-color"}),t.jsx("span",{children:"Index"})]}),t.jsxs("div",{className:"legend-item",children:[t.jsx("div",{className:"legend-color value-color"}),t.jsx("span",{children:"Value"})]}),z.length>0&&t.jsxs("div",{className:"legend-item",children:[t.jsx("div",{className:"legend-color probe-color"}),t.jsx("span",{children:"Probing Path"})]})]})]})]}),t.jsx(Te,{dataStructure:"hashtable"})]})}const pv={title:"What is Chaining?",description:"Chaining handles collisions by storing multiple key-value pairs in a linked list at each slot.",codeExample:"slot[hash] → [key1, val1] → [key2, val2] → ...",analogy:"Like a coat rack - multiple coats can hang on the same hook!"},fv={title:"Chaining vs Probing",chaining:{label:"Chaining:",color:"#22c55e",points:["Uses linked lists","Load factor can exceed 1.0"]},probing:{label:"Probing:",color:"#f59e0b",points:["Finds next empty slot","Load factor must stay below 1.0"]},summary:"Chaining is simpler and handles high load factors better, but uses extra memory for pointers."},mv={title:"Chaining Advantage",description:"With chaining, load factor can exceed 1.0 because each slot can hold multiple items in a chain.",highLoadThreshold:1.5,highLoadMessage:"High load ({loadFactor}) - chains getting long!",safeMessage:"Load factor: {loadFactor}"},gv={title:"Rehash Table",description:"Doubles the table capacity and redistributes all items to reduce chain lengths.",buttonText:"Rehash",recommendThreshold:1.5},vv=[{type:"color",className:"key-color",label:"Key"},{type:"color",className:"index-color",label:"Index"},{type:"color",className:"value-color",label:"Value"},{type:"icon",icon:"Link",color:"#8b5cf6",label:"Chain (Linked List)"}],yv={insert:{label:"Insert Key-Value",keyPlaceholder:"Key",valuePlaceholder:"Value",buttonText:"Insert"},delete:{label:"Delete Key",placeholder:"Key",buttonText:"Delete"},search:{label:"Search Key",placeholder:"Key",buttonText:"Search"},clear:{buttonText:"Clear Table"},rehash:{buttonText:"Rehash"}},xv={items:"Items",capacity:"Capacity",load:"Load",collisions:"Collisions"},jv={emptyTable:"Hash table is empty. Insert some key-value pairs!",insertSuccess:'Inserted "{key}" at slot {index}',insertUpdated:'Updated "{key}" at slot {index}',insertCollision:'Collision! Added "{key}" to chain at slot {index}',deleteSuccess:'Deleted "{key}"',searchFound:'Found: "{key}" = {value}',searchNotFound:'Key "{key}" not found',clearSuccess:"Hashtable cleared!",rehashSuccess:"Rehashed! Capacity: {oldCapacity} -> {newCapacity}",rehashEmpty:"Nothing to rehash - table is empty!",errorNoKey:"Please enter a key!",errorNoKeyValue:"Please enter both key and value!",errorInsert:"Error inserting. Is Flask running?",errorDelete:"Error deleting. Is Flask running?",errorSearch:"Error searching item",errorClear:"Error clearing hashtable",errorRehash:"Error rehashing. Is Flask running?"},K={concept:pv,comparison:fv,chainingAdvantage:mv,rehash:gv,legend:vv,operations:yv,infoLabels:xv,messages:jv};function kv(){const[e,n]=g.useState([]),[r,s]=g.useState(0),[a,i]=g.useState(0),[l,o]=g.useState(0),[c,d]=g.useState(0),{message:u,showMessage:h}=pn(3e3),[f,N]=g.useState(""),[k,j]=g.useState(""),[y,p]=g.useState(""),[m,v]=g.useState(""),[C,S]=g.useState(null),[z,E]=g.useState(null),[_,A]=g.useState(!1);g.useEffect(()=>{O()},[]);const O=async()=>{try{const L=await ve("/api/hashtable_chaining");n(L.table||[]),s(L.size||0),i(L.capacity||0),o(L.load_factor||0),d(L.collision_count||0)}catch(L){console.error("Error loading hashtable:",L)}},$=L=>{if(!a||a===0)return 0;let P=0;for(let b=0;b<L.length;b++)P=(P*31+L.charCodeAt(b))%a;return P},Q=async()=>{if(!f.trim()||!k.trim()){h(K.messages.errorNoKeyValue,"error");return}try{const L=await Z("/api/hashtable_chaining/insert",{key:f.trim(),value:k.trim()});if(L.error){h(L.error,"error");return}await O(),E(f.trim()),L.updated?h(K.messages.insertUpdated.replace("{key}",f).replace("{index}",L.index),"info"):L.collision?h(K.messages.insertCollision.replace("{key}",f).replace("{index}",L.index),"warning"):h(K.messages.insertSuccess.replace("{key}",f).replace("{index}",L.index),"success"),S(L.index),setTimeout(()=>{S(null),E(null)},3e3),N(""),j("")}catch{h(K.messages.errorInsert,"error")}},V=async()=>{if(!y.trim()){h(K.messages.errorNoKey,"error");return}try{const L=await Z("/api/hashtable_chaining/delete",{key:y.trim()});if(L.error){h(L.error,"error");return}await O(),h(K.messages.deleteSuccess.replace("{key}",y),"success"),p("")}catch{h(K.messages.errorDelete,"error")}},D=async()=>{if(!m.trim()){h(K.messages.errorNoKey,"error");return}try{const L=await ve(`/api/hashtable_chaining/get?key=${encodeURIComponent(m.trim())}`);if(L.error){h(L.error,"error");return}L.found?h(K.messages.searchFound.replace("{key}",m).replace("{value}",L.value),"success"):h(K.messages.searchNotFound.replace("{key}",m),"error"),v("")}catch{h(K.messages.errorSearch,"error")}},w=async()=>{try{await Z("/api/hashtable_chaining/clear",{}),await O(),S(null),E(null),h(K.messages.clearSuccess,"success")}catch{h(K.messages.errorClear,"error")}};return t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"intro-layout",children:[t.jsxs("div",{className:"intro-left",children:[t.jsxs("div",{className:"concept-box",children:[t.jsxs("div",{className:"concept-header",children:[t.jsx(Je,{className:"icon-sm"}),t.jsx("span",{children:K.concept.title})]}),t.jsxs("div",{className:"concept-content",children:[t.jsxs("p",{children:[t.jsx("strong",{children:"Chaining"})," ",K.concept.description.replace("Chaining ","")]}),t.jsx("div",{style:{background:"var(--bg-tertiary)",padding:"0.75rem",borderRadius:"8px",marginTop:"0.5rem",fontFamily:"monospace",fontSize:"0.9rem"},children:t.jsx("div",{children:K.concept.codeExample})}),t.jsxs("div",{className:"concept-analogy",style:{marginTop:"0.75rem"},children:[t.jsx(Fe,{}),t.jsx("span",{children:K.concept.analogy})]})]})]}),t.jsxs("div",{className:"concept-box",style:{marginTop:"1rem"},children:[t.jsxs("div",{className:"concept-header",children:[t.jsx(Pn,{className:"icon-sm",style:{color:"#3b82f6"}}),t.jsx("span",{children:K.comparison.title})]}),t.jsxs("div",{className:"concept-content",children:[t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",fontSize:"0.85rem"},children:[t.jsxs("div",{children:[t.jsx("strong",{style:{color:K.comparison.chaining.color},children:K.comparison.chaining.label}),K.comparison.chaining.points.map((L,P)=>t.jsx("div",{style:{marginTop:"0.25rem"},children:L},P))]}),t.jsxs("div",{children:[t.jsx("strong",{style:{color:K.comparison.probing.color},children:K.comparison.probing.label}),K.comparison.probing.points.map((L,P)=>t.jsx("div",{style:{marginTop:"0.25rem"},children:L},P))]})]}),t.jsx("p",{style:{marginTop:"0.75rem",fontSize:"0.85rem"},children:K.comparison.summary})]})]})]}),t.jsx(Se,{context:"Hash Table with Chaining"})]}),t.jsxs("div",{className:"visualizer-layout",children:[t.jsxs("div",{className:"control-panel",children:[t.jsx("h2",{children:"Operations"}),t.jsxs("div",{className:"operation-group",children:[t.jsx("label",{children:K.operations.insert.label}),t.jsxs("div",{className:"input-group",children:[t.jsx("input",{type:"text",value:f,onChange:L=>N(L.target.value),placeholder:K.operations.insert.keyPlaceholder}),t.jsx("input",{type:"text",value:k,onChange:L=>j(L.target.value),onKeyDown:L=>L.key==="Enter"&&Q(),placeholder:K.operations.insert.valuePlaceholder}),t.jsx("button",{onClick:Q,className:"btn btn-insert",children:K.operations.insert.buttonText})]})]}),t.jsxs("div",{className:"operation-group",children:[t.jsx("label",{children:K.operations.delete.label}),t.jsxs("div",{className:"input-group",children:[t.jsx("input",{type:"text",value:y,onChange:L=>p(L.target.value),onKeyDown:L=>L.key==="Enter"&&V(),placeholder:K.operations.delete.placeholder}),t.jsx("button",{onClick:V,className:"btn btn-delete",children:K.operations.delete.buttonText})]})]}),t.jsxs("div",{className:"operation-group",children:[t.jsx("label",{children:K.operations.search.label}),t.jsxs("div",{className:"input-group",children:[t.jsx("input",{type:"text",value:m,onChange:L=>v(L.target.value),onKeyDown:L=>L.key==="Enter"&&D(),placeholder:K.operations.search.placeholder}),t.jsx("button",{onClick:D,className:"btn btn-search",children:K.operations.search.buttonText})]})]}),t.jsx("div",{className:"operation-group",style:{display:"flex",gap:"0.5rem"},children:t.jsx("button",{onClick:w,className:"btn btn-clear",children:K.operations.clear.buttonText})}),t.jsxs("div",{className:"info-panel",children:[t.jsxs("div",{className:"info-item",children:[t.jsx("span",{className:"info-label",children:K.infoLabels.items}),t.jsx("span",{className:"info-value",children:r})]}),t.jsxs("div",{className:"info-item",children:[t.jsx("span",{className:"info-label",children:K.infoLabels.capacity}),t.jsx("span",{className:"info-value",children:a})]}),t.jsxs("div",{className:"info-item",children:[t.jsx("span",{className:"info-label",children:K.infoLabels.load}),t.jsx("span",{className:"info-value",style:{color:l>=1?"#f59e0b":"inherit"},children:l.toFixed(2)})]}),t.jsxs("div",{className:"info-item",children:[t.jsx("span",{className:"info-label",children:K.infoLabels.collisions}),t.jsx("span",{className:"info-value",style:{color:c>0?"#f59e0b":"inherit"},children:c})]})]}),t.jsxs("div",{className:"rehash-info-box",children:[t.jsx(Us,{size:16}),t.jsxs("div",{children:[t.jsx("strong",{children:K.chainingAdvantage.title}),t.jsx("p",{children:K.chainingAdvantage.description}),l>=K.chainingAdvantage.highLoadThreshold?t.jsxs("div",{className:"rehash-recommend",children:[t.jsx(Ul,{size:14}),t.jsx("span",{className:"rehash-warning",children:K.chainingAdvantage.highLoadMessage.replace("{loadFactor}",l.toFixed(2))})]}):t.jsx("span",{className:"rehash-safe",children:K.chainingAdvantage.safeMessage.replace("{loadFactor}",l.toFixed(2))})]})]}),t.jsx(hn,{message:u})]}),t.jsxs("div",{className:"visual-panel",children:[t.jsx("h2",{children:"Hash Table (Chaining)"}),f&&t.jsxs("div",{className:"hash-demo",children:[t.jsxs("div",{className:"hash-demo-item",children:[t.jsx("span",{className:"hash-demo-label",children:"Key:"}),t.jsxs("span",{className:"hash-demo-key",children:['"',f,'"']})]}),t.jsx(Y,{className:"hash-demo-arrow"}),t.jsx("div",{className:"hash-demo-item",children:t.jsx("span",{className:"hash-demo-label",children:"hash()"})}),t.jsx(Y,{className:"hash-demo-arrow"}),t.jsxs("div",{className:"hash-demo-item",children:[t.jsx("span",{className:"hash-demo-label",children:"Slot:"}),t.jsx("span",{className:"hash-demo-index",children:$(f)})]})]}),t.jsx("div",{className:"ht-chaining-visual",children:!e||e.length===0?t.jsx("div",{className:"ht-empty",children:K.messages.emptyTable}):t.jsx("div",{className:"ht-chaining-buckets",children:e.map((L,P)=>{const b=C===P,T=L&&Array.isArray(L)&&L.length>0,x=T?L.length:0;return t.jsxs("div",{className:`ht-chaining-row ${T?"filled":"empty"} ${b?"highlighted":""}`,children:[t.jsxs("div",{className:"ht-chaining-index",children:[t.jsx("span",{className:"index-number",children:P}),x>1&&t.jsx("span",{className:"chain-count",children:x})]}),t.jsx("div",{className:"ht-chaining-arrow-container",children:t.jsx(Y,{size:18,className:"bucket-arrow"})}),t.jsx("div",{className:"ht-chaining-content",children:T?t.jsx("div",{className:"ht-chaining-chain",children:L.map((R,M)=>{const I=z&&R.key===z;return t.jsxs(ot.Fragment,{children:[t.jsxs("div",{className:`ht-chaining-node ${I?"just-inserted":""} ${M>0?"collision-node":""}`,children:[t.jsx("div",{className:"node-key",children:R.key}),t.jsx("div",{className:"node-separator"}),t.jsx("div",{className:"node-value",children:R.value})]}),M<L.length-1&&t.jsx("div",{className:"chain-link",children:t.jsx(Y,{size:16})})]},M)})}):t.jsx("div",{className:"ht-chaining-empty-slot",children:t.jsx("span",{children:"Empty"})})})]},P)})})}),t.jsx("div",{className:"ht-legend",children:K.legend.map((L,P)=>t.jsxs("div",{className:"legend-item",children:[L.type==="color"?t.jsx("div",{className:`legend-color ${L.className}`}):t.jsx(Us,{size:14,style:{color:L.color}}),t.jsx("span",{children:L.label})]},P))})]})]}),t.jsx(Te,{dataStructure:"hashtableChaining"})]})}function Nv(){const[e,n]=g.useState([]),[r,s]=g.useState(0),[a,i]=g.useState(0),[l,o]=g.useState(0),{message:c,showMessage:d}=pn(3e3),[u,h]=g.useState(""),[f,N]=g.useState(""),[k,j]=g.useState(""),[y,p]=g.useState(""),[m,v]=g.useState(null),[C,S]=g.useState([]),[z,E]=g.useState(null),[_,A]=g.useState(null);g.useEffect(()=>{O()},[]);const O=async()=>{try{const P=await ve("/api/hashtable_quadratic");n(P.table||[]),s(P.size||0),i(P.capacity||0),o(P.load_factor||0)}catch(P){console.error("Error loading hashtable:",P)}},$=P=>{if(!a||a===0)return 0;let b=0;for(let T=0;T<P.length;T++)b=(b*31+P.charCodeAt(T))%a;return b},Q=(P,b)=>{var R;const T=$(P),x=[];for(let M=0;M<a;M++){const I=(T+M*M)%a;if(x.push({index:I,i:M,formula:`(${T} + ${M}²) % ${a} = ${I}`}),!b[I]||b[I][0]===P)break}return{originalHash:T,path:x,finalSlot:(R=x[x.length-1])==null?void 0:R.index}},V=async()=>{if(!u.trim()||!f.trim()){d("Please enter both key and value!","error");return}const P=a>0?$(u.trim()):0,b=e.length>0&&e[P]&&e[P]!=="DELETED"&&e[P][0]!==u.trim();let T=null;b&&(T=Q(u.trim(),e));try{const x=await Z("/api/hashtable_quadratic/insert",{key:u.trim(),value:f.trim()});if(x.error){d(x.error,"error");return}await O(),E(u.trim()),b&&T?(A({key:u.trim(),originalSlot:T.originalHash,probedSlots:T.path,finalSlot:x.final_index}),S(T.path.map(R=>R.index)),d(`Collision! Quadratic probing: ${T.path.length} probe(s)`,"warning"),setTimeout(()=>{S([]),A(null)},5e3)):(d(`Inserted "${u}" → slot ${P}`,"success"),v(P),setTimeout(()=>v(null),2e3)),h(""),N(""),setTimeout(()=>E(null),3e3)}catch{d("Error inserting. Is Flask running?","error")}},D=async()=>{if(!k.trim()){d("Please enter a key!","error");return}try{const P=await Z("/api/hashtable_quadratic/delete",{key:k.trim()});if(P.error){d(P.error,"error");return}await O(),d(`Deleted "${k}"`,"success"),j("")}catch{d("Error deleting. Is Flask running?","error")}},w=async()=>{if(!y.trim()){d("Please enter a key!","error");return}try{const P=await ve(`/api/hashtable_quadratic/get?key=${encodeURIComponent(y.trim())}`);if(P.error){d(P.error,"error");return}P.found?d(`Found: "${y}" = ${P.value}`,"success"):d(`Key "${y}" not found`,"error"),p("")}catch{d("Error searching item","error")}},L=async()=>{try{await Z("/api/hashtable_quadratic/clear",{}),await O(),S([]),A(null),d("Hashtable cleared!","success")}catch{d("Error clearing hashtable","error")}};return t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"intro-layout",children:[t.jsxs("div",{className:"intro-left",children:[t.jsxs("div",{className:"concept-box",children:[t.jsxs("div",{className:"concept-header",children:[t.jsx(Je,{className:"icon-sm"}),t.jsx("span",{children:"What is Quadratic Probing?"})]}),t.jsxs("div",{className:"concept-content",children:[t.jsxs("p",{children:[t.jsx("strong",{children:"Quadratic Probing"})," is a collision resolution technique where we probe at quadratically increasing intervals."]}),t.jsxs("div",{style:{background:"var(--bg-tertiary)",padding:"0.75rem",borderRadius:"8px",marginTop:"0.5rem",fontFamily:"monospace",fontSize:"0.9rem"},children:[t.jsx("div",{children:"probe(i) = (hash + i²) % capacity"}),t.jsx("div",{style:{color:"var(--text-muted)",marginTop:"0.25rem"},children:"i = 0, 1, 4, 9, 16, 25..."})]}),t.jsxs("div",{className:"concept-analogy",style:{marginTop:"0.75rem"},children:[t.jsx(Fe,{}),t.jsxs("span",{children:["Unlike linear probing, we jump further each time – reducing ",t.jsx("strong",{children:"clustering"}),"!"]})]})]})]}),t.jsxs("div",{className:"concept-box",style:{marginTop:"1rem"},children:[t.jsxs("div",{className:"concept-header",children:[t.jsx(Pn,{className:"icon-sm",style:{color:"#3b82f6"}}),t.jsx("span",{children:"Linear vs Quadratic"})]}),t.jsxs("div",{className:"concept-content",children:[t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",fontSize:"0.85rem"},children:[t.jsxs("div",{children:[t.jsx("strong",{style:{color:"#f59e0b"},children:"Linear:"}),t.jsx("div",{style:{fontFamily:"monospace",marginTop:"0.25rem"},children:"+1, +2, +3, +4..."})]}),t.jsxs("div",{children:[t.jsx("strong",{style:{color:"#22c55e"},children:"Quadratic:"}),t.jsx("div",{style:{fontFamily:"monospace",marginTop:"0.25rem"},children:"+1, +4, +9, +16..."})]})]}),t.jsx("p",{style:{marginTop:"0.75rem",fontSize:"0.85rem"},children:"Quadratic probing spreads entries more evenly but may not find empty slots if table is over 50% full."})]})]})]}),t.jsx(Se,{context:"Hash Table with Quadratic Probing"})]}),t.jsxs("div",{className:"visualizer-layout",children:[t.jsxs("div",{className:"control-panel",children:[t.jsx("h2",{children:"Operations"}),t.jsxs("div",{className:"operation-group",children:[t.jsx("label",{children:"Insert Key-Value"}),t.jsxs("div",{className:"input-group",children:[t.jsx("input",{type:"text",value:u,onChange:P=>h(P.target.value),placeholder:"Key"}),t.jsx("input",{type:"text",value:f,onChange:P=>N(P.target.value),onKeyPress:P=>P.key==="Enter"&&V(),placeholder:"Value"}),t.jsx("button",{onClick:V,className:"btn btn-insert",children:"Insert"})]})]}),t.jsxs("div",{className:"operation-group",children:[t.jsx("label",{children:"Delete Key"}),t.jsxs("div",{className:"input-group",children:[t.jsx("input",{type:"text",value:k,onChange:P=>j(P.target.value),onKeyPress:P=>P.key==="Enter"&&D(),placeholder:"Key"}),t.jsx("button",{onClick:D,className:"btn btn-delete",children:"Delete"})]})]}),t.jsxs("div",{className:"operation-group",children:[t.jsx("label",{children:"Search Key"}),t.jsxs("div",{className:"input-group",children:[t.jsx("input",{type:"text",value:y,onChange:P=>p(P.target.value),onKeyPress:P=>P.key==="Enter"&&w(),placeholder:"Key"}),t.jsx("button",{onClick:w,className:"btn btn-search",children:"Search"})]})]}),t.jsx("div",{className:"operation-group",children:t.jsx("button",{onClick:L,className:"btn btn-clear",children:"Clear Table"})}),t.jsxs("div",{className:"info-panel",children:[t.jsxs("div",{className:"info-item",children:[t.jsx("span",{className:"info-label",children:"Items"}),t.jsxs("span",{className:"info-value",children:[r,"/",a]})]}),t.jsxs("div",{className:"info-item",children:[t.jsx("span",{className:"info-label",children:"Load"}),t.jsxs("span",{className:"info-value",style:{color:l>=.5?"#f59e0b":"inherit"},children:[(l*100).toFixed(0),"%"]})]})]}),t.jsxs("div",{className:"rehash-info-box",children:[t.jsx(Vd,{size:16}),t.jsxs("div",{children:[t.jsx("strong",{children:"Rehashing Threshold: 50%"}),t.jsx("p",{children:"Quadratic probing requires lower load factor (~0.5) to guarantee finding empty slots."}),l>=.5?t.jsxs("span",{className:"rehash-warning",children:["Load (",(l*100).toFixed(0),"%) at threshold!"]}):t.jsxs("span",{className:"rehash-safe",children:["Currently safe (",(l*100).toFixed(0),"% < 50%)"]})]})]}),t.jsx(hn,{message:c})]}),t.jsxs("div",{className:"visual-panel",children:[t.jsx("h2",{children:"Hash Table (Quadratic Probing)"}),u&&t.jsxs("div",{className:"hash-demo",children:[t.jsxs("div",{className:"hash-demo-item",children:[t.jsx("span",{className:"hash-demo-label",children:"Key:"}),t.jsxs("span",{className:"hash-demo-key",children:['"',u,'"']})]}),t.jsx(Y,{className:"hash-demo-arrow"}),t.jsx("div",{className:"hash-demo-item",children:t.jsx("span",{className:"hash-demo-label",children:"hash()"})}),t.jsx(Y,{className:"hash-demo-arrow"}),t.jsxs("div",{className:"hash-demo-item",children:[t.jsx("span",{className:"hash-demo-label",children:"Slot:"}),t.jsx("span",{className:"hash-demo-index",children:$(u)})]})]}),_&&t.jsxs("div",{className:"collision-banner",children:[t.jsx(wn,{size:18}),t.jsxs("div",{children:[t.jsx("strong",{children:"Quadratic Probing!"}),t.jsxs("p",{children:['"',_.key,'" hashed to slot ',t.jsx("span",{className:"slot-badge original",children:_.originalSlot})]}),t.jsx("div",{style:{marginTop:"0.5rem",fontSize:"0.8rem",fontFamily:"monospace"},children:_.probedSlots.map((P,b)=>t.jsxs("div",{style:{marginBottom:"0.25rem"},children:["i=",P.i,": ",P.formula,b===_.probedSlots.length-1&&t.jsx("span",{style:{color:"#4ade80"},children:" [FOUND]"})]},b))})]})]}),t.jsx("div",{className:"ht-visual",children:!e||e.length===0?t.jsx("div",{className:"ht-empty",children:"Hash table is empty. Insert some key-value pairs!"}):t.jsx("div",{className:"ht-buckets",children:e.map((P,b)=>{const T=C.includes(b),x=_&&_.originalSlot===b,R=_&&_.finalSlot===b,M=P==="DELETED",I=P&&P!=="DELETED";return t.jsxs("div",{className:`ht-row ${I?"filled":"empty"} 
                        ${M?"deleted":""}
                        ${m===b?"highlighted":""} 
                        ${z&&I&&P[0]===z?"just-inserted":""}
                        ${T?"probed":""}
                        ${x?"original-hash":""}
                        ${R?"final-slot":""}`,children:[T&&t.jsx("div",{className:"probe-indicator",children:x?"X":R?"O":">"}),t.jsxs("div",{className:`ht-key-box ${I?"has-key":""} ${M?"deleted-slot":""}`,children:[I&&t.jsx("span",{className:"ht-key",children:P[0]}),M&&t.jsx("span",{className:"ht-deleted-text",children:"DEL"})]}),t.jsx("div",{className:"ht-arrow",children:I&&t.jsx(Y,{size:20})}),t.jsx("div",{className:`ht-index ${x?"collision-index":""}`,children:b}),t.jsx("div",{className:`ht-value-box ${I?"has-value":""} ${M?"deleted-slot":""}`,children:I?t.jsx("span",{className:"ht-value",children:P[1]}):M?t.jsx("span",{className:"ht-deleted-text",children:"DELETED"}):t.jsx("span",{className:"ht-empty-slot",children:"—"})})]},b)})})}),t.jsxs("div",{className:"ht-legend",children:[t.jsxs("div",{className:"legend-item",children:[t.jsx("div",{className:"legend-color key-color"}),t.jsx("span",{children:"Key"})]}),t.jsxs("div",{className:"legend-item",children:[t.jsx("div",{className:"legend-color index-color"}),t.jsx("span",{children:"Index"})]}),t.jsxs("div",{className:"legend-item",children:[t.jsx("div",{className:"legend-color value-color"}),t.jsx("span",{children:"Value"})]}),C.length>0&&t.jsxs("div",{className:"legend-item",children:[t.jsx("div",{className:"legend-color probe-color"}),t.jsx("span",{children:"Probe Path"})]})]})]})]}),t.jsx(Te,{dataStructure:"hashtable"})]})}const Tt=7,wv={inorder:{name:"Inorder Traversal",order:"Left → Root → Right",description:"Visit left subtree, process root, then visit right subtree. For BST, this produces sorted order.",useCase:["Get sorted elements","Validate BST","Create mirror image"],complexity:{time:"O(n)",space:"O(h)"}},preorder:{name:"Preorder Traversal",order:"Root → Left → Right",description:"Process root first, then recursively visit left and right subtrees. Useful for copying trees.",useCase:["Copy tree structure","Serialize/deserialize","Prefix expressions"],complexity:{time:"O(n)",space:"O(h)"}},postorder:{name:"Postorder Traversal",order:"Left → Right → Root",description:"Visit left subtree, right subtree, then process root. Essential for deleting nodes safely.",useCase:["Delete nodes safely","Calculate folder sizes","Postfix expressions"],complexity:{time:"O(n)",space:"O(h)"}},levelorder:{name:"Level Order Traversal",order:"Level by Level (BFS)",description:"Visit nodes level by level using a queue. Perfect for finding shortest paths.",useCase:["Shortest path","Level-wise printing","Nodes at distance K"],complexity:{time:"O(n)",space:"O(w)"}}},Fi=(e,n=[])=>(e&&(Fi(e.left,n),n.push(e.data),Fi(e.right,n)),n),Di=(e,n=[])=>(e&&(n.push(e.data),Di(e.left,n),Di(e.right,n)),n),$i=(e,n=[])=>(e&&($i(e.left,n),$i(e.right,n),n.push(e.data)),n),bv=e=>{if(!e)return[];const n=[],r=[e];for(;r.length;){const s=r.shift();n.push(s.data),s.left&&r.push(s.left),s.right&&r.push(s.right)}return n},Hi=(e,n=0)=>e?Math.max(Hi(e.left,n+1),Hi(e.right,n+1)):n-1;function Sv(){return t.jsxs("div",{className:"intro-left",children:[t.jsxs("div",{className:"concept-box",children:[t.jsxs("div",{className:"concept-header",children:[t.jsx(Je,{className:"icon-sm"}),t.jsx("span",{children:"What is a Binary Tree?"})]}),t.jsxs("div",{className:"concept-content",children:[t.jsxs("p",{children:["A ",t.jsx("strong",{children:"Binary Tree"})," is a hierarchical data structure where each node has at most ",t.jsx("strong",{children:"two children"}),": left and right."]}),t.jsxs("div",{className:"concept-analogy",children:[t.jsx(Fe,{}),t.jsxs("span",{children:["Think of a ",t.jsx("strong",{children:"family tree"})," – each person can have up to two children!"]})]}),t.jsxs("div",{className:"concept-key-terms",children:[t.jsx("h4",{children:"Key Terms:"}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Node:"})," Contains data and links to children"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Root:"})," The topmost node (no parent)"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Leaf:"})," A node with no children"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Height:"})," Longest path from root to leaf"]})]})]})]})]}),t.jsxs("div",{className:"concept-box",style:{marginTop:"1rem"},children:[t.jsxs("div",{className:"concept-header",children:[t.jsx(Pn,{className:"icon-sm"}),t.jsx("span",{children:"What are Tree Traversals?"})]}),t.jsxs("div",{className:"concept-content",children:[t.jsxs("p",{children:[t.jsx("strong",{children:"Tree Traversal"})," is visiting each node ",t.jsx("strong",{children:"exactly once"})," in a specific order."]}),t.jsxs("div",{className:"concept-why-traverse",children:[t.jsx("h4",{children:"Why Traverse?"}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Search:"})," Find specific data"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Copy:"})," Duplicate the tree"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Evaluate:"})," Calculate expressions"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Delete:"})," Remove nodes properly"]})]})]}),t.jsxs("div",{className:"concept-analogy",style:{marginTop:"0.75rem"},children:[t.jsx(Fe,{}),t.jsx("span",{children:"Like reading a book – you can read in different orders based on your needs!"})]})]})]})]})}function Tv({insertValue:e,deleteValue:n,size:r,height:s,message:a,tree:i,isAnimating:l,visitedNodes:o,onInsertValueChange:c,onDeleteValueChange:d,onInsert:u,onDelete:h,onTraversal:f,onClear:N,onResetTraversal:k}){const j=(y,p)=>{const m=y.target.value;(m===""||m==="-"||/^-?\d*\.?\d*$/.test(m))&&p(m)};return t.jsxs("div",{className:"control-panel",children:[t.jsx("h2",{children:"Binary Tree Traversals"}),t.jsxs("div",{className:"operation-group",children:[t.jsx("label",{htmlFor:"insertValue",children:"Insert Node"}),t.jsxs("div",{className:"input-group",children:[t.jsx("input",{type:"number",id:"insertValue",value:e,onChange:y=>j(y,c),onKeyPress:y=>y.key==="Enter"&&u(),placeholder:"Enter a number"}),t.jsx("button",{onClick:u,className:"btn btn-insert",children:"Insert"})]})]}),t.jsxs("div",{className:"operation-group",children:[t.jsx("label",{htmlFor:"deleteValue",children:"Delete Node"}),t.jsxs("div",{className:"input-group",children:[t.jsx("input",{type:"number",id:"deleteValue",value:n,onChange:y=>j(y,d),onKeyPress:y=>y.key==="Enter"&&h(),placeholder:"Enter a number"}),t.jsx("button",{onClick:h,className:"btn btn-delete",children:"Delete"})]})]}),t.jsxs("div",{className:"operation-group",children:[t.jsx("label",{children:"Traversals"}),t.jsx("div",{className:"btn-group",children:["inorder","preorder","postorder","levelorder"].map(y=>t.jsx("button",{onClick:()=>f(y),className:"btn btn-traversal",disabled:l||!i,children:y==="levelorder"?"Level Order":y.charAt(0).toUpperCase()+y.slice(1)},y))}),o.length>0&&!l&&t.jsx("button",{onClick:k,className:"btn btn-secondary",style:{marginTop:"0.5rem",width:"100%"},children:"Reset Colors"})]}),t.jsxs("div",{className:"traversal-legend",children:[t.jsxs("div",{className:"legend-item",children:[t.jsx("span",{className:"legend-dot legend-dot--default"}),t.jsx("span",{children:"Not visited"})]}),t.jsxs("div",{className:"legend-item",children:[t.jsx("span",{className:"legend-dot legend-dot--visiting"}),t.jsx("span",{children:"Visiting"})]}),t.jsxs("div",{className:"legend-item",children:[t.jsx("span",{className:"legend-dot legend-dot--visited"}),t.jsx("span",{children:"Visited"})]})]}),t.jsxs("div",{className:"info-panel",children:[t.jsxs("div",{className:"info-item",children:[t.jsx("span",{className:"info-label",children:"Size:"}),t.jsx("span",{className:"info-value",children:r})]}),t.jsxs("div",{className:"info-item",children:[t.jsx("span",{className:"info-label",children:"Height:"}),t.jsx("span",{className:"info-value",children:s})]}),t.jsxs("div",{className:"info-item",children:[t.jsx("span",{className:"info-label",children:"Max Size:"}),t.jsx("span",{className:"info-value",children:Tt})]})]}),r>=Tt*.8&&r<Tt&&t.jsxs("div",{className:"warning-box",children:[t.jsx(wn,{size:18}),t.jsxs("div",{children:[t.jsx("strong",{children:"Tree is filling up!"})," You're at ",r,"/",Tt," nodes."]})]}),t.jsx("div",{className:"operation-group",children:t.jsx("button",{onClick:N,className:"btn btn-clear",children:"Clear Tree"})}),a&&t.jsx("div",{className:`message message-${a.includes("Error")||a.includes("error")?"error":/success|complete|Inserted|Deleted|cleared/i.test(a)?"success":a.includes("full")?"warning":"info"}`,children:a})]})}function Cv({tree:e,currentNode:n,visitedNodes:r}){const s=c=>{const d=n===c,u=r.includes(c);return{color:d?"#f59e0b":u?"#10b981":"#6366f1",glow:d?"drop-shadow(0 0 12px #f59e0b) drop-shadow(0 0 20px #f59e0b)":u?"drop-shadow(0 0 6px #10b981)":"none",radius:d?30:25,stroke:d?3:2,fontSize:d?16:14,fontWeight:d?"bold":"normal"}},a=(c,d,u,h,f)=>{if(!c)return[];const N=Math.pow(2,f-h)*50,k=s(c.data),j=[];return c.left&&(j.push(t.jsx("line",{x1:d,y1:u,x2:d-N,y2:u+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:"2"},`l-${c.data}-l`)),j.push(...a(c.left,d-N,u+100,h+1,f))),c.right&&(j.push(t.jsx("line",{x1:d,y1:u,x2:d+N,y2:u+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:"2"},`l-${c.data}-r`)),j.push(...a(c.right,d+N,u+100,h+1,f))),j.push(t.jsxs("g",{style:{filter:k.glow,transition:"all 0.3s ease"},children:[t.jsx("circle",{cx:d,cy:u,r:k.radius,fill:k.color,stroke:"white",strokeWidth:k.stroke,style:{transition:"all 0.3s ease"}}),t.jsx("text",{x:d,y:u,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:k.fontSize,fontWeight:k.fontWeight,children:c.data})]},`n-${c.data}-${d}`)),j};if(!e)return t.jsx("div",{className:"tree-empty",children:"Tree is empty. Insert some nodes!"});const i=Hi(e),l=(i+1)*100+50,o=Math.max(800,Math.pow(2,Math.max(i,1))*80);return t.jsx("svg",{width:o,height:l,className:"tree-svg",children:a(e,o/2,50,0,i)})}function Ev({traversalType:e,traversalResult:n,isAnimating:r,traversalComplete:s}){if(!e||n.length===0&&!r)return null;const a=wv[e];return t.jsxs("div",{className:"traversal-output-panel",children:[t.jsxs("div",{style:{marginBottom:"1rem"},children:[t.jsxs("h3",{className:"traversal-title",children:[a==null?void 0:a.name,r&&t.jsx("span",{className:"traversal-badge traversal-badge--running",children:"Running..."}),s&&t.jsx("span",{className:"traversal-badge traversal-badge--complete",children:"Complete"})]}),t.jsxs("p",{className:"traversal-order",children:[t.jsx("strong",{children:"Order:"})," ",a==null?void 0:a.order]}),t.jsx("p",{className:"traversal-description",children:a==null?void 0:a.description})]}),t.jsxs("div",{className:"traversal-output-box",children:[t.jsx("div",{className:"traversal-output-label",children:"Output Sequence:"}),t.jsx("div",{className:"traversal-sequence-container",children:n.length===0&&r?t.jsx("span",{style:{color:"var(--text-muted)",fontStyle:"italic"},children:"Traversing..."}):n.map((i,l)=>t.jsx("span",{className:`traversal-node ${l===n.length-1&&!s?"traversal-node--current":"traversal-node--complete"}`,children:i},l))})]}),s&&n.length>0&&t.jsxs("div",{className:"traversal-array-section",children:[t.jsx("div",{className:"traversal-array-label",children:"Array Output:"}),t.jsxs("code",{className:"traversal-array-output",children:["[",n.join(", "),"]"]}),t.jsxs("p",{className:"traversal-use-case",children:["Use case: ",a==null?void 0:a.useCase.join(" • ")]}),t.jsxs("div",{className:"traversal-complexity",children:[t.jsx("strong",{children:"Time:"})," ",t.jsx("code",{className:"complexity-value",children:a==null?void 0:a.complexity.time})," (visits each node once)",t.jsx("br",{}),t.jsx("strong",{children:"Space:"})," ",t.jsx("code",{className:"complexity-value",children:a==null?void 0:a.complexity.space})," (recursion stack/queue)"]})]})]})}function Lv(){const[e,n]=g.useState(null),[r,s]=g.useState(0),[a,i]=g.useState(-1),[l,o]=g.useState(""),[c,d]=g.useState(""),[u,h]=g.useState(""),[f,N]=g.useState([]),[k,j]=g.useState(!1),[y,p]=g.useState(null),[m,v]=g.useState([]),[C,S]=g.useState(null),[z,E]=g.useState(!1);g.useEffect(()=>{_()},[]);const _=async()=>{try{const L=await(await fetch("/api/binarytree")).json();n(L.tree),s(L.size||0),i(L.height!==void 0?L.height:-1)}catch(w){console.error("Error loading tree:",w)}},A=w=>{h(w),setTimeout(()=>h(""),3e3)},O=async()=>{if(!l.trim()){A("Please enter a number!");return}const w=Number(l);if(isNaN(w)){A("Please enter a valid number!");return}if(r>=Tt){A(`Tree is full! Maximum size is ${Tt} nodes.`);return}try{const P=await(await fetch("/api/binarytree/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:w})})).json();if(P.error){A(P.error);return}n(P.tree),s(P.size||0),i(P.height!==void 0?P.height:-1),A(`Inserted ${w}`),o("")}catch{A("Error inserting node")}},$=async()=>{if(!c.trim()){A("Please enter a number!");return}const w=Number(c);if(isNaN(w)){A("Please enter a valid number!");return}try{const P=await(await fetch("/api/binarytree/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:w})})).json();if(P.error){A(P.error);return}n(P.tree),s(P.size||0),i(P.height!==void 0?P.height:-1),A(`Deleted ${w}`),d("")}catch{A("Error deleting node")}},Q=async()=>{try{await fetch("/api/binarytree/clear",{method:"POST"}),n(null),s(0),i(-1),D(),A("Tree cleared!")}catch{A("Error clearing tree")}},V=async w=>{if(!e){A("Tree is empty! Insert some nodes first.");return}j(!0),N([]),p(null),v([]),S(w),E(!1);let L=[];switch(w){case"inorder":L=Fi(e);break;case"preorder":L=Di(e);break;case"postorder":L=$i(e);break;case"levelorder":L=bv(e);break;default:L=[]}if(L.length===0){A("Tree is empty!"),j(!1);return}for(let P=0;P<L.length;P++)p(L[P]),await new Promise(b=>setTimeout(b,600)),v(b=>[...b,L[P]]),N(b=>[...b,L[P]]),await new Promise(b=>setTimeout(b,200));p(null),E(!0),j(!1),A(`${w.charAt(0).toUpperCase()+w.slice(1)} traversal complete!`)},D=()=>{N([]),p(null),v([]),S(null),E(!1)};return t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"intro-layout",children:[t.jsx(Sv,{}),t.jsx(Se,{context:"Binary Tree data structure and traversals"})]}),t.jsxs("div",{className:"visualizer-layout",children:[t.jsx(Tv,{insertValue:l,deleteValue:c,size:r,height:a,message:u,tree:e,isAnimating:k,visitedNodes:m,onInsertValueChange:o,onDeleteValueChange:d,onInsert:O,onDelete:$,onTraversal:V,onClear:Q,onResetTraversal:D}),t.jsxs("div",{className:"visual-panel",children:[t.jsx("h2",{children:"Binary Tree Visualization"}),t.jsx("div",{className:"tree-container",children:t.jsx(Cv,{tree:e,currentNode:y,visitedNodes:m})}),t.jsx(Ev,{traversalType:C,traversalResult:f,isAnimating:k,traversalComplete:z})]})]}),t.jsx(Te,{dataStructure:"binarytree"})]})}const Rv={title:"What is a Stack?",description:"A Stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle.",codeExample:"push(A) → push(B) → push(C) → pop() returns C",analogy:"Like a stack of plates - you can only take the top plate off first!"},Ov={title:"Stack Properties",items:[{label:"Order",value:"LIFO (Last-In-First-Out)"},{label:"Access",value:"Top element only"},{label:"Insert",value:"Push to top - O(1)"},{label:"Remove",value:"Pop from top - O(1)"}]},_v={title:"Common Use Cases",items:["Function call stack (recursion)","Undo/Redo operations","Browser back button","Expression evaluation","Syntax parsing"]},Pv={title:"Time Complexity",operations:[{name:"Push",time:"O(1)",description:"Add to top"},{name:"Pop",time:"O(1)",description:"Remove from top"},{name:"Peek",time:"O(1)",description:"View top element"},{name:"isEmpty",time:"O(1)",description:"Check if empty"},{name:"Search",time:"O(n)",description:"Find element"}]},Iv={push:{label:"Push Value",placeholder:"Value",buttonText:"Push"},pop:{buttonText:"Pop"},peek:{buttonText:"Peek"},clear:{buttonText:"Clear"}},zv={size:"Size",top:"Top",capacity:"Capacity"},Mv={emptyStack:"Stack is empty. Push some values!",pushSuccess:'Pushed "{value}" to stack',popSuccess:'Popped "{value}" from stack',popEmpty:"Cannot pop - stack is empty!",peekSuccess:'Top element: "{value}"',peekEmpty:"Cannot peek - stack is empty!",clearSuccess:"Stack cleared!",errorNoValue:"Please enter a value!",errorPush:"Error pushing to stack",errorPop:"Error popping from stack",errorClear:"Error clearing stack",stackFull:"Stack is full!"},Av=[{type:"color",className:"top-color",label:"Top Element"},{type:"color",className:"element-color",label:"Stack Element"}],Vv={concept:Rv,properties:Ov,useCases:_v,complexity:Pv,operations:Iv,infoLabels:zv,messages:Mv,legend:Av},Fv={title:"What is a Queue?",description:"A Queue is a linear data structure that follows the First-In-First-Out (FIFO) principle.",codeExample:"enqueue(A) → enqueue(B) → enqueue(C) → dequeue() returns A",analogy:"Like a line at a store - first person in line gets served first!"},Dv={title:"Queue Properties",items:[{label:"Order",value:"FIFO (First-In-First-Out)"},{label:"Access",value:"Front and Rear"},{label:"Insert",value:"Enqueue at rear - O(1)"},{label:"Remove",value:"Dequeue from front - O(1)"}]},$v={title:"Queue vs Stack",queue:{label:"Queue:",color:"#22c55e",points:["FIFO order","Two access points (front/rear)"]},stack:{label:"Stack:",color:"#3b82f6",points:["LIFO order","One access point (top)"]},summary:"Use Queue when order of processing matters (like task scheduling)."},Hv={title:"Common Use Cases",items:["Task scheduling (CPU, print jobs)","Breadth-First Search (BFS)","Message queues","Request handling in servers","Buffering (streaming)"]},Bv={title:"Time Complexity",operations:[{name:"Enqueue",time:"O(1)",description:"Add to rear"},{name:"Dequeue",time:"O(1)",description:"Remove from front"},{name:"Front",time:"O(1)",description:"View front element"},{name:"isEmpty",time:"O(1)",description:"Check if empty"},{name:"Search",time:"O(n)",description:"Find element"}]},qv={enqueue:{label:"Enqueue Value",placeholder:"Value",buttonText:"Enqueue"},dequeue:{buttonText:"Dequeue"},front:{buttonText:"Front"},clear:{buttonText:"Clear"}},Uv={size:"Size",front:"Front",rear:"Rear",capacity:"Capacity"},Kv={emptyQueue:"Queue is empty. Enqueue some values!",enqueueSuccess:'Enqueued "{value}"',dequeueSuccess:'Dequeued "{value}"',dequeueEmpty:"Cannot dequeue - queue is empty!",frontSuccess:'Front element: "{value}"',frontEmpty:"Cannot get front - queue is empty!",clearSuccess:"Queue cleared!",errorNoValue:"Please enter a value!",errorEnqueue:"Error enqueueing to queue",errorDequeue:"Error dequeueing from queue",errorClear:"Error clearing queue",queueFull:"Queue is full!"},Wv=[{type:"color",className:"front-color",label:"Front"},{type:"color",className:"rear-color",label:"Rear"},{type:"color",className:"element-color",label:"Queue Element"}],Qv={concept:Fv,properties:Dv,comparison:$v,useCases:Hv,complexity:Bv,operations:qv,infoLabels:Uv,messages:Kv,legend:Wv},Gv={title:"What is a Linked List?",description:"A Linked List is a linear data structure where elements are stored in nodes, each pointing to the next node.",codeExample:"HEAD → [A|→] → [B|→] → [C|→] → NULL",analogy:"Like a treasure hunt - each clue (node) points to the next location!"},Xv={title:"Linked List Properties",items:[{label:"Structure",value:"Nodes with data + pointer"},{label:"Memory",value:"Non-contiguous allocation"},{label:"Size",value:"Dynamic (grows/shrinks)"},{label:"Access",value:"Sequential (no random access)"}]},Zv={title:"Linked List vs Array",linkedlist:{label:"Linked List:",color:"#22c55e",points:["Dynamic size","O(1) insert/delete at known position","Extra memory for pointers"]},array:{label:"Array:",color:"#3b82f6",points:["Fixed size (usually)","O(1) random access by index","Contiguous memory"]},summary:"Use Linked List when you need frequent insertions/deletions and don't need random access."},Jv={title:"Types of Linked Lists",items:[{name:"Singly Linked",description:"Each node points to next only"},{name:"Doubly Linked",description:"Nodes point to both next and previous"},{name:"Circular",description:"Last node points back to first"}]},Yv={title:"Time Complexity",operations:[{name:"Access",time:"O(n)",description:"Traverse to find"},{name:"Search",time:"O(n)",description:"Linear search"},{name:"Insert (head)",time:"O(1)",description:"Add at beginning"},{name:"Insert (tail)",time:"O(n)",description:"Traverse then add"},{name:"Delete (head)",time:"O(1)",description:"Remove first"},{name:"Delete (by value)",time:"O(n)",description:"Find then remove"}]},ey={insertHead:{label:"Insert at Head",placeholder:"Value",buttonText:"Insert Head"},insertTail:{label:"Insert at Tail",placeholder:"Value",buttonText:"Insert Tail"},delete:{label:"Delete Value",placeholder:"Value",buttonText:"Delete"},search:{label:"Search Value",placeholder:"Value",buttonText:"Search"},clear:{buttonText:"Clear"}},ny={size:"Size",head:"Head",tail:"Tail"},ty={emptyList:"Linked list is empty. Insert some values!",insertHeadSuccess:'Inserted "{value}" at head',insertTailSuccess:'Inserted "{value}" at tail',deleteSuccess:'Deleted "{value}"',deleteNotFound:'Value "{value}" not found',searchFound:'Found "{value}" at position {position}',searchNotFound:'Value "{value}" not found',clearSuccess:"Linked list cleared!",errorNoValue:"Please enter a value!",errorInsert:"Error inserting value",errorDelete:"Error deleting value",errorSearch:"Error searching value",errorClear:"Error clearing list"},ry=[{type:"color",className:"head-color",label:"Head Node"},{type:"color",className:"node-color",label:"Node"},{type:"icon",icon:"ArrowRight",color:"#8b5cf6",label:"Pointer"}],sy={concept:Gv,properties:Xv,comparison:Zv,types:Jv,complexity:Yv,operations:ey,infoLabels:ny,messages:ty,legend:ry},ay={title:"What is a Binary Tree?",description:"A Binary Tree is a hierarchical data structure where each node has at most two children (left and right).",codeExample:`       [5]
      /   \\
    [3]   [7]
   /  \\     \\
 [1]  [4]   [9]`,analogy:"Like a family tree - each person can have at most two children!"},iy={title:"Binary Tree Properties",items:[{label:"Structure",value:"Hierarchical (nodes + edges)"},{label:"Children",value:"At most 2 per node"},{label:"Root",value:"Topmost node (no parent)"},{label:"Leaf",value:"Node with no children"}]},ly={title:"Types of Binary Trees",items:[{name:"Full Binary Tree",description:"Every node has 0 or 2 children"},{name:"Complete Binary Tree",description:"All levels filled except possibly last"},{name:"Perfect Binary Tree",description:"All internal nodes have 2 children, leaves at same level"},{name:"Binary Search Tree",description:"Left < Parent < Right ordering"}]},oy={title:"Tree Traversals",items:[{name:"Inorder",order:"Left → Root → Right",use:"BST gives sorted order"},{name:"Preorder",order:"Root → Left → Right",use:"Copy tree, prefix expression"},{name:"Postorder",order:"Left → Right → Root",use:"Delete tree, postfix expression"},{name:"Level Order",order:"Level by level (BFS)",use:"Print by levels"}]},cy={title:"Time Complexity (BST)",operations:[{name:"Search",average:"O(log n)",worst:"O(n)",description:"Find element"},{name:"Insert",average:"O(log n)",worst:"O(n)",description:"Add element"},{name:"Delete",average:"O(log n)",worst:"O(n)",description:"Remove element"},{name:"Traversal",average:"O(n)",worst:"O(n)",description:"Visit all nodes"}],note:"Worst case O(n) occurs when tree becomes a linked list (unbalanced)"},uy={title:"Common Use Cases",items:["Binary Search Trees (fast lookup)","Expression trees (parsing)","Huffman coding (compression)","Heaps (priority queues)","File system structure"]},dy={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},delete:{label:"Delete Value",placeholder:"Value",buttonText:"Delete"},search:{label:"Search Value",placeholder:"Value",buttonText:"Search"},traversals:{inorder:"Inorder",preorder:"Preorder",postorder:"Postorder",levelorder:"Level Order"},clear:{buttonText:"Clear"}},hy={size:"Nodes",height:"Height",root:"Root"},py={emptyTree:"Binary tree is empty. Insert some values!",insertSuccess:"Inserted {value}",deleteSuccess:"Deleted {value}",deleteNotFound:"Value {value} not found",searchFound:"Found {value}",searchNotFound:"Value {value} not found",clearSuccess:"Tree cleared!",traversalResult:"{type} traversal: {result}",errorNoValue:"Please enter a value!",errorInsert:"Error inserting value",errorDelete:"Error deleting value",errorSearch:"Error searching value",errorClear:"Error clearing tree"},fy=[{type:"color",className:"root-color",label:"Root"},{type:"color",className:"node-color",label:"Node"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Found"}],my={concept:ay,properties:iy,types:ly,traversals:oy,complexity:cy,useCases:uy,operations:dy,infoLabels:hy,messages:py,legend:fy},gy={title:"What is a Hash Table?",description:"A Hash Table is a data structure that maps keys to values using a hash function for O(1) average access time.",codeExample:'hash("apple") → 3 → table[3] = "apple"',analogy:"Like a library catalog - the book title (key) tells you exactly which shelf (index) to find it!"},vy={title:"Hash Table Properties",items:[{label:"Access",value:"O(1) average time"},{label:"Hash Function",value:"Maps key → index"},{label:"Load Factor",value:"size / capacity"},{label:"Collision",value:"When two keys hash to same index"}]},yy={title:"Collision Resolution: Linear Probing",description:"When a collision occurs, probe sequentially until an empty slot is found.",steps:["Calculate hash index","If slot occupied, try next slot","Repeat until empty slot found","Insert at empty slot"],formula:"index = (hash(key) + i) % capacity, where i = 0, 1, 2, ..."},xy={title:"Linear vs Quadratic Probing",linear:{label:"Linear Probing:",color:"#3b82f6",points:["Simple: check next slot","Primary clustering problem","Cache-friendly"]},quadratic:{label:"Quadratic Probing:",color:"#f59e0b",points:["Jump by squares: 1, 4, 9...","Reduces primary clustering","May not find empty slot"]},summary:"Linear probing is simpler but can cause clustering. Quadratic probing spreads entries better."},jy={title:"Load Factor",description:"Load factor = size / capacity. Measures how full the table is.",threshold:.7,warningMessage:"High load ({loadFactor}) - consider rehashing!",safeMessage:"Load factor: {loadFactor}"},ky={title:"Time Complexity",operations:[{name:"Insert",average:"O(1)",worst:"O(n)",description:"Add key-value"},{name:"Search",average:"O(1)",worst:"O(n)",description:"Find by key"},{name:"Delete",average:"O(1)",worst:"O(n)",description:"Remove by key"},{name:"Rehash",average:"O(n)",worst:"O(n)",description:"Resize table"}],note:"Worst case O(n) when many collisions or poor hash function"},Ny={title:"Common Use Cases",items:["Dictionaries/Maps","Caching (memoization)","Database indexing","Symbol tables (compilers)","Counting frequencies"]},wy={insert:{label:"Insert Key-Value",keyPlaceholder:"Key",valuePlaceholder:"Value",buttonText:"Insert"},delete:{label:"Delete Key",placeholder:"Key",buttonText:"Delete"},search:{label:"Search Key",placeholder:"Key",buttonText:"Search"},clear:{buttonText:"Clear"},rehash:{buttonText:"Rehash"}},by={items:"Items",capacity:"Capacity",load:"Load",collisions:"Collisions"},Sy={emptyTable:"Hash table is empty. Insert some key-value pairs!",insertSuccess:'Inserted "{key}" at slot {index}',insertUpdated:'Updated "{key}" at slot {index}',insertCollision:"Collision at slot {original}! Probed to slot {index}",deleteSuccess:'Deleted "{key}"',searchFound:'Found: "{key}" = {value}',searchNotFound:'Key "{key}" not found',clearSuccess:"Hash table cleared!",rehashSuccess:"Rehashed! Capacity: {oldCapacity} → {newCapacity}",rehashEmpty:"Nothing to rehash - table is empty!",tableFull:"Table is full! Consider rehashing.",errorNoKey:"Please enter a key!",errorNoKeyValue:"Please enter both key and value!",errorInsert:"Error inserting. Is Flask running?",errorDelete:"Error deleting. Is Flask running?",errorSearch:"Error searching item",errorClear:"Error clearing hash table",errorRehash:"Error rehashing. Is Flask running?"},Ty=[{type:"color",className:"key-color",label:"Key"},{type:"color",className:"index-color",label:"Index"},{type:"color",className:"value-color",label:"Value"},{type:"color",className:"probe-color",label:"Probed Slot"},{type:"color",className:"collision-color",label:"Collision"}],Cy={concept:gy,properties:vy,collisionResolution:yy,comparison:xy,loadFactor:jy,complexity:ky,useCases:Ny,operations:wy,infoLabels:by,messages:Sy,legend:Ty},Ey={title:"What is Quadratic Probing?",description:"Quadratic Probing is a collision resolution technique that uses a quadratic function to find the next available slot.",codeExample:"index = (hash(key) + i²) % capacity, where i = 0, 1, 2, 3...",analogy:"Like jumping farther each time - first 1 step, then 4, then 9, then 16!"},Ly={title:"Quadratic Probing Properties",items:[{label:"Probe Sequence",value:"+1, +4, +9, +16, +25..."},{label:"Formula",value:"(hash + i²) % capacity"},{label:"Clustering",value:"Reduces primary clustering"},{label:"Load Factor",value:"Must stay below 0.5 for guarantee"}]},Ry={title:"Quadratic vs Linear Probing",quadratic:{label:"Quadratic:",color:"#f59e0b",points:["Jumps by squares: 1, 4, 9...","Less primary clustering","May miss empty slots"]},linear:{label:"Linear:",color:"#3b82f6",points:["Steps by 1 each time","Primary clustering issue","Always finds empty slot"]},summary:"Quadratic probing reduces clustering but requires load factor < 0.5 and prime table size for guaranteed insertion."},Oy={title:"Clustering Problem",primary:{name:"Primary Clustering",description:"Long runs of occupied slots form clusters",cause:"Linear probing - same probe sequence for nearby hashes",solution:"Use quadratic or double hashing"},secondary:{name:"Secondary Clustering",description:"Keys with same hash follow same probe sequence",cause:"Probe sequence depends only on initial hash",solution:"Use double hashing"}},_y={title:"Load Factor Warning",description:"Quadratic probing may fail to find empty slots if load factor > 0.5",threshold:.5,warningMessage:"Warning: Load factor ({loadFactor}) > 0.5 - insertions may fail!",safeMessage:"Load factor: {loadFactor}"},Py={title:"Time Complexity",operations:[{name:"Insert",average:"O(1)",worst:"O(n)",description:"Add key-value"},{name:"Search",average:"O(1)",worst:"O(n)",description:"Find by key"},{name:"Delete",average:"O(1)",worst:"O(n)",description:"Remove by key"},{name:"Rehash",average:"O(n)",worst:"O(n)",description:"Resize table"}],note:"Requires prime table size and load factor < 0.5 for guaranteed O(1)"},Iy={insert:{label:"Insert Key-Value",keyPlaceholder:"Key",valuePlaceholder:"Value",buttonText:"Insert"},delete:{label:"Delete Key",placeholder:"Key",buttonText:"Delete"},search:{label:"Search Key",placeholder:"Key",buttonText:"Search"},clear:{buttonText:"Clear"},rehash:{buttonText:"Rehash"}},zy={items:"Items",capacity:"Capacity",load:"Load",collisions:"Collisions"},My={emptyTable:"Hash table is empty. Insert some key-value pairs!",insertSuccess:'Inserted "{key}" at slot {index}',insertUpdated:'Updated "{key}" at slot {index}',insertCollision:"Collision! Quadratic probed to slot {index} (i={probeCount})",deleteSuccess:'Deleted "{key}"',searchFound:'Found: "{key}" = {value}',searchNotFound:'Key "{key}" not found',clearSuccess:"Hash table cleared!",rehashSuccess:"Rehashed! Capacity: {oldCapacity} → {newCapacity}",rehashEmpty:"Nothing to rehash - table is empty!",tableFull:"Cannot insert - no empty slot found after full probe cycle!",errorNoKey:"Please enter a key!",errorNoKeyValue:"Please enter both key and value!",errorInsert:"Error inserting. Is Flask running?",errorDelete:"Error deleting. Is Flask running?",errorSearch:"Error searching item",errorClear:"Error clearing hash table",errorRehash:"Error rehashing. Is Flask running?"},Ay=[{type:"color",className:"key-color",label:"Key"},{type:"color",className:"index-color",label:"Index"},{type:"color",className:"value-color",label:"Value"},{type:"color",className:"probe-color",label:"Quadratic Probe"}],Vy={concept:Ey,properties:Ly,comparison:Ry,clustering:Oy,loadFactor:_y,complexity:Py,operations:Iy,infoLabels:zy,messages:My,legend:Ay},Fy={title:"What is a Binary Search Tree?",description:"A Binary Search Tree (BST) is a binary tree where each node follows the ordering property: all left descendants < node < all right descendants.",codeExample:`       [50]
      /    \\
   [30]    [70]
   /  \\    /  \\
 [20][40][60][80]

Left < Parent < Right`,analogy:"Like a dictionary - words are sorted alphabetically, so you can quickly find any word by comparing!"},Dy={title:"BST Properties",items:[{label:"Ordering",value:"Left < Parent < Right"},{label:"Search",value:"O(log n) average"},{label:"Inorder",value:"Gives sorted sequence"},{label:"No Duplicates",value:"Typically unique keys"}]},$y={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},delete:{label:"Delete Value",placeholder:"Value",buttonText:"Delete"},search:{label:"Search Value",placeholder:"Value",buttonText:"Search"},traversals:{inorder:"Inorder (Sorted)",preorder:"Preorder",postorder:"Postorder",levelorder:"Level Order"},clear:{buttonText:"Clear"}},Hy={title:"BST Delete Cases",items:[{name:"Leaf Node",description:"Simply remove (no children)"},{name:"One Child",description:"Replace with child"},{name:"Two Children",description:"Replace with inorder successor (smallest in right subtree)"}]},By={title:"Tree Traversals",items:[{name:"Inorder",order:"Left -> Root -> Right",use:"Returns SORTED order in BST"},{name:"Preorder",order:"Root -> Left -> Right",use:"Copy/serialize tree"},{name:"Postorder",order:"Left -> Right -> Root",use:"Delete tree safely"},{name:"Level Order",order:"Level by level (BFS)",use:"Print by levels"}]},qy={title:"Time Complexity",operations:[{name:"Search",average:"O(log n)",worst:"O(n)",description:"Binary search principle"},{name:"Insert",average:"O(log n)",worst:"O(n)",description:"Find position + insert"},{name:"Delete",average:"O(log n)",worst:"O(n)",description:"Find + restructure"},{name:"Min/Max",average:"O(log n)",worst:"O(n)",description:"Leftmost/rightmost"}],note:"Worst case O(n) when tree is unbalanced (degenerates to linked list). Use AVL/Red-Black trees for guaranteed O(log n)."},Uy={title:"Common Use Cases",items:["Database indexing (B-trees)","Symbol tables in compilers","Priority queues","Auto-complete suggestions","Range queries (find all values between X and Y)"]},Ky={title:"BST vs Other Structures",items:[{vs:"Array",advantage:"O(log n) insert/delete vs O(n)"},{vs:"Hash Table",advantage:"Ordered data, range queries"},{vs:"Linked List",advantage:"O(log n) search vs O(n)"}]},Wy={size:"Nodes",height:"Height",root:"Root"},Qy={emptyTree:"BST is empty. Insert some values!",insertSuccess:"Inserted {value}",deleteSuccess:"Deleted {value}",deleteNotFound:"Value {value} not found",searchFound:"Found {value}",searchNotFound:"Value {value} not found",clearSuccess:"BST cleared!",traversalResult:"{type}: {result}",errorNoValue:"Please enter a value!",errorInsert:"Error inserting value",errorDelete:"Error deleting value",errorSearch:"Error searching value",errorClear:"Error clearing BST"},Gy=[{type:"color",className:"root-color",label:"Root"},{type:"color",className:"node-color",label:"Node"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Found"}],Xy={concept:Fy,properties:Dy,operations:$y,deleteCases:Hy,traversals:By,complexity:qy,useCases:Uy,comparison:Ky,infoLabels:Wy,messages:Qy,legend:Gy},Zy={title:"What is an AVL Tree?",description:"An AVL Tree is a self-balancing Binary Search Tree where the height difference between left and right subtrees (balance factor) is at most 1 for every node.",codeExample:`       [50]  BF=0
      /    \\
   [30]    [70]  
  BF=0     BF=0
   /  \\      \\
 [20][40]   [80]

Balance Factor = Height(Left) - Height(Right)
BF must be -1, 0, or 1`,analogy:"Like a well-organized library that automatically reorganizes shelves whenever books are added or removed to ensure quick access!"},Jy={title:"AVL Properties",items:[{label:"Balance Factor",value:"-1, 0, or 1 for all nodes"},{label:"Height",value:"O(log n) guaranteed"},{label:"Self-Balancing",value:"Rotations on insert/delete"},{label:"BST Property",value:"Left < Parent < Right"}]},Yy={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},delete:{label:"Delete Value",placeholder:"Value",buttonText:"Delete"},search:{label:"Search Value",placeholder:"Value",buttonText:"Search"},traversals:{inorder:"Inorder (Sorted)",preorder:"Preorder",postorder:"Postorder",levelorder:"Level Order"},clear:{buttonText:"Clear"}},ex={title:"AVL Rotations",items:[{name:"Left-Left (LL)",description:"Right rotation",when:"BF > 1, Left child BF >= 0"},{name:"Right-Right (RR)",description:"Left rotation",when:"BF < -1, Right child BF <= 0"},{name:"Left-Right (LR)",description:"Left then Right rotation",when:"BF > 1, Left child BF < 0"},{name:"Right-Left (RL)",description:"Right then Left rotation",when:"BF < -1, Right child BF > 0"}]},nx={title:"Tree Traversals",items:[{name:"Inorder",order:"Left -> Root -> Right",use:"Returns SORTED order"},{name:"Preorder",order:"Root -> Left -> Right",use:"Copy/serialize tree"},{name:"Postorder",order:"Left -> Right -> Root",use:"Delete tree safely"},{name:"Level Order",order:"Level by level (BFS)",use:"Print by levels"}]},tx={title:"Time Complexity",operations:[{name:"Search",average:"O(log n)",worst:"O(log n)",description:"Height always balanced"},{name:"Insert",average:"O(log n)",worst:"O(log n)",description:"Insert + rebalance"},{name:"Delete",average:"O(log n)",worst:"O(log n)",description:"Delete + rebalance"},{name:"Rotation",average:"O(1)",worst:"O(1)",description:"Constant time fix"}],note:"Unlike regular BST, AVL guarantees O(log n) even in worst case because the tree is always balanced!"},rx={title:"Common Use Cases",items:["Database indexing with frequent lookups","In-memory databases","Dictionary implementations","When guaranteed O(log n) is critical","Real-time systems needing predictable performance"]},sx={title:"AVL vs Other Trees",items:[{vs:"BST",advantage:"Guaranteed O(log n) vs O(n) worst case"},{vs:"Red-Black",advantage:"More rigidly balanced (faster lookup)"},{vs:"B-Tree",advantage:"Better for in-memory operations"}]},ax={size:"Nodes",height:"Height",root:"Root"},ix={emptyTree:"AVL Tree is empty. Insert some values!",insertSuccess:"Inserted {value} (tree rebalanced)",deleteSuccess:"Deleted {value} (tree rebalanced)",deleteNotFound:"Value {value} not found",searchFound:"Found {value}",searchNotFound:"Value {value} not found",clearSuccess:"AVL Tree cleared!",traversalResult:"{type}: {result}",errorNoValue:"Please enter a value!",errorInsert:"Error inserting value",errorDelete:"Error deleting value",errorSearch:"Error searching value",errorClear:"Error clearing AVL Tree"},lx=[{type:"color",className:"root-color",label:"Root"},{type:"color",className:"balanced-color",label:"Balanced (|BF| <= 1)"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Found"}],ox={concept:Zy,properties:Jy,operations:Yy,rotations:ex,traversals:nx,complexity:tx,useCases:rx,comparison:sx,infoLabels:ax,messages:ix,legend:lx},cx={title:"What is a Splay Tree?",description:"A Splay Tree is a self-adjusting Binary Search Tree that moves frequently accessed elements closer to the root through rotations (splaying), providing amortized O(log n) performance.",codeExample:`After searching for 20:

Before:        After Splay:
   [50]           [20]
   /                  \\
 [30]                [50]
 /                   /
[20]  <-- found   [30]

Accessed node moves to root!`,analogy:"Like keeping frequently used items at the front of your desk - recently used elements stay easily accessible!"},ux={title:"Splay Tree Properties",items:[{label:"Self-Adjusting",value:"Accessed nodes move to root"},{label:"No Balance Info",value:"No height/color stored"},{label:"Amortized O(log n)",value:"Good average performance"},{label:"Cache Friendly",value:"Hot nodes stay near root"}]},dx={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},delete:{label:"Delete Value",placeholder:"Value",buttonText:"Delete"},search:{label:"Search Value",placeholder:"Value",buttonText:"Search"},traversals:{inorder:"Inorder (Sorted)",preorder:"Preorder",postorder:"Postorder",levelorder:"Level Order"},clear:{buttonText:"Clear"}},hx={title:"Splay Operations",items:[{name:"Zig",description:"Single rotation when parent is root",when:"Parent is root"},{name:"Zig-Zig",description:"Both node and parent are left (or both right) children",when:"Same side grandchild"},{name:"Zig-Zag",description:"Node is left child, parent is right (or vice versa)",when:"Opposite side grandchild"}]},px={title:"Tree Traversals",items:[{name:"Inorder",order:"Left -> Root -> Right",use:"Returns SORTED order"},{name:"Preorder",order:"Root -> Left -> Right",use:"Copy/serialize tree"},{name:"Postorder",order:"Left -> Right -> Root",use:"Delete tree safely"},{name:"Level Order",order:"Level by level (BFS)",use:"Print by levels"}]},fx={title:"Time Complexity",operations:[{name:"Search",average:"O(log n)*",worst:"O(n)",description:"Amortized logarithmic"},{name:"Insert",average:"O(log n)*",worst:"O(n)",description:"Amortized logarithmic"},{name:"Delete",average:"O(log n)*",worst:"O(n)",description:"Amortized logarithmic"},{name:"Splay",average:"O(log n)*",worst:"O(n)",description:"Brings node to root"}],note:"* Amortized - while single operations can be O(n), any sequence of m operations takes O(m log n) total time."},mx={title:"Common Use Cases",items:["Cache implementations (LRU-like behavior)","Garbage collectors","Network routers (IP lookup)","Situations with temporal locality","When same elements accessed repeatedly"]},gx={title:"Splay Tree vs Other Trees",items:[{vs:"AVL",advantage:"Simpler (no balance info), better for skewed access"},{vs:"Red-Black",advantage:"Self-optimizing for access patterns"},{vs:"BST",advantage:"Better amortized performance"}]},vx={size:"Nodes",height:"Height",root:"Root"},yx={emptyTree:"Splay Tree is empty. Insert some values!",insertSuccess:"Inserted {value} (now at root)",deleteSuccess:"Deleted {value}",deleteNotFound:"Value {value} not found",searchFound:"Found {value} (splayed to root)",searchNotFound:"Value {value} not found",clearSuccess:"Splay Tree cleared!",traversalResult:"{type}: {result}",errorNoValue:"Please enter a value!",errorInsert:"Error inserting value",errorDelete:"Error deleting value",errorSearch:"Error searching value",errorClear:"Error clearing Splay Tree"},xx=[{type:"color",className:"root-color",label:"Root (Most Recent)"},{type:"color",className:"node-color",label:"Node"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Found"}],jx={concept:cx,properties:ux,operations:dx,splayOperations:hx,traversals:px,complexity:fx,useCases:mx,comparison:gx,infoLabels:vx,messages:yx,legend:xx},kx={title:"What is a Min Heap?",description:"A Min Heap is a complete binary tree where each parent node is smaller than or equal to its children. The minimum element is always at the root, making it perfect for priority queues.",codeExample:`       [1]  <- Min at root
      /    \\
    [3]    [2]
   /  \\    /
 [7]  [6][4]

Array: [1, 3, 2, 7, 6, 4]
Parent always <= Children`,analogy:"Like a tournament bracket where the winner (smallest) rises to the top - the champion is always at the root!"},Nx={title:"Min Heap Properties",items:[{label:"Heap Property",value:"Parent <= Children"},{label:"Complete Tree",value:"Filled level by level"},{label:"Array Storage",value:"Parent(i)=(i-1)/2"},{label:"Min Access",value:"O(1) to get minimum"}]},wx={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},extract:{label:"Extract Min",buttonText:"Extract Min"},peek:{label:"Peek Min",buttonText:"Peek"},build:{label:"Build from Array",placeholder:"e.g., 5,3,8,1,2",buttonText:"Build Heap"},clear:{buttonText:"Clear"}},bx={title:"Heap Operations",items:[{name:"Insert",description:"Add at end, bubble up (heapify up)",complexity:"O(log n)"},{name:"Extract Min",description:"Remove root, replace with last, bubble down",complexity:"O(log n)"},{name:"Peek",description:"Return root without removing",complexity:"O(1)"},{name:"Build Heap",description:"Heapify from array (bottom-up)",complexity:"O(n)"}]},Sx={title:"Array Representation",items:[{formula:"Parent(i)",value:"(i - 1) / 2"},{formula:"Left Child(i)",value:"2*i + 1"},{formula:"Right Child(i)",value:"2*i + 2"}]},Tx={title:"Time Complexity",operations:[{name:"Insert",average:"O(log n)",worst:"O(log n)",description:"Bubble up to root"},{name:"Extract Min",average:"O(log n)",worst:"O(log n)",description:"Bubble down"},{name:"Peek/Get Min",average:"O(1)",worst:"O(1)",description:"Always at root"},{name:"Build Heap",average:"O(n)",worst:"O(n)",description:"Bottom-up heapify"}],note:"Space complexity is O(n). Complete tree structure ensures height is always O(log n)."},Cx={title:"Common Use Cases",items:["Priority Queues (process by priority)","Dijkstra's shortest path algorithm","Prim's minimum spanning tree","Huffman coding (compression)","Event-driven simulation","K smallest/largest elements"]},Ex={title:"Min Heap vs Other Structures",items:[{vs:"Sorted Array",advantage:"O(log n) insert vs O(n)"},{vs:"BST",advantage:"O(1) get min vs O(log n)"},{vs:"Max Heap",advantage:"Fast min access vs fast max"}]},Lx={size:"Size",height:"Height",min:"Min"},Rx={emptyHeap:"Min Heap is empty. Insert some values!",insertSuccess:"Inserted {value}",extractSuccess:"Extracted minimum: {value}",peekSuccess:"Minimum element is {value}",buildSuccess:"Built heap from array",clearSuccess:"Heap cleared!",errorNoValue:"Please enter a value!",errorEmpty:"Heap is empty!",errorFull:"Heap is full!",errorInsert:"Error inserting value",errorExtract:"Error extracting minimum"},Ox=[{type:"color",className:"root-color",label:"Root (Min)"},{type:"color",className:"node-color",label:"Internal Node"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Swapping"}],_x={concept:kx,properties:Nx,operations:wx,heapOperations:bx,arrayRepresentation:Sx,complexity:Tx,useCases:Cx,comparison:Ex,infoLabels:Lx,messages:Rx,legend:Ox},Px={title:"What is a Max Heap?",description:"A Max Heap is a complete binary tree where each parent node is greater than or equal to its children. The maximum element is always at the root, ideal for priority queues where largest = highest priority.",codeExample:`       [9]  <- Max at root
      /    \\
    [7]    [8]
   /  \\    /
 [3]  [5][6]

Array: [9, 7, 8, 3, 5, 6]
Parent always >= Children`,analogy:"Like a corporate hierarchy - the CEO (maximum) is at the top, and each manager has authority over their subordinates!"},Ix={title:"Max Heap Properties",items:[{label:"Heap Property",value:"Parent >= Children"},{label:"Complete Tree",value:"Filled level by level"},{label:"Array Storage",value:"Parent(i)=(i-1)/2"},{label:"Max Access",value:"O(1) to get maximum"}]},zx={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},extract:{label:"Extract Max",buttonText:"Extract Max"},peek:{label:"Peek Max",buttonText:"Peek"},build:{label:"Build from Array",placeholder:"e.g., 5,3,8,1,2",buttonText:"Build Heap"},clear:{buttonText:"Clear"}},Mx={title:"Heap Operations",items:[{name:"Insert",description:"Add at end, bubble up (heapify up)",complexity:"O(log n)"},{name:"Extract Max",description:"Remove root, replace with last, bubble down",complexity:"O(log n)"},{name:"Peek",description:"Return root without removing",complexity:"O(1)"},{name:"Build Heap",description:"Heapify from array (bottom-up)",complexity:"O(n)"}]},Ax={title:"Array Representation",items:[{formula:"Parent(i)",value:"(i - 1) / 2"},{formula:"Left Child(i)",value:"2*i + 1"},{formula:"Right Child(i)",value:"2*i + 2"}]},Vx={title:"Time Complexity",operations:[{name:"Insert",average:"O(log n)",worst:"O(log n)",description:"Bubble up to root"},{name:"Extract Max",average:"O(log n)",worst:"O(log n)",description:"Bubble down"},{name:"Peek/Get Max",average:"O(1)",worst:"O(1)",description:"Always at root"},{name:"Build Heap",average:"O(n)",worst:"O(n)",description:"Bottom-up heapify"}],note:"Space complexity is O(n). Complete tree structure ensures height is always O(log n)."},Fx={title:"Common Use Cases",items:["Priority Queues (largest = highest priority)","Heap Sort algorithm","Job scheduling (highest priority first)","Finding K largest elements","Median maintenance (with min heap)","Stock trading (highest bid)"]},Dx={title:"Max Heap vs Other Structures",items:[{vs:"Sorted Array",advantage:"O(log n) insert vs O(n)"},{vs:"BST",advantage:"O(1) get max vs O(log n)"},{vs:"Min Heap",advantage:"Fast max access vs fast min"}]},$x={size:"Size",height:"Height",max:"Max"},Hx={emptyHeap:"Max Heap is empty. Insert some values!",insertSuccess:"Inserted {value}",extractSuccess:"Extracted maximum: {value}",peekSuccess:"Maximum element is {value}",buildSuccess:"Built heap from array",clearSuccess:"Heap cleared!",errorNoValue:"Please enter a value!",errorEmpty:"Heap is empty!",errorFull:"Heap is full!",errorInsert:"Error inserting value",errorExtract:"Error extracting maximum"},Bx=[{type:"color",className:"root-color",label:"Root (Max)"},{type:"color",className:"node-color",label:"Internal Node"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Swapping"}],qx={concept:Px,properties:Ix,operations:zx,heapOperations:Mx,arrayRepresentation:Ax,complexity:Vx,useCases:Fx,comparison:Dx,infoLabels:$x,messages:Hx,legend:Bx},Ux={stack:Vv,queue:Qv,linkedlist:sy,binarytree:my,hashtable:Cy,hashtableChaining:K,hashtableQuadratic:Vy,bst:Xy,avl:ox,splay:jx,minheap:_x,maxheap:qx};function Hr({dataStructure:e}){const n=Ux[e];return n?t.jsxs("div",{className:"concepts-panel",children:[n.concept&&t.jsxs("div",{className:"concept-box",children:[t.jsxs("div",{className:"concept-header",children:[t.jsx(Je,{className:"icon-sm"}),t.jsx("span",{children:n.concept.title})]}),t.jsxs("div",{className:"concept-content",children:[t.jsx("p",{children:n.concept.description}),n.concept.codeExample&&t.jsx("pre",{className:"concept-code-example",children:t.jsx("code",{children:n.concept.codeExample})}),n.concept.analogy&&t.jsxs("div",{className:"concept-analogy",children:[t.jsx(Fe,{}),t.jsx("span",{children:n.concept.analogy})]})]})]}),n.properties&&t.jsxs("div",{className:"concept-box",children:[t.jsxs("div",{className:"concept-header",children:[t.jsx(Pn,{className:"icon-sm"}),t.jsx("span",{children:n.properties.title})]}),t.jsx("div",{className:"concept-content",children:t.jsx("div",{className:"properties-grid",children:n.properties.items.map((r,s)=>t.jsxs("div",{className:"property-item",children:[t.jsx("span",{className:"property-label",children:r.label}),t.jsx("span",{className:"property-value",children:r.value})]},s))})})]}),n.complexity&&t.jsxs("div",{className:"concept-box",children:[t.jsxs("div",{className:"concept-header",children:[t.jsx(Mm,{className:"icon-sm"}),t.jsx("span",{children:n.complexity.title})]}),t.jsxs("div",{className:"concept-content",children:[t.jsx("div",{className:"complexity-table",children:n.complexity.operations.map((r,s)=>t.jsxs("div",{className:"complexity-row",children:[t.jsx("span",{className:"complexity-name",children:r.name}),r.time&&t.jsx("code",{className:"complexity-time",children:r.time}),r.average&&t.jsxs(t.Fragment,{children:[t.jsx("code",{className:"complexity-avg",children:r.average}),r.worst&&t.jsx("code",{className:"complexity-worst",children:r.worst})]}),r.description&&t.jsx("span",{className:"complexity-desc",children:r.description})]},s))}),n.complexity.note&&t.jsx("p",{className:"complexity-note",children:n.complexity.note})]})]}),n.useCases&&t.jsxs("div",{className:"concept-box",children:[t.jsxs("div",{className:"concept-header",children:[t.jsx(Ul,{className:"icon-sm"}),t.jsx("span",{children:n.useCases.title})]}),t.jsx("div",{className:"concept-content",children:t.jsx("ul",{className:"use-cases-list",children:n.useCases.items.map((r,s)=>t.jsxs("li",{children:[t.jsx(_m,{className:"icon-xs"}),t.jsx("span",{children:r})]},s))})})]}),n.traversals&&t.jsxs("div",{className:"concept-box",children:[t.jsxs("div",{className:"concept-header",children:[t.jsx(Pn,{className:"icon-sm"}),t.jsx("span",{children:n.traversals.title})]}),t.jsx("div",{className:"concept-content",children:t.jsx("div",{className:"traversals-list",children:n.traversals.items.map((r,s)=>t.jsxs("div",{className:"traversal-item",children:[t.jsx("span",{className:"traversal-name",children:r.name}),t.jsx("span",{className:"traversal-order",children:r.order}),t.jsx("span",{className:"traversal-use",children:r.use})]},s))})})]}),n.deleteCases&&t.jsxs("div",{className:"concept-box",children:[t.jsxs("div",{className:"concept-header",children:[t.jsx(Pn,{className:"icon-sm"}),t.jsx("span",{children:n.deleteCases.title})]}),t.jsx("div",{className:"concept-content",children:t.jsx("div",{className:"delete-cases-grid",children:n.deleteCases.items.map((r,s)=>t.jsxs("div",{className:"delete-case-item",children:[t.jsx("span",{className:"case-number",children:s+1}),t.jsxs("div",{children:[t.jsx("strong",{children:r.name}),t.jsx("p",{children:r.description})]})]},s))})})]}),n.comparison&&t.jsxs("div",{className:"concept-box",children:[t.jsxs("div",{className:"concept-header",children:[t.jsx(Pn,{className:"icon-sm"}),t.jsx("span",{children:n.comparison.title})]}),t.jsx("div",{className:"concept-content",children:t.jsx("div",{className:"comparison-list",children:n.comparison.items.map((r,s)=>t.jsxs("div",{className:"comparison-item",children:[t.jsxs("span",{className:"comparison-vs",children:["vs ",r.vs]}),t.jsx("span",{className:"comparison-advantage",children:r.advantage})]},s))})})]})]}):t.jsx("div",{className:"concepts-panel",children:t.jsx("p",{children:"Concepts not available for this data structure."})})}const Ct=7,Kx={inorder:{name:"Inorder Traversal",order:"Left -> Root -> Right",description:"Returns elements in SORTED order for BST. This is the key property of BST!",useCase:["Get sorted elements","Validate BST","Range queries"],complexity:{time:"O(n)",space:"O(h)"}},preorder:{name:"Preorder Traversal",order:"Root -> Left -> Right",description:"Process root first. Useful for copying/serializing the BST structure.",useCase:["Copy tree structure","Serialize BST","Prefix expressions"],complexity:{time:"O(n)",space:"O(h)"}},postorder:{name:"Postorder Traversal",order:"Left -> Right -> Root",description:"Process children before root. Essential for safely deleting the tree.",useCase:["Delete tree safely","Calculate subtree sizes","Postfix expressions"],complexity:{time:"O(n)",space:"O(h)"}},levelorder:{name:"Level Order Traversal",order:"Level by Level (BFS)",description:"Visit nodes level by level using a queue. Shows tree structure clearly.",useCase:["Level-wise printing","Find width","Serialize for reconstruction"],complexity:{time:"O(n)",space:"O(w)"}}},Bi=(e,n=0)=>e?Math.max(Bi(e.left,n+1),Bi(e.right,n+1)):n-1,Wx=(e,n)=>{const r=[];let s=e;for(;s&&(r.push(s.value),s.value!==n);)n<s.value?s=s.left:s=s.right;return r};function Qx({insertValue:e,deleteValue:n,searchValue:r,size:s,height:a,message:i,tree:l,isAnimating:o,visitedNodes:c,searchPath:d,searchResult:u,onInsertValueChange:h,onDeleteValueChange:f,onSearchValueChange:N,onInsert:k,onDelete:j,onSearch:y,onTraversal:p,onClear:m,onResetTraversal:v}){const C=(S,z)=>{const E=S.target.value;(E===""||E==="-"||/^-?\d*\.?\d*$/.test(E))&&z(E)};return t.jsxs("div",{className:"control-panel",children:[t.jsx("h2",{children:"Binary Search Tree"}),t.jsxs("div",{className:"operation-group",children:[t.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),t.jsxs("div",{className:"input-group",children:[t.jsx("input",{type:"number",id:"insertValue",value:e,onChange:S=>C(S,h),onKeyDown:S=>S.key==="Enter"&&k(),placeholder:"Enter a number",disabled:o}),t.jsx("button",{onClick:k,className:"btn btn-insert",disabled:o,children:"Insert"})]})]}),t.jsxs("div",{className:"operation-group",children:[t.jsx("label",{htmlFor:"searchValue",children:"Search Value"}),t.jsxs("div",{className:"input-group",children:[t.jsx("input",{type:"number",id:"searchValue",value:r,onChange:S=>C(S,N),onKeyDown:S=>S.key==="Enter"&&y(),placeholder:"Enter a number",disabled:o}),t.jsxs("button",{onClick:y,className:"btn btn-search",disabled:o||!l,children:[t.jsx(da,{size:16})," Search"]})]}),d.length>0&&t.jsxs("div",{className:"search-path-display",children:[t.jsx("span",{className:"search-path-label",children:"Path:"}),t.jsx("div",{className:"search-path-nodes",children:d.map((S,z)=>t.jsxs(ot.Fragment,{children:[t.jsx("span",{className:`search-path-node ${z===d.length-1?u?"found":"not-found":""}`,children:S}),z<d.length-1&&t.jsx(Y,{size:14,className:"search-path-arrow"})]},z))})]})]}),t.jsxs("div",{className:"operation-group",children:[t.jsx("label",{htmlFor:"deleteValue",children:"Delete Value"}),t.jsxs("div",{className:"input-group",children:[t.jsx("input",{type:"number",id:"deleteValue",value:n,onChange:S=>C(S,f),onKeyDown:S=>S.key==="Enter"&&j(),placeholder:"Enter a number",disabled:o}),t.jsx("button",{onClick:j,className:"btn btn-delete",disabled:o,children:"Delete"})]})]}),t.jsxs("div",{className:"operation-group",children:[t.jsx("label",{children:"Traversals"}),t.jsx("div",{className:"btn-group",children:["inorder","preorder","postorder","levelorder"].map(S=>t.jsxs("button",{onClick:()=>p(S),className:`btn btn-traversal ${S==="inorder"?"btn-traversal-primary":""}`,disabled:o||!l,title:S==="inorder"?"Returns sorted order!":"",children:[S==="levelorder"?"Level Order":S.charAt(0).toUpperCase()+S.slice(1),S==="inorder"&&t.jsx("span",{className:"sorted-badge",children:"Sorted!"})]},S))}),c.length>0&&!o&&t.jsx("button",{onClick:v,className:"btn btn-secondary",style:{marginTop:"0.5rem",width:"100%"},children:"Reset Colors"})]}),t.jsxs("div",{className:"traversal-legend",children:[t.jsxs("div",{className:"legend-item",children:[t.jsx("span",{className:"legend-dot legend-dot--default"}),t.jsx("span",{children:"Not visited"})]}),t.jsxs("div",{className:"legend-item",children:[t.jsx("span",{className:"legend-dot legend-dot--visiting"}),t.jsx("span",{children:"Current"})]}),t.jsxs("div",{className:"legend-item",children:[t.jsx("span",{className:"legend-dot legend-dot--visited"}),t.jsx("span",{children:"Visited"})]}),t.jsxs("div",{className:"legend-item",children:[t.jsx("span",{className:"legend-dot legend-dot--search"}),t.jsx("span",{children:"Search path"})]})]}),t.jsxs("div",{className:"info-panel",children:[t.jsxs("div",{className:"info-item",children:[t.jsx("span",{className:"info-label",children:"Nodes:"}),t.jsx("span",{className:"info-value",children:s})]}),t.jsxs("div",{className:"info-item",children:[t.jsx("span",{className:"info-label",children:"Height:"}),t.jsx("span",{className:"info-value",children:a})]}),t.jsxs("div",{className:"info-item",children:[t.jsx("span",{className:"info-label",children:"Max:"}),t.jsx("span",{className:"info-value",children:Ct})]})]}),s>=Ct*.8&&s<Ct&&t.jsxs("div",{className:"warning-box",children:[t.jsx(wn,{size:18}),t.jsxs("div",{children:[t.jsx("strong",{children:"Tree filling up!"})," ",s,"/",Ct," nodes."]})]}),t.jsx("div",{className:"operation-group",children:t.jsx("button",{onClick:m,className:"btn btn-clear",disabled:o,children:"Clear Tree"})}),i&&t.jsx("div",{className:`message message-${i.includes("Error")||i.includes("error")||i.includes("not found")?"error":/success|complete|Inserted|Deleted|cleared|Found/i.test(i)?"success":i.includes("full")?"warning":"info"}`,children:i})]})}function Gx({tree:e,currentNode:n,visitedNodes:r,searchPath:s,searchResult:a}){const i=u=>{const h=n===u,f=r.includes(u),N=s.includes(u),k=s.length>0&&s[s.length-1]===u;let j="#6366f1",y="none";return h?(j="#f59e0b",y="drop-shadow(0 0 12px #f59e0b) drop-shadow(0 0 20px #f59e0b)"):k?(j=a?"#10b981":"#ef4444",y=a?"drop-shadow(0 0 12px #10b981)":"drop-shadow(0 0 12px #ef4444)"):N?(j="#3b82f6",y="drop-shadow(0 0 8px #3b82f6)"):f&&(j="#10b981",y="drop-shadow(0 0 6px #10b981)"),{color:j,glow:y,radius:h||k?30:25,stroke:h||k?3:2,fontSize:h||k?16:14,fontWeight:h||k?"bold":"normal"}},l=(u,h,f,N,k)=>{if(!u)return[];const j=Math.pow(2,k-N)*50,y=i(u.value),p=[];if(u.left){const m=s.includes(u.value)&&s.includes(u.left.value);p.push(t.jsx("line",{x1:h,y1:f,x2:h-j,y2:f+100,stroke:m?"#3b82f6":"rgba(255,255,255,0.3)",strokeWidth:m?3:2},`l-${u.value}-l`)),p.push(...l(u.left,h-j,f+100,N+1,k))}if(u.right){const m=s.includes(u.value)&&s.includes(u.right.value);p.push(t.jsx("line",{x1:h,y1:f,x2:h+j,y2:f+100,stroke:m?"#3b82f6":"rgba(255,255,255,0.3)",strokeWidth:m?3:2},`l-${u.value}-r`)),p.push(...l(u.right,h+j,f+100,N+1,k))}return p.push(t.jsxs("g",{style:{filter:y.glow,transition:"all 0.3s ease"},children:[t.jsx("circle",{cx:h,cy:f,r:y.radius,fill:y.color,stroke:"white",strokeWidth:y.stroke,style:{transition:"all 0.3s ease"}}),t.jsx("text",{x:h,y:f,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:y.fontSize,fontWeight:y.fontWeight,children:u.value})]},`n-${u.value}-${h}`)),p};if(!e)return t.jsxs("div",{className:"tree-empty",children:[t.jsx("p",{children:"BST is empty. Insert some values!"}),t.jsx("p",{className:"tree-empty-hint",children:"Try: 50, 30, 70, 20, 40, 60, 80"})]});const o=Bi(e),c=(o+1)*100+50,d=Math.max(800,Math.pow(2,Math.max(o,1))*80);return t.jsx("svg",{width:d,height:c,className:"tree-svg",children:l(e,d/2,50,0,o)})}function Xx({traversalType:e,traversalResult:n,isAnimating:r,traversalComplete:s}){if(!e||n.length===0&&!r)return null;const a=Kx[e];return t.jsxs("div",{className:"traversal-output-panel",children:[t.jsxs("div",{style:{marginBottom:"1rem"},children:[t.jsxs("h3",{className:"traversal-title",children:[a==null?void 0:a.name,e==="inorder"&&t.jsx("span",{className:"sorted-indicator",children:"Returns Sorted Order!"}),r&&t.jsx("span",{className:"traversal-badge traversal-badge--running",children:"Running..."}),s&&t.jsx("span",{className:"traversal-badge traversal-badge--complete",children:"Complete"})]}),t.jsxs("p",{className:"traversal-order",children:[t.jsx("strong",{children:"Order:"})," ",a==null?void 0:a.order]}),t.jsx("p",{className:"traversal-description",children:a==null?void 0:a.description})]}),t.jsxs("div",{className:"traversal-output-box",children:[t.jsx("div",{className:"traversal-output-label",children:"Output Sequence:"}),t.jsx("div",{className:"traversal-sequence-container",children:n.length===0&&r?t.jsx("span",{style:{color:"var(--text-muted)",fontStyle:"italic"},children:"Traversing..."}):n.map((i,l)=>t.jsx("span",{className:`traversal-node ${l===n.length-1&&!s?"traversal-node--current":"traversal-node--complete"}`,children:i},l))})]}),s&&n.length>0&&t.jsxs("div",{className:"traversal-array-section",children:[t.jsx("div",{className:"traversal-array-label",children:"Array Output:"}),t.jsxs("code",{className:"traversal-array-output",children:["[",n.join(", "),"]"]}),e==="inorder"&&t.jsx("p",{className:"traversal-sorted-note",children:"Notice: The output is sorted! This is the BST property."}),t.jsxs("p",{className:"traversal-use-case",children:["Use case: ",a==null?void 0:a.useCase.join(" | ")]}),t.jsxs("div",{className:"traversal-complexity",children:[t.jsx("strong",{children:"Time:"})," ",t.jsx("code",{className:"complexity-value",children:a==null?void 0:a.complexity.time}),t.jsx("br",{}),t.jsx("strong",{children:"Space:"})," ",t.jsx("code",{className:"complexity-value",children:a==null?void 0:a.complexity.space})]})]})]})}function Zx(){const[e,n]=g.useState(null),[r,s]=g.useState(0),[a,i]=g.useState(-1),[l,o]=g.useState(""),[c,d]=g.useState(""),[u,h]=g.useState(""),[f,N]=g.useState(""),[k,j]=g.useState([]),[y,p]=g.useState(null),[m,v]=g.useState([]),[C,S]=g.useState(!1),[z,E]=g.useState(null),[_,A]=g.useState([]),[O,$]=g.useState(null),[Q,V]=g.useState(!1);g.useEffect(()=>{D()},[]);const D=async()=>{try{const B=await(await fetch("/api/bst")).json();n(B.tree),s(B.size||0),i(B.height!==void 0?B.height:-1)}catch(I){console.error("Error loading BST:",I)}},w=I=>{N(I),setTimeout(()=>N(""),3e3)},L=()=>{j([]),p(null)},P=async()=>{if(!l.trim()){w("Please enter a number!");return}const I=Number(l);if(isNaN(I)){w("Please enter a valid number!");return}if(r>=Ct){w(`Tree is full! Maximum size is ${Ct} nodes.`);return}L(),M();try{const q=await(await fetch("/api/bst/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:I})})).json();if(q.error){w(q.error);return}n(q.tree),s(q.size||0),i(q.height!==void 0?q.height:-1),w(`Inserted ${I}`),o("")}catch{w("Error inserting node")}},b=async()=>{if(!c.trim()){w("Please enter a number!");return}const I=Number(c);if(isNaN(I)){w("Please enter a valid number!");return}L(),M();try{const q=await(await fetch("/api/bst/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:I})})).json();if(q.error){w(q.error);return}n(q.tree),s(q.size||0),i(q.height!==void 0?q.height:-1),w(`Deleted ${I}`),d("")}catch{w("Error deleting node")}},T=async()=>{if(!u.trim()){w("Please enter a number!");return}const I=Number(u);if(isNaN(I)){w("Please enter a valid number!");return}if(!e){w("Tree is empty!");return}M(),S(!0);const B=Wx(e,I);for(let q=0;q<B.length;q++)j(B.slice(0,q+1)),await new Promise(W=>setTimeout(W,500));try{const W=await(await fetch(`/api/bst/search?value=${I}`)).json();p(W.found),W.found?w(`Found ${I}!`):w(`${I} not found in BST`)}catch{w("Error searching")}S(!1),h("")},x=async()=>{try{await fetch("/api/bst/clear",{method:"POST"}),n(null),s(0),i(-1),M(),L(),w("BST cleared!")}catch{w("Error clearing tree")}},R=async I=>{if(!e){w("Tree is empty! Insert some nodes first.");return}L(),S(!0),v([]),E(null),A([]),$(I),V(!1);try{const W=(await(await fetch(`/api/bst/${I}`)).json()).traversal||[];if(W.length===0){w("Tree is empty!"),S(!1);return}for(let Ee=0;Ee<W.length;Ee++)E(W[Ee]),await new Promise(oe=>setTimeout(oe,600)),A(oe=>[...oe,W[Ee]]),v(oe=>[...oe,W[Ee]]),await new Promise(oe=>setTimeout(oe,200));E(null),V(!0),S(!1);const Ce=I.charAt(0).toUpperCase()+I.slice(1);w(`${Ce} traversal complete!${I==="inorder"?" (Sorted!)":""}`)}catch(B){console.error("Traversal error:",B),w("Error performing traversal"),S(!1)}},M=()=>{v([]),E(null),A([]),$(null),V(!1)};return t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"intro-layout",children:[t.jsx("div",{className:"intro-left",children:t.jsx(Hr,{dataStructure:"bst"})}),t.jsx(Se,{context:"Binary Search Tree (BST) data structure, search, insert, delete operations, and traversals"})]}),t.jsxs("div",{className:"visualizer-layout",children:[t.jsx(Qx,{insertValue:l,deleteValue:c,searchValue:u,size:r,height:a,message:f,tree:e,isAnimating:C,visitedNodes:_,searchPath:k,searchResult:y,onInsertValueChange:o,onDeleteValueChange:d,onSearchValueChange:h,onInsert:P,onDelete:b,onSearch:T,onTraversal:R,onClear:x,onResetTraversal:()=>{M(),L()}}),t.jsxs("div",{className:"visual-panel",children:[t.jsx("h2",{children:"BST Visualization"}),t.jsxs("p",{className:"bst-property-reminder",children:["Remember: ",t.jsxs("code",{children:["Left ","<"," Parent ","<"," Right"]})]}),t.jsx("div",{className:"tree-container",children:t.jsx(Gx,{tree:e,currentNode:z,visitedNodes:_,searchPath:k,searchResult:y})}),t.jsx(Xx,{traversalType:O,traversalResult:m,isAnimating:C,traversalComplete:Q})]})]}),t.jsx(Te,{dataStructure:"bst"})]})}const Et=7,Jx={inorder:{name:"Inorder Traversal",order:"Left -> Root -> Right",description:"Returns elements in SORTED order.",useCase:["Get sorted elements","Validate BST property"],complexity:{time:"O(n)",space:"O(h)"}},preorder:{name:"Preorder Traversal",order:"Root -> Left -> Right",description:"Process root first. Useful for copying tree structure.",useCase:["Copy tree structure","Serialize AVL"],complexity:{time:"O(n)",space:"O(h)"}},postorder:{name:"Postorder Traversal",order:"Left -> Right -> Root",description:"Process children before root.",useCase:["Delete tree safely","Calculate subtree info"],complexity:{time:"O(n)",space:"O(h)"}},levelorder:{name:"Level Order Traversal",order:"Level by Level (BFS)",description:"Visit nodes level by level using a queue.",useCase:["Level-wise printing","Find width"],complexity:{time:"O(n)",space:"O(w)"}}},qi=(e,n=0)=>e?Math.max(qi(e.left,n+1),qi(e.right,n+1)):n-1,Yx=(e,n)=>{const r=[];let s=e;for(;s&&(r.push(s.value),s.value!==n);)n<s.value?s=s.left:s=s.right;return r};function e0({insertValue:e,deleteValue:n,searchValue:r,size:s,height:a,message:i,tree:l,isAnimating:o,visitedNodes:c,searchPath:d,searchResult:u,onInsertValueChange:h,onDeleteValueChange:f,onSearchValueChange:N,onInsert:k,onDelete:j,onSearch:y,onTraversal:p,onClear:m,onResetTraversal:v}){const C=(S,z)=>{const E=S.target.value;(E===""||E==="-"||/^-?\d*\.?\d*$/.test(E))&&z(E)};return t.jsxs("div",{className:"control-panel",children:[t.jsx("h2",{children:"AVL Tree"}),t.jsxs("div",{className:"operation-group",children:[t.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),t.jsxs("div",{className:"input-group",children:[t.jsx("input",{type:"number",id:"insertValue",value:e,onChange:S=>C(S,h),onKeyDown:S=>S.key==="Enter"&&k(),placeholder:"Enter a number",disabled:o}),t.jsx("button",{onClick:k,className:"btn btn-insert",disabled:o,children:"Insert"})]})]}),t.jsxs("div",{className:"operation-group",children:[t.jsx("label",{htmlFor:"searchValue",children:"Search Value"}),t.jsxs("div",{className:"input-group",children:[t.jsx("input",{type:"number",id:"searchValue",value:r,onChange:S=>C(S,N),onKeyDown:S=>S.key==="Enter"&&y(),placeholder:"Enter a number",disabled:o}),t.jsxs("button",{onClick:y,className:"btn btn-search",disabled:o||!l,children:[t.jsx(da,{size:16})," Search"]})]}),d.length>0&&t.jsxs("div",{className:"search-path-display",children:[t.jsx("span",{className:"search-path-label",children:"Path:"}),t.jsx("div",{className:"search-path-nodes",children:d.map((S,z)=>t.jsxs(ot.Fragment,{children:[t.jsx("span",{className:`search-path-node ${z===d.length-1?u?"found":"not-found":""}`,children:S}),z<d.length-1&&t.jsx(Y,{size:14,className:"search-path-arrow"})]},z))})]})]}),t.jsxs("div",{className:"operation-group",children:[t.jsx("label",{htmlFor:"deleteValue",children:"Delete Value"}),t.jsxs("div",{className:"input-group",children:[t.jsx("input",{type:"number",id:"deleteValue",value:n,onChange:S=>C(S,f),onKeyDown:S=>S.key==="Enter"&&j(),placeholder:"Enter a number",disabled:o}),t.jsx("button",{onClick:j,className:"btn btn-delete",disabled:o,children:"Delete"})]})]}),t.jsxs("div",{className:"operation-group",children:[t.jsx("label",{children:"Traversals"}),t.jsx("div",{className:"btn-group",children:["inorder","preorder","postorder","levelorder"].map(S=>t.jsx("button",{onClick:()=>p(S),className:"btn btn-traversal",disabled:o||!l,children:S==="levelorder"?"Level Order":S.charAt(0).toUpperCase()+S.slice(1)},S))}),c.length>0&&!o&&t.jsx("button",{onClick:v,className:"btn btn-secondary",style:{marginTop:"0.5rem",width:"100%"},children:"Reset Colors"})]}),t.jsxs("div",{className:"traversal-legend",children:[t.jsxs("div",{className:"legend-item",children:[t.jsx("span",{className:"legend-dot legend-dot--default"}),t.jsx("span",{children:"Not visited"})]}),t.jsxs("div",{className:"legend-item",children:[t.jsx("span",{className:"legend-dot legend-dot--visiting"}),t.jsx("span",{children:"Current"})]}),t.jsxs("div",{className:"legend-item",children:[t.jsx("span",{className:"legend-dot legend-dot--visited"}),t.jsx("span",{children:"Visited"})]}),t.jsxs("div",{className:"legend-item",children:[t.jsx("span",{className:"legend-dot legend-dot--search"}),t.jsx("span",{children:"Search path"})]})]}),t.jsxs("div",{className:"info-panel",children:[t.jsxs("div",{className:"info-item",children:[t.jsx("span",{className:"info-label",children:"Nodes:"}),t.jsx("span",{className:"info-value",children:s})]}),t.jsxs("div",{className:"info-item",children:[t.jsx("span",{className:"info-label",children:"Height:"}),t.jsx("span",{className:"info-value",children:a})]}),t.jsxs("div",{className:"info-item",children:[t.jsx("span",{className:"info-label",children:"Max:"}),t.jsx("span",{className:"info-value",children:Et})]})]}),s>=Et*.8&&s<Et&&t.jsxs("div",{className:"warning-box",children:[t.jsx(wn,{size:18}),t.jsxs("div",{children:[t.jsx("strong",{children:"Tree filling up!"})," ",s,"/",Et," nodes."]})]}),t.jsx("div",{className:"operation-group",children:t.jsx("button",{onClick:m,className:"btn btn-clear",disabled:o,children:"Clear Tree"})}),i&&t.jsx("div",{className:`message message-${i.includes("Error")||i.includes("error")||i.includes("not found")?"error":/success|complete|Inserted|Deleted|cleared|Found|rebalanced/i.test(i)?"success":i.includes("full")?"warning":"info"}`,children:i})]})}function n0({tree:e,currentNode:n,visitedNodes:r,searchPath:s,searchResult:a}){const i=u=>{const h=n===u,f=r.includes(u),N=s.includes(u),k=s.length>0&&s[s.length-1]===u;let j="#8b5cf6",y="none";return h?(j="#f59e0b",y="drop-shadow(0 0 12px #f59e0b) drop-shadow(0 0 20px #f59e0b)"):k?(j=a?"#10b981":"#ef4444",y=a?"drop-shadow(0 0 12px #10b981)":"drop-shadow(0 0 12px #ef4444)"):N?(j="#3b82f6",y="drop-shadow(0 0 8px #3b82f6)"):f&&(j="#10b981",y="drop-shadow(0 0 6px #10b981)"),{color:j,glow:y,radius:h||k?30:25,stroke:h||k?3:2,fontSize:h||k?16:14,fontWeight:h||k?"bold":"normal"}},l=(u,h,f,N,k)=>{if(!u)return[];const j=Math.pow(2,k-N)*50,y=i(u.value),p=[];if(u.left){const m=s.includes(u.value)&&s.includes(u.left.value);p.push(t.jsx("line",{x1:h,y1:f,x2:h-j,y2:f+100,stroke:m?"#3b82f6":"rgba(255,255,255,0.3)",strokeWidth:m?3:2},`l-${u.value}-l`)),p.push(...l(u.left,h-j,f+100,N+1,k))}if(u.right){const m=s.includes(u.value)&&s.includes(u.right.value);p.push(t.jsx("line",{x1:h,y1:f,x2:h+j,y2:f+100,stroke:m?"#3b82f6":"rgba(255,255,255,0.3)",strokeWidth:m?3:2},`l-${u.value}-r`)),p.push(...l(u.right,h+j,f+100,N+1,k))}return p.push(t.jsxs("g",{style:{filter:y.glow,transition:"all 0.3s ease"},children:[t.jsx("circle",{cx:h,cy:f,r:y.radius,fill:y.color,stroke:"white",strokeWidth:y.stroke,style:{transition:"all 0.3s ease"}}),t.jsx("text",{x:h,y:f,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:y.fontSize,fontWeight:y.fontWeight,children:u.value}),u.balance!==void 0&&t.jsxs("g",{children:[t.jsx("circle",{cx:h+20,cy:f-20,r:10,fill:Math.abs(u.balance)<=1?"#10b981":"#ef4444"}),t.jsx("text",{x:h+20,y:f-20,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:10,fontWeight:"bold",children:u.balance})]})]},`n-${u.value}-${h}`)),p};if(!e)return t.jsxs("div",{className:"tree-empty",children:[t.jsx("p",{children:"AVL Tree is empty. Insert some values!"}),t.jsx("p",{className:"tree-empty-hint",children:"Try: 30, 20, 40, 10 (watch it balance!)"})]});const o=qi(e),c=(o+1)*100+50,d=Math.max(800,Math.pow(2,Math.max(o,1))*80);return t.jsx("svg",{width:d,height:c,className:"tree-svg",children:l(e,d/2,50,0,o)})}function t0({traversalType:e,traversalResult:n,isAnimating:r,traversalComplete:s}){if(!e||n.length===0&&!r)return null;const a=Jx[e];return t.jsxs("div",{className:"traversal-output-panel",children:[t.jsxs("div",{style:{marginBottom:"1rem"},children:[t.jsxs("h3",{className:"traversal-title",children:[a==null?void 0:a.name,r&&t.jsx("span",{className:"traversal-badge traversal-badge--running",children:"Running..."}),s&&t.jsx("span",{className:"traversal-badge traversal-badge--complete",children:"Complete"})]}),t.jsxs("p",{className:"traversal-order",children:[t.jsx("strong",{children:"Order:"})," ",a==null?void 0:a.order]}),t.jsx("p",{className:"traversal-description",children:a==null?void 0:a.description})]}),t.jsxs("div",{className:"traversal-output-box",children:[t.jsx("div",{className:"traversal-output-label",children:"Output Sequence:"}),t.jsx("div",{className:"traversal-sequence-container",children:n.length===0&&r?t.jsx("span",{style:{color:"var(--text-muted)",fontStyle:"italic"},children:"Traversing..."}):n.map((i,l)=>t.jsx("span",{className:`traversal-node ${l===n.length-1&&!s?"traversal-node--current":"traversal-node--complete"}`,children:i},l))})]}),s&&n.length>0&&t.jsxs("div",{className:"traversal-array-section",children:[t.jsx("div",{className:"traversal-array-label",children:"Array Output:"}),t.jsxs("code",{className:"traversal-array-output",children:["[",n.join(", "),"]"]}),t.jsxs("p",{className:"traversal-use-case",children:["Use case: ",a==null?void 0:a.useCase.join(" | ")]}),t.jsxs("div",{className:"traversal-complexity",children:[t.jsx("strong",{children:"Time:"})," ",t.jsx("code",{className:"complexity-value",children:a==null?void 0:a.complexity.time}),t.jsx("br",{}),t.jsx("strong",{children:"Space:"})," ",t.jsx("code",{className:"complexity-value",children:a==null?void 0:a.complexity.space})]})]})]})}function r0(){const[e,n]=g.useState(null),[r,s]=g.useState(0),[a,i]=g.useState(-1),[l,o]=g.useState(""),[c,d]=g.useState(""),[u,h]=g.useState(""),[f,N]=g.useState(""),[k,j]=g.useState([]),[y,p]=g.useState(null),[m,v]=g.useState([]),[C,S]=g.useState(!1),[z,E]=g.useState(null),[_,A]=g.useState([]),[O,$]=g.useState(null),[Q,V]=g.useState(!1);g.useEffect(()=>{D()},[]);const D=async()=>{try{const B=await(await fetch("/api/avl")).json();n(B.tree),s(B.size||0),i(B.height!==void 0?B.height:-1)}catch(I){console.error("Error loading AVL:",I)}},w=I=>{N(I),setTimeout(()=>N(""),3e3)},L=()=>{j([]),p(null)},P=async()=>{if(!l.trim()){w("Please enter a number!");return}const I=Number(l);if(isNaN(I)){w("Please enter a valid number!");return}if(r>=Et){w(`Tree is full! Maximum size is ${Et} nodes.`);return}L(),M();try{const q=await(await fetch("/api/avl/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:I})})).json();if(q.error){w(q.error);return}n(q.tree),s(q.size||0),i(q.height!==void 0?q.height:-1),w(`Inserted ${I} (tree rebalanced)`),o("")}catch{w("Error inserting node")}},b=async()=>{if(!c.trim()){w("Please enter a number!");return}const I=Number(c);if(isNaN(I)){w("Please enter a valid number!");return}L(),M();try{const q=await(await fetch("/api/avl/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:I})})).json();if(q.error){w(q.error);return}n(q.tree),s(q.size||0),i(q.height!==void 0?q.height:-1),w(`Deleted ${I} (tree rebalanced)`),d("")}catch{w("Error deleting node")}},T=async()=>{if(!u.trim()){w("Please enter a number!");return}const I=Number(u);if(isNaN(I)){w("Please enter a valid number!");return}if(!e){w("Tree is empty!");return}M(),S(!0);const B=Yx(e,I);for(let q=0;q<B.length;q++)j(B.slice(0,q+1)),await new Promise(W=>setTimeout(W,500));try{const W=await(await fetch(`/api/avl/search?value=${I}`)).json();p(W.found),W.found?w(`Found ${I}!`):w(`${I} not found in AVL Tree`)}catch{w("Error searching")}S(!1),h("")},x=async()=>{try{await fetch("/api/avl/clear",{method:"POST"}),n(null),s(0),i(-1),M(),L(),w("AVL Tree cleared!")}catch{w("Error clearing tree")}},R=async I=>{if(!e){w("Tree is empty! Insert some nodes first.");return}L(),S(!0),v([]),E(null),A([]),$(I),V(!1);try{const W=(await(await fetch(`/api/avl/${I}`)).json()).traversal||[];if(W.length===0){w("Tree is empty!"),S(!1);return}for(let Ee=0;Ee<W.length;Ee++)E(W[Ee]),await new Promise(oe=>setTimeout(oe,600)),A(oe=>[...oe,W[Ee]]),v(oe=>[...oe,W[Ee]]),await new Promise(oe=>setTimeout(oe,200));E(null),V(!0),S(!1);const Ce=I.charAt(0).toUpperCase()+I.slice(1);w(`${Ce} traversal complete!`)}catch(B){console.error("Traversal error:",B),w("Error performing traversal"),S(!1)}},M=()=>{v([]),E(null),A([]),$(null),V(!1)};return t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"intro-layout",children:[t.jsx("div",{className:"intro-left",children:t.jsx(Hr,{dataStructure:"avl"})}),t.jsx(Se,{context:"AVL Tree data structure, self-balancing BST, rotations, balance factors, and O(log n) guaranteed operations"})]}),t.jsxs("div",{className:"visualizer-layout",children:[t.jsx(e0,{insertValue:l,deleteValue:c,searchValue:u,size:r,height:a,message:f,tree:e,isAnimating:C,visitedNodes:_,searchPath:k,searchResult:y,onInsertValueChange:o,onDeleteValueChange:d,onSearchValueChange:h,onInsert:P,onDelete:b,onSearch:T,onTraversal:R,onClear:x,onResetTraversal:()=>{M(),L()}}),t.jsxs("div",{className:"visual-panel",children:[t.jsx("h2",{children:"AVL Tree Visualization"}),t.jsxs("p",{className:"bst-property-reminder",children:["Self-balancing: ",t.jsx("code",{children:"|Balance Factor| <= 1"})," for all nodes"]}),t.jsx("div",{className:"tree-container",children:t.jsx(n0,{tree:e,currentNode:z,visitedNodes:_,searchPath:k,searchResult:y})}),t.jsx(t0,{traversalType:O,traversalResult:m,isAnimating:C,traversalComplete:Q})]})]}),t.jsx(Te,{dataStructure:"avl"})]})}const Lt=7,s0={inorder:{name:"Inorder Traversal",order:"Left -> Root -> Right",description:"Returns elements in SORTED order.",useCase:["Get sorted elements","Validate BST property"],complexity:{time:"O(n)",space:"O(h)"}},preorder:{name:"Preorder Traversal",order:"Root -> Left -> Right",description:"Process root first. Root shows most recently accessed!",useCase:["See access pattern","Serialize structure"],complexity:{time:"O(n)",space:"O(h)"}},postorder:{name:"Postorder Traversal",order:"Left -> Right -> Root",description:"Process children before root.",useCase:["Delete tree safely","Calculate subtree info"],complexity:{time:"O(n)",space:"O(h)"}},levelorder:{name:"Level Order Traversal",order:"Level by Level (BFS)",description:"Visit nodes level by level.",useCase:["Level-wise printing","Find width"],complexity:{time:"O(n)",space:"O(w)"}}},Ui=(e,n=0)=>e?Math.max(Ui(e.left,n+1),Ui(e.right,n+1)):n-1;function a0({insertValue:e,deleteValue:n,searchValue:r,size:s,height:a,message:i,tree:l,isAnimating:o,visitedNodes:c,lastSplayedValue:d,onInsertValueChange:u,onDeleteValueChange:h,onSearchValueChange:f,onInsert:N,onDelete:k,onSearch:j,onTraversal:y,onClear:p,onResetTraversal:m}){const v=(C,S)=>{const z=C.target.value;(z===""||z==="-"||/^-?\d*\.?\d*$/.test(z))&&S(z)};return t.jsxs("div",{className:"control-panel",children:[t.jsx("h2",{children:"Splay Tree"}),t.jsxs("div",{className:"splay-info-box",children:[t.jsx("strong",{children:"Key Feature:"})," Accessed nodes move to root!"]}),t.jsxs("div",{className:"operation-group",children:[t.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),t.jsxs("div",{className:"input-group",children:[t.jsx("input",{type:"number",id:"insertValue",value:e,onChange:C=>v(C,u),onKeyDown:C=>C.key==="Enter"&&N(),placeholder:"Enter a number",disabled:o}),t.jsx("button",{onClick:N,className:"btn btn-insert",disabled:o,children:"Insert"})]})]}),t.jsxs("div",{className:"operation-group",children:[t.jsx("label",{htmlFor:"searchValue",children:"Search Value (Splays to Root!)"}),t.jsxs("div",{className:"input-group",children:[t.jsx("input",{type:"number",id:"searchValue",value:r,onChange:C=>v(C,f),onKeyDown:C=>C.key==="Enter"&&j(),placeholder:"Enter a number",disabled:o}),t.jsxs("button",{onClick:j,className:"btn btn-search",disabled:o||!l,children:[t.jsx(da,{size:16})," Search"]})]})]}),t.jsxs("div",{className:"operation-group",children:[t.jsx("label",{htmlFor:"deleteValue",children:"Delete Value"}),t.jsxs("div",{className:"input-group",children:[t.jsx("input",{type:"number",id:"deleteValue",value:n,onChange:C=>v(C,h),onKeyDown:C=>C.key==="Enter"&&k(),placeholder:"Enter a number",disabled:o}),t.jsx("button",{onClick:k,className:"btn btn-delete",disabled:o,children:"Delete"})]})]}),t.jsxs("div",{className:"operation-group",children:[t.jsx("label",{children:"Traversals"}),t.jsx("div",{className:"btn-group",children:["inorder","preorder","postorder","levelorder"].map(C=>t.jsx("button",{onClick:()=>y(C),className:"btn btn-traversal",disabled:o||!l,children:C==="levelorder"?"Level Order":C.charAt(0).toUpperCase()+C.slice(1)},C))}),c.length>0&&!o&&t.jsx("button",{onClick:m,className:"btn btn-secondary",style:{marginTop:"0.5rem",width:"100%"},children:"Reset Colors"})]}),t.jsxs("div",{className:"traversal-legend",children:[t.jsxs("div",{className:"legend-item",children:[t.jsx("span",{className:"legend-dot legend-dot--default"}),t.jsx("span",{children:"Not visited"})]}),t.jsxs("div",{className:"legend-item",children:[t.jsx("span",{className:"legend-dot legend-dot--visiting"}),t.jsx("span",{children:"Current"})]}),t.jsxs("div",{className:"legend-item",children:[t.jsx("span",{className:"legend-dot legend-dot--visited"}),t.jsx("span",{children:"Visited"})]}),t.jsxs("div",{className:"legend-item",children:[t.jsx("span",{className:"legend-dot",style:{background:"#ec4899"}}),t.jsx("span",{children:"Root (Splayed)"})]})]}),t.jsxs("div",{className:"info-panel",children:[t.jsxs("div",{className:"info-item",children:[t.jsx("span",{className:"info-label",children:"Nodes:"}),t.jsx("span",{className:"info-value",children:s})]}),t.jsxs("div",{className:"info-item",children:[t.jsx("span",{className:"info-label",children:"Height:"}),t.jsx("span",{className:"info-value",children:a})]}),t.jsxs("div",{className:"info-item",children:[t.jsx("span",{className:"info-label",children:"Max:"}),t.jsx("span",{className:"info-value",children:Lt})]})]}),d!==null&&t.jsxs("div",{className:"splay-result-box",children:[t.jsx("strong",{children:"Root:"})," ",d," (most recently accessed)"]}),s>=Lt*.8&&s<Lt&&t.jsxs("div",{className:"warning-box",children:[t.jsx(wn,{size:18}),t.jsxs("div",{children:[t.jsx("strong",{children:"Tree filling up!"})," ",s,"/",Lt," nodes."]})]}),t.jsx("div",{className:"operation-group",children:t.jsx("button",{onClick:p,className:"btn btn-clear",disabled:o,children:"Clear Tree"})}),i&&t.jsx("div",{className:`message message-${i.includes("Error")||i.includes("error")||i.includes("not found")?"error":/success|complete|Inserted|Deleted|cleared|Found|root/i.test(i)?"success":i.includes("full")?"warning":"info"}`,children:i})]})}function i0({tree:e,currentNode:n,visitedNodes:r,lastSplayedValue:s}){const a=(d,u)=>{const h=n===d,f=r.includes(d),N=u&&s===d;let k="#06b6d4",j="none";return h?(k="#f59e0b",j="drop-shadow(0 0 12px #f59e0b) drop-shadow(0 0 20px #f59e0b)"):N?(k="#ec4899",j="drop-shadow(0 0 15px #ec4899) drop-shadow(0 0 25px #ec4899)"):u?(k="#8b5cf6",j="drop-shadow(0 0 8px #8b5cf6)"):f&&(k="#10b981",j="drop-shadow(0 0 6px #10b981)"),{color:k,glow:j,radius:h||N?30:u?28:25,stroke:h||N?3:2,fontSize:h||N?16:14,fontWeight:h||N||u?"bold":"normal"}},i=(d,u,h,f,N,k=!1)=>{if(!d)return[];const j=Math.pow(2,N-f)*50,y=a(d.value,k),p=[];return d.left&&(p.push(t.jsx("line",{x1:u,y1:h,x2:u-j,y2:h+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:2},`l-${d.value}-l`)),p.push(...i(d.left,u-j,h+100,f+1,N,!1))),d.right&&(p.push(t.jsx("line",{x1:u,y1:h,x2:u+j,y2:h+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:2},`l-${d.value}-r`)),p.push(...i(d.right,u+j,h+100,f+1,N,!1))),p.push(t.jsxs("g",{style:{filter:y.glow,transition:"all 0.3s ease"},children:[t.jsx("circle",{cx:u,cy:h,r:y.radius,fill:y.color,stroke:"white",strokeWidth:y.stroke,style:{transition:"all 0.3s ease"}}),t.jsx("text",{x:u,y:h,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:y.fontSize,fontWeight:y.fontWeight,children:d.value}),k&&t.jsx("text",{x:u,y:h+y.radius+15,textAnchor:"middle",fill:"#ec4899",fontSize:10,fontWeight:"bold",children:"ROOT"})]},`n-${d.value}-${u}`)),p};if(!e)return t.jsxs("div",{className:"tree-empty",children:[t.jsx("p",{children:"Splay Tree is empty. Insert some values!"}),t.jsx("p",{className:"tree-empty-hint",children:"Try inserting: 50, 30, 70, then search for 30!"})]});const l=Ui(e),o=(l+1)*100+70,c=Math.max(800,Math.pow(2,Math.max(l,1))*80);return t.jsx("svg",{width:c,height:o,className:"tree-svg",children:i(e,c/2,50,0,l,!0)})}function l0({traversalType:e,traversalResult:n,isAnimating:r,traversalComplete:s}){if(!e||n.length===0&&!r)return null;const a=s0[e];return t.jsxs("div",{className:"traversal-output-panel",children:[t.jsxs("div",{style:{marginBottom:"1rem"},children:[t.jsxs("h3",{className:"traversal-title",children:[a==null?void 0:a.name,r&&t.jsx("span",{className:"traversal-badge traversal-badge--running",children:"Running..."}),s&&t.jsx("span",{className:"traversal-badge traversal-badge--complete",children:"Complete"})]}),t.jsxs("p",{className:"traversal-order",children:[t.jsx("strong",{children:"Order:"})," ",a==null?void 0:a.order]}),t.jsx("p",{className:"traversal-description",children:a==null?void 0:a.description})]}),t.jsxs("div",{className:"traversal-output-box",children:[t.jsx("div",{className:"traversal-output-label",children:"Output Sequence:"}),t.jsx("div",{className:"traversal-sequence-container",children:n.length===0&&r?t.jsx("span",{style:{color:"var(--text-muted)",fontStyle:"italic"},children:"Traversing..."}):n.map((i,l)=>t.jsx("span",{className:`traversal-node ${l===n.length-1&&!s?"traversal-node--current":"traversal-node--complete"}`,children:i},l))})]}),s&&n.length>0&&t.jsxs("div",{className:"traversal-array-section",children:[t.jsx("div",{className:"traversal-array-label",children:"Array Output:"}),t.jsxs("code",{className:"traversal-array-output",children:["[",n.join(", "),"]"]}),e==="preorder"&&t.jsx("p",{className:"traversal-sorted-note",children:"Note: First element is the root (most recently accessed)!"}),t.jsxs("p",{className:"traversal-use-case",children:["Use case: ",a==null?void 0:a.useCase.join(" | ")]}),t.jsxs("div",{className:"traversal-complexity",children:[t.jsx("strong",{children:"Time:"})," ",t.jsx("code",{className:"complexity-value",children:a==null?void 0:a.complexity.time}),t.jsx("br",{}),t.jsx("strong",{children:"Space:"})," ",t.jsx("code",{className:"complexity-value",children:a==null?void 0:a.complexity.space})]})]})]})}function o0(){const[e,n]=g.useState(null),[r,s]=g.useState(0),[a,i]=g.useState(-1),[l,o]=g.useState(""),[c,d]=g.useState(""),[u,h]=g.useState(""),[f,N]=g.useState(""),[k,j]=g.useState(null),[y,p]=g.useState([]),[m,v]=g.useState(!1),[C,S]=g.useState(null),[z,E]=g.useState([]),[_,A]=g.useState(null),[O,$]=g.useState(!1);g.useEffect(()=>{Q()},[]);const Q=async()=>{try{const R=await(await fetch("/api/splay")).json();n(R.tree),s(R.size||0),i(R.height!==void 0?R.height:-1)}catch(x){console.error("Error loading Splay Tree:",x)}},V=x=>{N(x),setTimeout(()=>N(""),3e3)},D=async()=>{if(!l.trim()){V("Please enter a number!");return}const x=Number(l);if(isNaN(x)){V("Please enter a valid number!");return}if(r>=Lt){V(`Tree is full! Maximum size is ${Lt} nodes.`);return}T(),j(null);try{const M=await(await fetch("/api/splay/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:x})})).json();if(M.error){V(M.error);return}n(M.tree),s(M.size||0),i(M.height!==void 0?M.height:-1),j(x),V(`Inserted ${x} (now at root!)`),o("")}catch{V("Error inserting node")}},w=async()=>{if(!c.trim()){V("Please enter a number!");return}const x=Number(c);if(isNaN(x)){V("Please enter a valid number!");return}T(),j(null);try{const M=await(await fetch("/api/splay/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:x})})).json();if(M.error){V(M.error);return}n(M.tree),s(M.size||0),i(M.height!==void 0?M.height:-1),V(`Deleted ${x}`),d("")}catch{V("Error deleting node")}},L=async()=>{if(!u.trim()){V("Please enter a number!");return}const x=Number(u);if(isNaN(x)){V("Please enter a valid number!");return}if(!e){V("Tree is empty!");return}T(),v(!0);try{const M=await(await fetch(`/api/splay/search?value=${x}`)).json();M.tree&&n(M.tree),M.found?(j(x),V(`Found ${x}! (splayed to root)`)):(j(null),V(`${x} not found in Splay Tree`)),await Q()}catch{V("Error searching")}v(!1),h("")},P=async()=>{try{await fetch("/api/splay/clear",{method:"POST"}),n(null),s(0),i(-1),T(),j(null),V("Splay Tree cleared!")}catch{V("Error clearing tree")}},b=async x=>{if(!e){V("Tree is empty! Insert some nodes first.");return}j(null),v(!0),p([]),S(null),E([]),A(x),$(!1);try{const I=(await(await fetch(`/api/splay/${x}`)).json()).traversal||[];if(I.length===0){V("Tree is empty!"),v(!1);return}for(let q=0;q<I.length;q++)S(I[q]),await new Promise(W=>setTimeout(W,600)),E(W=>[...W,I[q]]),p(W=>[...W,I[q]]),await new Promise(W=>setTimeout(W,200));S(null),$(!0),v(!1);const B=x.charAt(0).toUpperCase()+x.slice(1);V(`${B} traversal complete!`)}catch(R){console.error("Traversal error:",R),V("Error performing traversal"),v(!1)}},T=()=>{p([]),S(null),E([]),A(null),$(!1)};return t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"intro-layout",children:[t.jsx("div",{className:"intro-left",children:t.jsx(Hr,{dataStructure:"splay"})}),t.jsx(Se,{context:"Splay Tree data structure, self-adjusting BST, splay operations, zig-zig, zig-zag rotations, amortized O(log n)"})]}),t.jsxs("div",{className:"visualizer-layout",children:[t.jsx(a0,{insertValue:l,deleteValue:c,searchValue:u,size:r,height:a,message:f,tree:e,isAnimating:m,visitedNodes:z,lastSplayedValue:k,onInsertValueChange:o,onDeleteValueChange:d,onSearchValueChange:h,onInsert:D,onDelete:w,onSearch:L,onTraversal:b,onClear:P,onResetTraversal:()=>{T(),j(null)}}),t.jsxs("div",{className:"visual-panel",children:[t.jsx("h2",{children:"Splay Tree Visualization"}),t.jsxs("p",{className:"bst-property-reminder",children:["Self-adjusting: ",t.jsx("code",{children:"Recently accessed = Root"})]}),t.jsx("div",{className:"tree-container",children:t.jsx(i0,{tree:e,currentNode:C,visitedNodes:z,lastSplayedValue:k})}),t.jsx(l0,{traversalType:_,traversalResult:y,isAnimating:m,traversalComplete:O})]})]}),t.jsx(Te,{dataStructure:"splay"})]})}const Yn=7;function c0({insertValue:e,buildArray:n,size:r,height:s,min:a,message:i,heap:l,isAnimating:o,onInsertValueChange:c,onBuildArrayChange:d,onInsert:u,onExtract:h,onPeek:f,onBuild:N,onClear:k}){const j=(y,p)=>{const m=y.target.value;(m===""||m==="-"||/^-?\d*\.?\d*$/.test(m))&&p(m)};return t.jsxs("div",{className:"control-panel",children:[t.jsx("h2",{children:"Min Heap"}),t.jsxs("div",{className:"heap-info-box",children:[t.jsx("strong",{children:"Priority Queue:"})," Minimum always at root!"]}),t.jsxs("div",{className:"operation-group",children:[t.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),t.jsxs("div",{className:"input-group",children:[t.jsx("input",{type:"number",id:"insertValue",value:e,onChange:y=>j(y,c),onKeyDown:y=>y.key==="Enter"&&u(),placeholder:"Enter a number",disabled:o}),t.jsx("button",{onClick:u,className:"btn btn-insert",disabled:o,children:"Insert"})]})]}),t.jsxs("div",{className:"operation-group",children:[t.jsx("label",{children:"Heap Operations"}),t.jsxs("div",{className:"btn-group-vertical",children:[t.jsxs("button",{onClick:h,className:"btn btn-extract",disabled:o||l.length===0,children:[t.jsx(wm,{size:16})," Extract Min"]}),t.jsx("button",{onClick:f,className:"btn btn-peek",disabled:o||l.length===0,children:"Peek Min"})]})]}),t.jsxs("div",{className:"operation-group",children:[t.jsx("label",{htmlFor:"buildArray",children:"Build from Array"}),t.jsxs("div",{className:"input-group",children:[t.jsx("input",{type:"text",id:"buildArray",value:n,onChange:y=>d(y.target.value),onKeyDown:y=>y.key==="Enter"&&N(),placeholder:"e.g., 5, 3, 8, 1, 2",disabled:o}),t.jsx("button",{onClick:N,className:"btn btn-build",disabled:o,children:"Build"})]})]}),t.jsxs("div",{className:"traversal-legend",children:[t.jsxs("div",{className:"legend-item",children:[t.jsx("span",{className:"legend-dot",style:{background:"#10b981"}}),t.jsx("span",{children:"Root (Min)"})]}),t.jsxs("div",{className:"legend-item",children:[t.jsx("span",{className:"legend-dot",style:{background:"#6366f1"}}),t.jsx("span",{children:"Internal"})]}),t.jsxs("div",{className:"legend-item",children:[t.jsx("span",{className:"legend-dot",style:{background:"#8b5cf6"}}),t.jsx("span",{children:"Leaf"})]}),t.jsxs("div",{className:"legend-item",children:[t.jsx("span",{className:"legend-dot",style:{background:"#f59e0b"}}),t.jsx("span",{children:"Highlighted"})]})]}),t.jsxs("div",{className:"info-panel",children:[t.jsxs("div",{className:"info-item",children:[t.jsx("span",{className:"info-label",children:"Size:"}),t.jsx("span",{className:"info-value",children:r})]}),t.jsxs("div",{className:"info-item",children:[t.jsx("span",{className:"info-label",children:"Height:"}),t.jsx("span",{className:"info-value",children:s})]}),t.jsxs("div",{className:"info-item",children:[t.jsx("span",{className:"info-label",children:"Min:"}),t.jsx("span",{className:"info-value",children:a??"-"})]})]}),r>=Yn*.8&&r<Yn&&t.jsxs("div",{className:"warning-box",children:[t.jsx(wn,{size:18}),t.jsxs("div",{children:[t.jsx("strong",{children:"Heap filling up!"})," ",r,"/",Yn," elements."]})]}),t.jsx("div",{className:"operation-group",children:t.jsx("button",{onClick:k,className:"btn btn-clear",disabled:o,children:"Clear Heap"})}),i&&t.jsx("div",{className:`message message-${i.includes("Error")||i.includes("error")?"error":/success|complete|Inserted|Extracted|cleared|Built/i.test(i)?"success":i.includes("full")||i.includes("empty")?"warning":"info"}`,children:i})]})}function u0({tree:e,heap:n,highlightedIndex:r,swappingIndices:s}){const a=u=>{const h=r===u,f=s.includes(u),N=u===0;let k="#6366f1",j="none";return h||f?(k="#f59e0b",j="drop-shadow(0 0 12px #f59e0b)"):N&&(k="#10b981",j="drop-shadow(0 0 8px #10b981)"),{color:k,glow:j,radius:h||N?28:25}},i=(u,h=0)=>u?Math.max(i(u.left,h+1),i(u.right,h+1)):h-1,l=(u,h,f,N,k)=>{if(!u)return[];const j=Math.pow(2,k-N)*50,y=a(u.index),p=[];return u.left&&(p.push(t.jsx("line",{x1:h,y1:f,x2:h-j,y2:f+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:2},`l-${u.index}-l`)),p.push(...l(u.left,h-j,f+100,N+1,k))),u.right&&(p.push(t.jsx("line",{x1:h,y1:f,x2:h+j,y2:f+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:2},`l-${u.index}-r`)),p.push(...l(u.right,h+j,f+100,N+1,k))),p.push(t.jsxs("g",{style:{filter:y.glow,transition:"all 0.3s ease"},children:[t.jsx("circle",{cx:h,cy:f,r:y.radius,fill:y.color,stroke:"white",strokeWidth:2}),t.jsx("text",{x:h,y:f,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:14,fontWeight:"bold",children:u.value}),t.jsxs("text",{x:h,y:f+y.radius+12,textAnchor:"middle",fill:"rgba(255,255,255,0.6)",fontSize:10,children:["[",u.index,"]"]})]},`n-${u.index}`)),p};if(!e||n.length===0)return t.jsxs("div",{className:"tree-empty",children:[t.jsx("p",{children:"Min Heap is empty. Insert some values!"}),t.jsx("p",{className:"tree-empty-hint",children:"Try: 5, 3, 8, 1, 2 or build from array"})]});const o=i(e),c=(o+1)*100+80,d=Math.max(600,Math.pow(2,Math.max(o,1))*70);return t.jsx("svg",{width:d,height:c,className:"tree-svg",children:l(e,d/2,50,0,o)})}function d0({heap:e,highlightedIndex:n,swappingIndices:r}){return e.length===0?t.jsx("div",{className:"heap-array-empty",children:t.jsx("code",{children:"[ ]"})}):t.jsxs("div",{className:"heap-array-container",children:[t.jsx("div",{className:"heap-array",children:e.map((s,a)=>{const i=n===a,l=r.includes(a),o=a===0;return t.jsxs("div",{className:`heap-array-cell ${i||l?"highlighted":""} ${o?"root":""}`,children:[t.jsx("span",{className:"heap-array-index",children:a}),t.jsx("span",{className:"heap-array-value",children:s})]},a)})}),t.jsxs("div",{className:"heap-array-formulas",children:[t.jsxs("div",{className:"formula-item",children:[t.jsx("strong",{children:"Parent(i):"})," ",t.jsx("code",{children:"(i - 1) / 2"})]}),t.jsxs("div",{className:"formula-item",children:[t.jsx("strong",{children:"Left(i):"})," ",t.jsx("code",{children:"2*i + 1"})]}),t.jsxs("div",{className:"formula-item",children:[t.jsx("strong",{children:"Right(i):"})," ",t.jsx("code",{children:"2*i + 2"})]})]})]})}function h0(){const[e,n]=g.useState([]),[r,s]=g.useState(null),[a,i]=g.useState(0),[l,o]=g.useState(-1),[c,d]=g.useState(null),[u,h]=g.useState(""),[f,N]=g.useState(""),[k,j]=g.useState(""),[y,p]=g.useState(!1),[m,v]=g.useState(null),[C,S]=g.useState([]);g.useEffect(()=>{z()},[]);const z=async()=>{try{const D=await(await fetch("/api/minheap")).json();n(D.heap||[]),s(D.tree),i(D.size||0),o(D.height!==void 0?D.height:-1),d(D.min)}catch(V){console.error("Error loading Min Heap:",V)}},E=V=>{j(V),setTimeout(()=>j(""),3e3)},_=async()=>{if(!u.trim()){E("Please enter a number!");return}const V=Number(u);if(isNaN(V)){E("Please enter a valid number!");return}if(a>=Yn){E(`Heap is full! Maximum size is ${Yn}.`);return}p(!0);try{const w=await(await fetch("/api/minheap/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:V})})).json();if(w.error){E(w.error),p(!1);return}n(w.heap||[]),s(w.tree),i(w.size||0),o(w.height!==void 0?w.height:-1),d(w.min),E(`Inserted ${V}`),h("")}catch{E("Error inserting element")}p(!1)},A=async()=>{if(a===0){E("Heap is empty!");return}p(!0),v(0),await new Promise(V=>setTimeout(V,500));try{const D=await(await fetch("/api/minheap/extract",{method:"POST"})).json();if(D.error){E(D.error),p(!1),v(null);return}n(D.heap||[]),s(D.tree),i(D.size||0),o(D.height!==void 0?D.height:-1),d(D.min),E(`Extracted minimum: ${D.extracted}`)}catch{E("Error extracting minimum")}v(null),p(!1)},O=async()=>{if(a===0){E("Heap is empty!");return}v(0),E(`Minimum element is ${c}`),await new Promise(V=>setTimeout(V,1500)),v(null)},$=async()=>{if(!f.trim()){E("Please enter an array of numbers!");return}const V=f.split(",").map(D=>{const w=Number(D.trim());return isNaN(w)?null:w}).filter(D=>D!==null);if(V.length===0){E("Please enter valid numbers separated by commas!");return}if(V.length>Yn){E(`Array too large! Maximum size is ${Yn}.`);return}p(!0);try{const w=await(await fetch("/api/minheap/build",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({array:V})})).json();if(w.error){E(w.error),p(!1);return}n(w.heap||[]),s(w.tree),i(w.size||0),o(w.height!==void 0?w.height:-1),d(w.min),E("Built heap from array!"),N("")}catch{E("Error building heap")}p(!1)},Q=async()=>{try{await fetch("/api/minheap/clear",{method:"POST"}),n([]),s(null),i(0),o(-1),d(null),v(null),S([]),E("Heap cleared!")}catch{E("Error clearing heap")}};return t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"intro-layout",children:[t.jsx("div",{className:"intro-left",children:t.jsx(Hr,{dataStructure:"minheap"})}),t.jsx(Se,{context:"Min Heap data structure, priority queue, heapify operations, O(log n) insert and extract, O(1) peek minimum"})]}),t.jsxs("div",{className:"visualizer-layout",children:[t.jsx(c0,{insertValue:u,buildArray:f,size:a,height:l,min:c,message:k,heap:e,isAnimating:y,onInsertValueChange:h,onBuildArrayChange:N,onInsert:_,onExtract:A,onPeek:O,onBuild:$,onClear:Q}),t.jsxs("div",{className:"visual-panel",children:[t.jsx("h2",{children:"Min Heap Visualization"}),t.jsxs("p",{className:"bst-property-reminder",children:["Heap Property: ",t.jsx("code",{children:"Parent <= Children"})," (Min at root)"]}),t.jsxs("div",{className:"heap-tree-section",children:[t.jsx("h3",{children:"Tree View"}),t.jsx("div",{className:"tree-container",children:t.jsx(u0,{tree:r,heap:e,highlightedIndex:m,swappingIndices:C})})]}),t.jsxs("div",{className:"heap-array-section",children:[t.jsx("h3",{children:"Array Representation"}),t.jsx(d0,{heap:e,highlightedIndex:m,swappingIndices:C})]})]})]}),t.jsx(Te,{dataStructure:"minheap"})]})}const et=7;function p0({insertValue:e,buildArray:n,size:r,height:s,max:a,message:i,heap:l,isAnimating:o,onInsertValueChange:c,onBuildArrayChange:d,onInsert:u,onExtract:h,onPeek:f,onBuild:N,onClear:k}){const j=(y,p)=>{const m=y.target.value;(m===""||m==="-"||/^-?\d*\.?\d*$/.test(m))&&p(m)};return t.jsxs("div",{className:"control-panel",children:[t.jsx("h2",{children:"Max Heap"}),t.jsxs("div",{className:"heap-info-box max-heap",children:[t.jsx("strong",{children:"Priority Queue:"})," Maximum always at root!"]}),t.jsxs("div",{className:"operation-group",children:[t.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),t.jsxs("div",{className:"input-group",children:[t.jsx("input",{type:"number",id:"insertValue",value:e,onChange:y=>j(y,c),onKeyDown:y=>y.key==="Enter"&&u(),placeholder:"Enter a number",disabled:o}),t.jsx("button",{onClick:u,className:"btn btn-insert",disabled:o,children:"Insert"})]})]}),t.jsxs("div",{className:"operation-group",children:[t.jsx("label",{children:"Heap Operations"}),t.jsxs("div",{className:"btn-group-vertical",children:[t.jsxs("button",{onClick:h,className:"btn btn-extract-max",disabled:o||l.length===0,children:[t.jsx(Sm,{size:16})," Extract Max"]}),t.jsx("button",{onClick:f,className:"btn btn-peek",disabled:o||l.length===0,children:"Peek Max"})]})]}),t.jsxs("div",{className:"operation-group",children:[t.jsx("label",{htmlFor:"buildArray",children:"Build from Array"}),t.jsxs("div",{className:"input-group",children:[t.jsx("input",{type:"text",id:"buildArray",value:n,onChange:y=>d(y.target.value),onKeyDown:y=>y.key==="Enter"&&N(),placeholder:"e.g., 5, 3, 8, 1, 2",disabled:o}),t.jsx("button",{onClick:N,className:"btn btn-build",disabled:o,children:"Build"})]})]}),t.jsxs("div",{className:"traversal-legend",children:[t.jsxs("div",{className:"legend-item",children:[t.jsx("span",{className:"legend-dot",style:{background:"#ef4444"}}),t.jsx("span",{children:"Root (Max)"})]}),t.jsxs("div",{className:"legend-item",children:[t.jsx("span",{className:"legend-dot",style:{background:"#6366f1"}}),t.jsx("span",{children:"Internal"})]}),t.jsxs("div",{className:"legend-item",children:[t.jsx("span",{className:"legend-dot",style:{background:"#8b5cf6"}}),t.jsx("span",{children:"Leaf"})]}),t.jsxs("div",{className:"legend-item",children:[t.jsx("span",{className:"legend-dot",style:{background:"#f59e0b"}}),t.jsx("span",{children:"Highlighted"})]})]}),t.jsxs("div",{className:"info-panel",children:[t.jsxs("div",{className:"info-item",children:[t.jsx("span",{className:"info-label",children:"Size:"}),t.jsx("span",{className:"info-value",children:r})]}),t.jsxs("div",{className:"info-item",children:[t.jsx("span",{className:"info-label",children:"Height:"}),t.jsx("span",{className:"info-value",children:s})]}),t.jsxs("div",{className:"info-item",children:[t.jsx("span",{className:"info-label",children:"Max:"}),t.jsx("span",{className:"info-value",children:a??"-"})]})]}),r>=et*.8&&r<et&&t.jsxs("div",{className:"warning-box",children:[t.jsx(wn,{size:18}),t.jsxs("div",{children:[t.jsx("strong",{children:"Heap filling up!"})," ",r,"/",et," elements."]})]}),t.jsx("div",{className:"operation-group",children:t.jsx("button",{onClick:k,className:"btn btn-clear",disabled:o,children:"Clear Heap"})}),i&&t.jsx("div",{className:`message message-${i.includes("Error")||i.includes("error")?"error":/success|complete|Inserted|Extracted|cleared|Built/i.test(i)?"success":i.includes("full")||i.includes("empty")?"warning":"info"}`,children:i})]})}function f0({tree:e,heap:n,highlightedIndex:r,swappingIndices:s}){const a=u=>{const h=r===u,f=s.includes(u),N=u===0;let k="#6366f1",j="none";return h||f?(k="#f59e0b",j="drop-shadow(0 0 12px #f59e0b)"):N&&(k="#ef4444",j="drop-shadow(0 0 8px #ef4444)"),{color:k,glow:j,radius:h||N?28:25}},i=(u,h=0)=>u?Math.max(i(u.left,h+1),i(u.right,h+1)):h-1,l=(u,h,f,N,k)=>{if(!u)return[];const j=Math.pow(2,k-N)*50,y=a(u.index),p=[];return u.left&&(p.push(t.jsx("line",{x1:h,y1:f,x2:h-j,y2:f+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:2},`l-${u.index}-l`)),p.push(...l(u.left,h-j,f+100,N+1,k))),u.right&&(p.push(t.jsx("line",{x1:h,y1:f,x2:h+j,y2:f+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:2},`l-${u.index}-r`)),p.push(...l(u.right,h+j,f+100,N+1,k))),p.push(t.jsxs("g",{style:{filter:y.glow,transition:"all 0.3s ease"},children:[t.jsx("circle",{cx:h,cy:f,r:y.radius,fill:y.color,stroke:"white",strokeWidth:2}),t.jsx("text",{x:h,y:f,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:14,fontWeight:"bold",children:u.value}),t.jsxs("text",{x:h,y:f+y.radius+12,textAnchor:"middle",fill:"rgba(255,255,255,0.6)",fontSize:10,children:["[",u.index,"]"]})]},`n-${u.index}`)),p};if(!e||n.length===0)return t.jsxs("div",{className:"tree-empty",children:[t.jsx("p",{children:"Max Heap is empty. Insert some values!"}),t.jsx("p",{className:"tree-empty-hint",children:"Try: 5, 3, 8, 1, 9 or build from array"})]});const o=i(e),c=(o+1)*100+80,d=Math.max(600,Math.pow(2,Math.max(o,1))*70);return t.jsx("svg",{width:d,height:c,className:"tree-svg",children:l(e,d/2,50,0,o)})}function m0({heap:e,highlightedIndex:n,swappingIndices:r}){return e.length===0?t.jsx("div",{className:"heap-array-empty",children:t.jsx("code",{children:"[ ]"})}):t.jsxs("div",{className:"heap-array-container",children:[t.jsx("div",{className:"heap-array",children:e.map((s,a)=>{const i=n===a,l=r.includes(a),o=a===0;return t.jsxs("div",{className:`heap-array-cell ${i||l?"highlighted":""} ${o?"root-max":""}`,children:[t.jsx("span",{className:"heap-array-index",children:a}),t.jsx("span",{className:"heap-array-value",children:s})]},a)})}),t.jsxs("div",{className:"heap-array-formulas",children:[t.jsxs("div",{className:"formula-item",children:[t.jsx("strong",{children:"Parent(i):"})," ",t.jsx("code",{children:"(i - 1) / 2"})]}),t.jsxs("div",{className:"formula-item",children:[t.jsx("strong",{children:"Left(i):"})," ",t.jsx("code",{children:"2*i + 1"})]}),t.jsxs("div",{className:"formula-item",children:[t.jsx("strong",{children:"Right(i):"})," ",t.jsx("code",{children:"2*i + 2"})]})]})]})}function g0(){const[e,n]=g.useState([]),[r,s]=g.useState(null),[a,i]=g.useState(0),[l,o]=g.useState(-1),[c,d]=g.useState(null),[u,h]=g.useState(""),[f,N]=g.useState(""),[k,j]=g.useState(""),[y,p]=g.useState(!1),[m,v]=g.useState(null),[C,S]=g.useState([]);g.useEffect(()=>{z()},[]);const z=async()=>{try{const D=await(await fetch("/api/maxheap")).json();n(D.heap||[]),s(D.tree),i(D.size||0),o(D.height!==void 0?D.height:-1),d(D.max)}catch(V){console.error("Error loading Max Heap:",V)}},E=V=>{j(V),setTimeout(()=>j(""),3e3)},_=async()=>{if(!u.trim()){E("Please enter a number!");return}const V=Number(u);if(isNaN(V)){E("Please enter a valid number!");return}if(a>=et){E(`Heap is full! Maximum size is ${et}.`);return}p(!0);try{const w=await(await fetch("/api/maxheap/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:V})})).json();if(w.error){E(w.error),p(!1);return}n(w.heap||[]),s(w.tree),i(w.size||0),o(w.height!==void 0?w.height:-1),d(w.max),E(`Inserted ${V}`),h("")}catch{E("Error inserting element")}p(!1)},A=async()=>{if(a===0){E("Heap is empty!");return}p(!0),v(0),await new Promise(V=>setTimeout(V,500));try{const D=await(await fetch("/api/maxheap/extract",{method:"POST"})).json();if(D.error){E(D.error),p(!1),v(null);return}n(D.heap||[]),s(D.tree),i(D.size||0),o(D.height!==void 0?D.height:-1),d(D.max),E(`Extracted maximum: ${D.extracted}`)}catch{E("Error extracting maximum")}v(null),p(!1)},O=async()=>{if(a===0){E("Heap is empty!");return}v(0),E(`Maximum element is ${c}`),await new Promise(V=>setTimeout(V,1500)),v(null)},$=async()=>{if(!f.trim()){E("Please enter an array of numbers!");return}const V=f.split(",").map(D=>{const w=Number(D.trim());return isNaN(w)?null:w}).filter(D=>D!==null);if(V.length===0){E("Please enter valid numbers separated by commas!");return}if(V.length>et){E(`Array too large! Maximum size is ${et}.`);return}p(!0);try{const w=await(await fetch("/api/maxheap/build",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({array:V})})).json();if(w.error){E(w.error),p(!1);return}n(w.heap||[]),s(w.tree),i(w.size||0),o(w.height!==void 0?w.height:-1),d(w.max),E("Built heap from array!"),N("")}catch{E("Error building heap")}p(!1)},Q=async()=>{try{await fetch("/api/maxheap/clear",{method:"POST"}),n([]),s(null),i(0),o(-1),d(null),v(null),S([]),E("Heap cleared!")}catch{E("Error clearing heap")}};return t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"intro-layout",children:[t.jsx("div",{className:"intro-left",children:t.jsx(Hr,{dataStructure:"maxheap"})}),t.jsx(Se,{context:"Max Heap data structure, priority queue, heapify operations, O(log n) insert and extract, O(1) peek maximum, heap sort"})]}),t.jsxs("div",{className:"visualizer-layout",children:[t.jsx(p0,{insertValue:u,buildArray:f,size:a,height:l,max:c,message:k,heap:e,isAnimating:y,onInsertValueChange:h,onBuildArrayChange:N,onInsert:_,onExtract:A,onPeek:O,onBuild:$,onClear:Q}),t.jsxs("div",{className:"visual-panel",children:[t.jsx("h2",{children:"Max Heap Visualization"}),t.jsxs("p",{className:"bst-property-reminder",children:["Heap Property: ",t.jsx("code",{children:"Parent >= Children"})," (Max at root)"]}),t.jsxs("div",{className:"heap-tree-section",children:[t.jsx("h3",{children:"Tree View"}),t.jsx("div",{className:"tree-container",children:t.jsx(f0,{tree:r,heap:e,highlightedIndex:m,swappingIndices:C})})]}),t.jsxs("div",{className:"heap-array-section",children:[t.jsx("h3",{children:"Array Representation"}),t.jsx(m0,{heap:e,highlightedIndex:m,swappingIndices:C})]})]})]}),t.jsx(Te,{dataStructure:"maxheap"})]})}function v0(){const[e,n]=g.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=g.useState(""),[a,i]=g.useState(""),[l,o]=g.useState(""),[c,d]=g.useState("1"),[u,h]=g.useState(null),[f,N]=g.useState(null),[k,j]=g.useState(null),[y,p]=g.useState({}),{message:m,showMessage:v}=pn(3e3);g.useEffect(()=>{S()},[]),g.useEffect(()=>{e.vertices.length>0&&C()},[e.vertices]),g.useEffect(()=>{if(u||f){const w=setTimeout(()=>{h(null),N(null),j(null)},2e3);return()=>clearTimeout(w)}},[u,f]);const C=g.useCallback(()=>{const T=Math.min(450,300)*.38,x={},R=e.vertices.length;e.vertices.forEach((M,I)=>{const B=2*Math.PI*I/R-Math.PI/2;x[M]={x:225+T*Math.cos(B),y:150+T*Math.sin(B)}}),p(x)},[e.vertices]),S=async()=>{try{const w=await ve("/api/graph");n(w)}catch(w){console.error("Error loading graph:",w)}},z=async()=>{if(!r.trim()){v("Please enter a vertex name!","error");return}try{const w=await Z("/api/graph/vertex",{vertex:r.trim()});if(w.error){v(w.error,"error");return}n(w),h(r.trim().toUpperCase()),j("add-vertex"),v(`Added vertex '${r}' - Created new entry in adjacency list`,"success"),s("")}catch{v("Error adding vertex","error")}},E=async w=>{try{const L=await Ws(`/api/graph/vertex/${w}`);if(L.error){v(L.error,"error");return}n(L),v(`Removed vertex '${w}' - Deleted from list and all references`,"success")}catch{v("Error removing vertex","error")}},_=async()=>{if(!a.trim()||!l.trim()){v("Please select both vertices!","error");return}const w=parseInt(c)||1;try{const L=await Z("/api/graph/edge",{from:a.trim(),to:l.trim(),weight:w});if(L.error){v(L.error,"error");return}n(L),N({from:a,to:l}),j("add-edge"),v(`Added edge ${a}→${l} (weight: ${w}) - Appended to ${a}'s neighbor list`,"success"),i(""),o(""),d("1")}catch{v("Error adding edge","error")}},A=async()=>{if(!a.trim()||!l.trim()){v("Please select both vertices!","error");return}try{const w=await Ws("/api/graph/edge",{from:a.trim(),to:l.trim()});if(w.error){v(w.error,"error");return}n(w),v(`Removed edge ${a}→${l} - Removed from neighbor lists`,"success"),i(""),o("")}catch{v("Error removing edge","error")}},O=async w=>{try{const L=await Z(`/api/graph/preset/${w}`,{});if(L.error){v(L.error,"error");return}n(L),v(`Loaded '${w}' graph preset`,"success")}catch{v("Error loading preset","error")}},$=async()=>{try{const w=await Z("/api/graph/clear",{});n(w),v("Graph cleared","success")}catch{v("Error clearing graph","error")}},Q=(w,L)=>{w.key==="Enter"&&L()},V=w=>u===w&&k==="add-vertex"?"graph-node highlighted-new":f&&(f.from===w||f.to===w)?"graph-node highlighted-edge":"graph-node",D=(w,L)=>f&&(f.from===w&&f.to===L||f.from===L&&f.to===w)?"graph-edge highlighted":"graph-edge";return t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"intro-layout",children:[t.jsxs("div",{className:"concept-box",children:[t.jsxs("div",{className:"concept-header",children:[t.jsx(Je,{className:"icon-sm"}),t.jsx("span",{children:"What is an Adjacency List?"})]}),t.jsxs("div",{className:"concept-content",children:[t.jsxs("p",{children:["An ",t.jsx("strong",{children:"Adjacency List"})," represents a graph using a collection of lists. Each vertex stores a list of its neighboring vertices."]}),t.jsxs("div",{className:"concept-analogy",children:[t.jsx(Fe,{}),t.jsx("span",{children:"Like a contact list - each person has their own list of friends they're connected to!"})]}),t.jsxs("div",{className:"concept-operations",children:[t.jsxs("div",{className:"op-item",children:[t.jsx("span",{className:"op-name",children:"Add Vertex"}),t.jsx("span",{className:"op-desc",children:"Create new list"}),t.jsx("span",{className:"op-complexity",children:"O(1)"})]}),t.jsxs("div",{className:"op-item",children:[t.jsx("span",{className:"op-name",children:"Add Edge"}),t.jsx("span",{className:"op-desc",children:"Append to list"}),t.jsx("span",{className:"op-complexity",children:"O(1)"})]}),t.jsxs("div",{className:"op-item",children:[t.jsx("span",{className:"op-name",children:"Remove Edge"}),t.jsx("span",{className:"op-desc",children:"Search & delete"}),t.jsx("span",{className:"op-complexity",children:"O(E)"})]}),t.jsxs("div",{className:"op-item",children:[t.jsx("span",{className:"op-name",children:"Find Neighbors"}),t.jsx("span",{className:"op-desc",children:"Return list"}),t.jsx("span",{className:"op-complexity",children:"O(1)"})]})]}),t.jsxs("div",{className:"concept-uses",children:[t.jsx("strong",{children:"Why Adjacency List?"}),t.jsxs("ul",{children:[t.jsx("li",{children:"Space efficient for sparse graphs: O(V + E)"}),t.jsx("li",{children:"Fast iteration over neighbors"}),t.jsx("li",{children:"Easy to add vertices and edges"}),t.jsx("li",{children:"Supports weighted edges naturally"})]})]})]})]}),t.jsx(Se,{context:"Adjacency List graph representation, graph data structure"})]}),t.jsxs("div",{className:"visualizer-layout",children:[t.jsxs("div",{className:"control-panel",children:[t.jsx("h2",{children:"Operations"}),t.jsxs("div",{className:"operation-group",children:[t.jsx("label",{children:"Load Preset"}),t.jsxs("div",{className:"btn-group preset-group",children:[t.jsx("button",{onClick:()=>O("simple"),className:"btn btn-preset",children:"Simple"}),t.jsx("button",{onClick:()=>O("tree"),className:"btn btn-preset",children:"Tree"}),t.jsx("button",{onClick:()=>O("cyclic"),className:"btn btn-preset",children:"Cyclic"})]})]}),t.jsxs("div",{className:"operation-group",children:[t.jsxs("label",{htmlFor:"vertexInput",children:[t.jsx(Ks,{size:14})," Add Vertex"]}),t.jsxs("div",{className:"input-group",children:[t.jsx("input",{type:"text",id:"vertexInput",value:r,onChange:w=>s(w.target.value.toUpperCase()),onKeyPress:w=>Q(w,z),placeholder:"Name (e.g., A)",maxLength:3}),t.jsx("button",{onClick:z,className:"btn btn-add",children:"Add"})]}),t.jsx("span",{className:"operation-hint",children:"Creates a new empty list entry"})]}),t.jsxs("div",{className:"operation-group",children:[t.jsx("label",{children:"Add/Remove Edge (with Weight)"}),t.jsxs("div",{className:"edge-inputs",children:[t.jsxs("select",{value:a,onChange:w=>i(w.target.value),className:"vertex-select",children:[t.jsx("option",{value:"",children:"From"}),e.vertices.map(w=>t.jsx("option",{value:w,children:w},w))]}),t.jsx("span",{className:"edge-arrow",children:"→"}),t.jsxs("select",{value:l,onChange:w=>o(w.target.value),className:"vertex-select",children:[t.jsx("option",{value:"",children:"To"}),e.vertices.map(w=>t.jsx("option",{value:w,children:w},w))]})]}),t.jsxs("div",{className:"weight-input",children:[t.jsx("label",{htmlFor:"weightInput",children:"Weight:"}),t.jsx("input",{type:"number",id:"weightInput",value:c,onChange:w=>d(w.target.value),min:"1",max:"99",className:"weight-field"})]}),t.jsxs("div",{className:"btn-group",children:[t.jsxs("button",{onClick:_,className:"btn btn-add",children:[t.jsx(Ks,{size:14})," Add Edge"]}),t.jsxs("button",{onClick:A,className:"btn btn-remove",children:[t.jsx(Vi,{size:14})," Remove"]})]}),t.jsx("span",{className:"operation-hint",children:"Appends neighbor to the vertex's list"})]}),t.jsx("div",{className:"operation-group",children:t.jsx("button",{onClick:$,className:"btn btn-clear full-width",children:"Clear Graph"})}),t.jsxs("div",{className:"info-panel",children:[t.jsxs("div",{className:"info-item",children:[t.jsx("span",{className:"info-label",children:"Vertices (V):"}),t.jsx("span",{className:"info-value",children:e.vertex_count||0})]}),t.jsxs("div",{className:"info-item",children:[t.jsx("span",{className:"info-label",children:"Edges (E):"}),t.jsx("span",{className:"info-value",children:e.edge_count||0})]}),t.jsxs("div",{className:"info-item",children:[t.jsx("span",{className:"info-label",children:"Space:"}),t.jsx("span",{className:"info-value",children:"O(V + E)"})]})]}),t.jsx(hn,{message:m})]}),t.jsxs("div",{className:"visual-panel",children:[t.jsx("h2",{children:"Graph View"}),t.jsx("div",{className:"graph-container",children:e.vertices.length===0?t.jsx("div",{className:"graph-empty",children:"Graph is empty. Add vertices or load a preset!"}):t.jsxs("svg",{className:"graph-svg",viewBox:"0 0 450 300",children:[e.edges.map(([w,L,P],b)=>{const T=y[w],x=y[L];if(!T||!x)return null;const R=(T.x+x.x)/2,M=(T.y+x.y)/2;return t.jsxs("g",{children:[t.jsx("line",{x1:T.x,y1:T.y,x2:x.x,y2:x.y,className:D(w,L)}),t.jsx("circle",{cx:R,cy:M,r:12,className:"weight-bg"}),t.jsx("text",{x:R,y:M,className:"weight-label",dominantBaseline:"central",textAnchor:"middle",children:P})]},`edge-${b}`)}),e.vertices.map(w=>{const L=y[w];return L?t.jsxs("g",{className:V(w),children:[t.jsx("circle",{cx:L.x,cy:L.y,r:22,className:"node-circle"}),t.jsx("text",{x:L.x,y:L.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:w})]},w):null})]})}),t.jsxs("div",{className:"adjacency-list-section",children:[t.jsx("h3",{children:"Behind the Scenes: Adjacency List Structure"}),t.jsx("p",{className:"adj-explanation",children:"Each vertex has its own linked list of neighbors. When you add an edge A→B, we append B to A's list (and A to B's list for undirected graphs)."}),t.jsx("div",{className:"adj-list-visual",children:e.vertices.length===0?t.jsx("div",{className:"adj-empty",children:"No vertices in graph"}):e.vertices.map(w=>{const L=e.adjacency_list[w]||[],P=u===w||f&&(f.from===w||f.to===w);return t.jsxs("div",{className:`adj-row-visual ${P?"highlighted":""}`,children:[t.jsx("div",{className:"adj-vertex-box",children:t.jsx("span",{className:"adj-vertex-label",children:w})}),t.jsx("div",{className:"adj-pointer",children:t.jsx(Y,{size:16})}),t.jsxs("div",{className:"adj-linked-list",children:[L.length===0?t.jsx("div",{className:"adj-null",children:"null"}):L.map(([b,T],x)=>{const R=f&&f.from===w&&f.to===b;return t.jsxs(ot.Fragment,{children:[t.jsxs("div",{className:`adj-neighbor-node ${R?"highlighted":""}`,children:[t.jsx("span",{className:"neighbor-vertex",children:b}),t.jsxs("span",{className:"neighbor-weight",children:["w:",T]})]}),x<L.length-1&&t.jsx("div",{className:"adj-link",children:t.jsx(Y,{size:14})})]},`${w}-${b}`)}),L.length>0&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"adj-link",children:t.jsx(Y,{size:14})}),t.jsx("div",{className:"adj-null",children:"null"})]})]}),t.jsx("button",{className:"adj-remove-btn",onClick:()=>E(w),title:`Remove vertex ${w}`,children:t.jsx(Vi,{size:14})})]},w)})}),t.jsxs("div",{className:"memory-hint",children:[t.jsx("strong",{children:"Memory Layout:"})," An array/hashmap stores vertex references, each pointing to the head of a linked list containing (neighbor, weight) pairs."]})]})]})]}),t.jsx(Te,{dataStructure:"graph"})]})}function y0(){const[e,n]=g.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=g.useState([]),[a,i]=g.useState([]),[l,o]=g.useState(""),[c,d]=g.useState(""),[u,h]=g.useState(""),[f,N]=g.useState("1"),[k,j]=g.useState(null),[y,p]=g.useState(null),[m,v]=g.useState({}),{message:C,showMessage:S}=pn(3e3);g.useEffect(()=>{E()},[]),g.useEffect(()=>{e.vertices.length>0?(_(),z()):(s([]),i([]))},[e]),g.useEffect(()=>{if(k){const b=setTimeout(()=>{j(null)},2e3);return()=>clearTimeout(b)}},[k]);const z=g.useCallback(()=>{const M=Math.min(350,250)*.38,I={},B=e.vertices.length;e.vertices.forEach((q,W)=>{const Ce=2*Math.PI*W/B-Math.PI/2;I[q]={x:175+M*Math.cos(Ce),y:125+M*Math.sin(Ce)}}),v(I)},[e.vertices]),E=async()=>{try{const b=await ve("/api/graph");n(b)}catch(b){console.error("Error loading graph:",b)}},_=async()=>{try{const b=await ve("/api/graph/matrix");s(b.matrix),i(b.vertices)}catch(b){console.error("Error loading matrix:",b)}},A=async()=>{if(!l.trim()){S("Please enter a vertex name!","error");return}try{const b=await Z("/api/graph/vertex",{vertex:l.trim()});if(b.error){S(b.error,"error");return}n(b),S(`Added vertex '${l}' - Added new row and column to matrix`,"success"),o("")}catch{S("Error adding vertex","error")}},O=async b=>{try{const T=await Ws(`/api/graph/vertex/${b}`);if(T.error){S(T.error,"error");return}n(T),S(`Removed vertex '${b}' - Removed row and column from matrix`,"success")}catch{S("Error removing vertex","error")}},$=async()=>{if(!c.trim()||!u.trim()){S("Please select both vertices!","error");return}const b=parseInt(f)||1;try{const T=await Z("/api/graph/edge",{from:c.trim(),to:u.trim(),weight:b});if(T.error){S(T.error,"error");return}n(T);const x=a.indexOf(c),R=a.indexOf(u);j({row:x,col:R}),S(`Added edge: matrix[${c}][${u}] = ${b}`,"success"),d(""),h(""),N("1")}catch{S("Error adding edge","error")}},Q=async()=>{if(!c.trim()||!u.trim()){S("Please select both vertices!","error");return}try{const b=await Ws("/api/graph/edge",{from:c.trim(),to:u.trim()});if(b.error){S(b.error,"error");return}n(b),S(`Removed edge: matrix[${c}][${u}] = 0`,"success"),d(""),h("")}catch{S("Error removing edge","error")}},V=()=>{var M;if(!c.trim()||!u.trim()){S("Please select both vertices to check!","error");return}const b=a.indexOf(c),T=a.indexOf(u);if(b===-1||T===-1){S("Vertex not found!","error");return}const x=((M=r[b])==null?void 0:M[T])||0,R=x>0;j({row:b,col:T}),p({from:c,to:u,exists:R,weight:x}),S(R?`Edge exists! matrix[${c}][${u}] = ${x} (O(1) lookup)`:`No edge: matrix[${c}][${u}] = 0 (O(1) lookup)`,R?"success":"info")},D=async b=>{try{const T=await Z(`/api/graph/preset/${b}`,{});if(T.error){S(T.error,"error");return}n(T),p(null),S(`Loaded '${b}' graph preset`,"success")}catch{S("Error loading preset","error")}},w=async()=>{try{const b=await Z("/api/graph/clear",{});n(b),s([]),i([]),p(null),S("Graph cleared","success")}catch{S("Error clearing graph","error")}},L=(b,T)=>{b.key==="Enter"&&T()},P=(b,T,x)=>{let R="matrix-cell";return k&&k.row===b&&k.col===T&&(R+=" highlighted"),k&&k.row===T&&k.col===b&&(R+=" highlighted"),x>0&&(R+=" has-edge"),b===T&&(R+=" diagonal"),R};return t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"intro-layout",children:[t.jsxs("div",{className:"concept-box",children:[t.jsxs("div",{className:"concept-header",children:[t.jsx(Je,{className:"icon-sm"}),t.jsx("span",{children:"What is an Adjacency Matrix?"})]}),t.jsxs("div",{className:"concept-content",children:[t.jsxs("p",{children:["An ",t.jsx("strong",{children:"Adjacency Matrix"})," is a 2D array where ",t.jsx("code",{children:"matrix[i][j]"})," represents the edge weight between vertex i and j (0 if no edge)."]}),t.jsxs("div",{className:"concept-analogy",children:[t.jsx(Fe,{}),t.jsx("span",{children:"Like a spreadsheet where rows and columns are people, and cells show if they're friends!"})]}),t.jsxs("div",{className:"concept-operations",children:[t.jsxs("div",{className:"op-item",children:[t.jsx("span",{className:"op-name",children:"Check Edge"}),t.jsx("span",{className:"op-desc",children:"Direct lookup"}),t.jsx("span",{className:"op-complexity",children:"O(1)"})]}),t.jsxs("div",{className:"op-item",children:[t.jsx("span",{className:"op-name",children:"Add Edge"}),t.jsx("span",{className:"op-desc",children:"Set cell value"}),t.jsx("span",{className:"op-complexity",children:"O(1)"})]}),t.jsxs("div",{className:"op-item",children:[t.jsx("span",{className:"op-name",children:"Add Vertex"}),t.jsx("span",{className:"op-desc",children:"Resize matrix"}),t.jsx("span",{className:"op-complexity",children:"O(V²)"})]}),t.jsxs("div",{className:"op-item",children:[t.jsx("span",{className:"op-name",children:"Space"}),t.jsx("span",{className:"op-desc",children:"2D array"}),t.jsx("span",{className:"op-complexity",children:"O(V²)"})]})]}),t.jsxs("div",{className:"concept-uses",children:[t.jsx("strong",{children:"When to Use:"}),t.jsxs("ul",{children:[t.jsx("li",{children:"Dense graphs (many edges)"}),t.jsx("li",{children:"Fast edge existence checks needed"}),t.jsx("li",{children:"Small number of vertices"}),t.jsx("li",{children:"Frequent edge weight updates"})]})]})]})]}),t.jsx(Se,{context:"Adjacency Matrix graph representation"})]}),t.jsxs("div",{className:"visualizer-layout",children:[t.jsxs("div",{className:"control-panel",children:[t.jsx("h2",{children:"Operations"}),t.jsxs("div",{className:"operation-group",children:[t.jsx("label",{children:"Load Preset"}),t.jsxs("div",{className:"btn-group preset-group",children:[t.jsx("button",{onClick:()=>D("simple"),className:"btn btn-preset",children:"Simple"}),t.jsx("button",{onClick:()=>D("complete"),className:"btn btn-preset",children:"Complete"}),t.jsx("button",{onClick:()=>D("cyclic"),className:"btn btn-preset",children:"Cyclic"})]})]}),t.jsxs("div",{className:"operation-group",children:[t.jsxs("label",{htmlFor:"vertexInput",children:[t.jsx(Ks,{size:14})," Add Vertex"]}),t.jsxs("div",{className:"input-group",children:[t.jsx("input",{type:"text",id:"vertexInput",value:l,onChange:b=>o(b.target.value.toUpperCase()),onKeyPress:b=>L(b,A),placeholder:"Name (e.g., A)",maxLength:3}),t.jsx("button",{onClick:A,className:"btn btn-add",children:"Add"})]}),t.jsx("span",{className:"operation-hint",children:"Adds new row & column (O(V²) resize)"})]}),t.jsxs("div",{className:"operation-group",children:[t.jsx("label",{children:"Edge Operations"}),t.jsxs("div",{className:"edge-inputs",children:[t.jsxs("select",{value:c,onChange:b=>d(b.target.value),className:"vertex-select",children:[t.jsx("option",{value:"",children:"From"}),e.vertices.map(b=>t.jsx("option",{value:b,children:b},b))]}),t.jsx("span",{className:"edge-arrow",children:"→"}),t.jsxs("select",{value:u,onChange:b=>h(b.target.value),className:"vertex-select",children:[t.jsx("option",{value:"",children:"To"}),e.vertices.map(b=>t.jsx("option",{value:b,children:b},b))]})]}),t.jsxs("div",{className:"weight-input",children:[t.jsx("label",{htmlFor:"weightInput",children:"Weight:"}),t.jsx("input",{type:"number",id:"weightInput",value:f,onChange:b=>N(b.target.value),min:"1",max:"99",className:"weight-field"})]}),t.jsxs("div",{className:"btn-group",children:[t.jsxs("button",{onClick:$,className:"btn btn-add",children:[t.jsx(Ks,{size:14})," Add"]}),t.jsxs("button",{onClick:Q,className:"btn btn-remove",children:[t.jsx(Vi,{size:14})," Remove"]}),t.jsxs("button",{onClick:V,className:"btn btn-check",children:[t.jsx(da,{size:14})," Check"]})]}),t.jsx("span",{className:"operation-hint",children:"O(1) direct cell access"})]}),t.jsx("div",{className:"operation-group",children:t.jsx("button",{onClick:w,className:"btn btn-clear full-width",children:"Clear Graph"})}),t.jsxs("div",{className:"info-panel",children:[t.jsxs("div",{className:"info-item",children:[t.jsx("span",{className:"info-label",children:"Vertices (V):"}),t.jsx("span",{className:"info-value",children:e.vertex_count||0})]}),t.jsxs("div",{className:"info-item",children:[t.jsx("span",{className:"info-label",children:"Edges (E):"}),t.jsx("span",{className:"info-value",children:e.edge_count||0})]}),t.jsxs("div",{className:"info-item",children:[t.jsx("span",{className:"info-label",children:"Matrix Size:"}),t.jsxs("span",{className:"info-value",children:[a.length," × ",a.length]})]}),t.jsxs("div",{className:"info-item",children:[t.jsx("span",{className:"info-label",children:"Space Used:"}),t.jsxs("span",{className:"info-value",children:["O(",a.length,"²) = ",a.length*a.length," cells"]})]})]}),y&&t.jsxs("div",{className:`lookup-result ${y.exists?"exists":"not-exists"}`,children:[t.jsx("strong",{children:"Lookup Result:"}),t.jsxs("code",{children:["matrix[",y.from,"][",y.to,"] = ",y.weight]}),t.jsx("span",{children:y.exists?"Edge exists!":"No edge"})]}),t.jsx(hn,{message:C})]}),t.jsxs("div",{className:"visual-panel",children:[t.jsxs("div",{className:"mini-graph-section",children:[t.jsx("h3",{children:"Graph View"}),t.jsx("div",{className:"mini-graph-container",children:e.vertices.length===0?t.jsx("div",{className:"graph-empty-mini",children:"Empty graph"}):t.jsxs("svg",{className:"mini-graph-svg",viewBox:"0 0 350 250",children:[e.edges.map(([b,T,x],R)=>{const M=m[b],I=m[T];return!M||!I?null:t.jsx("line",{x1:M.x,y1:M.y,x2:I.x,y2:I.y,className:"mini-edge"},`edge-${R}`)}),e.vertices.map(b=>{const T=m[b];return T?t.jsxs("g",{className:"mini-node",children:[t.jsx("circle",{cx:T.x,cy:T.y,r:18}),t.jsx("text",{x:T.x,y:T.y,dominantBaseline:"central",textAnchor:"middle",children:b})]},b):null})]})})]}),t.jsxs("div",{className:"matrix-section",children:[t.jsx("h3",{children:"Adjacency Matrix"}),t.jsxs("p",{className:"matrix-explanation",children:["Each cell ",t.jsx("code",{children:"matrix[row][col]"})," stores the edge weight (0 = no edge). Undirected graphs have symmetric matrices."]}),a.length===0?t.jsx("div",{className:"matrix-empty",children:"No vertices in graph. Add vertices or load a preset!"}):t.jsx("div",{className:"matrix-container",children:t.jsxs("table",{className:"adjacency-matrix",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{className:"matrix-corner"}),a.map((b,T)=>t.jsx("th",{className:"matrix-header col-header",children:b},b))]})}),t.jsx("tbody",{children:a.map((b,T)=>t.jsxs("tr",{children:[t.jsxs("th",{className:"matrix-header row-header",children:[b,t.jsx("button",{className:"remove-vertex-btn",onClick:()=>O(b),title:`Remove ${b}`,children:"×"})]}),a.map((x,R)=>{var M,I,B;return t.jsx("td",{className:P(T,R,(M=r[T])==null?void 0:M[R]),title:`matrix[${b}][${x}] = ${((I=r[T])==null?void 0:I[R])||0}`,children:((B=r[T])==null?void 0:B[R])||0},`${T}-${R}`)})]},b))})]})}),t.jsxs("div",{className:"comparison-hint",children:[t.jsx("strong",{children:"vs Adjacency List:"}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("span",{className:"pro",children:"Pro:"})," O(1) edge lookup vs O(degree) for list"]}),t.jsxs("li",{children:[t.jsx("span",{className:"con",children:"Con:"})," O(V²) space vs O(V+E) for list"]}),t.jsxs("li",{children:[t.jsx("span",{className:"pro",children:"Pro:"})," Better for dense graphs (E ≈ V²)"]}),t.jsxs("li",{children:[t.jsx("span",{className:"con",children:"Con:"})," Wastes space for sparse graphs"]})]})]})]})]})]}),t.jsx(Te,{dataStructure:"graph"})]})}function x0(){const[e,n]=g.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=g.useState(""),[a,i]=g.useState([]),[l,o]=g.useState([]),[c,d]=g.useState(-1),[u,h]=g.useState(!1),[f,N]=g.useState(!1),[k,j]=g.useState(new Set),[y,p]=g.useState(null),[m,v]=g.useState([]),[C,S]=g.useState({}),{message:z,showMessage:E}=pn(3e3),_=g.useRef(null),A=g.useRef(0);g.useEffect(()=>{$()},[]),g.useEffect(()=>{e.vertices.length>0&&O()},[e.vertices]);const O=g.useCallback(()=>{const B=Math.min(500,350)*.35,q={},W=e.vertices.length;e.vertices.forEach((Ce,Ee)=>{const oe=2*Math.PI*Ee/W-Math.PI/2;q[Ce]={x:250+B*Math.cos(oe),y:175+B*Math.sin(oe)}}),S(q)},[e.vertices]),$=async()=>{try{const x=await ve("/api/graph");x.vertices.length===0?await Q("simple"):n(x)}catch(x){console.error("Error loading graph:",x)}},Q=async x=>{try{const R=await Z(`/api/graph/preset/${x}`,{});if(R.error){E(R.error,"error");return}n(R),b(),E(`Loaded '${x}' preset`,"success")}catch{E("Error loading preset","error")}},V=async()=>{if(!r.trim()){E("Please select a starting vertex!","error");return}try{const x=await ve(`/api/graph/bfs/${r}`);if(x.error){E(x.error,"error");return}i(x.traversal),o(x.steps),E("Starting BFS traversal...","info"),D(x.steps)}catch{E("Error running BFS","error")}},D=x=>{_.current&&clearInterval(_.current),h(!0),N(!1),j(new Set),p(null),v([]),d(-1),A.current=0,_.current=setInterval(()=>{if(A.current>=x.length){clearInterval(_.current),h(!1),p(null),E(`BFS Complete: ${a.join(" → ")}`,"success");return}const R=x[A.current];d(A.current),R.action==="visit"?(p(R.vertex),j(new Set(R.visited)),v(R.queue||[])):R.action==="enqueue"&&v(R.queue||[]),A.current++},1e3)},w=()=>{f?(N(!1),L()):(N(!0),_.current&&clearInterval(_.current))},L=()=>{_.current&&clearInterval(_.current),_.current=setInterval(()=>{if(A.current>=l.length){clearInterval(_.current),h(!1),p(null);return}const x=l[A.current];d(A.current),x.action==="visit"?(p(x.vertex),j(new Set(x.visited)),v(x.queue||[])):x.action==="enqueue"&&v(x.queue||[]),A.current++},1e3)},P=()=>{if(A.current>=l.length)return;const x=l[A.current];d(A.current),x.action==="visit"?(p(x.vertex),j(new Set(x.visited)),v(x.queue||[])):x.action==="enqueue"&&v(x.queue||[]),A.current++,A.current>=l.length&&(h(!1),p(null))},b=()=>{_.current&&clearInterval(_.current),i([]),o([]),d(-1),j(new Set),p(null),v([]),h(!1),N(!1),A.current=0},T=x=>y===x?"graph-node current":k.has(x)?"graph-node visited":m.includes(x)?"graph-node queued":"graph-node";return t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"intro-layout",children:[t.jsxs("div",{className:"concept-box",children:[t.jsxs("div",{className:"concept-header",children:[t.jsx(Je,{className:"icon-sm"}),t.jsx("span",{children:"What is Breadth-First Search?"})]}),t.jsxs("div",{className:"concept-content",children:[t.jsxs("p",{children:[t.jsx("strong",{children:"BFS"})," explores a graph level by level, visiting all neighbors of a node before moving to the next level."]}),t.jsxs("div",{className:"concept-analogy",children:[t.jsx(Fe,{}),t.jsx("span",{children:"Like ripples spreading outward when you drop a stone in water!"})]}),t.jsxs("div",{className:"concept-operations",children:[t.jsxs("div",{className:"op-item",children:[t.jsx("span",{className:"op-name",children:"Time"}),t.jsx("span",{className:"op-desc",children:"Visit all nodes"}),t.jsx("span",{className:"op-complexity",children:"O(V+E)"})]}),t.jsxs("div",{className:"op-item",children:[t.jsx("span",{className:"op-name",children:"Space"}),t.jsx("span",{className:"op-desc",children:"Queue storage"}),t.jsx("span",{className:"op-complexity",children:"O(V)"})]}),t.jsxs("div",{className:"op-item",children:[t.jsx("span",{className:"op-name",children:"Structure"}),t.jsx("span",{className:"op-desc",children:"Uses a Queue"}),t.jsx("span",{className:"op-complexity",children:"FIFO"})]})]}),t.jsxs("div",{className:"concept-uses",children:[t.jsx("strong",{children:"Common Uses:"}),t.jsxs("ul",{children:[t.jsx("li",{children:"Shortest path in unweighted graphs"}),t.jsx("li",{children:"Level-order tree traversal"}),t.jsx("li",{children:"Finding connected components"}),t.jsx("li",{children:"Web crawlers"})]})]})]})]}),t.jsx(Se,{context:"Breadth-First Search (BFS) algorithm on graphs"})]}),t.jsxs("div",{className:"visualizer-layout",children:[t.jsxs("div",{className:"control-panel",children:[t.jsx("h2",{children:"BFS Controls"}),t.jsxs("div",{className:"operation-group",children:[t.jsx("label",{children:"Load Graph Preset"}),t.jsxs("div",{className:"btn-group preset-group",children:[t.jsx("button",{onClick:()=>Q("simple"),className:"btn btn-preset",disabled:u,children:"Simple"}),t.jsx("button",{onClick:()=>Q("tree"),className:"btn btn-preset",disabled:u,children:"Tree"}),t.jsx("button",{onClick:()=>Q("cyclic"),className:"btn btn-preset",disabled:u,children:"Cyclic"})]})]}),t.jsxs("div",{className:"operation-group",children:[t.jsx("label",{children:"Start BFS From"}),t.jsxs("select",{value:r,onChange:x=>s(x.target.value),className:"vertex-select full-width",disabled:u,children:[t.jsx("option",{value:"",children:"Select start vertex"}),e.vertices.map(x=>t.jsx("option",{value:x,children:x},x))]})]}),t.jsx("div",{className:"operation-group",children:t.jsxs("div",{className:"btn-group",children:[t.jsxs("button",{onClick:V,className:"btn btn-bfs",disabled:u&&!f,children:[t.jsx(Bt,{size:14})," Run BFS"]}),u&&t.jsx("button",{onClick:w,className:"btn btn-pause",children:f?t.jsx(Bt,{size:14}):t.jsx(Ad,{size:14})}),f&&t.jsx("button",{onClick:P,className:"btn btn-step",children:t.jsx(Dd,{size:14})}),t.jsx("button",{onClick:b,className:"btn btn-reset",children:t.jsx(Fd,{size:14})})]})}),t.jsxs("div",{className:"info-panel",children:[t.jsxs("div",{className:"info-item",children:[t.jsx("span",{className:"info-label",children:"Vertices:"}),t.jsx("span",{className:"info-value",children:e.vertex_count||e.vertices.length})]}),t.jsxs("div",{className:"info-item",children:[t.jsx("span",{className:"info-label",children:"Edges:"}),t.jsx("span",{className:"info-value",children:e.edge_count||0})]}),m.length>0&&t.jsxs("div",{className:"info-item queue-display",children:[t.jsx("span",{className:"info-label",children:"Queue:"}),t.jsxs("span",{className:"info-value queue-items",children:["[",m.join(", "),"]"]})]}),a.length>0&&t.jsxs("div",{className:"info-item traversal-result",children:[t.jsx("span",{className:"info-label",children:"Order:"}),t.jsx("span",{className:"info-value",children:a.join(" → ")})]})]}),t.jsx(hn,{message:z}),t.jsxs("div",{className:"legend",children:[t.jsx("h3",{children:"Legend"}),t.jsxs("div",{className:"legend-items",children:[t.jsxs("div",{className:"legend-item",children:[t.jsx("span",{className:"legend-color unvisited"}),t.jsx("span",{children:"Unvisited"})]}),t.jsxs("div",{className:"legend-item",children:[t.jsx("span",{className:"legend-color queued"}),t.jsx("span",{children:"In Queue"})]}),t.jsxs("div",{className:"legend-item",children:[t.jsx("span",{className:"legend-color current"}),t.jsx("span",{children:"Current"})]}),t.jsxs("div",{className:"legend-item",children:[t.jsx("span",{className:"legend-color visited"}),t.jsx("span",{children:"Visited"})]})]})]})]}),t.jsxs("div",{className:"visual-panel",children:[t.jsx("h2",{children:"BFS Visualization"}),t.jsx("div",{className:"graph-container",children:e.vertices.length===0?t.jsx("div",{className:"graph-empty",children:"Loading graph..."}):t.jsxs("svg",{className:"graph-svg",viewBox:"0 0 500 350",children:[e.edges.map(([x,R],M)=>{const I=C[x],B=C[R];return!I||!B?null:t.jsx("line",{x1:I.x,y1:I.y,x2:B.x,y2:B.y,className:"graph-edge"},`edge-${M}`)}),e.vertices.map(x=>{const R=C[x];return R?t.jsxs("g",{className:T(x),children:[t.jsx("circle",{cx:R.x,cy:R.y,r:25,className:"node-circle"}),t.jsx("text",{x:R.x,y:R.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:x})]},x):null})]})}),t.jsxs("div",{className:"algorithm-steps",children:[t.jsx("h3",{children:"BFS Algorithm Steps"}),t.jsx("div",{className:"steps-content",children:t.jsxs("ol",{children:[t.jsx("li",{className:c>=0?"active":"",children:"Start at the selected vertex"}),t.jsx("li",{className:m.length>0?"active":"",children:"Add it to a queue and mark as visited"}),t.jsx("li",{className:y?"active":"",children:"Dequeue a vertex and explore its neighbors"}),t.jsx("li",{children:"Add unvisited neighbors to the queue"}),t.jsx("li",{children:"Repeat until queue is empty"})]})})]})]})]}),t.jsx(Te,{dataStructure:"bfs"})]})}function j0(){const[e,n]=g.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=g.useState(""),[a,i]=g.useState([]),[l,o]=g.useState([]),[c,d]=g.useState(-1),[u,h]=g.useState(!1),[f,N]=g.useState(!1),[k,j]=g.useState(new Set),[y,p]=g.useState(null),[m,v]=g.useState([]),[C,S]=g.useState({}),{message:z,showMessage:E}=pn(3e3),_=g.useRef(null),A=g.useRef(0);g.useEffect(()=>{$()},[]),g.useEffect(()=>{e.vertices.length>0&&O()},[e.vertices]);const O=g.useCallback(()=>{const B=Math.min(500,350)*.35,q={},W=e.vertices.length;e.vertices.forEach((Ce,Ee)=>{const oe=2*Math.PI*Ee/W-Math.PI/2;q[Ce]={x:250+B*Math.cos(oe),y:175+B*Math.sin(oe)}}),S(q)},[e.vertices]),$=async()=>{try{const x=await ve("/api/graph");x.vertices.length===0?await Q("simple"):n(x)}catch(x){console.error("Error loading graph:",x)}},Q=async x=>{try{const R=await Z(`/api/graph/preset/${x}`,{});if(R.error){E(R.error,"error");return}n(R),b(),E(`Loaded '${x}' preset`,"success")}catch{E("Error loading preset","error")}},V=async()=>{if(!r.trim()){E("Please select a starting vertex!","error");return}try{const x=await ve(`/api/graph/dfs/${r}`);if(x.error){E(x.error,"error");return}i(x.traversal),o(x.steps),E("Starting DFS traversal...","info"),D(x.steps)}catch{E("Error running DFS","error")}},D=x=>{_.current&&clearInterval(_.current),h(!0),N(!1),j(new Set),p(null),v([]),d(-1),A.current=0,_.current=setInterval(()=>{if(A.current>=x.length){clearInterval(_.current),h(!1),p(null),E(`DFS Complete: ${a.join(" → ")}`,"success");return}const R=x[A.current];d(A.current),R.action==="visit"?(p(R.vertex),j(new Set(R.visited)),v(R.stack||[])):R.action==="push"&&v(R.stack||[]),A.current++},1e3)},w=()=>{f?(N(!1),L()):(N(!0),_.current&&clearInterval(_.current))},L=()=>{_.current&&clearInterval(_.current),_.current=setInterval(()=>{if(A.current>=l.length){clearInterval(_.current),h(!1),p(null);return}const x=l[A.current];d(A.current),x.action==="visit"?(p(x.vertex),j(new Set(x.visited)),v(x.stack||[])):x.action==="push"&&v(x.stack||[]),A.current++},1e3)},P=()=>{if(A.current>=l.length)return;const x=l[A.current];d(A.current),x.action==="visit"?(p(x.vertex),j(new Set(x.visited)),v(x.stack||[])):x.action==="push"&&v(x.stack||[]),A.current++,A.current>=l.length&&(h(!1),p(null))},b=()=>{_.current&&clearInterval(_.current),i([]),o([]),d(-1),j(new Set),p(null),v([]),h(!1),N(!1),A.current=0},T=x=>y===x?"graph-node current":k.has(x)?"graph-node visited":m.includes(x)?"graph-node stacked":"graph-node";return t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"intro-layout",children:[t.jsxs("div",{className:"concept-box",children:[t.jsxs("div",{className:"concept-header",children:[t.jsx(Je,{className:"icon-sm"}),t.jsx("span",{children:"What is Depth-First Search?"})]}),t.jsxs("div",{className:"concept-content",children:[t.jsxs("p",{children:[t.jsx("strong",{children:"DFS"})," explores a graph by going as deep as possible along each branch before backtracking."]}),t.jsxs("div",{className:"concept-analogy",children:[t.jsx(Fe,{}),t.jsx("span",{children:"Like exploring a maze by following one path to its end before trying another!"})]}),t.jsxs("div",{className:"concept-operations",children:[t.jsxs("div",{className:"op-item",children:[t.jsx("span",{className:"op-name",children:"Time"}),t.jsx("span",{className:"op-desc",children:"Visit all nodes"}),t.jsx("span",{className:"op-complexity",children:"O(V+E)"})]}),t.jsxs("div",{className:"op-item",children:[t.jsx("span",{className:"op-name",children:"Space"}),t.jsx("span",{className:"op-desc",children:"Stack storage"}),t.jsx("span",{className:"op-complexity",children:"O(V)"})]}),t.jsxs("div",{className:"op-item",children:[t.jsx("span",{className:"op-name",children:"Structure"}),t.jsx("span",{className:"op-desc",children:"Uses a Stack"}),t.jsx("span",{className:"op-complexity",children:"LIFO"})]})]}),t.jsxs("div",{className:"concept-uses",children:[t.jsx("strong",{children:"Common Uses:"}),t.jsxs("ul",{children:[t.jsx("li",{children:"Topological sorting"}),t.jsx("li",{children:"Cycle detection"}),t.jsx("li",{children:"Solving mazes and puzzles"}),t.jsx("li",{children:"Finding connected components"})]})]})]})]}),t.jsx(Se,{context:"Depth-First Search (DFS) algorithm on graphs"})]}),t.jsxs("div",{className:"visualizer-layout",children:[t.jsxs("div",{className:"control-panel",children:[t.jsx("h2",{children:"DFS Controls"}),t.jsxs("div",{className:"operation-group",children:[t.jsx("label",{children:"Load Graph Preset"}),t.jsxs("div",{className:"btn-group preset-group",children:[t.jsx("button",{onClick:()=>Q("simple"),className:"btn btn-preset",disabled:u,children:"Simple"}),t.jsx("button",{onClick:()=>Q("tree"),className:"btn btn-preset",disabled:u,children:"Tree"}),t.jsx("button",{onClick:()=>Q("cyclic"),className:"btn btn-preset",disabled:u,children:"Cyclic"})]})]}),t.jsxs("div",{className:"operation-group",children:[t.jsx("label",{children:"Start DFS From"}),t.jsxs("select",{value:r,onChange:x=>s(x.target.value),className:"vertex-select full-width",disabled:u,children:[t.jsx("option",{value:"",children:"Select start vertex"}),e.vertices.map(x=>t.jsx("option",{value:x,children:x},x))]})]}),t.jsx("div",{className:"operation-group",children:t.jsxs("div",{className:"btn-group",children:[t.jsxs("button",{onClick:V,className:"btn btn-dfs",disabled:u&&!f,children:[t.jsx(Bt,{size:14})," Run DFS"]}),u&&t.jsx("button",{onClick:w,className:"btn btn-pause",children:f?t.jsx(Bt,{size:14}):t.jsx(Ad,{size:14})}),f&&t.jsx("button",{onClick:P,className:"btn btn-step",children:t.jsx(Dd,{size:14})}),t.jsx("button",{onClick:b,className:"btn btn-reset",children:t.jsx(Fd,{size:14})})]})}),t.jsxs("div",{className:"info-panel",children:[t.jsxs("div",{className:"info-item",children:[t.jsx("span",{className:"info-label",children:"Vertices:"}),t.jsx("span",{className:"info-value",children:e.vertex_count||e.vertices.length})]}),t.jsxs("div",{className:"info-item",children:[t.jsx("span",{className:"info-label",children:"Edges:"}),t.jsx("span",{className:"info-value",children:e.edge_count||0})]}),m.length>0&&t.jsxs("div",{className:"info-item stack-display",children:[t.jsx("span",{className:"info-label",children:"Stack:"}),t.jsxs("span",{className:"info-value stack-items",children:["[",m.join(", "),"]"]})]}),a.length>0&&t.jsxs("div",{className:"info-item traversal-result",children:[t.jsx("span",{className:"info-label",children:"Order:"}),t.jsx("span",{className:"info-value",children:a.join(" → ")})]})]}),t.jsx(hn,{message:z}),t.jsxs("div",{className:"legend",children:[t.jsx("h3",{children:"Legend"}),t.jsxs("div",{className:"legend-items",children:[t.jsxs("div",{className:"legend-item",children:[t.jsx("span",{className:"legend-color unvisited"}),t.jsx("span",{children:"Unvisited"})]}),t.jsxs("div",{className:"legend-item",children:[t.jsx("span",{className:"legend-color stacked"}),t.jsx("span",{children:"In Stack"})]}),t.jsxs("div",{className:"legend-item",children:[t.jsx("span",{className:"legend-color current"}),t.jsx("span",{children:"Current"})]}),t.jsxs("div",{className:"legend-item",children:[t.jsx("span",{className:"legend-color visited"}),t.jsx("span",{children:"Visited"})]})]})]})]}),t.jsxs("div",{className:"visual-panel",children:[t.jsx("h2",{children:"DFS Visualization"}),t.jsx("div",{className:"graph-container",children:e.vertices.length===0?t.jsx("div",{className:"graph-empty",children:"Loading graph..."}):t.jsxs("svg",{className:"graph-svg",viewBox:"0 0 500 350",children:[e.edges.map(([x,R],M)=>{const I=C[x],B=C[R];return!I||!B?null:t.jsx("line",{x1:I.x,y1:I.y,x2:B.x,y2:B.y,className:"graph-edge"},`edge-${M}`)}),e.vertices.map(x=>{const R=C[x];return R?t.jsxs("g",{className:T(x),children:[t.jsx("circle",{cx:R.x,cy:R.y,r:25,className:"node-circle"}),t.jsx("text",{x:R.x,y:R.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:x})]},x):null})]})}),t.jsxs("div",{className:"algorithm-steps",children:[t.jsx("h3",{children:"DFS Algorithm Steps"}),t.jsx("div",{className:"steps-content",children:t.jsxs("ol",{children:[t.jsx("li",{className:c>=0?"active":"",children:"Start at the selected vertex"}),t.jsx("li",{className:m.length>0?"active":"",children:"Push it to a stack and mark as visited"}),t.jsx("li",{className:y?"active":"",children:"Pop a vertex and explore one unvisited neighbor"}),t.jsx("li",{children:"Push the neighbor to stack and repeat"}),t.jsx("li",{children:"Backtrack when no unvisited neighbors remain"})]})})]})]})]}),t.jsx(Te,{dataStructure:"dfs"})]})}function k0(){return t.jsxs("div",{className:"homepage-body",children:[t.jsx(ng,{}),t.jsxs("main",{className:"main-content",children:[t.jsxs(cm,{children:[t.jsx(ce,{path:"/",element:t.jsx(rg,{})}),t.jsx(ce,{path:"/algorithms",element:t.jsx(sg,{})}),t.jsx(ce,{path:"/contact",element:t.jsx(ag,{})}),t.jsx(ce,{path:"/contributions",element:t.jsx(ig,{})}),t.jsx(ce,{path:"/stack",element:t.jsx(cv,{})}),t.jsx(ce,{path:"/queue",element:t.jsx(uv,{})}),t.jsx(ce,{path:"/linkedlist",element:t.jsx(dv,{})}),t.jsx(ce,{path:"/hashtable_linear",element:t.jsx(hv,{})}),t.jsx(ce,{path:"/hashtable_quadratic",element:t.jsx(Nv,{})}),t.jsx(ce,{path:"/hashtable_chaining",element:t.jsx(kv,{})}),t.jsx(ce,{path:"/binarytree",element:t.jsx(Lv,{})}),t.jsx(ce,{path:"/bst",element:t.jsx(Zx,{})}),t.jsx(ce,{path:"/avl",element:t.jsx(r0,{})}),t.jsx(ce,{path:"/splay",element:t.jsx(o0,{})}),t.jsx(ce,{path:"/minheap",element:t.jsx(h0,{})}),t.jsx(ce,{path:"/maxheap",element:t.jsx(g0,{})}),t.jsx(ce,{path:"/adjacency-list",element:t.jsx(v0,{})}),t.jsx(ce,{path:"/adjacency-matrix",element:t.jsx(y0,{})}),t.jsx(ce,{path:"/bfs",element:t.jsx(x0,{})}),t.jsx(ce,{path:"/dfs",element:t.jsx(j0,{})})]}),t.jsx(tg,{})]})]})}Da.createRoot(document.getElementById("root")).render(t.jsx(ot.StrictMode,{children:t.jsx(gm,{children:t.jsx(k0,{})})}));
