function Hh(e,t){for(var r=0;r<t.length;r++){const s=t[r];if(typeof s!="string"&&!Array.isArray(s)){for(const i in s)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(s,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>s[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(i){if(i.ep)return;i.ep=!0;const a=r(i);fetch(i.href,a)}})();function qh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var rd={exports:{}},Ni={},sd={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ts=Symbol.for("react.element"),Uh=Symbol.for("react.portal"),Kh=Symbol.for("react.fragment"),Wh=Symbol.for("react.strict_mode"),Gh=Symbol.for("react.profiler"),Qh=Symbol.for("react.provider"),Yh=Symbol.for("react.context"),Xh=Symbol.for("react.forward_ref"),Jh=Symbol.for("react.suspense"),Zh=Symbol.for("react.memo"),ep=Symbol.for("react.lazy"),Co=Symbol.iterator;function np(e){return e===null||typeof e!="object"?null:(e=Co&&e[Co]||e["@@iterator"],typeof e=="function"?e:null)}var id={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ad=Object.assign,ld={};function ir(e,t,r){this.props=e,this.context=t,this.refs=ld,this.updater=r||id}ir.prototype.isReactComponent={};ir.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ir.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function od(){}od.prototype=ir.prototype;function Sl(e,t,r){this.props=e,this.context=t,this.refs=ld,this.updater=r||id}var Cl=Sl.prototype=new od;Cl.constructor=Sl;ad(Cl,ir.prototype);Cl.isPureReactComponent=!0;var To=Array.isArray,cd=Object.prototype.hasOwnProperty,Tl={current:null},dd={key:!0,ref:!0,__self:!0,__source:!0};function ud(e,t,r){var s,i={},a=null,l=null;if(t!=null)for(s in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(a=""+t.key),t)cd.call(t,s)&&!dd.hasOwnProperty(s)&&(i[s]=t[s]);var o=arguments.length-2;if(o===1)i.children=r;else if(1<o){for(var c=Array(o),h=0;h<o;h++)c[h]=arguments[h+2];i.children=c}if(e&&e.defaultProps)for(s in o=e.defaultProps,o)i[s]===void 0&&(i[s]=o[s]);return{$$typeof:ts,type:e,key:a,ref:l,props:i,_owner:Tl.current}}function tp(e,t){return{$$typeof:ts,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function El(e){return typeof e=="object"&&e!==null&&e.$$typeof===ts}function rp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Eo=/\/+/g;function Vi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?rp(""+e.key):t.toString(36)}function Os(e,t,r,s,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case ts:case Uh:l=!0}}if(l)return l=e,i=i(l),e=s===""?"."+Vi(l,0):s,To(i)?(r="",e!=null&&(r=e.replace(Eo,"$&/")+"/"),Os(i,t,r,"",function(h){return h})):i!=null&&(El(i)&&(i=tp(i,r+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Eo,"$&/")+"/")+e)),t.push(i)),1;if(l=0,s=s===""?".":s+":",To(e))for(var o=0;o<e.length;o++){a=e[o];var c=s+Vi(a,o);l+=Os(a,t,r,c,i)}else if(c=np(e),typeof c=="function")for(e=c.call(e),o=0;!(a=e.next()).done;)a=a.value,c=s+Vi(a,o++),l+=Os(a,t,r,c,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function hs(e,t,r){if(e==null)return e;var s=[],i=0;return Os(e,s,"","",function(a){return t.call(r,a,i++)}),s}function sp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var De={current:null},Ps={transition:null},ip={ReactCurrentDispatcher:De,ReactCurrentBatchConfig:Ps,ReactCurrentOwner:Tl};function hd(){throw Error("act(...) is not supported in production builds of React.")}Z.Children={map:hs,forEach:function(e,t,r){hs(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return hs(e,function(){t++}),t},toArray:function(e){return hs(e,function(t){return t})||[]},only:function(e){if(!El(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Z.Component=ir;Z.Fragment=Kh;Z.Profiler=Gh;Z.PureComponent=Sl;Z.StrictMode=Wh;Z.Suspense=Jh;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ip;Z.act=hd;Z.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=ad({},e.props),i=e.key,a=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,l=Tl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(c in t)cd.call(t,c)&&!dd.hasOwnProperty(c)&&(s[c]=t[c]===void 0&&o!==void 0?o[c]:t[c])}var c=arguments.length-2;if(c===1)s.children=r;else if(1<c){o=Array(c);for(var h=0;h<c;h++)o[h]=arguments[h+2];s.children=o}return{$$typeof:ts,type:e.type,key:i,ref:a,props:s,_owner:l}};Z.createContext=function(e){return e={$$typeof:Yh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Qh,_context:e},e.Consumer=e};Z.createElement=ud;Z.createFactory=function(e){var t=ud.bind(null,e);return t.type=e,t};Z.createRef=function(){return{current:null}};Z.forwardRef=function(e){return{$$typeof:Xh,render:e}};Z.isValidElement=El;Z.lazy=function(e){return{$$typeof:ep,_payload:{_status:-1,_result:e},_init:sp}};Z.memo=function(e,t){return{$$typeof:Zh,type:e,compare:t===void 0?null:t}};Z.startTransition=function(e){var t=Ps.transition;Ps.transition={};try{e()}finally{Ps.transition=t}};Z.unstable_act=hd;Z.useCallback=function(e,t){return De.current.useCallback(e,t)};Z.useContext=function(e){return De.current.useContext(e)};Z.useDebugValue=function(){};Z.useDeferredValue=function(e){return De.current.useDeferredValue(e)};Z.useEffect=function(e,t){return De.current.useEffect(e,t)};Z.useId=function(){return De.current.useId()};Z.useImperativeHandle=function(e,t,r){return De.current.useImperativeHandle(e,t,r)};Z.useInsertionEffect=function(e,t){return De.current.useInsertionEffect(e,t)};Z.useLayoutEffect=function(e,t){return De.current.useLayoutEffect(e,t)};Z.useMemo=function(e,t){return De.current.useMemo(e,t)};Z.useReducer=function(e,t,r){return De.current.useReducer(e,t,r)};Z.useRef=function(e){return De.current.useRef(e)};Z.useState=function(e){return De.current.useState(e)};Z.useSyncExternalStore=function(e,t,r){return De.current.useSyncExternalStore(e,t,r)};Z.useTransition=function(){return De.current.useTransition()};Z.version="18.3.1";sd.exports=Z;var u=sd.exports;const Je=qh(u),ap=Hh({__proto__:null,default:Je},[u]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lp=u,op=Symbol.for("react.element"),cp=Symbol.for("react.fragment"),dp=Object.prototype.hasOwnProperty,up=lp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hp={key:!0,ref:!0,__self:!0,__source:!0};function pd(e,t,r){var s,i={},a=null,l=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(l=t.ref);for(s in t)dp.call(t,s)&&!hp.hasOwnProperty(s)&&(i[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)i[s]===void 0&&(i[s]=t[s]);return{$$typeof:op,type:e,key:a,ref:l,props:i,_owner:up.current}}Ni.Fragment=cp;Ni.jsx=pd;Ni.jsxs=pd;rd.exports=Ni;var n=rd.exports,ya={},fd={exports:{}},nn={},md={exports:{}},gd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,_){var b=T.length;T.push(_);e:for(;0<b;){var C=b-1>>>1,M=T[C];if(0<i(M,_))T[C]=_,T[b]=M,b=C;else break e}}function r(T){return T.length===0?null:T[0]}function s(T){if(T.length===0)return null;var _=T[0],b=T.pop();if(b!==_){T[0]=b;e:for(var C=0,M=T.length,L=M>>>1;C<L;){var O=2*(C+1)-1,R=T[O],v=O+1,$=T[v];if(0>i(R,b))v<M&&0>i($,R)?(T[C]=$,T[v]=b,C=v):(T[C]=R,T[O]=b,C=O);else if(v<M&&0>i($,b))T[C]=$,T[v]=b,C=v;else break e}}return _}function i(T,_){var b=T.sortIndex-_.sortIndex;return b!==0?b:T.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var l=Date,o=l.now();e.unstable_now=function(){return l.now()-o}}var c=[],h=[],d=1,p=null,m=3,S=!1,w=!1,j=!1,y=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(T){for(var _=r(h);_!==null;){if(_.callback===null)s(h);else if(_.startTime<=T)s(h),_.sortIndex=_.expirationTime,t(c,_);else break;_=r(h)}}function P(T){if(j=!1,x(T),!w)if(r(c)!==null)w=!0,z(N);else{var _=r(h);_!==null&&B(P,_.startTime-T)}}function N(T,_){w=!1,j&&(j=!1,f(V),V=-1),S=!0;var b=m;try{for(x(_),p=r(c);p!==null&&(!(p.expirationTime>_)||T&&!H());){var C=p.callback;if(typeof C=="function"){p.callback=null,m=p.priorityLevel;var M=C(p.expirationTime<=_);_=e.unstable_now(),typeof M=="function"?p.callback=M:p===r(c)&&s(c),x(_)}else s(c);p=r(c)}if(p!==null)var L=!0;else{var O=r(h);O!==null&&B(P,O.startTime-_),L=!1}return L}finally{p=null,m=b,S=!1}}var A=!1,E=null,V=-1,F=5,I=-1;function H(){return!(e.unstable_now()-I<F)}function K(){if(E!==null){var T=e.unstable_now();I=T;var _=!0;try{_=E(!0,T)}finally{_?D():(A=!1,E=null)}}else A=!1}var D;if(typeof g=="function")D=function(){g(K)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,k=q.port2;q.port1.onmessage=K,D=function(){k.postMessage(null)}}else D=function(){y(K,0)};function z(T){E=T,A||(A=!0,D())}function B(T,_){V=y(function(){T(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){w||S||(w=!0,z(N))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(T){switch(m){case 1:case 2:case 3:var _=3;break;default:_=m}var b=m;m=_;try{return T()}finally{m=b}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,_){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var b=m;m=T;try{return _()}finally{m=b}},e.unstable_scheduleCallback=function(T,_,b){var C=e.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?C+b:C):b=C,T){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=b+M,T={id:d++,callback:_,priorityLevel:T,startTime:b,expirationTime:M,sortIndex:-1},b>C?(T.sortIndex=b,t(h,T),r(c)===null&&T===r(h)&&(j?(f(V),V=-1):j=!0,B(P,b-C))):(T.sortIndex=M,t(c,T),w||S||(w=!0,z(N))),T},e.unstable_shouldYield=H,e.unstable_wrapCallback=function(T){var _=m;return function(){var b=m;m=_;try{return T.apply(this,arguments)}finally{m=b}}}})(gd);md.exports=gd;var pp=md.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fp=u,en=pp;function U(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xd=new Set,zr={};function Nt(e,t){Jt(e,t),Jt(e+"Capture",t)}function Jt(e,t){for(zr[e]=t,e=0;e<t.length;e++)xd.add(t[e])}var Tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ja=Object.prototype.hasOwnProperty,mp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_o={},Lo={};function gp(e){return ja.call(Lo,e)?!0:ja.call(_o,e)?!1:mp.test(e)?Lo[e]=!0:(_o[e]=!0,!1)}function xp(e,t,r,s){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function vp(e,t,r,s){if(t===null||typeof t>"u"||xp(e,t,r,s))return!0;if(s)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function $e(e,t,r,s,i,a,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=l}var Le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Le[e]=new $e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Le[t]=new $e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Le[e]=new $e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Le[e]=new $e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Le[e]=new $e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Le[e]=new $e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Le[e]=new $e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Le[e]=new $e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Le[e]=new $e(e,5,!1,e.toLowerCase(),null,!1,!1)});var _l=/[\-:]([a-z])/g;function Ll(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(_l,Ll);Le[t]=new $e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(_l,Ll);Le[t]=new $e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(_l,Ll);Le[t]=new $e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Le[e]=new $e(e,1,!1,e.toLowerCase(),null,!1,!1)});Le.xlinkHref=new $e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Le[e]=new $e(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ol(e,t,r,s){var i=Le.hasOwnProperty(t)?Le[t]:null;(i!==null?i.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(vp(t,r,i,s)&&(r=null),s||i===null?gp(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,s=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,s?e.setAttributeNS(s,t,r):e.setAttribute(t,r))))}var Pn=fp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ps=Symbol.for("react.element"),Et=Symbol.for("react.portal"),_t=Symbol.for("react.fragment"),Pl=Symbol.for("react.strict_mode"),Na=Symbol.for("react.profiler"),vd=Symbol.for("react.provider"),yd=Symbol.for("react.context"),Rl=Symbol.for("react.forward_ref"),ka=Symbol.for("react.suspense"),ba=Symbol.for("react.suspense_list"),Il=Symbol.for("react.memo"),zn=Symbol.for("react.lazy"),jd=Symbol.for("react.offscreen"),Oo=Symbol.iterator;function cr(e){return e===null||typeof e!="object"?null:(e=Oo&&e[Oo]||e["@@iterator"],typeof e=="function"?e:null)}var pe=Object.assign,Di;function xr(e){if(Di===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Di=t&&t[1]||""}return`
`+Di+e}var $i=!1;function Bi(e,t){if(!e||$i)return"";$i=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(h){var s=h}Reflect.construct(e,[],t)}else{try{t.call()}catch(h){s=h}e.call(t.prototype)}else{try{throw Error()}catch(h){s=h}e()}}catch(h){if(h&&s&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),a=s.stack.split(`
`),l=i.length-1,o=a.length-1;1<=l&&0<=o&&i[l]!==a[o];)o--;for(;1<=l&&0<=o;l--,o--)if(i[l]!==a[o]){if(l!==1||o!==1)do if(l--,o--,0>o||i[l]!==a[o]){var c=`
`+i[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=o);break}}}finally{$i=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?xr(e):""}function yp(e){switch(e.tag){case 5:return xr(e.type);case 16:return xr("Lazy");case 13:return xr("Suspense");case 19:return xr("SuspenseList");case 0:case 2:case 15:return e=Bi(e.type,!1),e;case 11:return e=Bi(e.type.render,!1),e;case 1:return e=Bi(e.type,!0),e;default:return""}}function wa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _t:return"Fragment";case Et:return"Portal";case Na:return"Profiler";case Pl:return"StrictMode";case ka:return"Suspense";case ba:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case yd:return(e.displayName||"Context")+".Consumer";case vd:return(e._context.displayName||"Context")+".Provider";case Rl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Il:return t=e.displayName||null,t!==null?t:wa(e.type)||"Memo";case zn:t=e._payload,e=e._init;try{return wa(e(t))}catch{}}return null}function jp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wa(t);case 8:return t===Pl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Zn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Nd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Np(e){var t=Nd(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){s=""+l,a.call(this,l)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return s},setValue:function(l){s=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fs(e){e._valueTracker||(e._valueTracker=Np(e))}function kd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),s="";return e&&(s=Nd(e)?e.checked?"true":"false":e.value),e=s,e!==r?(t.setValue(e),!0):!1}function Us(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Sa(e,t){var r=t.checked;return pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Po(e,t){var r=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;r=Zn(t.value!=null?t.value:r),e._wrapperState={initialChecked:s,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function bd(e,t){t=t.checked,t!=null&&Ol(e,"checked",t,!1)}function Ca(e,t){bd(e,t);var r=Zn(t.value),s=t.type;if(r!=null)s==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ta(e,t.type,r):t.hasOwnProperty("defaultValue")&&Ta(e,t.type,Zn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ro(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Ta(e,t,r){(t!=="number"||Us(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var vr=Array.isArray;function Ut(e,t,r,s){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&s&&(e[r].defaultSelected=!0)}else{for(r=""+Zn(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,s&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ea(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(U(91));return pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Io(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(U(92));if(vr(r)){if(1<r.length)throw Error(U(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Zn(r)}}function wd(e,t){var r=Zn(t.value),s=Zn(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),s!=null&&(e.defaultValue=""+s)}function zo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Sd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _a(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Sd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ms,Cd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,s,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,s,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ms=ms||document.createElement("div"),ms.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ms.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Mr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var br={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kp=["Webkit","ms","Moz","O"];Object.keys(br).forEach(function(e){kp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),br[t]=br[e]})});function Td(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||br.hasOwnProperty(e)&&br[e]?(""+t).trim():t+"px"}function Ed(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var s=r.indexOf("--")===0,i=Td(r,t[r],s);r==="float"&&(r="cssFloat"),s?e.setProperty(r,i):e[r]=i}}var bp=pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function La(e,t){if(t){if(bp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(U(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(U(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(U(61))}if(t.style!=null&&typeof t.style!="object")throw Error(U(62))}}function Oa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pa=null;function zl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ra=null,Kt=null,Wt=null;function Mo(e){if(e=is(e)){if(typeof Ra!="function")throw Error(U(280));var t=e.stateNode;t&&(t=Ci(t),Ra(e.stateNode,e.type,t))}}function _d(e){Kt?Wt?Wt.push(e):Wt=[e]:Kt=e}function Ld(){if(Kt){var e=Kt,t=Wt;if(Wt=Kt=null,Mo(e),t)for(e=0;e<t.length;e++)Mo(t[e])}}function Od(e,t){return e(t)}function Pd(){}var Hi=!1;function Rd(e,t,r){if(Hi)return e(t,r);Hi=!0;try{return Od(e,t,r)}finally{Hi=!1,(Kt!==null||Wt!==null)&&(Pd(),Ld())}}function Ar(e,t){var r=e.stateNode;if(r===null)return null;var s=Ci(r);if(s===null)return null;r=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(U(231,t,typeof r));return r}var Ia=!1;if(Tn)try{var dr={};Object.defineProperty(dr,"passive",{get:function(){Ia=!0}}),window.addEventListener("test",dr,dr),window.removeEventListener("test",dr,dr)}catch{Ia=!1}function wp(e,t,r,s,i,a,l,o,c){var h=Array.prototype.slice.call(arguments,3);try{t.apply(r,h)}catch(d){this.onError(d)}}var wr=!1,Ks=null,Ws=!1,za=null,Sp={onError:function(e){wr=!0,Ks=e}};function Cp(e,t,r,s,i,a,l,o,c){wr=!1,Ks=null,wp.apply(Sp,arguments)}function Tp(e,t,r,s,i,a,l,o,c){if(Cp.apply(this,arguments),wr){if(wr){var h=Ks;wr=!1,Ks=null}else throw Error(U(198));Ws||(Ws=!0,za=h)}}function kt(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Id(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ao(e){if(kt(e)!==e)throw Error(U(188))}function Ep(e){var t=e.alternate;if(!t){if(t=kt(e),t===null)throw Error(U(188));return t!==e?null:e}for(var r=e,s=t;;){var i=r.return;if(i===null)break;var a=i.alternate;if(a===null){if(s=i.return,s!==null){r=s;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===r)return Ao(i),e;if(a===s)return Ao(i),t;a=a.sibling}throw Error(U(188))}if(r.return!==s.return)r=i,s=a;else{for(var l=!1,o=i.child;o;){if(o===r){l=!0,r=i,s=a;break}if(o===s){l=!0,s=i,r=a;break}o=o.sibling}if(!l){for(o=a.child;o;){if(o===r){l=!0,r=a,s=i;break}if(o===s){l=!0,s=a,r=i;break}o=o.sibling}if(!l)throw Error(U(189))}}if(r.alternate!==s)throw Error(U(190))}if(r.tag!==3)throw Error(U(188));return r.stateNode.current===r?e:t}function zd(e){return e=Ep(e),e!==null?Md(e):null}function Md(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Md(e);if(t!==null)return t;e=e.sibling}return null}var Ad=en.unstable_scheduleCallback,Fo=en.unstable_cancelCallback,_p=en.unstable_shouldYield,Lp=en.unstable_requestPaint,ge=en.unstable_now,Op=en.unstable_getCurrentPriorityLevel,Ml=en.unstable_ImmediatePriority,Fd=en.unstable_UserBlockingPriority,Gs=en.unstable_NormalPriority,Pp=en.unstable_LowPriority,Vd=en.unstable_IdlePriority,ki=null,jn=null;function Rp(e){if(jn&&typeof jn.onCommitFiberRoot=="function")try{jn.onCommitFiberRoot(ki,e,void 0,(e.current.flags&128)===128)}catch{}}var fn=Math.clz32?Math.clz32:Mp,Ip=Math.log,zp=Math.LN2;function Mp(e){return e>>>=0,e===0?32:31-(Ip(e)/zp|0)|0}var gs=64,xs=4194304;function yr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Qs(e,t){var r=e.pendingLanes;if(r===0)return 0;var s=0,i=e.suspendedLanes,a=e.pingedLanes,l=r&268435455;if(l!==0){var o=l&~i;o!==0?s=yr(o):(a&=l,a!==0&&(s=yr(a)))}else l=r&~i,l!==0?s=yr(l):a!==0&&(s=yr(a));if(s===0)return 0;if(t!==0&&t!==s&&!(t&i)&&(i=s&-s,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(s&4&&(s|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)r=31-fn(t),i=1<<r,s|=e[r],t&=~i;return s}function Ap(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fp(e,t){for(var r=e.suspendedLanes,s=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var l=31-fn(a),o=1<<l,c=i[l];c===-1?(!(o&r)||o&s)&&(i[l]=Ap(o,t)):c<=t&&(e.expiredLanes|=o),a&=~o}}function Ma(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Dd(){var e=gs;return gs<<=1,!(gs&4194240)&&(gs=64),e}function qi(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function rs(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-fn(t),e[t]=r}function Vp(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-fn(r),a=1<<i;t[i]=0,s[i]=-1,e[i]=-1,r&=~a}}function Al(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var s=31-fn(r),i=1<<s;i&t|e[s]&t&&(e[s]|=t),r&=~i}}var se=0;function $d(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Bd,Fl,Hd,qd,Ud,Aa=!1,vs=[],Hn=null,qn=null,Un=null,Fr=new Map,Vr=new Map,An=[],Dp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vo(e,t){switch(e){case"focusin":case"focusout":Hn=null;break;case"dragenter":case"dragleave":qn=null;break;case"mouseover":case"mouseout":Un=null;break;case"pointerover":case"pointerout":Fr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vr.delete(t.pointerId)}}function ur(e,t,r,s,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:s,nativeEvent:a,targetContainers:[i]},t!==null&&(t=is(t),t!==null&&Fl(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function $p(e,t,r,s,i){switch(t){case"focusin":return Hn=ur(Hn,e,t,r,s,i),!0;case"dragenter":return qn=ur(qn,e,t,r,s,i),!0;case"mouseover":return Un=ur(Un,e,t,r,s,i),!0;case"pointerover":var a=i.pointerId;return Fr.set(a,ur(Fr.get(a)||null,e,t,r,s,i)),!0;case"gotpointercapture":return a=i.pointerId,Vr.set(a,ur(Vr.get(a)||null,e,t,r,s,i)),!0}return!1}function Kd(e){var t=ct(e.target);if(t!==null){var r=kt(t);if(r!==null){if(t=r.tag,t===13){if(t=Id(r),t!==null){e.blockedOn=t,Ud(e.priority,function(){Hd(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Rs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Fa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var s=new r.constructor(r.type,r);Pa=s,r.target.dispatchEvent(s),Pa=null}else return t=is(r),t!==null&&Fl(t),e.blockedOn=r,!1;t.shift()}return!0}function Do(e,t,r){Rs(e)&&r.delete(t)}function Bp(){Aa=!1,Hn!==null&&Rs(Hn)&&(Hn=null),qn!==null&&Rs(qn)&&(qn=null),Un!==null&&Rs(Un)&&(Un=null),Fr.forEach(Do),Vr.forEach(Do)}function hr(e,t){e.blockedOn===t&&(e.blockedOn=null,Aa||(Aa=!0,en.unstable_scheduleCallback(en.unstable_NormalPriority,Bp)))}function Dr(e){function t(i){return hr(i,e)}if(0<vs.length){hr(vs[0],e);for(var r=1;r<vs.length;r++){var s=vs[r];s.blockedOn===e&&(s.blockedOn=null)}}for(Hn!==null&&hr(Hn,e),qn!==null&&hr(qn,e),Un!==null&&hr(Un,e),Fr.forEach(t),Vr.forEach(t),r=0;r<An.length;r++)s=An[r],s.blockedOn===e&&(s.blockedOn=null);for(;0<An.length&&(r=An[0],r.blockedOn===null);)Kd(r),r.blockedOn===null&&An.shift()}var Gt=Pn.ReactCurrentBatchConfig,Ys=!0;function Hp(e,t,r,s){var i=se,a=Gt.transition;Gt.transition=null;try{se=1,Vl(e,t,r,s)}finally{se=i,Gt.transition=a}}function qp(e,t,r,s){var i=se,a=Gt.transition;Gt.transition=null;try{se=4,Vl(e,t,r,s)}finally{se=i,Gt.transition=a}}function Vl(e,t,r,s){if(Ys){var i=Fa(e,t,r,s);if(i===null)ea(e,t,s,Xs,r),Vo(e,s);else if($p(i,e,t,r,s))s.stopPropagation();else if(Vo(e,s),t&4&&-1<Dp.indexOf(e)){for(;i!==null;){var a=is(i);if(a!==null&&Bd(a),a=Fa(e,t,r,s),a===null&&ea(e,t,s,Xs,r),a===i)break;i=a}i!==null&&s.stopPropagation()}else ea(e,t,s,null,r)}}var Xs=null;function Fa(e,t,r,s){if(Xs=null,e=zl(s),e=ct(e),e!==null)if(t=kt(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Id(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Xs=e,null}function Wd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Op()){case Ml:return 1;case Fd:return 4;case Gs:case Pp:return 16;case Vd:return 536870912;default:return 16}default:return 16}}var Vn=null,Dl=null,Is=null;function Gd(){if(Is)return Is;var e,t=Dl,r=t.length,s,i="value"in Vn?Vn.value:Vn.textContent,a=i.length;for(e=0;e<r&&t[e]===i[e];e++);var l=r-e;for(s=1;s<=l&&t[r-s]===i[a-s];s++);return Is=i.slice(e,1<s?1-s:void 0)}function zs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ys(){return!0}function $o(){return!1}function tn(e){function t(r,s,i,a,l){this._reactName=r,this._targetInst=i,this.type=s,this.nativeEvent=a,this.target=l,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(r=e[o],this[o]=r?r(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?ys:$o,this.isPropagationStopped=$o,this}return pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ys)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ys)},persist:function(){},isPersistent:ys}),t}var ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$l=tn(ar),ss=pe({},ar,{view:0,detail:0}),Up=tn(ss),Ui,Ki,pr,bi=pe({},ss,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pr&&(pr&&e.type==="mousemove"?(Ui=e.screenX-pr.screenX,Ki=e.screenY-pr.screenY):Ki=Ui=0,pr=e),Ui)},movementY:function(e){return"movementY"in e?e.movementY:Ki}}),Bo=tn(bi),Kp=pe({},bi,{dataTransfer:0}),Wp=tn(Kp),Gp=pe({},ss,{relatedTarget:0}),Wi=tn(Gp),Qp=pe({},ar,{animationName:0,elapsedTime:0,pseudoElement:0}),Yp=tn(Qp),Xp=pe({},ar,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Jp=tn(Xp),Zp=pe({},ar,{data:0}),Ho=tn(Zp),ef={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=tf[e])?!!t[e]:!1}function Bl(){return rf}var sf=pe({},ss,{key:function(e){if(e.key){var t=ef[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=zs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bl,charCode:function(e){return e.type==="keypress"?zs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),af=tn(sf),lf=pe({},bi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qo=tn(lf),of=pe({},ss,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bl}),cf=tn(of),df=pe({},ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),uf=tn(df),hf=pe({},bi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),pf=tn(hf),ff=[9,13,27,32],Hl=Tn&&"CompositionEvent"in window,Sr=null;Tn&&"documentMode"in document&&(Sr=document.documentMode);var mf=Tn&&"TextEvent"in window&&!Sr,Qd=Tn&&(!Hl||Sr&&8<Sr&&11>=Sr),Uo=" ",Ko=!1;function Yd(e,t){switch(e){case"keyup":return ff.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Lt=!1;function gf(e,t){switch(e){case"compositionend":return Xd(t);case"keypress":return t.which!==32?null:(Ko=!0,Uo);case"textInput":return e=t.data,e===Uo&&Ko?null:e;default:return null}}function xf(e,t){if(Lt)return e==="compositionend"||!Hl&&Yd(e,t)?(e=Gd(),Is=Dl=Vn=null,Lt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qd&&t.locale!=="ko"?null:t.data;default:return null}}var vf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!vf[e.type]:t==="textarea"}function Jd(e,t,r,s){_d(s),t=Js(t,"onChange"),0<t.length&&(r=new $l("onChange","change",null,r,s),e.push({event:r,listeners:t}))}var Cr=null,$r=null;function yf(e){cu(e,0)}function wi(e){var t=Rt(e);if(kd(t))return e}function jf(e,t){if(e==="change")return t}var Zd=!1;if(Tn){var Gi;if(Tn){var Qi="oninput"in document;if(!Qi){var Go=document.createElement("div");Go.setAttribute("oninput","return;"),Qi=typeof Go.oninput=="function"}Gi=Qi}else Gi=!1;Zd=Gi&&(!document.documentMode||9<document.documentMode)}function Qo(){Cr&&(Cr.detachEvent("onpropertychange",eu),$r=Cr=null)}function eu(e){if(e.propertyName==="value"&&wi($r)){var t=[];Jd(t,$r,e,zl(e)),Rd(yf,t)}}function Nf(e,t,r){e==="focusin"?(Qo(),Cr=t,$r=r,Cr.attachEvent("onpropertychange",eu)):e==="focusout"&&Qo()}function kf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wi($r)}function bf(e,t){if(e==="click")return wi(t)}function wf(e,t){if(e==="input"||e==="change")return wi(t)}function Sf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gn=typeof Object.is=="function"?Object.is:Sf;function Br(e,t){if(gn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(s=0;s<r.length;s++){var i=r[s];if(!ja.call(t,i)||!gn(e[i],t[i]))return!1}return!0}function Yo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xo(e,t){var r=Yo(e);e=0;for(var s;r;){if(r.nodeType===3){if(s=e+r.textContent.length,e<=t&&s>=t)return{node:r,offset:t-e};e=s}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Yo(r)}}function nu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?nu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function tu(){for(var e=window,t=Us();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Us(e.document)}return t}function ql(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Cf(e){var t=tu(),r=e.focusedElem,s=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&nu(r.ownerDocument.documentElement,r)){if(s!==null&&ql(r)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,a=Math.min(s.start,i);s=s.end===void 0?a:Math.min(s.end,i),!e.extend&&a>s&&(i=s,s=a,a=i),i=Xo(r,a);var l=Xo(r,s);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>s?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Tf=Tn&&"documentMode"in document&&11>=document.documentMode,Ot=null,Va=null,Tr=null,Da=!1;function Jo(e,t,r){var s=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Da||Ot==null||Ot!==Us(s)||(s=Ot,"selectionStart"in s&&ql(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Tr&&Br(Tr,s)||(Tr=s,s=Js(Va,"onSelect"),0<s.length&&(t=new $l("onSelect","select",null,t,r),e.push({event:t,listeners:s}),t.target=Ot)))}function js(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Pt={animationend:js("Animation","AnimationEnd"),animationiteration:js("Animation","AnimationIteration"),animationstart:js("Animation","AnimationStart"),transitionend:js("Transition","TransitionEnd")},Yi={},ru={};Tn&&(ru=document.createElement("div").style,"AnimationEvent"in window||(delete Pt.animationend.animation,delete Pt.animationiteration.animation,delete Pt.animationstart.animation),"TransitionEvent"in window||delete Pt.transitionend.transition);function Si(e){if(Yi[e])return Yi[e];if(!Pt[e])return e;var t=Pt[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in ru)return Yi[e]=t[r];return e}var su=Si("animationend"),iu=Si("animationiteration"),au=Si("animationstart"),lu=Si("transitionend"),ou=new Map,Zo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nt(e,t){ou.set(e,t),Nt(t,[e])}for(var Xi=0;Xi<Zo.length;Xi++){var Ji=Zo[Xi],Ef=Ji.toLowerCase(),_f=Ji[0].toUpperCase()+Ji.slice(1);nt(Ef,"on"+_f)}nt(su,"onAnimationEnd");nt(iu,"onAnimationIteration");nt(au,"onAnimationStart");nt("dblclick","onDoubleClick");nt("focusin","onFocus");nt("focusout","onBlur");nt(lu,"onTransitionEnd");Jt("onMouseEnter",["mouseout","mouseover"]);Jt("onMouseLeave",["mouseout","mouseover"]);Jt("onPointerEnter",["pointerout","pointerover"]);Jt("onPointerLeave",["pointerout","pointerover"]);Nt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Nt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Nt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Nt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Nt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Nt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lf=new Set("cancel close invalid load scroll toggle".split(" ").concat(jr));function ec(e,t,r){var s=e.type||"unknown-event";e.currentTarget=r,Tp(s,t,void 0,e),e.currentTarget=null}function cu(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var s=e[r],i=s.event;s=s.listeners;e:{var a=void 0;if(t)for(var l=s.length-1;0<=l;l--){var o=s[l],c=o.instance,h=o.currentTarget;if(o=o.listener,c!==a&&i.isPropagationStopped())break e;ec(i,o,h),a=c}else for(l=0;l<s.length;l++){if(o=s[l],c=o.instance,h=o.currentTarget,o=o.listener,c!==a&&i.isPropagationStopped())break e;ec(i,o,h),a=c}}}if(Ws)throw e=za,Ws=!1,za=null,e}function oe(e,t){var r=t[Ua];r===void 0&&(r=t[Ua]=new Set);var s=e+"__bubble";r.has(s)||(du(t,e,2,!1),r.add(s))}function Zi(e,t,r){var s=0;t&&(s|=4),du(r,e,s,t)}var Ns="_reactListening"+Math.random().toString(36).slice(2);function Hr(e){if(!e[Ns]){e[Ns]=!0,xd.forEach(function(r){r!=="selectionchange"&&(Lf.has(r)||Zi(r,!1,e),Zi(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ns]||(t[Ns]=!0,Zi("selectionchange",!1,t))}}function du(e,t,r,s){switch(Wd(t)){case 1:var i=Hp;break;case 4:i=qp;break;default:i=Vl}r=i.bind(null,t,r,e),i=void 0,!Ia||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),s?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function ea(e,t,r,s,i){var a=s;if(!(t&1)&&!(t&2)&&s!==null)e:for(;;){if(s===null)return;var l=s.tag;if(l===3||l===4){var o=s.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(l===4)for(l=s.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;l=l.return}for(;o!==null;){if(l=ct(o),l===null)return;if(c=l.tag,c===5||c===6){s=a=l;continue e}o=o.parentNode}}s=s.return}Rd(function(){var h=a,d=zl(r),p=[];e:{var m=ou.get(e);if(m!==void 0){var S=$l,w=e;switch(e){case"keypress":if(zs(r)===0)break e;case"keydown":case"keyup":S=af;break;case"focusin":w="focus",S=Wi;break;case"focusout":w="blur",S=Wi;break;case"beforeblur":case"afterblur":S=Wi;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Bo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=Wp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=cf;break;case su:case iu:case au:S=Yp;break;case lu:S=uf;break;case"scroll":S=Up;break;case"wheel":S=pf;break;case"copy":case"cut":case"paste":S=Jp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=qo}var j=(t&4)!==0,y=!j&&e==="scroll",f=j?m!==null?m+"Capture":null:m;j=[];for(var g=h,x;g!==null;){x=g;var P=x.stateNode;if(x.tag===5&&P!==null&&(x=P,f!==null&&(P=Ar(g,f),P!=null&&j.push(qr(g,P,x)))),y)break;g=g.return}0<j.length&&(m=new S(m,w,null,r,d),p.push({event:m,listeners:j}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",m&&r!==Pa&&(w=r.relatedTarget||r.fromElement)&&(ct(w)||w[En]))break e;if((S||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,S?(w=r.relatedTarget||r.toElement,S=h,w=w?ct(w):null,w!==null&&(y=kt(w),w!==y||w.tag!==5&&w.tag!==6)&&(w=null)):(S=null,w=h),S!==w)){if(j=Bo,P="onMouseLeave",f="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(j=qo,P="onPointerLeave",f="onPointerEnter",g="pointer"),y=S==null?m:Rt(S),x=w==null?m:Rt(w),m=new j(P,g+"leave",S,r,d),m.target=y,m.relatedTarget=x,P=null,ct(d)===h&&(j=new j(f,g+"enter",w,r,d),j.target=x,j.relatedTarget=y,P=j),y=P,S&&w)n:{for(j=S,f=w,g=0,x=j;x;x=Ct(x))g++;for(x=0,P=f;P;P=Ct(P))x++;for(;0<g-x;)j=Ct(j),g--;for(;0<x-g;)f=Ct(f),x--;for(;g--;){if(j===f||f!==null&&j===f.alternate)break n;j=Ct(j),f=Ct(f)}j=null}else j=null;S!==null&&nc(p,m,S,j,!1),w!==null&&y!==null&&nc(p,y,w,j,!0)}}e:{if(m=h?Rt(h):window,S=m.nodeName&&m.nodeName.toLowerCase(),S==="select"||S==="input"&&m.type==="file")var N=jf;else if(Wo(m))if(Zd)N=wf;else{N=kf;var A=Nf}else(S=m.nodeName)&&S.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(N=bf);if(N&&(N=N(e,h))){Jd(p,N,r,d);break e}A&&A(e,m,h),e==="focusout"&&(A=m._wrapperState)&&A.controlled&&m.type==="number"&&Ta(m,"number",m.value)}switch(A=h?Rt(h):window,e){case"focusin":(Wo(A)||A.contentEditable==="true")&&(Ot=A,Va=h,Tr=null);break;case"focusout":Tr=Va=Ot=null;break;case"mousedown":Da=!0;break;case"contextmenu":case"mouseup":case"dragend":Da=!1,Jo(p,r,d);break;case"selectionchange":if(Tf)break;case"keydown":case"keyup":Jo(p,r,d)}var E;if(Hl)e:{switch(e){case"compositionstart":var V="onCompositionStart";break e;case"compositionend":V="onCompositionEnd";break e;case"compositionupdate":V="onCompositionUpdate";break e}V=void 0}else Lt?Yd(e,r)&&(V="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(V="onCompositionStart");V&&(Qd&&r.locale!=="ko"&&(Lt||V!=="onCompositionStart"?V==="onCompositionEnd"&&Lt&&(E=Gd()):(Vn=d,Dl="value"in Vn?Vn.value:Vn.textContent,Lt=!0)),A=Js(h,V),0<A.length&&(V=new Ho(V,e,null,r,d),p.push({event:V,listeners:A}),E?V.data=E:(E=Xd(r),E!==null&&(V.data=E)))),(E=mf?gf(e,r):xf(e,r))&&(h=Js(h,"onBeforeInput"),0<h.length&&(d=new Ho("onBeforeInput","beforeinput",null,r,d),p.push({event:d,listeners:h}),d.data=E))}cu(p,t)})}function qr(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Js(e,t){for(var r=t+"Capture",s=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Ar(e,r),a!=null&&s.unshift(qr(e,a,i)),a=Ar(e,t),a!=null&&s.push(qr(e,a,i))),e=e.return}return s}function Ct(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function nc(e,t,r,s,i){for(var a=t._reactName,l=[];r!==null&&r!==s;){var o=r,c=o.alternate,h=o.stateNode;if(c!==null&&c===s)break;o.tag===5&&h!==null&&(o=h,i?(c=Ar(r,a),c!=null&&l.unshift(qr(r,c,o))):i||(c=Ar(r,a),c!=null&&l.push(qr(r,c,o)))),r=r.return}l.length!==0&&e.push({event:t,listeners:l})}var Of=/\r\n?/g,Pf=/\u0000|\uFFFD/g;function tc(e){return(typeof e=="string"?e:""+e).replace(Of,`
`).replace(Pf,"")}function ks(e,t,r){if(t=tc(t),tc(e)!==t&&r)throw Error(U(425))}function Zs(){}var $a=null,Ba=null;function Ha(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var qa=typeof setTimeout=="function"?setTimeout:void 0,Rf=typeof clearTimeout=="function"?clearTimeout:void 0,rc=typeof Promise=="function"?Promise:void 0,If=typeof queueMicrotask=="function"?queueMicrotask:typeof rc<"u"?function(e){return rc.resolve(null).then(e).catch(zf)}:qa;function zf(e){setTimeout(function(){throw e})}function na(e,t){var r=t,s=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(s===0){e.removeChild(i),Dr(t);return}s--}else r!=="$"&&r!=="$?"&&r!=="$!"||s++;r=i}while(r);Dr(t)}function Kn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function sc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var lr=Math.random().toString(36).slice(2),yn="__reactFiber$"+lr,Ur="__reactProps$"+lr,En="__reactContainer$"+lr,Ua="__reactEvents$"+lr,Mf="__reactListeners$"+lr,Af="__reactHandles$"+lr;function ct(e){var t=e[yn];if(t)return t;for(var r=e.parentNode;r;){if(t=r[En]||r[yn]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=sc(e);e!==null;){if(r=e[yn])return r;e=sc(e)}return t}e=r,r=e.parentNode}return null}function is(e){return e=e[yn]||e[En],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Rt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(U(33))}function Ci(e){return e[Ur]||null}var Ka=[],It=-1;function tt(e){return{current:e}}function ce(e){0>It||(e.current=Ka[It],Ka[It]=null,It--)}function le(e,t){It++,Ka[It]=e.current,e.current=t}var et={},Me=tt(et),Ke=tt(!1),gt=et;function Zt(e,t){var r=e.type.contextTypes;if(!r)return et;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in r)i[a]=t[a];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function We(e){return e=e.childContextTypes,e!=null}function ei(){ce(Ke),ce(Me)}function ic(e,t,r){if(Me.current!==et)throw Error(U(168));le(Me,t),le(Ke,r)}function uu(e,t,r){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return r;s=s.getChildContext();for(var i in s)if(!(i in t))throw Error(U(108,jp(e)||"Unknown",i));return pe({},r,s)}function ni(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||et,gt=Me.current,le(Me,e),le(Ke,Ke.current),!0}function ac(e,t,r){var s=e.stateNode;if(!s)throw Error(U(169));r?(e=uu(e,t,gt),s.__reactInternalMemoizedMergedChildContext=e,ce(Ke),ce(Me),le(Me,e)):ce(Ke),le(Ke,r)}var bn=null,Ti=!1,ta=!1;function hu(e){bn===null?bn=[e]:bn.push(e)}function Ff(e){Ti=!0,hu(e)}function rt(){if(!ta&&bn!==null){ta=!0;var e=0,t=se;try{var r=bn;for(se=1;e<r.length;e++){var s=r[e];do s=s(!0);while(s!==null)}bn=null,Ti=!1}catch(i){throw bn!==null&&(bn=bn.slice(e+1)),Ad(Ml,rt),i}finally{se=t,ta=!1}}return null}var zt=[],Mt=0,ti=null,ri=0,rn=[],sn=0,xt=null,wn=1,Sn="";function lt(e,t){zt[Mt++]=ri,zt[Mt++]=ti,ti=e,ri=t}function pu(e,t,r){rn[sn++]=wn,rn[sn++]=Sn,rn[sn++]=xt,xt=e;var s=wn;e=Sn;var i=32-fn(s)-1;s&=~(1<<i),r+=1;var a=32-fn(t)+i;if(30<a){var l=i-i%5;a=(s&(1<<l)-1).toString(32),s>>=l,i-=l,wn=1<<32-fn(t)+i|r<<i|s,Sn=a+e}else wn=1<<a|r<<i|s,Sn=e}function Ul(e){e.return!==null&&(lt(e,1),pu(e,1,0))}function Kl(e){for(;e===ti;)ti=zt[--Mt],zt[Mt]=null,ri=zt[--Mt],zt[Mt]=null;for(;e===xt;)xt=rn[--sn],rn[sn]=null,Sn=rn[--sn],rn[sn]=null,wn=rn[--sn],rn[sn]=null}var Ze=null,Xe=null,de=!1,pn=null;function fu(e,t){var r=an(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function lc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ze=e,Xe=Kn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ze=e,Xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=xt!==null?{id:wn,overflow:Sn}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=an(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Ze=e,Xe=null,!0):!1;default:return!1}}function Wa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ga(e){if(de){var t=Xe;if(t){var r=t;if(!lc(e,t)){if(Wa(e))throw Error(U(418));t=Kn(r.nextSibling);var s=Ze;t&&lc(e,t)?fu(s,r):(e.flags=e.flags&-4097|2,de=!1,Ze=e)}}else{if(Wa(e))throw Error(U(418));e.flags=e.flags&-4097|2,de=!1,Ze=e}}}function oc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ze=e}function bs(e){if(e!==Ze)return!1;if(!de)return oc(e),de=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ha(e.type,e.memoizedProps)),t&&(t=Xe)){if(Wa(e))throw mu(),Error(U(418));for(;t;)fu(e,t),t=Kn(t.nextSibling)}if(oc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(U(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Xe=Kn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Xe=null}}else Xe=Ze?Kn(e.stateNode.nextSibling):null;return!0}function mu(){for(var e=Xe;e;)e=Kn(e.nextSibling)}function er(){Xe=Ze=null,de=!1}function Wl(e){pn===null?pn=[e]:pn.push(e)}var Vf=Pn.ReactCurrentBatchConfig;function fr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(U(309));var s=r.stateNode}if(!s)throw Error(U(147,e));var i=s,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(l){var o=i.refs;l===null?delete o[a]:o[a]=l},t._stringRef=a,t)}if(typeof e!="string")throw Error(U(284));if(!r._owner)throw Error(U(290,e))}return e}function ws(e,t){throw e=Object.prototype.toString.call(t),Error(U(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function cc(e){var t=e._init;return t(e._payload)}function gu(e){function t(f,g){if(e){var x=f.deletions;x===null?(f.deletions=[g],f.flags|=16):x.push(g)}}function r(f,g){if(!e)return null;for(;g!==null;)t(f,g),g=g.sibling;return null}function s(f,g){for(f=new Map;g!==null;)g.key!==null?f.set(g.key,g):f.set(g.index,g),g=g.sibling;return f}function i(f,g){return f=Yn(f,g),f.index=0,f.sibling=null,f}function a(f,g,x){return f.index=x,e?(x=f.alternate,x!==null?(x=x.index,x<g?(f.flags|=2,g):x):(f.flags|=2,g)):(f.flags|=1048576,g)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function o(f,g,x,P){return g===null||g.tag!==6?(g=ca(x,f.mode,P),g.return=f,g):(g=i(g,x),g.return=f,g)}function c(f,g,x,P){var N=x.type;return N===_t?d(f,g,x.props.children,P,x.key):g!==null&&(g.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===zn&&cc(N)===g.type)?(P=i(g,x.props),P.ref=fr(f,g,x),P.return=f,P):(P=Bs(x.type,x.key,x.props,null,f.mode,P),P.ref=fr(f,g,x),P.return=f,P)}function h(f,g,x,P){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=da(x,f.mode,P),g.return=f,g):(g=i(g,x.children||[]),g.return=f,g)}function d(f,g,x,P,N){return g===null||g.tag!==7?(g=mt(x,f.mode,P,N),g.return=f,g):(g=i(g,x),g.return=f,g)}function p(f,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=ca(""+g,f.mode,x),g.return=f,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ps:return x=Bs(g.type,g.key,g.props,null,f.mode,x),x.ref=fr(f,null,g),x.return=f,x;case Et:return g=da(g,f.mode,x),g.return=f,g;case zn:var P=g._init;return p(f,P(g._payload),x)}if(vr(g)||cr(g))return g=mt(g,f.mode,x,null),g.return=f,g;ws(f,g)}return null}function m(f,g,x,P){var N=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return N!==null?null:o(f,g,""+x,P);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ps:return x.key===N?c(f,g,x,P):null;case Et:return x.key===N?h(f,g,x,P):null;case zn:return N=x._init,m(f,g,N(x._payload),P)}if(vr(x)||cr(x))return N!==null?null:d(f,g,x,P,null);ws(f,x)}return null}function S(f,g,x,P,N){if(typeof P=="string"&&P!==""||typeof P=="number")return f=f.get(x)||null,o(g,f,""+P,N);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case ps:return f=f.get(P.key===null?x:P.key)||null,c(g,f,P,N);case Et:return f=f.get(P.key===null?x:P.key)||null,h(g,f,P,N);case zn:var A=P._init;return S(f,g,x,A(P._payload),N)}if(vr(P)||cr(P))return f=f.get(x)||null,d(g,f,P,N,null);ws(g,P)}return null}function w(f,g,x,P){for(var N=null,A=null,E=g,V=g=0,F=null;E!==null&&V<x.length;V++){E.index>V?(F=E,E=null):F=E.sibling;var I=m(f,E,x[V],P);if(I===null){E===null&&(E=F);break}e&&E&&I.alternate===null&&t(f,E),g=a(I,g,V),A===null?N=I:A.sibling=I,A=I,E=F}if(V===x.length)return r(f,E),de&&lt(f,V),N;if(E===null){for(;V<x.length;V++)E=p(f,x[V],P),E!==null&&(g=a(E,g,V),A===null?N=E:A.sibling=E,A=E);return de&&lt(f,V),N}for(E=s(f,E);V<x.length;V++)F=S(E,f,V,x[V],P),F!==null&&(e&&F.alternate!==null&&E.delete(F.key===null?V:F.key),g=a(F,g,V),A===null?N=F:A.sibling=F,A=F);return e&&E.forEach(function(H){return t(f,H)}),de&&lt(f,V),N}function j(f,g,x,P){var N=cr(x);if(typeof N!="function")throw Error(U(150));if(x=N.call(x),x==null)throw Error(U(151));for(var A=N=null,E=g,V=g=0,F=null,I=x.next();E!==null&&!I.done;V++,I=x.next()){E.index>V?(F=E,E=null):F=E.sibling;var H=m(f,E,I.value,P);if(H===null){E===null&&(E=F);break}e&&E&&H.alternate===null&&t(f,E),g=a(H,g,V),A===null?N=H:A.sibling=H,A=H,E=F}if(I.done)return r(f,E),de&&lt(f,V),N;if(E===null){for(;!I.done;V++,I=x.next())I=p(f,I.value,P),I!==null&&(g=a(I,g,V),A===null?N=I:A.sibling=I,A=I);return de&&lt(f,V),N}for(E=s(f,E);!I.done;V++,I=x.next())I=S(E,f,V,I.value,P),I!==null&&(e&&I.alternate!==null&&E.delete(I.key===null?V:I.key),g=a(I,g,V),A===null?N=I:A.sibling=I,A=I);return e&&E.forEach(function(K){return t(f,K)}),de&&lt(f,V),N}function y(f,g,x,P){if(typeof x=="object"&&x!==null&&x.type===_t&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ps:e:{for(var N=x.key,A=g;A!==null;){if(A.key===N){if(N=x.type,N===_t){if(A.tag===7){r(f,A.sibling),g=i(A,x.props.children),g.return=f,f=g;break e}}else if(A.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===zn&&cc(N)===A.type){r(f,A.sibling),g=i(A,x.props),g.ref=fr(f,A,x),g.return=f,f=g;break e}r(f,A);break}else t(f,A);A=A.sibling}x.type===_t?(g=mt(x.props.children,f.mode,P,x.key),g.return=f,f=g):(P=Bs(x.type,x.key,x.props,null,f.mode,P),P.ref=fr(f,g,x),P.return=f,f=P)}return l(f);case Et:e:{for(A=x.key;g!==null;){if(g.key===A)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){r(f,g.sibling),g=i(g,x.children||[]),g.return=f,f=g;break e}else{r(f,g);break}else t(f,g);g=g.sibling}g=da(x,f.mode,P),g.return=f,f=g}return l(f);case zn:return A=x._init,y(f,g,A(x._payload),P)}if(vr(x))return w(f,g,x,P);if(cr(x))return j(f,g,x,P);ws(f,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(r(f,g.sibling),g=i(g,x),g.return=f,f=g):(r(f,g),g=ca(x,f.mode,P),g.return=f,f=g),l(f)):r(f,g)}return y}var nr=gu(!0),xu=gu(!1),si=tt(null),ii=null,At=null,Gl=null;function Ql(){Gl=At=ii=null}function Yl(e){var t=si.current;ce(si),e._currentValue=t}function Qa(e,t,r){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===r)break;e=e.return}}function Qt(e,t){ii=e,Gl=At=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ue=!0),e.firstContext=null)}function on(e){var t=e._currentValue;if(Gl!==e)if(e={context:e,memoizedValue:t,next:null},At===null){if(ii===null)throw Error(U(308));At=e,ii.dependencies={lanes:0,firstContext:e}}else At=At.next=e;return t}var dt=null;function Xl(e){dt===null?dt=[e]:dt.push(e)}function vu(e,t,r,s){var i=t.interleaved;return i===null?(r.next=r,Xl(t)):(r.next=i.next,i.next=r),t.interleaved=r,_n(e,s)}function _n(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Mn=!1;function Jl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Cn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Wn(e,t,r){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,ne&2){var i=s.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),s.pending=t,_n(e,r)}return i=s.interleaved,i===null?(t.next=t,Xl(s)):(t.next=i.next,i.next=t),s.interleaved=t,_n(e,r)}function Ms(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,Al(e,r)}}function dc(e,t){var r=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,r===s)){var i=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var l={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?i=a=l:a=a.next=l,r=r.next}while(r!==null);a===null?i=a=t:a=a.next=t}else i=a=t;r={baseState:s.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:s.shared,effects:s.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function ai(e,t,r,s){var i=e.updateQueue;Mn=!1;var a=i.firstBaseUpdate,l=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var c=o,h=c.next;c.next=null,l===null?a=h:l.next=h,l=c;var d=e.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==l&&(o===null?d.firstBaseUpdate=h:o.next=h,d.lastBaseUpdate=c))}if(a!==null){var p=i.baseState;l=0,d=h=c=null,o=a;do{var m=o.lane,S=o.eventTime;if((s&m)===m){d!==null&&(d=d.next={eventTime:S,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var w=e,j=o;switch(m=t,S=r,j.tag){case 1:if(w=j.payload,typeof w=="function"){p=w.call(S,p,m);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=j.payload,m=typeof w=="function"?w.call(S,p,m):w,m==null)break e;p=pe({},p,m);break e;case 2:Mn=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[o]:m.push(o))}else S={eventTime:S,lane:m,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(h=d=S,c=p):d=d.next=S,l|=m;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;m=o,o=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(c=p),i.baseState=c,i.firstBaseUpdate=h,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);yt|=l,e.lanes=l,e.memoizedState=p}}function uc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],i=s.callback;if(i!==null){if(s.callback=null,s=r,typeof i!="function")throw Error(U(191,i));i.call(s)}}}var as={},Nn=tt(as),Kr=tt(as),Wr=tt(as);function ut(e){if(e===as)throw Error(U(174));return e}function Zl(e,t){switch(le(Wr,t),le(Kr,e),le(Nn,as),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:_a(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=_a(t,e)}ce(Nn),le(Nn,t)}function tr(){ce(Nn),ce(Kr),ce(Wr)}function ju(e){ut(Wr.current);var t=ut(Nn.current),r=_a(t,e.type);t!==r&&(le(Kr,e),le(Nn,r))}function eo(e){Kr.current===e&&(ce(Nn),ce(Kr))}var ue=tt(0);function li(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ra=[];function no(){for(var e=0;e<ra.length;e++)ra[e]._workInProgressVersionPrimary=null;ra.length=0}var As=Pn.ReactCurrentDispatcher,sa=Pn.ReactCurrentBatchConfig,vt=0,he=null,ke=null,we=null,oi=!1,Er=!1,Gr=0,Df=0;function Pe(){throw Error(U(321))}function to(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!gn(e[r],t[r]))return!1;return!0}function ro(e,t,r,s,i,a){if(vt=a,he=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,As.current=e===null||e.memoizedState===null?qf:Uf,e=r(s,i),Er){a=0;do{if(Er=!1,Gr=0,25<=a)throw Error(U(301));a+=1,we=ke=null,t.updateQueue=null,As.current=Kf,e=r(s,i)}while(Er)}if(As.current=ci,t=ke!==null&&ke.next!==null,vt=0,we=ke=he=null,oi=!1,t)throw Error(U(300));return e}function so(){var e=Gr!==0;return Gr=0,e}function vn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?he.memoizedState=we=e:we=we.next=e,we}function cn(){if(ke===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var t=we===null?he.memoizedState:we.next;if(t!==null)we=t,ke=e;else{if(e===null)throw Error(U(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},we===null?he.memoizedState=we=e:we=we.next=e}return we}function Qr(e,t){return typeof t=="function"?t(e):t}function ia(e){var t=cn(),r=t.queue;if(r===null)throw Error(U(311));r.lastRenderedReducer=e;var s=ke,i=s.baseQueue,a=r.pending;if(a!==null){if(i!==null){var l=i.next;i.next=a.next,a.next=l}s.baseQueue=i=a,r.pending=null}if(i!==null){a=i.next,s=s.baseState;var o=l=null,c=null,h=a;do{var d=h.lane;if((vt&d)===d)c!==null&&(c=c.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),s=h.hasEagerState?h.eagerState:e(s,h.action);else{var p={lane:d,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};c===null?(o=c=p,l=s):c=c.next=p,he.lanes|=d,yt|=d}h=h.next}while(h!==null&&h!==a);c===null?l=s:c.next=o,gn(s,t.memoizedState)||(Ue=!0),t.memoizedState=s,t.baseState=l,t.baseQueue=c,r.lastRenderedState=s}if(e=r.interleaved,e!==null){i=e;do a=i.lane,he.lanes|=a,yt|=a,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function aa(e){var t=cn(),r=t.queue;if(r===null)throw Error(U(311));r.lastRenderedReducer=e;var s=r.dispatch,i=r.pending,a=t.memoizedState;if(i!==null){r.pending=null;var l=i=i.next;do a=e(a,l.action),l=l.next;while(l!==i);gn(a,t.memoizedState)||(Ue=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),r.lastRenderedState=a}return[a,s]}function Nu(){}function ku(e,t){var r=he,s=cn(),i=t(),a=!gn(s.memoizedState,i);if(a&&(s.memoizedState=i,Ue=!0),s=s.queue,io(Su.bind(null,r,s,e),[e]),s.getSnapshot!==t||a||we!==null&&we.memoizedState.tag&1){if(r.flags|=2048,Yr(9,wu.bind(null,r,s,i,t),void 0,null),Se===null)throw Error(U(349));vt&30||bu(r,t,i)}return i}function bu(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function wu(e,t,r,s){t.value=r,t.getSnapshot=s,Cu(t)&&Tu(e)}function Su(e,t,r){return r(function(){Cu(t)&&Tu(e)})}function Cu(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!gn(e,r)}catch{return!0}}function Tu(e){var t=_n(e,1);t!==null&&mn(t,e,1,-1)}function hc(e){var t=vn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qr,lastRenderedState:e},t.queue=e,e=e.dispatch=Hf.bind(null,he,e),[t.memoizedState,e]}function Yr(e,t,r,s){return e={tag:e,create:t,destroy:r,deps:s,next:null},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(s=r.next,r.next=e,e.next=s,t.lastEffect=e)),e}function Eu(){return cn().memoizedState}function Fs(e,t,r,s){var i=vn();he.flags|=e,i.memoizedState=Yr(1|t,r,void 0,s===void 0?null:s)}function Ei(e,t,r,s){var i=cn();s=s===void 0?null:s;var a=void 0;if(ke!==null){var l=ke.memoizedState;if(a=l.destroy,s!==null&&to(s,l.deps)){i.memoizedState=Yr(t,r,a,s);return}}he.flags|=e,i.memoizedState=Yr(1|t,r,a,s)}function pc(e,t){return Fs(8390656,8,e,t)}function io(e,t){return Ei(2048,8,e,t)}function _u(e,t){return Ei(4,2,e,t)}function Lu(e,t){return Ei(4,4,e,t)}function Ou(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Pu(e,t,r){return r=r!=null?r.concat([e]):null,Ei(4,4,Ou.bind(null,t,e),r)}function ao(){}function Ru(e,t){var r=cn();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&to(t,s[1])?s[0]:(r.memoizedState=[e,t],e)}function Iu(e,t){var r=cn();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&to(t,s[1])?s[0]:(e=e(),r.memoizedState=[e,t],e)}function zu(e,t,r){return vt&21?(gn(r,t)||(r=Dd(),he.lanes|=r,yt|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ue=!0),e.memoizedState=r)}function $f(e,t){var r=se;se=r!==0&&4>r?r:4,e(!0);var s=sa.transition;sa.transition={};try{e(!1),t()}finally{se=r,sa.transition=s}}function Mu(){return cn().memoizedState}function Bf(e,t,r){var s=Qn(e);if(r={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null},Au(e))Fu(t,r);else if(r=vu(e,t,r,s),r!==null){var i=Ve();mn(r,e,s,i),Vu(r,t,s)}}function Hf(e,t,r){var s=Qn(e),i={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null};if(Au(e))Fu(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var l=t.lastRenderedState,o=a(l,r);if(i.hasEagerState=!0,i.eagerState=o,gn(o,l)){var c=t.interleaved;c===null?(i.next=i,Xl(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}r=vu(e,t,i,s),r!==null&&(i=Ve(),mn(r,e,s,i),Vu(r,t,s))}}function Au(e){var t=e.alternate;return e===he||t!==null&&t===he}function Fu(e,t){Er=oi=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Vu(e,t,r){if(r&4194240){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,Al(e,r)}}var ci={readContext:on,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useInsertionEffect:Pe,useLayoutEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useMutableSource:Pe,useSyncExternalStore:Pe,useId:Pe,unstable_isNewReconciler:!1},qf={readContext:on,useCallback:function(e,t){return vn().memoizedState=[e,t===void 0?null:t],e},useContext:on,useEffect:pc,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Fs(4194308,4,Ou.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Fs(4194308,4,e,t)},useInsertionEffect:function(e,t){return Fs(4,2,e,t)},useMemo:function(e,t){var r=vn();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var s=vn();return t=r!==void 0?r(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=Bf.bind(null,he,e),[s.memoizedState,e]},useRef:function(e){var t=vn();return e={current:e},t.memoizedState=e},useState:hc,useDebugValue:ao,useDeferredValue:function(e){return vn().memoizedState=e},useTransition:function(){var e=hc(!1),t=e[0];return e=$f.bind(null,e[1]),vn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var s=he,i=vn();if(de){if(r===void 0)throw Error(U(407));r=r()}else{if(r=t(),Se===null)throw Error(U(349));vt&30||bu(s,t,r)}i.memoizedState=r;var a={value:r,getSnapshot:t};return i.queue=a,pc(Su.bind(null,s,a,e),[e]),s.flags|=2048,Yr(9,wu.bind(null,s,a,r,t),void 0,null),r},useId:function(){var e=vn(),t=Se.identifierPrefix;if(de){var r=Sn,s=wn;r=(s&~(1<<32-fn(s)-1)).toString(32)+r,t=":"+t+"R"+r,r=Gr++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Df++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Uf={readContext:on,useCallback:Ru,useContext:on,useEffect:io,useImperativeHandle:Pu,useInsertionEffect:_u,useLayoutEffect:Lu,useMemo:Iu,useReducer:ia,useRef:Eu,useState:function(){return ia(Qr)},useDebugValue:ao,useDeferredValue:function(e){var t=cn();return zu(t,ke.memoizedState,e)},useTransition:function(){var e=ia(Qr)[0],t=cn().memoizedState;return[e,t]},useMutableSource:Nu,useSyncExternalStore:ku,useId:Mu,unstable_isNewReconciler:!1},Kf={readContext:on,useCallback:Ru,useContext:on,useEffect:io,useImperativeHandle:Pu,useInsertionEffect:_u,useLayoutEffect:Lu,useMemo:Iu,useReducer:aa,useRef:Eu,useState:function(){return aa(Qr)},useDebugValue:ao,useDeferredValue:function(e){var t=cn();return ke===null?t.memoizedState=e:zu(t,ke.memoizedState,e)},useTransition:function(){var e=aa(Qr)[0],t=cn().memoizedState;return[e,t]},useMutableSource:Nu,useSyncExternalStore:ku,useId:Mu,unstable_isNewReconciler:!1};function un(e,t){if(e&&e.defaultProps){t=pe({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Ya(e,t,r,s){t=e.memoizedState,r=r(s,t),r=r==null?t:pe({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var _i={isMounted:function(e){return(e=e._reactInternals)?kt(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var s=Ve(),i=Qn(e),a=Cn(s,i);a.payload=t,r!=null&&(a.callback=r),t=Wn(e,a,i),t!==null&&(mn(t,e,i,s),Ms(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var s=Ve(),i=Qn(e),a=Cn(s,i);a.tag=1,a.payload=t,r!=null&&(a.callback=r),t=Wn(e,a,i),t!==null&&(mn(t,e,i,s),Ms(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Ve(),s=Qn(e),i=Cn(r,s);i.tag=2,t!=null&&(i.callback=t),t=Wn(e,i,s),t!==null&&(mn(t,e,s,r),Ms(t,e,s))}};function fc(e,t,r,s,i,a,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,a,l):t.prototype&&t.prototype.isPureReactComponent?!Br(r,s)||!Br(i,a):!0}function Du(e,t,r){var s=!1,i=et,a=t.contextType;return typeof a=="object"&&a!==null?a=on(a):(i=We(t)?gt:Me.current,s=t.contextTypes,a=(s=s!=null)?Zt(e,i):et),t=new t(r,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=_i,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function mc(e,t,r,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,s),t.state!==e&&_i.enqueueReplaceState(t,t.state,null)}function Xa(e,t,r,s){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},Jl(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=on(a):(a=We(t)?gt:Me.current,i.context=Zt(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Ya(e,t,a,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&_i.enqueueReplaceState(i,i.state,null),ai(e,r,i,s),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function rr(e,t){try{var r="",s=t;do r+=yp(s),s=s.return;while(s);var i=r}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function la(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Ja(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Wf=typeof WeakMap=="function"?WeakMap:Map;function $u(e,t,r){r=Cn(-1,r),r.tag=3,r.payload={element:null};var s=t.value;return r.callback=function(){ui||(ui=!0,ol=s),Ja(e,t)},r}function Bu(e,t,r){r=Cn(-1,r),r.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var i=t.value;r.payload=function(){return s(i)},r.callback=function(){Ja(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){Ja(e,t),typeof s!="function"&&(Gn===null?Gn=new Set([this]):Gn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),r}function gc(e,t,r){var s=e.pingCache;if(s===null){s=e.pingCache=new Wf;var i=new Set;s.set(t,i)}else i=s.get(t),i===void 0&&(i=new Set,s.set(t,i));i.has(r)||(i.add(r),e=lm.bind(null,e,t,r),t.then(e,e))}function xc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function vc(e,t,r,s,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Cn(-1,1),t.tag=2,Wn(r,t,1))),r.lanes|=1),e)}var Gf=Pn.ReactCurrentOwner,Ue=!1;function Fe(e,t,r,s){t.child=e===null?xu(t,null,r,s):nr(t,e.child,r,s)}function yc(e,t,r,s,i){r=r.render;var a=t.ref;return Qt(t,i),s=ro(e,t,r,s,a,i),r=so(),e!==null&&!Ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ln(e,t,i)):(de&&r&&Ul(t),t.flags|=1,Fe(e,t,s,i),t.child)}function jc(e,t,r,s,i){if(e===null){var a=r.type;return typeof a=="function"&&!mo(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=a,Hu(e,t,a,s,i)):(e=Bs(r.type,null,s,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var l=a.memoizedProps;if(r=r.compare,r=r!==null?r:Br,r(l,s)&&e.ref===t.ref)return Ln(e,t,i)}return t.flags|=1,e=Yn(a,s),e.ref=t.ref,e.return=t,t.child=e}function Hu(e,t,r,s,i){if(e!==null){var a=e.memoizedProps;if(Br(a,s)&&e.ref===t.ref)if(Ue=!1,t.pendingProps=s=a,(e.lanes&i)!==0)e.flags&131072&&(Ue=!0);else return t.lanes=e.lanes,Ln(e,t,i)}return Za(e,t,r,s,i)}function qu(e,t,r){var s=t.pendingProps,i=s.children,a=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},le(Vt,Qe),Qe|=r;else{if(!(r&1073741824))return e=a!==null?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,le(Vt,Qe),Qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=a!==null?a.baseLanes:r,le(Vt,Qe),Qe|=s}else a!==null?(s=a.baseLanes|r,t.memoizedState=null):s=r,le(Vt,Qe),Qe|=s;return Fe(e,t,i,r),t.child}function Uu(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Za(e,t,r,s,i){var a=We(r)?gt:Me.current;return a=Zt(t,a),Qt(t,i),r=ro(e,t,r,s,a,i),s=so(),e!==null&&!Ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ln(e,t,i)):(de&&s&&Ul(t),t.flags|=1,Fe(e,t,r,i),t.child)}function Nc(e,t,r,s,i){if(We(r)){var a=!0;ni(t)}else a=!1;if(Qt(t,i),t.stateNode===null)Vs(e,t),Du(t,r,s),Xa(t,r,s,i),s=!0;else if(e===null){var l=t.stateNode,o=t.memoizedProps;l.props=o;var c=l.context,h=r.contextType;typeof h=="object"&&h!==null?h=on(h):(h=We(r)?gt:Me.current,h=Zt(t,h));var d=r.getDerivedStateFromProps,p=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==s||c!==h)&&mc(t,l,s,h),Mn=!1;var m=t.memoizedState;l.state=m,ai(t,s,l,i),c=t.memoizedState,o!==s||m!==c||Ke.current||Mn?(typeof d=="function"&&(Ya(t,r,d,s),c=t.memoizedState),(o=Mn||fc(t,r,o,s,m,c,h))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=c),l.props=s,l.state=c,l.context=h,s=o):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{l=t.stateNode,yu(e,t),o=t.memoizedProps,h=t.type===t.elementType?o:un(t.type,o),l.props=h,p=t.pendingProps,m=l.context,c=r.contextType,typeof c=="object"&&c!==null?c=on(c):(c=We(r)?gt:Me.current,c=Zt(t,c));var S=r.getDerivedStateFromProps;(d=typeof S=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==p||m!==c)&&mc(t,l,s,c),Mn=!1,m=t.memoizedState,l.state=m,ai(t,s,l,i);var w=t.memoizedState;o!==p||m!==w||Ke.current||Mn?(typeof S=="function"&&(Ya(t,r,S,s),w=t.memoizedState),(h=Mn||fc(t,r,h,s,m,w,c)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(s,w,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(s,w,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=w),l.props=s,l.state=w,l.context=c,s=h):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),s=!1)}return el(e,t,r,s,a,i)}function el(e,t,r,s,i,a){Uu(e,t);var l=(t.flags&128)!==0;if(!s&&!l)return i&&ac(t,r,!1),Ln(e,t,a);s=t.stateNode,Gf.current=t;var o=l&&typeof r.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&l?(t.child=nr(t,e.child,null,a),t.child=nr(t,null,o,a)):Fe(e,t,o,a),t.memoizedState=s.state,i&&ac(t,r,!0),t.child}function Ku(e){var t=e.stateNode;t.pendingContext?ic(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ic(e,t.context,!1),Zl(e,t.containerInfo)}function kc(e,t,r,s,i){return er(),Wl(i),t.flags|=256,Fe(e,t,r,s),t.child}var nl={dehydrated:null,treeContext:null,retryLane:0};function tl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Wu(e,t,r){var s=t.pendingProps,i=ue.current,a=!1,l=(t.flags&128)!==0,o;if((o=l)||(o=e!==null&&e.memoizedState===null?!1:(i&2)!==0),o?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),le(ue,i&1),e===null)return Ga(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=s.children,e=s.fallback,a?(s=t.mode,a=t.child,l={mode:"hidden",children:l},!(s&1)&&a!==null?(a.childLanes=0,a.pendingProps=l):a=Pi(l,s,0,null),e=mt(e,s,r,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=tl(r),t.memoizedState=nl,e):lo(t,l));if(i=e.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return Qf(e,t,l,s,o,i,r);if(a){a=s.fallback,l=t.mode,i=e.child,o=i.sibling;var c={mode:"hidden",children:s.children};return!(l&1)&&t.child!==i?(s=t.child,s.childLanes=0,s.pendingProps=c,t.deletions=null):(s=Yn(i,c),s.subtreeFlags=i.subtreeFlags&14680064),o!==null?a=Yn(o,a):(a=mt(a,l,r,null),a.flags|=2),a.return=t,s.return=t,s.sibling=a,t.child=s,s=a,a=t.child,l=e.child.memoizedState,l=l===null?tl(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},a.memoizedState=l,a.childLanes=e.childLanes&~r,t.memoizedState=nl,s}return a=e.child,e=a.sibling,s=Yn(a,{mode:"visible",children:s.children}),!(t.mode&1)&&(s.lanes=r),s.return=t,s.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=s,t.memoizedState=null,s}function lo(e,t){return t=Pi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ss(e,t,r,s){return s!==null&&Wl(s),nr(t,e.child,null,r),e=lo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Qf(e,t,r,s,i,a,l){if(r)return t.flags&256?(t.flags&=-257,s=la(Error(U(422))),Ss(e,t,l,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=s.fallback,i=t.mode,s=Pi({mode:"visible",children:s.children},i,0,null),a=mt(a,i,l,null),a.flags|=2,s.return=t,a.return=t,s.sibling=a,t.child=s,t.mode&1&&nr(t,e.child,null,l),t.child.memoizedState=tl(l),t.memoizedState=nl,a);if(!(t.mode&1))return Ss(e,t,l,null);if(i.data==="$!"){if(s=i.nextSibling&&i.nextSibling.dataset,s)var o=s.dgst;return s=o,a=Error(U(419)),s=la(a,s,void 0),Ss(e,t,l,s)}if(o=(l&e.childLanes)!==0,Ue||o){if(s=Se,s!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(s.suspendedLanes|l)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,_n(e,i),mn(s,e,i,-1))}return fo(),s=la(Error(U(421))),Ss(e,t,l,s)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=om.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,Xe=Kn(i.nextSibling),Ze=t,de=!0,pn=null,e!==null&&(rn[sn++]=wn,rn[sn++]=Sn,rn[sn++]=xt,wn=e.id,Sn=e.overflow,xt=t),t=lo(t,s.children),t.flags|=4096,t)}function bc(e,t,r){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),Qa(e.return,t,r)}function oa(e,t,r,s,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:r,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=s,a.tail=r,a.tailMode=i)}function Gu(e,t,r){var s=t.pendingProps,i=s.revealOrder,a=s.tail;if(Fe(e,t,s.children,r),s=ue.current,s&2)s=s&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bc(e,r,t);else if(e.tag===19)bc(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(le(ue,s),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&li(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),oa(t,!1,i,r,a);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&li(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}oa(t,!0,r,null,a);break;case"together":oa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Vs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ln(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),yt|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(U(153));if(t.child!==null){for(e=t.child,r=Yn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Yn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Yf(e,t,r){switch(t.tag){case 3:Ku(t),er();break;case 5:ju(t);break;case 1:We(t.type)&&ni(t);break;case 4:Zl(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,i=t.memoizedProps.value;le(si,s._currentValue),s._currentValue=i;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(le(ue,ue.current&1),t.flags|=128,null):r&t.child.childLanes?Wu(e,t,r):(le(ue,ue.current&1),e=Ln(e,t,r),e!==null?e.sibling:null);le(ue,ue.current&1);break;case 19:if(s=(r&t.childLanes)!==0,e.flags&128){if(s)return Gu(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),le(ue,ue.current),s)break;return null;case 22:case 23:return t.lanes=0,qu(e,t,r)}return Ln(e,t,r)}var Qu,rl,Yu,Xu;Qu=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};rl=function(){};Yu=function(e,t,r,s){var i=e.memoizedProps;if(i!==s){e=t.stateNode,ut(Nn.current);var a=null;switch(r){case"input":i=Sa(e,i),s=Sa(e,s),a=[];break;case"select":i=pe({},i,{value:void 0}),s=pe({},s,{value:void 0}),a=[];break;case"textarea":i=Ea(e,i),s=Ea(e,s),a=[];break;default:typeof i.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Zs)}La(r,s);var l;r=null;for(h in i)if(!s.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var o=i[h];for(l in o)o.hasOwnProperty(l)&&(r||(r={}),r[l]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(zr.hasOwnProperty(h)?a||(a=[]):(a=a||[]).push(h,null));for(h in s){var c=s[h];if(o=i!=null?i[h]:void 0,s.hasOwnProperty(h)&&c!==o&&(c!=null||o!=null))if(h==="style")if(o){for(l in o)!o.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(r||(r={}),r[l]="");for(l in c)c.hasOwnProperty(l)&&o[l]!==c[l]&&(r||(r={}),r[l]=c[l])}else r||(a||(a=[]),a.push(h,r)),r=c;else h==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(a=a||[]).push(h,c)):h==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(h,""+c):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(zr.hasOwnProperty(h)?(c!=null&&h==="onScroll"&&oe("scroll",e),a||o===c||(a=[])):(a=a||[]).push(h,c))}r&&(a=a||[]).push("style",r);var h=a;(t.updateQueue=h)&&(t.flags|=4)}};Xu=function(e,t,r,s){r!==s&&(t.flags|=4)};function mr(e,t){if(!de)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Re(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,s=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,s|=i.subtreeFlags&14680064,s|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,s|=i.subtreeFlags,s|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=s,e.childLanes=r,t}function Xf(e,t,r){var s=t.pendingProps;switch(Kl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(t),null;case 1:return We(t.type)&&ei(),Re(t),null;case 3:return s=t.stateNode,tr(),ce(Ke),ce(Me),no(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(bs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,pn!==null&&(ul(pn),pn=null))),rl(e,t),Re(t),null;case 5:eo(t);var i=ut(Wr.current);if(r=t.type,e!==null&&t.stateNode!=null)Yu(e,t,r,s,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(U(166));return Re(t),null}if(e=ut(Nn.current),bs(t)){s=t.stateNode,r=t.type;var a=t.memoizedProps;switch(s[yn]=t,s[Ur]=a,e=(t.mode&1)!==0,r){case"dialog":oe("cancel",s),oe("close",s);break;case"iframe":case"object":case"embed":oe("load",s);break;case"video":case"audio":for(i=0;i<jr.length;i++)oe(jr[i],s);break;case"source":oe("error",s);break;case"img":case"image":case"link":oe("error",s),oe("load",s);break;case"details":oe("toggle",s);break;case"input":Po(s,a),oe("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!a.multiple},oe("invalid",s);break;case"textarea":Io(s,a),oe("invalid",s)}La(r,a),i=null;for(var l in a)if(a.hasOwnProperty(l)){var o=a[l];l==="children"?typeof o=="string"?s.textContent!==o&&(a.suppressHydrationWarning!==!0&&ks(s.textContent,o,e),i=["children",o]):typeof o=="number"&&s.textContent!==""+o&&(a.suppressHydrationWarning!==!0&&ks(s.textContent,o,e),i=["children",""+o]):zr.hasOwnProperty(l)&&o!=null&&l==="onScroll"&&oe("scroll",s)}switch(r){case"input":fs(s),Ro(s,a,!0);break;case"textarea":fs(s),zo(s);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(s.onclick=Zs)}s=i,t.updateQueue=s,s!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Sd(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=l.createElement(r,{is:s.is}):(e=l.createElement(r),r==="select"&&(l=e,s.multiple?l.multiple=!0:s.size&&(l.size=s.size))):e=l.createElementNS(e,r),e[yn]=t,e[Ur]=s,Qu(e,t,!1,!1),t.stateNode=e;e:{switch(l=Oa(r,s),r){case"dialog":oe("cancel",e),oe("close",e),i=s;break;case"iframe":case"object":case"embed":oe("load",e),i=s;break;case"video":case"audio":for(i=0;i<jr.length;i++)oe(jr[i],e);i=s;break;case"source":oe("error",e),i=s;break;case"img":case"image":case"link":oe("error",e),oe("load",e),i=s;break;case"details":oe("toggle",e),i=s;break;case"input":Po(e,s),i=Sa(e,s),oe("invalid",e);break;case"option":i=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},i=pe({},s,{value:void 0}),oe("invalid",e);break;case"textarea":Io(e,s),i=Ea(e,s),oe("invalid",e);break;default:i=s}La(r,i),o=i;for(a in o)if(o.hasOwnProperty(a)){var c=o[a];a==="style"?Ed(e,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Cd(e,c)):a==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&Mr(e,c):typeof c=="number"&&Mr(e,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(zr.hasOwnProperty(a)?c!=null&&a==="onScroll"&&oe("scroll",e):c!=null&&Ol(e,a,c,l))}switch(r){case"input":fs(e),Ro(e,s,!1);break;case"textarea":fs(e),zo(e);break;case"option":s.value!=null&&e.setAttribute("value",""+Zn(s.value));break;case"select":e.multiple=!!s.multiple,a=s.value,a!=null?Ut(e,!!s.multiple,a,!1):s.defaultValue!=null&&Ut(e,!!s.multiple,s.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Zs)}switch(r){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Re(t),null;case 6:if(e&&t.stateNode!=null)Xu(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(U(166));if(r=ut(Wr.current),ut(Nn.current),bs(t)){if(s=t.stateNode,r=t.memoizedProps,s[yn]=t,(a=s.nodeValue!==r)&&(e=Ze,e!==null))switch(e.tag){case 3:ks(s.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ks(s.nodeValue,r,(e.mode&1)!==0)}a&&(t.flags|=4)}else s=(r.nodeType===9?r:r.ownerDocument).createTextNode(s),s[yn]=t,t.stateNode=s}return Re(t),null;case 13:if(ce(ue),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(de&&Xe!==null&&t.mode&1&&!(t.flags&128))mu(),er(),t.flags|=98560,a=!1;else if(a=bs(t),s!==null&&s.dehydrated!==null){if(e===null){if(!a)throw Error(U(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(U(317));a[yn]=t}else er(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Re(t),a=!1}else pn!==null&&(ul(pn),pn=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,t.mode&1&&(e===null||ue.current&1?be===0&&(be=3):fo())),t.updateQueue!==null&&(t.flags|=4),Re(t),null);case 4:return tr(),rl(e,t),e===null&&Hr(t.stateNode.containerInfo),Re(t),null;case 10:return Yl(t.type._context),Re(t),null;case 17:return We(t.type)&&ei(),Re(t),null;case 19:if(ce(ue),a=t.memoizedState,a===null)return Re(t),null;if(s=(t.flags&128)!==0,l=a.rendering,l===null)if(s)mr(a,!1);else{if(be!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=li(e),l!==null){for(t.flags|=128,mr(a,!1),s=l.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=r,r=t.child;r!==null;)a=r,e=s,a.flags&=14680066,l=a.alternate,l===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return le(ue,ue.current&1|2),t.child}e=e.sibling}a.tail!==null&&ge()>sr&&(t.flags|=128,s=!0,mr(a,!1),t.lanes=4194304)}else{if(!s)if(e=li(l),e!==null){if(t.flags|=128,s=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),mr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!de)return Re(t),null}else 2*ge()-a.renderingStartTime>sr&&r!==1073741824&&(t.flags|=128,s=!0,mr(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(r=a.last,r!==null?r.sibling=l:t.child=l,a.last=l)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ge(),t.sibling=null,r=ue.current,le(ue,s?r&1|2:r&1),t):(Re(t),null);case 22:case 23:return po(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&t.mode&1?Qe&1073741824&&(Re(t),t.subtreeFlags&6&&(t.flags|=8192)):Re(t),null;case 24:return null;case 25:return null}throw Error(U(156,t.tag))}function Jf(e,t){switch(Kl(t),t.tag){case 1:return We(t.type)&&ei(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return tr(),ce(Ke),ce(Me),no(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return eo(t),null;case 13:if(ce(ue),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(U(340));er()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ce(ue),null;case 4:return tr(),null;case 10:return Yl(t.type._context),null;case 22:case 23:return po(),null;case 24:return null;default:return null}}var Cs=!1,ze=!1,Zf=typeof WeakSet=="function"?WeakSet:Set,Q=null;function Ft(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(s){me(e,t,s)}else r.current=null}function sl(e,t,r){try{r()}catch(s){me(e,t,s)}}var wc=!1;function em(e,t){if($a=Ys,e=tu(),ql(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var s=r.getSelection&&r.getSelection();if(s&&s.rangeCount!==0){r=s.anchorNode;var i=s.anchorOffset,a=s.focusNode;s=s.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var l=0,o=-1,c=-1,h=0,d=0,p=e,m=null;n:for(;;){for(var S;p!==r||i!==0&&p.nodeType!==3||(o=l+i),p!==a||s!==0&&p.nodeType!==3||(c=l+s),p.nodeType===3&&(l+=p.nodeValue.length),(S=p.firstChild)!==null;)m=p,p=S;for(;;){if(p===e)break n;if(m===r&&++h===i&&(o=l),m===a&&++d===s&&(c=l),(S=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=S}r=o===-1||c===-1?null:{start:o,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ba={focusedElem:e,selectionRange:r},Ys=!1,Q=t;Q!==null;)if(t=Q,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Q=e;else for(;Q!==null;){t=Q;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var j=w.memoizedProps,y=w.memoizedState,f=t.stateNode,g=f.getSnapshotBeforeUpdate(t.elementType===t.type?j:un(t.type,j),y);f.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(P){me(t,t.return,P)}if(e=t.sibling,e!==null){e.return=t.return,Q=e;break}Q=t.return}return w=wc,wc=!1,w}function _r(e,t,r){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var i=s=s.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&sl(t,r,a)}i=i.next}while(i!==s)}}function Li(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var s=r.create;r.destroy=s()}r=r.next}while(r!==t)}}function il(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Ju(e){var t=e.alternate;t!==null&&(e.alternate=null,Ju(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[yn],delete t[Ur],delete t[Ua],delete t[Mf],delete t[Af])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Zu(e){return e.tag===5||e.tag===3||e.tag===4}function Sc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Zu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function al(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Zs));else if(s!==4&&(e=e.child,e!==null))for(al(e,t,r),e=e.sibling;e!==null;)al(e,t,r),e=e.sibling}function ll(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(ll(e,t,r),e=e.sibling;e!==null;)ll(e,t,r),e=e.sibling}var Ee=null,hn=!1;function In(e,t,r){for(r=r.child;r!==null;)eh(e,t,r),r=r.sibling}function eh(e,t,r){if(jn&&typeof jn.onCommitFiberUnmount=="function")try{jn.onCommitFiberUnmount(ki,r)}catch{}switch(r.tag){case 5:ze||Ft(r,t);case 6:var s=Ee,i=hn;Ee=null,In(e,t,r),Ee=s,hn=i,Ee!==null&&(hn?(e=Ee,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Ee.removeChild(r.stateNode));break;case 18:Ee!==null&&(hn?(e=Ee,r=r.stateNode,e.nodeType===8?na(e.parentNode,r):e.nodeType===1&&na(e,r),Dr(e)):na(Ee,r.stateNode));break;case 4:s=Ee,i=hn,Ee=r.stateNode.containerInfo,hn=!0,In(e,t,r),Ee=s,hn=i;break;case 0:case 11:case 14:case 15:if(!ze&&(s=r.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){i=s=s.next;do{var a=i,l=a.destroy;a=a.tag,l!==void 0&&(a&2||a&4)&&sl(r,t,l),i=i.next}while(i!==s)}In(e,t,r);break;case 1:if(!ze&&(Ft(r,t),s=r.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=r.memoizedProps,s.state=r.memoizedState,s.componentWillUnmount()}catch(o){me(r,t,o)}In(e,t,r);break;case 21:In(e,t,r);break;case 22:r.mode&1?(ze=(s=ze)||r.memoizedState!==null,In(e,t,r),ze=s):In(e,t,r);break;default:In(e,t,r)}}function Cc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Zf),t.forEach(function(s){var i=cm.bind(null,e,s);r.has(s)||(r.add(s),s.then(i,i))})}}function dn(e,t){var r=t.deletions;if(r!==null)for(var s=0;s<r.length;s++){var i=r[s];try{var a=e,l=t,o=l;e:for(;o!==null;){switch(o.tag){case 5:Ee=o.stateNode,hn=!1;break e;case 3:Ee=o.stateNode.containerInfo,hn=!0;break e;case 4:Ee=o.stateNode.containerInfo,hn=!0;break e}o=o.return}if(Ee===null)throw Error(U(160));eh(a,l,i),Ee=null,hn=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(h){me(i,t,h)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)nh(t,e),t=t.sibling}function nh(e,t){var r=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(dn(t,e),xn(e),s&4){try{_r(3,e,e.return),Li(3,e)}catch(j){me(e,e.return,j)}try{_r(5,e,e.return)}catch(j){me(e,e.return,j)}}break;case 1:dn(t,e),xn(e),s&512&&r!==null&&Ft(r,r.return);break;case 5:if(dn(t,e),xn(e),s&512&&r!==null&&Ft(r,r.return),e.flags&32){var i=e.stateNode;try{Mr(i,"")}catch(j){me(e,e.return,j)}}if(s&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,l=r!==null?r.memoizedProps:a,o=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{o==="input"&&a.type==="radio"&&a.name!=null&&bd(i,a),Oa(o,l);var h=Oa(o,a);for(l=0;l<c.length;l+=2){var d=c[l],p=c[l+1];d==="style"?Ed(i,p):d==="dangerouslySetInnerHTML"?Cd(i,p):d==="children"?Mr(i,p):Ol(i,d,p,h)}switch(o){case"input":Ca(i,a);break;case"textarea":wd(i,a);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var S=a.value;S!=null?Ut(i,!!a.multiple,S,!1):m!==!!a.multiple&&(a.defaultValue!=null?Ut(i,!!a.multiple,a.defaultValue,!0):Ut(i,!!a.multiple,a.multiple?[]:"",!1))}i[Ur]=a}catch(j){me(e,e.return,j)}}break;case 6:if(dn(t,e),xn(e),s&4){if(e.stateNode===null)throw Error(U(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(j){me(e,e.return,j)}}break;case 3:if(dn(t,e),xn(e),s&4&&r!==null&&r.memoizedState.isDehydrated)try{Dr(t.containerInfo)}catch(j){me(e,e.return,j)}break;case 4:dn(t,e),xn(e);break;case 13:dn(t,e),xn(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(uo=ge())),s&4&&Cc(e);break;case 22:if(d=r!==null&&r.memoizedState!==null,e.mode&1?(ze=(h=ze)||d,dn(t,e),ze=h):dn(t,e),xn(e),s&8192){if(h=e.memoizedState!==null,(e.stateNode.isHidden=h)&&!d&&e.mode&1)for(Q=e,d=e.child;d!==null;){for(p=Q=d;Q!==null;){switch(m=Q,S=m.child,m.tag){case 0:case 11:case 14:case 15:_r(4,m,m.return);break;case 1:Ft(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){s=m,r=m.return;try{t=s,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(j){me(s,r,j)}}break;case 5:Ft(m,m.return);break;case 22:if(m.memoizedState!==null){Ec(p);continue}}S!==null?(S.return=m,Q=S):Ec(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,h?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(o=p.stateNode,c=p.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=Td("display",l))}catch(j){me(e,e.return,j)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(j){me(e,e.return,j)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:dn(t,e),xn(e),s&4&&Cc(e);break;case 21:break;default:dn(t,e),xn(e)}}function xn(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Zu(r)){var s=r;break e}r=r.return}throw Error(U(160))}switch(s.tag){case 5:var i=s.stateNode;s.flags&32&&(Mr(i,""),s.flags&=-33);var a=Sc(e);ll(e,a,i);break;case 3:case 4:var l=s.stateNode.containerInfo,o=Sc(e);al(e,o,l);break;default:throw Error(U(161))}}catch(c){me(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function nm(e,t,r){Q=e,th(e)}function th(e,t,r){for(var s=(e.mode&1)!==0;Q!==null;){var i=Q,a=i.child;if(i.tag===22&&s){var l=i.memoizedState!==null||Cs;if(!l){var o=i.alternate,c=o!==null&&o.memoizedState!==null||ze;o=Cs;var h=ze;if(Cs=l,(ze=c)&&!h)for(Q=i;Q!==null;)l=Q,c=l.child,l.tag===22&&l.memoizedState!==null?_c(i):c!==null?(c.return=l,Q=c):_c(i);for(;a!==null;)Q=a,th(a),a=a.sibling;Q=i,Cs=o,ze=h}Tc(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,Q=a):Tc(e)}}function Tc(e){for(;Q!==null;){var t=Q;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ze||Li(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!ze)if(r===null)s.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:un(t.type,r.memoizedProps);s.componentDidUpdate(i,r.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&uc(t,a,s);break;case 3:var l=t.updateQueue;if(l!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}uc(t,l,r)}break;case 5:var o=t.stateNode;if(r===null&&t.flags&4){r=o;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var h=t.alternate;if(h!==null){var d=h.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Dr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}ze||t.flags&512&&il(t)}catch(m){me(t,t.return,m)}}if(t===e){Q=null;break}if(r=t.sibling,r!==null){r.return=t.return,Q=r;break}Q=t.return}}function Ec(e){for(;Q!==null;){var t=Q;if(t===e){Q=null;break}var r=t.sibling;if(r!==null){r.return=t.return,Q=r;break}Q=t.return}}function _c(e){for(;Q!==null;){var t=Q;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Li(4,t)}catch(c){me(t,r,c)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var i=t.return;try{s.componentDidMount()}catch(c){me(t,i,c)}}var a=t.return;try{il(t)}catch(c){me(t,a,c)}break;case 5:var l=t.return;try{il(t)}catch(c){me(t,l,c)}}}catch(c){me(t,t.return,c)}if(t===e){Q=null;break}var o=t.sibling;if(o!==null){o.return=t.return,Q=o;break}Q=t.return}}var tm=Math.ceil,di=Pn.ReactCurrentDispatcher,oo=Pn.ReactCurrentOwner,ln=Pn.ReactCurrentBatchConfig,ne=0,Se=null,je=null,_e=0,Qe=0,Vt=tt(0),be=0,Xr=null,yt=0,Oi=0,co=0,Lr=null,qe=null,uo=0,sr=1/0,kn=null,ui=!1,ol=null,Gn=null,Ts=!1,Dn=null,hi=0,Or=0,cl=null,Ds=-1,$s=0;function Ve(){return ne&6?ge():Ds!==-1?Ds:Ds=ge()}function Qn(e){return e.mode&1?ne&2&&_e!==0?_e&-_e:Vf.transition!==null?($s===0&&($s=Dd()),$s):(e=se,e!==0||(e=window.event,e=e===void 0?16:Wd(e.type)),e):1}function mn(e,t,r,s){if(50<Or)throw Or=0,cl=null,Error(U(185));rs(e,r,s),(!(ne&2)||e!==Se)&&(e===Se&&(!(ne&2)&&(Oi|=r),be===4&&Fn(e,_e)),Ge(e,s),r===1&&ne===0&&!(t.mode&1)&&(sr=ge()+500,Ti&&rt()))}function Ge(e,t){var r=e.callbackNode;Fp(e,t);var s=Qs(e,e===Se?_e:0);if(s===0)r!==null&&Fo(r),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(r!=null&&Fo(r),t===1)e.tag===0?Ff(Lc.bind(null,e)):hu(Lc.bind(null,e)),If(function(){!(ne&6)&&rt()}),r=null;else{switch($d(s)){case 1:r=Ml;break;case 4:r=Fd;break;case 16:r=Gs;break;case 536870912:r=Vd;break;default:r=Gs}r=dh(r,rh.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function rh(e,t){if(Ds=-1,$s=0,ne&6)throw Error(U(327));var r=e.callbackNode;if(Yt()&&e.callbackNode!==r)return null;var s=Qs(e,e===Se?_e:0);if(s===0)return null;if(s&30||s&e.expiredLanes||t)t=pi(e,s);else{t=s;var i=ne;ne|=2;var a=ih();(Se!==e||_e!==t)&&(kn=null,sr=ge()+500,ft(e,t));do try{im();break}catch(o){sh(e,o)}while(!0);Ql(),di.current=a,ne=i,je!==null?t=0:(Se=null,_e=0,t=be)}if(t!==0){if(t===2&&(i=Ma(e),i!==0&&(s=i,t=dl(e,i))),t===1)throw r=Xr,ft(e,0),Fn(e,s),Ge(e,ge()),r;if(t===6)Fn(e,s);else{if(i=e.current.alternate,!(s&30)&&!rm(i)&&(t=pi(e,s),t===2&&(a=Ma(e),a!==0&&(s=a,t=dl(e,a))),t===1))throw r=Xr,ft(e,0),Fn(e,s),Ge(e,ge()),r;switch(e.finishedWork=i,e.finishedLanes=s,t){case 0:case 1:throw Error(U(345));case 2:ot(e,qe,kn);break;case 3:if(Fn(e,s),(s&130023424)===s&&(t=uo+500-ge(),10<t)){if(Qs(e,0)!==0)break;if(i=e.suspendedLanes,(i&s)!==s){Ve(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=qa(ot.bind(null,e,qe,kn),t);break}ot(e,qe,kn);break;case 4:if(Fn(e,s),(s&4194240)===s)break;for(t=e.eventTimes,i=-1;0<s;){var l=31-fn(s);a=1<<l,l=t[l],l>i&&(i=l),s&=~a}if(s=i,s=ge()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*tm(s/1960))-s,10<s){e.timeoutHandle=qa(ot.bind(null,e,qe,kn),s);break}ot(e,qe,kn);break;case 5:ot(e,qe,kn);break;default:throw Error(U(329))}}}return Ge(e,ge()),e.callbackNode===r?rh.bind(null,e):null}function dl(e,t){var r=Lr;return e.current.memoizedState.isDehydrated&&(ft(e,t).flags|=256),e=pi(e,t),e!==2&&(t=qe,qe=r,t!==null&&ul(t)),e}function ul(e){qe===null?qe=e:qe.push.apply(qe,e)}function rm(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var s=0;s<r.length;s++){var i=r[s],a=i.getSnapshot;i=i.value;try{if(!gn(a(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Fn(e,t){for(t&=~co,t&=~Oi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-fn(t),s=1<<r;e[r]=-1,t&=~s}}function Lc(e){if(ne&6)throw Error(U(327));Yt();var t=Qs(e,0);if(!(t&1))return Ge(e,ge()),null;var r=pi(e,t);if(e.tag!==0&&r===2){var s=Ma(e);s!==0&&(t=s,r=dl(e,s))}if(r===1)throw r=Xr,ft(e,0),Fn(e,t),Ge(e,ge()),r;if(r===6)throw Error(U(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ot(e,qe,kn),Ge(e,ge()),null}function ho(e,t){var r=ne;ne|=1;try{return e(t)}finally{ne=r,ne===0&&(sr=ge()+500,Ti&&rt())}}function jt(e){Dn!==null&&Dn.tag===0&&!(ne&6)&&Yt();var t=ne;ne|=1;var r=ln.transition,s=se;try{if(ln.transition=null,se=1,e)return e()}finally{se=s,ln.transition=r,ne=t,!(ne&6)&&rt()}}function po(){Qe=Vt.current,ce(Vt)}function ft(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Rf(r)),je!==null)for(r=je.return;r!==null;){var s=r;switch(Kl(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&ei();break;case 3:tr(),ce(Ke),ce(Me),no();break;case 5:eo(s);break;case 4:tr();break;case 13:ce(ue);break;case 19:ce(ue);break;case 10:Yl(s.type._context);break;case 22:case 23:po()}r=r.return}if(Se=e,je=e=Yn(e.current,null),_e=Qe=t,be=0,Xr=null,co=Oi=yt=0,qe=Lr=null,dt!==null){for(t=0;t<dt.length;t++)if(r=dt[t],s=r.interleaved,s!==null){r.interleaved=null;var i=s.next,a=r.pending;if(a!==null){var l=a.next;a.next=i,s.next=l}r.pending=s}dt=null}return e}function sh(e,t){do{var r=je;try{if(Ql(),As.current=ci,oi){for(var s=he.memoizedState;s!==null;){var i=s.queue;i!==null&&(i.pending=null),s=s.next}oi=!1}if(vt=0,we=ke=he=null,Er=!1,Gr=0,oo.current=null,r===null||r.return===null){be=1,Xr=t,je=null;break}e:{var a=e,l=r.return,o=r,c=t;if(t=_e,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var h=c,d=o,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var S=xc(l);if(S!==null){S.flags&=-257,vc(S,l,o,a,t),S.mode&1&&gc(a,h,t),t=S,c=h;var w=t.updateQueue;if(w===null){var j=new Set;j.add(c),t.updateQueue=j}else w.add(c);break e}else{if(!(t&1)){gc(a,h,t),fo();break e}c=Error(U(426))}}else if(de&&o.mode&1){var y=xc(l);if(y!==null){!(y.flags&65536)&&(y.flags|=256),vc(y,l,o,a,t),Wl(rr(c,o));break e}}a=c=rr(c,o),be!==4&&(be=2),Lr===null?Lr=[a]:Lr.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var f=$u(a,c,t);dc(a,f);break e;case 1:o=c;var g=a.type,x=a.stateNode;if(!(a.flags&128)&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Gn===null||!Gn.has(x)))){a.flags|=65536,t&=-t,a.lanes|=t;var P=Bu(a,o,t);dc(a,P);break e}}a=a.return}while(a!==null)}lh(r)}catch(N){t=N,je===r&&r!==null&&(je=r=r.return);continue}break}while(!0)}function ih(){var e=di.current;return di.current=ci,e===null?ci:e}function fo(){(be===0||be===3||be===2)&&(be=4),Se===null||!(yt&268435455)&&!(Oi&268435455)||Fn(Se,_e)}function pi(e,t){var r=ne;ne|=2;var s=ih();(Se!==e||_e!==t)&&(kn=null,ft(e,t));do try{sm();break}catch(i){sh(e,i)}while(!0);if(Ql(),ne=r,di.current=s,je!==null)throw Error(U(261));return Se=null,_e=0,be}function sm(){for(;je!==null;)ah(je)}function im(){for(;je!==null&&!_p();)ah(je)}function ah(e){var t=ch(e.alternate,e,Qe);e.memoizedProps=e.pendingProps,t===null?lh(e):je=t,oo.current=null}function lh(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Jf(r,t),r!==null){r.flags&=32767,je=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{be=6,je=null;return}}else if(r=Xf(r,t,Qe),r!==null){je=r;return}if(t=t.sibling,t!==null){je=t;return}je=t=e}while(t!==null);be===0&&(be=5)}function ot(e,t,r){var s=se,i=ln.transition;try{ln.transition=null,se=1,am(e,t,r,s)}finally{ln.transition=i,se=s}return null}function am(e,t,r,s){do Yt();while(Dn!==null);if(ne&6)throw Error(U(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(U(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(Vp(e,a),e===Se&&(je=Se=null,_e=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Ts||(Ts=!0,dh(Gs,function(){return Yt(),null})),a=(r.flags&15990)!==0,r.subtreeFlags&15990||a){a=ln.transition,ln.transition=null;var l=se;se=1;var o=ne;ne|=4,oo.current=null,em(e,r),nh(r,e),Cf(Ba),Ys=!!$a,Ba=$a=null,e.current=r,nm(r),Lp(),ne=o,se=l,ln.transition=a}else e.current=r;if(Ts&&(Ts=!1,Dn=e,hi=i),a=e.pendingLanes,a===0&&(Gn=null),Rp(r.stateNode),Ge(e,ge()),t!==null)for(s=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],s(i.value,{componentStack:i.stack,digest:i.digest});if(ui)throw ui=!1,e=ol,ol=null,e;return hi&1&&e.tag!==0&&Yt(),a=e.pendingLanes,a&1?e===cl?Or++:(Or=0,cl=e):Or=0,rt(),null}function Yt(){if(Dn!==null){var e=$d(hi),t=ln.transition,r=se;try{if(ln.transition=null,se=16>e?16:e,Dn===null)var s=!1;else{if(e=Dn,Dn=null,hi=0,ne&6)throw Error(U(331));var i=ne;for(ne|=4,Q=e.current;Q!==null;){var a=Q,l=a.child;if(Q.flags&16){var o=a.deletions;if(o!==null){for(var c=0;c<o.length;c++){var h=o[c];for(Q=h;Q!==null;){var d=Q;switch(d.tag){case 0:case 11:case 15:_r(8,d,a)}var p=d.child;if(p!==null)p.return=d,Q=p;else for(;Q!==null;){d=Q;var m=d.sibling,S=d.return;if(Ju(d),d===h){Q=null;break}if(m!==null){m.return=S,Q=m;break}Q=S}}}var w=a.alternate;if(w!==null){var j=w.child;if(j!==null){w.child=null;do{var y=j.sibling;j.sibling=null,j=y}while(j!==null)}}Q=a}}if(a.subtreeFlags&2064&&l!==null)l.return=a,Q=l;else e:for(;Q!==null;){if(a=Q,a.flags&2048)switch(a.tag){case 0:case 11:case 15:_r(9,a,a.return)}var f=a.sibling;if(f!==null){f.return=a.return,Q=f;break e}Q=a.return}}var g=e.current;for(Q=g;Q!==null;){l=Q;var x=l.child;if(l.subtreeFlags&2064&&x!==null)x.return=l,Q=x;else e:for(l=g;Q!==null;){if(o=Q,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Li(9,o)}}catch(N){me(o,o.return,N)}if(o===l){Q=null;break e}var P=o.sibling;if(P!==null){P.return=o.return,Q=P;break e}Q=o.return}}if(ne=i,rt(),jn&&typeof jn.onPostCommitFiberRoot=="function")try{jn.onPostCommitFiberRoot(ki,e)}catch{}s=!0}return s}finally{se=r,ln.transition=t}}return!1}function Oc(e,t,r){t=rr(r,t),t=$u(e,t,1),e=Wn(e,t,1),t=Ve(),e!==null&&(rs(e,1,t),Ge(e,t))}function me(e,t,r){if(e.tag===3)Oc(e,e,r);else for(;t!==null;){if(t.tag===3){Oc(t,e,r);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Gn===null||!Gn.has(s))){e=rr(r,e),e=Bu(t,e,1),t=Wn(t,e,1),e=Ve(),t!==null&&(rs(t,1,e),Ge(t,e));break}}t=t.return}}function lm(e,t,r){var s=e.pingCache;s!==null&&s.delete(t),t=Ve(),e.pingedLanes|=e.suspendedLanes&r,Se===e&&(_e&r)===r&&(be===4||be===3&&(_e&130023424)===_e&&500>ge()-uo?ft(e,0):co|=r),Ge(e,t)}function oh(e,t){t===0&&(e.mode&1?(t=xs,xs<<=1,!(xs&130023424)&&(xs=4194304)):t=1);var r=Ve();e=_n(e,t),e!==null&&(rs(e,t,r),Ge(e,r))}function om(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),oh(e,r)}function cm(e,t){var r=0;switch(e.tag){case 13:var s=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(U(314))}s!==null&&s.delete(t),oh(e,r)}var ch;ch=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ke.current)Ue=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Ue=!1,Yf(e,t,r);Ue=!!(e.flags&131072)}else Ue=!1,de&&t.flags&1048576&&pu(t,ri,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;Vs(e,t),e=t.pendingProps;var i=Zt(t,Me.current);Qt(t,r),i=ro(null,t,s,e,i,r);var a=so();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,We(s)?(a=!0,ni(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Jl(t),i.updater=_i,t.stateNode=i,i._reactInternals=t,Xa(t,s,e,r),t=el(null,t,s,!0,a,r)):(t.tag=0,de&&a&&Ul(t),Fe(null,t,i,r),t=t.child),t;case 16:s=t.elementType;e:{switch(Vs(e,t),e=t.pendingProps,i=s._init,s=i(s._payload),t.type=s,i=t.tag=um(s),e=un(s,e),i){case 0:t=Za(null,t,s,e,r);break e;case 1:t=Nc(null,t,s,e,r);break e;case 11:t=yc(null,t,s,e,r);break e;case 14:t=jc(null,t,s,un(s.type,e),r);break e}throw Error(U(306,s,""))}return t;case 0:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:un(s,i),Za(e,t,s,i,r);case 1:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:un(s,i),Nc(e,t,s,i,r);case 3:e:{if(Ku(t),e===null)throw Error(U(387));s=t.pendingProps,a=t.memoizedState,i=a.element,yu(e,t),ai(t,s,null,r);var l=t.memoizedState;if(s=l.element,a.isDehydrated)if(a={element:s,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=rr(Error(U(423)),t),t=kc(e,t,s,r,i);break e}else if(s!==i){i=rr(Error(U(424)),t),t=kc(e,t,s,r,i);break e}else for(Xe=Kn(t.stateNode.containerInfo.firstChild),Ze=t,de=!0,pn=null,r=xu(t,null,s,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(er(),s===i){t=Ln(e,t,r);break e}Fe(e,t,s,r)}t=t.child}return t;case 5:return ju(t),e===null&&Ga(t),s=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,l=i.children,Ha(s,i)?l=null:a!==null&&Ha(s,a)&&(t.flags|=32),Uu(e,t),Fe(e,t,l,r),t.child;case 6:return e===null&&Ga(t),null;case 13:return Wu(e,t,r);case 4:return Zl(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=nr(t,null,s,r):Fe(e,t,s,r),t.child;case 11:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:un(s,i),yc(e,t,s,i,r);case 7:return Fe(e,t,t.pendingProps,r),t.child;case 8:return Fe(e,t,t.pendingProps.children,r),t.child;case 12:return Fe(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(s=t.type._context,i=t.pendingProps,a=t.memoizedProps,l=i.value,le(si,s._currentValue),s._currentValue=l,a!==null)if(gn(a.value,l)){if(a.children===i.children&&!Ke.current){t=Ln(e,t,r);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var o=a.dependencies;if(o!==null){l=a.child;for(var c=o.firstContext;c!==null;){if(c.context===s){if(a.tag===1){c=Cn(-1,r&-r),c.tag=2;var h=a.updateQueue;if(h!==null){h=h.shared;var d=h.pending;d===null?c.next=c:(c.next=d.next,d.next=c),h.pending=c}}a.lanes|=r,c=a.alternate,c!==null&&(c.lanes|=r),Qa(a.return,r,t),o.lanes|=r;break}c=c.next}}else if(a.tag===10)l=a.type===t.type?null:a.child;else if(a.tag===18){if(l=a.return,l===null)throw Error(U(341));l.lanes|=r,o=l.alternate,o!==null&&(o.lanes|=r),Qa(l,r,t),l=a.sibling}else l=a.child;if(l!==null)l.return=a;else for(l=a;l!==null;){if(l===t){l=null;break}if(a=l.sibling,a!==null){a.return=l.return,l=a;break}l=l.return}a=l}Fe(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,s=t.pendingProps.children,Qt(t,r),i=on(i),s=s(i),t.flags|=1,Fe(e,t,s,r),t.child;case 14:return s=t.type,i=un(s,t.pendingProps),i=un(s.type,i),jc(e,t,s,i,r);case 15:return Hu(e,t,t.type,t.pendingProps,r);case 17:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:un(s,i),Vs(e,t),t.tag=1,We(s)?(e=!0,ni(t)):e=!1,Qt(t,r),Du(t,s,i),Xa(t,s,i,r),el(null,t,s,!0,e,r);case 19:return Gu(e,t,r);case 22:return qu(e,t,r)}throw Error(U(156,t.tag))};function dh(e,t){return Ad(e,t)}function dm(e,t,r,s){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function an(e,t,r,s){return new dm(e,t,r,s)}function mo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function um(e){if(typeof e=="function")return mo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Rl)return 11;if(e===Il)return 14}return 2}function Yn(e,t){var r=e.alternate;return r===null?(r=an(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Bs(e,t,r,s,i,a){var l=2;if(s=e,typeof e=="function")mo(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case _t:return mt(r.children,i,a,t);case Pl:l=8,i|=8;break;case Na:return e=an(12,r,t,i|2),e.elementType=Na,e.lanes=a,e;case ka:return e=an(13,r,t,i),e.elementType=ka,e.lanes=a,e;case ba:return e=an(19,r,t,i),e.elementType=ba,e.lanes=a,e;case jd:return Pi(r,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case vd:l=10;break e;case yd:l=9;break e;case Rl:l=11;break e;case Il:l=14;break e;case zn:l=16,s=null;break e}throw Error(U(130,e==null?e:typeof e,""))}return t=an(l,r,t,i),t.elementType=e,t.type=s,t.lanes=a,t}function mt(e,t,r,s){return e=an(7,e,s,t),e.lanes=r,e}function Pi(e,t,r,s){return e=an(22,e,s,t),e.elementType=jd,e.lanes=r,e.stateNode={isHidden:!1},e}function ca(e,t,r){return e=an(6,e,null,t),e.lanes=r,e}function da(e,t,r){return t=an(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function hm(e,t,r,s,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qi(0),this.expirationTimes=qi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qi(0),this.identifierPrefix=s,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function go(e,t,r,s,i,a,l,o,c){return e=new hm(e,t,r,o,c),t===1?(t=1,a===!0&&(t|=8)):t=0,a=an(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:s,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jl(a),e}function pm(e,t,r){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Et,key:s==null?null:""+s,children:e,containerInfo:t,implementation:r}}function uh(e){if(!e)return et;e=e._reactInternals;e:{if(kt(e)!==e||e.tag!==1)throw Error(U(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(We(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(U(171))}if(e.tag===1){var r=e.type;if(We(r))return uu(e,r,t)}return t}function hh(e,t,r,s,i,a,l,o,c){return e=go(r,s,!0,e,i,a,l,o,c),e.context=uh(null),r=e.current,s=Ve(),i=Qn(r),a=Cn(s,i),a.callback=t??null,Wn(r,a,i),e.current.lanes=i,rs(e,i,s),Ge(e,s),e}function Ri(e,t,r,s){var i=t.current,a=Ve(),l=Qn(i);return r=uh(r),t.context===null?t.context=r:t.pendingContext=r,t=Cn(a,l),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=Wn(i,t,l),e!==null&&(mn(e,i,l,a),Ms(e,i,l)),l}function fi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Pc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function xo(e,t){Pc(e,t),(e=e.alternate)&&Pc(e,t)}function fm(){return null}var ph=typeof reportError=="function"?reportError:function(e){console.error(e)};function vo(e){this._internalRoot=e}Ii.prototype.render=vo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(U(409));Ri(e,t,null,null)};Ii.prototype.unmount=vo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jt(function(){Ri(null,e,null,null)}),t[En]=null}};function Ii(e){this._internalRoot=e}Ii.prototype.unstable_scheduleHydration=function(e){if(e){var t=qd();e={blockedOn:null,target:e,priority:t};for(var r=0;r<An.length&&t!==0&&t<An[r].priority;r++);An.splice(r,0,e),r===0&&Kd(e)}};function yo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Rc(){}function mm(e,t,r,s,i){if(i){if(typeof s=="function"){var a=s;s=function(){var h=fi(l);a.call(h)}}var l=hh(t,s,e,0,null,!1,!1,"",Rc);return e._reactRootContainer=l,e[En]=l.current,Hr(e.nodeType===8?e.parentNode:e),jt(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof s=="function"){var o=s;s=function(){var h=fi(c);o.call(h)}}var c=go(e,0,!1,null,null,!1,!1,"",Rc);return e._reactRootContainer=c,e[En]=c.current,Hr(e.nodeType===8?e.parentNode:e),jt(function(){Ri(t,c,r,s)}),c}function Mi(e,t,r,s,i){var a=r._reactRootContainer;if(a){var l=a;if(typeof i=="function"){var o=i;i=function(){var c=fi(l);o.call(c)}}Ri(t,l,e,i)}else l=mm(r,t,e,i,s);return fi(l)}Bd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=yr(t.pendingLanes);r!==0&&(Al(t,r|1),Ge(t,ge()),!(ne&6)&&(sr=ge()+500,rt()))}break;case 13:jt(function(){var s=_n(e,1);if(s!==null){var i=Ve();mn(s,e,1,i)}}),xo(e,1)}};Fl=function(e){if(e.tag===13){var t=_n(e,134217728);if(t!==null){var r=Ve();mn(t,e,134217728,r)}xo(e,134217728)}};Hd=function(e){if(e.tag===13){var t=Qn(e),r=_n(e,t);if(r!==null){var s=Ve();mn(r,e,t,s)}xo(e,t)}};qd=function(){return se};Ud=function(e,t){var r=se;try{return se=e,t()}finally{se=r}};Ra=function(e,t,r){switch(t){case"input":if(Ca(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var s=r[t];if(s!==e&&s.form===e.form){var i=Ci(s);if(!i)throw Error(U(90));kd(s),Ca(s,i)}}}break;case"textarea":wd(e,r);break;case"select":t=r.value,t!=null&&Ut(e,!!r.multiple,t,!1)}};Od=ho;Pd=jt;var gm={usingClientEntryPoint:!1,Events:[is,Rt,Ci,_d,Ld,ho]},gr={findFiberByHostInstance:ct,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xm={bundleType:gr.bundleType,version:gr.version,rendererPackageName:gr.rendererPackageName,rendererConfig:gr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=zd(e),e===null?null:e.stateNode},findFiberByHostInstance:gr.findFiberByHostInstance||fm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Es=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Es.isDisabled&&Es.supportsFiber)try{ki=Es.inject(xm),jn=Es}catch{}}nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gm;nn.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yo(t))throw Error(U(200));return pm(e,t,null,r)};nn.createRoot=function(e,t){if(!yo(e))throw Error(U(299));var r=!1,s="",i=ph;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=go(e,1,!1,null,null,r,!1,s,i),e[En]=t.current,Hr(e.nodeType===8?e.parentNode:e),new vo(t)};nn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(U(188)):(e=Object.keys(e).join(","),Error(U(268,e)));return e=zd(t),e=e===null?null:e.stateNode,e};nn.flushSync=function(e){return jt(e)};nn.hydrate=function(e,t,r){if(!zi(t))throw Error(U(200));return Mi(null,e,t,!0,r)};nn.hydrateRoot=function(e,t,r){if(!yo(e))throw Error(U(405));var s=r!=null&&r.hydratedSources||null,i=!1,a="",l=ph;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),t=hh(t,null,e,1,r??null,i,!1,a,l),e[En]=t.current,Hr(e),s)for(e=0;e<s.length;e++)r=s[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new Ii(t)};nn.render=function(e,t,r){if(!zi(t))throw Error(U(200));return Mi(null,e,t,!1,r)};nn.unmountComponentAtNode=function(e){if(!zi(e))throw Error(U(40));return e._reactRootContainer?(jt(function(){Mi(null,null,e,!1,function(){e._reactRootContainer=null,e[En]=null})}),!0):!1};nn.unstable_batchedUpdates=ho;nn.unstable_renderSubtreeIntoContainer=function(e,t,r,s){if(!zi(r))throw Error(U(200));if(e==null||e._reactInternals===void 0)throw Error(U(38));return Mi(e,t,r,!1,s)};nn.version="18.3.1-next-f1338f8080-20240426";function fh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fh)}catch(e){console.error(e)}}fh(),fd.exports=nn;var vm=fd.exports,Ic=vm;ya.createRoot=Ic.createRoot,ya.hydrateRoot=Ic.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jr(){return Jr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},Jr.apply(this,arguments)}var $n;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})($n||($n={}));const zc="popstate";function ym(e){e===void 0&&(e={});function t(s,i){let{pathname:a,search:l,hash:o}=s.location;return hl("",{pathname:a,search:l,hash:o},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function r(s,i){return typeof i=="string"?i:mi(i)}return Nm(t,r,null,e)}function Ne(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function jo(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function jm(){return Math.random().toString(36).substr(2,8)}function Mc(e,t){return{usr:e.state,key:e.key,idx:t}}function hl(e,t,r,s){return r===void 0&&(r=null),Jr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?or(t):t,{state:r,key:t&&t.key||s||jm()})}function mi(e){let{pathname:t="/",search:r="",hash:s=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),s&&s!=="#"&&(t+=s.charAt(0)==="#"?s:"#"+s),t}function or(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let s=e.indexOf("?");s>=0&&(t.search=e.substr(s),e=e.substr(0,s)),e&&(t.pathname=e)}return t}function Nm(e,t,r,s){s===void 0&&(s={});let{window:i=document.defaultView,v5Compat:a=!1}=s,l=i.history,o=$n.Pop,c=null,h=d();h==null&&(h=0,l.replaceState(Jr({},l.state,{idx:h}),""));function d(){return(l.state||{idx:null}).idx}function p(){o=$n.Pop;let y=d(),f=y==null?null:y-h;h=y,c&&c({action:o,location:j.location,delta:f})}function m(y,f){o=$n.Push;let g=hl(j.location,y,f);h=d()+1;let x=Mc(g,h),P=j.createHref(g);try{l.pushState(x,"",P)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;i.location.assign(P)}a&&c&&c({action:o,location:j.location,delta:1})}function S(y,f){o=$n.Replace;let g=hl(j.location,y,f);h=d();let x=Mc(g,h),P=j.createHref(g);l.replaceState(x,"",P),a&&c&&c({action:o,location:j.location,delta:0})}function w(y){let f=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof y=="string"?y:mi(y);return g=g.replace(/ $/,"%20"),Ne(f,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,f)}let j={get action(){return o},get location(){return e(i,l)},listen(y){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(zc,p),c=y,()=>{i.removeEventListener(zc,p),c=null}},createHref(y){return t(i,y)},createURL:w,encodeLocation(y){let f=w(y);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:m,replace:S,go(y){return l.go(y)}};return j}var Ac;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ac||(Ac={}));function km(e,t,r){return r===void 0&&(r="/"),bm(e,t,r)}function bm(e,t,r,s){let i=typeof t=="string"?or(t):t,a=No(i.pathname||"/",r);if(a==null)return null;let l=mh(e);wm(l);let o=null;for(let c=0;o==null&&c<l.length;++c){let h=Mm(a);o=Rm(l[c],h)}return o}function mh(e,t,r,s){t===void 0&&(t=[]),r===void 0&&(r=[]),s===void 0&&(s="");let i=(a,l,o)=>{let c={relativePath:o===void 0?a.path||"":o,caseSensitive:a.caseSensitive===!0,childrenIndex:l,route:a};c.relativePath.startsWith("/")&&(Ne(c.relativePath.startsWith(s),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(s.length));let h=Xn([s,c.relativePath]),d=r.concat(c);a.children&&a.children.length>0&&(Ne(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),mh(a.children,t,d,h)),!(a.path==null&&!a.index)&&t.push({path:h,score:Om(h,a.index),routesMeta:d})};return e.forEach((a,l)=>{var o;if(a.path===""||!((o=a.path)!=null&&o.includes("?")))i(a,l);else for(let c of gh(a.path))i(a,l,c)}),t}function gh(e){let t=e.split("/");if(t.length===0)return[];let[r,...s]=t,i=r.endsWith("?"),a=r.replace(/\?$/,"");if(s.length===0)return i?[a,""]:[a];let l=gh(s.join("/")),o=[];return o.push(...l.map(c=>c===""?a:[a,c].join("/"))),i&&o.push(...l),o.map(c=>e.startsWith("/")&&c===""?"/":c)}function wm(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Pm(t.routesMeta.map(s=>s.childrenIndex),r.routesMeta.map(s=>s.childrenIndex)))}const Sm=/^:[\w-]+$/,Cm=3,Tm=2,Em=1,_m=10,Lm=-2,Fc=e=>e==="*";function Om(e,t){let r=e.split("/"),s=r.length;return r.some(Fc)&&(s+=Lm),t&&(s+=Tm),r.filter(i=>!Fc(i)).reduce((i,a)=>i+(Sm.test(a)?Cm:a===""?Em:_m),s)}function Pm(e,t){return e.length===t.length&&e.slice(0,-1).every((s,i)=>s===t[i])?e[e.length-1]-t[t.length-1]:0}function Rm(e,t,r){let{routesMeta:s}=e,i={},a="/",l=[];for(let o=0;o<s.length;++o){let c=s[o],h=o===s.length-1,d=a==="/"?t:t.slice(a.length)||"/",p=Im({path:c.relativePath,caseSensitive:c.caseSensitive,end:h},d),m=c.route;if(!p)return null;Object.assign(i,p.params),l.push({params:i,pathname:Xn([a,p.pathname]),pathnameBase:$m(Xn([a,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(a=Xn([a,p.pathnameBase]))}return l}function Im(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,s]=zm(e.path,e.caseSensitive,e.end),i=t.match(r);if(!i)return null;let a=i[0],l=a.replace(/(.)\/+$/,"$1"),o=i.slice(1);return{params:s.reduce((h,d,p)=>{let{paramName:m,isOptional:S}=d;if(m==="*"){let j=o[p]||"";l=a.slice(0,a.length-j.length).replace(/(.)\/+$/,"$1")}const w=o[p];return S&&!w?h[m]=void 0:h[m]=(w||"").replace(/%2F/g,"/"),h},{}),pathname:a,pathnameBase:l,pattern:e}}function zm(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),jo(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let s=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,o,c)=>(s.push({paramName:o,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(s.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),s]}function Mm(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return jo(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function No(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,s=e.charAt(r);return s&&s!=="/"?null:e.slice(r)||"/"}const Am=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fm=e=>Am.test(e);function Vm(e,t){t===void 0&&(t="/");let{pathname:r,search:s="",hash:i=""}=typeof e=="string"?or(e):e,a;if(r)if(Fm(r))a=r;else{if(r.includes("//")){let l=r;r=r.replace(/\/\/+/g,"/"),jo(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+r))}r.startsWith("/")?a=Vc(r.substring(1),"/"):a=Vc(r,t)}else a=t;return{pathname:a,search:Bm(s),hash:Hm(i)}}function Vc(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function ua(e,t,r,s){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Dm(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function xh(e,t){let r=Dm(e);return t?r.map((s,i)=>i===r.length-1?s.pathname:s.pathnameBase):r.map(s=>s.pathnameBase)}function vh(e,t,r,s){s===void 0&&(s=!1);let i;typeof e=="string"?i=or(e):(i=Jr({},e),Ne(!i.pathname||!i.pathname.includes("?"),ua("?","pathname","search",i)),Ne(!i.pathname||!i.pathname.includes("#"),ua("#","pathname","hash",i)),Ne(!i.search||!i.search.includes("#"),ua("#","search","hash",i)));let a=e===""||i.pathname==="",l=a?"/":i.pathname,o;if(l==null)o=r;else{let p=t.length-1;if(!s&&l.startsWith("..")){let m=l.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}o=p>=0?t[p]:"/"}let c=Vm(i,o),h=l&&l!=="/"&&l.endsWith("/"),d=(a||l===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(h||d)&&(c.pathname+="/"),c}const Xn=e=>e.join("/").replace(/\/\/+/g,"/"),$m=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Bm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Hm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function qm(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const yh=["post","put","patch","delete"];new Set(yh);const Um=["get",...yh];new Set(Um);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zr(){return Zr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},Zr.apply(this,arguments)}const ko=u.createContext(null),Km=u.createContext(null),bt=u.createContext(null),Ai=u.createContext(null),st=u.createContext({outlet:null,matches:[],isDataRoute:!1}),jh=u.createContext(null);function Wm(e,t){let{relative:r}=t===void 0?{}:t;ls()||Ne(!1);let{basename:s,navigator:i}=u.useContext(bt),{hash:a,pathname:l,search:o}=bh(e,{relative:r}),c=l;return s!=="/"&&(c=l==="/"?s:Xn([s,l])),i.createHref({pathname:c,search:o,hash:a})}function ls(){return u.useContext(Ai)!=null}function os(){return ls()||Ne(!1),u.useContext(Ai).location}function Nh(e){u.useContext(bt).static||u.useLayoutEffect(e)}function kh(){let{isDataRoute:e}=u.useContext(st);return e?lg():Gm()}function Gm(){ls()||Ne(!1);let e=u.useContext(ko),{basename:t,future:r,navigator:s}=u.useContext(bt),{matches:i}=u.useContext(st),{pathname:a}=os(),l=JSON.stringify(xh(i,r.v7_relativeSplatPath)),o=u.useRef(!1);return Nh(()=>{o.current=!0}),u.useCallback(function(h,d){if(d===void 0&&(d={}),!o.current)return;if(typeof h=="number"){s.go(h);return}let p=vh(h,JSON.parse(l),a,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Xn([t,p.pathname])),(d.replace?s.replace:s.push)(p,d.state,d)},[t,s,l,a,e])}function Qm(){let{matches:e}=u.useContext(st),t=e[e.length-1];return t?t.params:{}}function bh(e,t){let{relative:r}=t===void 0?{}:t,{future:s}=u.useContext(bt),{matches:i}=u.useContext(st),{pathname:a}=os(),l=JSON.stringify(xh(i,s.v7_relativeSplatPath));return u.useMemo(()=>vh(e,JSON.parse(l),a,r==="path"),[e,l,a,r])}function Ym(e,t){return Xm(e,t)}function Xm(e,t,r,s){ls()||Ne(!1);let{navigator:i}=u.useContext(bt),{matches:a}=u.useContext(st),l=a[a.length-1],o=l?l.params:{};l&&l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let h=os(),d;if(t){var p;let y=typeof t=="string"?or(t):t;c==="/"||(p=y.pathname)!=null&&p.startsWith(c)||Ne(!1),d=y}else d=h;let m=d.pathname||"/",S=m;if(c!=="/"){let y=c.replace(/^\//,"").split("/");S="/"+m.replace(/^\//,"").split("/").slice(y.length).join("/")}let w=km(e,{pathname:S}),j=tg(w&&w.map(y=>Object.assign({},y,{params:Object.assign({},o,y.params),pathname:Xn([c,i.encodeLocation?i.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?c:Xn([c,i.encodeLocation?i.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),a,r,s);return t&&j?u.createElement(Ai.Provider,{value:{location:Zr({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:$n.Pop}},j):j}function Jm(){let e=ag(),t=qm(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return u.createElement(u.Fragment,null,u.createElement("h2",null,"Unexpected Application Error!"),u.createElement("h3",{style:{fontStyle:"italic"}},t),r?u.createElement("pre",{style:i},r):null,null)}const Zm=u.createElement(Jm,null);class eg extends u.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?u.createElement(st.Provider,{value:this.props.routeContext},u.createElement(jh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ng(e){let{routeContext:t,match:r,children:s}=e,i=u.useContext(ko);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),u.createElement(st.Provider,{value:t},s)}function tg(e,t,r,s){var i;if(t===void 0&&(t=[]),r===void 0&&(r=null),s===void 0&&(s=null),e==null){var a;if(!r)return null;if(r.errors)e=r.matches;else if((a=s)!=null&&a.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let l=e,o=(i=r)==null?void 0:i.errors;if(o!=null){let d=l.findIndex(p=>p.route.id&&(o==null?void 0:o[p.route.id])!==void 0);d>=0||Ne(!1),l=l.slice(0,Math.min(l.length,d+1))}let c=!1,h=-1;if(r&&s&&s.v7_partialHydration)for(let d=0;d<l.length;d++){let p=l[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(h=d),p.route.id){let{loaderData:m,errors:S}=r,w=p.route.loader&&m[p.route.id]===void 0&&(!S||S[p.route.id]===void 0);if(p.route.lazy||w){c=!0,h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}return l.reduceRight((d,p,m)=>{let S,w=!1,j=null,y=null;r&&(S=o&&p.route.id?o[p.route.id]:void 0,j=p.route.errorElement||Zm,c&&(h<0&&m===0?(og("route-fallback"),w=!0,y=null):h===m&&(w=!0,y=p.route.hydrateFallbackElement||null)));let f=t.concat(l.slice(0,m+1)),g=()=>{let x;return S?x=j:w?x=y:p.route.Component?x=u.createElement(p.route.Component,null):p.route.element?x=p.route.element:x=d,u.createElement(ng,{match:p,routeContext:{outlet:d,matches:f,isDataRoute:r!=null},children:x})};return r&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?u.createElement(eg,{location:r.location,revalidation:r.revalidation,component:j,error:S,children:g(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):g()},null)}var wh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(wh||{}),Sh=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Sh||{});function rg(e){let t=u.useContext(ko);return t||Ne(!1),t}function sg(e){let t=u.useContext(Km);return t||Ne(!1),t}function ig(e){let t=u.useContext(st);return t||Ne(!1),t}function Ch(e){let t=ig(),r=t.matches[t.matches.length-1];return r.route.id||Ne(!1),r.route.id}function ag(){var e;let t=u.useContext(jh),r=sg(),s=Ch();return t!==void 0?t:(e=r.errors)==null?void 0:e[s]}function lg(){let{router:e}=rg(wh.UseNavigateStable),t=Ch(Sh.UseNavigateStable),r=u.useRef(!1);return Nh(()=>{r.current=!0}),u.useCallback(function(i,a){a===void 0&&(a={}),r.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Zr({fromRouteId:t},a)))},[e,t])}const Dc={};function og(e,t,r){Dc[e]||(Dc[e]=!0)}function cg(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function ie(e){Ne(!1)}function dg(e){let{basename:t="/",children:r=null,location:s,navigationType:i=$n.Pop,navigator:a,static:l=!1,future:o}=e;ls()&&Ne(!1);let c=t.replace(/^\/*/,"/"),h=u.useMemo(()=>({basename:c,navigator:a,static:l,future:Zr({v7_relativeSplatPath:!1},o)}),[c,o,a,l]);typeof s=="string"&&(s=or(s));let{pathname:d="/",search:p="",hash:m="",state:S=null,key:w="default"}=s,j=u.useMemo(()=>{let y=No(d,c);return y==null?null:{location:{pathname:y,search:p,hash:m,state:S,key:w},navigationType:i}},[c,d,p,m,S,w,i]);return j==null?null:u.createElement(bt.Provider,{value:h},u.createElement(Ai.Provider,{children:r,value:j}))}function ug(e){let{children:t,location:r}=e;return Ym(pl(t),r)}new Promise(()=>{});function pl(e,t){t===void 0&&(t=[]);let r=[];return u.Children.forEach(e,(s,i)=>{if(!u.isValidElement(s))return;let a=[...t,i];if(s.type===u.Fragment){r.push.apply(r,pl(s.props.children,a));return}s.type!==ie&&Ne(!1),!s.props.index||!s.props.children||Ne(!1);let l={id:s.props.id||a.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(l.children=pl(s.props.children,a)),r.push(l)}),r}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fl(){return fl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},fl.apply(this,arguments)}function hg(e,t){if(e==null)return{};var r={},s=Object.keys(e),i,a;for(a=0;a<s.length;a++)i=s[a],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function pg(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function fg(e,t){return e.button===0&&(!t||t==="_self")&&!pg(e)}const mg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],gg="6";try{window.__reactRouterVersion=gg}catch{}const xg="startTransition",$c=ap[xg];function vg(e){let{basename:t,children:r,future:s,window:i}=e,a=u.useRef();a.current==null&&(a.current=ym({window:i,v5Compat:!0}));let l=a.current,[o,c]=u.useState({action:l.action,location:l.location}),{v7_startTransition:h}=s||{},d=u.useCallback(p=>{h&&$c?$c(()=>c(p)):c(p)},[c,h]);return u.useLayoutEffect(()=>l.listen(d),[l,d]),u.useEffect(()=>cg(s),[s]),u.createElement(dg,{basename:t,children:r,location:o.location,navigationType:o.action,navigator:l,future:s})}const yg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",jg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Te=u.forwardRef(function(t,r){let{onClick:s,relative:i,reloadDocument:a,replace:l,state:o,target:c,to:h,preventScrollReset:d,viewTransition:p}=t,m=hg(t,mg),{basename:S}=u.useContext(bt),w,j=!1;if(typeof h=="string"&&jg.test(h)&&(w=h,yg))try{let x=new URL(window.location.href),P=h.startsWith("//")?new URL(x.protocol+h):new URL(h),N=No(P.pathname,S);P.origin===x.origin&&N!=null?h=N+P.search+P.hash:j=!0}catch{}let y=Wm(h,{relative:i}),f=Ng(h,{replace:l,state:o,target:c,preventScrollReset:d,relative:i,viewTransition:p});function g(x){s&&s(x),x.defaultPrevented||f(x)}return u.createElement("a",fl({},m,{href:w||y,onClick:j||a?s:g,ref:r,target:c}))});var Bc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Bc||(Bc={}));var Hc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Hc||(Hc={}));function Ng(e,t){let{target:r,replace:s,state:i,preventScrollReset:a,relative:l,viewTransition:o}=t===void 0?{}:t,c=kh(),h=os(),d=bh(e,{relative:l});return u.useCallback(p=>{if(fg(p,r)){p.preventDefault();let m=s!==void 0?s:mi(h)===mi(d);c(e,{replace:m,state:i,preventScrollReset:a,relative:l,viewTransition:o})}},[h,c,d,s,i,r,e,a,l,o])}/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var kg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),G=(e,t)=>{const r=u.forwardRef(({color:s="currentColor",size:i=24,strokeWidth:a=2,absoluteStrokeWidth:l,className:o="",children:c,...h},d)=>u.createElement("svg",{ref:d,...kg,width:i,height:i,stroke:s,strokeWidth:l?Number(a)*24/Number(i):a,className:["lucide",`lucide-${bg(e)}`,o].join(" "),...h},[...t.map(([p,m])=>u.createElement(p,m)),...Array.isArray(c)?c:[c]]));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const On=G("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=G("ArrowDownNarrowWide",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h4",key:"6d7r33"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h10",key:"1438ji"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=G("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qc=G("ArrowRightLeft",[["path",{d:"m16 3 4 4-4 4",key:"1x1c3m"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"m8 21-4-4 4-4",key:"h9nckh"}],["path",{d:"M4 17h16",key:"g4d7ey"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=G("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=G("ArrowUpDown",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=G("ArrowUpNarrowWide",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M11 12h4",key:"q8tih4"}],["path",{d:"M11 16h7",key:"uosisv"}],["path",{d:"M11 20h10",key:"jvxblo"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=G("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uc=G("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gi=G("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=G("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=G("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=G("Brain",[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",key:"1mhkh5"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",key:"1d6s00"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=G("Bug",[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",key:"xs1cw7"}],["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4",key:"k3fwyw"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ie=G("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=G("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=G("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hs=G("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=G("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=G("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ml=G("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qs=G("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=G("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=G("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xi=G("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ha=G("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kc=G("FileCode",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=G("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=G("GitFork",[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",key:"1uq4wg"}],["path",{d:"M12 12v3",key:"158kv8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=G("GitGraph",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M5 9v6",key:"158jrl"}],["circle",{cx:"5",cy:"18",r:"3",key:"104gr9"}],["path",{d:"M12 3v18",key:"108xh3"}],["circle",{cx:"19",cy:"6",r:"3",key:"108a5v"}],["path",{d:"M16 15.7A9 9 0 0 0 19 9",key:"1e3vqb"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bo=G("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=G("GraduationCap",[["path",{d:"M22 10v6M2 10l10-5 10 5-10 5z",key:"1ef52a"}],["path",{d:"M6 12v5c3 3 9 3 12 0v-5",key:"1f75yj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=G("Grid3x3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pr=G("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=G("HeartHandshake",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"12sd6o"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=G("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=G("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=G("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rr=G("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=G("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=G("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const es=G("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wo=G("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=G("ListOrdered",[["line",{x1:"10",x2:"21",y1:"6",y2:"6",key:"76qw6h"}],["line",{x1:"10",x2:"21",y1:"12",y2:"12",key:"16nom4"}],["line",{x1:"10",x2:"21",y1:"18",y2:"18",key:"u3jurt"}],["path",{d:"M4 6h1v4",key:"cnovpq"}],["path",{d:"M4 10h2",key:"16xx2s"}],["path",{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1",key:"m9a95d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=G("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=G("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wc=G("Map",[["polygon",{points:"3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21",key:"ok2ie8"}],["line",{x1:"9",x2:"9",y1:"3",y2:"18",key:"w34qz5"}],["line",{x1:"15",x2:"15",y1:"6",y2:"21",key:"volv9a"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=G("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=G("MousePointer2",[["path",{d:"m4 4 7.07 17 2.51-7.39L21 11.07z",key:"1vqm48"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=G("MoveUp",[["path",{d:"M8 6L12 2L16 6",key:"1yvkyx"}],["path",{d:"M12 2V22",key:"r89rzk"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gl=G("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=G("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ae=G("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vi=G("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=G("Puzzle",[["path",{d:"M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z",key:"i0oyt7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=G("Pyramid",[["path",{d:"M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z",key:"aenxs0"}],["path",{d:"M12 2v20",key:"t6zp3m"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=G("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const it=G("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=G("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cs=G("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const St=G("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=G("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=G("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xl=G("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex=G("TreeDeciduous",[["path",{d:"M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z",key:"oadzkq"}],["path",{d:"M12 19v3",key:"npa21l"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx=G("TreePine",[["path",{d:"m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z",key:"cpyugq"}],["path",{d:"M12 22v-3",key:"kmzjlo"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nr=G("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx=G("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gc=G("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=G("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const So=G("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function rx(){const e=os(),[t,r]=u.useState(!1),s=e.pathname==="/"?"home":e.pathname.replace("/","").replace("_",""),i=()=>r(!t),a=()=>r(!1);u.useEffect(()=>{const o=()=>{window.innerWidth>1024&&r(!1)};return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[]),u.useEffect(()=>{t?document.body.style.overflow="hidden":document.body.style.overflow=""},[t]);const l=({to:o,icon:c,children:h,pageName:d})=>{const p=s===d;return n.jsxs(Te,{to:o,className:`nav-item ${p?"active":""}`,onClick:a,children:[n.jsx(c,{}),n.jsx("span",{children:h})]})};return n.jsxs(n.Fragment,{children:[n.jsx("button",{className:"mobile-menu-toggle",id:"mobileMenuToggle","aria-label":"Toggle menu",onClick:i,children:t?n.jsx(Oh,{}):n.jsx(Kg,{})}),n.jsx("div",{className:`sidebar-overlay ${t?"active":""}`,onClick:a}),n.jsxs("aside",{className:`sidebar ${t?"active":""}`,id:"sidebar",children:[n.jsx("div",{className:"sidebar-header",children:n.jsxs(Te,{to:"/",className:"logo-wrapper",onClick:a,children:[n.jsx("img",{src:"/logo.svg",alt:"DSA Visualizer Logo",className:"logo-icon"}),n.jsx("span",{className:"logo-text",children:"DSA Visualizer"})]})}),n.jsxs("nav",{className:"sidebar-nav",children:[n.jsxs("div",{className:"nav-section",children:[n.jsx("div",{className:"nav-section-title",children:"Explore"}),n.jsx(l,{to:"/",icon:Bg,pageName:"home",children:"Home"}),n.jsx(l,{to:"/algorithms",icon:ml,pageName:"algorithms",children:"Algorithms"}),n.jsx(l,{to:"/practice",icon:Nr,pageName:"practice",children:"Practice"})]}),n.jsxs("div",{className:"nav-section",children:[n.jsx("div",{className:"nav-section-title",children:"More"}),n.jsx(l,{to:"/contact",icon:_h,pageName:"contact",children:"Contact"}),n.jsx(l,{to:"/contributions",icon:$g,pageName:"contributions",children:"Contributions"})]})]}),n.jsxs("div",{className:"sidebar-footer",children:[n.jsxs("div",{className:"social-links-sidebar",children:[n.jsx("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",title:"GitHub",children:n.jsx(bo,{})}),n.jsx("a",{href:"https://www.linkedin.com/in/abdullah-mahfouz-5188b1306/",target:"_blank",rel:"noopener noreferrer",title:"LinkedIn",children:n.jsx(wo,{})})]}),n.jsx("p",{className:"copyright",children:"© 2026 Abdullah Mahfouz"})]})]})]})}function sx(){return n.jsx("footer",{className:"main-footer",children:n.jsxs("div",{className:"footer-content",children:[n.jsxs("div",{className:"footer-social",children:[n.jsxs("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"footer-link",children:[n.jsx(bo,{}),n.jsx("span",{children:"GitHub"})]}),n.jsxs("a",{href:"https://www.linkedin.com/in/abdullah-mahfouz-5188b1306/",target:"_blank",rel:"noopener noreferrer",className:"footer-link",children:[n.jsx(wo,{}),n.jsx("span",{children:"LinkedIn"})]})]}),n.jsx("p",{className:"footer-copyright",children:"© 2026 Abdullah Mahfouz"})]})})}function ix(){const[e,t]=u.useState(0);u.useEffect(()=>{const s=setInterval(()=>{t(i=>(i+1)%4)},3e3);return()=>clearInterval(s)},[]);const r=[{icon:Rr,name:"Stack",color:"#6366f1",description:"LIFO Operations"},{icon:Xt,name:"Binary Tree",color:"#10b981",description:"Tree Traversals"},{icon:Pr,name:"Hash Table",color:"#f59e0b",description:"Key-Value Mapping"},{icon:xi,name:"Heap",color:"#ec4899",description:"Priority Queue"}];return n.jsxs(n.Fragment,{children:[n.jsxs("section",{className:"hero-advanced",children:[n.jsxs("div",{className:"hero-bg-effects",children:[n.jsx("div",{className:"gradient-orb orb-1"}),n.jsx("div",{className:"gradient-orb orb-2"}),n.jsx("div",{className:"gradient-orb orb-3"}),n.jsx("div",{className:"grid-overlay"}),n.jsx("div",{className:"noise-overlay"})]}),n.jsxs("div",{className:"hero-content-advanced",children:[n.jsxs("div",{className:"hero-badge-advanced",children:[n.jsx(Vg,{className:"badge-icon"}),n.jsx("span",{children:"Interactive Learning Platform"})]}),n.jsxs("h1",{className:"hero-title-advanced",children:[n.jsx("span",{className:"title-line",children:"Learn"}),n.jsx("span",{className:"title-line gradient-text-animated",children:"Data Structures"}),n.jsxs("span",{className:"title-line",children:["& ",n.jsx("span",{className:"gradient-text-animated",children:"Algorithms"})]})]}),n.jsx("p",{className:"hero-description-advanced",children:"The complete DSA learning platform. Visualize data structures in real-time, practice coding problems, and master algorithms with step-by-step animations."}),n.jsxs("div",{className:"hero-cta-group",children:[n.jsxs(Te,{to:"/algorithms",className:"btn-glow-primary",children:[n.jsx(ha,{className:"btn-icon-left"}),n.jsx("span",{children:"Explore Visualizers"})]}),n.jsxs(Te,{to:"/practice",className:"btn-glass",children:[n.jsx(Nr,{className:"btn-icon-left"}),n.jsx("span",{children:"Practice Problems"})]})]}),n.jsxs("div",{className:"hero-stats",children:[n.jsxs("div",{className:"stat-item",children:[n.jsx("span",{className:"stat-number",children:"12+"}),n.jsx("span",{className:"stat-label",children:"Visualizers"})]}),n.jsx("div",{className:"stat-divider"}),n.jsxs("div",{className:"stat-item",children:[n.jsx("span",{className:"stat-number",children:"22+"}),n.jsx("span",{className:"stat-label",children:"Practice Problems"})]}),n.jsx("div",{className:"stat-divider"}),n.jsxs("div",{className:"stat-item",children:[n.jsx("span",{className:"stat-number",children:"9"}),n.jsx("span",{className:"stat-label",children:"Topic Categories"})]})]})]}),n.jsxs("div",{className:"hero-showcase",children:[n.jsxs("div",{className:"showcase-window",children:[n.jsxs("div",{className:"window-header",children:[n.jsxs("div",{className:"window-dots",children:[n.jsx("span",{className:"dot red"}),n.jsx("span",{className:"dot yellow"}),n.jsx("span",{className:"dot green"})]}),n.jsxs("span",{className:"window-title",children:[n.jsx(Zg,{size:14}),"DSA Visualizer"]})]}),n.jsx("div",{className:"showcase-content",children:r.map((s,i)=>n.jsxs("div",{className:`showcase-card ${i===e?"active":""}`,style:{"--card-color":s.color},children:[n.jsx("div",{className:"showcase-card-icon",children:n.jsx(s.icon,{})}),n.jsxs("div",{className:"showcase-card-info",children:[n.jsx("h4",{children:s.name}),n.jsx("p",{children:s.description})]}),n.jsx(Hs,{className:"showcase-arrow"})]},s.name))})]}),n.jsx("div",{className:"floating-element float-1",children:n.jsx(ml,{})}),n.jsx("div",{className:"floating-element float-2",children:n.jsx(Nr,{})}),n.jsx("div",{className:"floating-element float-3",children:n.jsx(Lg,{})})]})]}),n.jsxs("section",{className:"main-features-section",children:[n.jsxs("div",{className:"section-header-advanced",children:[n.jsx("span",{className:"section-tag",children:"What We Offer"}),n.jsx("h2",{children:"Two Ways to Master DSA"}),n.jsx("p",{children:"Combine visual learning with hands-on practice for complete understanding"})]}),n.jsxs("div",{className:"main-features-grid",children:[n.jsxs(Te,{to:"/algorithms",className:"main-feature-card",children:[n.jsx("div",{className:"main-feature-card-bg visualizers"}),n.jsxs("div",{className:"main-feature-content",children:[n.jsx("div",{className:"main-feature-icon",style:{"--feature-color":"#6366f1"},children:n.jsx(ha,{})}),n.jsx("div",{className:"main-feature-badge",children:"12+ Structures"}),n.jsx("h3",{children:"Interactive Visualizers"}),n.jsx("p",{children:"Watch data structures come alive with real-time animations. See exactly how operations like push, pop, insert, and delete work at every step."}),n.jsxs("ul",{className:"main-feature-list",children:[n.jsxs("li",{children:[n.jsx(Ie,{size:16})," Stack, Queue, Linked List"]}),n.jsxs("li",{children:[n.jsx(Ie,{size:16})," Binary Trees, BST, AVL, Heaps"]}),n.jsxs("li",{children:[n.jsx(Ie,{size:16})," Hash Tables with collision handling"]}),n.jsxs("li",{children:[n.jsx(Ie,{size:16})," Graph algorithms (BFS, DFS, Dijkstra)"]})]}),n.jsxs("div",{className:"main-feature-cta",children:[n.jsx("span",{children:"Start Visualizing"}),n.jsx(re,{})]})]})]}),n.jsxs(Te,{to:"/practice",className:"main-feature-card",children:[n.jsx("div",{className:"main-feature-card-bg practice"}),n.jsxs("div",{className:"main-feature-content",children:[n.jsx("div",{className:"main-feature-icon",style:{"--feature-color":"#10b981"},children:n.jsx(Nr,{})}),n.jsx("div",{className:"main-feature-badge",children:"22+ Problems"}),n.jsx("h3",{children:"Practice Problems"}),n.jsx("p",{children:"Solve curated coding challenges organized in a structured roadmap. Write code, run tests, and track your progress as you level up your skills."}),n.jsxs("ul",{className:"main-feature-list",children:[n.jsxs("li",{children:[n.jsx(Ie,{size:16})," NeetCode-style learning roadmap"]}),n.jsxs("li",{children:[n.jsx(Ie,{size:16})," Built-in code editor with syntax highlighting"]}),n.jsxs("li",{children:[n.jsx(Ie,{size:16})," Instant test case feedback"]}),n.jsxs("li",{children:[n.jsx(Ie,{size:16})," Hints and solution guidance"]})]}),n.jsxs("div",{className:"main-feature-cta",children:[n.jsx("span",{children:"Start Practicing"}),n.jsx(re,{})]})]})]})]})]}),n.jsxs("section",{className:"ds-showcase-section",children:[n.jsxs("div",{className:"section-header-advanced",children:[n.jsx("span",{className:"section-tag",children:"Visualizers"}),n.jsx("h2",{children:"Interactive Data Structures"}),n.jsx("p",{children:"Click to visualize, interact, and truly understand how each structure works"})]}),n.jsxs("div",{className:"ds-showcase-grid",children:[n.jsxs(Te,{to:"/stack",className:"ds-card",style:{"--ds-color":"#6366f1"},children:[n.jsx("div",{className:"ds-card-glow"}),n.jsxs("div",{className:"ds-card-content",children:[n.jsx("div",{className:"ds-icon",children:n.jsx(Rr,{})}),n.jsx("h3",{children:"Stack"}),n.jsx("p",{children:"Last In, First Out"}),n.jsxs("div",{className:"ds-card-footer",children:[n.jsx("span",{className:"ds-complexity",children:"O(1) push/pop"}),n.jsx(re,{className:"ds-arrow"})]})]})]}),n.jsxs(Te,{to:"/queue",className:"ds-card",style:{"--ds-color":"#10b981"},children:[n.jsx("div",{className:"ds-card-glow"}),n.jsxs("div",{className:"ds-card-content",children:[n.jsx("div",{className:"ds-icon",children:n.jsx(Xt,{})}),n.jsx("h3",{children:"Queue"}),n.jsx("p",{children:"First In, First Out"}),n.jsxs("div",{className:"ds-card-footer",children:[n.jsx("span",{className:"ds-complexity",children:"O(1) enqueue"}),n.jsx(re,{className:"ds-arrow"})]})]})]}),n.jsxs(Te,{to:"/linkedlist",className:"ds-card",style:{"--ds-color":"#f59e0b"},children:[n.jsx("div",{className:"ds-card-glow"}),n.jsxs("div",{className:"ds-card-content",children:[n.jsx("div",{className:"ds-icon",children:n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("circle",{cx:"5",cy:"12",r:"3"}),n.jsx("circle",{cx:"19",cy:"12",r:"3"}),n.jsx("line",{x1:"8",y1:"12",x2:"16",y2:"12"})]})}),n.jsx("h3",{children:"Linked List"}),n.jsx("p",{children:"Dynamic Node Chain"}),n.jsxs("div",{className:"ds-card-footer",children:[n.jsx("span",{className:"ds-complexity",children:"O(1) insert"}),n.jsx(re,{className:"ds-arrow"})]})]})]}),n.jsxs(Te,{to:"/bst",className:"ds-card",style:{"--ds-color":"#ec4899"},children:[n.jsx("div",{className:"ds-card-glow"}),n.jsxs("div",{className:"ds-card-content",children:[n.jsx("div",{className:"ds-icon",children:n.jsx(nx,{})}),n.jsx("h3",{children:"Binary Search Tree"}),n.jsx("p",{children:"Ordered Tree Structure"}),n.jsxs("div",{className:"ds-card-footer",children:[n.jsx("span",{className:"ds-complexity",children:"O(log n) search"}),n.jsx(re,{className:"ds-arrow"})]})]})]}),n.jsxs(Te,{to:"/hashtable_chaining",className:"ds-card",style:{"--ds-color":"#8b5cf6"},children:[n.jsx("div",{className:"ds-card-glow"}),n.jsxs("div",{className:"ds-card-content",children:[n.jsx("div",{className:"ds-icon",children:n.jsx(Pr,{})}),n.jsx("h3",{children:"Hash Table"}),n.jsx("p",{children:"Key-Value Mapping"}),n.jsxs("div",{className:"ds-card-footer",children:[n.jsx("span",{className:"ds-complexity",children:"O(1) average"}),n.jsx(re,{className:"ds-arrow"})]})]})]}),n.jsxs(Te,{to:"/dijkstra",className:"ds-card",style:{"--ds-color":"#06b6d4"},children:[n.jsx("div",{className:"ds-card-glow"}),n.jsxs("div",{className:"ds-card-content",children:[n.jsx("div",{className:"ds-icon",children:n.jsx(gl,{})}),n.jsx("h3",{children:"Graph Algorithms"}),n.jsx("p",{children:"BFS, DFS, Dijkstra"}),n.jsxs("div",{className:"ds-card-footer",children:[n.jsx("span",{className:"ds-complexity",children:"Pathfinding"}),n.jsx(re,{className:"ds-arrow"})]})]})]})]}),n.jsx("div",{className:"showcase-cta",children:n.jsxs(Te,{to:"/algorithms",className:"btn-outline-glow",children:[n.jsx("span",{children:"View All Visualizers"}),n.jsx(re,{})]})})]}),n.jsxs("section",{className:"practice-preview-section",children:[n.jsxs("div",{className:"section-header-advanced",children:[n.jsx("span",{className:"section-tag",children:"Practice"}),n.jsx("h2",{children:"Structured Learning Roadmap"}),n.jsx("p",{children:"Follow a proven path to master DSA concepts step by step"})]}),n.jsxs("div",{className:"roadmap-preview-grid",children:[n.jsxs("div",{className:"roadmap-preview-item",style:{"--item-color":"#10b981"},children:[n.jsx("div",{className:"roadmap-preview-icon",children:n.jsx(Jg,{size:20})}),n.jsxs("div",{className:"roadmap-preview-info",children:[n.jsx("h4",{children:"Arrays & Hashing"}),n.jsx("span",{children:"3 problems"})]})]}),n.jsxs("div",{className:"roadmap-preview-item",style:{"--item-color":"#3b82f6"},children:[n.jsx("div",{className:"roadmap-preview-icon",children:n.jsx(Mg,{size:20})}),n.jsxs("div",{className:"roadmap-preview-info",children:[n.jsx("h4",{children:"Two Pointers"}),n.jsx("span",{children:"2 problems"})]})]}),n.jsxs("div",{className:"roadmap-preview-item",style:{"--item-color":"#8b5cf6"},children:[n.jsx("div",{className:"roadmap-preview-icon",children:n.jsx(Rr,{size:20})}),n.jsxs("div",{className:"roadmap-preview-info",children:[n.jsx("h4",{children:"Stack"}),n.jsx("span",{children:"2 problems"})]})]}),n.jsxs("div",{className:"roadmap-preview-item",style:{"--item-color":"#f59e0b"},children:[n.jsx("div",{className:"roadmap-preview-icon",children:n.jsx(Uc,{size:20})}),n.jsxs("div",{className:"roadmap-preview-info",children:[n.jsx("h4",{children:"Binary Search"}),n.jsx("span",{children:"2 problems"})]})]}),n.jsxs("div",{className:"roadmap-preview-item",style:{"--item-color":"#ec4899"},children:[n.jsx("div",{className:"roadmap-preview-icon",children:n.jsx(Xt,{size:20})}),n.jsxs("div",{className:"roadmap-preview-info",children:[n.jsx("h4",{children:"Trees"}),n.jsx("span",{children:"3 problems"})]})]}),n.jsxs("div",{className:"roadmap-preview-item",style:{"--item-color":"#6366f1"},children:[n.jsx("div",{className:"roadmap-preview-icon",children:n.jsx(gl,{size:20})}),n.jsxs("div",{className:"roadmap-preview-info",children:[n.jsx("h4",{children:"Graphs"}),n.jsx("span",{children:"3 problems"})]})]}),n.jsxs("div",{className:"roadmap-preview-item",style:{"--item-color":"#ef4444"},children:[n.jsx("div",{className:"roadmap-preview-icon",children:n.jsx(Og,{size:20})}),n.jsxs("div",{className:"roadmap-preview-info",children:[n.jsx("h4",{children:"Dynamic Programming"}),n.jsx("span",{children:"2 problems"})]})]}),n.jsxs("div",{className:"roadmap-preview-item",style:{"--item-color":"#84cc16"},children:[n.jsx("div",{className:"roadmap-preview-icon",children:n.jsx(Uc,{size:20})}),n.jsxs("div",{className:"roadmap-preview-info",children:[n.jsx("h4",{children:"Sorting"}),n.jsx("span",{children:"2 problems"})]})]})]}),n.jsx("div",{className:"showcase-cta",children:n.jsxs(Te,{to:"/practice",className:"btn-glow-primary",children:[n.jsx(Nr,{className:"btn-icon-left"}),n.jsx("span",{children:"Start the Roadmap"})]})})]}),n.jsxs("section",{className:"features-section-advanced",children:[n.jsxs("div",{className:"section-header-advanced",children:[n.jsx("span",{className:"section-tag",children:"Features"}),n.jsx("h2",{children:"Everything You Need"}),n.jsx("p",{children:"Built for visual learners who want to truly understand DSA"})]}),n.jsxs("div",{className:"features-grid-advanced",children:[n.jsxs("div",{className:"feature-card-advanced",children:[n.jsx("div",{className:"feature-card-bg"}),n.jsx("div",{className:"feature-icon-advanced",style:{"--icon-color":"#6366f1"},children:n.jsx(ha,{})}),n.jsx("h3",{children:"Real-Time Visualization"}),n.jsx("p",{children:"Watch data structures come alive with smooth animations that show exactly what happens during each operation."})]}),n.jsxs("div",{className:"feature-card-advanced",children:[n.jsx("div",{className:"feature-card-bg"}),n.jsx("div",{className:"feature-icon-advanced",style:{"--icon-color":"#10b981"},children:n.jsx(ml,{})}),n.jsx("h3",{children:"Built-in Code Editor"}),n.jsx("p",{children:"Write and test your solutions with a full-featured editor supporting Python, JavaScript, C++, and more."})]}),n.jsxs("div",{className:"feature-card-advanced",children:[n.jsx("div",{className:"feature-card-bg"}),n.jsx("div",{className:"feature-icon-advanced",style:{"--icon-color":"#f59e0b"},children:n.jsx(So,{})}),n.jsx("h3",{children:"Instant Feedback"}),n.jsx("p",{children:"Run your code against test cases and get immediate results. See exactly what passed and what failed."})]}),n.jsxs("div",{className:"feature-card-advanced",children:[n.jsx("div",{className:"feature-card-bg"}),n.jsx("div",{className:"feature-icon-advanced",style:{"--icon-color":"#ec4899"},children:n.jsx(gi,{})}),n.jsx("h3",{children:"Structured Learning"}),n.jsx("p",{children:"Follow a curated roadmap that builds your skills progressively from fundamentals to advanced topics."})]})]})]}),n.jsxs("section",{className:"how-it-works-section",children:[n.jsxs("div",{className:"section-header-advanced",children:[n.jsx("span",{className:"section-tag",children:"Get Started"}),n.jsx("h2",{children:"Start Learning in Seconds"}),n.jsx("p",{children:"No signup required. Just pick what you want to learn."})]}),n.jsxs("div",{className:"steps-container",children:[n.jsxs("div",{className:"step-card",children:[n.jsx("div",{className:"step-number",children:"1"}),n.jsx("h3",{children:"Choose Your Path"}),n.jsx("p",{children:"Explore visualizers to understand concepts or practice problems to test your skills"})]}),n.jsx("div",{className:"step-connector"}),n.jsxs("div",{className:"step-card",children:[n.jsx("div",{className:"step-number",children:"2"}),n.jsx("h3",{children:"Learn Interactively"}),n.jsx("p",{children:"Visualize operations step-by-step or solve coding challenges with instant feedback"})]}),n.jsx("div",{className:"step-connector"}),n.jsxs("div",{className:"step-card",children:[n.jsx("div",{className:"step-number",children:"3"}),n.jsx("h3",{children:"Track Progress"}),n.jsx("p",{children:"Complete problems, mark them as solved, and watch your skills grow"})]})]}),n.jsx("div",{className:"final-cta",children:n.jsxs(Te,{to:"/algorithms",className:"btn-glow-large",children:[n.jsx(Ae,{className:"btn-icon-left"}),n.jsx("span",{children:"Start Learning Now"})]})})]})]})}function ax(){const[e,t]=u.useState(null),r=i=>{t(e===i?null:i)},s=[{id:"linear",name:"Linear Data Structures",icon:qg,description:"Elements stored sequentially where each element has a unique predecessor and successor. These are the building blocks of computer science — simple to implement yet powerful enough to solve complex problems.",color:"#6366f1",items:[{to:"/stack",icon:Rr,title:"Stack",description:"LIFO (Last In, First Out) — imagine a stack of plates where you can only add or remove from the top. The most recent item is always accessed first. Push adds to top, Pop removes from top. Both operations are O(1) constant time. Essential for: browser back button (page history), undo/redo in editors, function call management in recursion, parsing expressions like (a+b)*c, and depth-first search algorithms.",available:!0},{to:"/queue",icon:qc,title:"Queue",description:"FIFO (First In, First Out) — like waiting in line at a coffee shop. The first person to arrive gets served first. Enqueue adds to the back, Dequeue removes from front. Both O(1) operations. Used everywhere: print job scheduling, CPU task management, breadth-first search (BFS) in graphs, handling requests in web servers, and buffering data streams like video playback.",available:!0},{to:"/linkedlist",icon:es,title:"Linked List",description:"A chain of nodes where each node stores data and a pointer to the next node. Unlike arrays, memory doesn't need to be contiguous — nodes can be scattered in memory. Insertion/deletion at known positions is O(1), but finding a position is O(n). Perfect for: implementing stacks/queues, music playlists (next/previous song), browser history, memory allocation in operating systems, and polynomial arithmetic.",available:!0}]},{id:"hash",name:"Hash-Tables",icon:xi,description:"Revolutionary data structures that use hash functions to map keys to array indices, enabling O(1) average-case lookup, insertion, and deletion. The backbone of databases, caches, and any system requiring fast key-value access.",color:"#10b981",items:[{to:"/hashtable_linear",icon:Pr,title:"Linear Probing",description:'Open addressing collision resolution: when a collision occurs (two keys hash to same index), simply check the next slot, then the next, until an empty slot is found. Pros: excellent cache performance since data is stored contiguously, simple implementation. Cons: can cause "primary clustering" where long runs of occupied slots form, degrading performance. Load factor should stay below 0.7 for efficiency.',available:!0},{to:"/hashtable_quadratic",icon:Pr,title:"Quadratic Probing",description:'Instead of checking consecutive slots, probe at quadratic intervals: 1², 2², 3²... positions away from the original hash. This eliminates primary clustering but can cause "secondary clustering" where keys with the same hash follow the same probe sequence. Table size should be prime and load factor < 0.5 to guarantee finding an empty slot. Used when cache performance is less critical than even distribution.',available:!0},{to:"/hashtable_chaining",icon:Pr,title:"Separate Chaining",description:"Each array slot holds a linked list (chain) of all entries that hash to that index. No limit on how many items can be stored — just grow the chains. Handles high load factors gracefully (even > 1.0). Simpler deletion than open addressing. Used in Java's HashMap, Python's dict (with optimization). Trade-off: extra memory for pointers, potentially poor cache performance with long chains.",available:!0}]},{id:"heaps",name:"Priority Queues & Heaps",icon:Yg,description:"Complete binary trees satisfying the heap property — either every parent ≥ children (max-heap) or every parent ≤ children (min-heap). Heaps power priority queues, enabling O(1) access to the extreme element and O(log n) insertions and deletions.",color:"#ec4899",items:[{to:"/minheap",icon:wg,title:"Min Heap",description:`Every parent node is smaller than or equal to its children, so the minimum element is always at the root — accessible in O(1). Insert and extract-min are O(log n) as elements "bubble up" or "sink down" to maintain the heap property. Critical for: Dijkstra's shortest path algorithm, Prim's minimum spanning tree, job schedulers (process with smallest priority runs next), and efficiently finding the k largest elements in a stream.`,available:!0},{to:"/maxheap",icon:Tg,title:"Max Heap",description:"The mirror of min-heap: every parent ≥ children, maximum at root. Extract-max in O(1), insert and delete in O(log n). Powers: Heapsort algorithm (in-place O(n log n) sorting), priority queues where highest priority goes first, finding k smallest elements, implementing a median-finding structure (use one min-heap + one max-heap), and bandwidth management in network routers.",available:!0}]},{id:"trees",name:"Binary Trees",icon:ex,description:"Hierarchical data structures where data flows from a root node down through children. Trees enable O(log n) operations on sorted data and model real-world hierarchies like file systems, organization charts, and decision trees in AI/ML.",color:"#f59e0b",items:[{to:"/binarytree",icon:Xt,title:"Binary Tree Traversals",description:"Master the four fundamental ways to visit every node in a binary tree: INORDER (Left→Root→Right) visits nodes in sorted order for BST, used for expression trees; PREORDER (Root→Left→Right) processes root first, perfect for copying trees or creating prefix expressions; POSTORDER (Left→Right→Root) processes children before parent, used for deleting trees or postfix notation; LEVEL-ORDER (BFS) visits level by level, used for finding shortest paths and printing tree structure.",available:!0},{to:"/bst",icon:Ag,title:"Binary Search Tree",description:`The fundamental ordered tree: every node's left subtree contains only smaller values, right subtree only larger values. This property enables O(log n) search by eliminating half the tree at each step — like binary search but in tree form. Supports efficient range queries. Caveat: can degrade to O(n) if insertions create an unbalanced "stick". Foundation for databases, symbol tables, and more advanced balanced trees.`,available:!0},{to:"/avl",icon:Xg,title:"AVL Tree",description:"The first self-balancing BST, invented in 1962. Maintains strict balance: height difference between left and right subtrees ≤ 1 at every node. When insertion/deletion violates this, the tree self-corrects using rotations (single or double). Guarantees O(log n) for all operations. More rigidly balanced than Red-Black trees, so faster lookups but slightly slower insertions. Used when reads far exceed writes.",available:!0},{to:"/splay",icon:Gg,title:"Splay Tree",description:`A self-adjusting BST with a clever optimization: every accessed node is "splayed" (rotated) to the root. No explicit balance condition, yet achieves O(log n) amortized time. Recently accessed items stay near the root — perfect for caches where some items are accessed repeatedly (temporal locality). Used in Windows NT's virtual memory management, GCC's implementation of certain data structures, and network routers.`,available:!0}]},{id:"Graphs",name:"Graphs",icon:Fg,description:"Graphs model relationships between objects using vertices (nodes) and edges (connections). They power social networks, GPS navigation, recommendation systems, and the internet itself. Understanding graphs unlocks solutions to complex real-world problems like finding shortest paths, detecting communities, and optimizing networks.",color:"#ef4444",items:[{to:"/adjacency-matrix",icon:xi,title:"Adjacency Matrix",description:"A 2D array used to represent a finite graph. Each cell at (i, j) indicates if there is an edge from vertex i to vertex j. Simple and fast for dense graphs, but uses O(V^2) space. Not practical for large, sparse graphs.",available:!0},{to:"/adjacency-list",icon:es,title:"Adjacency List",description:"A space-efficient way to represent a graph. Each vertex stores a list of adjacent vertices. Ideal for sparse graphs, supports efficient iteration over neighbors. Commonly used in network routing, social networks, and recommendation systems.",available:!0},{to:"/bfs",icon:qc,title:"Breadth-First Search (BFS)",description:"A fundamental graph traversal algorithm that explores neighbors level by level. Used for finding shortest paths in unweighted graphs, peer-to-peer networks, and web crawlers.",available:!0},{to:"/dfs",icon:Xt,title:"Depth-First Search (DFS)",description:"A classic graph traversal technique that explores as far as possible along each branch before backtracking. Used for topological sorting, cycle detection, and solving puzzles like mazes.",available:!0}]}];return n.jsxs("section",{className:"algorithms-section",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("h1",{children:"Explore Data Structures"}),n.jsx("p",{children:"Choose a category to explore different data structures. Each visualizer includes step-by-step explanations and hands-on practice."})]}),n.jsx("div",{className:"categories-container",children:s.map(i=>n.jsxs("div",{className:"category-wrapper",children:[n.jsxs("button",{className:`category-header ${e===i.id?"expanded":""}`,onClick:()=>r(i.id),style:{"--category-color":i.color},children:[n.jsx("div",{className:"category-icon",style:{background:i.color},children:n.jsx(i.icon,{})}),n.jsxs("div",{className:"category-info",children:[n.jsx("h2",{children:i.name}),n.jsx("p",{children:i.description})]}),n.jsxs("div",{className:"category-meta",children:[n.jsxs("span",{className:"item-count",children:[i.items.filter(a=>a.available).length," available"]}),e===i.id?n.jsx(zg,{}):n.jsx(Ig,{})]})]}),n.jsx("div",{className:`category-items ${e===i.id?"expanded":""}`,children:n.jsx("div",{className:"items-grid",children:i.items.map((a,l)=>a.available?n.jsxs(Te,{to:a.to,className:"algorithm-item",children:[n.jsx("div",{className:"item-icon",style:{background:i.color},children:n.jsx(a.icon,{})}),n.jsxs("div",{className:"item-info",children:[n.jsx("h3",{children:a.title}),n.jsx("p",{children:a.description})]}),n.jsx(re,{className:"item-arrow"})]},l):n.jsxs("div",{className:"algorithm-item coming-soon",children:[n.jsx("div",{className:"item-icon disabled",children:n.jsx(a.icon,{})}),n.jsxs("div",{className:"item-info",children:[n.jsx("h3",{children:a.title}),n.jsx("p",{children:a.description})]}),n.jsx("span",{className:"coming-soon-badge",children:"Coming Soon"})]},l))})})]},i.id))})]})}function lx(){return n.jsxs("section",{className:"contact-section",children:[n.jsx("div",{className:"page-header",children:n.jsx("h1",{children:"Contact"})}),n.jsx("div",{className:"contact-content",children:n.jsxs("div",{className:"contact-info",children:[n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:n.jsx(_h,{})}),n.jsx("h3",{children:"Email"}),n.jsx("p",{children:"For recruitment and professional opportunities"}),n.jsx("a",{href:"mailto:abdullahmahfouz@trentu.ca",className:"info-link",children:"abdullahmahfouz@trentu.ca"})]}),n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:n.jsx(bo,{})}),n.jsx("h3",{children:"GitHub"}),n.jsx("p",{children:"View my projects and contributions"}),n.jsx("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"info-link",children:"github.com/abdullahmahfouz"})]}),n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:n.jsx(wo,{})}),n.jsx("h3",{children:"LinkedIn"}),n.jsx("p",{children:"Connect for professional networking"}),n.jsx("a",{href:"https://www.linkedin.com/in/abdullah-mahfouz-5188b1306/",target:"_blank",rel:"noopener noreferrer",className:"info-link",children:"Connect on LinkedIn"})]})]})})]})}function ox(){return n.jsxs("section",{className:"contributions-section",children:[n.jsxs("div",{className:"page-header",children:[n.jsx("h1",{children:"Contributions"}),n.jsx("p",{children:"Help us improve this free learning tool for students! Your contributions help make DSA easier to understand for everyone."})]}),n.jsxs("div",{className:"contributions-content",children:[n.jsxs("div",{className:"contribution-card",children:[n.jsx("div",{className:"contribution-icon",children:n.jsx(qs,{})}),n.jsx("h2",{children:"Code Contributions"}),n.jsx("p",{children:"Found a bug or want to add a new feature? Fork the repository, make your changes, and submit a pull request!"}),n.jsxs("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"btn-primary",children:[n.jsx("span",{children:"View on GitHub"}),n.jsx(re,{})]})]}),n.jsxs("div",{className:"contribution-card",children:[n.jsx("div",{className:"contribution-icon",children:n.jsx(gi,{})}),n.jsx("h2",{children:"Documentation"}),n.jsx("p",{children:"Help improve our documentation, fix typos, or add examples. Every bit helps!"}),n.jsxs("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"btn-primary",children:[n.jsx("span",{children:"Improve Docs"}),n.jsx(re,{})]})]}),n.jsxs("div",{className:"contribution-card",children:[n.jsx("div",{className:"contribution-icon",children:n.jsx(Pg,{})}),n.jsx("h2",{children:"Report Issues"}),n.jsx("p",{children:"Found a bug or have a suggestion? Open an issue on GitHub and let us know!"}),n.jsxs("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"btn-primary",children:[n.jsx("span",{children:"Report Issue"}),n.jsx(re,{})]})]}),n.jsxs("div",{className:"contribution-card",children:[n.jsx("div",{className:"contribution-icon",children:n.jsx(xe,{})}),n.jsx("h2",{children:"Feature Requests"}),n.jsx("p",{children:"Have an idea for a new visualizer or feature? We'd love to hear your suggestions!"}),n.jsxs(Te,{to:"/contact",className:"btn-primary",children:[n.jsx("span",{children:"Suggest Feature"}),n.jsx(re,{})]})]})]}),n.jsxs("div",{className:"contributors-section",children:[n.jsx("h2",{children:"Contributors"}),n.jsx("div",{className:"contributors-list",children:n.jsxs("div",{className:"contributor-item",children:[n.jsx("div",{className:"contributor-avatar",children:n.jsx(tx,{})}),n.jsxs("div",{className:"contributor-info",children:[n.jsx("h3",{children:"Abdullah Mahfouz"}),n.jsx("p",{children:"Creator & Maintainer"})]})]})}),n.jsx("p",{className:"contributors-note",children:"Want to see your name here? Start contributing today!"})]})]})}function ve({context:e="Data Structures"}){const[t,r]=u.useState(""),[s,i]=u.useState(""),[a,l]=u.useState(!1),o=()=>{const d=e.toLowerCase();return d.includes("stack")?"e.g., How does LIFO work?":d.includes("queue")?"e.g., What is FIFO?":d.includes("linked list")?"e.g., How do I insert at the head?":d.includes("hash")?"e.g., What is a collision?":d.includes("binary tree")||d.includes("traversal")?"e.g., What is inorder traversal?":"e.g., How does this work?"},c=async()=>{if(t.trim()){l(!0),i("");try{const d=await fetch("/api/ask-ai",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:t.trim(),code:e})}),p=await d.json();d.ok?i(p.answer||"No answer returned."):i("Currently not working, try again later.")}catch{i("Currently not working, try again later.")}finally{l(!1)}}},h=d=>{d.key==="Enter"&&c()};return n.jsxs("div",{className:"ai-assistant",children:[n.jsxs("h3",{children:[n.jsx(_g,{}),"AI Assistant"]}),n.jsxs("p",{children:["Ask me anything about ",e.toLowerCase(),"!"]}),n.jsxs("div",{className:"ai-input-group",children:[n.jsx("input",{type:"text",value:t,onChange:d=>r(d.target.value),onKeyPress:h,placeholder:o(),disabled:a}),n.jsx("button",{onClick:c,disabled:a,children:a?"Asking...":"Ask"})]}),n.jsxs("div",{id:"ai-response",children:[a&&n.jsx("div",{className:"ai-loading",children:"Thinking..."}),s&&n.jsx("div",{className:s.startsWith("Error")?"ai-error":"ai-answer",children:s})]})]})}const cx=`class Stack:
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
print(stack.peek())  # 20`,dx=`class Stack {
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
console.log(stack.pop()); // 20`,ux=`import java.util.EmptyStackException;

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
System.out.println(stack.pop()); // 20`,hx={python:cx,javascript:dx,java:ux,"c++":`#include <iostream>
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
Console.WriteLine(stack.Pop()); // 20`},px=`class Queue:
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
print(queue.peek())     # 20`,fx=`class Queue {
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
console.log(queue.dequeue()); // 10`,mx=`import java.util.NoSuchElementException;

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
System.out.println(queue.dequeue()); // 10`,gx={python:px,javascript:fx,java:mx,"c++":`#include <iostream>
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
Console.WriteLine(queue.Dequeue()); // 10`},xx=`class Node:
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
print(ll.search(20))  # 1`,vx=`class Node {
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
ll.insertAtTail(30);`,yx=`public class SinglyLinkedList<T> {
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
ll.insertAtTail(30);`,jx={python:xx,javascript:vx,java:yx,"c++":`#include <iostream>
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
ll.InsertAtTail(30);`},Nx=`class TreeNode:
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
print("Level:     ", tree.levelorder_traversal())  # [50, 30, 70, 20, 40, 60, 80]`,kx=`class TreeNode {
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
console.log("Level:    ", tree.levelOrderTraversal());  // [50, 30, 70, 20, 40, 60, 80]`,bx=`import java.util.*;

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
System.out.println("Level:     " + tree.levelOrderTraversal());`,wx={python:Nx,javascript:kx,java:bx,"c++":`#include <iostream>
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
Console.WriteLine("Level:     " + string.Join(", ", tree.LevelOrderTraversal()));`},Sx=`class HashTable:
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
print(ht.get("banana"))  # 3`,Cx=`class HashTable {
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
console.log(ht.get("apple"));  // 5`,Tx=`public class HashTable<K, V> {
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
System.out.println(ht.get("apple")); // 5`,Ex={python:Sx,javascript:Cx,java:Tx,"c++":`#include <iostream>
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
Console.WriteLine(ht.Get("apple")); // 5`},_x=`class Node:
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
ht.delete("banana")`,Lx=`class Node {
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
console.log(ht.search("apple"));  // 5`,Ox=`public class HashTableChaining<K, V> {
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
System.out.println(ht.search("apple"));  // 5`,Px={python:_x,javascript:Lx,java:Ox,"c++":`#include <iostream>
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
Console.WriteLine(ht.Search("apple"));  // 5`},Rx=`class TreeNode:
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
print("After delete 30:", bst.inorder())  # [20, 40, 50, 60, 70, 80]`,Ix=`class TreeNode {
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
console.log("After delete 30:", bst.inorder());  // [20, 40, 50, 60, 70, 80]`,zx=`import java.util.*;

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
System.out.println("After delete: " + bst.inorder());  // [20, 40, 50, 60, 70, 80]`,Mx={python:Rx,javascript:Ix,java:zx,"c++":`#include <iostream>
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
Console.WriteLine("After delete: " + string.Join(", ", bst.Inorder()));`},Ax=`class AVLNode:
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
# Tree automatically balances after each insert!`,Fx=`class AVLNode {
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
[30, 20, 40, 10, 25, 35, 50].forEach(v => avl.insert(v));`,Vx=`class AVLNode {
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
for (int v : new int[]{30, 20, 40, 10, 25}) avl.insert(v);`,Dx={python:Ax,javascript:Fx,java:Vx,"c++":`#include <algorithm>
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

// Usage: var avl = new AVLTree(); foreach(var v in new[]{30,20,40}) avl.Insert(v);`},$x=`class SplayNode:
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
print("Root:", splay.root.key)  # 20`,Bx=`class SplayNode {
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
splay.search(20); // 20 moves to root`,Hx=`class SplayNode {
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
st.search(20); // 20 is now root`,qx={python:$x,javascript:Bx,java:Hx,"c++":`struct SplayNode {
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

// Usage: var st = new SplayTree(); foreach(var v in new[]{50,30,70}) st.Insert(v);`},Ux=`class MinHeap:
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
print("New min:", heap.peek())  # 2`,Kx=`class MinHeap {
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
console.log("Extract:", heap.extractMin());  // 1`,Wx=`import java.util.*;

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
System.out.println("Min: " + heap.peek());  // 1`,Gx={python:Ux,javascript:Kx,java:Wx,"c++":`#include <vector>
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

// Usage: var h = new MinHeap(); foreach(var v in new[]{5,3,8,1}) h.Insert(v);`},Qx=`class MaxHeap:
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
print("New max:", heap.peek())  # 8`,Yx=`class MaxHeap {
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
console.log("Extract:", heap.extractMax());  // 9`,Xx=`import java.util.*;

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
System.out.println("Max: " + heap.peek());  // 9`,Jx={python:Qx,javascript:Yx,java:Xx,"c++":`#include <vector>
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

// Usage: var h = new MaxHeap(); foreach(var v in new[]{5,3,8,9}) h.Insert(v);`},Zx=`from collections import defaultdict

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
print(g.get_neighbors('A'))  # [('B', 1), ('C', 1)]`,ev=`class Graph {
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
console.log(g.getNeighbors('A'));`,nv=`import java.util.*;

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
g.addEdge("A", "C");`,tv={python:Zx,javascript:ev,java:nv,"c++":`#include <iostream>
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
g.AddEdge("A", "C");`},rv=`from collections import deque

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

print(bfs(graph, 'A'))  # ['A', 'B', 'C', 'D', 'E', 'F']`,sv=`function bfs(graph, start) {
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

console.log(bfs(graph, 'A')); // ['A', 'B', 'C', 'D', 'E', 'F']`,iv=`import java.util.*;

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
}`,av={python:rv,javascript:sv,java:iv,"c++":`#include <iostream>
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
}`},lv=`def dfs(graph, start):
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

print(dfs(graph, 'A'))  # ['A', 'B', 'D', 'E', 'F', 'C']`,ov=`function dfs(graph, start) {
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

console.log(dfs(graph, 'A'));`,cv=`import java.util.*;

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
}`,dv={python:lv,javascript:ov,java:cv,"c++":`#include <iostream>
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
}`},pa={stack:hx,queue:gx,linkedlist:jx,binarytree:wx,hashtable:Ex,hashtableChaining:Px,bst:Mx,avl:Dx,splay:qx,minheap:Gx,maxheap:Jx,graph:tv,bfs:av,dfs:dv};function ye({dataStructure:e}){var p;const[t,r]=u.useState("python"),[s,i]=u.useState(!1),a=["python","javascript","java","c++","c#"],l=a.filter(m=>{var S;return(S=pa[e])==null?void 0:S[m]}),o=l.length>0?l:a,c=((p=pa[e])==null?void 0:p[t])||"Code not available for this data structure";u.useEffect(()=>{var m;!((m=pa[e])!=null&&m[t])&&l.length>0&&r(l[0])},[e,t,l]);const h=m=>({python:"Python",javascript:"JavaScript",java:"Java","c++":"C++","c#":"C#"})[m]||m,d=()=>{navigator.clipboard.writeText(c),i(!0),setTimeout(()=>i(!1),2e3)};return n.jsxs("div",{className:"code-section",children:[n.jsxs("h2",{children:[n.jsx(Kc,{})," Implementation"]}),n.jsx("div",{className:"code-tabs",children:o.map(m=>n.jsxs("button",{className:`tab-btn ${t===m?"active":""}`,onClick:()=>r(m),children:[n.jsx(Kc,{}),h(m)]},m))}),n.jsx("div",{className:"code-panels",children:n.jsx("div",{className:"code-panel active",children:n.jsxs("pre",{children:[n.jsxs("button",{className:"copy-btn",onClick:d,children:[n.jsx(Eh,{})," ",s?"Copied!":"Copy"]}),n.jsx("code",{children:c})]})})})]})}function Be({message:e}){if(!(e!=null&&e.text))return null;const t=e.type||"info";return n.jsx("div",{className:`message message-${t}`,children:e.text})}async function ae(e){return await(await fetch(e)).json()}async function ee(e,t){return await(await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()}async function yi(e,t=null){const r={method:"DELETE",headers:{"Content-Type":"application/json"}};return t&&(r.body=JSON.stringify(t)),await(await fetch(e,r)).json()}function He(e=3e3){const[t,r]=u.useState(null),s=u.useRef(null),i=u.useCallback(()=>{r(null),s.current&&(clearTimeout(s.current),s.current=null)},[]),a=u.useCallback((l,o="info")=>{r({text:l,type:o}),s.current&&clearTimeout(s.current),s.current=setTimeout(()=>{r(null),s.current=null},e)},[e]);return u.useEffect(()=>i,[i]),{message:t,showMessage:a,clearMessage:i}}function uv(){const[e,t]=u.useState([]),[r,s]=u.useState(0),[i,a]=u.useState("Empty"),[l]=u.useState(10),{message:o,showMessage:c}=He(3e3),[h,d]=u.useState("");u.useEffect(()=>{p()},[]);const p=async()=>{try{const f=await ae("/api/stack");t(f.items||[]),s(f.size||0),a(f.top!==null&&f.top!==void 0?f.top:"Empty")}catch(f){console.error("Error loading stack:",f)}},m=async()=>{if(!h||h.trim()===""){c("Please enter a number!","error");return}const f=Number(h);if(isNaN(f)){c("Please enter a valid number!","error");return}try{const g=await ee("/api/stack/push",{value:f});if(g.error){c(g.error,"error");return}t(g.items||[]),s(g.size||0),a(g.top!==null&&g.top!==void 0?g.top:"Empty"),c(`Pushed ${f} to stack!`,"success"),d("")}catch(g){console.error("Push error:",g),c("Error pushing to stack. Is Flask running?","error")}},S=async()=>{try{const f=await ee("/api/stack/pop",{});if(f.error){c(f.error,"error");return}t(f.items||[]),s(f.size||0),a(f.top!==null&&f.top!==void 0?f.top:"Empty"),c(`Popped ${f.popped} from stack!`,"success")}catch{c("Error popping from stack","error")}},w=async()=>{try{const f=await ae("/api/stack/peek");if(f.error){c(f.error,"error");return}c(`Top element is: ${f.top}`,"info")}catch{c("Error peeking stack","error")}},j=async()=>{try{await ee("/api/stack/clear",{}),t([]),s(0),a("Empty"),c("Stack cleared!","success")}catch{c("Error clearing stack","error")}},y=f=>{f.key==="Enter"&&m()};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Oe,{className:"icon-sm"}),n.jsx("span",{children:"What is a Stack?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["A ",n.jsx("strong",{children:"Stack"})," is a linear data structure that follows the ",n.jsx("strong",{children:"LIFO"})," (Last In, First Out) principle."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(xe,{}),n.jsxs("span",{children:["Think of a stack of plates - you can only add or remove from the ",n.jsx("strong",{children:"top"}),"!"]})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Push"}),n.jsx("span",{className:"op-desc",children:"Add to top"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Pop"}),n.jsx("span",{className:"op-desc",children:"Remove from top"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Peek"}),n.jsx("span",{className:"op-desc",children:"View top element"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"Common Uses:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Browser back/forward buttons"}),n.jsx("li",{children:"Undo/Redo functionality"}),n.jsx("li",{children:"Function call stack"}),n.jsx("li",{children:"Expression evaluation"})]})]})]})]}),n.jsx(ve,{context:"Stack data structure"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Stack Operations"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"pushValue",children:"Push (Add to top)"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"pushValue",value:h,onChange:f=>d(f.target.value),onKeyPress:y,placeholder:"Enter a value"}),n.jsx("button",{onClick:m,className:"btn btn-push",children:"Push"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Other Operations"}),n.jsxs("div",{className:"btn-group",children:[n.jsx("button",{onClick:S,className:"btn btn-pop",children:"Pop"}),n.jsx("button",{onClick:w,className:"btn btn-peek",children:"Peek"}),n.jsx("button",{onClick:j,className:"btn btn-clear",children:"Clear"})]})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Size:"}),n.jsx("span",{className:"info-value",children:r})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Top:"}),n.jsx("span",{className:"info-value",children:i})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Max Size:"}),n.jsx("span",{className:"info-value",children:l})]})]}),n.jsx(Be,{message:o})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Stack Visualization"}),n.jsxs("div",{className:"stack-container",children:[n.jsx("div",{className:"stack-visual",children:e.length===0?n.jsx("div",{className:"stack-empty",children:"Stack is empty. Push some items!"}):e.slice().reverse().map((f,g)=>n.jsx("div",{className:"stack-item",children:f},g))}),n.jsx("div",{className:"stack-base",children:n.jsx("span",{children:"BOTTOM"})})]})]})]}),n.jsx(ye,{dataStructure:"stack"})]})}function hv(){const[e,t]=u.useState([]),[r,s]=u.useState(0),[i,a]=u.useState("Empty"),[l]=u.useState(10),{message:o,showMessage:c}=He(3e3),[h,d]=u.useState("");u.useEffect(()=>{p()},[]);const p=async()=>{try{const y=await ae("/api/queue");t(y.items||[]),s(y.size||0),a(y.front!==null&&y.front!==void 0?y.front:"Empty")}catch(y){console.error("Error loading queue:",y)}},m=async()=>{if(!h||h.trim()===""){c("Please enter a number!","error");return}const y=Number(h);if(isNaN(y)){c("Please enter a valid number!","error");return}try{const f=await ee("/api/queue/enqueue",{value:y});if(f.error){c(f.error,"error");return}t(f.items||[]),s(f.size||0),a(f.front!==null&&f.front!==void 0?f.front:"Empty"),c(`Enqueued ${y}!`,"success"),d("")}catch(f){console.error("Enqueue error:",f),c("Error enqueueing. Is Flask running?","error")}},S=async()=>{try{const y=await ee("/api/queue/dequeue",{});if(y.error){c(y.error,"error");return}t(y.items||[]),s(y.size||0),a(y.front!==null&&y.front!==void 0?y.front:"Empty"),c(`Dequeued ${y.dequeued} from queue!`,"success")}catch{c("Error dequeuing from queue","error")}},w=async()=>{try{const y=await ae("/api/queue/peek");if(y.error){c(y.error,"error");return}c(`Front element is: ${y.front}`,"info")}catch{c("Error peeking queue","error")}},j=async()=>{try{await ee("/api/queue/clear",{}),t([]),s(0),a("Empty"),c("Queue cleared!","success")}catch{c("Error clearing queue","error")}};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Oe,{className:"icon-sm"}),n.jsx("span",{children:"What is a Queue?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["A ",n.jsx("strong",{children:"Queue"})," is a linear data structure that follows the ",n.jsx("strong",{children:"FIFO"})," (First In, First Out) principle."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(xe,{}),n.jsxs("span",{children:["Think of a line at a store – the first person in line gets served ",n.jsx("strong",{children:"first"}),"!"]})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Enqueue"}),n.jsx("span",{className:"op-desc",children:"Add to the back"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Dequeue"}),n.jsx("span",{className:"op-desc",children:"Remove from the front"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Peek"}),n.jsx("span",{className:"op-desc",children:"View the front element"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]})]})]})]}),n.jsx(ve,{context:"Queue data structure"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Queue Operations"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"enqueueValue",children:"Enqueue (Add to back)"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"enqueueValue",value:h,onChange:y=>d(y.target.value),onKeyPress:y=>y.key==="Enter"&&m(),placeholder:"Enter a value"}),n.jsx("button",{onClick:m,className:"btn btn-enqueue",children:"Enqueue"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Other Operations"}),n.jsxs("div",{className:"btn-group",children:[n.jsx("button",{onClick:S,className:"btn btn-dequeue",children:"Dequeue"}),n.jsx("button",{onClick:w,className:"btn btn-peek",children:"Peek"}),n.jsx("button",{onClick:j,className:"btn btn-clear",children:"Clear"})]})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Size:"}),n.jsx("span",{className:"info-value",children:r})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Front:"}),n.jsx("span",{className:"info-value",children:i})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Max Size:"}),n.jsx("span",{className:"info-value",children:l})]})]}),n.jsx(Be,{message:o})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Queue Visualization"}),n.jsxs("div",{className:"queue-container",children:[n.jsx("div",{className:"queue-label",children:n.jsx("span",{className:"front-marker",children:"FRONT →"})}),n.jsx("div",{className:"queue-visual",children:e.length===0?n.jsx("div",{className:"queue-empty",children:"Queue is empty. Enqueue some items!"}):e.map((y,f)=>{const g=f===0,x=f===e.length-1;return n.jsxs("div",{className:`queue-item ${g?"queue-front":""} ${x?"queue-back":""}`,children:[g&&n.jsx("span",{className:"front-label",children:"FRONT"}),y,x&&n.jsx("span",{className:"back-label",children:"BACK"})]},f)})}),n.jsx("div",{className:"queue-label",children:n.jsx("span",{className:"back-marker",children:"← BACK"})})]})]})]}),n.jsx(ye,{dataStructure:"queue"})]})}function pv(){const[e,t]=u.useState([]),[r,s]=u.useState(0),[i,a]=u.useState("Empty"),{message:l,showMessage:o}=He(3e3),[c,h]=u.useState(""),[d,p]=u.useState(""),[m,S]=u.useState(""),[w,j]=u.useState(""),[y,f]=u.useState(""),[g,x]=u.useState("");u.useEffect(()=>{P()},[]);const P=async()=>{try{const I=await ae("/api/linkedlist");t(I.items||[]),s(I.size||0),a(I.head!==null&&I.head!==void 0?I.head:"Empty")}catch(I){console.error("Error loading linked list:",I)}},N=async()=>{if(!c||c.trim()===""){o("Please enter a number!","error");return}const I=Number(c);if(isNaN(I)){o("Please enter a valid number!","error");return}try{const H=await ee("/api/linkedlist/insert/head",{value:I});if(H.error){o(H.error,"error");return}t(H.items||[]),s(H.size||0),a(H.head!==null&&H.head!==void 0?H.head:"Empty"),o(`Inserted ${I} at head!`,"success"),h("")}catch(H){console.error("Insert error:",H),o("Error inserting. Is Flask running?","error")}},A=async()=>{if(!d||d.trim()===""){o("Please enter a number!","error");return}const I=Number(d);if(isNaN(I)){o("Please enter a valid number!","error");return}try{const H=await ee("/api/linkedlist/insert/tail",{value:I});if(H.error){o(H.error,"error");return}t(H.items||[]),s(H.size||0),a(H.head!==null&&H.head!==void 0?H.head:"Empty"),o(`Inserted ${I} at tail!`,"success"),p("")}catch(H){console.error("Insert error:",H),o("Error inserting. Is Flask running?","error")}},E=async()=>{try{const I=await ee("/api/linkedlist/delete/head",{});if(I.error){o(I.error,"error");return}t(I.items||[]),s(I.size||0),a(I.head!==null&&I.head!==void 0?I.head:"Empty"),o("Deleted head!","success")}catch{o("Error deleting head","error")}},V=async()=>{try{const I=await ee("/api/linkedlist/delete/tail",{});if(I.error){o(I.error,"error");return}t(I.items||[]),s(I.size||0),a(I.head!==null&&I.head!==void 0?I.head:"Empty"),o("Deleted tail!","success")}catch{o("Error deleting tail","error")}},F=async()=>{try{await ee("/api/linkedlist/clear",{}),t([]),s(0),a("Empty"),o("List cleared!","success")}catch{o("Error clearing list","error")}};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Oe,{className:"icon-sm"}),n.jsx("span",{children:"What is a Singly Linked List?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["A ",n.jsx("strong",{children:"Singly Linked List"})," is a linear data structure where each element contains data and a pointer to the next node."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(xe,{}),n.jsxs("span",{children:["Think of a treasure hunt – each clue points to the ",n.jsx("strong",{children:"next location"}),"!"]})]})]})]}),n.jsx(ve,{context:"Singly Linked List data structure"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Linked List Operations"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertHeadValue",children:"Insert at Head"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"insertHeadValue",value:c,onChange:I=>h(I.target.value),onKeyPress:I=>I.key==="Enter"&&N(),placeholder:"Enter a value"}),n.jsx("button",{onClick:N,className:"btn btn-insert",children:"Insert Head"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertTailValue",children:"Insert at Tail"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"insertTailValue",value:d,onChange:I=>p(I.target.value),onKeyPress:I=>I.key==="Enter"&&A(),placeholder:"Enter a value"}),n.jsx("button",{onClick:A,className:"btn btn-insert",children:"Insert Tail"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Delete Operations"}),n.jsxs("div",{className:"btn-group",children:[n.jsx("button",{onClick:E,className:"btn btn-delete",children:"Delete Head"}),n.jsx("button",{onClick:V,className:"btn btn-delete",children:"Delete Tail"})]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:F,className:"btn btn-clear full-width",children:"Clear All"})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Size:"}),n.jsx("span",{className:"info-value",children:r})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Head:"}),n.jsx("span",{className:"info-value",children:i})]})]}),n.jsx(Be,{message:l})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Linked List Visualization"}),n.jsx("div",{className:"linkedlist-container",children:n.jsx("div",{className:"linkedlist-visual",children:e.length===0?n.jsx("div",{className:"linkedlist-empty",children:"List is empty. Insert some nodes!"}):e.map((I,H)=>n.jsx(Je.Fragment,{children:n.jsxs("div",{className:"linkedlist-node",children:[n.jsx("div",{className:"node-value",children:I}),H<e.length-1&&n.jsx("div",{className:"node-arrow",children:"→"})]})},H))})})]})]}),n.jsx(ye,{dataStructure:"linkedlist"})]})}function fv(){const[e,t]=u.useState([]),[r,s]=u.useState(0),[i,a]=u.useState(0),[l,o]=u.useState(0),[c,h]=u.useState(0),{message:d,showMessage:p}=He(3e3),[m,S]=u.useState(""),[w,j]=u.useState(""),[y,f]=u.useState(""),[g,x]=u.useState(""),[P,N]=u.useState(null),[A,E]=u.useState([]),[V,F]=u.useState(null),[I,H]=u.useState(null);u.useEffect(()=>{K()},[]);const K=async()=>{try{const _=await ae("/api/hashtable");t(_.table||[]),s(_.size||0),a(_.capacity||0),o(_.load_factor||0),h(_.collision_count||0)}catch(_){console.error("Error loading hashtable:",_)}},D=_=>{if(!i||i===0)return 0;let b=0;for(let C=0;C<_.length;C++)b=(b*31+_.charCodeAt(C))%i;return b},q=(_,b)=>{const C=D(_),M=[C];let L=C;for(;b[L]&&b[L][0]!==_&&(L=(L+1)%i,M.push(L),!(L===C||M.length>i)););return{originalHash:C,path:M,finalSlot:L}},k=async()=>{if(!m.trim()||!w.trim()){p("Please enter both key and value!","error");return}const _=i>0?D(m.trim()):0,b=e.length>0&&e[_]&&e[_][0]!==m.trim();let C=null;b&&(C=q(m.trim(),e));try{const M=await ee("/api/hashtable/insert",{key:m.trim(),value:w.trim()});if(M.error){p(M.error,"error");return}await K(),F(m.trim()),b&&C?(H({key:m.trim(),originalSlot:C.originalHash,probedSlots:C.path,finalSlot:C.path[C.path.length-1]}),E(C.path),p(`Collision! "${m}" hashed to ${C.originalHash}, probed ${C.path.length} slot(s)`,"warning"),setTimeout(()=>{E([]),H(null)},4e3)):(p(`Inserted "${m}" → slot ${_}`,"success"),N(_),setTimeout(()=>N(null),2e3)),S(""),j(""),setTimeout(()=>F(null),3e3)}catch{p("Error inserting. Is Flask running?","error")}},z=async()=>{if(!y.trim()){p("Please enter a key!","error");return}try{const _=await ee("/api/hashtable/delete",{key:y.trim()});if(_.error){p(_.error,"error");return}await K(),p(`Deleted "${y}"`,"success"),f("")}catch{p("Error deleting. Is Flask running?","error")}},B=async()=>{if(!g.trim()){p("Please enter a key!","error");return}try{const _=await ae(`/api/hashtable/get?key=${encodeURIComponent(g.trim())}`);if(_.error){p(_.error,"error");return}_.found?p(`Found: "${g}" = ${_.value}`,"success"):p(`Key "${g}" not found`,"error"),x("")}catch{p("Error searching item","error")}},T=async()=>{try{await ee("/api/hashtable/clear",{}),await K(),E([]),H(null),p("Hashtable cleared!","success")}catch{p("Error clearing hashtable","error")}};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"intro-left",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Oe,{className:"icon-sm"}),n.jsx("span",{children:"What is a Hash Table?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["A ",n.jsx("strong",{children:"Hash Table"})," maps keys to values using a hash function for O(1) lookups."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(xe,{}),n.jsxs("span",{children:["Like a ",n.jsx("strong",{children:"coat check"})," – give them your coat (value), get a ticket number (hash of key)!"]})]})]})]}),n.jsxs("div",{className:"concept-box",style:{marginTop:"1rem"},children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(On,{className:"icon-sm",style:{color:"#f59e0b"}}),n.jsx("span",{children:"Linear Probing"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["When two keys hash to the same slot (",n.jsx("strong",{children:"collision"}),"), we check the next slot until we find an empty one."]}),n.jsxs("div",{className:"concept-analogy",style:{marginTop:"0.5rem"},children:[n.jsx(Bn,{style:{color:"#3b82f6"}}),n.jsx("span",{children:"Like parking – if spot 3 is taken, try spot 4, then 5..."})]})]})]})]}),n.jsx(ve,{context:"Hash Table with Linear Probing"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Operations"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Insert Key-Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",value:m,onChange:_=>S(_.target.value),placeholder:"Key"}),n.jsx("input",{type:"text",value:w,onChange:_=>j(_.target.value),onKeyPress:_=>_.key==="Enter"&&k(),placeholder:"Value"}),n.jsx("button",{onClick:k,className:"btn btn-insert",children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Delete Key"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",value:y,onChange:_=>f(_.target.value),onKeyPress:_=>_.key==="Enter"&&z(),placeholder:"Key"}),n.jsx("button",{onClick:z,className:"btn btn-delete",children:"Delete"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Search Key"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",value:g,onChange:_=>x(_.target.value),onKeyPress:_=>_.key==="Enter"&&B(),placeholder:"Key"}),n.jsx("button",{onClick:B,className:"btn btn-search",children:"Search"})]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:T,className:"btn btn-clear",children:"Clear Table"})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Items"}),n.jsxs("span",{className:"info-value",children:[r,"/",i]})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Load"}),n.jsxs("span",{className:"info-value",style:{color:l>=.7?"#f59e0b":"inherit"},children:[(l*100).toFixed(0),"%"]})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Collisions"}),n.jsx("span",{className:"info-value",style:{color:c>0?"#f59e0b":"inherit"},children:c})]})]}),n.jsxs("div",{className:"rehash-info-box",children:[n.jsx(Lh,{size:16}),n.jsxs("div",{children:[n.jsx("strong",{children:"Rehashing Threshold: 70%"}),n.jsx("p",{children:"In practice, hash tables rehash (double capacity) when load factor reaches ~0.7 to maintain O(1) performance."}),l>=.7?n.jsxs("span",{className:"rehash-warning",children:["Current load (",(l*100).toFixed(0),"%) exceeds threshold!"]}):n.jsxs("span",{className:"rehash-safe",children:["Currently safe (",(l*100).toFixed(0),"% < 70%)"]})]})]}),n.jsx(Be,{message:d})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Hash Table"}),m&&n.jsxs("div",{className:"hash-demo",children:[n.jsxs("div",{className:"hash-demo-item",children:[n.jsx("span",{className:"hash-demo-label",children:"Key:"}),n.jsxs("span",{className:"hash-demo-key",children:['"',m,'"']})]}),n.jsx(re,{className:"hash-demo-arrow"}),n.jsx("div",{className:"hash-demo-item",children:n.jsx("span",{className:"hash-demo-label",children:"hash()"})}),n.jsx(re,{className:"hash-demo-arrow"}),n.jsxs("div",{className:"hash-demo-item",children:[n.jsx("span",{className:"hash-demo-label",children:"Slot:"}),n.jsx("span",{className:"hash-demo-index",children:D(m)})]})]}),I&&n.jsxs("div",{className:"collision-banner",children:[n.jsx(On,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Collision Detected!"}),n.jsxs("p",{children:['"',I.key,'" hashed to slot ',n.jsx("span",{className:"slot-badge original",children:I.originalSlot}),I.probedSlots.length>1&&n.jsxs(n.Fragment,{children:[" ","- Probed: ",I.probedSlots.map((_,b)=>n.jsxs("span",{children:[n.jsx("span",{className:`slot-badge ${b===I.probedSlots.length-1?"final":"probed"}`,children:_}),b<I.probedSlots.length-1&&" > "]},b))]})]})]})]}),n.jsx("div",{className:"ht-visual",children:!e||e.length===0?n.jsx("div",{className:"ht-empty",children:"Hash table is empty. Insert some key-value pairs!"}):n.jsx("div",{className:"ht-buckets",children:e.map((_,b)=>{const C=A.includes(b),M=I&&I.originalSlot===b,L=I&&I.finalSlot===b;return n.jsxs("div",{className:`ht-row ${_?"filled":"empty"} 
                        ${P===b?"highlighted":""} 
                        ${V&&_&&_[0]===V?"just-inserted":""}
                        ${C?"probed":""}
                        ${M?"original-hash":""}
                        ${L?"final-slot":""}`,children:[C&&n.jsx("div",{className:"probe-indicator",children:M?"X":L?"O":">"}),n.jsx("div",{className:`ht-key-box ${_?"has-key":""}`,children:_&&n.jsx("span",{className:"ht-key",children:_[0]})}),n.jsx("div",{className:"ht-arrow",children:_&&n.jsx(re,{size:20})}),n.jsx("div",{className:`ht-index ${M?"collision-index":""}`,children:b}),n.jsx("div",{className:`ht-value-box ${_?"has-value":""}`,children:_?n.jsx("span",{className:"ht-value",children:_[1]}):n.jsx("span",{className:"ht-empty-slot",children:"—"})})]},b)})})}),n.jsxs("div",{className:"ht-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color key-color"}),n.jsx("span",{children:"Key"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color index-color"}),n.jsx("span",{children:"Index"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color value-color"}),n.jsx("span",{children:"Value"})]}),A.length>0&&n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color probe-color"}),n.jsx("span",{children:"Probing Path"})]})]})]})]}),n.jsx(ye,{dataStructure:"hashtable"})]})}const mv={title:"What is Chaining?",description:"Chaining handles collisions by storing multiple key-value pairs in a linked list at each slot.",codeExample:"slot[hash] → [key1, val1] → [key2, val2] → ...",analogy:"Like a coat rack - multiple coats can hang on the same hook!"},gv={title:"Chaining vs Probing",chaining:{label:"Chaining:",color:"#22c55e",points:["Uses linked lists","Load factor can exceed 1.0"]},probing:{label:"Probing:",color:"#f59e0b",points:["Finds next empty slot","Load factor must stay below 1.0"]},summary:"Chaining is simpler and handles high load factors better, but uses extra memory for pointers."},xv={title:"Chaining Advantage",description:"With chaining, load factor can exceed 1.0 because each slot can hold multiple items in a chain.",highLoadThreshold:1.5,highLoadMessage:"High load ({loadFactor}) - chains getting long!",safeMessage:"Load factor: {loadFactor}"},vv={title:"Rehash Table",description:"Doubles the table capacity and redistributes all items to reduce chain lengths.",buttonText:"Rehash",recommendThreshold:1.5},yv=[{type:"color",className:"key-color",label:"Key"},{type:"color",className:"index-color",label:"Index"},{type:"color",className:"value-color",label:"Value"},{type:"icon",icon:"Link",color:"#8b5cf6",label:"Chain (Linked List)"}],jv={insert:{label:"Insert Key-Value",keyPlaceholder:"Key",valuePlaceholder:"Value",buttonText:"Insert"},delete:{label:"Delete Key",placeholder:"Key",buttonText:"Delete"},search:{label:"Search Key",placeholder:"Key",buttonText:"Search"},clear:{buttonText:"Clear Table"},rehash:{buttonText:"Rehash"}},Nv={items:"Items",capacity:"Capacity",load:"Load",collisions:"Collisions"},kv={emptyTable:"Hash table is empty. Insert some key-value pairs!",insertSuccess:'Inserted "{key}" at slot {index}',insertUpdated:'Updated "{key}" at slot {index}',insertCollision:'Collision! Added "{key}" to chain at slot {index}',deleteSuccess:'Deleted "{key}"',searchFound:'Found: "{key}" = {value}',searchNotFound:'Key "{key}" not found',clearSuccess:"Hashtable cleared!",rehashSuccess:"Rehashed! Capacity: {oldCapacity} -> {newCapacity}",rehashEmpty:"Nothing to rehash - table is empty!",errorNoKey:"Please enter a key!",errorNoKeyValue:"Please enter both key and value!",errorInsert:"Error inserting. Is Flask running?",errorDelete:"Error deleting. Is Flask running?",errorSearch:"Error searching item",errorClear:"Error clearing hashtable",errorRehash:"Error rehashing. Is Flask running?"},X={concept:mv,comparison:gv,chainingAdvantage:xv,rehash:vv,legend:yv,operations:jv,infoLabels:Nv,messages:kv};function bv(){const[e,t]=u.useState([]),[r,s]=u.useState(0),[i,a]=u.useState(0),[l,o]=u.useState(0),[c,h]=u.useState(0),{message:d,showMessage:p}=He(3e3),[m,S]=u.useState(""),[w,j]=u.useState(""),[y,f]=u.useState(""),[g,x]=u.useState(""),[P,N]=u.useState(null),[A,E]=u.useState(null),[V,F]=u.useState(!1);u.useEffect(()=>{I()},[]);const I=async()=>{try{const z=await ae("/api/hashtable_chaining");t(z.table||[]),s(z.size||0),a(z.capacity||0),o(z.load_factor||0),h(z.collision_count||0)}catch(z){console.error("Error loading hashtable:",z)}},H=z=>{if(!i||i===0)return 0;let B=0;for(let T=0;T<z.length;T++)B=(B*31+z.charCodeAt(T))%i;return B},K=async()=>{if(!m.trim()||!w.trim()){p(X.messages.errorNoKeyValue,"error");return}try{const z=await ee("/api/hashtable_chaining/insert",{key:m.trim(),value:w.trim()});if(z.error){p(z.error,"error");return}await I(),E(m.trim()),z.updated?p(X.messages.insertUpdated.replace("{key}",m).replace("{index}",z.index),"info"):z.collision?p(X.messages.insertCollision.replace("{key}",m).replace("{index}",z.index),"warning"):p(X.messages.insertSuccess.replace("{key}",m).replace("{index}",z.index),"success"),N(z.index),setTimeout(()=>{N(null),E(null)},3e3),S(""),j("")}catch{p(X.messages.errorInsert,"error")}},D=async()=>{if(!y.trim()){p(X.messages.errorNoKey,"error");return}try{const z=await ee("/api/hashtable_chaining/delete",{key:y.trim()});if(z.error){p(z.error,"error");return}await I(),p(X.messages.deleteSuccess.replace("{key}",y),"success"),f("")}catch{p(X.messages.errorDelete,"error")}},q=async()=>{if(!g.trim()){p(X.messages.errorNoKey,"error");return}try{const z=await ae(`/api/hashtable_chaining/get?key=${encodeURIComponent(g.trim())}`);if(z.error){p(z.error,"error");return}z.found?p(X.messages.searchFound.replace("{key}",g).replace("{value}",z.value),"success"):p(X.messages.searchNotFound.replace("{key}",g),"error"),x("")}catch{p(X.messages.errorSearch,"error")}},k=async()=>{try{await ee("/api/hashtable_chaining/clear",{}),await I(),N(null),E(null),p(X.messages.clearSuccess,"success")}catch{p(X.messages.errorClear,"error")}};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"intro-left",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Oe,{className:"icon-sm"}),n.jsx("span",{children:X.concept.title})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"Chaining"})," ",X.concept.description.replace("Chaining ","")]}),n.jsx("div",{style:{background:"var(--bg-tertiary)",padding:"0.75rem",borderRadius:"8px",marginTop:"0.5rem",fontFamily:"monospace",fontSize:"0.9rem"},children:n.jsx("div",{children:X.concept.codeExample})}),n.jsxs("div",{className:"concept-analogy",style:{marginTop:"0.75rem"},children:[n.jsx(xe,{}),n.jsx("span",{children:X.concept.analogy})]})]})]}),n.jsxs("div",{className:"concept-box",style:{marginTop:"1rem"},children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Bn,{className:"icon-sm",style:{color:"#3b82f6"}}),n.jsx("span",{children:X.comparison.title})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",fontSize:"0.85rem"},children:[n.jsxs("div",{children:[n.jsx("strong",{style:{color:X.comparison.chaining.color},children:X.comparison.chaining.label}),X.comparison.chaining.points.map((z,B)=>n.jsx("div",{style:{marginTop:"0.25rem"},children:z},B))]}),n.jsxs("div",{children:[n.jsx("strong",{style:{color:X.comparison.probing.color},children:X.comparison.probing.label}),X.comparison.probing.points.map((z,B)=>n.jsx("div",{style:{marginTop:"0.25rem"},children:z},B))]})]}),n.jsx("p",{style:{marginTop:"0.75rem",fontSize:"0.85rem"},children:X.comparison.summary})]})]})]}),n.jsx(ve,{context:"Hash Table with Chaining"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Operations"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:X.operations.insert.label}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",value:m,onChange:z=>S(z.target.value),placeholder:X.operations.insert.keyPlaceholder}),n.jsx("input",{type:"text",value:w,onChange:z=>j(z.target.value),onKeyDown:z=>z.key==="Enter"&&K(),placeholder:X.operations.insert.valuePlaceholder}),n.jsx("button",{onClick:K,className:"btn btn-insert",children:X.operations.insert.buttonText})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:X.operations.delete.label}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",value:y,onChange:z=>f(z.target.value),onKeyDown:z=>z.key==="Enter"&&D(),placeholder:X.operations.delete.placeholder}),n.jsx("button",{onClick:D,className:"btn btn-delete",children:X.operations.delete.buttonText})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:X.operations.search.label}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",value:g,onChange:z=>x(z.target.value),onKeyDown:z=>z.key==="Enter"&&q(),placeholder:X.operations.search.placeholder}),n.jsx("button",{onClick:q,className:"btn btn-search",children:X.operations.search.buttonText})]})]}),n.jsx("div",{className:"operation-group",style:{display:"flex",gap:"0.5rem"},children:n.jsx("button",{onClick:k,className:"btn btn-clear",children:X.operations.clear.buttonText})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:X.infoLabels.items}),n.jsx("span",{className:"info-value",children:r})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:X.infoLabels.capacity}),n.jsx("span",{className:"info-value",children:i})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:X.infoLabels.load}),n.jsx("span",{className:"info-value",style:{color:l>=1?"#f59e0b":"inherit"},children:l.toFixed(2)})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:X.infoLabels.collisions}),n.jsx("span",{className:"info-value",style:{color:c>0?"#f59e0b":"inherit"},children:c})]})]}),n.jsxs("div",{className:"rehash-info-box",children:[n.jsx(es,{size:16}),n.jsxs("div",{children:[n.jsx("strong",{children:X.chainingAdvantage.title}),n.jsx("p",{children:X.chainingAdvantage.description}),l>=X.chainingAdvantage.highLoadThreshold?n.jsxs("div",{className:"rehash-recommend",children:[n.jsx(So,{size:14}),n.jsx("span",{className:"rehash-warning",children:X.chainingAdvantage.highLoadMessage.replace("{loadFactor}",l.toFixed(2))})]}):n.jsx("span",{className:"rehash-safe",children:X.chainingAdvantage.safeMessage.replace("{loadFactor}",l.toFixed(2))})]})]}),n.jsx(Be,{message:d})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Hash Table (Chaining)"}),m&&n.jsxs("div",{className:"hash-demo",children:[n.jsxs("div",{className:"hash-demo-item",children:[n.jsx("span",{className:"hash-demo-label",children:"Key:"}),n.jsxs("span",{className:"hash-demo-key",children:['"',m,'"']})]}),n.jsx(re,{className:"hash-demo-arrow"}),n.jsx("div",{className:"hash-demo-item",children:n.jsx("span",{className:"hash-demo-label",children:"hash()"})}),n.jsx(re,{className:"hash-demo-arrow"}),n.jsxs("div",{className:"hash-demo-item",children:[n.jsx("span",{className:"hash-demo-label",children:"Slot:"}),n.jsx("span",{className:"hash-demo-index",children:H(m)})]})]}),n.jsx("div",{className:"ht-chaining-visual",children:!e||e.length===0?n.jsx("div",{className:"ht-empty",children:X.messages.emptyTable}):n.jsx("div",{className:"ht-chaining-buckets",children:e.map((z,B)=>{const T=P===B,_=z&&Array.isArray(z)&&z.length>0,b=_?z.length:0;return n.jsxs("div",{className:`ht-chaining-row ${_?"filled":"empty"} ${T?"highlighted":""}`,children:[n.jsxs("div",{className:"ht-chaining-index",children:[n.jsx("span",{className:"index-number",children:B}),b>1&&n.jsx("span",{className:"chain-count",children:b})]}),n.jsx("div",{className:"ht-chaining-arrow-container",children:n.jsx(re,{size:18,className:"bucket-arrow"})}),n.jsx("div",{className:"ht-chaining-content",children:_?n.jsx("div",{className:"ht-chaining-chain",children:z.map((C,M)=>{const L=A&&C.key===A;return n.jsxs(Je.Fragment,{children:[n.jsxs("div",{className:`ht-chaining-node ${L?"just-inserted":""} ${M>0?"collision-node":""}`,children:[n.jsx("div",{className:"node-key",children:C.key}),n.jsx("div",{className:"node-separator"}),n.jsx("div",{className:"node-value",children:C.value})]}),M<z.length-1&&n.jsx("div",{className:"chain-link",children:n.jsx(re,{size:16})})]},M)})}):n.jsx("div",{className:"ht-chaining-empty-slot",children:n.jsx("span",{children:"Empty"})})})]},B)})})}),n.jsx("div",{className:"ht-legend",children:X.legend.map((z,B)=>n.jsxs("div",{className:"legend-item",children:[z.type==="color"?n.jsx("div",{className:`legend-color ${z.className}`}):n.jsx(es,{size:14,style:{color:z.color}}),n.jsx("span",{children:z.label})]},B))})]})]}),n.jsx(ye,{dataStructure:"hashtableChaining"})]})}function wv(){const[e,t]=u.useState([]),[r,s]=u.useState(0),[i,a]=u.useState(0),[l,o]=u.useState(0),{message:c,showMessage:h}=He(3e3),[d,p]=u.useState(""),[m,S]=u.useState(""),[w,j]=u.useState(""),[y,f]=u.useState(""),[g,x]=u.useState(null),[P,N]=u.useState([]),[A,E]=u.useState(null),[V,F]=u.useState(null);u.useEffect(()=>{I()},[]);const I=async()=>{try{const B=await ae("/api/hashtable_quadratic");t(B.table||[]),s(B.size||0),a(B.capacity||0),o(B.load_factor||0)}catch(B){console.error("Error loading hashtable:",B)}},H=B=>{if(!i||i===0)return 0;let T=0;for(let _=0;_<B.length;_++)T=(T*31+B.charCodeAt(_))%i;return T},K=(B,T)=>{var C;const _=H(B),b=[];for(let M=0;M<i;M++){const L=(_+M*M)%i;if(b.push({index:L,i:M,formula:`(${_} + ${M}²) % ${i} = ${L}`}),!T[L]||T[L][0]===B)break}return{originalHash:_,path:b,finalSlot:(C=b[b.length-1])==null?void 0:C.index}},D=async()=>{if(!d.trim()||!m.trim()){h("Please enter both key and value!","error");return}const B=i>0?H(d.trim()):0,T=e.length>0&&e[B]&&e[B]!=="DELETED"&&e[B][0]!==d.trim();let _=null;T&&(_=K(d.trim(),e));try{const b=await ee("/api/hashtable_quadratic/insert",{key:d.trim(),value:m.trim()});if(b.error){h(b.error,"error");return}await I(),E(d.trim()),T&&_?(F({key:d.trim(),originalSlot:_.originalHash,probedSlots:_.path,finalSlot:b.final_index}),N(_.path.map(C=>C.index)),h(`Collision! Quadratic probing: ${_.path.length} probe(s)`,"warning"),setTimeout(()=>{N([]),F(null)},5e3)):(h(`Inserted "${d}" → slot ${B}`,"success"),x(B),setTimeout(()=>x(null),2e3)),p(""),S(""),setTimeout(()=>E(null),3e3)}catch{h("Error inserting. Is Flask running?","error")}},q=async()=>{if(!w.trim()){h("Please enter a key!","error");return}try{const B=await ee("/api/hashtable_quadratic/delete",{key:w.trim()});if(B.error){h(B.error,"error");return}await I(),h(`Deleted "${w}"`,"success"),j("")}catch{h("Error deleting. Is Flask running?","error")}},k=async()=>{if(!y.trim()){h("Please enter a key!","error");return}try{const B=await ae(`/api/hashtable_quadratic/get?key=${encodeURIComponent(y.trim())}`);if(B.error){h(B.error,"error");return}B.found?h(`Found: "${y}" = ${B.value}`,"success"):h(`Key "${y}" not found`,"error"),f("")}catch{h("Error searching item","error")}},z=async()=>{try{await ee("/api/hashtable_quadratic/clear",{}),await I(),N([]),F(null),h("Hashtable cleared!","success")}catch{h("Error clearing hashtable","error")}};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"intro-left",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Oe,{className:"icon-sm"}),n.jsx("span",{children:"What is Quadratic Probing?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"Quadratic Probing"})," is a collision resolution technique where we probe at quadratically increasing intervals."]}),n.jsxs("div",{style:{background:"var(--bg-tertiary)",padding:"0.75rem",borderRadius:"8px",marginTop:"0.5rem",fontFamily:"monospace",fontSize:"0.9rem"},children:[n.jsx("div",{children:"probe(i) = (hash + i²) % capacity"}),n.jsx("div",{style:{color:"var(--text-muted)",marginTop:"0.25rem"},children:"i = 0, 1, 4, 9, 16, 25..."})]}),n.jsxs("div",{className:"concept-analogy",style:{marginTop:"0.75rem"},children:[n.jsx(xe,{}),n.jsxs("span",{children:["Unlike linear probing, we jump further each time – reducing ",n.jsx("strong",{children:"clustering"}),"!"]})]})]})]}),n.jsxs("div",{className:"concept-box",style:{marginTop:"1rem"},children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Bn,{className:"icon-sm",style:{color:"#3b82f6"}}),n.jsx("span",{children:"Linear vs Quadratic"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",fontSize:"0.85rem"},children:[n.jsxs("div",{children:[n.jsx("strong",{style:{color:"#f59e0b"},children:"Linear:"}),n.jsx("div",{style:{fontFamily:"monospace",marginTop:"0.25rem"},children:"+1, +2, +3, +4..."})]}),n.jsxs("div",{children:[n.jsx("strong",{style:{color:"#22c55e"},children:"Quadratic:"}),n.jsx("div",{style:{fontFamily:"monospace",marginTop:"0.25rem"},children:"+1, +4, +9, +16..."})]})]}),n.jsx("p",{style:{marginTop:"0.75rem",fontSize:"0.85rem"},children:"Quadratic probing spreads entries more evenly but may not find empty slots if table is over 50% full."})]})]})]}),n.jsx(ve,{context:"Hash Table with Quadratic Probing"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Operations"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Insert Key-Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",value:d,onChange:B=>p(B.target.value),placeholder:"Key"}),n.jsx("input",{type:"text",value:m,onChange:B=>S(B.target.value),onKeyPress:B=>B.key==="Enter"&&D(),placeholder:"Value"}),n.jsx("button",{onClick:D,className:"btn btn-insert",children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Delete Key"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",value:w,onChange:B=>j(B.target.value),onKeyPress:B=>B.key==="Enter"&&q(),placeholder:"Key"}),n.jsx("button",{onClick:q,className:"btn btn-delete",children:"Delete"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Search Key"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",value:y,onChange:B=>f(B.target.value),onKeyPress:B=>B.key==="Enter"&&k(),placeholder:"Key"}),n.jsx("button",{onClick:k,className:"btn btn-search",children:"Search"})]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:z,className:"btn btn-clear",children:"Clear Table"})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Items"}),n.jsxs("span",{className:"info-value",children:[r,"/",i]})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Load"}),n.jsxs("span",{className:"info-value",style:{color:l>=.5?"#f59e0b":"inherit"},children:[(l*100).toFixed(0),"%"]})]})]}),n.jsxs("div",{className:"rehash-info-box",children:[n.jsx(Lh,{size:16}),n.jsxs("div",{children:[n.jsx("strong",{children:"Rehashing Threshold: 50%"}),n.jsx("p",{children:"Quadratic probing requires lower load factor (~0.5) to guarantee finding empty slots."}),l>=.5?n.jsxs("span",{className:"rehash-warning",children:["Load (",(l*100).toFixed(0),"%) at threshold!"]}):n.jsxs("span",{className:"rehash-safe",children:["Currently safe (",(l*100).toFixed(0),"% < 50%)"]})]})]}),n.jsx(Be,{message:c})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Hash Table (Quadratic Probing)"}),d&&n.jsxs("div",{className:"hash-demo",children:[n.jsxs("div",{className:"hash-demo-item",children:[n.jsx("span",{className:"hash-demo-label",children:"Key:"}),n.jsxs("span",{className:"hash-demo-key",children:['"',d,'"']})]}),n.jsx(re,{className:"hash-demo-arrow"}),n.jsx("div",{className:"hash-demo-item",children:n.jsx("span",{className:"hash-demo-label",children:"hash()"})}),n.jsx(re,{className:"hash-demo-arrow"}),n.jsxs("div",{className:"hash-demo-item",children:[n.jsx("span",{className:"hash-demo-label",children:"Slot:"}),n.jsx("span",{className:"hash-demo-index",children:H(d)})]})]}),V&&n.jsxs("div",{className:"collision-banner",children:[n.jsx(On,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Quadratic Probing!"}),n.jsxs("p",{children:['"',V.key,'" hashed to slot ',n.jsx("span",{className:"slot-badge original",children:V.originalSlot})]}),n.jsx("div",{style:{marginTop:"0.5rem",fontSize:"0.8rem",fontFamily:"monospace"},children:V.probedSlots.map((B,T)=>n.jsxs("div",{style:{marginBottom:"0.25rem"},children:["i=",B.i,": ",B.formula,T===V.probedSlots.length-1&&n.jsx("span",{style:{color:"#4ade80"},children:" [FOUND]"})]},T))})]})]}),n.jsx("div",{className:"ht-visual",children:!e||e.length===0?n.jsx("div",{className:"ht-empty",children:"Hash table is empty. Insert some key-value pairs!"}):n.jsx("div",{className:"ht-buckets",children:e.map((B,T)=>{const _=P.includes(T),b=V&&V.originalSlot===T,C=V&&V.finalSlot===T,M=B==="DELETED",L=B&&B!=="DELETED";return n.jsxs("div",{className:`ht-row ${L?"filled":"empty"} 
                        ${M?"deleted":""}
                        ${g===T?"highlighted":""} 
                        ${A&&L&&B[0]===A?"just-inserted":""}
                        ${_?"probed":""}
                        ${b?"original-hash":""}
                        ${C?"final-slot":""}`,children:[_&&n.jsx("div",{className:"probe-indicator",children:b?"X":C?"O":">"}),n.jsxs("div",{className:`ht-key-box ${L?"has-key":""} ${M?"deleted-slot":""}`,children:[L&&n.jsx("span",{className:"ht-key",children:B[0]}),M&&n.jsx("span",{className:"ht-deleted-text",children:"DEL"})]}),n.jsx("div",{className:"ht-arrow",children:L&&n.jsx(re,{size:20})}),n.jsx("div",{className:`ht-index ${b?"collision-index":""}`,children:T}),n.jsx("div",{className:`ht-value-box ${L?"has-value":""} ${M?"deleted-slot":""}`,children:L?n.jsx("span",{className:"ht-value",children:B[1]}):M?n.jsx("span",{className:"ht-deleted-text",children:"DELETED"}):n.jsx("span",{className:"ht-empty-slot",children:"—"})})]},T)})})}),n.jsxs("div",{className:"ht-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color key-color"}),n.jsx("span",{children:"Key"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color index-color"}),n.jsx("span",{children:"Index"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color value-color"}),n.jsx("span",{children:"Value"})]}),P.length>0&&n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color probe-color"}),n.jsx("span",{children:"Probe Path"})]})]})]})]}),n.jsx(ye,{dataStructure:"hashtable"})]})}const Dt=7,Sv={inorder:{name:"Inorder Traversal",order:"Left → Root → Right",description:"Visit left subtree, process root, then visit right subtree. For BST, this produces sorted order.",useCase:["Get sorted elements","Validate BST","Create mirror image"],complexity:{time:"O(n)",space:"O(h)"}},preorder:{name:"Preorder Traversal",order:"Root → Left → Right",description:"Process root first, then recursively visit left and right subtrees. Useful for copying trees.",useCase:["Copy tree structure","Serialize/deserialize","Prefix expressions"],complexity:{time:"O(n)",space:"O(h)"}},postorder:{name:"Postorder Traversal",order:"Left → Right → Root",description:"Visit left subtree, right subtree, then process root. Essential for deleting nodes safely.",useCase:["Delete nodes safely","Calculate folder sizes","Postfix expressions"],complexity:{time:"O(n)",space:"O(h)"}},levelorder:{name:"Level Order Traversal",order:"Level by Level (BFS)",description:"Visit nodes level by level using a queue. Perfect for finding shortest paths.",useCase:["Shortest path","Level-wise printing","Nodes at distance K"],complexity:{time:"O(n)",space:"O(w)"}}},vl=(e,t=[])=>(e&&(vl(e.left,t),t.push(e.data),vl(e.right,t)),t),yl=(e,t=[])=>(e&&(t.push(e.data),yl(e.left,t),yl(e.right,t)),t),jl=(e,t=[])=>(e&&(jl(e.left,t),jl(e.right,t),t.push(e.data)),t),Cv=e=>{if(!e)return[];const t=[],r=[e];for(;r.length;){const s=r.shift();t.push(s.data),s.left&&r.push(s.left),s.right&&r.push(s.right)}return t},Nl=(e,t=0)=>e?Math.max(Nl(e.left,t+1),Nl(e.right,t+1)):t-1;function Tv(){return n.jsxs("div",{className:"intro-left",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Oe,{className:"icon-sm"}),n.jsx("span",{children:"What is a Binary Tree?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["A ",n.jsx("strong",{children:"Binary Tree"})," is a hierarchical data structure where each node has at most ",n.jsx("strong",{children:"two children"}),": left and right."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(xe,{}),n.jsxs("span",{children:["Think of a ",n.jsx("strong",{children:"family tree"})," – each person can have up to two children!"]})]}),n.jsxs("div",{className:"concept-key-terms",children:[n.jsx("h4",{children:"Key Terms:"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Node:"})," Contains data and links to children"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Root:"})," The topmost node (no parent)"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Leaf:"})," A node with no children"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Height:"})," Longest path from root to leaf"]})]})]})]})]}),n.jsxs("div",{className:"concept-box",style:{marginTop:"1rem"},children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Bn,{className:"icon-sm"}),n.jsx("span",{children:"What are Tree Traversals?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"Tree Traversal"})," is visiting each node ",n.jsx("strong",{children:"exactly once"})," in a specific order."]}),n.jsxs("div",{className:"concept-why-traverse",children:[n.jsx("h4",{children:"Why Traverse?"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Search:"})," Find specific data"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Copy:"})," Duplicate the tree"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Evaluate:"})," Calculate expressions"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Delete:"})," Remove nodes properly"]})]})]}),n.jsxs("div",{className:"concept-analogy",style:{marginTop:"0.75rem"},children:[n.jsx(xe,{}),n.jsx("span",{children:"Like reading a book – you can read in different orders based on your needs!"})]})]})]})]})}function Ev({insertValue:e,deleteValue:t,size:r,height:s,message:i,tree:a,isAnimating:l,visitedNodes:o,onInsertValueChange:c,onDeleteValueChange:h,onInsert:d,onDelete:p,onTraversal:m,onClear:S,onResetTraversal:w}){const j=(y,f)=>{const g=y.target.value;(g===""||g==="-"||/^-?\d*\.?\d*$/.test(g))&&f(g)};return n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Binary Tree Traversals"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertValue",children:"Insert Node"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"insertValue",value:e,onChange:y=>j(y,c),onKeyPress:y=>y.key==="Enter"&&d(),placeholder:"Enter a number"}),n.jsx("button",{onClick:d,className:"btn btn-insert",children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"deleteValue",children:"Delete Node"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"deleteValue",value:t,onChange:y=>j(y,h),onKeyPress:y=>y.key==="Enter"&&p(),placeholder:"Enter a number"}),n.jsx("button",{onClick:p,className:"btn btn-delete",children:"Delete"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Traversals"}),n.jsx("div",{className:"btn-group",children:["inorder","preorder","postorder","levelorder"].map(y=>n.jsx("button",{onClick:()=>m(y),className:"btn btn-traversal",disabled:l||!a,children:y==="levelorder"?"Level Order":y.charAt(0).toUpperCase()+y.slice(1)},y))}),o.length>0&&!l&&n.jsx("button",{onClick:w,className:"btn btn-secondary",style:{marginTop:"0.5rem",width:"100%"},children:"Reset Colors"})]}),n.jsxs("div",{className:"traversal-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--default"}),n.jsx("span",{children:"Not visited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visiting"}),n.jsx("span",{children:"Visiting"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visited"}),n.jsx("span",{children:"Visited"})]})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Size:"}),n.jsx("span",{className:"info-value",children:r})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Height:"}),n.jsx("span",{className:"info-value",children:s})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Max Size:"}),n.jsx("span",{className:"info-value",children:Dt})]})]}),r>=Dt*.8&&r<Dt&&n.jsxs("div",{className:"warning-box",children:[n.jsx(On,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Tree is filling up!"})," You're at ",r,"/",Dt," nodes."]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:S,className:"btn btn-clear",children:"Clear Tree"})}),i&&n.jsx("div",{className:`message message-${i.includes("Error")||i.includes("error")?"error":/success|complete|Inserted|Deleted|cleared/i.test(i)?"success":i.includes("full")?"warning":"info"}`,children:i})]})}function _v({tree:e,currentNode:t,visitedNodes:r}){const s=c=>{const h=t===c,d=r.includes(c);return{color:h?"#f59e0b":d?"#10b981":"#6366f1",glow:h?"drop-shadow(0 0 12px #f59e0b) drop-shadow(0 0 20px #f59e0b)":d?"drop-shadow(0 0 6px #10b981)":"none",radius:h?30:25,stroke:h?3:2,fontSize:h?16:14,fontWeight:h?"bold":"normal"}},i=(c,h,d,p,m)=>{if(!c)return[];const S=Math.pow(2,m-p)*50,w=s(c.data),j=[];return c.left&&(j.push(n.jsx("line",{x1:h,y1:d,x2:h-S,y2:d+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:"2"},`l-${c.data}-l`)),j.push(...i(c.left,h-S,d+100,p+1,m))),c.right&&(j.push(n.jsx("line",{x1:h,y1:d,x2:h+S,y2:d+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:"2"},`l-${c.data}-r`)),j.push(...i(c.right,h+S,d+100,p+1,m))),j.push(n.jsxs("g",{style:{filter:w.glow,transition:"all 0.3s ease"},children:[n.jsx("circle",{cx:h,cy:d,r:w.radius,fill:w.color,stroke:"white",strokeWidth:w.stroke,style:{transition:"all 0.3s ease"}}),n.jsx("text",{x:h,y:d,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:w.fontSize,fontWeight:w.fontWeight,children:c.data})]},`n-${c.data}-${h}`)),j};if(!e)return n.jsx("div",{className:"tree-empty",children:"Tree is empty. Insert some nodes!"});const a=Nl(e),l=(a+1)*100+50,o=Math.max(800,Math.pow(2,Math.max(a,1))*80);return n.jsx("svg",{width:o,height:l,className:"tree-svg",children:i(e,o/2,50,0,a)})}function Lv({traversalType:e,traversalResult:t,isAnimating:r,traversalComplete:s}){if(!e||t.length===0&&!r)return null;const i=Sv[e];return n.jsxs("div",{className:"traversal-output-panel",children:[n.jsxs("div",{style:{marginBottom:"1rem"},children:[n.jsxs("h3",{className:"traversal-title",children:[i==null?void 0:i.name,r&&n.jsx("span",{className:"traversal-badge traversal-badge--running",children:"Running..."}),s&&n.jsx("span",{className:"traversal-badge traversal-badge--complete",children:"Complete"})]}),n.jsxs("p",{className:"traversal-order",children:[n.jsx("strong",{children:"Order:"})," ",i==null?void 0:i.order]}),n.jsx("p",{className:"traversal-description",children:i==null?void 0:i.description})]}),n.jsxs("div",{className:"traversal-output-box",children:[n.jsx("div",{className:"traversal-output-label",children:"Output Sequence:"}),n.jsx("div",{className:"traversal-sequence-container",children:t.length===0&&r?n.jsx("span",{style:{color:"var(--text-muted)",fontStyle:"italic"},children:"Traversing..."}):t.map((a,l)=>n.jsx("span",{className:`traversal-node ${l===t.length-1&&!s?"traversal-node--current":"traversal-node--complete"}`,children:a},l))})]}),s&&t.length>0&&n.jsxs("div",{className:"traversal-array-section",children:[n.jsx("div",{className:"traversal-array-label",children:"Array Output:"}),n.jsxs("code",{className:"traversal-array-output",children:["[",t.join(", "),"]"]}),n.jsxs("p",{className:"traversal-use-case",children:["Use case: ",i==null?void 0:i.useCase.join(" • ")]}),n.jsxs("div",{className:"traversal-complexity",children:[n.jsx("strong",{children:"Time:"})," ",n.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.time})," (visits each node once)",n.jsx("br",{}),n.jsx("strong",{children:"Space:"})," ",n.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.space})," (recursion stack/queue)"]})]})]})}function Ov(){const[e,t]=u.useState(null),[r,s]=u.useState(0),[i,a]=u.useState(-1),[l,o]=u.useState(""),[c,h]=u.useState(""),[d,p]=u.useState(""),[m,S]=u.useState([]),[w,j]=u.useState(!1),[y,f]=u.useState(null),[g,x]=u.useState([]),[P,N]=u.useState(null),[A,E]=u.useState(!1);u.useEffect(()=>{V()},[]);const V=async()=>{try{const z=await(await fetch("/api/binarytree")).json();t(z.tree),s(z.size||0),a(z.height!==void 0?z.height:-1)}catch(k){console.error("Error loading tree:",k)}},F=k=>{p(k),setTimeout(()=>p(""),3e3)},I=async()=>{if(!l.trim()){F("Please enter a number!");return}const k=Number(l);if(isNaN(k)){F("Please enter a valid number!");return}if(r>=Dt){F(`Tree is full! Maximum size is ${Dt} nodes.`);return}try{const B=await(await fetch("/api/binarytree/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:k})})).json();if(B.error){F(B.error);return}t(B.tree),s(B.size||0),a(B.height!==void 0?B.height:-1),F(`Inserted ${k}`),o("")}catch{F("Error inserting node")}},H=async()=>{if(!c.trim()){F("Please enter a number!");return}const k=Number(c);if(isNaN(k)){F("Please enter a valid number!");return}try{const B=await(await fetch("/api/binarytree/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:k})})).json();if(B.error){F(B.error);return}t(B.tree),s(B.size||0),a(B.height!==void 0?B.height:-1),F(`Deleted ${k}`),h("")}catch{F("Error deleting node")}},K=async()=>{try{await fetch("/api/binarytree/clear",{method:"POST"}),t(null),s(0),a(-1),q(),F("Tree cleared!")}catch{F("Error clearing tree")}},D=async k=>{if(!e){F("Tree is empty! Insert some nodes first.");return}j(!0),S([]),f(null),x([]),N(k),E(!1);let z=[];switch(k){case"inorder":z=vl(e);break;case"preorder":z=yl(e);break;case"postorder":z=jl(e);break;case"levelorder":z=Cv(e);break;default:z=[]}if(z.length===0){F("Tree is empty!"),j(!1);return}for(let B=0;B<z.length;B++)f(z[B]),await new Promise(T=>setTimeout(T,600)),x(T=>[...T,z[B]]),S(T=>[...T,z[B]]),await new Promise(T=>setTimeout(T,200));f(null),E(!0),j(!1),F(`${k.charAt(0).toUpperCase()+k.slice(1)} traversal complete!`)},q=()=>{S([]),f(null),x([]),N(null),E(!1)};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsx(Tv,{}),n.jsx(ve,{context:"Binary Tree data structure and traversals"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsx(Ev,{insertValue:l,deleteValue:c,size:r,height:i,message:d,tree:e,isAnimating:w,visitedNodes:g,onInsertValueChange:o,onDeleteValueChange:h,onInsert:I,onDelete:H,onTraversal:D,onClear:K,onResetTraversal:q}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Binary Tree Visualization"}),n.jsx("div",{className:"tree-container",children:n.jsx(_v,{tree:e,currentNode:y,visitedNodes:g})}),n.jsx(Lv,{traversalType:P,traversalResult:m,isAnimating:w,traversalComplete:A})]})]}),n.jsx(ye,{dataStructure:"binarytree"})]})}const Pv={title:"What is a Stack?",description:"A Stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle.",codeExample:"push(A) → push(B) → push(C) → pop() returns C",analogy:"Like a stack of plates - you can only take the top plate off first!"},Rv={title:"Stack Properties",items:[{label:"Order",value:"LIFO (Last-In-First-Out)"},{label:"Access",value:"Top element only"},{label:"Insert",value:"Push to top - O(1)"},{label:"Remove",value:"Pop from top - O(1)"}]},Iv={title:"Common Use Cases",items:["Function call stack (recursion)","Undo/Redo operations","Browser back button","Expression evaluation","Syntax parsing"]},zv={title:"Time Complexity",operations:[{name:"Push",time:"O(1)",description:"Add to top"},{name:"Pop",time:"O(1)",description:"Remove from top"},{name:"Peek",time:"O(1)",description:"View top element"},{name:"isEmpty",time:"O(1)",description:"Check if empty"},{name:"Search",time:"O(n)",description:"Find element"}]},Mv={push:{label:"Push Value",placeholder:"Value",buttonText:"Push"},pop:{buttonText:"Pop"},peek:{buttonText:"Peek"},clear:{buttonText:"Clear"}},Av={size:"Size",top:"Top",capacity:"Capacity"},Fv={emptyStack:"Stack is empty. Push some values!",pushSuccess:'Pushed "{value}" to stack',popSuccess:'Popped "{value}" from stack',popEmpty:"Cannot pop - stack is empty!",peekSuccess:'Top element: "{value}"',peekEmpty:"Cannot peek - stack is empty!",clearSuccess:"Stack cleared!",errorNoValue:"Please enter a value!",errorPush:"Error pushing to stack",errorPop:"Error popping from stack",errorClear:"Error clearing stack",stackFull:"Stack is full!"},Vv=[{type:"color",className:"top-color",label:"Top Element"},{type:"color",className:"element-color",label:"Stack Element"}],Dv={concept:Pv,properties:Rv,useCases:Iv,complexity:zv,operations:Mv,infoLabels:Av,messages:Fv,legend:Vv},$v={title:"What is a Queue?",description:"A Queue is a linear data structure that follows the First-In-First-Out (FIFO) principle.",codeExample:"enqueue(A) → enqueue(B) → enqueue(C) → dequeue() returns A",analogy:"Like a line at a store - first person in line gets served first!"},Bv={title:"Queue Properties",items:[{label:"Order",value:"FIFO (First-In-First-Out)"},{label:"Access",value:"Front and Rear"},{label:"Insert",value:"Enqueue at rear - O(1)"},{label:"Remove",value:"Dequeue from front - O(1)"}]},Hv={title:"Queue vs Stack",queue:{label:"Queue:",color:"#22c55e",points:["FIFO order","Two access points (front/rear)"]},stack:{label:"Stack:",color:"#3b82f6",points:["LIFO order","One access point (top)"]},summary:"Use Queue when order of processing matters (like task scheduling)."},qv={title:"Common Use Cases",items:["Task scheduling (CPU, print jobs)","Breadth-First Search (BFS)","Message queues","Request handling in servers","Buffering (streaming)"]},Uv={title:"Time Complexity",operations:[{name:"Enqueue",time:"O(1)",description:"Add to rear"},{name:"Dequeue",time:"O(1)",description:"Remove from front"},{name:"Front",time:"O(1)",description:"View front element"},{name:"isEmpty",time:"O(1)",description:"Check if empty"},{name:"Search",time:"O(n)",description:"Find element"}]},Kv={enqueue:{label:"Enqueue Value",placeholder:"Value",buttonText:"Enqueue"},dequeue:{buttonText:"Dequeue"},front:{buttonText:"Front"},clear:{buttonText:"Clear"}},Wv={size:"Size",front:"Front",rear:"Rear",capacity:"Capacity"},Gv={emptyQueue:"Queue is empty. Enqueue some values!",enqueueSuccess:'Enqueued "{value}"',dequeueSuccess:'Dequeued "{value}"',dequeueEmpty:"Cannot dequeue - queue is empty!",frontSuccess:'Front element: "{value}"',frontEmpty:"Cannot get front - queue is empty!",clearSuccess:"Queue cleared!",errorNoValue:"Please enter a value!",errorEnqueue:"Error enqueueing to queue",errorDequeue:"Error dequeueing from queue",errorClear:"Error clearing queue",queueFull:"Queue is full!"},Qv=[{type:"color",className:"front-color",label:"Front"},{type:"color",className:"rear-color",label:"Rear"},{type:"color",className:"element-color",label:"Queue Element"}],Yv={concept:$v,properties:Bv,comparison:Hv,useCases:qv,complexity:Uv,operations:Kv,infoLabels:Wv,messages:Gv,legend:Qv},Xv={title:"What is a Linked List?",description:"A Linked List is a linear data structure where elements are stored in nodes, each pointing to the next node.",codeExample:"HEAD → [A|→] → [B|→] → [C|→] → NULL",analogy:"Like a treasure hunt - each clue (node) points to the next location!"},Jv={title:"Linked List Properties",items:[{label:"Structure",value:"Nodes with data + pointer"},{label:"Memory",value:"Non-contiguous allocation"},{label:"Size",value:"Dynamic (grows/shrinks)"},{label:"Access",value:"Sequential (no random access)"}]},Zv={title:"Linked List vs Array",linkedlist:{label:"Linked List:",color:"#22c55e",points:["Dynamic size","O(1) insert/delete at known position","Extra memory for pointers"]},array:{label:"Array:",color:"#3b82f6",points:["Fixed size (usually)","O(1) random access by index","Contiguous memory"]},summary:"Use Linked List when you need frequent insertions/deletions and don't need random access."},ey={title:"Types of Linked Lists",items:[{name:"Singly Linked",description:"Each node points to next only"},{name:"Doubly Linked",description:"Nodes point to both next and previous"},{name:"Circular",description:"Last node points back to first"}]},ny={title:"Time Complexity",operations:[{name:"Access",time:"O(n)",description:"Traverse to find"},{name:"Search",time:"O(n)",description:"Linear search"},{name:"Insert (head)",time:"O(1)",description:"Add at beginning"},{name:"Insert (tail)",time:"O(n)",description:"Traverse then add"},{name:"Delete (head)",time:"O(1)",description:"Remove first"},{name:"Delete (by value)",time:"O(n)",description:"Find then remove"}]},ty={insertHead:{label:"Insert at Head",placeholder:"Value",buttonText:"Insert Head"},insertTail:{label:"Insert at Tail",placeholder:"Value",buttonText:"Insert Tail"},delete:{label:"Delete Value",placeholder:"Value",buttonText:"Delete"},search:{label:"Search Value",placeholder:"Value",buttonText:"Search"},clear:{buttonText:"Clear"}},ry={size:"Size",head:"Head",tail:"Tail"},sy={emptyList:"Linked list is empty. Insert some values!",insertHeadSuccess:'Inserted "{value}" at head',insertTailSuccess:'Inserted "{value}" at tail',deleteSuccess:'Deleted "{value}"',deleteNotFound:'Value "{value}" not found',searchFound:'Found "{value}" at position {position}',searchNotFound:'Value "{value}" not found',clearSuccess:"Linked list cleared!",errorNoValue:"Please enter a value!",errorInsert:"Error inserting value",errorDelete:"Error deleting value",errorSearch:"Error searching value",errorClear:"Error clearing list"},iy=[{type:"color",className:"head-color",label:"Head Node"},{type:"color",className:"node-color",label:"Node"},{type:"icon",icon:"ArrowRight",color:"#8b5cf6",label:"Pointer"}],ay={concept:Xv,properties:Jv,comparison:Zv,types:ey,complexity:ny,operations:ty,infoLabels:ry,messages:sy,legend:iy},ly={title:"What is a Binary Tree?",description:"A Binary Tree is a hierarchical data structure where each node has at most two children (left and right).",codeExample:`       [5]
      /   \\
    [3]   [7]
   /  \\     \\
 [1]  [4]   [9]`,analogy:"Like a family tree - each person can have at most two children!"},oy={title:"Binary Tree Properties",items:[{label:"Structure",value:"Hierarchical (nodes + edges)"},{label:"Children",value:"At most 2 per node"},{label:"Root",value:"Topmost node (no parent)"},{label:"Leaf",value:"Node with no children"}]},cy={title:"Types of Binary Trees",items:[{name:"Full Binary Tree",description:"Every node has 0 or 2 children"},{name:"Complete Binary Tree",description:"All levels filled except possibly last"},{name:"Perfect Binary Tree",description:"All internal nodes have 2 children, leaves at same level"},{name:"Binary Search Tree",description:"Left < Parent < Right ordering"}]},dy={title:"Tree Traversals",items:[{name:"Inorder",order:"Left → Root → Right",use:"BST gives sorted order"},{name:"Preorder",order:"Root → Left → Right",use:"Copy tree, prefix expression"},{name:"Postorder",order:"Left → Right → Root",use:"Delete tree, postfix expression"},{name:"Level Order",order:"Level by level (BFS)",use:"Print by levels"}]},uy={title:"Time Complexity (BST)",operations:[{name:"Search",average:"O(log n)",worst:"O(n)",description:"Find element"},{name:"Insert",average:"O(log n)",worst:"O(n)",description:"Add element"},{name:"Delete",average:"O(log n)",worst:"O(n)",description:"Remove element"},{name:"Traversal",average:"O(n)",worst:"O(n)",description:"Visit all nodes"}],note:"Worst case O(n) occurs when tree becomes a linked list (unbalanced)"},hy={title:"Common Use Cases",items:["Binary Search Trees (fast lookup)","Expression trees (parsing)","Huffman coding (compression)","Heaps (priority queues)","File system structure"]},py={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},delete:{label:"Delete Value",placeholder:"Value",buttonText:"Delete"},search:{label:"Search Value",placeholder:"Value",buttonText:"Search"},traversals:{inorder:"Inorder",preorder:"Preorder",postorder:"Postorder",levelorder:"Level Order"},clear:{buttonText:"Clear"}},fy={size:"Nodes",height:"Height",root:"Root"},my={emptyTree:"Binary tree is empty. Insert some values!",insertSuccess:"Inserted {value}",deleteSuccess:"Deleted {value}",deleteNotFound:"Value {value} not found",searchFound:"Found {value}",searchNotFound:"Value {value} not found",clearSuccess:"Tree cleared!",traversalResult:"{type} traversal: {result}",errorNoValue:"Please enter a value!",errorInsert:"Error inserting value",errorDelete:"Error deleting value",errorSearch:"Error searching value",errorClear:"Error clearing tree"},gy=[{type:"color",className:"root-color",label:"Root"},{type:"color",className:"node-color",label:"Node"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Found"}],xy={concept:ly,properties:oy,types:cy,traversals:dy,complexity:uy,useCases:hy,operations:py,infoLabels:fy,messages:my,legend:gy},vy={title:"What is a Hash Table?",description:"A Hash Table is a data structure that maps keys to values using a hash function for O(1) average access time.",codeExample:'hash("apple") → 3 → table[3] = "apple"',analogy:"Like a library catalog - the book title (key) tells you exactly which shelf (index) to find it!"},yy={title:"Hash Table Properties",items:[{label:"Access",value:"O(1) average time"},{label:"Hash Function",value:"Maps key → index"},{label:"Load Factor",value:"size / capacity"},{label:"Collision",value:"When two keys hash to same index"}]},jy={title:"Collision Resolution: Linear Probing",description:"When a collision occurs, probe sequentially until an empty slot is found.",steps:["Calculate hash index","If slot occupied, try next slot","Repeat until empty slot found","Insert at empty slot"],formula:"index = (hash(key) + i) % capacity, where i = 0, 1, 2, ..."},Ny={title:"Linear vs Quadratic Probing",linear:{label:"Linear Probing:",color:"#3b82f6",points:["Simple: check next slot","Primary clustering problem","Cache-friendly"]},quadratic:{label:"Quadratic Probing:",color:"#f59e0b",points:["Jump by squares: 1, 4, 9...","Reduces primary clustering","May not find empty slot"]},summary:"Linear probing is simpler but can cause clustering. Quadratic probing spreads entries better."},ky={title:"Load Factor",description:"Load factor = size / capacity. Measures how full the table is.",threshold:.7,warningMessage:"High load ({loadFactor}) - consider rehashing!",safeMessage:"Load factor: {loadFactor}"},by={title:"Time Complexity",operations:[{name:"Insert",average:"O(1)",worst:"O(n)",description:"Add key-value"},{name:"Search",average:"O(1)",worst:"O(n)",description:"Find by key"},{name:"Delete",average:"O(1)",worst:"O(n)",description:"Remove by key"},{name:"Rehash",average:"O(n)",worst:"O(n)",description:"Resize table"}],note:"Worst case O(n) when many collisions or poor hash function"},wy={title:"Common Use Cases",items:["Dictionaries/Maps","Caching (memoization)","Database indexing","Symbol tables (compilers)","Counting frequencies"]},Sy={insert:{label:"Insert Key-Value",keyPlaceholder:"Key",valuePlaceholder:"Value",buttonText:"Insert"},delete:{label:"Delete Key",placeholder:"Key",buttonText:"Delete"},search:{label:"Search Key",placeholder:"Key",buttonText:"Search"},clear:{buttonText:"Clear"},rehash:{buttonText:"Rehash"}},Cy={items:"Items",capacity:"Capacity",load:"Load",collisions:"Collisions"},Ty={emptyTable:"Hash table is empty. Insert some key-value pairs!",insertSuccess:'Inserted "{key}" at slot {index}',insertUpdated:'Updated "{key}" at slot {index}',insertCollision:"Collision at slot {original}! Probed to slot {index}",deleteSuccess:'Deleted "{key}"',searchFound:'Found: "{key}" = {value}',searchNotFound:'Key "{key}" not found',clearSuccess:"Hash table cleared!",rehashSuccess:"Rehashed! Capacity: {oldCapacity} → {newCapacity}",rehashEmpty:"Nothing to rehash - table is empty!",tableFull:"Table is full! Consider rehashing.",errorNoKey:"Please enter a key!",errorNoKeyValue:"Please enter both key and value!",errorInsert:"Error inserting. Is Flask running?",errorDelete:"Error deleting. Is Flask running?",errorSearch:"Error searching item",errorClear:"Error clearing hash table",errorRehash:"Error rehashing. Is Flask running?"},Ey=[{type:"color",className:"key-color",label:"Key"},{type:"color",className:"index-color",label:"Index"},{type:"color",className:"value-color",label:"Value"},{type:"color",className:"probe-color",label:"Probed Slot"},{type:"color",className:"collision-color",label:"Collision"}],_y={concept:vy,properties:yy,collisionResolution:jy,comparison:Ny,loadFactor:ky,complexity:by,useCases:wy,operations:Sy,infoLabels:Cy,messages:Ty,legend:Ey},Ly={title:"What is Quadratic Probing?",description:"Quadratic Probing is a collision resolution technique that uses a quadratic function to find the next available slot.",codeExample:"index = (hash(key) + i²) % capacity, where i = 0, 1, 2, 3...",analogy:"Like jumping farther each time - first 1 step, then 4, then 9, then 16!"},Oy={title:"Quadratic Probing Properties",items:[{label:"Probe Sequence",value:"+1, +4, +9, +16, +25..."},{label:"Formula",value:"(hash + i²) % capacity"},{label:"Clustering",value:"Reduces primary clustering"},{label:"Load Factor",value:"Must stay below 0.5 for guarantee"}]},Py={title:"Quadratic vs Linear Probing",quadratic:{label:"Quadratic:",color:"#f59e0b",points:["Jumps by squares: 1, 4, 9...","Less primary clustering","May miss empty slots"]},linear:{label:"Linear:",color:"#3b82f6",points:["Steps by 1 each time","Primary clustering issue","Always finds empty slot"]},summary:"Quadratic probing reduces clustering but requires load factor < 0.5 and prime table size for guaranteed insertion."},Ry={title:"Clustering Problem",primary:{name:"Primary Clustering",description:"Long runs of occupied slots form clusters",cause:"Linear probing - same probe sequence for nearby hashes",solution:"Use quadratic or double hashing"},secondary:{name:"Secondary Clustering",description:"Keys with same hash follow same probe sequence",cause:"Probe sequence depends only on initial hash",solution:"Use double hashing"}},Iy={title:"Load Factor Warning",description:"Quadratic probing may fail to find empty slots if load factor > 0.5",threshold:.5,warningMessage:"Warning: Load factor ({loadFactor}) > 0.5 - insertions may fail!",safeMessage:"Load factor: {loadFactor}"},zy={title:"Time Complexity",operations:[{name:"Insert",average:"O(1)",worst:"O(n)",description:"Add key-value"},{name:"Search",average:"O(1)",worst:"O(n)",description:"Find by key"},{name:"Delete",average:"O(1)",worst:"O(n)",description:"Remove by key"},{name:"Rehash",average:"O(n)",worst:"O(n)",description:"Resize table"}],note:"Requires prime table size and load factor < 0.5 for guaranteed O(1)"},My={insert:{label:"Insert Key-Value",keyPlaceholder:"Key",valuePlaceholder:"Value",buttonText:"Insert"},delete:{label:"Delete Key",placeholder:"Key",buttonText:"Delete"},search:{label:"Search Key",placeholder:"Key",buttonText:"Search"},clear:{buttonText:"Clear"},rehash:{buttonText:"Rehash"}},Ay={items:"Items",capacity:"Capacity",load:"Load",collisions:"Collisions"},Fy={emptyTable:"Hash table is empty. Insert some key-value pairs!",insertSuccess:'Inserted "{key}" at slot {index}',insertUpdated:'Updated "{key}" at slot {index}',insertCollision:"Collision! Quadratic probed to slot {index} (i={probeCount})",deleteSuccess:'Deleted "{key}"',searchFound:'Found: "{key}" = {value}',searchNotFound:'Key "{key}" not found',clearSuccess:"Hash table cleared!",rehashSuccess:"Rehashed! Capacity: {oldCapacity} → {newCapacity}",rehashEmpty:"Nothing to rehash - table is empty!",tableFull:"Cannot insert - no empty slot found after full probe cycle!",errorNoKey:"Please enter a key!",errorNoKeyValue:"Please enter both key and value!",errorInsert:"Error inserting. Is Flask running?",errorDelete:"Error deleting. Is Flask running?",errorSearch:"Error searching item",errorClear:"Error clearing hash table",errorRehash:"Error rehashing. Is Flask running?"},Vy=[{type:"color",className:"key-color",label:"Key"},{type:"color",className:"index-color",label:"Index"},{type:"color",className:"value-color",label:"Value"},{type:"color",className:"probe-color",label:"Quadratic Probe"}],Dy={concept:Ly,properties:Oy,comparison:Py,clustering:Ry,loadFactor:Iy,complexity:zy,operations:My,infoLabels:Ay,messages:Fy,legend:Vy},$y={title:"What is a Binary Search Tree?",description:"A Binary Search Tree (BST) is a binary tree where each node follows the ordering property: all left descendants < node < all right descendants.",codeExample:`       [50]
      /    \\
   [30]    [70]
   /  \\    /  \\
 [20][40][60][80]

Left < Parent < Right`,analogy:"Like a dictionary - words are sorted alphabetically, so you can quickly find any word by comparing!"},By={title:"BST Properties",items:[{label:"Ordering",value:"Left < Parent < Right"},{label:"Search",value:"O(log n) average"},{label:"Inorder",value:"Gives sorted sequence"},{label:"No Duplicates",value:"Typically unique keys"}]},Hy={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},delete:{label:"Delete Value",placeholder:"Value",buttonText:"Delete"},search:{label:"Search Value",placeholder:"Value",buttonText:"Search"},traversals:{inorder:"Inorder (Sorted)",preorder:"Preorder",postorder:"Postorder",levelorder:"Level Order"},clear:{buttonText:"Clear"}},qy={title:"BST Delete Cases",items:[{name:"Leaf Node",description:"Simply remove (no children)"},{name:"One Child",description:"Replace with child"},{name:"Two Children",description:"Replace with inorder successor (smallest in right subtree)"}]},Uy={title:"Tree Traversals",items:[{name:"Inorder",order:"Left -> Root -> Right",use:"Returns SORTED order in BST"},{name:"Preorder",order:"Root -> Left -> Right",use:"Copy/serialize tree"},{name:"Postorder",order:"Left -> Right -> Root",use:"Delete tree safely"},{name:"Level Order",order:"Level by level (BFS)",use:"Print by levels"}]},Ky={title:"Time Complexity",operations:[{name:"Search",average:"O(log n)",worst:"O(n)",description:"Binary search principle"},{name:"Insert",average:"O(log n)",worst:"O(n)",description:"Find position + insert"},{name:"Delete",average:"O(log n)",worst:"O(n)",description:"Find + restructure"},{name:"Min/Max",average:"O(log n)",worst:"O(n)",description:"Leftmost/rightmost"}],note:"Worst case O(n) when tree is unbalanced (degenerates to linked list). Use AVL/Red-Black trees for guaranteed O(log n)."},Wy={title:"Common Use Cases",items:["Database indexing (B-trees)","Symbol tables in compilers","Priority queues","Auto-complete suggestions","Range queries (find all values between X and Y)"]},Gy={title:"BST vs Other Structures",items:[{vs:"Array",advantage:"O(log n) insert/delete vs O(n)"},{vs:"Hash Table",advantage:"Ordered data, range queries"},{vs:"Linked List",advantage:"O(log n) search vs O(n)"}]},Qy={size:"Nodes",height:"Height",root:"Root"},Yy={emptyTree:"BST is empty. Insert some values!",insertSuccess:"Inserted {value}",deleteSuccess:"Deleted {value}",deleteNotFound:"Value {value} not found",searchFound:"Found {value}",searchNotFound:"Value {value} not found",clearSuccess:"BST cleared!",traversalResult:"{type}: {result}",errorNoValue:"Please enter a value!",errorInsert:"Error inserting value",errorDelete:"Error deleting value",errorSearch:"Error searching value",errorClear:"Error clearing BST"},Xy=[{type:"color",className:"root-color",label:"Root"},{type:"color",className:"node-color",label:"Node"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Found"}],Jy={concept:$y,properties:By,operations:Hy,deleteCases:qy,traversals:Uy,complexity:Ky,useCases:Wy,comparison:Gy,infoLabels:Qy,messages:Yy,legend:Xy},Zy={title:"What is an AVL Tree?",description:"An AVL Tree is a self-balancing Binary Search Tree where the height difference between left and right subtrees (balance factor) is at most 1 for every node.",codeExample:`       [50]  BF=0
      /    \\
   [30]    [70]  
  BF=0     BF=0
   /  \\      \\
 [20][40]   [80]

Balance Factor = Height(Left) - Height(Right)
BF must be -1, 0, or 1`,analogy:"Like a well-organized library that automatically reorganizes shelves whenever books are added or removed to ensure quick access!"},ej={title:"AVL Properties",items:[{label:"Balance Factor",value:"-1, 0, or 1 for all nodes"},{label:"Height",value:"O(log n) guaranteed"},{label:"Self-Balancing",value:"Rotations on insert/delete"},{label:"BST Property",value:"Left < Parent < Right"}]},nj={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},delete:{label:"Delete Value",placeholder:"Value",buttonText:"Delete"},search:{label:"Search Value",placeholder:"Value",buttonText:"Search"},traversals:{inorder:"Inorder (Sorted)",preorder:"Preorder",postorder:"Postorder",levelorder:"Level Order"},clear:{buttonText:"Clear"}},tj={title:"AVL Rotations",items:[{name:"Left-Left (LL)",description:"Right rotation",when:"BF > 1, Left child BF >= 0"},{name:"Right-Right (RR)",description:"Left rotation",when:"BF < -1, Right child BF <= 0"},{name:"Left-Right (LR)",description:"Left then Right rotation",when:"BF > 1, Left child BF < 0"},{name:"Right-Left (RL)",description:"Right then Left rotation",when:"BF < -1, Right child BF > 0"}]},rj={title:"Tree Traversals",items:[{name:"Inorder",order:"Left -> Root -> Right",use:"Returns SORTED order"},{name:"Preorder",order:"Root -> Left -> Right",use:"Copy/serialize tree"},{name:"Postorder",order:"Left -> Right -> Root",use:"Delete tree safely"},{name:"Level Order",order:"Level by level (BFS)",use:"Print by levels"}]},sj={title:"Time Complexity",operations:[{name:"Search",average:"O(log n)",worst:"O(log n)",description:"Height always balanced"},{name:"Insert",average:"O(log n)",worst:"O(log n)",description:"Insert + rebalance"},{name:"Delete",average:"O(log n)",worst:"O(log n)",description:"Delete + rebalance"},{name:"Rotation",average:"O(1)",worst:"O(1)",description:"Constant time fix"}],note:"Unlike regular BST, AVL guarantees O(log n) even in worst case because the tree is always balanced!"},ij={title:"Common Use Cases",items:["Database indexing with frequent lookups","In-memory databases","Dictionary implementations","When guaranteed O(log n) is critical","Real-time systems needing predictable performance"]},aj={title:"AVL vs Other Trees",items:[{vs:"BST",advantage:"Guaranteed O(log n) vs O(n) worst case"},{vs:"Red-Black",advantage:"More rigidly balanced (faster lookup)"},{vs:"B-Tree",advantage:"Better for in-memory operations"}]},lj={size:"Nodes",height:"Height",root:"Root"},oj={emptyTree:"AVL Tree is empty. Insert some values!",insertSuccess:"Inserted {value} (tree rebalanced)",deleteSuccess:"Deleted {value} (tree rebalanced)",deleteNotFound:"Value {value} not found",searchFound:"Found {value}",searchNotFound:"Value {value} not found",clearSuccess:"AVL Tree cleared!",traversalResult:"{type}: {result}",errorNoValue:"Please enter a value!",errorInsert:"Error inserting value",errorDelete:"Error deleting value",errorSearch:"Error searching value",errorClear:"Error clearing AVL Tree"},cj=[{type:"color",className:"root-color",label:"Root"},{type:"color",className:"balanced-color",label:"Balanced (|BF| <= 1)"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Found"}],dj={concept:Zy,properties:ej,operations:nj,rotations:tj,traversals:rj,complexity:sj,useCases:ij,comparison:aj,infoLabels:lj,messages:oj,legend:cj},uj={title:"What is a Splay Tree?",description:"A Splay Tree is a self-adjusting Binary Search Tree that moves frequently accessed elements closer to the root through rotations (splaying), providing amortized O(log n) performance.",codeExample:`After searching for 20:

Before:        After Splay:
   [50]           [20]
   /                  \\
 [30]                [50]
 /                   /
[20]  <-- found   [30]

Accessed node moves to root!`,analogy:"Like keeping frequently used items at the front of your desk - recently used elements stay easily accessible!"},hj={title:"Splay Tree Properties",items:[{label:"Self-Adjusting",value:"Accessed nodes move to root"},{label:"No Balance Info",value:"No height/color stored"},{label:"Amortized O(log n)",value:"Good average performance"},{label:"Cache Friendly",value:"Hot nodes stay near root"}]},pj={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},delete:{label:"Delete Value",placeholder:"Value",buttonText:"Delete"},search:{label:"Search Value",placeholder:"Value",buttonText:"Search"},traversals:{inorder:"Inorder (Sorted)",preorder:"Preorder",postorder:"Postorder",levelorder:"Level Order"},clear:{buttonText:"Clear"}},fj={title:"Splay Operations",items:[{name:"Zig",description:"Single rotation when parent is root",when:"Parent is root"},{name:"Zig-Zig",description:"Both node and parent are left (or both right) children",when:"Same side grandchild"},{name:"Zig-Zag",description:"Node is left child, parent is right (or vice versa)",when:"Opposite side grandchild"}]},mj={title:"Tree Traversals",items:[{name:"Inorder",order:"Left -> Root -> Right",use:"Returns SORTED order"},{name:"Preorder",order:"Root -> Left -> Right",use:"Copy/serialize tree"},{name:"Postorder",order:"Left -> Right -> Root",use:"Delete tree safely"},{name:"Level Order",order:"Level by level (BFS)",use:"Print by levels"}]},gj={title:"Time Complexity",operations:[{name:"Search",average:"O(log n)*",worst:"O(n)",description:"Amortized logarithmic"},{name:"Insert",average:"O(log n)*",worst:"O(n)",description:"Amortized logarithmic"},{name:"Delete",average:"O(log n)*",worst:"O(n)",description:"Amortized logarithmic"},{name:"Splay",average:"O(log n)*",worst:"O(n)",description:"Brings node to root"}],note:"* Amortized - while single operations can be O(n), any sequence of m operations takes O(m log n) total time."},xj={title:"Common Use Cases",items:["Cache implementations (LRU-like behavior)","Garbage collectors","Network routers (IP lookup)","Situations with temporal locality","When same elements accessed repeatedly"]},vj={title:"Splay Tree vs Other Trees",items:[{vs:"AVL",advantage:"Simpler (no balance info), better for skewed access"},{vs:"Red-Black",advantage:"Self-optimizing for access patterns"},{vs:"BST",advantage:"Better amortized performance"}]},yj={size:"Nodes",height:"Height",root:"Root"},jj={emptyTree:"Splay Tree is empty. Insert some values!",insertSuccess:"Inserted {value} (now at root)",deleteSuccess:"Deleted {value}",deleteNotFound:"Value {value} not found",searchFound:"Found {value} (splayed to root)",searchNotFound:"Value {value} not found",clearSuccess:"Splay Tree cleared!",traversalResult:"{type}: {result}",errorNoValue:"Please enter a value!",errorInsert:"Error inserting value",errorDelete:"Error deleting value",errorSearch:"Error searching value",errorClear:"Error clearing Splay Tree"},Nj=[{type:"color",className:"root-color",label:"Root (Most Recent)"},{type:"color",className:"node-color",label:"Node"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Found"}],kj={concept:uj,properties:hj,operations:pj,splayOperations:fj,traversals:mj,complexity:gj,useCases:xj,comparison:vj,infoLabels:yj,messages:jj,legend:Nj},bj={title:"What is a Min Heap?",description:"A Min Heap is a complete binary tree where each parent node is smaller than or equal to its children. The minimum element is always at the root, making it perfect for priority queues.",codeExample:`       [1]  <- Min at root
      /    \\
    [3]    [2]
   /  \\    /
 [7]  [6][4]

Array: [1, 3, 2, 7, 6, 4]
Parent always <= Children`,analogy:"Like a tournament bracket where the winner (smallest) rises to the top - the champion is always at the root!"},wj={title:"Min Heap Properties",items:[{label:"Heap Property",value:"Parent <= Children"},{label:"Complete Tree",value:"Filled level by level"},{label:"Array Storage",value:"Parent(i)=(i-1)/2"},{label:"Min Access",value:"O(1) to get minimum"}]},Sj={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},extract:{label:"Extract Min",buttonText:"Extract Min"},peek:{label:"Peek Min",buttonText:"Peek"},build:{label:"Build from Array",placeholder:"e.g., 5,3,8,1,2",buttonText:"Build Heap"},clear:{buttonText:"Clear"}},Cj={title:"Heap Operations",items:[{name:"Insert",description:"Add at end, bubble up (heapify up)",complexity:"O(log n)"},{name:"Extract Min",description:"Remove root, replace with last, bubble down",complexity:"O(log n)"},{name:"Peek",description:"Return root without removing",complexity:"O(1)"},{name:"Build Heap",description:"Heapify from array (bottom-up)",complexity:"O(n)"}]},Tj={title:"Array Representation",items:[{formula:"Parent(i)",value:"(i - 1) / 2"},{formula:"Left Child(i)",value:"2*i + 1"},{formula:"Right Child(i)",value:"2*i + 2"}]},Ej={title:"Time Complexity",operations:[{name:"Insert",average:"O(log n)",worst:"O(log n)",description:"Bubble up to root"},{name:"Extract Min",average:"O(log n)",worst:"O(log n)",description:"Bubble down"},{name:"Peek/Get Min",average:"O(1)",worst:"O(1)",description:"Always at root"},{name:"Build Heap",average:"O(n)",worst:"O(n)",description:"Bottom-up heapify"}],note:"Space complexity is O(n). Complete tree structure ensures height is always O(log n)."},_j={title:"Common Use Cases",items:["Priority Queues (process by priority)","Dijkstra's shortest path algorithm","Prim's minimum spanning tree","Huffman coding (compression)","Event-driven simulation","K smallest/largest elements"]},Lj={title:"Min Heap vs Other Structures",items:[{vs:"Sorted Array",advantage:"O(log n) insert vs O(n)"},{vs:"BST",advantage:"O(1) get min vs O(log n)"},{vs:"Max Heap",advantage:"Fast min access vs fast max"}]},Oj={size:"Size",height:"Height",min:"Min"},Pj={emptyHeap:"Min Heap is empty. Insert some values!",insertSuccess:"Inserted {value}",extractSuccess:"Extracted minimum: {value}",peekSuccess:"Minimum element is {value}",buildSuccess:"Built heap from array",clearSuccess:"Heap cleared!",errorNoValue:"Please enter a value!",errorEmpty:"Heap is empty!",errorFull:"Heap is full!",errorInsert:"Error inserting value",errorExtract:"Error extracting minimum"},Rj=[{type:"color",className:"root-color",label:"Root (Min)"},{type:"color",className:"node-color",label:"Internal Node"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Swapping"}],Ij={concept:bj,properties:wj,operations:Sj,heapOperations:Cj,arrayRepresentation:Tj,complexity:Ej,useCases:_j,comparison:Lj,infoLabels:Oj,messages:Pj,legend:Rj},zj={title:"What is a Max Heap?",description:"A Max Heap is a complete binary tree where each parent node is greater than or equal to its children. The maximum element is always at the root, ideal for priority queues where largest = highest priority.",codeExample:`       [9]  <- Max at root
      /    \\
    [7]    [8]
   /  \\    /
 [3]  [5][6]

Array: [9, 7, 8, 3, 5, 6]
Parent always >= Children`,analogy:"Like a corporate hierarchy - the CEO (maximum) is at the top, and each manager has authority over their subordinates!"},Mj={title:"Max Heap Properties",items:[{label:"Heap Property",value:"Parent >= Children"},{label:"Complete Tree",value:"Filled level by level"},{label:"Array Storage",value:"Parent(i)=(i-1)/2"},{label:"Max Access",value:"O(1) to get maximum"}]},Aj={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},extract:{label:"Extract Max",buttonText:"Extract Max"},peek:{label:"Peek Max",buttonText:"Peek"},build:{label:"Build from Array",placeholder:"e.g., 5,3,8,1,2",buttonText:"Build Heap"},clear:{buttonText:"Clear"}},Fj={title:"Heap Operations",items:[{name:"Insert",description:"Add at end, bubble up (heapify up)",complexity:"O(log n)"},{name:"Extract Max",description:"Remove root, replace with last, bubble down",complexity:"O(log n)"},{name:"Peek",description:"Return root without removing",complexity:"O(1)"},{name:"Build Heap",description:"Heapify from array (bottom-up)",complexity:"O(n)"}]},Vj={title:"Array Representation",items:[{formula:"Parent(i)",value:"(i - 1) / 2"},{formula:"Left Child(i)",value:"2*i + 1"},{formula:"Right Child(i)",value:"2*i + 2"}]},Dj={title:"Time Complexity",operations:[{name:"Insert",average:"O(log n)",worst:"O(log n)",description:"Bubble up to root"},{name:"Extract Max",average:"O(log n)",worst:"O(log n)",description:"Bubble down"},{name:"Peek/Get Max",average:"O(1)",worst:"O(1)",description:"Always at root"},{name:"Build Heap",average:"O(n)",worst:"O(n)",description:"Bottom-up heapify"}],note:"Space complexity is O(n). Complete tree structure ensures height is always O(log n)."},$j={title:"Common Use Cases",items:["Priority Queues (largest = highest priority)","Heap Sort algorithm","Job scheduling (highest priority first)","Finding K largest elements","Median maintenance (with min heap)","Stock trading (highest bid)"]},Bj={title:"Max Heap vs Other Structures",items:[{vs:"Sorted Array",advantage:"O(log n) insert vs O(n)"},{vs:"BST",advantage:"O(1) get max vs O(log n)"},{vs:"Min Heap",advantage:"Fast max access vs fast min"}]},Hj={size:"Size",height:"Height",max:"Max"},qj={emptyHeap:"Max Heap is empty. Insert some values!",insertSuccess:"Inserted {value}",extractSuccess:"Extracted maximum: {value}",peekSuccess:"Maximum element is {value}",buildSuccess:"Built heap from array",clearSuccess:"Heap cleared!",errorNoValue:"Please enter a value!",errorEmpty:"Heap is empty!",errorFull:"Heap is full!",errorInsert:"Error inserting value",errorExtract:"Error extracting maximum"},Uj=[{type:"color",className:"root-color",label:"Root (Max)"},{type:"color",className:"node-color",label:"Internal Node"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Swapping"}],Kj={concept:zj,properties:Mj,operations:Aj,heapOperations:Fj,arrayRepresentation:Vj,complexity:Dj,useCases:$j,comparison:Bj,infoLabels:Hj,messages:qj,legend:Uj},Wj={stack:Dv,queue:Yv,linkedlist:ay,binarytree:xy,hashtable:_y,hashtableChaining:X,hashtableQuadratic:Dy,bst:Jy,avl:dj,splay:kj,minheap:Ij,maxheap:Kj};function ds({dataStructure:e}){const t=Wj[e];return t?n.jsxs("div",{className:"concepts-panel",children:[t.concept&&n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Oe,{className:"icon-sm"}),n.jsx("span",{children:t.concept.title})]}),n.jsxs("div",{className:"concept-content",children:[n.jsx("p",{children:t.concept.description}),t.concept.codeExample&&n.jsx("pre",{className:"concept-code-example",children:n.jsx("code",{children:t.concept.codeExample})}),t.concept.analogy&&n.jsxs("div",{className:"concept-analogy",children:[n.jsx(xe,{}),n.jsx("span",{children:t.concept.analogy})]})]})]}),t.properties&&n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Bn,{className:"icon-sm"}),n.jsx("span",{children:t.properties.title})]}),n.jsx("div",{className:"concept-content",children:n.jsx("div",{className:"properties-grid",children:t.properties.items.map((r,s)=>n.jsxs("div",{className:"property-item",children:[n.jsx("span",{className:"property-label",children:r.label}),n.jsx("span",{className:"property-value",children:r.value})]},s))})})]}),t.complexity&&n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Th,{className:"icon-sm"}),n.jsx("span",{children:t.complexity.title})]}),n.jsxs("div",{className:"concept-content",children:[n.jsx("div",{className:"complexity-table",children:t.complexity.operations.map((r,s)=>n.jsxs("div",{className:"complexity-row",children:[n.jsx("span",{className:"complexity-name",children:r.name}),r.time&&n.jsx("code",{className:"complexity-time",children:r.time}),r.average&&n.jsxs(n.Fragment,{children:[n.jsx("code",{className:"complexity-avg",children:r.average}),r.worst&&n.jsx("code",{className:"complexity-worst",children:r.worst})]}),r.description&&n.jsx("span",{className:"complexity-desc",children:r.description})]},s))}),t.complexity.note&&n.jsx("p",{className:"complexity-note",children:t.complexity.note})]})]}),t.useCases&&n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(So,{className:"icon-sm"}),n.jsx("span",{children:t.useCases.title})]}),n.jsx("div",{className:"concept-content",children:n.jsx("ul",{className:"use-cases-list",children:t.useCases.items.map((r,s)=>n.jsxs("li",{children:[n.jsx(Ie,{className:"icon-xs"}),n.jsx("span",{children:r})]},s))})})]}),t.traversals&&n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Bn,{className:"icon-sm"}),n.jsx("span",{children:t.traversals.title})]}),n.jsx("div",{className:"concept-content",children:n.jsx("div",{className:"traversals-list",children:t.traversals.items.map((r,s)=>n.jsxs("div",{className:"traversal-item",children:[n.jsx("span",{className:"traversal-name",children:r.name}),n.jsx("span",{className:"traversal-order",children:r.order}),n.jsx("span",{className:"traversal-use",children:r.use})]},s))})})]}),t.deleteCases&&n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Bn,{className:"icon-sm"}),n.jsx("span",{children:t.deleteCases.title})]}),n.jsx("div",{className:"concept-content",children:n.jsx("div",{className:"delete-cases-grid",children:t.deleteCases.items.map((r,s)=>n.jsxs("div",{className:"delete-case-item",children:[n.jsx("span",{className:"case-number",children:s+1}),n.jsxs("div",{children:[n.jsx("strong",{children:r.name}),n.jsx("p",{children:r.description})]})]},s))})})]}),t.comparison&&n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Bn,{className:"icon-sm"}),n.jsx("span",{children:t.comparison.title})]}),n.jsx("div",{className:"concept-content",children:n.jsx("div",{className:"comparison-list",children:t.comparison.items.map((r,s)=>n.jsxs("div",{className:"comparison-item",children:[n.jsxs("span",{className:"comparison-vs",children:["vs ",r.vs]}),n.jsx("span",{className:"comparison-advantage",children:r.advantage})]},s))})})]})]}):n.jsx("div",{className:"concepts-panel",children:n.jsx("p",{children:"Concepts not available for this data structure."})})}const $t=7,Gj={inorder:{name:"Inorder Traversal",order:"Left -> Root -> Right",description:"Returns elements in SORTED order for BST. This is the key property of BST!",useCase:["Get sorted elements","Validate BST","Range queries"],complexity:{time:"O(n)",space:"O(h)"}},preorder:{name:"Preorder Traversal",order:"Root -> Left -> Right",description:"Process root first. Useful for copying/serializing the BST structure.",useCase:["Copy tree structure","Serialize BST","Prefix expressions"],complexity:{time:"O(n)",space:"O(h)"}},postorder:{name:"Postorder Traversal",order:"Left -> Right -> Root",description:"Process children before root. Essential for safely deleting the tree.",useCase:["Delete tree safely","Calculate subtree sizes","Postfix expressions"],complexity:{time:"O(n)",space:"O(h)"}},levelorder:{name:"Level Order Traversal",order:"Level by Level (BFS)",description:"Visit nodes level by level using a queue. Shows tree structure clearly.",useCase:["Level-wise printing","Find width","Serialize for reconstruction"],complexity:{time:"O(n)",space:"O(w)"}}},kl=(e,t=0)=>e?Math.max(kl(e.left,t+1),kl(e.right,t+1)):t-1,Qj=(e,t)=>{const r=[];let s=e;for(;s&&(r.push(s.value),s.value!==t);)t<s.value?s=s.left:s=s.right;return r};function Yj({insertValue:e,deleteValue:t,searchValue:r,size:s,height:i,message:a,tree:l,isAnimating:o,visitedNodes:c,searchPath:h,searchResult:d,onInsertValueChange:p,onDeleteValueChange:m,onSearchValueChange:S,onInsert:w,onDelete:j,onSearch:y,onTraversal:f,onClear:g,onResetTraversal:x}){const P=(N,A)=>{const E=N.target.value;(E===""||E==="-"||/^-?\d*\.?\d*$/.test(E))&&A(E)};return n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Binary Search Tree"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"insertValue",value:e,onChange:N=>P(N,p),onKeyDown:N=>N.key==="Enter"&&w(),placeholder:"Enter a number",disabled:o}),n.jsx("button",{onClick:w,className:"btn btn-insert",disabled:o,children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"searchValue",children:"Search Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"searchValue",value:r,onChange:N=>P(N,S),onKeyDown:N=>N.key==="Enter"&&y(),placeholder:"Enter a number",disabled:o}),n.jsxs("button",{onClick:y,className:"btn btn-search",disabled:o||!l,children:[n.jsx(cs,{size:16})," Search"]})]}),h.length>0&&n.jsxs("div",{className:"search-path-display",children:[n.jsx("span",{className:"search-path-label",children:"Path:"}),n.jsx("div",{className:"search-path-nodes",children:h.map((N,A)=>n.jsxs(Je.Fragment,{children:[n.jsx("span",{className:`search-path-node ${A===h.length-1?d?"found":"not-found":""}`,children:N}),A<h.length-1&&n.jsx(re,{size:14,className:"search-path-arrow"})]},A))})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"deleteValue",children:"Delete Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"deleteValue",value:t,onChange:N=>P(N,m),onKeyDown:N=>N.key==="Enter"&&j(),placeholder:"Enter a number",disabled:o}),n.jsx("button",{onClick:j,className:"btn btn-delete",disabled:o,children:"Delete"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Traversals"}),n.jsx("div",{className:"btn-group",children:["inorder","preorder","postorder","levelorder"].map(N=>n.jsxs("button",{onClick:()=>f(N),className:`btn btn-traversal ${N==="inorder"?"btn-traversal-primary":""}`,disabled:o||!l,title:N==="inorder"?"Returns sorted order!":"",children:[N==="levelorder"?"Level Order":N.charAt(0).toUpperCase()+N.slice(1),N==="inorder"&&n.jsx("span",{className:"sorted-badge",children:"Sorted!"})]},N))}),c.length>0&&!o&&n.jsx("button",{onClick:x,className:"btn btn-secondary",style:{marginTop:"0.5rem",width:"100%"},children:"Reset Colors"})]}),n.jsxs("div",{className:"traversal-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--default"}),n.jsx("span",{children:"Not visited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visiting"}),n.jsx("span",{children:"Current"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visited"}),n.jsx("span",{children:"Visited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--search"}),n.jsx("span",{children:"Search path"})]})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Nodes:"}),n.jsx("span",{className:"info-value",children:s})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Height:"}),n.jsx("span",{className:"info-value",children:i})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Max:"}),n.jsx("span",{className:"info-value",children:$t})]})]}),s>=$t*.8&&s<$t&&n.jsxs("div",{className:"warning-box",children:[n.jsx(On,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Tree filling up!"})," ",s,"/",$t," nodes."]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:g,className:"btn btn-clear",disabled:o,children:"Clear Tree"})}),a&&n.jsx("div",{className:`message message-${a.includes("Error")||a.includes("error")||a.includes("not found")?"error":/success|complete|Inserted|Deleted|cleared|Found/i.test(a)?"success":a.includes("full")?"warning":"info"}`,children:a})]})}function Xj({tree:e,currentNode:t,visitedNodes:r,searchPath:s,searchResult:i}){const a=d=>{const p=t===d,m=r.includes(d),S=s.includes(d),w=s.length>0&&s[s.length-1]===d;let j="#6366f1",y="none";return p?(j="#f59e0b",y="drop-shadow(0 0 12px #f59e0b) drop-shadow(0 0 20px #f59e0b)"):w?(j=i?"#10b981":"#ef4444",y=i?"drop-shadow(0 0 12px #10b981)":"drop-shadow(0 0 12px #ef4444)"):S?(j="#3b82f6",y="drop-shadow(0 0 8px #3b82f6)"):m&&(j="#10b981",y="drop-shadow(0 0 6px #10b981)"),{color:j,glow:y,radius:p||w?30:25,stroke:p||w?3:2,fontSize:p||w?16:14,fontWeight:p||w?"bold":"normal"}},l=(d,p,m,S,w)=>{if(!d)return[];const j=Math.pow(2,w-S)*50,y=a(d.value),f=[];if(d.left){const g=s.includes(d.value)&&s.includes(d.left.value);f.push(n.jsx("line",{x1:p,y1:m,x2:p-j,y2:m+100,stroke:g?"#3b82f6":"rgba(255,255,255,0.3)",strokeWidth:g?3:2},`l-${d.value}-l`)),f.push(...l(d.left,p-j,m+100,S+1,w))}if(d.right){const g=s.includes(d.value)&&s.includes(d.right.value);f.push(n.jsx("line",{x1:p,y1:m,x2:p+j,y2:m+100,stroke:g?"#3b82f6":"rgba(255,255,255,0.3)",strokeWidth:g?3:2},`l-${d.value}-r`)),f.push(...l(d.right,p+j,m+100,S+1,w))}return f.push(n.jsxs("g",{style:{filter:y.glow,transition:"all 0.3s ease"},children:[n.jsx("circle",{cx:p,cy:m,r:y.radius,fill:y.color,stroke:"white",strokeWidth:y.stroke,style:{transition:"all 0.3s ease"}}),n.jsx("text",{x:p,y:m,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:y.fontSize,fontWeight:y.fontWeight,children:d.value})]},`n-${d.value}-${p}`)),f};if(!e)return n.jsxs("div",{className:"tree-empty",children:[n.jsx("p",{children:"BST is empty. Insert some values!"}),n.jsx("p",{className:"tree-empty-hint",children:"Try: 50, 30, 70, 20, 40, 60, 80"})]});const o=kl(e),c=(o+1)*100+50,h=Math.max(800,Math.pow(2,Math.max(o,1))*80);return n.jsx("svg",{width:h,height:c,className:"tree-svg",children:l(e,h/2,50,0,o)})}function Jj({traversalType:e,traversalResult:t,isAnimating:r,traversalComplete:s}){if(!e||t.length===0&&!r)return null;const i=Gj[e];return n.jsxs("div",{className:"traversal-output-panel",children:[n.jsxs("div",{style:{marginBottom:"1rem"},children:[n.jsxs("h3",{className:"traversal-title",children:[i==null?void 0:i.name,e==="inorder"&&n.jsx("span",{className:"sorted-indicator",children:"Returns Sorted Order!"}),r&&n.jsx("span",{className:"traversal-badge traversal-badge--running",children:"Running..."}),s&&n.jsx("span",{className:"traversal-badge traversal-badge--complete",children:"Complete"})]}),n.jsxs("p",{className:"traversal-order",children:[n.jsx("strong",{children:"Order:"})," ",i==null?void 0:i.order]}),n.jsx("p",{className:"traversal-description",children:i==null?void 0:i.description})]}),n.jsxs("div",{className:"traversal-output-box",children:[n.jsx("div",{className:"traversal-output-label",children:"Output Sequence:"}),n.jsx("div",{className:"traversal-sequence-container",children:t.length===0&&r?n.jsx("span",{style:{color:"var(--text-muted)",fontStyle:"italic"},children:"Traversing..."}):t.map((a,l)=>n.jsx("span",{className:`traversal-node ${l===t.length-1&&!s?"traversal-node--current":"traversal-node--complete"}`,children:a},l))})]}),s&&t.length>0&&n.jsxs("div",{className:"traversal-array-section",children:[n.jsx("div",{className:"traversal-array-label",children:"Array Output:"}),n.jsxs("code",{className:"traversal-array-output",children:["[",t.join(", "),"]"]}),e==="inorder"&&n.jsx("p",{className:"traversal-sorted-note",children:"Notice: The output is sorted! This is the BST property."}),n.jsxs("p",{className:"traversal-use-case",children:["Use case: ",i==null?void 0:i.useCase.join(" | ")]}),n.jsxs("div",{className:"traversal-complexity",children:[n.jsx("strong",{children:"Time:"})," ",n.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.time}),n.jsx("br",{}),n.jsx("strong",{children:"Space:"})," ",n.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.space})]})]})]})}function Zj(){const[e,t]=u.useState(null),[r,s]=u.useState(0),[i,a]=u.useState(-1),[l,o]=u.useState(""),[c,h]=u.useState(""),[d,p]=u.useState(""),[m,S]=u.useState(""),[w,j]=u.useState([]),[y,f]=u.useState(null),[g,x]=u.useState([]),[P,N]=u.useState(!1),[A,E]=u.useState(null),[V,F]=u.useState([]),[I,H]=u.useState(null),[K,D]=u.useState(!1);u.useEffect(()=>{q()},[]);const q=async()=>{try{const O=await(await fetch("/api/bst")).json();t(O.tree),s(O.size||0),a(O.height!==void 0?O.height:-1)}catch(L){console.error("Error loading BST:",L)}},k=L=>{S(L),setTimeout(()=>S(""),3e3)},z=()=>{j([]),f(null)},B=async()=>{if(!l.trim()){k("Please enter a number!");return}const L=Number(l);if(isNaN(L)){k("Please enter a valid number!");return}if(r>=$t){k(`Tree is full! Maximum size is ${$t} nodes.`);return}z(),M();try{const R=await(await fetch("/api/bst/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:L})})).json();if(R.error){k(R.error);return}t(R.tree),s(R.size||0),a(R.height!==void 0?R.height:-1),k(`Inserted ${L}`),o("")}catch{k("Error inserting node")}},T=async()=>{if(!c.trim()){k("Please enter a number!");return}const L=Number(c);if(isNaN(L)){k("Please enter a valid number!");return}z(),M();try{const R=await(await fetch("/api/bst/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:L})})).json();if(R.error){k(R.error);return}t(R.tree),s(R.size||0),a(R.height!==void 0?R.height:-1),k(`Deleted ${L}`),h("")}catch{k("Error deleting node")}},_=async()=>{if(!d.trim()){k("Please enter a number!");return}const L=Number(d);if(isNaN(L)){k("Please enter a valid number!");return}if(!e){k("Tree is empty!");return}M(),N(!0);const O=Qj(e,L);for(let R=0;R<O.length;R++)j(O.slice(0,R+1)),await new Promise(v=>setTimeout(v,500));try{const v=await(await fetch(`/api/bst/search?value=${L}`)).json();f(v.found),v.found?k(`Found ${L}!`):k(`${L} not found in BST`)}catch{k("Error searching")}N(!1),p("")},b=async()=>{try{await fetch("/api/bst/clear",{method:"POST"}),t(null),s(0),a(-1),M(),z(),k("BST cleared!")}catch{k("Error clearing tree")}},C=async L=>{if(!e){k("Tree is empty! Insert some nodes first.");return}z(),N(!0),x([]),E(null),F([]),H(L),D(!1);try{const v=(await(await fetch(`/api/bst/${L}`)).json()).traversal||[];if(v.length===0){k("Tree is empty!"),N(!1);return}for(let W=0;W<v.length;W++)E(v[W]),await new Promise(Y=>setTimeout(Y,600)),F(Y=>[...Y,v[W]]),x(Y=>[...Y,v[W]]),await new Promise(Y=>setTimeout(Y,200));E(null),D(!0),N(!1);const $=L.charAt(0).toUpperCase()+L.slice(1);k(`${$} traversal complete!${L==="inorder"?" (Sorted!)":""}`)}catch(O){console.error("Traversal error:",O),k("Error performing traversal"),N(!1)}},M=()=>{x([]),E(null),F([]),H(null),D(!1)};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsx("div",{className:"intro-left",children:n.jsx(ds,{dataStructure:"bst"})}),n.jsx(ve,{context:"Binary Search Tree (BST) data structure, search, insert, delete operations, and traversals"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsx(Yj,{insertValue:l,deleteValue:c,searchValue:d,size:r,height:i,message:m,tree:e,isAnimating:P,visitedNodes:V,searchPath:w,searchResult:y,onInsertValueChange:o,onDeleteValueChange:h,onSearchValueChange:p,onInsert:B,onDelete:T,onSearch:_,onTraversal:C,onClear:b,onResetTraversal:()=>{M(),z()}}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"BST Visualization"}),n.jsxs("p",{className:"bst-property-reminder",children:["Remember: ",n.jsxs("code",{children:["Left ","<"," Parent ","<"," Right"]})]}),n.jsx("div",{className:"tree-container",children:n.jsx(Xj,{tree:e,currentNode:A,visitedNodes:V,searchPath:w,searchResult:y})}),n.jsx(Jj,{traversalType:I,traversalResult:g,isAnimating:P,traversalComplete:K})]})]}),n.jsx(ye,{dataStructure:"bst"})]})}const Bt=7,e1={inorder:{name:"Inorder Traversal",order:"Left -> Root -> Right",description:"Returns elements in SORTED order.",useCase:["Get sorted elements","Validate BST property"],complexity:{time:"O(n)",space:"O(h)"}},preorder:{name:"Preorder Traversal",order:"Root -> Left -> Right",description:"Process root first. Useful for copying tree structure.",useCase:["Copy tree structure","Serialize AVL"],complexity:{time:"O(n)",space:"O(h)"}},postorder:{name:"Postorder Traversal",order:"Left -> Right -> Root",description:"Process children before root.",useCase:["Delete tree safely","Calculate subtree info"],complexity:{time:"O(n)",space:"O(h)"}},levelorder:{name:"Level Order Traversal",order:"Level by Level (BFS)",description:"Visit nodes level by level using a queue.",useCase:["Level-wise printing","Find width"],complexity:{time:"O(n)",space:"O(w)"}}},bl=(e,t=0)=>e?Math.max(bl(e.left,t+1),bl(e.right,t+1)):t-1,n1=(e,t)=>{const r=[];let s=e;for(;s&&(r.push(s.value),s.value!==t);)t<s.value?s=s.left:s=s.right;return r};function t1({insertValue:e,deleteValue:t,searchValue:r,size:s,height:i,message:a,tree:l,isAnimating:o,visitedNodes:c,searchPath:h,searchResult:d,onInsertValueChange:p,onDeleteValueChange:m,onSearchValueChange:S,onInsert:w,onDelete:j,onSearch:y,onTraversal:f,onClear:g,onResetTraversal:x}){const P=(N,A)=>{const E=N.target.value;(E===""||E==="-"||/^-?\d*\.?\d*$/.test(E))&&A(E)};return n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"AVL Tree"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"insertValue",value:e,onChange:N=>P(N,p),onKeyDown:N=>N.key==="Enter"&&w(),placeholder:"Enter a number",disabled:o}),n.jsx("button",{onClick:w,className:"btn btn-insert",disabled:o,children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"searchValue",children:"Search Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"searchValue",value:r,onChange:N=>P(N,S),onKeyDown:N=>N.key==="Enter"&&y(),placeholder:"Enter a number",disabled:o}),n.jsxs("button",{onClick:y,className:"btn btn-search",disabled:o||!l,children:[n.jsx(cs,{size:16})," Search"]})]}),h.length>0&&n.jsxs("div",{className:"search-path-display",children:[n.jsx("span",{className:"search-path-label",children:"Path:"}),n.jsx("div",{className:"search-path-nodes",children:h.map((N,A)=>n.jsxs(Je.Fragment,{children:[n.jsx("span",{className:`search-path-node ${A===h.length-1?d?"found":"not-found":""}`,children:N}),A<h.length-1&&n.jsx(re,{size:14,className:"search-path-arrow"})]},A))})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"deleteValue",children:"Delete Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"deleteValue",value:t,onChange:N=>P(N,m),onKeyDown:N=>N.key==="Enter"&&j(),placeholder:"Enter a number",disabled:o}),n.jsx("button",{onClick:j,className:"btn btn-delete",disabled:o,children:"Delete"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Traversals"}),n.jsx("div",{className:"btn-group",children:["inorder","preorder","postorder","levelorder"].map(N=>n.jsx("button",{onClick:()=>f(N),className:"btn btn-traversal",disabled:o||!l,children:N==="levelorder"?"Level Order":N.charAt(0).toUpperCase()+N.slice(1)},N))}),c.length>0&&!o&&n.jsx("button",{onClick:x,className:"btn btn-secondary",style:{marginTop:"0.5rem",width:"100%"},children:"Reset Colors"})]}),n.jsxs("div",{className:"traversal-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--default"}),n.jsx("span",{children:"Not visited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visiting"}),n.jsx("span",{children:"Current"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visited"}),n.jsx("span",{children:"Visited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--search"}),n.jsx("span",{children:"Search path"})]})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Nodes:"}),n.jsx("span",{className:"info-value",children:s})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Height:"}),n.jsx("span",{className:"info-value",children:i})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Max:"}),n.jsx("span",{className:"info-value",children:Bt})]})]}),s>=Bt*.8&&s<Bt&&n.jsxs("div",{className:"warning-box",children:[n.jsx(On,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Tree filling up!"})," ",s,"/",Bt," nodes."]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:g,className:"btn btn-clear",disabled:o,children:"Clear Tree"})}),a&&n.jsx("div",{className:`message message-${a.includes("Error")||a.includes("error")||a.includes("not found")?"error":/success|complete|Inserted|Deleted|cleared|Found|rebalanced/i.test(a)?"success":a.includes("full")?"warning":"info"}`,children:a})]})}function r1({tree:e,currentNode:t,visitedNodes:r,searchPath:s,searchResult:i}){const a=d=>{const p=t===d,m=r.includes(d),S=s.includes(d),w=s.length>0&&s[s.length-1]===d;let j="#8b5cf6",y="none";return p?(j="#f59e0b",y="drop-shadow(0 0 12px #f59e0b) drop-shadow(0 0 20px #f59e0b)"):w?(j=i?"#10b981":"#ef4444",y=i?"drop-shadow(0 0 12px #10b981)":"drop-shadow(0 0 12px #ef4444)"):S?(j="#3b82f6",y="drop-shadow(0 0 8px #3b82f6)"):m&&(j="#10b981",y="drop-shadow(0 0 6px #10b981)"),{color:j,glow:y,radius:p||w?30:25,stroke:p||w?3:2,fontSize:p||w?16:14,fontWeight:p||w?"bold":"normal"}},l=(d,p,m,S,w)=>{if(!d)return[];const j=Math.pow(2,w-S)*50,y=a(d.value),f=[];if(d.left){const g=s.includes(d.value)&&s.includes(d.left.value);f.push(n.jsx("line",{x1:p,y1:m,x2:p-j,y2:m+100,stroke:g?"#3b82f6":"rgba(255,255,255,0.3)",strokeWidth:g?3:2},`l-${d.value}-l`)),f.push(...l(d.left,p-j,m+100,S+1,w))}if(d.right){const g=s.includes(d.value)&&s.includes(d.right.value);f.push(n.jsx("line",{x1:p,y1:m,x2:p+j,y2:m+100,stroke:g?"#3b82f6":"rgba(255,255,255,0.3)",strokeWidth:g?3:2},`l-${d.value}-r`)),f.push(...l(d.right,p+j,m+100,S+1,w))}return f.push(n.jsxs("g",{style:{filter:y.glow,transition:"all 0.3s ease"},children:[n.jsx("circle",{cx:p,cy:m,r:y.radius,fill:y.color,stroke:"white",strokeWidth:y.stroke,style:{transition:"all 0.3s ease"}}),n.jsx("text",{x:p,y:m,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:y.fontSize,fontWeight:y.fontWeight,children:d.value}),d.balance!==void 0&&n.jsxs("g",{children:[n.jsx("circle",{cx:p+20,cy:m-20,r:10,fill:Math.abs(d.balance)<=1?"#10b981":"#ef4444"}),n.jsx("text",{x:p+20,y:m-20,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:10,fontWeight:"bold",children:d.balance})]})]},`n-${d.value}-${p}`)),f};if(!e)return n.jsxs("div",{className:"tree-empty",children:[n.jsx("p",{children:"AVL Tree is empty. Insert some values!"}),n.jsx("p",{className:"tree-empty-hint",children:"Try: 30, 20, 40, 10 (watch it balance!)"})]});const o=bl(e),c=(o+1)*100+50,h=Math.max(800,Math.pow(2,Math.max(o,1))*80);return n.jsx("svg",{width:h,height:c,className:"tree-svg",children:l(e,h/2,50,0,o)})}function s1({traversalType:e,traversalResult:t,isAnimating:r,traversalComplete:s}){if(!e||t.length===0&&!r)return null;const i=e1[e];return n.jsxs("div",{className:"traversal-output-panel",children:[n.jsxs("div",{style:{marginBottom:"1rem"},children:[n.jsxs("h3",{className:"traversal-title",children:[i==null?void 0:i.name,r&&n.jsx("span",{className:"traversal-badge traversal-badge--running",children:"Running..."}),s&&n.jsx("span",{className:"traversal-badge traversal-badge--complete",children:"Complete"})]}),n.jsxs("p",{className:"traversal-order",children:[n.jsx("strong",{children:"Order:"})," ",i==null?void 0:i.order]}),n.jsx("p",{className:"traversal-description",children:i==null?void 0:i.description})]}),n.jsxs("div",{className:"traversal-output-box",children:[n.jsx("div",{className:"traversal-output-label",children:"Output Sequence:"}),n.jsx("div",{className:"traversal-sequence-container",children:t.length===0&&r?n.jsx("span",{style:{color:"var(--text-muted)",fontStyle:"italic"},children:"Traversing..."}):t.map((a,l)=>n.jsx("span",{className:`traversal-node ${l===t.length-1&&!s?"traversal-node--current":"traversal-node--complete"}`,children:a},l))})]}),s&&t.length>0&&n.jsxs("div",{className:"traversal-array-section",children:[n.jsx("div",{className:"traversal-array-label",children:"Array Output:"}),n.jsxs("code",{className:"traversal-array-output",children:["[",t.join(", "),"]"]}),n.jsxs("p",{className:"traversal-use-case",children:["Use case: ",i==null?void 0:i.useCase.join(" | ")]}),n.jsxs("div",{className:"traversal-complexity",children:[n.jsx("strong",{children:"Time:"})," ",n.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.time}),n.jsx("br",{}),n.jsx("strong",{children:"Space:"})," ",n.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.space})]})]})]})}function i1(){const[e,t]=u.useState(null),[r,s]=u.useState(0),[i,a]=u.useState(-1),[l,o]=u.useState(""),[c,h]=u.useState(""),[d,p]=u.useState(""),[m,S]=u.useState(""),[w,j]=u.useState([]),[y,f]=u.useState(null),[g,x]=u.useState([]),[P,N]=u.useState(!1),[A,E]=u.useState(null),[V,F]=u.useState([]),[I,H]=u.useState(null),[K,D]=u.useState(!1);u.useEffect(()=>{q()},[]);const q=async()=>{try{const O=await(await fetch("/api/avl")).json();t(O.tree),s(O.size||0),a(O.height!==void 0?O.height:-1)}catch(L){console.error("Error loading AVL:",L)}},k=L=>{S(L),setTimeout(()=>S(""),3e3)},z=()=>{j([]),f(null)},B=async()=>{if(!l.trim()){k("Please enter a number!");return}const L=Number(l);if(isNaN(L)){k("Please enter a valid number!");return}if(r>=Bt){k(`Tree is full! Maximum size is ${Bt} nodes.`);return}z(),M();try{const R=await(await fetch("/api/avl/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:L})})).json();if(R.error){k(R.error);return}t(R.tree),s(R.size||0),a(R.height!==void 0?R.height:-1),k(`Inserted ${L} (tree rebalanced)`),o("")}catch{k("Error inserting node")}},T=async()=>{if(!c.trim()){k("Please enter a number!");return}const L=Number(c);if(isNaN(L)){k("Please enter a valid number!");return}z(),M();try{const R=await(await fetch("/api/avl/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:L})})).json();if(R.error){k(R.error);return}t(R.tree),s(R.size||0),a(R.height!==void 0?R.height:-1),k(`Deleted ${L} (tree rebalanced)`),h("")}catch{k("Error deleting node")}},_=async()=>{if(!d.trim()){k("Please enter a number!");return}const L=Number(d);if(isNaN(L)){k("Please enter a valid number!");return}if(!e){k("Tree is empty!");return}M(),N(!0);const O=n1(e,L);for(let R=0;R<O.length;R++)j(O.slice(0,R+1)),await new Promise(v=>setTimeout(v,500));try{const v=await(await fetch(`/api/avl/search?value=${L}`)).json();f(v.found),v.found?k(`Found ${L}!`):k(`${L} not found in AVL Tree`)}catch{k("Error searching")}N(!1),p("")},b=async()=>{try{await fetch("/api/avl/clear",{method:"POST"}),t(null),s(0),a(-1),M(),z(),k("AVL Tree cleared!")}catch{k("Error clearing tree")}},C=async L=>{if(!e){k("Tree is empty! Insert some nodes first.");return}z(),N(!0),x([]),E(null),F([]),H(L),D(!1);try{const v=(await(await fetch(`/api/avl/${L}`)).json()).traversal||[];if(v.length===0){k("Tree is empty!"),N(!1);return}for(let W=0;W<v.length;W++)E(v[W]),await new Promise(Y=>setTimeout(Y,600)),F(Y=>[...Y,v[W]]),x(Y=>[...Y,v[W]]),await new Promise(Y=>setTimeout(Y,200));E(null),D(!0),N(!1);const $=L.charAt(0).toUpperCase()+L.slice(1);k(`${$} traversal complete!`)}catch(O){console.error("Traversal error:",O),k("Error performing traversal"),N(!1)}},M=()=>{x([]),E(null),F([]),H(null),D(!1)};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsx("div",{className:"intro-left",children:n.jsx(ds,{dataStructure:"avl"})}),n.jsx(ve,{context:"AVL Tree data structure, self-balancing BST, rotations, balance factors, and O(log n) guaranteed operations"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsx(t1,{insertValue:l,deleteValue:c,searchValue:d,size:r,height:i,message:m,tree:e,isAnimating:P,visitedNodes:V,searchPath:w,searchResult:y,onInsertValueChange:o,onDeleteValueChange:h,onSearchValueChange:p,onInsert:B,onDelete:T,onSearch:_,onTraversal:C,onClear:b,onResetTraversal:()=>{M(),z()}}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"AVL Tree Visualization"}),n.jsxs("p",{className:"bst-property-reminder",children:["Self-balancing: ",n.jsx("code",{children:"|Balance Factor| <= 1"})," for all nodes"]}),n.jsx("div",{className:"tree-container",children:n.jsx(r1,{tree:e,currentNode:A,visitedNodes:V,searchPath:w,searchResult:y})}),n.jsx(s1,{traversalType:I,traversalResult:g,isAnimating:P,traversalComplete:K})]})]}),n.jsx(ye,{dataStructure:"avl"})]})}const Ht=7,a1={inorder:{name:"Inorder Traversal",order:"Left -> Root -> Right",description:"Returns elements in SORTED order.",useCase:["Get sorted elements","Validate BST property"],complexity:{time:"O(n)",space:"O(h)"}},preorder:{name:"Preorder Traversal",order:"Root -> Left -> Right",description:"Process root first. Root shows most recently accessed!",useCase:["See access pattern","Serialize structure"],complexity:{time:"O(n)",space:"O(h)"}},postorder:{name:"Postorder Traversal",order:"Left -> Right -> Root",description:"Process children before root.",useCase:["Delete tree safely","Calculate subtree info"],complexity:{time:"O(n)",space:"O(h)"}},levelorder:{name:"Level Order Traversal",order:"Level by Level (BFS)",description:"Visit nodes level by level.",useCase:["Level-wise printing","Find width"],complexity:{time:"O(n)",space:"O(w)"}}},wl=(e,t=0)=>e?Math.max(wl(e.left,t+1),wl(e.right,t+1)):t-1;function l1({insertValue:e,deleteValue:t,searchValue:r,size:s,height:i,message:a,tree:l,isAnimating:o,visitedNodes:c,lastSplayedValue:h,onInsertValueChange:d,onDeleteValueChange:p,onSearchValueChange:m,onInsert:S,onDelete:w,onSearch:j,onTraversal:y,onClear:f,onResetTraversal:g}){const x=(P,N)=>{const A=P.target.value;(A===""||A==="-"||/^-?\d*\.?\d*$/.test(A))&&N(A)};return n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Splay Tree"}),n.jsxs("div",{className:"splay-info-box",children:[n.jsx("strong",{children:"Key Feature:"})," Accessed nodes move to root!"]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"insertValue",value:e,onChange:P=>x(P,d),onKeyDown:P=>P.key==="Enter"&&S(),placeholder:"Enter a number",disabled:o}),n.jsx("button",{onClick:S,className:"btn btn-insert",disabled:o,children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"searchValue",children:"Search Value (Splays to Root!)"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"searchValue",value:r,onChange:P=>x(P,m),onKeyDown:P=>P.key==="Enter"&&j(),placeholder:"Enter a number",disabled:o}),n.jsxs("button",{onClick:j,className:"btn btn-search",disabled:o||!l,children:[n.jsx(cs,{size:16})," Search"]})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"deleteValue",children:"Delete Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"deleteValue",value:t,onChange:P=>x(P,p),onKeyDown:P=>P.key==="Enter"&&w(),placeholder:"Enter a number",disabled:o}),n.jsx("button",{onClick:w,className:"btn btn-delete",disabled:o,children:"Delete"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Traversals"}),n.jsx("div",{className:"btn-group",children:["inorder","preorder","postorder","levelorder"].map(P=>n.jsx("button",{onClick:()=>y(P),className:"btn btn-traversal",disabled:o||!l,children:P==="levelorder"?"Level Order":P.charAt(0).toUpperCase()+P.slice(1)},P))}),c.length>0&&!o&&n.jsx("button",{onClick:g,className:"btn btn-secondary",style:{marginTop:"0.5rem",width:"100%"},children:"Reset Colors"})]}),n.jsxs("div",{className:"traversal-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--default"}),n.jsx("span",{children:"Not visited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visiting"}),n.jsx("span",{children:"Current"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visited"}),n.jsx("span",{children:"Visited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot",style:{background:"#ec4899"}}),n.jsx("span",{children:"Root (Splayed)"})]})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Nodes:"}),n.jsx("span",{className:"info-value",children:s})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Height:"}),n.jsx("span",{className:"info-value",children:i})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Max:"}),n.jsx("span",{className:"info-value",children:Ht})]})]}),h!==null&&n.jsxs("div",{className:"splay-result-box",children:[n.jsx("strong",{children:"Root:"})," ",h," (most recently accessed)"]}),s>=Ht*.8&&s<Ht&&n.jsxs("div",{className:"warning-box",children:[n.jsx(On,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Tree filling up!"})," ",s,"/",Ht," nodes."]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:f,className:"btn btn-clear",disabled:o,children:"Clear Tree"})}),a&&n.jsx("div",{className:`message message-${a.includes("Error")||a.includes("error")||a.includes("not found")?"error":/success|complete|Inserted|Deleted|cleared|Found|root/i.test(a)?"success":a.includes("full")?"warning":"info"}`,children:a})]})}function o1({tree:e,currentNode:t,visitedNodes:r,lastSplayedValue:s}){const i=(h,d)=>{const p=t===h,m=r.includes(h),S=d&&s===h;let w="#06b6d4",j="none";return p?(w="#f59e0b",j="drop-shadow(0 0 12px #f59e0b) drop-shadow(0 0 20px #f59e0b)"):S?(w="#ec4899",j="drop-shadow(0 0 15px #ec4899) drop-shadow(0 0 25px #ec4899)"):d?(w="#8b5cf6",j="drop-shadow(0 0 8px #8b5cf6)"):m&&(w="#10b981",j="drop-shadow(0 0 6px #10b981)"),{color:w,glow:j,radius:p||S?30:d?28:25,stroke:p||S?3:2,fontSize:p||S?16:14,fontWeight:p||S||d?"bold":"normal"}},a=(h,d,p,m,S,w=!1)=>{if(!h)return[];const j=Math.pow(2,S-m)*50,y=i(h.value,w),f=[];return h.left&&(f.push(n.jsx("line",{x1:d,y1:p,x2:d-j,y2:p+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:2},`l-${h.value}-l`)),f.push(...a(h.left,d-j,p+100,m+1,S,!1))),h.right&&(f.push(n.jsx("line",{x1:d,y1:p,x2:d+j,y2:p+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:2},`l-${h.value}-r`)),f.push(...a(h.right,d+j,p+100,m+1,S,!1))),f.push(n.jsxs("g",{style:{filter:y.glow,transition:"all 0.3s ease"},children:[n.jsx("circle",{cx:d,cy:p,r:y.radius,fill:y.color,stroke:"white",strokeWidth:y.stroke,style:{transition:"all 0.3s ease"}}),n.jsx("text",{x:d,y:p,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:y.fontSize,fontWeight:y.fontWeight,children:h.value}),w&&n.jsx("text",{x:d,y:p+y.radius+15,textAnchor:"middle",fill:"#ec4899",fontSize:10,fontWeight:"bold",children:"ROOT"})]},`n-${h.value}-${d}`)),f};if(!e)return n.jsxs("div",{className:"tree-empty",children:[n.jsx("p",{children:"Splay Tree is empty. Insert some values!"}),n.jsx("p",{className:"tree-empty-hint",children:"Try inserting: 50, 30, 70, then search for 30!"})]});const l=wl(e),o=(l+1)*100+70,c=Math.max(800,Math.pow(2,Math.max(l,1))*80);return n.jsx("svg",{width:c,height:o,className:"tree-svg",children:a(e,c/2,50,0,l,!0)})}function c1({traversalType:e,traversalResult:t,isAnimating:r,traversalComplete:s}){if(!e||t.length===0&&!r)return null;const i=a1[e];return n.jsxs("div",{className:"traversal-output-panel",children:[n.jsxs("div",{style:{marginBottom:"1rem"},children:[n.jsxs("h3",{className:"traversal-title",children:[i==null?void 0:i.name,r&&n.jsx("span",{className:"traversal-badge traversal-badge--running",children:"Running..."}),s&&n.jsx("span",{className:"traversal-badge traversal-badge--complete",children:"Complete"})]}),n.jsxs("p",{className:"traversal-order",children:[n.jsx("strong",{children:"Order:"})," ",i==null?void 0:i.order]}),n.jsx("p",{className:"traversal-description",children:i==null?void 0:i.description})]}),n.jsxs("div",{className:"traversal-output-box",children:[n.jsx("div",{className:"traversal-output-label",children:"Output Sequence:"}),n.jsx("div",{className:"traversal-sequence-container",children:t.length===0&&r?n.jsx("span",{style:{color:"var(--text-muted)",fontStyle:"italic"},children:"Traversing..."}):t.map((a,l)=>n.jsx("span",{className:`traversal-node ${l===t.length-1&&!s?"traversal-node--current":"traversal-node--complete"}`,children:a},l))})]}),s&&t.length>0&&n.jsxs("div",{className:"traversal-array-section",children:[n.jsx("div",{className:"traversal-array-label",children:"Array Output:"}),n.jsxs("code",{className:"traversal-array-output",children:["[",t.join(", "),"]"]}),e==="preorder"&&n.jsx("p",{className:"traversal-sorted-note",children:"Note: First element is the root (most recently accessed)!"}),n.jsxs("p",{className:"traversal-use-case",children:["Use case: ",i==null?void 0:i.useCase.join(" | ")]}),n.jsxs("div",{className:"traversal-complexity",children:[n.jsx("strong",{children:"Time:"})," ",n.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.time}),n.jsx("br",{}),n.jsx("strong",{children:"Space:"})," ",n.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.space})]})]})]})}function d1(){const[e,t]=u.useState(null),[r,s]=u.useState(0),[i,a]=u.useState(-1),[l,o]=u.useState(""),[c,h]=u.useState(""),[d,p]=u.useState(""),[m,S]=u.useState(""),[w,j]=u.useState(null),[y,f]=u.useState([]),[g,x]=u.useState(!1),[P,N]=u.useState(null),[A,E]=u.useState([]),[V,F]=u.useState(null),[I,H]=u.useState(!1);u.useEffect(()=>{K()},[]);const K=async()=>{try{const C=await(await fetch("/api/splay")).json();t(C.tree),s(C.size||0),a(C.height!==void 0?C.height:-1)}catch(b){console.error("Error loading Splay Tree:",b)}},D=b=>{S(b),setTimeout(()=>S(""),3e3)},q=async()=>{if(!l.trim()){D("Please enter a number!");return}const b=Number(l);if(isNaN(b)){D("Please enter a valid number!");return}if(r>=Ht){D(`Tree is full! Maximum size is ${Ht} nodes.`);return}_(),j(null);try{const M=await(await fetch("/api/splay/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:b})})).json();if(M.error){D(M.error);return}t(M.tree),s(M.size||0),a(M.height!==void 0?M.height:-1),j(b),D(`Inserted ${b} (now at root!)`),o("")}catch{D("Error inserting node")}},k=async()=>{if(!c.trim()){D("Please enter a number!");return}const b=Number(c);if(isNaN(b)){D("Please enter a valid number!");return}_(),j(null);try{const M=await(await fetch("/api/splay/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:b})})).json();if(M.error){D(M.error);return}t(M.tree),s(M.size||0),a(M.height!==void 0?M.height:-1),D(`Deleted ${b}`),h("")}catch{D("Error deleting node")}},z=async()=>{if(!d.trim()){D("Please enter a number!");return}const b=Number(d);if(isNaN(b)){D("Please enter a valid number!");return}if(!e){D("Tree is empty!");return}_(),x(!0);try{const M=await(await fetch(`/api/splay/search?value=${b}`)).json();M.tree&&t(M.tree),M.found?(j(b),D(`Found ${b}! (splayed to root)`)):(j(null),D(`${b} not found in Splay Tree`)),await K()}catch{D("Error searching")}x(!1),p("")},B=async()=>{try{await fetch("/api/splay/clear",{method:"POST"}),t(null),s(0),a(-1),_(),j(null),D("Splay Tree cleared!")}catch{D("Error clearing tree")}},T=async b=>{if(!e){D("Tree is empty! Insert some nodes first.");return}j(null),x(!0),f([]),N(null),E([]),F(b),H(!1);try{const L=(await(await fetch(`/api/splay/${b}`)).json()).traversal||[];if(L.length===0){D("Tree is empty!"),x(!1);return}for(let R=0;R<L.length;R++)N(L[R]),await new Promise(v=>setTimeout(v,600)),E(v=>[...v,L[R]]),f(v=>[...v,L[R]]),await new Promise(v=>setTimeout(v,200));N(null),H(!0),x(!1);const O=b.charAt(0).toUpperCase()+b.slice(1);D(`${O} traversal complete!`)}catch(C){console.error("Traversal error:",C),D("Error performing traversal"),x(!1)}},_=()=>{f([]),N(null),E([]),F(null),H(!1)};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsx("div",{className:"intro-left",children:n.jsx(ds,{dataStructure:"splay"})}),n.jsx(ve,{context:"Splay Tree data structure, self-adjusting BST, splay operations, zig-zig, zig-zag rotations, amortized O(log n)"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsx(l1,{insertValue:l,deleteValue:c,searchValue:d,size:r,height:i,message:m,tree:e,isAnimating:g,visitedNodes:A,lastSplayedValue:w,onInsertValueChange:o,onDeleteValueChange:h,onSearchValueChange:p,onInsert:q,onDelete:k,onSearch:z,onTraversal:T,onClear:B,onResetTraversal:()=>{_(),j(null)}}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Splay Tree Visualization"}),n.jsxs("p",{className:"bst-property-reminder",children:["Self-adjusting: ",n.jsx("code",{children:"Recently accessed = Root"})]}),n.jsx("div",{className:"tree-container",children:n.jsx(o1,{tree:e,currentNode:P,visitedNodes:A,lastSplayedValue:w})}),n.jsx(c1,{traversalType:V,traversalResult:y,isAnimating:g,traversalComplete:I})]})]}),n.jsx(ye,{dataStructure:"splay"})]})}const ht=7;function u1({insertValue:e,buildArray:t,size:r,height:s,min:i,message:a,heap:l,isAnimating:o,onInsertValueChange:c,onBuildArrayChange:h,onInsert:d,onExtract:p,onPeek:m,onBuild:S,onClear:w}){const j=(y,f)=>{const g=y.target.value;(g===""||g==="-"||/^-?\d*\.?\d*$/.test(g))&&f(g)};return n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Min Heap"}),n.jsxs("div",{className:"heap-info-box",children:[n.jsx("strong",{children:"Priority Queue:"})," Minimum always at root!"]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"insertValue",value:e,onChange:y=>j(y,c),onKeyDown:y=>y.key==="Enter"&&d(),placeholder:"Enter a number",disabled:o}),n.jsx("button",{onClick:d,className:"btn btn-insert",disabled:o,children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Heap Operations"}),n.jsxs("div",{className:"btn-group-vertical",children:[n.jsxs("button",{onClick:p,className:"btn btn-extract",disabled:o||l.length===0,children:[n.jsx(Sg,{size:16})," Extract Min"]}),n.jsx("button",{onClick:m,className:"btn btn-peek",disabled:o||l.length===0,children:"Peek Min"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"buildArray",children:"Build from Array"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"buildArray",value:t,onChange:y=>h(y.target.value),onKeyDown:y=>y.key==="Enter"&&S(),placeholder:"e.g., 5, 3, 8, 1, 2",disabled:o}),n.jsx("button",{onClick:S,className:"btn btn-build",disabled:o,children:"Build"})]})]}),n.jsxs("div",{className:"traversal-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot",style:{background:"#10b981"}}),n.jsx("span",{children:"Root (Min)"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot",style:{background:"#6366f1"}}),n.jsx("span",{children:"Internal"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot",style:{background:"#8b5cf6"}}),n.jsx("span",{children:"Leaf"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot",style:{background:"#f59e0b"}}),n.jsx("span",{children:"Highlighted"})]})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Size:"}),n.jsx("span",{className:"info-value",children:r})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Height:"}),n.jsx("span",{className:"info-value",children:s})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Min:"}),n.jsx("span",{className:"info-value",children:i??"-"})]})]}),r>=ht*.8&&r<ht&&n.jsxs("div",{className:"warning-box",children:[n.jsx(On,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Heap filling up!"})," ",r,"/",ht," elements."]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:w,className:"btn btn-clear",disabled:o,children:"Clear Heap"})}),a&&n.jsx("div",{className:`message message-${a.includes("Error")||a.includes("error")?"error":/success|complete|Inserted|Extracted|cleared|Built/i.test(a)?"success":a.includes("full")||a.includes("empty")?"warning":"info"}`,children:a})]})}function h1({tree:e,heap:t,highlightedIndex:r,swappingIndices:s}){const i=d=>{const p=r===d,m=s.includes(d),S=d===0;let w="#6366f1",j="none";return p||m?(w="#f59e0b",j="drop-shadow(0 0 12px #f59e0b)"):S&&(w="#10b981",j="drop-shadow(0 0 8px #10b981)"),{color:w,glow:j,radius:p||S?28:25}},a=(d,p=0)=>d?Math.max(a(d.left,p+1),a(d.right,p+1)):p-1,l=(d,p,m,S,w)=>{if(!d)return[];const j=Math.pow(2,w-S)*50,y=i(d.index),f=[];return d.left&&(f.push(n.jsx("line",{x1:p,y1:m,x2:p-j,y2:m+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:2},`l-${d.index}-l`)),f.push(...l(d.left,p-j,m+100,S+1,w))),d.right&&(f.push(n.jsx("line",{x1:p,y1:m,x2:p+j,y2:m+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:2},`l-${d.index}-r`)),f.push(...l(d.right,p+j,m+100,S+1,w))),f.push(n.jsxs("g",{style:{filter:y.glow,transition:"all 0.3s ease"},children:[n.jsx("circle",{cx:p,cy:m,r:y.radius,fill:y.color,stroke:"white",strokeWidth:2}),n.jsx("text",{x:p,y:m,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:14,fontWeight:"bold",children:d.value}),n.jsxs("text",{x:p,y:m+y.radius+12,textAnchor:"middle",fill:"rgba(255,255,255,0.6)",fontSize:10,children:["[",d.index,"]"]})]},`n-${d.index}`)),f};if(!e||t.length===0)return n.jsxs("div",{className:"tree-empty",children:[n.jsx("p",{children:"Min Heap is empty. Insert some values!"}),n.jsx("p",{className:"tree-empty-hint",children:"Try: 5, 3, 8, 1, 2 or build from array"})]});const o=a(e),c=(o+1)*100+80,h=Math.max(600,Math.pow(2,Math.max(o,1))*70);return n.jsx("svg",{width:h,height:c,className:"tree-svg",children:l(e,h/2,50,0,o)})}function p1({heap:e,highlightedIndex:t,swappingIndices:r}){return e.length===0?n.jsx("div",{className:"heap-array-empty",children:n.jsx("code",{children:"[ ]"})}):n.jsxs("div",{className:"heap-array-container",children:[n.jsx("div",{className:"heap-array",children:e.map((s,i)=>{const a=t===i,l=r.includes(i),o=i===0;return n.jsxs("div",{className:`heap-array-cell ${a||l?"highlighted":""} ${o?"root":""}`,children:[n.jsx("span",{className:"heap-array-index",children:i}),n.jsx("span",{className:"heap-array-value",children:s})]},i)})}),n.jsxs("div",{className:"heap-array-formulas",children:[n.jsxs("div",{className:"formula-item",children:[n.jsx("strong",{children:"Parent(i):"})," ",n.jsx("code",{children:"(i - 1) / 2"})]}),n.jsxs("div",{className:"formula-item",children:[n.jsx("strong",{children:"Left(i):"})," ",n.jsx("code",{children:"2*i + 1"})]}),n.jsxs("div",{className:"formula-item",children:[n.jsx("strong",{children:"Right(i):"})," ",n.jsx("code",{children:"2*i + 2"})]})]})]})}function f1(){const[e,t]=u.useState([]),[r,s]=u.useState(null),[i,a]=u.useState(0),[l,o]=u.useState(-1),[c,h]=u.useState(null),[d,p]=u.useState(""),[m,S]=u.useState(""),[w,j]=u.useState(""),[y,f]=u.useState(!1),[g,x]=u.useState(null),[P,N]=u.useState([]);u.useEffect(()=>{A()},[]);const A=async()=>{try{const q=await(await fetch("/api/minheap")).json();t(q.heap||[]),s(q.tree),a(q.size||0),o(q.height!==void 0?q.height:-1),h(q.min)}catch(D){console.error("Error loading Min Heap:",D)}},E=D=>{j(D),setTimeout(()=>j(""),3e3)},V=async()=>{if(!d.trim()){E("Please enter a number!");return}const D=Number(d);if(isNaN(D)){E("Please enter a valid number!");return}if(i>=ht){E(`Heap is full! Maximum size is ${ht}.`);return}f(!0);try{const k=await(await fetch("/api/minheap/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:D})})).json();if(k.error){E(k.error),f(!1);return}t(k.heap||[]),s(k.tree),a(k.size||0),o(k.height!==void 0?k.height:-1),h(k.min),E(`Inserted ${D}`),p("")}catch{E("Error inserting element")}f(!1)},F=async()=>{if(i===0){E("Heap is empty!");return}f(!0),x(0),await new Promise(D=>setTimeout(D,500));try{const q=await(await fetch("/api/minheap/extract",{method:"POST"})).json();if(q.error){E(q.error),f(!1),x(null);return}t(q.heap||[]),s(q.tree),a(q.size||0),o(q.height!==void 0?q.height:-1),h(q.min),E(`Extracted minimum: ${q.extracted}`)}catch{E("Error extracting minimum")}x(null),f(!1)},I=async()=>{if(i===0){E("Heap is empty!");return}x(0),E(`Minimum element is ${c}`),await new Promise(D=>setTimeout(D,1500)),x(null)},H=async()=>{if(!m.trim()){E("Please enter an array of numbers!");return}const D=m.split(",").map(q=>{const k=Number(q.trim());return isNaN(k)?null:k}).filter(q=>q!==null);if(D.length===0){E("Please enter valid numbers separated by commas!");return}if(D.length>ht){E(`Array too large! Maximum size is ${ht}.`);return}f(!0);try{const k=await(await fetch("/api/minheap/build",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({array:D})})).json();if(k.error){E(k.error),f(!1);return}t(k.heap||[]),s(k.tree),a(k.size||0),o(k.height!==void 0?k.height:-1),h(k.min),E("Built heap from array!"),S("")}catch{E("Error building heap")}f(!1)},K=async()=>{try{await fetch("/api/minheap/clear",{method:"POST"}),t([]),s(null),a(0),o(-1),h(null),x(null),N([]),E("Heap cleared!")}catch{E("Error clearing heap")}};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsx("div",{className:"intro-left",children:n.jsx(ds,{dataStructure:"minheap"})}),n.jsx(ve,{context:"Min Heap data structure, priority queue, heapify operations, O(log n) insert and extract, O(1) peek minimum"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsx(u1,{insertValue:d,buildArray:m,size:i,height:l,min:c,message:w,heap:e,isAnimating:y,onInsertValueChange:p,onBuildArrayChange:S,onInsert:V,onExtract:F,onPeek:I,onBuild:H,onClear:K}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Min Heap Visualization"}),n.jsxs("p",{className:"bst-property-reminder",children:["Heap Property: ",n.jsx("code",{children:"Parent <= Children"})," (Min at root)"]}),n.jsxs("div",{className:"heap-tree-section",children:[n.jsx("h3",{children:"Tree View"}),n.jsx("div",{className:"tree-container",children:n.jsx(h1,{tree:r,heap:e,highlightedIndex:g,swappingIndices:P})})]}),n.jsxs("div",{className:"heap-array-section",children:[n.jsx("h3",{children:"Array Representation"}),n.jsx(p1,{heap:e,highlightedIndex:g,swappingIndices:P})]})]})]}),n.jsx(ye,{dataStructure:"minheap"})]})}const pt=7;function m1({insertValue:e,buildArray:t,size:r,height:s,max:i,message:a,heap:l,isAnimating:o,onInsertValueChange:c,onBuildArrayChange:h,onInsert:d,onExtract:p,onPeek:m,onBuild:S,onClear:w}){const j=(y,f)=>{const g=y.target.value;(g===""||g==="-"||/^-?\d*\.?\d*$/.test(g))&&f(g)};return n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Max Heap"}),n.jsxs("div",{className:"heap-info-box max-heap",children:[n.jsx("strong",{children:"Priority Queue:"})," Maximum always at root!"]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"insertValue",value:e,onChange:y=>j(y,c),onKeyDown:y=>y.key==="Enter"&&d(),placeholder:"Enter a number",disabled:o}),n.jsx("button",{onClick:d,className:"btn btn-insert",disabled:o,children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Heap Operations"}),n.jsxs("div",{className:"btn-group-vertical",children:[n.jsxs("button",{onClick:p,className:"btn btn-extract-max",disabled:o||l.length===0,children:[n.jsx(Eg,{size:16})," Extract Max"]}),n.jsx("button",{onClick:m,className:"btn btn-peek",disabled:o||l.length===0,children:"Peek Max"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"buildArray",children:"Build from Array"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"buildArray",value:t,onChange:y=>h(y.target.value),onKeyDown:y=>y.key==="Enter"&&S(),placeholder:"e.g., 5, 3, 8, 1, 2",disabled:o}),n.jsx("button",{onClick:S,className:"btn btn-build",disabled:o,children:"Build"})]})]}),n.jsxs("div",{className:"traversal-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot",style:{background:"#ef4444"}}),n.jsx("span",{children:"Root (Max)"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot",style:{background:"#6366f1"}}),n.jsx("span",{children:"Internal"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot",style:{background:"#8b5cf6"}}),n.jsx("span",{children:"Leaf"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot",style:{background:"#f59e0b"}}),n.jsx("span",{children:"Highlighted"})]})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Size:"}),n.jsx("span",{className:"info-value",children:r})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Height:"}),n.jsx("span",{className:"info-value",children:s})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Max:"}),n.jsx("span",{className:"info-value",children:i??"-"})]})]}),r>=pt*.8&&r<pt&&n.jsxs("div",{className:"warning-box",children:[n.jsx(On,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Heap filling up!"})," ",r,"/",pt," elements."]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:w,className:"btn btn-clear",disabled:o,children:"Clear Heap"})}),a&&n.jsx("div",{className:`message message-${a.includes("Error")||a.includes("error")?"error":/success|complete|Inserted|Extracted|cleared|Built/i.test(a)?"success":a.includes("full")||a.includes("empty")?"warning":"info"}`,children:a})]})}function g1({tree:e,heap:t,highlightedIndex:r,swappingIndices:s}){const i=d=>{const p=r===d,m=s.includes(d),S=d===0;let w="#6366f1",j="none";return p||m?(w="#f59e0b",j="drop-shadow(0 0 12px #f59e0b)"):S&&(w="#ef4444",j="drop-shadow(0 0 8px #ef4444)"),{color:w,glow:j,radius:p||S?28:25}},a=(d,p=0)=>d?Math.max(a(d.left,p+1),a(d.right,p+1)):p-1,l=(d,p,m,S,w)=>{if(!d)return[];const j=Math.pow(2,w-S)*50,y=i(d.index),f=[];return d.left&&(f.push(n.jsx("line",{x1:p,y1:m,x2:p-j,y2:m+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:2},`l-${d.index}-l`)),f.push(...l(d.left,p-j,m+100,S+1,w))),d.right&&(f.push(n.jsx("line",{x1:p,y1:m,x2:p+j,y2:m+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:2},`l-${d.index}-r`)),f.push(...l(d.right,p+j,m+100,S+1,w))),f.push(n.jsxs("g",{style:{filter:y.glow,transition:"all 0.3s ease"},children:[n.jsx("circle",{cx:p,cy:m,r:y.radius,fill:y.color,stroke:"white",strokeWidth:2}),n.jsx("text",{x:p,y:m,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:14,fontWeight:"bold",children:d.value}),n.jsxs("text",{x:p,y:m+y.radius+12,textAnchor:"middle",fill:"rgba(255,255,255,0.6)",fontSize:10,children:["[",d.index,"]"]})]},`n-${d.index}`)),f};if(!e||t.length===0)return n.jsxs("div",{className:"tree-empty",children:[n.jsx("p",{children:"Max Heap is empty. Insert some values!"}),n.jsx("p",{className:"tree-empty-hint",children:"Try: 5, 3, 8, 1, 9 or build from array"})]});const o=a(e),c=(o+1)*100+80,h=Math.max(600,Math.pow(2,Math.max(o,1))*70);return n.jsx("svg",{width:h,height:c,className:"tree-svg",children:l(e,h/2,50,0,o)})}function x1({heap:e,highlightedIndex:t,swappingIndices:r}){return e.length===0?n.jsx("div",{className:"heap-array-empty",children:n.jsx("code",{children:"[ ]"})}):n.jsxs("div",{className:"heap-array-container",children:[n.jsx("div",{className:"heap-array",children:e.map((s,i)=>{const a=t===i,l=r.includes(i),o=i===0;return n.jsxs("div",{className:`heap-array-cell ${a||l?"highlighted":""} ${o?"root-max":""}`,children:[n.jsx("span",{className:"heap-array-index",children:i}),n.jsx("span",{className:"heap-array-value",children:s})]},i)})}),n.jsxs("div",{className:"heap-array-formulas",children:[n.jsxs("div",{className:"formula-item",children:[n.jsx("strong",{children:"Parent(i):"})," ",n.jsx("code",{children:"(i - 1) / 2"})]}),n.jsxs("div",{className:"formula-item",children:[n.jsx("strong",{children:"Left(i):"})," ",n.jsx("code",{children:"2*i + 1"})]}),n.jsxs("div",{className:"formula-item",children:[n.jsx("strong",{children:"Right(i):"})," ",n.jsx("code",{children:"2*i + 2"})]})]})]})}function v1(){const[e,t]=u.useState([]),[r,s]=u.useState(null),[i,a]=u.useState(0),[l,o]=u.useState(-1),[c,h]=u.useState(null),[d,p]=u.useState(""),[m,S]=u.useState(""),[w,j]=u.useState(""),[y,f]=u.useState(!1),[g,x]=u.useState(null),[P,N]=u.useState([]);u.useEffect(()=>{A()},[]);const A=async()=>{try{const q=await(await fetch("/api/maxheap")).json();t(q.heap||[]),s(q.tree),a(q.size||0),o(q.height!==void 0?q.height:-1),h(q.max)}catch(D){console.error("Error loading Max Heap:",D)}},E=D=>{j(D),setTimeout(()=>j(""),3e3)},V=async()=>{if(!d.trim()){E("Please enter a number!");return}const D=Number(d);if(isNaN(D)){E("Please enter a valid number!");return}if(i>=pt){E(`Heap is full! Maximum size is ${pt}.`);return}f(!0);try{const k=await(await fetch("/api/maxheap/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:D})})).json();if(k.error){E(k.error),f(!1);return}t(k.heap||[]),s(k.tree),a(k.size||0),o(k.height!==void 0?k.height:-1),h(k.max),E(`Inserted ${D}`),p("")}catch{E("Error inserting element")}f(!1)},F=async()=>{if(i===0){E("Heap is empty!");return}f(!0),x(0),await new Promise(D=>setTimeout(D,500));try{const q=await(await fetch("/api/maxheap/extract",{method:"POST"})).json();if(q.error){E(q.error),f(!1),x(null);return}t(q.heap||[]),s(q.tree),a(q.size||0),o(q.height!==void 0?q.height:-1),h(q.max),E(`Extracted maximum: ${q.extracted}`)}catch{E("Error extracting maximum")}x(null),f(!1)},I=async()=>{if(i===0){E("Heap is empty!");return}x(0),E(`Maximum element is ${c}`),await new Promise(D=>setTimeout(D,1500)),x(null)},H=async()=>{if(!m.trim()){E("Please enter an array of numbers!");return}const D=m.split(",").map(q=>{const k=Number(q.trim());return isNaN(k)?null:k}).filter(q=>q!==null);if(D.length===0){E("Please enter valid numbers separated by commas!");return}if(D.length>pt){E(`Array too large! Maximum size is ${pt}.`);return}f(!0);try{const k=await(await fetch("/api/maxheap/build",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({array:D})})).json();if(k.error){E(k.error),f(!1);return}t(k.heap||[]),s(k.tree),a(k.size||0),o(k.height!==void 0?k.height:-1),h(k.max),E("Built heap from array!"),S("")}catch{E("Error building heap")}f(!1)},K=async()=>{try{await fetch("/api/maxheap/clear",{method:"POST"}),t([]),s(null),a(0),o(-1),h(null),x(null),N([]),E("Heap cleared!")}catch{E("Error clearing heap")}};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsx("div",{className:"intro-left",children:n.jsx(ds,{dataStructure:"maxheap"})}),n.jsx(ve,{context:"Max Heap data structure, priority queue, heapify operations, O(log n) insert and extract, O(1) peek maximum, heap sort"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsx(m1,{insertValue:d,buildArray:m,size:i,height:l,max:c,message:w,heap:e,isAnimating:y,onInsertValueChange:p,onBuildArrayChange:S,onInsert:V,onExtract:F,onPeek:I,onBuild:H,onClear:K}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Max Heap Visualization"}),n.jsxs("p",{className:"bst-property-reminder",children:["Heap Property: ",n.jsx("code",{children:"Parent >= Children"})," (Max at root)"]}),n.jsxs("div",{className:"heap-tree-section",children:[n.jsx("h3",{children:"Tree View"}),n.jsx("div",{className:"tree-container",children:n.jsx(g1,{tree:r,heap:e,highlightedIndex:g,swappingIndices:P})})]}),n.jsxs("div",{className:"heap-array-section",children:[n.jsx("h3",{children:"Array Representation"}),n.jsx(x1,{heap:e,highlightedIndex:g,swappingIndices:P})]})]})]}),n.jsx(ye,{dataStructure:"maxheap"})]})}function y1(){const[e,t]=u.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=u.useState(""),[i,a]=u.useState(""),[l,o]=u.useState(""),[c,h]=u.useState("1"),[d,p]=u.useState(null),[m,S]=u.useState(null),[w,j]=u.useState(null),[y,f]=u.useState({}),{message:g,showMessage:x}=He(3e3);u.useEffect(()=>{N()},[]),u.useEffect(()=>{e.vertices.length>0&&P()},[e.vertices]),u.useEffect(()=>{if(d||m){const k=setTimeout(()=>{p(null),S(null),j(null)},2e3);return()=>clearTimeout(k)}},[d,m]);const P=u.useCallback(()=>{const _=Math.min(450,300)*.38,b={},C=e.vertices.length;e.vertices.forEach((M,L)=>{const O=2*Math.PI*L/C-Math.PI/2;b[M]={x:225+_*Math.cos(O),y:150+_*Math.sin(O)}}),f(b)},[e.vertices]),N=async()=>{try{const k=await ae("/api/graph");t(k)}catch(k){console.error("Error loading graph:",k)}},A=async()=>{if(!r.trim()){x("Please enter a vertex name!","error");return}try{const k=await ee("/api/graph/vertex",{vertex:r.trim()});if(k.error){x(k.error,"error");return}t(k),p(r.trim().toUpperCase()),j("add-vertex"),x(`Added vertex '${r}' - Created new entry in adjacency list`,"success"),s("")}catch{x("Error adding vertex","error")}},E=async k=>{try{const z=await yi(`/api/graph/vertex/${k}`);if(z.error){x(z.error,"error");return}t(z),x(`Removed vertex '${k}' - Deleted from list and all references`,"success")}catch{x("Error removing vertex","error")}},V=async()=>{if(!i.trim()||!l.trim()){x("Please select both vertices!","error");return}const k=parseInt(c)||1;try{const z=await ee("/api/graph/edge",{from:i.trim(),to:l.trim(),weight:k});if(z.error){x(z.error,"error");return}t(z),S({from:i,to:l}),j("add-edge"),x(`Added edge ${i}→${l} (weight: ${k}) - Appended to ${i}'s neighbor list`,"success"),a(""),o(""),h("1")}catch{x("Error adding edge","error")}},F=async()=>{if(!i.trim()||!l.trim()){x("Please select both vertices!","error");return}try{const k=await yi("/api/graph/edge",{from:i.trim(),to:l.trim()});if(k.error){x(k.error,"error");return}t(k),x(`Removed edge ${i}→${l} - Removed from neighbor lists`,"success"),a(""),o("")}catch{x("Error removing edge","error")}},I=async k=>{try{const z=await ee(`/api/graph/preset/${k}`,{});if(z.error){x(z.error,"error");return}t(z),x(`Loaded '${k}' graph preset`,"success")}catch{x("Error loading preset","error")}},H=async()=>{try{const k=await ee("/api/graph/clear",{});t(k),x("Graph cleared","success")}catch{x("Error clearing graph","error")}},K=(k,z)=>{k.key==="Enter"&&z()},D=k=>d===k&&w==="add-vertex"?"graph-node highlighted-new":m&&(m.from===k||m.to===k)?"graph-node highlighted-edge":"graph-node",q=(k,z)=>m&&(m.from===k&&m.to===z||m.from===z&&m.to===k)?"graph-edge highlighted":"graph-edge";return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Oe,{className:"icon-sm"}),n.jsx("span",{children:"What is an Adjacency List?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["An ",n.jsx("strong",{children:"Adjacency List"})," represents a graph using a collection of lists. Each vertex stores a list of its neighboring vertices."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(xe,{}),n.jsx("span",{children:"Like a contact list - each person has their own list of friends they're connected to!"})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Add Vertex"}),n.jsx("span",{className:"op-desc",children:"Create new list"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Add Edge"}),n.jsx("span",{className:"op-desc",children:"Append to list"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Remove Edge"}),n.jsx("span",{className:"op-desc",children:"Search & delete"}),n.jsx("span",{className:"op-complexity",children:"O(E)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Find Neighbors"}),n.jsx("span",{className:"op-desc",children:"Return list"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"Why Adjacency List?"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Space efficient for sparse graphs: O(V + E)"}),n.jsx("li",{children:"Fast iteration over neighbors"}),n.jsx("li",{children:"Easy to add vertices and edges"}),n.jsx("li",{children:"Supports weighted edges naturally"})]})]})]})]}),n.jsx(ve,{context:"Adjacency List graph representation, graph data structure"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Operations"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Load Preset"}),n.jsxs("div",{className:"btn-group preset-group",children:[n.jsx("button",{onClick:()=>I("simple"),className:"btn btn-preset",children:"Simple"}),n.jsx("button",{onClick:()=>I("tree"),className:"btn btn-preset",children:"Tree"}),n.jsx("button",{onClick:()=>I("cyclic"),className:"btn btn-preset",children:"Cyclic"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsxs("label",{htmlFor:"vertexInput",children:[n.jsx(vi,{size:14})," Add Vertex"]}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"vertexInput",value:r,onChange:k=>s(k.target.value.toUpperCase()),onKeyPress:k=>K(k,A),placeholder:"Name (e.g., A)",maxLength:3}),n.jsx("button",{onClick:A,className:"btn btn-add",children:"Add"})]}),n.jsx("span",{className:"operation-hint",children:"Creates a new empty list entry"})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Add/Remove Edge (with Weight)"}),n.jsxs("div",{className:"edge-inputs",children:[n.jsxs("select",{value:i,onChange:k=>a(k.target.value),className:"vertex-select",children:[n.jsx("option",{value:"",children:"From"}),e.vertices.map(k=>n.jsx("option",{value:k,children:k},k))]}),n.jsx("span",{className:"edge-arrow",children:"→"}),n.jsxs("select",{value:l,onChange:k=>o(k.target.value),className:"vertex-select",children:[n.jsx("option",{value:"",children:"To"}),e.vertices.map(k=>n.jsx("option",{value:k,children:k},k))]})]}),n.jsxs("div",{className:"weight-input",children:[n.jsx("label",{htmlFor:"weightInput",children:"Weight:"}),n.jsx("input",{type:"number",id:"weightInput",value:c,onChange:k=>h(k.target.value),min:"1",max:"99",className:"weight-field"})]}),n.jsxs("div",{className:"btn-group",children:[n.jsxs("button",{onClick:V,className:"btn btn-add",children:[n.jsx(vi,{size:14})," Add Edge"]}),n.jsxs("button",{onClick:F,className:"btn btn-remove",children:[n.jsx(xl,{size:14})," Remove"]})]}),n.jsx("span",{className:"operation-hint",children:"Appends neighbor to the vertex's list"})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:H,className:"btn btn-clear full-width",children:"Clear Graph"})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Vertices (V):"}),n.jsx("span",{className:"info-value",children:e.vertex_count||0})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Edges (E):"}),n.jsx("span",{className:"info-value",children:e.edge_count||0})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Space:"}),n.jsx("span",{className:"info-value",children:"O(V + E)"})]})]}),n.jsx(Be,{message:g})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Graph View"}),n.jsx("div",{className:"graph-container",children:e.vertices.length===0?n.jsx("div",{className:"graph-empty",children:"Graph is empty. Add vertices or load a preset!"}):n.jsxs("svg",{className:"graph-svg",viewBox:"0 0 450 300",children:[e.edges.map(([k,z,B],T)=>{const _=y[k],b=y[z];if(!_||!b)return null;const C=(_.x+b.x)/2,M=(_.y+b.y)/2;return n.jsxs("g",{children:[n.jsx("line",{x1:_.x,y1:_.y,x2:b.x,y2:b.y,className:q(k,z)}),n.jsx("circle",{cx:C,cy:M,r:12,className:"weight-bg"}),n.jsx("text",{x:C,y:M,className:"weight-label",dominantBaseline:"central",textAnchor:"middle",children:B})]},`edge-${T}`)}),e.vertices.map(k=>{const z=y[k];return z?n.jsxs("g",{className:D(k),children:[n.jsx("circle",{cx:z.x,cy:z.y,r:22,className:"node-circle"}),n.jsx("text",{x:z.x,y:z.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:k})]},k):null})]})}),n.jsxs("div",{className:"adjacency-list-section",children:[n.jsx("h3",{children:"Behind the Scenes: Adjacency List Structure"}),n.jsx("p",{className:"adj-explanation",children:"Each vertex has its own linked list of neighbors. When you add an edge A→B, we append B to A's list (and A to B's list for undirected graphs)."}),n.jsx("div",{className:"adj-list-visual",children:e.vertices.length===0?n.jsx("div",{className:"adj-empty",children:"No vertices in graph"}):e.vertices.map(k=>{const z=e.adjacency_list[k]||[],B=d===k||m&&(m.from===k||m.to===k);return n.jsxs("div",{className:`adj-row-visual ${B?"highlighted":""}`,children:[n.jsx("div",{className:"adj-vertex-box",children:n.jsx("span",{className:"adj-vertex-label",children:k})}),n.jsx("div",{className:"adj-pointer",children:n.jsx(re,{size:16})}),n.jsxs("div",{className:"adj-linked-list",children:[z.length===0?n.jsx("div",{className:"adj-null",children:"null"}):z.map(([T,_],b)=>{const C=m&&m.from===k&&m.to===T;return n.jsxs(Je.Fragment,{children:[n.jsxs("div",{className:`adj-neighbor-node ${C?"highlighted":""}`,children:[n.jsx("span",{className:"neighbor-vertex",children:T}),n.jsxs("span",{className:"neighbor-weight",children:["w:",_]})]}),b<z.length-1&&n.jsx("div",{className:"adj-link",children:n.jsx(re,{size:14})})]},`${k}-${T}`)}),z.length>0&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"adj-link",children:n.jsx(re,{size:14})}),n.jsx("div",{className:"adj-null",children:"null"})]})]}),n.jsx("button",{className:"adj-remove-btn",onClick:()=>E(k),title:`Remove vertex ${k}`,children:n.jsx(xl,{size:14})})]},k)})}),n.jsxs("div",{className:"memory-hint",children:[n.jsx("strong",{children:"Memory Layout:"})," An array/hashmap stores vertex references, each pointing to the head of a linked list containing (neighbor, weight) pairs."]})]})]})]}),n.jsx(ye,{dataStructure:"graph"})]})}function j1(){const[e,t]=u.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=u.useState([]),[i,a]=u.useState([]),[l,o]=u.useState(""),[c,h]=u.useState(""),[d,p]=u.useState(""),[m,S]=u.useState("1"),[w,j]=u.useState(null),[y,f]=u.useState(null),[g,x]=u.useState({}),{message:P,showMessage:N}=He(3e3);u.useEffect(()=>{E()},[]),u.useEffect(()=>{e.vertices.length>0?(V(),A()):(s([]),a([]))},[e]),u.useEffect(()=>{if(w){const T=setTimeout(()=>{j(null)},2e3);return()=>clearTimeout(T)}},[w]);const A=u.useCallback(()=>{const M=Math.min(350,250)*.38,L={},O=e.vertices.length;e.vertices.forEach((R,v)=>{const $=2*Math.PI*v/O-Math.PI/2;L[R]={x:175+M*Math.cos($),y:125+M*Math.sin($)}}),x(L)},[e.vertices]),E=async()=>{try{const T=await ae("/api/graph");t(T)}catch(T){console.error("Error loading graph:",T)}},V=async()=>{try{const T=await ae("/api/graph/matrix");s(T.matrix),a(T.vertices)}catch(T){console.error("Error loading matrix:",T)}},F=async()=>{if(!l.trim()){N("Please enter a vertex name!","error");return}try{const T=await ee("/api/graph/vertex",{vertex:l.trim()});if(T.error){N(T.error,"error");return}t(T),N(`Added vertex '${l}' - Added new row and column to matrix`,"success"),o("")}catch{N("Error adding vertex","error")}},I=async T=>{try{const _=await yi(`/api/graph/vertex/${T}`);if(_.error){N(_.error,"error");return}t(_),N(`Removed vertex '${T}' - Removed row and column from matrix`,"success")}catch{N("Error removing vertex","error")}},H=async()=>{if(!c.trim()||!d.trim()){N("Please select both vertices!","error");return}const T=parseInt(m)||1;try{const _=await ee("/api/graph/edge",{from:c.trim(),to:d.trim(),weight:T});if(_.error){N(_.error,"error");return}t(_);const b=i.indexOf(c),C=i.indexOf(d);j({row:b,col:C}),N(`Added edge: matrix[${c}][${d}] = ${T}`,"success"),h(""),p(""),S("1")}catch{N("Error adding edge","error")}},K=async()=>{if(!c.trim()||!d.trim()){N("Please select both vertices!","error");return}try{const T=await yi("/api/graph/edge",{from:c.trim(),to:d.trim()});if(T.error){N(T.error,"error");return}t(T),N(`Removed edge: matrix[${c}][${d}] = 0`,"success"),h(""),p("")}catch{N("Error removing edge","error")}},D=()=>{var M;if(!c.trim()||!d.trim()){N("Please select both vertices to check!","error");return}const T=i.indexOf(c),_=i.indexOf(d);if(T===-1||_===-1){N("Vertex not found!","error");return}const b=((M=r[T])==null?void 0:M[_])||0,C=b>0;j({row:T,col:_}),f({from:c,to:d,exists:C,weight:b}),N(C?`Edge exists! matrix[${c}][${d}] = ${b} (O(1) lookup)`:`No edge: matrix[${c}][${d}] = 0 (O(1) lookup)`,C?"success":"info")},q=async T=>{try{const _=await ee(`/api/graph/preset/${T}`,{});if(_.error){N(_.error,"error");return}t(_),f(null),N(`Loaded '${T}' graph preset`,"success")}catch{N("Error loading preset","error")}},k=async()=>{try{const T=await ee("/api/graph/clear",{});t(T),s([]),a([]),f(null),N("Graph cleared","success")}catch{N("Error clearing graph","error")}},z=(T,_)=>{T.key==="Enter"&&_()},B=(T,_,b)=>{let C="matrix-cell";return w&&w.row===T&&w.col===_&&(C+=" highlighted"),w&&w.row===_&&w.col===T&&(C+=" highlighted"),b>0&&(C+=" has-edge"),T===_&&(C+=" diagonal"),C};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Oe,{className:"icon-sm"}),n.jsx("span",{children:"What is an Adjacency Matrix?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["An ",n.jsx("strong",{children:"Adjacency Matrix"})," is a 2D array where ",n.jsx("code",{children:"matrix[i][j]"})," represents the edge weight between vertex i and j (0 if no edge)."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(xe,{}),n.jsx("span",{children:"Like a spreadsheet where rows and columns are people, and cells show if they're friends!"})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Check Edge"}),n.jsx("span",{className:"op-desc",children:"Direct lookup"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Add Edge"}),n.jsx("span",{className:"op-desc",children:"Set cell value"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Add Vertex"}),n.jsx("span",{className:"op-desc",children:"Resize matrix"}),n.jsx("span",{className:"op-complexity",children:"O(V²)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Space"}),n.jsx("span",{className:"op-desc",children:"2D array"}),n.jsx("span",{className:"op-complexity",children:"O(V²)"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"When to Use:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Dense graphs (many edges)"}),n.jsx("li",{children:"Fast edge existence checks needed"}),n.jsx("li",{children:"Small number of vertices"}),n.jsx("li",{children:"Frequent edge weight updates"})]})]})]})]}),n.jsx(ve,{context:"Adjacency Matrix graph representation"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Operations"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Load Preset"}),n.jsxs("div",{className:"btn-group preset-group",children:[n.jsx("button",{onClick:()=>q("simple"),className:"btn btn-preset",children:"Simple"}),n.jsx("button",{onClick:()=>q("complete"),className:"btn btn-preset",children:"Complete"}),n.jsx("button",{onClick:()=>q("cyclic"),className:"btn btn-preset",children:"Cyclic"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsxs("label",{htmlFor:"vertexInput",children:[n.jsx(vi,{size:14})," Add Vertex"]}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"vertexInput",value:l,onChange:T=>o(T.target.value.toUpperCase()),onKeyPress:T=>z(T,F),placeholder:"Name (e.g., A)",maxLength:3}),n.jsx("button",{onClick:F,className:"btn btn-add",children:"Add"})]}),n.jsx("span",{className:"operation-hint",children:"Adds new row & column (O(V²) resize)"})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Edge Operations"}),n.jsxs("div",{className:"edge-inputs",children:[n.jsxs("select",{value:c,onChange:T=>h(T.target.value),className:"vertex-select",children:[n.jsx("option",{value:"",children:"From"}),e.vertices.map(T=>n.jsx("option",{value:T,children:T},T))]}),n.jsx("span",{className:"edge-arrow",children:"→"}),n.jsxs("select",{value:d,onChange:T=>p(T.target.value),className:"vertex-select",children:[n.jsx("option",{value:"",children:"To"}),e.vertices.map(T=>n.jsx("option",{value:T,children:T},T))]})]}),n.jsxs("div",{className:"weight-input",children:[n.jsx("label",{htmlFor:"weightInput",children:"Weight:"}),n.jsx("input",{type:"number",id:"weightInput",value:m,onChange:T=>S(T.target.value),min:"1",max:"99",className:"weight-field"})]}),n.jsxs("div",{className:"btn-group",children:[n.jsxs("button",{onClick:H,className:"btn btn-add",children:[n.jsx(vi,{size:14})," Add"]}),n.jsxs("button",{onClick:K,className:"btn btn-remove",children:[n.jsx(xl,{size:14})," Remove"]}),n.jsxs("button",{onClick:D,className:"btn btn-check",children:[n.jsx(cs,{size:14})," Check"]})]}),n.jsx("span",{className:"operation-hint",children:"O(1) direct cell access"})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:k,className:"btn btn-clear full-width",children:"Clear Graph"})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Vertices (V):"}),n.jsx("span",{className:"info-value",children:e.vertex_count||0})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Edges (E):"}),n.jsx("span",{className:"info-value",children:e.edge_count||0})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Matrix Size:"}),n.jsxs("span",{className:"info-value",children:[i.length," × ",i.length]})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Space Used:"}),n.jsxs("span",{className:"info-value",children:["O(",i.length,"²) = ",i.length*i.length," cells"]})]})]}),y&&n.jsxs("div",{className:`lookup-result ${y.exists?"exists":"not-exists"}`,children:[n.jsx("strong",{children:"Lookup Result:"}),n.jsxs("code",{children:["matrix[",y.from,"][",y.to,"] = ",y.weight]}),n.jsx("span",{children:y.exists?"Edge exists!":"No edge"})]}),n.jsx(Be,{message:P})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsxs("div",{className:"mini-graph-section",children:[n.jsx("h3",{children:"Graph View"}),n.jsx("div",{className:"mini-graph-container",children:e.vertices.length===0?n.jsx("div",{className:"graph-empty-mini",children:"Empty graph"}):n.jsxs("svg",{className:"mini-graph-svg",viewBox:"0 0 350 250",children:[e.edges.map(([T,_,b],C)=>{const M=g[T],L=g[_];return!M||!L?null:n.jsx("line",{x1:M.x,y1:M.y,x2:L.x,y2:L.y,className:"mini-edge"},`edge-${C}`)}),e.vertices.map(T=>{const _=g[T];return _?n.jsxs("g",{className:"mini-node",children:[n.jsx("circle",{cx:_.x,cy:_.y,r:18}),n.jsx("text",{x:_.x,y:_.y,dominantBaseline:"central",textAnchor:"middle",children:T})]},T):null})]})})]}),n.jsxs("div",{className:"matrix-section",children:[n.jsx("h3",{children:"Adjacency Matrix"}),n.jsxs("p",{className:"matrix-explanation",children:["Each cell ",n.jsx("code",{children:"matrix[row][col]"})," stores the edge weight (0 = no edge). Undirected graphs have symmetric matrices."]}),i.length===0?n.jsx("div",{className:"matrix-empty",children:"No vertices in graph. Add vertices or load a preset!"}):n.jsx("div",{className:"matrix-container",children:n.jsxs("table",{className:"adjacency-matrix",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{className:"matrix-corner"}),i.map((T,_)=>n.jsx("th",{className:"matrix-header col-header",children:T},T))]})}),n.jsx("tbody",{children:i.map((T,_)=>n.jsxs("tr",{children:[n.jsxs("th",{className:"matrix-header row-header",children:[T,n.jsx("button",{className:"remove-vertex-btn",onClick:()=>I(T),title:`Remove ${T}`,children:"×"})]}),i.map((b,C)=>{var M,L,O;return n.jsx("td",{className:B(_,C,(M=r[_])==null?void 0:M[C]),title:`matrix[${T}][${b}] = ${((L=r[_])==null?void 0:L[C])||0}`,children:((O=r[_])==null?void 0:O[C])||0},`${_}-${C}`)})]},T))})]})}),n.jsxs("div",{className:"comparison-hint",children:[n.jsx("strong",{children:"vs Adjacency List:"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("span",{className:"pro",children:"Pro:"})," O(1) edge lookup vs O(degree) for list"]}),n.jsxs("li",{children:[n.jsx("span",{className:"con",children:"Con:"})," O(V²) space vs O(V+E) for list"]}),n.jsxs("li",{children:[n.jsx("span",{className:"pro",children:"Pro:"})," Better for dense graphs (E ≈ V²)"]}),n.jsxs("li",{children:[n.jsx("span",{className:"con",children:"Con:"})," Wastes space for sparse graphs"]})]})]})]})]})]}),n.jsx(ye,{dataStructure:"graph"})]})}function N1(){const[e,t]=u.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=u.useState(""),[i,a]=u.useState([]),[l,o]=u.useState([]),[c,h]=u.useState(-1),[d,p]=u.useState(!1),[m,S]=u.useState(!1),[w,j]=u.useState(new Set),[y,f]=u.useState(null),[g,x]=u.useState([]),[P,N]=u.useState({}),{message:A,showMessage:E}=He(3e3),V=u.useRef(null),F=u.useRef(0);u.useEffect(()=>{H()},[]),u.useEffect(()=>{e.vertices.length>0&&I()},[e.vertices]);const I=u.useCallback(()=>{const O=Math.min(500,350)*.35,R={},v=e.vertices.length;e.vertices.forEach(($,W)=>{const Y=2*Math.PI*W/v-Math.PI/2;R[$]={x:250+O*Math.cos(Y),y:175+O*Math.sin(Y)}}),N(R)},[e.vertices]),H=async()=>{try{const b=await ae("/api/graph");b.vertices.length===0?await K("simple"):t(b)}catch(b){console.error("Error loading graph:",b)}},K=async b=>{try{const C=await ee(`/api/graph/preset/${b}`,{});if(C.error){E(C.error,"error");return}t(C),T(),E(`Loaded '${b}' preset`,"success")}catch{E("Error loading preset","error")}},D=async()=>{if(!r.trim()){E("Please select a starting vertex!","error");return}try{const b=await ae(`/api/graph/bfs/${r}`);if(b.error){E(b.error,"error");return}a(b.traversal),o(b.steps),E("Starting BFS traversal...","info"),q(b.steps)}catch{E("Error running BFS","error")}},q=b=>{V.current&&clearInterval(V.current),p(!0),S(!1),j(new Set),f(null),x([]),h(-1),F.current=0,V.current=setInterval(()=>{if(F.current>=b.length){clearInterval(V.current),p(!1),f(null),E(`BFS Complete: ${i.join(" → ")}`,"success");return}const C=b[F.current];h(F.current),C.action==="visit"?(f(C.vertex),j(new Set(C.visited)),x(C.queue||[])):C.action==="enqueue"&&x(C.queue||[]),F.current++},1e3)},k=()=>{m?(S(!1),z()):(S(!0),V.current&&clearInterval(V.current))},z=()=>{V.current&&clearInterval(V.current),V.current=setInterval(()=>{if(F.current>=l.length){clearInterval(V.current),p(!1),f(null);return}const b=l[F.current];h(F.current),b.action==="visit"?(f(b.vertex),j(new Set(b.visited)),x(b.queue||[])):b.action==="enqueue"&&x(b.queue||[]),F.current++},1e3)},B=()=>{if(F.current>=l.length)return;const b=l[F.current];h(F.current),b.action==="visit"?(f(b.vertex),j(new Set(b.visited)),x(b.queue||[])):b.action==="enqueue"&&x(b.queue||[]),F.current++,F.current>=l.length&&(p(!1),f(null))},T=()=>{V.current&&clearInterval(V.current),a([]),o([]),h(-1),j(new Set),f(null),x([]),p(!1),S(!1),F.current=0},_=b=>y===b?"graph-node current":w.has(b)?"graph-node visited":g.includes(b)?"graph-node queued":"graph-node";return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Oe,{className:"icon-sm"}),n.jsx("span",{children:"What is Breadth-First Search?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"BFS"})," explores a graph level by level, visiting all neighbors of a node before moving to the next level."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(xe,{}),n.jsx("span",{children:"Like ripples spreading outward when you drop a stone in water!"})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Time"}),n.jsx("span",{className:"op-desc",children:"Visit all nodes"}),n.jsx("span",{className:"op-complexity",children:"O(V+E)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Space"}),n.jsx("span",{className:"op-desc",children:"Queue storage"}),n.jsx("span",{className:"op-complexity",children:"O(V)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Structure"}),n.jsx("span",{className:"op-desc",children:"Uses a Queue"}),n.jsx("span",{className:"op-complexity",children:"FIFO"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"Common Uses:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Shortest path in unweighted graphs"}),n.jsx("li",{children:"Level-order tree traversal"}),n.jsx("li",{children:"Finding connected components"}),n.jsx("li",{children:"Web crawlers"})]})]})]})]}),n.jsx(ve,{context:"Breadth-First Search (BFS) algorithm on graphs"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"BFS Controls"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Load Graph Preset"}),n.jsxs("div",{className:"btn-group preset-group",children:[n.jsx("button",{onClick:()=>K("simple"),className:"btn btn-preset",disabled:d,children:"Simple"}),n.jsx("button",{onClick:()=>K("tree"),className:"btn btn-preset",disabled:d,children:"Tree"}),n.jsx("button",{onClick:()=>K("cyclic"),className:"btn btn-preset",disabled:d,children:"Cyclic"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Start BFS From"}),n.jsxs("select",{value:r,onChange:b=>s(b.target.value),className:"vertex-select full-width",disabled:d,children:[n.jsx("option",{value:"",children:"Select start vertex"}),e.vertices.map(b=>n.jsx("option",{value:b,children:b},b))]})]}),n.jsx("div",{className:"operation-group",children:n.jsxs("div",{className:"btn-group",children:[n.jsxs("button",{onClick:D,className:"btn btn-bfs",disabled:d&&!m,children:[n.jsx(Ae,{size:14})," Run BFS"]}),d&&n.jsx("button",{onClick:k,className:"btn btn-pause",children:m?n.jsx(Ae,{size:14}):n.jsx(wt,{size:14})}),m&&n.jsx("button",{onClick:B,className:"btn btn-step",children:n.jsx(St,{size:14})}),n.jsx("button",{onClick:T,className:"btn btn-reset",children:n.jsx(it,{size:14})})]})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Vertices:"}),n.jsx("span",{className:"info-value",children:e.vertex_count||e.vertices.length})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Edges:"}),n.jsx("span",{className:"info-value",children:e.edge_count||0})]}),g.length>0&&n.jsxs("div",{className:"info-item queue-display",children:[n.jsx("span",{className:"info-label",children:"Queue:"}),n.jsxs("span",{className:"info-value queue-items",children:["[",g.join(", "),"]"]})]}),i.length>0&&n.jsxs("div",{className:"info-item traversal-result",children:[n.jsx("span",{className:"info-label",children:"Order:"}),n.jsx("span",{className:"info-value",children:i.join(" → ")})]})]}),n.jsx(Be,{message:A}),n.jsxs("div",{className:"legend",children:[n.jsx("h3",{children:"Legend"}),n.jsxs("div",{className:"legend-items",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color unvisited"}),n.jsx("span",{children:"Unvisited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color queued"}),n.jsx("span",{children:"In Queue"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color current"}),n.jsx("span",{children:"Current"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color visited"}),n.jsx("span",{children:"Visited"})]})]})]})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"BFS Visualization"}),n.jsx("div",{className:"graph-container",children:e.vertices.length===0?n.jsx("div",{className:"graph-empty",children:"Loading graph..."}):n.jsxs("svg",{className:"graph-svg",viewBox:"0 0 500 350",children:[e.edges.map(([b,C],M)=>{const L=P[b],O=P[C];return!L||!O?null:n.jsx("line",{x1:L.x,y1:L.y,x2:O.x,y2:O.y,className:"graph-edge"},`edge-${M}`)}),e.vertices.map(b=>{const C=P[b];return C?n.jsxs("g",{className:_(b),children:[n.jsx("circle",{cx:C.x,cy:C.y,r:25,className:"node-circle"}),n.jsx("text",{x:C.x,y:C.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:b})]},b):null})]})}),n.jsxs("div",{className:"algorithm-steps",children:[n.jsx("h3",{children:"BFS Algorithm Steps"}),n.jsx("div",{className:"steps-content",children:n.jsxs("ol",{children:[n.jsx("li",{className:c>=0?"active":"",children:"Start at the selected vertex"}),n.jsx("li",{className:g.length>0?"active":"",children:"Add it to a queue and mark as visited"}),n.jsx("li",{className:y?"active":"",children:"Dequeue a vertex and explore its neighbors"}),n.jsx("li",{children:"Add unvisited neighbors to the queue"}),n.jsx("li",{children:"Repeat until queue is empty"})]})})]})]})]}),n.jsx(ye,{dataStructure:"bfs"})]})}function k1(){const[e,t]=u.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=u.useState(""),[i,a]=u.useState([]),[l,o]=u.useState([]),[c,h]=u.useState(-1),[d,p]=u.useState(!1),[m,S]=u.useState(!1),[w,j]=u.useState(new Set),[y,f]=u.useState(null),[g,x]=u.useState([]),[P,N]=u.useState({}),{message:A,showMessage:E}=He(3e3),V=u.useRef(null),F=u.useRef(0);u.useEffect(()=>{H()},[]),u.useEffect(()=>{e.vertices.length>0&&I()},[e.vertices]);const I=u.useCallback(()=>{const O=Math.min(500,350)*.35,R={},v=e.vertices.length;e.vertices.forEach(($,W)=>{const Y=2*Math.PI*W/v-Math.PI/2;R[$]={x:250+O*Math.cos(Y),y:175+O*Math.sin(Y)}}),N(R)},[e.vertices]),H=async()=>{try{const b=await ae("/api/graph");b.vertices.length===0?await K("simple"):t(b)}catch(b){console.error("Error loading graph:",b)}},K=async b=>{try{const C=await ee(`/api/graph/preset/${b}`,{});if(C.error){E(C.error,"error");return}t(C),T(),E(`Loaded '${b}' preset`,"success")}catch{E("Error loading preset","error")}},D=async()=>{if(!r.trim()){E("Please select a starting vertex!","error");return}try{const b=await ae(`/api/graph/dfs/${r}`);if(b.error){E(b.error,"error");return}a(b.traversal),o(b.steps),E("Starting DFS traversal...","info"),q(b.steps)}catch{E("Error running DFS","error")}},q=b=>{V.current&&clearInterval(V.current),p(!0),S(!1),j(new Set),f(null),x([]),h(-1),F.current=0,V.current=setInterval(()=>{if(F.current>=b.length){clearInterval(V.current),p(!1),f(null),E(`DFS Complete: ${i.join(" → ")}`,"success");return}const C=b[F.current];h(F.current),C.action==="visit"?(f(C.vertex),j(new Set(C.visited)),x(C.stack||[])):C.action==="push"&&x(C.stack||[]),F.current++},1e3)},k=()=>{m?(S(!1),z()):(S(!0),V.current&&clearInterval(V.current))},z=()=>{V.current&&clearInterval(V.current),V.current=setInterval(()=>{if(F.current>=l.length){clearInterval(V.current),p(!1),f(null);return}const b=l[F.current];h(F.current),b.action==="visit"?(f(b.vertex),j(new Set(b.visited)),x(b.stack||[])):b.action==="push"&&x(b.stack||[]),F.current++},1e3)},B=()=>{if(F.current>=l.length)return;const b=l[F.current];h(F.current),b.action==="visit"?(f(b.vertex),j(new Set(b.visited)),x(b.stack||[])):b.action==="push"&&x(b.stack||[]),F.current++,F.current>=l.length&&(p(!1),f(null))},T=()=>{V.current&&clearInterval(V.current),a([]),o([]),h(-1),j(new Set),f(null),x([]),p(!1),S(!1),F.current=0},_=b=>y===b?"graph-node current":w.has(b)?"graph-node visited":g.includes(b)?"graph-node stacked":"graph-node";return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Oe,{className:"icon-sm"}),n.jsx("span",{children:"What is Depth-First Search?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"DFS"})," explores a graph by going as deep as possible along each branch before backtracking."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(xe,{}),n.jsx("span",{children:"Like exploring a maze by following one path to its end before trying another!"})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Time"}),n.jsx("span",{className:"op-desc",children:"Visit all nodes"}),n.jsx("span",{className:"op-complexity",children:"O(V+E)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Space"}),n.jsx("span",{className:"op-desc",children:"Stack storage"}),n.jsx("span",{className:"op-complexity",children:"O(V)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Structure"}),n.jsx("span",{className:"op-desc",children:"Uses a Stack"}),n.jsx("span",{className:"op-complexity",children:"LIFO"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"Common Uses:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Topological sorting"}),n.jsx("li",{children:"Cycle detection"}),n.jsx("li",{children:"Solving mazes and puzzles"}),n.jsx("li",{children:"Finding connected components"})]})]})]})]}),n.jsx(ve,{context:"Depth-First Search (DFS) algorithm on graphs"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"DFS Controls"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Load Graph Preset"}),n.jsxs("div",{className:"btn-group preset-group",children:[n.jsx("button",{onClick:()=>K("simple"),className:"btn btn-preset",disabled:d,children:"Simple"}),n.jsx("button",{onClick:()=>K("tree"),className:"btn btn-preset",disabled:d,children:"Tree"}),n.jsx("button",{onClick:()=>K("cyclic"),className:"btn btn-preset",disabled:d,children:"Cyclic"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Start DFS From"}),n.jsxs("select",{value:r,onChange:b=>s(b.target.value),className:"vertex-select full-width",disabled:d,children:[n.jsx("option",{value:"",children:"Select start vertex"}),e.vertices.map(b=>n.jsx("option",{value:b,children:b},b))]})]}),n.jsx("div",{className:"operation-group",children:n.jsxs("div",{className:"btn-group",children:[n.jsxs("button",{onClick:D,className:"btn btn-dfs",disabled:d&&!m,children:[n.jsx(Ae,{size:14})," Run DFS"]}),d&&n.jsx("button",{onClick:k,className:"btn btn-pause",children:m?n.jsx(Ae,{size:14}):n.jsx(wt,{size:14})}),m&&n.jsx("button",{onClick:B,className:"btn btn-step",children:n.jsx(St,{size:14})}),n.jsx("button",{onClick:T,className:"btn btn-reset",children:n.jsx(it,{size:14})})]})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Vertices:"}),n.jsx("span",{className:"info-value",children:e.vertex_count||e.vertices.length})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Edges:"}),n.jsx("span",{className:"info-value",children:e.edge_count||0})]}),g.length>0&&n.jsxs("div",{className:"info-item stack-display",children:[n.jsx("span",{className:"info-label",children:"Stack:"}),n.jsxs("span",{className:"info-value stack-items",children:["[",g.join(", "),"]"]})]}),i.length>0&&n.jsxs("div",{className:"info-item traversal-result",children:[n.jsx("span",{className:"info-label",children:"Order:"}),n.jsx("span",{className:"info-value",children:i.join(" → ")})]})]}),n.jsx(Be,{message:A}),n.jsxs("div",{className:"legend",children:[n.jsx("h3",{children:"Legend"}),n.jsxs("div",{className:"legend-items",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color unvisited"}),n.jsx("span",{children:"Unvisited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color stacked"}),n.jsx("span",{children:"In Stack"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color current"}),n.jsx("span",{children:"Current"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color visited"}),n.jsx("span",{children:"Visited"})]})]})]})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"DFS Visualization"}),n.jsx("div",{className:"graph-container",children:e.vertices.length===0?n.jsx("div",{className:"graph-empty",children:"Loading graph..."}):n.jsxs("svg",{className:"graph-svg",viewBox:"0 0 500 350",children:[e.edges.map(([b,C],M)=>{const L=P[b],O=P[C];return!L||!O?null:n.jsx("line",{x1:L.x,y1:L.y,x2:O.x,y2:O.y,className:"graph-edge"},`edge-${M}`)}),e.vertices.map(b=>{const C=P[b];return C?n.jsxs("g",{className:_(b),children:[n.jsx("circle",{cx:C.x,cy:C.y,r:25,className:"node-circle"}),n.jsx("text",{x:C.x,y:C.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:b})]},b):null})]})}),n.jsxs("div",{className:"algorithm-steps",children:[n.jsx("h3",{children:"DFS Algorithm Steps"}),n.jsx("div",{className:"steps-content",children:n.jsxs("ol",{children:[n.jsx("li",{className:c>=0?"active":"",children:"Start at the selected vertex"}),n.jsx("li",{className:g.length>0?"active":"",children:"Push it to a stack and mark as visited"}),n.jsx("li",{className:y?"active":"",children:"Pop a vertex and explore one unvisited neighbor"}),n.jsx("li",{children:"Push the neighbor to stack and repeat"}),n.jsx("li",{children:"Backtrack when no unvisited neighbors remain"})]})})]})]})]}),n.jsx(ye,{dataStructure:"dfs"})]})}function b1(){const[e,t]=u.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=u.useState(""),[i,a]=u.useState(""),[l,o]=u.useState({}),[c,h]=u.useState({}),[d,p]=u.useState([]),[m,S]=u.useState(-1),[w,j]=u.useState(!1),[y,f]=u.useState(!1),[g,x]=u.useState(new Set),[P,N]=u.useState(null),[A,E]=u.useState(null),[V,F]=u.useState({}),{message:I,showMessage:H}=He(3e3),K=u.useRef(null),D=u.useRef(0);u.useEffect(()=>{k()},[]),u.useEffect(()=>{e.vertices.length>0&&q()},[e.vertices]);const q=u.useCallback(()=>{const J=Math.min(500,350)*.35,te={},fe=e.vertices.length;e.vertices.forEach((Ce,Rn)=>{const at=2*Math.PI*Rn/fe-Math.PI/2;te[Ce]={x:250+J*Math.cos(at),y:175+J*Math.sin(at)}}),F(te)},[e.vertices]),k=async()=>{try{const v=await ae("/api/graph");v.vertices.length===0?await z("weighted"):t(v)}catch(v){console.error("Error loading graph:",v)}},z=async v=>{try{const $=await ee(`/api/graph/preset/${v}`,{});if($.error){H($.error,"error");return}t($),M(),H(`Loaded '${v}' preset`,"success")}catch{H("Error loading preset","error")}},B=async()=>{if(!r){H("Please select a start vertex!","error");return}try{const v=i?`/api/graph/dijkstra/${r}?end=${i}`:`/api/graph/dijkstra/${r}`,$=await ae(v);if($.error){H($.error,"error");return}o($.distances),h($.paths),p($.steps),H("Starting Dijkstra's algorithm...","info"),T($.steps)}catch{H("Error running Dijkstra's algorithm","error")}},T=v=>{K.current&&clearInterval(K.current),j(!0),f(!1),x(new Set),N(null),E(null),S(-1),D.current=0,K.current=setInterval(()=>{if(D.current>=v.length){clearInterval(K.current),j(!1),N(null),E(null),H("Dijkstra's algorithm complete!","success");return}const $=v[D.current];S(D.current),o($.distances||{}),x(new Set($.visited||[])),$.action==="visit"?(N($.current),E(null)):($.action==="check"||$.action==="update")&&(N($.current),E({from:$.current,to:$.neighbor})),D.current++},1200)},_=()=>{y?(f(!1),b()):(f(!0),K.current&&clearInterval(K.current))},b=()=>{K.current&&clearInterval(K.current),K.current=setInterval(()=>{if(D.current>=d.length){clearInterval(K.current),j(!1),N(null),E(null);return}const v=d[D.current];S(D.current),o(v.distances||{}),x(new Set(v.visited||[])),v.action==="visit"?(N(v.current),E(null)):(v.action==="check"||v.action==="update")&&(N(v.current),E({from:v.current,to:v.neighbor})),D.current++},1200)},C=()=>{if(D.current>=d.length)return;const v=d[D.current];S(D.current),o(v.distances||{}),x(new Set(v.visited||[])),v.action==="visit"?(N(v.current),E(null)):(v.action==="check"||v.action==="update")&&(N(v.current),E({from:v.current,to:v.neighbor})),D.current++,D.current>=d.length&&(j(!1),N(null),E(null))},M=()=>{K.current&&clearInterval(K.current),o({}),h({}),p([]),S(-1),x(new Set),N(null),E(null),j(!1),f(!1),D.current=0},L=v=>P===v?"graph-node current":g.has(v)?"graph-node visited":"graph-node",O=(v,$)=>A&&(A.from===v&&A.to===$||A.from===$&&A.to===v)?"graph-edge checking":"graph-edge",R=()=>m>=0&&m<d.length?d[m].message:"";return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Oe,{className:"icon-sm"}),n.jsx("span",{children:"What is Dijkstra's Algorithm?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"Dijkstra's Algorithm"})," finds the shortest path from a source vertex to all other vertices in a weighted graph with non-negative weights."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(xe,{}),n.jsx("span",{children:"Like GPS finding the quickest route - always picks the closest unvisited location!"})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Time"}),n.jsx("span",{className:"op-desc",children:"With min-heap"}),n.jsx("span",{className:"op-complexity",children:"O((V+E)logV)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Space"}),n.jsx("span",{className:"op-desc",children:"Distance array"}),n.jsx("span",{className:"op-complexity",children:"O(V)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Strategy"}),n.jsx("span",{className:"op-desc",children:"Greedy"}),n.jsx("span",{className:"op-complexity",children:"Min first"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"Common Uses:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"GPS navigation systems"}),n.jsx("li",{children:"Network routing protocols"}),n.jsx("li",{children:"Social network analysis"}),n.jsx("li",{children:"Game pathfinding"})]})]})]})]}),n.jsx(ve,{context:"Dijkstra's shortest path algorithm"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Dijkstra's Algorithm"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Load Preset"}),n.jsxs("div",{className:"btn-group preset-group",children:[n.jsx("button",{onClick:()=>z("weighted"),className:"btn btn-preset",disabled:w,children:"Weighted"}),n.jsx("button",{onClick:()=>z("simple"),className:"btn btn-preset",disabled:w,children:"Simple"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Start Vertex"}),n.jsxs("select",{value:r,onChange:v=>s(v.target.value),className:"vertex-select full-width",disabled:w,children:[n.jsx("option",{value:"",children:"Select start"}),e.vertices.map(v=>n.jsx("option",{value:v,children:v},v))]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"End Vertex (Optional)"}),n.jsxs("select",{value:i,onChange:v=>a(v.target.value),className:"vertex-select full-width",disabled:w,children:[n.jsx("option",{value:"",children:"All vertices"}),e.vertices.map(v=>n.jsx("option",{value:v,children:v},v))]})]}),n.jsx("div",{className:"operation-group",children:n.jsxs("div",{className:"btn-group",children:[n.jsxs("button",{onClick:B,className:"btn btn-dijkstra",disabled:w&&!y,children:[n.jsx(Ae,{size:14})," Run"]}),w&&n.jsx("button",{onClick:_,className:"btn btn-pause",children:y?n.jsx(Ae,{size:14}):n.jsx(wt,{size:14})}),y&&n.jsx("button",{onClick:C,className:"btn btn-step",children:n.jsx(St,{size:14})}),n.jsx("button",{onClick:M,className:"btn btn-reset",children:n.jsx(it,{size:14})})]})}),Object.keys(l).length>0&&n.jsxs("div",{className:"distance-table",children:[n.jsxs("h3",{children:["Distances from ",r]}),n.jsx("div",{className:"distance-grid",children:e.vertices.map(v=>n.jsxs("div",{className:`distance-item ${g.has(v)?"visited":""} ${P===v?"current":""}`,children:[n.jsx("span",{className:"vertex-label",children:v}),n.jsx("span",{className:"distance-value",children:l[v]==="inf"||l[v]===null?"∞":l[v]})]},v))})]}),m>=0&&n.jsxs("div",{className:"current-step-box",children:[n.jsxs("strong",{children:["Step ",m+1,":"]}),n.jsx("p",{children:R()})]}),n.jsx(Be,{message:I}),n.jsxs("div",{className:"legend",children:[n.jsx("h3",{children:"Legend"}),n.jsxs("div",{className:"legend-items",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color unvisited"}),n.jsx("span",{children:"Unvisited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color current"}),n.jsx("span",{children:"Current"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color visited"}),n.jsx("span",{children:"Visited"})]})]})]})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Visualization"}),n.jsx("div",{className:"graph-container",children:e.vertices.length===0?n.jsx("div",{className:"graph-empty",children:"Loading graph..."}):n.jsxs("svg",{className:"graph-svg",viewBox:"0 0 500 350",children:[e.edges.map(([v,$,W],Y)=>{const J=V[v],te=V[$];if(!J||!te)return null;const fe=(J.x+te.x)/2,Ce=(J.y+te.y)/2;return n.jsxs("g",{children:[n.jsx("line",{x1:J.x,y1:J.y,x2:te.x,y2:te.y,className:O(v,$)}),n.jsx("circle",{cx:fe,cy:Ce,r:12,className:"weight-bg"}),n.jsx("text",{x:fe,y:Ce,className:"weight-label",dominantBaseline:"central",textAnchor:"middle",children:W})]},`edge-${Y}`)}),e.vertices.map(v=>{const $=V[v];return $?n.jsxs("g",{className:L(v),children:[n.jsx("circle",{cx:$.x,cy:$.y,r:25,className:"node-circle"}),n.jsx("text",{x:$.x,y:$.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:v}),l[v]!==void 0&&n.jsxs("text",{x:$.x,y:$.y+38,className:"distance-label",dominantBaseline:"central",textAnchor:"middle",children:["d=",l[v]==="inf"||l[v]===null?"∞":l[v]]})]},v):null})]})}),Object.keys(c).length>0&&!w&&n.jsxs("div",{className:"paths-section",children:[n.jsxs("h3",{children:["Shortest Paths from ",r]}),n.jsx("div",{className:"paths-list",children:Object.entries(c).map(([v,$])=>n.jsxs("div",{className:"path-item",children:[n.jsxs("span",{className:"path-target",children:[v,":"]}),n.jsx("span",{className:"path-route",children:$.join(" → ")}),n.jsxs("span",{className:"path-distance",children:["(dist: ",l[v]===null?"∞":l[v],")"]})]},v))})]})]})]}),n.jsx(ye,{dataStructure:"dijkstra"})]})}function w1(){const[e,t]=u.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=u.useState(""),[i,a]=u.useState([]),[l,o]=u.useState(0),[c,h]=u.useState([]),[d,p]=u.useState(-1),[m,S]=u.useState(!1),[w,j]=u.useState(!1),[y,f]=u.useState(new Set),[g,x]=u.useState(null),[P,N]=u.useState(null),[A,E]=u.useState({}),{message:V,showMessage:F}=He(3e3),I=u.useRef(null),H=u.useRef(0);u.useEffect(()=>{D()},[]),u.useEffect(()=>{e.vertices.length>0&&K()},[e.vertices]);const K=u.useCallback(()=>{const Y=Math.min(500,350)*.35,J={},te=e.vertices.length;e.vertices.forEach((fe,Ce)=>{const Rn=2*Math.PI*Ce/te-Math.PI/2;J[fe]={x:250+Y*Math.cos(Rn),y:175+Y*Math.sin(Rn)}}),E(J)},[e.vertices]),D=async()=>{try{const R=await ae("/api/graph");R.vertices.length===0?await q("weighted"):t(R)}catch(R){console.error("Error loading graph:",R)}},q=async R=>{try{const v=await ee(`/api/graph/preset/${R}`,{});if(v.error){F(v.error,"error");return}t(v),b(),F(`Loaded '${R}' preset`,"success")}catch{F("Error loading preset","error")}},k=async()=>{try{const R=r?`/api/graph/mst?start=${r}`:"/api/graph/mst",v=await ae(R);if(v.error){F(v.error,"error");return}h(v.steps),F("Starting Prim's MST algorithm...","info"),z(v.steps,v.mst_edges,v.total_weight)}catch{F("Error running MST algorithm","error")}},z=(R,v,$)=>{I.current&&clearInterval(I.current),S(!0),j(!1),f(new Set),a([]),o(0),x(null),N(null),p(-1),H.current=0,I.current=setInterval(()=>{if(H.current>=R.length){clearInterval(I.current),S(!1),x(null),N(null),a(v),o($),F(`MST complete! Total weight: ${$}`,"success");return}const W=R[H.current];p(H.current),f(new Set(W.visited||[])),a(W.mst_edges||[]),o(W.total_weight||0),W.action==="add"?(x(W.current),N(null)):W.action==="consider"&&(x(W.current),N({from:W.current,to:W.neighbor,weight:W.weight})),H.current++},1e3)},B=()=>{w?(j(!1),T()):(j(!0),I.current&&clearInterval(I.current))},T=()=>{I.current&&clearInterval(I.current),I.current=setInterval(()=>{if(H.current>=c.length){clearInterval(I.current),S(!1),x(null),N(null);return}const R=c[H.current];p(H.current),f(new Set(R.visited||[])),a(R.mst_edges||[]),o(R.total_weight||0),R.action==="add"?(x(R.current),N(null)):R.action==="consider"&&(x(R.current),N({from:R.current,to:R.neighbor,weight:R.weight})),H.current++},1e3)},_=()=>{if(H.current>=c.length)return;const R=c[H.current];p(H.current),f(new Set(R.visited||[])),a(R.mst_edges||[]),o(R.total_weight||0),R.action==="add"?(x(R.current),N(null)):R.action==="consider"&&(x(R.current),N({from:R.current,to:R.neighbor,weight:R.weight})),H.current++,H.current>=c.length&&(S(!1),x(null),N(null))},b=()=>{I.current&&clearInterval(I.current),a([]),o(0),h([]),p(-1),f(new Set),x(null),N(null),S(!1),j(!1),H.current=0},C=R=>g===R?"graph-node current":y.has(R)?"graph-node visited":"graph-node",M=(R,v)=>i.some(([$,W])=>$===R&&W===v||$===v&&W===R),L=(R,v)=>P&&(P.from===R&&P.to===v||P.from===v&&P.to===R)?"graph-edge considering":M(R,v)?"graph-edge mst":"graph-edge",O=()=>d>=0&&d<c.length?c[d].message:"";return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Oe,{className:"icon-sm"}),n.jsx("span",{children:"What is Minimum Spanning Tree?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["A ",n.jsx("strong",{children:"Minimum Spanning Tree (MST)"})," connects all vertices with the minimum total edge weight, without any cycles."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(xe,{}),n.jsx("span",{children:"Like finding the cheapest way to connect all cities with roads!"})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Time"}),n.jsx("span",{className:"op-desc",children:"Prim's with heap"}),n.jsx("span",{className:"op-complexity",children:"O((V+E)logV)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Edges"}),n.jsx("span",{className:"op-desc",children:"In MST"}),n.jsx("span",{className:"op-complexity",children:"V - 1"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Strategy"}),n.jsx("span",{className:"op-desc",children:"Greedy"}),n.jsx("span",{className:"op-complexity",children:"Min edge"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"Common Uses:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Network design (cables, pipes)"}),n.jsx("li",{children:"Cluster analysis"}),n.jsx("li",{children:"Image segmentation"}),n.jsx("li",{children:"Approximation algorithms"})]})]})]})]}),n.jsx(ve,{context:"Minimum Spanning Tree, Prim's algorithm"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Prim's MST Algorithm"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Load Preset"}),n.jsxs("div",{className:"btn-group preset-group",children:[n.jsx("button",{onClick:()=>q("weighted"),className:"btn btn-preset",disabled:m,children:"Weighted"}),n.jsx("button",{onClick:()=>q("complete"),className:"btn btn-preset",disabled:m,children:"Complete"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Start Vertex (Optional)"}),n.jsxs("select",{value:r,onChange:R=>s(R.target.value),className:"vertex-select full-width",disabled:m,children:[n.jsx("option",{value:"",children:"Auto (first vertex)"}),e.vertices.map(R=>n.jsx("option",{value:R,children:R},R))]})]}),n.jsx("div",{className:"operation-group",children:n.jsxs("div",{className:"btn-group",children:[n.jsxs("button",{onClick:k,className:"btn btn-mst",disabled:m&&!w,children:[n.jsx(Ae,{size:14})," Run MST"]}),m&&n.jsx("button",{onClick:B,className:"btn btn-pause",children:w?n.jsx(Ae,{size:14}):n.jsx(wt,{size:14})}),w&&n.jsx("button",{onClick:_,className:"btn btn-step",children:n.jsx(St,{size:14})}),n.jsx("button",{onClick:b,className:"btn btn-reset",children:n.jsx(it,{size:14})})]})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"MST Edges:"}),n.jsxs("span",{className:"info-value",children:[i.length," / ",e.vertices.length-1]})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Total Weight:"}),n.jsx("span",{className:"info-value mst-weight",children:l})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Visited:"}),n.jsxs("span",{className:"info-value",children:[y.size," / ",e.vertices.length]})]})]}),d>=0&&n.jsxs("div",{className:"current-step-box",children:[n.jsxs("strong",{children:["Step ",d+1,":"]}),n.jsx("p",{children:O()})]}),n.jsx(Be,{message:V}),n.jsxs("div",{className:"legend",children:[n.jsx("h3",{children:"Legend"}),n.jsxs("div",{className:"legend-items",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color unvisited"}),n.jsx("span",{children:"Unvisited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color current"}),n.jsx("span",{children:"Current"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color visited"}),n.jsx("span",{children:"In MST"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-line mst"}),n.jsx("span",{children:"MST Edge"})]})]})]})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Visualization"}),n.jsx("div",{className:"graph-container",children:e.vertices.length===0?n.jsx("div",{className:"graph-empty",children:"Loading graph..."}):n.jsxs("svg",{className:"graph-svg",viewBox:"0 0 500 350",children:[e.edges.map(([R,v,$],W)=>{const Y=A[R],J=A[v];if(!Y||!J)return null;const te=(Y.x+J.x)/2,fe=(Y.y+J.y)/2;return n.jsxs("g",{children:[n.jsx("line",{x1:Y.x,y1:Y.y,x2:J.x,y2:J.y,className:L(R,v)}),n.jsx("circle",{cx:te,cy:fe,r:12,className:"weight-bg"}),n.jsx("text",{x:te,y:fe,className:"weight-label",dominantBaseline:"central",textAnchor:"middle",children:$})]},`edge-${W}`)}),e.vertices.map(R=>{const v=A[R];return v?n.jsxs("g",{className:C(R),children:[n.jsx("circle",{cx:v.x,cy:v.y,r:25,className:"node-circle"}),n.jsx("text",{x:v.x,y:v.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:R})]},R):null})]})}),i.length>0&&n.jsxs("div",{className:"mst-edges-section",children:[n.jsx("h3",{children:"MST Edges"}),n.jsx("div",{className:"mst-edges-list",children:i.map(([R,v,$],W)=>n.jsxs("div",{className:"mst-edge-item",children:[n.jsxs("span",{children:[R," — ",v]}),n.jsxs("span",{className:"edge-weight",children:["(w: ",$,")"]})]},W))}),n.jsx("div",{className:"mst-total",children:n.jsxs("strong",{children:["Total MST Weight: ",l]})})]})]})]}),n.jsx(ye,{dataStructure:"graph"})]})}function S1(){const[e,t]=u.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=u.useState([]),[i,a]=u.useState({}),[l,o]=u.useState([]),[c,h]=u.useState(-1),[d,p]=u.useState(!1),[m,S]=u.useState(!1),[w,j]=u.useState(new Set),[y,f]=u.useState(null),[g,x]=u.useState([]),[P,N]=u.useState(!1),[A,E]=u.useState({}),{message:V,showMessage:F}=He(3e3),I=u.useRef(null),H=u.useRef(0);u.useEffect(()=>{D()},[]),u.useEffect(()=>{e.vertices.length>0&&K()},[e.vertices]);const K=u.useCallback(()=>{const $=Math.min(500,350)*.35,W={},Y=e.vertices.length;e.vertices.forEach((J,te)=>{const fe=2*Math.PI*te/Y-Math.PI/2;W[J]={x:250+$*Math.cos(fe),y:175+$*Math.sin(fe)}}),E(W)},[e.vertices]),D=async()=>{try{const L=await ae("/api/graph");L.vertices.length===0?await q("dag"):t(L)}catch(L){console.error("Error loading graph:",L)}},q=async L=>{try{const O=await ee(`/api/graph/preset/${L}`,{});if(O.error){F(O.error,"error");return}t(O),b(),F(`Loaded '${L}' preset`,"success")}catch{F("Error loading preset","error")}},k=async()=>{try{const L=await ae("/api/graph/topological");if(L.error){F(L.error,"error");return}if(L.has_cycle){N(!0),F("Graph has a cycle - topological sort not possible!","error");return}N(!1),s(L.sorted||[]),o(L.steps),F("Starting Topological Sort (Kahn's Algorithm)...","info"),z(L.steps)}catch{F("Error running topological sort","error")}},z=L=>{I.current&&clearInterval(I.current),p(!0),S(!1),j(new Set),f(null),x([]),a({}),h(-1),H.current=0,I.current=setInterval(()=>{if(H.current>=L.length){clearInterval(I.current),p(!1),f(null),F(`Topological Sort Complete: ${r.join(" → ")}`,"success");return}const O=L[H.current];h(H.current),a(O.in_degrees||{}),x(O.queue||[]),O.action==="process"?(f(O.vertex),j(new Set(O.result||[]))):O.action==="decrement"||O.action==="enqueue"?f(O.vertex||O.neighbor):O.action==="init"&&(a(O.in_degrees||{}),x(O.queue||[])),H.current++},1e3)},B=()=>{m?(S(!1),T()):(S(!0),I.current&&clearInterval(I.current))},T=()=>{I.current&&clearInterval(I.current),I.current=setInterval(()=>{if(H.current>=l.length){clearInterval(I.current),p(!1),f(null);return}const L=l[H.current];h(H.current),a(L.in_degrees||{}),x(L.queue||[]),L.action==="process"?(f(L.vertex),j(new Set(L.result||[]))):(L.action==="decrement"||L.action==="enqueue")&&f(L.vertex||L.neighbor),H.current++},1e3)},_=()=>{if(H.current>=l.length)return;const L=l[H.current];h(H.current),a(L.in_degrees||{}),x(L.queue||[]),L.action==="process"?(f(L.vertex),j(new Set(L.result||[]))):(L.action==="decrement"||L.action==="enqueue")&&f(L.vertex||L.neighbor),H.current++,H.current>=l.length&&(p(!1),f(null))},b=()=>{I.current&&clearInterval(I.current),s([]),a({}),o([]),h(-1),j(new Set),f(null),x([]),N(!1),p(!1),S(!1),H.current=0},C=L=>y===L?"graph-node current":w.has(L)?"graph-node visited":g.includes(L)?"graph-node queued":"graph-node",M=()=>c>=0&&c<l.length?l[c].message:"";return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Oe,{className:"icon-sm"}),n.jsx("span",{children:"What is Topological Sort?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"Topological Sort"})," orders vertices in a directed acyclic graph (DAG) so that for every edge u→v, u comes before v in the ordering."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(xe,{}),n.jsx("span",{children:"Like scheduling tasks - you must complete prerequisites before dependent tasks!"})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Time"}),n.jsx("span",{className:"op-desc",children:"Kahn's Algorithm"}),n.jsx("span",{className:"op-complexity",children:"O(V+E)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Space"}),n.jsx("span",{className:"op-desc",children:"In-degree array"}),n.jsx("span",{className:"op-complexity",children:"O(V)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Requirement"}),n.jsx("span",{className:"op-desc",children:"Graph type"}),n.jsx("span",{className:"op-complexity",children:"DAG only"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"Common Uses:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Task scheduling with dependencies"}),n.jsx("li",{children:"Build systems (Makefile)"}),n.jsx("li",{children:"Course prerequisite planning"}),n.jsx("li",{children:"Package dependency resolution"})]})]})]})]}),n.jsx(ve,{context:"Topological Sort using Kahn's Algorithm on directed acyclic graphs"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Topological Sort"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Load Graph Preset"}),n.jsxs("div",{className:"btn-group preset-group",children:[n.jsx("button",{onClick:()=>q("dag"),className:"btn btn-preset",disabled:d,children:"DAG"}),n.jsx("button",{onClick:()=>q("tree"),className:"btn btn-preset",disabled:d,children:"Tree"}),n.jsx("button",{onClick:()=>q("simple"),className:"btn btn-preset",disabled:d,children:"Simple"})]})]}),n.jsx("div",{className:"operation-group",children:n.jsxs("div",{className:"btn-group",children:[n.jsxs("button",{onClick:k,className:"btn btn-bfs",disabled:d&&!m,children:[n.jsx(Ae,{size:14})," Run Sort"]}),d&&n.jsx("button",{onClick:B,className:"btn btn-pause",children:m?n.jsx(Ae,{size:14}):n.jsx(wt,{size:14})}),m&&n.jsx("button",{onClick:_,className:"btn btn-step",children:n.jsx(St,{size:14})}),n.jsx("button",{onClick:b,className:"btn btn-reset",children:n.jsx(it,{size:14})})]})}),Object.keys(i).length>0&&n.jsxs("div",{className:"distance-table",children:[n.jsx("h3",{children:"In-Degrees"}),n.jsx("div",{className:"distance-grid",children:e.vertices.map(L=>n.jsxs("div",{className:`distance-item ${w.has(L)?"visited":""} ${y===L?"current":""}`,children:[n.jsx("span",{className:"vertex-label",children:L}),n.jsx("span",{className:"distance-value",children:i[L]??"-"})]},L))})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Vertices:"}),n.jsx("span",{className:"info-value",children:e.vertex_count||e.vertices.length})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Edges:"}),n.jsx("span",{className:"info-value",children:e.edge_count||0})]}),g.length>0&&n.jsxs("div",{className:"info-item queue-display",children:[n.jsx("span",{className:"info-label",children:"Queue:"}),n.jsxs("span",{className:"info-value queue-items",children:["[",g.join(", "),"]"]})]}),r.length>0&&!d&&n.jsxs("div",{className:"info-item traversal-result",children:[n.jsx("span",{className:"info-label",children:"Order:"}),n.jsx("span",{className:"info-value",children:r.join(" → ")})]})]}),c>=0&&n.jsxs("div",{className:"current-step-box",children:[n.jsxs("strong",{children:["Step ",c+1,":"]}),n.jsx("p",{children:M()})]}),n.jsx(Be,{message:V}),P&&n.jsxs("div",{className:"warning-box",children:[n.jsx("strong",{children:"Cycle Detected!"}),n.jsx("p",{children:"Topological sort is only possible on Directed Acyclic Graphs (DAGs)."})]}),n.jsxs("div",{className:"legend",children:[n.jsx("h3",{children:"Legend"}),n.jsxs("div",{className:"legend-items",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color unvisited"}),n.jsx("span",{children:"Unprocessed"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color queued"}),n.jsx("span",{children:"In Queue (in-degree 0)"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color current"}),n.jsx("span",{children:"Current"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color visited"}),n.jsx("span",{children:"Processed"})]})]})]})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Visualization"}),n.jsx("div",{className:"graph-container",children:e.vertices.length===0?n.jsx("div",{className:"graph-empty",children:"Loading graph..."}):n.jsxs("svg",{className:"graph-svg",viewBox:"0 0 500 350",children:[e.edges.map(([L,O,R],v)=>{const $=A[L],W=A[O];if(!$||!W)return null;const Y=W.x-$.x,J=W.y-$.y,te=Math.sqrt(Y*Y+J*J),fe=Y/te,Ce=J/te,Rn=$.x+fe*25,at=$.y+Ce*25,$h=W.x-fe*30,Bh=W.y-Ce*30;return n.jsxs("g",{children:[n.jsx("defs",{children:n.jsx("marker",{id:`arrowhead-${v}`,markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:n.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#64748b"})})}),n.jsx("line",{x1:Rn,y1:at,x2:$h,y2:Bh,className:"graph-edge",markerEnd:`url(#arrowhead-${v})`})]},`edge-${v}`)}),e.vertices.map(L=>{const O=A[L];return O?n.jsxs("g",{className:C(L),children:[n.jsx("circle",{cx:O.x,cy:O.y,r:25,className:"node-circle"}),n.jsx("text",{x:O.x,y:O.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:L}),i[L]!==void 0&&n.jsxs("text",{x:O.x,y:O.y+38,className:"distance-label",dominantBaseline:"central",textAnchor:"middle",children:["in=",i[L]]})]},L):null})]})}),n.jsxs("div",{className:"algorithm-steps",children:[n.jsx("h3",{children:"Kahn's Algorithm Steps"}),n.jsx("div",{className:"steps-content",children:n.jsxs("ol",{children:[n.jsx("li",{className:c===0?"active":"",children:"Calculate in-degree for all vertices"}),n.jsx("li",{className:g.length>0?"active":"",children:"Add vertices with in-degree 0 to queue"}),n.jsx("li",{className:y?"active":"",children:"Dequeue vertex and add to result"}),n.jsx("li",{children:"Decrement in-degree of neighbors"}),n.jsx("li",{children:"Add neighbors with in-degree 0 to queue"}),n.jsx("li",{children:"Repeat until queue is empty"})]})})]})]})]}),n.jsx(ye,{dataStructure:"topological"})]})}function C1(){const[e,t]=u.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=u.useState(""),[i,a]=u.useState({}),[l,o]=u.useState({}),[c,h]=u.useState([]),[d,p]=u.useState(-1),[m,S]=u.useState(0),[w,j]=u.useState(!1),[y,f]=u.useState(!1),[g,x]=u.useState(null),[P,N]=u.useState(null),[A,E]=u.useState(!1),[V,F]=u.useState({}),{message:I,showMessage:H}=He(3e3),K=u.useRef(null),D=u.useRef(0);u.useEffect(()=>{k()},[]),u.useEffect(()=>{e.vertices.length>0&&q()},[e.vertices]);const q=u.useCallback(()=>{const J=Math.min(500,350)*.35,te={},fe=e.vertices.length;e.vertices.forEach((Ce,Rn)=>{const at=2*Math.PI*Rn/fe-Math.PI/2;te[Ce]={x:250+J*Math.cos(at),y:175+J*Math.sin(at)}}),F(te)},[e.vertices]),k=async()=>{try{const v=await ae("/api/graph");v.vertices.length===0?await z("weighted"):t(v)}catch(v){console.error("Error loading graph:",v)}},z=async v=>{try{const $=await ee(`/api/graph/preset/${v}`,{});if($.error){H($.error,"error");return}t($),M(),H(`Loaded '${v}' preset`,"success")}catch{H("Error loading preset","error")}},B=async()=>{if(!r){H("Please select a start vertex!","error");return}try{const v=await ae(`/api/graph/bellman-ford/${r}`);if(v.error){H(v.error,"error");return}a(v.distances),o(v.paths),h(v.steps),E(v.has_negative_cycle),v.has_negative_cycle?H("Negative cycle detected in graph!","error"):H("Starting Bellman-Ford algorithm...","info"),T(v.steps)}catch{H("Error running Bellman-Ford algorithm","error")}},T=v=>{K.current&&clearInterval(K.current),j(!0),f(!1),x(null),N(null),S(0),p(-1),D.current=0,K.current=setInterval(()=>{if(D.current>=v.length){clearInterval(K.current),j(!1),x(null),N(null),A||H("Bellman-Ford algorithm complete!","success");return}const $=v[D.current];p(D.current),a($.distances||{}),$.iteration&&S($.iteration),$.action==="check"?(x({from:$.from,to:$.to}),N(null)):$.action==="update"?(x({from:$.from,to:$.to}),N($.to)):$.action==="negative_cycle"?x({from:$.from,to:$.to}):(x(null),N(null)),D.current++},800)},_=()=>{y?(f(!1),b()):(f(!0),K.current&&clearInterval(K.current))},b=()=>{K.current&&clearInterval(K.current),K.current=setInterval(()=>{if(D.current>=c.length){clearInterval(K.current),j(!1),x(null),N(null);return}const v=c[D.current];p(D.current),a(v.distances||{}),v.iteration&&S(v.iteration),v.action==="check"?(x({from:v.from,to:v.to}),N(null)):v.action==="update"?(x({from:v.from,to:v.to}),N(v.to)):(x(null),N(null)),D.current++},800)},C=()=>{if(D.current>=c.length)return;const v=c[D.current];p(D.current),a(v.distances||{}),v.iteration&&S(v.iteration),v.action==="check"?(x({from:v.from,to:v.to}),N(null)):v.action==="update"?(x({from:v.from,to:v.to}),N(v.to)):(x(null),N(null)),D.current++,D.current>=c.length&&(j(!1),x(null),N(null))},M=()=>{K.current&&clearInterval(K.current),a({}),o({}),h([]),p(-1),S(0),x(null),N(null),E(!1),j(!1),f(!1),D.current=0},L=v=>P===v?"graph-node current":v===r&&!w&&Object.keys(i).length>0?"graph-node visited":"graph-node",O=(v,$)=>g&&(g.from===v&&g.to===$||g.from===$&&g.to===v)?"graph-edge checking":"graph-edge",R=()=>d>=0&&d<c.length?c[d].message:"";return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Oe,{className:"icon-sm"}),n.jsx("span",{children:"What is Bellman-Ford Algorithm?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"Bellman-Ford Algorithm"})," finds shortest paths from a source vertex, even with negative edge weights. It can also detect negative cycles."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(xe,{}),n.jsx("span",{children:"Unlike Dijkstra, it checks ALL edges V-1 times - slower but handles negative weights!"})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Time"}),n.jsx("span",{className:"op-desc",children:"V-1 iterations"}),n.jsx("span",{className:"op-complexity",children:"O(V*E)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Space"}),n.jsx("span",{className:"op-desc",children:"Distance array"}),n.jsx("span",{className:"op-complexity",children:"O(V)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Feature"}),n.jsx("span",{className:"op-desc",children:"Negative weights"}),n.jsx("span",{className:"op-complexity",children:"Supported"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"Common Uses:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Currency exchange arbitrage detection"}),n.jsx("li",{children:"Network routing (RIP protocol)"}),n.jsx("li",{children:"Graphs with negative weights"}),n.jsx("li",{children:"Detecting negative cycles"})]})]})]})]}),n.jsx(ve,{context:"Bellman-Ford shortest path algorithm with negative weight handling"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Bellman-Ford Algorithm"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Load Preset"}),n.jsxs("div",{className:"btn-group preset-group",children:[n.jsx("button",{onClick:()=>z("weighted"),className:"btn btn-preset",disabled:w,children:"Weighted"}),n.jsx("button",{onClick:()=>z("simple"),className:"btn btn-preset",disabled:w,children:"Simple"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Start Vertex"}),n.jsxs("select",{value:r,onChange:v=>s(v.target.value),className:"vertex-select full-width",disabled:w,children:[n.jsx("option",{value:"",children:"Select start"}),e.vertices.map(v=>n.jsx("option",{value:v,children:v},v))]})]}),n.jsx("div",{className:"operation-group",children:n.jsxs("div",{className:"btn-group",children:[n.jsxs("button",{onClick:B,className:"btn btn-dijkstra",disabled:w&&!y,children:[n.jsx(Ae,{size:14})," Run"]}),w&&n.jsx("button",{onClick:_,className:"btn btn-pause",children:y?n.jsx(Ae,{size:14}):n.jsx(wt,{size:14})}),y&&n.jsx("button",{onClick:C,className:"btn btn-step",children:n.jsx(St,{size:14})}),n.jsx("button",{onClick:M,className:"btn btn-reset",children:n.jsx(it,{size:14})})]})}),m>0&&n.jsx("div",{className:"info-panel",children:n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Iteration:"}),n.jsxs("span",{className:"info-value",children:[m," / ",e.vertices.length-1]})]})}),Object.keys(i).length>0&&n.jsxs("div",{className:"distance-table",children:[n.jsxs("h3",{children:["Distances from ",r]}),n.jsx("div",{className:"distance-grid",children:e.vertices.map(v=>n.jsxs("div",{className:`distance-item ${P===v?"current":""}`,children:[n.jsx("span",{className:"vertex-label",children:v}),n.jsx("span",{className:"distance-value",children:i[v]==="inf"||i[v]===null?"∞":i[v]})]},v))})]}),d>=0&&n.jsxs("div",{className:"current-step-box",children:[n.jsxs("strong",{children:["Step ",d+1,":"]}),n.jsx("p",{children:R()})]}),n.jsx(Be,{message:I}),A&&n.jsxs("div",{className:"warning-box",children:[n.jsx("strong",{children:"Negative Cycle Detected!"}),n.jsx("p",{children:"The graph contains a negative weight cycle. Shortest paths are undefined."})]}),n.jsxs("div",{className:"legend",children:[n.jsx("h3",{children:"Legend"}),n.jsxs("div",{className:"legend-items",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color unvisited"}),n.jsx("span",{children:"Unprocessed"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color current"}),n.jsx("span",{children:"Updated"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color checking"}),n.jsx("span",{children:"Checking Edge"})]})]})]})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Visualization"}),n.jsx("div",{className:"graph-container",children:e.vertices.length===0?n.jsx("div",{className:"graph-empty",children:"Loading graph..."}):n.jsxs("svg",{className:"graph-svg",viewBox:"0 0 500 350",children:[e.edges.map(([v,$,W],Y)=>{const J=V[v],te=V[$];if(!J||!te)return null;const fe=(J.x+te.x)/2,Ce=(J.y+te.y)/2;return n.jsxs("g",{children:[n.jsx("line",{x1:J.x,y1:J.y,x2:te.x,y2:te.y,className:O(v,$)}),n.jsx("circle",{cx:fe,cy:Ce,r:12,className:"weight-bg"}),n.jsx("text",{x:fe,y:Ce,className:"weight-label",dominantBaseline:"central",textAnchor:"middle",children:W})]},`edge-${Y}`)}),e.vertices.map(v=>{const $=V[v];return $?n.jsxs("g",{className:L(v),children:[n.jsx("circle",{cx:$.x,cy:$.y,r:25,className:"node-circle"}),n.jsx("text",{x:$.x,y:$.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:v}),i[v]!==void 0&&n.jsxs("text",{x:$.x,y:$.y+38,className:"distance-label",dominantBaseline:"central",textAnchor:"middle",children:["d=",i[v]==="inf"||i[v]===null?"∞":i[v]]})]},v):null})]})}),n.jsxs("div",{className:"algorithm-steps",children:[n.jsx("h3",{children:"Bellman-Ford vs Dijkstra"}),n.jsxs("div",{className:"comparison-table",children:[n.jsxs("div",{className:"comparison-row header",children:[n.jsx("span",{children:"Feature"}),n.jsx("span",{children:"Bellman-Ford"}),n.jsx("span",{children:"Dijkstra"})]}),n.jsxs("div",{className:"comparison-row",children:[n.jsx("span",{children:"Time Complexity"}),n.jsx("span",{children:"O(V*E)"}),n.jsx("span",{children:"O((V+E)logV)"})]}),n.jsxs("div",{className:"comparison-row",children:[n.jsx("span",{children:"Negative Weights"}),n.jsx("span",{className:"yes",children:"Yes"}),n.jsx("span",{className:"no",children:"No"})]}),n.jsxs("div",{className:"comparison-row",children:[n.jsx("span",{children:"Detects Neg. Cycles"}),n.jsx("span",{className:"yes",children:"Yes"}),n.jsx("span",{className:"no",children:"No"})]})]})]}),Object.keys(l).length>0&&!w&&!A&&n.jsxs("div",{className:"paths-section",children:[n.jsxs("h3",{children:["Shortest Paths from ",r]}),n.jsx("div",{className:"paths-list",children:Object.entries(l).map(([v,$])=>n.jsxs("div",{className:"path-item",children:[n.jsxs("span",{className:"path-target",children:[v,":"]}),n.jsx("span",{className:"path-route",children:$.join(" → ")}),n.jsxs("span",{className:"path-distance",children:["(dist: ",i[v]===null?"∞":i[v],")"]})]},v))})]})]})]}),n.jsx(ye,{dataStructure:"bellman-ford"})]})}function T1(){const[e,t]=u.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=u.useState([]),[i,a]=u.useState([]),[l,o]=u.useState(0),[c,h]=u.useState([]),[d,p]=u.useState([]),[m,S]=u.useState(-1),[w,j]=u.useState(!1),[y,f]=u.useState(!1),[g,x]=u.useState(null),[P,N]=u.useState({}),{message:A,showMessage:E}=He(3e3),V=u.useRef(null),F=u.useRef(0);u.useEffect(()=>{H()},[]),u.useEffect(()=>{e.vertices.length>0&&I()},[e.vertices]);const I=u.useCallback(()=>{const W=Math.min(500,350)*.35,Y={},J=e.vertices.length;e.vertices.forEach((te,fe)=>{const Ce=2*Math.PI*fe/J-Math.PI/2;Y[te]={x:250+W*Math.cos(Ce),y:175+W*Math.sin(Ce)}}),N(Y)},[e.vertices]),H=async()=>{try{const O=await ae("/api/graph");O.vertices.length===0?await K("weighted"):t(O)}catch(O){console.error("Error loading graph:",O)}},K=async O=>{try{const R=await ee(`/api/graph/preset/${O}`,{});if(R.error){E(R.error,"error");return}t(R),T(),E(`Loaded '${O}' preset`,"success")}catch{E("Error loading preset","error")}},D=async()=>{try{const O=await ae("/api/graph/kruskal");if(O.error){E(O.error,"error");return}p(O.steps);const R=O.steps.find(v=>v.action==="init");R&&h(R.edges_sorted||[]),E("Starting Kruskal's MST algorithm...","info"),q(O.steps,O.mst_edges,O.total_weight)}catch{E("Error running Kruskal's algorithm","error")}},q=(O,R,v)=>{V.current&&clearInterval(V.current),j(!0),f(!1),s([]),a([]),o(0),x(null),S(-1),F.current=0,V.current=setInterval(()=>{if(F.current>=O.length){clearInterval(V.current),j(!1),x(null),s(R),o(v),E(`MST complete! Total weight: ${v}`,"success");return}const $=O[F.current];S(F.current),s($.mst_edges||[]),o($.total_weight||0),$.action==="consider"?x({from:$.from,to:$.to,weight:$.weight}):($.action==="add"||$.action==="reject"&&a(W=>[...W,{from:$.from,to:$.to,weight:$.weight}]),x(null)),F.current++},1e3)},k=()=>{y?(f(!1),z()):(f(!0),V.current&&clearInterval(V.current))},z=()=>{V.current&&clearInterval(V.current),V.current=setInterval(()=>{if(F.current>=d.length){clearInterval(V.current),j(!1),x(null);return}const O=d[F.current];S(F.current),s(O.mst_edges||[]),o(O.total_weight||0),O.action==="consider"?x({from:O.from,to:O.to,weight:O.weight}):(O.action==="add"||O.action==="reject"&&a(R=>[...R,{from:O.from,to:O.to,weight:O.weight}]),x(null)),F.current++},1e3)},B=()=>{if(F.current>=d.length)return;const O=d[F.current];S(F.current),s(O.mst_edges||[]),o(O.total_weight||0),O.action==="consider"?x({from:O.from,to:O.to,weight:O.weight}):(O.action==="add"||O.action==="reject"&&a(R=>[...R,{from:O.from,to:O.to,weight:O.weight}]),x(null)),F.current++,F.current>=d.length&&(j(!1),x(null))},T=()=>{V.current&&clearInterval(V.current),s([]),a([]),o(0),h([]),p([]),S(-1),x(null),j(!1),f(!1),F.current=0},_=(O,R)=>r.some(([v,$])=>v===O&&$===R||v===R&&$===O),b=(O,R)=>i.some(v=>v.from===O&&v.to===R||v.from===R&&v.to===O),C=O=>r.some(([v,$])=>v===O||$===O)?"graph-node visited":"graph-node",M=(O,R)=>g&&(g.from===O&&g.to===R||g.from===R&&g.to===O)?"graph-edge considering":_(O,R)?"graph-edge mst":b(O,R)?"graph-edge rejected":"graph-edge",L=()=>m>=0&&m<d.length?d[m].message:"";return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Oe,{className:"icon-sm"}),n.jsx("span",{children:"What is Kruskal's Algorithm?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"Kruskal's Algorithm"})," builds the MST by sorting all edges by weight and adding them if they don't create a cycle (using Union-Find)."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(xe,{}),n.jsx("span",{children:"Like building a network by always picking the cheapest cable that connects new areas!"})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Time"}),n.jsx("span",{className:"op-desc",children:"Sort + Union-Find"}),n.jsx("span",{className:"op-complexity",children:"O(E log E)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Space"}),n.jsx("span",{className:"op-desc",children:"Union-Find array"}),n.jsx("span",{className:"op-complexity",children:"O(V)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Strategy"}),n.jsx("span",{className:"op-desc",children:"Global greedy"}),n.jsx("span",{className:"op-complexity",children:"Min edge"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"Kruskal vs Prim:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Better for sparse graphs (fewer edges)"}),n.jsx("li",{children:"Processes edges globally, not locally"}),n.jsx("li",{children:"Uses Union-Find for cycle detection"}),n.jsx("li",{children:"Easier to parallelize"})]})]})]})]}),n.jsx(ve,{context:"Kruskal's Minimum Spanning Tree algorithm with Union-Find"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Kruskal's MST Algorithm"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Load Preset"}),n.jsxs("div",{className:"btn-group preset-group",children:[n.jsx("button",{onClick:()=>K("weighted"),className:"btn btn-preset",disabled:w,children:"Weighted"}),n.jsx("button",{onClick:()=>K("complete"),className:"btn btn-preset",disabled:w,children:"Complete"})]})]}),n.jsx("div",{className:"operation-group",children:n.jsxs("div",{className:"btn-group",children:[n.jsxs("button",{onClick:D,className:"btn btn-mst",disabled:w&&!y,children:[n.jsx(Ae,{size:14})," Run Kruskal's"]}),w&&n.jsx("button",{onClick:k,className:"btn btn-pause",children:y?n.jsx(Ae,{size:14}):n.jsx(wt,{size:14})}),y&&n.jsx("button",{onClick:B,className:"btn btn-step",children:n.jsx(St,{size:14})}),n.jsx("button",{onClick:T,className:"btn btn-reset",children:n.jsx(it,{size:14})})]})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"MST Edges:"}),n.jsxs("span",{className:"info-value",children:[r.length," / ",e.vertices.length-1]})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Total Weight:"}),n.jsx("span",{className:"info-value mst-weight",children:l})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Rejected:"}),n.jsx("span",{className:"info-value",children:i.length})]})]}),c.length>0&&n.jsxs("div",{className:"sorted-edges-panel",children:[n.jsx("h3",{children:"Edges (sorted by weight)"}),n.jsx("div",{className:"sorted-edges-list",children:c.map(([O,R,v],$)=>{const W=_(O,R),Y=b(O,R);return n.jsxs("div",{className:`sorted-edge-item ${W?"in-mst":""} ${Y?"rejected":""}`,children:[n.jsxs("span",{children:[O,"—",R]}),n.jsxs("span",{className:"edge-weight",children:["w=",v]})]},$)})})]}),m>=0&&n.jsxs("div",{className:"current-step-box",children:[n.jsxs("strong",{children:["Step ",m+1,":"]}),n.jsx("p",{children:L()})]}),n.jsx(Be,{message:A}),n.jsxs("div",{className:"legend",children:[n.jsx("h3",{children:"Legend"}),n.jsxs("div",{className:"legend-items",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color unvisited"}),n.jsx("span",{children:"Unconnected"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color visited"}),n.jsx("span",{children:"In MST"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-line considering"}),n.jsx("span",{children:"Considering"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-line mst"}),n.jsx("span",{children:"MST Edge"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-line rejected"}),n.jsx("span",{children:"Rejected (cycle)"})]})]})]})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Visualization"}),n.jsx("div",{className:"graph-container",children:e.vertices.length===0?n.jsx("div",{className:"graph-empty",children:"Loading graph..."}):n.jsxs("svg",{className:"graph-svg",viewBox:"0 0 500 350",children:[e.edges.map(([O,R,v],$)=>{const W=P[O],Y=P[R];if(!W||!Y)return null;const J=(W.x+Y.x)/2,te=(W.y+Y.y)/2;return n.jsxs("g",{children:[n.jsx("line",{x1:W.x,y1:W.y,x2:Y.x,y2:Y.y,className:M(O,R)}),n.jsx("circle",{cx:J,cy:te,r:12,className:"weight-bg"}),n.jsx("text",{x:J,y:te,className:"weight-label",dominantBaseline:"central",textAnchor:"middle",children:v})]},`edge-${$}`)}),e.vertices.map(O=>{const R=P[O];return R?n.jsxs("g",{className:C(O),children:[n.jsx("circle",{cx:R.x,cy:R.y,r:25,className:"node-circle"}),n.jsx("text",{x:R.x,y:R.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:O})]},O):null})]})}),n.jsxs("div",{className:"algorithm-steps",children:[n.jsx("h3",{children:"Kruskal vs Prim"}),n.jsxs("div",{className:"comparison-table",children:[n.jsxs("div",{className:"comparison-row header",children:[n.jsx("span",{children:"Feature"}),n.jsx("span",{children:"Kruskal's"}),n.jsx("span",{children:"Prim's"})]}),n.jsxs("div",{className:"comparison-row",children:[n.jsx("span",{children:"Time Complexity"}),n.jsx("span",{children:"O(E log E)"}),n.jsx("span",{children:"O((V+E)logV)"})]}),n.jsxs("div",{className:"comparison-row",children:[n.jsx("span",{children:"Best for"}),n.jsx("span",{children:"Sparse graphs"}),n.jsx("span",{children:"Dense graphs"})]}),n.jsxs("div",{className:"comparison-row",children:[n.jsx("span",{children:"Data Structure"}),n.jsx("span",{children:"Union-Find"}),n.jsx("span",{children:"Priority Queue"})]}),n.jsxs("div",{className:"comparison-row",children:[n.jsx("span",{children:"Strategy"}),n.jsx("span",{children:"Global (all edges)"}),n.jsx("span",{children:"Local (neighbors)"})]})]})]}),r.length>0&&n.jsxs("div",{className:"mst-edges-section",children:[n.jsx("h3",{children:"MST Edges"}),n.jsx("div",{className:"mst-edges-list",children:r.map(([O,R,v],$)=>n.jsxs("div",{className:"mst-edge-item",children:[n.jsxs("span",{children:[O," — ",R]}),n.jsxs("span",{className:"edge-weight",children:["(w: ",v,")"]})]},$))}),n.jsx("div",{className:"mst-total",children:n.jsxs("strong",{children:["Total MST Weight: ",l]})})]})]})]}),n.jsx(ye,{dataStructure:"kruskal"})]})}function Qc(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,s=Array(t);r<t;r++)s[r]=e[r];return s}function E1(e){if(Array.isArray(e))return e}function _1(e,t,r){return(t=M1(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function L1(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var s,i,a,l,o=[],c=!0,h=!1;try{if(a=(r=r.call(e)).next,t!==0)for(;!(c=(s=a.call(r)).done)&&(o.push(s.value),o.length!==t);c=!0);}catch(d){h=!0,i=d}finally{try{if(!c&&r.return!=null&&(l=r.return(),Object(l)!==l))return}finally{if(h)throw i}}return o}}function O1(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Yc(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,s)}return r}function Xc(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Yc(Object(r),!0).forEach(function(s){_1(e,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Yc(Object(r)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(r,s))})}return e}function P1(e,t){if(e==null)return{};var r,s,i=R1(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function R1(e,t){if(e==null)return{};var r={};for(var s in e)if({}.hasOwnProperty.call(e,s)){if(t.indexOf(s)!==-1)continue;r[s]=e[s]}return r}function I1(e,t){return E1(e)||L1(e,t)||A1(e,t)||O1()}function z1(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var s=r.call(e,t);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function M1(e){var t=z1(e,"string");return typeof t=="symbol"?t:t+""}function A1(e,t){if(e){if(typeof e=="string")return Qc(e,t);var r={}.toString.call(e).slice(8,-1);return r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set"?Array.from(e):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Qc(e,t):void 0}}function F1(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Jc(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,s)}return r}function Zc(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Jc(Object(r),!0).forEach(function(s){F1(e,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Jc(Object(r)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(r,s))})}return e}function V1(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(s){return t.reduceRight(function(i,a){return a(i)},s)}}function kr(e){return function t(){for(var r=this,s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return i.length>=e.length?e.apply(this,i):function(){for(var l=arguments.length,o=new Array(l),c=0;c<l;c++)o[c]=arguments[c];return t.apply(r,[].concat(i,o))}}}function ji(e){return{}.toString.call(e).includes("Object")}function D1(e){return!Object.keys(e).length}function ns(e){return typeof e=="function"}function $1(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function B1(e,t){return ji(t)||Jn("changeType"),Object.keys(t).some(function(r){return!$1(e,r)})&&Jn("changeField"),t}function H1(e){ns(e)||Jn("selectorType")}function q1(e){ns(e)||ji(e)||Jn("handlerType"),ji(e)&&Object.values(e).some(function(t){return!ns(t)})&&Jn("handlersType")}function U1(e){e||Jn("initialIsRequired"),ji(e)||Jn("initialType"),D1(e)&&Jn("initialContent")}function K1(e,t){throw new Error(e[t]||e.default)}var W1={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},Jn=kr(K1)(W1),_s={changes:B1,selector:H1,handler:q1,initial:U1};function G1(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};_s.initial(e),_s.handler(t);var r={current:e},s=kr(X1)(r,t),i=kr(Y1)(r),a=kr(_s.changes)(e),l=kr(Q1)(r);function o(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(d){return d};return _s.selector(h),h(r.current)}function c(h){V1(s,i,a,l)(h)}return[o,c]}function Q1(e,t){return ns(t)?t(e.current):t}function Y1(e,t){return e.current=Zc(Zc({},e.current),t),t}function X1(e,t,r){return ns(t)?t(e.current):Object.keys(r).forEach(function(s){var i;return(i=t[s])===null||i===void 0?void 0:i.call(t,e.current[s])}),r}var J1={create:G1},Z1={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function e0(e){return function t(){for(var r=this,s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return i.length>=e.length?e.apply(this,i):function(){for(var l=arguments.length,o=new Array(l),c=0;c<l;c++)o[c]=arguments[c];return t.apply(r,[].concat(i,o))}}}function n0(e){return{}.toString.call(e).includes("Object")}function t0(e){return e||ed("configIsRequired"),n0(e)||ed("configType"),e.urls?(r0(),{paths:{vs:e.urls.monacoBase}}):e}function r0(){console.warn(Ph.deprecation)}function s0(e,t){throw new Error(e[t]||e.default)}var Ph={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},ed=e0(s0)(Ph),i0={config:t0},a0=function(){for(var t=arguments.length,r=new Array(t),s=0;s<t;s++)r[s]=arguments[s];return function(i){return r.reduceRight(function(a,l){return l(a)},i)}};function Rh(e,t){return Object.keys(t).forEach(function(r){t[r]instanceof Object&&e[r]&&Object.assign(t[r],Rh(e[r],t[r]))}),Xc(Xc({},e),t)}var l0={type:"cancelation",msg:"operation is manually canceled"};function fa(e){var t=!1,r=new Promise(function(s,i){e.then(function(a){return t?i(l0):s(a)}),e.catch(i)});return r.cancel=function(){return t=!0},r}var o0=["monaco"],c0=J1.create({config:Z1,isInitialized:!1,resolve:null,reject:null,monaco:null}),Ih=I1(c0,2),us=Ih[0],Fi=Ih[1];function d0(e){var t=i0.config(e),r=t.monaco,s=P1(t,o0);Fi(function(i){return{config:Rh(i.config,s),monaco:r}})}function u0(){var e=us(function(t){var r=t.monaco,s=t.isInitialized,i=t.resolve;return{monaco:r,isInitialized:s,resolve:i}});if(!e.isInitialized){if(Fi({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),fa(ma);if(window.monaco&&window.monaco.editor)return zh(window.monaco),e.resolve(window.monaco),fa(ma);a0(h0,f0)(m0)}return fa(ma)}function h0(e){return document.body.appendChild(e)}function p0(e){var t=document.createElement("script");return e&&(t.src=e),t}function f0(e){var t=us(function(s){var i=s.config,a=s.reject;return{config:i,reject:a}}),r=p0("".concat(t.config.paths.vs,"/loader.js"));return r.onload=function(){return e()},r.onerror=t.reject,r}function m0(){var e=us(function(r){var s=r.config,i=r.resolve,a=r.reject;return{config:s,resolve:i,reject:a}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(r){var s=r.m||r;zh(s),e.resolve(s)},function(r){e.reject(r)})}function zh(e){us().monaco||Fi({monaco:e})}function g0(){return us(function(e){var t=e.monaco;return t})}var ma=new Promise(function(e,t){return Fi({resolve:e,reject:t})}),Mh={config:d0,init:u0,__getMonacoInstance:g0},x0={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},ga=x0,v0={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},y0=v0;function j0({children:e}){return Je.createElement("div",{style:y0.container},e)}var N0=j0,k0=N0;function b0({width:e,height:t,isEditorReady:r,loading:s,_ref:i,className:a,wrapperProps:l}){return Je.createElement("section",{style:{...ga.wrapper,width:e,height:t},...l},!r&&Je.createElement(k0,null,s),Je.createElement("div",{ref:i,style:{...ga.fullWidth,...!r&&ga.hide},className:a}))}var w0=b0,Ah=u.memo(w0);function S0(e){u.useEffect(e,[])}var Fh=S0;function C0(e,t,r=!0){let s=u.useRef(!0);u.useEffect(s.current||!r?()=>{s.current=!1}:e,t)}var Ye=C0;function Ir(){}function qt(e,t,r,s){return T0(e,s)||E0(e,t,r,s)}function T0(e,t){return e.editor.getModel(Vh(e,t))}function E0(e,t,r,s){return e.editor.createModel(t,r,s?Vh(e,s):void 0)}function Vh(e,t){return e.Uri.parse(t)}function _0({original:e,modified:t,language:r,originalLanguage:s,modifiedLanguage:i,originalModelPath:a,modifiedModelPath:l,keepCurrentOriginalModel:o=!1,keepCurrentModifiedModel:c=!1,theme:h="light",loading:d="Loading...",options:p={},height:m="100%",width:S="100%",className:w,wrapperProps:j={},beforeMount:y=Ir,onMount:f=Ir}){let[g,x]=u.useState(!1),[P,N]=u.useState(!0),A=u.useRef(null),E=u.useRef(null),V=u.useRef(null),F=u.useRef(f),I=u.useRef(y),H=u.useRef(!1);Fh(()=>{let k=Mh.init();return k.then(z=>(E.current=z)&&N(!1)).catch(z=>(z==null?void 0:z.type)!=="cancelation"&&console.error("Monaco initialization: error:",z)),()=>A.current?q():k.cancel()}),Ye(()=>{if(A.current&&E.current){let k=A.current.getOriginalEditor(),z=qt(E.current,e||"",s||r||"text",a||"");z!==k.getModel()&&k.setModel(z)}},[a],g),Ye(()=>{if(A.current&&E.current){let k=A.current.getModifiedEditor(),z=qt(E.current,t||"",i||r||"text",l||"");z!==k.getModel()&&k.setModel(z)}},[l],g),Ye(()=>{let k=A.current.getModifiedEditor();k.getOption(E.current.editor.EditorOption.readOnly)?k.setValue(t||""):t!==k.getValue()&&(k.executeEdits("",[{range:k.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),k.pushUndoStop())},[t],g),Ye(()=>{var k,z;(z=(k=A.current)==null?void 0:k.getModel())==null||z.original.setValue(e||"")},[e],g),Ye(()=>{let{original:k,modified:z}=A.current.getModel();E.current.editor.setModelLanguage(k,s||r||"text"),E.current.editor.setModelLanguage(z,i||r||"text")},[r,s,i],g),Ye(()=>{var k;(k=E.current)==null||k.editor.setTheme(h)},[h],g),Ye(()=>{var k;(k=A.current)==null||k.updateOptions(p)},[p],g);let K=u.useCallback(()=>{var B;if(!E.current)return;I.current(E.current);let k=qt(E.current,e||"",s||r||"text",a||""),z=qt(E.current,t||"",i||r||"text",l||"");(B=A.current)==null||B.setModel({original:k,modified:z})},[r,t,i,e,s,a,l]),D=u.useCallback(()=>{var k;!H.current&&V.current&&(A.current=E.current.editor.createDiffEditor(V.current,{automaticLayout:!0,...p}),K(),(k=E.current)==null||k.editor.setTheme(h),x(!0),H.current=!0)},[p,h,K]);u.useEffect(()=>{g&&F.current(A.current,E.current)},[g]),u.useEffect(()=>{!P&&!g&&D()},[P,g,D]);function q(){var z,B,T,_;let k=(z=A.current)==null?void 0:z.getModel();o||((B=k==null?void 0:k.original)==null||B.dispose()),c||((T=k==null?void 0:k.modified)==null||T.dispose()),(_=A.current)==null||_.dispose()}return Je.createElement(Ah,{width:S,height:m,isEditorReady:g,loading:d,_ref:V,className:w,wrapperProps:j})}var L0=_0;u.memo(L0);function O0(e){let t=u.useRef();return u.useEffect(()=>{t.current=e},[e]),t.current}var P0=O0,Ls=new Map;function R0({defaultValue:e,defaultLanguage:t,defaultPath:r,value:s,language:i,path:a,theme:l="light",line:o,loading:c="Loading...",options:h={},overrideServices:d={},saveViewState:p=!0,keepCurrentModel:m=!1,width:S="100%",height:w="100%",className:j,wrapperProps:y={},beforeMount:f=Ir,onMount:g=Ir,onChange:x,onValidate:P=Ir}){let[N,A]=u.useState(!1),[E,V]=u.useState(!0),F=u.useRef(null),I=u.useRef(null),H=u.useRef(null),K=u.useRef(g),D=u.useRef(f),q=u.useRef(),k=u.useRef(s),z=P0(a),B=u.useRef(!1),T=u.useRef(!1);Fh(()=>{let C=Mh.init();return C.then(M=>(F.current=M)&&V(!1)).catch(M=>(M==null?void 0:M.type)!=="cancelation"&&console.error("Monaco initialization: error:",M)),()=>I.current?b():C.cancel()}),Ye(()=>{var M,L,O,R;let C=qt(F.current,e||s||"",t||i||"",a||r||"");C!==((M=I.current)==null?void 0:M.getModel())&&(p&&Ls.set(z,(L=I.current)==null?void 0:L.saveViewState()),(O=I.current)==null||O.setModel(C),p&&((R=I.current)==null||R.restoreViewState(Ls.get(a))))},[a],N),Ye(()=>{var C;(C=I.current)==null||C.updateOptions(h)},[h],N),Ye(()=>{!I.current||s===void 0||(I.current.getOption(F.current.editor.EditorOption.readOnly)?I.current.setValue(s):s!==I.current.getValue()&&(T.current=!0,I.current.executeEdits("",[{range:I.current.getModel().getFullModelRange(),text:s,forceMoveMarkers:!0}]),I.current.pushUndoStop(),T.current=!1))},[s],N),Ye(()=>{var M,L;let C=(M=I.current)==null?void 0:M.getModel();C&&i&&((L=F.current)==null||L.editor.setModelLanguage(C,i))},[i],N),Ye(()=>{var C;o!==void 0&&((C=I.current)==null||C.revealLine(o))},[o],N),Ye(()=>{var C;(C=F.current)==null||C.editor.setTheme(l)},[l],N);let _=u.useCallback(()=>{var C;if(!(!H.current||!F.current)&&!B.current){D.current(F.current);let M=a||r,L=qt(F.current,s||e||"",t||i||"",M||"");I.current=(C=F.current)==null?void 0:C.editor.create(H.current,{model:L,automaticLayout:!0,...h},d),p&&I.current.restoreViewState(Ls.get(M)),F.current.editor.setTheme(l),o!==void 0&&I.current.revealLine(o),A(!0),B.current=!0}},[e,t,r,s,i,a,h,d,p,l,o]);u.useEffect(()=>{N&&K.current(I.current,F.current)},[N]),u.useEffect(()=>{!E&&!N&&_()},[E,N,_]),k.current=s,u.useEffect(()=>{var C,M;N&&x&&((C=q.current)==null||C.dispose(),q.current=(M=I.current)==null?void 0:M.onDidChangeModelContent(L=>{T.current||x(I.current.getValue(),L)}))},[N,x]),u.useEffect(()=>{if(N){let C=F.current.editor.onDidChangeMarkers(M=>{var O;let L=(O=I.current.getModel())==null?void 0:O.uri;if(L&&M.find(R=>R.path===L.path)){let R=F.current.editor.getModelMarkers({resource:L});P==null||P(R)}});return()=>{C==null||C.dispose()}}return()=>{}},[N,P]);function b(){var C,M;(C=q.current)==null||C.dispose(),m?p&&Ls.set(a,I.current.saveViewState()):(M=I.current.getModel())==null||M.dispose(),I.current.dispose()}return Je.createElement(Ah,{width:S,height:w,isEditorReady:N,loading:c,_ref:H,className:j,wrapperProps:y})}var I0=R0,z0=u.memo(I0),M0=z0;const nd={python:{monacoLang:"python",defaultCode:`def solution(nums):
    # Write your solution here
    pass
`}};function A0({language:e,code:t,onChange:r,theme:s="vs-dark"}){const i=nd[e]||nd.python,a=o=>{r(o||"")},l={minimap:{enabled:!1},fontSize:14,fontFamily:"'Fira Code', 'JetBrains Mono', Consolas, monospace",fontLigatures:!0,lineNumbers:"on",roundedSelection:!0,scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,wordWrap:"on",padding:{top:16,bottom:16},suggest:{showKeywords:!0,showSnippets:!0}};return n.jsx("div",{className:"code-editor-container",children:n.jsx(M0,{height:"400px",language:i.monacoLang,value:t,theme:s,onChange:a,options:l,loading:n.jsx("div",{className:"editor-loading",children:"Loading editor..."})})})}const xa=[{id:"arrays-hashing",title:"Arrays & Hashing",icon:"grid",color:"#10b981",description:"Foundation of DSA - array manipulation and hash maps",problems:["two-sum","valid-anagram","contains-duplicate"]},{id:"two-pointers",title:"Two Pointers",icon:"pointer",color:"#3b82f6",description:"Efficient array traversal techniques",problems:["valid-palindrome","two-sum-sorted"]},{id:"stack",title:"Stack",icon:"layers",color:"#8b5cf6",description:"LIFO data structure problems",problems:["valid-parentheses","min-stack"]},{id:"binary-search",title:"Binary Search",icon:"search",color:"#f59e0b",description:"Divide and conquer search technique",problems:["binary-search","search-rotated-array"]},{id:"linked-list",title:"Linked List",icon:"link",color:"#ec4899",description:"Pointer-based data structures",problems:["reverse-linked-list","merge-two-lists","linked-list-cycle"]},{id:"trees",title:"Trees",icon:"tree",color:"#14b8a6",description:"Hierarchical data structures",problems:["invert-tree","max-depth-tree","same-tree"]},{id:"graphs",title:"Graphs",icon:"network",color:"#6366f1",description:"Graph traversal and algorithms",problems:["bfs-traversal","dfs-traversal","number-of-islands"]},{id:"dynamic-programming",title:"Dynamic Programming",icon:"puzzle",color:"#ef4444",description:"Optimization through memoization",problems:["climbing-stairs","house-robber"]},{id:"sorting",title:"Sorting",icon:"sort",color:"#84cc16",description:"Classic sorting algorithms",problems:["merge-sort","quick-sort"]}],Tt={"two-sum":{id:"two-sum",title:"Two Sum",difficulty:"Easy",category:"Arrays & Hashing",description:"Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\n\nYou can return the answer in any order.",examples:[{input:"nums = [2,7,11,15], target = 9",output:"[0,1]",explanation:"Because nums[0] + nums[1] == 9, we return [0, 1]."},{input:"nums = [3,2,4], target = 6",output:"[1,2]",explanation:"Because nums[1] + nums[2] == 6, we return [1, 2]."}],constraints:["2 <= nums.length <= 10^4","-10^9 <= nums[i] <= 10^9","Only one valid answer exists."],testCases:[{input:"[2,7,11,15], 9",expected:"[0, 1]"},{input:"[3,2,4], 6",expected:"[1, 2]"},{input:"[3,3], 6",expected:"[0, 1]"}],starterCode:{python:`def solution(nums, target):
    # Use a hash map for O(n) time complexity
    pass

# Test
print(solution([2,7,11,15], 9))`},solutions:{optimal:{name:"Hash Map (Optimal)",timeComplexity:"O(n)",spaceComplexity:"O(n)",description:"Use a hash map to store seen numbers and their indices. For each number, check if complement exists.",code:`def solution(nums, target):
    # Hash map: number -> index
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []

# Test
print(solution([2,7,11,15], 9))`},bruteForce:{name:"Brute Force",timeComplexity:"O(n²)",spaceComplexity:"O(1)",description:"Check every pair of numbers to see if they sum to target.",code:`def solution(nums, target):
    # Check all pairs
    n = len(nums)
    for i in range(n):
        for j in range(i + 1, n):
            if nums[i] + nums[j] == target:
                return [i, j]
    return []

# Test
print(solution([2,7,11,15], 9))`},sorting:{name:"Sorting + Two Pointers",timeComplexity:"O(n log n)",spaceComplexity:"O(n)",description:"Sort with indices, then use two pointers. Note: need to track original indices.",code:`def solution(nums, target):
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
print(solution([2,7,11,15], 9))`}},hints:["A brute force approach is O(n²). Can you do better with a hash map?","For each number, check if (target - number) exists in the hash map.","Store each number and its index as you iterate."]},"valid-anagram":{id:"valid-anagram",title:"Valid Anagram",difficulty:"Easy",category:"Arrays & Hashing",description:"Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.\n\nAn anagram is a word formed by rearranging the letters of another word.",examples:[{input:'s = "anagram", t = "nagaram"',output:"true",explanation:"Both contain the same letters."},{input:'s = "rat", t = "car"',output:"false",explanation:"Different letters."}],constraints:["1 <= s.length, t.length <= 5 * 10^4","s and t consist of lowercase English letters."],testCases:[{input:'"anagram", "nagaram"',expected:"True"},{input:'"rat", "car"',expected:"False"}],starterCode:{python:`def solution(s, t):
    # Count character frequencies
    pass

print(solution("anagram", "nagaram"))`},solutions:{optimal:{name:"Hash Map Counter",timeComplexity:"O(n)",spaceComplexity:"O(1)",description:"Count character frequencies using a hash map. Space is O(1) since alphabet is fixed (26 letters).",code:`def solution(s, t):
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

print(solution("anagram", "nagaram"))`},sorting:{name:"Sorting",timeComplexity:"O(n log n)",spaceComplexity:"O(n)",description:"Sort both strings and compare. Simple but slower.",code:`def solution(s, t):
    return sorted(s) == sorted(t)

print(solution("anagram", "nagaram"))`},arrayCounter:{name:"Array Counter (26 letters)",timeComplexity:"O(n)",spaceComplexity:"O(1)",description:"Use a fixed-size array of 26 for lowercase letters.",code:`def solution(s, t):
    if len(s) != len(t):
        return False

    # Use array for 26 lowercase letters
    count = [0] * 26

    for i in range(len(s)):
        count[ord(s[i]) - ord('a')] += 1
        count[ord(t[i]) - ord('a')] -= 1

    return all(c == 0 for c in count)

print(solution("anagram", "nagaram"))`}},hints:["Compare character frequencies in both strings.","You can use a hash map or sort both strings."]},"contains-duplicate":{id:"contains-duplicate",title:"Contains Duplicate",difficulty:"Easy",category:"Arrays & Hashing",description:"Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.",examples:[{input:"nums = [1,2,3,1]",output:"true",explanation:"1 appears twice."},{input:"nums = [1,2,3,4]",output:"false",explanation:"All elements are distinct."}],constraints:["1 <= nums.length <= 10^5","-10^9 <= nums[i] <= 10^9"],testCases:[{input:"[1,2,3,1]",expected:"True"},{input:"[1,2,3,4]",expected:"False"}],starterCode:{python:`def solution(nums):
    # Use a set for O(n) lookup
    pass

print(solution([1,2,3,1]))`},solutions:{optimal:{name:"Hash Set",timeComplexity:"O(n)",spaceComplexity:"O(n)",description:"Use a set to track seen numbers. Return true if we see a duplicate.",code:`def solution(nums):
    seen = set()
    for num in nums:
        if num in seen:
            return True
        seen.add(num)
    return False

print(solution([1,2,3,1]))`},setLength:{name:"Set Length Comparison",timeComplexity:"O(n)",spaceComplexity:"O(n)",description:"Compare length of set vs original array. One-liner approach.",code:`def solution(nums):
    return len(nums) != len(set(nums))

print(solution([1,2,3,1]))`},sorting:{name:"Sorting",timeComplexity:"O(n log n)",spaceComplexity:"O(1)",description:"Sort the array, then check adjacent elements for duplicates.",code:`def solution(nums):
    nums.sort()
    for i in range(1, len(nums)):
        if nums[i] == nums[i - 1]:
            return True
    return False

print(solution([1,2,3,1]))`},bruteForce:{name:"Brute Force",timeComplexity:"O(n²)",spaceComplexity:"O(1)",description:"Compare each element with every other element.",code:`def solution(nums):
    n = len(nums)
    for i in range(n):
        for j in range(i + 1, n):
            if nums[i] == nums[j]:
                return True
    return False

print(solution([1,2,3,1]))`}},hints:["A set only stores unique values.","Compare the length of the set vs the original array."]},"valid-palindrome":{id:"valid-palindrome",title:"Valid Palindrome",difficulty:"Easy",category:"Two Pointers",description:"Given a string `s`, return `true` if it is a palindrome, or `false` otherwise.\n\nConsider only alphanumeric characters and ignore cases.",examples:[{input:'s = "A man, a plan, a canal: Panama"',output:"true",explanation:'"amanaplanacanalpanama" is a palindrome.'},{input:'s = "race a car"',output:"false",explanation:'"raceacar" is not a palindrome.'}],constraints:["1 <= s.length <= 2 * 10^5","s consists only of printable ASCII characters."],testCases:[{input:'"A man, a plan, a canal: Panama"',expected:"True"},{input:'"race a car"',expected:"False"}],starterCode:{python:`def solution(s):
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

print(solution([2,7,11,15], 9))`}},hints:["Since array is sorted, use two pointers.","If sum < target, move left pointer. If sum > target, move right pointer."]},"valid-parentheses":{id:"valid-parentheses",title:"Valid Parentheses",difficulty:"Easy",category:"Stack",description:`Given a string containing just '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

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

print(solution("()[]{}"))`}},hints:["Push opening brackets onto stack.","For closing brackets, check if it matches top of stack.","Stack should be empty at the end."]},"min-stack":{id:"min-stack",title:"Min Stack",difficulty:"Medium",category:"Stack",description:"Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.",examples:[{input:"push(-2), push(0), push(-3), getMin(), pop(), top(), getMin()",output:"-3, 0, -2",explanation:"Track min at each level."}],constraints:["Methods will be called at most 3 * 10^4 times."],testCases:[{input:"[[-2],[0],[-3],[],[],[],[]]",expected:"[-3, 0, -2]"}],starterCode:{python:`class MinStack:
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
print(s.getMin())  # -2`}},hints:["Use two stacks - one for values, one for minimums.","Or store (value, currentMin) pairs in a single stack."]},"binary-search":{id:"binary-search",title:"Binary Search",difficulty:"Easy",category:"Binary Search",description:`Given a sorted array and a target, return the index if found, else -1.

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

print(solution([4,5,6,7,0,1,2], 0))`}},hints:["One half is always sorted.","Check which half is sorted, then decide which half to search."]},"reverse-linked-list":{id:"reverse-linked-list",title:"Reverse Linked List",difficulty:"Easy",category:"Linked List",description:"Given the head of a singly linked list, reverse it and return the reversed list.",examples:[{input:"head = [1,2,3,4,5]",output:"[5,4,3,2,1]",explanation:"Reversed."}],constraints:["0 <= Number of nodes <= 5000"],testCases:[{input:"[1,2,3,4,5]",expected:"[5, 4, 3, 2, 1]"},{input:"[1,2]",expected:"[2, 1]"}],starterCode:{python:`class ListNode:
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
print(solution(head))`}},hints:["Use slow (1 step) and fast (2 steps) pointers.","If they meet, there's a cycle.","If fast reaches null, no cycle."]},"invert-tree":{id:"invert-tree",title:"Invert Binary Tree",difficulty:"Easy",category:"Trees",description:"Invert a binary tree (swap left and right children at every node).",examples:[{input:"root = [4,2,7,1,3,6,9]",output:"[4,7,2,9,6,3,1]",explanation:"Mirror image."}],constraints:["0 <= Number of nodes <= 100"],testCases:[{input:"[4,2,7,1,3,6,9]",expected:"[4, 7, 2, 9, 6, 3, 1]"}],starterCode:{python:`class TreeNode:
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
print(solution(p, q))`}},hints:["Both null = same.","One null = different.","Compare values, then recurse on children."]},"bfs-traversal":{id:"bfs-traversal",title:"BFS Graph Traversal",difficulty:"Medium",category:"Graphs",description:"Implement BFS traversal on a graph (adjacency list). Return visit order.",examples:[{input:"graph = {0: [1,2], 1: [2], 2: [0,3], 3: []}, start = 2",output:"[2, 0, 3, 1]",explanation:"Level by level."}],constraints:["Graph may contain cycles."],testCases:[{input:"{0: [1,2], 1: [2], 2: [0,3], 3: [3]}, 2",expected:"[2, 0, 3, 1]"}],starterCode:{python:`from collections import deque

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
print(solution(grid))`}},hints:["Iterate through grid.",'When you find "1", increment count and flood-fill (DFS/BFS) to mark all connected land.']},"climbing-stairs":{id:"climbing-stairs",title:"Climbing Stairs",difficulty:"Easy",category:"Dynamic Programming",description:"You can climb 1 or 2 steps at a time. How many distinct ways to reach step n?",examples:[{input:"n = 3",output:"3",explanation:"1+1+1, 1+2, 2+1"}],constraints:["1 <= n <= 45"],testCases:[{input:"2",expected:"2"},{input:"3",expected:"3"}],starterCode:{python:`def solution(n):
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

print(solution([1,2,3,1]))`}},hints:["At each house: rob it or skip it.","Rob: nums[i] + dp[i-2]","Skip: dp[i-1]","Take the max."]},"merge-sort":{id:"merge-sort",title:"Merge Sort",difficulty:"Medium",category:"Sorting",description:"Implement merge sort. Divide array, sort halves, merge.",examples:[{input:"nums = [5,2,3,1]",output:"[1,2,3,5]",explanation:"Sorted."}],constraints:["1 <= nums.length <= 5 * 10^4"],testCases:[{input:"[5,2,3,1]",expected:"[1, 2, 3, 5]"}],starterCode:{python:`def solution(nums):
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

print(solution([3,6,8,10,1,2,1]))`}},hints:["Pick a pivot (last element is common).","Partition: smaller left, larger right.","Recurse on both partitions."]}},Dh=Object.values(Tt);[...new Set(Dh.map(e=>e.category))];const va={grid:Dg,pointer:Wg,layers:Rr,search:cs,link:es,tree:Xt,network:gl,puzzle:Qg,sort:Cg};function td(){const{problemId:e}=Qm(),t=kh(),[r,s]=u.useState(null),[i,a]=u.useState("python"),[l,o]=u.useState(""),[c,h]=u.useState(!1),[d,p]=u.useState(null),[m,S]=u.useState(null),[w,j]=u.useState(!1),[y,f]=u.useState(0),[g,x]=u.useState("description"),[P,N]=u.useState(!e),[A,E]=u.useState(()=>{const C=localStorage.getItem("completedProblems");return C?JSON.parse(C):[]}),[V,F]=u.useState(null),[I,H]=u.useState("map"),[K,D]=u.useState(null),[q,k]=u.useState(null);u.useEffect(()=>{localStorage.setItem("completedProblems",JSON.stringify(A))},[A]),u.useEffect(()=>{if(e&&Tt[e]){const C=Tt[e];s(C),o(C.starterCode[i]||C.starterCode.python),p(null),S(null),j(!1),f(0),N(!1)}else e||N(!0)},[e]),u.useEffect(()=>{r&&o(r.starterCode[i]||r.starterCode.python)},[i,r]);const z=C=>{A.includes(C)||E([...A,C])},B=async()=>{h(!0),p(null),S(null);try{const M=await(await fetch("/api/practice/execute",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({language:i,code:l})})).json();p({stdout:M.output||"",stderr:M.error||"",success:M.success})}catch(C){p({stdout:"",stderr:`Error: ${C.message}`,success:!1})}finally{h(!1)}},T=async()=>{if(r){h(!0),p(null),S(null);try{const M=await(await fetch("/api/practice/run-tests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({language:i,code:l,testCases:r.testCases,functionName:"solution"})})).json();S(M),M.allPassed&&z(r.id)}catch(C){p({stdout:"",stderr:`Error running tests: ${C.message}`,success:!1})}finally{h(!1)}}},_=()=>{r&&(o(r.starterCode[i]||r.starterCode.python),p(null),S(null))},b=()=>{r&&y<r.hints.length&&(j(!0),f(C=>Math.min(C+1,r.hints.length)))};if(P){const C=Dh.length,M=A.length,L=Math.round(M/C*100);return n.jsx("div",{className:"practice-container",children:n.jsxs("div",{className:"roadmap-page",children:[n.jsxs("div",{className:"roadmap-header",children:[n.jsxs("div",{className:"roadmap-title",children:[n.jsx(Wc,{size:32}),n.jsxs("div",{children:[n.jsx("h1",{children:"DSA Roadmap"}),n.jsx("p",{children:"Master data structures and algorithms step by step"})]})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[n.jsxs("div",{className:"view-toggle",children:[n.jsxs("button",{className:`view-toggle-btn ${I==="map"?"active":""}`,onClick:()=>H("map"),children:[n.jsx(Hg,{size:16}),"Map"]}),n.jsxs("button",{className:`view-toggle-btn ${I==="list"?"active":""}`,onClick:()=>H("list"),children:[n.jsx(Ug,{size:16}),"List"]})]}),n.jsxs("div",{className:"progress-stats",children:[n.jsxs("div",{className:"progress-circle",children:[n.jsxs("svg",{viewBox:"0 0 36 36",children:[n.jsx("path",{className:"progress-bg",d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"}),n.jsx("path",{className:"progress-fill",strokeDasharray:`${L}, 100`,d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"})]}),n.jsxs("span",{className:"progress-text",children:[L,"%"]})]}),n.jsxs("div",{className:"progress-info",children:[n.jsxs("span",{className:"completed-count",children:[M,"/",C]}),n.jsx("span",{className:"completed-label",children:"Problems Solved"})]})]})]})]}),I==="map"&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"roadmap-visual-map",children:xa.map(O=>{const R=O.problems.map(Y=>Tt[Y]).filter(Boolean),v=R.filter(Y=>A.includes(Y.id)).length,$=Math.round(v/R.length*100),W=V===O.id;return n.jsxs("div",{className:`map-node ${W?"active":""}`,style:{"--node-color":O.color},onClick:()=>F(W?null:O.id),children:[v===R.length?n.jsx("div",{className:"map-node-badge completed",children:n.jsx(Ie,{size:14})}):v>0?n.jsx("div",{className:"map-node-badge in-progress",children:v}):null,n.jsxs("div",{className:"map-node-header",children:[n.jsx("span",{className:"map-node-icon",children:(()=>{const Y=va[O.icon];return Y?n.jsx(Y,{size:20}):null})()}),n.jsx("span",{className:"map-node-title",children:O.title})]}),n.jsx("p",{className:"map-node-description",children:O.description}),n.jsxs("div",{className:"map-node-progress",children:[n.jsx("div",{className:"map-node-progress-bar",children:n.jsx("div",{className:"map-node-progress-fill",style:{width:`${$}%`}})}),n.jsxs("span",{className:"map-node-progress-text",children:[v,"/",R.length]})]})]},O.id)})}),V&&n.jsx("div",{className:"expanded-section",children:(()=>{const O=xa.find(v=>v.id===V),R=O.problems.map(v=>Tt[v]).filter(Boolean);return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"expanded-section-header",children:[n.jsxs("div",{className:"expanded-section-title",children:[n.jsx("span",{className:"section-icon-wrapper",children:(()=>{const v=va[O.icon];return v?n.jsx(v,{size:24}):null})()}),n.jsx("h3",{children:O.title})]}),n.jsx("button",{className:"close-section-btn",onClick:v=>{v.stopPropagation(),F(null)},children:n.jsx(Oh,{size:16})})]}),n.jsx("div",{className:"problem-grid",children:R.map(v=>{const $=A.includes(v.id);return n.jsxs("div",{className:`problem-item ${$?"completed":""}`,onClick:()=>t(`/practice/${v.id}`),children:[n.jsx("div",{className:`problem-status-icon ${$?"done":"pending"}`,children:$?n.jsx(Ie,{size:16}):n.jsx(qs,{size:16})}),n.jsxs("div",{className:"problem-item-info",children:[n.jsx("div",{className:"problem-item-title",children:v.title}),n.jsx("div",{className:"problem-item-meta",children:n.jsx("span",{className:`problem-item-difficulty ${v.difficulty.toLowerCase()}`,children:v.difficulty})})]}),n.jsx(Hs,{size:16,className:"problem-item-arrow"})]},v.id)})})]})})()})]}),I==="list"&&n.jsx("div",{className:"roadmap-container",children:xa.map((O,R)=>{const v=O.problems.map(W=>Tt[W]).filter(Boolean),$=v.filter(W=>A.includes(W.id)).length;return n.jsxs("div",{className:"roadmap-section",children:[R>0&&n.jsx("div",{className:"roadmap-connector"}),n.jsxs("div",{className:"section-card",style:{"--section-color":O.color},children:[n.jsxs("div",{className:"section-header",children:[n.jsx("span",{className:"section-icon",children:(()=>{const W=va[O.icon];return W?n.jsx(W,{size:24}):null})()}),n.jsxs("div",{className:"section-info",children:[n.jsx("h2",{children:O.title}),n.jsx("p",{children:O.description})]}),n.jsx("div",{className:"section-progress",children:n.jsxs("span",{children:[$,"/",v.length]})})]}),n.jsx("div",{className:"section-problems",children:v.map((W,Y)=>{const J=A.includes(W.id);return n.jsxs("div",{className:`problem-node ${J?"completed":""}`,onClick:()=>t(`/practice/${W.id}`),children:[Y>0&&n.jsx("div",{className:"node-connector"}),n.jsx("div",{className:"node-circle",children:J?n.jsx(Ie,{size:16}):n.jsx("span",{className:"node-number",children:Y+1})}),n.jsxs("div",{className:"node-info",children:[n.jsx("span",{className:"node-title",children:W.title}),n.jsx("span",{className:`node-difficulty ${W.difficulty.toLowerCase()}`,children:W.difficulty})]}),n.jsx(Hs,{size:16,className:"node-arrow"})]},W.id)})})]})]},O.id)})})]})})}return r?n.jsx("div",{className:"practice-container",children:n.jsxs("div",{className:"practice-layout",children:[n.jsxs("div",{className:"problem-panel",children:[n.jsxs("div",{className:"problem-header",children:[n.jsxs("button",{className:"back-btn",onClick:()=>N(!0),children:[n.jsx(Wc,{size:16})," Roadmap"]}),n.jsx("h1",{children:r.title}),n.jsx("span",{className:`difficulty ${r.difficulty.toLowerCase()}`,children:r.difficulty}),A.includes(r.id)&&n.jsxs("span",{className:"solved-badge",children:[n.jsx(Ie,{size:14})," Solved"]})]}),n.jsxs("div",{className:"problem-tabs",children:[n.jsx("button",{className:g==="description"?"active":"",onClick:()=>x("description"),children:"Description"}),n.jsx("button",{className:g==="hints"?"active":"",onClick:()=>x("hints"),children:"Hints"}),n.jsxs("button",{className:g==="solutions"?"active":"",onClick:()=>x("solutions"),children:[n.jsx(gi,{size:14}),"Solutions"]})]}),n.jsxs("div",{className:"problem-content",children:[g==="description"&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"description",children:r.description.split(`
`).map((C,M)=>n.jsx("p",{children:C},M))}),n.jsxs("div",{className:"examples",children:[n.jsx("h3",{children:"Examples"}),r.examples.map((C,M)=>n.jsxs("div",{className:"example",children:[n.jsxs("div",{className:"example-label",children:["Example ",M+1,":"]}),n.jsxs("div",{className:"example-content",children:[n.jsxs("div",{children:[n.jsx("strong",{children:"Input:"})," ",n.jsx("code",{children:C.input})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Output:"})," ",n.jsx("code",{children:C.output})]}),C.explanation&&n.jsxs("div",{children:[n.jsx("strong",{children:"Explanation:"})," ",C.explanation]})]})]},M))]}),n.jsxs("div",{className:"constraints",children:[n.jsx("h3",{children:"Constraints"}),n.jsx("ul",{children:r.constraints.map((C,M)=>n.jsx("li",{children:n.jsx("code",{children:C})},M))})]})]}),g==="hints"&&n.jsxs("div",{className:"hints-section",children:[n.jsxs("div",{className:"hints-header",children:[n.jsx(xe,{size:20}),n.jsx("span",{children:"Need help? Reveal hints one at a time."})]}),r.hints.slice(0,y).map((C,M)=>n.jsxs("div",{className:"hint",children:[n.jsxs("span",{className:"hint-number",children:["Hint ",M+1,":"]}),C]},M)),y<r.hints.length&&n.jsxs("button",{className:"reveal-hint-btn",onClick:b,children:[n.jsx(xe,{size:14}),"Reveal Hint ",y+1]}),y>=r.hints.length&&n.jsx("div",{className:"all-hints-shown",children:"All hints revealed!"})]}),g==="solutions"&&r.solutions&&n.jsxs("div",{className:"solutions-section",children:[n.jsxs("div",{className:"solutions-header",children:[n.jsx(gi,{size:20}),n.jsx("span",{children:"Multiple approaches with different time/space complexities"})]}),n.jsx("div",{className:"solutions-list",children:Object.entries(r.solutions).map(([C,M])=>{const L=K===C,O=q===C;return n.jsxs("div",{className:`solution-card ${L?"expanded":""}`,children:[n.jsxs("div",{className:"solution-card-header",onClick:()=>D(L?null:C),children:[n.jsxs("div",{className:"solution-info",children:[n.jsx("h4",{className:"solution-name",children:M.name}),n.jsxs("div",{className:"solution-complexity",children:[n.jsxs("span",{className:"complexity-badge time",children:[n.jsx(Th,{size:12}),M.timeComplexity]}),n.jsxs("span",{className:"complexity-badge space",children:[n.jsx(xi,{size:12}),M.spaceComplexity]})]})]}),n.jsx(Hs,{size:18,className:`solution-expand-icon ${L?"rotated":""}`})]}),L&&n.jsxs("div",{className:"solution-card-body",children:[n.jsx("p",{className:"solution-description",children:M.description}),n.jsxs("div",{className:"solution-code-container",children:[n.jsxs("div",{className:"solution-code-header",children:[n.jsx("span",{children:"Python"}),n.jsx("button",{className:"copy-solution-btn",onClick:R=>{R.stopPropagation(),navigator.clipboard.writeText(M.code),k(C),setTimeout(()=>k(null),2e3)},children:O?n.jsxs(n.Fragment,{children:[n.jsx(Rg,{size:14}),"Copied!"]}):n.jsxs(n.Fragment,{children:[n.jsx(Eh,{size:14}),"Copy"]})})]}),n.jsx("pre",{className:"solution-code",children:n.jsx("code",{children:M.code})})]}),n.jsxs("button",{className:"use-solution-btn",onClick:R=>{R.stopPropagation(),o(M.code),x("description")},children:[n.jsx(qs,{size:14}),"Use This Solution"]})]})]},C)})})]})]})]}),n.jsxs("div",{className:"editor-panel",children:[n.jsxs("div",{className:"editor-header",children:[n.jsxs("div",{className:"language-selector",children:[n.jsx(qs,{size:16}),n.jsx("span",{className:"language-label",children:"Python"})]}),n.jsx("div",{className:"editor-actions",children:n.jsx("button",{className:"btn btn-reset",onClick:_,disabled:c,title:"Reset code",children:n.jsx(it,{size:14})})})]}),n.jsx(A0,{language:i,code:l,onChange:o}),n.jsxs("div",{className:"run-actions",children:[n.jsxs("button",{className:"btn btn-run",onClick:B,disabled:c,children:[n.jsx(Ae,{size:14}),c?"Running...":"Run Code"]}),n.jsxs("button",{className:"btn btn-submit",onClick:T,disabled:c,children:[n.jsx(Ie,{size:14}),c?"Testing...":"Submit"]})]}),n.jsxs("div",{className:"output-panel",children:[n.jsxs("div",{className:"output-header",children:[n.jsx("span",{children:"Output"}),d&&n.jsx("span",{className:`status ${d.success?"success":"error"}`,children:d.success?"Success":"Error"})]}),n.jsxs("div",{className:"output-content",children:[!d&&!m&&n.jsx("div",{className:"output-placeholder",children:"Run your code to see output here..."}),d&&n.jsxs(n.Fragment,{children:[d.stdout&&n.jsxs("div",{className:"stdout",children:[n.jsx("div",{className:"output-label",children:"stdout:"}),n.jsx("pre",{children:d.stdout})]}),d.stderr&&n.jsxs("div",{className:"stderr",children:[n.jsx("div",{className:"output-label",children:"stderr:"}),n.jsx("pre",{children:d.stderr})]})]}),m&&n.jsxs("div",{className:"test-results",children:[n.jsx("div",{className:"test-summary",children:n.jsx("span",{className:m.allPassed?"all-passed":"some-failed",children:m.allPassed?n.jsxs(n.Fragment,{children:[n.jsx(Ie,{size:16})," All tests passed!"]}):n.jsxs(n.Fragment,{children:[n.jsx(Gc,{size:16})," ",m.summary.passed,"/",m.summary.total," tests passed"]})})}),n.jsx("div",{className:"test-cases",children:m.results.map((C,M)=>n.jsxs("div",{className:`test-case ${C.passed?"passed":"failed"}`,children:[n.jsxs("div",{className:"test-case-header",children:[C.passed?n.jsx(Ie,{size:14}):n.jsx(Gc,{size:14}),n.jsxs("span",{children:["Test Case ",C.testCase]})]}),n.jsxs("div",{className:"test-case-details",children:[n.jsxs("div",{children:[n.jsx("strong",{children:"Input:"})," ",n.jsx("code",{children:C.input})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Expected:"})," ",n.jsx("code",{children:C.expected})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Actual:"})," ",n.jsx("code",{children:C.actual||"(empty)"})]}),C.error&&n.jsxs("div",{className:"test-error",children:[n.jsx("strong",{children:"Error:"})," ",C.error]})]})]},M))})]})]})]})]})]})}):n.jsx("div",{className:"practice-container",children:n.jsx("div",{className:"loading",children:"Loading problem..."})})}function F0(){return n.jsxs("div",{className:"homepage-body",children:[n.jsx(rx,{}),n.jsxs("main",{className:"main-content",children:[n.jsxs(ug,{children:[n.jsx(ie,{path:"/",element:n.jsx(ix,{})}),n.jsx(ie,{path:"/algorithms",element:n.jsx(ax,{})}),n.jsx(ie,{path:"/contact",element:n.jsx(lx,{})}),n.jsx(ie,{path:"/contributions",element:n.jsx(ox,{})}),n.jsx(ie,{path:"/stack",element:n.jsx(uv,{})}),n.jsx(ie,{path:"/queue",element:n.jsx(hv,{})}),n.jsx(ie,{path:"/linkedlist",element:n.jsx(pv,{})}),n.jsx(ie,{path:"/hashtable_linear",element:n.jsx(fv,{})}),n.jsx(ie,{path:"/hashtable_quadratic",element:n.jsx(wv,{})}),n.jsx(ie,{path:"/hashtable_chaining",element:n.jsx(bv,{})}),n.jsx(ie,{path:"/binarytree",element:n.jsx(Ov,{})}),n.jsx(ie,{path:"/bst",element:n.jsx(Zj,{})}),n.jsx(ie,{path:"/avl",element:n.jsx(i1,{})}),n.jsx(ie,{path:"/splay",element:n.jsx(d1,{})}),n.jsx(ie,{path:"/minheap",element:n.jsx(f1,{})}),n.jsx(ie,{path:"/maxheap",element:n.jsx(v1,{})}),n.jsx(ie,{path:"/adjacency-list",element:n.jsx(y1,{})}),n.jsx(ie,{path:"/adjacency-matrix",element:n.jsx(j1,{})}),n.jsx(ie,{path:"/bfs",element:n.jsx(N1,{})}),n.jsx(ie,{path:"/dfs",element:n.jsx(k1,{})}),n.jsx(ie,{path:"/dijkstra",element:n.jsx(b1,{})}),n.jsx(ie,{path:"/bellman-ford",element:n.jsx(C1,{})}),n.jsx(ie,{path:"/prim-mst",element:n.jsx(w1,{})}),n.jsx(ie,{path:"/kruskal-mst",element:n.jsx(T1,{})}),n.jsx(ie,{path:"/topological-sort",element:n.jsx(S1,{})}),n.jsx(ie,{path:"/practice",element:n.jsx(td,{})}),n.jsx(ie,{path:"/practice/:problemId",element:n.jsx(td,{})})]}),n.jsx(sx,{})]})]})}ya.createRoot(document.getElementById("root")).render(n.jsx(Je.StrictMode,{children:n.jsx(vg,{children:n.jsx(F0,{})})}));
